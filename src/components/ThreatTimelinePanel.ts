import * as d3 from 'd3';
import { Panel } from './Panel';
import { fetchServerInsights, getServerInsights, type ServerInsights } from '@/services/insights-loader';
import { escapeHtml, sanitizeUrl, unsafeRawHtml } from '@/utils/sanitize';
import type { ClusteredEvent } from '@/types';
import { t } from '@/services/i18n';
import {
  THREAT_LEVELS,
  THREAT_LEVEL_COLORS,
  buildThreatTimelineState,
  countHighSeverityDays,
  describeThreatTimelineTrend,
  normalizeClusterStories,
  normalizeServerInsightStories,
  type ThreatTimelineDay,
  type ThreatTimelineGroup,
  type ThreatTimelineItem,
  type ThreatTimelineState,
  type TimelineThreatLevel,
} from './threat-timeline-utils';

const STACK_LEVELS = [...THREAT_LEVELS].reverse() as TimelineThreatLevel[];

interface StackRow {
  key: string;
  label: string;
  labelLines: [string, string];
  critical: number;
  high: number;
  medium: number;
  low: number;
  info: number;
}

export class ThreatTimelinePanel extends Panel {
  private lastClusters: ClusteredEvent[] = [];

  constructor() {
    super({
      id: 'threat-timeline',
      title: t('components.threatTimeline.title'),
      showCount: false,
      infoTooltip: t('components.threatTimeline.infoTooltip'),
      defaultRowSpan: 2,
    });

    this.renderEmpty(t('components.threatTimeline.waiting'));
  }

  public async refresh(fallbackClusters?: ClusteredEvent[]): Promise<void> {
    if (fallbackClusters) {
      this.lastClusters = fallbackClusters;
    }

    try {
      const serverInsights = getServerInsights() ?? await fetchServerInsights();
      if (serverInsights) {
        this.updateFromServerInsights(serverInsights);
        return;
      }
    } catch (err) {
      console.warn('[ThreatTimeline] insight refresh failed, falling back to clusters:', err);
    }

    this.updateFromClusters(
      this.lastClusters,
      'degraded',
      t('components.threatTimeline.snapshotUnavailable'),
    );
  }

  public updateFromServerInsights(insights: ServerInsights): void {
    const items = normalizeServerInsightStories(insights);
    const state = buildThreatTimelineState(items, {
      status: insights.status,
      statusMessage: insights.status === 'degraded' ? t('components.threatTimeline.degradedSnapshot') : '',
    });
    this.renderState(state, t('components.threatTimeline.insightsSnapshot'));
  }

  public updateFromClusters(
    clusters: ClusteredEvent[],
    status: 'ok' | 'degraded' = 'ok',
    statusMessage = '',
  ): void {
    this.lastClusters = clusters;
    const items = normalizeClusterStories(clusters);
    const state = buildThreatTimelineState(items, { status, statusMessage });
    this.renderState(state, status === 'ok'
      ? t('components.threatTimeline.liveClusters')
      : t('components.threatTimeline.clusterFallback'));
  }

