function zh(a,i){for(var o=0;o<i.length;o++){const c=i[o];if(typeof c!="string"&&!Array.isArray(c)){for(const d in c)if(d!=="default"&&!(d in a)){const m=Object.getOwnPropertyDescriptor(c,d);m&&Object.defineProperty(a,d,m.get?m:{enumerable:!0,get:()=>c[d]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function o(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(d){if(d.ep)return;d.ep=!0;const m=o(d);fetch(d.href,m)}})();function $h(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var xo={exports:{}},Jn={},yo={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function Wh(){if(Rd)return Ee;Rd=1;var a=Symbol.for("react.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),f=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function I(E){return E===null||typeof E!="object"?null:(E=y&&E[y]||E["@@iterator"],typeof E=="function"?E:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,O={};function D(E,C,me){this.props=E,this.context=C,this.refs=O,this.updater=me||S}D.prototype.isReactComponent={},D.prototype.setState=function(E,C){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,C,"setState")},D.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function b(){}b.prototype=D.prototype;function K(E,C,me){this.props=E,this.context=C,this.refs=O,this.updater=me||S}var G=K.prototype=new b;G.constructor=K,H(G,D.prototype),G.isPureReactComponent=!0;var ae=Array.isArray,oe=Object.prototype.hasOwnProperty,ye={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function ie(E,C,me){var he,fe={},ve=null,be=null;if(C!=null)for(he in C.ref!==void 0&&(be=C.ref),C.key!==void 0&&(ve=""+C.key),C)oe.call(C,he)&&!U.hasOwnProperty(he)&&(fe[he]=C[he]);var Ie=arguments.length-2;if(Ie===1)fe.children=me;else if(1<Ie){for(var Ve=Array(Ie),gt=0;gt<Ie;gt++)Ve[gt]=arguments[gt+2];fe.children=Ve}if(E&&E.defaultProps)for(he in Ie=E.defaultProps,Ie)fe[he]===void 0&&(fe[he]=Ie[he]);return{$$typeof:a,type:E,key:ve,ref:be,props:fe,_owner:ye.current}}function pe(E,C){return{$$typeof:a,type:E.type,key:C,ref:E.ref,props:E.props,_owner:E._owner}}function Te(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function Le(E){var C={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(me){return C[me]})}var Oe=/\/+/g;function Ye(E,C){return typeof E=="object"&&E!==null&&E.key!=null?Le(""+E.key):C.toString(36)}function je(E,C,me,he,fe){var ve=typeof E;(ve==="undefined"||ve==="boolean")&&(E=null);var be=!1;if(E===null)be=!0;else switch(ve){case"string":case"number":be=!0;break;case"object":switch(E.$$typeof){case a:case i:be=!0}}if(be)return be=E,fe=fe(be),E=he===""?"."+Ye(be,0):he,ae(fe)?(me="",E!=null&&(me=E.replace(Oe,"$&/")+"/"),je(fe,C,me,"",function(gt){return gt})):fe!=null&&(Te(fe)&&(fe=pe(fe,me+(!fe.key||be&&be.key===fe.key?"":(""+fe.key).replace(Oe,"$&/")+"/")+E)),C.push(fe)),1;if(be=0,he=he===""?".":he+":",ae(E))for(var Ie=0;Ie<E.length;Ie++){ve=E[Ie];var Ve=he+Ye(ve,Ie);be+=je(ve,C,me,Ve,fe)}else if(Ve=I(E),typeof Ve=="function")for(E=Ve.call(E),Ie=0;!(ve=E.next()).done;)ve=ve.value,Ve=he+Ye(ve,Ie++),be+=je(ve,C,me,Ve,fe);else if(ve==="object")throw C=String(E),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.");return be}function ze(E,C,me){if(E==null)return E;var he=[],fe=0;return je(E,he,"","",function(ve){return C.call(me,ve,fe++)}),he}function Me(E){if(E._status===-1){var C=E._result;C=C(),C.then(function(me){(E._status===0||E._status===-1)&&(E._status=1,E._result=me)},function(me){(E._status===0||E._status===-1)&&(E._status=2,E._result=me)}),E._status===-1&&(E._status=0,E._result=C)}if(E._status===1)return E._result.default;throw E._result}var Ne={current:null},B={transition:null},Z={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:B,ReactCurrentOwner:ye};function W(){throw Error("act(...) is not supported in production builds of React.")}return Ee.Children={map:ze,forEach:function(E,C,me){ze(E,function(){C.apply(this,arguments)},me)},count:function(E){var C=0;return ze(E,function(){C++}),C},toArray:function(E){return ze(E,function(C){return C})||[]},only:function(E){if(!Te(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},Ee.Component=D,Ee.Fragment=o,Ee.Profiler=d,Ee.PureComponent=K,Ee.StrictMode=c,Ee.Suspense=p,Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,Ee.act=W,Ee.cloneElement=function(E,C,me){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var he=H({},E.props),fe=E.key,ve=E.ref,be=E._owner;if(C!=null){if(C.ref!==void 0&&(ve=C.ref,be=ye.current),C.key!==void 0&&(fe=""+C.key),E.type&&E.type.defaultProps)var Ie=E.type.defaultProps;for(Ve in C)oe.call(C,Ve)&&!U.hasOwnProperty(Ve)&&(he[Ve]=C[Ve]===void 0&&Ie!==void 0?Ie[Ve]:C[Ve])}var Ve=arguments.length-2;if(Ve===1)he.children=me;else if(1<Ve){Ie=Array(Ve);for(var gt=0;gt<Ve;gt++)Ie[gt]=arguments[gt+2];he.children=Ie}return{$$typeof:a,type:E.type,key:fe,ref:ve,props:he,_owner:be}},Ee.createContext=function(E){return E={$$typeof:f,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:m,_context:E},E.Consumer=E},Ee.createElement=ie,Ee.createFactory=function(E){var C=ie.bind(null,E);return C.type=E,C},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(E){return{$$typeof:A,render:E}},Ee.isValidElement=Te,Ee.lazy=function(E){return{$$typeof:v,_payload:{_status:-1,_result:E},_init:Me}},Ee.memo=function(E,C){return{$$typeof:g,type:E,compare:C===void 0?null:C}},Ee.startTransition=function(E){var C=B.transition;B.transition={};try{E()}finally{B.transition=C}},Ee.unstable_act=W,Ee.useCallback=function(E,C){return Ne.current.useCallback(E,C)},Ee.useContext=function(E){return Ne.current.useContext(E)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(E){return Ne.current.useDeferredValue(E)},Ee.useEffect=function(E,C){return Ne.current.useEffect(E,C)},Ee.useId=function(){return Ne.current.useId()},Ee.useImperativeHandle=function(E,C,me){return Ne.current.useImperativeHandle(E,C,me)},Ee.useInsertionEffect=function(E,C){return Ne.current.useInsertionEffect(E,C)},Ee.useLayoutEffect=function(E,C){return Ne.current.useLayoutEffect(E,C)},Ee.useMemo=function(E,C){return Ne.current.useMemo(E,C)},Ee.useReducer=function(E,C,me){return Ne.current.useReducer(E,C,me)},Ee.useRef=function(E){return Ne.current.useRef(E)},Ee.useState=function(E){return Ne.current.useState(E)},Ee.useSyncExternalStore=function(E,C,me){return Ne.current.useSyncExternalStore(E,C,me)},Ee.useTransition=function(){return Ne.current.useTransition()},Ee.version="18.3.1",Ee}var Md;function Do(){return Md||(Md=1,yo.exports=Wh()),yo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function qh(){if(Td)return Jn;Td=1;var a=Do(),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function f(A,p,g){var v,y={},I=null,S=null;g!==void 0&&(I=""+g),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)c.call(p,v)&&!m.hasOwnProperty(v)&&(y[v]=p[v]);if(A&&A.defaultProps)for(v in p=A.defaultProps,p)y[v]===void 0&&(y[v]=p[v]);return{$$typeof:i,type:A,key:I,ref:S,props:y,_owner:d.current}}return Jn.Fragment=o,Jn.jsx=f,Jn.jsxs=f,Jn}var Ed;function Jh(){return Ed||(Ed=1,xo.exports=qh()),xo.exports}var l=Jh(),Ri={},No={exports:{}},wt={},vo={exports:{}},Ro={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd;function Qh(){return Pd||(Pd=1,(function(a){function i(B,Z){var W=B.length;B.push(Z);e:for(;0<W;){var E=W-1>>>1,C=B[E];if(0<d(C,Z))B[E]=Z,B[W]=C,W=E;else break e}}function o(B){return B.length===0?null:B[0]}function c(B){if(B.length===0)return null;var Z=B[0],W=B.pop();if(W!==Z){B[0]=W;e:for(var E=0,C=B.length,me=C>>>1;E<me;){var he=2*(E+1)-1,fe=B[he],ve=he+1,be=B[ve];if(0>d(fe,W))ve<C&&0>d(be,fe)?(B[E]=be,B[ve]=W,E=ve):(B[E]=fe,B[he]=W,E=he);else if(ve<C&&0>d(be,W))B[E]=be,B[ve]=W,E=ve;else break e}}return Z}function d(B,Z){var W=B.sortIndex-Z.sortIndex;return W!==0?W:B.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;a.unstable_now=function(){return m.now()}}else{var f=Date,A=f.now();a.unstable_now=function(){return f.now()-A}}var p=[],g=[],v=1,y=null,I=3,S=!1,H=!1,O=!1,D=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(B){for(var Z=o(g);Z!==null;){if(Z.callback===null)c(g);else if(Z.startTime<=B)c(g),Z.sortIndex=Z.expirationTime,i(p,Z);else break;Z=o(g)}}function ae(B){if(O=!1,G(B),!H)if(o(p)!==null)H=!0,Me(oe);else{var Z=o(g);Z!==null&&Ne(ae,Z.startTime-B)}}function oe(B,Z){H=!1,O&&(O=!1,b(ie),ie=-1),S=!0;var W=I;try{for(G(Z),y=o(p);y!==null&&(!(y.expirationTime>Z)||B&&!Le());){var E=y.callback;if(typeof E=="function"){y.callback=null,I=y.priorityLevel;var C=E(y.expirationTime<=Z);Z=a.unstable_now(),typeof C=="function"?y.callback=C:y===o(p)&&c(p),G(Z)}else c(p);y=o(p)}if(y!==null)var me=!0;else{var he=o(g);he!==null&&Ne(ae,he.startTime-Z),me=!1}return me}finally{y=null,I=W,S=!1}}var ye=!1,U=null,ie=-1,pe=5,Te=-1;function Le(){return!(a.unstable_now()-Te<pe)}function Oe(){if(U!==null){var B=a.unstable_now();Te=B;var Z=!0;try{Z=U(!0,B)}finally{Z?Ye():(ye=!1,U=null)}}else ye=!1}var Ye;if(typeof K=="function")Ye=function(){K(Oe)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,ze=je.port2;je.port1.onmessage=Oe,Ye=function(){ze.postMessage(null)}}else Ye=function(){D(Oe,0)};function Me(B){U=B,ye||(ye=!0,Ye())}function Ne(B,Z){ie=D(function(){B(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_continueExecution=function(){H||S||(H=!0,Me(oe))},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pe=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return I},a.unstable_getFirstCallbackNode=function(){return o(p)},a.unstable_next=function(B){switch(I){case 1:case 2:case 3:var Z=3;break;default:Z=I}var W=I;I=Z;try{return B()}finally{I=W}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=I;I=B;try{return Z()}finally{I=W}},a.unstable_scheduleCallback=function(B,Z,W){var E=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?E+W:E):W=E,B){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=W+C,B={id:v++,callback:Z,priorityLevel:B,startTime:W,expirationTime:C,sortIndex:-1},W>E?(B.sortIndex=W,i(g,B),o(p)===null&&B===o(g)&&(O?(b(ie),ie=-1):O=!0,Ne(ae,W-E))):(B.sortIndex=C,i(p,B),H||S||(H=!0,Me(oe))),B},a.unstable_shouldYield=Le,a.unstable_wrapCallback=function(B){var Z=I;return function(){var W=I;I=Z;try{return B.apply(this,arguments)}finally{I=W}}}})(Ro)),Ro}var Id;function Zh(){return Id||(Id=1,vo.exports=Qh()),vo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function Xh(){if(wd)return wt;wd=1;var a=Do(),i=Zh();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,d={};function m(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(d[e]=t,e=0;e<t.length;e++)c.add(t[e])}var A=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function I(e){return p.call(y,e)?!0:p.call(v,e)?!1:g.test(e)?y[e]=!0:(v[e]=!0,!1)}function S(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H(e,t,r,n){if(t===null||typeof t>"u"||S(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function O(e,t,r,n,s,u,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=h}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new O(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new O(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new O(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new O(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new O(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new O(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new O(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new O(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new O(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function K(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(b,K);D[t]=new O(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(b,K);D[t]=new O(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(b,K);D[t]=new O(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new O(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new O(e,1,!1,e.toLowerCase(),null,!0,!0)});function G(e,t,r,n){var s=D.hasOwnProperty(t)?D[t]:null;(s!==null?s.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(H(t,r,s,n)&&(r=null),n||s===null?I(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,n=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var ae=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oe=Symbol.for("react.element"),ye=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),ie=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),Te=Symbol.for("react.provider"),Le=Symbol.for("react.context"),Oe=Symbol.for("react.forward_ref"),Ye=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),ze=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),Ne=Symbol.for("react.offscreen"),B=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,E;function C(e){if(E===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);E=t&&t[1]||""}return`
`+E+e}var me=!1;function he(e,t){if(!e||me)return"";me=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(j){var n=j}Reflect.construct(e,[],t)}else{try{t.call()}catch(j){n=j}e.call(t.prototype)}else{try{throw Error()}catch(j){n=j}e()}}catch(j){if(j&&n&&typeof j.stack=="string"){for(var s=j.stack.split(`
`),u=n.stack.split(`
`),h=s.length-1,x=u.length-1;1<=h&&0<=x&&s[h]!==u[x];)x--;for(;1<=h&&0<=x;h--,x--)if(s[h]!==u[x]){if(h!==1||x!==1)do if(h--,x--,0>x||s[h]!==u[x]){var R=`
`+s[h].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=h&&0<=x);break}}}finally{me=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?C(e):""}function fe(e){switch(e.tag){case 5:return C(e.type);case 16:return C("Lazy");case 13:return C("Suspense");case 19:return C("SuspenseList");case 0:case 2:case 15:return e=he(e.type,!1),e;case 11:return e=he(e.type.render,!1),e;case 1:return e=he(e.type,!0),e;default:return""}}function ve(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case ye:return"Portal";case pe:return"Profiler";case ie:return"StrictMode";case Ye:return"Suspense";case je:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Le:return(e.displayName||"Context")+".Consumer";case Te:return(e._context.displayName||"Context")+".Provider";case Oe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ze:return t=e.displayName||null,t!==null?t:ve(e.type)||"Memo";case Me:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}function be(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(t);case 8:return t===ie?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ie(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gt(e){var t=Ve(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,u=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(h){n=""+h,u.call(this,h)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ia(e){e._valueTracker||(e._valueTracker=gt(e))}function at(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Ve(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Wt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wa(e,t){var r=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function hl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Ie(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tr(e,t){t=t.checked,t!=null&&G(e,"checked",t,!1)}function un(e,t){tr(e,t);var r=Ie(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Sa(e,t.type,r):t.hasOwnProperty("defaultValue")&&Sa(e,t.type,Ie(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Sa(e,t,r){(t!=="number"||Wt(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var aa=Array.isArray;function Ir(e,t,r,n){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Ie(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function cn(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Al(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(o(92));if(aa(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ie(r)}}function rr(e,t){var r=Ie(t.value),n=Ie(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function wr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function na(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vt,Ot=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,s)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vt=vt||document.createElement("div"),vt.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Sr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mn=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(e){mn.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),la[t]=la[e]})});function gl(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||la.hasOwnProperty(e)&&la[e]?(""+t).trim():t+"px"}function Kt(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,s=gl(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,s):e[r]=s}}var xl=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function La(e,t){if(t){if(xl[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function ka(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fn=null;function Ua(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lr=null,fr=null,ar=null;function yl(e){if(e=Cn(e)){if(typeof Lr!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Kl(t),Lr(e.stateNode,e.type,t))}}function hn(e){fr?ar?ar.push(e):ar=[e]:fr=e}function Nl(){if(fr){var e=fr,t=ar;if(ar=fr=null,yl(e),t)for(e=0;e<t.length;e++)yl(t[e])}}function pn(e,t){return e(t)}function ia(){}var kr=!1;function An(e,t,r){if(kr)return e(t,r);kr=!0;try{return pn(e,t,r)}finally{kr=!1,(fr!==null||ar!==null)&&(ia(),Nl())}}function sa(e,t){var r=e.stateNode;if(r===null)return null;var n=Kl(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var gn=!1;if(A)try{var N={};Object.defineProperty(N,"passive",{get:function(){gn=!0}}),window.addEventListener("test",N,N),window.removeEventListener("test",N,N)}catch{gn=!1}function P(e,t,r,n,s,u,h,x,R){var j=Array.prototype.slice.call(arguments,3);try{t.apply(r,j)}catch(Y){this.onError(Y)}}var k=!1,_=null,$=!1,ne=null,ue={onError:function(e){k=!0,_=e}};function J(e,t,r,n,s,u,h,x,R){k=!1,_=null,P.apply(ue,arguments)}function X(e,t,r,n,s,u,h,x,R){if(J.apply(this,arguments),k){if(k){var j=_;k=!1,_=null}else throw Error(o(198));$||($=!0,ne=j)}}function te(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function xe(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function se(e){if(te(e)!==e)throw Error(o(188))}function Re(e){var t=e.alternate;if(!t){if(t=te(e),t===null)throw Error(o(188));return t!==e?null:e}for(var r=e,n=t;;){var s=r.return;if(s===null)break;var u=s.alternate;if(u===null){if(n=s.return,n!==null){r=n;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===r)return se(s),e;if(u===n)return se(s),t;u=u.sibling}throw Error(o(188))}if(r.return!==n.return)r=s,n=u;else{for(var h=!1,x=s.child;x;){if(x===r){h=!0,r=s,n=u;break}if(x===n){h=!0,n=s,r=u;break}x=x.sibling}if(!h){for(x=u.child;x;){if(x===r){h=!0,r=u,n=s;break}if(x===n){h=!0,n=u,r=s;break}x=x.sibling}if(!h)throw Error(o(189))}}if(r.alternate!==n)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:t}function we(e){return e=Re(e),e!==null?et(e):null}function et(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=et(e);if(t!==null)return t;e=e.sibling}return null}var Ze=i.unstable_scheduleCallback,it=i.unstable_cancelCallback,Ce=i.unstable_shouldYield,Rt=i.unstable_requestPaint,Ke=i.unstable_now,oa=i.unstable_getCurrentPriorityLevel,Dt=i.unstable_ImmediatePriority,Lt=i.unstable_UserBlockingPriority,Ur=i.unstable_NormalPriority,ua=i.unstable_LowPriority,nr=i.unstable_IdlePriority,hr=null,xt=null;function Se(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(hr,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:$e,jr=Math.log,pr=Math.LN2;function $e(e){return e>>>=0,e===0?32:31-(jr(e)/pr|0)|0}var Ar=64,ca=4194304;function da(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vl(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,s=e.suspendedLanes,u=e.pingedLanes,h=r&268435455;if(h!==0){var x=h&~s;x!==0?n=da(x):(u&=h,u!==0&&(n=da(u)))}else h=r&~s,h!==0?n=da(h):u!==0&&(n=da(u));if(n===0)return 0;if(t!==0&&t!==n&&(t&s)===0&&(s=n&-n,u=t&-t,s>=u||s===16&&(u&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ge(t),s=1<<r,n|=e[r],t&=~s;return n}function df(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mf(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes;0<u;){var h=31-Ge(u),x=1<<h,R=s[h];R===-1?((x&r)===0||(x&n)!==0)&&(s[h]=df(x,t)):R<=t&&(e.expiredLanes|=x),u&=~x}}function Di(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xo(){var e=Ar;return Ar<<=1,(Ar&4194240)===0&&(Ar=64),e}function Hi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function xn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ge(t),e[t]=r}function ff(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-Ge(r),u=1<<s;t[s]=0,n[s]=-1,e[s]=-1,r&=~u}}function Gi(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ge(r),s=1<<n;s&t|e[n]&t&&(e[n]|=t),r&=~s}}var De=0;function eu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var tu,Vi,ru,au,nu,_i=!1,Rl=[],br=null,Cr=null,Or=null,yn=new Map,Nn=new Map,Kr=[],hf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lu(e,t){switch(e){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nn.delete(t.pointerId)}}function vn(e,t,r,n,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:u,targetContainers:[s]},t!==null&&(t=Cn(t),t!==null&&Vi(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function pf(e,t,r,n,s){switch(t){case"focusin":return br=vn(br,e,t,r,n,s),!0;case"dragenter":return Cr=vn(Cr,e,t,r,n,s),!0;case"mouseover":return Or=vn(Or,e,t,r,n,s),!0;case"pointerover":var u=s.pointerId;return yn.set(u,vn(yn.get(u)||null,e,t,r,n,s)),!0;case"gotpointercapture":return u=s.pointerId,Nn.set(u,vn(Nn.get(u)||null,e,t,r,n,s)),!0}return!1}function iu(e){var t=ma(e.target);if(t!==null){var r=te(t);if(r!==null){if(t=r.tag,t===13){if(t=xe(r),t!==null){e.blockedOn=t,nu(e.priority,function(){ru(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ml(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Bi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);fn=n,r.target.dispatchEvent(n),fn=null}else return t=Cn(r),t!==null&&Vi(t),e.blockedOn=r,!1;t.shift()}return!0}function su(e,t,r){Ml(e)&&r.delete(t)}function Af(){_i=!1,br!==null&&Ml(br)&&(br=null),Cr!==null&&Ml(Cr)&&(Cr=null),Or!==null&&Ml(Or)&&(Or=null),yn.forEach(su),Nn.forEach(su)}function Rn(e,t){e.blockedOn===t&&(e.blockedOn=null,_i||(_i=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Af)))}function Mn(e){function t(s){return Rn(s,e)}if(0<Rl.length){Rn(Rl[0],e);for(var r=1;r<Rl.length;r++){var n=Rl[r];n.blockedOn===e&&(n.blockedOn=null)}}for(br!==null&&Rn(br,e),Cr!==null&&Rn(Cr,e),Or!==null&&Rn(Or,e),yn.forEach(t),Nn.forEach(t),r=0;r<Kr.length;r++)n=Kr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Kr.length&&(r=Kr[0],r.blockedOn===null);)iu(r),r.blockedOn===null&&Kr.shift()}var ja=ae.ReactCurrentBatchConfig,Tl=!0;function gf(e,t,r,n){var s=De,u=ja.transition;ja.transition=null;try{De=1,Yi(e,t,r,n)}finally{De=s,ja.transition=u}}function xf(e,t,r,n){var s=De,u=ja.transition;ja.transition=null;try{De=4,Yi(e,t,r,n)}finally{De=s,ja.transition=u}}function Yi(e,t,r,n){if(Tl){var s=Bi(e,t,r,n);if(s===null)ss(e,t,n,El,r),lu(e,n);else if(pf(s,e,t,r,n))n.stopPropagation();else if(lu(e,n),t&4&&-1<hf.indexOf(e)){for(;s!==null;){var u=Cn(s);if(u!==null&&tu(u),u=Bi(e,t,r,n),u===null&&ss(e,t,n,El,r),u===s)break;s=u}s!==null&&n.stopPropagation()}else ss(e,t,n,null,r)}}var El=null;function Bi(e,t,r,n){if(El=null,e=Ua(n),e=ma(e),e!==null)if(t=te(e),t===null)e=null;else if(r=t.tag,r===13){if(e=xe(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return El=e,null}function ou(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oa()){case Dt:return 1;case Lt:return 4;case Ur:case ua:return 16;case nr:return 536870912;default:return 16}default:return 16}}var Dr=null,Fi=null,Pl=null;function uu(){if(Pl)return Pl;var e,t=Fi,r=t.length,n,s="value"in Dr?Dr.value:Dr.textContent,u=s.length;for(e=0;e<r&&t[e]===s[e];e++);var h=r-e;for(n=1;n<=h&&t[r-n]===s[u-n];n++);return Pl=s.slice(e,1<n?1-n:void 0)}function Il(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wl(){return!0}function cu(){return!1}function kt(e){function t(r,n,s,u,h){this._reactName=r,this._targetInst=s,this.type=n,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(r=e[x],this[x]=r?r(u):u[x]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?wl:cu,this.isPropagationStopped=cu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),t}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zi=kt(ba),Tn=W({},ba,{view:0,detail:0}),yf=kt(Tn),$i,Wi,En,Sl=W({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ji,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?($i=e.screenX-En.screenX,Wi=e.screenY-En.screenY):Wi=$i=0,En=e),$i)},movementY:function(e){return"movementY"in e?e.movementY:Wi}}),du=kt(Sl),Nf=W({},Sl,{dataTransfer:0}),vf=kt(Nf),Rf=W({},Tn,{relatedTarget:0}),qi=kt(Rf),Mf=W({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),Tf=kt(Mf),Ef=W({},ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pf=kt(Ef),If=W({},ba,{data:0}),mu=kt(If),wf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lf[e])?!!t[e]:!1}function Ji(){return kf}var Uf=W({},Tn,{key:function(e){if(e.key){var t=wf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ji,charCode:function(e){return e.type==="keypress"?Il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jf=kt(Uf),bf=W({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fu=kt(bf),Cf=W({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ji}),Of=kt(Cf),Kf=W({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),Df=kt(Kf),Hf=W({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gf=kt(Hf),Vf=[9,13,27,32],Qi=A&&"CompositionEvent"in window,Pn=null;A&&"documentMode"in document&&(Pn=document.documentMode);var _f=A&&"TextEvent"in window&&!Pn,hu=A&&(!Qi||Pn&&8<Pn&&11>=Pn),pu=" ",Au=!1;function gu(e,t){switch(e){case"keyup":return Vf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ca=!1;function Yf(e,t){switch(e){case"compositionend":return xu(t);case"keypress":return t.which!==32?null:(Au=!0,pu);case"textInput":return e=t.data,e===pu&&Au?null:e;default:return null}}function Bf(e,t){if(Ca)return e==="compositionend"||!Qi&&gu(e,t)?(e=uu(),Pl=Fi=Dr=null,Ca=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hu&&t.locale!=="ko"?null:t.data;default:return null}}var Ff={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ff[e.type]:t==="textarea"}function Nu(e,t,r,n){hn(n),t=bl(t,"onChange"),0<t.length&&(r=new zi("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var In=null,wn=null;function zf(e){Du(e,0)}function Ll(e){var t=Ga(e);if(at(t))return e}function $f(e,t){if(e==="change")return t}var vu=!1;if(A){var Zi;if(A){var Xi="oninput"in document;if(!Xi){var Ru=document.createElement("div");Ru.setAttribute("oninput","return;"),Xi=typeof Ru.oninput=="function"}Zi=Xi}else Zi=!1;vu=Zi&&(!document.documentMode||9<document.documentMode)}function Mu(){In&&(In.detachEvent("onpropertychange",Tu),wn=In=null)}function Tu(e){if(e.propertyName==="value"&&Ll(wn)){var t=[];Nu(t,wn,e,Ua(e)),An(zf,t)}}function Wf(e,t,r){e==="focusin"?(Mu(),In=t,wn=r,In.attachEvent("onpropertychange",Tu)):e==="focusout"&&Mu()}function qf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ll(wn)}function Jf(e,t){if(e==="click")return Ll(t)}function Qf(e,t){if(e==="input"||e==="change")return Ll(t)}function Zf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qt=typeof Object.is=="function"?Object.is:Zf;function Sn(e,t){if(qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var s=r[n];if(!p.call(t,s)||!qt(e[s],t[s]))return!1}return!0}function Eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pu(e,t){var r=Eu(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Eu(r)}}function Iu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Iu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wu(){for(var e=window,t=Wt();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Wt(e.document)}return t}function es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xf(e){var t=wu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Iu(r.ownerDocument.documentElement,r)){if(n!==null&&es(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,u=Math.min(n.start,s);n=n.end===void 0?u:Math.min(n.end,s),!e.extend&&u>n&&(s=n,n=u,u=s),s=Pu(r,u);var h=Pu(r,n);s&&h&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),u>n?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var eh=A&&"documentMode"in document&&11>=document.documentMode,Oa=null,ts=null,Ln=null,rs=!1;function Su(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;rs||Oa==null||Oa!==Wt(n)||(n=Oa,"selectionStart"in n&&es(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ln&&Sn(Ln,n)||(Ln=n,n=bl(ts,"onSelect"),0<n.length&&(t=new zi("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Oa)))}function kl(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Ka={animationend:kl("Animation","AnimationEnd"),animationiteration:kl("Animation","AnimationIteration"),animationstart:kl("Animation","AnimationStart"),transitionend:kl("Transition","TransitionEnd")},as={},Lu={};A&&(Lu=document.createElement("div").style,"AnimationEvent"in window||(delete Ka.animationend.animation,delete Ka.animationiteration.animation,delete Ka.animationstart.animation),"TransitionEvent"in window||delete Ka.transitionend.transition);function Ul(e){if(as[e])return as[e];if(!Ka[e])return e;var t=Ka[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Lu)return as[e]=t[r];return e}var ku=Ul("animationend"),Uu=Ul("animationiteration"),ju=Ul("animationstart"),bu=Ul("transitionend"),Cu=new Map,Ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(e,t){Cu.set(e,t),m(t,[e])}for(var ns=0;ns<Ou.length;ns++){var ls=Ou[ns],th=ls.toLowerCase(),rh=ls[0].toUpperCase()+ls.slice(1);Hr(th,"on"+rh)}Hr(ku,"onAnimationEnd"),Hr(Uu,"onAnimationIteration"),Hr(ju,"onAnimationStart"),Hr("dblclick","onDoubleClick"),Hr("focusin","onFocus"),Hr("focusout","onBlur"),Hr(bu,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ah=new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));function Ku(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,X(n,t,void 0,e),e.currentTarget=null}function Du(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],s=n.event;n=n.listeners;e:{var u=void 0;if(t)for(var h=n.length-1;0<=h;h--){var x=n[h],R=x.instance,j=x.currentTarget;if(x=x.listener,R!==u&&s.isPropagationStopped())break e;Ku(s,x,j),u=R}else for(h=0;h<n.length;h++){if(x=n[h],R=x.instance,j=x.currentTarget,x=x.listener,R!==u&&s.isPropagationStopped())break e;Ku(s,x,j),u=R}}}if($)throw e=ne,$=!1,ne=null,e}function Be(e,t){var r=t[fs];r===void 0&&(r=t[fs]=new Set);var n=e+"__bubble";r.has(n)||(Hu(t,e,2,!1),r.add(n))}function is(e,t,r){var n=0;t&&(n|=4),Hu(r,e,n,t)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[jl]){e[jl]=!0,c.forEach(function(r){r!=="selectionchange"&&(ah.has(r)||is(r,!1,e),is(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jl]||(t[jl]=!0,is("selectionchange",!1,t))}}function Hu(e,t,r,n){switch(ou(t)){case 1:var s=gf;break;case 4:s=xf;break;default:s=Yi}r=s.bind(null,t,r,e),s=void 0,!gn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function ss(e,t,r,n,s){var u=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var h=n.tag;if(h===3||h===4){var x=n.stateNode.containerInfo;if(x===s||x.nodeType===8&&x.parentNode===s)break;if(h===4)for(h=n.return;h!==null;){var R=h.tag;if((R===3||R===4)&&(R=h.stateNode.containerInfo,R===s||R.nodeType===8&&R.parentNode===s))return;h=h.return}for(;x!==null;){if(h=ma(x),h===null)return;if(R=h.tag,R===5||R===6){n=u=h;continue e}x=x.parentNode}}n=n.return}An(function(){var j=u,Y=Ua(r),F=[];e:{var V=Cu.get(e);if(V!==void 0){var q=zi,ee=e;switch(e){case"keypress":if(Il(r)===0)break e;case"keydown":case"keyup":q=jf;break;case"focusin":ee="focus",q=qi;break;case"focusout":ee="blur",q=qi;break;case"beforeblur":case"afterblur":q=qi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=vf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Of;break;case ku:case Uu:case ju:q=Tf;break;case bu:q=Df;break;case"scroll":q=yf;break;case"wheel":q=Gf;break;case"copy":case"cut":case"paste":q=Pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=fu}var re=(t&4)!==0,Xe=!re&&e==="scroll",w=re?V!==null?V+"Capture":null:V;re=[];for(var T=j,L;T!==null;){L=T;var z=L.stateNode;if(L.tag===5&&z!==null&&(L=z,w!==null&&(z=sa(T,w),z!=null&&re.push(jn(T,z,L)))),Xe)break;T=T.return}0<re.length&&(V=new q(V,ee,null,r,Y),F.push({event:V,listeners:re}))}}if((t&7)===0){e:{if(V=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",V&&r!==fn&&(ee=r.relatedTarget||r.fromElement)&&(ma(ee)||ee[gr]))break e;if((q||V)&&(V=Y.window===Y?Y:(V=Y.ownerDocument)?V.defaultView||V.parentWindow:window,q?(ee=r.relatedTarget||r.toElement,q=j,ee=ee?ma(ee):null,ee!==null&&(Xe=te(ee),ee!==Xe||ee.tag!==5&&ee.tag!==6)&&(ee=null)):(q=null,ee=j),q!==ee)){if(re=du,z="onMouseLeave",w="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(re=fu,z="onPointerLeave",w="onPointerEnter",T="pointer"),Xe=q==null?V:Ga(q),L=ee==null?V:Ga(ee),V=new re(z,T+"leave",q,r,Y),V.target=Xe,V.relatedTarget=L,z=null,ma(Y)===j&&(re=new re(w,T+"enter",ee,r,Y),re.target=L,re.relatedTarget=Xe,z=re),Xe=z,q&&ee)t:{for(re=q,w=ee,T=0,L=re;L;L=Da(L))T++;for(L=0,z=w;z;z=Da(z))L++;for(;0<T-L;)re=Da(re),T--;for(;0<L-T;)w=Da(w),L--;for(;T--;){if(re===w||w!==null&&re===w.alternate)break t;re=Da(re),w=Da(w)}re=null}else re=null;q!==null&&Gu(F,V,q,re,!1),ee!==null&&Xe!==null&&Gu(F,Xe,ee,re,!0)}}e:{if(V=j?Ga(j):window,q=V.nodeName&&V.nodeName.toLowerCase(),q==="select"||q==="input"&&V.type==="file")var le=$f;else if(yu(V))if(vu)le=Qf;else{le=qf;var ce=Wf}else(q=V.nodeName)&&q.toLowerCase()==="input"&&(V.type==="checkbox"||V.type==="radio")&&(le=Jf);if(le&&(le=le(e,j))){Nu(F,le,r,Y);break e}ce&&ce(e,V,j),e==="focusout"&&(ce=V._wrapperState)&&ce.controlled&&V.type==="number"&&Sa(V,"number",V.value)}switch(ce=j?Ga(j):window,e){case"focusin":(yu(ce)||ce.contentEditable==="true")&&(Oa=ce,ts=j,Ln=null);break;case"focusout":Ln=ts=Oa=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,Su(F,r,Y);break;case"selectionchange":if(eh)break;case"keydown":case"keyup":Su(F,r,Y)}var de;if(Qi)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else Ca?gu(e,r)&&(Ae="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Ae="onCompositionStart");Ae&&(hu&&r.locale!=="ko"&&(Ca||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Ca&&(de=uu()):(Dr=Y,Fi="value"in Dr?Dr.value:Dr.textContent,Ca=!0)),ce=bl(j,Ae),0<ce.length&&(Ae=new mu(Ae,e,null,r,Y),F.push({event:Ae,listeners:ce}),de?Ae.data=de:(de=xu(r),de!==null&&(Ae.data=de)))),(de=_f?Yf(e,r):Bf(e,r))&&(j=bl(j,"onBeforeInput"),0<j.length&&(Y=new mu("onBeforeInput","beforeinput",null,r,Y),F.push({event:Y,listeners:j}),Y.data=de))}Du(F,t)})}function jn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function bl(e,t){for(var r=t+"Capture",n=[];e!==null;){var s=e,u=s.stateNode;s.tag===5&&u!==null&&(s=u,u=sa(e,r),u!=null&&n.unshift(jn(e,u,s)),u=sa(e,t),u!=null&&n.push(jn(e,u,s))),e=e.return}return n}function Da(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gu(e,t,r,n,s){for(var u=t._reactName,h=[];r!==null&&r!==n;){var x=r,R=x.alternate,j=x.stateNode;if(R!==null&&R===n)break;x.tag===5&&j!==null&&(x=j,s?(R=sa(r,u),R!=null&&h.unshift(jn(r,R,x))):s||(R=sa(r,u),R!=null&&h.push(jn(r,R,x)))),r=r.return}h.length!==0&&e.push({event:t,listeners:h})}var nh=/\r\n?/g,lh=/\u0000|\uFFFD/g;function Vu(e){return(typeof e=="string"?e:""+e).replace(nh,`
`).replace(lh,"")}function Cl(e,t,r){if(t=Vu(t),Vu(e)!==t&&r)throw Error(o(425))}function Ol(){}var os=null,us=null;function cs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ds=typeof setTimeout=="function"?setTimeout:void 0,ih=typeof clearTimeout=="function"?clearTimeout:void 0,_u=typeof Promise=="function"?Promise:void 0,sh=typeof queueMicrotask=="function"?queueMicrotask:typeof _u<"u"?function(e){return _u.resolve(null).then(e).catch(oh)}:ds;function oh(e){setTimeout(function(){throw e})}function ms(e,t){var r=t,n=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(n===0){e.removeChild(s),Mn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=s}while(r);Mn(t)}function Gr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ha=Math.random().toString(36).slice(2),lr="__reactFiber$"+Ha,bn="__reactProps$"+Ha,gr="__reactContainer$"+Ha,fs="__reactEvents$"+Ha,uh="__reactListeners$"+Ha,ch="__reactHandles$"+Ha;function ma(e){var t=e[lr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[gr]||r[lr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Yu(e);e!==null;){if(r=e[lr])return r;e=Yu(e)}return t}e=r,r=e.parentNode}return null}function Cn(e){return e=e[lr]||e[gr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ga(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Kl(e){return e[bn]||null}var hs=[],Va=-1;function Vr(e){return{current:e}}function Fe(e){0>Va||(e.current=hs[Va],hs[Va]=null,Va--)}function _e(e,t){Va++,hs[Va]=e.current,e.current=t}var _r={},mt=Vr(_r),Mt=Vr(!1),fa=_r;function _a(e,t){var r=e.type.contextTypes;if(!r)return _r;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var s={},u;for(u in r)s[u]=t[u];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Tt(e){return e=e.childContextTypes,e!=null}function Dl(){Fe(Mt),Fe(mt)}function Bu(e,t,r){if(mt.current!==_r)throw Error(o(168));_e(mt,t),_e(Mt,r)}function Fu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var s in n)if(!(s in t))throw Error(o(108,be(e)||"Unknown",s));return W({},r,n)}function Hl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_r,fa=mt.current,_e(mt,e),_e(Mt,Mt.current),!0}function zu(e,t,r){var n=e.stateNode;if(!n)throw Error(o(169));r?(e=Fu(e,t,fa),n.__reactInternalMemoizedMergedChildContext=e,Fe(Mt),Fe(mt),_e(mt,e)):Fe(Mt),_e(Mt,r)}var xr=null,Gl=!1,ps=!1;function $u(e){xr===null?xr=[e]:xr.push(e)}function dh(e){Gl=!0,$u(e)}function Yr(){if(!ps&&xr!==null){ps=!0;var e=0,t=De;try{var r=xr;for(De=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}xr=null,Gl=!1}catch(s){throw xr!==null&&(xr=xr.slice(e+1)),Ze(Dt,Yr),s}finally{De=t,ps=!1}}return null}var Ya=[],Ba=0,Vl=null,_l=0,Ht=[],Gt=0,ha=null,yr=1,Nr="";function pa(e,t){Ya[Ba++]=_l,Ya[Ba++]=Vl,Vl=e,_l=t}function Wu(e,t,r){Ht[Gt++]=yr,Ht[Gt++]=Nr,Ht[Gt++]=ha,ha=e;var n=yr;e=Nr;var s=32-Ge(n)-1;n&=~(1<<s),r+=1;var u=32-Ge(t)+s;if(30<u){var h=s-s%5;u=(n&(1<<h)-1).toString(32),n>>=h,s-=h,yr=1<<32-Ge(t)+s|r<<s|n,Nr=u+e}else yr=1<<u|r<<s|n,Nr=e}function As(e){e.return!==null&&(pa(e,1),Wu(e,1,0))}function gs(e){for(;e===Vl;)Vl=Ya[--Ba],Ya[Ba]=null,_l=Ya[--Ba],Ya[Ba]=null;for(;e===ha;)ha=Ht[--Gt],Ht[Gt]=null,Nr=Ht[--Gt],Ht[Gt]=null,yr=Ht[--Gt],Ht[Gt]=null}var Ut=null,jt=null,We=!1,Jt=null;function qu(e,t){var r=Bt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ju(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ut=e,jt=Gr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ut=e,jt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ha!==null?{id:yr,overflow:Nr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Bt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ut=e,jt=null,!0):!1;default:return!1}}function xs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ys(e){if(We){var t=jt;if(t){var r=t;if(!Ju(e,t)){if(xs(e))throw Error(o(418));t=Gr(r.nextSibling);var n=Ut;t&&Ju(e,t)?qu(n,r):(e.flags=e.flags&-4097|2,We=!1,Ut=e)}}else{if(xs(e))throw Error(o(418));e.flags=e.flags&-4097|2,We=!1,Ut=e}}}function Qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ut=e}function Yl(e){if(e!==Ut)return!1;if(!We)return Qu(e),We=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!cs(e.type,e.memoizedProps)),t&&(t=jt)){if(xs(e))throw Zu(),Error(o(418));for(;t;)qu(e,t),t=Gr(t.nextSibling)}if(Qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){jt=Gr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}jt=null}}else jt=Ut?Gr(e.stateNode.nextSibling):null;return!0}function Zu(){for(var e=jt;e;)e=Gr(e.nextSibling)}function Fa(){jt=Ut=null,We=!1}function Ns(e){Jt===null?Jt=[e]:Jt.push(e)}var mh=ae.ReactCurrentBatchConfig;function On(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(o(309));var n=r.stateNode}if(!n)throw Error(o(147,e));var s=n,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(h){var x=s.refs;h===null?delete x[u]:x[u]=h},t._stringRef=u,t)}if(typeof e!="string")throw Error(o(284));if(!r._owner)throw Error(o(290,e))}return e}function Bl(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xu(e){var t=e._init;return t(e._payload)}function ec(e){function t(w,T){if(e){var L=w.deletions;L===null?(w.deletions=[T],w.flags|=16):L.push(T)}}function r(w,T){if(!e)return null;for(;T!==null;)t(w,T),T=T.sibling;return null}function n(w,T){for(w=new Map;T!==null;)T.key!==null?w.set(T.key,T):w.set(T.index,T),T=T.sibling;return w}function s(w,T){return w=Qr(w,T),w.index=0,w.sibling=null,w}function u(w,T,L){return w.index=L,e?(L=w.alternate,L!==null?(L=L.index,L<T?(w.flags|=2,T):L):(w.flags|=2,T)):(w.flags|=1048576,T)}function h(w){return e&&w.alternate===null&&(w.flags|=2),w}function x(w,T,L,z){return T===null||T.tag!==6?(T=mo(L,w.mode,z),T.return=w,T):(T=s(T,L),T.return=w,T)}function R(w,T,L,z){var le=L.type;return le===U?Y(w,T,L.props.children,z,L.key):T!==null&&(T.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Me&&Xu(le)===T.type)?(z=s(T,L.props),z.ref=On(w,T,L),z.return=w,z):(z=hi(L.type,L.key,L.props,null,w.mode,z),z.ref=On(w,T,L),z.return=w,z)}function j(w,T,L,z){return T===null||T.tag!==4||T.stateNode.containerInfo!==L.containerInfo||T.stateNode.implementation!==L.implementation?(T=fo(L,w.mode,z),T.return=w,T):(T=s(T,L.children||[]),T.return=w,T)}function Y(w,T,L,z,le){return T===null||T.tag!==7?(T=Ma(L,w.mode,z,le),T.return=w,T):(T=s(T,L),T.return=w,T)}function F(w,T,L){if(typeof T=="string"&&T!==""||typeof T=="number")return T=mo(""+T,w.mode,L),T.return=w,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case oe:return L=hi(T.type,T.key,T.props,null,w.mode,L),L.ref=On(w,null,T),L.return=w,L;case ye:return T=fo(T,w.mode,L),T.return=w,T;case Me:var z=T._init;return F(w,z(T._payload),L)}if(aa(T)||Z(T))return T=Ma(T,w.mode,L,null),T.return=w,T;Bl(w,T)}return null}function V(w,T,L,z){var le=T!==null?T.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return le!==null?null:x(w,T,""+L,z);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case oe:return L.key===le?R(w,T,L,z):null;case ye:return L.key===le?j(w,T,L,z):null;case Me:return le=L._init,V(w,T,le(L._payload),z)}if(aa(L)||Z(L))return le!==null?null:Y(w,T,L,z,null);Bl(w,L)}return null}function q(w,T,L,z,le){if(typeof z=="string"&&z!==""||typeof z=="number")return w=w.get(L)||null,x(T,w,""+z,le);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case oe:return w=w.get(z.key===null?L:z.key)||null,R(T,w,z,le);case ye:return w=w.get(z.key===null?L:z.key)||null,j(T,w,z,le);case Me:var ce=z._init;return q(w,T,L,ce(z._payload),le)}if(aa(z)||Z(z))return w=w.get(L)||null,Y(T,w,z,le,null);Bl(T,z)}return null}function ee(w,T,L,z){for(var le=null,ce=null,de=T,Ae=T=0,ut=null;de!==null&&Ae<L.length;Ae++){de.index>Ae?(ut=de,de=null):ut=de.sibling;var Ue=V(w,de,L[Ae],z);if(Ue===null){de===null&&(de=ut);break}e&&de&&Ue.alternate===null&&t(w,de),T=u(Ue,T,Ae),ce===null?le=Ue:ce.sibling=Ue,ce=Ue,de=ut}if(Ae===L.length)return r(w,de),We&&pa(w,Ae),le;if(de===null){for(;Ae<L.length;Ae++)de=F(w,L[Ae],z),de!==null&&(T=u(de,T,Ae),ce===null?le=de:ce.sibling=de,ce=de);return We&&pa(w,Ae),le}for(de=n(w,de);Ae<L.length;Ae++)ut=q(de,w,Ae,L[Ae],z),ut!==null&&(e&&ut.alternate!==null&&de.delete(ut.key===null?Ae:ut.key),T=u(ut,T,Ae),ce===null?le=ut:ce.sibling=ut,ce=ut);return e&&de.forEach(function(Zr){return t(w,Zr)}),We&&pa(w,Ae),le}function re(w,T,L,z){var le=Z(L);if(typeof le!="function")throw Error(o(150));if(L=le.call(L),L==null)throw Error(o(151));for(var ce=le=null,de=T,Ae=T=0,ut=null,Ue=L.next();de!==null&&!Ue.done;Ae++,Ue=L.next()){de.index>Ae?(ut=de,de=null):ut=de.sibling;var Zr=V(w,de,Ue.value,z);if(Zr===null){de===null&&(de=ut);break}e&&de&&Zr.alternate===null&&t(w,de),T=u(Zr,T,Ae),ce===null?le=Zr:ce.sibling=Zr,ce=Zr,de=ut}if(Ue.done)return r(w,de),We&&pa(w,Ae),le;if(de===null){for(;!Ue.done;Ae++,Ue=L.next())Ue=F(w,Ue.value,z),Ue!==null&&(T=u(Ue,T,Ae),ce===null?le=Ue:ce.sibling=Ue,ce=Ue);return We&&pa(w,Ae),le}for(de=n(w,de);!Ue.done;Ae++,Ue=L.next())Ue=q(de,w,Ae,Ue.value,z),Ue!==null&&(e&&Ue.alternate!==null&&de.delete(Ue.key===null?Ae:Ue.key),T=u(Ue,T,Ae),ce===null?le=Ue:ce.sibling=Ue,ce=Ue);return e&&de.forEach(function(Fh){return t(w,Fh)}),We&&pa(w,Ae),le}function Xe(w,T,L,z){if(typeof L=="object"&&L!==null&&L.type===U&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case oe:e:{for(var le=L.key,ce=T;ce!==null;){if(ce.key===le){if(le=L.type,le===U){if(ce.tag===7){r(w,ce.sibling),T=s(ce,L.props.children),T.return=w,w=T;break e}}else if(ce.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Me&&Xu(le)===ce.type){r(w,ce.sibling),T=s(ce,L.props),T.ref=On(w,ce,L),T.return=w,w=T;break e}r(w,ce);break}else t(w,ce);ce=ce.sibling}L.type===U?(T=Ma(L.props.children,w.mode,z,L.key),T.return=w,w=T):(z=hi(L.type,L.key,L.props,null,w.mode,z),z.ref=On(w,T,L),z.return=w,w=z)}return h(w);case ye:e:{for(ce=L.key;T!==null;){if(T.key===ce)if(T.tag===4&&T.stateNode.containerInfo===L.containerInfo&&T.stateNode.implementation===L.implementation){r(w,T.sibling),T=s(T,L.children||[]),T.return=w,w=T;break e}else{r(w,T);break}else t(w,T);T=T.sibling}T=fo(L,w.mode,z),T.return=w,w=T}return h(w);case Me:return ce=L._init,Xe(w,T,ce(L._payload),z)}if(aa(L))return ee(w,T,L,z);if(Z(L))return re(w,T,L,z);Bl(w,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,T!==null&&T.tag===6?(r(w,T.sibling),T=s(T,L),T.return=w,w=T):(r(w,T),T=mo(L,w.mode,z),T.return=w,w=T),h(w)):r(w,T)}return Xe}var za=ec(!0),tc=ec(!1),Fl=Vr(null),zl=null,$a=null,vs=null;function Rs(){vs=$a=zl=null}function Ms(e){var t=Fl.current;Fe(Fl),e._currentValue=t}function Ts(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Wa(e,t){zl=e,vs=$a=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Et=!0),e.firstContext=null)}function Vt(e){var t=e._currentValue;if(vs!==e)if(e={context:e,memoizedValue:t,next:null},$a===null){if(zl===null)throw Error(o(308));$a=e,zl.dependencies={lanes:0,firstContext:e}}else $a=$a.next=e;return t}var Aa=null;function Es(e){Aa===null?Aa=[e]:Aa.push(e)}function rc(e,t,r,n){var s=t.interleaved;return s===null?(r.next=r,Es(t)):(r.next=s.next,s.next=r),t.interleaved=r,vr(e,n)}function vr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Br=!1;function Ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ke&2)!==0){var s=n.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),n.pending=t,vr(e,r)}return s=n.interleaved,s===null?(t.next=t,Es(n)):(t.next=s.next,s.next=t),n.interleaved=t,vr(e,r)}function $l(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Gi(e,r)}}function nc(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var s=null,u=null;if(r=r.firstBaseUpdate,r!==null){do{var h={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};u===null?s=u=h:u=u.next=h,r=r.next}while(r!==null);u===null?s=u=t:u=u.next=t}else s=u=t;r={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Wl(e,t,r,n){var s=e.updateQueue;Br=!1;var u=s.firstBaseUpdate,h=s.lastBaseUpdate,x=s.shared.pending;if(x!==null){s.shared.pending=null;var R=x,j=R.next;R.next=null,h===null?u=j:h.next=j,h=R;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,x=Y.lastBaseUpdate,x!==h&&(x===null?Y.firstBaseUpdate=j:x.next=j,Y.lastBaseUpdate=R))}if(u!==null){var F=s.baseState;h=0,Y=j=R=null,x=u;do{var V=x.lane,q=x.eventTime;if((n&V)===V){Y!==null&&(Y=Y.next={eventTime:q,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var ee=e,re=x;switch(V=t,q=r,re.tag){case 1:if(ee=re.payload,typeof ee=="function"){F=ee.call(q,F,V);break e}F=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=re.payload,V=typeof ee=="function"?ee.call(q,F,V):ee,V==null)break e;F=W({},F,V);break e;case 2:Br=!0}}x.callback!==null&&x.lane!==0&&(e.flags|=64,V=s.effects,V===null?s.effects=[x]:V.push(x))}else q={eventTime:q,lane:V,tag:x.tag,payload:x.payload,callback:x.callback,next:null},Y===null?(j=Y=q,R=F):Y=Y.next=q,h|=V;if(x=x.next,x===null){if(x=s.shared.pending,x===null)break;V=x,x=V.next,V.next=null,s.lastBaseUpdate=V,s.shared.pending=null}}while(!0);if(Y===null&&(R=F),s.baseState=R,s.firstBaseUpdate=j,s.lastBaseUpdate=Y,t=s.shared.interleaved,t!==null){s=t;do h|=s.lane,s=s.next;while(s!==t)}else u===null&&(s.shared.lanes=0);ya|=h,e.lanes=h,e.memoizedState=F}}function lc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],s=n.callback;if(s!==null){if(n.callback=null,n=r,typeof s!="function")throw Error(o(191,s));s.call(n)}}}var Kn={},ir=Vr(Kn),Dn=Vr(Kn),Hn=Vr(Kn);function ga(e){if(e===Kn)throw Error(o(174));return e}function Is(e,t){switch(_e(Hn,t),_e(Dn,e),_e(ir,Kn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:na(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=na(t,e)}Fe(ir),_e(ir,t)}function qa(){Fe(ir),Fe(Dn),Fe(Hn)}function ic(e){ga(Hn.current);var t=ga(ir.current),r=na(t,e.type);t!==r&&(_e(Dn,e),_e(ir,r))}function ws(e){Dn.current===e&&(Fe(ir),Fe(Dn))}var qe=Vr(0);function ql(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ss=[];function Ls(){for(var e=0;e<Ss.length;e++)Ss[e]._workInProgressVersionPrimary=null;Ss.length=0}var Jl=ae.ReactCurrentDispatcher,ks=ae.ReactCurrentBatchConfig,xa=0,Je=null,nt=null,st=null,Ql=!1,Gn=!1,Vn=0,fh=0;function ft(){throw Error(o(321))}function Us(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!qt(e[r],t[r]))return!1;return!0}function js(e,t,r,n,s,u){if(xa=u,Je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jl.current=e===null||e.memoizedState===null?gh:xh,e=r(n,s),Gn){u=0;do{if(Gn=!1,Vn=0,25<=u)throw Error(o(301));u+=1,st=nt=null,t.updateQueue=null,Jl.current=yh,e=r(n,s)}while(Gn)}if(Jl.current=ei,t=nt!==null&&nt.next!==null,xa=0,st=nt=Je=null,Ql=!1,t)throw Error(o(300));return e}function bs(){var e=Vn!==0;return Vn=0,e}function sr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Je.memoizedState=st=e:st=st.next=e,st}function _t(){if(nt===null){var e=Je.alternate;e=e!==null?e.memoizedState:null}else e=nt.next;var t=st===null?Je.memoizedState:st.next;if(t!==null)st=t,nt=e;else{if(e===null)throw Error(o(310));nt=e,e={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},st===null?Je.memoizedState=st=e:st=st.next=e}return st}function _n(e,t){return typeof t=="function"?t(e):t}function Cs(e){var t=_t(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var n=nt,s=n.baseQueue,u=r.pending;if(u!==null){if(s!==null){var h=s.next;s.next=u.next,u.next=h}n.baseQueue=s=u,r.pending=null}if(s!==null){u=s.next,n=n.baseState;var x=h=null,R=null,j=u;do{var Y=j.lane;if((xa&Y)===Y)R!==null&&(R=R.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),n=j.hasEagerState?j.eagerState:e(n,j.action);else{var F={lane:Y,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};R===null?(x=R=F,h=n):R=R.next=F,Je.lanes|=Y,ya|=Y}j=j.next}while(j!==null&&j!==u);R===null?h=n:R.next=x,qt(n,t.memoizedState)||(Et=!0),t.memoizedState=n,t.baseState=h,t.baseQueue=R,r.lastRenderedState=n}if(e=r.interleaved,e!==null){s=e;do u=s.lane,Je.lanes|=u,ya|=u,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Os(e){var t=_t(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var n=r.dispatch,s=r.pending,u=t.memoizedState;if(s!==null){r.pending=null;var h=s=s.next;do u=e(u,h.action),h=h.next;while(h!==s);qt(u,t.memoizedState)||(Et=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),r.lastRenderedState=u}return[u,n]}function sc(){}function oc(e,t){var r=Je,n=_t(),s=t(),u=!qt(n.memoizedState,s);if(u&&(n.memoizedState=s,Et=!0),n=n.queue,Ks(dc.bind(null,r,n,e),[e]),n.getSnapshot!==t||u||st!==null&&st.memoizedState.tag&1){if(r.flags|=2048,Yn(9,cc.bind(null,r,n,s,t),void 0,null),ot===null)throw Error(o(349));(xa&30)!==0||uc(r,t,s)}return s}function uc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Je.updateQueue,t===null?(t={lastEffect:null,stores:null},Je.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function cc(e,t,r,n){t.value=r,t.getSnapshot=n,mc(t)&&fc(e)}function dc(e,t,r){return r(function(){mc(t)&&fc(e)})}function mc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!qt(e,r)}catch{return!0}}function fc(e){var t=vr(e,1);t!==null&&er(t,e,1,-1)}function hc(e){var t=sr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:e},t.queue=e,e=e.dispatch=Ah.bind(null,Je,e),[t.memoizedState,e]}function Yn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Je.updateQueue,t===null?(t={lastEffect:null,stores:null},Je.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function pc(){return _t().memoizedState}function Zl(e,t,r,n){var s=sr();Je.flags|=e,s.memoizedState=Yn(1|t,r,void 0,n===void 0?null:n)}function Xl(e,t,r,n){var s=_t();n=n===void 0?null:n;var u=void 0;if(nt!==null){var h=nt.memoizedState;if(u=h.destroy,n!==null&&Us(n,h.deps)){s.memoizedState=Yn(t,r,u,n);return}}Je.flags|=e,s.memoizedState=Yn(1|t,r,u,n)}function Ac(e,t){return Zl(8390656,8,e,t)}function Ks(e,t){return Xl(2048,8,e,t)}function gc(e,t){return Xl(4,2,e,t)}function xc(e,t){return Xl(4,4,e,t)}function yc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nc(e,t,r){return r=r!=null?r.concat([e]):null,Xl(4,4,yc.bind(null,t,e),r)}function Ds(){}function vc(e,t){var r=_t();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Us(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Rc(e,t){var r=_t();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Us(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Mc(e,t,r){return(xa&21)===0?(e.baseState&&(e.baseState=!1,Et=!0),e.memoizedState=r):(qt(r,t)||(r=Xo(),Je.lanes|=r,ya|=r,e.baseState=!0),t)}function hh(e,t){var r=De;De=r!==0&&4>r?r:4,e(!0);var n=ks.transition;ks.transition={};try{e(!1),t()}finally{De=r,ks.transition=n}}function Tc(){return _t().memoizedState}function ph(e,t,r){var n=qr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Ec(e))Pc(t,r);else if(r=rc(e,t,r,n),r!==null){var s=Nt();er(r,e,n,s),Ic(r,t,n)}}function Ah(e,t,r){var n=qr(e),s={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ec(e))Pc(t,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var h=t.lastRenderedState,x=u(h,r);if(s.hasEagerState=!0,s.eagerState=x,qt(x,h)){var R=t.interleaved;R===null?(s.next=s,Es(t)):(s.next=R.next,R.next=s),t.interleaved=s;return}}catch{}finally{}r=rc(e,t,s,n),r!==null&&(s=Nt(),er(r,e,n,s),Ic(r,t,n))}}function Ec(e){var t=e.alternate;return e===Je||t!==null&&t===Je}function Pc(e,t){Gn=Ql=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Ic(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Gi(e,r)}}var ei={readContext:Vt,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},gh={readContext:Vt,useCallback:function(e,t){return sr().memoizedState=[e,t===void 0?null:t],e},useContext:Vt,useEffect:Ac,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Zl(4194308,4,yc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Zl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zl(4,2,e,t)},useMemo:function(e,t){var r=sr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=sr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=ph.bind(null,Je,e),[n.memoizedState,e]},useRef:function(e){var t=sr();return e={current:e},t.memoizedState=e},useState:hc,useDebugValue:Ds,useDeferredValue:function(e){return sr().memoizedState=e},useTransition:function(){var e=hc(!1),t=e[0];return e=hh.bind(null,e[1]),sr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Je,s=sr();if(We){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),ot===null)throw Error(o(349));(xa&30)!==0||uc(n,t,r)}s.memoizedState=r;var u={value:r,getSnapshot:t};return s.queue=u,Ac(dc.bind(null,n,u,e),[e]),n.flags|=2048,Yn(9,cc.bind(null,n,u,r,t),void 0,null),r},useId:function(){var e=sr(),t=ot.identifierPrefix;if(We){var r=Nr,n=yr;r=(n&~(1<<32-Ge(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Vn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=fh++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xh={readContext:Vt,useCallback:vc,useContext:Vt,useEffect:Ks,useImperativeHandle:Nc,useInsertionEffect:gc,useLayoutEffect:xc,useMemo:Rc,useReducer:Cs,useRef:pc,useState:function(){return Cs(_n)},useDebugValue:Ds,useDeferredValue:function(e){var t=_t();return Mc(t,nt.memoizedState,e)},useTransition:function(){var e=Cs(_n)[0],t=_t().memoizedState;return[e,t]},useMutableSource:sc,useSyncExternalStore:oc,useId:Tc,unstable_isNewReconciler:!1},yh={readContext:Vt,useCallback:vc,useContext:Vt,useEffect:Ks,useImperativeHandle:Nc,useInsertionEffect:gc,useLayoutEffect:xc,useMemo:Rc,useReducer:Os,useRef:pc,useState:function(){return Os(_n)},useDebugValue:Ds,useDeferredValue:function(e){var t=_t();return nt===null?t.memoizedState=e:Mc(t,nt.memoizedState,e)},useTransition:function(){var e=Os(_n)[0],t=_t().memoizedState;return[e,t]},useMutableSource:sc,useSyncExternalStore:oc,useId:Tc,unstable_isNewReconciler:!1};function Qt(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Hs(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:W({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ti={isMounted:function(e){return(e=e._reactInternals)?te(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Nt(),s=qr(e),u=Rr(n,s);u.payload=t,r!=null&&(u.callback=r),t=Fr(e,u,s),t!==null&&(er(t,e,s,n),$l(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Nt(),s=qr(e),u=Rr(n,s);u.tag=1,u.payload=t,r!=null&&(u.callback=r),t=Fr(e,u,s),t!==null&&(er(t,e,s,n),$l(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Nt(),n=qr(e),s=Rr(r,n);s.tag=2,t!=null&&(s.callback=t),t=Fr(e,s,n),t!==null&&(er(t,e,n,r),$l(t,e,n))}};function wc(e,t,r,n,s,u,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,u,h):t.prototype&&t.prototype.isPureReactComponent?!Sn(r,n)||!Sn(s,u):!0}function Sc(e,t,r){var n=!1,s=_r,u=t.contextType;return typeof u=="object"&&u!==null?u=Vt(u):(s=Tt(t)?fa:mt.current,n=t.contextTypes,u=(n=n!=null)?_a(e,s):_r),t=new t(r,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ti,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=u),t}function Lc(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ti.enqueueReplaceState(t,t.state,null)}function Gs(e,t,r,n){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},Ps(e);var u=t.contextType;typeof u=="object"&&u!==null?s.context=Vt(u):(u=Tt(t)?fa:mt.current,s.context=_a(e,u)),s.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Hs(e,t,u,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ti.enqueueReplaceState(s,s.state,null),Wl(e,r,s,n),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Ja(e,t){try{var r="",n=t;do r+=fe(n),n=n.return;while(n);var s=r}catch(u){s=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:s,digest:null}}function Vs(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function _s(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Nh=typeof WeakMap=="function"?WeakMap:Map;function kc(e,t,r){r=Rr(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){oi||(oi=!0,ao=n),_s(e,t)},r}function Uc(e,t,r){r=Rr(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var s=t.value;r.payload=function(){return n(s)},r.callback=function(){_s(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(r.callback=function(){_s(e,t),typeof n!="function"&&($r===null?$r=new Set([this]):$r.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),r}function jc(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Nh;var s=new Set;n.set(t,s)}else s=n.get(t),s===void 0&&(s=new Set,n.set(t,s));s.has(r)||(s.add(r),e=bh.bind(null,e,t,r),t.then(e,e))}function bc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cc(e,t,r,n,s){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Rr(-1,1),t.tag=2,Fr(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var vh=ae.ReactCurrentOwner,Et=!1;function yt(e,t,r,n){t.child=e===null?tc(t,null,r,n):za(t,e.child,r,n)}function Oc(e,t,r,n,s){r=r.render;var u=t.ref;return Wa(t,s),n=js(e,t,r,n,u,s),r=bs(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Mr(e,t,s)):(We&&r&&As(t),t.flags|=1,yt(e,t,n,s),t.child)}function Kc(e,t,r,n,s){if(e===null){var u=r.type;return typeof u=="function"&&!co(u)&&u.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=u,Dc(e,t,u,n,s)):(e=hi(r.type,null,n,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&s)===0){var h=u.memoizedProps;if(r=r.compare,r=r!==null?r:Sn,r(h,n)&&e.ref===t.ref)return Mr(e,t,s)}return t.flags|=1,e=Qr(u,n),e.ref=t.ref,e.return=t,t.child=e}function Dc(e,t,r,n,s){if(e!==null){var u=e.memoizedProps;if(Sn(u,n)&&e.ref===t.ref)if(Et=!1,t.pendingProps=n=u,(e.lanes&s)!==0)(e.flags&131072)!==0&&(Et=!0);else return t.lanes=e.lanes,Mr(e,t,s)}return Ys(e,t,r,n,s)}function Hc(e,t,r){var n=t.pendingProps,s=n.children,u=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Za,bt),bt|=r;else{if((r&1073741824)===0)return e=u!==null?u.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(Za,bt),bt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=u!==null?u.baseLanes:r,_e(Za,bt),bt|=n}else u!==null?(n=u.baseLanes|r,t.memoizedState=null):n=r,_e(Za,bt),bt|=n;return yt(e,t,s,r),t.child}function Gc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ys(e,t,r,n,s){var u=Tt(r)?fa:mt.current;return u=_a(t,u),Wa(t,s),r=js(e,t,r,n,u,s),n=bs(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Mr(e,t,s)):(We&&n&&As(t),t.flags|=1,yt(e,t,r,s),t.child)}function Vc(e,t,r,n,s){if(Tt(r)){var u=!0;Hl(t)}else u=!1;if(Wa(t,s),t.stateNode===null)ai(e,t),Sc(t,r,n),Gs(t,r,n,s),n=!0;else if(e===null){var h=t.stateNode,x=t.memoizedProps;h.props=x;var R=h.context,j=r.contextType;typeof j=="object"&&j!==null?j=Vt(j):(j=Tt(r)?fa:mt.current,j=_a(t,j));var Y=r.getDerivedStateFromProps,F=typeof Y=="function"||typeof h.getSnapshotBeforeUpdate=="function";F||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==n||R!==j)&&Lc(t,h,n,j),Br=!1;var V=t.memoizedState;h.state=V,Wl(t,n,h,s),R=t.memoizedState,x!==n||V!==R||Mt.current||Br?(typeof Y=="function"&&(Hs(t,r,Y,n),R=t.memoizedState),(x=Br||wc(t,r,x,n,V,R,j))?(F||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=R),h.props=n,h.state=R,h.context=j,n=x):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{h=t.stateNode,ac(e,t),x=t.memoizedProps,j=t.type===t.elementType?x:Qt(t.type,x),h.props=j,F=t.pendingProps,V=h.context,R=r.contextType,typeof R=="object"&&R!==null?R=Vt(R):(R=Tt(r)?fa:mt.current,R=_a(t,R));var q=r.getDerivedStateFromProps;(Y=typeof q=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==F||V!==R)&&Lc(t,h,n,R),Br=!1,V=t.memoizedState,h.state=V,Wl(t,n,h,s);var ee=t.memoizedState;x!==F||V!==ee||Mt.current||Br?(typeof q=="function"&&(Hs(t,r,q,n),ee=t.memoizedState),(j=Br||wc(t,r,j,n,V,ee,R)||!1)?(Y||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(n,ee,R),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(n,ee,R)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=ee),h.props=n,h.state=ee,h.context=R,n=j):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),n=!1)}return Bs(e,t,r,n,u,s)}function Bs(e,t,r,n,s,u){Gc(e,t);var h=(t.flags&128)!==0;if(!n&&!h)return s&&zu(t,r,!1),Mr(e,t,u);n=t.stateNode,vh.current=t;var x=h&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&h?(t.child=za(t,e.child,null,u),t.child=za(t,null,x,u)):yt(e,t,x,u),t.memoizedState=n.state,s&&zu(t,r,!0),t.child}function _c(e){var t=e.stateNode;t.pendingContext?Bu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bu(e,t.context,!1),Is(e,t.containerInfo)}function Yc(e,t,r,n,s){return Fa(),Ns(s),t.flags|=256,yt(e,t,r,n),t.child}var Fs={dehydrated:null,treeContext:null,retryLane:0};function zs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bc(e,t,r){var n=t.pendingProps,s=qe.current,u=!1,h=(t.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(s&2)!==0),x?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),_e(qe,s&1),e===null)return ys(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(h=n.children,e=n.fallback,u?(n=t.mode,u=t.child,h={mode:"hidden",children:h},(n&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=h):u=pi(h,n,0,null),e=Ma(e,n,r,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=zs(r),t.memoizedState=Fs,e):$s(t,h));if(s=e.memoizedState,s!==null&&(x=s.dehydrated,x!==null))return Rh(e,t,h,n,x,s,r);if(u){u=n.fallback,h=t.mode,s=e.child,x=s.sibling;var R={mode:"hidden",children:n.children};return(h&1)===0&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=R,t.deletions=null):(n=Qr(s,R),n.subtreeFlags=s.subtreeFlags&14680064),x!==null?u=Qr(x,u):(u=Ma(u,h,r,null),u.flags|=2),u.return=t,n.return=t,n.sibling=u,t.child=n,n=u,u=t.child,h=e.child.memoizedState,h=h===null?zs(r):{baseLanes:h.baseLanes|r,cachePool:null,transitions:h.transitions},u.memoizedState=h,u.childLanes=e.childLanes&~r,t.memoizedState=Fs,n}return u=e.child,e=u.sibling,n=Qr(u,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function $s(e,t){return t=pi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ri(e,t,r,n){return n!==null&&Ns(n),za(t,e.child,null,r),e=$s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rh(e,t,r,n,s,u,h){if(r)return t.flags&256?(t.flags&=-257,n=Vs(Error(o(422))),ri(e,t,h,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=n.fallback,s=t.mode,n=pi({mode:"visible",children:n.children},s,0,null),u=Ma(u,s,h,null),u.flags|=2,n.return=t,u.return=t,n.sibling=u,t.child=n,(t.mode&1)!==0&&za(t,e.child,null,h),t.child.memoizedState=zs(h),t.memoizedState=Fs,u);if((t.mode&1)===0)return ri(e,t,h,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var x=n.dgst;return n=x,u=Error(o(419)),n=Vs(u,n,void 0),ri(e,t,h,n)}if(x=(h&e.childLanes)!==0,Et||x){if(n=ot,n!==null){switch(h&-h){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(n.suspendedLanes|h))!==0?0:s,s!==0&&s!==u.retryLane&&(u.retryLane=s,vr(e,s),er(n,e,s,-1))}return uo(),n=Vs(Error(o(421))),ri(e,t,h,n)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Ch.bind(null,e),s._reactRetry=t,null):(e=u.treeContext,jt=Gr(s.nextSibling),Ut=t,We=!0,Jt=null,e!==null&&(Ht[Gt++]=yr,Ht[Gt++]=Nr,Ht[Gt++]=ha,yr=e.id,Nr=e.overflow,ha=t),t=$s(t,n.children),t.flags|=4096,t)}function Fc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ts(e.return,t,r)}function Ws(e,t,r,n,s){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:s}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=n,u.tail=r,u.tailMode=s)}function zc(e,t,r){var n=t.pendingProps,s=n.revealOrder,u=n.tail;if(yt(e,t,n.children,r),n=qe.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fc(e,r,t);else if(e.tag===19)Fc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(_e(qe,n),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&ql(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),Ws(t,!1,s,r,u);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ql(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}Ws(t,!0,r,null,u);break;case"together":Ws(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ai(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ya|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,r=Qr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Qr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Mh(e,t,r){switch(t.tag){case 3:_c(t),Fa();break;case 5:ic(t);break;case 1:Tt(t.type)&&Hl(t);break;case 4:Is(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,s=t.memoizedProps.value;_e(Fl,n._currentValue),n._currentValue=s;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(_e(qe,qe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Bc(e,t,r):(_e(qe,qe.current&1),e=Mr(e,t,r),e!==null?e.sibling:null);_e(qe,qe.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return zc(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),_e(qe,qe.current),n)break;return null;case 22:case 23:return t.lanes=0,Hc(e,t,r)}return Mr(e,t,r)}var $c,qs,Wc,qc;$c=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},qs=function(){},Wc=function(e,t,r,n){var s=e.memoizedProps;if(s!==n){e=t.stateNode,ga(ir.current);var u=null;switch(r){case"input":s=wa(e,s),n=wa(e,n),u=[];break;case"select":s=W({},s,{value:void 0}),n=W({},n,{value:void 0}),u=[];break;case"textarea":s=cn(e,s),n=cn(e,n),u=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ol)}La(r,n);var h;r=null;for(j in s)if(!n.hasOwnProperty(j)&&s.hasOwnProperty(j)&&s[j]!=null)if(j==="style"){var x=s[j];for(h in x)x.hasOwnProperty(h)&&(r||(r={}),r[h]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(d.hasOwnProperty(j)?u||(u=[]):(u=u||[]).push(j,null));for(j in n){var R=n[j];if(x=s!=null?s[j]:void 0,n.hasOwnProperty(j)&&R!==x&&(R!=null||x!=null))if(j==="style")if(x){for(h in x)!x.hasOwnProperty(h)||R&&R.hasOwnProperty(h)||(r||(r={}),r[h]="");for(h in R)R.hasOwnProperty(h)&&x[h]!==R[h]&&(r||(r={}),r[h]=R[h])}else r||(u||(u=[]),u.push(j,r)),r=R;else j==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,x=x?x.__html:void 0,R!=null&&x!==R&&(u=u||[]).push(j,R)):j==="children"?typeof R!="string"&&typeof R!="number"||(u=u||[]).push(j,""+R):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(d.hasOwnProperty(j)?(R!=null&&j==="onScroll"&&Be("scroll",e),u||x===R||(u=[])):(u=u||[]).push(j,R))}r&&(u=u||[]).push("style",r);var j=u;(t.updateQueue=j)&&(t.flags|=4)}},qc=function(e,t,r,n){r!==n&&(t.flags|=4)};function Bn(e,t){if(!We)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ht(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Th(e,t,r){var n=t.pendingProps;switch(gs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(t),null;case 1:return Tt(t.type)&&Dl(),ht(t),null;case 3:return n=t.stateNode,qa(),Fe(Mt),Fe(mt),Ls(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Jt!==null&&(io(Jt),Jt=null))),qs(e,t),ht(t),null;case 5:ws(t);var s=ga(Hn.current);if(r=t.type,e!==null&&t.stateNode!=null)Wc(e,t,r,n,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(o(166));return ht(t),null}if(e=ga(ir.current),Yl(t)){n=t.stateNode,r=t.type;var u=t.memoizedProps;switch(n[lr]=t,n[bn]=u,e=(t.mode&1)!==0,r){case"dialog":Be("cancel",n),Be("close",n);break;case"iframe":case"object":case"embed":Be("load",n);break;case"video":case"audio":for(s=0;s<kn.length;s++)Be(kn[s],n);break;case"source":Be("error",n);break;case"img":case"image":case"link":Be("error",n),Be("load",n);break;case"details":Be("toggle",n);break;case"input":hl(n,u),Be("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!u.multiple},Be("invalid",n);break;case"textarea":Al(n,u),Be("invalid",n)}La(r,u),s=null;for(var h in u)if(u.hasOwnProperty(h)){var x=u[h];h==="children"?typeof x=="string"?n.textContent!==x&&(u.suppressHydrationWarning!==!0&&Cl(n.textContent,x,e),s=["children",x]):typeof x=="number"&&n.textContent!==""+x&&(u.suppressHydrationWarning!==!0&&Cl(n.textContent,x,e),s=["children",""+x]):d.hasOwnProperty(h)&&x!=null&&h==="onScroll"&&Be("scroll",n)}switch(r){case"input":Ia(n),pl(n,u,!0);break;case"textarea":Ia(n),wr(n);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(n.onclick=Ol)}n=s,t.updateQueue=n,n!==null&&(t.flags|=4)}else{h=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dn(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=h.createElement(r,{is:n.is}):(e=h.createElement(r),r==="select"&&(h=e,n.multiple?h.multiple=!0:n.size&&(h.size=n.size))):e=h.createElementNS(e,r),e[lr]=t,e[bn]=n,$c(e,t,!1,!1),t.stateNode=e;e:{switch(h=ka(r,n),r){case"dialog":Be("cancel",e),Be("close",e),s=n;break;case"iframe":case"object":case"embed":Be("load",e),s=n;break;case"video":case"audio":for(s=0;s<kn.length;s++)Be(kn[s],e);s=n;break;case"source":Be("error",e),s=n;break;case"img":case"image":case"link":Be("error",e),Be("load",e),s=n;break;case"details":Be("toggle",e),s=n;break;case"input":hl(e,n),s=wa(e,n),Be("invalid",e);break;case"option":s=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},s=W({},n,{value:void 0}),Be("invalid",e);break;case"textarea":Al(e,n),s=cn(e,n),Be("invalid",e);break;default:s=n}La(r,s),x=s;for(u in x)if(x.hasOwnProperty(u)){var R=x[u];u==="style"?Kt(e,R):u==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&Ot(e,R)):u==="children"?typeof R=="string"?(r!=="textarea"||R!=="")&&Sr(e,R):typeof R=="number"&&Sr(e,""+R):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(d.hasOwnProperty(u)?R!=null&&u==="onScroll"&&Be("scroll",e):R!=null&&G(e,u,R,h))}switch(r){case"input":Ia(e),pl(e,n,!1);break;case"textarea":Ia(e),wr(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ie(n.value));break;case"select":e.multiple=!!n.multiple,u=n.value,u!=null?Ir(e,!!n.multiple,u,!1):n.defaultValue!=null&&Ir(e,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ol)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ht(t),null;case 6:if(e&&t.stateNode!=null)qc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(o(166));if(r=ga(Hn.current),ga(ir.current),Yl(t)){if(n=t.stateNode,r=t.memoizedProps,n[lr]=t,(u=n.nodeValue!==r)&&(e=Ut,e!==null))switch(e.tag){case 3:Cl(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cl(n.nodeValue,r,(e.mode&1)!==0)}u&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[lr]=t,t.stateNode=n}return ht(t),null;case 13:if(Fe(qe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(We&&jt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Zu(),Fa(),t.flags|=98560,u=!1;else if(u=Yl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[lr]=t}else Fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ht(t),u=!1}else Jt!==null&&(io(Jt),Jt=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(qe.current&1)!==0?lt===0&&(lt=3):uo())),t.updateQueue!==null&&(t.flags|=4),ht(t),null);case 4:return qa(),qs(e,t),e===null&&Un(t.stateNode.containerInfo),ht(t),null;case 10:return Ms(t.type._context),ht(t),null;case 17:return Tt(t.type)&&Dl(),ht(t),null;case 19:if(Fe(qe),u=t.memoizedState,u===null)return ht(t),null;if(n=(t.flags&128)!==0,h=u.rendering,h===null)if(n)Bn(u,!1);else{if(lt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=ql(e),h!==null){for(t.flags|=128,Bn(u,!1),n=h.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)u=r,e=n,u.flags&=14680066,h=u.alternate,h===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=h.childLanes,u.lanes=h.lanes,u.child=h.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=h.memoizedProps,u.memoizedState=h.memoizedState,u.updateQueue=h.updateQueue,u.type=h.type,e=h.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return _e(qe,qe.current&1|2),t.child}e=e.sibling}u.tail!==null&&Ke()>Xa&&(t.flags|=128,n=!0,Bn(u,!1),t.lanes=4194304)}else{if(!n)if(e=ql(h),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Bn(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!We)return ht(t),null}else 2*Ke()-u.renderingStartTime>Xa&&r!==1073741824&&(t.flags|=128,n=!0,Bn(u,!1),t.lanes=4194304);u.isBackwards?(h.sibling=t.child,t.child=h):(r=u.last,r!==null?r.sibling=h:t.child=h,u.last=h)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Ke(),t.sibling=null,r=qe.current,_e(qe,n?r&1|2:r&1),t):(ht(t),null);case 22:case 23:return oo(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(bt&1073741824)!==0&&(ht(t),t.subtreeFlags&6&&(t.flags|=8192)):ht(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Eh(e,t){switch(gs(t),t.tag){case 1:return Tt(t.type)&&Dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qa(),Fe(Mt),Fe(mt),Ls(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ws(t),null;case 13:if(Fe(qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(qe),null;case 4:return qa(),null;case 10:return Ms(t.type._context),null;case 22:case 23:return oo(),null;case 24:return null;default:return null}}var ni=!1,pt=!1,Ph=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Qa(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Qe(e,t,n)}else r.current=null}function Js(e,t,r){try{r()}catch(n){Qe(e,t,n)}}var Jc=!1;function Ih(e,t){if(os=Tl,e=wu(),es(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var s=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{r.nodeType,u.nodeType}catch{r=null;break e}var h=0,x=-1,R=-1,j=0,Y=0,F=e,V=null;t:for(;;){for(var q;F!==r||s!==0&&F.nodeType!==3||(x=h+s),F!==u||n!==0&&F.nodeType!==3||(R=h+n),F.nodeType===3&&(h+=F.nodeValue.length),(q=F.firstChild)!==null;)V=F,F=q;for(;;){if(F===e)break t;if(V===r&&++j===s&&(x=h),V===u&&++Y===n&&(R=h),(q=F.nextSibling)!==null)break;F=V,V=F.parentNode}F=q}r=x===-1||R===-1?null:{start:x,end:R}}else r=null}r=r||{start:0,end:0}}else r=null;for(us={focusedElem:e,selectionRange:r},Tl=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var ee=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ee!==null){var re=ee.memoizedProps,Xe=ee.memoizedState,w=t.stateNode,T=w.getSnapshotBeforeUpdate(t.elementType===t.type?re:Qt(t.type,re),Xe);w.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var L=t.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(z){Qe(t,t.return,z)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return ee=Jc,Jc=!1,ee}function Fn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var u=s.destroy;s.destroy=void 0,u!==void 0&&Js(t,r,u)}s=s.next}while(s!==n)}}function li(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Qs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Qc(e){var t=e.alternate;t!==null&&(e.alternate=null,Qc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lr],delete t[bn],delete t[fs],delete t[uh],delete t[ch])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zc(e){return e.tag===5||e.tag===3||e.tag===4}function Xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ol));else if(n!==4&&(e=e.child,e!==null))for(Zs(e,t,r),e=e.sibling;e!==null;)Zs(e,t,r),e=e.sibling}function Xs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Xs(e,t,r),e=e.sibling;e!==null;)Xs(e,t,r),e=e.sibling}var ct=null,Zt=!1;function zr(e,t,r){for(r=r.child;r!==null;)ed(e,t,r),r=r.sibling}function ed(e,t,r){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(hr,r)}catch{}switch(r.tag){case 5:pt||Qa(r,t);case 6:var n=ct,s=Zt;ct=null,zr(e,t,r),ct=n,Zt=s,ct!==null&&(Zt?(e=ct,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ct.removeChild(r.stateNode));break;case 18:ct!==null&&(Zt?(e=ct,r=r.stateNode,e.nodeType===8?ms(e.parentNode,r):e.nodeType===1&&ms(e,r),Mn(e)):ms(ct,r.stateNode));break;case 4:n=ct,s=Zt,ct=r.stateNode.containerInfo,Zt=!0,zr(e,t,r),ct=n,Zt=s;break;case 0:case 11:case 14:case 15:if(!pt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var u=s,h=u.destroy;u=u.tag,h!==void 0&&((u&2)!==0||(u&4)!==0)&&Js(r,t,h),s=s.next}while(s!==n)}zr(e,t,r);break;case 1:if(!pt&&(Qa(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(x){Qe(r,t,x)}zr(e,t,r);break;case 21:zr(e,t,r);break;case 22:r.mode&1?(pt=(n=pt)||r.memoizedState!==null,zr(e,t,r),pt=n):zr(e,t,r);break;default:zr(e,t,r)}}function td(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Ph),t.forEach(function(n){var s=Oh.bind(null,e,n);r.has(n)||(r.add(n),n.then(s,s))})}}function Xt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var s=r[n];try{var u=e,h=t,x=h;e:for(;x!==null;){switch(x.tag){case 5:ct=x.stateNode,Zt=!1;break e;case 3:ct=x.stateNode.containerInfo,Zt=!0;break e;case 4:ct=x.stateNode.containerInfo,Zt=!0;break e}x=x.return}if(ct===null)throw Error(o(160));ed(u,h,s),ct=null,Zt=!1;var R=s.alternate;R!==null&&(R.return=null),s.return=null}catch(j){Qe(s,t,j)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rd(t,e),t=t.sibling}function rd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xt(t,e),or(e),n&4){try{Fn(3,e,e.return),li(3,e)}catch(re){Qe(e,e.return,re)}try{Fn(5,e,e.return)}catch(re){Qe(e,e.return,re)}}break;case 1:Xt(t,e),or(e),n&512&&r!==null&&Qa(r,r.return);break;case 5:if(Xt(t,e),or(e),n&512&&r!==null&&Qa(r,r.return),e.flags&32){var s=e.stateNode;try{Sr(s,"")}catch(re){Qe(e,e.return,re)}}if(n&4&&(s=e.stateNode,s!=null)){var u=e.memoizedProps,h=r!==null?r.memoizedProps:u,x=e.type,R=e.updateQueue;if(e.updateQueue=null,R!==null)try{x==="input"&&u.type==="radio"&&u.name!=null&&tr(s,u),ka(x,h);var j=ka(x,u);for(h=0;h<R.length;h+=2){var Y=R[h],F=R[h+1];Y==="style"?Kt(s,F):Y==="dangerouslySetInnerHTML"?Ot(s,F):Y==="children"?Sr(s,F):G(s,Y,F,j)}switch(x){case"input":un(s,u);break;case"textarea":rr(s,u);break;case"select":var V=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!u.multiple;var q=u.value;q!=null?Ir(s,!!u.multiple,q,!1):V!==!!u.multiple&&(u.defaultValue!=null?Ir(s,!!u.multiple,u.defaultValue,!0):Ir(s,!!u.multiple,u.multiple?[]:"",!1))}s[bn]=u}catch(re){Qe(e,e.return,re)}}break;case 6:if(Xt(t,e),or(e),n&4){if(e.stateNode===null)throw Error(o(162));s=e.stateNode,u=e.memoizedProps;try{s.nodeValue=u}catch(re){Qe(e,e.return,re)}}break;case 3:if(Xt(t,e),or(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Mn(t.containerInfo)}catch(re){Qe(e,e.return,re)}break;case 4:Xt(t,e),or(e);break;case 13:Xt(t,e),or(e),s=e.child,s.flags&8192&&(u=s.memoizedState!==null,s.stateNode.isHidden=u,!u||s.alternate!==null&&s.alternate.memoizedState!==null||(ro=Ke())),n&4&&td(e);break;case 22:if(Y=r!==null&&r.memoizedState!==null,e.mode&1?(pt=(j=pt)||Y,Xt(t,e),pt=j):Xt(t,e),or(e),n&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!Y&&(e.mode&1)!==0)for(Q=e,Y=e.child;Y!==null;){for(F=Q=Y;Q!==null;){switch(V=Q,q=V.child,V.tag){case 0:case 11:case 14:case 15:Fn(4,V,V.return);break;case 1:Qa(V,V.return);var ee=V.stateNode;if(typeof ee.componentWillUnmount=="function"){n=V,r=V.return;try{t=n,ee.props=t.memoizedProps,ee.state=t.memoizedState,ee.componentWillUnmount()}catch(re){Qe(n,r,re)}}break;case 5:Qa(V,V.return);break;case 22:if(V.memoizedState!==null){ld(F);continue}}q!==null?(q.return=V,Q=q):ld(F)}Y=Y.sibling}e:for(Y=null,F=e;;){if(F.tag===5){if(Y===null){Y=F;try{s=F.stateNode,j?(u=s.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(x=F.stateNode,R=F.memoizedProps.style,h=R!=null&&R.hasOwnProperty("display")?R.display:null,x.style.display=gl("display",h))}catch(re){Qe(e,e.return,re)}}}else if(F.tag===6){if(Y===null)try{F.stateNode.nodeValue=j?"":F.memoizedProps}catch(re){Qe(e,e.return,re)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===e)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===e)break e;for(;F.sibling===null;){if(F.return===null||F.return===e)break e;Y===F&&(Y=null),F=F.return}Y===F&&(Y=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:Xt(t,e),or(e),n&4&&td(e);break;case 21:break;default:Xt(t,e),or(e)}}function or(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Zc(r)){var n=r;break e}r=r.return}throw Error(o(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(Sr(s,""),n.flags&=-33);var u=Xc(e);Xs(e,u,s);break;case 3:case 4:var h=n.stateNode.containerInfo,x=Xc(e);Zs(e,x,h);break;default:throw Error(o(161))}}catch(R){Qe(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wh(e,t,r){Q=e,ad(e)}function ad(e,t,r){for(var n=(e.mode&1)!==0;Q!==null;){var s=Q,u=s.child;if(s.tag===22&&n){var h=s.memoizedState!==null||ni;if(!h){var x=s.alternate,R=x!==null&&x.memoizedState!==null||pt;x=ni;var j=pt;if(ni=h,(pt=R)&&!j)for(Q=s;Q!==null;)h=Q,R=h.child,h.tag===22&&h.memoizedState!==null?id(s):R!==null?(R.return=h,Q=R):id(s);for(;u!==null;)Q=u,ad(u),u=u.sibling;Q=s,ni=x,pt=j}nd(e)}else(s.subtreeFlags&8772)!==0&&u!==null?(u.return=s,Q=u):nd(e)}}function nd(e){for(;Q!==null;){var t=Q;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:pt||li(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!pt)if(r===null)n.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:Qt(t.type,r.memoizedProps);n.componentDidUpdate(s,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&lc(t,u,n);break;case 3:var h=t.updateQueue;if(h!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}lc(t,h,r)}break;case 5:var x=t.stateNode;if(r===null&&t.flags&4){r=x;var R=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&r.focus();break;case"img":R.src&&(r.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var j=t.alternate;if(j!==null){var Y=j.memoizedState;if(Y!==null){var F=Y.dehydrated;F!==null&&Mn(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}pt||t.flags&512&&Qs(t)}catch(V){Qe(t,t.return,V)}}if(t===e){Q=null;break}if(r=t.sibling,r!==null){r.return=t.return,Q=r;break}Q=t.return}}function ld(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Q=r;break}Q=t.return}}function id(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{li(4,t)}catch(R){Qe(t,r,R)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var s=t.return;try{n.componentDidMount()}catch(R){Qe(t,s,R)}}var u=t.return;try{Qs(t)}catch(R){Qe(t,u,R)}break;case 5:var h=t.return;try{Qs(t)}catch(R){Qe(t,h,R)}}}catch(R){Qe(t,t.return,R)}if(t===e){Q=null;break}var x=t.sibling;if(x!==null){x.return=t.return,Q=x;break}Q=t.return}}var Sh=Math.ceil,ii=ae.ReactCurrentDispatcher,eo=ae.ReactCurrentOwner,Yt=ae.ReactCurrentBatchConfig,ke=0,ot=null,tt=null,dt=0,bt=0,Za=Vr(0),lt=0,zn=null,ya=0,si=0,to=0,$n=null,Pt=null,ro=0,Xa=1/0,Tr=null,oi=!1,ao=null,$r=null,ui=!1,Wr=null,ci=0,Wn=0,no=null,di=-1,mi=0;function Nt(){return(ke&6)!==0?Ke():di!==-1?di:di=Ke()}function qr(e){return(e.mode&1)===0?1:(ke&2)!==0&&dt!==0?dt&-dt:mh.transition!==null?(mi===0&&(mi=Xo()),mi):(e=De,e!==0||(e=window.event,e=e===void 0?16:ou(e.type)),e)}function er(e,t,r,n){if(50<Wn)throw Wn=0,no=null,Error(o(185));xn(e,r,n),((ke&2)===0||e!==ot)&&(e===ot&&((ke&2)===0&&(si|=r),lt===4&&Jr(e,dt)),It(e,n),r===1&&ke===0&&(t.mode&1)===0&&(Xa=Ke()+500,Gl&&Yr()))}function It(e,t){var r=e.callbackNode;mf(e,t);var n=vl(e,e===ot?dt:0);if(n===0)r!==null&&it(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&it(r),t===1)e.tag===0?dh(od.bind(null,e)):$u(od.bind(null,e)),sh(function(){(ke&6)===0&&Yr()}),r=null;else{switch(eu(n)){case 1:r=Dt;break;case 4:r=Lt;break;case 16:r=Ur;break;case 536870912:r=nr;break;default:r=Ur}r=Ad(r,sd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function sd(e,t){if(di=-1,mi=0,(ke&6)!==0)throw Error(o(327));var r=e.callbackNode;if(en()&&e.callbackNode!==r)return null;var n=vl(e,e===ot?dt:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=fi(e,n);else{t=n;var s=ke;ke|=2;var u=cd();(ot!==e||dt!==t)&&(Tr=null,Xa=Ke()+500,va(e,t));do try{Uh();break}catch(x){ud(e,x)}while(!0);Rs(),ii.current=u,ke=s,tt!==null?t=0:(ot=null,dt=0,t=lt)}if(t!==0){if(t===2&&(s=Di(e),s!==0&&(n=s,t=lo(e,s))),t===1)throw r=zn,va(e,0),Jr(e,n),It(e,Ke()),r;if(t===6)Jr(e,n);else{if(s=e.current.alternate,(n&30)===0&&!Lh(s)&&(t=fi(e,n),t===2&&(u=Di(e),u!==0&&(n=u,t=lo(e,u))),t===1))throw r=zn,va(e,0),Jr(e,n),It(e,Ke()),r;switch(e.finishedWork=s,e.finishedLanes=n,t){case 0:case 1:throw Error(o(345));case 2:Ra(e,Pt,Tr);break;case 3:if(Jr(e,n),(n&130023424)===n&&(t=ro+500-Ke(),10<t)){if(vl(e,0)!==0)break;if(s=e.suspendedLanes,(s&n)!==n){Nt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=ds(Ra.bind(null,e,Pt,Tr),t);break}Ra(e,Pt,Tr);break;case 4:if(Jr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,s=-1;0<n;){var h=31-Ge(n);u=1<<h,h=t[h],h>s&&(s=h),n&=~u}if(n=s,n=Ke()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Sh(n/1960))-n,10<n){e.timeoutHandle=ds(Ra.bind(null,e,Pt,Tr),n);break}Ra(e,Pt,Tr);break;case 5:Ra(e,Pt,Tr);break;default:throw Error(o(329))}}}return It(e,Ke()),e.callbackNode===r?sd.bind(null,e):null}function lo(e,t){var r=$n;return e.current.memoizedState.isDehydrated&&(va(e,t).flags|=256),e=fi(e,t),e!==2&&(t=Pt,Pt=r,t!==null&&io(t)),e}function io(e){Pt===null?Pt=e:Pt.push.apply(Pt,e)}function Lh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var s=r[n],u=s.getSnapshot;s=s.value;try{if(!qt(u(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jr(e,t){for(t&=~to,t&=~si,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ge(t),n=1<<r;e[r]=-1,t&=~n}}function od(e){if((ke&6)!==0)throw Error(o(327));en();var t=vl(e,0);if((t&1)===0)return It(e,Ke()),null;var r=fi(e,t);if(e.tag!==0&&r===2){var n=Di(e);n!==0&&(t=n,r=lo(e,n))}if(r===1)throw r=zn,va(e,0),Jr(e,t),It(e,Ke()),r;if(r===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ra(e,Pt,Tr),It(e,Ke()),null}function so(e,t){var r=ke;ke|=1;try{return e(t)}finally{ke=r,ke===0&&(Xa=Ke()+500,Gl&&Yr())}}function Na(e){Wr!==null&&Wr.tag===0&&(ke&6)===0&&en();var t=ke;ke|=1;var r=Yt.transition,n=De;try{if(Yt.transition=null,De=1,e)return e()}finally{De=n,Yt.transition=r,ke=t,(ke&6)===0&&Yr()}}function oo(){bt=Za.current,Fe(Za)}function va(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,ih(r)),tt!==null)for(r=tt.return;r!==null;){var n=r;switch(gs(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Dl();break;case 3:qa(),Fe(Mt),Fe(mt),Ls();break;case 5:ws(n);break;case 4:qa();break;case 13:Fe(qe);break;case 19:Fe(qe);break;case 10:Ms(n.type._context);break;case 22:case 23:oo()}r=r.return}if(ot=e,tt=e=Qr(e.current,null),dt=bt=t,lt=0,zn=null,to=si=ya=0,Pt=$n=null,Aa!==null){for(t=0;t<Aa.length;t++)if(r=Aa[t],n=r.interleaved,n!==null){r.interleaved=null;var s=n.next,u=r.pending;if(u!==null){var h=u.next;u.next=s,n.next=h}r.pending=n}Aa=null}return e}function ud(e,t){do{var r=tt;try{if(Rs(),Jl.current=ei,Ql){for(var n=Je.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Ql=!1}if(xa=0,st=nt=Je=null,Gn=!1,Vn=0,eo.current=null,r===null||r.return===null){lt=1,zn=t,tt=null;break}e:{var u=e,h=r.return,x=r,R=t;if(t=dt,x.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var j=R,Y=x,F=Y.tag;if((Y.mode&1)===0&&(F===0||F===11||F===15)){var V=Y.alternate;V?(Y.updateQueue=V.updateQueue,Y.memoizedState=V.memoizedState,Y.lanes=V.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var q=bc(h);if(q!==null){q.flags&=-257,Cc(q,h,x,u,t),q.mode&1&&jc(u,j,t),t=q,R=j;var ee=t.updateQueue;if(ee===null){var re=new Set;re.add(R),t.updateQueue=re}else ee.add(R);break e}else{if((t&1)===0){jc(u,j,t),uo();break e}R=Error(o(426))}}else if(We&&x.mode&1){var Xe=bc(h);if(Xe!==null){(Xe.flags&65536)===0&&(Xe.flags|=256),Cc(Xe,h,x,u,t),Ns(Ja(R,x));break e}}u=R=Ja(R,x),lt!==4&&(lt=2),$n===null?$n=[u]:$n.push(u),u=h;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var w=kc(u,R,t);nc(u,w);break e;case 1:x=R;var T=u.type,L=u.stateNode;if((u.flags&128)===0&&(typeof T.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&($r===null||!$r.has(L)))){u.flags|=65536,t&=-t,u.lanes|=t;var z=Uc(u,x,t);nc(u,z);break e}}u=u.return}while(u!==null)}md(r)}catch(le){t=le,tt===r&&r!==null&&(tt=r=r.return);continue}break}while(!0)}function cd(){var e=ii.current;return ii.current=ei,e===null?ei:e}function uo(){(lt===0||lt===3||lt===2)&&(lt=4),ot===null||(ya&268435455)===0&&(si&268435455)===0||Jr(ot,dt)}function fi(e,t){var r=ke;ke|=2;var n=cd();(ot!==e||dt!==t)&&(Tr=null,va(e,t));do try{kh();break}catch(s){ud(e,s)}while(!0);if(Rs(),ke=r,ii.current=n,tt!==null)throw Error(o(261));return ot=null,dt=0,lt}function kh(){for(;tt!==null;)dd(tt)}function Uh(){for(;tt!==null&&!Ce();)dd(tt)}function dd(e){var t=pd(e.alternate,e,bt);e.memoizedProps=e.pendingProps,t===null?md(e):tt=t,eo.current=null}function md(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Th(r,t,bt),r!==null){tt=r;return}}else{if(r=Eh(r,t),r!==null){r.flags&=32767,tt=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{lt=6,tt=null;return}}if(t=t.sibling,t!==null){tt=t;return}tt=t=e}while(t!==null);lt===0&&(lt=5)}function Ra(e,t,r){var n=De,s=Yt.transition;try{Yt.transition=null,De=1,jh(e,t,r,n)}finally{Yt.transition=s,De=n}return null}function jh(e,t,r,n){do en();while(Wr!==null);if((ke&6)!==0)throw Error(o(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var u=r.lanes|r.childLanes;if(ff(e,u),e===ot&&(tt=ot=null,dt=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||ui||(ui=!0,Ad(Ur,function(){return en(),null})),u=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||u){u=Yt.transition,Yt.transition=null;var h=De;De=1;var x=ke;ke|=4,eo.current=null,Ih(e,r),rd(r,e),Xf(us),Tl=!!os,us=os=null,e.current=r,wh(r),Rt(),ke=x,De=h,Yt.transition=u}else e.current=r;if(ui&&(ui=!1,Wr=e,ci=s),u=e.pendingLanes,u===0&&($r=null),Se(r.stateNode),It(e,Ke()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],n(s.value,{componentStack:s.stack,digest:s.digest});if(oi)throw oi=!1,e=ao,ao=null,e;return(ci&1)!==0&&e.tag!==0&&en(),u=e.pendingLanes,(u&1)!==0?e===no?Wn++:(Wn=0,no=e):Wn=0,Yr(),null}function en(){if(Wr!==null){var e=eu(ci),t=Yt.transition,r=De;try{if(Yt.transition=null,De=16>e?16:e,Wr===null)var n=!1;else{if(e=Wr,Wr=null,ci=0,(ke&6)!==0)throw Error(o(331));var s=ke;for(ke|=4,Q=e.current;Q!==null;){var u=Q,h=u.child;if((Q.flags&16)!==0){var x=u.deletions;if(x!==null){for(var R=0;R<x.length;R++){var j=x[R];for(Q=j;Q!==null;){var Y=Q;switch(Y.tag){case 0:case 11:case 15:Fn(8,Y,u)}var F=Y.child;if(F!==null)F.return=Y,Q=F;else for(;Q!==null;){Y=Q;var V=Y.sibling,q=Y.return;if(Qc(Y),Y===j){Q=null;break}if(V!==null){V.return=q,Q=V;break}Q=q}}}var ee=u.alternate;if(ee!==null){var re=ee.child;if(re!==null){ee.child=null;do{var Xe=re.sibling;re.sibling=null,re=Xe}while(re!==null)}}Q=u}}if((u.subtreeFlags&2064)!==0&&h!==null)h.return=u,Q=h;else e:for(;Q!==null;){if(u=Q,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:Fn(9,u,u.return)}var w=u.sibling;if(w!==null){w.return=u.return,Q=w;break e}Q=u.return}}var T=e.current;for(Q=T;Q!==null;){h=Q;var L=h.child;if((h.subtreeFlags&2064)!==0&&L!==null)L.return=h,Q=L;else e:for(h=T;Q!==null;){if(x=Q,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:li(9,x)}}catch(le){Qe(x,x.return,le)}if(x===h){Q=null;break e}var z=x.sibling;if(z!==null){z.return=x.return,Q=z;break e}Q=x.return}}if(ke=s,Yr(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(hr,e)}catch{}n=!0}return n}finally{De=r,Yt.transition=t}}return!1}function fd(e,t,r){t=Ja(r,t),t=kc(e,t,1),e=Fr(e,t,1),t=Nt(),e!==null&&(xn(e,1,t),It(e,t))}function Qe(e,t,r){if(e.tag===3)fd(e,e,r);else for(;t!==null;){if(t.tag===3){fd(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&($r===null||!$r.has(n))){e=Ja(r,e),e=Uc(t,e,1),t=Fr(t,e,1),e=Nt(),t!==null&&(xn(t,1,e),It(t,e));break}}t=t.return}}function bh(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Nt(),e.pingedLanes|=e.suspendedLanes&r,ot===e&&(dt&r)===r&&(lt===4||lt===3&&(dt&130023424)===dt&&500>Ke()-ro?va(e,0):to|=r),It(e,t)}function hd(e,t){t===0&&((e.mode&1)===0?t=1:(t=ca,ca<<=1,(ca&130023424)===0&&(ca=4194304)));var r=Nt();e=vr(e,t),e!==null&&(xn(e,t,r),It(e,r))}function Ch(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),hd(e,r)}function Oh(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(o(314))}n!==null&&n.delete(t),hd(e,r)}var pd;pd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Mt.current)Et=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Et=!1,Mh(e,t,r);Et=(e.flags&131072)!==0}else Et=!1,We&&(t.flags&1048576)!==0&&Wu(t,_l,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ai(e,t),e=t.pendingProps;var s=_a(t,mt.current);Wa(t,r),s=js(null,t,n,e,s,r);var u=bs();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Tt(n)?(u=!0,Hl(t)):u=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ps(t),s.updater=ti,t.stateNode=s,s._reactInternals=t,Gs(t,n,e,r),t=Bs(null,t,n,!0,u,r)):(t.tag=0,We&&u&&As(t),yt(null,t,s,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ai(e,t),e=t.pendingProps,s=n._init,n=s(n._payload),t.type=n,s=t.tag=Dh(n),e=Qt(n,e),s){case 0:t=Ys(null,t,n,e,r);break e;case 1:t=Vc(null,t,n,e,r);break e;case 11:t=Oc(null,t,n,e,r);break e;case 14:t=Kc(null,t,n,Qt(n.type,e),r);break e}throw Error(o(306,n,""))}return t;case 0:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Qt(n,s),Ys(e,t,n,s,r);case 1:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Qt(n,s),Vc(e,t,n,s,r);case 3:e:{if(_c(t),e===null)throw Error(o(387));n=t.pendingProps,u=t.memoizedState,s=u.element,ac(e,t),Wl(t,n,null,r);var h=t.memoizedState;if(n=h.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){s=Ja(Error(o(423)),t),t=Yc(e,t,n,r,s);break e}else if(n!==s){s=Ja(Error(o(424)),t),t=Yc(e,t,n,r,s);break e}else for(jt=Gr(t.stateNode.containerInfo.firstChild),Ut=t,We=!0,Jt=null,r=tc(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Fa(),n===s){t=Mr(e,t,r);break e}yt(e,t,n,r)}t=t.child}return t;case 5:return ic(t),e===null&&ys(t),n=t.type,s=t.pendingProps,u=e!==null?e.memoizedProps:null,h=s.children,cs(n,s)?h=null:u!==null&&cs(n,u)&&(t.flags|=32),Gc(e,t),yt(e,t,h,r),t.child;case 6:return e===null&&ys(t),null;case 13:return Bc(e,t,r);case 4:return Is(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=za(t,null,n,r):yt(e,t,n,r),t.child;case 11:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Qt(n,s),Oc(e,t,n,s,r);case 7:return yt(e,t,t.pendingProps,r),t.child;case 8:return yt(e,t,t.pendingProps.children,r),t.child;case 12:return yt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,s=t.pendingProps,u=t.memoizedProps,h=s.value,_e(Fl,n._currentValue),n._currentValue=h,u!==null)if(qt(u.value,h)){if(u.children===s.children&&!Mt.current){t=Mr(e,t,r);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var x=u.dependencies;if(x!==null){h=u.child;for(var R=x.firstContext;R!==null;){if(R.context===n){if(u.tag===1){R=Rr(-1,r&-r),R.tag=2;var j=u.updateQueue;if(j!==null){j=j.shared;var Y=j.pending;Y===null?R.next=R:(R.next=Y.next,Y.next=R),j.pending=R}}u.lanes|=r,R=u.alternate,R!==null&&(R.lanes|=r),Ts(u.return,r,t),x.lanes|=r;break}R=R.next}}else if(u.tag===10)h=u.type===t.type?null:u.child;else if(u.tag===18){if(h=u.return,h===null)throw Error(o(341));h.lanes|=r,x=h.alternate,x!==null&&(x.lanes|=r),Ts(h,r,t),h=u.sibling}else h=u.child;if(h!==null)h.return=u;else for(h=u;h!==null;){if(h===t){h=null;break}if(u=h.sibling,u!==null){u.return=h.return,h=u;break}h=h.return}u=h}yt(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,n=t.pendingProps.children,Wa(t,r),s=Vt(s),n=n(s),t.flags|=1,yt(e,t,n,r),t.child;case 14:return n=t.type,s=Qt(n,t.pendingProps),s=Qt(n.type,s),Kc(e,t,n,s,r);case 15:return Dc(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Qt(n,s),ai(e,t),t.tag=1,Tt(n)?(e=!0,Hl(t)):e=!1,Wa(t,r),Sc(t,n,s),Gs(t,n,s,r),Bs(null,t,n,!0,e,r);case 19:return zc(e,t,r);case 22:return Hc(e,t,r)}throw Error(o(156,t.tag))};function Ad(e,t){return Ze(e,t)}function Kh(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(e,t,r,n){return new Kh(e,t,r,n)}function co(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dh(e){if(typeof e=="function")return co(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Oe)return 11;if(e===ze)return 14}return 2}function Qr(e,t){var r=e.alternate;return r===null?(r=Bt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function hi(e,t,r,n,s,u){var h=2;if(n=e,typeof e=="function")co(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case U:return Ma(r.children,s,u,t);case ie:h=8,s|=8;break;case pe:return e=Bt(12,r,t,s|2),e.elementType=pe,e.lanes=u,e;case Ye:return e=Bt(13,r,t,s),e.elementType=Ye,e.lanes=u,e;case je:return e=Bt(19,r,t,s),e.elementType=je,e.lanes=u,e;case Ne:return pi(r,s,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Te:h=10;break e;case Le:h=9;break e;case Oe:h=11;break e;case ze:h=14;break e;case Me:h=16,n=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Bt(h,r,t,s),t.elementType=e,t.type=n,t.lanes=u,t}function Ma(e,t,r,n){return e=Bt(7,e,n,t),e.lanes=r,e}function pi(e,t,r,n){return e=Bt(22,e,n,t),e.elementType=Ne,e.lanes=r,e.stateNode={isHidden:!1},e}function mo(e,t,r){return e=Bt(6,e,null,t),e.lanes=r,e}function fo(e,t,r){return t=Bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hh(e,t,r,n,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hi(0),this.expirationTimes=Hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hi(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ho(e,t,r,n,s,u,h,x,R){return e=new Hh(e,t,r,x,R),t===1?(t=1,u===!0&&(t|=8)):t=0,u=Bt(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ps(u),e}function Gh(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ye,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function gd(e){if(!e)return _r;e=e._reactInternals;e:{if(te(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var r=e.type;if(Tt(r))return Fu(e,r,t)}return t}function xd(e,t,r,n,s,u,h,x,R){return e=ho(r,n,!0,e,s,u,h,x,R),e.context=gd(null),r=e.current,n=Nt(),s=qr(r),u=Rr(n,s),u.callback=t??null,Fr(r,u,s),e.current.lanes=s,xn(e,s,n),It(e,n),e}function Ai(e,t,r,n){var s=t.current,u=Nt(),h=qr(s);return r=gd(r),t.context===null?t.context=r:t.pendingContext=r,t=Rr(u,h),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Fr(s,t,h),e!==null&&(er(e,s,h,u),$l(e,s,h)),h}function gi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function po(e,t){yd(e,t),(e=e.alternate)&&yd(e,t)}function Vh(){return null}var Nd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ao(e){this._internalRoot=e}xi.prototype.render=Ao.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Ai(e,t,null,null)},xi.prototype.unmount=Ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Na(function(){Ai(null,e,null,null)}),t[gr]=null}};function xi(e){this._internalRoot=e}xi.prototype.unstable_scheduleHydration=function(e){if(e){var t=au();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Kr.length&&t!==0&&t<Kr[r].priority;r++);Kr.splice(r,0,e),r===0&&iu(e)}};function go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vd(){}function _h(e,t,r,n,s){if(s){if(typeof n=="function"){var u=n;n=function(){var j=gi(h);u.call(j)}}var h=xd(t,n,e,0,null,!1,!1,"",vd);return e._reactRootContainer=h,e[gr]=h.current,Un(e.nodeType===8?e.parentNode:e),Na(),h}for(;s=e.lastChild;)e.removeChild(s);if(typeof n=="function"){var x=n;n=function(){var j=gi(R);x.call(j)}}var R=ho(e,0,!1,null,null,!1,!1,"",vd);return e._reactRootContainer=R,e[gr]=R.current,Un(e.nodeType===8?e.parentNode:e),Na(function(){Ai(t,R,r,n)}),R}function Ni(e,t,r,n,s){var u=r._reactRootContainer;if(u){var h=u;if(typeof s=="function"){var x=s;s=function(){var R=gi(h);x.call(R)}}Ai(t,h,e,s)}else h=_h(r,t,e,s,n);return gi(h)}tu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=da(t.pendingLanes);r!==0&&(Gi(t,r|1),It(t,Ke()),(ke&6)===0&&(Xa=Ke()+500,Yr()))}break;case 13:Na(function(){var n=vr(e,1);if(n!==null){var s=Nt();er(n,e,1,s)}}),po(e,1)}},Vi=function(e){if(e.tag===13){var t=vr(e,134217728);if(t!==null){var r=Nt();er(t,e,134217728,r)}po(e,134217728)}},ru=function(e){if(e.tag===13){var t=qr(e),r=vr(e,t);if(r!==null){var n=Nt();er(r,e,t,n)}po(e,t)}},au=function(){return De},nu=function(e,t){var r=De;try{return De=e,t()}finally{De=r}},Lr=function(e,t,r){switch(t){case"input":if(un(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var s=Kl(n);if(!s)throw Error(o(90));at(n),un(n,s)}}}break;case"textarea":rr(e,r);break;case"select":t=r.value,t!=null&&Ir(e,!!r.multiple,t,!1)}},pn=so,ia=Na;var Yh={usingClientEntryPoint:!1,Events:[Cn,Ga,Kl,hn,Nl,so]},qn={findFiberByHostInstance:ma,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bh={bundleType:qn.bundleType,version:qn.version,rendererPackageName:qn.rendererPackageName,rendererConfig:qn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=we(e),e===null?null:e.stateNode},findFiberByHostInstance:qn.findFiberByHostInstance||Vh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vi.isDisabled&&vi.supportsFiber)try{hr=vi.inject(Bh),xt=vi}catch{}}return wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yh,wt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!go(t))throw Error(o(200));return Gh(e,t,null,r)},wt.createRoot=function(e,t){if(!go(e))throw Error(o(299));var r=!1,n="",s=Nd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ho(e,1,!1,null,null,r,!1,n,s),e[gr]=t.current,Un(e.nodeType===8?e.parentNode:e),new Ao(t)},wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=we(t),e=e===null?null:e.stateNode,e},wt.flushSync=function(e){return Na(e)},wt.hydrate=function(e,t,r){if(!yi(t))throw Error(o(200));return Ni(null,e,t,!0,r)},wt.hydrateRoot=function(e,t,r){if(!go(e))throw Error(o(405));var n=r!=null&&r.hydratedSources||null,s=!1,u="",h=Nd;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),t=xd(t,null,e,1,r??null,s,!1,u,h),e[gr]=t.current,Un(e),n)for(e=0;e<n.length;e++)r=n[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new xi(t)},wt.render=function(e,t,r){if(!yi(t))throw Error(o(200));return Ni(null,e,t,!1,r)},wt.unmountComponentAtNode=function(e){if(!yi(e))throw Error(o(40));return e._reactRootContainer?(Na(function(){Ni(null,null,e,!1,function(){e._reactRootContainer=null,e[gr]=null})}),!0):!1},wt.unstable_batchedUpdates=so,wt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!yi(r))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Ni(e,t,r,!1,n)},wt.version="18.3.1-next-f1338f8080-20240426",wt}var Sd;function ep(){if(Sd)return No.exports;Sd=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),No.exports=Xh(),No.exports}var Ld;function tp(){if(Ld)return Ri;Ld=1;var a=ep();return Ri.createRoot=a.createRoot,Ri.hydrateRoot=a.hydrateRoot,Ri}var rp=tp(),M=Do();const ap=$h(M),np=zh({__proto__:null,default:ap},[M]);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var xm=a=>{throw TypeError(a)},lp=(a,i,o)=>i.has(a)||xm("Cannot "+o),Mo=(a,i,o)=>(lp(a,i,"read from private field"),o?o.call(a):i.get(a)),ip=(a,i,o)=>i.has(a)?xm("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(a):i.set(a,o),kd="popstate";function sp(a={}){function i(c,d){let{pathname:m,search:f,hash:A}=c.location;return nl("",{pathname:m,search:f,hash:A},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(c,d){return typeof d=="string"?d:dr(d)}return up(i,o,null,a)}function Pe(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function rt(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function op(){return Math.random().toString(36).substring(2,10)}function Ud(a,i){return{usr:a.state,key:a.key,idx:i}}function nl(a,i,o=null,c){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?ra(i):i,state:o,key:i&&i.key||c||op()}}function dr({pathname:a="/",search:i="",hash:o=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(a+=o.charAt(0)==="#"?o:"#"+o),a}function ra(a){let i={};if(a){let o=a.indexOf("#");o>=0&&(i.hash=a.substring(o),a=a.substring(0,o));let c=a.indexOf("?");c>=0&&(i.search=a.substring(c),a=a.substring(0,c)),a&&(i.pathname=a)}return i}function up(a,i,o,c={}){let{window:d=document.defaultView,v5Compat:m=!1}=c,f=d.history,A="POP",p=null,g=v();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function v(){return(f.state||{idx:null}).idx}function y(){A="POP";let D=v(),b=D==null?null:D-g;g=D,p&&p({action:A,location:O.location,delta:b})}function I(D,b){A="PUSH";let K=nl(O.location,D,b);g=v()+1;let G=Ud(K,g),ae=O.createHref(K);try{f.pushState(G,"",ae)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;d.location.assign(ae)}m&&p&&p({action:A,location:O.location,delta:1})}function S(D,b){A="REPLACE";let K=nl(O.location,D,b);g=v();let G=Ud(K,g),ae=O.createHref(K);f.replaceState(G,"",ae),m&&p&&p({action:A,location:O.location,delta:0})}function H(D){return ym(D)}let O={get action(){return A},get location(){return a(d,f)},listen(D){if(p)throw new Error("A history only accepts one active listener");return d.addEventListener(kd,y),p=D,()=>{d.removeEventListener(kd,y),p=null}},createHref(D){return i(d,D)},createURL:H,encodeLocation(D){let b=H(D);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:I,replace:S,go(D){return f.go(D)}};return O}function ym(a,i=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Pe(o,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:dr(a);return c=c.replace(/ $/,"%20"),!i&&c.startsWith("//")&&(c=o+c),new URL(c,o)}var tl,jd=class{constructor(a){if(ip(this,tl,new Map),a)for(let[i,o]of a)this.set(i,o)}get(a){if(Mo(this,tl).has(a))return Mo(this,tl).get(a);if(a.defaultValue!==void 0)return a.defaultValue;throw new Error("No value found for context")}set(a,i){Mo(this,tl).set(a,i)}};tl=new WeakMap;var cp=new Set(["lazy","caseSensitive","path","id","index","children"]);function dp(a){return cp.has(a)}var mp=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function fp(a){return mp.has(a)}function hp(a){return a.index===!0}function ll(a,i,o=[],c={},d=!1){return a.map((m,f)=>{let A=[...o,String(f)],p=typeof m.id=="string"?m.id:A.join("-");if(Pe(m.index!==!0||!m.children,"Cannot specify children on an index route"),Pe(d||!c[p],`Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`),hp(m)){let g={...m,id:p};return c[p]=bd(g,i(g)),g}else{let g={...m,id:p,children:void 0};return c[p]=bd(g,i(g)),m.children&&(g.children=ll(m.children,i,A,c,d)),g}})}function bd(a,i){return Object.assign(a,{...i,...typeof i.lazy=="object"&&i.lazy!=null?{lazy:{...a.lazy,...i.lazy}}:{}})}function Xr(a,i,o="/"){return rl(a,i,o,!1)}function rl(a,i,o,c){let d=typeof i=="string"?ra(i):i,m=zt(d.pathname||"/",o);if(m==null)return null;let f=Nm(a);Ap(f);let A=null;for(let p=0;A==null&&p<f.length;++p){let g=Ip(m);A=Ep(f[p],g,c)}return A}function pp(a,i){let{route:o,pathname:c,params:d}=a;return{id:o.id,pathname:c,params:d,data:i[o.id],loaderData:i[o.id],handle:o.handle}}function Nm(a,i=[],o=[],c="",d=!1){let m=(f,A,p=d,g)=>{let v={relativePath:g===void 0?f.path||"":g,caseSensitive:f.caseSensitive===!0,childrenIndex:A,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(c)&&p)return;Pe(v.relativePath.startsWith(c),`Absolute route path "${v.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(c.length)}let y=cr([c,v.relativePath]),I=o.concat(v);f.children&&f.children.length>0&&(Pe(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Nm(f.children,i,I,y,p)),!(f.path==null&&!f.index)&&i.push({path:y,score:Mp(y,f.index),routesMeta:I})};return a.forEach((f,A)=>{var p;if(f.path===""||!((p=f.path)!=null&&p.includes("?")))m(f,A);else for(let g of vm(f.path))m(f,A,!0,g)}),i}function vm(a){let i=a.split("/");if(i.length===0)return[];let[o,...c]=i,d=o.endsWith("?"),m=o.replace(/\?$/,"");if(c.length===0)return d?[m,""]:[m];let f=vm(c.join("/")),A=[];return A.push(...f.map(p=>p===""?m:[m,p].join("/"))),d&&A.push(...f),A.map(p=>a.startsWith("/")&&p===""?"/":p)}function Ap(a){a.sort((i,o)=>i.score!==o.score?o.score-i.score:Tp(i.routesMeta.map(c=>c.childrenIndex),o.routesMeta.map(c=>c.childrenIndex)))}var gp=/^:[\w-]+$/,xp=3,yp=2,Np=1,vp=10,Rp=-2,Cd=a=>a==="*";function Mp(a,i){let o=a.split("/"),c=o.length;return o.some(Cd)&&(c+=Rp),i&&(c+=yp),o.filter(d=>!Cd(d)).reduce((d,m)=>d+(gp.test(m)?xp:m===""?Np:vp),c)}function Tp(a,i){return a.length===i.length&&a.slice(0,-1).every((c,d)=>c===i[d])?a[a.length-1]-i[i.length-1]:0}function Ep(a,i,o=!1){let{routesMeta:c}=a,d={},m="/",f=[];for(let A=0;A<c.length;++A){let p=c[A],g=A===c.length-1,v=m==="/"?i:i.slice(m.length)||"/",y=ki({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),I=p.route;if(!y&&g&&o&&!c[c.length-1].route.index&&(y=ki({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!y)return null;Object.assign(d,y.params),f.push({params:d,pathname:cr([m,y.pathname]),pathnameBase:Lp(cr([m,y.pathnameBase])),route:I}),y.pathnameBase!=="/"&&(m=cr([m,y.pathnameBase]))}return f}function ki(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[o,c]=Pp(a.path,a.caseSensitive,a.end),d=i.match(o);if(!d)return null;let m=d[0],f=m.replace(/(.)\/+$/,"$1"),A=d.slice(1);return{params:c.reduce((g,{paramName:v,isOptional:y},I)=>{if(v==="*"){let H=A[I]||"";f=m.slice(0,m.length-H.length).replace(/(.)\/+$/,"$1")}const S=A[I];return y&&!S?g[v]=void 0:g[v]=(S||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:f,pattern:a}}function Pp(a,i=!1,o=!0){rt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let c=[],d="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,A,p)=>(c.push({paramName:A,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(c.push({paramName:"*"}),d+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?d+="\\/*$":a!==""&&a!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,i?void 0:"i"),c]}function Ip(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return rt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function zt(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,c=a.charAt(o);return c&&c!=="/"?null:a.slice(o)||"/"}function wp({basename:a,pathname:i}){return i==="/"?a:cr([a,i])}var Rm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ho=a=>Rm.test(a);function Sp(a,i="/"){let{pathname:o,search:c="",hash:d=""}=typeof a=="string"?ra(a):a,m;return o?(o=o.replace(/\/\/+/g,"/"),o.startsWith("/")?m=Od(o.substring(1),"/"):m=Od(o,i)):m=i,{pathname:m,search:kp(c),hash:Up(d)}}function Od(a,i){let o=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(d=>{d===".."?o.length>1&&o.pop():d!=="."&&o.push(d)}),o.length>1?o.join("/"):"/"}function To(a,i,o,c){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Mm(a){return a.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function Go(a){let i=Mm(a);return i.map((o,c)=>c===i.length-1?o.pathname:o.pathnameBase)}function Vo(a,i,o,c=!1){let d;typeof a=="string"?d=ra(a):(d={...a},Pe(!d.pathname||!d.pathname.includes("?"),To("?","pathname","search",d)),Pe(!d.pathname||!d.pathname.includes("#"),To("#","pathname","hash",d)),Pe(!d.search||!d.search.includes("#"),To("#","search","hash",d)));let m=a===""||d.pathname==="",f=m?"/":d.pathname,A;if(f==null)A=o;else{let y=i.length-1;if(!c&&f.startsWith("..")){let I=f.split("/");for(;I[0]==="..";)I.shift(),y-=1;d.pathname=I.join("/")}A=y>=0?i[y]:"/"}let p=Sp(d,A),g=f&&f!=="/"&&f.endsWith("/"),v=(m||f===".")&&o.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}var cr=a=>a.join("/").replace(/\/\/+/g,"/"),Lp=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),kp=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Up=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,ol=class{constructor(a,i,o,c=!1){this.status=a,this.statusText=i||"",this.internal=c,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function il(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function ul(a){return a.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Tm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Em(a,i){let o=a;if(typeof o!="string"||!Rm.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let c=o,d=!1;if(Tm)try{let m=new URL(window.location.href),f=o.startsWith("//")?new URL(m.protocol+o):new URL(o),A=zt(f.pathname,i);f.origin===m.origin&&A!=null?o=A+f.search+f.hash:d=!0}catch{rt(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:d,to:o}}var ta=Symbol("Uninstrumented");function jp(a,i){let o={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};a.forEach(d=>d({id:i.id,index:i.index,path:i.path,instrument(m){let f=Object.keys(o);for(let A of f)m[A]&&o[A].push(m[A])}}));let c={};if(typeof i.lazy=="function"&&o.lazy.length>0){let d=ln(o.lazy,i.lazy,()=>{});d&&(c.lazy=d)}if(typeof i.lazy=="object"){let d=i.lazy;["middleware","loader","action"].forEach(m=>{let f=d[m],A=o[`lazy.${m}`];if(typeof f=="function"&&A.length>0){let p=ln(A,f,()=>{});p&&(c.lazy=Object.assign(c.lazy||{},{[m]:p}))}})}return["loader","action"].forEach(d=>{let m=i[d];if(typeof m=="function"&&o[d].length>0){let f=m[ta]??m,A=ln(o[d],f,(...p)=>Kd(p[0]));A&&(d==="loader"&&f.hydrate===!0&&(A.hydrate=!0),A[ta]=f,c[d]=A)}}),i.middleware&&i.middleware.length>0&&o.middleware.length>0&&(c.middleware=i.middleware.map(d=>{let m=d[ta]??d,f=ln(o.middleware,m,(...A)=>Kd(A[0]));return f?(f[ta]=m,f):d})),c}function bp(a,i){let o={navigate:[],fetch:[]};if(i.forEach(c=>c({instrument(d){let m=Object.keys(d);for(let f of m)d[f]&&o[f].push(d[f])}})),o.navigate.length>0){let c=a.navigate[ta]??a.navigate,d=ln(o.navigate,c,(...m)=>{let[f,A]=m;return{to:typeof f=="number"||typeof f=="string"?f:f?dr(f):".",...Dd(a,A??{})}});d&&(d[ta]=c,a.navigate=d)}if(o.fetch.length>0){let c=a.fetch[ta]??a.fetch,d=ln(o.fetch,c,(...m)=>{let[f,,A,p]=m;return{href:A??".",fetcherKey:f,...Dd(a,p??{})}});d&&(d[ta]=c,a.fetch=d)}return a}function ln(a,i,o){return a.length===0?null:async(...c)=>{let d=await Pm(a,o(...c),()=>i(...c),a.length-1);if(d.type==="error")throw d.value;return d.value}}async function Pm(a,i,o,c){let d=a[c],m;if(d){let f,A=async()=>(f?console.error("You cannot call instrumented handlers more than once"):f=Pm(a,i,o,c-1),m=await f,Pe(m,"Expected a result"),m.type==="error"&&m.value instanceof Error?{status:"error",error:m.value}:{status:"success",error:void 0});try{await d(A,i)}catch(p){console.error("An instrumentation function threw an error:",p)}f||await A(),await f}else try{m={type:"success",value:await o()}}catch(f){m={type:"error",value:f}}return m||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function Kd(a){let{request:i,context:o,params:c,unstable_pattern:d}=a;return{request:Cp(i),params:{...c},unstable_pattern:d,context:Op(o)}}function Dd(a,i){return{currentUrl:dr(a.state.location),..."formMethod"in i?{formMethod:i.formMethod}:{},..."formEncType"in i?{formEncType:i.formEncType}:{},..."formData"in i?{formData:i.formData}:{},..."body"in i?{body:i.body}:{}}}function Cp(a){return{method:a.method,url:a.url,headers:{get:(...i)=>a.headers.get(...i)}}}function Op(a){if(Dp(a)){let i={...a};return Object.freeze(i),i}else return{get:i=>a.get(i)}}var Kp=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Dp(a){if(a===null||typeof a!="object")return!1;const i=Object.getPrototypeOf(a);return i===Object.prototype||i===null||Object.getOwnPropertyNames(i).sort().join("\0")===Kp}var Im=["POST","PUT","PATCH","DELETE"],Hp=new Set(Im),Gp=["GET",...Im],Vp=new Set(Gp),wm=new Set([301,302,303,307,308]),_p=new Set([307,308]),Eo={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Yp={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Qn={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Bp=a=>({hasErrorBoundary:!!a.hasErrorBoundary}),Sm="remix-router-transitions",Lm=Symbol("ResetLoaderData");function Fp(a){const i=a.window?a.window:typeof window<"u"?window:void 0,o=typeof i<"u"&&typeof i.document<"u"&&typeof i.document.createElement<"u";Pe(a.routes.length>0,"You must provide a non-empty routes array to createRouter");let c=a.hydrationRouteProperties||[],d=a.mapRouteProperties||Bp,m=d;if(a.unstable_instrumentations){let N=a.unstable_instrumentations;m=P=>({...d(P),...jp(N.map(k=>k.route).filter(Boolean),P)})}let f={},A=ll(a.routes,m,void 0,f),p,g=a.basename||"/";g.startsWith("/")||(g=`/${g}`);let v=a.dataStrategy||Jp,y={...a.future},I=null,S=new Set,H=null,O=null,D=null,b=a.hydrationData!=null,K=Xr(A,a.history.location,g),G=!1,ae=null,oe;if(K==null&&!a.patchRoutesOnNavigation){let N=Ft(404,{pathname:a.history.location.pathname}),{matches:P,route:k}=Mi(A);oe=!0,K=P,ae={[k.id]:N}}else if(K&&!a.hydrationData&&ia(K,A,a.history.location.pathname).active&&(K=null),K)if(K.some(N=>N.route.lazy))oe=!1;else if(!K.some(N=>_o(N.route)))oe=!0;else{let N=a.hydrationData?a.hydrationData.loaderData:null,P=a.hydrationData?a.hydrationData.errors:null;if(P){let k=K.findIndex(_=>P[_.route.id]!==void 0);oe=K.slice(0,k+1).every(_=>!ko(_.route,N,P))}else oe=K.every(k=>!ko(k.route,N,P))}else{oe=!1,K=[];let N=ia(null,A,a.history.location.pathname);N.active&&N.matches&&(G=!0,K=N.matches)}let ye,U={historyAction:a.history.action,location:a.history.location,matches:K,initialized:oe,navigation:Eo,restoreScrollPosition:a.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:a.hydrationData&&a.hydrationData.loaderData||{},actionData:a.hydrationData&&a.hydrationData.actionData||null,errors:a.hydrationData&&a.hydrationData.errors||ae,fetchers:new Map,blockers:new Map},ie="POP",pe=null,Te=!1,Le,Oe=!1,Ye=new Map,je=null,ze=!1,Me=!1,Ne=new Set,B=new Map,Z=0,W=-1,E=new Map,C=new Set,me=new Map,he=new Map,fe=new Set,ve=new Map,be,Ie=null;function Ve(){if(I=a.history.listen(({action:N,location:P,delta:k})=>{if(be){be(),be=void 0;return}rt(ve.size===0||k!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let _=fr({currentLocation:U.location,nextLocation:P,historyAction:N});if(_&&k!=null){let $=new Promise(ne=>{be=ne});a.history.go(k*-1),Lr(_,{state:"blocked",location:P,proceed(){Lr(_,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),$.then(()=>a.history.go(k))},reset(){let ne=new Map(U.blockers);ne.set(_,Qn),at({blockers:ne})}}),pe==null||pe.resolve(),pe=null;return}return tr(N,P)}),o){hA(i,Ye);let N=()=>pA(i,Ye);i.addEventListener("pagehide",N),je=()=>i.removeEventListener("pagehide",N)}return U.initialized||tr("POP",U.location,{initialHydration:!0}),ye}function gt(){I&&I(),je&&je(),S.clear(),Le&&Le.abort(),U.fetchers.forEach((N,P)=>mn(P)),U.blockers.forEach((N,P)=>Ua(P))}function Ia(N){return S.add(N),()=>S.delete(N)}function at(N,P={}){N.matches&&(N.matches=N.matches.map($=>{let ne=f[$.route.id],ue=$.route;return ue.element!==ne.element||ue.errorElement!==ne.errorElement||ue.hydrateFallbackElement!==ne.hydrateFallbackElement?{...$,route:ne}:$})),U={...U,...N};let k=[],_=[];U.fetchers.forEach(($,ne)=>{$.state==="idle"&&(fe.has(ne)?k.push(ne):_.push(ne))}),fe.forEach($=>{!U.fetchers.has($)&&!B.has($)&&k.push($)}),[...S].forEach($=>$(U,{deletedFetchers:k,newErrors:N.errors??null,viewTransitionOpts:P.viewTransitionOpts,flushSync:P.flushSync===!0})),k.forEach($=>mn($)),_.forEach($=>U.fetchers.delete($))}function Wt(N,P,{flushSync:k}={}){var xe,se;let _=U.actionData!=null&&U.navigation.formMethod!=null&&At(U.navigation.formMethod)&&U.navigation.state==="loading"&&((xe=N.state)==null?void 0:xe._isRedirect)!==!0,$;P.actionData?Object.keys(P.actionData).length>0?$=P.actionData:$=null:_?$=U.actionData:$=null;let ne=P.loaderData?Wd(U.loaderData,P.loaderData,P.matches||[],P.errors):U.loaderData,ue=U.blockers;ue.size>0&&(ue=new Map(ue),ue.forEach((Re,we)=>ue.set(we,Qn)));let J=ze?!1:pn(N,P.matches||U.matches),X=Te===!0||U.navigation.formMethod!=null&&At(U.navigation.formMethod)&&((se=N.state)==null?void 0:se._isRedirect)!==!0;p&&(A=p,p=void 0),ze||ie==="POP"||(ie==="PUSH"?a.history.push(N,N.state):ie==="REPLACE"&&a.history.replace(N,N.state));let te;if(ie==="POP"){let Re=Ye.get(U.location.pathname);Re&&Re.has(N.pathname)?te={currentLocation:U.location,nextLocation:N}:Ye.has(N.pathname)&&(te={currentLocation:N,nextLocation:U.location})}else if(Oe){let Re=Ye.get(U.location.pathname);Re?Re.add(N.pathname):(Re=new Set([N.pathname]),Ye.set(U.location.pathname,Re)),te={currentLocation:U.location,nextLocation:N}}at({...P,actionData:$,loaderData:ne,historyAction:ie,location:N,initialized:!0,navigation:Eo,revalidation:"idle",restoreScrollPosition:J,preventScrollReset:X,blockers:ue},{viewTransitionOpts:te,flushSync:k===!0}),ie="POP",Te=!1,Oe=!1,ze=!1,Me=!1,pe==null||pe.resolve(),pe=null,Ie==null||Ie.resolve(),Ie=null}async function wa(N,P){if(pe==null||pe.resolve(),pe=null,typeof N=="number"){pe||(pe=Zd());let we=pe.promise;return a.history.go(N),we}let k=Lo(U.location,U.matches,g,N,P==null?void 0:P.fromRouteId,P==null?void 0:P.relative),{path:_,submission:$,error:ne}=Hd(!1,k,P),ue=U.location,J=nl(U.location,_,P&&P.state);J={...J,...a.history.encodeLocation(J)};let X=P&&P.replace!=null?P.replace:void 0,te="PUSH";X===!0?te="REPLACE":X===!1||$!=null&&At($.formMethod)&&$.formAction===U.location.pathname+U.location.search&&(te="REPLACE");let xe=P&&"preventScrollReset"in P?P.preventScrollReset===!0:void 0,se=(P&&P.flushSync)===!0,Re=fr({currentLocation:ue,nextLocation:J,historyAction:te});if(Re){Lr(Re,{state:"blocked",location:J,proceed(){Lr(Re,{state:"proceeding",proceed:void 0,reset:void 0,location:J}),wa(N,P)},reset(){let we=new Map(U.blockers);we.set(Re,Qn),at({blockers:we})}});return}await tr(te,J,{submission:$,pendingError:ne,preventScrollReset:xe,replace:P&&P.replace,enableViewTransition:P&&P.viewTransition,flushSync:se,callSiteDefaultShouldRevalidate:P&&P.unstable_defaultShouldRevalidate})}function hl(){Ie||(Ie=Zd()),na(),at({revalidation:"loading"});let N=Ie.promise;return U.navigation.state==="submitting"?N:U.navigation.state==="idle"?(tr(U.historyAction,U.location,{startUninterruptedRevalidation:!0}),N):(tr(ie||U.historyAction,U.navigation.location,{overrideNavigation:U.navigation,enableViewTransition:Oe===!0}),N)}async function tr(N,P,k){Le&&Le.abort(),Le=null,ie=N,ze=(k&&k.startUninterruptedRevalidation)===!0,Nl(U.location,U.matches),Te=(k&&k.preventScrollReset)===!0,Oe=(k&&k.enableViewTransition)===!0;let _=p||A,$=k&&k.overrideNavigation,ne=k!=null&&k.initialHydration&&U.matches&&U.matches.length>0&&!G?U.matches:Xr(_,P,g),ue=(k&&k.flushSync)===!0;if(ne&&U.initialized&&!Me&&nA(U.location,P)&&!(k&&k.submission&&At(k.submission.formMethod))){Wt(P,{matches:ne},{flushSync:ue});return}let J=ia(ne,_,P.pathname);if(J.active&&J.matches&&(ne=J.matches),!ne){let{error:Ze,notFoundMatches:it,route:Ce}=ar(P.pathname);Wt(P,{matches:it,loaderData:{},errors:{[Ce.id]:Ze}},{flushSync:ue});return}Le=new AbortController;let X=nn(a.history,P,Le.signal,k&&k.submission),te=a.getContext?await a.getContext():new jd,xe;if(k&&k.pendingError)xe=[ea(ne).route.id,{type:"error",error:k.pendingError}];else if(k&&k.submission&&At(k.submission.formMethod)){let Ze=await un(X,P,k.submission,ne,te,J.active,k&&k.initialHydration===!0,{replace:k.replace,flushSync:ue});if(Ze.shortCircuited)return;if(Ze.pendingActionResult){let[it,Ce]=Ze.pendingActionResult;if(Ct(Ce)&&il(Ce.error)&&Ce.error.status===404){Le=null,Wt(P,{matches:Ze.matches,loaderData:{},errors:{[it]:Ce.error}});return}}ne=Ze.matches||ne,xe=Ze.pendingActionResult,$=Po(P,k.submission),ue=!1,J.active=!1,X=nn(a.history,X.url,X.signal)}let{shortCircuited:se,matches:Re,loaderData:we,errors:et}=await pl(X,P,ne,te,J.active,$,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,k&&k.initialHydration===!0,ue,xe,k&&k.callSiteDefaultShouldRevalidate);se||(Le=null,Wt(P,{matches:Re||ne,...qd(xe),loaderData:we,errors:et}))}async function un(N,P,k,_,$,ne,ue,J={}){na();let X=mA(P,k);if(at({navigation:X},{flushSync:J.flushSync===!0}),ne){let se=await kr(_,P.pathname,N.signal);if(se.type==="aborted")return{shortCircuited:!0};if(se.type==="error"){if(se.partialMatches.length===0){let{matches:we,route:et}=Mi(A);return{matches:we,pendingActionResult:[et.id,{type:"error",error:se.error}]}}let Re=ea(se.partialMatches).route.id;return{matches:se.partialMatches,pendingActionResult:[Re,{type:"error",error:se.error}]}}else if(se.matches)_=se.matches;else{let{notFoundMatches:Re,error:we,route:et}=ar(P.pathname);return{matches:Re,pendingActionResult:[et.id,{type:"error",error:we}]}}}let te,xe=Ii(_,P);if(!xe.route.action&&!xe.route.lazy)te={type:"error",error:Ft(405,{method:N.method,pathname:P.pathname,routeId:xe.route.id})};else{let se=sn(m,f,N,_,xe,ue?[]:c,$),Re=await wr(N,se,$,null);if(te=Re[xe.route.id],!te){for(let we of _)if(Re[we.route.id]){te=Re[we.route.id];break}}if(N.signal.aborted)return{shortCircuited:!0}}if(Ta(te)){let se;return J&&J.replace!=null?se=J.replace:se=Fd(te.response.headers.get("Location"),new URL(N.url),g,a.history)===U.location.pathname+U.location.search,await rr(N,te,!0,{submission:k,replace:se}),{shortCircuited:!0}}if(Ct(te)){let se=ea(_,xe.route.id);return(J&&J.replace)!==!0&&(ie="PUSH"),{matches:_,pendingActionResult:[se.route.id,te,xe.route.id]}}return{matches:_,pendingActionResult:[xe.route.id,te]}}async function pl(N,P,k,_,$,ne,ue,J,X,te,xe,se,Re){let we=ne||Po(P,ue),et=ue||J||Qd(we),Ze=!ze&&!te;if($){if(Ze){let Ge=Sa(se);at({navigation:we,...Ge!==void 0?{actionData:Ge}:{}},{flushSync:xe})}let Se=await kr(k,P.pathname,N.signal);if(Se.type==="aborted")return{shortCircuited:!0};if(Se.type==="error"){if(Se.partialMatches.length===0){let{matches:jr,route:pr}=Mi(A);return{matches:jr,loaderData:{},errors:{[pr.id]:Se.error}}}let Ge=ea(Se.partialMatches).route.id;return{matches:Se.partialMatches,loaderData:{},errors:{[Ge]:Se.error}}}else if(Se.matches)k=Se.matches;else{let{error:Ge,notFoundMatches:jr,route:pr}=ar(P.pathname);return{matches:jr,loaderData:{},errors:{[pr.id]:Ge}}}}let it=p||A,{dsMatches:Ce,revalidatingFetchers:Rt}=Gd(N,_,m,f,a.history,U,k,et,P,te?[]:c,te===!0,Me,Ne,fe,me,C,it,g,a.patchRoutesOnNavigation!=null,se,Re);if(W=++Z,!a.dataStrategy&&!Ce.some(Se=>Se.shouldLoad)&&!Ce.some(Se=>Se.route.middleware&&Se.route.middleware.length>0)&&Rt.length===0){let Se=La();return Wt(P,{matches:k,loaderData:{},errors:se&&Ct(se[1])?{[se[0]]:se[1].error}:null,...qd(se),...Se?{fetchers:new Map(U.fetchers)}:{}},{flushSync:xe}),{shortCircuited:!0}}if(Ze){let Se={};if(!$){Se.navigation=we;let Ge=Sa(se);Ge!==void 0&&(Se.actionData=Ge)}Rt.length>0&&(Se.fetchers=aa(Rt)),at(Se,{flushSync:xe})}Rt.forEach(Se=>{Kt(Se.key),Se.controller&&B.set(Se.key,Se.controller)});let Ke=()=>Rt.forEach(Se=>Kt(Se.key));Le&&Le.signal.addEventListener("abort",Ke);let{loaderResults:oa,fetcherResults:Dt}=await dn(Ce,Rt,N,_);if(N.signal.aborted)return{shortCircuited:!0};Le&&Le.signal.removeEventListener("abort",Ke),Rt.forEach(Se=>B.delete(Se.key));let Lt=Ti(oa);if(Lt)return await rr(N,Lt.result,!0,{replace:X}),{shortCircuited:!0};if(Lt=Ti(Dt),Lt)return C.add(Lt.key),await rr(N,Lt.result,!0,{replace:X}),{shortCircuited:!0};let{loaderData:Ur,errors:ua}=$d(U,k,oa,se,Rt,Dt);te&&U.errors&&(ua={...U.errors,...ua});let nr=La(),hr=ka(W),xt=nr||hr||Rt.length>0;return{matches:k,loaderData:Ur,errors:ua,...xt?{fetchers:new Map(U.fetchers)}:{}}}function Sa(N){if(N&&!Ct(N[1]))return{[N[0]]:N[1].data};if(U.actionData)return Object.keys(U.actionData).length===0?null:U.actionData}function aa(N){return N.forEach(P=>{let k=U.fetchers.get(P.key),_=Zn(void 0,k?k.data:void 0);U.fetchers.set(P.key,_)}),new Map(U.fetchers)}async function Ir(N,P,k,_){Kt(N);let $=(_&&_.flushSync)===!0,ne=p||A,ue=Lo(U.location,U.matches,g,k,P,_==null?void 0:_.relative),J=Xr(ne,ue,g),X=ia(J,ne,ue);if(X.active&&X.matches&&(J=X.matches),!J){Ot(N,P,Ft(404,{pathname:ue}),{flushSync:$});return}let{path:te,submission:xe,error:se}=Hd(!0,ue,_);if(se){Ot(N,P,se,{flushSync:$});return}let Re=a.getContext?await a.getContext():new jd,we=(_&&_.preventScrollReset)===!0;if(xe&&At(xe.formMethod)){await cn(N,P,te,J,Re,X.active,$,we,xe,_&&_.unstable_defaultShouldRevalidate);return}me.set(N,{routeId:P,path:te}),await Al(N,P,te,J,Re,X.active,$,we,xe)}async function cn(N,P,k,_,$,ne,ue,J,X,te){na(),me.delete(N);let xe=U.fetchers.get(N);vt(N,fA(X,xe),{flushSync:ue});let se=new AbortController,Re=nn(a.history,k,se.signal,X);if(ne){let $e=await kr(_,new URL(Re.url).pathname,Re.signal,N);if($e.type==="aborted")return;if($e.type==="error"){Ot(N,P,$e.error,{flushSync:ue});return}else if($e.matches)_=$e.matches;else{Ot(N,P,Ft(404,{pathname:k}),{flushSync:ue});return}}let we=Ii(_,k);if(!we.route.action&&!we.route.lazy){let $e=Ft(405,{method:X.formMethod,pathname:k,routeId:P});Ot(N,P,$e,{flushSync:ue});return}B.set(N,se);let et=Z,Ze=sn(m,f,Re,_,we,c,$),it=await wr(Re,Ze,$,N),Ce=it[we.route.id];if(!Ce){for(let $e of Ze)if(it[$e.route.id]){Ce=it[$e.route.id];break}}if(Re.signal.aborted){B.get(N)===se&&B.delete(N);return}if(fe.has(N)){if(Ta(Ce)||Ct(Ce)){vt(N,Er(void 0));return}}else{if(Ta(Ce))if(B.delete(N),W>et){vt(N,Er(void 0));return}else return C.add(N),vt(N,Zn(X)),rr(Re,Ce,!1,{fetcherSubmission:X,preventScrollReset:J});if(Ct(Ce)){Ot(N,P,Ce.error);return}}let Rt=U.navigation.location||U.location,Ke=nn(a.history,Rt,se.signal),oa=p||A,Dt=U.navigation.state!=="idle"?Xr(oa,U.navigation.location,g):U.matches;Pe(Dt,"Didn't find any matches after fetcher action");let Lt=++Z;E.set(N,Lt);let Ur=Zn(X,Ce.data);U.fetchers.set(N,Ur);let{dsMatches:ua,revalidatingFetchers:nr}=Gd(Ke,$,m,f,a.history,U,Dt,X,Rt,c,!1,Me,Ne,fe,me,C,oa,g,a.patchRoutesOnNavigation!=null,[we.route.id,Ce],te);nr.filter($e=>$e.key!==N).forEach($e=>{let Ar=$e.key,ca=U.fetchers.get(Ar),da=Zn(void 0,ca?ca.data:void 0);U.fetchers.set(Ar,da),Kt(Ar),$e.controller&&B.set(Ar,$e.controller)}),at({fetchers:new Map(U.fetchers)});let hr=()=>nr.forEach($e=>Kt($e.key));se.signal.addEventListener("abort",hr);let{loaderResults:xt,fetcherResults:Se}=await dn(ua,nr,Ke,$);if(se.signal.aborted)return;if(se.signal.removeEventListener("abort",hr),E.delete(N),B.delete(N),nr.forEach($e=>B.delete($e.key)),U.fetchers.has(N)){let $e=Er(Ce.data);U.fetchers.set(N,$e)}let Ge=Ti(xt);if(Ge)return rr(Ke,Ge.result,!1,{preventScrollReset:J});if(Ge=Ti(Se),Ge)return C.add(Ge.key),rr(Ke,Ge.result,!1,{preventScrollReset:J});let{loaderData:jr,errors:pr}=$d(U,Dt,xt,void 0,nr,Se);ka(Lt),U.navigation.state==="loading"&&Lt>W?(Pe(ie,"Expected pending action"),Le&&Le.abort(),Wt(U.navigation.location,{matches:Dt,loaderData:jr,errors:pr,fetchers:new Map(U.fetchers)})):(at({errors:pr,loaderData:Wd(U.loaderData,jr,Dt,pr),fetchers:new Map(U.fetchers)}),Me=!1)}async function Al(N,P,k,_,$,ne,ue,J,X){let te=U.fetchers.get(N);vt(N,Zn(X,te?te.data:void 0),{flushSync:ue});let xe=new AbortController,se=nn(a.history,k,xe.signal);if(ne){let Ce=await kr(_,new URL(se.url).pathname,se.signal,N);if(Ce.type==="aborted")return;if(Ce.type==="error"){Ot(N,P,Ce.error,{flushSync:ue});return}else if(Ce.matches)_=Ce.matches;else{Ot(N,P,Ft(404,{pathname:k}),{flushSync:ue});return}}let Re=Ii(_,k);B.set(N,xe);let we=Z,et=sn(m,f,se,_,Re,c,$),it=(await wr(se,et,$,N))[Re.route.id];if(B.get(N)===xe&&B.delete(N),!se.signal.aborted){if(fe.has(N)){vt(N,Er(void 0));return}if(Ta(it))if(W>we){vt(N,Er(void 0));return}else{C.add(N),await rr(se,it,!1,{preventScrollReset:J});return}if(Ct(it)){Ot(N,P,it.error);return}vt(N,Er(it.data))}}async function rr(N,P,k,{submission:_,fetcherSubmission:$,preventScrollReset:ne,replace:ue}={}){k||(pe==null||pe.resolve(),pe=null),P.response.headers.has("X-Remix-Revalidate")&&(Me=!0);let J=P.response.headers.get("Location");Pe(J,"Expected a Location header on the redirect Response"),J=Fd(J,new URL(N.url),g,a.history);let X=nl(U.location,J,{_isRedirect:!0});if(o){let et=!1;if(P.response.headers.has("X-Remix-Reload-Document"))et=!0;else if(Ho(J)){const Ze=ym(J,!0);et=Ze.origin!==i.location.origin||zt(Ze.pathname,g)==null}if(et){ue?i.location.replace(J):i.location.assign(J);return}}Le=null;let te=ue===!0||P.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:xe,formAction:se,formEncType:Re}=U.navigation;!_&&!$&&xe&&se&&Re&&(_=Qd(U.navigation));let we=_||$;if(_p.has(P.response.status)&&we&&At(we.formMethod))await tr(te,X,{submission:{...we,formAction:J},preventScrollReset:ne||Te,enableViewTransition:k?Oe:void 0});else{let et=Po(X,_);await tr(te,X,{overrideNavigation:et,fetcherSubmission:$,preventScrollReset:ne||Te,enableViewTransition:k?Oe:void 0})}}async function wr(N,P,k,_){var ue;let $,ne={};try{$=await Zp(v,N,P,_,k,!1)}catch(J){return P.filter(X=>X.shouldLoad).forEach(X=>{ne[X.route.id]={type:"error",error:J}}),ne}if(N.signal.aborted)return ne;if(!At(N.method))for(let J of P){if(((ue=$[J.route.id])==null?void 0:ue.type)==="error")break;!$.hasOwnProperty(J.route.id)&&!U.loaderData.hasOwnProperty(J.route.id)&&(!U.errors||!U.errors.hasOwnProperty(J.route.id))&&J.shouldCallHandler()&&($[J.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${J.route.id}`)})}for(let[J,X]of Object.entries($))if(oA(X)){let te=X.result;ne[J]={type:"redirect",response:rA(te,N,J,P,g)}}else ne[J]=await tA(X);return ne}async function dn(N,P,k,_){let $=wr(k,N,_,null),ne=Promise.all(P.map(async X=>{if(X.matches&&X.match&&X.request&&X.controller){let xe=(await wr(X.request,X.matches,_,X.key))[X.match.route.id];return{[X.key]:xe}}else return Promise.resolve({[X.key]:{type:"error",error:Ft(404,{pathname:X.path})}})})),ue=await $,J=(await ne).reduce((X,te)=>Object.assign(X,te),{});return{loaderResults:ue,fetcherResults:J}}function na(){Me=!0,me.forEach((N,P)=>{B.has(P)&&Ne.add(P),Kt(P)})}function vt(N,P,k={}){U.fetchers.set(N,P),at({fetchers:new Map(U.fetchers)},{flushSync:(k&&k.flushSync)===!0})}function Ot(N,P,k,_={}){let $=ea(U.matches,P);mn(N),at({errors:{[$.route.id]:k},fetchers:new Map(U.fetchers)},{flushSync:(_&&_.flushSync)===!0})}function Sr(N){return he.set(N,(he.get(N)||0)+1),fe.has(N)&&fe.delete(N),U.fetchers.get(N)||Yp}function la(N,P){Kt(N,P==null?void 0:P.reason),vt(N,Er(null))}function mn(N){let P=U.fetchers.get(N);B.has(N)&&!(P&&P.state==="loading"&&E.has(N))&&Kt(N),me.delete(N),E.delete(N),C.delete(N),fe.delete(N),Ne.delete(N),U.fetchers.delete(N)}function gl(N){let P=(he.get(N)||0)-1;P<=0?(he.delete(N),fe.add(N)):he.set(N,P),at({fetchers:new Map(U.fetchers)})}function Kt(N,P){let k=B.get(N);k&&(k.abort(P),B.delete(N))}function xl(N){for(let P of N){let k=Sr(P),_=Er(k.data);U.fetchers.set(P,_)}}function La(){let N=[],P=!1;for(let k of C){let _=U.fetchers.get(k);Pe(_,`Expected fetcher: ${k}`),_.state==="loading"&&(C.delete(k),N.push(k),P=!0)}return xl(N),P}function ka(N){let P=[];for(let[k,_]of E)if(_<N){let $=U.fetchers.get(k);Pe($,`Expected fetcher: ${k}`),$.state==="loading"&&(Kt(k),E.delete(k),P.push(k))}return xl(P),P.length>0}function fn(N,P){let k=U.blockers.get(N)||Qn;return ve.get(N)!==P&&ve.set(N,P),k}function Ua(N){U.blockers.delete(N),ve.delete(N)}function Lr(N,P){let k=U.blockers.get(N)||Qn;Pe(k.state==="unblocked"&&P.state==="blocked"||k.state==="blocked"&&P.state==="blocked"||k.state==="blocked"&&P.state==="proceeding"||k.state==="blocked"&&P.state==="unblocked"||k.state==="proceeding"&&P.state==="unblocked",`Invalid blocker state transition: ${k.state} -> ${P.state}`);let _=new Map(U.blockers);_.set(N,P),at({blockers:_})}function fr({currentLocation:N,nextLocation:P,historyAction:k}){if(ve.size===0)return;ve.size>1&&rt(!1,"A router only supports one blocker at a time");let _=Array.from(ve.entries()),[$,ne]=_[_.length-1],ue=U.blockers.get($);if(!(ue&&ue.state==="proceeding")&&ne({currentLocation:N,nextLocation:P,historyAction:k}))return $}function ar(N){let P=Ft(404,{pathname:N}),k=p||A,{matches:_,route:$}=Mi(k);return{notFoundMatches:_,route:$,error:P}}function yl(N,P,k){if(H=N,D=P,O=k||null,!b&&U.navigation===Eo){b=!0;let _=pn(U.location,U.matches);_!=null&&at({restoreScrollPosition:_})}return()=>{H=null,D=null,O=null}}function hn(N,P){return O&&O(N,P.map(_=>pp(_,U.loaderData)))||N.key}function Nl(N,P){if(H&&D){let k=hn(N,P);H[k]=D()}}function pn(N,P){if(H){let k=hn(N,P),_=H[k];if(typeof _=="number")return _}return null}function ia(N,P,k){if(a.patchRoutesOnNavigation)if(N){if(Object.keys(N[0].params).length>0)return{active:!0,matches:rl(P,k,g,!0)}}else return{active:!0,matches:rl(P,k,g,!0)||[]};return{active:!1,matches:null}}async function kr(N,P,k,_){if(!a.patchRoutesOnNavigation)return{type:"success",matches:N};let $=N;for(;;){let ne=p==null,ue=p||A,J=f;try{await a.patchRoutesOnNavigation({signal:k,path:P,matches:$,fetcherKey:_,patch:(xe,se)=>{k.aborted||Vd(xe,se,ue,J,m,!1)}})}catch(xe){return{type:"error",error:xe,partialMatches:$}}finally{ne&&!k.aborted&&(A=[...A])}if(k.aborted)return{type:"aborted"};let X=Xr(ue,P,g),te=null;if(X){if(Object.keys(X[0].params).length===0)return{type:"success",matches:X};if(te=rl(ue,P,g,!0),!(te&&$.length<te.length&&An($,te.slice(0,$.length))))return{type:"success",matches:X}}if(te||(te=rl(ue,P,g,!0)),!te||An($,te))return{type:"success",matches:null};$=te}}function An(N,P){return N.length===P.length&&N.every((k,_)=>k.route.id===P[_].route.id)}function sa(N){f={},p=ll(N,m,void 0,f)}function gn(N,P,k=!1){let _=p==null;Vd(N,P,p||A,f,m,k),_&&(A=[...A],at({}))}return ye={get basename(){return g},get future(){return y},get state(){return U},get routes(){return A},get window(){return i},initialize:Ve,subscribe:Ia,enableScrollRestoration:yl,navigate:wa,fetch:Ir,revalidate:hl,createHref:N=>a.history.createHref(N),encodeLocation:N=>a.history.encodeLocation(N),getFetcher:Sr,resetFetcher:la,deleteFetcher:gl,dispose:gt,getBlocker:fn,deleteBlocker:Ua,patchRoutes:gn,_internalFetchControllers:B,_internalSetRoutes:sa,_internalSetStateDoNotUseOrYouWillBreakYourApp(N){at(N)}},a.unstable_instrumentations&&(ye=bp(ye,a.unstable_instrumentations.map(N=>N.router).filter(Boolean))),ye}function zp(a){return a!=null&&("formData"in a&&a.formData!=null||"body"in a&&a.body!==void 0)}function Lo(a,i,o,c,d,m){let f,A;if(d){f=[];for(let g of i)if(f.push(g),g.route.id===d){A=g;break}}else f=i,A=i[i.length-1];let p=Vo(c||".",Go(f),zt(a.pathname,o)||a.pathname,m==="path");if(c==null&&(p.search=a.search,p.hash=a.hash),(c==null||c===""||c===".")&&A){let g=Bo(p.search);if(A.route.index&&!g)p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index";else if(!A.route.index&&g){let v=new URLSearchParams(p.search),y=v.getAll("index");v.delete("index"),y.filter(S=>S).forEach(S=>v.append("index",S));let I=v.toString();p.search=I?`?${I}`:""}}return o!=="/"&&(p.pathname=wp({basename:o,pathname:p.pathname})),dr(p)}function Hd(a,i,o){if(!o||!zp(o))return{path:i};if(o.formMethod&&!dA(o.formMethod))return{path:i,error:Ft(405,{method:o.formMethod})};let c=()=>({path:i,error:Ft(400,{type:"invalid-body"})}),m=(o.formMethod||"get").toUpperCase(),f=Om(i);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!At(m))return c();let y=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((I,[S,H])=>`${I}${S}=${H}
`,""):String(o.body);return{path:i,submission:{formMethod:m,formAction:f,formEncType:o.formEncType,formData:void 0,json:void 0,text:y}}}else if(o.formEncType==="application/json"){if(!At(m))return c();try{let y=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:i,submission:{formMethod:m,formAction:f,formEncType:o.formEncType,formData:void 0,json:y,text:void 0}}}catch{return c()}}}Pe(typeof FormData=="function","FormData is not available in this environment");let A,p;if(o.formData)A=jo(o.formData),p=o.formData;else if(o.body instanceof FormData)A=jo(o.body),p=o.body;else if(o.body instanceof URLSearchParams)A=o.body,p=zd(A);else if(o.body==null)A=new URLSearchParams,p=new FormData;else try{A=new URLSearchParams(o.body),p=zd(A)}catch{return c()}let g={formMethod:m,formAction:f,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:p,json:void 0,text:void 0};if(At(g.formMethod))return{path:i,submission:g};let v=ra(i);return a&&v.search&&Bo(v.search)&&A.append("index",""),v.search=`?${A}`,{path:dr(v),submission:g}}function Gd(a,i,o,c,d,m,f,A,p,g,v,y,I,S,H,O,D,b,K,G,ae){var ze;let oe=G?Ct(G[1])?G[1].error:G[1].data:void 0,ye=d.createURL(m.location),U=d.createURL(p),ie;if(v&&m.errors){let Me=Object.keys(m.errors)[0];ie=f.findIndex(Ne=>Ne.route.id===Me)}else if(G&&Ct(G[1])){let Me=G[0];ie=f.findIndex(Ne=>Ne.route.id===Me)-1}let pe=G?G[1].statusCode:void 0,Te=pe&&pe>=400,Le={currentUrl:ye,currentParams:((ze=m.matches[0])==null?void 0:ze.params)||{},nextUrl:U,nextParams:f[0].params,...A,actionResult:oe,actionStatus:pe},Oe=ul(f),Ye=f.map((Me,Ne)=>{let{route:B}=Me,Z=null;if(ie!=null&&Ne>ie?Z=!1:B.lazy?Z=!0:_o(B)?v?Z=ko(B,m.loaderData,m.errors):$p(m.loaderData,m.matches[Ne],Me)&&(Z=!0):Z=!1,Z!==null)return Uo(o,c,a,Oe,Me,g,i,Z);let W=!1;typeof ae=="boolean"?W=ae:Te?W=!1:(y||ye.pathname+ye.search===U.pathname+U.search||ye.search!==U.search||Wp(m.matches[Ne],Me))&&(W=!0);let E={...Le,defaultShouldRevalidate:W},C=al(Me,E);return Uo(o,c,a,Oe,Me,g,i,C,E,ae)}),je=[];return H.forEach((Me,Ne)=>{if(v||!f.some(fe=>fe.route.id===Me.routeId)||S.has(Ne))return;let B=m.fetchers.get(Ne),Z=B&&B.state!=="idle"&&B.data===void 0,W=Xr(D,Me.path,b);if(!W){if(K&&Z)return;je.push({key:Ne,routeId:Me.routeId,path:Me.path,matches:null,match:null,request:null,controller:null});return}if(O.has(Ne))return;let E=Ii(W,Me.path),C=new AbortController,me=nn(d,Me.path,C.signal),he=null;if(I.has(Ne))I.delete(Ne),he=sn(o,c,me,W,E,g,i);else if(Z)y&&(he=sn(o,c,me,W,E,g,i));else{let fe;typeof ae=="boolean"?fe=ae:Te?fe=!1:fe=y;let ve={...Le,defaultShouldRevalidate:fe};al(E,ve)&&(he=sn(o,c,me,W,E,g,i,ve))}he&&je.push({key:Ne,routeId:Me.routeId,path:Me.path,matches:he,match:E,request:me,controller:C})}),{dsMatches:Ye,revalidatingFetchers:je}}function _o(a){return a.loader!=null||a.middleware!=null&&a.middleware.length>0}function ko(a,i,o){if(a.lazy)return!0;if(!_o(a))return!1;let c=i!=null&&a.id in i,d=o!=null&&o[a.id]!==void 0;return!c&&d?!1:typeof a.loader=="function"&&a.loader.hydrate===!0?!0:!c&&!d}function $p(a,i,o){let c=!i||o.route.id!==i.route.id,d=!a.hasOwnProperty(o.route.id);return c||d}function Wp(a,i){let o=a.route.path;return a.pathname!==i.pathname||o!=null&&o.endsWith("*")&&a.params["*"]!==i.params["*"]}function al(a,i){if(a.route.shouldRevalidate){let o=a.route.shouldRevalidate(i);if(typeof o=="boolean")return o}return i.defaultShouldRevalidate}function Vd(a,i,o,c,d,m){let f;if(a){let g=c[a];Pe(g,`No route found to patch children into: routeId = ${a}`),g.children||(g.children=[]),f=g.children}else f=o;let A=[],p=[];if(i.forEach(g=>{let v=f.find(y=>km(g,y));v?p.push({existingRoute:v,newRoute:g}):A.push(g)}),A.length>0){let g=ll(A,d,[a||"_","patch",String((f==null?void 0:f.length)||"0")],c);f.push(...g)}if(m&&p.length>0)for(let g=0;g<p.length;g++){let{existingRoute:v,newRoute:y}=p[g],I=v,[S]=ll([y],d,[],{},!0);Object.assign(I,{element:S.element?S.element:I.element,errorElement:S.errorElement?S.errorElement:I.errorElement,hydrateFallbackElement:S.hydrateFallbackElement?S.hydrateFallbackElement:I.hydrateFallbackElement})}}function km(a,i){return"id"in a&&"id"in i&&a.id===i.id?!0:a.index===i.index&&a.path===i.path&&a.caseSensitive===i.caseSensitive?(!a.children||a.children.length===0)&&(!i.children||i.children.length===0)?!0:a.children.every((o,c)=>{var d;return(d=i.children)==null?void 0:d.some(m=>km(o,m))}):!1}var _d=new WeakMap,Um=({key:a,route:i,manifest:o,mapRouteProperties:c})=>{let d=o[i.id];if(Pe(d,"No route found in manifest"),!d.lazy||typeof d.lazy!="object")return;let m=d.lazy[a];if(!m)return;let f=_d.get(d);f||(f={},_d.set(d,f));let A=f[a];if(A)return A;let p=(async()=>{let g=dp(a),y=d[a]!==void 0&&a!=="hasErrorBoundary";if(g)rt(!g,"Route property "+a+" is not a supported lazy route property. This property will be ignored."),f[a]=Promise.resolve();else if(y)rt(!1,`Route "${d.id}" has a static property "${a}" defined. The lazy property will be ignored.`);else{let I=await m();I!=null&&(Object.assign(d,{[a]:I}),Object.assign(d,c(d)))}typeof d.lazy=="object"&&(d.lazy[a]=void 0,Object.values(d.lazy).every(I=>I===void 0)&&(d.lazy=void 0))})();return f[a]=p,p},Yd=new WeakMap;function qp(a,i,o,c,d){let m=o[a.id];if(Pe(m,"No route found in manifest"),!a.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof a.lazy=="function"){let v=Yd.get(m);if(v)return{lazyRoutePromise:v,lazyHandlerPromise:v};let y=(async()=>{Pe(typeof a.lazy=="function","No lazy route function found");let I=await a.lazy(),S={};for(let H in I){let O=I[H];if(O===void 0)continue;let D=fp(H),K=m[H]!==void 0&&H!=="hasErrorBoundary";D?rt(!D,"Route property "+H+" is not a supported property to be returned from a lazy route function. This property will be ignored."):K?rt(!K,`Route "${m.id}" has a static property "${H}" defined but its lazy function is also returning a value for this property. The lazy route property "${H}" will be ignored.`):S[H]=O}Object.assign(m,S),Object.assign(m,{...c(m),lazy:void 0})})();return Yd.set(m,y),y.catch(()=>{}),{lazyRoutePromise:y,lazyHandlerPromise:y}}let f=Object.keys(a.lazy),A=[],p;for(let v of f){if(d&&d.includes(v))continue;let y=Um({key:v,route:a,manifest:o,mapRouteProperties:c});y&&(A.push(y),v===i&&(p=y))}let g=A.length>0?Promise.all(A).then(()=>{}):void 0;return g==null||g.catch(()=>{}),p==null||p.catch(()=>{}),{lazyRoutePromise:g,lazyHandlerPromise:p}}async function Bd(a){let i=a.matches.filter(d=>d.shouldLoad),o={};return(await Promise.all(i.map(d=>d.resolve()))).forEach((d,m)=>{o[i[m].route.id]=d}),o}async function Jp(a){return a.matches.some(i=>i.route.middleware)?jm(a,()=>Bd(a)):Bd(a)}function jm(a,i){return Qp(a,i,c=>{if(cA(c))throw c;return c},iA,o);function o(c,d,m){if(m)return Promise.resolve(Object.assign(m.value,{[d]:{type:"error",result:c}}));{let{matches:f}=a,A=Math.min(Math.max(f.findIndex(g=>g.route.id===d),0),Math.max(f.findIndex(g=>g.shouldCallHandler()),0)),p=ea(f,f[A].route.id).route.id;return Promise.resolve({[p]:{type:"error",result:c}})}}}async function Qp(a,i,o,c,d){let{matches:m,request:f,params:A,context:p,unstable_pattern:g}=a,v=m.flatMap(I=>I.route.middleware?I.route.middleware.map(S=>[I.route.id,S]):[]);return await bm({request:f,params:A,context:p,unstable_pattern:g},v,i,o,c,d)}async function bm(a,i,o,c,d,m,f=0){let{request:A}=a;if(A.signal.aborted)throw A.signal.reason??new Error(`Request aborted: ${A.method} ${A.url}`);let p=i[f];if(!p)return await o();let[g,v]=p,y,I=async()=>{if(y)throw new Error("You may only call `next()` once per middleware");try{return y={value:await bm(a,i,o,c,d,m,f+1)},y.value}catch(S){return y={value:await m(S,g,y)},y.value}};try{let S=await v(a,I),H=S!=null?c(S):void 0;return d(H)?H:y?H??y.value:(y={value:await I()},y.value)}catch(S){return await m(S,g,y)}}function Cm(a,i,o,c,d){let m=Um({key:"middleware",route:c.route,manifest:i,mapRouteProperties:a}),f=qp(c.route,At(o.method)?"action":"loader",i,a,d);return{middleware:m,route:f.lazyRoutePromise,handler:f.lazyHandlerPromise}}function Uo(a,i,o,c,d,m,f,A,p=null,g){let v=!1,y=Cm(a,i,o,d,m);return{...d,_lazyPromises:y,shouldLoad:A,shouldRevalidateArgs:p,shouldCallHandler(I){return v=!0,p?typeof g=="boolean"?al(d,{...p,defaultShouldRevalidate:g}):typeof I=="boolean"?al(d,{...p,defaultShouldRevalidate:I}):al(d,p):A},resolve(I){let{lazy:S,loader:H,middleware:O}=d.route,D=v||A||I&&!At(o.method)&&(S||H),b=O&&O.length>0&&!H&&!S;return D&&(At(o.method)||!b)?Xp({request:o,unstable_pattern:c,match:d,lazyHandlerPromise:y==null?void 0:y.handler,lazyRoutePromise:y==null?void 0:y.route,handlerOverride:I,scopedContext:f}):Promise.resolve({type:"data",result:void 0})}}}function sn(a,i,o,c,d,m,f,A=null){return c.map(p=>p.route.id!==d.route.id?{...p,shouldLoad:!1,shouldRevalidateArgs:A,shouldCallHandler:()=>!1,_lazyPromises:Cm(a,i,o,p,m),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Uo(a,i,o,ul(c),p,m,f,!0,A))}async function Zp(a,i,o,c,d,m){o.some(g=>{var v;return(v=g._lazyPromises)==null?void 0:v.middleware})&&await Promise.all(o.map(g=>{var v;return(v=g._lazyPromises)==null?void 0:v.middleware}));let f={request:i,unstable_pattern:ul(o),params:o[0].params,context:d,matches:o},p=await a({...f,fetcherKey:c,runClientMiddleware:g=>{let v=f;return jm(v,()=>g({...v,fetcherKey:c,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(o.flatMap(g=>{var v,y;return[(v=g._lazyPromises)==null?void 0:v.handler,(y=g._lazyPromises)==null?void 0:y.route]}))}catch{}return p}async function Xp({request:a,unstable_pattern:i,match:o,lazyHandlerPromise:c,lazyRoutePromise:d,handlerOverride:m,scopedContext:f}){let A,p,g=At(a.method),v=g?"action":"loader",y=I=>{let S,H=new Promise((b,K)=>S=K);p=()=>S(),a.signal.addEventListener("abort",p);let O=b=>typeof I!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${v}" [routeId: ${o.route.id}]`)):I({request:a,unstable_pattern:i,params:o.params,context:f},...b!==void 0?[b]:[]),D=(async()=>{try{return{type:"data",result:await(m?m(K=>O(K)):O())}}catch(b){return{type:"error",result:b}}})();return Promise.race([D,H])};try{let I=g?o.route.action:o.route.loader;if(c||d)if(I){let S,[H]=await Promise.all([y(I).catch(O=>{S=O}),c,d]);if(S!==void 0)throw S;A=H}else{await c;let S=g?o.route.action:o.route.loader;if(S)[A]=await Promise.all([y(S),d]);else if(v==="action"){let H=new URL(a.url),O=H.pathname+H.search;throw Ft(405,{method:a.method,pathname:O,routeId:o.route.id})}else return{type:"data",result:void 0}}else if(I)A=await y(I);else{let S=new URL(a.url),H=S.pathname+S.search;throw Ft(404,{pathname:H})}}catch(I){return{type:"error",result:I}}finally{p&&a.signal.removeEventListener("abort",p)}return A}async function eA(a){let i=a.headers.get("Content-Type");return i&&/\bapplication\/json\b/.test(i)?a.body==null?null:a.json():a.text()}async function tA(a){var c,d,m,f,A;let{result:i,type:o}=a;if(Yo(i)){let p;try{p=await eA(i)}catch(g){return{type:"error",error:g}}return o==="error"?{type:"error",error:new ol(i.status,i.statusText,p),statusCode:i.status,headers:i.headers}:{type:"data",data:p,statusCode:i.status,headers:i.headers}}return o==="error"?Jd(i)?i.data instanceof Error?{type:"error",error:i.data,statusCode:(c=i.init)==null?void 0:c.status,headers:(d=i.init)!=null&&d.headers?new Headers(i.init.headers):void 0}:{type:"error",error:lA(i),statusCode:il(i)?i.status:void 0,headers:(m=i.init)!=null&&m.headers?new Headers(i.init.headers):void 0}:{type:"error",error:i,statusCode:il(i)?i.status:void 0}:Jd(i)?{type:"data",data:i.data,statusCode:(f=i.init)==null?void 0:f.status,headers:(A=i.init)!=null&&A.headers?new Headers(i.init.headers):void 0}:{type:"data",data:i}}function rA(a,i,o,c,d){let m=a.headers.get("Location");if(Pe(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!Ho(m)){let f=c.slice(0,c.findIndex(A=>A.route.id===o)+1);m=Lo(new URL(i.url),f,d,m),a.headers.set("Location",m)}return a}function Fd(a,i,o,c){let d=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(Ho(a)){let m=a,f=m.startsWith("//")?new URL(i.protocol+m):new URL(m);if(d.includes(f.protocol))throw new Error("Invalid redirect location");let A=zt(f.pathname,o)!=null;if(f.origin===i.origin&&A)return f.pathname+f.search+f.hash}try{let m=c.createURL(a);if(d.includes(m.protocol))throw new Error("Invalid redirect location")}catch{}return a}function nn(a,i,o,c){let d=a.createURL(Om(i)).toString(),m={signal:o};if(c&&At(c.formMethod)){let{formMethod:f,formEncType:A}=c;m.method=f.toUpperCase(),A==="application/json"?(m.headers=new Headers({"Content-Type":A}),m.body=JSON.stringify(c.json)):A==="text/plain"?m.body=c.text:A==="application/x-www-form-urlencoded"&&c.formData?m.body=jo(c.formData):m.body=c.formData}return new Request(d,m)}function jo(a){let i=new URLSearchParams;for(let[o,c]of a.entries())i.append(o,typeof c=="string"?c:c.name);return i}function zd(a){let i=new FormData;for(let[o,c]of a.entries())i.append(o,c);return i}function aA(a,i,o,c=!1,d=!1){let m={},f=null,A,p=!1,g={},v=o&&Ct(o[1])?o[1].error:void 0;return a.forEach(y=>{if(!(y.route.id in i))return;let I=y.route.id,S=i[I];if(Pe(!Ta(S),"Cannot handle redirect results in processLoaderData"),Ct(S)){let H=S.error;if(v!==void 0&&(H=v,v=void 0),f=f||{},d)f[I]=H;else{let O=ea(a,I);f[O.route.id]==null&&(f[O.route.id]=H)}c||(m[I]=Lm),p||(p=!0,A=il(S.error)?S.error.status:500),S.headers&&(g[I]=S.headers)}else m[I]=S.data,S.statusCode&&S.statusCode!==200&&!p&&(A=S.statusCode),S.headers&&(g[I]=S.headers)}),v!==void 0&&o&&(f={[o[0]]:v},o[2]&&(m[o[2]]=void 0)),{loaderData:m,errors:f,statusCode:A||200,loaderHeaders:g}}function $d(a,i,o,c,d,m){let{loaderData:f,errors:A}=aA(i,o,c);return d.filter(p=>!p.matches||p.matches.some(g=>g.shouldLoad)).forEach(p=>{let{key:g,match:v,controller:y}=p;if(y&&y.signal.aborted)return;let I=m[g];if(Pe(I,"Did not find corresponding fetcher result"),Ct(I)){let S=ea(a.matches,v==null?void 0:v.route.id);A&&A[S.route.id]||(A={...A,[S.route.id]:I.error}),a.fetchers.delete(g)}else if(Ta(I))Pe(!1,"Unhandled fetcher revalidation redirect");else{let S=Er(I.data);a.fetchers.set(g,S)}}),{loaderData:f,errors:A}}function Wd(a,i,o,c){let d=Object.entries(i).filter(([,m])=>m!==Lm).reduce((m,[f,A])=>(m[f]=A,m),{});for(let m of o){let f=m.route.id;if(!i.hasOwnProperty(f)&&a.hasOwnProperty(f)&&m.route.loader&&(d[f]=a[f]),c&&c.hasOwnProperty(f))break}return d}function qd(a){return a?Ct(a[1])?{actionData:{}}:{actionData:{[a[0]]:a[1].data}}:{}}function ea(a,i){return(i?a.slice(0,a.findIndex(c=>c.route.id===i)+1):[...a]).reverse().find(c=>c.route.hasErrorBoundary===!0)||a[0]}function Mi(a){let i=a.length===1?a[0]:a.find(o=>o.index||!o.path||o.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:i}],route:i}}function Ft(a,{pathname:i,routeId:o,method:c,type:d,message:m}={}){let f="Unknown Server Error",A="Unknown @remix-run/router error";return a===400?(f="Bad Request",c&&i&&o?A=`You made a ${c} request to "${i}" but did not provide a \`loader\` for route "${o}", so there is no way to handle the request.`:d==="invalid-body"&&(A="Unable to encode submission body")):a===403?(f="Forbidden",A=`Route "${o}" does not match URL "${i}"`):a===404?(f="Not Found",A=`No route matches URL "${i}"`):a===405&&(f="Method Not Allowed",c&&i&&o?A=`You made a ${c.toUpperCase()} request to "${i}" but did not provide an \`action\` for route "${o}", so there is no way to handle the request.`:c&&(A=`Invalid request method "${c.toUpperCase()}"`)),new ol(a||500,f,new Error(A),!0)}function Ti(a){let i=Object.entries(a);for(let o=i.length-1;o>=0;o--){let[c,d]=i[o];if(Ta(d))return{key:c,result:d}}}function Om(a){let i=typeof a=="string"?ra(a):a;return dr({...i,hash:""})}function nA(a,i){return a.pathname!==i.pathname||a.search!==i.search?!1:a.hash===""?i.hash!=="":a.hash===i.hash?!0:i.hash!==""}function lA(a){var i,o;return new ol(((i=a.init)==null?void 0:i.status)??500,((o=a.init)==null?void 0:o.statusText)??"Internal Server Error",a.data)}function iA(a){return a!=null&&typeof a=="object"&&Object.entries(a).every(([i,o])=>typeof i=="string"&&sA(o))}function sA(a){return a!=null&&typeof a=="object"&&"type"in a&&"result"in a&&(a.type==="data"||a.type==="error")}function oA(a){return Yo(a.result)&&wm.has(a.result.status)}function Ct(a){return a.type==="error"}function Ta(a){return(a&&a.type)==="redirect"}function Jd(a){return typeof a=="object"&&a!=null&&"type"in a&&"data"in a&&"init"in a&&a.type==="DataWithResponseInit"}function Yo(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.headers=="object"&&typeof a.body<"u"}function uA(a){return wm.has(a)}function cA(a){return Yo(a)&&uA(a.status)&&a.headers.has("Location")}function dA(a){return Vp.has(a.toUpperCase())}function At(a){return Hp.has(a.toUpperCase())}function Bo(a){return new URLSearchParams(a).getAll("index").some(i=>i==="")}function Ii(a,i){let o=typeof i=="string"?ra(i).search:i.search;if(a[a.length-1].route.index&&Bo(o||""))return a[a.length-1];let c=Mm(a);return c[c.length-1]}function Qd(a){let{formMethod:i,formAction:o,formEncType:c,text:d,formData:m,json:f}=a;if(!(!i||!o||!c)){if(d!=null)return{formMethod:i,formAction:o,formEncType:c,formData:void 0,json:void 0,text:d};if(m!=null)return{formMethod:i,formAction:o,formEncType:c,formData:m,json:void 0,text:void 0};if(f!==void 0)return{formMethod:i,formAction:o,formEncType:c,formData:void 0,json:f,text:void 0}}}function Po(a,i){return i?{state:"loading",location:a,formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text}:{state:"loading",location:a,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function mA(a,i){return{state:"submitting",location:a,formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text}}function Zn(a,i){return a?{state:"loading",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:i}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:i}}function fA(a,i){return{state:"submitting",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:i?i.data:void 0}}function Er(a){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function hA(a,i){try{let o=a.sessionStorage.getItem(Sm);if(o){let c=JSON.parse(o);for(let[d,m]of Object.entries(c||{}))m&&Array.isArray(m)&&i.set(d,new Set(m||[]))}}catch{}}function pA(a,i){if(i.size>0){let o={};for(let[c,d]of i)o[c]=[...d];try{a.sessionStorage.setItem(Sm,JSON.stringify(o))}catch(c){rt(!1,`Failed to save applied view transitions in sessionStorage (${c}).`)}}}function Zd(){let a,i,o=new Promise((c,d)=>{a=async m=>{c(m);try{await o}catch{}},i=async m=>{d(m);try{await o}catch{}}});return{promise:o,resolve:a,reject:i}}var Pa=M.createContext(null);Pa.displayName="DataRouter";var cl=M.createContext(null);cl.displayName="DataRouterState";var Km=M.createContext(!1);function AA(){return M.useContext(Km)}var Fo=M.createContext({isTransitioning:!1});Fo.displayName="ViewTransition";var Dm=M.createContext(new Map);Dm.displayName="Fetchers";var gA=M.createContext(null);gA.displayName="Await";var $t=M.createContext(null);$t.displayName="Navigation";var ji=M.createContext(null);ji.displayName="Location";var mr=M.createContext({outlet:null,matches:[],isDataRoute:!1});mr.displayName="Route";var zo=M.createContext(null);zo.displayName="RouteError";var Hm="REACT_ROUTER_ERROR",xA="REDIRECT",yA="ROUTE_ERROR_RESPONSE";function NA(a){if(a.startsWith(`${Hm}:${xA}:{`))try{let i=JSON.parse(a.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function vA(a){if(a.startsWith(`${Hm}:${yA}:{`))try{let i=JSON.parse(a.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new ol(i.status,i.statusText,i.data)}catch{}}function RA(a,{relative:i}={}){Pe(dl(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:c}=M.useContext($t),{hash:d,pathname:m,search:f}=ml(a,{relative:i}),A=m;return o!=="/"&&(A=m==="/"?o:cr([o,m])),c.createHref({pathname:A,search:f,hash:d})}function dl(){return M.useContext(ji)!=null}function Pr(){return Pe(dl(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(ji).location}var Gm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vm(a){M.useContext($t).static||M.useLayoutEffect(a)}function MA(){let{isDataRoute:a}=M.useContext(mr);return a?DA():TA()}function TA(){Pe(dl(),"useNavigate() may be used only in the context of a <Router> component.");let a=M.useContext(Pa),{basename:i,navigator:o}=M.useContext($t),{matches:c}=M.useContext(mr),{pathname:d}=Pr(),m=JSON.stringify(Go(c)),f=M.useRef(!1);return Vm(()=>{f.current=!0}),M.useCallback((p,g={})=>{if(rt(f.current,Gm),!f.current)return;if(typeof p=="number"){o.go(p);return}let v=Vo(p,JSON.parse(m),d,g.relative==="path");a==null&&i!=="/"&&(v.pathname=v.pathname==="/"?i:cr([i,v.pathname])),(g.replace?o.replace:o.push)(v,g.state,g)},[i,o,m,d,a])}var EA=M.createContext(null);function PA(a){let i=M.useContext(mr).outlet;return M.useMemo(()=>i&&M.createElement(EA.Provider,{value:a},i),[i,a])}function ml(a,{relative:i}={}){let{matches:o}=M.useContext(mr),{pathname:c}=Pr(),d=JSON.stringify(Go(o));return M.useMemo(()=>Vo(a,JSON.parse(d),c,i==="path"),[a,d,c,i])}function IA(a,i,o,c,d){Pe(dl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=M.useContext($t),{matches:f}=M.useContext(mr),A=f[f.length-1],p=A?A.params:{},g=A?A.pathname:"/",v=A?A.pathnameBase:"/",y=A&&A.route;{let K=y&&y.path||"";Ym(g,!y||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let I=Pr(),S;S=I;let H=S.pathname||"/",O=H;if(v!=="/"){let K=v.replace(/^\//,"").split("/");O="/"+H.replace(/^\//,"").split("/").slice(K.length).join("/")}let D=Xr(a,{pathname:O});return rt(y||D!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),rt(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),UA(D&&D.map(K=>Object.assign({},K,{params:Object.assign({},p,K.params),pathname:cr([v,m.encodeLocation?m.encodeLocation(K.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?v:cr([v,m.encodeLocation?m.encodeLocation(K.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:K.pathnameBase])})),f,o,c,d)}function wA(){let a=KA(),i=il(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),o=a instanceof Error?a.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:m},"ErrorBoundary")," or"," ",M.createElement("code",{style:m},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},i),o?M.createElement("pre",{style:d},o):null,f)}var SA=M.createElement(wA,null),_m=class extends M.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){this.props.onError?this.props.onError(a,i):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const o=vA(a.digest);o&&(a=o)}let i=a!==void 0?M.createElement(mr.Provider,{value:this.props.routeContext},M.createElement(zo.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?M.createElement(LA,{error:a},i):i}};_m.contextType=Km;var Io=new WeakMap;function LA({children:a,error:i}){let{basename:o}=M.useContext($t);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let c=NA(i.digest);if(c){let d=Io.get(i);if(d)throw d;let m=Em(c.location,o);if(Tm&&!Io.get(i))if(m.isExternal||c.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:c.replace}));throw Io.set(i,f),f}return M.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return a}function kA({routeContext:a,match:i,children:o}){let c=M.useContext(Pa);return c&&c.static&&c.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=i.route.id),M.createElement(mr.Provider,{value:a},o)}function UA(a,i=[],o=null,c=null,d=null){if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let m=a,f=o==null?void 0:o.errors;if(f!=null){let v=m.findIndex(y=>y.route.id&&(f==null?void 0:f[y.route.id])!==void 0);Pe(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),m=m.slice(0,Math.min(m.length,v+1))}let A=!1,p=-1;if(o)for(let v=0;v<m.length;v++){let y=m[v];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=v),y.route.id){let{loaderData:I,errors:S}=o,H=y.route.loader&&!I.hasOwnProperty(y.route.id)&&(!S||S[y.route.id]===void 0);if(y.route.lazy||H){A=!0,p>=0?m=m.slice(0,p+1):m=[m[0]];break}}}let g=o&&c?(v,y)=>{var I,S;c(v,{location:o.location,params:((S=(I=o.matches)==null?void 0:I[0])==null?void 0:S.params)??{},unstable_pattern:ul(o.matches),errorInfo:y})}:void 0;return m.reduceRight((v,y,I)=>{let S,H=!1,O=null,D=null;o&&(S=f&&y.route.id?f[y.route.id]:void 0,O=y.route.errorElement||SA,A&&(p<0&&I===0?(Ym("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),H=!0,D=null):p===I&&(H=!0,D=y.route.hydrateFallbackElement||null)));let b=i.concat(m.slice(0,I+1)),K=()=>{let G;return S?G=O:H?G=D:y.route.Component?G=M.createElement(y.route.Component,null):y.route.element?G=y.route.element:G=v,M.createElement(kA,{match:y,routeContext:{outlet:v,matches:b,isDataRoute:o!=null},children:G})};return o&&(y.route.ErrorBoundary||y.route.errorElement||I===0)?M.createElement(_m,{location:o.location,revalidation:o.revalidation,component:O,error:S,children:K(),routeContext:{outlet:null,matches:b,isDataRoute:!0},onError:g}):K()},null)}function $o(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jA(a){let i=M.useContext(Pa);return Pe(i,$o(a)),i}function bA(a){let i=M.useContext(cl);return Pe(i,$o(a)),i}function CA(a){let i=M.useContext(mr);return Pe(i,$o(a)),i}function Wo(a){let i=CA(a),o=i.matches[i.matches.length-1];return Pe(o.route.id,`${a} can only be used on routes that contain a unique "id"`),o.route.id}function OA(){return Wo("useRouteId")}function KA(){var c;let a=M.useContext(zo),i=bA("useRouteError"),o=Wo("useRouteError");return a!==void 0?a:(c=i.errors)==null?void 0:c[o]}function DA(){let{router:a}=jA("useNavigate"),i=Wo("useNavigate"),o=M.useRef(!1);return Vm(()=>{o.current=!0}),M.useCallback(async(d,m={})=>{rt(o.current,Gm),o.current&&(typeof d=="number"?await a.navigate(d):await a.navigate(d,{fromRouteId:i,...m}))},[a,i])}var Xd={};function Ym(a,i,o){!i&&!Xd[a]&&(Xd[a]=!0,rt(!1,o))}var em={};function tm(a,i){!a&&!em[i]&&(em[i]=!0,console.warn(i))}var HA="useOptimistic",rm=np[HA],GA=()=>{};function VA(a){return rm?rm(a):[a,GA]}function _A(a){let i={hasErrorBoundary:a.hasErrorBoundary||a.ErrorBoundary!=null||a.errorElement!=null};return a.Component&&(a.element&&rt(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(i,{element:M.createElement(a.Component),Component:void 0})),a.HydrateFallback&&(a.hydrateFallbackElement&&rt(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(i,{hydrateFallbackElement:M.createElement(a.HydrateFallback),HydrateFallback:void 0})),a.ErrorBoundary&&(a.errorElement&&rt(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(i,{errorElement:M.createElement(a.ErrorBoundary),ErrorBoundary:void 0})),i}var YA=["HydrateFallback","hydrateFallbackElement"],BA=class{constructor(){this.status="pending",this.promise=new Promise((a,i)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",a(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",i(o))}})}};function FA({router:a,flushSync:i,onError:o,unstable_useTransitions:c}){c=AA()||c;let[m,f]=M.useState(a.state),[A,p]=VA(m),[g,v]=M.useState(),[y,I]=M.useState({isTransitioning:!1}),[S,H]=M.useState(),[O,D]=M.useState(),[b,K]=M.useState(),G=M.useRef(new Map),ae=M.useCallback((ie,{deletedFetchers:pe,newErrors:Te,flushSync:Le,viewTransitionOpts:Oe})=>{Te&&o&&Object.values(Te).forEach(je=>{var ze;return o(je,{location:ie.location,params:((ze=ie.matches[0])==null?void 0:ze.params)??{},unstable_pattern:ul(ie.matches)})}),ie.fetchers.forEach((je,ze)=>{je.data!==void 0&&G.current.set(ze,je.data)}),pe.forEach(je=>G.current.delete(je)),tm(Le===!1||i!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let Ye=a.window!=null&&a.window.document!=null&&typeof a.window.document.startViewTransition=="function";if(tm(Oe==null||Ye,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!Oe||!Ye){i&&Le?i(()=>f(ie)):c===!1?f(ie):M.startTransition(()=>{c===!0&&p(je=>am(je,ie)),f(ie)});return}if(i&&Le){i(()=>{O&&(S==null||S.resolve(),O.skipTransition()),I({isTransitioning:!0,flushSync:!0,currentLocation:Oe.currentLocation,nextLocation:Oe.nextLocation})});let je=a.window.document.startViewTransition(()=>{i(()=>f(ie))});je.finished.finally(()=>{i(()=>{H(void 0),D(void 0),v(void 0),I({isTransitioning:!1})})}),i(()=>D(je));return}O?(S==null||S.resolve(),O.skipTransition(),K({state:ie,currentLocation:Oe.currentLocation,nextLocation:Oe.nextLocation})):(v(ie),I({isTransitioning:!0,flushSync:!1,currentLocation:Oe.currentLocation,nextLocation:Oe.nextLocation}))},[a.window,i,O,S,c,p,o]);M.useLayoutEffect(()=>a.subscribe(ae),[a,ae]),M.useEffect(()=>{y.isTransitioning&&!y.flushSync&&H(new BA)},[y]),M.useEffect(()=>{if(S&&g&&a.window){let ie=g,pe=S.promise,Te=a.window.document.startViewTransition(async()=>{c===!1?f(ie):M.startTransition(()=>{c===!0&&p(Le=>am(Le,ie)),f(ie)}),await pe});Te.finished.finally(()=>{H(void 0),D(void 0),v(void 0),I({isTransitioning:!1})}),D(Te)}},[g,S,a.window,c,p]),M.useEffect(()=>{S&&g&&A.location.key===g.location.key&&S.resolve()},[S,O,A.location,g]),M.useEffect(()=>{!y.isTransitioning&&b&&(v(b.state),I({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}),K(void 0))},[y.isTransitioning,b]);let oe=M.useMemo(()=>({createHref:a.createHref,encodeLocation:a.encodeLocation,go:ie=>a.navigate(ie),push:(ie,pe,Te)=>a.navigate(ie,{state:pe,preventScrollReset:Te==null?void 0:Te.preventScrollReset}),replace:(ie,pe,Te)=>a.navigate(ie,{replace:!0,state:pe,preventScrollReset:Te==null?void 0:Te.preventScrollReset})}),[a]),ye=a.basename||"/",U=M.useMemo(()=>({router:a,navigator:oe,static:!1,basename:ye,onError:o}),[a,oe,ye,o]);return M.createElement(M.Fragment,null,M.createElement(Pa.Provider,{value:U},M.createElement(cl.Provider,{value:A},M.createElement(Dm.Provider,{value:G.current},M.createElement(Fo.Provider,{value:y},M.createElement(WA,{basename:ye,location:A.location,navigationType:A.historyAction,navigator:oe,unstable_useTransitions:c},M.createElement(zA,{routes:a.routes,future:a.future,state:A,onError:o})))))),null)}function am(a,i){return{...a,navigation:i.navigation.state!=="idle"?i.navigation:a.navigation,revalidation:i.revalidation!=="idle"?i.revalidation:a.revalidation,actionData:i.navigation.state!=="submitting"?i.actionData:a.actionData,fetchers:i.fetchers}}var zA=M.memo($A);function $A({routes:a,future:i,state:o,onError:c}){return IA(a,void 0,o,c,i)}function Bm(a){return PA(a.context)}function WA({basename:a="/",children:i=null,location:o,navigationType:c="POP",navigator:d,static:m=!1,unstable_useTransitions:f}){Pe(!dl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let A=a.replace(/^\/*/,"/"),p=M.useMemo(()=>({basename:A,navigator:d,static:m,unstable_useTransitions:f,future:{}}),[A,d,m,f]);typeof o=="string"&&(o=ra(o));let{pathname:g="/",search:v="",hash:y="",state:I=null,key:S="default"}=o,H=M.useMemo(()=>{let O=zt(g,A);return O==null?null:{location:{pathname:O,search:v,hash:y,state:I,key:S},navigationType:c}},[A,g,v,y,I,S,c]);return rt(H!=null,`<Router basename="${A}"> is not able to match the URL "${g}${v}${y}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:M.createElement($t.Provider,{value:p},M.createElement(ji.Provider,{children:i,value:H}))}var wi="get",Si="application/x-www-form-urlencoded";function bi(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function qA(a){return bi(a)&&a.tagName.toLowerCase()==="button"}function JA(a){return bi(a)&&a.tagName.toLowerCase()==="form"}function QA(a){return bi(a)&&a.tagName.toLowerCase()==="input"}function ZA(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function XA(a,i){return a.button===0&&(!i||i==="_self")&&!ZA(a)}var Ei=null;function eg(){if(Ei===null)try{new FormData(document.createElement("form"),0),Ei=!1}catch{Ei=!0}return Ei}var tg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wo(a){return a!=null&&!tg.has(a)?(rt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Si}"`),null):a}function rg(a,i){let o,c,d,m,f;if(JA(a)){let A=a.getAttribute("action");c=A?zt(A,i):null,o=a.getAttribute("method")||wi,d=wo(a.getAttribute("enctype"))||Si,m=new FormData(a)}else if(qA(a)||QA(a)&&(a.type==="submit"||a.type==="image")){let A=a.form;if(A==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||A.getAttribute("action");if(c=p?zt(p,i):null,o=a.getAttribute("formmethod")||A.getAttribute("method")||wi,d=wo(a.getAttribute("formenctype"))||wo(A.getAttribute("enctype"))||Si,m=new FormData(A,a),!eg()){let{name:g,type:v,value:y}=a;if(v==="image"){let I=g?`${g}.`:"";m.append(`${I}x`,"0"),m.append(`${I}y`,"0")}else g&&m.append(g,y)}}else{if(bi(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=wi,c=null,d=Si,f=a}return m&&d==="text/plain"&&(f=m,m=void 0),{action:c,method:o.toLowerCase(),encType:d,formData:m,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function qo(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function ag(a,i,o,c){let d=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return o?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${c}`:d.pathname=`${d.pathname}.${c}`:d.pathname==="/"?d.pathname=`_root.${c}`:i&&zt(d.pathname,i)==="/"?d.pathname=`${i.replace(/\/$/,"")}/_root.${c}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${c}`,d}async function ng(a,i){if(a.id in i)return i[a.id];try{let o=await import(a.module);return i[a.id]=o,o}catch(o){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function lg(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function ig(a,i,o){let c=await Promise.all(a.map(async d=>{let m=i.routes[d.route.id];if(m){let f=await ng(m,o);return f.links?f.links():[]}return[]}));return cg(c.flat(1).filter(lg).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function nm(a,i,o,c,d,m){let f=(p,g)=>o[g]?p.route.id!==o[g].route.id:!0,A=(p,g)=>{var v;return o[g].pathname!==p.pathname||((v=o[g].route.path)==null?void 0:v.endsWith("*"))&&o[g].params["*"]!==p.params["*"]};return m==="assets"?i.filter((p,g)=>f(p,g)||A(p,g)):m==="data"?i.filter((p,g)=>{var y;let v=c.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(f(p,g)||A(p,g))return!0;if(p.route.shouldRevalidate){let I=p.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((y=o[0])==null?void 0:y.params)||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function sg(a,i,{includeHydrateFallback:o}={}){return og(a.map(c=>{let d=i.routes[c.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),o&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function og(a){return[...new Set(a)]}function ug(a){let i={},o=Object.keys(a).sort();for(let c of o)i[c]=a[c];return i}function cg(a,i){let o=new Set;return new Set(i),a.reduce((c,d)=>{let m=JSON.stringify(ug(d));return o.has(m)||(o.add(m),c.push({key:m,link:d})),c},[])}function Fm(){let a=M.useContext(Pa);return qo(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function dg(){let a=M.useContext(cl);return qo(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Jo=M.createContext(void 0);Jo.displayName="FrameworkContext";function zm(){let a=M.useContext(Jo);return qo(a,"You must render this element inside a <HydratedRouter> element"),a}function mg(a,i){let o=M.useContext(Jo),[c,d]=M.useState(!1),[m,f]=M.useState(!1),{onFocus:A,onBlur:p,onMouseEnter:g,onMouseLeave:v,onTouchStart:y}=i,I=M.useRef(null);M.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let O=b=>{b.forEach(K=>{f(K.isIntersecting)})},D=new IntersectionObserver(O,{threshold:.5});return I.current&&D.observe(I.current),()=>{D.disconnect()}}},[a]),M.useEffect(()=>{if(c){let O=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(O)}}},[c]);let S=()=>{d(!0)},H=()=>{d(!1),f(!1)};return o?a!=="intent"?[m,I,{}]:[m,I,{onFocus:Xn(A,S),onBlur:Xn(p,H),onMouseEnter:Xn(g,S),onMouseLeave:Xn(v,H),onTouchStart:Xn(y,S)}]:[!1,I,{}]}function Xn(a,i){return o=>{a&&a(o),o.defaultPrevented||i(o)}}function fg({page:a,...i}){let{router:o}=Fm(),c=M.useMemo(()=>Xr(o.routes,a,o.basename),[o.routes,a,o.basename]);return c?M.createElement(pg,{page:a,matches:c,...i}):null}function hg(a){let{manifest:i,routeModules:o}=zm(),[c,d]=M.useState([]);return M.useEffect(()=>{let m=!1;return ig(a,i,o).then(f=>{m||d(f)}),()=>{m=!0}},[a,i,o]),c}function pg({page:a,matches:i,...o}){let c=Pr(),{future:d,manifest:m,routeModules:f}=zm(),{basename:A}=Fm(),{loaderData:p,matches:g}=dg(),v=M.useMemo(()=>nm(a,i,g,m,c,"data"),[a,i,g,m,c]),y=M.useMemo(()=>nm(a,i,g,m,c,"assets"),[a,i,g,m,c]),I=M.useMemo(()=>{if(a===c.pathname+c.search+c.hash)return[];let O=new Set,D=!1;if(i.forEach(K=>{var ae;let G=m.routes[K.route.id];!G||!G.hasLoader||(!v.some(oe=>oe.route.id===K.route.id)&&K.route.id in p&&((ae=f[K.route.id])!=null&&ae.shouldRevalidate)||G.hasClientLoader?D=!0:O.add(K.route.id))}),O.size===0)return[];let b=ag(a,A,d.unstable_trailingSlashAwareDataRequests,"data");return D&&O.size>0&&b.searchParams.set("_routes",i.filter(K=>O.has(K.route.id)).map(K=>K.route.id).join(",")),[b.pathname+b.search]},[A,d.unstable_trailingSlashAwareDataRequests,p,c,m,v,i,a,f]),S=M.useMemo(()=>sg(y,m),[y,m]),H=hg(y);return M.createElement(M.Fragment,null,I.map(O=>M.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...o})),S.map(O=>M.createElement("link",{key:O,rel:"modulepreload",href:O,...o})),H.map(({key:O,link:D})=>M.createElement("link",{key:O,nonce:o.nonce,...D,crossOrigin:D.crossOrigin??o.crossOrigin})))}function Ag(...a){return i=>{a.forEach(o=>{typeof o=="function"?o(i):o!=null&&(o.current=i)})}}var gg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{gg&&(window.__reactRouterVersion="7.13.0")}catch{}function xg(a,i){return Fp({basename:i==null?void 0:i.basename,getContext:i==null?void 0:i.getContext,future:i==null?void 0:i.future,history:sp({window:i==null?void 0:i.window}),hydrationData:yg(),routes:a,mapRouteProperties:_A,hydrationRouteProperties:YA,dataStrategy:i==null?void 0:i.dataStrategy,patchRoutesOnNavigation:i==null?void 0:i.patchRoutesOnNavigation,window:i==null?void 0:i.window,unstable_instrumentations:i==null?void 0:i.unstable_instrumentations}).initialize()}function yg(){let a=window==null?void 0:window.__staticRouterHydrationData;return a&&a.errors&&(a={...a,errors:Ng(a.errors)}),a}function Ng(a){if(!a)return null;let i=Object.entries(a),o={};for(let[c,d]of i)if(d&&d.__type==="RouteErrorResponse")o[c]=new ol(d.status,d.statusText,d.data,d.internal===!0);else if(d&&d.__type==="Error"){if(d.__subType){let m=window[d.__subType];if(typeof m=="function")try{let f=new m(d.message);f.stack="",o[c]=f}catch{}}if(o[c]==null){let m=new Error(d.message);m.stack="",o[c]=m}}else o[c]=d;return o}var $m=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,He=M.forwardRef(function({onClick:i,discover:o="render",prefetch:c="none",relative:d,reloadDocument:m,replace:f,state:A,target:p,to:g,preventScrollReset:v,viewTransition:y,unstable_defaultShouldRevalidate:I,...S},H){let{basename:O,unstable_useTransitions:D}=M.useContext($t),b=typeof g=="string"&&$m.test(g),K=Em(g,O);g=K.to;let G=RA(g,{relative:d}),[ae,oe,ye]=mg(c,S),U=Tg(g,{replace:f,state:A,target:p,preventScrollReset:v,relative:d,viewTransition:y,unstable_defaultShouldRevalidate:I,unstable_useTransitions:D});function ie(Te){i&&i(Te),Te.defaultPrevented||U(Te)}let pe=M.createElement("a",{...S,...ye,href:K.absoluteURL||G,onClick:K.isExternal||m?i:ie,ref:Ag(H,oe),target:p,"data-discover":!b&&o==="render"?"true":void 0});return ae&&!b?M.createElement(M.Fragment,null,pe,M.createElement(fg,{page:G})):pe});He.displayName="Link";var vg=M.forwardRef(function({"aria-current":i="page",caseSensitive:o=!1,className:c="",end:d=!1,style:m,to:f,viewTransition:A,children:p,...g},v){let y=ml(f,{relative:g.relative}),I=Pr(),S=M.useContext(cl),{navigator:H,basename:O}=M.useContext($t),D=S!=null&&Sg(y)&&A===!0,b=H.encodeLocation?H.encodeLocation(y).pathname:y.pathname,K=I.pathname,G=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;o||(K=K.toLowerCase(),G=G?G.toLowerCase():null,b=b.toLowerCase()),G&&O&&(G=zt(G,O)||G);const ae=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let oe=K===b||!d&&K.startsWith(b)&&K.charAt(ae)==="/",ye=G!=null&&(G===b||!d&&G.startsWith(b)&&G.charAt(b.length)==="/"),U={isActive:oe,isPending:ye,isTransitioning:D},ie=oe?i:void 0,pe;typeof c=="function"?pe=c(U):pe=[c,oe?"active":null,ye?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let Te=typeof m=="function"?m(U):m;return M.createElement(He,{...g,"aria-current":ie,className:pe,ref:v,style:Te,to:f,viewTransition:A},typeof p=="function"?p(U):p)});vg.displayName="NavLink";var Rg=M.forwardRef(({discover:a="render",fetcherKey:i,navigate:o,reloadDocument:c,replace:d,state:m,method:f=wi,action:A,onSubmit:p,relative:g,preventScrollReset:v,viewTransition:y,unstable_defaultShouldRevalidate:I,...S},H)=>{let{unstable_useTransitions:O}=M.useContext($t),D=Ig(),b=wg(A,{relative:g}),K=f.toLowerCase()==="get"?"get":"post",G=typeof A=="string"&&$m.test(A),ae=oe=>{if(p&&p(oe),oe.defaultPrevented)return;oe.preventDefault();let ye=oe.nativeEvent.submitter,U=(ye==null?void 0:ye.getAttribute("formmethod"))||f,ie=()=>D(ye||oe.currentTarget,{fetcherKey:i,method:U,navigate:o,replace:d,state:m,relative:g,preventScrollReset:v,viewTransition:y,unstable_defaultShouldRevalidate:I});O&&o!==!1?M.startTransition(()=>ie()):ie()};return M.createElement("form",{ref:H,method:K,action:b,onSubmit:c?p:ae,...S,"data-discover":!G&&a==="render"?"true":void 0})});Rg.displayName="Form";function Mg(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wm(a){let i=M.useContext(Pa);return Pe(i,Mg(a)),i}function Tg(a,{target:i,replace:o,state:c,preventScrollReset:d,relative:m,viewTransition:f,unstable_defaultShouldRevalidate:A,unstable_useTransitions:p}={}){let g=MA(),v=Pr(),y=ml(a,{relative:m});return M.useCallback(I=>{if(XA(I,i)){I.preventDefault();let S=o!==void 0?o:dr(v)===dr(y),H=()=>g(a,{replace:S,state:c,preventScrollReset:d,relative:m,viewTransition:f,unstable_defaultShouldRevalidate:A});p?M.startTransition(()=>H()):H()}},[v,g,y,o,c,i,a,d,m,f,A,p])}var Eg=0,Pg=()=>`__${String(++Eg)}__`;function Ig(){let{router:a}=Wm("useSubmit"),{basename:i}=M.useContext($t),o=OA(),c=a.fetch,d=a.navigate;return M.useCallback(async(m,f={})=>{let{action:A,method:p,encType:g,formData:v,body:y}=rg(m,i);if(f.navigate===!1){let I=f.fetcherKey||Pg();await c(I,o,f.action||A,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:y,formMethod:f.method||p,formEncType:f.encType||g,flushSync:f.flushSync})}else await d(f.action||A,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:y,formMethod:f.method||p,formEncType:f.encType||g,replace:f.replace,state:f.state,fromRouteId:o,flushSync:f.flushSync,viewTransition:f.viewTransition})},[c,d,i,o])}function wg(a,{relative:i}={}){let{basename:o}=M.useContext($t),c=M.useContext(mr);Pe(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),m={...ml(a||".",{relative:i})},f=Pr();if(a==null){m.search=f.search;let A=new URLSearchParams(m.search),p=A.getAll("index");if(p.some(v=>v==="")){A.delete("index"),p.filter(y=>y).forEach(y=>A.append("index",y));let v=A.toString();m.search=v?`?${v}`:""}}return(!a||a===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(m.pathname=m.pathname==="/"?o:cr([o,m.pathname])),dr(m)}function Sg(a,{relative:i}={}){let o=M.useContext(Fo);Pe(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Wm("useViewTransitionState"),d=ml(a,{relative:i});if(!o.isTransitioning)return!1;let m=zt(o.currentLocation.pathname,c)||o.currentLocation.pathname,f=zt(o.nextLocation.pathname,c)||o.nextLocation.pathname;return ki(d.pathname,f)!=null||ki(d.pathname,m)!=null}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),kg=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,o,c)=>c?c.toUpperCase():o.toLowerCase()),lm=a=>{const i=kg(a);return i.charAt(0).toUpperCase()+i.slice(1)},qm=(...a)=>a.filter((i,o,c)=>!!i&&i.trim()!==""&&c.indexOf(i)===o).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ug={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=M.forwardRef(({color:a="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:c,className:d="",children:m,iconNode:f,...A},p)=>M.createElement("svg",{ref:p,...Ug,width:i,height:i,stroke:a,strokeWidth:c?Number(o)*24/Number(i):o,className:qm("lucide",d),...A},[...f.map(([g,v])=>M.createElement(g,v)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=(a,i)=>{const o=M.forwardRef(({className:c,...d},m)=>M.createElement(jg,{ref:m,iconNode:i,className:qm(`lucide-${Lg(lm(a))}`,`lucide-${a}`,c),...d}));return o.displayName=lm(a),o};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],im=ge("arrow-left",bg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],St=ge("arrow-right",Cg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Kg=ge("award",Og);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Hg=ge("bell",Dg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],Vg=ge("building-2",Gg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Jm=ge("check",_g);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Qm=ge("chevron-down",Yg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Fg=ge("chevron-left",Bg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],$g=ge("chevron-right",zg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Pi=ge("circle-alert",Wg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],sl=ge("circle-check-big",qg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],fl=ge("circle-check",Jg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Zg=ge("circle-x",Qg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Zm=ge("clock",Xg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],t0=ge("credit-card",e0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Xm=ge("file-text",r0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],n0=ge("globe",a0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],ef=ge("headphones",l0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],s0=ge("heart",i0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],u0=ge("instagram",o0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],d0=ge("lightbulb",c0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],bo=ge("loader-circle",m0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],h0=ge("lock",f0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],tf=ge("mail",p0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Li=ge("map-pin",A0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],rf=ge("menu",g0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],af=ge("message-circle",x0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],N0=ge("message-square",y0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Ui=ge("phone",v0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Co=ge("play",R0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Oo=ge("plus",M0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],E0=ge("quote",T0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],nf=ge("search",P0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],w0=ge("send",I0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],L0=ge("server",S0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],lf=ge("shield",k0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]],j0=ge("sliders-horizontal",U0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Ci=ge("sparkles",b0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],O0=ge("star",C0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],D0=ge("target",K0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]],G0=ge("tv",H0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],_0=ge("user",V0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],sf=ge("users",Y0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],F0=ge("wifi",B0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],on=ge("x",z0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Oi=ge("zap",$0),Qo="/assets/image-1-CU82DH--.png",sm=[{label:"Plans",path:"/plans"},{label:"Coverage",path:"/coverage"},{label:"About Us",path:"/about"},{label:"Support",path:"/support"},{label:"G-Force",path:"/gforce",highlight:!0}];function W0(){const[a,i]=M.useState(!1),o=Pr();return l.jsxs("nav",{className:"sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border",children:[l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"flex items-center justify-between h-16",children:[l.jsx(He,{to:"/",className:"flex items-center","aria-label":"Cherrinet — home",children:l.jsx("img",{src:Qo,alt:"Cherrinet",className:"h-9 w-auto"})}),l.jsx("div",{className:"hidden lg:flex items-center gap-1",children:sm.map(c=>l.jsx(He,{to:c.path,className:`px-3 py-2 rounded-lg text-sm transition-colors ${o.pathname===c.path?"text-primary bg-secondary":c.highlight?"text-primary border border-primary/30 hover:bg-secondary":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:c.label},c.label))}),l.jsxs("div",{className:"hidden lg:flex items-center gap-4",children:[l.jsxs("a",{href:"tel:+914449303030",className:"flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors",children:[l.jsx(Ui,{className:"w-4 h-4"}),"+91 44 4930 3030"]}),l.jsx(He,{to:"/enquire",className:"bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm hover:bg-black hover:text-[#E47A82] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors",children:"Get Started"})]}),l.jsx("button",{className:"lg:hidden p-2 rounded-lg hover:bg-muted transition-colors",onClick:()=>i(!a),children:a?l.jsx(on,{className:"w-5 h-5"}):l.jsx(rf,{className:"w-5 h-5"})})]})}),a&&l.jsx("div",{className:"lg:hidden bg-white border-t border-border",children:l.jsxs("div",{className:"px-4 py-4 flex flex-col gap-1",children:[sm.map(c=>l.jsx(He,{to:c.path,onClick:()=>i(!1),className:`px-4 py-3 rounded-lg text-sm transition-colors ${o.pathname===c.path?"text-primary bg-secondary":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:c.label},c.label)),l.jsxs("div",{className:"mt-3 pt-3 border-t border-border flex flex-col gap-3",children:[l.jsxs("a",{href:"tel:+914449303030",className:"flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground",children:[l.jsx(Ui,{className:"w-4 h-4"}),"+91 44 4930 3030"]}),l.jsx(He,{to:"/enquire",onClick:()=>i(!1),className:"bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm text-center hover:bg-[#8E1B22] transition-colors",children:"Get Started"})]})]})})]})}function q0({className:a}){return l.jsx("svg",{viewBox:"0 0 448 512",fill:"currentColor",className:a,"aria-hidden":"true",children:l.jsx("path",{d:"M380.9 97.1C339 55.2 285.6 32 229.3 32 103 32 0 135 0 261.3c0 46.3 12.1 91.5 35.1 130.9L0 480l92.2-30.4c37.5 20.5 80 31.2 123.7 31.2h.1c126.3 0 229.3-103 229.3-229.3 0-56.3-23.1-109.7-65.3-151.4zm-151.6 320.5c-36.9 0-73.1-10-104.9-28.9l-7.5-4.4-54.5 18 18.3-53.4-4.9-8c-21.4-34.9-32.6-75.5-32.6-117.8 0-115 93.8-208.8 209-208.8 55.9 0 108.4 21.8 147.7 61.4 39.3 39.5 61.1 92.8 61.1 149.4 0 115.2-93.8 209-209 209zm113.2-149.4c-6.3-3.1-37.1-18.3-42.8-20.3-5.7-2-9.8-3.1-13.9 3.1-4.1 6.3-15.9 20.3-19.5 24.4-3.6 4.1-7.2 4.6-13.5 1.5-36.5-18.3-60.4-32.7-84.5-74.6-6.8-11.8 6.8-11 19.6-36.4 2.2-4.1 1.1-7.6-.5-10.7-1.5-3-14-33.5-19.2-45.9-5.1-12.4-10.3-10.7-13.9-10.9-3.6-.2-7.8-.2-12-0.2-4.1 0-10.7 1.5-16.3 7.6-5.7 6.1-21.9 21.4-21.9 52.4 0 31.1 22.5 61.3 25.6 65.6 3.1 4.1 44.2 67.5 107.1 94.8 59.4 25.8 59.4 17.2 70.2 16 10.7-1.2 34.8-14.2 39.7-28 4.9-13.8 4.9-25.6 3.5-28.1-1.4-2.5-5.6-3.9-11.8-6.9z"})})}function of(){return l.jsx("footer",{className:"bg-gray-900 text-gray-300",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10",children:[l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsx(He,{to:"/",className:"flex items-center","aria-label":"Cherrinet — home",children:l.jsx("div",{className:"bg-white rounded-lg p-2 inline-flex",children:l.jsx("img",{src:Qo,alt:"Cherrinet",className:"h-8 w-auto"})})}),l.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Chennai's fastest growing Fibernet provider. Delivering blazing-fast internet to homes and businesses across the city."}),l.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[l.jsx("a",{href:"https://www.instagram.com/cherrinetsocial?igsh=MW1oenhjMTFxc2pkag==",target:"_blank",rel:"noreferrer",className:"w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors",children:l.jsx(u0,{className:"w-4 h-4"})}),l.jsx("a",{href:"https://wa.me/917358228999",target:"_blank",rel:"noreferrer",className:"w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors","aria-label":"Cherrinet WhatsApp",children:l.jsx(q0,{className:"w-4 h-4"})})]})]}),l.jsxs("div",{className:"flex flex-col gap-3",children:[l.jsx("h4",{className:"text-white mb-1",children:"Quick Links"}),[{label:"Home",path:"/"},{label:"Plans & Pricing",path:"/plans"},{label:"Check Coverage",path:"/coverage"},{label:"About Us",path:"/about"},{label:"Support",path:"/support"},{label:"G-Force (Business)",path:"/gforce"}].map(a=>l.jsx(He,{to:a.path,className:"text-sm text-gray-400 hover:text-white transition-colors",children:a.label},a.label))]}),l.jsxs("div",{className:"flex flex-col gap-3",children:[l.jsx("h4",{className:"text-white mb-1",children:"Support"}),["FAQs","Installation Guide","Speed Test","Report an Issue","Terms & Conditions","Privacy Policy"].map(a=>l.jsx("a",{href:"#",className:"text-sm text-gray-400 hover:text-white transition-colors",children:a},a))]}),l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsx("h4",{className:"text-white mb-1",children:"Contact Us"}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx(Ui,{className:"w-4 h-4 shrink-0 text-primary"}),l.jsx("a",{href:"tel:+914449303030",className:"text-sm text-gray-400 hover:text-white transition-colors",children:"+91 44 4930 3030"})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx(tf,{className:"w-4 h-4 shrink-0 text-primary"}),l.jsx("a",{href:"mailto:support@cherrinet.in",className:"text-sm text-gray-400 hover:text-white transition-colors",children:"support@cherrinet.in"})]})]})]}),l.jsxs("div",{className:"mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4",children:[l.jsx("p",{className:"text-sm text-gray-500",children:"© 2026 Cherrinet Fibernet Pvt. Ltd. All rights reserved."}),l.jsx("p",{className:"text-sm text-gray-500",children:"Made with care in Chennai, India"})]})]})})}function J0(){const[a,i]=M.useState(!1),[o,c]=M.useState([{from:"bot",text:"Hi! I'm Cherry, Cherrinet's virtual assistant. How can I help you today?"}]),[d,m]=M.useState(""),f=p=>{const g=p.toLowerCase();return/(hi|hello|hey|good morning|good afternoon|good evening)/.test(g)?"Hello! I'm Cherry, Cherrinet's virtual assistant. I can help with plans, installation, coverage, billing, G-Force business plans, and OTT add-ons. Ask me anything about the site or our services.":/(gforce|g-force|business fiber|business plan|enterprise|sme|gforce plan)/.test(g)?"G-Force is Cherrinet's business-grade service for offices and enterprises. We offer plans like G-FORCE 2, G-FORCE 6, G-FORCE 10, plus SME Silver, Gold, Diamond, and Platinum. Visit /gforce for business broadband details and pricing.":/(refer|reference|page link|link me|direct me|which page|which section|where can i find|where is)/.test(g)?/(home|main|landing)/.test(g)?"Home page: / — includes the hero, quick plans, coverage checker, and CTA sections.":/(plans|pricing)/.test(g)?"Plans page: /plans — compare broadband plans, speeds, and pricing.":/(coverage|area|availability|pin|pincode|zipcode)/.test(g)?"Coverage page: /coverage — check who we serve by entering your 6-digit PIN code.":/(support|help|faq|chat|customer support)/.test(g)?"Support page: /support — FAQs, contact options, and the Cherry Bot chat are available here.":/(enquire|contact|quote|request)/.test(g)?"Enquire page: /enquire — submit your details and our team will get back to you with a quote.":/(about|company|who are you)/.test(g)?"About page: /about — learn more about Cherrinet and our services.":/(gforce|business)/.test(g)?"G-Force page: /gforce — business plans, pricing, and enquiry options for enterprise customers.":"Here are the main pages: Home /, Plans /plans, Coverage /coverage, Support /support, Enquire /enquire, G-Force /gforce.":/(website|site|pages|navigation|about the site|overall|what pages|what does the site)/.test(g)?"This site includes Home, Plans, Coverage, Support, Enquire, and G-Force pages. Use Plans for pricing, Coverage for availability, Support for help, and G-Force for business services.":/(plan|price|cost|₹|subscription)/.test(g)?"Our plans start from ₹479/month for 50 Mbps and go up to ₹1,999/month for 1 Gbps. Visit /plans for the full comparison and current offers.":/(install|installation|setup)/.test(g)?"Installation is free and typically completed within 24-48 hours. Our technician will set up the fiber cable, ONT device, and Wi-Fi router in about 1-2 hours.":/(slow|speed|issue|disconnect|downtime|buffer)/.test(g)?"Sorry to hear about the issue. Please restart your router first. If the problem persists, our technical team can diagnose it remotely or send a technician. Call +91 44 4930 3030 for urgent support.":/(coverage|area|available|pin|pincode|zipcode|location)/.test(g)?"You can check coverage on our Coverage page by entering your 6-digit PIN code. We serve 100+ localities across Chennai and are expanding fast.":/(bill|billing|payment|refund|charge|due)/.test(g)?"For billing and payment help, you can use UPI, cards, net banking, or auto-debit. If you need billing support, please call +91 44 4930 3030 or email support@cherrinet.in.":/(ott|add-on|addon|subscription|hotstar|zee5|sonyliv)/.test(g)?"After activation, you'll receive OTT login details by SMS and email. You can also add more OTT services to your plan through our app or support team.":/(cancel|upgrade|downgrade|change plan|switch plan)/.test(g)?"Yes, you can upgrade or downgrade anytime. Plan changes usually take effect from the next billing cycle. Contact support to get this done quickly.":"I'm sorry, I don't have that exact answer right now. For immediate help, call +91 44 4930 3030 or email support@cherrinet.in. You can also ask me about plans, installation, coverage, speeds, billing, G-Force business service, or OTT add-ons."},A=()=>{if(!d.trim())return;const p=d.trim();c(g=>[...g,{from:"user",text:p}]),m(""),setTimeout(()=>{const g=f(p);c(v=>[...v,{from:"bot",text:g}])},600)};return l.jsxs(l.Fragment,{children:[a&&l.jsxs("div",{className:"fixed bottom-4 right-4 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden",children:[l.jsxs("div",{className:"flex items-center justify-between p-4 bg-primary text-white",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center",children:l.jsx("span",{className:"text-sm font-bold text-white",children:"C"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm",children:"Cherry Bot"}),l.jsx("p",{className:"text-xs text-[#FBEEEF]",children:"Online"})]})]}),l.jsx("button",{onClick:()=>i(!1),className:"p-1 rounded hover:bg-white/20 transition-colors cursor-pointer","aria-label":"Close chat",children:l.jsx(on,{className:"w-5 h-5"})})]}),l.jsx("div",{className:"flex-1 p-4 flex flex-col gap-3 max-h-80 overflow-y-auto",children:o.map((p,g)=>l.jsxs("div",{className:`flex items-start gap-2 ${p.from==="user"?"flex-row-reverse":""}`,children:[l.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${p.from==="bot"?"bg-secondary":"bg-primary"}`,children:p.from==="bot"?l.jsx("span",{className:"text-xs font-bold text-white",children:"C"}):l.jsx(_0,{className:"w-3.5 h-3.5 text-white"})}),l.jsx("div",{className:`px-3.5 py-2.5 rounded-2xl text-sm max-w-[75%] ${p.from==="bot"?"bg-muted text-foreground rounded-tl-md":"bg-primary text-white rounded-tr-md"}`,children:p.text})]},g))}),l.jsx("div",{className:"p-3 border-t border-border",children:l.jsxs("div",{className:"flex gap-2",children:[l.jsx("input",{type:"text",value:d,onChange:p=>m(p.target.value),onKeyDown:p=>p.key==="Enter"&&A(),placeholder:"Type a message...",className:"flex-1 px-4 py-2.5 rounded-xl bg-muted border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"}),l.jsx("button",{onClick:A,disabled:!d.trim(),className:`p-2.5 rounded-xl transition-colors cursor-pointer ${d.trim()?"bg-primary text-white hover:bg-[#8E1B22]":"bg-muted text-muted-foreground"}`,"aria-label":"Send message",children:l.jsx(w0,{className:"w-4 h-4"})})]})})]}),!a&&l.jsx("button",{onClick:()=>i(!0),className:"fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#8E1B22] transition-colors cursor-pointer hover:scale-105","aria-label":"Open Cherrinet chat support",children:l.jsx(af,{className:"w-6 h-6"})})]})}function om(){return l.jsxs("div",{className:"flex flex-col min-h-screen",children:[l.jsx(W0,{}),l.jsx("main",{className:"flex-1",children:l.jsx(Bm,{})}),l.jsx(of,{}),l.jsx(J0,{})]})}const Q0="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function Ea(a){const[i,o]=M.useState(!1),c=()=>{o(!0)},{src:d,alt:m,style:f,className:A,...p}=a;return i?l.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${A??""}`,style:f,children:l.jsx("div",{className:"flex items-center justify-center w-full h-full",children:l.jsx("img",{src:Q0,alt:"Error loading image",...p,"data-original-url":d})})}):l.jsx("img",{src:d,alt:m,className:A,style:f,...p,onError:c})}const Z0=[621113,621212,625018,627007,600069,625016,625007,625014,641005,620009,620010,625107,620001,600049,627005,627001,600021,625009,600081,600080,625001,625003,636002,636016,621104,600095,641025,643001,600077,600013,600041,625020,621220,620020,641030,627002,625531,600059,627004,641001,627003,627006,627009,60007,627011,600099,641006,600053,627358,600128,641018,600096,600087,605008,600122,626117,605013,605001,620018,641015,605005,605010,600018,605009,600004,605012,627353,605006,600007,620003,605011,641045,605003,600125,620017,641004,641035,411046,641002,620008,641009,620021,641038,641016,620007,641012,606601,641028,625010,620023,628002,628008,600116,600010,600040,600098,600006,625534,600011,600024,600078,603112,600058,600008,600056,600032,605004,600001,636007,600119,600113,600076,636004,600097,600083,600002,600031,600079,600082,600089,605110,600106,600028,600112,600003,600115,600102,603103,600118,600043,641008,600084,600029,600091,600075,600034,600100,600052,600012,600030,600101,600085,600020,600023,600044,626108,600117,600017,600042,600050,626102,600014,600035,625706,636005,636302,636030,641014,641011,636001,636201,636006,636009,641044,600108,600094,641049,600104,641037,625022,600037,600045,621133,629002,629163,600166,613101,613104,621216,631501,621716,625523,629001,630003,641042,621109,625002,600067,625512,612102,620002,620004,628004,604001,629501,627803,627357,600071,629003,627811,612504,622515,625518,630002,612101,629168,609808,612503,627008,629153,624202,628003,624005,620006,628001,628301,629165,629175,625601,603104,613602,628005,629115,621117,627818,625017,624001,631504,603102,604405,604403,609806,609801,629151,627809,612001,629152,621107,612002,621717,630307,632503,625005,629502,624101,612502,600039,631606,600107,629171,628105,600066,629193,621708,627010,600026,602301,631502,600070,632001,621103,621219,627807,621108,625006,625703,600005,624003,629810,629173,630001,625547,625702,632013,604408,627805,620102,627351,605401,621115,621712,628809,643006,624004,641604,628501,625582,603109,600073,612105,643002,632401,626142,627855,605602,625104,632509,604303,636010,621110,629401,627114,628721,629154,625301,500058,628903,600054,628103,600086,627802,628502,629802,400063,628402,628552,627352,628902,600019,629172,600048,600123,624220,621713,624103,602105,621116,601301,627359,636008,600033,600062,629252,626201,626205,600093,625707,629809,629803,627713,600063,621621,628702,628401,560037,600129,625012,642006,642001,627425,642002,613103,625023,627133,506001,629805,629101,629177,110049,629251,629901,500081,629602,621101,600015,628622,636015,628503,560102,629158,600027,603210,629159,641402,605104,695506,603110,629162,629004,500050,627851,110094,411011,627853,695502,627415,629851,641027,606202,642003,627719,628615,629804,600126,606213,600092,641013,628101,606201,629167,606206,600022,641033,621102,627117,629156,626802,629176,621704,641054,641003,621126,627035,641043,621011,421003,625004,500018,600016,560003,605109,641036,636003,620176,643007,606602,622001,629201,629157,629169,629155,626018,609804,630006,611104,612204,609807,628617,625019,628802,631605,625533,627814,629852,607107,624708,695503,631601,628151,630004,630202,627751,627810,624002,625708,606603,560041,629160,604102,600055,643005,627414,602109,624306,624211,613002,603127,624707,621701,600051,560047,629180,625503,627127,622257,627109,600064,628716,614016,500003,600060,627857,619154,614621,606204,600131,636140,612902,621709,627428,604406,400021,627861,600088,602701,628152,627806,678101,620012,625516,625402,629166,600047,606115,531060,606402,626140,605111,6000082,600061,560018,602101,621315,636202,612401,627356,606061,624010,621211,613007,628901,626125,604307,603001,600090,440013,560008,600065,602024,625203,613005,625520,603204,600109,601101,624705,630551,605007,613001,625701,624204,632512,632501,642123,626123,628713,621652,629161,626141,630005,6050008,641029,622002,630501,642104,627452,621811,627813,636014,652703,623504,606208,619172,201301,600072,411037,606203,627116,621805,628208,530016,600038,628303,641019,62007,607201,630106,620005,626136,639153,612201,400028,625060,603008,637403,609003,632513,625120,641026,631210,613601,612602,627501,628210,632521,627862,733101,628217,641010,624615,630107,625122,623115,126102,630313,628718,629701,600120,625704,627808,624104,627757,629203,627854,624102,627423,606401,629801,624303,421301,605702,608201,515408,641048,621705,600025,560070,605108,560027,641041,604002,612216,621106,625603,636401,631603,630108,612107,625011,600009,60601,900058,600952,632008,625605,624307,626126,613008,637212,624802,613009,691001,626149,603106,607803,624308,629704,642120,641664,623601,625705,609802,629301,606207,625026,621005,606111,625025,621010,636101,627102,641301,620026,650010,500045,606611,601203,62001,609811,629269,632012,624219,624007,632506,612610,603308,628952,625709,629403,929193,613102,627103,642004,400072,411057,560038,627602,642101,627827,628203,621804,533222,695006,390002,628714,629402,682024,629521,627201,627107,625008,626122,400080,60016,639101,600601,610102,621114,638701,624709,625513,628601,627401,628712,560099,679533,625515,636705,629179,631102,613105,400051,629601,400710,400200,604208,629164,637102,682017,637001,621703,929803,637501,627856,639401,625015,605107,60010,600605,603115,605002,605305,6066,629702,620019,110017,600057,609803,382715,621213,695504,628613,122050,602001,624208,606604,627604,411030,600068,629170,686001,400067,636903,662002,627106,562106,625631,642109,607303,636102,752013,641652];let So=null;function X0(){return So||(So=new Set(Z0.map(a=>a.toString()))),So}function ex(a){const i=a.toString().trim();return i?X0().has(i):!1}function Ko(a){const i=a.trim();if(!i)return{isValid:!1,isServiceable:!1,error:"PIN code is required"};if(!/^\d+$/.test(i))return{isValid:!1,isServiceable:!1,error:"PIN code must contain only digits"};if(i.length!==6)return{isValid:!1,isServiceable:!1,error:"PIN code must be 6 digits"};const o=ex(i);return{isValid:!0,isServiceable:o,error:o?void 0:`Service not available in area ${i} yet`}}function tx(){const[a,i]=M.useState(""),[o,c]=M.useState(!1),[d,m]=M.useState(!1),[f,A]=M.useState(null),[p,g]=M.useState(null);M.useMemo(()=>a?Ko(a):null,[a]);const v=M.useCallback(async()=>{if(a.length!==6){A("PIN code must be 6 digits");return}m(!0),A(null);try{await new Promise(S=>setTimeout(S,800));const I=Ko(a);g(I),I.isValid?(c(I.isServiceable),I.isServiceable||A(I.error||"Service not available in your area yet")):(A(I.error||"Invalid PIN code"),c(!1))}catch{A("Failed to check serviceability. Please try again."),c(!1)}finally{m(!1)}},[a]),y=M.useCallback(()=>{i(""),c(!1),A(null),g(null)},[]);return{pincode:a,isServiceable:o,isChecking:d,error:f,setPincode:i,checkServiceability:v,reset:y,validationResult:p}}async function Ki({subject:a,body:i,replyTo:o}){const c=await fetch("/api/send-mail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subject:a,body:i,replyTo:o})});if(!c.ok){const d=await c.json().catch(()=>null),m=(d==null?void 0:d.error)||"Failed to send email.";throw new Error(m)}return c.json()}function uf({onCovered:a,compact:i=!1}){const{pincode:o,setPincode:c,isChecking:d,checkServiceability:m,validationResult:f}=tx(),[A,p]=M.useState(""),[g,v]=M.useState(!1),[y,I]=M.useState(null),[S,H]=M.useState(!1),[O,D]=M.useState("idle");M.useEffect(()=>{f&&!d&&(f.isServiceable?(D("covered"),a==null||a(o)):D("not-covered"))},[f,d,o,a]);const b=async()=>{o.length===6&&(D("checking"),await m())},K=async()=>{if(A){I(null),H(!0);try{await Ki({subject:`Coverage notify request for ${o||"unknown PIN"}`,body:[`PIN code: ${o||"N/A"}`,`Notify email: ${A}`,"","A user requested coverage notification when this area becomes serviceable."].join(`
`)}),v(!0)}catch(G){console.error(G),I("Unable to send notification request. Please try again later.")}finally{H(!1)}}};return l.jsxs("div",{className:`flex flex-col gap-4 ${i?"":"max-w-lg"}`,children:[l.jsxs("div",{className:"flex gap-2",children:[l.jsxs("div",{className:"flex-1 relative",children:[l.jsx(Li,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"}),l.jsx("input",{type:"text",value:o,onChange:G=>{c(G.target.value.replace(/\D/g,"").slice(0,6)),O!=="idle"&&O!=="checking"&&D("idle"),v(!1)},onKeyDown:G=>G.key==="Enter"&&b(),placeholder:"Enter your PIN code",className:"w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"})]}),l.jsx("button",{onClick:b,disabled:o.length!==6||O==="checking",className:`px-6 py-3 rounded-xl text-sm transition-all cursor-pointer flex items-center gap-2 shrink-0 ${o.length===6&&O!=="checking"?"bg-primary text-white hover:bg-[#8E1B22]":"bg-gray-200 text-gray-400 cursor-not-allowed"}`,children:O==="checking"?l.jsx(bo,{className:"w-4 h-4 animate-spin"}):"Check"})]}),O==="covered"&&l.jsxs("div",{className:"flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl animate-in fade-in",children:[l.jsx(sl,{className:"w-5 h-5 text-green-600 shrink-0 mt-0.5"}),l.jsxs("div",{children:[l.jsxs("p",{className:"text-sm text-green-800",children:["Great news! Cherrinet is available in your area (",o,")."]}),l.jsx("p",{className:"text-xs text-green-600 mt-1",children:"High-speed fiber broadband can be installed at your location."})]})]}),O==="not-covered"&&l.jsxs("div",{className:"flex flex-col gap-3",children:[l.jsxs("div",{className:"flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl animate-in fade-in",children:[l.jsx(Zg,{className:"w-5 h-5 text-amber-600 shrink-0 mt-0.5"}),l.jsxs("div",{children:[l.jsxs("p",{className:"text-sm text-amber-800",children:["We're not in your area yet (",o,"), but we're expanding fast!"]}),l.jsx("p",{className:"text-xs text-amber-600 mt-1",children:"Sign up below and we'll notify you when we arrive."})]})]}),g?l.jsxs("div",{className:"flex items-center gap-2 p-3 bg-green-50 rounded-xl text-sm text-green-700",children:[l.jsx(sl,{className:"w-4 h-4"}),"We'll notify you at ",A," when coverage is available!"]}):l.jsxs("div",{className:"flex flex-col gap-3",children:[l.jsxs("div",{className:"flex gap-2",children:[l.jsx("input",{type:"email",value:A,onChange:G=>p(G.target.value),placeholder:"Enter your email for updates",className:"flex-1 px-4 py-3 rounded-xl bg-input-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"}),l.jsx("button",{onClick:K,disabled:!A||S,className:`px-5 py-3 rounded-xl text-sm transition-all cursor-pointer flex items-center gap-2 shrink-0 ${A&&!S?"bg-foreground text-white hover:bg-gray-800":"bg-gray-200 text-gray-400 cursor-not-allowed"}`,children:S?l.jsx(bo,{className:"w-4 h-4 animate-spin"}):l.jsxs(l.Fragment,{children:[l.jsx(Hg,{className:"w-4 h-4"}),"Notify Me"]})})]}),y&&l.jsx("p",{className:"text-sm text-destructive",children:y})]})]})]})}const rx=[{icon:Oi,title:"Lightning Fast",desc:"Speeds up to 1 Gbps, with uploads as fast as your downloads. Built for streaming, gaming, and everything in between."},{icon:lf,title:"99.9% Uptime",desc:"Always on, always reliable. Backed by redundant fiber infrastructure you can count on, every hour of the day."},{icon:Zm,title:"24/7 Support",desc:"Real humans, ready to help. Whenever you need us, day or night."},{icon:ef,title:"Free Installation",desc:"We set it all up at no cost. No hidden charges, no fine print, no surprises."}],ax=[{value:"10+ Years",label:"Powering Homes"},{value:"99.9%",label:"Network Uptime"},{value:"200K+",label:"Active Subscribers"},{value:"4.8/5",label:"Customer Rating"}],nx=[{name:"Budget Plan",tagline:"50 Mbps for light browsing",speed:"50",price:"479",data:"Unlimited",ott:["Hotstar","ZEE5","SonyLIV","Amazon Prime"],benefits:["Ideal for browsing and social media","Unlimited data","Free router included"]},{name:"Family Plan",tagline:"100 Mbps for family streaming",speed:"100",price:"679",data:"Unlimited",ott:["Hotstar","ZEE5","SonyLIV","Amazon Prime"],benefits:["Perfect for multiple users","Unlimited data","Free dual-band router"]},{name:"Premium Plan",tagline:"150 Mbps for heavy streaming",speed:"150",price:"799",popular:!0,data:"Unlimited",ott:["Hotstar","ZEE5","SonyLIV","Amazon Prime"],benefits:["Great for 4K streaming","Unlimited data","High-performance router included"]},{name:"Premium Plan",tagline:"200 Mbps for gaming and work",speed:"200",price:"999",data:"Unlimited",ott:["Hotstar","ZEE5","SonyLIV","Amazon Prime"],benefits:["Optimized for gaming and remote work","Unlimited data","Free Wi-Fi 6 router"]},{name:"Premium Plan",tagline:"500 Mbps for large homes",speed:"500",price:"1199",data:"Unlimited",ott:["Hotstar","ZEE5","SonyLIV","Amazon Prime"],benefits:["Two routers included","Unlimited data","Best for multiple streaming devices"]},{name:"Power Plan",tagline:"1000 Mbps for premium users",speed:"1000",price:"1999",data:"Unlimited",ott:["Hotstar","ZEE5","SonyLIV","Amazon Prime"],benefits:["Ultimate speed for big homes and offices","Unlimited data","Two high-speed routers included"]}];function um(){return l.jsxs("div",{className:"flex flex-col",children:[l.jsxs("section",{className:"hero-section relative overflow-hidden bg-[#1a2f58] md:bg-gradient-to-br md:from-gray-900 md:via-gray-900 md:to-[#3A0A0E]",children:[l.jsx("div",{className:"hidden md:block absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent"}),l.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 md:py-28 lg:py-36",children:l.jsxs("div",{className:"max-w-2xl flex flex-col gap-6",children:[l.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full w-fit",children:[l.jsx(F0,{className:"w-4 h-4 text-[#D1444C]"}),l.jsx("span",{className:"text-sm text-[#F5D7D9]",children:"India's Most Trusted Fibernet Provider"})]}),l.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl text-white leading-tight",children:[l.jsx("span",{className:"text-[#D1444C]",children:"Blazing Fast Fibre"}),l.jsx("br",{}),"Made for the Way You Live Online."]}),l.jsx("p",{className:"text-lg text-gray-300 max-w-lg",children:"Stream. Game. Work from home. Cherrinet's pure fiber-optic broadband keeps it all running smooth."}),l.jsxs("div",{className:"mt-2 flex flex-col gap-3",children:[l.jsx("p",{className:"text-sm text-gray-400",children:"Check if we're available in your area:"}),l.jsx(uf,{compact:!0})]}),l.jsxs("div",{className:"flex items-center gap-6 mt-4",children:[l.jsxs(He,{to:"/plans",className:"flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl text-sm hover:bg-[#8E1B22] transition-colors",children:["View Plans",l.jsx(St,{className:"w-4 h-4"})]}),l.jsxs("a",{href:"#features",className:"flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm",children:[l.jsx("div",{className:"w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center",children:l.jsx(Co,{className:"w-4 h-4 ml-0.5"})}),"Watch Demo"]})]})]})}),l.jsxs("div",{className:"block md:hidden w-full relative -mt-1",children:[l.jsx("div",{className:"absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1a2f58] to-transparent pointer-events-none"}),l.jsx(Ea,{src:"/images/Mob Hero cherrinet.png",alt:"Cherrinet Banner",className:"w-full h-auto"})]})]}),l.jsx("section",{className:"bg-white border-b border-border",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:l.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-8",children:ax.map((a,i)=>l.jsxs("div",{className:"flex flex-col items-center gap-1 text-center",children:[l.jsx("span",{className:"text-3xl lg:text-4xl text-primary",children:a.value}),l.jsx("span",{className:"text-sm text-muted-foreground",children:a.label})]},i))})})}),l.jsx("section",{id:"features",className:"bg-muted/40",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center mb-14",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Why Cherrinet"}),l.jsx("h2",{className:"text-3xl lg:text-4xl text-foreground",children:"Built for the Way You Live Online"}),l.jsxs("p",{className:"text-muted-foreground max-w-md",children:["Streaming, gaming, working, learning.",l.jsx("br",{}),"Cherrinet delivers pure fiber-optic internet you can rely on, every single day."]})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:rx.map((a,i)=>l.jsxs("div",{className:"flex flex-col gap-4 p-6 bg-white rounded-2xl border border-border hover:shadow-lg hover:border-primary/20 transition-all",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-secondary flex items-center justify-center",children:l.jsx(a.icon,{className:"w-6 h-6 text-primary"})}),l.jsx("h3",{className:"text-foreground",children:a.title}),l.jsx("p",{className:"text-sm text-muted-foreground",children:a.desc})]},i))})]})}),l.jsx("section",{className:"bg-white",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center mb-14",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Plans"}),l.jsx("h2",{className:"text-3xl lg:text-4xl text-foreground",children:"A Plan for Every Home"}),l.jsx("p",{className:"text-muted-foreground max-w-md",children:"From casual browsing to heavy gaming, solo work-from-home to full-house streaming, there's a Cherrinet plan that fits the way you live."})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch",children:nx.slice(0,3).map((a,i)=>{var o;return l.jsxs("div",{className:`relative flex flex-col gap-5 p-7 rounded-2xl border-2 transition-all hover:shadow-lg ${a.popular?"border-primary bg-secondary/30 shadow-md":"border-border hover:border-primary/30"}`,children:[a.popular&&l.jsx("span",{className:"absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full",children:"Most Popular"}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:a.name}),l.jsx("p",{className:"text-sm text-muted-foreground",children:a.tagline})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:"text-4xl text-foreground",children:a.speed}),l.jsx("span",{className:"text-sm text-muted-foreground",children:"Mbps"})]}),l.jsxs("div",{className:"flex items-baseline gap-0.5 pb-4 border-b border-border",children:[l.jsx("span",{className:"text-sm text-muted-foreground",children:"₹"}),l.jsx("span",{className:"text-3xl text-foreground",children:a.price}),l.jsx("span",{className:"text-sm text-muted-foreground",children:"/month"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Oi,{className:"w-4 h-4 text-primary"}),l.jsxs("span",{className:"text-sm text-foreground",children:[a.data," Data"]})]}),l.jsx("ul",{className:"flex flex-col gap-2.5",children:a.benefits.map((c,d)=>l.jsxs("li",{className:"flex items-start gap-2",children:[l.jsx(Jm,{className:"w-4 h-4 text-primary mt-0.5 shrink-0"}),l.jsx("span",{className:"text-sm text-foreground",children:c})]},d))}),((o=a.ott)==null?void 0:o.length)>0&&l.jsxs("div",{className:"flex flex-col gap-2 pt-3 border-t border-border",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(G0,{className:"w-4 h-4 text-primary"}),l.jsx("span",{className:"text-xs text-muted-foreground uppercase tracking-wider",children:"OTT Included"})]}),l.jsx("div",{className:"flex flex-wrap gap-1.5",children:a.ott.map((c,d)=>l.jsx("span",{className:"text-xs px-2 py-1 rounded-md bg-secondary text-foreground",children:c},d))})]}),l.jsx(He,{to:"/plans",className:`mt-auto w-full py-2.5 rounded-xl text-sm text-center transition-colors ${a.popular?"bg-primary text-white hover:bg-[#8E1B22]":"bg-foreground text-white hover:bg-gray-800"}`,children:"Learn More"})]},i)})}),l.jsx("div",{className:"text-center mt-8",children:l.jsxs(He,{to:"/plans",className:"inline-flex items-center gap-2 text-primary hover:text-[#8E1B22] transition-colors text-sm",children:["View all plans and compare",l.jsx(St,{className:"w-4 h-4"})]})})]})}),l.jsx("section",{className:"bg-gray-900 text-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[l.jsxs("div",{className:"flex flex-col gap-6",children:[l.jsx("span",{className:"text-sm text-[#D1444C] uppercase tracking-wider",children:"TRUSTED FROM DAY ONE"}),l.jsx("h2",{className:"text-3xl lg:text-4xl text-white",children:"Connecting Homes & Businesses Since 2015"}),l.jsx("p",{className:"text-gray-400 leading-relaxed",children:"For nearly a decade, Cherrinet has been delivering reliable fiber internet to over 150,000 homes and businesses. We're not just an ISP. We're the internet partner you can count on."}),l.jsxs("div",{className:"flex items-center gap-6 mt-2",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(sf,{className:"w-5 h-5 text-[#D1444C]"}),l.jsx("span",{className:"text-sm text-gray-300",children:"200K+ Users"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Kg,{className:"w-5 h-5 text-[#D1444C]"}),l.jsx("span",{className:"text-sm text-gray-300",children:"TRAI Certified"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(n0,{className:"w-5 h-5 text-[#D1444C]"}),l.jsx("span",{className:"text-sm text-gray-300",children:"100+ Areas"})]})]}),l.jsxs(He,{to:"/about",className:"mt-2 inline-flex items-center gap-2 text-[#D1444C] hover:text-[#E47A82] transition-colors text-sm w-fit",children:["Learn more about us",l.jsx(St,{className:"w-4 h-4"})]})]}),l.jsx("div",{className:"rounded-2xl overflow-hidden",children:l.jsx(Ea,{src:"/images/chennai.jpg.jpeg",alt:"Chennai skyline",className:"w-full h-72 lg:h-96 object-cover"})})]})})}),l.jsx("section",{className:"bg-gradient-to-r from-[#B2222B] to-[#8E1B22]",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-6",children:[l.jsxs("div",{className:"flex flex-col gap-2 text-center lg:text-left",children:[l.jsx("h2",{className:"text-3xl text-white",children:"Ready to switch to Cherrinet?"}),l.jsx("p",{className:"text-[#FBEEEF]",children:"Get started in minutes. Free installation and no lock-in contracts."})]}),l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx(He,{to:"/plans",className:"bg-white text-primary px-7 py-3.5 rounded-xl text-sm hover:bg-gray-100 transition-colors",children:"Browse Plans"}),l.jsx(He,{to:"/coverage",className:"border border-white/40 text-white px-7 py-3.5 rounded-xl text-sm hover:bg-white/10 transition-colors",children:"Check Coverage"})]})]})})})]})}function lx({plan:a,onSelect:i}){return l.jsxs("div",{className:`relative flex flex-col rounded-2xl border-2 transition-all hover:shadow-lg ${a.popular?"border-primary shadow-md shadow-[#F5D7D9]":"border-border hover:border-primary/30"}`,children:[a.popular&&l.jsxs("div",{className:"absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs flex items-center gap-1",children:[l.jsx(O0,{className:"w-3 h-3"}),"Most Popular"]}),l.jsxs("div",{className:"p-6 flex flex-col gap-4 flex-1",children:[l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Oi,{className:`w-5 h-5 ${a.popular?"text-primary":"text-muted-foreground"}`}),l.jsx("span",{className:"text-sm text-muted-foreground uppercase tracking-wider",children:a.name})]}),l.jsxs("div",{className:"flex items-baseline gap-1 mt-2",children:[l.jsx("span",{className:"text-4xl text-foreground",children:a.speed}),l.jsx("span",{className:"text-muted-foreground text-sm",children:"Mbps"})]})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:"text-sm text-muted-foreground",children:"₹"}),l.jsx("span",{className:"text-3xl text-foreground",children:a.price}),l.jsx("span",{className:"text-sm text-muted-foreground",children:"/month"})]}),l.jsxs("div",{className:"px-3 py-2 bg-muted rounded-lg text-sm text-center",children:[a.data," Data"]}),l.jsx("div",{className:"flex flex-col gap-2.5 mt-2",children:a.benefits.map((o,c)=>l.jsxs("div",{className:"flex items-start gap-2.5",children:[l.jsx("div",{className:"w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5",children:l.jsx(Jm,{className:"w-3 h-3 text-green-600"})}),l.jsx("span",{className:"text-sm text-muted-foreground",children:o})]},c))}),a.ott&&a.ott.length>0&&l.jsxs("div",{className:"mt-2 p-3 bg-secondary rounded-lg",children:[l.jsx("p",{className:"text-xs text-secondary-foreground mb-2",children:"Bundled OTT"}),l.jsx("div",{className:"flex flex-wrap gap-1.5",children:a.ott.map((o,c)=>l.jsx("span",{className:"px-2.5 py-1 bg-white rounded-md text-xs text-foreground border border-border",children:o},c))}),l.jsx("p",{className:"text-xs text-muted-foreground mt-2",children:"All OTTs available from Rs.29/month"})]})]}),l.jsx("div",{className:"p-6 pt-0",children:l.jsx("button",{onClick:()=>i(a),className:`w-full py-3 rounded-xl text-sm transition-colors cursor-pointer ${a.popular?"bg-primary text-white hover:bg-[#8E1B22]":"bg-foreground text-white hover:bg-gray-800"}`,children:"Choose Plan"})})]})}function cf({selectedPlan:a,onClose:i}){const[o,c]=M.useState({name:"",phone:"",email:"",pincode:"",plan:(a==null?void 0:a.name)||""}),[d,m]=M.useState({}),[f,A]=M.useState({}),[p,g]=M.useState(!1),[v,y]=M.useState(!1),[I,S]=M.useState(null),H=G=>{const ae={};if(G.name.trim()?G.name.trim().length<2&&(ae.name="Name must be at least 2 characters"):ae.name="Name is required",G.phone.trim()?/^[6-9]\d{9}$/.test(G.phone.trim())||(ae.phone="Enter a valid 10-digit Indian mobile number"):ae.phone="Phone number is required",G.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(G.email)&&(ae.email="Enter a valid email address"),!G.pincode.trim())ae.pincode="PIN code is required";else{const oe=Ko(G.pincode.trim());oe.isValid?oe.isServiceable||(ae.pincode="Service not available in your area yet. You can sign up for notifications on the Coverage page."):ae.pincode=oe.error||"Invalid PIN code"}return ae},O=(G,ae)=>{const oe={...o,[G]:ae};if(c(oe),f[G]){const ye=H(oe);m(U=>({...U,[G]:ye[G]}))}},D=G=>{A(oe=>({...oe,[G]:!0}));const ae=H(o);m(oe=>({...oe,[G]:ae[G]}))},b=()=>{const G=H(o);return Object.keys(G).length===0&&o.name&&o.phone&&o.pincode},K=async G=>{var U;G.preventDefault(),A({name:!0,phone:!0,email:!0,pincode:!0});const ae=H(o);if(m(ae),Object.keys(ae).length>0)return;const oe=`Cherrinet Lead Request - ${o.name}`,ye=[`Name: ${o.name}`,`Phone: +91 ${o.phone}`,`Email: ${o.email||"N/A"}`,`Pincode: ${o.pincode}`,`Selected Plan: ${o.plan||"N/A"}`,"","Please contact this lead to confirm installation details.","","Source: Cherrinet website lead capture form"].join(`
`);y(!0),S(null);try{await Ki({subject:oe,body:ye,replyTo:(U=o.email)!=null&&U.trim()?o.email.trim():void 0}),g(!0)}catch(ie){console.error(ie),S("Unable to send your request. Please try again later.")}finally{y(!1)}};return p?l.jsxs("div",{className:"flex flex-col items-center gap-4 py-10 px-6 text-center",children:[l.jsx("div",{className:"w-16 h-16 rounded-full bg-green-50 flex items-center justify-center",children:l.jsx(sl,{className:"w-8 h-8 text-green-600"})}),l.jsx("h3",{className:"text-foreground",children:"Thank You!"}),l.jsx("p",{className:"text-sm text-muted-foreground max-w-sm",children:"We've received your request. Our team will contact you within 24 hours to set up your connection."}),a&&l.jsxs("div",{className:"mt-2 px-4 py-2 bg-secondary rounded-lg text-sm text-secondary-foreground",children:["Selected Plan: ",a.name," — ",a.speed," Mbps"]}),i&&l.jsx("button",{onClick:i,className:"mt-4 px-6 py-2 bg-primary text-white rounded-lg text-sm hover:bg-[#8E1B22] transition-colors cursor-pointer",children:"Close"})]}):l.jsxs("form",{onSubmit:K,className:"flex flex-col gap-5",children:[a&&l.jsxs("div",{className:"p-4 bg-secondary rounded-xl flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-muted-foreground",children:"Selected Plan"}),l.jsxs("p",{className:"text-foreground",children:[a.name," — ",a.speed," Mbps"]})]}),l.jsxs("p",{className:"text-foreground",children:["₹",a.price,"/mo"]})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsxs("label",{className:"text-sm text-foreground",children:["Full Name ",l.jsx("span",{className:"text-primary",children:"*"})]}),l.jsx("input",{type:"text",value:o.name,onChange:G=>O("name",G.target.value),onBlur:()=>D("name"),placeholder:"Enter your full name",className:`px-4 py-3 rounded-xl bg-input-background border transition-colors text-sm ${f.name&&d.name?"border-destructive focus:ring-destructive/20":f.name&&!d.name&&o.name?"border-green-500 focus:ring-green-500/20":"border-border focus:ring-primary/20"} focus:outline-none focus:ring-2`}),f.name&&d.name&&l.jsxs("div",{className:"flex items-center gap-1.5 text-destructive",children:[l.jsx(Pi,{className:"w-3.5 h-3.5"}),l.jsx("span",{className:"text-xs",children:d.name})]})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsxs("label",{className:"text-sm text-foreground",children:["Phone Number ",l.jsx("span",{className:"text-primary",children:"*"})]}),l.jsxs("div",{className:"flex",children:[l.jsx("span",{className:"px-3 py-3 bg-muted border border-r-0 border-border rounded-l-xl text-sm text-muted-foreground flex items-center",children:"+91"}),l.jsx("input",{type:"tel",value:o.phone,onChange:G=>O("phone",G.target.value.replace(/\D/g,"").slice(0,10)),onBlur:()=>D("phone"),placeholder:"98765 43210",className:`flex-1 px-4 py-3 rounded-r-xl bg-input-background border transition-colors text-sm ${f.phone&&d.phone?"border-destructive focus:ring-destructive/20":f.phone&&!d.phone&&o.phone?"border-green-500 focus:ring-green-500/20":"border-border focus:ring-primary/20"} focus:outline-none focus:ring-2`})]}),f.phone&&d.phone&&l.jsxs("div",{className:"flex items-center gap-1.5 text-destructive",children:[l.jsx(Pi,{className:"w-3.5 h-3.5"}),l.jsx("span",{className:"text-xs",children:d.phone})]})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsxs("label",{className:"text-sm text-foreground",children:["Email ",l.jsx("span",{className:"text-muted-foreground text-xs",children:"(optional)"})]}),l.jsx("input",{type:"email",value:o.email,onChange:G=>O("email",G.target.value),onBlur:()=>D("email"),placeholder:"you@example.com",className:`px-4 py-3 rounded-xl bg-input-background border transition-colors text-sm ${f.email&&d.email?"border-destructive focus:ring-destructive/20":f.email&&!d.email&&o.email?"border-green-500 focus:ring-green-500/20":"border-border focus:ring-primary/20"} focus:outline-none focus:ring-2`}),f.email&&d.email&&l.jsxs("div",{className:"flex items-center gap-1.5 text-destructive",children:[l.jsx(Pi,{className:"w-3.5 h-3.5"}),l.jsx("span",{className:"text-xs",children:d.email})]})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsxs("label",{className:"text-sm text-foreground",children:["PIN Code ",l.jsx("span",{className:"text-primary",children:"*"})]}),l.jsx("input",{type:"text",value:o.pincode,onChange:G=>O("pincode",G.target.value.replace(/\D/g,"").slice(0,6)),onBlur:()=>D("pincode"),placeholder:"600001",className:`px-4 py-3 rounded-xl bg-input-background border transition-colors text-sm ${f.pincode&&d.pincode?"border-destructive focus:ring-destructive/20":f.pincode&&!d.pincode&&o.pincode?"border-green-500 focus:ring-green-500/20":"border-border focus:ring-primary/20"} focus:outline-none focus:ring-2`}),f.pincode&&d.pincode&&l.jsxs("div",{className:"flex items-center gap-1.5 text-destructive",children:[l.jsx(Pi,{className:"w-3.5 h-3.5"}),l.jsx("span",{className:"text-xs",children:d.pincode})]})]}),I&&l.jsx("div",{className:"rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive",children:I}),l.jsx("button",{type:"submit",disabled:!b()||v,className:`w-full py-3.5 rounded-xl text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${b()&&!v?"bg-primary text-white hover:bg-[#8E1B22]":"bg-gray-200 text-gray-400 cursor-not-allowed"}`,children:v?l.jsxs(l.Fragment,{children:[l.jsx(bo,{className:"w-4 h-4 animate-spin"}),"Submitting..."]}):"Submit Request"})]})}const ix=[{id:"budget",name:"Budget Plan",speed:"50",price:479,data:"Unlimited",benefits:["Ideal for light browsing and social media","Unlimited data","Free router included","No installation charges"]},{id:"family",name:"Family Plan",speed:"100",price:679,data:"Unlimited",benefits:["Perfect for family streaming","Unlimited data","Free dual-band router","No installation charges"]},{id:"premium-150",name:"Premium Plan",speed:"150",price:799,data:"Unlimited",benefits:["Great for heavy streaming","Unlimited data","High-performance router included"],popular:!0},{id:"premium-200",name:"Premium Plan",speed:"200",price:999,data:"Unlimited",benefits:["Optimized for gaming and WFH","Unlimited data","Free Wi-Fi 6 router"]},{id:"premium-500",name:"Premium Plan",speed:"500",price:1199,data:"Unlimited",benefits:["Two routers included","Unlimited data","Best for multiple streaming devices"]},{id:"power",name:"Power Plan",speed:"1000",price:1999,data:"Unlimited",benefits:["Ultimate speed for large homes and offices","Unlimited data","Two high-speed routers included"]}],sx=["All","Up to 100 Mbps","100-300 Mbps","300+ Mbps"],ox=["All","Under ₹600","₹600-₹900","₹900+"];function ux(){const[a,i]=M.useState(null),[o,c]=M.useState("All"),[d,m]=M.useState("All"),[f,A]=M.useState(!1),p=ix.filter(v=>{const y=parseInt(v.speed),I=v.price;let S=!0;o==="Up to 100 Mbps"?S=y<=100:o==="100-300 Mbps"?S=y>=100&&y<=300:o==="300+ Mbps"&&(S=y>300);let H=!0;return d==="Under ₹600"?H=I<600:d==="₹600-₹900"?H=I>=600&&I<=900:d==="₹900+"&&(H=I>900),S&&H}),g=v=>{i(v),A(!0)};return l.jsxs("div",{className:"flex flex-col",children:[l.jsx("section",{className:"bg-gradient-to-b from-secondary to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Plans & Pricing"}),l.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl text-foreground",children:"Choose Your Perfect Plan"}),l.jsx("p",{className:"text-muted-foreground max-w-lg",children:"All plans include unlimited data, free installation, and free Wi-Fi router. No hidden charges."})]})})}),l.jsx("section",{className:"bg-white border-b border-border sticky top-16 z-30",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:l.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[l.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[l.jsx(j0,{className:"w-4 h-4"}),"Filter:"]}),l.jsxs("div",{className:"flex flex-wrap gap-2",children:[l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:"text-xs text-muted-foreground",children:"Speed:"}),l.jsx("div",{className:"flex gap-1",children:sx.map(v=>l.jsx("button",{onClick:()=>c(v),className:`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${o===v?"bg-primary text-white":"bg-muted text-muted-foreground hover:bg-gray-200"}`,children:v},v))})]}),l.jsx("div",{className:"w-px h-6 bg-border hidden sm:block"}),l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:"text-xs text-muted-foreground",children:"Budget:"}),l.jsx("div",{className:"flex gap-1",children:ox.map(v=>l.jsx("button",{onClick:()=>m(v),className:`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${d===v?"bg-primary text-white":"bg-muted text-muted-foreground hover:bg-gray-200"}`,children:v},v))})]})]})]})})}),l.jsx("section",{className:"bg-muted/30",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:p.length>0?l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[p.map(v=>l.jsx(lx,{plan:v,onSelect:g},v.id)),l.jsxs("div",{className:"relative flex flex-col gap-5 p-7 rounded-2xl border-2 border-dashed border-primary/40 bg-gradient-to-br from-secondary/50 to-white hover:shadow-lg hover:border-primary transition-all",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center",children:l.jsx(Ci,{className:"w-5 h-5 text-primary"})}),l.jsx("span",{className:"text-xs px-2 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wider",children:"Tailor-made"})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Custom Plan"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Need something different? Build a plan around your needs."})]}),l.jsx("div",{className:"flex items-baseline gap-1 pb-4 border-b border-border",children:l.jsx("span",{className:"text-3xl text-foreground",children:"Let's Talk"})}),l.jsx("ul",{className:"flex flex-col gap-2.5",children:["Custom speeds beyond 1 Gbps","Add-on mesh extenders & switches","Static IPs & dedicated bandwidth","Multi-location bundling","Pricing tailored to your usage"].map(v=>l.jsxs("li",{className:"flex items-start gap-2",children:[l.jsx(Oo,{className:"w-4 h-4 text-primary mt-0.5 shrink-0"}),l.jsx("span",{className:"text-sm text-foreground",children:v})]},v))}),l.jsxs("button",{type:"button",onClick:()=>{i(null),A(!0)},className:"mt-auto w-full py-2.5 rounded-xl text-sm text-center bg-primary text-white hover:bg-[#8E1B22] transition-colors flex items-center justify-center gap-2 cursor-pointer",children:["Enquire Now",l.jsx(St,{className:"w-4 h-4"})]})]})]}):l.jsxs("div",{className:"flex flex-col items-center gap-3 py-16 text-center",children:[l.jsx("p",{className:"text-muted-foreground",children:"No plans match your filters."}),l.jsx("button",{onClick:()=>{c("All"),m("All")},className:"text-sm text-primary hover:text-[#8E1B22] cursor-pointer",children:"Clear all filters"})]})})}),f&&l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:l.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 relative",children:[l.jsx("button",{onClick:()=>A(!1),className:"absolute top-4 right-4 p-1.5 rounded-lg hover:bg-muted transition-colors cursor-pointer",children:l.jsx(on,{className:"w-5 h-5 text-muted-foreground"})}),l.jsx("h2",{className:"text-foreground mb-1",children:"Get Started"}),l.jsx("p",{className:"text-sm text-muted-foreground mb-6",children:"Fill in your details and we'll set up your connection."}),l.jsx(cf,{selectedPlan:a,onClose:()=>A(!1)})]})}),l.jsx("section",{className:"bg-white",children:l.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center",children:[l.jsx("h3",{className:"text-foreground mb-2",children:"Have Questions?"}),l.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"All plans include unlimited data, free installation, and a free Wi-Fi router. Taxes extra as applicable. Plans are subject to coverage availability."}),l.jsx("a",{href:"/support",className:"text-sm text-primary hover:text-[#8E1B22] transition-colors",children:"Visit our FAQ page for more details →"})]})})]})}function cx({open:a,onClose:i,areas:o}){const[c,d]=M.useState(""),m=M.useMemo(()=>{const f=c.trim().toLowerCase();return o.filter(A=>{const p=A.toLowerCase();return!f||p.includes(f)})},[o,c]);return a?l.jsx("div",{className:"fixed inset-0 z-50 flex items-start justify-center p-6 bg-black/50 overflow-auto",children:l.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-auto p-6",children:[l.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-lg font-semibold",children:"All Coverage Areas"}),l.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Search across serviceable areas."})]}),l.jsx("button",{onClick:i,className:"inline-flex items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-primary/90",children:"Close"})]}),l.jsx("div",{className:"mb-4",children:l.jsxs("label",{className:"relative w-full block",children:[l.jsx(nf,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"}),l.jsx("input",{type:"search",value:c,onChange:f=>d(f.target.value),placeholder:"Search coverage areas",className:"w-full rounded-2xl border border-border bg-background py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"})]})}),l.jsxs("div",{className:"mb-4 text-sm text-muted-foreground",children:[m.length," area",m.length===1?"":"s"," found"]}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:m.map(f=>l.jsx("div",{className:"rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm text-foreground",children:f},f))})]})}):null}const dx=`
A METTUR
A.SALAIPUDUR
AALAPAKAM
AANANDA MAHAL ROAD
AANDAVAR NAGAR
AATHIYADITHATTU
AAVIN NAGAR
ABHIRAMAPURAM
ABIRAMI NAGAR
ACHANGULAM
ADAIKALAPURAM
ADANUR
ADYAR
AES ellam
AGAASTEESWARAM
AGARAM
AGASTHEESWARAM
AGASTHEEWARAM
AGASTHIYAPURAM
AGASTHIYAR PATTI
AGATTUR
AINKAMAM
AIRPORT
AIRPORT POST
AIYILUR
AKKARAI
ALAGAN PARAI
ALAGANERI
ALAGANPARAI
ALAGAPPAPURAM
ALAGAPURAM
ALAGAPURI
ALAGARKOVIL ROAD
ALAMAPATTI
ALAMPATTI
ALANCHOLAI
ALANGULAM
ALAPAKKAM
ALATHUR
ALLINAGARAM
ALWARPET
ALWARPURAM
ALWARTHIRU NAGAR
ALWARTHIRUNAGAR
AMBALAVANAPURAM
AMBASAMUDRAM
AMBATHUR
AMBATTUR
AMINJIKARAI
AMMAN NAGAR
AMMANAMBAKKAM
AMMAPALAYAM
AMMAPATTI
AMMAPET
AMMAPETTAI,
AMMAYAPPA NAGAR
ANAIYOOR
ANAIYUR
ANALMIN NAGAR
ANANTHA NAGAR - KATHIRKAMAM
ANANTHAMANGALAM
ANBIL NAGAR
ANBU NAGAR
ANCHALI
ANDALPURAM
ANGAMMAL COLONY
ANGAMMAL COLONY.
ANJUGRAMAM
ANJUGRAMAM main road
ANJUGRAMMAM
ANNA KELA STREET
ANNA NAGAR
ANNA NAGAR 12 WEST
ANNA NAGAR 8TH STREET
ANNA NAGAR EAST
ANNA NAGAR WEST
ANNA NAGAR WET
ANNA NEW STREET
ANNA PARK
ANNA SALAI
ANNA SALAI GANDHI NAGAR
ANNADHANAMPATTI
ANNADHANAPATTI
ANNAGAR 2ND STREETNA
ANNAMALAI NAGAR
ANNAMANGALAM
ANNANJI VILAKKU
ANNAPURAM
ANNASALAI
ANNATHANAPATTI
ANNATHANPATTY
ANUPURAM
APPANARY VILLIAGE
APPANTHIRUPATHI
APR PERUMAL NAGAR
ARAMANNAM
ARAMBAKKAM
ARANARAI
ARANMANAI street
ARCOT
ARCOT ROAD
ARISIPALAIYAM
ARIYAKULAM
ARIYATHUR
ARIYATHUR VILLAGE
AROCKIYA PURAM
ARS KATTAUKADAI
ARUDESAM
ARUKANGULAM
ARUMANAI
ARUMBAKKAM
ARUMBAVUR
ARUMPARTHAPURAM
ARUMUGA NAGAR
ARUMUGAMPATTI
ARUMUGANAGAR
ARUNA NAGAR
ASARIPALLAM
ASHOK NAGAR
ASHOKNAGAR
ASTABUJAM SANNATHI
ATHENCODE
ATHIPARASAKTHI NAGAR
ATHIPATTI
ATHIPET
ATHIPET MAIN ROAD
ATTIPATTU
AUTHOOR
AVADI
AVALNATHAM
AVARAMPALAYAM
AVINASHI ROAD
AVINASI ROAD
AVR nagar
AVVAINAGAR
AVVAIYAR STREET THORAMANGALAM
AYAN KARISALKULAM
AYANAMBAKKAM
AYANAVARAM
AYAPAKKAM
AYINKAMAN
AYIRAPERI TENKASI
AYNKAMAM
AYYALU STREET
AYYANADAIPPU
AYYANAR NAGAR
AYYANERI
AYYAPPANTHANGAL
AZAGANAPARAI
AZHAGANPARAI
AZHAGAPPAPURAM
AZHAKAMPARAI
AZHAKANPARAI
AZHAPPAPURAM
Aalamaram pammathukulam
Aathieswaran Nagar
Abhiramapuram
Achariyaburam
Achariyapuram
Adambakkam
Adayalampattu
Adayar
Aditanuthu
Adiyanuthu
Adyar
Agaram
Agarapettai
Agastheeswaram
Agnes Mary streey
Agraharam
Airport opposite
Aiyilur
Ajees nagar
Ajeez Nagar
Akkaragaram
Akkarai
Alagapuram
Alagapuri
Alagarkovil main road arambanoor (po)
Alagarnagar
Alagarpuram
Alagumalyan nager
Alagunagar
Alambadi road
Alancode
Alancodu
Alangcode
Alapakkam
Alathur
Alencode
Allagumaliyan nagar
Alluvilai
Aloor
Aluvilai
Alwarpet
Alwarpet,
Alwarthirunagar
Amanikondalampatty
Ambal Nagar
Ambatthur
Ambattur
Ambattur Industrial Estate
Aminijikarai
Aminjikarai
Ammaiyagaram
Ammapet
Ammatchiyapuram
Ammayappa Nagar
Ammayappa nagar
Anadagiri 1ststreet
Anadagiri 2nd street
Anadagiri 3rd street
Anadagiri 4thstreet
Ananda giri
Ananda giri 2nd street
Ananda giri 3rd street
Anandagiri
Anandagiri 3rd street
Anandhagiri
Anantapur
Ananthagiri
Ananthagiri7th street
Ananthakiri7th street
Anbu Colony
Anbu Nagar
Anducode
Angammal colony
Angarai
Angayarkanni nagar
Anjugramam
Anjugrammam
Ankayarkanni nagar
Anna Nagar
Anna Nagar East
Anna Nagar West
Anna Nagar West Extenions
Anna Nagar West Extension
Anna Salai
Anna nagar
Anna nagar east
Anna nagar west
Anna nagar west extenions
Anna salai
Annai Nagar
Annamalai Nagar
Annamalai nagar
Annanagar
Annapudhu Theru
Annasalai
Annathanapatti
Annathanapatty
Anthencode
Anumanthan nagar
Anupuram
Apattuvilai
Apc nagar
Appattuvilai
Aranarai
Aranarai North
Arasakulam
Aravindar Nagar
Arcot
Area
Arisipalayam
Ariyalur main road
Ariyapalayam
Arul Residency nager
Arumanai
Arumbakkam
Arumbanur po
Arumbarthapuram
Arumbaur
Arumuganagar
Arun Garden
Arunachalapuram
Arunasalapuram
Aruthura Nagar
Ashok Nagar
Ashok hotel back
Athencode
Athichanvilai
Athieaswaran Nagar
Athipattu
Athipet
Athipet chelliamman nagar
Attanthngal
Avadi
Avaniapuram
Avaniyapuram
Avarampalayam
Avvai Nagar
Avvai Nagar,
Ayanambakkam
Ayanavaram
Ayapakkam
Ayappakkam
Ayipettai
Ayyanambakkam
Ayyankottai
Ayyar street
Azhagappapuram
B BLOCK
BAJRANJA TOWER
BALAJI GARDAN
BALAJI GARDEN
BALAJI NAGAR
BALAJIGARDAN
BANGLAMEDU
BEACH ROAD
BEEMA NAGAR
BENGALURU URBAN
BESANT NAGAR
BETHANIYAPURAM
BHAGAVAN NAGAR
BHARANIPUTHUR
BHARATHI NAGAR
BHARATHI NAGAR 1ST STREET
BHARATHIDASAN COLONY
BHARATHIDASAN NAGAR PERAMBALUR
BHARATHIPURAM
BIKSHANDARKOVIL
BOAT HOUSE
BODI
BOLDEN PURAM 1ST THERU
BOLTANPURAM
BOMMAIYAGOUNDANPATTI
BOMMANAPPADI
BOMMAYAGOUNDANPATTI
BOOMIANPET
BOOMIYANPET
BOOPALRAYAR PURAM
BOOTHAKUDI
BOOTHIPURAM
BRAMIN COLONY
BRIANT NAGAR 7TH STREET
BRIYANT NAGAR
BRIYANT NAGAR 12 TH STREET
BROADWAY
BRYANT NAGAR
BUDALUR
BUNGALOW STREET
BURMA COLONY
BYEPASS ROAD
Balaji Nagar
Balaji Nagar, Padianallur
Balakrishnapuram
Balamurugan nagar
Bamban asari santhu
Barakka Road
Barathidasan Nagar
Barathidhasan nagar
Basudeipur,Puri
Batlagundu
Batlagundu twon
Bengaluru Urban
Besant nagar
Bharath Nagar
Bharathi Nagar
Bharathi nagar
Bheema Nagar
Bheema nagar
Billss villa
Birudur Vandavasi
Bliss illa street
Block3
Brindavan nagar
Broadway
Budalur
Byepass Road
CANTONMENT
CHANNAVARAM
CHATHIRAPATTI
CHATRAPATTI
CHAVADI STREET
CHELAM NAGAR
CHEMMANCHERRY
CHEMPONVILAI
CHENNAI
CHENNAI AIRPORT
CHENNAI-
CHENNAVARAM VANDAVSI TK
CHENNNAI
CHENTHENGU VILAGAN
CHERANMA NAGAR
CHERANMANAGAR
CHERRY ROAD
CHETHPAT ROAD
CHETPET
CHETTIARAGARAM, PORUR
CHETTICHARVILAI
CHETTIKULAM
CHETTIYAR AGARAM
CHETTIYAR AGARAM VILLAGE
CHETTIYAR THOTTAM
CHEVIDAN VILAI
CHINADRIPET
CHINDATRIPET
CHINNA NEELANGARAI
CHINNARETTIPATTI
CHINNAVEDAMPATTI
CHINTADRIPET
CHINTHADARIPET
CHINTHADRIPET
CHITADRIPET
CHITHAMBARA NAGAR
CHITHAMBARANAGAR
CHITRAKUDI
CHOCKALINGAPURAM
CHOLAVARAM
CHONAVILAI
CHOOLAI
CHOOLAIMEDU
CHROMEPET
CHROMPET
CHURCH STREET
CINEMA NAGAR
CITY
CLIVE BAZAAR
COI
COIMBAORE
COIMBATORE
COIMBATORE SOUTH
COLACHEL
COLLECTORATE.
COLONY
COMPOUNTER STREET
CONTONEMENT
CONVENT ROAD
COURT ROAD
COURTALLAM
COURTALLAM NATHAR SALAI
COURTRALLAM
CRUZPURAM STREET
CTC COLONY
CTO COLONY
CUMBUM ROAD
Cantonment
Carmel puram
Chadayamangalam
Chandirasekarnagar
Chandragandhi Nagar
Channavaram, Vandavasi
Chathiram
Chearn MA Nagar
Chelladurai Nagar
Chellam Pappu Nagar
Chellapuram
Chelliamman Kovil nagar
Chelliamman nagar
Chelliyamman nagar
Chemman medu
Chenbai
Chengalpattu
Chennai
Cheranma Nagar
Cheranma nagar
Chetpet
Chettikulam
Chindatripet
Chinna Pudur
Chinna Thirupathi
Chinna colony
Chinna colony, athipet
Chinna porur
Chinnakollapatty
Chinnareddypatti
Chitirampatti
Chitrakudi
Cholampattu
Cholavaram
Choolai
Choolaimedu
Chromepet
Chrompet
Coimbatore
Colony
Compost dippo
Convent road
Courtallam
Courtallam,
Csi church
D D ROAD
DADHAG
DEERAN NAGAR
DEMO
DEVIPARASAKTHI NAGAR KARAMBAKKAM
DHAMODARA NAGAR
DHANALAKSHMI SRINIVASAN MULTI SPLTY HOSPITAL COMPLEX SIRUVACHUR
DHARMAPURI
DHARMATHUPATTI
DHEERAN NAGAR
DHURAISAMY NAGAR
DOLPHINNAGAR
Dadagapatti
Dadagapatty
Dakshin Dinajpur
Dana
Deivasigamanipuram
Dergu theru
Dergu theru batlagundu
Devagiri
Dhachnamoorthy Nagar
Dharmaburi
Dheeran Nagar
Dheeran nagar
Diamond Nagar
Dindigul
Dindugal road
Dippo Street
Doak Nagar
Doak nagar
Doha Bank
Dr Nagar
Dr Radhakrishnan Nagar
Dr.Chelladurai Nagar
Dr.Radhakrishnan Nagar
Dsp Nagar
Dsp nagar
Duraisamy Nagar
Duraisamy nagar
E B COLONY
EARTHAVOOR NEAR 931
EAST
EAST MAIN ROAD
EAST STREET MARUVATHUR
EAST TAMBARAM
EB colony
ECR
EDAKULAM
EDAMAL STREET
EDAPPADDI
EDAYARPALAYAM
EGATTUR
EGMORE
EIATHUR TENKAS
EKKADUTHANGAL
EKKATTUTHANGAL
EKKATUTHANGAL
ELAMBALUR
ELAMBALUR ROAD
ELATHUR
ELLAIAMMAN KOIL ST
ELLAIPILLAICHAVADY
ELUMBUR
ELUPPAVILAI
ERAIYANUR
ERANIAL
ERANIEL
ERUMBILI
ESANAI
ESANNAI
ESI BACKSIDE
ESICOLONY,RAJAPALAYAM
ESWARAN KOVIL PATHU
ETTINESS ROAD
ETTNESS ROAD
East Godavari
East Ramanathapuram
East street
Eb colony
Edamalaipatti pudur
Edayarpalayam
Egattur
Egmore
Ekkiyarkuppam
Elambalur
Elambalur road
Elangadu
Elango Nagar
Elathur
Elis Nagar
Elis nagar
Elite apts, ashthalakshmi nagar
Ellaipillaichavady
Ellammanpettai
Ellapatti
Ellis Nagar
Elumalai nagar
Eluvanampatty
Eranaial
Eranail
Eranial
Eranial grammam
Eranial palace
Ernakulam
Erumpili
Eruthavoor
Eruvaipattanam
Essnai
Ezhil Nagar North
F
FAIRLANDS
FARM LAND
FINGER POST
FINGERPOST
FIVE ROADS
FOREST ROAD
FORT
FOUR ROADS
Fairlands
Fairy falls road
Fairyfalls
FernHillRoad
First street
Fort
G
G.H ROAD
GAJALAKSHMI NAGAR
GANABATHIPURAM
GANAPATHI NAGAR
GANAPATHI PURAM
GANAPATHIPURAM
GANAPATHY
GANAPATHYPURAM
GANASE COLONY ELAMBALUR ROAD
GANDHI NAGAR
GANDHI NAGAR KARAMBAKKAM PORUR
GANDHIMANAGAR
GANDHIPURAM
GANESAPURAM
GANESH PAPAER STORE DOWN
GANESHAPURAM
GANGAIKONDAN
GANTHI NAGAR
GAYATHRI NAGAR
GENGUVARPATTI
GEORGE ROAD
GEORGE TOWN
GERUGAMBAKKAM
GH ROAD
GIRIPRAGARA MELA RATHA VEETHI
GIRIPRAKARA VEETHI
GK KARATTUR.
GKM COLONY
GN PALAYAM
GNAHDI NAGAR
GNT ROAD , PADIYANALLUR
GODEN GATES SCHOOL BACK CUSTOMER
GOKULAM COLONY
GOMATHIPURAM
GOPALAPURAM
GORIMEDU
GORIPALAYAM
GOVERNERGIRI
GOVINDASAMY NAGAR
GOWSALYA NAGAR
GREENWAYS ROAD
GUDALUR
GUGAI
GUIDY
GUINDY
GUINDY INDUATRIAL ESTATE
GUINDY INDUSTRIAL  ESTATE
GUINDY INDUSTRIAL ESTATE
GUNDOOR
GUNDUR
GUNDUR BURMA COLONY
GURU NAGAR
Gabrel Nagar
Gaja lakshmi Nagar
Ganaolipuram
Ganapathi puram
Ganapathipuram
Ganapathy
Ganapathy Nagar
Ganapathy nagar
Gandhi Nagar
Gandhi Road
Gandhi nagar
Gandhi nagar main roadd
Gandhima Nagar
Gandhima nagar
Gandhinagar
Gandhipuram
Gangai Amman Nagar
Gangai Amman koil
Ganguvarpatty
Ganjampatti
Ganthinagar
Ganthipuram
Geetha nagar
Genguvarpatty
George Hotel O.P
George Town
Gerugambakkam
Ghat road
Giriprakara Veethi
Gnanavolivupuram
Golden Avenue
Gomathipuram
Gopal nagar extension
Gopalapuram
Gopalasami street
Goregaon East,Mumbai Suburban
Gorimedu
Gorimedu Main Road
Goripalayam
Goundampalayam
Goundanpalayam
Goundupalayam
Govindhasalai
Govinthasamy thetr
Gracegaraan
Ground
Gugai
Guindy
Gultekdi
Guru Nagar
H
HANAMKONDA
HARBOUR ESTATE
HARIRAM NAGAR
HASTHAMPATTI
HASTHINAPURAM
HERITAGE VENKATESHWARA NAGAR
HILLSIDE COTTAGE
HOPES
HOUSING BOARD
HOUSING UNIT
HOUSING UNIT TNHB
HUSTHAMPATTY
Harur
Highways colony
Hot hospital
Husthampatty
ICF
IDAKULATHUVILAI Veedu
ILANJI
ILANTHIKULAM
ILAYARASANENDAL
ILLUPAIYURANI
IMAYAM NAGAR
INAM MANIYACHI
INAM MANIYACHI, LAKSHMIPURAM
INAMA MANIYACHI
INDIRANAGAR
INDRA NAGAR
INJAMBAKKAM
INTUC
IOB near
IP hous
IRUMBADU
IRUMBADU VILLAGE
IRUMBULIYUR
IRUMBULIYUR,
IRUR
IRUTHAYAKULAM
ITCHIKAMALAI PATTY
IYYAPANTHANGAL
IYYAPPANTHANGAL
Icf colany
Icf colony
Ilango Nagar
Indira gandhi street
Injambakkam
Iraniyam
Irantyam
Irumbuliyur
Iyyapantangal
Iyyapanthangal
Iyyappanthangal
J K NAGAR
J K NAGAR EXTN
JAFFERGANPET
JAFFERKHAN
JAFFERKHANPET
JAGIR AMMAPALAYAM
JAMALIYA NAGAR
JAMES TOWN
JAMESTOWN
JAPTHIKARANI
JAWAHAR MILL
JAWAHAR NAGAR
JAYA NAGAR
JAYAM NAGAR KUNDRATHUR
JEEVANADHAPURAM
JEGARAJ NAGAR
JEGAVEERAMPATTI, SANKARAPANDIAPURAM
JEYAM NAGAR
JH TOWERS
JIND
JOHNSONPET
JOTHINAGAR
JR Super city
JUNCTION
Jafferkhanpet
Jagir amma palayam
Jagir ammapalayam
Jalladianpet
Jamalia
Jamestown
Jansi Nagar
Jawahar Nagar
Jawaharlalpuram
Jaya Nagar
Jaya nagar
Jeevananthapuram
Jothi Nagar
Jothi Nagar , Padiyanallur
Jothi Nagar, Padianallur
Jothin illam
Jyothi Nagar, 7th Street
K
K K NAGAR
K K PUDUR
K SATHANOOR
K SATHANOOR SOUTH
K SATHANUR
K.K NAGAR
K.PAPPUNAYAKKANPATTI
K.Solanganallur
K.r. puram
KADAISIKULAM
KADHAR KUDIRUPPU,
KADIAPATTINAM
KAILIYAKKAVILAI
KAISHNAPURAM
KAISOONDI
KAITHAKUZHI 269A
KAJA MALAI
KAJAMALAI
KALAAKKAVILAI
KALANGAPERI
KALANGARAIPATTI
KALANIVASAL
KALANIVASAL NEW ROAD
KALANKARAI
KALIKAPPAN
KALIKKAVILAI
KALIKUNDRAM
KALINGAPATTI
KALIYAKKA VILAI
KALIYAKKAVILAI
KALIYAKKAVILAI MAIN
KALKULAM
KALLIMADAI
KALLUKATTI
KALLUKOOTTAM
KALLURANI, VANARAMUTI
KALPAKKAM
KALUGUMALAI
KALUKOOTAM
KALUPPURAM
KALYAN NAGAR
KALYANAMANDAPAM
KAMADHENU NAGAR
KAMARAJAR SALAI
KAMBAN STREET
KANAHAPPPAPURAM
KANAKKUPILLAI VALASAI
KANAKKUPILLAIVALASAI
KANATHUR
KANATHUR REDDYKUPPAM,
KANCHEEPURAM
KANCHIPURAM
KANCHIPURAM DISTRICT
KANCHIRAVILAI
KANCHPURM
KANDAMANADI POST
KANDANCHAVADI
KANDANVILAI
KANDANVILLAI
KANDAPPA COLONY
KANDAPPA MUDALIAR ST
KANDASAMY PURAM
KANDIVALI WEST
KANJAMPURAM
KANNIYAKUMARI
KAPPIYARAI
KARADIKULAM
KARAIERUPPU
KARAIKENI
KARAIKENI  T.KALLUPATTI
KARAIKUDI
KARAMBAKKAM
KARAMBAKKAM PORUR
KARAMBAKKAM VILLAGE
KARAMPAKKAM
KARANCADU
KARANCODU
KARANKADU
KARAPAKKAM
KARAPAKKAM,
KARAPETTAI
KARAVILAI
KARAWAL NAGAR
KARIKKATHOPPU
KARISAL
KARISALKUDIYIRUPPU
KARIYAVILAI
KARPAGANAGAR
KARUMANDAPAM
KARUMANKOODAL
KARUNANITHI NAGAR
KARUNGULAM
KARUNGULAM,
KARUPPAIURANI
KARUPPAIURANI MADURAI
KARUPPAIURNI
KARUPPAIYA PURAM
KARUPPAYURANI
KARUPPUR
KASIMAJORPURAM
KASIMEDU
KASTHURIBAI STREET
KATHIR GRAMAM
KATHIRKAMAM
KATTAMPULI
KATTOOR
KATTUPAKKAM
KATTUR
KAVEDU KILKODUNGALORE
KAVEDU, KILKODUNGALORE
KAVERI NAGAR
KAVI BHARATHI NAGAR
KAVUNDAMPALAYAM
KAVYA GARDENS
KAZHIPATTUR
KEELA ALANGARA THATTU
KEELA OORANI SOUTH
KEELA SHUNMUGA PURAM
KEELANATHAM
KEELANATTARKULAM
KEELAPANAGADI
KEELAPANANGADI
KEELAPULIYUR
KEELKATTALAI
KELAMBAKKAM
KELLA GUDALUR
KELLYS
KENDRA VIDLAYA SCHOOL OPP
KENJAMPATTI
KESAVANAGAR TRICHY
KETCHILAPURAM
KETHUVARPATTI   PERAIYUR  MADURAI
KGA complex
KHAJA NAGAR
KHAJAMALAI
KIKODUNGALUR
KILAMKULAM
KILANKULAM
KILKODUNGALORE
KILKODUNGALUR
KILNARMA VILLAGE
KILNARMA, KILKODUNGALORE
KILPACKKAM VILLAGE
KILPAKKAM
KILPAUK
KILPPACKKAM
KILPUAK
KITCHIPALAIYAM
KIZHAPULIYUR
KIZNANATHAM
KK
KK NAGAR
KK NAGAR WEST
KK Nagar
KK nagar
KKPUTHUR
KMB COMPLEX
KODAIKANAL
KODAMBAKKAM
KODAMBAKKMA
KODANGIPATTI
KODEESWARAN NAGAR
KODIMUNAI
KODUNKAIYUR
KOIL STREET
KOILSTREET
KOKKIRAKULAM
KOLAPAKKAM
KOLATHUR
KOLLANKULAM
KOLLAVEERANPATTI
KOLLAVEERANPATTI       T.KALLUPATTI
KOLUTHUVANCHERRY
KOLUTHUVANCHERY
KONAM KADU
KONAMKADU
KONAMKADU AALAYAM
KONDALAMPATTY
KONDITHOP
KONDITHOPE
KONERIPALAYAM
KONGANTHANPARAI
KOODANKULAM
KOOTAMAVILAI, PARAKUNNU
KOOTHUR
KOOTTAPULI
KORAMPALAM
KORAMPALLAM
KORANGUCHAVADI
KORATTUR
KORATTUR RS
KORATUR
KOSAKULAM
KOSAPALAYAM
KOSAPET
KOTTAI
KOTTAI VILLAGE
KOTTAIKALAM
KOTTAPATTU
KOTTAPULI
KOTTI VILLAGE
KOTTIVAKKAM
KOTTUR
KOTTUR ROAD
KOTTURPURAM
KOVALAI
KOVALAI VILLAG
KOVALAI VILLAGE
KOVALAI village
KOVALAM
KOVIL STREET
KOVILAMBAKKAM
KOVILANVILAI
KOVILMEDU
KOVILPAPAKUDI
KOVILPATTI
KOVUR
KOYAMBEDU
KOZHIVILAI
KR COLONY
KRISHANAPURAM
KRISHNAMMAL NAGAR.
KRISHNAPURAM
KRISHNAVANI NAGAR
KTC NAGAR
KTc B colony
KUBER NAGAR
KUBERAN NAGAR
KULAPAKKAM
KULAPPURAM
KULAPURAM
KULASEKARAPURAM
KULIPAUK
KUMARA SAMY NAGAR
KUMARAMANGALAM, MATHUR
KUMARAN NAGAR
KUMARETTAYAPURAM
KUMBAKONAM
KUMLI ROAD, VEERAPANDI
KUNDRATHUR
KUNIYAMUTHUR
KUNNAN vila
KUNNATHUR
KUPPANUR
KURANGANI
KURINCHI NAGAR
KURINCHIPADI
KURINJI NAGAR EXTN
KURINJI NAGAR, TAMBARAM WEST,
KURUCHIKUPPAM
KURUMATHOOR
KURUMATHOOR,
KURUMBALUR
KURUNGUCHAVADI
KURUNJIPURAVU
KURUNTHENCODE
KUSAVANKUZHI
KUTHTHUKKAL VALASAI
KUTHUKAL VALASAI
KUTHUKAL VALASAI TENKASI
KUTHUKKAL VALASAI
KUTTI AMBALAKARAN PATTI
KUTTY AMBALAKARAN PATTI
KUYAVAR PALAIYAM
KUYAVARPALAYAM
KUZHICODE
KUZHITHURAI
Ka. Mamanandal
Kadachanendal
Kadai veethi
Kadaiveethi
Kaith
Kaithakuzhi
Kakkavilai
Kakkotu villai
Kakkotuthalai
Kalaignar Karunanidhi Nagar
Kalaivanar naghar
Kalavasal Bypass Road
Kalavasel
Kalayamputhur
Kali
Kaliamman kovil
Kalimedu
Kaliyakkavilai
Kalkulam
Kallakkurichi
Kallakurichi
Kallakurichi South
Kallapuliyur
Kallukauli
Kallukuzhi
Kalluvilai
Kalpaga nagar
Kalugumalai
Kalyanasundara Moorthy Nagar
Kamaraj Nagar
Kamarajapuram
Kamarajar nager
Kamarajarsalai
Kamarajnagar
Kamatchipuram
Kamban Nagar
Kambhan street poolampadi post
Kanapadi
Kanapathi nagar
Kanathur
Kanchampuram
Kanchampuramn
Kancheepuram
Kanchipuram
Kanchira vilai
Kanda
Kandanvilai
Kandhampatty
Kandhanchavadi
Kandukulam
Kanimaar Kovil
Kanimadam
Kanimadm
Kanimadom
Kanjampatti
Kanjampuram
Kanjampuram,
Kannamatkovilpatti
Kannampalayam
Kannan nagar
Kannankarai vilai
Kannankuruchi
Kannimarkovilpatti
Kanuvapet
Kanyakumari
Kappiyarai
Kappukadu
Karaikudi
Karambakkam
Karambakkam Porur
Karani
Karapakkam
Karappakkam
Karayankuzhi
Kariyaravilai
Karukku
Karumandapam
Karungulam
Karuppaiyurani
Karuppur
Karur road
Karuvadikuppam
Kasthuriba hostel road
Kata kamanpatti
Kathakinaru
Kathirkamam Main Roa
Kathirkamam Main Road
Kattakamanpatty
Kattupakkam
Kattur
Kaundanpalayam
Kavery nagar
Kavundampalayam
Kavundanpalayam
Kavunji
Kazhipattur
Kazura Garden First Street
Keelakalani
Keelakovilpatti
Keelaputhur
Keelavilai
Kelambakkam
Kidaikanal
Kilanku Vilai
Kilavarai
Killiyoor
Kilpackkam
Kilpauk
Kilsathamangalam
Kitchipalayam
Kk nagar
Ko
Kochadai
Koda
Kodai
Kodaikanal
Kodaikanall
Kodaikananl
Kodalikarupur
Kodambakkam
Kolachivilai
Kolakkanvilai
Kolapakkam
Kolathur
Kollal
Kollamcode
Kollamvilai
Kollaveeranpatty
Kombaipatti
Konathuvilai
Kondalampatti
Konimedu
Koovanuthu
Korattur
Korattur North
Korattur South
Kosapalayam
Kottaikagam
Kottakaimedu, Y.puthupatti Village,
Kottakuppam
Kottapattu
Kottapatu
Kottivakkam
Kottur road
Kotturpuram
Kovalam
Kovilambakkam
Kovilambakkam & S.Kolathur
Kovilambakkam and S kolathur
Kovoor
Kovor
Kovur
Koyambedu
Kozhivilai
Krishna Nagar
KrishnaPuram
Krishnapuram
Krk nagar
Kudaiparaipatti
Kulasekarapatti
Kulathukarai
Kulipatty
Kullanampatti
Kullupuram
Kumananchavadi
Kumaran Nagar
Kumaran nagar
Kumbakonam
Kumpanali
Kuniyamuthur
Kunnathur
Kunnuvaran kottai vill
Kurinchi nagar
Kurinchinagar
Kurinji Nagar
Kurubalur
Kurumbapet
Kurumbatty
Kurumpatti
Kurunguchavadi
Kurunthencode
Kuthukalvalasai
Kuttalam
Kuyavarpalayam
Kuzhithurai
LABBAIKUDIKADU
LAKSHMI NAGAR
LAKSHMIPURAM
LALGUDI TK
LALUKAPURAM
LASKMIPURAM
LAWSPET
LEKSHMIPURAM
LEVINCHIPURAM
LEVINGIPURAM
LEVINJIPURAM
LIC COLONY
LINEMEDU
LINGAM NAGAR
LINGAM NAGER
LKURUNGUCHAVADI
LOGANATHAN NAGAR
Lakshmanapuram
Lakshmi nagar
Lakshmi sundaram colony
Lakshmipuram
Laskat road
Lawspet
Lawspet Main Road
Levinjipuram
Linemedu
Llango Nagar
M. Vadipatti
M.AZLHAGAPURI
M.M.NAGAR
M.SAVARUYAR PURAM
M.SAVERIAR PUAM
M.subblapuram
M.vadipatti
MADAKULAM
MADAM
MADAM PILLAI THARMAM
MADATHUR
MADATHUR ROAD
MADHANAGOPALAPURAM
MADHANAGOPALAPURAM PERAMBALUR
MADHANANDAPURAM
MADHAVARAM
MADHURAPURI
MADICHAL
MADIPAKKAM
MADITCHAL
MADURAI
MADURAI  NORTH
MADURAI NORTH
MADURAI NOTH
MADURAVOYAL
MADURVOYAL
MADiCHAL
MAHABALIPURAM
MAHALINGAPURAM
MAHAPALLIPURAM
MAHARAJA NAGAR
MAHARAJA NAGAR,
MAHAVEER NAGAR
MAIN ROAD NARANAMANGALAM
MAJOR SARAVANA NAGAR
MAKKINAMPATTI
MALAIYADIPATTI
MALAYADI
MALAYADIPATTI
MALLANCODU
MAM School near
MAMALLABURAM
MAMALLAPURAM
MAMANDUR KILKODUNGALORE
MAMANGAM
MANAKKARAI
MANALMETTUPATTY, K SATHANOOR
MANALUR
MANAMAI
MANANCHERRY
MANAPAKKAM
MANATHIDAL
MANAVALAKURICHI
MANDAIKADU
MANDAVELI
MANDAVERLI
MANGADU
MANGALA NAGAR
MANGALAM MAMANDUR
MANIYAKARANMPALAYAM
MANJAVILAI
MANJAVILAI Near RC CHURCH (761)
MANJAVILAI RC CHURCH
MANKUZHI
MANKUZHY
MANNADY
MANTHITHOPPU
MANTHITHOPPU ROAD
MARAKKANAM
MARAKKUDI STREET
MARAKUDI THERU
MARAVAN MADAM
MARAVANERI
MARINA MALL
MARUDADU VILLAGE
MARUDHUR
MARUTHADU
MARUTHANCODE
MARUTHANCODE’s
MARUTHI NAGAR
MARUTHUR
MARYPURAM
MASAKKALIPALAYAM
MATHANAGOBALAPURAM
MATHICODE
MATHOORKONAM
MATHOORKONAM,
MAXWORTH NAGAR
MAYYANOOR MAIN ROAD
MECODE
MEELAPANANGADI
MEELAVITTAN
MEENACHAL
MEENACHEL
MEENAKSHI PETTAI
MEENAKSHI PURAM
MEENATCHIPURAM
MEENCHAL
MEETTUKUPPAM
MEKKARAI
MEL AYNAMBAKKAM
MELA GUDALUR
MELA SHANMUGA PURAM
MELA VELAYUTHA PURAM
MELACHEVAL
MELAGARAM
MELAGUDALUR
MELAPALAYAM
MELAPALAYAM,
MELAPALYAM
MELAPANANGADI
MELAPUDUR
MELAPUTHANERI
MELARAJAKULARAMAN, CHATRAPATTI
MELKODUNGALORE
MELUR
MELUR ROAD
MEMBALA NAGAR
MENATCHIPURAM
METHUKUMMAL
METTU STREET
METTUKKUPPAM
METTUKUPPAM
MEYYANOOR
MG NAGAR
MGR NAGAR
MGR Nagar
MGR nagar
MIDDILESTREET
MIDDLE STREET
MIET
MILAVITTAN
MILLER
MILLER PURAM
MILLERPURAM
MINT
MITTAPUDUR
MKB NAGAR
MMDA COLONY
MNR LINE
MOGAPPAIR
MOGAPPAIR EAST
MOGAPPAIR ERI SCHEME
MOLASUR
MONDAI KADU
MONDAIKAD
MONDAIKADAU
MONDAIKADU
MONDAY MARKET
MOOLAKUALAM
MOOLAKULAM
MOOPANPATTI
MOULIVAKKAM
MOWLIVAKKAM
MRC NAGAR
MUDALIARPET
MUDICHUR
MUDUKUMEENDANPATTI
MUGALIVAKKAM
MUGAPPAIR
MUGAPPIAR
MUKKUTUMALAI, SIPPIPARAI
MULAKULAM
MULLAKADU
MULLIKULATHUR
MUMBAI
MUNCHIRAI
MUNDAKKAL
MUNIYASAMY KOVIL
MUNIYASAMY KOVIL STREET
MUPPILIVETTY
MUPPULIVETTI
MURUKERI
MURUKERI VILLAGE
MURUKKARI VILLAGE
MUTHAIAH PURAM
MUTHAIYA PURAM
MUTHAIYALPETTAI
MUTHAIYAPURAM
MUTHIALPET
MUTHIYA PURAM
MUTHIYAH PURAM
MUTHU NAGAR
MUTHU NAGAR, AIRPORT
MUTHUDEVANPATTI
MUTHUGUDI, RAJAPALAYAM
MUTHULAKSHMI NAGAR
MUTHURAPALAYM
MUTHUTHEVANPATTI
MUZHUCODE
MUZHucode
MVM nagar
MYLAI BALAJI NAGAR
MYLAPORE
Madakulam
Madha kovil
Madha nagar
Madhanandha puram
Madhavaram
Madhurai
Madhuravoyal
Madichal
Madichel
Madipakkam
Madras
Madur
Madura
Madurai
Madurai Bench of Othakadai
Madurai Central
Madurai North
Madurai South
Madurathakam
Maduravoyal
Maduravoyal,
Maduravoyil
Mahabalipuram
Mahaballipuram hubroom
Mahaveer Nagar
Main Road
Main road
Makk
Makkinampatti
Malaikottalam
Malapatti
Malapatti road
Mamallapuram
Manakula Vinayagar Nagar
Manakula vinayagar nagar
Manali
Manalir
Manapakkam
Mandaveli
Mangadu
Mangalam
Mangalam mamandur
Mani Garden
Mani garden
Maniyanoor
Maniyanur
Mannady
Mannarsamudiram
Mannarsamuthram
Mannivakkam
Mannurpet
Manor road
Manthaiveli
Manthithoopu ROAD
Marakannam
Marakkanam
Maravanery
Marina Mall.
Mariyanathapuram
Mariyeepatti
Markkanam
Marthandam
Maruthancode
Mary Ulavarkarai
Masakalipalayam
Mathoorkonam
Mathur
Mathur Colony
Meacode
Mecode
Medavakkam
Meenachal
Meenachalpost
Meenakshi Garden
Meenakshi garden
Meenambakkam
Meenatchipet
Meengaratheru
Mekkarai
Mel Aynambakkam
Mel Aynambakkam Road
Mela pottakuzhi
MelaKrishnanputhur
Melagaram
Melakovilpatti
Melamadai
Melayanambakkam
Melkarai road
Melpuram
Melur
Melur main road
Mengles road
Mettu Street
Mettukudieruppu
Mettukuppam
Mettupalayam
Mettupatti
Meyanur Main Road
Meyyanoor
Meyyanur
Middle street
Mk COMPLEX
Mm street
Mmda
Mogapair west
Mogappair
Mogappire
Mogappire west
Mohan Nagar
Monday Market
Monday market
Mondiamman Nagar
Moogambigai Nagar
Moolakulam
Moonjigal
Moonjikal
Moonjikkal
Morison Thottam
Mothilal Nagar
Moulivakkam
Mudaliarpet
Mudhaliarpet
Mudichur
Mugalivakkam
Mugappair
Mullipadi
Mumbai Suburban
Municipal colony
Muthalapuram
Muthaliyarpuram
Muthialpet
Muthirayarpalayam
Muthukkadai
Muttukadu
Muzhicode
Muzhucode
Mylapore
N
N G O COLONY
N PUTHUR
N S Nagar
N. SUPPAIYAPURAM
N.H MAIN ROAD
N.muthulingapuram
NACHIARPATTI, KALAMPATTI
NADU THERU
NADUCAVERY
NADUTHERU
NADUVAKURICHI
NAGALAPURAM, THERKU ILANDAIKULAM
NAGALKENI
NAGAR
NAGARAJAPURAM POST
NAGARMALAI
NAGERCOIL
NALATINPUTHUR
NALLAMARAM
NALLERI
NALLITHAVANPATTI
NALLOOR
NALLUR
NALVAR LAY OUT RATHINAPURI
NALVAR LAYOUT ,RATHINAPURI
NANDAMBAKKAM
NANDANAM
NANJUNDAPURAM
NANMANGALAM
NARANAMANGALAM
NARANAMMALPURAM
NARASANKUPPAM
NARASINGAM
NARASOTHIPATTI
NARAYANA GURU ROAD
NARAYANAN NAGAR
NARIMEDU
NARYANAPURAM
NATARAJAPURAM WEST
NATTAMANAGALAM
NATTARKULAM
NAVAINDIA
NAVALUR
NAVARKULAM
NEAR ELCOT IT
NEAR HB
NEAR KALLUKOOTTAM
NEAR LYTON BUNGLOW
NEAR MASUTHI
NEAR PERUNGUDI
NEAR RAIL WAY STATION, NEDUMCODE
NEAR RAUL WAY TRACK
NEAR SAIBABA TEMPLE
NEAR SBIOA CHOOL
NEELANGARAI
NEELIKONAMPALAYAM
NEETHI NAGAR
NEETHI NAGAR EXT
NEGAMAM
NEHRUJI ROAD
NEIKUPPI
NELLIKKALAI,
NELLITHOPE
NELLITHOPPE
NEMILICHERRY
NEMMELI
NERA PANIMADHA CHURCH
NERKUNAM
NERKUNDRAM
NESAPAKKAM
NETHIMEDU
NETTANCODE
NETTANCODU
NEW APPANERI
NEW BUS STAND
NEW BUSTAND
NEW COLONY
NEW SARAM
NEW SARAM,
NEW SIDHAPUDHUR
NEW TRICHY BRANCH ROAD
NEW VILANGUDI
NEW WASHEEMENPET
NEW WASHERMENPET
NEWMADHANAGOPALAPURAM
NEWSARAM
NEYATINKARA
NEYOOR
NEYYOOR
NEYYOOR WEST
NGO COLONY
NGO NAGAR  T.KALLUPATTI
NILAPARAI
NILL
NILl
NIll
NO 1 TOLGATE
NO 1 TOLLGATE
NOCHIAM
NOCHIYAM
NOIDA
NOLAMBUR
NOOMBAL
NORTH COLONY
NORTH MASI VEETHI
NORTH STREET
NRT NAGAR
NRT ROAD
NSB road
NSK NAGAR
NTPL
NTPL HOUSING COLONY
NUNGAMBAKKAM
Nachikurichy
Nadaikkavu
NaducAVery
Nadutheri
Naga Sutharsan Nagar
Nagal nagar
Nagalai, Madurai
Nagarcoil
Nagercoil
Naidupuram
Nalankattalai
Nallamaram
Nallathur
Nallur
Namachivaya Nagar
Nambali
Nampali
Nanbargal Nagar
Nandanam
Nandhambakkam
Nandhanam
Nanganallur
Nanthavanapatti
Nanthavanapatty
Narasankuppam
Narasankuppam Village
Narasothipatti
Narasothypatty
Narayanan nagar
Nariman Point
Narimedu
Nataraj Nagar
Natesan Nagar East
Natham road
Natraj Nagar
Nattanipurasakudi
Nattham
Navarkulam
Navasakthi Nagar
Navtpur
Nayur
Near Arockyanathapuram Bus Stand
Near David Nagar Perumal Nagar
Near Guru Hospital
Near Temple
Near cashewnut factory
Near clock tower
Near thumba villai amman temple
Neelamangalam
Neelangarai
Neelikonampalayam
Neh
Nehru Nagar
Nehru nagar
Nehru nager velachery
Nehruji nagar
Nehruji nagar back side
Neikarapatty
Neikuppi
Nellithoppe
Nemeli
Nera kovil
Nerkundram
Nerkunram
Nerkuntam
Nesapakkam
Nethimedu
Nettancode
New Delhi
New housing unit
New mathanagopalapuram
New saram
Newbusstand
Neyoor
Nilakottai
Nilaparai
Nithiravilai
Nithiravilai veedu
Nochiyam
Noise road
Nolambur
Noombal
North Agasthiyarpuram
North Malayadipatti Rajapalayam
North soorankudy
North vasal
Not in the List
Ns nagar
Nsk nagar
Nungambakkam
O SIRUVAYAL ROAD
ODAIPATTI
OFFICE
OGIYAM THORAIPAKKAM
OKKIYAM
OKKIYAM THORAIPAKKAM
OLAIYUR MAIN ROAD
OLAIYUR MANI ROAD
OLAIYUR ROAD
OLD BUS STAND
OLD BUSSTAND SOUTH SIDE
OLD PERUNGALATHUR
OLD WASHERMANPET
OLD WASHERMEN PET
OLD WASHERMENPET
OMALUR MAIN ROAD
OMR
ONDIPUDHUR
ONDIPUDUR
OOMACHIKULAM
OOTY
OPERA FORTUNE KAMATCHI AMMAN NAGAR
ORLEANPET
OTAPIDARAM
OTHAKADAI
OTHAKADI
OTTAMARAM
OTTAPIDARAM
OTTERI
OTTERY
OTTHUPATTI
OTTRAPANA VILAI
OTTRAPANAVILAI
Observatory
Observetry
Observetry road
Observettry
Odiyampet
Old Karur road, Silapadi
Old Market Road
Old Market Road 190
Old Washermanpet
Old Washermenpet
Old batlagundu
Old washermenpet
Oldbusstand
Oldwashemenpet
Oomatchikulam
Oottukuzhi
Ootukuzhi
Ooty
Opp collectorate
Opp to NagaLakshmi flour mill
Opp to Sukrith Hyundai
Orleanpet
Oteri
Othakadai
Othaveedu
Ottapidaram
Oulgaret
P
P H ROAD
P R NAGAR VANIVELAMPATTI ROAD  T.KALLUPATTI
P T Moorthy Nagar
P.C.PATTI
P.N PALAYAM
P.PUDUR
P.R. NAGAR
P.R.NAGAR
P.S.P NAGAR KORAMPALLAM
P.SUBBULAPURAM
P.SUPPULAPURAM
P.THOTTIYAPATTI
P.Thottiyapatti
P.subbulapuram
PAARI NAGAR
PACODE
PADALUR
PADANTHALLUMOODU
PADANTHALMOODU
PADANTHALUMOODU
PADARNTHAPULI
PADI
PADIANALLUR
PADIANLLUR
PADIYANALLUR
PADIYANALUR
PADMAVATHY NAGAR
PADUR
PADYANALLUR
PAINKULAM
PAKKAMUDAYANPET
PALAI BUS STAND
PALAKKARAI
PALANGANATHAM
PALANICHETTIPATTI
PALANICHETTYPATTI
PALANIYAPPA NAGAR
PALAVAKKAM
PALAVAKKAM,
PALAVOOR
PALAYAMKOTTAI
PALAYAMKOTTAI ROAD
PALAYAMKOTTAI,
PALAYAMKOTTAO
PALAYAMKOTTUR
PALLAPATTI
PALLATHUR
PALLAVAKKAM KUPPAM
PALLAVARAM
PALLICHANVILAI
PALLIKUPPAM
PALLIVILAI
PALLUR
PALLYADI
PALSYAKKAYAL
PALUR
PAMATHUKULAM
PAMBANKULAM
PAMMADHUKULAM
PAMMAL
PANAMPARUTHIVILAI,
PANANGADI
PANANKALAI JUNCTION
PANDANTHALMOODU
PANDARAVILAI
PANDAVARMANAGALAM
PANDIAN NAGAR
PANDIKOVIL RING ROAD
PANPOLI
PANPOLI VANDUM POTHAL
PANPOLOI
PANPOZHI
PAPPANAMPATTI
PARAKKAI ROAD
PARAKKUNNU
PARAKKUNTU
PARAKUNNU
PARAKUNNU,
PARAMBALUR
PARANIPUTHR
PARANIPUTHUR
PARK TOWN
PARKITMA NAGARAM
PARRYS
PARTHIVA PURAM
PARUTHI VILAI
PARUTHIPATTU
PARUTHIVILAI
PASUMBALUR
PASUMPON NAGAR
PATHIRAKALLIAMMAN TEMBLE STREET
PATTAKOIL
PATTANAMPUDUR
PATTANUR
PATTAPATHU
PATTARIVILAI
PATTIVEERANPATTI
PAVOORCHATRAM
PAZHANKOTTAI
PAZHAVILAI
PBALURERAM
PC PATTI
PECHIKULAM
PEELAMEDU
PERAIYUR
PERAIYUR   T.KALLUPATTI
PERAIYUY
PERAMANUR
PERAMBALUR
PERAMBUR
PERAMPUR
PERAVALLUR
PERIA KOVIL STREET
PERIAMET
PERIAPILLAI VALASAI
PERIYA KADAI VEEDHI
PERIYA KOVIL STREET
PERIYAKULAM
PERIYAKULAM ROAD
PERIYAKULAM THALUK
PERIYAKULAM TK
PERIYAPANCHERY
PERIYAPILLAI VALASAI
PERIYAPUDUR
PERIYAR NAGAR
PERIYAR PATHAI
PERIYAR STREET
PERUBAKKAM
PERUMAL PURAM
PERUMALKOVILSTREET
PERUMALPET
PERUMALPURAM
PERUMANUR
PERUMBAKKAM
PERUNGALATHUR
PERUNGUDI
PERYAMEDU
PETCHIKULAM
PETTAI
PEYANKUZHI
PICHANDARAKOVIL
PILLAITHOTTAM
PILLAIYARKOVIL STREET
PILLAYARNATHAM
PILLAYARPALAYAM
PILLCHINNAMPALAYAM
PINPURAM
PIRAMUTHU LANE
PN PALAYAM
PN palayam
POLAMPATTI
POLEPETTAI
POLLACHI
POMMAYAKAVUNDAMPATTI
PONDICHERRY
PONMALAIPATTI
PONMALAIPPALLI
PONMANI
PONMANI GARDEN
PONMENI
PONNAGAR
PONNAMAPET
PONNI NAGAR KARAMBAKKAM
PONNUR
PONNUR VILLAGE
POOBALARAYAR PURAM
POOLAMBADI
POOLAMBADY
POOLAMPADI
POOMARKET
POONAMALLE
POONAMALLEE
POOTHURAI
PORIYALAR NAGAR
PORUR
PORUR GARDEN PHASE-1
PORUR GARDENS PHASE - I
PORUR GARDENS PHASE-1
PORUR GARDENS PHASE-2
PORUR KARAMBAKKAM
PSK NAGAR
PSK NAGAR BHARATHINAGAR
PSP NAGAR KORAMPALLAM
PUBALARAYAR PURAM
PUDIYAMPUTHUR
PUDUKKOTTAI
PUDUKOTTAI
PUDUPET
PUDUPPALAM
PUDUR
PULIAKULAM
PULIANKUDI
PULIYAKULAM
PULIYANTHOPE
PULLILANE
PULLILINE
PUNNAI VILLAGE
PURAM
PURASAIVAKKAM
PURASAIWAKKAM
PUSHPA NAGAR
PUTHALAM
PUTHANKADAI
PUTHIAMPUTHUR
PUTHIYAMPUTHUR
PUTHUKADAI
PUTHUKUDIYIRUPU
PUTHUNADUVALUR
PUTHUPALAYAM
PUTHUPATTY
PUTHUR
PUTHUR,
PWD Nager
Pa
Pacode
Padalur
Padanthalmoodu
Padanthalumoodu
Padi
Padianallur
Padianallur , Redhills
Padiyanallur
Padiyanallur, Redhills
Padiyanalur
Padur
Painkulam
Pakkamudianpet
Pakkamudiyanpet
Palaganatham
Palakarai
Palakkad
Palamarneri
Palanganatham
Palani road
Palankottai
Palavakkam
Palavar
Palayamkottai
Pallapatty
Pallavaram
Pallavaram S.O
Pallichanvilai
Pallikaranai
Pallivasal
Pallivasal street
Pambarpuram
Pambaruram
Pammadhukulam
Pammadukulam
Pammadukulam post
Pammal
Pammdukulam
Pamparpuram
Panaiyur
Pandavarmangalam
Pandeswaran
PandiKovil Street
Panpozhi
Parakunnu
Paraniputhur
Parasala
Parassala
Park Town
Parrys
Paruthipatti
Paruthipattu
Paruthivilai
Pasumpon Nagar
Pasumpon nagar
Pattakoil
Pattalam
Pattanur
Pattari villai
Pattinapakkam
Pavanar street
Pazhayavathalakundu
Peelamedu
Peraiyu
Peramanur
Perambalur
Perambular
Perambur
Perambur Barracks
Peravallur
Periapillaivalasai
Periya Pudur
Periyakoladi
Periyamet
Periyapanicheri
Periyapannaicheri
Periyar Nagar
Periyar Nagar,
Periyavilai
Perumalpuram
Perumbakkam
Perungudi
Perur
Pethaniyapuram
Pettai
Peyankuzhi
Pilamkala vilai
Pillaiyar Koil Street , Padianallur
Pillal nager
Pillanallur
Pillayarnatham
Pilluseri
Piranoor
Pollachi
Pomalai
Pon Nagar
Pon nagar
Pon nagar Extn
Pondicherry
Ponmeni
Ponmnani Garden Main Road
Ponnagaram
Ponneri
Ponnur village
Poolambadi
Poombarai
Poonamallee
Poondi
Poondivillaku
Poonthandalam
Poosaripatti
Porur
Porur garden phase -3 vanagaram
Porur garden phase 3
Porur gardens phase -1
Porur,
Pother
Pothur
Pottalkulam
Pottipuram
Prajana Matriculation School
Prakasapuram
Prespytrey
Priyadharshini Nagar
Pt moorthy nagar
Ptm nagar
Ptm nagar padiyanalur
Pudhu nagar
Puducherry
Pudupatti panchayat
Pudupet
Pudur
Puliangudi
Puliankudi
Pulianthope
Pulinintavilai
Puliyakulam
Puliyangudi
Puliyarai
Pune
Punnaiyapuram
Punniyam
Purasaiwakkam
Purasiwaka
Purthirampattu
Puthalam
Puthupatty
Puthur
Puttur
QUAIDE MILLATH ROAD
R A PURAM
RA
RA PURAM
RA Puram
RACE COURSE
RADHAPURAM
RAHMATH NAGAR
RAILWAY COLONY
RAINBOW NAGAR
RAJA GARDEN
RAJA NAGAR EXTN
RAJAGAMBEERAM
RAJAGOPAL NAGAR
RAJAKAMBIRAM
RAJAKILPAKKAM
RAJAKRISHNAPURAM
RAJAPALAYAM
RAJAPANDI NAGAR
RAJAPATHY
RAJAPUDUKUDI
RAJAS GARDEN CHETTIYARAGARAM
RAJAVALLIPURAM
RAJAVALLIPURAM,
RAJEEV NAGAR
RAJIV NAGAR NORTH
RAJIVE NAGAR NORTH
RAM NAGAR
RAMAIYANPATTI
RAMAKRISHNAPURAM
RAMALINGA NAGAR
RAMANATHAPURAM
RAMANPUTHUR
RAMANUJA NAGAR
RAMAPURAM
RAMAVARMAN PUTHU THERUVU.
RAMMUNNI NAGAR
RAMNAGAR
RANGASAMY KULAM
RANGASAMYKULAM
RANIPET
RASTHA
RATHINAM  NAGAR EAST
RATHINAM NAGAR
RATHINAPURI
RC STREET
RCC BUILDING
REDDIARPALAYAM
REDDIYARPALAYAM
REDDIYARPALLAYAM
REDDIYUR
REDDY NAGAR
REDDYKUPPAM
REDHILLLS
REDHILLS
RICE MILL STREET
RING ROAD
RM COLONY OPPOSITE TO WATER TANK
RMK NAGAR
RMVARDARAJANSTREE
ROAD
ROHINI
ROSE NAGAR
ROVERARCHI
ROYAPETTA
ROYAPETTAH
ROYAPURAM
RR par
RS PURAM
RS puram
RTO Office Road
RTO Office Road, 1st Street, (292A)
Ra
Race Course
Radhakrishana Nagar
Radhakrishnan Street
Rainbow Nagar
Raja Annamalaipuram
Raja Colony
Raja colony
Raja nagar 1st cross street
Rajagopal Nagar
Rajaji Nagar
Rajakaliamman nagar
Rajakapatti
Rajannagar
Rajapalayam
Rajiv Gandhi Nagar
Ram Nagar
Ram nagar
Ramakrishna road
Ramalinga Nagar
Ramalinga nagar
Ramanathapuram
Ramanayakkanpatty
Ramapuram
Ramavarma puram
Ramji traders
Rangareddy
Rangasamy kulam
Rangaswamy kolam
Ranipet
Rashion shop
Rathna Nagar
Rayanthur
Rayasandra
Reddiarpalayam
Reddiyapatti post
Reddiyarpalayam
Reddiyarpalayam Oulgaret
Reddiyur
Reddykuppam
Redhills
Rengappanayakkanpatty
Rettai Vaikal
Rettaivaikkal
Rettiyapatti
Riddles
Ring Road
Ringroad
Rjin
Round road
Royapattah
Royapettah
Royappa Nagar
Royapuram
S Kolathur
S.ALANGULAM
S.KEELAPATTI
S.KOLATHUR
S.KULATHUR
S.RAMACHANDRAPURAM
S.Rayavaram, Visakhapatnam
S.T MANKAD P.O
SADASIVAM NAGAR
SAIBABA COLONY
SAIBABACOLONY
SAIDAPET
SAKKARAJAKOTTAI STREET
SAKKILIYANKULAM
SALAMEDU
SALAVANKUPPAM
SALEM
SALIGRAMAM
SAMADARMAPURAM
SAMADHARMAPURAM
SAMATHANAPURAM
SAMATHARMAPURAM
SAMATHUVAPURAM
SAMAYAPURAM
SAMAYAPURAM MAIN ROAD
SAMAYAPURAM PORUR
SAMI NAGAR,
SAMINATHAPURAM
SAMINATHAPURAM MAIN ROAD
SAMMANTHAPURAM
SANDAIYUR
SANJEEVIRAMAN KOVIL STREET
SANKAR COLONY 3RD STREET
SANKAR NAGAR
SANKARALINGAPURAM
SANKARANKOVIL ROAD
SANKARAPANDIYAPURAM
SANKARNAGAR
SANTHOME
SARAL
SARALVILAI
SARAM
SARAVANAMPATTI
SARUTHUPATTI
SASTHA NAGAR
SATHANUR
SATHANUR POST, K K NAGAR
SATHANUR VILLAGE
SATHIYAMOORTHY BLOCK
SATHYA MOORTHY BLOCK
SATHYA NAGAR
SAVARIMANGALAM
SAVARIYA PICHAI LANE
SEE
SEELANAICKAMPATTI
SEELANAICKANPATTI
SEELANAICKENPATTY
SEELANICKENPATTY.
SEERANGAPALAYAM
SEEVARAM
SEKKALAI
SELAIYUR
SELVAPURAM
SELVIZER 2ND STREET
SEMBANUR
SEMBIUM
SEMBUR
SEMMANCHERRY
SEMMANCHERY
SEMMENCHERY
SENAM VILAI
SENJAI
SENJERY
SENKOTTAI
SENKOTTAI TENKASI
SENNAVARAM
SENNAVARAM, VANDAVASI
SENTAMIZH NAGAR
SENTHALAI
SENTHIL NAGAR
SESAYE NAGAR
SEVAOORANI
SEVEN WELLS
SEVENWELLS
SEYDUNGANALLUR
SHANDRAPANDI MANDABAM
SHANMUGA PURAM
SHANTHI COLONY,
SHENKOTTAI
SHENOY NAGAR
SHEVAPET
SHEVAPET.
SHEVAPRT
SHOLAVARAM
SHOLINGANALLUR
SHOLINGHUR
SILARMALAIPATTI
SILARPATTI
SILUVAIYAR
SIMMAKAL
SINDUPOONDURAI
SINGANALLUR
SINGAPALLI, KILKODUNGALORE
SIPPIPARAI
SIRAYANVILAI
SIRUVACHUR
SIS CAPETOWN
SITHANKUDI
SIVANANDHAPURAM
SIVANTHI PURAM
SIVANTHIPATTI
SIVANTHIPURAM
SIVARAMAPURAM
SIVASUBRAMANIYA NAGAR
SM BLOCK JAFFERKHANPET
SOLAIMALAI EXTENSION
SOLAIMALAI NAGAR
SOLAINAGAR
SOLAIYUR
SONAI MEENA NAGAR
SOOLAIMMA NAGAR
SOORAPATTU
SOORIYACODE
SORAPUTHUR
SOUTH AGASTHIYARPURAM
SOUTH AGATHIYARPURAM
SOUTH CAR STREET
SOUTH COTTON ROAD
SOUTH EMPEROR STREET
SOUTH STREET
SOUTH THEETHAMPATTI
SOUTH THITTANKULAM
SOWCARPET
SOWDAMBIKA NAGAR
SOWRIPALAYAM
SRI DEVI KARUMARI AMMAN NAGAR
SRI RAM NAGAR
SRI RAM NAGAR ,
SRINIUM
SRINIVASA NAGAR
SRIPERUMBUDUR
SRIRANGAM
SRIRENGAPURAM POST
SRISAM NAGAR
SRIVAIKUNDAM
SS COLONY
SS Colony
SS colony
SS nagar
ST Mankadu
ST. PETER KOIL STREET
ST. THOMAS MOUNT
ST.MARYS COLONY
ST.PAUL PET
STARTERAERERAKOIL
STATE BANK COLONY
STREET
SUBBULAPURAM
SUBRAMANIPURAM
SUBRAMANIYA PURAM
SUKKUVADANPATTI
SUKRAWARPET
SULEESWARANPATTI
SUNAMI COLONY
SUNDARAJANPATTI
SUNDARAM COLONY
SUNDARAM NAGAR
SUNDARANACHIYARPURAM
SUNDARAVEL PURAM
SUNGAM
SURAMANGALAM
SURAPET
SURYA NAGAR
SUTTAMALLI
SWAMI VIVEKANANDHA NAGAR
SWAMINATHAM
SWAMINATHAPURAM
SWAMY VIVEKANANADA NAGAR
SWAMY VIVEKANANDA NAGAR
SWARNAPURI
SYDENGANALLUR
Sadaiyampattu
Sadasivanagar
Sai baba Colony
Saibaba Colony
Saidapet
Saitji Nagar
Salai road
Salaiyur
Salem
Samathuvapuram
Sambavar Vadakarai
Sammati Puram
Sangarnagar
Sangillyandapuram
Sanjai Gandhi nagger
Sanjay nagar
Sanjeeviraman Kovil Street
Sankar Nagar
Sankarankovil road
Sankarapuram
Santhome
Saradhambal Nagar
Saram
Saram,
Saranarayana Nagar
Sarathakandigai
Saravanampatti
Sarvanampatti
Sathamangalam
Sathanur
Sathya Nagar East
Scheme road
Scv 472B
Secunderabad
Seelanaickenpatty
Seelapadi
Seeman Nagar
Seenivagam B Colony, Arockianathapuram
Seenivasapuram
Seerangapalayam
Sekittavilai
Sekkapatty
Sellaperumalpet
Selva Nagar
Selva nagar
Sembadu
Sembakkam
Sembaruthi Nagar
Semmanchery
Senbaganur
Sencottai
Sengundramnagar
Senndamangalam
Senthalai
Senthaneerpuram
Setapatty
Seven Wells
Seven road junction
Shakthi Nagar
Shanmugapuram
Shanthi Nagar
Shenbaganoor post
Shenbaganur
Shenbagathottam colony
Shenkottai
Shenoy Nagar
Shevapet
Shivaji Nagar
Shivaya Nagar
Sholavaram
Sholinganallur
Shollinganalliur
Shri Rangapalayam
Silarpatti
Siluvathur road
Simmakkal
Singa meththai
Singanallur
Singarakottai
Sinthampalayam
Siruniam
Sirunium
Sirunium,
Siruniyam
Siruniyam Village
Siruvacher
Siruvachur
Siruvangur
Siruvathur
Sithalapakkam
Sithanandha Nagar
Sittalapakkam
Sivagami Nagar
Sivagnanapuram
Sivan Kovil Street
Sivanamda nagar
Sivapuram, Kumbakonam
Sivaramapuram
Sivasakthi nahar
Sokkanathanpet
Solavaram
Somarasampettai
Somarsampettai
Somwar Peth
Sonbiyanenthal
Soupagiyanagar
South Car Street
South Uplipalaiyam
Sowcarpet
Sowripalayam
Sp mainroad
Sreenivasapuram
Sri Devi Kuppam Main Road
Sri Rajakaliamman nagar,
Sri Ram Nagar
Sri Ramnagar
Srinivasan Nagar
Srinivasan nagar
Srinivasanagar
Srinivasapuram
Sriperumbudur
Sriperumpathur
Sriram Nagar
Srirangam
Ss colony
St Mankadu
State Bank colony
Subbiah Nagar Annex,
Subramaniyapuram
Subramanya Puram
Sudhakar Nagar
Suganya Nagar
Sukrawarpet
Suleeswaran Patti
Suleeswaranpatti
Sundaracholavaram
Sundarajahpatti
Sundarajan ptti
Sundarajanpatti
Sundararajanpatti
Sundaresan nagar porur
Sundarrajanpatty
Sundrarajanpatti
Sundrarajanpattl
Suramangalam
Suriyagandhi Nagar
Surveyor nagar
Surya nagar
Swaminathapuram
Swarnapuri
T
T NAGAR
T T K PATTU PALVAYAL
T T. .K PATTU
T,KALLUPATTI
T. kallupatti
T.KALLUPATT
T.KALLUPATTI
T.KARISALKULAM THIRUMALKANTHAKOTTAI
T.KUNNATHUR
T.KUNNATTHUR
T.Kallupatti
T.N.Puthukudi
T.N.puthukudi
T.PUDUPATTI
TAC NAGAR
TACHANALLUR
TALAIYUTHU
TAMBARAM
TAMBARAM EAST
TAMBARAM WEST
TAMBRAM
TARAMANI
TATABAD
TEACHERS COLONY
TELECOM NAGAR,VALAR NAGAR
TENKASI
TENNUR
TENNUR,
TERRANAGAR
TEVANKURICHI
TEYNAMPET
THACHANALLUR
THACHAR STREET
THADAGAM ROAD
THADANGANAI, MANAGASERI
THALAIYUTHU
THALAKKULAM
THALAKULAM
THALLIYAR AGARAM
THALLIYARAGRAM
THAMARAIKULAM
THAMOTHARA NAGAR
THANAKKANKULAM
THANDHAI PERIYAR QUARTERS NEAR
THANDURAI
THANEERPANDHAL
THANGAMMAL PURAM
THANI vilai
THANIKOMAM
THANJAVUR
THARAPAKKAM
THATCHANALLUR
THATHANKULAM
THATTANCHAVADI
THATTANCHAVADY
THATTAR STREET
THE MARINA MALL
THEERAPPER LANE
THEERTHAGORYAMPATTU
THELLAIYARAGARAM
THELLAYARAGARAM
THELLIARAGARAM
THELLITARAGARAM
THELLIYAR AGARAM
THELLIYARAGARAM
THELLIYARAGARAM ayyappanthangal
THELLIYARAGRAM
THELLYAGARAM
THENDRAL NAGAR
THENI
THENKAPATANAM
THENNUR
THENPATHU
THENPOTHAI
THERESHPURAM
THERGUVENGANALLUR
THERKU KALUGUMALAI
THERKUTHERU
THICKANANAMCODE
THILAIYARAGARAM
THILASPET
THILLAI NAGAR
THILLAIYAR AGARAM
THILLAIYARAGARAM
THILLIYARAGARAM
THILLIYARAKRAKARAM
THIMMARAJAPURAM
THINGAL NAGAR
THINGALNAGAR
THIRUKUMARAPURAM
THIRUMAL NAGAR
THIRUMALAI NAGAR
THIRUMALAPURAM
THIRUMALPURAM
THIRUMANGALAM
THIRUMOHUR
THIRUMOOLA NAGAR
THIRUNAGAR
THIRUNELVELI
THIRUPALAI
THIRUPARAKUNDRAM
THIRUPARAMKUNDRAM
THIRUPARANKUNDRAM
THIRUPORUR
THIRUPPALAI
THIRUPPANI KARISALKULAM
THIRUPPANIKARISALKULAM
THIRUPPARANKUNDRAM
THIRUVALARCHIPATTY
THIRUVALLUR
THIRUVALLUR NAGAR
THIRUVALLUR STREET ARANARAI
THIRUVALLUVAR NAGAR
THIRUVANATHAPURAMSTREET,RAJAPALAYAM
THIRUVANMIYUR
THIRUVANNAMALAI
THIRUVAVANANTHAPURAM STREET
THIRUVERKAD
THIRUVERKADU
THIRUVOTRIYUR
THITTASALAI
THIYAGARAJA NAGAR
THIYAGI SUBBAIAH STREET
THONDAPADI
THOOTHOOR,
THOOTHUKKUDI
THOOTHUKUDI
THOPPUKADU
THORAIPAKKAM
THORAMANGALAM
THOUSAND LIGHTS
THREE ROADS
THRESHPURAM
THUCKALAY
THUNDALAM
THURAIMANGALAM
THURAIYUR ROAD
THURAIYUR-CHENNAI BYPASS ROAD
THURAIYURROAD
THURU VI KA NAGAR
TIANAKANKULAM
TINDIVANAM
TIRICHY
TIRUCHENDUR ROAD
TIRUNELVELI
TIRUNEVELI
TIRUPPUR
TIRUVALLIKKENI
TIRUVALLUR
TIRUVANNAMALAI
TM NAGAR
TMB COLONY
TNHB COLONY
TNHB PLOTS PHASE 3
TNHP Quoters
TOLGATE
TONDIARPET
TOOVIPURAM 10TH STREET
TOWN
TP CHATHIRAM
TPL
TRAVELS SHOP
TRICHY
TRICHY MAIN ROAD
TRICHY ROAD
TRIPLICANE
TTC Industrial Area
TUTICORIN
TV Nagar
Tagore Nagar
Tambaram
Tambaram East
Tambaram West
Tambaram sanatorium
Tamil Nadu
Taramani
Teacher City
Teacher City phase 2
Teacher Colony
TenamPet & Alwarpet
Tenkasi
Tennur
Teynampet
Thachur
Thalakulam
Thambusamy Road
Thandalam
Thandhai Periyar Salai
Thane
Thaneerpanthal
Thanjavur
Thannerpandal
Thanthai Periyar Nagar
Tharanallur
Tharapakkam
Thasildhar nagar
Thattanchavady
The Marina Mall
The Marina Mall.
The merina mall
Theerthagiriyampattu
Theerthakariyampattu
Theliiyagaram
Thelliyar aagaram
Thelliyar agaram porur
Thelliyaragaram
Thelliyaragaram village
Thelliyaragaram village, Porur
Thelliyaragram
Thengamputhur
Theni
Thenkiranur
Thenthorasalur
Therkutheri
Thersanagar
Thilagar Nagar
Thilaspet
Thillai Nagar
Thillai nagar
Thingal nager
Thingalnager
Thirriverkadu
Thiru Mangalam
Thiru nagar
Thiru-vi-Ka Nagar
Thiruchennampoondi
Thirukalukundram
Thirukattupalli
Thirumal Nagar
Thirumalai Nagar
Thirumalai Nager
Thirumalai Thayar Nagar
Thirumalai colony
Thirumangalakudi
Thirumangalam
Thirumullaivoyal
Thirunaagar
Thirunagar
Thiruparankundram
Thiruppalai
Thirupparankundram
Thiruvaiyaru
Thiruvakavundanur
Thiruvallur
Thiruvalluvar road
Thiruvanmaiyur
Thiruvanmiyur
Thiruverakdu
Thiruverkadu
Thiruvidanthai
Thiruvilanpatti
Thoothoor
Thoothukudi
Thoraipakkam
Thottadivilai veedu
Thottanoothu post
Thousand Light
Thousand light
Thuckalay
Thuiyaneri
Thummancode
Thundalam
Thuraimangalam
Thuthur
Thyagaraja Nagar
Thyagaraja nagar
Thygarayanagar
Tindivanam
Tirinagar
Tirukudumpam 1
Tirumangalam
Tirunagar
Tirunelveli
Tiruvallur
Tiruvannamalai
Tiruvarur
Tiruvottiyur
Tondairpet
Tondiarpet
Town
Trichy
Trichy Road
Trichy road
Triplicane
Trplicane
Tuticorin
UDAIYAN PATTI
UDAIYANPATTI
UDAIYANPATTY
UDAIYARVILAI
UDAYAMPALAYAM
UDAYANPATTI
UDAYAPATTI
UDAYARVILAI
UDIAYARPATTI
ULAGANERI
ULLAGARAM
ULLASA NAGAR
ULUNDURPET CIRCLE
UMACHIKULAM
UNJAMPATTI
UNJAMPATTY
UNJAVELAMPATTI
UPPARPATTY
UPPILIPALAYAM
USP NAGAR
UTHANDUDI
UTHANGUDI
UTHIYAR VILAI
UYYANKONDANTHIRUMALAI
UZHAVARKARAI
Udayapatti
Ugarthenagar
Ulagamkathan
Ullagaram
Unit 3
Uppilipalayam
Upplipalayam
Urapakkam
Uruvaiyar
Uthagudi
Uthangudi
Uthinintavilai
Uthiramerur
Uthivilai
Uthivilai vdu
Utthiramcode
Uttiramcode
Uyyakondanmalai
V
V Manaveli
V.AMMAPATTI
V.KEERANUR
V.M.CHATRAM
V.S.K.M NAGAR
VADACOVAI
VADAGOVAI
VADAKARAI
VADAKKU KEELUR
VADAKKUMADHAVI
VADAKKUMADHAVI ROAD
VADAKKUMADHAVIROAD
VADAKKUPATTI
VADAKKUPATTI, ILAYARASANENDAL
VADAKU KALANGARAI
VADAKU MATHAVI ROAD
VADAKU THERU
VADAKUMATHAVI ROAD
VADANEMMELI
VADAPALANI
VADIPATTI
VADIVEL NAGAR
VADUGANPATTI
VADUGAPATTI
VAGAIKULAM
VAIDIYALINGA PURAM
VAIGAI CITY
VAITHIKUPPAM
VAIYUR
VALASARAVAKKAM
VALLAM
VALLIOOR
VANAGARAM
VANARAMUTTI
VANAVASI
VANDAVASI
VANDI SOLAI
VANIVELAMPATTI  PERAIYUR  MADURAI
VANIVELAMPATTI ROAD
VANIYANKUDY
VANNARAMUTTI
VANNARPETTAI
VANNARPETTAI,
VANNIVELAMPATTI
VANNIYOOR
VANNOOR
VARADHARAJAPURAM
VARAGAPURAM
VARAVUVILAI
VASAN NAGAR
VAVARAI
VAYALUR
VAZHAIYATHUPPATTI
VAZHUDHAREDDY
VAZHUR
VAZHUR VILLAGE
VE ROAD
VEERAANDI
VEERAPANDI
VEERAPANDI (Post)
VEERAPANDIAR NAGAR
VEERAPANJAN
VEL
VELACHERY
VELAGOUNDAMPATTI
VELAMMAL NAGAR
VELAMPUR
VELANDIPALAYAM
VELLAIYAMBALAM
VELLARAM
VENGALAM
VENGALAM (EAST)
VENGAPAKKAM
VENKADAMPATTI
VENKADESWARA NAGAR
VENKATAPURAM
VENKATARAMAN NAGAR
VENKATESANPURAM
VENKATESAPURAM
VENKAVILAI
VENKITAPURAM
VENKITTAPURAM
VEPERY
VEPPANTHATTAI
VEPPANTHATTTAI
VETTAIKARANKULAM
VETTIKARANKULAM TENKASI
VETTUVANGANI
VGN Orville
VICKRAMASINGAPURAM
VIDHYALAYA ROAD
VIJAYAGOPALAPURAM
VIJAYARAGAVACHARI ROAD
VILAI
VILAMUTHUR
VILANGADU
VILANGADU VILLAGE
VILANGUDI
VILAVANCODE
VILLAGE
VILLAGE SHOLINGANALLUR
VILLANKURUCHI
VILLIANUR
VILLISERI
VILLIVAKAM
VILLIVAKKAM
VILLUKURI
VILLUPURAM
VILLUPURAM SIGNAL
VILLUR
VILUPURAM
VINCENT NAGAR
VIRIVILAI
VIRUDHUNAGAR
VIRUGAMBAKKAM
VITILAPURAMKOVILPATHU
VITTHALAPURAM
VITTHALAPURAM KOVILPATTU
VIVEKANANDA
VM CHATHIRAM
VMS NAGAR NORTH
VOC MARKET
VOC NAGAR
VSKottai
VTC
VTC VELAMBUR
VVP nagar
VYASARPADI
Vadakkumadavi road
Vadakkuvilai
Vadakoor
Vadakumadavi road
Vadakumathavi road
Vadalivilai
Vadapalani
Vadivel Nagar
Vaduganpatti
Vaigai Nagar
Vaithikuppam
Vaithikuppam,
Valaiyachuttu
Valar Nagar
Valasaravakkam
Valasarawakkam
Valasarvakam
Valayachittu
Valayachuttu
Vallaba Vidhyalaya
Vallam
Valliatinkarai
Vanagaram
Vanagaram Iyya
Vanamamalai Nagar
Vandavasi
Vannanvilai
Vanniyoor
Varaganoor
Varagur
Vasantha nagar 1st cross
Vattapazanchi
Vavarai
Veeracholapuram
Veerapandi
Velacherry
Vellanur
Velmurugan nagar
Velur
VengaPakkam
Vengalam
Vengampakkam
Vengatashrikottai
Vengatesapuram
Vengavilai
Vengittapatty
Venkadasthikottai
Venkata Nagar
Venkatapuram
Venpurusam
Vepanthatai
Vepery
Vettuvangani
Vettuvankeni
Vettuvankeni,
Vierakal
Vilangudi
Vilavancode
Villankurichi
Villivakkam
Villiyanur
Villpatti
Villupuram
Vilukuri
Vinayagapuram
Vinayagar street
Viralipatty
Virattipathu
Virudeedu
Virudhunagar
Virugambakkam
Viruveedu
Vistharippu west
Vivekananda nagar
Vivekanandha Nagar
Vivekananthar nagar
Voc nagar
Vododara
Vyasarpadi
W
WALLAJABATH
WASHERMANPET
WASHERMENPET
WEST JAFFERKHANPET
WEST KK NAGAR
WEST MAMBALAM
WEST NEYYOOR
WEST TAMBARAM
WEST THALAIYUTHU
WHITE TOWN
WILLIANACE ROAD
WORAIYUR
Washermanpet
Washermenpet
Washrempet
West Mambalam
West Saidapet
West Shenoy Nagar,
West street
White Town
White town
Woraiyur
Y PUDHUPATTI
Y PUDUPATTI
Y pudupatti
Y.OTHAKADAI
YADAVA WOMENS COLLEGE
YADAWA COLLEGE
YESANAI
ZAMIN DEVARKULAM
ZAMIN PALLAVARAM
ZAMINDEVARKULAM
Zamin Pallavaram
Zamin pallavaram
ZaminDevarkulam
_
a adi diravidar colony
a.r residency
aarumugam road
aathur mainroad
abiramapuram
agri marketing office frontside
airport road
aiyilur road
alagapuri
alangulam
alapakkam
aliyar nagar
alwarthirunagar
ambattur
ambattur industrial estate
ambedhkar street
ambethkar nagar
ambethkar street
aminjikarai
amman street
anadha nagar
anaimalai
anaipadi
anand nagar
anapudaiyan kovil street
andal nagar
andipatti
anjugramam
anjugrammam
anna nagar
annanagar
annanagar street
annax rajisalai
aranarai north
arasalur
arcot
arignar anna street
arivu thiru kovil street
arivu thirukovil street
ariyalur road
arumbavur main road
arumbavur mainroad
arunagirimangalam
arunthathiyar street
arunthiyar street
ashok nagar
astalakshmi nagar
athithiravedar street
athur mainroad
attur main road
attur mainroad
avadi
avr nagar
avvaiyar street
ayilur kudikadu
ayyanarkulam
ayyarpalayam
azhagappapuram
azhahappapuram
basila complex
bethaniyapuram
bharadithasan nagar
bharadithasan nagar 3rd street
bharathidasan nagar
bharathidhasan nagar
bharathithasan nagar
bharathiyar theru
bhavathipuram
cabirial nagar
center street
chatrapatti
chekkadi street
chellam illam
chennai
chennai highway
chinnampalayam
chittur
cholavaram
coiambatore
colony north
courtallam
cruz puram
dadagapatti
dhanalakshmi srinivasan multi splty
dhanalakshmi srinivasan multisplty
dharmaraja kovil street
dolphin nagar
dsmch campus
eachnkadu
east street
eaststreet
echampatti
edaryapalam
edayarpalayam piriu
ekandhipuram
elambalur
elambalur road
eraiyur
evergreen nagar
fathima college
fourth street
ganapathi puram
ganapathy nagar 2nd street
gandhi nagar
gangai Amman  Nagar
gangaiamman nagar
george town
global nagar
goldencity
gudalur
honda show room backside
hospital complex
ichankadu
ilupakudi
indhiranagar
indira Nagar
indira anagar
indira nagar
indra nagar
iraniyam
irumbuliyur
irur(R.V)
jail corner
jamestown
jeeva nagar
jeevan nagar
jeevananthapuram
jothinagar
jothinagar D colony
judu building
k pudur
k.pappunaickenpatti
ka mamanandal
kadacendal
kadachanenthal
kadai veethi
kadaiveethi
kadaneri
kaikalathur main road
kalaignar colony
kalapati
kalayan nagar
kalichaimedu
kalitheerthanpatti
kalkailathur
kallakurichi
kallikattuvilai
kalluthu
kalottar street
kaluneerkulam
kalyan nagar
kalyan nagar south
kalyannagar
kalyannagar south
kamalakannappan nagar
kamarajar street
kamban nagar first street
kamban street
kampan nagar
kanagappapuram
kanahappapuram
kanchipuram
kanchpurate
kandukulam
kaniyakumari
karikalan street
karpagam nagar
karpaganagar
karpaganagar 4th street
karunanithi bavanam
karunayanandha nagar
kathikamam
kathirkramam
kattoor
kattu kottai
kattukottai
kaveri nagar
kaverinagar
kavery nagar
kavundampalayam
kavundanpalayam
keela street
kidarakulam
kila bajanamada street
kilaku theru
kilpackkam
kishore illam
kk nagar
kk nagar extension
koKOTTAPATTU
kodaikanal
kodungaiyur
kogungaiyur
kokkilamedu kuppam
kolapakkam
kootapuli
koothanur
koothur
korattur
kottarai
kottivakkam
kovilambakkam
kpg nagar
krishna nagar
krishna theater back side
krishnapuram
kulasekharam
kulumani Road
kundrathur main road
kuniyamuthur
kurippankulam
kurumbalur
kurusukuppam
kuruvankottai
ladies police quarters
lakshmipuram
laskmipuram
laskmipuran
laws pet,
lawspet
levenjipuram
levinjipuram
levinjupuram
lourdu nagar
m
madampillaitharmam
madhanagopalapuram
madhurakaliamman nagar
madipakkam
madurai
madurakaliamman kovil gust house
main road
mainroad
makkinamaptti
makkinampatti
manikarampalayam
marathancode
maravankulam area
margandeyankovil street
mariamman temple street
maripuram
mariyamman kovil street
marrypuram
maruthamputhur
maruthi nagar
marypuram
masuthi street
mathanagopalapuram
mathoorkonam
meen nagar
meenatchipet
meenatchipuram
megnanapuram
mekkarai
melapuliyur
melaseenivasapuram
melaveedhi
merkku periyammapalayam
mettankadu
mettu street
mettu theru
mettustreet
mettutheru
mg hospital near
mgr nagar
middle street
min nagar
minnagar,chinnampalayam
mkt street
mogappair
mogappair Erischeme
mogappair west
mohamed sha puram
monday market
mottavilai
mr nagar
mullai nagar
muthialpet
muthu nagar
muthu nagar 1st street
muthulakshminagar
muthunagar east
mv puram
mvk nagar
nadarajan chettiyar illam
nadu street
nadu theru
nadustreet
nadutheru
nagercoil
nainammal thottam pirivu road
nalleri street
nallur
nallur village
nannagram
natesan nagar
nattaerkadu
navalpur
near canara bank
neelamangalam
nehru nagar
nergunam
nerkunam
nerkundram
new bus stand backside
new colony
new madhanagopalapuram
new mg puram
new saram
new street
new washermenpet
new washernmenpet
nill
no 1 tolgate
no 1 tollgate
nochiyam
nolambur
north colony
north street
north street 1
nova nagar
nsk nagar
old busstand
old hospital road
old washermenpet
oomachikulam
oothangal
ooty
opp to chellam hospital
otha theradi street
outh street
padi
padur
palakkadu road
palayamkottai
palladam
palladam road
pallivasal kovil street
pallivasal street
pamban nagar
pambangar
panagudi
panankalai
pandagapadi
panniyar street
panpoli
paravaai road
paruthipattu
pasumalai
pcm nagar
perambalur
periya south street
periyar nagar
perumakovil street
perumal kovil street
perumalkovil street
perumalkovilstreet
perungudi
perungugi
pillaiyar kovil street
pillaiyar temple street
pks colony
pollachi
pondicherry
ponmeni
poolambadi
poolangulam
poondi
porur
post office street
pothur
pranthaneri
pudhiyamadhanagopalapuram
pudhu nagar pullilion
pudukudiyuruppu
pudupatti
pudupatti panchayat
puliangudi
puliyangudi
pulliline
pullilion
punnarkulam
puthiya mathanagopalapuramuram
puthuvellur
raja 2nd street
rajaji street
rajamangalam
rajithapuram
ramalinga nagar
ramanathapuram
rangswamykulam
ranipet
rashini nagar
redhills
renga nagar
rengammal nagar
rmk nagar
roja nagar
rose garden
rose nagar
rose nagar extension
rosenagar
rural development department
s a garden
salaiyur
salamedu
samiyappa nagar
samiyappanagar
samyappa nagar
sanal karai
sanjeevraman kovil street
sanjiveerayan kovil street
school street
seenivasapuram
sekkadi street
selva nagar
sembagounder colony
sembianenthal
sendamangalam
senjeri
sennavaram
shanmuga nagar
shannathi
shenkotti
shevapet
silarpatti
sirinium
siruvachur
sivalarkulam
sivan kovil street
sivankovil street
sivaramapuram
sivasakthi nager
small south street
solinganallur,
south street
south thamaraikulam
sreelakshmipuram
sri renganagar
staffquarters
subburayan street
suganesh nagar
sundar nagar
sundarajanpatti
sundarajanpatty
sundarambal street
sundarnagar
sungurampatti
surapet
t.kallupatti
tamabaram sanatoriyam
tamil nadu
teeran nagar
thandhai periyar nagar
thanirpanthal
thasilthar nagar
thazhuthalai road
theeran nagar
thendral nagar
theradi street
therku theru
thillai nagar
thillainagar
thindivanam
thirumangalam
thirupaalai
thiruppalai
thiruvalluvar street
thoddikkam,
thousand lights
thuraimangalam
thuraiyur - chennai bypass road
thuraiyur road
tirumangalam
tirunelveli
tiruppur kumaran street
tiruvallikkeni
tiruvalluvar theru
tollgate
town
trichirappalli
trichy
trplicane
ukkadam
ukt malai
uruvaiyar
uthagudi
uthangudi
uyyakondanthirumalai
vadakku colony
vadakku theru
vadakumathavi road
vadamalaipatti
vadapalani
vadasery
valikandapuram
vallalar street
vallam
vallapuram
valluvar naga
valluvar nagar
valsaravakkam
valudareddy
vannivelampatti
variyoor
variyur
vasan nagar
vasan valley
vasanthan illam
vasanthbabu nager
vasiyapuram
veerakanur mainroad
veerakeralamputhur
velan nagar
veliyampakkam
vellore
venbavur
vengadesapuram
vengatasalapuram
vengatesapuram
vengatesapuram kalani
vengatesapuram street
vengavilai
venkatesapuram
venkatesapuram colony
venkatewsapuram
venpurusam
veppanthattai
vetri nagar
vilamuththur
vilangudi
villiyanoor
vinayagar street
vinyagar kovil street
virugambakkam
vivekanandar street
vivekananthar street
vivekananthar theru
vk road
voc street
vyarsarpadi
wEST NEYYOOR
walajabad
walajapet
west abiramapuram
west street
wireless road
y pudupatti
yerayur road
yesanai
zamin uthukuli
KARUNGULAM `,Zo=Array.from(new Set(dx.split(/\r?\n/).map(a=>a.trim()).filter(Boolean))),mx=[{id:"essential",name:"Essential",speed:"75",price:599,data:"Unlimited",benefits:["HD streaming","Free dual-band router"],ott:["Hotstar","ZEE5","SonyLIV","Amazon Prime"]},{id:"pro",name:"Pro",speed:"100",price:699,data:"Unlimited",benefits:["4K streaming","Wi-Fi 6 router","Priority support"],ott:["Hotstar","ZEE5","SonyLIV","Amazon Prime"],popular:!0},{id:"ultra",name:"Ultra",speed:"300",price:999,data:"Unlimited",benefits:["8K ready","Wi-Fi 6E mesh","VIP support"],ott:["Hotstar","ZEE5","SonyLIV","Amazon Prime"]}],cm=Zo.slice(0,18),fx=Zo.length,dm=28;function mm(){const[a,i]=M.useState(!1),[o,c]=M.useState(!1),[d,m]=M.useState(null),[f,A]=M.useState(!1),p=()=>{i(!0)};return l.jsxs("div",{className:"flex flex-col",children:[l.jsx("section",{className:"relative overflow-hidden bg-gradient-to-br from-[#FBEEEF] via-white to-secondary/40 border-b border-border",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[l.jsxs("div",{className:"flex flex-col gap-5",children:[l.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full w-fit",children:[l.jsx(Li,{className:"w-4 h-4 text-primary"}),l.jsx("span",{className:"text-sm text-primary",children:"Tamil Nadu Coverage"})]}),l.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight",children:["Stay Connected,",l.jsx("br",{}),l.jsx("span",{className:"text-primary",children:"We are Here"})]}),l.jsxs("p",{className:"text-muted-foreground max-w-md",children:["Cherrinet's fiber network spans across Tamil Nadu — bringing blazing fast, reliable internet to ",dm,"+ districts and growing every day."]}),l.jsxs("div",{className:"flex items-center gap-6 mt-2",children:[l.jsxs("div",{className:"flex flex-col",children:[l.jsxs("span",{className:"text-2xl text-primary",children:[dm,"+"]}),l.jsx("span",{className:"text-xs text-muted-foreground uppercase tracking-wider",children:"Districts"})]}),l.jsx("div",{className:"w-px h-10 bg-border"}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("span",{className:"text-2xl text-primary",children:"150K+"}),l.jsx("span",{className:"text-xs text-muted-foreground uppercase tracking-wider",children:"Subscribers"})]}),l.jsx("div",{className:"w-px h-10 bg-border"}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("span",{className:"text-2xl text-primary",children:"100+"}),l.jsx("span",{className:"text-xs text-muted-foreground uppercase tracking-wider",children:"Cities"})]})]})]}),l.jsx("div",{className:"flex justify-center",children:l.jsx("img",{src:"/images/map.png",alt:"Tamil Nadu coverage map",className:"w-full max-w-none rounded-3xl shadow-xl border border-border object-cover h-[420px] sm:h-[520px] lg:h-[75vh] xl:h-[80vh]"})})]})})}),l.jsx("section",{className:"bg-gradient-to-b from-secondary to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Coverage"}),l.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl text-foreground",children:"Check Availability"}),l.jsx("p",{className:"text-muted-foreground max-w-lg",children:"Enter your PIN code to check if Cherrinet fiber broadband is available in your area."})]})})}),l.jsx("section",{className:"bg-white",children:l.jsx("div",{className:"max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:l.jsxs("div",{className:"p-8 bg-muted/40 rounded-2xl border border-border",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center",children:l.jsx(Li,{className:"w-5 h-5 text-primary"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-foreground",children:"Service Availability Check"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Enter your 6-digit Chennai PIN code"})]})]}),l.jsx(uf,{onCovered:p})]})})}),a&&l.jsx("section",{className:"bg-green-50/50 border-t border-green-100",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[l.jsxs("div",{className:"flex flex-col items-center gap-2 text-center mb-8",children:[l.jsxs("div",{className:"flex items-center gap-2 text-green-700",children:[l.jsx(sl,{className:"w-5 h-5"}),l.jsx("span",{className:"text-sm uppercase tracking-wider",children:"Available in your area"})]}),l.jsx("h2",{className:"text-2xl text-foreground",children:"Eligible Plans"})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6",children:mx.map(g=>l.jsxs("div",{className:`flex flex-col gap-4 p-6 bg-white rounded-2xl border-2 transition-all hover:shadow-lg ${g.popular?"border-primary":"border-border"}`,children:[g.popular&&l.jsx("span",{className:"text-xs text-primary bg-secondary px-2 py-1 rounded-md w-fit",children:"Recommended"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-muted-foreground",children:g.name}),l.jsxs("div",{className:"flex items-baseline gap-1 mt-1",children:[l.jsx("span",{className:"text-3xl text-foreground",children:g.speed}),l.jsx("span",{className:"text-sm text-muted-foreground",children:"Mbps"})]})]}),l.jsxs("p",{className:"text-2xl text-foreground",children:["₹",g.price,l.jsx("span",{className:"text-sm text-muted-foreground",children:"/mo"})]}),l.jsx("div",{className:"flex flex-col gap-2",children:g.benefits.map((v,y)=>l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(sl,{className:"w-3.5 h-3.5 text-green-600 shrink-0"}),l.jsx("span",{className:"text-sm text-muted-foreground",children:v})]},y))}),g.ott&&l.jsx("div",{className:"flex flex-wrap gap-1",children:g.ott.map((v,y)=>l.jsx("span",{className:"text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded",children:v},y))}),l.jsxs("button",{onClick:()=>{m(g),c(!0)},className:`w-full py-3 rounded-xl text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 ${g.popular?"bg-primary text-white hover:bg-[#8E1B22]":"bg-foreground text-white hover:bg-gray-800"}`,children:["Get Started",l.jsx(St,{className:"w-4 h-4"})]})]},g.id))})]})}),l.jsx("section",{className:"bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Service Areas"}),l.jsx("h2",{className:"text-2xl text-foreground mt-2 mb-4",children:"Currently Serving"}),l.jsx("p",{className:"text-sm text-muted-foreground mb-6",children:"We're rapidly expanding across Chennai. Here are some of the areas we currently cover:"}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:cm.map(g=>l.jsxs("div",{className:"flex items-center gap-2 px-3 py-2.5 bg-muted/50 rounded-lg",children:[l.jsx(Li,{className:"w-3.5 h-3.5 text-primary shrink-0"}),l.jsx("span",{className:"text-sm text-foreground",children:g})]},g))}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-4",children:["...and ",fx-cm.length,"+ more localities across Chennai"]}),l.jsx("div",{className:"mt-4",children:l.jsx("button",{onClick:()=>A(!0),className:"text-sm px-3 py-2 bg-primary text-white rounded-lg",children:"View all areas"})})]}),l.jsx("div",{className:"rounded-2xl overflow-hidden",children:l.jsx(Ea,{src:"https://images.unsplash.com/photo-1667753980494-633cd2687af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGVubmFpJTIwSW5kaWElMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NzI1MjI3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",alt:"Chennai",className:"w-full h-80 object-cover"})})]})})}),o&&l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:l.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 relative",children:[l.jsx("button",{onClick:()=>c(!1),className:"absolute top-4 right-4 p-1.5 rounded-lg hover:bg-muted transition-colors cursor-pointer",children:"✕"}),l.jsx("h2",{className:"text-foreground mb-1",children:"Get Connected"}),l.jsx("p",{className:"text-sm text-muted-foreground mb-6",children:"Fill in your details to get started with Cherrinet."}),l.jsx(cf,{selectedPlan:d,onClose:()=>c(!1)})]})}),f&&l.jsx(cx,{open:f,onClose:()=>A(!1),areas:Zo})]})}const tn=[{name:"Priya Ranganathan",location:"Anna Nagar",role:"Product Designer",quote:"Honestly, the best part is that I don't have to think about my internet anymore. It just works, whether I'm working, streaming or gaming.",thumbnail:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",duration:"1:24"},{name:"Karthik Sundaram",location:"Velachery",role:"Freelance Developer",quote:"We've got multiple phones, TVs and laptops connected all day, and somehow everything still runs smoothly. That's been a huge relief.",thumbnail:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",duration:"0:58"},{name:"Meera Krishnan",location:"T. Nagar",role:"Homemaker",quote:"My kids are watching YouTube, I'm on a work call, and someone's streaming a movie. Cherrinet handles all of it without slowing down.",thumbnail:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",duration:"1:42"},{name:"Rajesh Balakrishnan",location:"Thiruvanmiyur",role:"Small Business Owner",quote:"I work from home full-time, so a stable connection isn't a luxury for me. Cherrinet has been reliable when it matters most.",thumbnail:"https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",duration:"1:11"}];function hx(){const[a,i]=M.useState(0),o=tn[a],c=()=>i(m=>(m+1)%tn.length),d=()=>i(m=>(m-1+tn.length)%tn.length);return l.jsxs("div",{className:"flex flex-col gap-8",children:[l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-5 gap-8 items-center",children:[l.jsxs("div",{className:"lg:col-span-3 relative group rounded-2xl overflow-hidden bg-black aspect-video",children:[l.jsx(Ea,{src:o.thumbnail,alt:o.name,className:"w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"}),l.jsx("button",{type:"button",className:"absolute inset-0 flex items-center justify-center cursor-pointer","aria-label":`Play testimonial from ${o.name}`,children:l.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform",children:l.jsx(Co,{className:"w-7 h-7 text-primary fill-primary ml-1"})})}),l.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex items-center justify-between",children:[l.jsx("span",{className:"text-xs text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded",children:o.duration}),l.jsxs("span",{className:"text-xs text-white bg-primary/90 px-2 py-1 rounded",children:[a+1," / ",tn.length]})]})]}),l.jsxs("div",{className:"lg:col-span-2 flex flex-col gap-5",children:[l.jsx(E0,{className:"w-10 h-10 text-primary/20"}),l.jsxs("p",{className:"text-lg text-foreground leading-relaxed",children:['"',o.quote,'"']}),l.jsxs("div",{className:"flex items-center gap-3 pt-4 border-t border-border",children:[l.jsx("div",{className:"w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary",children:o.name.charAt(0)}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("span",{className:"text-sm text-foreground",children:o.name}),l.jsxs("span",{className:"text-xs text-muted-foreground",children:[o.role," · ",o.location]})]})]})]})]}),l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("button",{type:"button",onClick:d,"aria-label":"Previous testimonial",className:"w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors cursor-pointer shrink-0",children:l.jsx(Fg,{className:"w-4 h-4 text-foreground"})}),l.jsx("div",{className:"flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3",children:tn.map((m,f)=>l.jsxs("button",{type:"button",onClick:()=>i(f),className:`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all ${f===a?"ring-2 ring-primary ring-offset-2":"opacity-60 hover:opacity-100"}`,children:[l.jsx(Ea,{src:m.thumbnail,alt:m.name,className:"w-full h-full object-cover"}),l.jsx("div",{className:"absolute inset-0 bg-black/30 flex items-center justify-center",children:l.jsx(Co,{className:"w-5 h-5 text-white fill-white"})})]},m.name))}),l.jsx("button",{type:"button",onClick:c,"aria-label":"Next testimonial",className:"w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors cursor-pointer shrink-0",children:l.jsx($g,{className:"w-4 h-4 text-foreground"})})]})]})}const px=[{icon:D0,title:"Customer First",desc:"Every decision starts with our customers."},{icon:s0,title:"Community Focused",desc:"Connecting people, homes and businesses."},{icon:d0,title:"Always Innovating",desc:"Continuously improving our network and services."},{icon:sf,title:"Built For Everyone",desc:" Reliable internet designed for modern life."}],fm=[{year:"2015",event:l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"font-semibold text-primary",children:"The Beginning"}),l.jsx("br",{}),"Started our journey with a vision to make reliable fiber connectivity more accessible."]})},{year:"2017",event:l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"font-semibold text-primary",children:"10,000 Connections Strong"}),l.jsx("br",{}),"Reached our first major subscriber milestone."]})},{year:"2019",event:l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"font-semibold text-primary",children:"Expanding Our Reach"}),l.jsx("br",{}),"Serving more homes across more communities than ever before."]})},{year:"2021",event:l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"font-semibold text-primary",children:"Stepping Into Gigabit Speeds"}),l.jsx("br",{}),"Launched high-speed plans designed for modern digital lifestyles."]})},{year:"2023",event:l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"font-semibold text-primary",children:"Trusted By Thousands"}),l.jsx("br",{}),"Crossed 100,000 subscribers and received industry recognition."]})},{year:"2025",event:l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"font-semibold text-primary",children:"Looking Ahead"}),l.jsx("br",{}),"Continuing to grow our network and deliver better connectivity experiences."]})}];function Ax(){return l.jsxs("div",{className:"flex flex-col",children:[l.jsx("section",{className:"relative bg-gradient-to-b from-secondary to-white overflow-hidden",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[l.jsxs("div",{className:"flex flex-col gap-5",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"About Cherrinet"}),l.jsxs("h1",{className:"text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight",children:["Connecting Homes.",l.jsx("br",{}),l.jsx("span",{className:"text-primary",children:"Powering Possibilities."})]}),l.jsx("p",{className:"text-muted-foreground leading-relaxed max-w-lg",children:"At Cherrinet, we believe a great internet should simply work. That's why we've spent years building a fiber network that delivers dependable speeds, seamless streaming and reliable connectivity for homes and businesses alike."}),l.jsxs("div",{className:"flex gap-8 mt-4",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-3xl text-primary",children:"150K+"}),l.jsxs("p",{className:"text-sm text-muted-foreground",children:["Connected Homes ",l.jsx("br",{}),"& Businesses"]})]}),l.jsxs("div",{children:[l.jsx("p",{className:"text-3xl text-primary",children:"100+"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Areas Covered"})]}),l.jsxs("div",{children:[l.jsx("p",{className:"text-3xl text-primary",children:"300+"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Team Members"})]})]})]}),l.jsx("div",{className:"rounded-2xl overflow-hidden shadow-xl",children:l.jsx(Ea,{src:"https://images.unsplash.com/photo-1770777843445-2a1621b1201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwd29ya2luZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNTIyNzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",alt:"Cherrinet team",className:"w-full h-72 lg:h-96 object-cover"})})]})})}),l.jsx("section",{className:"bg-white",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center mb-14",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"WHAT DRIVES US"}),l.jsx("h2",{className:"text-3xl text-foreground max-w-2xl",children:"Making reliable fiber connectivity accessible to everyone."})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:px.map((a,i)=>l.jsxs("div",{className:"flex flex-col gap-4 p-6 rounded-2xl bg-muted/40 border border-border",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-secondary flex items-center justify-center",children:l.jsx(a.icon,{className:"w-6 h-6 text-primary"})}),l.jsx("h3",{className:"text-foreground",children:a.title}),l.jsx("p",{className:"text-sm text-muted-foreground",children:a.desc})]},i))})]})}),l.jsx("section",{className:"bg-muted/30",children:l.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center mb-14",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Milestones That Matter"}),l.jsx("h2",{className:"text-3xl text-foreground",children:"From our first connection to thousands, every milestone means better connectivity."})]}),l.jsx("div",{className:"flex flex-col gap-0",children:fm.map((a,i)=>l.jsxs("div",{className:"flex gap-6 items-start",children:[l.jsxs("div",{className:"flex flex-col items-center",children:[l.jsx("div",{className:"w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xs shrink-0",children:a.year.slice(2)}),i<fm.length-1&&l.jsx("div",{className:"w-0.5 h-12 bg-primary/20"})]}),l.jsxs("div",{className:"pb-8",children:[l.jsx("p",{className:"text-sm text-black font-semibold",children:a.year}),l.jsx("p",{className:"text-foreground text-sm mt-1",children:a.event})]})]},i))})]})}),l.jsx("section",{className:"bg-white",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center mb-14",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"CUSTOMER STORIES"}),l.jsx("h2",{className:"text-3xl text-foreground",children:"Trusted By Thousands. Recommended By Many."}),l.jsx("p",{className:"text-muted-foreground max-w-md",children:"Real stories from real Chennai homes and businesses powered by Cherrinet."})]}),l.jsx(hx,{})]})}),l.jsxs("section",{className:"relative h-64 sm:h-80 overflow-hidden",children:[l.jsx(Ea,{src:"https://images.unsplash.com/photo-1751487531325-59d97f6874f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHdhdGNoaW5nJTIwdGVsZXZpc2lvbiUyMHN0cmVhbWluZ3xlbnwxfHx8fDE3NzI1MjI3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",alt:"Happy family",className:"w-full h-full object-cover"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"}),l.jsx("div",{className:"absolute inset-0 flex items-center py-20 sm:py-28",children:l.jsx("div",{className:"max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"max-w-xl flex flex-col gap-6",children:[l.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-fit",children:[l.jsx(Ci,{className:"w-4 h-4 text-[#E47A82]"}),l.jsx("span",{className:"text-sm text-[#FBEEEF] uppercase tracking-wider",children:"Our Promise"})]}),l.jsxs("h2",{className:"text-3xl sm:text-4xl lg:text-5xl text-white leading-tight",children:["Seamless connectivity,",l.jsx("span",{className:"text-[#D1444C]",children:" every day."})]})]})})})]})]})}const gx=[{category:"Getting Started",faqs:[{q:"How do I check if Cherrinet is available in my area?",a:"Visit our Coverage page and enter your 6-digit PIN code. You'll instantly see if our fiber network covers your locality. If we're not there yet, you can sign up for notifications."},{q:"What is the installation process?",a:"Once you sign up, our team will schedule an installation within 24-48 hours. A technician will visit your home, install the fiber cable, set up the ONT device and Wi-Fi router. The entire process takes about 1-2 hours."},{q:"Is there an installation fee?",a:"No! Installation is completely free for all plans. We also provide a free Wi-Fi router with every connection."}]},{category:"Plans & Billing",faqs:[{q:"Are there any hidden charges?",a:"Absolutely not. The price you see is what you pay (plus applicable GST at 18%). No hidden fees, no surprise charges."},{q:"Can I upgrade or downgrade my plan?",a:"Yes, you can change your plan at any time through our app or by contacting support. Changes take effect from your next billing cycle."},{q:"What payment methods do you accept?",a:"We accept UPI, debit/credit cards, net banking, auto-debit (NACH), and even cash payments at our service centers."},{q:"Is there a lock-in period?",a:"No lock-in contracts! You're free to cancel anytime. We believe in earning your loyalty through great service, not contracts."}]},{category:"Technical Support",faqs:[{q:"My internet is slow. What should I do?",a:"First, try restarting your router. If the issue persists, run a speed test at speedtest.net connected via ethernet cable. If speeds are below your plan, contact our support — we'll diagnose and fix it remotely or send a technician."},{q:"Why does my Wi-Fi signal drop in some rooms?",a:"This is usually due to distance from the router or interference. We recommend placing the router centrally. For larger homes, consider upgrading to our mesh Wi-Fi plans for whole-home coverage."},{q:"Do you provide a static IP address?",a:"Yes! Static IP is included free with Pro plans and above. For Starter and Essential plans, it's available as an add-on for ₹100/month."}]},{category:"OTT & Add-ons",faqs:[{q:"How do I access bundled OTT subscriptions?",a:"After activation, you'll receive login credentials for your bundled OTT services via SMS and email. You can use them on any device — phone, tablet, smart TV, or laptop."},{q:"Can I add more OTT subscriptions to my plan?",a:"Yes! Additional OTT services can be added to any plan at discounted rates through our app or by contacting support."}]}];function hm(){const[a,i]=M.useState(null),[o,c]=M.useState(""),d=f=>{i(a===f?null:f)},m=gx.map(f=>({...f,faqs:f.faqs.filter(A=>A.q.toLowerCase().includes(o.toLowerCase())||A.a.toLowerCase().includes(o.toLowerCase()))})).filter(f=>f.faqs.length>0);return l.jsxs("div",{className:"flex flex-col",children:[l.jsx("section",{className:"bg-gradient-to-b from-secondary to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Support"}),l.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl text-foreground",children:"How Can We Help?"}),l.jsx("p",{className:"text-muted-foreground max-w-lg",children:"Find answers to common questions or reach out to our team directly."}),l.jsxs("div",{className:"mt-6 w-full max-w-lg relative",children:[l.jsx(nf,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"}),l.jsx("input",{type:"text",value:o,onChange:f=>c(f.target.value),placeholder:"Search FAQs...",className:"w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors shadow-sm"})]})]})})}),l.jsx("section",{className:"bg-white",children:l.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8",children:[l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[l.jsxs("a",{href:"tel:+914449303030","aria-label":"Call Cherrinet support at +91 44 4930 3030",className:"flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0",children:l.jsx(Ui,{className:"w-5 h-5 text-primary","aria-hidden":"true"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-foreground",children:"Call Us"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"+91 44 4930 3030"})]})]}),l.jsxs("a",{href:"mailto:support@cherrinet.in","aria-label":"Email Cherrinet support",className:"flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0",children:l.jsx(tf,{className:"w-5 h-5 text-primary","aria-hidden":"true"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-foreground",children:"Email Us"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"support@cherrinet.in"})]})]}),l.jsxs("div",{className:"flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0",children:l.jsx(af,{className:"w-5 h-5 text-primary","aria-hidden":"true"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-foreground",children:"Live Chat"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Chat with Cherry Bot"})]})]})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-secondary/60 to-white border border-border",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0",children:l.jsx(Xm,{className:"w-6 h-6 text-primary","aria-hidden":"true"})}),l.jsxs("div",{className:"flex-1 flex flex-col gap-1.5",children:[l.jsx("h3",{className:"text-foreground",children:"Couldn't find what you're looking for?"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Drop us a message with your details and our team will get back within 24 hours."})]}),l.jsxs(He,{to:"/enquire",className:"inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl text-sm hover:bg-[#8E1B22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors w-full sm:w-auto justify-center",children:["Contact Us",l.jsx(St,{className:"w-4 h-4","aria-hidden":"true"})]})]})]})}),l.jsx("section",{className:"bg-muted/30",children:l.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[l.jsx("h2",{className:"text-2xl text-foreground text-center mb-10",children:"Frequently Asked Questions"}),m.length>0?l.jsx("div",{className:"flex flex-col gap-8",children:m.map(f=>l.jsxs("div",{className:"flex flex-col gap-3",children:[l.jsx("h3",{className:"text-primary text-sm uppercase tracking-wider",children:f.category}),l.jsx("div",{className:"flex flex-col gap-2",children:f.faqs.map((A,p)=>{const g=`${f.category}-${p}`,v=a===g;return l.jsxs("div",{className:"bg-white rounded-xl border border-border overflow-hidden",children:[l.jsxs("button",{onClick:()=>d(g),className:"w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer hover:bg-muted/30 transition-colors",children:[l.jsx("span",{className:"text-sm text-foreground",children:A.q}),l.jsx(Qm,{className:`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${v?"rotate-180":""}`})]}),v&&l.jsx("div",{className:"px-5 pb-5",children:l.jsx("div",{className:"pt-3 border-t border-border",children:l.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:A.a})})})]},g)})})]},f.category))}):l.jsxs("div",{className:"text-center py-10",children:[l.jsx("p",{className:"text-muted-foreground",children:"No FAQs match your search."}),l.jsx("button",{onClick:()=>c(""),className:"text-sm text-primary hover:text-[#8E1B22] mt-2 cursor-pointer",children:"Clear search"})]})]})}),l.jsx("section",{className:"bg-white",children:l.jsx("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:l.jsxs("div",{className:"flex flex-col gap-4 p-6 rounded-2xl border border-border",children:[l.jsx(Zm,{className:"w-6 h-6 text-primary"}),l.jsx("h3",{className:"text-foreground",children:"Support Hours"}),l.jsxs("div",{className:"flex flex-col gap-2 text-sm text-muted-foreground",children:[l.jsx("p",{children:"Phone Support: 24/7"}),l.jsx("p",{children:"Email Support: Mon-Sat, 9 AM - 9 PM"}),l.jsx("p",{children:"Live Chat: 24/7"}),l.jsx("p",{children:"Walk-in Center: Mon-Sat, 10 AM - 7 PM"})]})]})})})})]})}const pm=[{id:"",label:"Select a plan"},{id:"budget",label:"Budget Plan — 50 Mbps · ₹479/mo"},{id:"family",label:"Family Plan — 100 Mbps · ₹679/mo"},{id:"premium-150",label:"Premium Plan — 150 Mbps · ₹799/mo"},{id:"premium-200",label:"Premium Plan — 200 Mbps · ₹999/mo"},{id:"premium-500",label:"Premium Plan — 500 Mbps · ₹1199/mo"},{id:"power",label:"Power Plan — 1000 Mbps · ₹1999/mo"},{id:"custom",label:"Custom plan (talk to us)"}],xx=["OTT bundle (Hotstar / ZEE5 / SonyLIV)"],Am=["Home (Residential)","Business / Office"];function yx(){const[a,i]=M.useState("new-connection"),[o,c]=M.useState(!1),[d,m]=M.useState(!1),[f,A]=M.useState(null),[p,g]=M.useState({name:"",mobile:"",altMobile:"",email:"",pincode:"",address:"",locality:"",connectionType:Am[0],plan:"",services:[],upgradePlan:"",message:"",consent:!1}),v={name:p.name.length>0&&p.name.trim().length<2?"Enter your full name":"",mobile:p.mobile.length>0&&!/^[6-9]\d{9}$/.test(p.mobile)?"Enter a valid 10-digit mobile starting with 6–9":"",altMobile:p.altMobile.length>0&&!/^[6-9]\d{9}$/.test(p.altMobile)?"Enter a valid 10-digit number":"",email:p.email.length>0&&!/^\S+@\S+\.\S+$/.test(p.email)?"Enter a valid email":"",pincode:p.pincode.length>0&&!/^\d{6}$/.test(p.pincode)?"Must be 6 digits":""},y=p.name.trim().length>=2&&/^[6-9]\d{9}$/.test(p.mobile)&&/^\S+@\S+\.\S+$/.test(p.email)&&/^\d{6}$/.test(p.pincode)&&p.address.trim().length>=5&&p.locality.trim().length>=2&&p.consent,I=a==="new-connection"?p.plan.length>0:!0,S=a==="general"?p.message.trim().length>=10:!0,H=y&&I&&S,O=b=>{g(K=>({...K,services:K.services.includes(b)?K.services.filter(G=>G!==b):[...K.services,b]}))},D=async b=>{if(b.preventDefault(),!H)return;const K=`Cherrinet Enquiry - ${p.name}`,G=[`Name: ${p.name}`,`Mobile: +91 ${p.mobile}`,`Alternate Mobile: ${p.altMobile||"N/A"}`,`Email: ${p.email}`,`PIN code: ${p.pincode}`,`Locality: ${p.locality}`,`Address: ${p.address}`,`Connection Type: ${p.connectionType}`,`Preferred Plan: ${p.plan||"N/A"}`,`Services: ${p.services.length>0?p.services.join(", "):"None"}`,`Upgrade Plan: ${p.upgradePlan||"N/A"}`,`Message: ${p.message||"None"}`,`Consent: ${p.consent?"Yes":"No"}`,"","Please respond to this enquiry as soon as possible.","","Source: Cherrinet website enquiry form"].join(`
`);m(!0),A(null);try{await Ki({subject:K,body:G,replyTo:p.email.trim()}),c(!0)}catch(ae){console.error(ae),A("Unable to send your enquiry. Please try again later.")}finally{m(!1)}};return o?l.jsx("div",{className:"bg-gradient-to-b from-secondary to-white min-h-[70vh] flex items-center justify-center px-4 py-16",children:l.jsxs("div",{className:"max-w-md w-full bg-white p-8 rounded-2xl border border-border shadow-sm text-center flex flex-col items-center gap-4",children:[l.jsx(fl,{className:"w-14 h-14 text-green-600","aria-hidden":"true"}),l.jsxs("h1",{className:"text-foreground",children:["Thank you, ",p.name.split(" ")[0],"!"]}),l.jsxs("p",{className:"text-sm text-muted-foreground",children:["Your enquiry has been received. A Cherrinet representative will reach you on"," ",l.jsxs("span",{className:"text-foreground",children:["+91 ",p.mobile]})," within 24 hours."]}),l.jsxs("p",{className:"text-xs text-muted-foreground",children:["Reference ID: CHN-",Math.floor(Math.random()*9e5+1e5)]})]})}):l.jsxs("div",{className:"flex flex-col",children:[l.jsx("section",{className:"bg-gradient-to-b from-secondary to-white",children:l.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Get Started"}),l.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl text-foreground",children:"Tell us what you need"}),l.jsx("p",{className:"text-muted-foreground max-w-lg",children:"New connection, add-on services, or just have a question? Fill in the form and our team will get back within 24 hours."})]})})}),l.jsx("section",{className:"bg-white",children:l.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[l.jsxs("fieldset",{className:"mb-8",children:[l.jsx("legend",{className:"text-sm text-foreground mb-3",children:"I want to…"}),l.jsx("div",{role:"radiogroup","aria-label":"Enquiry type",className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{id:"new-connection",label:"Get a new connection",icon:St},{id:"additional-services",label:"Add services",icon:Ci},{id:"general",label:"Ask a question",icon:N0}].map(b=>l.jsxs("button",{type:"button",role:"radio","aria-checked":a===b.id,onClick:()=>i(b.id),className:`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${a===b.id?"border-primary bg-secondary/40":"border-border hover:border-primary/40"}`,children:[l.jsx(b.icon,{className:`w-5 h-5 shrink-0 ${a===b.id?"text-primary":"text-muted-foreground"}`,"aria-hidden":"true"}),l.jsx("span",{className:"text-sm text-foreground",children:b.label})]},b.id))})]}),l.jsxs("form",{onSubmit:D,className:"flex flex-col gap-6",noValidate:!0,children:[l.jsx(el,{title:"Your details",children:l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsx(rn,{id:"name",label:"Full name",required:!0,value:p.name,onChange:b=>g({...p,name:b}),placeholder:"As per your ID",error:v.name,autoComplete:"name"}),l.jsx(rn,{id:"email",label:"Email",type:"email",required:!0,value:p.email,onChange:b=>g({...p,email:b}),placeholder:"you@example.com",error:v.email,autoComplete:"email"}),l.jsx(rn,{id:"mobile",label:"Mobile number",required:!0,value:p.mobile,onChange:b=>g({...p,mobile:b.replace(/\D/g,"").slice(0,10)}),placeholder:"10-digit mobile",error:v.mobile,autoComplete:"tel",prefix:"+91"}),l.jsx(rn,{id:"altMobile",label:"Alternate number (optional)",value:p.altMobile,onChange:b=>g({...p,altMobile:b.replace(/\D/g,"").slice(0,10)}),placeholder:"10-digit mobile",error:v.altMobile,prefix:"+91"})]})}),l.jsx(el,{title:"Installation address",children:l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsx(rn,{id:"pincode",label:"PIN code",required:!0,value:p.pincode,onChange:b=>g({...p,pincode:b.replace(/\D/g,"").slice(0,6)}),placeholder:"6-digit PIN",error:v.pincode,autoComplete:"postal-code"}),l.jsx(rn,{id:"locality",label:"Locality / Area",required:!0,value:p.locality,onChange:b=>g({...p,locality:b}),placeholder:"e.g. Anna Nagar"}),l.jsxs("div",{className:"sm:col-span-2 flex flex-col gap-1.5",children:[l.jsxs("label",{htmlFor:"address",className:"text-sm text-foreground",children:["Full address ",l.jsx("span",{className:"text-primary",children:"*"})]}),l.jsx("textarea",{id:"address",rows:3,value:p.address,onChange:b=>g({...p,address:b.target.value}),placeholder:"Door no, street, landmark",autoComplete:"street-address",className:"px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("label",{htmlFor:"connectionType",className:"text-sm text-foreground",children:"Connection type"}),l.jsx("select",{id:"connectionType",value:p.connectionType,onChange:b=>g({...p,connectionType:b.target.value}),className:"px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",children:Am.map(b=>l.jsx("option",{children:b},b))})]})]})}),a==="new-connection"&&l.jsx(el,{title:"Choose a plan",children:l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsxs("label",{htmlFor:"plan",className:"text-sm text-foreground",children:["Preferred plan ",l.jsx("span",{className:"text-primary",children:"*"})]}),l.jsx("select",{id:"plan",value:p.plan,onChange:b=>g({...p,plan:b.target.value}),className:"px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",children:pm.map(b=>l.jsx("option",{value:b.id,disabled:b.id==="",children:b.label},b.id))}),l.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Not sure? Pick the closest match — we'll help you finalise the right plan."})]})}),(a==="new-connection"||a==="additional-services")&&l.jsxs(el,{title:a==="additional-services"?"Which services do you need?":"Add-on services (optional)",children:[l.jsxs("fieldset",{children:[l.jsx("legend",{className:"sr-only",children:"Select add-on services"}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:xx.map(b=>{const K=p.services.includes(b);return l.jsxs("label",{className:`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${K?"border-primary bg-secondary/40":"border-border hover:bg-muted/40"}`,children:[l.jsx("input",{type:"checkbox",checked:K,onChange:()=>O(b),className:"w-4 h-4 accent-primary"}),l.jsx("span",{className:"text-sm text-foreground",children:b})]},b)})})]}),(()=>{const b=p.services.includes("Upgrade existing plan");return l.jsxs("div",{className:`mt-3 rounded-xl border transition-colors ${b?"border-primary bg-secondary/30":"border-border"}`,children:[l.jsxs("label",{className:"flex items-center gap-3 p-3 cursor-pointer",children:[l.jsx("input",{type:"checkbox",checked:b,onChange:()=>{O("Upgrade existing plan"),b&&g(K=>({...K,upgradePlan:""}))},className:"w-4 h-4 accent-primary","aria-controls":"upgradePlan"}),l.jsx("span",{className:"text-sm text-foreground",children:"Upgrade my existing plan"})]}),b&&l.jsxs("div",{className:"px-3 pb-3 flex flex-col gap-1.5",children:[l.jsx("label",{htmlFor:"upgradePlan",className:"text-sm text-foreground",children:"Upgrade to"}),l.jsx("select",{id:"upgradePlan",value:p.upgradePlan,onChange:K=>g({...p,upgradePlan:K.target.value}),className:"px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",children:pm.map(K=>l.jsx("option",{value:K.id,disabled:K.id==="",children:K.label},K.id))}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Pick the plan you'd like to move to — our team will confirm proration & activation."})]})]})})()]}),l.jsx(el,{title:a==="general"?"Your question":"Anything else? (optional)",children:l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("label",{htmlFor:"message",className:"sr-only",children:"Message"}),l.jsx("textarea",{id:"message",rows:4,value:p.message,onChange:b=>g({...p,message:b.target.value}),placeholder:a==="general"?"Tell us how we can help...":"Special requirements, preferred time slot, etc.",className:"px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"}),a==="general"&&p.message.length>0&&p.message.trim().length<10&&l.jsx("span",{className:"text-xs text-[#B2222B]",children:"Please share at least 10 characters"})]})}),l.jsxs("label",{className:"flex items-start gap-3 p-4 rounded-xl bg-muted/40 cursor-pointer",children:[l.jsx("input",{type:"checkbox",checked:p.consent,onChange:b=>g({...p,consent:b.target.checked}),className:"w-4 h-4 mt-0.5 accent-primary",required:!0}),l.jsxs("span",{className:"text-sm text-muted-foreground",children:["I consent to Cherrinet contacting me regarding this enquiry and authorise processing of my details per the"," ",l.jsx("a",{href:"#",className:"text-primary underline",children:"Privacy Policy"}),". As per TRAI norms, you may receive service-related calls/SMS even if you are on DND."]})]}),f&&l.jsx("div",{className:"rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive",children:f}),l.jsxs("button",{type:"submit",disabled:!H||d,className:"w-full bg-primary text-white py-3.5 rounded-xl text-sm hover:bg-[#8E1B22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2",children:[d?"Sending…":"Submit Enquiry",l.jsx(St,{className:"w-4 h-4"})]}),l.jsx("p",{className:"text-xs text-muted-foreground text-center",children:"By submitting, you agree to be contacted by Cherrinet. We typically respond within 24 hours."})]})]})})]})}function el({title:a,children:i}){return l.jsxs("div",{className:"flex flex-col gap-4 p-6 rounded-2xl border border-border bg-white",children:[l.jsx("h2",{className:"text-base text-foreground",children:a}),i]})}function rn({id:a,label:i,value:o,onChange:c,type:d="text",placeholder:m,error:f,required:A,autoComplete:p,prefix:g}){const v=`${a}-error`;return l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsxs("label",{htmlFor:a,className:"text-sm text-foreground",children:[i," ",A&&l.jsx("span",{className:"text-primary",children:"*"})]}),l.jsxs("div",{className:`flex items-center rounded-lg border bg-white focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary ${f?"border-[#B2222B]":"border-border"}`,children:[g&&l.jsx("span",{className:"pl-3 text-sm text-muted-foreground select-none",children:g}),l.jsx("input",{id:a,type:d,value:o,onChange:y=>c(y.target.value),placeholder:m,autoComplete:p,"aria-invalid":!!f,"aria-describedby":f?v:void 0,className:"flex-1 px-3 py-2.5 rounded-lg text-sm bg-transparent focus:outline-none"})]}),f&&l.jsx("span",{id:v,className:"text-xs text-[#B2222B]",children:f})]})}const gm=[{label:"Plans",path:"/gforce/plans"},{label:"Coverage",path:"/gforce/coverage"},{label:"Subscribe",path:"/gforce/subscribe"},{label:"Support",path:"/gforce/support"}];function Nx(){const[a,i]=M.useState(!1),o=Pr();return l.jsxs("nav",{className:"sticky top-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-gray-800",children:[l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"flex items-center justify-between h-16",children:[l.jsxs(He,{to:"/gforce",className:"flex items-center gap-3","aria-label":"G-Force by Cherrinet — home",children:[l.jsx("div",{className:"bg-white rounded-lg p-1.5 inline-flex",children:l.jsx("img",{src:Qo,alt:"Cherrinet",className:"h-7 w-auto"})}),l.jsxs("div",{className:"flex flex-col leading-tight",children:[l.jsxs("span",{className:"text-lg text-white tracking-tight",children:["G-",l.jsx("span",{className:"text-[#D1444C]",children:"Force"})]}),l.jsx("span",{className:"text-[10px] text-gray-400 uppercase tracking-wider",children:"by Cherrinet · Business"})]})]}),l.jsx("div",{className:"hidden lg:flex items-center gap-1",children:gm.map(c=>l.jsx(He,{to:c.path,className:`px-3 py-2 rounded-lg text-sm transition-colors ${o.pathname===c.path?"text-white bg-white/10":"text-gray-400 hover:text-white hover:bg-white/5"}`,children:c.label},c.label))}),l.jsxs("div",{className:"hidden lg:flex items-center gap-3",children:[l.jsxs(He,{to:"/",className:"flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors",children:[l.jsx(im,{className:"w-4 h-4"}),"Back to Cherrinet"]}),l.jsx(He,{to:"/gforce/subscribe",className:"bg-primary text-white px-5 py-2 rounded-lg text-sm hover:bg-[#8E1B22] transition-colors",children:"Get a Quote"})]}),l.jsx("button",{className:"lg:hidden p-2 rounded-lg hover:bg-white/10 text-white transition-colors",onClick:()=>i(!a),children:a?l.jsx(on,{className:"w-5 h-5"}):l.jsx(rf,{className:"w-5 h-5"})})]})}),a&&l.jsx("div",{className:"lg:hidden bg-gray-950 border-t border-gray-800",children:l.jsxs("div",{className:"px-4 py-4 flex flex-col gap-1",children:[gm.map(c=>l.jsx(He,{to:c.path,onClick:()=>i(!1),className:`px-4 py-3 rounded-lg text-sm transition-colors ${o.pathname===c.path?"text-white bg-white/10":"text-gray-400 hover:text-white hover:bg-white/5"}`,children:c.label},c.label)),l.jsxs("div",{className:"mt-3 pt-3 border-t border-gray-800 flex flex-col gap-3",children:[l.jsxs(He,{to:"/",onClick:()=>i(!1),className:"flex items-center gap-2 px-4 py-2 text-sm text-gray-400",children:[l.jsx(im,{className:"w-4 h-4"}),"Back to Cherrinet"]}),l.jsx(He,{to:"/gforce/subscribe",onClick:()=>i(!1),className:"bg-primary text-white px-4 py-3 rounded-lg text-sm text-center hover:bg-[#8E1B22] transition-colors",children:"Get a Quote"})]})]})})]})}function vx(){return l.jsxs("div",{className:"flex flex-col min-h-screen",children:[l.jsx(Nx,{}),l.jsx("main",{className:"flex-1",children:l.jsx(Bm,{})}),l.jsx(of,{})]})}const Rx=[{q:"What is G-Force?",a:"G-Force is the dedicated business arm of Cherrinet, built for enterprises, SMBs, co-working spaces, and IT parks across Tamil Nadu. It delivers symmetric fiber bandwidth, SLA-backed uptime, static IPs, and managed networking."},{q:"How is G-Force different from Cherrinet's home plans?",a:"G-Force comes with guaranteed SLAs, 24/7 enterprise support, dedicated bandwidth (no contention), redundant routing, and managed services like firewalls and VPNs — none of which are available on consumer plans."},{q:"What kind of businesses do you serve?",a:"From 5-person startups to 1,000-seat offices: tech companies, BPOs, hospitals, hotels, retail chains, manufacturing plants, and educational institutions."},{q:"Do you offer custom bandwidth plans?",a:"Yes. Beyond our standard tiers, we tailor solutions for high-bandwidth or multi-location deployments. Reach out via the Subscribe page for a custom quote."},{q:"What is the typical installation time?",a:"For serviced areas, installations are typically completed within 3–5 business days from contract signing. New routes may take 7–14 business days."}],Mx=[{name:"G-FORCE 2",speed:"1",tagline:"For small teams up to 15 seats",benefits:["FUP 4TB","Post FUP 10 Mbps"]},{name:"G-FORCE 6",speed:"1",tagline:"For growing offices up to 50 seats",benefits:["FUP 12TB","Post FUP 50 Mbps"],popular:!0},{name:"G-FORCE 10",speed:"1 Gbps",tagline:"For large offices & multi-site",benefits:["FUP 20TB","Post FUP 200 Mbps"]}];function Tx(){const[a,i]=M.useState(0);return l.jsxs("div",{className:"flex flex-col",children:[l.jsxs("section",{className:"relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-[#3A0A0E]",children:[l.jsx("div",{className:"absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.4),transparent_50%)]"}),l.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32",children:l.jsxs("div",{className:"max-w-3xl flex flex-col gap-6",children:[l.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-fit",children:[l.jsx(Oi,{className:"w-4 h-4 text-[#D1444C] fill-[#D1444C]"}),l.jsx("span",{className:"text-sm text-[#FBEEEF] uppercase tracking-wider",children:"G-Force · Cherrinet for Business"})]}),l.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl text-white leading-tight",children:["Enterprise-Grade Fiber for",l.jsx("br",{}),l.jsx("span",{className:"text-[#D1444C]",children:"Tamil Nadu's Businesses"})]}),l.jsx("p",{className:"text-lg text-gray-300 max-w-xl",children:"Dedicated bandwidth, SLA-backed uptime, and managed networking — engineered for offices, factories, and campuses that can't afford to slow down."}),l.jsxs("div",{className:"flex items-center gap-4 mt-2",children:[l.jsxs(He,{to:"/gforce/subscribe",className:"flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl text-sm hover:bg-[#8E1B22] transition-colors",children:["Talk to Sales",l.jsx(St,{className:"w-4 h-4"})]}),l.jsx(He,{to:"/gforce/plans",className:"text-gray-300 hover:text-white text-sm transition-colors",children:"View Plans →"})]}),l.jsxs("div",{className:"grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10 max-w-lg",children:[l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsx("span",{className:"text-2xl text-white",children:"99.99%"}),l.jsx("span",{className:"text-xs text-gray-400 uppercase tracking-wider",children:"SLA Uptime"})]}),l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsx("span",{className:"text-2xl text-white",children:"24/7"}),l.jsx("span",{className:"text-xs text-gray-400 uppercase tracking-wider",children:"NOC Support"})]}),l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsx("span",{className:"text-2xl text-white",children:"2,000+"}),l.jsx("span",{className:"text-xs text-gray-400 uppercase tracking-wider",children:"Businesses"})]})]})]})})]}),l.jsx("section",{className:"bg-white",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center mb-14",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Why G-Force"}),l.jsx("h2",{className:"text-3xl lg:text-4xl text-foreground",children:"Built for Mission-Critical Work"})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[{icon:L0,title:"Dedicated Bandwidth",desc:"No contention ratios. The speeds you pay for are the speeds you get — always."},{icon:lf,title:"SLA-Backed Uptime",desc:"99.9% to 99.99% guaranteed uptime with credits for any breach."},{icon:ef,title:"Enterprise Support",desc:"24/7 NOC, dedicated account managers, and on-site engineers."},{icon:Vg,title:"Multi-site Networking",desc:"Site-to-site VPN, MPLS, and managed firewalls across all your locations."}].map(o=>l.jsxs("div",{className:"flex flex-col gap-4 p-6 rounded-2xl border border-border hover:shadow-lg hover:border-primary/30 transition-all",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-secondary flex items-center justify-center",children:l.jsx(o.icon,{className:"w-6 h-6 text-primary"})}),l.jsx("h3",{className:"text-foreground",children:o.title}),l.jsx("p",{className:"text-sm text-muted-foreground",children:o.desc})]},o.title))})]})}),l.jsx("section",{className:"bg-muted/40",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center mb-14",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Plans"}),l.jsx("h2",{className:"text-3xl lg:text-4xl text-foreground",children:"Tailored to Your Business"}),l.jsx("p",{className:"text-muted-foreground max-w-md",children:"Pricing is customized per location and bandwidth needs. Reach out for a tailored quote."})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto",children:Mx.map(o=>l.jsxs("div",{className:`relative flex flex-col gap-5 p-7 rounded-2xl border-2 bg-white transition-all hover:shadow-lg ${o.popular?"border-primary shadow-md":"border-border"}`,children:[o.popular&&l.jsx("span",{className:"absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full",children:"Most Popular"}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:o.name}),l.jsx("p",{className:"text-sm text-muted-foreground",children:o.tagline})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:"text-4xl text-foreground",children:o.speed}),o.speed!=="1 Gbps"&&l.jsx("span",{className:"text-sm text-muted-foreground",children:"Gbps"})]}),l.jsx("div",{className:"pb-4 border-b border-border",children:l.jsx("span",{className:"text-sm text-muted-foreground",children:"Custom pricing on request"})}),l.jsx("ul",{className:"flex flex-col gap-2.5",children:o.benefits.map(c=>l.jsxs("li",{className:"flex items-start gap-2",children:[l.jsx(fl,{className:"w-4 h-4 text-primary mt-0.5 shrink-0"}),l.jsx("span",{className:"text-sm text-foreground",children:c})]},c))}),l.jsx(He,{to:"/gforce/subscribe",className:`mt-auto w-full py-2.5 rounded-xl text-sm text-center transition-colors ${o.popular?"bg-primary text-white hover:bg-[#8E1B22]":"bg-foreground text-white hover:bg-gray-800"}`,children:"Request Quote"})]},o.name))}),l.jsx("div",{className:"text-center mt-8",children:l.jsxs(He,{to:"/gforce/plans",className:"inline-flex items-center gap-2 text-primary hover:text-[#8E1B22] transition-colors text-sm",children:["See full plan list",l.jsx(St,{className:"w-4 h-4"})]})})]})}),l.jsx("section",{className:"bg-white",children:l.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center mb-12",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"FAQs"}),l.jsx("h2",{className:"text-3xl lg:text-4xl text-foreground",children:"Common Questions"})]}),l.jsx("div",{className:"flex flex-col gap-3",children:Rx.map((o,c)=>l.jsxs("div",{className:"border border-border rounded-2xl overflow-hidden bg-white",children:[l.jsxs("button",{type:"button",onClick:()=>i(a===c?null:c),className:"w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-muted/40 transition-colors cursor-pointer",children:[l.jsx("span",{className:"text-sm text-foreground",children:o.q}),l.jsx(Qm,{className:`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${a===c?"rotate-180":""}`})]}),a===c&&l.jsx("div",{className:"px-5 pb-5",children:l.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:o.a})})]},o.q))})]})})]})}const Ex=[{name:"G-FORCE 2",speed:"1 Gbps",tagline:"For small teams up to 15 seats",benefits:["FUP 4TB","Post FUP 10 Mbps"]},{name:"G-FORCE 6",speed:"1 Gbps",tagline:"For growing offices up to 50 seats",benefits:["FUP 12TB","Post FUP 50 Mbps"],popular:!0},{name:"G-FORCE 10",speed:"1 Gbps",tagline:"For large offices & multi-site",benefits:["FUP 20TB","Post FUP 200 Mbps"]},{name:"SME SILVER",speed:"250 Mbps",benefits:["FUP 2250 GB","Post FUP 2 Mbps"]},{name:"SME GOLD",speed:"250 Mbps",benefits:["FUP 3250 GB","Post FUP 2 Mbps"],popular:!0},{name:"SME DIAMOND",speed:"250 Mbps",benefits:["FUP 4250 GB","Post FUP 2 Mbps"]},{name:"SME PLATINUM",speed:"250 Mbps",benefits:["FUP 5250 GB","Post FUP 2 Mbps"]},{name:"Custom",speed:"10 Gbps+",tagline:"Campuses, data centers, ISPs",benefits:["Custom routing & peering","Dedicated dark fiber options","Engineering-led onboarding","Custom SLA","Multi-site MPLS"]}];function Px(){return l.jsxs("div",{className:"flex flex-col",children:[l.jsx("section",{className:"bg-gradient-to-b from-secondary to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Business Plans"}),l.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl text-foreground",children:"Plans Built for Business"}),l.jsx("p",{className:"text-muted-foreground max-w-lg",children:"Symmetric speeds, dedicated bandwidth, and SLA-backed reliability. Pricing is tailored to your location and requirements."})]})})}),l.jsx("section",{className:"bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[Ex.map(a=>l.jsxs("div",{className:`relative flex flex-col gap-5 p-7 rounded-2xl border-2 transition-all hover:shadow-lg ${a.popular?"border-primary bg-secondary/30 shadow-md":"border-border"}`,children:[a.popular&&l.jsx("span",{className:"absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full",children:"Most Popular"}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:a.name}),l.jsx("p",{className:"text-sm text-muted-foreground",children:a.tagline})]}),l.jsx("div",{className:"flex items-baseline gap-1 pb-4 border-b border-border",children:l.jsx("span",{className:"text-3xl text-foreground",children:a.speed})}),l.jsx("ul",{className:"flex flex-col gap-2.5",children:a.benefits.map(i=>l.jsxs("li",{className:"flex items-start gap-2",children:[l.jsx(fl,{className:"w-4 h-4 text-primary mt-0.5 shrink-0"}),l.jsx("span",{className:"text-sm text-foreground",children:i})]},i))}),l.jsxs(He,{to:"/gforce/subscribe",className:`mt-auto w-full py-2.5 rounded-xl text-sm text-center transition-colors flex items-center justify-center gap-2 ${a.popular?"bg-primary text-white hover:bg-[#8E1B22]":"bg-foreground text-white hover:bg-gray-800"}`,children:["Request Quote",l.jsx(St,{className:"w-4 h-4"})]})]},a.name)),l.jsxs("div",{className:"relative flex flex-col gap-5 p-7 rounded-2xl border-2 border-dashed border-primary/40 bg-gradient-to-br from-secondary/50 to-white hover:shadow-lg hover:border-primary transition-all",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center",children:l.jsx(Ci,{className:"w-5 h-5 text-primary"})}),l.jsx("span",{className:"text-xs px-2 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wider",children:"Tailor-made"})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Custom Plan"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Have unique requirements? We'll engineer a plan and a network around your business."})]}),l.jsx("div",{className:"flex items-baseline gap-1 pb-4 border-b border-border",children:l.jsx("span",{className:"text-3xl text-foreground",children:"Let's Talk"})}),l.jsxs("div",{className:"flex flex-col gap-3",children:[l.jsx("span",{className:"text-xs text-muted-foreground uppercase tracking-wider",children:"Bandwidth & connectivity"}),l.jsx("ul",{className:"flex flex-col gap-2",children:["Custom symmetric speeds (1 Gbps – 10 Gbps+)","Dedicated dark fiber & peering","Multi-site MPLS / SD-WAN","Static IP blocks /28 or /29"].map(a=>l.jsxs("li",{className:"flex items-start gap-2",children:[l.jsx(Oo,{className:"w-4 h-4 text-primary mt-0.5 shrink-0"}),l.jsx("span",{className:"text-sm text-foreground",children:a})]},a))})]}),l.jsxs("div",{className:"flex flex-col gap-3 pt-2",children:[l.jsx("span",{className:"text-xs text-muted-foreground uppercase tracking-wider",children:"Add-on equipment"}),l.jsx("ul",{className:"flex flex-col gap-2",children:["Wi-Fi 6E mesh systems & extenders","Managed firewalls & VPN gateways","PoE switches & access points","On-site engineering & installation"].map(a=>l.jsxs("li",{className:"flex items-start gap-2",children:[l.jsx(Oo,{className:"w-4 h-4 text-primary mt-0.5 shrink-0"}),l.jsx("span",{className:"text-sm text-foreground",children:a})]},a))})]}),l.jsxs(He,{to:"/gforce/subscribe",className:"mt-auto w-full py-2.5 rounded-xl text-sm text-center bg-primary text-white hover:bg-[#8E1B22] transition-colors flex items-center justify-center gap-2",children:["Enquire Now",l.jsx(St,{className:"w-4 h-4"})]})]})]})})})]})}function Ix(){const[a,i]=M.useState(null);return l.jsxs("div",{className:"flex flex-col",children:[l.jsx("section",{className:"bg-gradient-to-b from-secondary to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Subscribe"}),l.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl text-foreground",children:"Get Connected"}),l.jsx("p",{className:"text-muted-foreground max-w-lg",children:"New customer? Send an enquiry. Existing client? Make a quick payment."})]})})}),l.jsx("section",{className:"bg-white",children:l.jsx("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[l.jsxs("button",{type:"button",onClick:()=>i("enquire"),className:"flex flex-col gap-5 p-8 rounded-2xl border-2 border-border hover:border-primary hover:shadow-lg transition-all text-left cursor-pointer",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-secondary flex items-center justify-center",children:l.jsx(Xm,{className:"w-6 h-6 text-primary"})}),l.jsxs("div",{className:"flex flex-col gap-2",children:[l.jsx("h3",{className:"text-foreground",children:"Enquire"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Tell us about your business and we'll prepare a tailored quote within 24 hours."})]}),l.jsxs("div",{className:"flex items-center gap-2 text-primary text-sm mt-auto",children:["Open enquiry form",l.jsx(St,{className:"w-4 h-4"})]})]}),l.jsxs("button",{type:"button",onClick:()=>i("quickpay"),className:"flex flex-col gap-5 p-8 rounded-2xl border-2 border-border hover:border-primary hover:shadow-lg transition-all text-left cursor-pointer",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-secondary flex items-center justify-center",children:l.jsx(t0,{className:"w-6 h-6 text-primary"})}),l.jsxs("div",{className:"flex flex-col gap-2",children:[l.jsx("h3",{className:"text-foreground",children:"Quick Pay"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Already a G-Force customer? Pay your invoice instantly with your account ID."})]}),l.jsxs("div",{className:"flex items-center gap-2 text-primary text-sm mt-auto",children:["Open payment portal",l.jsx(St,{className:"w-4 h-4"})]})]})]})})}),a==="enquire"&&l.jsx(wx,{onClose:()=>i(null)}),a==="quickpay"&&l.jsx(Sx,{onClose:()=>i(null)})]})}function wx({onClose:a}){const[i,o]=M.useState({company:"",industry:"",gstin:"",name:"",designation:"",email:"",phone:"",altPhone:"",city:"",address:"",seats:"",plan:"",bandwidth:"",timeline:"",contactTime:"",notes:"",consent:!1}),[c,d]=M.useState(!1),[m,f]=M.useState(!1),[A,p]=M.useState(null),g=async y=>{if(y.preventDefault(),!v)return;f(!0),p(null);const I=`Cherrinet G-Force enquiry from ${i.name}`,S=[`Company: ${i.company}`,`Industry: ${i.industry||"N/A"}`,`GSTIN: ${i.gstin||"N/A"}`,`Name: ${i.name}`,`Designation: ${i.designation}`,`Email: ${i.email}`,`Phone: +91 ${i.phone}`,`Alternate phone: ${i.altPhone||"N/A"}`,`City: ${i.city}`,`Office address: ${i.address||"N/A"}`,`Seats: ${i.seats}`,`Plan: ${i.plan}`,`Bandwidth: ${i.bandwidth||"N/A"}`,`Timeline: ${i.timeline}`,`Preferred contact time: ${i.contactTime}`,`Notes: ${i.notes||"None"}`,`Consent: ${i.consent?"Yes":"No"}`,"","Please respond to this enquiry within 24 hours.","Source: Cherrinet G-Force subscription page enquiry modal"].join(`
`);try{await Ki({subject:I,body:S,replyTo:i.email.trim()}),d(!0)}catch(H){console.error(H),p("Unable to send your enquiry. Please try again later.")}finally{f(!1)}},v=i.company.length>=2&&i.industry.length>0&&i.name.length>=2&&i.designation.length>=2&&/^\S+@\S+\.\S+$/.test(i.email)&&/^[6-9]\d{9}$/.test(i.phone)&&i.city.length>0&&i.seats.length>0&&i.plan.length>0&&i.timeline.length>0&&i.consent;return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:l.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative",children:[l.jsx("button",{onClick:a,"aria-label":"Close enquiry form",className:"absolute top-4 right-4 p-1.5 rounded-lg hover:bg-muted transition-colors cursor-pointer",children:l.jsx(on,{className:"w-4 h-4"})}),c?l.jsxs("div",{className:"flex flex-col items-center gap-4 py-8 text-center",children:[l.jsx(fl,{className:"w-12 h-12 text-green-600","aria-hidden":"true"}),l.jsx("h2",{className:"text-foreground",children:"Enquiry received"}),l.jsx("p",{className:"text-sm text-muted-foreground max-w-sm",children:"Our G-Force team will reach out within one business day with a tailored quote."}),l.jsx("button",{onClick:a,className:"mt-2 bg-primary text-white px-6 py-2.5 rounded-xl text-sm hover:bg-[#8E1B22] transition-colors cursor-pointer",children:"Close"})]}):l.jsxs(l.Fragment,{children:[l.jsx("h2",{className:"text-foreground mb-1",children:"Business Enquiry"}),l.jsx("p",{className:"text-sm text-muted-foreground mb-6",children:"Share a few details about your business — our G-Force team will craft a tailored quote within 24 hours."}),l.jsxs("form",{className:"flex flex-col gap-6",onSubmit:g,children:[l.jsxs("fieldset",{className:"flex flex-col gap-4",children:[l.jsx("legend",{className:"text-xs uppercase tracking-wider text-muted-foreground mb-1",children:"Company details"}),l.jsx(ur,{label:"Company name",value:i.company,onChange:y=>o({...i,company:y}),placeholder:"Acme Pvt. Ltd.",required:!0}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsx(an,{label:"Industry",value:i.industry,onChange:y=>o({...i,industry:y}),required:!0,options:["IT / Software","BFSI","Manufacturing","Retail / E-commerce","Hospitality","Healthcare","Education","Logistics","Media & Entertainment","Co-working / Real Estate","Other"]}),l.jsx(ur,{label:"GSTIN (optional)",value:i.gstin,onChange:y=>o({...i,gstin:y.toUpperCase().slice(0,15)}),placeholder:"22AAAAA0000A1Z5"})]})]}),l.jsxs("fieldset",{className:"flex flex-col gap-4",children:[l.jsx("legend",{className:"text-xs uppercase tracking-wider text-muted-foreground mb-1",children:"Point of contact"}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsx(ur,{label:"Full name",value:i.name,onChange:y=>o({...i,name:y}),placeholder:"Your full name",required:!0}),l.jsx(ur,{label:"Designation",value:i.designation,onChange:y=>o({...i,designation:y}),placeholder:"IT Manager",required:!0})]}),l.jsx(ur,{label:"Work email",type:"email",value:i.email,onChange:y=>o({...i,email:y}),placeholder:"you@company.com",required:!0,error:i.email.length>0&&!/^\S+@\S+\.\S+$/.test(i.email)?"Enter a valid email":""}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsx(ur,{label:"Mobile",value:i.phone,onChange:y=>o({...i,phone:y.replace(/\D/g,"").slice(0,10)}),placeholder:"10-digit mobile",required:!0,error:i.phone.length>0&&!/^[6-9]\d{9}$/.test(i.phone)?"Enter a valid 10-digit number":""}),l.jsx(ur,{label:"Alternate phone (optional)",value:i.altPhone,onChange:y=>o({...i,altPhone:y.replace(/\D/g,"").slice(0,10)}),placeholder:"Landline or alternate"})]})]}),l.jsxs("fieldset",{className:"flex flex-col gap-4",children:[l.jsx("legend",{className:"text-xs uppercase tracking-wider text-muted-foreground mb-1",children:"Office location"}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsx(an,{label:"City",value:i.city,onChange:y=>o({...i,city:y}),required:!0,options:["Chennai","Coimbatore","Madurai","Tiruchirappalli","Salem","Tirunelveli","Erode","Vellore","Other"]}),l.jsx(an,{label:"Team size",value:i.seats,onChange:y=>o({...i,seats:y}),required:!0,options:["1–15 seats","16–50 seats","51–150 seats","151–500 seats","500+ seats"]})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("label",{className:"text-sm text-foreground",htmlFor:"gf-address",children:"Office address (optional)"}),l.jsx("textarea",{id:"gf-address",rows:2,value:i.address,onChange:y=>o({...i,address:y.target.value}),className:"px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary resize-none",placeholder:"Building, street, locality"})]})]}),l.jsxs("fieldset",{className:"flex flex-col gap-4",children:[l.jsx("legend",{className:"text-xs uppercase tracking-wider text-muted-foreground mb-1",children:"Plan & requirements"}),l.jsx(an,{label:"Plan of interest",value:i.plan,onChange:y=>o({...i,plan:y}),required:!0,options:["G-FORCE 2 — 1 Gbps (FUP 4TB)","G-FORCE 6 — 1 Gbps (FUP 12TB)","G-FORCE 10 — 1 Gbps (FUP 20TB)","SME SILVER — 250 Mbps (FUP 2250 GB)","SME GOLD — 250 Mbps (FUP 3250 GB)","SME DIAMOND — 250 Mbps (FUP 4250 GB)","SME PLATINUM — 250 Mbps (FUP 5250 GB)","Custom plan (tell us your requirement)","Not sure yet — recommend one"]}),i.plan.startsWith("Custom")&&l.jsx(ur,{label:"Required bandwidth / use case",value:i.bandwidth,onChange:y=>o({...i,bandwidth:y}),placeholder:"e.g. 10 Gbps dedicated, 200 concurrent users"}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsx(an,{label:"Timeline",value:i.timeline,onChange:y=>o({...i,timeline:y}),required:!0,options:["Immediate (within 1 week)","1–2 weeks","1 month","1–3 months","Just exploring"]}),l.jsx(an,{label:"Preferred contact time",value:i.contactTime,onChange:y=>o({...i,contactTime:y}),options:["Anytime","Morning (9–12)","Afternoon (12–5)","Evening (5–8)"]})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("label",{className:"text-sm text-foreground",htmlFor:"gf-notes",children:"Additional notes (optional)"}),l.jsx("textarea",{id:"gf-notes",rows:3,value:i.notes,onChange:y=>o({...i,notes:y.target.value}),className:"px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary resize-none",placeholder:"Existing connection, expected uptime SLA, hybrid cloud, special requirements…"})]})]}),l.jsxs("label",{className:"flex items-start gap-2 text-xs text-muted-foreground",children:[l.jsx("input",{type:"checkbox",checked:i.consent,onChange:y=>o({...i,consent:y.target.checked}),className:"mt-0.5 accent-primary",required:!0}),l.jsx("span",{children:"I agree to be contacted by Cherrinet G-Force regarding this enquiry, in line with TRAI / DND norms."})]}),A&&l.jsx("p",{className:"text-sm text-destructive",children:A}),l.jsx("button",{type:"submit",disabled:!v||m,className:"w-full bg-primary text-white py-3 rounded-xl text-sm hover:bg-[#8E1B22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer",children:m?"Sending enquiry…":"Submit enquiry"})]})]})]})})}function Sx({onClose:a}){const[i,o]=M.useState({accountId:"",amount:""}),[c,d]=M.useState(!1),m=/^G-\d{6}$/.test(i.accountId)&&Number(i.amount)>0;return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:l.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-md p-6 relative",children:[l.jsx("button",{onClick:a,className:"absolute top-4 right-4 p-1.5 rounded-lg hover:bg-muted transition-colors cursor-pointer",children:l.jsx(on,{className:"w-4 h-4"})}),c?l.jsxs("div",{className:"flex flex-col items-center gap-4 py-8 text-center",children:[l.jsx(fl,{className:"w-12 h-12 text-green-600"}),l.jsx("h2",{className:"text-foreground",children:"Payment successful"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Receipt sent to your registered email."}),l.jsx("button",{onClick:a,className:"mt-2 bg-primary text-white px-6 py-2.5 rounded-xl text-sm hover:bg-[#8E1B22] transition-colors cursor-pointer",children:"Close"})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[l.jsx(h0,{className:"w-4 h-4 text-green-600"}),l.jsx("span",{className:"text-xs text-muted-foreground uppercase tracking-wider",children:"Secure Payment"})]}),l.jsx("h2",{className:"text-foreground mb-1",children:"Quick Pay"}),l.jsx("p",{className:"text-sm text-muted-foreground mb-6",children:"Pay your G-Force invoice instantly."}),l.jsxs("form",{className:"flex flex-col gap-4",onSubmit:f=>{f.preventDefault()},children:[l.jsx(ur,{label:"Account ID",value:i.accountId,onChange:f=>o({...i,accountId:f.toUpperCase()}),placeholder:"G-123456",error:i.accountId.length>0&&!/^G-\d{6}$/.test(i.accountId)?"Format: G-123456":""}),l.jsx(ur,{label:"Amount (₹)",value:i.amount,onChange:f=>o({...i,amount:f.replace(/\D/g,"")}),placeholder:"Invoice amount"}),l.jsx("button",{type:"submit",disabled:!m||!0,className:"mt-2 w-full bg-primary text-white py-3 rounded-xl text-sm hover:bg-[#8E1B22] transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer",children:"Payment gateway unavailable"}),l.jsx("p",{className:"text-xs text-muted-foreground text-center",children:"Payment gateway integration pending. Success result is disabled until integration is complete."})]})]})]})})}function ur({label:a,value:i,onChange:o,placeholder:c,type:d="text",error:m,required:f}){return l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsxs("label",{className:"text-sm text-foreground",children:[a,f&&l.jsx("span",{className:"text-primary",children:" *"})]}),l.jsx("input",{type:d,value:i,onChange:A=>o(A.target.value),placeholder:c,"aria-invalid":!!m,className:`px-3 py-2.5 rounded-lg border text-sm bg-white focus:outline-none focus:border-primary ${m?"border-[#D1444C]":"border-border"}`}),m&&l.jsx("span",{className:"text-xs text-[#B2222B]",children:m})]})}function an({label:a,value:i,onChange:o,options:c,required:d}){return l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsxs("label",{className:"text-sm text-foreground",children:[a,d&&l.jsx("span",{className:"text-primary",children:" *"})]}),l.jsxs("select",{value:i,onChange:m=>o(m.target.value),className:"px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary",children:[l.jsx("option",{value:"",children:"Select…"}),c.map(m=>l.jsx("option",{value:m,children:m},m))]})]})}const Lx=xg([{path:"/",Component:om,children:[{index:!0,Component:um},{path:"plans",Component:ux},{path:"coverage",Component:mm},{path:"about",Component:Ax},{path:"support",Component:hm},{path:"enquire",Component:yx}]},{path:"/gforce",Component:vx,children:[{index:!0,Component:Tx},{path:"plans",Component:Px},{path:"coverage",Component:mm},{path:"subscribe",Component:Ix},{path:"support",Component:hm}]},{path:"*",Component:om,children:[{index:!0,Component:um}]}]);function kx(){return l.jsx(FA,{router:Lx})}rp.createRoot(document.getElementById("root")).render(l.jsx(kx,{}));
