/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var e=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))(function(r,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function a(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){e.done?r(e.value):new o(function(t){t(e.value)}).then(s,a)}l((n=n.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var o,n,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{o=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Ionic.loadBundle("pjlyljxh",["exports","./chunk-dd673b2a.js","./chunk-40cd1a1b.js","./chunk-80b321f6.js"],function(o,n,r,i){var s=window.Ionic.h;function a(e,t,o){var n="top",r="left",i=t.querySelector(".popover-content"),s=i.getBoundingClientRect(),a=s.width,p=s.height,c=window.innerWidth,d=window.innerHeight,u=o&&o.target&&o.target.getBoundingClientRect(),m=null!=u&&"top"in u?u.top:d/2-p/2,f=null!=u&&"left"in u?u.left:c/2,h=u&&u.width||0,v=u&&u.height||0,y=t.querySelector(".popover-arrow"),b=y.getBoundingClientRect(),g=b.width,w=b.height;null==u&&(y.style.display="none");var P={top:m+v,left:f+h/2-g/2},D={top:m+v+(w-1),left:f+h/2-a/2},E=!1,k=!1;D.left<l+25?(E=!0,D.left=l):a+l+D.left+25>c&&(k=!0,D.left=c-a-l,r="right"),m+v+p>d&&m-p>0?(P.top=m-(w+1),console.log(P),console.log(m),console.log(p),D.top=m-p-(w-1),t.className=t.className+" popover-bottom",n="bottom"):m+v+p>d&&(i.style.bottom=l+"%"),y.style.top=P.top+"px",y.style.left=P.left+"px",i.style.top=D.top+"px",i.style.left=D.left+"px",E&&(i.style.left="calc("+D.left+"px + var(--ion-safe-area-left, 0px))"),k&&(i.style.left="calc("+D.left+"px - var(--ion-safe-area-right, 0px))"),i.style.transformOrigin=n+" "+r;var x=new e,S=new e;S.addElement(t.querySelector("ion-backdrop")),S.fromTo("opacity",.01,.08);var O=new e;return O.addElement(t.querySelector(".popover-wrapper")),O.fromTo("opacity",.01,1),Promise.resolve(x.addElement(t).easing("ease").duration(100).add(S).add(O))}var l=5;function p(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),n.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(r))}function c(e,t,o){var n="top",r="left",i=t.querySelector(".popover-content"),s=i.getBoundingClientRect(),a=s.width,l=s.height,p=window.innerWidth,c=window.innerHeight,u=o&&o.target&&o.target.getBoundingClientRect(),m=null!=u&&"top"in u?u.top:c/2-l/2,f=u&&u.height||0,h={top:m,left:null!=u&&"left"in u?u.left:p/2-a/2};h.left<d?h.left=d:a+d+h.left>p&&(h.left=p-a-d,r="right"),m+f+l>c&&m-l>0?(h.top=m-l,t.className=t.className+" popover-bottom",n="bottom"):m+f+l>c&&(i.style.bottom=d+"px"),i.style.top=h.top+"px",i.style.left=h.left+"px",i.style.transformOrigin=n+" "+r;var v=new e,y=new e;y.addElement(t.querySelector("ion-backdrop")),y.fromTo("opacity",.01,.08);var b=new e;b.addElement(t.querySelector(".popover-wrapper")),b.fromTo("opacity",.01,1);var g=new e;g.addElement(t.querySelector(".popover-content")),g.fromTo("scale",.001,1);var w=new e;return w.addElement(t.querySelector(".popover-viewport")),w.fromTo("opacity",.01,1),Promise.resolve(v.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(y).add(b).add(g).add(w))}var d=12;function u(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),n.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(r))}var m=function(){function o(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}return o.prototype.componentDidLoad=function(){this.ionPopoverDidLoad.emit()},o.prototype.componentDidUnload=function(){this.ionPopoverDidUnload.emit()},o.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},o.prototype.onBackdropTap=function(){this.dismiss(void 0,r.BACKDROP)},o.prototype.lifecycle=function(e){var t=this.usersElement,o=f[e.type];if(t&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(n)}},o.prototype.present=function(){return e(this,void 0,void 0,function(){var e,o,s;return t(this,function(t){switch(t.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return o=Object.assign({},this.componentProps,{popover:this.el}),s=this,[4,n.attachComponent(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],o)];case 1:return s.usersElement=t.sent(),[4,i.deepReady(this.usersElement)];case 2:return t.sent(),[2,r.present(this,"popoverEnter",a,c,this.event)]}})})},o.prototype.dismiss=function(o,i){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return[4,r.dismiss(this,o,i,"popoverLeave",p,u,this.event)];case 1:return(e=t.sent())?[4,n.detachComponent(this.delegate,this.usersElement)]:[3,3];case 2:t.sent(),t.label=3;case 3:return[2,e]}})})},o.prototype.onDidDismiss=function(){return r.eventMethod(this.el,"ionPopoverDidDismiss")},o.prototype.onWillDismiss=function(){return r.eventMethod(this.el,"ionPopoverWillDismiss")},o.prototype.hostData=function(){return{style:{zIndex:2e4+this.overlayIndex},"no-router":!0,class:Object.assign({"popover-translucent":this.translucent},n.getClassMap(this.cssClass))}},o.prototype.render=function(){return[s("ion-backdrop",{tappable:this.backdropDismiss}),s("div",{class:"popover-wrapper"},s("div",{class:"popover-arrow"}),s("div",{class:"popover-content"}))]},Object.defineProperty(o,"is",{get:function(){return"ion-popover"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},event:{type:"Any",attr:"event"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(o,"events",{get:function(){return[{name:"ionPopoverDidLoad",method:"ionPopoverDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidUnload",method:"ionPopoverDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(o,"listeners",{get:function(){return[{name:"ionDismiss",method:"onDismiss"},{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionPopoverDidPresent",method:"lifecycle"},{name:"ionPopoverWillPresent",method:"lifecycle"},{name:"ionPopoverWillDismiss",method:"lifecycle"},{name:"ionPopoverDidDismiss",method:"lifecycle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(o,"style",{get:function(){return".sc-ion-popover-ios-h{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:1000}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;z-index:10;border-radius:10px;width:200px;min-width:0;min-height:0;max-height:90%;background-color:var(--ion-background-color,#fff);color:var(--ion-text-color,#000)}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background-color:var(--ion-background-color,#fff);content:\"\";z-index:10}.popover-bottom.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios::after{top:-6px}.popover-translucent.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios::after, .popover-translucent.sc-ion-popover-ios-h   .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),o}(),f={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillDismiss",ionPopoverDidDismiss:"ionViewDidDismiss"},h=function(){function o(){}return o.prototype.create=function(e){return r.createOverlay(this.doc.createElement("ion-popover"),e)},o.prototype.dismiss=function(e,t,o){return r.dismissOverlay(this.doc,e,t,"ion-popover",o)},o.prototype.getTop=function(){return e(this,void 0,void 0,function(){return t(this,function(e){return[2,r.getOverlay(this.doc,"ion-popover")]})})},Object.defineProperty(o,"is",{get:function(){return"ion-popover-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),o}();o.IonPopover=m,o.IonPopoverController=h,Object.defineProperty(o,"__esModule",{value:!0})});