  private renderState(state: ThreatTimelineState, sourceLabel: string): void {
    this.setCount(state.items.length);
    if (!state.hasData) {
      const message = state.status === 'degraded'
        ? t('components.threatTimeline.noRecentSnapshot')
        : t('components.threatTimeline.noRecentSevenDays');
      this.renderEmpty(message, state.degradedReasons);
      return;
    }

    const highSeverityCount = state.totals.critical + state.totals.high;
    const highSeverityDays = countHighSeverityDays(state);
    const trend = describeThreatTimelineTrend(state.days);
    const recentHighSeverity = state.days.slice(-3)
      .reduce((sum, day) => sum + day.counts.critical + day.counts.high, 0);
    const earlierHighSeverity = state.days.slice(0, 3)
      .reduce((sum, day) => sum + day.counts.critical + day.counts.high, 0);
    const trendLabel = t(`components.threatTimeline.${trend.className}`);
    const trendCopy = trend.className === 'quiet'
      ? t('components.threatTimeline.quietCopy')
      : t('components.threatTimeline.recentVsEarlier', {
        recent: recentHighSeverity,
        earlier: earlierHighSeverity,
      });
    const total = state.items.length;
    const chart = this.renderChart(state.days);
    const groups = this.renderGroups(state.groups);
    const degradation = state.degradedReasons.length > 0
      ? `<div class="threat-timeline-note">${escapeHtml(state.degradedReasons.join(' | '))}</div>`
      : '';

    this.setDataBadge(
      state.status === 'ok' ? 'live' : 'cached',
      state.status === 'ok'
        ? sourceLabel
        : `${t('components.threatTimeline.degraded')} · ${sourceLabel}`,
    );
    this.setSafeContent(unsafeRawHtml(`
      <div class="threat-timeline-panel">
        <div class="threat-timeline-summary">
          <div class="threat-timeline-stat">
            <span class="threat-timeline-stat-value">${highSeverityCount}</span>
            <span class="threat-timeline-stat-label">${t('components.threatTimeline.criticalHigh')}</span>
          </div>
          <div class="threat-timeline-stat">
            <span class="threat-timeline-stat-value">${highSeverityDays}</span>
            <span class="threat-timeline-stat-label">${t('components.threatTimeline.activeDays')}</span>
          </div>
          <div class="threat-timeline-trend ${trend.className}">
            <span class="threat-timeline-trend-label">${escapeHtml(trendLabel)}</span>
            <span class="threat-timeline-trend-copy">${escapeHtml(trendCopy)}</span>
          </div>
        </div>
        ${chart}
        <div class="threat-timeline-legend">${THREAT_LEVELS.map(level => `
          <span class="threat-timeline-legend-item">
            <span class="threat-timeline-swatch" style="background:${THREAT_LEVEL_COLORS[level]}"></span>
            ${t(`components.threatTimeline.levels.${level}`)} <strong>${state.totals[level]}</strong>
          </span>
        `).join('')}</div>
        <div class="threat-timeline-groups" aria-label="${t('components.threatTimeline.currentAlertsAria')}">
          ${groups}
        </div>
        <div class="threat-timeline-footer">${t('components.threatTimeline.stories', {
          count: total,
          source: sourceLabel,
        })}</div>
        ${degradation}
      </div>
      ${this.renderStyles()}
    `, 'legacy Panel.setContent() migration'));
  }

  private renderEmpty(message: string, reasons: string[] = []): void {
    this.setCount(0);
    this.setDataBadge('unavailable');
    const reasonHtml = reasons.length > 0
      ? `<div class="threat-timeline-note">${escapeHtml(reasons.join(' | '))}</div>`
      : '';
    this.setSafeContent(unsafeRawHtml(`
      <div class="threat-timeline-panel">
        <div class="threat-timeline-empty">
          <div class="threat-timeline-empty-title">${escapeHtml(message)}</div>
          <div class="threat-timeline-empty-copy">${t('components.threatTimeline.emptyCopy')}</div>
        </div>
        ${reasonHtml}
      </div>
      ${this.renderStyles()}
    `, 'legacy Panel.setContent() migration'));
  }

