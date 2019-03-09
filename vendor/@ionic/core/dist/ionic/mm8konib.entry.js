/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{h as i}from"./chunk-b9ec67ac.js";import{h as e}from"./chunk-e7816c0b.js";class s{constructor(){this.disabled=!1,this.expandable=!1}clickedOptionButton(t){return!!t.target.closest("ion-item-option")}hostData(){return{"ion-activatable":!0,class:Object.assign({},i(this.color),{"item-option-expandable":this.expandable})}}render(){return t(void 0===this.href?"button":"a",{type:"button",class:"button-native",disabled:this.disabled,href:this.href,onClick:this.clickedOptionButton.bind(this)},t("span",{class:"button-inner"},t("slot",{name:"start"}),t("slot",{name:"top"}),t("slot",{name:"icon-only"}),t("slot",null),t("slot",{name:"bottom"}),t("slot",{name:"end"})),"md"===this.mode&&t("ion-ripple-effect",null))}static get is(){return"ion-item-option"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},expandable:{type:Boolean,attr:"expandable"},href:{type:String,attr:"href"},mode:{type:String,attr:"mode"}}}static get style(){return":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding:0 .7em;position:relative;width:100%;height:100%;border:0;outline:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}::slotted([slot=icon-only]){padding:0;margin:0 10px;min-width:.9em;font-size:1.8em}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(.65,.05,.36,1);transition-timing-function:cubic-bezier(.65,.05,.36,1)}:host{font-size:14px;font-weight:500;text-transform:uppercase}"}static get styleMode(){return"md"}}class o{constructor(){this.side="end"}fireSwipeEvent(){this.ionSwipe.emit({side:this.side})}hostData(){const t=e(this.win,this.side);return{class:{"item-options-start":!t,"item-options-end":t}}}static get is(){return"ion-item-options"}static get properties(){return{el:{elementRef:!0},fireSwipeEvent:{method:!0},side:{type:String,attr:"side"},win:{context:"window"}}}static get events(){return[{name:"ionSwipe",method:"ionSwipe",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-item-options{top:0;right:0;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}.item-options-start{right:auto;left:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}.item-sliding-active-slide ion-item-options{display:-webkit-box;display:-ms-flexbox;display:flex}.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start),.item-sliding-active-slide.item-sliding-active-options-start .item-options-start{width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:rgba(var(--ion-item-border-color-rgb,0,0,0),.13)}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}"}static get styleMode(){return"md"}}const n=30,h=.55;let a;class r{constructor(){this.item=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.state=2,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.setDisabled(this.disabled)}async componentDidLoad(){this.item=this.el.querySelector("ion-item"),await this.updateOptions(),this.gesture=(await import("./gesture.js")).createGesture({el:this.el,queue:this.queue,gestureName:"item-swipe",gesturePriority:100,threshold:5,canStart:()=>this.canStart(),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.disabledChanged()}componentDidUnload(){this.gesture&&this.gesture.destroy(),this.item=null,this.leftOptions=this.rightOptions=void 0}getOpenAmount(){return Promise.resolve(this.openAmount)}getSlidingRatio(){return Promise.resolve(this.getSlidingRatioSync())}async close(){this.setOpenAmount(0,!0)}async closeOpened(){return void 0!==a&&(a.close(),!0)}async updateOptions(){const t=this.el.querySelectorAll("ion-item-options");let i=0;this.leftOptions=this.rightOptions=void 0;for(let e=0;e<t.length;e++){const s=await t.item(e).componentOnReady();"start"===s.side?(this.leftOptions=s,i|=1):(this.rightOptions=s,i|=2)}this.optsDirty=!0,this.sides=i}canStart(){return a&&a!==this.el?(this.closeOpened(),!1):!(!this.rightOptions&&!this.leftOptions)}onStart(){a=this.el,void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")}onMove(t){this.optsDirty&&this.calculateOptsWidth();let i,e=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:e=Math.max(0,e);break;case 1:e=Math.min(0,e);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}e>this.optsWidthRightSide?e=(i=this.optsWidthRightSide)+(e-i)*h:e<-this.optsWidthLeftSide&&(e=(i=-this.optsWidthLeftSide)+(e-i)*h),this.setOpenAmount(e,!1)}onEnd(t){const i=t.velocityX;let e=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide;(function(t,i,e){return!i&&e||t&&i})(this.openAmount>0==!(i<0),Math.abs(i)>.3,Math.abs(this.openAmount)<Math.abs(e/2))&&(e=0);const s=this.state;this.setOpenAmount(e,!0),0!=(32&s)&&this.rightOptions?this.rightOptions.fireSwipeEvent():0!=(64&s)&&this.leftOptions&&this.leftOptions.fireSwipeEvent()}calculateOptsWidth(){this.optsWidthRightSide=0,this.rightOptions&&(this.optsWidthRightSide=this.rightOptions.offsetWidth),this.optsWidthLeftSide=0,this.leftOptions&&(this.optsWidthLeftSide=this.leftOptions.offsetWidth),this.optsDirty=!1}setOpenAmount(t,i){if(void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),!this.item)return;const e=this.item.style;if(this.openAmount=t,i&&(e.transition=""),t>0)this.state=t>=this.optsWidthRightSide+n?40:8;else{if(!(t<0))return this.tmr=window.setTimeout(()=>{this.state=2,this.tmr=void 0},600),a=void 0,void(e.transform="");this.state=t<=-this.optsWidthLeftSide-n?80:16}e.transform=`translate3d(${-t}px,0,0)`,this.ionDrag.emit({amount:t,ratio:this.getSlidingRatioSync()})}getSlidingRatioSync(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0}hostData(){return{class:{"item-sliding-active-slide":2!==this.state,"item-sliding-active-options-end":0!=(8&this.state),"item-sliding-active-options-start":0!=(16&this.state),"item-sliding-active-swipe-end":0!=(32&this.state),"item-sliding-active-swipe-start":0!=(64&this.state)}}}static get is(){return"ion-item-sliding"}static get properties(){return{close:{method:!0},closeOpened:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},getOpenAmount:{method:!0},getSlidingRatio:{method:!0},queue:{context:"queue"},state:{state:!0}}}static get events(){return[{name:"ionDrag",method:"ionDrag",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1),-webkit-transform .5s cubic-bezier(.36,.66,.04,1);background:var(--ion-item-background-color,var(--ion-background-color,#fff));opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:90%;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-left;transition-property:padding-left}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:90%;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-right;transition-property:padding-right}"}}export{s as IonItemOption,o as IonItemOptions,r as IonItemSliding};