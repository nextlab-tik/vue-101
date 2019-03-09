/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var e=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function s(e){try{u(i.next(e))}catch(e){r(e)}}function a(e){try{u(i.throw(e))}catch(e){r(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,a)}u((i=i.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,i,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(e){r=[6,e],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}};Ionic.loadBundle("v3mzxt80",["require","exports","./chunk-496c6bc9.js","./chunk-7e46fca4.js"],function(n,i,o,r){var s=window.Ionic.h,a=function(){function i(){this.lastOnEnd=0,this.blocker=o.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}return i.prototype.typeChanged=function(e,t){var n=this.contentEl;n&&(void 0!==t&&n.classList.remove("menu-content-"+t),n.classList.add("menu-content-"+e),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0},i.prototype.disabledChanged=function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},i.prototype.sideChanged=function(){this.isEndSide=r.isEndSide(this.win,this.side)},i.prototype.swipeGestureChanged=function(){this.updateState()},i.prototype.componentWillLoad=function(){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return this.type=this.type||this.config.get("menuType","ios"===this.mode?"reveal":"overlay"),this.isServer?(this.disabled=!0,[3,3]):[3,1];case 1:return e=this,[4,this.lazyMenuCtrl.componentOnReady().then(function(e){return e._getInstance()})];case 2:e.menuCtrl=t.sent(),t.label=3;case 3:return[2]}})})},i.prototype.componentDidLoad=function(){return e(this,void 0,void 0,function(){var e,i,o,r,s,a=this;return t(this,function(t){switch(t.label){case 0:return this.isServer?[2]:(e=this.el.parentNode,(i=void 0!==this.contentId?document.getElementById(this.contentId):e&&e.querySelector&&e.querySelector("[main]"))&&i.tagName?(this.contentEl=i,i.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),(o=!this.disabled)&&(r=this.menuCtrl.getMenusSync(),o=!r.some(function(e){return e.side===a.side&&!e.disabled})),this.menuCtrl._register(this),this.ionMenuChange.emit({disabled:!o,open:this._isOpen}),s=this,[4,new Promise(function(e,t){n(["./gesture.js"],e,t)})]):(console.error('Menu: must have a "content" element to listen for drag events on.'),[2]));case 1:return s.gesture=t.sent().createGesture({el:this.doc,queue:this.queue,gestureName:"menu-swipe",gesturePriority:40,threshold:10,canStart:function(e){return a.canStart(e)},onWillStart:function(){return a.onWillStart()},onStart:function(){return a.onStart()},onMove:function(e){return a.onMove(e)},onEnd:function(e){return a.onEnd(e)}}),this.disabled=!o,this.updateState(),[2]}})})},i.prototype.componentDidUnload=function(){this.blocker.destroy(),this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy(),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0},i.prototype.onSplitPaneChanged=function(e){this.isPaneVisible=e.detail.isPane(this.el),this.updateState()},i.prototype.onBackdropClick=function(e){this.lastOnEnd<e.timeStamp-100&&e.composedPath&&!e.composedPath().includes(this.menuInnerEl)&&(e.preventDefault(),e.stopPropagation(),this.close())},i.prototype.isOpen=function(){return Promise.resolve(this._isOpen)},i.prototype.isActive=function(){return Promise.resolve(this._isActive())},i.prototype.open=function(e){return void 0===e&&(e=!0),this.setOpen(!0,e)},i.prototype.close=function(e){return void 0===e&&(e=!0),this.setOpen(!1,e)},i.prototype.toggle=function(e){return void 0===e&&(e=!0),this.setOpen(!this._isOpen,e)},i.prototype.setOpen=function(e,t){return void 0===t&&(t=!0),this.menuCtrl._setOpen(this,e,t)},i.prototype._setOpen=function(n,i){return void 0===i&&(i=!0),e(this,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return!this._isActive()||this.isAnimating||n===this._isOpen?[2,this._isOpen]:(this.beforeAnimation(),[4,this.loadAnimation()]);case 1:return e.sent(),[4,this.startAnimation(n,i)];case 2:return e.sent(),this.afterAnimation(n),[2,n]}})})},i.prototype.loadAnimation=function(){return e(this,void 0,void 0,function(){var e,n;return t(this,function(t){switch(t.label){case 0:return(e=this.menuInnerEl.offsetWidth)===this.width&&void 0!==this.animation?[2]:(this.width=e,this.animation&&(this.animation.destroy(),this.animation=void 0),n=this,[4,this.menuCtrl._createAnimation(this.type,this)]);case 1:return n.animation=t.sent(),[2]}})})},i.prototype.startAnimation=function(n,i){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return e=this.animation.reverse(!n),i?[4,e.playAsync()]:[3,2];case 1:return t.sent(),[3,3];case 2:e.playSync(),t.label=3;case 3:return[2]}})})},i.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible},i.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()},i.prototype.canStart=function(e){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpenSync()&&(t=e.currentX,n=this.maxEdgeStart,this.isEndSide?t>=this.win.innerWidth-n:t<=n));var t,n},i.prototype.onWillStart=function(){return this.beforeAnimation(),this.loadAnimation()},i.prototype.onStart=function(){this.isAnimating&&this.animation?this.animation.reverse(this._isOpen).progressStart():r.assert(!1,"isAnimating has to be true")},i.prototype.onMove=function(e){if(this.isAnimating&&this.animation){var t=u(e.deltaX,this._isOpen,this.isEndSide);this.animation.progressStep(t/this.width)}else r.assert(!1,"isAnimating has to be true")},i.prototype.onEnd=function(e){var t=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,o=u(e.deltaX,n,i),s=this.width,a=o/s,c=e.velocityX,l=s/2,h=c>=0&&(c>.2||e.deltaX>l),d=c<=0&&(c<-.2||e.deltaX<-l),p=n?i?h:d:i?d:h,m=!n&&p;n&&!p&&(m=!0);var f=(p?1-a:a)*s,b=0;if(f>5){var g=f/Math.abs(c);b=Math.min(g,300)}this.lastOnEnd=e.timeStamp,this.animation.onFinish(function(){return t.afterAnimation(m)},{clearExistingCallbacks:!0,oneTimeCallback:!0}).progressEnd(p,a,b)}else r.assert(!1,"isAnimating has to be true")},i.prototype.beforeAnimation=function(){r.assert(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(c),this.backdropEl&&this.backdropEl.classList.add(l),this.blocker.block(),this.isAnimating=!0},i.prototype.afterAnimation=function(e){r.assert(this.isAnimating,"_before() should be called while animating"),this._isOpen=e,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),this.enableListener(this,"body:click",e),e?(this.contentEl&&this.contentEl.classList.add(h),this.ionOpen.emit()):(this.el.classList.remove(c),this.contentEl&&this.contentEl.classList.remove(h),this.backdropEl&&this.backdropEl.classList.remove(l),this.ionClose.emit())},i.prototype.updateState=function(){var e=this._isActive();this.gesture&&this.gesture.setDisabled(!e||!this.swipeGesture),!e&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this),r.assert(!this.isAnimating,"can not be animating")},i.prototype.forceClosing=function(){r.assert(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.reverse(!0).playSync(),this.afterAnimation(!1)},i.prototype.hostData=function(){var e,t=this.isEndSide,n=this.disabled,i=this.isPaneVisible;return{role:"complementary",class:(e={},e["menu-type-"+this.type]=!0,e["menu-enabled"]=!n,e["menu-side-end"]=t,e["menu-side-start"]=!t,e["menu-pane-visible"]=i,e)}},i.prototype.render=function(){var e=this;return[s("div",{class:"menu-inner",ref:function(t){return e.menuInnerEl=t}},s("slot",null)),s("ion-backdrop",{ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:!1,stopPropagation:!1})]},Object.defineProperty(i,"is",{get:function(){return"ion-menu"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"properties",{get:function(){return{close:{method:!0},config:{context:"config"},contentId:{type:String,attr:"content-id"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},isActive:{method:!0},isEndSide:{state:!0},isOpen:{method:!0},isPaneVisible:{state:!0},isServer:{context:"isServer"},lazyMenuCtrl:{connect:"ion-menu-controller"},maxEdgeStart:{type:Number,attr:"max-edge-start"},menuId:{type:String,attr:"menu-id"},open:{method:!0},queue:{context:"queue"},setOpen:{method:!0},side:{type:String,attr:"side",reflectToAttr:!0,watchCallbacks:["sideChanged"]},swipeGesture:{type:Boolean,attr:"swipe-gesture",watchCallbacks:["swipeGestureChanged"]},toggle:{method:!0},type:{type:String,attr:"type",mutable:!0,watchCallbacks:["typeChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(i,"events",{get:function(){return[{name:"ionOpen",method:"ionOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClose",method:"ionClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionMenuChange",method:"ionMenuChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(i,"listeners",{get:function(){return[{name:"body:ionSplitPaneVisible",method:"onSplitPaneChanged"},{name:"body:click",method:"onBackdropClick",capture:!0,disabled:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(i,"style",{get:function(){return".sc-ion-menu-md-h{--width:304px;--width-small:264px;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}.show-menu.sc-ion-menu-md-h{display:block}.menu-inner.sc-ion-menu-md{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);height:100%;background:var(--background);contain:strict}.menu-side-start.sc-ion-menu-md-h   .menu-inner.sc-ion-menu-md{--ion-safe-area-right:0px;right:auto;left:0}.menu-side-end.sc-ion-menu-md-h   .menu-inner.sc-ion-menu-md{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop.sc-ion-menu-md{display:none;opacity:.01;z-index:-1}.menu-content.sc-ion-menu-md{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.menu-content-open.sc-ion-menu-md{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}\@media (max-width:340px){.menu-inner.sc-ion-menu-md{width:var(--width-small)}}.menu-type-reveal.sc-ion-menu-md-h{z-index:0}.menu-type-reveal.show-menu.sc-ion-menu-md-h   .menu-inner.sc-ion-menu-md{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.menu-type-overlay.sc-ion-menu-md-h{z-index:80}.menu-type-overlay.sc-ion-menu-md-h   .show-backdrop.sc-ion-menu-md{display:block;cursor:pointer}.menu-pane-visible.sc-ion-menu-md-h   .menu-inner.sc-ion-menu-md{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}.menu-pane-visible.sc-ion-menu-md-h   ion-backdrop.sc-ion-menu-md{display:hidden!important}.menu-type-overlay.sc-ion-menu-md-h   .menu-inner.sc-ion-menu-md{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),i}();function u(e,t,n){return Math.max(0,t!==n?-e:e)}var c="show-menu",l="show-backdrop",h="menu-content-open",d=function(){function e(){this.autoHide=!0}return e.prototype.hostData=function(){return{"ion-activatable":!0,class:{button:!0}}},e.prototype.render=function(){var e=this.config.get("menuIcon","menu");return s("ion-menu-toggle",{menu:this.menu,autoHide:this.autoHide},s("button",{type:"button"},s("slot",null,s("ion-icon",{icon:e,mode:this.mode,color:this.color,lazy:!1})),"md"===this.mode&&s("ion-ripple-effect",null)))},Object.defineProperty(e,"is",{get:function(){return"ion-menu-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{autoHide:{type:Boolean,attr:"auto-hide"},color:{type:String,attr:"color"},config:{context:"config"},menu:{type:String,attr:"menu"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-menu-button-md-h{pointer-events:all;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}button.sc-ion-menu-button-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:32px;border:0;outline:0;background:0 0;line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 8px}ion-icon.sc-ion-menu-button-md{margin:0;padding:0;pointer-events:none;font-size:26px}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function p(e){return Promise.resolve((new e).easing("cubic-bezier(0.0, 0.0, 0.2, 1)").easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)").duration(300))}var m=8;function f(e,t,n){var i,o,r=n.width+m;n.isEndSide?(i=r+"px",o="0px"):(i=-r+"px",o="0px");var s=(new e).addElement(n.menuInnerEl).fromTo("translateX",i,o),a=(new e).addElement(n.backdropEl).fromTo("opacity",.01,.3);return p(e).then(function(e){return e.add(s).add(a)})}function b(e,t,n){var i,o,r=n.width;n.isEndSide?(i=-r+"px",o=r+"px"):(i=r+"px",o=-r+"px");var s=(new e).addElement(n.menuInnerEl).fromTo("translateX",o,"0px"),a=(new e).addElement(n.contentEl).fromTo("translateX","0px",i),u=(new e).addElement(n.backdropEl).fromTo("opacity",.01,.2);return p(e).then(function(e){return e.add(s).add(u).add(a)})}function g(e,t,n){var i=n.width*(n.isEndSide?-1:1)+"px",o=(new e).addElement(n.contentEl).fromTo("translateX","0px",i);return p(e).then(function(e){return e.add(o)})}var y=function(){function n(){this.menus=[],this.menuAnimations=new Map,this.registerAnimation("reveal",g),this.registerAnimation("push",b),this.registerAnimation("overlay",f)}return n.prototype.open=function(n){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return[4,this.get(n)];case 1:return(e=t.sent())?[2,e.open()]:[2,!1]}})})},n.prototype.close=function(n){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return[4,void 0!==n?this.get(n):this.getOpen()];case 1:return void 0!==(e=t.sent())?[2,e.close()]:[2,!1]}})})},n.prototype.toggle=function(n){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return[4,this.get(n)];case 1:return(e=t.sent())?[2,e.toggle()]:[2,!1]}})})},n.prototype.enable=function(n,i){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return[4,this.get(i)];case 1:return(e=t.sent())&&(e.disabled=!n),[2,e]}})})},n.prototype.swipeGesture=function(n,i){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return[4,this.get(i)];case 1:return(e=t.sent())&&(e.swipeGesture=n),[2,e]}})})},n.prototype.isOpen=function(n){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return null==n?[3,2]:[4,this.get(n)];case 1:return[2,void 0!==(e=t.sent())&&e.isOpen()];case 2:return[4,this.getOpen()];case 3:return[2,void 0!==(e=t.sent())]}})})},n.prototype.isEnabled=function(n){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return[4,this.get(n)];case 1:return(e=t.sent())?[2,!e.disabled]:[2,!1]}})})},n.prototype.get=function(n){return e(this,void 0,void 0,function(){var e,i;return t(this,function(t){return"start"===n||"end"===n?(e=this.find(function(e){return e.side===n&&!e.disabled}))?[2,e]:[2,this.find(function(e){return e.side===n})]:null!=n?[2,this.find(function(e){return e.menuId===n})]:(i=this.find(function(e){return!e.disabled}))?[2,i]:[2,this.menus.length>0?this.menus[0].el:void 0]})})},n.prototype.getOpen=function(){return Promise.resolve(this.getOpenSync())},n.prototype.getMenus=function(){return Promise.resolve(this.getMenusSync())},n.prototype.isAnimating=function(){return Promise.resolve(this.isAnimatingSync())},n.prototype.registerAnimation=function(e,t){this.menuAnimations.set(e,t)},n.prototype._register=function(e){this.menus.indexOf(e)<0&&this.menus.push(e)},n.prototype._unregister=function(e){var t=this.menus.indexOf(e);t>-1&&this.menus.splice(t,1)},n.prototype._setActiveMenu=function(e){var t=e.side;this.menus.filter(function(n){return n.side===t&&n!==e}).forEach(function(e){return e.disabled=!0})},n.prototype._setOpen=function(n,i,o){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return this.isAnimatingSync()?[2,!1]:i?[4,this.getOpen()]:[3,3];case 1:return(e=t.sent())&&n.el!==e?[4,e.setOpen(!1,!1)]:[3,3];case 2:t.sent(),t.label=3;case 3:return[2,n._setOpen(i,o)]}})})},n.prototype._getInstance=function(){return Promise.resolve(this)},n.prototype._createAnimation=function(e,t){var n=this.menuAnimations.get(e);return n?this.animationCtrl.create(n,null,t):Promise.reject("animation not registered")},n.prototype.getOpenSync=function(){return this.find(function(e){return e._isOpen})},n.prototype.getMenusSync=function(){return this.menus.map(function(e){return e.el})},n.prototype.isAnimatingSync=function(){return this.menus.some(function(e){return e.isAnimating})},n.prototype.find=function(e){var t=this.menus.find(e);if(void 0!==t)return t.el},Object.defineProperty(n,"is",{get:function(){return"ion-menu-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{_createAnimation:{method:!0},_getInstance:{method:!0},_register:{method:!0},_setActiveMenu:{method:!0},_setOpen:{method:!0},_unregister:{method:!0},animationCtrl:{connect:"ion-animation-controller"},close:{method:!0},enable:{method:!0},get:{method:!0},getMenus:{method:!0},getOpen:{method:!0},isAnimating:{method:!0},isEnabled:{method:!0},isOpen:{method:!0},open:{method:!0},registerAnimation:{method:!0},swipeGesture:{method:!0},toggle:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return".ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}"},enumerable:!0,configurable:!0}),n}(),v=function(){function n(){this.visible=!1,this.autoHide=!0}return n.prototype.componentDidLoad=function(){return this.updateVisibility()},n.prototype.onClick=function(){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return[4,w(this.doc)];case 1:return(e=t.sent())?[4,e.get(this.menu)]:[3,3];case 2:t.sent()&&e.toggle(this.menu),t.label=3;case 3:return[2]}})})},n.prototype.updateVisibility=function(){return e(this,void 0,void 0,function(){var e,n,i;return t(this,function(t){switch(t.label){case 0:return[4,w(this.doc)];case 1:return(e=t.sent())?[4,e.get(this.menu)]:[3,5];case 2:return n=t.sent(),(i=n)?[4,n.isActive()]:[3,4];case 3:i=t.sent(),t.label=4;case 4:if(i)return this.visible=!0,[2];t.label=5;case 5:return this.visible=!1,[2]}})})},n.prototype.hostData=function(){var e=this.autoHide&&!this.visible;return{"aria-hidden":e?"true":null,class:{"menu-toggle-hidden":e}}},n.prototype.render=function(){return s("slot",null)},Object.defineProperty(n,"is",{get:function(){return"ion-menu-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{autoHide:{type:Boolean,attr:"auto-hide"},doc:{context:"document"},menu:{type:String,attr:"menu"},visible:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"listeners",{get:function(){return[{name:"click",method:"onClick"},{name:"body:ionMenuChange",method:"updateVisibility"},{name:"body:ionSplitPaneVisible",method:"updateVisibility"}]},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return".menu-toggle-hidden.sc-ion-menu-toggle-h{display:none}"},enumerable:!0,configurable:!0}),n}();function w(e){var t=e.querySelector("ion-menu-controller");return t?t.componentOnReady():Promise.resolve(void 0)}i.IonMenu=a,i.IonMenuButton=d,i.IonMenuController=y,i.IonMenuToggle=v,Object.defineProperty(i,"__esModule",{value:!0})});