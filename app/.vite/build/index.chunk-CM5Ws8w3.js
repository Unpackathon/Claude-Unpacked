"use strict";try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2d2f7c0c-d02f-49a0-bd1b-b3ffe6b565ef",e._sentryDebugIdIdentifier="sentry-dbid-2d2f7c0c-d02f-49a0-bd1b-b3ffe6b565ef")})()}catch{}require("./index.chunk-CMoS3SOQ.js");const e=require("./index.chunk-CCkEi--u.js");var t="claude:sidebar_painted",n=1e4,r=`(() => {
  const navigation = performance.getEntriesByType("navigation")[0];
  const named = new Set(
    Array.from(
      document.querySelectorAll(
        'script[type="module"][src], link[rel~="modulepreload"][href]',
      ),
      (element) => element.src || element.href,
    ),
  );
  const entries = performance.getEntriesByType("resource");
  const listed = new Set(entries.map((entry) => entry.name));
  return {
    timeOrigin: performance.timeOrigin,
    visibilityState: document.visibilityState,
    namedFilesListed: Array.from(named).every((url) => listed.has(url)),
    navigation: navigation && {
      redirectCount: navigation.redirectCount,
      fetchStart: navigation.fetchStart,
      domainLookupStart: navigation.domainLookupStart,
      domainLookupEnd: navigation.domainLookupEnd,
      connectStart: navigation.connectStart,
      secureConnectionStart: navigation.secureConnectionStart,
      connectEnd: navigation.connectEnd,
      requestStart: navigation.requestStart,
      responseStart: navigation.responseStart,
      domContentLoadedEventEnd: navigation.domContentLoadedEventEnd,
      transferSize: navigation.transferSize,
      nextHopProtocol: navigation.nextHopProtocol,
    },
    resources: entries.map((entry) => ({
      transferSize: entry.transferSize,
      encodedBodySize: entry.encodedBodySize,
      fetchStart: entry.fetchStart,
      requestStart: entry.requestStart,
      responseStart: entry.responseStart,
      responseEnd: entry.responseEnd,
      namedByDocument: named.has(entry.name),
    })),
  };
})()`,i=e=>typeof e=="object"&&!!e,a=e=>typeof e=="number"&&Number.isFinite(e)&&e>=0?e:null,o=e=>e===null?null:Math.round(e),s=e=>e==="visible"||e==="hidden"?e:null,c=(e,t)=>{let n=a(e),r=a(t);return n===null||r===null||r<n?null:Math.round(r-n)},l=e=>e.length===0?null:e.reduce((e,t)=>Math.max(e,t)),u=e=>e.toSorted((e,t)=>e-t)[e.length-1>>1]??null;function d(e){if(typeof e!="string"||e==="")return null;switch(e){case"h3":case"h2":case"http/1.1":case"http/1.0":return e;default:return"other"}}var f={spa_script_count:null,spa_script_first_fetch_ms:null,spa_script_last_end_ms:null,spa_script_network_count:null,spa_script_last_from_cache:null,spa_script_wait_p50_ms:null,spa_script_wait_max_ms:null,spa_script_queue_p50_ms:null,spa_script_queue_max_ms:null,spa_script_slow_wait_count:null,spa_script_cache_read_max_ms:null},p=200;function m(e,t,n){if(e===null||t===null||!n)return f;let r=0,o=1/0,s=-1,d=!1,m=!1,h=[],g=[],_=[];for(let n of e){if(!i(n)||n.namedByDocument!==!0)continue;let e=a(n.fetchStart),l=a(n.responseEnd),u=c(e,l);if(e===null||l===null||u===null||l>t)continue;let f=(a(n.transferSize)??0)>0,p=!f&&(a(n.encodedBodySize)??0)>0;if(u===0&&!f&&!p)continue;let v=c(e,n.requestStart),y=c(n.requestStart,n.responseStart);v===null||y===null||!(f||p)?m=!0:f?(g.push(v),h.push(y)):_.push(u),r+=1,o=Math.min(o,e),l>s&&(s=l,d=p)}if(r===0)return f;let v=e=>m?null:e;return{spa_script_count:r,spa_script_first_fetch_ms:Math.round(o),spa_script_last_end_ms:Math.round(s),spa_script_network_count:v(h.length),spa_script_last_from_cache:v(d),spa_script_wait_p50_ms:v(u(h)),spa_script_wait_max_ms:v(l(h)),spa_script_queue_p50_ms:v(u(g)),spa_script_queue_max_ms:v(l(g)),spa_script_slow_wait_count:v(h.filter(e=>e>p).length),spa_script_cache_read_max_ms:v(l(_))}}function h(e,t=null,n=Date.now()){let r=i(e)?e:{},l=a(r.timeOrigin),u=l===null||t===null||l>n?null:l-t,f=i(r.navigation)?r.navigation:{},p=Array.isArray(r.resources)?r.resources:null,h=0,g=0,_=0,v=0,y=0,b=0;for(let e of p??[]){if(!i(e))continue;let t=a(e.transferSize),n=a(e.encodedBodySize);t!==null&&n!==null&&(h+=1,y+=t,b+=n,t>0?g+=1:n>0?_+=1:v+=1)}let x=e=>p===null?null:e,S=a(f.connectStart),C=a(f.connectEnd),w=c(S,C),T=a(f.secureConnectionStart);return{spa_nav_start_ms:u!==null&&u>=0?Math.round(u):null,spa_redirect_count:o(a(f.redirectCount)),spa_fetch_start_ms:o(a(f.fetchStart)),spa_dns_start_ms:o(a(f.domainLookupStart)),spa_dns_ms:c(f.domainLookupStart,f.domainLookupEnd),spa_connect_ms:w,spa_tls_ms:T!==null&&T>0?c(T,f.connectEnd):w===null?null:0,spa_request_start_ms:o(a(f.requestStart)),spa_conn_reused:w===null?null:C===S,spa_protocol:d(f.nextHopProtocol),spa_ttfb_ms:o(a(f.responseStart)),spa_dcl_ms:o(a(f.domContentLoadedEventEnd)),spa_nav_transfer_bytes:a(f.transferSize),spa_resource_count:x(h),spa_resource_network_count:x(g),spa_resource_cache_count:x(_),spa_resource_opaque_count:x(v),spa_transfer_bytes:x(y),spa_encoded_bytes:x(b),...m(p,a(f.domContentLoadedEventEnd),r.namedFilesListed===!0),spa_visibility_state:s(r.visibilityState)}}async function g(t,i=null){if(!t||t.isDestroyed())return h(null);try{return h(await e.PUt(t.mainFrame.executeJavaScript(r),n,"spa resource timing read timed out"),i)}catch{return h(null)}}var _=6e4,v=6e5,y=`new Promise((resolve) => {
  const observer = new PerformanceObserver((list) => {
    const entry = list.getEntriesByName(${JSON.stringify(e.eJ)}, "mark")[0];
    if (!entry) return;
    clearTimeout(timer);
    observer.disconnect();
    resolve({
      timeOrigin: performance.timeOrigin,
      startTime: entry.startTime,
      surface: entry.detail && entry.detail.surface,
      page: entry.detail && entry.detail.page,
    });
  });
  const timer = setTimeout(() => {
    observer.disconnect();
    resolve(null);
  }, ${_});
  observer.observe({ type: "mark", buffered: true });
})`,b=e=>e==="chat"||e==="cowork"||e==="code"?e:null,x=e=>e==null?"none":"other";function S(e,t){let n=i(e)?e:{},r=a(n.timeOrigin),o=a(n.startTime),s=b(n.surface);if(r===null||o===null||s===null)return null;let c=r+o-t;return c>=0&&c<=v?{input_ready_ms:Math.round(c),surface:s,input_ready_page:x(n.page)}:null}async function C(t,n){if(!t||t.isDestroyed())return null;try{return S(await e.PUt(t.mainFrame.executeJavaScript(y),7e4,"spa input ready read timed out"),n)}catch{return null}}var w=`new Promise((resolve) => {
  const observer = new PerformanceObserver((list) => {
    const entry = list.getEntriesByName(${JSON.stringify(t)}, "mark")[0];
    if (!entry) return;
    clearTimeout(timer);
    observer.disconnect();
    resolve({
      timeOrigin: performance.timeOrigin,
      startTime: entry.startTime,
      mode: entry.detail && entry.detail.mode,
      wasHidden: entry.detail && entry.detail.wasHidden,
      sidebarCollapsed: entry.detail && entry.detail.sidebarCollapsed,
      recentsCollapsed: entry.detail && entry.detail.recentsCollapsed,
      sidebarBodyDeferred: entry.detail && entry.detail.sidebarBodyDeferred,
    });
  });
  const timer = setTimeout(() => {
    observer.disconnect();
    resolve(null);
  }, ${_});
  observer.observe({ type: "mark", buffered: true });
})`,T=e=>e==="chat"||e==="cowork"||e==="code"?e:null;function E(e,t){let n=i(e)?e:{},r=a(n.timeOrigin),o=a(n.startTime),s=T(n.mode);if(r===null||o===null||s===null)return null;let c=r+o-t;return c>=0&&c<=v?{sidebar_painted_ms:Math.round(c),sidebar_mode:s,was_hidden:n.wasHidden===!0,sidebar_collapsed:n.sidebarCollapsed===!0,recents_collapsed:n.recentsCollapsed===!0,sidebar_body_deferred:n.sidebarBodyDeferred===!0}:null}async function D(t,n){if(!t||t.isDestroyed())return null;try{return E(await e.PUt(t.mainFrame.executeJavaScript(w),7e4,"spa sidebar painted read timed out"),n)}catch{return null}}exports.collectSpaInputReady=C,exports.collectSpaResourceTiming=g,exports.collectSpaSidebarPainted=D,exports.spaProtocolFor=d,exports.summarizeSpaInputReady=S,exports.summarizeSpaResourceTiming=h,exports.summarizeSpaSidebarPainted=E;
//# sourceMappingURL=index.chunk-CM5Ws8w3.js.map