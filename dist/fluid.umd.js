(function(I,O){typeof exports=="object"&&typeof module<"u"?O(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],O):(I=typeof globalThis<"u"?globalThis:I||self,O(I.LumaFluidLib={},I.React))})(this,function(I,O){"use strict";var br=Object.defineProperty;var Rr=(I,O,z)=>O in I?br(I,O,{enumerable:!0,configurable:!0,writable:!0,value:z}):I[O]=z;var r=(I,O,z)=>(Rr(I,typeof O!="symbol"?O+"":O,z),z);var z={exports:{}},oe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve;function xt(){if(Ve)return oe;Ve=1;var l=O,t=Symbol.for("react.element"),e=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(c,n,f){var d,x={},p=null,y=null;f!==void 0&&(p=""+f),n.key!==void 0&&(p=""+n.key),n.ref!==void 0&&(y=n.ref);for(d in n)i.call(n,d)&&!o.hasOwnProperty(d)&&(x[d]=n[d]);if(c&&c.defaultProps)for(d in n=c.defaultProps,n)x[d]===void 0&&(x[d]=n[d]);return{$$typeof:t,type:c,key:p,ref:y,props:x,_owner:a.current}}return oe.Fragment=e,oe.jsx=u,oe.jsxs=u,oe}var ne={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie;function St(){return Ie||(Ie=1,process.env.NODE_ENV!=="production"&&function(){var l=O,t=Symbol.for("react.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),n=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),g=Symbol.iterator,m="@@iterator";function P(s){if(s===null||typeof s!="object")return null;var h=g&&s[g]||s[m];return typeof h=="function"?h:null}var F=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function R(s){{for(var h=arguments.length,v=new Array(h>1?h-1:0),S=1;S<h;S++)v[S-1]=arguments[S];Y("error",s,v)}}function Y(s,h,v){{var S=F.ReactDebugCurrentFrame,b=S.getStackAddendum();b!==""&&(h+="%s",v=v.concat([b]));var E=v.map(function(T){return String(T)});E.unshift("Warning: "+h),Function.prototype.apply.call(console[s],console,E)}}var M=!1,ee=!1,te=!1,re=!1,ie=!1,ue;ue=Symbol.for("react.module.reference");function ye(s){return!!(typeof s=="string"||typeof s=="function"||s===i||s===o||ie||s===a||s===f||s===d||re||s===y||M||ee||te||typeof s=="object"&&s!==null&&(s.$$typeof===p||s.$$typeof===x||s.$$typeof===u||s.$$typeof===c||s.$$typeof===n||s.$$typeof===ue||s.getModuleId!==void 0))}function _e(s,h,v){var S=s.displayName;if(S)return S;var b=h.displayName||h.name||"";return b!==""?v+"("+b+")":v}function he(s){return s.displayName||"Context"}function D(s){if(s==null)return null;if(typeof s.tag=="number"&&R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case i:return"Fragment";case e:return"Portal";case o:return"Profiler";case a:return"StrictMode";case f:return"Suspense";case d:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case c:var h=s;return he(h)+".Consumer";case u:var v=s;return he(v._context)+".Provider";case n:return _e(s,s.render,"ForwardRef");case x:var S=s.displayName||null;return S!==null?S:D(s.type)||"Memo";case p:{var b=s,E=b._payload,T=b._init;try{return D(T(E))}catch{return null}}}return null}var X=Object.assign,de=0,$e,Je,Qe,Ze,et,tt,rt;function it(){}it.__reactDisabledLog=!0;function Qt(){{if(de===0){$e=console.log,Je=console.info,Qe=console.warn,Ze=console.error,et=console.group,tt=console.groupCollapsed,rt=console.groupEnd;var s={configurable:!0,enumerable:!0,value:it,writable:!0};Object.defineProperties(console,{info:s,log:s,warn:s,error:s,group:s,groupCollapsed:s,groupEnd:s})}de++}}function Zt(){{if(de--,de===0){var s={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:X({},s,{value:$e}),info:X({},s,{value:Je}),warn:X({},s,{value:Qe}),error:X({},s,{value:Ze}),group:X({},s,{value:et}),groupCollapsed:X({},s,{value:tt}),groupEnd:X({},s,{value:rt})})}de<0&&R("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Ae=F.ReactCurrentDispatcher,De;function Te(s,h,v){{if(De===void 0)try{throw Error()}catch(b){var S=b.stack.trim().match(/\n( *(at )?)/);De=S&&S[1]||""}return`
`+De+s}}var Be=!1,be;{var er=typeof WeakMap=="function"?WeakMap:Map;be=new er}function at(s,h){if(!s||Be)return"";{var v=be.get(s);if(v!==void 0)return v}var S;Be=!0;var b=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var E;E=Ae.current,Ae.current=null,Qt();try{if(h){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(W){S=W}Reflect.construct(s,[],T)}else{try{T.call()}catch(W){S=W}s.call(T.prototype)}}else{try{throw Error()}catch(W){S=W}s()}}catch(W){if(W&&S&&typeof W.stack=="string"){for(var _=W.stack.split(`
`),k=S.stack.split(`
`),A=_.length-1,B=k.length-1;A>=1&&B>=0&&_[A]!==k[B];)B--;for(;A>=1&&B>=0;A--,B--)if(_[A]!==k[B]){if(A!==1||B!==1)do if(A--,B--,B<0||_[A]!==k[B]){var G=`
`+_[A].replace(" at new "," at ");return s.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",s.displayName)),typeof s=="function"&&be.set(s,G),G}while(A>=1&&B>=0);break}}}finally{Be=!1,Ae.current=E,Zt(),Error.prepareStackTrace=b}var se=s?s.displayName||s.name:"",mt=se?Te(se):"";return typeof s=="function"&&be.set(s,mt),mt}function tr(s,h,v){return at(s,!1)}function rr(s){var h=s.prototype;return!!(h&&h.isReactComponent)}function Re(s,h,v){if(s==null)return"";if(typeof s=="function")return at(s,rr(s));if(typeof s=="string")return Te(s);switch(s){case f:return Te("Suspense");case d:return Te("SuspenseList")}if(typeof s=="object")switch(s.$$typeof){case n:return tr(s.render);case x:return Re(s.type,h,v);case p:{var S=s,b=S._payload,E=S._init;try{return Re(E(b),h,v)}catch{}}}return""}var we=Object.prototype.hasOwnProperty,st={},ot=F.ReactDebugCurrentFrame;function Fe(s){if(s){var h=s._owner,v=Re(s.type,s._source,h?h.type:null);ot.setExtraStackFrame(v)}else ot.setExtraStackFrame(null)}function ir(s,h,v,S,b){{var E=Function.call.bind(we);for(var T in s)if(E(s,T)){var _=void 0;try{if(typeof s[T]!="function"){var k=Error((S||"React class")+": "+v+" type `"+T+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof s[T]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw k.name="Invariant Violation",k}_=s[T](h,T,S,v,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(A){_=A}_&&!(_ instanceof Error)&&(Fe(b),R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",S||"React class",v,T,typeof _),Fe(null)),_ instanceof Error&&!(_.message in st)&&(st[_.message]=!0,Fe(b),R("Failed %s type: %s",v,_.message),Fe(null))}}}var ar=Array.isArray;function Le(s){return ar(s)}function sr(s){{var h=typeof Symbol=="function"&&Symbol.toStringTag,v=h&&s[Symbol.toStringTag]||s.constructor.name||"Object";return v}}function or(s){try{return nt(s),!1}catch{return!0}}function nt(s){return""+s}function lt(s){if(or(s))return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",sr(s)),nt(s)}var fe=F.ReactCurrentOwner,nr={key:!0,ref:!0,__self:!0,__source:!0},ct,ut,Oe;Oe={};function lr(s){if(we.call(s,"ref")){var h=Object.getOwnPropertyDescriptor(s,"ref").get;if(h&&h.isReactWarning)return!1}return s.ref!==void 0}function cr(s){if(we.call(s,"key")){var h=Object.getOwnPropertyDescriptor(s,"key").get;if(h&&h.isReactWarning)return!1}return s.key!==void 0}function ur(s,h){if(typeof s.ref=="string"&&fe.current&&h&&fe.current.stateNode!==h){var v=D(fe.current.type);Oe[v]||(R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',D(fe.current.type),s.ref),Oe[v]=!0)}}function hr(s,h){{var v=function(){ct||(ct=!0,R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",h))};v.isReactWarning=!0,Object.defineProperty(s,"key",{get:v,configurable:!0})}}function dr(s,h){{var v=function(){ut||(ut=!0,R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",h))};v.isReactWarning=!0,Object.defineProperty(s,"ref",{get:v,configurable:!0})}}var fr=function(s,h,v,S,b,E,T){var _={$$typeof:t,type:s,key:h,ref:v,props:T,_owner:E};return _._store={},Object.defineProperty(_._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(_,"_self",{configurable:!1,enumerable:!1,writable:!1,value:S}),Object.defineProperty(_,"_source",{configurable:!1,enumerable:!1,writable:!1,value:b}),Object.freeze&&(Object.freeze(_.props),Object.freeze(_)),_};function pr(s,h,v,S,b){{var E,T={},_=null,k=null;v!==void 0&&(lt(v),_=""+v),cr(h)&&(lt(h.key),_=""+h.key),lr(h)&&(k=h.ref,ur(h,b));for(E in h)we.call(h,E)&&!nr.hasOwnProperty(E)&&(T[E]=h[E]);if(s&&s.defaultProps){var A=s.defaultProps;for(E in A)T[E]===void 0&&(T[E]=A[E])}if(_||k){var B=typeof s=="function"?s.displayName||s.name||"Unknown":s;_&&hr(T,B),k&&dr(T,B)}return fr(s,_,k,b,S,fe.current,T)}}var Ue=F.ReactCurrentOwner,ht=F.ReactDebugCurrentFrame;function ae(s){if(s){var h=s._owner,v=Re(s.type,s._source,h?h.type:null);ht.setExtraStackFrame(v)}else ht.setExtraStackFrame(null)}var Me;Me=!1;function ke(s){return typeof s=="object"&&s!==null&&s.$$typeof===t}function dt(){{if(Ue.current){var s=D(Ue.current.type);if(s)return`

Check the render method of \``+s+"`."}return""}}function vr(s){{if(s!==void 0){var h=s.fileName.replace(/^.*[\\\/]/,""),v=s.lineNumber;return`

Check your code at `+h+":"+v+"."}return""}}var ft={};function gr(s){{var h=dt();if(!h){var v=typeof s=="string"?s:s.displayName||s.name;v&&(h=`

Check the top-level render call using <`+v+">.")}return h}}function pt(s,h){{if(!s._store||s._store.validated||s.key!=null)return;s._store.validated=!0;var v=gr(h);if(ft[v])return;ft[v]=!0;var S="";s&&s._owner&&s._owner!==Ue.current&&(S=" It was passed a child from "+D(s._owner.type)+"."),ae(s),R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',v,S),ae(null)}}function vt(s,h){{if(typeof s!="object")return;if(Le(s))for(var v=0;v<s.length;v++){var S=s[v];ke(S)&&pt(S,h)}else if(ke(s))s._store&&(s._store.validated=!0);else if(s){var b=P(s);if(typeof b=="function"&&b!==s.entries)for(var E=b.call(s),T;!(T=E.next()).done;)ke(T.value)&&pt(T.value,h)}}}function mr(s){{var h=s.type;if(h==null||typeof h=="string")return;var v;if(typeof h=="function")v=h.propTypes;else if(typeof h=="object"&&(h.$$typeof===n||h.$$typeof===x))v=h.propTypes;else return;if(v){var S=D(h);ir(v,s.props,"prop",S,s)}else if(h.PropTypes!==void 0&&!Me){Me=!0;var b=D(h);R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",b||"Unknown")}typeof h.getDefaultProps=="function"&&!h.getDefaultProps.isReactClassApproved&&R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function xr(s){{for(var h=Object.keys(s.props),v=0;v<h.length;v++){var S=h[v];if(S!=="children"&&S!=="key"){ae(s),R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",S),ae(null);break}}s.ref!==null&&(ae(s),R("Invalid attribute `ref` supplied to `React.Fragment`."),ae(null))}}function gt(s,h,v,S,b,E){{var T=ye(s);if(!T){var _="";(s===void 0||typeof s=="object"&&s!==null&&Object.keys(s).length===0)&&(_+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var k=vr(b);k?_+=k:_+=dt();var A;s===null?A="null":Le(s)?A="array":s!==void 0&&s.$$typeof===t?(A="<"+(D(s.type)||"Unknown")+" />",_=" Did you accidentally export a JSX literal instead of a component?"):A=typeof s,R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",A,_)}var B=pr(s,h,v,b,E);if(B==null)return B;if(T){var G=h.children;if(G!==void 0)if(S)if(Le(G)){for(var se=0;se<G.length;se++)vt(G[se],s);Object.freeze&&Object.freeze(G)}else R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else vt(G,s)}return s===i?xr(B):mr(B),B}}function Sr(s,h,v){return gt(s,h,v,!0)}function yr(s,h,v){return gt(s,h,v,!1)}var _r=yr,Tr=Sr;ne.Fragment=i,ne.jsx=_r,ne.jsxs=Tr}()),ne}process.env.NODE_ENV==="production"?z.exports=xt():z.exports=St();var yt=z.exports;class _t{constructor(t){r(this,"content",new Map);r(this,"keys",[]);r(this,"length",0);r(this,"current",0);this.content=t,this.keys=Object.keys(t),this.length=t.size}hasNext(){return this.current<this.length}next(){return this.keys[this.current++]}}class pe{constructor(){r(this,"content",new Map)}get(t){return this.content.get(t)}keys(){return new _t(this.content)}}class Tt{constructor(t){r(this,"current",0);r(this,"array",[]);this.array=t}hasNext(){return this.current<this.array.length}next(){return this.array[this.current++]}}class ve{constructor(){r(this,"content",new Map)}get(t){return this.content.get(t)}remove(t){return this.content.delete(t)}keys(){const t=[];return this.content.forEach((e,i)=>{t.push(+i)}),new Tt(t)}}class J{constructor(){r(this,"_powerOf2Fluid",!0);r(this,"_simulationScale",.25);r(this,"_fluidScale",1.5);r(this,"_fluidIterations",8);r(this,"_gamma",2.1);r(this,"_gradientBackground",.1);r(this,"_bevelCurveRadius",5);r(this,"_innerDarkening",.7);r(this,"_chromaticAberration",.15);r(this,"_refraction",.21);r(this,"_backgroundMultiplier",1);r(this,"_periodicBoundary",!0);r(this,"_dragSpeed",3);r(this,"_dragCoefficient",.8);r(this,"_motionDecayFactor",0);r(this,"_surfaceDecayFactor",2);r(this,"_timestepMultiplier",1);r(this,"_fluidPhysicsScale",20);r(this,"_paused",!1);r(this,"_version",1);r(this,"onChangeVersion");r(this,"onChangePaused");r(this,"onChangeTimestepMultiplier");r(this,"onChangeFluidPhysicsScale");r(this,"onChangeSurfaceDecayFactor");r(this,"onChangeMotionDecayFactor");r(this,"onChangeDragCoefficient");r(this,"onChangeDragSpeed");r(this,"onChangePeriodicBoundary");r(this,"onChangeBackgroundMultiplier");r(this,"onChangeFluidIterations");r(this,"onChangeGamma");r(this,"onChangeRefraction");r(this,"onChangeChromaticAberration");r(this,"onChangeInnerDarkening");r(this,"onChangeBevelCurveRadius");r(this,"onChangeGradientBackground");r(this,"onChangeFluidScale");r(this,"onChangeSimulationScale");r(this,"onChangePowerOf2Fluid")}get version(){return this._version}set version(t){var e;t!==this._version&&((e=this.onChangeVersion)==null||e.call(this)),this._version=t}get paused(){return this._paused}set paused(t){var e;t!==this._paused&&((e=this.onChangePaused)==null||e.call(this)),this._paused=t}get fluidPhysicsScale(){return this._fluidPhysicsScale}set fluidPhysicsScale(t){var e;t!==this._fluidPhysicsScale&&((e=this.onChangeFluidPhysicsScale)==null||e.call(this,t)),this._fluidPhysicsScale=t}get timestepMultiplier(){return this._timestepMultiplier}set timestepMultiplier(t){var e;t!==this._timestepMultiplier&&((e=this.onChangeTimestepMultiplier)==null||e.call(this)),this._timestepMultiplier=t}get surfaceDecayFactor(){return this._surfaceDecayFactor}set surfaceDecayFactor(t){var e;t!==this._surfaceDecayFactor&&((e=this.onChangeSurfaceDecayFactor)==null||e.call(this,t)),this._surfaceDecayFactor=t}get motionDecayFactor(){return this._motionDecayFactor}set motionDecayFactor(t){var e;t!==this._motionDecayFactor&&((e=this.onChangeMotionDecayFactor)==null||e.call(this,t)),this._motionDecayFactor=t}get dragCoefficient(){return this._dragCoefficient}set dragCoefficient(t){var e;t!==this._dragCoefficient&&((e=this.onChangeDragCoefficient)==null||e.call(this,t)),this._dragCoefficient=t}get dragSpeed(){return this._dragSpeed}set dragSpeed(t){var e;t!==this._dragSpeed&&((e=this.onChangeDragSpeed)==null||e.call(this,t)),this._dragSpeed=t}get periodicBoundary(){return this._periodicBoundary}set periodicBoundary(t){var e;t!==this._periodicBoundary&&((e=this.onChangePeriodicBoundary)==null||e.call(this,t)),this._periodicBoundary=t}get backgroundMultiplier(){return this._backgroundMultiplier}set backgroundMultiplier(t){var e;t!==this._backgroundMultiplier&&((e=this.onChangeBackgroundMultiplier)==null||e.call(this,t)),this._backgroundMultiplier=t}get refraction(){return this._refraction}set refraction(t){var e;t!==this._refraction&&((e=this.onChangeRefraction)==null||e.call(this,t)),this._refraction=t}get chromaticAberration(){return this._chromaticAberration}set chromaticAberration(t){var e;t!==this._chromaticAberration&&((e=this.onChangeChromaticAberration)==null||e.call(this,t)),this._chromaticAberration=t}get innerDarkening(){return this._innerDarkening}set innerDarkening(t){var e;t!==this._innerDarkening&&((e=this.onChangeInnerDarkening)==null||e.call(this,t)),this._innerDarkening=t}get bevelCurveRadius(){return this._bevelCurveRadius}set bevelCurveRadius(t){var e;t!==this._bevelCurveRadius&&((e=this.onChangeBevelCurveRadius)==null||e.call(this)),this._bevelCurveRadius=t}get gradientBackground(){return this._gradientBackground}set gradientBackground(t){var e;t!==this._gradientBackground&&((e=this.onChangeGradientBackground)==null||e.call(this,t)),this._gradientBackground=t}get gamma(){return this._gamma}set gamma(t){var e;t!==this._gamma&&((e=this.onChangeGamma)==null||e.call(this,t)),this._gamma=t}get fluidIterations(){return this._fluidIterations}set fluidIterations(t){var e;t!==this._fluidIterations&&((e=this.onChangeFluidIterations)==null||e.call(this,t)),this._fluidIterations=t}get fluidScale(){return this._fluidScale}set fluidScale(t){var e;t!==this._fluidScale&&((e=this.onChangeFluidScale)==null||e.call(this,t)),this._fluidScale=t}get simulationScale(){return this._simulationScale}set simulationScale(t){var e;t!==this._simulationScale&&((e=this.onChangeSimulationScale)==null||e.call(this,t)),this._simulationScale=t}get powerOf2Fluid(){return this._powerOf2Fluid}set powerOf2Fluid(t){var e;t!==this._powerOf2Fluid&&((e=this.onChangePowerOf2Fluid)==null||e.call(this,t)),this._powerOf2Fluid=t}static parse(t){const e=new J;return e._powerOf2Fluid=t.powerOf2Fluid,e._simulationScale=t.simulationScale,e._fluidScale=t.fluidScale,e._fluidIterations=t.fluidIterations,e._gamma=t.gamma,e._gradientBackground=t.gradientBackground,e._bevelCurveRadius=t.bevelCurveRadius,e._innerDarkening=t.innerDarkening,e._chromaticAberration=t.chromaticAberration,e._refraction=t.refraction,e._backgroundMultiplier=t.backgroundMultiplier,e._periodicBoundary=t.periodicBoundary,e._dragSpeed=t.dragSpeed,e._dragCoefficient=t.dragCoefficient,e._motionDecayFactor=t.motionDecayFactor,e._surfaceDecayFactor=t.surfaceDecayFactor,e._timestepMultiplier=t.timestepMultiplier,e._fluidPhysicsScale=t.fluidPhysicsScale,e._paused=t.paused,e}}class V{constructor(t,e,i,a,o,u,c,n){r(this,"wrapT");r(this,"wrapS");r(this,"minFilter");r(this,"magFilter");r(this,"dataType");r(this,"internalFormat");r(this,"format");this.wrapT=n??t.CLAMP_TO_EDGE,this.wrapS=c??t.CLAMP_TO_EDGE,this.minFilter=u??t.NEAREST,this.magFilter=o??t.NEAREST,this.dataType=a??t.UNSIGNED_BYTE,this.internalFormat=i??null,this.format=e??t.RGBA}match(t){return this.wrapT===t.wrapT&&this.wrapS===t.wrapS&&this.minFilter===t.minFilter&&this.magFilter===t.magFilter&&this.dataType===t.dataType&&this.internalFormat===t.internalFormat&&this.format===t.format}}class ge{constructor(t,e,i,a){r(this,"wrapT");r(this,"wrapS");r(this,"minFilter");r(this,"magFilter");i&&(this.wrapT=i),a&&(this.wrapS=a),t&&(this.minFilter=t),e&&(this.magFilter=e)}}class Ee{constructor(t=4,e=!0){r(this,"unpackAlignment");r(this,"webGLFlipY");this.unpackAlignment=t,this.webGLFlipY=e}}class j extends V{constructor(e,i,a,o,u,c,n,f,d,x,p){super(e,u,c,n,f,d,x,p);r(this,"gl");r(this,"width");r(this,"height");r(this,"native");this.gl=e,this.width=i,this.height=a,this.native=o}static createTextureFromImage(e,i,a,o,u){if(a||(a=new V(e,null,null,null,null,null,null,null)),o||(o=new Ee),!u)switch(a.minFilter){case e.NEAREST_MIPMAP_NEAREST:case e.LINEAR_MIPMAP_NEAREST:case e.NEAREST_MIPMAP_LINEAR:case e.LINEAR_MIPMAP_LINEAR:u=!0;break;default:u=!1}const c=e.createTexture();if(!c)throw new Error("create texture failed");return e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,c),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,a.minFilter),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,a.magFilter),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,a.wrapS),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,a.wrapT),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.webGLFlipY),e.texImage2D(e.TEXTURE_2D,0,a.internalFormat===null?a.format:a.internalFormat,a.format,a.dataType,i),u&&e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null),new j(e,i.width,i.height,c,a.format,a.internalFormat,a.dataType,a.magFilter,a.minFilter,a.wrapS,a.wrapT)}static createTexture(e,i,a,o,u,c,n){if(o||(o=new V(e,null,null,null,null,null,null,null)),c||(c=new Ee),!n)switch(o.minFilter){case e.NEAREST_MIPMAP_NEAREST:case e.LINEAR_MIPMAP_NEAREST:case e.NEAREST_MIPMAP_LINEAR:case e.LINEAR_MIPMAP_LINEAR:n=!0;break;default:n=!1}u||(u=null);const f=e.createTexture();if(!f)throw new Error("create texture failed");return e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,o.minFilter),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,o.magFilter),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,o.wrapS),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,o.wrapT),e.pixelStorei(e.UNPACK_ALIGNMENT,c.unpackAlignment),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,c.webGLFlipY),e.texImage2D(e.TEXTURE_2D,0,o.internalFormat===null?o.format:o.internalFormat,i,a,0,o.format,o.dataType,u),n&&e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null),new j(e,i,a,f,o.format,o.internalFormat,o.dataType,o.magFilter,o.minFilter,o.wrapS,o.wrapT)}static updateGLTextureParameters(e,i,a){e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),a.magFilter&&e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,a.magFilter),a.minFilter&&e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,a.minFilter),a.wrapS&&e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,a.wrapS),a.wrapT&&e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,a.wrapT),e.bindTexture(e.TEXTURE_2D,null)}}const Xe={lastActiveTexture:-1};class q{constructor(t,e,i,a){r(this,"alwaysDirty",!1);r(this,"gl");r(this,"name");r(this,"location");r(this,"data");r(this,"dirty",!0);this.gl=t,this.name=e,this.location=i,this.data=a}}class C extends q{constructor(e,i,a,o=!1){super(e,i,a,null);r(this,"cube");r(this,"type");r(this,"samplerIndex",0);r(this,"gpuSideValue",-1);this.cube=o,this.type=o?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D}apply(){if(this.data===null)return;const e=this.gl.TEXTURE0+this.samplerIndex;Xe.lastActiveTexture!==e&&(this.gl.activeTexture(e),Xe.lastActiveTexture=e),this.gl.bindTexture(this.type,this.data),this.gpuSideValue!==this.samplerIndex&&(this.gl.uniform1i(this.location,this.samplerIndex),this.gpuSideValue=this.samplerIndex)}}class me extends q{constructor(t,e,i,a=0,o=0){const u=new Float32Array([a,o]);super(t,e,i,u)}apply(){if(this.data===null)return;const t=this.data;this.gl.uniform2f(this.location,t[0],t[1]),this.dirty=!1}}class w extends q{constructor(t,e,i,a=0){super(t,e,i,a)}apply(){this.data!==null&&(this.gl.uniform1f(this.location,this.data),this.dirty=!1)}}class Ge extends q{constructor(t,e,i,a=0){super(t,e,i,a)}apply(){this.data!==null&&(this.gl.uniform1i(this.location,this.data),this.dirty=!1)}}class bt extends q{constructor(t,e,i,a=!1){super(t,e,i,a)}apply(){this.data!==null&&(this.gl.uniform1i(this.location,this.data?1:0),this.dirty=!1)}}class je extends q{constructor(e,i,a,o,u){const c=u||new Float32Array(o*4);super(e,i,a,c);r(this,"arraySize");r(this,"buffer");this.arraySize=o,this.buffer=c}apply(){this.data!==null&&(this.gl.uniform4fv(this.location,this.data),this.dirty=!1)}}class ze extends q{constructor(e,i,a,o,u){const c=u||new Float32Array(o*2);super(e,i,a,c);r(this,"arraySize");r(this,"buffer");this.arraySize=o,this.buffer=c}apply(){this.data!==null&&(this.gl.uniform2fv(this.location,this.data),this.dirty=!1)}}class We{constructor(t){r(this,"closeBracket","");r(this,"openBracket","");r(this,"contents",[]);t&&(this.openBracket=t.charAt(0),this.closeBracket=t.charAt(1))}toString(){let t=this.openBracket;for(let e=0;e<this.contents.length;e++)t+=this.contents[e].toString();return t+this.closeBracket}}class xe{constructor(t){r(this,"contents");r(this,"toString",()=>this.contents);if(!t){this.contents="";return}this.contents=t}}class N{constructor(t,e,i=1){r(this,"name");r(this,"location");r(this,"itemCount");r(this,"byteSize");r(this,"type",5126);this.name=t,this.location=e,this.itemCount=i,this.byteSize=i*4}}const Q={nativeClassName:l=>{const t={}.toString.call(l).slice(8,-1);return t==="Object"||t==="Function"||t==="Math"||t==="JSON"?null:t},isNativeObject:l=>Q.nativeClassName(l)!==null,instanceof:(l,t)=>{if(!t)return!1;switch(t){case Array:return l instanceof Array;case Boolean:return typeof l=="boolean";case Number:return typeof l=="number";case String:return typeof l=="string";default:return l?typeof t=="function"?l instanceof t:typeof t=="object"&&Q.isNativeObject(l)&&l instanceof t?!0:t===N&&l.__name__!==null&&l.__ename__===null:!1}},cast:(l,t)=>{if(!l||Q.instanceof(l,t))return l;throw new Error("Cannot cast "+Q.nativeClassName(l)+" to "+Q.nativeClassName(t))}},U={substr:(l,t=0,e=l.length)=>{let i=t,a=e;return e<0&&(a=l.length+e),t>a&&([i,a]=[a,i]),l.substring(i,a)},remove:(l,t)=>{const e=l.indexOf(t);return e!==-1?(l.splice(e,1),!0):!1},stripComments:l=>{const t=RegExp("(/\\*([\\s\\S]*?)\\*/)|(//(.*)$)","igm".split("u").join(""));return l.replace(t,"")},now(){return typeof performance<"u"&&typeof performance.now=="function"?performance.now():Date.now()},bracketExplode(l,t){if(t.length!==2)return null;let e="";const i=t.charAt(0),a=t.charAt(1),o=new We;let u=o;const c=[];let n=null;for(let f=0;f<l.length;f++)if(e=l.charAt(f),e===i){const d=new We(t);u.contents.push(d),c.push(u),u=d,n=d}else e===a?(u=c.pop(),n=u):(n instanceof xe||(n=new xe,u.contents.push(n)),Q.cast(n,xe).contents+=e);return o},compressedToExploded:(l,t)=>{let e=0,i=0;for(let a=0;a<l.contents.length;a++){const o=l.contents[a],u=o.toString().length;if(o instanceof xe){if(e+u>t)break;e+=u}i+=u}return t-e+i},injectConstValue:(l,t,e)=>U.stripComments(l),floorPowerOf2:l=>{let t=Math.floor(l);return t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,(t|=t>>16)-(t>>1)},log2:l=>Math.log(l)*1.4426950408889634};class K{constructor(t){r(this,"_aStride",0);r(this,"_textures",[]);r(this,"_attributes",[]);r(this,"_uniforms",[]);r(this,"_numTextures",0);r(this,"_vertSource","");r(this,"_fragSource","");r(this,"_vert",null);r(this,"_frag",null);r(this,"_prog",null);r(this,"_name","");r(this,"_ready",!1);r(this,"_active",!1);r(this,"gl");this.gl=t,this._name=this.constructor.name,this.initSources()}initSources(){}createProperties(){}create(){this.compile(this._vertSource,this._fragSource),this._ready=!0}destroy(){this.gl.deleteShader(this._vert),this.gl.deleteShader(this._frag),this.gl.deleteProgram(this._prog),this._prog=null,this._vert=null,this._frag=null,this._ready=!1}compile(t,e){const i=this.gl.createShader(this.gl.VERTEX_SHADER);if(!i)throw new Error("Error creating vertex shader");if(this.gl.shaderSource(i,t),this.gl.compileShader(i),!this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS))throw new Error("Error compiling vertex shader");const a=this.gl.createShader(this.gl.FRAGMENT_SHADER);if(!a)throw new Error("Error creating fragment shader");if(this.gl.shaderSource(a,e),this.gl.compileShader(a),!this.gl.getShaderParameter(a,this.gl.COMPILE_STATUS))throw new Error("Error compiling fragment shader");const o=this.gl.createProgram();if(o===null)throw new Error("Error creating shader program");if(this.gl.attachShader(o,i),this.gl.attachShader(o,a),this.gl.linkProgram(o),!this.gl.getProgramParameter(o,this.gl.LINK_STATUS))throw new Error("Unable to initialize the shader program."+this.gl.getProgramInfoLog(o));const u=new Map;for(let x=this.gl.getProgramParameter(o,this.gl.ACTIVE_UNIFORMS);x-- >0;){const p=this.gl.getActiveUniform(o,x),y=this.gl.getUniformLocation(o,p.name);u.set(p.name,y)}const c=new Map;for(let x=this.gl.getProgramParameter(o,this.gl.ACTIVE_ATTRIBUTES);x-- >0;){const p=this.gl.getActiveAttrib(o,x),y=this.gl.getAttribLocation(o,p.name);c.set(p.name,y)}this._vert=i,this._frag=a,this._prog=o,this._numTextures=0;const n=[];let f=0;for(let x=this._uniforms;f<x.length;f++){const p=x[f];let y=u.get(p.name);y||(y=u.get(p.name+"[0]")),p instanceof C&&(p.samplerIndex=this._numTextures++,this._textures[p.samplerIndex]=p),y?p.location=y:n.push(p)}for(;n.length>0;){const x=n.pop();U.remove(this._uniforms,x)}f=0;const d=this._attributes;for(;f<d.length;){const x=d[f++],p=c.get(x.name);x.location=p??-1}}deactivate(){this._active&&(this._active=!1,this.disableAttributes())}disableAttributes(){for(let t=0,e=this._attributes.length;t<e;t++){const i=this._attributes[t].location;i!==-1&&this.gl.disableVertexAttribArray(i)}}toString(){return"[Shader("+this._name+", attributes:"+this._attributes.length+", uniforms:"+this._uniforms.length+")]"}setupAndActive(){this._active||(this._ready||this.create(),this.gl.useProgram(this._prog));for(const e of this._uniforms)(e.dirty||e.alwaysDirty)&&e.apply();let t=0;for(const e of this._attributes)e.location!==-1&&(this.gl.enableVertexAttribArray(e.location),this.gl.vertexAttribPointer(e.location,e.itemCount,e.type,!1,this._aStride,t)),t+=e.byteSize;this._active||(this._active=!0)}}const Ne={STORAGE_QUALIFIER_TYPE:(()=>{const l=new pe;return l.content.set("const",["bool","int","float","vec2","vec3","vec4","bvec2","bvec3","bvec4","ivec2","ivec3","ivec4","mat2","mat3","mat4"]),l.content.set("attribute",["float","vec2","vec3","vec4","mat2","mat3","mat4"]),l.content.set("uniform",["bool","int","float","vec2","vec3","vec4","bvec2","bvec3","bvec4","ivec2","ivec3","ivec4","mat2","mat3","mat4","sampler2D","samplerCube"]),l.content.set("varying",["float","vec2","vec3","vec4","mat2","mat3","mat4"]),l})(),PRECISION_QUALIFIERS:["lowp","mediump","highp"],SAMPLE_LOGO_TEXTURE_GLSL:`
vec4 sampleLumaLogoTexture(vec2 uv) {
    // fraction of viewport
    float displayWidth = 0.8;
    float aspectRatio = 2048.0/582.0;
    // we want to display the texture at this width in the center of the viewport
    // we workout a new uv coordinate that will sample the texture at this width
    vec2 uvClip = uv * 2. - 1.;
    // scale up to display width
    uvClip /= displayWidth;
    // correct aspect ratio
    uvClip.y *= aspectRatio / viewportAspectRatio;
    vec2 uvCentered = uvClip * .5 + .5;
    // if out of bounds, return 0
    if (uvCentered.x < 0. || uvCentered.x > 1. || uvCentered.y < 0. || uvCentered.y > 1.) {
        return vec4(0.);
    }
    return texture2D(lumaLogoTexture, uvCentered);
}  
  `};class Rt extends K{constructor(e){super(e);r(this,"texture");r(this,"lumaLogoTexture");r(this,"invGamma");r(this,"time_s");r(this,"refraction");r(this,"chromaticAberration");r(this,"innerDarkening");r(this,"gradientBackground");r(this,"viewportAspectRatio");r(this,"vertexPosition");this.createProperties()}createProperties(){super.createProperties();const e=new C(this.gl,"texture",null,!1);this.texture=e,this._uniforms.push(e);const i=new C(this.gl,"lumaLogoTexture",null,!1);this.lumaLogoTexture=i,this._uniforms.push(i);const a=new w(this.gl,"invGamma",null);this.invGamma=a,this._uniforms.push(a);const o=new w(this.gl,"time_s",null);this.time_s=o,this._uniforms.push(o);const u=new w(this.gl,"refraction",null);this.refraction=u,this._uniforms.push(u);const c=new w(this.gl,"chromaticAberration",null);this.chromaticAberration=c,this._uniforms.push(c);const n=new w(this.gl,"innerDarkening",null);this.innerDarkening=n,this._uniforms.push(n);const f=new w(this.gl,"gradientBackground",null);this.gradientBackground=f,this._uniforms.push(f);const d=new w(this.gl,"viewportAspectRatio",null);this.viewportAspectRatio=d,this._uniforms.push(d);const x=new N("vertexPosition",0,2);this.vertexPosition=x,this._attributes.push(x),this._aStride+=8}initSources(){this._vertSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
varying vec2 texelCoord;

void main() {
    texelCoord = vertexPosition;
    gl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );
}
`,this._fragSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

const float gamma = 2.1;

vec3 toLinear(vec3 v){
    return pow(v,vec3(gamma));
}

vec4 toLinear(vec4 v){
    return vec4(toLinear(v.rgb),v.a);
}

vec3 toGamma(vec3 v){
    return pow(v,vec3(1./gamma));
}

vec4 toGamma(vec4 v){
    return vec4(toGamma(v.rgb),v.a);
}

vec3 brightnessContrast(vec3 value, float brightness, float contrast) {
    return (value - 0.5) * contrast + 0.5 + brightness;
}
uniform sampler2D texture;
uniform sampler2D lumaLogoTexture;
uniform float invGamma;
uniform float time_s;
uniform float refraction;
uniform float chromaticAberration;
uniform float innerDarkening;
uniform float gradientBackground;
uniform float viewportAspectRatio;
varying vec2 texelCoord;
`+Ne.SAMPLE_LOGO_TEXTURE_GLSL+`
void main(void){
    vec4 lumaLogoSample = sampleLumaLogoTexture(texelCoord);
    
    #if 0
    float centerHeight = lumaLogoSample.r;
    
    float gradientX = dFdx(centerHeight);
    float gradientY = dFdy(centerHeight);
    
    #elif 0
    float centerHeight = lumaLogoSample.r;
    
    
    float leftHeight = texture2D(lumaLogoTexture, texelCoord - vec2(invResolution.x, 0.0)).r;
    float rightHeight = texture2D(lumaLogoTexture, texelCoord + vec2(invResolution.x, 0.0)).r;
    float downHeight = texture2D(lumaLogoTexture, texelCoord - vec2(0.0, invResolution.y)).r;
    float upHeight = texture2D(lumaLogoTexture, texelCoord + vec2(0.0, invResolution.y)).r;
    float gradientX = ((rightHeight - centerHeight) + (centerHeight - leftHeight)) * 0.5;
    float gradientY = ((upHeight - centerHeight) + (centerHeight - downHeight)) * 0.5;
    
    #elif 1
    float sign = -(lumaLogoSample.b * 2.0 - 1.0);
    float gradientX = lumaLogoSample.r * sign;
    float gradientY = lumaLogoSample.g * sign;
    float centerHeight = 1. - clamp(lumaLogoSample.r + lumaLogoSample.g, 0., 1.);
    #endif    
    
    vec3 surfaceNormal = vec3(gradientX, gradientY, 1.0);
    vec2 refractionOffset = surfaceNormal.xy * refraction;
    vec2 texelCoordRefracted = texelCoord + refractionOffset;
    vec4 sample = vec4(
        texture2D(texture, texelCoordRefracted + refractionOffset * chromaticAberration).r,
        texture2D(texture, texelCoordRefracted).g,
        texture2D(texture, texelCoordRefracted - refractionOffset * chromaticAberration).b,
        1.0
    );
    float innerDarkeningFactor = mix(smoothstep(1.0, 0.5, centerHeight), 1.0, 1.0 - innerDarkening);
    
    vec2 gradientDirection = vec2(0.5, 0.5);
    float g = sin(dot(gradientDirection, texelCoord + refractionOffset) * 8. + time_s * 0.5) * 0.5 + 0.5;
    g *= gradientBackground * (1. - centerHeight * 0.9);
    gl_FragColor = vec4(
        (
            (sample.rgb * (g * 2. + 1.))
            * innerDarkeningFactor
            + g * 0.25
        )
        * pow(centerHeight, 0.05) 
        * lumaLogoSample.a 
        , 
        1.0
    );
}
`}}class Z extends K{constructor(e){super(e);r(this,"invResolution");r(this,"invAspectRatio");r(this,"velocityBoundaryEnabled");r(this,"vertexPosition")}createProperties(){super.createProperties();const e=new me(this.gl,"invResolution",null,0,0);this.invResolution=e,this._uniforms.push(e);const i=new w(this.gl,"invAspectRatio",null,0);this.invAspectRatio=i,this._uniforms.push(i);const a=new bt(this.gl,"velocityBoundaryEnabled",null,!1);this.velocityBoundaryEnabled=a,this._uniforms.push(a);const o=new N("vertexPosition",0,2);this.vertexPosition=o,this._attributes.push(o),this._aStride+=8}initSources(){this._vertSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
uniform vec2 invResolution;
uniform float invAspectRatio;
varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;
varying vec2 p;

void main() {
  texelCoord = vertexPosition;
  vL = texelCoord - vec2(invResolution.x,0);
  vR = texelCoord + vec2(invResolution.x,0);
  vB = texelCoord - vec2(0,invResolution.y);
  vT = texelCoord + vec2(0,invResolution.y);
  vec2 clipSpace = 2.0*texelCoord - 1.0;
  p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);
  gl_Position = vec4(clipSpace, 0.0, 1.0 );
}`,this._fragSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
    return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
    return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )
`}}class wt extends Z{constructor(e){super(e);r(this,"surface");r(this,"dt");r(this,"dx")}createProperties(){super.createProperties();const e=new C(this.gl,"surface",null,!1);this.surface=e,this._uniforms.push(e);const i=new w(this.gl,"dt",null);this.dt=i,this._uniforms.push(i);const a=new w(this.gl,"dx",null);this.dx=a,this._uniforms.push(a)}initSources(){this._vertSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

varying vec2 p;

void main() {
  texelCoord = vertexPosition;
  
  vL = texelCoord - vec2(invResolution.x,0);
  vR = texelCoord + vec2(invResolution.x,0);
  vB = texelCoord - vec2(0,invResolution.y);
  vT = texelCoord + vec2(0,invResolution.y);
  
  vec2 clipSpace = 2.0*texelCoord - 1.0;  
  
  p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);

  gl_Position = vec4(clipSpace, 0.0, 1.0 );  
}
`,this._fragSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
    return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
    return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )

uniform sampler2D surface;
uniform float dt;
uniform float dx;
varying vec2 texelCoord;
varying vec2 p;
`}}class Ft extends wt{constructor(e){super(e);r(this,"enableUserVelocity");r(this,"decayFactor");r(this,"time_s");r(this,"userVelocityTexture");r(this,"backgroundTexture");r(this,"pointerPositions");r(this,"pointerData");r(this,"activePointerCount");r(this,"backgroundMultiplier");this.createProperties()}set_enableUserVelocity(e){return this.enableUserVelocity=e,this._fragSource=U.injectConstValue(this._fragSource,"enableUserVelocity",e)??"",this._ready&&this.destroy(),e}createProperties(){super.createProperties();const e=new w(this.gl,"decayFactor",null);this.decayFactor=e,this._uniforms.push(e);const i=new w(this.gl,"time_s",null);this.time_s=i,this._uniforms.push(i);const a=new C(this.gl,"userVelocityTexture",null,!1);this.userVelocityTexture=a,this._uniforms.push(a);const o=new C(this.gl,"backgroundTexture",null,!1);this.backgroundTexture=o,this._uniforms.push(o);const u=new je(this.gl,"pointerPositions",null,10);this.pointerPositions=u,this._uniforms.push(u);const c=new ze(this.gl,"pointerData",null,10);this.pointerData=c,this._uniforms.push(c);const n=new Ge(this.gl,"activePointerCount",null);this.activePointerCount=n,this._uniforms.push(n);const f=new w(this.gl,"backgroundMultiplier",null);this.backgroundMultiplier=f,this._uniforms.push(f)}initSources(){this._vertSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

varying vec2 p;

void main() {
  texelCoord = vertexPosition;
  
  vL = texelCoord - vec2(invResolution.x,0);
  vR = texelCoord + vec2(invResolution.x,0);
  vB = texelCoord - vec2(0,invResolution.y);
  vT = texelCoord + vec2(0,invResolution.y);
  
  vec2 clipSpace = 2.0*texelCoord - 1.0;  
  
  p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);

  gl_Position = vec4(clipSpace, 0.0, 1.0 );  
}
`;const e=[];function i(a){return`
    if (activePointerCount > ${a}) {
        vec2 pointer = pointerPositions[${a}].xy;
        vec2 lastFramePointer = pointerPositions[${a}].zw;
        float pressure = pointerData[${a}].y;
        float radius = pointerData[${a}].x;

        vec2 velocity = (pointer - lastFramePointer) / dt;
        float speed = length(velocity);

        float fp; // fractional projection
        float dist = distanceToSegment(pointer, lastFramePointer, p, fp);

        float R = radius + pressure * pressure * 0.1;

        float x = clamp(1.0 - dist * dist / R, 0., 1.);

        vec3 hsv = rgb2hsv(backgroundSample.rgb);
        hsv.y = pow(hsv.y, 0.35);
        vec3 rgb = hsv2rgb(hsv);

        color.rgb += min(
            brightnessContrast(
                rgb,
                0., // brightness
                1.0 // contrast
            )
            * x * 8. * (speed * 1. + 2.) * dt,
            vec3(1.)
        );
    }
    `}for(let a=0;a<10;a++)e.push(i(a));this._fragSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
    return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
    return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )

uniform sampler2D surface;
uniform float dt;
uniform float dx;
varying vec2 texelCoord;
varying vec2 p;

float distanceToSegment(vec2 a, vec2 b, vec2 p, out float fp){
  vec2 d = p - a;
  vec2 x = b - a;

  fp = 0.0; 
  float lx = length(x);
  
  if(lx <= 0.0001) return length(d);

  float projection = dot(d, x / lx); 

  fp = projection / lx;

  if(projection < 0.0)            return length(d);
  else if(projection > length(x)) return length(p - b);
  return sqrt(abs(dot(d,d) - projection*projection));
}

float distanceToSegment(vec2 a, vec2 b, vec2 p){
    float fp;
    return distanceToSegment(a, b, p, fp);
}
vec3 brightnessContrast(vec3 value, float brightness, float contrast) {
    return (value - 0.5) * contrast + 0.5 + brightness;
}

uniform float decayFactor;
uniform float time_s;
uniform sampler2D userVelocityTexture;
uniform sampler2D backgroundTexture;

uniform vec4 pointerPositions[10];

uniform vec2 pointerData[10];
uniform int activePointerCount;
uniform float backgroundMultiplier;

const bool enableUserVelocity = false;
  
vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}
  
vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
void main(){  
    vec4 color = texture2D(surface, texelCoord);
    vec4 backgroundSample = texture2D(backgroundTexture,
      texelCoord + vec2(
        0.5 * sin(time_s * 0.1),
        0.5 * cos(time_s * 0.1)
      )
    );
    
    vec4 dColor = backgroundSample * backgroundMultiplier - color;
    color += dColor * clamp(decayFactor * dt, 0., 1.0);
    if (enableUserVelocity) {
        vec2 userVelocity = texture2D(userVelocityTexture, texelCoord).xy;
        float v = length(userVelocity);
        float vdt = v * dt;
      
      color.rgb += vec3(vdt) * 0.1;
    }
    
    `+e.join(`
`)+`
    gl_FragColor = color;
  }
`}}class Et extends Z{constructor(e){super(e);r(this,"velocity");r(this,"dt");r(this,"dx")}createProperties(){super.createProperties();const e=new C(this.gl,"velocity",null,!1);this.velocity=e,this._uniforms.push(e);const i=new w(this.gl,"dt",null);this.dt=i,this._uniforms.push(i);const a=new w(this.gl,"dx",null);this.dx=a,this._uniforms.push(a)}initSources(){this._vertSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif
 
attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

varying vec2 p;

void main() {
    texelCoord = vertexPosition;
    vL = texelCoord - vec2(invResolution.x,0);
    vR = texelCoord + vec2(invResolution.x,0);
    vB = texelCoord - vec2(0,invResolution.y);
    vT = texelCoord + vec2(0,invResolution.y);
    vec2 clipSpace = 2.0*texelCoord - 1.0;    
    p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);
    gl_Position = vec4(clipSpace, 0.0, 1.0 );    
}
`,this._fragSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
    return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
    return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}


#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )

uniform sampler2D velocity;
uniform float dt;
uniform float dx;
varying vec2 texelCoord;
varying vec2 p;
`}}class Pt extends Et{constructor(e){super(e);r(this,"time_s");r(this,"userVelocityTexture");r(this,"lumaLogoTexture");r(this,"decayFactor");r(this,"dragCoefficient");r(this,"dragSpeed");r(this,"pointerPositions");r(this,"pointerData");r(this,"activePointerCount");r(this,"opticalFlowExponent");r(this,"gravity");r(this,"viewportAspectRatio");r(this,"enableUserVelocity");this.createProperties()}set_enableUserVelocity(e){return this.enableUserVelocity=e,this._fragSource=U.injectConstValue(this._fragSource,"enableUserVelocity",e)??"",this._ready&&this.destroy(),e}set_enableVelocityBoundary(e){return this.enableUserVelocity=e,this._fragSource=U.injectConstValue(this._fragSource,"enableUserVelocity",e)??"",this._ready&&this.destroy(),e}createProperties(){super.createProperties();const e=new w(this.gl,"time_s",null);this.time_s=e,this._uniforms.push(e);const i=new C(this.gl,"userVelocityTexture",null,!1);this.userVelocityTexture=i,this._uniforms.push(i);const a=new C(this.gl,"lumaLogoTexture",null,!1);this.lumaLogoTexture=a,this._uniforms.push(a);const o=new w(this.gl,"decayFactor",null);this.decayFactor=o,this._uniforms.push(o);const u=new w(this.gl,"dragCoefficient",null);this.dragCoefficient=u,this._uniforms.push(u);const c=new w(this.gl,"dragSpeed",null);this.dragSpeed=c,this._uniforms.push(c);const n=new je(this.gl,"pointerPositions",null,10);this.pointerPositions=n,this._uniforms.push(n);const f=new ze(this.gl,"pointerData",null,10);this.pointerData=f,this._uniforms.push(f);const d=new Ge(this.gl,"activePointerCount",null);this.activePointerCount=d,this._uniforms.push(d);const x=new w(this.gl,"opticalFlowExponent",null);this.opticalFlowExponent=x,this._uniforms.push(x);const p=new me(this.gl,"gravity",null);this.gravity=p,this._uniforms.push(p);const y=new w(this.gl,"viewportAspectRatio",null);this.viewportAspectRatio=y,this._uniforms.push(y)}initSources(){this._vertSource+=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif
 
attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;
varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;
varying vec2 p;

void main() {
    texelCoord = vertexPosition;
    
    vL = texelCoord - vec2(invResolution.x,0);
    vR = texelCoord + vec2(invResolution.x,0);
    vB = texelCoord - vec2(0,invResolution.y);
    vT = texelCoord + vec2(0,invResolution.y);
    
    vec2 clipSpace = 2.0*texelCoord - 1.0;    
    
    p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);

    gl_Position = vec4(clipSpace, 0.0, 1.0 );    
}
`;const e=[];function i(a){return`
        if (activePointerCount > ${a}) {
            vec2 pointer = pointerPositions[${a}].xy;
            vec2 lastFramePointer = pointerPositions[${a}].zw;
            float radius = pointerData[${a}].x;
            float pressure = pointerData[${a}].y;

            vec2 velocity = (pointer - lastFramePointer) / dt;
            float speed = length(velocity);

            float fp; // fractional projection
            float dist = distanceToSegment(pointer, lastFramePointer, p, fp);

            float taperFactor = 0.6; // 1 => 0 at lastMouse, 0 => no tapering
            float projectedFraction = 1.0 - clamp(fp, 0.0, 1.0) * taperFactor;

            float R = radius * 0.5 + pressure * pressure * pressure * 0.1;

            float m = exp(-dist/R) * dragCoefficient; // drag coefficient
            m *= projectedFraction * projectedFraction;

            vec2 targetVelocity = velocity * dx * dragSpeed * dt * 60.;
            v += (targetVelocity - v) * m;
        }
    `}for(let a=0;a<10;a++)e.push(i(a));this._fragSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
    return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
    return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )

uniform sampler2D velocity;
    uniform float dt;
    uniform float dx;
    varying vec2 texelCoord;
    varying vec2 p;

float distanceToSegment(vec2 a, vec2 b, vec2 p, out float fp){
    vec2 d = p - a;
    vec2 x = b - a;

    fp = 0.0; 
    float lx = length(x);
    
    if(lx <= 0.0001) return length(d);

    float projection = dot(d, x / lx); 

    fp = projection / lx;

    if(projection < 0.0)            return length(d);
    else if(projection > length(x)) return length(p - b);
    return sqrt(abs(dot(d,d) - projection*projection));
}

float distanceToSegment(vec2 a, vec2 b, vec2 p){
    float fp;
    return distanceToSegment(a, b, p, fp);
}
vec3 mod289(vec3 x) {
    return x-floor(x*(1./289.))*289.;
}

vec4 mod289(vec4 x) {
    return x-floor(x*(1./289.))*289.;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.)+1.)*x);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159-.85373472095314*r;
}

float snoise(vec3 v) {
    const vec2 C=vec2(1./6.,1./3.);
    const vec4 D=vec4(0.,.5,1.,2.);
    
    vec3 i=floor(v+dot(v,C.yyy));
    vec3 x0=v-i+dot(i,C.xxx);
    
    vec3 g=step(x0.yzx,x0.xyz);
    vec3 l=1.-g;
    vec3 i1=min(g.xyz,l.zxy);
    vec3 i2=max(g.xyz,l.zxy);
    
    vec3 x1=x0-i1+C.xxx;
    vec3 x2=x0-i2+C.yyy;
    vec3 x3=x0-D.yyy;
    
    i=mod289(i);
    vec4 p=permute(permute(permute(
        i.z+vec4(0.,i1.z,i2.z,1.))
        +i.y+vec4(0.,i1.y,i2.y,1.))
        +i.x+vec4(0.,i1.x,i2.x,1.));
    
    float n_=.142857142857;
    vec3 ns=n_*D.wyz-D.xzx;
    
    vec4 j=p-49.*floor(p*ns.z*ns.z);
    
    vec4 x_=floor(j*ns.z);
    vec4 y_=floor(j-7.*x_);
    
    vec4 x=x_*ns.x+ns.yyyy;
    vec4 y=y_*ns.x+ns.yyyy;
    vec4 h=1.-abs(x)-abs(y);
    
    vec4 b0=vec4(x.xy,y.xy);
    vec4 b1=vec4(x.zw,y.zw);
    
    vec4 s0=floor(b0)*2.+1.;
    vec4 s1=floor(b1)*2.+1.;
    vec4 sh=-step(h,vec4(0.));
    
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
    vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    
    vec3 p0=vec3(a0.xy,h.x);
    vec3 p1=vec3(a0.zw,h.y);
    vec3 p2=vec3(a1.xy,h.z);
    vec3 p3=vec3(a1.zw,h.w);
    
    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x;
    p1*=norm.y;
    p2*=norm.z;
    p3*=norm.w;
    
    vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
    m=m*m;
    return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),
    dot(p2,x2),dot(p3,x3)));
}

