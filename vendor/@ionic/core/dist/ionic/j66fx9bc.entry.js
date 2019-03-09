/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{b as t}from"./chunk-e7816c0b.js";class i{addRipple(e,i){this.config.getBoolean("animated",!0)&&t(()=>this.prepareRipple(e,i))}prepareRipple(e,t){let i,p,a;this.queue.read(()=>{const n=this.el.getBoundingClientRect(),o=n.width,c=n.height;a=Math.min(2*Math.sqrt(o*o+c*c),s),i=e-n.left-.5*a,p=t-n.top-.5*a}),this.queue.write(()=>{const e=this.win.document.createElement("div");e.classList.add("ripple-effect");const t=e.style,s=Math.max(n*Math.sqrt(a),o);t.top=p+"px",t.left=i+"px",t.width=t.height=a+"px",t.animationDuration=s+"ms",(this.el.shadowRoot||this.el).appendChild(e),setTimeout(()=>e.remove(),s+50)})}static get is(){return"ion-ripple-effect"}static get encapsulation(){return"shadow"}static get properties(){return{addRipple:{method:!0},config:{context:"config"},el:{elementRef:!0},queue:{context:"queue"},win:{context:"window"}}}static get style(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;will-change:transform,opacity;pointer-events:none}\@-webkit-keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}\@keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}"}}const n=35,o=260,s=550;export{i as IonRippleEffect};