import{b as c,p as A,u as $}from"./index-XVBT3eyP.js";import{p as y,ac as k,_ as f,o as b,c as C,ad as M}from"./app-BIv4BGsj.js";const x=y({name:"ElAmapLayerLabels",inheritAttrs:!1,__name:"Labels",props:c({zooms:{type:Array},opacity:{type:Number},collision:{type:Boolean,default:!0},allowCollision:{type:Boolean,default:!1}}),emits:["init"],setup(r,{expose:p,emit:m}){const a=[],t={$amapComponent:void 0,addChildComponent(s){a.push(s)},isDestroy:!1};k(A,t);const n=m;let e;const{$$getInstance:i,parentInstance:o}=$((s,L)=>new Promise(v=>{e=new AMap.LabelsLayer(s),L.add(e),t.$amapComponent=e,v(e)}),{emits:n,needInitComponents:a,provideData:t,destroyComponent(){e&&(o!=null&&o.$amapComponent)&&(o!=null&&o.isDestroy||o==null||o.$amapComponent.removeLayer(e),e=null)}}),l=s=>{e.add(s)};p({$$getInstance:i,$$add:l});const u={needInitComponents:a,provideData:t,emits:n,get $amapComponent(){return e},set $amapComponent(s){e=s},$$getInstance:i,parentInstance:o,$$add:l};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}});function g(r,p,m,a,t,n){return b(),C("div",null,[M(r.$slots,"default")])}const d=f(x,[["render",g],["__file","Labels.vue"]]);d.install=r=>(r.component(d.name,d),r);const w=d,h=y({name:"ElAmapLabelMarker",inheritAttrs:!1,__name:"LabelMarker",props:c({name:{type:String},position:{type:[Array,Object],required:!0},zooms:{type:Array},opacity:{type:Number},rank:{type:Number},icon:{type:Object},text:{type:Object},extData:null}),emits:["init"],setup(r,{expose:p,emit:m}){const a=m;let t;const{$$getInstance:n,parentInstance:e}=$((o,l)=>new Promise(u=>{t=new AMap.LabelMarker(o),l.add(t),u(t)}),{emits:a,destroyComponent(){t&&(e!=null&&e.$amapComponent)&&(e!=null&&e.isDestroy||e==null||e.$amapComponent.remove(t),t=null)}});p({$$getInstance:n});const i={emits:a,get $amapComponent(){return t},set $amapComponent(o){t=o},$$getInstance:n,parentInstance:e};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}});function E(r,p,m,a,t,n){return b(),C("div")}const _=f(h,[["render",E],["__file","LabelMarker.vue"]]);_.install=r=>(r.component(_.name,_),r);const D=_;export{w as E,D as a};