vec3 snoiseVec3(vec3 x){
    float s=snoise(vec3(x));
    float s1=snoise(vec3(x.y-19.1,x.z+33.4,x.x+47.2));
    float s2=snoise(vec3(x.z+74.2,x.x-124.5,x.y+99.4));
    vec3 c=vec3(s,s1,s2);
    return c;
}

vec3 curlNoise(vec3 p){
    const float e=.1;
    vec3 dx=vec3(e,0.,0.);
    vec3 dy=vec3(0.,e,0.);
    vec3 dz=vec3(0.,0.,e);
    
    vec3 p_x0=snoiseVec3(p-dx);
    vec3 p_x1=snoiseVec3(p+dx);
    vec3 p_y0=snoiseVec3(p-dy);
    vec3 p_y1=snoiseVec3(p+dy);
    vec3 p_z0=snoiseVec3(p-dz);
    vec3 p_z1=snoiseVec3(p+dz);
    
    float x=p_y1.z-p_y0.z-p_z1.y+p_z0.y;
    float y=p_z1.x-p_z0.x-p_x1.z+p_x0.z;
    float z=p_x1.y-p_x0.y-p_y1.x+p_y0.x;
    
    return normalize(vec3(x,y,.5));
}
    uniform float time_s;
    uniform sampler2D userVelocityTexture;
    uniform sampler2D lumaLogoTexture;
    uniform float decayFactor;
    uniform float dragCoefficient;
    uniform float dragSpeed;
    
    uniform vec4 pointerPositions[10];
    
    uniform vec2 pointerData[10];
    uniform int activePointerCount;
    uniform float opticalFlowExponent;
    uniform vec2 gravity;
    uniform float viewportAspectRatio;
    const bool enableUserVelocity = false;
    `+Ne.SAMPLE_LOGO_TEXTURE_GLSL+`
    void main(){
        vec2 v = texture2D(velocity, texelCoord).xy;
        
        
        
        vec2 targetVelocity = gravity;
        
        {
            vec2 dv = targetVelocity - v;
            v += dv * clamp(decayFactor * dt, 0., 1.0);
        }
        
        #if 1
        {
            vec4 lumaLogoSample = sampleLumaLogoTexture(texelCoord);
            float sign = -(lumaLogoSample.b * 2.0 - 1.0);
            float gradientX = lumaLogoSample.r * sign;
            float gradientY = lumaLogoSample.g * sign;
            float centerHeight = 1. - clamp(lumaLogoSample.r + lumaLogoSample.g, 0., 1.);
            
            vec2 logoTargetVelocity = mix(-v, v, centerHeight * lumaLogoSample.a);
            vec2 dv = logoTargetVelocity - v;
            v += dv * clamp(5. * dt, 0., 1.0);
        }
        #endif
        
        if (enableUserVelocity) {
            vec2 userVelocity = texture2D(userVelocityTexture, texelCoord).xy;
            float l = length(userVelocity + 0.000001);
            float lE = pow(abs(l), opticalFlowExponent);
            v += userVelocity * (lE/l);
        }
        v += curlNoise(vec3(texelCoord, time_s * 0.1)).xy * 0.01;
        v += curlNoise(vec3(texelCoord * 2., (time_s - 20.0) * 0.1)).xy * 0.02;
`+e.join(`
`)+`
        gl_FragColor = vec4(v, 0, 1.);
    }
