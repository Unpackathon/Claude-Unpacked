import{So as e,_o as t,xo as n}from"./vendor-frame-Dy-urf5a.js";import{$d as J9,nf as K2,qd as J1,tf as K1}from"./shared-frame-DeSSgTpM.js";import{lm as r,s_ as i}from"./shared-0-D23kmOCB.js";import{Ol as a}from"./shared-25-DapkFWlH.js";import{Tm as o}from"./shared-73-DfCPGdCT.js";import{Bs as s}from"./shared-107-D8fgcL1q.js";function c(e){return a("__gb__3075368713",e)}var l=/^data:(image\/[a-z]+);base64,/,u=new Map,d=i();function f(e,t){clearTimeout(t.timer),URL.revokeObjectURL(t.url),u.delete(e),d.notify()}var p={longestMs:0,over50Ms:0};function m(){let e={...p};return p.longestMs=0,p.over50Ms=0,e}o(()=>{u.forEach((e,t)=>f(t,e)),m()});var h=Uint8Array;function g(e){return h.fromBase64?.(e)??s(e)}function _(e){let t=u.get(e);if(t===void 0){let n=l.exec(e);if(n===null)return;try{let r=g(e.slice(n[0].length)),i=performance.now(),a=URL.createObjectURL(new Blob([r],{type:n[1]})),o=performance.now()-i;p.longestMs=Math.max(p.longestMs,Math.round(o)),p.over50Ms+=+(o>50),t={url:a,holders:0}}catch{return}u.set(e,t),d.notify()}let n=t;clearTimeout(n.timer),n.holders++;let r=!0;return{url:n.url,release:()=>{r&&(r=!1,--n.holders===0&&u.get(e)===n&&(n.timer=setTimeout(()=>f(e,n),1e3)))}}}async function v(e,t){let n=t?_(e):void 0,r=new Image;try{return await new Promise((t,i)=>{r.onload=t,r.onerror=i,r.src=n?.url??e}),r}finally{n?.release()}}function y(r){let $=J9(5),[i]=n(r),a=r!==void 0&&r!==i&&l.test(r)?r:void 0,o=c(a!==void 0)?void 0:a,s,f;J1($,0,o)?(s=()=>o===void 0?void 0:_(o)?.release,f=[o],K2($,0,o,s,f)):(s=$[1],f=$[2]),t(s,f);let p=J1($,3,o)?K1($,3,o,()=>o===void 0?void 0:u.get(o)?.url):$[4],m=e(d.subscribe,p,b),[h,g]=n(),v=o===void 0?r:m??h??r;return v!==h&&g(v),v}function b(){}var x=String.raw`
self.onmessage = async ({ data: { id, src, fit, asPixels, wide } }) => {
  let decoder;
  let image;
  try {
    const base64 = src.slice(src.indexOf(",") + 1);
    const data =
      Uint8Array.fromBase64?.(base64) ??
      Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
    decoder = new ImageDecoder({ type: src.slice(5, src.indexOf(";")), data });
    image = (await decoder.decode()).image;
    const { displayWidth: width, displayHeight: height } = image;
    const box = fit ?? { width, height };
    const cover = Math.max(box.width / width, box.height / height);
    const scale = Math.min(1, cover);
    if (asPixels) {
      // The sizes differ for a rotated picture, and where Chromium is too old to know the format option.
      if (image.visibleRect.width !== width || image.allocationSize({ format: "RGBA" }) !== width * height * 4) {
        throw new Error("not plain RGBA");
      }
      const rgba = new ArrayBuffer(width * height * 4);
      const colorSpace = wide.includes(image.colorSpace.primaries) ? "display-p3" : "srgb";
      await image.copyTo(rgba, { format: "RGBA", colorSpace });
      self.postMessage({ id, rgba, width, height, colorSpace }, [rgba]);
      return;
    }
    const canvas = new OffscreenCanvas(
      Math.round((box.width * scale) / cover),
      Math.round((box.height * scale) / cover),
    );
    const context = canvas.getContext("2d", { willReadFrequently: true });
    context.imageSmoothingQuality = "high";
    context.drawImage(image, 0, 0, Math.round(width * scale), Math.round(height * scale));
    const scaled = canvas.transferToImageBitmap();
    self.postMessage({ id, scaled }, [scaled]);
  } catch {
    self.postMessage({ id });
  } finally {
    image?.close();
    decoder?.close();
  }
};
`,S=/^data:image\/(?:jpeg|png|webp);base64,/,C,w=0,T=new Map,E=0;function D(e){let t=T.get(e.data.id);t&&(E=0,t(e.data))}function O(e){E=0,e?.preventDefault(),C?.terminate(),C=null,T.forEach(e=>e())}o(()=>{C&&=(O(),void 0)});function k(){if(C!==void 0||(C=null,typeof ImageDecoder>"u"))return C;try{C=new Worker(URL.createObjectURL(new Blob([x],{type:"text/javascript"})),{name:"browser-card-copy"}),C.onmessage=D,C.onerror=O}catch{C=null}return C}var A=["smpte432","bt2020"];function j(){return!r?.compositingStore||document.documentElement.hasAttribute("data-software-compositing")?[]:matchMedia("(color-gamut: p3)").matches?[...A,null]:A}function M(e,t,n){let r=S.test(e)?k():null;if(r!==null)return new Promise(i=>{let a=w++,o=e=>{clearTimeout(s),T.delete(a),i(e)},s=setTimeout(()=>n&&++E<3?o():O(),2e3);T.set(a,o);let c=n?j():[];r.postMessage({id:a,src:e,fit:t,asPixels:n,wide:c})})}function N(e,t){return M(e,t,!1)?.then(e=>e?.scaled)}async function P(e){let{rgba:t,width:n,height:r,colorSpace:i}=await M(e,void 0,!0)??{};return t&&n?new ImageData(new Uint8ClampedArray(t),n,r,{colorSpace:i}):void 0}export{m as a,v as i,N as n,y as o,_ as r,c as s,P as t};