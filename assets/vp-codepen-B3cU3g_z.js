import{p as v,j as f,f as x,_ as P,o as h,c as j,a as y}from"./app-BIv4BGsj.js";const S=v({__name:"vp-codepen",props:{css:{type:String,required:!0},cssPreProcessor:{type:String,required:!0},js:{type:String,required:!0},jsPreProcessor:{type:String,required:!0},html:{type:String,required:!0}},setup(p,{expose:c}){const e=p,s={"'vue'":"Vue","'element-plus'":"ElementPlus"},n=f(()=>{const t=decodeURIComponent(e.js||""),r=/(import*) ([^'\n]*) from ([^\n]*)/g,m=[];let l;for(;l=r.exec(t);){const[,,_,g]=l;m.push(`const ${_} = ${s[g]};`)}let o=(t.includes("export default defineComponent")?/export default defineComponent\({([\s\S]*)}\)/g:/export default {([\s\S]*)}/g).exec(t);return o=(o&&o[1]||"").replace(/\n {2}/g,`
`).trim(),`${m.join(`
`)}
var Main = {
  ${o}
};
VueAmap.initAMapApiLoader({
    key: '747f980f217a31ba68d99301045a3fa7'
})
const app = Vue.createApp(Main);
app.use(VueAmap);
app.mount("#app");
`}),a=f(()=>JSON.stringify({html:`<script src="//unpkg.com/vue@next"><\/script>
<script src="//unpkg.com/@vuemap/vue-amap@next/dist/index.js"><\/script>
<div id="app">
  ${decodeURIComponent(e.html).trim()}
</div>
`,css:`@import url("//unpkg.com/@vuemap/vue-amap@next/dist/style.css");
${decodeURIComponent(e.css).trim()}
`,js:n.value,css_pre_processor:e.cssPreProcessor,js_pre_processor:e.jsPreProcessor==="ts"?" typescript":e.jsPreProcessor})),i=x(null),u=()=>{var t,r;(r=(t=i.value).submit)==null||r.call(t)};c({submit:u});const d={props:e,globalMapper:s,js:n,data:a,formRef:i,submit:u};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),$={ref:"formRef",action:"https://codepen.io/pen/define/",method:"POST",target:"_blank"},b=["value"];function k(p,c,e,s,n,a){return h(),j("form",$,[y("input",{type:"hidden",name:"data",value:s.data},null,8,b)],512)}const q=P(S,[["render",k],["__file","vp-codepen.vue"]]);export{q as default};