  private renderChart(days: ThreatTimelineDay[]): string {
    const width = 360;
    const height = 150;
    const margin = { top: 12, right: 10, bottom: 28, left: 24 };
    const rows: StackRow[] = days.map(day => {
      const dateParts = new Intl.DateTimeFormat(document.documentElement.lang || 'zh-TW', {
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
      }).formatToParts(new Date(day.startMs));
      const month = dateParts
        .filter(part => part.type === 'month' || (part.type === 'literal' && part.value.includes('月')))
        .map(part => part.value)
        .join('') || day.label;
      const dayNumber = dateParts
        .filter(part => part.type === 'day' || (part.type === 'literal' && part.value.includes('日')))
        .map(part => part.value)
        .join('');
      return {
        key: day.key,
        label: dateParts.map(part => part.value).join(''),
        labelLines: [month, dayNumber],
        critical: day.counts.critical,
        high: day.counts.high,
        medium: day.counts.medium,
        low: day.counts.low,
        info: day.counts.info,
      };
    });
    const maxTotal = Math.max(1, d3.max(days, day => day.total) ?? 1);
    const x = d3.scaleBand<string>()
      .domain(days.map(day => day.key))
      .range([margin.left, width - margin.right])
      .padding(0.24);
    const y = d3.scaleLinear()
      .domain([0, maxTotal])
      .nice()
      .range([height - margin.bottom, margin.top]);
    const layers = d3.stack<StackRow, TimelineThreatLevel>()
      .keys(STACK_LEVELS)(rows);
    const gridY = y(maxTotal);

    const bars = layers.map(layer => {
      const level = layer.key as TimelineThreatLevel;
      return layer.map((segment, index) => {
        const day = days[index];
        if (!day) return '';
        const xPos = x(day.key);
        if (xPos === undefined) return '';
        const yTop = y(segment[1]);
        const yBottom = y(segment[0]);
        const barHeight = Math.max(0, yBottom - yTop);
        if (barHeight <= 0) return '';
        return `<rect x="${xPos.toFixed(1)}" y="${yTop.toFixed(1)}" width="${x.bandwidth().toFixed(1)}" height="${barHeight.toFixed(1)}" rx="2" fill="${THREAT_LEVEL_COLORS[level]}">
          <title>${escapeHtml(rows[index]?.label ?? day.label)} ${t(`components.threatTimeline.levels.${level}`)}: ${day.counts[level]}</title>
        </rect>`;
      }).join('');
    }).join('');

    const labels = days.map(day => {
      const xPos = x(day.key);
      if (xPos === undefined) return '';
      const centerX = (xPos + x.bandwidth() / 2).toFixed(1);
      const labelLines = rows.find(row => row.key === day.key)?.labelLines ?? [day.label, ''];
      return `<text x="${centerX}" y="${height - 20}" text-anchor="middle"><tspan x="${centerX}" dy="0">${escapeHtml(labelLines[0])}</tspan><tspan x="${centerX}" dy="10">${escapeHtml(labelLines[1])}</tspan></text>`;
    }).join('');

    return `
      <div class="threat-timeline-chart-wrap">
        <svg class="threat-timeline-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="${t('components.threatTimeline.chartAria')}">
          <line x1="${margin.left}" x2="${width - margin.right}" y1="${gridY.toFixed(1)}" y2="${gridY.toFixed(1)}" class="threat-timeline-grid" />
          <line x1="${margin.left}" x2="${width - margin.right}" y1="${(height - margin.bottom).toFixed(1)}" y2="${(height - margin.bottom).toFixed(1)}" class="threat-timeline-axis" />
          ${bars}
          <g class="threat-timeline-labels">${labels}</g>
        </svg>
      </div>
    `;
  }

  private renderGroups(groups: ThreatTimelineGroup[]): string {
    if (groups.length === 0) {
      return `<div class="threat-timeline-empty-inline">${t('components.threatTimeline.noGroupedAlerts')}</div>`;
    }
    return groups.map(group => `
      <section class="threat-timeline-group threat-${group.level}">
        <div class="threat-timeline-group-header">
          <span class="threat-timeline-group-name">${t(`components.threatTimeline.levels.${group.level}`)}</span>
          <span class="threat-timeline-group-count">${group.count}</span>
        </div>
        ${group.items.map(item => this.renderItem(item)).join('')}
      </section>
    `).join('');
  }

  private renderItem(item: ThreatTimelineItem): string {
    const titleCodePoints = Array.from(item.title);
    const title = escapeHtml(titleCodePoints.length > 94 ? `${titleCodePoints.slice(0, 91).join('')}...` : item.title);
    const href = sanitizeUrl(item.sourceUrl);
    const titleHtml = href
      ? `<a href="${href}" target="_blank" rel="noopener" class="threat-timeline-item-title">${title}</a>`
      : `<span class="threat-timeline-item-title">${title}</span>`;
    const source = escapeHtml(item.provenance || item.source || t('components.threatTimeline.source'));
    const age = this.formatAge(item.timestampMs);
    const sourceCount = item.sourceCount > 1
      ? `<span class="threat-timeline-source-count">${t('components.threatTimeline.sourceCount', { count: item.sourceCount })}</span>`
      : '';
    return `
      <article class="threat-timeline-item">
        ${titleHtml}
        <div class="threat-timeline-item-meta">
          <span class="threat-timeline-source">${source}</span>
          ${sourceCount}
          <span>${escapeHtml(age)}</span>
        </div>
      </article>
    `;
  }

  private formatAge(timestampMs: number): string {
    const diffMs = Math.max(0, Date.now() - timestampMs);
    const hours = Math.floor(diffMs / (60 * 60 * 1000));
    if (hours < 1) return t('components.threatTimeline.justNow');
    if (hours < 24) return t('components.threatTimeline.hoursAgo', { count: hours });
    const days = Math.floor(hours / 24);
    return t('components.threatTimeline.daysAgo', { count: days });
  }

