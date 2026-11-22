import{j as e}from"./vendor-zod-Ddu6wnrm.js";import{Ba as t,Ha as n,Va as r,_o as i,bo as a,fo as o,io as s,lo as c,mo as l,po as u,xo as d}from"./vendor-frame-Dy-urf5a.js";import{$d as J9,Gd as I5,Gl as f,Hd as I2,Jd as J2,Kd as J0,Ru as p,Ud as I3,Vd as I1,Vu as m,Xd as J4,Yd as J3,Zd as J5,af as K5,ef as K0,if as K4,lf as Z4,nf as K2,nu as h,of as Z1,qd as J1,rf as K3,sf as Z2,tf as K1}from"./shared-frame-DeSSgTpM.js";import{O as g,V as _,a_ as v,mo as y}from"./shared-0-D23kmOCB.js";import{Jv as b,So as x,Yv as S,gy as ee,q as C,vi as te}from"./shared-25-DapkFWlH.js";import{R_ as ne,_D2 as re,ab as ie,mb as w,rb as T}from"./shared-1-uKWXuHc9.js";import{At as ae,jt as oe}from"./vendor-all-1-BocQA2O8.js";import{va as E}from"./shared-33-BnmCH4hK.js";import{Jm as D,qm as se}from"./shared-238-CGzDEQRA.js";import{Fr as ce,Nr as O,Pr as k}from"./shared-49-Ucjo_u1E.js";import{Xa as A}from"./shared-29-GrkLL17E.js";import{t as j}from"./shared-36-BYpoDCvt.js";import{t as M}from"./cd7b9080c-SD9NhBvX.js";import{r as le}from"./cc2521586-XTNZAZI8.js";import{t as ue}from"./cc0051c10-CfAlBN3r.js";import{n as de}from"./cc2a7f128-mg33z4Pz.js";import{lm as N}from"./shared-73-DfCPGdCT.js";import{_2C as P,_2f as fe,_DK as F,_O3 as I,_f7 as L}from"./shared-41-CFsocOl8.js";function R(e,t,n){let $=J9(12),r=c(T),i=w(n,re),a=J2($,0,t,i)?K2($,0,t,i,()=>{i.current||(i.current=!0,t())}):$[2],s=u(a),l=J4($,3,s,i,r,e)?K4($,3,s,i,r,e,()=>{if(!e){i.current=!1;return}if(!r.getState().hidden){s();return}return ie(r,e=>{e||s()})}):$[7],d=J3($,8,i,r,e)?K3($,8,i,r,e,[e,r,i]):$[11];o(l,d)}function z(e,t){let n=e.windows?"\\":"/",r=F(e,t.root,"root")?.slice(0,-1);if(r&&!P(r,n))return r.length>0?{lead:"",names:r,separator:n}:void 0;let i=e.windows?void 0:F(e,t.home,"home"),[a,o]=i?.length?["~",i]:[e.lead,e.names];return o.length>+!a?{lead:a,names:o.slice(0,-1),separator:n}:void 0}function B(e,t){let n=e.map(e=>{let n=L(e,fe(e,t)),r=z(n,t),i=r?.lead?[r.lead,...r.names]:r?.names;return{name:n.names.at(-1)??n.lead,folder:r,steps:i??[]}}),r=new Map;for(let{name:e,steps:t}of n){let n=r.get(e);n?n.push(t):r.set(e,[t])}return n.map(({name:e,folder:t,steps:n})=>{if(!t)return{name:e};let i=I(t),a=(r.get(e)??[]).filter(e=>e.length!==n.length||e.some((e,t)=>e!==n[t]));if(a.length===0)return{name:e,folder:i};for(let r=1;r<t.names.length;r++){a=a.filter(e=>e.at(-r)===n.at(-r));let o=t.names.slice(-r);if(a.length===0&&!P(o,t.separator))return{name:e,folder:i,description:o.join(t.separator)}}return{name:e,folder:i,description:i}})}function V(){let e=N();return e?S(e.version)?e.build==="ClaudeNest"||b(e.version,"1.3036.0"):!1:!0}function pe(e){return e.flatMap(e=>{let t=le.safeParse(e.id);return!t.success||t.data==="xhigh"&&!V()?[]:[{...e,id:t.data}]})}function H(e){return ne(e).cdsCatalog===void 0?void 0:e}var me=e().catch(""),U=ae({levelWithUltracode:{defaultMessage:"{level} \u00B7 {ultracode}",id:"qnlCQeFOH/"}}),he=ae({low:{defaultMessage:"Low",id:"477I0ggSYe"},medium:{defaultMessage:"Medium",id:"ovJ26CKo4Q"},high:{defaultMessage:"High",id:"AxMhQrcUDC"},xhigh:{defaultMessage:"Extra high",id:"kDEj60CmLq"},max:{defaultMessage:"Max",id:"vWw9vwL+Z/"}});function ge(e){return A(e)||E(e)}function _e(e,t,n){return{...e,models:e.models.map(e=>e.id===t&&e.thinking?{...e,thinking:{...e.thinking,effort_options:[n,...e.thinking.effort_options??[]]}}:e)}}function ve(e){let $=J9(27),{offered:t,row:n,effort:r}=e,{served:i}=se("code"),a=n?.id,o=(i?.org_enforced_default_model??null)===null,s=t&&o?n?.thinking?.effort_lead:void 0,c=s!==void 0&&!ge(s.runs_at)&&n?.thinking?.effort_options?.some(e=>e.id===s.runs_at)?s:void 0,l=J1($,0,a)||J1($,1,i?.thinking_by_model)?I1($,1,Z1($,0,a===void 0?void 0:D(i?.thinking_by_model,a),a),i?.thinking_by_model):$[2],u=c!==void 0&&(l?.effort_option===c.id||l?.thinking===null)&&r===c.runs_at,d;bb0:{if(a===void 0||c===void 0){d=null;break bb0}let e,t;J1($,3,c)?({runs_at:t,...e}=c,K2($,3,c,e,t)):(e=$[4],t=$[5]);let n=J2($,6,c.id,t)?I2($,6,e=>e===c.id?t:e,c.id,t):$[8],r=J2($,9,e,a)?K2($,9,e,a,t=>_e(t,a,e)):$[11],i=J2($,12,c.id,u)?I2($,12,e=>u&&e&&"effort"in e?{...e,effort:c.id}:e,c.id,u):$[14],o=J2($,15,c.id,u)?I2($,15,e=>u?c.id:e,c.id,u):$[17],s=J1($,18,c.id)?I1($,18,e=>e===c.id?{followsDefault:!0}:void 0,c.id):$[19];d=J5($,20,n,u,r,i,o,s)?K5($,20,n,u,r,i,o,s,{shown:u,listed:r,config:W,thinking:i,realEffort:n,shownId:o,pick:n,saveOptions:s}):$[26]}return d}function W(e){return e??{}}var ye={light:{chargedStart:"#888edd",chargedEnd:"#8964c4",cool:"#c6c0f3",hot:"#fbedf1",tintBlue:"rgba(191, 214, 243, 0.28)",tintPink:"rgba(240, 188, 204, 0.28)"},dark:{chargedStart:"color(srgb 0.62 0.5 0.92)",chargedEnd:"color(srgb 0.35 0.25 0.6)",cool:"#ffffff",hot:"var(--cds-text-pro)",tintBlue:"transparent",tintPink:"transparent"}},be={light:{bedFill:1,chargeMax:.92,chargeRamp:.5,inkFloor:.28,inkCeil:1,gain:1.18},dark:{bedFill:0,chargeMax:.85,chargeRamp:1.1,inkFloor:.08,inkCeil:.85,gain:1}};function xe(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),r):null}function G(e,t,n){let r=xe(e,e.VERTEX_SHADER,t),i=xe(e,e.FRAGMENT_SHADER,n);if(!r||!i)return null;let a=e.createProgram();return a?(e.attachShader(a,r),e.attachShader(a,i),e.linkProgram(a),e.deleteShader(r),e.deleteShader(i),a):null}function K(e){let t=e.createElement("canvas");t.width=1,t.height=1;let n=t.getContext("2d",{willReadFrequently:!0}),r="#010203";return e=>{if(!n||(n.fillStyle=r,n.fillStyle=e,n.fillStyle===r&&e.trim().toLowerCase()!==r))return null;n.clearRect(0,0,1,1),n.fillRect(0,0,1,1);let t=n.getImageData(0,0,1,1).data;return[(t[0]??0)/255,(t[1]??0)/255,(t[2]??0)/255,(t[3]??0)/255]}}var Se=4147200,Ce=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);function we(e,t,n,r,i){let a=[],o=(e,t)=>{a.length>=8&&a.shift(),a.push([e,t])},s={pressStart:e=>{o("pressStart",e)},pressEnd:e=>{o("pressEnd",e)}};t.current=s;let c=!1,l=0,u=()=>{let o=e.getContext("webgl2",{alpha:!0,antialias:!1,depth:!1,stencil:!1});if(!o){t.current=null,i(!1);return}let s=o.getExtension("KHR_parallel_shader_compile"),u=G(o,`#version 300 es
in vec2 a_position;
out vec2 v_uv;
uniform vec2 u_resolution;
void main() {
  // pixel-space UV so fragment can do floor(uv / gap) without aspect distortion
  v_uv = (a_position * 0.5 + 0.5) * u_resolution;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,`#version 300 es
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_fg;   // hot ink (INKS.hot) \u2014 the brightest thing in the bar
uniform vec3 u_fg2;  // cool ink (INKS.cool) \u2014 the low-energy end of
                     // the ramp: luminous lavender in light, white in dark \u2014
                     // ALWAYS brighter than the ground it sits on, so every
                     // recruited cell reads as emitting, not as ink
uniform float u_seed; // re-rolled every press \u2014 fresh jitter and recruitment each run

// Burst ring buffer. Each slot is a one-shot burst: time it fired (in the
// u_time clock) and the origin in framebuffer pixels. Slots start far in the
// past so nothing plays on mount; old bursts age out via the cutoff below.
const int MAX_BURSTS = 8;
uniform float u_burstTime[MAX_BURSTS];
uniform vec2  u_burstCenter[MAX_BURSTS];
uniform float u_burstGain[MAX_BURSTS];   // strength k \u2208 [0,1] \u2014 first stop \u2192 0, top stop \u2192 1


// Master envelope: 1 while pressed, eased to 0 after release so the whole
// field cools down on mouse-up instead of trailing per-burst afterglows.
uniform float u_fade;

// The charged surface, folded into the same texture: a left-edge\u2192handle
// gradient (u_charge0 \u2192 u_charge1) that lives in the same cells as the
// energy and arrives with the same wavefront, so surface and energy read as
// one thing on one clock. u_pos is the handle fraction (0..1). The colors
// carry their token's alpha \u2014 light runs it opaque (the charge is the
// field's own ground there), and a transparent token would remove the
// surface entirely while the cells still paint.
uniform float u_pos;
uniform vec4 u_charge0;
uniform vec4 u_charge1;

// How much of the charged surface paints in the GAPS between cells (0..1).
// Light mode runs this high so the charge reads as a continuous dark ground
// for the bright cells to emit against; dark mode keeps 0 \u2014 its charge stays
// cell-masked exactly as before.
uniform float u_bedFill;

// Per-cell hue scatter (alpha channel = mix amount): a minority of cells
// lean toward each tint so the field reads rich instead of monochrome.
// Amount 0 (dark mode) leaves the ink ramp bit-identical.
uniform vec4 u_tintA; // accent blue lean
uniform vec4 u_tintB; // pink lean

in vec2 v_uv;
out vec4 fragColor;

// \u2500\u2500\u2500 the grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// The bar is a field of small rounded cells \u2014 a grid / activity-heatmap
// visual language, packed denser for intricacy inside a 24px bar. At rest it is invisible \u2014 only energy makes it exist.
const float CELL_PITCH = 4.0;  // px between cell centers (cell + gap) \u2014 nominal; the
                               // grid re-derives the exact pitch so rows tile the bar height
const float CELL_SIZE  = 3.0;  // px square
const float CELL_R     = 0.9;  // corner radius, px

// \u2500\u2500\u2500 the energy \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// A burst is a wavefront racing outward from the press point in Manhattan
// distance, quantized to whole cells: each cell flips on as the front reaches
// it (per-cell jitter keeps the front ragged and alive), then cools back down
// through the discrete ramp behind it.
//
// Per-burst strength k (u_burstGain) slides speed, reach, brightness and
// afterglow between the _LO (faint stop) and _HI (full blast) ends.
const float SPEED_LO   = 20.0;  // wavefront speed, cells/sec
const float SPEED_HI   = 36.0;  //   full blast crosses the bar in well under 2s
const float RANGE_LO   = 10.0;  // a faint pulse stays local to the handle, cells
const float RANGE_HI   = 55.0;  //   the full blast carries to the far end of the fill
const float DENSITY_LO = 0.30;  // fraction of cells a faint pulse recruits \u2014 sparse sketch
const float DENSITY_HI = 0.85;  //   full blast is busy but keeps dark gaps
const float JITTER     = 0.10;  // per-cell arrival scatter, sec \u2014 the organic part
const float HEAD_GAIN  = 1.25;  // arrival flash strength
const float HEAD_DECAY = 5.0;   // arrival flash fade, 1/s (fast)
const float BODY_GAIN  = 0.65;  // afterglow strength
const float BODY_LO    = 3.3;   // afterglow fade for the faint stop, 1/s \u2014 quick cool-down
const float BODY_HI    = 0.77;  //   full blast lingers ~1.3s behind the front
const float AMP_LO     = 0.55;  // overall brightness of the faintest stop
const float MAX_AGE    = 5.0;   // past this a slot is dead \u2014 skip the math

// \u2500\u2500\u2500 the rendering (discrete ramp + breathing top step) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// Cell intensity quantizes to a 5-step ramp (never a continuous gradient),
// the ink walks from the cool ink toward the hot ink as the step rises \u2014
// energy always reads brighter than its ground \u2014 and only top-step cells
// breathe: slow, shallow, per-cell phase so neighbours never sync up (the app
// grid's own pulse). Defaults dialed in on
// shader-explorations/grid/03-cellular-ripple.html, then packed denser.
const float RAMP_POW    = 1.4;   // ink ramp curve \u2014 keeps the cool end longer
const float INK_MAX     = 0.85;  // historical ink ceiling \u2014 now the dark-mode value of u_inkCeil
const float BREATH_DIP  = 0.28;  // top-step breath depth
const float BREATH_BASE = 2.4;   // breath period floor, sec
const float BREATH_VARY = 1.4;   // per-cell period spread, sec
// Charged-surface shape, per mode (see u_bedFill/u_tint* for the rest of the
// mode split). Dark keeps the original constants (0.85 ceiling, 1.1 ramp \u2014
// a tint that deepens linearly toward the handle); light runs the ceiling to
// 1 with a much flatter ramp so the bed reads as a solid dark ground across
// the energized region, fading only at its left edge.
uniform float u_chargeMax;   // alpha ceiling of the charged surface at the handle
uniform float u_chargeRamp;  // exponent on the left-edge\u2192handle deepening

// Alpha of the LOWEST ramp step (the top step is u_inkCeil). Dark keeps the
// original 0.08 \u2014 over a dark fill with additive blending, alpha IS
// brightness, so the climb from 0.08 reads as the intensity ramp. Light
// raises the floor so every recruited cell paints near-solid and the
// intensity ramp is carried by the ink COLOR (lavender \u2192 white-hot) \u2014 a
// translucent chip over the vibrant bed would just read as bed.
uniform float u_inkFloor;

// Alpha of the TOP ramp step. Dark pins the historical INK_MAX (0.85 \u2014
// under additive blending a fully-opaque white cell blows out); light runs
// it to 1.0 so the sparse hot minority genuinely sparkles against the
// field's darker ground (measured headroom: hot cells capped at 0.61 luma
// over a 0.28 ground with the shared ceiling).
uniform float u_inkCeil;

// Multiplier on quantized cell energy. The per-cell brightness lottery is
// tuned for dark's additive regime, where even a faint white cell sparkles;
// in light's opaque regime the same distribution never reaches the hot end
// of the ink ramp, so light boosts it to put a white-hot minority on the
// board. Dark pins 1 \u2014 identical output.
uniform float u_energyGain;

float hash21(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  // Fit a whole number of rows into the bar height so no row is clipped at
  // the edges; cells stay square, so the right edge (hidden under the
  // handle / rounded end) absorbs any fractional column instead.
  float pitch = u_resolution.y / max(round(u_resolution.y / CELL_PITCH), 1.0);
  float cellScale = pitch / CELL_PITCH;
  vec2 cell = floor(v_uv / pitch);
  vec2 cellCenter = (cell + 0.5) * pitch;

  // Rounded-rect cell mask, anti-aliased \u2014 the gaps between cells never paint.
  float cellHalf = CELL_SIZE * 0.5 * cellScale;
  float cellR = CELL_R * cellScale;
  vec2 q = abs(v_uv - cellCenter) - vec2(cellHalf - cellR);
  float distC = length(max(q, vec2(0.0))) + min(max(q.x, q.y), 0.0) - cellR;
  float aa = min(fwidth(v_uv.x), 1.5);
  float cellMask = 1.0 - smoothstep(-aa, aa, distC);
  // Gaps can only exit early when the charged surface is strictly
  // cell-masked (u_bedFill 0); a continuous bed must keep painting them.
  if (cellMask <= 0.0 && u_bedFill <= 0.0) {
    fragColor = vec4(0.0);
    return;
  }

  float jitter = (hash21(cell + 41.7 + u_seed) - 0.5) * 2.0 * JITTER;
  float vary   = 0.35 + 0.65 * hash21(cell + 13.7 + u_seed); // some cells catch much brighter than others

  float energy = 0.0;
  float charged = 0.0;
  for (int i = 0; i < MAX_BURSTS; i++) {
    float age = u_time - u_burstTime[i];
    if (age < 0.0 || age > MAX_AGE) continue;
    float k = clamp(u_burstGain[i], 0.0, 1.0);

    vec2 originCell = floor(u_burstCenter[i] / pitch);
    float manh = abs(cell.x - originCell.x) + abs(cell.y - originCell.y);

    // Gentle falloff so the field carries to the ends of the revealed bar at
    // full blast instead of dying out mid-bar.
    float range   = mix(RANGE_LO, RANGE_HI, k);
    float falloff = exp(-manh / (range * 0.85));
    float reach   = exp(-max(manh - range, 0.0) * 0.12);
    float speed   = mix(SPEED_LO, SPEED_HI, k);
    float t = age - manh / speed - jitter;
    // The charged surface arrives with the same front: once any burst has
    // reached this cell it stays charged for as long as the press lives.
    charged = max(charged, smoothstep(0.0, 0.15, t) * reach);
    if (t < 0.0) continue;

    // The recruitment lottery re-rolls per burst (the burst's own timestamp
    // is part of the ticket), so every pulse lights a different subset of
    // cells \u2014 a held press keeps tracing new patterns instead of re-lighting
    // the same ones. The lottery only gates the bright energy cells; the
    // charged surface below recruits every cell the front reaches.
    float rank = hash21(cell + 7.3 + u_seed + u_burstTime[i]);
    if (rank > mix(DENSITY_LO, DENSITY_HI, k)) continue;

    float head = HEAD_GAIN * exp(-t * HEAD_DECAY);
    float body = BODY_GAIN * exp(-t * mix(BODY_LO, BODY_HI, k));
    energy += (head + body) * mix(AMP_LO, 1.0, k) * falloff * reach * vary;
  }


  // The master envelope scales energy BEFORE quantization, so on release the
  // whole field cools down through the ramp instead of fading in place. The
  // per-cell brightness lottery is applied here too \u2014 after saturation \u2014 so
  // it spreads cells across the whole ramp instead of being washed out once
  // energy pegs: most cells sit dim-to-mid, a minority run hot, the darkest
  // stay barely lit. Skew (pow) pushes the distribution toward dark.
  // Each cell drifts between two personal brightness identities on its own
  // slow, randomly-phased cycle, so which cells read bright or dark keeps
  // redistributing \u2014 the mosaic never freezes into a fixed pattern.
  float lumA = hash21(cell + 8.8 + u_seed);
  float lumB = hash21(cell + 88.8 + u_seed);
  float lumDrift = 0.5 + 0.5 * sin(u_time * 0.35 + lumA * 6.2832);
  float lum = pow(mix(lumA, lumB, lumDrift), 1.9);
  // A faint coherent wave keeps drifting right\u2192left between pulses, with a
  // touch of per-cell phase scatter so it reads as current, not as a bar.
  float stream = 0.9 + 0.16 * sin(u_time * 1.3 + cell.x * 0.45 + lumB * 2.0);
  float e = clamp(energy, 0.0, 1.0) * u_fade * mix(0.16, 1.0, lum) * stream
    * u_energyGain;

  // The charged surface: a left-edge\u2192handle gradient living in the same
  // cells, revealed by the same wavefront and the same envelope. Deeper
  // toward the handle; nothing where the front hasn't reached.
  float g = clamp(v_uv.x / max(u_pos * u_resolution.x, 1.0), 0.0, 1.0);
  vec3 chargeColor = mix(u_charge0.rgb, u_charge1.rgb, g);
  // The bed factor lets the charge spill into the gaps (light mode's
  // continuous dark ground) while the cells still sit a notch deeper, so the
  // grid stays legible inside the bed without bright gap-lines cutting it up.
  float bedMask = mix(u_bedFill, 1.0, cellMask);
  float chargeA = u_chargeMax * pow(g, u_chargeRamp) * charged * u_fade
    * bedMask * mix(u_charge0.a, u_charge1.a, g);

  // Discrete 5-step ramp for the energy on top \u2014 never a continuous gradient.
  // Empty at rest: energy IS visibility.
  float lv = step(0.04, e) + step(0.2, e) + step(0.4, e) + step(0.6, e) + step(0.8, e);
  // Linear alpha climb from the mode's floor \u2014 every step participates, so
  // the right-to-left intensity progression reads in both modes.
  float alpha = lv <= 0.0 ? 0.0 : mix(u_inkFloor, u_inkCeil, (lv - 1.0) / 4.0);

  // Only the hottest cells breathe \u2014 slow, shallow, never in unison.
  if (lv >= 5.0) {
    float period = BREATH_BASE + BREATH_VARY * hash21(cell + 3.1 + u_seed);
    float phase = hash21(cell + 5.5 + u_seed) * 6.2832;
    alpha *= 1.0 - BREATH_DIP * 0.5 * (1.0 + sin(u_time * 6.2832 / period + phase));
  }

  // Energy over charge (premultiplied), on a transparent canvas \u2014 the slider
  // fill shows through wherever neither paints.
  vec3 ink = mix(u_fg2, u_fg, pow(lv / 5.0, RAMP_POW));
  // Hue scatter: each cell draws a stable lottery ticket; the top of the
  // range leans blue, the bottom leans pink, the middle keeps the base
  // purple ramp. Tint alphas of 0 bypass this entirely.
  float hueSel = hash21(cell + 27.9 + u_seed);
  ink = mix(ink, u_tintA.rgb, u_tintA.a * smoothstep(0.62, 0.95, hueSel));
  // Pink leans the bottom of the range. Written as an inverted forward
  // smoothstep (1 - smoothstep(0.05, 0.38, \u2026)) rather than a descending one
  // (smoothstep(0.38, 0.05, \u2026)): GLSL leaves smoothstep undefined when
  // edge0 >= edge1, and a NaN here would survive the alpha-0 multiply in dark
  // mode and corrupt the ink. The polynomial's S(1-t) = 1-S(t) symmetry makes
  // this form bit-identical to the intended descending ramp.
  ink = mix(ink, u_tintB.rgb, u_tintB.a * (1.0 - smoothstep(0.05, 0.38, hueSel)));
  float eA = alpha * cellMask;
  vec3 col = ink * eA + chargeColor * chargeA * (1.0 - eA);
  float a = eA + chargeA * (1.0 - eA);
  if (a <= 0.0) {
    fragColor = vec4(0.0);
    return;
  }
  fragColor = vec4(col, a);
}
`);if(!u){o.isContextLost()||(t.current=null,i(!1));return}let p=()=>{o.useProgram(u);let s=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,s),o.bufferData(o.ARRAY_BUFFER,Ce,o.STATIC_DRAW);let d=o.getAttribLocation(u,"a_position");o.enableVertexAttribArray(d),o.vertexAttribPointer(d,2,o.FLOAT,!1,0,0);let f=o.getUniformLocation(u,"u_time"),p=o.getUniformLocation(u,"u_resolution"),m=o.getUniformLocation(u,"u_seed"),h=o.getUniformLocation(u,"u_pos"),g=o.getUniformLocation(u,"u_charge0"),_=o.getUniformLocation(u,"u_charge1"),v=o.getUniformLocation(u,"u_bedFill"),y=o.getUniformLocation(u,"u_chargeMax"),b=o.getUniformLocation(u,"u_chargeRamp"),x=o.getUniformLocation(u,"u_inkFloor"),S=o.getUniformLocation(u,"u_inkCeil"),ee=o.getUniformLocation(u,"u_energyGain"),te=o.getUniformLocation(u,"u_tintA"),ne=o.getUniformLocation(u,"u_tintB"),re=o.getUniformLocation(u,"u_fg"),ie=o.getUniformLocation(u,"u_fg2"),w=o.getUniformLocation(u,"u_burstTime[0]"),T=o.getUniformLocation(u,"u_burstCenter[0]"),ae=o.getUniformLocation(u,"u_burstGain[0]"),oe=o.getUniformLocation(u,"u_fade");o.clearColor(0,0,0,0),o.uniform3fv(re,[.72,.59,1]),o.uniform3fv(ie,[1,1,1]),o.uniform1f(oe,0),o.uniform1f(m,0),o.uniform1f(h,1),o.uniform4f(g,.62,.5,.92,1),o.uniform4f(_,.35,.25,.6,1),o.uniform1f(v,0),o.uniform1f(y,.85),o.uniform1f(b,1.1),o.uniform1f(x,.08),o.uniform1f(S,.85),o.uniform1f(ee,1),o.uniform4f(te,0,0,0,0),o.uniform4f(ne,0,0,0,0);let E=new Float32Array(8).fill(-1e3),D=new Float32Array(16),se=new Float32Array(8);o.uniform1fv(w,E),o.uniform2fv(T,D),o.uniform1fv(ae,se);let ce=0,O=!1;l=0;let k=0,A=0,j=e.ownerDocument,M=C(j),le=M.requestAnimationFrame.bind(M),ue=M.cancelAnimationFrame.bind(M),de=!0,N=1,P=1,fe=(t,n,r)=>{let i=Math.max(1,t),a=Math.max(1,n);if(i!==N||a!==P){let e=i/N,t=a/P;for(let n=0;n<8;n++)D[n*2]*=e,D[n*2+1]*=t;o.uniform2fv(T,D),N=i,P=a,de=!0}let s=Math.max(1,Math.round(t*r)),c=Math.max(1,Math.round(n*r)),l=s*c;if(l>Se){let e=Math.sqrt(Se/l);s=Math.max(1,Math.round(s*e)),c=Math.max(1,Math.round(c*e))}(e.width!==s||e.height!==c)&&(e.width=s,e.height=c,de=!0)},F=0,I=-1,L=0,R=!1,z=-1/0,B=-1/0,V=.45;c=!1;let pe=(e,t)=>Math.min((.15+.7*e)*(.45+.55*t),1),H=()=>{de&&=(o.viewport(0,0,e.width,e.height),o.uniform2f(p,N,P),!1),o.uniform1f(f,F),o.uniform1f(h,Math.max(l,.02)),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLES,0,6)},me=()=>F-z<5,U=e=>{let t=I<0?0:Math.max(0,(e-I)*.001);if(F+=t,I=e,k=O?Math.min(k+t/.7,1):Math.max(k-t/.85,0),A=O?A+t:0,O&&F-z>V){let e=Math.min(A/1.6,1);V=.3+Math.random()*.45,X(pe(l,e)*(.85+Math.random()*.3),l+(Math.random()-.5)*.08)}let n=k*k*(3-2*k);o.uniform1f(oe,n),H(),(O||me()&&k>0)&&!j.hidden?L=le(U):R=!1},he=()=>{R||(R=!0,I=-1,L=le(U))},ge=()=>{R&&(R=!1,ue(L))},_e=new(M.ResizeObserver??ResizeObserver)(t=>{let n=t[0],r=n.devicePixelContentBoxSize?.[0];if(r){let e=M.devicePixelRatio||1;fe(r.inlineSize/e,r.blockSize/e,e)}else{let t=n.borderBoxSize?.[0]??n.contentBoxSize?.[0],r=t?.inlineSize??e.clientWidth,i=t?.blockSize??e.clientHeight;fe(r,i,M.devicePixelRatio||1)}H()});_e.observe(e);let ve=M.matchMedia("(prefers-reduced-motion: reduce)"),W=typeof document>"u"?null:document.documentElement,ye=()=>ve.matches||W?.getAttribute("data-reduce-motion")==="true",xe=()=>{O=!1,z=-1/0,B=-1/0,k=0,E.fill(-1e3),o.uniform1fv(w,E),ge(),o.uniform1f(oe,0),H()},G=()=>{Z(),O=!0,A=0,X(pe(l,0),l)},we=()=>{j.hidden?xe():c&&!O&&!ye()?G():me()&&he()};j.addEventListener("visibilitychange",we);let Te=()=>{j.hidden||(ye()?(O||R)&&xe():c&&!O&&G())};ve.addEventListener("change",Te);let q=null;W&&(q=new MutationObserver(Te),q.observe(W,{attributes:!0,attributeFilter:["data-reduce-motion"]}));let J=()=>{O&&(Z(),R||H())},Y=new M.MutationObserver(J);Y.observe(j.documentElement,{attributes:!0,attributeFilter:["data-mode"],subtree:!0});let Ee=M.matchMedia("(prefers-color-scheme: dark)");Ee.addEventListener("change",J),r.current=J,i(!0);let X=(e,t)=>{E[ce]=F,D[ce*2]=t*N,D[ce*2+1]=P*(.35+Math.random()*.3),se[ce]=e,ce=(ce+1)%8,o.uniform1fv(w,E),o.uniform2fv(T,D),o.uniform1fv(ae,se),z=F,B=M.performance.now(),j.hidden||he()},De=null,Z=()=>{De??=K(e.ownerDocument);let t=M.getComputedStyle(e),r=(e,t)=>De?.(e)??t,i=r(t.color,[.72,.59,1,1]),a=r(t.outlineColor,[1,1,1,1]);o.uniform3f(re,i[0],i[1],i[2]),o.uniform3f(ie,a[0],a[1],a[2]),o.uniform4f(g,...r(t.borderTopColor,[.62,.5,.92,1])),o.uniform4f(_,...r(t.borderBottomColor,[.35,.25,.6,1])),o.uniform4f(te,...r(t.textDecorationColor,[0,0,0,0])),o.uniform4f(ne,...r(t.columnRuleColor,[0,0,0,0]));let s=t.colorScheme??"",c=s.includes("dark")?"dark":s.includes("light")?"light":n(),l=be[c];o.uniform1f(v,l.bedFill),o.uniform1f(y,l.chargeMax),o.uniform1f(b,l.chargeRamp),o.uniform1f(x,l.inkFloor),o.uniform1f(S,l.inkCeil),o.uniform1f(ee,l.gain)};t.current={pressStart:e=>{c=!0,l=e,!ye()&&(Z(),M.performance.now()-B>5e3&&k<=0&&(E.fill(-1e3),o.uniform1fv(w,E),o.uniform1f(m,Math.random()*512)),O=!0,A=0,X(pe(e,0),e))},pressEnd:e=>{c=!1,O&&(O=!1,l=e,j.hidden||he())}},fe(e.clientWidth||1,e.clientHeight||1,M.devicePixelRatio||1),H();for(let[e,n]of a)t.current?.[e](n);return a.length=0,()=>{t.current=null,r.current=null,i(!1),ge(),_e.disconnect(),Y.disconnect(),Ee.removeEventListener("change",J),ve.removeEventListener("change",Te),q?.disconnect(),j.removeEventListener("visibilitychange",we),o.deleteProgram(u),o.deleteBuffer(s)}},m=()=>{if(!o.getProgramParameter(u,o.LINK_STATUS)){o.deleteProgram(u),f=null,o.isContextLost()||(t.current=null,a.length=0,i(!1));return}f=p()};if(!s){m();return}let g=()=>{if(h=0,_=void 0,o.getProgramParameter(u,s.COMPLETION_STATUS_KHR)===!0){m();return}v()},v=()=>{e.ownerDocument.hidden?_=setTimeout(g,64):h=d.requestAnimationFrame(g)};f=()=>{h!==0&&d.cancelAnimationFrame(h),_!==void 0&&clearTimeout(_),o.deleteProgram(u)},v()},d=C(e),f=null,p=0,m=0,h=0,g,_;e.ownerDocument.hidden?g=setTimeout(u,0):p=d.requestAnimationFrame(()=>{m=d.requestAnimationFrame(u)});let v=!1,y=e=>{if(v||t.current===null)return;v=!0,e.preventDefault();let n=t.current!==s&&c,r=l;f?.(),f=null,t.current=s,c=!1,l=0,n&&o("pressStart",r)},b=()=>{v&&(v=!1,u())};return e.addEventListener("webglcontextlost",y),e.addEventListener("webglcontextrestored",b),()=>{e.removeEventListener("webglcontextlost",y),e.removeEventListener("webglcontextrestored",b),d.cancelAnimationFrame(p),d.cancelAnimationFrame(m),g!==void 0&&clearTimeout(g),t.current=null,f?.()}}function Te(e){let $=J9(22),{actionsRef:t,mode:n,onLiveChange:s}=e,c=a(null),l=J1($,0,n)?K1($,0,n,()=>n):$[1],u=v(l),d=a(null),f=J0($,2)?K0($,2,()=>{d.current?.()}):$[2],p=J1($,3,n)?K1($,3,n,[n]):$[4];o(f,p);let m=J1($,5,s)?K1($,5,s,e=>{s?.(e)}):$[6],h=v(m),g,_;J1($,7,h)?(g=()=>{C(c.current).WebGL2RenderingContext===void 0&&h(!1)},_=[h],K2($,7,h,g,_)):(g=$[8],_=$[9]),i(g,_);let y,b;J3($,10,t,h,u)?(y=()=>{let e=c.current;if(e)return we(e,t,u,d,h)},b=[t,u,h],K4($,10,t,h,u,y,b)):(y=$[13],b=$[14]),o(y,b);let x=ye[n];return J1($,15,x.chargedEnd)||J1($,16,x.chargedStart)||J1($,17,x.cool)||J1($,18,x.hot)||J1($,19,x.tintBlue)||J1($,20,x.tintPink)?I1($,20,Z1($,19,Z1($,18,Z1($,17,Z1($,16,Z1($,15,r("canvas",{ref:c,className:"absolute inset-0 w-full h-full pointer-events-none",style:{color:x.hot,outlineColor:x.cool,borderTopColor:x.chargedStart,borderBottomColor:x.chargedEnd,textDecorationColor:x.tintBlue,columnRuleColor:x.tintPink,borderWidth:0,borderStyle:"none"},"aria-hidden":!0}),x.chargedEnd),x.chargedStart),x.cool),x.hot),x.tintBlue),x.tintPink):$[21]}var q={outer:"bg-surface-3",inner:"bg-alpha-2"},J=s(function(e){let $=J9(15),{lit:i}=e,a=p(),o=h(),[s,c]=d(null),[l]=d(i),[u,f]=d(i);i&&!u&&f(!0);let m=i&&!o&&(s===!0||s===null&&l),g=`absolute inset-0 ${q.outer} ${m?"opacity-100":"opacity-0"}`,_=o||s===!1?"none":m?"opacity 700ms ease-out":"opacity 850ms linear",v=J1($,0,_)?K1($,0,_,{transition:_}):$[1],y=J0($,2)?K0($,2,r("span",{className:`absolute inset-0 ${q.inner}`})):$[2],b=J2($,3,g,v)?K2($,3,g,v,r("span",{className:g,style:v,children:y})):$[5],x=J3($,6,u,i,a)?K3($,6,u,i,a,u&&r(Y,{lit:i,mode:a,onLiveChange:c})):$[9],S=J1($,10,x)?K1($,10,x,r("span",{className:"absolute inset-0 [mask-image:linear-gradient(to_right,transparent_0%,black_45%)] dark:[mask-image:linear-gradient(to_right,transparent_0%,black_60%)] dark:mix-blend-plus-lighter dark:opacity-65",children:x})):$[11];return J2($,12,b,S)?K2($,12,b,S,n(t,{children:[b,S]})):$[14]});function Y(e){let $=J9(9),{lit:t,mode:n,onLiveChange:i}=e,s=a(null),c=J0($,0)?K0($,0,()=>{s.current?.pressEnd(1)}):$[0],l=u(c),d=J2($,1,l,t)?K2($,1,l,t,()=>{if(t)return s.current?.pressStart(1),()=>{l()}}):$[3],f=J1($,4,t)?K1($,4,t,[t]):$[5];return o(d,f),J2($,6,n,i)?K2($,6,n,i,r(Te,{actionsRef:s,mode:n,onLiveChange:i})):$[8]}var Ee={shortcuts:!0,thinkingStyle:"separate"},X=Ee,De={...Ee,overflowSearch:!0},Z={shortcuts:!0},Oe={...Z,overflowSearch:!0},ke={...Z,overflowStyle:"inline",thinkingStyle:"inline"},Ae={...ke,overflowSearch:!0};function je(e,t,n){switch(e){case"chin":case"row":return n?t?Ae:ke:t?Oe:Z;case"rail":return t?De:X;case"composer":return t?De:Ee}}var Q=new WeakMap;function Me(e,t){let n=Q.get(e);n===void 0&&(n=new Map,Q.set(e,n));let r=n.get(t);if(r!==void 0)return r;let i=e.filter(e=>E(e.id)?t:pe([e]).length>0),a=i.length===e.length?e:i;return n.set(t,a),a}function Ne(e,t){return _(e)??t}function Pe(e){return r("span",{className:"epitaxy-root text-body text-primary break-words contents",children:r(J,{lit:e.atMax})})}function Fe(){return r("span",{className:"epitaxy-root text-body text-primary break-words contents",children:r(J,{lit:!0})})}function Ie(){return r("span",{className:"epitaxy-root text-body text-primary break-words contents",children:r(J,{lit:!1})})}function Le(e,t,n){return t.unsupported?_(e):n??t.name}function Re(e){let $=J9(15),i,a;J1($,0,e)?({parts:a,...i}=e,K2($,0,e,i,a)):(i=$[1],a=$[2]);let o=J1($,3,i)||J1($,4,a.trigger)?I1($,4,Z1($,3,r(ze,{trigger:a.trigger,...i}),i),a.trigger):$[5],s=J1($,6,a.popup)?I1($,6,r(j.Popup,{...a.popup}),a.popup):$[7],c=J1($,8,a.effort)||J1($,9,a.effortOptionCount)?I1($,9,Z1($,8,a.effortOptionCount>0?r(j.Effort,{...a.effort}):null,a.effort),a.effortOptionCount):$[10];return J3($,11,o,s,c)?K3($,11,o,s,c,n(t,{children:[o,s,c]})):$[14]}function ze(e){let $=J9(32),{trigger:i,marker:a,reason:s,onShown:c,caution:u,collapse:d}=e,p=u===void 0?null:u,m=oe(),h=l(),g=a?s===void 0?i.nameOverride??a.fallback:a.fallback:p&&(i.nameOverride??p.name),_=J5($,0,p?.note,g,m,a,s)?I5($,0,a===null||g===null?p?.note:s===void 0?a.original===null?m.formatMessage({defaultMessage:"This session switched to {fallback} after safeguards flagged a message. Pick a model to switch back.",id:"FnKhqMbHN5"},{fallback:g}):m.formatMessage({defaultMessage:"This session switched to {fallback} after {original}\u2019s safeguards flagged a message. Pick a model to switch back.",id:"4Zkm5mSVWS"},{fallback:g,original:a.original}):s,p?.note,g,m,a,s):$[5],v=J5($,6,m,a,_,h,s)?K5($,6,m,a,_,h,s,_===void 0?{}:s===void 0?{"data-rail-value-warning":a===null?_:m.formatMessage({defaultMessage:"Switched after a safeguards flag",id:"P6CCNWiwI3"}),"aria-describedby":h}:{"data-rail-value-warning":s,"aria-label":s}):$[11],y=J2($,12,g,_)?K2($,12,g,_,_?n("span",{className:"text-warning",children:[g," ",r("span",{className:"ms-1 inline-flex h-[1lh] items-center align-top text-fill-warning",children:r(f,{name:"Warning",size:"xs"})})]}):null):$[14],b=_!==void 0&&a!==null,x,S;J2($,15,b,c)?(x=()=>{b&&c?.()},S=[b,c],K3($,15,b,c,x,S)):(x=$[17],S=$[18]),o(x,S);let ee=y??i.nameOverride,C=J5($,19,d,_,v,ee,i)?K5($,19,d,_,v,ee,i,r(j.Trigger,{...i,...v,nameOverride:ee,tooltip:_,collapse:d})):$[24],te=J3($,25,_,h,s)?K3($,25,_,h,s,_!==void 0&&s===void 0?r("span",{id:h,hidden:!0,children:_}):null):$[28];return J2($,29,C,te)?K2($,29,C,te,n(t,{children:[C,te]})):$[31]}var Be=s(function(e){let $=J9(146),{open:t,placement:n,triggerCollapse:i,popupWidth:a,onOpenChange:o,modal:s,disabled:c,contextModel:l,extraLongContextIds:u,onModelPick:d,onEffortPicked:f,effortOverride:p,skipEffortDefaultWrite:h,offerLeadEffort:_,showEffortSection:v,ultracodeAvailable:b,ultracodeSeparate:S,ultracode:C,hostDefaultModel:re,hostDefaultSetByOrganization:ie,effortSetByOrganization:w,environmentModelId:T,modelRestrictionFor:ae,fastModeOn:D,onFastModeSelect:se,fastModeUnavailableRow:A,finalFocus:j,effortOpen:le,onEffortOpenChange:N,onSeparateEffortOptionCountChange:P,catalogSurface:fe,children:F,renderList:I,modelFallback:L,modelCaution:z}=e,B=n===void 0?"composer":n,V=h!==void 0&&h,pe=_!==void 0&&_,H=S!==void 0&&S,me=ie!==void 0&&ie,U=oe(),he=x(te()?.account),ge=ee("(width < 40rem)",m()),_e=de(),W=fe??_e,ye=l??void 0,be=J3($,0,W,u,ye)?K3($,0,W,u,ye,{surface:W,contextModel:ye,extraLongContextIds:u}):$[3],xe=ne(be),{cdsCatalog:G,entryFor:K}=xe,Se=A?.type,Ce=A?.line,we=A?.reason,Te=A?.cta,q=Te?.copy,J=Te?.intent,Y=J1($,4,xe)?K1($,4,xe,k(xe)):$[5],Ee;bb0:{if(!G){Ee=void 0;break bb0}let e=J2($,6,l,K)?K2($,6,l,K,l?K(l):void 0):$[8],t=e&&!e.unsupported?e.id:l??void 0,n=J2($,9,K,re)?K2($,9,K,re,re?K(re):void 0):$[11],r=n&&!n.unsupported?n.id:re,i=J2($,12,K,T)?K2($,12,K,T,T?K(T):void 0):$[14],a=i&&!i.unsupported?i.id:T,o,s;if(J5($,15,G,l,t,Y,w,a,r,me,U,ae)||J5($,25,e?.unsupported,v,b,H,q,J,Ce,we,Se)){let n={message:U.formatMessage(M.adminSet),variant:"neutral"},i=e=>{let i=e,o=e=>{i={...i,...e}};e.supports_1m_context&&o({name:`${e.name} ${U.formatMessage(ue.millionContextSuffix)}`});let s=e.id===t?void 0:ae?.(e.id);if(s!==void 0&&o({disabled:!0,tooltip:{content:s}}),r!==void 0&&e.id===r&&!i.badge&&o({badge:{message:U.formatMessage(me?M.adminSet:M.defaultValue),variant:"neutral"}}),a!==void 0&&e.id===a&&!i.badge&&o({badge:{message:U.formatMessage({defaultMessage:"Preset",id:"EucS2pAMVS"}),variant:"neutral"}}),i.thinking){let{mode_options:r,...a}=i.thinking;if(v){let i=a.effort_options?.length?Me(a.effort_options,!!b&&!H):a.effort_options,s=e.id===t&&i?.find(e=>e.id===w),c=s&&s.badge?.variant!=="warning"?i?.map(e=>e.badge?.variant==="warning"?e:{...e,badge:e===s?n:void 0}):i;(r?.length||c!==a.effort_options)&&o({thinking:{...a,...r?.length&&{type:i?.length?"effort":"none"},effort_options:c}})}else{let{thinking:e,...t}=i;i=t}}return e.fast_mode&&Se!==void 0&&o({fast_mode:{...e.fast_mode,badge:void 0,options:e.fast_mode.options?.map(e=>e.id==="off"?e:{...e,description:Ce,badge:void 0}),disabled:!0,disabled_reason:{type:Se,message:we},selection_notice:q===void 0||J===void 0?null:{cta:{copy:q,intent:J}}}}),i},c=J4($,36,G.models,l,Y,U)||J1($,40,e?.unsupported)?I1($,40,Z4($,36,l&&e?.unsupported&&G.models.length>0?{id:l,name:Ne(l,U.formatMessage({defaultMessage:"Unsupported model",id:"PCrwsn5Duz"})),section:"deprecated",disabled:!0,thinking:G.models.find(e=>e.id===Y)?.thinking}:void 0,G.models,l,Y,U),e?.unsupported):$[41],u=J2($,42,G.models,c)?I2($,42,c?[...G.models,c]:G.models,G.models,c):$[44];o=G,s=u.map(i),K5($,15,G,l,t,Y,w,a,r,me,U,ae),K5($,25,e?.unsupported,v,b,H,q,J,Ce,we,Se,o,s)}else o=$[34],s=$[35];Ee=J2($,45,o,s)?K2($,45,o,s,{...o,models:s}):$[47]}let X=Ee,De=J1($,48,A)?K1($,48,A,()=>A?.onShown?.()):$[49];R(t&&A!==void 0,De);let Z,Oe,ke;if(J2($,50,G?.models,Y)||J3($,52,X?.models,C,H)){Z=X?.models.find(e=>e.id===Y);let e;J2($,58,G?.models,Y)?(e=(G?.models.find(e=>e.id===Y)?.thinking?.effort_options)?.find(Ve),K2($,58,G?.models,Y,e)):e=$[60];let t=e,n;bb1:{if(!H||!C){n=void 0;break bb1}let e=t?.name||C.label,r=t?.description;n=J2($,61,e,r)||J1($,63,C.on)||J1($,64,C.set)?I1($,64,Z1($,63,Z2($,61,{label:e,description:r,checked:C.on,onCheckedChange:C.set},e,r),C.on),C.set):$[65]}Oe=n,ke=H?C?C.on?Fe:Ie:void 0:E(Z?.thinking?.effort_options?.at(-1)?.id)?Pe:void 0,K1($,50,G?.models,Y),K5($,52,X?.models,C,H,Z,Oe,ke)}else Z=$[55],Oe=$[56],ke=$[57];let Ae=ke,Q=H&&E(p??void 0)?"xhigh":p,Be=je(B,he,ge),He=pe&&Be.thinkingStyle!=="separate",Ue=J3($,66,l,Z,K)?K3($,66,l,Z,K,l&&K(l).unsupported?void 0:Z):$[69],We=ve(J3($,70,Q,He,Ue)?K3($,70,Q,He,Ue,{offered:He,row:Ue,effort:Q}):$[73]),Ge=We!==null,Ke=J4($,74,Ge,f,Q,V)?K4($,74,Ge,f,Q,V,e=>{Ge&&e===Q||f(e,{defaultWritten:!ce(V,e)})}):$[78],qe;bb2:{let e=L?.reason!==void 0;if(!L||!X||Y===void 0||!e&&g(K(L.fallbackModel).id)!==g(Y)){qe=null;break bb2}let t;if(J1($,79,K)||J1($,80,L.originalModel)||J1($,81,X.models)){let e=K(L.originalModel);t=Le(L.originalModel,e,X.models.find(t=>t.id===e.id)?.name),$[79]=K,$[80]=L.originalModel,K1($,81,X.models,t)}else t=$[82];let n=t;if(e){let e;if(J1($,83,K)||J1($,84,L.fallbackModel)||J1($,85,X.models)){let t=K(L.fallbackModel);e=Le(L.fallbackModel,t,X.models.find(e=>e.id===t.id)?.name),$[83]=K,$[84]=L.fallbackModel,K1($,85,X.models,e)}else e=$[86];let t=e;qe=J2($,87,t,n)?K2($,87,t,n,t===null||t===n?null:{original:n,fallback:t}):$[89];break bb2}let r=J1($,90,Y)||J3($,91,Z?.name,K,U)?I3($,91,Z1($,90,Le(Y,K(Y),Z?.name)??U.formatMessage({defaultMessage:"Unsupported model",id:"PCrwsn5Duz"}),Y),Z?.name,K,U):$[94];qe=J2($,95,n,r)?K2($,95,n,r,{original:n,fallback:r}):$[97]}let Je=qe,Ye=J2($,98,Je,L)?K2($,98,Je,L,Je===null?void 0:L?.reason?.(Je)):$[100],Xe=L?.reason!==void 0&&Ye===void 0?null:Je,Ze=L?.onShown,Qe=J2($,101,l,Z)?K2($,101,l,Z,Z!==void 0&&typeof l=="string"&&g(Z.id)===g(l)?Z.name:void 0):$[103],$e=J2($,104,Qe,z)?K2($,104,Qe,z,z===void 0||Qe===void 0?null:{name:Qe,note:z}):$[106],et=L!==void 0&&F===void 0,tt=X!==void 0,nt=J5($,107,$e,F,Ye,tt,et,Ze,Xe,i)?K5($,107,$e,F,Ye,tt,et,Ze,Xe,i,et?e=>tt?r(Re,{parts:e,marker:Xe,reason:Ye,onShown:Ze,caution:$e,collapse:i}):null:F&&(e=>F(e,r(ze,{trigger:e.trigger,marker:Xe,reason:Ye,onShown:Ze,caution:$e})))):$[115],rt=B==="row"?"min-w-0 shrink text-secondary":void 0,it=B==="composer"||B==="row"?"top":"bottom",at=B==="composer"||B==="chin"||B==="row"?"end":"start",ot=(a??(B==="rail"?"anchor":"content"))==="anchor"?"w-[var(--anchor-width)] min-w-0":void 0,st=D&&!A?"fast":"off",ct=A?y:se,lt=A?.cta?.run;return J5($,116,We,W,l,c,le,Ae,Oe,u,j,Ke,s,N,d,o,P,t,Be,I,nt,X,Q,V,rt,it,at,ot,st,ct,lt)?K5($,116,We,W,l,c,le,Ae,Oe,u,j,Ke,s,N,d,o,P,t,Be,I,nt,X,Q,V,rt,it,at,ot,st,ct,lt,r(O,{surface:"code",effortSelectionSurface:"code",effortSelectionSettled:!0,catalogSurface:W,contextModel:l,extraLongContextIds:u,onModelPick:d,onEffortPicked:Ke,effortOverride:Q,hostLeadEffort:We,skipEffortDefaultWrite:V,open:t,onOpenChange:o,modal:s,disabled:c,shapedCatalog:X,config:Be,effortSliderOverlay:Ae,effortToggle:Oe,effortOpen:le,onEffortOpenChange:N,onSeparateEffortOptionCountChange:P,triggerVariant:"pill",className:rt,side:it,align:at,popupClassName:ot,fastMode:st,onFastModeChange:ct,onFastModeCta:lt,finalFocus:j,renderList:I,"data-testid":"epitaxy-cds-model-selector",children:nt})):$[145]});function Ve(e){return E(e.id)}export{me as n,Be as t,he as r,pe as _a6,B as _Ou,U as s,R as _08,H as _lb};