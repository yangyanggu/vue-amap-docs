import{i as w,V as C}from"./three.module-BVXrWKE2.js";import{P as D,E as z,a as M,S as P}from"./index-CrMMG-jN.js";import{E as I,a as U,b as B}from"./index-v9WK8DZN.js";import{p as V,f as r,_ as k,o as F,c as G,a as h,d as i,w as A,ao as j,al as O}from"./app-BIv4BGsj.js";import{E as H}from"./index-XVBT3eyP.js";import{E as N}from"./index-DC_FVfKx.js";import"./arrayEach-Bzrg1Ilf.js";class R extends D{constructor(t,l,e,s,a){super(),this.scene=t,this.camera=l,this.overrideMaterial=e,this.clearColor=s,this.clearAlpha=a!==void 0?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new w}render(t,l,e){const s=t.autoClear;t.autoClear=!1;let a,n;this.overrideMaterial!==void 0&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(t.getClearColor(this._oldClearColor),a=t.getClearAlpha(),t.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor&&t.setClearColor(this._oldClearColor,a),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=n),t.autoClear=s}}const q={uniforms:{tDiffuse:{value:null},tSize:{value:new C(256,256)},center:{value:new C(.5,.5)},angle:{value:1.57},scale:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform vec2 center;
		uniform float angle;
		uniform float scale;
		uniform vec2 tSize;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		float pattern() {

			float s = sin( angle ), c = cos( angle );

			vec2 tex = vUv * tSize - center;
			vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;

			return ( sin( point.x ) * sin( point.y ) ) * 4.0;

		}

		void main() {

			vec4 color = texture2D( tDiffuse, vUv );

			float average = ( color.r + color.g + color.b ) / 3.0;

			gl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );

		}`},J=V({__name:"three-gltf",setup(u,{expose:t}){t();const l="https://vue-amap.guyixi.cn/",e=r(18),s=r([121.59996,31.197646]),a=r(!0),n=r([121.59996,31.197646]),E=r({x:90,y:0,z:0}),m=r([121.59996,31.197646]),b=r({duration:1e3,smooth:!0}),p=r(90),_=r({urls:["px.hdr","nx.hdr","py.hdr","ny.hdr","pz.hdr","nz.hdr"],path:`${l}/hdr/`});let v=-1;const x=()=>{a.value=!a.value},T=o=>{const c=new R(o.getScene(),o.getCamera());o.addPass(c);const f=new P(q);f.uniforms.scale.value=4,o.addPass(f)},y=(o,c)=>{c.$$startAnimations(),console.log("gltf object: ",o),console.log("gltf $vue: ",c)},S=()=>{g()},g=()=>{v=setInterval(()=>{const o=m.value[0]+Math.random()*1e-4,c=m.value[1]+Math.random()*1e-4,f=[o,c],L=Math.random()*360;m.value=f,p.value=L},1e3)},d={baseUrl:l,zoom:e,center:s,visible:a,position:n,rotation:E,carPosition:m,moveAnimation:b,carAngle:p,hdrOptions:_,get carInterval(){return v},set carInterval(o){v=o},switchVisible:x,initLayer:T,init:y,initCar:S,startCar:g,stopCar:()=>{clearInterval(v)},get ElAmap(){return H},get ElAmapLayerThree(){return z},get ElAmapThreeGltf(){return N},get ElAmapThreeLightAmbient(){return M},get ElAmapThreeLightDirectional(){return I},get ElAmapThreeLightHemisphere(){return U},get ElAmapThreeLightSpot(){return B}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),K={class:"map-page-container"},Q={class:"toolbar"};function W(u,t,l,e,s,a){return F(),G(O,null,[h("div",K,[i(e.ElAmap,{"show-label":!1,center:e.center,zoom:e.zoom,"view-mode":"3D",pitch:60,"show-building-block":!1,features:["bg","road"]},{default:A(()=>[i(e.ElAmapLayerThree,{hdr:e.hdrOptions,"create-canvas":!0,onInit:e.initLayer},{default:A(()=>[i(e.ElAmapThreeLightAmbient,{color:"rgb(255,255,255)",intensity:.6}),i(e.ElAmapThreeLightDirectional,{color:"rgb(255,0,255)",intensity:1,position:{x:0,y:1,z:0}}),i(e.ElAmapThreeLightHemisphere,{color:"blue",intensity:1,position:{x:1,y:0,z:0}}),i(e.ElAmapThreeLightSpot,{position:{x:0,y:1,z:0}}),i(e.ElAmapThreeGltf,{url:e.baseUrl+"/gltf/sgyj_point_animation.gltf",position:e.position,scale:[10,10,10],rotation:e.rotation,visible:e.visible,onInit:e.init},null,8,["url","position","rotation","visible"]),i(e.ElAmapThreeGltf,{url:e.baseUrl+"/gltf/car2.gltf",position:e.carPosition,scale:[10,10,10],rotation:e.rotation,"move-animation":e.moveAnimation,angle:e.carAngle,onInit:e.initCar},null,8,["url","position","rotation","move-animation","angle"])]),_:1},8,["hdr"])]),_:1},8,["center","zoom"])]),h("div",Q,[h("button",{onClick:t[0]||(t[0]=n=>e.switchVisible())},j(e.visible?"隐藏":"显示"),1),h("button",{onClick:t[1]||(t[1]=n=>e.stopCar())}," 停止移动 "),h("button",{onClick:t[2]||(t[2]=n=>e.startCar())}," 继续移动 ")])],64)}const re=k(J,[["render",W],["__file","three-gltf.vue"]]);export{re as default};
