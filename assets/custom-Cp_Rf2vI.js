import{b as M,u as k,E as $}from"./index-XVBT3eyP.js";import{p as b,_ as C,o as f,c as A,f as _,a as h,d as S,w as z,q as L,s as P,ao as N,al as V}from"./app-BIv4BGsj.js";const j=b({name:"ElAmapLayerCustom",inheritAttrs:!1,__name:"Custom",props:M({canvas:{required:!0,type:Object},render:{type:Function},zooms:{type:Array},opacity:{type:Number},alwaysRender:{type:Boolean,default:!1}}),emits:["init"],setup(c,{expose:r,emit:u}){const e=u;let t;const{$$getInstance:n,parentInstance:s}=k((i,g)=>new Promise(w=>{const m=i.canvas;delete i.canvas,t=new AMap.CustomLayer(m,i),t.setMap(g),w(t)}),{emits:e,destroyComponent(){t&&(s!=null&&s.$amapComponent)&&(t.setMap(null),t=null)}});r({$$getInstance:n});const a={emits:e,get $amapComponent(){return t},set $amapComponent(i){t=i},$$getInstance:n,parentInstance:s};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}});function B(c,r,u,e,t,n){return f(),A("div")}const v=C(j,[["render",B],["__file","Custom.vue"]]);v.install=c=>(c.component(v.name,v),c);const F=v,O=b({__name:"custom",setup(c,{expose:r}){r();const u=_(16),e=_([116.306206,39.975468]),t=_(!0),n=_(void 0);let s=null,a;const m={zoom:u,center:e,visible:t,canvas:n,get map(){return s},set map(o){s=o},get path(){return a},set path(o){a=o},switchVisible:()=>{t.value=!t.value},initMap:o=>{s=o;const p=s.getSize();n.value=document.createElementNS("http://www.w3.org/2000/svg","svg"),n.value.setAttribute("xmlns","http://www.w3.org/2000/svg"),n.value.setAttribute("width",p.width),n.value.setAttribute("height",p.height),a=document.createElementNS("http://www.w3.org/2000/svg","path"),a.onclick=function(){console.log("svg path clicked")};const l=[];l.push("stroke:red"),l.push("fill:green"),l.push("fill-opacity:0.3"),a.style.cssText=l.join(";"),n.value.appendChild(a)},render:()=>{const o=[],p=s.lngLatToContainer(e.value);for(let d=0;d<6;d+=1){const y=Math.PI*60/180*d,x=p.x+Math.cos(y)*50,E=p.y+Math.sin(y)*50;o.push(`${(d==0?"M":"L")+x} ${E}`)}const l=`${o.join(" ")} Z`;a.setAttribute("d",l)},get ElAmap(){return $},get ElAmapLayerCustom(){return F}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}}),T={class:"map-page-container"},q={class:"toolbar"};function I(c,r,u,e,t,n){return f(),A(V,null,[h("div",T,[S(e.ElAmap,{center:e.center,zoom:e.zoom,onInit:e.initMap},{default:z(()=>[e.canvas?(f(),L(e.ElAmapLayerCustom,{key:0,canvas:e.canvas,render:e.render,"always-render":!1,visible:e.visible},null,8,["canvas","visible"])):P("",!0)]),_:1},8,["center","zoom"])]),h("div",q,[h("button",{onClick:r[0]||(r[0]=s=>e.switchVisible())},N(e.visible?"隐藏":"显示"),1)])],64)}const Z=C(O,[["render",I],["__file","custom.vue"]]);export{Z as default};