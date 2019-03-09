/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var e=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))(function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?i(e.value):new t(function(n){n(e.value)}).then(a,s)}u((r=r.apply(e,n||[])).next())})},n=this&&this.__generator||function(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Ionic.loadBundle("chunk-40cd1a1b.js",["exports"],function(t){window;var r=0;function i(e,n,t){var r=function(e,n){var t=Array.from(o(e).children).filter(function(e){return e.overlayIndex>0});return void 0===n?t:(n=n.toUpperCase(),t.filter(function(e){return e.tagName===n}))}(e,n);return void 0===t?r[r.length-1]:r.find(function(e){return e.id===t})}function o(e){return e.querySelector("ion-app")||e.body}function a(t,r,i,o){return e(this,void 0,void 0,function(){var e,a;return n(this,function(n){switch(n.label){case 0:return t.animation?(t.animation.destroy(),t.animation=void 0,[2,!1]):[3,1];case 1:return i.classList.remove("ion-page-invisible"),a=t,[4,t.animationCtrl.create(r,i.shadowRoot||t.el,o)];case 2:return e=a.animation=n.sent(),t.animation=e,t.animated||e.duration(0),t.keyboardClose&&e.beforeAddWrite(function(){var e=i.ownerDocument.activeElement;e&&e.matches("input, ion-input, ion-textarea")&&e.blur()}),[4,e.playAsync()];case 3:return n.sent(),e.destroy(),t.animation=void 0,[2,e.hasCompleted]}})})}t.BACKDROP="backdrop",t.dismiss=function(t,r,i,o,s,u,c){return e(this,void 0,void 0,function(){var e,l;return n(this,function(n){switch(n.label){case 0:if(!t.presented)return[2,!1];t.presented=!1,n.label=1;case 1:return n.trys.push([1,3,,4]),t.willDismiss.emit({data:r,role:i}),e=t.leaveAnimation?t.leaveAnimation:t.config.get(o,"ios"===t.mode?s:u),[4,a(t,e,t.el,c)];case 2:return n.sent(),t.didDismiss.emit({data:r,role:i}),[3,4];case 3:return l=n.sent(),console.error(l),[3,4];case 4:return t.el.remove(),[2,!0]}})})},t.eventMethod=function(e,n){var t,r=new Promise(function(e){return t=e});return function(e,n,r){var i=function(r){e.removeEventListener(n,i),t(r.detail)};e.addEventListener(n,i)}(e,n),r},t.isCancel=function(e){return"cancel"===e||"backdrop"===e},t.present=function(t,r,i,o,s){return e(this,void 0,void 0,function(){var e;return n(this,function(n){switch(n.label){case 0:return t.presented?[2]:(t.presented=!0,t.willPresent.emit(),e=t.enterAnimation?t.enterAnimation:t.config.get(r,"ios"===t.mode?i:o),[4,a(t,e,t.el,s)]);case 1:return n.sent()&&t.didPresent.emit(),[2]}})})},t.createOverlay=function(e,n){var t=e.ownerDocument;!function(e){0===r&&(r=1,e.addEventListener("ionBackButton",function(n){var t=i(e);t&&t.backdropDismiss&&n.detail.register(100,function(){return t.dismiss(void 0,"backdrop")})}),e.addEventListener("keyup",function(n){if("Escape"===n.key){var t=i(e);t&&t.backdropDismiss&&t.dismiss(void 0,"backdrop")}}))}(t),Object.assign(e,n),e.classList.add("ion-page-invisible");var a=r++;return e.overlayIndex=a,e.hasAttribute("id")||(e.id="ion-overlay-"+a),o(t).appendChild(e),e.componentOnReady()},t.dismissOverlay=function(e,n,t,r,o){var a=i(e,r,o);return a?a.dismiss(n,t):Promise.reject("overlay does not exist")},t.getOverlay=i});