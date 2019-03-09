/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{h as e}from"./chunk-b9ec67ac.js";class r{render(){return t("slot",null)}static get is(){return"ion-avatar"}static get encapsulation(){return"shadow"}static get style(){return".sc-ion-avatar-ios-h{border-radius:var(--border-radius);display:block;--border-radius:50%;width:48px;height:48px}.sc-ion-avatar-ios-s > img, .sc-ion-avatar-ios-s > ion-img{border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}"}static get styleMode(){return"ios"}}class a{hostData(){return{class:e(this.color)}}render(){return t("slot",null)}static get is(){return"ion-badge"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}}static get style(){return".sc-ion-badge-ios-h{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:13px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline;border-radius:10px}.ion-color.sc-ion-badge-ios-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.sc-ion-badge-ios-h:empty{display:none}"}static get styleMode(){return"ios"}}class s{render(){return t("slot",null)}static get is(){return"ion-thumbnail"}static get encapsulation(){return"shadow"}static get style(){return".sc-ion-thumbnail-h{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}.sc-ion-thumbnail-s > img, .sc-ion-thumbnail-s > ion-img{border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}"}}export{r as IonAvatar,a as IonBadge,s as IonThumbnail};