`}}class Ct extends K{constructor(e){super(e);r(this,"texture");r(this,"vertexPosition");r(this,"testVal");this.createProperties()}createProperties(){super.createProperties(),this.texture=new C(this.gl,"texture",null,!1),this._uniforms.push(this.texture),this.vertexPosition=new N("vertexPosition",0,2),this._attributes.push(this.vertexPosition),this.testVal=2,this._aStride+=8}initSources(){this._vertSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
varying vec2 texelCoord;

void main() {
    texelCoord = vertexPosition;
    gl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0);
}
        `,this._fragSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform sampler2D texture;
varying vec2 texelCoord;

void main(void){
    gl_FragColor = abs(texture2D(texture, texelCoord));
}
        `}}class At extends K{constructor(e){super(e);r(this,"particleData");r(this,"particleUV")}createProperties(){super.createProperties();const e=new C(this.gl,"particleData",null,!1);this.particleData=e,this._uniforms.push(e);const i=new N("particleUV",0,2);this.particleUV=i,this._attributes.push(i),this._aStride+=8}initSources(){this._vertSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform sampler2D particleData;
attribute vec2 particleUV;
varying vec4 color;

void main() {
    vec2 p = texture2D(particleData, particleUV).xy;
    vec2 v = texture2D(particleData, particleUV).zw;
    gl_PointSize = 1.0;
    gl_Position = vec4(p, 0.0, 1.0);
    color = vec4(1.0, 1.0, 1.0, 1.0);
}`,this._fragSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

