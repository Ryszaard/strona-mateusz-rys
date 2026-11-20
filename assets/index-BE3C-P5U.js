(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var PS={exports:{}},gd={},LS={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=Symbol.for("react.element"),fT=Symbol.for("react.portal"),hT=Symbol.for("react.fragment"),dT=Symbol.for("react.strict_mode"),pT=Symbol.for("react.profiler"),mT=Symbol.for("react.provider"),gT=Symbol.for("react.context"),_T=Symbol.for("react.forward_ref"),vT=Symbol.for("react.suspense"),xT=Symbol.for("react.memo"),yT=Symbol.for("react.lazy"),xv=Symbol.iterator;function ST(n){return n===null||typeof n!="object"?null:(n=xv&&n[xv]||n["@@iterator"],typeof n=="function"?n:null)}var DS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},NS=Object.assign,IS={};function Ol(n,e,t){this.props=n,this.context=e,this.refs=IS,this.updater=t||DS}Ol.prototype.isReactComponent={};Ol.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ol.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function US(){}US.prototype=Ol.prototype;function P0(n,e,t){this.props=n,this.context=e,this.refs=IS,this.updater=t||DS}var L0=P0.prototype=new US;L0.constructor=P0;NS(L0,Ol.prototype);L0.isPureReactComponent=!0;var yv=Array.isArray,OS=Object.prototype.hasOwnProperty,D0={current:null},FS={key:!0,ref:!0,__self:!0,__source:!0};function kS(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)OS.call(e,i)&&!FS.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Rc,type:n,key:s,ref:o,props:r,_owner:D0.current}}function MT(n,e){return{$$typeof:Rc,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function N0(n){return typeof n=="object"&&n!==null&&n.$$typeof===Rc}function wT(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Sv=/\/+/g;function Yd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?wT(""+n.key):e.toString(36)}function $f(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Rc:case fT:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Yd(o,0):i,yv(r)?(t="",n!=null&&(t=n.replace(Sv,"$&/")+"/"),$f(r,e,t,"",function(u){return u})):r!=null&&(N0(r)&&(r=MT(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Sv,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",yv(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Yd(s,a);o+=$f(s,e,t,l,r)}else if(l=ST(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Yd(s,a++),o+=$f(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Uc(n,e,t){if(n==null)return n;var i=[],r=0;return $f(n,i,"","",function(s){return e.call(t,s,r++)}),i}function ET(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var ii={current:null},qf={transition:null},TT={ReactCurrentDispatcher:ii,ReactCurrentBatchConfig:qf,ReactCurrentOwner:D0};function zS(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:Uc,forEach:function(n,e,t){Uc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Uc(n,function(){e++}),e},toArray:function(n){return Uc(n,function(e){return e})||[]},only:function(n){if(!N0(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ot.Component=Ol;ot.Fragment=hT;ot.Profiler=pT;ot.PureComponent=P0;ot.StrictMode=dT;ot.Suspense=vT;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TT;ot.act=zS;ot.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=NS({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=D0.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)OS.call(e,l)&&!FS.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Rc,type:n.type,key:r,ref:s,props:i,_owner:o}};ot.createContext=function(n){return n={$$typeof:gT,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:mT,_context:n},n.Consumer=n};ot.createElement=kS;ot.createFactory=function(n){var e=kS.bind(null,n);return e.type=n,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(n){return{$$typeof:_T,render:n}};ot.isValidElement=N0;ot.lazy=function(n){return{$$typeof:yT,_payload:{_status:-1,_result:n},_init:ET}};ot.memo=function(n,e){return{$$typeof:xT,type:n,compare:e===void 0?null:e}};ot.startTransition=function(n){var e=qf.transition;qf.transition={};try{n()}finally{qf.transition=e}};ot.unstable_act=zS;ot.useCallback=function(n,e){return ii.current.useCallback(n,e)};ot.useContext=function(n){return ii.current.useContext(n)};ot.useDebugValue=function(){};ot.useDeferredValue=function(n){return ii.current.useDeferredValue(n)};ot.useEffect=function(n,e){return ii.current.useEffect(n,e)};ot.useId=function(){return ii.current.useId()};ot.useImperativeHandle=function(n,e,t){return ii.current.useImperativeHandle(n,e,t)};ot.useInsertionEffect=function(n,e){return ii.current.useInsertionEffect(n,e)};ot.useLayoutEffect=function(n,e){return ii.current.useLayoutEffect(n,e)};ot.useMemo=function(n,e){return ii.current.useMemo(n,e)};ot.useReducer=function(n,e,t){return ii.current.useReducer(n,e,t)};ot.useRef=function(n){return ii.current.useRef(n)};ot.useState=function(n){return ii.current.useState(n)};ot.useSyncExternalStore=function(n,e,t){return ii.current.useSyncExternalStore(n,e,t)};ot.useTransition=function(){return ii.current.useTransition()};ot.version="18.3.1";LS.exports=ot;var Zn=LS.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AT=Zn,CT=Symbol.for("react.element"),bT=Symbol.for("react.fragment"),RT=Object.prototype.hasOwnProperty,PT=AT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LT={key:!0,ref:!0,__self:!0,__source:!0};function BS(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)RT.call(e,i)&&!LT.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:CT,type:n,key:s,ref:o,props:r,_owner:PT.current}}gd.Fragment=bT;gd.jsx=BS;gd.jsxs=BS;PS.exports=gd;var ee=PS.exports,xm={},HS={exports:{}},Ni={},VS={exports:{}},GS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,K){var P=D.length;D.push(K);e:for(;0<P;){var ie=P-1>>>1,Te=D[ie];if(0<r(Te,K))D[ie]=K,D[P]=Te,P=ie;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var K=D[0],P=D.pop();if(P!==K){D[0]=P;e:for(var ie=0,Te=D.length,Ge=Te>>>1;ie<Ge;){var Y=2*(ie+1)-1,Q=D[Y],ge=Y+1,ue=D[ge];if(0>r(Q,P))ge<Te&&0>r(ue,Q)?(D[ie]=ue,D[ge]=P,ie=ge):(D[ie]=Q,D[Y]=P,ie=Y);else if(ge<Te&&0>r(ue,P))D[ie]=ue,D[ge]=P,ie=ge;else break e}}return K}function r(D,K){var P=D.sortIndex-K.sortIndex;return P!==0?P:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,d=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var K=t(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=D)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=t(u)}}function S(D){if(_=!1,v(D),!g)if(t(l)!==null)g=!0,H(C);else{var K=t(u);K!==null&&j(S,K.startTime-D)}}function C(D,K){g=!1,_&&(_=!1,p(b),b=-1),d=!0;var P=h;try{for(v(K),f=t(l);f!==null&&(!(f.expirationTime>K)||D&&!E());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,h=f.priorityLevel;var Te=ie(f.expirationTime<=K);K=n.unstable_now(),typeof Te=="function"?f.callback=Te:f===t(l)&&i(l),v(K)}else i(l);f=t(l)}if(f!==null)var Ge=!0;else{var Y=t(u);Y!==null&&j(S,Y.startTime-K),Ge=!1}return Ge}finally{f=null,h=P,d=!1}}var T=!1,M=null,b=-1,N=5,y=-1;function E(){return!(n.unstable_now()-y<N)}function I(){if(M!==null){var D=n.unstable_now();y=D;var K=!0;try{K=M(!0,D)}finally{K?B():(T=!1,M=null)}}else T=!1}var B;if(typeof x=="function")B=function(){x(I)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,$=G.port2;G.port1.onmessage=I,B=function(){$.postMessage(null)}}else B=function(){m(I,0)};function H(D){M=D,T||(T=!0,B())}function j(D,K){b=m(function(){D(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){g||d||(g=!0,H(C))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var P=h;h=K;try{return D()}finally{h=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var P=h;h=D;try{return K()}finally{h=P}},n.unstable_scheduleCallback=function(D,K,P){var ie=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ie+P:ie):P=ie,D){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=P+Te,D={id:c++,callback:K,priorityLevel:D,startTime:P,expirationTime:Te,sortIndex:-1},P>ie?(D.sortIndex=P,e(u,D),t(l)===null&&D===t(u)&&(_?(p(b),b=-1):_=!0,j(S,P-ie))):(D.sortIndex=Te,e(l,D),g||d||(g=!0,H(C))),D},n.unstable_shouldYield=E,n.unstable_wrapCallback=function(D){var K=h;return function(){var P=h;h=K;try{return D.apply(this,arguments)}finally{h=P}}}})(GS);VS.exports=GS;var DT=VS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NT=Zn,Li=DT;function fe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var WS=new Set,Ku={};function na(n,e){ml(n,e),ml(n+"Capture",e)}function ml(n,e){for(Ku[n]=e,n=0;n<e.length;n++)WS.add(e[n])}var as=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ym=Object.prototype.hasOwnProperty,IT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mv={},wv={};function UT(n){return ym.call(wv,n)?!0:ym.call(Mv,n)?!1:IT.test(n)?wv[n]=!0:(Mv[n]=!0,!1)}function OT(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function FT(n,e,t,i){if(e===null||typeof e>"u"||OT(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ri(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Pn[n]=new ri(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Pn[e]=new ri(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Pn[n]=new ri(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Pn[n]=new ri(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Pn[n]=new ri(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Pn[n]=new ri(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Pn[n]=new ri(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Pn[n]=new ri(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Pn[n]=new ri(n,5,!1,n.toLowerCase(),null,!1,!1)});var I0=/[\-:]([a-z])/g;function U0(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(I0,U0);Pn[e]=new ri(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(I0,U0);Pn[e]=new ri(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(I0,U0);Pn[e]=new ri(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Pn[n]=new ri(n,1,!1,n.toLowerCase(),null,!1,!1)});Pn.xlinkHref=new ri("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Pn[n]=new ri(n,1,!1,n.toLowerCase(),null,!0,!0)});function O0(n,e,t,i){var r=Pn.hasOwnProperty(e)?Pn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(FT(e,t,r,i)&&(t=null),i||r===null?UT(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ps=NT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oc=Symbol.for("react.element"),Oa=Symbol.for("react.portal"),Fa=Symbol.for("react.fragment"),F0=Symbol.for("react.strict_mode"),Sm=Symbol.for("react.profiler"),XS=Symbol.for("react.provider"),jS=Symbol.for("react.context"),k0=Symbol.for("react.forward_ref"),Mm=Symbol.for("react.suspense"),wm=Symbol.for("react.suspense_list"),z0=Symbol.for("react.memo"),Es=Symbol.for("react.lazy"),YS=Symbol.for("react.offscreen"),Ev=Symbol.iterator;function Vl(n){return n===null||typeof n!="object"?null:(n=Ev&&n[Ev]||n["@@iterator"],typeof n=="function"?n:null)}var Xt=Object.assign,$d;function fu(n){if($d===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);$d=e&&e[1]||""}return`
`+$d+n}var qd=!1;function Kd(n,e){if(!n||qd)return"";qd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{qd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?fu(n):""}function kT(n){switch(n.tag){case 5:return fu(n.type);case 16:return fu("Lazy");case 13:return fu("Suspense");case 19:return fu("SuspenseList");case 0:case 2:case 15:return n=Kd(n.type,!1),n;case 11:return n=Kd(n.type.render,!1),n;case 1:return n=Kd(n.type,!0),n;default:return""}}function Em(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Fa:return"Fragment";case Oa:return"Portal";case Sm:return"Profiler";case F0:return"StrictMode";case Mm:return"Suspense";case wm:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case jS:return(n.displayName||"Context")+".Consumer";case XS:return(n._context.displayName||"Context")+".Provider";case k0:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case z0:return e=n.displayName||null,e!==null?e:Em(n.type)||"Memo";case Es:e=n._payload,n=n._init;try{return Em(n(e))}catch{}}return null}function zT(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Em(e);case 8:return e===F0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ks(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $S(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function BT(n){var e=$S(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Fc(n){n._valueTracker||(n._valueTracker=BT(n))}function qS(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=$S(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Eh(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Tm(n,e){var t=e.checked;return Xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Tv(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ks(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function KS(n,e){e=e.checked,e!=null&&O0(n,"checked",e,!1)}function Am(n,e){KS(n,e);var t=Ks(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Cm(n,e.type,t):e.hasOwnProperty("defaultValue")&&Cm(n,e.type,Ks(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Av(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Cm(n,e,t){(e!=="number"||Eh(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var hu=Array.isArray;function Qa(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ks(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function bm(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(fe(91));return Xt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Cv(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(fe(92));if(hu(t)){if(1<t.length)throw Error(fe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ks(t)}}function ZS(n,e){var t=Ks(e.value),i=Ks(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function bv(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function JS(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rm(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?JS(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var kc,QS=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(kc=kc||document.createElement("div"),kc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=kc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Zu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Eu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},HT=["Webkit","ms","Moz","O"];Object.keys(Eu).forEach(function(n){HT.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Eu[e]=Eu[n]})});function eM(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Eu.hasOwnProperty(n)&&Eu[n]?(""+e).trim():e+"px"}function tM(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=eM(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var VT=Xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pm(n,e){if(e){if(VT[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(fe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(fe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(fe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(fe(62))}}function Lm(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dm=null;function B0(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Nm=null,el=null,tl=null;function Rv(n){if(n=Dc(n)){if(typeof Nm!="function")throw Error(fe(280));var e=n.stateNode;e&&(e=Sd(e),Nm(n.stateNode,n.type,e))}}function nM(n){el?tl?tl.push(n):tl=[n]:el=n}function iM(){if(el){var n=el,e=tl;if(tl=el=null,Rv(n),e)for(n=0;n<e.length;n++)Rv(e[n])}}function rM(n,e){return n(e)}function sM(){}var Zd=!1;function oM(n,e,t){if(Zd)return n(e,t);Zd=!0;try{return rM(n,e,t)}finally{Zd=!1,(el!==null||tl!==null)&&(sM(),iM())}}function Ju(n,e){var t=n.stateNode;if(t===null)return null;var i=Sd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(fe(231,e,typeof t));return t}var Im=!1;if(as)try{var Gl={};Object.defineProperty(Gl,"passive",{get:function(){Im=!0}}),window.addEventListener("test",Gl,Gl),window.removeEventListener("test",Gl,Gl)}catch{Im=!1}function GT(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Tu=!1,Th=null,Ah=!1,Um=null,WT={onError:function(n){Tu=!0,Th=n}};function XT(n,e,t,i,r,s,o,a,l){Tu=!1,Th=null,GT.apply(WT,arguments)}function jT(n,e,t,i,r,s,o,a,l){if(XT.apply(this,arguments),Tu){if(Tu){var u=Th;Tu=!1,Th=null}else throw Error(fe(198));Ah||(Ah=!0,Um=u)}}function ia(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function aM(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Pv(n){if(ia(n)!==n)throw Error(fe(188))}function YT(n){var e=n.alternate;if(!e){if(e=ia(n),e===null)throw Error(fe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Pv(r),n;if(s===i)return Pv(r),e;s=s.sibling}throw Error(fe(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(fe(189))}}if(t.alternate!==i)throw Error(fe(190))}if(t.tag!==3)throw Error(fe(188));return t.stateNode.current===t?n:e}function lM(n){return n=YT(n),n!==null?uM(n):null}function uM(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=uM(n);if(e!==null)return e;n=n.sibling}return null}var cM=Li.unstable_scheduleCallback,Lv=Li.unstable_cancelCallback,$T=Li.unstable_shouldYield,qT=Li.unstable_requestPaint,Qt=Li.unstable_now,KT=Li.unstable_getCurrentPriorityLevel,H0=Li.unstable_ImmediatePriority,fM=Li.unstable_UserBlockingPriority,Ch=Li.unstable_NormalPriority,ZT=Li.unstable_LowPriority,hM=Li.unstable_IdlePriority,_d=null,Rr=null;function JT(n){if(Rr&&typeof Rr.onCommitFiberRoot=="function")try{Rr.onCommitFiberRoot(_d,n,void 0,(n.current.flags&128)===128)}catch{}}var pr=Math.clz32?Math.clz32:tA,QT=Math.log,eA=Math.LN2;function tA(n){return n>>>=0,n===0?32:31-(QT(n)/eA|0)|0}var zc=64,Bc=4194304;function du(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function bh(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=du(a):(s&=o,s!==0&&(i=du(s)))}else o=t&~r,o!==0?i=du(o):s!==0&&(i=du(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-pr(e),r=1<<t,i|=n[t],e&=~r;return i}function nA(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iA(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-pr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=nA(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Om(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function dM(){var n=zc;return zc<<=1,!(zc&4194240)&&(zc=64),n}function Jd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Pc(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-pr(e),n[e]=t}function rA(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-pr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function V0(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-pr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var yt=0;function pM(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var mM,G0,gM,_M,vM,Fm=!1,Hc=[],Fs=null,ks=null,zs=null,Qu=new Map,ec=new Map,As=[],sA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dv(n,e){switch(n){case"focusin":case"focusout":Fs=null;break;case"dragenter":case"dragleave":ks=null;break;case"mouseover":case"mouseout":zs=null;break;case"pointerover":case"pointerout":Qu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ec.delete(e.pointerId)}}function Wl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Dc(e),e!==null&&G0(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function oA(n,e,t,i,r){switch(e){case"focusin":return Fs=Wl(Fs,n,e,t,i,r),!0;case"dragenter":return ks=Wl(ks,n,e,t,i,r),!0;case"mouseover":return zs=Wl(zs,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Qu.set(s,Wl(Qu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ec.set(s,Wl(ec.get(s)||null,n,e,t,i,r)),!0}return!1}function xM(n){var e=Co(n.target);if(e!==null){var t=ia(e);if(t!==null){if(e=t.tag,e===13){if(e=aM(t),e!==null){n.blockedOn=e,vM(n.priority,function(){gM(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Kf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=km(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Dm=i,t.target.dispatchEvent(i),Dm=null}else return e=Dc(t),e!==null&&G0(e),n.blockedOn=t,!1;e.shift()}return!0}function Nv(n,e,t){Kf(n)&&t.delete(e)}function aA(){Fm=!1,Fs!==null&&Kf(Fs)&&(Fs=null),ks!==null&&Kf(ks)&&(ks=null),zs!==null&&Kf(zs)&&(zs=null),Qu.forEach(Nv),ec.forEach(Nv)}function Xl(n,e){n.blockedOn===e&&(n.blockedOn=null,Fm||(Fm=!0,Li.unstable_scheduleCallback(Li.unstable_NormalPriority,aA)))}function tc(n){function e(r){return Xl(r,n)}if(0<Hc.length){Xl(Hc[0],n);for(var t=1;t<Hc.length;t++){var i=Hc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Fs!==null&&Xl(Fs,n),ks!==null&&Xl(ks,n),zs!==null&&Xl(zs,n),Qu.forEach(e),ec.forEach(e),t=0;t<As.length;t++)i=As[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<As.length&&(t=As[0],t.blockedOn===null);)xM(t),t.blockedOn===null&&As.shift()}var nl=ps.ReactCurrentBatchConfig,Rh=!0;function lA(n,e,t,i){var r=yt,s=nl.transition;nl.transition=null;try{yt=1,W0(n,e,t,i)}finally{yt=r,nl.transition=s}}function uA(n,e,t,i){var r=yt,s=nl.transition;nl.transition=null;try{yt=4,W0(n,e,t,i)}finally{yt=r,nl.transition=s}}function W0(n,e,t,i){if(Rh){var r=km(n,e,t,i);if(r===null)lp(n,e,i,Ph,t),Dv(n,i);else if(oA(r,n,e,t,i))i.stopPropagation();else if(Dv(n,i),e&4&&-1<sA.indexOf(n)){for(;r!==null;){var s=Dc(r);if(s!==null&&mM(s),s=km(n,e,t,i),s===null&&lp(n,e,i,Ph,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else lp(n,e,i,null,t)}}var Ph=null;function km(n,e,t,i){if(Ph=null,n=B0(i),n=Co(n),n!==null)if(e=ia(n),e===null)n=null;else if(t=e.tag,t===13){if(n=aM(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ph=n,null}function yM(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(KT()){case H0:return 1;case fM:return 4;case Ch:case ZT:return 16;case hM:return 536870912;default:return 16}default:return 16}}var Rs=null,X0=null,Zf=null;function SM(){if(Zf)return Zf;var n,e=X0,t=e.length,i,r="value"in Rs?Rs.value:Rs.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Zf=r.slice(n,1<i?1-i:void 0)}function Jf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Vc(){return!0}function Iv(){return!1}function Ii(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vc:Iv,this.isPropagationStopped=Iv,this}return Xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Vc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Vc)},persist:function(){},isPersistent:Vc}),e}var Fl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},j0=Ii(Fl),Lc=Xt({},Fl,{view:0,detail:0}),cA=Ii(Lc),Qd,ep,jl,vd=Xt({},Lc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Y0,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==jl&&(jl&&n.type==="mousemove"?(Qd=n.screenX-jl.screenX,ep=n.screenY-jl.screenY):ep=Qd=0,jl=n),Qd)},movementY:function(n){return"movementY"in n?n.movementY:ep}}),Uv=Ii(vd),fA=Xt({},vd,{dataTransfer:0}),hA=Ii(fA),dA=Xt({},Lc,{relatedTarget:0}),tp=Ii(dA),pA=Xt({},Fl,{animationName:0,elapsedTime:0,pseudoElement:0}),mA=Ii(pA),gA=Xt({},Fl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_A=Ii(gA),vA=Xt({},Fl,{data:0}),Ov=Ii(vA),xA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MA(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=SA[n])?!!e[n]:!1}function Y0(){return MA}var wA=Xt({},Lc,{key:function(n){if(n.key){var e=xA[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Jf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?yA[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Y0,charCode:function(n){return n.type==="keypress"?Jf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Jf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),EA=Ii(wA),TA=Xt({},vd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fv=Ii(TA),AA=Xt({},Lc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Y0}),CA=Ii(AA),bA=Xt({},Fl,{propertyName:0,elapsedTime:0,pseudoElement:0}),RA=Ii(bA),PA=Xt({},vd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),LA=Ii(PA),DA=[9,13,27,32],$0=as&&"CompositionEvent"in window,Au=null;as&&"documentMode"in document&&(Au=document.documentMode);var NA=as&&"TextEvent"in window&&!Au,MM=as&&(!$0||Au&&8<Au&&11>=Au),kv=" ",zv=!1;function wM(n,e){switch(n){case"keyup":return DA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function EM(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ka=!1;function IA(n,e){switch(n){case"compositionend":return EM(e);case"keypress":return e.which!==32?null:(zv=!0,kv);case"textInput":return n=e.data,n===kv&&zv?null:n;default:return null}}function UA(n,e){if(ka)return n==="compositionend"||!$0&&wM(n,e)?(n=SM(),Zf=X0=Rs=null,ka=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return MM&&e.locale!=="ko"?null:e.data;default:return null}}var OA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bv(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!OA[n.type]:e==="textarea"}function TM(n,e,t,i){nM(i),e=Lh(e,"onChange"),0<e.length&&(t=new j0("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Cu=null,nc=null;function FA(n){OM(n,0)}function xd(n){var e=Ha(n);if(qS(e))return n}function kA(n,e){if(n==="change")return e}var AM=!1;if(as){var np;if(as){var ip="oninput"in document;if(!ip){var Hv=document.createElement("div");Hv.setAttribute("oninput","return;"),ip=typeof Hv.oninput=="function"}np=ip}else np=!1;AM=np&&(!document.documentMode||9<document.documentMode)}function Vv(){Cu&&(Cu.detachEvent("onpropertychange",CM),nc=Cu=null)}function CM(n){if(n.propertyName==="value"&&xd(nc)){var e=[];TM(e,nc,n,B0(n)),oM(FA,e)}}function zA(n,e,t){n==="focusin"?(Vv(),Cu=e,nc=t,Cu.attachEvent("onpropertychange",CM)):n==="focusout"&&Vv()}function BA(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xd(nc)}function HA(n,e){if(n==="click")return xd(e)}function VA(n,e){if(n==="input"||n==="change")return xd(e)}function GA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var _r=typeof Object.is=="function"?Object.is:GA;function ic(n,e){if(_r(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ym.call(e,r)||!_r(n[r],e[r]))return!1}return!0}function Gv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wv(n,e){var t=Gv(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Gv(t)}}function bM(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?bM(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function RM(){for(var n=window,e=Eh();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Eh(n.document)}return e}function q0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function WA(n){var e=RM(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&bM(t.ownerDocument.documentElement,t)){if(i!==null&&q0(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Wv(t,s);var o=Wv(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var XA=as&&"documentMode"in document&&11>=document.documentMode,za=null,zm=null,bu=null,Bm=!1;function Xv(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Bm||za==null||za!==Eh(i)||(i=za,"selectionStart"in i&&q0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),bu&&ic(bu,i)||(bu=i,i=Lh(zm,"onSelect"),0<i.length&&(e=new j0("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=za)))}function Gc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ba={animationend:Gc("Animation","AnimationEnd"),animationiteration:Gc("Animation","AnimationIteration"),animationstart:Gc("Animation","AnimationStart"),transitionend:Gc("Transition","TransitionEnd")},rp={},PM={};as&&(PM=document.createElement("div").style,"AnimationEvent"in window||(delete Ba.animationend.animation,delete Ba.animationiteration.animation,delete Ba.animationstart.animation),"TransitionEvent"in window||delete Ba.transitionend.transition);function yd(n){if(rp[n])return rp[n];if(!Ba[n])return n;var e=Ba[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in PM)return rp[n]=e[t];return n}var LM=yd("animationend"),DM=yd("animationiteration"),NM=yd("animationstart"),IM=yd("transitionend"),UM=new Map,jv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function no(n,e){UM.set(n,e),na(e,[n])}for(var sp=0;sp<jv.length;sp++){var op=jv[sp],jA=op.toLowerCase(),YA=op[0].toUpperCase()+op.slice(1);no(jA,"on"+YA)}no(LM,"onAnimationEnd");no(DM,"onAnimationIteration");no(NM,"onAnimationStart");no("dblclick","onDoubleClick");no("focusin","onFocus");no("focusout","onBlur");no(IM,"onTransitionEnd");ml("onMouseEnter",["mouseout","mouseover"]);ml("onMouseLeave",["mouseout","mouseover"]);ml("onPointerEnter",["pointerout","pointerover"]);ml("onPointerLeave",["pointerout","pointerover"]);na("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));na("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));na("onBeforeInput",["compositionend","keypress","textInput","paste"]);na("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));na("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));na("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$A=new Set("cancel close invalid load scroll toggle".split(" ").concat(pu));function Yv(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,jT(i,e,void 0,n),n.currentTarget=null}function OM(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Yv(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Yv(r,a,u),s=l}}}if(Ah)throw n=Um,Ah=!1,Um=null,n}function Pt(n,e){var t=e[Xm];t===void 0&&(t=e[Xm]=new Set);var i=n+"__bubble";t.has(i)||(FM(e,n,2,!1),t.add(i))}function ap(n,e,t){var i=0;e&&(i|=4),FM(t,n,i,e)}var Wc="_reactListening"+Math.random().toString(36).slice(2);function rc(n){if(!n[Wc]){n[Wc]=!0,WS.forEach(function(t){t!=="selectionchange"&&($A.has(t)||ap(t,!1,n),ap(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Wc]||(e[Wc]=!0,ap("selectionchange",!1,e))}}function FM(n,e,t,i){switch(yM(e)){case 1:var r=lA;break;case 4:r=uA;break;default:r=W0}t=r.bind(null,e,t,n),r=void 0,!Im||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function lp(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Co(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}oM(function(){var u=s,c=B0(t),f=[];e:{var h=UM.get(n);if(h!==void 0){var d=j0,g=n;switch(n){case"keypress":if(Jf(t)===0)break e;case"keydown":case"keyup":d=EA;break;case"focusin":g="focus",d=tp;break;case"focusout":g="blur",d=tp;break;case"beforeblur":case"afterblur":d=tp;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Uv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=hA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=CA;break;case LM:case DM:case NM:d=mA;break;case IM:d=RA;break;case"scroll":d=cA;break;case"wheel":d=LA;break;case"copy":case"cut":case"paste":d=_A;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Fv}var _=(e&4)!==0,m=!_&&n==="scroll",p=_?h!==null?h+"Capture":null:h;_=[];for(var x=u,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,p!==null&&(S=Ju(x,p),S!=null&&_.push(sc(x,S,v)))),m)break;x=x.return}0<_.length&&(h=new d(h,g,null,t,c),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",d=n==="mouseout"||n==="pointerout",h&&t!==Dm&&(g=t.relatedTarget||t.fromElement)&&(Co(g)||g[ls]))break e;if((d||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,d?(g=t.relatedTarget||t.toElement,d=u,g=g?Co(g):null,g!==null&&(m=ia(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(d=null,g=u),d!==g)){if(_=Uv,S="onMouseLeave",p="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(_=Fv,S="onPointerLeave",p="onPointerEnter",x="pointer"),m=d==null?h:Ha(d),v=g==null?h:Ha(g),h=new _(S,x+"leave",d,t,c),h.target=m,h.relatedTarget=v,S=null,Co(c)===u&&(_=new _(p,x+"enter",g,t,c),_.target=v,_.relatedTarget=m,S=_),m=S,d&&g)t:{for(_=d,p=g,x=0,v=_;v;v=la(v))x++;for(v=0,S=p;S;S=la(S))v++;for(;0<x-v;)_=la(_),x--;for(;0<v-x;)p=la(p),v--;for(;x--;){if(_===p||p!==null&&_===p.alternate)break t;_=la(_),p=la(p)}_=null}else _=null;d!==null&&$v(f,h,d,_,!1),g!==null&&m!==null&&$v(f,m,g,_,!0)}}e:{if(h=u?Ha(u):window,d=h.nodeName&&h.nodeName.toLowerCase(),d==="select"||d==="input"&&h.type==="file")var C=kA;else if(Bv(h))if(AM)C=VA;else{C=BA;var T=zA}else(d=h.nodeName)&&d.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=HA);if(C&&(C=C(n,u))){TM(f,C,t,c);break e}T&&T(n,h,u),n==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Cm(h,"number",h.value)}switch(T=u?Ha(u):window,n){case"focusin":(Bv(T)||T.contentEditable==="true")&&(za=T,zm=u,bu=null);break;case"focusout":bu=zm=za=null;break;case"mousedown":Bm=!0;break;case"contextmenu":case"mouseup":case"dragend":Bm=!1,Xv(f,t,c);break;case"selectionchange":if(XA)break;case"keydown":case"keyup":Xv(f,t,c)}var M;if($0)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ka?wM(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(MM&&t.locale!=="ko"&&(ka||b!=="onCompositionStart"?b==="onCompositionEnd"&&ka&&(M=SM()):(Rs=c,X0="value"in Rs?Rs.value:Rs.textContent,ka=!0)),T=Lh(u,b),0<T.length&&(b=new Ov(b,n,null,t,c),f.push({event:b,listeners:T}),M?b.data=M:(M=EM(t),M!==null&&(b.data=M)))),(M=NA?IA(n,t):UA(n,t))&&(u=Lh(u,"onBeforeInput"),0<u.length&&(c=new Ov("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=M))}OM(f,e)})}function sc(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Lh(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ju(n,t),s!=null&&i.unshift(sc(n,s,r)),s=Ju(n,e),s!=null&&i.push(sc(n,s,r))),n=n.return}return i}function la(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $v(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ju(t,s),l!=null&&o.unshift(sc(t,l,a))):r||(l=Ju(t,s),l!=null&&o.push(sc(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var qA=/\r\n?/g,KA=/\u0000|\uFFFD/g;function qv(n){return(typeof n=="string"?n:""+n).replace(qA,`
`).replace(KA,"")}function Xc(n,e,t){if(e=qv(e),qv(n)!==e&&t)throw Error(fe(425))}function Dh(){}var Hm=null,Vm=null;function Gm(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wm=typeof setTimeout=="function"?setTimeout:void 0,ZA=typeof clearTimeout=="function"?clearTimeout:void 0,Kv=typeof Promise=="function"?Promise:void 0,JA=typeof queueMicrotask=="function"?queueMicrotask:typeof Kv<"u"?function(n){return Kv.resolve(null).then(n).catch(QA)}:Wm;function QA(n){setTimeout(function(){throw n})}function up(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),tc(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);tc(e)}function Bs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Zv(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var kl=Math.random().toString(36).slice(2),Er="__reactFiber$"+kl,oc="__reactProps$"+kl,ls="__reactContainer$"+kl,Xm="__reactEvents$"+kl,eC="__reactListeners$"+kl,tC="__reactHandles$"+kl;function Co(n){var e=n[Er];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ls]||t[Er]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Zv(n);n!==null;){if(t=n[Er])return t;n=Zv(n)}return e}n=t,t=n.parentNode}return null}function Dc(n){return n=n[Er]||n[ls],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ha(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(fe(33))}function Sd(n){return n[oc]||null}var jm=[],Va=-1;function io(n){return{current:n}}function Dt(n){0>Va||(n.current=jm[Va],jm[Va]=null,Va--)}function Ct(n,e){Va++,jm[Va]=n.current,n.current=e}var Zs={},Hn=io(Zs),ui=io(!1),Wo=Zs;function gl(n,e){var t=n.type.contextTypes;if(!t)return Zs;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ci(n){return n=n.childContextTypes,n!=null}function Nh(){Dt(ui),Dt(Hn)}function Jv(n,e,t){if(Hn.current!==Zs)throw Error(fe(168));Ct(Hn,e),Ct(ui,t)}function kM(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(fe(108,zT(n)||"Unknown",r));return Xt({},t,i)}function Ih(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Zs,Wo=Hn.current,Ct(Hn,n),Ct(ui,ui.current),!0}function Qv(n,e,t){var i=n.stateNode;if(!i)throw Error(fe(169));t?(n=kM(n,e,Wo),i.__reactInternalMemoizedMergedChildContext=n,Dt(ui),Dt(Hn),Ct(Hn,n)):Dt(ui),Ct(ui,t)}var $r=null,Md=!1,cp=!1;function zM(n){$r===null?$r=[n]:$r.push(n)}function nC(n){Md=!0,zM(n)}function ro(){if(!cp&&$r!==null){cp=!0;var n=0,e=yt;try{var t=$r;for(yt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}$r=null,Md=!1}catch(r){throw $r!==null&&($r=$r.slice(n+1)),cM(H0,ro),r}finally{yt=e,cp=!1}}return null}var Ga=[],Wa=0,Uh=null,Oh=0,Bi=[],Hi=0,Xo=null,Jr=1,Qr="";function vo(n,e){Ga[Wa++]=Oh,Ga[Wa++]=Uh,Uh=n,Oh=e}function BM(n,e,t){Bi[Hi++]=Jr,Bi[Hi++]=Qr,Bi[Hi++]=Xo,Xo=n;var i=Jr;n=Qr;var r=32-pr(i)-1;i&=~(1<<r),t+=1;var s=32-pr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Jr=1<<32-pr(e)+r|t<<r|i,Qr=s+n}else Jr=1<<s|t<<r|i,Qr=n}function K0(n){n.return!==null&&(vo(n,1),BM(n,1,0))}function Z0(n){for(;n===Uh;)Uh=Ga[--Wa],Ga[Wa]=null,Oh=Ga[--Wa],Ga[Wa]=null;for(;n===Xo;)Xo=Bi[--Hi],Bi[Hi]=null,Qr=Bi[--Hi],Bi[Hi]=null,Jr=Bi[--Hi],Bi[Hi]=null}var Ri=null,Ci=null,Ut=!1,lr=null;function HM(n,e){var t=ji(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function ex(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ri=n,Ci=Bs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ri=n,Ci=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Xo!==null?{id:Jr,overflow:Qr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ji(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ri=n,Ci=null,!0):!1;default:return!1}}function Ym(n){return(n.mode&1)!==0&&(n.flags&128)===0}function $m(n){if(Ut){var e=Ci;if(e){var t=e;if(!ex(n,e)){if(Ym(n))throw Error(fe(418));e=Bs(t.nextSibling);var i=Ri;e&&ex(n,e)?HM(i,t):(n.flags=n.flags&-4097|2,Ut=!1,Ri=n)}}else{if(Ym(n))throw Error(fe(418));n.flags=n.flags&-4097|2,Ut=!1,Ri=n}}}function tx(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ri=n}function jc(n){if(n!==Ri)return!1;if(!Ut)return tx(n),Ut=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Gm(n.type,n.memoizedProps)),e&&(e=Ci)){if(Ym(n))throw VM(),Error(fe(418));for(;e;)HM(n,e),e=Bs(e.nextSibling)}if(tx(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(fe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Ci=Bs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Ci=null}}else Ci=Ri?Bs(n.stateNode.nextSibling):null;return!0}function VM(){for(var n=Ci;n;)n=Bs(n.nextSibling)}function _l(){Ci=Ri=null,Ut=!1}function J0(n){lr===null?lr=[n]:lr.push(n)}var iC=ps.ReactCurrentBatchConfig;function Yl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(fe(309));var i=t.stateNode}if(!i)throw Error(fe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(fe(284));if(!t._owner)throw Error(fe(290,n))}return n}function Yc(n,e){throw n=Object.prototype.toString.call(e),Error(fe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function nx(n){var e=n._init;return e(n._payload)}function GM(n){function e(p,x){if(n){var v=p.deletions;v===null?(p.deletions=[x],p.flags|=16):v.push(x)}}function t(p,x){if(!n)return null;for(;x!==null;)e(p,x),x=x.sibling;return null}function i(p,x){for(p=new Map;x!==null;)x.key!==null?p.set(x.key,x):p.set(x.index,x),x=x.sibling;return p}function r(p,x){return p=Ws(p,x),p.index=0,p.sibling=null,p}function s(p,x,v){return p.index=v,n?(v=p.alternate,v!==null?(v=v.index,v<x?(p.flags|=2,x):v):(p.flags|=2,x)):(p.flags|=1048576,x)}function o(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,x,v,S){return x===null||x.tag!==6?(x=_p(v,p.mode,S),x.return=p,x):(x=r(x,v),x.return=p,x)}function l(p,x,v,S){var C=v.type;return C===Fa?c(p,x,v.props.children,S,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Es&&nx(C)===x.type)?(S=r(x,v.props),S.ref=Yl(p,x,v),S.return=p,S):(S=sh(v.type,v.key,v.props,null,p.mode,S),S.ref=Yl(p,x,v),S.return=p,S)}function u(p,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=vp(v,p.mode,S),x.return=p,x):(x=r(x,v.children||[]),x.return=p,x)}function c(p,x,v,S,C){return x===null||x.tag!==7?(x=Oo(v,p.mode,S,C),x.return=p,x):(x=r(x,v),x.return=p,x)}function f(p,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=_p(""+x,p.mode,v),x.return=p,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Oc:return v=sh(x.type,x.key,x.props,null,p.mode,v),v.ref=Yl(p,null,x),v.return=p,v;case Oa:return x=vp(x,p.mode,v),x.return=p,x;case Es:var S=x._init;return f(p,S(x._payload),v)}if(hu(x)||Vl(x))return x=Oo(x,p.mode,v,null),x.return=p,x;Yc(p,x)}return null}function h(p,x,v,S){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(p,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Oc:return v.key===C?l(p,x,v,S):null;case Oa:return v.key===C?u(p,x,v,S):null;case Es:return C=v._init,h(p,x,C(v._payload),S)}if(hu(v)||Vl(v))return C!==null?null:c(p,x,v,S,null);Yc(p,v)}return null}function d(p,x,v,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(v)||null,a(x,p,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Oc:return p=p.get(S.key===null?v:S.key)||null,l(x,p,S,C);case Oa:return p=p.get(S.key===null?v:S.key)||null,u(x,p,S,C);case Es:var T=S._init;return d(p,x,v,T(S._payload),C)}if(hu(S)||Vl(S))return p=p.get(v)||null,c(x,p,S,C,null);Yc(x,S)}return null}function g(p,x,v,S){for(var C=null,T=null,M=x,b=x=0,N=null;M!==null&&b<v.length;b++){M.index>b?(N=M,M=null):N=M.sibling;var y=h(p,M,v[b],S);if(y===null){M===null&&(M=N);break}n&&M&&y.alternate===null&&e(p,M),x=s(y,x,b),T===null?C=y:T.sibling=y,T=y,M=N}if(b===v.length)return t(p,M),Ut&&vo(p,b),C;if(M===null){for(;b<v.length;b++)M=f(p,v[b],S),M!==null&&(x=s(M,x,b),T===null?C=M:T.sibling=M,T=M);return Ut&&vo(p,b),C}for(M=i(p,M);b<v.length;b++)N=d(M,p,b,v[b],S),N!==null&&(n&&N.alternate!==null&&M.delete(N.key===null?b:N.key),x=s(N,x,b),T===null?C=N:T.sibling=N,T=N);return n&&M.forEach(function(E){return e(p,E)}),Ut&&vo(p,b),C}function _(p,x,v,S){var C=Vl(v);if(typeof C!="function")throw Error(fe(150));if(v=C.call(v),v==null)throw Error(fe(151));for(var T=C=null,M=x,b=x=0,N=null,y=v.next();M!==null&&!y.done;b++,y=v.next()){M.index>b?(N=M,M=null):N=M.sibling;var E=h(p,M,y.value,S);if(E===null){M===null&&(M=N);break}n&&M&&E.alternate===null&&e(p,M),x=s(E,x,b),T===null?C=E:T.sibling=E,T=E,M=N}if(y.done)return t(p,M),Ut&&vo(p,b),C;if(M===null){for(;!y.done;b++,y=v.next())y=f(p,y.value,S),y!==null&&(x=s(y,x,b),T===null?C=y:T.sibling=y,T=y);return Ut&&vo(p,b),C}for(M=i(p,M);!y.done;b++,y=v.next())y=d(M,p,b,y.value,S),y!==null&&(n&&y.alternate!==null&&M.delete(y.key===null?b:y.key),x=s(y,x,b),T===null?C=y:T.sibling=y,T=y);return n&&M.forEach(function(I){return e(p,I)}),Ut&&vo(p,b),C}function m(p,x,v,S){if(typeof v=="object"&&v!==null&&v.type===Fa&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Oc:e:{for(var C=v.key,T=x;T!==null;){if(T.key===C){if(C=v.type,C===Fa){if(T.tag===7){t(p,T.sibling),x=r(T,v.props.children),x.return=p,p=x;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Es&&nx(C)===T.type){t(p,T.sibling),x=r(T,v.props),x.ref=Yl(p,T,v),x.return=p,p=x;break e}t(p,T);break}else e(p,T);T=T.sibling}v.type===Fa?(x=Oo(v.props.children,p.mode,S,v.key),x.return=p,p=x):(S=sh(v.type,v.key,v.props,null,p.mode,S),S.ref=Yl(p,x,v),S.return=p,p=S)}return o(p);case Oa:e:{for(T=v.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){t(p,x.sibling),x=r(x,v.children||[]),x.return=p,p=x;break e}else{t(p,x);break}else e(p,x);x=x.sibling}x=vp(v,p.mode,S),x.return=p,p=x}return o(p);case Es:return T=v._init,m(p,x,T(v._payload),S)}if(hu(v))return g(p,x,v,S);if(Vl(v))return _(p,x,v,S);Yc(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(t(p,x.sibling),x=r(x,v),x.return=p,p=x):(t(p,x),x=_p(v,p.mode,S),x.return=p,p=x),o(p)):t(p,x)}return m}var vl=GM(!0),WM=GM(!1),Fh=io(null),kh=null,Xa=null,Q0=null;function e_(){Q0=Xa=kh=null}function t_(n){var e=Fh.current;Dt(Fh),n._currentValue=e}function qm(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function il(n,e){kh=n,Q0=Xa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(ai=!0),n.firstContext=null)}function Zi(n){var e=n._currentValue;if(Q0!==n)if(n={context:n,memoizedValue:e,next:null},Xa===null){if(kh===null)throw Error(fe(308));Xa=n,kh.dependencies={lanes:0,firstContext:n}}else Xa=Xa.next=n;return e}var bo=null;function n_(n){bo===null?bo=[n]:bo.push(n)}function XM(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,n_(e)):(t.next=r.next,r.next=t),e.interleaved=t,us(n,i)}function us(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Ts=!1;function i_(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jM(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ns(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Hs(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,mt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,us(n,t)}return r=i.interleaved,r===null?(e.next=e,n_(i)):(e.next=r.next,r.next=e),i.interleaved=e,us(n,t)}function Qf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,V0(n,t)}}function ix(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function zh(n,e,t,i){var r=n.updateQueue;Ts=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,d=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:d,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(h=e,d=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(d,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,h=typeof g=="function"?g.call(d,f,h):g,h==null)break e;f=Xt({},f,h);break e;case 2:Ts=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else d={eventTime:d,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=d,l=f):c=c.next=d,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Yo|=o,n.lanes=o,n.memoizedState=f}}function rx(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(fe(191,r));r.call(i)}}}var Nc={},Pr=io(Nc),ac=io(Nc),lc=io(Nc);function Ro(n){if(n===Nc)throw Error(fe(174));return n}function r_(n,e){switch(Ct(lc,e),Ct(ac,n),Ct(Pr,Nc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rm(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Rm(e,n)}Dt(Pr),Ct(Pr,e)}function xl(){Dt(Pr),Dt(ac),Dt(lc)}function YM(n){Ro(lc.current);var e=Ro(Pr.current),t=Rm(e,n.type);e!==t&&(Ct(ac,n),Ct(Pr,t))}function s_(n){ac.current===n&&(Dt(Pr),Dt(ac))}var zt=io(0);function Bh(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fp=[];function o_(){for(var n=0;n<fp.length;n++)fp[n]._workInProgressVersionPrimary=null;fp.length=0}var eh=ps.ReactCurrentDispatcher,hp=ps.ReactCurrentBatchConfig,jo=0,Wt=null,un=null,xn=null,Hh=!1,Ru=!1,uc=0,rC=0;function Ln(){throw Error(fe(321))}function a_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!_r(n[t],e[t]))return!1;return!0}function l_(n,e,t,i,r,s){if(jo=s,Wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,eh.current=n===null||n.memoizedState===null?lC:uC,n=t(i,r),Ru){s=0;do{if(Ru=!1,uc=0,25<=s)throw Error(fe(301));s+=1,xn=un=null,e.updateQueue=null,eh.current=cC,n=t(i,r)}while(Ru)}if(eh.current=Vh,e=un!==null&&un.next!==null,jo=0,xn=un=Wt=null,Hh=!1,e)throw Error(fe(300));return n}function u_(){var n=uc!==0;return uc=0,n}function xr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?Wt.memoizedState=xn=n:xn=xn.next=n,xn}function Ji(){if(un===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var e=xn===null?Wt.memoizedState:xn.next;if(e!==null)xn=e,un=n;else{if(n===null)throw Error(fe(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},xn===null?Wt.memoizedState=xn=n:xn=xn.next=n}return xn}function cc(n,e){return typeof e=="function"?e(n):e}function dp(n){var e=Ji(),t=e.queue;if(t===null)throw Error(fe(311));t.lastRenderedReducer=n;var i=un,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((jo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Wt.lanes|=c,Yo|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,_r(i,e.memoizedState)||(ai=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Wt.lanes|=s,Yo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function pp(n){var e=Ji(),t=e.queue;if(t===null)throw Error(fe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);_r(s,e.memoizedState)||(ai=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function $M(){}function qM(n,e){var t=Wt,i=Ji(),r=e(),s=!_r(i.memoizedState,r);if(s&&(i.memoizedState=r,ai=!0),i=i.queue,c_(JM.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||xn!==null&&xn.memoizedState.tag&1){if(t.flags|=2048,fc(9,ZM.bind(null,t,i,r,e),void 0,null),Sn===null)throw Error(fe(349));jo&30||KM(t,e,r)}return r}function KM(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Wt.updateQueue,e===null?(e={lastEffect:null,stores:null},Wt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function ZM(n,e,t,i){e.value=t,e.getSnapshot=i,QM(e)&&e1(n)}function JM(n,e,t){return t(function(){QM(e)&&e1(n)})}function QM(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!_r(n,t)}catch{return!0}}function e1(n){var e=us(n,1);e!==null&&mr(e,n,1,-1)}function sx(n){var e=xr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cc,lastRenderedState:n},e.queue=n,n=n.dispatch=aC.bind(null,Wt,n),[e.memoizedState,n]}function fc(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Wt.updateQueue,e===null?(e={lastEffect:null,stores:null},Wt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function t1(){return Ji().memoizedState}function th(n,e,t,i){var r=xr();Wt.flags|=n,r.memoizedState=fc(1|e,t,void 0,i===void 0?null:i)}function wd(n,e,t,i){var r=Ji();i=i===void 0?null:i;var s=void 0;if(un!==null){var o=un.memoizedState;if(s=o.destroy,i!==null&&a_(i,o.deps)){r.memoizedState=fc(e,t,s,i);return}}Wt.flags|=n,r.memoizedState=fc(1|e,t,s,i)}function ox(n,e){return th(8390656,8,n,e)}function c_(n,e){return wd(2048,8,n,e)}function n1(n,e){return wd(4,2,n,e)}function i1(n,e){return wd(4,4,n,e)}function r1(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function s1(n,e,t){return t=t!=null?t.concat([n]):null,wd(4,4,r1.bind(null,e,n),t)}function f_(){}function o1(n,e){var t=Ji();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&a_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function a1(n,e){var t=Ji();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&a_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function l1(n,e,t){return jo&21?(_r(t,e)||(t=dM(),Wt.lanes|=t,Yo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,ai=!0),n.memoizedState=t)}function sC(n,e){var t=yt;yt=t!==0&&4>t?t:4,n(!0);var i=hp.transition;hp.transition={};try{n(!1),e()}finally{yt=t,hp.transition=i}}function u1(){return Ji().memoizedState}function oC(n,e,t){var i=Gs(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},c1(n))f1(e,t);else if(t=XM(n,e,t,i),t!==null){var r=ti();mr(t,n,i,r),h1(t,e,i)}}function aC(n,e,t){var i=Gs(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(c1(n))f1(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,_r(a,o)){var l=e.interleaved;l===null?(r.next=r,n_(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=XM(n,e,r,i),t!==null&&(r=ti(),mr(t,n,i,r),h1(t,e,i))}}function c1(n){var e=n.alternate;return n===Wt||e!==null&&e===Wt}function f1(n,e){Ru=Hh=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function h1(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,V0(n,t)}}var Vh={readContext:Zi,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useInsertionEffect:Ln,useLayoutEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useMutableSource:Ln,useSyncExternalStore:Ln,useId:Ln,unstable_isNewReconciler:!1},lC={readContext:Zi,useCallback:function(n,e){return xr().memoizedState=[n,e===void 0?null:e],n},useContext:Zi,useEffect:ox,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,th(4194308,4,r1.bind(null,e,n),t)},useLayoutEffect:function(n,e){return th(4194308,4,n,e)},useInsertionEffect:function(n,e){return th(4,2,n,e)},useMemo:function(n,e){var t=xr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=xr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=oC.bind(null,Wt,n),[i.memoizedState,n]},useRef:function(n){var e=xr();return n={current:n},e.memoizedState=n},useState:sx,useDebugValue:f_,useDeferredValue:function(n){return xr().memoizedState=n},useTransition:function(){var n=sx(!1),e=n[0];return n=sC.bind(null,n[1]),xr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Wt,r=xr();if(Ut){if(t===void 0)throw Error(fe(407));t=t()}else{if(t=e(),Sn===null)throw Error(fe(349));jo&30||KM(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,ox(JM.bind(null,i,s,n),[n]),i.flags|=2048,fc(9,ZM.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=xr(),e=Sn.identifierPrefix;if(Ut){var t=Qr,i=Jr;t=(i&~(1<<32-pr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=uc++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=rC++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},uC={readContext:Zi,useCallback:o1,useContext:Zi,useEffect:c_,useImperativeHandle:s1,useInsertionEffect:n1,useLayoutEffect:i1,useMemo:a1,useReducer:dp,useRef:t1,useState:function(){return dp(cc)},useDebugValue:f_,useDeferredValue:function(n){var e=Ji();return l1(e,un.memoizedState,n)},useTransition:function(){var n=dp(cc)[0],e=Ji().memoizedState;return[n,e]},useMutableSource:$M,useSyncExternalStore:qM,useId:u1,unstable_isNewReconciler:!1},cC={readContext:Zi,useCallback:o1,useContext:Zi,useEffect:c_,useImperativeHandle:s1,useInsertionEffect:n1,useLayoutEffect:i1,useMemo:a1,useReducer:pp,useRef:t1,useState:function(){return pp(cc)},useDebugValue:f_,useDeferredValue:function(n){var e=Ji();return un===null?e.memoizedState=n:l1(e,un.memoizedState,n)},useTransition:function(){var n=pp(cc)[0],e=Ji().memoizedState;return[n,e]},useMutableSource:$M,useSyncExternalStore:qM,useId:u1,unstable_isNewReconciler:!1};function or(n,e){if(n&&n.defaultProps){e=Xt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Km(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Xt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ed={isMounted:function(n){return(n=n._reactInternals)?ia(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=ti(),r=Gs(n),s=ns(i,r);s.payload=e,t!=null&&(s.callback=t),e=Hs(n,s,r),e!==null&&(mr(e,n,r,i),Qf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=ti(),r=Gs(n),s=ns(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Hs(n,s,r),e!==null&&(mr(e,n,r,i),Qf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=ti(),i=Gs(n),r=ns(t,i);r.tag=2,e!=null&&(r.callback=e),e=Hs(n,r,i),e!==null&&(mr(e,n,i,t),Qf(e,n,i))}};function ax(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ic(t,i)||!ic(r,s):!0}function d1(n,e,t){var i=!1,r=Zs,s=e.contextType;return typeof s=="object"&&s!==null?s=Zi(s):(r=ci(e)?Wo:Hn.current,i=e.contextTypes,s=(i=i!=null)?gl(n,r):Zs),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ed,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function lx(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Ed.enqueueReplaceState(e,e.state,null)}function Zm(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},i_(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zi(s):(s=ci(e)?Wo:Hn.current,r.context=gl(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Km(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ed.enqueueReplaceState(r,r.state,null),zh(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function yl(n,e){try{var t="",i=e;do t+=kT(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function mp(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Jm(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var fC=typeof WeakMap=="function"?WeakMap:Map;function p1(n,e,t){t=ns(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Wh||(Wh=!0,lg=i),Jm(n,e)},t}function m1(n,e,t){t=ns(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Jm(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Jm(n,e),typeof i!="function"&&(Vs===null?Vs=new Set([this]):Vs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function ux(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new fC;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=TC.bind(null,n,e,t),e.then(n,n))}function cx(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function fx(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ns(-1,1),e.tag=2,Hs(t,e,1))),t.lanes|=1),n)}var hC=ps.ReactCurrentOwner,ai=!1;function $n(n,e,t,i){e.child=n===null?WM(e,null,t,i):vl(e,n.child,t,i)}function hx(n,e,t,i,r){t=t.render;var s=e.ref;return il(e,r),i=l_(n,e,t,i,s,r),t=u_(),n!==null&&!ai?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,cs(n,e,r)):(Ut&&t&&K0(e),e.flags|=1,$n(n,e,i,r),e.child)}function dx(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!x_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,g1(n,e,s,i,r)):(n=sh(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:ic,t(o,i)&&n.ref===e.ref)return cs(n,e,r)}return e.flags|=1,n=Ws(s,i),n.ref=e.ref,n.return=e,e.child=n}function g1(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ic(s,i)&&n.ref===e.ref)if(ai=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(ai=!0);else return e.lanes=n.lanes,cs(n,e,r)}return Qm(n,e,t,i,r)}function _1(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ct(Ya,Mi),Mi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ct(Ya,Mi),Mi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ct(Ya,Mi),Mi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ct(Ya,Mi),Mi|=i;return $n(n,e,r,t),e.child}function v1(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Qm(n,e,t,i,r){var s=ci(t)?Wo:Hn.current;return s=gl(e,s),il(e,r),t=l_(n,e,t,i,s,r),i=u_(),n!==null&&!ai?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,cs(n,e,r)):(Ut&&i&&K0(e),e.flags|=1,$n(n,e,t,r),e.child)}function px(n,e,t,i,r){if(ci(t)){var s=!0;Ih(e)}else s=!1;if(il(e,r),e.stateNode===null)nh(n,e),d1(e,t,i),Zm(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Zi(u):(u=ci(t)?Wo:Hn.current,u=gl(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&lx(e,o,i,u),Ts=!1;var h=e.memoizedState;o.state=h,zh(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ui.current||Ts?(typeof c=="function"&&(Km(e,t,c,i),l=e.memoizedState),(a=Ts||ax(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,jM(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:or(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Zi(l):(l=ci(t)?Wo:Hn.current,l=gl(e,l));var d=t.getDerivedStateFromProps;(c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&lx(e,o,i,l),Ts=!1,h=e.memoizedState,o.state=h,zh(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||ui.current||Ts?(typeof d=="function"&&(Km(e,t,d,i),g=e.memoizedState),(u=Ts||ax(e,t,u,i,h,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return eg(n,e,t,i,s,r)}function eg(n,e,t,i,r,s){v1(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Qv(e,t,!1),cs(n,e,s);i=e.stateNode,hC.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=vl(e,n.child,null,s),e.child=vl(e,null,a,s)):$n(n,e,a,s),e.memoizedState=i.state,r&&Qv(e,t,!0),e.child}function x1(n){var e=n.stateNode;e.pendingContext?Jv(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Jv(n,e.context,!1),r_(n,e.containerInfo)}function mx(n,e,t,i,r){return _l(),J0(r),e.flags|=256,$n(n,e,t,i),e.child}var tg={dehydrated:null,treeContext:null,retryLane:0};function ng(n){return{baseLanes:n,cachePool:null,transitions:null}}function y1(n,e,t){var i=e.pendingProps,r=zt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ct(zt,r&1),n===null)return $m(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cd(o,i,0,null),n=Oo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=ng(t),e.memoizedState=tg,n):h_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return dC(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ws(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ws(a,s):(s=Oo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?ng(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=tg,i}return s=n.child,n=s.sibling,i=Ws(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function h_(n,e){return e=Cd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function $c(n,e,t,i){return i!==null&&J0(i),vl(e,n.child,null,t),n=h_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function dC(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=mp(Error(fe(422))),$c(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Cd({mode:"visible",children:i.children},r,0,null),s=Oo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&vl(e,n.child,null,o),e.child.memoizedState=ng(o),e.memoizedState=tg,s);if(!(e.mode&1))return $c(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(fe(419)),i=mp(s,i,void 0),$c(n,e,o,i)}if(a=(o&n.childLanes)!==0,ai||a){if(i=Sn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,us(n,r),mr(i,n,r,-1))}return v_(),i=mp(Error(fe(421))),$c(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=AC.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Ci=Bs(r.nextSibling),Ri=e,Ut=!0,lr=null,n!==null&&(Bi[Hi++]=Jr,Bi[Hi++]=Qr,Bi[Hi++]=Xo,Jr=n.id,Qr=n.overflow,Xo=e),e=h_(e,i.children),e.flags|=4096,e)}function gx(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),qm(n.return,e,t)}function gp(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function S1(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($n(n,e,i.children,t),i=zt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&gx(n,t,e);else if(n.tag===19)gx(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ct(zt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Bh(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),gp(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Bh(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}gp(e,!0,t,null,s);break;case"together":gp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nh(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function cs(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Yo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(fe(153));if(e.child!==null){for(n=e.child,t=Ws(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ws(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function pC(n,e,t){switch(e.tag){case 3:x1(e),_l();break;case 5:YM(e);break;case 1:ci(e.type)&&Ih(e);break;case 4:r_(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ct(Fh,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ct(zt,zt.current&1),e.flags|=128,null):t&e.child.childLanes?y1(n,e,t):(Ct(zt,zt.current&1),n=cs(n,e,t),n!==null?n.sibling:null);Ct(zt,zt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return S1(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ct(zt,zt.current),i)break;return null;case 22:case 23:return e.lanes=0,_1(n,e,t)}return cs(n,e,t)}var M1,ig,w1,E1;M1=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ig=function(){};w1=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Ro(Pr.current);var s=null;switch(t){case"input":r=Tm(n,r),i=Tm(n,i),s=[];break;case"select":r=Xt({},r,{value:void 0}),i=Xt({},i,{value:void 0}),s=[];break;case"textarea":r=bm(n,r),i=bm(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Dh)}Pm(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ku.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ku.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Pt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};E1=function(n,e,t,i){t!==i&&(e.flags|=4)};function $l(n,e){if(!Ut)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Dn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function mC(n,e,t){var i=e.pendingProps;switch(Z0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(e),null;case 1:return ci(e.type)&&Nh(),Dn(e),null;case 3:return i=e.stateNode,xl(),Dt(ui),Dt(Hn),o_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(jc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,lr!==null&&(fg(lr),lr=null))),ig(n,e),Dn(e),null;case 5:s_(e);var r=Ro(lc.current);if(t=e.type,n!==null&&e.stateNode!=null)w1(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(fe(166));return Dn(e),null}if(n=Ro(Pr.current),jc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Er]=e,i[oc]=s,n=(e.mode&1)!==0,t){case"dialog":Pt("cancel",i),Pt("close",i);break;case"iframe":case"object":case"embed":Pt("load",i);break;case"video":case"audio":for(r=0;r<pu.length;r++)Pt(pu[r],i);break;case"source":Pt("error",i);break;case"img":case"image":case"link":Pt("error",i),Pt("load",i);break;case"details":Pt("toggle",i);break;case"input":Tv(i,s),Pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Pt("invalid",i);break;case"textarea":Cv(i,s),Pt("invalid",i)}Pm(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xc(i.textContent,a,n),r=["children",""+a]):Ku.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pt("scroll",i)}switch(t){case"input":Fc(i),Av(i,s,!0);break;case"textarea":Fc(i),bv(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Dh)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=JS(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Er]=e,n[oc]=i,M1(n,e,!1,!1),e.stateNode=n;e:{switch(o=Lm(t,i),t){case"dialog":Pt("cancel",n),Pt("close",n),r=i;break;case"iframe":case"object":case"embed":Pt("load",n),r=i;break;case"video":case"audio":for(r=0;r<pu.length;r++)Pt(pu[r],n);r=i;break;case"source":Pt("error",n),r=i;break;case"img":case"image":case"link":Pt("error",n),Pt("load",n),r=i;break;case"details":Pt("toggle",n),r=i;break;case"input":Tv(n,i),r=Tm(n,i),Pt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Xt({},i,{value:void 0}),Pt("invalid",n);break;case"textarea":Cv(n,i),r=bm(n,i),Pt("invalid",n);break;default:r=i}Pm(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?tM(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&QS(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Zu(n,l):typeof l=="number"&&Zu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ku.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Pt("scroll",n):l!=null&&O0(n,s,l,o))}switch(t){case"input":Fc(n),Av(n,i,!1);break;case"textarea":Fc(n),bv(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ks(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Qa(n,!!i.multiple,s,!1):i.defaultValue!=null&&Qa(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Dh)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dn(e),null;case 6:if(n&&e.stateNode!=null)E1(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(fe(166));if(t=Ro(lc.current),Ro(Pr.current),jc(e)){if(i=e.stateNode,t=e.memoizedProps,i[Er]=e,(s=i.nodeValue!==t)&&(n=Ri,n!==null))switch(n.tag){case 3:Xc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Xc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Er]=e,e.stateNode=i}return Dn(e),null;case 13:if(Dt(zt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ut&&Ci!==null&&e.mode&1&&!(e.flags&128))VM(),_l(),e.flags|=98560,s=!1;else if(s=jc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(fe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(fe(317));s[Er]=e}else _l(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dn(e),s=!1}else lr!==null&&(fg(lr),lr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||zt.current&1?hn===0&&(hn=3):v_())),e.updateQueue!==null&&(e.flags|=4),Dn(e),null);case 4:return xl(),ig(n,e),n===null&&rc(e.stateNode.containerInfo),Dn(e),null;case 10:return t_(e.type._context),Dn(e),null;case 17:return ci(e.type)&&Nh(),Dn(e),null;case 19:if(Dt(zt),s=e.memoizedState,s===null)return Dn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)$l(s,!1);else{if(hn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Bh(n),o!==null){for(e.flags|=128,$l(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ct(zt,zt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Qt()>Sl&&(e.flags|=128,i=!0,$l(s,!1),e.lanes=4194304)}else{if(!i)if(n=Bh(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),$l(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ut)return Dn(e),null}else 2*Qt()-s.renderingStartTime>Sl&&t!==1073741824&&(e.flags|=128,i=!0,$l(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Qt(),e.sibling=null,t=zt.current,Ct(zt,i?t&1|2:t&1),e):(Dn(e),null);case 22:case 23:return __(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mi&1073741824&&(Dn(e),e.subtreeFlags&6&&(e.flags|=8192)):Dn(e),null;case 24:return null;case 25:return null}throw Error(fe(156,e.tag))}function gC(n,e){switch(Z0(e),e.tag){case 1:return ci(e.type)&&Nh(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return xl(),Dt(ui),Dt(Hn),o_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return s_(e),null;case 13:if(Dt(zt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(fe(340));_l()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Dt(zt),null;case 4:return xl(),null;case 10:return t_(e.type._context),null;case 22:case 23:return __(),null;case 24:return null;default:return null}}var qc=!1,Fn=!1,_C=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function ja(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){jt(n,e,i)}else t.current=null}function rg(n,e,t){try{t()}catch(i){jt(n,e,i)}}var _x=!1;function vC(n,e){if(Hm=Rh,n=RM(),q0(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var d;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(d=f.firstChild)!==null;)h=f,f=d;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(d=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=d}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Vm={focusedElem:n,selectionRange:t},Rh=!1,Ne=e;Ne!==null;)if(e=Ne,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ne=n;else for(;Ne!==null;){e=Ne;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,p=e.stateNode,x=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:or(e.type,_),m);p.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(fe(163))}}catch(S){jt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Ne=n;break}Ne=e.return}return g=_x,_x=!1,g}function Pu(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&rg(e,t,s)}r=r.next}while(r!==i)}}function Td(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function sg(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function T1(n){var e=n.alternate;e!==null&&(n.alternate=null,T1(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Er],delete e[oc],delete e[Xm],delete e[eC],delete e[tC])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function A1(n){return n.tag===5||n.tag===3||n.tag===4}function vx(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||A1(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function og(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Dh));else if(i!==4&&(n=n.child,n!==null))for(og(n,e,t),n=n.sibling;n!==null;)og(n,e,t),n=n.sibling}function ag(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(ag(n,e,t),n=n.sibling;n!==null;)ag(n,e,t),n=n.sibling}var En=null,ar=!1;function gs(n,e,t){for(t=t.child;t!==null;)C1(n,e,t),t=t.sibling}function C1(n,e,t){if(Rr&&typeof Rr.onCommitFiberUnmount=="function")try{Rr.onCommitFiberUnmount(_d,t)}catch{}switch(t.tag){case 5:Fn||ja(t,e);case 6:var i=En,r=ar;En=null,gs(n,e,t),En=i,ar=r,En!==null&&(ar?(n=En,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):En.removeChild(t.stateNode));break;case 18:En!==null&&(ar?(n=En,t=t.stateNode,n.nodeType===8?up(n.parentNode,t):n.nodeType===1&&up(n,t),tc(n)):up(En,t.stateNode));break;case 4:i=En,r=ar,En=t.stateNode.containerInfo,ar=!0,gs(n,e,t),En=i,ar=r;break;case 0:case 11:case 14:case 15:if(!Fn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rg(t,e,o),r=r.next}while(r!==i)}gs(n,e,t);break;case 1:if(!Fn&&(ja(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){jt(t,e,a)}gs(n,e,t);break;case 21:gs(n,e,t);break;case 22:t.mode&1?(Fn=(i=Fn)||t.memoizedState!==null,gs(n,e,t),Fn=i):gs(n,e,t);break;default:gs(n,e,t)}}function xx(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new _C),e.forEach(function(i){var r=CC.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function tr(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:En=a.stateNode,ar=!1;break e;case 3:En=a.stateNode.containerInfo,ar=!0;break e;case 4:En=a.stateNode.containerInfo,ar=!0;break e}a=a.return}if(En===null)throw Error(fe(160));C1(s,o,r),En=null,ar=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){jt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)b1(e,n),e=e.sibling}function b1(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(tr(e,n),vr(n),i&4){try{Pu(3,n,n.return),Td(3,n)}catch(_){jt(n,n.return,_)}try{Pu(5,n,n.return)}catch(_){jt(n,n.return,_)}}break;case 1:tr(e,n),vr(n),i&512&&t!==null&&ja(t,t.return);break;case 5:if(tr(e,n),vr(n),i&512&&t!==null&&ja(t,t.return),n.flags&32){var r=n.stateNode;try{Zu(r,"")}catch(_){jt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&KS(r,s),Lm(a,o);var u=Lm(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?tM(r,f):c==="dangerouslySetInnerHTML"?QS(r,f):c==="children"?Zu(r,f):O0(r,c,f,u)}switch(a){case"input":Am(r,s);break;case"textarea":ZS(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var d=s.value;d!=null?Qa(r,!!s.multiple,d,!1):h!==!!s.multiple&&(s.defaultValue!=null?Qa(r,!!s.multiple,s.defaultValue,!0):Qa(r,!!s.multiple,s.multiple?[]:"",!1))}r[oc]=s}catch(_){jt(n,n.return,_)}}break;case 6:if(tr(e,n),vr(n),i&4){if(n.stateNode===null)throw Error(fe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){jt(n,n.return,_)}}break;case 3:if(tr(e,n),vr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{tc(e.containerInfo)}catch(_){jt(n,n.return,_)}break;case 4:tr(e,n),vr(n);break;case 13:tr(e,n),vr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(m_=Qt())),i&4&&xx(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Fn=(u=Fn)||c,tr(e,n),Fn=u):tr(e,n),vr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ne=n,c=n.child;c!==null;){for(f=Ne=c;Ne!==null;){switch(h=Ne,d=h.child,h.tag){case 0:case 11:case 14:case 15:Pu(4,h,h.return);break;case 1:ja(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){jt(i,t,_)}}break;case 5:ja(h,h.return);break;case 22:if(h.memoizedState!==null){Sx(f);continue}}d!==null?(d.return=h,Ne=d):Sx(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=eM("display",o))}catch(_){jt(n,n.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){jt(n,n.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:tr(e,n),vr(n),i&4&&xx(n);break;case 21:break;default:tr(e,n),vr(n)}}function vr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(A1(t)){var i=t;break e}t=t.return}throw Error(fe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Zu(r,""),i.flags&=-33);var s=vx(n);ag(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=vx(n);og(n,a,o);break;default:throw Error(fe(161))}}catch(l){jt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function xC(n,e,t){Ne=n,R1(n)}function R1(n,e,t){for(var i=(n.mode&1)!==0;Ne!==null;){var r=Ne,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||qc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Fn;a=qc;var u=Fn;if(qc=o,(Fn=l)&&!u)for(Ne=r;Ne!==null;)o=Ne,l=o.child,o.tag===22&&o.memoizedState!==null?Mx(r):l!==null?(l.return=o,Ne=l):Mx(r);for(;s!==null;)Ne=s,R1(s),s=s.sibling;Ne=r,qc=a,Fn=u}yx(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ne=s):yx(n)}}function yx(n){for(;Ne!==null;){var e=Ne;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Fn||Td(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Fn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:or(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rx(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}rx(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&tc(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(fe(163))}Fn||e.flags&512&&sg(e)}catch(h){jt(e,e.return,h)}}if(e===n){Ne=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ne=t;break}Ne=e.return}}function Sx(n){for(;Ne!==null;){var e=Ne;if(e===n){Ne=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ne=t;break}Ne=e.return}}function Mx(n){for(;Ne!==null;){var e=Ne;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Td(4,e)}catch(l){jt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){jt(e,r,l)}}var s=e.return;try{sg(e)}catch(l){jt(e,s,l)}break;case 5:var o=e.return;try{sg(e)}catch(l){jt(e,o,l)}}}catch(l){jt(e,e.return,l)}if(e===n){Ne=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ne=a;break}Ne=e.return}}var yC=Math.ceil,Gh=ps.ReactCurrentDispatcher,d_=ps.ReactCurrentOwner,qi=ps.ReactCurrentBatchConfig,mt=0,Sn=null,sn=null,bn=0,Mi=0,Ya=io(0),hn=0,hc=null,Yo=0,Ad=0,p_=0,Lu=null,oi=null,m_=0,Sl=1/0,Xr=null,Wh=!1,lg=null,Vs=null,Kc=!1,Ps=null,Xh=0,Du=0,ug=null,ih=-1,rh=0;function ti(){return mt&6?Qt():ih!==-1?ih:ih=Qt()}function Gs(n){return n.mode&1?mt&2&&bn!==0?bn&-bn:iC.transition!==null?(rh===0&&(rh=dM()),rh):(n=yt,n!==0||(n=window.event,n=n===void 0?16:yM(n.type)),n):1}function mr(n,e,t,i){if(50<Du)throw Du=0,ug=null,Error(fe(185));Pc(n,t,i),(!(mt&2)||n!==Sn)&&(n===Sn&&(!(mt&2)&&(Ad|=t),hn===4&&Cs(n,bn)),fi(n,i),t===1&&mt===0&&!(e.mode&1)&&(Sl=Qt()+500,Md&&ro()))}function fi(n,e){var t=n.callbackNode;iA(n,e);var i=bh(n,n===Sn?bn:0);if(i===0)t!==null&&Lv(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Lv(t),e===1)n.tag===0?nC(wx.bind(null,n)):zM(wx.bind(null,n)),JA(function(){!(mt&6)&&ro()}),t=null;else{switch(pM(i)){case 1:t=H0;break;case 4:t=fM;break;case 16:t=Ch;break;case 536870912:t=hM;break;default:t=Ch}t=F1(t,P1.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function P1(n,e){if(ih=-1,rh=0,mt&6)throw Error(fe(327));var t=n.callbackNode;if(rl()&&n.callbackNode!==t)return null;var i=bh(n,n===Sn?bn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=jh(n,i);else{e=i;var r=mt;mt|=2;var s=D1();(Sn!==n||bn!==e)&&(Xr=null,Sl=Qt()+500,Uo(n,e));do try{wC();break}catch(a){L1(n,a)}while(!0);e_(),Gh.current=s,mt=r,sn!==null?e=0:(Sn=null,bn=0,e=hn)}if(e!==0){if(e===2&&(r=Om(n),r!==0&&(i=r,e=cg(n,r))),e===1)throw t=hc,Uo(n,0),Cs(n,i),fi(n,Qt()),t;if(e===6)Cs(n,i);else{if(r=n.current.alternate,!(i&30)&&!SC(r)&&(e=jh(n,i),e===2&&(s=Om(n),s!==0&&(i=s,e=cg(n,s))),e===1))throw t=hc,Uo(n,0),Cs(n,i),fi(n,Qt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(fe(345));case 2:xo(n,oi,Xr);break;case 3:if(Cs(n,i),(i&130023424)===i&&(e=m_+500-Qt(),10<e)){if(bh(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){ti(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Wm(xo.bind(null,n,oi,Xr),e);break}xo(n,oi,Xr);break;case 4:if(Cs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-pr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Qt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*yC(i/1960))-i,10<i){n.timeoutHandle=Wm(xo.bind(null,n,oi,Xr),i);break}xo(n,oi,Xr);break;case 5:xo(n,oi,Xr);break;default:throw Error(fe(329))}}}return fi(n,Qt()),n.callbackNode===t?P1.bind(null,n):null}function cg(n,e){var t=Lu;return n.current.memoizedState.isDehydrated&&(Uo(n,e).flags|=256),n=jh(n,e),n!==2&&(e=oi,oi=t,e!==null&&fg(e)),n}function fg(n){oi===null?oi=n:oi.push.apply(oi,n)}function SC(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!_r(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Cs(n,e){for(e&=~p_,e&=~Ad,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-pr(e),i=1<<t;n[t]=-1,e&=~i}}function wx(n){if(mt&6)throw Error(fe(327));rl();var e=bh(n,0);if(!(e&1))return fi(n,Qt()),null;var t=jh(n,e);if(n.tag!==0&&t===2){var i=Om(n);i!==0&&(e=i,t=cg(n,i))}if(t===1)throw t=hc,Uo(n,0),Cs(n,e),fi(n,Qt()),t;if(t===6)throw Error(fe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,xo(n,oi,Xr),fi(n,Qt()),null}function g_(n,e){var t=mt;mt|=1;try{return n(e)}finally{mt=t,mt===0&&(Sl=Qt()+500,Md&&ro())}}function $o(n){Ps!==null&&Ps.tag===0&&!(mt&6)&&rl();var e=mt;mt|=1;var t=qi.transition,i=yt;try{if(qi.transition=null,yt=1,n)return n()}finally{yt=i,qi.transition=t,mt=e,!(mt&6)&&ro()}}function __(){Mi=Ya.current,Dt(Ya)}function Uo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,ZA(t)),sn!==null)for(t=sn.return;t!==null;){var i=t;switch(Z0(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Nh();break;case 3:xl(),Dt(ui),Dt(Hn),o_();break;case 5:s_(i);break;case 4:xl();break;case 13:Dt(zt);break;case 19:Dt(zt);break;case 10:t_(i.type._context);break;case 22:case 23:__()}t=t.return}if(Sn=n,sn=n=Ws(n.current,null),bn=Mi=e,hn=0,hc=null,p_=Ad=Yo=0,oi=Lu=null,bo!==null){for(e=0;e<bo.length;e++)if(t=bo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}bo=null}return n}function L1(n,e){do{var t=sn;try{if(e_(),eh.current=Vh,Hh){for(var i=Wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Hh=!1}if(jo=0,xn=un=Wt=null,Ru=!1,uc=0,d_.current=null,t===null||t.return===null){hn=1,hc=e,sn=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=bn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var d=cx(o);if(d!==null){d.flags&=-257,fx(d,o,a,s,e),d.mode&1&&ux(s,u,e),e=d,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){ux(s,u,e),v_();break e}l=Error(fe(426))}}else if(Ut&&a.mode&1){var m=cx(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),fx(m,o,a,s,e),J0(yl(l,a));break e}}s=l=yl(l,a),hn!==4&&(hn=2),Lu===null?Lu=[s]:Lu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=p1(s,l,e);ix(s,p);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Vs===null||!Vs.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=m1(s,a,e);ix(s,S);break e}}s=s.return}while(s!==null)}I1(t)}catch(C){e=C,sn===t&&t!==null&&(sn=t=t.return);continue}break}while(!0)}function D1(){var n=Gh.current;return Gh.current=Vh,n===null?Vh:n}function v_(){(hn===0||hn===3||hn===2)&&(hn=4),Sn===null||!(Yo&268435455)&&!(Ad&268435455)||Cs(Sn,bn)}function jh(n,e){var t=mt;mt|=2;var i=D1();(Sn!==n||bn!==e)&&(Xr=null,Uo(n,e));do try{MC();break}catch(r){L1(n,r)}while(!0);if(e_(),mt=t,Gh.current=i,sn!==null)throw Error(fe(261));return Sn=null,bn=0,hn}function MC(){for(;sn!==null;)N1(sn)}function wC(){for(;sn!==null&&!$T();)N1(sn)}function N1(n){var e=O1(n.alternate,n,Mi);n.memoizedProps=n.pendingProps,e===null?I1(n):sn=e,d_.current=null}function I1(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=gC(t,e),t!==null){t.flags&=32767,sn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{hn=6,sn=null;return}}else if(t=mC(t,e,Mi),t!==null){sn=t;return}if(e=e.sibling,e!==null){sn=e;return}sn=e=n}while(e!==null);hn===0&&(hn=5)}function xo(n,e,t){var i=yt,r=qi.transition;try{qi.transition=null,yt=1,EC(n,e,t,i)}finally{qi.transition=r,yt=i}return null}function EC(n,e,t,i){do rl();while(Ps!==null);if(mt&6)throw Error(fe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(fe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(rA(n,s),n===Sn&&(sn=Sn=null,bn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Kc||(Kc=!0,F1(Ch,function(){return rl(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=qi.transition,qi.transition=null;var o=yt;yt=1;var a=mt;mt|=4,d_.current=null,vC(n,t),b1(t,n),WA(Vm),Rh=!!Hm,Vm=Hm=null,n.current=t,xC(t),qT(),mt=a,yt=o,qi.transition=s}else n.current=t;if(Kc&&(Kc=!1,Ps=n,Xh=r),s=n.pendingLanes,s===0&&(Vs=null),JT(t.stateNode),fi(n,Qt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Wh)throw Wh=!1,n=lg,lg=null,n;return Xh&1&&n.tag!==0&&rl(),s=n.pendingLanes,s&1?n===ug?Du++:(Du=0,ug=n):Du=0,ro(),null}function rl(){if(Ps!==null){var n=pM(Xh),e=qi.transition,t=yt;try{if(qi.transition=null,yt=16>n?16:n,Ps===null)var i=!1;else{if(n=Ps,Ps=null,Xh=0,mt&6)throw Error(fe(331));var r=mt;for(mt|=4,Ne=n.current;Ne!==null;){var s=Ne,o=s.child;if(Ne.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ne=u;Ne!==null;){var c=Ne;switch(c.tag){case 0:case 11:case 15:Pu(8,c,s)}var f=c.child;if(f!==null)f.return=c,Ne=f;else for(;Ne!==null;){c=Ne;var h=c.sibling,d=c.return;if(T1(c),c===u){Ne=null;break}if(h!==null){h.return=d,Ne=h;break}Ne=d}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Ne=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ne=o;else e:for(;Ne!==null;){if(s=Ne,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Pu(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Ne=p;break e}Ne=s.return}}var x=n.current;for(Ne=x;Ne!==null;){o=Ne;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ne=v;else e:for(o=x;Ne!==null;){if(a=Ne,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Td(9,a)}}catch(C){jt(a,a.return,C)}if(a===o){Ne=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ne=S;break e}Ne=a.return}}if(mt=r,ro(),Rr&&typeof Rr.onPostCommitFiberRoot=="function")try{Rr.onPostCommitFiberRoot(_d,n)}catch{}i=!0}return i}finally{yt=t,qi.transition=e}}return!1}function Ex(n,e,t){e=yl(t,e),e=p1(n,e,1),n=Hs(n,e,1),e=ti(),n!==null&&(Pc(n,1,e),fi(n,e))}function jt(n,e,t){if(n.tag===3)Ex(n,n,t);else for(;e!==null;){if(e.tag===3){Ex(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vs===null||!Vs.has(i))){n=yl(t,n),n=m1(e,n,1),e=Hs(e,n,1),n=ti(),e!==null&&(Pc(e,1,n),fi(e,n));break}}e=e.return}}function TC(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=ti(),n.pingedLanes|=n.suspendedLanes&t,Sn===n&&(bn&t)===t&&(hn===4||hn===3&&(bn&130023424)===bn&&500>Qt()-m_?Uo(n,0):p_|=t),fi(n,e)}function U1(n,e){e===0&&(n.mode&1?(e=Bc,Bc<<=1,!(Bc&130023424)&&(Bc=4194304)):e=1);var t=ti();n=us(n,e),n!==null&&(Pc(n,e,t),fi(n,t))}function AC(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),U1(n,t)}function CC(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(fe(314))}i!==null&&i.delete(e),U1(n,t)}var O1;O1=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ui.current)ai=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return ai=!1,pC(n,e,t);ai=!!(n.flags&131072)}else ai=!1,Ut&&e.flags&1048576&&BM(e,Oh,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nh(n,e),n=e.pendingProps;var r=gl(e,Hn.current);il(e,t),r=l_(null,e,i,n,r,t);var s=u_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ci(i)?(s=!0,Ih(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,i_(e),r.updater=Ed,e.stateNode=r,r._reactInternals=e,Zm(e,i,n,t),e=eg(null,e,i,!0,s,t)):(e.tag=0,Ut&&s&&K0(e),$n(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(nh(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=RC(i),n=or(i,n),r){case 0:e=Qm(null,e,i,n,t);break e;case 1:e=px(null,e,i,n,t);break e;case 11:e=hx(null,e,i,n,t);break e;case 14:e=dx(null,e,i,or(i.type,n),t);break e}throw Error(fe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:or(i,r),Qm(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:or(i,r),px(n,e,i,r,t);case 3:e:{if(x1(e),n===null)throw Error(fe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,jM(n,e),zh(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=yl(Error(fe(423)),e),e=mx(n,e,i,t,r);break e}else if(i!==r){r=yl(Error(fe(424)),e),e=mx(n,e,i,t,r);break e}else for(Ci=Bs(e.stateNode.containerInfo.firstChild),Ri=e,Ut=!0,lr=null,t=WM(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(_l(),i===r){e=cs(n,e,t);break e}$n(n,e,i,t)}e=e.child}return e;case 5:return YM(e),n===null&&$m(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Gm(i,r)?o=null:s!==null&&Gm(i,s)&&(e.flags|=32),v1(n,e),$n(n,e,o,t),e.child;case 6:return n===null&&$m(e),null;case 13:return y1(n,e,t);case 4:return r_(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=vl(e,null,i,t):$n(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:or(i,r),hx(n,e,i,r,t);case 7:return $n(n,e,e.pendingProps,t),e.child;case 8:return $n(n,e,e.pendingProps.children,t),e.child;case 12:return $n(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ct(Fh,i._currentValue),i._currentValue=o,s!==null)if(_r(s.value,o)){if(s.children===r.children&&!ui.current){e=cs(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ns(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),qm(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(fe(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),qm(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$n(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,il(e,t),r=Zi(r),i=i(r),e.flags|=1,$n(n,e,i,t),e.child;case 14:return i=e.type,r=or(i,e.pendingProps),r=or(i.type,r),dx(n,e,i,r,t);case 15:return g1(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:or(i,r),nh(n,e),e.tag=1,ci(i)?(n=!0,Ih(e)):n=!1,il(e,t),d1(e,i,r),Zm(e,i,r,t),eg(null,e,i,!0,n,t);case 19:return S1(n,e,t);case 22:return _1(n,e,t)}throw Error(fe(156,e.tag))};function F1(n,e){return cM(n,e)}function bC(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ji(n,e,t,i){return new bC(n,e,t,i)}function x_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function RC(n){if(typeof n=="function")return x_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===k0)return 11;if(n===z0)return 14}return 2}function Ws(n,e){var t=n.alternate;return t===null?(t=ji(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function sh(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")x_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Fa:return Oo(t.children,r,s,e);case F0:o=8,r|=8;break;case Sm:return n=ji(12,t,e,r|2),n.elementType=Sm,n.lanes=s,n;case Mm:return n=ji(13,t,e,r),n.elementType=Mm,n.lanes=s,n;case wm:return n=ji(19,t,e,r),n.elementType=wm,n.lanes=s,n;case YS:return Cd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case XS:o=10;break e;case jS:o=9;break e;case k0:o=11;break e;case z0:o=14;break e;case Es:o=16,i=null;break e}throw Error(fe(130,n==null?n:typeof n,""))}return e=ji(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Oo(n,e,t,i){return n=ji(7,n,i,e),n.lanes=t,n}function Cd(n,e,t,i){return n=ji(22,n,i,e),n.elementType=YS,n.lanes=t,n.stateNode={isHidden:!1},n}function _p(n,e,t){return n=ji(6,n,null,e),n.lanes=t,n}function vp(n,e,t){return e=ji(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function PC(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jd(0),this.expirationTimes=Jd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function y_(n,e,t,i,r,s,o,a,l){return n=new PC(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ji(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},i_(s),n}function LC(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Oa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function k1(n){if(!n)return Zs;n=n._reactInternals;e:{if(ia(n)!==n||n.tag!==1)throw Error(fe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ci(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(fe(171))}if(n.tag===1){var t=n.type;if(ci(t))return kM(n,t,e)}return e}function z1(n,e,t,i,r,s,o,a,l){return n=y_(t,i,!0,n,r,s,o,a,l),n.context=k1(null),t=n.current,i=ti(),r=Gs(t),s=ns(i,r),s.callback=e??null,Hs(t,s,r),n.current.lanes=r,Pc(n,r,i),fi(n,i),n}function bd(n,e,t,i){var r=e.current,s=ti(),o=Gs(r);return t=k1(t),e.context===null?e.context=t:e.pendingContext=t,e=ns(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Hs(r,e,o),n!==null&&(mr(n,r,o,s),Qf(n,r,o)),o}function Yh(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Tx(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function S_(n,e){Tx(n,e),(n=n.alternate)&&Tx(n,e)}function DC(){return null}var B1=typeof reportError=="function"?reportError:function(n){console.error(n)};function M_(n){this._internalRoot=n}Rd.prototype.render=M_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(fe(409));bd(n,e,null,null)};Rd.prototype.unmount=M_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;$o(function(){bd(null,n,null,null)}),e[ls]=null}};function Rd(n){this._internalRoot=n}Rd.prototype.unstable_scheduleHydration=function(n){if(n){var e=_M();n={blockedOn:null,target:n,priority:e};for(var t=0;t<As.length&&e!==0&&e<As[t].priority;t++);As.splice(t,0,n),t===0&&xM(n)}};function w_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Pd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ax(){}function NC(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Yh(o);s.call(u)}}var o=z1(e,i,n,0,null,!1,!1,"",Ax);return n._reactRootContainer=o,n[ls]=o.current,rc(n.nodeType===8?n.parentNode:n),$o(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Yh(l);a.call(u)}}var l=y_(n,0,!1,null,null,!1,!1,"",Ax);return n._reactRootContainer=l,n[ls]=l.current,rc(n.nodeType===8?n.parentNode:n),$o(function(){bd(e,l,t,i)}),l}function Ld(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Yh(o);a.call(l)}}bd(e,o,n,r)}else o=NC(t,e,n,r,i);return Yh(o)}mM=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=du(e.pendingLanes);t!==0&&(V0(e,t|1),fi(e,Qt()),!(mt&6)&&(Sl=Qt()+500,ro()))}break;case 13:$o(function(){var i=us(n,1);if(i!==null){var r=ti();mr(i,n,1,r)}}),S_(n,1)}};G0=function(n){if(n.tag===13){var e=us(n,134217728);if(e!==null){var t=ti();mr(e,n,134217728,t)}S_(n,134217728)}};gM=function(n){if(n.tag===13){var e=Gs(n),t=us(n,e);if(t!==null){var i=ti();mr(t,n,e,i)}S_(n,e)}};_M=function(){return yt};vM=function(n,e){var t=yt;try{return yt=n,e()}finally{yt=t}};Nm=function(n,e,t){switch(e){case"input":if(Am(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Sd(i);if(!r)throw Error(fe(90));qS(i),Am(i,r)}}}break;case"textarea":ZS(n,t);break;case"select":e=t.value,e!=null&&Qa(n,!!t.multiple,e,!1)}};rM=g_;sM=$o;var IC={usingClientEntryPoint:!1,Events:[Dc,Ha,Sd,nM,iM,g_]},ql={findFiberByHostInstance:Co,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},UC={bundleType:ql.bundleType,version:ql.version,rendererPackageName:ql.rendererPackageName,rendererConfig:ql.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ps.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=lM(n),n===null?null:n.stateNode},findFiberByHostInstance:ql.findFiberByHostInstance||DC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zc.isDisabled&&Zc.supportsFiber)try{_d=Zc.inject(UC),Rr=Zc}catch{}}Ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IC;Ni.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w_(e))throw Error(fe(200));return LC(n,e,null,t)};Ni.createRoot=function(n,e){if(!w_(n))throw Error(fe(299));var t=!1,i="",r=B1;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=y_(n,1,!1,null,null,t,!1,i,r),n[ls]=e.current,rc(n.nodeType===8?n.parentNode:n),new M_(e)};Ni.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(fe(188)):(n=Object.keys(n).join(","),Error(fe(268,n)));return n=lM(e),n=n===null?null:n.stateNode,n};Ni.flushSync=function(n){return $o(n)};Ni.hydrate=function(n,e,t){if(!Pd(e))throw Error(fe(200));return Ld(null,n,e,!0,t)};Ni.hydrateRoot=function(n,e,t){if(!w_(n))throw Error(fe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=B1;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=z1(e,null,n,1,t??null,r,!1,s,o),n[ls]=e.current,rc(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Rd(e)};Ni.render=function(n,e,t){if(!Pd(e))throw Error(fe(200));return Ld(null,n,e,!1,t)};Ni.unmountComponentAtNode=function(n){if(!Pd(n))throw Error(fe(40));return n._reactRootContainer?($o(function(){Ld(null,null,n,!1,function(){n._reactRootContainer=null,n[ls]=null})}),!0):!1};Ni.unstable_batchedUpdates=g_;Ni.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Pd(t))throw Error(fe(200));if(n==null||n._reactInternals===void 0)throw Error(fe(38));return Ld(n,e,t,!1,i)};Ni.version="18.3.1-next-f1338f8080-20240426";function H1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H1)}catch(n){console.error(n)}}H1(),HS.exports=Ni;var OC=HS.exports,Cx=OC;xm.createRoot=Cx.createRoot,xm.hydrateRoot=Cx.hydrateRoot;function jr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function V1(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ml={duration:.5,overwrite:!1,delay:0},E_,zn,Ot,Yi=1e8,At=1/Yi,hg=Math.PI*2,FC=hg/4,kC=0,G1=Math.sqrt,zC=Math.cos,BC=Math.sin,Mn=function(e){return typeof e=="string"},$t=function(e){return typeof e=="function"},fs=function(e){return typeof e=="number"},T_=function(e){return typeof e>"u"},Ir=function(e){return typeof e=="object"},hi=function(e){return e!==!1},A_=function(){return typeof window<"u"},Jc=function(e){return $t(e)||Mn(e)},W1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Bn=Array.isArray,dg=/(?:-?\.?\d|\.)+/gi,X1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$a=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,j1=/[+-]=-?[.\d]+/,Y1=/[^,'"\[\]\s]+/gi,HC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,yr,pg,C_,Di={},$h={},$1,q1=function(e){return($h=qo(e,Di))&&gi},b_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},dc=function(e,t){return!t&&console.warn(e)},K1=function(e,t){return e&&(Di[e]=t)&&$h&&($h[e]=t)||Di},pc=function(){return 0},VC={suppressEvents:!0,isStart:!0,kill:!1},oh={suppressEvents:!0,kill:!1},GC={suppressEvents:!0},R_={},Xs=[],mg={},Z1,Ei={},yp={},bx=30,ah=[],P_="",L_=function(e){var t=e[0],i,r;if(Ir(t)||$t(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=ah.length;r--&&!ah[r].targetTest(t););i=ah[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Sw(e[r],i)))||e.splice(r,1);return e},Fo=function(e){return e._gsap||L_($i(e))[0]._gsap},J1=function(e,t,i){return(i=e[t])&&$t(i)?e[t]():T_(i)&&e.getAttribute&&e.getAttribute(t)||i},di=function(e,t){return(e=e.split(",")).forEach(t)||e},Jt=function(e){return Math.round(e*1e5)/1e5||0},yn=function(e){return Math.round(e*1e7)/1e7||0},sl=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},WC=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},qh=function(){var e=Xs.length,t=Xs.slice(0),i,r;for(mg={},Xs.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Q1=function(e,t,i,r){Xs.length&&!zn&&qh(),e.render(t,i,zn&&t<0&&(e._initted||e._startAt)),Xs.length&&!zn&&qh()},ew=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Y1).length<2?t:Mn(e)?e.trim():e},tw=function(e){return e},Qi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},XC=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},qo=function(e,t){for(var i in t)e[i]=t[i];return e},Rx=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ir(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Kh=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Nu=function(e){var t=e.parent||Bt,i=e.keyframes?XC(Bn(e.keyframes)):Qi;if(hi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},jC=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},nw=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Dd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Js=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ko=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},YC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},gg=function(e,t,i,r){return e._startAt&&(zn?e._startAt.revert(oh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},$C=function n(e){return!e||e._ts&&n(e.parent)},Px=function(e){return e._repeat?wl(e._tTime,e=e.duration()+e._rDelay)*e:0},wl=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Zh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Nd=function(e){return e._end=yn(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},Id=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=yn(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Nd(e),i._dirty||ko(i,e)),e},iw=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Zh(e.rawTime(),t),(!t._dur||Ic(0,t.totalDuration(),i)-t._tTime>At)&&t.render(i,!0)),ko(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-At}},Tr=function(e,t,i,r){return t.parent&&Js(t),t._start=yn((fs(i)?i:i||e!==Bt?Fi(e,i,t):e._time)+t._delay),t._end=yn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),nw(e,t,"_first","_last",e._sort?"_start":0),_g(t)||(e._recent=t),r||iw(e,t),e._ts<0&&Id(e,e._tTime),e},rw=function(e,t){return(Di.ScrollTrigger||b_("scrollTrigger",t))&&Di.ScrollTrigger.create(t,e)},sw=function(e,t,i,r,s){if(N_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!zn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Z1!==Ti.frame)return Xs.push(e),e._lazy=[s,r],1},qC=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},_g=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},KC=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&qC(e)&&!(!e._initted&&_g(e))||(e._ts<0||e._dp._ts<0)&&!_g(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=Ic(0,e._tDur,t),c=wl(l,a),e._yoyo&&c&1&&(o=1-o),c!==wl(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||zn||r||e._zTime===At||!t&&e._zTime){if(!e._initted&&sw(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?At:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&gg(e,t,i,!0),e._onUpdate&&!i&&bi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&bi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Js(e,1),!i&&!zn&&(bi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ZC=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},El=function(e,t,i,r){var s=e._repeat,o=yn(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:yn(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Id(e,e._tTime=e._tDur*a),e.parent&&Nd(e),i||ko(e.parent,e),e},Lx=function(e){return e instanceof Jn?ko(e):El(e,e._dur)},JC={_start:0,endTime:pc,totalDuration:pc},Fi=function n(e,t,i){var r=e.labels,s=e._recent||JC,o=e.duration()>=Yi?s.endTime(!1):e._dur,a,l,u;return Mn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Bn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Iu=function(e,t,i){var r=fs(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=hi(l.vars.inherit)&&l.parent;o.immediateRender=hi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new rn(t[0],o,t[s+1])},so=function(e,t){return e||e===0?t(e):t},Ic=function(e,t,i){return i<e?e:i>t?t:i},kn=function(e,t){return!Mn(e)||!(t=HC.exec(e))?"":t[1]},QC=function(e,t,i){return so(i,function(r){return Ic(e,t,r)})},vg=[].slice,ow=function(e,t){return e&&Ir(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ir(e[0]))&&!e.nodeType&&e!==yr},eb=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Mn(r)&&!t||ow(r,1)?(s=i).push.apply(s,$i(r)):i.push(r)})||i},$i=function(e,t,i){return Ot&&!t&&Ot.selector?Ot.selector(e):Mn(e)&&!i&&(pg||!Tl())?vg.call((t||C_).querySelectorAll(e),0):Bn(e)?eb(e,i):ow(e)?vg.call(e,0):e?[e]:[]},xg=function(e){return e=$i(e)[0]||dc("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return $i(t,i.querySelectorAll?i:i===e?dc("Invalid scope")||C_.createElement("div"):e)}},aw=function(e){return e.sort(function(){return .5-Math.random()})},lw=function(e){if($t(e))return e;var t=Ir(e)?e:{each:e},i=zo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return Mn(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,m=o[_],p,x,v,S,C,T,M,b,N;if(!m){if(N=t.grid==="auto"?0:(t.grid||[1,Yi])[1],!N){for(M=-Yi;M<(M=g[N++].getBoundingClientRect().left)&&N<_;);N<_&&N--}for(m=o[_]=[],p=l?Math.min(N,_)*c-.5:r%N,x=N===Yi?0:l?_*f/N-.5:r/N|0,M=0,b=Yi,T=0;T<_;T++)v=T%N-p,S=x-(T/N|0),m[T]=C=u?Math.abs(u==="y"?S:v):G1(v*v+S*S),C>M&&(M=C),C<b&&(b=C);r==="random"&&aw(m),m.max=M-b,m.min=b,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(N>_?_-1:u?u==="y"?_/N:N:Math.max(N,_/N))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=kn(t.amount||t.each)||0,i=i&&_<0?vw(i):i}return _=(m[h]-m.min)/m.max||0,yn(m.b+(i?i(_):_)*m.v)+m.u}},yg=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=yn(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(fs(i)?0:kn(i))}},uw=function(e,t){var i=Bn(e),r,s;return!i&&Ir(e)&&(r=i=e.radius||Yi,e.values?(e=$i(e.values),(s=!fs(e[0]))&&(r*=r)):e=yg(e.increment)),so(t,i?$t(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Yi,c=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?e[c]:o,s||c===o||fs(o)?c:c+kn(o)}:yg(e))},cw=function(e,t,i,r){return so(Bn(e)?!t:i===!0?!!(i=0):!r,function(){return Bn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},tb=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},nb=function(e,t){return function(i){return e(parseFloat(i))+(t||kn(i))}},ib=function(e,t,i){return hw(e,t,0,1,i)},fw=function(e,t,i){return so(i,function(r){return e[~~t(r)]})},rb=function n(e,t,i){var r=t-e;return Bn(e)?fw(e,n(0,e.length),t):so(i,function(s){return(r+(s-e)%r)%r+e})},sb=function n(e,t,i){var r=t-e,s=r*2;return Bn(e)?fw(e,n(0,e.length-1),t):so(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},mc=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Y1:dg),i+=e.substr(t,r-t)+cw(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},hw=function(e,t,i,r,s){var o=t-e,a=r-i;return so(s,function(l){return i+((l-e)/o*a||0)})},ob=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Mn(e),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Bn(e)&&!Bn(t)){for(c=[],f=e.length,h=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return c[_](g-_)},i=t}else r||(e=qo(Bn(e)?[]:{},e));if(!c){for(l in t)D_.call(a,e,l,"get",t[l]);s=function(g){return O_(g,a)||(o?e.p:e)}}}return so(i,s)},Dx=function(e,t,i){var r=e.labels,s=Yi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},bi=function(e,t,i){var r=e.vars,s=r[t],o=Ot,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Xs.length&&qh(),a&&(Ot=a),c=l?s.apply(u,l):s.call(u),Ot=o,c},mu=function(e){return Js(e),e.scrollTrigger&&e.scrollTrigger.kill(!!zn),e.progress()<1&&bi(e,"onInterrupt"),e},qa,dw=[],pw=function(e){if(e)if(e=!e.name&&e.default||e,A_()||e.headless){var t=e.name,i=$t(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:pc,render:O_,add:D_,kill:Mb,modifier:Sb,rawVars:0},o={targetTest:0,get:0,getSetter:U_,aliases:{},register:0};if(Tl(),e!==r){if(Ei[t])return;Qi(r,Qi(Kh(e,s),o)),qo(r.prototype,qo(s,Kh(e,o))),Ei[r.prop=t]=r,e.targetTest&&(ah.push(r),R_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}K1(t,r),e.register&&e.register(gi,r,pi)}else dw.push(e)},Et=255,gu={aqua:[0,Et,Et],lime:[0,Et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Et],navy:[0,0,128],white:[Et,Et,Et],olive:[128,128,0],yellow:[Et,Et,0],orange:[Et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Et,0,0],pink:[Et,192,203],cyan:[0,Et,Et],transparent:[Et,Et,Et,0]},Sp=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Et+.5|0},mw=function(e,t,i){var r=e?fs(e)?[e>>16,e>>8&Et,e&Et]:0:gu.black,s,o,a,l,u,c,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),gu[e])r=gu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Et,r&Et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Et,e&Et]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(dg),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Sp(l+1/3,s,o),r[1]=Sp(l,s,o),r[2]=Sp(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(X1),i&&r.length<4&&(r[3]=1),r}else r=e.match(dg)||gu.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Et,o=r[1]/Et,a=r[2]/Et,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(d=f-h,u=c>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},gw=function(e){var t=[],i=[],r=-1;return e.split(js).forEach(function(s){var o=s.match($a)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Nx=function(e,t,i){var r="",s=(e+r).match(js),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(h){return(h=mw(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=gw(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(js,"1").split($a),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(js),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},js=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in gu)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),ab=/hsl[a]?\(/,_w=function(e){var t=e.join(" "),i;if(js.lastIndex=0,js.test(t))return i=ab.test(t),e[1]=Nx(e[1],i),e[0]=Nx(e[0],i,gw(e[1])),!0},gc,Ti=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,d,g=function _(m){var p=n()-r,x=m===!0,v,S,C,T;if((p>e||p<0)&&(i+=p-t),r+=p,C=r-i,v=C-o,(v>0||x)&&(T=++f.frame,h=C-f.time*1e3,f.time=C=C/1e3,o+=v+(v>=s?4:s-v),S=1),x||(l=u(_)),S)for(d=0;d<a.length;d++)a[d](C,h,T,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){$1&&(!pg&&A_()&&(yr=pg=window,C_=yr.document||{},Di.gsap=gi,(yr.gsapVersions||(yr.gsapVersions=[])).push(gi.version),q1($h||yr.GreenSockGlobals||!yr.gsap&&yr||{}),dw.forEach(pw)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},gc=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),gc=0,u=pc},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,x){var v=p?function(S,C,T,M){m(S,C,T,M),f.remove(v)}:m;return f.remove(m),a[x?"unshift":"push"](v),Tl(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),Tl=function(){return!gc&&Ti.wake()},dt={},lb=/^[\d.\-M][\d.\-,\s]/,ub=/["']/g,cb=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(ub,"").trim():+u,r=l.substr(a+1).trim();return t},fb=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},hb=function(e){var t=(e+"").split("("),i=dt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[cb(t[1])]:fb(e).split(",").map(ew)):dt._CE&&lb.test(e)?dt._CE("",e):i},vw=function(e){return function(t){return 1-e(1-t)}},xw=function n(e,t){for(var i=e._first,r;i;)i instanceof Jn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},zo=function(e,t){return e&&($t(e)?e:dt[e]||hb(e))||t},ra=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return di(e,function(a){dt[a]=Di[a]=s,dt[o=a.toLowerCase()]=i;for(var l in s)dt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=dt[a+"."+l]=s[l]}),s},yw=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Mp=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/hg*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*BC((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:yw(a);return s=hg/s,l.config=function(u,c){return n(e,u,c)},l},wp=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:yw(i);return r.config=function(s){return n(e,s)},r};di("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ra(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});dt.Linear.easeNone=dt.none=dt.Linear.easeIn;ra("Elastic",Mp("in"),Mp("out"),Mp());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};ra("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ra("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});ra("Circ",function(n){return-(G1(1-n*n)-1)});ra("Sine",function(n){return n===1?1:-zC(n*FC)+1});ra("Back",wp("in"),wp("out"),wp());dt.SteppedEase=dt.steps=Di.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-At;return function(a){return((r*Ic(0,o,a)|0)+s)*i}}};Ml.ease=dt["quad.out"];di("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return P_+=n+","+n+"Params,"});var Sw=function(e,t){this.id=kC++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:J1,this.set=t?t.getSetter:U_},_c=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,El(this,+t.duration,1,1),this.data=t.data,Ot&&(this._ctx=Ot,Ot.data.push(this)),gc||Ti.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,El(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Tl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Id(this,i),!s._dp||s.parent||iw(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Tr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===At||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Q1(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Px(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Px(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?wl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Zh(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-At?0:this._rts,this.totalTime(Ic(-Math.abs(this._delay),this._tDur,s),r!==!1),Nd(this),YC(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Tl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Tr(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(hi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Zh(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=GC);var r=zn;return zn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),zn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Lx(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Lx(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Fi(this,i),hi(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,hi(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-At)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=$t(i)?i:tw,a=function(){var u=r.then;r.then=null,$t(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){mu(this)},n}();Qi(_c.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var Jn=function(n){V1(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=hi(i.sortChildren),Bt&&Tr(i.parent||Bt,jr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&rw(jr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Iu(0,arguments,this),this},t.from=function(r,s,o){return Iu(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Iu(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Nu(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new rn(r,s,Fi(this,o),1),this},t.call=function(r,s,o){return Tr(this,rn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new rn(r,o,Fi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Nu(o).immediateRender=hi(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Nu(a).immediateRender=hi(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:yn(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,d,g,_,m,p,x,v,S,C,T,M;if(this!==Bt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,S=this._start,v=this._ts,p=!v,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=yn(c%m),c===l?(_=this._repeat,h=u):(_=~~(c/m),_&&_===c/m&&(h=u,_--),h>u&&(h=u)),C=wl(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),T&&_&1&&(h=u-h,M=1),_!==C&&!this._lock){var b=T&&C&1,N=b===(T&&_&1);if(_<C&&(b=!b),a=b?0:c%u?u:c,this._lock=1,this.render(a||(M?0:yn(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&bi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,N&&(this._lock=2,a=b?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;xw(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=ZC(this,yn(a),yn(h)),x&&(c-=h-(h=x._start))),this._tTime=c,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(bi(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){x=0,g&&(c+=this._zTime=-At);break}}d=g}else{d=this._last;for(var y=r<0?r:h;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,o||zn&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!p){x=0,g&&(c+=this._zTime=y?-At:At);break}}d=g}}if(x&&!s&&(this.pause(),x.render(h>=a?0:-At)._zTime=h>=a?1:-1,this._ts))return this._start=S,Nd(this),this.render(r,s,o);this._onUpdate&&!s&&bi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Js(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(bi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(fs(s)||(s=Fi(this,s,r)),!(r instanceof _c)){if(Bn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Mn(r))return this.addLabel(r,s);if($t(r))r=rn.delayedCall(0,r);else return this}return this!==r?Tr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Yi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof rn?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Mn(r)?this.removeLabel(r):$t(r)?this.killTweensOf(r):(Dd(this,r),r===this._recent&&(this._recent=this._last),ko(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=yn(Ti.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Fi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=rn.delayedCall(0,s||pc,o);return a.data="isPause",this._hasPause=1,Tr(this,a,Fi(this,r))},t.removePause=function(r){var s=this._first;for(r=Fi(this,r);s;)s._start===r&&s.data==="isPause"&&Js(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ls!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=$i(r),l=this._first,u=fs(s),c;l;)l instanceof rn?WC(l._targets,a)&&(u?(!Ls||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Fi(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=rn.to(o,Qi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||At,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&El(g,m,0,1).render(g._time,!0,!0),d=1}c&&c.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Qi({startAt:{time:Fi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Dx(this,Fi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Dx(this,Fi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return ko(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ko(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Yi,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Tr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;El(o,o===Bt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Bt._ts&&(Q1(Bt,Zh(r,Bt)),Z1=Ti.frame),Ti.frame>=bx){bx+=Pi.autoSleep||120;var s=Bt._first;if((!s||!s._ts)&&Pi.autoSleep&&Ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ti.sleep()}}},e}(_c);Qi(Jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var db=function(e,t,i,r,s,o,a){var l=new pi(this._pt,e,t,0,1,Cw,null,s),u=0,c=0,f,h,d,g,_,m,p,x;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=mc(r)),o&&(x=[i,r],o(x,e,t),i=x[0],r=x[1]),h=i.match(xp)||[];f=xp.exec(r);)g=f[0],_=r.substring(u,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?sl(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},u=xp.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(j1.test(r)||p)&&(l.e=0),this._pt=l,l},D_=function(e,t,i,r,s,o,a,l,u,c){$t(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:$t(f)?u?e[t.indexOf("set")||!$t(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,d=$t(f)?u?vb:Tw:I_,g;if(Mn(r)&&(~r.indexOf("random(")&&(r=mc(r)),r.charAt(1)==="="&&(g=sl(h,r)+(kn(h)||0),(g||g===0)&&(r=g))),!c||h!==r||Sg)return!isNaN(h*r)&&r!==""?(g=new pi(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?yb:Aw,0,d),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&b_(t,r),db.call(this,e,t,h,r,d,l||Pi.stringFilter,u))},pb=function(e,t,i,r,s){if($t(e)&&(e=Uu(e,s,t,i,r)),!Ir(e)||e.style&&e.nodeType||Bn(e)||W1(e))return Mn(e)?Uu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Uu(e[a],s,t,i,r);return o},Mw=function(e,t,i,r,s,o){var a,l,u,c;if(Ei[e]&&(a=new Ei[e]).init(s,a.rawVars?t[e]:pb(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new pi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==qa))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Ls,Sg,N_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!E_,S=e.timeline,C,T,M,b,N,y,E,I,B,G,$,H,j;if(S&&(!h||!s)&&(s="none"),e._ease=zo(s,Ml.ease),e._yEase=f?vw(zo(f===!0?s:f,Ml.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!r.runBackwards,!S||h&&!r.stagger){if(I=m[0]?Fo(m[0]).harness:0,H=I&&r[I.prop],C=Kh(r,R_),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!d?_.render(-1,!0):_.revert(c&&g?oh:VC),_._lazy=0),o){if(Js(e._startAt=rn.set(m,Qi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&hi(l),startAt:null,delay:0,onUpdate:u&&function(){return bi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zn||!a&&!d)&&e._startAt.revert(oh),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),M=Qi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&hi(l),immediateRender:a,stagger:0,parent:p},C),H&&(M[I.prop]=H),Js(e._startAt=rn.set(m,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zn?e._startAt.revert(oh):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&hi(l)||l&&!g,T=0;T<m.length;T++){if(N=m[T],E=N._gsap||L_(m)[T]._gsap,e._ptLookup[T]=G={},mg[E.id]&&Xs.length&&qh(),$=x===m?T:x.indexOf(N),I&&(B=new I).init(N,H||C,e,$,x)!==!1&&(e._pt=b=new pi(e._pt,N,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(D){G[D]=b}),B.priority&&(y=1)),!I||H)for(M in C)Ei[M]&&(B=Mw(M,C,e,$,N,x))?B.priority&&(y=1):G[M]=b=D_.call(e,N,M,"get",C[M],$,x,0,r.stringFilter);e._op&&e._op[T]&&e.kill(N,e._op[T]),v&&e._pt&&(Ls=e,Bt.killTweensOf(N,G,e.globalTime(t)),j=!e.parent,Ls=0),e._pt&&l&&(mg[E.id]=1)}y&&bw(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!j,h&&t<=0&&S.render(Yi,!0,!0)},mb=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,h,d;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(c=h[d][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Sg=1,e.vars[t]="+=0",N_(e,a),Sg=0,l?dc(t+" not eligible for reset"):1;u.push(c)}for(d=u.length;d--;)f=u[d],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Jt(i)+kn(f.e)),f.b&&(f.b=c.s+kn(f.b))},gb=function(e,t){var i=e[0]?Fo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=qo({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},_b=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Bn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Uu=function(e,t,i,r,s){return $t(e)?e.call(t,i,r,s):Mn(e)&&~e.indexOf("random(")?mc(e):e},ww=P_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ew={};di(ww+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Ew[n]=1});var rn=function(n){V1(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Nu(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,x=r.parent||Bt,v=(Bn(i)||W1(i)?fs(i[0]):"length"in r)?[i]:$i(i),S,C,T,M,b,N,y,E;if(a._targets=v.length?L_(v):dc("GSAP target "+i+" not found. https://gsap.com",!Pi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||Jc(u)||Jc(c)){if(r=a.vars,S=a.timeline=new Jn({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:v}),S.kill(),S.parent=S._dp=jr(a),S._start=0,h||Jc(u)||Jc(c)){if(M=v.length,y=h&&lw(h),Ir(h))for(b in h)~ww.indexOf(b)&&(E||(E={}),E[b]=h[b]);for(C=0;C<M;C++)T=Kh(r,Ew),T.stagger=0,p&&(T.yoyoEase=p),E&&qo(T,E),N=v[C],T.duration=+Uu(u,jr(a),C,N,v),T.delay=(+Uu(c,jr(a),C,N,v)||0)-a._delay,!h&&M===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),S.to(N,T,y?y(C,N,v):0),S._ease=dt.none;S.duration()?u=c=0:a.timeline=0}else if(g){Nu(Qi(S.vars.defaults,{ease:"none"})),S._ease=zo(g.ease||r.ease||"none");var I=0,B,G,$;if(Bn(g))g.forEach(function(H){return S.to(v,H,">")}),S.duration();else{T={};for(b in g)b==="ease"||b==="easeEach"||_b(b,g[b],T,g.easeEach);for(b in T)for(B=T[b].sort(function(H,j){return H.t-j.t}),I=0,C=0;C<B.length;C++)G=B[C],$={ease:G.e,duration:(G.t-(C?B[C-1].t:0))/100*u},$[b]=G.v,S.to(v,$,I),I+=$.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||a.duration(u=S.duration())}else a.timeline=0;return d===!0&&!E_&&(Ls=jr(a),Bt.killTweensOf(v),Ls=0),Tr(x,jr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!g&&a._start===yn(x._time)&&hi(f)&&$C(jr(a))&&x.data!=="nested")&&(a._tTime=-At,a.render(Math.max(0,-c)||0)),m&&rw(jr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-At&&!c?l:r<At?0:r,h,d,g,_,m,p,x,v,S;if(!u)KC(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(h=f,v=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(h=yn(f%_),f===l?(g=this._repeat,h=u):(g=~~(f/_),g&&g===yn(f/_)&&(h=u,g--),h>u&&(h=u)),p=this._yoyo&&g&1,p&&(S=this._yEase,h=u-h),m=wl(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(v&&this._yEase&&xw(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(yn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(sw(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(S||this._ease)(h/u),this._from&&(this.ratio=x=1-x),h&&!a&&!s&&!g&&(bi(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&gg(this,r,s,o),bi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&bi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&gg(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Js(this,1),!s&&!(c&&!a)&&(f||a||p)&&(bi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){gc||Ti.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||N_(this,u),c=this._ease(u/this._dur),mb(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Id(this,0),this.parent||nw(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?mu(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ls&&Ls.vars.overwrite!==!0)._first||mu(this),this.parent&&o!==this.timeline.totalDuration()&&El(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?$i(r):a,u=this._ptLookup,c=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&jC(a,l))return s==="all"&&(this._pt=0),mu(this);for(f=this._op=this._op||[],s!=="all"&&(Mn(s)&&(_={},di(s,function(x){return _[x]=1}),s=_),s=gb(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=u[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Dd(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&c&&mu(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Iu(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Iu(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Bt.killTweensOf(r,s,o)},e}(_c);Qi(rn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});di("staggerTo,staggerFrom,staggerFromTo",function(n){rn[n]=function(){var e=new Jn,t=vg.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var I_=function(e,t,i){return e[t]=i},Tw=function(e,t,i){return e[t](i)},vb=function(e,t,i,r){return e[t](r.fp,i)},xb=function(e,t,i){return e.setAttribute(t,i)},U_=function(e,t){return $t(e[t])?Tw:T_(e[t])&&e.setAttribute?xb:I_},Aw=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},yb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Cw=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},O_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Sb=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},Mb=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Dd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},wb=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},bw=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},pi=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Aw,this.d=l||this,this.set=u||I_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=wb,this.m=i,this.mt=s,this.tween=r},n}();di(P_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return R_[n]=1});Di.TweenMax=Di.TweenLite=rn;Di.TimelineLite=Di.TimelineMax=Jn;Bt=new Jn({sortChildren:!1,defaults:Ml,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pi.stringFilter=_w;var Bo=[],lh={},Eb=[],Ix=0,Tb=0,Ep=function(e){return(lh[e]||Eb).map(function(t){return t()})},Mg=function(){var e=Date.now(),t=[];e-Ix>2&&(Ep("matchMediaInit"),Bo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=yr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Ep("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Ix=e,Ep("matchMedia"))},Rw=function(){function n(t,i){this.selector=i&&xg(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Tb++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){$t(i)&&(s=r,r=i,i=$t);var o=this,a=function(){var u=Ot,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=xg(s)),Ot=o,f=r.apply(o,arguments),$t(f)&&o._r.push(f),Ot=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===$t?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ot;Ot=null,i(this),Ot=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof rn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Jn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof rn)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Bo.length;o--;)Bo[o].id===this.id&&Bo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),Ab=function(){function n(t){this.contexts=[],this.scope=t,Ot&&Ot.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Ir(i)||(i={matches:i});var o=new Rw(0,s||this.scope),a=o.conditions={},l,u,c;Ot&&!o.selector&&(o.selector=Ot.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=yr.matchMedia(i[u]),l&&(Bo.indexOf(o)<0&&Bo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Mg):l.addEventListener("change",Mg)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Jh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return pw(r)})},timeline:function(e){return new Jn(e)},getTweensOf:function(e,t){return Bt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Mn(e)&&(e=$i(e)[0]);var s=Fo(e||{}).get,o=i?tw:ew;return i==="native"&&(i=""),e&&(t?o((Ei[t]&&Ei[t].get||s)(e,t,i,r)):function(a,l,u){return o((Ei[a]&&Ei[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=$i(e),e.length>1){var r=e.map(function(c){return gi.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=Ei[t],a=Fo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;qa._pt=0,f.init(e,i?c+i:c,qa,0,[e]),f.render(1,f),qa._pt&&O_(1,qa)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=gi.to(e,qo((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=zo(e.ease,Ml.ease)),Rx(Ml,e||{})},config:function(e){return Rx(Pi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Ei[a]&&!Di[a]&&dc(t+" effect requires "+a+" plugin.")}),yp[t]=function(a,l,u){return i($i(a),Qi(l||{},s),u)},o&&(Jn.prototype[t]=function(a,l,u){return this.add(yp[t](a,Ir(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){dt[e]=zo(t)},parseEase:function(e,t){return arguments.length?zo(e,t):dt},getById:function(e){return Bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Jn(e),r,s;for(i.smoothChildTiming=hi(e.smoothChildTiming),Bt.remove(i),i._dp=0,i._time=i._tTime=Bt._time,r=Bt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof rn&&r.vars.onComplete===r._targets[0]))&&Tr(i,r,r._start-r._delay),r=s;return Tr(Bt,i,0),i},context:function(e,t){return e?new Rw(e,t):Ot},matchMedia:function(e){return new Ab(e)},matchMediaRefresh:function(){return Bo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Mg()},addEventListener:function(e,t){var i=lh[e]||(lh[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=lh[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:rb,wrapYoyo:sb,distribute:lw,random:cw,snap:uw,normalize:ib,getUnit:kn,clamp:QC,splitColor:mw,toArray:$i,selector:xg,mapRange:hw,pipe:tb,unitize:nb,interpolate:ob,shuffle:aw},install:q1,effects:yp,ticker:Ti,updateRoot:Jn.updateRoot,plugins:Ei,globalTimeline:Bt,core:{PropTween:pi,globals:K1,Tween:rn,Timeline:Jn,Animation:_c,getCache:Fo,_removeLinkedListItem:Dd,reverting:function(){return zn},context:function(e){return e&&Ot&&(Ot.data.push(e),e._ctx=Ot),Ot},suppressOverwrites:function(e){return E_=e}}};di("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Jh[n]=rn[n]});Ti.add(Jn.updateRoot);qa=Jh.to({},{duration:0});var Cb=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},bb=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Cb(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Tp=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Mn(s)&&(l={},di(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}bb(a,s)}}}},gi=Jh.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)zn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Tp("roundProps",yg),Tp("modifiers"),Tp("snap",uw))||Jh;rn.version=Jn.version=gi.version="3.12.5";$1=1;A_()&&Tl();dt.Power0;dt.Power1;dt.Power2;dt.Power3;dt.Power4;dt.Linear;dt.Quad;dt.Cubic;dt.Quart;dt.Quint;dt.Strong;dt.Elastic;dt.Back;dt.SteppedEase;dt.Bounce;dt.Sine;dt.Expo;dt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ux,Ds,ol,F_,Po,Ox,k_,Rb=function(){return typeof window<"u"},hs={},yo=180/Math.PI,al=Math.PI/180,ua=Math.atan2,Fx=1e8,z_=/([A-Z])/g,Pb=/(left|right|width|margin|padding|x)/i,Lb=/[\s,\(]\S/,Ar={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Db=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Nb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ib=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Pw=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Lw=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Ub=function(e,t,i){return e.style[t]=i},Ob=function(e,t,i){return e.style.setProperty(t,i)},Fb=function(e,t,i){return e._gsap[t]=i},kb=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},zb=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},Bb=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Vt="transform",mi=Vt+"Origin",Hb=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in hs&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ar[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=qr(r,a)}):this.tfm[e]=o.x?o[e]:qr(r,e),e===mi&&(this.tfm.zOrigin=o.zOrigin);else return Ar.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Vt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(mi,t,"")),e=Vt}(s||t)&&this.props.push(e,t,s[e])},Dw=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Vb=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(z_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=k_(),(!s||!s.isStart)&&!i[Vt]&&(Dw(i),r.zOrigin&&i[mi]&&(i[mi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Nw=function(e,t){var i={target:e,props:[],revert:Vb,save:Hb};return e._gsap||gi.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},Iw,Eg=function(e,t){var i=Ds.createElementNS?Ds.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ds.createElement(e);return i&&i.style?i:Ds.createElement(e)},Lr=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(z_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Al(t)||t,1)||""},kx="O,Moz,ms,Ms,Webkit".split(","),Al=function(e,t,i){var r=t||Po,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(kx[o]+e in s););return o<0?null:(o===3?"ms":o>=0?kx[o]:"")+e},Tg=function(){Rb()&&window.document&&(Ux=window,Ds=Ux.document,ol=Ds.documentElement,Po=Eg("div")||{style:{}},Eg("div"),Vt=Al(Vt),mi=Vt+"Origin",Po.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Iw=!!Al("perspective"),k_=gi.core.reverting,F_=1)},Ap=function n(e){var t=Eg("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(ol.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),ol.removeChild(t),this.style.cssText=s,o},zx=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Uw=function(e){var t;try{t=e.getBBox()}catch{t=Ap.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ap||(t=Ap.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+zx(e,["x","cx","x1"])||0,y:+zx(e,["y","cy","y1"])||0,width:0,height:0}:t},Ow=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Uw(e))},Ko=function(e,t){if(t){var i=e.style,r;t in hs&&t!==mi&&(t=Vt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(z_,"-$1").toLowerCase())):i.removeAttribute(t)}},Ns=function(e,t,i,r,s,o){var a=new pi(e._pt,t,i,0,1,o?Lw:Pw);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Bx={deg:1,rad:1,turn:1},Gb={grid:1,flex:1},Qs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Po.style,l=Pb.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||Bx[r]||Bx[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),p=e.getCTM&&Ow(e),(d||o==="%")&&(hs[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[c],Jt(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ds||!_.appendChild)&&(_=Ds.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Ti.time&&!m.uncache)return Jt(s/m.width*f);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=f+r,g=e[c],x?e.style[t]=x:Ko(e,t)}else(d||o==="%")&&!Gb[Lr(_,"display")]&&(a.position=Lr(e,"position")),_===e&&(a.position="static"),_.appendChild(Po),g=Po[c],_.removeChild(Po),a.position="absolute";return l&&d&&(m=Fo(_),m.time=Ti.time,m.width=_[c]),Jt(h?g*s/f:g&&s?f/g*s:0)},qr=function(e,t,i,r){var s;return F_||Tg(),t in Ar&&t!=="transform"&&(t=Ar[t],~t.indexOf(",")&&(t=t.split(",")[0])),hs[t]&&t!=="transform"?(s=xc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ed(Lr(e,mi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Qh[t]&&Qh[t](e,t,i)||Lr(e,t)||J1(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Qs(e,t,s,i)+i:s},Wb=function(e,t,i,r){if(!i||i==="none"){var s=Al(t,e,1),o=s&&Lr(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Lr(e,"borderTopColor"))}var a=new pi(this._pt,e.style,t,0,1,Cw),l=0,u=0,c,f,h,d,g,_,m,p,x,v,S,C;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=Lr(e,t)||r,_?e.style[t]=_:Ko(e,t)),c=[i,r],_w(c),i=c[0],r=c[1],h=i.match($a)||[],C=r.match($a)||[],C.length){for(;f=$a.exec(r);)m=f[0],x=r.substring(l,f.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(_=h[u++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),m.charAt(1)==="="&&(m=sl(d,m)+S),p=parseFloat(m),v=m.substr((p+"").length),l=$a.lastIndex-v.length,v||(v=v||Pi.units[t]||S,l===r.length&&(r+=v,a.e+=v)),S!==v&&(d=Qs(e,t,_,v)||0),a._pt={_next:a._pt,p:x||u===1?x:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Lw:Pw;return j1.test(r)&&(a.e=0),this._pt=a,a},Hx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Xb=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Hx[i]||i,t[1]=Hx[r]||r,t.join(" ")},jb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],hs[a]&&(l=1,a=a==="transformOrigin"?mi:Vt),Ko(i,a);l&&(Ko(i,Vt),o&&(o.svg&&i.removeAttribute("transform"),xc(i,1),o.uncache=1,Dw(r)))}},Qh={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new pi(e._pt,t,i,0,0,jb);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},vc=[1,0,0,1,0,0],Fw={},kw=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Vx=function(e){var t=Lr(e,Vt);return kw(t)?vc:t.substr(7).match(X1).map(Jt)},B_=function(e,t){var i=e._gsap||Fo(e),r=e.style,s=Vx(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?vc:s):(s===vc&&!e.offsetParent&&e!==ol&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,ol.appendChild(e)),s=Vx(e),l?r.display=l:Ko(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):ol.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ag=function(e,t,i,r,s,o){var a=e._gsap,l=s||B_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],x=l[5],v=t.split(" "),S=parseFloat(v[0])||0,C=parseFloat(v[1])||0,T,M,b,N;i?l!==vc&&(M=d*m-g*_)&&(b=S*(m/M)+C*(-_/M)+(_*x-m*p)/M,N=S*(-g/M)+C*(d/M)-(d*x-g*p)/M,S=b,C=N):(T=Uw(e),S=T.x+(~v[0].indexOf("%")?S/100*T.width:S),C=T.y+(~(v[1]||v[0]).indexOf("%")?C/100*T.height:C)),r||r!==!1&&a.smooth?(p=S-u,x=C-c,a.xOffset=f+(p*d+x*_)-p,a.yOffset=h+(p*g+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[mi]="0px 0px",o&&(Ns(o,a,"xOrigin",u,S),Ns(o,a,"yOrigin",c,C),Ns(o,a,"xOffset",f,a.xOffset),Ns(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+C)},xc=function(e,t){var i=e._gsap||new Sw(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Lr(e,mi)||"0",c,f,h,d,g,_,m,p,x,v,S,C,T,M,b,N,y,E,I,B,G,$,H,j,D,K,P,ie,Te,Ge,Y,Q;return c=f=h=_=m=p=x=v=S=0,d=g=1,i.svg=!!(e.getCTM&&Ow(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Vt]!=="none"?l[Vt]:"")),r.scale=r.rotate=r.translate="none"),M=B_(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),u=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),Ag(e,j||u,!!j||i.originIsAbsolute,i.smooth!==!1,M)),C=i.xOrigin||0,T=i.yOrigin||0,M!==vc&&(E=M[0],I=M[1],B=M[2],G=M[3],c=$=M[4],f=H=M[5],M.length===6?(d=Math.sqrt(E*E+I*I),g=Math.sqrt(G*G+B*B),_=E||I?ua(I,E)*yo:0,x=B||G?ua(B,G)*yo+_:0,x&&(g*=Math.abs(Math.cos(x*al))),i.svg&&(c-=C-(C*E+T*B),f-=T-(C*I+T*G))):(Q=M[6],Ge=M[7],P=M[8],ie=M[9],Te=M[10],Y=M[11],c=M[12],f=M[13],h=M[14],b=ua(Q,Te),m=b*yo,b&&(N=Math.cos(-b),y=Math.sin(-b),j=$*N+P*y,D=H*N+ie*y,K=Q*N+Te*y,P=$*-y+P*N,ie=H*-y+ie*N,Te=Q*-y+Te*N,Y=Ge*-y+Y*N,$=j,H=D,Q=K),b=ua(-B,Te),p=b*yo,b&&(N=Math.cos(-b),y=Math.sin(-b),j=E*N-P*y,D=I*N-ie*y,K=B*N-Te*y,Y=G*y+Y*N,E=j,I=D,B=K),b=ua(I,E),_=b*yo,b&&(N=Math.cos(b),y=Math.sin(b),j=E*N+I*y,D=$*N+H*y,I=I*N-E*y,H=H*N-$*y,E=j,$=D),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Jt(Math.sqrt(E*E+I*I+B*B)),g=Jt(Math.sqrt(H*H+Q*Q)),b=ua($,H),x=Math.abs(b)>2e-4?b*yo:0,S=Y?1/(Y<0?-Y:Y):0),i.svg&&(j=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!kw(Lr(e,Vt)),j&&e.setAttribute("transform",j))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Jt(d),i.scaleY=Jt(g),i.rotation=Jt(_)+a,i.rotationX=Jt(m)+a,i.rotationY=Jt(p)+a,i.skewX=x+a,i.skewY=v+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[mi]=ed(u)),i.xOffset=i.yOffset=0,i.force3D=Pi.force3D,i.renderTransform=i.svg?$b:Iw?zw:Yb,i.uncache=0,i},ed=function(e){return(e=e.split(" "))[0]+" "+e[1]},Cp=function(e,t,i){var r=kn(t);return Jt(parseFloat(t)+parseFloat(Qs(e,"x",i+"px",r)))+r},Yb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,zw(e,t)},lo="0deg",Kl="0px",uo=") ",zw=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,x=i.target,v=i.zOrigin,S="",C=p==="auto"&&e&&e!==1||p===!0;if(v&&(f!==lo||c!==lo)){var T=parseFloat(c)*al,M=Math.sin(T),b=Math.cos(T),N;T=parseFloat(f)*al,N=Math.cos(T),o=Cp(x,o,M*N*-v),a=Cp(x,a,-Math.sin(T)*-v),l=Cp(x,l,b*N*-v+v)}m!==Kl&&(S+="perspective("+m+uo),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(C||o!==Kl||a!==Kl||l!==Kl)&&(S+=l!==Kl||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+uo),u!==lo&&(S+="rotate("+u+uo),c!==lo&&(S+="rotateY("+c+uo),f!==lo&&(S+="rotateX("+f+uo),(h!==lo||d!==lo)&&(S+="skew("+h+", "+d+uo),(g!==1||_!==1)&&(S+="scale("+g+", "+_+uo),x.style[Vt]=S||"translate(0, 0)"},$b=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,x=i.forceCSS,v=parseFloat(o),S=parseFloat(a),C,T,M,b,N;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=al,u*=al,C=Math.cos(l)*f,T=Math.sin(l)*f,M=Math.sin(l-u)*-h,b=Math.cos(l-u)*h,u&&(c*=al,N=Math.tan(u-c),N=Math.sqrt(1+N*N),M*=N,b*=N,c&&(N=Math.tan(c),N=Math.sqrt(1+N*N),C*=N,T*=N)),C=Jt(C),T=Jt(T),M=Jt(M),b=Jt(b)):(C=f,b=h,T=M=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=Qs(d,"x",o,"px"),S=Qs(d,"y",a,"px")),(g||_||m||p)&&(v=Jt(v+g-(g*C+_*M)+m),S=Jt(S+_-(g*T+_*b)+p)),(r||s)&&(N=d.getBBox(),v=Jt(v+r/100*N.width),S=Jt(S+s/100*N.height)),N="matrix("+C+","+T+","+M+","+b+","+v+","+S+")",d.setAttribute("transform",N),x&&(d.style[Vt]=N)},qb=function(e,t,i,r,s){var o=360,a=Mn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?yo:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*Fx)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*Fx)%o-~~(u/o)*o)),e._pt=h=new pi(e._pt,t,i,r,u,Db),h.e=c,h.u="deg",e._props.push(i),h},Gx=function(e,t){for(var i in t)e[i]=t[i];return e},Kb=function(e,t,i){var r=Gx({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,d,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Vt]=t,a=xc(i,1),Ko(i,Vt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Vt],o[Vt]=t,a=xc(i,1),o[Vt]=u);for(l in hs)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(d=kn(u),g=kn(c),f=d!==g?Qs(i,l,u,g):parseFloat(u),h=parseFloat(c),e._pt=new pi(e._pt,a,l,f,h-f,wg),e._pt.u=g||0,e._props.push(l));Gx(a,r)};di("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Qh[e>1?"border"+n:n]=function(a,l,u,c,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return qr(a,g,u)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(c+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var Bw={name:"css",register:Tg,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,h,d,g,_,m,p,x,v,S,C,T,M,b;F_||Tg(),this.styles=this.styles||Nw(e),b=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(Ei[_]&&Mw(_,t,i,r,e,s)))){if(d=typeof c,g=Qh[_],d==="function"&&(c=c.call(i,r,e,s),d=typeof c),d==="string"&&~c.indexOf("random(")&&(c=mc(c)),g)g(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",js.lastIndex=0,js.test(u)||(m=kn(u),p=kn(c)),p?m!==p&&(u=Qs(e,_,u,p)+p):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),b.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Mn(u)&&~u.indexOf("random(")&&(u=mc(u)),kn(u+"")||u==="auto"||(u+=Pi.units[_]||kn(qr(e,_))||""),(u+"").charAt(1)==="="&&(u=qr(e,_))):u=qr(e,_),h=parseFloat(u),x=d==="string"&&c.charAt(1)==="="&&c.substr(0,2),x&&(c=c.substr(2)),f=parseFloat(c),_ in Ar&&(_==="autoAlpha"&&(h===1&&qr(e,"visibility")==="hidden"&&f&&(h=0),b.push("visibility",0,a.visibility),Ns(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Ar[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in hs,v){if(this.styles.save(_),S||(C=e._gsap,C.renderTransform&&!t.parseTransform||xc(e,t.parseTransform),T=t.smoothOrigin!==!1&&C.smooth,S=this._pt=new pi(this._pt,a,Vt,0,1,C.renderTransform,C,0,-1),S.dep=1),_==="scale")this._pt=new pi(this._pt,C,"scaleY",C.scaleY,(x?sl(C.scaleY,x+f):f)-C.scaleY||0,wg),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){b.push(mi,0,a[mi]),c=Xb(c),C.svg?Ag(e,c,0,T,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==C.zOrigin&&Ns(this,C,"zOrigin",C.zOrigin,p),Ns(this,a,_,ed(u),ed(c)));continue}else if(_==="svgOrigin"){Ag(e,c,1,T,0,this);continue}else if(_ in Fw){qb(this,C,_,h,x?sl(h,x+c):c);continue}else if(_==="smoothOrigin"){Ns(this,C,"smooth",C.smooth,c);continue}else if(_==="force3D"){C[_]=c;continue}else if(_==="transform"){Kb(this,c,e);continue}}else _ in a||(_=Al(_)||_);if(v||(f||f===0)&&(h||h===0)&&!Lb.test(c)&&_ in a)m=(u+"").substr((h+"").length),f||(f=0),p=kn(c)||(_ in Pi.units?Pi.units[_]:m),m!==p&&(h=Qs(e,_,u,p)),this._pt=new pi(this._pt,v?C:a,_,h,(x?sl(h,x+f):f)-h,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Ib:wg),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=Nb);else if(_ in a)Wb.call(this,e,_,u,x?x+c:c);else if(_ in e)this.add(e,_,u||e[_],x?x+c:c,r,s);else if(_!=="parseTransform"){b_(_,c);continue}v||(_ in a?b.push(_,0,a[_]):b.push(_,1,u||e[_])),o.push(_)}}M&&bw(this)},render:function(e,t){if(t.tween._time||!k_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:qr,aliases:Ar,getSetter:function(e,t,i){var r=Ar[t];return r&&r.indexOf(",")<0&&(t=r),t in hs&&t!==mi&&(e._gsap.x||qr(e,"x"))?i&&Ox===i?t==="scale"?kb:Fb:(Ox=i||{})&&(t==="scale"?zb:Bb):e.style&&!T_(e.style[t])?Ub:~t.indexOf("-")?Ob:U_(e,t)},core:{_removeProperty:Ko,_getMatrix:B_}};gi.utils.checkPrefix=Al;gi.core.getStyleSaver=Nw;(function(n,e,t,i){var r=di(n+","+e+","+t,function(s){hs[s]=1});di(e,function(s){Pi.units[s]="deg",Fw[s]=1}),Ar[r[13]]=n+","+e,di(i,function(s){var o=s.split(":");Ar[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");di("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Pi.units[n]="px"});gi.registerPlugin(Bw);var cr=gi.registerPlugin(Bw)||gi;cr.core.Tween;function Zb(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Jb(n,e,t){return e&&Zb(n.prototype,e),n}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var An,uh,Ai,Is,Us,ll,Hw,So,Ou,Vw,es,sr,Gw,Ww=function(){return An||typeof window<"u"&&(An=window.gsap)&&An.registerPlugin&&An},Xw=1,Ka=[],st=[],Dr=[],Fu=Date.now,Cg=function(e,t){return t},Qb=function(){var e=Ou.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,st),r.push.apply(r,Dr),st=i,Dr=r,Cg=function(o,a){return t[o](a)}},Ys=function(e,t){return~Dr.indexOf(e)&&Dr[Dr.indexOf(e)+1][t]},ku=function(e){return!!~Vw.indexOf(e)},Xn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Vn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Qc="scrollLeft",ef="scrollTop",bg=function(){return es&&es.isPressed||st.cache++},td=function(e,t){var i=function r(s){if(s||s===0){Xw&&(Ai.history.scrollRestoration="manual");var o=es&&es.isPressed;s=r.v=Math.round(s)||(es&&es.iOS?1:0),e(s),r.cacheID=st.cache,o&&Cg("ss",s)}else(t||st.cache!==r.cacheID||Cg("ref"))&&(r.cacheID=st.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Qn={s:Qc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:td(function(n){return arguments.length?Ai.scrollTo(n,cn.sc()):Ai.pageXOffset||Is[Qc]||Us[Qc]||ll[Qc]||0})},cn={s:ef,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Qn,sc:td(function(n){return arguments.length?Ai.scrollTo(Qn.sc(),n):Ai.pageYOffset||Is[ef]||Us[ef]||ll[ef]||0})},si=function(e,t){return(t&&t._ctx&&t._ctx.selector||An.utils.toArray)(e)[0]||(typeof e=="string"&&An.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},eo=function(e,t){var i=t.s,r=t.sc;ku(e)&&(e=Is.scrollingElement||Us);var s=st.indexOf(e),o=r===cn.sc?1:2;!~s&&(s=st.push(e)-1),st[s+o]||Xn(e,"scroll",bg);var a=st[s+o],l=a||(st[s+o]=td(Ys(e,i),!0)||(ku(e)?r:td(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=An.getProperty(e,"scrollBehavior")==="smooth"),l},Rg=function(e,t,i){var r=e,s=e,o=Fu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,_){var m=Fu();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},h=function(g){var _=a,m=s,p=Fu();return(g||g===0)&&g!==r&&c(g),o===a||p-a>u?0:(r+(i?m:-m))/((i?p:o)-_)*1e3};return{update:c,reset:f,getVelocity:h}},Zl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Wx=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},jw=function(){Ou=An.core.globals().ScrollTrigger,Ou&&Ou.core&&Qb()},Yw=function(e){return An=e||Ww(),!uh&&An&&typeof document<"u"&&document.body&&(Ai=window,Is=document,Us=Is.documentElement,ll=Is.body,Vw=[Ai,Is,Us,ll],An.utils.clamp,Gw=An.core.context||function(){},So="onpointerenter"in ll?"pointer":"mouse",Hw=en.isTouch=Ai.matchMedia&&Ai.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ai||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,sr=en.eventTypes=("ontouchstart"in Us?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Us?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Xw=0},500),jw(),uh=1),uh};Qn.op=cn;st.cache=0;var en=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){uh||Yw(An)||console.warn("Please gsap.registerPlugin(Observer)"),Ou||jw();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,f=i.onStop,h=i.onStopDelay,d=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,p=i.onDragEnd,x=i.onDrag,v=i.onPress,S=i.onRelease,C=i.onRight,T=i.onLeft,M=i.onUp,b=i.onDown,N=i.onChangeX,y=i.onChangeY,E=i.onChange,I=i.onToggleX,B=i.onToggleY,G=i.onHover,$=i.onHoverEnd,H=i.onMove,j=i.ignoreCheck,D=i.isNormalizer,K=i.onGestureStart,P=i.onGestureEnd,ie=i.onWheel,Te=i.onEnable,Ge=i.onDisable,Y=i.onClick,Q=i.scrollSpeed,ge=i.capture,ue=i.allowClicks,Oe=i.lockAxis,Ue=i.onLockAxis;this.target=a=si(a)||Us,this.vars=i,d&&(d=An.utils.toArray(d)),r=r||1e-9,s=s||0,g=g||1,Q=Q||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Ai.getComputedStyle(ll).lineHeight)||22);var de,ce,me,L,pe,_e,ae,U=this,ve=0,xe=0,R=i.passive||!c,w=eo(a,Qn),V=eo(a,cn),J=w(),ne=V(),q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&sr[0]==="pointerdown",Le=ku(a),le=a.ownerDocument||Is,oe=[0,0,0],Ye=[0,0,0],se=0,Re=function(){return se=Fu()},De=function(Fe,pt){return(U.event=Fe)&&d&&~d.indexOf(Fe.target)||pt&&q&&Fe.pointerType!=="touch"||j&&j(Fe,pt)},We=function(){U._vx.reset(),U._vy.reset(),ce.pause(),f&&f(U)},Pe=function(){var Fe=U.deltaX=Wx(oe),pt=U.deltaY=Wx(Ye),Ae=Math.abs(Fe)>=r,Xe=Math.abs(pt)>=r;E&&(Ae||Xe)&&E(U,Fe,pt,oe,Ye),Ae&&(C&&U.deltaX>0&&C(U),T&&U.deltaX<0&&T(U),N&&N(U),I&&U.deltaX<0!=ve<0&&I(U),ve=U.deltaX,oe[0]=oe[1]=oe[2]=0),Xe&&(b&&U.deltaY>0&&b(U),M&&U.deltaY<0&&M(U),y&&y(U),B&&U.deltaY<0!=xe<0&&B(U),xe=U.deltaY,Ye[0]=Ye[1]=Ye[2]=0),(L||me)&&(H&&H(U),me&&(x(U),me=!1),L=!1),_e&&!(_e=!1)&&Ue&&Ue(U),pe&&(ie(U),pe=!1),de=0},Ze=function(Fe,pt,Ae){oe[Ae]+=Fe,Ye[Ae]+=pt,U._vx.update(Fe),U._vy.update(pt),u?de||(de=requestAnimationFrame(Pe)):Pe()},$e=function(Fe,pt){Oe&&!ae&&(U.axis=ae=Math.abs(Fe)>Math.abs(pt)?"x":"y",_e=!0),ae!=="y"&&(oe[2]+=Fe,U._vx.update(Fe,!0)),ae!=="x"&&(Ye[2]+=pt,U._vy.update(pt,!0)),u?de||(de=requestAnimationFrame(Pe)):Pe()},ut=function(Fe){if(!De(Fe,1)){Fe=Zl(Fe,c);var pt=Fe.clientX,Ae=Fe.clientY,Xe=pt-U.x,He=Ae-U.y,Ke=U.isDragging;U.x=pt,U.y=Ae,(Ke||Math.abs(U.startX-pt)>=s||Math.abs(U.startY-Ae)>=s)&&(x&&(me=!0),Ke||(U.isDragging=!0),$e(Xe,He),Ke||m&&m(U))}},F=U.onPress=function(Be){De(Be,1)||Be&&Be.button||(U.axis=ae=null,ce.pause(),U.isPressed=!0,Be=Zl(Be),ve=xe=0,U.startX=U.x=Be.clientX,U.startY=U.y=Be.clientY,U._vx.reset(),U._vy.reset(),Xn(D?a:le,sr[1],ut,R,!0),U.deltaX=U.deltaY=0,v&&v(U))},re=U.onRelease=function(Be){if(!De(Be,1)){Vn(D?a:le,sr[1],ut,!0);var Fe=!isNaN(U.y-U.startY),pt=U.isDragging,Ae=pt&&(Math.abs(U.x-U.startX)>3||Math.abs(U.y-U.startY)>3),Xe=Zl(Be);!Ae&&Fe&&(U._vx.reset(),U._vy.reset(),c&&ue&&An.delayedCall(.08,function(){if(Fu()-se>300&&!Be.defaultPrevented){if(Be.target.click)Be.target.click();else if(le.createEvent){var He=le.createEvent("MouseEvents");He.initMouseEvent("click",!0,!0,Ai,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),Be.target.dispatchEvent(He)}}})),U.isDragging=U.isGesturing=U.isPressed=!1,f&&pt&&!D&&ce.restart(!0),p&&pt&&p(U),S&&S(U,Ae)}},Z=function(Fe){return Fe.touches&&Fe.touches.length>1&&(U.isGesturing=!0)&&K(Fe,U.isDragging)},te=function(){return(U.isGesturing=!1)||P(U)},ye=function(Fe){if(!De(Fe)){var pt=w(),Ae=V();Ze((pt-J)*Q,(Ae-ne)*Q,1),J=pt,ne=Ae,f&&ce.restart(!0)}},Se=function(Fe){if(!De(Fe)){Fe=Zl(Fe,c),ie&&(pe=!0);var pt=(Fe.deltaMode===1?l:Fe.deltaMode===2?Ai.innerHeight:1)*g;Ze(Fe.deltaX*pt,Fe.deltaY*pt,0),f&&!D&&ce.restart(!0)}},Je=function(Fe){if(!De(Fe)){var pt=Fe.clientX,Ae=Fe.clientY,Xe=pt-U.x,He=Ae-U.y;U.x=pt,U.y=Ae,L=!0,f&&ce.restart(!0),(Xe||He)&&$e(Xe,He)}},Mt=function(Fe){U.event=Fe,G(U)},Nt=function(Fe){U.event=Fe,$(U)},rt=function(Fe){return De(Fe)||Zl(Fe,c)&&Y(U)};ce=U._dc=An.delayedCall(h||.25,We).pause(),U.deltaX=U.deltaY=0,U._vx=Rg(0,50,!0),U._vy=Rg(0,50,!0),U.scrollX=w,U.scrollY=V,U.isDragging=U.isGesturing=U.isPressed=!1,Gw(this),U.enable=function(Be){return U.isEnabled||(Xn(Le?le:a,"scroll",bg),o.indexOf("scroll")>=0&&Xn(Le?le:a,"scroll",ye,R,ge),o.indexOf("wheel")>=0&&Xn(a,"wheel",Se,R,ge),(o.indexOf("touch")>=0&&Hw||o.indexOf("pointer")>=0)&&(Xn(a,sr[0],F,R,ge),Xn(le,sr[2],re),Xn(le,sr[3],re),ue&&Xn(a,"click",Re,!0,!0),Y&&Xn(a,"click",rt),K&&Xn(le,"gesturestart",Z),P&&Xn(le,"gestureend",te),G&&Xn(a,So+"enter",Mt),$&&Xn(a,So+"leave",Nt),H&&Xn(a,So+"move",Je)),U.isEnabled=!0,Be&&Be.type&&F(Be),Te&&Te(U)),U},U.disable=function(){U.isEnabled&&(Ka.filter(function(Be){return Be!==U&&ku(Be.target)}).length||Vn(Le?le:a,"scroll",bg),U.isPressed&&(U._vx.reset(),U._vy.reset(),Vn(D?a:le,sr[1],ut,!0)),Vn(Le?le:a,"scroll",ye,ge),Vn(a,"wheel",Se,ge),Vn(a,sr[0],F,ge),Vn(le,sr[2],re),Vn(le,sr[3],re),Vn(a,"click",Re,!0),Vn(a,"click",rt),Vn(le,"gesturestart",Z),Vn(le,"gestureend",te),Vn(a,So+"enter",Mt),Vn(a,So+"leave",Nt),Vn(a,So+"move",Je),U.isEnabled=U.isPressed=U.isDragging=!1,Ge&&Ge(U))},U.kill=U.revert=function(){U.disable();var Be=Ka.indexOf(U);Be>=0&&Ka.splice(Be,1),es===U&&(es=0)},Ka.push(U),D&&ku(a)&&(es=U),U.enable(_)},Jb(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();en.version="3.12.5";en.create=function(n){return new en(n)};en.register=Yw;en.getAll=function(){return Ka.slice()};en.getById=function(n){return Ka.filter(function(e){return e.vars.id===n})[0]};Ww()&&An.registerPlugin(en);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ie,Na,ft,kt,ur,Lt,$w,nd,yc,zu,_u,tf,Un,Ud,Pg,qn,Xx,jx,Ia,qw,bp,Kw,Yn,Lg,Zw,Jw,ws,Dg,H_,ul,V_,id,Ng,Rp,nf=1,On=Date.now,Pp=On(),Ki=0,vu=0,Yx=function(e,t,i){var r=wi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},$x=function(e,t){return t&&(!wi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},e2=function n(){return vu&&requestAnimationFrame(n)},qx=function(){return Ud=1},Kx=function(){return Ud=0},Sr=function(e){return e},xu=function(e){return Math.round(e*1e5)/1e5||0},Qw=function(){return typeof window<"u"},eE=function(){return Ie||Qw()&&(Ie=window.gsap)&&Ie.registerPlugin&&Ie},Zo=function(e){return!!~$w.indexOf(e)},tE=function(e){return(e==="Height"?V_:ft["inner"+e])||ur["client"+e]||Lt["client"+e]},nE=function(e){return Ys(e,"getBoundingClientRect")||(Zo(e)?function(){return ph.width=ft.innerWidth,ph.height=V_,ph}:function(){return Kr(e)})},t2=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ys(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?tE(s):e["client"+s])||0}},n2=function(e,t){return!t||~Dr.indexOf(e)?nE(e):function(){return ph}},Cr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ys(e,i))?o()-nE(e)()[s]:Zo(e)?(ur[i]||Lt[i])-tE(r):e[i]-e["offset"+r])},rf=function(e,t){for(var i=0;i<Ia.length;i+=3)(!t||~t.indexOf(Ia[i+1]))&&e(Ia[i],Ia[i+1],Ia[i+2])},wi=function(e){return typeof e=="string"},ei=function(e){return typeof e=="function"},yu=function(e){return typeof e=="number"},Mo=function(e){return typeof e=="object"},Jl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Lp=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},ca=Math.abs,iE="left",rE="top",G_="right",W_="bottom",Ho="width",Vo="height",Bu="Right",Hu="Left",Vu="Top",Gu="Bottom",nn="padding",Vi="margin",Cl="Width",X_="Height",ln="px",Gi=function(e){return ft.getComputedStyle(e)},i2=function(e){var t=Gi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Zx=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Kr=function(e,t){var i=t&&Gi(e)[Pg]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ie.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},rd=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},sE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},r2=function(e){return function(t){return Ie.utils.snap(sE(e),t)}},j_=function(e){var t=Ie.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},s2=function(e){return function(t,i){return j_(sE(e))(t,i.direction)}},sf=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},vn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},_n=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},of=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Jx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},af={toggleActions:"play",anticipatePin:0},sd={top:0,left:0,center:.5,bottom:1,right:1},ch=function(e,t){if(wi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in sd?sd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},lf=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=kt.createElement("div"),_=Zo(i)||Ys(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?Lt:i,x=e.indexOf("start")!==-1,v=x?u:c,S="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(r===cn?G_:W_)+":"+(o+parseFloat(h))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=x,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],fh(g,0,r,x),g},fh=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Cl]=1,s["border"+a+Cl]=0,s[i.p]=t+"px",Ie.set(e,s)},nt=[],Ig={},Sc,Qx=function(){return On()-Ki>34&&(Sc||(Sc=requestAnimationFrame(is)))},fa=function(){(!Yn||!Yn.isPressed||Yn.startX>Lt.clientWidth)&&(st.cache++,Yn?Sc||(Sc=requestAnimationFrame(is)):is(),Ki||Qo("scrollStart"),Ki=On())},Dp=function(){Jw=ft.innerWidth,Zw=ft.innerHeight},Su=function(){st.cache++,!Un&&!Kw&&!kt.fullscreenElement&&!kt.webkitFullscreenElement&&(!Lg||Jw!==ft.innerWidth||Math.abs(ft.innerHeight-Zw)>ft.innerHeight*.25)&&nd.restart(!0)},Jo={},o2=[],oE=function n(){return _n(it,"scrollEnd",n)||Lo(!0)},Qo=function(e){return Jo[e]&&Jo[e].map(function(t){return t()})||o2},Si=[],aE=function(e){for(var t=0;t<Si.length;t+=5)(!e||Si[t+4]&&Si[t+4].query===e)&&(Si[t].style.cssText=Si[t+1],Si[t].getBBox&&Si[t].setAttribute("transform",Si[t+2]||""),Si[t+3].uncache=1)},Y_=function(e,t){var i;for(qn=0;qn<nt.length;qn++)i=nt[qn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));id=!0,t&&aE(t),t||Qo("revert")},lE=function(e,t){st.cache++,(t||!Kn)&&st.forEach(function(i){return ei(i)&&i.cacheID++&&(i.rec=0)}),wi(e)&&(ft.history.scrollRestoration=H_=e)},Kn,Go=0,ey,a2=function(){if(ey!==Go){var e=ey=Go;requestAnimationFrame(function(){return e===Go&&Lo(!0)})}},uE=function(){Lt.appendChild(ul),V_=!Yn&&ul.offsetHeight||ft.innerHeight,Lt.removeChild(ul)},ty=function(e){return yc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Lo=function(e,t){if(Ki&&!e&&!id){vn(it,"scrollEnd",oE);return}uE(),Kn=it.isRefreshing=!0,st.forEach(function(r){return ei(r)&&++r.cacheID&&(r.rec=r())});var i=Qo("refreshInit");qw&&it.sort(),t||Y_(),st.forEach(function(r){ei(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),nt.slice(0).forEach(function(r){return r.refresh()}),id=!1,nt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Ng=1,ty(!0),nt.forEach(function(r){var s=Cr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),ty(!1),Ng=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),st.forEach(function(r){ei(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),lE(H_,1),nd.pause(),Go++,Kn=2,is(2),nt.forEach(function(r){return ei(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Kn=it.isRefreshing=!1,Qo("refresh")},Ug=0,hh=1,Wu,is=function(e){if(e===2||!Kn&&!id){it.isUpdating=!0,Wu&&Wu.update(0);var t=nt.length,i=On(),r=i-Pp>=50,s=t&&nt[0].scroll();if(hh=Ug>s?-1:1,Kn||(Ug=s),r&&(Ki&&!Ud&&i-Ki>200&&(Ki=0,Qo("scrollEnd")),_u=Pp,Pp=i),hh<0){for(qn=t;qn-- >0;)nt[qn]&&nt[qn].update(0,r);hh=1}else for(qn=0;qn<t;qn++)nt[qn]&&nt[qn].update(0,r);it.isUpdating=!1}Sc=0},Og=[iE,rE,W_,G_,Vi+Gu,Vi+Bu,Vi+Vu,Vi+Hu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],dh=Og.concat([Ho,Vo,"boxSizing","max"+Cl,"max"+X_,"position",Vi,nn,nn+Vu,nn+Bu,nn+Gu,nn+Hu]),l2=function(e,t,i){cl(i);var r=e._gsap;if(r.spacerIsNative)cl(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Np=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Og.length,o=t.style,a=e.style,l;s--;)l=Og[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[W_]=a[G_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ho]=rd(e,Qn)+ln,o[Vo]=rd(e,cn)+ln,o[nn]=a[Vi]=a[rE]=a[iE]="0",cl(r),a[Ho]=a["max"+Cl]=i[Ho],a[Vo]=a["max"+X_]=i[Vo],a[nn]=i[nn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},u2=/([A-Z])/g,cl=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ie.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(u2,"-$1").toLowerCase())}},uf=function(e){for(var t=dh.length,i=e.style,r=[],s=0;s<t;s++)r.push(dh[s],i[dh[s]]);return r.t=e,r},c2=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},ph={left:0,top:0},ny=function(e,t,i,r,s,o,a,l,u,c,f,h,d,g){ei(e)&&(e=e(l)),wi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?ch("0"+e.substr(3),i):0));var _=d?d.time():0,m,p,x;if(d&&d.seek(0),isNaN(e)||(e=+e),yu(e))d&&(e=Ie.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&fh(a,i,r,!0);else{ei(t)&&(t=t(l));var v=(e||"0").split(" "),S,C,T,M;x=si(t,l)||Lt,S=Kr(x)||{},(!S||!S.left&&!S.top)&&Gi(x).display==="none"&&(M=x.style.display,x.style.display="block",S=Kr(x),M?x.style.display=M:x.style.removeProperty("display")),C=ch(v[0],S[r.d]),T=ch(v[1]||"0",i),e=S[r.p]-u[r.p]-c+C+s-T,a&&fh(a,T,r,i-T<20||a._isStart&&T>20),i-=i-T}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var b=e+i,N=o._isStart;m="scroll"+r.d2,fh(o,b,r,N&&b>20||!N&&(f?Math.max(Lt[m],ur[m]):o.parentNode[m])<=b+1),f&&(u=Kr(a),f&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+ln))}return d&&x&&(m=Kr(x),d.seek(h),p=Kr(x),d._caScrollDist=m[r.p]-p[r.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},f2=/(webkit|moz|length|cssText|inset)/i,iy=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Lt){e._stOrig=s.cssText,a=Gi(e);for(o in a)!+o&&!f2.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ie.core.getCache(e).uncache=1,t.appendChild(e)}},cE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=o,o}},cf=function(e,t,i){var r={};r[t.p]="+="+i,Ie.set(e,r)},ry=function(e,t){var i=eo(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,f){var h=o.tween,d=l.onComplete,g={};u=u||i();var _=cE(i,u,function(){h.kill(),o.tween=0});return f=c&&f||0,c=c||a-u,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(u+c*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){st.cache++,o.tween&&is()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Ie.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},vn(e,"wheel",i.wheelHandler),it.isTouch&&vn(e,"touchmove",i.wheelHandler),s},it=function(){function n(t,i){Na||n.register(Ie)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Dg(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!vu){this.update=this.refresh=this.kill=Sr;return}i=Zx(wi(i)||yu(i)||i.nodeType?{trigger:i}:i,af);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,x=s.onSnapComplete,v=s.once,S=s.snap,C=s.pinReparent,T=s.pinSpacer,M=s.containerAnimation,b=s.fastScrollEnd,N=s.preventOverlaps,y=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Qn:cn,E=!f&&f!==0,I=si(i.scroller||ft),B=Ie.core.getCache(I),G=Zo(I),$=("pinType"in i?i.pinType:Ys(I,"pinType")||G&&"fixed")==="fixed",H=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],j=E&&i.toggleActions.split(" "),D="markers"in i?i.markers:af.markers,K=G?0:parseFloat(Gi(I)["border"+y.p2+Cl])||0,P=this,ie=i.onRefreshInit&&function(){return i.onRefreshInit(P)},Te=t2(I,G,y),Ge=n2(I,G),Y=0,Q=0,ge=0,ue=eo(I,y),Oe,Ue,de,ce,me,L,pe,_e,ae,U,ve,xe,R,w,V,J,ne,q,Le,le,oe,Ye,se,Re,De,We,Pe,Ze,$e,ut,F,re,Z,te,ye,Se,Je,Mt,Nt;if(P._startClamp=P._endClamp=!1,P._dir=y,m*=45,P.scroller=I,P.scroll=M?M.time.bind(M):ue,ce=ue(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(qw=1,i.refreshPriority===-9999&&(Wu=P)),B.tweenScroll=B.tweenScroll||{top:ry(I,cn),left:ry(I,Qn)},P.tweenTo=Oe=B.tweenScroll[y.p],P.scrubDuration=function(Ae){Z=yu(Ae)&&Ae,Z?re?re.duration(Ae):re=Ie.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Z,paused:!0,onComplete:function(){return p&&p(P)}}):(re&&re.progress(1).kill(),re=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(f),ut=0,l||(l=r.vars.id)),S&&((!Mo(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in Lt.style&&Ie.set(G?[Lt,ur]:I,{scrollBehavior:"auto"}),st.forEach(function(Ae){return ei(Ae)&&Ae.target===(G?kt.scrollingElement||ur:I)&&(Ae.smooth=!1)}),de=ei(S.snapTo)?S.snapTo:S.snapTo==="labels"?r2(r):S.snapTo==="labelsDirectional"?s2(r):S.directional!==!1?function(Ae,Xe){return j_(S.snapTo)(Ae,On()-Q<500?0:Xe.direction)}:Ie.utils.snap(S.snapTo),te=S.duration||{min:.1,max:2},te=Mo(te)?zu(te.min,te.max):zu(te,te),ye=Ie.delayedCall(S.delay||Z/2||.1,function(){var Ae=ue(),Xe=On()-Q<500,He=Oe.tween;if((Xe||Math.abs(P.getVelocity())<10)&&!He&&!Ud&&Y!==Ae){var Ke=(Ae-L)/w,qt=r&&!E?r.totalProgress():Ke,Qe=Xe?0:(qt-F)/(On()-_u)*1e3||0,It=Ie.utils.clamp(-Ke,1-Ke,ca(Qe/2)*Qe/.185),Kt=Ke+(S.inertia===!1?0:It),bt,wt,vt=S,_i=vt.onStart,Rt=vt.onInterrupt,A=vt.onComplete;if(bt=de(Kt,P),yu(bt)||(bt=Kt),wt=Math.round(L+bt*w),Ae<=pe&&Ae>=L&&wt!==Ae){if(He&&!He._initted&&He.data<=ca(wt-Ae))return;S.inertia===!1&&(It=bt-Ke),Oe(wt,{duration:te(ca(Math.max(ca(Kt-qt),ca(bt-qt))*.185/Qe/.05||0)),ease:S.ease||"power3",data:ca(wt-Ae),onInterrupt:function(){return ye.restart(!0)&&Rt&&Rt(P)},onComplete:function(){P.update(),Y=ue(),r&&(re?re.resetTo("totalProgress",bt,r._tTime/r._tDur):r.progress(bt)),ut=F=r&&!E?r.totalProgress():P.progress,x&&x(P),A&&A(P)}},Ae,It*w,wt-Ae-It*w),_i&&_i(P,Oe.tween)}}else P.isActive&&Y!==Ae&&ye.restart(!0)}).pause()),l&&(Ig[l]=P),h=P.trigger=si(h||d!==!0&&d),Nt=h&&h._gsap&&h._gsap.stRevert,Nt&&(Nt=Nt(P)),d=d===!0?h:si(d),wi(a)&&(a={targets:h,className:a}),d&&(g===!1||g===Vi||(g=!g&&d.parentNode&&d.parentNode.style&&Gi(d.parentNode).display==="flex"?!1:nn),P.pin=d,Ue=Ie.core.getCache(d),Ue.spacer?V=Ue.pinState:(T&&(T=si(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Ue.spacerIsNative=!!T,T&&(Ue.spacerState=uf(T))),Ue.spacer=q=T||kt.createElement("div"),q.classList.add("pin-spacer"),l&&q.classList.add("pin-spacer-"+l),Ue.pinState=V=uf(d)),i.force3D!==!1&&Ie.set(d,{force3D:!0}),P.spacer=q=Ue.spacer,$e=Gi(d),Re=$e[g+y.os2],le=Ie.getProperty(d),oe=Ie.quickSetter(d,y.a,ln),Np(d,q,$e),ne=uf(d)),D){xe=Mo(D)?Zx(D,Jx):Jx,U=lf("scroller-start",l,I,y,xe,0),ve=lf("scroller-end",l,I,y,xe,0,U),Le=U["offset"+y.op.d2];var rt=si(Ys(I,"content")||I);_e=this.markerStart=lf("start",l,rt,y,xe,Le,0,M),ae=this.markerEnd=lf("end",l,rt,y,xe,Le,0,M),M&&(Mt=Ie.quickSetter([_e,ae],y.a,ln)),!$&&!(Dr.length&&Ys(I,"fixedMarkers")===!0)&&(i2(G?Lt:I),Ie.set([U,ve],{force3D:!0}),We=Ie.quickSetter(U,y.a,ln),Ze=Ie.quickSetter(ve,y.a,ln))}if(M){var Be=M.vars.onUpdate,Fe=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){P.update(0,0,1),Be&&Be.apply(M,Fe||[])})}if(P.previous=function(){return nt[nt.indexOf(P)-1]},P.next=function(){return nt[nt.indexOf(P)+1]},P.revert=function(Ae,Xe){if(!Xe)return P.kill(!0);var He=Ae!==!1||!P.enabled,Ke=Un;He!==P.isReverted&&(He&&(Se=Math.max(ue(),P.scroll.rec||0),ge=P.progress,Je=r&&r.progress()),_e&&[_e,ae,U,ve].forEach(function(qt){return qt.style.display=He?"none":"block"}),He&&(Un=P,P.update(He)),d&&(!C||!P.isActive)&&(He?l2(d,q,V):Np(d,q,Gi(d),De)),He||P.update(He),Un=Ke,P.isReverted=He)},P.refresh=function(Ae,Xe,He,Ke){if(!((Un||!P.enabled)&&!Xe)){if(d&&Ae&&Ki){vn(n,"scrollEnd",oE);return}!Kn&&ie&&ie(P),Un=P,Oe.tween&&!He&&(Oe.tween.kill(),Oe.tween=0),re&&re.pause(),_&&r&&r.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var qt=Te(),Qe=Ge(),It=M?M.duration():Cr(I,y),Kt=w<=.01,bt=0,wt=Ke||0,vt=Mo(He)?He.end:i.end,_i=i.endTrigger||h,Rt=Mo(He)?He.start:i.start||(i.start===0||!h?0:d?"0 0":"0 100%"),A=P.pinnedContainer=i.pinnedContainer&&si(i.pinnedContainer,P),z=h&&Math.max(0,nt.indexOf(P))||0,W=z,X,k,he,be,we,Me,ze,je,ke,ct,at,St,mn;for(D&&Mo(He)&&(St=Ie.getProperty(U,y.p),mn=Ie.getProperty(ve,y.p));W--;)Me=nt[W],Me.end||Me.refresh(0,1)||(Un=P),ze=Me.pin,ze&&(ze===h||ze===d||ze===A)&&!Me.isReverted&&(ct||(ct=[]),ct.unshift(Me),Me.revert(!0,!0)),Me!==nt[W]&&(z--,W--);for(ei(Rt)&&(Rt=Rt(P)),Rt=Yx(Rt,"start",P),L=ny(Rt,h,qt,y,ue(),_e,U,P,Qe,K,$,It,M,P._startClamp&&"_startClamp")||(d?-.001:0),ei(vt)&&(vt=vt(P)),wi(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(wi(Rt)?Rt.split(" ")[0]:"")+vt:(bt=ch(vt.substr(2),qt),vt=wi(Rt)?Rt:(M?Ie.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,L):L)+bt,_i=h)),vt=Yx(vt,"end",P),pe=Math.max(L,ny(vt||(_i?"100% 0":It),_i,qt,y,ue()+bt,ae,ve,P,Qe,K,$,It,M,P._endClamp&&"_endClamp"))||-.001,bt=0,W=z;W--;)Me=nt[W],ze=Me.pin,ze&&Me.start-Me._pinPush<=L&&!M&&Me.end>0&&(X=Me.end-(P._startClamp?Math.max(0,Me.start):Me.start),(ze===h&&Me.start-Me._pinPush<L||ze===A)&&isNaN(Rt)&&(bt+=X*(1-Me.progress)),ze===d&&(wt+=X));if(L+=bt,pe+=bt,P._startClamp&&(P._startClamp+=bt),P._endClamp&&!Kn&&(P._endClamp=pe||-.001,pe=Math.min(pe,Cr(I,y))),w=pe-L||(L-=.01)&&.001,Kt&&(ge=Ie.utils.clamp(0,1,Ie.utils.normalize(L,pe,Se))),P._pinPush=wt,_e&&bt&&(X={},X[y.a]="+="+bt,A&&(X[y.p]="-="+ue()),Ie.set([_e,ae],X)),d&&!(Ng&&P.end>=Cr(I,y)))X=Gi(d),be=y===cn,he=ue(),Ye=parseFloat(le(y.a))+wt,!It&&pe>1&&(at=(G?kt.scrollingElement||ur:I).style,at={style:at,value:at["overflow"+y.a.toUpperCase()]},G&&Gi(Lt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(at.style["overflow"+y.a.toUpperCase()]="scroll")),Np(d,q,X),ne=uf(d),k=Kr(d,!0),je=$&&eo(I,be?Qn:cn)(),g?(De=[g+y.os2,w+wt+ln],De.t=q,W=g===nn?rd(d,y)+w+wt:0,W&&(De.push(y.d,W+ln),q.style.flexBasis!=="auto"&&(q.style.flexBasis=W+ln)),cl(De),A&&nt.forEach(function(lt){lt.pin===A&&lt.vars.pinSpacing!==!1&&(lt._subPinOffset=!0)}),$&&ue(Se)):(W=rd(d,y),W&&q.style.flexBasis!=="auto"&&(q.style.flexBasis=W+ln)),$&&(we={top:k.top+(be?he-L:je)+ln,left:k.left+(be?je:he-L)+ln,boxSizing:"border-box",position:"fixed"},we[Ho]=we["max"+Cl]=Math.ceil(k.width)+ln,we[Vo]=we["max"+X_]=Math.ceil(k.height)+ln,we[Vi]=we[Vi+Vu]=we[Vi+Bu]=we[Vi+Gu]=we[Vi+Hu]="0",we[nn]=X[nn],we[nn+Vu]=X[nn+Vu],we[nn+Bu]=X[nn+Bu],we[nn+Gu]=X[nn+Gu],we[nn+Hu]=X[nn+Hu],J=c2(V,we,C),Kn&&ue(0)),r?(ke=r._initted,bp(1),r.render(r.duration(),!0,!0),se=le(y.a)-Ye+w+wt,Pe=Math.abs(w-se)>1,$&&Pe&&J.splice(J.length-2,2),r.render(0,!0,!0),ke||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),bp(0)):se=w,at&&(at.value?at.style["overflow"+y.a.toUpperCase()]=at.value:at.style.removeProperty("overflow-"+y.a));else if(h&&ue()&&!M)for(k=h.parentNode;k&&k!==Lt;)k._pinOffset&&(L-=k._pinOffset,pe-=k._pinOffset),k=k.parentNode;ct&&ct.forEach(function(lt){return lt.revert(!1,!0)}),P.start=L,P.end=pe,ce=me=Kn?Se:ue(),!M&&!Kn&&(ce<Se&&ue(Se),P.scroll.rec=0),P.revert(!1,!0),Q=On(),ye&&(Y=-1,ye.restart(!0)),Un=0,r&&E&&(r._initted||Je)&&r.progress()!==Je&&r.progress(Je||0,!0).render(r.time(),!0,!0),(Kt||ge!==P.progress||M||_)&&(r&&!E&&r.totalProgress(M&&L<-.001&&!ge?Ie.utils.normalize(L,pe,0):ge,!0),P.progress=Kt||(ce-L)/w===ge?0:ge),d&&g&&(q._pinOffset=Math.round(P.progress*se)),re&&re.invalidate(),isNaN(St)||(St-=Ie.getProperty(U,y.p),mn-=Ie.getProperty(ve,y.p),cf(U,y,St),cf(_e,y,St-(Ke||0)),cf(ve,y,mn),cf(ae,y,mn-(Ke||0))),Kt&&!Kn&&P.update(),c&&!Kn&&!R&&(R=!0,c(P),R=!1)}},P.getVelocity=function(){return(ue()-me)/(On()-_u)*1e3||0},P.endAnimation=function(){Jl(P.callbackAnimation),r&&(re?re.progress(1):r.paused()?E||Jl(r,P.direction<0,1):Jl(r,r.reversed()))},P.labelToScroll=function(Ae){return r&&r.labels&&(L||P.refresh()||L)+r.labels[Ae]/r.duration()*w||0},P.getTrailing=function(Ae){var Xe=nt.indexOf(P),He=P.direction>0?nt.slice(0,Xe).reverse():nt.slice(Xe+1);return(wi(Ae)?He.filter(function(Ke){return Ke.vars.preventOverlaps===Ae}):He).filter(function(Ke){return P.direction>0?Ke.end<=L:Ke.start>=pe})},P.update=function(Ae,Xe,He){if(!(M&&!He&&!Ae)){var Ke=Kn===!0?Se:P.scroll(),qt=Ae?0:(Ke-L)/w,Qe=qt<0?0:qt>1?1:qt||0,It=P.progress,Kt,bt,wt,vt,_i,Rt,A,z;if(Xe&&(me=ce,ce=M?ue():Ke,S&&(F=ut,ut=r&&!E?r.totalProgress():Qe)),m&&d&&!Un&&!nf&&Ki&&(!Qe&&L<Ke+(Ke-me)/(On()-_u)*m?Qe=1e-4:Qe===1&&pe>Ke+(Ke-me)/(On()-_u)*m&&(Qe=.9999)),Qe!==It&&P.enabled){if(Kt=P.isActive=!!Qe&&Qe<1,bt=!!It&&It<1,Rt=Kt!==bt,_i=Rt||!!Qe!=!!It,P.direction=Qe>It?1:-1,P.progress=Qe,_i&&!Un&&(wt=Qe&&!It?0:Qe===1?1:It===1?2:3,E&&(vt=!Rt&&j[wt+1]!=="none"&&j[wt+1]||j[wt],z=r&&(vt==="complete"||vt==="reset"||vt in r))),N&&(Rt||z)&&(z||f||!r)&&(ei(N)?N(P):P.getTrailing(N).forEach(function(he){return he.endAnimation()})),E||(re&&!Un&&!nf?(re._dp._time-re._start!==re._time&&re.render(re._dp._time-re._start),re.resetTo?re.resetTo("totalProgress",Qe,r._tTime/r._tDur):(re.vars.totalProgress=Qe,re.invalidate().restart())):r&&r.totalProgress(Qe,!!(Un&&(Q||Ae)))),d){if(Ae&&g&&(q.style[g+y.os2]=Re),!$)oe(xu(Ye+se*Qe));else if(_i){if(A=!Ae&&Qe>It&&pe+1>Ke&&Ke+1>=Cr(I,y),C)if(!Ae&&(Kt||A)){var W=Kr(d,!0),X=Ke-L;iy(d,Lt,W.top+(y===cn?X:0)+ln,W.left+(y===cn?0:X)+ln)}else iy(d,q);cl(Kt||A?J:ne),Pe&&Qe<1&&Kt||oe(Ye+(Qe===1&&!A?se:0))}}S&&!Oe.tween&&!Un&&!nf&&ye.restart(!0),a&&(Rt||v&&Qe&&(Qe<1||!Rp))&&yc(a.targets).forEach(function(he){return he.classList[Kt||v?"add":"remove"](a.className)}),o&&!E&&!Ae&&o(P),_i&&!Un?(E&&(z&&(vt==="complete"?r.pause().totalProgress(1):vt==="reset"?r.restart(!0).pause():vt==="restart"?r.restart(!0):r[vt]()),o&&o(P)),(Rt||!Rp)&&(u&&Rt&&Lp(P,u),H[wt]&&Lp(P,H[wt]),v&&(Qe===1?P.kill(!1,1):H[wt]=0),Rt||(wt=Qe===1?1:3,H[wt]&&Lp(P,H[wt]))),b&&!Kt&&Math.abs(P.getVelocity())>(yu(b)?b:2500)&&(Jl(P.callbackAnimation),re?re.progress(1):Jl(r,vt==="reverse"?1:!Qe,1))):E&&o&&!Un&&o(P)}if(Ze){var k=M?Ke/M.duration()*(M._caScrollDist||0):Ke;We(k+(U._isFlipped?1:0)),Ze(k)}Mt&&Mt(-Ke/M.duration()*(M._caScrollDist||0))}},P.enable=function(Ae,Xe){P.enabled||(P.enabled=!0,vn(I,"resize",Su),G||vn(I,"scroll",fa),ie&&vn(n,"refreshInit",ie),Ae!==!1&&(P.progress=ge=0,ce=me=Y=ue()),Xe!==!1&&P.refresh())},P.getTween=function(Ae){return Ae&&Oe?Oe.tween:re},P.setPositions=function(Ae,Xe,He,Ke){if(M){var qt=M.scrollTrigger,Qe=M.duration(),It=qt.end-qt.start;Ae=qt.start+It*Ae/Qe,Xe=qt.start+It*Xe/Qe}P.refresh(!1,!1,{start:$x(Ae,He&&!!P._startClamp),end:$x(Xe,He&&!!P._endClamp)},Ke),P.update()},P.adjustPinSpacing=function(Ae){if(De&&Ae){var Xe=De.indexOf(y.d)+1;De[Xe]=parseFloat(De[Xe])+Ae+ln,De[1]=parseFloat(De[1])+Ae+ln,cl(De)}},P.disable=function(Ae,Xe){if(P.enabled&&(Ae!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Xe||re&&re.pause(),Se=0,Ue&&(Ue.uncache=1),ie&&_n(n,"refreshInit",ie),ye&&(ye.pause(),Oe.tween&&Oe.tween.kill()&&(Oe.tween=0)),!G)){for(var He=nt.length;He--;)if(nt[He].scroller===I&&nt[He]!==P)return;_n(I,"resize",Su),G||_n(I,"scroll",fa)}},P.kill=function(Ae,Xe){P.disable(Ae,Xe),re&&!Xe&&re.kill(),l&&delete Ig[l];var He=nt.indexOf(P);He>=0&&nt.splice(He,1),He===qn&&hh>0&&qn--,He=0,nt.forEach(function(Ke){return Ke.scroller===P.scroller&&(He=1)}),He||Kn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,Ae&&r.revert({kill:!1}),Xe||r.kill()),_e&&[_e,ae,U,ve].forEach(function(Ke){return Ke.parentNode&&Ke.parentNode.removeChild(Ke)}),Wu===P&&(Wu=0),d&&(Ue&&(Ue.uncache=1),He=0,nt.forEach(function(Ke){return Ke.pin===d&&He++}),He||(Ue.spacer=0)),i.onKill&&i.onKill(P)},nt.push(P),P.enable(!1,!1),Nt&&Nt(P),r&&r.add&&!w){var pt=P.update;P.update=function(){P.update=pt,L||pe||P.refresh()},Ie.delayedCall(.01,P.update),w=.01,L=pe=0}else P.refresh();d&&a2()},n.register=function(i){return Na||(Ie=i||eE(),Qw()&&window.document&&n.enable(),Na=vu),Na},n.defaults=function(i){if(i)for(var r in i)af[r]=i[r];return af},n.disable=function(i,r){vu=0,nt.forEach(function(o){return o[r?"kill":"disable"](i)}),_n(ft,"wheel",fa),_n(kt,"scroll",fa),clearInterval(tf),_n(kt,"touchcancel",Sr),_n(Lt,"touchstart",Sr),sf(_n,kt,"pointerdown,touchstart,mousedown",qx),sf(_n,kt,"pointerup,touchend,mouseup",Kx),nd.kill(),rf(_n);for(var s=0;s<st.length;s+=3)of(_n,st[s],st[s+1]),of(_n,st[s],st[s+2])},n.enable=function(){if(ft=window,kt=document,ur=kt.documentElement,Lt=kt.body,Ie&&(yc=Ie.utils.toArray,zu=Ie.utils.clamp,Dg=Ie.core.context||Sr,bp=Ie.core.suppressOverwrites||Sr,H_=ft.history.scrollRestoration||"auto",Ug=ft.pageYOffset,Ie.core.globals("ScrollTrigger",n),Lt)){vu=1,ul=document.createElement("div"),ul.style.height="100vh",ul.style.position="absolute",uE(),e2(),en.register(Ie),n.isTouch=en.isTouch,ws=en.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Lg=en.isTouch===1,vn(ft,"wheel",fa),$w=[ft,kt,ur,Lt],Ie.matchMedia?(n.matchMedia=function(l){var u=Ie.matchMedia(),c;for(c in l)u.add(c,l[c]);return u},Ie.addEventListener("matchMediaInit",function(){return Y_()}),Ie.addEventListener("matchMediaRevert",function(){return aE()}),Ie.addEventListener("matchMedia",function(){Lo(0,1),Qo("matchMedia")}),Ie.matchMedia("(orientation: portrait)",function(){return Dp(),Dp})):console.warn("Requires GSAP 3.11.0 or later"),Dp(),vn(kt,"scroll",fa);var i=Lt.style,r=i.borderTopStyle,s=Ie.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Kr(Lt),cn.m=Math.round(o.top+cn.sc())||0,Qn.m=Math.round(o.left+Qn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),tf=setInterval(Qx,250),Ie.delayedCall(.5,function(){return nf=0}),vn(kt,"touchcancel",Sr),vn(Lt,"touchstart",Sr),sf(vn,kt,"pointerdown,touchstart,mousedown",qx),sf(vn,kt,"pointerup,touchend,mouseup",Kx),Pg=Ie.utils.checkPrefix("transform"),dh.push(Pg),Na=On(),nd=Ie.delayedCall(.2,Lo).pause(),Ia=[kt,"visibilitychange",function(){var l=ft.innerWidth,u=ft.innerHeight;kt.hidden?(Xx=l,jx=u):(Xx!==l||jx!==u)&&Su()},kt,"DOMContentLoaded",Lo,ft,"load",Lo,ft,"resize",Su],rf(vn),nt.forEach(function(l){return l.enable(0,1)}),a=0;a<st.length;a+=3)of(_n,st[a],st[a+1]),of(_n,st[a],st[a+2])}},n.config=function(i){"limitCallbacks"in i&&(Rp=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(tf)||(tf=r)&&setInterval(Qx,r),"ignoreMobileResize"in i&&(Lg=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(rf(_n)||rf(vn,i.autoRefreshEvents||"none"),Kw=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=si(i),o=st.indexOf(s),a=Zo(s);~o&&st.splice(o,a?6:2),r&&(a?Dr.unshift(ft,r,Lt,r,ur,r):Dr.unshift(s,r))},n.clearMatchMedia=function(i){nt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(wi(i)?si(i):i).getBoundingClientRect(),a=o[s?Ho:Vo]*r||0;return s?o.right-a>0&&o.left+a<ft.innerWidth:o.bottom-a>0&&o.top+a<ft.innerHeight},n.positionInViewport=function(i,r,s){wi(i)&&(i=si(i));var o=i.getBoundingClientRect(),a=o[s?Ho:Vo],l=r==null?a/2:r in sd?sd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ft.innerWidth:(o.top+l)/ft.innerHeight},n.killAll=function(i){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Jo.killAll||[];Jo={},r.forEach(function(s){return s()})}},n}();it.version="3.12.5";it.saveStyles=function(n){return n?yc(n).forEach(function(e){if(e&&e.style){var t=Si.indexOf(e);t>=0&&Si.splice(t,5),Si.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ie.core.getCache(e),Dg())}}):Si};it.revert=function(n,e){return Y_(!n,e)};it.create=function(n,e){return new it(n,e)};it.refresh=function(n){return n?Su():(Na||it.register())&&Lo(!0)};it.update=function(n){return++st.cache&&is(n===!0?2:0)};it.clearScrollMemory=lE;it.maxScroll=function(n,e){return Cr(n,e?Qn:cn)};it.getScrollFunc=function(n,e){return eo(si(n),e?Qn:cn)};it.getById=function(n){return Ig[n]};it.getAll=function(){return nt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!Ki};it.snapDirectional=j_;it.addEventListener=function(n,e){var t=Jo[n]||(Jo[n]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(n,e){var t=Jo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};it.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var f=[],h=[],d=Ie.delayedCall(r,function(){c(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&ei(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return ei(s)&&(s=s(),vn(it,"refresh",function(){return s=e.batchMax()})),yc(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(it.create(u))}),t};var sy=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Ip=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(en.isTouch?" pinch-zoom":""):"none",e===ur&&n(Lt,t)},ff={auto:1,scroll:1},h2=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ie.core.getCache(s),a=On(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Lt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ff[(l=Gi(s)).overflowY]||ff[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Zo(s)&&(ff[(l=Gi(s)).overflowY]||ff[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},fE=function(e,t,i,r){return en.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&h2,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&vn(kt,en.eventTypes[0],ay,!1,!0)},onDisable:function(){return _n(kt,en.eventTypes[0],ay,!0)}})},d2=/(input|label|select|textarea)/i,oy,ay=function(e){var t=d2.test(e.target.tagName);(t||oy)&&(e._gsapAllow=!0,oy=t)},p2=function(e){Mo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=si(e.target)||ur,c=Ie.core.globals().ScrollSmoother,f=c&&c.get(),h=ws&&(e.content&&si(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=eo(u,cn),g=eo(u,Qn),_=1,m=(en.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,p=0,x=ei(r)?function(){return r(a)}:function(){return r||2.8},v,S,C=fE(u,e.type,!0,s),T=function(){return S=!1},M=Sr,b=Sr,N=function(){l=Cr(u,cn),b=zu(ws?1:0,l),i&&(M=zu(0,Cr(u,Qn))),v=Go},y=function(){h._gsap.y=xu(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},E=function(){if(S){requestAnimationFrame(T);var D=xu(a.deltaY/2),K=b(d.v-D);if(h&&K!==d.v+d.offset){d.offset=K-d.v;var P=xu((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",d.cacheID=st.cache,is()}return!0}d.offset&&y(),S=!0},I,B,G,$,H=function(){N(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return h&&Ie.set(h,{y:"+=0"}),e.ignoreCheck=function(j){return ws&&j.type==="touchmove"&&E()||_>1.05&&j.type!=="touchstart"||a.isGesturing||j.touches&&j.touches.length>1},e.onPress=function(){S=!1;var j=_;_=xu((ft.visualViewport&&ft.visualViewport.scale||1)/m),I.pause(),j!==_&&Ip(u,_>1.01?!0:i?!1:"x"),B=g(),G=d(),N(),v=Go},e.onRelease=e.onGestureStart=function(j,D){if(d.offset&&y(),!D)$.restart(!0);else{st.cache++;var K=x(),P,ie;i&&(P=g(),ie=P+K*.05*-j.velocityX/.227,K*=sy(g,P,ie,Cr(u,Qn)),I.vars.scrollX=M(ie)),P=d(),ie=P+K*.05*-j.velocityY/.227,K*=sy(d,P,ie,Cr(u,cn)),I.vars.scrollY=b(ie),I.invalidate().duration(K).play(.01),(ws&&I.vars.scrollY>=l||P>=l-1)&&Ie.to({},{onUpdate:H,duration:K})}o&&o(j)},e.onWheel=function(){I._ts&&I.pause(),On()-p>1e3&&(v=0,p=On())},e.onChange=function(j,D,K,P,ie){if(Go!==v&&N(),D&&i&&g(M(P[2]===D?B+(j.startX-j.x):g()+D-P[1])),K){d.offset&&y();var Te=ie[2]===K,Ge=Te?G+j.startY-j.y:d()+K-ie[1],Y=b(Ge);Te&&Ge!==Y&&(G+=Y-Ge),d(Y)}(K||D)&&is()},e.onEnable=function(){Ip(u,i?!1:"x"),it.addEventListener("refresh",H),vn(ft,"resize",H),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){Ip(u,!0),_n(ft,"resize",H),it.removeEventListener("refresh",H),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new en(e),a.iOS=ws,ws&&!d()&&d(1),ws&&Ie.ticker.add(Sr),$=a._dc,I=Ie.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:cE(d,d(),function(){return I.pause()})},onUpdate:is,onComplete:$.vars.onComplete}),a};it.sort=function(n){return nt.sort(n||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};it.observe=function(n){return new en(n)};it.normalizeScroll=function(n){if(typeof n>"u")return Yn;if(n===!0&&Yn)return Yn.enable();if(n===!1){Yn&&Yn.kill(),Yn=n;return}var e=n instanceof en?n:p2(n);return Yn&&Yn.target===e.target&&Yn.kill(),Zo(e.target)&&(Yn=e),e};it.core={_getVelocityProp:Rg,_inputObserver:fE,_scrollers:st,_proxies:Dr,bridge:{ss:function(){Ki||Qo("scrollStart"),Ki=On()},ref:function(){return Un}}};eE()&&Ie.registerPlugin(it);const m2="/assets/car-cutout-DtVux-mX.webp";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $_="169",g2=0,ly=1,_2=2,hE=1,v2=2,Wr=3,to=0,ni=1,Zr=2,rs=0,fl=1,Do=2,uy=3,cy=4,x2=5,To=100,y2=101,S2=102,M2=103,w2=104,E2=200,T2=201,A2=202,C2=203,Fg=204,kg=205,b2=206,R2=207,P2=208,L2=209,D2=210,N2=211,I2=212,U2=213,O2=214,zg=0,Bg=1,Hg=2,bl=3,Vg=4,Gg=5,Wg=6,Xg=7,q_=0,F2=1,k2=2,$s=0,dE=1,pE=2,mE=3,K_=4,z2=5,gE=6,_E=7,vE=300,Rl=301,Pl=302,jg=303,Yg=304,Od=306,od=1e3,No=1001,$g=1002,li=1003,B2=1004,hf=1005,fr=1006,Up=1007,Io=1008,ds=1009,xE=1010,yE=1011,Mc=1012,Z_=1013,ea=1014,br=1015,ss=1016,J_=1017,Q_=1018,Ll=1020,SE=35902,ME=1021,wE=1022,dr=1023,EE=1024,TE=1025,hl=1026,Dl=1027,ev=1028,tv=1029,AE=1030,nv=1031,iv=1033,mh=33776,gh=33777,_h=33778,vh=33779,qg=35840,Kg=35841,Zg=35842,Jg=35843,Qg=36196,e0=37492,t0=37496,n0=37808,i0=37809,r0=37810,s0=37811,o0=37812,a0=37813,l0=37814,u0=37815,c0=37816,f0=37817,h0=37818,d0=37819,p0=37820,m0=37821,xh=36492,g0=36494,_0=36495,CE=36283,v0=36284,x0=36285,y0=36286,H2=3200,V2=3201,bE=0,G2=1,bs="",ki="srgb",oo="srgb-linear",rv="display-p3",Fd="display-p3-linear",ad="linear",Tt="srgb",ld="rec709",ud="p3",ha=7680,fy=519,W2=512,X2=513,j2=514,RE=515,Y2=516,$2=517,q2=518,K2=519,S0=35044,hy="300 es",ts=2e3,cd=2001;class zl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dy=1234567;const Xu=Math.PI/180,wc=180/Math.PI;function Nr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]).toLowerCase()}function Tn(n,e,t){return Math.max(e,Math.min(t,n))}function sv(n,e){return(n%e+e)%e}function Z2(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function J2(n,e,t){return n!==e?(t-n)/(e-n):0}function ju(n,e,t){return(1-t)*n+t*e}function Q2(n,e,t,i){return ju(n,e,1-Math.exp(-t*i))}function eR(n,e=1){return e-Math.abs(sv(n,e*2)-e)}function tR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function nR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function iR(n,e){return n+Math.floor(Math.random()*(e-n+1))}function rR(n,e){return n+Math.random()*(e-n)}function sR(n){return n*(.5-Math.random())}function oR(n){n!==void 0&&(dy=n);let e=dy+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function aR(n){return n*Xu}function lR(n){return n*wc}function uR(n){return(n&n-1)===0&&n!==0}function cR(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fR(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hR(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*f,l*h,a*u);break;case"YZY":n.set(l*h,a*c,l*f,a*u);break;case"ZXZ":n.set(l*f,l*h,a*c,a*u);break;case"XZX":n.set(a*c,l*g,l*d,a*u);break;case"YXY":n.set(l*d,a*c,l*g,a*u);break;case"ZYZ":n.set(l*g,l*d,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const df={DEG2RAD:Xu,RAD2DEG:wc,generateUUID:Nr,clamp:Tn,euclideanModulo:sv,mapLinear:Z2,inverseLerp:J2,lerp:ju,damp:Q2,pingpong:eR,smoothstep:tR,smootherstep:nR,randInt:iR,randFloat:rR,randFloatSpread:sR,seededRandom:oR,degToRad:aR,radToDeg:lR,isPowerOfTwo:uR,ceilPowerOfTwo:cR,floorPowerOfTwo:fR,setQuaternionFromProperEuler:hR,normalize:xt,denormalize:hr};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,i,r,s,o,a,l,u){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],x=r[1],v=r[4],S=r[7],C=r[2],T=r[5],M=r[8];return s[0]=o*_+a*x+l*C,s[3]=o*m+a*v+l*T,s[6]=o*p+a*S+l*M,s[1]=u*_+c*x+f*C,s[4]=u*m+c*v+f*T,s[7]=u*p+c*S+f*M,s[2]=h*_+d*x+g*C,s[5]=h*m+d*v+g*T,s[8]=h*p+d*S+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,d=u*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Op.makeScale(e,t)),this}rotate(e){return this.premultiply(Op.makeRotation(-e)),this}translate(e,t){return this.premultiply(Op.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Op=new tt;function PE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ec(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dR(){const n=Ec("canvas");return n.style.display="block",n}const py={};function yh(n){n in py||(py[n]=!0,console.warn(n))}function pR(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function mR(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gR(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const my=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gy=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ql={[oo]:{transfer:ad,primaries:ld,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ki]:{transfer:Tt,primaries:ld,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Fd]:{transfer:ad,primaries:ud,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(gy),fromReference:n=>n.applyMatrix3(my)},[rv]:{transfer:Tt,primaries:ud,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(gy),fromReference:n=>n.applyMatrix3(my).convertLinearToSRGB()}},_R=new Set([oo,Fd]),gt={enabled:!0,_workingColorSpace:oo,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!_R.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ql[e].toReference,r=Ql[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ql[n].primaries},getTransfer:function(n){return n===bs?ad:Ql[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Ql[e].luminanceCoefficients)}};function dl(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fp(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let da;class vR{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{da===void 0&&(da=Ec("canvas")),da.width=e.width,da.height=e.height;const i=da.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=da}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ec("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=dl(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(dl(t[i]/255)*255):t[i]=dl(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xR=0;class LE{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xR++}),this.uuid=Nr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(kp(r[o].image)):s.push(kp(r[o]))}else s=kp(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function kp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yR=0;class Rn extends zl{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,i=No,r=No,s=fr,o=Io,a=dr,l=ds,u=Rn.DEFAULT_ANISOTROPY,c=bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yR++}),this.uuid=Nr(),this.name="",this.source=new LE(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case od:e.x=e.x-Math.floor(e.x);break;case No:e.x=e.x<0?0:1;break;case $g:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case od:e.y=e.y-Math.floor(e.y);break;case No:e.y=e.y<0?0:1;break;case $g:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=vE;Rn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,i=0,r=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,S=(d+1)/2,C=(p+1)/2,T=(c+h)/4,M=(f+_)/4,b=(g+m)/4;return v>S&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=M/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=M/s,r=b/s),this.set(i,r,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-_)/x,this.z=(h-c)/x,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SR extends zl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new LE(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gr extends SR{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class DE extends Rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=li,this.minFilter=li,this.wrapR=No,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class MR extends Rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=li,this.minFilter=li,this.wrapR=No,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||u!==d||c!==g){let m=1-a;const p=l*h+u*d+c*g+f*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const C=Math.sqrt(v),T=Math.atan2(C,p*x);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const S=a*x;if(l=l*m+h*S,u=u*m+d*S,c=c*m+g*S,f=f*m+_*S,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=C,u*=C,c*=C,f*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+c*f+l*d-u*h,e[t+1]=l*g+c*h+u*f-a*d,e[t+2]=u*g+c*d+a*h-l*f,e[t+3]=c*g-a*f-l*h-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f-h*d*g;break;case"YXZ":this._x=h*c*f+u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f+h*d*g;break;case"ZXY":this._x=h*c*f-u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f-h*d*g;break;case"ZYX":this._x=h*c*f-u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f+h*d*g;break;case"YZX":this._x=h*c*f+u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f-h*d*g;break;case"XZY":this._x=h*c*f-u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(c-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(c-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_y.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_y.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zp.copy(this).projectOnVector(e),this.sub(zp)}reflect(e){return this.sub(zp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zp=new O,_y=new qs;class sa{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,nr):nr.fromBufferAttribute(s,o),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pf.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pf.copy(i.boundingBox)),pf.applyMatrix4(e.matrixWorld),this.union(pf)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eu),mf.subVectors(this.max,eu),pa.subVectors(e.a,eu),ma.subVectors(e.b,eu),ga.subVectors(e.c,eu),_s.subVectors(ma,pa),vs.subVectors(ga,ma),co.subVectors(pa,ga);let t=[0,-_s.z,_s.y,0,-vs.z,vs.y,0,-co.z,co.y,_s.z,0,-_s.x,vs.z,0,-vs.x,co.z,0,-co.x,-_s.y,_s.x,0,-vs.y,vs.x,0,-co.y,co.x,0];return!Bp(t,pa,ma,ga,mf)||(t=[1,0,0,0,1,0,0,0,1],!Bp(t,pa,ma,ga,mf))?!1:(gf.crossVectors(_s,vs),t=[gf.x,gf.y,gf.z],Bp(t,pa,ma,ga,mf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fr=[new O,new O,new O,new O,new O,new O,new O,new O],nr=new O,pf=new sa,pa=new O,ma=new O,ga=new O,_s=new O,vs=new O,co=new O,eu=new O,mf=new O,gf=new O,fo=new O;function Bp(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){fo.fromArray(n,s);const a=r.x*Math.abs(fo.x)+r.y*Math.abs(fo.y)+r.z*Math.abs(fo.z),l=e.dot(fo),u=t.dot(fo),c=i.dot(fo);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const wR=new sa,tu=new O,Hp=new O;class oa{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tu.subVectors(e,this.center);const t=tu.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(tu,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tu.copy(e.center).add(Hp)),this.expandByPoint(tu.copy(e.center).sub(Hp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kr=new O,Vp=new O,_f=new O,xs=new O,Gp=new O,vf=new O,Wp=new O;class ov{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kr.copy(this.origin).addScaledVector(this.direction,t),kr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Vp.copy(e).add(t).multiplyScalar(.5),_f.copy(t).sub(e).normalize(),xs.copy(this.origin).sub(Vp);const s=e.distanceTo(t)*.5,o=-this.direction.dot(_f),a=xs.dot(this.direction),l=-xs.dot(_f),u=xs.lengthSq(),c=Math.abs(1-o*o);let f,h,d,g;if(c>0)if(f=o*l-a,h=o*a-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const _=1/c;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Vp).addScaledVector(_f,h),d}intersectSphere(e,t){kr.subVectors(e.center,this.origin);const i=kr.dot(this.direction),r=kr.dot(kr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,kr)!==null}intersectTriangle(e,t,i,r,s){Gp.subVectors(t,e),vf.subVectors(i,e),Wp.crossVectors(Gp,vf);let o=this.direction.dot(Wp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xs.subVectors(this.origin,e);const l=a*this.direction.dot(vf.crossVectors(xs,vf));if(l<0)return null;const u=a*this.direction.dot(Gp.cross(xs));if(u<0||l+u>o)return null;const c=-a*xs.dot(Wp);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,o,a,l,u,c,f,h,d,g,_,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,d,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/_a.setFromMatrixColumn(e,0).length(),s=1/_a.setFromMatrixColumn(e,1).length(),o=1/_a.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,d=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=d+g*u,t[5]=h-_*u,t[9]=-a*l,t[2]=_-h*u,t[6]=g+d*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,d=l*f,g=u*c,_=u*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,d=l*f,g=u*c,_=u*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*c,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,d=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=g*u-d,t[8]=h*u+_,t[1]=l*f,t[5]=_*u+h,t[9]=d*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+_,t[5]=o*c,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*c,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ER,e,TR)}lookAt(e,t,i){const r=this.elements;return xi.subVectors(e,t),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),ys.crossVectors(i,xi),ys.lengthSq()===0&&(Math.abs(i.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),ys.crossVectors(i,xi)),ys.normalize(),xf.crossVectors(xi,ys),r[0]=ys.x,r[4]=xf.x,r[8]=xi.x,r[1]=ys.y,r[5]=xf.y,r[9]=xi.y,r[2]=ys.z,r[6]=xf.z,r[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],x=i[3],v=i[7],S=i[11],C=i[15],T=r[0],M=r[4],b=r[8],N=r[12],y=r[1],E=r[5],I=r[9],B=r[13],G=r[2],$=r[6],H=r[10],j=r[14],D=r[3],K=r[7],P=r[11],ie=r[15];return s[0]=o*T+a*y+l*G+u*D,s[4]=o*M+a*E+l*$+u*K,s[8]=o*b+a*I+l*H+u*P,s[12]=o*N+a*B+l*j+u*ie,s[1]=c*T+f*y+h*G+d*D,s[5]=c*M+f*E+h*$+d*K,s[9]=c*b+f*I+h*H+d*P,s[13]=c*N+f*B+h*j+d*ie,s[2]=g*T+_*y+m*G+p*D,s[6]=g*M+_*E+m*$+p*K,s[10]=g*b+_*I+m*H+p*P,s[14]=g*N+_*B+m*j+p*ie,s[3]=x*T+v*y+S*G+C*D,s[7]=x*M+v*E+S*$+C*K,s[11]=x*b+v*I+S*H+C*P,s[15]=x*N+v*B+S*j+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*d-i*l*d)+_*(+t*l*d-t*u*h+s*o*h-r*o*d+r*u*c-s*l*c)+m*(+t*u*f-t*a*d-s*o*f+i*o*d+s*a*c-i*u*c)+p*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=f*m*u-_*h*u+_*l*d-a*m*d-f*l*p+a*h*p,v=g*h*u-c*m*u-g*l*d+o*m*d+c*l*p-o*h*p,S=c*_*u-g*f*u+g*a*d-o*_*d-c*a*p+o*f*p,C=g*f*l-c*_*l-g*a*h+o*_*h+c*a*m-o*f*m,T=t*x+i*v+r*S+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=x*M,e[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*M,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*p+i*l*p)*M,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*d-i*l*d)*M,e[4]=v*M,e[5]=(c*m*s-g*h*s+g*r*d-t*m*d-c*r*p+t*h*p)*M,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*p-t*l*p)*M,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*d+t*l*d)*M,e[8]=S*M,e[9]=(g*f*s-c*_*s-g*i*d+t*_*d+c*i*p-t*f*p)*M,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*p+t*a*p)*M,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*d-t*a*d)*M,e[12]=C*M,e[13]=(c*_*r-g*f*r+g*i*h-t*_*h-c*i*m+t*f*m)*M,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*M,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,d=s*c,g=s*f,_=o*c,m=o*f,p=a*f,x=l*u,v=l*c,S=l*f,C=i.x,T=i.y,M=i.z;return r[0]=(1-(_+p))*C,r[1]=(d+S)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(d-S)*T,r[5]=(1-(h+p))*T,r[6]=(m+x)*T,r[7]=0,r[8]=(g+v)*M,r[9]=(m-x)*M,r[10]=(1-(h+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=_a.set(r[0],r[1],r[2]).length();const o=_a.set(r[4],r[5],r[6]).length(),a=_a.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ir.copy(this);const u=1/s,c=1/o,f=1/a;return ir.elements[0]*=u,ir.elements[1]*=u,ir.elements[2]*=u,ir.elements[4]*=c,ir.elements[5]*=c,ir.elements[6]*=c,ir.elements[8]*=f,ir.elements[9]*=f,ir.elements[10]*=f,t.setFromRotationMatrix(ir),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ts){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(a===ts)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===cd)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ts){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,d=(i+r)*c;let g,_;if(a===ts)g=(o+s)*f,_=-2*f;else if(a===cd)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const _a=new O,ir=new ht,ER=new O(0,0,0),TR=new O(1,1,1),ys=new O,xf=new O,xi=new O,vy=new ht,xy=new qs;class Ur{constructor(e=0,t=0,i=0,r=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vy,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xy.setFromEuler(this),this.setFromQuaternion(xy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class NE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AR=0;const yy=new O,va=new qs,zr=new ht,yf=new O,nu=new O,CR=new O,bR=new qs,Sy=new O(1,0,0),My=new O(0,1,0),wy=new O(0,0,1),Ey={type:"added"},RR={type:"removed"},xa={type:"childadded",child:null},Xp={type:"childremoved",child:null};class an extends zl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AR++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new O,t=new Ur,i=new qs,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new tt}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new NE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return va.setFromAxisAngle(e,t),this.quaternion.multiply(va),this}rotateOnWorldAxis(e,t){return va.setFromAxisAngle(e,t),this.quaternion.premultiply(va),this}rotateX(e){return this.rotateOnAxis(Sy,e)}rotateY(e){return this.rotateOnAxis(My,e)}rotateZ(e){return this.rotateOnAxis(wy,e)}translateOnAxis(e,t){return yy.copy(e).applyQuaternion(this.quaternion),this.position.add(yy.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sy,e)}translateY(e){return this.translateOnAxis(My,e)}translateZ(e){return this.translateOnAxis(wy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?yf.copy(e):yf.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),nu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zr.lookAt(nu,yf,this.up):zr.lookAt(yf,nu,this.up),this.quaternion.setFromRotationMatrix(zr),r&&(zr.extractRotation(r.matrixWorld),va.setFromRotationMatrix(zr),this.quaternion.premultiply(va.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ey),xa.child=e,this.dispatchEvent(xa),xa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(RR),Xp.child=e,this.dispatchEvent(Xp),Xp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zr.multiply(e.parent.matrixWorld)),e.applyMatrix4(zr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ey),xa.child=e,this.dispatchEvent(xa),xa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nu,e,CR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nu,bR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new O(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rr=new O,Br=new O,jp=new O,Hr=new O,ya=new O,Sa=new O,Ty=new O,Yp=new O,$p=new O,qp=new O,Kp=new Yt,Zp=new Yt,Jp=new Yt;class Xi{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),rr.subVectors(e,t),r.cross(rr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){rr.subVectors(r,t),Br.subVectors(i,t),jp.subVectors(e,t);const o=rr.dot(rr),a=rr.dot(Br),l=rr.dot(jp),u=Br.dot(Br),c=Br.dot(jp),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Hr)===null?!1:Hr.x>=0&&Hr.y>=0&&Hr.x+Hr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Hr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hr.x),l.addScaledVector(o,Hr.y),l.addScaledVector(a,Hr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Kp.setScalar(0),Zp.setScalar(0),Jp.setScalar(0),Kp.fromBufferAttribute(e,t),Zp.fromBufferAttribute(e,i),Jp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Kp,s.x),o.addScaledVector(Zp,s.y),o.addScaledVector(Jp,s.z),o}static isFrontFacing(e,t,i,r){return rr.subVectors(i,t),Br.subVectors(e,t),rr.cross(Br).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rr.subVectors(this.c,this.b),Br.subVectors(this.a,this.b),rr.cross(Br).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Xi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ya.subVectors(r,i),Sa.subVectors(s,i),Yp.subVectors(e,i);const l=ya.dot(Yp),u=Sa.dot(Yp);if(l<=0&&u<=0)return t.copy(i);$p.subVectors(e,r);const c=ya.dot($p),f=Sa.dot($p);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(ya,o);qp.subVectors(e,s);const d=ya.dot(qp),g=Sa.dot(qp);if(g>=0&&d<=g)return t.copy(s);const _=d*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(Sa,a);const m=c*g-d*f;if(m<=0&&f-c>=0&&d-g>=0)return Ty.subVectors(s,r),a=(f-c)/(f-c+(d-g)),t.copy(r).addScaledVector(Ty,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(ya,o).addScaledVector(Sa,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const IE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},Sf={h:0,s:0,l:0};function Qp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ki){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=sv(e,1),t=Tn(t,0,1),i=Tn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Qp(o,s,e+1/3),this.g=Qp(o,s,e),this.b=Qp(o,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,t=ki){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ki){const i=IE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dl(e.r),this.g=dl(e.g),this.b=dl(e.b),this}copyLinearToSRGB(e){return this.r=Fp(e.r),this.g=Fp(e.g),this.b=Fp(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ki){return gt.fromWorkingColorSpace(In.copy(this),e),Math.round(Tn(In.r*255,0,255))*65536+Math.round(Tn(In.g*255,0,255))*256+Math.round(Tn(In.b*255,0,255))}getHexString(e=ki){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(In.copy(this),t);const i=In.r,r=In.g,s=In.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=ki){gt.fromWorkingColorSpace(In.copy(this),e);const t=In.r,i=In.g,r=In.b;return e!==ki?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+t,Ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ss),e.getHSL(Sf);const i=ju(Ss.h,Sf.h,t),r=ju(Ss.s,Sf.s,t),s=ju(Ss.l,Sf.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new qe;qe.NAMES=IE;let PR=0;class ao extends zl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PR++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=fl,this.side=to,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fg,this.blendDst=kg,this.blendEquation=To,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ha,this.stencilZFail=ha,this.stencilZPass=ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fl&&(i.blending=this.blending),this.side!==to&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fg&&(i.blendSrc=this.blendSrc),this.blendDst!==kg&&(i.blendDst=this.blendDst),this.blendEquation!==To&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fy&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ha&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ha&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ha&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Mr extends ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=q_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new O,Mf=new Ee;class Cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=S0,this.updateRanges=[],this.gpuType=br,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mf.fromBufferAttribute(this,t),Mf.applyMatrix3(e),this.setXY(t,Mf.x,Mf.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),r=xt(r,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==S0&&(e.usage=this.usage),e}}class UE extends Cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class OE extends Cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ft extends Cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let LR=0;const Oi=new ht,em=new an,Ma=new O,yi=new sa,iu=new sa,gn=new O;class on extends zl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LR++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(PE(e)?OE:UE)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,i){return Oi.makeTranslation(e,t,i),this.applyMatrix4(Oi),this}scale(e,t,i){return Oi.makeScale(e,t,i),this.applyMatrix4(Oi),this}lookAt(e){return em.lookAt(e),em.updateMatrix(),this.applyMatrix4(em.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ma).negate(),this.translate(Ma.x,Ma.y,Ma.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];yi.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];iu.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(yi.min,iu.min),yi.expandByPoint(gn),gn.addVectors(yi.max,iu.max),yi.expandByPoint(gn)):(yi.expandByPoint(iu.min),yi.expandByPoint(iu.max))}yi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)gn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)gn.fromBufferAttribute(a,u),l&&(Ma.fromBufferAttribute(e,u),gn.add(Ma)),r=Math.max(r,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new O,l[b]=new O;const u=new O,c=new O,f=new O,h=new Ee,d=new Ee,g=new Ee,_=new O,m=new O;function p(b,N,y){u.fromBufferAttribute(i,b),c.fromBufferAttribute(i,N),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,b),d.fromBufferAttribute(s,N),g.fromBufferAttribute(s,y),c.sub(u),f.sub(u),d.sub(h),g.sub(h);const E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(E),m.copy(f).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(E),a[b].add(_),a[N].add(_),a[y].add(_),l[b].add(m),l[N].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let b=0,N=x.length;b<N;++b){const y=x[b],E=y.start,I=y.count;for(let B=E,G=E+I;B<G;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new O,S=new O,C=new O,T=new O;function M(b){C.fromBufferAttribute(r,b),T.copy(C);const N=a[b];v.copy(N),v.sub(C.multiplyScalar(C.dot(N))).normalize(),S.crossVectors(T,N);const E=S.dot(l[b])<0?-1:1;o.setXYZW(b,v.x,v.y,v.z,E)}for(let b=0,N=x.length;b<N;++b){const y=x[b],E=y.start,I=y.count;for(let B=E,G=E+I;B<G;B+=3)M(e.getX(B+0)),M(e.getX(B+1)),M(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,u=new O,c=new O,f=new O;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*c;for(let p=0;p<c;p++)h[g++]=u[d++]}return new Cn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const d=u[f];c.push(d.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,d=f.length;h<d;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ay=new ht,ho=new ov,wf=new oa,Cy=new O,Ef=new O,Tf=new O,Af=new O,tm=new O,Cf=new O,by=new O,bf=new O;class fn extends an{constructor(e=new on,t=new Mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Cf.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(tm.fromBufferAttribute(f,e),o?Cf.addScaledVector(tm,c):Cf.addScaledVector(tm.sub(t),c))}t.add(Cf)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wf.copy(i.boundingSphere),wf.applyMatrix4(s),ho.copy(e.ray).recast(e.near),!(wf.containsPoint(ho.origin)===!1&&(ho.intersectSphere(wf,Cy)===null||ho.origin.distanceToSquared(Cy)>(e.far-e.near)**2))&&(Ay.copy(s).invert(),ho.copy(e.ray).applyMatrix4(Ay),!(i.boundingBox!==null&&ho.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ho)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=x,C=v;S<C;S+=3){const T=a.getX(S),M=a.getX(S+1),b=a.getX(S+2);r=Rf(this,p,e,i,u,c,f,T,M,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=Rf(this,o,e,i,u,c,f,x,v,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=x,C=v;S<C;S+=3){const T=S,M=S+1,b=S+2;r=Rf(this,p,e,i,u,c,f,T,M,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=m,v=m+1,S=m+2;r=Rf(this,o,e,i,u,c,f,x,v,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function DR(n,e,t,i,r,s,o,a){let l;if(e.side===ni?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===to,a),l===null)return null;bf.copy(a),bf.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(bf);return u<t.near||u>t.far?null:{distance:u,point:bf.clone(),object:n}}function Rf(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Ef),n.getVertexPosition(l,Tf),n.getVertexPosition(u,Af);const c=DR(n,e,t,i,Ef,Tf,Af,by);if(c){const f=new O;Xi.getBarycoord(by,Ef,Tf,Af,f),r&&(c.uv=Xi.getInterpolatedAttribute(r,a,l,u,f,new Ee)),s&&(c.uv1=Xi.getInterpolatedAttribute(s,a,l,u,f,new Ee)),o&&(c.normal=Xi.getInterpolatedAttribute(o,a,l,u,f,new O),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new O,materialIndex:0};Xi.getNormal(Ef,Tf,Af,h.normal),c.face=h,c.barycoord=f}return c}class zi extends on{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(f,2));function g(_,m,p,x,v,S,C,T,M,b,N){const y=S/M,E=C/b,I=S/2,B=C/2,G=T/2,$=M+1,H=b+1;let j=0,D=0;const K=new O;for(let P=0;P<H;P++){const ie=P*E-B;for(let Te=0;Te<$;Te++){const Ge=Te*y-I;K[_]=Ge*x,K[m]=ie*v,K[p]=G,u.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=T>0?1:-1,c.push(K.x,K.y,K.z),f.push(Te/M),f.push(1-P/b),j+=1}}for(let P=0;P<b;P++)for(let ie=0;ie<M;ie++){const Te=h+ie+$*P,Ge=h+ie+$*(P+1),Y=h+(ie+1)+$*(P+1),Q=h+(ie+1)+$*P;l.push(Te,Ge,Q),l.push(Ge,Y,Q),D+=6}a.addGroup(d,D,N),d+=D,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function jn(n){const e={};for(let t=0;t<n.length;t++){const i=Nl(n[t]);for(const r in i)e[r]=i[r]}return e}function NR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function FE(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Tc={clone:Nl,merge:jn};var IR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ht extends ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IR,this.fragmentShader=UR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nl(e.uniforms),this.uniformsGroups=NR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class kE extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=ts}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ms=new O,Ry=new Ee,Py=new Ee;class Wi extends kE{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wc*2*Math.atan(Math.tan(Xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z)}getViewSize(e,t){return this.getViewBounds(e,Ry,Py),t.subVectors(Py,Ry)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wa=-90,Ea=1;class OR extends an{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wi(wa,Ea,e,t);r.layers=this.layers,this.add(r);const s=new Wi(wa,Ea,e,t);s.layers=this.layers,this.add(s);const o=new Wi(wa,Ea,e,t);o.layers=this.layers,this.add(o);const a=new Wi(wa,Ea,e,t);a.layers=this.layers,this.add(a);const l=new Wi(wa,Ea,e,t);l.layers=this.layers,this.add(l);const u=new Wi(wa,Ea,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===ts)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cd)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class zE extends Rn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Rl,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class FR extends gr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zE(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new zi(5,5,5),s=new Ht({name:"CubemapFromEquirect",uniforms:Nl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:rs});s.uniforms.tEquirect.value=t;const o=new fn(r,s),a=t.minFilter;return t.minFilter===Io&&(t.minFilter=fr),new OR(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const nm=new O,kR=new O,zR=new tt;class wo{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=nm.subVectors(i,t).cross(kR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(nm),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zR.getNormalMatrix(e),r=this.coplanarPoint(nm).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const po=new oa,Pf=new O;class av{constructor(e=new wo,t=new wo,i=new wo,r=new wo,s=new wo,o=new wo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ts){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-u,m-d,S-p).normalize(),i[1].setComponents(l+s,h+u,m+d,S+p).normalize(),i[2].setComponents(l+o,h+c,m+g,S+x).normalize(),i[3].setComponents(l-o,h-c,m-g,S-x).normalize(),i[4].setComponents(l-a,h-f,m-_,S-v).normalize(),t===ts)i[5].setComponents(l+a,h+f,m+_,S+v).normalize();else if(t===cd)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),po.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),po.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(po)}intersectsSprite(e){return po.center.set(0,0,0),po.radius=.7071067811865476,po.applyMatrix4(e.matrixWorld),this.intersectsSphere(po)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Pf.x=r.normal.x>0?e.max.x:e.min.x,Pf.y=r.normal.y>0?e.max.y:e.min.y,Pf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function BE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function BR(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let d;if(u instanceof Float32Array)d=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=n.SHORT;else if(u instanceof Uint32Array)d=n.UNSIGNED_INT;else if(u instanceof Int32Array)d=n.INT;else if(u instanceof Int8Array)d=n.BYTE;else if(u instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Os extends on{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const x=p*h-o;for(let v=0;v<u;v++){const S=v*f-s;g.push(S,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const v=x+u*p,S=x+u*(p+1),C=x+1+u*(p+1),T=x+1+u*p;d.push(v,S,T),d.push(S,C,T)}this.setIndex(d),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.widthSegments,e.heightSegments)}}var HR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$R=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,KR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_P="gl_FragColor = linearToOutputTexel( gl_FragColor );",vP=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,EP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,RP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,NP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,IP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GP=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$P=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nL=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sL=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uL=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mL=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_L=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ML=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,EL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,TL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RL=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IL=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$L=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,KL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,a3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,f3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,m3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,v3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:HR,alphahash_pars_fragment:VR,alphamap_fragment:GR,alphamap_pars_fragment:WR,alphatest_fragment:XR,alphatest_pars_fragment:jR,aomap_fragment:YR,aomap_pars_fragment:$R,batching_pars_vertex:qR,batching_vertex:KR,begin_vertex:ZR,beginnormal_vertex:JR,bsdfs:QR,iridescence_fragment:eP,bumpmap_pars_fragment:tP,clipping_planes_fragment:nP,clipping_planes_pars_fragment:iP,clipping_planes_pars_vertex:rP,clipping_planes_vertex:sP,color_fragment:oP,color_pars_fragment:aP,color_pars_vertex:lP,color_vertex:uP,common:cP,cube_uv_reflection_fragment:fP,defaultnormal_vertex:hP,displacementmap_pars_vertex:dP,displacementmap_vertex:pP,emissivemap_fragment:mP,emissivemap_pars_fragment:gP,colorspace_fragment:_P,colorspace_pars_fragment:vP,envmap_fragment:xP,envmap_common_pars_fragment:yP,envmap_pars_fragment:SP,envmap_pars_vertex:MP,envmap_physical_pars_fragment:NP,envmap_vertex:wP,fog_vertex:EP,fog_pars_vertex:TP,fog_fragment:AP,fog_pars_fragment:CP,gradientmap_pars_fragment:bP,lightmap_pars_fragment:RP,lights_lambert_fragment:PP,lights_lambert_pars_fragment:LP,lights_pars_begin:DP,lights_toon_fragment:IP,lights_toon_pars_fragment:UP,lights_phong_fragment:OP,lights_phong_pars_fragment:FP,lights_physical_fragment:kP,lights_physical_pars_fragment:zP,lights_fragment_begin:BP,lights_fragment_maps:HP,lights_fragment_end:VP,logdepthbuf_fragment:GP,logdepthbuf_pars_fragment:WP,logdepthbuf_pars_vertex:XP,logdepthbuf_vertex:jP,map_fragment:YP,map_pars_fragment:$P,map_particle_fragment:qP,map_particle_pars_fragment:KP,metalnessmap_fragment:ZP,metalnessmap_pars_fragment:JP,morphinstance_vertex:QP,morphcolor_vertex:eL,morphnormal_vertex:tL,morphtarget_pars_vertex:nL,morphtarget_vertex:iL,normal_fragment_begin:rL,normal_fragment_maps:sL,normal_pars_fragment:oL,normal_pars_vertex:aL,normal_vertex:lL,normalmap_pars_fragment:uL,clearcoat_normal_fragment_begin:cL,clearcoat_normal_fragment_maps:fL,clearcoat_pars_fragment:hL,iridescence_pars_fragment:dL,opaque_fragment:pL,packing:mL,premultiplied_alpha_fragment:gL,project_vertex:_L,dithering_fragment:vL,dithering_pars_fragment:xL,roughnessmap_fragment:yL,roughnessmap_pars_fragment:SL,shadowmap_pars_fragment:ML,shadowmap_pars_vertex:wL,shadowmap_vertex:EL,shadowmask_pars_fragment:TL,skinbase_vertex:AL,skinning_pars_vertex:CL,skinning_vertex:bL,skinnormal_vertex:RL,specularmap_fragment:PL,specularmap_pars_fragment:LL,tonemapping_fragment:DL,tonemapping_pars_fragment:NL,transmission_fragment:IL,transmission_pars_fragment:UL,uv_pars_fragment:OL,uv_pars_vertex:FL,uv_vertex:kL,worldpos_vertex:zL,background_vert:BL,background_frag:HL,backgroundCube_vert:VL,backgroundCube_frag:GL,cube_vert:WL,cube_frag:XL,depth_vert:jL,depth_frag:YL,distanceRGBA_vert:$L,distanceRGBA_frag:qL,equirect_vert:KL,equirect_frag:ZL,linedashed_vert:JL,linedashed_frag:QL,meshbasic_vert:e3,meshbasic_frag:t3,meshlambert_vert:n3,meshlambert_frag:i3,meshmatcap_vert:r3,meshmatcap_frag:s3,meshnormal_vert:o3,meshnormal_frag:a3,meshphong_vert:l3,meshphong_frag:u3,meshphysical_vert:c3,meshphysical_frag:f3,meshtoon_vert:h3,meshtoon_frag:d3,points_vert:p3,points_frag:m3,shadow_vert:g3,shadow_frag:_3,sprite_vert:v3,sprite_frag:x3},Ce={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},wr={basic:{uniforms:jn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:jn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:jn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:jn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:jn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:jn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:jn([Ce.points,Ce.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:jn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:jn([Ce.common,Ce.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:jn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:jn([Ce.sprite,Ce.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:jn([Ce.common,Ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:jn([Ce.lights,Ce.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};wr.physical={uniforms:jn([wr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Lf={r:0,b:0,g:0},mo=new Ur,y3=new ht;function S3(n,e,t,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,u,c,f=null,h=0,d=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const S=g(x);S===null?p(a,l):S&&S.isColor&&(p(S,1),v=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===Od)?(c===void 0&&(c=new fn(new zi(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Nl(wr.backgroundCube.uniforms),vertexShader:wr.backgroundCube.vertexShader,fragmentShader:wr.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),mo.copy(v.backgroundRotation),mo.x*=-1,mo.y*=-1,mo.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(mo.y*=-1,mo.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(y3.makeRotationFromEuler(mo)),c.material.toneMapped=gt.getTransfer(S.colorSpace)!==Tt,(f!==S||h!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new fn(new Os(2,2),new Ht({name:"BackgroundMaterial",uniforms:Nl(wr.background.uniforms),vertexShader:wr.background.vertexShader,fragmentShader:wr.background.fragmentShader,side:to,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=gt.getTransfer(S.colorSpace)!==Tt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,d=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function p(x,v){x.getRGB(Lf,FE(n)),i.buffers.color.setClear(Lf.r,Lf.g,Lf.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m}}function M3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,E,I,B,G){let $=!1;const H=f(B,I,E);s!==H&&(s=H,u(s.object)),$=d(y,B,I,G),$&&g(y,B,I,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(y,E,I,B),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function u(y){return n.bindVertexArray(y)}function c(y){return n.deleteVertexArray(y)}function f(y,E,I){const B=I.wireframe===!0;let G=i[y.id];G===void 0&&(G={},i[y.id]=G);let $=G[E.id];$===void 0&&($={},G[E.id]=$);let H=$[B];return H===void 0&&(H=h(l()),$[B]=H),H}function h(y){const E=[],I=[],B=[];for(let G=0;G<t;G++)E[G]=0,I[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:I,attributeDivisors:B,object:y,attributes:{},index:null}}function d(y,E,I,B){const G=s.attributes,$=E.attributes;let H=0;const j=I.getAttributes();for(const D in j)if(j[D].location>=0){const P=G[D];let ie=$[D];if(ie===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),P===void 0||P.attribute!==ie||ie&&P.data!==ie.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function g(y,E,I,B){const G={},$=E.attributes;let H=0;const j=I.getAttributes();for(const D in j)if(j[D].location>=0){let P=$[D];P===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(P=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(P=y.instanceColor));const ie={};ie.attribute=P,P&&P.data&&(ie.data=P.data),G[D]=ie,H++}s.attributes=G,s.attributesNum=H,s.index=B}function _(){const y=s.newAttributes;for(let E=0,I=y.length;E<I;E++)y[E]=0}function m(y){p(y,0)}function p(y,E){const I=s.newAttributes,B=s.enabledAttributes,G=s.attributeDivisors;I[y]=1,B[y]===0&&(n.enableVertexAttribArray(y),B[y]=1),G[y]!==E&&(n.vertexAttribDivisor(y,E),G[y]=E)}function x(){const y=s.newAttributes,E=s.enabledAttributes;for(let I=0,B=E.length;I<B;I++)E[I]!==y[I]&&(n.disableVertexAttribArray(I),E[I]=0)}function v(y,E,I,B,G,$,H){H===!0?n.vertexAttribIPointer(y,E,I,G,$):n.vertexAttribPointer(y,E,I,B,G,$)}function S(y,E,I,B){_();const G=B.attributes,$=I.getAttributes(),H=E.defaultAttributeValues;for(const j in $){const D=$[j];if(D.location>=0){let K=G[j];if(K===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){const P=K.normalized,ie=K.itemSize,Te=e.get(K);if(Te===void 0)continue;const Ge=Te.buffer,Y=Te.type,Q=Te.bytesPerElement,ge=Y===n.INT||Y===n.UNSIGNED_INT||K.gpuType===Z_;if(K.isInterleavedBufferAttribute){const ue=K.data,Oe=ue.stride,Ue=K.offset;if(ue.isInstancedInterleavedBuffer){for(let de=0;de<D.locationSize;de++)p(D.location+de,ue.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let de=0;de<D.locationSize;de++)m(D.location+de);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let de=0;de<D.locationSize;de++)v(D.location+de,ie/D.locationSize,Y,P,Oe*Q,(Ue+ie/D.locationSize*de)*Q,ge)}else{if(K.isInstancedBufferAttribute){for(let ue=0;ue<D.locationSize;ue++)p(D.location+ue,K.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ue=0;ue<D.locationSize;ue++)m(D.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let ue=0;ue<D.locationSize;ue++)v(D.location+ue,ie/D.locationSize,Y,P,ie*Q,ie/D.locationSize*ue*Q,ge)}}else if(H!==void 0){const P=H[j];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(D.location,P);break;case 3:n.vertexAttrib3fv(D.location,P);break;case 4:n.vertexAttrib4fv(D.location,P);break;default:n.vertexAttrib1fv(D.location,P)}}}}x()}function C(){b();for(const y in i){const E=i[y];for(const I in E){const B=E[I];for(const G in B)c(B[G].object),delete B[G];delete E[I]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const I in E){const B=E[I];for(const G in B)c(B[G].object),delete B[G];delete E[I]}delete i[y.id]}function M(y){for(const E in i){const I=i[E];if(I[y.id]===void 0)continue;const B=I[y.id];for(const G in B)c(B[G].object),delete B[G];delete I[y.id]}}function b(){N(),o=!0,s!==r&&(s=r,u(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function w3(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let d=0;for(let g=0;g<f;g++)d+=c[g];t.update(d,i,1)}function l(u,c,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u.length;g++)o(u[g],c[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_];for(let _=0;_<h.length;_++)t.update(g,i,h[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function E3(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==dr&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const b=M===ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==ds&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==br&&!b)}function l(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:C,maxSamples:T}}function T3(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new wo,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const x=s?0:i,v=x*4;let S=p.clippingState||null;l.value=S,S=c(g,h,v,d);for(let C=0;C!==v;++C)S[C]=t[C];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=d;v!==_;++v,S+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function A3(n){let e=new WeakMap;function t(o,a){return a===jg?o.mapping=Rl:a===Yg&&(o.mapping=Pl),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===jg||a===Yg)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new FR(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class lv extends kE{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Za=4,Ly=[.125,.215,.35,.446,.526,.582],Ao=20,im=new lv,Dy=new qe;let rm=null,sm=0,om=0,am=!1;const Eo=(1+Math.sqrt(5))/2,Ta=1/Eo,Ny=[new O(-Eo,Ta,0),new O(Eo,Ta,0),new O(-Ta,0,Eo),new O(Ta,0,Eo),new O(0,Eo,-Ta),new O(0,Eo,Ta),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Iy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){rm=this._renderer.getRenderTarget(),sm=this._renderer.getActiveCubeFace(),om=this._renderer.getActiveMipmapLevel(),am=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rm,sm,om),this._renderer.xr.enabled=am,e.scissorTest=!1,Df(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rl||e.mapping===Pl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rm=this._renderer.getRenderTarget(),sm=this._renderer.getActiveCubeFace(),om=this._renderer.getActiveMipmapLevel(),am=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fr,minFilter:fr,generateMipmaps:!1,type:ss,format:dr,colorSpace:oo,depthBuffer:!1},r=Uy(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uy(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C3(s)),this._blurMaterial=b3(s,e,t)}return r}_compileMaterial(e){const t=new fn(this._lodPlanes[0],e);this._renderer.compile(t,im)}_sceneToCubeUV(e,t,i,r){const a=new Wi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Dy),c.toneMapping=$s,c.autoClear=!1;const d=new Mr({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1}),g=new fn(new zi,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Dy),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const v=this._cubeSize;Df(r,x*v,p>2?v:0,v,v),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Rl||e.mapping===Pl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oy());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Df(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,im)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ny[(r-s-1)%Ny.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new fn(this._lodPlanes[r],u),h=u.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ao-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):Ao;m>Ao&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ao}`);const p=[];let x=0;for(let M=0;M<Ao;++M){const b=M/_,N=Math.exp(-b*b/2);p.push(N),M===0?x+=N:M<m&&(x+=2*N)}for(let M=0;M<p.length;M++)p[M]=p[M]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const S=this._sizeLods[r],C=3*S*(r>v-Za?r-v+Za:0),T=4*(this._cubeSize-S);Df(t,C,T,3*S,2*S),l.setRenderTarget(t),l.render(f,im)}}function C3(n){const e=[],t=[],i=[];let r=n;const s=n-Za+1+Ly.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Za?l=Ly[o-n+Za-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],d=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*d),v=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let T=0;T<d;T++){const M=T%3*2/3-1,b=T>2?0:-1,N=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];x.set(N,_*g*T),v.set(h,m*g*T);const y=[T,T,T,T,T,T];S.set(y,p*g*T)}const C=new on;C.setAttribute("position",new Cn(x,_)),C.setAttribute("uv",new Cn(v,m)),C.setAttribute("faceIndex",new Cn(S,p)),e.push(C),r>Za&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Uy(n,e,t){const i=new gr(n,e,t);return i.texture.mapping=Od,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Df(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function b3(n,e,t){const i=new Float32Array(Ao),r=new O(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:Ao,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Oy(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Fy(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function uv(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R3(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===jg||l===Yg,c=l===Rl||l===Pl;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Iy(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return u&&d&&d.height>0||c&&d&&r(d)?(t===null&&(t=new Iy(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function P3(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&yh("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function L3(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,S=x.length;v<S;v+=3){const C=x[v+0],T=x[v+1],M=x[v+2];h.push(C,T,T,M,M,C)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const C=v+0,T=v+1,M=v+2;h.push(C,T,T,M,M,C)}}else return;const m=new(PE(h)?OE:UE)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function c(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function D3(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function u(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),t.update(d,i,g))}function c(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)u(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x];for(let x=0;x<_.length;x++)t.update(p,i,_[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function N3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function I3(n,e,t){const i=new WeakMap,r=new Yt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let y=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var d=y;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const M=new Float32Array(C*T*4*f),b=new DE(M,C,T,f);b.type=br,b.needsUpdate=!0;const N=S*4;for(let E=0;E<f;E++){const I=p[E],B=x[E],G=v[E],$=C*T*4*E;for(let H=0;H<I.count;H++){const j=H*N;g===!0&&(r.fromBufferAttribute(I,H),M[$+j+0]=r.x,M[$+j+1]=r.y,M[$+j+2]=r.z,M[$+j+3]=0),_===!0&&(r.fromBufferAttribute(B,H),M[$+j+4]=r.x,M[$+j+5]=r.y,M[$+j+6]=r.z,M[$+j+7]=0),m===!0&&(r.fromBufferAttribute(G,H),M[$+j+8]=r.x,M[$+j+9]=r.y,M[$+j+10]=r.z,M[$+j+11]=G.itemSize===4?r.w:1)}}h={count:f,texture:b,size:new Ee(C,T)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function U3(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class HE extends Rn{constructor(e,t,i,r,s,o,a,l,u,c=hl){if(c!==hl&&c!==Dl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===hl&&(i=ea),i===void 0&&c===Dl&&(i=Ll),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:li,this.minFilter=l!==void 0?l:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const VE=new Rn,ky=new HE(1,1),GE=new DE,WE=new MR,XE=new zE,zy=[],By=[],Hy=new Float32Array(16),Vy=new Float32Array(9),Gy=new Float32Array(4);function Bl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=zy[r];if(s===void 0&&(s=new Float32Array(r),zy[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function kd(n,e){let t=By[e];t===void 0&&(t=new Int32Array(e),By[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function O3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function F3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function k3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function z3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function B3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;Gy.set(i),n.uniformMatrix2fv(this.addr,!1,Gy),pn(t,i)}}function H3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;Vy.set(i),n.uniformMatrix3fv(this.addr,!1,Vy),pn(t,i)}}function V3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;Hy.set(i),n.uniformMatrix4fv(this.addr,!1,Hy),pn(t,i)}}function G3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function W3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function X3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function j3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function Y3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function q3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function K3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function Z3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ky.compareFunction=RE,s=ky):s=VE,t.setTexture2D(e||s,r)}function J3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||WE,r)}function Q3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||XE,r)}function eD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||GE,r)}function tD(n){switch(n){case 5126:return O3;case 35664:return F3;case 35665:return k3;case 35666:return z3;case 35674:return B3;case 35675:return H3;case 35676:return V3;case 5124:case 35670:return G3;case 35667:case 35671:return W3;case 35668:case 35672:return X3;case 35669:case 35673:return j3;case 5125:return Y3;case 36294:return $3;case 36295:return q3;case 36296:return K3;case 35678:case 36198:case 36298:case 36306:case 35682:return Z3;case 35679:case 36299:case 36307:return J3;case 35680:case 36300:case 36308:case 36293:return Q3;case 36289:case 36303:case 36311:case 36292:return eD}}function nD(n,e){n.uniform1fv(this.addr,e)}function iD(n,e){const t=Bl(e,this.size,2);n.uniform2fv(this.addr,t)}function rD(n,e){const t=Bl(e,this.size,3);n.uniform3fv(this.addr,t)}function sD(n,e){const t=Bl(e,this.size,4);n.uniform4fv(this.addr,t)}function oD(n,e){const t=Bl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function aD(n,e){const t=Bl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function lD(n,e){const t=Bl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uD(n,e){n.uniform1iv(this.addr,e)}function cD(n,e){n.uniform2iv(this.addr,e)}function fD(n,e){n.uniform3iv(this.addr,e)}function hD(n,e){n.uniform4iv(this.addr,e)}function dD(n,e){n.uniform1uiv(this.addr,e)}function pD(n,e){n.uniform2uiv(this.addr,e)}function mD(n,e){n.uniform3uiv(this.addr,e)}function gD(n,e){n.uniform4uiv(this.addr,e)}function _D(n,e,t){const i=this.cache,r=e.length,s=kd(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||VE,s[o])}function vD(n,e,t){const i=this.cache,r=e.length,s=kd(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||WE,s[o])}function xD(n,e,t){const i=this.cache,r=e.length,s=kd(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||XE,s[o])}function yD(n,e,t){const i=this.cache,r=e.length,s=kd(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||GE,s[o])}function SD(n){switch(n){case 5126:return nD;case 35664:return iD;case 35665:return rD;case 35666:return sD;case 35674:return oD;case 35675:return aD;case 35676:return lD;case 5124:case 35670:return uD;case 35667:case 35671:return cD;case 35668:case 35672:return fD;case 35669:case 35673:return hD;case 5125:return dD;case 36294:return pD;case 36295:return mD;case 36296:return gD;case 35678:case 36198:case 36298:case 36306:case 35682:return _D;case 35679:case 36299:case 36307:return vD;case 35680:case 36300:case 36308:case 36293:return xD;case 36289:case 36303:case 36311:case 36292:return yD}}class MD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=tD(t.type)}}class wD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=SD(t.type)}}class ED{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const lm=/(\w+)(\])?(\[|\.)?/g;function Wy(n,e){n.seq.push(e),n.map[e.id]=e}function TD(n,e,t){const i=n.name,r=i.length;for(lm.lastIndex=0;;){const s=lm.exec(i),o=lm.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Wy(t,u===void 0?new MD(a,n,e):new wD(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new ED(a),Wy(t,f)),t=f}}}class Sh{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);TD(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Xy(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const AD=37297;let CD=0;function bD(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function RD(n){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(n);let i;switch(e===t?i="":e===ud&&t===ld?i="LinearDisplayP3ToLinearSRGB":e===ld&&t===ud&&(i="LinearSRGBToLinearDisplayP3"),n){case oo:case Fd:return[i,"LinearTransferOETF"];case ki:case rv:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function jy(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+bD(n.getShaderSource(e),o)}else return r}function PD(n,e){const t=RD(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function LD(n,e){let t;switch(e){case dE:t="Linear";break;case pE:t="Reinhard";break;case mE:t="Cineon";break;case K_:t="ACESFilmic";break;case gE:t="AgX";break;case _E:t="Neutral";break;case z2:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nf=new O;function DD(){gt.getLuminanceCoefficients(Nf);const n=Nf.x.toFixed(4),e=Nf.y.toFixed(4),t=Nf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ND(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mu).join(`
`)}function ID(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function UD(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Mu(n){return n!==""}function Yy(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $y(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OD=/^[ \t]*#include +<([\w\d./]+)>/gm;function M0(n){return n.replace(OD,kD)}const FD=new Map;function kD(n,e){let t=et[e];if(t===void 0){const i=FD.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return M0(t)}const zD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qy(n){return n.replace(zD,BD)}function BD(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ky(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HD(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hE?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===v2?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wr&&(e="SHADOWMAP_TYPE_VSM"),e}function VD(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rl:case Pl:e="ENVMAP_TYPE_CUBE";break;case Od:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GD(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Pl:e="ENVMAP_MODE_REFRACTION";break}return e}function WD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case q_:e="ENVMAP_BLENDING_MULTIPLY";break;case F2:e="ENVMAP_BLENDING_MIX";break;case k2:e="ENVMAP_BLENDING_ADD";break}return e}function XD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function jD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=HD(t),u=VD(t),c=GD(t),f=WD(t),h=XD(t),d=ND(t),g=ID(s),_=r.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mu).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mu).join(`
`),p.length>0&&(p+=`
`)):(m=[Ky(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mu).join(`
`),p=[Ky(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$s?"#define TONE_MAPPING":"",t.toneMapping!==$s?et.tonemapping_pars_fragment:"",t.toneMapping!==$s?LD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,PD("linearToOutputTexel",t.outputColorSpace),DD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mu).join(`
`)),o=M0(o),o=Yy(o,t),o=$y(o,t),a=M0(a),a=Yy(a,t),a=$y(a,t),o=qy(o),a=qy(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===hy?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+m+o,S=x+p+a,C=Xy(r,r.VERTEX_SHADER,v),T=Xy(r,r.FRAGMENT_SHADER,S);r.attachShader(_,C),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(E){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(C).trim(),G=r.getShaderInfoLog(T).trim();let $=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,T);else{const j=jy(r,C,"vertex"),D=jy(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+j+`
`+D)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(B===""||G==="")&&(H=!1);H&&(E.diagnostics={runnable:$,programLog:I,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:p}})}r.deleteShader(C),r.deleteShader(T),b=new Sh(r,_),N=UD(r,_)}let b;this.getUniforms=function(){return b===void 0&&M(this),b};let N;this.getAttributes=function(){return N===void 0&&M(this),N};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,AD)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CD++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let YD=0;class $D{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qD(e),t.set(e,i)),i}}class qD{constructor(e){this.id=YD++,this.code=e,this.usedTimes=0}}function KD(n,e,t,i,r,s,o){const a=new NE,l=new $D,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,d=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return u.add(y),y===0?"uv":`uv${y}`}function p(y,E,I,B,G){const $=B.fog,H=G.geometry,j=y.isMeshStandardMaterial?B.environment:null,D=(y.isMeshStandardMaterial?t:e).get(y.envMap||j),K=D&&D.mapping===Od?D.image.height:null,P=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const ie=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Te=ie!==void 0?ie.length:0;let Ge=0;H.morphAttributes.position!==void 0&&(Ge=1),H.morphAttributes.normal!==void 0&&(Ge=2),H.morphAttributes.color!==void 0&&(Ge=3);let Y,Q,ge,ue;if(P){const Be=wr[P];Y=Be.vertexShader,Q=Be.fragmentShader}else Y=y.vertexShader,Q=y.fragmentShader,l.update(y),ge=l.getVertexShaderID(y),ue=l.getFragmentShaderID(y);const Oe=n.getRenderTarget(),Ue=G.isInstancedMesh===!0,de=G.isBatchedMesh===!0,ce=!!y.map,me=!!y.matcap,L=!!D,pe=!!y.aoMap,_e=!!y.lightMap,ae=!!y.bumpMap,U=!!y.normalMap,ve=!!y.displacementMap,xe=!!y.emissiveMap,R=!!y.metalnessMap,w=!!y.roughnessMap,V=y.anisotropy>0,J=y.clearcoat>0,ne=y.dispersion>0,q=y.iridescence>0,Le=y.sheen>0,le=y.transmission>0,oe=V&&!!y.anisotropyMap,Ye=J&&!!y.clearcoatMap,se=J&&!!y.clearcoatNormalMap,Re=J&&!!y.clearcoatRoughnessMap,De=q&&!!y.iridescenceMap,We=q&&!!y.iridescenceThicknessMap,Pe=Le&&!!y.sheenColorMap,Ze=Le&&!!y.sheenRoughnessMap,$e=!!y.specularMap,ut=!!y.specularColorMap,F=!!y.specularIntensityMap,re=le&&!!y.transmissionMap,Z=le&&!!y.thicknessMap,te=!!y.gradientMap,ye=!!y.alphaMap,Se=y.alphaTest>0,Je=!!y.alphaHash,Mt=!!y.extensions;let Nt=$s;y.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(Nt=n.toneMapping);const rt={shaderID:P,shaderType:y.type,shaderName:y.name,vertexShader:Y,fragmentShader:Q,defines:y.defines,customVertexShaderID:ge,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:de,batchingColor:de&&G._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&G.instanceColor!==null,instancingMorph:Ue&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Oe===null?n.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:oo,alphaToCoverage:!!y.alphaToCoverage,map:ce,matcap:me,envMap:L,envMapMode:L&&D.mapping,envMapCubeUVHeight:K,aoMap:pe,lightMap:_e,bumpMap:ae,normalMap:U,displacementMap:d&&ve,emissiveMap:xe,normalMapObjectSpace:U&&y.normalMapType===G2,normalMapTangentSpace:U&&y.normalMapType===bE,metalnessMap:R,roughnessMap:w,anisotropy:V,anisotropyMap:oe,clearcoat:J,clearcoatMap:Ye,clearcoatNormalMap:se,clearcoatRoughnessMap:Re,dispersion:ne,iridescence:q,iridescenceMap:De,iridescenceThicknessMap:We,sheen:Le,sheenColorMap:Pe,sheenRoughnessMap:Ze,specularMap:$e,specularColorMap:ut,specularIntensityMap:F,transmission:le,transmissionMap:re,thicknessMap:Z,gradientMap:te,opaque:y.transparent===!1&&y.blending===fl&&y.alphaToCoverage===!1,alphaMap:ye,alphaTest:Se,alphaHash:Je,combine:y.combine,mapUv:ce&&m(y.map.channel),aoMapUv:pe&&m(y.aoMap.channel),lightMapUv:_e&&m(y.lightMap.channel),bumpMapUv:ae&&m(y.bumpMap.channel),normalMapUv:U&&m(y.normalMap.channel),displacementMapUv:ve&&m(y.displacementMap.channel),emissiveMapUv:xe&&m(y.emissiveMap.channel),metalnessMapUv:R&&m(y.metalnessMap.channel),roughnessMapUv:w&&m(y.roughnessMap.channel),anisotropyMapUv:oe&&m(y.anisotropyMap.channel),clearcoatMapUv:Ye&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:We&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&m(y.sheenRoughnessMap.channel),specularMapUv:$e&&m(y.specularMap.channel),specularColorMapUv:ut&&m(y.specularColorMap.channel),specularIntensityMapUv:F&&m(y.specularIntensityMap.channel),transmissionMapUv:re&&m(y.transmissionMap.channel),thicknessMapUv:Z&&m(y.thicknessMap.channel),alphaMapUv:ye&&m(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(U||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!H.attributes.uv&&(ce||ye),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ge,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Nt,decodeVideoTexture:ce&&y.map.isVideoTexture===!0&&gt.getTransfer(y.map.colorSpace)===Tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Zr,flipSided:y.side===ni,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Mt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&y.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=u.has(1),rt.vertexUv2s=u.has(2),rt.vertexUv3s=u.has(3),u.clear(),rt}function x(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)E.push(I),E.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(v(E,y),S(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function v(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function C(y){const E=_[y.type];let I;if(E){const B=wr[E];I=Tc.clone(B.uniforms)}else I=y.uniforms;return I}function T(y,E){let I;for(let B=0,G=c.length;B<G;B++){const $=c[B];if($.cacheKey===E){I=$,++I.usedTimes;break}}return I===void 0&&(I=new jD(n,E,y,s),c.push(I)),I}function M(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function b(y){l.remove(y)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:C,acquireProgram:T,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:N}}function ZD(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function JD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Zy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jy(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function u(f,h){t.length>1&&t.sort(f||JD),i.length>1&&i.sort(h||Zy),r.length>1&&r.sort(h||Zy)}function c(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function QD(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Jy,n.set(i,[o])):r>=s.length?(o=new Jy,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function eN(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new qe};break;case"SpotLight":t={position:new O,direction:new O,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function tN(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nN=0;function iN(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rN(n){const e=new eN,t=tN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,s=new ht,o=new ht;function a(u){let c=0,f=0,h=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,x=0,v=0,S=0,C=0,T=0,M=0;u.sort(iN);for(let N=0,y=u.length;N<y;N++){const E=u[N],I=E.color,B=E.intensity,G=E.distance,$=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)c+=I.r*B,f+=I.g*B,h+=I.b*B;else if(E.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(E.sh.coefficients[H],B);M++}else if(E.isDirectionalLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const j=E.shadow,D=t.get(E);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,i.directionalShadow[d]=D,i.directionalShadowMap[d]=$,i.directionalShadowMatrix[d]=E.shadow.matrix,x++}i.directional[d]=H,d++}else if(E.isSpotLight){const H=e.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(I).multiplyScalar(B),H.distance=G,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,i.spot[_]=H;const j=E.shadow;if(E.map&&(i.spotLightMap[C]=E.map,C++,j.updateMatrices(E),E.castShadow&&T++),i.spotLightMatrix[_]=j.matrix,E.castShadow){const D=t.get(E);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,i.spotShadow[_]=D,i.spotShadowMap[_]=$,S++}_++}else if(E.isRectAreaLight){const H=e.get(E);H.color.copy(I).multiplyScalar(B),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=H,m++}else if(E.isPointLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){const j=E.shadow,D=t.get(E);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,D.shadowCameraNear=j.camera.near,D.shadowCameraFar=j.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=E.shadow.matrix,v++}i.point[g]=H,g++}else if(E.isHemisphereLight){const H=e.get(E);H.skyColor.copy(E.color).multiplyScalar(B),H.groundColor.copy(E.groundColor).multiplyScalar(B),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==d||b.pointLength!==g||b.spotLength!==_||b.rectAreaLength!==m||b.hemiLength!==p||b.numDirectionalShadows!==x||b.numPointShadows!==v||b.numSpotShadows!==S||b.numSpotMaps!==C||b.numLightProbes!==M)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=M,b.directionalLength=d,b.pointLength=g,b.spotLength=_,b.rectAreaLength=m,b.hemiLength=p,b.numDirectionalShadows=x,b.numPointShadows=v,b.numSpotShadows=S,b.numSpotMaps=C,b.numLightProbes=M,i.version=nN++)}function l(u,c){let f=0,h=0,d=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,x=u.length;p<x;p++){const v=u[p];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(v.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Qy(n){const e=new rN(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function sN(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Qy(n),e.set(r,[a])):s>=o.length?(a=new Qy(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class oN extends ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aN extends ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cN(n,e,t){let i=new av;const r=new Ee,s=new Ee,o=new Yt,a=new oN({depthPacking:V2}),l=new aN,u={},c=t.maxTextureSize,f={[to]:ni,[ni]:to,[Zr]:Zr},h=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:lN,fragmentShader:uN}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hE;let p=this.type;this.render=function(T,M,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const N=n.getRenderTarget(),y=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),I=n.state;I.setBlending(rs),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const B=p!==Wr&&this.type===Wr,G=p===Wr&&this.type!==Wr;for(let $=0,H=T.length;$<H;$++){const j=T[$],D=j.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const K=D.getFrameExtents();if(r.multiply(K),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/K.x),r.x=s.x*K.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/K.y),r.y=s.y*K.y,D.mapSize.y=s.y)),D.map===null||B===!0||G===!0){const ie=this.type!==Wr?{minFilter:li,magFilter:li}:{};D.map!==null&&D.map.dispose(),D.map=new gr(r.x,r.y,ie),D.map.texture.name=j.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const P=D.getViewportCount();for(let ie=0;ie<P;ie++){const Te=D.getViewport(ie);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),I.viewport(o),D.updateMatrices(j,ie),i=D.getFrustum(),S(M,b,D.camera,j,this.type)}D.isPointLightShadow!==!0&&this.type===Wr&&x(D,b),D.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(N,y,E)};function x(T,M){const b=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new gr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(M,null,b,h,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(M,null,b,d,_,null)}function v(T,M,b,N){let y=null;const E=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)y=E;else if(y=b.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const I=y.uuid,B=M.uuid;let G=u[I];G===void 0&&(G={},u[I]=G);let $=G[B];$===void 0&&($=y.clone(),G[B]=$,M.addEventListener("dispose",C)),y=$}if(y.visible=M.visible,y.wireframe=M.wireframe,N===Wr?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:f[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=n.properties.get(y);I.light=b}return y}function S(T,M,b,N,y){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Wr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const B=e.update(T),G=T.material;if(Array.isArray(G)){const $=B.groups;for(let H=0,j=$.length;H<j;H++){const D=$[H],K=G[D.materialIndex];if(K&&K.visible){const P=v(T,K,N,y);T.onBeforeShadow(n,T,M,b,B,P,D),n.renderBufferDirect(b,null,B,P,T,D),T.onAfterShadow(n,T,M,b,B,P,D)}}}else if(G.visible){const $=v(T,G,N,y);T.onBeforeShadow(n,T,M,b,B,$,null),n.renderBufferDirect(b,null,B,$,T,null),T.onAfterShadow(n,T,M,b,B,$,null)}}const I=T.children;for(let B=0,G=I.length;B<G;B++)S(I[B],M,b,N,y)}function C(T){T.target.removeEventListener("dispose",C);for(const b in u){const N=u[b],y=T.target.uuid;y in N&&(N[y].dispose(),delete N[y])}}}const fN={[zg]:Bg,[Hg]:Wg,[Vg]:Xg,[bl]:Gg,[Bg]:zg,[Wg]:Hg,[Xg]:Vg,[Gg]:bl};function hN(n){function e(){let F=!1;const re=new Yt;let Z=null;const te=new Yt(0,0,0,0);return{setMask:function(ye){Z!==ye&&!F&&(n.colorMask(ye,ye,ye,ye),Z=ye)},setLocked:function(ye){F=ye},setClear:function(ye,Se,Je,Mt,Nt){Nt===!0&&(ye*=Mt,Se*=Mt,Je*=Mt),re.set(ye,Se,Je,Mt),te.equals(re)===!1&&(n.clearColor(ye,Se,Je,Mt),te.copy(re))},reset:function(){F=!1,Z=null,te.set(-1,0,0,0)}}}function t(){let F=!1,re=!1,Z=null,te=null,ye=null;return{setReversed:function(Se){re=Se},setTest:function(Se){Se?ge(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(Se){Z!==Se&&!F&&(n.depthMask(Se),Z=Se)},setFunc:function(Se){if(re&&(Se=fN[Se]),te!==Se){switch(Se){case zg:n.depthFunc(n.NEVER);break;case Bg:n.depthFunc(n.ALWAYS);break;case Hg:n.depthFunc(n.LESS);break;case bl:n.depthFunc(n.LEQUAL);break;case Vg:n.depthFunc(n.EQUAL);break;case Gg:n.depthFunc(n.GEQUAL);break;case Wg:n.depthFunc(n.GREATER);break;case Xg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=Se}},setLocked:function(Se){F=Se},setClear:function(Se){ye!==Se&&(n.clearDepth(Se),ye=Se)},reset:function(){F=!1,Z=null,te=null,ye=null}}}function i(){let F=!1,re=null,Z=null,te=null,ye=null,Se=null,Je=null,Mt=null,Nt=null;return{setTest:function(rt){F||(rt?ge(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(rt){re!==rt&&!F&&(n.stencilMask(rt),re=rt)},setFunc:function(rt,Be,Fe){(Z!==rt||te!==Be||ye!==Fe)&&(n.stencilFunc(rt,Be,Fe),Z=rt,te=Be,ye=Fe)},setOp:function(rt,Be,Fe){(Se!==rt||Je!==Be||Mt!==Fe)&&(n.stencilOp(rt,Be,Fe),Se=rt,Je=Be,Mt=Fe)},setLocked:function(rt){F=rt},setClear:function(rt){Nt!==rt&&(n.clearStencil(rt),Nt=rt)},reset:function(){F=!1,re=null,Z=null,te=null,ye=null,Se=null,Je=null,Mt=null,Nt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,h=[],d=null,g=!1,_=null,m=null,p=null,x=null,v=null,S=null,C=null,T=new qe(0,0,0),M=0,b=!1,N=null,y=null,E=null,I=null,B=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,H=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=H>=1):j.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=H>=2);let D=null,K={};const P=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Te=new Yt().fromArray(P),Ge=new Yt().fromArray(ie);function Y(F,re,Z,te){const ye=new Uint8Array(4),Se=n.createTexture();n.bindTexture(F,Se),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<Z;Je++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(re+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return Se}const Q={};Q[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ge(n.DEPTH_TEST),s.setFunc(bl),_e(!1),ae(ly),ge(n.CULL_FACE),L(rs);function ge(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function ue(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Oe(F,re){return c[F]!==re?(n.bindFramebuffer(F,re),c[F]=re,F===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=re),F===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Ue(F,re){let Z=h,te=!1;if(F){Z=f.get(re),Z===void 0&&(Z=[],f.set(re,Z));const ye=F.textures;if(Z.length!==ye.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,Je=ye.length;Se<Je;Se++)Z[Se]=n.COLOR_ATTACHMENT0+Se;Z.length=ye.length,te=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,te=!0);te&&n.drawBuffers(Z)}function de(F){return d!==F?(n.useProgram(F),d=F,!0):!1}const ce={[To]:n.FUNC_ADD,[y2]:n.FUNC_SUBTRACT,[S2]:n.FUNC_REVERSE_SUBTRACT};ce[M2]=n.MIN,ce[w2]=n.MAX;const me={[E2]:n.ZERO,[T2]:n.ONE,[A2]:n.SRC_COLOR,[Fg]:n.SRC_ALPHA,[D2]:n.SRC_ALPHA_SATURATE,[P2]:n.DST_COLOR,[b2]:n.DST_ALPHA,[C2]:n.ONE_MINUS_SRC_COLOR,[kg]:n.ONE_MINUS_SRC_ALPHA,[L2]:n.ONE_MINUS_DST_COLOR,[R2]:n.ONE_MINUS_DST_ALPHA,[N2]:n.CONSTANT_COLOR,[I2]:n.ONE_MINUS_CONSTANT_COLOR,[U2]:n.CONSTANT_ALPHA,[O2]:n.ONE_MINUS_CONSTANT_ALPHA};function L(F,re,Z,te,ye,Se,Je,Mt,Nt,rt){if(F===rs){g===!0&&(ue(n.BLEND),g=!1);return}if(g===!1&&(ge(n.BLEND),g=!0),F!==x2){if(F!==_||rt!==b){if((m!==To||v!==To)&&(n.blendEquation(n.FUNC_ADD),m=To,v=To),rt)switch(F){case fl:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Do:n.blendFunc(n.ONE,n.ONE);break;case uy:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cy:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case fl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Do:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case uy:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cy:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}p=null,x=null,S=null,C=null,T.set(0,0,0),M=0,_=F,b=rt}return}ye=ye||re,Se=Se||Z,Je=Je||te,(re!==m||ye!==v)&&(n.blendEquationSeparate(ce[re],ce[ye]),m=re,v=ye),(Z!==p||te!==x||Se!==S||Je!==C)&&(n.blendFuncSeparate(me[Z],me[te],me[Se],me[Je]),p=Z,x=te,S=Se,C=Je),(Mt.equals(T)===!1||Nt!==M)&&(n.blendColor(Mt.r,Mt.g,Mt.b,Nt),T.copy(Mt),M=Nt),_=F,b=!1}function pe(F,re){F.side===Zr?ue(n.CULL_FACE):ge(n.CULL_FACE);let Z=F.side===ni;re&&(Z=!Z),_e(Z),F.blending===fl&&F.transparent===!1?L(rs):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const te=F.stencilWrite;o.setTest(te),te&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ve(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function _e(F){N!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),N=F)}function ae(F){F!==g2?(ge(n.CULL_FACE),F!==y&&(F===ly?n.cullFace(n.BACK):F===_2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),y=F}function U(F){F!==E&&($&&n.lineWidth(F),E=F)}function ve(F,re,Z){F?(ge(n.POLYGON_OFFSET_FILL),(I!==re||B!==Z)&&(n.polygonOffset(re,Z),I=re,B=Z)):ue(n.POLYGON_OFFSET_FILL)}function xe(F){F?ge(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function R(F){F===void 0&&(F=n.TEXTURE0+G-1),D!==F&&(n.activeTexture(F),D=F)}function w(F,re,Z){Z===void 0&&(D===null?Z=n.TEXTURE0+G-1:Z=D);let te=K[Z];te===void 0&&(te={type:void 0,texture:void 0},K[Z]=te),(te.type!==F||te.texture!==re)&&(D!==Z&&(n.activeTexture(Z),D=Z),n.bindTexture(F,re||Q[F]),te.type=F,te.texture=re)}function V(){const F=K[D];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ye(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(F){Te.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Te.copy(F))}function Pe(F){Ge.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ge.copy(F))}function Ze(F,re){let Z=l.get(re);Z===void 0&&(Z=new WeakMap,l.set(re,Z));let te=Z.get(F);te===void 0&&(te=n.getUniformBlockIndex(re,F.name),Z.set(F,te))}function $e(F,re){const te=l.get(re).get(F);a.get(re)!==te&&(n.uniformBlockBinding(re,te,F.__bindingPointIndex),a.set(re,te))}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},D=null,K={},c={},f=new WeakMap,h=[],d=null,g=!1,_=null,m=null,p=null,x=null,v=null,S=null,C=null,T=new qe(0,0,0),M=0,b=!1,N=null,y=null,E=null,I=null,B=null,Te.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ge,disable:ue,bindFramebuffer:Oe,drawBuffers:Ue,useProgram:de,setBlending:L,setMaterial:pe,setFlipSided:_e,setCullFace:ae,setLineWidth:U,setPolygonOffset:ve,setScissorTest:xe,activeTexture:R,bindTexture:w,unbindTexture:V,compressedTexImage2D:J,compressedTexImage3D:ne,texImage2D:Re,texImage3D:De,updateUBOMapping:Ze,uniformBlockBinding:$e,texStorage2D:Ye,texStorage3D:se,texSubImage2D:q,texSubImage3D:Le,compressedTexSubImage2D:le,compressedTexSubImage3D:oe,scissor:We,viewport:Pe,reset:ut}}function eS(n,e,t,i){const r=dN(i);switch(t){case ME:return n*e;case EE:return n*e;case TE:return n*e*2;case ev:return n*e/r.components*r.byteLength;case tv:return n*e/r.components*r.byteLength;case AE:return n*e*2/r.components*r.byteLength;case nv:return n*e*2/r.components*r.byteLength;case wE:return n*e*3/r.components*r.byteLength;case dr:return n*e*4/r.components*r.byteLength;case iv:return n*e*4/r.components*r.byteLength;case mh:case gh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _h:case vh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kg:case Jg:return Math.max(n,16)*Math.max(e,8)/4;case qg:case Zg:return Math.max(n,8)*Math.max(e,8)/2;case Qg:case e0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case t0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case n0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case i0:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case r0:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case s0:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case o0:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case a0:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case l0:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case u0:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case c0:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case f0:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case h0:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case d0:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case p0:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case m0:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case xh:case g0:case _0:return Math.ceil(n/4)*Math.ceil(e/4)*16;case CE:case v0:return Math.ceil(n/4)*Math.ceil(e/4)*8;case x0:case y0:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dN(n){switch(n){case ds:case xE:return{byteLength:1,components:1};case Mc:case yE:case ss:return{byteLength:2,components:1};case J_:case Q_:return{byteLength:2,components:4};case ea:case Z_:case br:return{byteLength:4,components:1};case SE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function pN(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ee,c=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return d?new OffscreenCanvas(R,w):Ec("canvas")}function _(R,w,V){let J=1;const ne=xe(R);if((ne.width>V||ne.height>V)&&(J=V/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(J*ne.width),Le=Math.floor(J*ne.height);f===void 0&&(f=g(q,Le));const le=w?g(q,Le):f;return le.width=q,le.height=Le,le.getContext("2d").drawImage(R,0,0,q,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+q+"x"+Le+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==li&&R.minFilter!==fr}function p(R){n.generateMipmap(R)}function x(R,w,V,J,ne=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=w;if(w===n.RED&&(V===n.FLOAT&&(q=n.R32F),V===n.HALF_FLOAT&&(q=n.R16F),V===n.UNSIGNED_BYTE&&(q=n.R8)),w===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.R8UI),V===n.UNSIGNED_SHORT&&(q=n.R16UI),V===n.UNSIGNED_INT&&(q=n.R32UI),V===n.BYTE&&(q=n.R8I),V===n.SHORT&&(q=n.R16I),V===n.INT&&(q=n.R32I)),w===n.RG&&(V===n.FLOAT&&(q=n.RG32F),V===n.HALF_FLOAT&&(q=n.RG16F),V===n.UNSIGNED_BYTE&&(q=n.RG8)),w===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.RG8UI),V===n.UNSIGNED_SHORT&&(q=n.RG16UI),V===n.UNSIGNED_INT&&(q=n.RG32UI),V===n.BYTE&&(q=n.RG8I),V===n.SHORT&&(q=n.RG16I),V===n.INT&&(q=n.RG32I)),w===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.RGB8UI),V===n.UNSIGNED_SHORT&&(q=n.RGB16UI),V===n.UNSIGNED_INT&&(q=n.RGB32UI),V===n.BYTE&&(q=n.RGB8I),V===n.SHORT&&(q=n.RGB16I),V===n.INT&&(q=n.RGB32I)),w===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),V===n.UNSIGNED_INT&&(q=n.RGBA32UI),V===n.BYTE&&(q=n.RGBA8I),V===n.SHORT&&(q=n.RGBA16I),V===n.INT&&(q=n.RGBA32I)),w===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),w===n.RGBA){const Le=ne?ad:gt.getTransfer(J);V===n.FLOAT&&(q=n.RGBA32F),V===n.HALF_FLOAT&&(q=n.RGBA16F),V===n.UNSIGNED_BYTE&&(q=Le===Tt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(R,w){let V;return R?w===null||w===ea||w===Ll?V=n.DEPTH24_STENCIL8:w===br?V=n.DEPTH32F_STENCIL8:w===Mc&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ea||w===Ll?V=n.DEPTH_COMPONENT24:w===br?V=n.DEPTH_COMPONENT32F:w===Mc&&(V=n.DEPTH_COMPONENT16),V}function S(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==li&&R.minFilter!==fr?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function C(R){const w=R.target;w.removeEventListener("dispose",C),M(w),w.isVideoTexture&&c.delete(w)}function T(R){const w=R.target;w.removeEventListener("dispose",T),N(w)}function M(R){const w=i.get(R);if(w.__webglInit===void 0)return;const V=R.source,J=h.get(V);if(J){const ne=J[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(R),Object.keys(J).length===0&&h.delete(V)}i.remove(R)}function b(R){const w=i.get(R);n.deleteTexture(w.__webglTexture);const V=R.source,J=h.get(V);delete J[w.__cacheKey],o.memory.textures--}function N(R){const w=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let ne=0;ne<w.__webglFramebuffer[J].length;ne++)n.deleteFramebuffer(w.__webglFramebuffer[J][ne]);else n.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)n.deleteFramebuffer(w.__webglFramebuffer[J]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const V=R.textures;for(let J=0,ne=V.length;J<ne;J++){const q=i.get(V[J]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(V[J])}i.remove(R)}let y=0;function E(){y=0}function I(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function B(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function G(R,w){const V=i.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(V,R,w);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+w)}function $(R,w){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Ge(V,R,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+w)}function H(R,w){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Ge(V,R,w);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+w)}function j(R,w){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Y(V,R,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+w)}const D={[od]:n.REPEAT,[No]:n.CLAMP_TO_EDGE,[$g]:n.MIRRORED_REPEAT},K={[li]:n.NEAREST,[B2]:n.NEAREST_MIPMAP_NEAREST,[hf]:n.NEAREST_MIPMAP_LINEAR,[fr]:n.LINEAR,[Up]:n.LINEAR_MIPMAP_NEAREST,[Io]:n.LINEAR_MIPMAP_LINEAR},P={[W2]:n.NEVER,[K2]:n.ALWAYS,[X2]:n.LESS,[RE]:n.LEQUAL,[j2]:n.EQUAL,[q2]:n.GEQUAL,[Y2]:n.GREATER,[$2]:n.NOTEQUAL};function ie(R,w){if(w.type===br&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===fr||w.magFilter===Up||w.magFilter===hf||w.magFilter===Io||w.minFilter===fr||w.minFilter===Up||w.minFilter===hf||w.minFilter===Io)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,D[w.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,D[w.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,D[w.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,K[w.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,K[w.minFilter]),w.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,P[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===li||w.minFilter!==hf&&w.minFilter!==Io||w.type===br&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Te(R,w){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",C));const J=w.source;let ne=h.get(J);ne===void 0&&(ne={},h.set(J,ne));const q=B(w);if(q!==R.__cacheKey){ne[q]===void 0&&(ne[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ne[q].usedTimes++;const Le=ne[R.__cacheKey];Le!==void 0&&(ne[R.__cacheKey].usedTimes--,Le.usedTimes===0&&b(w)),R.__cacheKey=q,R.__webglTexture=ne[q].texture}return V}function Ge(R,w,V){let J=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=n.TEXTURE_3D);const ne=Te(R,w),q=w.source;t.bindTexture(J,R.__webglTexture,n.TEXTURE0+V);const Le=i.get(q);if(q.version!==Le.__version||ne===!0){t.activeTexture(n.TEXTURE0+V);const le=gt.getPrimaries(gt.workingColorSpace),oe=w.colorSpace===bs?null:gt.getPrimaries(w.colorSpace),Ye=w.colorSpace===bs||le===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let se=_(w.image,!1,r.maxTextureSize);se=ve(w,se);const Re=s.convert(w.format,w.colorSpace),De=s.convert(w.type);let We=x(w.internalFormat,Re,De,w.colorSpace,w.isVideoTexture);ie(J,w);let Pe;const Ze=w.mipmaps,$e=w.isVideoTexture!==!0,ut=Le.__version===void 0||ne===!0,F=q.dataReady,re=S(w,se);if(w.isDepthTexture)We=v(w.format===Dl,w.type),ut&&($e?t.texStorage2D(n.TEXTURE_2D,1,We,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,We,se.width,se.height,0,Re,De,null));else if(w.isDataTexture)if(Ze.length>0){$e&&ut&&t.texStorage2D(n.TEXTURE_2D,re,We,Ze[0].width,Ze[0].height);for(let Z=0,te=Ze.length;Z<te;Z++)Pe=Ze[Z],$e?F&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Pe.width,Pe.height,Re,De,Pe.data):t.texImage2D(n.TEXTURE_2D,Z,We,Pe.width,Pe.height,0,Re,De,Pe.data);w.generateMipmaps=!1}else $e?(ut&&t.texStorage2D(n.TEXTURE_2D,re,We,se.width,se.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,Re,De,se.data)):t.texImage2D(n.TEXTURE_2D,0,We,se.width,se.height,0,Re,De,se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){$e&&ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,We,Ze[0].width,Ze[0].height,se.depth);for(let Z=0,te=Ze.length;Z<te;Z++)if(Pe=Ze[Z],w.format!==dr)if(Re!==null)if($e){if(F)if(w.layerUpdates.size>0){const ye=eS(Pe.width,Pe.height,w.format,w.type);for(const Se of w.layerUpdates){const Je=Pe.data.subarray(Se*ye/Pe.data.BYTES_PER_ELEMENT,(Se+1)*ye/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,Se,Pe.width,Pe.height,1,Re,Je,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Pe.width,Pe.height,se.depth,Re,Pe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,We,Pe.width,Pe.height,se.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Pe.width,Pe.height,se.depth,Re,De,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,We,Pe.width,Pe.height,se.depth,0,Re,De,Pe.data)}else{$e&&ut&&t.texStorage2D(n.TEXTURE_2D,re,We,Ze[0].width,Ze[0].height);for(let Z=0,te=Ze.length;Z<te;Z++)Pe=Ze[Z],w.format!==dr?Re!==null?$e?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,Pe.width,Pe.height,Re,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,We,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?F&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Pe.width,Pe.height,Re,De,Pe.data):t.texImage2D(n.TEXTURE_2D,Z,We,Pe.width,Pe.height,0,Re,De,Pe.data)}else if(w.isDataArrayTexture)if($e){if(ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,We,se.width,se.height,se.depth),F)if(w.layerUpdates.size>0){const Z=eS(se.width,se.height,w.format,w.type);for(const te of w.layerUpdates){const ye=se.data.subarray(te*Z/se.data.BYTES_PER_ELEMENT,(te+1)*Z/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,se.width,se.height,1,Re,De,ye)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Re,De,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,se.width,se.height,se.depth,0,Re,De,se.data);else if(w.isData3DTexture)$e?(ut&&t.texStorage3D(n.TEXTURE_3D,re,We,se.width,se.height,se.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Re,De,se.data)):t.texImage3D(n.TEXTURE_3D,0,We,se.width,se.height,se.depth,0,Re,De,se.data);else if(w.isFramebufferTexture){if(ut)if($e)t.texStorage2D(n.TEXTURE_2D,re,We,se.width,se.height);else{let Z=se.width,te=se.height;for(let ye=0;ye<re;ye++)t.texImage2D(n.TEXTURE_2D,ye,We,Z,te,0,Re,De,null),Z>>=1,te>>=1}}else if(Ze.length>0){if($e&&ut){const Z=xe(Ze[0]);t.texStorage2D(n.TEXTURE_2D,re,We,Z.width,Z.height)}for(let Z=0,te=Ze.length;Z<te;Z++)Pe=Ze[Z],$e?F&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Re,De,Pe):t.texImage2D(n.TEXTURE_2D,Z,We,Re,De,Pe);w.generateMipmaps=!1}else if($e){if(ut){const Z=xe(se);t.texStorage2D(n.TEXTURE_2D,re,We,Z.width,Z.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,De,se)}else t.texImage2D(n.TEXTURE_2D,0,We,Re,De,se);m(w)&&p(J),Le.__version=q.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Y(R,w,V){if(w.image.length!==6)return;const J=Te(R,w),ne=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);const q=i.get(ne);if(ne.version!==q.__version||J===!0){t.activeTexture(n.TEXTURE0+V);const Le=gt.getPrimaries(gt.workingColorSpace),le=w.colorSpace===bs?null:gt.getPrimaries(w.colorSpace),oe=w.colorSpace===bs||Le===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ye=w.isCompressedTexture||w.image[0].isCompressedTexture,se=w.image[0]&&w.image[0].isDataTexture,Re=[];for(let te=0;te<6;te++)!Ye&&!se?Re[te]=_(w.image[te],!0,r.maxCubemapSize):Re[te]=se?w.image[te].image:w.image[te],Re[te]=ve(w,Re[te]);const De=Re[0],We=s.convert(w.format,w.colorSpace),Pe=s.convert(w.type),Ze=x(w.internalFormat,We,Pe,w.colorSpace),$e=w.isVideoTexture!==!0,ut=q.__version===void 0||J===!0,F=ne.dataReady;let re=S(w,De);ie(n.TEXTURE_CUBE_MAP,w);let Z;if(Ye){$e&&ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,re,Ze,De.width,De.height);for(let te=0;te<6;te++){Z=Re[te].mipmaps;for(let ye=0;ye<Z.length;ye++){const Se=Z[ye];w.format!==dr?We!==null?$e?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye,0,0,Se.width,Se.height,We,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye,Ze,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye,0,0,Se.width,Se.height,We,Pe,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye,Ze,Se.width,Se.height,0,We,Pe,Se.data)}}}else{if(Z=w.mipmaps,$e&&ut){Z.length>0&&re++;const te=xe(Re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,re,Ze,te.width,te.height)}for(let te=0;te<6;te++)if(se){$e?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Re[te].width,Re[te].height,We,Pe,Re[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ze,Re[te].width,Re[te].height,0,We,Pe,Re[te].data);for(let ye=0;ye<Z.length;ye++){const Je=Z[ye].image[te].image;$e?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye+1,0,0,Je.width,Je.height,We,Pe,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye+1,Ze,Je.width,Je.height,0,We,Pe,Je.data)}}else{$e?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,We,Pe,Re[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ze,We,Pe,Re[te]);for(let ye=0;ye<Z.length;ye++){const Se=Z[ye];$e?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye+1,0,0,We,Pe,Se.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye+1,Ze,We,Pe,Se.image[te])}}}m(w)&&p(n.TEXTURE_CUBE_MAP),q.__version=ne.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Q(R,w,V,J,ne,q){const Le=s.convert(V.format,V.colorSpace),le=s.convert(V.type),oe=x(V.internalFormat,Le,le,V.colorSpace);if(!i.get(w).__hasExternalTextures){const se=Math.max(1,w.width>>q),Re=Math.max(1,w.height>>q);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,q,oe,se,Re,w.depth,0,Le,le,null):t.texImage2D(ne,q,oe,se,Re,0,Le,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ae(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ne,i.get(V).__webglTexture,0,_e(w)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ne,i.get(V).__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(R,w,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),w.depthBuffer){const J=w.depthTexture,ne=J&&J.isDepthTexture?J.type:null,q=v(w.stencilBuffer,ne),Le=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=_e(w);ae(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,q,w.width,w.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,q,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,q,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Le,n.RENDERBUFFER,R)}else{const J=w.textures;for(let ne=0;ne<J.length;ne++){const q=J[ne],Le=s.convert(q.format,q.colorSpace),le=s.convert(q.type),oe=x(q.internalFormat,Le,le,q.colorSpace),Ye=_e(w);V&&ae(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,oe,w.width,w.height):ae(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,oe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,oe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G(w.depthTexture,0);const J=i.get(w.depthTexture).__webglTexture,ne=_e(w);if(w.depthTexture.format===hl)ae(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(w.depthTexture.format===Dl)ae(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Oe(R){const w=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const ne=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),w.__depthDisposeCallback=ne}w.__boundDepthTexture=J}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ue(w.__webglFramebuffer,R)}else if(V){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=n.createRenderbuffer(),ge(w.__webglDepthbuffer[J],R,!1);else{const ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ge(w.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(R,w,V){const J=i.get(R);w!==void 0&&Q(J.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Oe(R)}function de(R){const w=R.texture,V=i.get(R),J=i.get(w);R.addEventListener("dispose",T);const ne=R.textures,q=R.isWebGLCubeRenderTarget===!0,Le=ne.length>1;if(Le||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=w.version,o.memory.textures++),q){V.__webglFramebuffer=[];for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[le]=[];for(let oe=0;oe<w.mipmaps.length;oe++)V.__webglFramebuffer[le][oe]=n.createFramebuffer()}else V.__webglFramebuffer[le]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let le=0;le<w.mipmaps.length;le++)V.__webglFramebuffer[le]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Le)for(let le=0,oe=ne.length;le<oe;le++){const Ye=i.get(ne[le]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&ae(R)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let le=0;le<ne.length;le++){const oe=ne[le];V.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[le]);const Ye=s.convert(oe.format,oe.colorSpace),se=s.convert(oe.type),Re=x(oe.internalFormat,Ye,se,oe.colorSpace,R.isXRRenderTarget===!0),De=_e(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Re,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,V.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ie(n.TEXTURE_CUBE_MAP,w);for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)Q(V.__webglFramebuffer[le][oe],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,oe);else Q(V.__webglFramebuffer[le],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(w)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let le=0,oe=ne.length;le<oe;le++){const Ye=ne[le],se=i.get(Ye);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),ie(n.TEXTURE_2D,Ye),Q(V.__webglFramebuffer,R,Ye,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),m(Ye)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,J.__webglTexture),ie(le,w),w.mipmaps&&w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)Q(V.__webglFramebuffer[oe],R,w,n.COLOR_ATTACHMENT0,le,oe);else Q(V.__webglFramebuffer,R,w,n.COLOR_ATTACHMENT0,le,0);m(w)&&p(le),t.unbindTexture()}R.depthBuffer&&Oe(R)}function ce(R){const w=R.textures;for(let V=0,J=w.length;V<J;V++){const ne=w[V];if(m(ne)){const q=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Le=i.get(ne).__webglTexture;t.bindTexture(q,Le),p(q),t.unbindTexture()}}}const me=[],L=[];function pe(R){if(R.samples>0){if(ae(R)===!1){const w=R.textures,V=R.width,J=R.height;let ne=n.COLOR_BUFFER_BIT;const q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=i.get(R),le=w.length>1;if(le)for(let oe=0;oe<w.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let oe=0;oe<w.length;oe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Le.__webglColorRenderbuffer[oe]);const Ye=i.get(w[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,V,J,0,0,V,J,ne,n.NEAREST),l===!0&&(me.length=0,L.length=0,me.push(n.COLOR_ATTACHMENT0+oe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(me.push(q),L.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let oe=0;oe<w.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,Le.__webglColorRenderbuffer[oe]);const Ye=i.get(w[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function _e(R){return Math.min(r.maxSamples,R.samples)}function ae(R){const w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function U(R){const w=o.render.frame;c.get(R)!==w&&(c.set(R,w),R.update())}function ve(R,w){const V=R.colorSpace,J=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==oo&&V!==bs&&(gt.getTransfer(V)===Tt?(J!==dr||ne!==ds)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function xe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=E,this.setTexture2D=G,this.setTexture2DArray=$,this.setTexture3D=H,this.setTextureCube=j,this.rebindTextures=Ue,this.setupRenderTarget=de,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ae}function mN(n,e){function t(i,r=bs){let s;const o=gt.getTransfer(r);if(i===ds)return n.UNSIGNED_BYTE;if(i===J_)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Q_)return n.UNSIGNED_SHORT_5_5_5_1;if(i===SE)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xE)return n.BYTE;if(i===yE)return n.SHORT;if(i===Mc)return n.UNSIGNED_SHORT;if(i===Z_)return n.INT;if(i===ea)return n.UNSIGNED_INT;if(i===br)return n.FLOAT;if(i===ss)return n.HALF_FLOAT;if(i===ME)return n.ALPHA;if(i===wE)return n.RGB;if(i===dr)return n.RGBA;if(i===EE)return n.LUMINANCE;if(i===TE)return n.LUMINANCE_ALPHA;if(i===hl)return n.DEPTH_COMPONENT;if(i===Dl)return n.DEPTH_STENCIL;if(i===ev)return n.RED;if(i===tv)return n.RED_INTEGER;if(i===AE)return n.RG;if(i===nv)return n.RG_INTEGER;if(i===iv)return n.RGBA_INTEGER;if(i===mh||i===gh||i===_h||i===vh)if(o===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===mh)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_h)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===mh)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gh)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_h)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vh)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qg||i===Kg||i===Zg||i===Jg)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qg)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kg)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zg)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jg)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qg||i===e0||i===t0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Qg||i===e0)return o===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===t0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===n0||i===i0||i===r0||i===s0||i===o0||i===a0||i===l0||i===u0||i===c0||i===f0||i===h0||i===d0||i===p0||i===m0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===n0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===i0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===r0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===s0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===o0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===a0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===l0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===u0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===c0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===f0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===h0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===d0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===p0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===m0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xh||i===g0||i===_0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===xh)return o===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===g0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===CE||i===v0||i===x0||i===y0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===xh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===v0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===x0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===y0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ll?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class gN extends Wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wu extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _N={type:"move"};class um{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),d=.02,g=.005;u.inputState.pinching&&h>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_N)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const vN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Rn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ht({vertexShader:vN,fragmentShader:xN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fn(new Os(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SN extends zl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,d=null,g=null;const _=new yN,m=t.getContextAttributes();let p=null,x=null;const v=[],S=[],C=new Ee;let T=null;const M=new Wi;M.layers.enable(1),M.viewport=new Yt;const b=new Wi;b.layers.enable(2),b.viewport=new Yt;const N=[M,b],y=new gN;y.layers.enable(1),y.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=v[Y];return Q===void 0&&(Q=new um,v[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=v[Y];return Q===void 0&&(Q=new um,v[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=v[Y];return Q===void 0&&(Q=new um,v[Y]=Q),Q.getHandSpace()};function B(Y){const Q=S.indexOf(Y.inputSource);if(Q===-1)return;const ge=v[Q];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,u||o),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",$);for(let Y=0;Y<v.length;Y++){const Q=S[Y];Q!==null&&(S[Y]=null,v[Y].disconnect(Q))}E=null,I=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,x=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",G),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new gr(d.framebufferWidth,d.framebufferHeight,{format:dr,type:ds,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ge=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?Dl:hl,ge=m.stencil?Ll:ea);const Oe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Oe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new gr(h.textureWidth,h.textureHeight,{format:dr,type:ds,depthTexture:new HE(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(Y){for(let Q=0;Q<Y.removed.length;Q++){const ge=Y.removed[Q],ue=S.indexOf(ge);ue>=0&&(S[ue]=null,v[ue].disconnect(ge))}for(let Q=0;Q<Y.added.length;Q++){const ge=Y.added[Q];let ue=S.indexOf(ge);if(ue===-1){for(let Ue=0;Ue<v.length;Ue++)if(Ue>=S.length){S.push(ge),ue=Ue;break}else if(S[Ue]===null){S[Ue]=ge,ue=Ue;break}if(ue===-1)break}const Oe=v[ue];Oe&&Oe.connect(ge)}}const H=new O,j=new O;function D(Y,Q,ge){H.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(ge.matrixWorld);const ue=H.distanceTo(j),Oe=Q.projectionMatrix.elements,Ue=ge.projectionMatrix.elements,de=Oe[14]/(Oe[10]-1),ce=Oe[14]/(Oe[10]+1),me=(Oe[9]+1)/Oe[5],L=(Oe[9]-1)/Oe[5],pe=(Oe[8]-1)/Oe[0],_e=(Ue[8]+1)/Ue[0],ae=de*pe,U=de*_e,ve=ue/(-pe+_e),xe=ve*-pe;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(xe),Y.translateZ(ve),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Oe[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const R=de+ve,w=ce+ve,V=ae-xe,J=U+(ue-xe),ne=me*ce/w*R,q=L*ce/w*R;Y.projectionMatrix.makePerspective(V,J,ne,q,R,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function K(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Q=Y.near,ge=Y.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),y.near=b.near=M.near=Q,y.far=b.far=M.far=ge,(E!==y.near||I!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,I=y.far);const ue=Y.parent,Oe=y.cameras;K(y,ue);for(let Ue=0;Ue<Oe.length;Ue++)K(Oe[Ue],ue);Oe.length===2?D(y,M,b):y.projectionMatrix.copy(M.projectionMatrix),P(Y,y,ue)};function P(Y,Q,ge){ge===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=wc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ie=null;function Te(Y,Q){if(c=Q.getViewerPose(u||o),g=Q,c!==null){const ge=c.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let ue=!1;ge.length!==y.cameras.length&&(y.cameras.length=0,ue=!0);for(let Ue=0;Ue<ge.length;Ue++){const de=ge[Ue];let ce=null;if(d!==null)ce=d.getViewport(de);else{const L=f.getViewSubImage(h,de);ce=L.viewport,Ue===0&&(e.setRenderTargetTextures(x,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(x))}let me=N[Ue];me===void 0&&(me=new Wi,me.layers.enable(Ue),me.viewport=new Yt,N[Ue]=me),me.matrix.fromArray(de.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(de.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(ce.x,ce.y,ce.width,ce.height),Ue===0&&(y.matrix.copy(me.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ue===!0&&y.cameras.push(me)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ue=f.getDepthInformation(ge[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(e,Ue,r.renderState)}}for(let ge=0;ge<v.length;ge++){const ue=S[ge],Oe=v[ge];ue!==null&&Oe!==void 0&&Oe.update(ue,Q,u||o)}ie&&ie(Y,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Ge=new BE;Ge.setAnimationLoop(Te),this.setAnimationLoop=function(Y){ie=Y},this.dispose=function(){}}}const go=new Ur,MN=new ht;function wN(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,FE(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,x,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ni&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ni&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),v=x.envMap,S=x.envMapRotation;v&&(m.envMap.value=v,go.copy(S),go.x*=-1,go.y*=-1,go.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(go.y*=-1,go.z*=-1),m.envMapRotation.value.setFromMatrix4(MN.makeRotationFromEuler(go)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ni&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function EN(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function u(x,v){let S=r[x.id];S===void 0&&(g(x),S=c(x),r[x.id]=S,x.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(x,C);const T=e.render.frame;s[x.id]!==T&&(h(x),s[x.id]=T)}function c(x){const v=f();x.__bindingPointIndex=v;const S=n.createBuffer(),C=x.__size,T=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],S=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,M=S.length;T<M;T++){const b=Array.isArray(S[T])?S[T]:[S[T]];for(let N=0,y=b.length;N<y;N++){const E=b[N];if(d(E,T,N,C)===!0){const I=E.__offset,B=Array.isArray(E.value)?E.value:[E.value];let G=0;for(let $=0;$<B.length;$++){const H=B[$],j=_(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,I+G,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,v,S,C){const T=x.value,M=v+"_"+S;if(C[M]===void 0)return typeof T=="number"||typeof T=="boolean"?C[M]=T:C[M]=T.clone(),!0;{const b=C[M];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return C[M]=T,!0}else if(b.equals(T)===!1)return b.copy(T),!0}return!1}function g(x){const v=x.uniforms;let S=0;const C=16;for(let M=0,b=v.length;M<b;M++){const N=Array.isArray(v[M])?v[M]:[v[M]];for(let y=0,E=N.length;y<E;y++){const I=N[y],B=Array.isArray(I.value)?I.value:[I.value];for(let G=0,$=B.length;G<$;G++){const H=B[G],j=_(H),D=S%C,K=D%j.boundary,P=D+K;S+=K,P!==0&&C-P<j.storage&&(S+=C-P),I.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=j.storage}}}const T=S%C;return T>0&&(S+=C-T),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class TN{constructor(e={}){const{canvas:t=dR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ki,this.toneMapping=$s,this.toneMappingExposure=1;const v=this;let S=!1,C=0,T=0,M=null,b=-1,N=null;const y=new Yt,E=new Yt;let I=null;const B=new qe(0);let G=0,$=t.width,H=t.height,j=1,D=null,K=null;const P=new Yt(0,0,$,H),ie=new Yt(0,0,$,H);let Te=!1;const Ge=new av;let Y=!1,Q=!1;const ge=new ht,ue=new ht,Oe=new O,Ue=new Yt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function me(){return M===null?j:1}let L=i;function pe(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$_}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Se,!1),L===null){const z="webgl2";if(L=pe(z,A),L===null)throw pe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _e,ae,U,ve,xe,R,w,V,J,ne,q,Le,le,oe,Ye,se,Re,De,We,Pe,Ze,$e,ut,F;function re(){_e=new P3(L),_e.init(),$e=new mN(L,_e),ae=new E3(L,_e,e,$e),U=new hN(L),ae.reverseDepthBuffer&&U.buffers.depth.setReversed(!0),ve=new N3(L),xe=new ZD,R=new pN(L,_e,U,xe,ae,$e,ve),w=new A3(v),V=new R3(v),J=new BR(L),ut=new M3(L,J),ne=new L3(L,J,ve,ut),q=new U3(L,ne,J,ve),We=new I3(L,ae,R),se=new T3(xe),Le=new KD(v,w,V,_e,ae,ut,se),le=new wN(v,xe),oe=new QD,Ye=new sN(_e),De=new S3(v,w,V,U,q,h,l),Re=new cN(v,q,ae),F=new EN(L,ve,ae,U),Pe=new w3(L,_e,ve),Ze=new D3(L,_e,ve),ve.programs=Le.programs,v.capabilities=ae,v.extensions=_e,v.properties=xe,v.renderLists=oe,v.shadowMap=Re,v.state=U,v.info=ve}re();const Z=new SN(v,L);this.xr=Z,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize($,H,!1))},this.getSize=function(A){return A.set($,H)},this.setSize=function(A,z,W=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,H=z,t.width=Math.floor(A*j),t.height=Math.floor(z*j),W===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set($*j,H*j).floor()},this.setDrawingBufferSize=function(A,z,W){$=A,H=z,j=W,t.width=Math.floor(A*W),t.height=Math.floor(z*W),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(P)},this.setViewport=function(A,z,W,X){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,z,W,X),U.viewport(y.copy(P).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,z,W,X){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,z,W,X),U.scissor(E.copy(ie).multiplyScalar(j).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(A){U.setScissorTest(Te=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(A=!0,z=!0,W=!0){let X=0;if(A){let k=!1;if(M!==null){const he=M.texture.format;k=he===iv||he===nv||he===tv}if(k){const he=M.texture.type,be=he===ds||he===ea||he===Mc||he===Ll||he===J_||he===Q_,we=De.getClearColor(),Me=De.getClearAlpha(),ze=we.r,je=we.g,ke=we.b;be?(d[0]=ze,d[1]=je,d[2]=ke,d[3]=Me,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=ze,g[1]=je,g[2]=ke,g[3]=Me,L.clearBufferiv(L.COLOR,0,g))}else X|=L.COLOR_BUFFER_BIT}z&&(X|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),oe.dispose(),Ye.dispose(),xe.dispose(),w.dispose(),V.dispose(),q.dispose(),ut.dispose(),F.dispose(),Le.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",pt),Z.removeEventListener("sessionend",Ae),Xe.stop()};function te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=ve.autoReset,z=Re.enabled,W=Re.autoUpdate,X=Re.needsUpdate,k=Re.type;re(),ve.autoReset=A,Re.enabled=z,Re.autoUpdate=W,Re.needsUpdate=X,Re.type=k}function Se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Je(A){const z=A.target;z.removeEventListener("dispose",Je),Mt(z)}function Mt(A){Nt(A),xe.remove(A)}function Nt(A){const z=xe.get(A).programs;z!==void 0&&(z.forEach(function(W){Le.releaseProgram(W)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,W,X,k,he){z===null&&(z=de);const be=k.isMesh&&k.matrixWorld.determinant()<0,we=vt(A,z,W,X,k);U.setMaterial(X,be);let Me=W.index,ze=1;if(X.wireframe===!0){if(Me=ne.getWireframeAttribute(W),Me===void 0)return;ze=2}const je=W.drawRange,ke=W.attributes.position;let ct=je.start*ze,at=(je.start+je.count)*ze;he!==null&&(ct=Math.max(ct,he.start*ze),at=Math.min(at,(he.start+he.count)*ze)),Me!==null?(ct=Math.max(ct,0),at=Math.min(at,Me.count)):ke!=null&&(ct=Math.max(ct,0),at=Math.min(at,ke.count));const St=at-ct;if(St<0||St===1/0)return;ut.setup(k,X,we,W,Me);let mn,lt=Pe;if(Me!==null&&(mn=J.get(Me),lt=Ze,lt.setIndex(mn)),k.isMesh)X.wireframe===!0?(U.setLineWidth(X.wireframeLinewidth*me()),lt.setMode(L.LINES)):lt.setMode(L.TRIANGLES);else if(k.isLine){let Ve=X.linewidth;Ve===void 0&&(Ve=1),U.setLineWidth(Ve*me()),k.isLineSegments?lt.setMode(L.LINES):k.isLineLoop?lt.setMode(L.LINE_LOOP):lt.setMode(L.LINE_STRIP)}else k.isPoints?lt.setMode(L.POINTS):k.isSprite&&lt.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)lt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))lt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ve=k._multiDrawStarts,wn=k._multiDrawCounts,_t=k._multiDrawCount,er=Me?J.get(Me).bytesPerElement:1,aa=xe.get(X).currentProgram.getUniforms();for(let vi=0;vi<_t;vi++)aa.setValue(L,"_gl_DrawID",vi),lt.render(Ve[vi]/er,wn[vi])}else if(k.isInstancedMesh)lt.renderInstances(ct,St,k.count);else if(W.isInstancedBufferGeometry){const Ve=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,wn=Math.min(W.instanceCount,Ve);lt.renderInstances(ct,St,wn)}else lt.render(ct,St)};function rt(A,z,W){A.transparent===!0&&A.side===Zr&&A.forceSinglePass===!1?(A.side=ni,A.needsUpdate=!0,Kt(A,z,W),A.side=to,A.needsUpdate=!0,Kt(A,z,W),A.side=Zr):Kt(A,z,W)}this.compile=function(A,z,W=null){W===null&&(W=A),m=Ye.get(W),m.init(z),x.push(m),W.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),A!==W&&A.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const X=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const he=k.material;if(he)if(Array.isArray(he))for(let be=0;be<he.length;be++){const we=he[be];rt(we,W,k),X.add(we)}else rt(he,W,k),X.add(he)}),x.pop(),m=null,X},this.compileAsync=function(A,z,W=null){const X=this.compile(A,z,W);return new Promise(k=>{function he(){if(X.forEach(function(be){xe.get(be).currentProgram.isReady()&&X.delete(be)}),X.size===0){k(A);return}setTimeout(he,10)}_e.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Be=null;function Fe(A){Be&&Be(A)}function pt(){Xe.stop()}function Ae(){Xe.start()}const Xe=new BE;Xe.setAnimationLoop(Fe),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(A){Be=A,Z.setAnimationLoop(A),A===null?Xe.stop():Xe.start()},Z.addEventListener("sessionstart",pt),Z.addEventListener("sessionend",Ae),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(z),z=Z.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,M),m=Ye.get(A,x.length),m.init(z),x.push(m),ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ge.setFromProjectionMatrix(ue),Q=this.localClippingEnabled,Y=se.init(this.clippingPlanes,Q),_=oe.get(A,p.length),_.init(),p.push(_),Z.enabled===!0&&Z.isPresenting===!0){const he=v.xr.getDepthSensingMesh();he!==null&&He(he,z,-1/0,v.sortObjects)}He(A,z,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(D,K),ce=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,ce&&De.addToRenderList(_,A),this.info.render.frame++,Y===!0&&se.beginShadows();const W=m.state.shadowsArray;Re.render(W,A,z),Y===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,k=_.transmissive;if(m.setupLights(),z.isArrayCamera){const he=z.cameras;if(k.length>0)for(let be=0,we=he.length;be<we;be++){const Me=he[be];qt(X,k,A,Me)}ce&&De.render(A);for(let be=0,we=he.length;be<we;be++){const Me=he[be];Ke(_,A,Me,Me.viewport)}}else k.length>0&&qt(X,k,A,z),ce&&De.render(A),Ke(_,A,z);M!==null&&(R.updateMultisampleRenderTarget(M),R.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(v,A,z),ut.resetDefaultState(),b=-1,N=null,x.pop(),x.length>0?(m=x[x.length-1],Y===!0&&se.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function He(A,z,W,X){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ge.intersectsSprite(A)){X&&Ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);const be=q.update(A),we=A.material;we.visible&&_.push(A,be,we,W,Ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ge.intersectsObject(A))){const be=q.update(A),we=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ue.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ue.copy(be.boundingSphere.center)),Ue.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(we)){const Me=be.groups;for(let ze=0,je=Me.length;ze<je;ze++){const ke=Me[ze],ct=we[ke.materialIndex];ct&&ct.visible&&_.push(A,be,ct,W,Ue.z,ke)}}else we.visible&&_.push(A,be,we,W,Ue.z,null)}}const he=A.children;for(let be=0,we=he.length;be<we;be++)He(he[be],z,W,X)}function Ke(A,z,W,X){const k=A.opaque,he=A.transmissive,be=A.transparent;m.setupLightsView(W),Y===!0&&se.setGlobalState(v.clippingPlanes,W),X&&U.viewport(y.copy(X)),k.length>0&&Qe(k,z,W),he.length>0&&Qe(he,z,W),be.length>0&&Qe(be,z,W),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function qt(A,z,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new gr(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?ss:ds,minFilter:Io,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const he=m.state.transmissionRenderTarget[X.id],be=X.viewport||y;he.setSize(be.z,be.w);const we=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor(B),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),ce&&De.render(W);const Me=v.toneMapping;v.toneMapping=$s;const ze=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),Y===!0&&se.setGlobalState(v.clippingPlanes,X),Qe(A,W,X),R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he),_e.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let ke=0,ct=z.length;ke<ct;ke++){const at=z[ke],St=at.object,mn=at.geometry,lt=at.material,Ve=at.group;if(lt.side===Zr&&St.layers.test(X.layers)){const wn=lt.side;lt.side=ni,lt.needsUpdate=!0,It(St,W,X,mn,lt,Ve),lt.side=wn,lt.needsUpdate=!0,je=!0}}je===!0&&(R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he))}v.setRenderTarget(we),v.setClearColor(B,G),ze!==void 0&&(X.viewport=ze),v.toneMapping=Me}function Qe(A,z,W){const X=z.isScene===!0?z.overrideMaterial:null;for(let k=0,he=A.length;k<he;k++){const be=A[k],we=be.object,Me=be.geometry,ze=X===null?be.material:X,je=be.group;we.layers.test(W.layers)&&It(we,z,W,Me,ze,je)}}function It(A,z,W,X,k,he){A.onBeforeRender(v,z,W,X,k,he),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(v,z,W,X,A,he),k.transparent===!0&&k.side===Zr&&k.forceSinglePass===!1?(k.side=ni,k.needsUpdate=!0,v.renderBufferDirect(W,z,X,k,A,he),k.side=to,k.needsUpdate=!0,v.renderBufferDirect(W,z,X,k,A,he),k.side=Zr):v.renderBufferDirect(W,z,X,k,A,he),A.onAfterRender(v,z,W,X,k,he)}function Kt(A,z,W){z.isScene!==!0&&(z=de);const X=xe.get(A),k=m.state.lights,he=m.state.shadowsArray,be=k.state.version,we=Le.getParameters(A,k.state,he,z,W),Me=Le.getProgramCacheKey(we);let ze=X.programs;X.environment=A.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(A.isMeshStandardMaterial?V:w).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",Je),ze=new Map,X.programs=ze);let je=ze.get(Me);if(je!==void 0){if(X.currentProgram===je&&X.lightsStateVersion===be)return wt(A,we),je}else we.uniforms=Le.getUniforms(A),A.onBeforeCompile(we,v),je=Le.acquireProgram(we,Me),ze.set(Me,je),X.uniforms=we.uniforms;const ke=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=se.uniform),wt(A,we),X.needsLights=Rt(A),X.lightsStateVersion=be,X.needsLights&&(ke.ambientLightColor.value=k.state.ambient,ke.lightProbe.value=k.state.probe,ke.directionalLights.value=k.state.directional,ke.directionalLightShadows.value=k.state.directionalShadow,ke.spotLights.value=k.state.spot,ke.spotLightShadows.value=k.state.spotShadow,ke.rectAreaLights.value=k.state.rectArea,ke.ltc_1.value=k.state.rectAreaLTC1,ke.ltc_2.value=k.state.rectAreaLTC2,ke.pointLights.value=k.state.point,ke.pointLightShadows.value=k.state.pointShadow,ke.hemisphereLights.value=k.state.hemi,ke.directionalShadowMap.value=k.state.directionalShadowMap,ke.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ke.spotShadowMap.value=k.state.spotShadowMap,ke.spotLightMatrix.value=k.state.spotLightMatrix,ke.spotLightMap.value=k.state.spotLightMap,ke.pointShadowMap.value=k.state.pointShadowMap,ke.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=je,X.uniformsList=null,je}function bt(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Sh.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function wt(A,z){const W=xe.get(A);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function vt(A,z,W,X,k){z.isScene!==!0&&(z=de),R.resetTextureUnits();const he=z.fog,be=X.isMeshStandardMaterial?z.environment:null,we=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:oo,Me=(X.isMeshStandardMaterial?V:w).get(X.envMap||be),ze=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,je=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),ke=!!W.morphAttributes.position,ct=!!W.morphAttributes.normal,at=!!W.morphAttributes.color;let St=$s;X.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(St=v.toneMapping);const mn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,lt=mn!==void 0?mn.length:0,Ve=xe.get(X),wn=m.state.lights;if(Y===!0&&(Q===!0||A!==N)){const Ui=A===N&&X.id===b;se.setState(X,A,Ui)}let _t=!1;X.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==wn.state.version||Ve.outputColorSpace!==we||k.isBatchedMesh&&Ve.batching===!1||!k.isBatchedMesh&&Ve.batching===!0||k.isBatchedMesh&&Ve.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ve.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ve.instancing===!1||!k.isInstancedMesh&&Ve.instancing===!0||k.isSkinnedMesh&&Ve.skinning===!1||!k.isSkinnedMesh&&Ve.skinning===!0||k.isInstancedMesh&&Ve.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ve.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ve.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ve.instancingMorph===!1&&k.morphTexture!==null||Ve.envMap!==Me||X.fog===!0&&Ve.fog!==he||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==se.numPlanes||Ve.numIntersection!==se.numIntersection)||Ve.vertexAlphas!==ze||Ve.vertexTangents!==je||Ve.morphTargets!==ke||Ve.morphNormals!==ct||Ve.morphColors!==at||Ve.toneMapping!==St||Ve.morphTargetsCount!==lt)&&(_t=!0):(_t=!0,Ve.__version=X.version);let er=Ve.currentProgram;_t===!0&&(er=Kt(X,z,k));let aa=!1,vi=!1,Wd=!1;const Zt=er.getUniforms(),ms=Ve.uniforms;if(U.useProgram(er.program)&&(aa=!0,vi=!0,Wd=!0),X.id!==b&&(b=X.id,vi=!0),aa||N!==A){ae.reverseDepthBuffer?(ge.copy(A.projectionMatrix),mR(ge),gR(ge),Zt.setValue(L,"projectionMatrix",ge)):Zt.setValue(L,"projectionMatrix",A.projectionMatrix),Zt.setValue(L,"viewMatrix",A.matrixWorldInverse);const Ui=Zt.map.cameraPosition;Ui!==void 0&&Ui.setValue(L,Oe.setFromMatrixPosition(A.matrixWorld)),ae.logarithmicDepthBuffer&&Zt.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Zt.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),N!==A&&(N=A,vi=!0,Wd=!0)}if(k.isSkinnedMesh){Zt.setOptional(L,k,"bindMatrix"),Zt.setOptional(L,k,"bindMatrixInverse");const Ui=k.skeleton;Ui&&(Ui.boneTexture===null&&Ui.computeBoneTexture(),Zt.setValue(L,"boneTexture",Ui.boneTexture,R))}k.isBatchedMesh&&(Zt.setOptional(L,k,"batchingTexture"),Zt.setValue(L,"batchingTexture",k._matricesTexture,R),Zt.setOptional(L,k,"batchingIdTexture"),Zt.setValue(L,"batchingIdTexture",k._indirectTexture,R),Zt.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&Zt.setValue(L,"batchingColorTexture",k._colorsTexture,R));const Xd=W.morphAttributes;if((Xd.position!==void 0||Xd.normal!==void 0||Xd.color!==void 0)&&We.update(k,W,er),(vi||Ve.receiveShadow!==k.receiveShadow)&&(Ve.receiveShadow=k.receiveShadow,Zt.setValue(L,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ms.envMap.value=Me,ms.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(ms.envMapIntensity.value=z.environmentIntensity),vi&&(Zt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&_i(ms,Wd),he&&X.fog===!0&&le.refreshFogUniforms(ms,he),le.refreshMaterialUniforms(ms,X,j,H,m.state.transmissionRenderTarget[A.id]),Sh.upload(L,bt(Ve),ms,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Sh.upload(L,bt(Ve),ms,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Zt.setValue(L,"center",k.center),Zt.setValue(L,"modelViewMatrix",k.modelViewMatrix),Zt.setValue(L,"normalMatrix",k.normalMatrix),Zt.setValue(L,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ui=X.uniformsGroups;for(let jd=0,cT=Ui.length;jd<cT;jd++){const vv=Ui[jd];F.update(vv,er),F.bind(vv,er)}}return er}function _i(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Rt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,z,W){xe.get(A.texture).__webglTexture=z,xe.get(A.depthTexture).__webglTexture=W;const X=xe.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){const W=xe.get(A);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,W=0){M=A,C=z,T=W;let X=!0,k=null,he=!1,be=!1;if(A){const Me=xe.get(A);if(Me.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(Me.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Me.__hasExternalTextures)R.rebindTextures(A,xe.get(A.texture).__webglTexture,xe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ke=A.depthTexture;if(Me.__boundDepthTexture!==ke){if(ke!==null&&xe.has(ke)&&(A.width!==ke.image.width||A.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(be=!0);const je=xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(je[z])?k=je[z][W]:k=je[z],he=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?k=xe.get(A).__webglMultisampledFramebuffer:Array.isArray(je)?k=je[W]:k=je,y.copy(A.viewport),E.copy(A.scissor),I=A.scissorTest}else y.copy(P).multiplyScalar(j).floor(),E.copy(ie).multiplyScalar(j).floor(),I=Te;if(U.bindFramebuffer(L.FRAMEBUFFER,k)&&X&&U.drawBuffers(A,k),U.viewport(y),U.scissor(E),U.setScissorTest(I),he){const Me=xe.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,Me.__webglTexture,W)}else if(be){const Me=xe.get(A.texture),ze=z||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.__webglTexture,W||0,ze)}b=-1},this.readRenderTargetPixels=function(A,z,W,X,k,he,be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we){U.bindFramebuffer(L.FRAMEBUFFER,we);try{const Me=A.texture,ze=Me.format,je=Me.type;if(!ae.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-X&&W>=0&&W<=A.height-k&&L.readPixels(z,W,X,k,$e.convert(ze),$e.convert(je),he)}finally{const Me=M!==null?xe.get(M).__webglFramebuffer:null;U.bindFramebuffer(L.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(A,z,W,X,k,he,be){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we){const Me=A.texture,ze=Me.format,je=Me.type;if(!ae.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=A.width-X&&W>=0&&W<=A.height-k){U.bindFramebuffer(L.FRAMEBUFFER,we);const ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),L.readPixels(z,W,X,k,$e.convert(ze),$e.convert(je),0);const ct=M!==null?xe.get(M).__webglFramebuffer:null;U.bindFramebuffer(L.FRAMEBUFFER,ct);const at=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await pR(L,at,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he),L.deleteBuffer(ke),L.deleteSync(at),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,z=null,W=0){A.isTexture!==!0&&(yh("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1]);const X=Math.pow(2,-W),k=Math.floor(A.image.width*X),he=Math.floor(A.image.height*X),be=z!==null?z.x:0,we=z!==null?z.y:0;R.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,be,we,k,he),U.unbindTexture()},this.copyTextureToTexture=function(A,z,W=null,X=null,k=0){A.isTexture!==!0&&(yh("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],z=arguments[2],k=arguments[3]||0,W=null);let he,be,we,Me,ze,je;W!==null?(he=W.max.x-W.min.x,be=W.max.y-W.min.y,we=W.min.x,Me=W.min.y):(he=A.image.width,be=A.image.height,we=0,Me=0),X!==null?(ze=X.x,je=X.y):(ze=0,je=0);const ke=$e.convert(z.format),ct=$e.convert(z.type);R.setTexture2D(z,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const at=L.getParameter(L.UNPACK_ROW_LENGTH),St=L.getParameter(L.UNPACK_IMAGE_HEIGHT),mn=L.getParameter(L.UNPACK_SKIP_PIXELS),lt=L.getParameter(L.UNPACK_SKIP_ROWS),Ve=L.getParameter(L.UNPACK_SKIP_IMAGES),wn=A.isCompressedTexture?A.mipmaps[k]:A.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,wn.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wn.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,we),L.pixelStorei(L.UNPACK_SKIP_ROWS,Me),A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,k,ze,je,he,be,ke,ct,wn.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,k,ze,je,wn.width,wn.height,ke,wn.data):L.texSubImage2D(L.TEXTURE_2D,k,ze,je,he,be,ke,ct,wn),L.pixelStorei(L.UNPACK_ROW_LENGTH,at),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St),L.pixelStorei(L.UNPACK_SKIP_PIXELS,mn),L.pixelStorei(L.UNPACK_SKIP_ROWS,lt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve),k===0&&z.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),U.unbindTexture()},this.copyTextureToTexture3D=function(A,z,W=null,X=null,k=0){A.isTexture!==!0&&(yh("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,A=arguments[2],z=arguments[3],k=arguments[4]||0);let he,be,we,Me,ze,je,ke,ct,at;const St=A.isCompressedTexture?A.mipmaps[k]:A.image;W!==null?(he=W.max.x-W.min.x,be=W.max.y-W.min.y,we=W.max.z-W.min.z,Me=W.min.x,ze=W.min.y,je=W.min.z):(he=St.width,be=St.height,we=St.depth,Me=0,ze=0,je=0),X!==null?(ke=X.x,ct=X.y,at=X.z):(ke=0,ct=0,at=0);const mn=$e.convert(z.format),lt=$e.convert(z.type);let Ve;if(z.isData3DTexture)R.setTexture3D(z,0),Ve=L.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)R.setTexture2DArray(z,0),Ve=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const wn=L.getParameter(L.UNPACK_ROW_LENGTH),_t=L.getParameter(L.UNPACK_IMAGE_HEIGHT),er=L.getParameter(L.UNPACK_SKIP_PIXELS),aa=L.getParameter(L.UNPACK_SKIP_ROWS),vi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,St.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Me),L.pixelStorei(L.UNPACK_SKIP_ROWS,ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,je),A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Ve,k,ke,ct,at,he,be,we,mn,lt,St.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(Ve,k,ke,ct,at,he,be,we,mn,St.data):L.texSubImage3D(Ve,k,ke,ct,at,he,be,we,mn,lt,St),L.pixelStorei(L.UNPACK_ROW_LENGTH,wn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t),L.pixelStorei(L.UNPACK_SKIP_PIXELS,er),L.pixelStorei(L.UNPACK_SKIP_ROWS,aa),L.pixelStorei(L.UNPACK_SKIP_IMAGES,vi),k===0&&z.generateMipmaps&&L.generateMipmap(Ve),U.unbindTexture()},this.initRenderTarget=function(A){xe.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),U.unbindTexture()},this.resetState=function(){C=0,T=0,M=null,U.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ts}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===rv?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===Fd?"display-p3":"srgb"}}class cv{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=t}clone(){return new cv(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class AN extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class CN{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=S0,this.updateRanges=[],this.version=0,this.uuid=Nr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gn=new O;class fd{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=hr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hr(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),r=xt(r,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class jE extends ao{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Aa;const ru=new O,Ca=new O,ba=new O,Ra=new Ee,su=new Ee,YE=new ht,If=new O,ou=new O,Uf=new O,tS=new Ee,cm=new Ee,nS=new Ee;class fm extends an{constructor(e=new jE){if(super(),this.isSprite=!0,this.type="Sprite",Aa===void 0){Aa=new on;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new CN(t,5);Aa.setIndex([0,1,2,0,2,3]),Aa.setAttribute("position",new fd(i,3,0,!1)),Aa.setAttribute("uv",new fd(i,2,3,!1))}this.geometry=Aa,this.material=e,this.center=new Ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ca.setFromMatrixScale(this.matrixWorld),YE.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ba.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ca.multiplyScalar(-ba.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Of(If.set(-.5,-.5,0),ba,o,Ca,r,s),Of(ou.set(.5,-.5,0),ba,o,Ca,r,s),Of(Uf.set(.5,.5,0),ba,o,Ca,r,s),tS.set(0,0),cm.set(1,0),nS.set(1,1);let a=e.ray.intersectTriangle(If,ou,Uf,!1,ru);if(a===null&&(Of(ou.set(-.5,.5,0),ba,o,Ca,r,s),cm.set(0,1),a=e.ray.intersectTriangle(If,Uf,ou,!1,ru),a===null))return;const l=e.ray.origin.distanceTo(ru);l<e.near||l>e.far||t.push({distance:l,point:ru.clone(),uv:Xi.getInterpolation(ru,If,ou,Uf,tS,cm,nS,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Of(n,e,t,i,r,s){Ra.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(su.x=s*Ra.x-r*Ra.y,su.y=r*Ra.x+s*Ra.y):su.copy(Ra),n.copy(e),n.x+=su.x,n.y+=su.y,n.applyMatrix4(YE)}class bN extends Rn{constructor(e=null,t=1,i=1,r,s,o,a,l,u=li,c=li,f,h){super(null,o,a,l,u,c,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class iS extends Cn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Pa=new ht,rS=new ht,Ff=[],sS=new sa,RN=new ht,au=new fn,lu=new oa;class Vr extends fn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new iS(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,RN)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Pa),sS.copy(e.boundingBox).applyMatrix4(Pa),this.boundingBox.union(sS)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Pa),lu.copy(e.boundingSphere).applyMatrix4(Pa),this.boundingSphere.union(lu)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(au.geometry=this.geometry,au.material=this.material,au.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lu.copy(this.boundingSphere),lu.applyMatrix4(i),e.ray.intersectsSphere(lu)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Pa),rS.multiplyMatrices(i,Pa),au.matrixWorld=rS,au.raycast(e,Ff);for(let o=0,a=Ff.length;o<a;o++){const l=Ff[o];l.instanceId=s,l.object=this,t.push(l)}Ff.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new iS(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new bN(new Float32Array(r*this.count),r,this.count,ev,br));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class PN extends ao{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hd=new O,dd=new O,oS=new ht,uu=new ov,kf=new oa,hm=new O,aS=new O;class LN extends an{constructor(e=new on,t=new PN){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)hd.fromBufferAttribute(t,r-1),dd.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=hd.distanceTo(dd);e.setAttribute("lineDistance",new Ft(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kf.copy(i.boundingSphere),kf.applyMatrix4(r),kf.radius+=s,e.ray.intersectsSphere(kf)===!1)return;oS.copy(r).invert(),uu.copy(e.ray).applyMatrix4(oS);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=u){const p=c.getX(_),x=c.getX(_+1),v=zf(this,e,uu,l,p,x);v&&t.push(v)}if(this.isLineLoop){const _=c.getX(g-1),m=c.getX(d),p=zf(this,e,uu,l,_,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=u){const p=zf(this,e,uu,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=zf(this,e,uu,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zf(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(hd.fromBufferAttribute(o,r),dd.fromBufferAttribute(o,s),t.distanceSqToSegment(hd,dd,hm,aS)>i)return;hm.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(hm);if(!(l<e.near||l>e.far))return{distance:l,point:aS.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const lS=new O,uS=new O;class DN extends LN{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)lS.fromBufferAttribute(t,r),uS.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+lS.distanceTo(uS);e.setAttribute("lineDistance",new Ft(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class w0 extends ao{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cS=new ht,E0=new ov,Bf=new oa,Hf=new O;class Vf extends an{constructor(e=new on,t=new w0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bf.copy(i.boundingSphere),Bf.applyMatrix4(r),Bf.radius+=s,e.ray.intersectsSphere(Bf)===!1)return;cS.copy(r).invert(),E0.copy(e.ray).applyMatrix4(cS);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=u.getX(g);Hf.fromBufferAttribute(f,m),fS(Hf,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)Hf.fromBufferAttribute(f,g),fS(Hf,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function fS(n,e,t,i,r,s,o){const a=E0.distanceSqToPoint(n);if(a<t){const l=new O;E0.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class NN extends Rn{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Or{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],h=i[r+1]-c,d=(o-c)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ee:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new O,r=[],s=[],o=[],a=new O,l=new ht;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new O)}s[0]=new O,o[0]=new O;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Tn(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Tn(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class fv extends Or{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ee){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=u-this.aY;l=h*c-d*f+this.aX,u=h*f+d*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class IN extends fv{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function hv(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let h=(o-s)/u-(a-s)/(u+c)+(a-o)/c,d=(a-o)/c-(l-o)/(c+f)+(l-a)/f;h*=c,d*=c,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Gf=new O,dm=new hv,pm=new hv,mm=new hv;class UN extends Or{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new O){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(Gf.subVectors(r[0],r[1]).add(r[0]),u=Gf);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(Gf.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Gf),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(c),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),dm.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,g,_,m),pm.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,g,_,m),mm.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&(dm.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),pm.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),mm.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set(dm.calc(l),pm.calc(l),mm.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function hS(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function ON(n,e){const t=1-n;return t*t*e}function FN(n,e){return 2*(1-n)*n*e}function kN(n,e){return n*n*e}function Yu(n,e,t,i){return ON(n,e)+FN(n,t)+kN(n,i)}function zN(n,e){const t=1-n;return t*t*t*e}function BN(n,e){const t=1-n;return 3*t*t*n*e}function HN(n,e){return 3*(1-n)*n*n*e}function VN(n,e){return n*n*n*e}function $u(n,e,t,i,r){return zN(n,e)+BN(n,t)+HN(n,i)+VN(n,r)}class $E extends Or{constructor(e=new Ee,t=new Ee,i=new Ee,r=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ee){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set($u(e,r.x,s.x,o.x,a.x),$u(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class GN extends Or{constructor(e=new O,t=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new O){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set($u(e,r.x,s.x,o.x,a.x),$u(e,r.y,s.y,o.y,a.y),$u(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qE extends Or{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class WN extends Or{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class KE extends Or{constructor(e=new Ee,t=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ee){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Yu(e,r.x,s.x,o.x),Yu(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class XN extends Or{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Yu(e,r.x,s.x,o.x),Yu(e,r.y,s.y,o.y),Yu(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ZE extends Or{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(hS(a,l.x,u.x,c.x,f.x),hS(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ee().fromArray(r))}return this}}var dS=Object.freeze({__proto__:null,ArcCurve:IN,CatmullRomCurve3:UN,CubicBezierCurve:$E,CubicBezierCurve3:GN,EllipseCurve:fv,LineCurve:qE,LineCurve3:WN,QuadraticBezierCurve:KE,QuadraticBezierCurve3:XN,SplineCurve:ZE});class jN extends Or{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dS[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new dS[r.type]().fromJSON(r))}return this}}class pS extends jN{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new qE(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new KE(this.currentPoint.clone(),new Ee(e,t),new Ee(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new $E(this.currentPoint.clone(),new Ee(e,t),new Ee(i,r),new Ee(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new ZE(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const u=new fv(e,t,i,r,s,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class zd extends on{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],h=[],d=[];let g=0;const _=[],m=i/2;let p=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new Ft(f,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(d,2));function x(){const S=new O,C=new O;let T=0;const M=(t-e)/i;for(let b=0;b<=s;b++){const N=[],y=b/s,E=y*(t-e)+e;for(let I=0;I<=r;I++){const B=I/r,G=B*l+a,$=Math.sin(G),H=Math.cos(G);C.x=E*$,C.y=-y*i+m,C.z=E*H,f.push(C.x,C.y,C.z),S.set($,M,H).normalize(),h.push(S.x,S.y,S.z),d.push(B,1-y),N.push(g++)}_.push(N)}for(let b=0;b<r;b++)for(let N=0;N<s;N++){const y=_[N][b],E=_[N+1][b],I=_[N+1][b+1],B=_[N][b+1];e>0&&(c.push(y,E,B),T+=3),t>0&&(c.push(E,I,B),T+=3)}u.addGroup(p,T,0),p+=T}function v(S){const C=g,T=new Ee,M=new O;let b=0;const N=S===!0?e:t,y=S===!0?1:-1;for(let I=1;I<=r;I++)f.push(0,m*y,0),h.push(0,y,0),d.push(.5,.5),g++;const E=g;for(let I=0;I<=r;I++){const G=I/r*l+a,$=Math.cos(G),H=Math.sin(G);M.x=N*H,M.y=m*y,M.z=N*$,f.push(M.x,M.y,M.z),h.push(0,y,0),T.x=$*.5+.5,T.y=H*.5*y+.5,d.push(T.x,T.y),g++}for(let I=0;I<r;I++){const B=C+I,G=E+I;S===!0?c.push(G,G+1,B):c.push(G+1,G,B),b+=3}u.addGroup(p,b,S===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dv extends zd{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new dv(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class JE extends pS{constructor(e){super(e),this.uuid=Nr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new pS().fromJSON(r))}return this}}const YN={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=QE(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,f,h,d;if(i&&(s=JN(n,e,s,t)),n.length>80*t){a=u=n[0],l=c=n[1];for(let g=t;g<r;g+=t)f=n[g],h=n[g+1],f<a&&(a=f),h<l&&(l=h),f>u&&(u=f),h>c&&(c=h);d=Math.max(u-a,c-l),d=d!==0?32767/d:0}return Ac(s,o,t,a,l,d,0),o}};function QE(n,e,t,i,r){let s,o;if(r===uI(n,e,t,i)>0)for(s=e;s<t;s+=i)o=mS(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=mS(s,n[s],n[s+1],o);return o&&Bd(o,o.next)&&(bc(o),o=o.next),o}function ta(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Bd(t,t.next)||Gt(t.prev,t,t.next)===0)){if(bc(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ac(n,e,t,i,r,s,o){if(!n)return;!o&&s&&iI(n,i,r,s);let a=n,l,u;for(;n.prev!==n.next;){if(l=n.prev,u=n.next,s?qN(n,i,r,s):$N(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(u.i/t|0),bc(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=KN(ta(n),e,t),Ac(n,e,t,i,r,s,2)):o===2&&ZN(n,e,t,i,r,s):Ac(ta(n),e,t,i,r,s,1);break}}}function $N(n){const e=n.prev,t=n,i=n.next;if(Gt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,f=a<l?a<u?a:u:l<u?l:u,h=r>s?r>o?r:o:s>o?s:o,d=a>l?a>u?a:u:l>u?l:u;let g=i.next;for(;g!==e;){if(g.x>=c&&g.x<=h&&g.y>=f&&g.y<=d&&Ja(r,a,s,l,o,u,g.x,g.y)&&Gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qN(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Gt(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,f=s.y,h=o.y,d=a<l?a<u?a:u:l<u?l:u,g=c<f?c<h?c:h:f<h?f:h,_=a>l?a>u?a:u:l>u?l:u,m=c>f?c>h?c:h:f>h?f:h,p=T0(d,g,e,t,i),x=T0(_,m,e,t,i);let v=n.prevZ,S=n.nextZ;for(;v&&v.z>=p&&S&&S.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Ja(a,c,l,f,u,h,v.x,v.y)&&Gt(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Ja(a,c,l,f,u,h,S.x,S.y)&&Gt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Ja(a,c,l,f,u,h,v.x,v.y)&&Gt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=x;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Ja(a,c,l,f,u,h,S.x,S.y)&&Gt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function KN(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Bd(r,s)&&eT(r,i,i.next,s)&&Cc(r,s)&&Cc(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),bc(i),bc(i.next),i=n=s),i=i.next}while(i!==n);return ta(i)}function ZN(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&oI(o,a)){let l=tT(o,a);o=ta(o,o.next),l=ta(l,l.next),Ac(o,e,t,i,r,s,0),Ac(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function JN(n,e,t,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,u=QE(n,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(sI(u));for(r.sort(QN),s=0;s<r.length;s++)t=eI(r[s],t);return t}function QN(n,e){return n.x-e.x}function eI(n,e){const t=tI(n,e);if(!t)return e;const i=tT(t,n);return ta(i,i.next),ta(t,t.next)}function tI(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>i&&(i=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,f;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Ja(o<u?s:i,o,l,u,o<u?i:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),Cc(t,n)&&(f<c||f===c&&(t.x>r.x||t.x===r.x&&nI(r,t)))&&(r=t,c=f)),t=t.next;while(t!==a);return r}function nI(n,e){return Gt(n.prev,n,e.prev)<0&&Gt(e.next,n,n.next)<0}function iI(n,e,t,i){let r=n;do r.z===0&&(r.z=T0(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,rI(r)}function rI(n){let e,t,i,r,s,o,a,l,u=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,u*=2}while(o>1);return n}function T0(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function sI(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ja(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function oI(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!aI(n,e)&&(Cc(n,e)&&Cc(e,n)&&lI(n,e)&&(Gt(n.prev,n,e.prev)||Gt(n,e.prev,e))||Bd(n,e)&&Gt(n.prev,n,n.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Bd(n,e){return n.x===e.x&&n.y===e.y}function eT(n,e,t,i){const r=Xf(Gt(n,e,t)),s=Xf(Gt(n,e,i)),o=Xf(Gt(t,i,n)),a=Xf(Gt(t,i,e));return!!(r!==s&&o!==a||r===0&&Wf(n,t,e)||s===0&&Wf(n,i,e)||o===0&&Wf(t,n,i)||a===0&&Wf(t,e,i))}function Wf(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Xf(n){return n>0?1:n<0?-1:0}function aI(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&eT(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Cc(n,e){return Gt(n.prev,n,n.next)<0?Gt(n,e,n.next)>=0&&Gt(n,n.prev,e)>=0:Gt(n,e,n.prev)<0||Gt(n,n.next,e)<0}function lI(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function tT(n,e){const t=new A0(n.i,n.x,n.y),i=new A0(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function mS(n,e,t,i){const r=new A0(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function bc(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function A0(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uI(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class qu{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return qu.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];gS(e),_S(i,e);let o=e.length;t.forEach(gS);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,_S(i,t[l]);const a=YN.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function gS(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function _S(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class pv extends on{constructor(e=new JE([new Ee(0,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)u(e);else for(let c=0;c<e.length;c++)u(e[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ft(r,3)),this.setAttribute("normal",new Ft(s,3)),this.setAttribute("uv",new Ft(o,2));function u(c){const f=r.length/3,h=c.extractPoints(t);let d=h.shape;const g=h.holes;qu.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const x=g[m];qu.isClockWise(x)===!0&&(g[m]=x.reverse())}const _=qu.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const x=g[m];d=d.concat(x)}for(let m=0,p=d.length;m<p;m++){const x=d[m];r.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let m=0,p=_.length;m<p;m++){const x=_[m],v=x[0]+f,S=x[1]+f,C=x[2]+f;i.push(v,S,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return cI(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new pv(i,e.curveSegments)}}function cI(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class mv extends on{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new O,h=new O,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const x=[],v=p/i;let S=0;p===0&&o===0?S=.5/t:p===i&&l===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const T=C/t;f.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(T+S,1-v),x.push(u++)}c.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const v=c[p][x+1],S=c[p][x],C=c[p+1][x],T=c[p+1][x+1];(p!==0||o>0)&&d.push(v,S,T),(p!==i-1||l<Math.PI)&&d.push(S,C,T)}this.setIndex(d),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mv(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fI extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gm extends ao{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bE,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=q_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const vS={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class hI{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const d=u[f],g=u[f+1];if(d.global&&(d.lastIndex=0),d.test(c))return g}return null}}}const dI=new hI;class gv{constructor(e){this.manager=e!==void 0?e:dI,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gv.DEFAULT_MATERIAL_NAME="__DEFAULT";class pI extends gv{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=vS.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ec("img");function l(){c(),vS.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class mI extends gv{constructor(e){super(e)}load(e,t,i,r){const s=new Rn,o=new pI(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class nT extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class gI extends nT{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _m=new ht,xS=new O,yS=new O;class _I{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new av,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;xS.setFromMatrixPosition(e.matrixWorld),t.position.copy(xS),yS.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yS),t.updateMatrixWorld(),_m.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_m),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_m)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vI extends _I{constructor(){super(new lv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xI extends nT{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new vI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yI{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=SS(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=SS();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function SS(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$_);const iT={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Hl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const SI=new lv(-1,1,1,-1,0,1);class MI extends on{constructor(){super(),this.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ft([0,2,0,0,2,0],2))}}const wI=new MI;class _v{constructor(e){this._mesh=new fn(wI,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,SI)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class rT extends Hl{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Tc.clone(e.uniforms),this.material=new Ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new _v(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class MS extends Hl{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class EI extends Hl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class TI{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ee);this._width=i.width,this._height=i.height,t=new gr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ss}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rT(iT),this.copyPass.material.blending=rs,this.clock=new yI}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}MS!==void 0&&(o instanceof MS?i=!0:o instanceof EI&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class AI extends Hl{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new qe}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const CI={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new qe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Il extends Hl{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ee(e.x,e.y):new Ee(256,256),this.clearColor=new qe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new gr(s,o,{type:ss}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new gr(s,o,{type:ss});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new gr(s,o,{type:ss});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=CI;this.highPassUniforms=Tc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ht({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ee(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=iT;this.copyUniforms=Tc.clone(c.uniforms),this.blendMaterial=new Ht({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Do,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new qe,this.oldClearAlpha=1,this.basic=new Mr,this.fsQuad=new _v(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ee(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Il.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Il.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ht({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ee(.5,.5)},direction:{value:new Ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Il.BlurDirectionX=new Ee(1,0);Il.BlurDirectionY=new Ee(0,1);const bI={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class RI extends Hl{constructor(){super();const e=bI;this.uniforms=Tc.clone(e.uniforms),this.material=new fI({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new _v(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===Tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===dE?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pE?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===mE?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===K_?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gE?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_E&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function PI(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new on;let u=0;for(let c=0;c<n.length;++c){const f=n[c];let h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,d,c),u+=d}}if(t){let c=0;const f=[];for(let h=0;h<n.length;++h){const d=n[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+c);c+=n[h].attributes.position.count}l.setIndex(f)}for(const c in s){const f=wS(s[c]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,f)}for(const c in o){const f=o[c][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let h=0;h<f;++h){const d=[];for(let _=0;_<o[c].length;++_)d.push(o[c][_][h]);const g=wS(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function wS(n){let e,t,i,r=-1,s=0;for(let u=0;u<n.length;++u){const c=n[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*t}const o=new e(s),a=new Cn(o,t,i);let l=0;for(let u=0;u<n.length;++u){const c=n[u];if(c.isInterleavedBufferAttribute){const f=l/t;for(let h=0,d=c.count;h<d;h++)for(let g=0;g<t;g++){const _=c.getComponent(h,g);a.setComponent(h+f,g,_)}}else o.set(c.array,l);l+=c.count*t}return r!==void 0&&(a.gpuType=r),a}const Hd=1920,Vd=1435,Ul=1.887/1404,LI=Hd*Ul,DI=Vd*Ul,C0=(1223-Vd/2)*Ul,Mh=(Hd/2-937)*Ul,sT=[[440,780],[1440,790]],ES=sT.map(([n,e])=>new O((n-Hd/2)*Ul+Mh,C0-(e-Vd/2)*Ul,.25)),NI=sT.map(([n,e])=>new Ee(n/Hd,1-e/Vd)),cu=230,Wn=34,Gr=22,_o=5.7,La=8.4,vm=26,jf=new qe("#0a0f19"),oT=.0062,Ua=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),Yf=(n,e,t)=>n+(e-n)*t,Da=(n,e,t)=>{const i=Ua((t-n)/(e-n));return i*i*(3-2*i)},II=n=>.5-.5*Math.cos(Math.PI*n);function Yr(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,e|1);return t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Gd(n,e,t,i=!1){const r=document.createElement("canvas");r.width=n,r.height=e,t(r.getContext("2d"),n,e);const s=new NN(r);return i&&(s.colorSpace=ki),s}const UI=()=>Gd(256,256,(n,e)=>{const t=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.08,"rgba(255,255,255,0.9)"),t.addColorStop(.25,"rgba(255,255,255,0.28)"),t.addColorStop(.55,"rgba(255,255,255,0.06)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=t,n.fillRect(0,0,e,e)}),OI=()=>Gd(512,32,(n,e,t)=>{const i=n.createImageData(e,t);for(let r=0;r<t;r++)for(let s=0;s<e;s++){const o=Math.abs(s/e-.5)*2,a=Math.abs(r/t-.5)*2,l=Math.pow(1-o,2.6)*Math.exp(-a*a*14),u=(r*e+s)*4;i.data[u]=i.data[u+1]=i.data[u+2]=255,i.data[u+3]=l*255}n.putImageData(i,0,0)}),FI=()=>{const n=Yr(7),e=Gd(512,512,(t,i)=>{const r=t.createImageData(i,i);for(let s=0;s<r.data.length;s+=4){const o=120+(n()-.5)*120+(n()<.03?70:0);r.data[s]=r.data[s+1]=r.data[s+2]=o,r.data[s+3]=255}t.putImageData(r,0,0);for(let s=0;s<40;s++){const o=n()*i,a=n()*i,l=20+n()*90;for(const u of[-i,0,i])for(const c of[-i,0,i]){const f=t.createRadialGradient(o+u,a+c,0,o+u,a+c,l);f.addColorStop(0,"rgba(20,20,20,0.55)"),f.addColorStop(1,"rgba(20,20,20,0)"),t.fillStyle=f,t.fillRect(o+u-l,a+c-l,l*2,l*2)}}});return e.wrapS=e.wrapT=od,e.anisotropy=8,e},kI=()=>{const n=Yr(11);return Gd(512,128,(e,t,i)=>{for(let s=0;s<90;s++){const o=t*.15+n()*t*.7,a=i*.35+n()*i*.3,l=18+n()*40,u=e.createRadialGradient(o,a,0,o,a,l);u.addColorStop(0,`rgba(255,255,255,${.1+n()*.12})`),u.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=u,e.fillRect(o-l,a-l,l*2,l*2)}e.globalCompositeOperation="destination-in",e.save(),e.scale(1,i/t);const r=e.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);r.addColorStop(0,"#000"),r.addColorStop(.55,"rgba(0,0,0,0.6)"),r.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=r,e.fillRect(0,0,t,t),e.restore()})},TS=`
  float fogF(float d){ float f = ${oT.toFixed(5)} * d; return 1.0 - exp(-f * f); }
`;function zI(n,e,{mobile:t=!1,lite:i=!1}={}){i&&(t=!0);const r=new TN({canvas:n,antialias:!1,powerPreference:i?"default":"high-performance",stencil:!1});r.setClearColor(jf),r.toneMapping=K_,r.toneMappingExposure=1.05;let s=Math.min(window.devicePixelRatio||1,i?1:t?1.5:1.75);r.setPixelRatio(s);const o=new AN;o.fog=new cv(jf,oT);const a=new Wi(40,1,.05,2e3);a.position.set(0,1.2,0);const l=UI();let u=null,c=null,f=null,h=null;const d=OI(),g={uCarZ:{value:-cu},uCamZ:{value:0},uProx:{value:0},uTime:{value:0},uFog:{value:jf}},_=new fn(new mv(900,48,24),new Ht({side:ni,depthWrite:!1,fog:!1,uniforms:{uMoon:{value:new O(-.45,.3,-1).normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform vec3 uMoon; varying vec3 vDir;
        void main(){ vec3 d = normalize(vDir); float h = d.y;
          vec3 hor = vec3(0.016,0.022,0.035), mid = vec3(0.004,0.007,0.014), top = vec3(0.0006,0.001,0.003);
          vec3 c = mix(hor, mid, smoothstep(-0.02, 0.15, h)); c = mix(c, top, smoothstep(0.12, 0.7, h));
          float m = max(dot(d, uMoon), 0.0);
          c += vec3(0.07, 0.04, 0.02) * exp(-max(h, 0.0) * 14.0) * smoothstep(-0.05, 0.02, h) * (0.6 + 0.4 * exp(-pow(d.x / 0.5, 2.0)));
          c += vec3(0.05,0.065,0.1) * pow(m, 10.0) + vec3(0.25,0.28,0.35) * pow(m, 300.0) + vec3(3.0) * smoothstep(0.99985, 0.99995, m);
          gl_FragColor = vec4(c, 1.0); }`}));_.renderOrder=-10,o.add(_);{const de=Yr(3),ce=t?900:1800,me=[],L=[];for(let ae=0;ae<ce;ae++){const U=de()*Math.PI*2,ve=.05+Math.pow(de(),.7)*.95,xe=Math.sqrt(1-ve*ve);me.push(Math.cos(U)*xe*850,ve*850,Math.sin(U)*xe*850);const R=.3+de()*.8;L.push(R*.85,R*.9,R)}const pe=new on;pe.setAttribute("position",new Ft(me,3)),pe.setAttribute("color",new Ft(L,3));const _e=new Vf(pe,new w0({size:1.5,sizeAttenuation:!1,vertexColors:!0,fog:!1,transparent:!0,depthWrite:!1}));_e.renderOrder=-9,_.add(_e)}{const de=Yr(21),ce=[{z:-980,h:[110,260],c:"#0e1520",step:26},{z:-760,h:[70,170],c:"#0b111a",step:20},{z:-560,h:[35,90],c:"#080c13",step:14}];for(const me of ce){const L=new JE,pe=2400;L.moveTo(-pe,-40);const _e=de()*10;for(let U=-pe;U<=pe;U+=me.step){const ve=Math.sin(U*.0021+_e)*.5+Math.sin(U*.0057+_e*2)*.3+Math.sin(U*.017+_e*3)*.12,xe=Yf(me.h[0],me.h[1],.5+.5*ve)+(de()-.5)*me.step*.6;L.lineTo(U,xe*(1-.55*Math.exp(-Math.pow(U/260,2))))}L.lineTo(pe,-40);const ae=new fn(new pv(L),new Mr({color:me.c,fog:!1,depthWrite:!1}));ae.position.set(0,-6,me.z),ae.renderOrder=-8,o.add(ae)}}o.add(new gI("#24365a","#050608",.7));const m=new xI("#9bb4ff",.5);m.position.set(-60,80,-160),o.add(m);{const de=[[1,.55,0],[.78,.45,.28],[.55,.36,.52]].map(([ve,xe,R])=>new dv(ve,xe,7,1).translate(0,R+xe/2,0).toNonIndexed()),ce=PI(de),me=t?500:1e3,L=new Vr(ce,new gm({color:"#ffffff"}),me),pe=Yr(5),_e=new ht,ae=new qs,U=new qe;for(let ve=0;ve<me;ve++){const R=(ve%2?1:-1)*(22+Math.pow(pe(),1.4)*110),w=-40-pe()*520,V=7+pe()*13,J=V*(.17+pe()*.07);ae.setFromAxisAngle(new O(0,1,0),pe()*Math.PI),_e.compose(new O(R,-.3,w),ae,new O(J,V,J)),L.setMatrixAt(ve,_e),U.setHSL(.37+pe()*.07,.3,.035+pe()*.04),L.setColorAt(ve,U)}L.frustumCulled=!1,o.add(L)}{const de=FI(),ce=940,me=new fn(new Os(220,ce,16,120).rotateX(-Math.PI/2).translate(0,0,40-ce/2),new Ht({uniforms:{...g,uTex:{value:de},uHL:{value:ES.map(U=>U.x)},uCamY:{value:1.2}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
          uniform sampler2D uTex; uniform float uCarZ, uCamZ, uCamY, uProx, uTime; uniform vec3 uFog; uniform float uHL[2];
          varying vec3 vW;
          ${TS}
          void main(){
            vec2 p = vW.xz;
            float onRoad = 1.0 - smoothstep(6.4, 6.6, abs(p.x));
            float grain = texture2D(uTex, p * vec2(0.22, 0.22)).r;
            float wet = texture2D(uTex, p * vec2(0.035, 0.012) + vec2(0.5, 0.0)).r; // large wet patches
            vec3 asph = vec3(0.020, 0.021, 0.024) * (0.55 + grain * 0.9);
            vec3 shoulder = vec3(0.010, 0.012, 0.010) * (0.6 + grain * 0.8);
            vec3 base = mix(shoulder, asph, onRoad);
            // markings
            float edge = (1.0 - smoothstep(0.07, 0.09, abs(abs(p.x) - 5.95)));
            float dash = (1.0 - smoothstep(0.065, 0.085, abs(abs(p.x) - 2.0))) * step(mod(p.y, 10.0), 3.4);
            float mark = max(edge, dash) * (0.75 + 0.25 * grain);
            // headlight pool in front of the car (towards the camera)
            float dz = p.y - (uCarZ + 0.25);
            float ahead = smoothstep(-0.5, 2.0, dz) * (1.0 - smoothstep(30.0, 70.0, dz));
            float width = 0.9 + max(dz, 0.0) * 0.32;
            float pool = exp(-pow(p.x / width, 2.0) * 1.6) * ahead / (1.0 + max(dz, 0.0) * 0.09);
            float lightAmt = pool * (0.6 + uProx * 1.6);
            vec3 lightCol = vec3(0.85, 0.9, 1.0);
            vec3 col = base * (0.35 + lightAmt * 7.0) + mark * vec3(0.05, 0.052, 0.055) * (0.3 + lightAmt * 7.0);
            // wet specular streaks: headlights mirrored on the asphalt, running to the viewer
            float spec = 0.0;
            for (int i = 0; i < 2; i++) {
              float hx = uHL[i];
              float s = exp(-pow((p.x - hx * 1.02) / (0.08 + max(dz, 0.0) * 0.012), 2.0));
              spec += s;
            }
            float along = smoothstep(-0.3, 0.6, dz) * exp(-max(dz, 0.0) * 0.07);
            float rip = 0.55 + 0.45 * sin(p.y * 7.0 + grain * 6.0) * (0.5 + 0.5 * sin(p.y * 1.3));
            col += lightCol * spec * along * rip * (0.4 + wet * 0.9) * (0.3 + uProx * 1.4) * onRoad;
            // sodium street lamps: warm pools of light on the asphalt
            vec3 warm = vec3(1.0, 0.62, 0.28);
            float zl = floor((p.y - ${Gr.toFixed(1)}) / ${Wn.toFixed(1)} + 0.5) * ${Wn.toFixed(1)} + ${Gr.toFixed(1)};
            float pools = 0.0;
            for (int k = -1; k <= 1; k++) {
              float lz = zl + float(k) * ${Wn.toFixed(1)};
              float dzl = p.y - lz;
              pools += exp(-(pow(p.x - ${_o.toFixed(1)}, 2.0) + dzl * dzl) / 30.0);
              pools += exp(-(pow(p.x + ${_o.toFixed(1)}, 2.0) + dzl * dzl) / 30.0);
            }
            col += base * warm * pools * 9.0 + mark * warm * pools * 0.08;
            // mirror-like reflections of the lamps on the wet road, stretched towards the viewer
            float tR = uCamY / (uCamY + ${La.toFixed(1)});
            float firstRow = floor((uCamZ - ${Gr.toFixed(1)}) / ${Wn.toFixed(1)});
            vec3 lampRefl = vec3(0.0);
            for (int k = 0; k < 12; k++) {
              float lz = (firstRow - float(k)) * ${Wn.toFixed(1)} + ${Gr.toFixed(1)};
              float rz = uCamZ + tR * (lz - uCamZ);
              float len = 0.6 + (uCamZ - rz) * 0.09;
              float along = exp(-pow((p.y - rz) / len, 2.0));
              for (int sd = 0; sd < 2; sd++) {
                float lx = (sd == 0 ? -1.0 : 1.0) * ${_o.toFixed(1)};
                float rx = lx * tR;
                float w = 0.05 + (uCamZ - rz) * 0.004;
                lampRefl += warm * exp(-pow((p.x - rx) / w, 2.0)) * along;
              }
            }
            col += lampRefl * smoothstep(0.25, 0.75, wet) * (0.5 + 0.5 * rip) * 0.32;
            // moonlit sheen on wet patches
            col += vec3(0.02, 0.028, 0.045) * smoothstep(0.45, 0.2, wet) * onRoad * 0.6;
            float d = distance(vW, cameraPosition);
            col = mix(col, uFog, fogF(d));
            gl_FragColor = vec4(col, 1.0);
          }`}));c=me.material,o.add(me);const L=new Vr(new zi(.1,1.1,.1),new gm({color:"#8d9197"}),120),pe=new Vr(new zi(.06,.14,.02),new Mr({color:new qe().setRGB(2.4,.9,.15),toneMapped:!1}),120),_e=new ht;let ae=0;for(let U=34;U>-860&&ae<120;U-=32)for(const ve of[-7.3,7.3]){if(ae>=120)break;_e.makeTranslation(ve,.55,U),L.setMatrixAt(ae,_e),_e.makeTranslation(ve,.86,U+.07),pe.setMatrixAt(ae,_e),ae++}L.count=pe.count=ae,L.frustumCulled=pe.frustumCulled=!1,o.add(L,pe)}{const de=vm*2,ce=new zd(.07,.11,La,8).translate(0,La/2,0),me=new zi(2.3,.08,.12),L=new zi(.75,.12,.3),pe=new gm({color:"#5a5f66"}),_e=new Vr(ce,pe,de),ae=new Vr(me,pe,de),U=new Vr(L,new Mr({color:new qe().setRGB(4.5,2.6,1.1),toneMapped:!1}),de),ve=new ht,xe=[];let R=0;for(let J=0;J<vm;J++){const ne=Gr-J*Wn;for(const q of[-1,1])ve.makeTranslation(q*(_o+2.2),0,ne),_e.setMatrixAt(R,ve),ve.makeTranslation(q*(_o+1.1),La-.05,ne),ae.setMatrixAt(R,ve),ve.makeTranslation(q*_o,La-.12,ne),U.setMatrixAt(R,ve),xe.push(q*_o,La-.3,ne),R++}for(const J of[_e,ae,U])J.frustumCulled=!1,o.add(J);const w=new on;w.setAttribute("position",new Ft(xe,3));const V=new Vf(w,new Ht({transparent:!0,depthWrite:!1,blending:Do,uniforms:{uMap:{value:l},uPixel:{value:s},uH:{value:900}},vertexShader:`uniform float uPixel, uH; varying float vF;
          void main(){ vec4 mv = modelViewMatrix * vec4(position,1.); float d = -mv.z;
            vF = exp(-d * 0.006);
            gl_PointSize = clamp(uPixel * uH * 2.6 / d, 2.0, 420.0);
            gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D uMap; varying float vF;
          void main(){ float a = texture2D(uMap, gl_PointCoord).a; gl_FragColor = vec4(vec3(1.0, 0.6, 0.26) * a * a * 1.6 * vF + vec3(1.0,0.75,0.5) * pow(a, 6.0) * 2.0 * vF, 1.0); }`}));V.frustumCulled=!1,V.renderOrder=7,o.add(V),u=V.material}{const ce=Math.floor((Gr+10+vm*Wn)/4)*2,me=new Vr(new zi(.06,.32,4-.05),new Mr({color:"#ffffff"}),ce),L=new Vr(new zi(.1,.7,.1),new Mr({color:"#ffffff"}),ce),pe=new ht,_e=new qe;let ae=0;for(let U=Gr+10;ae<ce;U-=4)for(const ve of[-1,1]){if(ae>=ce)break;const xe=((U-Gr)%Wn+Wn*1.5)%Wn-Wn/2,R=Math.exp(-(xe*xe)/40);_e.setRGB(.05+R*.55,.055+R*.36,.065+R*.18),pe.makeTranslation(ve*7.05,.62,U),me.setMatrixAt(ae,pe),me.setColorAt(ae,_e),pe.makeTranslation(ve*7.12,.35,U-4/2),L.setMatrixAt(ae,pe),L.setColorAt(ae,_e.multiplyScalar(.7)),ae++}me.frustumCulled=L.frustumCulled=!1,o.add(me,L)}{const de=Yr(33),ce=t?70:130,me=new zi(1,1,1).translate(0,.5,0),L=new Ht({fog:!1,uniforms:{uFog:{value:jf}},vertexShader:"varying vec3 vW; varying vec3 vN; void main(){ vec4 w = modelMatrix * instanceMatrix * vec4(position,1.); vW = w.xyz; vN = normal; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 uFog; varying vec3 vW; varying vec3 vN;
        float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main(){
          vec2 f = abs(vN.z) > 0.5 ? vW.xy : vW.zy;
          vec2 cell = floor(f / vec2(2.2, 2.8));
          vec2 g = fract(f / vec2(2.2, 2.8));
          float win = step(0.25, g.x) * step(g.x, 0.75) * step(0.3, g.y) * step(g.y, 0.75);
          float on = step(0.8, h(cell + floor(vW.x * 0.01))) * (0.5 + 0.5 * h(cell * 3.1));
          vec3 wc = mix(vec3(1.0, 0.68, 0.35), vec3(0.65, 0.8, 1.0), step(0.8, h(cell * 1.7)));
          vec3 col = vec3(0.008, 0.01, 0.015) + wc * win * on * 0.55;
          col += vec3(1.5, 0.15, 0.1) * step(0.985, h(vec2(floor(vW.x), 1.0))) * step(abs(vN.y), 0.5) * 0.0; // reserved
          float d = length(vW.xz);
          float fog = 1.0 - exp(-pow(d * 0.0024, 2.0));
          gl_FragColor = vec4(mix(col, uFog * 1.5, fog * 0.9), 1.0);
        }`}),pe=new Vr(me,L,ce),_e=new ht;for(let w=0;w<ce;w++){const V=(de()-.5)*900,J=-540-de()*160,ne=Math.exp(-Math.pow(V/160,2)),q=12+Math.pow(de(),2.4)*75+ne*25*de(),Le=10+de()*22;_e.compose(new O(V,-1,J),new qs,new O(Le,q,8+de()*14)),pe.setMatrixAt(w,_e)}pe.frustumCulled=!1,pe.renderOrder=-7,o.add(pe);const ae=[],U=new ht,ve=new O,xe=new O;for(let w=0;w<ce;w++)pe.getMatrixAt(w,U),U.decompose(ve,new qs,xe),xe.y>70&&ae.push(ve.x,xe.y-.6,ve.z);const R=new on;R.setAttribute("position",new Ft(ae,3)),f=new Vf(R,new w0({color:new qe().setRGB(3,.15,.1),size:3,sizeAttenuation:!1,fog:!1,toneMapped:!1,transparent:!0})),o.add(f)}{const de=t?700:1500,ce=Yr(41),me=new Float32Array(de*6),L=new Float32Array(de*2);for(let ae=0;ae<de;ae++){const U=(ce()-.5)*26,ve=ce()*12,xe=-ce()*60,R=.35+ce()*.35;me.set([U,0,xe,U+.04,-R,xe+.02],ae*6),L[ae*2]=L[ae*2+1]=ve}const pe=new on;pe.setAttribute("position",new Cn(me,3)),pe.setAttribute("aTop",new Cn(L,1)),h=new Ht({transparent:!0,depthWrite:!1,blending:Do,uniforms:{...g},vertexShader:`uniform float uTime, uCamZ, uCarZ, uProx; attribute float aTop; varying float vA;
        void main(){
          vec3 p = position;
          float y = mod(aTop - uTime * 9.0, 12.0) + p.y;
          vec3 w = vec3(p.x, y, uCamZ + mod(p.z, 60.0) - 58.0);
          vec4 mv = viewMatrix * vec4(w, 1.0);
          float dz = w.z - uCarZ;
          float beam = step(0.0, dz) * exp(-dz * 0.06) * (1.0 - smoothstep(1.5, 1.0 + dz * 0.25, abs(w.x)));
          vA = (0.05 + beam * (0.5 + uProx)) * smoothstep(1.0, 5.0, -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:"varying float vA; void main(){ gl_FragColor = vec4(vec3(0.7, 0.78, 0.9) * vA, 1.0); }"});const _e=new DN(pe,h);_e.frustumCulled=!1,_e.renderOrder=8,o.add(_e)}const p=new wu;o.add(p);const x=new mI().load(e);x.colorSpace=ki,x.anisotropy=8;const v={...g,uMap:{value:x},uReveal:{value:0},uHL:{value:NI},uMirror:{value:0},uLamp:{value:0}},S=`
    uniform sampler2D uMap; uniform float uReveal, uProx, uMirror, uTime, uLamp; uniform vec3 uFog; uniform vec2 uHL[2];
    varying vec2 vUv; varying vec3 vW;
    ${TS}
    void main(){
      vec2 uv = vUv;
      if (uMirror > 0.5) uv.x += sin(uv.y * 160.0 + uTime * 1.5) * 0.0025; // ripples in the wet road
      vec4 t = texture2D(uMap, uv);
      if (t.a < 0.01) discard;
      float lum = dot(t.rgb, vec3(0.299, 0.587, 0.114));
      // night grade: deep, cool, contrasty; revealed as the car comes close
      vec3 night = pow(t.rgb, vec3(1.25)) * vec3(0.32, 0.36, 0.5);
      vec3 col = mix(night, t.rgb * vec3(0.92, 0.95, 1.05), uReveal);
      // keep the LED headlights alive
      float hl = 0.0;
      for (int i = 0; i < 2; i++) {
        vec2 d = (uv - uHL[i]) * vec2(1.34, 1.0);
        hl += smoothstep(0.075, 0.0, length(d));
      }
      col += t.rgb * hl * smoothstep(0.55, 0.95, lum) * (2.5 + uProx * 3.0);
      // warm street-lamp light sweeping over roof, bonnet and shoulders
      col += t.rgb * vec3(1.0, 0.7, 0.42) * uLamp * (0.25 + 0.55 * smoothstep(0.35, 0.85, uv.y)) * (1.0 - uReveal * 0.6);
      // rim light along the roof and shoulders, cool blue
      col += vec3(0.05, 0.08, 0.16) * smoothstep(0.6, 1.0, lum) * (1.0 - uReveal) ;
      float a = t.a;
      if (uMirror > 0.5) {
        float fade = smoothstep(0.38, 0.95, uv.y); // strongest near the tyres
        a *= fade * 0.32;
        col *= 0.55;
      }
      float d = distance(vW, cameraPosition);
      col = mix(col, uFog, fogF(d));
      gl_FragColor = vec4(col, a);
    }`,C="varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",T=new Os(LI,DI),M=new fn(T,new Ht({uniforms:v,vertexShader:C,fragmentShader:S,transparent:!0,depthWrite:!1}));M.position.set(Mh,C0,0),M.renderOrder=3,p.add(M);const b={...v,uMirror:{value:1}},N=new fn(T,new Ht({uniforms:b,vertexShader:C,fragmentShader:S,transparent:!0,depthWrite:!1,depthTest:!1}));N.position.set(Mh,-C0,.02),N.scale.y=-1,N.renderOrder=1,p.add(N);const y=new fn(new Os(2.7,1.6).rotateX(-Math.PI/2),new Mr({map:l,color:"#000",transparent:!0,opacity:.9,depthWrite:!1,fog:!1}));y.position.set(Mh,.01,-.3),y.renderOrder=2,p.add(y);const E=(de,ce,me)=>new jE({map:de,color:ce,transparent:!0,opacity:me,blending:Do,depthWrite:!1,depthTest:!1,fog:!1,toneMapped:!1}),I=ES.map(de=>{const ce=new fm(E(l,new qe().setRGB(2.6,2.8,3.2),1)),me=new fm(E(l,new qe().setRGB(.45,.6,1),.45)),L=new fm(E(d,new qe().setRGB(.4,.6,1.3),.55));for(const pe of[ce,me,L])pe.position.copy(de),pe.renderOrder=10,p.add(pe);return{core:ce,halo:me,flare:L}});{const de=t?1200:2600,ce=Yr(9),me=new Float32Array(de*3),L=new Float32Array(de);for(let ae=0;ae<de;ae++)me[ae*3]=(ce()-.5)*22,me[ae*3+1]=ce()*6,me[ae*3+2]=6-Math.pow(ce(),1.3)*230,L[ae]=ce();const pe=new on;pe.setAttribute("position",new Cn(me,3)),pe.setAttribute("aSeed",new Cn(L,1));const _e=new Vf(pe,new Ht({transparent:!0,depthWrite:!1,blending:Do,uniforms:{...g,uPixel:{value:s},uMap:{value:l}},vertexShader:`
          uniform float uTime, uCarZ, uProx, uPixel; attribute float aSeed; varying float vB;
          void main(){
            vec3 p = position;
            p.x += sin(uTime * (0.15 + aSeed * 0.2) + aSeed * 40.0) * 0.8;
            p.y = mod(p.y + uTime * (0.04 + aSeed * 0.06), 6.0);
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            float dz = p.z - (uCarZ + 0.3);
            float ahead = step(0.0, dz) * (1.0 - smoothstep(3.0, 38.0, dz));
            float width = 0.9 + dz * 0.2;
            float lat = 1.0 - smoothstep(width * 0.4, width, abs(p.x));
            float hgt = 1.0 - smoothstep(0.4 + dz * 0.06, 1.2 + dz * 0.12, abs(p.y - 0.6));
            float camFade = smoothstep(1.5, 14.0, -mv.z);
            vB = (0.02 + ahead * lat * hgt * (0.18 + uProx * 0.16)) * camFade;
            gl_PointSize = clamp(uPixel * (0.5 + aSeed) * 18.0 / -mv.z, 0.0, 14.0 * uPixel);
            gl_Position = projectionMatrix * mv;
          }`,fragmentShader:"uniform sampler2D uMap; varying float vB; void main(){ float a = texture2D(uMap, gl_PointCoord).a; gl_FragColor = vec4(vec3(0.72,0.82,1.0) * vB * a, 1.0); }"}));_e.frustumCulled=!1,_e.renderOrder=6,o.add(_e)}const B=[];{const de=kI(),ce=Yr(17),me=t?12:20;for(let L=0;L<me;L++){const pe=30+ce()*26,_e=5+ce()*3,ae=new Mr({map:de,color:"#8aa0c4",transparent:!0,opacity:0,depthWrite:!1,fog:!1}),U=new fn(new Os(pe,_e),ae);U.position.set((ce()-.5)*30,_e*.5-.15,4-Math.pow(L/me,1.1)*240-ce()*6),U.renderOrder=5,o.add(U),B.push({mesh:U,mat:ae,x:U.position.x,base:.025+ce()*.03,sp:(ce()-.5)*.4})}}const G=new TI(r);G.addPass(new AI(o,a));const $=new Il(new Ee(256,256),.6,.55,.88);G.addPass($);const H=new rT({uniforms:{tDiffuse:{value:null},uStrength:{value:0},uCenter:{value:new Ee(.5,.48)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`
      uniform sampler2D tDiffuse; uniform float uStrength; uniform vec2 uCenter; varying vec2 vUv;
      void main(){
        vec2 dir = vUv - uCenter; vec3 acc = vec3(0.0); float tot = 0.0;
        for (int i = 0; i < 10; i++) {
          float t = float(i) / 9.0; vec2 q = uCenter + dir * (1.0 - uStrength * t);
          vec3 c = vec3(texture2D(tDiffuse, q + dir * uStrength * 0.04).r, texture2D(tDiffuse, q).g, texture2D(tDiffuse, q - dir * uStrength * 0.04).b);
          float w = 1.0 - t * 0.55; acc += c * w; tot += w;
        }
        gl_FragColor = vec4(acc / tot, 1.0);
      }`});i||G.addPass(H),G.addPass(new RI);let j=1,D=1;const K=()=>{j=n.clientWidth||window.innerWidth,D=n.clientHeight||window.innerHeight,r.setSize(j,D,!1),G.setSize(j,D),G.setPixelRatio(s),$.resolution.set(j/(i?4:2),D/(i?4:2));const de=j/D;a.aspect=de,a.fov=de<1?Ua(df.radToDeg(2*Math.atan(Math.tan(df.degToRad(20))/de)),40,72):40,a.updateProjectionMatrix()};K();let P=0,ie=0,Te=0,Ge=0,Y=0,Q=0;const ge=new O,ue={d:cu,prox:0};return{render:(de,ce)=>{ce=Math.min(Math.max(ce,.001),.05),Te+=ce,ie=Yf(ie,(de-P)/ce,1-Math.exp(-ce*7)),P=de;const me=j/D,L=2*Math.atan(Math.tan(df.degToRad(a.fov)/2)*me),pe=Ua(.98/(.74*Math.tan(L/2)),1.9,5),_e=Ua(de/.8),ae=II(_e),U=cu*Math.pow(pe/cu,ae),ve=Ua(1-Math.log(U/pe)/Math.log(cu/pe)),xe=Da(.86,.98,de),R=-18*ae,w=R-U;ue.d=U,ue.prox=ve,p.position.set(0,Math.sin(Te*11)*.002*(1-xe),w);const V=Math.pow(ve,4)*.004*(1-xe);a.position.set(Math.sin(Te*.31)*.03+Math.sin(Te*37)*V,Yf(1.22,.98,ae)+xe*.06+Math.sin(Te*41)*V,R),ge.set(0,Yf(1,.66,ae)+xe*.04,w),a.lookAt(ge),g.uCarZ.value=w,g.uCamZ.value=R,g.uProx.value=ve,g.uTime.value=Te,v.uReveal.value=Da(.45,.95,ve)*.85;{const oe=((w-Gr)%Wn+Wn*1.5)%Wn-Wn/2;v.uLamp.value=Math.exp(-(oe*oe)/50)}u&&(u.uniforms.uH.value=D),f&&(f.material.opacity=.5+.5*Math.sin(Te*3)),c.uniforms.uCamY.value=a.position.y;const J=df.degToRad(a.fov),ne=2*Math.tan(J/2)*Math.max(U,.5)/D;I.forEach(oe=>{oe.core.scale.setScalar(Math.max(.1,ne*18)),oe.halo.scale.setScalar(Math.max(.55-ve*.15,ne*70)),oe.halo.material.opacity=.35-ve*.1,oe.flare.scale.set(Math.max(2.2+ve*1.5,ne*340),Math.max(.035+ve*.02,ne*9),1),oe.flare.material.opacity=(.4+ve*.15)*(1-xe*.6),oe.core.material.opacity=1-xe*.3});for(const oe of B){oe.mesh.position.x=oe.x+Math.sin(Te*.05+oe.x)*5+Te*oe.sp*.2;const Ye=oe.mesh.position.z-w,se=Ye>0?Math.exp(-Ye/25):Math.exp(Ye/4)*.4,Re=R-oe.mesh.position.z;oe.mat.opacity=(oe.base+se*(.05+ve*.04))*Da(1.5,9,Re)*(1-Da(120,240,Re)),oe.mat.color.setRGB(.42+se*.4,.5+se*.4,.64+se*.4)}const q=Math.abs(ie),Le=Da(.4,.85,ve)*(1-Da(.92,1,ve)),le=Ua(q*.08+Le*q*.22,0,.1);if(H.uniforms.uStrength.value+=(le-H.uniforms.uStrength.value)*.2,$.strength=.55+ve*.3-xe*.25,G.render(ce),Ge++,Y+=ce,Y>(i?.8:1.2)){const oe=Ge/Y;oe<(i?26:42)&&Q<5&&(Q+=oe<15&&Q<3?2:1,(Q===3||Q===4)&&(H.enabled=!1),Q===1?s=Math.min(s,1):Q===2?s=.75:Q===3?(H.enabled=!1,s=.66):Q===4?($.enabled=!1,H.enabled=!1):s=.5,r.setPixelRatio(s),K()),Ge=0,Y=0}return ue},resize:K,dispose:()=>{var de;r.dispose(),(de=G.dispose)==null||de.call(G)},isLowest:()=>Q>=5}}const aT=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),AS=(n,e,t)=>{const i=aT((t-n)/(e-n));return i*i*(3-2*i)},BI=`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>")`;function HI({onExplore:n}){const e=Zn.useRef(),t=Zn.useRef(),i=Zn.useRef(),r=Zn.useRef(),s=Zn.useRef();return Zn.useLayoutEffect(()=>{const o={p:0},a=cr.context(()=>{const M=cr.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:e.current,start:"top top",end:"bottom bottom",scrub:1}});M.to(o,{p:1,duration:1},0),M.to(".d-hero",{autoAlpha:0,y:-20,duration:.05},.02);const b=(E,I,B=.13)=>{M.fromTo(E,{autoAlpha:0,y:40},{autoAlpha:1,y:0,duration:.04,ease:"power2.out"},I),M.to(E,{autoAlpha:0,y:-40,duration:.04,ease:"power2.in"},I+B)};b(".d-ch1",.14),b(".d-ch2",.36),b(".d-ch3",.56);const N={v:0},y=e.current.querySelector(".d-ps");M.to(N,{v:799,duration:.08,ease:"power1.out",onUpdate:()=>y.textContent=Math.round(N.v)},.37),M.to(".d-hud",{autoAlpha:0,duration:.03},.8),M.to(".d-finale",{autoAlpha:1,duration:.05},.84),M.fromTo(".d-word",{yPercent:110},{yPercent:0,duration:.05,stagger:.02,ease:"power3.out"},.86),M.fromTo(".d-fin-sub",{autoAlpha:0,y:20},{autoAlpha:1,y:0,duration:.04,stagger:.012},.9)},e),l=window.matchMedia("(max-width: 768px), (pointer: coarse)").matches,u=navigator.hardwareConcurrency||4,c=navigator.deviceMemory||8,f=l||u<=4||c<=4||/[?&]lite\b/.test(location.search);let h=null;try{h=zI(t.current,m2,{mobile:l,lite:f})}catch(M){console.error("WebGL unavailable",M)}const d=()=>h&&h.resize();window.addEventListener("resize",d);let g=!0;const _=new IntersectionObserver(([M])=>g=M.isIntersecting,{threshold:0});_.observe(e.current);let m=0,p=!1,x=-1,v=0,S=0,C=0;const T=(M,b)=>{if(f){if(m+=b,m<32)return;b=m,m=0}const N=o.p,y=aT(N/.8);if(v+=b,!(p&&Math.abs(N-x)<4e-4&&v<400)){if(h&&g){const E=h.render(N,Math.min(v,50)/1e3);x=N,v=0,!p&&h.isLowest()&&(S++,C+=b,C>1500&&(S*1e3/C<15&&(p=!0),S=0,C=0)),r.current&&(r.current.textContent=String(Math.max(0,Math.round(E.d))).padStart(3,"0"))}i.current&&(i.current.style.opacity=AS(.62,.95,y)*(1-AS(.82,.92,N))*.45),s.current&&(s.current.style.transform=`scaleX(${N})`)}};return cr.ticker.add(T),()=>{cr.ticker.remove(T),window.removeEventListener("resize",d),_.disconnect(),h&&h.dispose(),a.revert()}},[]),ee.jsx("section",{ref:e,id:"top",className:"relative h-[700vh] bg-black text-white",children:ee.jsxs("div",{className:"sticky top-0 h-[100svh] w-full overflow-hidden",children:[ee.jsx("canvas",{ref:t,className:"absolute inset-0 h-full w-full","aria-label":"Samochód z tablicą mateuszrys.pl jadący nocą w deszczu"}),ee.jsx("div",{ref:i,className:"pointer-events-none absolute inset-0 opacity-0 mix-blend-screen",style:{background:"radial-gradient(70% 50% at 50% 55%, rgba(210,226,255,0.7), rgba(80,120,220,0.15) 55%, transparent 80%)"}}),ee.jsx("div",{className:"pointer-events-none absolute inset-0",style:{background:"radial-gradient(120% 90% at 50% 50%, transparent 55%, rgba(0,0,0,0.85))"}}),ee.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay",style:{backgroundImage:BI}}),ee.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-black/70 md:via-transparent md:to-black/70"}),ee.jsx("div",{className:"d-hero pointer-events-none absolute inset-x-0 top-0 h-[42svh] bg-gradient-to-b from-black/85 via-black/40 to-transparent"}),ee.jsxs("div",{className:"d-hero absolute inset-x-0 top-[16svh] flex flex-col items-center text-center",children:[ee.jsx("p",{className:"kicker text-white/60",children:"Mateusz Ryś · Strony internetowe"}),ee.jsxs("h1",{className:"mt-4 max-w-[92vw] text-[34px] font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl",children:["Taką stronę zrobię",ee.jsx("br",{}),"dla Twojej firmy."]}),ee.jsx("p",{className:"mt-4 max-w-[86vw] text-[14px] font-light text-white/60 md:text-[16px]",children:"Przewiń i zobacz, jak może przyciągać uwagę Twoich klientów."})]}),ee.jsxs("div",{className:"d-hero absolute inset-x-0 bottom-[7svh] flex flex-col items-center gap-4",children:[ee.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-[0.3em] text-white/75",children:"Przewiń i poczuj to"}),ee.jsx("span",{className:"relative block h-12 w-px overflow-hidden bg-white/20",children:ee.jsx("span",{className:"absolute left-0 top-0 block h-5 w-px animate-drop bg-white"})})]}),ee.jsxs("div",{className:"d-ch1 invisible absolute bottom-[12svh] left-5 max-w-[86vw] md:bottom-auto md:left-12 md:top-1/2 md:max-w-[360px] md:-translate-y-1/2",children:[ee.jsx("p",{className:"kicker text-mblue",children:"Efekt wow"}),ee.jsx("h2",{className:"mt-3 text-3xl font-bold leading-tight md:text-5xl",children:"Strona, obok której nie przejdziesz obojętnie."}),ee.jsx("p",{className:"mt-3 text-[15px] font-light leading-relaxed text-white/70",children:"Ruch, światło i klimat, które zatrzymują klienta na dłużej. Dokładnie to, co teraz oglądasz."})]}),ee.jsxs("div",{className:"d-ch2 invisible absolute bottom-[12svh] right-5 max-w-[86vw] text-right md:bottom-auto md:right-12 md:top-1/2 md:max-w-[360px] md:-translate-y-1/2",children:[ee.jsx("p",{className:"kicker text-mblue",children:"Strona już od"}),ee.jsxs("p",{className:"mt-2 text-6xl font-bold tabular-nums md:text-8xl",children:[ee.jsx("span",{className:"d-ps",children:"0"}),ee.jsx("span",{className:"ml-2 text-2xl font-light text-white/60 md:text-3xl",children:"zł"})]}),ee.jsx("p",{className:"mt-2 text-[15px] font-light text-white/70",children:"Strona promocyjna. Cena końcowa, bez ukrytych kosztów."})]}),ee.jsxs("div",{className:"d-ch3 invisible absolute bottom-[12svh] left-5 max-w-[86vw] md:bottom-auto md:left-12 md:top-1/2 md:max-w-[360px] md:-translate-y-1/2",children:[ee.jsx("p",{className:"kicker text-mblue",children:"Tylko dla Ciebie"}),ee.jsx("p",{className:"mt-2 text-6xl font-bold md:text-8xl",children:"1:1"}),ee.jsx("p",{className:"mt-2 text-[15px] font-light text-white/70",children:"Każdy projekt od zera, bez szablonów. Rozmawiasz bezpośrednio ze mną."})]}),ee.jsxs("div",{className:"d-hud absolute inset-x-5 bottom-5 flex items-end justify-between text-white/70 md:inset-x-12 md:bottom-8",children:[ee.jsxs("p",{className:"text-[11px] uppercase tracking-[0.2em]",children:["Do Twojej strony ",ee.jsx("span",{ref:r,className:"ml-2 font-semibold tabular-nums text-white",children:"250"})," m"]}),ee.jsx("div",{className:"h-px w-28 bg-white/20 md:w-48",children:ee.jsx("div",{ref:s,className:"h-px origin-left bg-mblue",style:{transform:"scaleX(0)"}})})]}),ee.jsxs("div",{className:"d-finale invisible absolute inset-0 flex flex-col items-center justify-center px-6 text-center opacity-0",children:[ee.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"}),ee.jsxs("div",{className:"relative",children:[ee.jsx("p",{className:"d-fin-sub kicker text-white/70",children:"mateuszrys.pl"}),ee.jsxs("h2",{className:"mt-5 text-[13vw] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] md:text-[8.5vw]",children:[ee.jsx("span",{className:"block overflow-hidden",children:ee.jsx("span",{className:"d-word inline-block",children:"Chcesz"})}),ee.jsx("span",{className:"block overflow-hidden",children:ee.jsx("span",{className:"d-word inline-block",children:"więcej?"})})]}),ee.jsx("p",{className:"d-fin-sub mx-auto mt-6 max-w-md text-[15px] font-light text-white/75",children:"Taką stronę albo zupełnie inną zaprojektuję dla Twojej firmy. Ty opisujesz pomysł, ja zamieniam go w stronę, która sprzedaje."}),ee.jsxs("div",{className:"d-fin-sub mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row",children:[ee.jsxs("a",{href:"/oferta#zamow",className:"btn-primary",children:["Zamów swoją stronę",ee.jsx("svg",{width:"16",height:"10",viewBox:"0 0 16 10",fill:"none",children:ee.jsx("path",{d:"M0 5h14M10 1l4 4-4 4",stroke:"currentColor",strokeWidth:"1.5"})})]}),ee.jsx("button",{onClick:n,className:"btn-light",children:"Co mogę dla Ciebie zrobić?"})]})]})]})]})})}const VI=[{name:"Strona promocyjna",price:"799 zł",desc:"Jedna efektowna, przewijana strona pod konkretną usługę, promocję lub wydarzenie."},{name:"Strona wizytówka",price:"1490 zł",desc:"Do 5 podstron, własny projekt graficzny i Wizytówka Google. Najczęściej wybierana.",hot:!0},{name:"Strona firmowa",price:"od 2490 zł",desc:"Rozbudowana strona do 8 podstron dla firmy, która chce pokazać więcej."},{name:"Odświeżenie strony",price:"od 990 zł",desc:"Nowy wygląd starej strony, wersja na telefon i szybsze ładowanie."}],CS=()=>ee.jsx("svg",{width:"16",height:"10",viewBox:"0 0 16 10",fill:"none","aria-hidden":"true",children:ee.jsx("path",{d:"M0 5h14M10 1l4 4-4 4",stroke:"currentColor",strokeWidth:"1.5"})});function GI(){return ee.jsxs("main",{id:"explore",className:"bg-ink text-white",children:[ee.jsxs("section",{className:"wrap py-24 md:py-32",children:[ee.jsxs("div",{className:"reveal max-w-2xl",children:[ee.jsx("p",{className:"kicker text-mblue",children:"Oferta"}),ee.jsx("h2",{className:"mt-4 text-4xl font-bold leading-tight tracking-[-0.02em] md:text-6xl",children:"Wybierz, od czego zaczynamy."}),ee.jsx("p",{className:"mt-5 text-[16px] font-light leading-relaxed text-white/65 md:text-[18px]",children:"Każdą stronę projektuję od zera, pod Twoją firmę. Ceny są końcowe i ustalamy je przed rozpoczęciem pracy."})]}),ee.jsx("div",{className:"mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:VI.map(n=>ee.jsxs("a",{href:"/oferta#cennik",className:`reveal group relative flex flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${n.hot?"border-mblue/70 bg-mblue/10":"border-white/10 bg-white/[0.03] hover:border-white/25"}`,children:[n.hot&&ee.jsx("span",{className:"absolute -top-3 left-6 rounded-full bg-mblue px-3 py-1 text-[11px] font-semibold",children:"Najczęściej wybierana"}),ee.jsx("span",{className:"text-[15px] font-semibold",children:n.name}),ee.jsx("span",{className:"mt-3 text-3xl font-bold tracking-tight",children:n.price}),ee.jsx("span",{className:"mt-3 flex-1 text-[14px] font-light leading-relaxed text-white/60",children:n.desc}),ee.jsxs("span",{className:"mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-white/80 group-hover:text-white",children:["Szczegóły ",ee.jsx(CS,{})]})]},n.name))})]}),ee.jsx("section",{className:"border-t border-white/10",children:ee.jsxs("div",{className:"wrap grid items-center gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:py-28",children:[ee.jsxs("div",{className:"reveal",children:[ee.jsx("p",{className:"kicker text-mblue",children:"Jak to działa"}),ee.jsxs("h2",{className:"mt-4 text-3xl font-bold leading-tight tracking-[-0.02em] md:text-5xl",children:["Ty opisujesz pomysł.",ee.jsx("br",{}),"Ja buduję stronę."]}),ee.jsx("p",{className:"mt-5 max-w-xl text-[16px] font-light leading-relaxed text-white/65",children:"Wypełniasz krótki formularz: dane firmy, logo, inspiracje i kolory. Ustalamy szczegóły i cenę, a Ty dostajesz gotową stronę, którą sam umieszczasz w internecie."})]}),ee.jsxs("div",{className:"reveal flex flex-col gap-3",children:[ee.jsxs("a",{href:"/oferta#zamow",className:"btn-primary",children:["Opisz swoją stronę ",ee.jsx(CS,{})]}),ee.jsx("a",{href:"/oferta",className:"btn-light",children:"Pełna oferta, realizacje i o mnie"})]})]})}),ee.jsx("footer",{className:"border-t border-white/10 py-10 text-[12px] leading-relaxed text-white/45",children:ee.jsxs("div",{className:"wrap grid gap-6 md:grid-cols-[1fr_2fr]",children:[ee.jsxs("div",{children:[ee.jsx("p",{className:"text-[14px] font-semibold text-white",children:"Mateusz Ryś – Strony internetowe"}),ee.jsxs("p",{className:"mt-2 flex flex-wrap gap-x-4 gap-y-1",children:[ee.jsx("a",{className:"hover:text-white",href:"/oferta",children:"Oferta"}),ee.jsx("a",{className:"hover:text-white",href:"/oferta#kontakt",children:"Kontakt"}),ee.jsx("a",{className:"hover:text-white",href:"/polityka-prywatnosci",children:"Polityka prywatności"})]})]}),ee.jsxs("p",{children:["Zdjęcie samochodu: Damian B Oh,"," ",ee.jsx("a",{className:"underline hover:text-white",href:"https://commons.wikimedia.org/wiki/Category:BMW_M4_(G82)",children:"Wikimedia Commons"}),", licencja"," ",ee.jsx("a",{className:"underline hover:text-white",href:"https://creativecommons.org/licenses/by-sa/4.0/",children:"CC BY-SA 4.0"}),". Zdjęcie przycięte, wycięte z tła, z korektą kolorów i podmienioną tablicą. Strona jest pokazem moich możliwości i nie jest powiązana z BMW AG. BMW i M4 są znakami towarowymi BMW AG."]})]})})]})}const b0={Oferta:"Services",Realizacje:"Portfolio",Cennik:"Pricing","O mnie":"About me",Kontakt:"Contact","Zamów stronę":"Order a website","Strony internetowe":"Websites","Mateusz Ryś – strona główna":"Mateusz Ryś – home",Menu:"Menu","Język / Language":"Language","Samochód z tablicą mateuszrys.pl jadący nocą w deszczu":"A car with a mateuszrys.pl number plate driving at night in the rain","Mateusz Ryś · Strony internetowe":"Mateusz Ryś · Websites","Taką stronę zrobię":"I will build a website","dla Twojej firmy.":"like this for your business.","Przewiń i zobacz, jak może przyciągać uwagę Twoich klientów.":"Scroll down and see how it can grab your customers’ attention.","Przewiń i poczuj to":"Scroll and feel it","Efekt wow":"The wow effect","Strona, obok której nie przejdziesz obojętnie.":"A website nobody scrolls past.","Ruch, światło i klimat, które zatrzymują klienta na dłużej. Dokładnie to, co teraz oglądasz.":"Motion, light and atmosphere that keep customers on your page longer. Exactly what you are watching right now.","Strona już od":"Websites from",zł:"PLN","Strona promocyjna. Cena końcowa, bez ukrytych kosztów.":"Promo page. Final price, no hidden costs.","Tylko dla Ciebie":"Made just for you","Każdy projekt od zera, bez szablonów. Rozmawiasz bezpośrednio ze mną.":"Every project designed from scratch, no templates. You talk directly to me.","Do Twojej strony":"To your website",Chcesz:"Want","więcej?":"more?","Taką stronę albo zupełnie inną zaprojektuję dla Twojej firmy. Ty opisujesz pomysł, ja zamieniam go w stronę, która sprzedaje.":"I will design a website like this – or something completely different – for your business. You describe the idea, I turn it into a website that sells.","Zamów swoją stronę":"Order your website","Co mogę dla Ciebie zrobić?":"What can I do for you?","Wybierz, od czego zaczynamy.":"Choose where we start.","Każdą stronę projektuję od zera, pod Twoją firmę. Ceny są końcowe i ustalamy je przed rozpoczęciem pracy.":"I design every website from scratch for your business. Prices are final and agreed before any work starts.","Strona promocyjna":"Promo page","Strona wizytówka":"Business card website","Strona firmowa":"Company website","Odświeżenie strony":"Website refresh","799 zł":"799 PLN","1490 zł":"1490 PLN","od 2490 zł":"from 2490 PLN","od 990 zł":"from 990 PLN","Jedna efektowna, przewijana strona pod konkretną usługę, promocję lub wydarzenie.":"One striking scrolling page for a specific service, promotion or event.","Do 5 podstron, własny projekt graficzny i Wizytówka Google. Najczęściej wybierana.":"Up to 5 pages, a custom design and a Google Business Profile. The most popular choice.","Rozbudowana strona do 8 podstron dla firmy, która chce pokazać więcej.":"A larger website of up to 8 pages for businesses that want to show more.","Nowy wygląd starej strony, wersja na telefon i szybsze ładowanie.":"A new look for your old website, a mobile version and faster loading.","Najczęściej wybierana":"Most popular",Szczegóły:"Details","Jak to działa":"How it works","Ty opisujesz pomysł.":"You describe the idea.","Ja buduję stronę.":"I build the website.","Wypełniasz krótki formularz: dane firmy, logo, inspiracje i kolory. Ustalamy szczegóły i cenę, a Ty dostajesz gotową stronę, którą sam umieszczasz w internecie.":"You fill in a short form: business details, logo, inspirations and colours. We agree the details and the price, and you receive a finished website that you publish yourself.","Opisz swoją stronę":"Describe your website","Pełna oferta, realizacje i o mnie":"Full offer, portfolio and about me","Mateusz Ryś – Strony internetowe":"Mateusz Ryś – Websites","Polityka prywatności":"Privacy policy","Zdjęcie samochodu: Damian B Oh,":"Car photo: Damian B Oh,",", licencja":", licence",". Zdjęcie przycięte, wycięte z tła, z korektą kolorów i podmienioną tablicą. Strona jest pokazem moich możliwości i nie jest powiązana z BMW AG. BMW i M4 są znakami towarowymi BMW AG.":". Cropped, cut out from its background, colour graded, with a replaced number plate. This page is a showcase of my work and is not affiliated with BMW AG. BMW and M4 are trademarks of BMW AG."},pd=n=>n.replace(/\s+/g," ").trim(),pl={};for(const n in b0)pl[pd(n)]=b0[n];const md={};for(const n in pl)pl[n]in md||(md[pl[n]]=n);let os="pl";try{os=localStorage.getItem("lang")||((navigator.language||"pl").toLowerCase().startsWith("pl")?"pl":"en")}catch{}const R0=new Set,WI=()=>os,XI=n=>(R0.add(n),()=>R0.delete(n));function bS(n){const e=pd(n);if(!e)return n;const t=md[e]||e,i=os==="en"&&pl[t]||t;return i===e?n:n.match(/^\s*/)[0]+i+n.match(/\s*$/)[0]}const lT=["alt","aria-label"];function wh(n){if(n.nodeType===3){const r=bS(n.nodeValue);r!==n.nodeValue&&(n.nodeValue=r);return}if(n.nodeType!==1||/^(SCRIPT|STYLE)$/.test(n.nodeName))return;const e=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),t=[];for(;e.nextNode();)t.push(e.currentNode);t.forEach(r=>{const s=bS(r.nodeValue);s!==r.nodeValue&&(r.nodeValue=s)}),[n,...n.querySelectorAll("[alt],[aria-label]")].forEach(r=>lT.forEach(s=>{if(!r.hasAttribute||!r.hasAttribute(s))return;const o=r.getAttribute(s);if(!o)return;const a=md[pd(o)]||pd(o),l=os==="en"&&pl[a]||a;l!==o&&r.setAttribute(s,l)}))}function uT(){document.documentElement.lang=os;const n="Mateusz Ryś – Strony internetowe";document.title=os==="en"?b0[n]:n,wh(document.body),R0.forEach(e=>e(os))}function jI(n){os=n;try{localStorage.setItem("lang",n)}catch{}uT()}function YI(){new MutationObserver(e=>{if(os==="en")for(const t of e)t.type==="characterData"||t.type==="attributes"?wh(t.target):t.addedNodes.forEach(i=>wh(i))}).observe(document.body,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:lT}),uT()}cr.registerPlugin(it);const RS=[["/oferta","Oferta"],["/oferta#realizacje","Realizacje"],["/oferta#cennik","Cennik"],["/oferta#o-mnie","O mnie"],["/oferta#kontakt","Kontakt"]];function $I(){const[n,e]=Zn.useState(WI());return Zn.useEffect(()=>XI(e),[]),ee.jsx("div",{className:"flex items-center rounded-full border border p-[3px] text-[12px] font-semibold",style:{borderColor:"color-mix(in srgb, currentColor 35%, transparent)"},role:"group","aria-label":"Język / Language",children:["pl","en"].map(t=>ee.jsx("button",{onClick:()=>jI(t),className:`rounded-full px-[10px] py-[5px] uppercase transition ${n===t?"bg-grad text-white":"opacity-70 hover:opacity-100"}`,children:t},t))})}function qI({solid:n}){const[e,t]=Zn.useState(!1);return ee.jsxs("header",{className:`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-500 ${n||e?"bg-ink/95 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur":"bg-gradient-to-b from-black/60 to-transparent"}`,children:[ee.jsxs("div",{className:"wrap flex h-16 items-center justify-between md:h-[72px]",children:[ee.jsxs("a",{href:"/",className:"flex items-center gap-[10px] text-left","aria-label":"Mateusz Ryś – strona główna",children:[ee.jsx("span",{className:"grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-grad text-[14px] font-extrabold",children:"MR"}),ee.jsxs("span",{className:"leading-tight",children:[ee.jsx("span",{className:"block text-[16px] font-bold tracking-tight",children:"Mateusz Ryś"}),ee.jsx("span",{className:"block text-[12px] font-medium text-white/60",children:"Strony internetowe"})]})]}),ee.jsx("nav",{className:"hidden items-center gap-8 lg:flex",children:RS.map(([i,r])=>ee.jsx("a",{href:i,className:"text-[14px] font-medium opacity-80 transition hover:opacity-100",children:r},i))}),ee.jsxs("div",{className:"flex items-center gap-3",children:[ee.jsx($I,{}),ee.jsx("a",{href:"/oferta#zamow",className:"btn-primary hidden h-10 px-5 text-[13px] sm:inline-flex",children:"Zamów stronę"}),ee.jsx("button",{onClick:()=>t(i=>!i),className:"grid h-10 w-10 place-items-center lg:hidden","aria-label":"Menu","aria-expanded":e,children:ee.jsxs("span",{className:"relative block h-3 w-5",children:[ee.jsx("span",{className:`absolute left-0 top-0 h-[1.5px] w-5 bg-current transition ${e?"translate-y-[5px] rotate-45":""}`}),ee.jsx("span",{className:`absolute bottom-0 left-0 h-[1.5px] w-5 bg-current transition ${e?"-translate-y-[5px] -rotate-45":""}`})]})})]})]}),e&&ee.jsx("div",{className:"border-t border-white/10 bg-ink lg:hidden",children:ee.jsxs("div",{className:"wrap flex flex-col py-3",children:[RS.map(([i,r])=>ee.jsx("a",{href:i,className:"border-b border-white/10 py-4 text-[16px] font-semibold last:border-0",children:r},i)),ee.jsx("a",{href:"/oferta#zamow",className:"btn-primary mt-3",children:"Zamów stronę"})]})})]})}function KI(){const[n,e]=Zn.useState(!1);Zn.useEffect(()=>{YI()},[]),Zn.useLayoutEffect(()=>{const i=cr.context(()=>{it.create({trigger:"#explore",start:"top 72px",onEnter:()=>e(!0),onLeaveBack:()=>e(!1)}),cr.set(".reveal",{autoAlpha:0,y:36}),it.batch(".reveal",{start:"top 90%",onEnter:r=>cr.to(r,{autoAlpha:1,y:0,duration:1,ease:"expo.out",stagger:.08,overwrite:!0})}),cr.utils.toArray(".parallax").forEach(r=>{cr.fromTo(r,{yPercent:-10},{yPercent:6,ease:"none",scrollTrigger:{trigger:r.parentElement,start:"top bottom",end:"bottom top",scrub:!0}})})});return()=>i.revert()},[]);const t=Zn.useCallback(i=>{if(i==="top")return window.scrollTo({top:0,behavior:"smooth"});const r=document.getElementById(i);if(!r)return;const s=i==="explore"?0:64;window.scrollTo({top:r.getBoundingClientRect().top+window.scrollY-s,behavior:"smooth"})},[]);return ee.jsxs(ee.Fragment,{children:[ee.jsx(qI,{solid:n}),ee.jsx(HI,{onExplore:()=>t("explore")}),ee.jsx(GI,{})]})}"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);xm.createRoot(document.getElementById("root")).render(ee.jsx(KI,{}));
