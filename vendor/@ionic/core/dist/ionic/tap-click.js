/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{c as e,l as n}from"./chunk-e7816c0b.js";function o(t){let o,a,d=10*-r,u=0,l=!1,f=!1;const v=new WeakMap;function p(t){d=e(t),L(t)}function h(){clearTimeout(a),a=void 0,o&&(w(!1),o=void 0),l=!0}function m(t){o||f||(l=!1,E(function(t){if(!t.composedPath)return t.target.closest("[ion-activatable]");{const e=t.composedPath();for(let t=0;t<e.length-2;t++){const n=e[t];if(n.hasAttribute&&n.hasAttribute("ion-activatable"))return n}}}(t),t))}function L(t){f||(E(void 0,t),l&&t.cancelable&&t.preventDefault())}function E(t,e){if(t&&t===o)return;clearTimeout(a),a=void 0;const{x:s,y:r}=n(e);if(o){if(v.has(o))throw new Error("internal error");o.classList.contains(i)||b(o,s,r),w(!0)}if(t){const e=v.get(t);e&&(clearTimeout(e),v.delete(t)),t.classList.remove(i),a=setTimeout(()=>{b(t,s,r),a=void 0},c)}o=t}function b(t,e,n){u=Date.now(),t.classList.add(i);const o=function(t){if(t.shadowRoot){const e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")}(t);o&&o.addRipple&&o.addRipple(e,n)}function w(t){const e=o;if(!e)return;const n=s-Date.now()+u;if(t&&n>0){const t=setTimeout(()=>{e.classList.remove(i),v.delete(e)},s);v.set(e,t)}else e.classList.remove(i)}t.body.addEventListener("click",function(t){(l||f)&&(t.preventDefault(),t.stopPropagation())},!0),t.body.addEventListener("ionScrollStart",()=>{f=!0,h()}),t.body.addEventListener("ionScrollEnd",()=>{f=!1}),t.body.addEventListener("ionGestureCaptured",h),t.addEventListener("touchstart",function(t){d=e(t),m(t)},!0),t.addEventListener("touchcancel",p,!0),t.addEventListener("touchend",p,!0),t.addEventListener("mousedown",function(t){const n=e(t)-r;d<n&&m(t)},!0),t.addEventListener("mouseup",function(t){const n=e(t)-r;d<n&&L(t)},!0)}const i="activated",c=200,s=200,r=2500;export{o as startTapClick};