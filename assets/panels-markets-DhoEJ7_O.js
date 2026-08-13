const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D70I6syA.js","assets/embed-url-C3Ug1l3S.js","assets/panel-storage-DBnvaPZa.js","assets/clerk-CDcnWpz2.js","assets/i18n-qlunRAMb.js","assets/persistent-cache-BPpGhWvt.js","assets/widget-store-fZaGhUun.js","assets/debugbear-rum-CTwHbetR.js","assets/gdelt-intel-CV1wWvP3.js","assets/data-freshness-BtxHQtUI.js","assets/panel-gating-D2MAgFXc.js","assets/fx-rates-C75bePW4.js","assets/embed-url-BjjlmY3I.css"])))=>i.map(i=>d[i]);
var xt=Object.defineProperty;var yt=(a,i,e)=>i in a?xt(a,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[i]=e;var h=(a,i,e)=>yt(a,typeof i!="symbol"?i+"":i,e);import{P as _}from"./Panel-D_ryf6Xu.js";import{t as d,S as Pe,k as _e,p as bt}from"./panel-storage-DBnvaPZa.js";import{n as nt,b as N,p as z,q as it}from"./widget-store-fZaGhUun.js";import{e as l,u as $,a as $t,f as w,j as M}from"./dom-utils-B8MVJOEB.js";import{m as V,s as wt}from"./sparkline-EyuwviXB.js";import"./panels-w8AQFe4K.js";import{c as ke}from"./watchlist-modal-DSrkAi9k.js";import{b as St,r as _t,g as kt,c as Ct,a as Rt,o as At}from"./market-chart-modal-DNAVu674.js";import{X as Ft,Y as Pt}from"./main-CVkjhn56.js";import{g as P,a as D,b as Et,c as Dt,d as Tt,e as Mt,f as Nt,h as zt,i as Lt}from"./stock-fundamentals-display-BdKFnC_N.js";import{W as st}from"./WatchlistTableView-DQcT7H76.js";import{g as L,c as Bt,E as It,a as Ce,r as Ot,M as rt}from"./embed-url-C3Ug1l3S.js";import{describeFreshness as Ut}from"./persistent-cache-BPpGhWvt.js";import{F as jt}from"./FrameworkSelector-BiN9CmSA.js";import{h as Gt}from"./panel-gating-D2MAgFXc.js";import{_ as C}from"./clerk-CDcnWpz2.js";import{F as Vt}from"./fx-rates-C75bePW4.js";import{t as ot}from"./gdelt-intel-CV1wWvP3.js";const Ht={MARKET_QUOTE_UNAVAILABLE_REASON_UNSPECIFIED:"components.markets.unavailable.notFound",MARKET_QUOTE_UNAVAILABLE_REASON_NOT_FOUND:"components.markets.unavailable.notFound",MARKET_QUOTE_UNAVAILABLE_REASON_PROVIDER_ERROR:"components.markets.unavailable.providerError",MARKET_QUOTE_UNAVAILABLE_REASON_PROVIDER_RATE_LIMITED:"components.markets.unavailable.rateLimited",MARKET_QUOTE_UNAVAILABLE_REASON_PROVIDER_NOT_CONFIGURED:"components.markets.unavailable.notConfigured",MARKET_QUOTE_UNAVAILABLE_REASON_REQUEST_LIMIT_EXCEEDED:"components.markets.unavailable.requestLimit",MARKET_QUOTE_UNAVAILABLE_REASON_UPSTREAM_BUDGET_EXHAUSTED:"components.markets.unavailable.budget",MARKET_QUOTE_UNAVAILABLE_REASON_SEED_UNAVAILABLE:"components.markets.unavailable.seed"};function qt(a){const i=d(Ht[a.reason]??"components.markets.unavailable.notFound"),e=a.symbols.join(", ");return a.overflow>0?d("components.markets.unavailable.symbolsMore",{symbols:e,count:a.overflow,reason:i}):d("components.markets.unavailable.symbols",{symbols:e,reason:i})}class Yt extends _{constructor(){super({id:"markets",title:d("panels.markets"),infoTooltip:d("components.markets.infoTooltip")});h(this,"_markets",[]);h(this,"_marketsRateLimited",!1);h(this,"_marketsUnavailable",[]);h(this,"_disclosures",null);this.header.appendChild(ke()),St(this.content,()=>this._markets,At)}renderMarkets(e,t,n){this._markets=e,this._marketsRateLimited=!!t,this._marketsUnavailable=n??[],this._renderMarketsAndDisclosures()}renderDisclosures(e){this._disclosures=e??null,this._renderMarketsAndDisclosures()}_renderMarketsAndDisclosures(){const e=_t(this._disclosures),t=this._markets.map((s,r)=>`
      <div${kt(s,r,d("components.markets.chart.title",{symbol:s.display}))}>
        <div class="market-info">
          <span class="market-name">${l(s.name)}</span>
          <span class="market-symbol">${l(s.display)}</span>
        </div>
        <div class="market-data">
          ${V(s.sparkline,s.change)}
          <span class="market-price">${nt(s.price)}</span>
          <span class="market-change ${N(s.change)}">${z(s.change)}</span>
        </div>
      </div>
    `).join(""),n=Ct({hasMarkets:this._markets.length>0,marketsHtml:t,disclosureHtml:e,unavailableMessage:this._marketsRateLimited?d("common.rateLimitedMarket"):d("common.failedMarketData"),unavailableSymbolLines:Rt(this._marketsUnavailable).map(qt)});if(n.kind==="retry"){this.showRetrying(n.message);return}this.setSafeContent($(n.html,"legacy Panel.setContent() migration"))}}class Wt extends _{constructor(){super({id:"heatmap",title:d("panels.heatmap"),infoTooltip:d("components.heatmap.infoTooltip")});h(this,"_tab","performance");h(this,"_heatmapData",[]);h(this,"_sectorBars",[]);h(this,"_valuations",{});h(this,"_staleValuationSymbols",new Set);this.content.addEventListener("click",e=>{const t=e.target.closest("[data-tab]"),n=t==null?void 0:t.dataset.tab;(n==="performance"||n==="valuations")&&(this._tab=n,this._render())})}renderHeatmap(e,t){this._heatmapData=e,this._sectorBars=t??[],this._render()}updateValuations(e,t){if(e===void 0)return;if(this._staleValuationSymbols=new Set((t??[]).map(s=>s.toUpperCase())),Object.keys(e).length===0){this._valuations={},this._tab==="valuations"&&(this._tab="performance"),this._render();return}const n={};for(const[s,r]of Object.entries(e))n[s]={trailingPE:(r==null?void 0:r.trailingPE)??null,forwardPE:(r==null?void 0:r.forwardPE)??null,beta:(r==null?void 0:r.beta)??null,ytdReturn:(r==null?void 0:r.ytdReturn)??null,threeYearReturn:(r==null?void 0:r.threeYearReturn)??null,fiveYearReturn:(r==null?void 0:r.fiveYearReturn)??null};this._valuations=n,this._render()}_buildTabBar(){return Object.keys(this._valuations).length>0?`<div style="display:flex;gap:4px;margin-bottom:8px">
      <button class="panel-tab${this._tab==="performance"?" active":""}" data-tab="performance" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">Performance</button>
      <button class="panel-tab${this._tab==="valuations"?" active":""}" data-tab="valuations" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">Valuations</button>
    </div>`:""}_render(){if(this._heatmapData.length===0){this.showRetrying(d("common.failedSectorData"));return}const e=this._buildTabBar();if(this._tab==="valuations"&&Object.keys(this._valuations).length>0){this.setSafeContent($(e+this._renderValuations(),"legacy Panel.setContent() migration"));return}this.setSafeContent($(e+this._renderPerformance(),"legacy Panel.setContent() migration"))}_renderPerformance(){const t='<div class="heatmap">'+this._heatmapData.map(o=>{const c=o.change??0,p=o.symbol?`<div class="sector-ticker">${l(o.symbol)}</div>`:"";return`
        <div class="heatmap-cell ${it(c)}">
          ${p}
          <div class="sector-change ${N(c)}">${z(c)}</div>
          <div class="sector-name">${l(o.name)}</div>
        </div>
      `}).join("")+"</div>";if(this._sectorBars.length===0)return t;const n=[...this._sectorBars].filter(o=>Number.isFinite(o.change1d)).sort((o,c)=>c.change1d-o.change1d);if(n.length===0)return t;const s=Math.max(...n.map(o=>Math.abs(o.change1d)),3),r='<div class="heatmap-bar-chart">'+n.map(o=>{const c=Math.min(Math.abs(o.change1d)/s*100,100).toFixed(1),p=o.change1d>=0,f=p?"var(--green)":"var(--red)",m=p?"+":"";return`<div class="heatmap-bar-row">
  <span class="heatmap-bar-label">${l(o.symbol)}</span>
  <div class="heatmap-bar-track"><div class="heatmap-bar-fill" style="width:${c}%;background:${f}"></div></div>
  <span class="heatmap-bar-value ${p?"positive":"negative"}">${m}${o.change1d.toFixed(2)}%</span>
</div>`}).join("")+"</div>";return t+r}_renderValuations(){const e=Object.entries(this._valuations).map(([u,x])=>({symbol:u,...x})).filter(u=>u.forwardPE!==null||u.trailingPE!==null);if(e.length===0)return'<div style="padding:8px;color:var(--text-dim);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">No valuation data available</div>';const t=[...e].sort((u,x)=>(u.forwardPE??u.trailingPE??999)-(x.forwardPE??x.trailingPE??999)),n=t.map(u=>u.forwardPE??u.trailingPE??0).filter(u=>u>0),s=(n.length>0?n[Math.floor(n.length/2)]:void 0)??20,r=Math.max(...n,30),o=new Map(this._heatmapData.map(u=>[u.symbol,u.name])),c=u=>u!==null?u.toFixed(1):"--",p=u=>{if(u===null)return"--";const x=u*100;return`${x>=0?"+":""}${x.toFixed(1)}%`},f=u=>u!==null?u.toFixed(2):"--",m=u=>u===null?"var(--text-dim)":u<s*.8?"var(--green)":u>s*1.2?"var(--red)":"#e6a817",g='<div class="heatmap-bar-chart" style="margin-bottom:12px">'+t.map(u=>{const x=u.forwardPE??u.trailingPE??0,b=Math.min(x/r*100,100).toFixed(1),S=m(x>0?x:null),k=o.get(u.symbol)??u.symbol;return`<div class="heatmap-bar-row">
  <span class="heatmap-bar-label" title="${l(u.symbol)}">${l(k)}</span>
  <div class="heatmap-bar-track"><div class="heatmap-bar-fill" style="width:${b}%;background:${S}"></div></div>
  <span class="heatmap-bar-value" style="color:${S}">${x>0?x.toFixed(1)+"x":"--"}</span>
</div>`}).join("")+"</div>",v=`<div style="overflow-x:auto">
<table style="width:100%;border-collapse:collapse;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
  <thead><tr style="color:var(--text-dim);border-bottom:1px solid var(--border)">
    <th style="padding:3px 6px;text-align:left;font-weight:500">Sector</th>
    <th style="padding:3px 6px;text-align:right;font-weight:500">Trail P/E</th>
    <th style="padding:3px 6px;text-align:right;font-weight:500">Fwd P/E</th>
    <th style="padding:3px 6px;text-align:right;font-weight:500">Beta</th>
    <th style="padding:3px 6px;text-align:right;font-weight:500">YTD</th>
  </tr></thead>
  <tbody>${t.map(u=>{const x=o.get(u.symbol)??u.symbol,b=this._staleValuationSymbols.has(u.symbol.toUpperCase()),S=b?' <span title="Last known value; not refreshed this cycle" style="color:var(--text-dim);font-size:calc(9px * var(--wm-panel-effective-scale, 1))">(stale)</span>':"";return`<tr${b?' style="opacity:0.65"':""}>
  <td style="padding:3px 6px;white-space:nowrap;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">${l(x)}${S}</td>
  <td style="padding:3px 6px;text-align:right;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:${m(u.trailingPE)}">${c(u.trailingPE)}</td>
  <td style="padding:3px 6px;text-align:right;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:${m(u.forwardPE)}">${c(u.forwardPE)}</td>
  <td style="padding:3px 6px;text-align:right;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">${f(u.beta)}</td>
  <td style="padding:3px 6px;text-align:right;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:${u.ytdReturn===null?"var(--text-dim)":u.ytdReturn>=0?"var(--green)":"var(--red)"}">${p(u.ytdReturn)}</td>
</tr>`}).join("")}</tbody>
</table></div>`;return g+v}}function Xt(a){if(typeof a!="string"||a==="")return null;const i=Number(a);return Number.isFinite(i)?i:null}function lt(a){if(!Array.isArray(a)||a.length<13)return null;const i=a[a.length-1],e=a[a.length-13];return i==null||e==null||!(e>0)||!Number.isFinite(i)?null:(i-e)/e}function Kt(a){const i=Array.isArray(a.assets)?a.assets:null;if(!i||i.length===0)return null;const e=[],t=[];for(const n of i){const s=typeof n.funding=="number"&&Number.isFinite(n.funding)?n.funding:null,r=Array.isArray(n.sparkOi)?n.sparkOi.filter(p=>Number.isFinite(p)):[],o=Array.isArray(n.sparkScore)?n.sparkScore.filter(p=>Number.isFinite(p)):[],c={symbol:String(n.symbol??""),display:String(n.display??""),group:String(n.group??""),funding:s,oiDelta1h:lt(r),composite:typeof n.composite=="number"?n.composite:0,warmup:!!n.warmup,stale:!!n.stale,sparkScore:o};c.group==="fx"?e.push(c):t.push(c)}return{ts:typeof a.ts=="number"?a.ts:0,warmup:!!a.warmup,fxAssets:e,commodityAssets:t,unavailable:!1}}function Qt(a){const i=[],e=[];for(const t of a.assets){const n={symbol:t.symbol,display:t.display,group:t.group,funding:Xt(t.funding),oiDelta1h:lt(t.sparkOi),composite:Number(t.composite||0),warmup:!!t.warmup,stale:!!t.stale,sparkScore:Array.isArray(t.sparkScore)?t.sparkScore:[]};t.group==="fx"?i.push(n):e.push(n)}return{ts:Number(a.ts||0),warmup:!!a.warmup,fxAssets:i,commodityAssets:e,unavailable:!1}}const Ee=[{symbol:"EURUSD=X",label:"EUR",flag:"🇪🇺",multiply:!1},{symbol:"GBPUSD=X",label:"GBP",flag:"🇬🇧",multiply:!1},{symbol:"USDJPY=X",label:"JPY",flag:"🇯🇵",multiply:!0},{symbol:"USDCNY=X",label:"CNY",flag:"🇨🇳",multiply:!0},{symbol:"USDINR=X",label:"INR",flag:"🇮🇳",multiply:!0},{symbol:"AUDUSD=X",label:"AUD",flag:"🇦🇺",multiply:!1},{symbol:"USDCHF=X",label:"CHF",flag:"🇨🇭",multiply:!0},{symbol:"USDCAD=X",label:"CAD",flag:"🇨🇦",multiply:!0},{symbol:"USDTRY=X",label:"TRY",flag:"🇹🇷",multiply:!0}];class Jt extends _{constructor(){super({id:"commodities",title:d("panels.commodities"),infoTooltip:d("components.commodities.infoTooltip")});h(this,"_tab","commodities");h(this,"_commodityData",[]);h(this,"_fxRates",[]);this.content.addEventListener("click",e=>{const t=e.target.closest("[data-tab]"),n=t==null?void 0:t.dataset.tab;(n==="commodities"||n==="fx"||n==="xau"&&Pe==="commodity")&&(this._tab=n,this._render())})}renderCommodities(e){this._commodityData=e,this._render()}updateFxRates(e){this._fxRates=e,this._render()}_buildTabBar(e,t){const s=[`<button class="panel-tab${this._tab==="commodities"?" active":""}" data-tab="commodities" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">Commodities</button>`];return e&&s.push(`<button class="panel-tab${this._tab==="fx"?" active":""}" data-tab="fx" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">EUR FX</button>`),t&&s.push(`<button class="panel-tab${this._tab==="xau"?" active":""}" data-tab="xau" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">XAU/FX</button>`),s.length>1?`<div style="display:flex;gap:4px;margin-bottom:8px">${s.join("")}</div>`:""}_renderXau(){const e=this._commodityData.find(r=>r.symbol==="GC=F"&&r.price!==null);if(!(e!=null&&e.price))return'<div style="padding:8px;color:var(--text-dim);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">Gold price unavailable</div>';const t=e.price,n=new Map(this._commodityData.filter(r=>{var o;return(o=r.symbol)==null?void 0:o.endsWith("=X")}).map(r=>[r.symbol,r])),s=Ee.map(r=>{const o=n.get(r.symbol);if(!(o!=null&&o.price)||!Number.isFinite(o.price))return null;const c=r.multiply?t*o.price:t/o.price;if(!Number.isFinite(c)||c<=0)return null;const p=Math.round(c).toLocaleString();return`<div class="commodity-item">
        <div class="commodity-name">${l(r.flag)} XAU/${l(r.label)}</div>
        <div class="commodity-price" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1))">${l(p)}</div>
      </div>`}).filter(Boolean);return s.length===0?`<div class="commodities-grid">${Ee.map(o=>`<div class="commodity-item">
          <div class="commodity-name">${l(o.flag)} XAU/${l(o.label)}</div>
          <div class="commodity-price" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1))">--</div>
        </div>`).join("")}</div><div style="margin-top:6px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">FX rates unavailable</div>`:`<div class="commodities-grid">${s.join("")}</div><div style="margin-top:6px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Computed from GC=F + Yahoo FX</div>`}_render(){const e=this._fxRates.length>0,t=Pe==="commodity"&&this._commodityData.some(o=>o.symbol==="GC=F"&&o.price!==null);this._tab==="xau"&&!t&&(this._tab="commodities");const n=this._buildTabBar(e,t);if(this._tab==="fx"&&e){const o=this._fxRates.map(c=>{const p=c.change1d??null,f=p!==null?`${p>0?"+":""}${p.toFixed(4)}`:"",m=p===null||p===0?"":p>0?"change-positive":"change-negative";return`<div class="commodity-item">
          <div class="commodity-name">EUR/${l(c.currency)}</div>
          <div class="commodity-price">${l(c.rate.toFixed(4))}</div>
          ${f?`<div class="commodity-change ${l(m)}">${l(f)}</div>`:""}
        </div>`}).join("");this.setSafeContent($(n+`<div class="commodities-grid">${o}</div><div style="margin-top:6px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Source: ECB</div>`,"legacy Panel.setContent() migration"));return}if(this._tab==="xau"&&t){this.setSafeContent($(n+this._renderXau(),"legacy Panel.setContent() migration"));return}const s=this._commodityData.filter(o=>{var c;return typeof o.price=="number"&&Number.isFinite(o.price)&&!((c=o.symbol)!=null&&c.endsWith("=X"))});if(s.length===0){if(!e){this.showRetrying(d("common.failedCommodities"));return}this.setSafeContent($(n+`<div style="padding:8px;color:var(--text-dim);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">${d("common.failedCommodities")}</div>`,"legacy Panel.setContent() migration"));return}const r='<div class="commodities-grid">'+s.map(o=>`
        <div class="commodity-item">
          <div class="commodity-name">${l(o.display)}</div>
          ${V(o.sparkline,o.change,60,18)}
          <div class="commodity-price">${nt(o.price)}</div>
          <div class="commodity-change ${N(o.change)}">${z(o.change)}</div>
        </div>
      `).join("")+"</div>";this.setSafeContent($(n+r,"legacy Panel.setContent() migration"))}}class Zt extends _{constructor(){super({id:"crypto",title:d("panels.crypto"),infoTooltip:d("components.crypto.infoTooltip")})}renderCrypto(i){if(i.length===0){this.showRetrying(d("common.failedCryptoData"));return}const e=i.map(t=>`
      <div class="market-item">
        <div class="market-info">
          <span class="market-name">${l(t.name)}</span>
          <span class="market-symbol">${l(t.symbol)}</span>
        </div>
        <div class="market-data">
          ${V(t.sparkline,t.change)}
          <span class="market-price">$${t.price.toLocaleString()}</span>
          <span class="market-change ${N(t.change)}">${z(t.change)}</span>
        </div>
      </div>
    `).join("");this.setSafeContent($(e,"legacy Panel.setContent() migration"))}}class ea extends _{constructor(){super({id:"crypto-heatmap",title:"Crypto Sectors"})}renderSectors(i){if(i.length===0){this.showRetrying(d("common.failedSectorData"));return}const e='<div class="heatmap">'+i.map(t=>{const n=t.change??0;return`
        <div class="heatmap-cell ${it(n)}">
          <div class="sector-name">${l(t.name)}</div>
          <div class="sector-change ${N(n)}">${z(n)}</div>
        </div>
      `}).join("")+"</div>";this.setSafeContent($(e,"legacy Panel.setContent() migration"))}}class ie extends _{renderTokens(i){if(i.length===0){this.showRetrying(d("common.failedCryptoData"));return}const e=i.map(t=>`
      <div class="market-item">
        <div class="market-info">
          <span class="market-name">${l(t.name)}</span>
          <span class="market-symbol">${l(t.symbol)}</span>
        </div>
        <div class="market-data">
          <span class="market-price">$${t.price.toLocaleString(void 0,{maximumFractionDigits:t.price<1?6:2})}</span>
          <span class="market-change ${N(t.change24h)}">${z(t.change24h)}</span>
          <span class="market-change market-change--7d ${N(t.change7d)}">${z(t.change7d)}W</span>
        </div>
      </div>
    `).join("");this.setSafeContent($(e,"legacy Panel.setContent() migration"))}}class ta extends ie{constructor(){super({id:"defi-tokens",title:"DeFi Tokens",infoTooltip:d("components.defiTokens.infoTooltip")})}}class aa extends ie{constructor(){super({id:"ai-tokens",title:"AI Tokens",infoTooltip:d("components.aiTokens.infoTooltip")})}}class na extends ie{constructor(){super({id:"other-tokens",title:"Alt Tokens",infoTooltip:d("components.altTokens.infoTooltip")})}}const ri=Object.freeze(Object.defineProperty({__proto__:null,AiTokensPanel:aa,CommoditiesPanel:Jt,CryptoHeatmapPanel:ea,CryptoPanel:Zt,DefiTokensPanel:ta,HeatmapPanel:Wt,MarketPanel:Yt,OtherTokensPanel:na,TokenListPanel:ie,mapHyperliquidFlowResponse:Qt,mapHyperliquidFlowSeed:Kt},Symbol.toStringTag,{value:"Module"}));function se(a){const i=Number.isFinite(a)?a.toFixed(2):"0.00";return`${a>=0?"+":""}${i}%`}function ia(a){const i=Number.isFinite(a)?a.toFixed(2):"0.00";return`${a>=.15?"Bullish":a<=-.15?"Bearish":"Neutral"} (${a>=0?"+":""}${i})`}function De(a,i){return Number.isFinite(a)?`${i==="USD"?"$":""}${a.toFixed(2)}${i&&i!=="USD"?` ${i}`:""}`:"N/A"}function Te(a){const i=a.toLowerCase();return i.includes("buy")?"badge-bullish":i.includes("hold")||i.includes("watch")?"badge-neutral":"badge-bearish"}function Me(a,i){return a.length===0?"":`<ul class="${i}" style="margin:8px 0 0;padding-left:18px;font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.5">${a.map(e=>`<li>${l(e)}</li>`).join("")}</ul>`}function W(a){const i=Math.abs(a);return i>=1e9?`$${(a/1e9).toFixed(1)}B`:i>=1e6?`$${(a/1e6).toFixed(1)}M`:i>=1e3?`$${(a/1e3).toFixed(0)}K`:`$${a.toFixed(0)}`}function sa(a){return a==="P"?"Buy":a==="S"?"Sell":a==="M"?"Exercise":a==="A"?"Award":a==="D"?"Disposition":a==="F"?"Tax/Fee":a}class ra extends _{constructor(){super({id:"stock-analysis",title:"Premium Stock Analysis",infoTooltip:d("components.stockAnalysis.infoTooltip"),premium:"locked"});h(this,"insiderBySymbol",{});h(this,"tableView");h(this,"lastItems",[]);h(this,"lastHistory",{});this.header.appendChild(ke("Edit Watchlist"))}destroy(){var e;(e=this.tableView)==null||e.destroy(),super.destroy()}setInsiderData(e,t){this.insiderBySymbol[e]=t}renderAnalyses(e,t={},n="live"){if(e.length===0){this.setDataBadge("unavailable"),this.showRetrying("No premium stock analyses available yet.");return}this.setDataBadge(n,`${e.length} symbols`),this.lastItems=e,this.lastHistory=t,this.tableView?this.tableView.updateRenderDetail(s=>this.renderCard(s,this.lastHistory[s.symbol]||[])):this.tableView=new st({intro:this.buildIntro(e.length),columns:[{key:"symbol",label:"Symbol",sortable:!0,sortOptionKey:"symbol-asc",cell:s=>`<strong>${l(s.display||s.symbol)}</strong>`},{key:"price",label:"Price",align:"right",cell:s=>l(De(s.currentPrice,s.currency))},{key:"signal",label:"Signal",cell:s=>{const r=D(s);return`<span class="signal-badge ${Te(r)}">${l(r)}</span>`}},{key:"score",label:"Score",align:"right",sortable:!0,sortOptionKey:"score-desc",cell:s=>l(String(P(s)))},{key:"change",label:"1d %",align:"right",sortable:!0,sortOptionKey:"change-desc",cell:s=>`<span style="color:${s.changePercent>=0?"var(--semantic-normal)":"var(--semantic-critical)"}">${l(se(s.changePercent))}</span>`}],filters:[{key:"all",label:"All",match:()=>!0},{key:"strong-buy",label:"Strong Buy",match:s=>D(s).toLowerCase().includes("strong buy")},{key:"buy",label:"Buy+",match:s=>D(s).toLowerCase().includes("buy")},{key:"hold",label:"Hold",match:s=>{const r=D(s).toLowerCase();return r.includes("hold")||r.includes("watch")}},{key:"sell",label:"Sell",match:s=>D(s).toLowerCase().includes("sell")}],sortOptions:[{key:"score-desc",label:"Score ↓",cmp:(s,r)=>P(r)-P(s)},{key:"change-desc",label:"1d % ↓",cmp:(s,r)=>r.changePercent-s.changePercent},{key:"symbol-asc",label:"Symbol A-Z",cmp:(s,r)=>(s.display||s.symbol).localeCompare(r.display||r.symbol)}],defaultSort:"score-desc",defaultFilter:"all",getKey:s=>s.symbol,getSearchText:s=>`${s.symbol} ${s.display||""} ${s.name||""}`,renderDetail:s=>this.renderCard(s,this.lastHistory[s.symbol]||[]),searchPlaceholder:"Search ticker or name..."}),this.tableView.setItems(e),this.rerender()}rerender(){this.tableView&&(this.tableView.updateIntro(this.buildIntro(this.lastItems.length)),this.setSafeContent($(this.tableView.render(),"legacy Panel.setContent() migration")),this.tableView.bind(this.content,()=>this.rerender()))}buildIntro(e){const t=Ft().filter(r=>!Pt(r.symbol)).length,n=e===1?"ticker":"tickers",s=t>0?` <span style="color:var(--text-dim)">${t} watchlist ${t===1?"symbol is an index/FX rate":"symbols are indices/FX rates"} and don't get an equity report.</span>`:"";return`Analyst-grade equity reports for the ${e} ${n} in your watchlist — your picks lead, popular names fill the rest. Use <strong>Edit Watchlist</strong> to add your own.${s}`}formatDividendRate(e,t){const n=(t||"").trim().toUpperCase();if(n&&n!=="USD")try{return`${new Intl.NumberFormat("en-US",{style:"currency",currency:n}).format(e)}/share`}catch{return`${n} ${e.toFixed(2)}/share`}return`$${e.toFixed(2)}/share`}renderDividendProfile(e){if(!e.dividendYield||e.dividendYield<=0)return"";const t=`${e.dividendYield.toFixed(1)}%`,n=e.trailingAnnualDividendRate>0?` (${this.formatDividendRate(e.trailingAnnualDividendRate,e.currency)})`:"",s=e.dividendCagr!==0?`${e.dividendCagr>0?"+":""}${e.dividendCagr.toFixed(1)}%`:"N/A",r=e.dividendFrequency?`<span class="badge-neutral" style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));padding:2px 6px;border-radius:3px">${l(e.dividendFrequency)}</span>`:"",o=e.exDividendDate>0?new Date(e.exDividendDate).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"N/A",c=typeof e.payoutRatio=="number"&&e.payoutRatio>0,p=c?`${(e.payoutRatio*100).toFixed(1)}%`:"",f=c?`<div><div style="color:var(--text-dim)">Payout Ratio</div><div style="margin-top:3px">${l(p)}</div></div>`:"";return`
      <div style="border:1px solid var(--border);padding:10px 12px">
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim);margin-bottom:8px">Dividend Profile</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
          <div><div style="color:var(--text-dim)">Yield</div><div style="margin-top:3px">${l(t)}${l(n)}</div></div>
          <div><div style="color:var(--text-dim)">5Y CAGR</div><div style="margin-top:3px">${l(s)}</div></div>
          <div><div style="color:var(--text-dim)">Frequency</div><div style="margin-top:3px">${r||"N/A"}</div></div>
          ${f}
          <div><div style="color:var(--text-dim)">Ex-Dividend</div><div style="margin-top:3px">${l(o)}</div></div>
        </div>
      </div>
    `}renderCard(e,t){const n=D(e),s=Te(n),r=t.filter(f=>f.generatedAt!==e.generatedAt).slice(0,3),o=r[0],c=o?P(e)-P(o):null,p=e.headlines.slice(0,2).map(f=>{const m=$t(f.link),g=l(f.title),y=l(f.source||"Source");return`<a href="${m}" target="_blank" rel="noreferrer" style="display:block;color:var(--text);text-decoration:none;padding:8px 10px;border:1px solid var(--border);background:rgba(255,255,255,0.02)"><div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.45">${g}</div><div style="margin-top:4px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">${y}</div></a>`}).join("");return`
      <section class="signal-card" style="padding:14px;display:flex;flex-direction:column;gap:10px">
        <div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start">
          <div>
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <strong style="font-size:calc(16px * var(--wm-panel-effective-scale, 1));letter-spacing:-0.02em">${l(e.name||e.symbol)}</strong>
              <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);font-family:var(--font-mono);text-transform:uppercase">${l(e.display||e.symbol)}</span>
              <span class="signal-badge ${s}" style="font-family:var(--font-mono)">${l(n)}</span>
            </div>
            <div style="margin-top:6px;font-size:calc(12px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);line-height:1.5">${l(Et(e))}</div>
          </div>
          <div style="text-align:right;min-width:110px">
            <div style="font-size:calc(18px * var(--wm-panel-effective-scale, 1));font-weight:700">${l(De(e.currentPrice,e.currency))}</div>
            <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));color:${e.changePercent>=0?"var(--semantic-normal)":"var(--semantic-critical)"}">${l(se(e.changePercent))}</div>
            <div style="margin-top:6px;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Score ${l(String(P(e)))} · ${l(Dt(e))}</div>
          </div>
          ${t.length>=2?(()=>{const f=t.slice(0,6).reverse().map(P),m=f[f.length-1]??0,g=f[f.length-2]??m;return wt(f,m>=g?"var(--semantic-normal)":"var(--semantic-critical)",60,20,"display:block;margin-top:4px;align-self:flex-end")})():""}
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Trend</div><div style="margin-top:4px">${l(e.trendStatus)}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">MA5 Bias</div><div style="margin-top:4px">${l(se(e.biasMa5))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">RSI 12</div><div style="margin-top:4px">${l(e.rsi12.toFixed(1))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Volume</div><div style="margin-top:4px">${l(e.volumeStatus)}</div></div>
          ${e.newsSentiment!=null?`<div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">News</div><div style="margin-top:4px">${l(ia(e.newsSentiment))}</div></div>`:""}
        </div>
        ${this.renderDividendProfile(e)}
        <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.55;color:var(--text)"><strong style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Action</strong><div style="margin-top:4px">${l(Tt(e))}</div></div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px">
          <div>
            <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Bullish Factors</div>
            ${Me(Mt(e).slice(0,3),"badge-bullish")}
          </div>
          <div>
            <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Risk Factors</div>
            ${Me(Nt(e).slice(0,3),"badge-bearish")}
          </div>
        </div>
        <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.55;color:var(--text-dim)">
          <strong style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Why Now</strong>
          <div style="margin-top:4px">${l(zt(e))}</div>
        </div>
        ${o?`
          <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.55;color:var(--text-dim)">
            <strong style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Signal Drift</strong>
            <div style="margin-top:4px">
              Previous run was ${l(D(o))} at score ${l(String(P(o)))}.
              Current drift is ${l(`${c&&c>0?"+":""}${(c||0).toFixed(1)}`)}.
            </div>
          </div>
        `:""}
        ${r.length>0?`
          <div style="display:grid;gap:6px">
            <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Recent History</div>
            ${r.map(f=>`
              <div style="display:flex;justify-content:space-between;gap:12px;padding:8px 10px;border:1px solid var(--border);background:rgba(255,255,255,0.02);font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
                <span>${l(D(f))} · score ${l(String(P(f)))}</span>
                <span style="color:var(--text-dim)">${l(new Date(f.generatedAt).toLocaleString())}</span>
              </div>
            `).join("")}
          </div>
        `:""}
        ${this.renderInsiderSection(e.symbol)}
        ${p?`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:8px">${p}</div>`:""}
        ${this.renderAnalystConsensus(e)}
        ${this.renderFundamentals(e)}
      </section>
    `}renderFundamentals(e){const t=(s,r,o)=>`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:88px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">${l(s)}</div><div style="margin-top:2px${o?`;color:${o}`:""}">${l(r)}</div></div>`,n=Lt(e.fundamentals,e.currency).map(s=>t(s.label,s.value,s.color));return n.length===0?"":`
      <div style="border-top:1px solid var(--border);margin-top:4px;padding-top:10px">
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim);margin-bottom:8px">Fundamentals</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px">${n.join("")}</div>
      </div>
    `}renderAnalystConsensus(e){const t=e.analystConsensus,n=e.priceTarget,s=e.recentUpgrades,r=t&&t.total>0,o=typeof(n==null?void 0:n.mean)=="number"&&n.mean>0,c=typeof(n==null?void 0:n.median)=="number"&&n.median>0,p=!!n&&n.numberOfAnalysts>0&&(o||c),f=s&&s.length>0;return!r&&!p&&!f?"":`
      <div style="border-top:1px solid var(--border);margin-top:4px;padding-top:10px">
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim);margin-bottom:8px">Analyst Consensus</div>
        ${r?this.renderRatingBar(t):""}
        ${p?this.renderPriceTarget(n,e.currentPrice,e.currency):""}
        ${f?this.renderRecentUpgrades(s):""}
      </div>
    `}renderRatingBar(e){const t=e.total||1,n=c=>(c/t*100).toFixed(1),s=[{label:"Strong Buy",count:e.strongBuy,color:"#16a34a",pct:n(e.strongBuy)},{label:"Buy",count:e.buy,color:"#4ade80",pct:n(e.buy)},{label:"Hold",count:e.hold,color:"#facc15",pct:n(e.hold)},{label:"Sell",count:e.sell,color:"#f87171",pct:n(e.sell)},{label:"Strong Sell",count:e.strongSell,color:"#dc2626",pct:n(e.strongSell)}].filter(c=>c.count>0),r=s.map(c=>`<div style="flex:${c.count};background:${c.color};height:8px;min-width:2px" title="${l(c.label)}: ${c.count} (${c.pct}%)"></div>`).join(""),o=s.map(c=>`<span style="display:inline-flex;align-items:center;gap:3px"><span style="width:8px;height:8px;border-radius:2px;background:${c.color};display:inline-block"></span>${c.count}</span>`).join('<span style="color:var(--border);margin:0 4px">|</span>');return`
      <div style="margin-bottom:8px">
        <div style="display:flex;gap:1px;border-radius:4px;overflow:hidden;margin-bottom:4px">${r}</div>
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);display:flex;align-items:center;flex-wrap:wrap;gap:2px">${o}<span style="margin-left:6px;color:var(--text-dim)">(${t} analysts)</span></div>
      </div>
    `}renderPriceTarget(e,t,n){const s=n==="USD"?"$":n==="EUR"?"€":n==="GBP"?"£":n||"$",r=s.length===1,o=u=>r?`${s}${u.toFixed(2)}`:`${u.toFixed(2)} ${s}`,c=u=>typeof u=="number"&&Number.isFinite(u)&&u>0,p=c(e.low)?e.low:void 0,f=c(e.high)?e.high:void 0,m=c(e.mean)?e.mean:void 0,y=(c(e.median)?e.median:void 0)??m;if(!y)return"";const v=[];if(p!==void 0&&v.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Low</div><div style="margin-top:2px">${l(o(p))}</div></div>`),v.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Median</div><div style="margin-top:2px">${l(o(y))}</div></div>`),f!==void 0&&v.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">High</div><div style="margin-top:2px">${l(o(f))}</div></div>`),v.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Analysts</div><div style="margin-top:2px">${l(String(e.numberOfAnalysts))}</div></div>`),t>0){const u=(y-t)/t*100,x=u>=0?"var(--semantic-normal)":"var(--semantic-critical)",b=`${u>=0?"+":""}${u.toFixed(1)}%`;v.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">vs Current</div><div style="margin-top:2px;color:${x}">${l(b)}</div></div>`)}return`<div style="display:flex;flex-wrap:wrap;gap:8px;font-size:calc(11px * var(--wm-panel-effective-scale, 1));margin-bottom:8px">${v.join("")}</div>`}renderRecentUpgrades(e){return`
      <div style="display:grid;gap:4px">
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Recent Actions</div>
        ${e.slice(0,3).map(n=>{const s=n.action==="up"||n.action==="init"?"var(--semantic-normal)":n.action==="down"?"var(--semantic-critical)":"var(--text-dim)",r=n.action==="up"?"Upgrade":n.action==="down"?"Downgrade":n.action==="init"?"Initiated":l(n.action),o=n.fromGrade?`${l(n.fromGrade)} → ${l(n.toGrade)}`:l(n.toGrade);return`
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;padding:5px 8px;border:1px solid var(--border);background:rgba(255,255,255,0.02);font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
          <span style="font-weight:500">${l(n.firm)}</span>
          <span style="color:${s};white-space:nowrap">${r}</span>
          <span style="color:var(--text-dim);white-space:nowrap">${o}</span>
        </div>
      `}).join("")}
      </div>
    `}renderInsiderSection(e){const t=this.insiderBySymbol[e];if(t===void 0)return"";if(t.unavailable)return`
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);padding:8px;border:1px solid var(--border)">
          Insider data unavailable
        </div>`;if(t.transactions.length===0&&t.totalBuys===0&&t.totalSells===0)return`
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);padding:8px;border:1px solid var(--border)">
          No insider transactions in the last 6 months
        </div>`;const n=W(t.totalBuys),s=W(t.totalSells),r=`${t.netValue>=0?"+":""}${W(t.netValue)}`,o=t.netValue>=0?"var(--semantic-normal)":"var(--semantic-critical)",c=`
      <div style="display:flex;gap:16px;flex-wrap:wrap;font-size:calc(12px * var(--wm-panel-effective-scale, 1));font-family:var(--font-mono)">
        <span>Buys: <span style="color:var(--semantic-normal)">${l(n)}</span></span>
        <span>Sells: <span style="color:var(--semantic-critical)">${l(s)}</span></span>
        <span>Net: <span style="color:${o};font-weight:600">${l(r)}</span></span>
      </div>`,p=t.transactions.slice(0,5),f=p.length>0?`
      <table style="width:100%;border-collapse:collapse;font-size:calc(11px * var(--wm-panel-effective-scale, 1));margin-top:6px">
        <thead>
          <tr style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em;text-align:left">
            <th style="padding:4px 6px;border-bottom:1px solid var(--border)">Name</th>
            <th style="padding:4px 6px;border-bottom:1px solid var(--border)">Type</th>
            <th style="padding:4px 6px;border-bottom:1px solid var(--border);text-align:right">Shares</th>
            <th style="padding:4px 6px;border-bottom:1px solid var(--border);text-align:right">Value</th>
            <th style="padding:4px 6px;border-bottom:1px solid var(--border)">Date</th>
          </tr>
        </thead>
        <tbody>
          ${p.map(m=>{const g=m.transactionCode==="P",y=m.transactionCode==="S",v=g?"var(--semantic-normal)":y?"var(--semantic-critical)":"var(--text-dim)",u=m.value===0?"—":W(m.value);return`
              <tr>
                <td style="padding:4px 6px;border-bottom:1px solid var(--border);max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l(m.name)}</td>
                <td style="padding:4px 6px;border-bottom:1px solid var(--border);color:${v}">${l(sa(m.transactionCode))}</td>
                <td style="padding:4px 6px;border-bottom:1px solid var(--border);text-align:right;font-family:var(--font-mono)">${Number.isFinite(m.shares)?m.shares.toLocaleString():"0"}</td>
                <td style="padding:4px 6px;border-bottom:1px solid var(--border);text-align:right;font-family:var(--font-mono)">${u}</td>
                <td style="padding:4px 6px;border-bottom:1px solid var(--border);color:var(--text-dim)">${l(m.transactionDate)}</td>
              </tr>`}).join("")}
        </tbody>
      </table>`:"";return`
      <div style="display:grid;gap:6px">
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Insider Activity (6 months)</div>
        ${c}
        ${f}
      </div>`}}const oi=Object.freeze(Object.defineProperty({__proto__:null,StockAnalysisPanel:ra},Symbol.toStringTag,{value:"Module"}));function re(a){return a>0?"#8df0b2":a<0?"#ff8c8c":"var(--text-dim)"}function T(a){return`${a>0?"+":""}${a.toFixed(1)}%`}function oa(a){return a>=55?"badge-bullish":a>=45?"badge-neutral":"badge-bearish"}function la(a){return a>=55?"Profitable":a>=45?"Mixed":"Losing"}class ca extends _{constructor(){super({id:"stock-backtest",title:"Premium Backtesting",infoTooltip:d("components.stockBacktest.infoTooltip"),premium:"locked"});h(this,"tableView");this.header.appendChild(ke("Edit Watchlist"))}destroy(){var e;(e=this.tableView)==null||e.destroy(),super.destroy()}renderBacktests(e,t="live"){if(e.length===0){this.setDataBadge("unavailable"),this.showRetrying("No stock backtests available yet.");return}this.setDataBadge(t,`${e.length} symbols`),this.tableView||(this.tableView=new st({intro:"Historical replay of the technical signal model over recent daily bars. Point-in-time fundamentals are not included.",columns:[{key:"symbol",label:"Symbol",sortable:!0,sortOptionKey:"symbol-asc",cell:n=>`<strong>${l(n.display||n.symbol)}</strong>`},{key:"winrate",label:"Win Rate",align:"right",sortable:!0,sortOptionKey:"winrate-desc",cell:n=>l(T(n.winRate))},{key:"direction",label:"Direction",align:"right",sortable:!0,sortOptionKey:"direction-desc",cell:n=>l(T(n.directionAccuracy))},{key:"avgreturn",label:"Avg Return",align:"right",sortable:!0,sortOptionKey:"avgreturn-desc",cell:n=>`<span style="color:${re(n.avgSimulatedReturnPct)}">${l(T(n.avgSimulatedReturnPct))}</span>`},{key:"signals",label:"Signals",align:"right",sortable:!0,sortOptionKey:"signals-desc",cell:n=>l(String(n.actionableEvaluations))}],filters:[{key:"all",label:"All",match:()=>!0},{key:"profitable",label:"Profitable",match:n=>n.winRate>=55},{key:"mixed",label:"Mixed",match:n=>n.winRate>=45&&n.winRate<55},{key:"losing",label:"Losing",match:n=>n.winRate<45}],sortOptions:[{key:"winrate-desc",label:"Win Rate ↓",cmp:(n,s)=>s.winRate-n.winRate},{key:"direction-desc",label:"Direction ↓",cmp:(n,s)=>s.directionAccuracy-n.directionAccuracy},{key:"avgreturn-desc",label:"Avg Return ↓",cmp:(n,s)=>s.avgSimulatedReturnPct-n.avgSimulatedReturnPct},{key:"signals-desc",label:"Signals ↓",cmp:(n,s)=>s.actionableEvaluations-n.actionableEvaluations},{key:"symbol-asc",label:"Symbol A-Z",cmp:(n,s)=>(n.display||n.symbol).localeCompare(s.display||s.symbol)}],defaultSort:"winrate-desc",defaultFilter:"all",getKey:n=>n.symbol,getSearchText:n=>`${n.symbol} ${n.display||""} ${n.name||""}`,renderDetail:n=>this.renderDetail(n),searchPlaceholder:"Search ticker or name..."})),this.tableView.setItems(e),this.rerender()}rerender(){this.tableView&&(this.setSafeContent($(this.tableView.render(),"legacy Panel.setContent() migration")),this.tableView.bind(this.content,()=>this.rerender()))}renderDetail(e){return`
      <section style="padding:14px;display:flex;flex-direction:column;gap:10px">
        <div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start">
          <div>
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <strong style="font-size:calc(16px * var(--wm-panel-effective-scale, 1));letter-spacing:-0.02em">${l(e.name||e.symbol)}</strong>
              <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);font-family:var(--font-mono);text-transform:uppercase">${l(e.display||e.symbol)}</span>
              <span class="signal-badge ${oa(e.winRate)}">${l(la(e.winRate))}</span>
            </div>
            <div style="margin-top:6px;font-size:calc(12px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);line-height:1.5">${l(e.summary)}</div>
          </div>
          <div style="text-align:right;min-width:110px">
            <div style="font-size:calc(18px * var(--wm-panel-effective-scale, 1));font-weight:700;color:${re(e.avgSimulatedReturnPct)}">${l(T(e.avgSimulatedReturnPct))}</div>
            <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Avg simulated return</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Win Rate</div><div style="margin-top:4px">${l(T(e.winRate))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Direction Accuracy</div><div style="margin-top:4px">${l(T(e.directionAccuracy))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Cumulative</div><div style="margin-top:4px;color:${re(e.cumulativeSimulatedReturnPct)}">${l(T(e.cumulativeSimulatedReturnPct))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Signals</div><div style="margin-top:4px">${l(String(e.actionableEvaluations))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Rating Basis</div><div style="margin-top:4px">${l(e.ratingBasis==="technical_only"?"Technical only":e.ratingBasis)}</div></div>
        </div>
        <div style="display:grid;gap:6px">
          <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Recent Evaluations</div>
          ${e.evaluations.map(t=>`
            <div style="display:flex;justify-content:space-between;gap:12px;padding:8px 10px;border:1px solid var(--border);background:rgba(255,255,255,0.02);font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
              <span>${l(t.signal)} · ${l(t.outcome)} · ${l(T(t.simulatedReturnPct))}</span>
              <span style="color:var(--text-dim)">${l(new Date(Number(t.analysisAt)).toLocaleDateString())}</span>
            </div>
          `).join("")}
        </div>
      </section>
    `}}const li=Object.freeze(Object.defineProperty({__proto__:null,StockBacktestPanel:ca},Symbol.toStringTag,{value:"Module"}));function da(a){return a>=1e6?`${(a/1e6).toFixed(1)}M`:a>=1e3?`${(a/1e3).toFixed(1)}K`:String(a)}function pa(a){return a>=80?"#e74c3c":a>=50?"#e67e22":a>=25?"#f1c40f":"#27ae60"}class fa extends _{constructor(){super({id:"wsb-ticker-scanner",title:d("panels.wsbTickerScanner"),infoTooltip:d("components.wsbTickerScanner.infoTooltip"),showCount:!0,premium:"locked"});h(this,"_tickers",[]);h(this,"_hasData",!1);h(this,"_sortField","mentionCount");h(this,"_sortAsc",!1);this.content.addEventListener("click",e=>{const n=e.target.closest("[data-sort]");if(!n)return;const s=n.dataset.sort;s===this._sortField?this._sortAsc=!this._sortAsc:(this._sortField=s,this._sortAsc=!1),this._render()})}async fetchData(){var t,n,s;const e=L("wsbTickers");if((t=e==null?void 0:e.tickers)!=null&&t.length)return this.updateData(e.tickers),!0;try{const r=await fetch(_e("/api/bootstrap?keys=wsbTickers"),{signal:AbortSignal.timeout(5e3)});if(r.ok){const{data:o}=await r.json();if((s=(n=o.wsbTickers)==null?void 0:n.tickers)!=null&&s.length)return this.updateData(o.wsbTickers.tickers),!0}}catch{}return this.showError("No ticker data available yet",()=>{this.fetchData()},60),!1}updateData(e){this._tickers=[...e],this._hasData=this._tickers.length>0,this._hasData?(this.setCount(this._tickers.length),this._render()):(this.setCount(0),this.showError("No trending tickers found",()=>{this.fetchData()},120))}_sorted(){const e=this._sortAsc?1:-1;return[...this._tickers].sort((t,n)=>e*(t[this._sortField]-n[this._sortField]))}_sortIndicator(e){return e!==this._sortField?"":this._sortAsc?" ▲":" ▼"}_render(){const e=this._sorted(),t=Math.max(1,...e.map(o=>o.velocityScore)),n="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;color:var(--text-dim);text-transform:uppercase;padding:4px 6px;cursor:pointer;user-select:none;white-space:nowrap",s="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:5px 6px;vertical-align:middle",r=e.slice(0,50).map((o,c)=>{const p=pa(o.velocityScore),f=Math.max(4,Math.round(o.velocityScore/t*100)),m=o.subreddits.map(g=>`<span style="font-size:calc(8px * var(--wm-panel-effective-scale, 1));padding:1px 4px;border-radius:2px;background:rgba(255,255,255,0.06);color:var(--text-dim);margin-right:2px">r/${l(g)}</span>`).join("");return`<tr style="border-bottom:1px solid var(--border)">
        <td style="${s};color:var(--text-dim);text-align:right;min-width:20px">${c+1}</td>
        <td style="${s};font-family:'SF Mono',SFMono-Regular,Consolas,monospace;font-weight:700;color:var(--text)">${l(o.symbol)}</td>
        <td style="${s};text-align:right;color:var(--text)">${o.mentionCount}</td>
        <td style="${s};text-align:right;color:var(--text)">${da(o.totalScore)}</td>
        <td style="${s};min-width:80px">
          <div style="display:flex;align-items:center;gap:4px">
            <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${p};min-width:24px;text-align:right">${Math.round(o.velocityScore)}</span>
            <div style="flex:1;height:4px;border-radius:2px;background:rgba(255,255,255,0.08)">
              <div style="height:100%;width:${f}%;border-radius:2px;background:${p}"></div>
            </div>
          </div>
        </td>
        <td style="${s}">${m}</td>
      </tr>`}).join("");this.setSafeContent($(`
      <div style="overflow-x:auto;overflow-y:auto;max-height:480px">
        <table style="width:100%;border-collapse:collapse;border-spacing:0">
          <thead>
            <tr style="border-bottom:1px solid var(--border)">
              <th style="${n};text-align:right">#</th>
              <th style="${n};text-align:left">Ticker</th>
              <th style="${n};text-align:right" data-sort="mentionCount">Mentions${this._sortIndicator("mentionCount")}</th>
              <th style="${n};text-align:right" data-sort="totalScore">Score${this._sortIndicator("totalScore")}</th>
              <th style="${n};text-align:left" data-sort="velocityScore">Velocity${this._sortIndicator("velocityScore")}</th>
              <th style="${n};text-align:left">Source</th>
            </tr>
          </thead>
          <tbody>${r||'<tr><td colspan="6" style="padding:16px;text-align:center;color:var(--text-dim);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">No ticker data</td></tr>'}</tbody>
        </table>
      </div>
      <div style="margin-top:6px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Reddit · r/wallstreetbets, r/stocks, r/investing · sorted by ${this._sortField.replace(/([A-Z])/g," $1").toLowerCase()}</div>
    `,"legacy Panel.setContent() migration"))}}const ci=Object.freeze(Object.defineProperty({__proto__:null,WsbTickerScannerPanel:fa},Symbol.toStringTag,{value:"Module"}));function ua(a){const i=a.toUpperCase();return i==="LONG"?"badge-bullish":i==="SHORT"?"badge-bearish":"badge-neutral"}function ma(a){const i=a.toUpperCase();return i==="HIGH"?"badge-bullish":i==="LOW"?"badge-bearish":"badge-neutral"}function va(a){const i=a.toUpperCase();return i==="LONG"?d("components.marketImplications.directions.long"):i==="SHORT"?d("components.marketImplications.directions.short"):d("components.marketImplications.directions.hedge")}function ga(a){if(!a||a.length===0)return"";const i=Math.random().toString(36).slice(2,8),e=a.map((t,n)=>{const s=n<a.length-1?' <span style="color:var(--text-dim);margin:0 2px">&rarr;</span> ':"";return`<span class="chain-node" data-chain-id="${i}" data-node-idx="${n}" data-logic="${l(t.logic)}"
      style="cursor:pointer;border-bottom:1px dotted var(--text-dim)">${l(t.node)}</span>${s}`}).join("");return`
    <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:6px;line-height:1.8">
      <span style="text-transform:uppercase;letter-spacing:0.06em;opacity:0.6">${l(d("components.marketImplications.rationale"))}</span> ${e}
    </div>
    <div id="chain-logic-${i}" style="display:none;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);font-style:italic;margin-top:2px;padding-left:4px"></div>
  `}function ha(a){return`
    <div class="signal-card">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px">
        <span class="signal-badge ${ua(a.direction)}">${va(a.direction)}</span>
        <strong style="font-size:calc(14px * var(--wm-panel-effective-scale, 1));letter-spacing:-0.02em">${l(a.ticker)}</strong>
        ${a.name?`<span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${l(a.name)}</span>`:""}
        ${a.timeframe?`<span class="signal-badge badge-neutral" style="font-family:var(--font-mono)">${l(a.timeframe)}</span>`:""}
        ${a.confidence?`<span class="signal-badge ${ma(a.confidence)}">${l(a.confidence)}</span>`:""}
      </div>
      <div style="font-size:calc(13px * var(--wm-panel-effective-scale, 1));font-weight:600;line-height:1.4;margin-bottom:6px">${l(a.title)}</div>
      <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.55;color:var(--text-dim)">${l(a.narrative)}</div>
      ${ga(a.transmissionChain)}
      ${a.driver?`<div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:6px"><span style="text-transform:uppercase;letter-spacing:0.06em">${l(d("components.marketImplications.driver"))}</span> ${l(a.driver)}</div>`:""}
      ${a.riskCaveat?`<div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--yellow);padding:6px 8px;border:1px solid color-mix(in srgb,var(--yellow) 30%,transparent);background:color-mix(in srgb,var(--yellow) 8%,transparent);margin-top:6px">${l(a.riskCaveat)}</div>`:""}
    </div>
  `}class xa extends _{constructor(){super({id:"market-implications",title:d("components.marketImplications.title"),infoTooltip:d("components.marketImplications.infoTooltip"),premium:"locked"});h(this,"fwSelector");this.fwSelector=new jt({panelId:"market-implications",isPremium:Gt(),panel:this,note:d("components.marketImplications.appliesToNext")}),this.header.appendChild(this.fwSelector.el),this.content.addEventListener("click",e=>{const t=e.target.closest(".chain-node");if(!t)return;const n=t.getAttribute("data-chain-id"),s=t.getAttribute("data-node-idx"),r=t.getAttribute("data-logic"),o=this.content.querySelector(`#chain-logic-${n}`);if(!o)return;const c=o.style.display!=="none",p=o.getAttribute("data-open-idx")===s;c&&p?o.style.display="none":(o.textContent=r,o.setAttribute("data-open-idx",s),o.style.display="block")})}destroy(){this.fwSelector.destroy(),super.destroy()}renderImplications(e,t="live"){if(e.degraded||e.cards.length===0){this.showUnavailable();return}const n=e.generatedAt?Ut(new Date(e.generatedAt).getTime()):"";this.setDataBadge(t,n||d("components.marketImplications.signals",{count:e.cards.length})),this.resetRetryBackoff();const s=`
      <div style="display:flex;flex-direction:column;gap:10px">
        ${e.cards.map(ha).join("")}
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);padding:8px;border-top:1px solid var(--border);line-height:1.5;text-align:center">${l(d("components.marketImplications.disclaimer"))}</div>
      </div>
    `;this.setSafeContent($(s,"legacy Panel.setContent() migration"))}showUnavailable(e=d("components.marketImplications.unavailable")){this.setDataBadge("unavailable");const t=`
      <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);line-height:1.5;padding:16px 0;text-align:center">${l(e)}</div>
    `;this.setSafeContent($(t,"legacy Panel.setContent() migration"))}}const di=Object.freeze(Object.defineProperty({__proto__:null,MarketImplicationsPanel:xa},Symbol.toStringTag,{value:"Module"}));function I(a){const i=Math.abs(a);return i>=1e3?Math.round(a).toLocaleString():i>=100?a.toFixed(2):i>=1?a.toFixed(4):a.toPrecision(4)}function Ne(a){return`${a>0?"+":""}${a.toFixed(1)}%`}function ze(a){return`${a>0?"+":""}${a.toFixed(4)}`}function X(a){return a>0?"change-positive":a<0?"change-negative":"fx-flat"}const ya=6e4,oe="stress";class ba extends _{constructor(){super({id:"fx",title:d("panels.fx"),defaultRowSpan:2,infoTooltip:d("components.fx.infoTooltip")});h(this,"stress",[]);h(this,"usd",[]);h(this,"eur",[]);h(this,"rub",[]);h(this,"degraded",[]);h(this,"tab",oe);h(this,"tabForced",!1);h(this,"loaded",!1);h(this,"inFlight",!1);h(this,"degradedRetryTimer",null);this.content.addEventListener("click",e=>this.handleClick(e))}async fetchData(){var e,t;if(!this.inFlight){this.inFlight=!0;try{const{getFxPanelData:n}=await C(async()=>{const{getFxPanelData:r}=await import("./index-D70I6syA.js");return{getFxPanelData:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])),s=await n();if(!((e=this.element)!=null&&e.isConnected))return;this.updateFx(s)}catch(n){if(this.isAbortError(n)||!((t=this.element)!=null&&t.isConnected))return;this.showError(d("common.failedMarketData"),()=>void this.fetchData())}finally{this.inFlight=!1}}}updateFx(e){this.stress=e.stress,this.usd=e.usd,this.eur=e.eur,this.rub=e.rub,this.degraded=e.degraded,this.loaded=!0,this.render(),this.scheduleDegradedRetry()}scheduleDegradedRetry(){this.clearDegradedRetry(),this.degraded.length!==0&&(this.degradedRetryTimer=setTimeout(()=>{var e;this.degradedRetryTimer=null,(e=this.element)!=null&&e.isConnected&&this.fetchData()},ya))}clearDegradedRetry(){this.degradedRetryTimer!==null&&(clearTimeout(this.degradedRetryTimer),this.degradedRetryTimer=null)}destroy(){this.clearDegradedRetry(),super.destroy()}handleClick(e){const t=e.target.closest(".panel-tab");t!=null&&t.dataset.tab&&(this.tab=t.dataset.tab,this.tabForced=!1,this.render())}hasStress(){return this.stress.length>0}hasSpot(){return this.usd.length>0||this.eur.length>0}hasRub(){return this.rub.length>0}render(){if(!this.loaded)return;if(!this.hasStress()&&!this.hasSpot()&&!this.hasRub()){this.showError(d("common.failedMarketData"),()=>void this.fetchData());return}this.tabForced&&this.tab!==oe&&this.hasStress()&&(this.tab=oe,this.tabForced=!1),this.tab==="stress"&&!this.hasStress()&&(this.tab="spot",this.tabForced=!0),this.tab==="spot"&&!this.hasSpot()&&(this.tab="rub",this.tabForced=!0),this.tab==="rub"&&!this.hasRub()&&(this.tab="stress",this.tabForced=!0);const e=this.tab==="stress"?this.renderStress():this.tab==="spot"?this.renderSpot():this.renderRub();this.setSafeContent(w`${this.renderTabs()}${e}${this.renderDegradedNotice()}`)}renderDegradedNotice(){if(this.degraded.length===0)return w``;const e=this.degraded.map(t=>d(`components.fx.source.${t}`)).join(", ");return w`<div class="fx-degraded">${d("components.fx.degraded",{sources:e})}</div>`}renderTabs(){const e=[];return this.hasStress()&&e.push(w`<button class="panel-tab ${this.tab==="stress"?"active":""}" data-tab="stress">${d("components.fx.tabs.stress")}</button>`),this.hasSpot()&&e.push(w`<button class="panel-tab ${this.tab==="spot"?"active":""}" data-tab="spot">${d("components.fx.tabs.spot")}</button>`),this.hasRub()&&e.push(w`<button class="panel-tab ${this.tab==="rub"?"active":""}" data-tab="rub">${d("components.fx.tabs.rub")}</button>`),w`<div class="panel-tabs">${M(e)}</div>`}renderStress(){const e=M(this.stress.map(c=>{const p=c.yoyChange===null?w`<td class="fx-na">--</td>`:w`<td class="${X(c.yoyChange)}">${Ne(c.yoyChange)}</td>`,m=c.peakRate!==null&&c.troughRate!==null&&c.peakDate!==null&&c.troughDate!==null?w`<td class="fx-window">
            <span class="fx-window-rates">${I(c.peakRate)} → ${I(c.troughRate)}</span>
            <span class="fx-window-dates">${c.peakDate} → ${c.troughDate}</span>
          </td>`:w`<td class="fx-na">--</td>`;return w`
        <tr class="${c.stressed?"fx-stressed":""}">
          <td class="fx-ccy">
            <span class="fx-ccy-code">${c.currency}</span>
            <span class="fx-ccy-country">${c.countryCode}</span>
          </td>
          ${p}
          <td class="${X(c.drawdown24m)}">${Ne(c.drawdown24m)}</td>
          ${m}
        </tr>`})),t=this.stress.map(c=>c.asOf).filter(c=>c!==null),n=t.length>0?t.reduce((c,p)=>c<p?c:p):null,s=t.length>0?t.reduce((c,p)=>c>p?c:p):null,r=n===null||s===null?null:n===s?s:`${n} → ${s}`,o=this.stress.filter(c=>c.stressed).length;return w`
      <div class="fx-scroll">
        <table class="fx-table">
          <thead>
            <tr>
              <th class="fx-ccy">${d("components.fx.currency")}</th>
              <th>${d("components.fx.yoy")}</th>
              <th>${d("components.fx.drawdown")}</th>
              <th class="fx-window">${d("components.fx.peakToTrough")}</th>
            </tr>
          </thead>
          <tbody>${e}</tbody>
        </table>
      </div>
      <div class="fx-footer">
        ${d("components.fx.stressedCount",{stressed:o,total:this.stress.length,threshold:`${Vt}%`})}
        · ${d("components.fx.sourceYahoo")}${r?` · ${r}`:""}
      </div>`}renderSpot(){const e=[];if(this.usd.length>0){const t=M(this.usd.map(n=>w`
        <tr>
          <td class="fx-ccy"><span class="fx-ccy-code">${n.currency}</span></td>
          <td>${I(n.unitsPerUsd)}</td>
          <td class="fx-inverse">${I(n.usdPerUnit)}</td>
        </tr>`));e.push(w`
        <div class="fx-section-title">${d("components.fx.usdBase")}</div>
        <div class="fx-scroll">
          <table class="fx-table">
            <thead>
              <tr>
                <th class="fx-ccy">${d("components.fx.currency")}</th>
                <th>${d("components.fx.perUsd")}</th>
                <th class="fx-inverse">${d("components.fx.usdPerUnit")}</th>
              </tr>
            </thead>
            <tbody>${t}</tbody>
          </table>
        </div>
        <div class="fx-footer">${d("components.fx.sourceYahoo")}</div>`)}if(this.eur.length>0){const t=M(this.eur.map(n=>{const s=n.change1d===null?w`<td class="fx-na">--</td>`:w`<td class="${X(n.change1d)}">${ze(n.change1d)}</td>`;return w`
          <tr>
            <td class="fx-ccy"><span class="fx-ccy-code">EUR/${n.currency}</span></td>
            <td>${I(n.rate)}</td>
            ${s}
          </tr>`}));e.push(w`
        <div class="fx-section-title">${d("components.fx.eurBase")}</div>
        <div class="fx-scroll">
          <table class="fx-table">
            <thead>
              <tr>
                <th class="fx-ccy">${d("components.fx.pair")}</th>
                <th>${d("components.fx.rate")}</th>
                <th>${d("components.fx.change1d")}</th>
              </tr>
            </thead>
            <tbody>${t}</tbody>
          </table>
        </div>
        <div class="fx-footer">${d("components.fx.sourceEcb")}</div>`)}return M(e)}renderRub(){const e=M(this.rub.map(t=>{const n=t.change1d===null?w`<td class="fx-na">--</td>`:w`<td class="${X(t.change1d)}">${ze(t.change1d)}</td>`;return w`
        <tr>
          <td class="fx-ccy"><span class="fx-ccy-code">${t.currency}</span></td>
          <td>${I(t.rubPerUnit)}</td>
          ${n}
        </tr>`}));return w`
      <div class="fx-section-title">${d("components.fx.rubBase")}</div>
      <div class="fx-scroll">
        <table class="fx-table">
          <thead>
            <tr>
              <th class="fx-ccy">${d("components.fx.currency")}</th>
              <th>${d("components.fx.rubPerUnit")}</th>
              <th>${d("components.fx.change1d")}</th>
            </tr>
          </thead>
          <tbody>${e}</tbody>
        </table>
      </div>
      <div class="fx-footer">${d("components.fx.sourceCbr")}</div>`}}const pi=Object.freeze(Object.defineProperty({__proto__:null,FxPanel:ba},Symbol.toStringTag,{value:"Module"})),$a=Bt(()=>new It(Ce(),{fetch:Ot}));function Le(a){var e,t,n,s,r,o,c,p,f,m,g,y,v,u,x,b,S,k,R,F,A,q,Y;const i=a.signals;return{timestamp:a.timestamp,verdict:a.verdict,bullishCount:a.bullishCount,totalCount:a.totalCount,signals:{liquidity:{status:((e=i==null?void 0:i.liquidity)==null?void 0:e.status)??"UNKNOWN",value:((t=i==null?void 0:i.liquidity)==null?void 0:t.value)??null,sparkline:((n=i==null?void 0:i.liquidity)==null?void 0:n.sparkline)??[]},flowStructure:{status:((s=i==null?void 0:i.flowStructure)==null?void 0:s.status)??"UNKNOWN",btcReturn5:((r=i==null?void 0:i.flowStructure)==null?void 0:r.btcReturn5)??null,qqqReturn5:((o=i==null?void 0:i.flowStructure)==null?void 0:o.qqqReturn5)??null},macroRegime:{status:((c=i==null?void 0:i.macroRegime)==null?void 0:c.status)??"UNKNOWN",qqqRoc20:((p=i==null?void 0:i.macroRegime)==null?void 0:p.qqqRoc20)??null,xlpRoc20:((f=i==null?void 0:i.macroRegime)==null?void 0:f.xlpRoc20)??null},technicalTrend:{status:((m=i==null?void 0:i.technicalTrend)==null?void 0:m.status)??"UNKNOWN",btcPrice:((g=i==null?void 0:i.technicalTrend)==null?void 0:g.btcPrice)??null,sma50:((y=i==null?void 0:i.technicalTrend)==null?void 0:y.sma50)??null,sma200:((v=i==null?void 0:i.technicalTrend)==null?void 0:v.sma200)??null,vwap30d:((u=i==null?void 0:i.technicalTrend)==null?void 0:u.vwap30d)??null,mayerMultiple:((x=i==null?void 0:i.technicalTrend)==null?void 0:x.mayerMultiple)??null,sparkline:((b=i==null?void 0:i.technicalTrend)==null?void 0:b.sparkline)??[]},hashRate:{status:((S=i==null?void 0:i.hashRate)==null?void 0:S.status)??"UNKNOWN",change30d:((k=i==null?void 0:i.hashRate)==null?void 0:k.change30d)??null},priceMomentum:{status:((R=i==null?void 0:i.priceMomentum)==null?void 0:R.status)??"UNKNOWN"},fearGreed:{status:((F=i==null?void 0:i.fearGreed)==null?void 0:F.status)??"UNKNOWN",value:((A=i==null?void 0:i.fearGreed)==null?void 0:A.value)??null,history:((q=i==null?void 0:i.fearGreed)==null?void 0:q.history)??[]}},meta:{qqqSparkline:((Y=a.meta)==null?void 0:Y.qqqSparkline)??[]},unavailable:a.unavailable}}function K(a,i=80,e=24,t="#4fc3f7"){if(!a||a.length<2)return"";const n=Math.min(...a),r=Math.max(...a)-n||1,o=a.map((c,p)=>{const f=p/(a.length-1)*i,m=e-(c-n)/r*(e-2)-1;return`${f.toFixed(1)},${m.toFixed(1)}`}).join(" ");return`<svg width="${i}" height="${e}" viewBox="0 0 ${i} ${e}" class="signal-sparkline"><polyline points="${o}" fill="none" stroke="${t}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`}function wa(a,i=48){if(a===null)return'<span class="signal-value unknown">N/A</span>';const e=Math.max(0,Math.min(100,a)),t=(i-6)/2,n=2*Math.PI*t,s=n-e/100*n;let r="#f44336";return e>=75?r="#4caf50":e>=50?r="#ff9800":e>=25&&(r="#ff5722"),`<svg width="${i}" height="${i}" viewBox="0 0 ${i} ${i}" class="fg-donut">
    <circle cx="${i/2}" cy="${i/2}" r="${t}" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="5"/>
    <circle cx="${i/2}" cy="${i/2}" r="${t}" fill="none" stroke="${r}" stroke-width="5" stroke-dasharray="${n}" stroke-dashoffset="${s}" stroke-linecap="round" transform="rotate(-90 ${i/2} ${i/2})"/>
    <text x="${i/2}" y="${i/2+4}" text-anchor="middle" fill="${r}" style="font-size:calc(12px * var(--wm-panel-effective-scale, 1))" font-weight="bold">${e}</text>
  </svg>`}function Sa(a){const i=a.toUpperCase();return["GREED","EXTREME GREED"].includes(i)?"#4caf50":["FEAR","EXTREME FEAR"].includes(i)?"#f44336":"#4fc3f7"}function Be(a){const i=a.toUpperCase();return["BULLISH","RISK-ON","GROWING","PROFITABLE","ALIGNED","NORMAL","EXTREME GREED","GREED"].includes(i)?"badge-bullish":["BEARISH","DEFENSIVE","DECLINING","SQUEEZE","PASSIVE GAP","EXTREME FEAR","FEAR"].includes(i)?"badge-bearish":"badge-neutral"}function O(a,i="%"){return a===null?"N/A":`${a>0?"+":""}${a.toFixed(1)}${i}`}class _a extends _{constructor(){super({id:"macro-signals",title:d("panels.macroSignals"),showCount:!1,infoTooltip:d("components.macroSignals.infoTooltip")});h(this,"data",null);h(this,"loading",!0);h(this,"error",null);h(this,"lastTimestamp","")}async fetchData(){const e=L("macroSignals");return e!=null&&e.signals&&e.totalCount>0?(this.data=Le(e),this.lastTimestamp=this.data.timestamp,this.error=null,this.loading=!1,this.renderPanel(),this.refreshFromRpc(),!0):this.refreshFromRpc()}async refreshFromRpc(){var n,s,r;try{const o=await $a().getMacroSignals({});if(!((n=this.element)!=null&&n.isConnected))return!1;this.data=Le(o),this.error=null}catch(o){if(this.isAbortError(o)||!((s=this.element)!=null&&s.isConnected))return!1;if(!this.data)console.warn("[MacroSignals] Fetch error:",o),this.error=d("common.noDataShort");else return!1}this.loading=!1,this.renderPanel();const e=((r=this.data)==null?void 0:r.timestamp)??"",t=e!==this.lastTimestamp;return this.lastTimestamp=e,t}renderPanel(){var r,o,c;if(this.loading){this.showLoading(d("common.computingSignals"));return}if(this.error||!this.data){this.showError(this.error||d("common.noDataShort"),()=>void this.fetchData());return}if(this.data.unavailable){this.showError(d("common.upstreamUnavailable"),()=>void this.fetchData());return}const e=this.data,t=e.signals,s=`
      <div class="macro-signals-container">
        <div class="macro-verdict ${e.verdict==="BUY"?"verdict-buy":e.verdict==="CASH"?"verdict-cash":"verdict-unknown"}">
          <span class="verdict-label">${d("components.macroSignals.overall")}</span>
          <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));background:rgba(247,147,26,0.15);color:#f7931a;border:1px solid rgba(247,147,26,0.3);padding:1px 5px;border-radius:3px;font-weight:700;letter-spacing:0.04em;vertical-align:middle">&#x20bf; BTC</span>
          <span class="verdict-value">${e.verdict==="BUY"?d("components.macroSignals.verdict.buy"):e.verdict==="CASH"?d("components.macroSignals.verdict.cash"):l(e.verdict)}</span>
          <span class="verdict-detail">${d("components.macroSignals.bullish",{count:String(e.bullishCount),total:String(e.totalCount)})}</span>
        </div>
        <div class="signals-grid">
          ${this.renderSignalCard(d("components.macroSignals.signals.liquidity"),t.liquidity.status,O(t.liquidity.value),K(t.liquidity.sparkline,60,20,"#4fc3f7"),"JPY 30d ROC","https://www.tradingview.com/symbols/JPYUSD/")}
          ${this.renderSignalCard(d("components.macroSignals.signals.flow"),t.flowStructure.status,`BTC ${O(t.flowStructure.btcReturn5)} / QQQ ${O(t.flowStructure.qqqReturn5)}`,"","5d returns",null)}
          ${this.renderSignalCard(d("components.macroSignals.signals.regime"),t.macroRegime.status,`QQQ ${O(t.macroRegime.qqqRoc20)} / XLP ${O(t.macroRegime.xlpRoc20)}`,K(e.meta.qqqSparkline,60,20,"#ab47bc"),"20d ROC","https://www.tradingview.com/symbols/QQQ/")}
          ${this.renderSignalCard(d("components.macroSignals.signals.btcTrend"),t.technicalTrend.status,`$${((r=t.technicalTrend.btcPrice)==null?void 0:r.toLocaleString())??"N/A"}`,K(t.technicalTrend.sparkline,60,20,"#ff9800"),`SMA50: $${((o=t.technicalTrend.sma50)==null?void 0:o.toLocaleString())??"-"} | VWAP: $${((c=t.technicalTrend.vwap30d)==null?void 0:c.toLocaleString())??"-"} | Mayer: ${t.technicalTrend.mayerMultiple??"-"}`,"https://www.tradingview.com/symbols/BTCUSD/")}
          ${this.renderSignalCard(d("components.macroSignals.signals.hashRate"),t.hashRate.status,O(t.hashRate.change30d),"","30d change","https://mempool.space/mining")}
          ${this.renderSignalCard(d("components.macroSignals.signals.momentum"),t.priceMomentum.status,"","","Mayer Multiple",null)}
          ${this.renderFearGreedCard(t.fearGreed)}
        </div>
      </div>
    `;this.setSafeContent($(s,"legacy Panel.setContent() migration"))}renderSignalCard(e,t,n,s,r,o){const c=Be(t);return`
      <div class="signal-card${o?" signal-card-linked":""}">
        <div class="signal-header">
          ${o?`<a href="${l(o)}" target="_blank" rel="noopener" class="signal-name signal-card-link">${l(e)}</a>`:`<span class="signal-name">${l(e)}</span>`}
          <span class="signal-badge ${c}">${l(t)}</span>
        </div>
        <div class="signal-body">
          ${s?`<div class="signal-sparkline-wrap">${s}</div>`:""}
          ${n?`<span class="signal-value">${n}</span>`:""}
        </div>
        ${r?`<div class="signal-detail">${l(r)}</div>`:""}
      </div>
    `}renderFearGreedCard(e){const t=Be(e.status);return`
      <div class="signal-card signal-card-fg">
        <div class="signal-header">
          <span class="signal-name">${d("components.macroSignals.signals.fearGreed")}</span>
          <span class="signal-badge ${t}">${l(e.status)}</span>
        </div>
        <div class="signal-body signal-body-fg">
          <div style="display:flex;align-items:center;gap:8px">
            ${wa(e.value)}
            ${K(e.history.map(n=>n.value),80,28,Sa(e.status))}
          </div>
        </div>
        <div class="signal-detail">
          <a href="https://alternative.me/crypto/fear-and-greed-index/" target="_blank" rel="noopener">alternative.me</a>
        </div>
      </div>
    `}}const fi=Object.freeze(Object.defineProperty({__proto__:null,MacroSignalsPanel:_a},Symbol.toStringTag,{value:"Module"}));function Ie(a){return a<=20?"#e74c3c":a<=40?"#e67e22":a<=60?"#f1c40f":a<=80?"#2ecc71":"#27ae60"}function B(a,i=2){return a==null?"N/A":a.toFixed(i)}function ka(a){return a<=20?{state:"Crisis / Risk-Off",stance:"CASH",color:"#c0392b"}:a<=35?{state:"Stressed / Defensive",stance:"DEFENSIVE",color:"#e67e22"}:a<=50?{state:"Fragile / Hedged",stance:"HEDGED",color:"#f1c40f"}:a<=65?{state:"Stable / Normal",stance:"NORMAL",color:"#2ecc71"}:{state:"Strong / Risk-On",stance:"AGGRESSIVE",color:"#27ae60"}}function Ca(a){var o,c,p;const i=[],e=((o=a.momentum)==null?void 0:o.score)??50,t=((c=a.sentiment)==null?void 0:c.score)??50,n=a.cnnFearGreed,s=a.compositeScore,r=((p=a.trend)==null?void 0:p.score)??50;return e<10&&i.push("Momentum at extreme low — broad equity selling pressure"),t<15&&i.push("Sentiment in extreme fear zone"),n>0&&Math.abs(s-n)>20&&i.push(`CNN F&G ${Math.round(n)} diverges ${Math.abs(Math.round(s-n))}pts from composite — sentiment/structural disconnect`),r<20&&i.push("Trend in breakdown — price structure deteriorating"),i}function Ra(a,i,e,t){function c(b,S){const k=b*Math.PI/180;return`${(100+S*Math.cos(k)).toFixed(2)},${(100-S*Math.sin(k)).toFixed(2)}`}const f=[{a1:180,a2:144,fill:"#c0392b"},{a1:144,a2:108,fill:"#e67e22"},{a1:108,a2:72,fill:"#f1c40f"},{a1:72,a2:36,fill:"#2ecc71"},{a1:36,a2:0,fill:"#27ae60"}].map(b=>`<path d="M${c(b.a1,88)} A88,88 0 0,0 ${c(b.a2,88)} L${c(b.a2,60)} A60,60 0 0,1 ${c(b.a1,60)} Z" fill="${b.fill}" opacity="0.88"/>`).join(""),m=(180-a*1.8)*Math.PI/180,g=(100+75*Math.cos(m)).toFixed(1),y=(100-75*Math.sin(m)).toFixed(1),v=e!=null?`${e>=0?"+":""}${e.toFixed(1)} vs prev`:"",u=e!=null?e>=0?"#2ecc71":"#e74c3c":"",x=v?`<div data-gauge-role="delta" style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));line-height:1.25;color:${u}">${v}</div>`:"";return`<div data-gauge-role="root" style="display:flex;flex-direction:column;align-items:center;text-align:center;font-family:system-ui,-apple-system,sans-serif">
    <svg viewBox="0 0 200 115" width="200" height="115" style="display:block;max-width:100%" aria-hidden="true">
      ${f}
      <line x1="100" y1="100" x2="${g}" y2="${y}" stroke="${t}" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="100" cy="100" r="6" fill="${t}"/>
      <circle cx="100" cy="100" r="3" fill="rgba(8,8,8,0.9)"/>
    </svg>
    <div data-gauge-role="score" style="font-size:calc(26px * var(--wm-panel-effective-scale, 1));font-weight:700;line-height:1;color:${t}">${Math.round(a)}</div>
    <div data-gauge-role="label" style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:600;line-height:1.25;color:${t};letter-spacing:0.07em">${i}</div>
    ${x}
  </div>`}function Aa(a){var s,r,o,c,p,f,m,g,y,v;const i=a.composite;if(!(i!=null&&i.score))return null;const e=a.categories??{},t=a.headerMetrics??{},n=u=>u?{score:Number(u.score??50),weight:Number(u.weight??0),contribution:Number(u.contribution??0),degraded:!!u.degraded,inputsJson:JSON.stringify(u.inputs??{})}:void 0;return{compositeScore:Number(i.score),compositeLabel:String(i.label??""),previousScore:Number(i.previous??0),seededAt:String(a.timestamp??""),sentiment:n(e.sentiment),volatility:n(e.volatility),positioning:n(e.positioning),trend:n(e.trend),breadth:n(e.breadth),momentum:n(e.momentum),liquidity:n(e.liquidity),credit:n(e.credit),macro:n(e.macro),crossAsset:n(e.crossAsset),vix:Number(((s=t==null?void 0:t.vix)==null?void 0:s.value)??0),hySpread:Number(((r=t==null?void 0:t.hySpread)==null?void 0:r.value)??0),yield10y:Number(((o=t==null?void 0:t.yield10y)==null?void 0:o.value)??0),putCallRatio:Number(((c=t==null?void 0:t.putCall)==null?void 0:c.value)??0),pctAbove200d:Number(((p=t==null?void 0:t.pctAbove200d)==null?void 0:p.value)??0),cnnFearGreed:Number(((f=t==null?void 0:t.cnnFearGreed)==null?void 0:f.value)??0),cnnLabel:String(((m=t==null?void 0:t.cnnFearGreed)==null?void 0:m.label)??""),aaiiBull:Number(((g=t==null?void 0:t.aaiBull)==null?void 0:g.value)??0),aaiiBear:Number(((y=t==null?void 0:t.aaiBear)==null?void 0:y.value)??0),fedRate:String(((v=t==null?void 0:t.fedRate)==null?void 0:v.value)??""),unavailable:!1}}const Fa=["sentiment","volatility","positioning","trend","breadth","momentum","liquidity","credit","macro","crossAsset"],Pa={sentiment:"Sentiment",volatility:"Volatility",positioning:"Positioning",trend:"Trend",breadth:"Breadth",momentum:"Momentum",liquidity:"Liquidity",credit:"Credit",macro:"Macro",crossAsset:"Cross-Asset"};class Ea extends _{constructor(){super({id:"fear-greed",title:d("panels.fearGreed"),showCount:!1,infoTooltip:"Composite sentiment index: 10 weighted categories (volatility, positioning, breadth, momentum, liquidity, credit, macro, cross-asset, sentiment, trend)."});h(this,"data",null)}async fetchData(){const e=L("fearGreedIndex");if(e&&!e.unavailable){const n=Aa(e);if(n&&n.compositeScore>0)return this.data=n,this.renderPanel(),this.refreshFromRpc(),!0}return this.showLoading(),this.refreshFromRpc()}async refreshFromRpc(){try{const{MarketServiceClient:e}=await C(async()=>{const{MarketServiceClient:r}=await import("./rpc-client-market-v1-Bo995CQG.js");return{MarketServiceClient:r}},[]),{getRpcBaseUrl:t}=await C(async()=>{const{getRpcBaseUrl:r}=await import("./embed-url-C3Ug1l3S.js").then(o=>o.al);return{getRpcBaseUrl:r}},__vite__mapDeps([1,2,3,4,5,6,7,12])),s=await new e(t(),{fetch:(...r)=>globalThis.fetch(...r)}).getFearGreedIndex({});return s.unavailable?(this.data||this.showError(d("common.noDataShort"),()=>void this.fetchData()),!1):(this.data=s,this.renderPanel(),!0)}catch(e){return this.data||this.showError(e instanceof Error?e.message:d("common.failedToLoad"),()=>void this.fetchData()),!1}}renderPanel(){if(!this.data){this.showError(d("common.noDataShort"),()=>void this.fetchData());return}const e=this.data,t=e.compositeScore,n=l(e.compositeLabel),s=e.previousScore,r=s>0?t-s:null,o=Ie(t),c=ka(t),p=Ca(e),f=Fa.map(u=>{const x=e[u];if(!x)return"";const b=Math.round(x.score??50),S=Math.round((x.weight??0)*100),k=(x.contribution??0).toFixed(1),R=x.degraded?' <span style="color:#e67e22;font-size:calc(10px * var(--wm-panel-effective-scale, 1))">degraded</span>':"",F=Ie(b),A=Pa[u]??u;return`
        <div style="margin:4px 0">
          <div style="display:flex;justify-content:space-between;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
            <span>${l(A)}${R}</span>
            <span style="color:${F};font-weight:600">${b}</span>
          </div>
          <div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;margin:2px 0">
            <div style="width:${b}%;height:100%;background:${F};border-radius:2px;transition:width 0.3s"></div>
          </div>
          <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${S}% weight &middot; +${k} pts</div>
        </div>`}).join(""),m=(u,x)=>`<div style="text-align:center;padding:6px 4px">
        <div style="font-size:calc(18px * var(--wm-panel-effective-scale, 1));font-weight:600;color:var(--text)">${l(x)}</div>
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:2px">${l(u)}</div>
      </div>`,g=[m("VIX",e.vix>0?B(e.vix,2):"N/A"),m("HY Spread",e.hySpread>0?`${B(e.hySpread,2)}%`:"N/A"),m("10Y Yield",e.yield10y>0?`${B(e.yield10y,2)}%`:"N/A"),m("P/C Ratio",e.putCallRatio>0?B(e.putCallRatio,2):"N/A"),m("% > 200d",e.pctAbove200d?`${B(e.pctAbove200d,1)}%`:"N/A"),m("CNN F&G",e.cnnFearGreed?`${Math.round(e.cnnFearGreed)}`:"N/A"),m("AAII Bull",e.aaiiBull?`${B(e.aaiiBull,1)}%`:"N/A"),m("AAII Bear",e.aaiiBear?`${B(e.aaiiBear,1)}%`:"N/A"),m("Fed Rate",e.fedRate||"N/A")].join(""),y=p.length>0?`<div style="margin-bottom:10px">
          ${p.map(u=>`<div style="display:flex;align-items:center;gap:6px;padding:5px 8px;margin-bottom:4px;border-radius:4px;border:1px solid #e67e22;background:rgba(230,126,34,0.08);font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:#e67e22">&#9888; ${l(u)}</div>`).join("")}
        </div>`:"",v=`
      <div style="padding:12px 14px">
        <div style="text-align:center;margin-bottom:12px">
          <div style="text-align:center;font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${c.color};letter-spacing:0.06em;text-transform:uppercase;margin-bottom:4px">${l(c.state)}</div>
          ${Ra(t,n,r,o)}
          <div style="text-align:center;margin-top:6px;margin-bottom:8px">
            <span style="display:inline-block;padding:3px 12px;border-radius:999px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:700;color:#fff;background:${c.color};letter-spacing:0.08em">${l(c.stance)}</span>
          </div>
        </div>
        ${y}
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:rgba(255,255,255,0.04);border-radius:8px;padding:4px;margin-bottom:12px">
          ${g}
        </div>
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px">Category Breakdown</div>
        ${f}
      </div>`;this.setSafeContent($(v,"legacy Panel.setContent() migration"))}}const ui=Object.freeze(Object.defineProperty({__proto__:null,FearGreedPanel:Ea},Symbol.toStringTag,{value:"Module"}));function ct(a){return a<=-20?"#e74c3c":a<=-10?"#e67e22":a<0?"#f39c12":a<10?"#95a5a6":a<20?"#27ae60":"#2ecc71"}function Da(a){return a<=-20?"Extreme Bearish":a<=-10?"Bearish":a<0?"Mildly Bearish":a<10?"Neutral":a<20?"Bullish":"Extreme Bullish"}function le(a,i,e,t){return`<div style="margin:4px 0">
    <div style="display:flex;justify-content:space-between;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:2px">
      <span>${l(e)}</span>
      <span style="color:${i};font-weight:600">${l(t)}</span>
    </div>
    <div style="height:6px;background:rgba(255,255,255,0.08);border-radius:3px">
      <div style="width:${Math.min(a,100)}%;height:100%;background:${i};border-radius:3px;transition:width 0.3s"></div>
    </div>
  </div>`}function Ta(a){const i=ct(a),e=Math.max(-60,Math.min(60,a)),t=50,n=Math.abs(e)/60*50,s=e>=0?t:t-n;return`<div style="margin:8px 0">
    <div style="display:flex;justify-content:space-between;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:3px">
      <span>Bull-Bear Spread</span>
      <span style="color:${i};font-weight:700">${e>=0?"+":""}${a.toFixed(1)}%</span>
    </div>
    <div style="position:relative;height:10px;background:rgba(255,255,255,0.06);border-radius:4px">
      <div style="position:absolute;top:0;bottom:0;left:50%;width:1px;background:rgba(255,255,255,0.2)"></div>
      <div style="position:absolute;top:0;bottom:0;left:${s.toFixed(1)}%;width:${n.toFixed(1)}%;background:${i};border-radius:3px;transition:all 0.3s"></div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:2px">
      <span>Bearish</span>
      <span>Bullish</span>
    </div>
  </div>`}function Ma(a){if(a.length<2)return"";const i=[...a].reverse(),e=280,t=60,n=4,s=i.map(b=>b.spread),r=Math.max(Math.abs(Math.min(...s)),Math.abs(Math.max(...s)),20),o=(e-n*2)/(i.length-1),c=t/2,p=(c-n)/r,m=i.map((b,S)=>{const k=(n+S*o).toFixed(1),R=(c-b.spread*p).toFixed(1);return`${k},${R}`}).join(" "),g=i.map((b,S)=>{const k=n+S*o-1,R=Math.abs(b.spread)*p,F=b.spread>=0?c-R:c,A=b.spread>=0?"rgba(39,174,96,0.25)":"rgba(231,76,60,0.25)";return`<rect x="${k.toFixed(1)}" y="${F.toFixed(1)}" width="2" height="${R.toFixed(1)}" fill="${A}" rx="0.5"/>`}).join(""),y=`<line x1="${n}" y1="${c}" x2="${e-n}" y2="${c}" stroke="rgba(255,255,255,0.15)" stroke-width="0.5" stroke-dasharray="3,3"/>`,v=c+20*p,u=`<line x1="${n}" y1="${v.toFixed(1)}" x2="${e-n}" y2="${v.toFixed(1)}" stroke="rgba(231,76,60,0.3)" stroke-width="0.5" stroke-dasharray="2,4"/>`,x=`<text x="${e-n}" y="${(v-2).toFixed(1)}" text-anchor="end" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))" fill="rgba(231,76,60,0.5)" font-family="system-ui,sans-serif">-20 buy signal</text>`;return`<div style="margin:8px 0">
    <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px">52-Week Spread History</div>
    <svg viewBox="0 0 ${e} ${t}" width="100%" height="${t}" style="display:block">
      ${g}
      ${y}
      ${u}
      ${x}
      <polyline points="${m}" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.2" stroke-linejoin="round"/>
    </svg>
  </div>`}class Na extends _{constructor(){super({id:"aaii-sentiment",title:"AAII Investor Sentiment",showCount:!1,infoTooltip:"Weekly AAII survey: individual investors report 6-month market outlook as bullish, neutral, or bearish. Spread below -20 is a historical contrarian buy signal."});h(this,"data",null)}async fetchData(){var t;const e=L("aaiiSentiment");if(e!=null&&e.latest)return this.data=e,this.renderPanel(),!0;try{const n=await fetch(_e("/api/bootstrap?keys=aaiiSentiment"),{signal:AbortSignal.timeout(5e3)});if(n.ok){const{data:s}=await n.json();if((t=s.aaiiSentiment)!=null&&t.latest)return this.data=s.aaiiSentiment,this.renderPanel(),!0}}catch{}return this.showError("AAII sentiment data unavailable",()=>{this.fetchData()},300),!1}renderPanel(){var R;if(!((R=this.data)!=null&&R.latest)){this.showError(d("common.noDataShort"),()=>void this.fetchData());return}const e=this.data,{latest:t,previous:n,avg8w:s,historicalAvg:r,extremes:o,weeks:c}=e,p=ct(t.spread),f=Da(t.spread),m=n==null?void 0:n.spread,g=m!=null?t.spread-m:null,y=g!=null?`<span style="color:${g>=0?"#2ecc71":"#e74c3c"};font-size:calc(10px * var(--wm-panel-effective-scale, 1));margin-left:4px">${g>=0?"+":""}${g.toFixed(1)} vs prev</span>`:"",v=t.spread<=-20?`<div style="display:flex;align-items:center;gap:6px;padding:6px 8px;margin:8px 0;border-radius:4px;border:1px solid #2ecc71;background:rgba(46,204,113,0.08);font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:#2ecc71">
          &#9432; Contrarian buy signal active: spread at ${t.spread.toFixed(1)}% (threshold: -20%)
        </div>`:t.bearish>=50?`<div style="display:flex;align-items:center;gap:6px;padding:6px 8px;margin:8px 0;border-radius:4px;border:1px solid #e67e22;background:rgba(230,126,34,0.08);font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:#e67e22">
            &#9888; Extreme bearish reading: ${t.bearish.toFixed(1)}% bearish (avg: ${r.bearish}%)
          </div>`:"",u=s?`
      <div style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,0.06)">
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px">8-Week Moving Average</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;text-align:center">
          <div><div style="font-size:calc(14px * var(--wm-panel-effective-scale, 1));font-weight:600;color:#2ecc71">${s.bullish}%</div><div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Bull</div></div>
          <div><div style="font-size:calc(14px * var(--wm-panel-effective-scale, 1));font-weight:600;color:#95a5a6">${s.neutral}%</div><div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Neutral</div></div>
          <div><div style="font-size:calc(14px * var(--wm-panel-effective-scale, 1));font-weight:600;color:#e74c3c">${s.bearish}%</div><div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Bear</div></div>
        </div>
      </div>`:"",x=o.spreadBelow20>0||o.bearishAbove50>0?`<div style="margin-top:6px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
          52w extremes: ${o.spreadBelow20} contrarian signals, ${o.bearishAbove50} extreme bear, ${o.bullishAbove50} extreme bull
        </div>`:"",b=e.fallback?'<span style="display:inline-block;padding:1px 5px;border-radius:3px;background:rgba(230,126,34,0.15);color:#e67e22;font-size:calc(9px * var(--wm-panel-effective-scale, 1));margin-left:4px">(fallback data)</span>':"",S=t.date?`<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-align:right;margin-top:4px">Survey: ${l(t.date)}${e.source!=="xls"?` (${l(e.source)})`:""}${b}</div>`:"",k=`
      <div style="padding:12px 14px">
        <div style="text-align:center;margin-bottom:8px">
          <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${p};letter-spacing:0.06em;text-transform:uppercase">${l(f)}</div>
          ${y?`<div style="margin-top:2px">${y}</div>`:""}
        </div>

        ${v}

        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;text-align:center;padding:8px;background:rgba(255,255,255,0.03);border-radius:6px;margin-bottom:8px">
          <div>
            <div style="font-size:calc(22px * var(--wm-panel-effective-scale, 1));font-weight:700;color:#2ecc71">${t.bullish.toFixed(1)}%</div>
            <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Bullish</div>
            <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">avg ${r.bullish}%</div>
          </div>
          <div>
            <div style="font-size:calc(22px * var(--wm-panel-effective-scale, 1));font-weight:700;color:#95a5a6">${t.neutral.toFixed(1)}%</div>
            <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Neutral</div>
            <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">avg ${r.neutral}%</div>
          </div>
          <div>
            <div style="font-size:calc(22px * var(--wm-panel-effective-scale, 1));font-weight:700;color:#e74c3c">${t.bearish.toFixed(1)}%</div>
            <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Bearish</div>
            <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">avg ${r.bearish}%</div>
          </div>
        </div>

        ${le(t.bullish,"#2ecc71","Bullish",`${t.bullish.toFixed(1)}%`)}
        ${le(t.neutral,"#95a5a6","Neutral",`${t.neutral.toFixed(1)}%`)}
        ${le(t.bearish,"#e74c3c","Bearish",`${t.bearish.toFixed(1)}%`)}

        ${Ta(t.spread)}

        ${Ma(c)}

        ${u}
        ${x}
        ${S}
      </div>`;this.setSafeContent($(k,"legacy Panel.setContent() migration"))}}const mi=Object.freeze(Object.defineProperty({__proto__:null,AAIISentimentPanel:Na},Symbol.toStringTag,{value:"Module"}));function U(a){return a==null?null:Number.isFinite(a)?a:null}function Oe(a){const i=a.current,e=(a.history??[]).map(t=>({date:t.date,pctAbove20d:U(t.pctAbove20d),pctAbove50d:U(t.pctAbove50d),pctAbove200d:U(t.pctAbove200d)}));return{currentPctAbove20d:U(a.currentPctAbove20d??(i==null?void 0:i.pctAbove20d)),currentPctAbove50d:U(a.currentPctAbove50d??(i==null?void 0:i.pctAbove50d)),currentPctAbove200d:U(a.currentPctAbove200d??(i==null?void 0:i.pctAbove200d)),updatedAt:a.updatedAt??"",history:e,unavailable:a.unavailable}}const te=480,ye=160,j=32,be=12,dt=10,pt=22,Ue=te-j-be,je=ye-dt-pt,$e=[{key:"pctAbove20d",color:"#3b82f6",label:"20-day SMA",fillOpacity:.08},{key:"pctAbove50d",color:"#f59e0b",label:"50-day SMA",fillOpacity:.06},{key:"pctAbove200d",color:"#22c55e",label:"200-day SMA",fillOpacity:.04}];function ft(a,i){return i<=1?j+Ue/2:j+a/(i-1)*Ue}function ne(a){return dt+je-a/100*je}function Ge(a,i){const e=[];let t=[];for(let n=0;n<a.length;n++){const s=a[n][i];if(s==null||!Number.isFinite(s)){t.length>0&&(e.push(t),t=[]);continue}t.push({x:ft(n,a.length),y:ne(s)})}return t.length>0&&e.push(t),e}function za(a){if(a.length<2)return"";const i=ne(0).toFixed(1),e=a[0].x.toFixed(1),t=a[a.length-1].x.toFixed(1),n=a.map(s=>`${s.x.toFixed(1)},${s.y.toFixed(1)}`);return`M${e},${i} L${n.join(" L")} L${t},${i} Z`}function La(a){return a.length===0?"":a.map(i=>`${i.x.toFixed(1)},${i.y.toFixed(1)}`).join(" ")}function Ba(a){if(a.length<2)return'<div style="text-align:center;color:var(--text-dim);padding:20px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">Collecting data. Chart appears after 2+ days.</div>';const i=[0,25,50,75,100].map(c=>{const p=ne(c);return`
      <line x1="${j}" y1="${p.toFixed(1)}" x2="${te-be}" y2="${p.toFixed(1)}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <text x="${(j-3).toFixed(0)}" y="${p.toFixed(1)}" text-anchor="end" fill="rgba(255,255,255,0.35)" style="font-size:calc(8px * var(--wm-panel-effective-scale, 1))" dominant-baseline="middle">${c}%</text>`}).join(""),e=Math.max(1,Math.floor(a.length/6)),t=a.map((c,p)=>{if(p%e!==0&&p!==a.length-1)return"";const f=ft(p,a.length),m=c.date.slice(5);return`<text x="${f.toFixed(1)}" y="${ye-pt+13}" text-anchor="middle" fill="rgba(255,255,255,0.4)" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))">${l(m)}</text>`}).join(""),n=$e.map(c=>Ge(a,c.key).map(f=>{const m=za(f);return m?`<path d="${m}" fill="${c.color}" opacity="${c.fillOpacity}"/>`:""}).join("")).join(""),s=$e.map(c=>Ge(a,c.key).map(f=>f.length<2?"":`<polyline points="${La(f)}" fill="none" stroke="${c.color}" stroke-width="1.5" opacity="0.9"/>`).join("")).join(""),r=ne(50),o=`<line x1="${j}" y1="${r.toFixed(1)}" x2="${te-be}" y2="${r.toFixed(1)}" stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-dasharray="4 3"/>`;return`<svg viewBox="0 0 ${te} ${ye}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">${i}${o}${t}${n}${s}</svg>`}function Ia(a,i){const e=a>=60?"rgba(34,197,94,0.12)":a>=40?"rgba(245,158,11,0.12)":"rgba(239,68,68,0.12)",t=a>=60?"#22c55e":a>=40?"#f59e0b":"#ef4444";return`<span style="display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:4px;background:${e}">
    <span style="width:6px;height:6px;border-radius:50%;background:${i}"></span>
    <span style="font-size:calc(14px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${t}">${a.toFixed(1)}%</span>
  </span>`}class Oa extends _{constructor(){super({id:"market-breadth",title:d("panels.marketBreadth"),showCount:!1,infoTooltip:"Percentage of S&P 500 stocks trading above their 20, 50, and 200-day simple moving averages. A measure of market participation and internal strength."});h(this,"data",null)}async fetchData(){var t;const e=L("breadthHistory");return e&&!e.unavailable&&((t=e.history)!=null&&t.length)?(this.data=Oe(e),this.renderPanel(),this.refreshFromRpc(),!0):(this.showLoading(),this.refreshFromRpc())}async refreshFromRpc(){try{const{MarketServiceClient:e}=await C(async()=>{const{MarketServiceClient:r}=await import("./rpc-client-market-v1-Bo995CQG.js");return{MarketServiceClient:r}},[]),{getRpcBaseUrl:t}=await C(async()=>{const{getRpcBaseUrl:r}=await import("./embed-url-C3Ug1l3S.js").then(o=>o.al);return{getRpcBaseUrl:r}},__vite__mapDeps([1,2,3,4,5,6,7,12])),s=await new e(t(),{fetch:(...r)=>globalThis.fetch(...r)}).getMarketBreadthHistory({});return s.unavailable?(this.data||this.showError(d("common.noDataShort"),()=>void this.fetchData()),!1):(this.data=Oe(s),this.renderPanel(),!0)}catch(e){return this.data||this.showError(e instanceof Error?e.message:d("common.failedToLoad"),()=>void this.fetchData()),!1}}renderPanel(){var o,c;if(!((c=(o=this.data)==null?void 0:o.history)!=null&&c.length)){this.showError(d("common.noDataShort"),()=>void this.fetchData());return}const e=this.data,t=Ba(e.history),n={pctAbove20d:e.currentPctAbove20d,pctAbove50d:e.currentPctAbove50d,pctAbove200d:e.currentPctAbove200d},r=`
      <div style="padding:12px 14px">
        <div style="margin-bottom:8px">${$e.map(p=>{const f=n[p.key],m=typeof f=="number"&&Number.isFinite(f)&&f>=0;return`<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0">
        <span style="display:flex;align-items:center;gap:6px;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
          <span style="width:8px;height:3px;border-radius:1px;background:${p.color}"></span>
          % Above ${l(p.label)}
        </span>
        ${m?Ia(f,p.color):'<span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">—</span>'}
      </div>`}).join("")}</div>
        <div style="border-radius:6px;background:rgba(255,255,255,0.02);padding:4px 0">${t}</div>
        ${e.updatedAt?`<div style="text-align:right;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:4px">${l(new Date(e.updatedAt).toLocaleString())}</div>`:""}
      </div>`;this.setSafeContent($(r,"legacy Panel.setContent() migration"))}}const vi=Object.freeze(Object.defineProperty({__proto__:null,MarketBreadthPanel:Oa},Symbol.toStringTag,{value:"Module"}));let ce=null;async function Ua(){if(!ce){const{EconomicServiceClient:a}=await C(async()=>{const{EconomicServiceClient:e}=await import("./rpc-client-economic-v1-ClSZlM4Y.js");return{EconomicServiceClient:e}},[]),{getRpcBaseUrl:i}=await C(async()=>{const{getRpcBaseUrl:e}=await import("./embed-url-C3Ug1l3S.js").then(t=>t.al);return{getRpcBaseUrl:e}},__vite__mapDeps([1,2,3,4,5,6,7,12]));ce=new a(i(),{fetch:(...e)=>globalThis.fetch(...e)})}return ce}const de=["DGS1MO","DGS3MO","DGS6MO","DGS1","DGS2","DGS5","DGS10","DGS30"],we=["1M","3M","6M","1Y","2Y","5Y","10Y","30Y"],ut=["1Y","2Y","5Y","10Y","20Y","30Y"],Re=480,Ae=180,G=40,mt=20,vt=16,gt=24,Se=Re-G-mt,Ve=Ae-vt-gt;function Fe(a,i){return i<=1?G+Se/2:G+a/(i-1)*Se}function H(a,i,e){const t=e-i||1,n=(a-i)/t;return vt+Ve-n*Ve}function He(a,i,e){return a.map((t,n)=>{if(t.value===null)return null;const s=Fe(n,a.length),r=H(t.value,i,e);return`${s.toFixed(2)},${r.toFixed(2)}`}).filter(Boolean).join(" ")}function ja(a,i){const e=(i-a)/3,t=[];for(let n=0;n<=3;n++){const s=a+e*n,r=H(s,a,i);t.push(`<text x="${(G-4).toFixed(0)}" y="${r.toFixed(2)}" text-anchor="end" fill="rgba(255,255,255,0.35)" style="font-size:calc(8px * var(--wm-panel-effective-scale, 1))" alignment-baseline="middle">${s.toFixed(1)}%</text>`),t.push(`<line x1="${G}" y1="${r.toFixed(2)}" x2="${Re-mt}" y2="${r.toFixed(2)}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`)}return t.join("")}function Ga(a){return we.slice(0,a).map((i,e)=>{const t=Fe(e,a),n=Ae-gt+12;return`<text x="${t.toFixed(2)}" y="${n}" text-anchor="middle" fill="rgba(255,255,255,0.5)" style="font-size:calc(8px * var(--wm-panel-effective-scale, 1))">${l(i)}</text>`}).join("")}function Va(a,i,e,t){return a.map((n,s)=>{if(n.value===null)return"";const r=Fe(s,a.length),o=H(n.value,i,e);return`<circle cx="${r.toFixed(2)}" cy="${o.toFixed(2)}" r="3" fill="${t}" stroke="rgba(0,0,0,0.4)" stroke-width="1"/>`}).join("")}function ht(a){const e={"1Y":3,"2Y":4,"5Y":5,"10Y":6,"20Y":6.5,"30Y":7}[a];return e==null?null:G+e/7*Se}function Ha(a,i,e){const t=ut.map(n=>{const s=a[n];if(s==null)return null;const r=ht(n);if(r===null)return null;const o=H(s,i,e);return`${r.toFixed(2)},${o.toFixed(2)}`}).filter(Boolean);return t.length<2?"":`<polyline points="${t.join(" ")}" fill="none" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="5,3" stroke-linecap="round" stroke-linejoin="round"/>`}function qa(a,i,e){return ut.map(t=>{const n=a[t];if(n==null)return"";const s=ht(t);if(s===null)return"";const r=H(n,i,e);return`<circle cx="${s.toFixed(2)}" cy="${r.toFixed(2)}" r="2.5" fill="#2ecc71" stroke="rgba(0,0,0,0.4)" stroke-width="1"/>`}).join("")}function Ya(a,i,e){const t=a.map(v=>v.value).filter(v=>v!==null),n=i.map(v=>v.value).filter(v=>v!==null),s=e?Object.values(e):[],r=[...t,...n,...s];if(r.length===0)return'<div style="padding:16px;color:var(--text-dim);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">No yield data available.</div>';const o=Math.max(0,Math.min(...r)-.25),c=Math.max(...r)+.5,p=He(a,o,c),f=He(i,o,c),m=f.length>0?`<polyline points="${f}" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-dasharray="4,3" stroke-linecap="round" stroke-linejoin="round"/>`:"",g=e?Ha(e,o,c):"",y=e?qa(e,o,c):"";return`
    <svg viewBox="0 0 ${Re} ${Ae}" width="100%" style="display:block;overflow:visible">
      ${ja(o,c)}
      ${Ga(a.length)}
      ${m}
      ${g}
      <polyline points="${p}" fill="none" stroke="#3498db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      ${Va(a,o,c,"#3498db")}
      ${y}
    </svg>`}function Wa(a){const i=a.map(t=>`<th style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:600;color:var(--text-dim);padding:4px 6px;text-align:center">${l(t.tenor)}</th>`).join(""),e=a.map(t=>{const n=t.value!==null?`${t.value.toFixed(2)}%`:"N/A";return`<td style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text);padding:4px 6px;text-align:center">${l(n)}</td>`}).join("");return`
    <div style="overflow-x:auto;margin-top:8px">
      <table style="width:100%;border-collapse:collapse">
        <thead><tr>${i}</tr></thead>
        <tbody><tr>${e}</tr></tbody>
      </table>
    </div>`}function Xa(a,i,e=80,t=22){const n=a.map(p=>p.value).filter(p=>Number.isFinite(p));if(n.length<2)return`<svg width="${e}" height="${t}"></svg>`;const s=Math.min(...n),o=Math.max(...n)-s||.01,c=n.map((p,f)=>{const m=f/(n.length-1)*e,g=t-(p-s)/o*(t-2)-1;return`${m.toFixed(1)},${g.toFixed(1)}`}).join(" ");return`<svg width="${e}" height="${t}" style="display:inline-block;vertical-align:middle"><polyline points="${c}" fill="none" stroke="${l(i)}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`}function Ka(a){return a.some(t=>t.obs.length>0)?`<div style="padding:4px 0">${a.map(t=>{const n=t.obs[t.obs.length-1];if(!n)return"";const s=t.obs[t.obs.length-2],r=s?n.value-s.value:null,o=r!==null?`${r>=0?"+":""}${r.toFixed(2)}%`:"",c=r===null?"":r>=0?"#e74c3c":"#27ae60";return`<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04)">
      <div style="width:90px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${l(t.label)}</div>
      ${Xa(t.obs.slice(-24),t.color)}
      <div style="min-width:44px;text-align:right;font-size:calc(13px * var(--wm-panel-effective-scale, 1));font-weight:600;color:var(--text);font-variant-numeric:tabular-nums">${l(n.value.toFixed(2))}%</div>
      ${o?`<div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:${c}">${l(o)}</div>`:""}
      <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-left:auto">${l(n.date)}</div>
    </div>`}).join("")}</div>
    <div style="margin-top:8px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Source: ECB</div>`:'<div style="padding:16px;color:var(--text-dim);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">ECB rate data unavailable</div>'}class Qa extends _{constructor(){super({id:"yield-curve",title:"Yield Curve & Rates",showCount:!1,infoTooltip:d("components.yieldCurve.infoTooltip")});h(this,"_hasData",!1);h(this,"_tab","curve");h(this,"_current",[]);h(this,"_prior",[]);h(this,"_ecbRates",null);h(this,"_rateRows",[]);this.content.addEventListener("click",e=>{const t=e.target.closest("[data-tab]");((t==null?void 0:t.dataset.tab)==="curve"||(t==null?void 0:t.dataset.tab)==="rates")&&(this._tab=t.dataset.tab,this._render())})}async fetchData(){var e,t,n,s,r;this.showLoading();try{const o=await Ua(),[c,p]=await Promise.allSettled([o.getFredSeriesBatch({seriesIds:[...de,"ESTR","EURIBOR3M","EURIBOR6M","EURIBOR1Y"],limit:36}),o.getEuYieldCurve({})]),f=c.status==="fulfilled"?c.value.results??{}:{};return this._current=de.map((g,y)=>{var u,x;const v=((u=f[g])==null?void 0:u.observations)??[];return{tenor:we[y]??g,value:v.length>0?((x=v[v.length-1])==null?void 0:x.value)??null:null}}),this._prior=de.map((g,y)=>{var u,x;const v=((u=f[g])==null?void 0:u.observations)??[];return{tenor:we[y]??g,value:v.length>1?((x=v[v.length-2])==null?void 0:x.value)??null:null}}),this._ecbRates=p.status==="fulfilled"&&!p.value.unavailable&&((e=p.value.data)!=null&&e.rates)?p.value.data.rates:null,this._rateRows=[{id:"ESTR",label:"€STR",obs:((t=f.ESTR)==null?void 0:t.observations)??[],color:"#2ecc71"},{id:"EURIBOR3M",label:"EURIBOR 3M",obs:((n=f.EURIBOR3M)==null?void 0:n.observations)??[],color:"#3498db"},{id:"EURIBOR6M",label:"EURIBOR 6M",obs:((s=f.EURIBOR6M)==null?void 0:s.observations)??[],color:"#9b59b6"},{id:"EURIBOR1Y",label:"EURIBOR 1Y",obs:((r=f.EURIBOR1Y)==null?void 0:r.observations)??[],color:"#e67e22"}],this._current.filter(g=>g.value!==null).length===0?(this._hasData||this.showError("No yield data available",()=>void this.fetchData()),!1):(this._hasData=!0,this._render(),!0)}catch(o){return this._hasData||this.showError(o instanceof Error?o.message:"Failed to load yield curve",()=>void this.fetchData()),!1}}_render(){var m,g;const e=`<div style="display:flex;gap:4px;margin-bottom:6px">
      <button class="panel-tab${this._tab==="curve"?" active":""}" data-tab="curve" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">US Curve</button>
      <button class="panel-tab${this._tab==="rates"?" active":""}" data-tab="rates" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">ECB Rates</button>
    </div>`;if(this._tab==="rates"){this.setSafeContent($(`<div style="padding:10px 14px 6px">${e}${Ka(this._rateRows)}</div>`,"legacy Panel.setContent() migration"));return}const t=((m=this._current.find(y=>y.tenor==="2Y"))==null?void 0:m.value)??null,n=((g=this._current.find(y=>y.tenor==="10Y"))==null?void 0:g.value)??null,s=t!==null&&n!==null&&t>n,r=t!==null&&n!==null?((n-t)*100).toFixed(0):null,o=r!==null&&Number(r)>=0?"+":"",c=s?'<span style="background:#e74c3c;color:#fff;font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:2px 6px;border-radius:4px;letter-spacing:0.08em">INVERTED</span>':'<span style="background:#2ecc71;color:#000;font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:2px 6px;border-radius:4px;letter-spacing:0.08em">NORMAL</span>',p=r!==null?`<span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-left:10px">2Y-10Y Spread: <span style="color:${s?"#e74c3c":"#2ecc71"}">${l(o+r)}bps</span></span>`:"",f=this._ecbRates?'<span><svg width="20" height="4" style="vertical-align:middle"><line x1="0" y1="2" x2="20" y2="2" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="5,3"/></svg> EU (ECB AAA)</span>':"";this.setSafeContent($(`
      <div style="padding:10px 14px 6px">
        ${e}
        <div style="display:flex;align-items:center;margin-bottom:10px;gap:4px">
          ${c}${p}
        </div>
        <div style="margin:0 -4px">${Ya(this._current,this._prior,this._ecbRates)}</div>
        ${Wa(this._current)}
        <div style="margin-top:8px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);display:flex;gap:12px;align-items:center;flex-wrap:wrap">
          <span><svg width="20" height="4" style="vertical-align:middle"><line x1="0" y1="2" x2="20" y2="2" stroke="#3498db" stroke-width="2"/></svg> US (Current)</span>
          <span><svg width="20" height="4" style="vertical-align:middle"><line x1="0" y1="2" x2="20" y2="2" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-dasharray="4,3"/></svg> US (Prior)</span>
          ${f}
          <span style="margin-left:auto">Source: FRED / ECB</span>
        </div>
      </div>`,"legacy Panel.setContent() migration"))}}const gi=Object.freeze(Object.defineProperty({__proto__:null,YieldCurvePanel:Qa},Symbol.toStringTag,{value:"Module"}));let pe=null;async function Ja(){if(!pe){const{MarketServiceClient:a}=await C(async()=>{const{MarketServiceClient:e}=await import("./rpc-client-market-v1-Bo995CQG.js");return{MarketServiceClient:e}},[]),{getRpcBaseUrl:i}=await C(async()=>{const{getRpcBaseUrl:e}=await import("./embed-url-C3Ug1l3S.js").then(t=>t.al);return{getRpcBaseUrl:e}},__vite__mapDeps([1,2,3,4,5,6,7,12]));pe=new a(i(),{fetch:(...e)=>globalThis.fetch(...e)})}return pe}function qe(a){return a==null?"":`${a>=0?"+":""}${a.toFixed(2)}`}function Ye(a){return a==null||a<=0?"":a>=1e12?`$${(a/1e12).toFixed(1)}T`:a>=1e9?`$${(a/1e9).toFixed(1)}B`:a>=1e6?`$${Math.round(a/1e6)}M`:`$${a}`}function Za(a,i){if(a==null||i==null||i===0)return"";const e=(a-i)/Math.abs(i)*100;return`${e>=0?"+":""}${e.toFixed(1)}%`}function en(a){const i=new Date;i.setHours(0,0,0,0);const e=new Date(`${a}T00:00:00`);if(Number.isNaN(e.getTime()))return a;const t=Math.round((e.getTime()-i.getTime())/864e5),n=e.toLocaleDateString(bt(),{weekday:"short",month:"short",day:"numeric"});return t===0?d("components.earningsCalendar.today",{date:n}):t===1?d("components.earningsCalendar.tomorrow",{date:n}):n.toUpperCase().replace(","," ·")}function tn(a){const i=a.hour==="bmo"?"BMO":a.hour==="amc"?"AMC":a.hour?a.hour.toUpperCase():"",e=a.hour==="bmo"?"background:rgba(46,204,113,0.15);color:#2ecc71":a.hour==="amc"?"background:rgba(52,152,219,0.15);color:#3498db":"background:rgba(255,255,255,0.08);color:var(--text-dim)",t=Ye(a.revenueEstimate),n=Ye(a.revenueActual),s=qe(a.epsEstimate),r=qe(a.epsActual);let o="";if(a.hasActuals&&r){const p=a.surpriseDirection==="beat"?"background:rgba(46,204,113,0.2);color:#2ecc71":a.surpriseDirection==="miss"?"background:rgba(231,76,60,0.2);color:#e74c3c":"background:rgba(255,255,255,0.08);color:var(--text-dim)",f=a.surpriseDirection==="beat"?d("components.earningsCalendar.surprise.beat"):a.surpriseDirection==="miss"?d("components.earningsCalendar.surprise.miss"):d("components.earningsCalendar.surprise.inLine"),m=Za(a.epsActual,a.epsEstimate);o=`
      <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:var(--text)">${l(d("components.earningsCalendar.epsActual",{value:r}))}</span>
      <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:1px 4px;border-radius:3px;${p}">${l(f)}${m?` ${l(m)}`:""}</span>`}else s&&(o=`<span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${l(d("components.earningsCalendar.epsEstimate",{value:s}))}</span>`);let c="";return a.hasActuals&&n?c=`<span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${l(d("components.earningsCalendar.revenueActual",{value:n}))}</span>`:t&&(c=`<span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:rgba(255,255,255,0.25)">${l(d("components.earningsCalendar.revenueEstimate",{value:t}))}</span>`),`
    <div style="display:flex;align-items:flex-start;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04)">
      <div style="display:flex;flex-direction:column;align-items:center;gap:3px;flex-shrink:0;padding-top:1px">
        ${i?`<span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:2px 5px;border-radius:3px;${e};letter-spacing:0.04em">${l(i)}</span>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${l(a.company)}</div>
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);letter-spacing:0.04em">${l(a.symbol)}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px;flex-shrink:0">
        ${o?`<div style="display:flex;align-items:center;gap:5px">${o}</div>`:""}
        ${c?`<div>${c}</div>`:""}
      </div>
    </div>`}function an(a,i,e){return`
    <div style="${e?"":"border-top:1px solid rgba(255,255,255,0.06);"}padding-top:${e?"0":"10"}px;padding-bottom:2px">
      <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:700;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.06em;padding:0 0 5px">${l(en(a))}</div>
      ${i.map(tn).join("")}
    </div>`}class nn extends _{constructor(){super({id:"earnings-calendar",title:d("components.earningsCalendar.title"),showCount:!1,infoTooltip:d("components.earningsCalendar.infoTooltip")});h(this,"_hasData",!1)}async fetchData(){return this.showLoading(),this.refreshFromRpc()}async refreshFromRpc(){var e;try{const t=await Ja(),n=new Date,s=new Date;s.setDate(s.getDate()+14);const r=n.toISOString().slice(0,10),o=s.toISOString().slice(0,10),c=await t.listEarningsCalendar({fromDate:r,toDate:o});return c.unavailable||!((e=c.earnings)!=null&&e.length)?(this._hasData||this.showError(d("components.earningsCalendar.errors.noData"),()=>void this.fetchData()),!1):(this.render(c.earnings),!0)}catch(t){return this._hasData||this.showError(t instanceof Error?t.message:d("components.earningsCalendar.errors.failedToLoad"),()=>void this.fetchData()),!1}}render(e){this._hasData=!0;const t=new Map;for(const r of e){const o=r.date||"Unknown",c=t.get(o);c?c.push(r):t.set(o,[r])}const s=`
      <div style="padding:0 14px 12px;max-height:480px;overflow-y:auto">
        ${[...t.keys()].sort().map((r,o)=>an(r,t.get(r),o===0)).join("")}
      </div>`;this.setSafeContent($(s,"legacy Panel.setContent() migration"))}}const hi=Object.freeze(Object.defineProperty({__proto__:null,EarningsCalendarPanel:nn},Symbol.toStringTag,{value:"Module"}));let fe=null;async function sn(){if(!fe){const{EconomicServiceClient:a}=await C(async()=>{const{EconomicServiceClient:e}=await import("./rpc-client-economic-v1-ClSZlM4Y.js");return{EconomicServiceClient:e}},[]),{getRpcBaseUrl:i}=await C(async()=>{const{getRpcBaseUrl:e}=await import("./embed-url-C3Ug1l3S.js").then(t=>t.al);return{getRpcBaseUrl:e}},__vite__mapDeps([1,2,3,4,5,6,7,12]));fe=new a(i(),{fetch:(...e)=>globalThis.fetch(...e)})}return fe}const rn={US:"🇺🇸",GB:"🇬🇧",UK:"🇬🇧",EU:"🇪🇺",EUR:"🇪🇺",EA:"🇪🇺",DE:"🇩🇪",FR:"🇫🇷",JP:"🇯🇵",CN:"🇨🇳",CA:"🇨🇦",AU:"🇦🇺"},on=new Set(["EU","EA","EUR","DE","FR","IT","ES","NL","BE","AT","PT","FI","IE","GR"]),We={high:"#e74c3c",medium:"#f39c12",low:"rgba(255,255,255,0.3)"};function ln(a){const i=new Map;for(const e of a){const t=e.date||"Unknown";i.has(t)||i.set(t,[]),i.get(t).push(e)}return i}function cn(a){if(!a||a==="Unknown")return"Unknown";const i=new Date(`${a}T00:00:00`);return Number.isNaN(i.getTime())?a:i.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})}function dn(a,i){return a?i?`${a} ${i}`:a:"—"}function pn(a){const i=new Date;i.setHours(0,0,0,0);const e=new Date(`${a}T00:00:00`);if(Number.isNaN(e.getTime()))return"";const t=Math.round((e.getTime()-i.getTime())/864e5);return t===0?"today":t===1?"tomorrow":t<0?Math.abs(t)<14?`${Math.abs(t)}d ago`:`${Math.round(Math.abs(t)/7)}w ago`:t<14?`in ${t}d`:`in ${Math.round(t/7)}w`}class fn extends _{constructor(){super({id:"economic-calendar",title:"Economic Calendar",showCount:!1,infoTooltip:d("components.economicCalendar.infoTooltip")});h(this,"_hasData",!1);h(this,"_events",[]);h(this,"_region","all");this.content.addEventListener("click",e=>{const t=e.target.closest("button[data-region]");if(!t)return;const n=t.dataset.region;n&&n!==this._region&&(this._region=n,this._render())})}async fetchData(){this.showLoading("Loading economic calendar...");try{const e=await sn(),t=new Date,n=t.toISOString().slice(0,10),s=new Date(t.getTime()+30*864e5).toISOString().slice(0,10),r=await e.getEconomicCalendar({fromDate:n,toDate:s});return r.unavailable||!r.events||r.events.length===0?(this._hasData||this.showError("Economic calendar data unavailable.",()=>void this.fetchData()),!1):(this._events=r.events,this._hasData=!0,this._render(),!0)}catch(e){return this.isAbortError(e)||this._hasData||this.showError("Failed to load economic calendar.",()=>void this.fetchData()),!1}}_filterEvents(){return this._region==="us"?this._events.filter(e=>e.country==="US"):this._region==="eu"?this._events.filter(e=>on.has(e.country)):this._events}_renderRegionTabs(){return'<div style="display:flex;gap:4px;padding:0 14px 10px">'+[{key:"all",label:"All"},{key:"us",label:"US"},{key:"eu",label:"EU"}].map(({key:t,label:n})=>{const s=this._region===t;return`<button data-region="${t}" style="
          padding:3px 10px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:600;letter-spacing:0.04em;
          border-radius:3px;border:none;cursor:pointer;
          background:${s?"rgba(255,255,255,0.15)":"transparent"};
          color:${s?"var(--text)":"rgba(255,255,255,0.35)"};
        ">${l(n)}</button>`}).join("")+"</div>"}_render(){if(!this._hasData){this.showError("No upcoming economic events.",()=>void this.fetchData());return}const e=this._filterEvents(),t=ln(e);let n="",s=!0;for(const[p,f]of t){const m=s?"":"border-top:1px solid rgba(255,255,255,0.06);";s=!1,n+=`<tr>
        <td colspan="3" style="
          padding:10px 0 3px;
          font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:600;
          color:rgba(255,255,255,0.35);
          text-transform:uppercase;letter-spacing:0.06em;
          ${m}
        ">${l(cn(p))}</td>
      </tr>`;for(const g of f){const y=(g.impact||"low").toLowerCase(),v=We[y]??We.low,u=rn[g.country]??l(g.country),x=y==="high";let b,S;g.actual?(b=l(dn(g.actual,g.unit)),S="color:var(--text);font-weight:600"):(b=l(pn(g.date)),S="color:rgba(255,255,255,0.35);font-style:italic"),n+=`<tr style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.2">
          <td style="padding:4px 8px 4px 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:0">
            <span style="margin-right:5px">${u}</span><span style="font-weight:${x?600:400}">${l(g.event)}</span>
          </td>
          <td style="padding:4px 6px;text-align:center;vertical-align:middle">
            <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${v};vertical-align:middle"></span>
          </td>
          <td style="padding:4px 0;text-align:right;font-variant-numeric:tabular-nums;${S};white-space:nowrap">${b}</td>
        </tr>`}}const r=this._region==="all"?"No upcoming economic events":"No events for selected region",o=e.length===0?`<tr><td colspan="3" style="padding:20px 0;text-align:center;color:rgba(255,255,255,0.3);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">${l(r)}</td></tr>`:"",c=`${this._renderRegionTabs()}<div style="padding:0 14px 12px;max-height:440px;overflow-y:auto">
      <table style="width:100%;border-collapse:collapse;table-layout:fixed">
        <colgroup>
          <col style="width:auto">
          <col style="width:20px">
          <col style="width:64px">
        </colgroup>
        <thead>
          <tr style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:600;color:rgba(255,255,255,0.25);text-transform:uppercase;letter-spacing:0.06em">
            <th style="text-align:left;padding:0 8px 8px 0;font-weight:600">EVENT</th>
            <th style="padding:0 0 8px;font-weight:600"></th>
            <th style="text-align:right;padding:0 0 8px;font-weight:600"></th>
          </tr>
        </thead>
        <tbody>${o}${n}</tbody>
      </table>
    </div>`;this.setSafeContent($(c,"legacy Panel.setContent() migration"))}}const xi=Object.freeze(Object.defineProperty({__proto__:null,EconomicCalendarPanel:fn},Symbol.toStringTag,{value:"Module"}));let ue=null;async function un(){if(!ue){const{MarketServiceClient:a}=await C(async()=>{const{MarketServiceClient:e}=await import("./rpc-client-market-v1-Bo995CQG.js");return{MarketServiceClient:e}},[]),{getRpcBaseUrl:i}=await C(async()=>{const{getRpcBaseUrl:e}=await import("./embed-url-C3Ug1l3S.js").then(t=>t.al);return{getRpcBaseUrl:e}},__vite__mapDeps([1,2,3,4,5,6,7,12]));ue=new a(i(),{fetch:(...e)=>globalThis.fetch(...e)})}return ue}function Xe(a){return typeof a=="number"?a:parseInt(String(a),10)||0}function Ke(a,i){const e=Math.max(-100,Math.min(100,a)),t=Math.abs(e)/100*50,n=e>=0?"#2ecc71":"#e74c3c",s=e>=0?50:50-t,r=e>=0?"+":"";return`
    <div style="margin:3px 0">
      <div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:2px">
        <span>${l(i)}</span>
        <span style="color:${n};font-weight:600">${r}${e.toFixed(1)}%</span>
      </div>
      <div style="position:relative;height:8px;background:rgba(255,255,255,0.06);border-radius:2px">
        <div style="position:absolute;top:0;bottom:0;left:50%;width:1px;background:rgba(255,255,255,0.15)"></div>
        <div style="position:absolute;top:0;bottom:0;left:${s.toFixed(2)}%;width:${t.toFixed(2)}%;background:${n};border-radius:1px"></div>
      </div>
    </div>`}function mn(a){const i=Xe(a.leveragedFundsLong),e=Xe(a.leveragedFundsShort),t=a.netPct,n=(i-e)/Math.max(i+e,1)*100;return`
    <div style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <span style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));font-weight:600">${l(a.name)}</span>
        <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${l(a.code)}</span>
      </div>
      ${Ke(t,"Asset Managers")}
      ${Ke(n,"Leveraged Funds")}
    </div>`}class vn extends _{constructor(){super({id:"cot-positioning",title:"CFTC COT Positioning",showCount:!1,infoTooltip:d("components.cotPositioning.infoTooltip")});h(this,"_hasData",!1)}async fetchData(){this.showLoading();try{const t=await(await un()).getCotPositioning({});return t.unavailable||!t.instruments||t.instruments.length===0?(this._hasData||this.showError("COT data unavailable",()=>void this.fetchData()),!1):(this._hasData=!0,this.render(t.instruments,t.reportDate??""),!0)}catch(e){return this._hasData||this.showError(e instanceof Error?e.message:"Failed to load",()=>void this.fetchData()),!1}}render(e,t){const n=e.map(mn).join(""),s=t?`<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:8px;text-align:right">Report date: ${l(t)}</div>`:"",r=`
      <div style="padding:10px 14px">
        ${n}
        ${s}
      </div>`;this.setSafeContent($(r,"legacy Panel.setContent() migration"))}}const yi=Object.freeze(Object.defineProperty({__proto__:null,CotPositioningPanel:vn},Symbol.toStringTag,{value:"Module"}));let me=null;async function gn(){if(!me){const{MarketServiceClient:a}=await C(async()=>{const{MarketServiceClient:e}=await import("./rpc-client-market-v1-Bo995CQG.js");return{MarketServiceClient:e}},[]),{getRpcBaseUrl:i}=await C(async()=>{const{getRpcBaseUrl:e}=await import("./embed-url-C3Ug1l3S.js").then(t=>t.al);return{getRpcBaseUrl:e}},__vite__mapDeps([1,2,3,4,5,6,7,12]));me=new a(i(),{fetch:ot})}return me}const Qe=["AAPL","MSFT","NVDA","AMZN","GOOGL","META","TSLA"],ve=["CL","GC","SI","ES","NQ"],hn={ES:"S&P 500 futures",NQ:"Nasdaq futures"};function Q(a){if(typeof a=="number")return a;const i=parseInt(String(a),10);return Number.isFinite(i)?i:0}function Je(a){return a===null?'<span class="commodity-change">—</span>':`<span class="commodity-change ${N(a)}">${z(a)}</span>`}function Ze(a,i){const e=a+i;return e<=0?null:(a-i)/e*100}function xn(a){return a===null?"—":`${a>=0?"+":""}${a.toFixed(1)}%`}class yn extends _{constructor(){super({id:"liquidity-shifts",title:d("components.liquidityShifts.title"),showCount:!1,infoTooltip:d("components.liquidityShifts.infoTooltip")});h(this,"_hasData",!1)}async fetchData(){var e;this.showLoading();try{const t=await gn(),[n,s]=await Promise.all([t.getCotPositioning({}),t.listMarketQuotes({symbols:Qe})]),r=(n.instruments??[]).filter(v=>ve.includes(v.code??"")).sort((v,u)=>ve.indexOf(v.code??"")-ve.indexOf(u.code??""));if(r.length===0&&(((e=s.quotes)==null?void 0:e.length)??0)===0)return this._hasData||this.showError(d("components.liquidityShifts.unavailable"),()=>void this.fetchData()),!1;this._hasData=!0;const o=r.map(v=>{const u=Q(v.assetManagerLong??0),x=Q(v.assetManagerShort??0),b=Ze(u,x),S=Q(v.leveragedFundsLong??0),k=Q(v.leveragedFundsShort??0),R=S>0||k>0,F=R?Ze(S,k):null,A=v.code??"",q=hn[A]??v.name??A,Y=R?`<div class="market-symbol">${d("components.liquidityShifts.lev")} ${l(xn(F))}</div>`:"";return`<div class="liquidity-row">
          <div class="liquidity-row__info">
            <div class="market-name">${l(q)}</div>
            <div class="market-symbol">${l(A)} • ${d("components.liquidityShifts.longShort",{long:String(u),short:String(x)})}</div>
          </div>
          <div class="liquidity-row__values">
            <div>${Je(b)}</div>
            ${Y}
          </div>
        </div>`}).join(""),c=new Map(Qe.map((v,u)=>[v,u])),f=[...s.quotes??[]].sort((v,u)=>{const x=c.get(v.symbol??"")??Number.MAX_SAFE_INTEGER,b=c.get(u.symbol??"")??Number.MAX_SAFE_INTEGER;return x-b}).map(v=>{const u=Number(v.change??0);return`<div class="market-item liquidity-stock-row">
            <div class="market-info">
              <span class="market-name">${l(v.name||v.symbol||"")}</span>
              <span class="market-symbol">${l(v.symbol||"")}</span>
            </div>
            <div>${Je(u)}</div>
          </div>`}).join(""),m=`<div class="market-symbol">${d("components.liquidityShifts.noCot")}</div>`,g=`<div class="market-symbol">${d("components.liquidityShifts.noStocks")}</div>`,y=n.reportDate?`<div class="market-symbol liquidity-report-date">${d("components.liquidityShifts.reportDate",{date:n.reportDate})}</div>`:"";return this.setSafeContent($(`
        <div class="liquidity-shifts-panel">
          <div class="liquidity-shifts-panel__section-title">${d("components.liquidityShifts.cotSection")}</div>
          ${o||m}
          <div class="liquidity-shifts-panel__section-title liquidity-shifts-panel__section-title--gap">${d("components.liquidityShifts.stocksSection")}</div>
          ${f||g}
          ${y}
        </div>
      `,"legacy Panel.setContent() migration")),!0}catch(t){return this._hasData||this.showError(t instanceof Error?t.message:d("components.liquidityShifts.failed"),()=>void this.fetchData()),!1}}}const bi=Object.freeze(Object.defineProperty({__proto__:null,LiquidityShiftsPanel:yn},Symbol.toStringTag,{value:"Module"}));let ge=null;async function bn(){if(!ge){const{MarketServiceClient:a}=await C(async()=>{const{MarketServiceClient:e}=await import("./rpc-client-market-v1-Bo995CQG.js");return{MarketServiceClient:e}},[]),{getRpcBaseUrl:i}=await C(async()=>{const{getRpcBaseUrl:e}=await import("./embed-url-C3Ug1l3S.js").then(t=>t.al);return{getRpcBaseUrl:e}},__vite__mapDeps([1,2,3,4,5,6,7,12]));ge=new a(i(),{fetch:(...e)=>globalThis.fetch(...e)})}return ge}const $n=40;function wn(a){if(!Array.isArray(a)||a.length<13)return null;const i=a[a.length-1],e=a[a.length-13];return!(e>0)||!Number.isFinite(i)?null:(i-e)/e}function Sn(a){if(a==null)return null;const i=typeof a=="number"?a:parseFloat(String(a));return Number.isFinite(i)?i:null}function _n(a,i){const e=Array.isArray(a.sparkOi)?a.sparkOi.filter(t=>Number.isFinite(t)):[];return{symbol:String(a.symbol??""),display:String(a.display??""),group:String(a.group??""),funding:i?typeof a.funding=="number"&&Number.isFinite(a.funding)?a.funding:null:Sn(a.funding),oiDelta1h:wn(e),composite:Number(a.composite||0),warmup:!!a.warmup,stale:!!a.stale}}function et(a,i){const e=[],t=[],n=[];for(const s of a){const r=_n(s,i),o=r.group;o==="fx"?n.push(r):o==="crypto"?t.push(r):e.push(r)}return{warmup:!1,commodityAssets:e,cryptoAssets:t,fxAssets:n,unavailable:!1}}function kn(a,i){return a<15?"var(--text-dim)":i!=null&&i<0?a>=60?"#e74c3c":a>=40?"#e67e22":"#c0392b88":a>=60?"#2ecc71":a>=40?"#27ae60":"#2ecc7188"}function Cn(a,i,e=56){const t=(e-6)/2,n=e/2,s=e/2+2,r=Math.PI*.8,o=Math.PI*2.2,c=o-r,p=r+a/100*c,f=n+t*Math.cos(r),m=s+t*Math.sin(r),g=n+t*Math.cos(o),y=s+t*Math.sin(o),v=n+t*Math.cos(p),u=s+t*Math.sin(p),x=p-r>Math.PI?1:0,b=a<15?.4:a<40?.6:.9;return`<svg width="${e}" height="${e}" viewBox="0 0 ${e} ${e}" class="pos-gauge">
    <path d="M ${f} ${m} A ${t} ${t} 0 1 1 ${g} ${y}" fill="none" stroke="var(--border-color, #333)" stroke-width="3" stroke-linecap="round"/>
    ${a>0?`<path d="M ${f} ${m} A ${t} ${t} 0 ${x} 1 ${v} ${u}" fill="none" stroke="${i}" stroke-width="3.5" stroke-linecap="round" opacity="${b}"/>`:""}
    <text x="${n}" y="${s+2}" text-anchor="middle" dominant-baseline="middle" fill="${i}" style="font-size:calc(13px * var(--wm-panel-effective-scale, 1))" font-weight="600" opacity="${b}">${Math.round(a)}</text>
  </svg>`}function Rn(a,i){const e=Math.round(a.composite),t=kn(e,a.funding),n=e>=$n,s=a.funding!=null?`${(a.funding*100).toFixed(3)}%`:"--",r=a.funding!=null&&a.funding<0?"change-negative":"change-positive",o=a.oiDelta1h!=null?`${a.oiDelta1h>=0?"+":""}${(a.oiDelta1h*100).toFixed(1)}%`:"--",c=a.oiDelta1h!=null&&a.oiDelta1h<0?"change-negative":"change-positive",p=a.stale?' <span class="pos-badge pos-badge--stale">stale</span>':"",f=a.warmup?' <span class="pos-badge pos-badge--warmup">warm</span>':"",m=n?" pos-card--elevated":"",g=n?` style="--pos-glow-color: ${t}"`:"",y=i?` data-pos-navigate="${l(i)}"`:"",v=i?" pos-card--clickable":"",u=`${a.symbol} score ${e}/100`+(a.funding!=null?` | funding ${s}`:"")+(a.oiDelta1h!=null?` | OI delta ${o}`:"")+(a.warmup?" | warming up":"")+(a.stale?" | upstream stale":"");return`<div class="pos-card${m}${v}"${g}${y} title="${l(u)}">
    <div class="pos-card__name">${l(a.display)}${p}${f}</div>
    ${Cn(e,t)}
    <div class="pos-card__metrics">
      <span class="${r}" title="hourly funding">${l(s)}</span>
      <span class="${c}" title="OI delta 1h">${l(o)}</span>
    </div>
  </div>`}const An={BTC:"crypto",ETH:"crypto",SOL:"crypto",PAXG:"commodities","xyz:CL":"commodities","xyz:BRENTOIL":"commodities","xyz:GOLD":"commodities","xyz:SILVER":"commodities","xyz:PLATINUM":"commodities","xyz:PALLADIUM":"commodities","xyz:COPPER":"commodities","xyz:NATGAS":"commodities"};function Fn(a){const i=An[a];return i&&document.querySelector(`[data-panel="${i}"]`)?i:null}function he(a,i){if(i.length===0)return"";const t=[...i].sort((n,s)=>s.composite-n.composite).map(n=>Rn(n,Fn(n.symbol))).join("");return`<div class="pos-section">
    <div class="pos-section__header">${l(a)}</div>
    <div class="pos-grid">${t}</div>
  </div>`}class Pn extends _{constructor(){super({id:"positioning-247",title:d("components.positioning247.title"),showCount:!1,infoTooltip:d("components.positioning247.infoTooltip")});h(this,"_flow",null);h(this,"_loading",!1);this.content.addEventListener("click",e=>{const t=e.target.closest("[data-pos-navigate]");if(t!=null&&t.dataset.posNavigate){const n=document.querySelector(`[data-panel="${t.dataset.posNavigate}"]`);n&&(n.scrollIntoView({behavior:"smooth",block:"center"}),n.classList.add("panel-highlight"),setTimeout(()=>n.classList.remove("panel-highlight"),1500))}})}async fetchData(){if(this._loading)return!1;this._loading=!0;try{if(!this._flow){const n=L("hyperliquidFlow");n&&!n.unavailable&&Array.isArray(n.assets)&&n.assets.length>0&&(this._flow={...et(n.assets,!0),warmup:!!n.warmup},this._render())}const t=await(await bn()).getHyperliquidFlow({});return t.unavailable||!t.assets||t.assets.length===0?this._flow||(this._flow={warmup:!0,commodityAssets:[],cryptoAssets:[],fxAssets:[],unavailable:!0}):this._flow={...et(t.assets,!1),warmup:!!t.warmup},this._render(),!0}catch(e){return console.error("[PositioningPanel] RPC failed:",e instanceof Error?e.message:e),this._flow||(this._flow={warmup:!0,commodityAssets:[],cryptoAssets:[],fxAssets:[],unavailable:!0}),this._render(),!1}finally{this._loading=!1}}_render(){if(!this._flow){this.showLoading();return}if(this._flow.unavailable){this.setSafeContent($(`<div class="pos-panel"><div class="pos-warmup">${l(d("components.positioning247.warmup"))}</div></div>`,"legacy Panel.setContent() migration"));return}const e=[];this._flow.warmup&&e.push(`<div class="pos-warmup">${l(d("components.positioning247.warmup"))}</div>`),e.push(he(d("components.positioning247.commodities"),this._flow.commodityAssets)),e.push(he(d("components.positioning247.crypto"),this._flow.cryptoAssets)),e.push(he(d("components.positioning247.fx"),this._flow.fxAssets)),e.push(`<div class="pos-footer">${l(d("components.positioning247.footer"))}</div>`),this.setSafeContent($(`<div class="pos-panel">${e.join("")}</div>`,"legacy Panel.setContent() migration"))}}const $i=Object.freeze(Object.defineProperty({__proto__:null,PositioningPanel:Pn},Symbol.toStringTag,{value:"Module"}));function E(a,i=2){return!Number.isFinite(a)||a<=0?"--":a>=1e4?Math.round(a).toLocaleString():a.toLocaleString(void 0,{minimumFractionDigits:i,maximumFractionDigits:i})}function xe(a){const i=typeof a=="string"?parseInt(a,10):a;return Number.isFinite(i)?Math.round(i).toLocaleString():"--"}function ae(a,i=2){return Number.isFinite(a)?`${a>=0?"+":""}${a.toFixed(i)}%`:"--"}function En(a){const i=typeof a=="string"?parseInt(a,10):a;return Number.isFinite(i)?`${i>=0?"+":""}${Math.round(i).toLocaleString()}`:"--"}function Dn(a){if(!a)return{text:"Updated —",dot:"var(--text-dim)"};const i=Date.now()-new Date(a).getTime();if(!Number.isFinite(i)||i<0)return{text:"Updated now",dot:"#2ecc71"};const e=Math.floor(i/6e4),t=e<10?"#2ecc71":e<30?"#f5a623":"#e74c3c";return e<1?{text:"Updated just now",dot:t}:e<60?{text:`Updated ${e}m ago`,dot:t}:{text:`Updated ${Math.floor(e/60)}h ago`,dot:t}}function Tn(a,i,e,t){const n=Math.max(0,Math.min(100,t));return`
    <div style="position:relative;height:8px;background:linear-gradient(90deg,rgba(231,76,60,0.25),rgba(245,166,35,0.25),rgba(46,204,113,0.25));border-radius:4px;margin:6px 0">
      <div style="position:absolute;top:-3px;bottom:-3px;left:${n.toFixed(1)}%;width:3px;background:#fff;border-radius:1px;box-shadow:0 0 4px rgba(255,255,255,0.8);transform:translateX(-50%)"></div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
      <span>Low $${l(E(a))}</span>
      <span style="color:var(--text);font-weight:600">$${l(E(e))} • ${n.toFixed(0)}% of range</span>
      <span>High $${l(E(i))}</span>
    </div>`}function tt(a,i,e){const t=Math.max(-100,Math.min(100,a)),n=Math.abs(t)/100*50,s=t>=0?"#2ecc71":"#e74c3c",r=t>=0?50:50-n,o=t>=0?"+":"",c=parseInt(e,10),p=Number.isFinite(c)&&c!==0?` <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:${c>=0?"#2ecc71":"#e74c3c"};font-weight:500">Δ ${En(e)}</span>`:"";return`
    <div style="margin:4px 0">
      <div style="display:flex;justify-content:space-between;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:2px">
        <span>${l(i)}${p}</span>
        <span style="color:${s};font-weight:600">${o}${t.toFixed(1)}%</span>
      </div>
      <div style="position:relative;height:8px;background:rgba(255,255,255,0.06);border-radius:2px">
        <div style="position:absolute;top:0;bottom:0;left:50%;width:1px;background:rgba(255,255,255,0.15)"></div>
        <div style="position:absolute;top:0;bottom:0;left:${r.toFixed(2)}%;width:${n.toFixed(2)}%;background:${s};border-radius:1px"></div>
      </div>
    </div>`}function Mn(a){return a>80?{text:"Silver undervalued",color:"#f5a623"}:a<60?{text:"Gold undervalued",color:"#f5a623"}:{text:"Neutral",color:"var(--text-dim)"}}function J(a,i){const e=i>=0?"#2ecc71":"#e74c3c";return`<div style="flex:1;text-align:center;padding:4px;background:rgba(255,255,255,0.03);border-radius:4px">
    <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${l(a)}</div>
    <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${e}">${l(ae(i,1))}</div>
  </div>`}class Nn extends _{constructor(){super({id:"gold-intelligence",title:d("panels.goldIntelligence"),infoTooltip:d("components.goldIntelligence.infoTooltip")});h(this,"_hasData",!1)}async fetchData(){var e,t;this.showLoading();try{const n=_e("/api/market/v1/get-gold-intelligence"),s=await fetch(n);if(!s.ok)throw new Error(`HTTP ${s.status}`);const r=await s.json();return r.unavailable?(this._hasData||this.showError("Gold data unavailable",()=>void this.fetchData()),!1):(e=this.element)!=null&&e.isConnected?(this._hasData=!0,this.render(r),!0):!1}catch(n){return this.isAbortError(n)||!((t=this.element)!=null&&t.isConnected)||this._hasData||this.showError(n instanceof Error?n.message:"Failed to load",()=>void this.fetchData()),!1}}renderHeader(e){const t=e.goldChangePct,n=t>=0?"#2ecc71":"#e74c3c",s=V(e.goldSparkline,t,80,20),r=Dn(e.updatedAt),o=e.session&&e.session.dayHigh>0?`<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:2px">
          Session H $${l(E(e.session.dayHigh))} • L $${l(E(e.session.dayLow))} • Prev $${l(E(e.session.prevClose))}
        </div>`:"";return`
      <div class="energy-tape-section">
        <div class="energy-section-title">Price &amp; Performance</div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
          <span style="font-size:calc(16px * var(--wm-panel-effective-scale, 1));font-weight:700">$${l(E(e.goldPrice))}</span>
          <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${n};padding:1px 6px;border-radius:3px;background:${n}22">${ae(t)}</span>
          ${s}
        </div>
        <div style="display:flex;align-items:center;gap:6px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
          <span style="width:6px;height:6px;border-radius:50%;background:${r.dot};display:inline-block"></span>
          <span>${l(r.text)} • GC=F front-month</span>
        </div>
        ${o}
      </div>`}renderReturns(e){if(!e.returns&&!e.range52w)return"";const t=e.returns?`<div style="display:flex;gap:4px;margin-top:6px">
          ${J("1W",e.returns.w1)}
          ${J("1M",e.returns.m1)}
          ${J("YTD",e.returns.ytd)}
          ${J("1Y",e.returns.y1)}
        </div>`:"",n=e.range52w&&e.range52w.hi>0?`<div style="margin-top:8px">
          <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">52-week range</div>
          ${Tn(e.range52w.lo,e.range52w.hi,e.goldPrice,e.range52w.positionPct)}
        </div>`:"";return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Returns</div>
      ${t}
      ${n}
    </div>`}renderMetals(e){const t=e.goldSilverRatio!=null&&Number.isFinite(e.goldSilverRatio)?(()=>{const r=Mn(e.goldSilverRatio);return`<div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px">
          <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Gold/Silver Ratio</span>
          <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600">${l(e.goldSilverRatio.toFixed(1))} <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:${r.color};font-weight:400">${l(r.text)}</span></span>
        </div>`})():"",n=e.goldPlatinumPremiumPct!=null&&Number.isFinite(e.goldPlatinumPremiumPct)?`<div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px">
          <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Gold vs Platinum</span>
          <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600">${l(ae(e.goldPlatinumPremiumPct,1))} premium</span>
        </div>`:"",s=[{label:"Silver",price:e.silverPrice},{label:"Platinum",price:e.platinumPrice},{label:"Palladium",price:e.palladiumPrice}].map(r=>`<div style="flex:1;text-align:center;padding:4px;background:rgba(255,255,255,0.03);border-radius:4px">
        <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${l(r.label)}</div>
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600">$${l(E(r.price))}</div>
      </div>`).join("");return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Metals Complex</div>
      ${t}
      ${n}
      <div style="display:flex;gap:6px;margin-top:8px">${s}</div>
    </div>`}renderFx(e){return e.crossCurrencyPrices.length?`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Gold in Major Currencies</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px">${e.crossCurrencyPrices.map(n=>`<div style="text-align:center;padding:4px;background:rgba(255,255,255,0.03);border-radius:4px">
        <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${l(n.flag)} XAU/${l(n.currency)}</div>
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600">${l(E(n.price,0))}</div>
      </div>`).join("")}</div>
    </div>`:""}renderPositioning(e){const t=e.cot;if(!t)return"";const n=t.managedMoney,s=t.producerSwap,r=n?tt(n.netPct,"Managed Money (speculators)",n.wowNetDelta):"",o=s?tt(s.netPct,"Producer/Swap (commercials)",s.wowNetDelta):"",c=(f,m)=>f?`<div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);padding:2px 0">
          <span>${l(m)}</span>
          <span>L ${l(xe(f.longPositions))} / S ${l(xe(f.shortPositions))} • ${f.oiSharePct.toFixed(1)}% OI</span>
        </div>`:"",p=t.reportDate?`<div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:6px">
          <span>As of ${l(t.reportDate)}${t.nextReleaseDate?` • next release ${l(t.nextReleaseDate)}`:""}</span>
          <span>OI ${l(xe(t.openInterest))}</span>
        </div>`:"";return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">CFTC Positioning</div>
      ${r}
      ${c(n,"MM breakdown")}
      ${o}
      ${c(s,"P/S breakdown")}
      ${p}
    </div>`}renderCbReserves(e){const t=e.cbReserves;if(!t||!t.topHolders.length)return"";const n=(f,m)=>`<div style="display:flex;justify-content:space-between;font-size:calc(10px * var(--wm-panel-effective-scale, 1));padding:1px 0">
      <span style="color:var(--text-dim)">${m}. ${l(f.name)}</span>
      <span style="font-weight:600">${f.tonnes>0?`${f.tonnes.toFixed(1)}t`:"—"}</span>
    </div>`,s=f=>{const m=f.deltaTonnes12m>=0?"#2ecc71":"#e74c3c",g=f.deltaTonnes12m>=0?"+":"";return`<div style="display:flex;justify-content:space-between;font-size:calc(10px * var(--wm-panel-effective-scale, 1));padding:1px 0">
        <span style="color:var(--text-dim)">${l(f.name)}</span>
        <span style="color:${m};font-weight:600">${g}${f.deltaTonnes12m.toFixed(1)}t</span>
      </div>`},r=t.topHolders.slice(0,10).map((f,m)=>n(f,m+1)).join(""),o=t.topBuyers12m.slice(0,5).map(s).join(""),c=t.topSellers12m.slice(0,5).map(s).join(""),p=o||c?`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
          <div>
            <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;margin-bottom:2px">Buyers 12M</div>
            ${o||'<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">—</div>'}
          </div>
          <div>
            <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;margin-bottom:2px">Sellers 12M</div>
            ${c||'<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">—</div>'}
          </div>
        </div>`:"";return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Central-Bank Reserves</div>
      <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:4px">Top holders (tonnes)</div>
      ${r}
      ${p}
      <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:6px;text-align:right">IMF IFS • as of ${l(t.asOfMonth)}</div>
    </div>`}renderEtfFlows(e){const t=e.etfFlows;if(!t||!Number.isFinite(t.tonnes)||t.tonnes<=0)return"";const n=(o,c,p)=>{const f=c>=0?"#2ecc71":"#e74c3c",m=c>=0?"+":"",g=p>=0?"+":"";return`<div style="flex:1;text-align:center;padding:4px;background:rgba(255,255,255,0.03);border-radius:4px">
        <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${l(o)}</div>
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${f}">${m}${c.toFixed(1)}t</div>
        <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:${f}">${g}${p.toFixed(2)}%</div>
      </div>`},s=t.aumUsd>=1e9?`$${(t.aumUsd/1e9).toFixed(1)}B`:t.aumUsd>0?`$${(t.aumUsd/1e6).toFixed(0)}M`:"--",r=t.sparkline90d.length>1?V(t.sparkline90d,t.changeM1Pct,80,20):"";return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Physical Flows (GLD)</div>
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:4px">
        <div>
          <span style="font-size:calc(14px * var(--wm-panel-effective-scale, 1));font-weight:700">${l(t.tonnes.toFixed(1))} <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);font-weight:500">tonnes</span></span>
          <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-left:6px">AUM ${l(s)}${t.nav>0?` • NAV $${t.nav.toFixed(2)}`:""}</span>
        </div>
        ${r}
      </div>
      <div style="display:flex;gap:4px;margin-top:4px">
        ${n("1W",t.changeW1Tonnes,t.changeW1Pct)}
        ${n("1M",t.changeM1Tonnes,t.changeM1Pct)}
        ${n("1Y",t.changeY1Tonnes,t.changeY1Pct)}
      </div>
      <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:4px;text-align:right">SPDR GLD • as of ${l(t.asOfDate)}</div>
    </div>`}renderDrivers(e){var n;return(n=e.drivers)!=null&&n.length?`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Drivers</div>
      ${e.drivers.map(s=>{const r=s.changePct>=0?"#2ecc71":"#e74c3c",o=s.correlation30d<=-.3?"#2ecc71":s.correlation30d>=.3?"#e74c3c":"var(--text-dim)";return`<div style="display:flex;justify-content:space-between;align-items:center;padding:3px 0;font-size:calc(10px * var(--wm-panel-effective-scale, 1))">
        <span style="color:var(--text-dim)">${l(s.label)}</span>
        <span>
          <span style="font-weight:600">${l(s.value.toFixed(2))}</span>
          <span style="color:${r};margin-left:4px">${l(ae(s.changePct,2))}</span>
          <span style="color:${o};margin-left:8px;font-size:calc(9px * var(--wm-panel-effective-scale, 1))">corr 30d ${s.correlation30d>=0?"+":""}${s.correlation30d.toFixed(2)}</span>
        </span>
      </div>`}).join("")}
    </div>`:""}render(e){const t=[this.renderHeader(e),this.renderReturns(e),this.renderMetals(e),this.renderFx(e),this.renderPositioning(e),this.renderEtfFlows(e),this.renderCbReserves(e),this.renderDrivers(e)].join("");this.setSafeContent($(`<div style="padding:10px 14px">${t}</div>`,"legacy Panel.setContent() migration"))}}const wi=Object.freeze(Object.defineProperty({__proto__:null,GoldIntelligencePanel:Nn},Symbol.toStringTag,{value:"Module"}));function Z(a){return Math.abs(a)>=1e9?`${(a/1e9).toFixed(1)}B`:Math.abs(a)>=1e6?`${(a/1e6).toFixed(1)}M`:Math.abs(a)>=1e3?`${(a/1e3).toFixed(0)}K`:a.toLocaleString()}function at(a){return a==="inflow"?"flow-inflow":a==="outflow"?"flow-outflow":"flow-neutral"}function zn(a){return a>.1?"change-positive":a<-.1?"change-negative":"change-neutral"}class Ln extends _{constructor(){super({id:"etf-flows",title:d("panels.etfFlows"),showCount:!1,infoTooltip:d("components.etfFlows.infoTooltip")});h(this,"data",null);h(this,"loading",!0);h(this,"error",null)}async fetchData(){var t;const e=L("etfFlows");if((t=e==null?void 0:e.etfs)!=null&&t.length){this.data=e,this.error=null,this.loading=!1,this.renderPanel(),this.refreshFromRpc();return}await this.refreshFromRpc()}async refreshFromRpc(){var e,t,n;try{const r=await new rt(Ce(),{fetch:(...o)=>globalThis.fetch(...o)}).listEtfFlows({});if(!((e=this.element)!=null&&e.isConnected))return;((t=r.etfs)!=null&&t.length||!this.data)&&(this.data=r,this.error=null,this.loading=!1,this.renderPanel())}catch(s){if(this.isAbortError(s)||!((n=this.element)!=null&&n.isConnected))return;this.data||(console.warn("[ETFFlows] Fetch error:",s),this.error=d("components.etfFlows.unavailable"),this.loading=!1,this.renderPanel())}}renderPanel(){var o;if(this.loading){this.showLoading(d("common.loadingEtfData"));return}if(this.error||!this.data){this.showError(this.error||d("common.noDataShort"),()=>void this.fetchData());return}const e=this.data;if(!((o=e.etfs)!=null&&o.length)){const c=e.rateLimited?d("components.etfFlows.rateLimited"):d("components.etfFlows.unavailable");this.setSafeContent($(`<div class="panel-loading-text">${c}</div>`,"legacy Panel.setContent() migration"));return}const t=e.summary||{totalVolume:0,totalEstFlow:0,netDirection:"NEUTRAL",inflowCount:0,outflowCount:0},n=t.netDirection.includes("INFLOW")?"flow-inflow":t.netDirection.includes("OUTFLOW")?"flow-outflow":"flow-neutral",s=e.etfs.map(c=>`
      <tr class="etf-row ${at(c.direction)}">
        <td class="etf-ticker">${l(c.ticker)}</td>
        <td class="etf-issuer">${l(c.issuer)}</td>
        <td class="etf-flow ${at(c.direction)}">${c.direction==="inflow"?"+":c.direction==="outflow"?"-":""}$${Z(Math.abs(c.estFlow))}</td>
        <td class="etf-volume">${Z(c.volume)}</td>
        <td class="etf-change ${zn(c.priceChange)}">${c.priceChange>0?"+":""}${c.priceChange.toFixed(2)}%</td>
      </tr>
    `).join(""),r=`
      <div class="etf-flows-container">
        <div class="etf-summary ${n}">
          <div class="etf-summary-item">
            <span class="etf-summary-label">${d("components.etfFlows.netFlow")}</span>
            <span class="etf-summary-value ${n}">${t.netDirection.includes("INFLOW")?d("components.etfFlows.netInflow"):d("components.etfFlows.netOutflow")}</span>
          </div>
          <div class="etf-summary-item">
            <span class="etf-summary-label">${d("components.etfFlows.estFlow")}</span>
            <span class="etf-summary-value">$${Z(Math.abs(t.totalEstFlow))}</span>
          </div>
          <div class="etf-summary-item">
            <span class="etf-summary-label">${d("components.etfFlows.totalVol")}</span>
            <span class="etf-summary-value">${Z(t.totalVolume)}</span>
          </div>
          <div class="etf-summary-item">
            <span class="etf-summary-label">${d("components.etfFlows.etfs")}</span>
            <span class="etf-summary-value">${t.inflowCount}↑ ${t.outflowCount}↓</span>
          </div>
        </div>
        <div class="etf-table-wrap">
          <table class="etf-table">
            <thead>
              <tr>
                <th>${d("components.etfFlows.table.ticker")}</th>
                <th>${d("components.etfFlows.table.issuer")}</th>
                <th>${d("components.etfFlows.table.estFlow")}</th>
                <th>${d("components.etfFlows.table.volume")}</th>
                <th>${d("components.etfFlows.table.change")}</th>
              </tr>
            </thead>
            <tbody>${s}</tbody>
          </table>
        </div>
      </div>
    `;this.setSafeContent($(r,"legacy Panel.setContent() migration"))}}const Si=Object.freeze(Object.defineProperty({__proto__:null,ETFFlowsPanel:Ln},Symbol.toStringTag,{value:"Module"}));function ee(a){return a>=1e12?`$${(a/1e12).toFixed(1)}T`:a>=1e9?`$${(a/1e9).toFixed(1)}B`:a>=1e6?`$${(a/1e6).toFixed(0)}M`:`$${a.toLocaleString()}`}function Bn(a){return a==="ON PEG"?"peg-on":a==="SLIGHT DEPEG"?"peg-slight":"peg-off"}function In(a){return a==="HEALTHY"?"health-good":a==="CAUTION"?"health-caution":"health-warning"}class On extends _{constructor(){super({id:"stablecoins",title:d("panels.stablecoins"),showCount:!1,infoTooltip:d("components.stablecoins.infoTooltip")});h(this,"data",null);h(this,"loading",!0);h(this,"error",null)}async fetchData(){var t;const e=L("stablecoinMarkets");if((t=e==null?void 0:e.stablecoins)!=null&&t.length){this.data=e,this.error=null,this.loading=!1,this.renderPanel(),this.refreshFromRpc();return}await this.refreshFromRpc()}async refreshFromRpc(){var e,t,n;try{const r=await new rt(Ce(),{fetch:ot}).listStablecoinMarkets({coins:[]});if(!((e=this.element)!=null&&e.isConnected))return;((t=r.stablecoins)!=null&&t.length||!this.data)&&(this.data=r,this.error=null,this.loading=!1,this.renderPanel())}catch(s){if(this.isAbortError(s)||!((n=this.element)!=null&&n.isConnected))return;this.data||(console.warn("[Stablecoin] Fetch error:",s),this.error=d("common.noDataShort"),this.loading=!1,this.renderPanel())}}renderPanel(){var r;if(this.loading){this.showLoading(d("common.loadingStablecoins"));return}if(this.error||!this.data){this.showError(this.error||d("common.noDataShort"),()=>void this.fetchData());return}const e=this.data;if(!((r=e.stablecoins)!=null&&r.length)){this.setSafeContent(w`<div class="panel-empty">${d("common.noDataShort")}</div>`);return}const t=e.summary||{totalMarketCap:0,totalVolume24h:0,healthStatus:"UNAVAILABLE"},n=M(e.stablecoins.map(o=>w`
      <div class="stable-row">
        <div class="stable-info">
          <span class="stable-symbol">${o.symbol}</span>
          <span class="stable-name">${o.name}</span>
        </div>
        <div class="stable-price">$${o.price.toFixed(4)}</div>
        <div class="stable-peg ${Bn(o.pegStatus)}">
          <span class="peg-badge">${o.pegStatus}</span>
          <span class="peg-dev">${o.deviation.toFixed(2)}%</span>
        </div>
      </div>
    `)),s=M(e.stablecoins.map(o=>w`
      <div class="stable-supply-row">
        <span class="stable-symbol">${o.symbol}</span>
        <span class="stable-mcap">${ee(o.marketCap)}</span>
        <span class="stable-vol">${ee(o.volume24h)}</span>
        <span class="stable-change ${o.change24h>=0?"change-positive":"change-negative"}">${o.change24h>=0?"+":""}${o.change24h.toFixed(2)}%</span>
      </div>
    `));this.setSafeContent(w`
      <div class="stablecoin-container">
        <div class="stable-health ${In(t.healthStatus)}">
          <span class="health-label">${t.healthStatus}</span>
          <span class="health-detail">MCap: ${ee(t.totalMarketCap)} | Vol: ${ee(t.totalVolume24h)}</span>
        </div>
        <div class="stable-section">
          <div class="stable-section-title">${d("components.stablecoins.pegHealth")}</div>
          <div class="stable-peg-list">${n}</div>
        </div>
        <div class="stable-section">
          <div class="stable-section-title">${d("components.stablecoins.supplyVolume")}</div>
          <div class="stable-supply-header">
            <span>${d("components.stablecoins.token")}</span><span>${d("components.stablecoins.mcap")}</span><span>${d("components.stablecoins.vol24h")}</span><span>${d("components.stablecoins.chg24h")}</span>
          </div>
          <div class="stable-supply-list">${s}</div>
        </div>
      </div>
    `)}}const _i=Object.freeze(Object.defineProperty({__proto__:null,StablecoinPanel:On},Symbol.toStringTag,{value:"Module"}));export{mi as A,yi as C,hi as E,pi as F,wi as G,bi as L,ri as M,$i as P,oi as S,ci as W,gi as Y,li as a,di as b,fi as c,ui as d,vi as e,xi as f,Si as g,_i as h};
