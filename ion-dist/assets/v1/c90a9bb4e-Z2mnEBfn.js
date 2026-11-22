var e=.3,t=4/3,n=.6,r=.25,i=[2,4,8,12,16,20,24,28,32,36,40].map(e=>e*r);function a(){return`
  attribute vec2 aVertexPosition;
  uniform mat4 uModelViewMatrix;
  varying vec2 vPosition;

  void main(void) {
    vec2 normalizedPosition = aVertexPosition / ${e.toFixed(2)};
    gl_Position = uModelViewMatrix * vec4(aVertexPosition, 0.0, 1.0);
    vPosition = normalizedPosition;
  }
`}function o(){return`
  precision highp float;
  varying vec2 vPosition;
  uniform vec4 uBaseColor;
  uniform float uOpacityFactor;
  uniform float uOvalRatio;

  void main(void) {
    vec2 ovalPos = vec2(vPosition.x / uOvalRatio, vPosition.y);
    float dist = length(ovalPos);

    // Hard edge with slight anti-aliasing at boundary
    float alpha = 1.0 - smoothstep(0.95, 1.0, dist);
    alpha *= ${.6.toFixed(2)};
    alpha *= uBaseColor.a * uOpacityFactor;

    vec3 premultColor = uBaseColor.rgb * alpha;
    gl_FragColor = vec4(premultColor, alpha);
  }
`}function s(){return`
  attribute vec2 aVertexPosition;
  attribute vec2 aTexCoord;
  varying vec2 vTexCoord;

  void main(void) {
    gl_Position = vec4(aVertexPosition, 0.0, 1.0);
    vTexCoord = aTexCoord;
  }
`}function c(){return`
  precision highp float;
  varying vec2 vTexCoord;
  uniform sampler2D uTexture;
  uniform vec2 uResolution;
  uniform float uOffset; // Kawase offset in texels of the sampled texture
  uniform float uTime;
  uniform float uIsLastPass; // 1.0 for final pass (apply noise), 0.0 otherwise

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  void main(void) {
    vec2 texelSize = 1.0 / uResolution;

    // Kawase blur: sample 4 diagonal corners + center
    vec4 result = texture2D(uTexture, vTexCoord) * 4.0;
    result += texture2D(uTexture, vTexCoord + vec2(-uOffset, -uOffset) * texelSize);
    result += texture2D(uTexture, vTexCoord + vec2(-uOffset,  uOffset) * texelSize);
    result += texture2D(uTexture, vTexCoord + vec2( uOffset, -uOffset) * texelSize);
    result += texture2D(uTexture, vTexCoord + vec2( uOffset,  uOffset) * texelSize);
    vec4 blurred = result / 8.0;

    // Apply noise on final pass only
    ${`
    if (uIsLastPass > 0.5) {
      vec2 noiseCoord = gl_FragCoord.xy * 0.01;
      float animSpeed = ${24 .toFixed(1)};
      float timeScale = floor(uTime * animSpeed) / animSpeed;

      float noise = 0.0;
      vec2 p1 = floor(noiseCoord * ${50 .toFixed(1)}) + vec2(timeScale * 1.0, timeScale * 0.7);
      noise += random(p1) * ${.5.toFixed(1)};
      vec2 p2 = floor(noiseCoord * ${150 .toFixed(1)}) + vec2(timeScale * 0.5, timeScale * 1.3);
      noise += random(p2) * ${.3.toFixed(1)};
      vec2 p3 = floor(noiseCoord * ${300 .toFixed(1)}) + vec2(timeScale * 1.4, timeScale * 0.2);
      noise += random(p3) * ${.2.toFixed(1)};

      float grainThreshold = ${.75.toFixed(2)};
      float grainIntensity = ${.15.toFixed(4)} * ${3 .toFixed(1)};
      float grainMask = smoothstep(grainThreshold, 0.99, noise);
      vec3 grainColor = vec3(1.0) * grainMask * grainIntensity;

      // Only add noise where there's content (based on alpha)
      blurred.rgb += grainColor * blurred.a;
    }
    `}

    gl_FragColor = blurred;
  }
`}function l(e,t,n){let r=e.createFramebuffer(),i=e.createTexture();return!r||!i?{framebuffer:null,texture:null}:(e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,n,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null),{framebuffer:r,texture:i})}function u(e){let t=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),e.STATIC_DRAW);let n=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1]),e.STATIC_DRAW),{position:t,texCoord:n,vertexCount:6}}function d(e){let t=h(e,e.VERTEX_SHADER,s()),n=h(e,e.FRAGMENT_SHADER,c());if(!t||!n)return null;let r=g(e,t,n);return r?{program:r,attribLocations:{vertexPosition:e.getAttribLocation(r,"aVertexPosition"),texCoord:e.getAttribLocation(r,"aTexCoord")},uniformLocations:{texture:e.getUniformLocation(r,"uTexture"),resolution:e.getUniformLocation(r,"uResolution"),offset:e.getUniformLocation(r,"uOffset"),time:e.getUniformLocation(r,"uTime"),isLastPass:e.getUniformLocation(r,"uIsLastPass")}}:null}function f(e){let t=e.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([0-9.]+)\)/);return t?[parseInt(t[1])/255,parseInt(t[2])/255,parseInt(t[3])/255,parseFloat(t[4])]:[0,0,0,0]}function p(e,t,n){return[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n,e[3]+(t[3]-e[3])*n]}function m(e,t,n,r){let i=t.context.sampleRate/2,a=Math.floor(n/i*(e.length-1)),o=Math.floor(r/i*(e.length-1)),s=0;for(let t=a;t<=o;t++)s+=e[t];return s/((o-a+1)*255)}function h(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(e.deleteShader(r),null)):null}function g(e,t,n){let r=e.createProgram();return!r||(e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))?null:r}function _(t){let n=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,n);let r=e,i=r,a=[-.3,-.3,r,-.3,r,i,-.3,-.3,r,i,-.3,i];return t.bufferData(t.ARRAY_BUFFER,new Float32Array(a),t.STATIC_DRAW),{position:n,vertexCount:6}}var v=/swiftshader|llvmpipe|softpipe|basic render driver|software/i;function y(e){try{let t=e.getExtension("WEBGL_debug_renderer_info"),n=e.getParameter(t?t.UNMASKED_RENDERER_WEBGL:e.RENDERER);return typeof n=="string"&&v.test(n)}catch{return!1}}var b=null;function x(e,t,n,r,i={}){if(!e)return;let a=t=>{e.getAttachedShaders(t)?.forEach(t=>{e.deleteShader(t)}),e.deleteProgram(t)};try{r&&(e.deleteFramebuffer(r.framebuffer1),e.deleteFramebuffer(r.framebuffer2),e.deleteTexture(r.texture1),e.deleteTexture(r.texture2),e.deleteBuffer(r.quadBuffers.position),e.deleteBuffer(r.quadBuffers.texCoord),a(r.blurProgram.program)),n&&e.deleteBuffer(n.position),t&&a(t.program)}catch{}if(i.releaseContext)try{e.getExtension("WEBGL_lose_context")?.loseContext()}catch{}}function S(){if(b!==null)return b;if(typeof document>"u")return!1;let e=null;try{if(e=document.createElement("canvas").getContext("webgl",{depth:!1,stencil:!1}),e===null)return!1;b=!y(e)}catch{b=!1}finally{try{e?.getExtension("WEBGL_lose_context")?.loseContext()}catch{}}return b??!1}function C(e){let t=e.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!0,depth:!1,stencil:!1});if(!t||y(t))return{gl:null,programInfo:null,buffers:null,blurResources:null};t.enable(t.BLEND),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.disable(t.DEPTH_TEST),t.clearColor(0,0,0,0);let n=h(t,t.VERTEX_SHADER,a()),i=h(t,t.FRAGMENT_SHADER,o());if(!n||!i)return{gl:t,programInfo:null,buffers:null,blurResources:null};let s=g(t,n,i);if(!s)return{gl:t,programInfo:null,buffers:null,blurResources:null};let c={program:s,attribLocations:{vertexPosition:t.getAttribLocation(s,"aVertexPosition")},uniformLocations:{baseColor:t.getUniformLocation(s,"uBaseColor"),modelViewMatrix:t.getUniformLocation(s,"uModelViewMatrix"),opacityFactor:t.getUniformLocation(s,"uOpacityFactor"),ovalRatio:t.getUniformLocation(s,"uOvalRatio")}},f=_(t),p=null,m=d(t),v=u(t),b=Math.max(1,Math.round(e.width*r)),x=Math.max(1,Math.round(e.height*r)),S=l(t,b,x),C=l(t,b,x);return m&&S.framebuffer&&S.texture&&C.framebuffer&&C.texture&&(p={blurProgram:m,framebuffer1:S.framebuffer,texture1:S.texture,framebuffer2:C.framebuffer,texture2:C.texture,width:b,height:x,quadBuffers:v}),{gl:t,programInfo:c,buffers:f,blurResources:p}}function w(e,r,a,o,s,c,l,u){let d=(l?.circleBaseY??0)+(l?.yShiftClip??0),f=s/1e3;u?(e.bindFramebuffer(e.FRAMEBUFFER,u.framebuffer1),e.viewport(0,0,u.width,u.height)):e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.bindBuffer(e.ARRAY_BUFFER,a.position),e.vertexAttribPointer(r.attribLocations.vertexPosition,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(r.attribLocations.vertexPosition),e.useProgram(r.program),e.uniform4f(r.uniformLocations.baseColor,o[0],o[1],o[2],o[3]),e.uniform1f(r.uniformLocations.opacityFactor,1),l?.horizontalModeEnabled?e.uniform1f(r.uniformLocations.ovalRatio,1/t):e.uniform1f(r.uniformLocations.ovalRatio,1);for(let i=0;i<7;i++){let o;o=l?.horizontalModeEnabled?-.6/2+i*.6/6:-1+i*2/6;let s=.25+i*.15,u=.2+i*.12,p=i*Math.PI*.8,m=i*Math.PI*1.1,h=.04+i*.005,g=.07+i*.006,_=Math.sin(f*s+p)*h+Math.sin(f*.13+i*1.3)*.015,v=Math.cos(f*u+m)*g+Math.cos(f*.11+i*2.7)*.02,y=1,b=1,x=1,S=1;l?.horizontalModeEnabled;let C=0;if(c[i]!==void 0){let e=Math.min(c[i]/1,1);y=n+e*.7999999999999999*.2,b=n+e*.7999999999999999*1.5,x=.05+e**1*.75,C=e*.1,S=l?.horizontalModeEnabled?1/t:1}let w=l?.verticalScale??1,T=(d+v+C)*w+(1-w);e.uniform1f(r.uniformLocations.opacityFactor,x),e.uniform1f(r.uniformLocations.ovalRatio,S);let E=[y,0,0,0,0,b*w,0,0,0,0,1,0,o+_,T,0,1];e.uniformMatrix4fv(r.uniformLocations.modelViewMatrix,!1,E),e.drawArrays(e.TRIANGLES,0,a.vertexCount)}if(u){let{blurProgram:t,framebuffer1:n,texture1:r,framebuffer2:a,texture2:o,width:s,height:c,quadBuffers:l}=u,d=i;e.useProgram(t.program),e.disable(e.BLEND),e.bindBuffer(e.ARRAY_BUFFER,l.position),e.vertexAttribPointer(t.attribLocations.vertexPosition,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(t.attribLocations.vertexPosition),e.bindBuffer(e.ARRAY_BUFFER,l.texCoord),e.vertexAttribPointer(t.attribLocations.texCoord,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(t.attribLocations.texCoord),e.uniform2f(t.uniformLocations.resolution,s,c),e.uniform1f(t.uniformLocations.time,f),e.uniform1i(t.uniformLocations.texture,0);let p=r,m=a;for(let i=0;i<d.length;i++){let u=i===d.length-1;u&&(m=null),e.bindFramebuffer(e.FRAMEBUFFER,m),u?e.viewport(0,0,e.canvas.width,e.canvas.height):e.viewport(0,0,s,c),e.clear(e.COLOR_BUFFER_BIT),e.bindTexture(e.TEXTURE_2D,p),e.uniform1f(t.uniformLocations.offset,d[i]),e.uniform1f(t.uniformLocations.isLastPass,+!!u),e.drawArrays(e.TRIANGLES,0,l.vertexCount),u||(m===a?(p=o,m=n):(p=r,m=a))}e.enable(e.BLEND)}}export{S as a,C as c,y as i,w as n,p as o,m as r,f as s,x as t};