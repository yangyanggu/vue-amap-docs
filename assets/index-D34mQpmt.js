import{p as u,_ as l,o as f,c as g}from"./app-BIv4BGsj.js";import{b,u as d}from"./index-XVBT3eyP.js";const L=u({name:"ElAmapLocaAmbientLight",inheritAttrs:!1,__name:"AmbientLight",props:b({color:{type:String},intensity:{type:Number}}),emits:["init"],setup(n,{expose:m,emit:a}){const i=a;let e;const{$$getInstance:r,parentInstance:t}=d((s,c)=>new Promise(_=>{e=new Loca.AmbientLight(s),c.addLight(e),_(e)}),{emits:i,destroyComponent(){e&&(t!=null&&t.$amapComponent)&&(t.isDestroy||t.$amapComponent.removeLight(e),e=null)}});m({$$getInstance:r});const p={emits:i,get $amapComponent(){return e},set $amapComponent(s){e=s},$$getInstance:r,parentInstance:t};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}});function $(n,m,a,i,e,r){return f(),g("div")}const o=l(L,[["render",$],["__file","AmbientLight.vue"]]);o.install=n=>(n.component(o.name,o),n);const C=o;export{C as E};