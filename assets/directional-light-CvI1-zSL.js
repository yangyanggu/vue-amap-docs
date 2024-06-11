import{p as L,_ as A,o as b,c as E,f as s,a as h,d,w as v,ao as C,al as D}from"./app-BIv4BGsj.js";import{b as x,u as k,E as F}from"./index-XVBT3eyP.js";import{E as S}from"./index-C2AhXWuI.js";import{E as P}from"./index-CMV7vHea.js";const w=L({name:"ElAmapLocaDirectionalLight",inheritAttrs:!1,__name:"DirectionalLight",props:x({color:{type:String},intensity:{type:Number},position:{type:Array,required:!0},target:{type:Array}}),emits:["init"],setup(c,{expose:p,emit:t}){const o=t;let n;const{$$getInstance:l,parentInstance:r}=k((m,u)=>new Promise(f=>{n=new Loca.DirectionalLight(m),u.addLight(n),f(n)}),{emits:o,destroyComponent(){n&&(r!=null&&r.$amapComponent)&&(r.isDestroy||r.$amapComponent.removeLight(n),n=null)}});p({$$getInstance:l});const _={emits:o,get $amapComponent(){return n},set $amapComponent(m){n=m},$$getInstance:l,parentInstance:r};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}});function B(c,p,t,o,n,l){return b(),E("div")}const g=A(w,[["render",B],["__file","DirectionalLight.vue"]]);g.install=c=>(c.component(g.name,g),c);const M=g,z=L({__name:"directional-light",setup(c,{expose:p}){p();const t=["#FFF8B4","#D3F299","#9FE084","#5ACA70","#00AF53","#00873A","#006B31","#004835","#003829"].reverse(),o=[1e3,2e3,4e3,6e3,8e3,1e4,12e3,14e3,16e3],n=s(11),l=s([120.109233,30.246411]),r=s(55),_=s("https://a.amap.com/Loca/static/loca-v2/demos/mock_data/hz_gn.json"),m=s({topColor(i,a){const e=a.properties.health*100;return e<40?t[8]:e<50?t[7]:e<55?t[6]:e<60?t[5]:e<65?t[4]:e<70?t[3]:e<75?t[2]:e<80?t[1]:e<100?t[0]:"green"},sideTopColor(i,a){const e=a.properties.health*100;return e<40?t[8]:e<50?t[7]:e<55?t[6]:e<60?t[5]:e<65?t[4]:e<70?t[3]:e<75?t[2]:e<80?t[1]:e<100?t[0]:"green"},sideBottomColor(i,a){const e=a.properties.health*100;return e<40?t[8]:e<50?t[7]:e<55?t[6]:e<60?t[5]:e<65?t[4]:e<70?t[3]:e<75?t[2]:e<80?t[1]:e<100?t[0]:"green"},height(i,a){const e=a.properties.health*100;return e<40?o[8]:e<50?o[7]:e<55?o[6]:e<60?o[5]:e<65?o[4]:e<70?o[3]:e<75?o[2]:e<80?o[1]:e<100?o[0]:0},altitude:0}),u=s(!0),y={colors:t,height:o,zoom:n,center:l,pitch:r,sourceUrl:_,layerStyle:m,visible:u,changeVisible:()=>{u.value=!u.value},clickMap:i=>{console.log("click map: ",i)},initMap:i=>{console.log("init map: ",i)},get ElAmap(){return F},get ElAmapLoca(){return S},get ElAmapLocaDirectionalLight(){return M},get ElAmapLocaPolygon(){return P}};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}),V={class:"map-page-container"},j={class:"toolbar"};function N(c,p,t,o,n,l){return b(),E(D,null,[h("div",V,[d(o.ElAmap,{"view-mode":"3D",pitch:o.pitch,"show-label":!1,center:o.center,zoom:o.zoom,onClick:o.clickMap,onInit:o.initMap},{default:v(()=>[d(o.ElAmapLoca,null,{default:v(()=>[d(o.ElAmapLocaDirectionalLight,{position:[0,-1,0],target:[0,0,0],color:"rgb(255,255,255)",intensity:.5}),d(o.ElAmapLocaPolygon,{visible:o.visible,"source-url":o.sourceUrl,"layer-style":o.layerStyle,"visible-duration":500},null,8,["visible","source-url","layer-style"])]),_:1})]),_:1},8,["pitch","center","zoom"])]),h("div",j,[h("button",{onClick:o.changeVisible},C(o.visible?"隐藏":"显示"),1)])],64)}const T=A(z,[["render",N],["__file","directional-light.vue"]]);export{T as default};
