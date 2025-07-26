/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function El(t){const e=Object.create(null);for(const i of t.split(","))e[i]=1;return i=>i in e}const zt={},Zs=[],xi=()=>{},Vp=()=>!1,jn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),zl=t=>t.startsWith("onUpdate:"),Yt=Object.assign,Ml=(t,e)=>{const i=t.indexOf(e);i>-1&&t.splice(i,1)},Np=Object.prototype.hasOwnProperty,xt=(t,e)=>Np.call(t,e),st=Array.isArray,Qs=t=>Wn(t)==="[object Map]",au=t=>Wn(t)==="[object Set]",ht=t=>typeof t=="function",Ut=t=>typeof t=="string",hs=t=>typeof t=="symbol",It=t=>t!==null&&typeof t=="object",lu=t=>(It(t)||ht(t))&&ht(t.then)&&ht(t.catch),cu=Object.prototype.toString,Wn=t=>cu.call(t),Up=t=>Wn(t).slice(8,-1),qn=t=>Wn(t)==="[object Object]",Dl=t=>Ut(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,No=El(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kn=t=>{const e=Object.create(null);return i=>e[i]||(e[i]=t(i))},jp=/-(\w)/g,ti=Kn(t=>t.replace(jp,(e,i)=>i?i.toUpperCase():"")),Wp=/\B([A-Z])/g,qe=Kn(t=>t.replace(Wp,"-$1").toLowerCase()),hu=Kn(t=>t.charAt(0).toUpperCase()+t.slice(1)),pa=Kn(t=>t?`on${hu(t)}`:""),is=(t,e)=>!Object.is(t,e),ga=(t,...e)=>{for(let i=0;i<t.length;i++)t[i](...e)},Ya=(t,e,i,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:i})},qp=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Rc=t=>{const e=Ut(t)?Number(t):NaN;return isNaN(e)?t:e};let Lc;const Yn=()=>Lc||(Lc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ol(t){if(st(t)){const e={};for(let i=0;i<t.length;i++){const s=t[i],o=Ut(s)?Gp(s):Ol(s);if(o)for(const r in o)e[r]=o[r]}return e}else if(Ut(t)||It(t))return t}const Kp=/;(?![^(]*\))/g,Yp=/:([^]+)/,Xp=/\/\*[^]*?\*\//g;function Gp(t){const e={};return t.replace(Xp,"").split(Kp).forEach(i=>{if(i){const s=i.split(Yp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Pl(t){let e="";if(Ut(t))e=t;else if(st(t))for(let i=0;i<t.length;i++){const s=Pl(t[i]);s&&(e+=s+" ")}else if(It(t))for(const i in t)t[i]&&(e+=i+" ");return e.trim()}const Jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zp=El(Jp);function du(t){return!!t||t===""}const uu=t=>!!(t&&t.__v_isRef===!0),Ki=t=>Ut(t)?t:t==null?"":st(t)||It(t)&&(t.toString===cu||!ht(t.toString))?uu(t)?Ki(t.value):JSON.stringify(t,fu,2):String(t),fu=(t,e)=>uu(e)?fu(t,e.value):Qs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((i,[s,o],r)=>(i[ma(s,r)+" =>"]=o,i),{})}:au(e)?{[`Set(${e.size})`]:[...e.values()].map(i=>ma(i))}:hs(e)?ma(e):It(e)&&!st(e)&&!qn(e)?String(e):e,ma=(t,e="")=>{var i;return hs(t)?`Symbol(${(i=t.description)!=null?i:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ae;class Qp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ae,!e&&Ae&&(this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,i;if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].pause();for(e=0,i=this.effects.length;e<i;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,i;if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].resume();for(e=0,i=this.effects.length;e<i;e++)this.effects[e].resume()}}run(e){if(this._active){const i=Ae;try{return Ae=this,e()}finally{Ae=i}}}on(){++this._on===1&&(this.prevScope=Ae,Ae=this)}off(){this._on>0&&--this._on===0&&(Ae=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let i,s;for(i=0,s=this.effects.length;i<s;i++)this.effects[i].stop();for(this.effects.length=0,i=0,s=this.cleanups.length;i<s;i++)this.cleanups[i]();if(this.cleanups.length=0,this.scopes){for(i=0,s=this.scopes.length;i<s;i++)this.scopes[i].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function tg(){return Ae}let Et;const ba=new WeakSet;class pu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ae&&Ae.active&&Ae.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ba.has(this)&&(ba.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fc(this),bu(this);const e=Et,i=ei;Et=this,ei=!0;try{return this.fn()}finally{vu(this),Et=e,ei=i,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ll(e);this.deps=this.depsTail=void 0,Fc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ba.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xa(this)&&this.run()}get dirty(){return Xa(this)}}let gu=0,Uo,jo;function mu(t,e=!1){if(t.flags|=8,e){t.next=jo,jo=t;return}t.next=Uo,Uo=t}function Il(){gu++}function Rl(){if(--gu>0)return;if(jo){let e=jo;for(jo=void 0;e;){const i=e.next;e.next=void 0,e.flags&=-9,e=i}}let t;for(;Uo;){let e=Uo;for(Uo=void 0;e;){const i=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=i}}if(t)throw t}function bu(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function vu(t){let e,i=t.depsTail,s=i;for(;s;){const o=s.prevDep;s.version===-1?(s===i&&(i=o),Ll(s),eg(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}t.deps=e,t.depsTail=i}function Xa(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(yu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function yu(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ar)||(t.globalVersion=ar,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Xa(t))))return;t.flags|=2;const e=t.dep,i=Et,s=ei;Et=t,ei=!0;try{bu(t);const o=t.fn(t._value);(e.version===0||is(o,t._value))&&(t.flags|=128,t._value=o,e.version++)}catch(o){throw e.version++,o}finally{Et=i,ei=s,vu(t),t.flags&=-3}}function Ll(t,e=!1){const{dep:i,prevSub:s,nextSub:o}=t;if(s&&(s.nextSub=o,t.prevSub=void 0),o&&(o.prevSub=s,t.nextSub=void 0),i.subs===t&&(i.subs=s,!s&&i.computed)){i.computed.flags&=-5;for(let r=i.computed.deps;r;r=r.nextDep)Ll(r,!0)}!e&&!--i.sc&&i.map&&i.map.delete(i.key)}function eg(t){const{prevDep:e,nextDep:i}=t;e&&(e.nextDep=i,t.prevDep=void 0),i&&(i.prevDep=e,t.nextDep=void 0)}let ei=!0;const _u=[];function Bi(){_u.push(ei),ei=!1}function Hi(){const t=_u.pop();ei=t===void 0?!0:t}function Fc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const i=Et;Et=void 0;try{e()}finally{Et=i}}}let ar=0;class ig{constructor(e,i){this.sub=e,this.dep=i,this.version=i.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!ei||Et===this.computed)return;let i=this.activeLink;if(i===void 0||i.sub!==Et)i=this.activeLink=new ig(Et,this),Et.deps?(i.prevDep=Et.depsTail,Et.depsTail.nextDep=i,Et.depsTail=i):Et.deps=Et.depsTail=i,xu(i);else if(i.version===-1&&(i.version=this.version,i.nextDep)){const s=i.nextDep;s.prevDep=i.prevDep,i.prevDep&&(i.prevDep.nextDep=s),i.prevDep=Et.depsTail,i.nextDep=void 0,Et.depsTail.nextDep=i,Et.depsTail=i,Et.deps===i&&(Et.deps=s)}return i}trigger(e){this.version++,ar++,this.notify(e)}notify(e){Il();try{for(let i=this.subs;i;i=i.prevSub)i.sub.notify()&&i.sub.dep.notify()}finally{Rl()}}}function xu(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)xu(s)}const i=t.dep.subs;i!==t&&(t.prevSub=i,i&&(i.nextSub=t)),t.dep.subs=t}}const Ga=new WeakMap,Ds=Symbol(""),Ja=Symbol(""),lr=Symbol("");function he(t,e,i){if(ei&&Et){let s=Ga.get(t);s||Ga.set(t,s=new Map);let o=s.get(i);o||(s.set(i,o=new Fl),o.map=s,o.key=i),o.track()}}function Li(t,e,i,s,o,r){const n=Ga.get(t);if(!n){ar++;return}const a=l=>{l&&l.trigger()};if(Il(),e==="clear")n.forEach(a);else{const l=st(t),c=l&&Dl(i);if(l&&i==="length"){const h=Number(s);n.forEach((d,f)=>{(f==="length"||f===lr||!hs(f)&&f>=h)&&a(d)})}else switch((i!==void 0||n.has(void 0))&&a(n.get(i)),c&&a(n.get(lr)),e){case"add":l?c&&a(n.get("length")):(a(n.get(Ds)),Qs(t)&&a(n.get(Ja)));break;case"delete":l||(a(n.get(Ds)),Qs(t)&&a(n.get(Ja)));break;case"set":Qs(t)&&a(n.get(Ds));break}}Rl()}function Ws(t){const e=bt(t);return e===t?e:(he(e,"iterate",lr),Ye(t)?e:e.map(se))}function Xn(t){return he(t=bt(t),"iterate",lr),t}const sg={__proto__:null,[Symbol.iterator](){return va(this,Symbol.iterator,se)},concat(...t){return Ws(this).concat(...t.map(e=>st(e)?Ws(e):e))},entries(){return va(this,"entries",t=>(t[1]=se(t[1]),t))},every(t,e){return Mi(this,"every",t,e,void 0,arguments)},filter(t,e){return Mi(this,"filter",t,e,i=>i.map(se),arguments)},find(t,e){return Mi(this,"find",t,e,se,arguments)},findIndex(t,e){return Mi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Mi(this,"findLast",t,e,se,arguments)},findLastIndex(t,e){return Mi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Mi(this,"forEach",t,e,void 0,arguments)},includes(...t){return ya(this,"includes",t)},indexOf(...t){return ya(this,"indexOf",t)},join(t){return Ws(this).join(t)},lastIndexOf(...t){return ya(this,"lastIndexOf",t)},map(t,e){return Mi(this,"map",t,e,void 0,arguments)},pop(){return ko(this,"pop")},push(...t){return ko(this,"push",t)},reduce(t,...e){return Bc(this,"reduce",t,e)},reduceRight(t,...e){return Bc(this,"reduceRight",t,e)},shift(){return ko(this,"shift")},some(t,e){return Mi(this,"some",t,e,void 0,arguments)},splice(...t){return ko(this,"splice",t)},toReversed(){return Ws(this).toReversed()},toSorted(t){return Ws(this).toSorted(t)},toSpliced(...t){return Ws(this).toSpliced(...t)},unshift(...t){return ko(this,"unshift",t)},values(){return va(this,"values",se)}};function va(t,e,i){const s=Xn(t),o=s[e]();return s!==t&&!Ye(t)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.value&&(r.value=i(r.value)),r}),o}const og=Array.prototype;function Mi(t,e,i,s,o,r){const n=Xn(t),a=n!==t&&!Ye(t),l=n[e];if(l!==og[e]){const d=l.apply(t,r);return a?se(d):d}let c=i;n!==t&&(a?c=function(d,f){return i.call(this,se(d),f,t)}:i.length>2&&(c=function(d,f){return i.call(this,d,f,t)}));const h=l.call(n,c,s);return a&&o?o(h):h}function Bc(t,e,i,s){const o=Xn(t);let r=i;return o!==t&&(Ye(t)?i.length>3&&(r=function(n,a,l){return i.call(this,n,a,l,t)}):r=function(n,a,l){return i.call(this,n,se(a),l,t)}),o[e](r,...s)}function ya(t,e,i){const s=bt(t);he(s,"iterate",lr);const o=s[e](...i);return(o===-1||o===!1)&&wr(i[0])?(i[0]=bt(i[0]),s[e](...i)):o}function ko(t,e,i=[]){Bi(),Il();const s=bt(t)[e].apply(t,i);return Rl(),Hi(),s}const rg=El("__proto__,__v_isRef,__isVue"),wu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(hs));function ng(t){hs(t)||(t=String(t));const e=bt(this);return he(e,"has",t),e.hasOwnProperty(t)}class ku{constructor(e=!1,i=!1){this._isReadonly=e,this._isShallow=i}get(e,i,s){if(i==="__v_skip")return e.__v_skip;const o=this._isReadonly,r=this._isShallow;if(i==="__v_isReactive")return!o;if(i==="__v_isReadonly")return o;if(i==="__v_isShallow")return r;if(i==="__v_raw")return s===(o?r?mg:Au:r?$u:Su).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const n=st(e);if(!o){let l;if(n&&(l=sg[i]))return l;if(i==="hasOwnProperty")return ng}const a=Reflect.get(e,i,ue(e)?e:s);return(hs(i)?wu.has(i):rg(i))||(o||he(e,"get",i),r)?a:ue(a)?n&&Dl(i)?a:a.value:It(a)?o?Tu(a):Hl(a):a}}class Cu extends ku{constructor(e=!1){super(!1,e)}set(e,i,s,o){let r=e[i];if(!this._isShallow){const l=os(r);if(!Ye(s)&&!os(s)&&(r=bt(r),s=bt(s)),!st(e)&&ue(r)&&!ue(s))return l?!1:(r.value=s,!0)}const n=st(e)&&Dl(i)?Number(i)<e.length:xt(e,i),a=Reflect.set(e,i,s,ue(e)?e:o);return e===bt(o)&&(n?is(s,r)&&Li(e,"set",i,s):Li(e,"add",i,s)),a}deleteProperty(e,i){const s=xt(e,i);e[i];const o=Reflect.deleteProperty(e,i);return o&&s&&Li(e,"delete",i,void 0),o}has(e,i){const s=Reflect.has(e,i);return(!hs(i)||!wu.has(i))&&he(e,"has",i),s}ownKeys(e){return he(e,"iterate",st(e)?"length":Ds),Reflect.ownKeys(e)}}class ag extends ku{constructor(e=!1){super(!0,e)}set(e,i){return!0}deleteProperty(e,i){return!0}}const lg=new Cu,cg=new ag,hg=new Cu(!0);const Za=t=>t,Br=t=>Reflect.getPrototypeOf(t);function dg(t,e,i){return function(...s){const o=this.__v_raw,r=bt(o),n=Qs(r),a=t==="entries"||t===Symbol.iterator&&n,l=t==="keys"&&n,c=o[t](...s),h=i?Za:e?wn:se;return!e&&he(r,"iterate",l?Ja:Ds),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[h(d[0]),h(d[1])]:h(d),done:f}},[Symbol.iterator](){return this}}}}function Hr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ug(t,e){const i={get(o){const r=this.__v_raw,n=bt(r),a=bt(o);t||(is(o,a)&&he(n,"get",o),he(n,"get",a));const{has:l}=Br(n),c=e?Za:t?wn:se;if(l.call(n,o))return c(r.get(o));if(l.call(n,a))return c(r.get(a));r!==n&&r.get(o)},get size(){const o=this.__v_raw;return!t&&he(bt(o),"iterate",Ds),Reflect.get(o,"size",o)},has(o){const r=this.__v_raw,n=bt(r),a=bt(o);return t||(is(o,a)&&he(n,"has",o),he(n,"has",a)),o===a?r.has(o):r.has(o)||r.has(a)},forEach(o,r){const n=this,a=n.__v_raw,l=bt(a),c=e?Za:t?wn:se;return!t&&he(l,"iterate",Ds),a.forEach((h,d)=>o.call(r,c(h),c(d),n))}};return Yt(i,t?{add:Hr("add"),set:Hr("set"),delete:Hr("delete"),clear:Hr("clear")}:{add(o){!e&&!Ye(o)&&!os(o)&&(o=bt(o));const r=bt(this);return Br(r).has.call(r,o)||(r.add(o),Li(r,"add",o,o)),this},set(o,r){!e&&!Ye(r)&&!os(r)&&(r=bt(r));const n=bt(this),{has:a,get:l}=Br(n);let c=a.call(n,o);c||(o=bt(o),c=a.call(n,o));const h=l.call(n,o);return n.set(o,r),c?is(r,h)&&Li(n,"set",o,r):Li(n,"add",o,r),this},delete(o){const r=bt(this),{has:n,get:a}=Br(r);let l=n.call(r,o);l||(o=bt(o),l=n.call(r,o)),a&&a.call(r,o);const c=r.delete(o);return l&&Li(r,"delete",o,void 0),c},clear(){const o=bt(this),r=o.size!==0,n=o.clear();return r&&Li(o,"clear",void 0,void 0),n}}),["keys","values","entries",Symbol.iterator].forEach(o=>{i[o]=dg(o,t,e)}),i}function Bl(t,e){const i=ug(t,e);return(s,o,r)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?s:Reflect.get(xt(i,o)&&o in s?i:s,o,r)}const fg={get:Bl(!1,!1)},pg={get:Bl(!1,!0)},gg={get:Bl(!0,!1)};const Su=new WeakMap,$u=new WeakMap,Au=new WeakMap,mg=new WeakMap;function bg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vg(t){return t.__v_skip||!Object.isExtensible(t)?0:bg(Up(t))}function Hl(t){return os(t)?t:Vl(t,!1,lg,fg,Su)}function yg(t){return Vl(t,!1,hg,pg,$u)}function Tu(t){return Vl(t,!0,cg,gg,Au)}function Vl(t,e,i,s,o){if(!It(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=vg(t);if(r===0)return t;const n=o.get(t);if(n)return n;const a=new Proxy(t,r===2?s:i);return o.set(t,a),a}function to(t){return os(t)?to(t.__v_raw):!!(t&&t.__v_isReactive)}function os(t){return!!(t&&t.__v_isReadonly)}function Ye(t){return!!(t&&t.__v_isShallow)}function wr(t){return t?!!t.__v_raw:!1}function bt(t){const e=t&&t.__v_raw;return e?bt(e):t}function _g(t){return!xt(t,"__v_skip")&&Object.isExtensible(t)&&Ya(t,"__v_skip",!0),t}const se=t=>It(t)?Hl(t):t,wn=t=>It(t)?Tu(t):t;function ue(t){return t?t.__v_isRef===!0:!1}function Ze(t){return zu(t,!1)}function Eu(t){return zu(t,!0)}function zu(t,e){return ue(t)?t:new xg(t,e)}class xg{constructor(e,i){this.dep=new Fl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=i?e:bt(e),this._value=i?e:se(e),this.__v_isShallow=i}get value(){return this.dep.track(),this._value}set value(e){const i=this._rawValue,s=this.__v_isShallow||Ye(e)||os(e);e=s?e:bt(e),is(e,i)&&(this._rawValue=e,this._value=s?e:se(e),this.dep.trigger())}}function Gn(t){return ue(t)?t.value:t}const wg={get:(t,e,i)=>e==="__v_raw"?t:Gn(Reflect.get(t,e,i)),set:(t,e,i,s)=>{const o=t[e];return ue(o)&&!ue(i)?(o.value=i,!0):Reflect.set(t,e,i,s)}};function Mu(t){return to(t)?t:new Proxy(t,wg)}class kg{constructor(e,i,s){this.fn=e,this.setter=i,this._value=void 0,this.dep=new Fl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ar-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!i,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return mu(this,!0),!0}get value(){const e=this.dep.track();return yu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cg(t,e,i=!1){let s,o;return ht(t)?s=t:(s=t.get,o=t.set),new kg(s,o,i)}const Vr={},kn=new WeakMap;let xs;function Sg(t,e=!1,i=xs){if(i){let s=kn.get(i);s||kn.set(i,s=[]),s.push(t)}}function $g(t,e,i=zt){const{immediate:s,deep:o,once:r,scheduler:n,augmentJob:a,call:l}=i,c=y=>o?y:Ye(y)||o===!1||o===0?Ji(y,1):Ji(y);let h,d,f,p,m=!1,b=!1;if(ue(t)?(d=()=>t.value,m=Ye(t)):to(t)?(d=()=>c(t),m=!0):st(t)?(b=!0,m=t.some(y=>to(y)||Ye(y)),d=()=>t.map(y=>{if(ue(y))return y.value;if(to(y))return c(y);if(ht(y))return l?l(y,2):y()})):ht(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){Bi();try{f()}finally{Hi()}}const y=xs;xs=h;try{return l?l(t,3,[p]):t(p)}finally{xs=y}}:d=xi,e&&o){const y=d,k=o===!0?1/0:o;d=()=>Ji(y(),k)}const v=tg(),w=()=>{h.stop(),v&&v.active&&Ml(v.effects,h)};if(r&&e){const y=e;e=(...k)=>{y(...k),w()}}let x=b?new Array(t.length).fill(Vr):Vr;const S=y=>{if(!(!(h.flags&1)||!h.dirty&&!y))if(e){const k=h.run();if(o||m||(b?k.some(($,T)=>is($,x[T])):is(k,x))){f&&f();const $=xs;xs=h;try{const T=[k,x===Vr?void 0:b&&x[0]===Vr?[]:x,p];x=k,l?l(e,3,T):e(...T)}finally{xs=$}}}else h.run()};return a&&a(S),h=new pu(d),h.scheduler=n?()=>n(S,!1):S,p=y=>Sg(y,!1,h),f=h.onStop=()=>{const y=kn.get(h);if(y){if(l)l(y,4);else for(const k of y)k();kn.delete(h)}},e?s?S(!0):x=h.run():n?n(S.bind(null,!0),!0):h.run(),w.pause=h.pause.bind(h),w.resume=h.resume.bind(h),w.stop=w,w}function Ji(t,e=1/0,i){if(e<=0||!It(t)||t.__v_skip||(i=i||new Set,i.has(t)))return t;if(i.add(t),e--,ue(t))Ji(t.value,e,i);else if(st(t))for(let s=0;s<t.length;s++)Ji(t[s],e,i);else if(au(t)||Qs(t))t.forEach(s=>{Ji(s,e,i)});else if(qn(t)){for(const s in t)Ji(t[s],e,i);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Ji(t[s],e,i)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kr(t,e,i,s){try{return s?t(...s):t()}catch(o){Jn(o,e,i)}}function Ci(t,e,i,s){if(ht(t)){const o=kr(t,e,i,s);return o&&lu(o)&&o.catch(r=>{Jn(r,e,i)}),o}if(st(t)){const o=[];for(let r=0;r<t.length;r++)o.push(Ci(t[r],e,i,s));return o}}function Jn(t,e,i,s=!0){const o=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:n}=e&&e.appContext.config||zt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${i}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,c)===!1)return}a=a.parent}if(r){Bi(),kr(r,null,10,[t,l,c]),Hi();return}}Ag(t,i,o,s,n)}function Ag(t,e,i,s=!0,o=!1){if(o)throw t;console.error(t)}const be=[];let mi=-1;const eo=[];let Xi=null,Xs=0;const Du=Promise.resolve();let Cn=null;function Nl(t){const e=Cn||Du;return t?e.then(this?t.bind(this):t):e}function Tg(t){let e=mi+1,i=be.length;for(;e<i;){const s=e+i>>>1,o=be[s],r=cr(o);r<t||r===t&&o.flags&2?e=s+1:i=s}return e}function Ul(t){if(!(t.flags&1)){const e=cr(t),i=be[be.length-1];!i||!(t.flags&2)&&e>=cr(i)?be.push(t):be.splice(Tg(e),0,t),t.flags|=1,Ou()}}function Ou(){Cn||(Cn=Du.then(Iu))}function Eg(t){st(t)?eo.push(...t):Xi&&t.id===-1?Xi.splice(Xs+1,0,t):t.flags&1||(eo.push(t),t.flags|=1),Ou()}function Hc(t,e,i=mi+1){for(;i<be.length;i++){const s=be[i];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;be.splice(i,1),i--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Pu(t){if(eo.length){const e=[...new Set(eo)].sort((i,s)=>cr(i)-cr(s));if(eo.length=0,Xi){Xi.push(...e);return}for(Xi=e,Xs=0;Xs<Xi.length;Xs++){const i=Xi[Xs];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}Xi=null,Xs=0}}const cr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Iu(t){try{for(mi=0;mi<be.length;mi++){const e=be[mi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),kr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mi<be.length;mi++){const e=be[mi];e&&(e.flags&=-2)}mi=-1,be.length=0,Pu(),Cn=null,(be.length||eo.length)&&Iu()}}let _i=null,Ru=null;function Sn(t){const e=_i;return _i=t,Ru=t&&t.type.__scopeId||null,e}function zg(t,e=_i,i){if(!e||t._n)return t;const s=(...o)=>{s._d&&Xc(-1);const r=Sn(e);let n;try{n=t(...o)}finally{Sn(r),s._d&&Xc(1)}return n};return s._n=!0,s._c=!0,s._d=!0,s}function gs(t,e,i,s){const o=t.dirs,r=e&&e.dirs;for(let n=0;n<o.length;n++){const a=o[n];r&&(a.oldValue=r[n].value);let l=a.dir[s];l&&(Bi(),Ci(l,i,8,[t.el,a,t,e]),Hi())}}const Mg=Symbol("_vte"),Dg=t=>t.__isTeleport;function jl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,jl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Cr(t,e){return ht(t)?Yt({name:t.name},e,{setup:t}):t}function Lu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Wo(t,e,i,s,o=!1){if(st(t)){t.forEach((m,b)=>Wo(m,e&&(st(e)?e[b]:e),i,s,o));return}if(qo(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Wo(t,e,i,s.component.subTree);return}const r=s.shapeFlag&4?Xl(s.component):s.el,n=o?null:r,{i:a,r:l}=t,c=e&&e.r,h=a.refs===zt?a.refs={}:a.refs,d=a.setupState,f=bt(d),p=d===zt?()=>!1:m=>xt(f,m);if(c!=null&&c!==l&&(Ut(c)?(h[c]=null,p(c)&&(d[c]=null)):ue(c)&&(c.value=null)),ht(l))kr(l,a,12,[n,h]);else{const m=Ut(l),b=ue(l);if(m||b){const v=()=>{if(t.f){const w=m?p(l)?d[l]:h[l]:l.value;o?st(w)&&Ml(w,r):st(w)?w.includes(r)||w.push(r):m?(h[l]=[r],p(l)&&(d[l]=h[l])):(l.value=[r],t.k&&(h[t.k]=l.value))}else m?(h[l]=n,p(l)&&(d[l]=n)):b&&(l.value=n,t.k&&(h[t.k]=n))};n?(v.id=-1,Oe(v,i)):v()}}}Yn().requestIdleCallback;Yn().cancelIdleCallback;const qo=t=>!!t.type.__asyncLoader,Fu=t=>t.type.__isKeepAlive;function Og(t,e){Bu(t,"a",e)}function Pg(t,e){Bu(t,"da",e)}function Bu(t,e,i=ye){const s=t.__wdc||(t.__wdc=()=>{let o=i;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(Zn(e,s,i),i){let o=i.parent;for(;o&&o.parent;)Fu(o.parent.vnode)&&Ig(s,e,i,o),o=o.parent}}function Ig(t,e,i,s){const o=Zn(e,t,s,!0);Wl(()=>{Ml(s[e],o)},i)}function Zn(t,e,i=ye,s=!1){if(i){const o=i[t]||(i[t]=[]),r=e.__weh||(e.__weh=(...n)=>{Bi();const a=Sr(i),l=Ci(e,i,t,n);return a(),Hi(),l});return s?o.unshift(r):o.push(r),r}}const Vi=t=>(e,i=ye)=>{(!dr||t==="sp")&&Zn(t,(...s)=>e(...s),i)},Rg=Vi("bm"),Hu=Vi("m"),Lg=Vi("bu"),Fg=Vi("u"),Bg=Vi("bum"),Wl=Vi("um"),Hg=Vi("sp"),Vg=Vi("rtg"),Ng=Vi("rtc");function Ug(t,e=ye){Zn("ec",t,e)}const jg=Symbol.for("v-ndc");function qs(t,e,i,s){let o;const r=i,n=st(t);if(n||Ut(t)){const a=n&&to(t);let l=!1,c=!1;a&&(l=!Ye(t),c=os(t),t=Xn(t)),o=new Array(t.length);for(let h=0,d=t.length;h<d;h++)o[h]=e(l?c?wn(se(t[h])):se(t[h]):t[h],h,void 0,r)}else if(typeof t=="number"){o=new Array(t);for(let a=0;a<t;a++)o[a]=e(a+1,a,void 0,r)}else if(It(t))if(t[Symbol.iterator])o=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);o=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const h=a[l];o[l]=e(t[h],h,l,r)}}else o=[];return o}const Qa=t=>t?lf(t)?Xl(t):Qa(t.parent):null,Ko=Yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qa(t.parent),$root:t=>Qa(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Nu(t),$forceUpdate:t=>t.f||(t.f=()=>{Ul(t.update)}),$nextTick:t=>t.n||(t.n=Nl.bind(t.proxy)),$watch:t=>um.bind(t)}),_a=(t,e)=>t!==zt&&!t.__isScriptSetup&&xt(t,e),Wg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:i,setupState:s,data:o,props:r,accessCache:n,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=n[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return o[e];case 4:return i[e];case 3:return r[e]}else{if(_a(s,e))return n[e]=1,s[e];if(o!==zt&&xt(o,e))return n[e]=2,o[e];if((c=t.propsOptions[0])&&xt(c,e))return n[e]=3,r[e];if(i!==zt&&xt(i,e))return n[e]=4,i[e];tl&&(n[e]=0)}}const h=Ko[e];let d,f;if(h)return e==="$attrs"&&he(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(i!==zt&&xt(i,e))return n[e]=4,i[e];if(f=l.config.globalProperties,xt(f,e))return f[e]},set({_:t},e,i){const{data:s,setupState:o,ctx:r}=t;return _a(o,e)?(o[e]=i,!0):s!==zt&&xt(s,e)?(s[e]=i,!0):xt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=i,!0)},has({_:{data:t,setupState:e,accessCache:i,ctx:s,appContext:o,propsOptions:r}},n){let a;return!!i[n]||t!==zt&&xt(t,n)||_a(e,n)||(a=r[0])&&xt(a,n)||xt(s,n)||xt(Ko,n)||xt(o.config.globalProperties,n)},defineProperty(t,e,i){return i.get!=null?t._.accessCache[e]=0:xt(i,"value")&&this.set(t,e,i.value,null),Reflect.defineProperty(t,e,i)}};function Vc(t){return st(t)?t.reduce((e,i)=>(e[i]=null,e),{}):t}let tl=!0;function qg(t){const e=Nu(t),i=t.proxy,s=t.ctx;tl=!1,e.beforeCreate&&Nc(e.beforeCreate,t,"bc");const{data:o,computed:r,methods:n,watch:a,provide:l,inject:c,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:b,deactivated:v,beforeDestroy:w,beforeUnmount:x,destroyed:S,unmounted:y,render:k,renderTracked:$,renderTriggered:T,errorCaptured:z,serverPrefetch:O,expose:M,inheritAttrs:q,components:j,directives:ot,filters:J}=e;if(c&&Kg(c,s,null),n)for(const it in n){const nt=n[it];ht(nt)&&(s[it]=nt.bind(i))}if(o){const it=o.call(i,i);It(it)&&(t.data=Hl(it))}if(tl=!0,r)for(const it in r){const nt=r[it],Rt=ht(nt)?nt.bind(i,i):ht(nt.get)?nt.get.bind(i,i):xi,ge=!ht(nt)&&ht(nt.set)?nt.set.bind(i):xi,we=$s({get:Rt,set:ge});Object.defineProperty(s,it,{enumerable:!0,configurable:!0,get:()=>we.value,set:F=>we.value=F})}if(a)for(const it in a)Vu(a[it],s,i,it);if(l){const it=ht(l)?l.call(i):l;Reflect.ownKeys(it).forEach(nt=>{Qg(nt,it[nt])})}h&&Nc(h,t,"c");function rt(it,nt){st(nt)?nt.forEach(Rt=>it(Rt.bind(i))):nt&&it(nt.bind(i))}if(rt(Rg,d),rt(Hu,f),rt(Lg,p),rt(Fg,m),rt(Og,b),rt(Pg,v),rt(Ug,z),rt(Ng,$),rt(Vg,T),rt(Bg,x),rt(Wl,y),rt(Hg,O),st(M))if(M.length){const it=t.exposed||(t.exposed={});M.forEach(nt=>{Object.defineProperty(it,nt,{get:()=>i[nt],set:Rt=>i[nt]=Rt})})}else t.exposed||(t.exposed={});k&&t.render===xi&&(t.render=k),q!=null&&(t.inheritAttrs=q),j&&(t.components=j),ot&&(t.directives=ot),O&&Lu(t)}function Kg(t,e,i=xi){st(t)&&(t=el(t));for(const s in t){const o=t[s];let r;It(o)?"default"in o?r=dn(o.from||s,o.default,!0):r=dn(o.from||s):r=dn(o),ue(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:n=>r.value=n}):e[s]=r}}function Nc(t,e,i){Ci(st(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,i)}function Vu(t,e,i,s){let o=s.includes(".")?ef(i,s):()=>i[s];if(Ut(t)){const r=e[t];ht(r)&&un(o,r)}else if(ht(t))un(o,t.bind(i));else if(It(t))if(st(t))t.forEach(r=>Vu(r,e,i,s));else{const r=ht(t.handler)?t.handler.bind(i):e[t.handler];ht(r)&&un(o,r,t)}}function Nu(t){const e=t.type,{mixins:i,extends:s}=e,{mixins:o,optionsCache:r,config:{optionMergeStrategies:n}}=t.appContext,a=r.get(e);let l;return a?l=a:!o.length&&!i&&!s?l=e:(l={},o.length&&o.forEach(c=>$n(l,c,n,!0)),$n(l,e,n)),It(e)&&r.set(e,l),l}function $n(t,e,i,s=!1){const{mixins:o,extends:r}=e;r&&$n(t,r,i,!0),o&&o.forEach(n=>$n(t,n,i,!0));for(const n in e)if(!(s&&n==="expose")){const a=Yg[n]||i&&i[n];t[n]=a?a(t[n],e[n]):e[n]}return t}const Yg={data:Uc,props:jc,emits:jc,methods:Fo,computed:Fo,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:Fo,directives:Fo,watch:Gg,provide:Uc,inject:Xg};function Uc(t,e){return e?t?function(){return Yt(ht(t)?t.call(this,this):t,ht(e)?e.call(this,this):e)}:e:t}function Xg(t,e){return Fo(el(t),el(e))}function el(t){if(st(t)){const e={};for(let i=0;i<t.length;i++)e[t[i]]=t[i];return e}return t}function me(t,e){return t?[...new Set([].concat(t,e))]:e}function Fo(t,e){return t?Yt(Object.create(null),t,e):e}function jc(t,e){return t?st(t)&&st(e)?[...new Set([...t,...e])]:Yt(Object.create(null),Vc(t),Vc(e??{})):e}function Gg(t,e){if(!t)return e;if(!e)return t;const i=Yt(Object.create(null),t);for(const s in e)i[s]=me(t[s],e[s]);return i}function Uu(){return{app:null,config:{isNativeTag:Vp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jg=0;function Zg(t,e){return function(s,o=null){ht(s)||(s=Yt({},s)),o!=null&&!It(o)&&(o=null);const r=Uu(),n=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Jg++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:hf,get config(){return r.config},set config(h){},use(h,...d){return n.has(h)||(h&&ht(h.install)?(n.add(h),h.install(c,...d)):ht(h)&&(n.add(h),h(c,...d))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,d){return d?(r.components[h]=d,c):r.components[h]},directive(h,d){return d?(r.directives[h]=d,c):r.directives[h]},mount(h,d,f){if(!l){const p=c._ceVNode||oe(s,o);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(p,h,f),l=!0,c._container=h,h.__vue_app__=c,Xl(p.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Ci(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(h,d){return r.provides[h]=d,c},runWithContext(h){const d=io;io=c;try{return h()}finally{io=d}}};return c}}let io=null;function Qg(t,e){if(ye){let i=ye.provides;const s=ye.parent&&ye.parent.provides;s===i&&(i=ye.provides=Object.create(s)),i[t]=e}}function dn(t,e,i=!1){const s=ye||_i;if(s||io){let o=io?io._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&t in o)return o[t];if(arguments.length>1)return i&&ht(e)?e.call(s&&s.proxy):e}}const ju={},Wu=()=>Object.create(ju),qu=t=>Object.getPrototypeOf(t)===ju;function tm(t,e,i,s=!1){const o={},r=Wu();t.propsDefaults=Object.create(null),Ku(t,e,o,r);for(const n in t.propsOptions[0])n in o||(o[n]=void 0);i?t.props=s?o:yg(o):t.type.props?t.props=o:t.props=r,t.attrs=r}function em(t,e,i,s){const{props:o,attrs:r,vnode:{patchFlag:n}}=t,a=bt(o),[l]=t.propsOptions;let c=!1;if((s||n>0)&&!(n&16)){if(n&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let f=h[d];if(Qn(t.emitsOptions,f))continue;const p=e[f];if(l)if(xt(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const m=ti(f);o[m]=il(l,a,m,p,t,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Ku(t,e,o,r)&&(c=!0);let h;for(const d in a)(!e||!xt(e,d)&&((h=qe(d))===d||!xt(e,h)))&&(l?i&&(i[d]!==void 0||i[h]!==void 0)&&(o[d]=il(l,a,d,void 0,t,!0)):delete o[d]);if(r!==a)for(const d in r)(!e||!xt(e,d))&&(delete r[d],c=!0)}c&&Li(t.attrs,"set","")}function Ku(t,e,i,s){const[o,r]=t.propsOptions;let n=!1,a;if(e)for(let l in e){if(No(l))continue;const c=e[l];let h;o&&xt(o,h=ti(l))?!r||!r.includes(h)?i[h]=c:(a||(a={}))[h]=c:Qn(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,n=!0)}if(r){const l=bt(i),c=a||zt;for(let h=0;h<r.length;h++){const d=r[h];i[d]=il(o,l,d,c[d],t,!xt(c,d))}}return n}function il(t,e,i,s,o,r){const n=t[i];if(n!=null){const a=xt(n,"default");if(a&&s===void 0){const l=n.default;if(n.type!==Function&&!n.skipFactory&&ht(l)){const{propsDefaults:c}=o;if(i in c)s=c[i];else{const h=Sr(o);s=c[i]=l.call(null,e),h()}}else s=l;o.ce&&o.ce._setProp(i,s)}n[0]&&(r&&!a?s=!1:n[1]&&(s===""||s===qe(i))&&(s=!0))}return s}const im=new WeakMap;function Yu(t,e,i=!1){const s=i?im:e.propsCache,o=s.get(t);if(o)return o;const r=t.props,n={},a=[];let l=!1;if(!ht(t)){const h=d=>{l=!0;const[f,p]=Yu(d,e,!0);Yt(n,f),p&&a.push(...p)};!i&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!l)return It(t)&&s.set(t,Zs),Zs;if(st(r))for(let h=0;h<r.length;h++){const d=ti(r[h]);Wc(d)&&(n[d]=zt)}else if(r)for(const h in r){const d=ti(h);if(Wc(d)){const f=r[h],p=n[d]=st(f)||ht(f)?{type:f}:Yt({},f),m=p.type;let b=!1,v=!0;if(st(m))for(let w=0;w<m.length;++w){const x=m[w],S=ht(x)&&x.name;if(S==="Boolean"){b=!0;break}else S==="String"&&(v=!1)}else b=ht(m)&&m.name==="Boolean";p[0]=b,p[1]=v,(b||xt(p,"default"))&&a.push(d)}}const c=[n,a];return It(t)&&s.set(t,c),c}function Wc(t){return t[0]!=="$"&&!No(t)}const ql=t=>t[0]==="_"||t==="$stable",Kl=t=>st(t)?t.map(vi):[vi(t)],sm=(t,e,i)=>{if(e._n)return e;const s=zg((...o)=>Kl(e(...o)),i);return s._c=!1,s},Xu=(t,e,i)=>{const s=t._ctx;for(const o in t){if(ql(o))continue;const r=t[o];if(ht(r))e[o]=sm(o,r,s);else if(r!=null){const n=Kl(r);e[o]=()=>n}}},Gu=(t,e)=>{const i=Kl(e);t.slots.default=()=>i},Ju=(t,e,i)=>{for(const s in e)(i||!ql(s))&&(t[s]=e[s])},om=(t,e,i)=>{const s=t.slots=Wu();if(t.vnode.shapeFlag&32){const o=e.__;o&&Ya(s,"__",o,!0);const r=e._;r?(Ju(s,e,i),i&&Ya(s,"_",r,!0)):Xu(e,s)}else e&&Gu(t,e)},rm=(t,e,i)=>{const{vnode:s,slots:o}=t;let r=!0,n=zt;if(s.shapeFlag&32){const a=e._;a?i&&a===1?r=!1:Ju(o,e,i):(r=!e.$stable,Xu(e,o)),n=e}else e&&(Gu(t,e),n={default:1});if(r)for(const a in o)!ql(a)&&n[a]==null&&delete o[a]},Oe=ym;function nm(t){return am(t)}function am(t,e){const i=Yn();i.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:n,createText:a,createComment:l,setText:c,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=xi,insertStaticContent:m}=t,b=(_,C,A,I=null,D=null,P=null,N=void 0,H=null,B=!!C.dynamicChildren)=>{if(_===C)return;_&&!Co(_,C)&&(I=ji(_),F(_,D,P,!0),_=null),C.patchFlag===-2&&(B=!1,C.dynamicChildren=null);const{type:R,ref:et,shapeFlag:U}=C;switch(R){case ta:v(_,C,A,I);break;case rs:w(_,C,A,I);break;case fn:_==null&&x(C,A,I,N);break;case ve:j(_,C,A,I,D,P,N,H,B);break;default:U&1?k(_,C,A,I,D,P,N,H,B):U&6?ot(_,C,A,I,D,P,N,H,B):(U&64||U&128)&&R.process(_,C,A,I,D,P,N,H,B,ps)}et!=null&&D?Wo(et,_&&_.ref,P,C||_,!C):et==null&&_&&_.ref!=null&&Wo(_.ref,null,P,_,!0)},v=(_,C,A,I)=>{if(_==null)s(C.el=a(C.children),A,I);else{const D=C.el=_.el;C.children!==_.children&&c(D,C.children)}},w=(_,C,A,I)=>{_==null?s(C.el=l(C.children||""),A,I):C.el=_.el},x=(_,C,A,I)=>{[_.el,_.anchor]=m(_.children,C,A,I,_.el,_.anchor)},S=({el:_,anchor:C},A,I)=>{let D;for(;_&&_!==C;)D=f(_),s(_,A,I),_=D;s(C,A,I)},y=({el:_,anchor:C})=>{let A;for(;_&&_!==C;)A=f(_),o(_),_=A;o(C)},k=(_,C,A,I,D,P,N,H,B)=>{C.type==="svg"?N="svg":C.type==="math"&&(N="mathml"),_==null?$(C,A,I,D,P,N,H,B):O(_,C,D,P,N,H,B)},$=(_,C,A,I,D,P,N,H)=>{let B,R;const{props:et,shapeFlag:U,transition:Z,dirs:at}=_;if(B=_.el=n(_.type,P,et&&et.is,et),U&8?h(B,_.children):U&16&&z(_.children,B,null,I,D,xa(_,P),N,H),at&&gs(_,null,I,"created"),T(B,_,_.scopeId,N,I),et){for(const Tt in et)Tt!=="value"&&!No(Tt)&&r(B,Tt,null,et[Tt],P,I);"value"in et&&r(B,"value",null,et.value,P),(R=et.onVnodeBeforeMount)&&fi(R,I,_)}at&&gs(_,null,I,"beforeMount");const gt=lm(D,Z);gt&&Z.beforeEnter(B),s(B,C,A),((R=et&&et.onVnodeMounted)||gt||at)&&Oe(()=>{R&&fi(R,I,_),gt&&Z.enter(B),at&&gs(_,null,I,"mounted")},D)},T=(_,C,A,I,D)=>{if(A&&p(_,A),I)for(let P=0;P<I.length;P++)p(_,I[P]);if(D){let P=D.subTree;if(C===P||of(P.type)&&(P.ssContent===C||P.ssFallback===C)){const N=D.vnode;T(_,N,N.scopeId,N.slotScopeIds,D.parent)}}},z=(_,C,A,I,D,P,N,H,B=0)=>{for(let R=B;R<_.length;R++){const et=_[R]=H?Gi(_[R]):vi(_[R]);b(null,et,C,A,I,D,P,N,H)}},O=(_,C,A,I,D,P,N)=>{const H=C.el=_.el;let{patchFlag:B,dynamicChildren:R,dirs:et}=C;B|=_.patchFlag&16;const U=_.props||zt,Z=C.props||zt;let at;if(A&&ms(A,!1),(at=Z.onVnodeBeforeUpdate)&&fi(at,A,C,_),et&&gs(C,_,A,"beforeUpdate"),A&&ms(A,!0),(U.innerHTML&&Z.innerHTML==null||U.textContent&&Z.textContent==null)&&h(H,""),R?M(_.dynamicChildren,R,H,A,I,xa(C,D),P):N||nt(_,C,H,null,A,I,xa(C,D),P,!1),B>0){if(B&16)q(H,U,Z,A,D);else if(B&2&&U.class!==Z.class&&r(H,"class",null,Z.class,D),B&4&&r(H,"style",U.style,Z.style,D),B&8){const gt=C.dynamicProps;for(let Tt=0;Tt<gt.length;Tt++){const St=gt[Tt],ke=U[St],Ce=Z[St];(Ce!==ke||St==="value")&&r(H,St,ke,Ce,D,A)}}B&1&&_.children!==C.children&&h(H,C.children)}else!N&&R==null&&q(H,U,Z,A,D);((at=Z.onVnodeUpdated)||et)&&Oe(()=>{at&&fi(at,A,C,_),et&&gs(C,_,A,"updated")},I)},M=(_,C,A,I,D,P,N)=>{for(let H=0;H<C.length;H++){const B=_[H],R=C[H],et=B.el&&(B.type===ve||!Co(B,R)||B.shapeFlag&198)?d(B.el):A;b(B,R,et,null,I,D,P,N,!0)}},q=(_,C,A,I,D)=>{if(C!==A){if(C!==zt)for(const P in C)!No(P)&&!(P in A)&&r(_,P,C[P],null,D,I);for(const P in A){if(No(P))continue;const N=A[P],H=C[P];N!==H&&P!=="value"&&r(_,P,H,N,D,I)}"value"in A&&r(_,"value",C.value,A.value,D)}},j=(_,C,A,I,D,P,N,H,B)=>{const R=C.el=_?_.el:a(""),et=C.anchor=_?_.anchor:a("");let{patchFlag:U,dynamicChildren:Z,slotScopeIds:at}=C;at&&(H=H?H.concat(at):at),_==null?(s(R,A,I),s(et,A,I),z(C.children||[],A,et,D,P,N,H,B)):U>0&&U&64&&Z&&_.dynamicChildren?(M(_.dynamicChildren,Z,A,D,P,N,H),(C.key!=null||D&&C===D.subTree)&&Zu(_,C,!0)):nt(_,C,A,et,D,P,N,H,B)},ot=(_,C,A,I,D,P,N,H,B)=>{C.slotScopeIds=H,_==null?C.shapeFlag&512?D.ctx.activate(C,A,I,N,B):J(C,A,I,D,P,N,B):dt(_,C,B)},J=(_,C,A,I,D,P,N)=>{const H=_.component=Am(_,I,D);if(Fu(_)&&(H.ctx.renderer=ps),Tm(H,!1,N),H.asyncDep){if(D&&D.registerDep(H,rt,N),!_.el){const B=H.subTree=oe(rs);w(null,B,C,A)}}else rt(H,_,C,A,D,P,N)},dt=(_,C,A)=>{const I=C.component=_.component;if(bm(_,C,A))if(I.asyncDep&&!I.asyncResolved){it(I,C,A);return}else I.next=C,I.update();else C.el=_.el,I.vnode=C},rt=(_,C,A,I,D,P,N)=>{const H=()=>{if(_.isMounted){let{next:U,bu:Z,u:at,parent:gt,vnode:Tt}=_;{const di=Qu(_);if(di){U&&(U.el=Tt.el,it(_,U,N)),di.asyncDep.then(()=>{_.isUnmounted||H()});return}}let St=U,ke;ms(_,!1),U?(U.el=Tt.el,it(_,U,N)):U=Tt,Z&&ga(Z),(ke=U.props&&U.props.onVnodeBeforeUpdate)&&fi(ke,gt,U,Tt),ms(_,!0);const Ce=Kc(_),hi=_.subTree;_.subTree=Ce,b(hi,Ce,d(hi.el),ji(hi),_,D,P),U.el=Ce.el,St===null&&vm(_,Ce.el),at&&Oe(at,D),(ke=U.props&&U.props.onVnodeUpdated)&&Oe(()=>fi(ke,gt,U,Tt),D)}else{let U;const{el:Z,props:at}=C,{bm:gt,m:Tt,parent:St,root:ke,type:Ce}=_,hi=qo(C);ms(_,!1),gt&&ga(gt),!hi&&(U=at&&at.onVnodeBeforeMount)&&fi(U,St,C),ms(_,!0);{ke.ce&&ke.ce._def.shadowRoot!==!1&&ke.ce._injectChildStyle(Ce);const di=_.subTree=Kc(_);b(null,di,A,I,_,D,P),C.el=di.el}if(Tt&&Oe(Tt,D),!hi&&(U=at&&at.onVnodeMounted)){const di=C;Oe(()=>fi(U,St,di),D)}(C.shapeFlag&256||St&&qo(St.vnode)&&St.vnode.shapeFlag&256)&&_.a&&Oe(_.a,D),_.isMounted=!0,C=A=I=null}};_.scope.on();const B=_.effect=new pu(H);_.scope.off();const R=_.update=B.run.bind(B),et=_.job=B.runIfDirty.bind(B);et.i=_,et.id=_.uid,B.scheduler=()=>Ul(et),ms(_,!0),R()},it=(_,C,A)=>{C.component=_;const I=_.vnode.props;_.vnode=C,_.next=null,em(_,C.props,I,A),rm(_,C.children,A),Bi(),Hc(_),Hi()},nt=(_,C,A,I,D,P,N,H,B=!1)=>{const R=_&&_.children,et=_?_.shapeFlag:0,U=C.children,{patchFlag:Z,shapeFlag:at}=C;if(Z>0){if(Z&128){ge(R,U,A,I,D,P,N,H,B);return}else if(Z&256){Rt(R,U,A,I,D,P,N,H,B);return}}at&8?(et&16&&jt(R,D,P),U!==R&&h(A,U)):et&16?at&16?ge(R,U,A,I,D,P,N,H,B):jt(R,D,P,!0):(et&8&&h(A,""),at&16&&z(U,A,I,D,P,N,H,B))},Rt=(_,C,A,I,D,P,N,H,B)=>{_=_||Zs,C=C||Zs;const R=_.length,et=C.length,U=Math.min(R,et);let Z;for(Z=0;Z<U;Z++){const at=C[Z]=B?Gi(C[Z]):vi(C[Z]);b(_[Z],at,A,null,D,P,N,H,B)}R>et?jt(_,D,P,!0,!1,U):z(C,A,I,D,P,N,H,B,U)},ge=(_,C,A,I,D,P,N,H,B)=>{let R=0;const et=C.length;let U=_.length-1,Z=et-1;for(;R<=U&&R<=Z;){const at=_[R],gt=C[R]=B?Gi(C[R]):vi(C[R]);if(Co(at,gt))b(at,gt,A,null,D,P,N,H,B);else break;R++}for(;R<=U&&R<=Z;){const at=_[U],gt=C[Z]=B?Gi(C[Z]):vi(C[Z]);if(Co(at,gt))b(at,gt,A,null,D,P,N,H,B);else break;U--,Z--}if(R>U){if(R<=Z){const at=Z+1,gt=at<et?C[at].el:I;for(;R<=Z;)b(null,C[R]=B?Gi(C[R]):vi(C[R]),A,gt,D,P,N,H,B),R++}}else if(R>Z)for(;R<=U;)F(_[R],D,P,!0),R++;else{const at=R,gt=R,Tt=new Map;for(R=gt;R<=Z;R++){const ze=C[R]=B?Gi(C[R]):vi(C[R]);ze.key!=null&&Tt.set(ze.key,R)}let St,ke=0;const Ce=Z-gt+1;let hi=!1,di=0;const wo=new Array(Ce);for(R=0;R<Ce;R++)wo[R]=0;for(R=at;R<=U;R++){const ze=_[R];if(ke>=Ce){F(ze,D,P,!0);continue}let ui;if(ze.key!=null)ui=Tt.get(ze.key);else for(St=gt;St<=Z;St++)if(wo[St-gt]===0&&Co(ze,C[St])){ui=St;break}ui===void 0?F(ze,D,P,!0):(wo[ui-gt]=R+1,ui>=di?di=ui:hi=!0,b(ze,C[ui],A,null,D,P,N,H,B),ke++)}const Pc=hi?cm(wo):Zs;for(St=Pc.length-1,R=Ce-1;R>=0;R--){const ze=gt+R,ui=C[ze],Ic=ze+1<et?C[ze+1].el:I;wo[R]===0?b(null,ui,A,Ic,D,P,N,H,B):hi&&(St<0||R!==Pc[St]?we(ui,A,Ic,2):St--)}}},we=(_,C,A,I,D=null)=>{const{el:P,type:N,transition:H,children:B,shapeFlag:R}=_;if(R&6){we(_.component.subTree,C,A,I);return}if(R&128){_.suspense.move(C,A,I);return}if(R&64){N.move(_,C,A,ps);return}if(N===ve){s(P,C,A);for(let U=0;U<B.length;U++)we(B[U],C,A,I);s(_.anchor,C,A);return}if(N===fn){S(_,C,A);return}if(I!==2&&R&1&&H)if(I===0)H.beforeEnter(P),s(P,C,A),Oe(()=>H.enter(P),D);else{const{leave:U,delayLeave:Z,afterLeave:at}=H,gt=()=>{_.ctx.isUnmounted?o(P):s(P,C,A)},Tt=()=>{U(P,()=>{gt(),at&&at()})};Z?Z(P,gt,Tt):Tt()}else s(P,C,A)},F=(_,C,A,I=!1,D=!1)=>{const{type:P,props:N,ref:H,children:B,dynamicChildren:R,shapeFlag:et,patchFlag:U,dirs:Z,cacheIndex:at}=_;if(U===-2&&(D=!1),H!=null&&(Bi(),Wo(H,null,A,_,!0),Hi()),at!=null&&(C.renderCache[at]=void 0),et&256){C.ctx.deactivate(_);return}const gt=et&1&&Z,Tt=!qo(_);let St;if(Tt&&(St=N&&N.onVnodeBeforeUnmount)&&fi(St,C,_),et&6)Gt(_.component,A,I);else{if(et&128){_.suspense.unmount(A,I);return}gt&&gs(_,null,C,"beforeUnmount"),et&64?_.type.remove(_,C,A,ps,I):R&&!R.hasOnce&&(P!==ve||U>0&&U&64)?jt(R,C,A,!1,!0):(P===ve&&U&384||!D&&et&16)&&jt(B,C,A),I&&W(_)}(Tt&&(St=N&&N.onVnodeUnmounted)||gt)&&Oe(()=>{St&&fi(St,C,_),gt&&gs(_,null,C,"unmounted")},A)},W=_=>{const{type:C,el:A,anchor:I,transition:D}=_;if(C===ve){lt(A,I);return}if(C===fn){y(_);return}const P=()=>{o(A),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(_.shapeFlag&1&&D&&!D.persisted){const{leave:N,delayLeave:H}=D,B=()=>N(A,P);H?H(_.el,P,B):B()}else P()},lt=(_,C)=>{let A;for(;_!==C;)A=f(_),o(_),_=A;o(C)},Gt=(_,C,A)=>{const{bum:I,scope:D,job:P,subTree:N,um:H,m:B,a:R,parent:et,slots:{__:U}}=_;qc(B),qc(R),I&&ga(I),et&&st(U)&&U.forEach(Z=>{et.renderCache[Z]=void 0}),D.stop(),P&&(P.flags|=8,F(N,_,C,A)),H&&Oe(H,C),Oe(()=>{_.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},jt=(_,C,A,I=!1,D=!1,P=0)=>{for(let N=P;N<_.length;N++)F(_[N],C,A,I,D)},ji=_=>{if(_.shapeFlag&6)return ji(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const C=f(_.anchor||_.el),A=C&&C[Mg];return A?f(A):C};let js=!1;const Fr=(_,C,A)=>{_==null?C._vnode&&F(C._vnode,null,null,!0):b(C._vnode||null,_,C,null,null,null,A),C._vnode=_,js||(js=!0,Hc(),Pu(),js=!1)},ps={p:b,um:F,m:we,r:W,mt:J,mc:z,pc:nt,pbc:M,n:ji,o:t};return{render:Fr,hydrate:void 0,createApp:Zg(Fr)}}function xa({type:t,props:e},i){return i==="svg"&&t==="foreignObject"||i==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:i}function ms({effect:t,job:e},i){i?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function lm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Zu(t,e,i=!1){const s=t.children,o=e.children;if(st(s)&&st(o))for(let r=0;r<s.length;r++){const n=s[r];let a=o[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[r]=Gi(o[r]),a.el=n.el),!i&&a.patchFlag!==-2&&Zu(n,a)),a.type===ta&&(a.el=n.el),a.type===rs&&!a.el&&(a.el=n.el)}}function cm(t){const e=t.slice(),i=[0];let s,o,r,n,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(o=i[i.length-1],t[o]<c){e[s]=o,i.push(s);continue}for(r=0,n=i.length-1;r<n;)a=r+n>>1,t[i[a]]<c?r=a+1:n=a;c<t[i[r]]&&(r>0&&(e[s]=i[r-1]),i[r]=s)}}for(r=i.length,n=i[r-1];r-- >0;)i[r]=n,n=e[n];return i}function Qu(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Qu(e)}function qc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const hm=Symbol.for("v-scx"),dm=()=>dn(hm);function un(t,e,i){return tf(t,e,i)}function tf(t,e,i=zt){const{immediate:s,deep:o,flush:r,once:n}=i,a=Yt({},i),l=e&&s||!e&&r!=="post";let c;if(dr){if(r==="sync"){const p=dm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=xi,p.resume=xi,p.pause=xi,p}}const h=ye;a.call=(p,m,b)=>Ci(p,h,m,b);let d=!1;r==="post"?a.scheduler=p=>{Oe(p,h&&h.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(p,m)=>{m?p():Ul(p)}),a.augmentJob=p=>{e&&(p.flags|=4),d&&(p.flags|=2,h&&(p.id=h.uid,p.i=h))};const f=$g(t,e,a);return dr&&(c?c.push(f):l&&f()),f}function um(t,e,i){const s=this.proxy,o=Ut(t)?t.includes(".")?ef(s,t):()=>s[t]:t.bind(s,s);let r;ht(e)?r=e:(r=e.handler,i=e);const n=Sr(this),a=tf(o,r.bind(s),i);return n(),a}function ef(t,e){const i=e.split(".");return()=>{let s=t;for(let o=0;o<i.length&&s;o++)s=s[i[o]];return s}}const fm=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ti(e)}Modifiers`]||t[`${qe(e)}Modifiers`];function pm(t,e,...i){if(t.isUnmounted)return;const s=t.vnode.props||zt;let o=i;const r=e.startsWith("update:"),n=r&&fm(s,e.slice(7));n&&(n.trim&&(o=i.map(h=>Ut(h)?h.trim():h)),n.number&&(o=i.map(qp)));let a,l=s[a=pa(e)]||s[a=pa(ti(e))];!l&&r&&(l=s[a=pa(qe(e))]),l&&Ci(l,t,6,o);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ci(c,t,6,o)}}function sf(t,e,i=!1){const s=e.emitsCache,o=s.get(t);if(o!==void 0)return o;const r=t.emits;let n={},a=!1;if(!ht(t)){const l=c=>{const h=sf(c,e,!0);h&&(a=!0,Yt(n,h))};!i&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(It(t)&&s.set(t,null),null):(st(r)?r.forEach(l=>n[l]=null):Yt(n,r),It(t)&&s.set(t,n),n)}function Qn(t,e){return!t||!jn(e)?!1:(e=e.slice(2).replace(/Once$/,""),xt(t,e[0].toLowerCase()+e.slice(1))||xt(t,qe(e))||xt(t,e))}function Kc(t){const{type:e,vnode:i,proxy:s,withProxy:o,propsOptions:[r],slots:n,attrs:a,emit:l,render:c,renderCache:h,props:d,data:f,setupState:p,ctx:m,inheritAttrs:b}=t,v=Sn(t);let w,x;try{if(i.shapeFlag&4){const y=o||s,k=y;w=vi(c.call(k,y,h,d,p,f,m)),x=a}else{const y=e;w=vi(y.length>1?y(d,{attrs:a,slots:n,emit:l}):y(d,null)),x=e.props?a:gm(a)}}catch(y){Yo.length=0,Jn(y,t,1),w=oe(rs)}let S=w;if(x&&b!==!1){const y=Object.keys(x),{shapeFlag:k}=S;y.length&&k&7&&(r&&y.some(zl)&&(x=mm(x,r)),S=no(S,x,!1,!0))}return i.dirs&&(S=no(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(i.dirs):i.dirs),i.transition&&jl(S,i.transition),w=S,Sn(v),w}const gm=t=>{let e;for(const i in t)(i==="class"||i==="style"||jn(i))&&((e||(e={}))[i]=t[i]);return e},mm=(t,e)=>{const i={};for(const s in t)(!zl(s)||!(s.slice(9)in e))&&(i[s]=t[s]);return i};function bm(t,e,i){const{props:s,children:o,component:r}=t,{props:n,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(i&&l>=0){if(l&1024)return!0;if(l&16)return s?Yc(s,n,c):!!n;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const f=h[d];if(n[f]!==s[f]&&!Qn(c,f))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===n?!1:s?n?Yc(s,n,c):!0:!!n;return!1}function Yc(t,e,i){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(e[r]!==t[r]&&!Qn(i,r))return!0}return!1}function vm({vnode:t,parent:e},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=i,e=e.parent;else break}}const of=t=>t.__isSuspense;function ym(t,e){e&&e.pendingBranch?st(t)?e.effects.push(...t):e.effects.push(t):Eg(t)}const ve=Symbol.for("v-fgt"),ta=Symbol.for("v-txt"),rs=Symbol.for("v-cmt"),fn=Symbol.for("v-stc"),Yo=[];let Ie=null;function ie(t=!1){Yo.push(Ie=t?null:[])}function _m(){Yo.pop(),Ie=Yo[Yo.length-1]||null}let hr=1;function Xc(t,e=!1){hr+=t,t<0&&Ie&&e&&(Ie.hasOnce=!0)}function rf(t){return t.dynamicChildren=hr>0?Ie||Zs:null,_m(),hr>0&&Ie&&Ie.push(t),t}function $e(t,e,i,s,o,r){return rf(ut(t,e,i,s,o,r,!0))}function sl(t,e,i,s,o){return rf(oe(t,e,i,s,o,!0))}function An(t){return t?t.__v_isVNode===!0:!1}function Co(t,e){return t.type===e.type&&t.key===e.key}const nf=({key:t})=>t??null,pn=({ref:t,ref_key:e,ref_for:i})=>(typeof t=="number"&&(t=""+t),t!=null?Ut(t)||ue(t)||ht(t)?{i:_i,r:t,k:e,f:!!i}:t:null);function ut(t,e=null,i=null,s=0,o=null,r=t===ve?0:1,n=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&nf(e),ref:e&&pn(e),scopeId:Ru,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:_i};return a?(Yl(l,i),r&128&&t.normalize(l)):i&&(l.shapeFlag|=Ut(i)?8:16),hr>0&&!n&&Ie&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ie.push(l),l}const oe=xm;function xm(t,e=null,i=null,s=0,o=null,r=!1){if((!t||t===jg)&&(t=rs),An(t)){const a=no(t,e,!0);return i&&Yl(a,i),hr>0&&!r&&Ie&&(a.shapeFlag&6?Ie[Ie.indexOf(t)]=a:Ie.push(a)),a.patchFlag=-2,a}if(Dm(t)&&(t=t.__vccOpts),e){e=wm(e);let{class:a,style:l}=e;a&&!Ut(a)&&(e.class=Pl(a)),It(l)&&(wr(l)&&!st(l)&&(l=Yt({},l)),e.style=Ol(l))}const n=Ut(t)?1:of(t)?128:Dg(t)?64:It(t)?4:ht(t)?2:0;return ut(t,e,i,s,o,n,r,!0)}function wm(t){return t?wr(t)||qu(t)?Yt({},t):t:null}function no(t,e,i=!1,s=!1){const{props:o,ref:r,patchFlag:n,children:a,transition:l}=t,c=e?Cm(o||{},e):o,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&nf(c),ref:e&&e.ref?i&&r?st(r)?r.concat(pn(e)):[r,pn(e)]:pn(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ve?n===-1?16:n|16:n,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&no(t.ssContent),ssFallback:t.ssFallback&&no(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&jl(h,l.clone(h)),h}function af(t=" ",e=0){return oe(ta,null,t,e)}function km(t,e){const i=oe(fn,null,t);return i.staticCount=e,i}function Nr(t="",e=!1){return e?(ie(),sl(rs,null,t)):oe(rs,null,t)}function vi(t){return t==null||typeof t=="boolean"?oe(rs):st(t)?oe(ve,null,t.slice()):An(t)?Gi(t):oe(ta,null,String(t))}function Gi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:no(t)}function Yl(t,e){let i=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(st(e))i=16;else if(typeof e=="object")if(s&65){const o=e.default;o&&(o._c&&(o._d=!1),Yl(t,o()),o._c&&(o._d=!0));return}else{i=32;const o=e._;!o&&!qu(e)?e._ctx=_i:o===3&&_i&&(_i.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ht(e)?(e={default:e,_ctx:_i},i=32):(e=String(e),s&64?(i=16,e=[af(e)]):i=8);t.children=e,t.shapeFlag|=i}function Cm(...t){const e={};for(let i=0;i<t.length;i++){const s=t[i];for(const o in s)if(o==="class")e.class!==s.class&&(e.class=Pl([e.class,s.class]));else if(o==="style")e.style=Ol([e.style,s.style]);else if(jn(o)){const r=e[o],n=s[o];n&&r!==n&&!(st(r)&&r.includes(n))&&(e[o]=r?[].concat(r,n):n)}else o!==""&&(e[o]=s[o])}return e}function fi(t,e,i,s=null){Ci(t,e,7,[i,s])}const Sm=Uu();let $m=0;function Am(t,e,i){const s=t.type,o=(e?e.appContext:t.appContext)||Sm,r={uid:$m++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yu(s,o),emitsOptions:sf(s,o),emit:null,emitted:null,propsDefaults:zt,inheritAttrs:s.inheritAttrs,ctx:zt,data:zt,props:zt,attrs:zt,slots:zt,refs:zt,setupState:zt,setupContext:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=pm.bind(null,r),t.ce&&t.ce(r),r}let ye=null,Tn,ol;{const t=Yn(),e=(i,s)=>{let o;return(o=t[i])||(o=t[i]=[]),o.push(s),r=>{o.length>1?o.forEach(n=>n(r)):o[0](r)}};Tn=e("__VUE_INSTANCE_SETTERS__",i=>ye=i),ol=e("__VUE_SSR_SETTERS__",i=>dr=i)}const Sr=t=>{const e=ye;return Tn(t),t.scope.on(),()=>{t.scope.off(),Tn(e)}},Gc=()=>{ye&&ye.scope.off(),Tn(null)};function lf(t){return t.vnode.shapeFlag&4}let dr=!1;function Tm(t,e=!1,i=!1){e&&ol(e);const{props:s,children:o}=t.vnode,r=lf(t);tm(t,s,r,e),om(t,o,i||e);const n=r?Em(t,e):void 0;return e&&ol(!1),n}function Em(t,e){const i=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Wg);const{setup:s}=i;if(s){Bi();const o=t.setupContext=s.length>1?Mm(t):null,r=Sr(t),n=kr(s,t,0,[t.props,o]),a=lu(n);if(Hi(),r(),(a||t.sp)&&!qo(t)&&Lu(t),a){if(n.then(Gc,Gc),e)return n.then(l=>{Jc(t,l)}).catch(l=>{Jn(l,t,0)});t.asyncDep=n}else Jc(t,n)}else cf(t)}function Jc(t,e,i){ht(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:It(e)&&(t.setupState=Mu(e)),cf(t)}function cf(t,e,i){const s=t.type;t.render||(t.render=s.render||xi);{const o=Sr(t);Bi();try{qg(t)}finally{Hi(),o()}}}const zm={get(t,e){return he(t,"get",""),t[e]}};function Mm(t){const e=i=>{t.exposed=i||{}};return{attrs:new Proxy(t.attrs,zm),slots:t.slots,emit:t.emit,expose:e}}function Xl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Mu(_g(t.exposed)),{get(e,i){if(i in e)return e[i];if(i in Ko)return Ko[i](t)},has(e,i){return i in e||i in Ko}})):t.proxy}function Dm(t){return ht(t)&&"__vccOpts"in t}const $s=(t,e)=>Cg(t,e,dr);function rl(t,e,i){const s=arguments.length;return s===2?It(e)&&!st(e)?An(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(s>3?i=Array.prototype.slice.call(arguments,2):s===3&&An(i)&&(i=[i]),oe(t,e,i))}const hf="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nl;const Zc=typeof window<"u"&&window.trustedTypes;if(Zc)try{nl=Zc.createPolicy("vue",{createHTML:t=>t})}catch{}const df=nl?t=>nl.createHTML(t):t=>t,Om="http://www.w3.org/2000/svg",Pm="http://www.w3.org/1998/Math/MathML",Ii=typeof document<"u"?document:null,Qc=Ii&&Ii.createElement("template"),Im={insert:(t,e,i)=>{e.insertBefore(t,i||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,i,s)=>{const o=e==="svg"?Ii.createElementNS(Om,t):e==="mathml"?Ii.createElementNS(Pm,t):i?Ii.createElement(t,{is:i}):Ii.createElement(t);return t==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:t=>Ii.createTextNode(t),createComment:t=>Ii.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ii.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,i,s,o,r){const n=i?i.previousSibling:e.lastChild;if(o&&(o===r||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),i),!(o===r||!(o=o.nextSibling)););else{Qc.innerHTML=df(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Qc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,i)}return[n?n.nextSibling:e.firstChild,i?i.previousSibling:e.lastChild]}},Rm=Symbol("_vtc");function Lm(t,e,i){const s=t[Rm];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):i?t.setAttribute("class",e):t.className=e}const th=Symbol("_vod"),Fm=Symbol("_vsh"),Bm=Symbol(""),Hm=/(^|;)\s*display\s*:/;function Vm(t,e,i){const s=t.style,o=Ut(i);let r=!1;if(i&&!o){if(e)if(Ut(e))for(const n of e.split(";")){const a=n.slice(0,n.indexOf(":")).trim();i[a]==null&&gn(s,a,"")}else for(const n in e)i[n]==null&&gn(s,n,"");for(const n in i)n==="display"&&(r=!0),gn(s,n,i[n])}else if(o){if(e!==i){const n=s[Bm];n&&(i+=";"+n),s.cssText=i,r=Hm.test(i)}}else e&&t.removeAttribute("style");th in t&&(t[th]=r?s.display:"",t[Fm]&&(s.display="none"))}const eh=/\s*!important$/;function gn(t,e,i){if(st(i))i.forEach(s=>gn(t,e,s));else if(i==null&&(i=""),e.startsWith("--"))t.setProperty(e,i);else{const s=Nm(t,e);eh.test(i)?t.setProperty(qe(s),i.replace(eh,""),"important"):t[s]=i}}const ih=["Webkit","Moz","ms"],wa={};function Nm(t,e){const i=wa[e];if(i)return i;let s=ti(e);if(s!=="filter"&&s in t)return wa[e]=s;s=hu(s);for(let o=0;o<ih.length;o++){const r=ih[o]+s;if(r in t)return wa[e]=r}return e}const sh="http://www.w3.org/1999/xlink";function oh(t,e,i,s,o,r=Zp(e)){s&&e.startsWith("xlink:")?i==null?t.removeAttributeNS(sh,e.slice(6,e.length)):t.setAttributeNS(sh,e,i):i==null||r&&!du(i)?t.removeAttribute(e):t.setAttribute(e,r?"":hs(i)?String(i):i)}function rh(t,e,i,s,o){if(e==="innerHTML"||e==="textContent"){i!=null&&(t[e]=e==="innerHTML"?df(i):i);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=i==null?t.type==="checkbox"?"on":"":String(i);(a!==l||!("_value"in t))&&(t.value=l),i==null&&t.removeAttribute(e),t._value=i;return}let n=!1;if(i===""||i==null){const a=typeof t[e];a==="boolean"?i=du(i):i==null&&a==="string"?(i="",n=!0):a==="number"&&(i=0,n=!0)}try{t[e]=i}catch{}n&&t.removeAttribute(o||e)}function Um(t,e,i,s){t.addEventListener(e,i,s)}function jm(t,e,i,s){t.removeEventListener(e,i,s)}const nh=Symbol("_vei");function Wm(t,e,i,s,o=null){const r=t[nh]||(t[nh]={}),n=r[e];if(s&&n)n.value=s;else{const[a,l]=qm(e);if(s){const c=r[e]=Xm(s,o);Um(t,a,c,l)}else n&&(jm(t,a,n,l),r[e]=void 0)}}const ah=/(?:Once|Passive|Capture)$/;function qm(t){let e;if(ah.test(t)){e={};let s;for(;s=t.match(ah);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):qe(t.slice(2)),e]}let ka=0;const Km=Promise.resolve(),Ym=()=>ka||(Km.then(()=>ka=0),ka=Date.now());function Xm(t,e){const i=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=i.attached)return;Ci(Gm(s,i.value),e,5,[s])};return i.value=t,i.attached=Ym(),i}function Gm(t,e){if(st(e)){const i=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{i.call(t),t._stopped=!0},e.map(s=>o=>!o._stopped&&s&&s(o))}else return e}const lh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Jm=(t,e,i,s,o,r)=>{const n=o==="svg";e==="class"?Lm(t,s,n):e==="style"?Vm(t,i,s):jn(e)?zl(e)||Wm(t,e,i,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Zm(t,e,s,n))?(rh(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&oh(t,e,s,n,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ut(s))?rh(t,ti(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),oh(t,e,s,n))};function Zm(t,e,i,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&lh(e)&&ht(i));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return lh(e)&&Ut(i)?!1:e in t}const ch={};/*! #__NO_SIDE_EFFECTS__ */function Qm(t,e,i){const s=Cr(t,e);qn(s)&&Yt(s,e);class o extends Gl{constructor(n){super(s,n,i)}}return o.def=s,o}const tb=typeof HTMLElement<"u"?HTMLElement:class{};class Gl extends tb{constructor(e,i={},s=dh){super(),this._def=e,this._props=i,this._createApp=s,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._ob=null,this.shadowRoot&&s!==dh?this._root=this.shadowRoot:e.shadowRoot!==!1?(this.attachShadow({mode:"open"}),this._root=this.shadowRoot):this._root=this}connectedCallback(){if(!this.isConnected)return;!this.shadowRoot&&!this._resolved&&this._parseSlots(),this._connected=!0;let e=this;for(;e=e&&(e.parentNode||e.host);)if(e instanceof Gl){this._parent=e;break}this._instance||(this._resolved?this._mount(this._def):e&&e._pendingResolve?this._pendingResolve=e._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef()}):this._resolveDef())}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._inheritParentContext(e))}_inheritParentContext(e=this._parent){e&&this._app&&Object.setPrototypeOf(this._app._context.provides,e._instance.provides)}disconnectedCallback(){this._connected=!1,Nl(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null)})}_resolveDef(){if(this._pendingResolve)return;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);this._ob=new MutationObserver(s=>{for(const o of s)this._setAttr(o.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(s,o=!1)=>{this._resolved=!0,this._pendingResolve=void 0;const{props:r,styles:n}=s;let a;if(r&&!st(r))for(const l in r){const c=r[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=Rc(this._props[l])),(a||(a=Object.create(null)))[ti(l)]=!0)}this._numberProps=a,this._resolveProps(s),this.shadowRoot&&this._applyStyles(n),this._mount(s)},i=this._def.__asyncLoader;i?this._pendingResolve=i().then(s=>{s.configureApp=this._def.configureApp,e(this._def=s,!0)}):e(this._def)}_mount(e){this._app=this._createApp(e),this._inheritParentContext(),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const i=this._instance&&this._instance.exposed;if(i)for(const s in i)xt(this,s)||Object.defineProperty(this,s,{get:()=>Gn(i[s])})}_resolveProps(e){const{props:i}=e,s=st(i)?i:Object.keys(i||{});for(const o of Object.keys(this))o[0]!=="_"&&s.includes(o)&&this._setProp(o,this[o]);for(const o of s.map(ti))Object.defineProperty(this,o,{get(){return this._getProp(o)},set(r){this._setProp(o,r,!0,!0)}})}_setAttr(e){if(e.startsWith("data-v-"))return;const i=this.hasAttribute(e);let s=i?this.getAttribute(e):ch;const o=ti(e);i&&this._numberProps&&this._numberProps[o]&&(s=Rc(s)),this._setProp(o,s,!1,!0)}_getProp(e){return this._props[e]}_setProp(e,i,s=!0,o=!1){if(i!==this._props[e]&&(i===ch?delete this._props[e]:(this._props[e]=i,e==="key"&&this._app&&(this._app._ceVNode.key=i)),o&&this._instance&&this._update(),s)){const r=this._ob;r&&r.disconnect(),i===!0?this.setAttribute(qe(e),""):typeof i=="string"||typeof i=="number"?this.setAttribute(qe(e),i+""):i||this.removeAttribute(qe(e)),r&&r.observe(this,{attributes:!0})}}_update(){const e=this._createVNode();this._app&&(e.appContext=this._app._context),ib(e,this._root)}_createVNode(){const e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));const i=oe(this._def,Yt(e,this._props));return this._instance||(i.ce=s=>{this._instance=s,s.ce=this,s.isCE=!0;const o=(r,n)=>{this.dispatchEvent(new CustomEvent(r,qn(n[0])?Yt({detail:n},n[0]):{detail:n}))};s.emit=(r,...n)=>{o(r,n),qe(r)!==r&&o(qe(r),n)},this._setParent()}),i}_applyStyles(e,i){if(!e)return;if(i){if(i===this._def||this._styleChildren.has(i))return;this._styleChildren.add(i)}const s=this._nonce;for(let o=e.length-1;o>=0;o--){const r=document.createElement("style");s&&r.setAttribute("nonce",s),r.textContent=e[o],this.shadowRoot.prepend(r)}}_parseSlots(){const e=this._slots={};let i;for(;i=this.firstChild;){const s=i.nodeType===1&&i.getAttribute("slot")||"default";(e[s]||(e[s]=[])).push(i),this.removeChild(i)}}_renderSlots(){const e=(this._teleportTarget||this).querySelectorAll("slot"),i=this._instance.type.__scopeId;for(let s=0;s<e.length;s++){const o=e[s],r=o.getAttribute("name")||"default",n=this._slots[r],a=o.parentNode;if(n)for(const l of n){if(i&&l.nodeType===1){const c=i+"-s",h=document.createTreeWalker(l,1);l.setAttribute(c,"");let d;for(;d=h.nextNode();)d.setAttribute(c,"")}a.insertBefore(l,o)}else for(;o.firstChild;)a.insertBefore(o.firstChild,o);a.removeChild(o)}}_injectChildStyle(e){this._applyStyles(e.styles,e)}_removeChildStyle(e){}}const eb=Yt({patchProp:Jm},Im);let hh;function uf(){return hh||(hh=nm(eb))}const ib=(...t)=>{uf().render(...t)},dh=(...t)=>{const e=uf().createApp(...t),{mount:i}=e;return e.mount=s=>{const o=ob(s);if(!o)return;const r=e._component;!ht(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const n=i(o,!1,sb(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),n},e};function sb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ob(t){return Ut(t)?document.querySelector(t):t}var ff=Object.defineProperty,rb=Object.defineProperties,nb=Object.getOwnPropertyDescriptor,ab=Object.getOwnPropertyDescriptors,uh=Object.getOwnPropertySymbols,lb=Object.prototype.hasOwnProperty,cb=Object.prototype.propertyIsEnumerable,Ca=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Jl=t=>{throw TypeError(t)},fh=(t,e,i)=>e in t?ff(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Ni=(t,e)=>{for(var i in e||(e={}))lb.call(e,i)&&fh(t,i,e[i]);if(uh)for(var i of uh(e))cb.call(e,i)&&fh(t,i,e[i]);return t},$r=(t,e)=>rb(t,ab(e)),u=(t,e,i,s)=>{for(var o=s>1?void 0:s?nb(e,i):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(o=(s?n(e,i,o):n(o))||o);return s&&o&&ff(e,i,o),o},pf=(t,e,i)=>e.has(t)||Jl("Cannot "+i),hb=(t,e,i)=>(pf(t,e,"read from private field"),e.get(t)),db=(t,e,i)=>e.has(t)?Jl("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),ub=(t,e,i,s)=>(pf(t,e,"write to private field"),e.set(t,i),i),fb=function(t,e){this[0]=t,this[1]=e},pb=t=>{var e=t[Ca("asyncIterator")],i=!1,s,o={};return e==null?(e=t[Ca("iterator")](),s=r=>o[r]=n=>e[r](n)):(e=e.call(t),s=r=>o[r]=n=>{if(i){if(i=!1,r==="throw")throw n;return n}return i=!0,{done:!1,value:new fb(new Promise(a=>{var l=e[r](n);l instanceof Object||Jl("Object expected"),a(l)}),1)}}),o[Ca("iterator")]=()=>o,s("next"),"throw"in e?s("throw"):o.throw=r=>{throw r},"return"in e&&s("return"),o},So=new WeakMap,$o=new WeakMap,Ao=new WeakMap,Sa=new WeakSet,Ur=new WeakMap,Ui=class{constructor(t,e){this.handleFormData=i=>{const s=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!s&&!n&&typeof o=="string"&&o.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(a=>{i.formData.append(o,a.toString())}):i.formData.append(o,r.toString()))},this.handleFormSubmit=i=>{var s;const o=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=So.get(this.form))==null||s.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!o&&!r(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ur.set(this.host,[])},this.handleInteraction=i=>{const s=Ur.get(this.host);s.includes(i.type)||s.push(i.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Ni({form:i=>{const s=i.form;if(s){const r=i.getRootNode().querySelector(`#${s}`);if(r)return r}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var s;return(s=i.disabled)!=null?s:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,s)=>i.value=s,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Ur.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ur.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,So.has(this.form)?So.get(this.form).add(this.host):So.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),$o.has(this.form)||($o.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ao.has(this.form)||(Ao.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=So.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),$o.has(this.form)&&(this.form.reportValidity=$o.get(this.form),$o.delete(this.form)),Ao.has(this.form)&&(this.form.checkValidity=Ao.get(this.form),Ao.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Sa.add(t):Sa.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{e.hasAttribute(s)&&i.setAttribute(s,e.getAttribute(s))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=!!Sa.has(e),s=!!e.required;e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},ea=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),gb=Object.freeze($r(Ni({},ea),{valid:!1,valueMissing:!0})),mb=Object.freeze($r(Ni({},ea),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mn=globalThis,Zl=mn.ShadowRoot&&(mn.ShadyCSS===void 0||mn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ql=Symbol(),ph=new WeakMap;let gf=class{constructor(e,i,s){if(this._$cssResult$=!0,s!==Ql)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(Zl&&e===void 0){const s=i!==void 0&&i.length===1;s&&(e=ph.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ph.set(i,e))}return e}toString(){return this.cssText}};const bb=t=>new gf(typeof t=="string"?t:t+"",void 0,Ql),X=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((s,o,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1],t[0]);return new gf(i,t,Ql)},vb=(t,e)=>{if(Zl)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const s=document.createElement("style"),o=mn.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}},gh=Zl?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const s of e.cssRules)i+=s.cssText;return bb(i)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yb,defineProperty:_b,getOwnPropertyDescriptor:xb,getOwnPropertyNames:wb,getOwnPropertySymbols:kb,getPrototypeOf:Cb}=Object,ia=globalThis,mh=ia.trustedTypes,Sb=mh?mh.emptyScript:"",$b=ia.reactiveElementPolyfillSupport,Xo=(t,e)=>t,ao={toAttribute(t,e){switch(e){case Boolean:t=t?Sb:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},tc=(t,e)=>!yb(t,e),bh={attribute:!0,type:String,converter:ao,reflect:!1,useDefault:!1,hasChanged:tc};Symbol.metadata??=Symbol("metadata"),ia.litPropertyMetadata??=new WeakMap;let Gs=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=bh){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(e,s,i);o!==void 0&&_b(this.prototype,e,o)}}static getPropertyDescriptor(e,i,s){const{get:o,set:r}=xb(this.prototype,e)??{get(){return this[i]},set(n){this[i]=n}};return{get:o,set(n){const a=o?.call(this);r?.call(this,n),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??bh}static _$Ei(){if(this.hasOwnProperty(Xo("elementProperties")))return;const e=Cb(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Xo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xo("properties"))){const i=this.properties,s=[...wb(i),...kb(i)];for(const o of s)this.createProperty(o,i[o])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[s,o]of i)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[i,s]of this.elementProperties){const o=this._$Eu(i,s);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const o of s)i.unshift(gh(o))}else e!==void 0&&i.push(gh(e));return i}static _$Eu(e,i){const s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vb(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,i,s){this._$AK(e,s)}_$ET(e,i){const s=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,s);if(o!==void 0&&s.reflect===!0){const r=(s.converter?.toAttribute!==void 0?s.converter:ao).toAttribute(i,s.type);this._$Em=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,i){const s=this.constructor,o=s._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const r=s.getPropertyOptions(o),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:ao;this._$Em=o;const a=n.fromAttribute(i,r.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,i,s){if(e!==void 0){const o=this.constructor,r=this[e];if(s??=o.getPropertyOptions(e),!((s.hasChanged??tc)(r,i)||s.useDefault&&s.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,i,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,i,{useDefault:s,reflect:o,wrapped:r},n){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??i??this[e]),r!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(i=void 0),this._$AL.set(e,i)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,r]of s){const{wrapped:n}=r,a=this[o];n!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,r,a)}}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(i)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(i)}willUpdate(e){}_$AE(e){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(e){}firstUpdated(e){}};Gs.elementStyles=[],Gs.shadowRootOptions={mode:"open"},Gs[Xo("elementProperties")]=new Map,Gs[Xo("finalized")]=new Map,$b?.({ReactiveElement:Gs}),(ia.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ec=globalThis,En=ec.trustedTypes,vh=En?En.createPolicy("lit-html",{createHTML:t=>t}):void 0,mf="$lit$",Zi=`lit$${Math.random().toFixed(9).slice(2)}$`,bf="?"+Zi,Ab=`<${bf}>`,Ps=document,ur=()=>Ps.createComment(""),fr=t=>t===null||typeof t!="object"&&typeof t!="function",ic=Array.isArray,Tb=t=>ic(t)||typeof t?.[Symbol.iterator]=="function",$a=`[ 	
\f\r]`,To=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yh=/-->/g,_h=/>/g,bs=RegExp(`>|${$a}(?:([^\\s"'>=/]+)(${$a}*=${$a}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xh=/'/g,wh=/"/g,vf=/^(?:script|style|textarea|title)$/i,Eb=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),E=Eb(1),Re=Symbol.for("lit-noChange"),Ot=Symbol.for("lit-nothing"),kh=new WeakMap,As=Ps.createTreeWalker(Ps,129);function yf(t,e){if(!ic(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return vh!==void 0?vh.createHTML(e):e}const zb=(t,e)=>{const i=t.length-1,s=[];let o,r=e===2?"<svg>":e===3?"<math>":"",n=To;for(let a=0;a<i;a++){const l=t[a];let c,h,d=-1,f=0;for(;f<l.length&&(n.lastIndex=f,h=n.exec(l),h!==null);)f=n.lastIndex,n===To?h[1]==="!--"?n=yh:h[1]!==void 0?n=_h:h[2]!==void 0?(vf.test(h[2])&&(o=RegExp("</"+h[2],"g")),n=bs):h[3]!==void 0&&(n=bs):n===bs?h[0]===">"?(n=o??To,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?bs:h[3]==='"'?wh:xh):n===wh||n===xh?n=bs:n===yh||n===_h?n=To:(n=bs,o=void 0);const p=n===bs&&t[a+1].startsWith("/>")?" ":"";r+=n===To?l+Ab:d>=0?(s.push(c),l.slice(0,d)+mf+l.slice(d)+Zi+p):l+Zi+(d===-2?a:p)}return[yf(t,r+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class pr{constructor({strings:e,_$litType$:i},s){let o;this.parts=[];let r=0,n=0;const a=e.length-1,l=this.parts,[c,h]=zb(e,i);if(this.el=pr.createElement(c,s),As.currentNode=this.el.content,i===2||i===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=As.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(mf)){const f=h[n++],p=o.getAttribute(d).split(Zi),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:m[2],strings:p,ctor:m[1]==="."?Db:m[1]==="?"?Ob:m[1]==="@"?Pb:sa}),o.removeAttribute(d)}else d.startsWith(Zi)&&(l.push({type:6,index:r}),o.removeAttribute(d));if(vf.test(o.tagName)){const d=o.textContent.split(Zi),f=d.length-1;if(f>0){o.textContent=En?En.emptyScript:"";for(let p=0;p<f;p++)o.append(d[p],ur()),As.nextNode(),l.push({type:2,index:++r});o.append(d[f],ur())}}}else if(o.nodeType===8)if(o.data===bf)l.push({type:2,index:r});else{let d=-1;for(;(d=o.data.indexOf(Zi,d+1))!==-1;)l.push({type:7,index:r}),d+=Zi.length-1}r++}}static createElement(e,i){const s=Ps.createElement("template");return s.innerHTML=e,s}}function lo(t,e,i=t,s){if(e===Re)return e;let o=s!==void 0?i._$Co?.[s]:i._$Cl;const r=fr(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),r===void 0?o=void 0:(o=new r(t),o._$AT(t,i,s)),s!==void 0?(i._$Co??=[])[s]=o:i._$Cl=o),o!==void 0&&(e=lo(t,o._$AS(t,e.values),o,s)),e}class Mb{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:s}=this._$AD,o=(e?.creationScope??Ps).importNode(i,!0);As.currentNode=o;let r=As.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new Ar(r,r.nextSibling,this,e):l.type===1?c=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(c=new Ib(r,this,e)),this._$AV.push(c),l=s[++a]}n!==l?.index&&(r=As.nextNode(),n++)}return As.currentNode=Ps,o}p(e){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,i),i+=s.strings.length-2):s._$AI(e[i])),i++}}class Ar{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,i,s,o){this.type=2,this._$AH=Ot,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&e?.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=lo(this,e,i),fr(e)?e===Ot||e==null||e===""?(this._$AH!==Ot&&this._$AR(),this._$AH=Ot):e!==this._$AH&&e!==Re&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Tb(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Ot&&fr(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ps.createTextNode(e)),this._$AH=e}$(e){const{values:i,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=pr.createElement(yf(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(i);else{const r=new Mb(o,this),n=r.u(this.options);r.p(i),this.T(n),this._$AH=r}}_$AC(e){let i=kh.get(e.strings);return i===void 0&&kh.set(e.strings,i=new pr(e)),i}k(e){ic(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,o=0;for(const r of e)o===i.length?i.push(s=new Ar(this.O(ur()),this.O(ur()),this,this.options)):s=i[o],s._$AI(r),o++;o<i.length&&(this._$AR(s&&s._$AB.nextSibling,o),i.length=o)}_$AR(e=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class sa{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,s,o,r){this.type=1,this._$AH=Ot,this._$AN=void 0,this.element=e,this.name=i,this._$AM=o,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Ot}_$AI(e,i=this,s,o){const r=this.strings;let n=!1;if(r===void 0)e=lo(this,e,i,0),n=!fr(e)||e!==this._$AH&&e!==Re,n&&(this._$AH=e);else{const a=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=lo(this,a[s+l],i,l),c===Re&&(c=this._$AH[l]),n||=!fr(c)||c!==this._$AH[l],c===Ot?e=Ot:e!==Ot&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}n&&!o&&this.j(e)}j(e){e===Ot?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let Db=class extends sa{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ot?void 0:e}};class Ob extends sa{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ot)}}class Pb extends sa{constructor(e,i,s,o,r){super(e,i,s,o,r),this.type=5}_$AI(e,i=this){if((e=lo(this,e,i,0)??Ot)===Re)return;const s=this._$AH,o=e===Ot&&s!==Ot||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==Ot&&(s===Ot||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ib{constructor(e,i,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){lo(this,e)}}const Rb=ec.litHtmlPolyfillSupport;Rb?.(pr,Ar),(ec.litHtmlVersions??=[]).push("3.3.1");const Lb=(t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(o===void 0){const r=i?.renderBefore??null;s._$litPart$=o=new Ar(e.insertBefore(ur(),r),r,void 0,i??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sc=globalThis;let Go=class extends Gs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Lb(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Re}};Go._$litElement$=!0,Go.finalized=!0,sc.litElementHydrateSupport?.({LitElement:Go});const Fb=sc.litElementPolyfillSupport;Fb?.({LitElement:Go});(sc.litElementVersions??=[]).push("4.2.1");var Bb=X`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Hb=X`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,po=(t="value")=>(e,i)=>{const s=e.constructor,o=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(r,n,a){var l;const c=s.getPropertyOptions(t),h=typeof c.attribute=="string"?c.attribute:t;if(r===h){const d=c.converter||ao,p=(typeof d=="function"?d:(l=d?.fromAttribute)!=null?l:ao.fromAttribute)(a,c.type);this[t]!==p&&(this[i]=p)}o.call(this,r,n,a)}},Fs=X`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,xe=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{const s=i.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Vb(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let i="";return[...e].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(i+=s.textContent)}),i}var al="";function ll(t){al=t}function Nb(t=""){if(!al){const e=[...document.getElementsByTagName("script")],i=e.find(s=>s.hasAttribute("data-shoelace"));if(i)ll(i.getAttribute("data-shoelace"));else{const s=e.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let o="";s&&(o=s.getAttribute("src")),ll(o.split("/").slice(0,-1).join("/"))}}return al.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Ub={name:"default",resolver:t=>Nb(`assets/icons/${t}.svg`)},jb=Ub,Ch={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Wb={name:"system",resolver:t=>t in Ch?`data:image/svg+xml,${encodeURIComponent(Ch[t])}`:""},qb=Wb,Kb=[jb,qb],cl=[];function Yb(t){cl.push(t)}function Xb(t){cl=cl.filter(e=>e!==t)}function Sh(t){return Kb.find(e=>e.name===t)}var Gb=X`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function L(t,e){const i=Ni({waitUntilFirstUpdate:!1},e);return(s,o)=>{const{update:r}=s,n=Array.isArray(t)?t:[t];s.update=function(a){n.forEach(l=>{const c=l;if(a.has(c)){const h=a.get(c),d=this[c];h!==d&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](h,d)}}),r.call(this,a)}}}var tt=X`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jb={attribute:!0,type:String,converter:ao,reflect:!1,hasChanged:tc},Zb=(t=Jb,e,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),s==="setter"&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),s==="accessor"){const{name:n}=i;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,t)},init(a){return a!==void 0&&this.C(n,void 0,t,a),a}}}if(s==="setter"){const{name:n}=i;return function(a){const l=this[n];e.call(this,a),this.requestUpdate(n,l,t)}}throw Error("Unsupported decorator location: "+s)};function g(t){return(e,i)=>typeof i=="object"?Zb(t,e,i):((s,o,r)=>{const n=o.hasOwnProperty(r);return o.constructor.createProperty(r,s),n?Object.getOwnPropertyDescriptor(o,r):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function G(t){return g({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Tr(t){return(e,i)=>{const s=typeof e=="function"?e:e[i];Object.assign(s,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _f=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(t,e){return(i,s,o)=>{const r=n=>n.renderRoot?.querySelector(t)??null;return _f(i,s,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qb(t){return(e,i)=>_f(e,i,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}var bn,Y=class extends Go{constructor(){super(),db(this,bn,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,Ni({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const s=customElements.get(t);if(!s){try{customElements.define(t,e,i)}catch{customElements.define(t,class extends e{},i)}return}let o=" (unknown version)",r=o;"version"in e&&e.version&&(o=" v"+e.version),"version"in s&&s.version&&(r=" v"+s.version),!(o&&r&&o===r)&&console.warn(`Attempted to register <${t}>${o}, but <${t}>${r} has already been registered.`)}attributeChangedCallback(t,e,i){hb(this,bn)||(this.constructor.elementProperties.forEach((s,o)=>{s.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),ub(this,bn,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}};bn=new WeakMap;Y.version="2.20.1";Y.dependencies={};u([g()],Y.prototype,"dir",2);u([g()],Y.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t0=(t,e)=>t?._$litType$!==void 0,xf=t=>t.strings===void 0,e0={},i0=(t,e=e0)=>t._$AH=e;var Eo=Symbol(),jr=Symbol(),Aa,Ta=new Map,At=class extends Y{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let s;if(e?.spriteSheet)return this.svg=E`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(s=await fetch(t,{mode:"cors"}),!s.ok)return s.status===410?Eo:jr}catch{return jr}try{const o=document.createElement("div");o.innerHTML=await s.text();const r=o.firstElementChild;if(((i=r?.tagName)==null?void 0:i.toLowerCase())!=="svg")return Eo;Aa||(Aa=new DOMParser);const a=Aa.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Eo}catch{return Eo}}connectedCallback(){super.connectedCallback(),Yb(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Xb(this)}getIconSource(){const t=Sh(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),s=i?Sh(this.library):void 0;if(!e){this.svg=null;return}let o=Ta.get(e);if(o||(o=this.resolveIcon(e,s),Ta.set(e,o)),!this.initialRender)return;const r=await o;if(r===jr&&Ta.delete(e),e===this.getIconSource().url){if(t0(r)){if(this.svg=r,s){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof s.mutator=="function"&&n&&s.mutator(n)}return}switch(r){case jr:case Eo:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(t=s?.mutator)==null||t.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};At.styles=[tt,Gb];u([G()],At.prototype,"svg",2);u([g({reflect:!0})],At.prototype,"name",2);u([g()],At.prototype,"src",2);u([g()],At.prototype,"label",2);u([g({reflect:!0})],At.prototype,"library",2);u([L("label")],At.prototype,"handleLabelChange",1);u([L(["name","src","library"])],At.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Er=t=>(...e)=>({_$litDirective$:t,values:e});let zr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,s){this._$Ct=e,this._$AM=i,this._$Ci=s}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=Er(class extends zr{constructor(t){if(super(t),t.type!==yi.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(e)}const i=t.element.classList;for(const s of this.st)s in e||(i.remove(s),this.st.delete(s));for(const s in e){const o=!!e[s];o===this.st.has(s)||this.nt?.has(s)||(o?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return Re}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=t=>t??Ot;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Is=Er(class extends zr{constructor(t){if(super(t),t.type!==yi.PROPERTY&&t.type!==yi.ATTRIBUTE&&t.type!==yi.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!xf(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Re||e===Ot)return e;const i=t.element,s=t.name;if(t.type===yi.PROPERTY){if(e===i[s])return Re}else if(t.type===yi.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(s))return Re}else if(t.type===yi.ATTRIBUTE&&i.getAttribute(s)===e+"")return Re;return i0(t),e}});var Kt=class extends Y{constructor(){super(...arguments),this.formControlController=new Ui(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new xe(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return E`
      <div
        class=${Q({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${Q({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${K(this.value)}
            .indeterminate=${Is(this.indeterminate)}
            .checked=${Is(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?E`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?E`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Kt.styles=[tt,Fs,Hb];Kt.dependencies={"sl-icon":At};u([V('input[type="checkbox"]')],Kt.prototype,"input",2);u([G()],Kt.prototype,"hasFocus",2);u([g()],Kt.prototype,"title",2);u([g()],Kt.prototype,"name",2);u([g()],Kt.prototype,"value",2);u([g({reflect:!0})],Kt.prototype,"size",2);u([g({type:Boolean,reflect:!0})],Kt.prototype,"disabled",2);u([g({type:Boolean,reflect:!0})],Kt.prototype,"checked",2);u([g({type:Boolean,reflect:!0})],Kt.prototype,"indeterminate",2);u([po("checked")],Kt.prototype,"defaultChecked",2);u([g({reflect:!0})],Kt.prototype,"form",2);u([g({type:Boolean,reflect:!0})],Kt.prototype,"required",2);u([g({attribute:"help-text"})],Kt.prototype,"helpText",2);u([L("disabled",{waitUntilFirstUpdate:!0})],Kt.prototype,"handleDisabledChange",1);u([L(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Kt.prototype,"handleStateChange",1);var s0=X`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const hl=new Set,Js=new Map;let Ss,oc="ltr",rc="en";const wf=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(wf){const t=new MutationObserver(Cf);oc=document.documentElement.dir||"ltr",rc=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function kf(...t){t.map(e=>{const i=e.$code.toLowerCase();Js.has(i)?Js.set(i,Object.assign(Object.assign({},Js.get(i)),e)):Js.set(i,e),Ss||(Ss=e)}),Cf()}function Cf(){wf&&(oc=document.documentElement.dir||"ltr",rc=document.documentElement.lang||navigator.language),[...hl.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let o0=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){hl.add(this.host)}hostDisconnected(){hl.delete(this.host)}dir(){return`${this.host.dir||oc}`.toLowerCase()}lang(){return`${this.host.lang||rc}`.toLowerCase()}getTranslationData(e){var i,s;const o=new Intl.Locale(e.replace(/_/g,"-")),r=o?.language.toLowerCase(),n=(s=(i=o?.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&s!==void 0?s:"",a=Js.get(`${r}-${n}`),l=Js.get(r);return{locale:o,language:r,region:n,primary:a,secondary:l}}exists(e,i){var s;const{primary:o,secondary:r}=this.getTranslationData((s=i.lang)!==null&&s!==void 0?s:this.lang());return i=Object.assign({includeFallback:!1},i),!!(o&&o[e]||r&&r[e]||i.includeFallback&&Ss&&Ss[e])}term(e,...i){const{primary:s,secondary:o}=this.getTranslationData(this.lang());let r;if(s&&s[e])r=s[e];else if(o&&o[e])r=o[e];else if(Ss&&Ss[e])r=Ss[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof r=="function"?r(...i):r}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(e,i)}};var Sf={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};kf(Sf);var r0=Sf,yt=class extends o0{};kf(r0);var Mr=class extends Y{constructor(){super(...arguments),this.localize=new yt(this)}render(){return E`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Mr.styles=[tt,s0];var $f=new Map,n0=new WeakMap;function a0(t){return t??{keyframes:[],options:{duration:0}}}function $h(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function wt(t,e){$f.set(t,a0(e))}function Pt(t,e,i){const s=n0.get(t);if(s?.[e])return $h(s[e],i.dir);const o=$f.get(e);return o?$h(o,i.dir):{keyframes:[],options:{duration:0}}}function Bt(t,e,i){return new Promise(s=>{if(i?.duration===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(e,$r(Ni({},i),{duration:dl()?0:i.duration}));o.addEventListener("cancel",s,{once:!0}),o.addEventListener("finish",s,{once:!0})})}function Ah(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function dl(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function qt(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}function zn(t,e){return t.map(i=>$r(Ni({},i),{height:i.height==="auto"?`${e}px`:i.height}))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Th(t,e,i){return t?e(t):i?.(t)}var Ht=class ul extends Y{constructor(){super(...arguments),this.localize=new yt(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await qt(this.childrenContainer);const{keyframes:e,options:i}=Pt(this,"tree-item.collapse",{dir:this.localize.dir()});await Bt(this.childrenContainer,zn(e,this.childrenContainer.scrollHeight),i),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&ul.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await qt(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:i}=Pt(this,"tree-item.expand",{dir:this.localize.dir()});await Bt(this.childrenContainer,zn(e,this.childrenContainer.scrollHeight),i),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(i=>ul.isTreeItem(i)&&(e||!i.disabled)):[]}render(){const e=this.localize.dir()==="rtl",i=!this.loading&&(!this.isLeaf||this.lazy);return E`
      <div
        part="base"
        class="${Q({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":i,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${Q({"tree-item__expand-button":!0,"tree-item__expand-button--visible":i})}
            aria-hidden="true"
          >
            ${Th(this.loading,()=>E` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Th(this.selectable,()=>E`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Is(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};Ht.styles=[tt,Bb];Ht.dependencies={"sl-checkbox":Kt,"sl-icon":At,"sl-spinner":Mr};u([G()],Ht.prototype,"indeterminate",2);u([G()],Ht.prototype,"isLeaf",2);u([G()],Ht.prototype,"loading",2);u([G()],Ht.prototype,"selectable",2);u([g({type:Boolean,reflect:!0})],Ht.prototype,"expanded",2);u([g({type:Boolean,reflect:!0})],Ht.prototype,"selected",2);u([g({type:Boolean,reflect:!0})],Ht.prototype,"disabled",2);u([g({type:Boolean,reflect:!0})],Ht.prototype,"lazy",2);u([V("slot:not([name])")],Ht.prototype,"defaultSlot",2);u([V("slot[name=children]")],Ht.prototype,"childrenSlot",2);u([V(".tree-item__item")],Ht.prototype,"itemElement",2);u([V(".tree-item__children")],Ht.prototype,"childrenContainer",2);u([V(".tree-item__expand-button slot")],Ht.prototype,"expandButtonSlot",2);u([L("loading",{waitUntilFirstUpdate:!0})],Ht.prototype,"handleLoadingChange",1);u([L("disabled")],Ht.prototype,"handleDisabledChange",1);u([L("selected")],Ht.prototype,"handleSelectedChange",1);u([L("expanded",{waitUntilFirstUpdate:!0})],Ht.prototype,"handleExpandedChange",1);u([L("expanded",{waitUntilFirstUpdate:!0})],Ht.prototype,"handleExpandAnimation",1);u([L("lazy",{waitUntilFirstUpdate:!0})],Ht.prototype,"handleLazyChange",1);var Jo=Ht;wt("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});wt("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Jo.define("sl-tree-item");var l0=X`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,c0=X`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const ns=Math.min,Pe=Math.max,Mn=Math.round,Wr=Math.floor,wi=t=>({x:t,y:t}),h0={left:"right",right:"left",bottom:"top",top:"bottom"},d0={start:"end",end:"start"};function fl(t,e,i){return Pe(t,ns(e,i))}function go(t,e){return typeof t=="function"?t(e):t}function as(t){return t.split("-")[0]}function mo(t){return t.split("-")[1]}function Af(t){return t==="x"?"y":"x"}function nc(t){return t==="y"?"height":"width"}const u0=new Set(["top","bottom"]);function Fi(t){return u0.has(as(t))?"y":"x"}function ac(t){return Af(Fi(t))}function f0(t,e,i){i===void 0&&(i=!1);const s=mo(t),o=ac(t),r=nc(o);let n=o==="x"?s===(i?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(n=Dn(n)),[n,Dn(n)]}function p0(t){const e=Dn(t);return[pl(t),e,pl(e)]}function pl(t){return t.replace(/start|end/g,e=>d0[e])}const Eh=["left","right"],zh=["right","left"],g0=["top","bottom"],m0=["bottom","top"];function b0(t,e,i){switch(t){case"top":case"bottom":return i?e?zh:Eh:e?Eh:zh;case"left":case"right":return e?g0:m0;default:return[]}}function v0(t,e,i,s){const o=mo(t);let r=b0(as(t),i==="start",s);return o&&(r=r.map(n=>n+"-"+o),e&&(r=r.concat(r.map(pl)))),r}function Dn(t){return t.replace(/left|right|bottom|top/g,e=>h0[e])}function y0(t){return{top:0,right:0,bottom:0,left:0,...t}}function Tf(t){return typeof t!="number"?y0(t):{top:t,right:t,bottom:t,left:t}}function On(t){const{x:e,y:i,width:s,height:o}=t;return{width:s,height:o,top:i,left:e,right:e+s,bottom:i+o,x:e,y:i}}function Mh(t,e,i){let{reference:s,floating:o}=t;const r=Fi(e),n=ac(e),a=nc(n),l=as(e),c=r==="y",h=s.x+s.width/2-o.width/2,d=s.y+s.height/2-o.height/2,f=s[a]/2-o[a]/2;let p;switch(l){case"top":p={x:h,y:s.y-o.height};break;case"bottom":p={x:h,y:s.y+s.height};break;case"right":p={x:s.x+s.width,y:d};break;case"left":p={x:s.x-o.width,y:d};break;default:p={x:s.x,y:s.y}}switch(mo(e)){case"start":p[n]-=f*(i&&c?-1:1);break;case"end":p[n]+=f*(i&&c?-1:1);break}return p}const _0=async(t,e,i)=>{const{placement:s="bottom",strategy:o="absolute",middleware:r=[],platform:n}=i,a=r.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(e));let c=await n.getElementRects({reference:t,floating:e,strategy:o}),{x:h,y:d}=Mh(c,s,l),f=s,p={},m=0;for(let b=0;b<a.length;b++){const{name:v,fn:w}=a[b],{x,y:S,data:y,reset:k}=await w({x:h,y:d,initialPlacement:s,placement:f,strategy:o,middlewareData:p,rects:c,platform:n,elements:{reference:t,floating:e}});h=x??h,d=S??d,p={...p,[v]:{...p[v],...y}},k&&m<=50&&(m++,typeof k=="object"&&(k.placement&&(f=k.placement),k.rects&&(c=k.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:o}):k.rects),{x:h,y:d}=Mh(c,f,l)),b=-1)}return{x:h,y:d,placement:f,strategy:o,middlewareData:p}};async function lc(t,e){var i;e===void 0&&(e={});const{x:s,y:o,platform:r,rects:n,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=go(e,t),m=Tf(p),v=a[f?d==="floating"?"reference":"floating":d],w=On(await r.getClippingRect({element:(i=await(r.isElement==null?void 0:r.isElement(v)))==null||i?v:v.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),x=d==="floating"?{x:s,y:o,width:n.floating.width,height:n.floating.height}:n.reference,S=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),y=await(r.isElement==null?void 0:r.isElement(S))?await(r.getScale==null?void 0:r.getScale(S))||{x:1,y:1}:{x:1,y:1},k=On(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:x,offsetParent:S,strategy:l}):x);return{top:(w.top-k.top+m.top)/y.y,bottom:(k.bottom-w.bottom+m.bottom)/y.y,left:(w.left-k.left+m.left)/y.x,right:(k.right-w.right+m.right)/y.x}}const x0=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:s,placement:o,rects:r,platform:n,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=go(t,e)||{};if(c==null)return{};const d=Tf(h),f={x:i,y:s},p=ac(o),m=nc(p),b=await n.getDimensions(c),v=p==="y",w=v?"top":"left",x=v?"bottom":"right",S=v?"clientHeight":"clientWidth",y=r.reference[m]+r.reference[p]-f[p]-r.floating[m],k=f[p]-r.reference[p],$=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c));let T=$?$[S]:0;(!T||!await(n.isElement==null?void 0:n.isElement($)))&&(T=a.floating[S]||r.floating[m]);const z=y/2-k/2,O=T/2-b[m]/2-1,M=ns(d[w],O),q=ns(d[x],O),j=M,ot=T-b[m]-q,J=T/2-b[m]/2+z,dt=fl(j,J,ot),rt=!l.arrow&&mo(o)!=null&&J!==dt&&r.reference[m]/2-(J<j?M:q)-b[m]/2<0,it=rt?J<j?J-j:J-ot:0;return{[p]:f[p]+it,data:{[p]:dt,centerOffset:J-dt-it,...rt&&{alignmentOffset:it}},reset:rt}}}),w0=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,s;const{placement:o,middlewareData:r,rects:n,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:b=!0,...v}=go(t,e);if((i=r.arrow)!=null&&i.alignmentOffset)return{};const w=as(o),x=Fi(a),S=as(a)===a,y=await(l.isRTL==null?void 0:l.isRTL(c.floating)),k=f||(S||!b?[Dn(a)]:p0(a)),$=m!=="none";!f&&$&&k.push(...v0(a,b,m,y));const T=[a,...k],z=await lc(e,v),O=[];let M=((s=r.flip)==null?void 0:s.overflows)||[];if(h&&O.push(z[w]),d){const J=f0(o,n,y);O.push(z[J[0]],z[J[1]])}if(M=[...M,{placement:o,overflows:O}],!O.every(J=>J<=0)){var q,j;const J=(((q=r.flip)==null?void 0:q.index)||0)+1,dt=T[J];if(dt&&(!(d==="alignment"?x!==Fi(dt):!1)||M.every(nt=>nt.overflows[0]>0&&Fi(nt.placement)===x)))return{data:{index:J,overflows:M},reset:{placement:dt}};let rt=(j=M.filter(it=>it.overflows[0]<=0).sort((it,nt)=>it.overflows[1]-nt.overflows[1])[0])==null?void 0:j.placement;if(!rt)switch(p){case"bestFit":{var ot;const it=(ot=M.filter(nt=>{if($){const Rt=Fi(nt.placement);return Rt===x||Rt==="y"}return!0}).map(nt=>[nt.placement,nt.overflows.filter(Rt=>Rt>0).reduce((Rt,ge)=>Rt+ge,0)]).sort((nt,Rt)=>nt[1]-Rt[1])[0])==null?void 0:ot[0];it&&(rt=it);break}case"initialPlacement":rt=a;break}if(o!==rt)return{reset:{placement:rt}}}return{}}}},k0=new Set(["left","top"]);async function C0(t,e){const{placement:i,platform:s,elements:o}=t,r=await(s.isRTL==null?void 0:s.isRTL(o.floating)),n=as(i),a=mo(i),l=Fi(i)==="y",c=k0.has(n)?-1:1,h=r&&l?-1:1,d=go(e,t);let{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof m=="number"&&(p=a==="end"?m*-1:m),l?{x:p*h,y:f*c}:{x:f*c,y:p*h}}const S0=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,s;const{x:o,y:r,placement:n,middlewareData:a}=e,l=await C0(e,t);return n===((i=a.offset)==null?void 0:i.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:o+l.x,y:r+l.y,data:{...l,placement:n}}}}},$0=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:s,placement:o}=e,{mainAxis:r=!0,crossAxis:n=!1,limiter:a={fn:v=>{let{x:w,y:x}=v;return{x:w,y:x}}},...l}=go(t,e),c={x:i,y:s},h=await lc(e,l),d=Fi(as(o)),f=Af(d);let p=c[f],m=c[d];if(r){const v=f==="y"?"top":"left",w=f==="y"?"bottom":"right",x=p+h[v],S=p-h[w];p=fl(x,p,S)}if(n){const v=d==="y"?"top":"left",w=d==="y"?"bottom":"right",x=m+h[v],S=m-h[w];m=fl(x,m,S)}const b=a.fn({...e,[f]:p,[d]:m});return{...b,data:{x:b.x-i,y:b.y-s,enabled:{[f]:r,[d]:n}}}}}},A0=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,s;const{placement:o,rects:r,platform:n,elements:a}=e,{apply:l=()=>{},...c}=go(t,e),h=await lc(e,c),d=as(o),f=mo(o),p=Fi(o)==="y",{width:m,height:b}=r.floating;let v,w;d==="top"||d==="bottom"?(v=d,w=f===(await(n.isRTL==null?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(w=d,v=f==="end"?"top":"bottom");const x=b-h.top-h.bottom,S=m-h.left-h.right,y=ns(b-h[v],x),k=ns(m-h[w],S),$=!e.middlewareData.shift;let T=y,z=k;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(z=S),(s=e.middlewareData.shift)!=null&&s.enabled.y&&(T=x),$&&!f){const M=Pe(h.left,0),q=Pe(h.right,0),j=Pe(h.top,0),ot=Pe(h.bottom,0);p?z=m-2*(M!==0||q!==0?M+q:Pe(h.left,h.right)):T=b-2*(j!==0||ot!==0?j+ot:Pe(h.top,h.bottom))}await l({...e,availableWidth:z,availableHeight:T});const O=await n.getDimensions(a.floating);return m!==O.width||b!==O.height?{reset:{rects:!0}}:{}}}};function oa(){return typeof window<"u"}function bo(t){return Ef(t)?(t.nodeName||"").toLowerCase():"#document"}function Fe(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function $i(t){var e;return(e=(Ef(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ef(t){return oa()?t instanceof Node||t instanceof Fe(t).Node:!1}function ii(t){return oa()?t instanceof Element||t instanceof Fe(t).Element:!1}function Si(t){return oa()?t instanceof HTMLElement||t instanceof Fe(t).HTMLElement:!1}function Dh(t){return!oa()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Fe(t).ShadowRoot}const T0=new Set(["inline","contents"]);function Dr(t){const{overflow:e,overflowX:i,overflowY:s,display:o}=si(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+i)&&!T0.has(o)}const E0=new Set(["table","td","th"]);function z0(t){return E0.has(bo(t))}const M0=[":popover-open",":modal"];function ra(t){return M0.some(e=>{try{return t.matches(e)}catch{return!1}})}const D0=["transform","translate","scale","rotate","perspective"],O0=["transform","translate","scale","rotate","perspective","filter"],P0=["paint","layout","strict","content"];function na(t){const e=cc(),i=ii(t)?si(t):t;return D0.some(s=>i[s]?i[s]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||O0.some(s=>(i.willChange||"").includes(s))||P0.some(s=>(i.contain||"").includes(s))}function I0(t){let e=ls(t);for(;Si(e)&&!co(e);){if(na(e))return e;if(ra(e))return null;e=ls(e)}return null}function cc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const R0=new Set(["html","body","#document"]);function co(t){return R0.has(bo(t))}function si(t){return Fe(t).getComputedStyle(t)}function aa(t){return ii(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function ls(t){if(bo(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Dh(t)&&t.host||$i(t);return Dh(e)?e.host:e}function zf(t){const e=ls(t);return co(e)?t.ownerDocument?t.ownerDocument.body:t.body:Si(e)&&Dr(e)?e:zf(e)}function gr(t,e,i){var s;e===void 0&&(e=[]),i===void 0&&(i=!0);const o=zf(t),r=o===((s=t.ownerDocument)==null?void 0:s.body),n=Fe(o);if(r){const a=gl(n);return e.concat(n,n.visualViewport||[],Dr(o)?o:[],a&&i?gr(a):[])}return e.concat(o,gr(o,[],i))}function gl(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Mf(t){const e=si(t);let i=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const o=Si(t),r=o?t.offsetWidth:i,n=o?t.offsetHeight:s,a=Mn(i)!==r||Mn(s)!==n;return a&&(i=r,s=n),{width:i,height:s,$:a}}function hc(t){return ii(t)?t:t.contextElement}function so(t){const e=hc(t);if(!Si(e))return wi(1);const i=e.getBoundingClientRect(),{width:s,height:o,$:r}=Mf(e);let n=(r?Mn(i.width):i.width)/s,a=(r?Mn(i.height):i.height)/o;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const L0=wi(0);function Df(t){const e=Fe(t);return!cc()||!e.visualViewport?L0:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function F0(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==Fe(t)?!1:e}function Rs(t,e,i,s){e===void 0&&(e=!1),i===void 0&&(i=!1);const o=t.getBoundingClientRect(),r=hc(t);let n=wi(1);e&&(s?ii(s)&&(n=so(s)):n=so(t));const a=F0(r,i,s)?Df(r):wi(0);let l=(o.left+a.x)/n.x,c=(o.top+a.y)/n.y,h=o.width/n.x,d=o.height/n.y;if(r){const f=Fe(r),p=s&&ii(s)?Fe(s):s;let m=f,b=gl(m);for(;b&&s&&p!==m;){const v=so(b),w=b.getBoundingClientRect(),x=si(b),S=w.left+(b.clientLeft+parseFloat(x.paddingLeft))*v.x,y=w.top+(b.clientTop+parseFloat(x.paddingTop))*v.y;l*=v.x,c*=v.y,h*=v.x,d*=v.y,l+=S,c+=y,m=Fe(b),b=gl(m)}}return On({width:h,height:d,x:l,y:c})}function dc(t,e){const i=aa(t).scrollLeft;return e?e.left+i:Rs($i(t)).left+i}function Of(t,e,i){i===void 0&&(i=!1);const s=t.getBoundingClientRect(),o=s.left+e.scrollLeft-(i?0:dc(t,s)),r=s.top+e.scrollTop;return{x:o,y:r}}function B0(t){let{elements:e,rect:i,offsetParent:s,strategy:o}=t;const r=o==="fixed",n=$i(s),a=e?ra(e.floating):!1;if(s===n||a&&r)return i;let l={scrollLeft:0,scrollTop:0},c=wi(1);const h=wi(0),d=Si(s);if((d||!d&&!r)&&((bo(s)!=="body"||Dr(n))&&(l=aa(s)),Si(s))){const p=Rs(s);c=so(s),h.x=p.x+s.clientLeft,h.y=p.y+s.clientTop}const f=n&&!d&&!r?Of(n,l,!0):wi(0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+h.x+f.x,y:i.y*c.y-l.scrollTop*c.y+h.y+f.y}}function H0(t){return Array.from(t.getClientRects())}function V0(t){const e=$i(t),i=aa(t),s=t.ownerDocument.body,o=Pe(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),r=Pe(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let n=-i.scrollLeft+dc(t);const a=-i.scrollTop;return si(s).direction==="rtl"&&(n+=Pe(e.clientWidth,s.clientWidth)-o),{width:o,height:r,x:n,y:a}}function N0(t,e){const i=Fe(t),s=$i(t),o=i.visualViewport;let r=s.clientWidth,n=s.clientHeight,a=0,l=0;if(o){r=o.width,n=o.height;const c=cc();(!c||c&&e==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:r,height:n,x:a,y:l}}const U0=new Set(["absolute","fixed"]);function j0(t,e){const i=Rs(t,!0,e==="fixed"),s=i.top+t.clientTop,o=i.left+t.clientLeft,r=Si(t)?so(t):wi(1),n=t.clientWidth*r.x,a=t.clientHeight*r.y,l=o*r.x,c=s*r.y;return{width:n,height:a,x:l,y:c}}function Oh(t,e,i){let s;if(e==="viewport")s=N0(t,i);else if(e==="document")s=V0($i(t));else if(ii(e))s=j0(e,i);else{const o=Df(t);s={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return On(s)}function Pf(t,e){const i=ls(t);return i===e||!ii(i)||co(i)?!1:si(i).position==="fixed"||Pf(i,e)}function W0(t,e){const i=e.get(t);if(i)return i;let s=gr(t,[],!1).filter(a=>ii(a)&&bo(a)!=="body"),o=null;const r=si(t).position==="fixed";let n=r?ls(t):t;for(;ii(n)&&!co(n);){const a=si(n),l=na(n);!l&&a.position==="fixed"&&(o=null),(r?!l&&!o:!l&&a.position==="static"&&!!o&&U0.has(o.position)||Dr(n)&&!l&&Pf(t,n))?s=s.filter(h=>h!==n):o=a,n=ls(n)}return e.set(t,s),s}function q0(t){let{element:e,boundary:i,rootBoundary:s,strategy:o}=t;const n=[...i==="clippingAncestors"?ra(e)?[]:W0(e,this._c):[].concat(i),s],a=n[0],l=n.reduce((c,h)=>{const d=Oh(e,h,o);return c.top=Pe(d.top,c.top),c.right=ns(d.right,c.right),c.bottom=ns(d.bottom,c.bottom),c.left=Pe(d.left,c.left),c},Oh(e,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function K0(t){const{width:e,height:i}=Mf(t);return{width:e,height:i}}function Y0(t,e,i){const s=Si(e),o=$i(e),r=i==="fixed",n=Rs(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const l=wi(0);function c(){l.x=dc(o)}if(s||!s&&!r)if((bo(e)!=="body"||Dr(o))&&(a=aa(e)),s){const p=Rs(e,!0,r,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else o&&c();r&&!s&&o&&c();const h=o&&!s&&!r?Of(o,a):wi(0),d=n.left+a.scrollLeft-l.x-h.x,f=n.top+a.scrollTop-l.y-h.y;return{x:d,y:f,width:n.width,height:n.height}}function Ea(t){return si(t).position==="static"}function Ph(t,e){if(!Si(t)||si(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return $i(t)===i&&(i=i.ownerDocument.body),i}function If(t,e){const i=Fe(t);if(ra(t))return i;if(!Si(t)){let o=ls(t);for(;o&&!co(o);){if(ii(o)&&!Ea(o))return o;o=ls(o)}return i}let s=Ph(t,e);for(;s&&z0(s)&&Ea(s);)s=Ph(s,e);return s&&co(s)&&Ea(s)&&!na(s)?i:s||I0(t)||i}const X0=async function(t){const e=this.getOffsetParent||If,i=this.getDimensions,s=await i(t.floating);return{reference:Y0(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function G0(t){return si(t).direction==="rtl"}const vn={convertOffsetParentRelativeRectToViewportRelativeRect:B0,getDocumentElement:$i,getClippingRect:q0,getOffsetParent:If,getElementRects:X0,getClientRects:H0,getDimensions:K0,getScale:so,isElement:ii,isRTL:G0};function Rf(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function J0(t,e){let i=null,s;const o=$i(t);function r(){var a;clearTimeout(s),(a=i)==null||a.disconnect(),i=null}function n(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const c=t.getBoundingClientRect(),{left:h,top:d,width:f,height:p}=c;if(a||e(),!f||!p)return;const m=Wr(d),b=Wr(o.clientWidth-(h+f)),v=Wr(o.clientHeight-(d+p)),w=Wr(h),S={rootMargin:-m+"px "+-b+"px "+-v+"px "+-w+"px",threshold:Pe(0,ns(1,l))||1};let y=!0;function k($){const T=$[0].intersectionRatio;if(T!==l){if(!y)return n();T?n(!1,T):s=setTimeout(()=>{n(!1,1e-7)},1e3)}T===1&&!Rf(c,t.getBoundingClientRect())&&n(),y=!1}try{i=new IntersectionObserver(k,{...S,root:o.ownerDocument})}catch{i=new IntersectionObserver(k,S)}i.observe(t)}return n(!0),r}function Z0(t,e,i,s){s===void 0&&(s={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=s,c=hc(t),h=o||r?[...c?gr(c):[],...gr(e)]:[];h.forEach(w=>{o&&w.addEventListener("scroll",i,{passive:!0}),r&&w.addEventListener("resize",i)});const d=c&&a?J0(c,i):null;let f=-1,p=null;n&&(p=new ResizeObserver(w=>{let[x]=w;x&&x.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var S;(S=p)==null||S.observe(e)})),i()}),c&&!l&&p.observe(c),p.observe(e));let m,b=l?Rs(t):null;l&&v();function v(){const w=Rs(t);b&&!Rf(b,w)&&i(),b=w,m=requestAnimationFrame(v)}return i(),()=>{var w;h.forEach(x=>{o&&x.removeEventListener("scroll",i),r&&x.removeEventListener("resize",i)}),d?.(),(w=p)==null||w.disconnect(),p=null,l&&cancelAnimationFrame(m)}}const Q0=S0,tv=$0,ev=w0,Ih=A0,iv=x0,sv=(t,e,i)=>{const s=new Map,o={platform:vn,...i},r={...o.platform,_c:s};return _0(t,e,{...o,platform:r})};function ov(t){return rv(t)}function za(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function rv(t){for(let e=t;e;e=za(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=za(t);e;e=za(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||na(i)||e.tagName==="BODY"))return e}return null}function nv(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var kt=class extends Y{constructor(){super(...arguments),this.localize=new yt(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let s=0,o=0,r=0,n=0,a=0,l=0,c=0,h=0;i?t.top<e.top?(s=t.left,o=t.bottom,r=t.right,n=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):(s=e.left,o=e.bottom,r=e.right,n=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):t.left<e.left?(s=t.right,o=t.top,r=e.left,n=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom):(s=e.right,o=e.top,r=t.left,n=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${s}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||nv(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Z0(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Q0({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Ih({apply:({rects:i})=>{const s=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${i.reference.width}px`:"",this.popup.style.height=o?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(ev({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(tv({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Ih({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(iv({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?i=>vn.getOffsetParent(i,ov):vn.getOffsetParent;sv(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:$r(Ni({},vn),{getOffsetParent:e})}).then(({x:i,y:s,middlewareData:o,placement:r})=>{const n=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${i}px`,top:`${s}px`}),this.arrow){const l=o.arrow.x,c=o.arrow.y;let h="",d="",f="",p="";if(this.arrowPlacement==="start"){const m=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=n?m:"",p=n?"":m}else if(this.arrowPlacement==="end"){const m=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=n?"":m,p=n?m:"",f=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof l=="number"?`${l}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:d,bottom:f,left:p,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return E`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Q({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Q({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?E`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};kt.styles=[tt,c0];u([V(".popup")],kt.prototype,"popup",2);u([V(".popup__arrow")],kt.prototype,"arrowEl",2);u([g()],kt.prototype,"anchor",2);u([g({type:Boolean,reflect:!0})],kt.prototype,"active",2);u([g({reflect:!0})],kt.prototype,"placement",2);u([g({reflect:!0})],kt.prototype,"strategy",2);u([g({type:Number})],kt.prototype,"distance",2);u([g({type:Number})],kt.prototype,"skidding",2);u([g({type:Boolean})],kt.prototype,"arrow",2);u([g({attribute:"arrow-placement"})],kt.prototype,"arrowPlacement",2);u([g({attribute:"arrow-padding",type:Number})],kt.prototype,"arrowPadding",2);u([g({type:Boolean})],kt.prototype,"flip",2);u([g({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],kt.prototype,"flipFallbackPlacements",2);u([g({attribute:"flip-fallback-strategy"})],kt.prototype,"flipFallbackStrategy",2);u([g({type:Object})],kt.prototype,"flipBoundary",2);u([g({attribute:"flip-padding",type:Number})],kt.prototype,"flipPadding",2);u([g({type:Boolean})],kt.prototype,"shift",2);u([g({type:Object})],kt.prototype,"shiftBoundary",2);u([g({attribute:"shift-padding",type:Number})],kt.prototype,"shiftPadding",2);u([g({attribute:"auto-size"})],kt.prototype,"autoSize",2);u([g()],kt.prototype,"sync",2);u([g({type:Object})],kt.prototype,"autoSizeBoundary",2);u([g({attribute:"auto-size-padding",type:Number})],kt.prototype,"autoSizePadding",2);u([g({attribute:"hover-bridge",type:Boolean})],kt.prototype,"hoverBridge",2);function _e(t,e){return new Promise(i=>{function s(o){o.target===t&&(t.removeEventListener(e,s),i())}t.addEventListener(e,s)})}var Qt=class extends Y{constructor(){super(),this.localize=new yt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Ah(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Ah(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await qt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:s}=Pt(this,"tooltip.show",{dir:this.localize.dir()});await Bt(this.popup.popup,i,s),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await qt(this.body);const{keyframes:i,options:s}=Pt(this,"tooltip.hide",{dir:this.localize.dir()});await Bt(this.popup.popup,i,s),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,_e(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,_e(this,"sl-after-hide")}render(){return E`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Q({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Qt.styles=[tt,l0];Qt.dependencies={"sl-popup":kt};u([V("slot:not([name])")],Qt.prototype,"defaultSlot",2);u([V(".tooltip__body")],Qt.prototype,"body",2);u([V("sl-popup")],Qt.prototype,"popup",2);u([g()],Qt.prototype,"content",2);u([g()],Qt.prototype,"placement",2);u([g({type:Boolean,reflect:!0})],Qt.prototype,"disabled",2);u([g({type:Number})],Qt.prototype,"distance",2);u([g({type:Boolean,reflect:!0})],Qt.prototype,"open",2);u([g({type:Number})],Qt.prototype,"skidding",2);u([g()],Qt.prototype,"trigger",2);u([g({type:Boolean})],Qt.prototype,"hoist",2);u([L("open",{waitUntilFirstUpdate:!0})],Qt.prototype,"handleOpenChange",1);u([L(["content","distance","hoist","placement","skidding"])],Qt.prototype,"handleOptionsChange",1);u([L("disabled")],Qt.prototype,"handleDisabledChange",1);wt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});wt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Qt.define("sl-tooltip");var av=X`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function Wt(t,e,i){const s=o=>Object.is(o,-0)?0:o;return t<e?s(e):t>i?s(i):s(t)}function Rh(t,e=!1){function i(r){const n=r.getChildrenItems({includeDisabled:!1});if(n.length){const a=n.every(c=>c.selected),l=n.every(c=>!c.selected&&!c.indeterminate);r.selected=a,r.indeterminate=!a&&!l}}function s(r){const n=r.parentElement;Jo.isTreeItem(n)&&(i(n),s(n))}function o(r){for(const n of r.getChildrenItems())n.selected=e?r.selected||n.selected:!n.disabled&&r.selected,o(n);e&&i(r)}o(t),s(t)}var Bs=class extends Y{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new yt(this),this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const i=t.querySelector(`[slot="${e}-icon"]`),s=this.getExpandButtonIcon(e);s&&(i===null?t.append(s):i.hasAttribute("data-default")&&i.replaceWith(s))})},this.handleTreeChanged=t=>{for(const e of t){const i=[...e.addedNodes].filter(Jo.isTreeItem),s=[...e.removedNodes].filter(Jo.isTreeItem);i.forEach(this.initTreeItem),this.lastFocusedItem&&s.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Jo.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}getExpandButtonIcon(t){const i=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(i){const s=i.cloneNode(!0);return[s,...s.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),s.setAttribute("data-default",""),s.slot=`${t}-icon`,s}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Rh(t);else if(this.selection==="single"||t.isLeaf){const s=this.getAllTreeItems();for(const o of s)o.selected=o===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const i=this.selectedItems;(e.length!==i.length||i.some(s=>!e.includes(s)))&&Promise.all(i.map(s=>s.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(o=>{var r;return["input","textarea"].includes((r=o?.tagName)==null?void 0:r.toLowerCase())}))return;const e=this.getFocusableItems(),i=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const o=e.findIndex(l=>l.matches(":focus")),r=e[o],n=l=>{const c=e[Wt(l,0,e.length-1)];this.focusItem(c)},a=l=>{r.expanded=l};t.key==="ArrowDown"?n(o+1):t.key==="ArrowUp"?n(o-1):i&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft"?!r||r.disabled||r.expanded||r.isLeaf&&!r.lazy?n(o+1):a(!0):i&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight"?!r||r.disabled||r.isLeaf||!r.expanded?n(o-1):a(!1):t.key==="Home"?n(0):t.key==="End"?n(e.length-1):(t.key==="Enter"||t.key===" ")&&(r.disabled||this.selectItem(r))}}handleClick(t){const e=t.target,i=e.closest("sl-tree-item"),s=t.composedPath().some(o=>{var r;return(r=o?.classList)==null?void 0:r.contains("tree-item__expand-button")});!i||i.disabled||e!==this.clickTarget||(s?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const i of e)i.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(i=>Rh(i,!0)))}get selectedItems(){const t=this.getAllTreeItems(),e=i=>i.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(i=>{var s;if(i.disabled)return!1;const o=(s=i.parentElement)==null?void 0:s.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||e.has(o))&&e.add(i),!e.has(i)})}render(){return E`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Bs.styles=[tt,av];u([V("slot:not([name])")],Bs.prototype,"defaultSlot",2);u([V("slot[name=expand-icon]")],Bs.prototype,"expandedIconSlot",2);u([V("slot[name=collapse-icon]")],Bs.prototype,"collapsedIconSlot",2);u([g()],Bs.prototype,"selection",2);u([L("selection")],Bs.prototype,"handleSelectionChange",1);Bs.define("sl-tree");var lv=X`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,uc=class extends Y{render(){return E` <slot></slot> `}};uc.styles=[tt,lv];uc.define("sl-visually-hidden");var cv=X`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,hv=0,Or=class extends Y{constructor(){super(...arguments),this.attrId=++hv,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return E`
      <slot
        part="base"
        class=${Q({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Or.styles=[tt,cv];u([g({reflect:!0})],Or.prototype,"name",2);u([g({type:Boolean,reflect:!0})],Or.prototype,"active",2);u([L("active")],Or.prototype,"handleActiveChange",1);Or.define("sl-tab-panel");var dv=X`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,uv=X`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lf=Symbol.for(""),fv=t=>{if(t?.r===Lf)return t?._$litStatic$},Pn=(t,...e)=>({_$litStatic$:e.reduce((i,s,o)=>i+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+t[o+1],t[0]),r:Lf}),Lh=new Map,pv=t=>(e,...i)=>{const s=i.length;let o,r;const n=[],a=[];let l,c=0,h=!1;for(;c<s;){for(l=e[c];c<s&&(r=i[c],(o=fv(r))!==void 0);)l+=o+e[++c],h=!0;c!==s&&a.push(r),n.push(l),c++}if(c===s&&n.push(e[s]),h){const d=n.join("$$lit$$");(e=Lh.get(d))===void 0&&(n.raw=n,Lh.set(d,e=n)),i=a}return t(e,...i)},Zo=pv(E);var Xt=class extends Y{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Pn`a`:Pn`button`;return Zo`
      <${e}
        part="base"
        class=${Q({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${K(t?void 0:this.disabled)}
        type=${K(t?void 0:"button")}
        href=${K(t?this.href:void 0)}
        target=${K(t?this.target:void 0)}
        download=${K(t?this.download:void 0)}
        rel=${K(t&&this.target?"noreferrer noopener":void 0)}
        role=${K(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${K(this.name)}
          library=${K(this.library)}
          src=${K(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};Xt.styles=[tt,uv];Xt.dependencies={"sl-icon":At};u([V(".icon-button")],Xt.prototype,"button",2);u([G()],Xt.prototype,"hasFocus",2);u([g()],Xt.prototype,"name",2);u([g()],Xt.prototype,"library",2);u([g()],Xt.prototype,"src",2);u([g()],Xt.prototype,"href",2);u([g()],Xt.prototype,"target",2);u([g()],Xt.prototype,"download",2);u([g()],Xt.prototype,"label",2);u([g({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);var ds=class extends Y{constructor(){super(...arguments),this.localize=new yt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return E`
      <span
        part="base"
        class=${Q({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?E`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};ds.styles=[tt,dv];ds.dependencies={"sl-icon-button":Xt};u([g({reflect:!0})],ds.prototype,"variant",2);u([g({reflect:!0})],ds.prototype,"size",2);u([g({type:Boolean,reflect:!0})],ds.prototype,"pill",2);u([g({type:Boolean})],ds.prototype,"removable",2);ds.define("sl-tag");var gv=X`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,_t=class extends Y{constructor(){super(...arguments),this.formControlController=new Ui(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new xe(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&((t=this.resizeObserver)==null||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s="preserve"){const o=e??this.input.selectionStart,r=i??this.input.selectionEnd;this.input.setRangeText(t,o,r,s),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e;return E`
      <div
        part="form-control"
        class=${Q({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Q({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${K(this.name)}
              .value=${Is(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${K(this.placeholder)}
              rows=${K(this.rows)}
              minlength=${K(this.minlength)}
              maxlength=${K(this.maxlength)}
              autocapitalize=${K(this.autocapitalize)}
              autocorrect=${K(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${K(this.spellcheck)}
              enterkeyhint=${K(this.enterkeyhint)}
              inputmode=${K(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};_t.styles=[tt,Fs,gv];u([V(".textarea__control")],_t.prototype,"input",2);u([V(".textarea__size-adjuster")],_t.prototype,"sizeAdjuster",2);u([G()],_t.prototype,"hasFocus",2);u([g()],_t.prototype,"title",2);u([g()],_t.prototype,"name",2);u([g()],_t.prototype,"value",2);u([g({reflect:!0})],_t.prototype,"size",2);u([g({type:Boolean,reflect:!0})],_t.prototype,"filled",2);u([g()],_t.prototype,"label",2);u([g({attribute:"help-text"})],_t.prototype,"helpText",2);u([g()],_t.prototype,"placeholder",2);u([g({type:Number})],_t.prototype,"rows",2);u([g()],_t.prototype,"resize",2);u([g({type:Boolean,reflect:!0})],_t.prototype,"disabled",2);u([g({type:Boolean,reflect:!0})],_t.prototype,"readonly",2);u([g({reflect:!0})],_t.prototype,"form",2);u([g({type:Boolean,reflect:!0})],_t.prototype,"required",2);u([g({type:Number})],_t.prototype,"minlength",2);u([g({type:Number})],_t.prototype,"maxlength",2);u([g()],_t.prototype,"autocapitalize",2);u([g()],_t.prototype,"autocorrect",2);u([g()],_t.prototype,"autocomplete",2);u([g({type:Boolean})],_t.prototype,"autofocus",2);u([g()],_t.prototype,"enterkeyhint",2);u([g({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],_t.prototype,"spellcheck",2);u([g()],_t.prototype,"inputmode",2);u([po()],_t.prototype,"defaultValue",2);u([L("disabled",{waitUntilFirstUpdate:!0})],_t.prototype,"handleDisabledChange",1);u([L("rows",{waitUntilFirstUpdate:!0})],_t.prototype,"handleRowsChange",1);u([L("value",{waitUntilFirstUpdate:!0})],_t.prototype,"handleValueChange",1);_t.define("sl-textarea");var mv=X`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,bv=0,oi=class extends Y{constructor(){super(...arguments),this.localize=new yt(this),this.attrId=++bv,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,E`
      <div
        part="base"
        class=${Q({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?E`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};oi.styles=[tt,mv];oi.dependencies={"sl-icon-button":Xt};u([V(".tab")],oi.prototype,"tab",2);u([g({reflect:!0})],oi.prototype,"panel",2);u([g({type:Boolean,reflect:!0})],oi.prototype,"active",2);u([g({type:Boolean,reflect:!0})],oi.prototype,"closable",2);u([g({type:Boolean,reflect:!0})],oi.prototype,"disabled",2);u([g({type:Number,reflect:!0})],oi.prototype,"tabIndex",2);u([L("active")],oi.prototype,"handleActiveChange",1);u([L("disabled")],oi.prototype,"handleDisabledChange",1);oi.define("sl-tab");var vv=X`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,yv=X`
  :host {
    display: contents;
  }
`,Pr=class extends Y{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],e.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return E` <slot @slotchange=${this.handleSlotChange}></slot> `}};Pr.styles=[tt,yv];u([g({type:Boolean,reflect:!0})],Pr.prototype,"disabled",2);u([L("disabled",{waitUntilFirstUpdate:!0})],Pr.prototype,"handleDisabledChange",1);function _v(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var ml=new Set;function xv(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function wv(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Qo(t){if(ml.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=xv()+wv();let i=getComputedStyle(document.documentElement).scrollbarGutter;(!i||i==="auto")&&(i="stable"),e<2&&(i=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",i),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function tr(t){ml.delete(t),ml.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function bl(t,e,i="vertical",s="smooth"){const o=_v(t,e),r=o.top+e.scrollTop,n=o.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,c=e.scrollTop,h=e.scrollTop+e.offsetHeight;(i==="horizontal"||i==="both")&&(n<a?e.scrollTo({left:n,behavior:s}):n+t.clientWidth>l&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:s})),(i==="vertical"||i==="both")&&(r<c?e.scrollTo({top:r,behavior:s}):r+t.clientHeight>h&&e.scrollTo({top:r-e.offsetHeight+t.clientHeight,behavior:s}))}var ne=class extends Y{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new yt(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{const i=e.filter(({target:s})=>{if(s===this)return!0;if(s.closest("sl-tab-group")!==this)return!1;const o=s.tagName.toLowerCase();return o==="sl-tab"||o==="sl-tab-panel"});if(i.length!==0){if(i.some(s=>!["aria-labelledby","aria-controls"].includes(s.attributeName))&&setTimeout(()=>this.setAriaLabels()),i.some(s=>s.attributeName==="disabled"))this.syncTabsAndPanels();else if(i.some(s=>s.attributeName==="active")){const o=i.filter(r=>r.attributeName==="active"&&r.target.tagName.toLowerCase()==="sl-tab").map(r=>r.target).find(r=>r.active);o&&this.setActiveTab(o)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((i,s)=>{var o;i[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),s.unobserve(i[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const i=t.target.closest("sl-tab");i?.closest("sl-tab-group")===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(t){const i=t.target.closest("sl-tab");if(i?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const o=this.tabs.find(a=>a.matches(":focus")),r=this.localize.dir()==="rtl";let n=null;if(o?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")n=this.focusableTabs[0];else if(t.key==="End")n=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(r?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const a=this.tabs.findIndex(l=>l===o);n=this.findNextFocusableTab(a,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(r?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const a=this.tabs.findIndex(l=>l===o);n=this.findNextFocusableTab(a,"forward")}if(!n)return;n.tabIndex=0,n.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(n,{scrollBehavior:"smooth"}):this.tabs.forEach(a=>{a.tabIndex=a===n?0:-1}),["top","bottom"].includes(this.placement)&&bl(n,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=Ni({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const i=this.activeTab;this.activeTab=t,this.tabs.forEach(s=>{s.active=s===this.activeTab,s.tabIndex=s===this.activeTab?0:-1}),this.panels.forEach(s=>{var o;return s.active=s.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&bl(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(i=>i.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,i=t.clientHeight,s=this.localize.dir()==="rtl",o=this.getAllTabs(),n=o.slice(0,o.indexOf(t)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=s?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let i=null;const s=e==="forward"?1:-1;let o=t+s;for(;t<this.tabs.length;){if(i=this.tabs[o]||null,i===null){e==="forward"?i=this.focusableTabs[0]:i=this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;o+=s}return i}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(i=>i.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return E`
      <div
        part="base"
        class=${Q({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?E`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${Q({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?E`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${Q({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};ne.styles=[tt,vv];ne.dependencies={"sl-icon-button":Xt,"sl-resize-observer":Pr};u([V(".tab-group")],ne.prototype,"tabGroup",2);u([V(".tab-group__body")],ne.prototype,"body",2);u([V(".tab-group__nav")],ne.prototype,"nav",2);u([V(".tab-group__indicator")],ne.prototype,"indicator",2);u([G()],ne.prototype,"hasScrollControls",2);u([G()],ne.prototype,"shouldHideScrollStartButton",2);u([G()],ne.prototype,"shouldHideScrollEndButton",2);u([g()],ne.prototype,"placement",2);u([g()],ne.prototype,"activation",2);u([g({attribute:"no-scroll-controls",type:Boolean})],ne.prototype,"noScrollControls",2);u([g({attribute:"fixed-scroll-controls",type:Boolean})],ne.prototype,"fixedScrollControls",2);u([Tr({passive:!0})],ne.prototype,"updateScrollButtons",1);u([L("noScrollControls",{waitUntilFirstUpdate:!0})],ne.prototype,"updateScrollControls",1);u([L("placement",{waitUntilFirstUpdate:!0})],ne.prototype,"syncIndicator",1);ne.define("sl-tab-group");var kv=X`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,fc=class extends Y{constructor(){super(...arguments),this.effect="none"}render(){return E`
      <div
        part="base"
        class=${Q({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};fc.styles=[tt,kv];u([g()],fc.prototype,"effect",2);fc.define("sl-skeleton");var Cv=X`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function er(t,e){function i(o){const r=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,a=r.left+n.scrollX,l=r.top+n.scrollY,c=o.pageX-a,h=o.pageY-l;e?.onMove&&e.onMove(c,h)}function s(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",s),e?.onStop&&e.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",s),e?.initialEvent instanceof PointerEvent&&i(e.initialEvent)}var Fh=()=>null,Be=class extends Y{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new yt(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=Fh,this.snapThreshold=12}toSnapFunction(t){const e=t.split(" ");return({pos:i,size:s,snapThreshold:o,isRtl:r,vertical:n})=>{let a=i,l=Number.POSITIVE_INFINITY;return e.forEach(c=>{let h;if(c.startsWith("repeat(")){const f=t.substring(7,t.length-1),p=f.endsWith("%"),m=Number.parseFloat(f),b=p?s*(m/100):m;h=Math.round((r&&!n?s-i:i)/b)*b}else c.endsWith("%")?h=s*(Number.parseFloat(c)/100):h=Number.parseFloat(c);r&&!n&&(h=s-h);const d=Math.abs(i-h);d<=o&&d<l&&(a=h,l=d)}),a}}set snap(t){this.snapValue=t??"",t?this.snapFunction=typeof t=="string"?this.toSnapFunction(t):t:this.snapFunction=Fh}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),er(this,{onMove:(i,s)=>{var o;let r=this.vertical?s:i;this.primary==="end"&&(r=this.size-r),r=(o=this.snapFunction({pos:r,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))!=null?o:r,this.position=Wt(this.pixelsToPercentage(r),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const i=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=i),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=i),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const s=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=s})}this.position=Wt(e,0,100)}}handleResize(t){const{width:e,height:i}=t[0].contentRect;this.size=this.vertical?i:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",i=this.localize.dir()==="rtl",s=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,o="auto";return this.primary==="end"?i&&!this.vertical?this.style[t]=`${s} var(--divider-width) ${o}`:this.style[t]=`${o} var(--divider-width) ${s}`:i&&!this.vertical?this.style[t]=`${o} var(--divider-width) ${s}`:this.style[t]=`${s} var(--divider-width) ${o}`,this.style[e]="",E`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${K(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};Be.styles=[tt,Cv];u([V(".divider")],Be.prototype,"divider",2);u([g({type:Number,reflect:!0})],Be.prototype,"position",2);u([g({attribute:"position-in-pixels",type:Number})],Be.prototype,"positionInPixels",2);u([g({type:Boolean,reflect:!0})],Be.prototype,"vertical",2);u([g({type:Boolean,reflect:!0})],Be.prototype,"disabled",2);u([g()],Be.prototype,"primary",2);u([g({reflect:!0})],Be.prototype,"snap",1);u([g({type:Number,attribute:"snap-threshold"})],Be.prototype,"snapThreshold",2);u([L("position")],Be.prototype,"handlePositionChange",1);u([L("positionInPixels")],Be.prototype,"handlePositionInPixelsChange",1);u([L("vertical")],Be.prototype,"handleVerticalChange",1);Be.define("sl-split-panel");var Sv=X`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,fe=class extends Y{constructor(){super(...arguments),this.formControlController=new Ui(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new xe(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return E`
      <div
        class=${Q({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${Q({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${K(this.value)}
            .checked=${Is(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};fe.styles=[tt,Fs,Sv];u([V('input[type="checkbox"]')],fe.prototype,"input",2);u([G()],fe.prototype,"hasFocus",2);u([g()],fe.prototype,"title",2);u([g()],fe.prototype,"name",2);u([g()],fe.prototype,"value",2);u([g({reflect:!0})],fe.prototype,"size",2);u([g({type:Boolean,reflect:!0})],fe.prototype,"disabled",2);u([g({type:Boolean,reflect:!0})],fe.prototype,"checked",2);u([po("checked")],fe.prototype,"defaultChecked",2);u([g({reflect:!0})],fe.prototype,"form",2);u([g({type:Boolean,reflect:!0})],fe.prototype,"required",2);u([g({attribute:"help-text"})],fe.prototype,"helpText",2);u([L("checked",{waitUntilFirstUpdate:!0})],fe.prototype,"handleCheckedChange",1);u([L("disabled",{waitUntilFirstUpdate:!0})],fe.prototype,"handleDisabledChange",1);fe.define("sl-switch");Pr.define("sl-resize-observer");var $v=X`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vl=class extends zr{constructor(e){if(super(e),this.it=Ot,e.type!==yi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Ot||e==null)return this._t=void 0,this.it=e;if(e===Re)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const i=[e];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}};vl.directiveName="unsafeHTML",vl.resultType=1;const yn=Er(vl);var ft=class extends Y{constructor(){super(...arguments),this.formControlController=new Ui(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new xe(this,"help-text","label"),this.localize=new yt(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>E`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,i=e.closest(".select__clear")!==null,s=e.closest("sl-icon-button")!==null;if(!(i||s)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const o=this.getAllOptions(),r=o.indexOf(this.currentOption);let n=Math.max(0,r);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=r+1,n>o.length-1&&(n=0)):t.key==="ArrowUp"?(n=r-1,n<0&&(n=o.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=o.length-1),this.setCurrentOption(o[n])}if(t.key&&t.key.length===1||t.key==="Backspace"){const o=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const r of o)if(r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const i=t.composedPath().some(s=>s instanceof Element&&s.tagName.toLowerCase()==="sl-icon-button");this.disabled||i||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const i=t.target.closest("sl-option"),s=this.value;i&&!i.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==s&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(e)?e:[e],s=[];t.forEach(o=>s.push(o.value)),this.setSelectedOptions(t.filter(o=>i.includes(o.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(s=>s.selected=!1),i.length&&i.forEach(s=>s.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,i;const s=this.getAllOptions();this.selectedOptions=s.filter(r=>r.selected);const o=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(r=>r.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const r=this.selectedOptions[0];this.value=(t=r?.value)!=null?t:"",this.displayLabel=(i=(e=r?.getTextLabel)==null?void 0:e.call(r))!=null?i:""}this.valueHasChanged=o,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,e);return E`<div @sl-remove=${s=>this.handleTagRemove(s,t)}>
          ${typeof i=="string"?yn(i):i}
        </div>`}else if(e===this.maxOptionsVisible)return E`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return E``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),t==="value"){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}}handleValueChange(){if(!this.valueHasChanged){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(i=>e.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await qt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=Pt(this,"select.show",{dir:this.localize.dir()});await Bt(this.popup.popup,t,e),this.currentOption&&bl(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await qt(this);const{keyframes:t,options:e}=Pt(this,"select.hide",{dir:this.localize.dir()});await Bt(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,_e(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,_e(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value&&this.value.length<=0;return E`
      <div
        part="form-control"
        class=${Q({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${Q({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?E`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o?E`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ft.styles=[tt,Fs,$v];ft.dependencies={"sl-icon":At,"sl-popup":kt,"sl-tag":ds};u([V(".select")],ft.prototype,"popup",2);u([V(".select__combobox")],ft.prototype,"combobox",2);u([V(".select__display-input")],ft.prototype,"displayInput",2);u([V(".select__value-input")],ft.prototype,"valueInput",2);u([V(".select__listbox")],ft.prototype,"listbox",2);u([G()],ft.prototype,"hasFocus",2);u([G()],ft.prototype,"displayLabel",2);u([G()],ft.prototype,"currentOption",2);u([G()],ft.prototype,"selectedOptions",2);u([G()],ft.prototype,"valueHasChanged",2);u([g()],ft.prototype,"name",2);u([G()],ft.prototype,"value",1);u([g({attribute:"value"})],ft.prototype,"defaultValue",2);u([g({reflect:!0})],ft.prototype,"size",2);u([g()],ft.prototype,"placeholder",2);u([g({type:Boolean,reflect:!0})],ft.prototype,"multiple",2);u([g({attribute:"max-options-visible",type:Number})],ft.prototype,"maxOptionsVisible",2);u([g({type:Boolean,reflect:!0})],ft.prototype,"disabled",2);u([g({type:Boolean})],ft.prototype,"clearable",2);u([g({type:Boolean,reflect:!0})],ft.prototype,"open",2);u([g({type:Boolean})],ft.prototype,"hoist",2);u([g({type:Boolean,reflect:!0})],ft.prototype,"filled",2);u([g({type:Boolean,reflect:!0})],ft.prototype,"pill",2);u([g()],ft.prototype,"label",2);u([g({reflect:!0})],ft.prototype,"placement",2);u([g({attribute:"help-text"})],ft.prototype,"helpText",2);u([g({reflect:!0})],ft.prototype,"form",2);u([g({type:Boolean,reflect:!0})],ft.prototype,"required",2);u([g()],ft.prototype,"getTag",2);u([L("disabled",{waitUntilFirstUpdate:!0})],ft.prototype,"handleDisabledChange",1);u([L(["defaultValue","value"],{waitUntilFirstUpdate:!0})],ft.prototype,"handleValueChange",1);u([L("open",{waitUntilFirstUpdate:!0})],ft.prototype,"handleOpenChange",1);wt("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});wt("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Av=ft;ft.define("sl-select");Mr.define("sl-spinner");var Tv=X`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,Lt=class extends Y{constructor(){super(...arguments),this.formControlController=new Ui(this),this.hasSlotController=new xe(this,"help-text","label"),this.localize=new yt(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,i=this.output.offsetWidth,s=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",r=e*t;if(o){const n=`${e-r}px + ${t} * ${s}`;this.output.style.translate=`calc((${n} - ${i/2}px - ${s} / 2))`}else{const n=`${r}px - ${t} * ${s}`;this.output.style.translate=`calc(${n} - ${i/2}px + ${s} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e;return E`
      <div
        part="form-control"
        class=${Q({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Q({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${K(this.name)}
              ?disabled=${this.disabled}
              min=${K(this.min)}
              max=${K(this.max)}
              step=${K(this.step)}
              .value=${Is(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?E`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Lt.styles=[tt,Fs,Tv];u([V(".range__control")],Lt.prototype,"input",2);u([V(".range__tooltip")],Lt.prototype,"output",2);u([G()],Lt.prototype,"hasFocus",2);u([G()],Lt.prototype,"hasTooltip",2);u([g()],Lt.prototype,"title",2);u([g()],Lt.prototype,"name",2);u([g({type:Number})],Lt.prototype,"value",2);u([g()],Lt.prototype,"label",2);u([g({attribute:"help-text"})],Lt.prototype,"helpText",2);u([g({type:Boolean,reflect:!0})],Lt.prototype,"disabled",2);u([g({type:Number})],Lt.prototype,"min",2);u([g({type:Number})],Lt.prototype,"max",2);u([g({type:Number})],Lt.prototype,"step",2);u([g()],Lt.prototype,"tooltip",2);u([g({attribute:!1})],Lt.prototype,"tooltipFormatter",2);u([g({reflect:!0})],Lt.prototype,"form",2);u([po()],Lt.prototype,"defaultValue",2);u([Tr({passive:!0})],Lt.prototype,"handleThumbDragStart",1);u([L("value",{waitUntilFirstUpdate:!0})],Lt.prototype,"handleValueChange",1);u([L("disabled",{waitUntilFirstUpdate:!0})],Lt.prototype,"handleDisabledChange",1);u([L("hasTooltip",{waitUntilFirstUpdate:!0})],Lt.prototype,"syncRange",1);Lt.define("sl-range");var Ev=X`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ff="important",zv=" !"+Ff,Te=Er(class extends zr{constructor(t){if(super(t),t.type!==yi.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return s==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?i.removeProperty(s):i[s]=null);for(const s in e){const o=e[s];if(o!=null){this.ft.add(s);const r=typeof o=="string"&&o.endsWith(zv);s.includes("-")||r?i.setProperty(s,r?o.slice(0,-11):o,r?Ff:""):i[s]=o}}return Re}});var pe=class extends Y{constructor(){super(...arguments),this.localize=new yt(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:i,right:s,width:o}=this.rating.getBoundingClientRect(),r=e?this.roundToPrecision((s-t)/o*this.max,this.precision):this.roundToPrecision((t-i)/o*this.max,this.precision);return Wt(r,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl",s=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"){const o=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"){const o=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==s&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const i=1/e;return Math.ceil(t*i)/i}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys());let i=0;return this.disabled||this.readonly?i=this.value:i=this.isHovering?this.hoverValue:this.value,E`
      <div
        part="base"
        class=${Q({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${e.map(s=>i>s&&i<s+1?E`
                <span
                  class=${Q({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===s+1})}
                  role="presentation"
                >
                  <div
                    style=${Te({clipPath:t?`inset(0 ${(i-s)*100}% 0 0)`:`inset(0 0 0 ${(i-s)*100}%)`})}
                  >
                    ${yn(this.getSymbol(s+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Te({clipPath:t?`inset(0 0 0 ${100-(i-s)*100}%)`:`inset(0 ${100-(i-s)*100}% 0 0)`})}
                  >
                    ${yn(this.getSymbol(s+1))}
                  </div>
                </span>
              `:E`
              <span
                class=${Q({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===s+1,"rating__symbol--active":i>=s+1})}
                role="presentation"
              >
                ${yn(this.getSymbol(s+1))}
              </span>
            `)}
        </span>
      </div>
    `}};pe.styles=[tt,Ev];pe.dependencies={"sl-icon":At};u([V(".rating")],pe.prototype,"rating",2);u([G()],pe.prototype,"hoverValue",2);u([G()],pe.prototype,"isHovering",2);u([g()],pe.prototype,"label",2);u([g({type:Number})],pe.prototype,"value",2);u([g({type:Number})],pe.prototype,"max",2);u([g({type:Number})],pe.prototype,"precision",2);u([g({type:Boolean,reflect:!0})],pe.prototype,"readonly",2);u([g({type:Boolean,reflect:!0})],pe.prototype,"disabled",2);u([g()],pe.prototype,"getSymbol",2);u([Tr({passive:!0})],pe.prototype,"handleTouchMove",1);u([L("hoverValue")],pe.prototype,"handleHoverValueChange",1);u([L("isHovering")],pe.prototype,"handleIsHoveringChange",1);pe.define("sl-rating");var Mv=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Hs=class extends Y{constructor(){super(...arguments),this.localize=new yt(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const i=e.getTime()-t.getTime(),{unit:s,value:o}=Mv.find(r=>Math.abs(i)<r.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(i/o),s,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let r;s==="minute"?r=qr("second"):s==="hour"?r=qr("minute"):s==="day"?r=qr("hour"):r=qr("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),r)}return E` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};u([G()],Hs.prototype,"isoTime",2);u([G()],Hs.prototype,"relativeTime",2);u([g()],Hs.prototype,"date",2);u([g()],Hs.prototype,"format",2);u([g()],Hs.prototype,"numeric",2);u([g({type:Boolean})],Hs.prototype,"sync",2);function qr(t){const i={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return i-Date.now()%i}Hs.define("sl-relative-time");var Bf=X`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,Dv=X`
  ${Bf}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,ri=class extends Y{constructor(){super(...arguments),this.hasSlotController=new xe(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Zo`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${Q({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${K(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};ri.styles=[tt,Dv];u([V(".button")],ri.prototype,"input",2);u([V(".hidden-input")],ri.prototype,"hiddenInput",2);u([G()],ri.prototype,"hasFocus",2);u([g({type:Boolean,reflect:!0})],ri.prototype,"checked",2);u([g()],ri.prototype,"value",2);u([g({type:Boolean,reflect:!0})],ri.prototype,"disabled",2);u([g({reflect:!0})],ri.prototype,"size",2);u([g({type:Boolean,reflect:!0})],ri.prototype,"pill",2);u([L("disabled",{waitUntilFirstUpdate:!0})],ri.prototype,"handleDisabledChange",1);ri.define("sl-radio-button");var Ov=X`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Pv=X`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Vs=class extends Y{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=zo(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=zo(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=zo(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=zo(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const i=t.indexOf(e),s=zo(e);s&&(s.toggleAttribute("data-sl-button-group__button",!0),s.toggleAttribute("data-sl-button-group__button--first",i===0),s.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<t.length-1),s.toggleAttribute("data-sl-button-group__button--last",i===t.length-1),s.toggleAttribute("data-sl-button-group__button--radio",s.tagName.toLowerCase()==="sl-radio-button"))})}render(){return E`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Vs.styles=[tt,Pv];u([V("slot")],Vs.prototype,"defaultSlot",2);u([G()],Vs.prototype,"disableRole",2);u([g()],Vs.prototype,"label",2);function zo(t){var e;const i="sl-button, sl-radio-button";return(e=t.closest(i))!=null?e:t.querySelector(i)}var ae=class extends Y{constructor(){super(...arguments),this.formControlController=new Ui(this),this.hasSlotController=new xe(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?mb:t?gb:ea}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),s=this.value;!e||e.disabled||(this.value=e.value,i.forEach(o=>o.checked=o===e),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const i=this.getAllRadios().filter(a=>!a.disabled),s=(e=i.find(a=>a.checked))!=null?e:i[0],o=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,r=this.value;let n=i.indexOf(s)+o;n<0&&(n=i.length-1),n>i.length-1&&(n=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||a.setAttribute("tabindex","-1")}),this.value=i[n].value,i[n].checked=!0,this.hasButtonGroup?i[n].shadowRoot.querySelector("button").focus():(i[n].setAttribute("tabindex","0"),i[n].focus()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const i=this.getAllRadios();if(await Promise.all(i.map(async s=>{await s.updateComplete,s.checked=s.value===this.value,s.size=this.size})),this.hasButtonGroup=i.some(s=>s.tagName.toLowerCase()==="sl-radio-button"),i.length>0&&!i.some(s=>s.checked))if(this.hasButtonGroup){const s=(t=i[0].shadowRoot)==null?void 0:t.querySelector("button");s&&s.setAttribute("tabindex","0")}else i[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const s=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");s&&(s.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),i=e.find(r=>r.checked),s=e.find(r=>!r.disabled),o=i||s;o&&o.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e,o=E`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return E`
      <fieldset
        part="form-control"
        class=${Q({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?E`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};ae.styles=[tt,Fs,Ov];ae.dependencies={"sl-button-group":Vs};u([V("slot:not([name])")],ae.prototype,"defaultSlot",2);u([V(".radio-group__validation-input")],ae.prototype,"validationInput",2);u([G()],ae.prototype,"hasButtonGroup",2);u([G()],ae.prototype,"errorMessage",2);u([G()],ae.prototype,"defaultValue",2);u([g()],ae.prototype,"label",2);u([g({attribute:"help-text"})],ae.prototype,"helpText",2);u([g()],ae.prototype,"name",2);u([g({reflect:!0})],ae.prototype,"value",2);u([g({reflect:!0})],ae.prototype,"size",2);u([g({reflect:!0})],ae.prototype,"form",2);u([g({type:Boolean,reflect:!0})],ae.prototype,"required",2);u([L("size",{waitUntilFirstUpdate:!0})],ae.prototype,"handleSizeChange",1);u([L("value")],ae.prototype,"handleValueChange",1);ae.define("sl-radio-group");var Iv=X`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,vo=class extends Y{constructor(){super(...arguments),this.localize=new yt(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*e,s=i-this.value/100*i;this.indicatorOffset=`${s}px`}}render(){return E`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};vo.styles=[tt,Iv];u([V(".progress-ring__indicator")],vo.prototype,"indicator",2);u([G()],vo.prototype,"indicatorOffset",2);u([g({type:Number,reflect:!0})],vo.prototype,"value",2);u([g()],vo.prototype,"label",2);vo.define("sl-progress-ring");var Rv=X`
  :host {
    display: inline-block;
  }
`;let Hf=null;class Vf{}Vf.render=function(t,e){Hf(t,e)};self.QrCreator=Vf;(function(t){function e(a,l,c,h){var d={},f=t(c,l);f.u(a),f.J(),h=h||0;var p=f.h(),m=f.h()+2*h;return d.text=a,d.level=l,d.version=c,d.O=m,d.a=function(b,v){return b-=h,v-=h,0>b||b>=p||0>v||v>=p?!1:f.a(b,v)},d}function i(a,l,c,h,d,f,p,m,b,v){function w(x,S,y,k,$,T,z){x?(a.lineTo(S+T,y+z),a.arcTo(S,y,k,$,f)):a.lineTo(S,y)}p?a.moveTo(l+f,c):a.moveTo(l,c),w(m,h,c,h,d,-f,0),w(b,h,d,l,d,0,-f),w(v,l,d,l,c,f,0),w(p,l,c,h,c,0,f)}function s(a,l,c,h,d,f,p,m,b,v){function w(x,S,y,k){a.moveTo(x+y,S),a.lineTo(x,S),a.lineTo(x,S+k),a.arcTo(x,S,x+y,S,f)}p&&w(l,c,f,f),m&&w(h,c,-f,f),b&&w(h,d,-f,-f),v&&w(l,d,f,-f)}function o(a,l){var c=l.fill;if(typeof c=="string")a.fillStyle=c;else{var h=c.type,d=c.colorStops;if(c=c.position.map(p=>Math.round(p*l.size)),h==="linear-gradient")var f=a.createLinearGradient.apply(a,c);else if(h==="radial-gradient")f=a.createRadialGradient.apply(a,c);else throw Error("Unsupported fill");d.forEach(([p,m])=>{f.addColorStop(p,m)}),a.fillStyle=f}}function r(a,l){t:{var c=l.text,h=l.v,d=l.N,f=l.K,p=l.P;for(d=Math.max(1,d||1),f=Math.min(40,f||40);d<=f;d+=1)try{var m=e(c,h,d,p);break t}catch{}m=void 0}if(!m)return null;for(c=a.getContext("2d"),l.background&&(c.fillStyle=l.background,c.fillRect(l.left,l.top,l.size,l.size)),h=m.O,f=l.size/h,c.beginPath(),p=0;p<h;p+=1)for(d=0;d<h;d+=1){var b=c,v=l.left+d*f,w=l.top+p*f,x=p,S=d,y=m.a,k=v+f,$=w+f,T=x-1,z=x+1,O=S-1,M=S+1,q=Math.floor(Math.min(.5,Math.max(0,l.R))*f),j=y(x,S),ot=y(T,O),J=y(T,S);T=y(T,M);var dt=y(x,M);M=y(z,M),S=y(z,S),z=y(z,O),x=y(x,O),v=Math.round(v),w=Math.round(w),k=Math.round(k),$=Math.round($),j?i(b,v,w,k,$,q,!J&&!x,!J&&!dt,!S&&!dt,!S&&!x):s(b,v,w,k,$,q,J&&x&&ot,J&&dt&&T,S&&dt&&M,S&&x&&z)}return o(c,l),c.fill(),a}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Hf=function(a,l){var c={};Object.assign(c,n,a),c.N=c.minVersion,c.K=c.maxVersion,c.v=c.ecLevel,c.left=c.left,c.top=c.top,c.size=c.size,c.fill=c.fill,c.background=c.background,c.text=c.text,c.R=c.radius,c.P=c.quiet,l instanceof HTMLCanvasElement?((l.width!==c.size||l.height!==c.size)&&(l.width=c.size,l.height=c.size),l.getContext("2d").clearRect(0,0,l.width,l.height),r(l,c)):(a=document.createElement("canvas"),a.width=c.size,a.height=c.size,c=r(a,c),l.appendChild(c))}})(function(){function t(l){var c=i.s(l);return{S:function(){return 4},b:function(){return c.length},write:function(h){for(var d=0;d<c.length;d+=1)h.put(c[d],8)}}}function e(){var l=[],c=0,h={B:function(){return l},c:function(d){return(l[Math.floor(d/8)]>>>7-d%8&1)==1},put:function(d,f){for(var p=0;p<f;p+=1)h.m((d>>>f-p-1&1)==1)},f:function(){return c},m:function(d){var f=Math.floor(c/8);l.length<=f&&l.push(0),d&&(l[f]|=128>>>c%8),c+=1}};return h}function i(l,c){function h(x,S){for(var y=-1;7>=y;y+=1)if(!(-1>=x+y||m<=x+y))for(var k=-1;7>=k;k+=1)-1>=S+k||m<=S+k||(p[x+y][S+k]=0<=y&&6>=y&&(k==0||k==6)||0<=k&&6>=k&&(y==0||y==6)||2<=y&&4>=y&&2<=k&&4>=k)}function d(x,S){for(var y=m=4*l+17,k=Array(y),$=0;$<y;$+=1){k[$]=Array(y);for(var T=0;T<y;T+=1)k[$][T]=null}for(p=k,h(0,0),h(m-7,0),h(0,m-7),y=r.G(l),k=0;k<y.length;k+=1)for($=0;$<y.length;$+=1){T=y[k];var z=y[$];if(p[T][z]==null)for(var O=-2;2>=O;O+=1)for(var M=-2;2>=M;M+=1)p[T+O][z+M]=O==-2||O==2||M==-2||M==2||O==0&&M==0}for(y=8;y<m-8;y+=1)p[y][6]==null&&(p[y][6]=y%2==0);for(y=8;y<m-8;y+=1)p[6][y]==null&&(p[6][y]=y%2==0);for(y=r.w(f<<3|S),k=0;15>k;k+=1)$=!x&&(y>>k&1)==1,p[6>k?k:8>k?k+1:m-15+k][8]=$,p[8][8>k?m-k-1:9>k?15-k:14-k]=$;if(p[m-8][8]=!x,7<=l){for(y=r.A(l),k=0;18>k;k+=1)$=!x&&(y>>k&1)==1,p[Math.floor(k/3)][k%3+m-8-3]=$;for(k=0;18>k;k+=1)$=!x&&(y>>k&1)==1,p[k%3+m-8-3][Math.floor(k/3)]=$}if(b==null){for(x=a.I(l,f),y=e(),k=0;k<v.length;k+=1)$=v[k],y.put(4,4),y.put($.b(),r.f(4,l)),$.write(y);for(k=$=0;k<x.length;k+=1)$+=x[k].j;if(y.f()>8*$)throw Error("code length overflow. ("+y.f()+">"+8*$+")");for(y.f()+4<=8*$&&y.put(0,4);y.f()%8!=0;)y.m(!1);for(;!(y.f()>=8*$)&&(y.put(236,8),!(y.f()>=8*$));)y.put(17,8);var q=0;for($=k=0,T=Array(x.length),z=Array(x.length),O=0;O<x.length;O+=1){var j=x[O].j,ot=x[O].o-j;for(k=Math.max(k,j),$=Math.max($,ot),T[O]=Array(j),M=0;M<T[O].length;M+=1)T[O][M]=255&y.B()[M+q];for(q+=j,M=r.C(ot),j=s(T[O],M.b()-1).l(M),z[O]=Array(M.b()-1),M=0;M<z[O].length;M+=1)ot=M+j.b()-z[O].length,z[O][M]=0<=ot?j.c(ot):0}for(M=y=0;M<x.length;M+=1)y+=x[M].o;for(y=Array(y),M=q=0;M<k;M+=1)for(O=0;O<x.length;O+=1)M<T[O].length&&(y[q]=T[O][M],q+=1);for(M=0;M<$;M+=1)for(O=0;O<x.length;O+=1)M<z[O].length&&(y[q]=z[O][M],q+=1);b=y}for(x=b,y=-1,k=m-1,$=7,T=0,S=r.F(S),z=m-1;0<z;z-=2)for(z==6&&--z;;){for(O=0;2>O;O+=1)p[k][z-O]==null&&(M=!1,T<x.length&&(M=(x[T]>>>$&1)==1),S(k,z-O)&&(M=!M),p[k][z-O]=M,--$,$==-1&&(T+=1,$=7));if(k+=y,0>k||m<=k){k-=y,y=-y;break}}}var f=o[c],p=null,m=0,b=null,v=[],w={u:function(x){x=t(x),v.push(x),b=null},a:function(x,S){if(0>x||m<=x||0>S||m<=S)throw Error(x+","+S);return p[x][S]},h:function(){return m},J:function(){for(var x=0,S=0,y=0;8>y;y+=1){d(!0,y);var k=r.D(w);(y==0||x>k)&&(x=k,S=y)}d(!1,S)}};return w}function s(l,c){if(typeof l.length>"u")throw Error(l.length+"/"+c);var h=function(){for(var f=0;f<l.length&&l[f]==0;)f+=1;for(var p=Array(l.length-f+c),m=0;m<l.length-f;m+=1)p[m]=l[m+f];return p}(),d={c:function(f){return h[f]},b:function(){return h.length},multiply:function(f){for(var p=Array(d.b()+f.b()-1),m=0;m<d.b();m+=1)for(var b=0;b<f.b();b+=1)p[m+b]^=n.i(n.g(d.c(m))+n.g(f.c(b)));return s(p,0)},l:function(f){if(0>d.b()-f.b())return d;for(var p=n.g(d.c(0))-n.g(f.c(0)),m=Array(d.b()),b=0;b<d.b();b+=1)m[b]=d.c(b);for(b=0;b<f.b();b+=1)m[b]^=n.i(n.g(f.c(b))+p);return s(m,0).l(f)}};return d}i.s=function(l){for(var c=[],h=0;h<l.length;h++){var d=l.charCodeAt(h);128>d?c.push(d):2048>d?c.push(192|d>>6,128|d&63):55296>d||57344<=d?c.push(224|d>>12,128|d>>6&63,128|d&63):(h++,d=65536+((d&1023)<<10|l.charCodeAt(h)&1023),c.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return c};var o={L:1,M:0,Q:3,H:2},r=function(){function l(d){for(var f=0;d!=0;)f+=1,d>>>=1;return f}var c=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],h={w:function(d){for(var f=d<<10;0<=l(f)-l(1335);)f^=1335<<l(f)-l(1335);return(d<<10|f)^21522},A:function(d){for(var f=d<<12;0<=l(f)-l(7973);)f^=7973<<l(f)-l(7973);return d<<12|f},G:function(d){return c[d-1]},F:function(d){switch(d){case 0:return function(f,p){return(f+p)%2==0};case 1:return function(f){return f%2==0};case 2:return function(f,p){return p%3==0};case 3:return function(f,p){return(f+p)%3==0};case 4:return function(f,p){return(Math.floor(f/2)+Math.floor(p/3))%2==0};case 5:return function(f,p){return f*p%2+f*p%3==0};case 6:return function(f,p){return(f*p%2+f*p%3)%2==0};case 7:return function(f,p){return(f*p%3+(f+p)%2)%2==0};default:throw Error("bad maskPattern:"+d)}},C:function(d){for(var f=s([1],0),p=0;p<d;p+=1)f=f.multiply(s([1,n.i(p)],0));return f},f:function(d,f){if(d!=4||1>f||40<f)throw Error("mode: "+d+"; type: "+f);return 10>f?8:16},D:function(d){for(var f=d.h(),p=0,m=0;m<f;m+=1)for(var b=0;b<f;b+=1){for(var v=0,w=d.a(m,b),x=-1;1>=x;x+=1)if(!(0>m+x||f<=m+x))for(var S=-1;1>=S;S+=1)0>b+S||f<=b+S||(x!=0||S!=0)&&w==d.a(m+x,b+S)&&(v+=1);5<v&&(p+=3+v-5)}for(m=0;m<f-1;m+=1)for(b=0;b<f-1;b+=1)v=0,d.a(m,b)&&(v+=1),d.a(m+1,b)&&(v+=1),d.a(m,b+1)&&(v+=1),d.a(m+1,b+1)&&(v+=1),(v==0||v==4)&&(p+=3);for(m=0;m<f;m+=1)for(b=0;b<f-6;b+=1)d.a(m,b)&&!d.a(m,b+1)&&d.a(m,b+2)&&d.a(m,b+3)&&d.a(m,b+4)&&!d.a(m,b+5)&&d.a(m,b+6)&&(p+=40);for(b=0;b<f;b+=1)for(m=0;m<f-6;m+=1)d.a(m,b)&&!d.a(m+1,b)&&d.a(m+2,b)&&d.a(m+3,b)&&d.a(m+4,b)&&!d.a(m+5,b)&&d.a(m+6,b)&&(p+=40);for(b=v=0;b<f;b+=1)for(m=0;m<f;m+=1)d.a(m,b)&&(v+=1);return p+=Math.abs(100*v/f/f-50)/5*10}};return h}(),n=function(){for(var l=Array(256),c=Array(256),h=0;8>h;h+=1)l[h]=1<<h;for(h=8;256>h;h+=1)l[h]=l[h-4]^l[h-5]^l[h-6]^l[h-8];for(h=0;255>h;h+=1)c[l[h]]=h;return{g:function(d){if(1>d)throw Error("glog("+d+")");return c[d]},i:function(d){for(;0>d;)d+=255;for(;256<=d;)d-=255;return l[d]}}}(),a=function(){function l(d,f){switch(f){case o.L:return c[4*(d-1)];case o.M:return c[4*(d-1)+1];case o.Q:return c[4*(d-1)+2];case o.H:return c[4*(d-1)+3]}}var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h={I:function(d,f){var p=l(d,f);if(typeof p>"u")throw Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+f);d=p.length/3,f=[];for(var m=0;m<d;m+=1)for(var b=p[3*m],v=p[3*m+1],w=p[3*m+2],x=0;x<b;x+=1){var S=w,y={};y.o=v,y.j=S,f.push(y)}return f}};return h}();return i}());const Lv=QrCreator;var ni=class extends Y{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Lv.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return E`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${Te({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};ni.styles=[tt,Rv];u([V("canvas")],ni.prototype,"canvas",2);u([g()],ni.prototype,"value",2);u([g()],ni.prototype,"label",2);u([g({type:Number})],ni.prototype,"size",2);u([g()],ni.prototype,"fill",2);u([g()],ni.prototype,"background",2);u([g({type:Number})],ni.prototype,"radius",2);u([g({attribute:"error-correction"})],ni.prototype,"errorCorrection",2);u([L(["background","errorCorrection","fill","radius","size","value"])],ni.prototype,"generate",1);ni.define("sl-qr-code");var Fv=X`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ai=class extends Y{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return E`
      <span
        part="base"
        class=${Q({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?E` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Ai.styles=[tt,Fv];Ai.dependencies={"sl-icon":At};u([G()],Ai.prototype,"checked",2);u([G()],Ai.prototype,"hasFocus",2);u([g()],Ai.prototype,"value",2);u([g({reflect:!0})],Ai.prototype,"size",2);u([g({type:Boolean,reflect:!0})],Ai.prototype,"disabled",2);u([L("checked")],Ai.prototype,"handleCheckedChange",1);u([L("disabled",{waitUntilFirstUpdate:!0})],Ai.prototype,"handleDisabledChange",1);Ai.define("sl-radio");var Bv=X`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,Je=class extends Y{constructor(){super(...arguments),this.localize=new yt(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&(i.hasAttribute("slot")||(e+=i.textContent)),i.nodeType===Node.TEXT_NODE&&(e+=i.textContent)}),e.trim()}render(){return E`
      <div
        part="base"
        class=${Q({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Je.styles=[tt,Bv];Je.dependencies={"sl-icon":At};u([V(".option__label")],Je.prototype,"defaultSlot",2);u([G()],Je.prototype,"current",2);u([G()],Je.prototype,"selected",2);u([G()],Je.prototype,"hasHover",2);u([g({reflect:!0})],Je.prototype,"value",2);u([g({type:Boolean,reflect:!0})],Je.prototype,"disabled",2);u([L("disabled")],Je.prototype,"handleDisabledChange",1);u([L("selected")],Je.prototype,"handleSelectedChange",1);u([L("value")],Je.prototype,"handleValueChange",1);Je.define("sl-option");kt.define("sl-popup");var Hv=X`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,Ir=class extends Y{constructor(){super(...arguments),this.localize=new yt(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return E`
      <div
        part="base"
        class=${Q({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${K(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Te({width:`${this.value}%`})}>
          ${this.indeterminate?"":E` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Ir.styles=[tt,Hv];u([g({type:Number,reflect:!0})],Ir.prototype,"value",2);u([g({type:Boolean,reflect:!0})],Ir.prototype,"indeterminate",2);u([g()],Ir.prototype,"label",2);Ir.define("sl-progress-bar");var Vv=X`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Nf=class extends Y{render(){return E` <slot part="base" class="menu-label"></slot> `}};Nf.styles=[tt,Vv];Nf.define("sl-menu-label");var Nv=X`
  :host {
    display: contents;
  }
`,Ti=class extends Y{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return E` <slot></slot> `}};Ti.styles=[tt,Nv];u([g({reflect:!0})],Ti.prototype,"attr",2);u([g({attribute:"attr-old-value",type:Boolean,reflect:!0})],Ti.prototype,"attrOldValue",2);u([g({attribute:"char-data",type:Boolean,reflect:!0})],Ti.prototype,"charData",2);u([g({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Ti.prototype,"charDataOldValue",2);u([g({attribute:"child-list",type:Boolean,reflect:!0})],Ti.prototype,"childList",2);u([g({type:Boolean,reflect:!0})],Ti.prototype,"disabled",2);u([L("disabled")],Ti.prototype,"handleDisabledChange",1);u([L("attr",{waitUntilFirstUpdate:!0}),L("attr-old-value",{waitUntilFirstUpdate:!0}),L("char-data",{waitUntilFirstUpdate:!0}),L("char-data-old-value",{waitUntilFirstUpdate:!0}),L("childList",{waitUntilFirstUpdate:!0})],Ti.prototype,"handleChange",1);Ti.define("sl-mutation-observer");var Uv=X`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,ct=class extends Y{constructor(){super(...arguments),this.formControlController=new Ui(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new xe(this,"help-text","label"),this.localize=new yt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s="preserve"){const o=e??this.input.selectionStart,r=i??this.input.selectionEnd;this.input.setRangeText(t,o,r,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return E`
      <div
        part="form-control"
        class=${Q({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Q({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${K(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${K(this.placeholder)}
              minlength=${K(this.minlength)}
              maxlength=${K(this.maxlength)}
              min=${K(this.min)}
              max=${K(this.max)}
              step=${K(this.step)}
              .value=${Is(this.value)}
              autocapitalize=${K(this.autocapitalize)}
              autocomplete=${K(this.autocomplete)}
              autocorrect=${K(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${K(this.pattern)}
              enterkeyhint=${K(this.enterkeyhint)}
              inputmode=${K(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?E`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?E`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?E`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:E`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ct.styles=[tt,Fs,Uv];ct.dependencies={"sl-icon":At};u([V(".input__control")],ct.prototype,"input",2);u([G()],ct.prototype,"hasFocus",2);u([g()],ct.prototype,"title",2);u([g({reflect:!0})],ct.prototype,"type",2);u([g()],ct.prototype,"name",2);u([g()],ct.prototype,"value",2);u([po()],ct.prototype,"defaultValue",2);u([g({reflect:!0})],ct.prototype,"size",2);u([g({type:Boolean,reflect:!0})],ct.prototype,"filled",2);u([g({type:Boolean,reflect:!0})],ct.prototype,"pill",2);u([g()],ct.prototype,"label",2);u([g({attribute:"help-text"})],ct.prototype,"helpText",2);u([g({type:Boolean})],ct.prototype,"clearable",2);u([g({type:Boolean,reflect:!0})],ct.prototype,"disabled",2);u([g()],ct.prototype,"placeholder",2);u([g({type:Boolean,reflect:!0})],ct.prototype,"readonly",2);u([g({attribute:"password-toggle",type:Boolean})],ct.prototype,"passwordToggle",2);u([g({attribute:"password-visible",type:Boolean})],ct.prototype,"passwordVisible",2);u([g({attribute:"no-spin-buttons",type:Boolean})],ct.prototype,"noSpinButtons",2);u([g({reflect:!0})],ct.prototype,"form",2);u([g({type:Boolean,reflect:!0})],ct.prototype,"required",2);u([g()],ct.prototype,"pattern",2);u([g({type:Number})],ct.prototype,"minlength",2);u([g({type:Number})],ct.prototype,"maxlength",2);u([g()],ct.prototype,"min",2);u([g()],ct.prototype,"max",2);u([g()],ct.prototype,"step",2);u([g()],ct.prototype,"autocapitalize",2);u([g()],ct.prototype,"autocorrect",2);u([g()],ct.prototype,"autocomplete",2);u([g({type:Boolean})],ct.prototype,"autofocus",2);u([g()],ct.prototype,"enterkeyhint",2);u([g({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],ct.prototype,"spellcheck",2);u([g()],ct.prototype,"inputmode",2);u([L("disabled",{waitUntilFirstUpdate:!0})],ct.prototype,"handleDisabledChange",1);u([L("step",{waitUntilFirstUpdate:!0})],ct.prototype,"handleStepChange",1);u([L("value",{waitUntilFirstUpdate:!0})],ct.prototype,"handleValueChange",1);var jv=ct;ct.define("sl-input");var Wv=X`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,pc=class extends Y{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],i=t.composedPath(),s=i.find(a=>{var l;return e.includes(((l=a?.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!s||i.find(a=>{var l;return((l=a?.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;const n=s;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),i=this.getCurrentItem();let s=i?e.indexOf(i):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?s++:t.key==="ArrowUp"?s--:t.key==="Home"?s=0:t.key==="End"&&(s=e.length-1),s<0&&(s=e.length-1),s>e.length-1&&(s=0),this.setCurrentItem(e[s]),e[s].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(i=>{i.setAttribute("tabindex",i===t?"0":"-1")})}render(){return E`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};pc.styles=[tt,Wv];u([V("slot")],pc.prototype,"defaultSlot",2);pc.define("sl-menu");var qv=X`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ir=(t,e)=>{const i=t._$AN;if(i===void 0)return!1;for(const s of i)s._$AO?.(e,!1),ir(s,e);return!0},In=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while(i?.size===0)},Uf=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Xv(e)}};function Kv(t){this._$AN!==void 0?(In(this),this._$AM=t,Uf(this)):this._$AM=t}function Yv(t,e=!1,i=0){const s=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(s))for(let r=i;r<s.length;r++)ir(s[r],!1),In(s[r]);else s!=null&&(ir(s,!1),In(s));else ir(this,t)}const Xv=t=>{t.type==yi.CHILD&&(t._$AP??=Yv,t._$AQ??=Kv)};class Gv extends zr{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,s){super._$AT(e,i,s),Uf(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(ir(this,e),In(this))}setValue(e){if(xf(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jv=()=>new Zv;class Zv{}const Ma=new WeakMap,Qv=Er(class extends Gv{render(t){return Ot}update(t,[e]){const i=e!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),Ot}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let i=Ma.get(e);i===void 0&&(i=new WeakMap,Ma.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?Ma.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var ty=class{constructor(t,e){this.popupRef=Jv(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var s;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(s=i.target.role)!=null&&s.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),s=i?.assignedElements({flatten:!0}).filter(c=>c.localName==="sl-menu")[0],o=getComputedStyle(this.host).direction==="rtl";if(!s)return;const{left:r,top:n,width:a,height:l}=s.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?r+a:r}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?r+a:r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+l}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let i=null;for(const s of e.assignedElements())if(i=s.querySelectorAll("sl-menu-item, [role^='menuitem']"),i.length!==0)break;if(!(!i||i.length===0)){i[0].setAttribute("tabindex","0");for(let s=1;s!==i.length;++s)i[s].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),s=["padding-top","border-top-width","margin-top"].reduce((o,r)=>{var n;const a=(n=e.get(r))!=null?n:new CSSUnitValue(0,"px"),c=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return o-c.value},0);this.skidding=s}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?E`
      <sl-popup
        ${Qv(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:E` <slot name="submenu" hidden></slot> `}},He=class extends Y{constructor(){super(...arguments),this.localize=new yt(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new xe(this,"submenu"),this.submenuController=new ty(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Vb(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return E`
      <div
        id="anchor"
        part="base"
        class=${Q({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?E` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};He.styles=[tt,qv];He.dependencies={"sl-icon":At,"sl-popup":kt,"sl-spinner":Mr};u([V("slot:not([name])")],He.prototype,"defaultSlot",2);u([V(".menu-item")],He.prototype,"menuItem",2);u([g()],He.prototype,"type",2);u([g({type:Boolean,reflect:!0})],He.prototype,"checked",2);u([g()],He.prototype,"value",2);u([g({type:Boolean,reflect:!0})],He.prototype,"loading",2);u([g({type:Boolean,reflect:!0})],He.prototype,"disabled",2);u([L("checked")],He.prototype,"handleCheckedChange",1);u([L("disabled")],He.prototype,"handleDisabledChange",1);u([L("type")],He.prototype,"handleTypeChange",1);He.define("sl-menu-item");var ey=X`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Ns=class extends Y{constructor(){super(...arguments),this.localize=new yt(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),i=this.localize.dir()==="rtl";t.preventDefault(),er(this.base,{onMove:s=>{this.position=parseFloat(Wt(s/e*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const s=t.shiftKey?10:1;let o=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight")&&(o-=s),(e&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft")&&(o+=s),t.key==="Home"&&(o=0),t.key==="End"&&(o=100),o=Wt(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){const t=this.localize.dir()==="rtl";return E`
      <div
        part="base"
        id="image-comparer"
        class=${Q({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${Te({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${Te({left:t?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};Ns.styles=[tt,ey];Ns.scopedElement={"sl-icon":At};u([V(".image-comparer")],Ns.prototype,"base",2);u([V(".image-comparer__handle")],Ns.prototype,"handle",2);u([g({type:Number,reflect:!0})],Ns.prototype,"position",2);u([L("position",{waitUntilFirstUpdate:!0})],Ns.prototype,"handlePositionChange",1);Ns.define("sl-image-comparer");var iy=X`
  :host {
    display: block;
  }
`,Da=new Map;function sy(t,e="cors"){const i=Da.get(t);if(i!==void 0)return Promise.resolve(i);const s=fetch(t,{mode:e}).then(async o=>{const r={ok:o.ok,status:o.status,html:await o.text()};return Da.set(t,r),r});return Da.set(t,s),s}var yo=class extends Y{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(i=>e.setAttribute(i.name,i.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await sy(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(i=>this.executeScript(i)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return E`<slot></slot>`}};yo.styles=[tt,iy];u([g()],yo.prototype,"src",2);u([g()],yo.prototype,"mode",2);u([g({attribute:"allow-scripts",type:Boolean})],yo.prototype,"allowScripts",2);u([L("src")],yo.prototype,"handleSrcChange",1);yo.define("sl-include");At.define("sl-icon");Xt.define("sl-icon-button");var la=class extends Y{constructor(){super(...arguments),this.localize=new yt(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],i=this.unit==="bit"?t:e,s=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),i.length-1)),o=i[s]+this.unit,r=parseFloat((this.value/Math.pow(1e3,s)).toPrecision(3));return this.localize.number(r,{style:"unit",unit:o,unitDisplay:this.display})}};u([g({type:Number})],la.prototype,"value",2);u([g()],la.prototype,"unit",2);u([g()],la.prototype,"display",2);la.define("sl-format-bytes");var Ve=class extends Y{constructor(){super(...arguments),this.localize=new yt(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return E`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};u([g()],Ve.prototype,"date",2);u([g()],Ve.prototype,"weekday",2);u([g()],Ve.prototype,"era",2);u([g()],Ve.prototype,"year",2);u([g()],Ve.prototype,"month",2);u([g()],Ve.prototype,"day",2);u([g()],Ve.prototype,"hour",2);u([g()],Ve.prototype,"minute",2);u([g()],Ve.prototype,"second",2);u([g({attribute:"time-zone-name"})],Ve.prototype,"timeZoneName",2);u([g({attribute:"time-zone"})],Ve.prototype,"timeZone",2);u([g({attribute:"hour-format"})],Ve.prototype,"hourFormat",2);Ve.define("sl-format-date");var ai=class extends Y{constructor(){super(...arguments),this.localize=new yt(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};u([g({type:Number})],ai.prototype,"value",2);u([g()],ai.prototype,"type",2);u([g({attribute:"no-grouping",type:Boolean})],ai.prototype,"noGrouping",2);u([g()],ai.prototype,"currency",2);u([g({attribute:"currency-display"})],ai.prototype,"currencyDisplay",2);u([g({attribute:"minimum-integer-digits",type:Number})],ai.prototype,"minimumIntegerDigits",2);u([g({attribute:"minimum-fraction-digits",type:Number})],ai.prototype,"minimumFractionDigits",2);u([g({attribute:"maximum-fraction-digits",type:Number})],ai.prototype,"maximumFractionDigits",2);u([g({attribute:"minimum-significant-digits",type:Number})],ai.prototype,"minimumSignificantDigits",2);u([g({attribute:"maximum-significant-digits",type:Number})],ai.prototype,"maximumSignificantDigits",2);ai.define("sl-format-number");var oy=X`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,ca=class extends Y{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};ca.styles=[tt,oy];u([g({type:Boolean,reflect:!0})],ca.prototype,"vertical",2);u([L("vertical")],ca.prototype,"handleVerticalChange",1);ca.define("sl-divider");var ry=X`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*gc(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*pb(gc(t.shadowRoot.activeElement))))}function jf(){return[...gc()].pop()}var Bh=new WeakMap;function Wf(t){let e=Bh.get(t);return e||(e=window.getComputedStyle(t,null),Bh.set(t,e)),e}function ny(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Wf(t);return e.visibility!=="hidden"&&e.display!=="none"}function ay(t){const e=Wf(t),{overflowY:i,overflowX:s}=e;return i==="scroll"||s==="scroll"?!0:i!=="auto"||s!=="auto"?!1:t.scrollHeight>t.clientHeight&&i==="auto"||t.scrollWidth>t.clientWidth&&s==="auto"}function ly(t){const e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){const r=t.getRootNode(),n=`input[type='radio'][name="${t.getAttribute("name")}"]`,a=r.querySelector(`${n}:checked`);return a?a===t:r.querySelector(n)===t}return ny(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:ay(t):!1}function cy(t){var e,i;const s=yl(t),o=(e=s[0])!=null?e:null,r=(i=s[s.length-1])!=null?i:null;return{start:o,end:r}}function hy(t,e){var i;return((i=t.getRootNode({composed:!0}))==null?void 0:i.host)!==e}function yl(t){const e=new WeakMap,i=[];function s(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||e.has(o))return;e.set(o,!0),!i.includes(o)&&ly(o)&&i.push(o),o instanceof HTMLSlotElement&&hy(o,t)&&o.assignedElements({flatten:!0}).forEach(r=>{s(r)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&s(o.shadowRoot)}for(const r of o.children)s(r)}return s(t),i.sort((o,r)=>{const n=Number(o.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-n})}var Mo=[],qf=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var i;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=jf();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=yl(this.element);let r=o.findIndex(a=>a===s);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){r+n>=o.length?r=0:r+n<0?r=o.length-1:r+=n,this.previousFocus=this.currentFocus;const a=o[r];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;e.preventDefault(),this.currentFocus=a,(i=this.currentFocus)==null||i.focus({preventScroll:!1});const l=[...gc()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Mo.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Mo=Mo.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Mo[Mo.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=yl(this.element);if(!this.element.matches(":focus-within")){const e=t[0],i=t[t.length-1],s=this.tabDirection==="forward"?e:i;typeof s?.focus=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},mc=t=>{var e;const{activeElement:i}=document;i&&t.contains(i)&&((e=document.activeElement)==null||e.blur())};function Hh(t){return t.charAt(0).toUpperCase()+t.slice(1)}var Ne=class extends Y{constructor(){super(...arguments),this.hasSlotController=new xe(this,"footer"),this.localize=new yt(this),this.modal=new qf(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Qo(this)))}disconnectedCallback(){super.disconnectedCallback(),tr(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const i=Pt(this,"drawer.denyClose",{dir:this.localize.dir()});Bt(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Qo(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([qt(this.drawer),qt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Pt(this,`drawer.show${Hh(this.placement)}`,{dir:this.localize.dir()}),i=Pt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Bt(this.panel,e.keyframes,e.options),Bt(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{mc(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),tr(this)),await Promise.all([qt(this.drawer),qt(this.overlay)]);const t=Pt(this,`drawer.hide${Hh(this.placement)}`,{dir:this.localize.dir()}),e=Pt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Bt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Bt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Qo(this)),this.open&&this.contained&&(this.modal.deactivate(),tr(this))}async show(){if(!this.open)return this.open=!0,_e(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,_e(this,"sl-after-hide")}render(){return E`
      <div
        part="base"
        class=${Q({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${K(this.noHeader?this.label:void 0)}
          aria-labelledby=${K(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":E`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Ne.styles=[tt,ry];Ne.dependencies={"sl-icon-button":Xt};u([V(".drawer")],Ne.prototype,"drawer",2);u([V(".drawer__panel")],Ne.prototype,"panel",2);u([V(".drawer__overlay")],Ne.prototype,"overlay",2);u([g({type:Boolean,reflect:!0})],Ne.prototype,"open",2);u([g({reflect:!0})],Ne.prototype,"label",2);u([g({reflect:!0})],Ne.prototype,"placement",2);u([g({type:Boolean,reflect:!0})],Ne.prototype,"contained",2);u([g({attribute:"no-header",type:Boolean,reflect:!0})],Ne.prototype,"noHeader",2);u([L("open",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleOpenChange",1);u([L("contained",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleNoModalChange",1);wt("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});wt("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});wt("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});wt("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});wt("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});wt("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});wt("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});wt("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});wt("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});wt("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});wt("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Ne.define("sl-drawer");var dy=X`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,le=class extends Y{constructor(){super(...arguments),this.localize=new yt(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}const i=(s,o)=>{if(!s)return null;const r=s.closest(o);if(r)return r;const n=s.getRootNode();return n instanceof ShadowRoot?i(n.host,o):null};setTimeout(()=>{var s;const o=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?jf():document.activeElement;(!this.containingElement||i(o,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const i=e.getAllItems(),s=i[0],o=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(s),s.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(s=>cy(s).start);let i;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=e.button;break;default:i=e}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,_e(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,_e(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await qt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=Pt(this,"dropdown.show",{dir:this.localize.dir()});await Bt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await qt(this);const{keyframes:t,options:e}=Pt(this,"dropdown.hide",{dir:this.localize.dir()});await Bt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return E`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${K(this.sync?this.sync:void 0)}
        class=${Q({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};le.styles=[tt,dy];le.dependencies={"sl-popup":kt};u([V(".dropdown")],le.prototype,"popup",2);u([V(".dropdown__trigger")],le.prototype,"trigger",2);u([V(".dropdown__panel")],le.prototype,"panel",2);u([g({type:Boolean,reflect:!0})],le.prototype,"open",2);u([g({reflect:!0})],le.prototype,"placement",2);u([g({type:Boolean,reflect:!0})],le.prototype,"disabled",2);u([g({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],le.prototype,"stayOpenOnSelect",2);u([g({attribute:!1})],le.prototype,"containingElement",2);u([g({type:Number})],le.prototype,"distance",2);u([g({type:Number})],le.prototype,"skidding",2);u([g({type:Boolean})],le.prototype,"hoist",2);u([g({reflect:!0})],le.prototype,"sync",2);u([L("open",{waitUntilFirstUpdate:!0})],le.prototype,"handleOpenChange",1);wt("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});wt("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});le.define("sl-dropdown");var uy=X`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,te=class extends Y{constructor(){super(...arguments),this.localize=new yt(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),i=this.from.includes("."),s=this.from.includes("[")&&this.from.includes("]");let o=this.from,r="";i?[o,r]=this.from.trim().split("."):s&&([o,r]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in e?e.getElementById(o):null;n?s?t=n.getAttribute(r)||"":i?t=n[r]||"":t=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),s=this.errorLabel||this.localize.term("error"),o=t==="success"?this.successIcon:this.errorIcon,r=Pt(this,"copy.in",{dir:"ltr"}),n=Pt(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?i:s,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=t,o.hidden=!1,await o.animate(r.keyframes,r.options).finished,setTimeout(async()=>{await o.animate(n.keyframes,n.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(r.keyframes,r.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return E`
      <sl-tooltip
        class=${Q({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};te.styles=[tt,uy];te.dependencies={"sl-icon":At,"sl-tooltip":Qt};u([V('slot[name="copy-icon"]')],te.prototype,"copyIcon",2);u([V('slot[name="success-icon"]')],te.prototype,"successIcon",2);u([V('slot[name="error-icon"]')],te.prototype,"errorIcon",2);u([V("sl-tooltip")],te.prototype,"tooltip",2);u([G()],te.prototype,"isCopying",2);u([G()],te.prototype,"status",2);u([g()],te.prototype,"value",2);u([g()],te.prototype,"from",2);u([g({type:Boolean,reflect:!0})],te.prototype,"disabled",2);u([g({attribute:"copy-label"})],te.prototype,"copyLabel",2);u([g({attribute:"success-label"})],te.prototype,"successLabel",2);u([g({attribute:"error-label"})],te.prototype,"errorLabel",2);u([g({attribute:"feedback-duration",type:Number})],te.prototype,"feedbackDuration",2);u([g({attribute:"tooltip-placement"})],te.prototype,"tooltipPlacement",2);u([g({type:Boolean})],te.prototype,"hoist",2);wt("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});wt("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});te.define("sl-copy-button");var fy=X`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,li=class extends Y{constructor(){super(...arguments),this.localize=new yt(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await qt(this.body);const{keyframes:e,options:i}=Pt(this,"details.show",{dir:this.localize.dir()});await Bt(this.body,zn(e,this.body.scrollHeight),i),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await qt(this.body);const{keyframes:e,options:i}=Pt(this,"details.hide",{dir:this.localize.dir()});await Bt(this.body,zn(e,this.body.scrollHeight),i),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,_e(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,_e(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return E`
      <details
        part="base"
        class=${Q({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};li.styles=[tt,fy];li.dependencies={"sl-icon":At};u([V(".details")],li.prototype,"details",2);u([V(".details__header")],li.prototype,"header",2);u([V(".details__body")],li.prototype,"body",2);u([V(".details__expand-icon-slot")],li.prototype,"expandIconSlot",2);u([g({type:Boolean,reflect:!0})],li.prototype,"open",2);u([g()],li.prototype,"summary",2);u([g({type:Boolean,reflect:!0})],li.prototype,"disabled",2);u([L("open",{waitUntilFirstUpdate:!0})],li.prototype,"handleOpenChange",1);wt("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});wt("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});li.define("sl-details");var py=X`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Ei=class extends Y{constructor(){super(...arguments),this.hasSlotController=new xe(this,"footer"),this.localize=new yt(this),this.modal=new qf(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Qo(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),tr(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const i=Pt(this,"dialog.denyClose",{dir:this.localize.dir()});Bt(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Qo(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([qt(this.dialog),qt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Pt(this,"dialog.show",{dir:this.localize.dir()}),i=Pt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Bt(this.panel,e.keyframes,e.options),Bt(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{mc(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([qt(this.dialog),qt(this.overlay)]);const t=Pt(this,"dialog.hide",{dir:this.localize.dir()}),e=Pt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Bt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Bt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,tr(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,_e(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,_e(this,"sl-after-hide")}render(){return E`
      <div
        part="base"
        class=${Q({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${K(this.noHeader?this.label:void 0)}
          aria-labelledby=${K(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":E`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Ei.styles=[tt,py];Ei.dependencies={"sl-icon-button":Xt};u([V(".dialog")],Ei.prototype,"dialog",2);u([V(".dialog__panel")],Ei.prototype,"panel",2);u([V(".dialog__overlay")],Ei.prototype,"overlay",2);u([g({type:Boolean,reflect:!0})],Ei.prototype,"open",2);u([g({reflect:!0})],Ei.prototype,"label",2);u([g({attribute:"no-header",type:Boolean,reflect:!0})],Ei.prototype,"noHeader",2);u([L("open",{waitUntilFirstUpdate:!0})],Ei.prototype,"handleOpenChange",1);wt("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});wt("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});wt("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});wt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});wt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Ei.define("sl-dialog");var gy=Kt;Kt.define("sl-checkbox");var my=X`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Ct=class extends Y{constructor(){super(...arguments),this.formControlController=new Ui(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new xe(this,"[default]","prefix","suffix"),this.localize=new yt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:ea}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Pn`a`:Pn`button`;return Zo`
      <${e}
        part="base"
        class=${Q({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${K(t?void 0:this.disabled)}
        type=${K(t?void 0:this.type)}
        title=${this.title}
        name=${K(t?void 0:this.name)}
        value=${K(t?void 0:this.value)}
        href=${K(t&&!this.disabled?this.href:void 0)}
        target=${K(t?this.target:void 0)}
        download=${K(t?this.download:void 0)}
        rel=${K(t?this.rel:void 0)}
        role=${K(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Zo` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Zo`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};Ct.styles=[tt,Bf];Ct.dependencies={"sl-icon":At,"sl-spinner":Mr};u([V(".button")],Ct.prototype,"button",2);u([G()],Ct.prototype,"hasFocus",2);u([G()],Ct.prototype,"invalid",2);u([g()],Ct.prototype,"title",2);u([g({reflect:!0})],Ct.prototype,"variant",2);u([g({reflect:!0})],Ct.prototype,"size",2);u([g({type:Boolean,reflect:!0})],Ct.prototype,"caret",2);u([g({type:Boolean,reflect:!0})],Ct.prototype,"disabled",2);u([g({type:Boolean,reflect:!0})],Ct.prototype,"loading",2);u([g({type:Boolean,reflect:!0})],Ct.prototype,"outline",2);u([g({type:Boolean,reflect:!0})],Ct.prototype,"pill",2);u([g({type:Boolean,reflect:!0})],Ct.prototype,"circle",2);u([g()],Ct.prototype,"type",2);u([g()],Ct.prototype,"name",2);u([g()],Ct.prototype,"value",2);u([g()],Ct.prototype,"href",2);u([g()],Ct.prototype,"target",2);u([g()],Ct.prototype,"rel",2);u([g()],Ct.prototype,"download",2);u([g()],Ct.prototype,"form",2);u([g({attribute:"formaction"})],Ct.prototype,"formAction",2);u([g({attribute:"formenctype"})],Ct.prototype,"formEnctype",2);u([g({attribute:"formmethod"})],Ct.prototype,"formMethod",2);u([g({attribute:"formnovalidate",type:Boolean})],Ct.prototype,"formNoValidate",2);u([g({attribute:"formtarget"})],Ct.prototype,"formTarget",2);u([L("disabled",{waitUntilFirstUpdate:!0})],Ct.prototype,"handleDisabledChange",1);function re(t,e){by(t)&&(t="100%");const i=vy(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function Kr(t){return Math.min(1,Math.max(0,t))}function by(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function vy(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Kf(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Yr(t){return Number(t)<=1?`${Number(t)*100}%`:t}function Ts(t){return t.length===1?"0"+t:String(t)}function yy(t,e,i){return{r:re(t,255)*255,g:re(e,255)*255,b:re(i,255)*255}}function Vh(t,e,i){t=re(t,255),e=re(e,255),i=re(i,255);const s=Math.max(t,e,i),o=Math.min(t,e,i);let r=0,n=0;const a=(s+o)/2;if(s===o)n=0,r=0;else{const l=s-o;switch(n=a>.5?l/(2-s-o):l/(s+o),s){case t:r=(e-i)/l+(e<i?6:0);break;case e:r=(i-t)/l+2;break;case i:r=(t-e)/l+4;break}r/=6}return{h:r,s:n,l:a}}function Oa(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*(6*i):i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function _y(t,e,i){let s,o,r;if(t=re(t,360),e=re(e,100),i=re(i,100),e===0)o=i,r=i,s=i;else{const n=i<.5?i*(1+e):i+e-i*e,a=2*i-n;s=Oa(a,n,t+1/3),o=Oa(a,n,t),r=Oa(a,n,t-1/3)}return{r:s*255,g:o*255,b:r*255}}function Nh(t,e,i){t=re(t,255),e=re(e,255),i=re(i,255);const s=Math.max(t,e,i),o=Math.min(t,e,i);let r=0;const n=s,a=s-o,l=s===0?0:a/s;if(s===o)r=0;else{switch(s){case t:r=(e-i)/a+(e<i?6:0);break;case e:r=(i-t)/a+2;break;case i:r=(t-e)/a+4;break}r/=6}return{h:r,s:l,v:n}}function xy(t,e,i){t=re(t,360)*6,e=re(e,100),i=re(i,100);const s=Math.floor(t),o=t-s,r=i*(1-e),n=i*(1-o*e),a=i*(1-(1-o)*e),l=s%6,c=[i,n,r,r,a,i][l],h=[a,i,i,n,r,r][l],d=[r,r,a,i,i,n][l];return{r:c*255,g:h*255,b:d*255}}function Uh(t,e,i,s){const o=[Ts(Math.round(t).toString(16)),Ts(Math.round(e).toString(16)),Ts(Math.round(i).toString(16))];return s&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function wy(t,e,i,s,o){const r=[Ts(Math.round(t).toString(16)),Ts(Math.round(e).toString(16)),Ts(Math.round(i).toString(16)),Ts(Cy(s))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}function ky(t,e,i,s){const o=t/100,r=e/100,n=i/100,a=s/100,l=255*(1-o)*(1-a),c=255*(1-r)*(1-a),h=255*(1-n)*(1-a);return{r:l,g:c,b:h}}function jh(t,e,i){let s=1-t/255,o=1-e/255,r=1-i/255,n=Math.min(s,o,r);return n===1?(s=0,o=0,r=0):(s=(s-n)/(1-n)*100,o=(o-n)/(1-n)*100,r=(r-n)/(1-n)*100),n*=100,{c:Math.round(s),m:Math.round(o),y:Math.round(r),k:Math.round(n)}}function Cy(t){return Math.round(parseFloat(t)*255).toString(16)}function Wh(t){return De(t)/255}function De(t){return parseInt(t,16)}function Sy(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const _l={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function $y(t){let e={r:0,g:0,b:0},i=1,s=null,o=null,r=null,n=!1,a=!1;return typeof t=="string"&&(t=Ey(t)),typeof t=="object"&&(Me(t.r)&&Me(t.g)&&Me(t.b)?(e=yy(t.r,t.g,t.b),n=!0,a=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Me(t.h)&&Me(t.s)&&Me(t.v)?(s=Yr(t.s),o=Yr(t.v),e=xy(t.h,s,o),n=!0,a="hsv"):Me(t.h)&&Me(t.s)&&Me(t.l)?(s=Yr(t.s),r=Yr(t.l),e=_y(t.h,s,r),n=!0,a="hsl"):Me(t.c)&&Me(t.m)&&Me(t.y)&&Me(t.k)&&(e=ky(t.c,t.m,t.y,t.k),n=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=Kf(i),{ok:n,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}const Ay="[-\\+]?\\d+%?",Ty="[-\\+]?\\d*\\.\\d+%?",Qi="(?:"+Ty+")|(?:"+Ay+")",Pa="[\\s|\\(]+("+Qi+")[,|\\s]+("+Qi+")[,|\\s]+("+Qi+")\\s*\\)?",Xr="[\\s|\\(]+("+Qi+")[,|\\s]+("+Qi+")[,|\\s]+("+Qi+")[,|\\s]+("+Qi+")\\s*\\)?",We={CSS_UNIT:new RegExp(Qi),rgb:new RegExp("rgb"+Pa),rgba:new RegExp("rgba"+Xr),hsl:new RegExp("hsl"+Pa),hsla:new RegExp("hsla"+Xr),hsv:new RegExp("hsv"+Pa),hsva:new RegExp("hsva"+Xr),cmyk:new RegExp("cmyk"+Xr),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Ey(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(_l[t])t=_l[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let i=We.rgb.exec(t);return i?{r:i[1],g:i[2],b:i[3]}:(i=We.rgba.exec(t),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=We.hsl.exec(t),i?{h:i[1],s:i[2],l:i[3]}:(i=We.hsla.exec(t),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=We.hsv.exec(t),i?{h:i[1],s:i[2],v:i[3]}:(i=We.hsva.exec(t),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=We.cmyk.exec(t),i?{c:i[1],m:i[2],y:i[3],k:i[4]}:(i=We.hex8.exec(t),i?{r:De(i[1]),g:De(i[2]),b:De(i[3]),a:Wh(i[4]),format:e?"name":"hex8"}:(i=We.hex6.exec(t),i?{r:De(i[1]),g:De(i[2]),b:De(i[3]),format:e?"name":"hex"}:(i=We.hex4.exec(t),i?{r:De(i[1]+i[1]),g:De(i[2]+i[2]),b:De(i[3]+i[3]),a:Wh(i[4]+i[4]),format:e?"name":"hex8"}:(i=We.hex3.exec(t),i?{r:De(i[1]+i[1]),g:De(i[2]+i[2]),b:De(i[3]+i[3]),format:e?"name":"hex"}:!1))))))))))}function Me(t){return typeof t=="number"?!Number.isNaN(t):We.CSS_UNIT.test(t)}class Ft{constructor(e="",i={}){if(e instanceof Ft)return e;typeof e=="number"&&(e=Sy(e)),this.originalInput=e;const s=$y(e);this.originalInput=e,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=i.format??s.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let i,s,o;const r=e.r/255,n=e.g/255,a=e.b/255;return r<=.03928?i=r/12.92:i=Math.pow((r+.055)/1.055,2.4),n<=.03928?s=n/12.92:s=Math.pow((n+.055)/1.055,2.4),a<=.03928?o=a/12.92:o=Math.pow((a+.055)/1.055,2.4),.2126*i+.7152*s+.0722*o}getAlpha(){return this.a}setAlpha(e){return this.a=Kf(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=Nh(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=Nh(this.r,this.g,this.b),i=Math.round(e.h*360),s=Math.round(e.s*100),o=Math.round(e.v*100);return this.a===1?`hsv(${i}, ${s}%, ${o}%)`:`hsva(${i}, ${s}%, ${o}%, ${this.roundA})`}toHsl(){const e=Vh(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=Vh(this.r,this.g,this.b),i=Math.round(e.h*360),s=Math.round(e.s*100),o=Math.round(e.l*100);return this.a===1?`hsl(${i}, ${s}%, ${o}%)`:`hsla(${i}, ${s}%, ${o}%, ${this.roundA})`}toHex(e=!1){return Uh(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return wy(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),i=Math.round(this.g),s=Math.round(this.b);return this.a===1?`rgb(${e}, ${i}, ${s})`:`rgba(${e}, ${i}, ${s}, ${this.roundA})`}toPercentageRgb(){const e=i=>`${Math.round(re(i,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=i=>Math.round(re(i,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...jh(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:i,y:s,k:o}=jh(this.r,this.g,this.b);return`cmyk(${e}, ${i}, ${s}, ${o})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+Uh(this.r,this.g,this.b,!1);for(const[i,s]of Object.entries(_l))if(e===s)return i;return!1}toString(e){const i=!!e;e=e??this.format;let s=!1;const o=this.a<1&&this.a>=0;return!i&&o&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(s=this.toRgbString()),e==="prgb"&&(s=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(s=this.toHexString()),e==="hex3"&&(s=this.toHexString(!0)),e==="hex4"&&(s=this.toHex8String(!0)),e==="hex8"&&(s=this.toHex8String()),e==="name"&&(s=this.toName()),e==="hsl"&&(s=this.toHslString()),e==="hsv"&&(s=this.toHsvString()),e==="cmyk"&&(s=this.toCmykString()),s||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new Ft(this.toString())}lighten(e=10){const i=this.toHsl();return i.l+=e/100,i.l=Kr(i.l),new Ft(i)}brighten(e=10){const i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(e/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(e/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(e/100)))),new Ft(i)}darken(e=10){const i=this.toHsl();return i.l-=e/100,i.l=Kr(i.l),new Ft(i)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const i=this.toHsl();return i.s-=e/100,i.s=Kr(i.s),new Ft(i)}saturate(e=10){const i=this.toHsl();return i.s+=e/100,i.s=Kr(i.s),new Ft(i)}greyscale(){return this.desaturate(100)}spin(e){const i=this.toHsl(),s=(i.h+e)%360;return i.h=s<0?360+s:s,new Ft(i)}mix(e,i=50){const s=this.toRgb(),o=new Ft(e).toRgb(),r=i/100,n={r:(o.r-s.r)*r+s.r,g:(o.g-s.g)*r+s.g,b:(o.b-s.b)*r+s.b,a:(o.a-s.a)*r+s.a};return new Ft(n)}analogous(e=6,i=30){const s=this.toHsl(),o=360/i,r=[this];for(s.h=(s.h-(o*e>>1)+720)%360;--e;)s.h=(s.h+o)%360,r.push(new Ft(s));return r}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new Ft(e)}monochromatic(e=6){const i=this.toHsv(),{h:s}=i,{s:o}=i;let{v:r}=i;const n=[],a=1/e;for(;e--;)n.push(new Ft({h:s,s:o,v:r})),r=(r+a)%1;return n}splitcomplement(){const e=this.toHsl(),{h:i}=e;return[this,new Ft({h:(i+72)%360,s:e.s,l:e.l}),new Ft({h:(i+216)%360,s:e.s,l:e.l})]}onBackground(e){const i=this.toRgb(),s=new Ft(e).toRgb(),o=i.a+s.a*(1-i.a);return new Ft({r:(i.r*i.a+s.r*s.a*(1-i.a))/o,g:(i.g*i.a+s.g*s.a*(1-i.a))/o,b:(i.b*i.a+s.b*s.a*(1-i.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const i=this.toHsl(),{h:s}=i,o=[this],r=360/e;for(let n=1;n<e;n++)o.push(new Ft({h:(s+n*r)%360,s:i.s,l:i.l}));return o}equals(e){const i=new Ft(e);return this.format==="cmyk"||i.format==="cmyk"?this.toCmykString()===i.toCmykString():this.toRgbString()===i.toRgbString()}}var qh="EyeDropper"in window,pt=class extends Y{constructor(){super(),this.formControlController=new Ui(this),this.isSafeValue=!1,this.localize=new yt(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=e.querySelector(".color-picker__slider-handle"),{width:s}=e.getBoundingClientRect();let o=this.value,r=this.value;i.focus(),t.preventDefault(),er(e,{onMove:n=>{this.alpha=Wt(n/s*100,0,100),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=e.querySelector(".color-picker__slider-handle"),{width:s}=e.getBoundingClientRect();let o=this.value,r=this.value;i.focus(),t.preventDefault(),er(e,{onMove:n=>{this.hue=Wt(n/s*360,0,360),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),i=e.querySelector(".color-picker__grid-handle"),{width:s,height:o}=e.getBoundingClientRect();let r=this.value,n=this.value;i.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,er(e,{onMove:(a,l)=>{this.saturation=Wt(a/s*100,0,100),this.brightness=Wt(100-l/o*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=Wt(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=Wt(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=Wt(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=Wt(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=Wt(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=Wt(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=Wt(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=Wt(this.brightness-e,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,i=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new Ft(t);if(!e.isValid)return null;const i=e.toHsl(),s={h:i.h,s:i.s*100,l:i.l*100,a:i.a},o=e.toRgb(),r=e.toHexString(),n=e.toHex8String(),a=e.toHsv(),l={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(r),hexa:this.setLetterCase(n)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!qh)return;new EyeDropper().open().then(e=>{const i=this.value;this.setColor(e.sRGBHex),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,i,s=100){const o=new Ft(`hsva(${t}, ${e}%, ${i}%, ${s/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(e);i!==null?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=i.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),s=E`
      <div
        part="base"
        class=${Q({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?E`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Te({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${Q({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Te({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${K(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${Te({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${K(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?E`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Te({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Te({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${K(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${Te({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":E`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${qh?E`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${i.length>0?E`
              <div part="swatches" class="color-picker__swatches">
                ${i.map(o=>{const r=this.parseColor(o);return r?E`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${K(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(r.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Te({backgroundColor:r.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?s:E`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${Q({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Te({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${s}
      </sl-dropdown>
    `}};pt.styles=[tt,my];pt.dependencies={"sl-button-group":Vs,"sl-button":Ct,"sl-dropdown":le,"sl-icon":At,"sl-input":ct,"sl-visually-hidden":uc};u([V('[part~="base"]')],pt.prototype,"base",2);u([V('[part~="input"]')],pt.prototype,"input",2);u([V(".color-dropdown")],pt.prototype,"dropdown",2);u([V('[part~="preview"]')],pt.prototype,"previewButton",2);u([V('[part~="trigger"]')],pt.prototype,"trigger",2);u([G()],pt.prototype,"hasFocus",2);u([G()],pt.prototype,"isDraggingGridHandle",2);u([G()],pt.prototype,"isEmpty",2);u([G()],pt.prototype,"inputValue",2);u([G()],pt.prototype,"hue",2);u([G()],pt.prototype,"saturation",2);u([G()],pt.prototype,"brightness",2);u([G()],pt.prototype,"alpha",2);u([g()],pt.prototype,"value",2);u([po()],pt.prototype,"defaultValue",2);u([g()],pt.prototype,"label",2);u([g()],pt.prototype,"format",2);u([g({type:Boolean,reflect:!0})],pt.prototype,"inline",2);u([g({reflect:!0})],pt.prototype,"size",2);u([g({attribute:"no-format-toggle",type:Boolean})],pt.prototype,"noFormatToggle",2);u([g()],pt.prototype,"name",2);u([g({type:Boolean,reflect:!0})],pt.prototype,"disabled",2);u([g({type:Boolean})],pt.prototype,"hoist",2);u([g({type:Boolean})],pt.prototype,"opacity",2);u([g({type:Boolean})],pt.prototype,"uppercase",2);u([g()],pt.prototype,"swatches",2);u([g({reflect:!0})],pt.prototype,"form",2);u([g({type:Boolean,reflect:!0})],pt.prototype,"required",2);u([Tr({passive:!1})],pt.prototype,"handleTouchMove",1);u([L("format",{waitUntilFirstUpdate:!0})],pt.prototype,"handleFormatChange",1);u([L("opacity",{waitUntilFirstUpdate:!0})],pt.prototype,"handleOpacityChange",1);u([L("value")],pt.prototype,"handleValueChange",1);pt.define("sl-color-picker");var zy=X`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Yf=class extends Y{constructor(){super(...arguments),this.hasSlotController=new xe(this,"footer","header","image")}render(){return E`
      <div
        part="base"
        class=${Q({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Yf.styles=[tt,zy];Yf.define("sl-card");var My=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Dy=X`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Oy(t,e){if(t!==void 0){let i=0;for(const s of t)yield e(s,i++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Py(t,e,i=1){const s=e===void 0?0:t;e??=t;for(let o=s;i>0?o<e:e<o;o+=i)yield o}var Vt=class extends Y{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new My(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new yt(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const s=t.scrollLeft,o=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==s||i!==o)&&(t.scrollTo({left:s,top:o,behavior:dl()?"auto":"smooth"}),await _e(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(i=>[...i.addedNodes,...i.removedNodes].some(s=>this.isCarouselItem(s)&&!s.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:i,loop:s}=this,o=s?t/i:(t-e)/i+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),i=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+i*i)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,i=this.localize.dir()==="rtl",s=e.closest('[part~="pagination-item"]')!==null,o=t.key==="ArrowDown"||!i&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft",r=t.key==="ArrowUp"||!i&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight";t.preventDefault(),r&&this.previous(),o&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),s&&this.updateComplete.then(()=>{var n;const a=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');a&&a.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const a of e){const l=a.target;l.toggleAttribute("inert",!a.isIntersecting),l.classList.toggle("--in-view",a.isIntersecting),l.setAttribute("aria-hidden",a.isIntersecting?"false":"true")}const i=e.find(a=>a.isIntersecting);if(!i)return;const s=this.getSlides({excludeClones:!1}),o=this.getSlides().length,r=s.indexOf(i.target),n=this.loop?r-this.slidesPerPage:r;if(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+o)%o,!this.scrolling&&this.loop&&i.target.hasAttribute("data-clone")){const a=Number(i.target.getAttribute("data-clone"));this.goToSlide(a,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("role","group"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),this.pagination&&(t.setAttribute("id",`slide-${e+1}`),t.setAttribute("role","tabpanel"),t.removeAttribute("aria-label"),t.setAttribute("aria-labelledby",`tab-${e+1}`)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,i=t.slice(-e),s=t.slice(0,e);i.reverse().forEach((o,r)=>{const n=o.cloneNode(!0);n.setAttribute("data-clone",String(t.length-r-1)),this.prepend(n)}),s.forEach((o,r)=>{const n=o.cloneNode(!0);n.setAttribute("data-clone",String(r)),this.append(n)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,i)=>{e.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((i,s)=>{(s+e)%e===0?i.style.removeProperty("scroll-snap-align"):i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:i,loop:s}=this,o=this.getSlides(),r=this.getSlides({excludeClones:!1});if(!o.length)return;const n=s?(t+o.length)%o.length:Wt(t,0,o.length-i);this.activeSlide=n;const a=this.localize.dir()==="rtl",l=Wt(t+(s?i:0)+(a?i-1:0),0,r.length-1),c=r[l];this.scrollToSlide(c,dl()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const i=this.scrollContainer,s=i.getBoundingClientRect(),o=t.getBoundingClientRect(),r=o.left-s.left,n=o.top-s.top;r||n?(this.pendingSlideChange=!0,i.scrollTo({left:r+i.scrollLeft,top:n+i.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this,i=this.getPageCount(),s=this.getCurrentPage(),o=this.canScrollPrev(),r=this.canScrollNext(),n=this.localize.dir()==="ltr";return E`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${Q({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?E`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${Q({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${Q({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!r})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?E`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${Oy(Py(i),a=>{const l=a===s;return E`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${Q({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
                      role="tab"
                      id="tab-${a+1}"
                      aria-controls="slide-${a+1}"
                      aria-selected="${l?"true":"false"}"
                      aria-label="${l?this.localize.term("slideNum",a+1):this.localize.term("goToSlide",a+1,i)}"
                      tabindex=${l?"0":"-1"}
                      @click=${()=>this.goToSlide(a*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};Vt.styles=[tt,Dy];Vt.dependencies={"sl-icon":At};u([g({type:Boolean,reflect:!0})],Vt.prototype,"loop",2);u([g({type:Boolean,reflect:!0})],Vt.prototype,"navigation",2);u([g({type:Boolean,reflect:!0})],Vt.prototype,"pagination",2);u([g({type:Boolean,reflect:!0})],Vt.prototype,"autoplay",2);u([g({type:Number,attribute:"autoplay-interval"})],Vt.prototype,"autoplayInterval",2);u([g({type:Number,attribute:"slides-per-page"})],Vt.prototype,"slidesPerPage",2);u([g({type:Number,attribute:"slides-per-move"})],Vt.prototype,"slidesPerMove",2);u([g()],Vt.prototype,"orientation",2);u([g({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],Vt.prototype,"mouseDragging",2);u([V(".carousel__slides")],Vt.prototype,"scrollContainer",2);u([V(".carousel__pagination")],Vt.prototype,"paginationContainer",2);u([G()],Vt.prototype,"activeSlide",2);u([G()],Vt.prototype,"scrolling",2);u([G()],Vt.prototype,"dragging",2);u([Tr({passive:!0})],Vt.prototype,"handleScroll",1);u([L("loop",{waitUntilFirstUpdate:!0}),L("slidesPerPage",{waitUntilFirstUpdate:!0})],Vt.prototype,"initializeSlides",1);u([L("activeSlide")],Vt.prototype,"handleSlideChange",1);u([L("slidesPerMove")],Vt.prototype,"updateSlidesSnap",1);u([L("autoplay")],Vt.prototype,"handleAutoplayChange",1);Vt.define("sl-carousel");var Iy=(t,e)=>{let i=0;return function(...s){window.clearTimeout(i),i=window.setTimeout(()=>{t.call(this,...s)},e)}},Kh=(t,e,i)=>{const s=t[e];t[e]=function(...o){s.call(this,...o),i.call(this,s,...o)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const e=new Set,i=new WeakMap,s=r=>{for(const n of r.changedTouches)e.add(n.identifier)},o=r=>{for(const n of r.changedTouches)e.delete(n.identifier)};document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),Kh(EventTarget.prototype,"addEventListener",function(r,n){if(n!=="scrollend")return;const a=Iy(()=>{e.size?a():this.dispatchEvent(new Event("scrollend"))},100);r.call(this,"scroll",a,{passive:!0}),i.set(this,a)}),Kh(EventTarget.prototype,"removeEventListener",function(r,n){if(n!=="scrollend")return;const a=i.get(this);a&&r.call(this,"scroll",a,{passive:!0})})}})();var Ry=X`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,Xf=class extends Y{connectedCallback(){super.connectedCallback()}render(){return E` <slot></slot> `}};Xf.styles=[tt,Ry];Xf.define("sl-carousel-item");var Ly=X`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,us=class extends Y{constructor(){super(...arguments),this.hasSlotController=new xe(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return E`
      <div
        part="base"
        class=${Q({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?E`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${K(this.target?this.target:void 0)}"
                rel=${K(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?E`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?E`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};us.styles=[tt,Ly];u([V("slot:not([name])")],us.prototype,"defaultSlot",2);u([G()],us.prototype,"renderType",2);u([g()],us.prototype,"href",2);u([g()],us.prototype,"target",2);u([g()],us.prototype,"rel",2);u([L("href",{waitUntilFirstUpdate:!0})],us.prototype,"hrefChanged",1);us.define("sl-breadcrumb-item");Vs.define("sl-button-group");var Fy=X`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,zi=class extends Y{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=E`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=E``;return this.initials?e=E`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=E`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,E`
      <div
        part="base"
        class=${Q({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};zi.styles=[tt,Fy];zi.dependencies={"sl-icon":At};u([G()],zi.prototype,"hasError",2);u([g()],zi.prototype,"image",2);u([g()],zi.prototype,"label",2);u([g()],zi.prototype,"initials",2);u([g()],zi.prototype,"loading",2);u([g({reflect:!0})],zi.prototype,"shape",2);u([L("image")],zi.prototype,"handleImageChange",1);zi.define("sl-avatar");var By=X`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,_o=class extends Y{constructor(){super(...arguments),this.localize=new yt(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,i)=>{const s=e.querySelector('[slot="separator"]');s===null?e.append(this.getSeparator()):s.hasAttribute("data-default")&&s.replaceWith(this.getSeparator()),i===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),E`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};_o.styles=[tt,By];_o.dependencies={"sl-icon":At};u([V("slot")],_o.prototype,"defaultSlot",2);u([V('slot[name="separator"]')],_o.prototype,"separatorSlot",2);u([g()],_o.prototype,"label",2);_o.define("sl-breadcrumb");Ct.define("sl-button");var Hy=X`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,ci=class extends Y{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:i}=this.animatedImage;t.width=e,t.height=i,t.getContext("2d").drawImage(this.animatedImage,0,0,e,i),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return E`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?E`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};ci.styles=[tt,Hy];ci.dependencies={"sl-icon":At};u([V(".animated-image__animated")],ci.prototype,"animatedImage",2);u([G()],ci.prototype,"frozenFrame",2);u([G()],ci.prototype,"isLoaded",2);u([g()],ci.prototype,"src",2);u([g()],ci.prototype,"alt",2);u([g({type:Boolean,reflect:!0})],ci.prototype,"play",2);u([L("play",{waitUntilFirstUpdate:!0})],ci.prototype,"handlePlayChange",1);u([L("src")],ci.prototype,"handleSrcChange",1);ci.define("sl-animated-image");var Vy=X`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Rr=class extends Y{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return E`
      <span
        part="base"
        class=${Q({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Rr.styles=[tt,Vy];u([g({reflect:!0})],Rr.prototype,"variant",2);u([g({type:Boolean,reflect:!0})],Rr.prototype,"pill",2);u([g({type:Boolean,reflect:!0})],Rr.prototype,"pulse",2);Rr.define("sl-badge");var Ny=X`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,Ue=class ws extends Y{constructor(){super(...arguments),this.hasSlotController=new xe(this,"icon","suffix"),this.localize=new yt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,i="100%",s="0";this.countdownAnimation=e.animate([{width:i},{width:s}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await qt(this.base),this.base.hidden=!1;const{keyframes:e,options:i}=Pt(this,"alert.show",{dir:this.localize.dir()});await Bt(this.base,e,i),this.emit("sl-after-show")}else{mc(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await qt(this.base);const{keyframes:e,options:i}=Pt(this,"alert.hide",{dir:this.localize.dir()});await Bt(this.base,e,i),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,_e(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,_e(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),ws.toastStack.parentElement===null&&document.body.append(ws.toastStack),ws.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ws.toastStack.removeChild(this),e(),ws.toastStack.querySelector("sl-alert")===null&&ws.toastStack.remove()},{once:!0})})}render(){return E`
      <div
        part="base"
        class=${Q({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?E`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?E`
              <div
                class=${Q({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Ue.styles=[tt,Ny];Ue.dependencies={"sl-icon-button":Xt};u([V('[part~="base"]')],Ue.prototype,"base",2);u([V(".alert__countdown-elapsed")],Ue.prototype,"countdownElement",2);u([g({type:Boolean,reflect:!0})],Ue.prototype,"open",2);u([g({type:Boolean,reflect:!0})],Ue.prototype,"closable",2);u([g({reflect:!0})],Ue.prototype,"variant",2);u([g({type:Number})],Ue.prototype,"duration",2);u([g({type:String,reflect:!0})],Ue.prototype,"countdown",2);u([G()],Ue.prototype,"remainingTime",2);u([L("open",{waitUntilFirstUpdate:!0})],Ue.prototype,"handleOpenChange",1);u([L("duration")],Ue.prototype,"handleDurationChange",1);var Uy=Ue;wt("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});wt("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Uy.define("sl-alert");const jy=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Wy=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],qy=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Ky=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Yy=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Xy=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Gy=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Jy=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Zy=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Qy=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],t_=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],e_=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],i_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],s_=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],o_=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],r_=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],n_=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],a_=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],l_=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],c_=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],h_=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],d_=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],u_=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],f_=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],p_=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],g_=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],m_=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],b_=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],v_=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],y_=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],__=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],x_=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],w_=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],k_=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],C_=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],S_=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],$_=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],A_=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],T_=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],E_=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],z_=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],M_=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],D_=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],O_=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],P_=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],I_=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],R_=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],L_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],F_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],B_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],H_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],V_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],N_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],U_=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],j_=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],W_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],q_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],K_=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Y_=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],X_=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],G_=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],J_=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Z_=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Q_=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],t1=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],e1=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],i1=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],s1=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],o1=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],r1=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],n1=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],a1=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],l1=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],c1=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],h1=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],d1=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],u1=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],f1=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],p1=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],g1=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],m1=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],b1=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],v1=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],y1=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],_1=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],x1=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],w1=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],k1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],C1=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],S1=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],$1=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],A1=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],T1=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],E1=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],z1=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],M1=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],D1=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],O1=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Gf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},P1=Object.freeze(Object.defineProperty({__proto__:null,backInDown:s_,backInLeft:o_,backInRight:r_,backInUp:n_,backOutDown:a_,backOutLeft:l_,backOutRight:c_,backOutUp:h_,bounce:jy,bounceIn:d_,bounceInDown:u_,bounceInLeft:f_,bounceInRight:p_,bounceInUp:g_,bounceOut:m_,bounceOutDown:b_,bounceOutLeft:v_,bounceOutRight:y_,bounceOutUp:__,easings:Gf,fadeIn:x_,fadeInBottomLeft:w_,fadeInBottomRight:k_,fadeInDown:C_,fadeInDownBig:S_,fadeInLeft:$_,fadeInLeftBig:A_,fadeInRight:T_,fadeInRightBig:E_,fadeInTopLeft:z_,fadeInTopRight:M_,fadeInUp:D_,fadeInUpBig:O_,fadeOut:P_,fadeOutBottomLeft:I_,fadeOutBottomRight:R_,fadeOutDown:L_,fadeOutDownBig:F_,fadeOutLeft:B_,fadeOutLeftBig:H_,fadeOutRight:V_,fadeOutRightBig:N_,fadeOutTopLeft:U_,fadeOutTopRight:j_,fadeOutUp:W_,fadeOutUpBig:q_,flash:Wy,flip:K_,flipInX:Y_,flipInY:X_,flipOutX:G_,flipOutY:J_,headShake:qy,heartBeat:Ky,hinge:_1,jackInTheBox:x1,jello:Yy,lightSpeedInLeft:Z_,lightSpeedInRight:Q_,lightSpeedOutLeft:t1,lightSpeedOutRight:e1,pulse:Xy,rollIn:w1,rollOut:k1,rotateIn:i1,rotateInDownLeft:s1,rotateInDownRight:o1,rotateInUpLeft:r1,rotateInUpRight:n1,rotateOut:a1,rotateOutDownLeft:l1,rotateOutDownRight:c1,rotateOutUpLeft:h1,rotateOutUpRight:d1,rubberBand:Gy,shake:Jy,shakeX:Zy,shakeY:Qy,slideInDown:u1,slideInLeft:f1,slideInRight:p1,slideInUp:g1,slideOutDown:m1,slideOutLeft:b1,slideOutRight:v1,slideOutUp:y1,swing:t_,tada:e_,wobble:i_,zoomIn:C1,zoomInDown:S1,zoomInLeft:$1,zoomInRight:A1,zoomInUp:T1,zoomOut:E1,zoomOutDown:z1,zoomOutLeft:M1,zoomOutRight:D1,zoomOutUp:O1},Symbol.toStringTag,{value:"Module"}));var I1=X`
  :host {
    display: contents;
  }
`,ee=class extends Y{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;const i=(t=Gf[this.easing])!=null?t:this.easing,s=(e=this.keyframes)!=null?e:P1[this.name],r=(await this.defaultSlot).assignedElements()[0];return!r||!s?!1:(this.destroyAnimation(),this.animation=r.animate(s,{delay:this.delay,direction:this.direction,duration:this.duration,easing:i,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return E` <slot @slotchange=${this.handleSlotChange}></slot> `}};ee.styles=[tt,I1];u([Qb("slot")],ee.prototype,"defaultSlot",2);u([g()],ee.prototype,"name",2);u([g({type:Boolean,reflect:!0})],ee.prototype,"play",2);u([g({type:Number})],ee.prototype,"delay",2);u([g()],ee.prototype,"direction",2);u([g({type:Number})],ee.prototype,"duration",2);u([g()],ee.prototype,"easing",2);u([g({attribute:"end-delay",type:Number})],ee.prototype,"endDelay",2);u([g()],ee.prototype,"fill",2);u([g({type:Number})],ee.prototype,"iterations",2);u([g({attribute:"iteration-start",type:Number})],ee.prototype,"iterationStart",2);u([g({attribute:!1})],ee.prototype,"keyframes",2);u([g({attribute:"playback-rate",type:Number})],ee.prototype,"playbackRate",2);u([L(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],ee.prototype,"handleAnimationChange",1);u([L("play")],ee.prototype,"handlePlayChange",1);u([L("playbackRate")],ee.prototype,"handlePlaybackRateChange",1);ee.define("sl-animation");var xl=(t=>(t.S80="s80",t.Y21="y21",t.S21="s21",t.S4C="s4c",t.Y80="y80",t.YS1="ys1",t.Y1="y1",t.S1="s1",t.J1="j1",t))(xl||{}),Jf=(t=>(t.USDM_94_95_DELSOL="usdm_94_95_delsol",t.USDM_95_97_DELSOL="usdm_95_97_delsol",t.USDM_99_01_CIVIC_SI="usdm_99_01_civic_si",t.USDM_92_93_GSR="usdm_92_93_gsr",t.USDM_94_01_GSR="usdm_94_01_gsr",t.USDM_90_93_INTEGRA_RS_LS_GS_SE="usdm_90_93_integra_rs_ls_gs_se",t.USDM_94_01_LS_GS_SE="usdm_94_01_ls_gs_se",t.USDM_97_01_ITR="usdm_97_01_itr",t.JDM_89_91_CIVIC_CRX_SIR="jdm_89_91_civic_crx_sir",t.JDM_90_91_INTEGRA_RSI_XSI="jdm_90_91_integra_rsi_xsi",t.JDM_92_93_INTEGRA_RSI_XSI="jdm_92_93_integra_rsi_xsi",t.JDM_93_5_01_SIR_SIG="jdm_93.5_01_sir_sig",t.JDM_92_00_SIR_CTR="jdm_92_00_sir_ctr",t.JDM_95_97_ITR="jdm_95_97_itr",t.JDM_98_01_ITR="jdm-98-01-itr",t))(Jf||{});const R1={usdm_94_95_delsol:"US 94-95 Del Sol",usdm_95_97_delsol:"US 95-97 Del Sol",usdm_99_01_civic_si:"US 99-01 Civic SI",usdm_92_93_gsr:"US 92-93 Integra GSR",usdm_94_01_gsr:"US 94-01 Integra GSR",usdm_90_93_integra_rs_ls_gs_se:"US 90-93 Integra RS/LS/GS/SE",usdm_94_01_ls_gs_se:"US 94-01 Integra LS/GS/SE",usdm_97_01_itr:"US 97-01 Integra Type R",jdm_89_91_civic_crx_sir:"JDM 89-91 Civic SIR / CRX SIR",jdm_90_91_integra_rsi_xsi:"JDM 90-91 Integra RSI/XSI",jdm_92_93_integra_rsi_xsi:"JDM 92-93 Integra RSI/XSI","jdm_93.5_01_sir_sig":"JDM 93.5-01 Civic SIR/SIG",jdm_92_00_sir_ctr:"JDM 92-00 Civic SIR/Type R",jdm_95_97_itr:"JDM 95-97 Integra Type R","jdm-98-01-itr":"JDM 98-01 Integra Type R"},Wi={s80:{"jdm_93.5_01_sir_sig":{gears:[3.23,1.9,1.36,1.034,.787],finalDrive:4.4,clutchType:"hydro"},jdm_95_97_itr:{gears:[3.23,2.105,1.458,1.107,.848],finalDrive:4.4,clutchType:"hydro"},"jdm-98-01-itr":{gears:[3.23,2.105,1.458,1.034,.787],finalDrive:4.785,clutchType:"hydro"},usdm_94_01_ls_gs_se:{gears:[3.23,1.9,1.269,.966,.787],finalDrive:4.266,clutchType:"hydro"},usdm_94_01_gsr:{gears:[3.23,1.9,1.36,1.034,.787],finalDrive:4.4,clutchType:"hydro"},usdm_97_01_itr:{gears:[3.23,2.105,1.458,1.107,.848],finalDrive:4.4,clutchType:"hydro"}},y21:{usdm_94_95_delsol:{gears:[3.23,2.105,1.458,1.107,.848],finalDrive:4.4,clutchType:"hydro"}},s21:{usdm_95_97_delsol:{gears:[3.23,2.105,1.458,1.107,.848],finalDrive:4.4,clutchType:"hydro"}},s4c:{usdm_99_01_civic_si:{gears:[3.23,2.105,1.458,1.107,.875],finalDrive:4.266,clutchType:"hydro"}},y80:{"jdm_93.5_01_sir_sig":{gears:[3.23,1.9,1.36,1.034,.787],finalDrive:4.4,clutchType:"hydro"},jdm_95_97_itr:{gears:[3.23,2.105,1.458,1.107,.848],finalDrive:4.4,clutchType:"hydro"},jdm_92_00_sir_ctr:{gears:[3.23,2.105,1.458,1.107,.848],finalDrive:4.4,clutchType:"hydro"},usdm_94_01_gsr:{gears:[3.23,1.9,1.36,1.034,.787],finalDrive:4.4,clutchType:"hydro"},usdm_97_01_itr:{gears:[3.23,2.105,1.458,1.107,.848],finalDrive:4.4,clutchType:"hydro"}},ys1:{jdm_92_93_integra_rsi_xsi:{gears:[3.307,2.105,1.459,1.107,.875],finalDrive:4.4,clutchType:"cable"},usdm_92_93_gsr:{gears:[3.307,2.105,1.459,1.107,.875],finalDrive:4.4,clutchType:"cable"},usdm_90_93_integra_rs_ls_gs_se:{gears:[3.23,1.9,1.269,.966,.742],finalDrive:4.4,clutchType:"cable"}},y1:{jdm_89_91_civic_crx_sir:{gears:[3.166,2.052,1.416,1.103,.87],finalDrive:4.266,clutchType:"cable"}},s1:{jdm_90_91_integra_rsi_xsi:{gears:[3.23,2.105,1.458,1.107,.848],finalDrive:4.4,clutchType:"cable"},usdm_90_93_integra_rs_ls_gs_se:{gears:[3.23,1.9,1.269,.966,.742],finalDrive:4.266,clutchType:"cable"}},j1:{jdm_90_91_integra_rsi_xsi:{gears:[3.23,2.105,1.458,1.107,.848],finalDrive:4.4,clutchType:"cable"}}};function Yh(t){return Object.keys(t)}function L1(t){return Object.entries(t)}function F1(t){return t/25.4}function qi(t){return t!=null&&t instanceof jv}function Do(t){return t!=null&&t instanceof Av}function B1(t){return t!=null&&t instanceof gy}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Lr(t){return t+.5|0}const ts=(t,e,i)=>Math.max(Math.min(t,i),e);function Bo(t){return ts(Lr(t*2.55),0,255)}function ss(t){return ts(Lr(t*255),0,255)}function Ri(t){return ts(Lr(t/2.55)/100,0,1)}function Xh(t){return ts(Lr(t*100),0,100)}const je={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},wl=[..."0123456789ABCDEF"],H1=t=>wl[t&15],V1=t=>wl[(t&240)>>4]+wl[t&15],Gr=t=>(t&240)>>4===(t&15),N1=t=>Gr(t.r)&&Gr(t.g)&&Gr(t.b)&&Gr(t.a);function U1(t){var e=t.length,i;return t[0]==="#"&&(e===4||e===5?i={r:255&je[t[1]]*17,g:255&je[t[2]]*17,b:255&je[t[3]]*17,a:e===5?je[t[4]]*17:255}:(e===7||e===9)&&(i={r:je[t[1]]<<4|je[t[2]],g:je[t[3]]<<4|je[t[4]],b:je[t[5]]<<4|je[t[6]],a:e===9?je[t[7]]<<4|je[t[8]]:255})),i}const j1=(t,e)=>t<255?e(t):"";function W1(t){var e=N1(t)?H1:V1;return t?"#"+e(t.r)+e(t.g)+e(t.b)+j1(t.a,e):void 0}const q1=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Zf(t,e,i){const s=e*Math.min(i,1-i),o=(r,n=(r+t/30)%12)=>i-s*Math.max(Math.min(n-3,9-n,1),-1);return[o(0),o(8),o(4)]}function K1(t,e,i){const s=(o,r=(o+t/60)%6)=>i-i*e*Math.max(Math.min(r,4-r,1),0);return[s(5),s(3),s(1)]}function Y1(t,e,i){const s=Zf(t,1,.5);let o;for(e+i>1&&(o=1/(e+i),e*=o,i*=o),o=0;o<3;o++)s[o]*=1-e-i,s[o]+=e;return s}function X1(t,e,i,s,o){return t===o?(e-i)/s+(e<i?6:0):e===o?(i-t)/s+2:(t-e)/s+4}function bc(t){const i=t.r/255,s=t.g/255,o=t.b/255,r=Math.max(i,s,o),n=Math.min(i,s,o),a=(r+n)/2;let l,c,h;return r!==n&&(h=r-n,c=a>.5?h/(2-r-n):h/(r+n),l=X1(i,s,o,h,r),l=l*60+.5),[l|0,c||0,a]}function vc(t,e,i,s){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,s)).map(ss)}function yc(t,e,i){return vc(Zf,t,e,i)}function G1(t,e,i){return vc(Y1,t,e,i)}function J1(t,e,i){return vc(K1,t,e,i)}function Qf(t){return(t%360+360)%360}function Z1(t){const e=q1.exec(t);let i=255,s;if(!e)return;e[5]!==s&&(i=e[6]?Bo(+e[5]):ss(+e[5]));const o=Qf(+e[2]),r=+e[3]/100,n=+e[4]/100;return e[1]==="hwb"?s=G1(o,r,n):e[1]==="hsv"?s=J1(o,r,n):s=yc(o,r,n),{r:s[0],g:s[1],b:s[2],a:i}}function Q1(t,e){var i=bc(t);i[0]=Qf(i[0]+e),i=yc(i),t.r=i[0],t.g=i[1],t.b=i[2]}function tx(t){if(!t)return;const e=bc(t),i=e[0],s=Xh(e[1]),o=Xh(e[2]);return t.a<255?`hsla(${i}, ${s}%, ${o}%, ${Ri(t.a)})`:`hsl(${i}, ${s}%, ${o}%)`}const Gh={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Jh={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function ex(){const t={},e=Object.keys(Jh),i=Object.keys(Gh);let s,o,r,n,a;for(s=0;s<e.length;s++){for(n=a=e[s],o=0;o<i.length;o++)r=i[o],a=a.replace(r,Gh[r]);r=parseInt(Jh[n],16),t[a]=[r>>16&255,r>>8&255,r&255]}return t}let Jr;function ix(t){Jr||(Jr=ex(),Jr.transparent=[0,0,0,0]);const e=Jr[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const sx=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function ox(t){const e=sx.exec(t);let i=255,s,o,r;if(e){if(e[7]!==s){const n=+e[7];i=e[8]?Bo(n):ts(n*255,0,255)}return s=+e[1],o=+e[3],r=+e[5],s=255&(e[2]?Bo(s):ts(s,0,255)),o=255&(e[4]?Bo(o):ts(o,0,255)),r=255&(e[6]?Bo(r):ts(r,0,255)),{r:s,g:o,b:r,a:i}}}function rx(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Ri(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Ia=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,Ks=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function nx(t,e,i){const s=Ks(Ri(t.r)),o=Ks(Ri(t.g)),r=Ks(Ri(t.b));return{r:ss(Ia(s+i*(Ks(Ri(e.r))-s))),g:ss(Ia(o+i*(Ks(Ri(e.g))-o))),b:ss(Ia(r+i*(Ks(Ri(e.b))-r))),a:t.a+i*(e.a-t.a)}}function Zr(t,e,i){if(t){let s=bc(t);s[e]=Math.max(0,Math.min(s[e]+s[e]*i,e===0?360:1)),s=yc(s),t.r=s[0],t.g=s[1],t.b=s[2]}}function tp(t,e){return t&&Object.assign(e||{},t)}function Zh(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=ss(t[3]))):(e=tp(t,{r:0,g:0,b:0,a:1}),e.a=ss(e.a)),e}function ax(t){return t.charAt(0)==="r"?ox(t):Z1(t)}class mr{constructor(e){if(e instanceof mr)return e;const i=typeof e;let s;i==="object"?s=Zh(e):i==="string"&&(s=U1(e)||ix(e)||ax(e)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var e=tp(this._rgb);return e&&(e.a=Ri(e.a)),e}set rgb(e){this._rgb=Zh(e)}rgbString(){return this._valid?rx(this._rgb):void 0}hexString(){return this._valid?W1(this._rgb):void 0}hslString(){return this._valid?tx(this._rgb):void 0}mix(e,i){if(e){const s=this.rgb,o=e.rgb;let r;const n=i===r?.5:i,a=2*n-1,l=s.a-o.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,s.r=255&c*s.r+r*o.r+.5,s.g=255&c*s.g+r*o.g+.5,s.b=255&c*s.b+r*o.b+.5,s.a=n*s.a+(1-n)*o.a,this.rgb=s}return this}interpolate(e,i){return e&&(this._rgb=nx(this._rgb,e._rgb,i)),this}clone(){return new mr(this.rgb)}alpha(e){return this._rgb.a=ss(e),this}clearer(e){const i=this._rgb;return i.a*=1-e,this}greyscale(){const e=this._rgb,i=Lr(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=i,this}opaquer(e){const i=this._rgb;return i.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Zr(this._rgb,2,e),this}darken(e){return Zr(this._rgb,2,-e),this}saturate(e){return Zr(this._rgb,1,e),this}desaturate(e){return Zr(this._rgb,1,-e),this}rotate(e){return Q1(this._rgb,e),this}}/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Di(){}const lx=(()=>{let t=0;return()=>t++})();function Mt(t){return t==null}function Jt(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function vt(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function Xe(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function pi(t,e){return Xe(t)?t:e}function mt(t,e){return typeof t>"u"?e:t}const cx=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function Dt(t,e,i){if(t&&typeof t.call=="function")return t.apply(i,e)}function $t(t,e,i,s){let o,r,n;if(Jt(t))for(r=t.length,o=0;o<r;o++)e.call(i,t[o],o);else if(vt(t))for(n=Object.keys(t),r=n.length,o=0;o<r;o++)e.call(i,t[n[o]],n[o])}function Rn(t,e){let i,s,o,r;if(!t||!e||t.length!==e.length)return!1;for(i=0,s=t.length;i<s;++i)if(o=t[i],r=e[i],o.datasetIndex!==r.datasetIndex||o.index!==r.index)return!1;return!0}function Ln(t){if(Jt(t))return t.map(Ln);if(vt(t)){const e=Object.create(null),i=Object.keys(t),s=i.length;let o=0;for(;o<s;++o)e[i[o]]=Ln(t[i[o]]);return e}return t}function ep(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function hx(t,e,i,s){if(!ep(t))return;const o=e[t],r=i[t];vt(o)&&vt(r)?br(o,r,s):e[t]=Ln(r)}function br(t,e,i){const s=Jt(e)?e:[e],o=s.length;if(!vt(t))return t;i=i||{};const r=i.merger||hx;let n;for(let a=0;a<o;++a){if(n=s[a],!vt(n))continue;const l=Object.keys(n);for(let c=0,h=l.length;c<h;++c)r(l[c],t,n,i)}return t}function sr(t,e){return br(t,e,{merger:dx})}function dx(t,e,i){if(!ep(t))return;const s=e[t],o=i[t];vt(s)&&vt(o)?sr(s,o):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Ln(o))}const Qh={"":t=>t,x:t=>t.x,y:t=>t.y};function ux(t){const e=t.split("."),i=[];let s="";for(const o of e)s+=o,s.endsWith("\\")?s=s.slice(0,-1)+".":(i.push(s),s="");return i}function fx(t){const e=ux(t);return i=>{for(const s of e){if(s==="")break;i=i&&i[s]}return i}}function Fn(t,e){return(Qh[e]||(Qh[e]=fx(e)))(t)}function _c(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Bn=t=>typeof t<"u",cs=t=>typeof t=="function",td=(t,e)=>{if(t.size!==e.size)return!1;for(const i of t)if(!e.has(i))return!1;return!0};function px(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const Zt=Math.PI,ki=2*Zt,gx=ki+Zt,Hn=Number.POSITIVE_INFINITY,mx=Zt/180,Qe=Zt/2,vs=Zt/4,ed=Zt*2/3,ip=Math.log10,ho=Math.sign;function or(t,e,i){return Math.abs(t-e)<i}function id(t){const e=Math.round(t);t=or(t,e,t/1e3)?e:t;const i=Math.pow(10,Math.floor(ip(t))),s=t/i;return(s<=1?1:s<=2?2:s<=5?5:10)*i}function bx(t){const e=[],i=Math.sqrt(t);let s;for(s=1;s<i;s++)t%s===0&&(e.push(s),e.push(t/s));return i===(i|0)&&e.push(i),e.sort((o,r)=>o-r).pop(),e}function vx(t){return typeof t=="symbol"||typeof t=="object"&&t!==null&&!(Symbol.toPrimitive in t||"toString"in t||"valueOf"in t)}function vr(t){return!vx(t)&&!isNaN(parseFloat(t))&&isFinite(t)}function yx(t,e){const i=Math.round(t);return i-e<=t&&i+e>=t}function _x(t,e,i){let s,o,r;for(s=0,o=t.length;s<o;s++)r=t[s][i],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}function Es(t){return t*(Zt/180)}function xx(t){return t*(180/Zt)}function sd(t){if(!Xe(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}function wx(t,e){const i=e.x-t.x,s=e.y-t.y,o=Math.sqrt(i*i+s*s);let r=Math.atan2(s,i);return r<-.5*Zt&&(r+=ki),{angle:r,distance:o}}function kl(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function kx(t,e){return(t-e+gx)%ki-Zt}function Yi(t){return(t%ki+ki)%ki}function sp(t,e,i,s){const o=Yi(t),r=Yi(e),n=Yi(i),a=Yi(r-o),l=Yi(n-o),c=Yi(o-r),h=Yi(o-n);return o===r||o===n||s&&r===n||a>l&&c<h}function Le(t,e,i){return Math.max(e,Math.min(i,t))}function Cx(t){return Le(t,-32768,32767)}function zs(t,e,i,s=1e-6){return t>=Math.min(e,i)-s&&t<=Math.max(e,i)+s}function xc(t,e,i){i=i||(n=>t[n]<e);let s=t.length-1,o=0,r;for(;s-o>1;)r=o+s>>1,i(r)?o=r:s=r;return{lo:o,hi:s}}const Ms=(t,e,i,s)=>xc(t,i,s?o=>{const r=t[o][e];return r<i||r===i&&t[o+1][e]===i}:o=>t[o][e]<i),Sx=(t,e,i)=>xc(t,i,s=>t[s][e]>=i);function $x(t,e,i){let s=0,o=t.length;for(;s<o&&t[s]<e;)s++;for(;o>s&&t[o-1]>i;)o--;return s>0||o<t.length?t.slice(s,o):t}const op=["push","pop","shift","splice","unshift"];function Ax(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),op.forEach(i=>{const s="_onData"+_c(i),o=t[i];Object.defineProperty(t,i,{configurable:!0,enumerable:!1,value(...r){const n=o.apply(this,r);return t._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...r)}),n}})})}function od(t,e){const i=t._chartjs;if(!i)return;const s=i.listeners,o=s.indexOf(e);o!==-1&&s.splice(o,1),!(s.length>0)&&(op.forEach(r=>{delete t[r]}),delete t._chartjs)}function Tx(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const rp=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function np(t,e){let i=[],s=!1;return function(...o){i=o,s||(s=!0,rp.call(window,()=>{s=!1,t.apply(e,i)}))}}function Ex(t,e){let i;return function(...s){return e?(clearTimeout(i),i=setTimeout(t,e,s)):t.apply(this,s),e}}const wc=t=>t==="start"?"left":t==="end"?"right":"center",ce=(t,e,i)=>t==="start"?e:t==="end"?i:(e+i)/2,zx=(t,e,i,s)=>t===(s?"left":"right")?i:t==="center"?(e+i)/2:e;function Mx(t,e,i){const s=e.length;let o=0,r=s;if(t._sorted){const{iScale:n,vScale:a,_parsed:l}=t,c=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null,h=n.axis,{min:d,max:f,minDefined:p,maxDefined:m}=n.getUserBounds();if(p){if(o=Math.min(Ms(l,h,d).lo,i?s:Ms(e,h,n.getPixelForValue(d)).lo),c){const b=l.slice(0,o+1).reverse().findIndex(v=>!Mt(v[a.axis]));o-=Math.max(0,b)}o=Le(o,0,s-1)}if(m){let b=Math.max(Ms(l,n.axis,f,!0).hi+1,i?0:Ms(e,h,n.getPixelForValue(f),!0).hi+1);if(c){const v=l.slice(b-1).findIndex(w=>!Mt(w[a.axis]));b+=Math.max(0,v)}r=Le(b,o,s)-o}else r=s-o}return{start:o,count:r}}function Dx(t){const{xScale:e,yScale:i,_scaleRanges:s}=t,o={xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!s)return t._scaleRanges=o,!0;const r=s.xmin!==e.min||s.xmax!==e.max||s.ymin!==i.min||s.ymax!==i.max;return Object.assign(s,o),r}const Qr=t=>t===0||t===1,rd=(t,e,i)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*ki/i)),nd=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*ki/i)+1,rr={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*Qe)+1,easeOutSine:t=>Math.sin(t*Qe),easeInOutSine:t=>-.5*(Math.cos(Zt*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>Qr(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>Qr(t)?t:rd(t,.075,.3),easeOutElastic:t=>Qr(t)?t:nd(t,.075,.3),easeInOutElastic(t){return Qr(t)?t:t<.5?.5*rd(t*2,.1125,.45):.5+.5*nd(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-rr.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?rr.easeInBounce(t*2)*.5:rr.easeOutBounce(t*2-1)*.5+.5};function kc(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function ad(t){return kc(t)?t:new mr(t)}function Ra(t){return kc(t)?t:new mr(t).saturate(.5).darken(.1).hexString()}const Ox=["x","y","borderWidth","radius","tension"],Px=["color","borderColor","backgroundColor"];function Ix(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:Px},numbers:{type:"number",properties:Ox}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function Rx(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const ld=new Map;function Lx(t,e){e=e||{};const i=t+JSON.stringify(e);let s=ld.get(i);return s||(s=new Intl.NumberFormat(t,e),ld.set(i,s)),s}function ap(t,e,i){return Lx(e,i).format(t)}const Fx={values(t){return Jt(t)?t:""+t},numeric(t,e,i){if(t===0)return"0";const s=this.chart.options.locale;let o,r=t;if(i.length>1){const c=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(c<1e-4||c>1e15)&&(o="scientific"),r=Bx(t,i)}const n=ip(Math.abs(r)),a=isNaN(n)?1:Math.max(Math.min(-1*Math.floor(n),20),0),l={notation:o,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),ap(t,s,l)}};function Bx(t,e){let i=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(i)>=1&&t!==Math.floor(t)&&(i=t-Math.floor(t)),i}var lp={formatters:Fx};function Hx(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,i)=>i.lineWidth,tickColor:(e,i)=>i.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:lp.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Ls=Object.create(null),Cl=Object.create(null);function nr(t,e){if(!e)return t;const i=e.split(".");for(let s=0,o=i.length;s<o;++s){const r=i[s];t=t[r]||(t[r]=Object.create(null))}return t}function La(t,e,i){return typeof e=="string"?br(nr(t,e),i):br(nr(t,""),e)}class Vx{constructor(e,i){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,o)=>Ra(o.backgroundColor),this.hoverBorderColor=(s,o)=>Ra(o.borderColor),this.hoverColor=(s,o)=>Ra(o.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(i)}set(e,i){return La(this,e,i)}get(e){return nr(this,e)}describe(e,i){return La(Cl,e,i)}override(e,i){return La(Ls,e,i)}route(e,i,s,o){const r=nr(this,e),n=nr(this,s),a="_"+i;Object.defineProperties(r,{[a]:{value:r[i],writable:!0},[i]:{enumerable:!0,get(){const l=this[a],c=n[o];return vt(l)?Object.assign({},c,l):mt(l,c)},set(l){this[a]=l}}})}apply(e){e.forEach(i=>i(this))}}var Nt=new Vx({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Ix,Rx,Hx]);function Nx(t){return!t||Mt(t.size)||Mt(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function cd(t,e,i,s,o){let r=e[o];return r||(r=e[o]=t.measureText(o).width,i.push(o)),r>s&&(s=r),s}function ys(t,e,i){const s=t.currentDevicePixelRatio,o=i!==0?Math.max(i/2,.5):0;return Math.round((e-o)*s)/s+o}function hd(t,e){!e&&!t||(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function Sl(t,e,i,s){cp(t,e,i,s,null)}function cp(t,e,i,s,o){let r,n,a,l,c,h,d,f;const p=e.pointStyle,m=e.rotation,b=e.radius;let v=(m||0)*mx;if(p&&typeof p=="object"&&(r=p.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){t.save(),t.translate(i,s),t.rotate(v),t.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),t.restore();return}if(!(isNaN(b)||b<=0)){switch(t.beginPath(),p){default:o?t.ellipse(i,s,o/2,b,0,0,ki):t.arc(i,s,b,0,ki),t.closePath();break;case"triangle":h=o?o/2:b,t.moveTo(i+Math.sin(v)*h,s-Math.cos(v)*b),v+=ed,t.lineTo(i+Math.sin(v)*h,s-Math.cos(v)*b),v+=ed,t.lineTo(i+Math.sin(v)*h,s-Math.cos(v)*b),t.closePath();break;case"rectRounded":c=b*.516,l=b-c,n=Math.cos(v+vs)*l,d=Math.cos(v+vs)*(o?o/2-c:l),a=Math.sin(v+vs)*l,f=Math.sin(v+vs)*(o?o/2-c:l),t.arc(i-d,s-a,c,v-Zt,v-Qe),t.arc(i+f,s-n,c,v-Qe,v),t.arc(i+d,s+a,c,v,v+Qe),t.arc(i-f,s+n,c,v+Qe,v+Zt),t.closePath();break;case"rect":if(!m){l=Math.SQRT1_2*b,h=o?o/2:l,t.rect(i-h,s-l,2*h,2*l);break}v+=vs;case"rectRot":d=Math.cos(v)*(o?o/2:b),n=Math.cos(v)*b,a=Math.sin(v)*b,f=Math.sin(v)*(o?o/2:b),t.moveTo(i-d,s-a),t.lineTo(i+f,s-n),t.lineTo(i+d,s+a),t.lineTo(i-f,s+n),t.closePath();break;case"crossRot":v+=vs;case"cross":d=Math.cos(v)*(o?o/2:b),n=Math.cos(v)*b,a=Math.sin(v)*b,f=Math.sin(v)*(o?o/2:b),t.moveTo(i-d,s-a),t.lineTo(i+d,s+a),t.moveTo(i+f,s-n),t.lineTo(i-f,s+n);break;case"star":d=Math.cos(v)*(o?o/2:b),n=Math.cos(v)*b,a=Math.sin(v)*b,f=Math.sin(v)*(o?o/2:b),t.moveTo(i-d,s-a),t.lineTo(i+d,s+a),t.moveTo(i+f,s-n),t.lineTo(i-f,s+n),v+=vs,d=Math.cos(v)*(o?o/2:b),n=Math.cos(v)*b,a=Math.sin(v)*b,f=Math.sin(v)*(o?o/2:b),t.moveTo(i-d,s-a),t.lineTo(i+d,s+a),t.moveTo(i+f,s-n),t.lineTo(i-f,s+n);break;case"line":n=o?o/2:Math.cos(v)*b,a=Math.sin(v)*b,t.moveTo(i-n,s-a),t.lineTo(i+n,s+a);break;case"dash":t.moveTo(i,s),t.lineTo(i+Math.cos(v)*(o?o/2:b),s+Math.sin(v)*b);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function yr(t,e,i){return i=i||.5,!e||t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function Cc(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Sc(t){t.restore()}function Ux(t,e,i,s,o){if(!e)return t.lineTo(i.x,i.y);if(o==="middle"){const r=(e.x+i.x)/2;t.lineTo(r,e.y),t.lineTo(r,i.y)}else o==="after"!=!!s?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}function jx(t,e,i,s){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(s?e.cp1x:e.cp2x,s?e.cp1y:e.cp2y,s?i.cp2x:i.cp1x,s?i.cp2y:i.cp1y,i.x,i.y)}function Wx(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),Mt(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function qx(t,e,i,s,o){if(o.strikethrough||o.underline){const r=t.measureText(s),n=e-r.actualBoundingBoxLeft,a=e+r.actualBoundingBoxRight,l=i-r.actualBoundingBoxAscent,c=i+r.actualBoundingBoxDescent,h=o.strikethrough?(l+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=o.decorationWidth||2,t.moveTo(n,h),t.lineTo(a,h),t.stroke()}}function Kx(t,e){const i=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=i}function _r(t,e,i,s,o,r={}){const n=Jt(e)?e:[e],a=r.strokeWidth>0&&r.strokeColor!=="";let l,c;for(t.save(),t.font=o.string,Wx(t,r),l=0;l<n.length;++l)c=n[l],r.backdrop&&Kx(t,r.backdrop),a&&(r.strokeColor&&(t.strokeStyle=r.strokeColor),Mt(r.strokeWidth)||(t.lineWidth=r.strokeWidth),t.strokeText(c,i,s,r.maxWidth)),t.fillText(c,i,s,r.maxWidth),qx(t,i,s,c,r),s+=Number(o.lineHeight);t.restore()}function Vn(t,e){const{x:i,y:s,w:o,h:r,radius:n}=e;t.arc(i+n.topLeft,s+n.topLeft,n.topLeft,1.5*Zt,Zt,!0),t.lineTo(i,s+r-n.bottomLeft),t.arc(i+n.bottomLeft,s+r-n.bottomLeft,n.bottomLeft,Zt,Qe,!0),t.lineTo(i+o-n.bottomRight,s+r),t.arc(i+o-n.bottomRight,s+r-n.bottomRight,n.bottomRight,Qe,0,!0),t.lineTo(i+o,s+n.topRight),t.arc(i+o-n.topRight,s+n.topRight,n.topRight,0,-Qe,!0),t.lineTo(i+n.topLeft,s)}const Yx=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Xx=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Gx(t,e){const i=(""+t).match(Yx);if(!i||i[1]==="normal")return e*1.2;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100;break}return e*t}const Jx=t=>+t||0;function hp(t,e){const i={},s=vt(e),o=s?Object.keys(e):e,r=vt(t)?s?n=>mt(t[n],t[e[n]]):n=>t[n]:()=>t;for(const n of o)i[n]=Jx(r(n));return i}function dp(t){return hp(t,{top:"y",right:"x",bottom:"y",left:"x"})}function oo(t){return hp(t,["topLeft","topRight","bottomLeft","bottomRight"])}function Ge(t){const e=dp(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function de(t,e){t=t||{},e=e||Nt.font;let i=mt(t.size,e.size);typeof i=="string"&&(i=parseInt(i,10));let s=mt(t.style,e.style);s&&!(""+s).match(Xx)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const o={family:mt(t.family,e.family),lineHeight:Gx(mt(t.lineHeight,e.lineHeight),i),size:i,style:s,weight:mt(t.weight,e.weight),string:""};return o.string=Nx(o),o}function tn(t,e,i,s){let o,r,n;for(o=0,r=t.length;o<r;++o)if(n=t[o],n!==void 0&&n!==void 0)return n}function Zx(t,e,i){const{min:s,max:o}=t,r=cx(e,(o-s)/2),n=(a,l)=>i&&a===0?0:a+l;return{min:n(s,-Math.abs(r)),max:n(o,r)}}function Us(t,e){return Object.assign(Object.create(t),e)}function $c(t,e=[""],i,s,o=()=>t[0]){const r=i||t;typeof s>"u"&&(s=gp("_fallback",t));const n={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:r,_fallback:s,_getTarget:o,override:a=>$c([a,...t],e,r,s)};return new Proxy(n,{deleteProperty(a,l){return delete a[l],delete a._keys,delete t[0][l],!0},get(a,l){return fp(a,l,()=>nw(l,e,t,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(a,l){return ud(a).includes(l)},ownKeys(a){return ud(a)},set(a,l,c){const h=a._storage||(a._storage=o());return a[l]=h[l]=c,delete a._keys,!0}})}function uo(t,e,i,s){const o={_cacheable:!1,_proxy:t,_context:e,_subProxy:i,_stack:new Set,_descriptors:up(t,s),setContext:r=>uo(t,r,i,s),override:r=>uo(t.override(r),e,i,s)};return new Proxy(o,{deleteProperty(r,n){return delete r[n],delete t[n],!0},get(r,n,a){return fp(r,n,()=>tw(r,n,a))},getOwnPropertyDescriptor(r,n){return r._descriptors.allKeys?Reflect.has(t,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,n)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(r,n){return Reflect.has(t,n)},ownKeys(){return Reflect.ownKeys(t)},set(r,n,a){return t[n]=a,delete r[n],!0}})}function up(t,e={scriptable:!0,indexable:!0}){const{_scriptable:i=e.scriptable,_indexable:s=e.indexable,_allKeys:o=e.allKeys}=t;return{allKeys:o,scriptable:i,indexable:s,isScriptable:cs(i)?i:()=>i,isIndexable:cs(s)?s:()=>s}}const Qx=(t,e)=>t?t+_c(e):e,Ac=(t,e)=>vt(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function fp(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const s=i();return t[e]=s,s}function tw(t,e,i){const{_proxy:s,_context:o,_subProxy:r,_descriptors:n}=t;let a=s[e];return cs(a)&&n.isScriptable(e)&&(a=ew(e,a,t,i)),Jt(a)&&a.length&&(a=iw(e,a,t,n.isIndexable)),Ac(e,a)&&(a=uo(a,o,r&&r[e],n)),a}function ew(t,e,i,s){const{_proxy:o,_context:r,_subProxy:n,_stack:a}=i;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let l=e(r,n||s);return a.delete(t),Ac(t,l)&&(l=Tc(o._scopes,o,t,l)),l}function iw(t,e,i,s){const{_proxy:o,_context:r,_subProxy:n,_descriptors:a}=i;if(typeof r.index<"u"&&s(t))return e[r.index%e.length];if(vt(e[0])){const l=e,c=o._scopes.filter(h=>h!==l);e=[];for(const h of l){const d=Tc(c,o,t,h);e.push(uo(d,r,n&&n[t],a))}}return e}function pp(t,e,i){return cs(t)?t(e,i):t}const sw=(t,e)=>t===!0?e:typeof t=="string"?Fn(e,t):void 0;function ow(t,e,i,s,o){for(const r of e){const n=sw(i,r);if(n){t.add(n);const a=pp(n._fallback,i,o);if(typeof a<"u"&&a!==i&&a!==s)return a}else if(n===!1&&typeof s<"u"&&i!==s)return null}return!1}function Tc(t,e,i,s){const o=e._rootScopes,r=pp(e._fallback,i,s),n=[...t,...o],a=new Set;a.add(s);let l=dd(a,n,i,r||i,s);return l===null||typeof r<"u"&&r!==i&&(l=dd(a,n,r,l,s),l===null)?!1:$c(Array.from(a),[""],o,r,()=>rw(e,i,s))}function dd(t,e,i,s,o){for(;i;)i=ow(t,e,i,s,o);return i}function rw(t,e,i){const s=t._getTarget();e in s||(s[e]={});const o=s[e];return Jt(o)&&vt(i)?i:o||{}}function nw(t,e,i,s){let o;for(const r of e)if(o=gp(Qx(r,t),i),typeof o<"u")return Ac(t,o)?Tc(i,s,t,o):o}function gp(t,e){for(const i of e){if(!i)continue;const s=i[t];if(typeof s<"u")return s}}function ud(t){let e=t._keys;return e||(e=t._keys=aw(t._scopes)),e}function aw(t){const e=new Set;for(const i of t)for(const s of Object.keys(i).filter(o=>!o.startsWith("_")))e.add(s);return Array.from(e)}const lw=Number.EPSILON||1e-14,fo=(t,e)=>e<t.length&&!t[e].skip&&t[e],mp=t=>t==="x"?"y":"x";function cw(t,e,i,s){const o=t.skip?e:t,r=e,n=i.skip?e:i,a=kl(r,o),l=kl(n,r);let c=a/(a+l),h=l/(a+l);c=isNaN(c)?0:c,h=isNaN(h)?0:h;const d=s*c,f=s*h;return{previous:{x:r.x-d*(n.x-o.x),y:r.y-d*(n.y-o.y)},next:{x:r.x+f*(n.x-o.x),y:r.y+f*(n.y-o.y)}}}function hw(t,e,i){const s=t.length;let o,r,n,a,l,c=fo(t,0);for(let h=0;h<s-1;++h)if(l=c,c=fo(t,h+1),!(!l||!c)){if(or(e[h],0,lw)){i[h]=i[h+1]=0;continue}o=i[h]/e[h],r=i[h+1]/e[h],a=Math.pow(o,2)+Math.pow(r,2),!(a<=9)&&(n=3/Math.sqrt(a),i[h]=o*n*e[h],i[h+1]=r*n*e[h])}}function dw(t,e,i="x"){const s=mp(i),o=t.length;let r,n,a,l=fo(t,0);for(let c=0;c<o;++c){if(n=a,a=l,l=fo(t,c+1),!a)continue;const h=a[i],d=a[s];n&&(r=(h-n[i])/3,a[`cp1${i}`]=h-r,a[`cp1${s}`]=d-r*e[c]),l&&(r=(l[i]-h)/3,a[`cp2${i}`]=h+r,a[`cp2${s}`]=d+r*e[c])}}function uw(t,e="x"){const i=mp(e),s=t.length,o=Array(s).fill(0),r=Array(s);let n,a,l,c=fo(t,0);for(n=0;n<s;++n)if(a=l,l=c,c=fo(t,n+1),!!l){if(c){const h=c[e]-l[e];o[n]=h!==0?(c[i]-l[i])/h:0}r[n]=a?c?ho(o[n-1])!==ho(o[n])?0:(o[n-1]+o[n])/2:o[n-1]:o[n]}hw(t,o,r),dw(t,r,e)}function en(t,e,i){return Math.max(Math.min(t,i),e)}function fw(t,e){let i,s,o,r,n,a=yr(t[0],e);for(i=0,s=t.length;i<s;++i)n=r,r=a,a=i<s-1&&yr(t[i+1],e),r&&(o=t[i],n&&(o.cp1x=en(o.cp1x,e.left,e.right),o.cp1y=en(o.cp1y,e.top,e.bottom)),a&&(o.cp2x=en(o.cp2x,e.left,e.right),o.cp2y=en(o.cp2y,e.top,e.bottom)))}function pw(t,e,i,s,o){let r,n,a,l;if(e.spanGaps&&(t=t.filter(c=>!c.skip)),e.cubicInterpolationMode==="monotone")uw(t,o);else{let c=s?t[t.length-1]:t[0];for(r=0,n=t.length;r<n;++r)a=t[r],l=cw(c,a,t[Math.min(r+1,n-(s?0:1))%n],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}e.capBezierPoints&&fw(t,i)}function Ec(){return typeof window<"u"&&typeof document<"u"}function zc(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Nn(t,e,i){let s;return typeof t=="string"?(s=parseInt(t,10),t.indexOf("%")!==-1&&(s=s/100*e.parentNode[i])):s=t,s}const ha=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function gw(t,e){return ha(t).getPropertyValue(e)}const mw=["top","right","bottom","left"];function Os(t,e,i){const s={};i=i?"-"+i:"";for(let o=0;o<4;o++){const r=mw[o];s[r]=parseFloat(t[e+"-"+r+i])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const bw=(t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot);function vw(t,e){const i=t.touches,s=i&&i.length?i[0]:t,{offsetX:o,offsetY:r}=s;let n=!1,a,l;if(bw(o,r,t.target))a=o,l=r;else{const c=e.getBoundingClientRect();a=s.clientX-c.left,l=s.clientY-c.top,n=!0}return{x:a,y:l,box:n}}function ks(t,e){if("native"in t)return t;const{canvas:i,currentDevicePixelRatio:s}=e,o=ha(i),r=o.boxSizing==="border-box",n=Os(o,"padding"),a=Os(o,"border","width"),{x:l,y:c,box:h}=vw(t,i),d=n.left+(h&&a.left),f=n.top+(h&&a.top);let{width:p,height:m}=e;return r&&(p-=n.width+a.width,m-=n.height+a.height),{x:Math.round((l-d)/p*i.width/s),y:Math.round((c-f)/m*i.height/s)}}function yw(t,e,i){let s,o;if(e===void 0||i===void 0){const r=t&&zc(t);if(!r)e=t.clientWidth,i=t.clientHeight;else{const n=r.getBoundingClientRect(),a=ha(r),l=Os(a,"border","width"),c=Os(a,"padding");e=n.width-c.width-l.width,i=n.height-c.height-l.height,s=Nn(a.maxWidth,r,"clientWidth"),o=Nn(a.maxHeight,r,"clientHeight")}}return{width:e,height:i,maxWidth:s||Hn,maxHeight:o||Hn}}const sn=t=>Math.round(t*10)/10;function _w(t,e,i,s){const o=ha(t),r=Os(o,"margin"),n=Nn(o.maxWidth,t,"clientWidth")||Hn,a=Nn(o.maxHeight,t,"clientHeight")||Hn,l=yw(t,e,i);let{width:c,height:h}=l;if(o.boxSizing==="content-box"){const f=Os(o,"border","width"),p=Os(o,"padding");c-=p.width+f.width,h-=p.height+f.height}return c=Math.max(0,c-r.width),h=Math.max(0,s?c/s:h-r.height),c=sn(Math.min(c,n,l.maxWidth)),h=sn(Math.min(h,a,l.maxHeight)),c&&!h&&(h=sn(c/2)),(e!==void 0||i!==void 0)&&s&&l.height&&h>l.height&&(h=l.height,c=sn(Math.floor(h*s))),{width:c,height:h}}function fd(t,e,i){const s=e||1,o=Math.floor(t.height*s),r=Math.floor(t.width*s);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const n=t.canvas;return n.style&&(i||!n.style.height&&!n.style.width)&&(n.style.height=`${t.height}px`,n.style.width=`${t.width}px`),t.currentDevicePixelRatio!==s||n.height!==o||n.width!==r?(t.currentDevicePixelRatio=s,n.height=o,n.width=r,t.ctx.setTransform(s,0,0,s,0,0),!0):!1}const xw=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};Ec()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return t}();function pd(t,e){const i=gw(t,e),s=i&&i.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function Cs(t,e,i,s){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}function ww(t,e,i,s){return{x:t.x+i*(e.x-t.x),y:s==="middle"?i<.5?t.y:e.y:s==="after"?i<1?t.y:e.y:i>0?e.y:t.y}}function kw(t,e,i,s){const o={x:t.cp2x,y:t.cp2y},r={x:e.cp1x,y:e.cp1y},n=Cs(t,o,i),a=Cs(o,r,i),l=Cs(r,e,i),c=Cs(n,a,i),h=Cs(a,l,i);return Cs(c,h,i)}const Cw=function(t,e){return{x(i){return t+t+e-i},setWidth(i){e=i},textAlign(i){return i==="center"?i:i==="right"?"left":"right"},xPlus(i,s){return i-s},leftForLtr(i,s){return i-s}}},Sw=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function ro(t,e,i){return t?Cw(e,i):Sw()}function bp(t,e){let i,s;(e==="ltr"||e==="rtl")&&(i=t.canvas.style,s=[i.getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=s)}function vp(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function yp(t){return t==="angle"?{between:sp,compare:kx,normalize:Yi}:{between:zs,compare:(e,i)=>e-i,normalize:e=>e}}function gd({start:t,end:e,count:i,loop:s,style:o}){return{start:t%i,end:e%i,loop:s&&(e-t+1)%i===0,style:o}}function $w(t,e,i){const{property:s,start:o,end:r}=i,{between:n,normalize:a}=yp(s),l=e.length;let{start:c,end:h,loop:d}=t,f,p;if(d){for(c+=l,h+=l,f=0,p=l;f<p&&n(a(e[c%l][s]),o,r);++f)c--,h--;c%=l,h%=l}return h<c&&(h+=l),{start:c,end:h,loop:d,style:t.style}}function Aw(t,e,i){if(!i)return[t];const{property:s,start:o,end:r}=i,n=e.length,{compare:a,between:l,normalize:c}=yp(s),{start:h,end:d,loop:f,style:p}=$w(t,e,i),m=[];let b=!1,v=null,w,x,S;const y=()=>l(o,S,w)&&a(o,S)!==0,k=()=>a(r,w)===0||l(r,S,w),$=()=>b||y(),T=()=>!b||k();for(let z=h,O=h;z<=d;++z)x=e[z%n],!x.skip&&(w=c(x[s]),w!==S&&(b=l(w,o,r),v===null&&$()&&(v=a(w,o)===0?z:O),v!==null&&T()&&(m.push(gd({start:v,end:z,loop:f,count:n,style:p})),v=null),O=z,S=w));return v!==null&&m.push(gd({start:v,end:d,loop:f,count:n,style:p})),m}function Tw(t,e){const i=[],s=t.segments;for(let o=0;o<s.length;o++){const r=Aw(s[o],t.points,e);r.length&&i.push(...r)}return i}function Ew(t,e,i,s){let o=0,r=e-1;if(i&&!s)for(;o<e&&!t[o].skip;)o++;for(;o<e&&t[o].skip;)o++;for(o%=e,i&&(r+=o);r>o&&t[r%e].skip;)r--;return r%=e,{start:o,end:r}}function zw(t,e,i,s){const o=t.length,r=[];let n=e,a=t[e],l;for(l=e+1;l<=i;++l){const c=t[l%o];c.skip||c.stop?a.skip||(s=!1,r.push({start:e%o,end:(l-1)%o,loop:s}),e=n=c.stop?l:null):(n=l,a.skip&&(e=l)),a=c}return n!==null&&r.push({start:e%o,end:n%o,loop:s}),r}function Mw(t,e){const i=t.points,s=t.options.spanGaps,o=i.length;if(!o)return[];const r=!!t._loop,{start:n,end:a}=Ew(i,o,r,s);if(s===!0)return md(t,[{start:n,end:a,loop:r}],i,e);const l=a<n?a+o:a,c=!!t._fullLoop&&n===0&&a===o-1;return md(t,zw(i,n,l,c),i,e)}function md(t,e,i,s){return!s||!s.setContext||!i?e:Dw(t,e,i,s)}function Dw(t,e,i,s){const o=t._chart.getContext(),r=bd(t.options),{_datasetIndex:n,options:{spanGaps:a}}=t,l=i.length,c=[];let h=r,d=e[0].start,f=d;function p(m,b,v,w){const x=a?-1:1;if(m!==b){for(m+=l;i[m%l].skip;)m-=x;for(;i[b%l].skip;)b+=x;m%l!==b%l&&(c.push({start:m%l,end:b%l,loop:v,style:w}),h=w,d=b%l)}}for(const m of e){d=a?d:m.start;let b=i[d%l],v;for(f=d+1;f<=m.end;f++){const w=i[f%l];v=bd(s.setContext(Us(o,{type:"segment",p0:b,p1:w,p0DataIndex:(f-1)%l,p1DataIndex:f%l,datasetIndex:n}))),Ow(v,h)&&p(d,f-1,m.loop,h),b=w,h=v}d<f-1&&p(d,f-1,m.loop,h)}return c}function bd(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Ow(t,e){if(!e)return!1;const i=[],s=function(o,r){return kc(r)?(i.includes(r)||i.push(r),i.indexOf(r)):r};return JSON.stringify(t,s)!==JSON.stringify(e,s)}function on(t,e,i){return t.options.clip?t[i]:e[i]}function Pw(t,e){const{xScale:i,yScale:s}=t;return i&&s?{left:on(i,e,"left"),right:on(i,e,"right"),top:on(s,e,"top"),bottom:on(s,e,"bottom")}:e}function Iw(t,e){const i=e._clip;if(i.disabled)return!1;const s=Pw(e,t.chartArea);return{left:i.left===!1?0:s.left-(i.left===!0?0:i.left),right:i.right===!1?t.width:s.right+(i.right===!0?0:i.right),top:i.top===!1?0:s.top-(i.top===!0?0:i.top),bottom:i.bottom===!1?t.height:s.bottom+(i.bottom===!0?0:i.bottom)}}/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class Rw{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,i,s,o){const r=i.listeners[o],n=i.duration;r.forEach(a=>a({chart:e,initial:i.initial,numSteps:n,currentStep:Math.min(s-i.start,n)}))}_refresh(){this._request||(this._running=!0,this._request=rp.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let i=0;this._charts.forEach((s,o)=>{if(!s.running||!s.items.length)return;const r=s.items;let n=r.length-1,a=!1,l;for(;n>=0;--n)l=r[n],l._active?(l._total>s.duration&&(s.duration=l._total),l.tick(e),a=!0):(r[n]=r[r.length-1],r.pop());a&&(o.draw(),this._notify(o,s,e,"progress")),r.length||(s.running=!1,this._notify(o,s,e,"complete"),s.initial=!1),i+=r.length}),this._lastDate=e,i===0&&(this._running=!1)}_getAnims(e){const i=this._charts;let s=i.get(e);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},i.set(e,s)),s}listen(e,i,s){this._getAnims(e).listeners[i].push(s)}add(e,i){!i||!i.length||this._getAnims(e).items.push(...i)}has(e){return this._getAnims(e).items.length>0}start(e){const i=this._charts.get(e);i&&(i.running=!0,i.start=Date.now(),i.duration=i.items.reduce((s,o)=>Math.max(s,o._duration),0),this._refresh())}running(e){if(!this._running)return!1;const i=this._charts.get(e);return!(!i||!i.running||!i.items.length)}stop(e){const i=this._charts.get(e);if(!i||!i.items.length)return;const s=i.items;let o=s.length-1;for(;o>=0;--o)s[o].cancel();i.items=[],this._notify(e,i,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var Oi=new Rw;const vd="transparent",Lw={boolean(t,e,i){return i>.5?e:t},color(t,e,i){const s=ad(t||vd),o=s.valid&&ad(e||vd);return o&&o.valid?o.mix(s,i).hexString():e},number(t,e,i){return t+(e-t)*i}};class Fw{constructor(e,i,s,o){const r=i[s];o=tn([e.to,o,r,e.from]);const n=tn([e.from,r,o]);this._active=!0,this._fn=e.fn||Lw[e.type||typeof n],this._easing=rr[e.easing]||rr.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=i,this._prop=s,this._from=n,this._to=o,this._promises=void 0}active(){return this._active}update(e,i,s){if(this._active){this._notify(!1);const o=this._target[this._prop],r=s-this._start,n=this._duration-r;this._start=s,this._duration=Math.floor(Math.max(n,e.duration)),this._total+=r,this._loop=!!e.loop,this._to=tn([e.to,i,o,e.from]),this._from=tn([e.from,o,i])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const i=e-this._start,s=this._duration,o=this._prop,r=this._from,n=this._loop,a=this._to;let l;if(this._active=r!==a&&(n||i<s),!this._active){this._target[o]=a,this._notify(!0);return}if(i<0){this._target[o]=r;return}l=i/s%2,l=n&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[o]=this._fn(r,a,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((i,s)=>{e.push({res:i,rej:s})})}_notify(e){const i=e?"res":"rej",s=this._promises||[];for(let o=0;o<s.length;o++)s[o][i]()}}class _p{constructor(e,i){this._chart=e,this._properties=new Map,this.configure(i)}configure(e){if(!vt(e))return;const i=Object.keys(Nt.animation),s=this._properties;Object.getOwnPropertyNames(e).forEach(o=>{const r=e[o];if(!vt(r))return;const n={};for(const a of i)n[a]=r[a];(Jt(r.properties)&&r.properties||[o]).forEach(a=>{(a===o||!s.has(a))&&s.set(a,n)})})}_animateOptions(e,i){const s=i.options,o=Hw(e,s);if(!o)return[];const r=this._createAnimations(o,s);return s.$shared&&Bw(e.options.$animations,s).then(()=>{e.options=s},()=>{}),r}_createAnimations(e,i){const s=this._properties,o=[],r=e.$animations||(e.$animations={}),n=Object.keys(i),a=Date.now();let l;for(l=n.length-1;l>=0;--l){const c=n[l];if(c.charAt(0)==="$")continue;if(c==="options"){o.push(...this._animateOptions(e,i));continue}const h=i[c];let d=r[c];const f=s.get(c);if(d)if(f&&d.active()){d.update(f,h,a);continue}else d.cancel();if(!f||!f.duration){e[c]=h;continue}r[c]=d=new Fw(f,e,c,h),o.push(d)}return o}update(e,i){if(this._properties.size===0){Object.assign(e,i);return}const s=this._createAnimations(e,i);if(s.length)return Oi.add(this._chart,s),!0}}function Bw(t,e){const i=[],s=Object.keys(e);for(let o=0;o<s.length;o++){const r=t[s[o]];r&&r.active()&&i.push(r.wait())}return Promise.all(i)}function Hw(t,e){if(!e)return;let i=t.options;if(!i){t.options=e;return}return i.$shared&&(t.options=i=Object.assign({},i,{$shared:!1,$animations:{}})),i}function yd(t,e){const i=t&&t.options||{},s=i.reverse,o=i.min===void 0?e:0,r=i.max===void 0?e:0;return{start:s?r:o,end:s?o:r}}function Vw(t,e,i){if(i===!1)return!1;const s=yd(t,i),o=yd(e,i);return{top:o.end,right:s.end,bottom:o.start,left:s.start}}function Nw(t){let e,i,s,o;return vt(t)?(e=t.top,i=t.right,s=t.bottom,o=t.left):e=i=s=o=t,{top:e,right:i,bottom:s,left:o,disabled:t===!1}}function xp(t,e){const i=[],s=t._getSortedDatasetMetas(e);let o,r;for(o=0,r=s.length;o<r;++o)i.push(s[o].index);return i}function _d(t,e,i,s={}){const o=t.keys,r=s.mode==="single";let n,a,l,c;if(e===null)return;let h=!1;for(n=0,a=o.length;n<a;++n){if(l=+o[n],l===i){if(h=!0,s.all)continue;break}c=t.values[l],Xe(c)&&(r||e===0||ho(e)===ho(c))&&(e+=c)}return!h&&!s.all?0:e}function Uw(t,e){const{iScale:i,vScale:s}=e,o=i.axis==="x"?"x":"y",r=s.axis==="x"?"x":"y",n=Object.keys(t),a=new Array(n.length);let l,c,h;for(l=0,c=n.length;l<c;++l)h=n[l],a[l]={[o]:h,[r]:t[h]};return a}function Fa(t,e){const i=t&&t.options.stacked;return i||i===void 0&&e.stack!==void 0}function jw(t,e,i){return`${t.id}.${e.id}.${i.stack||i.type}`}function Ww(t){const{min:e,max:i,minDefined:s,maxDefined:o}=t.getUserBounds();return{min:s?e:Number.NEGATIVE_INFINITY,max:o?i:Number.POSITIVE_INFINITY}}function qw(t,e,i){const s=t[e]||(t[e]={});return s[i]||(s[i]={})}function xd(t,e,i,s){for(const o of e.getMatchingVisibleMetas(s).reverse()){const r=t[o.index];if(i&&r>0||!i&&r<0)return o.index}return null}function wd(t,e){const{chart:i,_cachedMeta:s}=t,o=i._stacks||(i._stacks={}),{iScale:r,vScale:n,index:a}=s,l=r.axis,c=n.axis,h=jw(r,n,s),d=e.length;let f;for(let p=0;p<d;++p){const m=e[p],{[l]:b,[c]:v}=m,w=m._stacks||(m._stacks={});f=w[c]=qw(o,h,b),f[a]=v,f._top=xd(f,n,!0,s.type),f._bottom=xd(f,n,!1,s.type);const x=f._visualValues||(f._visualValues={});x[a]=v}}function Ba(t,e){const i=t.scales;return Object.keys(i).filter(s=>i[s].axis===e).shift()}function Kw(t,e){return Us(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function Yw(t,e,i){return Us(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:i,index:e,mode:"default",type:"data"})}function Oo(t,e){const i=t.controller.index,s=t.vScale&&t.vScale.axis;if(s){e=e||t._parsed;for(const o of e){const r=o._stacks;if(!r||r[s]===void 0||r[s][i]===void 0)return;delete r[s][i],r[s]._visualValues!==void 0&&r[s]._visualValues[i]!==void 0&&delete r[s]._visualValues[i]}}}const Ha=t=>t==="reset"||t==="none",kd=(t,e)=>e?t:Object.assign({},t),Xw=(t,e,i)=>t&&!e.hidden&&e._stacked&&{keys:xp(i,!0),values:null};class wp{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(e,i){this.chart=e,this._ctx=e.ctx,this.index=i,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Fa(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&Oo(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,i=this._cachedMeta,s=this.getDataset(),o=(d,f,p,m)=>d==="x"?f:d==="r"?m:p,r=i.xAxisID=mt(s.xAxisID,Ba(e,"x")),n=i.yAxisID=mt(s.yAxisID,Ba(e,"y")),a=i.rAxisID=mt(s.rAxisID,Ba(e,"r")),l=i.indexAxis,c=i.iAxisID=o(l,r,n,a),h=i.vAxisID=o(l,n,r,a);i.xScale=this.getScaleForId(r),i.yScale=this.getScaleForId(n),i.rScale=this.getScaleForId(a),i.iScale=this.getScaleForId(c),i.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const i=this._cachedMeta;return e===i.iScale?i.vScale:i.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&od(this._data,this),e._stacked&&Oo(e)}_dataCheck(){const e=this.getDataset(),i=e.data||(e.data=[]),s=this._data;if(vt(i)){const o=this._cachedMeta;this._data=Uw(i,o)}else if(s!==i){if(s){od(s,this);const o=this._cachedMeta;Oo(o),o._parsed=[]}i&&Object.isExtensible(i)&&Ax(i,this),this._syncList=[],this._data=i}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const i=this._cachedMeta,s=this.getDataset();let o=!1;this._dataCheck();const r=i._stacked;i._stacked=Fa(i.vScale,i),i.stack!==s.stack&&(o=!0,Oo(i),i.stack=s.stack),this._resyncElements(e),(o||r!==i._stacked)&&(wd(this,i._parsed),i._stacked=Fa(i.vScale,i))}configure(){const e=this.chart.config,i=e.datasetScopeKeys(this._type),s=e.getOptionScopes(this.getDataset(),i,!0);this.options=e.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,i){const{_cachedMeta:s,_data:o}=this,{iScale:r,_stacked:n}=s,a=r.axis;let l=e===0&&i===o.length?!0:s._sorted,c=e>0&&s._parsed[e-1],h,d,f;if(this._parsing===!1)s._parsed=o,s._sorted=!0,f=o;else{Jt(o[e])?f=this.parseArrayData(s,o,e,i):vt(o[e])?f=this.parseObjectData(s,o,e,i):f=this.parsePrimitiveData(s,o,e,i);const p=()=>d[a]===null||c&&d[a]<c[a];for(h=0;h<i;++h)s._parsed[h+e]=d=f[h],l&&(p()&&(l=!1),c=d);s._sorted=l}n&&wd(this,f)}parsePrimitiveData(e,i,s,o){const{iScale:r,vScale:n}=e,a=r.axis,l=n.axis,c=r.getLabels(),h=r===n,d=new Array(o);let f,p,m;for(f=0,p=o;f<p;++f)m=f+s,d[f]={[a]:h||r.parse(c[m],m),[l]:n.parse(i[m],m)};return d}parseArrayData(e,i,s,o){const{xScale:r,yScale:n}=e,a=new Array(o);let l,c,h,d;for(l=0,c=o;l<c;++l)h=l+s,d=i[h],a[l]={x:r.parse(d[0],h),y:n.parse(d[1],h)};return a}parseObjectData(e,i,s,o){const{xScale:r,yScale:n}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(o);let h,d,f,p;for(h=0,d=o;h<d;++h)f=h+s,p=i[f],c[h]={x:r.parse(Fn(p,a),f),y:n.parse(Fn(p,l),f)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,i,s){const o=this.chart,r=this._cachedMeta,n=i[e.axis],a={keys:xp(o,!0),values:i._stacks[e.axis]._visualValues};return _d(a,n,r.index,{mode:s})}updateRangeFromParsed(e,i,s,o){const r=s[i.axis];let n=r===null?NaN:r;const a=o&&s._stacks[i.axis];o&&a&&(o.values=a,n=_d(o,r,this._cachedMeta.index)),e.min=Math.min(e.min,n),e.max=Math.max(e.max,n)}getMinMax(e,i){const s=this._cachedMeta,o=s._parsed,r=s._sorted&&e===s.iScale,n=o.length,a=this._getOtherScale(e),l=Xw(i,s,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:d}=Ww(a);let f,p;function m(){p=o[f];const b=p[a.axis];return!Xe(p[e.axis])||h>b||d<b}for(f=0;f<n&&!(!m()&&(this.updateRangeFromParsed(c,e,p,l),r));++f);if(r){for(f=n-1;f>=0;--f)if(!m()){this.updateRangeFromParsed(c,e,p,l);break}}return c}getAllParsedValues(e){const i=this._cachedMeta._parsed,s=[];let o,r,n;for(o=0,r=i.length;o<r;++o)n=i[o][e.axis],Xe(n)&&s.push(n);return s}getMaxOverflow(){return!1}getLabelAndValue(e){const i=this._cachedMeta,s=i.iScale,o=i.vScale,r=this.getParsed(e);return{label:s?""+s.getLabelForValue(r[s.axis]):"",value:o?""+o.getLabelForValue(r[o.axis]):""}}_update(e){const i=this._cachedMeta;this.update(e||"default"),i._clip=Nw(mt(this.options.clip,Vw(i.xScale,i.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,i=this.chart,s=this._cachedMeta,o=s.data||[],r=i.chartArea,n=[],a=this._drawStart||0,l=this._drawCount||o.length-a,c=this.options.drawActiveElementsOnTop;let h;for(s.dataset&&s.dataset.draw(e,r,a,l),h=a;h<a+l;++h){const d=o[h];d.hidden||(d.active&&c?n.push(d):d.draw(e,r))}for(h=0;h<n.length;++h)n[h].draw(e,r)}getStyle(e,i){const s=i?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(e||0,s)}getContext(e,i,s){const o=this.getDataset();let r;if(e>=0&&e<this._cachedMeta.data.length){const n=this._cachedMeta.data[e];r=n.$context||(n.$context=Yw(this.getContext(),e,n)),r.parsed=this.getParsed(e),r.raw=o.data[e],r.index=r.dataIndex=e}else r=this.$context||(this.$context=Kw(this.chart.getContext(),this.index)),r.dataset=o,r.index=r.datasetIndex=this.index;return r.active=!!i,r.mode=s,r}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,i){return this._resolveElementOptions(this.dataElementType.id,i,e)}_resolveElementOptions(e,i="default",s){const o=i==="active",r=this._cachedDataOpts,n=e+"-"+i,a=r[n],l=this.enableOptionSharing&&Bn(s);if(a)return kd(a,l);const c=this.chart.config,h=c.datasetElementScopeKeys(this._type,e),d=o?[`${e}Hover`,"hover",e,""]:[e,""],f=c.getOptionScopes(this.getDataset(),h),p=Object.keys(Nt.elements[e]),m=()=>this.getContext(s,o,i),b=c.resolveNamedOptions(f,p,m,d);return b.$shared&&(b.$shared=l,r[n]=Object.freeze(kd(b,l))),b}_resolveAnimations(e,i,s){const o=this.chart,r=this._cachedDataOpts,n=`animation-${i}`,a=r[n];if(a)return a;let l;if(o.options.animation!==!1){const h=this.chart.config,d=h.datasetAnimationScopeKeys(this._type,i),f=h.getOptionScopes(this.getDataset(),d);l=h.createResolver(f,this.getContext(e,s,i))}const c=new _p(o,l&&l.animations);return l&&l._cacheable&&(r[n]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,i){return!i||Ha(e)||this.chart._animationsDisabled}_getSharedOptions(e,i){const s=this.resolveDataElementOptions(e,i),o=this._sharedOptions,r=this.getSharedOptions(s),n=this.includeOptions(i,r)||r!==o;return this.updateSharedOptions(r,i,s),{sharedOptions:r,includeOptions:n}}updateElement(e,i,s,o){Ha(o)?Object.assign(e,s):this._resolveAnimations(i,o).update(e,s)}updateSharedOptions(e,i,s){e&&!Ha(i)&&this._resolveAnimations(void 0,i).update(e,s)}_setStyle(e,i,s,o){e.active=o;const r=this.getStyle(i,o);this._resolveAnimations(i,s,o).update(e,{options:!o&&this.getSharedOptions(r)||r})}removeHoverStyle(e,i,s){this._setStyle(e,s,"active",!1)}setHoverStyle(e,i,s){this._setStyle(e,s,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const i=this._data,s=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const o=s.length,r=i.length,n=Math.min(r,o);n&&this.parse(0,n),r>o?this._insertElements(o,r-o,e):r<o&&this._removeElements(r,o-r)}_insertElements(e,i,s=!0){const o=this._cachedMeta,r=o.data,n=e+i;let a;const l=c=>{for(c.length+=i,a=c.length-1;a>=n;a--)c[a]=c[a-i]};for(l(r),a=e;a<n;++a)r[a]=new this.dataElementType;this._parsing&&l(o._parsed),this.parse(e,i),s&&this.updateElements(r,e,i,"reset")}updateElements(e,i,s,o){}_removeElements(e,i){const s=this._cachedMeta;if(this._parsing){const o=s._parsed.splice(e,i);s._stacked&&Oo(s,o)}s.data.splice(e,i)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[i,s,o]=e;this[i](s,o)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,i){i&&this._sync(["_removeElements",e,i]);const s=arguments.length-2;s&&this._sync(["_insertElements",e,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}class Gw extends wp{static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(e){const i=this._cachedMeta,s=this.chart.data.labels||[],{xScale:o,yScale:r}=i,n=this.getParsed(e),a=o.getLabelForValue(n.x),l=r.getLabelForValue(n.y);return{label:s[e]||"",value:"("+a+", "+l+")"}}update(e){const i=this._cachedMeta,{data:s=[]}=i,o=this.chart._animationsDisabled;let{start:r,count:n}=Mx(i,s,o);if(this._drawStart=r,this._drawCount=n,Dx(i)&&(r=0,n=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=i;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=s;const c=this.resolveDatasetElementOptions(e);c.segment=this.options.segment,this.updateElement(a,void 0,{animated:!o,options:c},e)}else this.datasetElementType&&(delete i.dataset,this.datasetElementType=!1);this.updateElements(s,r,n,e)}addElements(){const{showLine:e}=this.options;!this.datasetElementType&&e&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(e,i,s,o){const r=o==="reset",{iScale:n,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,h=this.resolveDataElementOptions(i,o),d=this.getSharedOptions(h),f=this.includeOptions(o,d),p=n.axis,m=a.axis,{spanGaps:b,segment:v}=this.options,w=vr(b)?b:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||r||o==="none";let S=i>0&&this.getParsed(i-1);for(let y=i;y<i+s;++y){const k=e[y],$=this.getParsed(y),T=x?k:{},z=Mt($[m]),O=T[p]=n.getPixelForValue($[p],y),M=T[m]=r||z?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,$,l):$[m],y);T.skip=isNaN(O)||isNaN(M)||z,T.stop=y>0&&Math.abs($[p]-S[p])>w,v&&(T.parsed=$,T.raw=c.data[y]),f&&(T.options=d||this.resolveDataElementOptions(y,k.active?"active":o)),x||this.updateElement(k,y,T,o),S=$}this.updateSharedOptions(d,o,h)}getMaxOverflow(){const e=this._cachedMeta,i=e.data||[];if(!this.options.showLine){let a=0;for(let l=i.length-1;l>=0;--l)a=Math.max(a,i[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const s=e.dataset,o=s.options&&s.options.borderWidth||0;if(!i.length)return o;const r=i[0].size(this.resolveDataElementOptions(0)),n=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(o,r,n)/2}}function _s(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Mc{static override(e){Object.assign(Mc.prototype,e)}options;constructor(e){this.options=e||{}}init(){}formats(){return _s()}parse(){return _s()}format(){return _s()}add(){return _s()}diff(){return _s()}startOf(){return _s()}endOf(){return _s()}}var Jw={_date:Mc};function Zw(t,e,i,s){const{controller:o,data:r,_sorted:n}=t,a=o._cachedMeta.iScale,l=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null;if(a&&e===a.axis&&e!=="r"&&n&&r.length){const c=a._reversePixels?Sx:Ms;if(s){if(o._sharedOptions){const h=r[0],d=typeof h.getRange=="function"&&h.getRange(e);if(d){const f=c(r,e,i-d),p=c(r,e,i+d);return{lo:f.lo,hi:p.hi}}}}else{const h=c(r,e,i);if(l){const{vScale:d}=o._cachedMeta,{_parsed:f}=t,p=f.slice(0,h.lo+1).reverse().findIndex(b=>!Mt(b[d.axis]));h.lo-=Math.max(0,p);const m=f.slice(h.hi).findIndex(b=>!Mt(b[d.axis]));h.hi+=Math.max(0,m)}return h}}return{lo:0,hi:r.length-1}}function da(t,e,i,s,o){const r=t.getSortedVisibleDatasetMetas(),n=i[e];for(let a=0,l=r.length;a<l;++a){const{index:c,data:h}=r[a],{lo:d,hi:f}=Zw(r[a],e,n,o);for(let p=d;p<=f;++p){const m=h[p];m.skip||s(m,c,p)}}}function Qw(t){const e=t.indexOf("x")!==-1,i=t.indexOf("y")!==-1;return function(s,o){const r=e?Math.abs(s.x-o.x):0,n=i?Math.abs(s.y-o.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(n,2))}}function Va(t,e,i,s,o){const r=[];return!o&&!t.isPointInArea(e)||da(t,i,e,function(a,l,c){!o&&!yr(a,t.chartArea,0)||a.inRange(e.x,e.y,s)&&r.push({element:a,datasetIndex:l,index:c})},!0),r}function tk(t,e,i,s){let o=[];function r(n,a,l){const{startAngle:c,endAngle:h}=n.getProps(["startAngle","endAngle"],s),{angle:d}=wx(n,{x:e.x,y:e.y});sp(d,c,h)&&o.push({element:n,datasetIndex:a,index:l})}return da(t,i,e,r),o}function ek(t,e,i,s,o,r){let n=[];const a=Qw(i);let l=Number.POSITIVE_INFINITY;function c(h,d,f){const p=h.inRange(e.x,e.y,o);if(s&&!p)return;const m=h.getCenterPoint(o);if(!(!!r||t.isPointInArea(m))&&!p)return;const v=a(e,m);v<l?(n=[{element:h,datasetIndex:d,index:f}],l=v):v===l&&n.push({element:h,datasetIndex:d,index:f})}return da(t,i,e,c),n}function Na(t,e,i,s,o,r){return!r&&!t.isPointInArea(e)?[]:i==="r"&&!s?tk(t,e,i,o):ek(t,e,i,s,o,r)}function Cd(t,e,i,s,o){const r=[],n=i==="x"?"inXRange":"inYRange";let a=!1;return da(t,i,e,(l,c,h)=>{l[n]&&l[n](e[i],o)&&(r.push({element:l,datasetIndex:c,index:h}),a=a||l.inRange(e.x,e.y,o))}),s&&!a?[]:r}var ik={modes:{index(t,e,i,s){const o=ks(e,t),r=i.axis||"x",n=i.includeInvisible||!1,a=i.intersect?Va(t,o,r,s,n):Na(t,o,r,!1,s,n),l=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach(c=>{const h=a[0].index,d=c.data[h];d&&!d.skip&&l.push({element:d,datasetIndex:c.index,index:h})}),l):[]},dataset(t,e,i,s){const o=ks(e,t),r=i.axis||"xy",n=i.includeInvisible||!1;let a=i.intersect?Va(t,o,r,s,n):Na(t,o,r,!1,s,n);if(a.length>0){const l=a[0].datasetIndex,c=t.getDatasetMeta(l).data;a=[];for(let h=0;h<c.length;++h)a.push({element:c[h],datasetIndex:l,index:h})}return a},point(t,e,i,s){const o=ks(e,t),r=i.axis||"xy",n=i.includeInvisible||!1;return Va(t,o,r,s,n)},nearest(t,e,i,s){const o=ks(e,t),r=i.axis||"xy",n=i.includeInvisible||!1;return Na(t,o,r,i.intersect,s,n)},x(t,e,i,s){const o=ks(e,t);return Cd(t,o,"x",i.intersect,s)},y(t,e,i,s){const o=ks(e,t);return Cd(t,o,"y",i.intersect,s)}}};const kp=["left","top","right","bottom"];function Po(t,e){return t.filter(i=>i.pos===e)}function Sd(t,e){return t.filter(i=>kp.indexOf(i.pos)===-1&&i.box.axis===e)}function Io(t,e){return t.sort((i,s)=>{const o=e?s:i,r=e?i:s;return o.weight===r.weight?o.index-r.index:o.weight-r.weight})}function sk(t){const e=[];let i,s,o,r,n,a;for(i=0,s=(t||[]).length;i<s;++i)o=t[i],{position:r,options:{stack:n,stackWeight:a=1}}=o,e.push({index:i,box:o,pos:r,horizontal:o.isHorizontal(),weight:o.weight,stack:n&&r+n,stackWeight:a});return e}function ok(t){const e={};for(const i of t){const{stack:s,pos:o,stackWeight:r}=i;if(!s||!kp.includes(o))continue;const n=e[s]||(e[s]={count:0,placed:0,weight:0,size:0});n.count++,n.weight+=r}return e}function rk(t,e){const i=ok(t),{vBoxMaxWidth:s,hBoxMaxHeight:o}=e;let r,n,a;for(r=0,n=t.length;r<n;++r){a=t[r];const{fullSize:l}=a.box,c=i[a.stack],h=c&&a.stackWeight/c.weight;a.horizontal?(a.width=h?h*s:l&&e.availableWidth,a.height=o):(a.width=s,a.height=h?h*o:l&&e.availableHeight)}return i}function nk(t){const e=sk(t),i=Io(e.filter(c=>c.box.fullSize),!0),s=Io(Po(e,"left"),!0),o=Io(Po(e,"right")),r=Io(Po(e,"top"),!0),n=Io(Po(e,"bottom")),a=Sd(e,"x"),l=Sd(e,"y");return{fullSize:i,leftAndTop:s.concat(r),rightAndBottom:o.concat(l).concat(n).concat(a),chartArea:Po(e,"chartArea"),vertical:s.concat(o).concat(l),horizontal:r.concat(n).concat(a)}}function $d(t,e,i,s){return Math.max(t[i],e[i])+Math.max(t[s],e[s])}function Cp(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function ak(t,e,i,s){const{pos:o,box:r}=i,n=t.maxPadding;if(!vt(o)){i.size&&(t[o]-=i.size);const d=s[i.stack]||{size:0,count:1};d.size=Math.max(d.size,i.horizontal?r.height:r.width),i.size=d.size/d.count,t[o]+=i.size}r.getPadding&&Cp(n,r.getPadding());const a=Math.max(0,e.outerWidth-$d(n,t,"left","right")),l=Math.max(0,e.outerHeight-$d(n,t,"top","bottom")),c=a!==t.w,h=l!==t.h;return t.w=a,t.h=l,i.horizontal?{same:c,other:h}:{same:h,other:c}}function lk(t){const e=t.maxPadding;function i(s){const o=Math.max(e[s]-t[s],0);return t[s]+=o,o}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}function ck(t,e){const i=e.maxPadding;function s(o){const r={left:0,top:0,right:0,bottom:0};return o.forEach(n=>{r[n]=Math.max(e[n],i[n])}),r}return s(t?["left","right"]:["top","bottom"])}function Ho(t,e,i,s){const o=[];let r,n,a,l,c,h;for(r=0,n=t.length,c=0;r<n;++r){a=t[r],l=a.box,l.update(a.width||e.w,a.height||e.h,ck(a.horizontal,e));const{same:d,other:f}=ak(e,i,a,s);c|=d&&o.length,h=h||f,l.fullSize||o.push(a)}return c&&Ho(o,e,i,s)||h}function rn(t,e,i,s,o){t.top=i,t.left=e,t.right=e+s,t.bottom=i+o,t.width=s,t.height=o}function Ad(t,e,i,s){const o=i.padding;let{x:r,y:n}=e;for(const a of t){const l=a.box,c=s[a.stack]||{placed:0,weight:1},h=a.stackWeight/c.weight||1;if(a.horizontal){const d=e.w*h,f=c.size||l.height;Bn(c.start)&&(n=c.start),l.fullSize?rn(l,o.left,n,i.outerWidth-o.right-o.left,f):rn(l,e.left+c.placed,n,d,f),c.start=n,c.placed+=d,n=l.bottom}else{const d=e.h*h,f=c.size||l.width;Bn(c.start)&&(r=c.start),l.fullSize?rn(l,r,o.top,f,i.outerHeight-o.bottom-o.top):rn(l,r,e.top+c.placed,f,d),c.start=r,c.placed+=d,r=l.right}}e.x=r,e.y=n}var Ke={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(i){e.draw(i)}}]},t.boxes.push(e)},removeBox(t,e){const i=t.boxes?t.boxes.indexOf(e):-1;i!==-1&&t.boxes.splice(i,1)},configure(t,e,i){e.fullSize=i.fullSize,e.position=i.position,e.weight=i.weight},update(t,e,i,s){if(!t)return;const o=Ge(t.options.layout.padding),r=Math.max(e-o.width,0),n=Math.max(i-o.height,0),a=nk(t.boxes),l=a.vertical,c=a.horizontal;$t(t.boxes,b=>{typeof b.beforeLayout=="function"&&b.beforeLayout()});const h=l.reduce((b,v)=>v.box.options&&v.box.options.display===!1?b:b+1,0)||1,d=Object.freeze({outerWidth:e,outerHeight:i,padding:o,availableWidth:r,availableHeight:n,vBoxMaxWidth:r/2/h,hBoxMaxHeight:n/2}),f=Object.assign({},o);Cp(f,Ge(s));const p=Object.assign({maxPadding:f,w:r,h:n,x:o.left,y:o.top},o),m=rk(l.concat(c),d);Ho(a.fullSize,p,d,m),Ho(l,p,d,m),Ho(c,p,d,m)&&Ho(l,p,d,m),lk(p),Ad(a.leftAndTop,p,d,m),p.x+=p.w,p.y+=p.h,Ad(a.rightAndBottom,p,d,m),t.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},$t(a.chartArea,b=>{const v=b.box;Object.assign(v,t.chartArea),v.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}};class Sp{acquireContext(e,i){}releaseContext(e){return!1}addEventListener(e,i,s){}removeEventListener(e,i,s){}getDevicePixelRatio(){return 1}getMaximumSize(e,i,s,o){return i=Math.max(0,i||e.width),s=s||e.height,{width:i,height:Math.max(0,o?Math.floor(i/o):s)}}isAttached(e){return!0}updateConfig(e){}}class hk extends Sp{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const _n="$chartjs",dk={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Td=t=>t===null||t==="";function uk(t,e){const i=t.style,s=t.getAttribute("height"),o=t.getAttribute("width");if(t[_n]={initial:{height:s,width:o,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",Td(o)){const r=pd(t,"width");r!==void 0&&(t.width=r)}if(Td(s))if(t.style.height==="")t.height=t.width/(e||2);else{const r=pd(t,"height");r!==void 0&&(t.height=r)}return t}const $p=xw?{passive:!0}:!1;function fk(t,e,i){t&&t.addEventListener(e,i,$p)}function pk(t,e,i){t&&t.canvas&&t.canvas.removeEventListener(e,i,$p)}function gk(t,e){const i=dk[t.type]||t.type,{x:s,y:o}=ks(t,e);return{type:i,chart:e,native:t,x:s!==void 0?s:null,y:o!==void 0?o:null}}function Un(t,e){for(const i of t)if(i===e||i.contains(e))return!0}function mk(t,e,i){const s=t.canvas,o=new MutationObserver(r=>{let n=!1;for(const a of r)n=n||Un(a.addedNodes,s),n=n&&!Un(a.removedNodes,s);n&&i()});return o.observe(document,{childList:!0,subtree:!0}),o}function bk(t,e,i){const s=t.canvas,o=new MutationObserver(r=>{let n=!1;for(const a of r)n=n||Un(a.removedNodes,s),n=n&&!Un(a.addedNodes,s);n&&i()});return o.observe(document,{childList:!0,subtree:!0}),o}const xr=new Map;let Ed=0;function Ap(){const t=window.devicePixelRatio;t!==Ed&&(Ed=t,xr.forEach((e,i)=>{i.currentDevicePixelRatio!==t&&e()}))}function vk(t,e){xr.size||window.addEventListener("resize",Ap),xr.set(t,e)}function yk(t){xr.delete(t),xr.size||window.removeEventListener("resize",Ap)}function _k(t,e,i){const s=t.canvas,o=s&&zc(s);if(!o)return;const r=np((a,l)=>{const c=o.clientWidth;i(a,l),c<o.clientWidth&&i()},window),n=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,h=l.contentRect.height;c===0&&h===0||r(c,h)});return n.observe(o),vk(t,r),n}function Ua(t,e,i){i&&i.disconnect(),e==="resize"&&yk(t)}function xk(t,e,i){const s=t.canvas,o=np(r=>{t.ctx!==null&&i(gk(r,t))},t);return fk(s,e,o),o}class wk extends Sp{acquireContext(e,i){const s=e&&e.getContext&&e.getContext("2d");return s&&s.canvas===e?(uk(e,i),s):null}releaseContext(e){const i=e.canvas;if(!i[_n])return!1;const s=i[_n].initial;["height","width"].forEach(r=>{const n=s[r];Mt(n)?i.removeAttribute(r):i.setAttribute(r,n)});const o=s.style||{};return Object.keys(o).forEach(r=>{i.style[r]=o[r]}),i.width=i.width,delete i[_n],!0}addEventListener(e,i,s){this.removeEventListener(e,i);const o=e.$proxies||(e.$proxies={}),n={attach:mk,detach:bk,resize:_k}[i]||xk;o[i]=n(e,i,s)}removeEventListener(e,i){const s=e.$proxies||(e.$proxies={}),o=s[i];if(!o)return;({attach:Ua,detach:Ua,resize:Ua}[i]||pk)(e,i,o),s[i]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,i,s,o){return _w(e,i,s,o)}isAttached(e){const i=e&&zc(e);return!!(i&&i.isConnected)}}function kk(t){return!Ec()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?hk:wk}let fs=class{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(e){const{x:i,y:s}=this.getProps(["x","y"],e);return{x:i,y:s}}hasValue(){return vr(this.x)&&vr(this.y)}getProps(e,i){const s=this.$animations;if(!i||!s)return this;const o={};return e.forEach(r=>{o[r]=s[r]&&s[r].active()?s[r]._to:this[r]}),o}};function Ck(t,e){const i=t.options.ticks,s=Sk(t),o=Math.min(i.maxTicksLimit||s,s),r=i.major.enabled?Ak(e):[],n=r.length,a=r[0],l=r[n-1],c=[];if(n>o)return Tk(e,c,r,n/o),c;const h=$k(r,e,o);if(n>0){let d,f;const p=n>1?Math.round((l-a)/(n-1)):null;for(nn(e,c,h,Mt(p)?0:a-p,a),d=0,f=n-1;d<f;d++)nn(e,c,h,r[d],r[d+1]);return nn(e,c,h,l,Mt(p)?e.length:l+p),c}return nn(e,c,h),c}function Sk(t){const e=t.options.offset,i=t._tickSize(),s=t._length/i+(e?0:1),o=t._maxLength/i;return Math.floor(Math.min(s,o))}function $k(t,e,i){const s=Ek(t),o=e.length/i;if(!s)return Math.max(o,1);const r=bx(s);for(let n=0,a=r.length-1;n<a;n++){const l=r[n];if(l>o)return l}return Math.max(o,1)}function Ak(t){const e=[];let i,s;for(i=0,s=t.length;i<s;i++)t[i].major&&e.push(i);return e}function Tk(t,e,i,s){let o=0,r=i[0],n;for(s=Math.ceil(s),n=0;n<t.length;n++)n===r&&(e.push(t[n]),o++,r=i[o*s])}function nn(t,e,i,s,o){const r=mt(s,0),n=Math.min(mt(o,t.length),t.length);let a=0,l,c,h;for(i=Math.ceil(i),o&&(l=o-s,i=l/Math.floor(l/i)),h=r;h<0;)a++,h=Math.round(r+a*i);for(c=Math.max(r,0);c<n;c++)c===h&&(e.push(t[c]),a++,h=Math.round(r+a*i))}function Ek(t){const e=t.length;let i,s;if(e<2)return!1;for(s=t[0],i=1;i<e;++i)if(t[i]-t[i-1]!==s)return!1;return s}const zk=t=>t==="left"?"right":t==="right"?"left":t,zd=(t,e,i)=>e==="top"||e==="left"?t[e]+i:t[e]-i,Md=(t,e)=>Math.min(e||t,t);function Dd(t,e){const i=[],s=t.length/e,o=t.length;let r=0;for(;r<o;r+=s)i.push(t[Math.floor(r)]);return i}function Mk(t,e,i){const s=t.ticks.length,o=Math.min(e,s-1),r=t._startPixel,n=t._endPixel,a=1e-6;let l=t.getPixelForTick(o),c;if(!(i&&(s===1?c=Math.max(l-r,n-l):e===0?c=(t.getPixelForTick(1)-l)/2:c=(l-t.getPixelForTick(o-1))/2,l+=o<e?c:-c,l<r-a||l>n+a)))return l}function Dk(t,e){$t(t,i=>{const s=i.gc,o=s.length/2;let r;if(o>e){for(r=0;r<o;++r)delete i.data[s[r]];s.splice(0,o)}})}function Ro(t){return t.drawTicks?t.tickLength:0}function Od(t,e){if(!t.display)return 0;const i=de(t.font,e),s=Ge(t.padding);return(Jt(t.text)?t.text.length:1)*i.lineHeight+s.height}function Ok(t,e){return Us(t,{scale:e,type:"scale"})}function Pk(t,e,i){return Us(t,{tick:i,index:e,type:"tick"})}function Ik(t,e,i){let s=wc(t);return(i&&e!=="right"||!i&&e==="right")&&(s=zk(s)),s}function Rk(t,e,i,s){const{top:o,left:r,bottom:n,right:a,chart:l}=t,{chartArea:c,scales:h}=l;let d=0,f,p,m;const b=n-o,v=a-r;if(t.isHorizontal()){if(p=ce(s,r,a),vt(i)){const w=Object.keys(i)[0],x=i[w];m=h[w].getPixelForValue(x)+b-e}else i==="center"?m=(c.bottom+c.top)/2+b-e:m=zd(t,i,e);f=a-r}else{if(vt(i)){const w=Object.keys(i)[0],x=i[w];p=h[w].getPixelForValue(x)-v+e}else i==="center"?p=(c.left+c.right)/2-v+e:p=zd(t,i,e);m=ce(s,n,o),d=i==="left"?-Qe:Qe}return{titleX:p,titleY:m,maxWidth:f,rotation:d}}class xo extends fs{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,i){return e}getUserBounds(){let{_userMin:e,_userMax:i,_suggestedMin:s,_suggestedMax:o}=this;return e=pi(e,Number.POSITIVE_INFINITY),i=pi(i,Number.NEGATIVE_INFINITY),s=pi(s,Number.POSITIVE_INFINITY),o=pi(o,Number.NEGATIVE_INFINITY),{min:pi(e,s),max:pi(i,o),minDefined:Xe(e),maxDefined:Xe(i)}}getMinMax(e){let{min:i,max:s,minDefined:o,maxDefined:r}=this.getUserBounds(),n;if(o&&r)return{min:i,max:s};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)n=a[l].controller.getMinMax(this,e),o||(i=Math.min(i,n.min)),r||(s=Math.max(s,n.max));return i=r&&i>s?s:i,s=o&&i>s?i:s,{min:pi(i,pi(s,i)),max:pi(s,pi(i,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Dt(this.options.beforeUpdate,[this])}update(e,i,s){const{beginAtZero:o,grace:r,ticks:n}=this.options,a=n.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=i,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Zx(this,r,o),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?Dd(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),n.display&&(n.autoSkip||n.source==="auto")&&(this.ticks=Ck(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,i,s;this.isHorizontal()?(i=this.left,s=this.right):(i=this.top,s=this.bottom,e=!e),this._startPixel=i,this._endPixel=s,this._reversePixels=e,this._length=s-i,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Dt(this.options.afterUpdate,[this])}beforeSetDimensions(){Dt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Dt(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),Dt(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Dt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const i=this.options.ticks;let s,o,r;for(s=0,o=e.length;s<o;s++)r=e[s],r.label=Dt(i.callback,[r.value,s,e],this)}afterTickToLabelConversion(){Dt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Dt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,i=e.ticks,s=Md(this.ticks.length,e.ticks.maxTicksLimit),o=i.minRotation||0,r=i.maxRotation;let n=o,a,l,c;if(!this._isVisible()||!i.display||o>=r||s<=1||!this.isHorizontal()){this.labelRotation=o;return}const h=this._getLabelSizes(),d=h.widest.width,f=h.highest.height,p=Le(this.chart.width-d,0,this.maxWidth);a=e.offset?this.maxWidth/s:p/(s-1),d+6>a&&(a=p/(s-(e.offset?.5:1)),l=this.maxHeight-Ro(e.grid)-i.padding-Od(e.title,this.chart.options.font),c=Math.sqrt(d*d+f*f),n=xx(Math.min(Math.asin(Le((h.highest.height+6)/a,-1,1)),Math.asin(Le(l/c,-1,1))-Math.asin(Le(f/c,-1,1)))),n=Math.max(o,Math.min(r,n))),this.labelRotation=n}afterCalculateLabelRotation(){Dt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Dt(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:i,options:{ticks:s,title:o,grid:r}}=this,n=this._isVisible(),a=this.isHorizontal();if(n){const l=Od(o,i.options.font);if(a?(e.width=this.maxWidth,e.height=Ro(r)+l):(e.height=this.maxHeight,e.width=Ro(r)+l),s.display&&this.ticks.length){const{first:c,last:h,widest:d,highest:f}=this._getLabelSizes(),p=s.padding*2,m=Es(this.labelRotation),b=Math.cos(m),v=Math.sin(m);if(a){const w=s.mirror?0:v*d.width+b*f.height;e.height=Math.min(this.maxHeight,e.height+w+p)}else{const w=s.mirror?0:b*d.width+v*f.height;e.width=Math.min(this.maxWidth,e.width+w+p)}this._calculatePadding(c,h,v,b)}}this._handleMargins(),a?(this.width=this._length=i.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=i.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,i,s,o){const{ticks:{align:r,padding:n},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,p=0;l?c?(f=o*e.width,p=s*i.height):(f=s*e.height,p=o*i.width):r==="start"?p=i.width:r==="end"?f=e.width:r!=="inner"&&(f=e.width/2,p=i.width/2),this.paddingLeft=Math.max((f-h+n)*this.width/(this.width-h),0),this.paddingRight=Math.max((p-d+n)*this.width/(this.width-d),0)}else{let h=i.height/2,d=e.height/2;r==="start"?(h=0,d=e.height):r==="end"&&(h=i.height,d=0),this.paddingTop=h+n,this.paddingBottom=d+n}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Dt(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:i}=this.options;return i==="top"||i==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let i,s;for(i=0,s=e.length;i<s;i++)Mt(e[i].label)&&(e.splice(i,1),s--,i--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const i=this.options.ticks.sampleSize;let s=this.ticks;i<s.length&&(s=Dd(s,i)),this._labelSizes=e=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,i,s){const{ctx:o,_longestTextCache:r}=this,n=[],a=[],l=Math.floor(i/Md(i,s));let c=0,h=0,d,f,p,m,b,v,w,x,S,y,k;for(d=0;d<i;d+=l){if(m=e[d].label,b=this._resolveTickFontOptions(d),o.font=v=b.string,w=r[v]=r[v]||{data:{},gc:[]},x=b.lineHeight,S=y=0,!Mt(m)&&!Jt(m))S=cd(o,w.data,w.gc,S,m),y=x;else if(Jt(m))for(f=0,p=m.length;f<p;++f)k=m[f],!Mt(k)&&!Jt(k)&&(S=cd(o,w.data,w.gc,S,k),y+=x);n.push(S),a.push(y),c=Math.max(S,c),h=Math.max(y,h)}Dk(r,i);const $=n.indexOf(c),T=a.indexOf(h),z=O=>({width:n[O]||0,height:a[O]||0});return{first:z(0),last:z(i-1),widest:z($),highest:z(T),widths:n,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,i){return NaN}getValueForPixel(e){}getPixelForTick(e){const i=this.ticks;return e<0||e>i.length-1?null:this.getPixelForValue(i[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const i=this._startPixel+e*this._length;return Cx(this._alignToPixels?ys(this.chart,i,0):i)}getDecimalForPixel(e){const i=(e-this._startPixel)/this._length;return this._reversePixels?1-i:i}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:i}=this;return e<0&&i<0?i:e>0&&i>0?e:0}getContext(e){const i=this.ticks||[];if(e>=0&&e<i.length){const s=i[e];return s.$context||(s.$context=Pk(this.getContext(),e,s))}return this.$context||(this.$context=Ok(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,i=Es(this.labelRotation),s=Math.abs(Math.cos(i)),o=Math.abs(Math.sin(i)),r=this._getLabelSizes(),n=e.autoSkipPadding||0,a=r?r.widest.width+n:0,l=r?r.highest.height+n:0;return this.isHorizontal()?l*s>a*o?a/s:l/o:l*o<a*s?l/s:a/o}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const i=this.axis,s=this.chart,o=this.options,{grid:r,position:n,border:a}=o,l=r.offset,c=this.isHorizontal(),d=this.ticks.length+(l?1:0),f=Ro(r),p=[],m=a.setContext(this.getContext()),b=m.display?m.width:0,v=b/2,w=function(rt){return ys(s,rt,b)};let x,S,y,k,$,T,z,O,M,q,j,ot;if(n==="top")x=w(this.bottom),T=this.bottom-f,O=x-v,q=w(e.top)+v,ot=e.bottom;else if(n==="bottom")x=w(this.top),q=e.top,ot=w(e.bottom)-v,T=x+v,O=this.top+f;else if(n==="left")x=w(this.right),$=this.right-f,z=x-v,M=w(e.left)+v,j=e.right;else if(n==="right")x=w(this.left),M=e.left,j=w(e.right)-v,$=x+v,z=this.left+f;else if(i==="x"){if(n==="center")x=w((e.top+e.bottom)/2+.5);else if(vt(n)){const rt=Object.keys(n)[0],it=n[rt];x=w(this.chart.scales[rt].getPixelForValue(it))}q=e.top,ot=e.bottom,T=x+v,O=T+f}else if(i==="y"){if(n==="center")x=w((e.left+e.right)/2);else if(vt(n)){const rt=Object.keys(n)[0],it=n[rt];x=w(this.chart.scales[rt].getPixelForValue(it))}$=x-v,z=$-f,M=e.left,j=e.right}const J=mt(o.ticks.maxTicksLimit,d),dt=Math.max(1,Math.ceil(d/J));for(S=0;S<d;S+=dt){const rt=this.getContext(S),it=r.setContext(rt),nt=a.setContext(rt),Rt=it.lineWidth,ge=it.color,we=nt.dash||[],F=nt.dashOffset,W=it.tickWidth,lt=it.tickColor,Gt=it.tickBorderDash||[],jt=it.tickBorderDashOffset;y=Mk(this,S,l),y!==void 0&&(k=ys(s,y,Rt),c?$=z=M=j=k:T=O=q=ot=k,p.push({tx1:$,ty1:T,tx2:z,ty2:O,x1:M,y1:q,x2:j,y2:ot,width:Rt,color:ge,borderDash:we,borderDashOffset:F,tickWidth:W,tickColor:lt,tickBorderDash:Gt,tickBorderDashOffset:jt}))}return this._ticksLength=d,this._borderValue=x,p}_computeLabelItems(e){const i=this.axis,s=this.options,{position:o,ticks:r}=s,n=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:h,mirror:d}=r,f=Ro(s.grid),p=f+h,m=d?-h:p,b=-Es(this.labelRotation),v=[];let w,x,S,y,k,$,T,z,O,M,q,j,ot="middle";if(o==="top")$=this.bottom-m,T=this._getXAxisLabelAlignment();else if(o==="bottom")$=this.top+m,T=this._getXAxisLabelAlignment();else if(o==="left"){const dt=this._getYAxisLabelAlignment(f);T=dt.textAlign,k=dt.x}else if(o==="right"){const dt=this._getYAxisLabelAlignment(f);T=dt.textAlign,k=dt.x}else if(i==="x"){if(o==="center")$=(e.top+e.bottom)/2+p;else if(vt(o)){const dt=Object.keys(o)[0],rt=o[dt];$=this.chart.scales[dt].getPixelForValue(rt)+p}T=this._getXAxisLabelAlignment()}else if(i==="y"){if(o==="center")k=(e.left+e.right)/2-p;else if(vt(o)){const dt=Object.keys(o)[0],rt=o[dt];k=this.chart.scales[dt].getPixelForValue(rt)}T=this._getYAxisLabelAlignment(f).textAlign}i==="y"&&(l==="start"?ot="top":l==="end"&&(ot="bottom"));const J=this._getLabelSizes();for(w=0,x=a.length;w<x;++w){S=a[w],y=S.label;const dt=r.setContext(this.getContext(w));z=this.getPixelForTick(w)+r.labelOffset,O=this._resolveTickFontOptions(w),M=O.lineHeight,q=Jt(y)?y.length:1;const rt=q/2,it=dt.color,nt=dt.textStrokeColor,Rt=dt.textStrokeWidth;let ge=T;n?(k=z,T==="inner"&&(w===x-1?ge=this.options.reverse?"left":"right":w===0?ge=this.options.reverse?"right":"left":ge="center"),o==="top"?c==="near"||b!==0?j=-q*M+M/2:c==="center"?j=-J.highest.height/2-rt*M+M:j=-J.highest.height+M/2:c==="near"||b!==0?j=M/2:c==="center"?j=J.highest.height/2-rt*M:j=J.highest.height-q*M,d&&(j*=-1),b!==0&&!dt.showLabelBackdrop&&(k+=M/2*Math.sin(b))):($=z,j=(1-q)*M/2);let we;if(dt.showLabelBackdrop){const F=Ge(dt.backdropPadding),W=J.heights[w],lt=J.widths[w];let Gt=j-F.top,jt=0-F.left;switch(ot){case"middle":Gt-=W/2;break;case"bottom":Gt-=W;break}switch(T){case"center":jt-=lt/2;break;case"right":jt-=lt;break;case"inner":w===x-1?jt-=lt:w>0&&(jt-=lt/2);break}we={left:jt,top:Gt,width:lt+F.width,height:W+F.height,color:dt.backdropColor}}v.push({label:y,font:O,textOffset:j,options:{rotation:b,color:it,strokeColor:nt,strokeWidth:Rt,textAlign:ge,textBaseline:ot,translation:[k,$],backdrop:we}})}return v}_getXAxisLabelAlignment(){const{position:e,ticks:i}=this.options;if(-Es(this.labelRotation))return e==="top"?"left":"right";let o="center";return i.align==="start"?o="left":i.align==="end"?o="right":i.align==="inner"&&(o="inner"),o}_getYAxisLabelAlignment(e){const{position:i,ticks:{crossAlign:s,mirror:o,padding:r}}=this.options,n=this._getLabelSizes(),a=e+r,l=n.widest.width;let c,h;return i==="left"?o?(h=this.right+r,s==="near"?c="left":s==="center"?(c="center",h+=l/2):(c="right",h+=l)):(h=this.right-a,s==="near"?c="right":s==="center"?(c="center",h-=l/2):(c="left",h=this.left)):i==="right"?o?(h=this.left+r,s==="near"?c="right":s==="center"?(c="center",h-=l/2):(c="left",h-=l)):(h=this.left+a,s==="near"?c="left":s==="center"?(c="center",h+=l/2):(c="right",h=this.right)):c="right",{textAlign:c,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,i=this.options.position;if(i==="left"||i==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(i==="top"||i==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:i},left:s,top:o,width:r,height:n}=this;i&&(e.save(),e.fillStyle=i,e.fillRect(s,o,r,n),e.restore())}getLineWidthForValue(e){const i=this.options.grid;if(!this._isVisible()||!i.display)return 0;const o=this.ticks.findIndex(r=>r.value===e);return o>=0?i.setContext(this.getContext(o)).lineWidth:0}drawGrid(e){const i=this.options.grid,s=this.ctx,o=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let r,n;const a=(l,c,h)=>{!h.width||!h.color||(s.save(),s.lineWidth=h.width,s.strokeStyle=h.color,s.setLineDash(h.borderDash||[]),s.lineDashOffset=h.borderDashOffset,s.beginPath(),s.moveTo(l.x,l.y),s.lineTo(c.x,c.y),s.stroke(),s.restore())};if(i.display)for(r=0,n=o.length;r<n;++r){const l=o[r];i.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),i.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:i,options:{border:s,grid:o}}=this,r=s.setContext(this.getContext()),n=s.display?r.width:0;if(!n)return;const a=o.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,h,d,f;this.isHorizontal()?(c=ys(e,this.left,n)-n/2,h=ys(e,this.right,a)+a/2,d=f=l):(d=ys(e,this.top,n)-n/2,f=ys(e,this.bottom,a)+a/2,c=h=l),i.save(),i.lineWidth=r.width,i.strokeStyle=r.color,i.beginPath(),i.moveTo(c,d),i.lineTo(h,f),i.stroke(),i.restore()}drawLabels(e){if(!this.options.ticks.display)return;const s=this.ctx,o=this._computeLabelArea();o&&Cc(s,o);const r=this.getLabelItems(e);for(const n of r){const a=n.options,l=n.font,c=n.label,h=n.textOffset;_r(s,c,0,h,l,a)}o&&Sc(s)}drawTitle(){const{ctx:e,options:{position:i,title:s,reverse:o}}=this;if(!s.display)return;const r=de(s.font),n=Ge(s.padding),a=s.align;let l=r.lineHeight/2;i==="bottom"||i==="center"||vt(i)?(l+=n.bottom,Jt(s.text)&&(l+=r.lineHeight*(s.text.length-1))):l+=n.top;const{titleX:c,titleY:h,maxWidth:d,rotation:f}=Rk(this,l,i,a);_r(e,s.text,0,0,r,{color:s.color,maxWidth:d,rotation:f,textAlign:Ik(a,i,o),textBaseline:"middle",translation:[c,h]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,i=e.ticks&&e.ticks.z||0,s=mt(e.grid&&e.grid.z,-1),o=mt(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==xo.prototype.draw?[{z:i,draw:r=>{this.draw(r)}}]:[{z:s,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:o,draw:()=>{this.drawBorder()}},{z:i,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(e){const i=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",o=[];let r,n;for(r=0,n=i.length;r<n;++r){const a=i[r];a[s]===this.id&&(!e||a.type===e)&&o.push(a)}return o}_resolveTickFontOptions(e){const i=this.options.ticks.setContext(this.getContext(e));return de(i.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class an{constructor(e,i,s){this.type=e,this.scope=i,this.override=s,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const i=Object.getPrototypeOf(e);let s;Bk(i)&&(s=this.register(i));const o=this.items,r=e.id,n=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+e);return r in o||(o[r]=e,Lk(e,n,s),this.override&&Nt.override(e.id,e.overrides)),n}get(e){return this.items[e]}unregister(e){const i=this.items,s=e.id,o=this.scope;s in i&&delete i[s],o&&s in Nt[o]&&(delete Nt[o][s],this.override&&delete Ls[s])}}function Lk(t,e,i){const s=br(Object.create(null),[i?Nt.get(i):{},Nt.get(e),t.defaults]);Nt.set(e,s),t.defaultRoutes&&Fk(e,t.defaultRoutes),t.descriptors&&Nt.describe(e,t.descriptors)}function Fk(t,e){Object.keys(e).forEach(i=>{const s=i.split("."),o=s.pop(),r=[t].concat(s).join("."),n=e[i].split("."),a=n.pop(),l=n.join(".");Nt.route(r,o,l,a)})}function Bk(t){return"id"in t&&"defaults"in t}class Hk{constructor(){this.controllers=new an(wp,"datasets",!0),this.elements=new an(fs,"elements"),this.plugins=new an(Object,"plugins"),this.scales=new an(xo,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,i,s){[...i].forEach(o=>{const r=s||this._getRegistryForType(o);s||r.isForType(o)||r===this.plugins&&o.id?this._exec(e,r,o):$t(o,n=>{const a=s||this._getRegistryForType(n);this._exec(e,a,n)})})}_exec(e,i,s){const o=_c(e);Dt(s["before"+o],[],s),i[e](s),Dt(s["after"+o],[],s)}_getRegistryForType(e){for(let i=0;i<this._typedRegistries.length;i++){const s=this._typedRegistries[i];if(s.isForType(e))return s}return this.plugins}_get(e,i,s){const o=i.get(e);if(o===void 0)throw new Error('"'+e+'" is not a registered '+s+".");return o}}var bi=new Hk;class Vk{constructor(){this._init=[]}notify(e,i,s,o){i==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const r=o?this._descriptors(e).filter(o):this._descriptors(e),n=this._notify(r,e,i,s);return i==="afterDestroy"&&(this._notify(r,e,"stop"),this._notify(this._init,e,"uninstall")),n}_notify(e,i,s,o){o=o||{};for(const r of e){const n=r.plugin,a=n[s],l=[i,o,r.options];if(Dt(a,l,n)===!1&&o.cancelable)return!1}return!0}invalidate(){Mt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const i=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),i}_createDescriptors(e,i){const s=e&&e.config,o=mt(s.options&&s.options.plugins,{}),r=Nk(s);return o===!1&&!i?[]:jk(e,r,o,i)}_notifyStateChanges(e){const i=this._oldCache||[],s=this._cache,o=(r,n)=>r.filter(a=>!n.some(l=>a.plugin.id===l.plugin.id));this._notify(o(i,s),e,"stop"),this._notify(o(s,i),e,"start")}}function Nk(t){const e={},i=[],s=Object.keys(bi.plugins.items);for(let r=0;r<s.length;r++)i.push(bi.getPlugin(s[r]));const o=t.plugins||[];for(let r=0;r<o.length;r++){const n=o[r];i.indexOf(n)===-1&&(i.push(n),e[n.id]=!0)}return{plugins:i,localIds:e}}function Uk(t,e){return!e&&t===!1?null:t===!0?{}:t}function jk(t,{plugins:e,localIds:i},s,o){const r=[],n=t.getContext();for(const a of e){const l=a.id,c=Uk(s[l],o);c!==null&&r.push({plugin:a,options:Wk(t.config,{plugin:a,local:i[l]},c,n)})}return r}function Wk(t,{plugin:e,local:i},s,o){const r=t.pluginScopeKeys(e),n=t.getOptionScopes(s,r);return i&&e.defaults&&n.push(e.defaults),t.createResolver(n,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function $l(t,e){const i=Nt.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||i.indexAxis||"x"}function qk(t,e){let i=t;return t==="_index_"?i=e:t==="_value_"&&(i=e==="x"?"y":"x"),i}function Kk(t,e){return t===e?"_index_":"_value_"}function Pd(t){if(t==="x"||t==="y"||t==="r")return t}function Yk(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function Al(t,...e){if(Pd(t))return t;for(const i of e){const s=i.axis||Yk(i.position)||t.length>1&&Pd(t[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function Id(t,e,i){if(i[e+"AxisID"]===t)return{axis:e}}function Xk(t,e){if(e.data&&e.data.datasets){const i=e.data.datasets.filter(s=>s.xAxisID===t||s.yAxisID===t);if(i.length)return Id(t,"x",i[0])||Id(t,"y",i[0])}return{}}function Gk(t,e){const i=Ls[t.type]||{scales:{}},s=e.scales||{},o=$l(t.type,e),r=Object.create(null);return Object.keys(s).forEach(n=>{const a=s[n];if(!vt(a))return console.error(`Invalid scale configuration for scale: ${n}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${n}`);const l=Al(n,a,Xk(n,t),Nt.scales[a.type]),c=Kk(l,o),h=i.scales||{};r[n]=sr(Object.create(null),[{axis:l},a,h[l],h[c]])}),t.data.datasets.forEach(n=>{const a=n.type||t.type,l=n.indexAxis||$l(a,e),h=(Ls[a]||{}).scales||{};Object.keys(h).forEach(d=>{const f=qk(d,l),p=n[f+"AxisID"]||f;r[p]=r[p]||Object.create(null),sr(r[p],[{axis:f},s[p],h[d]])})}),Object.keys(r).forEach(n=>{const a=r[n];sr(a,[Nt.scales[a.type],Nt.scale])}),r}function Tp(t){const e=t.options||(t.options={});e.plugins=mt(e.plugins,{}),e.scales=Gk(t,e)}function Ep(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function Jk(t){return t=t||{},t.data=Ep(t.data),Tp(t),t}const Rd=new Map,zp=new Set;function ln(t,e){let i=Rd.get(t);return i||(i=e(),Rd.set(t,i),zp.add(i)),i}const Lo=(t,e,i)=>{const s=Fn(e,i);s!==void 0&&t.add(s)};class Zk{constructor(e){this._config=Jk(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=Ep(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),Tp(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return ln(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,i){return ln(`${e}.transition.${i}`,()=>[[`datasets.${e}.transitions.${i}`,`transitions.${i}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,i){return ln(`${e}-${i}`,()=>[[`datasets.${e}.elements.${i}`,`datasets.${e}`,`elements.${i}`,""]])}pluginScopeKeys(e){const i=e.id,s=this.type;return ln(`${s}-plugin-${i}`,()=>[[`plugins.${i}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,i){const s=this._scopeCache;let o=s.get(e);return(!o||i)&&(o=new Map,s.set(e,o)),o}getOptionScopes(e,i,s){const{options:o,type:r}=this,n=this._cachedScopes(e,s),a=n.get(i);if(a)return a;const l=new Set;i.forEach(h=>{e&&(l.add(e),h.forEach(d=>Lo(l,e,d))),h.forEach(d=>Lo(l,o,d)),h.forEach(d=>Lo(l,Ls[r]||{},d)),h.forEach(d=>Lo(l,Nt,d)),h.forEach(d=>Lo(l,Cl,d))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),zp.has(i)&&n.set(i,c),c}chartOptionScopes(){const{options:e,type:i}=this;return[e,Ls[i]||{},Nt.datasets[i]||{},{type:i},Nt,Cl]}resolveNamedOptions(e,i,s,o=[""]){const r={$shared:!0},{resolver:n,subPrefixes:a}=Ld(this._resolverCache,e,o);let l=n;if(t2(n,i)){r.$shared=!1,s=cs(s)?s():s;const c=this.createResolver(e,s,a);l=uo(n,s,c)}for(const c of i)r[c]=l[c];return r}createResolver(e,i,s=[""],o){const{resolver:r}=Ld(this._resolverCache,e,s);return vt(i)?uo(r,i,void 0,o):r}}function Ld(t,e,i){let s=t.get(e);s||(s=new Map,t.set(e,s));const o=i.join();let r=s.get(o);return r||(r={resolver:$c(e,i),subPrefixes:i.filter(a=>!a.toLowerCase().includes("hover"))},s.set(o,r)),r}const Qk=t=>vt(t)&&Object.getOwnPropertyNames(t).some(e=>cs(t[e]));function t2(t,e){const{isScriptable:i,isIndexable:s}=up(t);for(const o of e){const r=i(o),n=s(o),a=(n||r)&&t[o];if(r&&(cs(a)||Qk(a))||n&&Jt(a))return!0}return!1}var e2="4.5.0";const i2=["top","bottom","left","right","chartArea"];function Fd(t,e){return t==="top"||t==="bottom"||i2.indexOf(t)===-1&&e==="x"}function Bd(t,e){return function(i,s){return i[t]===s[t]?i[e]-s[e]:i[t]-s[t]}}function Hd(t){const e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),Dt(i&&i.onComplete,[t],e)}function s2(t){const e=t.chart,i=e.options.animation;Dt(i&&i.onProgress,[t],e)}function Mp(t){return Ec()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const xn={},Vd=t=>{const e=Mp(t);return Object.values(xn).filter(i=>i.canvas===e).pop()};function o2(t,e,i){const s=Object.keys(t);for(const o of s){const r=+o;if(r>=e){const n=t[o];delete t[o],(i>0||r>e)&&(t[r+i]=n)}}}function r2(t,e,i,s){return!i||t.type==="mouseout"?null:s?e:t}let ua=class{static defaults=Nt;static instances=xn;static overrides=Ls;static registry=bi;static version=e2;static getChart=Vd;static register(...e){bi.add(...e),Nd()}static unregister(...e){bi.remove(...e),Nd()}constructor(e,i){const s=this.config=new Zk(i),o=Mp(e),r=Vd(o);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const n=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||kk(o)),this.platform.updateConfig(s);const a=this.platform.acquireContext(o,n.aspectRatio),l=a&&a.canvas,c=l&&l.height,h=l&&l.width;if(this.id=lx(),this.ctx=a,this.canvas=l,this.width=h,this.height=c,this._options=n,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Vk,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Ex(d=>this.update(d),n.resizeDelay||0),this._dataChanges=[],xn[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Oi.listen(this,"complete",Hd),Oi.listen(this,"progress",s2),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:i},width:s,height:o,_aspectRatio:r}=this;return Mt(e)?i&&r?r:o?s/o:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return bi}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():fd(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return hd(this.canvas,this.ctx),this}stop(){return Oi.stop(this),this}resize(e,i){Oi.running(this)?this._resizeBeforeDraw={width:e,height:i}:this._resize(e,i)}_resize(e,i){const s=this.options,o=this.canvas,r=s.maintainAspectRatio&&this.aspectRatio,n=this.platform.getMaximumSize(o,e,i,r),a=s.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=n.width,this.height=n.height,this._aspectRatio=this.aspectRatio,fd(this,a,!0)&&(this.notifyPlugins("resize",{size:n}),Dt(s.onResize,[this,n],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const i=this.options.scales||{};$t(i,(s,o)=>{s.id=o})}buildOrUpdateScales(){const e=this.options,i=e.scales,s=this.scales,o=Object.keys(s).reduce((n,a)=>(n[a]=!1,n),{});let r=[];i&&(r=r.concat(Object.keys(i).map(n=>{const a=i[n],l=Al(n,a),c=l==="r",h=l==="x";return{options:a,dposition:c?"chartArea":h?"bottom":"left",dtype:c?"radialLinear":h?"category":"linear"}}))),$t(r,n=>{const a=n.options,l=a.id,c=Al(l,a),h=mt(a.type,n.dtype);(a.position===void 0||Fd(a.position,c)!==Fd(n.dposition))&&(a.position=n.dposition),o[l]=!0;let d=null;if(l in s&&s[l].type===h)d=s[l];else{const f=bi.getScale(h);d=new f({id:l,type:h,ctx:this.ctx,chart:this}),s[d.id]=d}d.init(a,e)}),$t(o,(n,a)=>{n||delete s[a]}),$t(s,n=>{Ke.configure(this,n,n.options),Ke.addBox(this,n)})}_updateMetasets(){const e=this._metasets,i=this.data.datasets.length,s=e.length;if(e.sort((o,r)=>o.index-r.index),s>i){for(let o=i;o<s;++o)this._destroyDatasetMeta(o);e.splice(i,s-i)}this._sortedMetasets=e.slice(0).sort(Bd("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:i}}=this;e.length>i.length&&delete this._stacks,e.forEach((s,o)=>{i.filter(r=>r===s._dataset).length===0&&this._destroyDatasetMeta(o)})}buildOrUpdateControllers(){const e=[],i=this.data.datasets;let s,o;for(this._removeUnreferencedMetasets(),s=0,o=i.length;s<o;s++){const r=i[s];let n=this.getDatasetMeta(s);const a=r.type||this.config.type;if(n.type&&n.type!==a&&(this._destroyDatasetMeta(s),n=this.getDatasetMeta(s)),n.type=a,n.indexAxis=r.indexAxis||$l(a,this.options),n.order=r.order||0,n.index=s,n.label=""+r.label,n.visible=this.isDatasetVisible(s),n.controller)n.controller.updateIndex(s),n.controller.linkScales();else{const l=bi.getController(a),{datasetElementType:c,dataElementType:h}=Nt.datasets[a];Object.assign(l,{dataElementType:bi.getElement(h),datasetElementType:c&&bi.getElement(c)}),n.controller=new l(this,s),e.push(n.controller)}}return this._updateMetasets(),e}_resetElements(){$t(this.data.datasets,(e,i)=>{this.getDatasetMeta(i).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const i=this.config;i.update();const s=this._options=i.createResolver(i.chartOptionScopes(),this.getContext()),o=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let n=0;for(let c=0,h=this.data.datasets.length;c<h;c++){const{controller:d}=this.getDatasetMeta(c),f=!o&&r.indexOf(d)===-1;d.buildOrUpdateElements(f),n=Math.max(+d.getMaxOverflow(),n)}n=this._minPadding=s.layout.autoPadding?n:0,this._updateLayout(n),o||$t(r,c=>{c.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(Bd("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){$t(this.scales,e=>{Ke.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,i=new Set(Object.keys(this._listeners)),s=new Set(e.events);(!td(i,s)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,i=this._getUniformDataChanges()||[];for(const{method:s,start:o,count:r}of i){const n=s==="_removeElements"?-r:r;o2(e,o,n)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const i=this.data.datasets.length,s=r=>new Set(e.filter(n=>n[0]===r).map((n,a)=>a+","+n.splice(1).join(","))),o=s(0);for(let r=1;r<i;r++)if(!td(o,s(r)))return;return Array.from(o).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Ke.update(this,this.width,this.height,e);const i=this.chartArea,s=i.width<=0||i.height<=0;this._layers=[],$t(this.boxes,o=>{s&&o.position==="chartArea"||(o.configure&&o.configure(),this._layers.push(...o._layers()))},this),this._layers.forEach((o,r)=>{o._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let i=0,s=this.data.datasets.length;i<s;++i)this.getDatasetMeta(i).controller.configure();for(let i=0,s=this.data.datasets.length;i<s;++i)this._updateDataset(i,cs(e)?e({datasetIndex:i}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,i){const s=this.getDatasetMeta(e),o={meta:s,index:e,mode:i,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",o)!==!1&&(s.controller._update(i),o.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",o))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Oi.has(this)?this.attached&&!Oi.running(this)&&Oi.start(this):(this.draw(),Hd({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:s,height:o}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,o)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const i=this._layers;for(e=0;e<i.length&&i[e].z<=0;++e)i[e].draw(this.chartArea);for(this._drawDatasets();e<i.length;++e)i[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const i=this._sortedMetasets,s=[];let o,r;for(o=0,r=i.length;o<r;++o){const n=i[o];(!e||n.visible)&&s.push(n)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let i=e.length-1;i>=0;--i)this._drawDataset(e[i]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const i=this.ctx,s={meta:e,index:e.index,cancelable:!0},o=Iw(this,e);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(o&&Cc(i,o),e.controller.draw(),o&&Sc(i),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(e){return yr(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,i,s,o){const r=ik.modes[i];return typeof r=="function"?r(this,e,s,o):[]}getDatasetMeta(e){const i=this.data.datasets[e],s=this._metasets;let o=s.filter(r=>r&&r._dataset===i).pop();return o||(o={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:i&&i.order||0,index:e,_dataset:i,_parsed:[],_sorted:!1},s.push(o)),o}getContext(){return this.$context||(this.$context=Us(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const i=this.data.datasets[e];if(!i)return!1;const s=this.getDatasetMeta(e);return typeof s.hidden=="boolean"?!s.hidden:!i.hidden}setDatasetVisibility(e,i){const s=this.getDatasetMeta(e);s.hidden=!i}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,i,s){const o=s?"show":"hide",r=this.getDatasetMeta(e),n=r.controller._resolveAnimations(void 0,o);Bn(i)?(r.data[i].hidden=!s,this.update()):(this.setDatasetVisibility(e,s),n.update(r,{visible:s}),this.update(a=>a.datasetIndex===e?o:void 0))}hide(e,i){this._updateVisibility(e,i,!1)}show(e,i){this._updateVisibility(e,i,!0)}_destroyDatasetMeta(e){const i=this._metasets[e];i&&i.controller&&i.controller._destroy(),delete this._metasets[e]}_stop(){let e,i;for(this.stop(),Oi.remove(this),e=0,i=this.data.datasets.length;e<i;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:i}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),hd(e,i),this.platform.releaseContext(i),this.canvas=null,this.ctx=null),delete xn[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,i=this.platform,s=(r,n)=>{i.addEventListener(this,r,n),e[r]=n},o=(r,n,a)=>{r.offsetX=n,r.offsetY=a,this._eventHandler(r)};$t(this.options.events,r=>s(r,o))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,i=this.platform,s=(l,c)=>{i.addEventListener(this,l,c),e[l]=c},o=(l,c)=>{e[l]&&(i.removeEventListener(this,l,c),delete e[l])},r=(l,c)=>{this.canvas&&this.resize(l,c)};let n;const a=()=>{o("attach",a),this.attached=!0,this.resize(),s("resize",r),s("detach",n)};n=()=>{this.attached=!1,o("resize",r),this._stop(),this._resize(0,0),s("attach",a)},i.isAttached(this.canvas)?a():n()}unbindEvents(){$t(this._listeners,(e,i)=>{this.platform.removeEventListener(this,i,e)}),this._listeners={},$t(this._responsiveListeners,(e,i)=>{this.platform.removeEventListener(this,i,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,i,s){const o=s?"set":"remove";let r,n,a,l;for(i==="dataset"&&(r=this.getDatasetMeta(e[0].datasetIndex),r.controller["_"+o+"DatasetHoverStyle"]()),a=0,l=e.length;a<l;++a){n=e[a];const c=n&&this.getDatasetMeta(n.datasetIndex).controller;c&&c[o+"HoverStyle"](n.element,n.datasetIndex,n.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const i=this._active||[],s=e.map(({datasetIndex:r,index:n})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[n],index:n}});!Rn(s,i)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,i))}notifyPlugins(e,i,s){return this._plugins.notify(this,e,i,s)}isPluginEnabled(e){return this._plugins._cache.filter(i=>i.plugin.id===e).length===1}_updateHoverStyles(e,i,s){const o=this.options.hover,r=(l,c)=>l.filter(h=>!c.some(d=>h.datasetIndex===d.datasetIndex&&h.index===d.index)),n=r(i,e),a=s?e:r(e,i);n.length&&this.updateHoverStyle(n,o.mode,!1),a.length&&o.mode&&this.updateHoverStyle(a,o.mode,!0)}_eventHandler(e,i){const s={event:e,replay:i,cancelable:!0,inChartArea:this.isPointInArea(e)},o=n=>(n.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",s,o)===!1)return;const r=this._handleEvent(e,i,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,o),(r||s.changed)&&this.render(),this}_handleEvent(e,i,s){const{_active:o=[],options:r}=this,n=i,a=this._getActiveElements(e,o,s,n),l=px(e),c=r2(e,this._lastEvent,s,l);s&&(this._lastEvent=null,Dt(r.onHover,[e,a,this],this),l&&Dt(r.onClick,[e,a,this],this));const h=!Rn(a,o);return(h||i)&&(this._active=a,this._updateHoverStyles(a,o,i)),this._lastEvent=c,h}_getActiveElements(e,i,s,o){if(e.type==="mouseout")return[];if(!s)return i;const r=this.options.hover;return this.getElementsAtEventForMode(e,r.mode,r,o)}};function Nd(){return $t(ua.instances,t=>t._plugins.invalidate())}function Dp(t,e,i=e){t.lineCap=mt(i.borderCapStyle,e.borderCapStyle),t.setLineDash(mt(i.borderDash,e.borderDash)),t.lineDashOffset=mt(i.borderDashOffset,e.borderDashOffset),t.lineJoin=mt(i.borderJoinStyle,e.borderJoinStyle),t.lineWidth=mt(i.borderWidth,e.borderWidth),t.strokeStyle=mt(i.borderColor,e.borderColor)}function n2(t,e,i){t.lineTo(i.x,i.y)}function a2(t){return t.stepped?Ux:t.tension||t.cubicInterpolationMode==="monotone"?jx:n2}function Op(t,e,i={}){const s=t.length,{start:o=0,end:r=s-1}=i,{start:n,end:a}=e,l=Math.max(o,n),c=Math.min(r,a),h=o<n&&r<n||o>a&&r>a;return{count:s,start:l,loop:e.loop,ilen:c<l&&!h?s+c-l:c-l}}function l2(t,e,i,s){const{points:o,options:r}=e,{count:n,start:a,loop:l,ilen:c}=Op(o,i,s),h=a2(r);let{move:d=!0,reverse:f}=s||{},p,m,b;for(p=0;p<=c;++p)m=o[(a+(f?c-p:p))%n],!m.skip&&(d?(t.moveTo(m.x,m.y),d=!1):h(t,b,m,f,r.stepped),b=m);return l&&(m=o[(a+(f?c:0))%n],h(t,b,m,f,r.stepped)),!!l}function c2(t,e,i,s){const o=e.points,{count:r,start:n,ilen:a}=Op(o,i,s),{move:l=!0,reverse:c}=s||{};let h=0,d=0,f,p,m,b,v,w;const x=y=>(n+(c?a-y:y))%r,S=()=>{b!==v&&(t.lineTo(h,v),t.lineTo(h,b),t.lineTo(h,w))};for(l&&(p=o[x(0)],t.moveTo(p.x,p.y)),f=0;f<=a;++f){if(p=o[x(f)],p.skip)continue;const y=p.x,k=p.y,$=y|0;$===m?(k<b?b=k:k>v&&(v=k),h=(d*h+y)/++d):(S(),t.lineTo(y,k),m=$,d=0,b=v=k),w=k}S()}function Tl(t){const e=t.options,i=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!i?c2:l2}function h2(t){return t.stepped?ww:t.tension||t.cubicInterpolationMode==="monotone"?kw:Cs}function d2(t,e,i,s){let o=e._path;o||(o=e._path=new Path2D,e.path(o,i,s)&&o.closePath()),Dp(t,e.options),t.stroke(o)}function u2(t,e,i,s){const{segments:o,options:r}=e,n=Tl(e);for(const a of o)Dp(t,r,a.style),t.beginPath(),n(t,e,a,{start:i,end:i+s-1})&&t.closePath(),t.stroke()}const f2=typeof Path2D=="function";function p2(t,e,i,s){f2&&!e.options.segment?d2(t,e,i,s):u2(t,e,i,s)}class g2 extends fs{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"};constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,i){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const o=s.spanGaps?this._loop:this._fullLoop;pw(this._points,s,e,o,i),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Mw(this,this.options.segment))}first(){const e=this.segments,i=this.points;return e.length&&i[e[0].start]}last(){const e=this.segments,i=this.points,s=e.length;return s&&i[e[s-1].end]}interpolate(e,i){const s=this.options,o=e[i],r=this.points,n=Tw(this,{property:i,start:o,end:o});if(!n.length)return;const a=[],l=h2(s);let c,h;for(c=0,h=n.length;c<h;++c){const{start:d,end:f}=n[c],p=r[d],m=r[f];if(p===m){a.push(p);continue}const b=Math.abs((o-p[i])/(m[i]-p[i])),v=l(p,m,b,s.stepped);v[i]=e[i],a.push(v)}return a.length===1?a[0]:a}pathSegment(e,i,s){return Tl(this)(e,this,i,s)}path(e,i,s){const o=this.segments,r=Tl(this);let n=this._loop;i=i||0,s=s||this.points.length-i;for(const a of o)n&=r(e,this,a,{start:i,end:i+s-1});return!!n}draw(e,i,s,o){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(e.save(),p2(e,this,s,o),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function Ud(t,e,i,s){const o=t.options,{[i]:r}=t.getProps([i],s);return Math.abs(e-r)<o.radius+o.hitRadius}class m2 extends fs{static id="point";parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(e){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,s){const o=this.options,{x:r,y:n}=this.getProps(["x","y"],s);return Math.pow(e-r,2)+Math.pow(i-n,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(e,i){return Ud(this,e,"x",i)}inYRange(e,i){return Ud(this,e,"y",i)}getCenterPoint(e){const{x:i,y:s}=this.getProps(["x","y"],e);return{x:i,y:s}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);const s=i&&e.borderWidth||0;return(i+s)*2}draw(e,i){const s=this.options;this.skip||s.radius<.1||!yr(this,i,this.size(s)/2)||(e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.fillStyle=s.backgroundColor,Sl(e,s,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}function Pp(t,e){const{x:i,y:s,base:o,width:r,height:n}=t.getProps(["x","y","base","width","height"],e);let a,l,c,h,d;return t.horizontal?(d=n/2,a=Math.min(i,o),l=Math.max(i,o),c=s-d,h=s+d):(d=r/2,a=i-d,l=i+d,c=Math.min(s,o),h=Math.max(s,o)),{left:a,top:c,right:l,bottom:h}}function es(t,e,i,s){return t?0:Le(e,i,s)}function b2(t,e,i){const s=t.options.borderWidth,o=t.borderSkipped,r=dp(s);return{t:es(o.top,r.top,0,i),r:es(o.right,r.right,0,e),b:es(o.bottom,r.bottom,0,i),l:es(o.left,r.left,0,e)}}function v2(t,e,i){const{enableBorderRadius:s}=t.getProps(["enableBorderRadius"]),o=t.options.borderRadius,r=oo(o),n=Math.min(e,i),a=t.borderSkipped,l=s||vt(o);return{topLeft:es(!l||a.top||a.left,r.topLeft,0,n),topRight:es(!l||a.top||a.right,r.topRight,0,n),bottomLeft:es(!l||a.bottom||a.left,r.bottomLeft,0,n),bottomRight:es(!l||a.bottom||a.right,r.bottomRight,0,n)}}function y2(t){const e=Pp(t),i=e.right-e.left,s=e.bottom-e.top,o=b2(t,i/2,s/2),r=v2(t,i/2,s/2);return{outer:{x:e.left,y:e.top,w:i,h:s,radius:r},inner:{x:e.left+o.l,y:e.top+o.t,w:i-o.l-o.r,h:s-o.t-o.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,r.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(o.b,o.r))}}}}function ja(t,e,i,s){const o=e===null,r=i===null,a=t&&!(o&&r)&&Pp(t,s);return a&&(o||zs(e,a.left,a.right))&&(r||zs(i,a.top,a.bottom))}function _2(t){return t.topLeft||t.topRight||t.bottomLeft||t.bottomRight}function x2(t,e){t.rect(e.x,e.y,e.w,e.h)}function Wa(t,e,i={}){const s=t.x!==i.x?-e:0,o=t.y!==i.y?-e:0,r=(t.x+t.w!==i.x+i.w?e:0)-s,n=(t.y+t.h!==i.y+i.h?e:0)-o;return{x:t.x+s,y:t.y+o,w:t.w+r,h:t.h+n,radius:t.radius}}class w2 extends fs{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:i,options:{borderColor:s,backgroundColor:o}}=this,{inner:r,outer:n}=y2(this),a=_2(n.radius)?Vn:x2;e.save(),(n.w!==r.w||n.h!==r.h)&&(e.beginPath(),a(e,Wa(n,i,r)),e.clip(),a(e,Wa(r,-i,n)),e.fillStyle=s,e.fill("evenodd")),e.beginPath(),a(e,Wa(r,i)),e.fillStyle=o,e.fill(),e.restore()}inRange(e,i,s){return ja(this,e,i,s)}inXRange(e,i){return ja(this,e,null,i)}inYRange(e,i){return ja(this,null,e,i)}getCenterPoint(e){const{x:i,y:s,base:o,horizontal:r}=this.getProps(["x","y","base","horizontal"],e);return{x:r?(i+o)/2:i,y:r?s:(s+o)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}const jd=(t,e)=>{let{boxHeight:i=e,boxWidth:s=e}=t;return t.usePointStyle&&(i=Math.min(i,e),s=t.pointStyleWidth||Math.min(s,e)),{boxWidth:s,boxHeight:i,itemHeight:Math.max(e,i)}},k2=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class Wd extends fs{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,i,s){this.maxWidth=e,this.maxHeight=i,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let i=Dt(e.generateLabels,[this.chart],this)||[];e.filter&&(i=i.filter(s=>e.filter(s,this.chart.data))),e.sort&&(i=i.sort((s,o)=>e.sort(s,o,this.chart.data))),this.options.reverse&&i.reverse(),this.legendItems=i}fit(){const{options:e,ctx:i}=this;if(!e.display){this.width=this.height=0;return}const s=e.labels,o=de(s.font),r=o.size,n=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=jd(s,r);let c,h;i.font=o.string,this.isHorizontal()?(c=this.maxWidth,h=this._fitRows(n,r,a,l)+10):(h=this.maxHeight,c=this._fitCols(n,o,a,l)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(h,e.maxHeight||this.maxHeight)}_fitRows(e,i,s,o){const{ctx:r,maxWidth:n,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],h=o+a;let d=e;r.textAlign="left",r.textBaseline="middle";let f=-1,p=-h;return this.legendItems.forEach((m,b)=>{const v=s+i/2+r.measureText(m.text).width;(b===0||c[c.length-1]+v+2*a>n)&&(d+=h,c[c.length-(b>0?0:1)]=0,p+=h,f++),l[b]={left:0,top:p,row:f,width:v,height:o},c[c.length-1]+=v+a}),d}_fitCols(e,i,s,o){const{ctx:r,maxHeight:n,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],h=n-e;let d=a,f=0,p=0,m=0,b=0;return this.legendItems.forEach((v,w)=>{const{itemWidth:x,itemHeight:S}=C2(s,i,r,v,o);w>0&&p+S+2*a>h&&(d+=f+a,c.push({width:f,height:p}),m+=f+a,b++,f=p=0),l[w]={left:m,top:p,col:b,width:x,height:S},f=Math.max(f,x),p+=S+a}),d+=f,c.push({width:f,height:p}),d}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:i,options:{align:s,labels:{padding:o},rtl:r}}=this,n=ro(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=ce(s,this.left+o,this.right-this.lineWidths[a]);for(const c of i)a!==c.row&&(a=c.row,l=ce(s,this.left+o,this.right-this.lineWidths[a])),c.top+=this.top+e+o,c.left=n.leftForLtr(n.x(l),c.width),l+=c.width+o}else{let a=0,l=ce(s,this.top+e+o,this.bottom-this.columnSizes[a].height);for(const c of i)c.col!==a&&(a=c.col,l=ce(s,this.top+e+o,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+o,c.left=n.leftForLtr(n.x(c.left),c.width),l+=c.height+o}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;Cc(e,this),this._draw(),Sc(e)}}_draw(){const{options:e,columnSizes:i,lineWidths:s,ctx:o}=this,{align:r,labels:n}=e,a=Nt.color,l=ro(e.rtl,this.left,this.width),c=de(n.font),{padding:h}=n,d=c.size,f=d/2;let p;this.drawTitle(),o.textAlign=l.textAlign("left"),o.textBaseline="middle",o.lineWidth=.5,o.font=c.string;const{boxWidth:m,boxHeight:b,itemHeight:v}=jd(n,d),w=function($,T,z){if(isNaN(m)||m<=0||isNaN(b)||b<0)return;o.save();const O=mt(z.lineWidth,1);if(o.fillStyle=mt(z.fillStyle,a),o.lineCap=mt(z.lineCap,"butt"),o.lineDashOffset=mt(z.lineDashOffset,0),o.lineJoin=mt(z.lineJoin,"miter"),o.lineWidth=O,o.strokeStyle=mt(z.strokeStyle,a),o.setLineDash(mt(z.lineDash,[])),n.usePointStyle){const M={radius:b*Math.SQRT2/2,pointStyle:z.pointStyle,rotation:z.rotation,borderWidth:O},q=l.xPlus($,m/2),j=T+f;cp(o,M,q,j,n.pointStyleWidth&&m)}else{const M=T+Math.max((d-b)/2,0),q=l.leftForLtr($,m),j=oo(z.borderRadius);o.beginPath(),Object.values(j).some(ot=>ot!==0)?Vn(o,{x:q,y:M,w:m,h:b,radius:j}):o.rect(q,M,m,b),o.fill(),O!==0&&o.stroke()}o.restore()},x=function($,T,z){_r(o,z.text,$,T+v/2,c,{strikethrough:z.hidden,textAlign:l.textAlign(z.textAlign)})},S=this.isHorizontal(),y=this._computeTitleHeight();S?p={x:ce(r,this.left+h,this.right-s[0]),y:this.top+h+y,line:0}:p={x:this.left+h,y:ce(r,this.top+y+h,this.bottom-i[0].height),line:0},bp(this.ctx,e.textDirection);const k=v+h;this.legendItems.forEach(($,T)=>{o.strokeStyle=$.fontColor,o.fillStyle=$.fontColor;const z=o.measureText($.text).width,O=l.textAlign($.textAlign||($.textAlign=n.textAlign)),M=m+f+z;let q=p.x,j=p.y;l.setWidth(this.width),S?T>0&&q+M+h>this.right&&(j=p.y+=k,p.line++,q=p.x=ce(r,this.left+h,this.right-s[p.line])):T>0&&j+k>this.bottom&&(q=p.x=q+i[p.line].width+h,p.line++,j=p.y=ce(r,this.top+y+h,this.bottom-i[p.line].height));const ot=l.x(q);if(w(ot,j,$),q=zx(O,q+m+f,S?q+M:this.right,e.rtl),x(l.x(q),j,$),S)p.x+=M+h;else if(typeof $.text!="string"){const J=c.lineHeight;p.y+=Ip($,J)+h}else p.y+=k}),vp(this.ctx,e.textDirection)}drawTitle(){const e=this.options,i=e.title,s=de(i.font),o=Ge(i.padding);if(!i.display)return;const r=ro(e.rtl,this.left,this.width),n=this.ctx,a=i.position,l=s.size/2,c=o.top+l;let h,d=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),h=this.top+c,d=ce(e.align,d,this.right-f);else{const m=this.columnSizes.reduce((b,v)=>Math.max(b,v.height),0);h=c+ce(e.align,this.top,this.bottom-m-e.labels.padding-this._computeTitleHeight())}const p=ce(a,d,d+f);n.textAlign=r.textAlign(wc(a)),n.textBaseline="middle",n.strokeStyle=i.color,n.fillStyle=i.color,n.font=s.string,_r(n,i.text,p,h,s)}_computeTitleHeight(){const e=this.options.title,i=de(e.font),s=Ge(e.padding);return e.display?i.lineHeight+s.height:0}_getLegendItemAt(e,i){let s,o,r;if(zs(e,this.left,this.right)&&zs(i,this.top,this.bottom)){for(r=this.legendHitBoxes,s=0;s<r.length;++s)if(o=r[s],zs(e,o.left,o.left+o.width)&&zs(i,o.top,o.top+o.height))return this.legendItems[s]}return null}handleEvent(e){const i=this.options;if(!A2(e.type,i))return;const s=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const o=this._hoveredItem,r=k2(o,s);o&&!r&&Dt(i.onLeave,[e,o,this],this),this._hoveredItem=s,s&&!r&&Dt(i.onHover,[e,s,this],this)}else s&&Dt(i.onClick,[e,s,this],this)}}function C2(t,e,i,s,o){const r=S2(s,t,e,i),n=$2(o,s,e.lineHeight);return{itemWidth:r,itemHeight:n}}function S2(t,e,i,s){let o=t.text;return o&&typeof o!="string"&&(o=o.reduce((r,n)=>r.length>n.length?r:n)),e+i.size/2+s.measureText(o).width}function $2(t,e,i){let s=t;return typeof e.text!="string"&&(s=Ip(e,i)),s}function Ip(t,e){const i=t.text?t.text.length:0;return e*i}function A2(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var T2={id:"legend",_element:Wd,start(t,e,i){const s=t.legend=new Wd({ctx:t.ctx,options:i,chart:t});Ke.configure(t,s,i),Ke.addBox(t,s)},stop(t){Ke.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,i){const s=t.legend;Ke.configure(t,s,i),s.options=i},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,i){const s=e.datasetIndex,o=i.chart;o.isDatasetVisible(s)?(o.hide(s),e.hidden=!0):(o.show(s),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:i,pointStyle:s,textAlign:o,color:r,useBorderRadius:n,borderRadius:a}}=t.legend.options;return t._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(i?0:void 0),h=Ge(c.borderWidth);return{text:e[l.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:c.borderColor,pointStyle:s||c.pointStyle,rotation:c.rotation,textAlign:o||c.textAlign,borderRadius:n&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class Rp extends fs{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,i){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=i;const o=Jt(s.text)?s.text.length:1;this._padding=Ge(s.padding);const r=o*de(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:i,left:s,bottom:o,right:r,options:n}=this,a=n.align;let l=0,c,h,d;return this.isHorizontal()?(h=ce(a,s,r),d=i+e,c=r-s):(n.position==="left"?(h=s+e,d=ce(a,o,i),l=Zt*-.5):(h=r-e,d=ce(a,i,o),l=Zt*.5),c=o-i),{titleX:h,titleY:d,maxWidth:c,rotation:l}}draw(){const e=this.ctx,i=this.options;if(!i.display)return;const s=de(i.font),r=s.lineHeight/2+this._padding.top,{titleX:n,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(r);_r(e,i.text,0,0,s,{color:i.color,maxWidth:l,rotation:c,textAlign:wc(i.align),textBaseline:"middle",translation:[n,a]})}}function E2(t,e){const i=new Rp({ctx:t.ctx,options:e,chart:t});Ke.configure(t,i,e),Ke.addBox(t,i),t.titleBlock=i}var z2={id:"title",_element:Rp,start(t,e,i){E2(t,i)},stop(t){const e=t.titleBlock;Ke.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,i){const s=t.titleBlock;Ke.configure(t,s,i),s.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Vo={average(t){if(!t.length)return!1;let e,i,s=new Set,o=0,r=0;for(e=0,i=t.length;e<i;++e){const a=t[e].element;if(a&&a.hasValue()){const l=a.tooltipPosition();s.add(l.x),o+=l.y,++r}}return r===0||s.size===0?!1:{x:[...s].reduce((a,l)=>a+l)/s.size,y:o/r}},nearest(t,e){if(!t.length)return!1;let i=e.x,s=e.y,o=Number.POSITIVE_INFINITY,r,n,a;for(r=0,n=t.length;r<n;++r){const l=t[r].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),h=kl(e,c);h<o&&(o=h,a=l)}}if(a){const l=a.tooltipPosition();i=l.x,s=l.y}return{x:i,y:s}}};function gi(t,e){return e&&(Jt(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Pi(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function M2(t,e){const{element:i,datasetIndex:s,index:o}=e,r=t.getDatasetMeta(s).controller,{label:n,value:a}=r.getLabelAndValue(o);return{chart:t,label:n,parsed:r.getParsed(o),raw:t.data.datasets[s].data[o],formattedValue:a,dataset:r.getDataset(),dataIndex:o,datasetIndex:s,element:i}}function qd(t,e){const i=t.chart.ctx,{body:s,footer:o,title:r}=t,{boxWidth:n,boxHeight:a}=e,l=de(e.bodyFont),c=de(e.titleFont),h=de(e.footerFont),d=r.length,f=o.length,p=s.length,m=Ge(e.padding);let b=m.height,v=0,w=s.reduce((y,k)=>y+k.before.length+k.lines.length+k.after.length,0);if(w+=t.beforeBody.length+t.afterBody.length,d&&(b+=d*c.lineHeight+(d-1)*e.titleSpacing+e.titleMarginBottom),w){const y=e.displayColors?Math.max(a,l.lineHeight):l.lineHeight;b+=p*y+(w-p)*l.lineHeight+(w-1)*e.bodySpacing}f&&(b+=e.footerMarginTop+f*h.lineHeight+(f-1)*e.footerSpacing);let x=0;const S=function(y){v=Math.max(v,i.measureText(y).width+x)};return i.save(),i.font=c.string,$t(t.title,S),i.font=l.string,$t(t.beforeBody.concat(t.afterBody),S),x=e.displayColors?n+2+e.boxPadding:0,$t(s,y=>{$t(y.before,S),$t(y.lines,S),$t(y.after,S)}),x=0,i.font=h.string,$t(t.footer,S),i.restore(),v+=m.width,{width:v,height:b}}function D2(t,e){const{y:i,height:s}=e;return i<s/2?"top":i>t.height-s/2?"bottom":"center"}function O2(t,e,i,s){const{x:o,width:r}=s,n=i.caretSize+i.caretPadding;if(t==="left"&&o+r+n>e.width||t==="right"&&o-r-n<0)return!0}function P2(t,e,i,s){const{x:o,width:r}=i,{width:n,chartArea:{left:a,right:l}}=t;let c="center";return s==="center"?c=o<=(a+l)/2?"left":"right":o<=r/2?c="left":o>=n-r/2&&(c="right"),O2(c,t,e,i)&&(c="center"),c}function Kd(t,e,i){const s=i.yAlign||e.yAlign||D2(t,i);return{xAlign:i.xAlign||e.xAlign||P2(t,e,i,s),yAlign:s}}function I2(t,e){let{x:i,width:s}=t;return e==="right"?i-=s:e==="center"&&(i-=s/2),i}function R2(t,e,i){let{y:s,height:o}=t;return e==="top"?s+=i:e==="bottom"?s-=o+i:s-=o/2,s}function Yd(t,e,i,s){const{caretSize:o,caretPadding:r,cornerRadius:n}=t,{xAlign:a,yAlign:l}=i,c=o+r,{topLeft:h,topRight:d,bottomLeft:f,bottomRight:p}=oo(n);let m=I2(e,a);const b=R2(e,l,c);return l==="center"?a==="left"?m+=c:a==="right"&&(m-=c):a==="left"?m-=Math.max(h,f)+o:a==="right"&&(m+=Math.max(d,p)+o),{x:Le(m,0,s.width-e.width),y:Le(b,0,s.height-e.height)}}function cn(t,e,i){const s=Ge(i.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-s.right:t.x+s.left}function Xd(t){return gi([],Pi(t))}function L2(t,e,i){return Us(t,{tooltip:e,tooltipItems:i,type:"tooltip"})}function Gd(t,e){const i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}const Lp={beforeTitle:Di,title(t){if(t.length>0){const e=t[0],i=e.chart.data.labels,s=i?i.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(s>0&&e.dataIndex<s)return i[e.dataIndex]}return""},afterTitle:Di,beforeBody:Di,beforeLabel:Di,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const i=t.formattedValue;return Mt(i)||(e+=i),e},labelColor(t){const i=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:i.borderColor,backgroundColor:i.backgroundColor,borderWidth:i.borderWidth,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const i=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:i.pointStyle,rotation:i.rotation}},afterLabel:Di,afterBody:Di,beforeFooter:Di,footer:Di,afterFooter:Di};function Se(t,e,i,s){const o=t[e].call(i,s);return typeof o>"u"?Lp[e].call(i,s):o}class Jd extends fs{static positioners=Vo;constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const i=this.chart,s=this.options.setContext(this.getContext()),o=s.enabled&&i.options.animation&&s.animations,r=new _p(this.chart,o);return o._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=L2(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,i){const{callbacks:s}=i,o=Se(s,"beforeTitle",this,e),r=Se(s,"title",this,e),n=Se(s,"afterTitle",this,e);let a=[];return a=gi(a,Pi(o)),a=gi(a,Pi(r)),a=gi(a,Pi(n)),a}getBeforeBody(e,i){return Xd(Se(i.callbacks,"beforeBody",this,e))}getBody(e,i){const{callbacks:s}=i,o=[];return $t(e,r=>{const n={before:[],lines:[],after:[]},a=Gd(s,r);gi(n.before,Pi(Se(a,"beforeLabel",this,r))),gi(n.lines,Se(a,"label",this,r)),gi(n.after,Pi(Se(a,"afterLabel",this,r))),o.push(n)}),o}getAfterBody(e,i){return Xd(Se(i.callbacks,"afterBody",this,e))}getFooter(e,i){const{callbacks:s}=i,o=Se(s,"beforeFooter",this,e),r=Se(s,"footer",this,e),n=Se(s,"afterFooter",this,e);let a=[];return a=gi(a,Pi(o)),a=gi(a,Pi(r)),a=gi(a,Pi(n)),a}_createItems(e){const i=this._active,s=this.chart.data,o=[],r=[],n=[];let a=[],l,c;for(l=0,c=i.length;l<c;++l)a.push(M2(this.chart,i[l]));return e.filter&&(a=a.filter((h,d,f)=>e.filter(h,d,f,s))),e.itemSort&&(a=a.sort((h,d)=>e.itemSort(h,d,s))),$t(a,h=>{const d=Gd(e.callbacks,h);o.push(Se(d,"labelColor",this,h)),r.push(Se(d,"labelPointStyle",this,h)),n.push(Se(d,"labelTextColor",this,h))}),this.labelColors=o,this.labelPointStyles=r,this.labelTextColors=n,this.dataPoints=a,a}update(e,i){const s=this.options.setContext(this.getContext()),o=this._active;let r,n=[];if(!o.length)this.opacity!==0&&(r={opacity:0});else{const a=Vo[s.position].call(this,o,this._eventPosition);n=this._createItems(s),this.title=this.getTitle(n,s),this.beforeBody=this.getBeforeBody(n,s),this.body=this.getBody(n,s),this.afterBody=this.getAfterBody(n,s),this.footer=this.getFooter(n,s);const l=this._size=qd(this,s),c=Object.assign({},a,l),h=Kd(this.chart,s,c),d=Yd(s,c,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,r={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=n,this.$context=void 0,r&&this._resolveAnimations().update(this,r),e&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:i})}drawCaret(e,i,s,o){const r=this.getCaretPosition(e,s,o);i.lineTo(r.x1,r.y1),i.lineTo(r.x2,r.y2),i.lineTo(r.x3,r.y3)}getCaretPosition(e,i,s){const{xAlign:o,yAlign:r}=this,{caretSize:n,cornerRadius:a}=s,{topLeft:l,topRight:c,bottomLeft:h,bottomRight:d}=oo(a),{x:f,y:p}=e,{width:m,height:b}=i;let v,w,x,S,y,k;return r==="center"?(y=p+b/2,o==="left"?(v=f,w=v-n,S=y+n,k=y-n):(v=f+m,w=v+n,S=y-n,k=y+n),x=v):(o==="left"?w=f+Math.max(l,h)+n:o==="right"?w=f+m-Math.max(c,d)-n:w=this.caretX,r==="top"?(S=p,y=S-n,v=w-n,x=w+n):(S=p+b,y=S+n,v=w+n,x=w-n),k=S),{x1:v,x2:w,x3:x,y1:S,y2:y,y3:k}}drawTitle(e,i,s){const o=this.title,r=o.length;let n,a,l;if(r){const c=ro(s.rtl,this.x,this.width);for(e.x=cn(this,s.titleAlign,s),i.textAlign=c.textAlign(s.titleAlign),i.textBaseline="middle",n=de(s.titleFont),a=s.titleSpacing,i.fillStyle=s.titleColor,i.font=n.string,l=0;l<r;++l)i.fillText(o[l],c.x(e.x),e.y+n.lineHeight/2),e.y+=n.lineHeight+a,l+1===r&&(e.y+=s.titleMarginBottom-a)}}_drawColorBox(e,i,s,o,r){const n=this.labelColors[s],a=this.labelPointStyles[s],{boxHeight:l,boxWidth:c}=r,h=de(r.bodyFont),d=cn(this,"left",r),f=o.x(d),p=l<h.lineHeight?(h.lineHeight-l)/2:0,m=i.y+p;if(r.usePointStyle){const b={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},v=o.leftForLtr(f,c)+c/2,w=m+l/2;e.strokeStyle=r.multiKeyBackground,e.fillStyle=r.multiKeyBackground,Sl(e,b,v,w),e.strokeStyle=n.borderColor,e.fillStyle=n.backgroundColor,Sl(e,b,v,w)}else{e.lineWidth=vt(n.borderWidth)?Math.max(...Object.values(n.borderWidth)):n.borderWidth||1,e.strokeStyle=n.borderColor,e.setLineDash(n.borderDash||[]),e.lineDashOffset=n.borderDashOffset||0;const b=o.leftForLtr(f,c),v=o.leftForLtr(o.xPlus(f,1),c-2),w=oo(n.borderRadius);Object.values(w).some(x=>x!==0)?(e.beginPath(),e.fillStyle=r.multiKeyBackground,Vn(e,{x:b,y:m,w:c,h:l,radius:w}),e.fill(),e.stroke(),e.fillStyle=n.backgroundColor,e.beginPath(),Vn(e,{x:v,y:m+1,w:c-2,h:l-2,radius:w}),e.fill()):(e.fillStyle=r.multiKeyBackground,e.fillRect(b,m,c,l),e.strokeRect(b,m,c,l),e.fillStyle=n.backgroundColor,e.fillRect(v,m+1,c-2,l-2))}e.fillStyle=this.labelTextColors[s]}drawBody(e,i,s){const{body:o}=this,{bodySpacing:r,bodyAlign:n,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:h}=s,d=de(s.bodyFont);let f=d.lineHeight,p=0;const m=ro(s.rtl,this.x,this.width),b=function(z){i.fillText(z,m.x(e.x+p),e.y+f/2),e.y+=f+r},v=m.textAlign(n);let w,x,S,y,k,$,T;for(i.textAlign=n,i.textBaseline="middle",i.font=d.string,e.x=cn(this,v,s),i.fillStyle=s.bodyColor,$t(this.beforeBody,b),p=a&&v!=="right"?n==="center"?c/2+h:c+2+h:0,y=0,$=o.length;y<$;++y){for(w=o[y],x=this.labelTextColors[y],i.fillStyle=x,$t(w.before,b),S=w.lines,a&&S.length&&(this._drawColorBox(i,e,y,m,s),f=Math.max(d.lineHeight,l)),k=0,T=S.length;k<T;++k)b(S[k]),f=d.lineHeight;$t(w.after,b)}p=0,f=d.lineHeight,$t(this.afterBody,b),e.y-=r}drawFooter(e,i,s){const o=this.footer,r=o.length;let n,a;if(r){const l=ro(s.rtl,this.x,this.width);for(e.x=cn(this,s.footerAlign,s),e.y+=s.footerMarginTop,i.textAlign=l.textAlign(s.footerAlign),i.textBaseline="middle",n=de(s.footerFont),i.fillStyle=s.footerColor,i.font=n.string,a=0;a<r;++a)i.fillText(o[a],l.x(e.x),e.y+n.lineHeight/2),e.y+=n.lineHeight+s.footerSpacing}}drawBackground(e,i,s,o){const{xAlign:r,yAlign:n}=this,{x:a,y:l}=e,{width:c,height:h}=s,{topLeft:d,topRight:f,bottomLeft:p,bottomRight:m}=oo(o.cornerRadius);i.fillStyle=o.backgroundColor,i.strokeStyle=o.borderColor,i.lineWidth=o.borderWidth,i.beginPath(),i.moveTo(a+d,l),n==="top"&&this.drawCaret(e,i,s,o),i.lineTo(a+c-f,l),i.quadraticCurveTo(a+c,l,a+c,l+f),n==="center"&&r==="right"&&this.drawCaret(e,i,s,o),i.lineTo(a+c,l+h-m),i.quadraticCurveTo(a+c,l+h,a+c-m,l+h),n==="bottom"&&this.drawCaret(e,i,s,o),i.lineTo(a+p,l+h),i.quadraticCurveTo(a,l+h,a,l+h-p),n==="center"&&r==="left"&&this.drawCaret(e,i,s,o),i.lineTo(a,l+d),i.quadraticCurveTo(a,l,a+d,l),i.closePath(),i.fill(),o.borderWidth>0&&i.stroke()}_updateAnimationTarget(e){const i=this.chart,s=this.$animations,o=s&&s.x,r=s&&s.y;if(o||r){const n=Vo[e.position].call(this,this._active,this._eventPosition);if(!n)return;const a=this._size=qd(this,e),l=Object.assign({},n,this._size),c=Kd(i,e,l),h=Yd(e,l,c,i);(o._to!==h.x||r._to!==h.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=n.x,this.caretY=n.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(e){const i=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(i);const o={width:this.width,height:this.height},r={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const n=Ge(i.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;i.enabled&&a&&(e.save(),e.globalAlpha=s,this.drawBackground(r,e,o,i),bp(e,i.textDirection),r.y+=n.top,this.drawTitle(r,e,i),this.drawBody(r,e,i),this.drawFooter(r,e,i),vp(e,i.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,i){const s=this._active,o=e.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),r=!Rn(s,o),n=this._positionChanged(o,i);(r||n)&&(this._active=o,this._eventPosition=i,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,i,s=!0){if(i&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const o=this.options,r=this._active||[],n=this._getActiveElements(e,r,i,s),a=this._positionChanged(n,e),l=i||!Rn(n,r)||a;return l&&(this._active=n,(o.enabled||o.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,i))),l}_getActiveElements(e,i,s,o){const r=this.options;if(e.type==="mouseout")return[];if(!o)return i.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const n=this.chart.getElementsAtEventForMode(e,r.mode,r,s);return r.reverse&&n.reverse(),n}_positionChanged(e,i){const{caretX:s,caretY:o,options:r}=this,n=Vo[r.position].call(this,e,i);return n!==!1&&(s!==n.x||o!==n.y)}}var F2={id:"tooltip",_element:Jd,positioners:Vo,afterInit(t,e,i){i&&(t.tooltip=new Jd({chart:t,options:i}))},beforeUpdate(t,e,i){t.tooltip&&t.tooltip.initialize(i)},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const i={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...i,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i)}},afterEvent(t,e){if(t.tooltip){const i=e.replay;t.tooltip.handleEvent(e.event,i,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Lp},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const B2=(t,e,i,s)=>(typeof e=="string"?(i=t.push(e)-1,s.unshift({index:i,label:e})):isNaN(e)&&(i=null),i);function H2(t,e,i,s){const o=t.indexOf(e);if(o===-1)return B2(t,e,i,s);const r=t.lastIndexOf(e);return o!==r?i:o}const V2=(t,e)=>t===null?null:Le(Math.round(t),0,e);function Zd(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class N2 extends xo{static id="category";static defaults={ticks:{callback:Zd}};constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const i=this._addedLabels;if(i.length){const s=this.getLabels();for(const{index:o,label:r}of i)s[o]===r&&s.splice(o,1);this._addedLabels=[]}super.init(e)}parse(e,i){if(Mt(e))return null;const s=this.getLabels();return i=isFinite(i)&&s[i]===e?i:H2(s,e,mt(i,e),this._addedLabels),V2(i,s.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:o}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(s=0),i||(o=this.getLabels().length-1)),this.min=s,this.max=o}buildTicks(){const e=this.min,i=this.max,s=this.options.offset,o=[];let r=this.getLabels();r=e===0&&i===r.length-1?r:r.slice(e,i+1),this._valueRange=Math.max(r.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let n=e;n<=i;n++)o.push({value:n});return o}getLabelForValue(e){return Zd.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const i=this.ticks;return e<0||e>i.length-1?null:this.getPixelForValue(i[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}function U2(t,e){const i=[],{bounds:o,step:r,min:n,max:a,precision:l,count:c,maxTicks:h,maxDigits:d,includeBounds:f}=t,p=r||1,m=h-1,{min:b,max:v}=e,w=!Mt(n),x=!Mt(a),S=!Mt(c),y=(v-b)/(d+1);let k=id((v-b)/m/p)*p,$,T,z,O;if(k<1e-14&&!w&&!x)return[{value:b},{value:v}];O=Math.ceil(v/k)-Math.floor(b/k),O>m&&(k=id(O*k/m/p)*p),Mt(l)||($=Math.pow(10,l),k=Math.ceil(k*$)/$),o==="ticks"?(T=Math.floor(b/k)*k,z=Math.ceil(v/k)*k):(T=b,z=v),w&&x&&r&&yx((a-n)/r,k/1e3)?(O=Math.round(Math.min((a-n)/k,h)),k=(a-n)/O,T=n,z=a):S?(T=w?n:T,z=x?a:z,O=c-1,k=(z-T)/O):(O=(z-T)/k,or(O,Math.round(O),k/1e3)?O=Math.round(O):O=Math.ceil(O));const M=Math.max(sd(k),sd(T));$=Math.pow(10,Mt(l)?M:l),T=Math.round(T*$)/$,z=Math.round(z*$)/$;let q=0;for(w&&(f&&T!==n?(i.push({value:n}),T<n&&q++,or(Math.round((T+q*k)*$)/$,n,Qd(n,y,t))&&q++):T<n&&q++);q<O;++q){const j=Math.round((T+q*k)*$)/$;if(x&&j>a)break;i.push({value:j})}return x&&f&&z!==a?i.length&&or(i[i.length-1].value,a,Qd(a,y,t))?i[i.length-1].value=a:i.push({value:a}):(!x||z===a)&&i.push({value:z}),i}function Qd(t,e,{horizontal:i,minRotation:s}){const o=Es(s),r=(i?Math.sin(o):Math.cos(o))||.001,n=.75*e*(""+t).length;return Math.min(e/r,n)}class j2 extends xo{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,i){return Mt(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:i,maxDefined:s}=this.getUserBounds();let{min:o,max:r}=this;const n=l=>o=i?o:l,a=l=>r=s?r:l;if(e){const l=ho(o),c=ho(r);l<0&&c<0?a(0):l>0&&c>0&&n(0)}if(o===r){let l=r===0?1:Math.abs(r*.05);a(r+l),e||n(o-l)}this.min=o,this.max=r}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:i,stepSize:s}=e,o;return s?(o=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,o>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${o} ticks. Limiting to 1000.`),o=1e3)):(o=this.computeTickLimit(),i=i||11),i&&(o=Math.min(i,o)),o}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,i=e.ticks;let s=this.getTickLimit();s=Math.max(2,s);const o={maxTicks:s,bounds:e.bounds,min:e.min,max:e.max,precision:i.precision,step:i.stepSize,count:i.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:i.minRotation||0,includeBounds:i.includeBounds!==!1},r=this._range||this,n=U2(o,r);return e.bounds==="ticks"&&_x(n,this,"value"),e.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}configure(){const e=this.ticks;let i=this.min,s=this.max;if(super.configure(),this.options.offset&&e.length){const o=(s-i)/Math.max(e.length-1,1)/2;i-=o,s+=o}this._startValue=i,this._endValue=s,this._valueRange=s-i}getLabelForValue(e){return ap(e,this.chart.options.locale,this.options.ticks.format)}}class W2 extends j2{static id="linear";static defaults={ticks:{callback:lp.formatters.numeric}};determineDataLimits(){const{min:e,max:i}=this.getMinMax(!0);this.min=Xe(e)?e:0,this.max=Xe(i)?i:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),i=e?this.width:this.height,s=Es(this.options.ticks.minRotation),o=(e?Math.sin(s):Math.cos(s))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(i/Math.min(40,r.lineHeight/o))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}const fa={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ee=Object.keys(fa);function tu(t,e){return t-e}function eu(t,e){if(Mt(e))return null;const i=t._adapter,{parser:s,round:o,isoWeekday:r}=t._parseOpts;let n=e;return typeof s=="function"&&(n=s(n)),Xe(n)||(n=typeof s=="string"?i.parse(n,s):i.parse(n)),n===null?null:(o&&(n=o==="week"&&(vr(r)||r===!0)?i.startOf(n,"isoWeek",r):i.startOf(n,o)),+n)}function iu(t,e,i,s){const o=Ee.length;for(let r=Ee.indexOf(t);r<o-1;++r){const n=fa[Ee[r]],a=n.steps?n.steps:Number.MAX_SAFE_INTEGER;if(n.common&&Math.ceil((i-e)/(a*n.size))<=s)return Ee[r]}return Ee[o-1]}function q2(t,e,i,s,o){for(let r=Ee.length-1;r>=Ee.indexOf(i);r--){const n=Ee[r];if(fa[n].common&&t._adapter.diff(o,s,n)>=e-1)return n}return Ee[i?Ee.indexOf(i):0]}function K2(t){for(let e=Ee.indexOf(t)+1,i=Ee.length;e<i;++e)if(fa[Ee[e]].common)return Ee[e]}function su(t,e,i){if(!i)t[e]=!0;else if(i.length){const{lo:s,hi:o}=xc(i,e),r=i[s]>=e?i[s]:i[o];t[r]=!0}}function Y2(t,e,i,s){const o=t._adapter,r=+o.startOf(e[0].value,s),n=e[e.length-1].value;let a,l;for(a=r;a<=n;a=+o.add(a,1,s))l=i[a],l>=0&&(e[l].major=!0);return e}function ou(t,e,i){const s=[],o={},r=e.length;let n,a;for(n=0;n<r;++n)a=e[n],o[a]=n,s.push({value:a,major:!1});return r===0||!i?s:Y2(t,s,o,i)}class ru extends xo{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,i={}){const s=e.time||(e.time={}),o=this._adapter=new Jw._date(e.adapters.date);o.init(i),sr(s.displayFormats,o.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(e),this._normalized=i.normalized}parse(e,i){return e===void 0?null:eu(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,i=this._adapter,s=e.time.unit||"day";let{min:o,max:r,minDefined:n,maxDefined:a}=this.getUserBounds();function l(c){!n&&!isNaN(c.min)&&(o=Math.min(o,c.min)),!a&&!isNaN(c.max)&&(r=Math.max(r,c.max))}(!n||!a)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),o=Xe(o)&&!isNaN(o)?o:+i.startOf(Date.now(),s),r=Xe(r)&&!isNaN(r)?r:+i.endOf(Date.now(),s)+1,this.min=Math.min(o,r-1),this.max=Math.max(o+1,r)}_getLabelBounds(){const e=this.getLabelTimestamps();let i=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return e.length&&(i=e[0],s=e[e.length-1]),{min:i,max:s}}buildTicks(){const e=this.options,i=e.time,s=e.ticks,o=s.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&o.length&&(this.min=this._userMin||o[0],this.max=this._userMax||o[o.length-1]);const r=this.min,n=this.max,a=$x(o,r,n);return this._unit=i.unit||(s.autoSkip?iu(i.minUnit,this.min,this.max,this._getLabelCapacity(r)):q2(this,a.length,i.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:K2(this._unit),this.initOffsets(o),e.reverse&&a.reverse(),ou(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let i=0,s=0,o,r;this.options.offset&&e.length&&(o=this.getDecimalForValue(e[0]),e.length===1?i=1-o:i=(this.getDecimalForValue(e[1])-o)/2,r=this.getDecimalForValue(e[e.length-1]),e.length===1?s=r:s=(r-this.getDecimalForValue(e[e.length-2]))/2);const n=e.length<3?.5:.25;i=Le(i,0,n),s=Le(s,0,n),this._offsets={start:i,end:s,factor:1/(i+1+s)}}_generate(){const e=this._adapter,i=this.min,s=this.max,o=this.options,r=o.time,n=r.unit||iu(r.minUnit,i,s,this._getLabelCapacity(i)),a=mt(o.ticks.stepSize,1),l=n==="week"?r.isoWeekday:!1,c=vr(l)||l===!0,h={};let d=i,f,p;if(c&&(d=+e.startOf(d,"isoWeek",l)),d=+e.startOf(d,c?"day":n),e.diff(s,i,n)>1e5*a)throw new Error(i+" and "+s+" are too far apart with stepSize of "+a+" "+n);const m=o.ticks.source==="data"&&this.getDataTimestamps();for(f=d,p=0;f<s;f=+e.add(f,a,n),p++)su(h,f,m);return(f===s||o.bounds==="ticks"||p===1)&&su(h,f,m),Object.keys(h).sort(tu).map(b=>+b)}getLabelForValue(e){const i=this._adapter,s=this.options.time;return s.tooltipFormat?i.format(e,s.tooltipFormat):i.format(e,s.displayFormats.datetime)}format(e,i){const o=this.options.time.displayFormats,r=this._unit,n=i||o[r];return this._adapter.format(e,n)}_tickFormatFunction(e,i,s,o){const r=this.options,n=r.ticks.callback;if(n)return Dt(n,[e,i,s],this);const a=r.time.displayFormats,l=this._unit,c=this._majorUnit,h=l&&a[l],d=c&&a[c],f=s[i],p=c&&d&&f&&f.major;return this._adapter.format(e,o||(p?d:h))}generateTickLabels(e){let i,s,o;for(i=0,s=e.length;i<s;++i)o=e[i],o.label=this._tickFormatFunction(o.value,i,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const i=this._offsets,s=this.getDecimalForValue(e);return this.getPixelForDecimal((i.start+s)*i.factor)}getValueForPixel(e){const i=this._offsets,s=this.getDecimalForPixel(e)/i.factor-i.end;return this.min+s*(this.max-this.min)}_getLabelSize(e){const i=this.options.ticks,s=this.ctx.measureText(e).width,o=Es(this.isHorizontal()?i.maxRotation:i.minRotation),r=Math.cos(o),n=Math.sin(o),a=this._resolveTickFontOptions(0).size;return{w:s*r+a*n,h:s*n+a*r}}_getLabelCapacity(e){const i=this.options.time,s=i.displayFormats,o=s[i.unit]||s.millisecond,r=this._tickFormatFunction(e,0,ou(this,[e],this._majorUnit),o),n=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/n.w:this.height/n.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],i,s;if(e.length)return e;const o=this.getMatchingVisibleMetas();if(this._normalized&&o.length)return this._cache.data=o[0].controller.getAllParsedValues(this);for(i=0,s=o.length;i<s;++i)e=e.concat(o[i].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let i,s;if(e.length)return e;const o=this.getLabels();for(i=0,s=o.length;i<s;++i)e.push(eu(this,o[i]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Tx(e.sort(tu))}}function hn(t,e,i){let s=0,o=t.length-1,r,n,a,l;i?(e>=t[s].pos&&e<=t[o].pos&&({lo:s,hi:o}=Ms(t,"pos",e)),{pos:r,time:a}=t[s],{pos:n,time:l}=t[o]):(e>=t[s].time&&e<=t[o].time&&({lo:s,hi:o}=Ms(t,"time",e)),{time:r,pos:a}=t[s],{time:n,pos:l}=t[o]);const c=n-r;return c?a+(l-a)*(e-r)/c:a}class eS extends ru{static id="timeseries";static defaults=ru.defaults;constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),i=this._table=this.buildLookupTable(e);this._minPos=hn(i,this.min),this._tableRange=hn(i,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:i,max:s}=this,o=[],r=[];let n,a,l,c,h;for(n=0,a=e.length;n<a;++n)c=e[n],c>=i&&c<=s&&o.push(c);if(o.length<2)return[{time:i,pos:0},{time:s,pos:1}];for(n=0,a=o.length;n<a;++n)h=o[n+1],l=o[n-1],c=o[n],Math.round((h+l)/2)!==c&&r.push({time:c,pos:n/(a-1)});return r}_generate(){const e=this.min,i=this.max;let s=super.getDataTimestamps();return(!s.includes(e)||!s.length)&&s.splice(0,0,e),(!s.includes(i)||s.length===1)&&s.push(i),s.sort((o,r)=>o-r)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const i=this.getDataTimestamps(),s=this.getLabelTimestamps();return i.length&&s.length?e=this.normalize(i.concat(s)):e=i.length?i:s,e=this._cache.all=e,e}getDecimalForValue(e){return(hn(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const i=this._offsets,s=this.getDecimalForPixel(e)/i.factor-i.end;return hn(this._table,s*this._tableRange+this._minPos,!0)}}const Fp={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},X2={ariaLabel:{type:String},ariaDescribedby:{type:String}},G2={type:{type:String,required:!0},destroyDelay:{type:Number,default:0},...Fp,...X2},J2=hf[0]==="2"?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function Ys(t){return wr(t)?bt(t):t}function Z2(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return wr(e)?new Proxy(t,{}):t}function Q2(t,e){const i=t.options;i&&e&&Object.assign(i,e)}function Bp(t,e){t.labels=e}function Hp(t,e,i){const s=[];t.datasets=e.map(o=>{const r=t.datasets.find(n=>n[i]===o[i]);return!r||!o.data||s.includes(r)?{...o}:(s.push(r),Object.assign(r,o),r)})}function tC(t,e){const i={labels:[],datasets:[]};return Bp(i,t.labels),Hp(i,t.datasets,e),i}const eC=Cr({props:G2,setup(t,e){let{expose:i,slots:s}=e;const o=Ze(null),r=Eu(null);i({chart:r});const n=()=>{if(!o.value)return;const{type:c,data:h,options:d,plugins:f,datasetIdKey:p}=t,m=tC(h,p),b=Z2(m,h);r.value=new ua(o.value,{type:c,data:b,options:{...d},plugins:f})},a=()=>{const c=bt(r.value);c&&(t.destroyDelay>0?setTimeout(()=>{c.destroy(),r.value=null},t.destroyDelay):(c.destroy(),r.value=null))},l=c=>{c.update(t.updateMode)};return Hu(n),Wl(a),un([()=>t.options,()=>t.data],(c,h)=>{let[d,f]=c,[p,m]=h;const b=bt(r.value);if(!b)return;let v=!1;if(d){const w=Ys(d),x=Ys(p);w&&w!==x&&(Q2(b,w),v=!0)}if(f){const w=Ys(f.labels),x=Ys(m.labels),S=Ys(f.datasets),y=Ys(m.datasets);w!==x&&(Bp(b.config.data,w),v=!0),S&&S!==y&&(Hp(b.config.data,S,t.datasetIdKey),v=!0)}v&&Nl(()=>{l(b)})},{deep:!0}),()=>rl("canvas",{role:"img",ariaLabel:t.ariaLabel,ariaDescribedby:t.ariaDescribedby,ref:o},[rl("p",{},[s.default?s.default():""])])}});function iC(t,e){return ua.register(e),Cr({props:Fp,setup(i,s){let{expose:o}=s;const r=Eu(null),n=a=>{r.value=a?.chart};return o({chart:r}),()=>rl(eC,J2({ref:n},{type:t,...i}))}})}const sC=iC("scatter",Gw),oC={class:"fg1 pr"},qa=180,rC=500,nC=Cr({__name:"GearChart",props:{gears:{},maxRPM:{},vtecEnabled:{type:Boolean},vtecCrossover:{}},setup(t){ua.register(z2,F2,T2,w2,m2,g2,N2,W2);const e=t,i=$s(()=>{const o=[...e.gears.map(r=>({showLine:!0,data:r,backgroundColor:"black",borderColor:"black"})),{showLine:!0,data:[{x:0,y:e.maxRPM},{x:qa,y:e.maxRPM}],borderColor:"red",borderDash:[4,12],pointRadius:0}];return e.vtecEnabled&&o.push({showLine:!0,data:[{x:0,y:e.vtecCrossover},{x:qa,y:e.vtecCrossover}],borderColor:"green",borderDash:[4,12],pointRadius:0}),{type:"line",datasets:o}}),s=$s(()=>({animation:{duration:0},plugins:{legend:{display:!1}},scales:{x:{title:{display:!0,text:"MPH"},min:0,max:qa,ticks:{stepSize:10}},y:{title:{display:!0,text:"RPM"},min:0,max:e.maxRPM+rC,ticks:{stepSize:100}}}}));return(o,r)=>(ie(),$e("div",oC,[oe(Gn(sC),{data:i.value,options:s.value},null,8,["data","options"])]))}}),Dc=(t,e)=>{const i=t.__vccOpts||t;for(const[s,o]of e)i[s]=o;return i},aC=Dc(nC,[["__scopeId","data-v-770ab59d"]]);function Ka(t){const{maxRPM:e,gearRatio:i,finalDrive:s,tireDiameter:o}=t;return e*o/(i*s*336)}function lC(t){const{mph:e,gearRatio:i,finalDrive:s,tireDiameter:o}=t;return e*i*s*336/o}const cC={};function hC(t,e){return ie(),$e("sl-button",{variant:"text",size:"small",onSlClick:e[0]||(e[0]=()=>t.$emit("click"))},e[1]||(e[1]=[ut("span",{class:"reset"},"reset",-1)]),32)}const nu=Dc(cC,[["render",hC],["__scopeId","data-v-ee67af5f"]]),dC={class:"fr-desktop"},uC={id:"calculator-form",class:"fc"},fC={class:"fr fgap1"},pC=["value"],gC=["value"],mC=["value"],bC=["value"],vC=["value"],yC=["value"],_C=["value"],xC={class:"fr"},wC=["checked"],kC=["value","disabled"],CC=["value"],SC=["value"],$C=["value"],AC=["value"],TC={class:"fr mb1"},EC={class:"fr fg1"},zC=["title"],MC={key:0},DC=["value","onSlInput","onSlBlur"],OC=["value"],PC={class:"fr"},IC={class:"fr fg1"},RC=["title"],LC={key:0},FC=["value"],BC=205,HC=50,VC=15,NC=8200,UC=4400,jC=Cr({__name:"BSeriesGearCalculator",setup(t){ll("../../../shoelace");const e=xl.S80,i=Jf.USDM_94_01_GSR,s=[175,185,195,205,215,225,235,245,255,265,275],o=[25,30,35,40,45,50,55,60,65,70,75,80],r=[13,14,15,16,17,18],n=Ze(BC),a=Ze(HC),l=Ze(VC),c=F=>{if(!Do(F.target))throw new Error("No target for updateTireWidth");n.value=Number(F.target.value)},h=F=>{if(!Do(F.target))throw new Error("No target for updateTireRatio");a.value=Number(F.target.value)},d=F=>{if(!Do(F.target))throw new Error("No target for updateTireDiameter");l.value=Number(F.target.value)},f=$s(()=>{const W=F1(n.value)*a.value/100,lt=l.value;return 2*W+lt}),p=Ze(NC),m=F=>{if(!qi(F.target))throw new Error("No target for updateMaxRPM");p.value=F.target.valueAsNumber},b=F=>{if(!qi(F.target))throw new Error("No target for validateMaxRPM");if(!Number.isInteger(p.value)){const W=Math.round(p.value);p.value=W,F.target.value=W.toString()}p.value<0&&(p.value=0,F.target.value="0"),p.value>1e4&&(p.value=1e4,F.target.value="10000")},v=Ze(!0),w=F=>{if(!B1(F.target))throw new Error("No target for updateVtecEnabled");v.value=F.target.checked},x=Ze(UC),S=F=>{if(!qi(F.target))throw new Error("No target for updateVTECCrossover");x.value=F.target.valueAsNumber},y=F=>{if(!qi(F.target))throw new Error("No target for validateVTECCrossover");if(!Number.isInteger(x.value)){const W=Math.round(x.value);x.value=W,F.target.value=W.toString()}x.value<0&&(x.value=0,F.target.value="0"),x.value>p.value&&(x.value=p.value,F.target.value=p.value.toString())},k=["1st","2nd","3rd","4th","5th"],$=Ze(e),T=Ze(i),z=$s(()=>L1(xl).map(([F,W])=>({label:F,value:W}))),O=$s(()=>Yh(Wi[$.value]).map(F=>({label:R1[F],value:F}))),M=F=>{if(!Do(F.target))throw new Error("No target for updateChassisCode");T.value=F.target.value;const W=Wi[$.value][T.value];W!==void 0&&(ot.value=[...W.gears.map(j)],J.value=j(W.finalDrive))},q=F=>{if(!Do(F.target))throw new Error("No target for updateTransmission");if($.value=F.target.value,Wi[$.value][T.value]===void 0){T.value=Yh(Wi[$.value])[0];const W=Wi[$.value][T.value];ot.value=[...W.gears.map(j)],J.value=j(W.finalDrive)}};function j(F){return{stockRatio:F,ratio:F,modified:!1}}const ot=Ze((Wi[$.value][T.value]?.gears??[0,0,0,0,0]).map(j)),J=Ze(j(Wi[$.value][T.value]?.finalDrive??0)),dt=(F,W)=>{if(!qi(W.target))throw new Error(`No target for updateGear(gearIndex: ${F})`);const lt=ot.value[F];lt.ratio=W.target.valueAsNumber,lt.modified||=!0},rt=(F,W)=>{if(!qi(W.target))throw new Error(`No target for validateGear(gearIndex: ${F})`);const lt=ot.value[F];lt.ratio<0&&(lt.ratio=0,W.target.value="0"),lt.ratio>10&&(lt.ratio=10,W.target.value="10")},it=F=>{const W=ot.value[F];W.ratio=W.stockRatio,W.modified=!1},nt=F=>{if(!qi(F.target))throw new Error("No target for updateFinalDrive");J.value.ratio=F.target.valueAsNumber,J.value.modified||=!0},Rt=F=>{if(!qi(F.target))throw new Error("No target for validateFinalDrive");const W=J.value;Number.isNaN(W)&&(J.value.ratio=Wi[$.value][T.value]?.finalDrive??0,F.target.value=J.value.toString()),W.ratio<0&&(J.value.ratio=0,F.target.value="0"),W.ratio>10&&(J.value.ratio=10,F.target.value="10")},ge=()=>{J.value.ratio=J.value.stockRatio,J.value.modified=!1},we=$s(()=>{const F=p.value,W=J.value,lt=f.value;return ot.value.map((jt,ji)=>{const js=ji>0?Ka({gearRatio:ot.value[ji-1].ratio,finalDrive:W.ratio,maxRPM:F,tireDiameter:lt}):0,Fr=ji>0?lC({gearRatio:jt.ratio,finalDrive:W.ratio,mph:js,tireDiameter:lt}):0,ps=Ka({gearRatio:jt.ratio,finalDrive:W.ratio,maxRPM:F,tireDiameter:lt}),Oc=F;return[{x:js,y:Math.round(Fr)},{x:ps,y:Math.round(Oc)}]})});return(F,W)=>(ie(),$e("div",dC,[ut("div",uC,[ut("strong",null,[W[0]||(W[0]=af("Tire size ")),ut("small",null,"("+Ki(f.value.toFixed(2))+'" diameter)',1)]),ut("div",fC,[ut("sl-select",{class:"fg1",placeholder:"Width",value:n.value.toString(),onSlChange:c},[(ie(),$e(ve,null,qs(s,lt=>ut("sl-option",{value:lt},Ki(lt),9,gC)),64))],40,pC),ut("sl-select",{class:"fg1",placeholder:"Ratio",value:a.value.toString(),onSlChange:h},[(ie(),$e(ve,null,qs(o,lt=>ut("sl-option",{value:lt},Ki(lt),9,bC)),64))],40,mC),ut("sl-select",{class:"fg1",placeholder:"Diameter",value:l.value.toString(),onSlChange:d},[(ie(),$e(ve,null,qs(r,lt=>ut("sl-option",{value:lt},Ki(lt),9,yC)),64))],40,vC)]),W[4]||(W[4]=ut("strong",null,"Redline",-1)),ut("sl-input",{type:"number",inputmode:"numeric",step:100,value:p.value,onSlInput:m,onSlBlur:b},null,40,_C),W[5]||(W[5]=ut("strong",{title:"When VTEC kicks in yo"},"VTEC Crossover",-1)),ut("div",xC,[ut("sl-checkbox",{class:"mr10px",checked:v.value,onSlChange:w},"VTEC enabled",40,wC),ut("sl-input",{class:"fg1",type:"number",inputmode:"numeric",step:100,value:x.value,onSlInput:S,onSlBlur:y,disabled:!v.value},null,40,kC)]),W[6]||(W[6]=ut("sl-divider",null,null,-1)),W[7]||(W[7]=ut("strong",null,"Transmission code",-1)),ut("sl-select",{value:$.value,onSlChange:q},[(ie(!0),$e(ve,null,qs(z.value,({value:lt,label:Gt})=>(ie(),$e("sl-option",{value:lt},Ki(Gt),9,SC))),256))],40,CC),W[8]||(W[8]=ut("strong",{class:"fr aic"},[ut("span",{class:"pr1"},"Chassis"),ut("sl-tooltip",{class:"tooltip",hoist:"",content:"The chassis that the transmission came from"},[ut("sl-icon",{name:"question-circle-fill"})])],-1)),ut("sl-select",{value:T.value,onSlChange:M},[(ie(!0),$e(ve,null,qs(O.value,({value:lt,label:Gt})=>(ie(),$e("sl-option",{value:lt},Ki(Gt),9,AC))),256))],40,$C),ut("div",null,[W[2]||(W[2]=km('<div class="fr" data-v-69ebbd71><div class="fr fg1" data-v-69ebbd71><strong class="gear-column" data-v-69ebbd71>Gear</strong><strong class="gear-column" data-v-69ebbd71>Ratio</strong></div><strong class="gear-column" data-v-69ebbd71>Max MPH</strong></div>',1)),(ie(!0),$e(ve,null,qs(ot.value,(lt,Gt)=>(ie(),$e("div",TC,[ut("div",EC,[ut("div",{class:"gear-column",title:lt.modified?`Gear was changed. Stock ratio is ${lt.stockRatio}`:void 0},[ut("span",null,Ki(k[Gt]),1),lt.modified?(ie(),$e("span",MC,"*")):Nr("",!0)],8,zC),ut("sl-input",{class:"gear-column",type:"number",step:"0.001",inputmode:"numeric",value:ot.value[Gt].ratio,onSlInput:jt=>dt(Gt,jt),onSlBlur:jt=>rt(Gt,jt)},null,40,DC),lt.modified?(ie(),sl(nu,{key:0,onClick:()=>it(Gt)},null,8,["onClick"])):Nr("",!0)]),ut("sl-input",{class:"gear-column",value:Gn(Ka)({gearRatio:lt.ratio,finalDrive:J.value.ratio,maxRPM:p.value,tireDiameter:f.value}).toFixed(2),readonly:""},null,8,OC)]))),256)),ut("div",PC,[ut("div",IC,[ut("div",{class:"gear-column",title:J.value.modified?`Final drive was changed. Stock ratio is ${J.value.stockRatio}`:void 0},[W[1]||(W[1]=ut("span",null,"Final drive",-1)),J.value.modified?(ie(),$e("span",LC,"*")):Nr("",!0)],8,RC),ut("sl-input",{class:"gear-column",type:"number",step:"0.01",inputmode:"numeric",value:J.value.ratio,onSlInput:nt,onSlBlur:Rt},null,40,FC),J.value.modified?(ie(),sl(nu,{key:0,onClick:ge})):Nr("",!0)])]),W[3]||(W[3]=ut("sl-divider",null,null,-1))])]),oe(aC,{gears:we.value,maxRPM:p.value,vtecCrossover:x.value,"vtec-enabled":v.value},null,8,["gears","maxRPM","vtecCrossover","vtec-enabled"])]))}}),WC=Dc(jC,[["__scopeId","data-v-69ebbd71"]]);customElements.define("b-series-gear-calculator",Qm(WC,{shadowRoot:!1}));
