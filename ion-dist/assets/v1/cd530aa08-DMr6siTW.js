import{Ev as e}from"./shared-141-K5japEQk.js";var t=15e3,n=String.raw`
let orientationApplied;
async function appliesExifOrientation(probeBase64) {
  if (orientationApplied === undefined) {
    try {
      const bytes = Uint8Array.from(atob(probeBase64), (c) => c.charCodeAt(0));
      const probe = await createImageBitmap(new Blob([bytes], { type: "image/jpeg" }));
      orientationApplied = probe.width === 1 && probe.height === 2;
      probe.close();
    } catch {
      orientationApplied = null;
    }
  }
  return orientationApplied;
}
self.onmessage = async (event) => {
  const { id } = event.data || {};
  try {
    const { image, plan, probeBase64 } = event.data;
    const upright = await appliesExifOrientation(probeBase64);
    if (!upright) {
      self.postMessage({
        id,
        error: upright === null ? "OrientationProbeFailed" : "ExifOrientationUnsupported",
      });
      return;
    }
    const bitmap = image.close ? image : await createImageBitmap(image);
    let blob;
    let width;
    let height;
    const fits = () => plan.targetBytes === undefined || blob.size <= plan.targetBytes;
    try {
      for (const [index, attempt] of plan.attempts.entries()) {
        const scale = Math.min(1, attempt.maxLongEdgePx / Math.max(bitmap.width, bitmap.height));
        width = Math.max(1, Math.round(bitmap.width * scale));
        height = Math.max(1, Math.round(bitmap.height * scale));
        const canvas = new OffscreenCanvas(width, height);
        const context = canvas.getContext("2d");
        if (!context) {
          throw new Error("no 2d context");
        }
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        if (plan.background) {
          context.fillStyle = plan.background;
          context.fillRect(0, 0, width, height);
        }
        context.drawImage(bitmap, 0, 0, width, height);
        if (plan.holdsDisplayP3) {
          // Writing the same values back, declared Display P3, makes the canvas convert them to sRGB.
          const { data } = context.getImageData(0, 0, width, height);
          context.putImageData(new ImageData(data, width, height, { colorSpace: "display-p3" }), 0, 0);
        }
        if (index === plan.attempts.length - 1) {
          // Earlier attempts still draw from the bitmap. Closing it here, before the last encode, lowers the worker's peak memory.
          bitmap.close();
        }
        for (const quality of attempt.qualities) {
          blob = await canvas.convertToBlob({ type: plan.type, quality });
          if (fits()) {
            break;
          }
        }
        canvas.width = 0;
        canvas.height = 0;
        if (fits()) {
          break;
        }
      }
    } finally {
      bitmap.close();
    }
    self.postMessage({ id, blob, width, height });
  } catch (error) {
    self.postMessage({ id, error: String((error && error.name) || "Error") });
  }
};
`,r,i=0,a=!1,o,s=Promise.resolve(),c=0,l=1,u=0,d;function f(){return!a&&p()}function p(){return typeof Worker<"u"&&typeof createImageBitmap<"u"&&typeof OffscreenCanvas<"u"&&"convertToBlob"in OffscreenCanvas.prototype&&typeof OffscreenCanvasRenderingContext2D<"u"&&"imageSmoothingQuality"in OffscreenCanvasRenderingContext2D.prototype&&typeof URL<"u"&&typeof URL.createObjectURL=="function"}function m(){if(r===null&&i!==0&&Date.now()>=i&&(r=void 0,c=0),r!==void 0)return r;try{o??=URL.createObjectURL(new Blob([n],{type:"text/javascript"}));let e=new Worker(o,{name:"image-encode"});e.addEventListener("error",t=>{t.preventDefault(),g(e)}),r=e}catch{h()}return r??null}function h(){r=null,i=Date.now()+6e5}function g(e){e.terminate(),r===e&&(c+=1,c>=2?h():r=void 0)}function _(e){return e<=2e7?"running_upto_20mp":e<=4e7?"running_upto_40mp":"running_over_40mp"}function v(n,i,o,s,l,u){let d=l.attempts.length>1?t*2:t;return new Promise(t=>{let f=(r,i=!1)=>{clearTimeout(v),n.removeEventListener("message",m),n.removeEventListener("error",h),u?.removeEventListener("abort",p);let a=r.error===void 0?"finished":"failed";e("photo_downscale_job",i?a:"abandoned"),t(r)},p=()=>{n.terminate(),r===n&&(r=void 0),f({id:i,error:"cancelled"})},m=e=>{e.data?.id===i&&(e.data.error==="OrientationProbeFailed"?g(n):c=0,e.data.error==="ExifOrientationUnsupported"&&(a=!0,n.terminate(),r===n&&(r=void 0)),f(e.data,!0))},h=()=>{g(n),f({id:i,error:"worker_crashed"})},v=setTimeout(()=>{g(n),f({id:i,error:"timed_out"})},d);n.addEventListener("message",m),n.addEventListener("error",h),u?.addEventListener("abort",p,{once:!0}),e("photo_downscale_job",_(s));try{n.postMessage({id:i,image:o,plan:l,probeBase64:"/9j/4AAQSkZJRgABAQAAAQABAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////2wBDAf//////////////////////////////////////////////////////////////////////////////////////wAARCAABAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKAA/9k="},"close"in o?[o]:[])}catch{f({id:i,error:"worker_crashed"})}})}function y(e,t,n,r){d?.();let i=l++;if(r?.aborted)return Promise.resolve({id:i,error:"cancelled"});let o,c=new Promise(e=>{o=e}),f=!0,p=e=>f?(f=!1,clearTimeout(h),r?.removeEventListener("abort",g),e!==void 0&&o({id:i,error:e}),!0):!1,h=setTimeout(()=>p("timed_out"),1e4),g=()=>{p("cancelled")};r?.addEventListener("abort",g,{once:!0});let _=async()=>{if(!p())return;if(r?.aborted){o({id:i,error:"cancelled"});return}if(a){o({id:i,error:"ExifOrientationUnsupported"});return}let s=m();if(!s){o({id:i,error:"worker_unavailable"});return}o(await v(s,i,e,t,n,r))};u+=1;let y=()=>{--u};return s=s.then(_,_).then(y,y),c}async function b(e,t,n){if(t>8e7||!f())return null;let{blob:r,width:i,height:a}=await y(e,t,n);return r?.size&&r.type===n.type&&i!==void 0&&a!==void 0?{blob:r,width:i,height:a}:null}async function x(e,t,n,r){for(;u>0&&!r.aborted;)await s;if(r.aborted||c>0||!f())return null;let i=new AbortController,a=()=>i.abort();r.addEventListener("abort",a,{once:!0});let o=y(e,t,n,i.signal);d=a;let{blob:l}=await o;return r.removeEventListener("abort",a),d===a&&(d=void 0),c=0,l?.size&&l.type===n.type?l:null}export{y as encodeInWorker,b as encodeOffMainThread,x as encodeWhenWorkerIsFree,f as workerCanEncode};