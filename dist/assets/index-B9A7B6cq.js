(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Eh={exports:{}},ko={};var i0;function hx(){if(i0)return ko;i0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return ko.Fragment=t,ko.jsx=i,ko.jsxs=i,ko}var a0;function dx(){return a0||(a0=1,Eh.exports=hx()),Eh.exports}var _t=dx(),Th={exports:{}},ce={};var s0;function px(){if(s0)return ce;s0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function _(L,nt,St){this.props=L,this.context=nt,this.refs=M,this.updater=St||E}_.prototype.isReactComponent={},_.prototype.setState=function(L,nt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,nt,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function z(){}z.prototype=_.prototype;function N(L,nt,St){this.props=L,this.context=nt,this.refs=M,this.updater=St||E}var D=N.prototype=new z;D.constructor=N,b(D,_.prototype),D.isPureReactComponent=!0;var H=Array.isArray;function B(){}var O={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function C(L,nt,St){var At=St.ref;return{$$typeof:r,type:L,key:nt,ref:At!==void 0?At:null,props:St}}function w(L,nt){return C(L.type,nt,L.props)}function G(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function Q(L){var nt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(St){return nt[St]})}var st=/\/+/g;function ht(L,nt){return typeof L=="object"&&L!==null&&L.key!=null?Q(""+L.key):nt.toString(36)}function lt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(B,B):(L.status="pending",L.then(function(nt){L.status==="pending"&&(L.status="fulfilled",L.value=nt)},function(nt){L.status==="pending"&&(L.status="rejected",L.reason=nt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function I(L,nt,St,At,Ut){var it=typeof L;(it==="undefined"||it==="boolean")&&(L=null);var ct=!1;if(L===null)ct=!0;else switch(it){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(L.$$typeof){case r:case t:ct=!0;break;case v:return ct=L._init,I(ct(L._payload),nt,St,At,Ut)}}if(ct)return Ut=Ut(L),ct=At===""?"."+ht(L,0):At,H(Ut)?(St="",ct!=null&&(St=ct.replace(st,"$&/")+"/"),I(Ut,nt,St,"",function(Wt){return Wt})):Ut!=null&&(G(Ut)&&(Ut=w(Ut,St+(Ut.key==null||L&&L.key===Ut.key?"":(""+Ut.key).replace(st,"$&/")+"/")+ct)),nt.push(Ut)),1;ct=0;var Dt=At===""?".":At+":";if(H(L))for(var Bt=0;Bt<L.length;Bt++)At=L[Bt],it=Dt+ht(At,Bt),ct+=I(At,nt,St,it,Ut);else if(Bt=S(L),typeof Bt=="function")for(L=Bt.call(L),Bt=0;!(At=L.next()).done;)At=At.value,it=Dt+ht(At,Bt++),ct+=I(At,nt,St,it,Ut);else if(it==="object"){if(typeof L.then=="function")return I(lt(L),nt,St,At,Ut);throw nt=String(L),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ct}function W(L,nt,St){if(L==null)return L;var At=[],Ut=0;return I(L,At,"","",function(it){return nt.call(St,it,Ut++)}),At}function Z(L){if(L._status===-1){var nt=L._result;nt=nt(),nt.then(function(St){(L._status===0||L._status===-1)&&(L._status=1,L._result=St)},function(St){(L._status===0||L._status===-1)&&(L._status=2,L._result=St)}),L._status===-1&&(L._status=0,L._result=nt)}if(L._status===1)return L._result.default;throw L._result}var yt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},xt={map:W,forEach:function(L,nt,St){W(L,function(){nt.apply(this,arguments)},St)},count:function(L){var nt=0;return W(L,function(){nt++}),nt},toArray:function(L){return W(L,function(nt){return nt})||[]},only:function(L){if(!G(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ce.Activity=g,ce.Children=xt,ce.Component=_,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=N,ce.StrictMode=s,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ce.__COMPILER_RUNTIME={__proto__:null,c:function(L){return O.H.useMemoCache(L)}},ce.cache=function(L){return function(){return L.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(L,nt,St){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var At=b({},L.props),Ut=L.key;if(nt!=null)for(it in nt.key!==void 0&&(Ut=""+nt.key),nt)!X.call(nt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&nt.ref===void 0||(At[it]=nt[it]);var it=arguments.length-2;if(it===1)At.children=St;else if(1<it){for(var ct=Array(it),Dt=0;Dt<it;Dt++)ct[Dt]=arguments[Dt+2];At.children=ct}return C(L.type,Ut,At)},ce.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ce.createElement=function(L,nt,St){var At,Ut={},it=null;if(nt!=null)for(At in nt.key!==void 0&&(it=""+nt.key),nt)X.call(nt,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Ut[At]=nt[At]);var ct=arguments.length-2;if(ct===1)Ut.children=St;else if(1<ct){for(var Dt=Array(ct),Bt=0;Bt<ct;Bt++)Dt[Bt]=arguments[Bt+2];Ut.children=Dt}if(L&&L.defaultProps)for(At in ct=L.defaultProps,ct)Ut[At]===void 0&&(Ut[At]=ct[At]);return C(L,it,Ut)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(L){return{$$typeof:d,render:L}},ce.isValidElement=G,ce.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:Z}},ce.memo=function(L,nt){return{$$typeof:p,type:L,compare:nt===void 0?null:nt}},ce.startTransition=function(L){var nt=O.T,St={};O.T=St;try{var At=L(),Ut=O.S;Ut!==null&&Ut(St,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(B,yt)}catch(it){yt(it)}finally{nt!==null&&St.types!==null&&(nt.types=St.types),O.T=nt}},ce.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ce.use=function(L){return O.H.use(L)},ce.useActionState=function(L,nt,St){return O.H.useActionState(L,nt,St)},ce.useCallback=function(L,nt){return O.H.useCallback(L,nt)},ce.useContext=function(L){return O.H.useContext(L)},ce.useDebugValue=function(){},ce.useDeferredValue=function(L,nt){return O.H.useDeferredValue(L,nt)},ce.useEffect=function(L,nt){return O.H.useEffect(L,nt)},ce.useEffectEvent=function(L){return O.H.useEffectEvent(L)},ce.useId=function(){return O.H.useId()},ce.useImperativeHandle=function(L,nt,St){return O.H.useImperativeHandle(L,nt,St)},ce.useInsertionEffect=function(L,nt){return O.H.useInsertionEffect(L,nt)},ce.useLayoutEffect=function(L,nt){return O.H.useLayoutEffect(L,nt)},ce.useMemo=function(L,nt){return O.H.useMemo(L,nt)},ce.useOptimistic=function(L,nt){return O.H.useOptimistic(L,nt)},ce.useReducer=function(L,nt,St){return O.H.useReducer(L,nt,St)},ce.useRef=function(L){return O.H.useRef(L)},ce.useState=function(L){return O.H.useState(L)},ce.useSyncExternalStore=function(L,nt,St){return O.H.useSyncExternalStore(L,nt,St)},ce.useTransition=function(){return O.H.useTransition()},ce.version="19.2.5",ce}var r0;function sp(){return r0||(r0=1,Th.exports=px()),Th.exports}var Qe=sp(),bh={exports:{}},Xo={},Ah={exports:{}},Rh={};var o0;function mx(){return o0||(o0=1,(function(r){function t(I,W){var Z=I.length;I.push(W);t:for(;0<Z;){var yt=Z-1>>>1,xt=I[yt];if(0<l(xt,W))I[yt]=W,I[Z]=xt,Z=yt;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var W=I[0],Z=I.pop();if(Z!==W){I[0]=Z;t:for(var yt=0,xt=I.length,L=xt>>>1;yt<L;){var nt=2*(yt+1)-1,St=I[nt],At=nt+1,Ut=I[At];if(0>l(St,Z))At<xt&&0>l(Ut,St)?(I[yt]=Ut,I[At]=Z,yt=At):(I[yt]=St,I[nt]=Z,yt=nt);else if(At<xt&&0>l(Ut,Z))I[yt]=Ut,I[At]=Z,yt=At;else break t}}return W}function l(I,W){var Z=I.sortIndex-W.sortIndex;return Z!==0?Z:I.id-W.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,g=null,x=3,S=!1,E=!1,b=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(I){for(var W=i(p);W!==null;){if(W.callback===null)s(p);else if(W.startTime<=I)s(p),W.sortIndex=W.expirationTime,t(m,W);else break;W=i(p)}}function H(I){if(b=!1,D(I),!E)if(i(m)!==null)E=!0,B||(B=!0,Q());else{var W=i(p);W!==null&&lt(H,W.startTime-I)}}var B=!1,O=-1,X=5,C=-1;function w(){return M?!0:!(r.unstable_now()-C<X)}function G(){if(M=!1,B){var I=r.unstable_now();C=I;var W=!0;try{t:{E=!1,b&&(b=!1,z(O),O=-1),S=!0;var Z=x;try{e:{for(D(I),g=i(m);g!==null&&!(g.expirationTime>I&&w());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,x=g.priorityLevel;var xt=yt(g.expirationTime<=I);if(I=r.unstable_now(),typeof xt=="function"){g.callback=xt,D(I),W=!0;break e}g===i(m)&&s(m),D(I)}else s(m);g=i(m)}if(g!==null)W=!0;else{var L=i(p);L!==null&&lt(H,L.startTime-I),W=!1}}break t}finally{g=null,x=Z,S=!1}W=void 0}}finally{W?Q():B=!1}}}var Q;if(typeof N=="function")Q=function(){N(G)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,ht=st.port2;st.port1.onmessage=G,Q=function(){ht.postMessage(null)}}else Q=function(){_(G,0)};function lt(I,W){O=_(function(){I(r.unstable_now())},W)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(I){switch(x){case 1:case 2:case 3:var W=3;break;default:W=x}var Z=x;x=W;try{return I()}finally{x=Z}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(I,W){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Z=x;x=I;try{return W()}finally{x=Z}},r.unstable_scheduleCallback=function(I,W,Z){var yt=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?yt+Z:yt):Z=yt,I){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=Z+xt,I={id:v++,callback:W,priorityLevel:I,startTime:Z,expirationTime:xt,sortIndex:-1},Z>yt?(I.sortIndex=Z,t(p,I),i(m)===null&&I===i(p)&&(b?(z(O),O=-1):b=!0,lt(H,Z-yt))):(I.sortIndex=xt,t(m,I),E||S||(E=!0,B||(B=!0,Q()))),I},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(I){var W=x;return function(){var Z=x;x=W;try{return I.apply(this,arguments)}finally{x=Z}}}})(Rh)),Rh}var l0;function gx(){return l0||(l0=1,Ah.exports=mx()),Ah.exports}var Ch={exports:{}},Nn={};var c0;function _x(){if(c0)return Nn;c0=1;var r=sp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},Nn.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:S}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Nn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Nn.version="19.2.5",Nn}var u0;function vx(){if(u0)return Ch.exports;u0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ch.exports=_x(),Ch.exports}var f0;function yx(){if(f0)return Xo;f0=1;var r=gx(),t=sp(),i=vx();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,A=u.child;A;){if(A===a){y=!0,a=u,o=f;break}if(A===o){y=!0,o=u,a=f;break}A=A.sibling}if(!y){for(A=f.child;A;){if(A===a){y=!0,a=f,o=u;break}if(A===o){y=!0,o=f,a=u;break}A=A.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case H:return"Suspense";case B:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case N:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var lt=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},yt=[],xt=-1;function L(e){return{current:e}}function nt(e){0>xt||(e.current=yt[xt],yt[xt]=null,xt--)}function St(e,n){xt++,yt[xt]=e.current,e.current=n}var At=L(null),Ut=L(null),it=L(null),ct=L(null);function Dt(e,n){switch(St(it,n),St(Ut,e),St(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?A_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=A_(n),e=R_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(At),St(At,e)}function Bt(){nt(At),nt(Ut),nt(it)}function Wt(e){e.memoizedState!==null&&St(ct,e);var n=At.current,a=R_(n,e.type);n!==a&&(St(Ut,e),St(At,a))}function he(e){Ut.current===e&&(nt(At),nt(Ut)),ct.current===e&&(nt(ct),Fo._currentValue=Z)}var zt,P;function Jt(e){if(zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);zt=n&&n[1]||"",P=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zt+e+P}var ie=!1;function ee(e,n){if(!e||ie)return"";ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var et=ot}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(ot){et=ot}e.call(mt.prototype)}}else{try{throw Error()}catch(ot){et=ot}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&et&&typeof ot.stack=="string")return[ot.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],A=f[1];if(y&&A){var F=y.split(`
`),$=A.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===$.length)for(o=F.length-1,u=$.length-1;1<=o&&0<=u&&F[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==$[u]){var ft=`
`+F[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=u);break}}}finally{ie=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Jt(a):""}function Vt(e,n){switch(e.tag){case 26:case 27:case 5:return Jt(e.type);case 16:return Jt("Lazy");case 13:return e.child!==n&&n!==null?Jt("Suspense Fallback"):Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return Jt("Activity");default:return""}}function we(e){try{var n="",a=null;do n+=Vt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var qt=Object.prototype.hasOwnProperty,le=r.unstable_scheduleCallback,en=r.unstable_cancelCallback,tn=r.unstable_shouldYield,U=r.unstable_requestPaint,T=r.unstable_now,tt=r.unstable_getCurrentPriorityLevel,dt=r.unstable_ImmediatePriority,Mt=r.unstable_UserBlockingPriority,ut=r.unstable_NormalPriority,Kt=r.unstable_LowPriority,Rt=r.unstable_IdlePriority,jt=r.log,Zt=r.unstable_setDisableYieldValue,Tt=null,Ct=null;function Qt(e){if(typeof jt=="function"&&Zt(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Tt,e)}catch{}}var It=Math.clz32?Math.clz32:k,Lt=Math.log,ue=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(Lt(e)/ue|0)|0}var bt=256,wt=262144,Ft=4194304;function Et(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Et(o):(y&=A,y!==0?u=Et(y):a||(a=A&~e,a!==0&&(u=Et(a))))):(A=o&~f,A!==0?u=Et(A):y!==0?u=Et(y):a||(a=o&~e,a!==0&&(u=Et(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ht(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function oe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Re(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ui(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,F=e.expirationTimes,$=e.hiddenUpdates;for(a=y&~a;0<a;){var ft=31-It(a),mt=1<<ft;A[ft]=0,F[ft]=-1;var et=$[ft];if(et!==null)for($[ft]=null,ft=0;ft<et.length;ft++){var ot=et[ft];ot!==null&&(ot.lane&=-536870913)}a&=~mt}o!==0&&Jr(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function Jr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-It(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Li(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-It(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Bs(e,n){var a=n&-n;return a=(a&42)!==0?1:Fs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Fs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function es(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:K_(e.type))}function $r(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var Jn=Math.random().toString(36).slice(2),un="__reactFiber$"+Jn,An="__reactProps$"+Jn,va="__reactContainer$"+Jn,to="__reactEvents$"+Jn,gu="__reactListeners$"+Jn,_u="__reactHandles$"+Jn,cl="__reactResources$"+Jn,ns="__reactMarker$"+Jn;function R(e){delete e[un],delete e[An],delete e[to],delete e[gu],delete e[_u]}function q(e){var n=e[un];if(n)return n;for(var a=e.parentNode;a;){if(n=a[va]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=O_(e);e!==null;){if(a=e[un])return a;e=O_(e)}return n}e=a,a=e.parentNode}return null}function at(e){if(e=e[un]||e[va]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function K(e){var n=e[cl];return n||(n=e[cl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vt(e){e[ns]=!0}var Nt=new Set,kt={};function Pt(e,n){$t(e,n),$t(e+"Capture",n)}function $t(e,n){for(kt[e]=n,e=0;e<n.length;e++)Nt.add(n[e])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},ve={};function Oe(e){return qt.call(ve,e)?!0:qt.call(te,e)?!1:re.test(e)?ve[e]=!0:(te[e]=!0,!1)}function qe(e,n,a){if(Oe(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Pe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ye(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function je(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ce(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Rn(e){if(!e._valueTracker){var n=je(e)?"checked":"value";e._valueTracker=Ce(e,n,""+e[n])}}function Wi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=je(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function En(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var is=/[\n"\\]/g;function Ee(e){return e.replace(is,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ln(e,n,a,o,u,f,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Xt(n)):e.value!==""+Xt(n)&&(e.value=""+Xt(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?_n(e,y,Xt(n)):a!=null?_n(e,y,Xt(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Xt(A):e.removeAttribute("name")}function In(e,n,a,o,u,f,y,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Rn(e);return}a=a!=null?""+Xt(a):"",n=n!=null?""+Xt(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Rn(e)}function _n(e,n,a){n==="number"&&En(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function on(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Xt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Gs(e,n,a){if(n!=null&&(n=""+Xt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Xt(a):""}function Ni(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(lt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Xt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Rn(e)}function Vs(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var oy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ep(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||oy.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Tp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ep(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Ep(e,f,n[f])}function vu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ly=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ul(e){return cy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qi(){}var yu=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ks=null,Xs=null;function bp(e){var n=at(e);if(n&&(e=n.stateNode)){var a=e[An]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ln(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ee(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[An]||null;if(!u)throw Error(s(90));Ln(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Wi(o)}break t;case"textarea":Gs(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&on(e,!!a.multiple,n,!1)}}}var xu=!1;function Ap(e,n,a){if(xu)return e(n,a);xu=!0;try{var o=e(n);return o}finally{if(xu=!1,(ks!==null||Xs!==null)&&(Ql(),ks&&(n=ks,e=Xs,Xs=ks=null,bp(n),e)))for(n=0;n<e.length;n++)bp(e[n])}}function eo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(Yi)try{var no={};Object.defineProperty(no,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{Mu=!1}var ya=null,Eu=null,fl=null;function Rp(){if(fl)return fl;var e,n=Eu,a=n.length,o,u="value"in ya?ya.value:ya.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return fl=u.slice(e,1<o?1-o:void 0)}function hl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function dl(){return!0}function Cp(){return!1}function kn(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?dl:Cp,this.isPropagationStopped=Cp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),n}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=kn(as),io=g({},as,{view:0,detail:0}),uy=kn(io),Tu,bu,ao,ml=g({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ao&&(ao&&e.type==="mousemove"?(Tu=e.screenX-ao.screenX,bu=e.screenY-ao.screenY):bu=Tu=0,ao=e),Tu)},movementY:function(e){return"movementY"in e?e.movementY:bu}}),wp=kn(ml),fy=g({},ml,{dataTransfer:0}),hy=kn(fy),dy=g({},io,{relatedTarget:0}),Au=kn(dy),py=g({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),my=kn(py),gy=g({},as,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_y=kn(gy),vy=g({},as,{data:0}),Dp=kn(vy),yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function My(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xy[e])?!!n[e]:!1}function Ru(){return My}var Ey=g({},io,{key:function(e){if(e.key){var n=yy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ty=kn(Ey),by=g({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=kn(by),Ay=g({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),Ry=kn(Ay),Cy=g({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),wy=kn(Cy),Dy=g({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uy=kn(Dy),Ly=g({},as,{newState:0,oldState:0}),Ny=kn(Ly),Oy=[9,13,27,32],Cu=Yi&&"CompositionEvent"in window,so=null;Yi&&"documentMode"in document&&(so=document.documentMode);var Py=Yi&&"TextEvent"in window&&!so,Lp=Yi&&(!Cu||so&&8<so&&11>=so),Np=" ",Op=!1;function Pp(e,n){switch(e){case"keyup":return Oy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ws=!1;function zy(e,n){switch(e){case"compositionend":return zp(n);case"keypress":return n.which!==32?null:(Op=!0,Np);case"textInput":return e=n.data,e===Np&&Op?null:e;default:return null}}function Iy(e,n){if(Ws)return e==="compositionend"||!Cu&&Pp(e,n)?(e=Rp(),fl=Eu=ya=null,Ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lp&&n.locale!=="ko"?null:n.data;default:return null}}var By={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!By[e.type]:n==="textarea"}function Bp(e,n,a,o){ks?Xs?Xs.push(o):Xs=[o]:ks=o,n=ac(n,"onChange"),0<n.length&&(a=new pl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ro=null,oo=null;function Fy(e){S_(e,0)}function gl(e){var n=rt(e);if(Wi(n))return e}function Fp(e,n){if(e==="change")return n}var Hp=!1;if(Yi){var wu;if(Yi){var Du="oninput"in document;if(!Du){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Du=typeof Gp.oninput=="function"}wu=Du}else wu=!1;Hp=wu&&(!document.documentMode||9<document.documentMode)}function Vp(){ro&&(ro.detachEvent("onpropertychange",kp),oo=ro=null)}function kp(e){if(e.propertyName==="value"&&gl(oo)){var n=[];Bp(n,oo,e,Su(e)),Ap(Fy,n)}}function Hy(e,n,a){e==="focusin"?(Vp(),ro=n,oo=a,ro.attachEvent("onpropertychange",kp)):e==="focusout"&&Vp()}function Gy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(oo)}function Vy(e,n){if(e==="click")return gl(n)}function ky(e,n){if(e==="input"||e==="change")return gl(n)}function Xy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:Xy;function lo(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!qt.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function Xp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wp(e,n){var a=Xp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Xp(a)}}function qp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Yp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=En(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=En(e.document)}return n}function Uu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Wy=Yi&&"documentMode"in document&&11>=document.documentMode,qs=null,Lu=null,co=null,Nu=!1;function jp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nu||qs==null||qs!==En(o)||(o=qs,"selectionStart"in o&&Uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),co&&lo(co,o)||(co=o,o=ac(Lu,"onSelect"),0<o.length&&(n=new pl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=qs)))}function ss(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ys={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionrun:ss("Transition","TransitionRun"),transitionstart:ss("Transition","TransitionStart"),transitioncancel:ss("Transition","TransitionCancel"),transitionend:ss("Transition","TransitionEnd")},Ou={},Zp={};Yi&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function rs(e){if(Ou[e])return Ou[e];if(!Ys[e])return e;var n=Ys[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Zp)return Ou[e]=n[a];return e}var Kp=rs("animationend"),Qp=rs("animationiteration"),Jp=rs("animationstart"),qy=rs("transitionrun"),Yy=rs("transitionstart"),jy=rs("transitioncancel"),$p=rs("transitionend"),tm=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function xi(e,n){tm.set(e,n),Pt(n,[e])}var _l=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],js=0,zu=0;function vl(){for(var e=js,n=zu=js=0;n<e;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&em(a,u,f)}}function yl(e,n,a,o){fi[js++]=e,fi[js++]=n,fi[js++]=a,fi[js++]=o,zu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Iu(e,n,a,o){return yl(e,n,a,o),Sl(e)}function os(e,n){return yl(e,null,null,n),Sl(e)}function em(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-It(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Sl(e){if(50<Lo)throw Lo=0,Yf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Zs={};function Zy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new Zy(e,n,a,o)}function Bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function nm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function xl(e,n,a,o,u,f){var y=0;if(o=e,typeof e=="function")Bu(e)&&(y=1);else if(typeof e=="string")y=tx(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=ti(31,a,n,u),e.elementType=C,e.lanes=f,e;case b:return ls(a.children,u,f,n);case M:y=8,u|=24;break;case _:return e=ti(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case H:return e=ti(13,a,n,u),e.elementType=H,e.lanes=f,e;case B:return e=ti(19,a,n,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:y=10;break t;case z:y=9;break t;case D:y=11;break t;case O:y=14;break t;case X:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function ls(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function Fu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function im(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Hu(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var am=new WeakMap;function hi(e,n){if(typeof e=="object"&&e!==null){var a=am.get(e);return a!==void 0?a:(n={value:e,source:n,stack:we(n)},am.set(e,n),n)}return{value:e,source:n,stack:we(n)}}var Ks=[],Qs=0,Ml=null,uo=0,di=[],pi=0,Sa=null,Oi=1,Pi="";function Zi(e,n){Ks[Qs++]=uo,Ks[Qs++]=Ml,Ml=e,uo=n}function sm(e,n,a){di[pi++]=Oi,di[pi++]=Pi,di[pi++]=Sa,Sa=e;var o=Oi;e=Pi;var u=32-It(o)-1;o&=~(1<<u),a+=1;var f=32-It(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Oi=1<<32-It(n)+u|a<<u|o,Pi=f+e}else Oi=1<<f|a<<u|o,Pi=e}function Gu(e){e.return!==null&&(Zi(e,1),sm(e,1,0))}function Vu(e){for(;e===Ml;)Ml=Ks[--Qs],Ks[Qs]=null,uo=Ks[--Qs],Ks[Qs]=null;for(;e===Sa;)Sa=di[--pi],di[pi]=null,Pi=di[--pi],di[pi]=null,Oi=di[--pi],di[pi]=null}function rm(e,n){di[pi++]=Oi,di[pi++]=Pi,di[pi++]=Sa,Oi=n.id,Pi=n.overflow,Sa=e}var Cn=null,Ze=null,Ae=!1,xa=null,mi=!1,ku=Error(s(519));function Ma(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fo(hi(n,e)),ku}function om(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[un]=e,n[An]=o,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<Oo.length;a++)xe(Oo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),In(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Ni(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||T_(n.textContent,a)?(o.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),o.onScroll!=null&&xe("scroll",n),o.onScrollEnd!=null&&xe("scrollend",n),o.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Ma(e,!0)}function lm(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Cn=Cn.return}}function Js(e){if(e!==Cn)return!1;if(!Ae)return lm(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||lh(e.type,e.memoizedProps)),a=!a),a&&Ze&&Ma(e),lm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=N_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=N_(e)}else n===27?(n=Ze,za(e.type)?(e=dh,dh=null,Ze=e):Ze=n):Ze=Cn?_i(e.stateNode.nextSibling):null;return!0}function cs(){Ze=Cn=null,Ae=!1}function Xu(){var e=xa;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),xa=null),e}function fo(e){xa===null?xa=[e]:xa.push(e)}var Wu=L(null),us=null,Ki=null;function Ea(e,n,a){St(Wu,n._currentValue),n._currentValue=a}function Qi(e){e._currentValue=Wu.current,nt(Wu)}function qu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Yu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var F=0;F<n.length;F++)if(A.context===n[F]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),qu(f.return,a,e),o||(y=null);break t}f=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),qu(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function $s(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var A=u.type;$n(u.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(u===ct.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Fo):e=[Fo])}u=u.return}e!==null&&Yu(n,e,a,o),n.flags|=262144}function El(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fs(e){us=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return cm(us,e)}function Tl(e,n){return us===null&&fs(e),cm(e,n)}function cm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ki===null){if(e===null)throw Error(s(308));Ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ki=Ki.next=n;return a}var Ky=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Qy=r.unstable_scheduleCallback,Jy=r.unstable_NormalPriority,fn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new Ky,data:new Map,refCount:0}}function ho(e){e.refCount--,e.refCount===0&&Qy(Jy,function(){e.controller.abort()})}var po=null,Zu=0,tr=0,er=null;function $y(e,n){if(po===null){var a=po=[];Zu=0,tr=$f(),er={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Zu++,n.then(um,um),n}function um(){if(--Zu===0&&po!==null){er!==null&&(er.status="fulfilled");var e=po;po=null,tr=0,er=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function tS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var fm=I.S;I.S=function(e,n){jg=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&$y(e,n),fm!==null&&fm(e,n)};var hs=L(null);function Ku(){var e=hs.current;return e!==null?e:Ye.pooledCache}function bl(e,n){n===null?St(hs,hs.current):St(hs,n.pool)}function hm(){var e=Ku();return e===null?null:{parent:fn._currentValue,pool:e}}var nr=Error(s(460)),Qu=Error(s(474)),Al=Error(s(542)),Rl={then:function(){}};function dm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gm(e),e;default:if(typeof n.status=="string")n.then(qi,qi);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gm(e),e}throw ps=n,nr}}function ds(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ps=a,nr):a}}var ps=null;function mm(){if(ps===null)throw Error(s(459));var e=ps;return ps=null,e}function gm(e){if(e===nr||e===Al)throw Error(s(483))}var ir=null,mo=0;function Cl(e){var n=mo;return mo+=1,ir===null&&(ir=[]),pm(ir,e,n)}function go(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function wl(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function _m(e){function n(Y,V){if(e){var J=Y.deletions;J===null?(Y.deletions=[V],Y.flags|=16):J.push(V)}}function a(Y,V){if(!e)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function o(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function u(Y,V){return Y=ji(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,J){return Y.index=J,e?(J=Y.alternate,J!==null?(J=J.index,J<V?(Y.flags|=67108866,V):J):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function y(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,V,J,pt){return V===null||V.tag!==6?(V=Fu(J,Y.mode,pt),V.return=Y,V):(V=u(V,J),V.return=Y,V)}function F(Y,V,J,pt){var ne=J.type;return ne===b?ft(Y,V,J.props.children,pt,J.key):V!==null&&(V.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===X&&ds(ne)===V.type)?(V=u(V,J.props),go(V,J),V.return=Y,V):(V=xl(J.type,J.key,J.props,null,Y.mode,pt),go(V,J),V.return=Y,V)}function $(Y,V,J,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Hu(J,Y.mode,pt),V.return=Y,V):(V=u(V,J.children||[]),V.return=Y,V)}function ft(Y,V,J,pt,ne){return V===null||V.tag!==7?(V=ls(J,Y.mode,pt,ne),V.return=Y,V):(V=u(V,J),V.return=Y,V)}function mt(Y,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Fu(""+V,Y.mode,J),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return J=xl(V.type,V.key,V.props,null,Y.mode,J),go(J,V),J.return=Y,J;case E:return V=Hu(V,Y.mode,J),V.return=Y,V;case X:return V=ds(V),mt(Y,V,J)}if(lt(V)||Q(V))return V=ls(V,Y.mode,J,null),V.return=Y,V;if(typeof V.then=="function")return mt(Y,Cl(V),J);if(V.$$typeof===N)return mt(Y,Tl(Y,V),J);wl(Y,V)}return null}function et(Y,V,J,pt){var ne=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return ne!==null?null:A(Y,V,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case S:return J.key===ne?F(Y,V,J,pt):null;case E:return J.key===ne?$(Y,V,J,pt):null;case X:return J=ds(J),et(Y,V,J,pt)}if(lt(J)||Q(J))return ne!==null?null:ft(Y,V,J,pt,null);if(typeof J.then=="function")return et(Y,V,Cl(J),pt);if(J.$$typeof===N)return et(Y,V,Tl(Y,J),pt);wl(Y,J)}return null}function ot(Y,V,J,pt,ne){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(J)||null,A(V,Y,""+pt,ne);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case S:return Y=Y.get(pt.key===null?J:pt.key)||null,F(V,Y,pt,ne);case E:return Y=Y.get(pt.key===null?J:pt.key)||null,$(V,Y,pt,ne);case X:return pt=ds(pt),ot(Y,V,J,pt,ne)}if(lt(pt)||Q(pt))return Y=Y.get(J)||null,ft(V,Y,pt,ne,null);if(typeof pt.then=="function")return ot(Y,V,J,Cl(pt),ne);if(pt.$$typeof===N)return ot(Y,V,J,Tl(V,pt),ne);wl(V,pt)}return null}function Gt(Y,V,J,pt){for(var ne=null,De=null,Yt=V,de=V=0,be=null;Yt!==null&&de<J.length;de++){Yt.index>de?(be=Yt,Yt=null):be=Yt.sibling;var Ue=et(Y,Yt,J[de],pt);if(Ue===null){Yt===null&&(Yt=be);break}e&&Yt&&Ue.alternate===null&&n(Y,Yt),V=f(Ue,V,de),De===null?ne=Ue:De.sibling=Ue,De=Ue,Yt=be}if(de===J.length)return a(Y,Yt),Ae&&Zi(Y,de),ne;if(Yt===null){for(;de<J.length;de++)Yt=mt(Y,J[de],pt),Yt!==null&&(V=f(Yt,V,de),De===null?ne=Yt:De.sibling=Yt,De=Yt);return Ae&&Zi(Y,de),ne}for(Yt=o(Yt);de<J.length;de++)be=ot(Yt,Y,de,J[de],pt),be!==null&&(e&&be.alternate!==null&&Yt.delete(be.key===null?de:be.key),V=f(be,V,de),De===null?ne=be:De.sibling=be,De=be);return e&&Yt.forEach(function(Ga){return n(Y,Ga)}),Ae&&Zi(Y,de),ne}function se(Y,V,J,pt){if(J==null)throw Error(s(151));for(var ne=null,De=null,Yt=V,de=V=0,be=null,Ue=J.next();Yt!==null&&!Ue.done;de++,Ue=J.next()){Yt.index>de?(be=Yt,Yt=null):be=Yt.sibling;var Ga=et(Y,Yt,Ue.value,pt);if(Ga===null){Yt===null&&(Yt=be);break}e&&Yt&&Ga.alternate===null&&n(Y,Yt),V=f(Ga,V,de),De===null?ne=Ga:De.sibling=Ga,De=Ga,Yt=be}if(Ue.done)return a(Y,Yt),Ae&&Zi(Y,de),ne;if(Yt===null){for(;!Ue.done;de++,Ue=J.next())Ue=mt(Y,Ue.value,pt),Ue!==null&&(V=f(Ue,V,de),De===null?ne=Ue:De.sibling=Ue,De=Ue);return Ae&&Zi(Y,de),ne}for(Yt=o(Yt);!Ue.done;de++,Ue=J.next())Ue=ot(Yt,Y,de,Ue.value,pt),Ue!==null&&(e&&Ue.alternate!==null&&Yt.delete(Ue.key===null?de:Ue.key),V=f(Ue,V,de),De===null?ne=Ue:De.sibling=Ue,De=Ue);return e&&Yt.forEach(function(fx){return n(Y,fx)}),Ae&&Zi(Y,de),ne}function Ge(Y,V,J,pt){if(typeof J=="object"&&J!==null&&J.type===b&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case S:t:{for(var ne=J.key;V!==null;){if(V.key===ne){if(ne=J.type,ne===b){if(V.tag===7){a(Y,V.sibling),pt=u(V,J.props.children),pt.return=Y,Y=pt;break t}}else if(V.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===X&&ds(ne)===V.type){a(Y,V.sibling),pt=u(V,J.props),go(pt,J),pt.return=Y,Y=pt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}J.type===b?(pt=ls(J.props.children,Y.mode,pt,J.key),pt.return=Y,Y=pt):(pt=xl(J.type,J.key,J.props,null,Y.mode,pt),go(pt,J),pt.return=Y,Y=pt)}return y(Y);case E:t:{for(ne=J.key;V!==null;){if(V.key===ne)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(Y,V.sibling),pt=u(V,J.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}pt=Hu(J,Y.mode,pt),pt.return=Y,Y=pt}return y(Y);case X:return J=ds(J),Ge(Y,V,J,pt)}if(lt(J))return Gt(Y,V,J,pt);if(Q(J)){if(ne=Q(J),typeof ne!="function")throw Error(s(150));return J=ne.call(J),se(Y,V,J,pt)}if(typeof J.then=="function")return Ge(Y,V,Cl(J),pt);if(J.$$typeof===N)return Ge(Y,V,Tl(Y,J),pt);wl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(Y,V.sibling),pt=u(V,J),pt.return=Y,Y=pt):(a(Y,V),pt=Fu(J,Y.mode,pt),pt.return=Y,Y=pt),y(Y)):a(Y,V)}return function(Y,V,J,pt){try{mo=0;var ne=Ge(Y,V,J,pt);return ir=null,ne}catch(Yt){if(Yt===nr||Yt===Al)throw Yt;var De=ti(29,Yt,null,Y.mode);return De.lanes=pt,De.return=Y,De}}}var ms=_m(!0),vm=_m(!1),Ta=!1;function Ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Aa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Sl(e),em(e,null,a),n}return yl(e,o,n,a),Sl(e)}function _o(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Li(e,a)}}function tf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ef=!1;function vo(){if(ef){var e=er;if(e!==null)throw e}}function yo(e,n,a,o){ef=!1;var u=e.updateQueue;Ta=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var F=A,$=F.next;F.next=null,y===null?f=$:y.next=$,y=F;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==y&&(A===null?ft.firstBaseUpdate=$:A.next=$,ft.lastBaseUpdate=F))}if(f!==null){var mt=u.baseState;y=0,ft=$=F=null,A=f;do{var et=A.lane&-536870913,ot=et!==A.lane;if(ot?(Te&et)===et:(o&et)===et){et!==0&&et===tr&&(ef=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Gt=e,se=A;et=n;var Ge=a;switch(se.tag){case 1:if(Gt=se.payload,typeof Gt=="function"){mt=Gt.call(Ge,mt,et);break t}mt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=se.payload,et=typeof Gt=="function"?Gt.call(Ge,mt,et):Gt,et==null)break t;mt=g({},mt,et);break t;case 2:Ta=!0}}et=A.callback,et!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[et]:ot.push(et))}else ot={lane:et,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?($=ft=ot,F=mt):ft=ft.next=ot,y|=et;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ft===null&&(F=mt),u.baseState=F,u.firstBaseUpdate=$,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),Ua|=y,e.lanes=y,e.memoizedState=mt}}function ym(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Sm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ym(a[e],n)}var ar=L(null),Dl=L(0);function xm(e,n){e=ra,St(Dl,e),St(ar,n),ra=e|n.baseLanes}function nf(){St(Dl,ra),St(ar,ar.current)}function af(){ra=Dl.current,nt(ar),nt(Dl)}var ei=L(null),gi=null;function Ra(e){var n=e.alternate;St(ln,ln.current&1),St(ei,e),gi===null&&(n===null||ar.current!==null||n.memoizedState!==null)&&(gi=e)}function sf(e){St(ln,ln.current),St(ei,e),gi===null&&(gi=e)}function Mm(e){e.tag===22?(St(ln,ln.current),St(ei,e),gi===null&&(gi=e)):Ca()}function Ca(){St(ln,ln.current),St(ei,ei.current)}function ni(e){nt(ei),gi===e&&(gi=null),nt(ln)}var ln=L(0);function Ul(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fh(a)||hh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ji=0,fe=null,Fe=null,hn=null,Ll=!1,sr=!1,gs=!1,Nl=0,So=0,rr=null,eS=0;function nn(){throw Error(s(321))}function rf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function of(e,n,a,o,u,f){return Ji=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?sg:Mf,gs=!1,f=a(o,u),gs=!1,sr&&(f=Tm(n,a,o,u)),Em(e),f}function Em(e){I.H=Eo;var n=Fe!==null&&Fe.next!==null;if(Ji=0,hn=Fe=fe=null,Ll=!1,So=0,rr=null,n)throw Error(s(300));e===null||dn||(e=e.dependencies,e!==null&&El(e)&&(dn=!0))}function Tm(e,n,a,o){fe=e;var u=0;do{if(sr&&(rr=null),So=0,sr=!1,25<=u)throw Error(s(301));if(u+=1,hn=Fe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=rg,f=n(a,o)}while(sr);return f}function nS(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?xo(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(fe.flags|=1024),n}function lf(){var e=Nl!==0;return Nl=0,e}function cf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function uf(e){if(Ll){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ll=!1}Ji=0,hn=Fe=fe=null,sr=!1,So=Nl=0,rr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?fe.memoizedState=hn=e:hn=hn.next=e,hn}function cn(){if(Fe===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=hn===null?fe.memoizedState:hn.next;if(n!==null)hn=n,Fe=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},hn===null?fe.memoizedState=hn=e:hn=hn.next=e}return hn}function Ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(e){var n=So;return So+=1,rr===null&&(rr=[]),e=pm(rr,e,n),n=fe,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?sg:Mf),e}function Pl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xo(e);if(e.$$typeof===N)return wn(e)}throw Error(s(438,String(e)))}function ff(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ol(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function $i(e,n){return typeof n=="function"?n(e):n}function zl(e){var n=cn();return hf(n,Fe,e)}function hf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=y=null,F=null,$=n,ft=!1;do{var mt=$.lane&-536870913;if(mt!==$.lane?(Te&mt)===mt:(Ji&mt)===mt){var et=$.revertLane;if(et===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),mt===tr&&(ft=!0);else if((Ji&et)===et){$=$.next,et===tr&&(ft=!0);continue}else mt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},F===null?(A=F=mt,y=f):F=F.next=mt,fe.lanes|=et,Ua|=et;mt=$.action,gs&&a(f,mt),f=$.hasEagerState?$.eagerState:a(f,mt)}else et={lane:mt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},F===null?(A=F=et,y=f):F=F.next=et,fe.lanes|=mt,Ua|=mt;$=$.next}while($!==null&&$!==n);if(F===null?y=f:F.next=A,!$n(f,e.memoizedState)&&(dn=!0,ft&&(a=er,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=F,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function df(e){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);$n(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function bm(e,n,a){var o=fe,u=cn(),f=Ae;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!$n((Fe||u).memoizedState,a);if(y&&(u.memoizedState=a,dn=!0),u=u.queue,gf(Cm.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,or(9,{destroy:void 0},Rm.bind(null,o,u,a,n),null),Ye===null)throw Error(s(349));f||(Ji&127)!==0||Am(o,n,a)}return a}function Am(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Ol(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Rm(e,n,a,o){n.value=a,n.getSnapshot=o,wm(n)&&Dm(e)}function Cm(e,n,a){return a(function(){wm(n)&&Dm(e)})}function wm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Dm(e){var n=os(e,2);n!==null&&jn(n,e,2)}function pf(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),gs){Qt(!0);try{a()}finally{Qt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},n}function Um(e,n,a,o){return e.baseState=a,hf(e,Fe,typeof o=="function"?o:$i)}function iS(e,n,a,o,u){if(Fl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};I.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Lm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Lm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=I.T,y={};I.T=y;try{var A=a(u,o),F=I.S;F!==null&&F(y,A),Nm(e,n,A)}catch($){mf(e,n,$)}finally{f!==null&&y.types!==null&&(f.types=y.types),I.T=f}}else try{f=a(u,o),Nm(e,n,f)}catch($){mf(e,n,$)}}function Nm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Om(e,n,o)},function(o){return mf(e,n,o)}):Om(e,n,a)}function Om(e,n,a){n.status="fulfilled",n.value=a,Pm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Lm(e,a)))}function mf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Pm(n),n=n.next;while(n!==o)}e.action=null}function Pm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function zm(e,n){return n}function Im(e,n){if(Ae){var a=Ye.formState;if(a!==null){t:{var o=fe;if(Ae){if(Ze){e:{for(var u=Ze,f=mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=_i(u.nextSibling),o=u.data==="F!";break t}}Ma(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zm,lastRenderedState:n},a.queue=o,a=ng.bind(null,fe,o),o.dispatch=a,o=pf(!1),f=xf.bind(null,fe,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=iS.bind(null,fe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Bm(e){var n=cn();return Fm(n,Fe,e)}function Fm(e,n,a){if(n=hf(e,n,zm)[0],e=zl($i)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(y){throw y===nr?Al:y}else o=n;n=cn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,or(9,{destroy:void 0},aS.bind(null,u,a),null)),[o,f,e]}function aS(e,n){e.action=n}function Hm(e){var n=cn(),a=Fe;if(a!==null)return Fm(n,a,e);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function or(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Ol(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Gm(){return cn().memoizedState}function Il(e,n,a,o){var u=Bn();fe.flags|=e,u.memoizedState=or(1|n,{destroy:void 0},a,o===void 0?null:o)}function Bl(e,n,a,o){var u=cn();o=o===void 0?null:o;var f=u.memoizedState.inst;Fe!==null&&o!==null&&rf(o,Fe.memoizedState.deps)?u.memoizedState=or(n,f,a,o):(fe.flags|=e,u.memoizedState=or(1|n,f,a,o))}function Vm(e,n){Il(8390656,8,e,n)}function gf(e,n){Bl(2048,8,e,n)}function sS(e){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=Ol(),fe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function km(e){var n=cn().memoizedState;return sS({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Xm(e,n){return Bl(4,2,e,n)}function Wm(e,n){return Bl(4,4,e,n)}function qm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ym(e,n,a){a=a!=null?a.concat([e]):null,Bl(4,4,qm.bind(null,n,e),a)}function _f(){}function jm(e,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&rf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Zm(e,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&rf(n,o[1]))return o[0];if(o=e(),gs){Qt(!0);try{e()}finally{Qt(!1)}}return a.memoizedState=[o,n],o}function vf(e,n,a){return a===void 0||(Ji&1073741824)!==0&&(Te&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Kg(),fe.lanes|=e,Ua|=e,a)}function Km(e,n,a,o){return $n(a,n)?a:ar.current!==null?(e=vf(e,a,o),$n(e,n)||(dn=!0),e):(Ji&42)===0||(Ji&1073741824)!==0&&(Te&261930)===0?(dn=!0,e.memoizedState=a):(e=Kg(),fe.lanes|=e,Ua|=e,n)}function Qm(e,n,a,o,u){var f=W.p;W.p=f!==0&&8>f?f:8;var y=I.T,A={};I.T=A,xf(e,!1,n,a);try{var F=u(),$=I.S;if($!==null&&$(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ft=tS(F,o);Mo(e,n,ft,si(e))}else Mo(e,n,o,si(e))}catch(mt){Mo(e,n,{then:function(){},status:"rejected",reason:mt},si())}finally{W.p=f,y!==null&&A.types!==null&&(y.types=A.types),I.T=y}}function rS(){}function yf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Jm(e).queue;Qm(e,u,n,Z,a===null?rS:function(){return $m(e),a(o)})}function Jm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function $m(e){var n=Jm(e);n.next===null&&(n=e.alternate.memoizedState),Mo(e,n.next.queue,{},si())}function Sf(){return wn(Fo)}function tg(){return cn().memoizedState}function eg(){return cn().memoizedState}function oS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=ba(a);var o=Aa(n,e,a);o!==null&&(jn(o,n,a),_o(o,n,a)),n={cache:ju()},e.payload=n;return}n=n.return}}function lS(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fl(e)?ig(n,a):(a=Iu(e,n,a,o),a!==null&&(jn(a,e,o),ag(a,n,o)))}function ng(e,n,a){var o=si();Mo(e,n,a,o)}function Mo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fl(e))ig(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,A=f(y,a);if(u.hasEagerState=!0,u.eagerState=A,$n(A,y))return yl(e,n,u,0),Ye===null&&vl(),!1}catch{}if(a=Iu(e,n,u,o),a!==null)return jn(a,e,o),ag(a,n,o),!0}return!1}function xf(e,n,a,o){if(o={lane:2,revertLane:$f(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Fl(e)){if(n)throw Error(s(479))}else n=Iu(e,a,o,2),n!==null&&jn(n,e,2)}function Fl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function ig(e,n){sr=Ll=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ag(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Li(e,a)}}var Eo={readContext:wn,use:Pl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};Eo.useEffectEvent=nn;var sg={readContext:wn,use:Pl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:Vm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Il(4194308,4,qm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Il(4194308,4,e,n)},useInsertionEffect:function(e,n){Il(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(gs){Qt(!0);try{e()}finally{Qt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(gs){Qt(!0);try{a(n)}finally{Qt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=lS.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=pf(e);var n=e.queue,a=ng.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:_f,useDeferredValue:function(e,n){var a=Bn();return vf(a,e,n)},useTransition:function(){var e=pf(!1);return e=Qm.bind(null,fe,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=fe,u=Bn();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Te&127)!==0||Am(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Vm(Cm.bind(null,o,f,e),[e]),o.flags|=2048,or(9,{destroy:void 0},Rm.bind(null,o,f,a,n),null),a},useId:function(){var e=Bn(),n=Ye.identifierPrefix;if(Ae){var a=Pi,o=Oi;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=eS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Sf,useFormState:Im,useActionState:Im,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xf.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:ff,useCacheRefresh:function(){return Bn().memoizedState=oS.bind(null,fe)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Mf={readContext:wn,use:Pl,useCallback:jm,useContext:wn,useEffect:gf,useImperativeHandle:Ym,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Zm,useReducer:zl,useRef:Gm,useState:function(){return zl($i)},useDebugValue:_f,useDeferredValue:function(e,n){var a=cn();return Km(a,Fe.memoizedState,e,n)},useTransition:function(){var e=zl($i)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:bm,useId:tg,useHostTransitionStatus:Sf,useFormState:Bm,useActionState:Bm,useOptimistic:function(e,n){var a=cn();return Um(a,Fe,e,n)},useMemoCache:ff,useCacheRefresh:eg};Mf.useEffectEvent=km;var rg={readContext:wn,use:Pl,useCallback:jm,useContext:wn,useEffect:gf,useImperativeHandle:Ym,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Zm,useReducer:df,useRef:Gm,useState:function(){return df($i)},useDebugValue:_f,useDeferredValue:function(e,n){var a=cn();return Fe===null?vf(a,e,n):Km(a,Fe.memoizedState,e,n)},useTransition:function(){var e=df($i)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:bm,useId:tg,useHostTransitionStatus:Sf,useFormState:Hm,useActionState:Hm,useOptimistic:function(e,n){var a=cn();return Fe!==null?Um(a,Fe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ff,useCacheRefresh:eg};rg.useEffectEvent=km;function Ef(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Tf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=ba(o);u.payload=n,a!=null&&(u.callback=a),n=Aa(e,u,o),n!==null&&(jn(n,e,o),_o(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=ba(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Aa(e,u,o),n!==null&&(jn(n,e,o),_o(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=ba(a);o.tag=2,n!=null&&(o.callback=n),n=Aa(e,o,a),n!==null&&(jn(n,e,a),_o(n,e,a))}};function og(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!lo(a,o)||!lo(u,f):!0}function lg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Tf.enqueueReplaceState(n,n.state,null)}function _s(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function cg(e){_l(e)}function ug(e){console.error(e)}function fg(e){_l(e)}function Hl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function hg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function bf(e,n,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Hl(e,n)},a}function dg(e){return e=ba(e),e.tag=3,e}function pg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){hg(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){hg(n,a,o),typeof u!="function"&&(La===null?La=new Set([this]):La.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function cS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$s(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?Jl():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Kf(e,o,u)),!1;case 22:return a.flags|=65536,o===Rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Kf(e,o,u)),!1}throw Error(s(435,a.tag))}return Kf(e,o,u),Jl(),!1}if(Ae)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ku&&(e=Error(s(422),{cause:o}),fo(hi(e,a)))):(o!==ku&&(n=Error(s(423),{cause:o}),fo(hi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=hi(o,a),u=bf(e.stateNode,o,u),tf(e,u),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:o});if(f=hi(f,a),Uo===null?Uo=[f]:Uo.push(f),an!==4&&(an=2),n===null)return!0;o=hi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=bf(a.stateNode,o,e),tf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(La===null||!La.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=dg(u),pg(u,e,a,o),tf(a,u),!1}a=a.return}while(a!==null);return!1}var Af=Error(s(461)),dn=!1;function Dn(e,n,a,o){n.child=e===null?vm(n,null,a,o):ms(n,e.child,a,o)}function mg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return fs(n),o=of(e,n,a,y,f,u),A=lf(),e!==null&&!dn?(cf(e,n,u),ta(e,n,u)):(Ae&&A&&Gu(n),n.flags|=1,Dn(e,n,o,u),n.child)}function gg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Bu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,_g(e,n,f,o,u)):(e=xl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Of(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:lo,a(y,o)&&e.ref===n.ref)return ta(e,n,u)}return n.flags|=1,e=ji(f,o),e.ref=n.ref,e.return=n,n.child=e}function _g(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(lo(f,o)&&e.ref===n.ref)if(dn=!1,n.pendingProps=o=f,Of(e,u))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,ta(e,n,u)}return Rf(e,n,a,o,u)}function vg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return yg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&bl(n,f!==null?f.cachePool:null),f!==null?xm(n,f):nf(),Mm(n);else return o=n.lanes=536870912,yg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(bl(n,f.cachePool),xm(n,f),Ca(),n.memoizedState=null):(e!==null&&bl(n,null),nf(),Ca());return Dn(e,n,u,a),n.child}function To(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function yg(e,n,a,o,u){var f=Ku();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&bl(n,null),nf(),Mm(n),e!==null&&$s(e,n,o,!0),n.childLanes=u,null}function Gl(e,n){return n=kl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Sg(e,n,a){return ms(n,e.child,null,a),e=Gl(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function uS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(o.mode==="hidden")return e=Gl(n,o),n.lanes=536870912,To(null,e);if(sf(n),(e=Ze)?(e=L_(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Sa!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=im(e),a.return=n,n.child=a,Cn=n,Ze=null)):e=null,e===null)throw Ma(n);return n.lanes=536870912,null}return Gl(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(sf(n),u)if(n.flags&256)n.flags&=-257,n=Sg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||$s(e,n,a,!1),u=(a&e.childLanes)!==0,dn||u){if(o=Ye,o!==null&&(y=Bs(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,os(e,y),jn(o,e,y),Af;Jl(),n=Sg(e,n,a)}else e=f.treeContext,Ze=_i(y.nextSibling),Cn=n,Ae=!0,xa=null,mi=!1,e!==null&&rm(n,e),n=Gl(n,o),n.flags|=4096;return n}return e=ji(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Vl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Rf(e,n,a,o,u){return fs(n),a=of(e,n,a,o,void 0,u),o=lf(),e!==null&&!dn?(cf(e,n,u),ta(e,n,u)):(Ae&&o&&Gu(n),n.flags|=1,Dn(e,n,a,u),n.child)}function xg(e,n,a,o,u,f){return fs(n),n.updateQueue=null,a=Tm(n,o,a,u),Em(e),o=lf(),e!==null&&!dn?(cf(e,n,f),ta(e,n,f)):(Ae&&o&&Gu(n),n.flags|=1,Dn(e,n,a,f),n.child)}function Mg(e,n,a,o,u){if(fs(n),n.stateNode===null){var f=Zs,y=a.contextType;typeof y=="object"&&y!==null&&(f=wn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Tf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ju(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?wn(y):Zs,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Ef(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Tf.enqueueReplaceState(f,f.state,null),yo(n,o,f,u),vo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,F=_s(a,A);f.props=F;var $=f.context,ft=a.contextType;y=Zs,typeof ft=="object"&&ft!==null&&(y=wn(ft));var mt=a.getDerivedStateFromProps;ft=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||$!==y)&&lg(n,f,o,y),Ta=!1;var et=n.memoizedState;f.state=et,yo(n,o,f,u),vo(),$=n.memoizedState,A||et!==$||Ta?(typeof mt=="function"&&(Ef(n,a,mt,o),$=n.memoizedState),(F=Ta||og(n,a,F,o,et,$,y))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=y,o=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,$u(e,n),y=n.memoizedProps,ft=_s(a,y),f.props=ft,mt=n.pendingProps,et=f.context,$=a.contextType,F=Zs,typeof $=="object"&&$!==null&&(F=wn($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==mt||et!==F)&&lg(n,f,o,F),Ta=!1,et=n.memoizedState,f.state=et,yo(n,o,f,u),vo();var ot=n.memoizedState;y!==mt||et!==ot||Ta||e!==null&&e.dependencies!==null&&El(e.dependencies)?(typeof A=="function"&&(Ef(n,a,A,o),ot=n.memoizedState),(ft=Ta||og(n,a,ft,o,et,ot,F)||e!==null&&e.dependencies!==null&&El(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ot,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ot,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),f.props=o,f.state=ot,f.context=F,o=ft):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Vl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=ms(n,e.child,null,u),n.child=ms(n,null,a,u)):Dn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ta(e,n,u),e}function Eg(e,n,a,o){return cs(),n.flags|=256,Dn(e,n,a,o),n.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(e){return{baseLanes:e,cachePool:hm()}}function Df(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function Tg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?Ra(n):Ca(),(e=Ze)?(e=L_(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Sa!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=im(e),a.return=n,n.child=a,Cn=n,Ze=null)):e=null,e===null)throw Ma(n);return hh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ca(),u=n.mode,A=kl({mode:"hidden",children:A},u),o=ls(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=wf(a),o.childLanes=Df(e,y,a),n.memoizedState=Cf,To(null,o)):(Ra(n),Uf(n,A))}var F=e.memoizedState;if(F!==null&&(A=F.dehydrated,A!==null)){if(f)n.flags&256?(Ra(n),n.flags&=-257,n=Lf(e,n,a)):n.memoizedState!==null?(Ca(),n.child=e.child,n.flags|=128,n=null):(Ca(),A=o.fallback,u=n.mode,o=kl({mode:"visible",children:o.children},u),A=ls(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,ms(n,e.child,null,a),o=n.child,o.memoizedState=wf(a),o.childLanes=Df(e,y,a),n.memoizedState=Cf,n=To(null,o));else if(Ra(n),hh(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var $=y.dgst;y=$,o=Error(s(419)),o.stack="",o.digest=y,fo({value:o,source:null,stack:null}),n=Lf(e,n,a)}else if(dn||$s(e,n,a,!1),y=(a&e.childLanes)!==0,dn||y){if(y=Ye,y!==null&&(o=Bs(y,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,os(e,o),jn(y,e,o),Af;fh(A)||Jl(),n=Lf(e,n,a)}else fh(A)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,Ze=_i(A.nextSibling),Cn=n,Ae=!0,xa=null,mi=!1,e!==null&&rm(n,e),n=Uf(n,o.children),n.flags|=4096);return n}return u?(Ca(),A=o.fallback,u=n.mode,F=e.child,$=F.sibling,o=ji(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,$!==null?A=ji($,A):(A=ls(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,To(null,o),o=n.child,A=e.child.memoizedState,A===null?A=wf(a):(u=A.cachePool,u!==null?(F=fn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=hm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Df(e,y,a),n.memoizedState=Cf,To(e.child,o)):(Ra(n),a=e.child,e=a.sibling,a=ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Uf(e,n){return n=kl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function kl(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function Lf(e,n,a){return ms(n,e.child,null,a),e=Uf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function bg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),qu(e.return,n,a)}function Nf(e,n,a,o,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function Ag(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=ln.current,A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,St(ln,y),Dn(e,n,o,a),o=Ae?uo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bg(e,a,n);else if(e.tag===19)bg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ul(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Nf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ul(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Nf(n,!0,a,null,f,o);break;case"together":Nf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ta(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ua|=n.lanes,(a&n.childLanes)===0)if(e!==null){if($s(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ji(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ji(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&El(e)))}function fS(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),Ea(n,fn,e.memoizedState.cache),cs();break;case 27:case 5:Wt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:Ea(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,sf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ra(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Tg(e,n,a):(Ra(n),e=ta(e,n,a),e!==null?e.sibling:null);Ra(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($s(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Ag(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(ln,ln.current),o)break;return null;case 22:return n.lanes=0,vg(e,n,a,n.pendingProps);case 24:Ea(n,fn,e.memoizedState.cache)}return ta(e,n,a)}function Rg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Of(e,a)&&(n.flags&128)===0)return dn=!1,fS(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,Ae&&(n.flags&1048576)!==0&&sm(n,uo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ds(n.elementType),n.type=e,typeof e=="function")Bu(e)?(o=_s(e,o),n.tag=1,n=Mg(null,n,e,o,a)):(n.tag=0,n=Rf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=mg(null,n,e,o,a);break t}else if(u===O){n.tag=14,n=gg(null,n,e,o,a);break t}}throw n=ht(e)||e,Error(s(306,n,""))}}return n;case 0:return Rf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=_s(o,n.pendingProps),Mg(e,n,o,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,$u(e,n),yo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ea(n,fn,o),o!==f.cache&&Yu(n,[fn],a,!0),vo(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Eg(e,n,o,a);break t}else if(o!==u){u=hi(Error(s(424)),n),fo(u),n=Eg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=_i(e.firstChild),Cn=n,Ae=!0,xa=null,mi=!0,a=vm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(cs(),o===u){n=ta(e,n,a);break t}Dn(e,n,o,a)}n=n.child}return n;case 26:return Vl(e,n),e===null?(a=B_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=sc(it.current).createElement(a),o[un]=n,o[An]=e,Un(o,a,e),vt(o),n.stateNode=o):n.memoizedState=B_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Wt(n),e===null&&Ae&&(o=n.stateNode=P_(n.type,n.pendingProps,it.current),Cn=n,mi=!0,u=Ze,za(n.type)?(dh=u,Ze=_i(o.firstChild)):Ze=u),Dn(e,n,n.pendingProps.children,a),Vl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((u=o=Ze)&&(o=GS(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,Cn=n,Ze=_i(o.firstChild),mi=!1,u=!0):u=!1),u||Ma(n)),Wt(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,lh(u,f)?o=null:y!==null&&lh(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=of(e,n,nS,null,null,a),Fo._currentValue=u),Vl(e,n),Dn(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=Ze)&&(a=VS(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Cn=n,Ze=null,e=!0):e=!1),e||Ma(n)),null;case 13:return Tg(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ms(n,null,o,a):Dn(e,n,o,a),n.child;case 11:return mg(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ea(n,n.type,o.value),Dn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,fs(n),u=wn(u),o=o(u),n.flags|=1,Dn(e,n,o,a),n.child;case 14:return gg(e,n,n.type,n.pendingProps,a);case 15:return _g(e,n,n.type,n.pendingProps,a);case 19:return Ag(e,n,a);case 31:return uS(e,n,a);case 22:return vg(e,n,a,n.pendingProps);case 24:return fs(n),o=wn(fn),e===null?(u=Ku(),u===null&&(u=Ye,f=ju(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Ju(n),Ea(n,fn,u)):((e.lanes&a)!==0&&($u(e,n),yo(n,null,null,a),vo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ea(n,fn,o)):(o=f.cache,Ea(n,fn,o),o!==u.cache&&Yu(n,[fn],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ea(e){e.flags|=4}function Pf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(t_())e.flags|=8192;else throw ps=Rl,Qu}else e.flags&=-16777217}function Cg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!k_(n))if(t_())e.flags|=8192;else throw ps=Rl,Qu}function Xl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ze():536870912,e.lanes|=n,fr|=n)}function bo(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function hS(e,n,a){var o=n.pendingProps;switch(Vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Qi(fn),Bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Js(n)?ea(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Xu())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ea(n),f!==null?(Ke(n),Cg(n,f)):(Ke(n),Pf(n,u,null,o,a))):f?f!==e.memoizedState?(ea(n),Ke(n),Cg(n,f)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ea(n),Ke(n),Pf(n,u,e,o,a)),null;case 27:if(he(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=At.current,Js(n)?om(n):(e=P_(u,o,a),n.stateNode=e,ea(n))}return Ke(n),null;case 5:if(he(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(f=At.current,Js(n))om(n);else{var y=sc(it.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[un]=n,f[An]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(Un(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ea(n)}}return Ke(n),Pf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ea(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,Js(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[un]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||T_(e.nodeValue,a)),e||Ma(n,!0)}else e=sc(e).createTextNode(o),e[un]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Js(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[un]=n}else cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=Xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Js(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[un]=n}else cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Xl(n,n.updateQueue),Ke(n),null);case 4:return Bt(),e===null&&ih(n.stateNode.containerInfo),Ke(n),null;case 10:return Qi(n.type),Ke(n),null;case 19:if(nt(ln),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)bo(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ul(e),f!==null){for(n.flags|=128,bo(o,!1),e=f.updateQueue,n.updateQueue=e,Xl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)nm(a,e),a=a.sibling;return St(ln,ln.current&1|2),Ae&&Zi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>Zl&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ul(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Xl(n,e),bo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ae)return Ke(n),null}else 2*T()-o.renderingStartTime>Zl&&a!==536870912&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=ln.current,St(ln,u?a&1|2:a&1),Ae&&Zi(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return ni(n),af(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Xl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&nt(hs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Qi(fn),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function dS(e,n){switch(Vu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qi(fn),Bt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));cs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));cs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(ln),null;case 4:return Bt(),null;case 10:return Qi(n.type),null;case 22:case 23:return ni(n),af(),e!==null&&nt(hs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Qi(fn),null;case 25:return null;default:return null}}function wg(e,n){switch(Vu(n),n.tag){case 3:Qi(fn),Bt();break;case 26:case 27:case 5:he(n);break;case 4:Bt();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:nt(ln);break;case 10:Qi(n.type);break;case 22:case 23:ni(n),af(),e!==null&&nt(hs);break;case 24:Qi(fn)}}function Ao(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(A){Be(n,n.return,A)}}function wa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=n;var F=a,$=A;try{$()}catch(ft){Be(u,F,ft)}}}o=o.next}while(o!==f)}}catch(ft){Be(n,n.return,ft)}}function Dg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Sm(n,a)}catch(o){Be(e,e.return,o)}}}function Ug(e,n,a){a.props=_s(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function Ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function Lg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function zf(e,n,a){try{var o=e.stateNode;PS(o,e.type,a,n),o[An]=n}catch(u){Be(e,e.return,u)}}function Ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function If(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi));else if(o!==4&&(o===27&&za(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Bf(e,n,a),e=e.sibling;e!==null;)Bf(e,n,a),e=e.sibling}function Wl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Wl(e,n,a),e=e.sibling;e!==null;)Wl(e,n,a),e=e.sibling}function Og(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,a),n[un]=e,n[An]=a}catch(f){Be(e,e.return,f)}}var na=!1,pn=!1,Ff=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function pS(e,n){if(e=e.containerInfo,rh=hc,e=Yp(e),Uu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,A=-1,F=-1,$=0,ft=0,mt=e,et=null;e:for(;;){for(var ot;mt!==a||u!==0&&mt.nodeType!==3||(A=y+u),mt!==f||o!==0&&mt.nodeType!==3||(F=y+o),mt.nodeType===3&&(y+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)et=mt,mt=ot;for(;;){if(mt===e)break e;if(et===a&&++$===u&&(A=y),et===f&&++ft===o&&(F=y),(ot=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=ot}a=A===-1||F===-1?null:{start:A,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(oh={focusedElem:e,selectionRange:a},hc=!1,Tn=n;Tn!==null;)if(n=Tn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Tn=e;else for(;Tn!==null;){switch(n=Tn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Gt=_s(a.type,u);e=o.getSnapshotBeforeUpdate(Gt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(se){Be(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)uh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":uh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Tn=e;break}Tn=n.return}}function zg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:aa(e,a),o&4&&Ao(5,a);break;case 1:if(aa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Be(a,a.return,y)}else{var u=_s(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Be(a,a.return,y)}}o&64&&Dg(a),o&512&&Ro(a,a.return);break;case 3:if(aa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Sm(e,n)}catch(y){Be(a,a.return,y)}}break;case 27:n===null&&o&4&&Og(a);case 26:case 5:aa(e,a),n===null&&o&4&&Lg(a),o&512&&Ro(a,a.return);break;case 12:aa(e,a);break;case 31:aa(e,a),o&4&&Fg(e,a);break;case 13:aa(e,a),o&4&&Hg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ES.bind(null,a),kS(e,a))));break;case 22:if(o=a.memoizedState!==null||na,!o){n=n!==null&&n.memoizedState!==null||pn,u=na;var f=pn;na=o,(pn=n)&&!f?sa(e,a,(a.subtreeFlags&8772)!==0):aa(e,a),na=u,pn=f}break;case 30:break;default:aa(e,a)}}function Ig(e){var n=e.alternate;n!==null&&(e.alternate=null,Ig(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Xn=!1;function ia(e,n,a){for(a=a.child;a!==null;)Bg(e,n,a),a=a.sibling}function Bg(e,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 26:pn||zi(a,n),ia(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||zi(a,n);var o=$e,u=Xn;za(a.type)&&($e=a.stateNode,Xn=!1),ia(e,n,a),zo(a.stateNode),$e=o,Xn=u;break;case 5:pn||zi(a,n);case 6:if(o=$e,u=Xn,$e=null,ia(e,n,a),$e=o,Xn=u,$e!==null)if(Xn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:$e!==null&&(Xn?(e=$e,D_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yr(e)):D_($e,a.stateNode));break;case 4:o=$e,u=Xn,$e=a.stateNode.containerInfo,Xn=!0,ia(e,n,a),$e=o,Xn=u;break;case 0:case 11:case 14:case 15:wa(2,a,n),pn||wa(4,a,n),ia(e,n,a);break;case 1:pn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ug(a,n,o)),ia(e,n,a);break;case 21:ia(e,n,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,ia(e,n,a),pn=o;break;default:ia(e,n,a)}}function Fg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yr(e)}catch(a){Be(n,n.return,a)}}}function Hg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yr(e)}catch(a){Be(n,n.return,a)}}function mS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Pg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Pg),n;default:throw Error(s(435,e.tag))}}function ql(e,n){var a=mS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=TS.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,y=n,A=y;t:for(;A!==null;){switch(A.tag){case 27:if(za(A.type)){$e=A.stateNode,Xn=!1;break t}break;case 5:$e=A.stateNode,Xn=!1;break t;case 3:case 4:$e=A.stateNode.containerInfo,Xn=!0;break t}A=A.return}if($e===null)throw Error(s(160));Bg(f,y,u),$e=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Gg(n,e),n=n.sibling}var Mi=null;function Gg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(wa(3,e,e.return),Ao(3,e),wa(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(pn||a===null||zi(a,a.return)),o&64&&na&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Mi;if(Wn(n,e),qn(e),o&512&&(pn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ns]||f[un]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Un(f,o,a),f[un]=e,vt(f),o=f;break t;case"link":var y=G_("link","href",u).get(o+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(f=y[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break e}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;case"meta":if(y=G_("meta","content",u).get(o+(a.content||""))){for(A=0;A<y.length;A++)if(f=y[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break e}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[un]=e,vt(f),o=f}e.stateNode=o}else V_(u,e.type,e.stateNode);else e.stateNode=H_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?V_(u,e.type,e.stateNode):H_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&zf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(pn||a===null||zi(a,a.return)),a!==null&&o&4&&zf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(pn||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{Vs(u,"")}catch(Gt){Be(e,e.return,Gt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,zf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Ff=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Gt){Be(e,e.return,Gt)}}break;case 3:if(lc=null,u=Mi,Mi=rc(n.containerInfo),Wn(n,e),Mi=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(Gt){Be(e,e.return,Gt)}Ff&&(Ff=!1,Vg(e));break;case 4:o=Mi,Mi=rc(e.stateNode.containerInfo),Wn(n,e),qn(e),Mi=o;break;case 12:Wn(n,e),qn(e);break;case 31:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ql(e,o)));break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jl=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ql(e,o)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,$=na,ft=pn;if(na=$||u,pn=ft||F,Wn(n,e),pn=ft,na=$,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||na||pn||vs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=F.stateNode;var mt=F.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;A.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Gt){Be(F,F.return,Gt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Gt){Be(F,F.return,Gt)}}}else if(n.tag===18){if(a===null){F=n;try{var ot=F.stateNode;u?U_(ot,!0):U_(F.stateNode,!1)}catch(Gt){Be(F,F.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ql(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ql(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Ng(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=If(e);Wl(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(Vs(y,""),a.flags&=-33);var A=If(e);Wl(e,A,y);break;case 3:case 4:var F=a.stateNode.containerInfo,$=If(e);Bf(e,$,F);break;default:throw Error(s(161))}}catch(ft){Be(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Vg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Vg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function aa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)zg(e,n.alternate,n),n=n.sibling}function vs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:wa(4,n,n.return),vs(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ug(n,n.return,a),vs(n);break;case 27:zo(n.stateNode);case 26:case 5:zi(n,n.return),vs(n);break;case 22:n.memoizedState===null&&vs(n);break;case 30:vs(n);break;default:vs(n)}e=e.sibling}}function sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:sa(u,f,a),Ao(4,f);break;case 1:if(sa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Be(o,o.return,$)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)ym(F[u],A)}catch($){Be(o,o.return,$)}}a&&y&64&&Dg(f),Ro(f,f.return);break;case 27:Og(f);case 26:case 5:sa(u,f,a),a&&o===null&&y&4&&Lg(f),Ro(f,f.return);break;case 12:sa(u,f,a);break;case 31:sa(u,f,a),a&&y&4&&Fg(u,f);break;case 13:sa(u,f,a),a&&y&4&&Hg(u,f);break;case 22:f.memoizedState===null&&sa(u,f,a),Ro(f,f.return);break;case 30:break;default:sa(u,f,a)}n=n.sibling}}function Hf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ho(a))}function Gf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ho(e))}function Ei(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)kg(e,n,a,o),n=n.sibling}function kg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(e,n,a,o),u&2048&&Ao(9,n);break;case 1:Ei(e,n,a,o);break;case 3:Ei(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ho(e)));break;case 12:if(u&2048){Ei(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,A=f.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Be(n,n.return,F)}}else Ei(e,n,a,o);break;case 31:Ei(e,n,a,o);break;case 13:Ei(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(e,n,a,o):Co(e,n):f._visibility&2?Ei(e,n,a,o):(f._visibility|=2,lr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hf(y,n);break;case 24:Ei(e,n,a,o),u&2048&&Gf(n.alternate,n);break;default:Ei(e,n,a,o)}}function lr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,A=a,F=o,$=y.flags;switch(y.tag){case 0:case 11:case 15:lr(f,y,A,F,u),Ao(8,y);break;case 23:break;case 22:var ft=y.stateNode;y.memoizedState!==null?ft._visibility&2?lr(f,y,A,F,u):Co(f,y):(ft._visibility|=2,lr(f,y,A,F,u)),u&&$&2048&&Hf(y.alternate,y);break;case 24:lr(f,y,A,F,u),u&&$&2048&&Gf(y.alternate,y);break;default:lr(f,y,A,F,u)}n=n.sibling}}function Co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Co(a,o),u&2048&&Hf(o.alternate,o);break;case 24:Co(a,o),u&2048&&Gf(o.alternate,o);break;default:Co(a,o)}n=n.sibling}}var wo=8192;function cr(e,n,a){if(e.subtreeFlags&wo)for(e=e.child;e!==null;)Xg(e,n,a),e=e.sibling}function Xg(e,n,a){switch(e.tag){case 26:cr(e,n,a),e.flags&wo&&e.memoizedState!==null&&ex(a,Mi,e.memoizedState,e.memoizedProps);break;case 5:cr(e,n,a);break;case 3:case 4:var o=Mi;Mi=rc(e.stateNode.containerInfo),cr(e,n,a),Mi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,cr(e,n,a),wo=o):cr(e,n,a));break;default:cr(e,n,a)}}function Wg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Do(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,Yg(o,e)}Wg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qg(e),e=e.sibling}function qg(e){switch(e.tag){case 0:case 11:case 15:Do(e),e.flags&2048&&wa(9,e,e.return);break;case 3:Do(e);break;case 12:Do(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Yl(e)):Do(e);break;default:Do(e)}}function Yl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,Yg(o,e)}Wg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:wa(8,n,n.return),Yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(n));break;default:Yl(n)}e=e.sibling}}function Yg(e,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ho(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Tn=o;else t:for(a=e;Tn!==null;){o=Tn;var u=o.sibling,f=o.return;if(Ig(o),o===a){Tn=null;break t}if(u!==null){u.return=f,Tn=u;break t}Tn=f}}}var gS={getCacheForType:function(e){var n=wn(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(fn).controller.signal}},_S=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Ye=null,Se=null,Te=0,Ie=0,ii=null,Da=!1,ur=!1,Vf=!1,ra=0,an=0,Ua=0,ys=0,kf=0,ai=0,fr=0,Uo=null,Yn=null,Xf=!1,jl=0,jg=0,Zl=1/0,Kl=null,La=null,vn=0,Na=null,hr=null,oa=0,Wf=0,qf=null,Zg=null,Lo=0,Yf=null;function si(){return(Ne&2)!==0&&Te!==0?Te&-Te:I.T!==null?$f():es()}function Kg(){if(ai===0)if((Te&536870912)===0||Ae){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function jn(e,n,a){(e===Ye&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(dr(e,0),Oa(e,Te,ai,!1)),zn(e,a),((Ne&2)===0||e!==Ye)&&(e===Ye&&((Ne&2)===0&&(ys|=a),an===4&&Oa(e,Te,ai,!1)),Ii(e))}function Qg(e,n,a){if((Ne&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ht(e,n),u=o?SS(e,n):Zf(e,n,!0),f=o;do{if(u===0){ur&&!o&&Oa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!vS(a)){u=Zf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var A=e;u=Uo;var F=A.current.memoizedState.isDehydrated;if(F&&(dr(A,y).flags|=256),y=Zf(A,y,!1),y!==2){if(Vf&&!F){A.errorRecoveryDisabledLanes|=f,ys|=f,u=4;break t}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){dr(e,0),Oa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Oa(o,n,ai,!Da);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=jl+300-T(),10<u)){if(Oa(o,n,ai,!Da),gt(o,0,!0)!==0)break t;oa=n,o.timeoutHandle=C_(Jg.bind(null,o,a,Yn,Kl,Xf,n,ai,ys,fr,Da,f,"Throttled",-0,0),u);break t}Jg(o,a,Yn,Kl,Xf,n,ai,ys,fr,Da,f,null,-0,0)}}break}while(!0);Ii(e)}function Jg(e,n,a,o,u,f,y,A,F,$,ft,mt,et,ot){if(e.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},Xg(n,f,mt);var Gt=(f&62914560)===f?jl-T():(f&4194048)===f?jg-T():0;if(Gt=nx(mt,Gt),Gt!==null){oa=f,e.cancelPendingCommit=Gt(r_.bind(null,e,n,f,a,o,u,y,A,F,ft,mt,null,et,ot)),Oa(e,f,y,!$);return}}r_(e,n,f,a,o,u,y,A,F)}function vS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Oa(e,n,a,o){n&=~kf,n&=~ys,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-It(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&Jr(e,a,n)}function Ql(){return(Ne&6)===0?(No(0),!1):!0}function jf(){if(Se!==null){if(Ie===0)var e=Se.return;else e=Se,Ki=us=null,uf(e),ir=null,mo=0,e=Se;for(;e!==null;)wg(e.alternate,e),e=e.return;Se=null}}function dr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,BS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),oa=0,jf(),Ye=e,Se=a=ji(e.current,null),Te=n,Ie=0,ii=null,Da=!1,ur=Ht(e,n),Vf=!1,fr=ai=kf=ys=Ua=an=0,Yn=Uo=null,Xf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-It(o),f=1<<u;n|=e[u],o&=~f}return ra=n,vl(),a}function $g(e,n){fe=null,I.H=Eo,n===nr||n===Al?(n=mm(),Ie=3):n===Qu?(n=mm(),Ie=4):Ie=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,Se===null&&(an=1,Hl(e,hi(n,e.current)))}function t_(){var e=ei.current;return e===null?!0:(Te&4194048)===Te?gi===null:(Te&62914560)===Te||(Te&536870912)!==0?e===gi:!1}function e_(){var e=I.H;return I.H=Eo,e===null?Eo:e}function n_(){var e=I.A;return I.A=gS,e}function Jl(){an=4,Da||(Te&4194048)!==Te&&ei.current!==null||(ur=!0),(Ua&134217727)===0&&(ys&134217727)===0||Ye===null||Oa(Ye,Te,ai,!1)}function Zf(e,n,a){var o=Ne;Ne|=2;var u=e_(),f=n_();(Ye!==e||Te!==n)&&(Kl=null,dr(e,n)),n=!1;var y=an;t:do try{if(Ie!==0&&Se!==null){var A=Se,F=ii;switch(Ie){case 8:jf(),y=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var $=Ie;if(Ie=0,ii=null,pr(e,A,F,$),a&&ur){y=0;break t}break;default:$=Ie,Ie=0,ii=null,pr(e,A,F,$)}}yS(),y=an;break}catch(ft){$g(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Ki=us=null,Ne=o,I.H=u,I.A=f,Se===null&&(Ye=null,Te=0,vl()),y}function yS(){for(;Se!==null;)i_(Se)}function SS(e,n){var a=Ne;Ne|=2;var o=e_(),u=n_();Ye!==e||Te!==n?(Kl=null,Zl=T()+500,dr(e,n)):ur=Ht(e,n);t:do try{if(Ie!==0&&Se!==null){n=Se;var f=ii;e:switch(Ie){case 1:Ie=0,ii=null,pr(e,n,f,1);break;case 2:case 9:if(dm(f)){Ie=0,ii=null,a_(n);break}n=function(){Ie!==2&&Ie!==9||Ye!==e||(Ie=7),Ii(e)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:dm(f)?(Ie=0,ii=null,a_(n)):(Ie=0,ii=null,pr(e,n,f,7));break;case 5:var y=null;switch(Se.tag){case 26:y=Se.memoizedState;case 5:case 27:var A=Se;if(y?k_(y):A.stateNode.complete){Ie=0,ii=null;var F=A.sibling;if(F!==null)Se=F;else{var $=A.return;$!==null?(Se=$,$l($)):Se=null}break e}}Ie=0,ii=null,pr(e,n,f,5);break;case 6:Ie=0,ii=null,pr(e,n,f,6);break;case 8:jf(),an=6;break t;default:throw Error(s(462))}}xS();break}catch(ft){$g(e,ft)}while(!0);return Ki=us=null,I.H=o,I.A=u,Ne=a,Se!==null?0:(Ye=null,Te=0,vl(),an)}function xS(){for(;Se!==null&&!tn();)i_(Se)}function i_(e){var n=Rg(e.alternate,e,ra);e.memoizedProps=e.pendingProps,n===null?$l(e):Se=n}function a_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=xg(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=xg(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:uf(n);default:wg(a,n),n=Se=nm(n,ra),n=Rg(a,n,ra)}e.memoizedProps=e.pendingProps,n===null?$l(e):Se=n}function pr(e,n,a,o){Ki=us=null,uf(n),ir=null,mo=0;var u=n.return;try{if(cS(e,u,n,a,Te)){an=1,Hl(e,hi(a,e.current)),Se=null;return}}catch(f){if(u!==null)throw Se=u,f;an=1,Hl(e,hi(a,e.current)),Se=null;return}n.flags&32768?(Ae||o===1?e=!0:ur||(Te&536870912)!==0?e=!1:(Da=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),s_(n,e)):$l(n)}function $l(e){var n=e;do{if((n.flags&32768)!==0){s_(n,Da);return}e=n.return;var a=hS(n.alternate,n,ra);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);an===0&&(an=5)}function s_(e,n){do{var a=dS(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);an=6,Se=null}function r_(e,n,a,o,u,f,y,A,F){e.cancelPendingCommit=null;do tc();while(vn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=zu,ui(e,a,f,y,A,F),e===Ye&&(Se=Ye=null,Te=0),hr=n,Na=e,oa=a,Wf=f,qf=u,Zg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bS(ut,function(){return f_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=W.p,W.p=2,y=Ne,Ne|=4;try{pS(e,n,a)}finally{Ne=y,W.p=u,I.T=o}}vn=1,o_(),l_(),c_()}}function o_(){if(vn===1){vn=0;var e=Na,n=hr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=W.p;W.p=2;var u=Ne;Ne|=4;try{Gg(n,e);var f=oh,y=Yp(e.containerInfo),A=f.focusedElem,F=f.selectionRange;if(y!==A&&A&&A.ownerDocument&&qp(A.ownerDocument.documentElement,A)){if(F!==null&&Uu(A)){var $=F.start,ft=F.end;if(ft===void 0&&(ft=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(ft,A.value.length);else{var mt=A.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var ot=et.getSelection(),Gt=A.textContent.length,se=Math.min(F.start,Gt),Ge=F.end===void 0?se:Math.min(F.end,Gt);!ot.extend&&se>Ge&&(y=Ge,Ge=se,se=y);var Y=Wp(A,se),V=Wp(A,Ge);if(Y&&V&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==V.node||ot.focusOffset!==V.offset)){var J=mt.createRange();J.setStart(Y.node,Y.offset),ot.removeAllRanges(),se>Ge?(ot.addRange(J),ot.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),ot.addRange(J))}}}}for(mt=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<mt.length;A++){var pt=mt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}hc=!!rh,oh=rh=null}finally{Ne=u,W.p=o,I.T=a}}e.current=n,vn=2}}function l_(){if(vn===2){vn=0;var e=Na,n=hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=W.p;W.p=2;var u=Ne;Ne|=4;try{zg(e,n.alternate,n)}finally{Ne=u,W.p=o,I.T=a}}vn=3}}function c_(){if(vn===4||vn===3){vn=0,U();var e=Na,n=hr,a=oa,o=Zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,hr=Na=null,u_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(La=null),Hs(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=W.p,W.p=2,I.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var A=o[y];f(A.value,{componentStack:A.stack})}}finally{I.T=n,W.p=u}}(oa&3)!==0&&tc(),Ii(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Yf?Lo++:(Lo=0,Yf=e):Lo=0,No(0)}}function u_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ho(n)))}function tc(){return o_(),l_(),c_(),f_()}function f_(){if(vn!==5)return!1;var e=Na,n=Wf;Wf=0;var a=Hs(oa),o=I.T,u=W.p;try{W.p=32>a?32:a,I.T=null,a=qf,qf=null;var f=Na,y=oa;if(vn=0,hr=Na=null,oa=0,(Ne&6)!==0)throw Error(s(331));var A=Ne;if(Ne|=4,qg(f.current),kg(f,f.current,y,a),Ne=A,No(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Tt,f)}catch{}return!0}finally{W.p=u,I.T=o,u_(e,n)}}function h_(e,n,a){n=hi(a,n),n=bf(e.stateNode,n,2),e=Aa(e,n,2),e!==null&&(zn(e,2),Ii(e))}function Be(e,n,a){if(e.tag===3)h_(e,e,a);else for(;n!==null;){if(n.tag===3){h_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(La===null||!La.has(o))){e=hi(a,e),a=dg(2),o=Aa(n,a,2),o!==null&&(pg(a,o,n,e),zn(o,2),Ii(o));break}}n=n.return}}function Kf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new _S;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Vf=!0,u.add(a),e=MS.bind(null,e,n,a),n.then(e,e))}function MS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Te&a)===a&&(an===4||an===3&&(Te&62914560)===Te&&300>T()-jl?(Ne&2)===0&&dr(e,0):kf|=a,fr===Te&&(fr=0)),Ii(e)}function d_(e,n){n===0&&(n=ze()),e=os(e,n),e!==null&&(zn(e,n),Ii(e))}function ES(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),d_(e,a)}function TS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),d_(e,a)}function bS(e,n){return le(e,n)}var ec=null,mr=null,Qf=!1,nc=!1,Jf=!1,Pa=0;function Ii(e){e!==mr&&e.next===null&&(mr===null?ec=mr=e:mr=mr.next=e),nc=!0,Qf||(Qf=!0,RS())}function No(e,n){if(!Jf&&nc){Jf=!0;do for(var a=!1,o=ec;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-It(42|e)+1)-1,f&=u&~(y&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,__(o,f))}else f=Te,f=gt(o,o===Ye?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ht(o,f)||(a=!0,__(o,f));o=o.next}while(a);Jf=!1}}function AS(){p_()}function p_(){nc=Qf=!1;var e=0;Pa!==0&&IS()&&(e=Pa);for(var n=T(),a=null,o=ec;o!==null;){var u=o.next,f=m_(o,n);f===0?(o.next=null,a===null?ec=u:a.next=u,u===null&&(mr=a)):(a=o,(e!==0||(f&3)!==0)&&(nc=!0)),o=u}vn!==0&&vn!==5||No(e),Pa!==0&&(Pa=0)}function m_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-It(f),A=1<<y,F=u[y];F===-1?((A&a)===0||(A&o)!==0)&&(u[y]=oe(A,n)):F<=n&&(e.expiredLanes|=A),f&=~A}if(n=Ye,a=Te,a=gt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&en(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ht(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&en(o),Hs(a)){case 2:case 8:a=Mt;break;case 32:a=ut;break;case 268435456:a=Rt;break;default:a=ut}return o=g_.bind(null,e),a=le(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&en(o),e.callbackPriority=2,e.callbackNode=null,2}function g_(e,n){if(vn!==0&&vn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(tc()&&e.callbackNode!==a)return null;var o=Te;return o=gt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Qg(e,o,n),m_(e,T()),e.callbackNode!=null&&e.callbackNode===a?g_.bind(null,e):null)}function __(e,n){if(tc())return null;Qg(e,n,!0)}function RS(){FS(function(){(Ne&6)!==0?le(dt,AS):p_()})}function $f(){if(Pa===0){var e=tr;e===0&&(e=bt,bt<<=1,(bt&261888)===0&&(bt=256)),Pa=e}return Pa}function v_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ul(""+e)}function y_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function CS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=v_((u[An]||null).action),y=o.submitter;y&&(n=(n=y[An]||null)?v_(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var A=new pl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Pa!==0){var F=y?y_(u,y):new FormData(u);yf(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(A.preventDefault(),F=y?y_(u,y):new FormData(u),yf(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var th=0;th<Pu.length;th++){var eh=Pu[th],wS=eh.toLowerCase(),DS=eh[0].toUpperCase()+eh.slice(1);xi(wS,"on"+DS)}xi(Kp,"onAnimationEnd"),xi(Qp,"onAnimationIteration"),xi(Jp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(qy,"onTransitionRun"),xi(Yy,"onTransitionStart"),xi(jy,"onTransitionCancel"),xi($p,"onTransitionEnd"),$t("onMouseEnter",["mouseout","mouseover"]),$t("onMouseLeave",["mouseout","mouseover"]),$t("onPointerEnter",["pointerout","pointerover"]),$t("onPointerLeave",["pointerout","pointerover"]),Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),US=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oo));function S_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],F=A.instance,$=A.currentTarget;if(A=A.listener,F!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=$;try{f(u)}catch(ft){_l(ft)}u.currentTarget=null,f=F}else for(y=0;y<o.length;y++){if(A=o[y],F=A.instance,$=A.currentTarget,A=A.listener,F!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=$;try{f(u)}catch(ft){_l(ft)}u.currentTarget=null,f=F}}}}function xe(e,n){var a=n[to];a===void 0&&(a=n[to]=new Set);var o=e+"__bubble";a.has(o)||(x_(n,e,2,!1),a.add(o))}function nh(e,n,a){var o=0;n&&(o|=4),x_(a,e,o,n)}var ic="_reactListening"+Math.random().toString(36).slice(2);function ih(e){if(!e[ic]){e[ic]=!0,Nt.forEach(function(a){a!=="selectionchange"&&(US.has(a)||nh(a,!1,e),nh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ic]||(n[ic]=!0,nh("selectionchange",!1,n))}}function x_(e,n,a,o){switch(K_(n)){case 2:var u=sx;break;case 8:u=rx;break;default:u=vh}a=u.bind(null,n,a,e),u=void 0,!Mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ah(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=o.return;y!==null;){var F=y.tag;if((F===3||F===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=q(A),y===null)return;if(F=y.tag,F===5||F===6||F===26||F===27){o=f=y;continue t}A=A.parentNode}}o=o.return}Ap(function(){var $=f,ft=Su(a),mt=[];t:{var et=tm.get(e);if(et!==void 0){var ot=pl,Gt=e;switch(e){case"keypress":if(hl(a)===0)break t;case"keydown":case"keyup":ot=Ty;break;case"focusin":Gt="focus",ot=Au;break;case"focusout":Gt="blur",ot=Au;break;case"beforeblur":case"afterblur":ot=Au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Ry;break;case Kp:case Qp:case Jp:ot=my;break;case $p:ot=wy;break;case"scroll":case"scrollend":ot=uy;break;case"wheel":ot=Uy;break;case"copy":case"cut":case"paste":ot=_y;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Up;break;case"toggle":case"beforetoggle":ot=Ny}var se=(n&4)!==0,Ge=!se&&(e==="scroll"||e==="scrollend"),Y=se?et!==null?et+"Capture":null:et;se=[];for(var V=$,J;V!==null;){var pt=V;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||Y===null||(pt=eo(V,Y),pt!=null&&se.push(Po(V,pt,J))),Ge)break;V=V.return}0<se.length&&(et=new ot(et,Gt,null,a,ft),mt.push({event:et,listeners:se}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",et&&a!==yu&&(Gt=a.relatedTarget||a.fromElement)&&(q(Gt)||Gt[va]))break t;if((ot||et)&&(et=ft.window===ft?ft:(et=ft.ownerDocument)?et.defaultView||et.parentWindow:window,ot?(Gt=a.relatedTarget||a.toElement,ot=$,Gt=Gt?q(Gt):null,Gt!==null&&(Ge=c(Gt),se=Gt.tag,Gt!==Ge||se!==5&&se!==27&&se!==6)&&(Gt=null)):(ot=null,Gt=$),ot!==Gt)){if(se=wp,pt="onMouseLeave",Y="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(se=Up,pt="onPointerLeave",Y="onPointerEnter",V="pointer"),Ge=ot==null?et:rt(ot),J=Gt==null?et:rt(Gt),et=new se(pt,V+"leave",ot,a,ft),et.target=Ge,et.relatedTarget=J,pt=null,q(ft)===$&&(se=new se(Y,V+"enter",Gt,a,ft),se.target=J,se.relatedTarget=Ge,pt=se),Ge=pt,ot&&Gt)e:{for(se=LS,Y=ot,V=Gt,J=0,pt=Y;pt;pt=se(pt))J++;pt=0;for(var ne=V;ne;ne=se(ne))pt++;for(;0<J-pt;)Y=se(Y),J--;for(;0<pt-J;)V=se(V),pt--;for(;J--;){if(Y===V||V!==null&&Y===V.alternate){se=Y;break e}Y=se(Y),V=se(V)}se=null}else se=null;ot!==null&&M_(mt,et,ot,se,!1),Gt!==null&&Ge!==null&&M_(mt,Ge,Gt,se,!0)}}t:{if(et=$?rt($):window,ot=et.nodeName&&et.nodeName.toLowerCase(),ot==="select"||ot==="input"&&et.type==="file")var De=Fp;else if(Ip(et))if(Hp)De=ky;else{De=Gy;var Yt=Hy}else ot=et.nodeName,!ot||ot.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?$&&vu($.elementType)&&(De=Fp):De=Vy;if(De&&(De=De(e,$))){Bp(mt,De,a,ft);break t}Yt&&Yt(e,et,$),e==="focusout"&&$&&et.type==="number"&&$.memoizedProps.value!=null&&_n(et,"number",et.value)}switch(Yt=$?rt($):window,e){case"focusin":(Ip(Yt)||Yt.contentEditable==="true")&&(qs=Yt,Lu=$,co=null);break;case"focusout":co=Lu=qs=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,jp(mt,a,ft);break;case"selectionchange":if(Wy)break;case"keydown":case"keyup":jp(mt,a,ft)}var de;if(Cu)t:{switch(e){case"compositionstart":var be="onCompositionStart";break t;case"compositionend":be="onCompositionEnd";break t;case"compositionupdate":be="onCompositionUpdate";break t}be=void 0}else Ws?Pp(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(Lp&&a.locale!=="ko"&&(Ws||be!=="onCompositionStart"?be==="onCompositionEnd"&&Ws&&(de=Rp()):(ya=ft,Eu="value"in ya?ya.value:ya.textContent,Ws=!0)),Yt=ac($,be),0<Yt.length&&(be=new Dp(be,e,null,a,ft),mt.push({event:be,listeners:Yt}),de?be.data=de:(de=zp(a),de!==null&&(be.data=de)))),(de=Py?zy(e,a):Iy(e,a))&&(be=ac($,"onBeforeInput"),0<be.length&&(Yt=new Dp("onBeforeInput","beforeinput",null,a,ft),mt.push({event:Yt,listeners:be}),Yt.data=de)),CS(mt,e,$,a,ft)}S_(mt,n)})}function Po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ac(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=eo(e,a),u!=null&&o.unshift(Po(e,u,f)),u=eo(e,n),u!=null&&o.push(Po(e,u,f))),e.tag===3)return o;e=e.return}return[]}function LS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function M_(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var A=a,F=A.alternate,$=A.stateNode;if(A=A.tag,F!==null&&F===o)break;A!==5&&A!==26&&A!==27||$===null||(F=$,u?($=eo(a,f),$!=null&&y.unshift(Po(a,$,F))):u||($=eo(a,f),$!=null&&y.push(Po(a,$,F)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var NS=/\r\n?/g,OS=/\u0000|\uFFFD/g;function E_(e){return(typeof e=="string"?e:""+e).replace(NS,`
`).replace(OS,"")}function T_(e,n){return n=E_(n),E_(e)===n}function He(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Vs(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Vs(e,""+o);break;case"className":Pe(e,"class",o);break;case"tabIndex":Pe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Pe(e,a,o);break;case"style":Tp(e,o,f);break;case"data":if(n!=="object"){Pe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ul(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(e,n,"name",u.name,u,null),He(e,n,"formEncType",u.formEncType,u,null),He(e,n,"formMethod",u.formMethod,u,null),He(e,n,"formTarget",u.formTarget,u,null)):(He(e,n,"encType",u.encType,u,null),He(e,n,"method",u.method,u,null),He(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ul(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=qi);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ul(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),qe(e,"popover",o);break;case"xlinkActuate":ye(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ye(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ye(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ye(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ye(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ye(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ye(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ye(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ye(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":qe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ly.get(a)||a,qe(e,a,o))}}function sh(e,n,a,o,u,f){switch(a){case"style":Tp(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Vs(e,o):(typeof o=="number"||typeof o=="bigint")&&Vs(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[An]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):qe(e,a,o)}}}function Un(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,f,y,a,null)}}u&&He(e,n,"srcSet",a.srcSet,a,null),o&&He(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var A=f=y=u=null,F=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":u=ft;break;case"type":y=ft;break;case"checked":F=ft;break;case"defaultChecked":$=ft;break;case"value":f=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:He(e,n,o,ft,a,null)}}In(e,f,A,F,$,y,u,!1);return;case"select":xe("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:He(e,n,u,A,a,null)}n=f,a=y,e.multiple=!!o,n!=null?on(e,!!o,n,!1):a!=null&&on(e,!!o,a,!0);return;case"textarea":xe("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:He(e,n,y,A,a,null)}Ni(e,o,u,f);return;case"option":for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!=null)&&(F==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":He(e,n,F,o,a,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<Oo.length;o++)xe(Oo[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,$,o,a,null)}return;default:if(vu(n)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&sh(e,n,ft,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&He(e,n,A,o,a,null))}function PS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,A=null,F=null,$=null,ft=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":F=mt;default:o.hasOwnProperty(ot)||He(e,n,ot,null,o,mt)}}for(var et in o){var ot=o[et];if(mt=a[et],o.hasOwnProperty(et)&&(ot!=null||mt!=null))switch(et){case"type":f=ot;break;case"name":u=ot;break;case"checked":$=ot;break;case"defaultChecked":ft=ot;break;case"value":y=ot;break;case"defaultValue":A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==mt&&He(e,n,et,ot,o,mt)}}Ln(e,y,A,F,$,ft,f,u);return;case"select":ot=y=A=et=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ot=F;default:o.hasOwnProperty(f)||He(e,n,f,null,o,F)}for(u in o)if(f=o[u],F=a[u],o.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":et=f;break;case"defaultValue":A=f;break;case"multiple":y=f;default:f!==F&&He(e,n,u,f,o,F)}n=A,a=y,o=ot,et!=null?on(e,!!a,et,!1):!!o!=!!a&&(n!=null?on(e,!!a,n,!0):on(e,!!a,a?[]:"",!1));return;case"textarea":ot=et=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:He(e,n,A,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":et=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&He(e,n,y,u,o,f)}Gs(e,et,ot);return;case"option":for(var Gt in a)et=a[Gt],a.hasOwnProperty(Gt)&&et!=null&&!o.hasOwnProperty(Gt)&&(Gt==="selected"?e.selected=!1:He(e,n,Gt,null,o,et));for(F in o)et=o[F],ot=a[F],o.hasOwnProperty(F)&&et!==ot&&(et!=null||ot!=null)&&(F==="selected"?e.selected=et&&typeof et!="function"&&typeof et!="symbol":He(e,n,F,et,o,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)et=a[se],a.hasOwnProperty(se)&&et!=null&&!o.hasOwnProperty(se)&&He(e,n,se,null,o,et);for($ in o)if(et=o[$],ot=a[$],o.hasOwnProperty($)&&et!==ot&&(et!=null||ot!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:He(e,n,$,et,o,ot)}return;default:if(vu(n)){for(var Ge in a)et=a[Ge],a.hasOwnProperty(Ge)&&et!==void 0&&!o.hasOwnProperty(Ge)&&sh(e,n,Ge,void 0,o,et);for(ft in o)et=o[ft],ot=a[ft],!o.hasOwnProperty(ft)||et===ot||et===void 0&&ot===void 0||sh(e,n,ft,et,o,ot);return}}for(var Y in a)et=a[Y],a.hasOwnProperty(Y)&&et!=null&&!o.hasOwnProperty(Y)&&He(e,n,Y,null,o,et);for(mt in o)et=o[mt],ot=a[mt],!o.hasOwnProperty(mt)||et===ot||et==null&&ot==null||He(e,n,mt,et,o,ot)}function b_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,A=u.duration;if(f&&A&&b_(y)){for(y=0,A=u.responseEnd,o+=1;o<a.length;o++){var F=a[o],$=F.startTime;if($>A)break;var ft=F.transferSize,mt=F.initiatorType;ft&&b_(mt)&&(F=F.responseEnd,y+=ft*(F<A?1:(A-$)/(F-$)))}if(--o,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var rh=null,oh=null;function sc(e){return e.nodeType===9?e:e.ownerDocument}function A_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function lh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ch=null;function IS(){var e=window.event;return e&&e.type==="popstate"?e===ch?!1:(ch=e,!0):(ch=null,!1)}var C_=typeof setTimeout=="function"?setTimeout:void 0,BS=typeof clearTimeout=="function"?clearTimeout:void 0,w_=typeof Promise=="function"?Promise:void 0,FS=typeof queueMicrotask=="function"?queueMicrotask:typeof w_<"u"?function(e){return w_.resolve(null).then(e).catch(HS)}:C_;function HS(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function D_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),yr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")zo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zo(a);for(var f=a.firstChild;f;){var y=f.nextSibling,A=f.nodeName;f[ns]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&zo(e.ownerDocument.body);a=u}while(a);yr(n)}function U_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function uh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":uh(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function GS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ns])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function VS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function L_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function fh(e){return e.data==="$?"||e.data==="$~"}function hh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function kS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var dh=null;function N_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return _i(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function O_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function P_(e,n,a){switch(n=sc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function zo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var vi=new Map,z_=new Set;function rc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=W.d;W.d={f:XS,r:WS,D:qS,C:YS,L:jS,m:ZS,X:QS,S:KS,M:JS};function XS(){var e=la.f(),n=Ql();return e||n}function WS(e){var n=at(e);n!==null&&n.tag===5&&n.type==="form"?$m(n):la.r(e)}var gr=typeof document>"u"?null:document;function I_(e,n,a){var o=gr;if(o&&typeof n=="string"&&n){var u=Ee(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),z_.has(u)||(z_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",e),vt(n),o.head.appendChild(n)))}}function qS(e){la.D(e),I_("dns-prefetch",e,null)}function YS(e,n){la.C(e,n),I_("preconnect",e,n)}function jS(e,n,a){la.L(e,n,a);var o=gr;if(o&&e&&n){var u='link[rel="preload"][as="'+Ee(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ee(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ee(a.imageSizes)+'"]')):u+='[href="'+Ee(e)+'"]';var f=u;switch(n){case"style":f=_r(e);break;case"script":f=vr(e)}vi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Io(f))||n==="script"&&o.querySelector(Bo(f))||(n=o.createElement("link"),Un(n,"link",e),vt(n),o.head.appendChild(n)))}}function ZS(e,n){la.m(e,n);var a=gr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ee(o)+'"][href="'+Ee(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=vr(e)}if(!vi.has(f)&&(e=g({rel:"modulepreload",href:e},n),vi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bo(f)))return}o=a.createElement("link"),Un(o,"link",e),vt(o),a.head.appendChild(o)}}}function KS(e,n,a){la.S(e,n,a);var o=gr;if(o&&e){var u=K(o).hoistableStyles,f=_r(e);n=n||"default";var y=u.get(f);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(Io(f)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(f))&&ph(e,a);var F=y=o.createElement("link");vt(F),Un(F,"link",e),F._p=new Promise(function($,ft){F.onload=$,F.onerror=ft}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,oc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(f,y)}}}function QS(e,n){la.X(e,n);var a=gr;if(a&&e){var o=K(a).hoistableScripts,u=vr(e),f=o.get(u);f||(f=a.querySelector(Bo(u)),f||(e=g({src:e,async:!0},n),(n=vi.get(u))&&mh(e,n),f=a.createElement("script"),vt(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function JS(e,n){la.M(e,n);var a=gr;if(a&&e){var o=K(a).hoistableScripts,u=vr(e),f=o.get(u);f||(f=a.querySelector(Bo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&mh(e,n),f=a.createElement("script"),vt(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function B_(e,n,a,o){var u=(u=it.current)?rc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_r(a.href),a=K(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_r(a.href);var f=K(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(Io(e)))&&!f._p&&(y.instance=f,y.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),f||$S(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vr(a),a=K(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function _r(e){return'href="'+Ee(e)+'"'}function Io(e){return'link[rel="stylesheet"]['+e+"]"}function F_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function $S(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),vt(n),e.head.appendChild(n))}function vr(e){return'[src="'+Ee(e)+'"]'}function Bo(e){return"script[async]"+e}function H_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ee(a.href)+'"]');if(o)return n.instance=o,vt(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),vt(o),Un(o,"style",u),oc(o,a.precedence,e),n.instance=o;case"stylesheet":u=_r(a.href);var f=e.querySelector(Io(u));if(f)return n.state.loading|=4,n.instance=f,vt(f),f;o=F_(a),(u=vi.get(u))&&ph(o,u),f=(e.ownerDocument||e).createElement("link"),vt(f);var y=f;return y._p=new Promise(function(A,F){y.onload=A,y.onerror=F}),Un(f,"link",o),n.state.loading|=4,oc(f,a.precedence,e),n.instance=f;case"script":return f=vr(a.src),(u=e.querySelector(Bo(f)))?(n.instance=u,vt(u),u):(o=a,(u=vi.get(f))&&(o=g({},a),mh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),vt(u),Un(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,oc(o,a.precedence,e));return n.instance}function oc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ph(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function mh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var lc=null;function G_(e,n,a){if(lc===null){var o=new Map,u=lc=new Map;u.set(a,o)}else u=lc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ns]||f[un]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var A=o.get(y);A?A.push(f):o.set(y,[f])}}return o}function V_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function tx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function k_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ex(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_r(o.href),f=n.querySelector(Io(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=cc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,vt(f);return}f=n.ownerDocument||n,o=F_(o),(u=vi.get(u))&&ph(o,u),f=f.createElement("link"),vt(f);var y=f;y._p=new Promise(function(A,F){y.onload=A,y.onerror=F}),Un(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=cc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var gh=0;function nx(e,n){return e.stylesheets&&e.count===0&&fc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&gh===0&&(gh=62500*zS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>gh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var uc=null;function fc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uc=new Map,n.forEach(ix,e),uc=null,cc.call(e))}function ix(e,n){if(!(n.state.loading&4)){var a=uc.get(e);if(a)var o=a.get(null);else{a=new Map,uc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=cc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Fo={$$typeof:N,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function ax(e,n,a,o,u,f,y,A,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function X_(e,n,a,o,u,f,y,A,F,$,ft,mt){return e=new ax(e,n,a,y,F,$,ft,mt,A),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),e.current=f,f.stateNode=e,n=ju(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ju(f),e}function W_(e){return e?(e=Zs,e):Zs}function q_(e,n,a,o,u,f){u=W_(u),o.context===null?o.context=u:o.pendingContext=u,o=ba(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Aa(e,o,n),a!==null&&(jn(a,e,n),_o(a,e,n))}function Y_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function _h(e,n){Y_(e,n),(e=e.alternate)&&Y_(e,n)}function j_(e){if(e.tag===13||e.tag===31){var n=os(e,67108864);n!==null&&jn(n,e,67108864),_h(e,67108864)}}function Z_(e){if(e.tag===13||e.tag===31){var n=si();n=Fs(n);var a=os(e,n);a!==null&&jn(a,e,n),_h(e,n)}}var hc=!0;function sx(e,n,a,o){var u=I.T;I.T=null;var f=W.p;try{W.p=2,vh(e,n,a,o)}finally{W.p=f,I.T=u}}function rx(e,n,a,o){var u=I.T;I.T=null;var f=W.p;try{W.p=8,vh(e,n,a,o)}finally{W.p=f,I.T=u}}function vh(e,n,a,o){if(hc){var u=yh(o);if(u===null)ah(e,n,o,dc,a),Q_(e,o);else if(lx(u,e,n,a,o))o.stopPropagation();else if(Q_(e,o),n&4&&-1<ox.indexOf(e)){for(;u!==null;){var f=at(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Et(f.pendingLanes);if(y!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var F=1<<31-It(y);A.entanglements[1]|=F,y&=~F}Ii(f),(Ne&6)===0&&(Zl=T()+500,No(0))}}break;case 31:case 13:A=os(f,2),A!==null&&jn(A,f,2),Ql(),_h(f,2)}if(f=yh(o),f===null&&ah(e,n,o,dc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else ah(e,n,o,null,a)}}function yh(e){return e=Su(e),Sh(e)}var dc=null;function Sh(e){if(dc=null,e=q(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return dc=e,null}function K_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tt()){case dt:return 2;case Mt:return 8;case ut:case Kt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var xh=!1,Ia=null,Ba=null,Fa=null,Ho=new Map,Go=new Map,Ha=[],ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q_(e,n){switch(e){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(n.pointerId)}}function Vo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=at(n),n!==null&&j_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function lx(e,n,a,o,u){switch(n){case"focusin":return Ia=Vo(Ia,e,n,a,o,u),!0;case"dragenter":return Ba=Vo(Ba,e,n,a,o,u),!0;case"mouseover":return Fa=Vo(Fa,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Ho.set(f,Vo(Ho.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Go.set(f,Vo(Go.get(f)||null,e,n,a,o,u)),!0}return!1}function J_(e){var n=q(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,$r(e.priority,function(){Z_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,$r(e.priority,function(){Z_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=yh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);yu=o,a.target.dispatchEvent(o),yu=null}else return n=at(a),n!==null&&j_(n),e.blockedOn=a,!1;n.shift()}return!0}function $_(e,n,a){pc(e)&&a.delete(n)}function cx(){xh=!1,Ia!==null&&pc(Ia)&&(Ia=null),Ba!==null&&pc(Ba)&&(Ba=null),Fa!==null&&pc(Fa)&&(Fa=null),Ho.forEach($_),Go.forEach($_)}function mc(e,n){e.blockedOn===n&&(e.blockedOn=null,xh||(xh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,cx)))}var gc=null;function t0(e){gc!==e&&(gc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){gc===e&&(gc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Sh(o||a)===null)continue;break}var f=at(a);f!==null&&(e.splice(n,3),n-=3,yf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function yr(e){function n(F){return mc(F,e)}Ia!==null&&mc(Ia,e),Ba!==null&&mc(Ba,e),Fa!==null&&mc(Fa,e),Ho.forEach(n),Go.forEach(n);for(var a=0;a<Ha.length;a++){var o=Ha[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ha.length&&(a=Ha[0],a.blockedOn===null);)J_(a),a.blockedOn===null&&Ha.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[An]||null;if(typeof f=="function")y||t0(a);else if(y){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[An]||null)A=y.formAction;else if(Sh(u)!==null)continue}else A=y.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),t0(a)}}}function e0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Mh(e){this._internalRoot=e}_c.prototype.render=Mh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();q_(a,o,e,n,null,null)},_c.prototype.unmount=Mh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;q_(e.current,2,null,e,null,null),Ql(),n[va]=null}};function _c(e){this._internalRoot=e}_c.prototype.unstable_scheduleHydration=function(e){if(e){var n=es();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ha.length&&n!==0&&n<Ha[a].priority;a++);Ha.splice(a,0,e),a===0&&J_(e)}};var n0=t.version;if(n0!=="19.2.5")throw Error(s(527,n0,"19.2.5"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var ux={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{Tt=vc.inject(ux),Ct=vc}catch{}}return Xo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=cg,f=ug,y=fg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=X_(e,1,!1,null,null,a,o,null,u,f,y,e0),e[va]=n.current,ih(e),new Mh(n)},Xo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=cg,y=ug,A=fg,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=X_(e,1,!0,n,a??null,o,u,F,f,y,A,e0),n.context=W_(null),a=n.current,o=si(),o=Fs(o),u=ba(o),u.callback=null,Aa(a,u,o),a=o,n.current.lanes=a,zn(n,a),Ii(n),e[va]=n.current,ih(e),new _c(n)},Xo.version="19.2.5",Xo}var h0;function Sx(){if(h0)return bh.exports;h0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),bh.exports=yx(),bh.exports}var xx=Sx();const rp="180",Gr={ROTATE:0,DOLLY:1,PAN:2},Fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mx=0,d0=1,Ex=2,bv=1,Tx=2,pa=3,$a=0,Kn=1,ma=2,Ka=0,Vr=1,p0=2,m0=3,g0=4,bx=5,Rs=100,Ax=101,Rx=102,Cx=103,wx=104,Dx=200,Ux=201,Lx=202,Nx=203,hd=204,dd=205,Ox=206,Px=207,zx=208,Ix=209,Bx=210,Fx=211,Hx=212,Gx=213,Vx=214,pd=0,md=1,gd=2,Xr=3,_d=4,vd=5,yd=6,Sd=7,Av=0,kx=1,Xx=2,Qa=0,Wx=1,qx=2,Yx=3,jx=4,Zx=5,Kx=6,Qx=7,Rv=300,Wr=301,qr=302,xd=303,Md=304,cu=306,Ed=1e3,ws=1001,Td=1002,Ci=1003,Jx=1004,yc=1005,Hi=1006,wh=1007,Ds=1008,ki=1009,Cv=1010,wv=1011,el=1012,op=1013,Ns=1014,ga=1015,rl=1016,lp=1017,cp=1018,nl=1020,Dv=35902,Uv=35899,Lv=1021,Nv=1022,Ri=1023,il=1026,al=1027,Ov=1028,up=1029,Pv=1030,fp=1031,hp=1033,Qc=33776,Jc=33777,$c=33778,tu=33779,bd=35840,Ad=35841,Rd=35842,Cd=35843,wd=36196,Dd=37492,Ud=37496,Ld=37808,Nd=37809,Od=37810,Pd=37811,zd=37812,Id=37813,Bd=37814,Fd=37815,Hd=37816,Gd=37817,Vd=37818,kd=37819,Xd=37820,Wd=37821,qd=36492,Yd=36494,jd=36495,Zd=36283,Kd=36284,Qd=36285,Jd=36286,$x=3200,tM=3201,zv=0,eM=1,Za="",Gn="srgb",Yr="srgb-linear",nu="linear",Ve="srgb",Sr=7680,_0=519,nM=512,iM=513,aM=514,Iv=515,sM=516,rM=517,oM=518,lM=519,$d=35044,v0="300 es",Gi=2e3,iu=2001;class zs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tl=Math.PI/180,tp=180/Math.PI;function Ja(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Me(r,t,i){return Math.max(t,Math.min(i,r))}function cM(r,t){return(r%t+t)%t}function Dh(r,t,i){return(1-i)*r+i*t}function Fi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ke(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const uM={DEG2RAD:tl};class ae{constructor(t=0,i=0){ae.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Os{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3];const x=c[h+0],S=c[h+1],E=c[h+2],b=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g;return}if(d===1){t[i+0]=x,t[i+1]=S,t[i+2]=E,t[i+3]=b;return}if(g!==b||m!==x||p!==S||v!==E){let M=1-d;const _=m*x+p*S+v*E+g*b,z=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const H=Math.sqrt(N),B=Math.atan2(H,_*z);M=Math.sin(M*B)/H,d=Math.sin(d*B)/H}const D=d*z;if(m=m*M+x*D,p=p*M+S*D,v=v*M+E*D,g=g*M+b*D,M===1-d){const H=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=H,p*=H,v*=H,g*=H}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=c[h],x=c[h+1],S=c[h+2],E=c[h+3];return t[i]=d*E+v*g+m*S-p*x,t[i+1]=m*E+v*x+p*g-d*S,t[i+2]=p*E+v*S+d*x-m*g,t[i+3]=v*E-d*g-m*x-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),g=d(c/2),x=m(s/2),S=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=x*v*g+p*S*E,this._y=p*S*g-x*v*E,this._z=p*v*E+x*S*g,this._w=p*v*g-x*S*E;break;case"YXZ":this._x=x*v*g+p*S*E,this._y=p*S*g-x*v*E,this._z=p*v*E-x*S*g,this._w=p*v*g+x*S*E;break;case"ZXY":this._x=x*v*g-p*S*E,this._y=p*S*g+x*v*E,this._z=p*v*E+x*S*g,this._w=p*v*g-x*S*E;break;case"ZYX":this._x=x*v*g-p*S*E,this._y=p*S*g+x*v*E,this._z=p*v*E-x*S*g,this._w=p*v*g+x*S*E;break;case"YZX":this._x=x*v*g+p*S*E,this._y=p*S*g+x*v*E,this._z=p*v*E-x*S*g,this._w=p*v*g-x*S*E;break;case"XZY":this._x=x*v*g-p*S*E,this._y=p*S*g-x*v*E,this._z=p*v*E+x*S*g,this._w=p*v*g+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],x=s+d+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(s>d&&s>g){const S=2*Math.sqrt(1+s-d-g);this._w=(v-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-s-g);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+g-s-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-s*p,this._z=c*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),g=Math.sin((1-i)*v)/p,x=Math.sin(i*v)/p;return this._w=h*g+this._w*x,this._x=s*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,i=0,s=0){j.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(y0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(y0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),v=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+m*p+h*g-d*v,this.y=s+m*v+d*p-c*g,this.z=l+m*g+c*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Uh.copy(this).projectOnVector(t),this.sub(Uh)}reflect(t){return this.sub(Uh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uh=new j,y0=new Os;class pe{constructor(t,i,s,l,c,h,d,m,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],g=s[7],x=s[2],S=s[5],E=s[8],b=l[0],M=l[3],_=l[6],z=l[1],N=l[4],D=l[7],H=l[2],B=l[5],O=l[8];return c[0]=h*b+d*z+m*H,c[3]=h*M+d*N+m*B,c[6]=h*_+d*D+m*O,c[1]=p*b+v*z+g*H,c[4]=p*M+v*N+g*B,c[7]=p*_+v*D+g*O,c[2]=x*b+S*z+E*H,c[5]=x*M+S*N+E*B,c[8]=x*_+S*D+E*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-s*c*v+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=v*h-d*p,x=d*m-v*c,S=p*c-h*m,E=i*g+s*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=g*b,t[1]=(l*p-v*s)*b,t[2]=(d*s-l*h)*b,t[3]=x*b,t[4]=(v*i-l*m)*b,t[5]=(l*c-d*i)*b,t[6]=S*b,t[7]=(s*m-p*i)*b,t[8]=(h*i-s*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Lh.makeScale(t,i)),this}rotate(t){return this.premultiply(Lh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Lh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lh=new pe;function Bv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function au(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fM(){const r=au("canvas");return r.style.display="block",r}const S0={};function sl(r){r in S0||(S0[r]=!0,console.warn(r))}function hM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const x0=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),M0=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dM(){const r={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ve&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=kr(l.r),l.g=kr(l.g),l.b=kr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Za?nu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return sl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return sl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Yr]:{primaries:t,whitePoint:s,transfer:nu,toXYZ:x0,fromXYZ:M0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:x0,fromXYZ:M0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),r}const Le=dM();function _a(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function kr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xr;class pM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{xr===void 0&&(xr=au("canvas")),xr.width=t.width,xr.height=t.height;const l=xr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=xr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=au("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=_a(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(_a(i[s]/255)*255):i[s]=_a(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mM=0;class dp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Ja(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Nh(l[h].image)):c.push(Nh(l[h]))}else c=Nh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Nh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gM=0;const Oh=new j;class Vn extends zs{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=ws,l=ws,c=Hi,h=Ds,d=Ri,m=ki,p=Vn.DEFAULT_ANISOTROPY,v=Za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Ja(),this.name="",this.source=new dp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Oh).x}get height(){return this.source.getSize(Oh).y}get depth(){return this.source.getSize(Oh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ed:t.x=t.x-Math.floor(t.x);break;case ws:t.x=t.x<0?0:1;break;case Td:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ed:t.y=t.y-Math.floor(t.y);break;case ws:t.y=t.y<0?0:1;break;case Td:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Rv;Vn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],v=m[4],g=m[8],x=m[1],S=m[5],E=m[9],b=m[2],M=m[6],_=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-b)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+b)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,D=(S+1)/2,H=(_+1)/2,B=(v+x)/4,O=(g+b)/4,X=(E+M)/4;return N>D&&N>H?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=B/s,c=O/s):D>H?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=B/l,c=X/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=O/c,l=X/c),this.set(s,l,c,i),this}let z=Math.sqrt((M-E)*(M-E)+(g-b)*(g-b)+(x-v)*(x-v));return Math.abs(z)<.001&&(z=1),this.x=(M-E)/z,this.y=(g-b)/z,this.z=(x-v)/z,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this.w=Me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this.w=Me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _M extends zs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Vn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new dp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ps extends _M{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Fv extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vM extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ol{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ti.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ti.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ti.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ti):Ti.fromBufferAttribute(c,h),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Sc.copy(s.boundingBox)),Sc.applyMatrix4(t.matrixWorld),this.union(Sc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),xc.subVectors(this.max,Wo),Mr.subVectors(t.a,Wo),Er.subVectors(t.b,Wo),Tr.subVectors(t.c,Wo),Va.subVectors(Er,Mr),ka.subVectors(Tr,Er),Ss.subVectors(Mr,Tr);let i=[0,-Va.z,Va.y,0,-ka.z,ka.y,0,-Ss.z,Ss.y,Va.z,0,-Va.x,ka.z,0,-ka.x,Ss.z,0,-Ss.x,-Va.y,Va.x,0,-ka.y,ka.x,0,-Ss.y,Ss.x,0];return!Ph(i,Mr,Er,Tr,xc)||(i=[1,0,0,0,1,0,0,0,1],!Ph(i,Mr,Er,Tr,xc))?!1:(Mc.crossVectors(Va,ka),i=[Mc.x,Mc.y,Mc.z],Ph(i,Mr,Er,Tr,xc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ca=[new j,new j,new j,new j,new j,new j,new j,new j],Ti=new j,Sc=new ol,Mr=new j,Er=new j,Tr=new j,Va=new j,ka=new j,Ss=new j,Wo=new j,xc=new j,Mc=new j,xs=new j;function Ph(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){xs.fromArray(r,c);const d=l.x*Math.abs(xs.x)+l.y*Math.abs(xs.y)+l.z*Math.abs(xs.z),m=t.dot(xs),p=i.dot(xs),v=s.dot(xs);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const yM=new ol,qo=new j,zh=new j;class uu{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):yM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const i=qo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(qo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add(zh)),this.expandByPoint(qo.copy(t.center).sub(zh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ua=new j,Ih=new j,Ec=new j,Xa=new j,Bh=new j,Tc=new j,Fh=new j;class fu{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ua)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ua.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ua.copy(this.origin).addScaledVector(this.direction,i),ua.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Ih.copy(t).add(i).multiplyScalar(.5),Ec.copy(i).sub(t).normalize(),Xa.copy(this.origin).sub(Ih);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Ec),d=Xa.dot(this.direction),m=-Xa.dot(Ec),p=Xa.lengthSq(),v=Math.abs(1-h*h);let g,x,S,E;if(v>0)if(g=h*m-d,x=h*d-m,E=c*v,g>=0)if(x>=-E)if(x<=E){const b=1/v;g*=b,x*=b,S=g*(g+h*x+2*d)+x*(h*g+x+2*m)+p}else x=c,g=Math.max(0,-(h*x+d)),S=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(h*x+d)),S=-g*g+x*(x+2*m)+p;else x<=-E?(g=Math.max(0,-(-h*c+d)),x=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+x*(x+2*m)+p):x<=E?(g=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+p):(g=Math.max(0,-(h*c+d)),x=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+x*(x+2*m)+p);else x=h>0?-c:c,g=Math.max(0,-(h*x+d)),S=-g*g+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Ih).addScaledVector(Ec,x),S}intersectSphere(t,i){ua.subVectors(t.center,this.origin);const s=ua.dot(this.direction),l=ua.dot(ua)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),v>=0?(c=(t.min.y-x.y)*v,h=(t.max.y-x.y)*v):(c=(t.max.y-x.y)*v,h=(t.min.y-x.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(d=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ua)!==null}intersectTriangle(t,i,s,l,c){Bh.subVectors(i,t),Tc.subVectors(s,t),Fh.crossVectors(Bh,Tc);let h=this.direction.dot(Fh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Xa.subVectors(this.origin,t);const m=d*this.direction.dot(Tc.crossVectors(Xa,Tc));if(m<0)return null;const p=d*this.direction.dot(Bh.cross(Xa));if(p<0||m+p>h)return null;const v=-d*Xa.dot(Fh);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,i,s,l,c,h,d,m,p,v,g,x,S,E,b,M){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,v,g,x,S,E,b,M)}set(t,i,s,l,c,h,d,m,p,v,g,x,S,E,b,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=S,_[7]=E,_[11]=b,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/br.setFromMatrixColumn(t,0).length(),c=1/br.setFromMatrixColumn(t,1).length(),h=1/br.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=h*v,S=h*g,E=d*v,b=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=S+E*p,i[5]=x-b*p,i[9]=-d*m,i[2]=b-x*p,i[6]=E+S*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*v,S=m*g,E=p*v,b=p*g;i[0]=x+b*d,i[4]=E*d-S,i[8]=h*p,i[1]=h*g,i[5]=h*v,i[9]=-d,i[2]=S*d-E,i[6]=b+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*v,S=m*g,E=p*v,b=p*g;i[0]=x-b*d,i[4]=-h*g,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*v,i[9]=b-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*v,S=h*g,E=d*v,b=d*g;i[0]=m*v,i[4]=E*p-S,i[8]=x*p+b,i[1]=m*g,i[5]=b*p+x,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,S=h*p,E=d*m,b=d*p;i[0]=m*v,i[4]=b-x*g,i[8]=E*g+S,i[1]=g,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=S*g+E,i[10]=x-b*g}else if(t.order==="XZY"){const x=h*m,S=h*p,E=d*m,b=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=x*g+b,i[5]=h*v,i[9]=S*g-E,i[2]=E*g-S,i[6]=d*v,i[10]=b*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(SM,t,xM)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Wa.crossVectors(s,ri),Wa.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Wa.crossVectors(s,ri)),Wa.normalize(),bc.crossVectors(ri,Wa),l[0]=Wa.x,l[4]=bc.x,l[8]=ri.x,l[1]=Wa.y,l[5]=bc.y,l[9]=ri.y,l[2]=Wa.z,l[6]=bc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],g=s[5],x=s[9],S=s[13],E=s[2],b=s[6],M=s[10],_=s[14],z=s[3],N=s[7],D=s[11],H=s[15],B=l[0],O=l[4],X=l[8],C=l[12],w=l[1],G=l[5],Q=l[9],st=l[13],ht=l[2],lt=l[6],I=l[10],W=l[14],Z=l[3],yt=l[7],xt=l[11],L=l[15];return c[0]=h*B+d*w+m*ht+p*Z,c[4]=h*O+d*G+m*lt+p*yt,c[8]=h*X+d*Q+m*I+p*xt,c[12]=h*C+d*st+m*W+p*L,c[1]=v*B+g*w+x*ht+S*Z,c[5]=v*O+g*G+x*lt+S*yt,c[9]=v*X+g*Q+x*I+S*xt,c[13]=v*C+g*st+x*W+S*L,c[2]=E*B+b*w+M*ht+_*Z,c[6]=E*O+b*G+M*lt+_*yt,c[10]=E*X+b*Q+M*I+_*xt,c[14]=E*C+b*st+M*W+_*L,c[3]=z*B+N*w+D*ht+H*Z,c[7]=z*O+N*G+D*lt+H*yt,c[11]=z*X+N*Q+D*I+H*xt,c[15]=z*C+N*st+D*W+H*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],g=t[6],x=t[10],S=t[14],E=t[3],b=t[7],M=t[11],_=t[15];return E*(+c*m*g-l*p*g-c*d*x+s*p*x+l*d*S-s*m*S)+b*(+i*m*S-i*p*x+c*h*x-l*h*S+l*p*v-c*m*v)+M*(+i*p*g-i*d*S-c*h*g+s*h*S+c*d*v-s*p*v)+_*(-l*d*v-i*m*g+i*d*x+l*h*g-s*h*x+s*m*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=t[9],x=t[10],S=t[11],E=t[12],b=t[13],M=t[14],_=t[15],z=g*M*p-b*x*p+b*m*S-d*M*S-g*m*_+d*x*_,N=E*x*p-v*M*p-E*m*S+h*M*S+v*m*_-h*x*_,D=v*b*p-E*g*p+E*d*S-h*b*S-v*d*_+h*g*_,H=E*g*m-v*b*m-E*d*x+h*b*x+v*d*M-h*g*M,B=i*z+s*N+l*D+c*H;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return t[0]=z*O,t[1]=(b*x*c-g*M*c-b*l*S+s*M*S+g*l*_-s*x*_)*O,t[2]=(d*M*c-b*m*c+b*l*p-s*M*p-d*l*_+s*m*_)*O,t[3]=(g*m*c-d*x*c-g*l*p+s*x*p+d*l*S-s*m*S)*O,t[4]=N*O,t[5]=(v*M*c-E*x*c+E*l*S-i*M*S-v*l*_+i*x*_)*O,t[6]=(E*m*c-h*M*c-E*l*p+i*M*p+h*l*_-i*m*_)*O,t[7]=(h*x*c-v*m*c+v*l*p-i*x*p-h*l*S+i*m*S)*O,t[8]=D*O,t[9]=(E*g*c-v*b*c-E*s*S+i*b*S+v*s*_-i*g*_)*O,t[10]=(h*b*c-E*d*c+E*s*p-i*b*p-h*s*_+i*d*_)*O,t[11]=(v*d*c-h*g*c-v*s*p+i*g*p+h*s*S-i*d*S)*O,t[12]=H*O,t[13]=(v*b*l-E*g*l+E*s*x-i*b*x-v*s*M+i*g*M)*O,t[14]=(E*d*l-h*b*l-E*s*m+i*b*m+h*s*M-i*d*M)*O,t[15]=(h*g*l-v*d*l+v*s*m-i*g*m-h*s*x+i*d*x)*O,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,v=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,g=d+d,x=c*p,S=c*v,E=c*g,b=h*v,M=h*g,_=d*g,z=m*p,N=m*v,D=m*g,H=s.x,B=s.y,O=s.z;return l[0]=(1-(b+_))*H,l[1]=(S+D)*H,l[2]=(E-N)*H,l[3]=0,l[4]=(S-D)*B,l[5]=(1-(x+_))*B,l[6]=(M+z)*B,l[7]=0,l[8]=(E+N)*O,l[9]=(M-z)*O,l[10]=(1-(x+b))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=br.set(l[0],l[1],l[2]).length();const h=br.set(l[4],l[5],l[6]).length(),d=br.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],bi.copy(this);const p=1/c,v=1/h,g=1/d;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=v,bi.elements[5]*=v,bi.elements[6]*=v,bi.elements[8]*=g,bi.elements[9]*=g,bi.elements[10]*=g,i.setFromRotationMatrix(bi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Gi,m=!1){const p=this.elements,v=2*c/(i-t),g=2*c/(s-l),x=(i+t)/(i-t),S=(s+l)/(s-l);let E,b;if(m)E=c/(h-c),b=h*c/(h-c);else if(d===Gi)E=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===iu)E=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Gi,m=!1){const p=this.elements,v=2/(i-t),g=2/(s-l),x=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,b;if(m)E=1/(h-c),b=h/(h-c);else if(d===Gi)E=-2/(h-c),b=-(h+c)/(h-c);else if(d===iu)E=-1/(h-c),b=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const br=new j,bi=new Je,SM=new j(0,0,0),xM=new j(1,1,1),Wa=new j,bc=new j,ri=new j,E0=new Je,T0=new Os;class Xi{constructor(t=0,i=0,s=0,l=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return E0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(E0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return T0.setFromEuler(this),this.setFromQuaternion(T0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class pp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let MM=0;const b0=new j,Ar=new Os,fa=new Je,Ac=new j,Yo=new j,EM=new j,TM=new Os,A0=new j(1,0,0),R0=new j(0,1,0),C0=new j(0,0,1),w0={type:"added"},bM={type:"removed"},Rr={type:"childadded",child:null},Hh={type:"childremoved",child:null};class Sn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const t=new j,i=new Xi,s=new Os,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new pe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(A0,t)}rotateY(t){return this.rotateOnAxis(R0,t)}rotateZ(t){return this.rotateOnAxis(C0,t)}translateOnAxis(t,i){return b0.copy(t).applyQuaternion(this.quaternion),this.position.add(b0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(A0,t)}translateY(t){return this.translateOnAxis(R0,t)}translateZ(t){return this.translateOnAxis(C0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Ac.copy(t):Ac.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Yo,Ac,this.up):fa.lookAt(Ac,Yo,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),Ar.setFromRotationMatrix(fa),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(w0),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(bM),Hh.child=t,this.dispatchEvent(Hh),Hh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fa.multiply(t.parent.matrixWorld)),t.applyMatrix4(fa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(w0),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,EM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,TM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),g=h(t.shapes),x=h(t.skeletons),S=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Sn.DEFAULT_UP=new j(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new j,ha=new j,Gh=new j,da=new j,Cr=new j,wr=new j,D0=new j,Vh=new j,kh=new j,Xh=new j,Wh=new sn,qh=new sn,Yh=new sn;class li{constructor(t=new j,i=new j,s=new j){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ai.subVectors(t,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ai.subVectors(l,i),ha.subVectors(s,i),Gh.subVectors(t,i);const h=Ai.dot(Ai),d=Ai.dot(ha),m=Ai.dot(Gh),p=ha.dot(ha),v=ha.dot(Gh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,S=(p*m-d*v)*x,E=(h*v-d*m)*x;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,da.x),m.addScaledVector(h,da.y),m.addScaledVector(d,da.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Wh.setScalar(0),qh.setScalar(0),Yh.setScalar(0),Wh.fromBufferAttribute(t,i),qh.fromBufferAttribute(t,s),Yh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Wh,c.x),h.addScaledVector(qh,c.y),h.addScaledVector(Yh,c.z),h}static isFrontFacing(t,i,s,l){return Ai.subVectors(s,i),ha.subVectors(t,i),Ai.cross(ha).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ai.cross(ha).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return li.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return li.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Cr.subVectors(l,s),wr.subVectors(c,s),Vh.subVectors(t,s);const m=Cr.dot(Vh),p=wr.dot(Vh);if(m<=0&&p<=0)return i.copy(s);kh.subVectors(t,l);const v=Cr.dot(kh),g=wr.dot(kh);if(v>=0&&g<=v)return i.copy(l);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Cr,h);Xh.subVectors(t,c);const S=Cr.dot(Xh),E=wr.dot(Xh);if(E>=0&&S<=E)return i.copy(c);const b=S*p-m*E;if(b<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(wr,d);const M=v*E-S*g;if(M<=0&&g-v>=0&&S-E>=0)return D0.subVectors(c,l),d=(g-v)/(g-v+(S-E)),i.copy(l).addScaledVector(D0,d);const _=1/(M+b+x);return h=b*_,d=x*_,i.copy(s).addScaledVector(Cr,h).addScaledVector(wr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function jh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class _e{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=cM(t,1),i=Me(i,0,1),s=Me(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=jh(h,c,t+1/3),this.g=jh(h,c,t),this.b=jh(h,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=Gn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Gn){const s=Hv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Gn){return Le.workingToColorSpace(Pn.copy(this),t),Math.round(Me(Pn.r*255,0,255))*65536+Math.round(Me(Pn.g*255,0,255))*256+Math.round(Me(Pn.b*255,0,255))}getHexString(t=Gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=v<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=Gn){Le.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,l=Pn.b;return t!==Gn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(qa),this.setHSL(qa.h+t,qa.s+i,qa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(qa),t.getHSL(Rc);const s=Dh(qa.h,Rc.h,i),l=Dh(qa.s,Rc.s,i),c=Dh(qa.l,Rc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new _e;_e.NAMES=Hv;let AM=0;class Is extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=Vr,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hd,this.blendDst=dd,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(s.blending=this.blending),this.side!==$a&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==hd&&(s.blendSrc=this.blendSrc),this.blendDst!==dd&&(s.blendDst=this.blendDst),this.blendEquation!==Rs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hu extends Is{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const mn=new j,Cc=new ae;let RM=0;class wi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=$d,this.updateRanges=[],this.gpuType=ga,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Cc.fromBufferAttribute(this,i),Cc.applyMatrix3(t),this.setXY(i,Cc.x,Cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Fi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ke(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Fi(i,this.array)),i}setX(t,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Fi(i,this.array)),i}setY(t,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Fi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Fi(i,this.array)),i}setW(t,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array),l=ke(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array),l=ke(l,this.array),c=ke(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$d&&(t.usage=this.usage),t}}class Gv extends wi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Vv extends wi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class rn extends wi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let CM=0;const yi=new Je,Zh=new Sn,Dr=new j,oi=new ol,jo=new ol,bn=new j;class Qn extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bv(t)?Vv:Gv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,i,s){return yi.makeTranslation(t,i,s),this.applyMatrix4(yi),this}scale(t,i,s){return yi.makeScale(t,i,s),this.applyMatrix4(yi),this}lookAt(t){return Zh.lookAt(t),Zh.updateMatrix(),this.applyMatrix4(Zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new rn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];jo.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(oi.min,jo.min),oi.expandByPoint(bn),bn.addVectors(oi.max,jo.max),oi.expandByPoint(bn)):(oi.expandByPoint(jo.min),oi.expandByPoint(jo.max))}oi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)bn.fromBufferAttribute(d,p),m&&(Dr.fromBufferAttribute(t,p),bn.add(Dr)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<s.count;X++)d[X]=new j,m[X]=new j;const p=new j,v=new j,g=new j,x=new ae,S=new ae,E=new ae,b=new j,M=new j;function _(X,C,w){p.fromBufferAttribute(s,X),v.fromBufferAttribute(s,C),g.fromBufferAttribute(s,w),x.fromBufferAttribute(c,X),S.fromBufferAttribute(c,C),E.fromBufferAttribute(c,w),v.sub(p),g.sub(p),S.sub(x),E.sub(x);const G=1/(S.x*E.y-E.x*S.y);isFinite(G)&&(b.copy(v).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(G),M.copy(g).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(G),d[X].add(b),d[C].add(b),d[w].add(b),m[X].add(M),m[C].add(M),m[w].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let X=0,C=z.length;X<C;++X){const w=z[X],G=w.start,Q=w.count;for(let st=G,ht=G+Q;st<ht;st+=3)_(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const N=new j,D=new j,H=new j,B=new j;function O(X){H.fromBufferAttribute(l,X),B.copy(H);const C=d[X];N.copy(C),N.sub(H.multiplyScalar(H.dot(C))).normalize(),D.crossVectors(B,C);const G=D.dot(m[X])<0?-1:1;h.setXYZW(X,N.x,N.y,N.z,G)}for(let X=0,C=z.length;X<C;++X){const w=z[X],G=w.start,Q=w.count;for(let st=G,ht=G+Q;st<ht;st+=3)O(t.getX(st+0)),O(t.getX(st+1)),O(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new j,c=new j,h=new j,d=new j,m=new j,p=new j,v=new j,g=new j;if(t)for(let x=0,S=t.count;x<S;x+=3){const E=t.getX(x+0),b=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,M),d.add(v),m.add(v),p.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,g=d.normalized,x=new p.constructor(m.length*v);let S=0,E=0;for(let b=0,M=m.length;b<M;b++){d.isInterleavedBufferAttribute?S=m[b]*d.data.stride+d.offset:S=m[b]*v;for(let _=0;_<v;_++)x[E++]=p[S++]}return new wi(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,g=p.length;v<g;v++){const x=p[v],S=t(x,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const S=p[g];v.push(S.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],g=c[p];for(let x=0,S=g.length;x<S;x++)v.push(g[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const U0=new Je,Ms=new fu,wc=new uu,L0=new j,Dc=new j,Uc=new j,Lc=new j,Kh=new j,Nc=new j,N0=new j,Oc=new j;class me extends Sn{constructor(t=new Qn,i=new hu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Nc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],g=c[m];v!==0&&(Kh.fromBufferAttribute(g,t),h?Nc.addScaledVector(Kh,v):Nc.addScaledVector(Kh.sub(i),v))}i.add(Nc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),wc.copy(s.boundingSphere),wc.applyMatrix4(c),Ms.copy(t.ray).recast(t.near),!(wc.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(wc,L0)===null||Ms.origin.distanceToSquared(L0)>(t.far-t.near)**2))&&(U0.copy(c).invert(),Ms.copy(t.ray).applyMatrix4(U0),!(s.boundingBox!==null&&Ms.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ms)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,b=x.length;E<b;E++){const M=x[E],_=h[M.materialIndex],z=Math.max(M.start,S.start),N=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let D=z,H=N;D<H;D+=3){const B=d.getX(D),O=d.getX(D+1),X=d.getX(D+2);l=Pc(this,_,t,s,p,v,g,B,O,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let M=E,_=b;M<_;M+=3){const z=d.getX(M),N=d.getX(M+1),D=d.getX(M+2);l=Pc(this,h,t,s,p,v,g,z,N,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,b=x.length;E<b;E++){const M=x[E],_=h[M.materialIndex],z=Math.max(M.start,S.start),N=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let D=z,H=N;D<H;D+=3){const B=D,O=D+1,X=D+2;l=Pc(this,_,t,s,p,v,g,B,O,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(m.count,S.start+S.count);for(let M=E,_=b;M<_;M+=3){const z=M,N=M+1,D=M+2;l=Pc(this,h,t,s,p,v,g,z,N,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function wM(r,t,i,s,l,c,h,d){let m;if(t.side===Kn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===$a,d),m===null)return null;Oc.copy(d),Oc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Oc);return p<i.near||p>i.far?null:{distance:p,point:Oc.clone(),object:r}}function Pc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Dc),r.getVertexPosition(m,Uc),r.getVertexPosition(p,Lc);const v=wM(r,t,i,s,Dc,Uc,Lc,N0);if(v){const g=new j;li.getBarycoord(N0,Dc,Uc,Lc,g),l&&(v.uv=li.getInterpolatedAttribute(l,d,m,p,g,new ae)),c&&(v.uv1=li.getInterpolatedAttribute(c,d,m,p,g,new ae)),h&&(v.normal=li.getInterpolatedAttribute(h,d,m,p,g,new j),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new j,materialIndex:0};li.getNormal(Dc,Uc,Lc,x.normal),v.face=x,v.barycoord=g}return v}class gn extends Qn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],g=[];let x=0,S=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new rn(p,3)),this.setAttribute("normal",new rn(v,3)),this.setAttribute("uv",new rn(g,2));function E(b,M,_,z,N,D,H,B,O,X,C){const w=D/O,G=H/X,Q=D/2,st=H/2,ht=B/2,lt=O+1,I=X+1;let W=0,Z=0;const yt=new j;for(let xt=0;xt<I;xt++){const L=xt*G-st;for(let nt=0;nt<lt;nt++){const St=nt*w-Q;yt[b]=St*z,yt[M]=L*N,yt[_]=ht,p.push(yt.x,yt.y,yt.z),yt[b]=0,yt[M]=0,yt[_]=B>0?1:-1,v.push(yt.x,yt.y,yt.z),g.push(nt/O),g.push(1-xt/X),W+=1}}for(let xt=0;xt<X;xt++)for(let L=0;L<O;L++){const nt=x+L+lt*xt,St=x+L+lt*(xt+1),At=x+(L+1)+lt*(xt+1),Ut=x+(L+1)+lt*xt;m.push(nt,St,Ut),m.push(St,At,Ut),Z+=6}d.addGroup(S,Z,C),S+=Z,x+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function jr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(r){const t={};for(let i=0;i<r.length;i++){const s=jr(r[i]);for(const l in s)t[l]=s[l]}return t}function DM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function kv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const UM={clone:jr,merge:Hn};var LM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends Is{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LM,this.fragmentShader=NM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jr(t.uniforms),this.uniformsGroups=DM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Xv extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ya=new j,O0=new ae,P0=new ae;class Si extends Xv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=tp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tp*2*Math.atan(Math.tan(tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z)}getViewSize(t,i){return this.getViewBounds(t,O0,P0),i.subVectors(P0,O0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(tl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ur=-90,Lr=1;class OM extends Sn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Ur,Lr,t,i);l.layers=this.layers,this.add(l);const c=new Si(Ur,Lr,t,i);c.layers=this.layers,this.add(c);const h=new Si(Ur,Lr,t,i);h.layers=this.layers,this.add(h);const d=new Si(Ur,Lr,t,i);d.layers=this.layers,this.add(d);const m=new Si(Ur,Lr,t,i);m.layers=this.layers,this.add(m);const p=new Si(Ur,Lr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===iu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(g,x,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Wv extends Vn{constructor(t=[],i=Wr,s,l,c,h,d,m,p,v){super(t,i,s,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class PM extends Ps{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Wv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new gn(5,5,5),c=new ts({name:"CubemapFromEquirect",uniforms:jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Ka});c.uniforms.tEquirect.value=i;const h=new me(l,c),d=i.minFilter;return i.minFilter===Ds&&(i.minFilter=Hi),new OM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class ci extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zM={type:"move"};class Qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const b of t.hand.values()){const M=i.getJointPose(b,s),_=this._getHandJoint(p,b);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&x>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(zM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new ci;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class mp{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new _e(t),this.near=i,this.far=s}clone(){return new mp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class IM extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class BM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=$d,this.updateRanges=[],this.version=0,this.uuid=Ja()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ja()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ja()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new j;class su{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Fn.fromBufferAttribute(this,i),Fn.applyMatrix4(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Fn.fromBufferAttribute(this,i),Fn.applyNormalMatrix(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Fn.fromBufferAttribute(this,i),Fn.transformDirection(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Fi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ke(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Fi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Fi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Fi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Fi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array),l=ke(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array),l=ke(l,this.array),c=ke(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new wi(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new su(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class qv extends Is{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Nr;const Zo=new j,Or=new j,Pr=new j,zr=new ae,Ko=new ae,Yv=new Je,zc=new j,Qo=new j,Ic=new j,z0=new ae,Jh=new ae,I0=new ae;class gp extends Sn{constructor(t=new qv){if(super(),this.isSprite=!0,this.type="Sprite",Nr===void 0){Nr=new Qn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new BM(i,5);Nr.setIndex([0,1,2,0,2,3]),Nr.setAttribute("position",new su(s,3,0,!1)),Nr.setAttribute("uv",new su(s,2,3,!1))}this.geometry=Nr,this.material=t,this.center=new ae(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Or.setFromMatrixScale(this.matrixWorld),Yv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Pr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Or.multiplyScalar(-Pr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const h=this.center;Bc(zc.set(-.5,-.5,0),Pr,h,Or,l,c),Bc(Qo.set(.5,-.5,0),Pr,h,Or,l,c),Bc(Ic.set(.5,.5,0),Pr,h,Or,l,c),z0.set(0,0),Jh.set(1,0),I0.set(1,1);let d=t.ray.intersectTriangle(zc,Qo,Ic,!1,Zo);if(d===null&&(Bc(Qo.set(-.5,.5,0),Pr,h,Or,l,c),Jh.set(0,1),d=t.ray.intersectTriangle(zc,Ic,Qo,!1,Zo),d===null))return;const m=t.ray.origin.distanceTo(Zo);m<t.near||m>t.far||i.push({distance:m,point:Zo.clone(),uv:li.getInterpolation(Zo,zc,Qo,Ic,z0,Jh,I0,new ae),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Bc(r,t,i,s,l,c){zr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(Ko.x=c*zr.x-l*zr.y,Ko.y=l*zr.x+c*zr.y):Ko.copy(zr),r.copy(t),r.x+=Ko.x,r.y+=Ko.y,r.applyMatrix4(Yv)}const $h=new j,FM=new j,HM=new pe;class ja{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=$h.subVectors(s,i).cross(FM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta($h),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||HM.getNormalMatrix(t),l=this.coplanarPoint($h).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new uu,GM=new ae(.5,.5),Fc=new j;class _p{constructor(t=new ja,i=new ja,s=new ja,l=new ja,c=new ja,h=new ja){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Gi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],v=c[4],g=c[5],x=c[6],S=c[7],E=c[8],b=c[9],M=c[10],_=c[11],z=c[12],N=c[13],D=c[14],H=c[15];if(l[0].setComponents(p-h,S-v,_-E,H-z).normalize(),l[1].setComponents(p+h,S+v,_+E,H+z).normalize(),l[2].setComponents(p+d,S+g,_+b,H+N).normalize(),l[3].setComponents(p-d,S-g,_-b,H-N).normalize(),s)l[4].setComponents(m,x,M,D).normalize(),l[5].setComponents(p-m,S-x,_-M,H-D).normalize();else if(l[4].setComponents(p-m,S-x,_-M,H-D).normalize(),i===Gi)l[5].setComponents(p+m,S+x,_+M,H+D).normalize();else if(i===iu)l[5].setComponents(m,x,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){Es.center.set(0,0,0);const i=GM.distanceTo(t.center);return Es.radius=.7071067811865476+i,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Fc.x=l.normal.x>0?t.max.x:t.min.x,Fc.y=l.normal.y>0?t.max.y:t.min.y,Fc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jv extends Is{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ru=new j,ou=new j,B0=new Je,Jo=new fu,Hc=new uu,td=new j,F0=new j;class VM extends Sn{constructor(t=new Qn,i=new jv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)ru.fromBufferAttribute(i,l-1),ou.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=ru.distanceTo(ou);t.setAttribute("lineDistance",new rn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hc.copy(s.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=c,t.ray.intersectsSphere(Hc)===!1)return;B0.copy(l).invert(),Jo.copy(t.ray).applyMatrix4(B0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,x=s.attributes.position;if(v!==null){const S=Math.max(0,h.start),E=Math.min(v.count,h.start+h.count);for(let b=S,M=E-1;b<M;b+=p){const _=v.getX(b),z=v.getX(b+1),N=Gc(this,t,Jo,m,_,z,b);N&&i.push(N)}if(this.isLineLoop){const b=v.getX(E-1),M=v.getX(S),_=Gc(this,t,Jo,m,b,M,E-1);_&&i.push(_)}}else{const S=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let b=S,M=E-1;b<M;b+=p){const _=Gc(this,t,Jo,m,b,b+1,b);_&&i.push(_)}if(this.isLineLoop){const b=Gc(this,t,Jo,m,E-1,S,E-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Gc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(ru.fromBufferAttribute(d,l),ou.fromBufferAttribute(d,c),i.distanceSqToSegment(ru,ou,td,F0)>s)return;td.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(td);if(!(p<t.near||p>t.far))return{distance:p,point:F0.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const H0=new j,G0=new j;class kM extends VM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)H0.fromBufferAttribute(i,l),G0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+H0.distanceTo(G0);t.setAttribute("lineDistance",new rn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zv extends Vn{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Kv extends Vn{constructor(t,i,s=Ns,l,c,h,d=Ci,m=Ci,p,v=il,g=1){if(v!==il&&v!==al)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:g};super(x,l,c,h,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Qv extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Vi extends Qn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const v=[],g=[],x=[],S=[];let E=0;const b=[],M=s/2;let _=0;z(),h===!1&&(t>0&&N(!0),i>0&&N(!1)),this.setIndex(v),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(x,3)),this.setAttribute("uv",new rn(S,2));function z(){const D=new j,H=new j;let B=0;const O=(i-t)/s;for(let X=0;X<=c;X++){const C=[],w=X/c,G=w*(i-t)+t;for(let Q=0;Q<=l;Q++){const st=Q/l,ht=st*m+d,lt=Math.sin(ht),I=Math.cos(ht);H.x=G*lt,H.y=-w*s+M,H.z=G*I,g.push(H.x,H.y,H.z),D.set(lt,O,I).normalize(),x.push(D.x,D.y,D.z),S.push(st,1-w),C.push(E++)}b.push(C)}for(let X=0;X<l;X++)for(let C=0;C<c;C++){const w=b[C][X],G=b[C+1][X],Q=b[C+1][X+1],st=b[C][X+1];(t>0||C!==0)&&(v.push(w,G,st),B+=3),(i>0||C!==c-1)&&(v.push(G,Q,st),B+=3)}p.addGroup(_,B,0),_+=B}function N(D){const H=E,B=new ae,O=new j;let X=0;const C=D===!0?t:i,w=D===!0?1:-1;for(let Q=1;Q<=l;Q++)g.push(0,M*w,0),x.push(0,w,0),S.push(.5,.5),E++;const G=E;for(let Q=0;Q<=l;Q++){const ht=Q/l*m+d,lt=Math.cos(ht),I=Math.sin(ht);O.x=C*I,O.y=M*w,O.z=C*lt,g.push(O.x,O.y,O.z),x.push(0,w,0),B.x=lt*.5+.5,B.y=I*.5*w+.5,S.push(B.x,B.y),E++}for(let Q=0;Q<l;Q++){const st=H+Q,ht=G+Q;D===!0?v.push(ht,ht+1,st):v.push(ht+1,ht,st),X+=3}p.addGroup(_,X,D===!0?1:2),_+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Vc=new j,kc=new j,ed=new j,Xc=new li;class XM extends Qn{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(tl*i),h=t.getIndex(),d=t.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],v=["a","b","c"],g=new Array(3),x={},S=[];for(let E=0;E<m;E+=3){h?(p[0]=h.getX(E),p[1]=h.getX(E+1),p[2]=h.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:b,b:M,c:_}=Xc;if(b.fromBufferAttribute(d,p[0]),M.fromBufferAttribute(d,p[1]),_.fromBufferAttribute(d,p[2]),Xc.getNormal(ed),g[0]=`${Math.round(b.x*l)},${Math.round(b.y*l)},${Math.round(b.z*l)}`,g[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,g[2]=`${Math.round(_.x*l)},${Math.round(_.y*l)},${Math.round(_.z*l)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let z=0;z<3;z++){const N=(z+1)%3,D=g[z],H=g[N],B=Xc[v[z]],O=Xc[v[N]],X=`${D}_${H}`,C=`${H}_${D}`;C in x&&x[C]?(ed.dot(x[C].normal)<=c&&(S.push(B.x,B.y,B.z),S.push(O.x,O.y,O.z)),x[C]=null):X in x||(x[X]={index0:p[z],index1:p[N],normal:ed.clone()})}}for(const E in x)if(x[E]){const{index0:b,index1:M}=x[E];Vc.fromBufferAttribute(d,b),kc.fromBufferAttribute(d,M),S.push(Vc.x,Vc.y,Vc.z),S.push(kc.x,kc.y,kc.z)}this.setAttribute("position",new rn(S,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ll extends Qn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,g=t/d,x=i/m,S=[],E=[],b=[],M=[];for(let _=0;_<v;_++){const z=_*x-h;for(let N=0;N<p;N++){const D=N*g-c;E.push(D,-z,0),b.push(0,0,1),M.push(N/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let z=0;z<d;z++){const N=z+p*_,D=z+p*(_+1),H=z+1+p*(_+1),B=z+1+p*_;S.push(N,D,B),S.push(D,H,B)}this.setIndex(S),this.setAttribute("position",new rn(E,3)),this.setAttribute("normal",new rn(b,3)),this.setAttribute("uv",new rn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.widthSegments,t.heightSegments)}}class vp extends Qn{constructor(t=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],v=[];let g=t;const x=(i-t)/l,S=new j,E=new ae;for(let b=0;b<=l;b++){for(let M=0;M<=s;M++){const _=c+M/s*h;S.x=g*Math.cos(_),S.y=g*Math.sin(_),m.push(S.x,S.y,S.z),p.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,v.push(E.x,E.y)}g+=x}for(let b=0;b<l;b++){const M=b*(s+1);for(let _=0;_<s;_++){const z=_+M,N=z,D=z+s+1,H=z+s+2,B=z+1;d.push(N,D,B),d.push(D,H,B)}}this.setIndex(d),this.setAttribute("position",new rn(m,3)),this.setAttribute("normal",new rn(p,3)),this.setAttribute("uv",new rn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vp(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Kr extends Qn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const v=[],g=new j,x=new j,S=[],E=[],b=[],M=[];for(let _=0;_<=s;_++){const z=[],N=_/s;let D=0;_===0&&h===0?D=.5/i:_===s&&m===Math.PI&&(D=-.5/i);for(let H=0;H<=i;H++){const B=H/i;g.x=-t*Math.cos(l+B*c)*Math.sin(h+N*d),g.y=t*Math.cos(h+N*d),g.z=t*Math.sin(l+B*c)*Math.sin(h+N*d),E.push(g.x,g.y,g.z),x.copy(g).normalize(),b.push(x.x,x.y,x.z),M.push(B+D,1-N),z.push(p++)}v.push(z)}for(let _=0;_<s;_++)for(let z=0;z<i;z++){const N=v[_][z+1],D=v[_][z],H=v[_+1][z],B=v[_+1][z+1];(_!==0||h>0)&&S.push(N,D,B),(_!==s-1||m<Math.PI)&&S.push(D,H,B)}this.setIndex(S),this.setAttribute("position",new rn(E,3)),this.setAttribute("normal",new rn(b,3)),this.setAttribute("uv",new rn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class du extends Qn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],m=[],p=[],v=new j,g=new j,x=new j;for(let S=0;S<=s;S++)for(let E=0;E<=l;E++){const b=E/l*c,M=S/s*Math.PI*2;g.x=(t+i*Math.cos(M))*Math.cos(b),g.y=(t+i*Math.cos(M))*Math.sin(b),g.z=i*Math.sin(M),d.push(g.x,g.y,g.z),v.x=t*Math.cos(b),v.y=t*Math.sin(b),x.subVectors(g,v).normalize(),m.push(x.x,x.y,x.z),p.push(E/l),p.push(S/s)}for(let S=1;S<=s;S++)for(let E=1;E<=l;E++){const b=(l+1)*S+E-1,M=(l+1)*(S-1)+E-1,_=(l+1)*(S-1)+E,z=(l+1)*S+E;h.push(b,M,z),h.push(M,_,z)}this.setIndex(h),this.setAttribute("position",new rn(d,3)),this.setAttribute("normal",new rn(m,3)),this.setAttribute("uv",new rn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new du(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class WM extends Is{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zv,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qM extends Is{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$x,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class YM extends Is{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class yp extends Sn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class jM extends yp{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const nd=new Je,V0=new j,k0=new j;class ZM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=ki,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _p,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;V0.setFromMatrixPosition(t.matrixWorld),i.position.copy(V0),k0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(k0),i.updateMatrixWorld(),nd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(nd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Jv extends Xv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class KM extends ZM{constructor(){super(new Jv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class QM extends yp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new KM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class JM extends yp{constructor(t,i,s=10,l=10){super(t,i),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=s,this.height=l}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const i=super.toJSON(t);return i.object.width=this.width,i.object.height=this.height,i}}class $M extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const X0=new Je;class tE{constructor(t,i,s=0,l=1/0){this.ray=new fu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new pp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return X0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(X0),this}intersectObject(t,i=!0,s=[]){return ep(t,this,s,i),s.sort(W0),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)ep(t[l],this,s,i);return s.sort(W0),s}}function W0(r,t){return r.distance-t.distance}function ep(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)ep(c[h],t,i,!0)}}class q0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class eE extends zs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Y0(r,t,i,s){const l=nE(s);switch(i){case Lv:return r*t;case Ov:return r*t/l.components*l.byteLength;case up:return r*t/l.components*l.byteLength;case Pv:return r*t*2/l.components*l.byteLength;case fp:return r*t*2/l.components*l.byteLength;case Nv:return r*t*3/l.components*l.byteLength;case Ri:return r*t*4/l.components*l.byteLength;case hp:return r*t*4/l.components*l.byteLength;case Qc:case Jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case $c:case tu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ad:case Cd:return Math.max(r,16)*Math.max(t,8)/4;case bd:case Rd:return Math.max(r,8)*Math.max(t,8)/2;case wd:case Dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ud:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Od:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Id:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Bd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case kd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Xd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Wd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case qd:case Yd:case jd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Zd:case Kd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Qd:case Jd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function nE(r){switch(r){case ki:case Cv:return{byteLength:1,components:1};case el:case wv:case rl:return{byteLength:2,components:1};case lp:case cp:return{byteLength:2,components:4};case Ns:case op:case ga:return{byteLength:4,components:1};case Dv:case Uv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);function $v(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function iE(r){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,v),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const v=m.array,g=m.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,v);else{g.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<g.length;S++){const E=g[x],b=g[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++x,g[x]=b)}g.length=x+1;for(let S=0,E=g.length;S<E;S++){const b=g[S];r.bufferSubData(p,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var aE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sE=`#ifdef USE_ALPHAHASH
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
#endif`,rE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uE=`#ifdef USE_AOMAP
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
#endif`,fE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hE=`#ifdef USE_BATCHING
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
#endif`,dE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_E=`#ifdef USE_IRIDESCENCE
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
#endif`,vE=`#ifdef USE_BUMPMAP
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
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,RE=`#define PI 3.141592653589793
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
} // validated`,CE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wE=`vec3 transformedNormal = objectNormal;
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
#endif`,DE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OE="gl_FragColor = linearToOutputTexel( gl_FragColor );",PE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zE=`#ifdef USE_ENVMAP
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
#endif`,IE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,FE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HE=`#ifdef USE_ENVMAP
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
#endif`,GE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WE=`#ifdef USE_GRADIENTMAP
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
}`,qE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZE=`uniform bool receiveShadow;
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
#endif`,KE=`#ifdef USE_ENVMAP
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
#endif`,QE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$E=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eT=`PhysicalMaterial material;
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
#endif`,nT=`struct PhysicalMaterial {
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
}`,iT=`
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
#endif`,aT=`#if defined( RE_IndirectDiffuse )
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
#endif`,sT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dT=`#if defined( USE_POINTS_UV )
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
#endif`,pT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_T=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yT=`#ifdef USE_MORPHTARGETS
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
#endif`,ST=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,MT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ET=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AT=`#ifdef USE_NORMALMAP
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
#endif`,RT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,NT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,HT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,VT=`float getShadowMask() {
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
}`,kT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XT=`#ifdef USE_SKINNING
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
#endif`,WT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qT=`#ifdef USE_SKINNING
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
#endif`,YT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QT=`#ifdef USE_TRANSMISSION
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
#endif`,JT=`#ifdef USE_TRANSMISSION
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
#endif`,$T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ib=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ab=`uniform sampler2D t2D;
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
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`#include <common>
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
}`,ub=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fb=`#define DISTANCE
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
}`,hb=`#define DISTANCE
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
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`uniform float scale;
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
}`,gb=`uniform vec3 diffuse;
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
}`,_b=`#include <common>
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
}`,vb=`uniform vec3 diffuse;
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
}`,yb=`#define LAMBERT
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
}`,Sb=`#define LAMBERT
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
}`,xb=`#define MATCAP
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
}`,Mb=`#define MATCAP
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
}`,Eb=`#define NORMAL
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
}`,Tb=`#define NORMAL
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
}`,bb=`#define PHONG
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
}`,Ab=`#define PHONG
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
}`,Rb=`#define STANDARD
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
}`,Cb=`#define STANDARD
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
}`,wb=`#define TOON
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
}`,Db=`#define TOON
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
}`,Ub=`uniform float size;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Nb=`#include <common>
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
}`,Ob=`uniform vec3 color;
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
}`,Pb=`uniform float rotation;
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
}`,zb=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:aE,alphahash_pars_fragment:sE,alphamap_fragment:rE,alphamap_pars_fragment:oE,alphatest_fragment:lE,alphatest_pars_fragment:cE,aomap_fragment:uE,aomap_pars_fragment:fE,batching_pars_vertex:hE,batching_vertex:dE,begin_vertex:pE,beginnormal_vertex:mE,bsdfs:gE,iridescence_fragment:_E,bumpmap_pars_fragment:vE,clipping_planes_fragment:yE,clipping_planes_pars_fragment:SE,clipping_planes_pars_vertex:xE,clipping_planes_vertex:ME,color_fragment:EE,color_pars_fragment:TE,color_pars_vertex:bE,color_vertex:AE,common:RE,cube_uv_reflection_fragment:CE,defaultnormal_vertex:wE,displacementmap_pars_vertex:DE,displacementmap_vertex:UE,emissivemap_fragment:LE,emissivemap_pars_fragment:NE,colorspace_fragment:OE,colorspace_pars_fragment:PE,envmap_fragment:zE,envmap_common_pars_fragment:IE,envmap_pars_fragment:BE,envmap_pars_vertex:FE,envmap_physical_pars_fragment:KE,envmap_vertex:HE,fog_vertex:GE,fog_pars_vertex:VE,fog_fragment:kE,fog_pars_fragment:XE,gradientmap_pars_fragment:WE,lightmap_pars_fragment:qE,lights_lambert_fragment:YE,lights_lambert_pars_fragment:jE,lights_pars_begin:ZE,lights_toon_fragment:QE,lights_toon_pars_fragment:JE,lights_phong_fragment:$E,lights_phong_pars_fragment:tT,lights_physical_fragment:eT,lights_physical_pars_fragment:nT,lights_fragment_begin:iT,lights_fragment_maps:aT,lights_fragment_end:sT,logdepthbuf_fragment:rT,logdepthbuf_pars_fragment:oT,logdepthbuf_pars_vertex:lT,logdepthbuf_vertex:cT,map_fragment:uT,map_pars_fragment:fT,map_particle_fragment:hT,map_particle_pars_fragment:dT,metalnessmap_fragment:pT,metalnessmap_pars_fragment:mT,morphinstance_vertex:gT,morphcolor_vertex:_T,morphnormal_vertex:vT,morphtarget_pars_vertex:yT,morphtarget_vertex:ST,normal_fragment_begin:xT,normal_fragment_maps:MT,normal_pars_fragment:ET,normal_pars_vertex:TT,normal_vertex:bT,normalmap_pars_fragment:AT,clearcoat_normal_fragment_begin:RT,clearcoat_normal_fragment_maps:CT,clearcoat_pars_fragment:wT,iridescence_pars_fragment:DT,opaque_fragment:UT,packing:LT,premultiplied_alpha_fragment:NT,project_vertex:OT,dithering_fragment:PT,dithering_pars_fragment:zT,roughnessmap_fragment:IT,roughnessmap_pars_fragment:BT,shadowmap_pars_fragment:FT,shadowmap_pars_vertex:HT,shadowmap_vertex:GT,shadowmask_pars_fragment:VT,skinbase_vertex:kT,skinning_pars_vertex:XT,skinning_vertex:WT,skinnormal_vertex:qT,specularmap_fragment:YT,specularmap_pars_fragment:jT,tonemapping_fragment:ZT,tonemapping_pars_fragment:KT,transmission_fragment:QT,transmission_pars_fragment:JT,uv_pars_fragment:$T,uv_pars_vertex:tb,uv_vertex:eb,worldpos_vertex:nb,background_vert:ib,background_frag:ab,backgroundCube_vert:sb,backgroundCube_frag:rb,cube_vert:ob,cube_frag:lb,depth_vert:cb,depth_frag:ub,distanceRGBA_vert:fb,distanceRGBA_frag:hb,equirect_vert:db,equirect_frag:pb,linedashed_vert:mb,linedashed_frag:gb,meshbasic_vert:_b,meshbasic_frag:vb,meshlambert_vert:yb,meshlambert_frag:Sb,meshmatcap_vert:xb,meshmatcap_frag:Mb,meshnormal_vert:Eb,meshnormal_frag:Tb,meshphong_vert:bb,meshphong_frag:Ab,meshphysical_vert:Rb,meshphysical_frag:Cb,meshtoon_vert:wb,meshtoon_frag:Db,points_vert:Ub,points_frag:Lb,shadow_vert:Nb,shadow_frag:Ob,sprite_vert:Pb,sprite_frag:zb},Ot={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Bi={basic:{uniforms:Hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new _e(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Hn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Hn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new _e(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Hn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Hn([Ot.points,Ot.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Hn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Hn([Ot.common,Ot.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Hn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Hn([Ot.sprite,Ot.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Hn([Ot.common,Ot.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Hn([Ot.lights,Ot.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Bi.physical={uniforms:Hn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Wc={r:0,b:0,g:0},Ts=new Xi,Ib=new Je;function Bb(r,t,i,s,l,c,h){const d=new _e(0);let m=c===!0?0:1,p,v,g=null,x=0,S=null;function E(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?i:t).get(D)),D}function b(N){let D=!1;const H=E(N);H===null?_(d,m):H&&H.isColor&&(_(H,1),D=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(N,D){const H=E(D);H&&(H.isCubeTexture||H.mapping===cu)?(v===void 0&&(v=new me(new gn(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:jr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,O,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Ts.copy(D.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),v.material.uniforms.envMap.value=H,v.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Ib.makeRotationFromEuler(Ts)),v.material.toneMapped=Le.getTransfer(H.colorSpace)!==Ve,(g!==H||x!==H.version||S!==r.toneMapping)&&(v.material.needsUpdate=!0,g=H,x=H.version,S=r.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new me(new ll(2,2),new ts({name:"BackgroundMaterial",uniforms:jr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Le.getTransfer(H.colorSpace)!==Ve,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||x!==H.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,g=H,x=H.version,S=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,D){N.getRGB(Wc,kv(r)),s.buffers.color.setClear(Wc.r,Wc.g,Wc.b,D,h)}function z(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,D=1){d.set(N),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:b,addToRenderList:M,dispose:z}}function Fb(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(w,G,Q,st,ht){let lt=!1;const I=g(st,Q,G);c!==I&&(c=I,p(c.object)),lt=S(w,st,Q,ht),lt&&E(w,st,Q,ht),ht!==null&&t.update(ht,r.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,D(w,G,Q,st),ht!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function v(w){return r.deleteVertexArray(w)}function g(w,G,Q){const st=Q.wireframe===!0;let ht=s[w.id];ht===void 0&&(ht={},s[w.id]=ht);let lt=ht[G.id];lt===void 0&&(lt={},ht[G.id]=lt);let I=lt[st];return I===void 0&&(I=x(m()),lt[st]=I),I}function x(w){const G=[],Q=[],st=[];for(let ht=0;ht<i;ht++)G[ht]=0,Q[ht]=0,st[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Q,attributeDivisors:st,object:w,attributes:{},index:null}}function S(w,G,Q,st){const ht=c.attributes,lt=G.attributes;let I=0;const W=Q.getAttributes();for(const Z in W)if(W[Z].location>=0){const xt=ht[Z];let L=lt[Z];if(L===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(L=w.instanceColor)),xt===void 0||xt.attribute!==L||L&&xt.data!==L.data)return!0;I++}return c.attributesNum!==I||c.index!==st}function E(w,G,Q,st){const ht={},lt=G.attributes;let I=0;const W=Q.getAttributes();for(const Z in W)if(W[Z].location>=0){let xt=lt[Z];xt===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor));const L={};L.attribute=xt,xt&&xt.data&&(L.data=xt.data),ht[Z]=L,I++}c.attributes=ht,c.attributesNum=I,c.index=st}function b(){const w=c.newAttributes;for(let G=0,Q=w.length;G<Q;G++)w[G]=0}function M(w){_(w,0)}function _(w,G){const Q=c.newAttributes,st=c.enabledAttributes,ht=c.attributeDivisors;Q[w]=1,st[w]===0&&(r.enableVertexAttribArray(w),st[w]=1),ht[w]!==G&&(r.vertexAttribDivisor(w,G),ht[w]=G)}function z(){const w=c.newAttributes,G=c.enabledAttributes;for(let Q=0,st=G.length;Q<st;Q++)G[Q]!==w[Q]&&(r.disableVertexAttribArray(Q),G[Q]=0)}function N(w,G,Q,st,ht,lt,I){I===!0?r.vertexAttribIPointer(w,G,Q,ht,lt):r.vertexAttribPointer(w,G,Q,st,ht,lt)}function D(w,G,Q,st){b();const ht=st.attributes,lt=Q.getAttributes(),I=G.defaultAttributeValues;for(const W in lt){const Z=lt[W];if(Z.location>=0){let yt=ht[W];if(yt===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const xt=yt.normalized,L=yt.itemSize,nt=t.get(yt);if(nt===void 0)continue;const St=nt.buffer,At=nt.type,Ut=nt.bytesPerElement,it=At===r.INT||At===r.UNSIGNED_INT||yt.gpuType===op;if(yt.isInterleavedBufferAttribute){const ct=yt.data,Dt=ct.stride,Bt=yt.offset;if(ct.isInstancedInterleavedBuffer){for(let Wt=0;Wt<Z.locationSize;Wt++)_(Z.location+Wt,ct.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Wt=0;Wt<Z.locationSize;Wt++)M(Z.location+Wt);r.bindBuffer(r.ARRAY_BUFFER,St);for(let Wt=0;Wt<Z.locationSize;Wt++)N(Z.location+Wt,L/Z.locationSize,At,xt,Dt*Ut,(Bt+L/Z.locationSize*Wt)*Ut,it)}else{if(yt.isInstancedBufferAttribute){for(let ct=0;ct<Z.locationSize;ct++)_(Z.location+ct,yt.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ct=0;ct<Z.locationSize;ct++)M(Z.location+ct);r.bindBuffer(r.ARRAY_BUFFER,St);for(let ct=0;ct<Z.locationSize;ct++)N(Z.location+ct,L/Z.locationSize,At,xt,L*Ut,L/Z.locationSize*ct*Ut,it)}}else if(I!==void 0){const xt=I[W];if(xt!==void 0)switch(xt.length){case 2:r.vertexAttrib2fv(Z.location,xt);break;case 3:r.vertexAttrib3fv(Z.location,xt);break;case 4:r.vertexAttrib4fv(Z.location,xt);break;default:r.vertexAttrib1fv(Z.location,xt)}}}}z()}function H(){X();for(const w in s){const G=s[w];for(const Q in G){const st=G[Q];for(const ht in st)v(st[ht].object),delete st[ht];delete G[Q]}delete s[w]}}function B(w){if(s[w.id]===void 0)return;const G=s[w.id];for(const Q in G){const st=G[Q];for(const ht in st)v(st[ht].object),delete st[ht];delete G[Q]}delete s[w.id]}function O(w){for(const G in s){const Q=s[G];if(Q[w.id]===void 0)continue;const st=Q[w.id];for(const ht in st)v(st[ht].object),delete st[ht];delete Q[w.id]}}function X(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:C,dispose:H,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:M,disableUnusedAttributes:z}}function Hb(r,t,i){let s;function l(p){s=p}function c(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,g){g!==0&&(r.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function d(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let S=0;for(let E=0;E<g;E++)S+=v[E];i.update(S,s,1)}function m(p,v,g,x){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)h(p[E],v[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,v,0,x,0,g);let E=0;for(let b=0;b<g;b++)E+=v[b]*x[b];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Gb(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Ri&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const X=O===rl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==ki&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ga&&!X)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),z=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:z,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:H,maxSamples:B}}function Vb(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new ja,d=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||s!==0||l;return l=x,s=g.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,S){const E=g.clippingPlanes,b=g.clipIntersection,M=g.clipShadows,_=r.get(g);if(!l||E===null||E.length===0||c&&!M)c?v(null):p();else{const z=c?0:s,N=z*4;let D=_.clippingState||null;m.value=D,D=v(E,x,N,S);for(let H=0;H!==N;++H)D[H]=i[H];_.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,x,S,E){const b=g!==null?g.length:0;let M=null;if(b!==0){if(M=m.value,E!==!0||M===null){const _=S+b*4,z=x.matrixWorldInverse;d.getNormalMatrix(z),(M===null||M.length<_)&&(M=new Float32Array(_));for(let N=0,D=S;N!==b;++N,D+=4)h.copy(g[N]).applyMatrix4(z,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}function kb(r){let t=new WeakMap;function i(h,d){return d===xd?h.mapping=Wr:d===Md&&(h.mapping=qr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===xd||d===Md)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new PM(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Hr=4,j0=[.125,.215,.35,.446,.526,.582],Cs=20,id=new Jv,Z0=new _e;let ad=null,sd=0,rd=0,od=!1;const As=(1+Math.sqrt(5))/2,Ir=1/As,K0=[new j(-As,Ir,0),new j(As,Ir,0),new j(-Ir,0,As),new j(Ir,0,As),new j(0,As,-Ir),new j(0,As,Ir),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],Xb=new j;class Q0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=Xb}=c;ad=this._renderer.getRenderTarget(),sd=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ad,sd,rd),this._renderer.xr.enabled=od,t.scissorTest=!1,qc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Wr||t.mapping===qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ad=this._renderer.getRenderTarget(),sd=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Hi,minFilter:Hi,generateMipmaps:!1,type:rl,format:Ri,colorSpace:Yr,depthBuffer:!1},l=J0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=J0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wb(c)),this._blurMaterial=qb(c,t,i)}return l}_compileMaterial(t){const i=new me(this._lodPlanes[0],t);this._renderer.compile(i,id)}_sceneToCubeUV(t,i,s,l,c){const m=new Si(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(Z0),g.toneMapping=Qa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const b=new hu({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),M=new me(new gn,b);let _=!1;const z=t.background;z?z.isColor&&(b.color.copy(z),t.background=null,_=!0):(b.color.copy(Z0),_=!0);for(let N=0;N<6;N++){const D=N%3;D===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[N],c.y,c.z)):D===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[N]));const H=this._cubeSize;qc(l,D*H,N>2?H:0,H,H),g.setRenderTarget(l),_&&g.render(M,m),g.render(t,m)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=S,g.autoClear=x,t.background=z}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Wr||t.mapping===qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new me(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;qc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,id)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=K0[(l-c-1)%K0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new me(this._lodPlanes[l],p),x=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Cs-1),b=c/E,M=isFinite(c)?1+Math.floor(v*b):Cs;M>Cs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Cs}`);const _=[];let z=0;for(let O=0;O<Cs;++O){const X=O/b,C=Math.exp(-X*X/2);_.push(C),O===0?z+=C:O<M&&(z+=2*C)}for(let O=0;O<_.length;O++)_[O]=_[O]/z;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=E,x.mipInt.value=N-s;const D=this._sizeLods[l],H=3*D*(l>N-Hr?l-N+Hr:0),B=4*(this._cubeSize-D);qc(i,H,B,3*D,2*D),m.setRenderTarget(i),m.render(g,id)}}function Wb(r){const t=[],i=[],s=[];let l=r;const c=r-Hr+1+j0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-Hr?m=j0[h-r+Hr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,E=6,b=3,M=2,_=1,z=new Float32Array(b*E*S),N=new Float32Array(M*E*S),D=new Float32Array(_*E*S);for(let B=0;B<S;B++){const O=B%3*2/3-1,X=B>2?0:-1,C=[O,X,0,O+2/3,X,0,O+2/3,X+1,0,O,X,0,O+2/3,X+1,0,O,X+1,0];z.set(C,b*E*B),N.set(x,M*E*B);const w=[B,B,B,B,B,B];D.set(w,_*E*B)}const H=new Qn;H.setAttribute("position",new wi(z,b)),H.setAttribute("uv",new wi(N,M)),H.setAttribute("faceIndex",new wi(D,_)),t.push(H),l>Hr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function J0(r,t,i){const s=new Ps(r,t,i);return s.texture.mapping=cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function qc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function qb(r,t,i){const s=new Float32Array(Cs),l=new j(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Sp(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function $0(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sp(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function tv(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function Sp(){return`

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
	`}function Yb(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===xd||m===Md,v=m===Wr||m===qr;if(p||v){let g=t.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Q0(r)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new Q0(r)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function jb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&sl("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Zb(r,t,i,s){const l={},c=new WeakMap;function h(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const S=c.get(x);S&&(t.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const S in x)t.update(x[S],r.ARRAY_BUFFER)}function p(g){const x=[],S=g.index,E=g.attributes.position;let b=0;if(S!==null){const z=S.array;b=S.version;for(let N=0,D=z.length;N<D;N+=3){const H=z[N+0],B=z[N+1],O=z[N+2];x.push(H,B,B,O,O,H)}}else if(E!==void 0){const z=E.array;b=E.version;for(let N=0,D=z.length/3-1;N<D;N+=3){const H=N+0,B=N+1,O=N+2;x.push(H,B,B,O,O,H)}}else return;const M=new(Bv(x)?Vv:Gv)(x,1);M.version=b;const _=c.get(g);_&&t.remove(_),c.set(g,M)}function v(g){const x=c.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function Kb(r,t,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,S){r.drawElements(s,S,c,x*h),i.update(S,s,1)}function p(x,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,x*h,E),i.update(S,s,E))}function v(x,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,x,0,E);let M=0;for(let _=0;_<E;_++)M+=S[_];i.update(M,s,1)}function g(x,S,E,b){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)p(x[_]/h,S[_],b[_]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,x,0,b,0,E);let _=0;for(let z=0;z<E;z++)_+=S[z]*b[z];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function Qb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Jb(r,t,i){const s=new WeakMap,l=new sn;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=s.get(d);if(x===void 0||x.count!==g){let w=function(){X.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var S=w;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),b===!0&&(D=2),M===!0&&(D=3);let H=d.attributes.position.count*D,B=1;H>t.maxTextureSize&&(B=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const O=new Float32Array(H*B*4*g),X=new Fv(O,H,B,g);X.type=ga,X.needsUpdate=!0;const C=D*4;for(let G=0;G<g;G++){const Q=_[G],st=z[G],ht=N[G],lt=H*B*4*G;for(let I=0;I<Q.count;I++){const W=I*C;E===!0&&(l.fromBufferAttribute(Q,I),O[lt+W+0]=l.x,O[lt+W+1]=l.y,O[lt+W+2]=l.z,O[lt+W+3]=0),b===!0&&(l.fromBufferAttribute(st,I),O[lt+W+4]=l.x,O[lt+W+5]=l.y,O[lt+W+6]=l.z,O[lt+W+7]=0),M===!0&&(l.fromBufferAttribute(ht,I),O[lt+W+8]=l.x,O[lt+W+9]=l.y,O[lt+W+10]=l.z,O[lt+W+11]=ht.itemSize===4?l.w:1)}}x={count:g,texture:X,size:new ae(H,B)},s.set(d,x),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const b=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function $b(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,g=t.get(m,v);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const ty=new Vn,ev=new Kv(1,1),ey=new Fv,ny=new vM,iy=new Wv,nv=[],iv=[],av=new Float32Array(16),sv=new Float32Array(9),rv=new Float32Array(4);function Qr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=nv[l];if(c===void 0&&(c=new Float32Array(l),nv[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function xn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Mn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function pu(r,t){let i=iv[t];i===void 0&&(i=new Int32Array(t),iv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function t1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function e1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2fv(this.addr,t),Mn(i,t)}}function n1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;r.uniform3fv(this.addr,t),Mn(i,t)}}function i1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4fv(this.addr,t),Mn(i,t)}}function a1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Mn(i,t)}else{if(xn(i,s))return;rv.set(s),r.uniformMatrix2fv(this.addr,!1,rv),Mn(i,s)}}function s1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Mn(i,t)}else{if(xn(i,s))return;sv.set(s),r.uniformMatrix3fv(this.addr,!1,sv),Mn(i,s)}}function r1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Mn(i,t)}else{if(xn(i,s))return;av.set(s),r.uniformMatrix4fv(this.addr,!1,av),Mn(i,s)}}function o1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function l1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2iv(this.addr,t),Mn(i,t)}}function c1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;r.uniform3iv(this.addr,t),Mn(i,t)}}function u1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4iv(this.addr,t),Mn(i,t)}}function f1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function h1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2uiv(this.addr,t),Mn(i,t)}}function d1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;r.uniform3uiv(this.addr,t),Mn(i,t)}}function p1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4uiv(this.addr,t),Mn(i,t)}}function m1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ev.compareFunction=Iv,c=ev):c=ty,i.setTexture2D(t||c,l)}function g1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||ny,l)}function _1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||iy,l)}function v1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||ey,l)}function y1(r){switch(r){case 5126:return t1;case 35664:return e1;case 35665:return n1;case 35666:return i1;case 35674:return a1;case 35675:return s1;case 35676:return r1;case 5124:case 35670:return o1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return u1;case 5125:return f1;case 36294:return h1;case 36295:return d1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return v1}}function S1(r,t){r.uniform1fv(this.addr,t)}function x1(r,t){const i=Qr(t,this.size,2);r.uniform2fv(this.addr,i)}function M1(r,t){const i=Qr(t,this.size,3);r.uniform3fv(this.addr,i)}function E1(r,t){const i=Qr(t,this.size,4);r.uniform4fv(this.addr,i)}function T1(r,t){const i=Qr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function b1(r,t){const i=Qr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function A1(r,t){const i=Qr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function R1(r,t){r.uniform1iv(this.addr,t)}function C1(r,t){r.uniform2iv(this.addr,t)}function w1(r,t){r.uniform3iv(this.addr,t)}function D1(r,t){r.uniform4iv(this.addr,t)}function U1(r,t){r.uniform1uiv(this.addr,t)}function L1(r,t){r.uniform2uiv(this.addr,t)}function N1(r,t){r.uniform3uiv(this.addr,t)}function O1(r,t){r.uniform4uiv(this.addr,t)}function P1(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||ty,c[h])}function z1(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||ny,c[h])}function I1(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||iy,c[h])}function B1(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||ey,c[h])}function F1(r){switch(r){case 5126:return S1;case 35664:return x1;case 35665:return M1;case 35666:return E1;case 35674:return T1;case 35675:return b1;case 35676:return A1;case 5124:case 35670:return R1;case 35667:case 35671:return C1;case 35668:case 35672:return w1;case 35669:case 35673:return D1;case 5125:return U1;case 36294:return L1;case 36295:return N1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return I1;case 36289:case 36303:case 36311:case 36292:return B1}}class H1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=y1(i.type)}}class G1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=F1(i.type)}}class V1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const ld=/(\w+)(\])?(\[|\.)?/g;function ov(r,t){r.seq.push(t),r.map[t.id]=t}function k1(r,t,i){const s=r.name,l=s.length;for(ld.lastIndex=0;;){const c=ld.exec(s),h=ld.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){ov(i,p===void 0?new H1(d,r,t):new G1(d,r,t));break}else{let g=i.map[d];g===void 0&&(g=new V1(d),ov(i,g)),i=g}}}class eu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);k1(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function lv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const X1=37297;let W1=0;function q1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const cv=new pe;function Y1(r){Le._getMatrix(cv,Le.workingColorSpace,r);const t=`mat3( ${cv.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(r)){case nu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function uv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+q1(r.getShaderSource(t),d)}else return c}function j1(r,t){const i=Y1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Z1(r,t){let i;switch(t){case Wx:i="Linear";break;case qx:i="Reinhard";break;case Yx:i="Cineon";break;case jx:i="ACESFilmic";break;case Kx:i="AgX";break;case Qx:i="Neutral";break;case Zx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yc=new j;function K1(){Le.getLuminanceCoefficients(Yc);const r=Yc.x.toFixed(4),t=Yc.y.toFixed(4),i=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function J1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function $1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function $o(r){return r!==""}function fv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tA=/^[ \t]*#include +<([\w\d./]+)>/gm;function np(r){return r.replace(tA,nA)}const eA=new Map;function nA(r,t){let i=ge[t];if(i===void 0){const s=eA.get(t);if(s!==void 0)i=ge[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return np(i)}const iA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dv(r){return r.replace(iA,aA)}function aA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function pv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===bv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Tx?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===pa&&(t="SHADOWMAP_TYPE_VSM"),t}function rA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Wr:case qr:t="ENVMAP_TYPE_CUBE";break;case cu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function oA(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===qr&&(t="ENVMAP_MODE_REFRACTION"),t}function lA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Av:t="ENVMAP_BLENDING_MULTIPLY";break;case kx:t="ENVMAP_BLENDING_MIX";break;case Xx:t="ENVMAP_BLENDING_ADD";break}return t}function cA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function uA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=sA(i),p=rA(i),v=oA(i),g=lA(i),x=cA(i),S=Q1(i),E=J1(c),b=l.createProgram();let M,_,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter($o).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter($o).join(`
`),_.length>0&&(_+=`
`)):(M=[pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),_=[pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qa?"#define TONE_MAPPING":"",i.toneMapping!==Qa?ge.tonemapping_pars_fragment:"",i.toneMapping!==Qa?Z1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,j1("linearToOutputTexel",i.outputColorSpace),K1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),h=np(h),h=fv(h,i),h=hv(h,i),d=np(d),d=fv(d,i),d=hv(d,i),h=dv(h),d=dv(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===v0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===v0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=z+M+h,D=z+_+d,H=lv(l,l.VERTEX_SHADER,N),B=lv(l,l.FRAGMENT_SHADER,D);l.attachShader(b,H),l.attachShader(b,B),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function O(G){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(b)||"",st=l.getShaderInfoLog(H)||"",ht=l.getShaderInfoLog(B)||"",lt=Q.trim(),I=st.trim(),W=ht.trim();let Z=!0,yt=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,b,H,B);else{const xt=uv(l,H,"vertex"),L=uv(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+lt+`
`+xt+`
`+L)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(I===""||W==="")&&(yt=!1);yt&&(G.diagnostics={runnable:Z,programLog:lt,vertexShader:{log:I,prefix:M},fragmentShader:{log:W,prefix:_}})}l.deleteShader(H),l.deleteShader(B),X=new eu(l,b),C=$1(l,b)}let X;this.getUniforms=function(){return X===void 0&&O(this),X};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(b,X1)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=W1++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=H,this.fragmentShader=B,this}let fA=0;class hA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new dA(t),i.set(t,s)),s}}class dA{constructor(t){this.id=fA++,this.code=t,this.usedTimes=0}}function pA(r,t,i,s,l,c,h){const d=new pp,m=new hA,p=new Set,v=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,w,G,Q,st){const ht=Q.fog,lt=st.geometry,I=C.isMeshStandardMaterial?Q.environment:null,W=(C.isMeshStandardMaterial?i:t).get(C.envMap||I),Z=W&&W.mapping===cu?W.image.height:null,yt=E[C.type];C.precision!==null&&(S=l.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const xt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,L=xt!==void 0?xt.length:0;let nt=0;lt.morphAttributes.position!==void 0&&(nt=1),lt.morphAttributes.normal!==void 0&&(nt=2),lt.morphAttributes.color!==void 0&&(nt=3);let St,At,Ut,it;if(yt){const Re=Bi[yt];St=Re.vertexShader,At=Re.fragmentShader}else St=C.vertexShader,At=C.fragmentShader,m.update(C),Ut=m.getVertexShaderID(C),it=m.getFragmentShaderID(C);const ct=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),Bt=st.isInstancedMesh===!0,Wt=st.isBatchedMesh===!0,he=!!C.map,zt=!!C.matcap,P=!!W,Jt=!!C.aoMap,ie=!!C.lightMap,ee=!!C.bumpMap,Vt=!!C.normalMap,we=!!C.displacementMap,qt=!!C.emissiveMap,le=!!C.metalnessMap,en=!!C.roughnessMap,tn=C.anisotropy>0,U=C.clearcoat>0,T=C.dispersion>0,tt=C.iridescence>0,dt=C.sheen>0,Mt=C.transmission>0,ut=tn&&!!C.anisotropyMap,Kt=U&&!!C.clearcoatMap,Rt=U&&!!C.clearcoatNormalMap,jt=U&&!!C.clearcoatRoughnessMap,Zt=tt&&!!C.iridescenceMap,Tt=tt&&!!C.iridescenceThicknessMap,Ct=dt&&!!C.sheenColorMap,Qt=dt&&!!C.sheenRoughnessMap,It=!!C.specularMap,Lt=!!C.specularColorMap,ue=!!C.specularIntensityMap,k=Mt&&!!C.transmissionMap,bt=Mt&&!!C.thicknessMap,wt=!!C.gradientMap,Ft=!!C.alphaMap,Et=C.alphaTest>0,gt=!!C.alphaHash,Ht=!!C.extensions;let oe=Qa;C.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(oe=r.toneMapping);const ze={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:St,fragmentShader:At,defines:C.defines,customVertexShaderID:Ut,customFragmentShaderID:it,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:Wt,batchingColor:Wt&&st._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&st.instanceColor!==null,instancingMorph:Bt&&st.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ct===null?r.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Yr,alphaToCoverage:!!C.alphaToCoverage,map:he,matcap:zt,envMap:P,envMapMode:P&&W.mapping,envMapCubeUVHeight:Z,aoMap:Jt,lightMap:ie,bumpMap:ee,normalMap:Vt,displacementMap:x&&we,emissiveMap:qt,normalMapObjectSpace:Vt&&C.normalMapType===eM,normalMapTangentSpace:Vt&&C.normalMapType===zv,metalnessMap:le,roughnessMap:en,anisotropy:tn,anisotropyMap:ut,clearcoat:U,clearcoatMap:Kt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:jt,dispersion:T,iridescence:tt,iridescenceMap:Zt,iridescenceThicknessMap:Tt,sheen:dt,sheenColorMap:Ct,sheenRoughnessMap:Qt,specularMap:It,specularColorMap:Lt,specularIntensityMap:ue,transmission:Mt,transmissionMap:k,thicknessMap:bt,gradientMap:wt,opaque:C.transparent===!1&&C.blending===Vr&&C.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Et,alphaHash:gt,combine:C.combine,mapUv:he&&b(C.map.channel),aoMapUv:Jt&&b(C.aoMap.channel),lightMapUv:ie&&b(C.lightMap.channel),bumpMapUv:ee&&b(C.bumpMap.channel),normalMapUv:Vt&&b(C.normalMap.channel),displacementMapUv:we&&b(C.displacementMap.channel),emissiveMapUv:qt&&b(C.emissiveMap.channel),metalnessMapUv:le&&b(C.metalnessMap.channel),roughnessMapUv:en&&b(C.roughnessMap.channel),anisotropyMapUv:ut&&b(C.anisotropyMap.channel),clearcoatMapUv:Kt&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&b(C.sheenRoughnessMap.channel),specularMapUv:It&&b(C.specularMap.channel),specularColorMapUv:Lt&&b(C.specularColorMap.channel),specularIntensityMapUv:ue&&b(C.specularIntensityMap.channel),transmissionMapUv:k&&b(C.transmissionMap.channel),thicknessMapUv:bt&&b(C.thicknessMap.channel),alphaMapUv:Ft&&b(C.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Vt||tn),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!lt.attributes.uv&&(he||Ft),fog:!!ht,useFog:C.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Dt,skinning:st.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:oe,decodeVideoTexture:he&&C.map.isVideoTexture===!0&&Le.getTransfer(C.map.colorSpace)===Ve,decodeVideoTextureEmissive:qt&&C.emissiveMap.isVideoTexture===!0&&Le.getTransfer(C.emissiveMap.colorSpace)===Ve,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ma,flipSided:C.side===Kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ht&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&C.extensions.multiDraw===!0||Wt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return ze.vertexUv1s=p.has(1),ze.vertexUv2s=p.has(2),ze.vertexUv3s=p.has(3),p.clear(),ze}function _(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const G in C.defines)w.push(G),w.push(C.defines[G]);return C.isRawShaderMaterial===!1&&(z(w,C),N(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function z(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function N(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const w=E[C.type];let G;if(w){const Q=Bi[w];G=UM.clone(Q.uniforms)}else G=C.uniforms;return G}function H(C,w){let G;for(let Q=0,st=v.length;Q<st;Q++){const ht=v[Q];if(ht.cacheKey===w){G=ht,++G.usedTimes;break}}return G===void 0&&(G=new uA(r,w,C,c),v.push(G)),G}function B(C){if(--C.usedTimes===0){const w=v.indexOf(C);v[w]=v[v.length-1],v.pop(),C.destroy()}}function O(C){m.remove(C)}function X(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:D,acquireProgram:H,releaseProgram:B,releaseShaderCache:O,programs:v,dispose:X}}function mA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function gA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function mv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function gv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g,x,S,E,b,M){let _=r[t];return _===void 0?(_={id:g.id,object:g,geometry:x,material:S,groupOrder:E,renderOrder:g.renderOrder,z:b,group:M},r[t]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=S,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=b,_.group=M),t++,_}function d(g,x,S,E,b,M){const _=h(g,x,S,E,b,M);S.transmission>0?s.push(_):S.transparent===!0?l.push(_):i.push(_)}function m(g,x,S,E,b,M){const _=h(g,x,S,E,b,M);S.transmission>0?s.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,x){i.length>1&&i.sort(g||gA),s.length>1&&s.sort(x||mv),l.length>1&&l.sort(x||mv)}function v(){for(let g=t,x=r.length;g<x;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function _A(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new gv,r.set(s,[h])):l>=c.length?(h=new gv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function vA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new j,color:new _e};break;case"SpotLight":i={position:new j,direction:new j,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new _e,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":i={color:new _e,position:new j,halfWidth:new j,halfHeight:new j};break}return r[t.id]=i,i}}}function yA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let SA=0;function xA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function MA(r){const t=new vA,i=yA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new j);const l=new j,c=new Je,h=new Je;function d(p){let v=0,g=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let S=0,E=0,b=0,M=0,_=0,z=0,N=0,D=0,H=0,B=0,O=0;p.sort(xA);for(let C=0,w=p.length;C<w;C++){const G=p[C],Q=G.color,st=G.intensity,ht=G.distance,lt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=Q.r*st,g+=Q.g*st,x+=Q.b*st;else if(G.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(G.sh.coefficients[I],st);O++}else if(G.isDirectionalLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const W=G.shadow,Z=i.get(G);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,s.directionalShadow[S]=Z,s.directionalShadowMap[S]=lt,s.directionalShadowMatrix[S]=G.shadow.matrix,z++}s.directional[S]=I,S++}else if(G.isSpotLight){const I=t.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(Q).multiplyScalar(st),I.distance=ht,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,s.spot[b]=I;const W=G.shadow;if(G.map&&(s.spotLightMap[H]=G.map,H++,W.updateMatrices(G),G.castShadow&&B++),s.spotLightMatrix[b]=W.matrix,G.castShadow){const Z=i.get(G);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,s.spotShadow[b]=Z,s.spotShadowMap[b]=lt,D++}b++}else if(G.isRectAreaLight){const I=t.get(G);I.color.copy(Q).multiplyScalar(st),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=I,M++}else if(G.isPointLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const W=G.shadow,Z=i.get(G);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,s.pointShadow[E]=Z,s.pointShadowMap[E]=lt,s.pointShadowMatrix[E]=G.shadow.matrix,N++}s.point[E]=I,E++}else if(G.isHemisphereLight){const I=t.get(G);I.skyColor.copy(G.color).multiplyScalar(st),I.groundColor.copy(G.groundColor).multiplyScalar(st),s.hemi[_]=I,_++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=x;const X=s.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==b||X.rectAreaLength!==M||X.hemiLength!==_||X.numDirectionalShadows!==z||X.numPointShadows!==N||X.numSpotShadows!==D||X.numSpotMaps!==H||X.numLightProbes!==O)&&(s.directional.length=S,s.spot.length=b,s.rectArea.length=M,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=D+H-B,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=O,X.directionalLength=S,X.pointLength=E,X.spotLength=b,X.rectAreaLength=M,X.hemiLength=_,X.numDirectionalShadows=z,X.numPointShadows=N,X.numSpotShadows=D,X.numSpotMaps=H,X.numLightProbes=O,s.version=SA++)}function m(p,v){let g=0,x=0,S=0,E=0,b=0;const M=v.matrixWorldInverse;for(let _=0,z=p.length;_<z;_++){const N=p[_];if(N.isDirectionalLight){const D=s.directional[g];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),g++}else if(N.isSpotLight){const D=s.spot[S];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),S++}else if(N.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(N.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),x++}else if(N.isHemisphereLight){const D=s.hemi[b];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(M),b++}}}return{setup:d,setupView:m,state:s}}function _v(r){const t=new MA(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function h(v){s.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function EA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new _v(r),t.set(l,[d])):c>=h.length?(d=new _v(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const TA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bA=`uniform sampler2D shadow_pass;
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
}`;function AA(r,t,i){let s=new _p;const l=new ae,c=new ae,h=new sn,d=new qM({depthPacking:tM}),m=new YM,p={},v=i.maxTextureSize,g={[$a]:Kn,[Kn]:$a,[ma]:ma},x=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:TA,fragmentShader:bA}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Qn;E.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new me(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bv;let _=this.type;this.render=function(B,O,X){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const C=r.getRenderTarget(),w=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(Ka),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const st=_!==pa&&this.type===pa,ht=_===pa&&this.type!==pa;for(let lt=0,I=B.length;lt<I;lt++){const W=B[lt],Z=W.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const yt=Z.getFrameExtents();if(l.multiply(yt),c.copy(Z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/yt.x),l.x=c.x*yt.x,Z.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/yt.y),l.y=c.y*yt.y,Z.mapSize.y=c.y)),Z.map===null||st===!0||ht===!0){const L=this.type!==pa?{minFilter:Ci,magFilter:Ci}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ps(l.x,l.y,L),Z.map.texture.name=W.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const xt=Z.getViewportCount();for(let L=0;L<xt;L++){const nt=Z.getViewport(L);h.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),Q.viewport(h),Z.updateMatrices(W,L),s=Z.getFrustum(),D(O,X,Z.camera,W,this.type)}Z.isPointLightShadow!==!0&&this.type===pa&&z(Z,X),Z.needsUpdate=!1}_=this.type,M.needsUpdate=!1,r.setRenderTarget(C,w,G)};function z(B,O){const X=t.update(b);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ps(l.x,l.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(O,null,X,x,b,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(O,null,X,S,b,null)}function N(B,O,X,C){let w=null;const G=X.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)w=G;else if(w=X.isPointLight===!0?m:d,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Q=w.uuid,st=O.uuid;let ht=p[Q];ht===void 0&&(ht={},p[Q]=ht);let lt=ht[st];lt===void 0&&(lt=w.clone(),ht[st]=lt,O.addEventListener("dispose",H)),w=lt}if(w.visible=O.visible,w.wireframe=O.wireframe,C===pa?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:g[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Q=r.properties.get(w);Q.light=X}return w}function D(B,O,X,C,w){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===pa)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,B.matrixWorld);const st=t.update(B),ht=B.material;if(Array.isArray(ht)){const lt=st.groups;for(let I=0,W=lt.length;I<W;I++){const Z=lt[I],yt=ht[Z.materialIndex];if(yt&&yt.visible){const xt=N(B,yt,C,w);B.onBeforeShadow(r,B,O,X,st,xt,Z),r.renderBufferDirect(X,null,st,xt,B,Z),B.onAfterShadow(r,B,O,X,st,xt,Z)}}}else if(ht.visible){const lt=N(B,ht,C,w);B.onBeforeShadow(r,B,O,X,st,lt,null),r.renderBufferDirect(X,null,st,lt,B,null),B.onAfterShadow(r,B,O,X,st,lt,null)}}const Q=B.children;for(let st=0,ht=Q.length;st<ht;st++)D(Q[st],O,X,C,w)}function H(B){B.target.removeEventListener("dispose",H);for(const X in p){const C=p[X],w=B.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const RA={[pd]:md,[gd]:yd,[_d]:Sd,[Xr]:vd,[md]:pd,[yd]:gd,[Sd]:_d,[vd]:Xr};function CA(r,t){function i(){let k=!1;const bt=new sn;let wt=null;const Ft=new sn(0,0,0,0);return{setMask:function(Et){wt!==Et&&!k&&(r.colorMask(Et,Et,Et,Et),wt=Et)},setLocked:function(Et){k=Et},setClear:function(Et,gt,Ht,oe,ze){ze===!0&&(Et*=oe,gt*=oe,Ht*=oe),bt.set(Et,gt,Ht,oe),Ft.equals(bt)===!1&&(r.clearColor(Et,gt,Ht,oe),Ft.copy(bt))},reset:function(){k=!1,wt=null,Ft.set(-1,0,0,0)}}}function s(){let k=!1,bt=!1,wt=null,Ft=null,Et=null;return{setReversed:function(gt){if(bt!==gt){const Ht=t.get("EXT_clip_control");gt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),bt=gt;const oe=Et;Et=null,this.setClear(oe)}},getReversed:function(){return bt},setTest:function(gt){gt?ct(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(gt){wt!==gt&&!k&&(r.depthMask(gt),wt=gt)},setFunc:function(gt){if(bt&&(gt=RA[gt]),Ft!==gt){switch(gt){case pd:r.depthFunc(r.NEVER);break;case md:r.depthFunc(r.ALWAYS);break;case gd:r.depthFunc(r.LESS);break;case Xr:r.depthFunc(r.LEQUAL);break;case _d:r.depthFunc(r.EQUAL);break;case vd:r.depthFunc(r.GEQUAL);break;case yd:r.depthFunc(r.GREATER);break;case Sd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ft=gt}},setLocked:function(gt){k=gt},setClear:function(gt){Et!==gt&&(bt&&(gt=1-gt),r.clearDepth(gt),Et=gt)},reset:function(){k=!1,wt=null,Ft=null,Et=null,bt=!1}}}function l(){let k=!1,bt=null,wt=null,Ft=null,Et=null,gt=null,Ht=null,oe=null,ze=null;return{setTest:function(Re){k||(Re?ct(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(Re){bt!==Re&&!k&&(r.stencilMask(Re),bt=Re)},setFunc:function(Re,zn,ui){(wt!==Re||Ft!==zn||Et!==ui)&&(r.stencilFunc(Re,zn,ui),wt=Re,Ft=zn,Et=ui)},setOp:function(Re,zn,ui){(gt!==Re||Ht!==zn||oe!==ui)&&(r.stencilOp(Re,zn,ui),gt=Re,Ht=zn,oe=ui)},setLocked:function(Re){k=Re},setClear:function(Re){ze!==Re&&(r.clearStencil(Re),ze=Re)},reset:function(){k=!1,bt=null,wt=null,Ft=null,Et=null,gt=null,Ht=null,oe=null,ze=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,S=[],E=null,b=!1,M=null,_=null,z=null,N=null,D=null,H=null,B=null,O=new _e(0,0,0),X=0,C=!1,w=null,G=null,Q=null,st=null,ht=null;const lt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,W=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),I=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),I=W>=2);let yt=null,xt={};const L=r.getParameter(r.SCISSOR_BOX),nt=r.getParameter(r.VIEWPORT),St=new sn().fromArray(L),At=new sn().fromArray(nt);function Ut(k,bt,wt,Ft){const Et=new Uint8Array(4),gt=r.createTexture();r.bindTexture(k,gt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ht=0;Ht<wt;Ht++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(bt,0,r.RGBA,1,1,Ft,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(bt+Ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return gt}const it={};it[r.TEXTURE_2D]=Ut(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Ut(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Ut(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Ut(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(r.DEPTH_TEST),h.setFunc(Xr),ee(!1),Vt(d0),ct(r.CULL_FACE),Jt(Ka);function ct(k){v[k]!==!0&&(r.enable(k),v[k]=!0)}function Dt(k){v[k]!==!1&&(r.disable(k),v[k]=!1)}function Bt(k,bt){return g[k]!==bt?(r.bindFramebuffer(k,bt),g[k]=bt,k===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=bt),k===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=bt),!0):!1}function Wt(k,bt){let wt=S,Ft=!1;if(k){wt=x.get(bt),wt===void 0&&(wt=[],x.set(bt,wt));const Et=k.textures;if(wt.length!==Et.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let gt=0,Ht=Et.length;gt<Ht;gt++)wt[gt]=r.COLOR_ATTACHMENT0+gt;wt.length=Et.length,Ft=!0}}else wt[0]!==r.BACK&&(wt[0]=r.BACK,Ft=!0);Ft&&r.drawBuffers(wt)}function he(k){return E!==k?(r.useProgram(k),E=k,!0):!1}const zt={[Rs]:r.FUNC_ADD,[Ax]:r.FUNC_SUBTRACT,[Rx]:r.FUNC_REVERSE_SUBTRACT};zt[Cx]=r.MIN,zt[wx]=r.MAX;const P={[Dx]:r.ZERO,[Ux]:r.ONE,[Lx]:r.SRC_COLOR,[hd]:r.SRC_ALPHA,[Bx]:r.SRC_ALPHA_SATURATE,[zx]:r.DST_COLOR,[Ox]:r.DST_ALPHA,[Nx]:r.ONE_MINUS_SRC_COLOR,[dd]:r.ONE_MINUS_SRC_ALPHA,[Ix]:r.ONE_MINUS_DST_COLOR,[Px]:r.ONE_MINUS_DST_ALPHA,[Fx]:r.CONSTANT_COLOR,[Hx]:r.ONE_MINUS_CONSTANT_COLOR,[Gx]:r.CONSTANT_ALPHA,[Vx]:r.ONE_MINUS_CONSTANT_ALPHA};function Jt(k,bt,wt,Ft,Et,gt,Ht,oe,ze,Re){if(k===Ka){b===!0&&(Dt(r.BLEND),b=!1);return}if(b===!1&&(ct(r.BLEND),b=!0),k!==bx){if(k!==M||Re!==C){if((_!==Rs||D!==Rs)&&(r.blendEquation(r.FUNC_ADD),_=Rs,D=Rs),Re)switch(k){case Vr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case p0:r.blendFunc(r.ONE,r.ONE);break;case m0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case g0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Vr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case p0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case m0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case g0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}z=null,N=null,H=null,B=null,O.set(0,0,0),X=0,M=k,C=Re}return}Et=Et||bt,gt=gt||wt,Ht=Ht||Ft,(bt!==_||Et!==D)&&(r.blendEquationSeparate(zt[bt],zt[Et]),_=bt,D=Et),(wt!==z||Ft!==N||gt!==H||Ht!==B)&&(r.blendFuncSeparate(P[wt],P[Ft],P[gt],P[Ht]),z=wt,N=Ft,H=gt,B=Ht),(oe.equals(O)===!1||ze!==X)&&(r.blendColor(oe.r,oe.g,oe.b,ze),O.copy(oe),X=ze),M=k,C=!1}function ie(k,bt){k.side===ma?Dt(r.CULL_FACE):ct(r.CULL_FACE);let wt=k.side===Kn;bt&&(wt=!wt),ee(wt),k.blending===Vr&&k.transparent===!1?Jt(Ka):Jt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const Ft=k.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),qt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ct(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){w!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),w=k)}function Vt(k){k!==Mx?(ct(r.CULL_FACE),k!==G&&(k===d0?r.cullFace(r.BACK):k===Ex?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),G=k}function we(k){k!==Q&&(I&&r.lineWidth(k),Q=k)}function qt(k,bt,wt){k?(ct(r.POLYGON_OFFSET_FILL),(st!==bt||ht!==wt)&&(r.polygonOffset(bt,wt),st=bt,ht=wt)):Dt(r.POLYGON_OFFSET_FILL)}function le(k){k?ct(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function en(k){k===void 0&&(k=r.TEXTURE0+lt-1),yt!==k&&(r.activeTexture(k),yt=k)}function tn(k,bt,wt){wt===void 0&&(yt===null?wt=r.TEXTURE0+lt-1:wt=yt);let Ft=xt[wt];Ft===void 0&&(Ft={type:void 0,texture:void 0},xt[wt]=Ft),(Ft.type!==k||Ft.texture!==bt)&&(yt!==wt&&(r.activeTexture(wt),yt=wt),r.bindTexture(k,bt||it[k]),Ft.type=k,Ft.texture=bt)}function U(){const k=xt[yt];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{r.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{r.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{r.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{r.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{r.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Zt(){try{r.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{r.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(k){St.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function Qt(k){At.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),At.copy(k))}function It(k,bt){let wt=p.get(bt);wt===void 0&&(wt=new WeakMap,p.set(bt,wt));let Ft=wt.get(k);Ft===void 0&&(Ft=r.getUniformBlockIndex(bt,k.name),wt.set(k,Ft))}function Lt(k,bt){const Ft=p.get(bt).get(k);m.get(bt)!==Ft&&(r.uniformBlockBinding(bt,Ft,k.__bindingPointIndex),m.set(bt,Ft))}function ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},yt=null,xt={},g={},x=new WeakMap,S=[],E=null,b=!1,M=null,_=null,z=null,N=null,D=null,H=null,B=null,O=new _e(0,0,0),X=0,C=!1,w=null,G=null,Q=null,st=null,ht=null,St.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ct,disable:Dt,bindFramebuffer:Bt,drawBuffers:Wt,useProgram:he,setBlending:Jt,setMaterial:ie,setFlipSided:ee,setCullFace:Vt,setLineWidth:we,setPolygonOffset:qt,setScissorTest:le,activeTexture:en,bindTexture:tn,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:tt,texImage2D:Zt,texImage3D:Tt,updateUBOMapping:It,uniformBlockBinding:Lt,texStorage2D:Rt,texStorage3D:jt,texSubImage2D:dt,texSubImage3D:Mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Kt,scissor:Ct,viewport:Qt,reset:ue}}function wA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ae,v=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,T){return S?new OffscreenCanvas(U,T):au("canvas")}function b(U,T,tt){let dt=1;const Mt=tn(U);if((Mt.width>tt||Mt.height>tt)&&(dt=tt/Math.max(Mt.width,Mt.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ut=Math.floor(dt*Mt.width),Kt=Math.floor(dt*Mt.height);g===void 0&&(g=E(ut,Kt));const Rt=T?E(ut,Kt):g;return Rt.width=ut,Rt.height=Kt,Rt.getContext("2d").drawImage(U,0,0,ut,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ut+"x"+Kt+")."),Rt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),U;return U}function M(U){return U.generateMipmaps}function _(U){r.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(U,T,tt,dt,Mt=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ut=T;if(T===r.RED&&(tt===r.FLOAT&&(ut=r.R32F),tt===r.HALF_FLOAT&&(ut=r.R16F),tt===r.UNSIGNED_BYTE&&(ut=r.R8)),T===r.RED_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ut=r.R8UI),tt===r.UNSIGNED_SHORT&&(ut=r.R16UI),tt===r.UNSIGNED_INT&&(ut=r.R32UI),tt===r.BYTE&&(ut=r.R8I),tt===r.SHORT&&(ut=r.R16I),tt===r.INT&&(ut=r.R32I)),T===r.RG&&(tt===r.FLOAT&&(ut=r.RG32F),tt===r.HALF_FLOAT&&(ut=r.RG16F),tt===r.UNSIGNED_BYTE&&(ut=r.RG8)),T===r.RG_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ut=r.RG8UI),tt===r.UNSIGNED_SHORT&&(ut=r.RG16UI),tt===r.UNSIGNED_INT&&(ut=r.RG32UI),tt===r.BYTE&&(ut=r.RG8I),tt===r.SHORT&&(ut=r.RG16I),tt===r.INT&&(ut=r.RG32I)),T===r.RGB_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),tt===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),tt===r.UNSIGNED_INT&&(ut=r.RGB32UI),tt===r.BYTE&&(ut=r.RGB8I),tt===r.SHORT&&(ut=r.RGB16I),tt===r.INT&&(ut=r.RGB32I)),T===r.RGBA_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),tt===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),tt===r.UNSIGNED_INT&&(ut=r.RGBA32UI),tt===r.BYTE&&(ut=r.RGBA8I),tt===r.SHORT&&(ut=r.RGBA16I),tt===r.INT&&(ut=r.RGBA32I)),T===r.RGB&&(tt===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),tt===r.UNSIGNED_INT_10F_11F_11F_REV&&(ut=r.R11F_G11F_B10F)),T===r.RGBA){const Kt=Mt?nu:Le.getTransfer(dt);tt===r.FLOAT&&(ut=r.RGBA32F),tt===r.HALF_FLOAT&&(ut=r.RGBA16F),tt===r.UNSIGNED_BYTE&&(ut=Kt===Ve?r.SRGB8_ALPHA8:r.RGBA8),tt===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),tt===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function D(U,T){let tt;return U?T===null||T===Ns||T===nl?tt=r.DEPTH24_STENCIL8:T===ga?tt=r.DEPTH32F_STENCIL8:T===el&&(tt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ns||T===nl?tt=r.DEPTH_COMPONENT24:T===ga?tt=r.DEPTH_COMPONENT32F:T===el&&(tt=r.DEPTH_COMPONENT16),tt}function H(U,T){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ci&&U.minFilter!==Hi?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function B(U){const T=U.target;T.removeEventListener("dispose",B),X(T),T.isVideoTexture&&v.delete(T)}function O(U){const T=U.target;T.removeEventListener("dispose",O),w(T)}function X(U){const T=s.get(U);if(T.__webglInit===void 0)return;const tt=U.source,dt=x.get(tt);if(dt){const Mt=dt[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&C(U),Object.keys(dt).length===0&&x.delete(tt)}s.remove(U)}function C(U){const T=s.get(U);r.deleteTexture(T.__webglTexture);const tt=U.source,dt=x.get(tt);delete dt[T.__cacheKey],h.memory.textures--}function w(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let Mt=0;Mt<T.__webglFramebuffer[dt].length;Mt++)r.deleteFramebuffer(T.__webglFramebuffer[dt][Mt]);else r.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)r.deleteFramebuffer(T.__webglFramebuffer[dt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=U.textures;for(let dt=0,Mt=tt.length;dt<Mt;dt++){const ut=s.get(tt[dt]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove(tt[dt])}s.remove(U)}let G=0;function Q(){G=0}function st(){const U=G;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),G+=1,U}function ht(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function lt(U,T){const tt=s.get(U);if(U.isVideoTexture&&le(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&tt.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(tt,U,T);return}}else U.isExternalTexture&&(tt.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,tt.__webglTexture,r.TEXTURE0+T)}function I(U,T){const tt=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){it(tt,U,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,tt.__webglTexture,r.TEXTURE0+T)}function W(U,T){const tt=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){it(tt,U,T);return}i.bindTexture(r.TEXTURE_3D,tt.__webglTexture,r.TEXTURE0+T)}function Z(U,T){const tt=s.get(U);if(U.version>0&&tt.__version!==U.version){ct(tt,U,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture,r.TEXTURE0+T)}const yt={[Ed]:r.REPEAT,[ws]:r.CLAMP_TO_EDGE,[Td]:r.MIRRORED_REPEAT},xt={[Ci]:r.NEAREST,[Jx]:r.NEAREST_MIPMAP_NEAREST,[yc]:r.NEAREST_MIPMAP_LINEAR,[Hi]:r.LINEAR,[wh]:r.LINEAR_MIPMAP_NEAREST,[Ds]:r.LINEAR_MIPMAP_LINEAR},L={[nM]:r.NEVER,[lM]:r.ALWAYS,[iM]:r.LESS,[Iv]:r.LEQUAL,[aM]:r.EQUAL,[oM]:r.GEQUAL,[sM]:r.GREATER,[rM]:r.NOTEQUAL};function nt(U,T){if(T.type===ga&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Hi||T.magFilter===wh||T.magFilter===yc||T.magFilter===Ds||T.minFilter===Hi||T.minFilter===wh||T.minFilter===yc||T.minFilter===Ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,yt[T.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,yt[T.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,yt[T.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,xt[T.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,xt[T.minFilter]),T.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,L[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ci||T.minFilter!==yc&&T.minFilter!==Ds||T.type===ga&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function St(U,T){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",B));const dt=T.source;let Mt=x.get(dt);Mt===void 0&&(Mt={},x.set(dt,Mt));const ut=ht(T);if(ut!==U.__cacheKey){Mt[ut]===void 0&&(Mt[ut]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),Mt[ut].usedTimes++;const Kt=Mt[U.__cacheKey];Kt!==void 0&&(Mt[U.__cacheKey].usedTimes--,Kt.usedTimes===0&&C(T)),U.__cacheKey=ut,U.__webglTexture=Mt[ut].texture}return tt}function At(U,T,tt){return Math.floor(Math.floor(U/tt)/T)}function Ut(U,T,tt,dt){const ut=U.updateRanges;if(ut.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,tt,dt,T.data);else{ut.sort((Tt,Ct)=>Tt.start-Ct.start);let Kt=0;for(let Tt=1;Tt<ut.length;Tt++){const Ct=ut[Kt],Qt=ut[Tt],It=Ct.start+Ct.count,Lt=At(Qt.start,T.width,4),ue=At(Ct.start,T.width,4);Qt.start<=It+1&&Lt===ue&&At(Qt.start+Qt.count-1,T.width,4)===Lt?Ct.count=Math.max(Ct.count,Qt.start+Qt.count-Ct.start):(++Kt,ut[Kt]=Qt)}ut.length=Kt+1;const Rt=r.getParameter(r.UNPACK_ROW_LENGTH),jt=r.getParameter(r.UNPACK_SKIP_PIXELS),Zt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Tt=0,Ct=ut.length;Tt<Ct;Tt++){const Qt=ut[Tt],It=Math.floor(Qt.start/4),Lt=Math.ceil(Qt.count/4),ue=It%T.width,k=Math.floor(It/T.width),bt=Lt,wt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ue),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,ue,k,bt,wt,tt,dt,T.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,jt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Zt)}}function it(U,T,tt){let dt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=r.TEXTURE_3D);const Mt=St(U,T),ut=T.source;i.bindTexture(dt,U.__webglTexture,r.TEXTURE0+tt);const Kt=s.get(ut);if(ut.version!==Kt.__version||Mt===!0){i.activeTexture(r.TEXTURE0+tt);const Rt=Le.getPrimaries(Le.workingColorSpace),jt=T.colorSpace===Za?null:Le.getPrimaries(T.colorSpace),Zt=T.colorSpace===Za||Rt===jt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let Tt=b(T.image,!1,l.maxTextureSize);Tt=en(T,Tt);const Ct=c.convert(T.format,T.colorSpace),Qt=c.convert(T.type);let It=N(T.internalFormat,Ct,Qt,T.colorSpace,T.isVideoTexture);nt(dt,T);let Lt;const ue=T.mipmaps,k=T.isVideoTexture!==!0,bt=Kt.__version===void 0||Mt===!0,wt=ut.dataReady,Ft=H(T,Tt);if(T.isDepthTexture)It=D(T.format===al,T.type),bt&&(k?i.texStorage2D(r.TEXTURE_2D,1,It,Tt.width,Tt.height):i.texImage2D(r.TEXTURE_2D,0,It,Tt.width,Tt.height,0,Ct,Qt,null));else if(T.isDataTexture)if(ue.length>0){k&&bt&&i.texStorage2D(r.TEXTURE_2D,Ft,It,ue[0].width,ue[0].height);for(let Et=0,gt=ue.length;Et<gt;Et++)Lt=ue[Et],k?wt&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,Lt.width,Lt.height,Ct,Qt,Lt.data):i.texImage2D(r.TEXTURE_2D,Et,It,Lt.width,Lt.height,0,Ct,Qt,Lt.data);T.generateMipmaps=!1}else k?(bt&&i.texStorage2D(r.TEXTURE_2D,Ft,It,Tt.width,Tt.height),wt&&Ut(T,Tt,Ct,Qt)):i.texImage2D(r.TEXTURE_2D,0,It,Tt.width,Tt.height,0,Ct,Qt,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&bt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,It,ue[0].width,ue[0].height,Tt.depth);for(let Et=0,gt=ue.length;Et<gt;Et++)if(Lt=ue[Et],T.format!==Ri)if(Ct!==null)if(k){if(wt)if(T.layerUpdates.size>0){const Ht=Y0(Lt.width,Lt.height,T.format,T.type);for(const oe of T.layerUpdates){const ze=Lt.data.subarray(oe*Ht/Lt.data.BYTES_PER_ELEMENT,(oe+1)*Ht/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,oe,Lt.width,Lt.height,1,Ct,ze)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Lt.width,Lt.height,Tt.depth,Ct,Lt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Et,It,Lt.width,Lt.height,Tt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?wt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Lt.width,Lt.height,Tt.depth,Ct,Qt,Lt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Et,It,Lt.width,Lt.height,Tt.depth,0,Ct,Qt,Lt.data)}else{k&&bt&&i.texStorage2D(r.TEXTURE_2D,Ft,It,ue[0].width,ue[0].height);for(let Et=0,gt=ue.length;Et<gt;Et++)Lt=ue[Et],T.format!==Ri?Ct!==null?k?wt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Et,0,0,Lt.width,Lt.height,Ct,Lt.data):i.compressedTexImage2D(r.TEXTURE_2D,Et,It,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?wt&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,Lt.width,Lt.height,Ct,Qt,Lt.data):i.texImage2D(r.TEXTURE_2D,Et,It,Lt.width,Lt.height,0,Ct,Qt,Lt.data)}else if(T.isDataArrayTexture)if(k){if(bt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,It,Tt.width,Tt.height,Tt.depth),wt)if(T.layerUpdates.size>0){const Et=Y0(Tt.width,Tt.height,T.format,T.type);for(const gt of T.layerUpdates){const Ht=Tt.data.subarray(gt*Et/Tt.data.BYTES_PER_ELEMENT,(gt+1)*Et/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,gt,Tt.width,Tt.height,1,Ct,Qt,Ht)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ct,Qt,Tt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,It,Tt.width,Tt.height,Tt.depth,0,Ct,Qt,Tt.data);else if(T.isData3DTexture)k?(bt&&i.texStorage3D(r.TEXTURE_3D,Ft,It,Tt.width,Tt.height,Tt.depth),wt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ct,Qt,Tt.data)):i.texImage3D(r.TEXTURE_3D,0,It,Tt.width,Tt.height,Tt.depth,0,Ct,Qt,Tt.data);else if(T.isFramebufferTexture){if(bt)if(k)i.texStorage2D(r.TEXTURE_2D,Ft,It,Tt.width,Tt.height);else{let Et=Tt.width,gt=Tt.height;for(let Ht=0;Ht<Ft;Ht++)i.texImage2D(r.TEXTURE_2D,Ht,It,Et,gt,0,Ct,Qt,null),Et>>=1,gt>>=1}}else if(ue.length>0){if(k&&bt){const Et=tn(ue[0]);i.texStorage2D(r.TEXTURE_2D,Ft,It,Et.width,Et.height)}for(let Et=0,gt=ue.length;Et<gt;Et++)Lt=ue[Et],k?wt&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,Ct,Qt,Lt):i.texImage2D(r.TEXTURE_2D,Et,It,Ct,Qt,Lt);T.generateMipmaps=!1}else if(k){if(bt){const Et=tn(Tt);i.texStorage2D(r.TEXTURE_2D,Ft,It,Et.width,Et.height)}wt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ct,Qt,Tt)}else i.texImage2D(r.TEXTURE_2D,0,It,Ct,Qt,Tt);M(T)&&_(dt),Kt.__version=ut.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ct(U,T,tt){if(T.image.length!==6)return;const dt=St(U,T),Mt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+tt);const ut=s.get(Mt);if(Mt.version!==ut.__version||dt===!0){i.activeTexture(r.TEXTURE0+tt);const Kt=Le.getPrimaries(Le.workingColorSpace),Rt=T.colorSpace===Za?null:Le.getPrimaries(T.colorSpace),jt=T.colorSpace===Za||Kt===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const Zt=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,Ct=[];for(let gt=0;gt<6;gt++)!Zt&&!Tt?Ct[gt]=b(T.image[gt],!0,l.maxCubemapSize):Ct[gt]=Tt?T.image[gt].image:T.image[gt],Ct[gt]=en(T,Ct[gt]);const Qt=Ct[0],It=c.convert(T.format,T.colorSpace),Lt=c.convert(T.type),ue=N(T.internalFormat,It,Lt,T.colorSpace),k=T.isVideoTexture!==!0,bt=ut.__version===void 0||dt===!0,wt=Mt.dataReady;let Ft=H(T,Qt);nt(r.TEXTURE_CUBE_MAP,T);let Et;if(Zt){k&&bt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,ue,Qt.width,Qt.height);for(let gt=0;gt<6;gt++){Et=Ct[gt].mipmaps;for(let Ht=0;Ht<Et.length;Ht++){const oe=Et[Ht];T.format!==Ri?It!==null?k?wt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,0,0,oe.width,oe.height,It,oe.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,ue,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,0,0,oe.width,oe.height,It,Lt,oe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,ue,oe.width,oe.height,0,It,Lt,oe.data)}}}else{if(Et=T.mipmaps,k&&bt){Et.length>0&&Ft++;const gt=tn(Ct[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,ue,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Tt){k?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ct[gt].width,Ct[gt].height,It,Lt,Ct[gt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ue,Ct[gt].width,Ct[gt].height,0,It,Lt,Ct[gt].data);for(let Ht=0;Ht<Et.length;Ht++){const ze=Et[Ht].image[gt].image;k?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,0,0,ze.width,ze.height,It,Lt,ze.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,ue,ze.width,ze.height,0,It,Lt,ze.data)}}else{k?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,It,Lt,Ct[gt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ue,It,Lt,Ct[gt]);for(let Ht=0;Ht<Et.length;Ht++){const oe=Et[Ht];k?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,0,0,It,Lt,oe.image[gt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,ue,It,Lt,oe.image[gt])}}}M(T)&&_(r.TEXTURE_CUBE_MAP),ut.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Dt(U,T,tt,dt,Mt,ut){const Kt=c.convert(tt.format,tt.colorSpace),Rt=c.convert(tt.type),jt=N(tt.internalFormat,Kt,Rt,tt.colorSpace),Zt=s.get(T),Tt=s.get(tt);if(Tt.__renderTarget=T,!Zt.__hasExternalTextures){const Ct=Math.max(1,T.width>>ut),Qt=Math.max(1,T.height>>ut);Mt===r.TEXTURE_3D||Mt===r.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ut,jt,Ct,Qt,T.depth,0,Kt,Rt,null):i.texImage2D(Mt,ut,jt,Ct,Qt,0,Kt,Rt,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),qt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,Mt,Tt.__webglTexture,0,we(T)):(Mt===r.TEXTURE_2D||Mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,Mt,Tt.__webglTexture,ut),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(U,T,tt){if(r.bindRenderbuffer(r.RENDERBUFFER,U),T.depthBuffer){const dt=T.depthTexture,Mt=dt&&dt.isDepthTexture?dt.type:null,ut=D(T.stencilBuffer,Mt),Kt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=we(T);qt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt,ut,T.width,T.height):tt?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,ut,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ut,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Kt,r.RENDERBUFFER,U)}else{const dt=T.textures;for(let Mt=0;Mt<dt.length;Mt++){const ut=dt[Mt],Kt=c.convert(ut.format,ut.colorSpace),Rt=c.convert(ut.type),jt=N(ut.internalFormat,Kt,Rt,ut.colorSpace),Zt=we(T);tt&&qt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,jt,T.width,T.height):qt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt,jt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,jt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Wt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(T.depthTexture);dt.__renderTarget=T,(!dt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),lt(T.depthTexture,0);const Mt=dt.__webglTexture,ut=we(T);if(T.depthTexture.format===il)qt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Mt,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===al)qt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Mt,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function he(U){const T=s.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",Mt)};dt.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=dt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const dt=U.texture.mipmaps;dt&&dt.length>0?Wt(T.__webglFramebuffer[0],U):Wt(T.__webglFramebuffer,U)}else if(tt){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=r.createRenderbuffer(),Bt(T.__webglDepthbuffer[dt],U,!1);else{const Mt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer[dt];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ut)}}else{const dt=U.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Bt(T.__webglDepthbuffer,U,!1);else{const Mt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ut)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function zt(U,T,tt){const dt=s.get(U);T!==void 0&&Dt(dt.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),tt!==void 0&&he(U)}function P(U){const T=U.texture,tt=s.get(U),dt=s.get(T);U.addEventListener("dispose",O);const Mt=U.textures,ut=U.isWebGLCubeRenderTarget===!0,Kt=Mt.length>1;if(Kt||(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=T.version,h.memory.textures++),ut){tt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Rt]=[];for(let jt=0;jt<T.mipmaps.length;jt++)tt.__webglFramebuffer[Rt][jt]=r.createFramebuffer()}else tt.__webglFramebuffer[Rt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)tt.__webglFramebuffer[Rt]=r.createFramebuffer()}else tt.__webglFramebuffer=r.createFramebuffer();if(Kt)for(let Rt=0,jt=Mt.length;Rt<jt;Rt++){const Zt=s.get(Mt[Rt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=r.createTexture(),h.memory.textures++)}if(U.samples>0&&qt(U)===!1){tt.__webglMultisampledFramebuffer=r.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<Mt.length;Rt++){const jt=Mt[Rt];tt.__webglColorRenderbuffer[Rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]);const Zt=c.convert(jt.format,jt.colorSpace),Tt=c.convert(jt.type),Ct=N(jt.internalFormat,Zt,Tt,jt.colorSpace,U.isXRRenderTarget===!0),Qt=we(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt,Ct,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=r.createRenderbuffer(),Bt(tt.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){i.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),nt(r.TEXTURE_CUBE_MAP,T);for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0)for(let jt=0;jt<T.mipmaps.length;jt++)Dt(tt.__webglFramebuffer[Rt][jt],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,jt);else Dt(tt.__webglFramebuffer[Rt],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(T)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Kt){for(let Rt=0,jt=Mt.length;Rt<jt;Rt++){const Zt=Mt[Rt],Tt=s.get(Zt);let Ct=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ct,Tt.__webglTexture),nt(Ct,Zt),Dt(tt.__webglFramebuffer,U,Zt,r.COLOR_ATTACHMENT0+Rt,Ct,0),M(Zt)&&_(Ct)}i.unbindTexture()}else{let Rt=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Rt,dt.__webglTexture),nt(Rt,T),T.mipmaps&&T.mipmaps.length>0)for(let jt=0;jt<T.mipmaps.length;jt++)Dt(tt.__webglFramebuffer[jt],U,T,r.COLOR_ATTACHMENT0,Rt,jt);else Dt(tt.__webglFramebuffer,U,T,r.COLOR_ATTACHMENT0,Rt,0);M(T)&&_(Rt),i.unbindTexture()}U.depthBuffer&&he(U)}function Jt(U){const T=U.textures;for(let tt=0,dt=T.length;tt<dt;tt++){const Mt=T[tt];if(M(Mt)){const ut=z(U),Kt=s.get(Mt).__webglTexture;i.bindTexture(ut,Kt),_(ut),i.unbindTexture()}}}const ie=[],ee=[];function Vt(U){if(U.samples>0){if(qt(U)===!1){const T=U.textures,tt=U.width,dt=U.height;let Mt=r.COLOR_BUFFER_BIT;const ut=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Kt=s.get(U),Rt=T.length>1;if(Rt)for(let Zt=0;Zt<T.length;Zt++)i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Zt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Zt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const jt=U.texture.mipmaps;jt&&jt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Zt=0;Zt<T.length;Zt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Mt|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Mt|=r.STENCIL_BUFFER_BIT)),Rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Kt.__webglColorRenderbuffer[Zt]);const Tt=s.get(T[Zt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Tt,0)}r.blitFramebuffer(0,0,tt,dt,0,0,tt,dt,Mt,r.NEAREST),m===!0&&(ie.length=0,ee.length=0,ie.push(r.COLOR_ATTACHMENT0+Zt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ie.push(ut),ee.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ee)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Rt)for(let Zt=0;Zt<T.length;Zt++){i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Zt,r.RENDERBUFFER,Kt.__webglColorRenderbuffer[Zt]);const Tt=s.get(T[Zt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Zt,r.TEXTURE_2D,Tt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function we(U){return Math.min(l.maxSamples,U.samples)}function qt(U){const T=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function le(U){const T=h.render.frame;v.get(U)!==T&&(v.set(U,T),U.update())}function en(U,T){const tt=U.colorSpace,dt=U.format,Mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==Yr&&tt!==Za&&(Le.getTransfer(tt)===Ve?(dt!==Ri||Mt!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function tn(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=Q,this.setTexture2D=lt,this.setTexture2DArray=I,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=zt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=qt}function DA(r,t){function i(s,l=Za){let c;const h=Le.getTransfer(l);if(s===ki)return r.UNSIGNED_BYTE;if(s===lp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===cp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Dv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Uv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Cv)return r.BYTE;if(s===wv)return r.SHORT;if(s===el)return r.UNSIGNED_SHORT;if(s===op)return r.INT;if(s===Ns)return r.UNSIGNED_INT;if(s===ga)return r.FLOAT;if(s===rl)return r.HALF_FLOAT;if(s===Lv)return r.ALPHA;if(s===Nv)return r.RGB;if(s===Ri)return r.RGBA;if(s===il)return r.DEPTH_COMPONENT;if(s===al)return r.DEPTH_STENCIL;if(s===Ov)return r.RED;if(s===up)return r.RED_INTEGER;if(s===Pv)return r.RG;if(s===fp)return r.RG_INTEGER;if(s===hp)return r.RGBA_INTEGER;if(s===Qc||s===Jc||s===$c||s===tu)if(h===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===bd||s===Ad||s===Rd||s===Cd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===bd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ad)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Cd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wd||s===Dd||s===Ud)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===wd||s===Dd)return h===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ud)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ld||s===Nd||s===Od||s===Pd||s===zd||s===Id||s===Bd||s===Fd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ld)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Od)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Id)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qd||s===Yd||s===jd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===qd)return h===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zd||s===Kd||s===Qd||s===Jd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Zd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===nl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const UA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LA=`
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

}`;class NA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Qv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ts({vertexShader:UA,fragmentShader:LA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new me(new ll(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OA extends zs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,g=null,x=null,S=null,E=null;const b=typeof XRWebGLBinding<"u",M=new NA,_={},z=i.getContextAttributes();let N=null,D=null;const H=[],B=[],O=new ae;let X=null;const C=new Si;C.viewport=new sn;const w=new Si;w.viewport=new sn;const G=[C,w],Q=new $M;let st=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ct=H[it];return ct===void 0&&(ct=new Qh,H[it]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(it){let ct=H[it];return ct===void 0&&(ct=new Qh,H[it]=ct),ct.getGripSpace()},this.getHand=function(it){let ct=H[it];return ct===void 0&&(ct=new Qh,H[it]=ct),ct.getHandSpace()};function lt(it){const ct=B.indexOf(it.inputSource);if(ct===-1)return;const Dt=H[ct];Dt!==void 0&&(Dt.update(it.inputSource,it.frame,p||h),Dt.dispatchEvent({type:it.type,data:it.inputSource}))}function I(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",W);for(let it=0;it<H.length;it++){const ct=B[it];ct!==null&&(B[it]=null,H[it].disconnect(ct))}st=null,ht=null,M.reset();for(const it in _)delete _[it];t.setRenderTarget(N),S=null,x=null,g=null,l=null,D=null,Ut.stop(),s.isPresenting=!1,t.setPixelRatio(X),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",I),l.addEventListener("inputsourceschange",W),z.xrCompatible!==!0&&await i.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Bt=null,Wt=null;z.depth&&(Wt=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=z.stencil?al:il,Bt=z.stencil?nl:Ns);const he={colorFormat:i.RGBA8,depthFormat:Wt,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(he),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new Ps(x.textureWidth,x.textureHeight,{format:Ri,type:ki,depthTexture:new Kv(x.textureWidth,x.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Dt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Ps(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:ki,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ut.setContext(l),Ut.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function W(it){for(let ct=0;ct<it.removed.length;ct++){const Dt=it.removed[ct],Bt=B.indexOf(Dt);Bt>=0&&(B[Bt]=null,H[Bt].disconnect(Dt))}for(let ct=0;ct<it.added.length;ct++){const Dt=it.added[ct];let Bt=B.indexOf(Dt);if(Bt===-1){for(let he=0;he<H.length;he++)if(he>=B.length){B.push(Dt),Bt=he;break}else if(B[he]===null){B[he]=Dt,Bt=he;break}if(Bt===-1)break}const Wt=H[Bt];Wt&&Wt.connect(Dt)}}const Z=new j,yt=new j;function xt(it,ct,Dt){Z.setFromMatrixPosition(ct.matrixWorld),yt.setFromMatrixPosition(Dt.matrixWorld);const Bt=Z.distanceTo(yt),Wt=ct.projectionMatrix.elements,he=Dt.projectionMatrix.elements,zt=Wt[14]/(Wt[10]-1),P=Wt[14]/(Wt[10]+1),Jt=(Wt[9]+1)/Wt[5],ie=(Wt[9]-1)/Wt[5],ee=(Wt[8]-1)/Wt[0],Vt=(he[8]+1)/he[0],we=zt*ee,qt=zt*Vt,le=Bt/(-ee+Vt),en=le*-ee;if(ct.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(en),it.translateZ(le),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Wt[10]===-1)it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const tn=zt+le,U=P+le,T=we-en,tt=qt+(Bt-en),dt=Jt*P/U*tn,Mt=ie*P/U*tn;it.projectionMatrix.makePerspective(T,tt,dt,Mt,tn,U),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function L(it,ct){ct===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ct.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ct=it.near,Dt=it.far;M.texture!==null&&(M.depthNear>0&&(ct=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),Q.near=w.near=C.near=ct,Q.far=w.far=C.far=Dt,(st!==Q.near||ht!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),st=Q.near,ht=Q.far),Q.layers.mask=it.layers.mask|6,C.layers.mask=Q.layers.mask&3,w.layers.mask=Q.layers.mask&5;const Bt=it.parent,Wt=Q.cameras;L(Q,Bt);for(let he=0;he<Wt.length;he++)L(Wt[he],Bt);Wt.length===2?xt(Q,C,w):Q.projectionMatrix.copy(C.projectionMatrix),nt(it,Q,Bt)};function nt(it,ct,Dt){Dt===null?it.matrix.copy(ct.matrixWorld):(it.matrix.copy(Dt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ct.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=tp*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(it){m=it,x!==null&&(x.fixedFoveation=it),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function(it){return _[it]};let St=null;function At(it,ct){if(v=ct.getViewerPose(p||h),E=ct,v!==null){const Dt=v.views;S!==null&&(t.setRenderTargetFramebuffer(D,S.framebuffer),t.setRenderTarget(D));let Bt=!1;Dt.length!==Q.cameras.length&&(Q.cameras.length=0,Bt=!0);for(let P=0;P<Dt.length;P++){const Jt=Dt[P];let ie=null;if(S!==null)ie=S.getViewport(Jt);else{const Vt=g.getViewSubImage(x,Jt);ie=Vt.viewport,P===0&&(t.setRenderTargetTextures(D,Vt.colorTexture,Vt.depthStencilTexture),t.setRenderTarget(D))}let ee=G[P];ee===void 0&&(ee=new Si,ee.layers.enable(P),ee.viewport=new sn,G[P]=ee),ee.matrix.fromArray(Jt.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Jt.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ie.x,ie.y,ie.width,ie.height),P===0&&(Q.matrix.copy(ee.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Bt===!0&&Q.cameras.push(ee)}const Wt=l.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){g=s.getBinding();const P=g.getDepthInformation(Dt[0]);P&&P.isValid&&P.texture&&M.init(P,l.renderState)}if(Wt&&Wt.includes("camera-access")&&b){t.state.unbindTexture(),g=s.getBinding();for(let P=0;P<Dt.length;P++){const Jt=Dt[P].camera;if(Jt){let ie=_[Jt];ie||(ie=new Qv,_[Jt]=ie);const ee=g.getCameraImage(Jt);ie.sourceTexture=ee}}}}for(let Dt=0;Dt<H.length;Dt++){const Bt=B[Dt],Wt=H[Dt];Bt!==null&&Wt!==void 0&&Wt.update(Bt,ct,p||h)}St&&St(it,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),E=null}const Ut=new $v;Ut.setAnimationLoop(At),this.setAnimationLoop=function(it){St=it},this.dispose=function(){}}}const bs=new Xi,PA=new Je;function zA(r,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,kv(r)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,z,N,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),g(M,_)):_.isMeshPhongMaterial?(c(M,_),v(M,_)):_.isMeshStandardMaterial?(c(M,_),x(M,_),_.isMeshPhysicalMaterial&&S(M,_,D)):_.isMeshMatcapMaterial?(c(M,_),E(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),b(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,z,N):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Kn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Kn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const z=t.get(_),N=z.envMap,D=z.envMapRotation;N&&(M.envMap.value=N,bs.copy(D),bs.x*=-1,bs.y*=-1,bs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),M.envMapRotation.value.setFromMatrix4(PA.makeRotationFromEuler(bs)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,z,N){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*z,M.scale.value=N*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,z){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Kn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function b(M,_){const z=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function IA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,N){const D=N.program;s.uniformBlockBinding(z,D)}function p(z,N){let D=l[z.id];D===void 0&&(E(z),D=v(z),l[z.id]=D,z.addEventListener("dispose",M));const H=N.program;s.updateUBOMapping(z,H);const B=t.render.frame;c[z.id]!==B&&(x(z),c[z.id]=B)}function v(z){const N=g();z.__bindingPointIndex=N;const D=r.createBuffer(),H=z.__size,B=z.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,H,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,D),D}function g(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(z){const N=l[z.id],D=z.uniforms,H=z.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let B=0,O=D.length;B<O;B++){const X=Array.isArray(D[B])?D[B]:[D[B]];for(let C=0,w=X.length;C<w;C++){const G=X[C];if(S(G,B,C,H)===!0){const Q=G.__offset,st=Array.isArray(G.value)?G.value:[G.value];let ht=0;for(let lt=0;lt<st.length;lt++){const I=st[lt],W=b(I);typeof I=="number"||typeof I=="boolean"?(G.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,Q+ht,G.__data)):I.isMatrix3?(G.__data[0]=I.elements[0],G.__data[1]=I.elements[1],G.__data[2]=I.elements[2],G.__data[3]=0,G.__data[4]=I.elements[3],G.__data[5]=I.elements[4],G.__data[6]=I.elements[5],G.__data[7]=0,G.__data[8]=I.elements[6],G.__data[9]=I.elements[7],G.__data[10]=I.elements[8],G.__data[11]=0):(I.toArray(G.__data,ht),ht+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(z,N,D,H){const B=z.value,O=N+"_"+D;if(H[O]===void 0)return typeof B=="number"||typeof B=="boolean"?H[O]=B:H[O]=B.clone(),!0;{const X=H[O];if(typeof B=="number"||typeof B=="boolean"){if(X!==B)return H[O]=B,!0}else if(X.equals(B)===!1)return X.copy(B),!0}return!1}function E(z){const N=z.uniforms;let D=0;const H=16;for(let O=0,X=N.length;O<X;O++){const C=Array.isArray(N[O])?N[O]:[N[O]];for(let w=0,G=C.length;w<G;w++){const Q=C[w],st=Array.isArray(Q.value)?Q.value:[Q.value];for(let ht=0,lt=st.length;ht<lt;ht++){const I=st[ht],W=b(I),Z=D%H,yt=Z%W.boundary,xt=Z+yt;D+=yt,xt!==0&&H-xt<W.storage&&(D+=H-xt),Q.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=D,D+=W.storage}}}const B=D%H;return B>0&&(D+=H-B),z.__size=D,z.__cache={},this}function b(z){const N={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(N.boundary=4,N.storage=4):z.isVector2?(N.boundary=8,N.storage=8):z.isVector3||z.isColor?(N.boundary=16,N.storage=12):z.isVector4?(N.boundary=16,N.storage=16):z.isMatrix3?(N.boundary=48,N.storage=48):z.isMatrix4?(N.boundary=64,N.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),N}function M(z){const N=z.target;N.removeEventListener("dispose",M);const D=h.indexOf(N.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const z in l)r.deleteBuffer(l[z]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class BA{constructor(t={}){const{canvas:i=fM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),b=new Int32Array(4);let M=null,_=null;const z=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let H=!1;this._outputColorSpace=Gn;let B=0,O=0,X=null,C=-1,w=null;const G=new sn,Q=new sn;let st=null;const ht=new _e(0);let lt=0,I=i.width,W=i.height,Z=1,yt=null,xt=null;const L=new sn(0,0,I,W),nt=new sn(0,0,I,W);let St=!1;const At=new _p;let Ut=!1,it=!1;const ct=new Je,Dt=new j,Bt=new sn,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function zt(){return X===null?Z:1}let P=s;function Jt(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${rp}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",Et,!1),P===null){const q="webgl2";if(P=Jt(q,R),P===null)throw Jt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ie,ee,Vt,we,qt,le,en,tn,U,T,tt,dt,Mt,ut,Kt,Rt,jt,Zt,Tt,Ct,Qt,It,Lt,ue;function k(){ie=new jb(P),ie.init(),It=new DA(P,ie),ee=new Gb(P,ie,t,It),Vt=new CA(P,ie),ee.reversedDepthBuffer&&x&&Vt.buffers.depth.setReversed(!0),we=new Qb(P),qt=new mA,le=new wA(P,ie,Vt,qt,ee,It,we),en=new kb(D),tn=new Yb(D),U=new iE(P),Lt=new Fb(P,U),T=new Zb(P,U,we,Lt),tt=new $b(P,T,U,we),Tt=new Jb(P,ee,le),Rt=new Vb(qt),dt=new pA(D,en,tn,ie,ee,Lt,Rt),Mt=new zA(D,qt),ut=new _A,Kt=new EA(ie),Zt=new Bb(D,en,tn,Vt,tt,S,m),jt=new AA(D,tt,ee),ue=new IA(P,we,ee,Vt),Ct=new Hb(P,ie,we),Qt=new Kb(P,ie,we),we.programs=dt.programs,D.capabilities=ee,D.extensions=ie,D.properties=qt,D.renderLists=ut,D.shadowMap=jt,D.state=Vt,D.info=we}k();const bt=new OA(D,P);this.xr=bt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=ie.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ie.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(I,W,!1))},this.getSize=function(R){return R.set(I,W)},this.setSize=function(R,q,at=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,W=q,i.width=Math.floor(R*Z),i.height=Math.floor(q*Z),at===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(I*Z,W*Z).floor()},this.setDrawingBufferSize=function(R,q,at){I=R,W=q,Z=at,i.width=Math.floor(R*at),i.height=Math.floor(q*at),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(L)},this.setViewport=function(R,q,at,rt){R.isVector4?L.set(R.x,R.y,R.z,R.w):L.set(R,q,at,rt),Vt.viewport(G.copy(L).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(nt)},this.setScissor=function(R,q,at,rt){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,q,at,rt),Vt.scissor(Q.copy(nt).multiplyScalar(Z).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(R){Vt.setScissorTest(St=R)},this.setOpaqueSort=function(R){yt=R},this.setTransparentSort=function(R){xt=R},this.getClearColor=function(R){return R.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,at=!0){let rt=0;if(R){let K=!1;if(X!==null){const vt=X.texture.format;K=vt===hp||vt===fp||vt===up}if(K){const vt=X.texture.type,Nt=vt===ki||vt===Ns||vt===el||vt===nl||vt===lp||vt===cp,kt=Zt.getClearColor(),Pt=Zt.getClearAlpha(),$t=kt.r,re=kt.g,te=kt.b;Nt?(E[0]=$t,E[1]=re,E[2]=te,E[3]=Pt,P.clearBufferuiv(P.COLOR,0,E)):(b[0]=$t,b[1]=re,b[2]=te,b[3]=Pt,P.clearBufferiv(P.COLOR,0,b))}else rt|=P.COLOR_BUFFER_BIT}q&&(rt|=P.DEPTH_BUFFER_BIT),at&&(rt|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),Zt.dispose(),ut.dispose(),Kt.dispose(),qt.dispose(),en.dispose(),tn.dispose(),tt.dispose(),Lt.dispose(),ue.dispose(),dt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",ui),bt.removeEventListener("sessionend",Jr),Li.stop()};function wt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=we.autoReset,q=jt.enabled,at=jt.autoUpdate,rt=jt.needsUpdate,K=jt.type;k(),we.autoReset=R,jt.enabled=q,jt.autoUpdate=at,jt.needsUpdate=rt,jt.type=K}function Et(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function gt(R){const q=R.target;q.removeEventListener("dispose",gt),Ht(q)}function Ht(R){oe(R),qt.remove(R)}function oe(R){const q=qt.get(R).programs;q!==void 0&&(q.forEach(function(at){dt.releaseProgram(at)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,at,rt,K,vt){q===null&&(q=Wt);const Nt=K.isMesh&&K.matrixWorld.determinant()<0,kt=va(R,q,at,rt,K);Vt.setMaterial(rt,Nt);let Pt=at.index,$t=1;if(rt.wireframe===!0){if(Pt=T.getWireframeAttribute(at),Pt===void 0)return;$t=2}const re=at.drawRange,te=at.attributes.position;let ve=re.start*$t,Oe=(re.start+re.count)*$t;vt!==null&&(ve=Math.max(ve,vt.start*$t),Oe=Math.min(Oe,(vt.start+vt.count)*$t)),Pt!==null?(ve=Math.max(ve,0),Oe=Math.min(Oe,Pt.count)):te!=null&&(ve=Math.max(ve,0),Oe=Math.min(Oe,te.count));const qe=Oe-ve;if(qe<0||qe===1/0)return;Lt.setup(K,rt,kt,at,Pt);let Pe,ye=Ct;if(Pt!==null&&(Pe=U.get(Pt),ye=Qt,ye.setIndex(Pe)),K.isMesh)rt.wireframe===!0?(Vt.setLineWidth(rt.wireframeLinewidth*zt()),ye.setMode(P.LINES)):ye.setMode(P.TRIANGLES);else if(K.isLine){let Xt=rt.linewidth;Xt===void 0&&(Xt=1),Vt.setLineWidth(Xt*zt()),K.isLineSegments?ye.setMode(P.LINES):K.isLineLoop?ye.setMode(P.LINE_LOOP):ye.setMode(P.LINE_STRIP)}else K.isPoints?ye.setMode(P.POINTS):K.isSprite&&ye.setMode(P.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)sl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))ye.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Xt=K._multiDrawStarts,je=K._multiDrawCounts,Ce=K._multiDrawCount,Rn=Pt?U.get(Pt).bytesPerElement:1,Wi=qt.get(rt).currentProgram.getUniforms();for(let En=0;En<Ce;En++)Wi.setValue(P,"_gl_DrawID",En),ye.render(Xt[En]/Rn,je[En])}else if(K.isInstancedMesh)ye.renderInstances(ve,qe,K.count);else if(at.isInstancedBufferGeometry){const Xt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,je=Math.min(at.instanceCount,Xt);ye.renderInstances(ve,qe,je)}else ye.render(ve,qe)};function ze(R,q,at){R.transparent===!0&&R.side===ma&&R.forceSinglePass===!1?(R.side=Kn,R.needsUpdate=!0,Jn(R,q,at),R.side=$a,R.needsUpdate=!0,Jn(R,q,at),R.side=ma):Jn(R,q,at)}this.compile=function(R,q,at=null){at===null&&(at=R),_=Kt.get(at),_.init(q),N.push(_),at.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),R!==at&&R.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights();const rt=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const vt=K.material;if(vt)if(Array.isArray(vt))for(let Nt=0;Nt<vt.length;Nt++){const kt=vt[Nt];ze(kt,at,K),rt.add(kt)}else ze(vt,at,K),rt.add(vt)}),_=N.pop(),rt},this.compileAsync=function(R,q,at=null){const rt=this.compile(R,q,at);return new Promise(K=>{function vt(){if(rt.forEach(function(Nt){qt.get(Nt).currentProgram.isReady()&&rt.delete(Nt)}),rt.size===0){K(R);return}setTimeout(vt,10)}ie.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Re=null;function zn(R){Re&&Re(R)}function ui(){Li.stop()}function Jr(){Li.start()}const Li=new $v;Li.setAnimationLoop(zn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(R){Re=R,bt.setAnimationLoop(R),R===null?Li.stop():Li.start()},bt.addEventListener("sessionstart",ui),bt.addEventListener("sessionend",Jr),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(q),q=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,q,X),_=Kt.get(R,N.length),_.init(q),N.push(_),ct.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),At.setFromProjectionMatrix(ct,Gi,q.reversedDepth),it=this.localClippingEnabled,Ut=Rt.init(this.clippingPlanes,it),M=ut.get(R,z.length),M.init(),z.push(M),bt.enabled===!0&&bt.isPresenting===!0){const vt=D.xr.getDepthSensingMesh();vt!==null&&Bs(vt,q,-1/0,D.sortObjects)}Bs(R,q,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(yt,xt),he=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,he&&Zt.addToRenderList(M,R),this.info.render.frame++,Ut===!0&&Rt.beginShadows();const at=_.state.shadowsArray;jt.render(at,R,q),Ut===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,K=M.transmissive;if(_.setupLights(),q.isArrayCamera){const vt=q.cameras;if(K.length>0)for(let Nt=0,kt=vt.length;Nt<kt;Nt++){const Pt=vt[Nt];Hs(rt,K,R,Pt)}he&&Zt.render(R);for(let Nt=0,kt=vt.length;Nt<kt;Nt++){const Pt=vt[Nt];Fs(M,R,Pt,Pt.viewport)}}else K.length>0&&Hs(rt,K,R,q),he&&Zt.render(R),Fs(M,R,q);X!==null&&O===0&&(le.updateMultisampleRenderTarget(X),le.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(D,R,q),Lt.resetDefaultState(),C=-1,w=null,N.pop(),N.length>0?(_=N[N.length-1],Ut===!0&&Rt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,z.pop(),z.length>0?M=z[z.length-1]:M=null};function Bs(R,q,at,rt){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||At.intersectsSprite(R)){rt&&Bt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ct);const Nt=tt.update(R),kt=R.material;kt.visible&&M.push(R,Nt,kt,at,Bt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||At.intersectsObject(R))){const Nt=tt.update(R),kt=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Bt.copy(R.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Bt.copy(Nt.boundingSphere.center)),Bt.applyMatrix4(R.matrixWorld).applyMatrix4(ct)),Array.isArray(kt)){const Pt=Nt.groups;for(let $t=0,re=Pt.length;$t<re;$t++){const te=Pt[$t],ve=kt[te.materialIndex];ve&&ve.visible&&M.push(R,Nt,ve,at,Bt.z,te)}}else kt.visible&&M.push(R,Nt,kt,at,Bt.z,null)}}const vt=R.children;for(let Nt=0,kt=vt.length;Nt<kt;Nt++)Bs(vt[Nt],q,at,rt)}function Fs(R,q,at,rt){const K=R.opaque,vt=R.transmissive,Nt=R.transparent;_.setupLightsView(at),Ut===!0&&Rt.setGlobalState(D.clippingPlanes,at),rt&&Vt.viewport(G.copy(rt)),K.length>0&&es(K,q,at),vt.length>0&&es(vt,q,at),Nt.length>0&&es(Nt,q,at),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Hs(R,q,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new Ps(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?rl:ki,minFilter:Ds,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const vt=_.state.transmissionRenderTarget[rt.id],Nt=rt.viewport||G;vt.setSize(Nt.z*D.transmissionResolutionScale,Nt.w*D.transmissionResolutionScale);const kt=D.getRenderTarget(),Pt=D.getActiveCubeFace(),$t=D.getActiveMipmapLevel();D.setRenderTarget(vt),D.getClearColor(ht),lt=D.getClearAlpha(),lt<1&&D.setClearColor(16777215,.5),D.clear(),he&&Zt.render(at);const re=D.toneMapping;D.toneMapping=Qa;const te=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),Ut===!0&&Rt.setGlobalState(D.clippingPlanes,rt),es(R,at,rt),le.updateMultisampleRenderTarget(vt),le.updateRenderTargetMipmap(vt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Oe=0,qe=q.length;Oe<qe;Oe++){const Pe=q[Oe],ye=Pe.object,Xt=Pe.geometry,je=Pe.material,Ce=Pe.group;if(je.side===ma&&ye.layers.test(rt.layers)){const Rn=je.side;je.side=Kn,je.needsUpdate=!0,$r(ye,at,rt,Xt,je,Ce),je.side=Rn,je.needsUpdate=!0,ve=!0}}ve===!0&&(le.updateMultisampleRenderTarget(vt),le.updateRenderTargetMipmap(vt))}D.setRenderTarget(kt,Pt,$t),D.setClearColor(ht,lt),te!==void 0&&(rt.viewport=te),D.toneMapping=re}function es(R,q,at){const rt=q.isScene===!0?q.overrideMaterial:null;for(let K=0,vt=R.length;K<vt;K++){const Nt=R[K],kt=Nt.object,Pt=Nt.geometry,$t=Nt.group;let re=Nt.material;re.allowOverride===!0&&rt!==null&&(re=rt),kt.layers.test(at.layers)&&$r(kt,q,at,Pt,re,$t)}}function $r(R,q,at,rt,K,vt){R.onBeforeRender(D,q,at,rt,K,vt),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(D,q,at,rt,R,vt),K.transparent===!0&&K.side===ma&&K.forceSinglePass===!1?(K.side=Kn,K.needsUpdate=!0,D.renderBufferDirect(at,q,rt,K,R,vt),K.side=$a,K.needsUpdate=!0,D.renderBufferDirect(at,q,rt,K,R,vt),K.side=ma):D.renderBufferDirect(at,q,rt,K,R,vt),R.onAfterRender(D,q,at,rt,K,vt)}function Jn(R,q,at){q.isScene!==!0&&(q=Wt);const rt=qt.get(R),K=_.state.lights,vt=_.state.shadowsArray,Nt=K.state.version,kt=dt.getParameters(R,K.state,vt,q,at),Pt=dt.getProgramCacheKey(kt);let $t=rt.programs;rt.environment=R.isMeshStandardMaterial?q.environment:null,rt.fog=q.fog,rt.envMap=(R.isMeshStandardMaterial?tn:en).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",gt),$t=new Map,rt.programs=$t);let re=$t.get(Pt);if(re!==void 0){if(rt.currentProgram===re&&rt.lightsStateVersion===Nt)return An(R,kt),re}else kt.uniforms=dt.getUniforms(R),R.onBeforeCompile(kt,D),re=dt.acquireProgram(kt,Pt),$t.set(Pt,re),rt.uniforms=kt.uniforms;const te=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(te.clippingPlanes=Rt.uniform),An(R,kt),rt.needsLights=gu(R),rt.lightsStateVersion=Nt,rt.needsLights&&(te.ambientLightColor.value=K.state.ambient,te.lightProbe.value=K.state.probe,te.directionalLights.value=K.state.directional,te.directionalLightShadows.value=K.state.directionalShadow,te.spotLights.value=K.state.spot,te.spotLightShadows.value=K.state.spotShadow,te.rectAreaLights.value=K.state.rectArea,te.ltc_1.value=K.state.rectAreaLTC1,te.ltc_2.value=K.state.rectAreaLTC2,te.pointLights.value=K.state.point,te.pointLightShadows.value=K.state.pointShadow,te.hemisphereLights.value=K.state.hemi,te.directionalShadowMap.value=K.state.directionalShadowMap,te.directionalShadowMatrix.value=K.state.directionalShadowMatrix,te.spotShadowMap.value=K.state.spotShadowMap,te.spotLightMatrix.value=K.state.spotLightMatrix,te.spotLightMap.value=K.state.spotLightMap,te.pointShadowMap.value=K.state.pointShadowMap,te.pointShadowMatrix.value=K.state.pointShadowMatrix),rt.currentProgram=re,rt.uniformsList=null,re}function un(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=eu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function An(R,q){const at=qt.get(R);at.outputColorSpace=q.outputColorSpace,at.batching=q.batching,at.batchingColor=q.batchingColor,at.instancing=q.instancing,at.instancingColor=q.instancingColor,at.instancingMorph=q.instancingMorph,at.skinning=q.skinning,at.morphTargets=q.morphTargets,at.morphNormals=q.morphNormals,at.morphColors=q.morphColors,at.morphTargetsCount=q.morphTargetsCount,at.numClippingPlanes=q.numClippingPlanes,at.numIntersection=q.numClipIntersection,at.vertexAlphas=q.vertexAlphas,at.vertexTangents=q.vertexTangents,at.toneMapping=q.toneMapping}function va(R,q,at,rt,K){q.isScene!==!0&&(q=Wt),le.resetTextureUnits();const vt=q.fog,Nt=rt.isMeshStandardMaterial?q.environment:null,kt=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Yr,Pt=(rt.isMeshStandardMaterial?tn:en).get(rt.envMap||Nt),$t=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,re=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),te=!!at.morphAttributes.position,ve=!!at.morphAttributes.normal,Oe=!!at.morphAttributes.color;let qe=Qa;rt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(qe=D.toneMapping);const Pe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ye=Pe!==void 0?Pe.length:0,Xt=qt.get(rt),je=_.state.lights;if(Ut===!0&&(it===!0||R!==w)){const _n=R===w&&rt.id===C;Rt.setState(rt,R,_n)}let Ce=!1;rt.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==je.state.version||Xt.outputColorSpace!==kt||K.isBatchedMesh&&Xt.batching===!1||!K.isBatchedMesh&&Xt.batching===!0||K.isBatchedMesh&&Xt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Xt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Xt.instancing===!1||!K.isInstancedMesh&&Xt.instancing===!0||K.isSkinnedMesh&&Xt.skinning===!1||!K.isSkinnedMesh&&Xt.skinning===!0||K.isInstancedMesh&&Xt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Xt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Xt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Xt.instancingMorph===!1&&K.morphTexture!==null||Xt.envMap!==Pt||rt.fog===!0&&Xt.fog!==vt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Rt.numPlanes||Xt.numIntersection!==Rt.numIntersection)||Xt.vertexAlphas!==$t||Xt.vertexTangents!==re||Xt.morphTargets!==te||Xt.morphNormals!==ve||Xt.morphColors!==Oe||Xt.toneMapping!==qe||Xt.morphTargetsCount!==ye)&&(Ce=!0):(Ce=!0,Xt.__version=rt.version);let Rn=Xt.currentProgram;Ce===!0&&(Rn=Jn(rt,q,K));let Wi=!1,En=!1,is=!1;const Ee=Rn.getUniforms(),Ln=Xt.uniforms;if(Vt.useProgram(Rn.program)&&(Wi=!0,En=!0,is=!0),rt.id!==C&&(C=rt.id,En=!0),Wi||w!==R){Vt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ee.setValue(P,"projectionMatrix",R.projectionMatrix),Ee.setValue(P,"viewMatrix",R.matrixWorldInverse);const on=Ee.map.cameraPosition;on!==void 0&&on.setValue(P,Dt.setFromMatrixPosition(R.matrixWorld)),ee.logarithmicDepthBuffer&&Ee.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ee.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,En=!0,is=!0)}if(K.isSkinnedMesh){Ee.setOptional(P,K,"bindMatrix"),Ee.setOptional(P,K,"bindMatrixInverse");const _n=K.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Ee.setValue(P,"boneTexture",_n.boneTexture,le))}K.isBatchedMesh&&(Ee.setOptional(P,K,"batchingTexture"),Ee.setValue(P,"batchingTexture",K._matricesTexture,le),Ee.setOptional(P,K,"batchingIdTexture"),Ee.setValue(P,"batchingIdTexture",K._indirectTexture,le),Ee.setOptional(P,K,"batchingColorTexture"),K._colorsTexture!==null&&Ee.setValue(P,"batchingColorTexture",K._colorsTexture,le));const In=at.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Tt.update(K,at,Rn),(En||Xt.receiveShadow!==K.receiveShadow)&&(Xt.receiveShadow=K.receiveShadow,Ee.setValue(P,"receiveShadow",K.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Ln.envMap.value=Pt,Ln.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&q.environment!==null&&(Ln.envMapIntensity.value=q.environmentIntensity),En&&(Ee.setValue(P,"toneMappingExposure",D.toneMappingExposure),Xt.needsLights&&to(Ln,is),vt&&rt.fog===!0&&Mt.refreshFogUniforms(Ln,vt),Mt.refreshMaterialUniforms(Ln,rt,Z,W,_.state.transmissionRenderTarget[R.id]),eu.upload(P,un(Xt),Ln,le)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(eu.upload(P,un(Xt),Ln,le),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ee.setValue(P,"center",K.center),Ee.setValue(P,"modelViewMatrix",K.modelViewMatrix),Ee.setValue(P,"normalMatrix",K.normalMatrix),Ee.setValue(P,"modelMatrix",K.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const _n=rt.uniformsGroups;for(let on=0,Gs=_n.length;on<Gs;on++){const Ni=_n[on];ue.update(Ni,Rn),ue.bind(Ni,Rn)}}return Rn}function to(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function gu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,q,at){const rt=qt.get(R);rt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),qt.get(R.texture).__webglTexture=q,qt.get(R.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const at=qt.get(R);at.__webglFramebuffer=q,at.__useDefaultFramebuffer=q===void 0};const _u=P.createFramebuffer();this.setRenderTarget=function(R,q=0,at=0){X=R,B=q,O=at;let rt=!0,K=null,vt=!1,Nt=!1;if(R){const Pt=qt.get(R);if(Pt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(P.FRAMEBUFFER,null),rt=!1;else if(Pt.__webglFramebuffer===void 0)le.setupRenderTarget(R);else if(Pt.__hasExternalTextures)le.rebindTextures(R,qt.get(R.texture).__webglTexture,qt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const te=R.depthTexture;if(Pt.__boundDepthTexture!==te){if(te!==null&&qt.has(te)&&(R.width!==te.image.width||R.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Nt=!0);const re=qt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(re[q])?K=re[q][at]:K=re[q],vt=!0):R.samples>0&&le.useMultisampledRTT(R)===!1?K=qt.get(R).__webglMultisampledFramebuffer:Array.isArray(re)?K=re[at]:K=re,G.copy(R.viewport),Q.copy(R.scissor),st=R.scissorTest}else G.copy(L).multiplyScalar(Z).floor(),Q.copy(nt).multiplyScalar(Z).floor(),st=St;if(at!==0&&(K=_u),Vt.bindFramebuffer(P.FRAMEBUFFER,K)&&rt&&Vt.drawBuffers(R,K),Vt.viewport(G),Vt.scissor(Q),Vt.setScissorTest(st),vt){const Pt=qt.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pt.__webglTexture,at)}else if(Nt){const Pt=q;for(let $t=0;$t<R.textures.length;$t++){const re=qt.get(R.textures[$t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+$t,re.__webglTexture,at,Pt)}}else if(R!==null&&at!==0){const Pt=qt.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Pt.__webglTexture,at)}C=-1},this.readRenderTargetPixels=function(R,q,at,rt,K,vt,Nt,kt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=qt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt]),Pt){Vt.bindFramebuffer(P.FRAMEBUFFER,Pt);try{const $t=R.textures[kt],re=$t.format,te=$t.type;if(!ee.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-rt&&at>=0&&at<=R.height-K&&(R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+kt),P.readPixels(q,at,rt,K,It.convert(re),It.convert(te),vt))}finally{const $t=X!==null?qt.get(X).__webglFramebuffer:null;Vt.bindFramebuffer(P.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,q,at,rt,K,vt,Nt,kt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=qt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt]),Pt)if(q>=0&&q<=R.width-rt&&at>=0&&at<=R.height-K){Vt.bindFramebuffer(P.FRAMEBUFFER,Pt);const $t=R.textures[kt],re=$t.format,te=$t.type;if(!ee.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ve),P.bufferData(P.PIXEL_PACK_BUFFER,vt.byteLength,P.STREAM_READ),R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+kt),P.readPixels(q,at,rt,K,It.convert(re),It.convert(te),0);const Oe=X!==null?qt.get(X).__webglFramebuffer:null;Vt.bindFramebuffer(P.FRAMEBUFFER,Oe);const qe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await hM(P,qe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ve),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,vt),P.deleteBuffer(ve),P.deleteSync(qe),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,at=0){const rt=Math.pow(2,-at),K=Math.floor(R.image.width*rt),vt=Math.floor(R.image.height*rt),Nt=q!==null?q.x:0,kt=q!==null?q.y:0;le.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,at,0,0,Nt,kt,K,vt),Vt.unbindTexture()};const cl=P.createFramebuffer(),ns=P.createFramebuffer();this.copyTextureToTexture=function(R,q,at=null,rt=null,K=0,vt=null){vt===null&&(K!==0?(sl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=K,K=0):vt=0);let Nt,kt,Pt,$t,re,te,ve,Oe,qe;const Pe=R.isCompressedTexture?R.mipmaps[vt]:R.image;if(at!==null)Nt=at.max.x-at.min.x,kt=at.max.y-at.min.y,Pt=at.isBox3?at.max.z-at.min.z:1,$t=at.min.x,re=at.min.y,te=at.isBox3?at.min.z:0;else{const In=Math.pow(2,-K);Nt=Math.floor(Pe.width*In),kt=Math.floor(Pe.height*In),R.isDataArrayTexture?Pt=Pe.depth:R.isData3DTexture?Pt=Math.floor(Pe.depth*In):Pt=1,$t=0,re=0,te=0}rt!==null?(ve=rt.x,Oe=rt.y,qe=rt.z):(ve=0,Oe=0,qe=0);const ye=It.convert(q.format),Xt=It.convert(q.type);let je;q.isData3DTexture?(le.setTexture3D(q,0),je=P.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(le.setTexture2DArray(q,0),je=P.TEXTURE_2D_ARRAY):(le.setTexture2D(q,0),je=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,q.unpackAlignment);const Ce=P.getParameter(P.UNPACK_ROW_LENGTH),Rn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Wi=P.getParameter(P.UNPACK_SKIP_PIXELS),En=P.getParameter(P.UNPACK_SKIP_ROWS),is=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Pe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Pe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,$t),P.pixelStorei(P.UNPACK_SKIP_ROWS,re),P.pixelStorei(P.UNPACK_SKIP_IMAGES,te);const Ee=R.isDataArrayTexture||R.isData3DTexture,Ln=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const In=qt.get(R),_n=qt.get(q),on=qt.get(In.__renderTarget),Gs=qt.get(_n.__renderTarget);Vt.bindFramebuffer(P.READ_FRAMEBUFFER,on.__webglFramebuffer),Vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Gs.__webglFramebuffer);for(let Ni=0;Ni<Pt;Ni++)Ee&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,qt.get(R).__webglTexture,K,te+Ni),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,qt.get(q).__webglTexture,vt,qe+Ni)),P.blitFramebuffer($t,re,Nt,kt,ve,Oe,Nt,kt,P.DEPTH_BUFFER_BIT,P.NEAREST);Vt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||qt.has(R)){const In=qt.get(R),_n=qt.get(q);Vt.bindFramebuffer(P.READ_FRAMEBUFFER,cl),Vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,ns);for(let on=0;on<Pt;on++)Ee?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,In.__webglTexture,K,te+on):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,In.__webglTexture,K),Ln?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_n.__webglTexture,vt,qe+on):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,_n.__webglTexture,vt),K!==0?P.blitFramebuffer($t,re,Nt,kt,ve,Oe,Nt,kt,P.COLOR_BUFFER_BIT,P.NEAREST):Ln?P.copyTexSubImage3D(je,vt,ve,Oe,qe+on,$t,re,Nt,kt):P.copyTexSubImage2D(je,vt,ve,Oe,$t,re,Nt,kt);Vt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ln?R.isDataTexture||R.isData3DTexture?P.texSubImage3D(je,vt,ve,Oe,qe,Nt,kt,Pt,ye,Xt,Pe.data):q.isCompressedArrayTexture?P.compressedTexSubImage3D(je,vt,ve,Oe,qe,Nt,kt,Pt,ye,Pe.data):P.texSubImage3D(je,vt,ve,Oe,qe,Nt,kt,Pt,ye,Xt,Pe):R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,vt,ve,Oe,Nt,kt,ye,Xt,Pe.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,vt,ve,Oe,Pe.width,Pe.height,ye,Pe.data):P.texSubImage2D(P.TEXTURE_2D,vt,ve,Oe,Nt,kt,ye,Xt,Pe);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ce),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Rn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Wi),P.pixelStorei(P.UNPACK_SKIP_ROWS,En),P.pixelStorei(P.UNPACK_SKIP_IMAGES,is),vt===0&&q.generateMipmaps&&P.generateMipmap(je),Vt.unbindTexture()},this.initRenderTarget=function(R){qt.get(R).__webglFramebuffer===void 0&&le.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?le.setTextureCube(R,0):R.isData3DTexture?le.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?le.setTexture2DArray(R,0):le.setTexture2D(R,0),Vt.unbindTexture()},this.resetState=function(){B=0,O=0,X=null,Vt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const vv={type:"change"},xp={type:"start"},ay={type:"end"},jc=new fu,yv=new ja,FA=Math.cos(70*uM.DEG2RAD),yn=new j,Zn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cd=1e-6;class HA extends eE{constructor(t,i=null){super(t,i),this.state=Xe.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gr.ROTATE,MIDDLE:Gr.DOLLY,RIGHT:Gr.PAN},this.touches={ONE:Fr.ROTATE,TWO:Fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Os,this._lastTargetPosition=new j,this._quat=new Os().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new q0,this._sphericalDelta=new q0,this._scale=1,this._panOffset=new j,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new j,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=VA.bind(this),this._onPointerDown=GA.bind(this),this._onPointerUp=kA.bind(this),this._onContextMenu=KA.bind(this),this._onMouseWheel=qA.bind(this),this._onKeyDown=YA.bind(this),this._onTouchStart=jA.bind(this),this._onTouchMove=ZA.bind(this),this._onMouseDown=XA.bind(this),this._onMouseMove=WA.bind(this),this._interceptControlDown=QA.bind(this),this._interceptControlUp=JA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vv),this.update(),this.state=Xe.NONE}update(t=null){const i=this.object.position;yn.copy(i).sub(this.target),yn.applyQuaternion(this._quat),this._spherical.setFromVector3(yn),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Zn:s>Math.PI&&(s-=Zn),l<-Math.PI?l+=Zn:l>Math.PI&&(l-=Zn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(yn.setFromSpherical(this._spherical),yn.applyQuaternion(this._quatInverse),i.copy(this.target).add(yn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=yn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new j(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=yn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(jc.origin.copy(this.object.position),jc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jc.direction))<FA?this.object.lookAt(this.target):(yv.setFromNormalAndCoplanarPoint(this.object.up,this.target),jc.intersectPlane(yv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>cd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cd||this._lastTargetPosition.distanceToSquared(this.target)>cd?(this.dispatchEvent(vv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Zn/60*this.autoRotateSpeed*t:Zn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){yn.setFromMatrixColumn(i,0),yn.multiplyScalar(-t),this._panOffset.add(yn)}_panUp(t,i){this.screenSpacePanning===!0?yn.setFromMatrixColumn(i,1):(yn.setFromMatrixColumn(i,0),yn.crossVectors(this.object.up,yn)),yn.multiplyScalar(t),this._panOffset.add(yn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;yn.copy(l).sub(this.target);let c=yn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ae,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function GA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function VA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function kA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ay),this.state=Xe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function XA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Gr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Xe.DOLLY;break;case Gr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}break;case Gr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(xp)}function WA(r){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function qA(r){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(r.preventDefault(),this.dispatchEvent(xp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(ay))}function YA(r){this.enabled!==!1&&this._handleKeyDown(r)}function jA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Fr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Xe.TOUCH_ROTATE;break;case Fr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case Fr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Xe.TOUCH_DOLLY_PAN;break;case Fr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(xp)}function ZA(r){switch(this._trackPointer(r),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Xe.NONE}}function KA(r){this.enabled!==!1&&r.preventDefault()}function QA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function JA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Zr{static createButton(t,i={}){const s=document.createElement("button");function l(){let p=null;async function v(S){S.addEventListener("end",g),await t.xr.setSession(S),s.textContent="EXIT VR",p=S}function g(){p.removeEventListener("end",g),s.textContent="ENTER VR",p=null}s.style.display="",s.style.cursor="pointer",s.style.left="calc(50% - 50px)",s.style.width="100px",s.textContent="ENTER VR";const x={...i,optionalFeatures:["local-floor","bounded-floor","layers",...i.optionalFeatures||[]]};s.onmouseenter=function(){s.style.opacity="1.0"},s.onmouseleave=function(){s.style.opacity="0.5"},s.onclick=function(){p===null?navigator.xr.requestSession("immersive-vr",x).then(v):(p.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",x).then(v).catch(S=>{console.warn(S)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",x).then(v).catch(S=>{console.warn(S)})}function c(){s.style.display="",s.style.cursor="auto",s.style.left="calc(50% - 75px)",s.style.width="150px",s.onmouseenter=null,s.onmouseleave=null,s.onclick=null}function h(){c(),s.textContent="VR NOT SUPPORTED"}function d(p){c(),console.warn("Exception when trying to call xr.isSessionSupported",p),s.textContent="VR NOT ALLOWED"}function m(p){p.style.position="absolute",p.style.bottom="20px",p.style.padding="12px 6px",p.style.border="1px solid #fff",p.style.borderRadius="4px",p.style.background="rgba(0,0,0,0.1)",p.style.color="#fff",p.style.font="normal 13px sans-serif",p.style.textAlign="center",p.style.opacity="0.5",p.style.outline="none",p.style.zIndex="999"}if("xr"in navigator)return s.id="VRButton",s.style.display="none",m(s),navigator.xr.isSessionSupported("immersive-vr").then(function(p){p?l():h(),p&&Zr.xrSessionIsGranted&&s.click()}).catch(d),s;{const p=document.createElement("a");return window.isSecureContext===!1?(p.href=document.location.href.replace(/^http:/,"https:"),p.innerHTML="WEBXR NEEDS HTTPS"):(p.href="https://immersiveweb.dev/",p.innerHTML="WEBXR NOT AVAILABLE"),p.style.left="calc(50% - 90px)",p.style.width="180px",p.style.textDecoration="none",m(p),p}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Zr.xrSessionIsGranted=!0})}}}Zr.xrSessionIsGranted=!1;Zr.registerSessionGrantedListener();const sy={risk:20,brush:20,flow:25,dry:15,quality:20},$A={1:{id:1,title:"识别管腔污染风险",score:20,task:"点击或凝视管腔器械上的风险热点，识别隐藏污染、连接部残留和气溶胶暴露风险。"},2:{id:2,title:"选择合适管腔刷",score:20,task:"从三种刷子中选择与管腔直径匹配的一种。"},3:{id:3,title:"规范刷洗与冲洗",score:25,task:"按规范顺序完成预冲洗、清洗液、刷洗、充分冲洗、低位或液面下冲洗、终末冲洗。"},4:{id:4,title:"干燥处理",score:15,task:"选择能保证管腔内外充分干燥的处理方式。"},5:{id:5,title:"清洗质量判定",score:20,task:"观察放大屏内管腔状态，判断是否可以进入检查包装。"}},ip=[{id:"risk-lumen",label:"管腔内部不可见污染",tip:"管腔内部污染常被表面清洁掩盖，需要专门刷洗和冲洗。"},{id:"risk-joint",label:"关节或接口处残留",tip:"连接部位容易滞留污染物，应打开、拆分或重点刷洗。"},{id:"risk-protein",label:"管腔内壁蛋白残留",tip:"蛋白残留会影响后续灭菌效果，不能仅凭外观判断。"},{id:"risk-aerosol",label:"高压冲洗气溶胶风险",tip:"直冲开口可能造成飞溅和气溶胶扩散，需要控制压力和方向。"}],Us=[{id:"step-pre-rinse",label:"预冲洗"},{id:"step-enzyme",label:"置入清洗液"},{id:"step-brush",label:"刷洗管腔"},{id:"step-rinse",label:"管腔充分冲洗"},{id:"step-low-rinse",label:"低位/液面下冲洗"},{id:"step-final-rinse",label:"终末冲洗"}],lu=[{id:"obvious",title:"明显残留",detail:"放大观察可见红棕色团块和附着颗粒。",hasResidue:!0,correctAction:"quality-reclean"},{id:"hidden",title:"少量隐匿残留",detail:"管腔内壁仍有少量半透明颗粒，外表看似干净。",hasResidue:!0,correctAction:"quality-reclean"},{id:"clean",title:"清洗合格",detail:"管腔内壁清洁、无可见残留，可进入下一流程。",hasResidue:!1,correctAction:"quality-package"}],tR=["管腔器械清洗的难点在于污染残留隐蔽，不能只看表面是否干净。","刷子规格应与管腔直径匹配，过细无效，过粗可能损伤器械。","冲洗时应控制压力和方向，避免飞溅和气溶胶扩散。","管腔器械清洗后应关注内外充分干燥。","清洗质量不合格的器械不能进入包装灭菌环节。","规范清洗是灭菌成功的前提，也是患者安全的前置防线。"],ud={"quality-reclean":"重新清洗","quality-package":"进入检查包装","quality-report":"暂停并报告老师"},eR=Us.map(r=>r.id);function Di(r,t={}){const i=t.width??512,s=t.height??128,l=document.createElement("canvas");l.width=i,l.height=s;const c=l.getContext("2d");c.clearRect(0,0,i,s),t.background&&(c.fillStyle=t.background,nR(c,8,8,i-16,s-16,24),c.fill()),c.font=`700 ${t.fontSize??34}px system-ui, -apple-system, "Microsoft YaHei", sans-serif`,c.textAlign="center",c.textBaseline="middle",c.fillStyle=t.color??"#16334f",iR(c,r,i/2,s/2,i-44,t.fontSize??34,s);const h=new Zv(l);h.colorSpace=Gn;const d=new qv({map:h,transparent:!0}),m=new gp(d);return m.scale.set(i/360,s/360,1),m}function nR(r,t,i,s,l,c){r.beginPath(),r.moveTo(t+c,i),r.arcTo(t+s,i,t+s,i+l,c),r.arcTo(t+s,i+l,t,i+l,c),r.arcTo(t,i+l,t,i,c),r.arcTo(t,i,t+s,i,c),r.closePath()}function iR(r,t,i,s,l,c,h){const d=Array.from(t),m=[];let p="";d.forEach(x=>{const S=p+x;r.measureText(S).width>l&&p?(m.push(p),p=x):p=S}),p&&m.push(p);const v=c*1.2,g=Math.max(c,s-(m.length-1)*v/2);m.slice(0,Math.floor(h/v)).forEach((x,S)=>{r.fillText(x,i,g+S*v)})}function aR(r){const t=document.createElement("canvas");t.width=1024,t.height=512;const i=t.getContext("2d"),s=i.createLinearGradient(0,0,1024,512);if(s.addColorStop(0,"#d9edf6"),s.addColorStop(1,"#f9fcff"),i.fillStyle=s,i.fillRect(0,0,1024,512),i.strokeStyle="#7aa7bb",i.lineWidth=42,i.lineCap="round",i.beginPath(),i.moveTo(120,270),i.bezierCurveTo(290,190,430,310,600,240),i.bezierCurveTo(760,176,840,252,930,205),i.stroke(),i.strokeStyle="#f5fbff",i.lineWidth=28,i.beginPath(),i.moveTo(120,270),i.bezierCurveTo(290,190,430,310,600,240),i.bezierCurveTo(760,176,840,252,930,205),i.stroke(),r.id==="obvious"&&(Zc(i,420,265,44,"#9b3f25"),Zc(i,590,238,36,"#b04e2b"),Zc(i,705,220,24,"#7f3b23")),r.id==="hidden")for(let c=0;c<16;c+=1){const h=300+c*34,d=250+Math.sin(c*1.4)*28;Zc(i,h,d,c%3===0?12:8,"rgba(148, 73, 43, 0.55)")}r.id==="clean"&&(i.fillStyle="rgba(47, 143, 97, 0.16)",i.beginPath(),i.ellipse(512,254,360,108,-.1,0,Math.PI*2),i.fill()),i.fillStyle="#14324d",i.font='700 42px system-ui, -apple-system, "Microsoft YaHei", sans-serif',i.fillText(r.title,52,74),i.font='500 28px system-ui, -apple-system, "Microsoft YaHei", sans-serif',i.fillStyle="#315a73",i.fillText(r.detail,52,124);const l=new Zv(t);return l.colorSpace=Gn,l}function Zc(r,t,i,s,l){r.fillStyle=l,r.beginPath(),r.ellipse(t,i,s*1.25,s*.82,Math.random()*.8,0,Math.PI*2),r.fill(),r.fillStyle="rgba(80, 34, 22, 0.22)",r.beginPath(),r.arc(t+s*.25,i-s*.12,s*.35,0,Math.PI*2),r.fill()}function We(r,t={}){return new WM({color:r,roughness:.62,metalness:.08,...t})}function ry(r){let t=r;for(;t;){if(!t.visible)return!1;t=t.parent}return!0}function Mp(r){let t=r;for(;t;){if(t.userData.interactionId)return t.userData.interactionId;t=t.parent}return null}function sR({stage:r,riskFound:t,selectedIds:i,flowIndex:s,qualityCase:l,aerosolSignal:c,onInteract:h}){const d=Qe.useRef(null),m=Qe.useRef({stageGroups:{},interactiveObjects:[],aerosolStartedAt:-1/0,gazeId:null,gazeStartedAt:0,gazeCooldownUntil:0}),p=Qe.useRef({stage:r,riskFound:t,selectedIds:i,flowIndex:s,qualityCase:l,onInteract:h});return Qe.useEffect(()=>{p.current={stage:r,riskFound:t,selectedIds:i,flowIndex:s,qualityCase:l,onInteract:h},Sv(m.current,r),xv(m.current,i,t,s),Mv(m.current,l)},[r,t,i,s,l,h]),Qe.useEffect(()=>{c>0&&SR(m.current)},[c]),Qe.useEffect(()=>{const v=d.current;if(!v)return;const g=new IM;g.background=new _e("#eef8fc"),g.fog=new mp("#eef8fc",11,24);const x=new Si(60,v.clientWidth/v.clientHeight,.05,100);x.position.set(4.6,2.7,6.5);const S=new BA({antialias:!0,alpha:!1});S.setPixelRatio(Math.min(window.devicePixelRatio,2)),S.setSize(v.clientWidth,v.clientHeight),S.shadowMap.enabled=!0,S.xr.enabled=!0,S.outputColorSpace=Gn,v.appendChild(S.domElement);const E=Zr.createButton(S);E.classList.add("webxr-button"),v.appendChild(E);const b=new HA(x,S.domElement);b.target.set(0,1.25,0),b.enableDamping=!0,b.maxPolarAngle=Math.PI*.48,b.minDistance=3.6,b.maxDistance=10,m.current.renderer=S,m.current.camera=x,m.current.controls=b,m.current.scene=g,rR(g,x,m.current),Sv(m.current,p.current.stage),xv(m.current,p.current.selectedIds,p.current.riskFound,p.current.flowIndex),Mv(m.current,p.current.qualityCase);const M=new tE,_=new ae,z=H=>{const B=S.domElement.getBoundingClientRect();_.x=(H.clientX-B.left)/B.width*2-1,_.y=-((H.clientY-B.top)/B.height)*2+1,M.setFromCamera(_,x);const O=ap(M,m.current);O&&p.current.onInteract(O)};S.domElement.addEventListener("pointerdown",z);const N=H=>{const B=S.xr.getController(H);B.addEventListener("selectstart",()=>{const O=new Je;O.identity().extractRotation(B.matrixWorld),M.ray.origin.setFromMatrixPosition(B.matrixWorld),M.ray.direction.set(0,0,-1).applyMatrix4(O);const X=ap(M,m.current);X&&p.current.onInteract(X)}),g.add(B)};N(0),N(1);const D=()=>{v&&(x.aspect=v.clientWidth/v.clientHeight,x.updateProjectionMatrix(),S.setSize(v.clientWidth,v.clientHeight))};return window.addEventListener("resize",D),S.setAnimationLoop(H=>{b.update(),_R(m.current,H),mR(m.current,M,H),S.render(g,x)}),()=>{S.setAnimationLoop(null),S.domElement.removeEventListener("pointerdown",z),window.removeEventListener("resize",D),b.dispose(),E.remove(),S.domElement.remove(),S.dispose()}},[]),_t.jsx("div",{className:"scene-mount",ref:d,"aria-label":"CSSD去污区三维训练场景"})}function rR(r,t,i){oR(r),lR(r),cR(r),i.stageGroups.risk=uR(r,i),i.stageGroups.brush=fR(r,i),i.stageGroups.flow=hR(r,i),i.stageGroups.dry=dR(r,i),i.stageGroups.quality=pR(r,i),i.aerosolGroup=yR(),r.add(i.aerosolGroup),i.reticle=vR(),t.add(i.reticle),r.add(t)}function oR(r){const t=new jM("#ffffff","#b5ceda",1.3);r.add(t);const i=new QM("#ffffff",2.2);i.position.set(3,7,5),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),r.add(i);const s=new JM("#dff6ff",4,6,1.2);s.position.set(0,4.3,-2.2),s.rotation.x=-Math.PI/2.8,r.add(s)}function lR(r){const t=new me(new gn(12,.12,10),We(14477806));t.position.y=-.06,t.receiveShadow=!0,r.add(t);const i=new me(new gn(12,4.2,.15),We(16251901));i.position.set(0,2.05,-4.2),r.add(i);const s=new me(new gn(.15,4.2,10),We(15332600));s.position.set(-5.95,2.05,0),r.add(s);const l=new me(new gn(11.6,.18,.08),We(12571356));l.position.set(0,.18,-4.08),r.add(l);for(let c=0;c<4;c+=1){const h=new me(new gn(1.8,.04,.24),We(16777215,{emissive:"#dff8ff",emissiveIntensity:.65}));h.position.set(-3.2+c*2.1,3.95,-3.62),r.add(h)}}function cR(r){const t=We(13359068,{metalness:.22,roughness:.38}),i=new me(new gn(4.4,.18,1.9),t);i.position.set(.2,.92,.2),i.castShadow=!0,i.receiveShadow=!0,r.add(i);const s=new me(new gn(2.3,.75,1.45),We(12572125,{metalness:.18}));s.position.set(-2.85,.72,-.15),s.castShadow=!0,r.add(s);const l=new me(new gn(1.85,.08,1.06),We(15201528,{metalness:.08}));l.position.set(-2.85,1.13,-.15),r.add(l);const c=new me(new gn(1.72,.035,.92),We(9425645,{transparent:!0,opacity:.52,roughness:.1}));c.position.set(-2.85,1.19,-.15),r.add(c);const h=new me(new gn(1.45,.12,.82),We(14148326));h.position.set(2.25,1.04,.25),r.add(h);const d=new kM(new XM(new gn(1.25,.48,.72)),new jv({color:"#7d98a7"}));d.position.set(2.25,1.32,.25),r.add(d);const m=new me(new Vi(.22,.24,.78,32),We(5093316,{transparent:!0,opacity:.9}));m.position.set(-.82,1.36,.65),r.add(m);const p=Di("多酶清洗液",{width:420,height:96,fontSize:32,background:"rgba(255,255,255,0.86)"});p.position.set(-.82,1.9,.65),r.add(p);const v=new me(new gn(1.45,.9,.08),We(16777215));v.position.set(-4.95,2.1,-3.55),r.add(v);const g=Di("风险提示面板",{width:420,height:100,fontSize:34,background:"rgba(222,245,252,0.92)"});g.position.set(-4.95,2.45,-3.47),r.add(g);const x=new me(new gn(1.45,.9,.08),We(16777215));x.position.set(4.85,2.1,-3.55),r.add(x);const S=Di("训练评分面板",{width:420,height:100,fontSize:34,background:"rgba(222,245,252,0.92)"});S.position.set(4.85,2.45,-3.47),r.add(S)}function mu(){const r=new ci,t=We(13226195,{metalness:.48,roughness:.28}),i=new me(new Vi(.18,.18,2.6,48,1,!0),t);i.rotation.z=Math.PI/2,i.castShadow=!0,r.add(i);const s=new me(new Vi(.105,.105,.018,40),We(2109499));s.rotation.z=Math.PI/2,s.position.x=1.32,r.add(s);const l=s.clone();l.position.x=-1.32,r.add(l);const c=new me(new du(.31,.035,16,48),We(11451845,{metalness:.45}));c.rotation.y=Math.PI/2,c.position.x=-.38,r.add(c);const h=new me(new Vi(.24,.24,.28,40),We(12109259,{metalness:.42}));h.rotation.z=Math.PI/2,h.position.x=.52,r.add(h);const d=We(10306088,{emissive:"#5b170f",emissiveIntensity:.08});for(let m=0;m<10;m+=1){const p=new me(new Kr(m%3===0?.038:.026,12,12),d.clone());p.position.set(-.65+m*.13,.17+Math.sin(m)*.03,.04+Math.cos(m)*.035),r.add(p)}return r}function uR(r,t){const i=new ci;i.position.set(.15,1.42,.2);const s=mu();i.add(s),Kc(i,t,"risk-lumen","管腔内部",1.38,.04,0,15690575),Kc(i,t,"risk-joint","接口残留",-.45,.45,.08,15901754),Kc(i,t,"risk-protein","蛋白残留",.05,.38,-.28,12151620),Kc(i,t,"risk-aerosol","气溶胶风险",1.05,.5,-.56,5814494);const l=Di("第1关：点击风险热点",{width:520,height:110,fontSize:34,background:"rgba(255,255,255,0.88)"});return l.position.set(0,1.08,-.78),i.add(l),r.add(i),i}function Kc(r,t,i,s,l,c,h,d){const m=new me(new Kr(.115,24,24),We(d,{transparent:!0,opacity:.82,emissive:d,emissiveIntensity:.22}));m.position.set(l,c,h),Ui(m,i,t),r.add(m);const p=new me(new du(.17,.012,10,40),We(d,{emissive:d,emissiveIntensity:.18}));p.position.copy(m.position),p.rotation.x=Math.PI/2,Ui(p,i,t),r.add(p);const v=Di(s,{width:330,height:80,fontSize:30,background:"rgba(255,255,255,0.82)"});v.position.set(l,c+.27,h),Ui(v,i,t),r.add(v)}function fR(r,t){const i=new ci;i.position.set(.25,1.28,.15);const s=mu();s.position.set(0,.35,-.52),i.add(s),fd(i,t,"brush-thin","过细",-1.45,0,.38,.045,6989512),fd(i,t,"brush-fit","合适",0,0,.38,.095,3121e3),fd(i,t,"brush-thick","过粗",1.45,0,.38,.155,13921108);const l=Di("第2关：选择匹配管腔直径的刷子",{width:650,height:110,fontSize:32,background:"rgba(255,255,255,0.88)"});return l.position.set(0,1.18,-.7),i.add(l),r.add(i),i}function fd(r,t,i,s,l,c,h,d,m){const p=new ci;p.position.set(l,c,h),p.rotation.z=Math.PI/2;const v=new me(new Vi(.035,.035,1.05,18),We(15265521));v.position.y=-.3,p.add(v);const g=new me(new Vi(d,d,.66,24),We(m,{transparent:!0,opacity:.78}));g.position.y=.45,Ui(g,i,t),p.add(g);const x=new me(new Kr(.28,24,24),We(m,{transparent:!0,opacity:.08}));x.position.y=.45,Ui(x,i,t),p.add(x);const S=Di(s,{width:260,height:82,fontSize:32,background:"rgba(255,255,255,0.86)"});S.position.set(0,.98,0),S.rotation.z=-Math.PI/2,Ui(S,i,t),p.add(S),r.add(p)}function hR(r,t){const i=new ci;i.position.set(0,1.18,.1);const s=mu();s.position.set(.45,.34,.12),i.add(s),Br(i,t,"step-pre-rinse","1 预冲洗",-2.75,.18,-.18,6272979),Br(i,t,"step-enzyme","2 清洗液",-1.15,.34,.58,4369851),Br(i,t,"step-brush","3 刷洗",.05,.1,.72,3121e3),Br(i,t,"step-rinse","4 充分冲洗",1.45,.22,.52,6400472),Br(i,t,"step-low-rinse","5 液面下冲洗",-2.75,.55,-.6,4166072),Br(i,t,"step-final-rinse","6 终末冲洗",2.65,.2,-.25,8834008);const l=Ls("高压直冲","hazard-high-pressure",14242639,t);l.position.set(1.75,.98,-.82),i.add(l);const c=Di("错误示范：不要对准开口高压直冲",{width:650,height:96,fontSize:30,background:"rgba(255,239,236,0.9)",color:"#8f2f26"});return c.position.set(1.25,1.42,-.84),i.add(c),r.add(i),i}function Br(r,t,i,s,l,c,h,d){const m=new me(new Vi(.25,.25,.1,32),We(d,{transparent:!0,opacity:.72,emissive:d,emissiveIntensity:.08}));m.position.set(l,c,h),Ui(m,i,t),r.add(m);const p=Di(s,{width:340,height:84,fontSize:30,background:"rgba(255,255,255,0.86)"});p.position.set(l,c+.42,h),Ui(p,i,t),r.add(p)}function dR(r,t){const i=new ci;i.position.set(.15,1.25,.1);const s=mu();s.position.set(0,.38,-.42),i.add(s);const l=Ls("自然放置","dry-none",14197085,t);l.position.set(-1.55,.18,.45),i.add(l);const c=Ls("外表擦干","dry-surface",7055301,t);c.position.set(0,.18,.45),i.add(c);const h=Ls("管腔内外干燥","dry-full",3778155,t);h.position.set(1.65,.18,.45),i.add(h);const d=new me(new Vi(.06,.1,.9,24),We(14674157,{metalness:.25}));return d.rotation.z=Math.PI/2.2,d.position.set(1.63,.72,-.1),Ui(d,"dry-full",t),i.add(d),r.add(i),i}function pR(r,t){const i=new ci;i.position.set(0,1.22,-.12);const s=new me(new gn(3.2,1.55,.08),We(2442844));s.position.set(0,.88,-.72),i.add(s);const l=new hu({color:16777215}),c=new me(new ll(2.92,1.26),l);c.position.set(0,.88,-.66),t.qualityScreen=c,i.add(c);const h=Di("放大观察屏",{width:420,height:92,fontSize:34,background:"rgba(255,255,255,0.88)"});h.position.set(0,1.78,-.64),i.add(h);const d=Ls("重新清洗","quality-reclean",3121e3,t);d.position.set(-1.65,.06,.68),i.add(d);const m=Ls("进入检查包装","quality-package",4230083,t);m.position.set(0,.06,.68),i.add(m);const p=Ls("报告老师","quality-report",13670978,t);return p.position.set(1.65,.06,.68),i.add(p),r.add(i),i}function Ls(r,t,i,s){const l=new ci,c=new me(new gn(1.28,.2,.5),We(i,{transparent:!0,opacity:.92,emissive:i,emissiveIntensity:.08}));c.castShadow=!0,Ui(c,t,s),l.add(c);const h=Di(r,{width:380,height:90,fontSize:32,background:"rgba(255,255,255,0.9)"});return h.position.set(0,.28,.04),Ui(h,t,s),l.add(h),l}function Ui(r,t,i){if(r.userData.interactionId=t,r.userData.baseScale=r.scale.clone(),r instanceof me||r instanceof gp){const s=r.material;Array.isArray(s)?s.forEach(l=>{"color"in l&&l.color instanceof _e&&(r.userData.baseColor=l.color.getHex())}):"color"in s&&s.color instanceof _e&&(r.userData.baseColor=s.color.getHex())}i.interactiveObjects.push(r)}function Sv(r,t){const i={1:"risk",2:"brush",3:"flow",4:"dry",5:"quality"};Object.entries(r.stageGroups).forEach(([s,l])=>{l&&(l.visible=s===i[t])})}function xv(r,t,i,s){const l=new Set(t);i.forEach(h=>l.add(h));const c=eR[s];r.interactiveObjects.forEach(h=>{const d=Mp(h);if(!d)return;const m=l.has(d),p=d===c,v=h.userData.baseScale;if(v){const g=m?1.18:p?1.12:1;h.scale.copy(v).multiplyScalar(g)}if(h instanceof me||h instanceof gp){const g=h.material,x=S=>{if(!("color"in S)||!(S.color instanceof _e))return;const E=h.userData.baseColor??S.color.getHex();m?S.color.set("#2fa36b"):p?S.color.set("#1b8ec5"):S.color.set(E);const b=S;b.emissive instanceof _e&&(b.emissive.set(m?"#1f7a4f":p?"#155b78":"#000000"),b.emissiveIntensity=m||p?.18:0)};Array.isArray(g)?g.forEach(x):x(g)}})}function Mv(r,t){if(!r.qualityScreen)return;r.qualityTexture&&r.qualityTexture.dispose(),r.qualityTexture=aR(t);const i=r.qualityScreen.material;i.map=r.qualityTexture,i.needsUpdate=!0}function ap(r,t){const i=t.interactiveObjects.filter(ry),s=r.intersectObjects(i,!1);return s.length===0?null:Mp(s[0].object)}function mR(r,t,i){const s=r.renderer,l=r.camera;if(!s||!l||!s.xr.isPresenting){r.reticle&&(r.reticle.visible=!1);return}r.reticle&&(r.reticle.visible=!0),t.setFromCamera(new ae(0,0),l);const c=ap(t,r);if(!c){r.gazeId=null,r.gazeStartedAt=0;return}if(!(i<r.gazeCooldownUntil)){if(r.gazeId!==c){r.gazeId=c,r.gazeStartedAt=i;return}i-r.gazeStartedAt>1400&&(gR(r,c),r.gazeCooldownUntil=i+900,r.gazeStartedAt=i)}}function gR(r,t){const i=new CustomEvent("cssd-gaze-interaction",{detail:t});window.dispatchEvent(i)}function _R(r,t){if(r.interactiveObjects.forEach(s=>{const l=Mp(s);if(!l||!l.startsWith("risk-")||!ry(s))return;const c=s.userData.baseScale;if(!c)return;const h=1+Math.sin(t*.006+s.id)*.045;s.scale.copy(c).multiplyScalar(h)}),!r.aerosolGroup)return;const i=(t-r.aerosolStartedAt)/1e3;if(i<0||i>3){r.aerosolGroup.visible=!1;return}r.aerosolGroup.visible=!0,r.aerosolGroup.children.forEach(s=>{const l=s.userData.base,c=s.userData.velocity;s.position.copy(l).addScaledVector(c,i);const h=s.material;h.opacity=Math.max(0,.48*(1-i/3))})}function vR(){const r=new me(new vp(.018,.024,32),new hu({color:"#1b8ec5",transparent:!0,opacity:.88}));return r.position.set(0,0,-1.2),r.visible=!1,r}function yR(){const r=new ci;r.visible=!1,r.position.set(1.05,1.65,-.35);for(let t=0;t<64;t+=1){const i=new me(new Kr(.025+Math.random()*.018,10,10),We(8309989,{transparent:!0,opacity:.42,roughness:.2})),s=new j((Math.random()-.5)*.16,(Math.random()-.5)*.12,(Math.random()-.5)*.16),l=new j(.25+Math.random()*.8,.16+Math.random()*.75,-.38+Math.random()*.76);i.userData.base=s,i.userData.velocity=l,i.position.copy(s),r.add(i)}return r}function SR(r){r.aerosolStartedAt=performance.now(),r.aerosolGroup?.children.forEach(t=>{const i=t.userData.base;t.position.copy(i)})}function xR(r){return r>=90?{label:"优秀",message:"已掌握管腔器械清洗关键要点。"}:r>=80?{label:"良好",message:"需继续强化质量判定。"}:r>=60?{label:"合格",message:"需加强流程规范。"}:{label:"需重新训练",message:"重点复习风险识别和规范冲洗。"}}const MR={risk:"风险识别",brush:"刷子选择",flow:"刷洗冲洗流程",dry:"干燥处理",quality:"质量判定"};function ER({score:r,categoryScores:t,errorRecords:i,onRestart:s}){const l=xR(r),c=i.length===0?["保持完整流程意识，可尝试在VR模式中反复演练。"]:["复盘红色错误提示对应的操作节点。","重点关注管腔内部、接口部和隐匿残留。","冲洗时优先控制压力、方向和液面位置。"];return _t.jsx("main",{className:"end-screen",children:_t.jsxs("section",{className:"result-card","aria-labelledby":"result-title",children:[_t.jsx("p",{className:"eyebrow",children:"训练完成"}),_t.jsxs("h1",{id:"result-title",children:[r," 分"]}),_t.jsxs("p",{className:"grade",children:[l.label,"，",l.message]}),_t.jsx("div",{className:"score-breakdown","aria-label":"分类得分",children:Object.entries(t).map(([h,d])=>{const m=h;return _t.jsxs("div",{className:"score-row",children:[_t.jsx("span",{children:MR[m]}),_t.jsxs("strong",{children:[d,"/",sy[m]]})]},m)})}),_t.jsxs("section",{className:"error-list",children:[_t.jsx("h2",{children:"错误记录"}),i.length===0?_t.jsx("p",{className:"empty-errors",children:"无扣分错误。"}):_t.jsx("ul",{children:i.map((h,d)=>_t.jsxs("li",{children:[_t.jsxs("span",{children:["-",h.points,"分"]}),h.message]},`${h.message}-${d}`))})]}),_t.jsxs("section",{className:"suggestions",children:[_t.jsx("h2",{children:"改进建议"}),_t.jsx("ul",{children:c.map(h=>_t.jsx("li",{children:h},h))})]}),_t.jsx("button",{className:"primary",type:"button",onClick:s,children:"重新训练"})]})})}function TR({onStart:r,onStartVr:t}){return _t.jsxs("main",{className:"home-screen",children:[_t.jsxs("section",{className:"home-hero","aria-labelledby":"home-title",children:[_t.jsxs("div",{className:"hero-copy",children:[_t.jsx("p",{className:"eyebrow",children:"CSSD 去污区沉浸式教学原型"}),_t.jsx("h1",{id:"home-title",children:"CSSD管腔器械清洗VR训练系统"}),_t.jsx("p",{className:"subtitle",children:"看见隐蔽污染，练会规范清洗"}),_t.jsxs("div",{className:"home-actions","aria-label":"训练入口",children:[_t.jsx("button",{className:"primary",type:"button",onClick:r,children:"开始训练"}),_t.jsx("a",{className:"secondary",href:"#instructions",children:"查看操作说明"}),_t.jsx("button",{className:"secondary",type:"button",onClick:t,children:"进入VR模式"})]})]}),_t.jsx("div",{className:"hero-scene","aria-hidden":"true",children:_t.jsxs("div",{className:"sink-illustration",children:[_t.jsx("span",{className:"tube tube-main"}),_t.jsx("span",{className:"tube tube-shadow"}),_t.jsx("span",{className:"residue-dot dot-a"}),_t.jsx("span",{className:"residue-dot dot-b"}),_t.jsx("span",{className:"residue-dot dot-c"}),_t.jsx("span",{className:"brush-preview"}),_t.jsx("span",{className:"water-line line-a"}),_t.jsx("span",{className:"water-line line-b"})]})})]}),_t.jsxs("section",{id:"instructions",className:"instructions",children:[_t.jsx("h2",{children:"操作说明"}),_t.jsxs("div",{className:"instruction-grid",children:[_t.jsxs("article",{children:[_t.jsx("h3",{children:"电脑浏览器"}),_t.jsx("p",{children:"拖拽旋转视角，滚轮缩放，点击高亮物体完成选择。"})]}),_t.jsxs("article",{children:[_t.jsx("h3",{children:"手机浏览器"}),_t.jsx("p",{children:"单指点击交互目标，双指缩放，横屏展示空间更宽。"})]}),_t.jsxs("article",{children:[_t.jsx("h3",{children:"Meta Quest 3S"}),_t.jsx("p",{children:"使用 Quest 浏览器打开部署地址，点击场景内 WebXR 按钮进入 VR，可用控制器或凝视选择。"})]})]})]})]})}function bR({stage:r,riskFound:t,flowIndex:i,qualityCase:s,qualityIndex:l}){return r===1?_t.jsx("div",{className:"task-list",children:ip.map(c=>_t.jsxs("span",{className:t.includes(c.id)?"done":"",children:[t.includes(c.id)?"✓":"○"," ",c.label]},c.id))}):r===2?_t.jsxs("div",{className:"task-list",children:[_t.jsx("span",{children:"○ 过细刷"}),_t.jsx("span",{children:"○ 合适刷"}),_t.jsx("span",{children:"○ 过粗刷"})]}):r===3?_t.jsx("div",{className:"step-track",children:Us.map((c,h)=>_t.jsxs("span",{className:h<i?"done":h===i?"current":"",children:[h+1,". ",c.label]},c.id))}):r===4?_t.jsxs("div",{className:"task-list",children:[_t.jsx("span",{children:"○ 自然放置不处理"}),_t.jsx("span",{children:"○ 外表擦干"}),_t.jsx("span",{children:"○ 管腔内外充分干燥"})]}):_t.jsxs("div",{className:"quality-copy",children:[_t.jsxs("strong",{children:["状态 ",l+1,"/",lu.length,"：",s.title]}),_t.jsx("p",{children:s.detail}),_t.jsxs("div",{className:"task-list",children:[_t.jsxs("span",{children:["○ ",ud["quality-reclean"]]}),_t.jsxs("span",{children:["○ ",ud["quality-package"]]}),_t.jsxs("span",{children:["○ ",ud["quality-report"]]})]})]})}function AR({stage:r,score:t,feedback:i,riskFound:s,flowIndex:l,qualityCase:c,qualityIndex:h,canAdvance:d,preferVR:m,onSubmitRisk:p,onNextStage:v,onFinish:g,onSpeak:x}){const S=$A[r],E=r===1?`${s.length}/4`:r===3?`${l}/${Us.length}`:r===5?`${h+1}/${lu.length}`:d?"已完成":"待完成";return _t.jsxs("aside",{className:"training-panel","aria-label":"任务提示与评分",children:[_t.jsxs("div",{className:"panel-topline",children:[_t.jsxs("span",{children:["第",r,"关"]}),_t.jsxs("strong",{children:[t,"分"]})]}),_t.jsx("h2",{children:S.title}),_t.jsx("p",{className:"task-copy",children:S.task}),m&&_t.jsx("p",{className:"vr-hint",children:"VR模式：请点击3D场景右下角的 ENTER VR 按钮，Quest 浏览器会自动进入沉浸式视图。"}),_t.jsx(bR,{stage:r,riskFound:s,flowIndex:l,qualityCase:c,qualityIndex:h}),_t.jsxs("div",{className:`feedback ${i.tone}`,"aria-live":"polite",children:[_t.jsx("span",{children:"语音文字提示"}),_t.jsx("p",{children:i.message}),_t.jsx("button",{className:"ghost",type:"button",onClick:x,children:"朗读提示"})]}),_t.jsxs("div",{className:"teaching-tip",children:[_t.jsx("span",{children:"教学提示"}),_t.jsx("p",{children:tR[r-1]})]}),_t.jsxs("div",{className:"panel-footer",children:[_t.jsxs("span",{children:["剩余步骤：",E]}),r===1?_t.jsx("button",{className:"primary compact",type:"button",onClick:p,children:"提交识别"}):r===5&&d?_t.jsx("button",{className:"primary compact",type:"button",onClick:g,children:"完成训练"}):_t.jsx("button",{className:"primary compact",type:"button",disabled:!d,onClick:v,children:"进入下一关"})]})]})}const Ev={...sy},Tv={tone:"neutral",message:"请根据当前任务，在三维场景中点击高亮物体。VR模式可使用控制器或凝视停留选择。"};function RR(r){return Object.values(r).reduce((t,i)=>t+i,0)}function CR(){const[r,t]=Qe.useState("home"),[i,s]=Qe.useState(!1),[l,c]=Qe.useState(1),[h,d]=Qe.useState({...Ev}),[m,p]=Qe.useState([]),[v,g]=Qe.useState(new Set),[x,S]=Qe.useState(Tv),[E,b]=Qe.useState([]),[M,_]=Qe.useState(!1),[z,N]=Qe.useState(0),[D,H]=Qe.useState(!1),[B,O]=Qe.useState(!1),[X,C]=Qe.useState(0),[w,G]=Qe.useState(!1),[Q,st]=Qe.useState([]),[ht,lt]=Qe.useState(0),I=Qe.useMemo(()=>RR(h),[h]),W=lu[X],Z=l===2&&M||l===3&&D||l===4&&B||l===5&&w;Qe.useEffect(()=>{const zt=P=>{L(P.detail)};return window.addEventListener("cssd-gaze-interaction",zt),()=>window.removeEventListener("cssd-gaze-interaction",zt)});const yt=(zt=!1)=>{s(zt),c(1),d({...Ev}),p([]),g(new Set),S(Tv),b([]),_(!1),N(0),H(!1),O(!1),C(0),G(!1),st([]),lt(0),t("training")},xt=(zt,P,Jt,ie)=>{g(ee=>{if(ee.has(zt))return ee;d(we=>({...we,[P]:Math.max(0,we[P]-Jt)})),p(we=>[...we,{category:P,points:Jt,message:ie}]);const Vt=new Set(ee);return Vt.add(zt),Vt})},L=zt=>{l===1&&nt(zt),l===2&&At(zt),l===3&&Ut(zt),l===4&&it(zt),l===5&&ct(zt)},nt=zt=>{if(!zt.startsWith("risk-"))return;const P=ip.find(Jt=>Jt.id===zt);P&&(b(Jt=>Jt.includes(zt)?Jt:[...Jt,zt]),st(Jt=>Jt.includes(zt)?Jt:[...Jt,zt]),S({tone:"success",message:zt==="risk-lumen"?"已识别管腔内部不可见污染。管腔器械的风险不只在表面，真正的清洗难点在管腔内部和连接部位。":P.tip}))},St=()=>{const zt=new Set(E),P=ip.filter(Jt=>!zt.has(Jt.id));P.length===0?S({tone:"success",message:"管腔器械的风险不只在表面，真正的清洗难点在管腔内部和连接部位。"}):(P.forEach(Jt=>{const ie=Jt.id==="risk-lumen"?10:5;xt(`risk-missed-${Jt.id}`,"risk",ie,`未识别：${Jt.label}`)}),S({tone:"warning",message:`仍有${P.length}个风险点未识别。进入下一关前请记住：隐蔽污染和连接部位是管腔清洗重点。`})),Dt(2)},At=zt=>{if(["brush-thin","brush-fit","brush-thick"].includes(zt)){if(st([zt]),zt==="brush-fit"){_(!0),S({tone:"success",message:"刷子规格匹配，可有效接触管腔内壁。"});return}if(zt==="brush-thin"){xt("brush-wrong","brush",10,"选择刷子错误：过细刷毛无法有效接触管腔内壁。"),S({tone:"error",message:"刷毛无法有效接触管腔内壁，可能造成残留。"});return}xt("brush-wrong","brush",10,"选择刷子错误：过粗刷可能损伤器械管腔。"),S({tone:"error",message:"可能损伤器械管腔，不能强行通过。"})}},Ut=zt=>{if(zt==="hazard-high-pressure"){xt("flow-aerosol","flow",15,"高压直冲导致气溶胶扩散。"),lt(ie=>ie+1),S({tone:"error",message:"高压直冲可能形成飞溅和气溶胶，增加生物暴露风险。应控制压力和方向，必要时采用低位或液面下冲洗。"});return}const P=Us[z];if(!P||zt!==P.id){S({tone:"error",message:`步骤顺序不正确。当前应先完成：${P?P.label:"全部步骤已完成"}。`});return}const Jt=z+1;if(st(Us.slice(0,Jt).map(ie=>ie.id)),N(Jt),Jt===Us.length){H(!0),S({tone:"success",message:"已按规范完成刷洗与冲洗流程，并通过低位或液面下冲洗降低飞溅风险。"});return}S({tone:"success",message:`已完成${P.label}，请继续下一步：${Us[Jt].label}。`})},it=zt=>{if(["dry-none","dry-surface","dry-full"].includes(zt)){if(st([zt]),zt==="dry-full"){O(!0),S({tone:"success",message:"已完成管腔内外充分干燥，可减少残留水分对后续检查、包装和灭菌质量的影响。"});return}xt("dry-wrong","dry",10,"未进行管腔内外充分干燥。"),S({tone:"error",message:"管腔内残留水分会影响后续检查、包装和灭菌质量。"})}},ct=zt=>{if(["quality-reclean","quality-package","quality-report"].includes(zt)){if(st([zt]),W.hasResidue&&zt==="quality-package"){xt(`quality-missed-${W.id}`,"quality",20,`残留未发现却判定合格：${W.title}。`),S({tone:"error",message:"管腔内仍有残留，不能进入包装灭菌环节，应重新清洗。"});return}if(zt!==W.correctAction){S({tone:"warning",message:W.hasResidue?"该状态仍有残留，规范处置是重新清洗。":"该状态已清洗合格，可进入检查包装。"});return}if(X<lu.length-1){S({tone:"success",message:`${W.title}判断正确。请观察下一种管腔状态。`}),C(P=>P+1),st([]);return}G(!0),S({tone:"success",message:"三种质量状态均已完成判断，训练闭环结束。"})}},Dt=zt=>{c(zt),st([]),zt===2&&_(!1),zt===3&&(N(0),H(!1),S({tone:"neutral",message:"请按顺序完成刷洗与冲洗流程。避免点击红色高压直冲错误示范。"})),zt===4&&(O(!1),S({tone:"neutral",message:"请选择能处理管腔内部水分的干燥方式。"})),zt===5&&(C(0),G(!1),S({tone:"neutral",message:"请观察放大屏，判断当前管腔状态是否合格。"}))},Bt=()=>{l<5&&Dt(l+1)},Wt=()=>{t("end")},he=()=>{if(!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const zt=new SpeechSynthesisUtterance(x.message);zt.lang="zh-CN",zt.rate=.95,window.speechSynthesis.speak(zt)};return r==="home"?_t.jsx(TR,{onStart:()=>yt(!1),onStartVr:()=>yt(!0)}):r==="end"?_t.jsx(ER,{score:I,categoryScores:h,errorRecords:m,onRestart:()=>yt(!1)}):_t.jsxs("main",{className:"training-layout",children:[_t.jsxs("header",{className:"training-header",children:[_t.jsxs("div",{children:[_t.jsx("span",{children:"当前关卡"}),_t.jsxs("strong",{children:["第",l,"关 / ",l===1?"风险识别":l===2?"刷子选择":l===3?"刷洗冲洗":l===4?"干燥处理":"质量判定"]})]}),_t.jsxs("div",{children:[_t.jsx("span",{children:"总分"}),_t.jsx("strong",{children:I})]}),_t.jsxs("div",{children:[_t.jsx("span",{children:"运行模式"}),_t.jsx("strong",{children:"浏览器 + WebXR"})]})]}),_t.jsx("section",{className:"scene-shell",children:_t.jsx(sR,{stage:l,riskFound:E,selectedIds:Q,flowIndex:z,qualityCase:W,aerosolSignal:ht,onInteract:L})}),_t.jsx(AR,{stage:l,score:I,feedback:x,riskFound:E,flowIndex:z,qualityCase:W,qualityIndex:X,canAdvance:Z,preferVR:i,onSubmitRisk:St,onNextStage:Bt,onFinish:Wt,onSpeak:he})]})}xx.createRoot(document.getElementById("root")).render(_t.jsx(Qe.StrictMode,{children:_t.jsx(CR,{})}));
