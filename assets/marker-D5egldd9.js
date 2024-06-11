import{b as O,u as D,i as j,a as F,E as z}from"./index-XVBT3eyP.js";import{p as S,am as I,f as p,_ as w,o as b,c as A,a as u,ad as R,d as h,w as B,al as C,az as V,ao as E,q as L}from"./app-BIv4BGsj.js";const T=O({position:{type:[Array,Object],required:!0},icon:{type:[String,Object]},content:{type:[String,typeof HTMLElement>"u"?Object:HTMLElement]},title:{type:String},offset:{type:[Array,Object]},anchor:{type:[String,Array]},angle:{type:Number},clickable:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},bubble:{type:Boolean,default:!1},zooms:{type:Array},cursor:{type:String},topWhenClick:{type:Boolean,default:!1},label:{type:Object},extData:null,moveOptions:{type:Object,default:()=>null}}),N=S({name:"ElAmapMarker",inheritAttrs:!1,__name:"Marker",props:O(T),emits:["init","update:position"],setup(s,{expose:m,emit:d}){const e=s,l=d;let t,a=!1;const c=I();let r;const g=p(),{$$getInstance:v,parentInstance:i}=D((o,n)=>new Promise(P=>{if(c.default&&c.default().length>0&&(a=!0,o.content=k()),t=new AMap.Marker(o),j(n)?n.add(t):F(n)&&n.addOverlay(t),a){const x={attributes:!0,childList:!0,subtree:!0};r=new MutationObserver(()=>{t.setContent(k())}),r.observe(g.value,x)}M(),P(t)}),{emits:l,watchRedirectFn:{__position(o){if(!e.moveOptions){t.setPosition(o);return}i!=null&&i.$amapComponent&&i.$amapComponent.plugin("AMap.MoveAnimation",()=>{t.moveTo(o,e.moveOptions)})}},destroyComponent(){r&&(r.disconnect(),r=null),t&&(i!=null&&i.$amapComponent)&&(t.setMap(null),t=null)}}),k=()=>g.value,M=()=>{t.on("dragend",()=>{f()}),t.on("touchend",()=>{f()})},f=()=>{const o=t.getPosition();l("update:position",o.toArray())};m({$$getInstance:v});const y={props:e,emits:l,get $amapComponent(){return t},set $amapComponent(o){t=o},get withSlot(){return a},set withSlot(o){a=o},$slots:c,get observer(){return r},set observer(o){r=o},contentRef:g,$$getInstance:v,parentInstance:i,getSlotContent:k,bindModelEvents:M,emitPosition:f};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}),q={style:{display:"none"}},H={ref:"contentRef"};function G(s,m,d,e,l,t){return b(),A("div",q,[u("div",H,[R(s.$slots,"default")],512)])}const _=w(N,[["render",G],["__file","Marker.vue"]]);_.install=s=>(s.component(_.name,_),s);const W=_,J=S({__name:"marker",setup(s,{expose:m}){m();const d=p(16),e=p([121.5273285,31.21515044]),l=p([{position:[121.5273285,31.21515044],id:1}]),t=p({position:[121.5273285,31.21315058],visible:!0,draggable:!1}),a=p({position:[121.5283285,31.21315058],content:"hello world"}),c=p({duration:200,autoRotation:!1}),o={zoom:d,center:e,markers:l,componentMarker:t,componentMarker2:a,moveOptions:c,clickMap:n=>{console.log("click map: ",n)},initMap:n=>{console.log("init map: ",n)},clickMarker:()=>{alert("点击了标号")},changePosition:()=>{const n=t.value.position;t.value.position=[n[0]+2e-4,n[1]-2e-4]},changeDraggable:()=>{t.value.draggable=!t.value.draggable},toggleVisible:()=>{t.value.visible=!t.value.visible},markerInit:n=>{console.log("marker init: ",n)},clickArrayMarker:n=>{alert(`点击了标号,标号ID： ${n.id}`)},get ElAmap(){return z},get ElAmapMarker(){return W}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),K={class:"map-page-container"},Q=u("div",{style:{padding:"5px 10px","white-space":"nowrap",background:"blue",color:"#fff"}}," 测试content ",-1),U={class:"control-container"};function X(s,m,d,e,l,t){return b(),A(C,null,[u("div",K,[h(e.ElAmap,{"show-label":!1,center:e.center,zoom:e.zoom,onClick:e.clickMap,onInit:e.initMap},{default:B(()=>[h(e.ElAmapMarker,{position:e.componentMarker.position,visible:e.componentMarker.visible,draggable:e.componentMarker.draggable,"move-options":e.moveOptions,onInit:e.markerInit,onClick:e.clickMarker},{default:B(()=>[Q]),_:1},8,["position","visible","draggable","move-options"]),h(e.ElAmapMarker,{position:e.componentMarker2.position,content:e.componentMarker2.content},null,8,["position","content"]),(b(!0),A(C,null,V(e.markers,(a,c)=>(b(),L(e.ElAmapMarker,{key:c,position:a.position,onClick:r=>{e.clickArrayMarker(a,r)}},null,8,["position","onClick"]))),128))]),_:1},8,["center","zoom"])]),u("div",U,[u("button",{onClick:e.changePosition}," 更换位置 "),u("button",{onClick:e.toggleVisible},E(e.componentMarker.visible?"隐藏标记":"显示标记"),1),u("button",{onClick:e.changeDraggable},E(e.componentMarker.draggable?"禁止标记移动":"允许标记移动"),1)])],64)}const $=w(J,[["render",X],["__file","marker.vue"]]);export{$ as default};