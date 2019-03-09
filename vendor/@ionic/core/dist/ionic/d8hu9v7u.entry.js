/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{e as t,f as s}from"./chunk-e7816c0b.js";import{j as i}from"./chunk-b9ec67ac.js";class l{constructor(){this.childOpts=[],this.inputId=`ion-sel-${a++}`,this.isExpanded=!1,this.keyFocus=!1,this.text="",this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={}}disabledChanged(){this.emitStyle()}valueChanged(){if(void 0===this.value)this.childOpts.filter(e=>e.selected).forEach(e=>{e.selected=!1}),this.text="";else{let e=!1;const t=[];this.childOpts.forEach(s=>{Array.isArray(this.value)&&this.value.includes(s.value)||s.value===this.value?(s.selected||!this.multiple&&e?!this.multiple&&e&&s.selected&&(s.selected=!1):s.selected=!0,e=!0):s.selected&&(s.selected=!1),s.selected&&t.push(s.textContent||"")}),this.text=t.join(", ")}this.ionChange.emit({value:this.value,text:this.text}),this.emitStyle()}optLoad(e){const t=e.target;this.childOpts=Array.from(this.el.querySelectorAll("ion-select-option")),null!=this.value&&Array.isArray(this.value)&&this.value.includes(t.value)||t.value===this.value?t.selected=!0:Array.isArray(this.value)&&this.multiple&&t.selected?this.value.push(t.value):void 0===this.value&&t.selected?this.value=t.value:t.selected&&(t.selected=!1)}optUnload(e){const t=this.childOpts.indexOf(e.target);t>-1&&this.childOpts.splice(t,1)}onSelect(e){this.childOpts.forEach(t=>{t===e.target?this.value=t.value:t.selected=!1})}componentWillLoad(){this.value||(this.value=this.multiple?[]:void 0)}componentDidLoad(){this.ionStyle=t(this.ionStyle);const e=this.getLabel();if(e&&(this.labelId=e.id=this.name+"-lbl"),this.multiple){const e=this.childOpts.filter(e=>e.selected);this.value.length=0,e.forEach(e=>{this.value.push(e.value)}),this.text=e.map(e=>e.textContent).join(", ")}else{const e=this.childOpts.find(e=>e.selected);e&&(this.value=e.value,this.text=e.textContent||"")}this.emitStyle()}open(e){let t=this.interface;return"action-sheet"!==t&&"popover"!==t||!this.multiple||(console.warn(`Select interface cannot be "${t}" with a multi-value select. Using the "alert" interface instead.`),t="alert"),"popover"!==t||e||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),t="alert"),"popover"===t?this.openPopover(e):"action-sheet"===t?this.openActionSheet():this.openAlert()}getLabel(){const e=this.el.closest("ion-item");return e?e.querySelector("ion-label"):null}async openPopover(e){const t=this.interfaceOptions,s=Object.assign({},t,{component:"ion-select-popover",cssClass:["select-popover",t.cssClass],event:e,componentProps:{header:t.header,subHeader:t.subHeader,message:t.message,value:this.value,options:this.childOpts.map(e=>({text:e.textContent,value:e.value,checked:e.selected,disabled:e.disabled,handler:()=>{this.value=e.value,this.close()}}))}}),i=this.overlay=await this.popoverCtrl.create(s);return await i.present(),this.isExpanded=!0,i}async openActionSheet(){const e=this.childOpts.map(e=>({role:e.selected?"selected":"",text:e.textContent,handler:()=>{this.value=e.value}}));e.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}});const t=this.interfaceOptions,s=Object.assign({},t,{buttons:e,cssClass:["select-action-sheet",t.cssClass]}),i=this.overlay=await this.actionSheetCtrl.create(s);return await i.present(),this.isExpanded=!0,i}async openAlert(){const e=this.getLabel(),t=this.interfaceOptions,s=this.multiple?"checkbox":"radio",i=Object.assign({},t,{header:t.header?t.header:e?e.textContent:null,inputs:this.childOpts.map(e=>({type:s,label:e.textContent,value:e.value,checked:e.selected,disabled:e.disabled})),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.okText,handler:e=>{this.value=e}}],cssClass:["select-alert",t.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]}),l=this.overlay=await this.alertCtrl.create(i);return await l.present(),this.isExpanded=!0,l}close(){if(!this.overlay)return Promise.resolve(!1);const e=this.overlay;return this.overlay=void 0,this.isExpanded=!1,e.dismiss()}onKeyUp(){this.keyFocus=!0}onFocus(){this.ionFocus.emit()}onBlur(){this.keyFocus=!1,this.ionBlur.emit()}hasValue(){return Array.isArray(this.value)?this.value.length>0:null!=this.value&&void 0!==this.value&&""!==this.value}emitStyle(){this.ionStyle.emit({interactive:!0,select:!0,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})}hostData(){return{class:{"in-item":i("ion-item",this.el),"select-disabled":this.disabled,"select-key":this.keyFocus}}}render(){s(this.el,this.name,function(e){if(null!=e)return Array.isArray(e)?e.join(","):e.toString()}(this.value),this.disabled);let t=!1,i=this.selectedText||this.text;return""===i&&null!=this.placeholder&&(i=this.placeholder,t=!0),[e("div",{role:"textbox","aria-multiline":"false",class:{"select-text":!0,"select-placeholder":t}},i),e("div",{class:"select-icon",role:"presentation"},e("div",{class:"select-icon-inner"})),e("button",{type:"button",role:"combobox","aria-haspopup":"dialog","aria-labelledby":this.labelId,"aria-expanded":this.isExpanded?"true":null,"aria-disabled":this.disabled?"true":null,onClick:this.open.bind(this),onKeyUp:this.onKeyUp.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),class:"select-cover"},e("slot",null),"md"===this.mode&&e("ion-ripple-effect",null))]}static get is(){return"ion-select"}static get encapsulation(){return"shadow"}static get properties(){return{actionSheetCtrl:{connect:"ion-action-sheet-controller"},alertCtrl:{connect:"ion-alert-controller"},cancelText:{type:String,attr:"cancel-text"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},interface:{type:String,attr:"interface"},interfaceOptions:{type:"Any",attr:"interface-options"},isExpanded:{state:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},multiple:{type:Boolean,attr:"multiple"},name:{type:String,attr:"name"},okText:{type:String,attr:"ok-text"},open:{method:!0},placeholder:{type:String,attr:"placeholder"},popoverCtrl:{connect:"ion-popover-controller"},selectedText:{type:String,attr:"selected-text"},text:{state:!0},value:{type:"Any",attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionSelectOptionDidLoad",method:"optLoad"},{name:"ionSelectOptionDidUnload",method:"optUnload"},{name:"ionSelect",method:"onSelect"}]}static get style(){return":host{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden;--color:var(--ion-text-color, #000);--icon-color:var(--ion-text-color-step-650, #a6a6a6);--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px;--placeholder-color:var(--ion-text-color-step-650, #a6a6a6)}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.select-key) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color)}.select-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.select-icon{position:relative}.select-text{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:var(--icon-color);pointer-events:none}::slotted(ion-select-option){display:none}button:focus{outline:0}.select-icon{width:12px;height:18px}"}static get styleMode(){return"ios"}}let a=0;class n{constructor(){this.inputId=`ion-selopt-${o++}`,this.disabled=!1,this.selected=!1}componentWillLoad(){null==this.value&&(this.value=this.el.textContent||"")}componentDidLoad(){this.ionSelectOptionDidLoad.emit()}componentDidUnload(){this.ionSelectOptionDidUnload.emit()}hostData(){return{role:"option",id:this.inputId}}static get is(){return"ion-select-option"}static get properties(){return{disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},selected:{type:Boolean,attr:"selected"},value:{type:"Any",attr:"value",mutable:!0}}}static get events(){return[{name:"ionSelectOptionDidLoad",method:"ionSelectOptionDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionSelectOptionDidUnload",method:"ionSelectOptionDidUnload",bubbles:!0,cancelable:!0,composed:!0}]}}let o=0;class c{constructor(){this.options=[]}onSelect(e){const t=this.options.find(t=>t.value===e.target.value);t&&t.handler&&t.handler()}render(){return e("ion-list",null,void 0!==this.header&&e("ion-list-header",null,this.header),(void 0!==this.subHeader||void 0!==this.message)&&e("ion-item",null,e("ion-label",{"text-wrap":!0},void 0!==this.subHeader&&e("h3",null,this.subHeader),void 0!==this.message&&e("p",null,this.message))),e("ion-radio-group",null,this.options.map(t=>e("ion-item",null,e("ion-label",null,t.text),e("ion-radio",{checked:t.checked,value:t.value,disabled:t.disabled})))))}static get is(){return"ion-select-popover"}static get encapsulation(){return"scoped"}static get properties(){return{header:{type:String,attr:"header"},message:{type:String,attr:"message"},options:{type:"Any",attr:"options"},subHeader:{type:String,attr:"sub-header"}}}static get listeners(){return[{name:"ionSelect",method:"onSelect"}]}static get style(){return".sc-ion-select-popover-h   ion-list.sc-ion-select-popover{margin:-1px 0}.sc-ion-select-popover-h   ion-label.sc-ion-select-popover, .sc-ion-select-popover-h   ion-list-header.sc-ion-select-popover{margin:0}"}}export{l as IonSelect,n as IonSelectOption,c as IonSelectPopover};