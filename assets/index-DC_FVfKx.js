import{I as D,C as E,b as k}from"./index-CrMMG-jN.js";import{p as $,f as U,k as T,l as x,_ as B,o as N,c as L,a as R,ad as q}from"./app-BIv4BGsj.js";import{b as G,u as H}from"./index-XVBT3eyP.js";var y={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-y.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?y.Bounce.In(t*2)*.5:y.Bounce.Out(t*2-1)*.5+.5}}},A;typeof self>"u"&&typeof process<"u"&&process.hrtime?A=function(){var t=process.hrtime();return t[0]*1e3+t[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?A=self.performance.now.bind(self.performance):Date.now!==void 0?A=Date.now:A=function(){return new Date().getTime()};var v=A,Y=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(i){return e._tweens[i]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},t.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},t.prototype.update=function(e,i){e===void 0&&(e=v()),i===void 0&&(i=!1);var s=Object.keys(this._tweens);if(s.length===0)return!1;for(;s.length>0;){this._tweensAddedDuringUpdate={};for(var n=0;n<s.length;n++){var r=this._tweens[s[n]],o=!i;r&&r.update(e,o)===!1&&!i&&delete this._tweens[s[n]]}s=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),b={Linear:function(t,e){var i=t.length-1,s=i*e,n=Math.floor(s),r=b.Utils.Linear;return e<0?r(t[0],t[1],s):e>1?r(t[i],t[i-1],i-s):r(t[n],t[n+1>i?i:n+1],s-n)},Bezier:function(t,e){for(var i=0,s=t.length-1,n=Math.pow,r=b.Utils.Bernstein,o=0;o<=s;o++)i+=n(1-e,s-o)*n(e,o)*t[o]*r(s,o);return i},CatmullRom:function(t,e){var i=t.length-1,s=i*e,n=Math.floor(s),r=b.Utils.CatmullRom;return t[0]===t[i]?(e<0&&(n=Math.floor(s=i*(1+e))),r(t[(n-1+i)%i],t[n],t[(n+1)%i],t[(n+2)%i],s-n)):e<0?t[0]-(r(t[0],t[0],t[1],t[1],-s)-t[0]):e>1?t[i]-(r(t[i],t[i],t[i-1],t[i-1],s-i)-t[i]):r(t[n?n-1:0],t[n],t[i<n+1?i:n+1],t[i<n+2?i:n+2],s-n)},Utils:{Linear:function(t,e,i){return(e-t)*i+t},Bernstein:function(t,e){var i=b.Utils.Factorial;return i(t)/i(e)/i(t-e)},Factorial:function(){var t=[1];return function(e){var i=1;if(t[e])return t[e];for(var s=e;s>1;s--)i*=s;return t[e]=i,i}}(),CatmullRom:function(t,e,i,s,n){var r=(i-t)*.5,o=(s-e)*.5,a=n*n,u=n*a;return(2*e-2*i+r+o)*u+(-3*e+3*i-2*r-o)*a+r*n+e}}},z=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),F=new Y,j=function(){function t(e,i){i===void 0&&(i=F),this._object=e,this._group=i,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=y.Linear.None,this._interpolationFunction=b.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=z.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.to=function(e,i){return this._valuesEnd=Object.create(e),i!==void 0&&(this._duration=i),this},t.prototype.duration=function(e){return this._duration=e,this},t.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?v()+parseFloat(e):e:v(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},t.prototype._setupProperties=function(e,i,s,n){for(var r in s){var o=e[r],a=Array.isArray(o),u=a?"array":typeof o,d=!a&&Array.isArray(s[r]);if(!(u==="undefined"||u==="function")){if(d){var f=s[r];if(f.length===0)continue;f=f.map(this._handleRelativeValue.bind(this,o)),s[r]=[o].concat(f)}if((u==="object"||a)&&o&&!d){i[r]=a?[]:{};for(var g in o)i[r][g]=o[g];n[r]=a?[]:{},this._setupProperties(o,i[r],s[r],n[r])}else typeof i[r]>"u"&&(i[r]=o),a||(i[r]*=1),d?n[r]=s[r].slice().reverse():n[r]=i[r]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(e){return e===void 0&&(e=v()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},t.prototype.resume=function(e){return e===void 0&&(e=v()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},t.prototype.stopChainedTweens=function(){for(var e=0,i=this._chainedTweens.length;e<i;e++)this._chainedTweens[e].stop();return this},t.prototype.group=function(e){return this._group=e,this},t.prototype.delay=function(e){return this._delayTime=e,this},t.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},t.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},t.prototype.yoyo=function(e){return this._yoyo=e,this},t.prototype.easing=function(e){return this._easingFunction=e,this},t.prototype.interpolation=function(e){return this._interpolationFunction=e,this},t.prototype.chain=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return this._chainedTweens=e,this},t.prototype.onStart=function(e){return this._onStartCallback=e,this},t.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},t.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},t.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},t.prototype.onStop=function(e){return this._onStopCallback=e,this},t.prototype.update=function(e,i){if(e===void 0&&(e=v()),i===void 0&&(i=!0),this._isPaused)return!0;var s,n,r=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>r)return!1;i&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),n=(e-this._startTime)/this._duration,n=this._duration===0||n>1?1:n;var o=this._easingFunction(n);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,n),n===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(s in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[s]=="string"&&(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(this._valuesEnd[s])),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,u=this._chainedTweens.length;a<u;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(e,i,s,n){for(var r in s)if(i[r]!==void 0){var o=i[r]||0,a=s[r],u=Array.isArray(e[r]),d=Array.isArray(a),f=!u&&d;f?e[r]=this._interpolationFunction(a,n):typeof a=="object"&&a?this._updateProperties(e[r],o,a,n):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*n))}},t.prototype._handleRelativeValue=function(e,i){return typeof i!="string"?i:i.charAt(0)==="+"||i.charAt(0)==="-"?e+parseFloat(i):parseFloat(i)},t.prototype._swapEndStartRepeatValues=function(e){var i=this._valuesStartRepeat[e],s=this._valuesEnd[e];typeof s=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(s):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=i},t}(),c=F;c.getAll.bind(c);c.removeAll.bind(c);c.add.bind(c);c.remove.bind(c);c.update.bind(c);class Q extends D{constructor(e,i,s,n){i.onLoaded=r=>{r.userData.acceptEvent=!0,r.userData.$vue=s,n&&n()},super(e,i),this.moveFrame=-1,this.angleFrame=-1,this.moveAnimation=i.moveAnimation}setScale(e){let i;typeof e=="number"?i=[e,e,e]:i=e,this.object.scale.set(...i)}setPosition(e){const i=this.layer.convertLngLat(e);!this.moveAnimation||!this.moveAnimation.smooth?(this._updatePosition(i),this.prePosition=i):this.prePosition?this._updatePositionTween(i):(this._updatePosition(i),this.prePosition=i)}_updatePositionTween(e){var n;if(!this.prePosition)return;this.prePositionTween&&this.prePositionTween.end();const i={x:this.prePosition[0],y:this.prePosition[1]};this._stopMoveAnimation();const s=((n=this.moveAnimation)==null?void 0:n.duration)||1e3;this.prePositionTween=new j(i).to({x:e[0],y:e[1]}).duration(s).easing(y.Linear.None).onUpdate(()=>{this._updatePosition([i.x,i.y])}).start(),this._moveAnimate(),this.prePosition=e}_moveAnimate(){var e;(e=this.prePositionTween)==null||e.update(),this.moveFrame=requestAnimationFrame(()=>{this._moveAnimate()})}_stopMoveAnimation(){cancelAnimationFrame(this.moveFrame)}_updatePosition(e){this.object.position.setX(e[0]),this.object.position.setY(e[1]),this.refresh()}setAngle(e){!this.moveAnimation||!this.moveAnimation.smooth?(this._updateAngle(e),this.preAngle=e):this.preAngle===void 0?(this._updateAngle(e),this.preAngle=e):this._updateAngleTween(e)}_updateAngle(e){const i=this.object.rotation.x,s=this.object.rotation.z,n=Math.PI/180*e;this.object.rotation.set(i,n,s),this.refresh()}_updateAngleTween(e){var n;if(this.preAngle===void 0)return;this.preAngleTween&&this.preAngleTween.end();const i={angle:this.preAngle};this._stopAngleAnimation();const s=((n=this.moveAnimation)==null?void 0:n.duration)||1e3;this.preAngleTween=new j(i).to({angle:e}).duration(s).easing(y.Linear.None).onUpdate(()=>{this._updateAngle(i.angle)}).onComplete(()=>{this._stopAngleAnimation()}).start(),this._angleAnimate(),this.preAngle=e}_angleAnimate(){var e;(e=this.preAngleTween)==null||e.update(),this.angleFrame=requestAnimationFrame(()=>{this._angleAnimate()})}_stopAngleAnimation(){cancelAnimationFrame(this.angleFrame)}setMoveAnimation(e){this.moveAnimation=e}destroy(){this._stopAngleAnimation(),this._stopMoveAnimation(),this.prePosition=void 0,this.preAngle=void 0,this.prePositionTween=void 0,this.preAngleTween=void 0,this.object&&(this.object.$vue=null),super.destroy()}}const W=$({name:"ElAmapThreeGltf",inheritAttrs:!1,__name:"ThreeGltf",props:G({url:{type:String},position:{type:Array},height:{type:Number,default:0},rotation:{type:Object},scale:{type:[Number,Array],default:1},angle:{type:Number,default:0},moveAnimation:{type:Object},configLoader:{type:Function},useModelCache:{type:Boolean,default:!1},showPopup:{type:Boolean,default:!1},popupHeight:{type:Number,default:0},popupScale:{type:[Number,Array],default:1},popupType:{type:String,default:"2D"}}),emits:["init","click","mousemove","mouseover","mouseout"],setup(t,{expose:e,emit:i}){const s=U(),n=t,r=i;let o,a;const u=x(),{$$getInstance:d,parentInstance:f}=H((h,p)=>new Promise(l=>{o=new Q(p,h,{$emit:r,...(u==null?void 0:u.exposed)||{}},()=>{g(o),l(o)})}),{emits:r,destroyComponent(){var h,p,l;o&&(f!=null&&f.$amapComponent)&&(f.isDestroy||o.remove(),(l=(p=(h=o.layer)==null?void 0:h.cssRenderer)==null?void 0:p.domElement)==null||l.remove(),o.destroy(),o=null)}}),g=h=>{var M,I,O;const p=s.value,l=p.querySelector(".content-container");if(((M=l==null?void 0:l.children)==null?void 0:M.length)!=0){if(n.popupType==="2D"){if(!((I=h==null?void 0:h.layer)!=null&&I.css2DRenderer))return;const _=new E(p);_.center.set(.5,1),_.translateY(n.popupHeight||0),a=_,a.visible=n.showPopup,h.object.add(a)}else if(n.popupType==="3D"){if(!((O=h==null?void 0:h.layer)!=null&&O.css3DRenderer))return;const _=typeof n.popupScale=="number"?[n.popupScale,n.popupScale,n.popupScale]:n.popupScale,P=new k(p);P.translateY(n.popupHeight||0),P.scale.set(_[0],_[1],_[2]),a=P,a.visible=n.showPopup,h.object.add(a)}}},m=()=>{o.startAnimations()},S=()=>{o.stopAnimations()};e({$$getInstance:d,$$startAnimations:m,$$stopAnimations:S}),T(()=>n.showPopup,h=>{if(h&&!a){g(o);return}a.visible=h}),T(()=>n.popupHeight,(h,p)=>{if(a){const l=(h||0)-(p||0);a.translateY(l||0)}}),T(()=>n.popupScale,h=>{if(a&&h){const p=typeof h=="number"?[h,h,h]:h;a.scale.set(p[0],p[1],p[2])}});const C={popupRef:s,props:n,emits:r,get $amapComponent(){return o},set $amapComponent(h){o=h},get popup(){return a},set popup(h){a=h},currentInstance:u,$$getInstance:d,parentInstance:f,addPopup:g,$$startAnimations:m,$$stopAnimations:S};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}}),X={style:{display:"none"}},J={ref:"popupRef",style:{width:"0",height:"0",position:"relative"}},K={class:"content-container",style:{transform:"translate(-50%, -100%)",position:"absolute"}};function Z(t,e,i,s,n,r){return N(),L("div",X,[R("div",J,[R("div",K,[q(t.$slots,"default")])],512)])}const w=B(W,[["render",Z],["__file","ThreeGltf.vue"]]);w.install=t=>(t.component(w.name,w),t);const it=w;export{it as E};