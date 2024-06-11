import{b as w,c as M,u as j,a as P,E as z}from"./index-C2AhXWuI.js";import{p as x,_ as C,o as A,c as k,f as d,a as v,d as S,w as E,ao as B,al as F}from"./app-BIv4BGsj.js";import{u as I,E as O}from"./index-XVBT3eyP.js";const W=x({name:"ElAmapLocaLaser",inheritAttrs:!1,__name:"LaserLayer",props:w({depth:{type:Boolean,default:!0}}),emits:M,setup(s,{expose:m,emit:u}){const t=s,i=u;let o,n,l;const{$$getInstance:p,parentInstance:h}=I(a=>new Promise(f=>{o=new Loca.LaserLayer(a);const _=P({parentInstance:h,$amapComponent:o,emits:i,props:t,setStyle(){const r=Object.assign({},{unit:"px",height:200,color:"rgba(255,255,0,0.5)",angle:0,lineWidth:2,trailLength:30,duration:2e3,interval:0,delay:0,repeat:void 0},t.defaultStyleValue),b={unit:r.unit,height:(g,e)=>(e.properties=e.properties||{},e.properties.height===void 0?r.height:e.properties.height),color:(g,e)=>(e.properties=e.properties||{},e.properties.color===void 0?r.color:e.properties.color),angle:r.angle,lineWidth:r.lineWidth,trailLength:r.trailLength,duration:(g,e)=>(e.properties=e.properties||{},e.properties.duration===void 0?r.duration:e.properties.duration),interval:(g,e)=>(e.properties=e.properties||{},e.properties.interval===void 0?r.interval:e.properties.interval),delay:(g,e)=>(e.properties=e.properties||{},e.properties.delay===void 0?r.delay:e.properties.delay),repeat:r.repeat},V=Object.assign({},b,t.layerStyle);o.setStyle(V)}});n=_._destroyComponent,l=_.setSource,f(o)}),{emits:i,watchRedirectFn:j({setSource(){l&&l()},$amapComponent:()=>o,props:t}),destroyComponent(){n&&n(),o=null}});m({$$getInstance:p});const L={props:t,emits:i,get $amapComponent(){return o},set $amapComponent(a){o=a},get _destroyComponent(){return n},set _destroyComponent(a){n=a},get _setSource(){return l},set _setSource(a){l=a},$$getInstance:p,parentInstance:h};return Object.defineProperty(L,"__isScriptSetup",{enumerable:!1,value:!0}),L}});function D(s,m,u,t,i,o){return A(),k("div")}const y=C(W,[["render",D],["__file","LaserLayer.vue"]]);y.install=s=>(s.component(y.name,y),s);const N=y,R=x({__name:"laser",setup(s,{expose:m}){m();const u=d(4.8),t=d([105.601,35.32]),i=d(55),o=d("https://a.amap.com/Loca/static/loca-v2/demos/mock_data/gdp.json"),n=["rgba(254,255,198,0.95)","rgba(255,238,149,0.95)","rgba(255,217,99,0.95)","rgba(255,175,43,0.95)","rgba(255,135,24,0.95)","rgba(234,10,0,0.95)","rgba(195,0,0,0.95)","rgba(139,0,0,0.95)"],l=d({unit:"px",color:(c,r)=>{const b=Math.min(7,~~(r.properties.人均GDP/1e4));return n[b]}}),p=d(!0),_={zoom:u,center:t,pitch:i,sourceUrl:o,colors:n,layerStyle:l,visible:p,changeVisible:()=>{p.value=!p.value},clickMap:c=>{console.log("click map: ",c)},initMap:c=>{console.log("init map: ",c)},initLoca:c=>{c.animate.start()},get ElAmap(){return O},get ElAmapLoca(){return z},get ElAmapLocaLaser(){return N}};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}),U={class:"map-page-container"},$={class:"toolbar"};function G(s,m,u,t,i,o){return A(),k(F,null,[v("div",U,[S(t.ElAmap,{"view-mode":"3D",pitch:t.pitch,"show-label":!1,center:t.center,zoom:t.zoom,onClick:t.clickMap,onInit:t.initMap},{default:E(()=>[S(t.ElAmapLoca,{onInit:t.initLoca},{default:E(()=>[S(t.ElAmapLocaLaser,{visible:t.visible,"source-url":t.sourceUrl,"layer-style":t.layerStyle,"visible-duration":500},null,8,["visible","source-url","layer-style"])]),_:1})]),_:1},8,["pitch","center","zoom"])]),v("div",$,[v("button",{onClick:t.changeVisible},B(t.visible?"隐藏":"显示"),1)])],64)}const K=C(R,[["render",G],["__file","laser.vue"]]);export{K as default};
