import{b as y,u as f}from"./index-XVBT3eyP.js";import{p as _,_ as b,o as x,c as g}from"./app-BIv4BGsj.js";const $=y({position:{type:[Array,Object],required:!0},text:{type:String},title:{type:String},offset:{type:[Array,Object]},anchor:{type:[String,Array]},angle:{type:Number},clickable:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},bubble:{type:Boolean,default:!1},zooms:{type:Array},cursor:{type:String},topWhenClick:{type:Boolean,default:!1},textStyle:{type:Object},extData:null}),A=_({name:"ElAmapText",inheritAttrs:!1,__name:"Text",props:$,emits:["init","update:position"],setup(o,{expose:i,emit:l}){const n=l;let e;const{$$getInstance:p,parentInstance:r}=f((t,m)=>new Promise(d=>{e=new AMap.Text(t),m.add(e),c(),d(e)}),{emits:n,propsRedirect:{textStyle:"style"},destroyComponent(){e&&(r!=null&&r.$amapComponent)&&(e.setMap(null),e=null)}}),c=()=>{e.on("dragend",()=>{s()}),e.on("touchend",()=>{s()})},s=()=>{const t=e.getPosition();n("update:position",t.toArray())};i({$$getInstance:p});const u={emits:n,get $amapComponent(){return e},set $amapComponent(t){e=t},$$getInstance:p,parentInstance:r,bindModelEvents:c,emitPosition:s};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}});function S(o,i,l,n,e,p){return x(),g("div")}const a=b(A,[["render",S],["__file","Text.vue"]]);a.install=o=>(o.component(a.name,a),o);const B=a;export{B as E};