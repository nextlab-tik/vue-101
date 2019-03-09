/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{k as t}from"./chunk-b9ec67ac.js";const i="split-pane-main",s="split-pane-side",n={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""};class a{constructor(){this.visible=!1,this.disabled=!1,this.when=n.lg}visibleChanged(e){const t={visible:e,isPane:this.isPane.bind(this)};this.ionChange.emit(t),this.ionSplitPaneVisible.emit(t)}componentDidLoad(){this.styleChildren(),this.updateState()}componentDidUnload(){this.rmL&&(this.rmL(),this.rmL=void 0)}updateState(){if(this.isServer)return;if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)return void(this.visible=!1);const e=this.when;if("boolean"==typeof e)return void(this.visible=e);const t=n[e]||e;if(0===t.length)return void(this.visible=!1);const i=e=>this.visible=e.matches,s=this.win.matchMedia(t);s.addListener(i),this.rmL=(()=>s.removeListener(i)),this.visible=s.matches}isPane(e){return!!this.visible&&e.parentElement===this.el&&e.classList.contains(s)}styleChildren(){if(this.isServer)return;const e=this.el.children,t=this.el.childElementCount;let i=!1;for(let s=0;s<t;s++){const t=e[s],n=t.hasAttribute("main");if(n){if(i)return void console.warn("split pane can not have more than one main node");i=!0}l(t,n)}i||console.warn("split pane could not found any main node")}hostData(){return{class:Object.assign({},t(this.mode,"split-pane"),{"split-pane-visible":this.visible})}}static get is(){return"ion-split-pane"}static get properties(){return{disabled:{type:Boolean,attr:"disabled",watchCallbacks:["updateState"]},el:{elementRef:!0},isServer:{context:"isServer"},visible:{state:!0,watchCallbacks:["visibleChanged"]},when:{type:"Any",attr:"when",watchCallbacks:["updateState"]},win:{context:"window"}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!1,cancelable:!0,composed:!0},{name:"ionSplitPaneVisible",method:"ionSplitPaneVisible",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".split-pane{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.split-pane-ios{--border:0.55px solid var(--ion-item-border-color, #c8c7cc)}.split-pane-ios.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:var(--border);border-left:0}.split-pane-ios.split-pane-visible>.split-pane-side[side=end]{min-width:270px;max-width:28%;border-right:0;border-left:var(--border)}"}static get styleMode(){return"ios"}}function l(e,t){let n,a;t?(n=i,a=s):(n=s,a=i);const l=e.classList;l.add(n),l.remove(a)}export{a as IonSplitPane};