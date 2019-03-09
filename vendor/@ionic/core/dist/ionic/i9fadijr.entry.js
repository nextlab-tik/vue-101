/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{g as e,e as a,f as i}from"./chunk-e7816c0b.js";import{h as s}from"./chunk-b9ec67ac.js";class n{constructor(){this.inputId=`ion-input-${o++}`,this.didBlurAfterEdit=!1,this.hasFocus=!1,this.autocapitalize="none",this.autofocus=!1,this.clearOnEdit=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.value=""}debounceChanged(){this.ionChange=e(this.ionChange,this.debounce)}disabledChanged(){this.emitStyle()}valueChanged(){const{nativeInput:t,value:e}=this;t.value!==e&&(t.value=e),this.ionChange.emit({value:e})}componentDidLoad(){this.ionStyle=a(this.ionStyle),this.debounceChanged(),this.emitStyle()}focus(){this.nativeInput&&this.nativeInput.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,textarea:!0,input:!0,"interactive-disabled":this.disabled,"has-value":this.hasValue(),"has-focus":this.hasFocus})}onInput(t){this.value=this.nativeInput.value,this.emitStyle(),this.ionInput.emit(t)}onFocus(){this.hasFocus=!0,this.focusChange(),this.ionFocus.emit()}onBlur(){this.hasFocus=!1,this.focusChange(),this.ionBlur.emit()}onKeyDown(){this.checkClearOnEdit()}checkClearOnEdit(){this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&(this.value=""),this.didBlurAfterEdit=!1)}focusChange(){this.clearOnEdit&&!this.hasFocus&&this.hasValue()&&(this.didBlurAfterEdit=!0),this.emitStyle()}hasValue(){return""!==this.value}hostData(){return{class:Object.assign({},s(this.color))}}render(){return i(this.el,this.name,this.value,this.disabled),t("textarea",{class:"native-textarea",ref:t=>this.nativeInput=t,autoCapitalize:this.autocapitalize,autoFocus:this.autofocus,disabled:this.disabled,maxLength:this.maxlength,minLength:this.minlength,name:this.name,placeholder:this.placeholder,readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,cols:this.cols,rows:this.rows,wrap:this.wrap,onInput:this.onInput.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),onKeyDown:this.onKeyDown.bind(this)},this.value)}static get is(){return"ion-textarea"}static get encapsulation(){return"shadow"}static get properties(){return{autocapitalize:{type:String,attr:"autocapitalize"},autofocus:{type:Boolean,attr:"autofocus"},clearOnEdit:{type:Boolean,attr:"clear-on-edit",mutable:!0},color:{type:String,attr:"color"},cols:{type:Number,attr:"cols"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},focus:{method:!0},hasFocus:{state:!0},maxlength:{type:Number,attr:"maxlength"},minlength:{type:Number,attr:"minlength"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},placeholder:{type:String,attr:"placeholder"},readonly:{type:Boolean,attr:"readonly"},required:{type:Boolean,attr:"required"},rows:{type:Number,attr:"rows"},spellcheck:{type:Boolean,attr:"spellcheck"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]},wrap:{type:String,attr:"wrap"}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{--background:initial;--color:currentColor;--placeholder-color:currentColor;--placeholder-font-style:inherit;--placeholder-font-weight:inherit;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:0;font-size:inherit}:host(.ion-color){background:initial;color:var(--ion-color-base)}:host(.in-item){position:static}.native-textarea{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);margin:0;padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:block;width:100%;height:100%;border:0;outline:0;background:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.native-textarea::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled]{opacity:.4}"}static get styleMode(){return"ios"}}let o=0;export{n as IonTextarea};