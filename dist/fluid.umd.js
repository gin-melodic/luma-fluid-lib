(function(k,O){typeof exports=="object"&&typeof module<"u"?O(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],O):(k=typeof globalThis<"u"?globalThis:k||self,O(k.LumaFluidLib={},k.React))})(this,function(k,O){"use strict";var br=Object.defineProperty;var Rr=(k,O,z)=>O in k?br(k,O,{enumerable:!0,configurable:!0,writable:!0,value:z}):k[O]=z;var a=(k,O,z)=>(Rr(k,typeof O!="symbol"?O+"":O,z),z);var z={exports:{}},ae={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve;function mt(){return Ve||(Ve=1,process.env.NODE_ENV!=="production"&&function(){var c=O,t=Symbol.for("react.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),l=Symbol.for("react.context"),n=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),p=Symbol.for("react.offscreen"),y=Symbol.iterator,x="@@iterator";function w(s){if(s===null||typeof s!="object")return null;var h=y&&s[y]||s[x];return typeof h=="function"?h:null}var P=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function E(s){{for(var h=arguments.length,v=new Array(h>1?h-1:0),S=1;S<h;S++)v[S-1]=arguments[S];M("error",s,v)}}function M(s,h,v){{var S=P.ReactDebugCurrentFrame,b=S.getStackAddendum();b!==""&&(h+="%s",v=v.concat([b]));var F=v.map(function(_){return String(_)});F.unshift("Warning: "+h),Function.prototype.apply.call(console[s],console,F)}}var Q=!1,Z=!1,ee=!1,te=!1,xe=!1,le;le=Symbol.for("react.module.reference");function Se(s){return!!(typeof s=="string"||typeof s=="function"||s===i||s===o||xe||s===r||s===f||s===d||te||s===p||Q||Z||ee||typeof s=="object"&&s!==null&&(s.$$typeof===g||s.$$typeof===m||s.$$typeof===u||s.$$typeof===l||s.$$typeof===n||s.$$typeof===le||s.getModuleId!==void 0))}function ye(s,h,v){var S=s.displayName;if(S)return S;var b=h.displayName||h.name||"";return b!==""?v+"("+b+")":v}function ce(s){return s.displayName||"Context"}function D(s){if(s==null)return null;if(typeof s.tag=="number"&&E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case i:return"Fragment";case e:return"Portal";case o:return"Profiler";case r:return"StrictMode";case f:return"Suspense";case d:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case l:var h=s;return ce(h)+".Consumer";case u:var v=s;return ce(v._context)+".Provider";case n:return ye(s,s.render,"ForwardRef");case m:var S=s.displayName||null;return S!==null?S:D(s.type)||"Memo";case g:{var b=s,F=b._payload,_=b._init;try{return D(_(F))}catch{return null}}}return null}var I=Object.assign,ue=0,qe,Ke,Je,Qe,Ze,et,tt;function rt(){}rt.__reactDisabledLog=!0;function Qt(){{if(ue===0){qe=console.log,Ke=console.info,Je=console.warn,Qe=console.error,Ze=console.group,et=console.groupCollapsed,tt=console.groupEnd;var s={configurable:!0,enumerable:!0,value:rt,writable:!0};Object.defineProperties(console,{info:s,log:s,warn:s,error:s,group:s,groupCollapsed:s,groupEnd:s})}ue++}}function Zt(){{if(ue--,ue===0){var s={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:I({},s,{value:qe}),info:I({},s,{value:Ke}),warn:I({},s,{value:Je}),error:I({},s,{value:Qe}),group:I({},s,{value:Ze}),groupCollapsed:I({},s,{value:et}),groupEnd:I({},s,{value:tt})})}ue<0&&E("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Ce=P.ReactCurrentDispatcher,Ae;function Te(s,h,v){{if(Ae===void 0)try{throw Error()}catch(b){var S=b.stack.trim().match(/\n( *(at )?)/);Ae=S&&S[1]||""}return`
`+Ae+s}}var De=!1,_e;{var er=typeof WeakMap=="function"?WeakMap:Map;_e=new er}function it(s,h){if(!s||De)return"";{var v=_e.get(s);if(v!==void 0)return v}var S;De=!0;var b=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var F;F=Ce.current,Ce.current=null,Qt();try{if(h){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(W){S=W}Reflect.construct(s,[],_)}else{try{_.call()}catch(W){S=W}s.call(_.prototype)}}else{try{throw Error()}catch(W){S=W}s()}}catch(W){if(W&&S&&typeof W.stack=="string"){for(var T=W.stack.split(`
`),V=S.stack.split(`
`),A=T.length-1,B=V.length-1;A>=1&&B>=0&&T[A]!==V[B];)B--;for(;A>=1&&B>=0;A--,B--)if(T[A]!==V[B]){if(A!==1||B!==1)do if(A--,B--,B<0||T[A]!==V[B]){var G=`
`+T[A].replace(" at new "," at ");return s.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",s.displayName)),typeof s=="function"&&_e.set(s,G),G}while(A>=1&&B>=0);break}}}finally{De=!1,Ce.current=F,Zt(),Error.prepareStackTrace=b}var ie=s?s.displayName||s.name:"",gt=ie?Te(ie):"";return typeof s=="function"&&_e.set(s,gt),gt}function tr(s,h,v){return it(s,!1)}function rr(s){var h=s.prototype;return!!(h&&h.isReactComponent)}function be(s,h,v){if(s==null)return"";if(typeof s=="function")return it(s,rr(s));if(typeof s=="string")return Te(s);switch(s){case f:return Te("Suspense");case d:return Te("SuspenseList")}if(typeof s=="object")switch(s.$$typeof){case n:return tr(s.render);case m:return be(s.type,h,v);case g:{var S=s,b=S._payload,F=S._init;try{return be(F(b),h,v)}catch{}}}return""}var Re=Object.prototype.hasOwnProperty,at={},st=P.ReactDebugCurrentFrame;function we(s){if(s){var h=s._owner,v=be(s.type,s._source,h?h.type:null);st.setExtraStackFrame(v)}else st.setExtraStackFrame(null)}function ir(s,h,v,S,b){{var F=Function.call.bind(Re);for(var _ in s)if(F(s,_)){var T=void 0;try{if(typeof s[_]!="function"){var V=Error((S||"React class")+": "+v+" type `"+_+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof s[_]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw V.name="Invariant Violation",V}T=s[_](h,_,S,v,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(A){T=A}T&&!(T instanceof Error)&&(we(b),E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",S||"React class",v,_,typeof T),we(null)),T instanceof Error&&!(T.message in at)&&(at[T.message]=!0,we(b),E("Failed %s type: %s",v,T.message),we(null))}}}var ar=Array.isArray;function Be(s){return ar(s)}function sr(s){{var h=typeof Symbol=="function"&&Symbol.toStringTag,v=h&&s[Symbol.toStringTag]||s.constructor.name||"Object";return v}}function or(s){try{return ot(s),!1}catch{return!0}}function ot(s){return""+s}function nt(s){if(or(s))return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",sr(s)),ot(s)}var he=P.ReactCurrentOwner,nr={key:!0,ref:!0,__self:!0,__source:!0},lt,ct,Le;Le={};function lr(s){if(Re.call(s,"ref")){var h=Object.getOwnPropertyDescriptor(s,"ref").get;if(h&&h.isReactWarning)return!1}return s.ref!==void 0}function cr(s){if(Re.call(s,"key")){var h=Object.getOwnPropertyDescriptor(s,"key").get;if(h&&h.isReactWarning)return!1}return s.key!==void 0}function ur(s,h){if(typeof s.ref=="string"&&he.current&&h&&he.current.stateNode!==h){var v=D(he.current.type);Le[v]||(E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',D(he.current.type),s.ref),Le[v]=!0)}}function hr(s,h){{var v=function(){lt||(lt=!0,E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",h))};v.isReactWarning=!0,Object.defineProperty(s,"key",{get:v,configurable:!0})}}function dr(s,h){{var v=function(){ct||(ct=!0,E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",h))};v.isReactWarning=!0,Object.defineProperty(s,"ref",{get:v,configurable:!0})}}var fr=function(s,h,v,S,b,F,_){var T={$$typeof:t,type:s,key:h,ref:v,props:_,_owner:F};return T._store={},Object.defineProperty(T._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(T,"_self",{configurable:!1,enumerable:!1,writable:!1,value:S}),Object.defineProperty(T,"_source",{configurable:!1,enumerable:!1,writable:!1,value:b}),Object.freeze&&(Object.freeze(T.props),Object.freeze(T)),T};function pr(s,h,v,S,b){{var F,_={},T=null,V=null;v!==void 0&&(nt(v),T=""+v),cr(h)&&(nt(h.key),T=""+h.key),lr(h)&&(V=h.ref,ur(h,b));for(F in h)Re.call(h,F)&&!nr.hasOwnProperty(F)&&(_[F]=h[F]);if(s&&s.defaultProps){var A=s.defaultProps;for(F in A)_[F]===void 0&&(_[F]=A[F])}if(T||V){var B=typeof s=="function"?s.displayName||s.name||"Unknown":s;T&&hr(_,B),V&&dr(_,B)}return fr(s,T,V,b,S,he.current,_)}}var Oe=P.ReactCurrentOwner,ut=P.ReactDebugCurrentFrame;function re(s){if(s){var h=s._owner,v=be(s.type,s._source,h?h.type:null);ut.setExtraStackFrame(v)}else ut.setExtraStackFrame(null)}var Ue;Ue=!1;function Me(s){return typeof s=="object"&&s!==null&&s.$$typeof===t}function ht(){{if(Oe.current){var s=D(Oe.current.type);if(s)return`

Check the render method of \``+s+"`."}return""}}function vr(s){{if(s!==void 0){var h=s.fileName.replace(/^.*[\\\/]/,""),v=s.lineNumber;return`

Check your code at `+h+":"+v+"."}return""}}var dt={};function gr(s){{var h=ht();if(!h){var v=typeof s=="string"?s:s.displayName||s.name;v&&(h=`

Check the top-level render call using <`+v+">.")}return h}}function ft(s,h){{if(!s._store||s._store.validated||s.key!=null)return;s._store.validated=!0;var v=gr(h);if(dt[v])return;dt[v]=!0;var S="";s&&s._owner&&s._owner!==Oe.current&&(S=" It was passed a child from "+D(s._owner.type)+"."),re(s),E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',v,S),re(null)}}function pt(s,h){{if(typeof s!="object")return;if(Be(s))for(var v=0;v<s.length;v++){var S=s[v];Me(S)&&ft(S,h)}else if(Me(s))s._store&&(s._store.validated=!0);else if(s){var b=w(s);if(typeof b=="function"&&b!==s.entries)for(var F=b.call(s),_;!(_=F.next()).done;)Me(_.value)&&ft(_.value,h)}}}function mr(s){{var h=s.type;if(h==null||typeof h=="string")return;var v;if(typeof h=="function")v=h.propTypes;else if(typeof h=="object"&&(h.$$typeof===n||h.$$typeof===m))v=h.propTypes;else return;if(v){var S=D(h);ir(v,s.props,"prop",S,s)}else if(h.PropTypes!==void 0&&!Ue){Ue=!0;var b=D(h);E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",b||"Unknown")}typeof h.getDefaultProps=="function"&&!h.getDefaultProps.isReactClassApproved&&E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function xr(s){{for(var h=Object.keys(s.props),v=0;v<h.length;v++){var S=h[v];if(S!=="children"&&S!=="key"){re(s),E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",S),re(null);break}}s.ref!==null&&(re(s),E("Invalid attribute `ref` supplied to `React.Fragment`."),re(null))}}function vt(s,h,v,S,b,F){{var _=Se(s);if(!_){var T="";(s===void 0||typeof s=="object"&&s!==null&&Object.keys(s).length===0)&&(T+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var V=vr(b);V?T+=V:T+=ht();var A;s===null?A="null":Be(s)?A="array":s!==void 0&&s.$$typeof===t?(A="<"+(D(s.type)||"Unknown")+" />",T=" Did you accidentally export a JSX literal instead of a component?"):A=typeof s,E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",A,T)}var B=pr(s,h,v,b,F);if(B==null)return B;if(_){var G=h.children;if(G!==void 0)if(S)if(Be(G)){for(var ie=0;ie<G.length;ie++)pt(G[ie],s);Object.freeze&&Object.freeze(G)}else E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else pt(G,s)}return s===i?xr(B):mr(B),B}}function Sr(s,h,v){return vt(s,h,v,!0)}function yr(s,h,v){return vt(s,h,v,!1)}var Tr=yr,_r=Sr;ae.Fragment=i,ae.jsx=Tr,ae.jsxs=_r}()),ae}var se={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xe;function xt(){if(Xe)return se;Xe=1;var c=O,t=Symbol.for("react.element"),e=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(l,n,f){var d,m={},g=null,p=null;f!==void 0&&(g=""+f),n.key!==void 0&&(g=""+n.key),n.ref!==void 0&&(p=n.ref);for(d in n)i.call(n,d)&&!o.hasOwnProperty(d)&&(m[d]=n[d]);if(l&&l.defaultProps)for(d in n=l.defaultProps,n)m[d]===void 0&&(m[d]=n[d]);return{$$typeof:t,type:l,key:g,ref:p,props:m,_owner:r.current}}return se.Fragment=e,se.jsx=u,se.jsxs=u,se}process.env.NODE_ENV==="production"?z.exports=xt():z.exports=mt();var St=z.exports;class yt{constructor(t){a(this,"content",new Map);a(this,"keys",[]);a(this,"length",0);a(this,"current",0);this.content=t,this.keys=Object.keys(t),this.length=t.size}hasNext(){return this.current<this.length}next(){return this.keys[this.current++]}}class de{constructor(){a(this,"content",new Map)}get(t){return this.content.get(t)}keys(){return new yt(this.content)}}class Tt{constructor(t){a(this,"current",0);a(this,"array",[]);this.array=t}hasNext(){return this.current<this.array.length}next(){return this.array[this.current++]}}class fe{constructor(){a(this,"content",new Map)}get(t){return this.content.get(t)}remove(t){return this.content.delete(t)}keys(){const t=[];return this.content.forEach((e,i)=>{t.push(+i)}),new Tt(t)}}class _t{constructor(){a(this,"powerOf2Fluid",!0);a(this,"simulationScale",.25);a(this,"fluidScale",1.5);a(this,"fluidIterations",8);a(this,"gamma",2.1);a(this,"gradientBackground",.1);a(this,"bevelCurveRadius",5);a(this,"innerDarkening",.7);a(this,"chromaticAberration",.15);a(this,"refraction",.21);a(this,"backgroundMultiplier",1);a(this,"periodicBoundary",!0);a(this,"dragSpeed",3);a(this,"dragCoefficient",.8);a(this,"motionDecayFactor",0);a(this,"surfaceDecayFactor",2);a(this,"timestepMultiplier",1);a(this,"fluidPhysicsScale",20);a(this,"paused",!1);a(this,"version",1)}setChangeCallbacks(t){["onChangeVersion","onChangePaused","onChangeFluidPhysicsScale","onChangeTimestepMultiplier","onChangeSurfaceDecayFactor","onChangeMotionDecayFactor","onChangeDragCoefficient","onChangeDragSpeed","onChangePeriodicBoundary","onChangeBackgroundMultiplier","onChangeRefraction","onChangeChromaticAberration","onChangeInnerDarkening","onChangeBevelCurveRadius","onChangeGradientBackground","onChangeGamma","onChangeFluidIterations","onChangeFluidScale","onChangeSimulationScale","onChangePowerOf2Fluid"].forEach(i=>{t[i]&&(this[i]=t[i])})}setFromDynamic(t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&Object.prototype.hasOwnProperty.call(this,e)){const i=this[e];this[e]=t[e];const r=`onChange${e.charAt(0).toUpperCase()+e.slice(1)}`;typeof this[r]=="function"&&this[r](this[e],i)}}}class X{constructor(t,e,i,r,o,u,l,n){a(this,"wrapT");a(this,"wrapS");a(this,"minFilter");a(this,"magFilter");a(this,"dataType");a(this,"internalFormat");a(this,"format");this.wrapT=n??t.CLAMP_TO_EDGE,this.wrapS=l??t.CLAMP_TO_EDGE,this.minFilter=u??t.NEAREST,this.magFilter=o??t.NEAREST,this.dataType=r??t.UNSIGNED_BYTE,this.internalFormat=i??null,this.format=e??t.RGBA}match(t){return this.wrapT===t.wrapT&&this.wrapS===t.wrapS&&this.minFilter===t.minFilter&&this.magFilter===t.magFilter&&this.dataType===t.dataType&&this.internalFormat===t.internalFormat&&this.format===t.format}}class pe{constructor(t,e,i,r){a(this,"wrapT");a(this,"wrapS");a(this,"minFilter");a(this,"magFilter");i&&(this.wrapT=i),r&&(this.wrapS=r),t&&(this.minFilter=t),e&&(this.magFilter=e)}}class Fe{constructor(t=4,e=!0){a(this,"unpackAlignment");a(this,"webGLFlipY");this.unpackAlignment=t,this.webGLFlipY=e}}class j extends X{constructor(e,i,r,o,u,l,n,f,d,m,g){super(e,u,l,n,f,d,m,g);a(this,"gl");a(this,"width");a(this,"height");a(this,"native");this.gl=e,this.width=i,this.height=r,this.native=o}static createTextureFromImage(e,i,r,o,u){if(r||(r=new X(e,null,null,null,null,null,null,null)),o||(o=new Fe),!u)switch(r.minFilter){case e.NEAREST_MIPMAP_NEAREST:case e.LINEAR_MIPMAP_NEAREST:case e.NEAREST_MIPMAP_LINEAR:case e.LINEAR_MIPMAP_LINEAR:u=!0;break;default:u=!1}const l=e.createTexture();if(!l)throw new Error("create texture failed");return e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,r.minFilter),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,r.magFilter),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,r.wrapS),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,r.wrapT),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.webGLFlipY),e.texImage2D(e.TEXTURE_2D,0,r.internalFormat===null?r.format:r.internalFormat,r.format,r.dataType,i),u&&e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null),new j(e,i.width,i.height,l,r.format,r.internalFormat,r.dataType,r.magFilter,r.minFilter,r.wrapS,r.wrapT)}static createTexture(e,i,r,o,u,l,n){if(o||(o=new X(e,null,null,null,null,null,null,null)),l||(l=new Fe),!n)switch(o.minFilter){case e.NEAREST_MIPMAP_NEAREST:case e.LINEAR_MIPMAP_NEAREST:case e.NEAREST_MIPMAP_LINEAR:case e.LINEAR_MIPMAP_LINEAR:n=!0;break;default:n=!1}u||(u=null);const f=e.createTexture();if(!f)throw new Error("create texture failed");return e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,o.minFilter),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,o.magFilter),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,o.wrapS),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,o.wrapT),e.pixelStorei(e.UNPACK_ALIGNMENT,l.unpackAlignment),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,l.webGLFlipY),e.texImage2D(e.TEXTURE_2D,0,o.internalFormat===null?o.format:o.internalFormat,i,r,0,o.format,o.dataType,u),n&&e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null),new j(e,i,r,f,o.format,o.internalFormat,o.dataType,o.magFilter,o.minFilter,o.wrapS,o.wrapT)}static updateGLTextureParameters(e,i,r){e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),r.magFilter&&e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,r.magFilter),r.minFilter&&e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,r.minFilter),r.wrapS&&e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,r.wrapS),r.wrapT&&e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,r.wrapT),e.bindTexture(e.TEXTURE_2D,null)}}const ke={lastActiveTexture:-1};class Y{constructor(t,e,i,r){a(this,"alwaysDirty",!1);a(this,"gl");a(this,"name");a(this,"location");a(this,"data");a(this,"dirty",!0);this.gl=t,this.name=e,this.location=i,this.data=r}}class C extends Y{constructor(e,i,r,o=!1){super(e,i,r,null);a(this,"cube");a(this,"type");a(this,"samplerIndex",0);a(this,"gpuSideValue",-1);this.cube=o,this.type=o?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D}apply(){if(this.data===null)return;const e=this.gl.TEXTURE0+this.samplerIndex;ke.lastActiveTexture!==e&&(this.gl.activeTexture(e),ke.lastActiveTexture=e),this.gl.bindTexture(this.type,this.data),this.gpuSideValue!==this.samplerIndex&&(this.gl.uniform1i(this.location,this.samplerIndex),this.gpuSideValue=this.samplerIndex)}}class ve extends Y{constructor(t,e,i,r=0,o=0){const u=new Float32Array([r,o]);super(t,e,i,u)}apply(){if(this.data===null)return;const t=this.data;this.gl.uniform2f(this.location,t[0],t[1]),this.dirty=!1}}class R extends Y{constructor(t,e,i,r=0){super(t,e,i,r)}apply(){this.data!==null&&(this.gl.uniform1f(this.location,this.data),this.dirty=!1)}}class Ie extends Y{constructor(t,e,i,r=0){super(t,e,i,r)}apply(){this.data!==null&&(this.gl.uniform1i(this.location,this.data),this.dirty=!1)}}class bt extends Y{constructor(t,e,i,r=!1){super(t,e,i,r)}apply(){this.data!==null&&(this.gl.uniform1i(this.location,this.data?1:0),this.dirty=!1)}}class Ge extends Y{constructor(e,i,r,o,u){const l=u||new Float32Array(o*4);super(e,i,r,l);a(this,"arraySize");a(this,"buffer");this.arraySize=o,this.buffer=l}apply(){this.data!==null&&(this.gl.uniform4fv(this.location,this.data),this.dirty=!1)}}class je extends Y{constructor(e,i,r,o,u){const l=u||new Float32Array(o*2);super(e,i,r,l);a(this,"arraySize");a(this,"buffer");this.arraySize=o,this.buffer=l}apply(){this.data!==null&&(this.gl.uniform2fv(this.location,this.data),this.dirty=!1)}}class ze{constructor(t){a(this,"closeBracket","");a(this,"openBracket","");a(this,"contents",[]);t&&(this.openBracket=t.charAt(0),this.closeBracket=t.charAt(1))}toString(){let t=this.openBracket;for(let e=0;e<this.contents.length;e++)t+=this.contents[e].toString();return t+this.closeBracket}}class ge{constructor(t){a(this,"contents");a(this,"toString",()=>this.contents);if(!t){this.contents="";return}this.contents=t}}class N{constructor(t,e,i=1){a(this,"name");a(this,"location");a(this,"itemCount");a(this,"byteSize");a(this,"type",5126);this.name=t,this.location=e,this.itemCount=i,this.byteSize=i*4}}const K={nativeClassName:c=>{const t={}.toString.call(c).slice(8,-1);return t==="Object"||t==="Function"||t==="Math"||t==="JSON"?null:t},isNativeObject:c=>K.nativeClassName(c)!==null,instanceof:(c,t)=>{if(!t)return!1;switch(t){case Array:return c instanceof Array;case Boolean:return typeof c=="boolean";case Number:return typeof c=="number";case String:return typeof c=="string";default:return c?typeof t=="function"?c instanceof t:typeof t=="object"&&K.isNativeObject(c)&&c instanceof t?!0:t===N&&c.__name__!==null&&c.__ename__===null:!1}},cast:(c,t)=>{if(!c||K.instanceof(c,t))return c;throw new Error("Cannot cast "+K.nativeClassName(c)+" to "+K.nativeClassName(t))}},U={substr:(c,t=0,e=c.length)=>{let i=t,r=e;return e<0&&(r=c.length+e),t>r&&([i,r]=[r,i]),c.substring(i,r)},remove:(c,t)=>{const e=c.indexOf(t);return e!==-1?(c.splice(e,1),!0):!1},stripComments:c=>{const t=RegExp("(/\\*([\\s\\S]*?)\\*/)|(//(.*)$)","igm".split("u").join(""));return c.replace(t,"")},now(){return typeof performance<"u"&&typeof performance.now=="function"?performance.now():Date.now()},bracketExplode(c,t){if(t.length!==2)return null;let e="";const i=t.charAt(0),r=t.charAt(1),o=new ze;let u=o;const l=[];let n=null;for(let f=0;f<c.length;f++)if(e=c.charAt(f),e===i){const d=new ze(t);u.contents.push(d),l.push(u),u=d,n=d}else e===r?(u=l.pop(),n=u):(n instanceof ge||(n=new ge,u.contents.push(n)),K.cast(n,ge).contents+=e);return o},compressedToExploded:(c,t)=>{let e=0,i=0;for(let r=0;r<c.contents.length;r++){const o=c.contents[r],u=o.toString().length;if(o instanceof ge){if(e+u>t)break;e+=u}i+=u}return t-e+i},injectConstValue:(c,t,e)=>U.stripComments(c),floorPowerOf2:c=>{let t=Math.floor(c);return t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,(t|=t>>16)-(t>>1)},log2:c=>Math.log(c)*1.4426950408889634};class ${constructor(t){a(this,"_aStride",0);a(this,"_textures",[]);a(this,"_attributes",[]);a(this,"_uniforms",[]);a(this,"_numTextures",0);a(this,"_vertSource","");a(this,"_fragSource","");a(this,"_vert",null);a(this,"_frag",null);a(this,"_prog",null);a(this,"_name","");a(this,"_ready",!1);a(this,"_active",!1);a(this,"gl");this.gl=t,this._name=this.constructor.name,this.initSources()}initSources(){}createProperties(){}create(){this.compile(this._vertSource,this._fragSource),this._ready=!0}destroy(){this.gl.deleteShader(this._vert),this.gl.deleteShader(this._frag),this.gl.deleteProgram(this._prog),this._prog=null,this._vert=null,this._frag=null,this._ready=!1}compile(t,e){const i=this.gl.createShader(this.gl.VERTEX_SHADER);if(!i)throw new Error("Error creating vertex shader");if(this.gl.shaderSource(i,t),this.gl.compileShader(i),!this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS))throw new Error("Error compiling vertex shader");const r=this.gl.createShader(this.gl.FRAGMENT_SHADER);if(!r)throw new Error("Error creating fragment shader");if(this.gl.shaderSource(r,e),this.gl.compileShader(r),!this.gl.getShaderParameter(r,this.gl.COMPILE_STATUS))throw new Error("Error compiling fragment shader");const o=this.gl.createProgram();if(o===null)throw new Error("Error creating shader program");if(this.gl.attachShader(o,i),this.gl.attachShader(o,r),this.gl.linkProgram(o),!this.gl.getProgramParameter(o,this.gl.LINK_STATUS))throw new Error("Unable to initialize the shader program."+this.gl.getProgramInfoLog(o));const u=new Map;for(let m=this.gl.getProgramParameter(o,this.gl.ACTIVE_UNIFORMS);m-- >0;){const g=this.gl.getActiveUniform(o,m),p=this.gl.getUniformLocation(o,g.name);u.set(g.name,p)}const l=new Map;for(let m=this.gl.getProgramParameter(o,this.gl.ACTIVE_ATTRIBUTES);m-- >0;){const g=this.gl.getActiveAttrib(o,m),p=this.gl.getAttribLocation(o,g.name);l.set(g.name,p)}this._vert=i,this._frag=r,this._prog=o,this._numTextures=0;const n=[];let f=0;for(let m=this._uniforms;f<m.length;f++){const g=m[f];let p=u.get(g.name);p||(p=u.get(g.name+"[0]")),g instanceof C&&(g.samplerIndex=this._numTextures++,this._textures[g.samplerIndex]=g),p?g.location=p:n.push(g)}for(;n.length>0;){const m=n.pop();U.remove(this._uniforms,m)}f=0;const d=this._attributes;for(;f<d.length;){const m=d[f++],g=l.get(m.name);m.location=g??-1}}deactivate(){this._active&&(this._active=!1,this.disableAttributes())}disableAttributes(){for(let t=0,e=this._attributes.length;t<e;t++){const i=this._attributes[t].location;i!==-1&&this.gl.disableVertexAttribArray(i)}}toString(){return"[Shader("+this._name+", attributes:"+this._attributes.length+", uniforms:"+this._uniforms.length+")]"}setupAndActive(){this._active||(this._ready||this.create(),this.gl.useProgram(this._prog));for(const e of this._uniforms)(e.dirty||e.alwaysDirty)&&e.apply();let t=0;for(const e of this._attributes)e.location!==-1&&(this.gl.enableVertexAttribArray(e.location),this.gl.vertexAttribPointer(e.location,e.itemCount,e.type,!1,this._aStride,t)),t+=e.byteSize;this._active||(this._active=!0)}}const We={STORAGE_QUALIFIER_TYPE:(()=>{const c=new de;return c.content.set("const",["bool","int","float","vec2","vec3","vec4","bvec2","bvec3","bvec4","ivec2","ivec3","ivec4","mat2","mat3","mat4"]),c.content.set("attribute",["float","vec2","vec3","vec4","mat2","mat3","mat4"]),c.content.set("uniform",["bool","int","float","vec2","vec3","vec4","bvec2","bvec3","bvec4","ivec2","ivec3","ivec4","mat2","mat3","mat4","sampler2D","samplerCube"]),c.content.set("varying",["float","vec2","vec3","vec4","mat2","mat3","mat4"]),c})(),PRECISION_QUALIFIERS:["lowp","mediump","highp"],SAMPLE_LOGO_TEXTURE_GLSL:`
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
  `};class Rt extends ${constructor(e){super(e);a(this,"texture");a(this,"lumaLogoTexture");a(this,"invGamma");a(this,"time_s");a(this,"refraction");a(this,"chromaticAberration");a(this,"innerDarkening");a(this,"gradientBackground");a(this,"viewportAspectRatio");a(this,"vertexPosition");this.createProperties()}createProperties(){super.createProperties();const e=new C(this.gl,"texture",null,!1);this.texture=e,this._uniforms.push(e);const i=new C(this.gl,"lumaLogoTexture",null,!1);this.lumaLogoTexture=i,this._uniforms.push(i);const r=new R(this.gl,"invGamma",null);this.invGamma=r,this._uniforms.push(r);const o=new R(this.gl,"time_s",null);this.time_s=o,this._uniforms.push(o);const u=new R(this.gl,"refraction",null);this.refraction=u,this._uniforms.push(u);const l=new R(this.gl,"chromaticAberration",null);this.chromaticAberration=l,this._uniforms.push(l);const n=new R(this.gl,"innerDarkening",null);this.innerDarkening=n,this._uniforms.push(n);const f=new R(this.gl,"gradientBackground",null);this.gradientBackground=f,this._uniforms.push(f);const d=new R(this.gl,"viewportAspectRatio",null);this.viewportAspectRatio=d,this._uniforms.push(d);const m=new N("vertexPosition",0,2);this.vertexPosition=m,this._attributes.push(m),this._aStride+=8}initSources(){this._vertSource=`#ifdef GL_ES
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
`+We.SAMPLE_LOGO_TEXTURE_GLSL+`
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
`}}class J extends ${constructor(e){super(e);a(this,"invResolution");a(this,"invAspectRatio");a(this,"velocityBoundaryEnabled");a(this,"vertexPosition")}createProperties(){super.createProperties();const e=new ve(this.gl,"invResolution",null,0,0);this.invResolution=e,this._uniforms.push(e);const i=new R(this.gl,"invAspectRatio",null,0);this.invAspectRatio=i,this._uniforms.push(i);const r=new bt(this.gl,"velocityBoundaryEnabled",null,!1);this.velocityBoundaryEnabled=r,this._uniforms.push(r);const o=new N("vertexPosition",0,2);this.vertexPosition=o,this._attributes.push(o),this._aStride+=8}initSources(){this._vertSource=`#ifdef GL_ES
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
`}}class wt extends J{constructor(e){super(e);a(this,"surface");a(this,"dt");a(this,"dx")}createProperties(){super.createProperties();const e=new C(this.gl,"surface",null,!1);this.surface=e,this._uniforms.push(e);const i=new R(this.gl,"dt",null);this.dt=i,this._uniforms.push(i);const r=new R(this.gl,"dx",null);this.dx=r,this._uniforms.push(r)}initSources(){this._vertSource=`#ifdef GL_ES
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
`}}class Ft extends wt{constructor(e){super(e);a(this,"enableUserVelocity");a(this,"decayFactor");a(this,"time_s");a(this,"userVelocityTexture");a(this,"backgroundTexture");a(this,"pointerPositions");a(this,"pointerData");a(this,"activePointerCount");a(this,"backgroundMultiplier");this.createProperties()}set_enableUserVelocity(e){return this.enableUserVelocity=e,this._fragSource=U.injectConstValue(this._fragSource,"enableUserVelocity",e)??"",this._ready&&this.destroy(),e}createProperties(){super.createProperties();const e=new R(this.gl,"decayFactor",null);this.decayFactor=e,this._uniforms.push(e);const i=new R(this.gl,"time_s",null);this.time_s=i,this._uniforms.push(i);const r=new C(this.gl,"userVelocityTexture",null,!1);this.userVelocityTexture=r,this._uniforms.push(r);const o=new C(this.gl,"backgroundTexture",null,!1);this.backgroundTexture=o,this._uniforms.push(o);const u=new Ge(this.gl,"pointerPositions",null,10);this.pointerPositions=u,this._uniforms.push(u);const l=new je(this.gl,"pointerData",null,10);this.pointerData=l,this._uniforms.push(l);const n=new Ie(this.gl,"activePointerCount",null);this.activePointerCount=n,this._uniforms.push(n);const f=new R(this.gl,"backgroundMultiplier",null);this.backgroundMultiplier=f,this._uniforms.push(f)}initSources(){this._vertSource=`#ifdef GL_ES
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
`;const e=[];function i(r){return`
    if (activePointerCount > ${r}) {
        vec2 pointer = pointerPositions[${r}].xy;
        vec2 lastFramePointer = pointerPositions[${r}].zw;
        float pressure = pointerData[${r}].y;
        float radius = pointerData[${r}].x;

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
    `}for(let r=0;r<10;r++)e.push(i(r));this._fragSource=`#ifdef GL_ES
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
`}}class Et extends J{constructor(e){super(e);a(this,"velocity");a(this,"dt");a(this,"dx")}createProperties(){super.createProperties();const e=new C(this.gl,"velocity",null,!1);this.velocity=e,this._uniforms.push(e);const i=new R(this.gl,"dt",null);this.dt=i,this._uniforms.push(i);const r=new R(this.gl,"dx",null);this.dx=r,this._uniforms.push(r)}initSources(){this._vertSource=`#ifdef GL_ES
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
`}}class Pt extends Et{constructor(e){super(e);a(this,"time_s");a(this,"userVelocityTexture");a(this,"lumaLogoTexture");a(this,"decayFactor");a(this,"dragCoefficient");a(this,"dragSpeed");a(this,"pointerPositions");a(this,"pointerData");a(this,"activePointerCount");a(this,"opticalFlowExponent");a(this,"gravity");a(this,"viewportAspectRatio");a(this,"enableUserVelocity");this.createProperties()}set_enableUserVelocity(e){return this.enableUserVelocity=e,this._fragSource=U.injectConstValue(this._fragSource,"enableUserVelocity",e)??"",this._ready&&this.destroy(),e}set_enableVelocityBoundary(e){return this.enableUserVelocity=e,this._fragSource=U.injectConstValue(this._fragSource,"enableUserVelocity",e)??"",this._ready&&this.destroy(),e}createProperties(){super.createProperties();const e=new R(this.gl,"time_s",null);this.time_s=e,this._uniforms.push(e);const i=new C(this.gl,"userVelocityTexture",null,!1);this.userVelocityTexture=i,this._uniforms.push(i);const r=new C(this.gl,"lumaLogoTexture",null,!1);this.lumaLogoTexture=r,this._uniforms.push(r);const o=new R(this.gl,"decayFactor",null);this.decayFactor=o,this._uniforms.push(o);const u=new R(this.gl,"dragCoefficient",null);this.dragCoefficient=u,this._uniforms.push(u);const l=new R(this.gl,"dragSpeed",null);this.dragSpeed=l,this._uniforms.push(l);const n=new Ge(this.gl,"pointerPositions",null,10);this.pointerPositions=n,this._uniforms.push(n);const f=new je(this.gl,"pointerData",null,10);this.pointerData=f,this._uniforms.push(f);const d=new Ie(this.gl,"activePointerCount",null);this.activePointerCount=d,this._uniforms.push(d);const m=new R(this.gl,"opticalFlowExponent",null);this.opticalFlowExponent=m,this._uniforms.push(m);const g=new ve(this.gl,"gravity",null);this.gravity=g,this._uniforms.push(g);const p=new R(this.gl,"viewportAspectRatio",null);this.viewportAspectRatio=p,this._uniforms.push(p)}initSources(){this._vertSource+=`#ifdef GL_ES
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
`;const e=[];function i(r){return`
        if (activePointerCount > ${r}) {
            vec2 pointer = pointerPositions[${r}].xy;
            vec2 lastFramePointer = pointerPositions[${r}].zw;
            float radius = pointerData[${r}].x;
            float pressure = pointerData[${r}].y;

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
    `}for(let r=0;r<10;r++)e.push(i(r));this._fragSource=`#ifdef GL_ES
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
    `+We.SAMPLE_LOGO_TEXTURE_GLSL+`
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
`}}class Ct extends ${constructor(e){super(e);a(this,"texture");a(this,"vertexPosition");a(this,"testVal");this.createProperties()}createProperties(){super.createProperties(),this.texture=new C(this.gl,"texture",null,!1),this._uniforms.push(this.texture),this.vertexPosition=new N("vertexPosition",0,2),this._attributes.push(this.vertexPosition),this.testVal=2,this._aStride+=8}initSources(){this._vertSource=`#ifdef GL_ES
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
        `}}class At extends ${constructor(e){super(e);a(this,"particleData");a(this,"particleUV")}createProperties(){super.createProperties();const e=new C(this.gl,"particleData",null,!1);this.particleData=e,this._uniforms.push(e);const i=new N("particleUV",0,2);this.particleUV=i,this._attributes.push(i),this._aStride+=8}initSources(){this._vertSource=`#ifdef GL_ES
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
}`}}class Bt extends ${constructor(e){super(e);a(this,"texture");a(this,"vertexPosition");this.createProperties()}createProperties(){super.createProperties();const e=new C(this.gl,"texture",0,!1);this.texture=e,this._uniforms.push(e);const i=new N("vertexPosition",0,2);this.vertexPosition=i,this._attributes.push(i),this._aStride+=8}initSources(){this._vertSource=`#ifdef GL_ES
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
`}}class Lt{constructor(t,e,i,r,o,u){a(this,"shaderMap",new de);a(this,"screenTriangle",null);a(this,"nullTexture",null);a(this,"resample",null);a(this,"unitQuad",null);a(this,"gl",null);this.gl=t??this.gl,this.unitQuad=e??this.unitQuad,this.screenTriangle=i??this.screenTriangle,this.resample=r??this.resample,this.nullTexture=o??this.nullTexture,this.shaderMap=u??this.shaderMap}}const q=class q{static getScreenTriangle(t){const e=q.resources;if(e.screenTriangle===null){const i=new Float32Array([0,0,2,0,0,2]);e.screenTriangle=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,e.screenTriangle),t.bufferData(t.ARRAY_BUFFER,i,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null)}return e.screenTriangle}static getResampleShader(t){const e=q.resources;return e.resample===null&&(e.resample=new Bt(t)),e.resample}static getNullTexture(t){const e=q.resources;if(e.nullTexture===null){const i=new X(t,null,null,null,null,null,null,null);e.nullTexture=j.createTexture(t,1,1,i,new Uint8Array([0,0,0,0]),null,!1)}return e.nullTexture}static getShaderWithKey(t,e,i){const r=q.resources;let o=r.shaderMap.get(e);return o||(o=i(t,e),r.shaderMap.content.set(e,o)),o}};a(q,"resources",new Lt(null,null,null,null,null,null));let L=q;class Ot extends J{constructor(e){super(e);a(this,"velocity");a(this,"target");a(this,"dt");a(this,"rdx");this.createProperties()}createProperties(){super.createProperties();const e=new C(this.gl,"velocity",null,!1);this.velocity=e,this._uniforms.push(e);const i=new C(this.gl,"target",null,!1);this.target=i,this._uniforms.push(i);const r=new R(this.gl,"dt",null);this.dt=r,this._uniforms.push(r);const o=new R(this.gl,"rdx",null);this.rdx=o,this._uniforms.push(o)}initSources(){this._vertSource=`#ifdef GL_ES
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
`}}class Ut extends J{constructor(e){super(e);a(this,"velocity");a(this,"halfrdx");this.createProperties()}createProperties(){super.createProperties();const e=new C(this.gl,"velocity",null,!1);this.velocity=e,this._uniforms.push(e);const i=new R(this.gl,"halfrdx",null);this.halfrdx=i,this._uniforms.push(i)}initSources(){this._vertSource=`#ifdef GL_ES
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
`}}class Mt extends J{constructor(e){super(e);a(this,"pressure");a(this,"velocity");a(this,"halfrdx");this.createProperties()}createProperties(){super.createProperties();const e=new C(this.gl,"pressure",null,!1);this.pressure=e,this._uniforms.push(e);const i=new C(this.gl,"velocity",null,!1);this.velocity=i,this._uniforms.push(i);const r=new R(this.gl,"halfrdx",null);this.halfrdx=r,this._uniforms.push(r)}initSources(){this._vertSource=`#ifdef GL_ES
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
`}}class Vt extends J{constructor(e){super(e);a(this,"pressure");a(this,"divergence");a(this,"alpha");this.createProperties()}createProperties(){super.createProperties();const e=new C(this.gl,"pressure",null,!1);this.pressure=e,this._uniforms.push(e);const i=new C(this.gl,"divergence",null,!1);this.divergence=i,this._uniforms.push(i);const r=new R(this.gl,"alpha",null);this.alpha=r,this._uniforms.push(r)}initSources(){this._vertSource=`#ifdef GL_ES
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
`}}class Ne{constructor(t,e,i,r,o){a(this,"gl");a(this,"width");a(this,"height");a(this,"textureParameters");a(this,"textureFactory");this.gl=t,this.width=e,this.height=i,this.textureParameters=r,this.textureFactory=o}createEmptyTexture(t,e){return this.textureFactory!=null?this.textureFactory(this.gl,t,e):j.createTexture(this.gl,t,e,this.textureParameters,null)}activate(){}updateTextureParameters(t){t.magFilter&&(this.textureParameters.magFilter=t.magFilter),t.minFilter&&(this.textureParameters.minFilter=t.minFilter),t.wrapS&&(this.textureParameters.wrapS=t.wrapS),t.wrapT&&(this.textureParameters.wrapT=t.wrapT)}}class oe extends Ne{constructor(e,i,r,o,u){super(e,i,r,o,u);a(this,"writeFrameBufferObject");a(this,"readFrameBufferObject");a(this,"readFromTexture",null);a(this,"writeToTexture",null);a(this,"tmpFBO",null);a(this,"tmpTex",null);this.writeFrameBufferObject=e.createFramebuffer(),this.readFrameBufferObject=e.createFramebuffer(),this.resize(i,r)}activate(){super.activate(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.writeFrameBufferObject)}fillTexture(e,i){const r=L.getResampleShader(this.gl);r.texture.dirty=!0,r.texture.data=this.readFromTexture.native,this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.readFrameBufferObject),this.gl.viewport(0,0,e,i),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,L.getScreenTriangle(this.gl)),r.setupAndActive(),this.gl.drawArrays(4,0,3),r.deactivate(),this.gl.deleteTexture(this.readFromTexture.native)}resize(e,i){const r=this.createEmptyTexture(e,i),o=this.createEmptyTexture(e,i);return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.writeFrameBufferObject),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,r.native,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.readFrameBufferObject),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,o.native,0),this.readFromTexture&&this.readFrameBufferObject?this.fillTexture(e,i):(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.readFrameBufferObject),this.gl.viewport(0,0,this.width,this.height),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT)),this.writeToTexture!=null?this.gl.deleteTexture(this.writeToTexture.native):(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.writeFrameBufferObject),this.gl.viewport(0,0,this.width,this.height),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT)),this.width=e,this.height=i,this.writeToTexture=r,this.readFromTexture=o,this}updateTextureParameters(e){if(this.readFromTexture===null||this.writeToTexture===null){console.log("readFromTexture or writeToTexture is null");return}j.updateGLTextureParameters(this.gl,this.readFromTexture.native,e),j.updateGLTextureParameters(this.gl,this.writeToTexture.native,e),super.updateTextureParameters(e)}swapBuffers(){const e=this.readFrameBufferObject;this.readFrameBufferObject=this.writeFrameBufferObject,this.writeFrameBufferObject=e;const i=this.readFromTexture;this.readFromTexture=this.writeToTexture,this.writeToTexture=i}}class Ee extends Ne{constructor(e,i,r,o,u){super(e,i,r,o,u);a(this,"frameBufferObject");a(this,"texture");this.frameBufferObject=e.createFramebuffer(),this.resize(i,r)}fillTexture(e,i){const r=L.getResampleShader(this.gl);r.texture.dirty=!0,r.texture.data=this.texture.native,this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.frameBufferObject),this.gl.viewport(0,0,e,i),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,L.getScreenTriangle(this.gl)),r.setupAndActive(),this.gl.drawArrays(4,0,3),r.deactivate(),this.gl.deleteTexture(this.texture.native)}resize(e,i){const r=this.createEmptyTexture(e,i);return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.frameBufferObject),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,r.native,0),this.texture&&this.frameBufferObject?this.fillTexture(e,i):(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.frameBufferObject),this.gl.viewport(0,0,this.width,this.height),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT)),this.width=e,this.height=i,this.texture=r,this}activate(){super.activate(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.frameBufferObject)}updateTextureParameters(e){this.texture&&j.updateGLTextureParameters(this.gl,this.texture.native,e),super.updateTextureParameters(e)}}class Xt extends RegExp{constructor(e,i){super(e,i);a(this,"matched",null);a(this,"original","")}}class kt{constructor(t,e){a(this,"reg");this.reg=new Xt(t,e.split("u").join(""))}match(t){return this.reg.global&&(this.reg.lastIndex=0),this.reg.matched=this.reg.exec(t),this.reg.original=t,this.reg.matched!==null}matched(t){if(this.reg.matched!==null&&t>=0&&t<this.reg.matched.length)return this.reg.matched[t];throw new Error("RegExpHelper: matched index out of range")}matchedRight(){if(!this.reg.matched)throw new Error("RegExpHelper: no matched");const t=this.reg.matched.index+this.reg.matched[0].length;return U.substr(this.reg.original,t,this.reg.original.length-t)}matchedPos(){if(!this.reg.matched)throw new Error("RegExpHelper: no matched");return{pos:this.reg.matched.index,len:this.reg.matched[0].length}}matchSub(t,e,i=-1){let r=!1;return this.reg.global?(this.reg.lastIndex=e,this.reg.matched=this.reg.exec(i<0?t:U.substr(t,0,e+i)),r=this.reg.matched!=null,r&&(this.reg.original=t)):(r=this.match(i<0?U.substr(t,e):U.substr(t,e,i)),r&&(this.reg.original=t,this.reg.matched!==null&&(this.reg.matched.index+=e))),r}}const me=class me{constructor(t){a(this,"gl");a(this,"_contextVersion",null);this.gl=t}static get(t){return new me(t)}getContextVersion(){if(!this._contextVersion){const t=this.gl.getParameter(this.gl.VERSION),e=new kt("((OpenGL ES|WebGL)\\s*)?(\\d+)\\.(\\d+)","ig");if(e.match(t)){const i=e.matched(2),r=i.toLowerCase()==="webgl";this._contextVersion={es:!!i,major:(parseInt(e.matched(3))??0)+(r?1:0)||-1,minor:parseInt(e.matched(4))??-1}}else this._contextVersion={es:!1,major:-1,minor:-1}}return this._contextVersion}testWritableColorBuffer(t){for(;this.gl.getError()!=0;)console.log("gl.getError() != 0");const e=j.createTexture(this.gl,2,2,t);let i=0;for(;this.gl.getError()!=0;)if(console.log("gl.getError() != 0"),++i,i>100)return console.log("gl.getError() != 0, 100 times, interrupted"),!1;if(i>0)return console.log("gl.getError() != 0 in testWritableColorBuffer, "+i+" times"),!1;const r=this.gl.createFramebuffer();for(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,r),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,e.native,0),i=0;this.gl.getError()!=0;)if(++i,i>100)return console.log("framebufferTexture2D gl.getError() != 0, 100 times, interrupted"),!1;if(i>0)return console.log("framebufferTexture2D gl.getError() != 0, "+i+" times"),!1;const o=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER)==this.gl.FRAMEBUFFER_COMPLETE;return this.gl.deleteTexture(e.native),this.gl.deleteFramebuffer(r),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),o}getWritableFloatColorBufferParameters(t,e,i){const r=this.getContextVersion(),o=[6403,33319,6407,6408],u=[5131,5126];if(!t||!e)return null;let l=o.indexOf(t),n=u.indexOf(e);if(i==this.gl.LINEAR&&(this.gl.getExtension("OES_texture_float_linear"),this.gl.getExtension("OES_texture_half_float_linear")),r.es&&r.major<=2){for(this.gl.getExtension("OES_texture_float"),this.gl.getExtension("OES_texture_half_float"),this.gl.getExtension("EXT_color_buffer_half_float"),t=o[Math.max(l,2)|0];n<u.length;)if((e=u[n++])==5131&&(e=36193),this.testWritableColorBuffer(new X(this.gl,t,t,e,i,i,33071,33071)))return{format:t,internalFormat:t,dataType:e,filtering:i}}else{if(this.gl.getExtension("EXT_color_buffer_float"),!(this.gl instanceof WebGL2RenderingContext))return console.error("getWritableFloatColorBufferParameters: WebGL2RenderingContext required"),null;let f;const d={6403:this.gl.R16F,33319:this.gl.RG16F,6407:this.gl.RGB16F,6408:this.gl.RGBA16F},m={6403:this.gl.R32F,33319:this.gl.RG32F,6407:this.gl.RGB32F,6408:this.gl.RGBA32F};for(e=u[n++];l<o.length;){const g=o[l++];switch(e){case this.gl.FLOAT:default:f=m[g];break;case this.gl.HALF_FLOAT:f=d[g]}if(this.testWritableColorBuffer(new X(this.gl,g,f,e,i,i,33071,33071)))return{format:g,internalFormat:f,dataType:e,filtering:i}}}return null}};a(me,"capsCache",[]);let ne=me;class It{constructor(t,e,i,r,o,u,l,n,f){a(this,"periodicBoundary");a(this,"advectShader");a(this,"divergenceShader");a(this,"pressureSolveShader");a(this,"pressureGradientSubstractShader");a(this,"applyForcesShader");a(this,"updateSurfaceShader");a(this,"gl");a(this,"width");a(this,"height");a(this,"powerOf2Surface");a(this,"simulationScale");a(this,"solverIterations");a(this,"aspectRatio");a(this,"physicsScale");a(this,"surfaceWidth",0);a(this,"surfaceHeight",0);a(this,"simulationWidth",0);a(this,"simulationHeight",0);a(this,"screenTriangle");a(this,"surfaceRenderTarget");a(this,"velocityRenderTarget");a(this,"pressureRenderTarget");a(this,"divergenceRenderTarget");this.periodicBoundary=!1,this.advectShader=new Ot(t),this.divergenceShader=new Ut(t),this.pressureSolveShader=new Vt(t),this.pressureGradientSubstractShader=new Mt(t),this.applyForcesShader=n,this.updateSurfaceShader=f,this.gl=t,this.width=e,this.height=i,this.powerOf2Surface=l,this.simulationScale=r,this.solverIterations=u,this.aspectRatio=this.width/this.height,this.physicsScale=o,this.updateBaseUniforms(),this.updateTextureSizes();const d=ne.get(t);if(this.gl instanceof WebGL2RenderingContext){const m=d.getWritableFloatColorBufferParameters(this.gl.RGBA,this.gl.HALF_FLOAT,this.gl.LINEAR),g=d.getWritableFloatColorBufferParameters(this.gl.RG,this.gl.HALF_FLOAT,this.gl.LINEAR),p=d.getWritableFloatColorBufferParameters(this.gl.RED,this.gl.HALF_FLOAT,this.gl.NEAREST);if(!m||!g||!p)throw new Error("The fluid simulation requires renderable floating point textures but these are not available on this device");const y=this.periodicBoundary?this.gl.REPEAT:this.gl.CLAMP_TO_EDGE;this.screenTriangle=L.getScreenTriangle(t),this.surfaceRenderTarget=new oe(t,this.surfaceWidth,this.surfaceHeight,new X(this.gl,m.format,m.internalFormat,m.dataType,9729,9729,y,y)),this.velocityRenderTarget=new oe(t,this.simulationWidth,this.simulationHeight,new X(this.gl,g.format,g.internalFormat,g.dataType,9729,9729,y,y)),this.pressureRenderTarget=new oe(t,this.simulationWidth,this.simulationHeight,new X(this.gl,p.format,p.internalFormat,p.dataType,9728,9728,y,y)),this.divergenceRenderTarget=new Ee(t,this.simulationWidth,this.simulationHeight,new X(this.gl,p.format,p.internalFormat,p.dataType,9728,9728,y,y)),this.updateBaseUniforms(),this.printParameters()}}updateBaseUniforms(){this.forEachShader(t=>{const e=t.invAspectRatio;if(!e)return;const i=1/this.aspectRatio;if(e.dirty=!0,e.data=i,!t.invResolution||!t.invResolution.data)return;t.invResolution.data[0]=1/this.simulationWidth,t.invResolution.data[1]=1/this.simulationHeight,t.invResolution.dirty=!0;const r=t.velocityBoundaryEnabled,o=!this.periodicBoundary;r&&(r.dirty=!0,r.data=o)}),this.advectShader.rdx.dirty=!0,this.advectShader.rdx.data=1/this.physicsScale,this.divergenceShader.halfrdx.dirty=!0,this.divergenceShader.halfrdx.data=1/this.physicsScale*.5,this.pressureGradientSubstractShader.halfrdx.dirty=!0,this.pressureGradientSubstractShader.halfrdx.data=1/this.physicsScale*.5,this.pressureSolveShader.alpha.dirty=!0,this.pressureSolveShader.alpha.data=-this.physicsScale*this.physicsScale,this.applyForcesShader.dx.dirty=!0,this.applyForcesShader.dx.data=this.physicsScale,this.updateSurfaceShader.dx.dirty=!0,this.updateSurfaceShader.dx.data=this.physicsScale}printParameters(){}updateTextureSizes(){const t=this.powerOf2Surface?U.floorPowerOf2(this.width):this.width,e=this.powerOf2Surface?U.floorPowerOf2(this.height):this.height,i=U.floorPowerOf2(t*this.simulationScale),r=U.floorPowerOf2(e*this.simulationScale),o=t!=this.surfaceWidth||e!=this.surfaceHeight,u=i!=this.simulationWidth||r!=this.simulationHeight;if(this.surfaceWidth=t,this.surfaceHeight=e,this.simulationWidth=i,this.simulationHeight=r,o&&this.surfaceRenderTarget&&this.surfaceRenderTarget.resize(this.surfaceWidth,this.surfaceHeight),u&&this.velocityRenderTarget&&this.velocityRenderTarget.resize(this.simulationWidth,this.simulationHeight),u&&this.pressureRenderTarget&&this.pressureRenderTarget.resize(this.simulationWidth,this.simulationHeight),u&&this.divergenceRenderTarget){const l=this.divergenceRenderTarget,n=this.simulationWidth,f=this.simulationHeight;l.resize(n,f)}this.updateBaseUniforms()}setWrapMode(t){!this.velocityRenderTarget||!this.pressureRenderTarget||!this.divergenceRenderTarget||!this.surfaceRenderTarget||(this.velocityRenderTarget.updateTextureParameters(new pe(null,null,t,t)),this.pressureRenderTarget.updateTextureParameters(new pe(null,null,t,t)),this.divergenceRenderTarget.updateTextureParameters(new pe(null,null,t,t)),this.surfaceRenderTarget.updateTextureParameters(new pe(null,null,t,t)))}updateShaderUniforms(t,e){if(t.dirty=!0,!e){console.error("data is null");return}t.data=e}processShader(t,e){t.setupAndActive(),e==null||e.activate(),this.gl.drawArrays(this.gl.TRIANGLES,0,3),t.deactivate(),e instanceof oe&&(e==null||e.swapBuffers())}step(t){var m,g,p,y,x,w,P,E,M,Q,Z,ee,te,xe,le,Se,ye,ce;if(this.gl.viewport(0,0,this.simulationWidth,this.simulationHeight),!this.screenTriangle){console.error("this.screenTriangle is null");return}this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.screenTriangle);const e=this.advectShader,i=this.velocityRenderTarget;if(this.updateShaderUniforms(e.dt,t),this.updateShaderUniforms(e.target,(m=i==null?void 0:i.readFromTexture)==null?void 0:m.native),this.updateShaderUniforms(e.velocity,(p=(g=this.velocityRenderTarget)==null?void 0:g.readFromTexture)==null?void 0:p.native),this.processShader(e,i),this.applyForcesShader){const D=this.applyForcesShader;this.updateShaderUniforms(D.dt,t),this.updateShaderUniforms(D.velocity,(x=(y=this.velocityRenderTarget)==null?void 0:y.readFromTexture)==null?void 0:x.native),this.processShader(D,this.velocityRenderTarget)}const r=this.divergenceShader,o=this.divergenceRenderTarget;this.updateShaderUniforms(r.velocity,(P=(w=this.velocityRenderTarget)==null?void 0:w.readFromTexture)==null?void 0:P.native),this.processShader(r,o);const u=this.pressureSolveShader;for(let D=0;D<this.solverIterations;D++)this.updateShaderUniforms(u.divergence,(M=(E=this.divergenceRenderTarget)==null?void 0:E.texture)==null?void 0:M.native),this.updateShaderUniforms(u.pressure,(Z=(Q=this.pressureRenderTarget)==null?void 0:Q.readFromTexture)==null?void 0:Z.native),this.processShader(u,this.pressureRenderTarget);const l=this.pressureGradientSubstractShader,n=this.pressureRenderTarget;if(this.updateShaderUniforms(l.pressure,(ee=n==null?void 0:n.readFromTexture)==null?void 0:ee.native),this.updateShaderUniforms(l.velocity,(xe=(te=this.velocityRenderTarget)==null?void 0:te.readFromTexture)==null?void 0:xe.native),this.processShader(l,this.velocityRenderTarget),this.gl.viewport(0,0,this.surfaceWidth,this.surfaceHeight),this.updateSurfaceShader){const D=this.updateSurfaceShader,I=this.surfaceRenderTarget;this.updateShaderUniforms(D.dt,t),this.updateShaderUniforms(D.surface,(le=I==null?void 0:I.readFromTexture)==null?void 0:le.native),this.processShader(D,I)}const f=this.advectShader,d=this.surfaceRenderTarget;this.updateShaderUniforms(f.dt,t),this.updateShaderUniforms(f.target,(Se=d==null?void 0:d.readFromTexture)==null?void 0:Se.native),this.updateShaderUniforms(f.velocity,(ce=(ye=this.velocityRenderTarget)==null?void 0:ye.readFromTexture)==null?void 0:ce.native),this.processShader(f,d)}forEachShader(t){t(this.applyForcesShader),t(this.updateSurfaceShader),t(this.advectShader),t(this.divergenceShader),t(this.pressureSolveShader),t(this.pressureGradientSubstractShader)}}class Pe{constructor(){a(this,"_currentTarget",null)}get(t,e,i,r){if(this._currentTarget&&(e!=this._currentTarget.width||i!=this._currentTarget.height||!r.match(this._currentTarget.textureParameters))){const o=this._currentTarget;o.gl.deleteFramebuffer(o.frameBufferObject),o.gl.deleteTexture(o.texture.native),this._currentTarget=null}return this._currentTarget||(this._currentTarget=new Ee(t,e,i,r)),this._currentTarget}destroy(){if(this._currentTarget){const t=this._currentTarget;t.gl.deleteFramebuffer(t.frameBufferObject),t.gl.deleteTexture(t.texture.native)}}}class Gt{constructor(t){a(this,"gl");a(this,"intermediate");a(this,"resampleShader");a(this,"screenTriangle");this.gl=t,this.intermediate=new Pe,this.resampleShader=L.getResampleShader(t),this.screenTriangle=L.getScreenTriangle(t)}apply(t,e,i){i&&(i=t);const r=this.intermediate.get(this.gl,t.width*.5|0,t.height*.5|0,i);return r.gl.bindFramebuffer(this.gl.FRAMEBUFFER,r.frameBufferObject),this.gl.viewport(0,0,r.width,r.height),this.gl.bindBuffer(34962,this.screenTriangle),this.resampleShader.texture.dirty=!0,this.resampleShader.texture.data=t.native,this.resampleShader.setupAndActive(),this.gl.drawArrays(4,0,3),this.resampleShader.deactivate(),r.texture}releaseGPUMemory(){this.intermediate!=null&&this.intermediate.destroy()}}class He extends ${constructor(e){super(e);a(this,"vertexPosition")}createProperties(){super.createProperties();const e=new N("vertexPosition",0,2);this.vertexPosition=e,this._attributes.push(e),this._aStride+=8}initSources(){this._vertSource=`#ifdef GL_ES
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
`}}class jt extends He{createProperties(){super.createProperties()}initSources(){this._vertSource=`#ifdef GL_ES
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
`}}class zt extends He{constructor(e){super(e);a(this,"dt");a(this,"particleData")}createProperties(){super.createProperties();const e=new R(this.gl,"dt",null);this.dt=e,this._uniforms.push(e);const i=new C(this.gl,"particleData",null,!1);this.particleData=i,this._uniforms.push(i)}initSources(){this._vertSource=`#ifdef GL_ES
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
`}}class Wt extends zt{constructor(e){super(e);a(this,"dragCoefficient");a(this,"flowScale");a(this,"flowVelocityField");this.createProperties()}createProperties(){super.createProperties();const e=new R(this.gl,"dragCoefficient",null);this.dragCoefficient=e,this._uniforms.push(e);const i=new ve(this.gl,"flowScale",null);this.flowScale=i,this._uniforms.push(i);const r=new C(this.gl,"flowVelocityField",null,!1);this.flowVelocityField=r,this._uniforms.push(r)}initSources(){this._vertSource=`
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
`}}class Nt{constructor(t,e){a(this,"gl");a(this,"count");a(this,"downsampleFilters");this.gl=t,this.count=e;const i=[];for(let r=0;r<e;)++r,i.push(new Gt(t));this.downsampleFilters=i}apply(t){let e=t;for(let i=0,r=this.count;i<r;)e=this.downsampleFilters[i++].apply(e);return e}releaseGPUMemory(){for(let t=0,e=this.downsampleFilters;t<e.length;)e[t++].releaseGPUMemory()}}class Ht{constructor(t,e=524288){a(this,"gl");a(this,"screenTriangle");a(this,"initialConditionsShader");a(this,"stepParticlesShader");a(this,"particleData",null);a(this,"particleUVs",null);a(this,"count",0);var u,l;this.gl=t,t.getExtension("OES_texture_float"),this.screenTriangle=L.getScreenTriangle(t),this.initialConditionsShader=new jt(t),this.stepParticlesShader=new Wt(t);const i=this.stepParticlesShader.dragCoefficient;i&&(i.dirty=!0,i.data=1),((u=this.stepParticlesShader.flowScale)==null?void 0:u.data)[0]=1,((l=this.stepParticlesShader.flowScale)==null?void 0:l.data)[1]=1,this.setCount(e);const r=this.initialConditionsShader,o=this.particleData;o&&(this.gl.viewport(0,0,o.width,o.height),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,o.writeFrameBufferObject)),this.gl.bindBuffer(34962,this.screenTriangle),r.setupAndActive(),this.gl.drawArrays(4,0,3),r.deactivate(),o&&(o.tmpFBO=o.writeFrameBufferObject,o.writeFrameBufferObject=o.readFrameBufferObject,o.readFrameBufferObject=o.tmpFBO,o.tmpTex=o.writeToTexture,o.writeToTexture=o.readFromTexture,o.readFromTexture=o.tmpTex),this.printParameters()}setCount(t){const e=Math.ceil(Math.sqrt(t)),i=ne.get(this.gl).getWritableFloatColorBufferParameters(6408,this.gl.HALF_FLOAT,9728);if(i==null)throw new Error("Particles require renderable floating point textures");this.particleData!=null?this.particleData.resize(e,e):this.particleData=new oe(this.gl,e,e,new X(this.gl,i.format,i.internalFormat,i.dataType,9728,9728,33071,33071)),this.particleUVs!=null&&this.gl.deleteBuffer(this.particleUVs),this.particleUVs=this.gl.createBuffer();const r=[];for(let o=0;o<e;)for(let u=o++;u<e;)r.push(u/e),r.push(o/e);return this.gl.bindBuffer(34962,this.particleUVs),this.gl.bufferData(34962,new Float32Array(r),35044),this.gl.bindBuffer(34962,null),this.count=t,this.count}printParameters(){var e,i,r,o,u;const t=`<b,gray>><//> <b>GPUParticles Parameters</>
	`+["dragCoefficient: <b>"+(((e=this.stepParticlesShader.dragCoefficient)==null?void 0:e.data)??"")+"</b>","flowScaleX: <b>"+((i=this.stepParticlesShader.flowScale)==null?void 0:i.data)[0]+"</b>","flowScaleY: <b>"+((r=this.stepParticlesShader.flowScale)==null?void 0:r.data)[1]+"</b>","texture size: <b>"+((o=this.particleData)==null?void 0:o.width)+"x"+((u=this.particleData)==null?void 0:u.height)+"</b>"].join(`
	`);console.log(t)}}class Ye{constructor(t,e,i,r,o,u,l,n,f){a(this,"type");a(this,"x");a(this,"y");a(this,"buttonState");a(this,"pressure");a(this,"radius");a(this,"angle");a(this,"altitudeAngle");a(this,"azimuthAngle");this.type=t,this.x=e,this.y=i,this.buttonState=r,this.pressure=o,this.radius=u,this.angle=l,this.altitudeAngle=n,this.azimuthAngle=f}}class $e extends ${constructor(e,i,r){super(e);a(this,"direction");a(this,"kernel");a(this,"shaderParts");a(this,"invResolution");a(this,"texture");a(this,"vertexPosition");this.gl=e,this.direction=i,this.kernel=r,this.shaderParts=this.generateShaderParts(),this.createProperties()}generateShaderParts(){const e=this.nearestBestKernel(this.kernel),i=(e-1)/2,r=[],o=[];let u=0;for(let x=0;x<e;x++){const w=x,P=this.gaussianWeight(w/(e-1)*2-1);r[w]=w-i,o[w]=P,u+=P}const l=o.length;for(let x=0;x<l;x++)o[x]/=u;const n=[],f=[],d=[];for(let x=0;x<=i;x+=2){const w=0|Math.min(x+1,Math.floor(i));if(x===w)d.push({o:r[x],w:o[x]});else{const P=o[x]+o[w]*(w==i?.5:1),E=r[x]+1/(1+o[x]/o[w]);E===0?(d.push({o:r[x],w:o[x]}),d.push({o:r[x+1],w:o[x+1]})):(d.push({o:E,w:P}),d.push({o:-E,w:P}))}}for(let x=0;x<d.length;x++)f[x]=d[x].o,n[x]=d[x].w;const m=[],g=f.length;for(let x=0;x<g;x++)m.push("varying vec2 sampleCoord"+x+++";");const p=[];for(let x=0;x<g;x++)p.push("sampleCoord"+x+" = texelCoord + vec2("+this.glslFloat(f[x]*this.direction[0])+", "+this.glslFloat(f[x]*this.direction[1])+") * invResolution;");const y=[];for(let x=0;x<g;x++)y.push("blend += texture2D(texture, sampleCoord"+x+") * "+this.glslFloat(n[x])+";");return{varyingDeclarations:m,varyingValues:p,textureSamples:y}}nearestBestKernel(e){let i;const r=Math.round(e);return r%2!=0&&Math.floor(r/2)%2==0&&r>0?0|Math.max(r,3):(i=r-1)%2!=0&&Math.floor(i/2)%2==0&&i>0||(i=r+1)%2!=0&&Math.floor(i/2)%2==0&&i>0||(i=r-2)%2!=0&&Math.floor(i/2)%2==0&&i>0||(i=r+2)%2!=0&&Math.floor(i/2)%2==0&&i>0?0|Math.max(i,3):0|Math.max(r,3)}gaussianWeight(e){return 1/(.3333333333333333*Math.sqrt(2*Math.PI))*Math.exp(-e*e/.2222222222222222)}glslFloat(e){let i=e===null?"null":""+e;return i.indexOf(".")===-1&&(i+="."),i}createProperties(){super.createProperties();const e=new ve(this.gl,"invResolution",null);this.invResolution=e,this._uniforms.push(e);const i=new C(this.gl,"texture",null,!1);this.texture=i,this._uniforms.push(i);const r=new N("vertexPosition",0,2);this.vertexPosition=r,this._attributes.push(r),this._aStride+=8}initSources(){this._vertSource=`#ifdef GL_ES
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
`}}class Yt{constructor(t,e,i){a(this,"gl");a(this,"kernelX");a(this,"kernelY");a(this,"blurIntermediateXY");a(this,"blurIntermediateX");a(this,"blurShaderX");a(this,"blurShaderY");a(this,"screenTriangle");this.gl=t,this.kernelX=e,this.kernelY=i,this.blurIntermediateXY=new Pe,this.blurIntermediateX=new Pe,this.blurShaderX=L.getShaderWithKey(t,"blurX(k"+e+")",function(r){return new $e(r,new Float32Array([1,0]),e)}),this.blurShaderY=L.getShaderWithKey(t,"blurY(k"+i+")",function(r){return new $e(r,new Float32Array([0,1]),i)}),this.screenTriangle=L.getScreenTriangle(t)}apply(t,e,i){i==null&&(console.log(e),i=t);const r=t.width,o=t.height,u=this.blurIntermediateX.get(this.gl,r,o,i),l=this.blurIntermediateXY.get(this.gl,r,o,i);if(this.gl.viewport(0,0,u.width,u.height),u.gl.bindFramebuffer(this.gl.FRAMEBUFFER,u.frameBufferObject),this.gl.bindBuffer(34962,this.screenTriangle),!this.blurShaderX.texture||!this.blurShaderX.invResolution){console.log("blurShaderX.texture or blurShaderX.invResolution is null");return}if(this.blurShaderX.texture.dirty=!0,this.blurShaderX.texture.data=t.native,this.blurShaderX.invResolution.data[0]=1/t.width,this.blurShaderX.invResolution.data[1]=1/t.height,this.blurShaderX.invResolution.dirty=!0,this.blurShaderX.setupAndActive(),this.gl.drawArrays(4,0,3),this.blurShaderX.deactivate(),l.gl.bindFramebuffer(36160,l.frameBufferObject),this.gl.bindBuffer(34962,this.screenTriangle),!this.blurShaderY.texture||!this.blurShaderY.invResolution){console.log("blurShaderX.texture or blurShaderX.invResolution is null");return}return this.blurShaderY.texture.dirty=!0,this.blurShaderY.texture.data=u.texture.native,this.blurShaderY.invResolution.data[0]=1/t.width,this.blurShaderY.invResolution.data[1]=1/t.height,this.blurShaderY.invResolution.dirty=!0,this.blurShaderY.setupAndActive(),this.gl.drawArrays(4,0,3),this.blurShaderY.deactivate(),l.texture}releaseGPUMemory(){this.blurIntermediateX&&this.blurIntermediateX.destroy(),this.blurIntermediateXY&&this.blurIntermediateXY.destroy()}}class $t{constructor(t,e=.08,i=128){a(this,"gl");a(this,"blurKernelNormalized");a(this,"downsampleSize");a(this,"screenTriangle");a(this,"downsampleChain",null);a(this,"blur",null);this.gl=t,this.blurKernelNormalized=e,this.downsampleSize=i,this.screenTriangle=L.getScreenTriangle(t)}releaseGPUMemory(){this.downsampleChain&&this.downsampleChain.releaseGPUMemory()}}class qt{constructor(t,e,i){a(this,"gl");a(this,"drawingBufferWidth");a(this,"drawingBufferHeight");a(this,"savedSettings",null);a(this,"lumaLogoPromise",null);a(this,"lumaLogoTexture",null);a(this,"settings",new _t);a(this,"particleCount",65536);a(this,"showDebugTextures",!1);a(this,"postProcessingEnabled",!1);a(this,"remapFluidColor",!0);a(this,"renderParticlesEnabled",!1);a(this,"pointerDataBuffer",new Float32Array(20));a(this,"pointerPositionsBuffer",new Float32Array(40));a(this,"activePointersLastFrame",new fe);a(this,"activePointers",new fe);a(this,"screenBuffer",null);a(this,"screenTriangle",null);a(this,"lastTime",U.now()/1e3);a(this,"textureSrc");a(this,"logoSrc");a(this,"renderFluidShader");a(this,"updateForceShader");a(this,"hx__closures__",null);a(this,"fluid");a(this,"offscreenTarget");a(this,"bloomFilter");a(this,"screenTextureShader");a(this,"renderParticlesShader");a(this,"updateSurfaceShader");a(this,"particles");if(this.gl=t,this.drawingBufferWidth=t.drawingBufferWidth,this.drawingBufferHeight=t.drawingBufferHeight,this.logoSrc=e,this.textureSrc=i,this.gl.getExtension("OES_standard_derivatives"),this.updateLumaLogo(),this.screenBuffer=t.getParameter(t.FRAMEBUFFER_BINDING),this.screenBuffer){const r="Screenbuffer at initialization is: "+this.screenBuffer;console.log(r);return}t.disable(t.DEPTH_TEST),t.disable(t.CULL_FACE),t.disable(t.DITHER),this.initializeGPUResources()}updateLumaLogo(){if(!this.lumaLogoPromise){const t=this;this.lumaLogoPromise=new Promise((e,i)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{const o=new X(t.gl,t.gl.RGBA,t.gl.RGBA,t.gl.UNSIGNED_BYTE,t.gl.NEAREST,t.gl.NEAREST,t.gl.CLAMP_TO_EDGE,t.gl.CLAMP_TO_EDGE),u=j.createTextureFromImage(t.gl,r,o,new Fe(1,!0),!0);e({img:r,texture:u})},r.onerror=o=>{i(o)},r.src=this.logoSrc})}this.lumaLogoPromise.then(t=>{if(this.lumaLogoTexture=t.texture,!this.renderFluidShader)return console.error("renderFluidShader is null"),!1;const e=this.renderFluidShader.lumaLogoTexture,i=this.lumaLogoTexture.native;if(!e)return console.error("lumaLogoTexture is null"),!1;if(e.dirty=!0,e.data=i,!this.updateForceShader)return console.error("updateForceShader is null"),!1;const r=this.updateForceShader.lumaLogoTexture,o=this.lumaLogoTexture.native;return r?(r.dirty=!0,r.data=o):(console.error("lumaLogoTexture is null"),!1)})}initializeGPUResources(){this.initializeShaders(),this.screenTriangle=L.getScreenTriangle(this.gl),this.fluid=new It(this.gl,this.settings.fluidScale*this.drawingBufferWidth|0,this.settings.fluidScale*this.drawingBufferHeight|0,this.settings.simulationScale,this.settings.fluidPhysicsScale,this.settings.fluidIterations,this.settings.powerOf2Fluid,this.updateForceShader,this.updateSurfaceShader);const t=this.fluid,e=this.settings.periodicBoundary;t.periodicBoundary=e,t.setWrapMode(e?this.gl.REPEAT:this.gl.CLAMP_TO_EDGE),t.updateBaseUniforms(),this.fluid.solverIterations=0,this.updateSurfaceShader.decayFactor.dirty=!0,this.updateSurfaceShader.decayFactor.data=1,this.updateForceShader.decayFactor.dirty=!0,this.updateForceShader.decayFactor.data=1,this.fluid.step(1),this.fluid.solverIterations=this.settings.fluidIterations,this.updateSurfaceShader.decayFactor.dirty=!0,this.updateSurfaceShader.decayFactor.data=this.settings.surfaceDecayFactor,this.updateForceShader.decayFactor.dirty=!0,this.updateForceShader.decayFactor.data=this.settings.motionDecayFactor;const i=ne.get(this.gl).getWritableFloatColorBufferParameters(this.gl.RGB,5131,9729);if(!i){console.error("getWritableFloatColorBufferParameters is null");return}this.offscreenTarget=new Ee(this.gl,this.fluid.width,this.fluid.height,new X(this.gl,i.format,i.internalFormat,i.dataType,i.filtering,i.filtering,33071,33071));const r=this;this.settings.setChangeCallbacks({onChangeVersion:function(){},onChangePaused:function(){},onChangeTimestepMultiplier:function(){},onChangeFluidPhysicsScale:function(l){const n=r.fluid;n.physicsScale=l,n.updateBaseUniforms()},onChangeSurfaceDecayFactor:function(l){const n=r.updateSurfaceShader.decayFactor;n.dirty=!0,n.data=l},onChangeMotionDecayFactor:function(l){const n=r.updateForceShader.decayFactor;n.dirty=!0,n.data=l},onChangeDragCoefficient:function(l){const n=r.updateForceShader.dragCoefficient;n.dirty=!0,n.data=l},onChangeDragSpeed:function(l){const n=r.updateForceShader.dragSpeed;n.dirty=!0,n.data=l},onChangePeriodicBoundary:function(l){const n=r.fluid;n.periodicBoundary=l,n.setWrapMode(l?10497:33071),n.updateBaseUniforms()},onChangeBackgroundMultiplier:function(l){const n=r.updateSurfaceShader.backgroundMultiplier;n.dirty=!0,n.data=l},onChangeFluidIterations:function(l){r.fluid.solverIterations=l},onChangeGamma:function(l){const n=r.renderFluidShader.invGamma;n.dirty=!0,n.data=1/l},onChangeRefraction:function(l){const n=r.renderFluidShader.refraction;n.dirty=!0,n.data=l},onChangeChromaticAberration:function(l){const n=r.renderFluidShader.chromaticAberration;n.dirty=!0,n.data=l},onChangeInnerDarkening:function(l){const n=r.renderFluidShader.innerDarkening;n.dirty=!0,n.data=l},onChangeBevelCurveRadius:function(){r.updateLumaLogo()},onChangeGradientBackground:function(l){const n=r.renderFluidShader.gradientBackground;n.dirty=!0,n.data=l},onChangeFluidScale:function(){r.resize(r.drawingBufferWidth,r.drawingBufferHeight)},onChangeSimulationScale:function(){r.resize(r.drawingBufferWidth,r.drawingBufferHeight)},onChangePowerOf2Fluid:function(){r.resize(r.drawingBufferWidth,r.drawingBufferHeight)}}),this.bloomFilter=new $t(this.gl);const o=new Image;o.crossOrigin="anonymous",o.src=this.textureSrc;const u=new X(this.gl,6408,null,5121,9729,9729,10497,10497);o.onload=function(){const l=j.createTexture(r.gl,o.width,o.height,u,null,null,!1);r.gl.activeTexture(r.gl.TEXTURE0),r.gl.bindTexture(r.gl.TEXTURE_2D,l.native),r.gl.texSubImage2D(r.gl.TEXTURE_2D,0,0,0,u.format,u.dataType,o),r.gl.generateMipmap(r.gl.TEXTURE_2D),r.gl.bindTexture(r.gl.TEXTURE_2D,null),r.gl.deleteTexture(r.updateSurfaceShader.backgroundTexture.data);const n=r.updateSurfaceShader.backgroundTexture;return n.dirty=!0,n.data=l.native}}initializeShaders(){this.screenTextureShader=new Ct(this.gl),this.renderParticlesShader=new Dt(this.gl),this.updateSurfaceShader=new Ft(this.gl);let t=L.getNullTexture(this.gl).native;this.updateSurfaceShader.userVelocityTexture.dirty=!0,this.updateSurfaceShader.userVelocityTexture.data=t,this.updateSurfaceShader.decayFactor.dirty=!0,this.updateSurfaceShader.decayFactor.data=this.settings.surfaceDecayFactor,this.updateSurfaceShader.pointerPositions.dirty=!0,this.updateSurfaceShader.pointerPositions.data=this.pointerPositionsBuffer,this.updateSurfaceShader.pointerPositions.alwaysDirty=!0,this.updateSurfaceShader.pointerData.dirty=!0,this.updateSurfaceShader.pointerData.data=this.pointerDataBuffer,this.updateSurfaceShader.pointerData.alwaysDirty=!0,this.updateSurfaceShader.backgroundMultiplier.dirty=!0,this.updateSurfaceShader.backgroundMultiplier.data=this.settings.backgroundMultiplier,this.updateSurfaceShader.set_enableUserVelocity("false"),this.updateForceShader=new Pt(this.gl),t=L.getNullTexture(this.gl).native,this.updateForceShader.userVelocityTexture.dirty=!0,this.updateForceShader.userVelocityTexture.data=t,this.updateForceShader.dragCoefficient.dirty=!0,this.updateForceShader.dragCoefficient.data=this.settings.dragCoefficient,this.updateForceShader.dragSpeed.dirty=!0,this.updateForceShader.dragSpeed.data=this.settings.dragSpeed,this.updateForceShader.decayFactor.dirty=!0,this.updateForceShader.decayFactor.data=this.settings.motionDecayFactor,this.updateForceShader.pointerPositions.dirty=!0,this.updateForceShader.pointerPositions.data=this.pointerPositionsBuffer,this.updateForceShader.pointerPositions.alwaysDirty=!0,this.updateForceShader.pointerData.dirty=!0,this.updateForceShader.pointerData.data=this.pointerDataBuffer,this.updateForceShader.pointerData.alwaysDirty=!0;const e=this.updateForceShader.gravity.data;e[0]=0,e[1]=0,this.updateForceShader.set_enableUserVelocity("false"),this.renderFluidShader=new Rt(this.gl),this.renderFluidShader.invGamma.dirty=!0,this.renderFluidShader.invGamma.data=1/this.settings.gamma,this.renderFluidShader.chromaticAberration.dirty=!0,this.renderFluidShader.chromaticAberration.data=this.settings.chromaticAberration,this.renderFluidShader.refraction.dirty=!0,this.renderFluidShader.refraction.data=this.settings.refraction,this.renderFluidShader.innerDarkening.dirty=!0,this.renderFluidShader.innerDarkening.data=this.settings.innerDarkening,this.renderFluidShader.gradientBackground.dirty=!0,this.renderFluidShader.gradientBackground.data=this.settings.gradientBackground}resize(t,e){this.drawingBufferWidth=t,this.drawingBufferHeight=e;const i=this.settings.fluidScale*this.drawingBufferWidth|0,r=this.settings.fluidScale*this.drawingBufferHeight|0,o=this.fluid;if(!o)return console.error("fluid is null"),!1;const u=this.settings.simulationScale,l=this.settings.powerOf2Fluid;i!=null&&(o.width=i),r!=null&&(o.height=r),u!=null&&(o.simulationScale=u),l!=null&&(o.powerOf2Surface=l),o.aspectRatio=o.width/o.height,o.updateTextureSizes();const n=this.offscreenTarget;if(!n)return console.error("offscreenTarget is null"),!1;n.resize(o.width,o.height),this.updateLumaLogo()}onFrame(t){if(!this.fluid){console.warn("fluid is null");return}if(!this.settings.paused){const e=Math.max(Math.min(t-this.lastTime,33.333333333333336)/1e3,.004166666666666667);this.lastTime=t;const i=L.getNullTexture(this.gl);this.updateForceShader.userVelocityTexture.dirty=!0,this.updateForceShader.userVelocityTexture.data=i.native,this.updateSurfaceShader.userVelocityTexture.dirty=!0,this.updateSurfaceShader.userVelocityTexture.data=i.native,this.updateForceShader.viewportAspectRatio.dirty=!0,this.updateForceShader.viewportAspectRatio.data=this.drawingBufferWidth/this.drawingBufferHeight;const r=t/1e3;this.updateSurfaceShader.time_s.dirty=!0,this.updateSurfaceShader.time_s.data=r,this.updateForceShader.time_s.dirty=!0,this.updateForceShader.time_s.data=r,this.renderFluidShader.time_s.dirty=!0,this.renderFluidShader.time_s.data=r;let o=0;const u=this.activePointers;for(const n=u.keys();n.hasNext();){const f=String(n.next()),d=u.get(f);if(o>=10)break;const m=this.activePointersLastFrame.content.get(f)||d,g=o*4;this.pointerPositionsBuffer[g]=(d.x/this.drawingBufferWidth*2-1)*this.fluid.aspectRatio,this.pointerPositionsBuffer[g+1]=(this.drawingBufferHeight-d.y)/this.drawingBufferHeight*2-1,this.pointerPositionsBuffer[g+2]=(m.x/this.drawingBufferWidth*2-1)*this.fluid.aspectRatio,this.pointerPositionsBuffer[g+3]=(this.drawingBufferHeight-m.y)/this.drawingBufferHeight*2-1;const p=o*2;this.pointerDataBuffer[p]=d.radius/this.drawingBufferWidth*this.fluid.aspectRatio,this.pointerDataBuffer[p+1]=.5;const y=this.activePointersLastFrame.content.get(f);y?(y.type=d.type,y.x=d.x,y.y=d.y,y.buttonState=d.buttonState,y.pressure=d.pressure,y.radius=d.radius,y.angle=d.angle,y.altitudeAngle=d.altitudeAngle,y.azimuthAngle=d.azimuthAngle):this.activePointersLastFrame.content.set(f,new Ye(d.type,d.x,d.y,d.buttonState,d.pressure,d.radius,d.angle,d.altitudeAngle,d.azimuthAngle)),++o}if(this.updateSurfaceShader.activePointerCount.dirty=!0,this.updateSurfaceShader.activePointerCount.data=o,this.updateForceShader.activePointerCount.dirty=!0,this.updateForceShader.activePointerCount.data=o,this.fluid.step(e*this.settings.timestepMultiplier),this.renderParticlesEnabled&&!this.particles&&this.initializeParticles(),this.renderParticlesEnabled){this.particles.stepParticlesShader.flowVelocityField.dirty=!0,this.particles.stepParticlesShader.flowVelocityField.data=this.fluid.velocityRenderTarget.readFromTexture.native;const n=this.particles;n.stepParticlesShader.dt.dirty=!0,n.stepParticlesShader.dt.data=e*this.settings.timestepMultiplier,n.stepParticlesShader.particleData.dirty=!0,n.stepParticlesShader.particleData.data=n.particleData.readFromTexture.native;const f=n.stepParticlesShader,d=n.particleData;n.gl.viewport(0,0,d.width,d.height),n.gl.bindFramebuffer(this.gl.FRAMEBUFFER,d.writeFrameBufferObject),n.gl.bindBuffer(this.gl.ARRAY_BUFFER,n.screenTriangle),f.setupAndActive(),n.gl.drawArrays(4,0,3),f.deactivate(),d.swapBuffers()}const l=this.postProcessingEnabled?this.offscreenTarget:null;if(l==null?(this.gl.viewport(0,0,this.drawingBufferWidth,this.drawingBufferHeight),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.screenBuffer)):(this.gl.viewport(0,0,l.width,l.height),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,l.frameBufferObject)),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.remapFluidColor)this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.screenTriangle),this.renderFluidShader.texture.dirty=!0,this.renderFluidShader.texture.data=this.fluid.surfaceRenderTarget.readFromTexture.native,this.renderFluidShader.viewportAspectRatio.dirty=!0,this.renderFluidShader.viewportAspectRatio.data=this.drawingBufferWidth/this.drawingBufferHeight,this.renderFluidShader.setupAndActive(),this.gl.drawArrays(4,0,3),this.renderFluidShader.deactivate();else{const n=this.fluid.surfaceRenderTarget.readFromTexture.native;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.screenTriangle),this.screenTextureShader.texture.dirty=!0,this.screenTextureShader.texture.data=n,this.screenTextureShader.setupAndActive(),this.gl.drawArrays(4,0,3),this.screenTextureShader.deactivate()}if(this.postProcessingEnabled){const n=this.bloomFilter,f=this.offscreenTarget.texture,d=Math.floor(U.log2(Math.max(f.width,f.height)/n.downsampleSize));n.downsampleChain!=null&&n.downsampleChain.count!=d&&(n.downsampleChain.releaseGPUMemory(),n.downsampleChain=null),n.downsampleChain==null&&d>0&&(n.downsampleChain=new Nt(n.gl,d));const m=n.downsampleChain!=null?n.downsampleChain.apply(f):f,g=1<<d,p=n.blurKernelNormalized*f.width/g,y=n.blurKernelNormalized*f.height/g;n.blur!=null&&(n.blur.kernelX!=p||n.blur.kernelY!=y)&&(n.blur.releaseGPUMemory(),n.blur=null),n.blur==null&&(p>1||y>1)&&(n.blur=new Yt(n.gl,p,y));const x=n.blur!==null?n.blur.apply(m):m;if(!x)return console.error("blurApply is null"),!1;this.gl.viewport(0,0,this.drawingBufferWidth,this.drawingBufferHeight),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.screenBuffer),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT);const w=x.native;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.screenTriangle),this.screenTextureShader.texture.dirty=!0,this.screenTextureShader.texture.data=w,this.screenTextureShader.setupAndActive(),this.gl.drawArrays(4,0,3),this.screenTextureShader.deactivate()}this.renderParticlesEnabled&&(this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.DST_COLOR,this.gl.SRC_COLOR),this.gl.blendEquation(this.gl.FUNC_ADD),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.particles.particleUVs),this.renderParticlesShader.particleData.dirty=!0,this.renderParticlesShader.particleData.data=this.particles.particleData.readFromTexture.native,this.renderParticlesShader.setupAndActive(),this.gl.drawArrays(0,0,this.particles.count),this.renderParticlesShader.deactivate(),this.gl.disable(3042)),this.showDebugTextures}}initializeParticles(){var e,i;this.particles=new Ht(this.gl,this.particleCount);const t=this.fluid;if(!t){console.error("fluid is null");return}if(((e=this.particles.stepParticlesShader.flowScale)==null?void 0:e.data)[0]=1/(t.physicsScale*t.aspectRatio),((i=this.particles.stepParticlesShader.flowScale)==null?void 0:i.data)[1]=1/t.physicsScale,!this.particles.stepParticlesShader.dragCoefficient){console.info("dragCoefficient is null");return}this.particles.stepParticlesShader.dragCoefficient.dirty=!0,this.particles.stepParticlesShader.dragCoefficient.data=1}reset(){const t=this.fluid;if([t.velocityRenderTarget,t.pressureRenderTarget,t.surfaceRenderTarget].forEach(i=>{i.gl.bindFramebuffer(this.gl.FRAMEBUFFER,i.readFrameBufferObject),i.gl.viewport(0,0,i.width,i.height),i.gl.clearColor(0,0,0,1),i.gl.clear(i.gl.COLOR_BUFFER_BIT),i.gl.bindFramebuffer(this.gl.FRAMEBUFFER,i.writeFrameBufferObject),i.gl.viewport(0,0,i.width,i.height),i.gl.clearColor(0,0,0,1),i.gl.clear(i.gl.COLOR_BUFFER_BIT)}),this.particles!=null){const i=this.particles,r=i.initialConditionsShader,o=i.particleData;i.gl.viewport(0,0,o.width,o.height),i.gl.bindFramebuffer(this.gl.FRAMEBUFFER,o.writeFrameBufferObject),i.gl.bindBuffer(34962,i.screenTriangle),r.setupAndActive(),i.gl.drawArrays(4,0,3),r.deactivate(),o.swapBuffers()}}onPointerDown(t,e,i,r,o,u,l,n,f,d,m){this.activePointers.content.set(String(t),new Ye(e,i,r,o,l,n,f,d,m))}onPointerChange(t,e,i,r,o,u,l,n,f,d,m){const g=this.activePointers.content.get(String(t));g&&(g.type=e,g.x=i,g.y=r,g.buttonState=o,g.pressure=l,g.radius=n,g.angle=f,g.altitudeAngle=d,g.azimuthAngle=m)}onPointerUp(t){this.activePointers.remove(String(t)),this.activePointersLastFrame.remove(String(t))}}function H(c,t){let e;return t?(t.__id__||(t.__id__=window.$haxeUID++),c.hx__closures__===null?c.hx__closures__={}:e=c.hx__closures__[t.__id__],e||(e=t.bind(c),c.hx__closures__[t.__id__]=e),e):null}class Kt{constructor(t,e,i,r){a(this,"eventHanders",new de);a(this,"canvas");a(this,"gl");a(this,"lumaLogoPromise",null);a(this,"lumaLogoTexture",null);a(this,"particleCount",65536);a(this,"showDebugTextures",!1);a(this,"postProcessingEnabled",!1);a(this,"remapFluidColor",!0);a(this,"renderParticlesEnabled",!1);a(this,"pointerDataBuffer",new Float32Array(20));a(this,"pointerPositionsBuffer",new Float32Array(40));a(this,"activePointersLastFrame",new fe);a(this,"activePointers",new fe);a(this,"screenBuffer",null);a(this,"screenTriangle",null);a(this,"fluid");a(this,"frameLoopHandle",null);a(this,"eventHandlers",new de);window.$haxeUID|=0,this.canvas=t,this.canvas.addEventListener("webglcontextlost",()=>{window.location.reload()}),this.canvas.addEventListener("webglcontextrestored",()=>{window.console.log("webglcontextrestored")}),t.setAttribute("touch-action","none"),this.gl=e,this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.canvas.addEventListener("webglcontextlost",()=>{}),this.gl.canvas.addEventListener("webglcontextrestored",()=>{}),this.screenBuffer=e.getParameter(e.FRAMEBUFFER_BINDING),this.fluid=new qt(e,i,r);let o;const u=window.devicePixelRatio;(o=()=>{this.fluid.resize(this.canvas.width,this.canvas.height);const p=window.performance.now();this.fluid.onFrame(p),this.frameLoopHandle=window.requestAnimationFrame(o)})(),this.canvas.addEventListener("gesturestart",function(p){p.preventDefault(),p.stopPropagation()},!1),this.canvas.addEventListener("gesturechange",function(p){p.preventDefault(),p.stopPropagation()},!1),this.canvas.addEventListener("scroll",function(p){p.preventDefault(),p.stopPropagation()});const l=this;function n(p,y){const w=p.force??p.webkitForce,P=l.canvas.getBoundingClientRect(),E=(p.clientX-P.left)/P.width,M=(p.clientY-P.top)/P.height;y(-1,0,E*e.drawingBufferWidth,M*e.drawingBufferHeight,p.buttons,p.button,w!=null?Math.max(w-1,0):.5,u*50,0,0,0)}function f(p,y,x){x&&p.preventDefault();const w=l.canvas.getBoundingClientRect();for(let P=0,E=p.changedTouches.length;P<E;){const M=p.changedTouches[P++],Q=(M.clientX??0-w.left)/w.width,Z=(M.clientY??0-w.top)/w.height,ee=Q*e.drawingBufferWidth,te=Z*e.drawingBufferHeight;y(M.identifier,1,ee,te,1,0,M.force,(M.radiusX??0)*u,M.rotationAngle,M.altitudeAngle,M.azimuthAngle)}}function d(p){const y=l.fluid;n(p,H(y,y.onPointerChange))}function m(p,y,x,w){Object.prototype.hasOwnProperty.call(l.eventHandlers.content,y)?l.eventHandlers.content.get(y).push({handler:x,options:w}):l.eventHandlers.content.set(y,[{handler:x,options:w}]),p.addEventListener(y,x,w)}m(this.canvas,"mousedown",function(p){n(p,H(l.fluid,l.fluid.onPointerDown))}),m(window,"mousemove",d),m(window,"webkitmouseforcechanged",d),m(this.canvas,"touchstart",function(p){f(p,H(l.fluid,l.fluid.onPointerDown),!0)},{capture:!0,passive:!1}),m(window,"touchmove",function(p){f(p,H(l.fluid,l.fluid.onPointerChange),!0)},{capture:!0,passive:!1}),m(window,"touchforcechange",function(p){f(p,H(l.fluidd,l.fluid.onPointerChange),!1)},{capture:!0,passive:!0}),m(window,"touchend",function(p){f(p,H(l.fluid,l.fluid.onPointerUp),!1)},{capture:!0,passive:!0}),m(window,"touchcancel",function(p){f(p,H(l.fluid,l.fluid.onPointerUp),!1)},{capture:!0,passive:!0});const g=function(p){window.removeEventListener("mousemove",g),n(p,H(l.fluid,l.fluid.onPointerDown))};window.addEventListener("mousemove",g)}}const Jt=c=>{const t=O.useRef(null),[e,i]=O.useState();return O.useLayoutEffect(()=>{var u,l;const r=t.current;if(!r){(u=c.onError)==null||u.call(c,new Error("Canvas not found"));return}const o=r.getContext("webgl2");if(!o){(l=c.onError)==null||l.call(c,new Error("WebGL2 not supported"));return}i(o),new Kt(r,o,c.logoSrc,c.textureSrc)},[e,c]),St.jsx("canvas",{id:"xfluid",ref:t,width:c.width||500,height:c.height||500,style:{width:"100%",height:"100%",backgroundColor:"black",...c.style}})};k.XFluid=Jt,Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});
