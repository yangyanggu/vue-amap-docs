import{aa as D,m as F,aj as S,aA as U,ak as Z,a8 as O,aB as T,au as V,u as G,k as H,l as N,p as q,ac as J,f as K,aC as j,_ as Q,o as X,c as Y,a as ee,ad as te}from"./app-BIv4BGsj.js";function oe(){const t=[],a="0123456789abcdef";for(let r=0;r<36;r++)t[r]=a.charAt(Math.floor(Math.random()*16));return t[8]=t[13]=t[18]=t[23]="-",t.join("")}function ve(t){return t?t instanceof AMap.Map:!1}function ge(t){return t?t instanceof AMap.OverlayGroup:!1}function _e(t){return t?t instanceof AMap.IndoorMap:!1}function Ee(t){return t?t instanceof AMap.VectorLayer:!1}function ne(t){if(!t||t.length<4)return t;const a=t.substring(3,t.length);return t[2].toLowerCase()+a}const ae=/^on[A-Z]+/;function Ce(t,a){if(!t)throw new Error("请传入url");const r=document.createElement("script");r.type="text/javascript",r.async=!0,r.defer=!0,r.src=t,document.body.appendChild(r),a&&r.addEventListener("load",()=>{a()})}function re(t){return Array.isArray(t)?t.map(re):t.toArray()}function se(t){return t&&t.charAt(0).toUpperCase()+t.slice(1)}function ie(t,a,r){!t||!t.on||t.on(a,r)}function ce(t,a,r){!t||!t.off||t.off(a,r)}const le={visible:{type:Boolean,default:!0},zIndex:{type:Number},reEventWhenUpdate:{type:Boolean,default:!1},extraOptions:{type:Object}},ue=t=>Object.assign({},le,t),$="parentInstance",pe=(t,a)=>{let r=N(),{props:s,attrs:u}=r,c=D($,void 0);const p=a.emits;let f=!1,e;F(()=>{c?c.$amapComponent?y():c.addChildComponent(y):a.isRoot&&y()}),S(()=>{e&&(I(),z(),a.destroyComponent?a.destroyComponent():L(),a.provideData&&(a.provideData.isDestroy=!0),c=void 0,s=void 0,u=void 0,r=void 0,e=void 0)}),U(()=>{s.reEventWhenUpdate&&f&&e&&I()}),Z(()=>{s.reEventWhenUpdate&&f&&e&&w()});const y=()=>{const o=_();t(o,c==null?void 0:c.$amapComponent).then(i=>{e=i,w(),g(),x(),Object.assign(r.ctx,r.exposed),p("init",e,r.ctx),O(()=>{k()}).then(),f=!0})},g=()=>{["editable","visible","zooms"].forEach(i=>{if(s[i]!==void 0){const l=B(i);l&&l.call(e,h(m(i,s[i])))}})},d=a.propsRedirect||{},_=()=>{const o={};return s.extraOptions&&Object.assign(o,s.extraOptions),Object.keys(s).forEach(i=>{let l=i;const v=m(l,s[l]);v!==void 0&&(d&&d[i]&&(l=d[l]),o[l]=v)}),o},n=a.converts||{},m=(o,i)=>n&&n[o]?n[o].call(void 0,i):i,h=o=>T(o)?V(o):G(o);let b=[],A=Object.assign({__visible:o=>{e&&e.show&&e.hide&&(o?e.show():e.hide())},__zIndex(o){e&&e.setzIndex&&e.setzIndex(o)}},a.watchRedirectFn||{});const x=()=>{Object.keys(s).forEach(o=>{let i=o;d&&d[o]&&(i=d[o]);const l=B(i);if(!l)return;const v={deep:!1},M=Object.prototype.toString.call(s[o]);(M==="[object Object]"||M==="[object Array]")&&(v.deep=!0);const R=H(()=>s[o],W=>{l.call(e,h(m(o,W)))},v);b.push(R)})},z=()=>{b.forEach(o=>o()),b=[],A=void 0},B=o=>A[`__${o}`]?A[`__${o}`]:e?e[`set${se(o)}`]:null,E={},w=()=>{Object.keys(u).forEach(o=>{if(ae.test(o)){const i=ne(o);ie(e,i,u[o]),E[i]=u[o]}})},I=()=>{Object.keys(E).forEach(o=>{ce(e,o,E[o]),delete E[o]})},k=()=>{const o=a.needInitComponents||[];for(;o.length>0;)o[0](),o.splice(0,1)},L=()=>{e&&(e.setMap&&e.setMap(null),e.close&&e.close(),e.editor&&e.editor.close())};function P(){return e}return{$$getInstance:P,parentInstance:c,isMounted:f}},de=ue({vid:{type:String},center:{type:Array},zoom:{type:Number},rotation:{type:Number},pitch:{type:Number},viewMode:{type:String},features:{type:Array},layers:{type:Array},zooms:{type:Array},resizeEnable:{type:Boolean,default:!0},dragEnable:{type:Boolean,default:!0},zoomEnable:{type:Boolean,default:!0},jogEnable:{type:Boolean,default:!0},pitchEnable:{type:Boolean,default:!0},rotateEnable:{type:Boolean,default:!0},animateEnable:{type:Boolean,default:!0},keyboardEnable:{type:Boolean,default:!0},doubleClickZoom:{type:Boolean,default:!0},scrollWheel:{type:Boolean,default:!0},touchZoom:{type:Boolean,default:!0},touchZoomCenter:{type:Number},showLabel:{type:Boolean,default:!0},defaultCursor:{type:String},isHotspot:{type:Boolean},mapStyle:{type:String},wallColor:{type:[String,Array]},roofColor:{type:[String,Array]},showBuildingBlock:{type:Boolean,default:!0},showIndoorMap:{type:Boolean,default:!1},skyColor:{type:[String,Array]},labelRejectMask:{type:Boolean,default:!1},mask:{type:Array},WebGLParams:{type:Object},terrain:{type:Boolean,default:!1}}),fe=q({name:"ElAmap",inheritAttrs:!1,__name:"amap",props:de,emits:["init","update:zoom","update:center","update:rotation","update:pitch"],setup(t,{expose:a,emit:r}){const s=[],u={$amapComponent:void 0,addChildComponent(n){s.push(n)},isDestroy:!1};J($,u);const c=t,p=r,f=K(c.vid||oe());let e;const{$$getInstance:y}=pe(n=>new Promise((m,h)=>{if(!j){h(new Error("请初始化initAMapApiLoader"));return}j.then(()=>{O(()=>{e=new AMap.Map(f.value,n),u.$amapComponent=e,g(),m(e)})}).catch(b=>{h(b)})}),{isRoot:!0,emits:p,needInitComponents:s,provideData:u,watchRedirectFn:{__dragEnable(n){e&&e.setStatus({dragEnable:n})},__zoomEnable(n){e&&e.setStatus({zoomEnable:n})},__jogEnable(n){e&&e.setStatus({jogEnable:n})},__keyboardEnable(n){e&&e.setStatus({keyboardEnable:n})},__doubleClickZoom(n){e&&e.setStatus({doubleClickZoom:n})},__scrollWheel(n){e&&e.setStatus({scrollWheel:n})},__rotateEnable(n){e&&e.setStatus({rotateEnable:n})},__resizeEnable(n){e&&e.setStatus({resizeEnable:n})},__showIndoorMap(n){e&&e.setStatus({showIndoorMap:n})}}}),g=()=>{e.on("zoomchange",()=>{p("update:zoom",e.getZoom())}),e.on("rotatechange",()=>{p("update:rotation",e.getRotation()),p("update:pitch",e.getPitch())}),e.on("dragging",()=>{p("update:center",d()),p("update:pitch",e.getPitch())}),e.on("touchmove",()=>{p("update:center",d())})},d=()=>{const n=e.getCenter();return[n.lng,n.lat]};S(()=>{e&&(e.clearEvents(),e.destroy(),e=null)}),a({$$getInstance:y});const _={needInitComponents:s,provideData:u,props:c,emits:p,mapDomId:f,get $amapComponent(){return e},set $amapComponent(n){e=n},$$getInstance:y,bindModelEvents:g,getCenter:d};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}),ye={class:"el-vue-amap-container"},me=["id"];function he(t,a,r,s,u,c){return X(),Y("div",ye,[ee("div",{id:s.mapDomId,class:"el-vue-amap"},null,8,me),te(t.$slots,"default")])}const C=Q(fe,[["render",he],["__file","amap.vue"]]);C.install=t=>(t.component(C.name,C),t);const Ae=C;export{Ae as E,ge as a,ue as b,le as c,Ee as d,ae as e,ne as f,oe as g,ie as h,ve as i,re as j,_e as k,Ce as l,$ as p,pe as u};