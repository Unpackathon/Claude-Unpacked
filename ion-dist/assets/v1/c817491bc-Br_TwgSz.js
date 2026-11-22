import{n as e}from"./preload-helper-sR4dxpO6.js";import{a as t,i as n,o as r,s as i}from"./c1ffc4e61-CXE2qYuM.js";import{a,c as o,i as s,l as c,n as l,o as u,r as d,s as f,t as p,u as m}from"./c21b72c0b-tJLe3YfH.js";var h=[100,180],g=h[0];function _(e,t=.28,n=.14){let r=n*e,i=2.08*e,a=e=>i/(Math.PI+4*e)*(1-2*Math.cos(e)),o=0,s=Math.PI/2;for(let e=0;e<60;e++){let e=(o+s)/2;a(e)<-.5?o=e:s=e}let c=Math.max(t*e,r+1),l={T:e,screen:r,bend:i,turnBackMax:o,bondedAt:-i/2,hingeTop:c,hingeDepth:.645*e-c,hingeHalfWidth:.73*e,...c>=.2*e?{layer:{half:.38*e,bottom:c}}:{}};if(l.layer===void 0)return l;let u=x(l,0),d=(u[12]??0)+(u[0]??0)*l.bondedAt;return d-0>-l.hingeTop?{...l,lip:{from:.494*e,top:d-0},layer:{...l.layer,bottom:0-d}}:l}var v=new Map;function y(e,t){let n=v.get(e);if(n===void 0){let r=t();n={values:r,sum:r.reduce((e,t)=>e+t,0)},v.size>=16&&v.clear(),v.set(e,n)}return n}function b(t,n,r=24){let i=(180-Math.min(180,Math.max(0,n)))*Math.PI/180;if(Number.isNaN(i))throw e(Error("The hinge's angle is not a number"),"The hinge's angle is not a number","literal");if(i<1e-9){let e=[];for(let n=0;n<=r;n++)e.push([0,-(t.bend/2)*(n/r)]);return{points:e,end:[0,-t.bend/2],along:[0,-1],normal:[1,0]}}let a=g*Math.PI/180,o=i<=a?0:t.turnBackMax*((i-a)/(Math.PI-a)),s=t.bend/2,c=o>0?s*o/(i/2+2*o):0,l=s-c,u=i*180/Math.PI,d=Math.min(1,Math.max(0,(u-h[0])/(h[1]-h[0]))),f=e=>(1-d)/(1+(e/(.226*t.T))**2.2)+d,p=Math.max(1,Math.round(r*l/s)),m=c>0?Math.max(1,r-p):0,_=Math.max(1,Math.ceil(48/p)),v=p*_,b=l/v,x=y(`${t.T}|${l}|${v}|${d}`,()=>Array.from({length:v},(e,t)=>f((t+.5)*b))),S=(i/2+o)/(x.sum*b),C=[[0,0]],w=0,T=0,E=0,D=(e,t)=>{let n=E+e*t;Math.abs(e)<1e-12?(w+=Math.sin(E)*t,T-=Math.cos(E)*t):(w+=(Math.cos(E)-Math.cos(n))/e,T-=(Math.sin(n)-Math.sin(E))/e),E=n};x.values.forEach((e,t)=>{D(S*e,b),(t+1)%_===0&&C.push([w,T])});for(let e=0;e<m;e++)D(-o/c,c/m),C.push([w,T]);return{points:C,end:[w,T],along:[Math.sin(E),-Math.cos(E)],normal:[Math.cos(E),Math.sin(E)]}}function x(e,t){let{end:n,along:r,normal:i}=b(e,t),a=n[0],o=n[1],s=new Float32Array(16);return s.set([r[0],0,r[1],0,0,1,0,0,i[0],0,i[1],0,a,0,o,1]),s}var S=[[.17795,-1],[.13471,-.99467],[.09407,-.97899],[.05845,-.9539],[.02999,-.92091],[.01192,-.88609],[.00193,-.84816],[0,-.73392],[.04941,-.72475],[.1357,-.73989],[.20342,-.74644],[.27825,-.74697],[.35135,-.74054],[.4226,-.72735],[.49219,-.70738],[.55869,-.68102],[.61959,-.64971],[.68091,-.60818],[.70398,-.58281],[.71898,-.55915],[.73645,-.50995],[.74052,-.42413],[.75444,-.38705],[.77099,-.36977],[.82013,-.33525],[.86206,-.29707],[.89354,-.26056],[.94717,-.18672],[.97202,-.16819],[1,-.15593],[1,-1]];function C(e,t,n,r,i,a=.28){let o=_(i/2.08,a),s=Math.max(-1,Math.min(1,t[0]*r[0]+t[1]*r[1])),c=b(o,Math.acos(s)*180/Math.PI,400).points.map(([e,t])=>[-t,e]),l=[...c.slice(1).map(([e,t])=>[-e,t]).reverse(),...c],u=[0];for(let e=1;e<l.length;e++){let[t,n]=l[e-1]??[0,0],[r,i]=l[e]??[0,0];u.push((u[e-1]??0)+Math.hypot(r-t,i-n))}let d=u.at(-1)||1,f=e=>{let t=1;for(;t<l.length-1&&(u[t]??0)<e;)t++;let[n,r]=[u[t-1]??0,u[t]??0];return{p:l[t-1]??[0,0],q:l[t]??[0,0],t:r>n?(e-n)/(r-n):0}},p=e=>{let{p:t,q:n,t:r}=f(e);return[t[0]+r*(n[0]-t[0]),t[1]+r*(n[1]-t[1])]},[m,h]=[p(0),p(d)],g=[e[0]-m[0],e[1]-m[1]],v=[n[0]-h[0],n[1]-h[1]];return{m:o,whole:d,at:e=>{let[t,n]=p(e),r=e/d;return[t+(1-r)*g[0]+r*v[0],n+(1-r)*g[1]+r*v[1]]},normal:e=>{if(e<=0)return[-t[1],t[0]];if(e>=d)return[r[1],-r[0]];let{p:n,q:i}=f(e),a=Math.hypot(i[0]-n[0],i[1]-n[1])||1;return[-(i[1]-n[1])/a,(i[0]-n[0])/a]}}}var w=e=>Math.abs(e)<1e-12?0:e;function T(e,t,n,r,i,a=24){let o=C(e,t,n,r,i);return Array.from({length:a+1},(e,t)=>{let n=o.whole*t/a,[r,s]=o.at(n),[c,l]=o.normal(n);return{x:r,z:s,nx:w(c),nz:w(l),s:i*t/a}})}function E(e,t,n,r,i,a=24,o=.28){let s=C(e,t,n,r,i,o),c=s.m.layer;if(c===void 0)return[];let l=s.whole/2,u=(e,t,n)=>{let[r,a]=s.at(e),[o,c]=s.normal(e);return{x:r-t*o,z:a-t*c,nx:w(n[0]),nz:w(n[1]),s:i*e/s.whole}},d=e=>{let[t,n]=s.normal(e);return[n,-t]},f=l-c.half,p=l+c.half,[m,h]=[d(f),d(p)],g=Array.from({length:a+1},(e,t)=>{let n=f+(p-f)*t/a,[r,i]=s.normal(n);return u(n,c.bottom,[-r,-i])}),_=s.m.screen;return[u(f,_,[-m[0],-m[1]]),u(f,c.bottom,[-m[0],-m[1]]),...g,u(p,c.bottom,h),u(p,_,h)]}var D={upperLeft:24,upperRight:177,lowerRight:177,lowerLeft:24},O={x:1254,y:143,radius:55.5};function k(t){let n=i[t];if(n===void 0)throw e(Error("The frames file lacks one of the iPhone Duo's two screens"),"The frames file lacks one of the iPhone Duo's two screens","literal");return n}function A(){let e=n.foldable.scale,i=k("669x951"),a=k("466x678"),o=i.edges,s={left:o.bottom,right:o.top,top:o.left,bottom:o.right,width:951*e,height:669*e},c=s.width+s.left+s.right,l=s.height+s.top+s.bottom,u=c/2,{lip:d,bar:f}=t.spine,p=a.edges,m={width:466*e+p.left+p.right-d-f,height:678*e+p.top+p.bottom},h=u/m.width,g=l/m.height,_=.068*u,v=r.paneRise.open/Math.max(...r.buttons.map(({rise:e})=>e)),y=r.buttons.map(({wall:t,from:n,length:r,width:i,center:a,rise:o})=>({...t==="free"?{edge:"right",from:n*l,length:r*l}:{edge:"top",from:(1-n-r)*u,length:r*u},width:i*e,center:a*_,rise:o*v*e}));return{leafWidth:u,height:l,depth:_,outerRadius:165+(o.left+o.top)/2,coverHingeRadius:44,screenThickness:.14*_,notch:{depth:22},bevelInner:12,bevelOuter:a.ring.width,buttons:y,buttonBevel:r.bevel*e,inner:{x:s.left,y:s.top,width:s.width,height:s.height,radii:{upperLeft:165,upperRight:165,lowerRight:165,lowerLeft:165},ring:{...i.ring}},cover:{x:(p.left-d-f)*h,y:p.top*g,width:466*e*h,height:678*e*g,radii:{...D},ring:{...a.ring},camera:{x:(p.left-d-f+O.x)*h,y:(p.top+O.y)*g,radius:O.radius*h}}}}var[j,M,N,P]=[.631494,.372824,.16906,.074911],F=j+(j-M)*P/(N-P),I=F+(M-N)*(j-M-N+P)*P**2/(N-P)**3;function L(e,t,n,r,i){let a=[{at:[e+n,t],arriving:[1,0],leaving:[0,1],radius:i.upperRight},{at:[e+n,t+r],arriving:[0,1],leaving:[-1,0],radius:i.lowerRight},{at:[e,t+r],arriving:[-1,0],leaving:[0,-1],radius:i.lowerLeft},{at:[e,t],arriving:[0,-1],leaving:[1,0],radius:i.upperLeft}],o=[];for(let{at:[e,t],arriving:[i,s],leaving:[c,l],radius:u}of a){let a=Math.min(u,Math.min(n,r)/3.06),[d,f,p,m,h,g,_]=[1.528665,I,F,j,M,N,P].map(e=>e*a),v=(n,r)=>[e-i*n+c*r,t-s*n+l*r],y=[[v(d,0),v(f,0),v(p,0),v(m,_)],[v(m,_),v(h,g),v(g,h),v(_,m)],[v(_,m),v(0,p),v(0,f),v(0,d)]];o.push(v(d,0));for(let[e,t,n,r]of y)for(let i=1;i<=6;i++){let a=i/6,s=1-a,c=i=>s**3*e[i]+3*s*s*a*t[i]+3*s*a*a*n[i]+a**3*r[i];o.push([c(0),c(1)])}}return o}var R=class{constructor(e=()=>1,t=()=>0){this.data=[],this.depthOf=e,this.hollowOf=t}vertex(e,t,n=0,r=0){this.data.push(e[0]??0,e[1]??0,e[2]??0,t[0]??0,t[1]??0,t[2]??0,n,r)}quad(e,t,n,r){for(let[i,a]of[e,t,n,e,n,r])this.vertex(i,a,this.depthOf(i),this.hollowOf(i))}done(){return new Float32Array(this.data)}};function z(e){let{leafWidth:t,height:n}=e,r=e.cover.ring.width,i=e.coverHingeRadius;return L(r,r,t-2*r,n-2*r,{upperLeft:i,lowerLeft:i,upperRight:0,lowerRight:0}).slice(38).map(([e,t])=>[e,n/2-t])}function B(e){let{depth:t}=e,n=e=>e*(1-12/90),r=[];for(let t=0;t<=6;t++){let i=t/6*Math.PI/2,a=e.bevelInner;r.push({inset:a*(1-Math.sin(i)),z:-a*(1-Math.cos(i)),out:Math.sin(n(i)),nz:Math.cos(n(i)),inner:!0})}for(let i=6;i>=0;i--){let a=i/6*Math.PI/2,o=e.bevelOuter;r.push({inset:o*(1-Math.sin(a)),z:-t+o*(1-Math.cos(a)),out:Math.sin(n(a)),nz:-Math.cos(n(a)),inner:!1})}return r}function V(e,t,n){let{leafWidth:r,height:i,depth:a,outerRadius:o}=e,s=1*a,c=L(s,0,r-s,i,{upperLeft:0,lowerLeft:0,upperRight:o,lowerRight:o}),l=c.length,u=(e,t)=>e[(t%l+l)%l]??[0,0],d=c.map((e,t)=>{let[n,r]=u(c,t-1),[i,a]=u(c,t+1),o=Math.hypot(i-n,a-r)||1;return[(a-r)/o,-(i-n)/o]}),f=B(e),p=(e,n)=>{let[a,o]=u(c,e),[f,p]=u(d,e),m=(e%l+l)%l;if(n.inner&&m>=38){let e=o<i/2;return[[t*a,i/2-(e?o+n.inset:o-n.inset),n.z],[0,(e?1:-1)*n.out,n.nz]]}let h=Math.min(r-n.inset,Math.max(s+n.inset,a-f*n.inset)),g=Math.min(i-n.inset,Math.max(n.inset,o-p*n.inset));return[[t*h,i/2-g,n.z],[t*f*n.out,-p*n.out,n.nz]]},m=new R(e=>-(e[2]??0)/a);for(let e=0;e+1<f.length;e++){let t=f[e],n=f[e+1];if(t!==void 0&&n!==void 0)for(let e=0;e<l;e++)u(c,e)[0]<s+.01&&u(c,e+1)[0]<s+.01||m.quad(p(e,t),p(e+1,t),p(e+1,n),p(e,n))}let h=(e,n,i,a,o)=>{let s=new R;if(e===void 0)return s.done();let c=[];for(let t=0;t<38;t++)c.push(p(t,e)[0]);if(o===void 0)for(let n of i.ys)c.push([t*i.x,n,e.z]);else for(let[n,r]of o)c.push([t*n,r,e.z]);let l=[r/2*t,0,e.z],u=[0,0,n];for(let e=0;e<c.length;e++){let[t,n]=[c[e],c[(e+1)%c.length]];if(t!==void 0&&n!==void 0)for(let e of[l,t,n])s.vertex(e,u,...a(e[0]??0,e[1]??0))}return s.done()},g=t===1?"right":"left";return[{part:g,surface:"metal",vertices:m.done()},{part:g,surface:"inner",vertices:h(f[0],1,n.inner,(e,t)=>[(e+r)/(2*r),(i/2-t)/i])},{part:g,surface:t===1?"rear":"cover",vertices:h(f.at(-1),-1,n.outer,(e,n)=>[t===1?1-e/r:-e/r,(i/2-n)/i],t===1?void 0:z(e))}]}function H(e){let{leafWidth:t,height:n}=e,[r,i]=[new R,new R];for(let{edge:a,from:o,length:s,width:c,center:l,rise:u}of e.buttons){let d=(e,r,i)=>a==="top"?[o+e,n/2+i,r-l]:[t+i,n/2-o-e,r-l],f=(e,t,n)=>a==="top"?[e,n,t]:[n,-e,t],p=c/2,m=[];for(let[e,t]of[[s-p,-Math.PI/2],[p,Math.PI/2]])for(let n=0;n<=16;n++){let r=t+n/16*Math.PI;m.push([e+p*Math.cos(r),p*Math.sin(r),Math.cos(r),Math.sin(r)])}let h=Math.min(e.buttonBevel,u,p),g=[{o:-Math.max(e.bevelInner,e.bevelOuter),inset:0,out:1,up:0},...Array.from({length:4},(e,t)=>{let n=t/3*(Math.PI/2);return{o:u-h+h*Math.sin(n),inset:h-h*Math.cos(n),out:Math.cos(n),up:Math.sin(n)}})],_=(e,t)=>{let[n,r,i,a]=m[e%m.length]??[0,0,0,0];return[d(n-i*t.inset,r-a*t.inset,t.o),f(i*t.out,a*t.out,t.up)]};for(let e=0;e+1<g.length;e++){let[t,n]=[g[e],g[e+1]];if(t!==void 0&&n!==void 0)for(let e=0;e<m.length;e++)r.quad(_(e,t),_(e+1,t),_(e+1,n),_(e,n))}let v=g.at(-1);if(v!==void 0){let e=d(s/2,0,u),t=f(0,0,1);for(let n=0;n<m.length;n++)i.vertex(e,t,1),i.vertex(_(n,v)[0],t,1),i.vertex(_(n+1,v)[0],t,1)}}return[{part:"right",surface:"metal",vertices:r.done()},{part:"right",surface:"button",vertices:i.done()}]}function U(e){return _(e.depth,e.softHingeTop??.28,(e.screenThickness??.14*e.depth)/e.depth)}var W=.2,G=.085,K=.004;function q(e){return e.notch.depth}function J(e,t){return Math.min(...e.filter(([,e])=>e<-t+.5).map(([e])=>e))}function Y(e,t){let{depth:n,height:r}=e,i=B(e),a=r/2-q(e),o=r/2-e.notch.depth,s=e=>[...new Set(e.map(e=>Math.round(e*1e6)/1e6))].sort((e,t)=>e-t),c=r/2-(i[0]?.inset??0),l=r/2-(i.at(-1)?.inset??0),u=S.map(([e,t])=>[e*n,t*n]);return{inner:{x:-t.bondedAt,ys:s([-c,-a,-o,o,a,c])},outer:{x:J(u,n),ys:s([-l,-a,a,l])}}}function X(e,t,n){let{depth:r,height:i,leafWidth:a}=e,o=1*r,s=S.map(([e,t])=>[e*r,t*r]),c=i/2-q(e),l=-n.bondedAt,u=J(s,r),d=new R,f=new R,p=(e,t)=>[(e+a)/(2*a),(i/2-t)/i],m=(e,t,n,i,a=0)=>{let[o,s,c,l]=t;if(o!==void 0&&s!==void 0&&c!==void 0&&l!==void 0)for(let t of[o,s,c,o,c,l])e.vertex(t,n,...i?i(t[0]??0,t[1]??0):[-(t[2]??0)/r,a])},h=0;for(let e=0;e<s.length;e++){let[t,n]=s[e]??[0,0],[r,i]=s[(e+1)%s.length]??[0,0];h+=t*i-r*n}let g=h>0?1:-1;for(let e=0;e<s.length;e++){let[n,i]=s[e]??[0,0],[a,l]=s[(e+1)%s.length]??[0,0],u=Math.hypot(a-n,l-i)||1,f=g*(l-i)/u,p=-g*(a-n)/u,h=[[t*n,-c,i],[t*a,-c,l],[t*a,c,l],[t*n,c,i]],_=[t*f,0,p];i>-.5&&l>-.5&&p>.9||i<-r+.5&&l<-r+.5&&p<-.9||Math.abs(n-o)<.5&&Math.abs(a-o)<.5||m(d,h,_,void 0,Math.min(n,a)<.5&&Math.max(n,a)>.5&&Math.min(i,l)>-.8*r?K:0)}let _=B(e),v=_[0],y=_.at(-1),b=G*r,x=e=>{let t=e+r;return-e<b?b-Math.sqrt(Math.max(b*b-(b+e)**2,0)):t>=u?0:u-Math.sqrt(Math.max(u*u-(u-t)**2,0))},C=e=>{let n=e+r;return-e<b?[t*(x(e)-b)/b,0,(b+e)/b]:n>=u?[-t,0,0]:[t*(x(e)-u)/u,0,(n-u)/u]},w=e=>{let t=v?.inset??0,n=.4*r,i=t>0?Math.acos(Math.min(1,Math.max(0,1+e.z/t)))/(Math.PI/2):1,a=G*r,o=1/6;if(i<.16666666566666666)return{inset:t,z:-a*i/o,out:1,nz:0};let s=(i-o)/.8333333333333334,c=2*t*(1-s)/(n-a),l=Math.hypot(1,c);return{inset:t*(1-s)**2,z:-a-(n-a)*s,out:1/l,nz:c/l}};for(let e of[1,-1]){let n=e=>t*e,a=t=>e*(i/2-t),s=(t,i,a)=>{let o=x(i),[s,c]=[Math.max(15-Math.max(o,i>-r/2?a:0),0),Math.max(15-a,0)];return Array.from({length:7},(r,a)=>{let l=Math.PI/2*((a+1)/8);return[n(o+s-s*Math.sin(l)),t-e*c+e*c*Math.cos(l),i]})};if(v!==void 0){let t=a(v.inset),r=[[n(l),t,0],...s(t,0,v.inset),[n(x(0)),e*c,0]];for(let t=0;t+1<r.length;t++)m(f,[[n(l),e*c,0],r[t]??[0,0,0],r[t+1]??[0,0,0],r[t+1]??[0,0,0]],[0,0,1],p)}for(let t=0;t+1<_.length;t++){let[i,l]=[_[t],_[t+1]];if(i===void 0||l===void 0)continue;let u=e=>o+(e.inner?0:e.inset),f=t=>{let i=a(t.inset),o=[0,e*t.out,t.nz],l=t.inner?w(t):void 0,d=l?.z??t.z,f=l?.inset??t.inset,p=l===void 0?o:[0,e*l.out,l.nz],m=s(a(f),d,f);return[{p:[n(x(d)),e*c,d],n:C(d),lit:Math.max(-d/r,W)},...m.map((e,t)=>{let n=1-(t+1)/(m.length+1),i=C(d),a=[(i[0]??0)*(1-n),(p[1]??0)*n,(i[2]??0)*(1-n)+(p[2]??0)*n],o=Math.hypot(a[0]??0,a[1]??0,a[2]??0)||1;return{p:e,n:a.map(e=>e/o),lit:Math.max(-d/r,W)}}).reverse(),{p:[n(u(t)),i,t.z],n:o,lit:-t.z/r}]},[p,m]=[f(i),f(l)];for(let e=0;e+1<p.length;e++){let[t,n,r,i]=[p[e],p[e+1],m[e],m[e+1]];if(t!==void 0&&n!==void 0&&r!==void 0&&i!==void 0)for(let e of[t,n,i,t,i,r])d.vertex(e.p,e.n,e.lit,0)}}let h=[[o,-r],...Array.from({length:9},(e,t)=>{let n=-r+u*t/8;return[x(n),n]}),...Array.from({length:7},(e,t)=>{let n=-b+b*t/6;return[x(n),n]}),[o,0]];for(let t=0;t+1<h.length;t++){let[i,a]=[h[t]??[0,0],h[t+1]??[0,0]],s=(t,r)=>[n(t),e*c,r];m(d,[s(o/2,-r/2),s(i[0]??0,i[1]??0),s(a[0]??0,a[1]??0),s(a[0]??0,a[1]??0)],[0,-e,0])}m(d,[[n(o/2),e*c,-r/2],[n(o),e*c,0],[n(o),e*c,-r],[n(o),e*c,-r]],[0,-e,0])}if(t===-1&&y!==void 0){let n=z(e),a=i/2-y.inset,o=(e,n)=>[t*e,n,-r],s=e=>{let[t,r]=n[e]??[0,0];return o(t,r)},c=[0,0,-1],l=n.length/2;for(let[e,t,r]of[[0,l,-a],[l,n.length,a]])for(let n=e;n+1<t;n++)m(d,[o(u,r),s(n),s(n+1),s(n+1)],c);m(d,[o(u,-a),s(l-1),s(l),o(u,a)],c)}let T=t===1?"right":"left";return[{part:T,surface:"metal",vertices:d.done()},{part:T,surface:"inner",vertices:f.done()}]}function Z(e,t){let n=-t.hingeTop,r=n-t.hingeDepth,i=t.hingeHalfWidth,a=Math.min(.27*e.depth,t.hingeDepth,i/2),o=e.height/2-q(e)-.1,s=t.lip,c=s===void 0?n:s.top,l=s===void 0?0:Math.min(.1,(i-s.from)/2,c-n),u=c-l,d=s===void 0?i:i+1.1,f=[];if(s===void 0)f.push([n,-i],[n,i]);else{f.push([n,-s.from],[n,s.from],[c,s.from],[c,d-l]);for(let e=1;e<8;e++){let t=Math.PI/2*(e/8);f.push([u+l*Math.cos(t),d-l+l*Math.sin(t)])}f.push([u,d],[n,d],[n,i])}let p=f.length-1;if(s!==void 0){f.push([n,-i],[n,-d],[u,-d]);for(let e=7;e>0;e--){let t=Math.PI/2*(e/8);f.push([u+l*Math.cos(t),-d+l-l*Math.sin(t)])}f.push([c,-d+l],[c,-s.from])}let m=[];for(let e=0;e<f.length;e++){let[[t,n],[r,i]]=[f[e]??[0,0],f[(e+1)%f.length]??[0,0]];if(e!==p){let e=Math.hypot(r-t,i-n)||1,[a,o]=[(i-n)/e,-(r-t)/e];m.push([[t,n,a,o],[r,i,a,o]])}}let h=[[n,i,0,1]];for(let e of[1,-1])for(let t=0;t<=8;t++){let n=Math.PI/2*((e===1?t:8-t)/8),[o,s]=[-Math.sin(n),e*Math.cos(n)];h.push([r+a+a*o,e*(i-a)+a*s,o,s])}h.push([n,-i,0,-1]);for(let e=0;e+1<h.length;e++){let[t,n]=[h[e],h[e+1]];t!==void 0&&n!==void 0&&m.push([t,n])}let[g,_]=[i-a,o-a],v=([e,t,n,r],i,o)=>{let s=Math.abs(t)-g;if(s<=0)return[[e,o*_,t],[n,0,r]];let c=Math.sign(t);return[[e,o*(_+Math.min(s,a)*Math.sin(i)),c*(g+s*Math.cos(i))],[n,o*c*r*Math.sin(i),r*Math.cos(i)]]},y=new R,b=new R(()=>1,()=>K),S=[1,-1].map(()=>new R(()=>1,()=>K)),C=x(t,0),w=-Math.sign(C[10]??0),T=([e,t,n],r,i)=>{let[a,o]=[(e??0)-i*(C[12]??0),r*w*(n??0)-i*(C[14]??0)];return[r*w*(a*(C[0]??0)+o*(C[2]??0)),t??0,a*(C[8]??0)+o*(C[10]??0)]},E=Math.min(_,o-4*a),D=([e,t,n,r],i)=>[[e,i,t],[n,0,r]];for(let[e,t]of[[-_,-E],[-E,E],[E,_]])for(let[n,r]of m)y.quad(D(n,e),D(r,e),D(r,t),D(n,t));for(let e of[1,-1]){for(let t=0;t<20;t++){let[n,r]=[Math.PI/2*(t/20),Math.PI/2*((t+1)/20)];for(let[t,i]of m)b.quad(v(t,n,e),v(i,n,e),v(i,r,e),v(t,r,e));for(let t of[1,-1]){let i=T([-1,0,0],t,0),a=e=>[T(e,t,1),i],s=a([u,e*o,t*d]);S[t===w?0:1]?.quad(s,a(v([u,t*d,0,0],n,e)[0]),a(v([u,t*d,0,0],r,e)[0]),s)}}for(let[t,n]of m)if(t[1]>g&&n[1]>=g){let[[r,i],[a,o]]=[v(t,Math.PI/2,e),v(n,Math.PI/2,e)];b.quad([r,i],[a,o],[[a[0]??0,a[1]??0,-(a[2]??0)],o],[[r[0]??0,r[1]??0,-(r[2]??0)],i])}}let[O,k]=[y.done(),b.done()],A=new Float32Array(O.length+k.length);return A.set(O),A.set(k,O.length),[{part:"spine",surface:"spine",vertices:A},{part:"right",surface:"metal",vertices:S[0]?.done()??new Float32Array},{part:"left",surface:"metal",vertices:S[1]?.done()??new Float32Array}]}function ee(e,t){let n=U(e),r=e.height/2-q(e)-.1-3,i=x(n,t),[a,o]=[i[12]??0,i[14]??0],[s,c]=[i[0]??0,i[2]??0],l=E([o,a],[-c,-s],[-o,a],[c,-s],n.bend,24,e.softHingeTop??.28),u=new R,d=(e,t)=>{u.vertex([e.z,t,-e.x],[e.nz,0,-e.nx],1,0)};for(let e=0;e+1<l.length;e++){let[t,n]=[l[e],l[e+1]];t!==void 0&&n!==void 0&&(d(t,r),d(n,r),d(n,-r),d(t,r),d(n,-r),d(t,-r))}return u.done()}function te(e){let t=U(e),n=e=>{if(e.part!=="right"&&e.part!=="left")return e;let n=(e.part==="right"?1:-1)*t.bondedAt,r=e.vertices.slice();for(let e=0;e<r.length;e+=8)r[e]=(r[e]??0)+n;return{...e,vertices:r}},r=e=>["right","left"].flatMap(t=>{let n=e.filter(e=>e.part===t),r=e=>{let r=n.filter(t=>t.surface===e);if(r.length===0)return[];let i=new Float32Array(r.reduce((e,t)=>e+t.vertices.length,0)),a=0;for(let e of r)i.set(e.vertices,a),a+=e.vertices.length;return[{part:t,surface:e,vertices:i}]},i=["inner","rear","cover"];return[...i.flatMap(r),...n.filter(e=>!i.includes(e.surface))]}),i=Y(e,t),a=[...r([...V(e,1,i),...V(e,-1,i),...X(e,1,t),...X(e,-1,t),...H(e)].map(n)),...Z(e,t)],o=e=>e.surface==="inner"||e.surface==="cover"||e.surface==="rear";return[...a.filter(e=>!o(e)),...a.filter(o)]}function ne(e,t){let n=x(U(e),t);return 2*Math.abs(n[14]??0)}function re(e,t,n){let r=180-Math.min(180,Math.max(0,t)),[i,a]=[e.leafWidth,e.depth],o=Math.min(1,Math.max(-1,(r-2*n)/180)),s=n*Math.PI/180,c=(r-n)*Math.PI/180,l=(i/2*(Math.sin(s)+Math.sin(c))-a/2*(Math.cos(s)+Math.cos(c)))/2;return[-i/2*o,0,-l]}function ie(e){let t=(t,n)=>e[n*4+t]??0,n=[t(0,3),t(1,3),t(2,3)],r=[];for(let e=0;e<3;e++){let i=[t(0,e),t(1,e),t(2,e)];r.push([...i,-((i[0]??0)*(n[0]??0)+(i[1]??0)*(n[1]??0)+(i[2]??0)*(n[2]??0))])}return r.push([0,0,0,1]),p(r)}function ae(t,n){let r=[...typeof n.hingeDeg!="number"||Number.isNaN(n.hingeDeg)?["hingeDeg"]:[],...["leanDeg","yawDeg","pitchDeg","rollDeg"].filter(e=>!Number.isFinite(n[e])||!Number.isFinite(n[e]*Math.PI))];if(r.length>0)throw e(Error(`The pose's angles must be numbers small enough to turn into radians; these are not: ${r.join(", ")}`),["The pose's angles must be numbers small enough to turn into radians; these are not: ",""],"partial");let i=180-Math.min(180,Math.max(0,n.hingeDeg)),o=180-i,c=U(t),m=-c.bondedAt,h=l(x(c,o),s(-m,0,0)),g=ie(h),_=p([[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]]),v=l(g,_,h,_,u(180)),y=l(s(...re(t,n.hingeDeg,n.leanDeg)),u(-n.leanDeg)),b=[-t.leafWidth/2,0,-t.depth/2],S=d(l(y,v),b),C=d(l(y,u(i)),b),w=l(a(n.pitchDeg),u(n.yawDeg),f(n.rollDeg),s(((C[0]??0)-(S[0]??0))/2,0,((C[2]??0)-(S[2]??0))/2),y),T=l(w,v);return{right:l(w,s(m,0,0)),left:l(T,s(-m,0,0)),spine:l(w,g)}}var oe={floor:.42,span:.62},se={silver:{color:"#d4d0cb",polish:1,satin:.3},deepBlue:{color:"#3a4257",polish:1,satin:.3},deviceHub:{color:"#6b6b6b",polish:0}};function ce(e){let t=(t,n)=>e[n*4+t]??0,n=(e,n)=>{let[r,i]=[0,1,2].filter(t=>t!==e),[a,o]=[0,1,2].filter(e=>e!==n),s=t(r??0,a??0)*t(i??0,o??0)-t(r??0,o??0)*t(i??0,a??0);return(e+n)%2==0?s:-s},r=t(0,0)*n(0,0)+t(0,1)*n(0,1)+t(0,2)*n(0,2),i=new Float32Array(9);for(let e=0;e<3;e++)for(let a=0;a<3;a++)i[e*3+a]=Math.abs(r)<1e-9?t(a,e):n(a,e)/r;return i}var le=`
precision highp float;
uniform sampler2D bezel;
uniform vec2 bezelKept; // CutBezel's kept; 0.5 where nothing was cut
uniform sampler2D pictureNow;
uniform sampler2D pictureLast;
uniform sampler2D marks;
uniform mat3 mapNow; // face coordinates to the picture's
uniform mat3 mapLast;
uniform mat3 mapMarks;
uniform vec3 fade; // the new picture's share, its dimming, the last picture's dimming
// The body's metal's own polish, for the screens: the uniform polish is set anew for each metal part, so a screen would read the last part's.
// At 0, a mock-up's finish, the black border round a screen is flat black.
uniform float gloss;
uniform float reflection;
uniform float edgeOn;
uniform float spun; // 1 while the two pictures turn on the screen
uniform float softest; // how far out of focus a fade's two pictures are half way, in unfocused()'s levels
uniform float screenLong; // the screen's longer side, in the frame's pixels
// How the new picture arrives: 0 a fade, 1 "fold", 2 "leave", 3 "shut", 4 "opens"; and how far through, 0 to 1.
// For "opens": the Duo's deviceOpeningLook's lit in that place, then its dark and its halvings.
uniform vec4 arrive;
uniform int kind; // 0 a face with a screen, 1 the back (glass in the body's color), 2 metal, 3 the shadow's shape
uniform vec3 tint;
uniform float polish;
uniform float satin;
uniform float fillLight;
uniform vec2 matteLight;
uniform float lowerEnd;
uniform vec3 windowUp; // the window's up in the world, and whether its light is the metal's
uniform float shutness; // 1 with the leaves lying on each other, 0 from about 40 degrees open
uniform float tall; // the body's height, in the frame's pixels
uniform vec3 eye;
uniform vec4 crease; // u of the hinge on this face, the shade's width in u, its strength, the band's width in u (0: none)
uniform vec3 foldNormal; // which way the inner screen faces on the hinge's line: midway between its halves
in vec2 vUv;
in vec3 vNormal;
in vec3 vPos;
out vec4 color;


// A floor, a sky, a big soft light above left, a strip light at the right, the wall behind the camera and a pale wall at the
// left: without that one a side turned to the left mirrored only the room's gray, and the hinge's bar read as a dark tray.
float studio(vec3 r, float soft) {
  float room = mix(0.50, 0.62, smoothstep(-0.7, 0.7, r.y));
  float key = smoothstep(0.70 - soft, 0.94 + soft * 0.2, dot(r, normalize(vec3(-0.50, 0.62, 0.60))));
  float strip = smoothstep(0.90 - soft, 0.985 + soft * 0.1, dot(r, normalize(vec3(0.90, 0.05, 0.43))));
  float wall = smoothstep(0.55, 1.0, r.z);
  return room + 1.15 * key + 0.8 * strip + 0.40 * wall + 0.5 * smoothstep(0.15, 0.9, -r.x);
}
// The lit floor, brightest in front of the device: what a side tilted down toward the viewer mirrors. Kept out of studio(),
// which glass mirrors too: over a dark screen it would be a veil.
float sweep(vec3 r) {
  return 1.3 * smoothstep(0.2, 0.9, -r.y) * smoothstep(-1.0, 0.3, r.z);
}

vec3 metal(vec3 tint, vec3 n, vec3 v, float polish, float satin, float fill, vec2 matteLight) {
  vec3 r = reflect(-v, n);
  float rim = pow(1.0 - clamp(dot(n, v), 0.0, 1.0), 5.0);
  vec3 matte = tint * (matteLight.x + matteLight.y * clamp(dot(n, normalize(vec3(-0.40, 0.55, 0.73))), 0.0, 1.0));
  vec3 mirror = tint * (studio(r, 0.10) + sweep(r)) + vec3(0.25) * rim;
  // With the lights spread wide, a narrow side carries one broad highlight and not several thin ones.
  vec3 brushed = tint * (0.24 + 0.56 * (studio(r, 0.45) + sweep(r))) + vec3(0.10) * rim;
  vec3 c = mix(matte, mix(mirror, brushed, satin), polish) + tint * fill * clamp(dot(n, v), 0.0, 1.0);
  // Highlights roll off above 0.6 and never reach white, so a flat side that mirrors a light keeps its shape.
  return mix(c, 0.6 + 0.32 * (1.0 - exp(-(c - 0.6) / 0.32)), step(0.6, c));
}

vec3 sheen(vec3 n, vec3 v) {
  return vec3(studio(reflect(-v, n), 0.05)) * (0.022 + 0.5 * pow(1.0 - clamp(dot(n, v), 0.0, 1.0), 4.0));
}

float windowLight(vec3 n, vec3 v, vec2 up) {
  float ahead = clamp(dot(n, v), 0.0, 1.0);
  float aside = sqrt(1.0 - ahead * ahead);
  vec2 d = vec2(dot(n.xy, vec2(up.y, -up.x)), dot(n.xy, up));
  return 1.0
    + aside * (0.19 * max(d.y, 0.0) - 0.17 * max(-d.y, 0.0) + 0.05 * max(-d.x, 0.0) - 0.13 * max(d.x, 0.0))
    - 0.08 * aside * aside * ahead * ahead
    - 0.13 * max(d.x, 0.0) * ahead;
}

// The GPU's own pick of a smaller copy leaves small print soft, so a picture is taken from half a level finer.
const float CRISP = -0.5;

// A picture out of focus: level 0 is sharp, and each level up doubles the blur. Taken from the picture's smaller
// copies, with neighbors weighed in to smooth their blocks.
// 1 inside a picture, 0 outside, and between the two over one pixel of the drawing, so that a slanting edge has no stairs.
float within(vec2 at) {
  vec2 pixel = fwidth(at);
  vec2 inside = clamp(at / pixel + 0.5, 0.0, 1.0) * clamp((1.0 - at) / pixel + 0.5, 0.0, 1.0);
  return inside.x * inside.y;
}

vec3 unfocused(sampler2D picture, vec2 at, float level) {
  // Before any branch: texture() with a bias, and dFdx and dFdy, need the neighboring pixels' coordinates.
  vec3 sharp = texture(picture, at, CRISP).rgb;
  vec2 size = vec2(textureSize(picture, 0));
  vec2 dx = dFdx(at * size);
  vec2 dy = dFdy(at * size);
  // The copy the sharp picture is taken from. A blur finer than that is none, and one just over it is mixed in, so that a
  // blur that ends meets the sharp picture without a step.
  float rest = max(0.0, 0.5 * log2(max(1e-12, max(dot(dx, dx), dot(dy, dy)))) + CRISP);
  // Levels are counted for a picture of the screen's full size; a smaller picture starts part of the way up.
  level = level <= 0.0 ? 0.0 : max(0.0, level + log2(max(size.x, size.y) / screenLong));
  if (level <= rest) {
    return sharp;
  }
  // Closer than a whole step of that copy, or at a low level a thin stroke shows once per tap.
  vec2 px = 0.8 * exp2(level) / size;
  vec3 sum = 4.0 * textureLod(picture, at, level).rgb;
  for (int k = 0; k < 4; k++) {
    vec2 d = vec2(k < 2 ? 1.0 : 0.0, k < 2 ? 0.0 : 1.0) * (k % 2 == 0 ? 1.0 : -1.0);
    vec2 e = vec2(k < 2 ? 1.0 : -1.0, k % 2 == 0 ? 1.0 : -1.0);
    sum += 2.0 * textureLod(picture, at + d * px, level).rgb;
    sum += textureLod(picture, at + e * px, level).rgb;
    sum += 0.5 * textureLod(picture, at + 2.0 * d * px, level).rgb;
  }
  return mix(sharp, sum / 18.0, min(1.0, level - rest));
}

void main() {
  if (kind == 3) {
    color = vec4(1.0);
    return;
  }
  vec3 n = normalize(vNormal);
#ifndef AS_WINDOW
  if (kind == 0 && crease.w > 0.0) {
    // The inner screen bends round the hinge, it does not crack: its light changes over a band, not on a line.
    float off = (vUv.x - crease.x) / crease.w;
    n = normalize(mix(n, foldNormal, exp(-off * off)));
  }
#endif
  vec3 v = normalize(eye - vPos);
  float facing = clamp(dot(n, v), 0.0, 1.0);
  // The studio's big light hangs above and near, so less of it reaches the body's lower end. Without this a long flat side, which
  // mirrors one direction from end to end, is one even tone, like a strip of paper.
  float fromAbove = mix(lowerEnd, 1.0, smoothstep(-0.55, 0.55, vPos.y / tall));
  if (kind == 2) {
    // Metal whose second texture coordinate is above 0 is not drawn where it is seen from behind. Whoever marks it so
    // promises that something else is always drawn behind it; left in, the polygon offset can draw it through a face in
    // front of it at a grazing angle. The same coordinate also darkens it, below (DeviceShape's meshes).
    if (vUv.y > 0.0 && dot(vNormal, v) < 0.0) {
      discard;
    }
    // Where the two leaves lie on each other, little light reaches their inner edges: one dark seam.
    float seam = 1.0 - 0.6 * shutness * exp(-vUv.x * vUv.x / (0.16 * 0.16));
    // A hollow, such as the groove beside the hinge's bar, keeps out the share of the light its second texture coordinate
    // gives.
    vec3 lit = tint * windowLight(n, v, windowUp.xy);
#ifndef AS_WINDOW
    lit = mix(metal(tint, n, v, polish, satin, fillLight, matteLight) * fromAbove, lit, windowUp.z);
#endif
    color = vec4(lit * seam * (1.0 - vUv.y), 1.0);
    return;
  }
  if (kind == 1) {
    // The back glass is the body's outside, never rightly seen from behind. Where the metal beside it is at a grazing
    // angle, the metal's polygon offset can let the glass win from behind, as a white speck or a dotted white line.
    if (dot(vNormal, v) < 0.0) {
      discard;
    }
    // Frosted glass in the body's color (tint), a touch grayer and lighter than the metal, so it reads as the back and not
    // as another screen.
    vec3 glass = mix(mix(tint, vec3(dot(tint, vec3(0.299, 0.587, 0.114))), 0.2), vec3(1.0), 0.55);
    color = vec4(glass * mix(0.82, 1.0, facing) * fromAbove + sheen(n, v), 1.0);
    return;
  }
  // In the cut-out middle inBezel is the same from pixel to pixel, so the smaller copy is picked by vUv's own rate of change.
  vec2 inBezel = min(vUv, bezelKept) + max(vUv - 1.0 + bezelKept, 0.0);
  vec4 b = textureGrad(bezel, inBezel / (2.0 * bezelKept), dFdx(vUv) / (2.0 * bezelKept), dFdy(vUv) / (2.0 * bezelKept));
  vec3 c = b.rgb;
  if (kind == 0) {
    vec3 inPicture = vec3(vUv, 1.0);
    vec2 at = (mapNow * inPicture).xy;
    vec3 now = texture(pictureNow, at, CRISP).rgb * (1.0 - fade.y);
    vec3 lit = now;
#ifndef ONE_PICTURE
    vec2 atLast = (mapLast * inPicture).xy;
    float t = arrive.y;
    if (arrive.x > 3.5) {
      // "opens", the inner screen as the phone opens: its turning half is darker toward its free edge, and out of focus. How
      // much of each is the caller's to say. far is 0 well past the hinge and 1 at that edge. The blur's width grows evenly from
      // nothing at 3% of the screen's width past the hinge.
      float far = clamp((0.62 - vUv.x) / 0.62, 0.0, 1.0);
      float level = min(7.2, log2(max(1.0, 656.0 * (0.53 - vUv.x)))) - arrive.w;
      lit = unfocused(pictureNow, at, level) * (1.0 - fade.y);
      lit *= max(0.0, 1.0 - arrive.z * (0.58 * pow(far, 1.15) + 0.45 * far * far * far));
      lit *= t;
    } else if (arrive.x > 2.5) {
      // "shut", the inner screen as the phone shuts, over the swing: the opening's look, coming in place of going. The last
      // picture's turning half blurs and darkens to black at its free edge, as a real Duo's own recording has it, and
      // gives way to this one as the leaves close on it.
      float far = clamp((0.62 - vUv.x) / 0.62, 0.0, 1.0);
      float come = smoothstep(0.0, 0.45, t);
      float level = min(7.2, log2(max(1.0, 656.0 * (0.53 - vUv.x)))) - 7.6 * (1.0 - come);
      vec3 last = unfocused(pictureLast, atLast, level) * (1.0 - fade.z);
      last *= max(0.0, 1.0 - come * (0.58 * pow(far, 1.15) + 0.45 * far * far * far));
      lit = mix(last, now, smoothstep(0.7, 1.0, t));
    } else if (arrive.x > 1.5) {
      // "leave", the cover as the phone opens: the last picture blurs, darkens from its free edge, and gives way.
      vec3 last = unfocused(pictureLast, atLast, 5.0 * smoothstep(0.0, 0.4, t)) * (1.0 - fade.z);
      lit = mix(last * (1.0 - 0.5 * vUv.x * smoothstep(0.0, 0.3, t)), now, smoothstep(0.25, 0.95, t));
    } else if (arrive.x > 0.5) {
      // "fold", the cover as the phone shuts, of 1150 ms: black to DEVICE_COVER_BLACK_MS (iOS's own recording keeps it black to
      // 242); then it comes up and into focus from the hinge outward, coarse detail first, all sharp by 985. The times
      // below are iOS's, counted from its 242.
      float since = (t * 1150.0 - ${200 .toFixed(1)}) * ${(908/950).toFixed(3)};
      float far = clamp(vUv.x, 0.0, 1.0);
      float outer = smoothstep(0.0, 0.35, far);
      float left = 1.0 - smoothstep(260.0 * outer, mix(560.0, 750.0, outer), since);
      lit = unfocused(pictureNow, at, (4.8 + 1.6 * far) * left) * (1.0 - fade.y);
      lit *= smoothstep(0.0, 70.0, since) * (1.0 - (0.30 + 0.55 * far * far + 0.3 * pow(far, 6.0)) * exp(-since / 190.0) * (1.0 - smoothstep(0.8, 1.0, t)));
    } else if (fade.x < 1.0 && spun > 0.5) {
      // The phone is turned: as Apple's simulator turns the icons of the Duo's Home Screen, each picture turns rigid and sharp,
      // and the screen is black where it leaves the corners bare. The new picture takes over half way, at a stroke: the two lie
      // at one angle then, and a frame that mixed them showed every word twice.
      vec3 last = unfocused(pictureLast, atLast, 0.0) * (1.0 - fade.z) * within(atLast);
      lit = mix(last, unfocused(pictureNow, at, 0.0) * (1.0 - fade.y) * within(at), step(0.5, fade.x));
    } else if (fade.x < 1.0) {
      float soft = softest * sin(3.14159265 * fade.x);
      vec3 last = unfocused(pictureLast, atLast, soft) * (1.0 - fade.z);
      // In a soft fade the new picture takes over only in the middle, where both are most out of focus: mixed in step with the
      // fade, both could be read near its ends, one over the other.
      float share = softest > 0.0 ? smoothstep(0.3, 0.7, fade.x) : fade.x;
      lit = mix(last, unfocused(pictureNow, at, soft) * (1.0 - fade.y), share);
    }
    vec4 tip = texture(marks, (mapMarks * inPicture).xy);
    lit = lit * (1.0 - tip.a) + tip.rgb;
#endif
#ifdef AS_WINDOW
    c += lit * (1.0 - b.a);
#else
    // A screen seen from the side is a little dimmer. No more than that: it gives its own light, and with the phone part open a
    // deeper shade left the half that is seen more from the side looking unlit beside the other.
    lit *= mix(edgeOn, 1.0, smoothstep(0.0, 0.6, facing));
    float off = (vUv.x - crease.x) / crease.y;
    float fold = 1.0 - crease.z * exp(-off * off);
    c += lit * fold * (1.0 - b.a);
#endif
  }
#ifdef AS_WINDOW
  color = vec4(c, 1.0);
#else
  // The glass's reflection is laid over what the face shows: added to it, it lifted a pale picture's grays into its whites. The panel gives back
  // more of the studio's light than the black border, which on a body with no polish gives back none; a hairline marks where they meet.
  float glossy = 1.0 - b.a * (1.0 - gloss);
  float across = smoothstep(-0.75, 0.75, dot(vUv - 0.5, vec2(-0.7, -1.0)));
  float soft = (0.014 + 0.125 * across * across) * mix(1.0, 0.45, b.a) * glossy + 0.05 * b.a * (1.0 - b.a);
  // Only where the face is dark: over a lit picture it would be a veil.
  float dark = 1.0 - max(c.r, max(c.g, c.b));
  color = vec4(c + sheen(n, v) * (1.0 - c) * glossy * reflection + vec3(soft * facing * dark * dark * reflection), 1.0);
#endif
  // A screen from behind: where it bends it can be seen so between a folding device's halves, and no screen shines there.
  // Chosen last: a return on a test that differs from pixel to pixel would leave the textures' derivatives above undefined.
  if (dot(vNormal, v) < 0.0) {
    color = vec4(vec3(0.03), 1.0);
  }
}`;function Q(e,t,n,r,i=0){let a=e/n.width,o=-n.x/n.width,s=t/n.height,c=-n.y/n.height;if(i!==0){let e=(r+i)*Math.PI/2,[t,l]=[Math.cos(e),Math.sin(e)],[u,d]=r%2==0?[n.width,n.height]:[n.height,n.width],[f,p]=[a*n.width,(o-.5)*n.width],[m,h]=[s*n.height,(c-.5)*n.height];return new Float32Array([f*t/u,f*l/d,0,-m*l/u,m*t/d,0,(p*t-h*l)/u+.5,(p*l+h*t)/d+.5,1])}switch((r%4+4)%4){case 1:return new Float32Array([0,a,0,-s,0,0,1-c,o,1]);case 2:return new Float32Array([-a,0,0,0,-s,0,1-o,1-c,1]);case 3:return new Float32Array([0,-a,0,s,0,0,c,1-o,1]);default:return new Float32Array([a,0,0,0,s,0,o,c,1])}}var ue=(e,t)=>((t-e+2)%4+4)%4-2;function de(t,n,r={}){for(let{surface:t}of n.meshes)if(n.surfaces[t]===void 0)throw e(Error(`No finish is given for the surface "${t}"`),['No finish is given for the surface "','"'],"partial");let i=r.bezelScale??.5;if(!(i>=.05&&i<=2))throw e(Error(`The bezels' scale must be from 0.05 to 2, not ${String(i)}`),["The bezels' scale must be from 0.05 to 2, not ",""],"partial");let a=Object.entries(n.surfaces).flatMap(([e,t])=>"screen"in t?[{surface:e,screen:t.screen,bezel:t.screen.bezel(i)}]:[]),s=c(t,`#version 300 es
layout(location = 0) in vec3 pos;
layout(location = 1) in vec3 normal;
layout(location = 2) in vec2 uv;
uniform mat4 model;
uniform mat3 normalModel;
uniform mat4 camera;
out vec2 vUv;
out vec3 vNormal;
out vec3 vPos;
void main() {
  vec4 p = model * vec4(pos, 1.0);
  vPos = p.xyz;
  vNormal = normalModel * normal;
  vUv = uv;
  gl_Position = camera * p;
}`,["#version 300 es",...r.onePicture===!0?["#define ONE_PICTURE"]:[],...r.asWindow===!0?["#define AS_WINDOW"]:[],le].join(`
`)),l=new Map,u=e=>(l.has(e)||l.set(e,t.getUniformLocation(s,e)),l.get(e)??null),d=[],f=[],p=[],h=()=>{for(let e of p)t.deleteTexture(e);for(let e of f)t.deleteVertexArray(e);for(let e of d)t.deleteBuffer(e);t.deleteProgram(s)},g=n.meshes.map(e=>{let n=t.createVertexArray();f.push(n),t.bindVertexArray(n);let r=t.createBuffer();d.push(r),t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,e.vertices,e.name===void 0?t.STATIC_DRAW:t.DYNAMIC_DRAW);for(let[e,n,r]of[[0,3,0],[1,3,12],[2,2,24]])t.enableVertexAttribArray(e),t.vertexAttribPointer(e,n,t.FLOAT,!1,32,r);return{part:e.part,surface:e.surface,name:e.name,made:e.vertices,holds:e.vertices,vao:n,buffer:r,count:e.vertices.length/8}});t.bindVertexArray(null);let{texture:_,upload:v,onePixel:y}=o(t),b=e=>(p.push(e),e),x=new Map(a.map(({surface:e,screen:t,bezel:n})=>{let r=b(_(!0)),i="kept"in n?n:{picture:n,kept:[.5,.5]};try{v(r,i.picture,{premultiply:!0,mipmaps:!0})}catch(e){throw h(),e}return[e,{screen:t,held:r,kept:i.kept}]})),S=b(y(58,58,63,255)),C=b(y(0,0,0,0));return{draw:r=>{let{parts:i,fold:a}=r;for(let[t,n]of Object.entries(r.reshaped??{})){let r=g.find(e=>e.name===t);if(r===void 0)throw e(Error(`No mesh is named "${t}"`),['No mesh is named "','"'],"partial");if(n.length!==r.count*8)throw e(Error(`The mesh "${t}" was made with ${String(r.count)} vertices and is given ${String(n.length/8)}`),['The mesh "','" was made with '," vertices and is given ",""],"partial")}let o=m(r.metal.color);t.useProgram(s),t.uniformMatrix4fv(u("camera"),!1,r.camera),t.uniform3f(u("eye"),...r.eye),t.uniform1f(u("fillLight"),r.fillLight??0);let{floor:c,span:l}=r.metal.matte??oe;t.uniform2f(u("matteLight"),c,l),t.uniform1f(u("lowerEnd"),r.metal.lowerEnd??.78),t.uniform3f(u("windowUp"),...r.windowUp??[0,1],r.windowUp===void 0?0:1),t.uniform1i(u("bezel"),0),t.uniform1i(u("pictureNow"),1),t.uniform1i(u("pictureLast"),2),t.uniform1i(u("marks"),3),t.uniform1f(u("polish"),r.metal.polish),t.uniform1f(u("gloss"),r.metal.polish),t.uniform1f(u("satin"),r.metal.satin??0),t.uniform1f(u("reflection"),r.reflection??1),t.uniform1f(u("edgeOn"),r.edgeOn??.86),t.uniform1f(u("shutness"),a?.shutness??0),t.uniform1f(u("tall"),n.height),t.uniform3f(u("foldNormal"),...a?.normal??[0,0,1]);for(let e of g){let s=i[e.part],c=n.surfaces[e.surface];if(s===void 0||c===void 0)continue;let l=(e.name===void 0?void 0:r.reshaped?.[e.name])??e.made;l!==e.holds&&(t.bindBuffer(t.ARRAY_BUFFER,e.buffer),t.bufferSubData(t.ARRAY_BUFFER,0,l),e.holds=l),t.uniformMatrix4fv(u("model"),!1,s),t.uniformMatrix3fv(u("normalModel"),!1,ce(s));let d=e.surface;if(r.shapeOnly===!0)t.uniform1i(u("kind"),3);else if("metal"in c){t.uniform1i(u("kind"),2);let{satin:e,polish:n}=c.metal,i=Math.min(c.metal.shade??1,1/Math.max(...o));t.uniform3f(u("tint"),o[0]*i,o[1]*i,o[2]*i),t.uniform1f(u("satin"),e??r.metal.satin??0),t.uniform1f(u("polish"),(n??1)*r.metal.polish)}else{if(t.uniform1i(u("kind"),+("glass"in c)),"glass"in c)t.uniform3f(u("tint"),...o);else{let{width:e,height:n,box:i,spins:a,softest:o}=c.screen;t.activeTexture(t.TEXTURE0);let s=x.get(d);t.bindTexture(t.TEXTURE_2D,s?.held??null),t.uniform2f(u("bezelKept"),...s?.kept??[.5,.5]);let l=r.faces[d],f=(t=0,r=0)=>Q(e,n,i,t,r),p=l?.arrive===void 0?l?.fade??1:1,m=p<1&&a!==!1&&l?.last!==void 0?ue(l.last.quarterTurns??0,l.quarterTurns??0):0;t.uniform1f(u("spun"),m===0?0:1),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,l?.picture??S),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,l?.last?.picture??S),t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,l?.marks??C),t.uniformMatrix3fv(u("mapNow"),!1,f(l?.quarterTurns,m*(p-1))),t.uniformMatrix3fv(u("mapMarks"),!1,f()),t.uniformMatrix3fv(u("mapLast"),!1,f(l?.last?.quarterTurns,m*p)),t.uniform1f(u("softest"),l?.soft===!0?o??3:0),t.uniform3f(u("fade"),l?.fade??1,l?.dim??0,l?.last?.dim??0),t.uniform4f(u("arrive"),...l?.arrive??[0,1,0,0]),t.uniform1f(u("screenLong"),Math.max(i.width,i.height))}t.uniform4f(u("crease"),...a?.crease(d)??[.5,1,0,0])}"metal"in c?(t.enable(t.POLYGON_OFFSET_FILL),t.polygonOffset(1,8)):t.disable(t.POLYGON_OFFSET_FILL),t.bindVertexArray(e.vao),t.drawArrays(t.TRIANGLES,0,e.count)}t.disable(t.POLYGON_OFFSET_FILL),t.bindVertexArray(null)},dispose:h}}export{H as a,ne as c,A as d,T as f,R as i,ee as l,Q as n,L as o,se as r,te as s,de as t,ae as u};