varying vec4 color;
void main() {
    gl_FragColor = vec4(color);
}`}}class Dt extends At{constructor(t){super(t),this.createProperties()}createProperties(){super.createProperties()}initSources(){this._vertSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform sampler2D particleData;
attribute vec2 particleUV;
varying vec4 color;

void main() {
    vec2 p = texture2D(particleData, particleUV).xy;
    vec2 v = texture2D(particleData, particleUV).zw;
    gl_PointSize = 3.0;
    gl_Position = vec4(p, 0.0, 1.0);
    float speed = length(v);
    float x = clamp(speed * 4.0, 0., 1.);
    color.rgb = (
        mix(vec3(40.4, 0.0, 35.0) / 300.0, vec3(0.2, 47.8, 100) / 100.0, x)
        + (vec3(63.1, 92.5, 100) / 100.) * x*x*x * .1
    ) + vec3(0.5);
    color.a = 1.0;
}`,this._fragSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

varying vec4 color;
void main() {
    gl_FragColor = vec4(color);
}`}}class Bt extends K{constructor(e){super(e);r(this,"texture");r(this,"vertexPosition");this.createProperties()}createProperties(){super.createProperties();const e=new C(this.gl,"texture",0,!1);this.texture=e,this._uniforms.push(e);const i=new N("vertexPosition",0,2);this.vertexPosition=i,this._attributes.push(i),this._aStride+=8}initSources(){this._vertSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
    varying vec2 texelCoord;
    void main(){
        texelCoord = vertexPosition;
        gl_Position = vec4(vertexPosition*2.0 - 1.0, 0.0, 1.0 );
    }
`,this._fragSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform sampler2D texture;
varying vec2 texelCoord;
void main(){
    gl_FragColor = texture2D(texture, texelCoord);
}
`}}class Lt{constructor(t,e,i,a,o,u){r(this,"shaderMap",new pe);r(this,"screenTriangle",null);r(this,"nullTexture",null);r(this,"resample",null);r(this,"unitQuad",null);r(this,"gl",null);this.gl=t??this.gl,this.unitQuad=e??this.unitQuad,this.screenTriangle=i??this.screenTriangle,this.resample=a??this.resample,this.nullTexture=o??this.nullTexture,this.shaderMap=u??this.shaderMap}}const $=class ${static getScreenTriangle(t){const e=$.resources;if(e.screenTriangle===null){const i=new Float32Array([0,0,2,0,0,2]);e.screenTriangle=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,e.screenTriangle),t.bufferData(t.ARRAY_BUFFER,i,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null)}return e.screenTriangle}static getResampleShader(t){const e=$.resources;return e.resample===null&&(e.resample=new Bt(t)),e.resample}static getNullTexture(t){const e=$.resources;if(e.nullTexture===null){const i=new V(t,null,null,null,null,null,null,null);e.nullTexture=j.createTexture(t,1,1,i,new Uint8Array([0,0,0,0]),null,!1)}return e.nullTexture}static getShaderWithKey(t,e,i){const a=$.resources;let o=a.shaderMap.get(e);return o||(o=i(t,e),a.shaderMap.content.set(e,o)),o}};r($,"resources",new Lt(null,null,null,null,null,null));let L=$;class Ot extends Z{constructor(e){super(e);r(this,"velocity");r(this,"target");r(this,"dt");r(this,"rdx");this.createProperties()}createProperties(){super.createProperties();const e=new C(this.gl,"velocity",null,!1);this.velocity=e,this._uniforms.push(e);const i=new C(this.gl,"target",null,!1);this.target=i,this._uniforms.push(i);const a=new w(this.gl,"dt",null);this.dt=a,this._uniforms.push(a);const o=new w(this.gl,"rdx",null);this.rdx=o,this._uniforms.push(o)}initSources(){this._vertSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif
 
attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

varying vec2 p;

void main() {
  texelCoord = vertexPosition;

  vL = texelCoord - vec2(invResolution.x,0);
  vR = texelCoord + vec2(invResolution.x,0);
  vB = texelCoord - vec2(0,invResolution.y);
  vT = texelCoord + vec2(0,invResolution.y);

  vec2 clipSpace = 2.0*texelCoord - 1.0;

  p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);

  gl_Position = vec4(clipSpace, 0.0, 1.0 );
}
`,this._fragSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
    return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
    return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )

