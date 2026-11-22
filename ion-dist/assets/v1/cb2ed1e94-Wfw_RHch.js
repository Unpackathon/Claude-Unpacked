import{Va as e,ba as t,bo as n,fo as r}from"./vendor-frame-Dy-urf5a.js";import{$d as J9,Jd as J2,Kd as J0,Yd as J3,ef as K0,if as K4,nf as K2,qd as J1,tf as K1}from"./shared-frame-DeSSgTpM.js";import{K as i}from"./shared-25-DapkFWlH.js";import{vi as a}from"./shared-5-psTP1UDv.js";import{_q7 as o,_u0 as s,r as c,t as l}from"./c67494563-BGlz5taf.js";function u(){return document.documentElement.hasAttribute("data-motion-rest")}function d(e){if(typeof window>"u")return()=>void 0;let t=window.matchMedia(o),n=()=>{e(l())},r=e=>{e.key===s&&n()};return t.addEventListener("change",n),window.addEventListener("storage",r),()=>{t.removeEventListener("change",n),window.removeEventListener("storage",r)}}function f(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.warn("[epitaxy-shader] compile:",e.getShaderInfoLog(r)),e.deleteShader(r),null)):null}function p(e,t){e.useProgram(t)}function m(e,t,n){let r=f(e,e.VERTEX_SHADER,t),i=f(e,e.FRAGMENT_SHADER,n);if(!r||!i)return null;let a=e.createProgram();return a?(e.attachShader(a,r),e.attachShader(a,i),e.linkProgram(a),e.deleteShader(r),e.deleteShader(i),e.getProgramParameter(a,e.LINK_STATUS)?a:(console.warn("[epitaxy-shader] link:",e.getProgramInfoLog(a)),e.deleteProgram(a),null)):null}function h(e,t,n){if(t===0)return[n,n,n];let r=(e,t,n)=>(n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),i=n<.5?n*(1+t):n+t-n*t,a=2*n-i;return[r(a,i,e+1/3),r(a,i,e),r(a,i,e-1/3)]}function g(e){let t=e.trim(),n=t.match(/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*(?:,\s*([\d.]+))?\s*\)$/i);if(n){let e=parseFloat(n[1])/360,t=parseFloat(n[2])/100,r=parseFloat(n[3])/100,i=n[4]===void 0?1:parseFloat(n[4]),[a,o,s]=h(e,t,r);return[a,o,s,i]}let r=t.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+))?\s*\)$/i);if(r)return[parseFloat(r[1])/255,parseFloat(r[2])/255,parseFloat(r[3])/255,r[4]===void 0?1:parseFloat(r[4])];let i=t.match(/^#([0-9a-f]{6})([0-9a-f]{2})?$/i);if(i){let e=parseInt(i[1],16),t=i[2]===void 0?1:parseInt(i[2],16)/255;return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255,t]}return[.5,.5,.5,.5]}var _=4147200,v=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);function y(e){let $=J9(5),{fragmentSource:t,color:o,onSetup:s}=e,c=n(null),f,h;return J3($,0,o,t,s)?(f=()=>{let e=c.current;if(!e)return;let n=e.getContext("webgl2",{alpha:!0,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0});if(!n)return;let r=m(n,`#version 300 es
in vec2 a_position;
out vec2 v_uv;
uniform vec2 u_resolution;
void main() {
  // pixel-space UV so fragment can do floor(uv / gap) without aspect distortion
  v_uv = (a_position * 0.5 + 0.5) * u_resolution;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,t);if(!r)return;p(n,r);let f=s?.(n,r),h=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,h),n.bufferData(n.ARRAY_BUFFER,v,n.STATIC_DRAW);let y=n.getAttribLocation(r,"a_position");n.enableVertexAttribArray(y),n.vertexAttribPointer(y,2,n.FLOAT,!1,0,0);let b=n.getUniformLocation(r,"u_time"),x=n.getUniformLocation(r,"u_resolution"),S=n.getUniformLocation(r,"u_color");n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA),n.clearColor(0,0,0,0);let C=!0,w=(t,n,r)=>{let i=Math.max(1,Math.round(t*r)),a=Math.max(1,Math.round(n*r)),o=i*a;if(o>_){let e=Math.sqrt(_/o);i=Math.max(1,Math.round(i*e)),a=Math.max(1,Math.round(a*e))}(e.width!==i||e.height!==a)&&(e.width=i,e.height=a,C=!0)},T=new(i(e))(t=>{let n=t[0],r=n.devicePixelContentBoxSize?.[0];if(r)w(r.inlineSize,r.blockSize,1);else{let t=n.borderBoxSize?.[0]??n.contentBoxSize?.[0],r=t?.inlineSize??e.clientWidth,i=t?.blockSize??e.clientHeight;w(r,i,window.devicePixelRatio||1)}j()});T.observe(e),(()=>{let[e,t,r,i]=g(o??"hsla(0, 0%, 50%, 0.5)");n.uniform4f(S,e*i,t*i,r*i,i)})();let E=+!!l(),D=0,O=Math.random()*1e6,k=performance.now(),A=!1,j=()=>{C&&=(n.viewport(0,0,e.width,e.height),n.uniform2f(x,e.width,e.height),!1),n.uniform1f(b,O*.001),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.TRIANGLES,0,6)},M=e=>{O+=(e-k)*E,k=e,j(),D=requestAnimationFrame(M)},N=()=>document.hidden||e.ownerDocument===document&&u(),P=()=>{A||E===0||(A=!0,k=performance.now(),D=requestAnimationFrame(M))},F=()=>{A&&(A=!1,cancelAnimationFrame(D))},I=d(e=>{E=+!!e,E===0?(F(),j()):N()||P()}),L=()=>{N()?F():P()};document.addEventListener("visibilitychange",L);let R=a(L);return w(e.clientWidth||1,e.clientHeight||1,window.devicePixelRatio||1),j(),N()||P(),()=>{F(),f?.(),T.disconnect(),I(),R(),document.removeEventListener("visibilitychange",L),n.deleteProgram(r),n.deleteBuffer(h)}},h=[t,o,s],K4($,0,o,t,s,f,h)):(f=$[3],h=$[4]),r(f,h),c}function b(n){let $=J9(6),r=y(n),{shouldAnimate:i}=c(),a=i&&"animate-[fade_0.6s_ease-out]",o=J1($,0,a)?K1($,0,a,t("absolute inset-0 w-full h-full pointer-events-none",a)):$[1],s=J0($,2)?K0($,2,{zIndex:-1}):$[2];return J2($,3,r,o)?K2($,3,r,o,e("canvas",{ref:r,className:o,style:s,"aria-hidden":!0})):$[5]}function x(){let $=J9(1);return J0($,0)?K0($,0,e(b,{fragmentSource:`#version 300 es
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec4 u_color;
in vec2 v_uv;
out vec4 fragColor;

const float GAP   = 22.0;   // px between cell centers
const float DOT_R = 1.6;    // peak radius px \u2014 large enough to read round
const float R_MIN = 1.0;    // trough radius px \u2014 still a circle, not a smear

const float ARMS  = 2.0;    // spiral arm count
const float PITCH = 0.08;   // radial phase rate \u2014 lower = looser spiral
const float SPIN  = 0.25;   // arm rotation rad/sec
const float DRIFT = 0.035;  // spiral origin Lissajous speed

// Arm half-width in dArm units (0..1). Beyond this: alpha = 0, dots invisible.
// Gamma 2.2 roughly matches sRGB \u2014 perceptually the brightness steps look
// more even than a linear ramp would at these low alphas.
const float WIDTH = 0.55;
const float GAMMA = 2.2;

// Sheet ripple \u2014 dots are displaced off their lattice points by a pair of
// crossed traveling waves. Runs independent of (and slower than) the spiral.
const float RIPPLE_AMP  = 3.0;    // peak displacement px
const float RIPPLE_FREQ = 0.020;  // wave number (cycles per cell)
const float RIPPLE_VEL  = 0.12;   // phase velocity rad/sec
const float RIPPLE_TURN = 0.015;  // wave-heading drift rad/sec

void main() {
  vec2 cell = floor(v_uv / GAP);

  // Two waves at heading \u03B8 and \u03B8+~60\u00B0; heading drifts so the interference
  // pattern slowly reorients. Displacement is along each wave's travel axis
  // \u2014 a plane wave pushes points in-line, not sideways.
  float h = u_time * RIPPLE_TURN;
  vec2 k1 = vec2(cos(h), sin(h));
  vec2 k2 = vec2(cos(h + 1.05), sin(h + 1.05));
  float s1 = sin(dot(cell, k1) * RIPPLE_FREQ * 6.2831853 - u_time * RIPPLE_VEL);
  float s2 = sin(dot(cell, k2) * RIPPLE_FREQ * 6.2831853 - u_time * RIPPLE_VEL * 0.8);
  vec2 disp = (k1 * s1 + k2 * s2) * RIPPLE_AMP * 0.5;

  vec2 local = v_uv - (cell + 0.5) * GAP - disp;
  float dist = length(local);

  // Spiral origin wanders on a 3:2 Lissajous in cell space.
  vec2 gridSize = u_resolution / GAP;
  vec2 origin = gridSize * 0.5 + gridSize * 0.35 * vec2(
    sin(u_time * DRIFT * 3.0),
    cos(u_time * DRIFT * 2.0)
  );

  vec2 d = cell - origin;
  float rad = length(d);
  float ang = atan(d.y, d.x);

  // Linear distance from nearest arm spine, 0 = on spine, 1 = mid-trough.
  float phase = ang * ARMS + rad * PITCH - u_time * SPIN;
  float dArm = acos(cos(phase)) / 3.14159265;

  // Normalized position within the arm, 1 at spine \u2192 0 at WIDTH, clamped.
  float t = max(1.0 - dArm / WIDTH, 0.0);

  float a = pow(t, GAMMA);
  float r = mix(R_MIN, DOT_R, t);

  float aa = fwidth(dist);
  float mask = 1.0 - smoothstep(r - aa, r + aa, dist);

  // u_color is premultiplied at upload; with ONE, ONE_MINUS_SRC_ALPHA the
  // per-fragment modulation must scale all four channels or rgb > alpha
  // violates the invariant (additive halos on dark-mode dot edges).
  fragColor = u_color * (a * mask);
}
`})):$[0]}export{x as DotGridShader};