  private renderStyles(): string {
    return `
      <style>
        .threat-timeline-panel { display: grid; gap: 10px; }
        .threat-timeline-summary { display: grid; grid-template-columns: 76px 76px 1fr; gap: 8px; align-items: stretch; }
        .threat-timeline-stat, .threat-timeline-trend { border: 1px solid var(--border-color); background: var(--bg-secondary); border-radius: 8px; padding: 8px; min-width: 0; }
        .threat-timeline-stat-value { display: block; font-size: calc(20px * var(--wm-panel-effective-scale, 1)); line-height: 1; font-weight: 700; color: var(--text-primary); }
        .threat-timeline-stat-label, .threat-timeline-trend-copy, .threat-timeline-footer, .threat-timeline-note { display: block; font-size: calc(11px * var(--wm-panel-effective-scale, 1)); color: var(--text-secondary); margin-top: 4px; }
        .threat-timeline-trend { border-left: 3px solid var(--accent-color); }
        .threat-timeline-trend.worsening { border-left-color: #ef4444; }
        .threat-timeline-trend.easing { border-left-color: #38bdf8; }
        .threat-timeline-trend-label { display: block; color: var(--text-primary); font-size: calc(13px * var(--wm-panel-effective-scale, 1)); font-weight: 700; }
        .threat-timeline-chart-wrap { border: 1px solid var(--border-color); border-radius: 8px; background: rgba(15, 23, 42, 0.18); padding: 6px; }
        .threat-timeline-chart { width: 100%; height: 150px; display: block; overflow: visible; }
        .threat-timeline-grid { stroke: var(--border-color); stroke-dasharray: 3 3; opacity: 0.7; }
        .threat-timeline-axis { stroke: var(--border-color); }
        .threat-timeline-labels text { fill: var(--text-secondary); font-size: calc(9px * var(--wm-panel-effective-scale, 1)); }
        .threat-timeline-legend { display: flex; flex-wrap: wrap; gap: 6px; }
        .threat-timeline-legend-item { display: inline-flex; align-items: center; gap: 4px; font-size: calc(11px * var(--wm-panel-effective-scale, 1)); color: var(--text-secondary); }
        .threat-timeline-swatch { width: 8px; height: 8px; border-radius: 999px; }
        .threat-timeline-groups { display: grid; gap: 8px; }
        .threat-timeline-group { border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden; background: var(--bg-secondary); }
        .threat-timeline-group-header { display: flex; align-items: center; justify-content: space-between; padding: 7px 9px; border-bottom: 1px solid var(--border-color); }
        .threat-timeline-group-name { font-size: calc(12px * var(--wm-panel-effective-scale, 1)); font-weight: 700; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0; }
        .threat-timeline-group-count { font-size: calc(11px * var(--wm-panel-effective-scale, 1)); color: var(--text-secondary); }
        .threat-timeline-item { padding: 8px 9px; display: grid; gap: 4px; }
        .threat-timeline-item + .threat-timeline-item { border-top: 1px solid var(--border-color); }
        .threat-timeline-item-title { color: var(--text-primary); font-size: calc(12px * var(--wm-panel-effective-scale, 1)); line-height: 1.35; text-decoration: none; }
        a.threat-timeline-item-title:hover { color: var(--accent-color); }
        .threat-timeline-item-meta { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; color: var(--text-secondary); font-size: calc(10px * var(--wm-panel-effective-scale, 1)); }
        .threat-timeline-source, .threat-timeline-source-count { border: 1px solid var(--border-color); border-radius: 999px; padding: 1px 6px; color: var(--text-secondary); }
        .threat-critical .threat-timeline-group-header { border-left: 3px solid #ef4444; }
        .threat-high .threat-timeline-group-header { border-left: 3px solid #f97316; }
        .threat-medium .threat-timeline-group-header { border-left: 3px solid #eab308; }
        .threat-low .threat-timeline-group-header { border-left: 3px solid #38bdf8; }
        .threat-info .threat-timeline-group-header { border-left: 3px solid #94a3b8; }
        .threat-timeline-empty, .threat-timeline-empty-inline { border: 1px dashed var(--border-color); border-radius: 8px; padding: 14px; color: var(--text-secondary); background: var(--bg-secondary); }
        .threat-timeline-empty-title { color: var(--text-primary); font-size: calc(13px * var(--wm-panel-effective-scale, 1)); font-weight: 700; }
        .threat-timeline-empty-copy { margin-top: 5px; font-size: calc(12px * var(--wm-panel-effective-scale, 1)); line-height: 1.4; color: var(--text-secondary); }
        @media (max-width: 520px) {
          .threat-timeline-summary { grid-template-columns: 1fr 1fr; }
          .threat-timeline-trend { grid-column: 1 / -1; }
        }
      </style>
    `;
  }
}