uniform sampler2D velocity;
uniform sampler2D target;
uniform float dt;
uniform float rdx; 

varying vec2 texelCoord;
varying vec2 p;

void main(void){
  
  vec2 tracedPos = p - dt * rdx * texture2D(velocity, texelCoord).xy;

  gl_FragColor = texture2D(target, simToTexelSpace(tracedPos));
}
`}}class Ut extends Z{constructor(e){super(e);r(this,"velocity");r(this,"halfrdx");this.createProperties()}createProperties(){super.createProperties();const e=new C(this.gl,"velocity",null,!1);this.velocity=e,this._uniforms.push(e);const i=new w(this.gl,"halfrdx",null);this.halfrdx=i,this._uniforms.push(i)}initSources(){this._vertSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;
varying vec2 p;

void main() {
    texelCoord = vertexPosition;
    
    vL = texelCoord - vec2(invResolution.x,0);
    vR = texelCoord + vec2(invResolution.x,0);
    vB = texelCoord - vec2(0,invResolution.y);
    vT = texelCoord + vec2(0,invResolution.y);
    
    vec2 clipSpace = 2.0*texelCoord - 1.0;
    
    p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);

    gl_Position = vec4(clipSpace, 0.0, 1.0 );
}
`,this._fragSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
        return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
        return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )

uniform sampler2D velocity;
uniform float halfrdx;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

void main(void){
    vec2 L = sampleVelocity(velocity, vL);
    vec2 R = sampleVelocity(velocity, vR);
    vec2 B = sampleVelocity(velocity, vB);
    vec2 T = sampleVelocity(velocity, vT);

    gl_FragColor = vec4( halfrdx * ((R.x - L.x) + (T.y - B.y)), 0, 0, 1);
}
`}}class Mt extends Z{constructor(e){super(e);r(this,"pressure");r(this,"velocity");r(this,"halfrdx");this.createProperties()}createProperties(){super.createProperties();const e=new C(this.gl,"pressure",null,!1);this.pressure=e,this._uniforms.push(e);const i=new C(this.gl,"velocity",null,!1);this.velocity=i,this._uniforms.push(i);const a=new w(this.gl,"halfrdx",null);this.halfrdx=a,this._uniforms.push(a)}initSources(){this._vertSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;
varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

varying vec2 p;

void main() {
    texelCoord = vertexPosition;

    vL = texelCoord - vec2(invResolution.x,0);
    vR = texelCoord + vec2(invResolution.x,0);
    vB = texelCoord - vec2(0,invResolution.y);
    vT = texelCoord + vec2(0,invResolution.y);
    
    vec2 clipSpace = 2.0*texelCoord - 1.0;    
    
    p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);

    gl_Position = vec4(clipSpace, 0.0, 1.0 );    
}
`,this._fragSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
        return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
        return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}


#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))
#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )

uniform sampler2D pressure;
uniform sampler2D velocity;
uniform float halfrdx;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

void main(void){
  float L = samplePressure(pressure, vL);
  float R = samplePressure(pressure, vR);
  float B = samplePressure(pressure, vB);
  float T = samplePressure(pressure, vT);

  vec2 v = texture2D(velocity, texelCoord).xy;

  gl_FragColor = vec4(v - halfrdx*vec2(R-L, T-B), 0, 1);
}
`}}class kt extends Z{constructor(e){super(e);r(this,"pressure");r(this,"divergence");r(this,"alpha");this.createProperties()}createProperties(){super.createProperties();const e=new C(this.gl,"pressure",null,!1);this.pressure=e,this._uniforms.push(e);const i=new C(this.gl,"divergence",null,!1);this.divergence=i,this._uniforms.push(i);const a=new w(this.gl,"alpha",null);this.alpha=a,this._uniforms.push(a)}initSources(){this._vertSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;
varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;
varying vec2 p;

void main() {
    texelCoord = vertexPosition;
    vL = texelCoord - vec2(invResolution.x,0);
    vR = texelCoord + vec2(invResolution.x,0);
    vB = texelCoord - vec2(0,invResolution.y);
    vT = texelCoord + vec2(0,invResolution.y);
    vec2 clipSpace = 2.0*texelCoord - 1.0;
    p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);
    gl_Position = vec4(clipSpace, 0.0, 1.0 );
}
`,this._fragSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
        return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
        return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )

uniform sampler2D pressure;
uniform sampler2D divergence;
uniform float alpha;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

void main(void){
      
  
  float L = samplePressure(pressure, vL);
  float R = samplePressure(pressure, vR);
  float B = samplePressure(pressure, vB);
  float T = samplePressure(pressure, vT);

  float bC = texture2D(divergence, texelCoord).x;

  gl_FragColor = vec4( (L + R + B + T + alpha * bC) * .25, 0, 0, 1 ); 
}
`}}class He{constructor(t,e,i,a,o){r(this,"gl");r(this,"width");r(this,"height");r(this,"textureParameters");r(this,"textureFactory");this.gl=t,this.width=e,this.height=i,this.textureParameters=a,this.textureFactory=o}createEmptyTexture(t,e){return this.textureFactory!=null?this.textureFactory(this.gl,t,e):j.createTexture(this.gl,t,e,this.textureParameters,null)}activate(){}updateTextureParameters(t){t.magFilter&&(this.textureParameters.magFilter=t.magFilter),t.minFilter&&(this.textureParameters.minFilter=t.minFilter),t.wrapS&&(this.textureParameters.wrapS=t.wrapS),t.wrapT&&(this.textureParameters.wrapT=t.wrapT)}}class le extends He{constructor(e,i,a,o,u){super(e,i,a,o,u);r(this,"writeFrameBufferObject");r(this,"readFrameBufferObject");r(this,"readFromTexture",null);r(this,"writeToTexture",null);r(this,"tmpFBO",null);r(this,"tmpTex",null);this.writeFrameBufferObject=e.createFramebuffer(),this.readFrameBufferObject=e.createFramebuffer(),this.resize(i,a)}activate(){super.activate(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.writeFrameBufferObject)}fillTexture(e,i){const a=L.getResampleShader(this.gl);a.texture.dirty=!0,a.texture.data=this.readFromTexture.native,this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.readFrameBufferObject),this.gl.viewport(0,0,e,i),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,L.getScreenTriangle(this.gl)),a.setupAndActive(),this.gl.drawArrays(4,0,3),a.deactivate(),this.gl.deleteTexture(this.readFromTexture.native)}resize(e,i){const a=this.createEmptyTexture(e,i),o=this.createEmptyTexture(e,i);return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.writeFrameBufferObject),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,a.native,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.readFrameBufferObject),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,o.native,0),this.readFromTexture&&this.readFrameBufferObject?this.fillTexture(e,i):(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.readFrameBufferObject),this.gl.viewport(0,0,this.width,this.height),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT)),this.writeToTexture!=null?this.gl.deleteTexture(this.writeToTexture.native):(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.writeFrameBufferObject),this.gl.viewport(0,0,this.width,this.height),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT)),this.width=e,this.height=i,this.writeToTexture=a,this.readFromTexture=o,this}updateTextureParameters(e){if(this.readFromTexture===null||this.writeToTexture===null){console.log("readFromTexture or writeToTexture is null");return}j.updateGLTextureParameters(this.gl,this.readFromTexture.native,e),j.updateGLTextureParameters(this.gl,this.writeToTexture.native,e),super.updateTextureParameters(e)}swapBuffers(){const e=this.readFrameBufferObject;this.readFrameBufferObject=this.writeFrameBufferObject,this.writeFrameBufferObject=e;const i=this.readFromTexture;this.readFromTexture=this.writeToTexture,this.writeToTexture=i}}class Pe extends He{constructor(e,i,a,o,u){super(e,i,a,o,u);r(this,"frameBufferObject");r(this,"texture");this.frameBufferObject=e.createFramebuffer(),this.resize(i,a)}fillTexture(e,i){const a=L.getResampleShader(this.gl);a.texture.dirty=!0,a.texture.data=this.texture.native,this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.frameBufferObject),this.gl.viewport(0,0,e,i),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,L.getScreenTriangle(this.gl)),a.setupAndActive(),this.gl.drawArrays(4,0,3),a.deactivate(),this.gl.deleteTexture(this.texture.native)}resize(e,i){const a=this.createEmptyTexture(e,i);return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.frameBufferObject),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,a.native,0),this.texture&&this.frameBufferObject?this.fillTexture(e,i):(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.frameBufferObject),this.gl.viewport(0,0,this.width,this.height),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT)),this.width=e,this.height=i,this.texture=a,this}activate(){super.activate(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.frameBufferObject)}updateTextureParameters(e){this.texture&&j.updateGLTextureParameters(this.gl,this.texture.native,e),super.updateTextureParameters(e)}}class Vt extends RegExp{constructor(e,i){super(e,i);r(this,"matched",null);r(this,"original","")}}class It{constructor(t,e){r(this,"reg");this.reg=new Vt(t,e.split("u").join(""))}match(t){return this.reg.global&&(this.reg.lastIndex=0),this.reg.matched=this.reg.exec(t),this.reg.original=t,this.reg.matched!==null}matched(t){if(this.reg.matched!==null&&t>=0&&t<this.reg.matched.length)return this.reg.matched[t];throw new Error("RegExpHelper: matched index out of range")}matchedRight(){if(!this.reg.matched)throw new Error("RegExpHelper: no matched");const t=this.reg.matched.index+this.reg.matched[0].length;return U.substr(this.reg.original,t,this.reg.original.length-t)}matchedPos(){if(!this.reg.matched)throw new Error("RegExpHelper: no matched");return{pos:this.reg.matched.index,len:this.reg.matched[0].length}}matchSub(t,e,i=-1){let a=!1;return this.reg.global?(this.reg.lastIndex=e,this.reg.matched=this.reg.exec(i<0?t:U.substr(t,0,e+i)),a=this.reg.matched!=null,a&&(this.reg.original=t)):(a=this.match(i<0?U.substr(t,e):U.substr(t,e,i)),a&&(this.reg.original=t,this.reg.matched!==null&&(this.reg.matched.index+=e))),a}}const Se=class Se{constructor(t){r(this,"gl");r(this,"_contextVersion",null);this.gl=t}static get(t){return new Se(t)}getContextVersion(){if(!this._contextVersion){const t=this.gl.getParameter(this.gl.VERSION),e=new It("((OpenGL ES|WebGL)\\s*)?(\\d+)\\.(\\d+)","ig");if(e.match(t)){const i=e.matched(2),a=i.toLowerCase()==="webgl";this._contextVersion={es:!!i,major:(parseInt(e.matched(3))??0)+(a?1:0)||-1,minor:parseInt(e.matched(4))??-1}}else this._contextVersion={es:!1,major:-1,minor:-1}}return this._contextVersion}testWritableColorBuffer(t){for(;this.gl.getError()!=0;)console.log("gl.getError() != 0");const e=j.createTexture(this.gl,2,2,t);let i=0;for(;this.gl.getError()!=0;)if(console.log("gl.getError() != 0"),++i,i>100)return console.log("gl.getError() != 0, 100 times, interrupted"),!1;if(i>0)return console.log("gl.getError() != 0 in testWritableColorBuffer, "+i+" times"),!1;const a=this.gl.createFramebuffer();for(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,a),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,e.native,0),i=0;this.gl.getError()!=0;)if(++i,i>100)return console.log("framebufferTexture2D gl.getError() != 0, 100 times, interrupted"),!1;if(i>0)return console.log("framebufferTexture2D gl.getError() != 0, "+i+" times"),!1;const o=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER)==this.gl.FRAMEBUFFER_COMPLETE;return this.gl.deleteTexture(e.native),this.gl.deleteFramebuffer(a),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),o}getWritableFloatColorBufferParameters(t,e,i){const a=this.getContextVersion(),o=[6403,33319,6407,6408],u=[5131,5126];if(!t||!e)return null;let c=o.indexOf(t),n=u.indexOf(e);if(i==this.gl.LINEAR&&(this.gl.getExtension("OES_texture_float_linear"),this.gl.getExtension("OES_texture_half_float_linear")),a.es&&a.major<=2){for(this.gl.getExtension("OES_texture_float"),this.gl.getExtension("OES_texture_half_float"),this.gl.getExtension("EXT_color_buffer_half_float"),t=o[Math.max(c,2)|0];n<u.length;)if((e=u[n++])==5131&&(e=36193),this.testWritableColorBuffer(new V(this.gl,t,t,e,i,i,33071,33071)))return{format:t,internalFormat:t,dataType:e,filtering:i}}else{if(this.gl.getExtension("EXT_color_buffer_float"),!(this.gl instanceof WebGL2RenderingContext))return console.error("getWritableFloatColorBufferParameters: WebGL2RenderingContext required"),null;let f;const d={6403:this.gl.R16F,33319:this.gl.RG16F,6407:this.gl.RGB16F,6408:this.gl.RGBA16F},x={6403:this.gl.R32F,33319:this.gl.RG32F,6407:this.gl.RGB32F,6408:this.gl.RGBA32F};for(e=u[n++];c<o.length;){const p=o[c++];switch(e){case this.gl.FLOAT:default:f=x[p];break;case this.gl.HALF_FLOAT:f=d[p]}if(this.testWritableColorBuffer(new V(this.gl,p,f,e,i,i,33071,33071)))return{format:p,internalFormat:f,dataType:e,filtering:i}}}return null}};r(Se,"capsCache",[]);let ce=Se;class Xt{constructor(t,e,i,a,o,u,c,n,f){r(this,"periodicBoundary");r(this,"advectShader");r(this,"divergenceShader");r(this,"pressureSolveShader");r(this,"pressureGradientSubstractShader");r(this,"applyForcesShader");r(this,"updateSurfaceShader");r(this,"gl");r(this,"width");r(this,"height");r(this,"powerOf2Surface");r(this,"simulationScale");r(this,"solverIterations");r(this,"aspectRatio");r(this,"physicsScale");r(this,"surfaceWidth",0);r(this,"surfaceHeight",0);r(this,"simulationWidth",0);r(this,"simulationHeight",0);r(this,"screenTriangle");r(this,"surfaceRenderTarget");r(this,"velocityRenderTarget");r(this,"pressureRenderTarget");r(this,"divergenceRenderTarget");this.periodicBoundary=!1,this.advectShader=new Ot(t),this.divergenceShader=new Ut(t),this.pressureSolveShader=new kt(t),this.pressureGradientSubstractShader=new Mt(t),this.applyForcesShader=n,this.updateSurfaceShader=f,this.gl=t,this.width=e,this.height=i,this.powerOf2Surface=c,this.simulationScale=a,this.solverIterations=u,this.aspectRatio=this.width/this.height,this.physicsScale=o,this.updateBaseUniforms(),this.updateTextureSizes();const d=ce.get(t);if(this.gl instanceof WebGL2RenderingContext){const x=d.getWritableFloatColorBufferParameters(this.gl.RGBA,this.gl.HALF_FLOAT,this.gl.LINEAR),p=d.getWritableFloatColorBufferParameters(this.gl.RG,this.gl.HALF_FLOAT,this.gl.LINEAR),y=d.getWritableFloatColorBufferParameters(this.gl.RED,this.gl.HALF_FLOAT,this.gl.NEAREST);if(!x||!p||!y)throw new Error("The fluid simulation requires renderable floating point textures but these are not available on this device");const g=this.periodicBoundary?this.gl.REPEAT:this.gl.CLAMP_TO_EDGE;this.screenTriangle=L.getScreenTriangle(t),this.surfaceRenderTarget=new le(t,this.surfaceWidth,this.surfaceHeight,new V(this.gl,x.format,x.internalFormat,x.dataType,9729,9729,g,g)),this.velocityRenderTarget=new le(t,this.simulationWidth,this.simulationHeight,new V(this.gl,p.format,p.internalFormat,p.dataType,9729,9729,g,g)),this.pressureRenderTarget=new le(t,this.simulationWidth,this.simulationHeight,new V(this.gl,y.format,y.internalFormat,y.dataType,9728,9728,g,g)),this.divergenceRenderTarget=new Pe(t,this.simulationWidth,this.simulationHeight,new V(this.gl,y.format,y.internalFormat,y.dataType,9728,9728,g,g)),this.updateBaseUniforms(),this.printParameters()}}updateBaseUniforms(){this.forEachShader(t=>{const e=t.invAspectRatio;if(!e)return;const i=1/this.aspectRatio;if(e.dirty=!0,e.data=i,!t.invResolution||!t.invResolution.data)return;t.invResolution.data[0]=1/this.simulationWidth,t.invResolution.data[1]=1/this.simulationHeight,t.invResolution.dirty=!0;const a=t.velocityBoundaryEnabled,o=!this.periodicBoundary;a&&(a.dirty=!0,a.data=o)}),this.advectShader.rdx.dirty=!0,this.advectShader.rdx.data=1/this.physicsScale,this.divergenceShader.halfrdx.dirty=!0,this.divergenceShader.halfrdx.data=1/this.physicsScale*.5,this.pressureGradientSubstractShader.halfrdx.dirty=!0,this.pressureGradientSubstractShader.halfrdx.data=1/this.physicsScale*.5,this.pressureSolveShader.alpha.dirty=!0,this.pressureSolveShader.alpha.data=-this.physicsScale*this.physicsScale,this.applyForcesShader.dx.dirty=!0,this.applyForcesShader.dx.data=this.physicsScale,this.updateSurfaceShader.dx.dirty=!0,this.updateSurfaceShader.dx.data=this.physicsScale}printParameters(){}updateTextureSizes(){const t=this.powerOf2Surface?U.floorPowerOf2(this.width):this.width,e=this.powerOf2Surface?U.floorPowerOf2(this.height):this.height,i=U.floorPowerOf2(t*this.simulationScale),a=U.floorPowerOf2(e*this.simulationScale),o=t!=this.surfaceWidth||e!=this.surfaceHeight,u=i!=this.simulationWidth||a!=this.simulationHeight;if(this.surfaceWidth=t,this.surfaceHeight=e,this.simulationWidth=i,this.simulationHeight=a,o&&this.surfaceRenderTarget&&this.surfaceRenderTarget.resize(this.surfaceWidth,this.surfaceHeight),u&&this.velocityRenderTarget&&this.velocityRenderTarget.resize(this.simulationWidth,this.simulationHeight),u&&this.pressureRenderTarget&&this.pressureRenderTarget.resize(this.simulationWidth,this.simulationHeight),u&&this.divergenceRenderTarget){const c=this.divergenceRenderTarget,n=this.simulationWidth,f=this.simulationHeight;c.resize(n,f)}this.updateBaseUniforms()}setWrapMode(t){!this.velocityRenderTarget||!this.pressureRenderTarget||!this.divergenceRenderTarget||!this.surfaceRenderTarget||(this.velocityRenderTarget.updateTextureParameters(new ge(null,null,t,t)),this.pressureRenderTarget.updateTextureParameters(new ge(null,null,t,t)),this.divergenceRenderTarget.updateTextureParameters(new ge(null,null,t,t)),this.surfaceRenderTarget.updateTextureParameters(new ge(null,null,t,t)))}updateShaderUniforms(t,e){if(t.dirty=!0,!e){console.error("data is null");return}t.data=e}processShader(t,e){t.setupAndActive(),e==null||e.activate(),this.gl.drawArrays(this.gl.TRIANGLES,0,3),t.deactivate(),e instanceof le&&(e==null||e.swapBuffers())}step(t){var x,p,y,g,m,P,F,R,Y,M,ee,te,re,ie,ue,ye,_e,he;if(this.gl.viewport(0,0,this.simulationWidth,this.simulationHeight),!this.screenTriangle){console.error("this.screenTriangle is null");return}this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.screenTriangle);const e=this.advectShader,i=this.velocityRenderTarget;if(this.updateShaderUniforms(e.dt,t),this.updateShaderUniforms(e.target,(x=i==null?void 0:i.readFromTexture)==null?void 0:x.native),this.updateShaderUniforms(e.velocity,(y=(p=this.velocityRenderTarget)==null?void 0:p.readFromTexture)==null?void 0:y.native),this.processShader(e,i),this.applyForcesShader){const D=this.applyForcesShader;this.updateShaderUniforms(D.dt,t),this.updateShaderUniforms(D.velocity,(m=(g=this.velocityRenderTarget)==null?void 0:g.readFromTexture)==null?void 0:m.native),this.processShader(D,this.velocityRenderTarget)}const a=this.divergenceShader,o=this.divergenceRenderTarget;this.updateShaderUniforms(a.velocity,(F=(P=this.velocityRenderTarget)==null?void 0:P.readFromTexture)==null?void 0:F.native),this.processShader(a,o);const u=this.pressureSolveShader;for(let D=0;D<this.solverIterations;D++)this.updateShaderUniforms(u.divergence,(Y=(R=this.divergenceRenderTarget)==null?void 0:R.texture)==null?void 0:Y.native),this.updateShaderUniforms(u.pressure,(ee=(M=this.pressureRenderTarget)==null?void 0:M.readFromTexture)==null?void 0:ee.native),this.processShader(u,this.pressureRenderTarget);const c=this.pressureGradientSubstractShader,n=this.pressureRenderTarget;if(this.updateShaderUniforms(c.pressure,(te=n==null?void 0:n.readFromTexture)==null?void 0:te.native),this.updateShaderUniforms(c.velocity,(ie=(re=this.velocityRenderTarget)==null?void 0:re.readFromTexture)==null?void 0:ie.native),this.processShader(c,this.velocityRenderTarget),this.gl.viewport(0,0,this.surfaceWidth,this.surfaceHeight),this.updateSurfaceShader){const D=this.updateSurfaceShader,X=this.surfaceRenderTarget;this.updateShaderUniforms(D.dt,t),this.updateShaderUniforms(D.surface,(ue=X==null?void 0:X.readFromTexture)==null?void 0:ue.native),this.processShader(D,X)}const f=this.advectShader,d=this.surfaceRenderTarget;this.updateShaderUniforms(f.dt,t),this.updateShaderUniforms(f.target,(ye=d==null?void 0:d.readFromTexture)==null?void 0:ye.native),this.updateShaderUniforms(f.velocity,(he=(_e=this.velocityRenderTarget)==null?void 0:_e.readFromTexture)==null?void 0:he.native),this.processShader(f,d)}forEachShader(t){t(this.applyForcesShader),t(this.updateSurfaceShader),t(this.advectShader),t(this.divergenceShader),t(this.pressureSolveShader),t(this.pressureGradientSubstractShader)}}class Ce{constructor(){r(this,"_currentTarget",null)}get(t,e,i,a){if(this._currentTarget&&(e!=this._currentTarget.width||i!=this._currentTarget.height||!a.match(this._currentTarget.textureParameters))){const o=this._currentTarget;o.gl.deleteFramebuffer(o.frameBufferObject),o.gl.deleteTexture(o.texture.native),this._currentTarget=null}return this._currentTarget||(this._currentTarget=new Pe(t,e,i,a)),this._currentTarget}destroy(){if(this._currentTarget){const t=this._currentTarget;t.gl.deleteFramebuffer(t.frameBufferObject),t.gl.deleteTexture(t.texture.native)}}}class Gt{constructor(t){r(this,"gl");r(this,"intermediate");r(this,"resampleShader");r(this,"screenTriangle");this.gl=t,this.intermediate=new Ce,this.resampleShader=L.getResampleShader(t),this.screenTriangle=L.getScreenTriangle(t)}apply(t,e,i){i&&(i=t);const a=this.intermediate.get(this.gl,t.width*.5|0,t.height*.5|0,i);return a.gl.bindFramebuffer(this.gl.FRAMEBUFFER,a.frameBufferObject),this.gl.viewport(0,0,a.width,a.height),this.gl.bindBuffer(34962,this.screenTriangle),this.resampleShader.texture.dirty=!0,this.resampleShader.texture.data=t.native,this.resampleShader.setupAndActive(),this.gl.drawArrays(4,0,3),this.resampleShader.deactivate(),a.texture}releaseGPUMemory(){this.intermediate!=null&&this.intermediate.destroy()}}class Ye extends K{constructor(e){super(e);r(this,"vertexPosition")}createProperties(){super.createProperties();const e=new N("vertexPosition",0,2);this.vertexPosition=e,this._attributes.push(e),this._aStride+=8}initSources(){this._vertSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
    varying vec2 texelCoord;
    void main() {
        texelCoord = vertexPosition;
        gl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );
    }
`,this._fragSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

