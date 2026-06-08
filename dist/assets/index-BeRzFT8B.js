function Bh(a,i){for(var o=0;o<i.length;o++){const c=i[o];if(typeof c!="string"&&!Array.isArray(c)){for(const d in c)if(d!=="default"&&!(d in a)){const m=Object.getOwnPropertyDescriptor(c,d);m&&Object.defineProperty(a,d,m.get?m:{enumerable:!0,get:()=>c[d]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function o(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(d){if(d.ep)return;d.ep=!0;const m=o(d);fetch(d.href,m)}})();function zh(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var go={exports:{}},Jn={},xo={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd;function $h(){if(vd)return Pe;vd=1;var a=Symbol.for("react.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),h=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function I(P){return P===null||typeof P!="object"?null:(P=y&&P[y]||P["@@iterator"],typeof P=="function"?P:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,O={};function D(P,C,me){this.props=P,this.context=C,this.refs=O,this.updater=me||S}D.prototype.isReactComponent={},D.prototype.setState=function(P,C){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,C,"setState")},D.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function b(){}b.prototype=D.prototype;function K(P,C,me){this.props=P,this.context=C,this.refs=O,this.updater=me||S}var G=K.prototype=new b;G.constructor=K,H(G,D.prototype),G.isPureReactComponent=!0;var ae=Array.isArray,oe=Object.prototype.hasOwnProperty,ye={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function ie(P,C,me){var he,fe={},ve=null,be=null;if(C!=null)for(he in C.ref!==void 0&&(be=C.ref),C.key!==void 0&&(ve=""+C.key),C)oe.call(C,he)&&!U.hasOwnProperty(he)&&(fe[he]=C[he]);var Ie=arguments.length-2;if(Ie===1)fe.children=me;else if(1<Ie){for(var Ve=Array(Ie),gt=0;gt<Ie;gt++)Ve[gt]=arguments[gt+2];fe.children=Ve}if(P&&P.defaultProps)for(he in Ie=P.defaultProps,Ie)fe[he]===void 0&&(fe[he]=Ie[he]);return{$$typeof:a,type:P,key:ve,ref:be,props:fe,_owner:ye.current}}function pe(P,C){return{$$typeof:a,type:P.type,key:C,ref:P.ref,props:P.props,_owner:P._owner}}function Me(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function Le(P){var C={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(me){return C[me]})}var Ke=/\/+/g;function Ye(P,C){return typeof P=="object"&&P!==null&&P.key!=null?Le(""+P.key):C.toString(36)}function je(P,C,me,he,fe){var ve=typeof P;(ve==="undefined"||ve==="boolean")&&(P=null);var be=!1;if(P===null)be=!0;else switch(ve){case"string":case"number":be=!0;break;case"object":switch(P.$$typeof){case a:case i:be=!0}}if(be)return be=P,fe=fe(be),P=he===""?"."+Ye(be,0):he,ae(fe)?(me="",P!=null&&(me=P.replace(Ke,"$&/")+"/"),je(fe,C,me,"",function(gt){return gt})):fe!=null&&(Me(fe)&&(fe=pe(fe,me+(!fe.key||be&&be.key===fe.key?"":(""+fe.key).replace(Ke,"$&/")+"/")+P)),C.push(fe)),1;if(be=0,he=he===""?".":he+":",ae(P))for(var Ie=0;Ie<P.length;Ie++){ve=P[Ie];var Ve=he+Ye(ve,Ie);be+=je(ve,C,me,Ve,fe)}else if(Ve=I(P),typeof Ve=="function")for(P=Ve.call(P),Ie=0;!(ve=P.next()).done;)ve=ve.value,Ve=he+Ye(ve,Ie++),be+=je(ve,C,me,Ve,fe);else if(ve==="object")throw C=String(P),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.");return be}function ze(P,C,me){if(P==null)return P;var he=[],fe=0;return je(P,he,"","",function(ve){return C.call(me,ve,fe++)}),he}function Te(P){if(P._status===-1){var C=P._result;C=C(),C.then(function(me){(P._status===0||P._status===-1)&&(P._status=1,P._result=me)},function(me){(P._status===0||P._status===-1)&&(P._status=2,P._result=me)}),P._status===-1&&(P._status=0,P._result=C)}if(P._status===1)return P._result.default;throw P._result}var Ne={current:null},F={transition:null},Z={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:F,ReactCurrentOwner:ye};function W(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:ze,forEach:function(P,C,me){ze(P,function(){C.apply(this,arguments)},me)},count:function(P){var C=0;return ze(P,function(){C++}),C},toArray:function(P){return ze(P,function(C){return C})||[]},only:function(P){if(!Me(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Pe.Component=D,Pe.Fragment=o,Pe.Profiler=d,Pe.PureComponent=K,Pe.StrictMode=c,Pe.Suspense=p,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,Pe.act=W,Pe.cloneElement=function(P,C,me){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var he=H({},P.props),fe=P.key,ve=P.ref,be=P._owner;if(C!=null){if(C.ref!==void 0&&(ve=C.ref,be=ye.current),C.key!==void 0&&(fe=""+C.key),P.type&&P.type.defaultProps)var Ie=P.type.defaultProps;for(Ve in C)oe.call(C,Ve)&&!U.hasOwnProperty(Ve)&&(he[Ve]=C[Ve]===void 0&&Ie!==void 0?Ie[Ve]:C[Ve])}var Ve=arguments.length-2;if(Ve===1)he.children=me;else if(1<Ve){Ie=Array(Ve);for(var gt=0;gt<Ve;gt++)Ie[gt]=arguments[gt+2];he.children=Ie}return{$$typeof:a,type:P.type,key:fe,ref:ve,props:he,_owner:be}},Pe.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:m,_context:P},P.Consumer=P},Pe.createElement=ie,Pe.createFactory=function(P){var C=ie.bind(null,P);return C.type=P,C},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(P){return{$$typeof:A,render:P}},Pe.isValidElement=Me,Pe.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:Te}},Pe.memo=function(P,C){return{$$typeof:g,type:P,compare:C===void 0?null:C}},Pe.startTransition=function(P){var C=F.transition;F.transition={};try{P()}finally{F.transition=C}},Pe.unstable_act=W,Pe.useCallback=function(P,C){return Ne.current.useCallback(P,C)},Pe.useContext=function(P){return Ne.current.useContext(P)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(P){return Ne.current.useDeferredValue(P)},Pe.useEffect=function(P,C){return Ne.current.useEffect(P,C)},Pe.useId=function(){return Ne.current.useId()},Pe.useImperativeHandle=function(P,C,me){return Ne.current.useImperativeHandle(P,C,me)},Pe.useInsertionEffect=function(P,C){return Ne.current.useInsertionEffect(P,C)},Pe.useLayoutEffect=function(P,C){return Ne.current.useLayoutEffect(P,C)},Pe.useMemo=function(P,C){return Ne.current.useMemo(P,C)},Pe.useReducer=function(P,C,me){return Ne.current.useReducer(P,C,me)},Pe.useRef=function(P){return Ne.current.useRef(P)},Pe.useState=function(P){return Ne.current.useState(P)},Pe.useSyncExternalStore=function(P,C,me){return Ne.current.useSyncExternalStore(P,C,me)},Pe.useTransition=function(){return Ne.current.useTransition()},Pe.version="18.3.1",Pe}var Rd;function Ko(){return Rd||(Rd=1,xo.exports=$h()),xo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function Wh(){if(Td)return Jn;Td=1;var a=Ko(),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function h(A,p,g){var v,y={},I=null,S=null;g!==void 0&&(I=""+g),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)c.call(p,v)&&!m.hasOwnProperty(v)&&(y[v]=p[v]);if(A&&A.defaultProps)for(v in p=A.defaultProps,p)y[v]===void 0&&(y[v]=p[v]);return{$$typeof:i,type:A,key:I,ref:S,props:y,_owner:d.current}}return Jn.Fragment=o,Jn.jsx=h,Jn.jsxs=h,Jn}var Md;function Jh(){return Md||(Md=1,go.exports=Wh()),go.exports}var l=Jh(),vi={},yo={exports:{}},wt={},No={exports:{}},vo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd;function qh(){return Pd||(Pd=1,(function(a){function i(F,Z){var W=F.length;F.push(Z);e:for(;0<W;){var P=W-1>>>1,C=F[P];if(0<d(C,Z))F[P]=Z,F[W]=C,W=P;else break e}}function o(F){return F.length===0?null:F[0]}function c(F){if(F.length===0)return null;var Z=F[0],W=F.pop();if(W!==Z){F[0]=W;e:for(var P=0,C=F.length,me=C>>>1;P<me;){var he=2*(P+1)-1,fe=F[he],ve=he+1,be=F[ve];if(0>d(fe,W))ve<C&&0>d(be,fe)?(F[P]=be,F[ve]=W,P=ve):(F[P]=fe,F[he]=W,P=he);else if(ve<C&&0>d(be,W))F[P]=be,F[ve]=W,P=ve;else break e}}return Z}function d(F,Z){var W=F.sortIndex-Z.sortIndex;return W!==0?W:F.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;a.unstable_now=function(){return m.now()}}else{var h=Date,A=h.now();a.unstable_now=function(){return h.now()-A}}var p=[],g=[],v=1,y=null,I=3,S=!1,H=!1,O=!1,D=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(F){for(var Z=o(g);Z!==null;){if(Z.callback===null)c(g);else if(Z.startTime<=F)c(g),Z.sortIndex=Z.expirationTime,i(p,Z);else break;Z=o(g)}}function ae(F){if(O=!1,G(F),!H)if(o(p)!==null)H=!0,Te(oe);else{var Z=o(g);Z!==null&&Ne(ae,Z.startTime-F)}}function oe(F,Z){H=!1,O&&(O=!1,b(ie),ie=-1),S=!0;var W=I;try{for(G(Z),y=o(p);y!==null&&(!(y.expirationTime>Z)||F&&!Le());){var P=y.callback;if(typeof P=="function"){y.callback=null,I=y.priorityLevel;var C=P(y.expirationTime<=Z);Z=a.unstable_now(),typeof C=="function"?y.callback=C:y===o(p)&&c(p),G(Z)}else c(p);y=o(p)}if(y!==null)var me=!0;else{var he=o(g);he!==null&&Ne(ae,he.startTime-Z),me=!1}return me}finally{y=null,I=W,S=!1}}var ye=!1,U=null,ie=-1,pe=5,Me=-1;function Le(){return!(a.unstable_now()-Me<pe)}function Ke(){if(U!==null){var F=a.unstable_now();Me=F;var Z=!0;try{Z=U(!0,F)}finally{Z?Ye():(ye=!1,U=null)}}else ye=!1}var Ye;if(typeof K=="function")Ye=function(){K(Ke)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,ze=je.port2;je.port1.onmessage=Ke,Ye=function(){ze.postMessage(null)}}else Ye=function(){D(Ke,0)};function Te(F){U=F,ye||(ye=!0,Ye())}function Ne(F,Z){ie=D(function(){F(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(F){F.callback=null},a.unstable_continueExecution=function(){H||S||(H=!0,Te(oe))},a.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pe=0<F?Math.floor(1e3/F):5},a.unstable_getCurrentPriorityLevel=function(){return I},a.unstable_getFirstCallbackNode=function(){return o(p)},a.unstable_next=function(F){switch(I){case 1:case 2:case 3:var Z=3;break;default:Z=I}var W=I;I=Z;try{return F()}finally{I=W}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(F,Z){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=I;I=F;try{return Z()}finally{I=W}},a.unstable_scheduleCallback=function(F,Z,W){var P=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?P+W:P):W=P,F){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=W+C,F={id:v++,callback:Z,priorityLevel:F,startTime:W,expirationTime:C,sortIndex:-1},W>P?(F.sortIndex=W,i(g,F),o(p)===null&&F===o(g)&&(O?(b(ie),ie=-1):O=!0,Ne(ae,W-P))):(F.sortIndex=C,i(p,F),H||S||(H=!0,Te(oe))),F},a.unstable_shouldYield=Le,a.unstable_wrapCallback=function(F){var Z=I;return function(){var W=I;I=Z;try{return F.apply(this,arguments)}finally{I=W}}}})(vo)),vo}var Ed;function Qh(){return Ed||(Ed=1,No.exports=qh()),No.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id;function Zh(){if(Id)return wt;Id=1;var a=Ko(),i=Qh();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,d={};function m(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(d[e]=t,e=0;e<t.length;e++)c.add(t[e])}var A=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function I(e){return p.call(y,e)?!0:p.call(v,e)?!1:g.test(e)?y[e]=!0:(v[e]=!0,!1)}function S(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H(e,t,r,n){if(t===null||typeof t>"u"||S(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function O(e,t,r,n,s,u,f){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=f}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new O(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new O(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new O(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new O(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new O(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new O(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new O(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new O(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new O(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function K(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(b,K);D[t]=new O(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(b,K);D[t]=new O(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(b,K);D[t]=new O(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new O(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new O(e,1,!1,e.toLowerCase(),null,!0,!0)});function G(e,t,r,n){var s=D.hasOwnProperty(t)?D[t]:null;(s!==null?s.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(H(t,r,s,n)&&(r=null),n||s===null?I(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,n=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var ae=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oe=Symbol.for("react.element"),ye=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),ie=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),Me=Symbol.for("react.provider"),Le=Symbol.for("react.context"),Ke=Symbol.for("react.forward_ref"),Ye=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),ze=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),Ne=Symbol.for("react.offscreen"),F=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,P;function C(e){if(P===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);P=t&&t[1]||""}return`
`+P+e}var me=!1;function he(e,t){if(!e||me)return"";me=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(j){var n=j}Reflect.construct(e,[],t)}else{try{t.call()}catch(j){n=j}e.call(t.prototype)}else{try{throw Error()}catch(j){n=j}e()}}catch(j){if(j&&n&&typeof j.stack=="string"){for(var s=j.stack.split(`
`),u=n.stack.split(`
`),f=s.length-1,x=u.length-1;1<=f&&0<=x&&s[f]!==u[x];)x--;for(;1<=f&&0<=x;f--,x--)if(s[f]!==u[x]){if(f!==1||x!==1)do if(f--,x--,0>x||s[f]!==u[x]){var R=`
`+s[f].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=f&&0<=x);break}}}finally{me=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?C(e):""}function fe(e){switch(e.tag){case 5:return C(e.type);case 16:return C("Lazy");case 13:return C("Suspense");case 19:return C("SuspenseList");case 0:case 2:case 15:return e=he(e.type,!1),e;case 11:return e=he(e.type.render,!1),e;case 1:return e=he(e.type,!0),e;default:return""}}function ve(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case ye:return"Portal";case pe:return"Profiler";case ie:return"StrictMode";case Ye:return"Suspense";case je:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Le:return(e.displayName||"Context")+".Consumer";case Me:return(e._context.displayName||"Context")+".Provider";case Ke:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ze:return t=e.displayName||null,t!==null?t:ve(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}function be(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(t);case 8:return t===ie?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ie(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gt(e){var t=Ve(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,u=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(f){n=""+f,u.call(this,f)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ea(e){e._valueTracker||(e._valueTracker=gt(e))}function at(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Ve(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Wt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ia(e,t){var r=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function fl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Ie(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tr(e,t){t=t.checked,t!=null&&G(e,"checked",t,!1)}function on(e,t){tr(e,t);var r=Ie(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wa(e,t.type,r):t.hasOwnProperty("defaultValue")&&wa(e,t.type,Ie(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function wa(e,t,r){(t!=="number"||Wt(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var aa=Array.isArray;function Ir(e,t,r,n){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Ie(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function un(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(o(92));if(aa(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ie(r)}}function rr(e,t){var r=Ie(t.value),n=Ie(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function wr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function na(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vt,Ot=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,s)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vt=vt||document.createElement("div"),vt.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Sr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dn=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(e){dn.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),la[t]=la[e]})});function Al(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||la.hasOwnProperty(e)&&la[e]?(""+t).trim():t+"px"}function Kt(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,s=Al(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,s):e[r]=s}}var gl=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sa(e,t){if(t){if(gl[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function La(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mn=null;function ka(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lr=null,hr=null,ar=null;function xl(e){if(e=bn(e)){if(typeof Lr!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Ol(t),Lr(e.stateNode,e.type,t))}}function fn(e){hr?ar?ar.push(e):ar=[e]:hr=e}function yl(){if(hr){var e=hr,t=ar;if(ar=hr=null,xl(e),t)for(e=0;e<t.length;e++)xl(t[e])}}function hn(e,t){return e(t)}function ia(){}var kr=!1;function pn(e,t,r){if(kr)return e(t,r);kr=!0;try{return hn(e,t,r)}finally{kr=!1,(hr!==null||ar!==null)&&(ia(),yl())}}function sa(e,t){var r=e.stateNode;if(r===null)return null;var n=Ol(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var An=!1;if(A)try{var N={};Object.defineProperty(N,"passive",{get:function(){An=!0}}),window.addEventListener("test",N,N),window.removeEventListener("test",N,N)}catch{An=!1}function E(e,t,r,n,s,u,f,x,R){var j=Array.prototype.slice.call(arguments,3);try{t.apply(r,j)}catch(Y){this.onError(Y)}}var k=!1,_=null,$=!1,ne=null,ue={onError:function(e){k=!0,_=e}};function q(e,t,r,n,s,u,f,x,R){k=!1,_=null,E.apply(ue,arguments)}function X(e,t,r,n,s,u,f,x,R){if(q.apply(this,arguments),k){if(k){var j=_;k=!1,_=null}else throw Error(o(198));$||($=!0,ne=j)}}function te(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function xe(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function se(e){if(te(e)!==e)throw Error(o(188))}function Re(e){var t=e.alternate;if(!t){if(t=te(e),t===null)throw Error(o(188));return t!==e?null:e}for(var r=e,n=t;;){var s=r.return;if(s===null)break;var u=s.alternate;if(u===null){if(n=s.return,n!==null){r=n;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===r)return se(s),e;if(u===n)return se(s),t;u=u.sibling}throw Error(o(188))}if(r.return!==n.return)r=s,n=u;else{for(var f=!1,x=s.child;x;){if(x===r){f=!0,r=s,n=u;break}if(x===n){f=!0,n=s,r=u;break}x=x.sibling}if(!f){for(x=u.child;x;){if(x===r){f=!0,r=u,n=s;break}if(x===n){f=!0,n=u,r=s;break}x=x.sibling}if(!f)throw Error(o(189))}}if(r.alternate!==n)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:t}function we(e){return e=Re(e),e!==null?et(e):null}function et(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=et(e);if(t!==null)return t;e=e.sibling}return null}var Ze=i.unstable_scheduleCallback,it=i.unstable_cancelCallback,Ce=i.unstable_shouldYield,Rt=i.unstable_requestPaint,De=i.unstable_now,oa=i.unstable_getCurrentPriorityLevel,Dt=i.unstable_ImmediatePriority,St=i.unstable_UserBlockingPriority,Ur=i.unstable_NormalPriority,ua=i.unstable_LowPriority,nr=i.unstable_IdlePriority,pr=null,xt=null;function Se(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(pr,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:$e,jr=Math.log,Ar=Math.LN2;function $e(e){return e>>>=0,e===0?32:31-(jr(e)/Ar|0)|0}var gr=64,ca=4194304;function da(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Nl(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,s=e.suspendedLanes,u=e.pingedLanes,f=r&268435455;if(f!==0){var x=f&~s;x!==0?n=da(x):(u&=f,u!==0&&(n=da(u)))}else f=r&~s,f!==0?n=da(f):u!==0&&(n=da(u));if(n===0)return 0;if(t!==0&&t!==n&&(t&s)===0&&(s=n&-n,u=t&-t,s>=u||s===16&&(u&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ge(t),s=1<<r,n|=e[r],t&=~s;return n}function cf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function df(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes;0<u;){var f=31-Ge(u),x=1<<f,R=s[f];R===-1?((x&r)===0||(x&n)!==0)&&(s[f]=cf(x,t)):R<=t&&(e.expiredLanes|=x),u&=~x}}function Ki(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zo(){var e=gr;return gr<<=1,(gr&4194240)===0&&(gr=64),e}function Di(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function gn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ge(t),e[t]=r}function mf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-Ge(r),u=1<<s;t[s]=0,n[s]=-1,e[s]=-1,r&=~u}}function Hi(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ge(r),s=1<<n;s&t|e[n]&t&&(e[n]|=t),r&=~s}}var He=0;function Xo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var eu,Gi,tu,ru,au,Vi=!1,vl=[],br=null,Cr=null,Or=null,xn=new Map,yn=new Map,Kr=[],ff="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nu(e,t){switch(e){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(t.pointerId)}}function Nn(e,t,r,n,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:u,targetContainers:[s]},t!==null&&(t=bn(t),t!==null&&Gi(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function hf(e,t,r,n,s){switch(t){case"focusin":return br=Nn(br,e,t,r,n,s),!0;case"dragenter":return Cr=Nn(Cr,e,t,r,n,s),!0;case"mouseover":return Or=Nn(Or,e,t,r,n,s),!0;case"pointerover":var u=s.pointerId;return xn.set(u,Nn(xn.get(u)||null,e,t,r,n,s)),!0;case"gotpointercapture":return u=s.pointerId,yn.set(u,Nn(yn.get(u)||null,e,t,r,n,s)),!0}return!1}function lu(e){var t=ma(e.target);if(t!==null){var r=te(t);if(r!==null){if(t=r.tag,t===13){if(t=xe(r),t!==null){e.blockedOn=t,au(e.priority,function(){tu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Yi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);mn=n,r.target.dispatchEvent(n),mn=null}else return t=bn(r),t!==null&&Gi(t),e.blockedOn=r,!1;t.shift()}return!0}function iu(e,t,r){Rl(e)&&r.delete(t)}function pf(){Vi=!1,br!==null&&Rl(br)&&(br=null),Cr!==null&&Rl(Cr)&&(Cr=null),Or!==null&&Rl(Or)&&(Or=null),xn.forEach(iu),yn.forEach(iu)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,Vi||(Vi=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,pf)))}function Rn(e){function t(s){return vn(s,e)}if(0<vl.length){vn(vl[0],e);for(var r=1;r<vl.length;r++){var n=vl[r];n.blockedOn===e&&(n.blockedOn=null)}}for(br!==null&&vn(br,e),Cr!==null&&vn(Cr,e),Or!==null&&vn(Or,e),xn.forEach(t),yn.forEach(t),r=0;r<Kr.length;r++)n=Kr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Kr.length&&(r=Kr[0],r.blockedOn===null);)lu(r),r.blockedOn===null&&Kr.shift()}var Ua=ae.ReactCurrentBatchConfig,Tl=!0;function Af(e,t,r,n){var s=He,u=Ua.transition;Ua.transition=null;try{He=1,_i(e,t,r,n)}finally{He=s,Ua.transition=u}}function gf(e,t,r,n){var s=He,u=Ua.transition;Ua.transition=null;try{He=4,_i(e,t,r,n)}finally{He=s,Ua.transition=u}}function _i(e,t,r,n){if(Tl){var s=Yi(e,t,r,n);if(s===null)is(e,t,n,Ml,r),nu(e,n);else if(hf(s,e,t,r,n))n.stopPropagation();else if(nu(e,n),t&4&&-1<ff.indexOf(e)){for(;s!==null;){var u=bn(s);if(u!==null&&eu(u),u=Yi(e,t,r,n),u===null&&is(e,t,n,Ml,r),u===s)break;s=u}s!==null&&n.stopPropagation()}else is(e,t,n,null,r)}}var Ml=null;function Yi(e,t,r,n){if(Ml=null,e=ka(n),e=ma(e),e!==null)if(t=te(e),t===null)e=null;else if(r=t.tag,r===13){if(e=xe(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ml=e,null}function su(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oa()){case Dt:return 1;case St:return 4;case Ur:case ua:return 16;case nr:return 536870912;default:return 16}default:return 16}}var Dr=null,Fi=null,Pl=null;function ou(){if(Pl)return Pl;var e,t=Fi,r=t.length,n,s="value"in Dr?Dr.value:Dr.textContent,u=s.length;for(e=0;e<r&&t[e]===s[e];e++);var f=r-e;for(n=1;n<=f&&t[r-n]===s[u-n];n++);return Pl=s.slice(e,1<n?1-n:void 0)}function El(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Il(){return!0}function uu(){return!1}function Lt(e){function t(r,n,s,u,f){this._reactName=r,this._targetInst=s,this.type=n,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(r=e[x],this[x]=r?r(u):u[x]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Il:uu,this.isPropagationStopped=uu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),t}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bi=Lt(ja),Tn=W({},ja,{view:0,detail:0}),xf=Lt(Tn),zi,$i,Mn,wl=W({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ji,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mn&&(Mn&&e.type==="mousemove"?(zi=e.screenX-Mn.screenX,$i=e.screenY-Mn.screenY):$i=zi=0,Mn=e),zi)},movementY:function(e){return"movementY"in e?e.movementY:$i}}),cu=Lt(wl),yf=W({},wl,{dataTransfer:0}),Nf=Lt(yf),vf=W({},Tn,{relatedTarget:0}),Wi=Lt(vf),Rf=W({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Tf=Lt(Rf),Mf=W({},ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pf=Lt(Mf),Ef=W({},ja,{data:0}),du=Lt(Ef),If={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sf[e])?!!t[e]:!1}function Ji(){return Lf}var kf=W({},Tn,{key:function(e){if(e.key){var t=If[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=El(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ji,charCode:function(e){return e.type==="keypress"?El(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?El(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uf=Lt(kf),jf=W({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mu=Lt(jf),bf=W({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ji}),Cf=Lt(bf),Of=W({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kf=Lt(Of),Df=W({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hf=Lt(Df),Gf=[9,13,27,32],qi=A&&"CompositionEvent"in window,Pn=null;A&&"documentMode"in document&&(Pn=document.documentMode);var Vf=A&&"TextEvent"in window&&!Pn,fu=A&&(!qi||Pn&&8<Pn&&11>=Pn),hu=" ",pu=!1;function Au(e,t){switch(e){case"keyup":return Gf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ba=!1;function _f(e,t){switch(e){case"compositionend":return gu(t);case"keypress":return t.which!==32?null:(pu=!0,hu);case"textInput":return e=t.data,e===hu&&pu?null:e;default:return null}}function Yf(e,t){if(ba)return e==="compositionend"||!qi&&Au(e,t)?(e=ou(),Pl=Fi=Dr=null,ba=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fu&&t.locale!=="ko"?null:t.data;default:return null}}var Ff={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ff[e.type]:t==="textarea"}function yu(e,t,r,n){fn(n),t=jl(t,"onChange"),0<t.length&&(r=new Bi("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var En=null,In=null;function Bf(e){Ku(e,0)}function Sl(e){var t=Ha(e);if(at(t))return e}function zf(e,t){if(e==="change")return t}var Nu=!1;if(A){var Qi;if(A){var Zi="oninput"in document;if(!Zi){var vu=document.createElement("div");vu.setAttribute("oninput","return;"),Zi=typeof vu.oninput=="function"}Qi=Zi}else Qi=!1;Nu=Qi&&(!document.documentMode||9<document.documentMode)}function Ru(){En&&(En.detachEvent("onpropertychange",Tu),In=En=null)}function Tu(e){if(e.propertyName==="value"&&Sl(In)){var t=[];yu(t,In,e,ka(e)),pn(Bf,t)}}function $f(e,t,r){e==="focusin"?(Ru(),En=t,In=r,En.attachEvent("onpropertychange",Tu)):e==="focusout"&&Ru()}function Wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(In)}function Jf(e,t){if(e==="click")return Sl(t)}function qf(e,t){if(e==="input"||e==="change")return Sl(t)}function Qf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:Qf;function wn(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var s=r[n];if(!p.call(t,s)||!Jt(e[s],t[s]))return!1}return!0}function Mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pu(e,t){var r=Mu(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Mu(r)}}function Eu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Eu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Iu(){for(var e=window,t=Wt();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zf(e){var t=Iu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Eu(r.ownerDocument.documentElement,r)){if(n!==null&&Xi(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,u=Math.min(n.start,s);n=n.end===void 0?u:Math.min(n.end,s),!e.extend&&u>n&&(s=n,n=u,u=s),s=Pu(r,u);var f=Pu(r,n);s&&f&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==f.node||e.focusOffset!==f.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),u>n?(e.addRange(t),e.extend(f.node,f.offset)):(t.setEnd(f.node,f.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xf=A&&"documentMode"in document&&11>=document.documentMode,Ca=null,es=null,Sn=null,ts=!1;function wu(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ts||Ca==null||Ca!==Wt(n)||(n=Ca,"selectionStart"in n&&Xi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Sn&&wn(Sn,n)||(Sn=n,n=jl(es,"onSelect"),0<n.length&&(t=new Bi("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Ca)))}function Ll(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Oa={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionend:Ll("Transition","TransitionEnd")},rs={},Su={};A&&(Su=document.createElement("div").style,"AnimationEvent"in window||(delete Oa.animationend.animation,delete Oa.animationiteration.animation,delete Oa.animationstart.animation),"TransitionEvent"in window||delete Oa.transitionend.transition);function kl(e){if(rs[e])return rs[e];if(!Oa[e])return e;var t=Oa[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Su)return rs[e]=t[r];return e}var Lu=kl("animationend"),ku=kl("animationiteration"),Uu=kl("animationstart"),ju=kl("transitionend"),bu=new Map,Cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(e,t){bu.set(e,t),m(t,[e])}for(var as=0;as<Cu.length;as++){var ns=Cu[as],eh=ns.toLowerCase(),th=ns[0].toUpperCase()+ns.slice(1);Hr(eh,"on"+th)}Hr(Lu,"onAnimationEnd"),Hr(ku,"onAnimationIteration"),Hr(Uu,"onAnimationStart"),Hr("dblclick","onDoubleClick"),Hr("focusin","onFocus"),Hr("focusout","onBlur"),Hr(ju,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function Ou(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,X(n,t,void 0,e),e.currentTarget=null}function Ku(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],s=n.event;n=n.listeners;e:{var u=void 0;if(t)for(var f=n.length-1;0<=f;f--){var x=n[f],R=x.instance,j=x.currentTarget;if(x=x.listener,R!==u&&s.isPropagationStopped())break e;Ou(s,x,j),u=R}else for(f=0;f<n.length;f++){if(x=n[f],R=x.instance,j=x.currentTarget,x=x.listener,R!==u&&s.isPropagationStopped())break e;Ou(s,x,j),u=R}}}if($)throw e=ne,$=!1,ne=null,e}function Fe(e,t){var r=t[ms];r===void 0&&(r=t[ms]=new Set);var n=e+"__bubble";r.has(n)||(Du(t,e,2,!1),r.add(n))}function ls(e,t,r){var n=0;t&&(n|=4),Du(r,e,n,t)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function kn(e){if(!e[Ul]){e[Ul]=!0,c.forEach(function(r){r!=="selectionchange"&&(rh.has(r)||ls(r,!1,e),ls(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ul]||(t[Ul]=!0,ls("selectionchange",!1,t))}}function Du(e,t,r,n){switch(su(t)){case 1:var s=Af;break;case 4:s=gf;break;default:s=_i}r=s.bind(null,t,r,e),s=void 0,!An||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function is(e,t,r,n,s){var u=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var f=n.tag;if(f===3||f===4){var x=n.stateNode.containerInfo;if(x===s||x.nodeType===8&&x.parentNode===s)break;if(f===4)for(f=n.return;f!==null;){var R=f.tag;if((R===3||R===4)&&(R=f.stateNode.containerInfo,R===s||R.nodeType===8&&R.parentNode===s))return;f=f.return}for(;x!==null;){if(f=ma(x),f===null)return;if(R=f.tag,R===5||R===6){n=u=f;continue e}x=x.parentNode}}n=n.return}pn(function(){var j=u,Y=ka(r),B=[];e:{var V=bu.get(e);if(V!==void 0){var J=Bi,ee=e;switch(e){case"keypress":if(El(r)===0)break e;case"keydown":case"keyup":J=Uf;break;case"focusin":ee="focus",J=Wi;break;case"focusout":ee="blur",J=Wi;break;case"beforeblur":case"afterblur":J=Wi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=cu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=Nf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=Cf;break;case Lu:case ku:case Uu:J=Tf;break;case ju:J=Kf;break;case"scroll":J=xf;break;case"wheel":J=Hf;break;case"copy":case"cut":case"paste":J=Pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=mu}var re=(t&4)!==0,Xe=!re&&e==="scroll",w=re?V!==null?V+"Capture":null:V;re=[];for(var M=j,L;M!==null;){L=M;var z=L.stateNode;if(L.tag===5&&z!==null&&(L=z,w!==null&&(z=sa(M,w),z!=null&&re.push(Un(M,z,L)))),Xe)break;M=M.return}0<re.length&&(V=new J(V,ee,null,r,Y),B.push({event:V,listeners:re}))}}if((t&7)===0){e:{if(V=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",V&&r!==mn&&(ee=r.relatedTarget||r.fromElement)&&(ma(ee)||ee[xr]))break e;if((J||V)&&(V=Y.window===Y?Y:(V=Y.ownerDocument)?V.defaultView||V.parentWindow:window,J?(ee=r.relatedTarget||r.toElement,J=j,ee=ee?ma(ee):null,ee!==null&&(Xe=te(ee),ee!==Xe||ee.tag!==5&&ee.tag!==6)&&(ee=null)):(J=null,ee=j),J!==ee)){if(re=cu,z="onMouseLeave",w="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(re=mu,z="onPointerLeave",w="onPointerEnter",M="pointer"),Xe=J==null?V:Ha(J),L=ee==null?V:Ha(ee),V=new re(z,M+"leave",J,r,Y),V.target=Xe,V.relatedTarget=L,z=null,ma(Y)===j&&(re=new re(w,M+"enter",ee,r,Y),re.target=L,re.relatedTarget=Xe,z=re),Xe=z,J&&ee)t:{for(re=J,w=ee,M=0,L=re;L;L=Ka(L))M++;for(L=0,z=w;z;z=Ka(z))L++;for(;0<M-L;)re=Ka(re),M--;for(;0<L-M;)w=Ka(w),L--;for(;M--;){if(re===w||w!==null&&re===w.alternate)break t;re=Ka(re),w=Ka(w)}re=null}else re=null;J!==null&&Hu(B,V,J,re,!1),ee!==null&&Xe!==null&&Hu(B,Xe,ee,re,!0)}}e:{if(V=j?Ha(j):window,J=V.nodeName&&V.nodeName.toLowerCase(),J==="select"||J==="input"&&V.type==="file")var le=zf;else if(xu(V))if(Nu)le=qf;else{le=Wf;var ce=$f}else(J=V.nodeName)&&J.toLowerCase()==="input"&&(V.type==="checkbox"||V.type==="radio")&&(le=Jf);if(le&&(le=le(e,j))){yu(B,le,r,Y);break e}ce&&ce(e,V,j),e==="focusout"&&(ce=V._wrapperState)&&ce.controlled&&V.type==="number"&&wa(V,"number",V.value)}switch(ce=j?Ha(j):window,e){case"focusin":(xu(ce)||ce.contentEditable==="true")&&(Ca=ce,es=j,Sn=null);break;case"focusout":Sn=es=Ca=null;break;case"mousedown":ts=!0;break;case"contextmenu":case"mouseup":case"dragend":ts=!1,wu(B,r,Y);break;case"selectionchange":if(Xf)break;case"keydown":case"keyup":wu(B,r,Y)}var de;if(qi)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else ba?Au(e,r)&&(Ae="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Ae="onCompositionStart");Ae&&(fu&&r.locale!=="ko"&&(ba||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&ba&&(de=ou()):(Dr=Y,Fi="value"in Dr?Dr.value:Dr.textContent,ba=!0)),ce=jl(j,Ae),0<ce.length&&(Ae=new du(Ae,e,null,r,Y),B.push({event:Ae,listeners:ce}),de?Ae.data=de:(de=gu(r),de!==null&&(Ae.data=de)))),(de=Vf?_f(e,r):Yf(e,r))&&(j=jl(j,"onBeforeInput"),0<j.length&&(Y=new du("onBeforeInput","beforeinput",null,r,Y),B.push({event:Y,listeners:j}),Y.data=de))}Ku(B,t)})}function Un(e,t,r){return{instance:e,listener:t,currentTarget:r}}function jl(e,t){for(var r=t+"Capture",n=[];e!==null;){var s=e,u=s.stateNode;s.tag===5&&u!==null&&(s=u,u=sa(e,r),u!=null&&n.unshift(Un(e,u,s)),u=sa(e,t),u!=null&&n.push(Un(e,u,s))),e=e.return}return n}function Ka(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hu(e,t,r,n,s){for(var u=t._reactName,f=[];r!==null&&r!==n;){var x=r,R=x.alternate,j=x.stateNode;if(R!==null&&R===n)break;x.tag===5&&j!==null&&(x=j,s?(R=sa(r,u),R!=null&&f.unshift(Un(r,R,x))):s||(R=sa(r,u),R!=null&&f.push(Un(r,R,x)))),r=r.return}f.length!==0&&e.push({event:t,listeners:f})}var ah=/\r\n?/g,nh=/\u0000|\uFFFD/g;function Gu(e){return(typeof e=="string"?e:""+e).replace(ah,`
`).replace(nh,"")}function bl(e,t,r){if(t=Gu(t),Gu(e)!==t&&r)throw Error(o(425))}function Cl(){}var ss=null,os=null;function us(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cs=typeof setTimeout=="function"?setTimeout:void 0,lh=typeof clearTimeout=="function"?clearTimeout:void 0,Vu=typeof Promise=="function"?Promise:void 0,ih=typeof queueMicrotask=="function"?queueMicrotask:typeof Vu<"u"?function(e){return Vu.resolve(null).then(e).catch(sh)}:cs;function sh(e){setTimeout(function(){throw e})}function ds(e,t){var r=t,n=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(n===0){e.removeChild(s),Rn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=s}while(r);Rn(t)}function Gr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _u(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Da=Math.random().toString(36).slice(2),lr="__reactFiber$"+Da,jn="__reactProps$"+Da,xr="__reactContainer$"+Da,ms="__reactEvents$"+Da,oh="__reactListeners$"+Da,uh="__reactHandles$"+Da;function ma(e){var t=e[lr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[xr]||r[lr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=_u(e);e!==null;){if(r=e[lr])return r;e=_u(e)}return t}e=r,r=e.parentNode}return null}function bn(e){return e=e[lr]||e[xr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ha(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Ol(e){return e[jn]||null}var fs=[],Ga=-1;function Vr(e){return{current:e}}function Be(e){0>Ga||(e.current=fs[Ga],fs[Ga]=null,Ga--)}function _e(e,t){Ga++,fs[Ga]=e.current,e.current=t}var _r={},mt=Vr(_r),Tt=Vr(!1),fa=_r;function Va(e,t){var r=e.type.contextTypes;if(!r)return _r;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var s={},u;for(u in r)s[u]=t[u];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Mt(e){return e=e.childContextTypes,e!=null}function Kl(){Be(Tt),Be(mt)}function Yu(e,t,r){if(mt.current!==_r)throw Error(o(168));_e(mt,t),_e(Tt,r)}function Fu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var s in n)if(!(s in t))throw Error(o(108,be(e)||"Unknown",s));return W({},r,n)}function Dl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_r,fa=mt.current,_e(mt,e),_e(Tt,Tt.current),!0}function Bu(e,t,r){var n=e.stateNode;if(!n)throw Error(o(169));r?(e=Fu(e,t,fa),n.__reactInternalMemoizedMergedChildContext=e,Be(Tt),Be(mt),_e(mt,e)):Be(Tt),_e(Tt,r)}var yr=null,Hl=!1,hs=!1;function zu(e){yr===null?yr=[e]:yr.push(e)}function ch(e){Hl=!0,zu(e)}function Yr(){if(!hs&&yr!==null){hs=!0;var e=0,t=He;try{var r=yr;for(He=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}yr=null,Hl=!1}catch(s){throw yr!==null&&(yr=yr.slice(e+1)),Ze(Dt,Yr),s}finally{He=t,hs=!1}}return null}var _a=[],Ya=0,Gl=null,Vl=0,Ht=[],Gt=0,ha=null,Nr=1,vr="";function pa(e,t){_a[Ya++]=Vl,_a[Ya++]=Gl,Gl=e,Vl=t}function $u(e,t,r){Ht[Gt++]=Nr,Ht[Gt++]=vr,Ht[Gt++]=ha,ha=e;var n=Nr;e=vr;var s=32-Ge(n)-1;n&=~(1<<s),r+=1;var u=32-Ge(t)+s;if(30<u){var f=s-s%5;u=(n&(1<<f)-1).toString(32),n>>=f,s-=f,Nr=1<<32-Ge(t)+s|r<<s|n,vr=u+e}else Nr=1<<u|r<<s|n,vr=e}function ps(e){e.return!==null&&(pa(e,1),$u(e,1,0))}function As(e){for(;e===Gl;)Gl=_a[--Ya],_a[Ya]=null,Vl=_a[--Ya],_a[Ya]=null;for(;e===ha;)ha=Ht[--Gt],Ht[Gt]=null,vr=Ht[--Gt],Ht[Gt]=null,Nr=Ht[--Gt],Ht[Gt]=null}var kt=null,Ut=null,We=!1,qt=null;function Wu(e,t){var r=Ft(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ju(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kt=e,Ut=Gr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kt=e,Ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ha!==null?{id:Nr,overflow:vr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ft(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,kt=e,Ut=null,!0):!1;default:return!1}}function gs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xs(e){if(We){var t=Ut;if(t){var r=t;if(!Ju(e,t)){if(gs(e))throw Error(o(418));t=Gr(r.nextSibling);var n=kt;t&&Ju(e,t)?Wu(n,r):(e.flags=e.flags&-4097|2,We=!1,kt=e)}}else{if(gs(e))throw Error(o(418));e.flags=e.flags&-4097|2,We=!1,kt=e}}}function qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function _l(e){if(e!==kt)return!1;if(!We)return qu(e),We=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!us(e.type,e.memoizedProps)),t&&(t=Ut)){if(gs(e))throw Qu(),Error(o(418));for(;t;)Wu(e,t),t=Gr(t.nextSibling)}if(qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ut=Gr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ut=null}}else Ut=kt?Gr(e.stateNode.nextSibling):null;return!0}function Qu(){for(var e=Ut;e;)e=Gr(e.nextSibling)}function Fa(){Ut=kt=null,We=!1}function ys(e){qt===null?qt=[e]:qt.push(e)}var dh=ae.ReactCurrentBatchConfig;function Cn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(o(309));var n=r.stateNode}if(!n)throw Error(o(147,e));var s=n,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(f){var x=s.refs;f===null?delete x[u]:x[u]=f},t._stringRef=u,t)}if(typeof e!="string")throw Error(o(284));if(!r._owner)throw Error(o(290,e))}return e}function Yl(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zu(e){var t=e._init;return t(e._payload)}function Xu(e){function t(w,M){if(e){var L=w.deletions;L===null?(w.deletions=[M],w.flags|=16):L.push(M)}}function r(w,M){if(!e)return null;for(;M!==null;)t(w,M),M=M.sibling;return null}function n(w,M){for(w=new Map;M!==null;)M.key!==null?w.set(M.key,M):w.set(M.index,M),M=M.sibling;return w}function s(w,M){return w=Qr(w,M),w.index=0,w.sibling=null,w}function u(w,M,L){return w.index=L,e?(L=w.alternate,L!==null?(L=L.index,L<M?(w.flags|=2,M):L):(w.flags|=2,M)):(w.flags|=1048576,M)}function f(w){return e&&w.alternate===null&&(w.flags|=2),w}function x(w,M,L,z){return M===null||M.tag!==6?(M=co(L,w.mode,z),M.return=w,M):(M=s(M,L),M.return=w,M)}function R(w,M,L,z){var le=L.type;return le===U?Y(w,M,L.props.children,z,L.key):M!==null&&(M.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Te&&Zu(le)===M.type)?(z=s(M,L.props),z.ref=Cn(w,M,L),z.return=w,z):(z=fi(L.type,L.key,L.props,null,w.mode,z),z.ref=Cn(w,M,L),z.return=w,z)}function j(w,M,L,z){return M===null||M.tag!==4||M.stateNode.containerInfo!==L.containerInfo||M.stateNode.implementation!==L.implementation?(M=mo(L,w.mode,z),M.return=w,M):(M=s(M,L.children||[]),M.return=w,M)}function Y(w,M,L,z,le){return M===null||M.tag!==7?(M=Ta(L,w.mode,z,le),M.return=w,M):(M=s(M,L),M.return=w,M)}function B(w,M,L){if(typeof M=="string"&&M!==""||typeof M=="number")return M=co(""+M,w.mode,L),M.return=w,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case oe:return L=fi(M.type,M.key,M.props,null,w.mode,L),L.ref=Cn(w,null,M),L.return=w,L;case ye:return M=mo(M,w.mode,L),M.return=w,M;case Te:var z=M._init;return B(w,z(M._payload),L)}if(aa(M)||Z(M))return M=Ta(M,w.mode,L,null),M.return=w,M;Yl(w,M)}return null}function V(w,M,L,z){var le=M!==null?M.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return le!==null?null:x(w,M,""+L,z);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case oe:return L.key===le?R(w,M,L,z):null;case ye:return L.key===le?j(w,M,L,z):null;case Te:return le=L._init,V(w,M,le(L._payload),z)}if(aa(L)||Z(L))return le!==null?null:Y(w,M,L,z,null);Yl(w,L)}return null}function J(w,M,L,z,le){if(typeof z=="string"&&z!==""||typeof z=="number")return w=w.get(L)||null,x(M,w,""+z,le);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case oe:return w=w.get(z.key===null?L:z.key)||null,R(M,w,z,le);case ye:return w=w.get(z.key===null?L:z.key)||null,j(M,w,z,le);case Te:var ce=z._init;return J(w,M,L,ce(z._payload),le)}if(aa(z)||Z(z))return w=w.get(L)||null,Y(M,w,z,le,null);Yl(M,z)}return null}function ee(w,M,L,z){for(var le=null,ce=null,de=M,Ae=M=0,ut=null;de!==null&&Ae<L.length;Ae++){de.index>Ae?(ut=de,de=null):ut=de.sibling;var Ue=V(w,de,L[Ae],z);if(Ue===null){de===null&&(de=ut);break}e&&de&&Ue.alternate===null&&t(w,de),M=u(Ue,M,Ae),ce===null?le=Ue:ce.sibling=Ue,ce=Ue,de=ut}if(Ae===L.length)return r(w,de),We&&pa(w,Ae),le;if(de===null){for(;Ae<L.length;Ae++)de=B(w,L[Ae],z),de!==null&&(M=u(de,M,Ae),ce===null?le=de:ce.sibling=de,ce=de);return We&&pa(w,Ae),le}for(de=n(w,de);Ae<L.length;Ae++)ut=J(de,w,Ae,L[Ae],z),ut!==null&&(e&&ut.alternate!==null&&de.delete(ut.key===null?Ae:ut.key),M=u(ut,M,Ae),ce===null?le=ut:ce.sibling=ut,ce=ut);return e&&de.forEach(function(Zr){return t(w,Zr)}),We&&pa(w,Ae),le}function re(w,M,L,z){var le=Z(L);if(typeof le!="function")throw Error(o(150));if(L=le.call(L),L==null)throw Error(o(151));for(var ce=le=null,de=M,Ae=M=0,ut=null,Ue=L.next();de!==null&&!Ue.done;Ae++,Ue=L.next()){de.index>Ae?(ut=de,de=null):ut=de.sibling;var Zr=V(w,de,Ue.value,z);if(Zr===null){de===null&&(de=ut);break}e&&de&&Zr.alternate===null&&t(w,de),M=u(Zr,M,Ae),ce===null?le=Zr:ce.sibling=Zr,ce=Zr,de=ut}if(Ue.done)return r(w,de),We&&pa(w,Ae),le;if(de===null){for(;!Ue.done;Ae++,Ue=L.next())Ue=B(w,Ue.value,z),Ue!==null&&(M=u(Ue,M,Ae),ce===null?le=Ue:ce.sibling=Ue,ce=Ue);return We&&pa(w,Ae),le}for(de=n(w,de);!Ue.done;Ae++,Ue=L.next())Ue=J(de,w,Ae,Ue.value,z),Ue!==null&&(e&&Ue.alternate!==null&&de.delete(Ue.key===null?Ae:Ue.key),M=u(Ue,M,Ae),ce===null?le=Ue:ce.sibling=Ue,ce=Ue);return e&&de.forEach(function(Fh){return t(w,Fh)}),We&&pa(w,Ae),le}function Xe(w,M,L,z){if(typeof L=="object"&&L!==null&&L.type===U&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case oe:e:{for(var le=L.key,ce=M;ce!==null;){if(ce.key===le){if(le=L.type,le===U){if(ce.tag===7){r(w,ce.sibling),M=s(ce,L.props.children),M.return=w,w=M;break e}}else if(ce.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Te&&Zu(le)===ce.type){r(w,ce.sibling),M=s(ce,L.props),M.ref=Cn(w,ce,L),M.return=w,w=M;break e}r(w,ce);break}else t(w,ce);ce=ce.sibling}L.type===U?(M=Ta(L.props.children,w.mode,z,L.key),M.return=w,w=M):(z=fi(L.type,L.key,L.props,null,w.mode,z),z.ref=Cn(w,M,L),z.return=w,w=z)}return f(w);case ye:e:{for(ce=L.key;M!==null;){if(M.key===ce)if(M.tag===4&&M.stateNode.containerInfo===L.containerInfo&&M.stateNode.implementation===L.implementation){r(w,M.sibling),M=s(M,L.children||[]),M.return=w,w=M;break e}else{r(w,M);break}else t(w,M);M=M.sibling}M=mo(L,w.mode,z),M.return=w,w=M}return f(w);case Te:return ce=L._init,Xe(w,M,ce(L._payload),z)}if(aa(L))return ee(w,M,L,z);if(Z(L))return re(w,M,L,z);Yl(w,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,M!==null&&M.tag===6?(r(w,M.sibling),M=s(M,L),M.return=w,w=M):(r(w,M),M=co(L,w.mode,z),M.return=w,w=M),f(w)):r(w,M)}return Xe}var Ba=Xu(!0),ec=Xu(!1),Fl=Vr(null),Bl=null,za=null,Ns=null;function vs(){Ns=za=Bl=null}function Rs(e){var t=Fl.current;Be(Fl),e._currentValue=t}function Ts(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function $a(e,t){Bl=e,Ns=za=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Pt=!0),e.firstContext=null)}function Vt(e){var t=e._currentValue;if(Ns!==e)if(e={context:e,memoizedValue:t,next:null},za===null){if(Bl===null)throw Error(o(308));za=e,Bl.dependencies={lanes:0,firstContext:e}}else za=za.next=e;return t}var Aa=null;function Ms(e){Aa===null?Aa=[e]:Aa.push(e)}function tc(e,t,r,n){var s=t.interleaved;return s===null?(r.next=r,Ms(t)):(r.next=s.next,s.next=r),t.interleaved=r,Rr(e,n)}function Rr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Fr=!1;function Ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Br(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ke&2)!==0){var s=n.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),n.pending=t,Rr(e,r)}return s=n.interleaved,s===null?(t.next=t,Ms(n)):(t.next=s.next,s.next=t),n.interleaved=t,Rr(e,r)}function zl(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Hi(e,r)}}function ac(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var s=null,u=null;if(r=r.firstBaseUpdate,r!==null){do{var f={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};u===null?s=u=f:u=u.next=f,r=r.next}while(r!==null);u===null?s=u=t:u=u.next=t}else s=u=t;r={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function $l(e,t,r,n){var s=e.updateQueue;Fr=!1;var u=s.firstBaseUpdate,f=s.lastBaseUpdate,x=s.shared.pending;if(x!==null){s.shared.pending=null;var R=x,j=R.next;R.next=null,f===null?u=j:f.next=j,f=R;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,x=Y.lastBaseUpdate,x!==f&&(x===null?Y.firstBaseUpdate=j:x.next=j,Y.lastBaseUpdate=R))}if(u!==null){var B=s.baseState;f=0,Y=j=R=null,x=u;do{var V=x.lane,J=x.eventTime;if((n&V)===V){Y!==null&&(Y=Y.next={eventTime:J,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var ee=e,re=x;switch(V=t,J=r,re.tag){case 1:if(ee=re.payload,typeof ee=="function"){B=ee.call(J,B,V);break e}B=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=re.payload,V=typeof ee=="function"?ee.call(J,B,V):ee,V==null)break e;B=W({},B,V);break e;case 2:Fr=!0}}x.callback!==null&&x.lane!==0&&(e.flags|=64,V=s.effects,V===null?s.effects=[x]:V.push(x))}else J={eventTime:J,lane:V,tag:x.tag,payload:x.payload,callback:x.callback,next:null},Y===null?(j=Y=J,R=B):Y=Y.next=J,f|=V;if(x=x.next,x===null){if(x=s.shared.pending,x===null)break;V=x,x=V.next,V.next=null,s.lastBaseUpdate=V,s.shared.pending=null}}while(!0);if(Y===null&&(R=B),s.baseState=R,s.firstBaseUpdate=j,s.lastBaseUpdate=Y,t=s.shared.interleaved,t!==null){s=t;do f|=s.lane,s=s.next;while(s!==t)}else u===null&&(s.shared.lanes=0);ya|=f,e.lanes=f,e.memoizedState=B}}function nc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],s=n.callback;if(s!==null){if(n.callback=null,n=r,typeof s!="function")throw Error(o(191,s));s.call(n)}}}var On={},ir=Vr(On),Kn=Vr(On),Dn=Vr(On);function ga(e){if(e===On)throw Error(o(174));return e}function Es(e,t){switch(_e(Dn,t),_e(Kn,e),_e(ir,On),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:na(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=na(t,e)}Be(ir),_e(ir,t)}function Wa(){Be(ir),Be(Kn),Be(Dn)}function lc(e){ga(Dn.current);var t=ga(ir.current),r=na(t,e.type);t!==r&&(_e(Kn,e),_e(ir,r))}function Is(e){Kn.current===e&&(Be(ir),Be(Kn))}var Je=Vr(0);function Wl(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ws=[];function Ss(){for(var e=0;e<ws.length;e++)ws[e]._workInProgressVersionPrimary=null;ws.length=0}var Jl=ae.ReactCurrentDispatcher,Ls=ae.ReactCurrentBatchConfig,xa=0,qe=null,nt=null,st=null,ql=!1,Hn=!1,Gn=0,mh=0;function ft(){throw Error(o(321))}function ks(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Jt(e[r],t[r]))return!1;return!0}function Us(e,t,r,n,s,u){if(xa=u,qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jl.current=e===null||e.memoizedState===null?Ah:gh,e=r(n,s),Hn){u=0;do{if(Hn=!1,Gn=0,25<=u)throw Error(o(301));u+=1,st=nt=null,t.updateQueue=null,Jl.current=xh,e=r(n,s)}while(Hn)}if(Jl.current=Xl,t=nt!==null&&nt.next!==null,xa=0,st=nt=qe=null,ql=!1,t)throw Error(o(300));return e}function js(){var e=Gn!==0;return Gn=0,e}function sr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?qe.memoizedState=st=e:st=st.next=e,st}function _t(){if(nt===null){var e=qe.alternate;e=e!==null?e.memoizedState:null}else e=nt.next;var t=st===null?qe.memoizedState:st.next;if(t!==null)st=t,nt=e;else{if(e===null)throw Error(o(310));nt=e,e={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},st===null?qe.memoizedState=st=e:st=st.next=e}return st}function Vn(e,t){return typeof t=="function"?t(e):t}function bs(e){var t=_t(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var n=nt,s=n.baseQueue,u=r.pending;if(u!==null){if(s!==null){var f=s.next;s.next=u.next,u.next=f}n.baseQueue=s=u,r.pending=null}if(s!==null){u=s.next,n=n.baseState;var x=f=null,R=null,j=u;do{var Y=j.lane;if((xa&Y)===Y)R!==null&&(R=R.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),n=j.hasEagerState?j.eagerState:e(n,j.action);else{var B={lane:Y,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};R===null?(x=R=B,f=n):R=R.next=B,qe.lanes|=Y,ya|=Y}j=j.next}while(j!==null&&j!==u);R===null?f=n:R.next=x,Jt(n,t.memoizedState)||(Pt=!0),t.memoizedState=n,t.baseState=f,t.baseQueue=R,r.lastRenderedState=n}if(e=r.interleaved,e!==null){s=e;do u=s.lane,qe.lanes|=u,ya|=u,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Cs(e){var t=_t(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var n=r.dispatch,s=r.pending,u=t.memoizedState;if(s!==null){r.pending=null;var f=s=s.next;do u=e(u,f.action),f=f.next;while(f!==s);Jt(u,t.memoizedState)||(Pt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),r.lastRenderedState=u}return[u,n]}function ic(){}function sc(e,t){var r=qe,n=_t(),s=t(),u=!Jt(n.memoizedState,s);if(u&&(n.memoizedState=s,Pt=!0),n=n.queue,Os(cc.bind(null,r,n,e),[e]),n.getSnapshot!==t||u||st!==null&&st.memoizedState.tag&1){if(r.flags|=2048,_n(9,uc.bind(null,r,n,s,t),void 0,null),ot===null)throw Error(o(349));(xa&30)!==0||oc(r,t,s)}return s}function oc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=qe.updateQueue,t===null?(t={lastEffect:null,stores:null},qe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function uc(e,t,r,n){t.value=r,t.getSnapshot=n,dc(t)&&mc(e)}function cc(e,t,r){return r(function(){dc(t)&&mc(e)})}function dc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Jt(e,r)}catch{return!0}}function mc(e){var t=Rr(e,1);t!==null&&er(t,e,1,-1)}function fc(e){var t=sr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:e},t.queue=e,e=e.dispatch=ph.bind(null,qe,e),[t.memoizedState,e]}function _n(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=qe.updateQueue,t===null?(t={lastEffect:null,stores:null},qe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function hc(){return _t().memoizedState}function Ql(e,t,r,n){var s=sr();qe.flags|=e,s.memoizedState=_n(1|t,r,void 0,n===void 0?null:n)}function Zl(e,t,r,n){var s=_t();n=n===void 0?null:n;var u=void 0;if(nt!==null){var f=nt.memoizedState;if(u=f.destroy,n!==null&&ks(n,f.deps)){s.memoizedState=_n(t,r,u,n);return}}qe.flags|=e,s.memoizedState=_n(1|t,r,u,n)}function pc(e,t){return Ql(8390656,8,e,t)}function Os(e,t){return Zl(2048,8,e,t)}function Ac(e,t){return Zl(4,2,e,t)}function gc(e,t){return Zl(4,4,e,t)}function xc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yc(e,t,r){return r=r!=null?r.concat([e]):null,Zl(4,4,xc.bind(null,t,e),r)}function Ks(){}function Nc(e,t){var r=_t();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ks(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function vc(e,t){var r=_t();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ks(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Rc(e,t,r){return(xa&21)===0?(e.baseState&&(e.baseState=!1,Pt=!0),e.memoizedState=r):(Jt(r,t)||(r=Zo(),qe.lanes|=r,ya|=r,e.baseState=!0),t)}function fh(e,t){var r=He;He=r!==0&&4>r?r:4,e(!0);var n=Ls.transition;Ls.transition={};try{e(!1),t()}finally{He=r,Ls.transition=n}}function Tc(){return _t().memoizedState}function hh(e,t,r){var n=Jr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Mc(e))Pc(t,r);else if(r=tc(e,t,r,n),r!==null){var s=Nt();er(r,e,n,s),Ec(r,t,n)}}function ph(e,t,r){var n=Jr(e),s={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Mc(e))Pc(t,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var f=t.lastRenderedState,x=u(f,r);if(s.hasEagerState=!0,s.eagerState=x,Jt(x,f)){var R=t.interleaved;R===null?(s.next=s,Ms(t)):(s.next=R.next,R.next=s),t.interleaved=s;return}}catch{}finally{}r=tc(e,t,s,n),r!==null&&(s=Nt(),er(r,e,n,s),Ec(r,t,n))}}function Mc(e){var t=e.alternate;return e===qe||t!==null&&t===qe}function Pc(e,t){Hn=ql=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Ec(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Hi(e,r)}}var Xl={readContext:Vt,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},Ah={readContext:Vt,useCallback:function(e,t){return sr().memoizedState=[e,t===void 0?null:t],e},useContext:Vt,useEffect:pc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ql(4194308,4,xc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ql(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ql(4,2,e,t)},useMemo:function(e,t){var r=sr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=sr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=hh.bind(null,qe,e),[n.memoizedState,e]},useRef:function(e){var t=sr();return e={current:e},t.memoizedState=e},useState:fc,useDebugValue:Ks,useDeferredValue:function(e){return sr().memoizedState=e},useTransition:function(){var e=fc(!1),t=e[0];return e=fh.bind(null,e[1]),sr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=qe,s=sr();if(We){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),ot===null)throw Error(o(349));(xa&30)!==0||oc(n,t,r)}s.memoizedState=r;var u={value:r,getSnapshot:t};return s.queue=u,pc(cc.bind(null,n,u,e),[e]),n.flags|=2048,_n(9,uc.bind(null,n,u,r,t),void 0,null),r},useId:function(){var e=sr(),t=ot.identifierPrefix;if(We){var r=vr,n=Nr;r=(n&~(1<<32-Ge(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Gn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=mh++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gh={readContext:Vt,useCallback:Nc,useContext:Vt,useEffect:Os,useImperativeHandle:yc,useInsertionEffect:Ac,useLayoutEffect:gc,useMemo:vc,useReducer:bs,useRef:hc,useState:function(){return bs(Vn)},useDebugValue:Ks,useDeferredValue:function(e){var t=_t();return Rc(t,nt.memoizedState,e)},useTransition:function(){var e=bs(Vn)[0],t=_t().memoizedState;return[e,t]},useMutableSource:ic,useSyncExternalStore:sc,useId:Tc,unstable_isNewReconciler:!1},xh={readContext:Vt,useCallback:Nc,useContext:Vt,useEffect:Os,useImperativeHandle:yc,useInsertionEffect:Ac,useLayoutEffect:gc,useMemo:vc,useReducer:Cs,useRef:hc,useState:function(){return Cs(Vn)},useDebugValue:Ks,useDeferredValue:function(e){var t=_t();return nt===null?t.memoizedState=e:Rc(t,nt.memoizedState,e)},useTransition:function(){var e=Cs(Vn)[0],t=_t().memoizedState;return[e,t]},useMutableSource:ic,useSyncExternalStore:sc,useId:Tc,unstable_isNewReconciler:!1};function Qt(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ds(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:W({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ei={isMounted:function(e){return(e=e._reactInternals)?te(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Nt(),s=Jr(e),u=Tr(n,s);u.payload=t,r!=null&&(u.callback=r),t=Br(e,u,s),t!==null&&(er(t,e,s,n),zl(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Nt(),s=Jr(e),u=Tr(n,s);u.tag=1,u.payload=t,r!=null&&(u.callback=r),t=Br(e,u,s),t!==null&&(er(t,e,s,n),zl(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Nt(),n=Jr(e),s=Tr(r,n);s.tag=2,t!=null&&(s.callback=t),t=Br(e,s,n),t!==null&&(er(t,e,n,r),zl(t,e,n))}};function Ic(e,t,r,n,s,u,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,u,f):t.prototype&&t.prototype.isPureReactComponent?!wn(r,n)||!wn(s,u):!0}function wc(e,t,r){var n=!1,s=_r,u=t.contextType;return typeof u=="object"&&u!==null?u=Vt(u):(s=Mt(t)?fa:mt.current,n=t.contextTypes,u=(n=n!=null)?Va(e,s):_r),t=new t(r,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ei,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=u),t}function Sc(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ei.enqueueReplaceState(t,t.state,null)}function Hs(e,t,r,n){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},Ps(e);var u=t.contextType;typeof u=="object"&&u!==null?s.context=Vt(u):(u=Mt(t)?fa:mt.current,s.context=Va(e,u)),s.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Ds(e,t,u,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ei.enqueueReplaceState(s,s.state,null),$l(e,r,s,n),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Ja(e,t){try{var r="",n=t;do r+=fe(n),n=n.return;while(n);var s=r}catch(u){s=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:s,digest:null}}function Gs(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Vs(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var yh=typeof WeakMap=="function"?WeakMap:Map;function Lc(e,t,r){r=Tr(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){si||(si=!0,ro=n),Vs(e,t)},r}function kc(e,t,r){r=Tr(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var s=t.value;r.payload=function(){return n(s)},r.callback=function(){Vs(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(r.callback=function(){Vs(e,t),typeof n!="function"&&($r===null?$r=new Set([this]):$r.add(this));var f=t.stack;this.componentDidCatch(t.value,{componentStack:f!==null?f:""})}),r}function Uc(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new yh;var s=new Set;n.set(t,s)}else s=n.get(t),s===void 0&&(s=new Set,n.set(t,s));s.has(r)||(s.add(r),e=jh.bind(null,e,t,r),t.then(e,e))}function jc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bc(e,t,r,n,s){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Tr(-1,1),t.tag=2,Br(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var Nh=ae.ReactCurrentOwner,Pt=!1;function yt(e,t,r,n){t.child=e===null?ec(t,null,r,n):Ba(t,e.child,r,n)}function Cc(e,t,r,n,s){r=r.render;var u=t.ref;return $a(t,s),n=Us(e,t,r,n,u,s),r=js(),e!==null&&!Pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Mr(e,t,s)):(We&&r&&ps(t),t.flags|=1,yt(e,t,n,s),t.child)}function Oc(e,t,r,n,s){if(e===null){var u=r.type;return typeof u=="function"&&!uo(u)&&u.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=u,Kc(e,t,u,n,s)):(e=fi(r.type,null,n,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&s)===0){var f=u.memoizedProps;if(r=r.compare,r=r!==null?r:wn,r(f,n)&&e.ref===t.ref)return Mr(e,t,s)}return t.flags|=1,e=Qr(u,n),e.ref=t.ref,e.return=t,t.child=e}function Kc(e,t,r,n,s){if(e!==null){var u=e.memoizedProps;if(wn(u,n)&&e.ref===t.ref)if(Pt=!1,t.pendingProps=n=u,(e.lanes&s)!==0)(e.flags&131072)!==0&&(Pt=!0);else return t.lanes=e.lanes,Mr(e,t,s)}return _s(e,t,r,n,s)}function Dc(e,t,r){var n=t.pendingProps,s=n.children,u=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Qa,jt),jt|=r;else{if((r&1073741824)===0)return e=u!==null?u.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(Qa,jt),jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=u!==null?u.baseLanes:r,_e(Qa,jt),jt|=n}else u!==null?(n=u.baseLanes|r,t.memoizedState=null):n=r,_e(Qa,jt),jt|=n;return yt(e,t,s,r),t.child}function Hc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function _s(e,t,r,n,s){var u=Mt(r)?fa:mt.current;return u=Va(t,u),$a(t,s),r=Us(e,t,r,n,u,s),n=js(),e!==null&&!Pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Mr(e,t,s)):(We&&n&&ps(t),t.flags|=1,yt(e,t,r,s),t.child)}function Gc(e,t,r,n,s){if(Mt(r)){var u=!0;Dl(t)}else u=!1;if($a(t,s),t.stateNode===null)ri(e,t),wc(t,r,n),Hs(t,r,n,s),n=!0;else if(e===null){var f=t.stateNode,x=t.memoizedProps;f.props=x;var R=f.context,j=r.contextType;typeof j=="object"&&j!==null?j=Vt(j):(j=Mt(r)?fa:mt.current,j=Va(t,j));var Y=r.getDerivedStateFromProps,B=typeof Y=="function"||typeof f.getSnapshotBeforeUpdate=="function";B||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==n||R!==j)&&Sc(t,f,n,j),Fr=!1;var V=t.memoizedState;f.state=V,$l(t,n,f,s),R=t.memoizedState,x!==n||V!==R||Tt.current||Fr?(typeof Y=="function"&&(Ds(t,r,Y,n),R=t.memoizedState),(x=Fr||Ic(t,r,x,n,V,R,j))?(B||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=R),f.props=n,f.state=R,f.context=j,n=x):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{f=t.stateNode,rc(e,t),x=t.memoizedProps,j=t.type===t.elementType?x:Qt(t.type,x),f.props=j,B=t.pendingProps,V=f.context,R=r.contextType,typeof R=="object"&&R!==null?R=Vt(R):(R=Mt(r)?fa:mt.current,R=Va(t,R));var J=r.getDerivedStateFromProps;(Y=typeof J=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==B||V!==R)&&Sc(t,f,n,R),Fr=!1,V=t.memoizedState,f.state=V,$l(t,n,f,s);var ee=t.memoizedState;x!==B||V!==ee||Tt.current||Fr?(typeof J=="function"&&(Ds(t,r,J,n),ee=t.memoizedState),(j=Fr||Ic(t,r,j,n,V,ee,R)||!1)?(Y||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(n,ee,R),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(n,ee,R)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=ee),f.props=n,f.state=ee,f.context=R,n=j):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),n=!1)}return Ys(e,t,r,n,u,s)}function Ys(e,t,r,n,s,u){Hc(e,t);var f=(t.flags&128)!==0;if(!n&&!f)return s&&Bu(t,r,!1),Mr(e,t,u);n=t.stateNode,Nh.current=t;var x=f&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&f?(t.child=Ba(t,e.child,null,u),t.child=Ba(t,null,x,u)):yt(e,t,x,u),t.memoizedState=n.state,s&&Bu(t,r,!0),t.child}function Vc(e){var t=e.stateNode;t.pendingContext?Yu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yu(e,t.context,!1),Es(e,t.containerInfo)}function _c(e,t,r,n,s){return Fa(),ys(s),t.flags|=256,yt(e,t,r,n),t.child}var Fs={dehydrated:null,treeContext:null,retryLane:0};function Bs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yc(e,t,r){var n=t.pendingProps,s=Je.current,u=!1,f=(t.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(s&2)!==0),x?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),_e(Je,s&1),e===null)return xs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(f=n.children,e=n.fallback,u?(n=t.mode,u=t.child,f={mode:"hidden",children:f},(n&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=f):u=hi(f,n,0,null),e=Ta(e,n,r,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=Bs(r),t.memoizedState=Fs,e):zs(t,f));if(s=e.memoizedState,s!==null&&(x=s.dehydrated,x!==null))return vh(e,t,f,n,x,s,r);if(u){u=n.fallback,f=t.mode,s=e.child,x=s.sibling;var R={mode:"hidden",children:n.children};return(f&1)===0&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=R,t.deletions=null):(n=Qr(s,R),n.subtreeFlags=s.subtreeFlags&14680064),x!==null?u=Qr(x,u):(u=Ta(u,f,r,null),u.flags|=2),u.return=t,n.return=t,n.sibling=u,t.child=n,n=u,u=t.child,f=e.child.memoizedState,f=f===null?Bs(r):{baseLanes:f.baseLanes|r,cachePool:null,transitions:f.transitions},u.memoizedState=f,u.childLanes=e.childLanes&~r,t.memoizedState=Fs,n}return u=e.child,e=u.sibling,n=Qr(u,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function zs(e,t){return t=hi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ti(e,t,r,n){return n!==null&&ys(n),Ba(t,e.child,null,r),e=zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vh(e,t,r,n,s,u,f){if(r)return t.flags&256?(t.flags&=-257,n=Gs(Error(o(422))),ti(e,t,f,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=n.fallback,s=t.mode,n=hi({mode:"visible",children:n.children},s,0,null),u=Ta(u,s,f,null),u.flags|=2,n.return=t,u.return=t,n.sibling=u,t.child=n,(t.mode&1)!==0&&Ba(t,e.child,null,f),t.child.memoizedState=Bs(f),t.memoizedState=Fs,u);if((t.mode&1)===0)return ti(e,t,f,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var x=n.dgst;return n=x,u=Error(o(419)),n=Gs(u,n,void 0),ti(e,t,f,n)}if(x=(f&e.childLanes)!==0,Pt||x){if(n=ot,n!==null){switch(f&-f){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(n.suspendedLanes|f))!==0?0:s,s!==0&&s!==u.retryLane&&(u.retryLane=s,Rr(e,s),er(n,e,s,-1))}return oo(),n=Gs(Error(o(421))),ti(e,t,f,n)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=bh.bind(null,e),s._reactRetry=t,null):(e=u.treeContext,Ut=Gr(s.nextSibling),kt=t,We=!0,qt=null,e!==null&&(Ht[Gt++]=Nr,Ht[Gt++]=vr,Ht[Gt++]=ha,Nr=e.id,vr=e.overflow,ha=t),t=zs(t,n.children),t.flags|=4096,t)}function Fc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ts(e.return,t,r)}function $s(e,t,r,n,s){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:s}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=n,u.tail=r,u.tailMode=s)}function Bc(e,t,r){var n=t.pendingProps,s=n.revealOrder,u=n.tail;if(yt(e,t,n.children,r),n=Je.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fc(e,r,t);else if(e.tag===19)Fc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(_e(Je,n),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&Wl(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),$s(t,!1,s,r,u);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Wl(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}$s(t,!0,r,null,u);break;case"together":$s(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ri(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ya|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,r=Qr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Qr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Rh(e,t,r){switch(t.tag){case 3:Vc(t),Fa();break;case 5:lc(t);break;case 1:Mt(t.type)&&Dl(t);break;case 4:Es(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,s=t.memoizedProps.value;_e(Fl,n._currentValue),n._currentValue=s;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(_e(Je,Je.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Yc(e,t,r):(_e(Je,Je.current&1),e=Mr(e,t,r),e!==null?e.sibling:null);_e(Je,Je.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Bc(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),_e(Je,Je.current),n)break;return null;case 22:case 23:return t.lanes=0,Dc(e,t,r)}return Mr(e,t,r)}var zc,Ws,$c,Wc;zc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ws=function(){},$c=function(e,t,r,n){var s=e.memoizedProps;if(s!==n){e=t.stateNode,ga(ir.current);var u=null;switch(r){case"input":s=Ia(e,s),n=Ia(e,n),u=[];break;case"select":s=W({},s,{value:void 0}),n=W({},n,{value:void 0}),u=[];break;case"textarea":s=un(e,s),n=un(e,n),u=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Cl)}Sa(r,n);var f;r=null;for(j in s)if(!n.hasOwnProperty(j)&&s.hasOwnProperty(j)&&s[j]!=null)if(j==="style"){var x=s[j];for(f in x)x.hasOwnProperty(f)&&(r||(r={}),r[f]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(d.hasOwnProperty(j)?u||(u=[]):(u=u||[]).push(j,null));for(j in n){var R=n[j];if(x=s!=null?s[j]:void 0,n.hasOwnProperty(j)&&R!==x&&(R!=null||x!=null))if(j==="style")if(x){for(f in x)!x.hasOwnProperty(f)||R&&R.hasOwnProperty(f)||(r||(r={}),r[f]="");for(f in R)R.hasOwnProperty(f)&&x[f]!==R[f]&&(r||(r={}),r[f]=R[f])}else r||(u||(u=[]),u.push(j,r)),r=R;else j==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,x=x?x.__html:void 0,R!=null&&x!==R&&(u=u||[]).push(j,R)):j==="children"?typeof R!="string"&&typeof R!="number"||(u=u||[]).push(j,""+R):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(d.hasOwnProperty(j)?(R!=null&&j==="onScroll"&&Fe("scroll",e),u||x===R||(u=[])):(u=u||[]).push(j,R))}r&&(u=u||[]).push("style",r);var j=u;(t.updateQueue=j)&&(t.flags|=4)}},Wc=function(e,t,r,n){r!==n&&(t.flags|=4)};function Yn(e,t){if(!We)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ht(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Th(e,t,r){var n=t.pendingProps;switch(As(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(t),null;case 1:return Mt(t.type)&&Kl(),ht(t),null;case 3:return n=t.stateNode,Wa(),Be(Tt),Be(mt),Ss(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(_l(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,qt!==null&&(lo(qt),qt=null))),Ws(e,t),ht(t),null;case 5:Is(t);var s=ga(Dn.current);if(r=t.type,e!==null&&t.stateNode!=null)$c(e,t,r,n,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(o(166));return ht(t),null}if(e=ga(ir.current),_l(t)){n=t.stateNode,r=t.type;var u=t.memoizedProps;switch(n[lr]=t,n[jn]=u,e=(t.mode&1)!==0,r){case"dialog":Fe("cancel",n),Fe("close",n);break;case"iframe":case"object":case"embed":Fe("load",n);break;case"video":case"audio":for(s=0;s<Ln.length;s++)Fe(Ln[s],n);break;case"source":Fe("error",n);break;case"img":case"image":case"link":Fe("error",n),Fe("load",n);break;case"details":Fe("toggle",n);break;case"input":fl(n,u),Fe("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!u.multiple},Fe("invalid",n);break;case"textarea":pl(n,u),Fe("invalid",n)}Sa(r,u),s=null;for(var f in u)if(u.hasOwnProperty(f)){var x=u[f];f==="children"?typeof x=="string"?n.textContent!==x&&(u.suppressHydrationWarning!==!0&&bl(n.textContent,x,e),s=["children",x]):typeof x=="number"&&n.textContent!==""+x&&(u.suppressHydrationWarning!==!0&&bl(n.textContent,x,e),s=["children",""+x]):d.hasOwnProperty(f)&&x!=null&&f==="onScroll"&&Fe("scroll",n)}switch(r){case"input":Ea(n),hl(n,u,!0);break;case"textarea":Ea(n),wr(n);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(n.onclick=Cl)}n=s,t.updateQueue=n,n!==null&&(t.flags|=4)}else{f=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cn(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=f.createElement(r,{is:n.is}):(e=f.createElement(r),r==="select"&&(f=e,n.multiple?f.multiple=!0:n.size&&(f.size=n.size))):e=f.createElementNS(e,r),e[lr]=t,e[jn]=n,zc(e,t,!1,!1),t.stateNode=e;e:{switch(f=La(r,n),r){case"dialog":Fe("cancel",e),Fe("close",e),s=n;break;case"iframe":case"object":case"embed":Fe("load",e),s=n;break;case"video":case"audio":for(s=0;s<Ln.length;s++)Fe(Ln[s],e);s=n;break;case"source":Fe("error",e),s=n;break;case"img":case"image":case"link":Fe("error",e),Fe("load",e),s=n;break;case"details":Fe("toggle",e),s=n;break;case"input":fl(e,n),s=Ia(e,n),Fe("invalid",e);break;case"option":s=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},s=W({},n,{value:void 0}),Fe("invalid",e);break;case"textarea":pl(e,n),s=un(e,n),Fe("invalid",e);break;default:s=n}Sa(r,s),x=s;for(u in x)if(x.hasOwnProperty(u)){var R=x[u];u==="style"?Kt(e,R):u==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&Ot(e,R)):u==="children"?typeof R=="string"?(r!=="textarea"||R!=="")&&Sr(e,R):typeof R=="number"&&Sr(e,""+R):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(d.hasOwnProperty(u)?R!=null&&u==="onScroll"&&Fe("scroll",e):R!=null&&G(e,u,R,f))}switch(r){case"input":Ea(e),hl(e,n,!1);break;case"textarea":Ea(e),wr(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ie(n.value));break;case"select":e.multiple=!!n.multiple,u=n.value,u!=null?Ir(e,!!n.multiple,u,!1):n.defaultValue!=null&&Ir(e,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Cl)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ht(t),null;case 6:if(e&&t.stateNode!=null)Wc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(o(166));if(r=ga(Dn.current),ga(ir.current),_l(t)){if(n=t.stateNode,r=t.memoizedProps,n[lr]=t,(u=n.nodeValue!==r)&&(e=kt,e!==null))switch(e.tag){case 3:bl(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bl(n.nodeValue,r,(e.mode&1)!==0)}u&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[lr]=t,t.stateNode=n}return ht(t),null;case 13:if(Be(Je),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(We&&Ut!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Qu(),Fa(),t.flags|=98560,u=!1;else if(u=_l(t),n!==null&&n.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[lr]=t}else Fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ht(t),u=!1}else qt!==null&&(lo(qt),qt=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Je.current&1)!==0?lt===0&&(lt=3):oo())),t.updateQueue!==null&&(t.flags|=4),ht(t),null);case 4:return Wa(),Ws(e,t),e===null&&kn(t.stateNode.containerInfo),ht(t),null;case 10:return Rs(t.type._context),ht(t),null;case 17:return Mt(t.type)&&Kl(),ht(t),null;case 19:if(Be(Je),u=t.memoizedState,u===null)return ht(t),null;if(n=(t.flags&128)!==0,f=u.rendering,f===null)if(n)Yn(u,!1);else{if(lt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=Wl(e),f!==null){for(t.flags|=128,Yn(u,!1),n=f.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)u=r,e=n,u.flags&=14680066,f=u.alternate,f===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=f.childLanes,u.lanes=f.lanes,u.child=f.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=f.memoizedProps,u.memoizedState=f.memoizedState,u.updateQueue=f.updateQueue,u.type=f.type,e=f.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return _e(Je,Je.current&1|2),t.child}e=e.sibling}u.tail!==null&&De()>Za&&(t.flags|=128,n=!0,Yn(u,!1),t.lanes=4194304)}else{if(!n)if(e=Wl(f),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Yn(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!We)return ht(t),null}else 2*De()-u.renderingStartTime>Za&&r!==1073741824&&(t.flags|=128,n=!0,Yn(u,!1),t.lanes=4194304);u.isBackwards?(f.sibling=t.child,t.child=f):(r=u.last,r!==null?r.sibling=f:t.child=f,u.last=f)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=De(),t.sibling=null,r=Je.current,_e(Je,n?r&1|2:r&1),t):(ht(t),null);case 22:case 23:return so(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(jt&1073741824)!==0&&(ht(t),t.subtreeFlags&6&&(t.flags|=8192)):ht(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Mh(e,t){switch(As(t),t.tag){case 1:return Mt(t.type)&&Kl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wa(),Be(Tt),Be(mt),Ss(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Is(t),null;case 13:if(Be(Je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Be(Je),null;case 4:return Wa(),null;case 10:return Rs(t.type._context),null;case 22:case 23:return so(),null;case 24:return null;default:return null}}var ai=!1,pt=!1,Ph=typeof WeakSet=="function"?WeakSet:Set,Q=null;function qa(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Qe(e,t,n)}else r.current=null}function Js(e,t,r){try{r()}catch(n){Qe(e,t,n)}}var Jc=!1;function Eh(e,t){if(ss=Tl,e=Iu(),Xi(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var s=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{r.nodeType,u.nodeType}catch{r=null;break e}var f=0,x=-1,R=-1,j=0,Y=0,B=e,V=null;t:for(;;){for(var J;B!==r||s!==0&&B.nodeType!==3||(x=f+s),B!==u||n!==0&&B.nodeType!==3||(R=f+n),B.nodeType===3&&(f+=B.nodeValue.length),(J=B.firstChild)!==null;)V=B,B=J;for(;;){if(B===e)break t;if(V===r&&++j===s&&(x=f),V===u&&++Y===n&&(R=f),(J=B.nextSibling)!==null)break;B=V,V=B.parentNode}B=J}r=x===-1||R===-1?null:{start:x,end:R}}else r=null}r=r||{start:0,end:0}}else r=null;for(os={focusedElem:e,selectionRange:r},Tl=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var ee=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ee!==null){var re=ee.memoizedProps,Xe=ee.memoizedState,w=t.stateNode,M=w.getSnapshotBeforeUpdate(t.elementType===t.type?re:Qt(t.type,re),Xe);w.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var L=t.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(z){Qe(t,t.return,z)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return ee=Jc,Jc=!1,ee}function Fn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var u=s.destroy;s.destroy=void 0,u!==void 0&&Js(t,r,u)}s=s.next}while(s!==n)}}function ni(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function qs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function qc(e){var t=e.alternate;t!==null&&(e.alternate=null,qc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lr],delete t[jn],delete t[ms],delete t[oh],delete t[uh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qc(e){return e.tag===5||e.tag===3||e.tag===4}function Zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Cl));else if(n!==4&&(e=e.child,e!==null))for(Qs(e,t,r),e=e.sibling;e!==null;)Qs(e,t,r),e=e.sibling}function Zs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Zs(e,t,r),e=e.sibling;e!==null;)Zs(e,t,r),e=e.sibling}var ct=null,Zt=!1;function zr(e,t,r){for(r=r.child;r!==null;)Xc(e,t,r),r=r.sibling}function Xc(e,t,r){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(pr,r)}catch{}switch(r.tag){case 5:pt||qa(r,t);case 6:var n=ct,s=Zt;ct=null,zr(e,t,r),ct=n,Zt=s,ct!==null&&(Zt?(e=ct,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ct.removeChild(r.stateNode));break;case 18:ct!==null&&(Zt?(e=ct,r=r.stateNode,e.nodeType===8?ds(e.parentNode,r):e.nodeType===1&&ds(e,r),Rn(e)):ds(ct,r.stateNode));break;case 4:n=ct,s=Zt,ct=r.stateNode.containerInfo,Zt=!0,zr(e,t,r),ct=n,Zt=s;break;case 0:case 11:case 14:case 15:if(!pt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var u=s,f=u.destroy;u=u.tag,f!==void 0&&((u&2)!==0||(u&4)!==0)&&Js(r,t,f),s=s.next}while(s!==n)}zr(e,t,r);break;case 1:if(!pt&&(qa(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(x){Qe(r,t,x)}zr(e,t,r);break;case 21:zr(e,t,r);break;case 22:r.mode&1?(pt=(n=pt)||r.memoizedState!==null,zr(e,t,r),pt=n):zr(e,t,r);break;default:zr(e,t,r)}}function ed(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Ph),t.forEach(function(n){var s=Ch.bind(null,e,n);r.has(n)||(r.add(n),n.then(s,s))})}}function Xt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var s=r[n];try{var u=e,f=t,x=f;e:for(;x!==null;){switch(x.tag){case 5:ct=x.stateNode,Zt=!1;break e;case 3:ct=x.stateNode.containerInfo,Zt=!0;break e;case 4:ct=x.stateNode.containerInfo,Zt=!0;break e}x=x.return}if(ct===null)throw Error(o(160));Xc(u,f,s),ct=null,Zt=!1;var R=s.alternate;R!==null&&(R.return=null),s.return=null}catch(j){Qe(s,t,j)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)td(t,e),t=t.sibling}function td(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xt(t,e),or(e),n&4){try{Fn(3,e,e.return),ni(3,e)}catch(re){Qe(e,e.return,re)}try{Fn(5,e,e.return)}catch(re){Qe(e,e.return,re)}}break;case 1:Xt(t,e),or(e),n&512&&r!==null&&qa(r,r.return);break;case 5:if(Xt(t,e),or(e),n&512&&r!==null&&qa(r,r.return),e.flags&32){var s=e.stateNode;try{Sr(s,"")}catch(re){Qe(e,e.return,re)}}if(n&4&&(s=e.stateNode,s!=null)){var u=e.memoizedProps,f=r!==null?r.memoizedProps:u,x=e.type,R=e.updateQueue;if(e.updateQueue=null,R!==null)try{x==="input"&&u.type==="radio"&&u.name!=null&&tr(s,u),La(x,f);var j=La(x,u);for(f=0;f<R.length;f+=2){var Y=R[f],B=R[f+1];Y==="style"?Kt(s,B):Y==="dangerouslySetInnerHTML"?Ot(s,B):Y==="children"?Sr(s,B):G(s,Y,B,j)}switch(x){case"input":on(s,u);break;case"textarea":rr(s,u);break;case"select":var V=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!u.multiple;var J=u.value;J!=null?Ir(s,!!u.multiple,J,!1):V!==!!u.multiple&&(u.defaultValue!=null?Ir(s,!!u.multiple,u.defaultValue,!0):Ir(s,!!u.multiple,u.multiple?[]:"",!1))}s[jn]=u}catch(re){Qe(e,e.return,re)}}break;case 6:if(Xt(t,e),or(e),n&4){if(e.stateNode===null)throw Error(o(162));s=e.stateNode,u=e.memoizedProps;try{s.nodeValue=u}catch(re){Qe(e,e.return,re)}}break;case 3:if(Xt(t,e),or(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Rn(t.containerInfo)}catch(re){Qe(e,e.return,re)}break;case 4:Xt(t,e),or(e);break;case 13:Xt(t,e),or(e),s=e.child,s.flags&8192&&(u=s.memoizedState!==null,s.stateNode.isHidden=u,!u||s.alternate!==null&&s.alternate.memoizedState!==null||(to=De())),n&4&&ed(e);break;case 22:if(Y=r!==null&&r.memoizedState!==null,e.mode&1?(pt=(j=pt)||Y,Xt(t,e),pt=j):Xt(t,e),or(e),n&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!Y&&(e.mode&1)!==0)for(Q=e,Y=e.child;Y!==null;){for(B=Q=Y;Q!==null;){switch(V=Q,J=V.child,V.tag){case 0:case 11:case 14:case 15:Fn(4,V,V.return);break;case 1:qa(V,V.return);var ee=V.stateNode;if(typeof ee.componentWillUnmount=="function"){n=V,r=V.return;try{t=n,ee.props=t.memoizedProps,ee.state=t.memoizedState,ee.componentWillUnmount()}catch(re){Qe(n,r,re)}}break;case 5:qa(V,V.return);break;case 22:if(V.memoizedState!==null){nd(B);continue}}J!==null?(J.return=V,Q=J):nd(B)}Y=Y.sibling}e:for(Y=null,B=e;;){if(B.tag===5){if(Y===null){Y=B;try{s=B.stateNode,j?(u=s.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(x=B.stateNode,R=B.memoizedProps.style,f=R!=null&&R.hasOwnProperty("display")?R.display:null,x.style.display=Al("display",f))}catch(re){Qe(e,e.return,re)}}}else if(B.tag===6){if(Y===null)try{B.stateNode.nodeValue=j?"":B.memoizedProps}catch(re){Qe(e,e.return,re)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===e)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break e;for(;B.sibling===null;){if(B.return===null||B.return===e)break e;Y===B&&(Y=null),B=B.return}Y===B&&(Y=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:Xt(t,e),or(e),n&4&&ed(e);break;case 21:break;default:Xt(t,e),or(e)}}function or(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Qc(r)){var n=r;break e}r=r.return}throw Error(o(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(Sr(s,""),n.flags&=-33);var u=Zc(e);Zs(e,u,s);break;case 3:case 4:var f=n.stateNode.containerInfo,x=Zc(e);Qs(e,x,f);break;default:throw Error(o(161))}}catch(R){Qe(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ih(e,t,r){Q=e,rd(e)}function rd(e,t,r){for(var n=(e.mode&1)!==0;Q!==null;){var s=Q,u=s.child;if(s.tag===22&&n){var f=s.memoizedState!==null||ai;if(!f){var x=s.alternate,R=x!==null&&x.memoizedState!==null||pt;x=ai;var j=pt;if(ai=f,(pt=R)&&!j)for(Q=s;Q!==null;)f=Q,R=f.child,f.tag===22&&f.memoizedState!==null?ld(s):R!==null?(R.return=f,Q=R):ld(s);for(;u!==null;)Q=u,rd(u),u=u.sibling;Q=s,ai=x,pt=j}ad(e)}else(s.subtreeFlags&8772)!==0&&u!==null?(u.return=s,Q=u):ad(e)}}function ad(e){for(;Q!==null;){var t=Q;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:pt||ni(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!pt)if(r===null)n.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:Qt(t.type,r.memoizedProps);n.componentDidUpdate(s,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&nc(t,u,n);break;case 3:var f=t.updateQueue;if(f!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}nc(t,f,r)}break;case 5:var x=t.stateNode;if(r===null&&t.flags&4){r=x;var R=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&r.focus();break;case"img":R.src&&(r.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var j=t.alternate;if(j!==null){var Y=j.memoizedState;if(Y!==null){var B=Y.dehydrated;B!==null&&Rn(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}pt||t.flags&512&&qs(t)}catch(V){Qe(t,t.return,V)}}if(t===e){Q=null;break}if(r=t.sibling,r!==null){r.return=t.return,Q=r;break}Q=t.return}}function nd(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Q=r;break}Q=t.return}}function ld(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ni(4,t)}catch(R){Qe(t,r,R)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var s=t.return;try{n.componentDidMount()}catch(R){Qe(t,s,R)}}var u=t.return;try{qs(t)}catch(R){Qe(t,u,R)}break;case 5:var f=t.return;try{qs(t)}catch(R){Qe(t,f,R)}}}catch(R){Qe(t,t.return,R)}if(t===e){Q=null;break}var x=t.sibling;if(x!==null){x.return=t.return,Q=x;break}Q=t.return}}var wh=Math.ceil,li=ae.ReactCurrentDispatcher,Xs=ae.ReactCurrentOwner,Yt=ae.ReactCurrentBatchConfig,ke=0,ot=null,tt=null,dt=0,jt=0,Qa=Vr(0),lt=0,Bn=null,ya=0,ii=0,eo=0,zn=null,Et=null,to=0,Za=1/0,Pr=null,si=!1,ro=null,$r=null,oi=!1,Wr=null,ui=0,$n=0,ao=null,ci=-1,di=0;function Nt(){return(ke&6)!==0?De():ci!==-1?ci:ci=De()}function Jr(e){return(e.mode&1)===0?1:(ke&2)!==0&&dt!==0?dt&-dt:dh.transition!==null?(di===0&&(di=Zo()),di):(e=He,e!==0||(e=window.event,e=e===void 0?16:su(e.type)),e)}function er(e,t,r,n){if(50<$n)throw $n=0,ao=null,Error(o(185));gn(e,r,n),((ke&2)===0||e!==ot)&&(e===ot&&((ke&2)===0&&(ii|=r),lt===4&&qr(e,dt)),It(e,n),r===1&&ke===0&&(t.mode&1)===0&&(Za=De()+500,Hl&&Yr()))}function It(e,t){var r=e.callbackNode;df(e,t);var n=Nl(e,e===ot?dt:0);if(n===0)r!==null&&it(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&it(r),t===1)e.tag===0?ch(sd.bind(null,e)):zu(sd.bind(null,e)),ih(function(){(ke&6)===0&&Yr()}),r=null;else{switch(Xo(n)){case 1:r=Dt;break;case 4:r=St;break;case 16:r=Ur;break;case 536870912:r=nr;break;default:r=Ur}r=pd(r,id.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function id(e,t){if(ci=-1,di=0,(ke&6)!==0)throw Error(o(327));var r=e.callbackNode;if(Xa()&&e.callbackNode!==r)return null;var n=Nl(e,e===ot?dt:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=mi(e,n);else{t=n;var s=ke;ke|=2;var u=ud();(ot!==e||dt!==t)&&(Pr=null,Za=De()+500,va(e,t));do try{kh();break}catch(x){od(e,x)}while(!0);vs(),li.current=u,ke=s,tt!==null?t=0:(ot=null,dt=0,t=lt)}if(t!==0){if(t===2&&(s=Ki(e),s!==0&&(n=s,t=no(e,s))),t===1)throw r=Bn,va(e,0),qr(e,n),It(e,De()),r;if(t===6)qr(e,n);else{if(s=e.current.alternate,(n&30)===0&&!Sh(s)&&(t=mi(e,n),t===2&&(u=Ki(e),u!==0&&(n=u,t=no(e,u))),t===1))throw r=Bn,va(e,0),qr(e,n),It(e,De()),r;switch(e.finishedWork=s,e.finishedLanes=n,t){case 0:case 1:throw Error(o(345));case 2:Ra(e,Et,Pr);break;case 3:if(qr(e,n),(n&130023424)===n&&(t=to+500-De(),10<t)){if(Nl(e,0)!==0)break;if(s=e.suspendedLanes,(s&n)!==n){Nt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=cs(Ra.bind(null,e,Et,Pr),t);break}Ra(e,Et,Pr);break;case 4:if(qr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,s=-1;0<n;){var f=31-Ge(n);u=1<<f,f=t[f],f>s&&(s=f),n&=~u}if(n=s,n=De()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*wh(n/1960))-n,10<n){e.timeoutHandle=cs(Ra.bind(null,e,Et,Pr),n);break}Ra(e,Et,Pr);break;case 5:Ra(e,Et,Pr);break;default:throw Error(o(329))}}}return It(e,De()),e.callbackNode===r?id.bind(null,e):null}function no(e,t){var r=zn;return e.current.memoizedState.isDehydrated&&(va(e,t).flags|=256),e=mi(e,t),e!==2&&(t=Et,Et=r,t!==null&&lo(t)),e}function lo(e){Et===null?Et=e:Et.push.apply(Et,e)}function Sh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var s=r[n],u=s.getSnapshot;s=s.value;try{if(!Jt(u(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qr(e,t){for(t&=~eo,t&=~ii,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ge(t),n=1<<r;e[r]=-1,t&=~n}}function sd(e){if((ke&6)!==0)throw Error(o(327));Xa();var t=Nl(e,0);if((t&1)===0)return It(e,De()),null;var r=mi(e,t);if(e.tag!==0&&r===2){var n=Ki(e);n!==0&&(t=n,r=no(e,n))}if(r===1)throw r=Bn,va(e,0),qr(e,t),It(e,De()),r;if(r===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ra(e,Et,Pr),It(e,De()),null}function io(e,t){var r=ke;ke|=1;try{return e(t)}finally{ke=r,ke===0&&(Za=De()+500,Hl&&Yr())}}function Na(e){Wr!==null&&Wr.tag===0&&(ke&6)===0&&Xa();var t=ke;ke|=1;var r=Yt.transition,n=He;try{if(Yt.transition=null,He=1,e)return e()}finally{He=n,Yt.transition=r,ke=t,(ke&6)===0&&Yr()}}function so(){jt=Qa.current,Be(Qa)}function va(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,lh(r)),tt!==null)for(r=tt.return;r!==null;){var n=r;switch(As(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Kl();break;case 3:Wa(),Be(Tt),Be(mt),Ss();break;case 5:Is(n);break;case 4:Wa();break;case 13:Be(Je);break;case 19:Be(Je);break;case 10:Rs(n.type._context);break;case 22:case 23:so()}r=r.return}if(ot=e,tt=e=Qr(e.current,null),dt=jt=t,lt=0,Bn=null,eo=ii=ya=0,Et=zn=null,Aa!==null){for(t=0;t<Aa.length;t++)if(r=Aa[t],n=r.interleaved,n!==null){r.interleaved=null;var s=n.next,u=r.pending;if(u!==null){var f=u.next;u.next=s,n.next=f}r.pending=n}Aa=null}return e}function od(e,t){do{var r=tt;try{if(vs(),Jl.current=Xl,ql){for(var n=qe.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}ql=!1}if(xa=0,st=nt=qe=null,Hn=!1,Gn=0,Xs.current=null,r===null||r.return===null){lt=1,Bn=t,tt=null;break}e:{var u=e,f=r.return,x=r,R=t;if(t=dt,x.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var j=R,Y=x,B=Y.tag;if((Y.mode&1)===0&&(B===0||B===11||B===15)){var V=Y.alternate;V?(Y.updateQueue=V.updateQueue,Y.memoizedState=V.memoizedState,Y.lanes=V.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var J=jc(f);if(J!==null){J.flags&=-257,bc(J,f,x,u,t),J.mode&1&&Uc(u,j,t),t=J,R=j;var ee=t.updateQueue;if(ee===null){var re=new Set;re.add(R),t.updateQueue=re}else ee.add(R);break e}else{if((t&1)===0){Uc(u,j,t),oo();break e}R=Error(o(426))}}else if(We&&x.mode&1){var Xe=jc(f);if(Xe!==null){(Xe.flags&65536)===0&&(Xe.flags|=256),bc(Xe,f,x,u,t),ys(Ja(R,x));break e}}u=R=Ja(R,x),lt!==4&&(lt=2),zn===null?zn=[u]:zn.push(u),u=f;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var w=Lc(u,R,t);ac(u,w);break e;case 1:x=R;var M=u.type,L=u.stateNode;if((u.flags&128)===0&&(typeof M.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&($r===null||!$r.has(L)))){u.flags|=65536,t&=-t,u.lanes|=t;var z=kc(u,x,t);ac(u,z);break e}}u=u.return}while(u!==null)}dd(r)}catch(le){t=le,tt===r&&r!==null&&(tt=r=r.return);continue}break}while(!0)}function ud(){var e=li.current;return li.current=Xl,e===null?Xl:e}function oo(){(lt===0||lt===3||lt===2)&&(lt=4),ot===null||(ya&268435455)===0&&(ii&268435455)===0||qr(ot,dt)}function mi(e,t){var r=ke;ke|=2;var n=ud();(ot!==e||dt!==t)&&(Pr=null,va(e,t));do try{Lh();break}catch(s){od(e,s)}while(!0);if(vs(),ke=r,li.current=n,tt!==null)throw Error(o(261));return ot=null,dt=0,lt}function Lh(){for(;tt!==null;)cd(tt)}function kh(){for(;tt!==null&&!Ce();)cd(tt)}function cd(e){var t=hd(e.alternate,e,jt);e.memoizedProps=e.pendingProps,t===null?dd(e):tt=t,Xs.current=null}function dd(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Th(r,t,jt),r!==null){tt=r;return}}else{if(r=Mh(r,t),r!==null){r.flags&=32767,tt=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{lt=6,tt=null;return}}if(t=t.sibling,t!==null){tt=t;return}tt=t=e}while(t!==null);lt===0&&(lt=5)}function Ra(e,t,r){var n=He,s=Yt.transition;try{Yt.transition=null,He=1,Uh(e,t,r,n)}finally{Yt.transition=s,He=n}return null}function Uh(e,t,r,n){do Xa();while(Wr!==null);if((ke&6)!==0)throw Error(o(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var u=r.lanes|r.childLanes;if(mf(e,u),e===ot&&(tt=ot=null,dt=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||oi||(oi=!0,pd(Ur,function(){return Xa(),null})),u=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||u){u=Yt.transition,Yt.transition=null;var f=He;He=1;var x=ke;ke|=4,Xs.current=null,Eh(e,r),td(r,e),Zf(os),Tl=!!ss,os=ss=null,e.current=r,Ih(r),Rt(),ke=x,He=f,Yt.transition=u}else e.current=r;if(oi&&(oi=!1,Wr=e,ui=s),u=e.pendingLanes,u===0&&($r=null),Se(r.stateNode),It(e,De()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],n(s.value,{componentStack:s.stack,digest:s.digest});if(si)throw si=!1,e=ro,ro=null,e;return(ui&1)!==0&&e.tag!==0&&Xa(),u=e.pendingLanes,(u&1)!==0?e===ao?$n++:($n=0,ao=e):$n=0,Yr(),null}function Xa(){if(Wr!==null){var e=Xo(ui),t=Yt.transition,r=He;try{if(Yt.transition=null,He=16>e?16:e,Wr===null)var n=!1;else{if(e=Wr,Wr=null,ui=0,(ke&6)!==0)throw Error(o(331));var s=ke;for(ke|=4,Q=e.current;Q!==null;){var u=Q,f=u.child;if((Q.flags&16)!==0){var x=u.deletions;if(x!==null){for(var R=0;R<x.length;R++){var j=x[R];for(Q=j;Q!==null;){var Y=Q;switch(Y.tag){case 0:case 11:case 15:Fn(8,Y,u)}var B=Y.child;if(B!==null)B.return=Y,Q=B;else for(;Q!==null;){Y=Q;var V=Y.sibling,J=Y.return;if(qc(Y),Y===j){Q=null;break}if(V!==null){V.return=J,Q=V;break}Q=J}}}var ee=u.alternate;if(ee!==null){var re=ee.child;if(re!==null){ee.child=null;do{var Xe=re.sibling;re.sibling=null,re=Xe}while(re!==null)}}Q=u}}if((u.subtreeFlags&2064)!==0&&f!==null)f.return=u,Q=f;else e:for(;Q!==null;){if(u=Q,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:Fn(9,u,u.return)}var w=u.sibling;if(w!==null){w.return=u.return,Q=w;break e}Q=u.return}}var M=e.current;for(Q=M;Q!==null;){f=Q;var L=f.child;if((f.subtreeFlags&2064)!==0&&L!==null)L.return=f,Q=L;else e:for(f=M;Q!==null;){if(x=Q,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:ni(9,x)}}catch(le){Qe(x,x.return,le)}if(x===f){Q=null;break e}var z=x.sibling;if(z!==null){z.return=x.return,Q=z;break e}Q=x.return}}if(ke=s,Yr(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(pr,e)}catch{}n=!0}return n}finally{He=r,Yt.transition=t}}return!1}function md(e,t,r){t=Ja(r,t),t=Lc(e,t,1),e=Br(e,t,1),t=Nt(),e!==null&&(gn(e,1,t),It(e,t))}function Qe(e,t,r){if(e.tag===3)md(e,e,r);else for(;t!==null;){if(t.tag===3){md(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&($r===null||!$r.has(n))){e=Ja(r,e),e=kc(t,e,1),t=Br(t,e,1),e=Nt(),t!==null&&(gn(t,1,e),It(t,e));break}}t=t.return}}function jh(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Nt(),e.pingedLanes|=e.suspendedLanes&r,ot===e&&(dt&r)===r&&(lt===4||lt===3&&(dt&130023424)===dt&&500>De()-to?va(e,0):eo|=r),It(e,t)}function fd(e,t){t===0&&((e.mode&1)===0?t=1:(t=ca,ca<<=1,(ca&130023424)===0&&(ca=4194304)));var r=Nt();e=Rr(e,t),e!==null&&(gn(e,t,r),It(e,r))}function bh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),fd(e,r)}function Ch(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(o(314))}n!==null&&n.delete(t),fd(e,r)}var hd;hd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Tt.current)Pt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Pt=!1,Rh(e,t,r);Pt=(e.flags&131072)!==0}else Pt=!1,We&&(t.flags&1048576)!==0&&$u(t,Vl,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ri(e,t),e=t.pendingProps;var s=Va(t,mt.current);$a(t,r),s=Us(null,t,n,e,s,r);var u=js();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Mt(n)?(u=!0,Dl(t)):u=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ps(t),s.updater=ei,t.stateNode=s,s._reactInternals=t,Hs(t,n,e,r),t=Ys(null,t,n,!0,u,r)):(t.tag=0,We&&u&&ps(t),yt(null,t,s,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ri(e,t),e=t.pendingProps,s=n._init,n=s(n._payload),t.type=n,s=t.tag=Kh(n),e=Qt(n,e),s){case 0:t=_s(null,t,n,e,r);break e;case 1:t=Gc(null,t,n,e,r);break e;case 11:t=Cc(null,t,n,e,r);break e;case 14:t=Oc(null,t,n,Qt(n.type,e),r);break e}throw Error(o(306,n,""))}return t;case 0:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Qt(n,s),_s(e,t,n,s,r);case 1:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Qt(n,s),Gc(e,t,n,s,r);case 3:e:{if(Vc(t),e===null)throw Error(o(387));n=t.pendingProps,u=t.memoizedState,s=u.element,rc(e,t),$l(t,n,null,r);var f=t.memoizedState;if(n=f.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){s=Ja(Error(o(423)),t),t=_c(e,t,n,r,s);break e}else if(n!==s){s=Ja(Error(o(424)),t),t=_c(e,t,n,r,s);break e}else for(Ut=Gr(t.stateNode.containerInfo.firstChild),kt=t,We=!0,qt=null,r=ec(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Fa(),n===s){t=Mr(e,t,r);break e}yt(e,t,n,r)}t=t.child}return t;case 5:return lc(t),e===null&&xs(t),n=t.type,s=t.pendingProps,u=e!==null?e.memoizedProps:null,f=s.children,us(n,s)?f=null:u!==null&&us(n,u)&&(t.flags|=32),Hc(e,t),yt(e,t,f,r),t.child;case 6:return e===null&&xs(t),null;case 13:return Yc(e,t,r);case 4:return Es(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ba(t,null,n,r):yt(e,t,n,r),t.child;case 11:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Qt(n,s),Cc(e,t,n,s,r);case 7:return yt(e,t,t.pendingProps,r),t.child;case 8:return yt(e,t,t.pendingProps.children,r),t.child;case 12:return yt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,s=t.pendingProps,u=t.memoizedProps,f=s.value,_e(Fl,n._currentValue),n._currentValue=f,u!==null)if(Jt(u.value,f)){if(u.children===s.children&&!Tt.current){t=Mr(e,t,r);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var x=u.dependencies;if(x!==null){f=u.child;for(var R=x.firstContext;R!==null;){if(R.context===n){if(u.tag===1){R=Tr(-1,r&-r),R.tag=2;var j=u.updateQueue;if(j!==null){j=j.shared;var Y=j.pending;Y===null?R.next=R:(R.next=Y.next,Y.next=R),j.pending=R}}u.lanes|=r,R=u.alternate,R!==null&&(R.lanes|=r),Ts(u.return,r,t),x.lanes|=r;break}R=R.next}}else if(u.tag===10)f=u.type===t.type?null:u.child;else if(u.tag===18){if(f=u.return,f===null)throw Error(o(341));f.lanes|=r,x=f.alternate,x!==null&&(x.lanes|=r),Ts(f,r,t),f=u.sibling}else f=u.child;if(f!==null)f.return=u;else for(f=u;f!==null;){if(f===t){f=null;break}if(u=f.sibling,u!==null){u.return=f.return,f=u;break}f=f.return}u=f}yt(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,n=t.pendingProps.children,$a(t,r),s=Vt(s),n=n(s),t.flags|=1,yt(e,t,n,r),t.child;case 14:return n=t.type,s=Qt(n,t.pendingProps),s=Qt(n.type,s),Oc(e,t,n,s,r);case 15:return Kc(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Qt(n,s),ri(e,t),t.tag=1,Mt(n)?(e=!0,Dl(t)):e=!1,$a(t,r),wc(t,n,s),Hs(t,n,s,r),Ys(null,t,n,!0,e,r);case 19:return Bc(e,t,r);case 22:return Dc(e,t,r)}throw Error(o(156,t.tag))};function pd(e,t){return Ze(e,t)}function Oh(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,r,n){return new Oh(e,t,r,n)}function uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kh(e){if(typeof e=="function")return uo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ke)return 11;if(e===ze)return 14}return 2}function Qr(e,t){var r=e.alternate;return r===null?(r=Ft(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function fi(e,t,r,n,s,u){var f=2;if(n=e,typeof e=="function")uo(e)&&(f=1);else if(typeof e=="string")f=5;else e:switch(e){case U:return Ta(r.children,s,u,t);case ie:f=8,s|=8;break;case pe:return e=Ft(12,r,t,s|2),e.elementType=pe,e.lanes=u,e;case Ye:return e=Ft(13,r,t,s),e.elementType=Ye,e.lanes=u,e;case je:return e=Ft(19,r,t,s),e.elementType=je,e.lanes=u,e;case Ne:return hi(r,s,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Me:f=10;break e;case Le:f=9;break e;case Ke:f=11;break e;case ze:f=14;break e;case Te:f=16,n=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Ft(f,r,t,s),t.elementType=e,t.type=n,t.lanes=u,t}function Ta(e,t,r,n){return e=Ft(7,e,n,t),e.lanes=r,e}function hi(e,t,r,n){return e=Ft(22,e,n,t),e.elementType=Ne,e.lanes=r,e.stateNode={isHidden:!1},e}function co(e,t,r){return e=Ft(6,e,null,t),e.lanes=r,e}function mo(e,t,r){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dh(e,t,r,n,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Di(0),this.expirationTimes=Di(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Di(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function fo(e,t,r,n,s,u,f,x,R){return e=new Dh(e,t,r,x,R),t===1?(t=1,u===!0&&(t|=8)):t=0,u=Ft(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ps(u),e}function Hh(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ye,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Ad(e){if(!e)return _r;e=e._reactInternals;e:{if(te(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var r=e.type;if(Mt(r))return Fu(e,r,t)}return t}function gd(e,t,r,n,s,u,f,x,R){return e=fo(r,n,!0,e,s,u,f,x,R),e.context=Ad(null),r=e.current,n=Nt(),s=Jr(r),u=Tr(n,s),u.callback=t??null,Br(r,u,s),e.current.lanes=s,gn(e,s,n),It(e,n),e}function pi(e,t,r,n){var s=t.current,u=Nt(),f=Jr(s);return r=Ad(r),t.context===null?t.context=r:t.pendingContext=r,t=Tr(u,f),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Br(s,t,f),e!==null&&(er(e,s,f,u),zl(e,s,f)),f}function Ai(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ho(e,t){xd(e,t),(e=e.alternate)&&xd(e,t)}function Gh(){return null}var yd=typeof reportError=="function"?reportError:function(e){console.error(e)};function po(e){this._internalRoot=e}gi.prototype.render=po.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));pi(e,t,null,null)},gi.prototype.unmount=po.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Na(function(){pi(null,e,null,null)}),t[xr]=null}};function gi(e){this._internalRoot=e}gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=ru();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Kr.length&&t!==0&&t<Kr[r].priority;r++);Kr.splice(r,0,e),r===0&&lu(e)}};function Ao(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nd(){}function Vh(e,t,r,n,s){if(s){if(typeof n=="function"){var u=n;n=function(){var j=Ai(f);u.call(j)}}var f=gd(t,n,e,0,null,!1,!1,"",Nd);return e._reactRootContainer=f,e[xr]=f.current,kn(e.nodeType===8?e.parentNode:e),Na(),f}for(;s=e.lastChild;)e.removeChild(s);if(typeof n=="function"){var x=n;n=function(){var j=Ai(R);x.call(j)}}var R=fo(e,0,!1,null,null,!1,!1,"",Nd);return e._reactRootContainer=R,e[xr]=R.current,kn(e.nodeType===8?e.parentNode:e),Na(function(){pi(t,R,r,n)}),R}function yi(e,t,r,n,s){var u=r._reactRootContainer;if(u){var f=u;if(typeof s=="function"){var x=s;s=function(){var R=Ai(f);x.call(R)}}pi(t,f,e,s)}else f=Vh(r,t,e,s,n);return Ai(f)}eu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=da(t.pendingLanes);r!==0&&(Hi(t,r|1),It(t,De()),(ke&6)===0&&(Za=De()+500,Yr()))}break;case 13:Na(function(){var n=Rr(e,1);if(n!==null){var s=Nt();er(n,e,1,s)}}),ho(e,1)}},Gi=function(e){if(e.tag===13){var t=Rr(e,134217728);if(t!==null){var r=Nt();er(t,e,134217728,r)}ho(e,134217728)}},tu=function(e){if(e.tag===13){var t=Jr(e),r=Rr(e,t);if(r!==null){var n=Nt();er(r,e,t,n)}ho(e,t)}},ru=function(){return He},au=function(e,t){var r=He;try{return He=e,t()}finally{He=r}},Lr=function(e,t,r){switch(t){case"input":if(on(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var s=Ol(n);if(!s)throw Error(o(90));at(n),on(n,s)}}}break;case"textarea":rr(e,r);break;case"select":t=r.value,t!=null&&Ir(e,!!r.multiple,t,!1)}},hn=io,ia=Na;var _h={usingClientEntryPoint:!1,Events:[bn,Ha,Ol,fn,yl,io]},Wn={findFiberByHostInstance:ma,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yh={bundleType:Wn.bundleType,version:Wn.version,rendererPackageName:Wn.rendererPackageName,rendererConfig:Wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=we(e),e===null?null:e.stateNode},findFiberByHostInstance:Wn.findFiberByHostInstance||Gh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ni.isDisabled&&Ni.supportsFiber)try{pr=Ni.inject(Yh),xt=Ni}catch{}}return wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_h,wt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ao(t))throw Error(o(200));return Hh(e,t,null,r)},wt.createRoot=function(e,t){if(!Ao(e))throw Error(o(299));var r=!1,n="",s=yd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=fo(e,1,!1,null,null,r,!1,n,s),e[xr]=t.current,kn(e.nodeType===8?e.parentNode:e),new po(t)},wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=we(t),e=e===null?null:e.stateNode,e},wt.flushSync=function(e){return Na(e)},wt.hydrate=function(e,t,r){if(!xi(t))throw Error(o(200));return yi(null,e,t,!0,r)},wt.hydrateRoot=function(e,t,r){if(!Ao(e))throw Error(o(405));var n=r!=null&&r.hydratedSources||null,s=!1,u="",f=yd;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),t=gd(t,null,e,1,r??null,s,!1,u,f),e[xr]=t.current,kn(e),n)for(e=0;e<n.length;e++)r=n[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new gi(t)},wt.render=function(e,t,r){if(!xi(t))throw Error(o(200));return yi(null,e,t,!1,r)},wt.unmountComponentAtNode=function(e){if(!xi(e))throw Error(o(40));return e._reactRootContainer?(Na(function(){yi(null,null,e,!1,function(){e._reactRootContainer=null,e[xr]=null})}),!0):!1},wt.unstable_batchedUpdates=io,wt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!xi(r))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return yi(e,t,r,!1,n)},wt.version="18.3.1-next-f1338f8080-20240426",wt}var wd;function Xh(){if(wd)return yo.exports;wd=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),yo.exports=Zh(),yo.exports}var Sd;function ep(){if(Sd)return vi;Sd=1;var a=Xh();return vi.createRoot=a.createRoot,vi.hydrateRoot=a.hydrateRoot,vi}var tp=ep(),T=Ko();const rp=zh(T),ap=Bh({__proto__:null,default:rp},[T]);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var gm=a=>{throw TypeError(a)},np=(a,i,o)=>i.has(a)||gm("Cannot "+o),Ro=(a,i,o)=>(np(a,i,"read from private field"),o?o.call(a):i.get(a)),lp=(a,i,o)=>i.has(a)?gm("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(a):i.set(a,o),Ld="popstate";function ip(a={}){function i(c,d){let{pathname:m,search:h,hash:A}=c.location;return al("",{pathname:m,search:h,hash:A},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(c,d){return typeof d=="string"?d:dr(d)}return op(i,o,null,a)}function Ee(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function rt(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function sp(){return Math.random().toString(36).substring(2,10)}function kd(a,i){return{usr:a.state,key:a.key,idx:i}}function al(a,i,o=null,c){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?ra(i):i,state:o,key:i&&i.key||c||sp()}}function dr({pathname:a="/",search:i="",hash:o=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(a+=o.charAt(0)==="#"?o:"#"+o),a}function ra(a){let i={};if(a){let o=a.indexOf("#");o>=0&&(i.hash=a.substring(o),a=a.substring(0,o));let c=a.indexOf("?");c>=0&&(i.search=a.substring(c),a=a.substring(0,c)),a&&(i.pathname=a)}return i}function op(a,i,o,c={}){let{window:d=document.defaultView,v5Compat:m=!1}=c,h=d.history,A="POP",p=null,g=v();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function v(){return(h.state||{idx:null}).idx}function y(){A="POP";let D=v(),b=D==null?null:D-g;g=D,p&&p({action:A,location:O.location,delta:b})}function I(D,b){A="PUSH";let K=al(O.location,D,b);g=v()+1;let G=kd(K,g),ae=O.createHref(K);try{h.pushState(G,"",ae)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;d.location.assign(ae)}m&&p&&p({action:A,location:O.location,delta:1})}function S(D,b){A="REPLACE";let K=al(O.location,D,b);g=v();let G=kd(K,g),ae=O.createHref(K);h.replaceState(G,"",ae),m&&p&&p({action:A,location:O.location,delta:0})}function H(D){return xm(D)}let O={get action(){return A},get location(){return a(d,h)},listen(D){if(p)throw new Error("A history only accepts one active listener");return d.addEventListener(Ld,y),p=D,()=>{d.removeEventListener(Ld,y),p=null}},createHref(D){return i(d,D)},createURL:H,encodeLocation(D){let b=H(D);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:I,replace:S,go(D){return h.go(D)}};return O}function xm(a,i=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Ee(o,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:dr(a);return c=c.replace(/ $/,"%20"),!i&&c.startsWith("//")&&(c=o+c),new URL(c,o)}var el,Ud=class{constructor(a){if(lp(this,el,new Map),a)for(let[i,o]of a)this.set(i,o)}get(a){if(Ro(this,el).has(a))return Ro(this,el).get(a);if(a.defaultValue!==void 0)return a.defaultValue;throw new Error("No value found for context")}set(a,i){Ro(this,el).set(a,i)}};el=new WeakMap;var up=new Set(["lazy","caseSensitive","path","id","index","children"]);function cp(a){return up.has(a)}var dp=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function mp(a){return dp.has(a)}function fp(a){return a.index===!0}function nl(a,i,o=[],c={},d=!1){return a.map((m,h)=>{let A=[...o,String(h)],p=typeof m.id=="string"?m.id:A.join("-");if(Ee(m.index!==!0||!m.children,"Cannot specify children on an index route"),Ee(d||!c[p],`Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`),fp(m)){let g={...m,id:p};return c[p]=jd(g,i(g)),g}else{let g={...m,id:p,children:void 0};return c[p]=jd(g,i(g)),m.children&&(g.children=nl(m.children,i,A,c,d)),g}})}function jd(a,i){return Object.assign(a,{...i,...typeof i.lazy=="object"&&i.lazy!=null?{lazy:{...a.lazy,...i.lazy}}:{}})}function Xr(a,i,o="/"){return tl(a,i,o,!1)}function tl(a,i,o,c){let d=typeof i=="string"?ra(i):i,m=zt(d.pathname||"/",o);if(m==null)return null;let h=ym(a);pp(h);let A=null;for(let p=0;A==null&&p<h.length;++p){let g=Ep(m);A=Mp(h[p],g,c)}return A}function hp(a,i){let{route:o,pathname:c,params:d}=a;return{id:o.id,pathname:c,params:d,data:i[o.id],loaderData:i[o.id],handle:o.handle}}function ym(a,i=[],o=[],c="",d=!1){let m=(h,A,p=d,g)=>{let v={relativePath:g===void 0?h.path||"":g,caseSensitive:h.caseSensitive===!0,childrenIndex:A,route:h};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(c)&&p)return;Ee(v.relativePath.startsWith(c),`Absolute route path "${v.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(c.length)}let y=cr([c,v.relativePath]),I=o.concat(v);h.children&&h.children.length>0&&(Ee(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),ym(h.children,i,I,y,p)),!(h.path==null&&!h.index)&&i.push({path:y,score:Rp(y,h.index),routesMeta:I})};return a.forEach((h,A)=>{var p;if(h.path===""||!((p=h.path)!=null&&p.includes("?")))m(h,A);else for(let g of Nm(h.path))m(h,A,!0,g)}),i}function Nm(a){let i=a.split("/");if(i.length===0)return[];let[o,...c]=i,d=o.endsWith("?"),m=o.replace(/\?$/,"");if(c.length===0)return d?[m,""]:[m];let h=Nm(c.join("/")),A=[];return A.push(...h.map(p=>p===""?m:[m,p].join("/"))),d&&A.push(...h),A.map(p=>a.startsWith("/")&&p===""?"/":p)}function pp(a){a.sort((i,o)=>i.score!==o.score?o.score-i.score:Tp(i.routesMeta.map(c=>c.childrenIndex),o.routesMeta.map(c=>c.childrenIndex)))}var Ap=/^:[\w-]+$/,gp=3,xp=2,yp=1,Np=10,vp=-2,bd=a=>a==="*";function Rp(a,i){let o=a.split("/"),c=o.length;return o.some(bd)&&(c+=vp),i&&(c+=xp),o.filter(d=>!bd(d)).reduce((d,m)=>d+(Ap.test(m)?gp:m===""?yp:Np),c)}function Tp(a,i){return a.length===i.length&&a.slice(0,-1).every((c,d)=>c===i[d])?a[a.length-1]-i[i.length-1]:0}function Mp(a,i,o=!1){let{routesMeta:c}=a,d={},m="/",h=[];for(let A=0;A<c.length;++A){let p=c[A],g=A===c.length-1,v=m==="/"?i:i.slice(m.length)||"/",y=Si({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),I=p.route;if(!y&&g&&o&&!c[c.length-1].route.index&&(y=Si({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!y)return null;Object.assign(d,y.params),h.push({params:d,pathname:cr([m,y.pathname]),pathnameBase:Sp(cr([m,y.pathnameBase])),route:I}),y.pathnameBase!=="/"&&(m=cr([m,y.pathnameBase]))}return h}function Si(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[o,c]=Pp(a.path,a.caseSensitive,a.end),d=i.match(o);if(!d)return null;let m=d[0],h=m.replace(/(.)\/+$/,"$1"),A=d.slice(1);return{params:c.reduce((g,{paramName:v,isOptional:y},I)=>{if(v==="*"){let H=A[I]||"";h=m.slice(0,m.length-H.length).replace(/(.)\/+$/,"$1")}const S=A[I];return y&&!S?g[v]=void 0:g[v]=(S||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:h,pattern:a}}function Pp(a,i=!1,o=!0){rt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let c=[],d="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,A,p)=>(c.push({paramName:A,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(c.push({paramName:"*"}),d+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?d+="\\/*$":a!==""&&a!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,i?void 0:"i"),c]}function Ep(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return rt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function zt(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,c=a.charAt(o);return c&&c!=="/"?null:a.slice(o)||"/"}function Ip({basename:a,pathname:i}){return i==="/"?a:cr([a,i])}var vm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Do=a=>vm.test(a);function wp(a,i="/"){let{pathname:o,search:c="",hash:d=""}=typeof a=="string"?ra(a):a,m;return o?(o=o.replace(/\/\/+/g,"/"),o.startsWith("/")?m=Cd(o.substring(1),"/"):m=Cd(o,i)):m=i,{pathname:m,search:Lp(c),hash:kp(d)}}function Cd(a,i){let o=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(d=>{d===".."?o.length>1&&o.pop():d!=="."&&o.push(d)}),o.length>1?o.join("/"):"/"}function To(a,i,o,c){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Rm(a){return a.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function Ho(a){let i=Rm(a);return i.map((o,c)=>c===i.length-1?o.pathname:o.pathnameBase)}function Go(a,i,o,c=!1){let d;typeof a=="string"?d=ra(a):(d={...a},Ee(!d.pathname||!d.pathname.includes("?"),To("?","pathname","search",d)),Ee(!d.pathname||!d.pathname.includes("#"),To("#","pathname","hash",d)),Ee(!d.search||!d.search.includes("#"),To("#","search","hash",d)));let m=a===""||d.pathname==="",h=m?"/":d.pathname,A;if(h==null)A=o;else{let y=i.length-1;if(!c&&h.startsWith("..")){let I=h.split("/");for(;I[0]==="..";)I.shift(),y-=1;d.pathname=I.join("/")}A=y>=0?i[y]:"/"}let p=wp(d,A),g=h&&h!=="/"&&h.endsWith("/"),v=(m||h===".")&&o.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}var cr=a=>a.join("/").replace(/\/\/+/g,"/"),Sp=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Lp=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,kp=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,sl=class{constructor(a,i,o,c=!1){this.status=a,this.statusText=i||"",this.internal=c,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function ll(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function ol(a){return a.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Tm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Mm(a,i){let o=a;if(typeof o!="string"||!vm.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let c=o,d=!1;if(Tm)try{let m=new URL(window.location.href),h=o.startsWith("//")?new URL(m.protocol+o):new URL(o),A=zt(h.pathname,i);h.origin===m.origin&&A!=null?o=A+h.search+h.hash:d=!0}catch{rt(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:d,to:o}}var ta=Symbol("Uninstrumented");function Up(a,i){let o={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};a.forEach(d=>d({id:i.id,index:i.index,path:i.path,instrument(m){let h=Object.keys(o);for(let A of h)m[A]&&o[A].push(m[A])}}));let c={};if(typeof i.lazy=="function"&&o.lazy.length>0){let d=an(o.lazy,i.lazy,()=>{});d&&(c.lazy=d)}if(typeof i.lazy=="object"){let d=i.lazy;["middleware","loader","action"].forEach(m=>{let h=d[m],A=o[`lazy.${m}`];if(typeof h=="function"&&A.length>0){let p=an(A,h,()=>{});p&&(c.lazy=Object.assign(c.lazy||{},{[m]:p}))}})}return["loader","action"].forEach(d=>{let m=i[d];if(typeof m=="function"&&o[d].length>0){let h=m[ta]??m,A=an(o[d],h,(...p)=>Od(p[0]));A&&(d==="loader"&&h.hydrate===!0&&(A.hydrate=!0),A[ta]=h,c[d]=A)}}),i.middleware&&i.middleware.length>0&&o.middleware.length>0&&(c.middleware=i.middleware.map(d=>{let m=d[ta]??d,h=an(o.middleware,m,(...A)=>Od(A[0]));return h?(h[ta]=m,h):d})),c}function jp(a,i){let o={navigate:[],fetch:[]};if(i.forEach(c=>c({instrument(d){let m=Object.keys(d);for(let h of m)d[h]&&o[h].push(d[h])}})),o.navigate.length>0){let c=a.navigate[ta]??a.navigate,d=an(o.navigate,c,(...m)=>{let[h,A]=m;return{to:typeof h=="number"||typeof h=="string"?h:h?dr(h):".",...Kd(a,A??{})}});d&&(d[ta]=c,a.navigate=d)}if(o.fetch.length>0){let c=a.fetch[ta]??a.fetch,d=an(o.fetch,c,(...m)=>{let[h,,A,p]=m;return{href:A??".",fetcherKey:h,...Kd(a,p??{})}});d&&(d[ta]=c,a.fetch=d)}return a}function an(a,i,o){return a.length===0?null:async(...c)=>{let d=await Pm(a,o(...c),()=>i(...c),a.length-1);if(d.type==="error")throw d.value;return d.value}}async function Pm(a,i,o,c){let d=a[c],m;if(d){let h,A=async()=>(h?console.error("You cannot call instrumented handlers more than once"):h=Pm(a,i,o,c-1),m=await h,Ee(m,"Expected a result"),m.type==="error"&&m.value instanceof Error?{status:"error",error:m.value}:{status:"success",error:void 0});try{await d(A,i)}catch(p){console.error("An instrumentation function threw an error:",p)}h||await A(),await h}else try{m={type:"success",value:await o()}}catch(h){m={type:"error",value:h}}return m||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function Od(a){let{request:i,context:o,params:c,unstable_pattern:d}=a;return{request:bp(i),params:{...c},unstable_pattern:d,context:Cp(o)}}function Kd(a,i){return{currentUrl:dr(a.state.location),..."formMethod"in i?{formMethod:i.formMethod}:{},..."formEncType"in i?{formEncType:i.formEncType}:{},..."formData"in i?{formData:i.formData}:{},..."body"in i?{body:i.body}:{}}}function bp(a){return{method:a.method,url:a.url,headers:{get:(...i)=>a.headers.get(...i)}}}function Cp(a){if(Kp(a)){let i={...a};return Object.freeze(i),i}else return{get:i=>a.get(i)}}var Op=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Kp(a){if(a===null||typeof a!="object")return!1;const i=Object.getPrototypeOf(a);return i===Object.prototype||i===null||Object.getOwnPropertyNames(i).sort().join("\0")===Op}var Em=["POST","PUT","PATCH","DELETE"],Dp=new Set(Em),Hp=["GET",...Em],Gp=new Set(Hp),Im=new Set([301,302,303,307,308]),Vp=new Set([307,308]),Mo={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},_p={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},qn={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Yp=a=>({hasErrorBoundary:!!a.hasErrorBoundary}),wm="remix-router-transitions",Sm=Symbol("ResetLoaderData");function Fp(a){const i=a.window?a.window:typeof window<"u"?window:void 0,o=typeof i<"u"&&typeof i.document<"u"&&typeof i.document.createElement<"u";Ee(a.routes.length>0,"You must provide a non-empty routes array to createRouter");let c=a.hydrationRouteProperties||[],d=a.mapRouteProperties||Yp,m=d;if(a.unstable_instrumentations){let N=a.unstable_instrumentations;m=E=>({...d(E),...Up(N.map(k=>k.route).filter(Boolean),E)})}let h={},A=nl(a.routes,m,void 0,h),p,g=a.basename||"/";g.startsWith("/")||(g=`/${g}`);let v=a.dataStrategy||Jp,y={...a.future},I=null,S=new Set,H=null,O=null,D=null,b=a.hydrationData!=null,K=Xr(A,a.history.location,g),G=!1,ae=null,oe;if(K==null&&!a.patchRoutesOnNavigation){let N=Bt(404,{pathname:a.history.location.pathname}),{matches:E,route:k}=Ri(A);oe=!0,K=E,ae={[k.id]:N}}else if(K&&!a.hydrationData&&ia(K,A,a.history.location.pathname).active&&(K=null),K)if(K.some(N=>N.route.lazy))oe=!1;else if(!K.some(N=>Vo(N.route)))oe=!0;else{let N=a.hydrationData?a.hydrationData.loaderData:null,E=a.hydrationData?a.hydrationData.errors:null;if(E){let k=K.findIndex(_=>E[_.route.id]!==void 0);oe=K.slice(0,k+1).every(_=>!Lo(_.route,N,E))}else oe=K.every(k=>!Lo(k.route,N,E))}else{oe=!1,K=[];let N=ia(null,A,a.history.location.pathname);N.active&&N.matches&&(G=!0,K=N.matches)}let ye,U={historyAction:a.history.action,location:a.history.location,matches:K,initialized:oe,navigation:Mo,restoreScrollPosition:a.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:a.hydrationData&&a.hydrationData.loaderData||{},actionData:a.hydrationData&&a.hydrationData.actionData||null,errors:a.hydrationData&&a.hydrationData.errors||ae,fetchers:new Map,blockers:new Map},ie="POP",pe=null,Me=!1,Le,Ke=!1,Ye=new Map,je=null,ze=!1,Te=!1,Ne=new Set,F=new Map,Z=0,W=-1,P=new Map,C=new Set,me=new Map,he=new Map,fe=new Set,ve=new Map,be,Ie=null;function Ve(){if(I=a.history.listen(({action:N,location:E,delta:k})=>{if(be){be(),be=void 0;return}rt(ve.size===0||k!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let _=hr({currentLocation:U.location,nextLocation:E,historyAction:N});if(_&&k!=null){let $=new Promise(ne=>{be=ne});a.history.go(k*-1),Lr(_,{state:"blocked",location:E,proceed(){Lr(_,{state:"proceeding",proceed:void 0,reset:void 0,location:E}),$.then(()=>a.history.go(k))},reset(){let ne=new Map(U.blockers);ne.set(_,qn),at({blockers:ne})}}),pe==null||pe.resolve(),pe=null;return}return tr(N,E)}),o){fA(i,Ye);let N=()=>hA(i,Ye);i.addEventListener("pagehide",N),je=()=>i.removeEventListener("pagehide",N)}return U.initialized||tr("POP",U.location,{initialHydration:!0}),ye}function gt(){I&&I(),je&&je(),S.clear(),Le&&Le.abort(),U.fetchers.forEach((N,E)=>dn(E)),U.blockers.forEach((N,E)=>ka(E))}function Ea(N){return S.add(N),()=>S.delete(N)}function at(N,E={}){N.matches&&(N.matches=N.matches.map($=>{let ne=h[$.route.id],ue=$.route;return ue.element!==ne.element||ue.errorElement!==ne.errorElement||ue.hydrateFallbackElement!==ne.hydrateFallbackElement?{...$,route:ne}:$})),U={...U,...N};let k=[],_=[];U.fetchers.forEach(($,ne)=>{$.state==="idle"&&(fe.has(ne)?k.push(ne):_.push(ne))}),fe.forEach($=>{!U.fetchers.has($)&&!F.has($)&&k.push($)}),[...S].forEach($=>$(U,{deletedFetchers:k,newErrors:N.errors??null,viewTransitionOpts:E.viewTransitionOpts,flushSync:E.flushSync===!0})),k.forEach($=>dn($)),_.forEach($=>U.fetchers.delete($))}function Wt(N,E,{flushSync:k}={}){var xe,se;let _=U.actionData!=null&&U.navigation.formMethod!=null&&At(U.navigation.formMethod)&&U.navigation.state==="loading"&&((xe=N.state)==null?void 0:xe._isRedirect)!==!0,$;E.actionData?Object.keys(E.actionData).length>0?$=E.actionData:$=null:_?$=U.actionData:$=null;let ne=E.loaderData?$d(U.loaderData,E.loaderData,E.matches||[],E.errors):U.loaderData,ue=U.blockers;ue.size>0&&(ue=new Map(ue),ue.forEach((Re,we)=>ue.set(we,qn)));let q=ze?!1:hn(N,E.matches||U.matches),X=Me===!0||U.navigation.formMethod!=null&&At(U.navigation.formMethod)&&((se=N.state)==null?void 0:se._isRedirect)!==!0;p&&(A=p,p=void 0),ze||ie==="POP"||(ie==="PUSH"?a.history.push(N,N.state):ie==="REPLACE"&&a.history.replace(N,N.state));let te;if(ie==="POP"){let Re=Ye.get(U.location.pathname);Re&&Re.has(N.pathname)?te={currentLocation:U.location,nextLocation:N}:Ye.has(N.pathname)&&(te={currentLocation:N,nextLocation:U.location})}else if(Ke){let Re=Ye.get(U.location.pathname);Re?Re.add(N.pathname):(Re=new Set([N.pathname]),Ye.set(U.location.pathname,Re)),te={currentLocation:U.location,nextLocation:N}}at({...E,actionData:$,loaderData:ne,historyAction:ie,location:N,initialized:!0,navigation:Mo,revalidation:"idle",restoreScrollPosition:q,preventScrollReset:X,blockers:ue},{viewTransitionOpts:te,flushSync:k===!0}),ie="POP",Me=!1,Ke=!1,ze=!1,Te=!1,pe==null||pe.resolve(),pe=null,Ie==null||Ie.resolve(),Ie=null}async function Ia(N,E){if(pe==null||pe.resolve(),pe=null,typeof N=="number"){pe||(pe=Qd());let we=pe.promise;return a.history.go(N),we}let k=So(U.location,U.matches,g,N,E==null?void 0:E.fromRouteId,E==null?void 0:E.relative),{path:_,submission:$,error:ne}=Dd(!1,k,E),ue=U.location,q=al(U.location,_,E&&E.state);q={...q,...a.history.encodeLocation(q)};let X=E&&E.replace!=null?E.replace:void 0,te="PUSH";X===!0?te="REPLACE":X===!1||$!=null&&At($.formMethod)&&$.formAction===U.location.pathname+U.location.search&&(te="REPLACE");let xe=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,se=(E&&E.flushSync)===!0,Re=hr({currentLocation:ue,nextLocation:q,historyAction:te});if(Re){Lr(Re,{state:"blocked",location:q,proceed(){Lr(Re,{state:"proceeding",proceed:void 0,reset:void 0,location:q}),Ia(N,E)},reset(){let we=new Map(U.blockers);we.set(Re,qn),at({blockers:we})}});return}await tr(te,q,{submission:$,pendingError:ne,preventScrollReset:xe,replace:E&&E.replace,enableViewTransition:E&&E.viewTransition,flushSync:se,callSiteDefaultShouldRevalidate:E&&E.unstable_defaultShouldRevalidate})}function fl(){Ie||(Ie=Qd()),na(),at({revalidation:"loading"});let N=Ie.promise;return U.navigation.state==="submitting"?N:U.navigation.state==="idle"?(tr(U.historyAction,U.location,{startUninterruptedRevalidation:!0}),N):(tr(ie||U.historyAction,U.navigation.location,{overrideNavigation:U.navigation,enableViewTransition:Ke===!0}),N)}async function tr(N,E,k){Le&&Le.abort(),Le=null,ie=N,ze=(k&&k.startUninterruptedRevalidation)===!0,yl(U.location,U.matches),Me=(k&&k.preventScrollReset)===!0,Ke=(k&&k.enableViewTransition)===!0;let _=p||A,$=k&&k.overrideNavigation,ne=k!=null&&k.initialHydration&&U.matches&&U.matches.length>0&&!G?U.matches:Xr(_,E,g),ue=(k&&k.flushSync)===!0;if(ne&&U.initialized&&!Te&&aA(U.location,E)&&!(k&&k.submission&&At(k.submission.formMethod))){Wt(E,{matches:ne},{flushSync:ue});return}let q=ia(ne,_,E.pathname);if(q.active&&q.matches&&(ne=q.matches),!ne){let{error:Ze,notFoundMatches:it,route:Ce}=ar(E.pathname);Wt(E,{matches:it,loaderData:{},errors:{[Ce.id]:Ze}},{flushSync:ue});return}Le=new AbortController;let X=rn(a.history,E,Le.signal,k&&k.submission),te=a.getContext?await a.getContext():new Ud,xe;if(k&&k.pendingError)xe=[ea(ne).route.id,{type:"error",error:k.pendingError}];else if(k&&k.submission&&At(k.submission.formMethod)){let Ze=await on(X,E,k.submission,ne,te,q.active,k&&k.initialHydration===!0,{replace:k.replace,flushSync:ue});if(Ze.shortCircuited)return;if(Ze.pendingActionResult){let[it,Ce]=Ze.pendingActionResult;if(bt(Ce)&&ll(Ce.error)&&Ce.error.status===404){Le=null,Wt(E,{matches:Ze.matches,loaderData:{},errors:{[it]:Ce.error}});return}}ne=Ze.matches||ne,xe=Ze.pendingActionResult,$=Po(E,k.submission),ue=!1,q.active=!1,X=rn(a.history,X.url,X.signal)}let{shortCircuited:se,matches:Re,loaderData:we,errors:et}=await hl(X,E,ne,te,q.active,$,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,k&&k.initialHydration===!0,ue,xe,k&&k.callSiteDefaultShouldRevalidate);se||(Le=null,Wt(E,{matches:Re||ne,...Wd(xe),loaderData:we,errors:et}))}async function on(N,E,k,_,$,ne,ue,q={}){na();let X=dA(E,k);if(at({navigation:X},{flushSync:q.flushSync===!0}),ne){let se=await kr(_,E.pathname,N.signal);if(se.type==="aborted")return{shortCircuited:!0};if(se.type==="error"){if(se.partialMatches.length===0){let{matches:we,route:et}=Ri(A);return{matches:we,pendingActionResult:[et.id,{type:"error",error:se.error}]}}let Re=ea(se.partialMatches).route.id;return{matches:se.partialMatches,pendingActionResult:[Re,{type:"error",error:se.error}]}}else if(se.matches)_=se.matches;else{let{notFoundMatches:Re,error:we,route:et}=ar(E.pathname);return{matches:Re,pendingActionResult:[et.id,{type:"error",error:we}]}}}let te,xe=Ei(_,E);if(!xe.route.action&&!xe.route.lazy)te={type:"error",error:Bt(405,{method:N.method,pathname:E.pathname,routeId:xe.route.id})};else{let se=nn(m,h,N,_,xe,ue?[]:c,$),Re=await wr(N,se,$,null);if(te=Re[xe.route.id],!te){for(let we of _)if(Re[we.route.id]){te=Re[we.route.id];break}}if(N.signal.aborted)return{shortCircuited:!0}}if(Ma(te)){let se;return q&&q.replace!=null?se=q.replace:se=Fd(te.response.headers.get("Location"),new URL(N.url),g,a.history)===U.location.pathname+U.location.search,await rr(N,te,!0,{submission:k,replace:se}),{shortCircuited:!0}}if(bt(te)){let se=ea(_,xe.route.id);return(q&&q.replace)!==!0&&(ie="PUSH"),{matches:_,pendingActionResult:[se.route.id,te,xe.route.id]}}return{matches:_,pendingActionResult:[xe.route.id,te]}}async function hl(N,E,k,_,$,ne,ue,q,X,te,xe,se,Re){let we=ne||Po(E,ue),et=ue||q||qd(we),Ze=!ze&&!te;if($){if(Ze){let Ge=wa(se);at({navigation:we,...Ge!==void 0?{actionData:Ge}:{}},{flushSync:xe})}let Se=await kr(k,E.pathname,N.signal);if(Se.type==="aborted")return{shortCircuited:!0};if(Se.type==="error"){if(Se.partialMatches.length===0){let{matches:jr,route:Ar}=Ri(A);return{matches:jr,loaderData:{},errors:{[Ar.id]:Se.error}}}let Ge=ea(Se.partialMatches).route.id;return{matches:Se.partialMatches,loaderData:{},errors:{[Ge]:Se.error}}}else if(Se.matches)k=Se.matches;else{let{error:Ge,notFoundMatches:jr,route:Ar}=ar(E.pathname);return{matches:jr,loaderData:{},errors:{[Ar.id]:Ge}}}}let it=p||A,{dsMatches:Ce,revalidatingFetchers:Rt}=Hd(N,_,m,h,a.history,U,k,et,E,te?[]:c,te===!0,Te,Ne,fe,me,C,it,g,a.patchRoutesOnNavigation!=null,se,Re);if(W=++Z,!a.dataStrategy&&!Ce.some(Se=>Se.shouldLoad)&&!Ce.some(Se=>Se.route.middleware&&Se.route.middleware.length>0)&&Rt.length===0){let Se=Sa();return Wt(E,{matches:k,loaderData:{},errors:se&&bt(se[1])?{[se[0]]:se[1].error}:null,...Wd(se),...Se?{fetchers:new Map(U.fetchers)}:{}},{flushSync:xe}),{shortCircuited:!0}}if(Ze){let Se={};if(!$){Se.navigation=we;let Ge=wa(se);Ge!==void 0&&(Se.actionData=Ge)}Rt.length>0&&(Se.fetchers=aa(Rt)),at(Se,{flushSync:xe})}Rt.forEach(Se=>{Kt(Se.key),Se.controller&&F.set(Se.key,Se.controller)});let De=()=>Rt.forEach(Se=>Kt(Se.key));Le&&Le.signal.addEventListener("abort",De);let{loaderResults:oa,fetcherResults:Dt}=await cn(Ce,Rt,N,_);if(N.signal.aborted)return{shortCircuited:!0};Le&&Le.signal.removeEventListener("abort",De),Rt.forEach(Se=>F.delete(Se.key));let St=Ti(oa);if(St)return await rr(N,St.result,!0,{replace:X}),{shortCircuited:!0};if(St=Ti(Dt),St)return C.add(St.key),await rr(N,St.result,!0,{replace:X}),{shortCircuited:!0};let{loaderData:Ur,errors:ua}=zd(U,k,oa,se,Rt,Dt);te&&U.errors&&(ua={...U.errors,...ua});let nr=Sa(),pr=La(W),xt=nr||pr||Rt.length>0;return{matches:k,loaderData:Ur,errors:ua,...xt?{fetchers:new Map(U.fetchers)}:{}}}function wa(N){if(N&&!bt(N[1]))return{[N[0]]:N[1].data};if(U.actionData)return Object.keys(U.actionData).length===0?null:U.actionData}function aa(N){return N.forEach(E=>{let k=U.fetchers.get(E.key),_=Qn(void 0,k?k.data:void 0);U.fetchers.set(E.key,_)}),new Map(U.fetchers)}async function Ir(N,E,k,_){Kt(N);let $=(_&&_.flushSync)===!0,ne=p||A,ue=So(U.location,U.matches,g,k,E,_==null?void 0:_.relative),q=Xr(ne,ue,g),X=ia(q,ne,ue);if(X.active&&X.matches&&(q=X.matches),!q){Ot(N,E,Bt(404,{pathname:ue}),{flushSync:$});return}let{path:te,submission:xe,error:se}=Dd(!0,ue,_);if(se){Ot(N,E,se,{flushSync:$});return}let Re=a.getContext?await a.getContext():new Ud,we=(_&&_.preventScrollReset)===!0;if(xe&&At(xe.formMethod)){await un(N,E,te,q,Re,X.active,$,we,xe,_&&_.unstable_defaultShouldRevalidate);return}me.set(N,{routeId:E,path:te}),await pl(N,E,te,q,Re,X.active,$,we,xe)}async function un(N,E,k,_,$,ne,ue,q,X,te){na(),me.delete(N);let xe=U.fetchers.get(N);vt(N,mA(X,xe),{flushSync:ue});let se=new AbortController,Re=rn(a.history,k,se.signal,X);if(ne){let $e=await kr(_,new URL(Re.url).pathname,Re.signal,N);if($e.type==="aborted")return;if($e.type==="error"){Ot(N,E,$e.error,{flushSync:ue});return}else if($e.matches)_=$e.matches;else{Ot(N,E,Bt(404,{pathname:k}),{flushSync:ue});return}}let we=Ei(_,k);if(!we.route.action&&!we.route.lazy){let $e=Bt(405,{method:X.formMethod,pathname:k,routeId:E});Ot(N,E,$e,{flushSync:ue});return}F.set(N,se);let et=Z,Ze=nn(m,h,Re,_,we,c,$),it=await wr(Re,Ze,$,N),Ce=it[we.route.id];if(!Ce){for(let $e of Ze)if(it[$e.route.id]){Ce=it[$e.route.id];break}}if(Re.signal.aborted){F.get(N)===se&&F.delete(N);return}if(fe.has(N)){if(Ma(Ce)||bt(Ce)){vt(N,Er(void 0));return}}else{if(Ma(Ce))if(F.delete(N),W>et){vt(N,Er(void 0));return}else return C.add(N),vt(N,Qn(X)),rr(Re,Ce,!1,{fetcherSubmission:X,preventScrollReset:q});if(bt(Ce)){Ot(N,E,Ce.error);return}}let Rt=U.navigation.location||U.location,De=rn(a.history,Rt,se.signal),oa=p||A,Dt=U.navigation.state!=="idle"?Xr(oa,U.navigation.location,g):U.matches;Ee(Dt,"Didn't find any matches after fetcher action");let St=++Z;P.set(N,St);let Ur=Qn(X,Ce.data);U.fetchers.set(N,Ur);let{dsMatches:ua,revalidatingFetchers:nr}=Hd(De,$,m,h,a.history,U,Dt,X,Rt,c,!1,Te,Ne,fe,me,C,oa,g,a.patchRoutesOnNavigation!=null,[we.route.id,Ce],te);nr.filter($e=>$e.key!==N).forEach($e=>{let gr=$e.key,ca=U.fetchers.get(gr),da=Qn(void 0,ca?ca.data:void 0);U.fetchers.set(gr,da),Kt(gr),$e.controller&&F.set(gr,$e.controller)}),at({fetchers:new Map(U.fetchers)});let pr=()=>nr.forEach($e=>Kt($e.key));se.signal.addEventListener("abort",pr);let{loaderResults:xt,fetcherResults:Se}=await cn(ua,nr,De,$);if(se.signal.aborted)return;if(se.signal.removeEventListener("abort",pr),P.delete(N),F.delete(N),nr.forEach($e=>F.delete($e.key)),U.fetchers.has(N)){let $e=Er(Ce.data);U.fetchers.set(N,$e)}let Ge=Ti(xt);if(Ge)return rr(De,Ge.result,!1,{preventScrollReset:q});if(Ge=Ti(Se),Ge)return C.add(Ge.key),rr(De,Ge.result,!1,{preventScrollReset:q});let{loaderData:jr,errors:Ar}=zd(U,Dt,xt,void 0,nr,Se);La(St),U.navigation.state==="loading"&&St>W?(Ee(ie,"Expected pending action"),Le&&Le.abort(),Wt(U.navigation.location,{matches:Dt,loaderData:jr,errors:Ar,fetchers:new Map(U.fetchers)})):(at({errors:Ar,loaderData:$d(U.loaderData,jr,Dt,Ar),fetchers:new Map(U.fetchers)}),Te=!1)}async function pl(N,E,k,_,$,ne,ue,q,X){let te=U.fetchers.get(N);vt(N,Qn(X,te?te.data:void 0),{flushSync:ue});let xe=new AbortController,se=rn(a.history,k,xe.signal);if(ne){let Ce=await kr(_,new URL(se.url).pathname,se.signal,N);if(Ce.type==="aborted")return;if(Ce.type==="error"){Ot(N,E,Ce.error,{flushSync:ue});return}else if(Ce.matches)_=Ce.matches;else{Ot(N,E,Bt(404,{pathname:k}),{flushSync:ue});return}}let Re=Ei(_,k);F.set(N,xe);let we=Z,et=nn(m,h,se,_,Re,c,$),it=(await wr(se,et,$,N))[Re.route.id];if(F.get(N)===xe&&F.delete(N),!se.signal.aborted){if(fe.has(N)){vt(N,Er(void 0));return}if(Ma(it))if(W>we){vt(N,Er(void 0));return}else{C.add(N),await rr(se,it,!1,{preventScrollReset:q});return}if(bt(it)){Ot(N,E,it.error);return}vt(N,Er(it.data))}}async function rr(N,E,k,{submission:_,fetcherSubmission:$,preventScrollReset:ne,replace:ue}={}){k||(pe==null||pe.resolve(),pe=null),E.response.headers.has("X-Remix-Revalidate")&&(Te=!0);let q=E.response.headers.get("Location");Ee(q,"Expected a Location header on the redirect Response"),q=Fd(q,new URL(N.url),g,a.history);let X=al(U.location,q,{_isRedirect:!0});if(o){let et=!1;if(E.response.headers.has("X-Remix-Reload-Document"))et=!0;else if(Do(q)){const Ze=xm(q,!0);et=Ze.origin!==i.location.origin||zt(Ze.pathname,g)==null}if(et){ue?i.location.replace(q):i.location.assign(q);return}}Le=null;let te=ue===!0||E.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:xe,formAction:se,formEncType:Re}=U.navigation;!_&&!$&&xe&&se&&Re&&(_=qd(U.navigation));let we=_||$;if(Vp.has(E.response.status)&&we&&At(we.formMethod))await tr(te,X,{submission:{...we,formAction:q},preventScrollReset:ne||Me,enableViewTransition:k?Ke:void 0});else{let et=Po(X,_);await tr(te,X,{overrideNavigation:et,fetcherSubmission:$,preventScrollReset:ne||Me,enableViewTransition:k?Ke:void 0})}}async function wr(N,E,k,_){var ue;let $,ne={};try{$=await Qp(v,N,E,_,k,!1)}catch(q){return E.filter(X=>X.shouldLoad).forEach(X=>{ne[X.route.id]={type:"error",error:q}}),ne}if(N.signal.aborted)return ne;if(!At(N.method))for(let q of E){if(((ue=$[q.route.id])==null?void 0:ue.type)==="error")break;!$.hasOwnProperty(q.route.id)&&!U.loaderData.hasOwnProperty(q.route.id)&&(!U.errors||!U.errors.hasOwnProperty(q.route.id))&&q.shouldCallHandler()&&($[q.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${q.route.id}`)})}for(let[q,X]of Object.entries($))if(sA(X)){let te=X.result;ne[q]={type:"redirect",response:tA(te,N,q,E,g)}}else ne[q]=await eA(X);return ne}async function cn(N,E,k,_){let $=wr(k,N,_,null),ne=Promise.all(E.map(async X=>{if(X.matches&&X.match&&X.request&&X.controller){let xe=(await wr(X.request,X.matches,_,X.key))[X.match.route.id];return{[X.key]:xe}}else return Promise.resolve({[X.key]:{type:"error",error:Bt(404,{pathname:X.path})}})})),ue=await $,q=(await ne).reduce((X,te)=>Object.assign(X,te),{});return{loaderResults:ue,fetcherResults:q}}function na(){Te=!0,me.forEach((N,E)=>{F.has(E)&&Ne.add(E),Kt(E)})}function vt(N,E,k={}){U.fetchers.set(N,E),at({fetchers:new Map(U.fetchers)},{flushSync:(k&&k.flushSync)===!0})}function Ot(N,E,k,_={}){let $=ea(U.matches,E);dn(N),at({errors:{[$.route.id]:k},fetchers:new Map(U.fetchers)},{flushSync:(_&&_.flushSync)===!0})}function Sr(N){return he.set(N,(he.get(N)||0)+1),fe.has(N)&&fe.delete(N),U.fetchers.get(N)||_p}function la(N,E){Kt(N,E==null?void 0:E.reason),vt(N,Er(null))}function dn(N){let E=U.fetchers.get(N);F.has(N)&&!(E&&E.state==="loading"&&P.has(N))&&Kt(N),me.delete(N),P.delete(N),C.delete(N),fe.delete(N),Ne.delete(N),U.fetchers.delete(N)}function Al(N){let E=(he.get(N)||0)-1;E<=0?(he.delete(N),fe.add(N)):he.set(N,E),at({fetchers:new Map(U.fetchers)})}function Kt(N,E){let k=F.get(N);k&&(k.abort(E),F.delete(N))}function gl(N){for(let E of N){let k=Sr(E),_=Er(k.data);U.fetchers.set(E,_)}}function Sa(){let N=[],E=!1;for(let k of C){let _=U.fetchers.get(k);Ee(_,`Expected fetcher: ${k}`),_.state==="loading"&&(C.delete(k),N.push(k),E=!0)}return gl(N),E}function La(N){let E=[];for(let[k,_]of P)if(_<N){let $=U.fetchers.get(k);Ee($,`Expected fetcher: ${k}`),$.state==="loading"&&(Kt(k),P.delete(k),E.push(k))}return gl(E),E.length>0}function mn(N,E){let k=U.blockers.get(N)||qn;return ve.get(N)!==E&&ve.set(N,E),k}function ka(N){U.blockers.delete(N),ve.delete(N)}function Lr(N,E){let k=U.blockers.get(N)||qn;Ee(k.state==="unblocked"&&E.state==="blocked"||k.state==="blocked"&&E.state==="blocked"||k.state==="blocked"&&E.state==="proceeding"||k.state==="blocked"&&E.state==="unblocked"||k.state==="proceeding"&&E.state==="unblocked",`Invalid blocker state transition: ${k.state} -> ${E.state}`);let _=new Map(U.blockers);_.set(N,E),at({blockers:_})}function hr({currentLocation:N,nextLocation:E,historyAction:k}){if(ve.size===0)return;ve.size>1&&rt(!1,"A router only supports one blocker at a time");let _=Array.from(ve.entries()),[$,ne]=_[_.length-1],ue=U.blockers.get($);if(!(ue&&ue.state==="proceeding")&&ne({currentLocation:N,nextLocation:E,historyAction:k}))return $}function ar(N){let E=Bt(404,{pathname:N}),k=p||A,{matches:_,route:$}=Ri(k);return{notFoundMatches:_,route:$,error:E}}function xl(N,E,k){if(H=N,D=E,O=k||null,!b&&U.navigation===Mo){b=!0;let _=hn(U.location,U.matches);_!=null&&at({restoreScrollPosition:_})}return()=>{H=null,D=null,O=null}}function fn(N,E){return O&&O(N,E.map(_=>hp(_,U.loaderData)))||N.key}function yl(N,E){if(H&&D){let k=fn(N,E);H[k]=D()}}function hn(N,E){if(H){let k=fn(N,E),_=H[k];if(typeof _=="number")return _}return null}function ia(N,E,k){if(a.patchRoutesOnNavigation)if(N){if(Object.keys(N[0].params).length>0)return{active:!0,matches:tl(E,k,g,!0)}}else return{active:!0,matches:tl(E,k,g,!0)||[]};return{active:!1,matches:null}}async function kr(N,E,k,_){if(!a.patchRoutesOnNavigation)return{type:"success",matches:N};let $=N;for(;;){let ne=p==null,ue=p||A,q=h;try{await a.patchRoutesOnNavigation({signal:k,path:E,matches:$,fetcherKey:_,patch:(xe,se)=>{k.aborted||Gd(xe,se,ue,q,m,!1)}})}catch(xe){return{type:"error",error:xe,partialMatches:$}}finally{ne&&!k.aborted&&(A=[...A])}if(k.aborted)return{type:"aborted"};let X=Xr(ue,E,g),te=null;if(X){if(Object.keys(X[0].params).length===0)return{type:"success",matches:X};if(te=tl(ue,E,g,!0),!(te&&$.length<te.length&&pn($,te.slice(0,$.length))))return{type:"success",matches:X}}if(te||(te=tl(ue,E,g,!0)),!te||pn($,te))return{type:"success",matches:null};$=te}}function pn(N,E){return N.length===E.length&&N.every((k,_)=>k.route.id===E[_].route.id)}function sa(N){h={},p=nl(N,m,void 0,h)}function An(N,E,k=!1){let _=p==null;Gd(N,E,p||A,h,m,k),_&&(A=[...A],at({}))}return ye={get basename(){return g},get future(){return y},get state(){return U},get routes(){return A},get window(){return i},initialize:Ve,subscribe:Ea,enableScrollRestoration:xl,navigate:Ia,fetch:Ir,revalidate:fl,createHref:N=>a.history.createHref(N),encodeLocation:N=>a.history.encodeLocation(N),getFetcher:Sr,resetFetcher:la,deleteFetcher:Al,dispose:gt,getBlocker:mn,deleteBlocker:ka,patchRoutes:An,_internalFetchControllers:F,_internalSetRoutes:sa,_internalSetStateDoNotUseOrYouWillBreakYourApp(N){at(N)}},a.unstable_instrumentations&&(ye=jp(ye,a.unstable_instrumentations.map(N=>N.router).filter(Boolean))),ye}function Bp(a){return a!=null&&("formData"in a&&a.formData!=null||"body"in a&&a.body!==void 0)}function So(a,i,o,c,d,m){let h,A;if(d){h=[];for(let g of i)if(h.push(g),g.route.id===d){A=g;break}}else h=i,A=i[i.length-1];let p=Go(c||".",Ho(h),zt(a.pathname,o)||a.pathname,m==="path");if(c==null&&(p.search=a.search,p.hash=a.hash),(c==null||c===""||c===".")&&A){let g=Yo(p.search);if(A.route.index&&!g)p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index";else if(!A.route.index&&g){let v=new URLSearchParams(p.search),y=v.getAll("index");v.delete("index"),y.filter(S=>S).forEach(S=>v.append("index",S));let I=v.toString();p.search=I?`?${I}`:""}}return o!=="/"&&(p.pathname=Ip({basename:o,pathname:p.pathname})),dr(p)}function Dd(a,i,o){if(!o||!Bp(o))return{path:i};if(o.formMethod&&!cA(o.formMethod))return{path:i,error:Bt(405,{method:o.formMethod})};let c=()=>({path:i,error:Bt(400,{type:"invalid-body"})}),m=(o.formMethod||"get").toUpperCase(),h=Cm(i);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!At(m))return c();let y=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((I,[S,H])=>`${I}${S}=${H}
`,""):String(o.body);return{path:i,submission:{formMethod:m,formAction:h,formEncType:o.formEncType,formData:void 0,json:void 0,text:y}}}else if(o.formEncType==="application/json"){if(!At(m))return c();try{let y=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:i,submission:{formMethod:m,formAction:h,formEncType:o.formEncType,formData:void 0,json:y,text:void 0}}}catch{return c()}}}Ee(typeof FormData=="function","FormData is not available in this environment");let A,p;if(o.formData)A=Uo(o.formData),p=o.formData;else if(o.body instanceof FormData)A=Uo(o.body),p=o.body;else if(o.body instanceof URLSearchParams)A=o.body,p=Bd(A);else if(o.body==null)A=new URLSearchParams,p=new FormData;else try{A=new URLSearchParams(o.body),p=Bd(A)}catch{return c()}let g={formMethod:m,formAction:h,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:p,json:void 0,text:void 0};if(At(g.formMethod))return{path:i,submission:g};let v=ra(i);return a&&v.search&&Yo(v.search)&&A.append("index",""),v.search=`?${A}`,{path:dr(v),submission:g}}function Hd(a,i,o,c,d,m,h,A,p,g,v,y,I,S,H,O,D,b,K,G,ae){var ze;let oe=G?bt(G[1])?G[1].error:G[1].data:void 0,ye=d.createURL(m.location),U=d.createURL(p),ie;if(v&&m.errors){let Te=Object.keys(m.errors)[0];ie=h.findIndex(Ne=>Ne.route.id===Te)}else if(G&&bt(G[1])){let Te=G[0];ie=h.findIndex(Ne=>Ne.route.id===Te)-1}let pe=G?G[1].statusCode:void 0,Me=pe&&pe>=400,Le={currentUrl:ye,currentParams:((ze=m.matches[0])==null?void 0:ze.params)||{},nextUrl:U,nextParams:h[0].params,...A,actionResult:oe,actionStatus:pe},Ke=ol(h),Ye=h.map((Te,Ne)=>{let{route:F}=Te,Z=null;if(ie!=null&&Ne>ie?Z=!1:F.lazy?Z=!0:Vo(F)?v?Z=Lo(F,m.loaderData,m.errors):zp(m.loaderData,m.matches[Ne],Te)&&(Z=!0):Z=!1,Z!==null)return ko(o,c,a,Ke,Te,g,i,Z);let W=!1;typeof ae=="boolean"?W=ae:Me?W=!1:(y||ye.pathname+ye.search===U.pathname+U.search||ye.search!==U.search||$p(m.matches[Ne],Te))&&(W=!0);let P={...Le,defaultShouldRevalidate:W},C=rl(Te,P);return ko(o,c,a,Ke,Te,g,i,C,P,ae)}),je=[];return H.forEach((Te,Ne)=>{if(v||!h.some(fe=>fe.route.id===Te.routeId)||S.has(Ne))return;let F=m.fetchers.get(Ne),Z=F&&F.state!=="idle"&&F.data===void 0,W=Xr(D,Te.path,b);if(!W){if(K&&Z)return;je.push({key:Ne,routeId:Te.routeId,path:Te.path,matches:null,match:null,request:null,controller:null});return}if(O.has(Ne))return;let P=Ei(W,Te.path),C=new AbortController,me=rn(d,Te.path,C.signal),he=null;if(I.has(Ne))I.delete(Ne),he=nn(o,c,me,W,P,g,i);else if(Z)y&&(he=nn(o,c,me,W,P,g,i));else{let fe;typeof ae=="boolean"?fe=ae:Me?fe=!1:fe=y;let ve={...Le,defaultShouldRevalidate:fe};rl(P,ve)&&(he=nn(o,c,me,W,P,g,i,ve))}he&&je.push({key:Ne,routeId:Te.routeId,path:Te.path,matches:he,match:P,request:me,controller:C})}),{dsMatches:Ye,revalidatingFetchers:je}}function Vo(a){return a.loader!=null||a.middleware!=null&&a.middleware.length>0}function Lo(a,i,o){if(a.lazy)return!0;if(!Vo(a))return!1;let c=i!=null&&a.id in i,d=o!=null&&o[a.id]!==void 0;return!c&&d?!1:typeof a.loader=="function"&&a.loader.hydrate===!0?!0:!c&&!d}function zp(a,i,o){let c=!i||o.route.id!==i.route.id,d=!a.hasOwnProperty(o.route.id);return c||d}function $p(a,i){let o=a.route.path;return a.pathname!==i.pathname||o!=null&&o.endsWith("*")&&a.params["*"]!==i.params["*"]}function rl(a,i){if(a.route.shouldRevalidate){let o=a.route.shouldRevalidate(i);if(typeof o=="boolean")return o}return i.defaultShouldRevalidate}function Gd(a,i,o,c,d,m){let h;if(a){let g=c[a];Ee(g,`No route found to patch children into: routeId = ${a}`),g.children||(g.children=[]),h=g.children}else h=o;let A=[],p=[];if(i.forEach(g=>{let v=h.find(y=>Lm(g,y));v?p.push({existingRoute:v,newRoute:g}):A.push(g)}),A.length>0){let g=nl(A,d,[a||"_","patch",String((h==null?void 0:h.length)||"0")],c);h.push(...g)}if(m&&p.length>0)for(let g=0;g<p.length;g++){let{existingRoute:v,newRoute:y}=p[g],I=v,[S]=nl([y],d,[],{},!0);Object.assign(I,{element:S.element?S.element:I.element,errorElement:S.errorElement?S.errorElement:I.errorElement,hydrateFallbackElement:S.hydrateFallbackElement?S.hydrateFallbackElement:I.hydrateFallbackElement})}}function Lm(a,i){return"id"in a&&"id"in i&&a.id===i.id?!0:a.index===i.index&&a.path===i.path&&a.caseSensitive===i.caseSensitive?(!a.children||a.children.length===0)&&(!i.children||i.children.length===0)?!0:a.children.every((o,c)=>{var d;return(d=i.children)==null?void 0:d.some(m=>Lm(o,m))}):!1}var Vd=new WeakMap,km=({key:a,route:i,manifest:o,mapRouteProperties:c})=>{let d=o[i.id];if(Ee(d,"No route found in manifest"),!d.lazy||typeof d.lazy!="object")return;let m=d.lazy[a];if(!m)return;let h=Vd.get(d);h||(h={},Vd.set(d,h));let A=h[a];if(A)return A;let p=(async()=>{let g=cp(a),y=d[a]!==void 0&&a!=="hasErrorBoundary";if(g)rt(!g,"Route property "+a+" is not a supported lazy route property. This property will be ignored."),h[a]=Promise.resolve();else if(y)rt(!1,`Route "${d.id}" has a static property "${a}" defined. The lazy property will be ignored.`);else{let I=await m();I!=null&&(Object.assign(d,{[a]:I}),Object.assign(d,c(d)))}typeof d.lazy=="object"&&(d.lazy[a]=void 0,Object.values(d.lazy).every(I=>I===void 0)&&(d.lazy=void 0))})();return h[a]=p,p},_d=new WeakMap;function Wp(a,i,o,c,d){let m=o[a.id];if(Ee(m,"No route found in manifest"),!a.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof a.lazy=="function"){let v=_d.get(m);if(v)return{lazyRoutePromise:v,lazyHandlerPromise:v};let y=(async()=>{Ee(typeof a.lazy=="function","No lazy route function found");let I=await a.lazy(),S={};for(let H in I){let O=I[H];if(O===void 0)continue;let D=mp(H),K=m[H]!==void 0&&H!=="hasErrorBoundary";D?rt(!D,"Route property "+H+" is not a supported property to be returned from a lazy route function. This property will be ignored."):K?rt(!K,`Route "${m.id}" has a static property "${H}" defined but its lazy function is also returning a value for this property. The lazy route property "${H}" will be ignored.`):S[H]=O}Object.assign(m,S),Object.assign(m,{...c(m),lazy:void 0})})();return _d.set(m,y),y.catch(()=>{}),{lazyRoutePromise:y,lazyHandlerPromise:y}}let h=Object.keys(a.lazy),A=[],p;for(let v of h){if(d&&d.includes(v))continue;let y=km({key:v,route:a,manifest:o,mapRouteProperties:c});y&&(A.push(y),v===i&&(p=y))}let g=A.length>0?Promise.all(A).then(()=>{}):void 0;return g==null||g.catch(()=>{}),p==null||p.catch(()=>{}),{lazyRoutePromise:g,lazyHandlerPromise:p}}async function Yd(a){let i=a.matches.filter(d=>d.shouldLoad),o={};return(await Promise.all(i.map(d=>d.resolve()))).forEach((d,m)=>{o[i[m].route.id]=d}),o}async function Jp(a){return a.matches.some(i=>i.route.middleware)?Um(a,()=>Yd(a)):Yd(a)}function Um(a,i){return qp(a,i,c=>{if(uA(c))throw c;return c},lA,o);function o(c,d,m){if(m)return Promise.resolve(Object.assign(m.value,{[d]:{type:"error",result:c}}));{let{matches:h}=a,A=Math.min(Math.max(h.findIndex(g=>g.route.id===d),0),Math.max(h.findIndex(g=>g.shouldCallHandler()),0)),p=ea(h,h[A].route.id).route.id;return Promise.resolve({[p]:{type:"error",result:c}})}}}async function qp(a,i,o,c,d){let{matches:m,request:h,params:A,context:p,unstable_pattern:g}=a,v=m.flatMap(I=>I.route.middleware?I.route.middleware.map(S=>[I.route.id,S]):[]);return await jm({request:h,params:A,context:p,unstable_pattern:g},v,i,o,c,d)}async function jm(a,i,o,c,d,m,h=0){let{request:A}=a;if(A.signal.aborted)throw A.signal.reason??new Error(`Request aborted: ${A.method} ${A.url}`);let p=i[h];if(!p)return await o();let[g,v]=p,y,I=async()=>{if(y)throw new Error("You may only call `next()` once per middleware");try{return y={value:await jm(a,i,o,c,d,m,h+1)},y.value}catch(S){return y={value:await m(S,g,y)},y.value}};try{let S=await v(a,I),H=S!=null?c(S):void 0;return d(H)?H:y?H??y.value:(y={value:await I()},y.value)}catch(S){return await m(S,g,y)}}function bm(a,i,o,c,d){let m=km({key:"middleware",route:c.route,manifest:i,mapRouteProperties:a}),h=Wp(c.route,At(o.method)?"action":"loader",i,a,d);return{middleware:m,route:h.lazyRoutePromise,handler:h.lazyHandlerPromise}}function ko(a,i,o,c,d,m,h,A,p=null,g){let v=!1,y=bm(a,i,o,d,m);return{...d,_lazyPromises:y,shouldLoad:A,shouldRevalidateArgs:p,shouldCallHandler(I){return v=!0,p?typeof g=="boolean"?rl(d,{...p,defaultShouldRevalidate:g}):typeof I=="boolean"?rl(d,{...p,defaultShouldRevalidate:I}):rl(d,p):A},resolve(I){let{lazy:S,loader:H,middleware:O}=d.route,D=v||A||I&&!At(o.method)&&(S||H),b=O&&O.length>0&&!H&&!S;return D&&(At(o.method)||!b)?Zp({request:o,unstable_pattern:c,match:d,lazyHandlerPromise:y==null?void 0:y.handler,lazyRoutePromise:y==null?void 0:y.route,handlerOverride:I,scopedContext:h}):Promise.resolve({type:"data",result:void 0})}}}function nn(a,i,o,c,d,m,h,A=null){return c.map(p=>p.route.id!==d.route.id?{...p,shouldLoad:!1,shouldRevalidateArgs:A,shouldCallHandler:()=>!1,_lazyPromises:bm(a,i,o,p,m),resolve:()=>Promise.resolve({type:"data",result:void 0})}:ko(a,i,o,ol(c),p,m,h,!0,A))}async function Qp(a,i,o,c,d,m){o.some(g=>{var v;return(v=g._lazyPromises)==null?void 0:v.middleware})&&await Promise.all(o.map(g=>{var v;return(v=g._lazyPromises)==null?void 0:v.middleware}));let h={request:i,unstable_pattern:ol(o),params:o[0].params,context:d,matches:o},p=await a({...h,fetcherKey:c,runClientMiddleware:g=>{let v=h;return Um(v,()=>g({...v,fetcherKey:c,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(o.flatMap(g=>{var v,y;return[(v=g._lazyPromises)==null?void 0:v.handler,(y=g._lazyPromises)==null?void 0:y.route]}))}catch{}return p}async function Zp({request:a,unstable_pattern:i,match:o,lazyHandlerPromise:c,lazyRoutePromise:d,handlerOverride:m,scopedContext:h}){let A,p,g=At(a.method),v=g?"action":"loader",y=I=>{let S,H=new Promise((b,K)=>S=K);p=()=>S(),a.signal.addEventListener("abort",p);let O=b=>typeof I!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${v}" [routeId: ${o.route.id}]`)):I({request:a,unstable_pattern:i,params:o.params,context:h},...b!==void 0?[b]:[]),D=(async()=>{try{return{type:"data",result:await(m?m(K=>O(K)):O())}}catch(b){return{type:"error",result:b}}})();return Promise.race([D,H])};try{let I=g?o.route.action:o.route.loader;if(c||d)if(I){let S,[H]=await Promise.all([y(I).catch(O=>{S=O}),c,d]);if(S!==void 0)throw S;A=H}else{await c;let S=g?o.route.action:o.route.loader;if(S)[A]=await Promise.all([y(S),d]);else if(v==="action"){let H=new URL(a.url),O=H.pathname+H.search;throw Bt(405,{method:a.method,pathname:O,routeId:o.route.id})}else return{type:"data",result:void 0}}else if(I)A=await y(I);else{let S=new URL(a.url),H=S.pathname+S.search;throw Bt(404,{pathname:H})}}catch(I){return{type:"error",result:I}}finally{p&&a.signal.removeEventListener("abort",p)}return A}async function Xp(a){let i=a.headers.get("Content-Type");return i&&/\bapplication\/json\b/.test(i)?a.body==null?null:a.json():a.text()}async function eA(a){var c,d,m,h,A;let{result:i,type:o}=a;if(_o(i)){let p;try{p=await Xp(i)}catch(g){return{type:"error",error:g}}return o==="error"?{type:"error",error:new sl(i.status,i.statusText,p),statusCode:i.status,headers:i.headers}:{type:"data",data:p,statusCode:i.status,headers:i.headers}}return o==="error"?Jd(i)?i.data instanceof Error?{type:"error",error:i.data,statusCode:(c=i.init)==null?void 0:c.status,headers:(d=i.init)!=null&&d.headers?new Headers(i.init.headers):void 0}:{type:"error",error:nA(i),statusCode:ll(i)?i.status:void 0,headers:(m=i.init)!=null&&m.headers?new Headers(i.init.headers):void 0}:{type:"error",error:i,statusCode:ll(i)?i.status:void 0}:Jd(i)?{type:"data",data:i.data,statusCode:(h=i.init)==null?void 0:h.status,headers:(A=i.init)!=null&&A.headers?new Headers(i.init.headers):void 0}:{type:"data",data:i}}function tA(a,i,o,c,d){let m=a.headers.get("Location");if(Ee(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!Do(m)){let h=c.slice(0,c.findIndex(A=>A.route.id===o)+1);m=So(new URL(i.url),h,d,m),a.headers.set("Location",m)}return a}function Fd(a,i,o,c){let d=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(Do(a)){let m=a,h=m.startsWith("//")?new URL(i.protocol+m):new URL(m);if(d.includes(h.protocol))throw new Error("Invalid redirect location");let A=zt(h.pathname,o)!=null;if(h.origin===i.origin&&A)return h.pathname+h.search+h.hash}try{let m=c.createURL(a);if(d.includes(m.protocol))throw new Error("Invalid redirect location")}catch{}return a}function rn(a,i,o,c){let d=a.createURL(Cm(i)).toString(),m={signal:o};if(c&&At(c.formMethod)){let{formMethod:h,formEncType:A}=c;m.method=h.toUpperCase(),A==="application/json"?(m.headers=new Headers({"Content-Type":A}),m.body=JSON.stringify(c.json)):A==="text/plain"?m.body=c.text:A==="application/x-www-form-urlencoded"&&c.formData?m.body=Uo(c.formData):m.body=c.formData}return new Request(d,m)}function Uo(a){let i=new URLSearchParams;for(let[o,c]of a.entries())i.append(o,typeof c=="string"?c:c.name);return i}function Bd(a){let i=new FormData;for(let[o,c]of a.entries())i.append(o,c);return i}function rA(a,i,o,c=!1,d=!1){let m={},h=null,A,p=!1,g={},v=o&&bt(o[1])?o[1].error:void 0;return a.forEach(y=>{if(!(y.route.id in i))return;let I=y.route.id,S=i[I];if(Ee(!Ma(S),"Cannot handle redirect results in processLoaderData"),bt(S)){let H=S.error;if(v!==void 0&&(H=v,v=void 0),h=h||{},d)h[I]=H;else{let O=ea(a,I);h[O.route.id]==null&&(h[O.route.id]=H)}c||(m[I]=Sm),p||(p=!0,A=ll(S.error)?S.error.status:500),S.headers&&(g[I]=S.headers)}else m[I]=S.data,S.statusCode&&S.statusCode!==200&&!p&&(A=S.statusCode),S.headers&&(g[I]=S.headers)}),v!==void 0&&o&&(h={[o[0]]:v},o[2]&&(m[o[2]]=void 0)),{loaderData:m,errors:h,statusCode:A||200,loaderHeaders:g}}function zd(a,i,o,c,d,m){let{loaderData:h,errors:A}=rA(i,o,c);return d.filter(p=>!p.matches||p.matches.some(g=>g.shouldLoad)).forEach(p=>{let{key:g,match:v,controller:y}=p;if(y&&y.signal.aborted)return;let I=m[g];if(Ee(I,"Did not find corresponding fetcher result"),bt(I)){let S=ea(a.matches,v==null?void 0:v.route.id);A&&A[S.route.id]||(A={...A,[S.route.id]:I.error}),a.fetchers.delete(g)}else if(Ma(I))Ee(!1,"Unhandled fetcher revalidation redirect");else{let S=Er(I.data);a.fetchers.set(g,S)}}),{loaderData:h,errors:A}}function $d(a,i,o,c){let d=Object.entries(i).filter(([,m])=>m!==Sm).reduce((m,[h,A])=>(m[h]=A,m),{});for(let m of o){let h=m.route.id;if(!i.hasOwnProperty(h)&&a.hasOwnProperty(h)&&m.route.loader&&(d[h]=a[h]),c&&c.hasOwnProperty(h))break}return d}function Wd(a){return a?bt(a[1])?{actionData:{}}:{actionData:{[a[0]]:a[1].data}}:{}}function ea(a,i){return(i?a.slice(0,a.findIndex(c=>c.route.id===i)+1):[...a]).reverse().find(c=>c.route.hasErrorBoundary===!0)||a[0]}function Ri(a){let i=a.length===1?a[0]:a.find(o=>o.index||!o.path||o.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:i}],route:i}}function Bt(a,{pathname:i,routeId:o,method:c,type:d,message:m}={}){let h="Unknown Server Error",A="Unknown @remix-run/router error";return a===400?(h="Bad Request",c&&i&&o?A=`You made a ${c} request to "${i}" but did not provide a \`loader\` for route "${o}", so there is no way to handle the request.`:d==="invalid-body"&&(A="Unable to encode submission body")):a===403?(h="Forbidden",A=`Route "${o}" does not match URL "${i}"`):a===404?(h="Not Found",A=`No route matches URL "${i}"`):a===405&&(h="Method Not Allowed",c&&i&&o?A=`You made a ${c.toUpperCase()} request to "${i}" but did not provide an \`action\` for route "${o}", so there is no way to handle the request.`:c&&(A=`Invalid request method "${c.toUpperCase()}"`)),new sl(a||500,h,new Error(A),!0)}function Ti(a){let i=Object.entries(a);for(let o=i.length-1;o>=0;o--){let[c,d]=i[o];if(Ma(d))return{key:c,result:d}}}function Cm(a){let i=typeof a=="string"?ra(a):a;return dr({...i,hash:""})}function aA(a,i){return a.pathname!==i.pathname||a.search!==i.search?!1:a.hash===""?i.hash!=="":a.hash===i.hash?!0:i.hash!==""}function nA(a){var i,o;return new sl(((i=a.init)==null?void 0:i.status)??500,((o=a.init)==null?void 0:o.statusText)??"Internal Server Error",a.data)}function lA(a){return a!=null&&typeof a=="object"&&Object.entries(a).every(([i,o])=>typeof i=="string"&&iA(o))}function iA(a){return a!=null&&typeof a=="object"&&"type"in a&&"result"in a&&(a.type==="data"||a.type==="error")}function sA(a){return _o(a.result)&&Im.has(a.result.status)}function bt(a){return a.type==="error"}function Ma(a){return(a&&a.type)==="redirect"}function Jd(a){return typeof a=="object"&&a!=null&&"type"in a&&"data"in a&&"init"in a&&a.type==="DataWithResponseInit"}function _o(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.headers=="object"&&typeof a.body<"u"}function oA(a){return Im.has(a)}function uA(a){return _o(a)&&oA(a.status)&&a.headers.has("Location")}function cA(a){return Gp.has(a.toUpperCase())}function At(a){return Dp.has(a.toUpperCase())}function Yo(a){return new URLSearchParams(a).getAll("index").some(i=>i==="")}function Ei(a,i){let o=typeof i=="string"?ra(i).search:i.search;if(a[a.length-1].route.index&&Yo(o||""))return a[a.length-1];let c=Rm(a);return c[c.length-1]}function qd(a){let{formMethod:i,formAction:o,formEncType:c,text:d,formData:m,json:h}=a;if(!(!i||!o||!c)){if(d!=null)return{formMethod:i,formAction:o,formEncType:c,formData:void 0,json:void 0,text:d};if(m!=null)return{formMethod:i,formAction:o,formEncType:c,formData:m,json:void 0,text:void 0};if(h!==void 0)return{formMethod:i,formAction:o,formEncType:c,formData:void 0,json:h,text:void 0}}}function Po(a,i){return i?{state:"loading",location:a,formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text}:{state:"loading",location:a,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function dA(a,i){return{state:"submitting",location:a,formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text}}function Qn(a,i){return a?{state:"loading",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:i}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:i}}function mA(a,i){return{state:"submitting",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:i?i.data:void 0}}function Er(a){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function fA(a,i){try{let o=a.sessionStorage.getItem(wm);if(o){let c=JSON.parse(o);for(let[d,m]of Object.entries(c||{}))m&&Array.isArray(m)&&i.set(d,new Set(m||[]))}}catch{}}function hA(a,i){if(i.size>0){let o={};for(let[c,d]of i)o[c]=[...d];try{a.sessionStorage.setItem(wm,JSON.stringify(o))}catch(c){rt(!1,`Failed to save applied view transitions in sessionStorage (${c}).`)}}}function Qd(){let a,i,o=new Promise((c,d)=>{a=async m=>{c(m);try{await o}catch{}},i=async m=>{d(m);try{await o}catch{}}});return{promise:o,resolve:a,reject:i}}var Pa=T.createContext(null);Pa.displayName="DataRouter";var ul=T.createContext(null);ul.displayName="DataRouterState";var Om=T.createContext(!1);function pA(){return T.useContext(Om)}var Fo=T.createContext({isTransitioning:!1});Fo.displayName="ViewTransition";var Km=T.createContext(new Map);Km.displayName="Fetchers";var AA=T.createContext(null);AA.displayName="Await";var $t=T.createContext(null);$t.displayName="Navigation";var Ui=T.createContext(null);Ui.displayName="Location";var mr=T.createContext({outlet:null,matches:[],isDataRoute:!1});mr.displayName="Route";var Bo=T.createContext(null);Bo.displayName="RouteError";var Dm="REACT_ROUTER_ERROR",gA="REDIRECT",xA="ROUTE_ERROR_RESPONSE";function yA(a){if(a.startsWith(`${Dm}:${gA}:{`))try{let i=JSON.parse(a.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function NA(a){if(a.startsWith(`${Dm}:${xA}:{`))try{let i=JSON.parse(a.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new sl(i.status,i.statusText,i.data)}catch{}}function vA(a,{relative:i}={}){Ee(cl(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:c}=T.useContext($t),{hash:d,pathname:m,search:h}=dl(a,{relative:i}),A=m;return o!=="/"&&(A=m==="/"?o:cr([o,m])),c.createHref({pathname:A,search:h,hash:d})}function cl(){return T.useContext(Ui)!=null}function fr(){return Ee(cl(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Ui).location}var Hm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Gm(a){T.useContext($t).static||T.useLayoutEffect(a)}function RA(){let{isDataRoute:a}=T.useContext(mr);return a?KA():TA()}function TA(){Ee(cl(),"useNavigate() may be used only in the context of a <Router> component.");let a=T.useContext(Pa),{basename:i,navigator:o}=T.useContext($t),{matches:c}=T.useContext(mr),{pathname:d}=fr(),m=JSON.stringify(Ho(c)),h=T.useRef(!1);return Gm(()=>{h.current=!0}),T.useCallback((p,g={})=>{if(rt(h.current,Hm),!h.current)return;if(typeof p=="number"){o.go(p);return}let v=Go(p,JSON.parse(m),d,g.relative==="path");a==null&&i!=="/"&&(v.pathname=v.pathname==="/"?i:cr([i,v.pathname])),(g.replace?o.replace:o.push)(v,g.state,g)},[i,o,m,d,a])}var MA=T.createContext(null);function PA(a){let i=T.useContext(mr).outlet;return T.useMemo(()=>i&&T.createElement(MA.Provider,{value:a},i),[i,a])}function dl(a,{relative:i}={}){let{matches:o}=T.useContext(mr),{pathname:c}=fr(),d=JSON.stringify(Ho(o));return T.useMemo(()=>Go(a,JSON.parse(d),c,i==="path"),[a,d,c,i])}function EA(a,i,o,c,d){Ee(cl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=T.useContext($t),{matches:h}=T.useContext(mr),A=h[h.length-1],p=A?A.params:{},g=A?A.pathname:"/",v=A?A.pathnameBase:"/",y=A&&A.route;{let K=y&&y.path||"";_m(g,!y||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let I=fr(),S;S=I;let H=S.pathname||"/",O=H;if(v!=="/"){let K=v.replace(/^\//,"").split("/");O="/"+H.replace(/^\//,"").split("/").slice(K.length).join("/")}let D=Xr(a,{pathname:O});return rt(y||D!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),rt(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),kA(D&&D.map(K=>Object.assign({},K,{params:Object.assign({},p,K.params),pathname:cr([v,m.encodeLocation?m.encodeLocation(K.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?v:cr([v,m.encodeLocation?m.encodeLocation(K.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:K.pathnameBase])})),h,o,c,d)}function IA(){let a=OA(),i=ll(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),o=a instanceof Error?a.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},h=null;return console.error("Error handled by React Router default ErrorBoundary:",a),h=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:m},"ErrorBoundary")," or"," ",T.createElement("code",{style:m},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},i),o?T.createElement("pre",{style:d},o):null,h)}var wA=T.createElement(IA,null),Vm=class extends T.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){this.props.onError?this.props.onError(a,i):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const o=NA(a.digest);o&&(a=o)}let i=a!==void 0?T.createElement(mr.Provider,{value:this.props.routeContext},T.createElement(Bo.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?T.createElement(SA,{error:a},i):i}};Vm.contextType=Om;var Eo=new WeakMap;function SA({children:a,error:i}){let{basename:o}=T.useContext($t);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let c=yA(i.digest);if(c){let d=Eo.get(i);if(d)throw d;let m=Mm(c.location,o);if(Tm&&!Eo.get(i))if(m.isExternal||c.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:c.replace}));throw Eo.set(i,h),h}return T.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return a}function LA({routeContext:a,match:i,children:o}){let c=T.useContext(Pa);return c&&c.static&&c.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=i.route.id),T.createElement(mr.Provider,{value:a},o)}function kA(a,i=[],o=null,c=null,d=null){if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let m=a,h=o==null?void 0:o.errors;if(h!=null){let v=m.findIndex(y=>y.route.id&&(h==null?void 0:h[y.route.id])!==void 0);Ee(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),m=m.slice(0,Math.min(m.length,v+1))}let A=!1,p=-1;if(o)for(let v=0;v<m.length;v++){let y=m[v];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=v),y.route.id){let{loaderData:I,errors:S}=o,H=y.route.loader&&!I.hasOwnProperty(y.route.id)&&(!S||S[y.route.id]===void 0);if(y.route.lazy||H){A=!0,p>=0?m=m.slice(0,p+1):m=[m[0]];break}}}let g=o&&c?(v,y)=>{var I,S;c(v,{location:o.location,params:((S=(I=o.matches)==null?void 0:I[0])==null?void 0:S.params)??{},unstable_pattern:ol(o.matches),errorInfo:y})}:void 0;return m.reduceRight((v,y,I)=>{let S,H=!1,O=null,D=null;o&&(S=h&&y.route.id?h[y.route.id]:void 0,O=y.route.errorElement||wA,A&&(p<0&&I===0?(_m("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),H=!0,D=null):p===I&&(H=!0,D=y.route.hydrateFallbackElement||null)));let b=i.concat(m.slice(0,I+1)),K=()=>{let G;return S?G=O:H?G=D:y.route.Component?G=T.createElement(y.route.Component,null):y.route.element?G=y.route.element:G=v,T.createElement(LA,{match:y,routeContext:{outlet:v,matches:b,isDataRoute:o!=null},children:G})};return o&&(y.route.ErrorBoundary||y.route.errorElement||I===0)?T.createElement(Vm,{location:o.location,revalidation:o.revalidation,component:O,error:S,children:K(),routeContext:{outlet:null,matches:b,isDataRoute:!0},onError:g}):K()},null)}function zo(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function UA(a){let i=T.useContext(Pa);return Ee(i,zo(a)),i}function jA(a){let i=T.useContext(ul);return Ee(i,zo(a)),i}function bA(a){let i=T.useContext(mr);return Ee(i,zo(a)),i}function $o(a){let i=bA(a),o=i.matches[i.matches.length-1];return Ee(o.route.id,`${a} can only be used on routes that contain a unique "id"`),o.route.id}function CA(){return $o("useRouteId")}function OA(){var c;let a=T.useContext(Bo),i=jA("useRouteError"),o=$o("useRouteError");return a!==void 0?a:(c=i.errors)==null?void 0:c[o]}function KA(){let{router:a}=UA("useNavigate"),i=$o("useNavigate"),o=T.useRef(!1);return Gm(()=>{o.current=!0}),T.useCallback(async(d,m={})=>{rt(o.current,Hm),o.current&&(typeof d=="number"?await a.navigate(d):await a.navigate(d,{fromRouteId:i,...m}))},[a,i])}var Zd={};function _m(a,i,o){!i&&!Zd[a]&&(Zd[a]=!0,rt(!1,o))}var Xd={};function em(a,i){!a&&!Xd[i]&&(Xd[i]=!0,console.warn(i))}var DA="useOptimistic",tm=ap[DA],HA=()=>{};function GA(a){return tm?tm(a):[a,HA]}function VA(a){let i={hasErrorBoundary:a.hasErrorBoundary||a.ErrorBoundary!=null||a.errorElement!=null};return a.Component&&(a.element&&rt(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(i,{element:T.createElement(a.Component),Component:void 0})),a.HydrateFallback&&(a.hydrateFallbackElement&&rt(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(i,{hydrateFallbackElement:T.createElement(a.HydrateFallback),HydrateFallback:void 0})),a.ErrorBoundary&&(a.errorElement&&rt(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(i,{errorElement:T.createElement(a.ErrorBoundary),ErrorBoundary:void 0})),i}var _A=["HydrateFallback","hydrateFallbackElement"],YA=class{constructor(){this.status="pending",this.promise=new Promise((a,i)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",a(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",i(o))}})}};function FA({router:a,flushSync:i,onError:o,unstable_useTransitions:c}){c=pA()||c;let[m,h]=T.useState(a.state),[A,p]=GA(m),[g,v]=T.useState(),[y,I]=T.useState({isTransitioning:!1}),[S,H]=T.useState(),[O,D]=T.useState(),[b,K]=T.useState(),G=T.useRef(new Map),ae=T.useCallback((ie,{deletedFetchers:pe,newErrors:Me,flushSync:Le,viewTransitionOpts:Ke})=>{Me&&o&&Object.values(Me).forEach(je=>{var ze;return o(je,{location:ie.location,params:((ze=ie.matches[0])==null?void 0:ze.params)??{},unstable_pattern:ol(ie.matches)})}),ie.fetchers.forEach((je,ze)=>{je.data!==void 0&&G.current.set(ze,je.data)}),pe.forEach(je=>G.current.delete(je)),em(Le===!1||i!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let Ye=a.window!=null&&a.window.document!=null&&typeof a.window.document.startViewTransition=="function";if(em(Ke==null||Ye,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!Ke||!Ye){i&&Le?i(()=>h(ie)):c===!1?h(ie):T.startTransition(()=>{c===!0&&p(je=>rm(je,ie)),h(ie)});return}if(i&&Le){i(()=>{O&&(S==null||S.resolve(),O.skipTransition()),I({isTransitioning:!0,flushSync:!0,currentLocation:Ke.currentLocation,nextLocation:Ke.nextLocation})});let je=a.window.document.startViewTransition(()=>{i(()=>h(ie))});je.finished.finally(()=>{i(()=>{H(void 0),D(void 0),v(void 0),I({isTransitioning:!1})})}),i(()=>D(je));return}O?(S==null||S.resolve(),O.skipTransition(),K({state:ie,currentLocation:Ke.currentLocation,nextLocation:Ke.nextLocation})):(v(ie),I({isTransitioning:!0,flushSync:!1,currentLocation:Ke.currentLocation,nextLocation:Ke.nextLocation}))},[a.window,i,O,S,c,p,o]);T.useLayoutEffect(()=>a.subscribe(ae),[a,ae]),T.useEffect(()=>{y.isTransitioning&&!y.flushSync&&H(new YA)},[y]),T.useEffect(()=>{if(S&&g&&a.window){let ie=g,pe=S.promise,Me=a.window.document.startViewTransition(async()=>{c===!1?h(ie):T.startTransition(()=>{c===!0&&p(Le=>rm(Le,ie)),h(ie)}),await pe});Me.finished.finally(()=>{H(void 0),D(void 0),v(void 0),I({isTransitioning:!1})}),D(Me)}},[g,S,a.window,c,p]),T.useEffect(()=>{S&&g&&A.location.key===g.location.key&&S.resolve()},[S,O,A.location,g]),T.useEffect(()=>{!y.isTransitioning&&b&&(v(b.state),I({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}),K(void 0))},[y.isTransitioning,b]);let oe=T.useMemo(()=>({createHref:a.createHref,encodeLocation:a.encodeLocation,go:ie=>a.navigate(ie),push:(ie,pe,Me)=>a.navigate(ie,{state:pe,preventScrollReset:Me==null?void 0:Me.preventScrollReset}),replace:(ie,pe,Me)=>a.navigate(ie,{replace:!0,state:pe,preventScrollReset:Me==null?void 0:Me.preventScrollReset})}),[a]),ye=a.basename||"/",U=T.useMemo(()=>({router:a,navigator:oe,static:!1,basename:ye,onError:o}),[a,oe,ye,o]);return T.createElement(T.Fragment,null,T.createElement(Pa.Provider,{value:U},T.createElement(ul.Provider,{value:A},T.createElement(Km.Provider,{value:G.current},T.createElement(Fo.Provider,{value:y},T.createElement($A,{basename:ye,location:A.location,navigationType:A.historyAction,navigator:oe,unstable_useTransitions:c},T.createElement(BA,{routes:a.routes,future:a.future,state:A,onError:o})))))),null)}function rm(a,i){return{...a,navigation:i.navigation.state!=="idle"?i.navigation:a.navigation,revalidation:i.revalidation!=="idle"?i.revalidation:a.revalidation,actionData:i.navigation.state!=="submitting"?i.actionData:a.actionData,fetchers:i.fetchers}}var BA=T.memo(zA);function zA({routes:a,future:i,state:o,onError:c}){return EA(a,void 0,o,c,i)}function Ym(a){return PA(a.context)}function $A({basename:a="/",children:i=null,location:o,navigationType:c="POP",navigator:d,static:m=!1,unstable_useTransitions:h}){Ee(!cl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let A=a.replace(/^\/*/,"/"),p=T.useMemo(()=>({basename:A,navigator:d,static:m,unstable_useTransitions:h,future:{}}),[A,d,m,h]);typeof o=="string"&&(o=ra(o));let{pathname:g="/",search:v="",hash:y="",state:I=null,key:S="default"}=o,H=T.useMemo(()=>{let O=zt(g,A);return O==null?null:{location:{pathname:O,search:v,hash:y,state:I,key:S},navigationType:c}},[A,g,v,y,I,S,c]);return rt(H!=null,`<Router basename="${A}"> is not able to match the URL "${g}${v}${y}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:T.createElement($t.Provider,{value:p},T.createElement(Ui.Provider,{children:i,value:H}))}var Ii="get",wi="application/x-www-form-urlencoded";function ji(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function WA(a){return ji(a)&&a.tagName.toLowerCase()==="button"}function JA(a){return ji(a)&&a.tagName.toLowerCase()==="form"}function qA(a){return ji(a)&&a.tagName.toLowerCase()==="input"}function QA(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function ZA(a,i){return a.button===0&&(!i||i==="_self")&&!QA(a)}var Mi=null;function XA(){if(Mi===null)try{new FormData(document.createElement("form"),0),Mi=!1}catch{Mi=!0}return Mi}var eg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Io(a){return a!=null&&!eg.has(a)?(rt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wi}"`),null):a}function tg(a,i){let o,c,d,m,h;if(JA(a)){let A=a.getAttribute("action");c=A?zt(A,i):null,o=a.getAttribute("method")||Ii,d=Io(a.getAttribute("enctype"))||wi,m=new FormData(a)}else if(WA(a)||qA(a)&&(a.type==="submit"||a.type==="image")){let A=a.form;if(A==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||A.getAttribute("action");if(c=p?zt(p,i):null,o=a.getAttribute("formmethod")||A.getAttribute("method")||Ii,d=Io(a.getAttribute("formenctype"))||Io(A.getAttribute("enctype"))||wi,m=new FormData(A,a),!XA()){let{name:g,type:v,value:y}=a;if(v==="image"){let I=g?`${g}.`:"";m.append(`${I}x`,"0"),m.append(`${I}y`,"0")}else g&&m.append(g,y)}}else{if(ji(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Ii,c=null,d=wi,h=a}return m&&d==="text/plain"&&(h=m,m=void 0),{action:c,method:o.toLowerCase(),encType:d,formData:m,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Wo(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function rg(a,i,o,c){let d=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return o?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${c}`:d.pathname=`${d.pathname}.${c}`:d.pathname==="/"?d.pathname=`_root.${c}`:i&&zt(d.pathname,i)==="/"?d.pathname=`${i.replace(/\/$/,"")}/_root.${c}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${c}`,d}async function ag(a,i){if(a.id in i)return i[a.id];try{let o=await import(a.module);return i[a.id]=o,o}catch(o){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ng(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function lg(a,i,o){let c=await Promise.all(a.map(async d=>{let m=i.routes[d.route.id];if(m){let h=await ag(m,o);return h.links?h.links():[]}return[]}));return ug(c.flat(1).filter(ng).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function am(a,i,o,c,d,m){let h=(p,g)=>o[g]?p.route.id!==o[g].route.id:!0,A=(p,g)=>{var v;return o[g].pathname!==p.pathname||((v=o[g].route.path)==null?void 0:v.endsWith("*"))&&o[g].params["*"]!==p.params["*"]};return m==="assets"?i.filter((p,g)=>h(p,g)||A(p,g)):m==="data"?i.filter((p,g)=>{var y;let v=c.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(h(p,g)||A(p,g))return!0;if(p.route.shouldRevalidate){let I=p.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((y=o[0])==null?void 0:y.params)||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function ig(a,i,{includeHydrateFallback:o}={}){return sg(a.map(c=>{let d=i.routes[c.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),o&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function sg(a){return[...new Set(a)]}function og(a){let i={},o=Object.keys(a).sort();for(let c of o)i[c]=a[c];return i}function ug(a,i){let o=new Set;return new Set(i),a.reduce((c,d)=>{let m=JSON.stringify(og(d));return o.has(m)||(o.add(m),c.push({key:m,link:d})),c},[])}function Fm(){let a=T.useContext(Pa);return Wo(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function cg(){let a=T.useContext(ul);return Wo(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Jo=T.createContext(void 0);Jo.displayName="FrameworkContext";function Bm(){let a=T.useContext(Jo);return Wo(a,"You must render this element inside a <HydratedRouter> element"),a}function dg(a,i){let o=T.useContext(Jo),[c,d]=T.useState(!1),[m,h]=T.useState(!1),{onFocus:A,onBlur:p,onMouseEnter:g,onMouseLeave:v,onTouchStart:y}=i,I=T.useRef(null);T.useEffect(()=>{if(a==="render"&&h(!0),a==="viewport"){let O=b=>{b.forEach(K=>{h(K.isIntersecting)})},D=new IntersectionObserver(O,{threshold:.5});return I.current&&D.observe(I.current),()=>{D.disconnect()}}},[a]),T.useEffect(()=>{if(c){let O=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(O)}}},[c]);let S=()=>{d(!0)},H=()=>{d(!1),h(!1)};return o?a!=="intent"?[m,I,{}]:[m,I,{onFocus:Zn(A,S),onBlur:Zn(p,H),onMouseEnter:Zn(g,S),onMouseLeave:Zn(v,H),onTouchStart:Zn(y,S)}]:[!1,I,{}]}function Zn(a,i){return o=>{a&&a(o),o.defaultPrevented||i(o)}}function mg({page:a,...i}){let{router:o}=Fm(),c=T.useMemo(()=>Xr(o.routes,a,o.basename),[o.routes,a,o.basename]);return c?T.createElement(hg,{page:a,matches:c,...i}):null}function fg(a){let{manifest:i,routeModules:o}=Bm(),[c,d]=T.useState([]);return T.useEffect(()=>{let m=!1;return lg(a,i,o).then(h=>{m||d(h)}),()=>{m=!0}},[a,i,o]),c}function hg({page:a,matches:i,...o}){let c=fr(),{future:d,manifest:m,routeModules:h}=Bm(),{basename:A}=Fm(),{loaderData:p,matches:g}=cg(),v=T.useMemo(()=>am(a,i,g,m,c,"data"),[a,i,g,m,c]),y=T.useMemo(()=>am(a,i,g,m,c,"assets"),[a,i,g,m,c]),I=T.useMemo(()=>{if(a===c.pathname+c.search+c.hash)return[];let O=new Set,D=!1;if(i.forEach(K=>{var ae;let G=m.routes[K.route.id];!G||!G.hasLoader||(!v.some(oe=>oe.route.id===K.route.id)&&K.route.id in p&&((ae=h[K.route.id])!=null&&ae.shouldRevalidate)||G.hasClientLoader?D=!0:O.add(K.route.id))}),O.size===0)return[];let b=rg(a,A,d.unstable_trailingSlashAwareDataRequests,"data");return D&&O.size>0&&b.searchParams.set("_routes",i.filter(K=>O.has(K.route.id)).map(K=>K.route.id).join(",")),[b.pathname+b.search]},[A,d.unstable_trailingSlashAwareDataRequests,p,c,m,v,i,a,h]),S=T.useMemo(()=>ig(y,m),[y,m]),H=fg(y);return T.createElement(T.Fragment,null,I.map(O=>T.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...o})),S.map(O=>T.createElement("link",{key:O,rel:"modulepreload",href:O,...o})),H.map(({key:O,link:D})=>T.createElement("link",{key:O,nonce:o.nonce,...D,crossOrigin:D.crossOrigin??o.crossOrigin})))}function pg(...a){return i=>{a.forEach(o=>{typeof o=="function"?o(i):o!=null&&(o.current=i)})}}var Ag=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ag&&(window.__reactRouterVersion="7.13.0")}catch{}function gg(a,i){return Fp({basename:i==null?void 0:i.basename,getContext:i==null?void 0:i.getContext,future:i==null?void 0:i.future,history:ip({window:i==null?void 0:i.window}),hydrationData:xg(),routes:a,mapRouteProperties:VA,hydrationRouteProperties:_A,dataStrategy:i==null?void 0:i.dataStrategy,patchRoutesOnNavigation:i==null?void 0:i.patchRoutesOnNavigation,window:i==null?void 0:i.window,unstable_instrumentations:i==null?void 0:i.unstable_instrumentations}).initialize()}function xg(){let a=window==null?void 0:window.__staticRouterHydrationData;return a&&a.errors&&(a={...a,errors:yg(a.errors)}),a}function yg(a){if(!a)return null;let i=Object.entries(a),o={};for(let[c,d]of i)if(d&&d.__type==="RouteErrorResponse")o[c]=new sl(d.status,d.statusText,d.data,d.internal===!0);else if(d&&d.__type==="Error"){if(d.__subType){let m=window[d.__subType];if(typeof m=="function")try{let h=new m(d.message);h.stack="",o[c]=h}catch{}}if(o[c]==null){let m=new Error(d.message);m.stack="",o[c]=m}}else o[c]=d;return o}var zm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oe=T.forwardRef(function({onClick:i,discover:o="render",prefetch:c="none",relative:d,reloadDocument:m,replace:h,state:A,target:p,to:g,preventScrollReset:v,viewTransition:y,unstable_defaultShouldRevalidate:I,...S},H){let{basename:O,unstable_useTransitions:D}=T.useContext($t),b=typeof g=="string"&&zm.test(g),K=Mm(g,O);g=K.to;let G=vA(g,{relative:d}),[ae,oe,ye]=dg(c,S),U=Tg(g,{replace:h,state:A,target:p,preventScrollReset:v,relative:d,viewTransition:y,unstable_defaultShouldRevalidate:I,unstable_useTransitions:D});function ie(Me){i&&i(Me),Me.defaultPrevented||U(Me)}let pe=T.createElement("a",{...S,...ye,href:K.absoluteURL||G,onClick:K.isExternal||m?i:ie,ref:pg(H,oe),target:p,"data-discover":!b&&o==="render"?"true":void 0});return ae&&!b?T.createElement(T.Fragment,null,pe,T.createElement(mg,{page:G})):pe});Oe.displayName="Link";var Ng=T.forwardRef(function({"aria-current":i="page",caseSensitive:o=!1,className:c="",end:d=!1,style:m,to:h,viewTransition:A,children:p,...g},v){let y=dl(h,{relative:g.relative}),I=fr(),S=T.useContext(ul),{navigator:H,basename:O}=T.useContext($t),D=S!=null&&wg(y)&&A===!0,b=H.encodeLocation?H.encodeLocation(y).pathname:y.pathname,K=I.pathname,G=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;o||(K=K.toLowerCase(),G=G?G.toLowerCase():null,b=b.toLowerCase()),G&&O&&(G=zt(G,O)||G);const ae=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let oe=K===b||!d&&K.startsWith(b)&&K.charAt(ae)==="/",ye=G!=null&&(G===b||!d&&G.startsWith(b)&&G.charAt(b.length)==="/"),U={isActive:oe,isPending:ye,isTransitioning:D},ie=oe?i:void 0,pe;typeof c=="function"?pe=c(U):pe=[c,oe?"active":null,ye?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let Me=typeof m=="function"?m(U):m;return T.createElement(Oe,{...g,"aria-current":ie,className:pe,ref:v,style:Me,to:h,viewTransition:A},typeof p=="function"?p(U):p)});Ng.displayName="NavLink";var vg=T.forwardRef(({discover:a="render",fetcherKey:i,navigate:o,reloadDocument:c,replace:d,state:m,method:h=Ii,action:A,onSubmit:p,relative:g,preventScrollReset:v,viewTransition:y,unstable_defaultShouldRevalidate:I,...S},H)=>{let{unstable_useTransitions:O}=T.useContext($t),D=Eg(),b=Ig(A,{relative:g}),K=h.toLowerCase()==="get"?"get":"post",G=typeof A=="string"&&zm.test(A),ae=oe=>{if(p&&p(oe),oe.defaultPrevented)return;oe.preventDefault();let ye=oe.nativeEvent.submitter,U=(ye==null?void 0:ye.getAttribute("formmethod"))||h,ie=()=>D(ye||oe.currentTarget,{fetcherKey:i,method:U,navigate:o,replace:d,state:m,relative:g,preventScrollReset:v,viewTransition:y,unstable_defaultShouldRevalidate:I});O&&o!==!1?T.startTransition(()=>ie()):ie()};return T.createElement("form",{ref:H,method:K,action:b,onSubmit:c?p:ae,...S,"data-discover":!G&&a==="render"?"true":void 0})});vg.displayName="Form";function Rg(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $m(a){let i=T.useContext(Pa);return Ee(i,Rg(a)),i}function Tg(a,{target:i,replace:o,state:c,preventScrollReset:d,relative:m,viewTransition:h,unstable_defaultShouldRevalidate:A,unstable_useTransitions:p}={}){let g=RA(),v=fr(),y=dl(a,{relative:m});return T.useCallback(I=>{if(ZA(I,i)){I.preventDefault();let S=o!==void 0?o:dr(v)===dr(y),H=()=>g(a,{replace:S,state:c,preventScrollReset:d,relative:m,viewTransition:h,unstable_defaultShouldRevalidate:A});p?T.startTransition(()=>H()):H()}},[v,g,y,o,c,i,a,d,m,h,A,p])}var Mg=0,Pg=()=>`__${String(++Mg)}__`;function Eg(){let{router:a}=$m("useSubmit"),{basename:i}=T.useContext($t),o=CA(),c=a.fetch,d=a.navigate;return T.useCallback(async(m,h={})=>{let{action:A,method:p,encType:g,formData:v,body:y}=tg(m,i);if(h.navigate===!1){let I=h.fetcherKey||Pg();await c(I,o,h.action||A,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:v,body:y,formMethod:h.method||p,formEncType:h.encType||g,flushSync:h.flushSync})}else await d(h.action||A,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:v,body:y,formMethod:h.method||p,formEncType:h.encType||g,replace:h.replace,state:h.state,fromRouteId:o,flushSync:h.flushSync,viewTransition:h.viewTransition})},[c,d,i,o])}function Ig(a,{relative:i}={}){let{basename:o}=T.useContext($t),c=T.useContext(mr);Ee(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),m={...dl(a||".",{relative:i})},h=fr();if(a==null){m.search=h.search;let A=new URLSearchParams(m.search),p=A.getAll("index");if(p.some(v=>v==="")){A.delete("index"),p.filter(y=>y).forEach(y=>A.append("index",y));let v=A.toString();m.search=v?`?${v}`:""}}return(!a||a===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(m.pathname=m.pathname==="/"?o:cr([o,m.pathname])),dr(m)}function wg(a,{relative:i}={}){let o=T.useContext(Fo);Ee(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=$m("useViewTransitionState"),d=dl(a,{relative:i});if(!o.isTransitioning)return!1;let m=zt(o.currentLocation.pathname,c)||o.currentLocation.pathname,h=zt(o.nextLocation.pathname,c)||o.nextLocation.pathname;return Si(d.pathname,h)!=null||Si(d.pathname,m)!=null}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lg=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,o,c)=>c?c.toUpperCase():o.toLowerCase()),nm=a=>{const i=Lg(a);return i.charAt(0).toUpperCase()+i.slice(1)},Wm=(...a)=>a.filter((i,o,c)=>!!i&&i.trim()!==""&&c.indexOf(i)===o).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=T.forwardRef(({color:a="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:c,className:d="",children:m,iconNode:h,...A},p)=>T.createElement("svg",{ref:p,...kg,width:i,height:i,stroke:a,strokeWidth:c?Number(o)*24/Number(i):o,className:Wm("lucide",d),...A},[...h.map(([g,v])=>T.createElement(g,v)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=(a,i)=>{const o=T.forwardRef(({className:c,...d},m)=>T.createElement(Ug,{ref:m,iconNode:i,className:Wm(`lucide-${Sg(nm(a))}`,`lucide-${a}`,c),...d}));return o.displayName=nm(a),o};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],lm=ge("arrow-left",jg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ct=ge("arrow-right",bg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Og=ge("award",Cg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Dg=ge("bell",Kg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],Gg=ge("building-2",Hg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Jm=ge("check",Vg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],qm=ge("chevron-down",_g);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Pi=ge("circle-alert",Yg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Li=ge("circle-check-big",Fg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ml=ge("circle-check",Bg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],$g=ge("circle-x",zg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Qm=ge("clock",Wg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],qg=ge("credit-card",Jg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],Zg=ge("facebook",Qg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],jo=ge("file-text",Xg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],t0=ge("globe",e0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],Zm=ge("headphones",r0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],n0=ge("heart",a0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],i0=ge("instagram",l0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],o0=ge("lightbulb",s0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],bo=ge("loader-circle",u0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],d0=ge("lock",c0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Xm=ge("mail",m0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],ln=ge("map-pin",f0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],ef=ge("menu",h0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],tf=ge("message-circle",p0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],g0=ge("message-square",A0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],ki=ge("phone",x0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],N0=ge("play",y0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Co=ge("plus",v0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],rf=ge("search",R0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],M0=ge("send",T0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],E0=ge("server",P0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],af=ge("shield",I0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]],S0=ge("sliders-horizontal",w0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],bi=ge("sparkles",L0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],U0=ge("star",k0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],b0=ge("target",j0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]],O0=ge("tv",C0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],D0=ge("twitter",K0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],G0=ge("user",H0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],nf=ge("users",V0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],Y0=ge("wifi",_0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],sn=ge("x",F0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],z0=ge("youtube",B0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ci=ge("zap",$0),qo="/assets/image-1-CU82DH--.png",im=[{label:"Plans",path:"/plans"},{label:"Coverage",path:"/cherrinet-coverage"},{label:"About Us",path:"/about-us"},{label:"Support",path:"/support"},{label:"Quick Pay",href:"https://partner.knet.co.in/subscriber_login"},{label:"My Account",href:"https://partner.knet.co.in/subscriber_login"},{label:"G-Force",path:"/g-force",highlight:!0}];function W0(){const[a,i]=T.useState(!1),o=fr();return l.jsxs("nav",{className:"sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border",children:[l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"flex items-center justify-between h-16",children:[l.jsx(Oe,{to:"/",className:"flex items-center","aria-label":"Cherrinet — home",children:l.jsx("img",{src:qo,alt:"Cherrinet",className:"h-9 w-auto"})}),l.jsx("div",{className:"hidden lg:flex items-center gap-1",children:im.map(c=>c.href?l.jsx("a",{href:c.href,target:"_blank",rel:"noreferrer",className:"px-3 py-2 rounded-lg text-sm transition-colors text-muted-foreground hover:text-foreground hover:bg-muted",children:c.label},c.label):l.jsx(Oe,{to:c.path,className:`px-3 py-2 rounded-lg text-sm transition-colors ${o.pathname===c.path?"text-primary bg-secondary":c.highlight?"text-primary border border-primary/30 hover:bg-secondary":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:c.label},c.label))}),l.jsxs("div",{className:"hidden lg:flex items-center gap-4",children:[l.jsxs("a",{href:"tel:+914449303030",className:"flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors",children:[l.jsx(ki,{className:"w-4 h-4"}),"+91 44 4930 3030"]}),l.jsx(Oe,{to:"/contact-us",className:"bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm hover:bg-black hover:text-[#E47A82] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors",children:"Get Started"})]}),l.jsx("button",{className:"lg:hidden p-2 rounded-lg hover:bg-muted transition-colors",onClick:()=>i(!a),children:a?l.jsx(sn,{className:"w-5 h-5"}):l.jsx(ef,{className:"w-5 h-5"})})]})}),a&&l.jsx("div",{className:"lg:hidden bg-white border-t border-border",children:l.jsxs("div",{className:"px-4 py-4 flex flex-col gap-1",children:[im.map(c=>c.href?l.jsx("a",{href:c.href,target:"_blank",rel:"noreferrer",onClick:()=>i(!1),className:"px-4 py-3 rounded-lg text-sm transition-colors text-muted-foreground hover:text-foreground hover:bg-muted",children:c.label},c.label):l.jsx(Oe,{to:c.path,onClick:()=>i(!1),className:`px-4 py-3 rounded-lg text-sm transition-colors ${o.pathname===c.path?"text-primary bg-secondary":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:c.label},c.label)),l.jsxs("div",{className:"mt-3 pt-3 border-t border-border flex flex-col gap-3",children:[l.jsxs("a",{href:"tel:+914449303030",className:"flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground",children:[l.jsx(ki,{className:"w-4 h-4"}),"+91 44 4930 3030"]}),l.jsx(Oe,{to:"/contact-us",onClick:()=>i(!1),className:"bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm text-center hover:bg-[#8E1B22] transition-colors",children:"Get Started"})]})]})})]})}function J0({className:a}){return l.jsx("svg",{viewBox:"0 0 448 512",fill:"currentColor",className:a,"aria-hidden":"true",children:l.jsx("path",{d:"M380.9 97.1C339 55.2 285.6 32 229.3 32 103 32 0 135 0 261.3c0 46.3 12.1 91.5 35.1 130.9L0 480l92.2-30.4c37.5 20.5 80 31.2 123.7 31.2h.1c126.3 0 229.3-103 229.3-229.3 0-56.3-23.1-109.7-65.3-151.4zm-151.6 320.5c-36.9 0-73.1-10-104.9-28.9l-7.5-4.4-54.5 18 18.3-53.4-4.9-8c-21.4-34.9-32.6-75.5-32.6-117.8 0-115 93.8-208.8 209-208.8 55.9 0 108.4 21.8 147.7 61.4 39.3 39.5 61.1 92.8 61.1 149.4 0 115.2-93.8 209-209 209zm113.2-149.4c-6.3-3.1-37.1-18.3-42.8-20.3-5.7-2-9.8-3.1-13.9 3.1-4.1 6.3-15.9 20.3-19.5 24.4-3.6 4.1-7.2 4.6-13.5 1.5-36.5-18.3-60.4-32.7-84.5-74.6-6.8-11.8 6.8-11 19.6-36.4 2.2-4.1 1.1-7.6-.5-10.7-1.5-3-14-33.5-19.2-45.9-5.1-12.4-10.3-10.7-13.9-10.9-3.6-.2-7.8-.2-12-0.2-4.1 0-10.7 1.5-16.3 7.6-5.7 6.1-21.9 21.4-21.9 52.4 0 31.1 22.5 61.3 25.6 65.6 3.1 4.1 44.2 67.5 107.1 94.8 59.4 25.8 59.4 17.2 70.2 16 10.7-1.2 34.8-14.2 39.7-28 4.9-13.8 4.9-25.6 3.5-28.1-1.4-2.5-5.6-3.9-11.8-6.9z"})})}function lf(){return l.jsx("footer",{className:"bg-gray-900 text-gray-300",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10",children:[l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsx(Oe,{to:"/",className:"flex items-center","aria-label":"Cherrinet — home",children:l.jsx("div",{className:"bg-white rounded-lg p-2 inline-flex",children:l.jsx("img",{src:qo,alt:"Cherrinet",className:"h-8 w-auto"})})}),l.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Chennai's fastest growing Fibernet provider. Delivering blazing-fast internet to homes and businesses across the city."}),l.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[l.jsx("a",{href:"https://www.instagram.com/cherrinetsocial?igsh=MW1oenhjMTFxc2pkag==",target:"_blank",rel:"noreferrer",className:"w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors","aria-label":"Cherrinet Instagram",children:l.jsx(i0,{className:"w-4 h-4"})}),l.jsx("a",{href:"https://wa.me/917358228999",target:"_blank",rel:"noreferrer",className:"w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors","aria-label":"Cherrinet WhatsApp",children:l.jsx(J0,{className:"w-4 h-4"})}),l.jsx("a",{href:"https://x.com/cherrinetSocial/",target:"_blank",rel:"noreferrer",className:"w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors","aria-label":"Cherrinet Twitter",children:l.jsx(D0,{className:"w-4 h-4"})}),l.jsx("a",{href:"https://www.youtube.com/CherrinetSocial",target:"_blank",rel:"noreferrer",className:"w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors","aria-label":"Cherrinet YouTube",children:l.jsx(z0,{className:"w-4 h-4"})}),l.jsx("a",{href:"https://www.facebook.com/CherrinetSocial/",target:"_blank",rel:"noreferrer",className:"w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors","aria-label":"Cherrinet Facebook",children:l.jsx(Zg,{className:"w-4 h-4"})})]})]}),l.jsxs("div",{className:"flex flex-col gap-3",children:[l.jsx("h4",{className:"text-white mb-1",children:"Quick Links"}),[{label:"Home",path:"/"},{label:"Plans & Pricing",path:"/plans"},{label:"Check Coverage",path:"/cherrinet-coverage"},{label:"About Us",path:"/about-us"},{label:"Support",path:"/support"},{label:"G-Force (Business)",path:"/g-force"}].map(a=>l.jsx(Oe,{to:a.path,className:"text-sm text-gray-400 hover:text-white transition-colors",children:a.label},a.label))]}),l.jsxs("div",{className:"flex flex-col gap-3",children:[l.jsx("h4",{className:"text-white mb-1",children:"Support"}),l.jsx(Oe,{to:"/support#faq",className:"text-sm text-gray-400 hover:text-white transition-colors",children:"FAQ"}),l.jsx("a",{href:"https://www.cherrinet.in/appellate",target:"_blank",rel:"noreferrer",className:"text-sm text-gray-400 hover:text-white transition-colors",children:"Appellate"}),l.jsx("a",{href:"/Docs/Consumer Charter.pdf",target:"_blank",rel:"noreferrer",className:"text-sm text-gray-400 hover:text-white transition-colors",children:"Consumer Charter"}),l.jsx("a",{href:"/Docs/Parental_Control_Filters.pdf",target:"_blank",rel:"noreferrer",className:"text-sm text-gray-400 hover:text-white transition-colors",children:"Parental Control Filters"}),l.jsx("a",{href:"https://www.cherrinet.in/privacy-policy",target:"_blank",rel:"noreferrer",className:"text-sm text-gray-400 hover:text-white transition-colors",children:"Privacy Policy"}),l.jsx("a",{href:"/Docs/Device Policy.pdf",target:"_blank",rel:"noreferrer",className:"text-sm text-gray-400 hover:text-white transition-colors",children:"Device Policy"}),l.jsx("a",{href:"/Docs/Wear And Tear Policy.pdf",target:"_blank",rel:"noreferrer",className:"text-sm text-gray-400 hover:text-white transition-colors",children:"Wear And Tear"}),l.jsx("a",{href:"https://www.cherrinet.in/quality-of-service",target:"_blank",rel:"noreferrer",className:"text-sm text-gray-400 hover:text-white transition-colors",children:"Quality of Service"})]}),l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsx("h4",{className:"text-white mb-1",children:"Contact Us"}),l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx(ln,{className:"w-4 h-4 mt-0.5 shrink-0 text-primary"}),l.jsx("p",{className:"text-sm text-gray-400",children:"NO.1, Mura Towers, Dr Thirumoorthy Nagar Main Road, Nungambakkam. Chennai - 600034"})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx(ki,{className:"w-4 h-4 shrink-0 text-primary"}),l.jsx("a",{href:"tel:+914449303030",className:"text-sm text-gray-400 hover:text-white transition-colors",children:"+91 44 4930 3030"})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx(Xm,{className:"w-4 h-4 shrink-0 text-primary"}),l.jsx("a",{href:"mailto:support@cherrinet.in",className:"text-sm text-gray-400 hover:text-white transition-colors",children:"support@cherrinet.in"})]})]})]}),l.jsxs("div",{className:"mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4",children:[l.jsx("p",{className:"text-sm text-gray-500",children:"© 2026 Cherrinet Fibernet Pvt. Ltd. All rights reserved."}),l.jsx("p",{className:"text-sm text-gray-500",children:"Made with care in Chennai, India"})]})]})})}function q0(){const[a,i]=T.useState(!1),[o,c]=T.useState([{from:"bot",text:"Hi! I'm Cherry, Cherrinet's virtual assistant. How can I help you today?"}]),[d,m]=T.useState(""),h=p=>{const g=p.toLowerCase();return/(hi|hello|hey|good morning|good afternoon|good evening)/.test(g)?"Hello! I'm Cherry, Cherrinet's virtual assistant. I can help with plans, installation, coverage, billing, G-Force business plans, and OTT add-ons. Ask me anything about the site or our services.":/(gforce|g-force|business fiber|business plan|enterprise|sme|gforce plan)/.test(g)?"G-Force is Cherrinet's business-grade service for offices and enterprises. We offer plans like G-FORCE 2, G-FORCE 6, G-FORCE 10, plus SME Silver, Gold, Diamond, and Platinum. Visit /g-force for business broadband details and pricing.":/(refer|reference|page link|link me|direct me|which page|which section|where can i find|where is)/.test(g)?/(home|main|landing)/.test(g)?"Home page: / — includes the hero, quick plans, coverage checker, and CTA sections.":/(plans|pricing)/.test(g)?"Plans page: /plans — compare broadband plans, speeds, and pricing.":/(coverage|area|availability|pin|pincode|zipcode)/.test(g)?"Coverage page: /cherrinet-coverage — check who we serve by entering your 6-digit PIN code.":/(support|help|faq|chat|customer support)/.test(g)?"Support page: /support — FAQs, contact options, and the Cherry Bot chat are available here.":/(enquire|contact|quote|request)/.test(g)?"Contact page: /contact-us — submit your details and our team will get back to you with a quote.":/(about|company|who are you)/.test(g)?"About page: /about-us — learn more about Cherrinet and our services.":/(gforce|business)/.test(g)?"G-Force page: /g-force — business plans, pricing, and enquiry options for enterprise customers.":"Here are the main pages: Home /, Plans /plans, Coverage /cherrinet-coverage, Support /support, Contact /contact-us, G-Force /g-force.":/(website|site|pages|navigation|about the site|overall|what pages|what does the site)/.test(g)?"This site includes Home, Plans, Coverage, Support, Contact, and G-Force pages. Use Plans for pricing, Coverage for availability, Support for help, and G-Force for business services.":/(plan|price|cost|₹|subscription)/.test(g)?"Our plans start from ₹479/month for 50 Mbps and go up to ₹1,999/month for 1 Gbps. Visit /plans for the full comparison and current offers.":/(install|installation|setup)/.test(g)?"Installation is free and typically completed within 24-48 hours. Our technician will set up the fiber cable, ONT device, and Wi-Fi router in about 1-2 hours.":/(slow|speed|issue|disconnect|downtime|buffer)/.test(g)?"Sorry to hear about the issue. Please restart your router first. If the problem persists, our technical team can diagnose it remotely or send a technician. Call +91 44 4930 3030 for urgent support.":/(coverage|area|available|pin|pincode|zipcode|location)/.test(g)?"You can check coverage on our Coverage page by entering your 6-digit PIN code. We serve 100+ localities across Chennai and are expanding fast.":/(bill|billing|payment|refund|charge|due)/.test(g)?"For billing and payment help, you can use UPI, cards, net banking, or auto-debit. If you need billing support, please call +91 44 4930 3030 or email support@cherrinet.in.":/(ott|add-on|addon|subscription|hotstar|zee5|sonyliv)/.test(g)?"After activation, you'll receive OTT login details by SMS and email. You can also add more OTT services to your plan through our app or support team.":/(cancel|upgrade|downgrade|change plan|switch plan)/.test(g)?"Yes, you can upgrade or downgrade anytime. Plan changes usually take effect from the next billing cycle. Contact support to get this done quickly.":"I'm sorry, I don't have that exact answer right now. For immediate help, call +91 44 4930 3030 or email support@cherrinet.in. You can also ask me about plans, installation, coverage, speeds, billing, G-Force business service, or OTT add-ons."},A=()=>{if(!d.trim())return;const p=d.trim();c(g=>[...g,{from:"user",text:p}]),m(""),setTimeout(()=>{const g=h(p);c(v=>[...v,{from:"bot",text:g}])},600)};return l.jsxs(l.Fragment,{children:[a&&l.jsxs("div",{className:"fixed bottom-4 right-4 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden",children:[l.jsxs("div",{className:"flex items-center justify-between p-4 bg-primary text-white",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center",children:l.jsx("span",{className:"text-sm font-bold text-white",children:"C"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm",children:"Cherry Bot"}),l.jsx("p",{className:"text-xs text-[#FBEEEF]",children:"Online"})]})]}),l.jsx("button",{onClick:()=>i(!1),className:"p-1 rounded hover:bg-white/20 transition-colors cursor-pointer","aria-label":"Close chat",children:l.jsx(sn,{className:"w-5 h-5"})})]}),l.jsx("div",{className:"flex-1 p-4 flex flex-col gap-3 max-h-80 overflow-y-auto",children:o.map((p,g)=>l.jsxs("div",{className:`flex items-start gap-2 ${p.from==="user"?"flex-row-reverse":""}`,children:[l.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${p.from==="bot"?"bg-secondary":"bg-primary"}`,children:p.from==="bot"?l.jsx("span",{className:"text-xs font-bold text-white",children:"C"}):l.jsx(G0,{className:"w-3.5 h-3.5 text-white"})}),l.jsx("div",{className:`px-3.5 py-2.5 rounded-2xl text-sm max-w-[75%] ${p.from==="bot"?"bg-muted text-foreground rounded-tl-md":"bg-primary text-white rounded-tr-md"}`,children:p.text})]},g))}),l.jsx("div",{className:"p-3 border-t border-border",children:l.jsxs("div",{className:"flex gap-2",children:[l.jsx("input",{type:"text",value:d,onChange:p=>m(p.target.value),onKeyDown:p=>p.key==="Enter"&&A(),placeholder:"Type a message...",className:"flex-1 px-4 py-2.5 rounded-xl bg-muted border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"}),l.jsx("button",{onClick:A,disabled:!d.trim(),className:`p-2.5 rounded-xl transition-colors cursor-pointer ${d.trim()?"bg-primary text-white hover:bg-[#8E1B22]":"bg-muted text-muted-foreground"}`,"aria-label":"Send message",children:l.jsx(M0,{className:"w-4 h-4"})})]})})]}),!a&&l.jsx("button",{onClick:()=>i(!0),className:"fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#8E1B22] transition-colors cursor-pointer hover:scale-105","aria-label":"Open Cherrinet chat support",children:l.jsx(tf,{className:"w-6 h-6"})})]})}function sm(){return l.jsxs("div",{className:"flex flex-col min-h-screen",children:[l.jsx(W0,{}),l.jsx("main",{className:"flex-1",children:l.jsx(Ym,{})}),l.jsx(lf,{}),l.jsx(q0,{})]})}const Q0="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function il(a){const[i,o]=T.useState(!1),c=()=>{o(!0)},{src:d,alt:m,style:h,className:A,...p}=a;return i?l.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${A??""}`,style:h,children:l.jsx("div",{className:"flex items-center justify-center w-full h-full",children:l.jsx("img",{src:Q0,alt:"Error loading image",...p,"data-original-url":d})})}):l.jsx("img",{src:d,alt:m,className:A,style:h,...p,onError:c})}const Z0=[621113,621212,625018,627007,600069,625016,625007,625014,641005,620009,620010,625107,620001,600049,627005,627001,600021,625009,600081,600080,625001,625003,636002,636016,621104,600095,641025,643001,600077,600013,600041,625020,621220,620020,641030,627002,625531,600059,627004,641001,627003,627006,627009,60007,627011,600099,641006,600053,627358,600128,641018,600096,600087,605008,600122,626117,605013,605001,620018,641015,605005,605010,600018,605009,600004,605012,627353,605006,600007,620003,605011,641045,605003,600125,620017,641004,641035,411046,641002,620008,641009,620021,641038,641016,620007,641012,606601,641028,625010,620023,628002,628008,600116,600010,600040,600098,600006,625534,600011,600024,600078,603112,600058,600008,600056,600032,605004,600001,636007,600119,600113,600076,636004,600097,600083,600002,600031,600079,600082,600089,605110,600106,600028,600112,600003,600115,600102,603103,600118,600043,641008,600084,600029,600091,600075,600034,600100,600052,600012,600030,600101,600085,600020,600023,600044,626108,600117,600017,600042,600050,626102,600014,600035,625706,636005,636302,636030,641014,641011,636001,636201,636006,636009,641044,600108,600094,641049,600104,641037,625022,600037,600045,621133,629002,629163,600166,613101,613104,621216,631501,621716,625523,629001,630003,641042,621109,625002,600067,625512,612102,620002,620004,628004,604001,629501,627803,627357,600071,629003,627811,612504,622515,625518,630002,612101,629168,609808,612503,627008,629153,624202,628003,624005,620006,628001,628301,629165,629175,625601,603104,613602,628005,629115,621117,627818,625017,624001,631504,603102,604405,604403,609806,609801,629151,627809,612001,629152,621107,612002,621717,630307,632503,625005,629502,624101,612502,600039,631606,600107,629171,628105,600066,629193,621708,627010,600026,602301,631502,600070,632001,621103,621219,627807,621108,625006,625703,600005,624003,629810,629173,630001,625547,625702,632013,604408,627805,620102,627351,605401,621115,621712,628809,643006,624004,641604,628501,625582,603109,600073,612105,643002,632401,626142,627855,605602,625104,632509,604303,636010,621110,629401,627114,628721,629154,625301,500058,628903,600054,628103,600086,627802,628502,629802,400063,628402,628552,627352,628902,600019,629172,600048,600123,624220,621713,624103,602105,621116,601301,627359,636008,600033,600062,629252,626201,626205,600093,625707,629809,629803,627713,600063,621621,628702,628401,560037,600129,625012,642006,642001,627425,642002,613103,625023,627133,506001,629805,629101,629177,110049,629251,629901,500081,629602,621101,600015,628622,636015,628503,560102,629158,600027,603210,629159,641402,605104,695506,603110,629162,629004,500050,627851,110094,411011,627853,695502,627415,629851,641027,606202,642003,627719,628615,629804,600126,606213,600092,641013,628101,606201,629167,606206,600022,641033,621102,627117,629156,626802,629176,621704,641054,641003,621126,627035,641043,621011,421003,625004,500018,600016,560003,605109,641036,636003,620176,643007,606602,622001,629201,629157,629169,629155,626018,609804,630006,611104,612204,609807,628617,625019,628802,631605,625533,627814,629852,607107,624708,695503,631601,628151,630004,630202,627751,627810,624002,625708,606603,560041,629160,604102,600055,643005,627414,602109,624306,624211,613002,603127,624707,621701,600051,560047,629180,625503,627127,622257,627109,600064,628716,614016,500003,600060,627857,619154,614621,606204,600131,636140,612902,621709,627428,604406,400021,627861,600088,602701,628152,627806,678101,620012,625516,625402,629166,600047,606115,531060,606402,626140,605111,6000082,600061,560018,602101,621315,636202,612401,627356,606061,624010,621211,613007,628901,626125,604307,603001,600090,440013,560008,600065,602024,625203,613005,625520,603204,600109,601101,624705,630551,605007,613001,625701,624204,632512,632501,642123,626123,628713,621652,629161,626141,630005,6050008,641029,622002,630501,642104,627452,621811,627813,636014,652703,623504,606208,619172,201301,600072,411037,606203,627116,621805,628208,530016,600038,628303,641019,62007,607201,630106,620005,626136,639153,612201,400028,625060,603008,637403,609003,632513,625120,641026,631210,613601,612602,627501,628210,632521,627862,733101,628217,641010,624615,630107,625122,623115,126102,630313,628718,629701,600120,625704,627808,624104,627757,629203,627854,624102,627423,606401,629801,624303,421301,605702,608201,515408,641048,621705,600025,560070,605108,560027,641041,604002,612216,621106,625603,636401,631603,630108,612107,625011,600009,60601,900058,600952,632008,625605,624307,626126,613008,637212,624802,613009,691001,626149,603106,607803,624308,629704,642120,641664,623601,625705,609802,629301,606207,625026,621005,606111,625025,621010,636101,627102,641301,620026,650010,500045,606611,601203,62001,609811,629269,632012,624219,624007,632506,612610,603308,628952,625709,629403,929193,613102,627103,642004,400072,411057,560038,627602,642101,627827,628203,621804,533222,695006,390002,628714,629402,682024,629521,627201,627107,625008,626122,400080,60016,639101,600601,610102,621114,638701,624709,625513,628601,627401,628712,560099,679533,625515,636705,629179,631102,613105,400051,629601,400710,400200,604208,629164,637102,682017,637001,621703,929803,637501,627856,639401,625015,605107,60010,600605,603115,605002,605305,6066,629702,620019,110017,600057,609803,382715,621213,695504,628613,122050,602001,624208,606604,627604,411030,600068,629170,686001,400067,636903,662002,627106,562106,625631,642109,607303,636102,752013,641652];let wo=null;function X0(){return wo||(wo=new Set(Z0.map(a=>a.toString()))),wo}function ex(a){const i=a.toString().trim();return i?X0().has(i):!1}function Oo(a){const i=a.trim();if(!i)return{isValid:!1,isServiceable:!1,error:"PIN code is required"};if(!/^\d+$/.test(i))return{isValid:!1,isServiceable:!1,error:"PIN code must contain only digits"};if(i.length!==6)return{isValid:!1,isServiceable:!1,error:"PIN code must be 6 digits"};const o=ex(i);return{isValid:!0,isServiceable:o,error:o?void 0:`Service not available in area ${i} yet`}}function tx(){const[a,i]=T.useState(""),[o,c]=T.useState(!1),[d,m]=T.useState(!1),[h,A]=T.useState(null),[p,g]=T.useState(null);T.useMemo(()=>a?Oo(a):null,[a]);const v=T.useCallback(async()=>{if(a.length!==6){A("PIN code must be 6 digits");return}m(!0),A(null);try{await new Promise(S=>setTimeout(S,800));const I=Oo(a);g(I),I.isValid?(c(I.isServiceable),I.isServiceable||A(I.error||"Service not available in your area yet")):(A(I.error||"Invalid PIN code"),c(!1))}catch{A("Failed to check serviceability. Please try again."),c(!1)}finally{m(!1)}},[a]),y=T.useCallback(()=>{i(""),c(!1),A(null),g(null)},[]);return{pincode:a,isServiceable:o,isChecking:d,error:h,setPincode:i,checkServiceability:v,reset:y,validationResult:p}}async function Oi({subject:a,body:i,replyTo:o}){const c=await fetch("/api/send-mail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subject:a,body:i,replyTo:o})});if(!c.ok){const d=await c.json().catch(()=>null),m=(d==null?void 0:d.error)||"Failed to send email.";throw new Error(m)}return c.json()}function sf({onCovered:a,compact:i=!1}){const{pincode:o,setPincode:c,isChecking:d,checkServiceability:m,validationResult:h}=tx(),[A,p]=T.useState(""),[g,v]=T.useState(!1),[y,I]=T.useState(null),[S,H]=T.useState(!1),[O,D]=T.useState("idle");T.useEffect(()=>{h&&!d&&(h.isServiceable?(D("covered"),a==null||a(o)):D("not-covered"))},[h,d,o,a]);const b=async()=>{o.length===6&&(D("checking"),await m())},K=async()=>{if(A){I(null),H(!0);try{await Oi({subject:`Coverage notify request for ${o||"unknown PIN"}`,body:[`PIN code: ${o||"N/A"}`,`Notify email: ${A}`,"","A user requested coverage notification when this area becomes serviceable."].join(`
`)}),v(!0)}catch(G){console.error(G),I("Unable to send notification request. Please try again later.")}finally{H(!1)}}};return l.jsxs("div",{className:`flex flex-col gap-4 ${i?"":"max-w-lg"}`,children:[l.jsxs("div",{className:"flex gap-2",children:[l.jsxs("div",{className:"flex-1 relative",children:[l.jsx(ln,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"}),l.jsx("input",{type:"text",value:o,onChange:G=>{c(G.target.value.replace(/\D/g,"").slice(0,6)),O!=="idle"&&O!=="checking"&&D("idle"),v(!1)},onKeyDown:G=>G.key==="Enter"&&b(),placeholder:"Enter your PIN code",className:"w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"})]}),l.jsx("button",{onClick:b,disabled:o.length!==6||O==="checking",className:`px-6 py-3 rounded-xl text-sm transition-all cursor-pointer flex items-center gap-2 shrink-0 ${o.length===6&&O!=="checking"?"bg-primary text-white hover:bg-[#8E1B22]":"bg-gray-200 text-gray-400 cursor-not-allowed"}`,children:O==="checking"?l.jsx(bo,{className:"w-4 h-4 animate-spin"}):"Check"})]}),O==="covered"&&l.jsxs("div",{className:"flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl animate-in fade-in",children:[l.jsx(Li,{className:"w-5 h-5 text-green-600 shrink-0 mt-0.5"}),l.jsxs("div",{children:[l.jsxs("p",{className:"text-sm text-green-800",children:["Great news! Cherrinet is available in your area (",o,")."]}),l.jsx("p",{className:"text-xs text-green-600 mt-1",children:"High-speed fiber broadband can be installed at your location."})]})]}),O==="not-covered"&&l.jsxs("div",{className:"flex flex-col gap-3",children:[l.jsxs("div",{className:"flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl animate-in fade-in",children:[l.jsx($g,{className:"w-5 h-5 text-amber-600 shrink-0 mt-0.5"}),l.jsxs("div",{children:[l.jsxs("p",{className:"text-sm text-amber-800",children:["We're not in your area yet (",o,"), but we're expanding fast!"]}),l.jsx("p",{className:"text-xs text-amber-600 mt-1",children:"Sign up below and we'll notify you when we arrive."})]})]}),g?l.jsxs("div",{className:"flex items-center gap-2 p-3 bg-green-50 rounded-xl text-sm text-green-700",children:[l.jsx(Li,{className:"w-4 h-4"}),"We'll notify you at ",A," when coverage is available!"]}):l.jsxs("div",{className:"flex flex-col gap-3",children:[l.jsxs("div",{className:"flex gap-2",children:[l.jsx("input",{type:"email",value:A,onChange:G=>p(G.target.value),placeholder:"Enter your email for updates",className:"flex-1 px-4 py-3 rounded-xl bg-input-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"}),l.jsx("button",{onClick:K,disabled:!A||S,className:`px-5 py-3 rounded-xl text-sm transition-all cursor-pointer flex items-center gap-2 shrink-0 ${A&&!S?"bg-foreground text-white hover:bg-gray-800":"bg-gray-200 text-gray-400 cursor-not-allowed"}`,children:S?l.jsx(bo,{className:"w-4 h-4 animate-spin"}):l.jsxs(l.Fragment,{children:[l.jsx(Dg,{className:"w-4 h-4"}),"Notify Me"]})})]}),y&&l.jsx("p",{className:"text-sm text-destructive",children:y})]})]})]})}const rx=[{icon:Ci,title:"Lightning Fast",desc:"Speeds up to 1 Gbps, with uploads as fast as your downloads. Built for streaming, gaming, and everything in between."},{icon:af,title:"99.9% Uptime",desc:"Always on, always reliable. Backed by redundant fiber infrastructure you can count on, every hour of the day."},{icon:Qm,title:"24/7 Support",desc:"Real humans, ready to help. Whenever you need us, day or night."},{icon:Zm,title:"Free Installation",desc:"We set it all up at no cost. No hidden charges, no fine print, no surprises."}],ax=[{value:"10+ Years",label:"Powering Homes"},{value:"99.9%",label:"Network Uptime"},{value:"200K+",label:"Active Subscribers"},{value:"4.8/5",label:"Customer Rating"}],nx=[{name:"Budget Plan",tagline:"50 Mbps for light browsing",speed:"50",price:"479",data:"Unlimited",ott:["Jio","Prime","Sony liv","Z5"],benefits:["Ideal for browsing and social media","Unlimited data","Free router included"]},{name:"Family Plan",tagline:"100 Mbps for family streaming",speed:"100",price:"679",data:"Unlimited",ott:["Jio","Prime","Sony liv","Z5"],benefits:["Perfect for multiple users","Unlimited data","Free dual-band router"]},{name:"Premium Plan",tagline:"150 Mbps for heavy streaming",speed:"150",price:"799",popular:!0,data:"Unlimited",ott:["Jio","Prime","Sony liv","Z5"],benefits:["Great for 4K streaming","Unlimited data","High-performance router included"]},{name:"Premium Plan",tagline:"200 Mbps for gaming and work",speed:"200",price:"999",data:"Unlimited",ott:["Jio","Prime","Sony liv","Z5"],benefits:["Optimized for gaming and remote work","Unlimited data","Free Wi-Fi 6 router"]},{name:"Premium Plan",tagline:"500 Mbps for large homes",speed:"500",price:"1199",data:"Unlimited",ott:["Jio","Prime","Sony liv","Z5"],benefits:["Two routers included","Unlimited data","Best for multiple streaming devices"]},{name:"Power Plan",tagline:"1000 Mbps for premium users",speed:"1000",price:"1999",data:"Unlimited",ott:["Jio","Prime","Sony liv","Z5"],benefits:["Ultimate speed for big homes and offices","Unlimited data","Two high-speed routers included"]}];function om(){return l.jsxs("div",{className:"flex flex-col",children:[l.jsxs("section",{className:"hero-section relative overflow-hidden bg-[#1a2f58] md:bg-gradient-to-br md:from-gray-900 md:via-gray-900 md:to-[#3A0A0E]",children:[l.jsx("div",{className:"hidden md:block absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent"}),l.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 md:py-28 lg:py-36",children:l.jsxs("div",{className:"max-w-2xl flex flex-col gap-6",children:[l.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full w-fit",children:[l.jsx(Y0,{className:"w-4 h-4 text-[#D1444C]"}),l.jsx("span",{className:"text-sm text-[#F5D7D9]",children:"India's Most Trusted Fibernet Provider"})]}),l.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl text-white leading-tight",children:[l.jsx("span",{className:"text-[#D1444C]",children:"Blazing Fast Fibre"}),l.jsx("br",{}),"Made for the Way You Live Online."]}),l.jsx("p",{className:"text-lg text-gray-300 max-w-lg",children:"Stream. Game. Work from home. Cherrinet's pure fiber-optic broadband keeps it all running smooth."}),l.jsxs("div",{className:"mt-2 flex flex-col gap-3",children:[l.jsx("p",{className:"text-sm text-gray-400",children:"Check if we're available in your area:"}),l.jsx(sf,{compact:!0})]}),l.jsxs("div",{className:"flex items-center gap-6 mt-4",children:[l.jsxs(Oe,{to:"/plans",className:"flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl text-sm hover:bg-[#8E1B22] transition-colors",children:["View Plans",l.jsx(Ct,{className:"w-4 h-4"})]}),l.jsxs("a",{href:"#features",className:"flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm",children:[l.jsx("div",{className:"w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center",children:l.jsx(N0,{className:"w-4 h-4 ml-0.5"})}),"Watch Demo"]})]})]})}),l.jsxs("div",{className:"block md:hidden w-full relative -mt-1",children:[l.jsx("div",{className:"absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1a2f58] to-transparent pointer-events-none"}),l.jsx(il,{src:"/images/Mob Hero cherrinet.png",alt:"Cherrinet Banner",className:"w-full h-auto"})]})]}),l.jsx("section",{className:"bg-white border-b border-border",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:l.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-8",children:ax.map((a,i)=>l.jsxs("div",{className:"flex flex-col items-center gap-1 text-center",children:[l.jsx("span",{className:"text-3xl lg:text-4xl text-primary",children:a.value}),l.jsx("span",{className:"text-sm text-muted-foreground",children:a.label})]},i))})})}),l.jsx("section",{id:"features",className:"bg-muted/40",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center mb-14",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Why Cherrinet"}),l.jsx("h2",{className:"text-3xl lg:text-4xl text-foreground",children:"Built for the Way You Live Online"}),l.jsxs("p",{className:"text-muted-foreground max-w-md",children:["Streaming, gaming, working, learning.",l.jsx("br",{}),"Cherrinet delivers pure fiber-optic internet you can rely on, every single day."]})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:rx.map((a,i)=>l.jsxs("div",{className:"flex flex-col gap-4 p-6 bg-white rounded-2xl border border-border hover:shadow-lg hover:border-primary/20 transition-all",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-secondary flex items-center justify-center",children:l.jsx(a.icon,{className:"w-6 h-6 text-primary"})}),l.jsx("h3",{className:"text-foreground",children:a.title}),l.jsx("p",{className:"text-sm text-muted-foreground",children:a.desc})]},i))})]})}),l.jsx("section",{className:"bg-white",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center mb-14",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Plans"}),l.jsx("h2",{className:"text-3xl lg:text-4xl text-foreground",children:"A Plan for Every Home"}),l.jsx("p",{className:"text-muted-foreground max-w-md",children:"From casual browsing to heavy gaming, solo work-from-home to full-house streaming, there's a Cherrinet plan that fits the way you live."})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch",children:nx.slice(0,3).map((a,i)=>{var o;return l.jsxs("div",{className:`relative flex flex-col gap-5 p-7 rounded-2xl border-2 transition-all hover:shadow-lg ${a.popular?"border-primary bg-secondary/30 shadow-md":"border-border hover:border-primary/30"}`,children:[a.popular&&l.jsx("span",{className:"absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full",children:"Most Popular"}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:a.name}),l.jsx("p",{className:"text-sm text-muted-foreground",children:a.tagline})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:"text-4xl text-foreground",children:a.speed}),l.jsx("span",{className:"text-sm text-muted-foreground",children:"Mbps"})]}),l.jsxs("div",{className:"flex items-baseline gap-0.5 pb-4 border-b border-border",children:[l.jsx("span",{className:"text-sm text-muted-foreground",children:"₹"}),l.jsx("span",{className:"text-3xl text-foreground",children:a.price}),l.jsx("span",{className:"text-sm text-muted-foreground",children:"/month"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Ci,{className:"w-4 h-4 text-primary"}),l.jsxs("span",{className:"text-sm text-foreground",children:[a.data," Data"]})]}),l.jsx("ul",{className:"flex flex-col gap-2.5",children:a.benefits.map((c,d)=>l.jsxs("li",{className:"flex items-start gap-2",children:[l.jsx(Jm,{className:"w-4 h-4 text-primary mt-0.5 shrink-0"}),l.jsx("span",{className:"text-sm text-foreground",children:c})]},d))}),((o=a.ott)==null?void 0:o.length)>0&&l.jsxs("div",{className:"flex flex-col gap-2 pt-3 border-t border-border",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(O0,{className:"w-4 h-4 text-primary"}),l.jsx("span",{className:"text-xs text-muted-foreground uppercase tracking-wider",children:"OTT Included"})]}),l.jsx("div",{className:"flex flex-wrap gap-2",children:a.ott.map((c,d)=>l.jsxs("div",{className:"flex items-center gap-2 rounded-xl border border-border bg-white px-2 py-2",children:[l.jsx("img",{src:`/OTT/${encodeURIComponent(c)}.svg`,alt:c,className:"h-6 w-auto object-contain"}),l.jsx("span",{className:"text-xs text-muted-foreground",children:c})]},d))})]}),l.jsx(Oe,{to:"/plans",className:`mt-auto w-full py-2.5 rounded-xl text-sm text-center transition-colors ${a.popular?"bg-primary text-white hover:bg-[#8E1B22]":"bg-foreground text-white hover:bg-gray-800"}`,children:"Learn More"})]},i)})}),l.jsx("div",{className:"text-center mt-8",children:l.jsxs(Oe,{to:"/plans",className:"inline-flex items-center gap-2 text-primary hover:text-[#8E1B22] transition-colors text-sm",children:["View all plans and compare",l.jsx(Ct,{className:"w-4 h-4"})]})})]})}),l.jsx("section",{className:"bg-gray-900 text-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[l.jsxs("div",{className:"flex flex-col gap-6",children:[l.jsx("span",{className:"text-sm text-[#D1444C] uppercase tracking-wider",children:"TRUSTED FROM DAY ONE"}),l.jsx("h2",{className:"text-3xl lg:text-4xl text-white",children:"Connecting Homes & Businesses Since 2015"}),l.jsx("p",{className:"text-gray-400 leading-relaxed",children:"For nearly a decade, Cherrinet has been delivering reliable fiber internet to over 150,000 homes and businesses. We're not just an ISP. We're the internet partner you can count on."}),l.jsxs("div",{className:"flex items-center gap-6 mt-2",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(nf,{className:"w-5 h-5 text-[#D1444C]"}),l.jsx("span",{className:"text-sm text-gray-300",children:"200K+ Users"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Og,{className:"w-5 h-5 text-[#D1444C]"}),l.jsx("span",{className:"text-sm text-gray-300",children:"TRAI Certified"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(t0,{className:"w-5 h-5 text-[#D1444C]"}),l.jsx("span",{className:"text-sm text-gray-300",children:"100+ Areas"})]})]}),l.jsxs(Oe,{to:"/about-us",className:"mt-2 inline-flex items-center gap-2 text-[#D1444C] hover:text-[#E47A82] transition-colors text-sm w-fit",children:["Learn more about us",l.jsx(Ct,{className:"w-4 h-4"})]})]}),l.jsx("div",{className:"rounded-2xl overflow-hidden",children:l.jsx(il,{src:"/images/chennai.jpg.jpeg",alt:"Chennai skyline",className:"w-full h-72 lg:h-96 object-cover"})})]})})}),l.jsx("section",{className:"bg-gradient-to-r from-[#B2222B] to-[#8E1B22]",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-6",children:[l.jsxs("div",{className:"flex flex-col gap-2 text-center lg:text-left",children:[l.jsx("h2",{className:"text-3xl text-white",children:"Ready to switch to Cherrinet?"}),l.jsx("p",{className:"text-[#FBEEEF]",children:"Get started in minutes. Free installation and no lock-in contracts."})]}),l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx(Oe,{to:"/plans",className:"bg-white text-primary px-7 py-3.5 rounded-xl text-sm hover:bg-gray-100 transition-colors",children:"Browse Plans"}),l.jsx(Oe,{to:"/cherrinet-coverage",className:"border border-white/40 text-white px-7 py-3.5 rounded-xl text-sm hover:bg-white/10 transition-colors",children:"Check Coverage"})]})]})})})]})}function of({plan:a,onSelect:i}){return l.jsxs("div",{className:`relative flex flex-col rounded-2xl border-2 transition-all hover:shadow-lg ${a.popular?"border-primary shadow-md shadow-[#F5D7D9]":"border-border hover:border-primary/30"}`,children:[a.popular&&l.jsxs("div",{className:"absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs flex items-center gap-1",children:[l.jsx(U0,{className:"w-3 h-3"}),"Most Popular"]}),l.jsxs("div",{className:"p-6 flex flex-col gap-4 flex-1",children:[l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Ci,{className:`w-5 h-5 ${a.popular?"text-primary":"text-muted-foreground"}`}),l.jsx("span",{className:"text-sm text-muted-foreground uppercase tracking-wider",children:a.name})]}),l.jsxs("div",{className:"flex items-baseline gap-1 mt-2",children:[l.jsx("span",{className:"text-4xl text-foreground",children:a.speed}),l.jsx("span",{className:"text-muted-foreground text-sm",children:"Mbps"})]})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:"text-sm text-muted-foreground",children:"₹"}),l.jsx("span",{className:"text-3xl text-foreground",children:a.price}),l.jsx("span",{className:"text-sm text-muted-foreground",children:"/month"})]}),l.jsxs("div",{className:"px-3 py-2 bg-muted rounded-lg text-sm text-center",children:[a.data," Data"]}),l.jsx("div",{className:"flex flex-col gap-2.5 mt-2",children:a.benefits.map((o,c)=>l.jsxs("div",{className:"flex items-start gap-2.5",children:[l.jsx("div",{className:"w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5",children:l.jsx(Jm,{className:"w-3 h-3 text-green-600"})}),l.jsx("span",{className:"text-sm text-muted-foreground",children:o})]},c))}),a.ott&&a.ott.length>0&&l.jsxs("div",{className:"mt-2 p-3 bg-secondary rounded-lg",children:[l.jsx("p",{className:"text-xs text-secondary-foreground mb-2",children:"Bundled OTT"}),l.jsx("div",{className:"flex flex-wrap gap-2",children:a.ott.map((o,c)=>l.jsxs("div",{className:"flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2",children:[l.jsx("img",{src:`/OTT/${encodeURIComponent(o)}.svg`,alt:o,className:"h-6 w-auto object-contain"}),l.jsx("span",{className:"text-xs text-muted-foreground",children:o})]},c))}),l.jsx("p",{className:"text-xs text-muted-foreground mt-2",children:"All OTTs available from Rs.29/month"})]})]}),l.jsx("div",{className:"p-6 pt-0",children:l.jsx("button",{onClick:()=>i(a),className:`w-full py-3 rounded-xl text-sm transition-colors cursor-pointer ${a.popular?"bg-primary text-white hover:bg-[#8E1B22]":"bg-foreground text-white hover:bg-gray-800"}`,children:"Choose Plan"})})]})}function uf({selectedPlan:a,onClose:i}){const[o,c]=T.useState({name:"",phone:"",email:"",pincode:"",plan:(a==null?void 0:a.name)||""}),[d,m]=T.useState({}),[h,A]=T.useState({}),[p,g]=T.useState(!1),[v,y]=T.useState(!1),[I,S]=T.useState(null),H=G=>{const ae={};if(G.name.trim()?G.name.trim().length<2&&(ae.name="Name must be at least 2 characters"):ae.name="Name is required",G.phone.trim()?/^[6-9]\d{9}$/.test(G.phone.trim())||(ae.phone="Enter a valid 10-digit Indian mobile number"):ae.phone="Phone number is required",G.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(G.email)&&(ae.email="Enter a valid email address"),!G.pincode.trim())ae.pincode="PIN code is required";else{const oe=Oo(G.pincode.trim());oe.isValid?oe.isServiceable||(ae.pincode="Service not available in your area yet. You can sign up for notifications on the Coverage page."):ae.pincode=oe.error||"Invalid PIN code"}return ae},O=(G,ae)=>{const oe={...o,[G]:ae};if(c(oe),h[G]){const ye=H(oe);m(U=>({...U,[G]:ye[G]}))}},D=G=>{A(oe=>({...oe,[G]:!0}));const ae=H(o);m(oe=>({...oe,[G]:ae[G]}))},b=()=>{const G=H(o);return Object.keys(G).length===0&&o.name&&o.phone&&o.pincode},K=async G=>{var U;G.preventDefault(),A({name:!0,phone:!0,email:!0,pincode:!0});const ae=H(o);if(m(ae),Object.keys(ae).length>0)return;const oe=`Cherrinet Lead Request - ${o.name}`,ye=[`Name: ${o.name}`,`Phone: +91 ${o.phone}`,`Email: ${o.email||"N/A"}`,`Pincode: ${o.pincode}`,`Selected Plan: ${o.plan||"N/A"}`,"","Please contact this lead to confirm installation details.","","Source: Cherrinet website lead capture form"].join(`
`);y(!0),S(null);try{await Oi({subject:oe,body:ye,replyTo:(U=o.email)!=null&&U.trim()?o.email.trim():void 0}),g(!0)}catch(ie){console.error(ie),S("Unable to send your request. Please try again later.")}finally{y(!1)}};return p?l.jsxs("div",{className:"flex flex-col items-center gap-4 py-10 px-6 text-center",children:[l.jsx("div",{className:"w-16 h-16 rounded-full bg-green-50 flex items-center justify-center",children:l.jsx(Li,{className:"w-8 h-8 text-green-600"})}),l.jsx("h3",{className:"text-foreground",children:"Thank You!"}),l.jsx("p",{className:"text-sm text-muted-foreground max-w-sm",children:"We've received your request. Our team will contact you within 24 hours to set up your connection."}),a&&l.jsxs("div",{className:"mt-2 px-4 py-2 bg-secondary rounded-lg text-sm text-secondary-foreground",children:["Selected Plan: ",a.name," — ",a.speed," Mbps"]}),i&&l.jsx("button",{onClick:i,className:"mt-4 px-6 py-2 bg-primary text-white rounded-lg text-sm hover:bg-[#8E1B22] transition-colors cursor-pointer",children:"Close"})]}):l.jsxs("form",{onSubmit:K,className:"flex flex-col gap-5",children:[a&&l.jsxs("div",{className:"p-4 bg-secondary rounded-xl flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-muted-foreground",children:"Selected Plan"}),l.jsxs("p",{className:"text-foreground",children:[a.name," — ",a.speed," Mbps"]})]}),l.jsxs("p",{className:"text-foreground",children:["₹",a.price,"/mo"]})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsxs("label",{className:"text-sm text-foreground",children:["Full Name ",l.jsx("span",{className:"text-primary",children:"*"})]}),l.jsx("input",{type:"text",value:o.name,onChange:G=>O("name",G.target.value),onBlur:()=>D("name"),placeholder:"Enter your full name",className:`px-4 py-3 rounded-xl bg-input-background border transition-colors text-sm ${h.name&&d.name?"border-destructive focus:ring-destructive/20":h.name&&!d.name&&o.name?"border-green-500 focus:ring-green-500/20":"border-border focus:ring-primary/20"} focus:outline-none focus:ring-2`}),h.name&&d.name&&l.jsxs("div",{className:"flex items-center gap-1.5 text-destructive",children:[l.jsx(Pi,{className:"w-3.5 h-3.5"}),l.jsx("span",{className:"text-xs",children:d.name})]})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsxs("label",{className:"text-sm text-foreground",children:["Phone Number ",l.jsx("span",{className:"text-primary",children:"*"})]}),l.jsxs("div",{className:"flex",children:[l.jsx("span",{className:"px-3 py-3 bg-muted border border-r-0 border-border rounded-l-xl text-sm text-muted-foreground flex items-center",children:"+91"}),l.jsx("input",{type:"tel",value:o.phone,onChange:G=>O("phone",G.target.value.replace(/\D/g,"").slice(0,10)),onBlur:()=>D("phone"),placeholder:"98765 43210",className:`flex-1 px-4 py-3 rounded-r-xl bg-input-background border transition-colors text-sm ${h.phone&&d.phone?"border-destructive focus:ring-destructive/20":h.phone&&!d.phone&&o.phone?"border-green-500 focus:ring-green-500/20":"border-border focus:ring-primary/20"} focus:outline-none focus:ring-2`})]}),h.phone&&d.phone&&l.jsxs("div",{className:"flex items-center gap-1.5 text-destructive",children:[l.jsx(Pi,{className:"w-3.5 h-3.5"}),l.jsx("span",{className:"text-xs",children:d.phone})]})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsxs("label",{className:"text-sm text-foreground",children:["Email ",l.jsx("span",{className:"text-muted-foreground text-xs",children:"(optional)"})]}),l.jsx("input",{type:"email",value:o.email,onChange:G=>O("email",G.target.value),onBlur:()=>D("email"),placeholder:"you@example.com",className:`px-4 py-3 rounded-xl bg-input-background border transition-colors text-sm ${h.email&&d.email?"border-destructive focus:ring-destructive/20":h.email&&!d.email&&o.email?"border-green-500 focus:ring-green-500/20":"border-border focus:ring-primary/20"} focus:outline-none focus:ring-2`}),h.email&&d.email&&l.jsxs("div",{className:"flex items-center gap-1.5 text-destructive",children:[l.jsx(Pi,{className:"w-3.5 h-3.5"}),l.jsx("span",{className:"text-xs",children:d.email})]})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsxs("label",{className:"text-sm text-foreground",children:["PIN Code ",l.jsx("span",{className:"text-primary",children:"*"})]}),l.jsx("input",{type:"text",value:o.pincode,onChange:G=>O("pincode",G.target.value.replace(/\D/g,"").slice(0,6)),onBlur:()=>D("pincode"),placeholder:"600001",className:`px-4 py-3 rounded-xl bg-input-background border transition-colors text-sm ${h.pincode&&d.pincode?"border-destructive focus:ring-destructive/20":h.pincode&&!d.pincode&&o.pincode?"border-green-500 focus:ring-green-500/20":"border-border focus:ring-primary/20"} focus:outline-none focus:ring-2`}),h.pincode&&d.pincode&&l.jsxs("div",{className:"flex items-center gap-1.5 text-destructive",children:[l.jsx(Pi,{className:"w-3.5 h-3.5"}),l.jsx("span",{className:"text-xs",children:d.pincode})]})]}),I&&l.jsx("div",{className:"rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive",children:I}),l.jsx("button",{type:"submit",disabled:!b()||v,className:`w-full py-3.5 rounded-xl text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${b()&&!v?"bg-primary text-white hover:bg-[#8E1B22]":"bg-gray-200 text-gray-400 cursor-not-allowed"}`,children:v?l.jsxs(l.Fragment,{children:[l.jsx(bo,{className:"w-4 h-4 animate-spin"}),"Submitting..."]}):"Submit Request"})]})}const lx=[{id:"budget",name:"Budget Plan",speed:"50",price:479,data:"Unlimited",ott:["Jio","Prime","Sony liv","Z5"],benefits:["Ideal for light browsing and social media","Unlimited data","Free router included","No installation charges"]},{id:"family",name:"Family Plan",speed:"100",price:679,data:"Unlimited",ott:["Jio","Prime","Sony liv","Z5"],benefits:["Perfect for family streaming","Unlimited data","Free dual-band router","No installation charges"]},{id:"premium-150",name:"Premium Plan",speed:"150",price:799,data:"Unlimited",ott:["Jio","Prime","Sony liv","Z5"],benefits:["Great for heavy streaming","Unlimited data","High-performance router included"],popular:!0},{id:"premium-200",name:"Premium Plan",speed:"200",price:999,data:"Unlimited",ott:["Jio","Prime","Sony liv","Z5"],benefits:["Optimized for gaming and WFH","Unlimited data","Free Wi-Fi 6 router"]},{id:"premium-500",name:"Premium Plan",speed:"500",price:1199,data:"Unlimited",ott:["Jio","Prime","Sony liv","Z5"],benefits:["Two routers included","Unlimited data","Best for multiple streaming devices"]},{id:"power",name:"Power Plan",speed:"1000",price:1999,data:"Unlimited",ott:["Jio","Prime","Sony liv","Z5"],benefits:["Ultimate speed for large homes and offices","Unlimited data","Two high-speed routers included"]}],ix=["All","Up to 100 Mbps","100-300 Mbps","300+ Mbps"],sx=["All","Under ₹600","₹600-₹900","₹900+"];function ox(){const[a,i]=T.useState(null),[o,c]=T.useState("All"),[d,m]=T.useState("All"),[h,A]=T.useState(!1),p=lx.filter(v=>{const y=parseInt(v.speed),I=v.price;let S=!0;o==="Up to 100 Mbps"?S=y<=100:o==="100-300 Mbps"?S=y>=100&&y<=300:o==="300+ Mbps"&&(S=y>300);let H=!0;return d==="Under ₹600"?H=I<600:d==="₹600-₹900"?H=I>=600&&I<=900:d==="₹900+"&&(H=I>900),S&&H}),g=v=>{i(v),A(!0)};return l.jsxs("div",{className:"flex flex-col",children:[l.jsx("section",{className:"bg-gradient-to-b from-secondary to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Plans & Pricing"}),l.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl text-foreground",children:"Choose Your Perfect Plan"}),l.jsx("p",{className:"text-muted-foreground max-w-lg",children:"All plans include unlimited data, free installation, and free Wi-Fi router. No hidden charges."})]})})}),l.jsx("section",{className:"bg-white border-b border-border sticky top-16 z-30",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:l.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[l.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[l.jsx(S0,{className:"w-4 h-4"}),"Filter:"]}),l.jsxs("div",{className:"flex flex-wrap gap-2",children:[l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:"text-xs text-muted-foreground",children:"Speed:"}),l.jsx("div",{className:"flex gap-1",children:ix.map(v=>l.jsx("button",{onClick:()=>c(v),className:`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${o===v?"bg-primary text-white":"bg-muted text-muted-foreground hover:bg-gray-200"}`,children:v},v))})]}),l.jsx("div",{className:"w-px h-6 bg-border hidden sm:block"}),l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:"text-xs text-muted-foreground",children:"Budget:"}),l.jsx("div",{className:"flex gap-1",children:sx.map(v=>l.jsx("button",{onClick:()=>m(v),className:`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${d===v?"bg-primary text-white":"bg-muted text-muted-foreground hover:bg-gray-200"}`,children:v},v))})]})]})]})})}),l.jsx("section",{className:"bg-muted/30",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:p.length>0?l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[p.map(v=>l.jsx(of,{plan:v,onSelect:g},v.id)),l.jsxs("div",{className:"relative flex flex-col gap-5 p-7 rounded-2xl border-2 border-dashed border-primary/40 bg-gradient-to-br from-secondary/50 to-white hover:shadow-lg hover:border-primary transition-all",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center",children:l.jsx(bi,{className:"w-5 h-5 text-primary"})}),l.jsx("span",{className:"text-xs px-2 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wider",children:"Tailor-made"})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Custom Plan"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Need something different? Build a plan around your needs."})]}),l.jsx("div",{className:"flex items-baseline gap-1 pb-4 border-b border-border",children:l.jsx("span",{className:"text-3xl text-foreground",children:"Let's Talk"})}),l.jsx("ul",{className:"flex flex-col gap-2.5",children:["Custom speeds beyond 1 Gbps","Add-on mesh extenders & switches","Static IPs & dedicated bandwidth","Multi-location bundling","Pricing tailored to your usage"].map(v=>l.jsxs("li",{className:"flex items-start gap-2",children:[l.jsx(Co,{className:"w-4 h-4 text-primary mt-0.5 shrink-0"}),l.jsx("span",{className:"text-sm text-foreground",children:v})]},v))}),l.jsxs("button",{type:"button",onClick:()=>{i(null),A(!0)},className:"mt-auto w-full py-2.5 rounded-xl text-sm text-center bg-primary text-white hover:bg-[#8E1B22] transition-colors flex items-center justify-center gap-2 cursor-pointer",children:["Enquire Now",l.jsx(Ct,{className:"w-4 h-4"})]})]})]}):l.jsxs("div",{className:"flex flex-col items-center gap-3 py-16 text-center",children:[l.jsx("p",{className:"text-muted-foreground",children:"No plans match your filters."}),l.jsx("button",{onClick:()=>{c("All"),m("All")},className:"text-sm text-primary hover:text-[#8E1B22] cursor-pointer",children:"Clear all filters"})]})})}),h&&l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:l.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 relative",children:[l.jsx("button",{onClick:()=>A(!1),className:"absolute top-4 right-4 p-1.5 rounded-lg hover:bg-muted transition-colors cursor-pointer",children:l.jsx(sn,{className:"w-5 h-5 text-muted-foreground"})}),l.jsx("h2",{className:"text-foreground mb-1",children:"Get Started"}),l.jsx("p",{className:"text-sm text-muted-foreground mb-6",children:"Fill in your details and we'll set up your connection."}),l.jsx(uf,{selectedPlan:a,onClose:()=>A(!1)})]})}),l.jsx("section",{className:"bg-white",children:l.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center",children:[l.jsx("h3",{className:"text-foreground mb-2",children:"Have Questions?"}),l.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"All plans include unlimited data, free installation, and a free Wi-Fi router. Taxes extra as applicable. Plans are subject to coverage availability."}),l.jsx("a",{href:"/support",className:"text-sm text-primary hover:text-[#8E1B22] transition-colors",children:"Visit our FAQ page for more details →"})]})})]})}function ux({open:a,onClose:i,areas:o}){const[c,d]=T.useState(""),m=T.useMemo(()=>{const h=c.trim().toLowerCase();return o.filter(A=>{const p=A.toLowerCase();return!h||p.includes(h)})},[o,c]);return a?l.jsx("div",{className:"fixed inset-0 z-50 flex items-start justify-center p-6 bg-black/50 overflow-auto",children:l.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-auto p-6",children:[l.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-lg font-semibold",children:"All Coverage Areas"}),l.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Search across serviceable areas."})]}),l.jsx("button",{onClick:i,className:"inline-flex items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-primary/90",children:"Close"})]}),l.jsx("div",{className:"mb-4",children:l.jsxs("label",{className:"relative w-full block",children:[l.jsx(rf,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"}),l.jsx("input",{type:"search",value:c,onChange:h=>d(h.target.value),placeholder:"Search coverage areas",className:"w-full rounded-2xl border border-border bg-background py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"})]})}),l.jsxs("div",{className:"mb-4 text-sm text-muted-foreground",children:[m.length," area",m.length===1?"":"s"," found"]}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:m.map(h=>l.jsx("div",{className:"rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm text-foreground",children:h},h))})]})}):null}const cx=`
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
KARUNGULAM `,Qo=Array.from(new Set(cx.split(/\r?\n/).map(a=>a.trim()).filter(Boolean))),dx=[{id:"budget",name:"Budget Plan",speed:"50",price:479,data:"Unlimited",benefits:["Ideal for browsing and social media","Unlimited data","Free router included"],ott:["Jio","Prime","Sony liv","Z5"]},{id:"family",name:"Family Plan",speed:"100",price:679,data:"Unlimited",benefits:["Perfect for multiple users","Unlimited data","Free dual-band router"],ott:["Jio","Prime","Sony liv","Z5"],popular:!0},{id:"premium-150",name:"Premium Plan",speed:"150",price:799,data:"Unlimited",benefits:["Great for 4K streaming","Unlimited data","High-performance router included"],ott:["Jio","Prime","Sony liv","Z5"]}],um=Qo.slice(0,18),mx=Qo.length,cm=28;function dm(){const[a,i]=T.useState(!1),[o,c]=T.useState(!1),[d,m]=T.useState(null),[h,A]=T.useState(!1),p=()=>{i(!0)};return l.jsxs("div",{className:"flex flex-col",children:[l.jsx("section",{className:"relative overflow-hidden bg-gradient-to-br from-[#FBEEEF] via-white to-secondary/40 border-b border-border min-h-[60vh] lg:min-h-[72vh]",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch h-full",children:[l.jsxs("div",{className:"flex flex-col gap-5 justify-center px-4 py-8 lg:py-12",children:[l.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full w-fit",children:[l.jsx(ln,{className:"w-4 h-4 text-primary"}),l.jsx("span",{className:"text-sm text-primary",children:"Tamil Nadu Coverage"})]}),l.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight",children:["Stay Connected,",l.jsx("br",{}),l.jsx("span",{className:"text-primary",children:"We are Here"})]}),l.jsxs("p",{className:"text-muted-foreground max-w-md",children:["Cherrinet's fiber network spans across Tamil Nadu — bringing blazing fast, reliable internet to ",cm,"+ districts and growing every day."]}),l.jsxs("div",{className:"flex items-center gap-6 mt-2",children:[l.jsxs("div",{className:"flex flex-col",children:[l.jsxs("span",{className:"text-2xl text-primary",children:[cm,"+"]}),l.jsx("span",{className:"text-xs text-muted-foreground uppercase tracking-wider",children:"Districts"})]}),l.jsx("div",{className:"w-px h-10 bg-border"}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("span",{className:"text-2xl text-primary",children:"150K+"}),l.jsx("span",{className:"text-xs text-muted-foreground uppercase tracking-wider",children:"Subscribers"})]}),l.jsx("div",{className:"w-px h-10 bg-border"}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("span",{className:"text-2xl text-primary",children:"100+"}),l.jsx("span",{className:"text-xs text-muted-foreground uppercase tracking-wider",children:"Cities"})]})]})]}),l.jsx("div",{className:"flex justify-center items-center h-full overflow-hidden rounded-3xl shadow-xl border border-border bg-white min-h-0 mt-6 lg:mt-12",children:l.jsx("img",{src:"/images/map.png",alt:"Tamil Nadu coverage map",className:"h-full w-full object-cover"})})]})})}),l.jsx("section",{className:"bg-gradient-to-b from-secondary to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Coverage"}),l.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl text-foreground",children:"Check Availability"}),l.jsx("p",{className:"text-muted-foreground max-w-lg",children:"Enter your PIN code to check if Cherrinet fiber broadband is available in your area."})]})})}),l.jsx("section",{className:"bg-white",children:l.jsx("div",{className:"max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:l.jsxs("div",{className:"p-8 bg-muted/40 rounded-2xl border border-border",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center",children:l.jsx(ln,{className:"w-5 h-5 text-primary"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-foreground",children:"Service Availability Check"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Enter your 6-digit Chennai PIN code"})]})]}),l.jsx(sf,{onCovered:p})]})})}),a&&l.jsx("section",{className:"bg-green-50/50 border-t border-green-100",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[l.jsxs("div",{className:"flex flex-col items-center gap-2 text-center mb-8",children:[l.jsxs("div",{className:"flex items-center gap-2 text-green-700",children:[l.jsx(Li,{className:"w-5 h-5"}),l.jsx("span",{className:"text-sm uppercase tracking-wider",children:"Available in your area"})]}),l.jsx("h2",{className:"text-2xl text-foreground",children:"Eligible Plans"})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6",children:dx.map(g=>l.jsx("div",{className:"flex",children:l.jsx(of,{plan:g,onSelect:v=>{m(v),c(!0)}})},g.id))})]})}),l.jsx("section",{className:"bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Service Areas"}),l.jsx("h2",{className:"text-2xl text-foreground mt-2 mb-4",children:"Currently Serving"}),l.jsx("p",{className:"text-sm text-muted-foreground mb-6",children:"We're rapidly expanding across Chennai. Here are some of the areas we currently cover:"}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:um.map(g=>l.jsxs("div",{className:"flex items-center gap-2 px-3 py-2.5 bg-muted/50 rounded-lg",children:[l.jsx(ln,{className:"w-3.5 h-3.5 text-primary shrink-0"}),l.jsx("span",{className:"text-sm text-foreground",children:g})]},g))}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-4",children:["...and ",mx-um.length,"+ more localities across Chennai"]}),l.jsx("div",{className:"mt-4",children:l.jsx("button",{onClick:()=>A(!0),className:"text-sm px-3 py-2 bg-primary text-white rounded-lg",children:"View all areas"})})]}),l.jsx("div",{className:"rounded-2xl overflow-hidden",children:l.jsx(il,{src:"https://images.unsplash.com/photo-1667753980494-633cd2687af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGVubmFpJTIwSW5kaWElMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NzI1MjI3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",alt:"Chennai",className:"w-full h-80 object-cover"})})]})})}),o&&l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:l.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 relative",children:[l.jsx("button",{onClick:()=>c(!1),className:"absolute top-4 right-4 p-1.5 rounded-lg hover:bg-muted transition-colors cursor-pointer",children:"✕"}),l.jsx("h2",{className:"text-foreground mb-1",children:"Get Connected"}),l.jsx("p",{className:"text-sm text-muted-foreground mb-6",children:"Fill in your details to get started with Cherrinet."}),l.jsx(uf,{selectedPlan:d,onClose:()=>c(!1)})]})}),h&&l.jsx(ux,{open:h,onClose:()=>A(!1),areas:Qo})]})}const fx=!1,hx=[{icon:b0,title:"Customer First",desc:"Every decision starts with our customers."},{icon:n0,title:"Community Focused",desc:"Connecting people, homes and businesses."},{icon:o0,title:"Always Innovating",desc:"Continuously improving our network and services."},{icon:nf,title:"Built For Everyone",desc:" Reliable internet designed for modern life."}],mm=[{year:"2015",event:l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"font-semibold text-primary",children:"The Beginning"}),l.jsx("br",{}),"Started our journey with a vision to make reliable fiber connectivity more accessible."]})},{year:"2017",event:l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"font-semibold text-primary",children:"10,000 Connections Strong"}),l.jsx("br",{}),"Reached our first major subscriber milestone."]})},{year:"2019",event:l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"font-semibold text-primary",children:"Expanding Our Reach"}),l.jsx("br",{}),"Serving more homes across more communities than ever before."]})},{year:"2021",event:l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"font-semibold text-primary",children:"Stepping Into Gigabit Speeds"}),l.jsx("br",{}),"Launched high-speed plans designed for modern digital lifestyles."]})},{year:"2023",event:l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"font-semibold text-primary",children:"Trusted By Thousands"}),l.jsx("br",{}),"Crossed 100,000 subscribers and received industry recognition."]})},{year:"2025",event:l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"font-semibold text-primary",children:"Looking Ahead"}),l.jsx("br",{}),"Continuing to grow our network and deliver better connectivity experiences."]})}];function px(){return l.jsxs("div",{className:"flex flex-col",children:[l.jsx("section",{className:"relative bg-gradient-to-b from-secondary to-white overflow-hidden",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[l.jsxs("div",{className:"flex flex-col gap-5",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"About Cherrinet"}),l.jsxs("h1",{className:"text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight",children:["Connecting Homes.",l.jsx("br",{}),l.jsx("span",{className:"text-primary",children:"Powering Possibilities."})]}),l.jsx("p",{className:"text-muted-foreground leading-relaxed max-w-lg",children:"At Cherrinet, we believe a great internet should simply work. That's why we've spent years building a fiber network that delivers dependable speeds, seamless streaming and reliable connectivity for homes and businesses alike."}),l.jsxs("div",{className:"flex gap-8 mt-4",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-3xl text-primary",children:"150K+"}),l.jsxs("p",{className:"text-sm text-muted-foreground",children:["Connected Homes ",l.jsx("br",{}),"& Businesses"]})]}),l.jsxs("div",{children:[l.jsx("p",{className:"text-3xl text-primary",children:"100+"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Areas Covered"})]}),l.jsxs("div",{children:[l.jsx("p",{className:"text-3xl text-primary",children:"300+"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Team Members"})]})]})]}),l.jsx("div",{className:"rounded-2xl overflow-hidden shadow-xl",children:l.jsx(il,{src:"https://images.unsplash.com/photo-1770777843445-2a1621b1201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwd29ya2luZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNTIyNzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",alt:"Cherrinet team",className:"w-full h-72 lg:h-96 object-cover"})})]})})}),l.jsx("section",{className:"bg-white",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center mb-14",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"WHAT DRIVES US"}),l.jsx("h2",{className:"text-3xl text-foreground max-w-2xl",children:"Making reliable fiber connectivity accessible to everyone."})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:hx.map((a,i)=>l.jsxs("div",{className:"flex flex-col gap-4 p-6 rounded-2xl bg-muted/40 border border-border",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-secondary flex items-center justify-center",children:l.jsx(a.icon,{className:"w-6 h-6 text-primary"})}),l.jsx("h3",{className:"text-foreground",children:a.title}),l.jsx("p",{className:"text-sm text-muted-foreground",children:a.desc})]},i))})]})}),l.jsx("section",{className:"bg-muted/30",children:l.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center mb-14",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Milestones That Matter"}),l.jsx("h2",{className:"text-3xl text-foreground",children:"From our first connection to thousands, every milestone means better connectivity."})]}),l.jsx("div",{className:"flex flex-col gap-0",children:mm.map((a,i)=>l.jsxs("div",{className:"flex gap-6 items-start",children:[l.jsxs("div",{className:"flex flex-col items-center",children:[l.jsx("div",{className:"w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xs shrink-0",children:a.year.slice(2)}),i<mm.length-1&&l.jsx("div",{className:"w-0.5 h-12 bg-primary/20"})]}),l.jsxs("div",{className:"pb-8",children:[l.jsx("p",{className:"text-sm text-black font-semibold",children:a.year}),l.jsx("p",{className:"text-foreground text-sm mt-1",children:a.event})]})]},i))})]})}),fx,l.jsxs("section",{className:"relative h-64 sm:h-80 overflow-hidden",children:[l.jsx(il,{src:"/images/Cherrinet_image.png",alt:"Happy family",className:"w-full h-full object-cover"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"}),l.jsx("div",{className:"absolute inset-0 flex items-center py-20 sm:py-28",children:l.jsx("div",{className:"max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"max-w-xl flex flex-col gap-6",children:[l.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-fit",children:[l.jsx(bi,{className:"w-4 h-4 text-[#E47A82]"}),l.jsx("span",{className:"text-sm text-[#FBEEEF] uppercase tracking-wider",children:"Our Promise"})]}),l.jsxs("h2",{className:"text-3xl sm:text-4xl lg:text-5xl text-white leading-tight",children:["Seamless connectivity,",l.jsx("span",{className:"text-[#D1444C]",children:" every day."})]})]})})})]})]})}const Ax=[{category:"Getting Started",faqs:[{q:"How do I check if Cherrinet is available in my area?",a:"Visit our Coverage page and enter your 6-digit PIN code. You'll instantly see if our fiber network covers your locality. If we're not there yet, you can sign up for notifications."},{q:"What is the installation process?",a:"Once you sign up, our team will schedule an installation within 24-48 hours. A technician will visit your home, install the fiber cable, set up the ONT device and Wi-Fi router. The entire process takes about 1-2 hours."},{q:"Is there an installation fee?",a:"No! Installation is completely free for all plans. We also provide a free Wi-Fi router with every connection."}]},{category:"Plans & Billing",faqs:[{q:"Are there any hidden charges?",a:"Absolutely not. The price you see is what you pay (plus applicable GST at 18%). No hidden fees, no surprise charges."},{q:"Can I upgrade or downgrade my plan?",a:"Yes, you can change your plan at any time through our app or by contacting support. Changes take effect from your next billing cycle."},{q:"What payment methods do you accept?",a:"We accept UPI, debit/credit cards, net banking, auto-debit (NACH), and even cash payments at our service centers."},{q:"Is there a lock-in period?",a:"No lock-in contracts! You're free to cancel anytime. We believe in earning your loyalty through great service, not contracts."}]},{category:"Technical Support",faqs:[{q:"My internet is slow. What should I do?",a:"First, try restarting your router. If the issue persists, run a speed test at speedtest.net connected via ethernet cable. If speeds are below your plan, contact our support — we'll diagnose and fix it remotely or send a technician."},{q:"Why does my Wi-Fi signal drop in some rooms?",a:"This is usually due to distance from the router or interference. We recommend placing the router centrally. For larger homes, consider upgrading to our mesh Wi-Fi plans for whole-home coverage."},{q:"Do you provide a static IP address?",a:"Yes! Static IP is included free with Pro plans and above. For Starter and Essential plans, it's available as an add-on for ₹100/month."}]},{category:"OTT & Add-ons",faqs:[{q:"How do I access bundled OTT subscriptions?",a:"After activation, you'll receive login credentials for your bundled OTT services via SMS and email. You can use them on any device — phone, tablet, smart TV, or laptop."},{q:"Can I add more OTT subscriptions to my plan?",a:"Yes! Additional OTT services can be added to any plan at discounted rates through our app or by contacting support."}]}];function fm(){const[a,i]=T.useState(null),[o,c]=T.useState(""),d=fr(),m=A=>{i(a===A?null:A)};T.useEffect(()=>{if(d.hash==="#faq"){const A=document.getElementById("faq");A&&A.scrollIntoView({behavior:"smooth",block:"start"})}},[d.hash]);const h=Ax.map(A=>({...A,faqs:A.faqs.filter(p=>p.q.toLowerCase().includes(o.toLowerCase())||p.a.toLowerCase().includes(o.toLowerCase()))})).filter(A=>A.faqs.length>0);return l.jsxs("div",{className:"flex flex-col",children:[l.jsx("section",{className:"bg-gradient-to-b from-secondary to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Support"}),l.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl text-foreground",children:"How Can We Help?"}),l.jsx("p",{className:"text-muted-foreground max-w-lg",children:"Find answers to common questions or reach out to our team directly."}),l.jsxs("div",{className:"mt-6 w-full max-w-lg relative",children:[l.jsx(rf,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"}),l.jsx("input",{type:"text",value:o,onChange:A=>c(A.target.value),placeholder:"Search FAQs...",className:"w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors shadow-sm"})]})]})})}),l.jsx("section",{className:"bg-white",children:l.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8",children:[l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[l.jsxs("a",{href:"tel:+914449303030","aria-label":"Call Cherrinet support at +91 44 4930 3030",className:"flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0",children:l.jsx(ki,{className:"w-5 h-5 text-primary","aria-hidden":"true"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-foreground",children:"Call Us"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"+91 44 4930 3030"})]})]}),l.jsxs("a",{href:"mailto:support@cherrinet.in","aria-label":"Email Cherrinet support",className:"flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0",children:l.jsx(Xm,{className:"w-5 h-5 text-primary","aria-hidden":"true"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-foreground",children:"Email Us"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"support@cherrinet.in"})]})]}),l.jsxs("a",{href:"https://partner.knet.co.in/subscriber_login",target:"_blank",rel:"noreferrer",className:"flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0",children:l.jsx(jo,{className:"w-5 h-5 text-primary","aria-hidden":"true"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-foreground",children:"Quick Pay"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Pay your bill instantly"})]})]}),l.jsxs("div",{className:"flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0",children:l.jsx(tf,{className:"w-5 h-5 text-primary","aria-hidden":"true"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-foreground",children:"Live Chat"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Chat with Cherry Bot"})]})]})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-secondary/60 to-white border border-border",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0",children:l.jsx(jo,{className:"w-6 h-6 text-primary","aria-hidden":"true"})}),l.jsxs("div",{className:"flex-1 flex flex-col gap-1.5",children:[l.jsx("h3",{className:"text-foreground",children:"Couldn't find what you're looking for?"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Drop us a message with your details and our team will get back within 24 hours."})]}),l.jsxs(Oe,{to:"/contact-us",className:"inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl text-sm hover:bg-[#8E1B22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors w-full sm:w-auto justify-center",children:["Contact Us",l.jsx(Ct,{className:"w-4 h-4","aria-hidden":"true"})]})]})]})}),l.jsx("section",{id:"faq",className:"bg-muted/30",children:l.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[l.jsx("h2",{className:"text-2xl text-foreground text-center mb-10",children:"Frequently Asked Questions"}),h.length>0?l.jsx("div",{className:"flex flex-col gap-8",children:h.map(A=>l.jsxs("div",{className:"flex flex-col gap-3",children:[l.jsx("h3",{className:"text-primary text-sm uppercase tracking-wider",children:A.category}),l.jsx("div",{className:"flex flex-col gap-2",children:A.faqs.map((p,g)=>{const v=`${A.category}-${g}`,y=a===v;return l.jsxs("div",{className:"bg-white rounded-xl border border-border overflow-hidden",children:[l.jsxs("button",{onClick:()=>m(v),className:"w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer hover:bg-muted/30 transition-colors",children:[l.jsx("span",{className:"text-sm text-foreground",children:p.q}),l.jsx(qm,{className:`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${y?"rotate-180":""}`})]}),y&&l.jsx("div",{className:"px-5 pb-5",children:l.jsx("div",{className:"pt-3 border-t border-border",children:l.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:p.a})})})]},v)})})]},A.category))}):l.jsxs("div",{className:"text-center py-10",children:[l.jsx("p",{className:"text-muted-foreground",children:"No FAQs match your search."}),l.jsx("button",{onClick:()=>c(""),className:"text-sm text-primary hover:text-[#8E1B22] mt-2 cursor-pointer",children:"Clear search"})]})]})}),l.jsx("section",{className:"bg-white",children:l.jsx("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[l.jsxs("div",{className:"flex flex-col gap-4 p-6 rounded-2xl border border-border",children:[l.jsx(Qm,{className:"w-6 h-6 text-primary"}),l.jsx("h3",{className:"text-foreground",children:"Support Hours"}),l.jsxs("div",{className:"flex flex-col gap-2 text-sm text-muted-foreground",children:[l.jsx("p",{children:"Phone Support: 24/7"}),l.jsx("p",{children:"Email Support: Mon-Sat, 9 AM - 9 PM"}),l.jsx("p",{children:"Live Chat: 24/7"}),l.jsx("p",{children:"Walk-in Center: Mon-Sat, 10 AM - 7 PM"})]})]}),l.jsxs("div",{className:"flex flex-col gap-4 p-6 rounded-2xl border border-border",children:[l.jsx(ln,{className:"w-6 h-6 text-primary"}),l.jsx("h3",{className:"text-foreground",children:"Service Center"}),l.jsxs("div",{className:"flex flex-col gap-2 text-sm text-muted-foreground",children:[l.jsx("p",{children:"Cherrinet Experience Center"}),l.jsx("p",{children:"NO.1, Mura Towers,"}),l.jsx("p",{children:"Dr Thirumoorthy Nagar Main Road,"}),l.jsx("p",{children:"Nungambakkam. Chennai - 600034"}),l.jsx("p",{children:"Near US Consulate"})]})]})]})})})]})}const hm=[{id:"",label:"Select a plan"},{id:"budget",label:"Budget Plan — 50 Mbps · ₹479/mo"},{id:"family",label:"Family Plan — 100 Mbps · ₹679/mo"},{id:"premium-150",label:"Premium Plan — 150 Mbps · ₹799/mo"},{id:"premium-200",label:"Premium Plan — 200 Mbps · ₹999/mo"},{id:"premium-500",label:"Premium Plan — 500 Mbps · ₹1199/mo"},{id:"power",label:"Power Plan — 1000 Mbps · ₹1999/mo"},{id:"custom",label:"Custom plan (talk to us)"}],gx=["OTT bundle (Hotstar / ZEE5 / SonyLIV)"],pm=["Home (Residential)","Business / Office"];function xx(){const[a,i]=T.useState("new-connection"),[o,c]=T.useState(!1),[d,m]=T.useState(!1),[h,A]=T.useState(null),[p,g]=T.useState({name:"",mobile:"",altMobile:"",email:"",pincode:"",address:"",locality:"",connectionType:pm[0],plan:"",services:[],upgradePlan:"",message:"",consent:!1}),v={name:p.name.length>0&&p.name.trim().length<2?"Enter your full name":"",mobile:p.mobile.length>0&&!/^[6-9]\d{9}$/.test(p.mobile)?"Enter a valid 10-digit mobile starting with 6–9":"",altMobile:p.altMobile.length>0&&!/^[6-9]\d{9}$/.test(p.altMobile)?"Enter a valid 10-digit number":"",email:p.email.length>0&&!/^\S+@\S+\.\S+$/.test(p.email)?"Enter a valid email":"",pincode:p.pincode.length>0&&!/^\d{6}$/.test(p.pincode)?"Must be 6 digits":""},y=p.name.trim().length>=2&&/^[6-9]\d{9}$/.test(p.mobile)&&/^\S+@\S+\.\S+$/.test(p.email)&&/^\d{6}$/.test(p.pincode)&&p.address.trim().length>=5&&p.locality.trim().length>=2&&p.consent,I=a==="new-connection"?p.plan.length>0:!0,S=a==="general"?p.message.trim().length>=10:!0,H=y&&I&&S,O=b=>{g(K=>({...K,services:K.services.includes(b)?K.services.filter(G=>G!==b):[...K.services,b]}))},D=async b=>{if(b.preventDefault(),!H)return;const K=`Cherrinet Enquiry - ${p.name}`,G=[`Name: ${p.name}`,`Mobile: +91 ${p.mobile}`,`Alternate Mobile: ${p.altMobile||"N/A"}`,`Email: ${p.email}`,`PIN code: ${p.pincode}`,`Locality: ${p.locality}`,`Address: ${p.address}`,`Connection Type: ${p.connectionType}`,`Preferred Plan: ${p.plan||"N/A"}`,`Services: ${p.services.length>0?p.services.join(", "):"None"}`,`Upgrade Plan: ${p.upgradePlan||"N/A"}`,`Message: ${p.message||"None"}`,`Consent: ${p.consent?"Yes":"No"}`,"","Please respond to this enquiry as soon as possible.","","Source: Cherrinet website enquiry form"].join(`
`);m(!0),A(null);try{await Oi({subject:K,body:G,replyTo:p.email.trim()}),c(!0)}catch(ae){console.error(ae),A("Unable to send your enquiry. Please try again later.")}finally{m(!1)}};return o?l.jsx("div",{className:"bg-gradient-to-b from-secondary to-white min-h-[70vh] flex items-center justify-center px-4 py-16",children:l.jsxs("div",{className:"max-w-md w-full bg-white p-8 rounded-2xl border border-border shadow-sm text-center flex flex-col items-center gap-4",children:[l.jsx(ml,{className:"w-14 h-14 text-green-600","aria-hidden":"true"}),l.jsxs("h1",{className:"text-foreground",children:["Thank you, ",p.name.split(" ")[0],"!"]}),l.jsxs("p",{className:"text-sm text-muted-foreground",children:["Your enquiry has been received. A Cherrinet representative will reach you on"," ",l.jsxs("span",{className:"text-foreground",children:["+91 ",p.mobile]})," within 24 hours."]}),l.jsxs("p",{className:"text-xs text-muted-foreground",children:["Reference ID: CHN-",Math.floor(Math.random()*9e5+1e5)]})]})}):l.jsxs("div",{className:"flex flex-col",children:[l.jsx("section",{className:"bg-gradient-to-b from-secondary to-white",children:l.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Get Started"}),l.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl text-foreground",children:"Tell us what you need"}),l.jsx("p",{className:"text-muted-foreground max-w-lg",children:"New connection, add-on services, or just have a question? Fill in the form and our team will get back within 24 hours."})]})})}),l.jsx("section",{className:"bg-white",children:l.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[l.jsxs("fieldset",{className:"mb-8",children:[l.jsx("legend",{className:"text-sm text-foreground mb-3",children:"I want to…"}),l.jsx("div",{role:"radiogroup","aria-label":"Enquiry type",className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{id:"new-connection",label:"Get a new connection",icon:Ct},{id:"additional-services",label:"Add services",icon:bi},{id:"general",label:"Ask a question",icon:g0}].map(b=>l.jsxs("button",{type:"button",role:"radio","aria-checked":a===b.id,onClick:()=>i(b.id),className:`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${a===b.id?"border-primary bg-secondary/40":"border-border hover:border-primary/40"}`,children:[l.jsx(b.icon,{className:`w-5 h-5 shrink-0 ${a===b.id?"text-primary":"text-muted-foreground"}`,"aria-hidden":"true"}),l.jsx("span",{className:"text-sm text-foreground",children:b.label})]},b.id))})]}),l.jsxs("form",{onSubmit:D,className:"flex flex-col gap-6",noValidate:!0,children:[l.jsx(Xn,{title:"Your details",children:l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsx(en,{id:"name",label:"Full name",required:!0,value:p.name,onChange:b=>g({...p,name:b}),placeholder:"As per your ID",error:v.name,autoComplete:"name"}),l.jsx(en,{id:"email",label:"Email",type:"email",required:!0,value:p.email,onChange:b=>g({...p,email:b}),placeholder:"you@example.com",error:v.email,autoComplete:"email"}),l.jsx(en,{id:"mobile",label:"Mobile number",required:!0,value:p.mobile,onChange:b=>g({...p,mobile:b.replace(/\D/g,"").slice(0,10)}),placeholder:"10-digit mobile",error:v.mobile,autoComplete:"tel",prefix:"+91"}),l.jsx(en,{id:"altMobile",label:"Alternate number (optional)",value:p.altMobile,onChange:b=>g({...p,altMobile:b.replace(/\D/g,"").slice(0,10)}),placeholder:"10-digit mobile",error:v.altMobile,prefix:"+91"})]})}),l.jsx(Xn,{title:"Installation address",children:l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsx(en,{id:"pincode",label:"PIN code",required:!0,value:p.pincode,onChange:b=>g({...p,pincode:b.replace(/\D/g,"").slice(0,6)}),placeholder:"6-digit PIN",error:v.pincode,autoComplete:"postal-code"}),l.jsx(en,{id:"locality",label:"Locality / Area",required:!0,value:p.locality,onChange:b=>g({...p,locality:b}),placeholder:"e.g. Anna Nagar"}),l.jsxs("div",{className:"sm:col-span-2 flex flex-col gap-1.5",children:[l.jsxs("label",{htmlFor:"address",className:"text-sm text-foreground",children:["Full address ",l.jsx("span",{className:"text-primary",children:"*"})]}),l.jsx("textarea",{id:"address",rows:3,value:p.address,onChange:b=>g({...p,address:b.target.value}),placeholder:"Door no, street, landmark",autoComplete:"street-address",className:"px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("label",{htmlFor:"connectionType",className:"text-sm text-foreground",children:"Connection type"}),l.jsx("select",{id:"connectionType",value:p.connectionType,onChange:b=>g({...p,connectionType:b.target.value}),className:"px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",children:pm.map(b=>l.jsx("option",{children:b},b))})]})]})}),a==="new-connection"&&l.jsx(Xn,{title:"Choose a plan",children:l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsxs("label",{htmlFor:"plan",className:"text-sm text-foreground",children:["Preferred plan ",l.jsx("span",{className:"text-primary",children:"*"})]}),l.jsx("select",{id:"plan",value:p.plan,onChange:b=>g({...p,plan:b.target.value}),className:"px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",children:hm.map(b=>l.jsx("option",{value:b.id,disabled:b.id==="",children:b.label},b.id))}),l.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Not sure? Pick the closest match — we'll help you finalise the right plan."})]})}),(a==="new-connection"||a==="additional-services")&&l.jsxs(Xn,{title:a==="additional-services"?"Which services do you need?":"Add-on services (optional)",children:[l.jsxs("fieldset",{children:[l.jsx("legend",{className:"sr-only",children:"Select add-on services"}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:gx.map(b=>{const K=p.services.includes(b);return l.jsxs("label",{className:`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${K?"border-primary bg-secondary/40":"border-border hover:bg-muted/40"}`,children:[l.jsx("input",{type:"checkbox",checked:K,onChange:()=>O(b),className:"w-4 h-4 accent-primary"}),l.jsx("span",{className:"text-sm text-foreground",children:b})]},b)})})]}),(()=>{const b=p.services.includes("Upgrade existing plan");return l.jsxs("div",{className:`mt-3 rounded-xl border transition-colors ${b?"border-primary bg-secondary/30":"border-border"}`,children:[l.jsxs("label",{className:"flex items-center gap-3 p-3 cursor-pointer",children:[l.jsx("input",{type:"checkbox",checked:b,onChange:()=>{O("Upgrade existing plan"),b&&g(K=>({...K,upgradePlan:""}))},className:"w-4 h-4 accent-primary","aria-controls":"upgradePlan"}),l.jsx("span",{className:"text-sm text-foreground",children:"Upgrade my existing plan"})]}),b&&l.jsxs("div",{className:"px-3 pb-3 flex flex-col gap-1.5",children:[l.jsx("label",{htmlFor:"upgradePlan",className:"text-sm text-foreground",children:"Upgrade to"}),l.jsx("select",{id:"upgradePlan",value:p.upgradePlan,onChange:K=>g({...p,upgradePlan:K.target.value}),className:"px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",children:hm.map(K=>l.jsx("option",{value:K.id,disabled:K.id==="",children:K.label},K.id))}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Pick the plan you'd like to move to — our team will confirm proration & activation."})]})]})})()]}),l.jsx(Xn,{title:a==="general"?"Your question":"Anything else? (optional)",children:l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("label",{htmlFor:"message",className:"sr-only",children:"Message"}),l.jsx("textarea",{id:"message",rows:4,value:p.message,onChange:b=>g({...p,message:b.target.value}),placeholder:a==="general"?"Tell us how we can help...":"Special requirements, preferred time slot, etc.",className:"px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"}),a==="general"&&p.message.length>0&&p.message.trim().length<10&&l.jsx("span",{className:"text-xs text-[#B2222B]",children:"Please share at least 10 characters"})]})}),l.jsxs("label",{className:"flex items-start gap-3 p-4 rounded-xl bg-muted/40 cursor-pointer",children:[l.jsx("input",{type:"checkbox",checked:p.consent,onChange:b=>g({...p,consent:b.target.checked}),className:"w-4 h-4 mt-0.5 accent-primary",required:!0}),l.jsxs("span",{className:"text-sm text-muted-foreground",children:["I consent to Cherrinet contacting me regarding this enquiry and authorise processing of my details per the"," ",l.jsx("a",{href:"#",className:"text-primary underline",children:"Privacy Policy"}),". As per TRAI norms, you may receive service-related calls/SMS even if you are on DND."]})]}),h&&l.jsx("div",{className:"rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive",children:h}),l.jsxs("button",{type:"submit",disabled:!H||d,className:"w-full bg-primary text-white py-3.5 rounded-xl text-sm hover:bg-[#8E1B22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2",children:[d?"Sending…":"Submit Enquiry",l.jsx(Ct,{className:"w-4 h-4"})]}),l.jsx("p",{className:"text-xs text-muted-foreground text-center",children:"By submitting, you agree to be contacted by Cherrinet. We typically respond within 24 hours."})]})]})})]})}function Xn({title:a,children:i}){return l.jsxs("div",{className:"flex flex-col gap-4 p-6 rounded-2xl border border-border bg-white",children:[l.jsx("h2",{className:"text-base text-foreground",children:a}),i]})}function en({id:a,label:i,value:o,onChange:c,type:d="text",placeholder:m,error:h,required:A,autoComplete:p,prefix:g}){const v=`${a}-error`;return l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsxs("label",{htmlFor:a,className:"text-sm text-foreground",children:[i," ",A&&l.jsx("span",{className:"text-primary",children:"*"})]}),l.jsxs("div",{className:`flex items-center rounded-lg border bg-white focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary ${h?"border-[#B2222B]":"border-border"}`,children:[g&&l.jsx("span",{className:"pl-3 text-sm text-muted-foreground select-none",children:g}),l.jsx("input",{id:a,type:d,value:o,onChange:y=>c(y.target.value),placeholder:m,autoComplete:p,"aria-invalid":!!h,"aria-describedby":h?v:void 0,className:"flex-1 px-3 py-2.5 rounded-lg text-sm bg-transparent focus:outline-none"})]}),h&&l.jsx("span",{id:v,className:"text-xs text-[#B2222B]",children:h})]})}const Am=[{label:"Plans",path:"/g-force/plans"},{label:"Coverage",path:"/g-force/coverage"},{label:"Subscribe",path:"/g-force/subscribe"},{label:"Support",path:"/g-force/support"}];function yx(){const[a,i]=T.useState(!1),o=fr();return l.jsxs("nav",{className:"sticky top-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-gray-800",children:[l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"flex items-center justify-between h-16",children:[l.jsxs(Oe,{to:"/g-force",className:"flex items-center gap-3","aria-label":"G-Force by Cherrinet — home",children:[l.jsx("div",{className:"bg-white rounded-lg p-1.5 inline-flex",children:l.jsx("img",{src:qo,alt:"Cherrinet",className:"h-7 w-auto"})}),l.jsxs("div",{className:"flex flex-col leading-tight",children:[l.jsxs("span",{className:"text-lg text-white tracking-tight",children:["G-",l.jsx("span",{className:"text-[#D1444C]",children:"Force"})]}),l.jsx("span",{className:"text-[10px] text-gray-400 uppercase tracking-wider",children:"by Cherrinet · Business"})]})]}),l.jsx("div",{className:"hidden lg:flex items-center gap-1",children:Am.map(c=>l.jsx(Oe,{to:c.path,className:`px-3 py-2 rounded-lg text-sm transition-colors ${o.pathname===c.path?"text-white bg-white/10":"text-gray-400 hover:text-white hover:bg-white/5"}`,children:c.label},c.label))}),l.jsxs("div",{className:"hidden lg:flex items-center gap-3",children:[l.jsxs(Oe,{to:"/",className:"flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors",children:[l.jsx(lm,{className:"w-4 h-4"}),"Back to Cherrinet"]}),l.jsx(Oe,{to:"/g-force/subscribe",className:"bg-primary text-white px-5 py-2 rounded-lg text-sm hover:bg-[#8E1B22] transition-colors",children:"Get a Quote"})]}),l.jsx("button",{className:"lg:hidden p-2 rounded-lg hover:bg-white/10 text-white transition-colors",onClick:()=>i(!a),children:a?l.jsx(sn,{className:"w-5 h-5"}):l.jsx(ef,{className:"w-5 h-5"})})]})}),a&&l.jsx("div",{className:"lg:hidden bg-gray-950 border-t border-gray-800",children:l.jsxs("div",{className:"px-4 py-4 flex flex-col gap-1",children:[Am.map(c=>l.jsx(Oe,{to:c.path,onClick:()=>i(!1),className:`px-4 py-3 rounded-lg text-sm transition-colors ${o.pathname===c.path?"text-white bg-white/10":"text-gray-400 hover:text-white hover:bg-white/5"}`,children:c.label},c.label)),l.jsxs("div",{className:"mt-3 pt-3 border-t border-gray-800 flex flex-col gap-3",children:[l.jsxs(Oe,{to:"/",onClick:()=>i(!1),className:"flex items-center gap-2 px-4 py-2 text-sm text-gray-400",children:[l.jsx(lm,{className:"w-4 h-4"}),"Back to Cherrinet"]}),l.jsx(Oe,{to:"/g-force/subscribe",onClick:()=>i(!1),className:"bg-primary text-white px-4 py-3 rounded-lg text-sm text-center hover:bg-[#8E1B22] transition-colors",children:"Get a Quote"})]})]})})]})}function Nx(){return l.jsxs("div",{className:"flex flex-col min-h-screen",children:[l.jsx(yx,{}),l.jsx("main",{className:"flex-1",children:l.jsx(Ym,{})}),l.jsx(lf,{})]})}const vx=[{q:"What is G-Force?",a:"G-Force is the dedicated business arm of Cherrinet, built for enterprises, SMBs, co-working spaces, and IT parks across Tamil Nadu. It delivers symmetric fiber bandwidth, SLA-backed uptime, static IPs, and managed networking."},{q:"How is G-Force different from Cherrinet's home plans?",a:"G-Force comes with guaranteed SLAs, 24/7 enterprise support, dedicated bandwidth (no contention), redundant routing, and managed services like firewalls and VPNs — none of which are available on consumer plans."},{q:"What kind of businesses do you serve?",a:"From 5-person startups to 1,000-seat offices: tech companies, BPOs, hospitals, hotels, retail chains, manufacturing plants, and educational institutions."},{q:"Do you offer custom bandwidth plans?",a:"Yes. Beyond our standard tiers, we tailor solutions for high-bandwidth or multi-location deployments. Reach out via the Subscribe page for a custom quote."},{q:"What is the typical installation time?",a:"For serviced areas, installations are typically completed within 3–5 business days from contract signing. New routes may take 7–14 business days."}],Rx=[{name:"G-FORCE 2",speed:"1",tagline:"For small teams up to 15 seats",benefits:["FUP 4TB","Post FUP 10 Mbps"]},{name:"G-FORCE 6",speed:"1",tagline:"For growing offices up to 50 seats",benefits:["FUP 12TB","Post FUP 50 Mbps"],popular:!0},{name:"G-FORCE 10",speed:"1 Gbps",tagline:"For large offices & multi-site",benefits:["FUP 20TB","Post FUP 200 Mbps"]}];function Tx(){const[a,i]=T.useState(0);return l.jsxs("div",{className:"flex flex-col",children:[l.jsxs("section",{className:"relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-[#3A0A0E]",children:[l.jsx("div",{className:"absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.4),transparent_50%)]"}),l.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32",children:l.jsxs("div",{className:"max-w-3xl flex flex-col gap-6",children:[l.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-fit",children:[l.jsx(Ci,{className:"w-4 h-4 text-[#D1444C] fill-[#D1444C]"}),l.jsx("span",{className:"text-sm text-[#FBEEEF] uppercase tracking-wider",children:"G-Force · Cherrinet for Business"})]}),l.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl text-white leading-tight",children:["Enterprise-Grade Fiber for",l.jsx("br",{}),l.jsx("span",{className:"text-[#D1444C]",children:"Tamil Nadu's Businesses"})]}),l.jsx("p",{className:"text-lg text-gray-300 max-w-xl",children:"Dedicated bandwidth, SLA-backed uptime, and managed networking — engineered for offices, factories, and campuses that can't afford to slow down."}),l.jsxs("div",{className:"flex items-center gap-4 mt-2",children:[l.jsxs(Oe,{to:"/g-force/subscribe",className:"flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl text-sm hover:bg-[#8E1B22] transition-colors",children:["Talk to Sales",l.jsx(Ct,{className:"w-4 h-4"})]}),l.jsx(Oe,{to:"/g-force/plans",className:"text-gray-300 hover:text-white text-sm transition-colors",children:"View Plans →"})]}),l.jsxs("div",{className:"grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10 max-w-lg",children:[l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsx("span",{className:"text-2xl text-white",children:"99.99%"}),l.jsx("span",{className:"text-xs text-gray-400 uppercase tracking-wider",children:"SLA Uptime"})]}),l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsx("span",{className:"text-2xl text-white",children:"24/7"}),l.jsx("span",{className:"text-xs text-gray-400 uppercase tracking-wider",children:"NOC Support"})]}),l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsx("span",{className:"text-2xl text-white",children:"2,000+"}),l.jsx("span",{className:"text-xs text-gray-400 uppercase tracking-wider",children:"Businesses"})]})]})]})})]}),l.jsx("section",{className:"bg-white",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center mb-14",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Why G-Force"}),l.jsx("h2",{className:"text-3xl lg:text-4xl text-foreground",children:"Built for Mission-Critical Work"})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[{icon:E0,title:"Dedicated Bandwidth",desc:"No contention ratios. The speeds you pay for are the speeds you get — always."},{icon:af,title:"SLA-Backed Uptime",desc:"99.9% to 99.99% guaranteed uptime with credits for any breach."},{icon:Zm,title:"Enterprise Support",desc:"24/7 NOC, dedicated account managers, and on-site engineers."},{icon:Gg,title:"Multi-site Networking",desc:"Site-to-site VPN, MPLS, and managed firewalls across all your locations."}].map(o=>l.jsxs("div",{className:"flex flex-col gap-4 p-6 rounded-2xl border border-border hover:shadow-lg hover:border-primary/30 transition-all",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-secondary flex items-center justify-center",children:l.jsx(o.icon,{className:"w-6 h-6 text-primary"})}),l.jsx("h3",{className:"text-foreground",children:o.title}),l.jsx("p",{className:"text-sm text-muted-foreground",children:o.desc})]},o.title))})]})}),l.jsx("section",{className:"bg-muted/40",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center mb-14",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Plans"}),l.jsx("h2",{className:"text-3xl lg:text-4xl text-foreground",children:"Tailored to Your Business"}),l.jsx("p",{className:"text-muted-foreground max-w-md",children:"Pricing is customized per location and bandwidth needs. Reach out for a tailored quote."})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto",children:Rx.map(o=>l.jsxs("div",{className:`relative flex flex-col gap-5 p-7 rounded-2xl border-2 bg-white transition-all hover:shadow-lg ${o.popular?"border-primary shadow-md":"border-border"}`,children:[o.popular&&l.jsx("span",{className:"absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full",children:"Most Popular"}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:o.name}),l.jsx("p",{className:"text-sm text-muted-foreground",children:o.tagline})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:"text-4xl text-foreground",children:o.speed}),o.speed!=="1 Gbps"&&l.jsx("span",{className:"text-sm text-muted-foreground",children:"Gbps"})]}),l.jsx("div",{className:"pb-4 border-b border-border",children:l.jsx("span",{className:"text-sm text-muted-foreground",children:"Custom pricing on request"})}),l.jsx("ul",{className:"flex flex-col gap-2.5",children:o.benefits.map(c=>l.jsxs("li",{className:"flex items-start gap-2",children:[l.jsx(ml,{className:"w-4 h-4 text-primary mt-0.5 shrink-0"}),l.jsx("span",{className:"text-sm text-foreground",children:c})]},c))}),l.jsx(Oe,{to:"/g-force/subscribe",className:`mt-auto w-full py-2.5 rounded-xl text-sm text-center transition-colors ${o.popular?"bg-primary text-white hover:bg-[#8E1B22]":"bg-foreground text-white hover:bg-gray-800"}`,children:"Request Quote"})]},o.name))}),l.jsx("div",{className:"text-center mt-8",children:l.jsxs(Oe,{to:"/g-force/plans",className:"inline-flex items-center gap-2 text-primary hover:text-[#8E1B22] transition-colors text-sm",children:["See full plan list",l.jsx(Ct,{className:"w-4 h-4"})]})})]})}),l.jsx("section",{className:"bg-white",children:l.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center mb-12",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"FAQs"}),l.jsx("h2",{className:"text-3xl lg:text-4xl text-foreground",children:"Common Questions"})]}),l.jsx("div",{className:"flex flex-col gap-3",children:vx.map((o,c)=>l.jsxs("div",{className:"border border-border rounded-2xl overflow-hidden bg-white",children:[l.jsxs("button",{type:"button",onClick:()=>i(a===c?null:c),className:"w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-muted/40 transition-colors cursor-pointer",children:[l.jsx("span",{className:"text-sm text-foreground",children:o.q}),l.jsx(qm,{className:`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${a===c?"rotate-180":""}`})]}),a===c&&l.jsx("div",{className:"px-5 pb-5",children:l.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:o.a})})]},o.q))})]})})]})}const Mx=[{name:"G-FORCE 2",speed:"1 Gbps",tagline:"For small teams up to 15 seats",benefits:["FUP 4TB","Post FUP 10 Mbps"]},{name:"G-FORCE 6",speed:"1 Gbps",tagline:"For growing offices up to 50 seats",benefits:["FUP 12TB","Post FUP 50 Mbps"],popular:!0},{name:"G-FORCE 10",speed:"1 Gbps",tagline:"For large offices & multi-site",benefits:["FUP 20TB","Post FUP 200 Mbps"]},{name:"SME SILVER",speed:"250 Mbps",benefits:["FUP 2250 GB","Post FUP 2 Mbps"]},{name:"SME GOLD",speed:"250 Mbps",benefits:["FUP 3250 GB","Post FUP 2 Mbps"],popular:!0},{name:"SME DIAMOND",speed:"250 Mbps",benefits:["FUP 4250 GB","Post FUP 2 Mbps"]},{name:"SME PLATINUM",speed:"250 Mbps",benefits:["FUP 5250 GB","Post FUP 2 Mbps"]},{name:"Custom",speed:"10 Gbps+",tagline:"Campuses, data centers, ISPs",benefits:["Custom routing & peering","Dedicated dark fiber options","Engineering-led onboarding","Custom SLA","Multi-site MPLS"]}];function Px(){return l.jsxs("div",{className:"flex flex-col",children:[l.jsx("section",{className:"bg-gradient-to-b from-secondary to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Business Plans"}),l.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl text-foreground",children:"Plans Built for Business"}),l.jsx("p",{className:"text-muted-foreground max-w-lg",children:"Symmetric speeds, dedicated bandwidth, and SLA-backed reliability. Pricing is tailored to your location and requirements."})]})})}),l.jsx("section",{className:"bg-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[Mx.map(a=>l.jsxs("div",{className:`relative flex flex-col gap-5 p-7 rounded-2xl border-2 transition-all hover:shadow-lg ${a.popular?"border-primary bg-secondary/30 shadow-md":"border-border"}`,children:[a.popular&&l.jsx("span",{className:"absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full",children:"Most Popular"}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:a.name}),l.jsx("p",{className:"text-sm text-muted-foreground",children:a.tagline})]}),l.jsx("div",{className:"flex items-baseline gap-1 pb-4 border-b border-border",children:l.jsx("span",{className:"text-3xl text-foreground",children:a.speed})}),l.jsx("ul",{className:"flex flex-col gap-2.5",children:a.benefits.map(i=>l.jsxs("li",{className:"flex items-start gap-2",children:[l.jsx(ml,{className:"w-4 h-4 text-primary mt-0.5 shrink-0"}),l.jsx("span",{className:"text-sm text-foreground",children:i})]},i))}),l.jsxs(Oe,{to:"/g-force/subscribe",className:`mt-auto w-full py-2.5 rounded-xl text-sm text-center transition-colors flex items-center justify-center gap-2 ${a.popular?"bg-primary text-white hover:bg-[#8E1B22]":"bg-foreground text-white hover:bg-gray-800"}`,children:["Request Quote",l.jsx(Ct,{className:"w-4 h-4"})]})]},a.name)),l.jsxs("div",{className:"relative flex flex-col gap-5 p-7 rounded-2xl border-2 border-dashed border-primary/40 bg-gradient-to-br from-secondary/50 to-white hover:shadow-lg hover:border-primary transition-all",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center",children:l.jsx(bi,{className:"w-5 h-5 text-primary"})}),l.jsx("span",{className:"text-xs px-2 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wider",children:"Tailor-made"})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Custom Plan"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Have unique requirements? We'll engineer a plan and a network around your business."})]}),l.jsx("div",{className:"flex items-baseline gap-1 pb-4 border-b border-border",children:l.jsx("span",{className:"text-3xl text-foreground",children:"Let's Talk"})}),l.jsxs("div",{className:"flex flex-col gap-3",children:[l.jsx("span",{className:"text-xs text-muted-foreground uppercase tracking-wider",children:"Bandwidth & connectivity"}),l.jsx("ul",{className:"flex flex-col gap-2",children:["Custom symmetric speeds (1 Gbps – 10 Gbps+)","Dedicated dark fiber & peering","Multi-site MPLS / SD-WAN","Static IP blocks /28 or /29"].map(a=>l.jsxs("li",{className:"flex items-start gap-2",children:[l.jsx(Co,{className:"w-4 h-4 text-primary mt-0.5 shrink-0"}),l.jsx("span",{className:"text-sm text-foreground",children:a})]},a))})]}),l.jsxs("div",{className:"flex flex-col gap-3 pt-2",children:[l.jsx("span",{className:"text-xs text-muted-foreground uppercase tracking-wider",children:"Add-on equipment"}),l.jsx("ul",{className:"flex flex-col gap-2",children:["Wi-Fi 6E mesh systems & extenders","Managed firewalls & VPN gateways","PoE switches & access points","On-site engineering & installation"].map(a=>l.jsxs("li",{className:"flex items-start gap-2",children:[l.jsx(Co,{className:"w-4 h-4 text-primary mt-0.5 shrink-0"}),l.jsx("span",{className:"text-sm text-foreground",children:a})]},a))})]}),l.jsxs(Oe,{to:"/g-force/subscribe",className:"mt-auto w-full py-2.5 rounded-xl text-sm text-center bg-primary text-white hover:bg-[#8E1B22] transition-colors flex items-center justify-center gap-2",children:["Enquire Now",l.jsx(Ct,{className:"w-4 h-4"})]})]})]})})})]})}function Ex(){const[a,i]=T.useState(null);return l.jsxs("div",{className:"flex flex-col",children:[l.jsx("section",{className:"bg-gradient-to-b from-secondary to-white",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"flex flex-col items-center gap-3 text-center",children:[l.jsx("span",{className:"text-sm text-primary uppercase tracking-wider",children:"Subscribe"}),l.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl text-foreground",children:"Get Connected"}),l.jsx("p",{className:"text-muted-foreground max-w-lg",children:"New customer? Send an enquiry. Existing client? Make a quick payment."})]})})}),l.jsx("section",{className:"bg-white",children:l.jsx("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[l.jsxs("button",{type:"button",onClick:()=>i("enquire"),className:"flex flex-col gap-5 p-8 rounded-2xl border-2 border-border hover:border-primary hover:shadow-lg transition-all text-left cursor-pointer",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-secondary flex items-center justify-center",children:l.jsx(jo,{className:"w-6 h-6 text-primary"})}),l.jsxs("div",{className:"flex flex-col gap-2",children:[l.jsx("h3",{className:"text-foreground",children:"Enquire"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Tell us about your business and we'll prepare a tailored quote within 24 hours."})]}),l.jsxs("div",{className:"flex items-center gap-2 text-primary text-sm mt-auto",children:["Open enquiry form",l.jsx(Ct,{className:"w-4 h-4"})]})]}),l.jsxs("a",{href:"https://partner.knet.co.in/subscriber_login",target:"_blank",rel:"noreferrer",className:"flex flex-col gap-5 p-8 rounded-2xl border-2 border-border hover:border-primary hover:shadow-lg transition-all text-left cursor-pointer",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-secondary flex items-center justify-center",children:l.jsx(qg,{className:"w-6 h-6 text-primary"})}),l.jsxs("div",{className:"flex flex-col gap-2",children:[l.jsx("h3",{className:"text-foreground",children:"Quick Pay"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Already a G-Force customer? Pay your invoice instantly with your account ID."})]}),l.jsxs("div",{className:"flex items-center gap-2 text-primary text-sm mt-auto",children:["Open payment portal",l.jsx(Ct,{className:"w-4 h-4"})]})]})]})})}),a==="enquire"&&l.jsx(Ix,{onClose:()=>i(null)}),a==="quickpay"&&l.jsx(wx,{onClose:()=>i(null)})]})}function Ix({onClose:a}){const[i,o]=T.useState({company:"",industry:"",gstin:"",name:"",designation:"",email:"",phone:"",altPhone:"",city:"",address:"",seats:"",plan:"",bandwidth:"",timeline:"",contactTime:"",notes:"",consent:!1}),[c,d]=T.useState(!1),[m,h]=T.useState(!1),[A,p]=T.useState(null),g=async y=>{if(y.preventDefault(),!v)return;h(!0),p(null);const I=`Cherrinet G-Force enquiry from ${i.name}`,S=[`Company: ${i.company}`,`Industry: ${i.industry||"N/A"}`,`GSTIN: ${i.gstin||"N/A"}`,`Name: ${i.name}`,`Designation: ${i.designation}`,`Email: ${i.email}`,`Phone: +91 ${i.phone}`,`Alternate phone: ${i.altPhone||"N/A"}`,`City: ${i.city}`,`Office address: ${i.address||"N/A"}`,`Seats: ${i.seats}`,`Plan: ${i.plan}`,`Bandwidth: ${i.bandwidth||"N/A"}`,`Timeline: ${i.timeline}`,`Preferred contact time: ${i.contactTime}`,`Notes: ${i.notes||"None"}`,`Consent: ${i.consent?"Yes":"No"}`,"","Please respond to this enquiry within 24 hours.","Source: Cherrinet G-Force subscription page enquiry modal"].join(`
`);try{await Oi({subject:I,body:S,replyTo:i.email.trim()}),d(!0)}catch(H){console.error(H),p("Unable to send your enquiry. Please try again later.")}finally{h(!1)}},v=i.company.length>=2&&i.industry.length>0&&i.name.length>=2&&i.designation.length>=2&&/^\S+@\S+\.\S+$/.test(i.email)&&/^[6-9]\d{9}$/.test(i.phone)&&i.city.length>0&&i.seats.length>0&&i.plan.length>0&&i.timeline.length>0&&i.consent;return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:l.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative",children:[l.jsx("button",{onClick:a,"aria-label":"Close enquiry form",className:"absolute top-4 right-4 p-1.5 rounded-lg hover:bg-muted transition-colors cursor-pointer",children:l.jsx(sn,{className:"w-4 h-4"})}),c?l.jsxs("div",{className:"flex flex-col items-center gap-4 py-8 text-center",children:[l.jsx(ml,{className:"w-12 h-12 text-green-600","aria-hidden":"true"}),l.jsx("h2",{className:"text-foreground",children:"Enquiry received"}),l.jsx("p",{className:"text-sm text-muted-foreground max-w-sm",children:"Our G-Force team will reach out within one business day with a tailored quote."}),l.jsx("button",{onClick:a,className:"mt-2 bg-primary text-white px-6 py-2.5 rounded-xl text-sm hover:bg-[#8E1B22] transition-colors cursor-pointer",children:"Close"})]}):l.jsxs(l.Fragment,{children:[l.jsx("h2",{className:"text-foreground mb-1",children:"Business Enquiry"}),l.jsx("p",{className:"text-sm text-muted-foreground mb-6",children:"Share a few details about your business — our G-Force team will craft a tailored quote within 24 hours."}),l.jsxs("form",{className:"flex flex-col gap-6",onSubmit:g,children:[l.jsxs("fieldset",{className:"flex flex-col gap-4",children:[l.jsx("legend",{className:"text-xs uppercase tracking-wider text-muted-foreground mb-1",children:"Company details"}),l.jsx(ur,{label:"Company name",value:i.company,onChange:y=>o({...i,company:y}),placeholder:"Acme Pvt. Ltd.",required:!0}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsx(tn,{label:"Industry",value:i.industry,onChange:y=>o({...i,industry:y}),required:!0,options:["IT / Software","BFSI","Manufacturing","Retail / E-commerce","Hospitality","Healthcare","Education","Logistics","Media & Entertainment","Co-working / Real Estate","Other"]}),l.jsx(ur,{label:"GSTIN (optional)",value:i.gstin,onChange:y=>o({...i,gstin:y.toUpperCase().slice(0,15)}),placeholder:"22AAAAA0000A1Z5"})]})]}),l.jsxs("fieldset",{className:"flex flex-col gap-4",children:[l.jsx("legend",{className:"text-xs uppercase tracking-wider text-muted-foreground mb-1",children:"Point of contact"}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsx(ur,{label:"Full name",value:i.name,onChange:y=>o({...i,name:y}),placeholder:"Your full name",required:!0}),l.jsx(ur,{label:"Designation",value:i.designation,onChange:y=>o({...i,designation:y}),placeholder:"IT Manager",required:!0})]}),l.jsx(ur,{label:"Work email",type:"email",value:i.email,onChange:y=>o({...i,email:y}),placeholder:"you@company.com",required:!0,error:i.email.length>0&&!/^\S+@\S+\.\S+$/.test(i.email)?"Enter a valid email":""}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsx(ur,{label:"Mobile",value:i.phone,onChange:y=>o({...i,phone:y.replace(/\D/g,"").slice(0,10)}),placeholder:"10-digit mobile",required:!0,error:i.phone.length>0&&!/^[6-9]\d{9}$/.test(i.phone)?"Enter a valid 10-digit number":""}),l.jsx(ur,{label:"Alternate phone (optional)",value:i.altPhone,onChange:y=>o({...i,altPhone:y.replace(/\D/g,"").slice(0,10)}),placeholder:"Landline or alternate"})]})]}),l.jsxs("fieldset",{className:"flex flex-col gap-4",children:[l.jsx("legend",{className:"text-xs uppercase tracking-wider text-muted-foreground mb-1",children:"Office location"}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsx(tn,{label:"City",value:i.city,onChange:y=>o({...i,city:y}),required:!0,options:["Chennai","Coimbatore","Madurai","Tiruchirappalli","Salem","Tirunelveli","Erode","Vellore","Other"]}),l.jsx(tn,{label:"Team size",value:i.seats,onChange:y=>o({...i,seats:y}),required:!0,options:["1–15 seats","16–50 seats","51–150 seats","151–500 seats","500+ seats"]})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("label",{className:"text-sm text-foreground",htmlFor:"gf-address",children:"Office address (optional)"}),l.jsx("textarea",{id:"gf-address",rows:2,value:i.address,onChange:y=>o({...i,address:y.target.value}),className:"px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary resize-none",placeholder:"Building, street, locality"})]})]}),l.jsxs("fieldset",{className:"flex flex-col gap-4",children:[l.jsx("legend",{className:"text-xs uppercase tracking-wider text-muted-foreground mb-1",children:"Plan & requirements"}),l.jsx(tn,{label:"Plan of interest",value:i.plan,onChange:y=>o({...i,plan:y}),required:!0,options:["G-FORCE 2 — 1 Gbps (FUP 4TB)","G-FORCE 6 — 1 Gbps (FUP 12TB)","G-FORCE 10 — 1 Gbps (FUP 20TB)","SME SILVER — 250 Mbps (FUP 2250 GB)","SME GOLD — 250 Mbps (FUP 3250 GB)","SME DIAMOND — 250 Mbps (FUP 4250 GB)","SME PLATINUM — 250 Mbps (FUP 5250 GB)","Custom plan (tell us your requirement)","Not sure yet — recommend one"]}),i.plan.startsWith("Custom")&&l.jsx(ur,{label:"Required bandwidth / use case",value:i.bandwidth,onChange:y=>o({...i,bandwidth:y}),placeholder:"e.g. 10 Gbps dedicated, 200 concurrent users"}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsx(tn,{label:"Timeline",value:i.timeline,onChange:y=>o({...i,timeline:y}),required:!0,options:["Immediate (within 1 week)","1–2 weeks","1 month","1–3 months","Just exploring"]}),l.jsx(tn,{label:"Preferred contact time",value:i.contactTime,onChange:y=>o({...i,contactTime:y}),options:["Anytime","Morning (9–12)","Afternoon (12–5)","Evening (5–8)"]})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("label",{className:"text-sm text-foreground",htmlFor:"gf-notes",children:"Additional notes (optional)"}),l.jsx("textarea",{id:"gf-notes",rows:3,value:i.notes,onChange:y=>o({...i,notes:y.target.value}),className:"px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary resize-none",placeholder:"Existing connection, expected uptime SLA, hybrid cloud, special requirements…"})]})]}),l.jsxs("label",{className:"flex items-start gap-2 text-xs text-muted-foreground",children:[l.jsx("input",{type:"checkbox",checked:i.consent,onChange:y=>o({...i,consent:y.target.checked}),className:"mt-0.5 accent-primary",required:!0}),l.jsx("span",{children:"I agree to be contacted by Cherrinet G-Force regarding this enquiry, in line with TRAI / DND norms."})]}),A&&l.jsx("p",{className:"text-sm text-destructive",children:A}),l.jsx("button",{type:"submit",disabled:!v||m,className:"w-full bg-primary text-white py-3 rounded-xl text-sm hover:bg-[#8E1B22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer",children:m?"Sending enquiry…":"Submit enquiry"})]})]})]})})}function wx({onClose:a}){const[i,o]=T.useState({accountId:"",amount:""}),[c,d]=T.useState(!1),m=/^G-\d{6}$/.test(i.accountId)&&Number(i.amount)>0;return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:l.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-md p-6 relative",children:[l.jsx("button",{onClick:a,className:"absolute top-4 right-4 p-1.5 rounded-lg hover:bg-muted transition-colors cursor-pointer",children:l.jsx(sn,{className:"w-4 h-4"})}),c?l.jsxs("div",{className:"flex flex-col items-center gap-4 py-8 text-center",children:[l.jsx(ml,{className:"w-12 h-12 text-green-600"}),l.jsx("h2",{className:"text-foreground",children:"Payment successful"}),l.jsx("p",{className:"text-sm text-muted-foreground",children:"Receipt sent to your registered email."}),l.jsx("button",{onClick:a,className:"mt-2 bg-primary text-white px-6 py-2.5 rounded-xl text-sm hover:bg-[#8E1B22] transition-colors cursor-pointer",children:"Close"})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[l.jsx(d0,{className:"w-4 h-4 text-green-600"}),l.jsx("span",{className:"text-xs text-muted-foreground uppercase tracking-wider",children:"Secure Payment"})]}),l.jsx("h2",{className:"text-foreground mb-1",children:"Quick Pay"}),l.jsx("p",{className:"text-sm text-muted-foreground mb-6",children:"Pay your G-Force invoice instantly."}),l.jsxs("form",{className:"flex flex-col gap-4",onSubmit:h=>{h.preventDefault()},children:[l.jsx(ur,{label:"Account ID",value:i.accountId,onChange:h=>o({...i,accountId:h.toUpperCase()}),placeholder:"G-123456",error:i.accountId.length>0&&!/^G-\d{6}$/.test(i.accountId)?"Format: G-123456":""}),l.jsx(ur,{label:"Amount (₹)",value:i.amount,onChange:h=>o({...i,amount:h.replace(/\D/g,"")}),placeholder:"Invoice amount"}),l.jsx("button",{type:"submit",disabled:!m||!0,className:"mt-2 w-full bg-primary text-white py-3 rounded-xl text-sm hover:bg-[#8E1B22] transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer",children:"Payment gateway unavailable"}),l.jsx("p",{className:"text-xs text-muted-foreground text-center",children:"Payment gateway integration pending. Success result is disabled until integration is complete."})]})]})]})})}function ur({label:a,value:i,onChange:o,placeholder:c,type:d="text",error:m,required:h}){return l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsxs("label",{className:"text-sm text-foreground",children:[a,h&&l.jsx("span",{className:"text-primary",children:" *"})]}),l.jsx("input",{type:d,value:i,onChange:A=>o(A.target.value),placeholder:c,"aria-invalid":!!m,className:`px-3 py-2.5 rounded-lg border text-sm bg-white focus:outline-none focus:border-primary ${m?"border-[#D1444C]":"border-border"}`}),m&&l.jsx("span",{className:"text-xs text-[#B2222B]",children:m})]})}function tn({label:a,value:i,onChange:o,options:c,required:d}){return l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsxs("label",{className:"text-sm text-foreground",children:[a,d&&l.jsx("span",{className:"text-primary",children:" *"})]}),l.jsxs("select",{value:i,onChange:m=>o(m.target.value),className:"px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary",children:[l.jsx("option",{value:"",children:"Select…"}),c.map(m=>l.jsx("option",{value:m,children:m},m))]})]})}const Sx=gg([{path:"/",Component:sm,children:[{index:!0,Component:om},{path:"plans",Component:ox},{path:"cherrinet-coverage",Component:dm},{path:"about-us",Component:px},{path:"support",Component:fm},{path:"contact-us",Component:xx}]},{path:"/g-force",Component:Nx,children:[{index:!0,Component:Tx},{path:"plans",Component:Px},{path:"coverage",Component:dm},{path:"subscribe",Component:Ex},{path:"support",Component:fm}]},{path:"*",Component:sm,children:[{index:!0,Component:om}]}]);function Lx(){return l.jsx(FA,{router:Sx})}tp.createRoot(document.getElementById("root")).render(l.jsx(Lx,{}));
