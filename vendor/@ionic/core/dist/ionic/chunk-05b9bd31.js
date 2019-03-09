/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;let n=0;function t(e,t){const i=e.ownerDocument;!function(e){0===n&&(n=1,e.addEventListener("ionBackButton",n=>{const t=o(e);t&&t.backdropDismiss&&n.detail.register(100,()=>t.dismiss(void 0,m))}),e.addEventListener("keyup",n=>{if("Escape"===n.key){const n=o(e);n&&n.backdropDismiss&&n.dismiss(void 0,m)}}))}(i),Object.assign(e,t),e.classList.add("ion-page-invisible");const a=n++;return e.overlayIndex=a,e.hasAttribute("id")||(e.id=`ion-overlay-${a}`),r(i).appendChild(e),e.componentOnReady()}function i(e,n,t,i,a){const s=o(e,i,a);return s?s.dismiss(n,t):Promise.reject("overlay does not exist")}function o(e,n,t){const i=function(e,n){const t=Array.from(r(e).children).filter(e=>e.overlayIndex>0);return void 0===n?t:(n=n.toUpperCase(),t.filter(e=>e.tagName===n))}(e,n);return void 0===t?i[i.length-1]:i.find(e=>e.id===t)}async function a(e,n,t,i,o){if(e.presented)return;e.presented=!0,e.willPresent.emit();const a=e.enterAnimation?e.enterAnimation:e.config.get(n,"ios"===e.mode?t:i);await c(e,a,e.el,o)&&e.didPresent.emit()}async function s(e,n,t,i,o,a,s){if(!e.presented)return!1;e.presented=!1;try{e.willDismiss.emit({data:n,role:t});const r=e.leaveAnimation?e.leaveAnimation:e.config.get(i,"ios"===e.mode?o:a);await c(e,r,e.el,s),e.didDismiss.emit({data:n,role:t})}catch(e){console.error(e)}return e.el.remove(),!0}function r(e){return e.querySelector("ion-app")||e.body}async function c(e,n,t,i){if(e.animation)return e.animation.destroy(),e.animation=void 0,!1;{t.classList.remove("ion-page-invisible");const o=t.shadowRoot||e.el,a=e.animation=await e.animationCtrl.create(n,o,i);return e.animation=a,e.animated||a.duration(0),e.keyboardClose&&a.beforeAddWrite(()=>{const e=t.ownerDocument.activeElement;e&&e.matches("input, ion-input, ion-textarea")&&e.blur()}),await a.playAsync(),a.destroy(),e.animation=void 0,a.hasCompleted}}function d(e,n){let t;const i=new Promise(e=>t=e);return function(e,n,i){const o=i=>{e.removeEventListener(n,o),(e=>{t(e.detail)})(i)};e.addEventListener(n,o)}(e,n),i}function l(e){return"cancel"===e||e===m}const m="backdrop";export{m as a,s as b,d as c,l as d,a as e,t as f,i as g,o as h};