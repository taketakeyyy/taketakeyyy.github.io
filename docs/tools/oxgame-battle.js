(()=>{"use strict";var e,t,n,r,o,a={450:(e,t,n)=>{n.a(e,(async r=>{n.d(t,{Fe:()=>x,RZ:()=>_,r1:()=>w,t$:()=>E,Or:()=>j});var o=n(449);e=n.hmd(e);var a=r([o]);o=(a.then?await a:a)[0];const i=new Array(32).fill(void 0);function s(e){return i[e]}i.push(void 0,null,!0,!1);let c=0,l=null;function u(){return null!==l&&l.buffer===o.memory.buffer||(l=new Uint8Array(o.memory.buffer)),l}let d=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const f="function"==typeof d.encodeInto?function(e,t){return d.encodeInto(e,t)}:function(e,t){const n=d.encode(e);return t.set(n),{read:e.length,written:n.length}};let p=null;function m(){return null!==p&&p.buffer===o.memory.buffer||(p=new Int32Array(o.memory.buffer)),p}let y=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});function h(e,t){return y.decode(u().subarray(e,e+t))}y.decode();let g=i.length;function b(e){const t=s(e);return function(e){e<36||(i[e]=g,g=e)}(e),t}function x(){return b(o.make_initialized_grid())}let v=32;function _(e,t){try{return b(o.run_ai_strategy(function(e){if(1==v)throw new Error("out of js stack");return i[--v]=e,v}(e),t))}finally{i[v++]=void 0}}function w(e,t){const n=s(t);var r=function(e,t,n){if(void 0===n){const n=d.encode(e),r=t(n.length);return u().subarray(r,r+n.length).set(n),c=n.length,r}let r=e.length,o=t(r);const a=u();let i=0;for(;i<r;i++){const t=e.charCodeAt(i);if(t>127)break;a[o+i]=t}if(i!==r){0!==i&&(e=e.slice(i)),o=n(o,r,r=i+3*e.length);const t=u().subarray(o+i,o+r);i+=f(e,t).written}return c=i,o}(JSON.stringify(void 0===n?null:n),o.__wbindgen_malloc,o.__wbindgen_realloc),a=c;m()[e/4+1]=a,m()[e/4+0]=r}function E(e,t){return function(e){g===i.length&&i.push(i.length+1);const t=g;return g=i[t],i[t]=e,t}(JSON.parse(h(e,t)))}function j(e,t){throw new Error(h(e,t))}}))},214:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,".footer{position:relative;display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;flex-direction:row;justify-content:center;border-collapse:collapse;border-top:1px solid #abc4b7;padding:10px}.footer__about-area{width:100%;display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;flex-direction:row;justify-content:center;align-items:stretch}.footer__item{display:flex;justify-content:center;width:auto;margin:10px}\n",""]);const s=i},35:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"body{padding:3px}.bi-record{font-size:64px;color:#3d3f3e}.bi-x{font-size:64px;color:#3d3f3e}.btn-start{margin:2px}.title-content{display:flex;justify-content:center}.setting-content{display:flex;justify-content:center}.setting-content__radios{display:block}.setting-content__btn-start{display:flex;justify-content:center}.setting-content__btn-start__sub{display:block}.game-text-content{display:flex;justify-content:center}.main-content{display:flex;justify-content:center}.oxgame-content{width:300px;height:300px}.oxgame-content__row{width:300px;height:100px;display:flex}.oxgame-content__square{display:flex;align-items:center;justify-content:center;width:100px;height:100px;border-collapse:collapse;border:4px solid #3d3f3e}\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},641:(e,t,n)=>{var r=n(379),o=n.n(r),a=n(795),i=n.n(a),s=n(569),c=n.n(s),l=n(565),u=n.n(l),d=n(216),f=n.n(d),p=n(589),m=n.n(p),y=n(214),h={};h.styleTagTransform=m(),h.setAttributes=u(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=f(),o()(y.Z,h),y.Z&&y.Z.locals&&y.Z.locals},82:(e,t,n)=>{var r=n(379),o=n.n(r),a=n(795),i=n.n(a),s=n(569),c=n.n(s),l=n(565),u=n.n(l),d=n(216),f=n.n(d),p=n(589),m=n.n(p),y=n(35),h={};h.styleTagTransform=m(),h.setAttributes=u(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=f(),o()(y.Z,h),y.Z&&y.Z.locals&&y.Z.locals},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var u=n(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},127:(e,t,n)=>{n.a(e,(async e=>{n(82),n(641);var t=n(450),r=e([t]);let o;t=(r.then?await r:r)[0];const a=async e=>{for(let t=0;t<3;t++)if(e[t][0].masu==e[t][1].masu&&e[t][1].masu==e[t][2].masu){if(0==e[t][0].masu)return 0;if(1==e[t][0].masu)return 1}for(let t=0;t<3;t++)if(e[0][t].masu==e[1][t].masu&&e[1][t].masu==e[2][t].masu){if(0==e[0][t].masu)return 0;if(1==e[0][t].masu)return 1}if(e[0][0].masu==e[1][1].masu&&e[1][1].masu==e[2][2].masu){if(0==e[0][0].masu)return 0;if(1==e[0][0].masu)return 1}if(e[0][2].masu==e[1][1].masu&&e[1][1].masu==e[2][0].masu){if(0==e[0][2].masu)return 0;if(1==e[0][2].masu)return 1}let t=!0;for(let n=0;n<3;n++)for(let r=0;r<3;r++)-1==e[r][n].masu&&(t=!1);return t?2:-1},i=async e=>{for(let e=0;e<9;e++){let t=document.getElementById("id_square"+e);t.removeEventListener("click",i),t.style.cursor="default"}const t=e.target,n=Number(t.id.substring(t.id.length-1,t.id.length)),r=Math.floor(n/3),c=n%3;o[r][c].masu=0;const l=document.createElement("i");l.className="bi bi-record",t.appendChild(l);const u=await a(o);0==u?document.getElementById("id_game-text").textContent="あなたの勝ちです😄":1==u?document.getElementById("id_game-text").textContent="あなたの負けです😞":2==u?document.getElementById("id_game-text").textContent="引き分けです😐":await s()},s=async()=>{const e=t.RZ(o,1);o[e.h][e.w].masu=1;const n=3*e.h+e.w,r=document.getElementById("id_square"+n),i=document.createElement("i");i.className="bi bi-x",r.appendChild(i);const s=await a(o);0==s?document.getElementById("id_game-text").textContent="あなたの勝ちです😄":1==s?document.getElementById("id_game-text").textContent="あなたの負けです😞":2==s?document.getElementById("id_game-text").textContent="引き分けです😐":await c()},c=async()=>{for(let e=0;e<3;e++)for(let t=0;t<3;t++)if(-1==o[e][t].masu){const n=3*e+t,r=document.getElementById("id_square"+n);r.addEventListener("click",i),r.style.cursor="pointer"}},l=async()=>{await(async()=>{o=t.Fe();for(let e=0;e<9;e++){const t=document.getElementById("id_square"+e);for(;t.firstChild;)t.removeChild(t.firstChild);t.style.cursor="default",t.removeEventListener("click",i)}document.getElementById("id_game-text").textContent=""})(),document.getElementById("id_radio-first-attack").checked?await c():await s()};(async()=>{(async()=>{document.getElementById("id_btn-start").addEventListener("click",l)})()})()}))},449:(e,t,n)=>{var r=([r])=>n.v(t,e.id,"e92b7978ca11096319f2",{"./oxgame_bg.js":{__wbindgen_json_serialize:r.r1,__wbindgen_json_parse:r.t$,__wbindgen_throw:r.Or}});n.a(e,(e=>{var t=e([n(450)]);return t.then?t.then(r):r(t)}),1)}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,loaded:!1,exports:{}};return a[e](n,n.exports,s),n.loaded=!0,n.exports}e="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n=e=>{e&&(e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},r=e=>!--e.r&&e(),o=(e,t)=>e?e.push(t):r(t),s.a=(a,i,s)=>{var c,l,u,d=s&&[],f=a.exports,p=!0,m=!1,y=(t,n,r)=>{m||(m=!0,n.r+=t.length,t.map(((t,o)=>t[e](n,r))),m=!1)},h=new Promise(((e,t)=>{u=t,l=()=>(e(f),n(d),d=0)}));h[t]=f,h[e]=(e,t)=>{if(p)return r(e);c&&y(c,e,t),o(d,e),h.catch(t)},a.exports=h,i((a=>{if(!a)return l();var i,s;c=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var i=[];a.then((e=>{s[t]=e,n(i),i=0}));var s={};return s[e]=(e,t)=>(o(i,e),a.catch(t)),s}}var c={};return c[e]=e=>r(e),c[t]=a,c})))(a);var u=new Promise(((e,n)=>{(i=()=>e(s=c.map((e=>e[t])))).r=0,y(c,i,n)}));return i.r?u:s})).then(l,u),p=!1},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.v=(e,t,n,r)=>{var o=fetch(s.p+""+n+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,r).then((t=>Object.assign(e,t.instance.exports))):o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,r))).then((t=>Object.assign(e,t.instance.exports)))},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),s(127)})();