"use strict";(self.webpackChunkwasm_vs_js_mandelbrot=self.webpackChunkwasm_vs_js_mandelbrot||[]).push([[138],{749:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.r(t),n.d(t,{__wbg_call_cb65541d95d71282:()=>a.Od,__wbg_document_f7ace2b956f30a4f:()=>a.Ve,__wbg_getContext_7c5944ea807bf5d3:()=>a.FR,__wbg_getElementById_cc0e0d931b0d9a28:()=>a.eM,__wbg_globalThis_1d39714405582d3c:()=>a.E$,__wbg_global_651f05c6a0944d1c:()=>a.c7,__wbg_height_0d36fbbeb60b0661:()=>a.AE,__wbg_instanceof_CanvasRenderingContext2d_bc0a6635c96eca9b:()=>a.V7,__wbg_instanceof_HtmlCanvasElement_da5f9efa0688cf6d:()=>a.WL,__wbg_instanceof_Window_9029196b662bc42a:()=>a.pr,__wbg_log_c801d84ad6d2e8a7:()=>a.NM,__wbg_newnoargs_581967eacc0e2604:()=>a.$3,__wbg_newwithu8clampedarrayandsh_e2b3fce567acd708:()=>a.QH,__wbg_now_0cfdc90c97d0c24b:()=>a.Z$,__wbg_performance_2c295061c8b01e0b:()=>a.xD,__wbg_putImageData_f157d52a70a206d5:()=>a.Gx,__wbg_self_1ff1d729e9aae938:()=>a.ey,__wbg_set_wasm:()=>a.oT,__wbg_width_2931aaedd21f1fff:()=>a.e_,__wbg_window_5f4faef6c12b79ec:()=>a.Qz,__wbindgen_debug_string:()=>a.fY,__wbindgen_is_undefined:()=>a.XP,__wbindgen_object_clone_ref:()=>a.m_,__wbindgen_object_drop_ref:()=>a.ug,__wbindgen_throw:()=>a.Or,draw_mandelbrot_set_rs:()=>a.Yf,generate_mandelbrot_set_rs:()=>a.Mf,init_func_rs:()=>a.SK});var o=n(604),a=n(791),c=e([o]);o=(c.then?(await c)():c)[0],(0,a.oT)(o),r()}catch(e){r(e)}}))},791:(e,t,n)=>{let r;function o(e){r=e}n.d(t,{$3:()=>F,AE:()=>O,E$:()=>Q,FR:()=>k,Gx:()=>S,Mf:()=>v,NM:()=>B,Od:()=>Z,Or:()=>V,QH:()=>R,Qz:()=>P,SK:()=>h,V7:()=>j,Ve:()=>T,WL:()=>$,XP:()=>U,Yf:()=>E,Z$:()=>L,c7:()=>J,eM:()=>D,e_:()=>A,ey:()=>H,fY:()=>K,m_:()=>G,oT:()=>o,pr:()=>z,ug:()=>C,xD:()=>M}),e=n.hmd(e);const a=new Array(128).fill(void 0);function c(e){return a[e]}a.push(void 0,null,!0,!1);let i=a.length;function l(e){i===a.length&&a.push(a.length+1);const t=i;return i=a[t],a[t]=e,t}function _(e){const t=typeof e;if("number"==t||"boolean"==t||null==e)return`${e}`;if("string"==t)return`"${e}"`;if("symbol"==t){const t=e.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==t){const t=e.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(e)){const t=e.length;let n="[";t>0&&(n+=_(e[0]));for(let r=1;r<t;r++)n+=", "+_(e[r]);return n+="]",n}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(!(n.length>1))return toString.call(e);if(r=n[1],"Object"==r)try{return"Object("+JSON.stringify(e)+")"}catch(e){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:r}let u=0,d=null;function s(){return null!==d&&0!==d.byteLength||(d=new Uint8Array(r.memory.buffer)),d}let f=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const m="function"==typeof f.encodeInto?function(e,t){return f.encodeInto(e,t)}:function(e,t){const n=f.encode(e);return t.set(n),{read:e.length,written:n.length}};function b(e,t,n){if(void 0===n){const n=f.encode(e),r=t(n.length,1)>>>0;return s().subarray(r,r+n.length).set(n),u=n.length,r}let r=e.length,o=t(r,1)>>>0;const a=s();let c=0;for(;c<r;c++){const t=e.charCodeAt(c);if(t>127)break;a[o+c]=t}if(c!==r){0!==c&&(e=e.slice(c)),o=n(o,r,r=c+3*e.length,1)>>>0;const t=s().subarray(o+c,o+r);c+=m(e,t).written}return u=c,o}let g=null;function p(){return null!==g&&0!==g.byteLength||(g=new Int32Array(r.memory.buffer)),g}let y=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});function w(e,t){return e>>>=0,y.decode(s().subarray(e,e+t))}function h(){r.init_func_rs()}function v(e,t,n,o,a,c,i,l){try{const y=r.__wbindgen_add_to_stack_pointer(-16),w=b(l,r.__wbindgen_malloc,r.__wbindgen_realloc),h=u;r.generate_mandelbrot_set_rs(y,e,t,n,o,a,c,i,w,h);var _=p()[y/4+0],d=p()[y/4+1],f=(m=_,g=d,m>>>=0,s().subarray(m/1,m/1+g)).slice();return r.__wbindgen_free(_,1*d),f}finally{r.__wbindgen_add_to_stack_pointer(16)}var m,g}function E(){r.draw_mandelbrot_set_rs()}function x(e){return null==e}function N(e,t){try{return e.apply(this,t)}catch(e){r.__wbindgen_exn_store(l(e))}}y.decode();let I=null;function C(e){!function(e){const t=c(e);(function(e){e<132||(a[e]=i,i=e)})(e)}(e)}function B(e,t){console.log(w(e,t))}function z(e){let t;try{t=c(e)instanceof Window}catch{t=!1}return t}function T(e){const t=c(e).document;return x(t)?0:l(t)}function M(e){const t=c(e).performance;return x(t)?0:l(t)}function D(e,t,n){const r=c(e).getElementById(w(t,n));return x(r)?0:l(r)}function j(e){let t;try{t=c(e)instanceof CanvasRenderingContext2D}catch{t=!1}return t}function S(){return N((function(e,t,n,r){c(e).putImageData(c(t),n,r)}),arguments)}function $(e){let t;try{t=c(e)instanceof HTMLCanvasElement}catch{t=!1}return t}function A(e){return c(e).width}function O(e){return c(e).height}function k(){return N((function(e,t,n){const r=c(e).getContext(w(t,n));return x(r)?0:l(r)}),arguments)}function L(e){return c(e).now()}function R(){return N((function(e,t,n,o){return l(new ImageData((a=e,c=t,a>>>=0,(null!==I&&0!==I.byteLength||(I=new Uint8ClampedArray(r.memory.buffer)),I).subarray(a/1,a/1+c)),n>>>0,o>>>0));var a,c}),arguments)}function F(e,t){return l(new Function(w(e,t)))}function Z(){return N((function(e,t){return l(c(e).call(c(t)))}),arguments)}function H(){return N((function(){return l(self.self)}),arguments)}function P(){return N((function(){return l(window.window)}),arguments)}function Q(){return N((function(){return l(globalThis.globalThis)}),arguments)}function J(){return N((function(){return l(n.g.global)}),arguments)}function U(e){return void 0===c(e)}function G(e){return l(c(e))}function K(e,t){const n=b(_(c(t)),r.__wbindgen_malloc,r.__wbindgen_realloc),o=u;p()[e/4+1]=o,p()[e/4+0]=n}function V(e,t){throw new Error(w(e,t))}},800:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,".container{display:flex}.box{flex:1;padding:10px;border:1px solid #000}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(c[l]=!0)}for(var _=0;_<e.length;_++){var u=[].concat(e[_]);r&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},620:(e,t,n)=>{var r=n(379),o=n.n(r),a=n(795),c=n.n(a),i=n(569),l=n.n(i),_=n(565),u=n.n(_),d=n(216),s=n.n(d),f=n(589),m=n.n(f),b=n(800),g={};g.styleTagTransform=m(),g.setAttributes=u(),g.insert=l().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=s(),o()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var l=e[i],_=r.base?l[0]+r.base:l[0],u=a[_]||0,d="".concat(_," ").concat(u);a[_]=u+1;var s=n(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==s)t[s].references++,t[s].updater(f);else{var m=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:d,updater:m,references:1})}c.push(d)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var l=r(e,o),_=0;_<a.length;_++){var u=n(a[_]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},138:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.r(t),n.d(t,{click_render_button:()=>g}),n(620);var o=n(749),a=n(442),c=n(524),i=n(164),l=e([o]);o=(l.then?(await l)():l)[0],console.log("start loading wasm");const _=Promise.resolve().then(n.bind(n,749)).catch(console.error),u=Promise.resolve().then(n.bind(n,442)).catch(console.error);function d(e,t,n,r){let o=new ImageData(new Uint8ClampedArray(r),t,n);e.putImageData(o,0,0)}let s=0,f=0;Promise.all([_,u]).then((async function(){console.log("finished loading wasm"),(0,o.init_func_rs)(),m(),b(),g()}));const m=()=>{document.getElementById(i.oR).addEventListener("click",g)},b=()=>{document.getElementById(i.ff).addEventListener("click",(()=>{c.KN(),g()}))},g=()=>{const e=c.bu(),t=c.Nr(),n=c.F6(),r=c.t4(),l=c.QJ(),_=c.r7();let u=null;{let a=document.getElementById(i.cq),f=a.getContext("2d");const m=a.width,b=a.height,g=Date.now();u=(0,o.generate_mandelbrot_set_rs)(m,b,_,t,n,r,l,e);const p=Date.now()-g;s+=p,d(f,m,b,u),c.Cx(p,s)}let m=null;{let o=document.getElementById(i.Bc),u=o.getContext("2d");const s=o.width,b=o.height,g=Date.now();m=(0,a.generateMandelbrotSet)(s,b,_,t,n,r,l,e);const p=Date.now()-g;f+=p,d(u,s,b,m),c.Ud(p,f)}{let e=!0;for(let t=0;t<u.length;t++)if(u[t]!==m[t]){console.log(t,u[t],m[t]),e=!1;break}console.log(`\n(hybridResult === jsResult):${e}`)}};r()}catch(p){r(p)}}))},164:(e,t,n)=>{n.d(t,{Bc:()=>c,EO:()=>u,Gt:()=>_,Jr:()=>s,K4:()=>b,N9:()=>f,N_:()=>d,ZX:()=>m,cq:()=>a,ff:()=>o,hN:()=>l,lN:()=>i,oR:()=>r,xB:()=>g});const r="id-render",o="id-random_render",a="id-canvas_hybrid",c="id-canvas_js",i="id-mandelbrot_c_real",l="id-mandelbrot_c_image",_="id-mandelbrot_n_limit",u="id-mandelbrot_lim_sup",d="id-mandelbrot_zoom",s="id-mandelbrot_type",f="id-generate_time_rs",m="id-sum_generate_time_rs",b="id-generate_time_js",g="id-sum_generate_time_js"},524:(e,t,n)=>{n.d(t,{Cx:()=>u,F6:()=>a,KN:()=>m,Nr:()=>o,QJ:()=>i,Ud:()=>d,bu:()=>_,r7:()=>l,t4:()=>c});var r=n(164);const o=()=>{const e=document.getElementById(r.lN),t=Number(e.value);return NaN===t?0:t},a=()=>{const e=document.getElementById(r.hN),t=Number(e.value);return NaN===t?0:t},c=()=>{const e=document.getElementById(r.Gt),t=Number(e.value);return NaN===t?1:t},i=()=>{const e=document.getElementById(r.EO),t=Number(e.value);return NaN===t?0:t},l=()=>{const e=document.getElementById(r.N_),t=Number(e.value);return NaN===t?0:t},_=()=>document.getElementById(r.Jr).value,u=(e,t)=>{document.getElementById(r.N9).textContent=e,document.getElementById(r.ZX).textContent=t},d=(e,t)=>{document.getElementById(r.K4).textContent=e,document.getElementById(r.xB).textContent=t},s=[{type:"mandelbrot_type1",c_real:"0.1120068359375",c_image:"0.638021240234375",zoom:"0.000322265625",n_limit:"500",lim_sup:"2"},{type:"mandelbrot_type1",c_real:"-0.746684956561724",c_image:"-0.148407254991549",zoom:"0.000304831581",n_limit:"500",lim_sup:"2"},{type:"mandelbrot_type1",c_real:"0.235162322816695",c_image:"-0.522569730223854",zoom:"0.000274348423",n_limit:"500",lim_sup:"2"},{type:"mandelbrot_type1",c_real:"0.431444931030272",c_image:"-0.210285568237303",zoom:"0.00000381469726",n_limit:"500",lim_sup:"2"},{type:"mandelbrot_type1",c_real:"-0.0123701408058467",c_image:"-0.654285235802281",zoom:"0.00000376335285",n_limit:"500",lim_sup:"2"},{type:"mandelbrot_type1",c_real:"-0.928145631790161",c_image:"-0.241136137008666",zoom:"0.000000514984131",n_limit:"500",lim_sup:"2"},{type:"mandelbrot_type1",c_real:"0.399156056834167",c_image:"-0.130409942025553",zoom:"0.000000338701755",n_limit:"500",lim_sup:"2"},{type:"mandelbrot_type1",c_real:"0.373888457566499",c_image:"-0.596176167950033",zoom:"0.0000000074505806",n_limit:"500",lim_sup:"2"},{type:"mandelbrot_type1",c_real:"-1.35814260283019",c_image:"-0.0390835766633972",zoom:"0.000000000139698386",n_limit:"500",lim_sup:"2"},{type:"mandelbrot_type1",c_real:"-0.87591",c_image:"0.20464",zoom:"0.1",n_limit:"500",lim_sup:"2"},{type:"mandelbrot_type1",c_real:"-0.759856",c_image:"0.125547",zoom:"0.1",n_limit:"500",lim_sup:"2"},{type:"mandelbrot_type1",c_real:"-0.743030",c_image:"0.126433",zoom:"0.00005",n_limit:"500",lim_sup:"2"},{type:"mandelbrot_type1",c_real:"-0.7435669",c_image:"0.1314023",zoom:"0.00123",n_limit:"500",lim_sup:"2"},{type:"mandelbrot_type1",c_real:"-0.743645",c_image:"0.13182733",zoom:"0.000025",n_limit:"500",lim_sup:"2"},{type:"mandelbrot_type1",c_real:"-0.7436447860",c_image:"0.1318252536",zoom:"0.0000025",n_limit:"500",lim_sup:"2"},{type:"mandelbrot_type1",c_real:"-0.743645",c_image:"0.1318252536",zoom:"0.00000025",n_limit:"500",lim_sup:"2"},{type:"mandelbrot_type1",c_real:"-1.5",c_image:"0",zoom:"0.001",n_limit:"500",lim_sup:"2"},{type:"mandelbrot_type2",c_real:"0.39",c_image:"0.0005",zoom:"0.00005",n_limit:"500",lim_sup:"2"}];let f=-1;const m=()=>{let e=0;for(;;)if(t=s.length,e=Math.floor(1e3*Math.random())%t,e!==f){f=e;break}var t,n;n=s[e].type,document.getElementById(r.Jr).value=n,(e=>{document.getElementById(r.lN).value=e})(s[e].c_real),(e=>{document.getElementById(r.hN).value=e})(s[e].c_image),(e=>{document.getElementById(r.N_).value=e})(s[e].zoom),(e=>{document.getElementById(r.Gt).value=e})(s[e].n_limit),(e=>{document.getElementById(r.EO).value=e})(s[e].lim_sup)}},442:(e,t,n)=>{n.r(t),n.d(t,{generateMandelbrotSet:()=>a,logic:()=>r});const r={getNDiverged:function(e,t,n,r){let o=0,a=0;for(let c=1;c<n;c++){let n=2*o*a+t;if(o=o*o-a*a+e,a=n,o*o+a*a>r*r)return c}return n},generateMandelbrotSet:function(e,t,n,r,o,a,c){let i=-n,l=n,_=-n,u=n,d=[];for(let n=0;n<t;n++){let s=i+(l-i)*n/t;for(let t=0;t<e;t++){let n=_+(u-_)*t/e,i=this.getNDiverged(n+r,s+o,a,c),l=255-i%255,f=i%16*17,m=i%8*32;d.push(l),d.push(f),d.push(m),d.push(255)}}return d}},o={mandelbrot_type1:function(e,t,n,r){let o=0,a=0;for(let c=1;c<n;c++){let n=2*o*a+t;if(o=o*o-a*a+e,a=n,o*o+a*a>r*r)return c}return n},mandelbrot_type2:function(e,t,n,r){let o=0,a=0;for(let c=1;c<n;c++){let n=a*(3*o*o-a*a)+t;if(o=o*(o*o-3*a*a)+e,a=n,o*o+a*a>r*r)return c}return n},mandelbrot_type3:function(e,t,n,r){let o=0,a=0;for(let c=1;c<n;c++){let n=4*o*a*(o*o-a*a)+t;if(o=o*o*o*o-6*o*o*a*a+a*a*a*a+e,a=n,o*o+a*a>r*r)return c}return n},mandelbrot_type4:function(e,t,n,r){let o=0,a=0;for(let c=1;c<n;c++){let n=a*(5*o*o*o*o-10*o*o*a*a+a*a*a*a)+t;if(o=o*(o*o*o*o-10*o*o*a*a+5*a*a*a*a)+e,a=n,o*o+a*a>r*r)return c}return n},mandelbrot_type5:function(e,t,n,r){let o=0,a=0;for(let c=1;c<n;c++){let n=-2*o*a+t;if(o=o*o-a*a+e,a=n,o*o+a*a>r*r)return c}return n},mandelbrot_type6:function(e,t,n,r){let o=0,a=0;for(let c=1;c<n;c++){let n=a*(a*a-3*o*o)+t;if(o=o*(o*o-3*a*a)+e,a=n,o*o+a*a>r*r)return c}return n},mandelbrot_type7:function(e,t,n,r){let o=0,a=0;for(let c=1;c<n;c++){let n=4*o*a*(a*a-o*o)+t;if(o=o*o*o*o-6*o*o*a*a+a*a*a*a+e,a=n,o*o+a*a>r*r)return c}return n},mandelbrot_type8:function(e,t,n,r){let o=0,a=0;for(let c=1;c<n;c++){let n=-a*(5*o*o*o*o-10*o*o*a*a+a*a*a*a)+t;if(o=o*(o*o*o*o-10*o*o*a*a+5*a*a*a*a)+e,a=n,o*o+a*a>r*r)return c}return n},mandelbrot_type9:function(e,t,n,r){let o=0,a=0;for(let c=1;c<n;c++){let n=10*o*o*o*o*o*o*o*o*o*a-120*o*o*o*o*o*o*o*a*a*a+252*o*o*o*o*o*a*a*a*a*a-120*o*o*o*a*a*a*a*a*a*a+10*o*a*a*a*a*a*a*a*a*a+t;if(o=o*o*o*o*o*o*o*o*o*o-45*o*o*o*o*o*o*o*o*a*a+210*o*o*o*o*o*o*a*a*a*a-210*o*o*o*o*a*a*a*a*a*a+45*o*o*a*a*a*a*a*a*a*a-a*a*a*a*a*a*a*a*a*a+e,a=n,o*o+a*a>r*r)return c}return n},mandelbrot_type10:function(e,t,n,r){let o=0,a=0;for(let c=1;c<n;c++){let n=-10*o*o*o*o*o*o*o*o*o*a+120*o*o*o*o*o*o*o*a*a*a-252*o*o*o*o*o*a*a*a*a*a+120*o*o*o*a*a*a*a*a*a*a-10*o*a*a*a*a*a*a*a*a*a+t;if(o=o*o*o*o*o*o*o*o*o*o-45*o*o*o*o*o*o*o*o*a*a+210*o*o*o*o*o*o*a*a*a*a-210*o*o*o*o*a*a*a*a*a*a+45*o*o*a*a*a*a*a*a*a*a-a*a*a*a*a*a*a*a*a*a+e,a=n,o*o+a*a>r*r)return c}return n}};function a(e,t,n,r,a,c,i,l){let _=-n,u=n,d=-n,s=n,f=[];for(let n=0;n<t;n++){let m=_+(u-_)*n/t;for(let t=0;t<e;t++){let n=d+(s-d)*t/e,_=o[l](n+r,m+a,c,i),u=255-_%255,b=_%16*17,g=_%8*32;f.push(u),f.push(b),f.push(g),f.push(255)}}return f}},604:(e,t,n)=>{var r=n(791);e.exports=n.v(t,e.id,"8c733268aca6ab05582c",{"./mandelbrot_bg.js":{__wbindgen_object_drop_ref:r.ug,__wbg_log_c801d84ad6d2e8a7:r.NM,__wbg_instanceof_Window_9029196b662bc42a:r.pr,__wbg_document_f7ace2b956f30a4f:r.Ve,__wbg_performance_2c295061c8b01e0b:r.xD,__wbg_getElementById_cc0e0d931b0d9a28:r.eM,__wbg_instanceof_CanvasRenderingContext2d_bc0a6635c96eca9b:r.V7,__wbg_putImageData_f157d52a70a206d5:r.Gx,__wbg_instanceof_HtmlCanvasElement_da5f9efa0688cf6d:r.WL,__wbg_width_2931aaedd21f1fff:r.e_,__wbg_height_0d36fbbeb60b0661:r.AE,__wbg_getContext_7c5944ea807bf5d3:r.FR,__wbg_now_0cfdc90c97d0c24b:r.Z$,__wbg_newwithu8clampedarrayandsh_e2b3fce567acd708:r.QH,__wbg_newnoargs_581967eacc0e2604:r.$3,__wbg_call_cb65541d95d71282:r.Od,__wbg_self_1ff1d729e9aae938:r.ey,__wbg_window_5f4faef6c12b79ec:r.Qz,__wbg_globalThis_1d39714405582d3c:r.E$,__wbg_global_651f05c6a0944d1c:r.c7,__wbindgen_is_undefined:r.XP,__wbindgen_object_clone_ref:r.m_,__wbindgen_debug_string:r.fY,__wbindgen_throw:r.Or}})}}]);