varying vec2 texelCoord;
`}}class jt extends Ye{createProperties(){super.createProperties()}initSources(){this._vertSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
  varying vec2 texelCoord;
  void main() {
    texelCoord = vertexPosition;
    gl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );
  }
`,this._fragSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

varying vec2 texelCoord;

void main() {
    vec2 ip = vec2((texelCoord.x), (texelCoord.y)) * 2.0 - 1.0;
    vec2 iv = vec2(0,0);
    gl_FragColor = vec4(ip, iv);
  }
`}}class zt extends Ye{constructor(e){super(e);r(this,"dt");r(this,"particleData")}createProperties(){super.createProperties();const e=new w(this.gl,"dt",null);this.dt=e,this._uniforms.push(e);const i=new C(this.gl,"particleData",null,!1);this.particleData=i,this._uniforms.push(i)}initSources(){this._vertSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
    varying vec2 texelCoord;
    void main() {
        texelCoord = vertexPosition;
        gl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );
    }
`,this._fragSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

varying vec2 texelCoord;

uniform float dt;
    uniform sampler2D particleData;
`}}class Wt extends zt{constructor(e){super(e);r(this,"dragCoefficient");r(this,"flowScale");r(this,"flowVelocityField");this.createProperties()}createProperties(){super.createProperties();const e=new w(this.gl,"dragCoefficient",null);this.dragCoefficient=e,this._uniforms.push(e);const i=new me(this.gl,"flowScale",null);this.flowScale=i,this._uniforms.push(i);const a=new C(this.gl,"flowVelocityField",null,!1);this.flowVelocityField=a,this._uniforms.push(a)}initSources(){this._vertSource=`
#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
	varying vec2 texelCoord;
	void main() {
		texelCoord = vertexPosition;
		gl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );
	}




`,this._fragSource=`
#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

varying vec2 texelCoord;

uniform float dt;
	uniform sampler2D particleData;

uniform float dragCoefficient;
	uniform vec2 flowScale;
	uniform sampler2D flowVelocityField;
	void main() {
		vec2 p = texture2D(particleData, texelCoord).xy;
		vec2 v = texture2D(particleData, texelCoord).zw;
		vec2 vf = texture2D(flowVelocityField, (p+1.)*.5).xy * flowScale;
		v += (vf - v) * dragCoefficient;
		p+=dt*v;
		gl_FragColor = vec4(p, v);
	}
