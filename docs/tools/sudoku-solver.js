(()=>{"use strict";var e={938:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(81),a=r.n(n),o=r(645),i=r.n(o)()(a());i.push([e.id,'.right-arrow{height:10px;width:20px;background-color:#26774e;position:relative;top:-20px;left:5px}.right-arrow:before{position:absolute;content:"";width:0;height:0;border:15px solid transparent;border-left:15px solid #26774e;left:20px;top:-10px}\n',""]);const l=i},40:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(81),a=r.n(n),o=r(645),i=r.n(o)()(a());i.push([e.id,".footer{position:relative;display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;flex-direction:row;justify-content:center;border-collapse:collapse;border-top:1px solid #abc4b7;padding:10px}.footer__about-area{width:100%;display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;flex-direction:row;justify-content:center;align-items:stretch}.footer__item{display:flex;justify-content:center;width:auto;margin:10px}\n",""]);const l=i},908:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(81),a=r.n(n),o=r(645),i=r.n(o)()(a());i.push([e.id,'body{padding:3px}.grid-table{border-collapse:collapse;border:2px solid #26774e;width:300px;height:300px}.main-content{width:100%;display:-webkit-flex;display:inline-flex;flex-direction:row;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center}.main-content__input{padding-top:10px;padding-bottom:10px;padding-right:6px}.main-content__input__note{height:50px;width:100%}.main-content__btn-area{height:100%;padding:2px}.main-content__output{padding-top:10px;padding-bottom:10px;padding-left:6px}.main-content__output__note{height:50px;width:100%}input[type="number"]{-moz-appearance:textfield}.number-input::-webkit-inner-spin-button,.number-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;-moz-appearance:textfield}.number-input{height:30px;width:30px;font-size:150%;text-align:center}.number-output::-webkit-inner-spin-button,.number-output::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;-moz-appearance:textfield}.number-output{height:30px;width:30px;font-size:150%;text-align:center}.box-border-bottom{border-collapse:collapse;border-bottom:2px solid #26774e}.box-border-right{border-collapse:collapse;border-right:2px solid #26774e}.btn-solve{background-color:#98c7af}\n',""]);const l=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var f=0;f<e.length;f++){var d=[].concat(e[f]);n&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},i=[],l=0;l<e.length;l++){var s=e[l],f=n.base?s[0]+n.base:s[0],d=o[f]||0,c="".concat(f," ").concat(d);o[f]=d+1;var u=r(c),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var w=a(p,n);n.byIndex=l,t.splice(l,0,{identifier:c,updater:w,references:1})}i.push(c)}return i}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var l=r(o[i]);t[l].references--}for(var s=n(e,a),f=0;f<o.length;f++){var d=r(o[f]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=r(379),t=r.n(e),n=r(795),a=r.n(n),o=r(569),i=r.n(o),l=r(565),s=r.n(l),f=r(216),d=r.n(f),c=r(589),u=r.n(c),p=r(908),w={};w.styleTagTransform=u(),w.setAttributes=s(),w.insert=i().bind(null,"head"),w.domAPI=a(),w.insertStyleElement=d(),t()(p.Z,w),p.Z&&p.Z.locals&&p.Z.locals;var y=r(938),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),t()(y.Z,m),y.Z&&y.Z.locals&&y.Z.locals;var b=r(40),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),t()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals;const g=e=>{const t=e.length;let r=new Array(t);for(let n=0;n<t;n++){r[n]=new Set;for(let t of e[n])r[n].add(t)}return r},x=e=>{let t=new Array(e.length);for(let r=0;r<t.length;r++){t[r]=new Array(e[r].length);for(let n=0;n<t[r].length;n++){t[r][n]=new Set;for(let a of e[r][n])t[r][n].add(a)}}return t},v=[[0,0,0,1,1,1,2,2,2],[0,0,0,1,1,1,2,2,2],[0,0,0,1,1,1,2,2,2],[3,3,3,4,4,4,5,5,5],[3,3,3,4,4,4,5,5,5],[3,3,3,4,4,4,5,5,5],[6,6,6,7,7,7,8,8,8],[6,6,6,7,7,7,8,8,8],[6,6,6,7,7,7,8,8,8]],_=[[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]],[[0,3],[0,4],[0,5],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]],[[0,6],[0,7],[0,8],[1,6],[1,7],[1,8],[2,6],[2,7],[2,8]],[[3,0],[3,1],[3,2],[4,0],[4,1],[4,2],[5,0],[5,1],[5,2]],[[3,3],[3,4],[3,5],[4,3],[4,4],[4,5],[5,3],[5,4],[5,5]],[[3,6],[3,7],[3,8],[4,6],[4,7],[4,8],[5,6],[5,7],[5,8]],[[6,0],[6,1],[6,2],[7,0],[7,1],[7,2],[8,0],[8,1],[8,2]],[[6,3],[6,4],[6,5],[7,3],[7,4],[7,5],[8,3],[8,4],[8,5]],[[6,6],[6,7],[6,8],[7,6],[7,7],[7,8],[8,6],[8,7],[8,8]]];let k=0,S=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];const z=async e=>{for(let t=0;t<9;t++)for(let r=0;r<9;r++)if(0===e[t][r])return!1;return!0},E=async(e,t,r,n,a,o,i,l)=>{k+=1,n[t][r]=e,o[t].add(e),i[r].add(e),l[v[t][r]].add(e),a[t][r]=new Set,S=n;for(let t=0;t<9;t++)a[t][r].has(e)&&a[t][r].delete(e);for(let r=0;r<9;r++)a[t][r].has(e)&&a[t][r].delete(e);for(let n=0;n<_[v[t][r]].length;n++){let[o,i]=_[v[t][r]][n];a[o][i].has(e)&&a[o][i].delete(e)}},A=async(e,t,r,n,a)=>{let o=!1;for(let i=0;i<9;i++)for(let l=0;l<9;l++)if(1===t[i][l].size){let s;o=!0;for(let e of t[i][l])s=e;await E(s,i,l,e,t,r,n,a)}for(let i=0;i<9;i++)for(let l=0;l<9;l++){if(0===t[i][l].size)continue;let s=new Set;for(let e of t[i][l])s.add(e);for(let e=0;e<9;e++)if(l!==e)for(let r of t[i][e])s.delete(r);if(1===s.size){let f;o=!0;for(let e of s)f=e;await E(f,i,l,e,t,r,n,a)}}for(let i=0;i<9;i++)for(let l=0;l<9;l++){if(0===t[l][i].size)continue;let s=new Set;for(let e of t[l][i])s.add(e);for(let e=0;e<9;e++)if(l!==e)for(let r of t[e][i])s.delete(r);if(1===s.size){let f;o=!0;for(let e of s)f=e;await E(f,l,i,e,t,r,n,a)}}for(let i=0;i<9;i++)for(let[l,s]of _[i]){if(0===t[l][s].size)continue;let f=new Set;for(let e of t[l][s])f.add(e);for(let[e,r]of _[i])if(l!==e||s!==r)for(let n of t[e][r])f.delete(n);if(1===f.size){let i;o=!0;for(let e of f)i=e;await E(i,l,s,e,t,r,n,a)}}return o},I=async(e,t,r,n,a)=>{let[o,i]=await(async e=>{let t=99999,r=-1,n=-1;for(let a=0;a<9;a++)for(let o=0;o<9;o++)e[a][o].size>=2&&e[a][o].size<t&&(t=e[a][o].size,r=a,n=o);return[r,n]})(t);if(-1==o&&-1==i)return!1;for await(let n of t[o][i]){let l=JSON.parse(JSON.stringify(e)),s=x(t),f=g(r),d=g(r),c=g(a);for(await E(n,o,i,l,s,f,d,c);!await z(l);)if(!await A(l,s,f,d,c)){if(await I(l,s,f,d,c))return!0;break}if(await z(l))return!0}return!1},Z=async e=>{if(!await(async e=>{for(let t=0;t<9;t++)for(let r=0;r<9;r++)if(!(0<=e[t][r]&&e[t][r]<=9))return!1;for(let t=0;t<9;t++){let r=new Set;for(let n=0;n<9;n++)if(1<=e[t][n]&&e[t][n]<=9){if(r.has(e[t][n]))return!1;r.add(e[t][n])}}for(let t=0;t<9;t++){let r=new Set;for(let n=0;n<9;n++)if(1<=e[n][t]&&e[n][t]<=9){if(r.has(e[n][t]))return!1;r.add(e[n][t])}}for(let t=0;t<9;t++){let r=new Set;for(let[n,a]of _[t])if(1<=e[n][a]&&e[n][a]<=9){if(r.has(e[n][a]))return!1;r.add(e[n][a])}}return!0})(e))return[!1,e];let t=new Array(9);for(let r=0;r<9;r++){t[r]=new Set;for(let n=0;n<9;n++)0!==e[r][n]&&t[r].add(e[r][n])}let r=new Array(9);for(let t=0;t<9;t++){r[t]=new Set;for(let n=0;n<9;n++)0!==e[n][t]&&r[t].add(e[n][t])}let n=new Array(9);for(let e=0;e<9;e++)n[e]=new Set;for(let t=0;t<9;t++)for(let r=0;r<9;r++)0!==e[t][r]&&n[v[t][r]].add(e[t][r]);let a=new Array(9);for(let o=0;o<9;o++){a[o]=new Array(9);for(let i=0;i<9;i++){a[o][i]=new Set;for(let l=1;l<=9;l++)0!==e[o][i]||t[o].has(l)||r[i].has(l)||n[v[o][i]].has(l)||a[o][i].add(l)}}for(;!await z(e);)if(!await A(e,a,t,r,n)){await I(e,a,t,r,n);break}const o=await(async e=>{for(let t=0;t<9;t++){let r=new Set;for(let n=0;n<9;n++)1<=e[t][n]&&e[t][n]<=9&&r.add(e[t][n]);if(9!=r.size)return!1}for(let t=0;t<9;t++){let r=new Set;for(let n=0;n<9;n++)1<=e[n][t]&&e[n][t]<=9&&r.add(e[n][t]);if(9!=r.size)return!1}for(let t=0;t<9;t++){let r=new Set;for(let[n,a]of _[t])1<=e[n][a]&&e[n][a]<=9&&r.add(e[n][a]);if(9!=r.size)return!1}return!0})(S);return[o,S]},T=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],C=[[0,0,9,0,7,1,0,8,0],[1,0,0,0,0,5,0,0,0],[4,0,0,8,0,0,0,0,3],[0,0,0,3,0,2,5,0,0],[0,2,4,0,0,0,0,0,0],[5,0,0,1,0,0,0,0,8],[0,3,0,6,0,0,0,0,0],[0,0,0,0,5,0,0,0,0],[0,0,7,0,4,0,9,3,0]],B=[[0,0,8,6,0,0,0,0,9],[3,0,5,0,0,7,0,0,0],[9,0,0,0,0,5,0,8,0],[0,0,0,4,0,8,1,0,0],[5,4,0,0,9,0,0,0,0],[7,0,0,0,0,0,2,0,5],[2,0,0,3,0,0,0,5,0],[0,0,0,0,2,0,0,0,6],[0,7,0,0,0,0,0,0,1]],j=[[6,0,5,0,0,3,4,0,0],[7,0,3,0,0,5,0,8,2],[4,8,0,1,0,0,6,0,5],[9,2,4,0,3,1,7,5,8],[0,0,0,9,0,8,2,0,3],[0,3,7,0,4,0,0,9,6],[5,6,9,0,8,4,3,7,0],[2,7,1,3,0,0,8,6,4],[0,4,8,7,1,6,0,2,0]],M=[[0,0,0,0,0,2,0,0,0],[0,0,0,0,3,1,8,0,4],[0,0,1,4,0,0,9,0,0],[0,8,0,0,0,0,1,0,0],[0,0,7,9,0,0,0,0,5],[3,0,6,0,0,5,0,0,0],[0,2,0,0,0,0,0,5,0],[0,0,0,2,1,0,4,0,0],[0,6,0,0,7,4,0,0,8]],N=[[0,0,5,3,0,0,0,0,0],[8,0,0,0,0,0,0,2,0],[0,7,0,0,1,0,5,0,0],[4,0,0,0,0,5,3,0,0],[0,1,0,0,7,0,0,0,6],[0,0,3,2,0,0,0,8,0],[0,6,0,5,0,0,0,0,9],[0,0,4,0,0,0,0,3,0],[0,0,0,0,0,9,7,0,0]],P=[[8,0,0,0,0,0,0,0,0],[0,0,3,6,0,0,0,0,0],[0,7,0,0,9,0,2,0,0],[0,5,0,0,0,7,0,0,0],[0,0,0,0,4,5,7,0,0],[0,0,0,1,0,0,0,3,0],[0,0,1,0,0,0,0,6,8],[0,0,8,5,0,0,0,1,0],[0,9,0,0,0,0,4,0,0]],O=[[0,6,1,0,0,7,0,0,3],[0,9,2,0,0,3,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,8,5,3,0,0,0,0],[0,0,0,0,0,0,5,0,4],[5,0,0,0,0,8,0,0,0],[0,4,0,0,0,0,0,0,1],[0,0,0,1,6,0,8,0,0],[6,0,0,0,0,0,0,0,0]],L=[[0,4,6,0,0,5,7,0,0],[0,0,0,9,0,0,0,0,0],[0,9,0,0,0,1,0,0,6],[0,0,0,0,0,0,9,0,0],[0,3,0,0,0,0,0,0,0],[4,0,0,5,2,0,0,0,8],[0,8,0,0,0,0,0,7,0],[5,7,0,3,0,0,0,8,2],[2,0,0,0,0,0,3,0,0]],q=[[2,0,0,0,0,7,0,5,0],[0,0,0,0,0,0,3,0,0],[0,0,1,2,0,8,0,0,0],[7,0,0,0,0,3,0,0,1],[0,0,2,0,0,0,0,6,0],[0,6,0,0,0,1,4,0,0],[0,0,4,1,0,6,0,0,8],[0,0,8,0,0,0,7,0,0],[0,5,0,0,0,0,0,9,0]],J=[[0,8,0,0,0,0,1,5,0],[4,0,6,5,0,9,0,8,0],[0,0,0,0,0,8,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,2,0,4,0,0,0,3],[3,0,0,8,0,1,0,0,0],[9,0,0,0,7,0,0,0,0],[6,0,0,0,0,0,0,0,4],[1,5,0,0,0,0,0,9,0]],F=[[0,0,0,8,0,1,0,0,0],[0,0,0,0,0,0,0,4,3],[5,0,0,0,0,0,0,0,0],[0,0,0,0,7,0,8,0,0],[0,0,0,0,0,0,1,0,0],[0,2,0,0,3,0,0,0,0],[6,0,0,0,0,0,0,7,5],[0,0,3,4,0,0,0,0,0],[0,0,0,2,0,0,6,0,0]],H=async e=>{for(let t=0;t<9;t++)for(let r=0;r<9;r++){const n=9*t+r,a=document.getElementById("id_input"+n);0!==e[t][r]?a.value=e[t][r].toString():a.value=""}},R=async()=>{let e=new Array(9);for(let t=0;t<9;t++)e[t]=new Array(9);for(let t=0;t<81;t++){const r=document.getElementById("id_input"+t),n=t%9;e[Math.floor(t/9)][n]=Number(r.value)}return e},U=async()=>{await G("🤔計算中です...");const e=document.getElementById("id_btn-solve"),t=e.style.opacity;e.style.opacity="0.5",e.disabled=!0,await K();const r=await R(),[n,a]=await Z(r);await(async e=>{for(let t=0;t<9;t++)for(let r=0;r<9;r++){const n=9*t+r,a=document.getElementById("id_output"+n);0!==e[t][r]?a.value=e[t][r].toString():a.value=""}})(a),n?await G("😄数独が解けました"):(await G("😢この数独は解けません"),await Q(a)),e.style.opacity=t,e.disabled=!1},D=async()=>{switch(document.getElementById("id_template-input").value){case"empty":await H(T);break;case"sample1":await H(C);break;case"sample2":await H(B);break;case"kyo_q1":await H(j);break;case"kyo_q100":await H(M);break;case"inkala_2010":await H(N);break;case"inkala_2012":await H(P);break;case"wata2013_0":await H(O);break;case"wata2013_03_12":await H(L);break;case"wata2013_03_13":await H(q);break;case"wata2013_03_22":await H(J);break;case"gary_2012":await H(F)}},G=async e=>(document.getElementById("id_output-note").textContent=e,new Promise(((e,t)=>{setTimeout((()=>e("")),10)}))),K=async()=>{for(let e=0;e<81;e++)document.getElementById("id_output"+e).style.backgroundColor=""},Q=async e=>{const t=(e,t)=>{const r=9*e+t;document.getElementById("id_output"+r).style.backgroundColor="#f39b90"};for(let r=0;r<9;r++)for(let n=0;n<9;n++)0<=e[r][n]&&e[r][n]<=9||t(r,n);for(let r=0;r<9;r++)for(let n=0;n<9;n++)if(1<=e[r][n]&&e[r][n]<=9)for(let a=n+1;a<9;a++)e[r][n]===e[r][a]&&(t(r,n),t(r,a));for(let r=0;r<9;r++)for(let n=0;n<9;n++)if(1<=e[n][r]&&e[n][r]<=9)for(let a=n+1;a<9;a++)e[n][r]===e[a][r]&&(t(n,r),t(a,r));for(let r=0;r<9;r++)for(let[n,a]of _[r])for(let[o,i]of _[r])n===o&&a===i||1<=e[n][a]&&e[n][a]<=9&&e[n][a]===e[o][i]&&t(n,a)};(async()=>{await D();const e=await R();await H(e),await U(),await(async()=>{document.getElementById("id_btn-solve").addEventListener("click",U)})(),await(async()=>{document.getElementById("id_template-input").addEventListener("change",D)})()})()})()})();