`}}class Nt{constructor(t,e){r(this,"gl");r(this,"count");r(this,"downsampleFilters");this.gl=t,this.count=e;const i=[];for(let a=0;a<e;)++a,i.push(new Gt(t));this.downsampleFilters=i}apply(t){let e=t;for(let i=0,a=this.count;i<a;)e=this.downsampleFilters[i++].apply(e);return e}releaseGPUMemory(){for(let t=0,e=this.downsampleFilters;t<e.length;)e[t++].releaseGPUMemory()}}class Ht{constructor(t,e=524288){r(this,"gl");r(this,"screenTriangle");r(this,"initialConditionsShader");r(this,"stepParticlesShader");r(this,"particleData",null);r(this,"particleUVs",null);r(this,"count",0);var u,c;this.gl=t,t.getExtension("OES_texture_float"),this.screenTriangle=L.getScreenTriangle(t),this.initialConditionsShader=new jt(t),this.stepParticlesShader=new Wt(t);const i=this.stepParticlesShader.dragCoefficient;i&&(i.dirty=!0,i.data=1),((u=this.stepParticlesShader.flowScale)==null?void 0:u.data)[0]=1,((c=this.stepParticlesShader.flowScale)==null?void 0:c.data)[1]=1,this.setCount(e);const a=this.initialConditionsShader,o=this.particleData;o&&(this.gl.viewport(0,0,o.width,o.height),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,o.writeFrameBufferObject)),this.gl.bindBuffer(34962,this.screenTriangle),a.setupAndActive(),this.gl.drawArrays(4,0,3),a.deactivate(),o&&(o.tmpFBO=o.writeFrameBufferObject,o.writeFrameBufferObject=o.readFrameBufferObject,o.readFrameBufferObject=o.tmpFBO,o.tmpTex=o.writeToTexture,o.writeToTexture=o.readFromTexture,o.readFromTexture=o.tmpTex),this.printParameters()}setCount(t){const e=Math.ceil(Math.sqrt(t)),i=ce.get(this.gl).getWritableFloatColorBufferParameters(6408,this.gl.HALF_FLOAT,9728);if(i==null)throw new Error("Particles require renderable floating point textures");this.particleData!=null?this.particleData.resize(e,e):this.particleData=new le(this.gl,e,e,new V(this.gl,i.format,i.internalFormat,i.dataType,9728,9728,33071,33071)),this.particleUVs!=null&&this.gl.deleteBuffer(this.particleUVs),this.particleUVs=this.gl.createBuffer();const a=[];for(let o=0;o<e;)for(let u=o++;u<e;)a.push(u/e),a.push(o/e);return this.gl.bindBuffer(34962,this.particleUVs),this.gl.bufferData(34962,new Float32Array(a),35044),this.gl.bindBuffer(34962,null),this.count=t,this.count}printParameters(){var e,i,a,o,u;const t=`<b,gray>><//> <b>GPUParticles Parameters</>
	`+["dragCoefficient: <b>"+(((e=this.stepParticlesShader.dragCoefficient)==null?void 0:e.data)??"")+"</b>","flowScaleX: <b>"+((i=this.stepParticlesShader.flowScale)==null?void 0:i.data)[0]+"</b>","flowScaleY: <b>"+((a=this.stepParticlesShader.flowScale)==null?void 0:a.data)[1]+"</b>","texture size: <b>"+((o=this.particleData)==null?void 0:o.width)+"x"+((u=this.particleData)==null?void 0:u.height)+"</b>"].join(`
	`);console.log(t)}}class qe{constructor(t,e,i,a,o,u,c,n,f){r(this,"type");r(this,"x");r(this,"y");r(this,"buttonState");r(this,"pressure");r(this,"radius");r(this,"angle");r(this,"altitudeAngle");r(this,"azimuthAngle");this.type=t,this.x=e,this.y=i,this.buttonState=a,this.pressure=o,this.radius=u,this.angle=c,this.altitudeAngle=n,this.azimuthAngle=f}}class Ke extends K{constructor(e,i,a){super(e);r(this,"direction");r(this,"kernel");r(this,"shaderParts");r(this,"invResolution");r(this,"texture");r(this,"vertexPosition");this.gl=e,this.direction=i,this.kernel=a,this.shaderParts=this.generateShaderParts(),this.createProperties()}generateShaderParts(){const e=this.nearestBestKernel(this.kernel),i=(e-1)/2,a=[],o=[];let u=0;for(let m=0;m<e;m++){const P=m,F=this.gaussianWeight(P/(e-1)*2-1);a[P]=P-i,o[P]=F,u+=F}const c=o.length;for(let m=0;m<c;m++)o[m]/=u;const n=[],f=[],d=[];for(let m=0;m<=i;m+=2){const P=0|Math.min(m+1,Math.floor(i));if(m===P)d.push({o:a[m],w:o[m]});else{const F=o[m]+o[P]*(P==i?.5:1),R=a[m]+1/(1+o[m]/o[P]);R===0?(d.push({o:a[m],w:o[m]}),d.push({o:a[m+1],w:o[m+1]})):(d.push({o:R,w:F}),d.push({o:-R,w:F}))}}for(let m=0;m<d.length;m++)f[m]=d[m].o,n[m]=d[m].w;const x=[],p=f.length;for(let m=0;m<p;m++)x.push("varying vec2 sampleCoord"+m+++";");const y=[];for(let m=0;m<p;m++)y.push("sampleCoord"+m+" = texelCoord + vec2("+this.glslFloat(f[m]*this.direction[0])+", "+this.glslFloat(f[m]*this.direction[1])+") * invResolution;");const g=[];for(let m=0;m<p;m++)g.push("blend += texture2D(texture, sampleCoord"+m+") * "+this.glslFloat(n[m])+";");return{varyingDeclarations:x,varyingValues:y,textureSamples:g}}nearestBestKernel(e){let i;const a=Math.round(e);return a%2!=0&&Math.floor(a/2)%2==0&&a>0?0|Math.max(a,3):(i=a-1)%2!=0&&Math.floor(i/2)%2==0&&i>0||(i=a+1)%2!=0&&Math.floor(i/2)%2==0&&i>0||(i=a-2)%2!=0&&Math.floor(i/2)%2==0&&i>0||(i=a+2)%2!=0&&Math.floor(i/2)%2==0&&i>0?0|Math.max(i,3):0|Math.max(a,3)}gaussianWeight(e){return 1/(.3333333333333333*Math.sqrt(2*Math.PI))*Math.exp(-e*e/.2222222222222222)}glslFloat(e){let i=e===null?"null":""+e;return i.indexOf(".")===-1&&(i+="."),i}createProperties(){super.createProperties();const e=new me(this.gl,"invResolution",null);this.invResolution=e,this._uniforms.push(e);const i=new C(this.gl,"texture",null,!1);this.texture=i,this._uniforms.push(i);const a=new N("vertexPosition",0,2);this.vertexPosition=a,this._attributes.push(a),this._aStride+=8}initSources(){this._vertSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif
 
attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;


varying vec2 p;

void main() {
    texelCoord = vertexPosition;
    
    vL = texelCoord - vec2(invResolution.x,0);
    vR = texelCoord + vec2(invResolution.x,0);
    vB = texelCoord - vec2(0,invResolution.y);
    vT = texelCoord + vec2(0,invResolution.y);
    
    vec2 clipSpace = 2.0*texelCoord - 1.0;    
    
    p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);

    gl_Position = vec4(clipSpace, 0.0, 1.0 );    
}
`,this._fragSource=`#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
    return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
    return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )
`}}class Yt{constructor(t,e,i){r(this,"gl");r(this,"kernelX");r(this,"kernelY");r(this,"blurIntermediateXY");r(this,"blurIntermediateX");r(this,"blurShaderX");r(this,"blurShaderY");r(this,"screenTriangle");this.gl=t,this.kernelX=e,this.kernelY=i,this.blurIntermediateXY=new Ce,this.blurIntermediateX=new Ce,this.blurShaderX=L.getShaderWithKey(t,"blurX(k"+e+")",function(a){return new Ke(a,new Float32Array([1,0]),e)}),this.blurShaderY=L.getShaderWithKey(t,"blurY(k"+i+")",function(a){return new Ke(a,new Float32Array([0,1]),i)}),this.screenTriangle=L.getScreenTriangle(t)}apply(t,e,i){i==null&&(console.log(e),i=t);const a=t.width,o=t.height,u=this.blurIntermediateX.get(this.gl,a,o,i),c=this.blurIntermediateXY.get(this.gl,a,o,i);if(this.gl.viewport(0,0,u.width,u.height),u.gl.bindFramebuffer(this.gl.FRAMEBUFFER,u.frameBufferObject),this.gl.bindBuffer(34962,this.screenTriangle),!this.blurShaderX.texture||!this.blurShaderX.invResolution){console.log("blurShaderX.texture or blurShaderX.invResolution is null");return}if(this.blurShaderX.texture.dirty=!0,this.blurShaderX.texture.data=t.native,this.blurShaderX.invResolution.data[0]=1/t.width,this.blurShaderX.invResolution.data[1]=1/t.height,this.blurShaderX.invResolution.dirty=!0,this.blurShaderX.setupAndActive(),this.gl.drawArrays(4,0,3),this.blurShaderX.deactivate(),c.gl.bindFramebuffer(36160,c.frameBufferObject),this.gl.bindBuffer(34962,this.screenTriangle),!this.blurShaderY.texture||!this.blurShaderY.invResolution){console.log("blurShaderX.texture or blurShaderX.invResolution is null");return}return this.blurShaderY.texture.dirty=!0,this.blurShaderY.texture.data=u.texture.native,this.blurShaderY.invResolution.data[0]=1/t.width,this.blurShaderY.invResolution.data[1]=1/t.height,this.blurShaderY.invResolution.dirty=!0,this.blurShaderY.setupAndActive(),this.gl.drawArrays(4,0,3),this.blurShaderY.deactivate(),c.texture}releaseGPUMemory(){this.blurIntermediateX&&this.blurIntermediateX.destroy(),this.blurIntermediateXY&&this.blurIntermediateXY.destroy()}}class qt{constructor(t,e=.08,i=128){r(this,"gl");r(this,"blurKernelNormalized");r(this,"downsampleSize");r(this,"screenTriangle");r(this,"downsampleChain",null);r(this,"blur",null);this.gl=t,this.blurKernelNormalized=e,this.downsampleSize=i,this.screenTriangle=L.getScreenTriangle(t)}releaseGPUMemory(){this.downsampleChain&&this.downsampleChain.releaseGPUMemory()}}class Kt{constructor(t,e,i,a){r(this,"gl");r(this,"drawingBufferWidth");r(this,"drawingBufferHeight");r(this,"savedSettings",null);r(this,"lumaLogoPromise",null);r(this,"lumaLogoTexture",null);r(this,"saveSettings",new J);r(this,"settings",new J);r(this,"particleCount",65536);r(this,"showDebugTextures",!1);r(this,"postProcessingEnabled",!1);r(this,"remapFluidColor",!0);r(this,"renderParticlesEnabled",!1);r(this,"pointerDataBuffer",new Float32Array(20));r(this,"pointerPositionsBuffer",new Float32Array(40));r(this,"activePointersLastFrame",new ve);r(this,"activePointers",new ve);r(this,"screenBuffer",null);r(this,"screenTriangle",null);r(this,"lastTime",U.now()/1e3);r(this,"textureSrc");r(this,"logoSrc");r(this,"renderFluidShader");r(this,"updateForceShader");r(this,"hx__closures__",null);r(this,"fluid");r(this,"offscreenTarget");r(this,"bloomFilter");r(this,"screenTextureShader");r(this,"renderParticlesShader");r(this,"updateSurfaceShader");r(this,"particles");if(this.gl=t,this.drawingBufferWidth=t.drawingBufferWidth,this.drawingBufferHeight=t.drawingBufferHeight,this.logoSrc=e,this.textureSrc=i,a&&this.updateSettings(a),this.gl.getExtension("OES_standard_derivatives"),this.updateLumaLogo(),this.screenBuffer=t.getParameter(t.FRAMEBUFFER_BINDING),this.screenBuffer){const o="Screenbuffer at initialization is: "+this.screenBuffer;console.log(o);return}t.disable(t.DEPTH_TEST),t.disable(t.CULL_FACE),t.disable(t.DITHER),this.initializeGPUResources()}updateLumaLogo(){if(!this.lumaLogoPromise){const t=this;this.lumaLogoPromise=new Promise((e,i)=>{const a=new Image;a.crossOrigin="anonymous",a.onload=()=>{const o=new V(t.gl,t.gl.RGBA,t.gl.RGBA,t.gl.UNSIGNED_BYTE,t.gl.NEAREST,t.gl.NEAREST,t.gl.CLAMP_TO_EDGE,t.gl.CLAMP_TO_EDGE),u=j.createTextureFromImage(t.gl,a,o,new Ee(1,!0),!0);e({img:a,texture:u})},a.onerror=o=>{i(o)},a.src=this.logoSrc})}this.lumaLogoPromise.then(t=>{if(this.lumaLogoTexture=t.texture,!this.renderFluidShader)return console.error("renderFluidShader is null"),!1;const e=this.renderFluidShader.lumaLogoTexture,i=this.lumaLogoTexture.native;if(!e)return console.error("lumaLogoTexture is null"),!1;if(e.dirty=!0,e.data=i,!this.updateForceShader)return console.error("updateForceShader is null"),!1;const a=this.updateForceShader.lumaLogoTexture,o=this.lumaLogoTexture.native;return a?(a.dirty=!0,a.data=o):(console.error("lumaLogoTexture is null"),!1)})}initializeGPUResources(){this.initializeShaders(),this.screenTriangle=L.getScreenTriangle(this.gl),this.fluid=new Xt(this.gl,this.settings.fluidScale*this.drawingBufferWidth|0,this.settings.fluidScale*this.drawingBufferHeight|0,this.settings.simulationScale,this.settings.fluidPhysicsScale,this.settings.fluidIterations,this.settings.powerOf2Fluid,this.updateForceShader,this.updateSurfaceShader);const t=this.fluid,e=this.settings.periodicBoundary;t.periodicBoundary=e,t.setWrapMode(e?this.gl.REPEAT:this.gl.CLAMP_TO_EDGE),t.updateBaseUniforms(),this.fluid.solverIterations=0,this.updateSurfaceShader.decayFactor.dirty=!0,this.updateSurfaceShader.decayFactor.data=1,this.updateForceShader.decayFactor.dirty=!0,this.updateForceShader.decayFactor.data=1,this.fluid.step(1),this.fluid.solverIterations=this.settings.fluidIterations,this.updateSurfaceShader.decayFactor.dirty=!0,this.updateSurfaceShader.decayFactor.data=this.settings.surfaceDecayFactor,this.updateForceShader.decayFactor.dirty=!0,this.updateForceShader.decayFactor.data=this.settings.motionDecayFactor;const i=ce.get(this.gl).getWritableFloatColorBufferParameters(this.gl.RGB,5131,9729);if(!i){console.error("getWritableFloatColorBufferParameters is null");return}this.offscreenTarget=new Pe(this.gl,this.fluid.width,this.fluid.height,new V(this.gl,i.format,i.internalFormat,i.dataType,i.filtering,i.filtering,33071,33071));const a=this;this.settings.onChangeVersion=()=>{},this.settings.onChangePaused=()=>{},this.settings.onChangeTimestepMultiplier=()=>{},this.settings.onChangeFluidPhysicsScale=c=>{const n=this.fluid;n.physicsScale=c,n.updateBaseUniforms()},this.settings.onChangeSurfaceDecayFactor=c=>{const n=this.updateSurfaceShader.decayFactor;n.dirty=!0,n.data=c},this.settings.onChangeMotionDecayFactor=c=>{const n=this.updateForceShader.decayFactor;n.dirty=!0,n.data=c},this.settings.onChangeDragCoefficient=c=>{const n=this.updateForceShader.dragCoefficient;n.dirty=!0,n.data=c},this.settings.onChangeDragSpeed=c=>{const n=this.updateForceShader.dragSpeed;n.dirty=!0,n.data=c},this.settings.onChangePeriodicBoundary=c=>{const n=this.fluid;n.periodicBoundary=c,n.setWrapMode(c?10497:33071),n.updateBaseUniforms()},this.settings.onChangeBackgroundMultiplier=c=>{const n=this.updateSurfaceShader.backgroundMultiplier;n.dirty=!0,n.data=c},this.settings.onChangeFluidIterations=c=>{this.fluid.solverIterations=c},this.settings.onChangeGamma=c=>{const n=this.renderFluidShader.invGamma;n.dirty=!0,n.data=1/c},this.settings.onChangeRefraction=c=>{const n=this.renderFluidShader.refraction;n.dirty=!0,n.data=c},this.settings.onChangeChromaticAberration=c=>{const n=this.renderFluidShader.chromaticAberration;n.dirty=!0,n.data=c},this.settings.onChangeInnerDarkening=c=>{const n=this.renderFluidShader.innerDarkening;n.dirty=!0,n.data=c},this.settings.onChangeBevelCurveRadius=()=>{this.updateLumaLogo()},this.settings.onChangeGradientBackground=c=>{const n=this.renderFluidShader.gradientBackground;n.dirty=!0,n.data=c},this.settings.onChangeFluidScale=()=>{this.resize(this.drawingBufferWidth,this.drawingBufferHeight)},this.settings.onChangeSimulationScale=()=>{this.resize(this.drawingBufferWidth,this.drawingBufferHeight)},this.settings.onChangePowerOf2Fluid=()=>{this.resize(this.drawingBufferWidth,this.drawingBufferHeight)},this.bloomFilter=new qt(this.gl);const o=new Image;o.crossOrigin="anonymous",o.src=this.textureSrc;const u=new V(this.gl,6408,null,5121,9729,9729,10497,10497);o.onload=function(){const c=j.createTexture(a.gl,o.width,o.height,u,null,null,!1);a.gl.activeTexture(a.gl.TEXTURE0),a.gl.bindTexture(a.gl.TEXTURE_2D,c.native),a.gl.texSubImage2D(a.gl.TEXTURE_2D,0,0,0,u.format,u.dataType,o),a.gl.generateMipmap(a.gl.TEXTURE_2D),a.gl.bindTexture(a.gl.TEXTURE_2D,null),a.gl.deleteTexture(a.updateSurfaceShader.backgroundTexture.data);const n=a.updateSurfaceShader.backgroundTexture;return n.dirty=!0,n.data=c.native}}initializeShaders(){this.screenTextureShader=new Ct(this.gl),this.renderParticlesShader=new Dt(this.gl),this.updateSurfaceShader=new Ft(this.gl);let t=L.getNullTexture(this.gl).native;this.updateSurfaceShader.userVelocityTexture.dirty=!0,this.updateSurfaceShader.userVelocityTexture.data=t,this.updateSurfaceShader.decayFactor.dirty=!0,this.updateSurfaceShader.decayFactor.data=this.settings.surfaceDecayFactor,this.updateSurfaceShader.pointerPositions.dirty=!0,this.updateSurfaceShader.pointerPositions.data=this.pointerPositionsBuffer,this.updateSurfaceShader.pointerPositions.alwaysDirty=!0,this.updateSurfaceShader.pointerData.dirty=!0,this.updateSurfaceShader.pointerData.data=this.pointerDataBuffer,this.updateSurfaceShader.pointerData.alwaysDirty=!0,this.updateSurfaceShader.backgroundMultiplier.dirty=!0,this.updateSurfaceShader.backgroundMultiplier.data=this.settings.backgroundMultiplier,this.updateSurfaceShader.set_enableUserVelocity("false"),this.updateForceShader=new Pt(this.gl),t=L.getNullTexture(this.gl).native,this.updateForceShader.userVelocityTexture.dirty=!0,this.updateForceShader.userVelocityTexture.data=t,this.updateForceShader.dragCoefficient.dirty=!0,this.updateForceShader.dragCoefficient.data=this.settings.dragCoefficient,this.updateForceShader.dragSpeed.dirty=!0,this.updateForceShader.dragSpeed.data=this.settings.dragSpeed,this.updateForceShader.decayFactor.dirty=!0,this.updateForceShader.decayFactor.data=this.settings.motionDecayFactor,this.updateForceShader.pointerPositions.dirty=!0,this.updateForceShader.pointerPositions.data=this.pointerPositionsBuffer,this.updateForceShader.pointerPositions.alwaysDirty=!0,this.updateForceShader.pointerData.dirty=!0,this.updateForceShader.pointerData.data=this.pointerDataBuffer,this.updateForceShader.pointerData.alwaysDirty=!0;const e=this.updateForceShader.gravity.data;e[0]=0,e[1]=0,this.updateForceShader.set_enableUserVelocity("false"),this.renderFluidShader=new Rt(this.gl),this.renderFluidShader.invGamma.dirty=!0,this.renderFluidShader.invGamma.data=1/this.settings.gamma,this.renderFluidShader.chromaticAberration.dirty=!0,this.renderFluidShader.chromaticAberration.data=this.settings.chromaticAberration,this.renderFluidShader.refraction.dirty=!0,this.renderFluidShader.refraction.data=this.settings.refraction,this.renderFluidShader.innerDarkening.dirty=!0,this.renderFluidShader.innerDarkening.data=this.settings.innerDarkening,this.renderFluidShader.gradientBackground.dirty=!0,this.renderFluidShader.gradientBackground.data=this.settings.gradientBackground}resize(t,e){this.drawingBufferWidth=t,this.drawingBufferHeight=e;const i=this.settings.fluidScale*this.drawingBufferWidth|0,a=this.settings.fluidScale*this.drawingBufferHeight|0,o=this.fluid;if(!o)return console.error("fluid is null"),!1;const u=this.settings.simulationScale,c=this.settings.powerOf2Fluid;i!=null&&(o.width=i),a!=null&&(o.height=a),u!=null&&(o.simulationScale=u),c!=null&&(o.powerOf2Surface=c),o.aspectRatio=o.width/o.height,o.updateTextureSizes();const n=this.offscreenTarget;if(!n)return console.error("offscreenTarget is null"),!1;n.resize(o.width,o.height),this.updateLumaLogo()}onFrame(t){if(!this.fluid){console.warn("fluid is null");return}if(!this.settings.paused){const e=Math.max(Math.min(t-this.lastTime,33.333333333333336)/1e3,.004166666666666667);this.lastTime=t;const i=L.getNullTexture(this.gl);this.updateForceShader.userVelocityTexture.dirty=!0,this.updateForceShader.userVelocityTexture.data=i.native,this.updateSurfaceShader.userVelocityTexture.dirty=!0,this.updateSurfaceShader.userVelocityTexture.data=i.native,this.updateForceShader.viewportAspectRatio.dirty=!0,this.updateForceShader.viewportAspectRatio.data=this.drawingBufferWidth/this.drawingBufferHeight;const a=t/1e3;this.updateSurfaceShader.time_s.dirty=!0,this.updateSurfaceShader.time_s.data=a,this.updateForceShader.time_s.dirty=!0,this.updateForceShader.time_s.data=a,this.renderFluidShader.time_s.dirty=!0,this.renderFluidShader.time_s.data=a;let o=0;const u=this.activePointers;for(const n=u.keys();n.hasNext();){const f=String(n.next()),d=u.get(f);if(o>=10)break;const x=this.activePointersLastFrame.content.get(f)||d,p=o*4;this.pointerPositionsBuffer[p]=(d.x/this.drawingBufferWidth*2-1)*this.fluid.aspectRatio,this.pointerPositionsBuffer[p+1]=(this.drawingBufferHeight-d.y)/this.drawingBufferHeight*2-1,this.pointerPositionsBuffer[p+2]=(x.x/this.drawingBufferWidth*2-1)*this.fluid.aspectRatio,this.pointerPositionsBuffer[p+3]=(this.drawingBufferHeight-x.y)/this.drawingBufferHeight*2-1;const y=o*2;this.pointerDataBuffer[y]=d.radius/this.drawingBufferWidth*this.fluid.aspectRatio,this.pointerDataBuffer[y+1]=.5;const g=this.activePointersLastFrame.content.get(f);g?(g.type=d.type,g.x=d.x,g.y=d.y,g.buttonState=d.buttonState,g.pressure=d.pressure,g.radius=d.radius,g.angle=d.angle,g.altitudeAngle=d.altitudeAngle,g.azimuthAngle=d.azimuthAngle):this.activePointersLastFrame.content.set(f,new qe(d.type,d.x,d.y,d.buttonState,d.pressure,d.radius,d.angle,d.altitudeAngle,d.azimuthAngle)),++o}if(this.updateSurfaceShader.activePointerCount.dirty=!0,this.updateSurfaceShader.activePointerCount.data=o,this.updateForceShader.activePointerCount.dirty=!0,this.updateForceShader.activePointerCount.data=o,this.fluid.step(e*this.settings.timestepMultiplier),this.renderParticlesEnabled&&!this.particles&&this.initializeParticles(),this.renderParticlesEnabled){this.particles.stepParticlesShader.flowVelocityField.dirty=!0,this.particles.stepParticlesShader.flowVelocityField.data=this.fluid.velocityRenderTarget.readFromTexture.native;const n=this.particles;n.stepParticlesShader.dt.dirty=!0,n.stepParticlesShader.dt.data=e*this.settings.timestepMultiplier,n.stepParticlesShader.particleData.dirty=!0,n.stepParticlesShader.particleData.data=n.particleData.readFromTexture.native;const f=n.stepParticlesShader,d=n.particleData;n.gl.viewport(0,0,d.width,d.height),n.gl.bindFramebuffer(this.gl.FRAMEBUFFER,d.writeFrameBufferObject),n.gl.bindBuffer(this.gl.ARRAY_BUFFER,n.screenTriangle),f.setupAndActive(),n.gl.drawArrays(4,0,3),f.deactivate(),d.swapBuffers()}const c=this.postProcessingEnabled?this.offscreenTarget:null;if(c==null?(this.gl.viewport(0,0,this.drawingBufferWidth,this.drawingBufferHeight),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.screenBuffer)):(this.gl.viewport(0,0,c.width,c.height),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,c.frameBufferObject)),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.remapFluidColor)this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.screenTriangle),this.renderFluidShader.texture.dirty=!0,this.renderFluidShader.texture.data=this.fluid.surfaceRenderTarget.readFromTexture.native,this.renderFluidShader.viewportAspectRatio.dirty=!0,this.renderFluidShader.viewportAspectRatio.data=this.drawingBufferWidth/this.drawingBufferHeight,this.renderFluidShader.setupAndActive(),this.gl.drawArrays(4,0,3),this.renderFluidShader.deactivate();else{const n=this.fluid.surfaceRenderTarget.readFromTexture.native;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.screenTriangle),this.screenTextureShader.texture.dirty=!0,this.screenTextureShader.texture.data=n,this.screenTextureShader.setupAndActive(),this.gl.drawArrays(4,0,3),this.screenTextureShader.deactivate()}if(this.postProcessingEnabled){const n=this.bloomFilter,f=this.offscreenTarget.texture,d=Math.floor(U.log2(Math.max(f.width,f.height)/n.downsampleSize));n.downsampleChain!=null&&n.downsampleChain.count!=d&&(n.downsampleChain.releaseGPUMemory(),n.downsampleChain=null),n.downsampleChain==null&&d>0&&(n.downsampleChain=new Nt(n.gl,d));const x=n.downsampleChain!=null?n.downsampleChain.apply(f):f,p=1<<d,y=n.blurKernelNormalized*f.width/p,g=n.blurKernelNormalized*f.height/p;n.blur!=null&&(n.blur.kernelX!=y||n.blur.kernelY!=g)&&(n.blur.releaseGPUMemory(),n.blur=null),n.blur==null&&(y>1||g>1)&&(n.blur=new Yt(n.gl,y,g));const m=n.blur!==null?n.blur.apply(x):x;if(!m)return console.error("blurApply is null"),!1;this.gl.viewport(0,0,this.drawingBufferWidth,this.drawingBufferHeight),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.screenBuffer),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT);const P=m.native;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.screenTriangle),this.screenTextureShader.texture.dirty=!0,this.screenTextureShader.texture.data=P,this.screenTextureShader.setupAndActive(),this.gl.drawArrays(4,0,3),this.screenTextureShader.deactivate()}this.renderParticlesEnabled&&(this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.DST_COLOR,this.gl.SRC_COLOR),this.gl.blendEquation(this.gl.FUNC_ADD),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.particles.particleUVs),this.renderParticlesShader.particleData.dirty=!0,this.renderParticlesShader.particleData.data=this.particles.particleData.readFromTexture.native,this.renderParticlesShader.setupAndActive(),this.gl.drawArrays(0,0,this.particles.count),this.renderParticlesShader.deactivate(),this.gl.disable(3042)),this.showDebugTextures}}initializeParticles(){var e,i;this.particles=new Ht(this.gl,this.particleCount);const t=this.fluid;if(!t){console.error("fluid is null");return}if(((e=this.particles.stepParticlesShader.flowScale)==null?void 0:e.data)[0]=1/(t.physicsScale*t.aspectRatio),((i=this.particles.stepParticlesShader.flowScale)==null?void 0:i.data)[1]=1/t.physicsScale,!this.particles.stepParticlesShader.dragCoefficient){console.info("dragCoefficient is null");return}this.particles.stepParticlesShader.dragCoefficient.dirty=!0,this.particles.stepParticlesShader.dragCoefficient.data=1}reset(){const t=this.fluid;if([t.velocityRenderTarget,t.pressureRenderTarget,t.surfaceRenderTarget].forEach(i=>{i.gl.bindFramebuffer(this.gl.FRAMEBUFFER,i.readFrameBufferObject),i.gl.viewport(0,0,i.width,i.height),i.gl.clearColor(0,0,0,1),i.gl.clear(i.gl.COLOR_BUFFER_BIT),i.gl.bindFramebuffer(this.gl.FRAMEBUFFER,i.writeFrameBufferObject),i.gl.viewport(0,0,i.width,i.height),i.gl.clearColor(0,0,0,1),i.gl.clear(i.gl.COLOR_BUFFER_BIT)}),this.particles!=null){const i=this.particles,a=i.initialConditionsShader,o=i.particleData;i.gl.viewport(0,0,o.width,o.height),i.gl.bindFramebuffer(this.gl.FRAMEBUFFER,o.writeFrameBufferObject),i.gl.bindBuffer(34962,i.screenTriangle),a.setupAndActive(),i.gl.drawArrays(4,0,3),a.deactivate(),o.swapBuffers()}}onPointerDown(t,e,i,a,o,u,c,n,f,d,x){this.activePointers.content.set(String(t),new qe(e,i,a,o,c,n,f,d,x))}onPointerChange(t,e,i,a,o,u,c,n,f,d,x){const p=this.activePointers.content.get(String(t));p&&(p.type=e,p.x=i,p.y=a,p.buttonState=o,p.pressure=c,p.radius=n,p.angle=f,p.altitudeAngle=d,p.azimuthAngle=x)}onPointerUp(t){this.activePointers.remove(String(t)),this.activePointersLastFrame.remove(String(t))}updateSettings(t){if(t instanceof J){const e=t;this.settings=e}else this.settings=J.parse(t)}}function H(l,t){let e;return t?(t.__id__||(t.__id__=window.$haxeUID++),l.hx__closures__===null?l.hx__closures__={}:e=l.hx__closures__[t.__id__],e||(e=t.bind(l),l.hx__closures__[t.__id__]=e),e):null}class $t{constructor(t,e,i,a,o){r(this,"eventHanders",new pe);r(this,"canvas");r(this,"gl");r(this,"lumaLogoPromise",null);r(this,"lumaLogoTexture",null);r(this,"particleCount",65536);r(this,"showDebugTextures",!1);r(this,"postProcessingEnabled",!1);r(this,"remapFluidColor",!0);r(this,"renderParticlesEnabled",!1);r(this,"pointerDataBuffer",new Float32Array(20));r(this,"pointerPositionsBuffer",new Float32Array(40));r(this,"activePointersLastFrame",new ve);r(this,"activePointers",new ve);r(this,"screenBuffer",null);r(this,"screenTriangle",null);r(this,"fluid");r(this,"frameLoopHandle",null);r(this,"eventHandlers",new pe);window.$haxeUID|=0,this.canvas=t,this.canvas.addEventListener("webglcontextlost",()=>{window.location.reload()}),this.canvas.addEventListener("webglcontextrestored",()=>{window.console.log("webglcontextrestored")}),t.setAttribute("touch-action","none"),this.gl=e,this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.canvas.addEventListener("webglcontextlost",()=>{}),this.gl.canvas.addEventListener("webglcontextrestored",()=>{}),this.screenBuffer=e.getParameter(e.FRAMEBUFFER_BINDING),this.fluid=new Kt(e,i,a,o);let u;const c=window.devicePixelRatio;(u=()=>{this.fluid.resize(this.canvas.width,this.canvas.height);const g=window.performance.now();this.fluid.onFrame(g),this.frameLoopHandle=window.requestAnimationFrame(u)})(),this.canvas.addEventListener("gesturestart",function(g){g.preventDefault(),g.stopPropagation()},!1),this.canvas.addEventListener("gesturechange",function(g){g.preventDefault(),g.stopPropagation()},!1),this.canvas.addEventListener("scroll",function(g){g.preventDefault(),g.stopPropagation()});const n=this;function f(g,m){const F=g.force??g.webkitForce,R=n.canvas.getBoundingClientRect(),Y=(g.clientX-R.left)/R.width,M=(g.clientY-R.top)/R.height;m(-1,0,Y*e.drawingBufferWidth,M*e.drawingBufferHeight,g.buttons,g.button,F!=null?Math.max(F-1,0):.5,c*50,0,0,0)}function d(g,m,P){P&&g.preventDefault();const F=n.canvas.getBoundingClientRect();for(let R=0,Y=g.changedTouches.length;R<Y;){const M=g.changedTouches[R++],ee=(M.clientX??0-F.left)/F.width,te=(M.clientY??0-F.top)/F.height,re=ee*e.drawingBufferWidth,ie=te*e.drawingBufferHeight;m(M.identifier,1,re,ie,1,0,M.force,(M.radiusX??0)*c,M.rotationAngle,M.altitudeAngle,M.azimuthAngle)}}function x(g){const m=n.fluid;f(g,H(m,m.onPointerChange))}function p(g,m,P,F){Object.prototype.hasOwnProperty.call(n.eventHandlers.content,m)?n.eventHandlers.content.get(m).push({handler:P,options:F}):n.eventHandlers.content.set(m,[{handler:P,options:F}]),g.addEventListener(m,P,F)}p(this.canvas,"mousedown",function(g){f(g,H(n.fluid,n.fluid.onPointerDown))}),p(window,"mousemove",x),p(window,"webkitmouseforcechanged",x),p(this.canvas,"touchstart",function(g){d(g,H(n.fluid,n.fluid.onPointerDown),!0)},{capture:!0,passive:!1}),p(window,"touchmove",function(g){d(g,H(n.fluid,n.fluid.onPointerChange),!0)},{capture:!0,passive:!1}),p(window,"touchforcechange",function(g){d(g,H(n.fluidd,n.fluid.onPointerChange),!1)},{capture:!0,passive:!0}),p(window,"touchend",function(g){d(g,H(n.fluid,n.fluid.onPointerUp),!1)},{capture:!0,passive:!0}),p(window,"touchcancel",function(g){d(g,H(n.fluid,n.fluid.onPointerUp),!1)},{capture:!0,passive:!0});const y=function(g){window.removeEventListener("mousemove",y),f(g,H(n.fluid,n.fluid.onPointerDown))};window.addEventListener("mousemove",y)}}const Jt=l=>{const t=O.useRef(null),[e,i]=O.useState();return O.useLayoutEffect(()=>{var u,c;const a=t.current;if(!a){(u=l.onError)==null||u.call(l,new Error("Canvas not found"));return}const o=a.getContext("webgl2");if(!o){(c=l.onError)==null||c.call(l,new Error("WebGL2 not supported"));return}i(o),new $t(a,o,l.logoSrc,l.textureSrc,l.settings)},[e,l]),yt.jsx("canvas",{id:"xfluid",ref:t,width:l.width||500,height:l.height||500,style:{width:"100%",height:"100%",backgroundColor:"black",...l.style}})};I.XFluid=Jt,Object.defineProperty(I,Symbol.toStringTag,{value:"Module"})});
