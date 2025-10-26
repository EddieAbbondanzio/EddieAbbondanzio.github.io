/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zr(t){const e=Object.create(null);for(const s of t.split(","))e[s]=1;return s=>s in e}const vt={},Ws=[],Ue=()=>{},ol=()=>!1,Bo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Jr=t=>t.startsWith("onUpdate:"),Dt=Object.assign,ta=(t,e)=>{const s=t.indexOf(e);s>-1&&t.splice(s,1)},Gc=Object.prototype.hasOwnProperty,lt=(t,e)=>Gc.call(t,e),G=Array.isArray,qs=t=>Ho(t)==="[object Map]",rl=t=>Ho(t)==="[object Set]",tt=t=>typeof t=="function",Ot=t=>typeof t=="string",ys=t=>typeof t=="symbol",wt=t=>t!==null&&typeof t=="object",al=t=>(wt(t)||tt(t))&&tt(t.then)&&tt(t.catch),nl=Object.prototype.toString,Ho=t=>nl.call(t),Qc=t=>Ho(t).slice(8,-1),No=t=>Ho(t)==="[object Object]",ea=t=>Ot(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wi=Zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Uo=t=>{const e=Object.create(null);return s=>e[s]||(e[s]=t(s))},Zc=/-\w/g,Ce=Uo(t=>t.replace(Zc,e=>e.slice(1).toUpperCase())),Jc=/\B([A-Z])/g,we=Uo(t=>t.replace(Jc,"-$1").toLowerCase()),ll=Uo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ar=Uo(t=>t?`on${ll(t)}`:""),ps=(t,e)=>!Object.is(t,e),nr=(t,...e)=>{for(let s=0;s<t.length;s++)t[s](...e)},cl=(t,e,s,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:s})},td=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ja=t=>{const e=Ot(t)?Number(t):NaN;return isNaN(e)?t:e};let Wa;const jo=()=>Wa||(Wa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sa(t){if(G(t)){const e={};for(let s=0;s<t.length;s++){const i=t[s],o=Ot(i)?od(i):sa(i);if(o)for(const r in o)e[r]=o[r]}return e}else if(Ot(t)||wt(t))return t}const ed=/;(?![^(]*\))/g,sd=/:([^]+)/,id=/\/\*[^]*?\*\//g;function od(t){const e={};return t.replace(id,"").split(ed).forEach(s=>{if(s){const i=s.split(sd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ia(t){let e="";if(Ot(t))e=t;else if(G(t))for(let s=0;s<t.length;s++){const i=ia(t[s]);i&&(e+=i+" ")}else if(wt(t))for(const s in t)t[s]&&(e+=s+" ");return e.trim()}const rd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ad=Zr(rd);function dl(t){return!!t||t===""}const hl=t=>!!(t&&t.__v_isRef===!0),nd=t=>Ot(t)?t:t==null?"":G(t)||wt(t)&&(t.toString===nl||!tt(t.toString))?hl(t)?nd(t.value):JSON.stringify(t,ul,2):String(t),ul=(t,e)=>hl(e)?ul(t,e.value):qs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((s,[i,o],r)=>(s[lr(i,r)+" =>"]=o,s),{})}:rl(e)?{[`Set(${e.size})`]:[...e.values()].map(s=>lr(s))}:ys(e)?lr(e):wt(e)&&!G(e)&&!No(e)?String(e):e,lr=(t,e="")=>{var s;return ys(t)?`Symbol(${(s=t.description)!=null?s:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let re;class ld{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=re,!e&&re&&(this.index=(re.scopes||(re.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].pause();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].resume();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].resume()}}run(e){if(this._active){const s=re;try{return re=this,e()}finally{re=s}}}on(){++this._on===1&&(this.prevScope=re,re=this)}off(){this._on>0&&--this._on===0&&(re=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let s,i;for(s=0,i=this.effects.length;s<i;s++)this.effects[s].stop();for(this.effects.length=0,s=0,i=this.cleanups.length;s<i;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,i=this.scopes.length;s<i;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function cd(){return re}let bt;const cr=new WeakSet;class pl{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,re&&re.active&&re.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,cr.has(this)&&(cr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ml(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qa(this),gl(this);const e=bt,s=$e;bt=this,$e=!0;try{return this.fn()}finally{bl(this),bt=e,$e=s,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)aa(e);this.deps=this.depsTail=void 0,qa(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?cr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zr(this)&&this.run()}get dirty(){return zr(this)}}let fl=0,xi,ki;function ml(t,e=!1){if(t.flags|=8,e){t.next=ki,ki=t;return}t.next=xi,xi=t}function oa(){fl++}function ra(){if(--fl>0)return;if(ki){let e=ki;for(ki=void 0;e;){const s=e.next;e.next=void 0,e.flags&=-9,e=s}}let t;for(;xi;){let e=xi;for(xi=void 0;e;){const s=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=s}}if(t)throw t}function gl(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function bl(t){let e,s=t.depsTail,i=s;for(;i;){const o=i.prevDep;i.version===-1?(i===s&&(s=o),aa(i),dd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=o}t.deps=e,t.depsTail=s}function zr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vl(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function vl(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Mi)||(t.globalVersion=Mi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!zr(t))))return;t.flags|=2;const e=t.dep,s=bt,i=$e;bt=t,$e=!0;try{gl(t);const o=t.fn(t._value);(e.version===0||ps(o,t._value))&&(t.flags|=128,t._value=o,e.version++)}catch(o){throw e.version++,o}finally{bt=s,$e=i,bl(t),t.flags&=-3}}function aa(t,e=!1){const{dep:s,prevSub:i,nextSub:o}=t;if(i&&(i.nextSub=o,t.prevSub=void 0),o&&(o.prevSub=i,t.nextSub=void 0),s.subs===t&&(s.subs=i,!i&&s.computed)){s.computed.flags&=-5;for(let r=s.computed.deps;r;r=r.nextDep)aa(r,!0)}!e&&!--s.sc&&s.map&&s.map.delete(s.key)}function dd(t){const{prevDep:e,nextDep:s}=t;e&&(e.nextDep=s,t.prevDep=void 0),s&&(s.prevDep=e,t.nextDep=void 0)}let $e=!0;const yl=[];function is(){yl.push($e),$e=!1}function os(){const t=yl.pop();$e=t===void 0?!0:t}function qa(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const s=bt;bt=void 0;try{e()}finally{bt=s}}}let Mi=0;class hd{constructor(e,s){this.sub=e,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class na{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!bt||!$e||bt===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==bt)s=this.activeLink=new hd(bt,this),bt.deps?(s.prevDep=bt.depsTail,bt.depsTail.nextDep=s,bt.depsTail=s):bt.deps=bt.depsTail=s,_l(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const i=s.nextDep;i.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=i),s.prevDep=bt.depsTail,s.nextDep=void 0,bt.depsTail.nextDep=s,bt.depsTail=s,bt.deps===s&&(bt.deps=i)}return s}trigger(e){this.version++,Mi++,this.notify(e)}notify(e){oa();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{ra()}}}function _l(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)_l(i)}const s=t.dep.subs;s!==t&&(t.prevSub=s,s&&(s.nextSub=t)),t.dep.subs=t}}const Er=new WeakMap,Os=Symbol(""),Tr=Symbol(""),Ri=Symbol("");function qt(t,e,s){if($e&&bt){let i=Er.get(t);i||Er.set(t,i=new Map);let o=i.get(s);o||(i.set(s,o=new na),o.map=i,o.key=s),o.track()}}function es(t,e,s,i,o,r){const a=Er.get(t);if(!a){Mi++;return}const l=c=>{c&&c.trigger()};if(oa(),e==="clear")a.forEach(l);else{const c=G(t),h=c&&ea(s);if(c&&s==="length"){const p=Number(i);a.forEach((u,f)=>{(f==="length"||f===Ri||!ys(f)&&f>=p)&&l(u)})}else switch((s!==void 0||a.has(void 0))&&l(a.get(s)),h&&l(a.get(Ri)),e){case"add":c?h&&l(a.get("length")):(l(a.get(Os)),qs(t)&&l(a.get(Tr)));break;case"delete":c||(l(a.get(Os)),qs(t)&&l(a.get(Tr)));break;case"set":qs(t)&&l(a.get(Os));break}}ra()}function Hs(t){const e=ct(t);return e===t?e:(qt(e,"iterate",Ri),xe(t)?e:e.map(Bt))}function Wo(t){return qt(t=ct(t),"iterate",Ri),t}const ud={__proto__:null,[Symbol.iterator](){return dr(this,Symbol.iterator,Bt)},concat(...t){return Hs(this).concat(...t.map(e=>G(e)?Hs(e):e))},entries(){return dr(this,"entries",t=>(t[1]=Bt(t[1]),t))},every(t,e){return Ze(this,"every",t,e,void 0,arguments)},filter(t,e){return Ze(this,"filter",t,e,s=>s.map(Bt),arguments)},find(t,e){return Ze(this,"find",t,e,Bt,arguments)},findIndex(t,e){return Ze(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ze(this,"findLast",t,e,Bt,arguments)},findLastIndex(t,e){return Ze(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ze(this,"forEach",t,e,void 0,arguments)},includes(...t){return hr(this,"includes",t)},indexOf(...t){return hr(this,"indexOf",t)},join(t){return Hs(this).join(t)},lastIndexOf(...t){return hr(this,"lastIndexOf",t)},map(t,e){return Ze(this,"map",t,e,void 0,arguments)},pop(){return hi(this,"pop")},push(...t){return hi(this,"push",t)},reduce(t,...e){return Ka(this,"reduce",t,e)},reduceRight(t,...e){return Ka(this,"reduceRight",t,e)},shift(){return hi(this,"shift")},some(t,e){return Ze(this,"some",t,e,void 0,arguments)},splice(...t){return hi(this,"splice",t)},toReversed(){return Hs(this).toReversed()},toSorted(t){return Hs(this).toSorted(t)},toSpliced(...t){return Hs(this).toSpliced(...t)},unshift(...t){return hi(this,"unshift",t)},values(){return dr(this,"values",Bt)}};function dr(t,e,s){const i=Wo(t),o=i[e]();return i!==t&&!xe(t)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.done||(r.value=s(r.value)),r}),o}const pd=Array.prototype;function Ze(t,e,s,i,o,r){const a=Wo(t),l=a!==t&&!xe(t),c=a[e];if(c!==pd[e]){const u=c.apply(t,r);return l?Bt(u):u}let h=s;a!==t&&(l?h=function(u,f){return s.call(this,Bt(u),f,t)}:s.length>2&&(h=function(u,f){return s.call(this,u,f,t)}));const p=c.call(a,h,i);return l&&o?o(p):p}function Ka(t,e,s,i){const o=Wo(t);let r=s;return o!==t&&(xe(t)?s.length>3&&(r=function(a,l,c){return s.call(this,a,l,c,t)}):r=function(a,l,c){return s.call(this,a,Bt(l),c,t)}),o[e](r,...i)}function hr(t,e,s){const i=ct(t);qt(i,"iterate",Ri);const o=i[e](...s);return(o===-1||o===!1)&&ha(s[0])?(s[0]=ct(s[0]),i[e](...s)):o}function hi(t,e,s=[]){is(),oa();const i=ct(t)[e].apply(t,s);return ra(),os(),i}const fd=Zr("__proto__,__v_isRef,__isVue"),wl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ys));function md(t){ys(t)||(t=String(t));const e=ct(this);return qt(e,"has",t),e.hasOwnProperty(t)}class xl{constructor(e=!1,s=!1){this._isReadonly=e,this._isShallow=s}get(e,s,i){if(s==="__v_skip")return e.__v_skip;const o=this._isReadonly,r=this._isShallow;if(s==="__v_isReactive")return!o;if(s==="__v_isReadonly")return o;if(s==="__v_isShallow")return r;if(s==="__v_raw")return i===(o?r?$d:Sl:r?$l:Cl).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=G(e);if(!o){let c;if(a&&(c=ud[s]))return c;if(s==="hasOwnProperty")return md}const l=Reflect.get(e,s,Kt(e)?e:i);if((ys(s)?wl.has(s):fd(s))||(o||qt(e,"get",s),r))return l;if(Kt(l)){const c=a&&ea(s)?l:l.value;return o&&wt(c)?Ir(c):c}return wt(l)?o?Ir(l):ca(l):l}}class kl extends xl{constructor(e=!1){super(!1,e)}set(e,s,i,o){let r=e[s];if(!this._isShallow){const c=fs(r);if(!xe(i)&&!fs(i)&&(r=ct(r),i=ct(i)),!G(e)&&Kt(r)&&!Kt(i))return c||(r.value=i),!0}const a=G(e)&&ea(s)?Number(s)<e.length:lt(e,s),l=Reflect.set(e,s,i,Kt(e)?e:o);return e===ct(o)&&(a?ps(i,r)&&es(e,"set",s,i):es(e,"add",s,i)),l}deleteProperty(e,s){const i=lt(e,s);e[s];const o=Reflect.deleteProperty(e,s);return o&&i&&es(e,"delete",s,void 0),o}has(e,s){const i=Reflect.has(e,s);return(!ys(s)||!wl.has(s))&&qt(e,"has",s),i}ownKeys(e){return qt(e,"iterate",G(e)?"length":Os),Reflect.ownKeys(e)}}class gd extends xl{constructor(e=!1){super(!0,e)}set(e,s){return!0}deleteProperty(e,s){return!0}}const bd=new kl,vd=new gd,yd=new kl(!0);const Or=t=>t,ro=t=>Reflect.getPrototypeOf(t);function _d(t,e,s){return function(...i){const o=this.__v_raw,r=ct(o),a=qs(r),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=o[t](...i),p=s?Or:e?Co:Bt;return!e&&qt(r,"iterate",c?Tr:Os),{next(){const{value:u,done:f}=h.next();return f?{value:u,done:f}:{value:l?[p(u[0]),p(u[1])]:p(u),done:f}},[Symbol.iterator](){return this}}}}function ao(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function wd(t,e){const s={get(o){const r=this.__v_raw,a=ct(r),l=ct(o);t||(ps(o,l)&&qt(a,"get",o),qt(a,"get",l));const{has:c}=ro(a),h=e?Or:t?Co:Bt;if(c.call(a,o))return h(r.get(o));if(c.call(a,l))return h(r.get(l));r!==a&&r.get(o)},get size(){const o=this.__v_raw;return!t&&qt(ct(o),"iterate",Os),o.size},has(o){const r=this.__v_raw,a=ct(r),l=ct(o);return t||(ps(o,l)&&qt(a,"has",o),qt(a,"has",l)),o===l?r.has(o):r.has(o)||r.has(l)},forEach(o,r){const a=this,l=a.__v_raw,c=ct(l),h=e?Or:t?Co:Bt;return!t&&qt(c,"iterate",Os),l.forEach((p,u)=>o.call(r,h(p),h(u),a))}};return Dt(s,t?{add:ao("add"),set:ao("set"),delete:ao("delete"),clear:ao("clear")}:{add(o){!e&&!xe(o)&&!fs(o)&&(o=ct(o));const r=ct(this);return ro(r).has.call(r,o)||(r.add(o),es(r,"add",o,o)),this},set(o,r){!e&&!xe(r)&&!fs(r)&&(r=ct(r));const a=ct(this),{has:l,get:c}=ro(a);let h=l.call(a,o);h||(o=ct(o),h=l.call(a,o));const p=c.call(a,o);return a.set(o,r),h?ps(r,p)&&es(a,"set",o,r):es(a,"add",o,r),this},delete(o){const r=ct(this),{has:a,get:l}=ro(r);let c=a.call(r,o);c||(o=ct(o),c=a.call(r,o)),l&&l.call(r,o);const h=r.delete(o);return c&&es(r,"delete",o,void 0),h},clear(){const o=ct(this),r=o.size!==0,a=o.clear();return r&&es(o,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{s[o]=_d(o,t,e)}),s}function la(t,e){const s=wd(t,e);return(i,o,r)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?i:Reflect.get(lt(s,o)&&o in i?s:i,o,r)}const xd={get:la(!1,!1)},kd={get:la(!1,!0)},Cd={get:la(!0,!1)};const Cl=new WeakMap,$l=new WeakMap,Sl=new WeakMap,$d=new WeakMap;function Sd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ad(t){return t.__v_skip||!Object.isExtensible(t)?0:Sd(Qc(t))}function ca(t){return fs(t)?t:da(t,!1,bd,xd,Cl)}function zd(t){return da(t,!1,yd,kd,$l)}function Ir(t){return da(t,!0,vd,Cd,Sl)}function da(t,e,s,i,o){if(!wt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=Ad(t);if(r===0)return t;const a=o.get(t);if(a)return a;const l=new Proxy(t,r===2?i:s);return o.set(t,l),l}function Ks(t){return fs(t)?Ks(t.__v_raw):!!(t&&t.__v_isReactive)}function fs(t){return!!(t&&t.__v_isReadonly)}function xe(t){return!!(t&&t.__v_isShallow)}function ha(t){return t?!!t.__v_raw:!1}function ct(t){const e=t&&t.__v_raw;return e?ct(e):t}function Ed(t){return!lt(t,"__v_skip")&&Object.isExtensible(t)&&cl(t,"__v_skip",!0),t}const Bt=t=>wt(t)?ca(t):t,Co=t=>wt(t)?Ir(t):t;function Kt(t){return t?t.__v_isRef===!0:!1}function e0(t){return Al(t,!1)}function s0(t){return Al(t,!0)}function Al(t,e){return Kt(t)?t:new Td(t,e)}class Td{constructor(e,s){this.dep=new na,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?e:ct(e),this._value=s?e:Bt(e),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(e){const s=this._rawValue,i=this.__v_isShallow||xe(e)||fs(e);e=i?e:ct(e),ps(e,s)&&(this._rawValue=e,this._value=i?e:Bt(e),this.dep.trigger())}}function zl(t){return Kt(t)?t.value:t}const Od={get:(t,e,s)=>e==="__v_raw"?t:zl(Reflect.get(t,e,s)),set:(t,e,s,i)=>{const o=t[e];return Kt(o)&&!Kt(s)?(o.value=s,!0):Reflect.set(t,e,s,i)}};function El(t){return Ks(t)?t:new Proxy(t,Od)}class Id{constructor(e,s,i){this.fn=e,this.setter=s,this._value=void 0,this.dep=new na(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&bt!==this)return ml(this,!0),!0}get value(){const e=this.dep.track();return vl(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Pd(t,e,s=!1){let i,o;return tt(t)?i=t:(i=t.get,o=t.set),new Id(i,o,s)}const no={},$o=new WeakMap;let Ss;function Dd(t,e=!1,s=Ss){if(s){let i=$o.get(s);i||$o.set(s,i=[]),i.push(t)}}function Ld(t,e,s=vt){const{immediate:i,deep:o,once:r,scheduler:a,augmentJob:l,call:c}=s,h=y=>o?y:xe(y)||o===!1||o===0?ds(y,1):ds(y);let p,u,f,m,b=!1,_=!1;if(Kt(t)?(u=()=>t.value,b=xe(t)):Ks(t)?(u=()=>h(t),b=!0):G(t)?(_=!0,b=t.some(y=>Ks(y)||xe(y)),u=()=>t.map(y=>{if(Kt(y))return y.value;if(Ks(y))return h(y);if(tt(y))return c?c(y,2):y()})):tt(t)?e?u=c?()=>c(t,2):t:u=()=>{if(f){is();try{f()}finally{os()}}const y=Ss;Ss=p;try{return c?c(t,3,[m]):t(m)}finally{Ss=y}}:u=Ue,e&&o){const y=u,k=o===!0?1/0:o;u=()=>ds(y(),k)}const O=cd(),T=()=>{p.stop(),O&&O.active&&ta(O.effects,p)};if(r&&e){const y=e;e=(...k)=>{y(...k),T()}}let x=_?new Array(t.length).fill(no):no;const A=y=>{if(!(!(p.flags&1)||!p.dirty&&!y))if(e){const k=p.run();if(o||b||(_?k.some((V,K)=>ps(V,x[K])):ps(k,x))){f&&f();const V=Ss;Ss=p;try{const K=[k,x===no?void 0:_&&x[0]===no?[]:x,m];x=k,c?c(e,3,K):e(...K)}finally{Ss=V}}}else p.run()};return l&&l(A),p=new pl(u),p.scheduler=a?()=>a(A,!1):A,m=y=>Dd(y,!1,p),f=p.onStop=()=>{const y=$o.get(p);if(y){if(c)c(y,4);else for(const k of y)k();$o.delete(p)}},e?i?A(!0):x=p.run():a?a(A.bind(null,!0),!0):p.run(),T.pause=p.pause.bind(p),T.resume=p.resume.bind(p),T.stop=T,T}function ds(t,e=1/0,s){if(e<=0||!wt(t)||t.__v_skip||(s=s||new Map,(s.get(t)||0)>=e))return t;if(s.set(t,e),e--,Kt(t))ds(t.value,e,s);else if(G(t))for(let i=0;i<t.length;i++)ds(t[i],e,s);else if(rl(t)||qs(t))t.forEach(i=>{ds(i,e,s)});else if(No(t)){for(const i in t)ds(t[i],e,s);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ds(t[i],e,s)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wi(t,e,s,i){try{return i?t(...i):t()}catch(o){qo(o,e,s)}}function We(t,e,s,i){if(tt(t)){const o=Wi(t,e,s,i);return o&&al(o)&&o.catch(r=>{qo(r,e,s)}),o}if(G(t)){const o=[];for(let r=0;r<t.length;r++)o.push(We(t[r],e,s,i));return o}}function qo(t,e,s,i=!0){const o=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||vt;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${s}`;for(;l;){const p=l.ec;if(p){for(let u=0;u<p.length;u++)if(p[u](t,c,h)===!1)return}l=l.parent}if(r){is(),Wi(r,null,10,[t,c,h]),os();return}}Md(t,s,o,i,a)}function Md(t,e,s,i=!0,o=!1){if(o)throw t;console.error(t)}const Zt=[];let Ve=-1;const Ys=[];let ls=null,Ns=0;const Tl=Promise.resolve();let So=null;function Ol(t){const e=So||Tl;return t?e.then(this?t.bind(this):t):e}function Rd(t){let e=Ve+1,s=Zt.length;for(;e<s;){const i=e+s>>>1,o=Zt[i],r=Fi(o);r<t||r===t&&o.flags&2?e=i+1:s=i}return e}function ua(t){if(!(t.flags&1)){const e=Fi(t),s=Zt[Zt.length-1];!s||!(t.flags&2)&&e>=Fi(s)?Zt.push(t):Zt.splice(Rd(e),0,t),t.flags|=1,Il()}}function Il(){So||(So=Tl.then(Dl))}function Fd(t){G(t)?Ys.push(...t):ls&&t.id===-1?ls.splice(Ns+1,0,t):t.flags&1||(Ys.push(t),t.flags|=1),Il()}function Ya(t,e,s=Ve+1){for(;s<Zt.length;s++){const i=Zt[s];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Zt.splice(s,1),s--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Pl(t){if(Ys.length){const e=[...new Set(Ys)].sort((s,i)=>Fi(s)-Fi(i));if(Ys.length=0,ls){ls.push(...e);return}for(ls=e,Ns=0;Ns<ls.length;Ns++){const s=ls[Ns];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}ls=null,Ns=0}}const Fi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Dl(t){try{for(Ve=0;Ve<Zt.length;Ve++){const e=Zt[Ve];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ve<Zt.length;Ve++){const e=Zt[Ve];e&&(e.flags&=-2)}Ve=-1,Zt.length=0,Pl(),So=null,(Zt.length||Ys.length)&&Dl()}}let Ne=null,Ll=null;function Ao(t){const e=Ne;return Ne=t,Ll=t&&t.type.__scopeId||null,e}function Vd(t,e=Ne,s){if(!e||t._n)return t;const i=(...o)=>{i._d&&To(-1);const r=Ao(e);let a;try{a=t(...o)}finally{Ao(r),i._d&&To(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ks(t,e,s,i){const o=t.dirs,r=e&&e.dirs;for(let a=0;a<o.length;a++){const l=o[a];r&&(l.oldValue=r[a].value);let c=l.dir[i];c&&(is(),We(c,s,8,[t.el,l,t,e]),os())}}const Bd=Symbol("_vte"),Hd=t=>t.__isTeleport,Nd=Symbol("_leaveCb");function pa(t,e){t.shapeFlag&6&&t.component?(t.transition=e,pa(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ud(t,e){return tt(t)?Dt({name:t.name},e,{setup:t}):t}function Ml(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const zo=new WeakMap;function Ci(t,e,s,i,o=!1){if(G(t)){t.forEach((b,_)=>Ci(b,e&&(G(e)?e[_]:e),s,i,o));return}if($i(i)&&!o){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ci(t,e,s,i.component.subTree);return}const r=i.shapeFlag&4?ba(i.component):i.el,a=o?null:r,{i:l,r:c}=t,h=e&&e.r,p=l.refs===vt?l.refs={}:l.refs,u=l.setupState,f=ct(u),m=u===vt?ol:b=>lt(f,b);if(h!=null&&h!==c){if(Xa(e),Ot(h))p[h]=null,m(h)&&(u[h]=null);else if(Kt(h)){h.value=null;const b=e;b.k&&(p[b.k]=null)}}if(tt(c))Wi(c,l,12,[a,p]);else{const b=Ot(c),_=Kt(c);if(b||_){const O=()=>{if(t.f){const T=b?m(c)?u[c]:p[c]:c.value;if(o)G(T)&&ta(T,r);else if(G(T))T.includes(r)||T.push(r);else if(b)p[c]=[r],m(c)&&(u[c]=p[c]);else{const x=[r];c.value=x,t.k&&(p[t.k]=x)}}else b?(p[c]=a,m(c)&&(u[c]=a)):_&&(c.value=a,t.k&&(p[t.k]=a))};if(a){const T=()=>{O(),zo.delete(t)};T.id=-1,zo.set(t,T),de(T,s)}else Xa(t),O()}}}function Xa(t){const e=zo.get(t);e&&(e.flags|=8,zo.delete(t))}jo().requestIdleCallback;jo().cancelIdleCallback;const $i=t=>!!t.type.__asyncLoader,Rl=t=>t.type.__isKeepAlive;function jd(t,e){Fl(t,"a",e)}function Wd(t,e){Fl(t,"da",e)}function Fl(t,e,s=Jt){const i=t.__wdc||(t.__wdc=()=>{let o=s;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(Ko(e,i,s),s){let o=s.parent;for(;o&&o.parent;)Rl(o.parent.vnode)&&qd(i,e,s,o),o=o.parent}}function qd(t,e,s,i){const o=Ko(e,t,i,!0);Vl(()=>{ta(i[e],o)},s)}function Ko(t,e,s=Jt,i=!1){if(s){const o=s[t]||(s[t]=[]),r=e.__weh||(e.__weh=(...a)=>{is();const l=qi(s),c=We(e,s,t,a);return l(),os(),c});return i?o.unshift(r):o.push(r),r}}const rs=t=>(e,s=Jt)=>{(!Bi||t==="sp")&&Ko(t,(...i)=>e(...i),s)},Kd=rs("bm"),Yd=rs("m"),Xd=rs("bu"),Gd=rs("u"),Qd=rs("bum"),Vl=rs("um"),Zd=rs("sp"),Jd=rs("rtg"),th=rs("rtc");function eh(t,e=Jt){Ko("ec",t,e)}const sh=Symbol.for("v-ndc");function i0(t,e,s,i){let o;const r=s,a=G(t);if(a||Ot(t)){const l=a&&Ks(t);let c=!1,h=!1;l&&(c=!xe(t),h=fs(t),t=Wo(t)),o=new Array(t.length);for(let p=0,u=t.length;p<u;p++)o[p]=e(c?h?Co(Bt(t[p])):Bt(t[p]):t[p],p,void 0,r)}else if(typeof t=="number"){o=new Array(t);for(let l=0;l<t;l++)o[l]=e(l+1,l,void 0,r)}else if(wt(t))if(t[Symbol.iterator])o=Array.from(t,(l,c)=>e(l,c,void 0,r));else{const l=Object.keys(t);o=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const p=l[c];o[c]=e(t[p],p,c,r)}}else o=[];return o}const Pr=t=>t?ac(t)?ba(t):Pr(t.parent):null,Si=Dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pr(t.parent),$root:t=>Pr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Hl(t),$forceUpdate:t=>t.f||(t.f=()=>{ua(t.update)}),$nextTick:t=>t.n||(t.n=Ol.bind(t.proxy)),$watch:t=>Ch.bind(t)}),ur=(t,e)=>t!==vt&&!t.__isScriptSetup&&lt(t,e),ih={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:s,setupState:i,data:o,props:r,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return o[e];case 4:return s[e];case 3:return r[e]}else{if(ur(i,e))return a[e]=1,i[e];if(o!==vt&&lt(o,e))return a[e]=2,o[e];if((h=t.propsOptions[0])&&lt(h,e))return a[e]=3,r[e];if(s!==vt&&lt(s,e))return a[e]=4,s[e];Dr&&(a[e]=0)}}const p=Si[e];let u,f;if(p)return e==="$attrs"&&qt(t.attrs,"get",""),p(t);if((u=l.__cssModules)&&(u=u[e]))return u;if(s!==vt&&lt(s,e))return a[e]=4,s[e];if(f=c.config.globalProperties,lt(f,e))return f[e]},set({_:t},e,s){const{data:i,setupState:o,ctx:r}=t;return ur(o,e)?(o[e]=s,!0):i!==vt&&lt(i,e)?(i[e]=s,!0):lt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=s,!0)},has({_:{data:t,setupState:e,accessCache:s,ctx:i,appContext:o,propsOptions:r,type:a}},l){let c,h;return!!(s[l]||t!==vt&&l[0]!=="$"&&lt(t,l)||ur(e,l)||(c=r[0])&&lt(c,l)||lt(i,l)||lt(Si,l)||lt(o.config.globalProperties,l)||(h=a.__cssModules)&&h[l])},defineProperty(t,e,s){return s.get!=null?t._.accessCache[e]=0:lt(s,"value")&&this.set(t,e,s.value,null),Reflect.defineProperty(t,e,s)}};function Ga(t){return G(t)?t.reduce((e,s)=>(e[s]=null,e),{}):t}let Dr=!0;function oh(t){const e=Hl(t),s=t.proxy,i=t.ctx;Dr=!1,e.beforeCreate&&Qa(e.beforeCreate,t,"bc");const{data:o,computed:r,methods:a,watch:l,provide:c,inject:h,created:p,beforeMount:u,mounted:f,beforeUpdate:m,updated:b,activated:_,deactivated:O,beforeDestroy:T,beforeUnmount:x,destroyed:A,unmounted:y,render:k,renderTracked:V,renderTriggered:K,errorCaptured:Z,serverPrefetch:j,expose:F,inheritAttrs:yt,components:_t,directives:Tt,filters:xt}=e;if(h&&rh(h,i,null),a)for(const it in a){const et=a[it];tt(et)&&(i[it]=et.bind(s))}if(o){const it=o.call(s,s);wt(it)&&(t.data=ca(it))}if(Dr=!0,r)for(const it in r){const et=r[it],Wt=tt(et)?et.bind(s,s):tt(et.get)?et.get.bind(s,s):Ue,Bs=!tt(et)&&tt(et.set)?et.set.bind(s):Ue,xs=Xh({get:Wt,set:Bs});Object.defineProperty(i,it,{enumerable:!0,configurable:!0,get:()=>xs.value,set:De=>xs.value=De})}if(l)for(const it in l)Bl(l[it],i,s,it);if(c){const it=tt(c)?c.call(s):c;Reflect.ownKeys(it).forEach(et=>{hh(et,it[et])})}p&&Qa(p,t,"c");function mt(it,et){G(et)?et.forEach(Wt=>it(Wt.bind(s))):et&&it(et.bind(s))}if(mt(Kd,u),mt(Yd,f),mt(Xd,m),mt(Gd,b),mt(jd,_),mt(Wd,O),mt(eh,Z),mt(th,V),mt(Jd,K),mt(Qd,x),mt(Vl,y),mt(Zd,j),G(F))if(F.length){const it=t.exposed||(t.exposed={});F.forEach(et=>{Object.defineProperty(it,et,{get:()=>s[et],set:Wt=>s[et]=Wt,enumerable:!0})})}else t.exposed||(t.exposed={});k&&t.render===Ue&&(t.render=k),yt!=null&&(t.inheritAttrs=yt),_t&&(t.components=_t),Tt&&(t.directives=Tt),j&&Ml(t)}function rh(t,e,s=Ue){G(t)&&(t=Lr(t));for(const i in t){const o=t[i];let r;wt(o)?"default"in o?r=go(o.from||i,o.default,!0):r=go(o.from||i):r=go(o),Kt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function Qa(t,e,s){We(G(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,s)}function Bl(t,e,s,i){let o=i.includes(".")?tc(s,i):()=>s[i];if(Ot(t)){const r=e[t];tt(r)&&fr(o,r)}else if(tt(t))fr(o,t.bind(s));else if(wt(t))if(G(t))t.forEach(r=>Bl(r,e,s,i));else{const r=tt(t.handler)?t.handler.bind(s):e[t.handler];tt(r)&&fr(o,r,t)}}function Hl(t){const e=t.type,{mixins:s,extends:i}=e,{mixins:o,optionsCache:r,config:{optionMergeStrategies:a}}=t.appContext,l=r.get(e);let c;return l?c=l:!o.length&&!s&&!i?c=e:(c={},o.length&&o.forEach(h=>Eo(c,h,a,!0)),Eo(c,e,a)),wt(e)&&r.set(e,c),c}function Eo(t,e,s,i=!1){const{mixins:o,extends:r}=e;r&&Eo(t,r,s,!0),o&&o.forEach(a=>Eo(t,a,s,!0));for(const a in e)if(!(i&&a==="expose")){const l=ah[a]||s&&s[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const ah={data:Za,props:Ja,emits:Ja,methods:_i,computed:_i,beforeCreate:Qt,created:Qt,beforeMount:Qt,mounted:Qt,beforeUpdate:Qt,updated:Qt,beforeDestroy:Qt,beforeUnmount:Qt,destroyed:Qt,unmounted:Qt,activated:Qt,deactivated:Qt,errorCaptured:Qt,serverPrefetch:Qt,components:_i,directives:_i,watch:lh,provide:Za,inject:nh};function Za(t,e){return e?t?function(){return Dt(tt(t)?t.call(this,this):t,tt(e)?e.call(this,this):e)}:e:t}function nh(t,e){return _i(Lr(t),Lr(e))}function Lr(t){if(G(t)){const e={};for(let s=0;s<t.length;s++)e[t[s]]=t[s];return e}return t}function Qt(t,e){return t?[...new Set([].concat(t,e))]:e}function _i(t,e){return t?Dt(Object.create(null),t,e):e}function Ja(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:Dt(Object.create(null),Ga(t),Ga(e??{})):e}function lh(t,e){if(!t)return e;if(!e)return t;const s=Dt(Object.create(null),t);for(const i in e)s[i]=Qt(t[i],e[i]);return s}function Nl(){return{app:null,config:{isNativeTag:ol,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ch=0;function dh(t,e){return function(i,o=null){tt(i)||(i=Dt({},i)),o!=null&&!wt(o)&&(o=null);const r=Nl(),a=new WeakSet,l=[];let c=!1;const h=r.app={_uid:ch++,_component:i,_props:o,_container:null,_context:r,_instance:null,version:Gh,get config(){return r.config},set config(p){},use(p,...u){return a.has(p)||(p&&tt(p.install)?(a.add(p),p.install(h,...u)):tt(p)&&(a.add(p),p(h,...u))),h},mixin(p){return r.mixins.includes(p)||r.mixins.push(p),h},component(p,u){return u?(r.components[p]=u,h):r.components[p]},directive(p,u){return u?(r.directives[p]=u,h):r.directives[p]},mount(p,u,f){if(!c){const m=h._ceVNode||te(i,o);return m.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(m,p,f),c=!0,h._container=p,p.__vue_app__=h,ba(m.component)}},onUnmount(p){l.push(p)},unmount(){c&&(We(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(p,u){return r.provides[p]=u,h},runWithContext(p){const u=Xs;Xs=h;try{return p()}finally{Xs=u}}};return h}}let Xs=null;function hh(t,e){if(Jt){let s=Jt.provides;const i=Jt.parent&&Jt.parent.provides;i===s&&(s=Jt.provides=Object.create(i)),s[t]=e}}function go(t,e,s=!1){const i=Uh();if(i||Xs){let o=Xs?Xs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(o&&t in o)return o[t];if(arguments.length>1)return s&&tt(e)?e.call(i&&i.proxy):e}}const Ul={},jl=()=>Object.create(Ul),Wl=t=>Object.getPrototypeOf(t)===Ul;function uh(t,e,s,i=!1){const o={},r=jl();t.propsDefaults=Object.create(null),ql(t,e,o,r);for(const a in t.propsOptions[0])a in o||(o[a]=void 0);s?t.props=i?o:zd(o):t.type.props?t.props=o:t.props=r,t.attrs=r}function ph(t,e,s,i){const{props:o,attrs:r,vnode:{patchFlag:a}}=t,l=ct(o),[c]=t.propsOptions;let h=!1;if((i||a>0)&&!(a&16)){if(a&8){const p=t.vnode.dynamicProps;for(let u=0;u<p.length;u++){let f=p[u];if(Yo(t.emitsOptions,f))continue;const m=e[f];if(c)if(lt(r,f))m!==r[f]&&(r[f]=m,h=!0);else{const b=Ce(f);o[b]=Mr(c,l,b,m,t,!1)}else m!==r[f]&&(r[f]=m,h=!0)}}}else{ql(t,e,o,r)&&(h=!0);let p;for(const u in l)(!e||!lt(e,u)&&((p=we(u))===u||!lt(e,p)))&&(c?s&&(s[u]!==void 0||s[p]!==void 0)&&(o[u]=Mr(c,l,u,void 0,t,!0)):delete o[u]);if(r!==l)for(const u in r)(!e||!lt(e,u))&&(delete r[u],h=!0)}h&&es(t.attrs,"set","")}function ql(t,e,s,i){const[o,r]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(wi(c))continue;const h=e[c];let p;o&&lt(o,p=Ce(c))?!r||!r.includes(p)?s[p]=h:(l||(l={}))[p]=h:Yo(t.emitsOptions,c)||(!(c in i)||h!==i[c])&&(i[c]=h,a=!0)}if(r){const c=ct(s),h=l||vt;for(let p=0;p<r.length;p++){const u=r[p];s[u]=Mr(o,c,u,h[u],t,!lt(h,u))}}return a}function Mr(t,e,s,i,o,r){const a=t[s];if(a!=null){const l=lt(a,"default");if(l&&i===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&tt(c)){const{propsDefaults:h}=o;if(s in h)i=h[s];else{const p=qi(o);i=h[s]=c.call(null,e),p()}}else i=c;o.ce&&o.ce._setProp(s,i)}a[0]&&(r&&!l?i=!1:a[1]&&(i===""||i===we(s))&&(i=!0))}return i}const fh=new WeakMap;function Kl(t,e,s=!1){const i=s?fh:e.propsCache,o=i.get(t);if(o)return o;const r=t.props,a={},l=[];let c=!1;if(!tt(t)){const p=u=>{c=!0;const[f,m]=Kl(u,e,!0);Dt(a,f),m&&l.push(...m)};!s&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!r&&!c)return wt(t)&&i.set(t,Ws),Ws;if(G(r))for(let p=0;p<r.length;p++){const u=Ce(r[p]);tn(u)&&(a[u]=vt)}else if(r)for(const p in r){const u=Ce(p);if(tn(u)){const f=r[p],m=a[u]=G(f)||tt(f)?{type:f}:Dt({},f),b=m.type;let _=!1,O=!0;if(G(b))for(let T=0;T<b.length;++T){const x=b[T],A=tt(x)&&x.name;if(A==="Boolean"){_=!0;break}else A==="String"&&(O=!1)}else _=tt(b)&&b.name==="Boolean";m[0]=_,m[1]=O,(_||lt(m,"default"))&&l.push(u)}}const h=[a,l];return wt(t)&&i.set(t,h),h}function tn(t){return t[0]!=="$"&&!wi(t)}const fa=t=>t==="_"||t==="_ctx"||t==="$stable",ma=t=>G(t)?t.map(Be):[Be(t)],mh=(t,e,s)=>{if(e._n)return e;const i=Vd((...o)=>ma(e(...o)),s);return i._c=!1,i},Yl=(t,e,s)=>{const i=t._ctx;for(const o in t){if(fa(o))continue;const r=t[o];if(tt(r))e[o]=mh(o,r,i);else if(r!=null){const a=ma(r);e[o]=()=>a}}},Xl=(t,e)=>{const s=ma(e);t.slots.default=()=>s},Gl=(t,e,s)=>{for(const i in e)(s||!fa(i))&&(t[i]=e[i])},gh=(t,e,s)=>{const i=t.slots=jl();if(t.vnode.shapeFlag&32){const o=e._;o?(Gl(i,e,s),s&&cl(i,"_",o,!0)):Yl(e,i)}else e&&Xl(t,e)},bh=(t,e,s)=>{const{vnode:i,slots:o}=t;let r=!0,a=vt;if(i.shapeFlag&32){const l=e._;l?s&&l===1?r=!1:Gl(o,e,s):(r=!e.$stable,Yl(e,o)),a=e}else e&&(Xl(t,e),a={default:1});if(r)for(const l in o)!fa(l)&&a[l]==null&&delete o[l]},de=Ih;function vh(t){return yh(t)}function yh(t,e){const s=jo();s.__VUE__=!0;const{insert:i,remove:o,patchProp:r,createElement:a,createText:l,createComment:c,setText:h,setElementText:p,parentNode:u,nextSibling:f,setScopeId:m=Ue,insertStaticContent:b}=t,_=(g,v,w,z=null,$=null,S=null,M=void 0,D=null,P=!!v.dynamicChildren)=>{if(g===v)return;g&&!ui(g,v)&&(z=oo(g),De(g,$,S,!0),g=null),v.patchFlag===-2&&(P=!1,v.dynamicChildren=null);const{type:E,ref:X,shapeFlag:R}=v;switch(E){case Xo:O(g,v,w,z);break;case ms:T(g,v,w,z);break;case bo:g==null&&x(v,w,z,M);break;case ts:_t(g,v,w,z,$,S,M,D,P);break;default:R&1?k(g,v,w,z,$,S,M,D,P):R&6?Tt(g,v,w,z,$,S,M,D,P):(R&64||R&128)&&E.process(g,v,w,z,$,S,M,D,P,ci)}X!=null&&$?Ci(X,g&&g.ref,S,v||g,!v):X==null&&g&&g.ref!=null&&Ci(g.ref,null,S,g,!0)},O=(g,v,w,z)=>{if(g==null)i(v.el=l(v.children),w,z);else{const $=v.el=g.el;v.children!==g.children&&h($,v.children)}},T=(g,v,w,z)=>{g==null?i(v.el=c(v.children||""),w,z):v.el=g.el},x=(g,v,w,z)=>{[g.el,g.anchor]=b(g.children,v,w,z,g.el,g.anchor)},A=({el:g,anchor:v},w,z)=>{let $;for(;g&&g!==v;)$=f(g),i(g,w,z),g=$;i(v,w,z)},y=({el:g,anchor:v})=>{let w;for(;g&&g!==v;)w=f(g),o(g),g=w;o(v)},k=(g,v,w,z,$,S,M,D,P)=>{v.type==="svg"?M="svg":v.type==="math"&&(M="mathml"),g==null?V(v,w,z,$,S,M,D,P):j(g,v,$,S,M,D,P)},V=(g,v,w,z,$,S,M,D)=>{let P,E;const{props:X,shapeFlag:R,transition:Y,dirs:Q}=g;if(P=g.el=a(g.type,S,X&&X.is,X),R&8?p(P,g.children):R&16&&Z(g.children,P,null,z,$,pr(g,S),M,D),Q&&ks(g,null,z,"created"),K(P,g,g.scopeId,M,z),X){for(const gt in X)gt!=="value"&&!wi(gt)&&r(P,gt,null,X[gt],S,z);"value"in X&&r(P,"value",null,X.value,S),(E=X.onVnodeBeforeMount)&&Fe(E,z,g)}Q&&ks(g,null,z,"beforeMount");const rt=_h($,Y);rt&&Y.beforeEnter(P),i(P,v,w),((E=X&&X.onVnodeMounted)||rt||Q)&&de(()=>{E&&Fe(E,z,g),rt&&Y.enter(P),Q&&ks(g,null,z,"mounted")},$)},K=(g,v,w,z,$)=>{if(w&&m(g,w),z)for(let S=0;S<z.length;S++)m(g,z[S]);if($){let S=$.subTree;if(v===S||sc(S.type)&&(S.ssContent===v||S.ssFallback===v)){const M=$.vnode;K(g,M,M.scopeId,M.slotScopeIds,$.parent)}}},Z=(g,v,w,z,$,S,M,D,P=0)=>{for(let E=P;E<g.length;E++){const X=g[E]=D?cs(g[E]):Be(g[E]);_(null,X,v,w,z,$,S,M,D)}},j=(g,v,w,z,$,S,M)=>{const D=v.el=g.el;let{patchFlag:P,dynamicChildren:E,dirs:X}=v;P|=g.patchFlag&16;const R=g.props||vt,Y=v.props||vt;let Q;if(w&&Cs(w,!1),(Q=Y.onVnodeBeforeUpdate)&&Fe(Q,w,v,g),X&&ks(v,g,w,"beforeUpdate"),w&&Cs(w,!0),(R.innerHTML&&Y.innerHTML==null||R.textContent&&Y.textContent==null)&&p(D,""),E?F(g.dynamicChildren,E,D,w,z,pr(v,$),S):M||et(g,v,D,null,w,z,pr(v,$),S,!1),P>0){if(P&16)yt(D,R,Y,w,$);else if(P&2&&R.class!==Y.class&&r(D,"class",null,Y.class,$),P&4&&r(D,"style",R.style,Y.style,$),P&8){const rt=v.dynamicProps;for(let gt=0;gt<rt.length;gt++){const pt=rt[gt],ie=R[pt],oe=Y[pt];(oe!==ie||pt==="value")&&r(D,pt,ie,oe,$,w)}}P&1&&g.children!==v.children&&p(D,v.children)}else!M&&E==null&&yt(D,R,Y,w,$);((Q=Y.onVnodeUpdated)||X)&&de(()=>{Q&&Fe(Q,w,v,g),X&&ks(v,g,w,"updated")},z)},F=(g,v,w,z,$,S,M)=>{for(let D=0;D<v.length;D++){const P=g[D],E=v[D],X=P.el&&(P.type===ts||!ui(P,E)||P.shapeFlag&198)?u(P.el):w;_(P,E,X,null,z,$,S,M,!0)}},yt=(g,v,w,z,$)=>{if(v!==w){if(v!==vt)for(const S in v)!wi(S)&&!(S in w)&&r(g,S,v[S],null,$,z);for(const S in w){if(wi(S))continue;const M=w[S],D=v[S];M!==D&&S!=="value"&&r(g,S,D,M,$,z)}"value"in w&&r(g,"value",v.value,w.value,$)}},_t=(g,v,w,z,$,S,M,D,P)=>{const E=v.el=g?g.el:l(""),X=v.anchor=g?g.anchor:l("");let{patchFlag:R,dynamicChildren:Y,slotScopeIds:Q}=v;Q&&(D=D?D.concat(Q):Q),g==null?(i(E,w,z),i(X,w,z),Z(v.children||[],w,X,$,S,M,D,P)):R>0&&R&64&&Y&&g.dynamicChildren?(F(g.dynamicChildren,Y,w,$,S,M,D),(v.key!=null||$&&v===$.subTree)&&Ql(g,v,!0)):et(g,v,w,X,$,S,M,D,P)},Tt=(g,v,w,z,$,S,M,D,P)=>{v.slotScopeIds=D,g==null?v.shapeFlag&512?$.ctx.activate(v,w,z,M,P):xt(v,w,z,$,S,M,P):Gt(g,v,P)},xt=(g,v,w,z,$,S,M)=>{const D=g.component=Nh(g,z,$);if(Rl(g)&&(D.ctx.renderer=ci),jh(D,!1,M),D.asyncDep){if($&&$.registerDep(D,mt,M),!g.el){const P=D.subTree=te(ms);T(null,P,v,w),g.placeholder=P.el}}else mt(D,g,v,w,$,S,M)},Gt=(g,v,w)=>{const z=v.component=g.component;if(Th(g,v,w))if(z.asyncDep&&!z.asyncResolved){it(z,v,w);return}else z.next=v,z.update();else v.el=g.el,z.vnode=v},mt=(g,v,w,z,$,S,M)=>{const D=()=>{if(g.isMounted){let{next:R,bu:Y,u:Q,parent:rt,vnode:gt}=g;{const Me=Zl(g);if(Me){R&&(R.el=gt.el,it(g,R,M)),Me.asyncDep.then(()=>{g.isUnmounted||D()});return}}let pt=R,ie;Cs(g,!1),R?(R.el=gt.el,it(g,R,M)):R=gt,Y&&nr(Y),(ie=R.props&&R.props.onVnodeBeforeUpdate)&&Fe(ie,rt,R,gt),Cs(g,!0);const oe=sn(g),Le=g.subTree;g.subTree=oe,_(Le,oe,u(Le.el),oo(Le),g,$,S),R.el=oe.el,pt===null&&Oh(g,oe.el),Q&&de(Q,$),(ie=R.props&&R.props.onVnodeUpdated)&&de(()=>Fe(ie,rt,R,gt),$)}else{let R;const{el:Y,props:Q}=v,{bm:rt,m:gt,parent:pt,root:ie,type:oe}=g,Le=$i(v);Cs(g,!1),rt&&nr(rt),!Le&&(R=Q&&Q.onVnodeBeforeMount)&&Fe(R,pt,v),Cs(g,!0);{ie.ce&&ie.ce._def.shadowRoot!==!1&&ie.ce._injectChildStyle(oe);const Me=g.subTree=sn(g);_(null,Me,w,z,g,$,S),v.el=Me.el}if(gt&&de(gt,$),!Le&&(R=Q&&Q.onVnodeMounted)){const Me=v;de(()=>Fe(R,pt,Me),$)}(v.shapeFlag&256||pt&&$i(pt.vnode)&&pt.vnode.shapeFlag&256)&&g.a&&de(g.a,$),g.isMounted=!0,v=w=z=null}};g.scope.on();const P=g.effect=new pl(D);g.scope.off();const E=g.update=P.run.bind(P),X=g.job=P.runIfDirty.bind(P);X.i=g,X.id=g.uid,P.scheduler=()=>ua(X),Cs(g,!0),E()},it=(g,v,w)=>{v.component=g;const z=g.vnode.props;g.vnode=v,g.next=null,ph(g,v.props,z,w),bh(g,v.children,w),is(),Ya(g),os()},et=(g,v,w,z,$,S,M,D,P=!1)=>{const E=g&&g.children,X=g?g.shapeFlag:0,R=v.children,{patchFlag:Y,shapeFlag:Q}=v;if(Y>0){if(Y&128){Bs(E,R,w,z,$,S,M,D,P);return}else if(Y&256){Wt(E,R,w,z,$,S,M,D,P);return}}Q&8?(X&16&&li(E,$,S),R!==E&&p(w,R)):X&16?Q&16?Bs(E,R,w,z,$,S,M,D,P):li(E,$,S,!0):(X&8&&p(w,""),Q&16&&Z(R,w,z,$,S,M,D,P))},Wt=(g,v,w,z,$,S,M,D,P)=>{g=g||Ws,v=v||Ws;const E=g.length,X=v.length,R=Math.min(E,X);let Y;for(Y=0;Y<R;Y++){const Q=v[Y]=P?cs(v[Y]):Be(v[Y]);_(g[Y],Q,w,null,$,S,M,D,P)}E>X?li(g,$,S,!0,!1,R):Z(v,w,z,$,S,M,D,P,R)},Bs=(g,v,w,z,$,S,M,D,P)=>{let E=0;const X=v.length;let R=g.length-1,Y=X-1;for(;E<=R&&E<=Y;){const Q=g[E],rt=v[E]=P?cs(v[E]):Be(v[E]);if(ui(Q,rt))_(Q,rt,w,null,$,S,M,D,P);else break;E++}for(;E<=R&&E<=Y;){const Q=g[R],rt=v[Y]=P?cs(v[Y]):Be(v[Y]);if(ui(Q,rt))_(Q,rt,w,null,$,S,M,D,P);else break;R--,Y--}if(E>R){if(E<=Y){const Q=Y+1,rt=Q<X?v[Q].el:z;for(;E<=Y;)_(null,v[E]=P?cs(v[E]):Be(v[E]),w,rt,$,S,M,D,P),E++}}else if(E>Y)for(;E<=R;)De(g[E],$,S,!0),E++;else{const Q=E,rt=E,gt=new Map;for(E=rt;E<=Y;E++){const ne=v[E]=P?cs(v[E]):Be(v[E]);ne.key!=null&&gt.set(ne.key,E)}let pt,ie=0;const oe=Y-rt+1;let Le=!1,Me=0;const di=new Array(oe);for(E=0;E<oe;E++)di[E]=0;for(E=Q;E<=R;E++){const ne=g[E];if(ie>=oe){De(ne,$,S,!0);continue}let Re;if(ne.key!=null)Re=gt.get(ne.key);else for(pt=rt;pt<=Y;pt++)if(di[pt-rt]===0&&ui(ne,v[pt])){Re=pt;break}Re===void 0?De(ne,$,S,!0):(di[Re-rt]=E+1,Re>=Me?Me=Re:Le=!0,_(ne,v[Re],w,null,$,S,M,D,P),ie++)}const Ha=Le?wh(di):Ws;for(pt=Ha.length-1,E=oe-1;E>=0;E--){const ne=rt+E,Re=v[ne],Na=v[ne+1],Ua=ne+1<X?Na.el||Na.placeholder:z;di[E]===0?_(null,Re,w,Ua,$,S,M,D,P):Le&&(pt<0||E!==Ha[pt]?xs(Re,w,Ua,2):pt--)}}},xs=(g,v,w,z,$=null)=>{const{el:S,type:M,transition:D,children:P,shapeFlag:E}=g;if(E&6){xs(g.component.subTree,v,w,z);return}if(E&128){g.suspense.move(v,w,z);return}if(E&64){M.move(g,v,w,ci);return}if(M===ts){i(S,v,w);for(let R=0;R<P.length;R++)xs(P[R],v,w,z);i(g.anchor,v,w);return}if(M===bo){A(g,v,w);return}if(z!==2&&E&1&&D)if(z===0)D.beforeEnter(S),i(S,v,w),de(()=>D.enter(S),$);else{const{leave:R,delayLeave:Y,afterLeave:Q}=D,rt=()=>{g.ctx.isUnmounted?o(S):i(S,v,w)},gt=()=>{S._isLeaving&&S[Nd](!0),R(S,()=>{rt(),Q&&Q()})};Y?Y(S,rt,gt):gt()}else i(S,v,w)},De=(g,v,w,z=!1,$=!1)=>{const{type:S,props:M,ref:D,children:P,dynamicChildren:E,shapeFlag:X,patchFlag:R,dirs:Y,cacheIndex:Q}=g;if(R===-2&&($=!1),D!=null&&(is(),Ci(D,null,w,g,!0),os()),Q!=null&&(v.renderCache[Q]=void 0),X&256){v.ctx.deactivate(g);return}const rt=X&1&&Y,gt=!$i(g);let pt;if(gt&&(pt=M&&M.onVnodeBeforeUnmount)&&Fe(pt,v,g),X&6)Xc(g.component,w,z);else{if(X&128){g.suspense.unmount(w,z);return}rt&&ks(g,null,v,"beforeUnmount"),X&64?g.type.remove(g,v,w,ci,z):E&&!E.hasOnce&&(S!==ts||R>0&&R&64)?li(E,v,w,!1,!0):(S===ts&&R&384||!$&&X&16)&&li(P,v,w),z&&Va(g)}(gt&&(pt=M&&M.onVnodeUnmounted)||rt)&&de(()=>{pt&&Fe(pt,v,g),rt&&ks(g,null,v,"unmounted")},w)},Va=g=>{const{type:v,el:w,anchor:z,transition:$}=g;if(v===ts){Yc(w,z);return}if(v===bo){y(g);return}const S=()=>{o(w),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(g.shapeFlag&1&&$&&!$.persisted){const{leave:M,delayLeave:D}=$,P=()=>M(w,S);D?D(g.el,S,P):P()}else S()},Yc=(g,v)=>{let w;for(;g!==v;)w=f(g),o(g),g=w;o(v)},Xc=(g,v,w)=>{const{bum:z,scope:$,job:S,subTree:M,um:D,m:P,a:E}=g;en(P),en(E),z&&nr(z),$.stop(),S&&(S.flags|=8,De(M,g,v,w)),D&&de(D,v),de(()=>{g.isUnmounted=!0},v)},li=(g,v,w,z=!1,$=!1,S=0)=>{for(let M=S;M<g.length;M++)De(g[M],v,w,z,$)},oo=g=>{if(g.shapeFlag&6)return oo(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const v=f(g.anchor||g.el),w=v&&v[Bd];return w?f(w):v};let rr=!1;const Ba=(g,v,w)=>{g==null?v._vnode&&De(v._vnode,null,null,!0):_(v._vnode||null,g,v,null,null,null,w),v._vnode=g,rr||(rr=!0,Ya(),Pl(),rr=!1)},ci={p:_,um:De,m:xs,r:Va,mt:xt,mc:Z,pc:et,pbc:F,n:oo,o:t};return{render:Ba,hydrate:void 0,createApp:dh(Ba)}}function pr({type:t,props:e},s){return s==="svg"&&t==="foreignObject"||s==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:s}function Cs({effect:t,job:e},s){s?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function _h(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ql(t,e,s=!1){const i=t.children,o=e.children;if(G(i)&&G(o))for(let r=0;r<i.length;r++){const a=i[r];let l=o[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[r]=cs(o[r]),l.el=a.el),!s&&l.patchFlag!==-2&&Ql(a,l)),l.type===Xo&&l.patchFlag!==-1&&(l.el=a.el),l.type===ms&&!l.el&&(l.el=a.el)}}function wh(t){const e=t.slice(),s=[0];let i,o,r,a,l;const c=t.length;for(i=0;i<c;i++){const h=t[i];if(h!==0){if(o=s[s.length-1],t[o]<h){e[i]=o,s.push(i);continue}for(r=0,a=s.length-1;r<a;)l=r+a>>1,t[s[l]]<h?r=l+1:a=l;h<t[s[r]]&&(r>0&&(e[i]=s[r-1]),s[r]=i)}}for(r=s.length,a=s[r-1];r-- >0;)s[r]=a,a=e[a];return s}function Zl(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Zl(e)}function en(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const xh=Symbol.for("v-scx"),kh=()=>go(xh);function fr(t,e,s){return Jl(t,e,s)}function Jl(t,e,s=vt){const{immediate:i,deep:o,flush:r,once:a}=s,l=Dt({},s),c=e&&i||!e&&r!=="post";let h;if(Bi){if(r==="sync"){const m=kh();h=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Ue,m.resume=Ue,m.pause=Ue,m}}const p=Jt;l.call=(m,b,_)=>We(m,p,b,_);let u=!1;r==="post"?l.scheduler=m=>{de(m,p&&p.suspense)}:r!=="sync"&&(u=!0,l.scheduler=(m,b)=>{b?m():ua(m)}),l.augmentJob=m=>{e&&(m.flags|=4),u&&(m.flags|=2,p&&(m.id=p.uid,m.i=p))};const f=Ld(t,e,l);return Bi&&(h?h.push(f):c&&f()),f}function Ch(t,e,s){const i=this.proxy,o=Ot(t)?t.includes(".")?tc(i,t):()=>i[t]:t.bind(i,i);let r;tt(e)?r=e:(r=e.handler,s=e);const a=qi(this),l=Jl(o,r.bind(i),s);return a(),l}function tc(t,e){const s=e.split(".");return()=>{let i=t;for(let o=0;o<s.length&&i;o++)i=i[s[o]];return i}}const $h=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ce(e)}Modifiers`]||t[`${we(e)}Modifiers`];function Sh(t,e,...s){if(t.isUnmounted)return;const i=t.vnode.props||vt;let o=s;const r=e.startsWith("update:"),a=r&&$h(i,e.slice(7));a&&(a.trim&&(o=s.map(p=>Ot(p)?p.trim():p)),a.number&&(o=s.map(td)));let l,c=i[l=ar(e)]||i[l=ar(Ce(e))];!c&&r&&(c=i[l=ar(we(e))]),c&&We(c,t,6,o);const h=i[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,We(h,t,6,o)}}const Ah=new WeakMap;function ec(t,e,s=!1){const i=s?Ah:e.emitsCache,o=i.get(t);if(o!==void 0)return o;const r=t.emits;let a={},l=!1;if(!tt(t)){const c=h=>{const p=ec(h,e,!0);p&&(l=!0,Dt(a,p))};!s&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(wt(t)&&i.set(t,null),null):(G(r)?r.forEach(c=>a[c]=null):Dt(a,r),wt(t)&&i.set(t,a),a)}function Yo(t,e){return!t||!Bo(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(t,e[0].toLowerCase()+e.slice(1))||lt(t,we(e))||lt(t,e))}function sn(t){const{type:e,vnode:s,proxy:i,withProxy:o,propsOptions:[r],slots:a,attrs:l,emit:c,render:h,renderCache:p,props:u,data:f,setupState:m,ctx:b,inheritAttrs:_}=t,O=Ao(t);let T,x;try{if(s.shapeFlag&4){const y=o||i,k=y;T=Be(h.call(k,y,p,u,m,f,b)),x=l}else{const y=e;T=Be(y.length>1?y(u,{attrs:l,slots:a,emit:c}):y(u,null)),x=e.props?l:zh(l)}}catch(y){Ai.length=0,qo(y,t,1),T=te(ms)}let A=T;if(x&&_!==!1){const y=Object.keys(x),{shapeFlag:k}=A;y.length&&k&7&&(r&&y.some(Jr)&&(x=Eh(x,r)),A=Qs(A,x,!1,!0))}return s.dirs&&(A=Qs(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(s.dirs):s.dirs),s.transition&&pa(A,s.transition),T=A,Ao(O),T}const zh=t=>{let e;for(const s in t)(s==="class"||s==="style"||Bo(s))&&((e||(e={}))[s]=t[s]);return e},Eh=(t,e)=>{const s={};for(const i in t)(!Jr(i)||!(i.slice(9)in e))&&(s[i]=t[i]);return s};function Th(t,e,s){const{props:i,children:o,component:r}=t,{props:a,children:l,patchFlag:c}=e,h=r.emitsOptions;if(e.dirs||e.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return i?on(i,a,h):!!a;if(c&8){const p=e.dynamicProps;for(let u=0;u<p.length;u++){const f=p[u];if(a[f]!==i[f]&&!Yo(h,f))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:i===a?!1:i?a?on(i,a,h):!0:!!a;return!1}function on(t,e,s){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let o=0;o<i.length;o++){const r=i[o];if(e[r]!==t[r]&&!Yo(s,r))return!0}return!1}function Oh({vnode:t,parent:e},s){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=s,e=e.parent;else break}}const sc=t=>t.__isSuspense;function Ih(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):Fd(t)}const ts=Symbol.for("v-fgt"),Xo=Symbol.for("v-txt"),ms=Symbol.for("v-cmt"),bo=Symbol.for("v-stc"),Ai=[];let ue=null;function Ph(t=!1){Ai.push(ue=t?null:[])}function Dh(){Ai.pop(),ue=Ai[Ai.length-1]||null}let Vi=1;function To(t,e=!1){Vi+=t,t<0&&ue&&e&&(ue.hasOnce=!0)}function ic(t){return t.dynamicChildren=Vi>0?ue||Ws:null,Dh(),Vi>0&&ue&&ue.push(t),t}function o0(t,e,s,i,o,r){return ic(rc(t,e,s,i,o,r,!0))}function Lh(t,e,s,i,o){return ic(te(t,e,s,i,o,!0))}function Oo(t){return t?t.__v_isVNode===!0:!1}function ui(t,e){return t.type===e.type&&t.key===e.key}const oc=({key:t})=>t??null,vo=({ref:t,ref_key:e,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?Ot(t)||Kt(t)||tt(t)?{i:Ne,r:t,k:e,f:!!s}:t:null);function rc(t,e=null,s=null,i=0,o=null,r=t===ts?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&oc(e),ref:e&&vo(e),scopeId:Ll,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ne};return l?(ga(c,s),r&128&&t.normalize(c)):s&&(c.shapeFlag|=Ot(s)?8:16),Vi>0&&!a&&ue&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&ue.push(c),c}const te=Mh;function Mh(t,e=null,s=null,i=0,o=null,r=!1){if((!t||t===sh)&&(t=ms),Oo(t)){const l=Qs(t,e,!0);return s&&ga(l,s),Vi>0&&!r&&ue&&(l.shapeFlag&6?ue[ue.indexOf(t)]=l:ue.push(l)),l.patchFlag=-2,l}if(Yh(t)&&(t=t.__vccOpts),e){e=Rh(e);let{class:l,style:c}=e;l&&!Ot(l)&&(e.class=ia(l)),wt(c)&&(ha(c)&&!G(c)&&(c=Dt({},c)),e.style=sa(c))}const a=Ot(t)?1:sc(t)?128:Hd(t)?64:wt(t)?4:tt(t)?2:0;return rc(t,e,s,i,o,a,r,!0)}function Rh(t){return t?ha(t)||Wl(t)?Dt({},t):t:null}function Qs(t,e,s=!1,i=!1){const{props:o,ref:r,patchFlag:a,children:l,transition:c}=t,h=e?Vh(o||{},e):o,p={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&oc(h),ref:e&&e.ref?s&&r?G(r)?r.concat(vo(e)):[r,vo(e)]:vo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ts?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qs(t.ssContent),ssFallback:t.ssFallback&&Qs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&pa(p,c.clone(p)),p}function Fh(t=" ",e=0){return te(Xo,null,t,e)}function r0(t,e){const s=te(bo,null,t);return s.staticCount=e,s}function a0(t="",e=!1){return e?(Ph(),Lh(ms,null,t)):te(ms,null,t)}function Be(t){return t==null||typeof t=="boolean"?te(ms):G(t)?te(ts,null,t.slice()):Oo(t)?cs(t):te(Xo,null,String(t))}function cs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qs(t)}function ga(t,e){let s=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(G(e))s=16;else if(typeof e=="object")if(i&65){const o=e.default;o&&(o._c&&(o._d=!1),ga(t,o()),o._c&&(o._d=!0));return}else{s=32;const o=e._;!o&&!Wl(e)?e._ctx=Ne:o===3&&Ne&&(Ne.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else tt(e)?(e={default:e,_ctx:Ne},s=32):(e=String(e),i&64?(s=16,e=[Fh(e)]):s=8);t.children=e,t.shapeFlag|=s}function Vh(...t){const e={};for(let s=0;s<t.length;s++){const i=t[s];for(const o in i)if(o==="class")e.class!==i.class&&(e.class=ia([e.class,i.class]));else if(o==="style")e.style=sa([e.style,i.style]);else if(Bo(o)){const r=e[o],a=i[o];a&&r!==a&&!(G(r)&&r.includes(a))&&(e[o]=r?[].concat(r,a):a)}else o!==""&&(e[o]=i[o])}return e}function Fe(t,e,s,i=null){We(t,e,7,[s,i])}const Bh=Nl();let Hh=0;function Nh(t,e,s){const i=t.type,o=(e?e.appContext:t.appContext)||Bh,r={uid:Hh++,vnode:t,type:i,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ld(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kl(i,o),emitsOptions:ec(i,o),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:i.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Sh.bind(null,r),t.ce&&t.ce(r),r}let Jt=null;const Uh=()=>Jt||Ne;let Io,Rr;{const t=jo(),e=(s,i)=>{let o;return(o=t[s])||(o=t[s]=[]),o.push(i),r=>{o.length>1?o.forEach(a=>a(r)):o[0](r)}};Io=e("__VUE_INSTANCE_SETTERS__",s=>Jt=s),Rr=e("__VUE_SSR_SETTERS__",s=>Bi=s)}const qi=t=>{const e=Jt;return Io(t),t.scope.on(),()=>{t.scope.off(),Io(e)}},rn=()=>{Jt&&Jt.scope.off(),Io(null)};function ac(t){return t.vnode.shapeFlag&4}let Bi=!1;function jh(t,e=!1,s=!1){e&&Rr(e);const{props:i,children:o}=t.vnode,r=ac(t);uh(t,i,r,e),gh(t,o,s||e);const a=r?Wh(t,e):void 0;return e&&Rr(!1),a}function Wh(t,e){const s=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ih);const{setup:i}=s;if(i){is();const o=t.setupContext=i.length>1?Kh(t):null,r=qi(t),a=Wi(i,t,0,[t.props,o]),l=al(a);if(os(),r(),(l||t.sp)&&!$i(t)&&Ml(t),l){if(a.then(rn,rn),e)return a.then(c=>{an(t,c)}).catch(c=>{qo(c,t,0)});t.asyncDep=a}else an(t,a)}else nc(t)}function an(t,e,s){tt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:wt(e)&&(t.setupState=El(e)),nc(t)}function nc(t,e,s){const i=t.type;t.render||(t.render=i.render||Ue);{const o=qi(t);is();try{oh(t)}finally{os(),o()}}}const qh={get(t,e){return qt(t,"get",""),t[e]}};function Kh(t){const e=s=>{t.exposed=s||{}};return{attrs:new Proxy(t.attrs,qh),slots:t.slots,emit:t.emit,expose:e}}function ba(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(El(Ed(t.exposed)),{get(e,s){if(s in e)return e[s];if(s in Si)return Si[s](t)},has(e,s){return s in e||s in Si}})):t.proxy}function Yh(t){return tt(t)&&"__vccOpts"in t}const Xh=(t,e)=>Pd(t,e,Bi);function n0(t,e,s){try{To(-1);const i=arguments.length;return i===2?wt(e)&&!G(e)?Oo(e)?te(t,null,[e]):te(t,e):te(t,null,e):(i>3?s=Array.prototype.slice.call(arguments,2):i===3&&Oo(s)&&(s=[s]),te(t,e,s))}finally{To(1)}}const Gh="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fr;const nn=typeof window<"u"&&window.trustedTypes;if(nn)try{Fr=nn.createPolicy("vue",{createHTML:t=>t})}catch{}const lc=Fr?t=>Fr.createHTML(t):t=>t,Qh="http://www.w3.org/2000/svg",Zh="http://www.w3.org/1998/Math/MathML",Je=typeof document<"u"?document:null,ln=Je&&Je.createElement("template"),Jh={insert:(t,e,s)=>{e.insertBefore(t,s||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,s,i)=>{const o=e==="svg"?Je.createElementNS(Qh,t):e==="mathml"?Je.createElementNS(Zh,t):s?Je.createElement(t,{is:s}):Je.createElement(t);return t==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:t=>Je.createTextNode(t),createComment:t=>Je.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Je.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,s,i,o,r){const a=s?s.previousSibling:e.lastChild;if(o&&(o===r||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),s),!(o===r||!(o=o.nextSibling)););else{ln.innerHTML=lc(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const l=ln.content;if(i==="svg"||i==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,s)}return[a?a.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}},tu=Symbol("_vtc");function eu(t,e,s){const i=t[tu];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):s?t.setAttribute("class",e):t.className=e}const cn=Symbol("_vod"),su=Symbol("_vsh"),iu=Symbol(""),ou=/(?:^|;)\s*display\s*:/;function ru(t,e,s){const i=t.style,o=Ot(s);let r=!1;if(s&&!o){if(e)if(Ot(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();s[l]==null&&yo(i,l,"")}else for(const a in e)s[a]==null&&yo(i,a,"");for(const a in s)a==="display"&&(r=!0),yo(i,a,s[a])}else if(o){if(e!==s){const a=i[iu];a&&(s+=";"+a),i.cssText=s,r=ou.test(s)}}else e&&t.removeAttribute("style");cn in t&&(t[cn]=r?i.display:"",t[su]&&(i.display="none"))}const dn=/\s*!important$/;function yo(t,e,s){if(G(s))s.forEach(i=>yo(t,e,i));else if(s==null&&(s=""),e.startsWith("--"))t.setProperty(e,s);else{const i=au(t,e);dn.test(s)?t.setProperty(we(i),s.replace(dn,""),"important"):t[i]=s}}const hn=["Webkit","Moz","ms"],mr={};function au(t,e){const s=mr[e];if(s)return s;let i=Ce(e);if(i!=="filter"&&i in t)return mr[e]=i;i=ll(i);for(let o=0;o<hn.length;o++){const r=hn[o]+i;if(r in t)return mr[e]=r}return e}const un="http://www.w3.org/1999/xlink";function pn(t,e,s,i,o,r=ad(e)){i&&e.startsWith("xlink:")?s==null?t.removeAttributeNS(un,e.slice(6,e.length)):t.setAttributeNS(un,e,s):s==null||r&&!dl(s)?t.removeAttribute(e):t.setAttribute(e,r?"":ys(s)?String(s):s)}function fn(t,e,s,i,o){if(e==="innerHTML"||e==="textContent"){s!=null&&(t[e]=e==="innerHTML"?lc(s):s);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=s==null?t.type==="checkbox"?"on":"":String(s);(l!==c||!("_value"in t))&&(t.value=c),s==null&&t.removeAttribute(e),t._value=s;return}let a=!1;if(s===""||s==null){const l=typeof t[e];l==="boolean"?s=dl(s):s==null&&l==="string"?(s="",a=!0):l==="number"&&(s=0,a=!0)}try{t[e]=s}catch{}a&&t.removeAttribute(o||e)}function nu(t,e,s,i){t.addEventListener(e,s,i)}function lu(t,e,s,i){t.removeEventListener(e,s,i)}const mn=Symbol("_vei");function cu(t,e,s,i,o=null){const r=t[mn]||(t[mn]={}),a=r[e];if(i&&a)a.value=i;else{const[l,c]=du(e);if(i){const h=r[e]=pu(i,o);nu(t,l,h,c)}else a&&(lu(t,l,a,c),r[e]=void 0)}}const gn=/(?:Once|Passive|Capture)$/;function du(t){let e;if(gn.test(t)){e={};let i;for(;i=t.match(gn);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):we(t.slice(2)),e]}let gr=0;const hu=Promise.resolve(),uu=()=>gr||(hu.then(()=>gr=0),gr=Date.now());function pu(t,e){const s=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=s.attached)return;We(fu(i,s.value),e,5,[i])};return s.value=t,s.attached=uu(),s}function fu(t,e){if(G(e)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},e.map(i=>o=>!o._stopped&&i&&i(o))}else return e}const bn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,mu=(t,e,s,i,o,r)=>{const a=o==="svg";e==="class"?eu(t,i,a):e==="style"?ru(t,s,i):Bo(e)?Jr(e)||cu(t,e,s,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gu(t,e,i,a))?(fn(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&pn(t,e,i,a,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ot(i))?fn(t,Ce(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),pn(t,e,i,a))};function gu(t,e,s,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&bn(e)&&tt(s));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return bn(e)&&Ot(s)?!1:e in t}const vn={};function l0(t,e,s){let i=Ud(t,e);No(i)&&(i=Dt({},i,e));class o extends va{constructor(a){super(i,a,s)}}return o.def=i,o}const bu=typeof HTMLElement<"u"?HTMLElement:class{};class va extends bu{constructor(e,s={},i=_n){super(),this._def=e,this._props=s,this._createApp=i,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._ob=null,this.shadowRoot&&i!==_n?this._root=this.shadowRoot:e.shadowRoot!==!1?(this.attachShadow(Dt({},e.shadowRootOptions,{mode:"open"})),this._root=this.shadowRoot):this._root=this}connectedCallback(){if(!this.isConnected)return;!this.shadowRoot&&!this._resolved&&this._parseSlots(),this._connected=!0;let e=this;for(;e=e&&(e.parentNode||e.host);)if(e instanceof va){this._parent=e;break}this._instance||(this._resolved?this._mount(this._def):e&&e._pendingResolve?this._pendingResolve=e._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef()}):this._resolveDef())}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._inheritParentContext(e))}_inheritParentContext(e=this._parent){e&&this._app&&Object.setPrototypeOf(this._app._context.provides,e._instance.provides)}disconnectedCallback(){this._connected=!1,Ol(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null,this._teleportTargets&&(this._teleportTargets.clear(),this._teleportTargets=void 0))})}_processMutations(e){for(const s of e)this._setAttr(s.attributeName)}_resolveDef(){if(this._pendingResolve)return;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);this._ob=new MutationObserver(this._processMutations.bind(this)),this._ob.observe(this,{attributes:!0});const e=(i,o=!1)=>{this._resolved=!0,this._pendingResolve=void 0;const{props:r,styles:a}=i;let l;if(r&&!G(r))for(const c in r){const h=r[c];(h===Number||h&&h.type===Number)&&(c in this._props&&(this._props[c]=ja(this._props[c])),(l||(l=Object.create(null)))[Ce(c)]=!0)}this._numberProps=l,this._resolveProps(i),this.shadowRoot&&this._applyStyles(a),this._mount(i)},s=this._def.__asyncLoader;s?this._pendingResolve=s().then(i=>{i.configureApp=this._def.configureApp,e(this._def=i,!0)}):e(this._def)}_mount(e){this._app=this._createApp(e),this._inheritParentContext(),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const s=this._instance&&this._instance.exposed;if(s)for(const i in s)lt(this,i)||Object.defineProperty(this,i,{get:()=>zl(s[i])})}_resolveProps(e){const{props:s}=e,i=G(s)?s:Object.keys(s||{});for(const o of Object.keys(this))o[0]!=="_"&&i.includes(o)&&this._setProp(o,this[o]);for(const o of i.map(Ce))Object.defineProperty(this,o,{get(){return this._getProp(o)},set(r){this._setProp(o,r,!0,!0)}})}_setAttr(e){if(e.startsWith("data-v-"))return;const s=this.hasAttribute(e);let i=s?this.getAttribute(e):vn;const o=Ce(e);s&&this._numberProps&&this._numberProps[o]&&(i=ja(i)),this._setProp(o,i,!1,!0)}_getProp(e){return this._props[e]}_setProp(e,s,i=!0,o=!1){if(s!==this._props[e]&&(s===vn?delete this._props[e]:(this._props[e]=s,e==="key"&&this._app&&(this._app._ceVNode.key=s)),o&&this._instance&&this._update(),i)){const r=this._ob;r&&(this._processMutations(r.takeRecords()),r.disconnect()),s===!0?this.setAttribute(we(e),""):typeof s=="string"||typeof s=="number"?this.setAttribute(we(e),s+""):s||this.removeAttribute(we(e)),r&&r.observe(this,{attributes:!0})}}_update(){const e=this._createVNode();this._app&&(e.appContext=this._app._context),yu(e,this._root)}_createVNode(){const e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));const s=te(this._def,Dt(e,this._props));return this._instance||(s.ce=i=>{this._instance=i,i.ce=this,i.isCE=!0;const o=(r,a)=>{this.dispatchEvent(new CustomEvent(r,No(a[0])?Dt({detail:a},a[0]):{detail:a}))};i.emit=(r,...a)=>{o(r,a),we(r)!==r&&o(we(r),a)},this._setParent()}),s}_applyStyles(e,s){if(!e)return;if(s){if(s===this._def||this._styleChildren.has(s))return;this._styleChildren.add(s)}const i=this._nonce;for(let o=e.length-1;o>=0;o--){const r=document.createElement("style");i&&r.setAttribute("nonce",i),r.textContent=e[o],this.shadowRoot.prepend(r)}}_parseSlots(){const e=this._slots={};let s;for(;s=this.firstChild;){const i=s.nodeType===1&&s.getAttribute("slot")||"default";(e[i]||(e[i]=[])).push(s),this.removeChild(s)}}_renderSlots(){const e=this._getSlots(),s=this._instance.type.__scopeId;for(let i=0;i<e.length;i++){const o=e[i],r=o.getAttribute("name")||"default",a=this._slots[r],l=o.parentNode;if(a)for(const c of a){if(s&&c.nodeType===1){const h=s+"-s",p=document.createTreeWalker(c,1);c.setAttribute(h,"");let u;for(;u=p.nextNode();)u.setAttribute(h,"")}l.insertBefore(c,o)}else for(;o.firstChild;)l.insertBefore(o.firstChild,o);l.removeChild(o)}}_getSlots(){const e=[this];return this._teleportTargets&&e.push(...this._teleportTargets),e.reduce((s,i)=>(s.push(...Array.from(i.querySelectorAll("slot"))),s),[])}_injectChildStyle(e){this._applyStyles(e.styles,e)}_removeChildStyle(e){}}const vu=Dt({patchProp:mu},Jh);let yn;function cc(){return yn||(yn=vh(vu))}const yu=(...t)=>{cc().render(...t)},_n=(...t)=>{const e=cc().createApp(...t),{mount:s}=e;return e.mount=i=>{const o=wu(i);if(!o)return;const r=e._component;!tt(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=s(o,!1,_u(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},e};function _u(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function wu(t){return Ot(t)?document.querySelector(t):t}var dc=Object.defineProperty,xu=Object.defineProperties,ku=Object.getOwnPropertyDescriptor,Cu=Object.getOwnPropertyDescriptors,wn=Object.getOwnPropertySymbols,$u=Object.prototype.hasOwnProperty,Su=Object.prototype.propertyIsEnumerable,br=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ya=t=>{throw TypeError(t)},xn=(t,e,s)=>e in t?dc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,as=(t,e)=>{for(var s in e||(e={}))$u.call(e,s)&&xn(t,s,e[s]);if(wn)for(var s of wn(e))Su.call(e,s)&&xn(t,s,e[s]);return t},Ki=(t,e)=>xu(t,Cu(e)),n=(t,e,s,i)=>{for(var o=i>1?void 0:i?ku(e,s):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(i?a(e,s,o):a(o))||o);return i&&o&&dc(e,s,o),o},hc=(t,e,s)=>e.has(t)||ya("Cannot "+s),Au=(t,e,s)=>(hc(t,e,"read from private field"),e.get(t)),zu=(t,e,s)=>e.has(t)?ya("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),Eu=(t,e,s,i)=>(hc(t,e,"write to private field"),e.set(t,s),s),Tu=function(t,e){this[0]=t,this[1]=e},Ou=t=>{var e=t[br("asyncIterator")],s=!1,i,o={};return e==null?(e=t[br("iterator")](),i=r=>o[r]=a=>e[r](a)):(e=e.call(t),i=r=>o[r]=a=>{if(s){if(s=!1,r==="throw")throw a;return a}return s=!0,{done:!1,value:new Tu(new Promise(l=>{var c=e[r](a);c instanceof Object||ya("Object expected"),l(c)}),1)}}),o[br("iterator")]=()=>o,i("next"),"throw"in e?i("throw"):o.throw=r=>{throw r},"return"in e&&i("return"),o},pi=new WeakMap,fi=new WeakMap,mi=new WeakMap,vr=new WeakSet,lo=new WeakMap,ns=class{constructor(t,e){this.handleFormData=s=>{const i=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host),a=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!a&&typeof o=="string"&&o.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(l=>{s.formData.append(o,l.toString())}):s.formData.append(o,r.toString()))},this.handleFormSubmit=s=>{var i;const o=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=pi.get(this.form))==null||i.forEach(a=>{this.setUserInteracted(a,!0)})),this.form&&!this.form.noValidate&&!o&&!r(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),lo.set(this.host,[])},this.handleInteraction=s=>{const i=lo.get(this.host);i.includes(s.type)||i.push(s.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=as({form:s=>{const i=s.form;if(i){const r=s.getRootNode().querySelector(`#${i}`);if(r)return r}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var i;return(i=s.disabled)!=null?i:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,i)=>s.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),lo.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),lo.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,pi.has(this.form)?pi.get(this.form).add(this.host):pi.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),fi.has(this.form)||(fi.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),mi.has(this.form)||(mi.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=pi.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),fi.has(this.form)&&(this.form.reportValidity=fi.get(this.form),fi.delete(this.form)),mi.has(this.form)&&(this.form.checkValidity=mi.get(this.form),mi.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?vr.add(t):vr.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const s=document.createElement("button");s.type=t,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",e&&(s.name=e.name,s.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&s.setAttribute(i,e.getAttribute(i))})),this.form.append(s),s.click(),s.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,s=!!vr.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&s),e.toggleAttribute("data-user-valid",t&&s)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},Go=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Iu=Object.freeze(Ki(as({},Go),{valid:!1,valueMissing:!0})),Pu=Object.freeze(Ki(as({},Go),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _o=globalThis,_a=_o.ShadowRoot&&(_o.ShadyCSS===void 0||_o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wa=Symbol(),kn=new WeakMap;let uc=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==wa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(_a&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=kn.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&kn.set(s,e))}return e}toString(){return this.cssText}};const Du=t=>new uc(typeof t=="string"?t:t+"",void 0,wa),N=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,o,r)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1],t[0]);return new uc(s,t,wa)},Lu=(t,e)=>{if(_a)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),o=_o.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}},Cn=_a?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return Du(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Mu,defineProperty:Ru,getOwnPropertyDescriptor:Fu,getOwnPropertyNames:Vu,getOwnPropertySymbols:Bu,getPrototypeOf:Hu}=Object,Qo=globalThis,$n=Qo.trustedTypes,Nu=$n?$n.emptyScript:"",Uu=Qo.reactiveElementPolyfillSupport,zi=(t,e)=>t,Zs={toAttribute(t,e){switch(e){case Boolean:t=t?Nu:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},xa=(t,e)=>!Mu(t,e),Sn={attribute:!0,type:String,converter:Zs,reflect:!1,useDefault:!1,hasChanged:xa};Symbol.metadata??=Symbol("metadata"),Qo.litPropertyMetadata??=new WeakMap;let Us=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=Sn){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,s);o!==void 0&&Ru(this.prototype,e,o)}}static getPropertyDescriptor(e,s,i){const{get:o,set:r}=Fu(this.prototype,e)??{get(){return this[s]},set(a){this[s]=a}};return{get:o,set(a){const l=o?.call(this);r?.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Sn}static _$Ei(){if(this.hasOwnProperty(zi("elementProperties")))return;const e=Hu(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(zi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(zi("properties"))){const s=this.properties,i=[...Vu(s),...Bu(s)];for(const o of i)this.createProperty(o,s[o])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,o]of s)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const o=this._$Eu(s,i);o!==void 0&&this._$Eh.set(o,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)s.unshift(Cn(o))}else e!==void 0&&s.push(Cn(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Lu(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const r=(i.converter?.toAttribute!==void 0?i.converter:Zs).toAttribute(s,i.type);this._$Em=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,s){const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const r=i.getPropertyOptions(o),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Zs;this._$Em=o;const l=a.fromAttribute(s,r.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(e,s,i){if(e!==void 0){const o=this.constructor,r=this[e];if(i??=o.getPropertyOptions(e),!((i.hasChanged??xa)(r,s)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:o,wrapped:r},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??s??this[e]),r!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,r]of i){const{wrapped:a}=r,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,r,l)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(s)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(e){}firstUpdated(e){}};Us.elementStyles=[],Us.shadowRootOptions={mode:"open"},Us[zi("elementProperties")]=new Map,Us[zi("finalized")]=new Map,Uu?.({ReactiveElement:Us}),(Qo.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ka=globalThis,Po=ka.trustedTypes,An=Po?Po.createPolicy("lit-html",{createHTML:t=>t}):void 0,pc="$lit$",hs=`lit$${Math.random().toFixed(9).slice(2)}$`,fc="?"+hs,ju=`<${fc}>`,Is=document,Hi=()=>Is.createComment(""),Ni=t=>t===null||typeof t!="object"&&typeof t!="function",Ca=Array.isArray,Wu=t=>Ca(t)||typeof t?.[Symbol.iterator]=="function",yr=`[ 	
\f\r]`,gi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zn=/-->/g,En=/>/g,$s=RegExp(`>|${yr}(?:([^\\s"'>=/]+)(${yr}*=${yr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tn=/'/g,On=/"/g,mc=/^(?:script|style|textarea|title)$/i,qu=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),C=qu(1),pe=Symbol.for("lit-noChange"),kt=Symbol.for("lit-nothing"),In=new WeakMap,Es=Is.createTreeWalker(Is,129);function gc(t,e){if(!Ca(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return An!==void 0?An.createHTML(e):e}const Ku=(t,e)=>{const s=t.length-1,i=[];let o,r=e===2?"<svg>":e===3?"<math>":"",a=gi;for(let l=0;l<s;l++){const c=t[l];let h,p,u=-1,f=0;for(;f<c.length&&(a.lastIndex=f,p=a.exec(c),p!==null);)f=a.lastIndex,a===gi?p[1]==="!--"?a=zn:p[1]!==void 0?a=En:p[2]!==void 0?(mc.test(p[2])&&(o=RegExp("</"+p[2],"g")),a=$s):p[3]!==void 0&&(a=$s):a===$s?p[0]===">"?(a=o??gi,u=-1):p[1]===void 0?u=-2:(u=a.lastIndex-p[2].length,h=p[1],a=p[3]===void 0?$s:p[3]==='"'?On:Tn):a===On||a===Tn?a=$s:a===zn||a===En?a=gi:(a=$s,o=void 0);const m=a===$s&&t[l+1].startsWith("/>")?" ":"";r+=a===gi?c+ju:u>=0?(i.push(h),c.slice(0,u)+pc+c.slice(u)+hs+m):c+hs+(u===-2?l:m)}return[gc(t,r+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Ui{constructor({strings:e,_$litType$:s},i){let o;this.parts=[];let r=0,a=0;const l=e.length-1,c=this.parts,[h,p]=Ku(e,s);if(this.el=Ui.createElement(h,i),Es.currentNode=this.el.content,s===2||s===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=Es.nextNode())!==null&&c.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const u of o.getAttributeNames())if(u.endsWith(pc)){const f=p[a++],m=o.getAttribute(u).split(hs),b=/([.?@])?(.*)/.exec(f);c.push({type:1,index:r,name:b[2],strings:m,ctor:b[1]==="."?Xu:b[1]==="?"?Gu:b[1]==="@"?Qu:Zo}),o.removeAttribute(u)}else u.startsWith(hs)&&(c.push({type:6,index:r}),o.removeAttribute(u));if(mc.test(o.tagName)){const u=o.textContent.split(hs),f=u.length-1;if(f>0){o.textContent=Po?Po.emptyScript:"";for(let m=0;m<f;m++)o.append(u[m],Hi()),Es.nextNode(),c.push({type:2,index:++r});o.append(u[f],Hi())}}}else if(o.nodeType===8)if(o.data===fc)c.push({type:2,index:r});else{let u=-1;for(;(u=o.data.indexOf(hs,u+1))!==-1;)c.push({type:7,index:r}),u+=hs.length-1}r++}}static createElement(e,s){const i=Is.createElement("template");return i.innerHTML=e,i}}function Js(t,e,s=t,i){if(e===pe)return e;let o=i!==void 0?s._$Co?.[i]:s._$Cl;const r=Ni(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),r===void 0?o=void 0:(o=new r(t),o._$AT(t,s,i)),i!==void 0?(s._$Co??=[])[i]=o:s._$Cl=o),o!==void 0&&(e=Js(t,o._$AS(t,e.values),o,i)),e}class Yu{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,o=(e?.creationScope??Is).importNode(s,!0);Es.currentNode=o;let r=Es.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let h;c.type===2?h=new Yi(r,r.nextSibling,this,e):c.type===1?h=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(h=new Zu(r,this,e)),this._$AV.push(h),c=i[++l]}a!==c?.index&&(r=Es.nextNode(),a++)}return Es.currentNode=Is,o}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}}class Yi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,i,o){this.type=2,this._$AH=kt,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=Js(this,e,s),Ni(e)?e===kt||e==null||e===""?(this._$AH!==kt&&this._$AR(),this._$AH=kt):e!==this._$AH&&e!==pe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Wu(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==kt&&Ni(this._$AH)?this._$AA.nextSibling.data=e:this.T(Is.createTextNode(e)),this._$AH=e}$(e){const{values:s,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ui.createElement(gc(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(s);else{const r=new Yu(o,this),a=r.u(this.options);r.p(s),this.T(a),this._$AH=r}}_$AC(e){let s=In.get(e.strings);return s===void 0&&In.set(e.strings,s=new Ui(e)),s}k(e){Ca(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,o=0;for(const r of e)o===s.length?s.push(i=new Yi(this.O(Hi()),this.O(Hi()),this,this.options)):i=s[o],i._$AI(r),o++;o<s.length&&(this._$AR(i&&i._$AB.nextSibling,o),s.length=o)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Zo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,o,r){this.type=1,this._$AH=kt,this._$AN=void 0,this.element=e,this.name=s,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=kt}_$AI(e,s=this,i,o){const r=this.strings;let a=!1;if(r===void 0)e=Js(this,e,s,0),a=!Ni(e)||e!==this._$AH&&e!==pe,a&&(this._$AH=e);else{const l=e;let c,h;for(e=r[0],c=0;c<r.length-1;c++)h=Js(this,l[i+c],s,c),h===pe&&(h=this._$AH[c]),a||=!Ni(h)||h!==this._$AH[c],h===kt?e=kt:e!==kt&&(e+=(h??"")+r[c+1]),this._$AH[c]=h}a&&!o&&this.j(e)}j(e){e===kt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let Xu=class extends Zo{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===kt?void 0:e}};class Gu extends Zo{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==kt)}}class Qu extends Zo{constructor(e,s,i,o,r){super(e,s,i,o,r),this.type=5}_$AI(e,s=this){if((e=Js(this,e,s,0)??kt)===pe)return;const i=this._$AH,o=e===kt&&i!==kt||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==kt&&(i===kt||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Zu{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Js(this,e)}}const Ju=ka.litHtmlPolyfillSupport;Ju?.(Ui,Yi),(ka.litHtmlVersions??=[]).push("3.3.1");const tp=(t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(o===void 0){const r=s?.renderBefore??null;i._$litPart$=o=new Yi(e.insertBefore(Hi(),r),r,void 0,s??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $a=globalThis;let Ei=class extends Us{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=tp(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return pe}};Ei._$litElement$=!0,Ei.finalized=!0,$a.litElementHydrateSupport?.({LitElement:Ei});const ep=$a.litElementPolyfillSupport;ep?.({LitElement:Ei});($a.litElementVersions??=[]).push("4.2.1");var sp=N`
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
`,ip=N`
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
`,ei=(t="value")=>(e,s)=>{const i=e.constructor,o=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(r,a,l){var c;const h=i.getPropertyOptions(t),p=typeof h.attribute=="string"?h.attribute:t;if(r===p){const u=h.converter||Zs,m=(typeof u=="function"?u:(c=u?.fromAttribute)!=null?c:Zs.fromAttribute)(l,h.type);this[t]!==m&&(this[s]=m)}o.call(this,r,a,l)}},Ls=N`
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
`,se=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=s=>{const i=s.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function op(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let s="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(s+=i.textContent)}),s}var Vr="";function Pn(t){Vr=t}function rp(t=""){if(!Vr){const e=[...document.getElementsByTagName("script")],s=e.find(i=>i.hasAttribute("data-shoelace"));if(s)Pn(s.getAttribute("data-shoelace"));else{const i=e.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let o="";i&&(o=i.getAttribute("src")),Pn(o.split("/").slice(0,-1).join("/"))}}return Vr.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var ap={name:"default",resolver:t=>rp(`assets/icons/${t}.svg`)},np=ap,Dn={caret:`
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
  `},lp={name:"system",resolver:t=>t in Dn?`data:image/svg+xml,${encodeURIComponent(Dn[t])}`:""},cp=lp,dp=[np,cp],Br=[];function hp(t){Br.push(t)}function up(t){Br=Br.filter(e=>e!==t)}function Ln(t){return dp.find(e=>e.name===t)}var pp=N`
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
`;function I(t,e){const s=as({waitUntilFirstUpdate:!1},e);return(i,o)=>{const{update:r}=i,a=Array.isArray(t)?t:[t];i.update=function(l){a.forEach(c=>{const h=c;if(l.has(h)){const p=l.get(h),u=this[h];p!==u&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[o](p,u)}}),r.call(this,l)}}}var q=N`
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
 */const fp={attribute:!0,type:String,converter:Zs,reflect:!1,hasChanged:xa},mp=(t=fp,e,s)=>{const{kind:i,metadata:o}=s;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),r.set(s.name,t),i==="accessor"){const{name:a}=s;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,c,t)},init(l){return l!==void 0&&this.C(a,void 0,t,l),l}}}if(i==="setter"){const{name:a}=s;return function(l){const c=this[a];e.call(this,l),this.requestUpdate(a,c,t)}}throw Error("Unsupported decorator location: "+i)};function d(t){return(e,s)=>typeof s=="object"?mp(t,e,s):((i,o,r)=>{const a=o.hasOwnProperty(r);return o.constructor.createProperty(r,i),a?Object.getOwnPropertyDescriptor(o,r):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(t){return d({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Xi(t){return(e,s)=>{const i=typeof e=="function"?e:e[s];Object.assign(i,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bc=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L(t,e){return(s,i,o)=>{const r=a=>a.renderRoot?.querySelector(t)??null;return bc(s,i,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gp(t){return(e,s)=>bc(e,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}var wo,H=class extends Ei{constructor(){super(),zu(this,wo,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const s=new CustomEvent(t,as({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(s),s}static define(t,e=this,s={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,s)}catch{customElements.define(t,class extends e{},s)}return}let o=" (unknown version)",r=o;"version"in e&&e.version&&(o=" v"+e.version),"version"in i&&i.version&&(r=" v"+i.version),!(o&&r&&o===r)&&console.warn(`Attempted to register <${t}>${o}, but <${t}>${r} has already been registered.`)}attributeChangedCallback(t,e,s){Au(this,wo)||(this.constructor.elementProperties.forEach((i,o)=>{i.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),Eu(this,wo,!0)),super.attributeChangedCallback(t,e,s)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,s)=>{t.has(s)&&this[s]==null&&(this[s]=e)})}};wo=new WeakMap;H.version="2.20.1";H.dependencies={};n([d()],H.prototype,"dir",2);n([d()],H.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bp=(t,e)=>t?._$litType$!==void 0,vc=t=>t.strings===void 0,vp={},yp=(t,e=vp)=>t._$AH=e;var bi=Symbol(),co=Symbol(),_r,wr=new Map,ft=class extends H{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var s;let i;if(e?.spriteSheet)return this.svg=C`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?bi:co}catch{return co}try{const o=document.createElement("div");o.innerHTML=await i.text();const r=o.firstElementChild;if(((s=r?.tagName)==null?void 0:s.toLowerCase())!=="svg")return bi;_r||(_r=new DOMParser);const l=_r.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):bi}catch{return bi}}connectedCallback(){super.connectedCallback(),hp(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),up(this)}getIconSource(){const t=Ln(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:s}=this.getIconSource(),i=s?Ln(this.library):void 0;if(!e){this.svg=null;return}let o=wr.get(e);if(o||(o=this.resolveIcon(e,i),wr.set(e,o)),!this.initialRender)return;const r=await o;if(r===co&&wr.delete(e),e===this.getIconSource().url){if(bp(r)){if(this.svg=r,i){await this.updateComplete;const a=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&a&&i.mutator(a)}return}switch(r){case co:case bi:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(t=i?.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ft.styles=[q,pp];n([U()],ft.prototype,"svg",2);n([d({reflect:!0})],ft.prototype,"name",2);n([d()],ft.prototype,"src",2);n([d()],ft.prototype,"label",2);n([d({reflect:!0})],ft.prototype,"library",2);n([I("label")],ft.prototype,"handleLabelChange",1);n([I(["name","src","library"])],ft.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Gi=t=>(...e)=>({_$litDirective$:t,values:e});let Qi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=Gi(class extends Qi{constructor(t){if(super(t),t.type!==He.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const s=t.element.classList;for(const i of this.st)i in e||(s.remove(i),this.st.delete(i));for(const i in e){const o=!!e[i];o===this.st.has(i)||this.nt?.has(i)||(o?(s.add(i),this.st.add(i)):(s.remove(i),this.st.delete(i)))}return pe}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=t=>t??kt;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ps=Gi(class extends Qi{constructor(t){if(super(t),t.type!==He.PROPERTY&&t.type!==He.ATTRIBUTE&&t.type!==He.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!vc(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===pe||e===kt)return e;const s=t.element,i=t.name;if(t.type===He.PROPERTY){if(e===s[i])return pe}else if(t.type===He.BOOLEAN_ATTRIBUTE){if(!!e===s.hasAttribute(i))return pe}else if(t.type===He.ATTRIBUTE&&s.getAttribute(i)===e+"")return pe;return yp(t),e}});var Lt=class extends H{constructor(){super(...arguments),this.formControlController=new ns(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new se(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return C`
      <div
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${W({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${B(this.value)}
            .indeterminate=${Ps(this.indeterminate)}
            .checked=${Ps(this.checked)}
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
            ${this.checked?C`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?C`
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
    `}};Lt.styles=[q,Ls,ip];Lt.dependencies={"sl-icon":ft};n([L('input[type="checkbox"]')],Lt.prototype,"input",2);n([U()],Lt.prototype,"hasFocus",2);n([d()],Lt.prototype,"title",2);n([d()],Lt.prototype,"name",2);n([d()],Lt.prototype,"value",2);n([d({reflect:!0})],Lt.prototype,"size",2);n([d({type:Boolean,reflect:!0})],Lt.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],Lt.prototype,"checked",2);n([d({type:Boolean,reflect:!0})],Lt.prototype,"indeterminate",2);n([ei("checked")],Lt.prototype,"defaultChecked",2);n([d({reflect:!0})],Lt.prototype,"form",2);n([d({type:Boolean,reflect:!0})],Lt.prototype,"required",2);n([d({attribute:"help-text"})],Lt.prototype,"helpText",2);n([I("disabled",{waitUntilFirstUpdate:!0})],Lt.prototype,"handleDisabledChange",1);n([I(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Lt.prototype,"handleStateChange",1);var _p=N`
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
`;const Hr=new Set,js=new Map;let zs,Sa="ltr",Aa="en";const yc=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(yc){const t=new MutationObserver(wc);Sa=document.documentElement.dir||"ltr",Aa=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function _c(...t){t.map(e=>{const s=e.$code.toLowerCase();js.has(s)?js.set(s,Object.assign(Object.assign({},js.get(s)),e)):js.set(s,e),zs||(zs=e)}),wc()}function wc(){yc&&(Sa=document.documentElement.dir||"ltr",Aa=document.documentElement.lang||navigator.language),[...Hr.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let wp=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Hr.add(this.host)}hostDisconnected(){Hr.delete(this.host)}dir(){return`${this.host.dir||Sa}`.toLowerCase()}lang(){return`${this.host.lang||Aa}`.toLowerCase()}getTranslationData(e){var s,i;const o=new Intl.Locale(e.replace(/_/g,"-")),r=o?.language.toLowerCase(),a=(i=(s=o?.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&i!==void 0?i:"",l=js.get(`${r}-${a}`),c=js.get(r);return{locale:o,language:r,region:a,primary:l,secondary:c}}exists(e,s){var i;const{primary:o,secondary:r}=this.getTranslationData((i=s.lang)!==null&&i!==void 0?i:this.lang());return s=Object.assign({includeFallback:!1},s),!!(o&&o[e]||r&&r[e]||s.includeFallback&&zs&&zs[e])}term(e,...s){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let r;if(i&&i[e])r=i[e];else if(o&&o[e])r=o[e];else if(zs&&zs[e])r=zs[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof r=="function"?r(...s):r}date(e,s){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),s).format(e)}number(e,s){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),s).format(e)}relativeTime(e,s,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,s)}};var xc={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};_c(xc);var xp=xc,at=class extends wp{};_c(xp);var Zi=class extends H{constructor(){super(...arguments),this.localize=new at(this)}render(){return C`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Zi.styles=[q,_p];var kc=new Map,kp=new WeakMap;function Cp(t){return t??{keyframes:[],options:{duration:0}}}function Mn(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function dt(t,e){kc.set(t,Cp(e))}function Ct(t,e,s){const i=kp.get(t);if(i?.[e])return Mn(i[e],s.dir);const o=kc.get(e);return o?Mn(o,s.dir):{keyframes:[],options:{duration:0}}}function At(t,e,s){return new Promise(i=>{if(s?.duration===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(e,Ki(as({},s),{duration:Nr()?0:s.duration}));o.addEventListener("cancel",i,{once:!0}),o.addEventListener("finish",i,{once:!0})})}function Rn(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function Nr(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Pt(t){return Promise.all(t.getAnimations().map(e=>new Promise(s=>{e.cancel(),requestAnimationFrame(s)})))}function Do(t,e){return t.map(s=>Ki(as({},s),{height:s.height==="auto"?`${e}px`:s.height}))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fn(t,e,s){return t?e(t):s?.(t)}var zt=class Ur extends H{constructor(){super(...arguments),this.localize=new at(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Pt(this.childrenContainer);const{keyframes:e,options:s}=Ct(this,"tree-item.collapse",{dir:this.localize.dir()});await At(this.childrenContainer,Do(e,this.childrenContainer.scrollHeight),s),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&Ur.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Pt(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:s}=Ct(this,"tree-item.expand",{dir:this.localize.dir()});await At(this.childrenContainer,Do(e,this.childrenContainer.scrollHeight),s),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(s=>Ur.isTreeItem(s)&&(e||!s.disabled)):[]}render(){const e=this.localize.dir()==="rtl",s=!this.loading&&(!this.isLeaf||this.lazy);return C`
      <div
        part="base"
        class="${W({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":s,"tree-item--rtl":this.localize.dir()==="rtl"})}"
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
            class=${W({"tree-item__expand-button":!0,"tree-item__expand-button--visible":s})}
            aria-hidden="true"
          >
            ${Fn(this.loading,()=>C` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Fn(this.selectable,()=>C`
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
                ?checked="${Ps(this.selected)}"
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
    `}};zt.styles=[q,sp];zt.dependencies={"sl-checkbox":Lt,"sl-icon":ft,"sl-spinner":Zi};n([U()],zt.prototype,"indeterminate",2);n([U()],zt.prototype,"isLeaf",2);n([U()],zt.prototype,"loading",2);n([U()],zt.prototype,"selectable",2);n([d({type:Boolean,reflect:!0})],zt.prototype,"expanded",2);n([d({type:Boolean,reflect:!0})],zt.prototype,"selected",2);n([d({type:Boolean,reflect:!0})],zt.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],zt.prototype,"lazy",2);n([L("slot:not([name])")],zt.prototype,"defaultSlot",2);n([L("slot[name=children]")],zt.prototype,"childrenSlot",2);n([L(".tree-item__item")],zt.prototype,"itemElement",2);n([L(".tree-item__children")],zt.prototype,"childrenContainer",2);n([L(".tree-item__expand-button slot")],zt.prototype,"expandButtonSlot",2);n([I("loading",{waitUntilFirstUpdate:!0})],zt.prototype,"handleLoadingChange",1);n([I("disabled")],zt.prototype,"handleDisabledChange",1);n([I("selected")],zt.prototype,"handleSelectedChange",1);n([I("expanded",{waitUntilFirstUpdate:!0})],zt.prototype,"handleExpandedChange",1);n([I("expanded",{waitUntilFirstUpdate:!0})],zt.prototype,"handleExpandAnimation",1);n([I("lazy",{waitUntilFirstUpdate:!0})],zt.prototype,"handleLazyChange",1);var Ti=zt;dt("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});dt("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Ti.define("sl-tree-item");var $p=N`
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
`,Sp=N`
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
`;const gs=Math.min,he=Math.max,Lo=Math.round,ho=Math.floor,je=t=>({x:t,y:t}),Ap={left:"right",right:"left",bottom:"top",top:"bottom"},zp={start:"end",end:"start"};function jr(t,e,s){return he(t,gs(e,s))}function si(t,e){return typeof t=="function"?t(e):t}function bs(t){return t.split("-")[0]}function ii(t){return t.split("-")[1]}function Cc(t){return t==="x"?"y":"x"}function za(t){return t==="y"?"height":"width"}const Ep=new Set(["top","bottom"]);function ss(t){return Ep.has(bs(t))?"y":"x"}function Ea(t){return Cc(ss(t))}function Tp(t,e,s){s===void 0&&(s=!1);const i=ii(t),o=Ea(t),r=za(o);let a=o==="x"?i===(s?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=Mo(a)),[a,Mo(a)]}function Op(t){const e=Mo(t);return[Wr(t),e,Wr(e)]}function Wr(t){return t.replace(/start|end/g,e=>zp[e])}const Vn=["left","right"],Bn=["right","left"],Ip=["top","bottom"],Pp=["bottom","top"];function Dp(t,e,s){switch(t){case"top":case"bottom":return s?e?Bn:Vn:e?Vn:Bn;case"left":case"right":return e?Ip:Pp;default:return[]}}function Lp(t,e,s,i){const o=ii(t);let r=Dp(bs(t),s==="start",i);return o&&(r=r.map(a=>a+"-"+o),e&&(r=r.concat(r.map(Wr)))),r}function Mo(t){return t.replace(/left|right|bottom|top/g,e=>Ap[e])}function Mp(t){return{top:0,right:0,bottom:0,left:0,...t}}function $c(t){return typeof t!="number"?Mp(t):{top:t,right:t,bottom:t,left:t}}function Ro(t){const{x:e,y:s,width:i,height:o}=t;return{width:i,height:o,top:s,left:e,right:e+i,bottom:s+o,x:e,y:s}}function Hn(t,e,s){let{reference:i,floating:o}=t;const r=ss(e),a=Ea(e),l=za(a),c=bs(e),h=r==="y",p=i.x+i.width/2-o.width/2,u=i.y+i.height/2-o.height/2,f=i[l]/2-o[l]/2;let m;switch(c){case"top":m={x:p,y:i.y-o.height};break;case"bottom":m={x:p,y:i.y+i.height};break;case"right":m={x:i.x+i.width,y:u};break;case"left":m={x:i.x-o.width,y:u};break;default:m={x:i.x,y:i.y}}switch(ii(e)){case"start":m[a]-=f*(s&&h?-1:1);break;case"end":m[a]+=f*(s&&h?-1:1);break}return m}const Rp=async(t,e,s)=>{const{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:a}=s,l=r.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(e));let h=await a.getElementRects({reference:t,floating:e,strategy:o}),{x:p,y:u}=Hn(h,i,c),f=i,m={},b=0;for(let _=0;_<l.length;_++){const{name:O,fn:T}=l[_],{x,y:A,data:y,reset:k}=await T({x:p,y:u,initialPlacement:i,placement:f,strategy:o,middlewareData:m,rects:h,platform:a,elements:{reference:t,floating:e}});p=x??p,u=A??u,m={...m,[O]:{...m[O],...y}},k&&b<=50&&(b++,typeof k=="object"&&(k.placement&&(f=k.placement),k.rects&&(h=k.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:o}):k.rects),{x:p,y:u}=Hn(h,f,c)),_=-1)}return{x:p,y:u,placement:f,strategy:o,middlewareData:m}};async function Ta(t,e){var s;e===void 0&&(e={});const{x:i,y:o,platform:r,rects:a,elements:l,strategy:c}=t,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:f=!1,padding:m=0}=si(e,t),b=$c(m),O=l[f?u==="floating"?"reference":"floating":u],T=Ro(await r.getClippingRect({element:(s=await(r.isElement==null?void 0:r.isElement(O)))==null||s?O:O.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:h,rootBoundary:p,strategy:c})),x=u==="floating"?{x:i,y:o,width:a.floating.width,height:a.floating.height}:a.reference,A=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),y=await(r.isElement==null?void 0:r.isElement(A))?await(r.getScale==null?void 0:r.getScale(A))||{x:1,y:1}:{x:1,y:1},k=Ro(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:A,strategy:c}):x);return{top:(T.top-k.top+b.top)/y.y,bottom:(k.bottom-T.bottom+b.bottom)/y.y,left:(T.left-k.left+b.left)/y.x,right:(k.right-T.right+b.right)/y.x}}const Fp=t=>({name:"arrow",options:t,async fn(e){const{x:s,y:i,placement:o,rects:r,platform:a,elements:l,middlewareData:c}=e,{element:h,padding:p=0}=si(t,e)||{};if(h==null)return{};const u=$c(p),f={x:s,y:i},m=Ea(o),b=za(m),_=await a.getDimensions(h),O=m==="y",T=O?"top":"left",x=O?"bottom":"right",A=O?"clientHeight":"clientWidth",y=r.reference[b]+r.reference[m]-f[m]-r.floating[b],k=f[m]-r.reference[m],V=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let K=V?V[A]:0;(!K||!await(a.isElement==null?void 0:a.isElement(V)))&&(K=l.floating[A]||r.floating[b]);const Z=y/2-k/2,j=K/2-_[b]/2-1,F=gs(u[T],j),yt=gs(u[x],j),_t=F,Tt=K-_[b]-yt,xt=K/2-_[b]/2+Z,Gt=jr(_t,xt,Tt),mt=!c.arrow&&ii(o)!=null&&xt!==Gt&&r.reference[b]/2-(xt<_t?F:yt)-_[b]/2<0,it=mt?xt<_t?xt-_t:xt-Tt:0;return{[m]:f[m]+it,data:{[m]:Gt,centerOffset:xt-Gt-it,...mt&&{alignmentOffset:it}},reset:mt}}}),Vp=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var s,i;const{placement:o,middlewareData:r,rects:a,initialPlacement:l,platform:c,elements:h}=e,{mainAxis:p=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:_=!0,...O}=si(t,e);if((s=r.arrow)!=null&&s.alignmentOffset)return{};const T=bs(o),x=ss(l),A=bs(l)===l,y=await(c.isRTL==null?void 0:c.isRTL(h.floating)),k=f||(A||!_?[Mo(l)]:Op(l)),V=b!=="none";!f&&V&&k.push(...Lp(l,_,b,y));const K=[l,...k],Z=await Ta(e,O),j=[];let F=((i=r.flip)==null?void 0:i.overflows)||[];if(p&&j.push(Z[T]),u){const xt=Tp(o,a,y);j.push(Z[xt[0]],Z[xt[1]])}if(F=[...F,{placement:o,overflows:j}],!j.every(xt=>xt<=0)){var yt,_t;const xt=(((yt=r.flip)==null?void 0:yt.index)||0)+1,Gt=K[xt];if(Gt&&(!(u==="alignment"?x!==ss(Gt):!1)||F.every(et=>et.overflows[0]>0&&ss(et.placement)===x)))return{data:{index:xt,overflows:F},reset:{placement:Gt}};let mt=(_t=F.filter(it=>it.overflows[0]<=0).sort((it,et)=>it.overflows[1]-et.overflows[1])[0])==null?void 0:_t.placement;if(!mt)switch(m){case"bestFit":{var Tt;const it=(Tt=F.filter(et=>{if(V){const Wt=ss(et.placement);return Wt===x||Wt==="y"}return!0}).map(et=>[et.placement,et.overflows.filter(Wt=>Wt>0).reduce((Wt,Bs)=>Wt+Bs,0)]).sort((et,Wt)=>et[1]-Wt[1])[0])==null?void 0:Tt[0];it&&(mt=it);break}case"initialPlacement":mt=l;break}if(o!==mt)return{reset:{placement:mt}}}return{}}}},Bp=new Set(["left","top"]);async function Hp(t,e){const{placement:s,platform:i,elements:o}=t,r=await(i.isRTL==null?void 0:i.isRTL(o.floating)),a=bs(s),l=ii(s),c=ss(s)==="y",h=Bp.has(a)?-1:1,p=r&&c?-1:1,u=si(e,t);let{mainAxis:f,crossAxis:m,alignmentAxis:b}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return l&&typeof b=="number"&&(m=l==="end"?b*-1:b),c?{x:m*p,y:f*h}:{x:f*h,y:m*p}}const Np=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var s,i;const{x:o,y:r,placement:a,middlewareData:l}=e,c=await Hp(e,t);return a===((s=l.offset)==null?void 0:s.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:o+c.x,y:r+c.y,data:{...c,placement:a}}}}},Up=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:s,y:i,placement:o}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:O=>{let{x:T,y:x}=O;return{x:T,y:x}}},...c}=si(t,e),h={x:s,y:i},p=await Ta(e,c),u=ss(bs(o)),f=Cc(u);let m=h[f],b=h[u];if(r){const O=f==="y"?"top":"left",T=f==="y"?"bottom":"right",x=m+p[O],A=m-p[T];m=jr(x,m,A)}if(a){const O=u==="y"?"top":"left",T=u==="y"?"bottom":"right",x=b+p[O],A=b-p[T];b=jr(x,b,A)}const _=l.fn({...e,[f]:m,[u]:b});return{..._,data:{x:_.x-s,y:_.y-i,enabled:{[f]:r,[u]:a}}}}}},jp=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var s,i;const{placement:o,rects:r,platform:a,elements:l}=e,{apply:c=()=>{},...h}=si(t,e),p=await Ta(e,h),u=bs(o),f=ii(o),m=ss(o)==="y",{width:b,height:_}=r.floating;let O,T;u==="top"||u==="bottom"?(O=u,T=f===(await(a.isRTL==null?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(T=u,O=f==="end"?"top":"bottom");const x=_-p.top-p.bottom,A=b-p.left-p.right,y=gs(_-p[O],x),k=gs(b-p[T],A),V=!e.middlewareData.shift;let K=y,Z=k;if((s=e.middlewareData.shift)!=null&&s.enabled.x&&(Z=A),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(K=x),V&&!f){const F=he(p.left,0),yt=he(p.right,0),_t=he(p.top,0),Tt=he(p.bottom,0);m?Z=b-2*(F!==0||yt!==0?F+yt:he(p.left,p.right)):K=_-2*(_t!==0||Tt!==0?_t+Tt:he(p.top,p.bottom))}await c({...e,availableWidth:Z,availableHeight:K});const j=await a.getDimensions(l.floating);return b!==j.width||_!==j.height?{reset:{rects:!0}}:{}}}};function Jo(){return typeof window<"u"}function oi(t){return Sc(t)?(t.nodeName||"").toLowerCase():"#document"}function fe(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ke(t){var e;return(e=(Sc(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Sc(t){return Jo()?t instanceof Node||t instanceof fe(t).Node:!1}function Se(t){return Jo()?t instanceof Element||t instanceof fe(t).Element:!1}function qe(t){return Jo()?t instanceof HTMLElement||t instanceof fe(t).HTMLElement:!1}function Nn(t){return!Jo()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof fe(t).ShadowRoot}const Wp=new Set(["inline","contents"]);function Ji(t){const{overflow:e,overflowX:s,overflowY:i,display:o}=Ae(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+s)&&!Wp.has(o)}const qp=new Set(["table","td","th"]);function Kp(t){return qp.has(oi(t))}const Yp=[":popover-open",":modal"];function tr(t){return Yp.some(e=>{try{return t.matches(e)}catch{return!1}})}const Xp=["transform","translate","scale","rotate","perspective"],Gp=["transform","translate","scale","rotate","perspective","filter"],Qp=["paint","layout","strict","content"];function er(t){const e=Oa(),s=Se(t)?Ae(t):t;return Xp.some(i=>s[i]?s[i]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!e&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!e&&(s.filter?s.filter!=="none":!1)||Gp.some(i=>(s.willChange||"").includes(i))||Qp.some(i=>(s.contain||"").includes(i))}function Zp(t){let e=vs(t);for(;qe(e)&&!ti(e);){if(er(e))return e;if(tr(e))return null;e=vs(e)}return null}function Oa(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Jp=new Set(["html","body","#document"]);function ti(t){return Jp.has(oi(t))}function Ae(t){return fe(t).getComputedStyle(t)}function sr(t){return Se(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function vs(t){if(oi(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Nn(t)&&t.host||Ke(t);return Nn(e)?e.host:e}function Ac(t){const e=vs(t);return ti(e)?t.ownerDocument?t.ownerDocument.body:t.body:qe(e)&&Ji(e)?e:Ac(e)}function ji(t,e,s){var i;e===void 0&&(e=[]),s===void 0&&(s=!0);const o=Ac(t),r=o===((i=t.ownerDocument)==null?void 0:i.body),a=fe(o);if(r){const l=qr(a);return e.concat(a,a.visualViewport||[],Ji(o)?o:[],l&&s?ji(l):[])}return e.concat(o,ji(o,[],s))}function qr(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function zc(t){const e=Ae(t);let s=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const o=qe(t),r=o?t.offsetWidth:s,a=o?t.offsetHeight:i,l=Lo(s)!==r||Lo(i)!==a;return l&&(s=r,i=a),{width:s,height:i,$:l}}function Ia(t){return Se(t)?t:t.contextElement}function Gs(t){const e=Ia(t);if(!qe(e))return je(1);const s=e.getBoundingClientRect(),{width:i,height:o,$:r}=zc(e);let a=(r?Lo(s.width):s.width)/i,l=(r?Lo(s.height):s.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const tf=je(0);function Ec(t){const e=fe(t);return!Oa()||!e.visualViewport?tf:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ef(t,e,s){return e===void 0&&(e=!1),!s||e&&s!==fe(t)?!1:e}function Ds(t,e,s,i){e===void 0&&(e=!1),s===void 0&&(s=!1);const o=t.getBoundingClientRect(),r=Ia(t);let a=je(1);e&&(i?Se(i)&&(a=Gs(i)):a=Gs(t));const l=ef(r,s,i)?Ec(r):je(0);let c=(o.left+l.x)/a.x,h=(o.top+l.y)/a.y,p=o.width/a.x,u=o.height/a.y;if(r){const f=fe(r),m=i&&Se(i)?fe(i):i;let b=f,_=qr(b);for(;_&&i&&m!==b;){const O=Gs(_),T=_.getBoundingClientRect(),x=Ae(_),A=T.left+(_.clientLeft+parseFloat(x.paddingLeft))*O.x,y=T.top+(_.clientTop+parseFloat(x.paddingTop))*O.y;c*=O.x,h*=O.y,p*=O.x,u*=O.y,c+=A,h+=y,b=fe(_),_=qr(b)}}return Ro({width:p,height:u,x:c,y:h})}function Pa(t,e){const s=sr(t).scrollLeft;return e?e.left+s:Ds(Ke(t)).left+s}function Tc(t,e,s){s===void 0&&(s=!1);const i=t.getBoundingClientRect(),o=i.left+e.scrollLeft-(s?0:Pa(t,i)),r=i.top+e.scrollTop;return{x:o,y:r}}function sf(t){let{elements:e,rect:s,offsetParent:i,strategy:o}=t;const r=o==="fixed",a=Ke(i),l=e?tr(e.floating):!1;if(i===a||l&&r)return s;let c={scrollLeft:0,scrollTop:0},h=je(1);const p=je(0),u=qe(i);if((u||!u&&!r)&&((oi(i)!=="body"||Ji(a))&&(c=sr(i)),qe(i))){const m=Ds(i);h=Gs(i),p.x=m.x+i.clientLeft,p.y=m.y+i.clientTop}const f=a&&!u&&!r?Tc(a,c,!0):je(0);return{width:s.width*h.x,height:s.height*h.y,x:s.x*h.x-c.scrollLeft*h.x+p.x+f.x,y:s.y*h.y-c.scrollTop*h.y+p.y+f.y}}function of(t){return Array.from(t.getClientRects())}function rf(t){const e=Ke(t),s=sr(t),i=t.ownerDocument.body,o=he(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=he(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-s.scrollLeft+Pa(t);const l=-s.scrollTop;return Ae(i).direction==="rtl"&&(a+=he(e.clientWidth,i.clientWidth)-o),{width:o,height:r,x:a,y:l}}function af(t,e){const s=fe(t),i=Ke(t),o=s.visualViewport;let r=i.clientWidth,a=i.clientHeight,l=0,c=0;if(o){r=o.width,a=o.height;const h=Oa();(!h||h&&e==="fixed")&&(l=o.offsetLeft,c=o.offsetTop)}return{width:r,height:a,x:l,y:c}}const nf=new Set(["absolute","fixed"]);function lf(t,e){const s=Ds(t,!0,e==="fixed"),i=s.top+t.clientTop,o=s.left+t.clientLeft,r=qe(t)?Gs(t):je(1),a=t.clientWidth*r.x,l=t.clientHeight*r.y,c=o*r.x,h=i*r.y;return{width:a,height:l,x:c,y:h}}function Un(t,e,s){let i;if(e==="viewport")i=af(t,s);else if(e==="document")i=rf(Ke(t));else if(Se(e))i=lf(e,s);else{const o=Ec(t);i={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return Ro(i)}function Oc(t,e){const s=vs(t);return s===e||!Se(s)||ti(s)?!1:Ae(s).position==="fixed"||Oc(s,e)}function cf(t,e){const s=e.get(t);if(s)return s;let i=ji(t,[],!1).filter(l=>Se(l)&&oi(l)!=="body"),o=null;const r=Ae(t).position==="fixed";let a=r?vs(t):t;for(;Se(a)&&!ti(a);){const l=Ae(a),c=er(a);!c&&l.position==="fixed"&&(o=null),(r?!c&&!o:!c&&l.position==="static"&&!!o&&nf.has(o.position)||Ji(a)&&!c&&Oc(t,a))?i=i.filter(p=>p!==a):o=l,a=vs(a)}return e.set(t,i),i}function df(t){let{element:e,boundary:s,rootBoundary:i,strategy:o}=t;const a=[...s==="clippingAncestors"?tr(e)?[]:cf(e,this._c):[].concat(s),i],l=a[0],c=a.reduce((h,p)=>{const u=Un(e,p,o);return h.top=he(u.top,h.top),h.right=gs(u.right,h.right),h.bottom=gs(u.bottom,h.bottom),h.left=he(u.left,h.left),h},Un(e,l,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function hf(t){const{width:e,height:s}=zc(t);return{width:e,height:s}}function uf(t,e,s){const i=qe(e),o=Ke(e),r=s==="fixed",a=Ds(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=je(0);function h(){c.x=Pa(o)}if(i||!i&&!r)if((oi(e)!=="body"||Ji(o))&&(l=sr(e)),i){const m=Ds(e,!0,r,e);c.x=m.x+e.clientLeft,c.y=m.y+e.clientTop}else o&&h();r&&!i&&o&&h();const p=o&&!i&&!r?Tc(o,l):je(0),u=a.left+l.scrollLeft-c.x-p.x,f=a.top+l.scrollTop-c.y-p.y;return{x:u,y:f,width:a.width,height:a.height}}function xr(t){return Ae(t).position==="static"}function jn(t,e){if(!qe(t)||Ae(t).position==="fixed")return null;if(e)return e(t);let s=t.offsetParent;return Ke(t)===s&&(s=s.ownerDocument.body),s}function Ic(t,e){const s=fe(t);if(tr(t))return s;if(!qe(t)){let o=vs(t);for(;o&&!ti(o);){if(Se(o)&&!xr(o))return o;o=vs(o)}return s}let i=jn(t,e);for(;i&&Kp(i)&&xr(i);)i=jn(i,e);return i&&ti(i)&&xr(i)&&!er(i)?s:i||Zp(t)||s}const pf=async function(t){const e=this.getOffsetParent||Ic,s=this.getDimensions,i=await s(t.floating);return{reference:uf(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function ff(t){return Ae(t).direction==="rtl"}const xo={convertOffsetParentRelativeRectToViewportRelativeRect:sf,getDocumentElement:Ke,getClippingRect:df,getOffsetParent:Ic,getElementRects:pf,getClientRects:of,getDimensions:hf,getScale:Gs,isElement:Se,isRTL:ff};function Pc(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function mf(t,e){let s=null,i;const o=Ke(t);function r(){var l;clearTimeout(i),(l=s)==null||l.disconnect(),s=null}function a(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const h=t.getBoundingClientRect(),{left:p,top:u,width:f,height:m}=h;if(l||e(),!f||!m)return;const b=ho(u),_=ho(o.clientWidth-(p+f)),O=ho(o.clientHeight-(u+m)),T=ho(p),A={rootMargin:-b+"px "+-_+"px "+-O+"px "+-T+"px",threshold:he(0,gs(1,c))||1};let y=!0;function k(V){const K=V[0].intersectionRatio;if(K!==c){if(!y)return a();K?a(!1,K):i=setTimeout(()=>{a(!1,1e-7)},1e3)}K===1&&!Pc(h,t.getBoundingClientRect())&&a(),y=!1}try{s=new IntersectionObserver(k,{...A,root:o.ownerDocument})}catch{s=new IntersectionObserver(k,A)}s.observe(t)}return a(!0),r}function gf(t,e,s,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,h=Ia(t),p=o||r?[...h?ji(h):[],...ji(e)]:[];p.forEach(T=>{o&&T.addEventListener("scroll",s,{passive:!0}),r&&T.addEventListener("resize",s)});const u=h&&l?mf(h,s):null;let f=-1,m=null;a&&(m=new ResizeObserver(T=>{let[x]=T;x&&x.target===h&&m&&(m.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var A;(A=m)==null||A.observe(e)})),s()}),h&&!c&&m.observe(h),m.observe(e));let b,_=c?Ds(t):null;c&&O();function O(){const T=Ds(t);_&&!Pc(_,T)&&s(),_=T,b=requestAnimationFrame(O)}return s(),()=>{var T;p.forEach(x=>{o&&x.removeEventListener("scroll",s),r&&x.removeEventListener("resize",s)}),u?.(),(T=m)==null||T.disconnect(),m=null,c&&cancelAnimationFrame(b)}}const bf=Np,vf=Up,yf=Vp,Wn=jp,_f=Fp,wf=(t,e,s)=>{const i=new Map,o={platform:xo,...s},r={...o.platform,_c:i};return Rp(t,e,{...o,platform:r})};function xf(t){return kf(t)}function kr(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function kf(t){for(let e=t;e;e=kr(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=kr(t);e;e=kr(e)){if(!(e instanceof Element))continue;const s=getComputedStyle(e);if(s.display!=="contents"&&(s.position!=="static"||er(s)||e.tagName==="BODY"))return e}return null}function Cf(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var ht=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let i=0,o=0,r=0,a=0,l=0,c=0,h=0,p=0;s?t.top<e.top?(i=t.left,o=t.bottom,r=t.right,a=t.bottom,l=e.left,c=e.top,h=e.right,p=e.top):(i=e.left,o=e.bottom,r=e.right,a=e.bottom,l=t.left,c=t.top,h=t.right,p=t.top):t.left<e.left?(i=t.right,o=t.top,r=e.left,a=e.top,l=t.right,c=t.bottom,h=e.left,p=e.bottom):(i=e.right,o=e.top,r=t.left,a=t.top,l=e.right,c=e.bottom,h=t.left,p=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${p}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Cf(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=gf(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[bf({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Wn({apply:({rects:s})=>{const i=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${s.reference.width}px`:"",this.popup.style.height=o?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(yf({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(vf({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Wn({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(_f({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?s=>xo.getOffsetParent(s,xf):xo.getOffsetParent;wf(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Ki(as({},xo),{getOffsetParent:e})}).then(({x:s,y:i,middlewareData:o,placement:r})=>{const a=this.localize.dir()==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${s}px`,top:`${i}px`}),this.arrow){const c=o.arrow.x,h=o.arrow.y;let p="",u="",f="",m="";if(this.arrowPlacement==="start"){const b=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=a?b:"",m=a?"":b}else if(this.arrowPlacement==="end"){const b=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=a?"":b,m=a?b:"",f=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof c=="number"?`${c}px`:"",p=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:p,right:u,bottom:f,left:m,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return C`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${W({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${W({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?C`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};ht.styles=[q,Sp];n([L(".popup")],ht.prototype,"popup",2);n([L(".popup__arrow")],ht.prototype,"arrowEl",2);n([d()],ht.prototype,"anchor",2);n([d({type:Boolean,reflect:!0})],ht.prototype,"active",2);n([d({reflect:!0})],ht.prototype,"placement",2);n([d({reflect:!0})],ht.prototype,"strategy",2);n([d({type:Number})],ht.prototype,"distance",2);n([d({type:Number})],ht.prototype,"skidding",2);n([d({type:Boolean})],ht.prototype,"arrow",2);n([d({attribute:"arrow-placement"})],ht.prototype,"arrowPlacement",2);n([d({attribute:"arrow-padding",type:Number})],ht.prototype,"arrowPadding",2);n([d({type:Boolean})],ht.prototype,"flip",2);n([d({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],ht.prototype,"flipFallbackPlacements",2);n([d({attribute:"flip-fallback-strategy"})],ht.prototype,"flipFallbackStrategy",2);n([d({type:Object})],ht.prototype,"flipBoundary",2);n([d({attribute:"flip-padding",type:Number})],ht.prototype,"flipPadding",2);n([d({type:Boolean})],ht.prototype,"shift",2);n([d({type:Object})],ht.prototype,"shiftBoundary",2);n([d({attribute:"shift-padding",type:Number})],ht.prototype,"shiftPadding",2);n([d({attribute:"auto-size"})],ht.prototype,"autoSize",2);n([d()],ht.prototype,"sync",2);n([d({type:Object})],ht.prototype,"autoSizeBoundary",2);n([d({attribute:"auto-size-padding",type:Number})],ht.prototype,"autoSizePadding",2);n([d({attribute:"hover-bridge",type:Boolean})],ht.prototype,"hoverBridge",2);function ee(t,e){return new Promise(s=>{function i(o){o.target===t&&(t.removeEventListener(e,i),s())}t.addEventListener(e,i)})}var Rt=class extends H{constructor(){super(),this.localize=new at(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Rn(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Rn(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Pt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:s,options:i}=Ct(this,"tooltip.show",{dir:this.localize.dir()});await At(this.popup.popup,s,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Pt(this.body);const{keyframes:s,options:i}=Ct(this,"tooltip.hide",{dir:this.localize.dir()});await At(this.popup.popup,s,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ee(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ee(this,"sl-after-hide")}render(){return C`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${W({tooltip:!0,"tooltip--open":this.open})}
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
    `}};Rt.styles=[q,$p];Rt.dependencies={"sl-popup":ht};n([L("slot:not([name])")],Rt.prototype,"defaultSlot",2);n([L(".tooltip__body")],Rt.prototype,"body",2);n([L("sl-popup")],Rt.prototype,"popup",2);n([d()],Rt.prototype,"content",2);n([d()],Rt.prototype,"placement",2);n([d({type:Boolean,reflect:!0})],Rt.prototype,"disabled",2);n([d({type:Number})],Rt.prototype,"distance",2);n([d({type:Boolean,reflect:!0})],Rt.prototype,"open",2);n([d({type:Number})],Rt.prototype,"skidding",2);n([d()],Rt.prototype,"trigger",2);n([d({type:Boolean})],Rt.prototype,"hoist",2);n([I("open",{waitUntilFirstUpdate:!0})],Rt.prototype,"handleOpenChange",1);n([I(["content","distance","hoist","placement","skidding"])],Rt.prototype,"handleOptionsChange",1);n([I("disabled")],Rt.prototype,"handleDisabledChange",1);dt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});dt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Rt.define("sl-tooltip");var $f=N`
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
`;function It(t,e,s){const i=o=>Object.is(o,-0)?0:o;return t<e?i(e):t>s?i(s):i(t)}function qn(t,e=!1){function s(r){const a=r.getChildrenItems({includeDisabled:!1});if(a.length){const l=a.every(h=>h.selected),c=a.every(h=>!h.selected&&!h.indeterminate);r.selected=l,r.indeterminate=!l&&!c}}function i(r){const a=r.parentElement;Ti.isTreeItem(a)&&(s(a),i(a))}function o(r){for(const a of r.getChildrenItems())a.selected=e?r.selected||a.selected:!a.disabled&&r.selected,o(a);e&&s(r)}o(t),i(t)}var Ms=class extends H{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new at(this),this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const s=t.querySelector(`[slot="${e}-icon"]`),i=this.getExpandButtonIcon(e);i&&(s===null?t.append(i):s.hasAttribute("data-default")&&s.replaceWith(i))})},this.handleTreeChanged=t=>{for(const e of t){const s=[...e.addedNodes].filter(Ti.isTreeItem),i=[...e.removedNodes].filter(Ti.isTreeItem);s.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Ti.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}getExpandButtonIcon(t){const s=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(s){const i=s.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),qn(t);else if(this.selection==="single"||t.isLeaf){const i=this.getAllTreeItems();for(const o of i)o.selected=o===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const s=this.selectedItems;(e.length!==s.length||s.some(i=>!e.includes(i)))&&Promise.all(s.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:s}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(o=>{var r;return["input","textarea"].includes((r=o?.tagName)==null?void 0:r.toLowerCase())}))return;const e=this.getFocusableItems(),s=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const o=e.findIndex(c=>c.matches(":focus")),r=e[o],a=c=>{const h=e[It(c,0,e.length-1)];this.focusItem(h)},l=c=>{r.expanded=c};t.key==="ArrowDown"?a(o+1):t.key==="ArrowUp"?a(o-1):s&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"?!r||r.disabled||r.expanded||r.isLeaf&&!r.lazy?a(o+1):l(!0):s&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"?!r||r.disabled||r.isLeaf||!r.expanded?a(o-1):l(!1):t.key==="Home"?a(0):t.key==="End"?a(e.length-1):(t.key==="Enter"||t.key===" ")&&(r.disabled||this.selectItem(r))}}handleClick(t){const e=t.target,s=e.closest("sl-tree-item"),i=t.composedPath().some(o=>{var r;return(r=o?.classList)==null?void 0:r.contains("tree-item__expand-button")});!s||s.disabled||e!==this.clickTarget||(i?s.expanded=!s.expanded:this.selectItem(s))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const s of e)s.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(s=>qn(s,!0)))}get selectedItems(){const t=this.getAllTreeItems(),e=s=>s.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(s=>{var i;if(s.disabled)return!1;const o=(i=s.parentElement)==null?void 0:i.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||e.has(o))&&e.add(s),!e.has(s)})}render(){return C`
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
    `}};Ms.styles=[q,$f];n([L("slot:not([name])")],Ms.prototype,"defaultSlot",2);n([L("slot[name=expand-icon]")],Ms.prototype,"expandedIconSlot",2);n([L("slot[name=collapse-icon]")],Ms.prototype,"collapsedIconSlot",2);n([d()],Ms.prototype,"selection",2);n([I("selection")],Ms.prototype,"handleSelectionChange",1);Ms.define("sl-tree");var Sf=N`
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
`,Da=class extends H{render(){return C` <slot></slot> `}};Da.styles=[q,Sf];Da.define("sl-visually-hidden");var Af=N`
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
`,zf=0,to=class extends H{constructor(){super(...arguments),this.attrId=++zf,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return C`
      <slot
        part="base"
        class=${W({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};to.styles=[q,Af];n([d({reflect:!0})],to.prototype,"name",2);n([d({type:Boolean,reflect:!0})],to.prototype,"active",2);n([I("active")],to.prototype,"handleActiveChange",1);to.define("sl-tab-panel");var Ef=N`
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
`,Tf=N`
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
 */const Dc=Symbol.for(""),Of=t=>{if(t?.r===Dc)return t?._$litStatic$},Fo=(t,...e)=>({_$litStatic$:e.reduce((s,i,o)=>s+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[o+1],t[0]),r:Dc}),Kn=new Map,If=t=>(e,...s)=>{const i=s.length;let o,r;const a=[],l=[];let c,h=0,p=!1;for(;h<i;){for(c=e[h];h<i&&(r=s[h],(o=Of(r))!==void 0);)c+=o+e[++h],p=!0;h!==i&&l.push(r),a.push(c),h++}if(h===i&&a.push(e[i]),p){const u=a.join("$$lit$$");(e=Kn.get(u))===void 0&&(a.raw=a,Kn.set(u,e=a)),s=l}return t(e,...s)},Oi=If(C);var Mt=class extends H{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Fo`a`:Fo`button`;return Oi`
      <${e}
        part="base"
        class=${W({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${B(t?void 0:this.disabled)}
        type=${B(t?void 0:"button")}
        href=${B(t?this.href:void 0)}
        target=${B(t?this.target:void 0)}
        download=${B(t?this.download:void 0)}
        rel=${B(t&&this.target?"noreferrer noopener":void 0)}
        role=${B(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${B(this.name)}
          library=${B(this.library)}
          src=${B(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};Mt.styles=[q,Tf];Mt.dependencies={"sl-icon":ft};n([L(".icon-button")],Mt.prototype,"button",2);n([U()],Mt.prototype,"hasFocus",2);n([d()],Mt.prototype,"name",2);n([d()],Mt.prototype,"library",2);n([d()],Mt.prototype,"src",2);n([d()],Mt.prototype,"href",2);n([d()],Mt.prototype,"target",2);n([d()],Mt.prototype,"download",2);n([d()],Mt.prototype,"label",2);n([d({type:Boolean,reflect:!0})],Mt.prototype,"disabled",2);var _s=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return C`
      <span
        part="base"
        class=${W({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?C`
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
    `}};_s.styles=[q,Ef];_s.dependencies={"sl-icon-button":Mt};n([d({reflect:!0})],_s.prototype,"variant",2);n([d({reflect:!0})],_s.prototype,"size",2);n([d({type:Boolean,reflect:!0})],_s.prototype,"pill",2);n([d({type:Boolean})],_s.prototype,"removable",2);_s.define("sl-tag");var Pf=N`
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
`,nt=class extends H{constructor(){super(...arguments),this.formControlController=new ns(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new se(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&((t=this.resizeObserver)==null||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,s="none"){this.input.setSelectionRange(t,e,s)}setRangeText(t,e,s,i="preserve"){const o=e??this.input.selectionStart,r=s??this.input.selectionEnd;this.input.setRangeText(t,o,r,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e;return C`
      <div
        part="form-control"
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${W({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${B(this.name)}
              .value=${Ps(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${B(this.placeholder)}
              rows=${B(this.rows)}
              minlength=${B(this.minlength)}
              maxlength=${B(this.maxlength)}
              autocapitalize=${B(this.autocapitalize)}
              autocorrect=${B(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${B(this.spellcheck)}
              enterkeyhint=${B(this.enterkeyhint)}
              inputmode=${B(this.inputmode)}
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};nt.styles=[q,Ls,Pf];n([L(".textarea__control")],nt.prototype,"input",2);n([L(".textarea__size-adjuster")],nt.prototype,"sizeAdjuster",2);n([U()],nt.prototype,"hasFocus",2);n([d()],nt.prototype,"title",2);n([d()],nt.prototype,"name",2);n([d()],nt.prototype,"value",2);n([d({reflect:!0})],nt.prototype,"size",2);n([d({type:Boolean,reflect:!0})],nt.prototype,"filled",2);n([d()],nt.prototype,"label",2);n([d({attribute:"help-text"})],nt.prototype,"helpText",2);n([d()],nt.prototype,"placeholder",2);n([d({type:Number})],nt.prototype,"rows",2);n([d()],nt.prototype,"resize",2);n([d({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],nt.prototype,"readonly",2);n([d({reflect:!0})],nt.prototype,"form",2);n([d({type:Boolean,reflect:!0})],nt.prototype,"required",2);n([d({type:Number})],nt.prototype,"minlength",2);n([d({type:Number})],nt.prototype,"maxlength",2);n([d()],nt.prototype,"autocapitalize",2);n([d()],nt.prototype,"autocorrect",2);n([d()],nt.prototype,"autocomplete",2);n([d({type:Boolean})],nt.prototype,"autofocus",2);n([d()],nt.prototype,"enterkeyhint",2);n([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],nt.prototype,"spellcheck",2);n([d()],nt.prototype,"inputmode",2);n([ei()],nt.prototype,"defaultValue",2);n([I("disabled",{waitUntilFirstUpdate:!0})],nt.prototype,"handleDisabledChange",1);n([I("rows",{waitUntilFirstUpdate:!0})],nt.prototype,"handleRowsChange",1);n([I("value",{waitUntilFirstUpdate:!0})],nt.prototype,"handleValueChange",1);nt.define("sl-textarea");var Df=N`
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
`,Lf=0,ze=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.attrId=++Lf,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,C`
      <div
        part="base"
        class=${W({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?C`
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
    `}};ze.styles=[q,Df];ze.dependencies={"sl-icon-button":Mt};n([L(".tab")],ze.prototype,"tab",2);n([d({reflect:!0})],ze.prototype,"panel",2);n([d({type:Boolean,reflect:!0})],ze.prototype,"active",2);n([d({type:Boolean,reflect:!0})],ze.prototype,"closable",2);n([d({type:Boolean,reflect:!0})],ze.prototype,"disabled",2);n([d({type:Number,reflect:!0})],ze.prototype,"tabIndex",2);n([I("active")],ze.prototype,"handleActiveChange",1);n([I("disabled")],ze.prototype,"handleDisabledChange",1);ze.define("sl-tab");var Mf=N`
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
`,Rf=N`
  :host {
    display: contents;
  }
`,eo=class extends H{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(s=>this.resizeObserver.unobserve(s)),this.observedElements=[],e.forEach(s=>{this.resizeObserver.observe(s),this.observedElements.push(s)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return C` <slot @slotchange=${this.handleSlotChange}></slot> `}};eo.styles=[q,Rf];n([d({type:Boolean,reflect:!0})],eo.prototype,"disabled",2);n([I("disabled",{waitUntilFirstUpdate:!0})],eo.prototype,"handleDisabledChange",1);function Ff(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Kr=new Set;function Vf(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Bf(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Ii(t){if(Kr.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=Vf()+Bf();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",s),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Pi(t){Kr.delete(t),Kr.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Yr(t,e,s="vertical",i="smooth"){const o=Ff(t,e),r=o.top+e.scrollTop,a=o.left+e.scrollLeft,l=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,h=e.scrollTop,p=e.scrollTop+e.offsetHeight;(s==="horizontal"||s==="both")&&(a<l?e.scrollTo({left:a,behavior:i}):a+t.clientWidth>c&&e.scrollTo({left:a-e.offsetWidth+t.clientWidth,behavior:i})),(s==="vertical"||s==="both")&&(r<h?e.scrollTo({top:r,behavior:i}):r+t.clientHeight>p&&e.scrollTo({top:r-e.offsetHeight+t.clientHeight,behavior:i}))}var Nt=class extends H{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new at(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{const s=e.filter(({target:i})=>{if(i===this)return!0;if(i.closest("sl-tab-group")!==this)return!1;const o=i.tagName.toLowerCase();return o==="sl-tab"||o==="sl-tab-panel"});if(s.length!==0){if(s.some(i=>!["aria-labelledby","aria-controls"].includes(i.attributeName))&&setTimeout(()=>this.setAriaLabels()),s.some(i=>i.attributeName==="disabled"))this.syncTabsAndPanels();else if(s.some(i=>i.attributeName==="active")){const o=s.filter(r=>r.attributeName==="active"&&r.target.tagName.toLowerCase()==="sl-tab").map(r=>r.target).find(r=>r.active);o&&this.setActiveTab(o)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((s,i)=>{var o;s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),i.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const s=t.target.closest("sl-tab");s?.closest("sl-tab-group")===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(t){const s=t.target.closest("sl-tab");if(s?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const o=this.tabs.find(l=>l.matches(":focus")),r=this.localize.dir()==="rtl";let a=null;if(o?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")a=this.focusableTabs[0];else if(t.key==="End")a=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(r?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const l=this.tabs.findIndex(c=>c===o);a=this.findNextFocusableTab(l,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(r?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const l=this.tabs.findIndex(c=>c===o);a=this.findNextFocusableTab(l,"forward")}if(!a)return;a.tabIndex=0,a.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(a,{scrollBehavior:"smooth"}):this.tabs.forEach(l=>{l.tabIndex=l===a?0:-1}),["top","bottom"].includes(this.placement)&&Yr(a,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=as({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const s=this.activeTab;this.activeTab=t,this.tabs.forEach(i=>{i.active=i===this.activeTab,i.tabIndex=i===this.activeTab?0:-1}),this.panels.forEach(i=>{var o;return i.active=i.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Yr(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(s&&this.emit("sl-tab-hide",{detail:{name:s.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(s=>s.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,s=t.clientHeight,i=this.localize.dir()==="rtl",o=this.getAllTabs(),a=o.slice(0,o.indexOf(t)).reduce((l,c)=>({left:l.left+c.clientWidth,top:l.top+c.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*a.left}px`:`${a.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.translate=`0 ${a.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let s=null;const i=e==="forward"?1:-1;let o=t+i;for(;t<this.tabs.length;){if(s=this.tabs[o]||null,s===null){e==="forward"?s=this.focusableTabs[0]:s=this.focusableTabs[this.focusableTabs.length-1];break}if(!s.disabled)break;o+=i}return s}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(s=>s.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return C`
      <div
        part="base"
        class=${W({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?C`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${W({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
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

          ${this.hasScrollControls?C`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${W({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
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
    `}};Nt.styles=[q,Mf];Nt.dependencies={"sl-icon-button":Mt,"sl-resize-observer":eo};n([L(".tab-group")],Nt.prototype,"tabGroup",2);n([L(".tab-group__body")],Nt.prototype,"body",2);n([L(".tab-group__nav")],Nt.prototype,"nav",2);n([L(".tab-group__indicator")],Nt.prototype,"indicator",2);n([U()],Nt.prototype,"hasScrollControls",2);n([U()],Nt.prototype,"shouldHideScrollStartButton",2);n([U()],Nt.prototype,"shouldHideScrollEndButton",2);n([d()],Nt.prototype,"placement",2);n([d()],Nt.prototype,"activation",2);n([d({attribute:"no-scroll-controls",type:Boolean})],Nt.prototype,"noScrollControls",2);n([d({attribute:"fixed-scroll-controls",type:Boolean})],Nt.prototype,"fixedScrollControls",2);n([Xi({passive:!0})],Nt.prototype,"updateScrollButtons",1);n([I("noScrollControls",{waitUntilFirstUpdate:!0})],Nt.prototype,"updateScrollControls",1);n([I("placement",{waitUntilFirstUpdate:!0})],Nt.prototype,"syncIndicator",1);Nt.define("sl-tab-group");var Hf=N`
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
`,La=class extends H{constructor(){super(...arguments),this.effect="none"}render(){return C`
      <div
        part="base"
        class=${W({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};La.styles=[q,Hf];n([d()],La.prototype,"effect",2);La.define("sl-skeleton");var Nf=N`
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
`;function Di(t,e){function s(o){const r=t.getBoundingClientRect(),a=t.ownerDocument.defaultView,l=r.left+a.scrollX,c=r.top+a.scrollY,h=o.pageX-l,p=o.pageY-c;e?.onMove&&e.onMove(h,p)}function i(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",i),e?.onStop&&e.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",i),e?.initialEvent instanceof PointerEvent&&s(e.initialEvent)}var Yn=()=>null,me=class extends H{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new at(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=Yn,this.snapThreshold=12}toSnapFunction(t){const e=t.split(" ");return({pos:s,size:i,snapThreshold:o,isRtl:r,vertical:a})=>{let l=s,c=Number.POSITIVE_INFINITY;return e.forEach(h=>{let p;if(h.startsWith("repeat(")){const f=t.substring(7,t.length-1),m=f.endsWith("%"),b=Number.parseFloat(f),_=m?i*(b/100):b;p=Math.round((r&&!a?i-s:s)/_)*_}else h.endsWith("%")?p=i*(Number.parseFloat(h)/100):p=Number.parseFloat(h);r&&!a&&(p=i-p);const u=Math.abs(s-p);u<=o&&u<c&&(l=p,c=u)}),l}}set snap(t){this.snapValue=t??"",t?this.snapFunction=typeof t=="string"?this.toSnapFunction(t):t:this.snapFunction=Yn}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),Di(this,{onMove:(s,i)=>{var o;let r=this.vertical?i:s;this.primary==="end"&&(r=this.size-r),r=(o=this.snapFunction({pos:r,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))!=null?o:r,this.position=It(this.pixelsToPercentage(r),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const s=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=s),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=s),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const i=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=i})}this.position=It(e,0,100)}}handleResize(t){const{width:e,height:s}=t[0].contentRect;this.size=this.vertical?s:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",s=this.localize.dir()==="rtl",i=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,o="auto";return this.primary==="end"?s&&!this.vertical?this.style[t]=`${i} var(--divider-width) ${o}`:this.style[t]=`${o} var(--divider-width) ${i}`:s&&!this.vertical?this.style[t]=`${o} var(--divider-width) ${i}`:this.style[t]=`${i} var(--divider-width) ${o}`,this.style[e]="",C`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${B(this.disabled?void 0:"0")}
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
    `}};me.styles=[q,Nf];n([L(".divider")],me.prototype,"divider",2);n([d({type:Number,reflect:!0})],me.prototype,"position",2);n([d({attribute:"position-in-pixels",type:Number})],me.prototype,"positionInPixels",2);n([d({type:Boolean,reflect:!0})],me.prototype,"vertical",2);n([d({type:Boolean,reflect:!0})],me.prototype,"disabled",2);n([d()],me.prototype,"primary",2);n([d({reflect:!0})],me.prototype,"snap",1);n([d({type:Number,attribute:"snap-threshold"})],me.prototype,"snapThreshold",2);n([I("position")],me.prototype,"handlePositionChange",1);n([I("positionInPixels")],me.prototype,"handlePositionInPixelsChange",1);n([I("vertical")],me.prototype,"handleVerticalChange",1);me.define("sl-split-panel");var Uf=N`
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
`,Yt=class extends H{constructor(){super(...arguments),this.formControlController=new ns(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new se(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return C`
      <div
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${W({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${B(this.value)}
            .checked=${Ps(this.checked)}
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
    `}};Yt.styles=[q,Ls,Uf];n([L('input[type="checkbox"]')],Yt.prototype,"input",2);n([U()],Yt.prototype,"hasFocus",2);n([d()],Yt.prototype,"title",2);n([d()],Yt.prototype,"name",2);n([d()],Yt.prototype,"value",2);n([d({reflect:!0})],Yt.prototype,"size",2);n([d({type:Boolean,reflect:!0})],Yt.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],Yt.prototype,"checked",2);n([ei("checked")],Yt.prototype,"defaultChecked",2);n([d({reflect:!0})],Yt.prototype,"form",2);n([d({type:Boolean,reflect:!0})],Yt.prototype,"required",2);n([d({attribute:"help-text"})],Yt.prototype,"helpText",2);n([I("checked",{waitUntilFirstUpdate:!0})],Yt.prototype,"handleCheckedChange",1);n([I("disabled",{waitUntilFirstUpdate:!0})],Yt.prototype,"handleDisabledChange",1);Yt.define("sl-switch");eo.define("sl-resize-observer");var jf=N`
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
 */let Xr=class extends Qi{constructor(e){if(super(e),this.it=kt,e.type!==He.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===kt||e==null)return this._t=void 0,this.it=e;if(e===pe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const s=[e];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}};Xr.directiveName="unsafeHTML",Xr.resultType=1;const ko=Gi(Xr);var st=class extends H{constructor(){super(...arguments),this.formControlController=new ns(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new se(this,"help-text","label"),this.localize=new at(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>C`
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
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,s=e.closest(".select__clear")!==null,i=e.closest("sl-icon-button")!==null;if(!(s||i)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const o=this.getAllOptions(),r=o.indexOf(this.currentOption);let a=Math.max(0,r);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(a=r+1,a>o.length-1&&(a=0)):t.key==="ArrowUp"?(a=r-1,a<0&&(a=o.length-1)):t.key==="Home"?a=0:t.key==="End"&&(a=o.length-1),this.setCurrentOption(o[a])}if(t.key&&t.key.length===1||t.key==="Backspace"){const o=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const r of o)if(r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const s=t.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||s||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const s=t.target.closest("sl-option"),i=this.value;s&&!s.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,s=Array.isArray(e)?e:[e],i=[];t.forEach(o=>i.push(o.value)),this.setSelectedOptions(t.filter(o=>s.includes(o.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),s=Array.isArray(t)?t:[t];e.forEach(i=>i.selected=!1),s.length&&s.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,s;const i=this.getAllOptions();this.selectedOptions=i.filter(r=>r.selected);const o=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(r=>r.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const r=this.selectedOptions[0];this.value=(t=r?.value)!=null?t:"",this.displayLabel=(s=(e=r?.getTextLabel)==null?void 0:e.call(r))!=null?s:""}this.valueHasChanged=o,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(t,e);return C`<div @sl-remove=${i=>this.handleTagRemove(i,t)}>
          ${typeof s=="string"?ko(s):s}
        </div>`}else if(e===this.maxOptionsVisible)return C`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return C``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,s){if(super.attributeChangedCallback(t,e,s),t==="value"){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}}handleValueChange(){if(!this.valueHasChanged){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(s=>e.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Pt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=Ct(this,"select.show",{dir:this.localize.dir()});await At(this.popup.popup,t,e),this.currentOption&&Yr(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Pt(this);const{keyframes:t,options:e}=Ct(this,"select.hide",{dir:this.localize.dir()});await At(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,ee(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,ee(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value&&this.value.length<=0;return C`
      <div
        part="form-control"
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${W({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?C`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${o?C`
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};st.styles=[q,Ls,jf];st.dependencies={"sl-icon":ft,"sl-popup":ht,"sl-tag":_s};n([L(".select")],st.prototype,"popup",2);n([L(".select__combobox")],st.prototype,"combobox",2);n([L(".select__display-input")],st.prototype,"displayInput",2);n([L(".select__value-input")],st.prototype,"valueInput",2);n([L(".select__listbox")],st.prototype,"listbox",2);n([U()],st.prototype,"hasFocus",2);n([U()],st.prototype,"displayLabel",2);n([U()],st.prototype,"currentOption",2);n([U()],st.prototype,"selectedOptions",2);n([U()],st.prototype,"valueHasChanged",2);n([d()],st.prototype,"name",2);n([U()],st.prototype,"value",1);n([d({attribute:"value"})],st.prototype,"defaultValue",2);n([d({reflect:!0})],st.prototype,"size",2);n([d()],st.prototype,"placeholder",2);n([d({type:Boolean,reflect:!0})],st.prototype,"multiple",2);n([d({attribute:"max-options-visible",type:Number})],st.prototype,"maxOptionsVisible",2);n([d({type:Boolean,reflect:!0})],st.prototype,"disabled",2);n([d({type:Boolean})],st.prototype,"clearable",2);n([d({type:Boolean,reflect:!0})],st.prototype,"open",2);n([d({type:Boolean})],st.prototype,"hoist",2);n([d({type:Boolean,reflect:!0})],st.prototype,"filled",2);n([d({type:Boolean,reflect:!0})],st.prototype,"pill",2);n([d()],st.prototype,"label",2);n([d({reflect:!0})],st.prototype,"placement",2);n([d({attribute:"help-text"})],st.prototype,"helpText",2);n([d({reflect:!0})],st.prototype,"form",2);n([d({type:Boolean,reflect:!0})],st.prototype,"required",2);n([d()],st.prototype,"getTag",2);n([I("disabled",{waitUntilFirstUpdate:!0})],st.prototype,"handleDisabledChange",1);n([I(["defaultValue","value"],{waitUntilFirstUpdate:!0})],st.prototype,"handleValueChange",1);n([I("open",{waitUntilFirstUpdate:!0})],st.prototype,"handleOpenChange",1);dt("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});dt("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Wf=st;st.define("sl-select");Zi.define("sl-spinner");var qf=N`
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
`,$t=class extends H{constructor(){super(...arguments),this.formControlController=new ns(this),this.hasSlotController=new se(this,"help-text","label"),this.localize=new at(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,s=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",r=e*t;if(o){const a=`${e-r}px + ${t} * ${i}`;this.output.style.translate=`calc((${a} - ${s/2}px - ${i} / 2))`}else{const a=`${r}px - ${t} * ${i}`;this.output.style.translate=`calc(${a} - ${s/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e;return C`
      <div
        part="form-control"
        class=${W({"form-control":!0,"form-control--medium":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${W({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${B(this.name)}
              ?disabled=${this.disabled}
              min=${B(this.min)}
              max=${B(this.max)}
              step=${B(this.step)}
              .value=${Ps(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?C`
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};$t.styles=[q,Ls,qf];n([L(".range__control")],$t.prototype,"input",2);n([L(".range__tooltip")],$t.prototype,"output",2);n([U()],$t.prototype,"hasFocus",2);n([U()],$t.prototype,"hasTooltip",2);n([d()],$t.prototype,"title",2);n([d()],$t.prototype,"name",2);n([d({type:Number})],$t.prototype,"value",2);n([d()],$t.prototype,"label",2);n([d({attribute:"help-text"})],$t.prototype,"helpText",2);n([d({type:Boolean,reflect:!0})],$t.prototype,"disabled",2);n([d({type:Number})],$t.prototype,"min",2);n([d({type:Number})],$t.prototype,"max",2);n([d({type:Number})],$t.prototype,"step",2);n([d()],$t.prototype,"tooltip",2);n([d({attribute:!1})],$t.prototype,"tooltipFormatter",2);n([d({reflect:!0})],$t.prototype,"form",2);n([ei()],$t.prototype,"defaultValue",2);n([Xi({passive:!0})],$t.prototype,"handleThumbDragStart",1);n([I("value",{waitUntilFirstUpdate:!0})],$t.prototype,"handleValueChange",1);n([I("disabled",{waitUntilFirstUpdate:!0})],$t.prototype,"handleDisabledChange",1);n([I("hasTooltip",{waitUntilFirstUpdate:!0})],$t.prototype,"syncRange",1);$t.define("sl-range");var Kf=N`
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
 */const Lc="important",Yf=" !"+Lc,ae=Gi(class extends Qi{constructor(t){if(super(t),t.type!==He.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const o=e[i];if(o!=null){this.ft.add(i);const r=typeof o=="string"&&o.endsWith(Yf);i.includes("-")||r?s.setProperty(i,r?o.slice(0,-11):o,r?Lc:""):s[i]=o}}return pe}});var Xt=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:s,right:i,width:o}=this.rating.getBoundingClientRect(),r=e?this.roundToPrecision((i-t)/o*this.max,this.precision):this.roundToPrecision((t-s)/o*this.max,this.precision);return It(r,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight"){const o=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft"){const o=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const s=1/e;return Math.ceil(t*s)/s}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys());let s=0;return this.disabled||this.readonly?s=this.value:s=this.isHovering?this.hoverValue:this.value,C`
      <div
        part="base"
        class=${W({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
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
          ${e.map(i=>s>i&&s<i+1?C`
                <span
                  class=${W({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===i+1})}
                  role="presentation"
                >
                  <div
                    style=${ae({clipPath:t?`inset(0 ${(s-i)*100}% 0 0)`:`inset(0 0 0 ${(s-i)*100}%)`})}
                  >
                    ${ko(this.getSymbol(i+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${ae({clipPath:t?`inset(0 0 0 ${100-(s-i)*100}%)`:`inset(0 ${100-(s-i)*100}% 0 0)`})}
                  >
                    ${ko(this.getSymbol(i+1))}
                  </div>
                </span>
              `:C`
              <span
                class=${W({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===i+1,"rating__symbol--active":s>=i+1})}
                role="presentation"
              >
                ${ko(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Xt.styles=[q,Kf];Xt.dependencies={"sl-icon":ft};n([L(".rating")],Xt.prototype,"rating",2);n([U()],Xt.prototype,"hoverValue",2);n([U()],Xt.prototype,"isHovering",2);n([d()],Xt.prototype,"label",2);n([d({type:Number})],Xt.prototype,"value",2);n([d({type:Number})],Xt.prototype,"max",2);n([d({type:Number})],Xt.prototype,"precision",2);n([d({type:Boolean,reflect:!0})],Xt.prototype,"readonly",2);n([d({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);n([d()],Xt.prototype,"getSymbol",2);n([Xi({passive:!0})],Xt.prototype,"handleTouchMove",1);n([I("hoverValue")],Xt.prototype,"handleHoverValueChange",1);n([I("isHovering")],Xt.prototype,"handleIsHoveringChange",1);Xt.define("sl-rating");var Xf=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Rs=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const s=e.getTime()-t.getTime(),{unit:i,value:o}=Xf.find(r=>Math.abs(s)<r.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(s/o),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let r;i==="minute"?r=uo("second"):i==="hour"?r=uo("minute"):i==="day"?r=uo("hour"):r=uo("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),r)}return C` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};n([U()],Rs.prototype,"isoTime",2);n([U()],Rs.prototype,"relativeTime",2);n([d()],Rs.prototype,"date",2);n([d()],Rs.prototype,"format",2);n([d()],Rs.prototype,"numeric",2);n([d({type:Boolean})],Rs.prototype,"sync",2);function uo(t){const s={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return s-Date.now()%s}Rs.define("sl-relative-time");var Mc=N`
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
`,Gf=N`
  ${Mc}

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
`,Ee=class extends H{constructor(){super(...arguments),this.hasSlotController=new se(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Oi`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${W({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${B(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Ee.styles=[q,Gf];n([L(".button")],Ee.prototype,"input",2);n([L(".hidden-input")],Ee.prototype,"hiddenInput",2);n([U()],Ee.prototype,"hasFocus",2);n([d({type:Boolean,reflect:!0})],Ee.prototype,"checked",2);n([d()],Ee.prototype,"value",2);n([d({type:Boolean,reflect:!0})],Ee.prototype,"disabled",2);n([d({reflect:!0})],Ee.prototype,"size",2);n([d({type:Boolean,reflect:!0})],Ee.prototype,"pill",2);n([I("disabled",{waitUntilFirstUpdate:!0})],Ee.prototype,"handleDisabledChange",1);Ee.define("sl-radio-button");var Qf=N`
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
`,Zf=N`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Fs=class extends H{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=vi(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=vi(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=vi(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=vi(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const s=t.indexOf(e),i=vi(e);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",s===0),i.toggleAttribute("data-sl-button-group__button--inner",s>0&&s<t.length-1),i.toggleAttribute("data-sl-button-group__button--last",s===t.length-1),i.toggleAttribute("data-sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return C`
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
    `}};Fs.styles=[q,Zf];n([L("slot")],Fs.prototype,"defaultSlot",2);n([U()],Fs.prototype,"disableRole",2);n([d()],Fs.prototype,"label",2);function vi(t){var e;const s="sl-button, sl-radio-button";return(e=t.closest(s))!=null?e:t.querySelector(s)}var Ut=class extends H{constructor(){super(...arguments),this.formControlController=new ns(this),this.hasSlotController=new se(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?Pu:t?Iu:Go}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),s=this.getAllRadios(),i=this.value;!e||e.disabled||(this.value=e.value,s.forEach(o=>o.checked=o===e),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const s=this.getAllRadios().filter(l=>!l.disabled),i=(e=s.find(l=>l.checked))!=null?e:s[0],o=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,r=this.value;let a=s.indexOf(i)+o;a<0&&(a=s.length-1),a>s.length-1&&(a=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||l.setAttribute("tabindex","-1")}),this.value=s[a].value,s[a].checked=!0,this.hasButtonGroup?s[a].shadowRoot.querySelector("button").focus():(s[a].setAttribute("tabindex","0"),s[a].focus()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const s=this.getAllRadios();if(await Promise.all(s.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=s.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),s.length>0&&!s.some(i=>i.checked))if(this.hasButtonGroup){const i=(t=s[0].shadowRoot)==null?void 0:t.querySelector("button");i&&i.setAttribute("tabindex","0")}else s[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const i=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),s=e.find(r=>r.checked),i=e.find(r=>!r.disabled),o=s||i;o&&o.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,o=C`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return C`
      <fieldset
        part="form-control"
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
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

          ${this.hasButtonGroup?C`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Ut.styles=[q,Ls,Qf];Ut.dependencies={"sl-button-group":Fs};n([L("slot:not([name])")],Ut.prototype,"defaultSlot",2);n([L(".radio-group__validation-input")],Ut.prototype,"validationInput",2);n([U()],Ut.prototype,"hasButtonGroup",2);n([U()],Ut.prototype,"errorMessage",2);n([U()],Ut.prototype,"defaultValue",2);n([d()],Ut.prototype,"label",2);n([d({attribute:"help-text"})],Ut.prototype,"helpText",2);n([d()],Ut.prototype,"name",2);n([d({reflect:!0})],Ut.prototype,"value",2);n([d({reflect:!0})],Ut.prototype,"size",2);n([d({reflect:!0})],Ut.prototype,"form",2);n([d({type:Boolean,reflect:!0})],Ut.prototype,"required",2);n([I("size",{waitUntilFirstUpdate:!0})],Ut.prototype,"handleSizeChange",1);n([I("value")],Ut.prototype,"handleValueChange",1);Ut.define("sl-radio-group");var Jf=N`
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
`,ri=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),s=2*Math.PI*e,i=s-this.value/100*s;this.indicatorOffset=`${i}px`}}render(){return C`
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
    `}};ri.styles=[q,Jf];n([L(".progress-ring__indicator")],ri.prototype,"indicator",2);n([U()],ri.prototype,"indicatorOffset",2);n([d({type:Number,reflect:!0})],ri.prototype,"value",2);n([d()],ri.prototype,"label",2);ri.define("sl-progress-ring");var tm=N`
  :host {
    display: inline-block;
  }
`;let Rc=null;class Fc{}Fc.render=function(t,e){Rc(t,e)};self.QrCreator=Fc;(function(t){function e(l,c,h,p){var u={},f=t(h,c);f.u(l),f.J(),p=p||0;var m=f.h(),b=f.h()+2*p;return u.text=l,u.level=c,u.version=h,u.O=b,u.a=function(_,O){return _-=p,O-=p,0>_||_>=m||0>O||O>=m?!1:f.a(_,O)},u}function s(l,c,h,p,u,f,m,b,_,O){function T(x,A,y,k,V,K,Z){x?(l.lineTo(A+K,y+Z),l.arcTo(A,y,k,V,f)):l.lineTo(A,y)}m?l.moveTo(c+f,h):l.moveTo(c,h),T(b,p,h,p,u,-f,0),T(_,p,u,c,u,0,-f),T(O,c,u,c,h,f,0),T(m,c,h,p,h,0,f)}function i(l,c,h,p,u,f,m,b,_,O){function T(x,A,y,k){l.moveTo(x+y,A),l.lineTo(x,A),l.lineTo(x,A+k),l.arcTo(x,A,x+y,A,f)}m&&T(c,h,f,f),b&&T(p,h,-f,f),_&&T(p,u,-f,-f),O&&T(c,u,f,-f)}function o(l,c){var h=c.fill;if(typeof h=="string")l.fillStyle=h;else{var p=h.type,u=h.colorStops;if(h=h.position.map(m=>Math.round(m*c.size)),p==="linear-gradient")var f=l.createLinearGradient.apply(l,h);else if(p==="radial-gradient")f=l.createRadialGradient.apply(l,h);else throw Error("Unsupported fill");u.forEach(([m,b])=>{f.addColorStop(m,b)}),l.fillStyle=f}}function r(l,c){t:{var h=c.text,p=c.v,u=c.N,f=c.K,m=c.P;for(u=Math.max(1,u||1),f=Math.min(40,f||40);u<=f;u+=1)try{var b=e(h,p,u,m);break t}catch{}b=void 0}if(!b)return null;for(h=l.getContext("2d"),c.background&&(h.fillStyle=c.background,h.fillRect(c.left,c.top,c.size,c.size)),p=b.O,f=c.size/p,h.beginPath(),m=0;m<p;m+=1)for(u=0;u<p;u+=1){var _=h,O=c.left+u*f,T=c.top+m*f,x=m,A=u,y=b.a,k=O+f,V=T+f,K=x-1,Z=x+1,j=A-1,F=A+1,yt=Math.floor(Math.min(.5,Math.max(0,c.R))*f),_t=y(x,A),Tt=y(K,j),xt=y(K,A);K=y(K,F);var Gt=y(x,F);F=y(Z,F),A=y(Z,A),Z=y(Z,j),x=y(x,j),O=Math.round(O),T=Math.round(T),k=Math.round(k),V=Math.round(V),_t?s(_,O,T,k,V,yt,!xt&&!x,!xt&&!Gt,!A&&!Gt,!A&&!x):i(_,O,T,k,V,yt,xt&&x&&Tt,xt&&Gt&&K,A&&Gt&&F,A&&x&&Z)}return o(h,c),h.fill(),l}var a={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Rc=function(l,c){var h={};Object.assign(h,a,l),h.N=h.minVersion,h.K=h.maxVersion,h.v=h.ecLevel,h.left=h.left,h.top=h.top,h.size=h.size,h.fill=h.fill,h.background=h.background,h.text=h.text,h.R=h.radius,h.P=h.quiet,c instanceof HTMLCanvasElement?((c.width!==h.size||c.height!==h.size)&&(c.width=h.size,c.height=h.size),c.getContext("2d").clearRect(0,0,c.width,c.height),r(c,h)):(l=document.createElement("canvas"),l.width=h.size,l.height=h.size,h=r(l,h),c.appendChild(h))}})(function(){function t(c){var h=s.s(c);return{S:function(){return 4},b:function(){return h.length},write:function(p){for(var u=0;u<h.length;u+=1)p.put(h[u],8)}}}function e(){var c=[],h=0,p={B:function(){return c},c:function(u){return(c[Math.floor(u/8)]>>>7-u%8&1)==1},put:function(u,f){for(var m=0;m<f;m+=1)p.m((u>>>f-m-1&1)==1)},f:function(){return h},m:function(u){var f=Math.floor(h/8);c.length<=f&&c.push(0),u&&(c[f]|=128>>>h%8),h+=1}};return p}function s(c,h){function p(x,A){for(var y=-1;7>=y;y+=1)if(!(-1>=x+y||b<=x+y))for(var k=-1;7>=k;k+=1)-1>=A+k||b<=A+k||(m[x+y][A+k]=0<=y&&6>=y&&(k==0||k==6)||0<=k&&6>=k&&(y==0||y==6)||2<=y&&4>=y&&2<=k&&4>=k)}function u(x,A){for(var y=b=4*c+17,k=Array(y),V=0;V<y;V+=1){k[V]=Array(y);for(var K=0;K<y;K+=1)k[V][K]=null}for(m=k,p(0,0),p(b-7,0),p(0,b-7),y=r.G(c),k=0;k<y.length;k+=1)for(V=0;V<y.length;V+=1){K=y[k];var Z=y[V];if(m[K][Z]==null)for(var j=-2;2>=j;j+=1)for(var F=-2;2>=F;F+=1)m[K+j][Z+F]=j==-2||j==2||F==-2||F==2||j==0&&F==0}for(y=8;y<b-8;y+=1)m[y][6]==null&&(m[y][6]=y%2==0);for(y=8;y<b-8;y+=1)m[6][y]==null&&(m[6][y]=y%2==0);for(y=r.w(f<<3|A),k=0;15>k;k+=1)V=!x&&(y>>k&1)==1,m[6>k?k:8>k?k+1:b-15+k][8]=V,m[8][8>k?b-k-1:9>k?15-k:14-k]=V;if(m[b-8][8]=!x,7<=c){for(y=r.A(c),k=0;18>k;k+=1)V=!x&&(y>>k&1)==1,m[Math.floor(k/3)][k%3+b-8-3]=V;for(k=0;18>k;k+=1)V=!x&&(y>>k&1)==1,m[k%3+b-8-3][Math.floor(k/3)]=V}if(_==null){for(x=l.I(c,f),y=e(),k=0;k<O.length;k+=1)V=O[k],y.put(4,4),y.put(V.b(),r.f(4,c)),V.write(y);for(k=V=0;k<x.length;k+=1)V+=x[k].j;if(y.f()>8*V)throw Error("code length overflow. ("+y.f()+">"+8*V+")");for(y.f()+4<=8*V&&y.put(0,4);y.f()%8!=0;)y.m(!1);for(;!(y.f()>=8*V)&&(y.put(236,8),!(y.f()>=8*V));)y.put(17,8);var yt=0;for(V=k=0,K=Array(x.length),Z=Array(x.length),j=0;j<x.length;j+=1){var _t=x[j].j,Tt=x[j].o-_t;for(k=Math.max(k,_t),V=Math.max(V,Tt),K[j]=Array(_t),F=0;F<K[j].length;F+=1)K[j][F]=255&y.B()[F+yt];for(yt+=_t,F=r.C(Tt),_t=i(K[j],F.b()-1).l(F),Z[j]=Array(F.b()-1),F=0;F<Z[j].length;F+=1)Tt=F+_t.b()-Z[j].length,Z[j][F]=0<=Tt?_t.c(Tt):0}for(F=y=0;F<x.length;F+=1)y+=x[F].o;for(y=Array(y),F=yt=0;F<k;F+=1)for(j=0;j<x.length;j+=1)F<K[j].length&&(y[yt]=K[j][F],yt+=1);for(F=0;F<V;F+=1)for(j=0;j<x.length;j+=1)F<Z[j].length&&(y[yt]=Z[j][F],yt+=1);_=y}for(x=_,y=-1,k=b-1,V=7,K=0,A=r.F(A),Z=b-1;0<Z;Z-=2)for(Z==6&&--Z;;){for(j=0;2>j;j+=1)m[k][Z-j]==null&&(F=!1,K<x.length&&(F=(x[K]>>>V&1)==1),A(k,Z-j)&&(F=!F),m[k][Z-j]=F,--V,V==-1&&(K+=1,V=7));if(k+=y,0>k||b<=k){k-=y,y=-y;break}}}var f=o[h],m=null,b=0,_=null,O=[],T={u:function(x){x=t(x),O.push(x),_=null},a:function(x,A){if(0>x||b<=x||0>A||b<=A)throw Error(x+","+A);return m[x][A]},h:function(){return b},J:function(){for(var x=0,A=0,y=0;8>y;y+=1){u(!0,y);var k=r.D(T);(y==0||x>k)&&(x=k,A=y)}u(!1,A)}};return T}function i(c,h){if(typeof c.length>"u")throw Error(c.length+"/"+h);var p=function(){for(var f=0;f<c.length&&c[f]==0;)f+=1;for(var m=Array(c.length-f+h),b=0;b<c.length-f;b+=1)m[b]=c[b+f];return m}(),u={c:function(f){return p[f]},b:function(){return p.length},multiply:function(f){for(var m=Array(u.b()+f.b()-1),b=0;b<u.b();b+=1)for(var _=0;_<f.b();_+=1)m[b+_]^=a.i(a.g(u.c(b))+a.g(f.c(_)));return i(m,0)},l:function(f){if(0>u.b()-f.b())return u;for(var m=a.g(u.c(0))-a.g(f.c(0)),b=Array(u.b()),_=0;_<u.b();_+=1)b[_]=u.c(_);for(_=0;_<f.b();_+=1)b[_]^=a.i(a.g(f.c(_))+m);return i(b,0).l(f)}};return u}s.s=function(c){for(var h=[],p=0;p<c.length;p++){var u=c.charCodeAt(p);128>u?h.push(u):2048>u?h.push(192|u>>6,128|u&63):55296>u||57344<=u?h.push(224|u>>12,128|u>>6&63,128|u&63):(p++,u=65536+((u&1023)<<10|c.charCodeAt(p)&1023),h.push(240|u>>18,128|u>>12&63,128|u>>6&63,128|u&63))}return h};var o={L:1,M:0,Q:3,H:2},r=function(){function c(u){for(var f=0;u!=0;)f+=1,u>>>=1;return f}var h=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],p={w:function(u){for(var f=u<<10;0<=c(f)-c(1335);)f^=1335<<c(f)-c(1335);return(u<<10|f)^21522},A:function(u){for(var f=u<<12;0<=c(f)-c(7973);)f^=7973<<c(f)-c(7973);return u<<12|f},G:function(u){return h[u-1]},F:function(u){switch(u){case 0:return function(f,m){return(f+m)%2==0};case 1:return function(f){return f%2==0};case 2:return function(f,m){return m%3==0};case 3:return function(f,m){return(f+m)%3==0};case 4:return function(f,m){return(Math.floor(f/2)+Math.floor(m/3))%2==0};case 5:return function(f,m){return f*m%2+f*m%3==0};case 6:return function(f,m){return(f*m%2+f*m%3)%2==0};case 7:return function(f,m){return(f*m%3+(f+m)%2)%2==0};default:throw Error("bad maskPattern:"+u)}},C:function(u){for(var f=i([1],0),m=0;m<u;m+=1)f=f.multiply(i([1,a.i(m)],0));return f},f:function(u,f){if(u!=4||1>f||40<f)throw Error("mode: "+u+"; type: "+f);return 10>f?8:16},D:function(u){for(var f=u.h(),m=0,b=0;b<f;b+=1)for(var _=0;_<f;_+=1){for(var O=0,T=u.a(b,_),x=-1;1>=x;x+=1)if(!(0>b+x||f<=b+x))for(var A=-1;1>=A;A+=1)0>_+A||f<=_+A||(x!=0||A!=0)&&T==u.a(b+x,_+A)&&(O+=1);5<O&&(m+=3+O-5)}for(b=0;b<f-1;b+=1)for(_=0;_<f-1;_+=1)O=0,u.a(b,_)&&(O+=1),u.a(b+1,_)&&(O+=1),u.a(b,_+1)&&(O+=1),u.a(b+1,_+1)&&(O+=1),(O==0||O==4)&&(m+=3);for(b=0;b<f;b+=1)for(_=0;_<f-6;_+=1)u.a(b,_)&&!u.a(b,_+1)&&u.a(b,_+2)&&u.a(b,_+3)&&u.a(b,_+4)&&!u.a(b,_+5)&&u.a(b,_+6)&&(m+=40);for(_=0;_<f;_+=1)for(b=0;b<f-6;b+=1)u.a(b,_)&&!u.a(b+1,_)&&u.a(b+2,_)&&u.a(b+3,_)&&u.a(b+4,_)&&!u.a(b+5,_)&&u.a(b+6,_)&&(m+=40);for(_=O=0;_<f;_+=1)for(b=0;b<f;b+=1)u.a(b,_)&&(O+=1);return m+=Math.abs(100*O/f/f-50)/5*10}};return p}(),a=function(){for(var c=Array(256),h=Array(256),p=0;8>p;p+=1)c[p]=1<<p;for(p=8;256>p;p+=1)c[p]=c[p-4]^c[p-5]^c[p-6]^c[p-8];for(p=0;255>p;p+=1)h[c[p]]=p;return{g:function(u){if(1>u)throw Error("glog("+u+")");return h[u]},i:function(u){for(;0>u;)u+=255;for(;256<=u;)u-=255;return c[u]}}}(),l=function(){function c(u,f){switch(f){case o.L:return h[4*(u-1)];case o.M:return h[4*(u-1)+1];case o.Q:return h[4*(u-1)+2];case o.H:return h[4*(u-1)+3]}}var h=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],p={I:function(u,f){var m=c(u,f);if(typeof m>"u")throw Error("bad rs block @ typeNumber:"+u+"/errorCorrectLevel:"+f);u=m.length/3,f=[];for(var b=0;b<u;b+=1)for(var _=m[3*b],O=m[3*b+1],T=m[3*b+2],x=0;x<_;x+=1){var A=T,y={};y.o=O,y.j=A,f.push(y)}return f}};return p}();return s}());const em=QrCreator;var Te=class extends H{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&em.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return C`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${ae({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Te.styles=[q,tm];n([L("canvas")],Te.prototype,"canvas",2);n([d()],Te.prototype,"value",2);n([d()],Te.prototype,"label",2);n([d({type:Number})],Te.prototype,"size",2);n([d()],Te.prototype,"fill",2);n([d()],Te.prototype,"background",2);n([d({type:Number})],Te.prototype,"radius",2);n([d({attribute:"error-correction"})],Te.prototype,"errorCorrection",2);n([I(["background","errorCorrection","fill","radius","size","value"])],Te.prototype,"generate",1);Te.define("sl-qr-code");var sm=N`
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
`,Ye=class extends H{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return C`
      <span
        part="base"
        class=${W({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?C` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Ye.styles=[q,sm];Ye.dependencies={"sl-icon":ft};n([U()],Ye.prototype,"checked",2);n([U()],Ye.prototype,"hasFocus",2);n([d()],Ye.prototype,"value",2);n([d({reflect:!0})],Ye.prototype,"size",2);n([d({type:Boolean,reflect:!0})],Ye.prototype,"disabled",2);n([I("checked")],Ye.prototype,"handleCheckedChange",1);n([I("disabled",{waitUntilFirstUpdate:!0})],Ye.prototype,"handleDisabledChange",1);Ye.define("sl-radio");var im=N`
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
`,ke=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("slot")||(e+=s.textContent)),s.nodeType===Node.TEXT_NODE&&(e+=s.textContent)}),e.trim()}render(){return C`
      <div
        part="base"
        class=${W({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};ke.styles=[q,im];ke.dependencies={"sl-icon":ft};n([L(".option__label")],ke.prototype,"defaultSlot",2);n([U()],ke.prototype,"current",2);n([U()],ke.prototype,"selected",2);n([U()],ke.prototype,"hasHover",2);n([d({reflect:!0})],ke.prototype,"value",2);n([d({type:Boolean,reflect:!0})],ke.prototype,"disabled",2);n([I("disabled")],ke.prototype,"handleDisabledChange",1);n([I("selected")],ke.prototype,"handleSelectedChange",1);n([I("value")],ke.prototype,"handleValueChange",1);ke.define("sl-option");ht.define("sl-popup");var om=N`
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
`,so=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return C`
      <div
        part="base"
        class=${W({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${B(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${ae({width:`${this.value}%`})}>
          ${this.indeterminate?"":C` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};so.styles=[q,om];n([d({type:Number,reflect:!0})],so.prototype,"value",2);n([d({type:Boolean,reflect:!0})],so.prototype,"indeterminate",2);n([d()],so.prototype,"label",2);so.define("sl-progress-bar");var rm=N`
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
`,Vc=class extends H{render(){return C` <slot part="base" class="menu-label"></slot> `}};Vc.styles=[q,rm];Vc.define("sl-menu-label");var am=N`
  :host {
    display: contents;
  }
`,Xe=class extends H{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return C` <slot></slot> `}};Xe.styles=[q,am];n([d({reflect:!0})],Xe.prototype,"attr",2);n([d({attribute:"attr-old-value",type:Boolean,reflect:!0})],Xe.prototype,"attrOldValue",2);n([d({attribute:"char-data",type:Boolean,reflect:!0})],Xe.prototype,"charData",2);n([d({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Xe.prototype,"charDataOldValue",2);n([d({attribute:"child-list",type:Boolean,reflect:!0})],Xe.prototype,"childList",2);n([d({type:Boolean,reflect:!0})],Xe.prototype,"disabled",2);n([I("disabled")],Xe.prototype,"handleDisabledChange",1);n([I("attr",{waitUntilFirstUpdate:!0}),I("attr-old-value",{waitUntilFirstUpdate:!0}),I("char-data",{waitUntilFirstUpdate:!0}),I("char-data-old-value",{waitUntilFirstUpdate:!0}),I("childList",{waitUntilFirstUpdate:!0})],Xe.prototype,"handleChange",1);Xe.define("sl-mutation-observer");var nm=N`
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
`,J=class extends H{constructor(){super(...arguments),this.formControlController=new ns(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new se(this,"help-text","label"),this.localize=new at(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,s="none"){this.input.setSelectionRange(t,e,s)}setRangeText(t,e,s,i="preserve"){const o=e??this.input.selectionStart,r=s??this.input.selectionEnd;this.input.setRangeText(t,o,r,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return C`
      <div
        part="form-control"
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${W({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${B(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${B(this.placeholder)}
              minlength=${B(this.minlength)}
              maxlength=${B(this.maxlength)}
              min=${B(this.min)}
              max=${B(this.max)}
              step=${B(this.step)}
              .value=${Ps(this.value)}
              autocapitalize=${B(this.autocapitalize)}
              autocomplete=${B(this.autocomplete)}
              autocorrect=${B(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${B(this.pattern)}
              enterkeyhint=${B(this.enterkeyhint)}
              inputmode=${B(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?C`
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
            ${this.passwordToggle&&!this.disabled?C`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?C`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:C`
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};J.styles=[q,Ls,nm];J.dependencies={"sl-icon":ft};n([L(".input__control")],J.prototype,"input",2);n([U()],J.prototype,"hasFocus",2);n([d()],J.prototype,"title",2);n([d({reflect:!0})],J.prototype,"type",2);n([d()],J.prototype,"name",2);n([d()],J.prototype,"value",2);n([ei()],J.prototype,"defaultValue",2);n([d({reflect:!0})],J.prototype,"size",2);n([d({type:Boolean,reflect:!0})],J.prototype,"filled",2);n([d({type:Boolean,reflect:!0})],J.prototype,"pill",2);n([d()],J.prototype,"label",2);n([d({attribute:"help-text"})],J.prototype,"helpText",2);n([d({type:Boolean})],J.prototype,"clearable",2);n([d({type:Boolean,reflect:!0})],J.prototype,"disabled",2);n([d()],J.prototype,"placeholder",2);n([d({type:Boolean,reflect:!0})],J.prototype,"readonly",2);n([d({attribute:"password-toggle",type:Boolean})],J.prototype,"passwordToggle",2);n([d({attribute:"password-visible",type:Boolean})],J.prototype,"passwordVisible",2);n([d({attribute:"no-spin-buttons",type:Boolean})],J.prototype,"noSpinButtons",2);n([d({reflect:!0})],J.prototype,"form",2);n([d({type:Boolean,reflect:!0})],J.prototype,"required",2);n([d()],J.prototype,"pattern",2);n([d({type:Number})],J.prototype,"minlength",2);n([d({type:Number})],J.prototype,"maxlength",2);n([d()],J.prototype,"min",2);n([d()],J.prototype,"max",2);n([d()],J.prototype,"step",2);n([d()],J.prototype,"autocapitalize",2);n([d()],J.prototype,"autocorrect",2);n([d()],J.prototype,"autocomplete",2);n([d({type:Boolean})],J.prototype,"autofocus",2);n([d()],J.prototype,"enterkeyhint",2);n([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],J.prototype,"spellcheck",2);n([d()],J.prototype,"inputmode",2);n([I("disabled",{waitUntilFirstUpdate:!0})],J.prototype,"handleDisabledChange",1);n([I("step",{waitUntilFirstUpdate:!0})],J.prototype,"handleStepChange",1);n([I("value",{waitUntilFirstUpdate:!0})],J.prototype,"handleValueChange",1);var lm=J;J.define("sl-input");var cm=N`
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
`,Ma=class extends H{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],s=t.composedPath(),i=s.find(l=>{var c;return e.includes(((c=l?.getAttribute)==null?void 0:c.call(l,"role"))||"")});if(!i||s.find(l=>{var c;return((c=l?.getAttribute)==null?void 0:c.call(l,"role"))==="menu"})!==this)return;const a=i;a.type==="checkbox"&&(a.checked=!a.checked),this.emit("sl-select",{detail:{item:a}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),s=this.getCurrentItem();let i=s?e.indexOf(s):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===t?"0":"-1")})}render(){return C`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Ma.styles=[q,cm];n([L("slot")],Ma.prototype,"defaultSlot",2);Ma.define("sl-menu");var dm=N`
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
 */const Li=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const i of s)i._$AO?.(e,!1),Li(i,e);return!0},Vo=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},Bc=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),pm(e)}};function hm(t){this._$AN!==void 0?(Vo(this),this._$AM=t,Bc(this)):this._$AM=t}function um(t,e=!1,s=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let r=s;r<i.length;r++)Li(i[r],!1),Vo(i[r]);else i!=null&&(Li(i,!1),Vo(i));else Li(this,t)}const pm=t=>{t.type==He.CHILD&&(t._$AP??=um,t._$AQ??=hm)};class fm extends Qi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,i){super._$AT(e,s,i),Bc(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(Li(this,e),Vo(this))}setValue(e){if(vc(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mm=()=>new gm;class gm{}const Cr=new WeakMap,bm=Gi(class extends fm{render(t){return kt}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),kt}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=Cr.get(e);s===void 0&&(s=new WeakMap,Cr.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?Cr.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var vm=class{constructor(t,e){this.popupRef=mm(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var i;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(i=s.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),i=s?.assignedElements({flatten:!0}).filter(h=>h.localName==="sl-menu")[0],o=getComputedStyle(this.host).direction==="rtl";if(!i)return;const{left:r,top:a,width:l,height:c}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?r+l:r}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?r+l:r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${a+c}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const i of e.assignedElements())if(s=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let i=1;i!==s.length;++i)s[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((o,r)=>{var a;const l=(a=e.get(r))!=null?a:new CSSUnitValue(0,"px"),h=(l instanceof CSSUnitValue?l:new CSSUnitValue(0,"px")).to("px");return o-h.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?C`
      <sl-popup
        ${bm(this.popupRef)}
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
    `:C` <slot name="submenu" hidden></slot> `}},ge=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new se(this,"submenu"),this.submenuController=new vm(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return op(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return C`
      <div
        id="anchor"
        part="base"
        class=${W({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
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
        ${this.loading?C` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};ge.styles=[q,dm];ge.dependencies={"sl-icon":ft,"sl-popup":ht,"sl-spinner":Zi};n([L("slot:not([name])")],ge.prototype,"defaultSlot",2);n([L(".menu-item")],ge.prototype,"menuItem",2);n([d()],ge.prototype,"type",2);n([d({type:Boolean,reflect:!0})],ge.prototype,"checked",2);n([d()],ge.prototype,"value",2);n([d({type:Boolean,reflect:!0})],ge.prototype,"loading",2);n([d({type:Boolean,reflect:!0})],ge.prototype,"disabled",2);n([I("checked")],ge.prototype,"handleCheckedChange",1);n([I("disabled")],ge.prototype,"handleDisabledChange",1);n([I("type")],ge.prototype,"handleTypeChange",1);ge.define("sl-menu-item");var ym=N`
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
`,Vs=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),s=this.localize.dir()==="rtl";t.preventDefault(),Di(this.base,{onMove:i=>{this.position=parseFloat(It(i/e*100,0,100).toFixed(2)),s&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const i=t.shiftKey?10:1;let o=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight")&&(o-=i),(e&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft")&&(o+=i),t.key==="Home"&&(o=0),t.key==="End"&&(o=100),o=It(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){const t=this.localize.dir()==="rtl";return C`
      <div
        part="base"
        id="image-comparer"
        class=${W({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${ae({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${ae({left:t?`${100-this.position}%`:`${this.position}%`})}
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
    `}};Vs.styles=[q,ym];Vs.scopedElement={"sl-icon":ft};n([L(".image-comparer")],Vs.prototype,"base",2);n([L(".image-comparer__handle")],Vs.prototype,"handle",2);n([d({type:Number,reflect:!0})],Vs.prototype,"position",2);n([I("position",{waitUntilFirstUpdate:!0})],Vs.prototype,"handlePositionChange",1);Vs.define("sl-image-comparer");var _m=N`
  :host {
    display: block;
  }
`,$r=new Map;function wm(t,e="cors"){const s=$r.get(t);if(s!==void 0)return Promise.resolve(s);const i=fetch(t,{mode:e}).then(async o=>{const r={ok:o.ok,status:o.status,html:await o.text()};return $r.set(t,r),r});return $r.set(t,i),i}var ai=class extends H{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(s=>e.setAttribute(s.name,s.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await wm(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(s=>this.executeScript(s)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return C`<slot></slot>`}};ai.styles=[q,_m];n([d()],ai.prototype,"src",2);n([d()],ai.prototype,"mode",2);n([d({attribute:"allow-scripts",type:Boolean})],ai.prototype,"allowScripts",2);n([I("src")],ai.prototype,"handleSrcChange",1);ai.define("sl-include");ft.define("sl-icon");Mt.define("sl-icon-button");var ir=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],s=this.unit==="bit"?t:e,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),s.length-1)),o=s[i]+this.unit,r=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(r,{style:"unit",unit:o,unitDisplay:this.display})}};n([d({type:Number})],ir.prototype,"value",2);n([d()],ir.prototype,"unit",2);n([d()],ir.prototype,"display",2);ir.define("sl-format-bytes");var be=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return C`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};n([d()],be.prototype,"date",2);n([d()],be.prototype,"weekday",2);n([d()],be.prototype,"era",2);n([d()],be.prototype,"year",2);n([d()],be.prototype,"month",2);n([d()],be.prototype,"day",2);n([d()],be.prototype,"hour",2);n([d()],be.prototype,"minute",2);n([d()],be.prototype,"second",2);n([d({attribute:"time-zone-name"})],be.prototype,"timeZoneName",2);n([d({attribute:"time-zone"})],be.prototype,"timeZone",2);n([d({attribute:"hour-format"})],be.prototype,"hourFormat",2);be.define("sl-format-date");var Oe=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};n([d({type:Number})],Oe.prototype,"value",2);n([d()],Oe.prototype,"type",2);n([d({attribute:"no-grouping",type:Boolean})],Oe.prototype,"noGrouping",2);n([d()],Oe.prototype,"currency",2);n([d({attribute:"currency-display"})],Oe.prototype,"currencyDisplay",2);n([d({attribute:"minimum-integer-digits",type:Number})],Oe.prototype,"minimumIntegerDigits",2);n([d({attribute:"minimum-fraction-digits",type:Number})],Oe.prototype,"minimumFractionDigits",2);n([d({attribute:"maximum-fraction-digits",type:Number})],Oe.prototype,"maximumFractionDigits",2);n([d({attribute:"minimum-significant-digits",type:Number})],Oe.prototype,"minimumSignificantDigits",2);n([d({attribute:"maximum-significant-digits",type:Number})],Oe.prototype,"maximumSignificantDigits",2);Oe.define("sl-format-number");var xm=N`
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
`,or=class extends H{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};or.styles=[q,xm];n([d({type:Boolean,reflect:!0})],or.prototype,"vertical",2);n([I("vertical")],or.prototype,"handleVerticalChange",1);or.define("sl-divider");var km=N`
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
`;function*Ra(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Ou(Ra(t.shadowRoot.activeElement))))}function Hc(){return[...Ra()].pop()}var Xn=new WeakMap;function Nc(t){let e=Xn.get(t);return e||(e=window.getComputedStyle(t,null),Xn.set(t,e)),e}function Cm(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Nc(t);return e.visibility!=="hidden"&&e.display!=="none"}function $m(t){const e=Nc(t),{overflowY:s,overflowX:i}=e;return s==="scroll"||i==="scroll"?!0:s!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&s==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function Sm(t){const e=t.tagName.toLowerCase(),s=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){const r=t.getRootNode(),a=`input[type='radio'][name="${t.getAttribute("name")}"]`,l=r.querySelector(`${a}:checked`);return l?l===t:r.querySelector(a)===t}return Cm(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:$m(t):!1}function Am(t){var e,s;const i=Gr(t),o=(e=i[0])!=null?e:null,r=(s=i[i.length-1])!=null?s:null;return{start:o,end:r}}function zm(t,e){var s;return((s=t.getRootNode({composed:!0}))==null?void 0:s.host)!==e}function Gr(t){const e=new WeakMap,s=[];function i(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||e.has(o))return;e.set(o,!0),!s.includes(o)&&Sm(o)&&s.push(o),o instanceof HTMLSlotElement&&zm(o,t)&&o.assignedElements({flatten:!0}).forEach(r=>{i(r)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&i(o.shadowRoot)}for(const r of o.children)i(r)}return i(t),s.sort((o,r)=>{const a=Number(o.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-a})}var yi=[],Uc=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var s;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=Hc();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=Gr(this.element);let r=o.findIndex(l=>l===i);this.previousFocus=this.currentFocus;const a=this.tabDirection==="forward"?1:-1;for(;;){r+a>=o.length?r=0:r+a<0?r=o.length-1:r+=a,this.previousFocus=this.currentFocus;const l=o[r];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;e.preventDefault(),this.currentFocus=l,(s=this.currentFocus)==null||s.focus({preventScroll:!1});const c=[...Ra()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){yi.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){yi=yi.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return yi[yi.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=Gr(this.element);if(!this.element.matches(":focus-within")){const e=t[0],s=t[t.length-1],i=this.tabDirection==="forward"?e:s;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},Fa=t=>{var e;const{activeElement:s}=document;s&&t.contains(s)&&((e=document.activeElement)==null||e.blur())};function Gn(t){return t.charAt(0).toUpperCase()+t.slice(1)}var ve=class extends H{constructor(){super(...arguments),this.hasSlotController=new se(this,"footer"),this.localize=new at(this),this.modal=new Uc(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Ii(this)))}disconnectedCallback(){super.disconnectedCallback(),Pi(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=Ct(this,"drawer.denyClose",{dir:this.localize.dir()});At(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Ii(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Pt(this.drawer),Pt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Ct(this,`drawer.show${Gn(this.placement)}`,{dir:this.localize.dir()}),s=Ct(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([At(this.panel,e.keyframes,e.options),At(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{Fa(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Pi(this)),await Promise.all([Pt(this.drawer),Pt(this.overlay)]);const t=Ct(this,`drawer.hide${Gn(this.placement)}`,{dir:this.localize.dir()}),e=Ct(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([At(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),At(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Ii(this)),this.open&&this.contained&&(this.modal.deactivate(),Pi(this))}async show(){if(!this.open)return this.open=!0,ee(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ee(this,"sl-after-hide")}render(){return C`
      <div
        part="base"
        class=${W({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${B(this.noHeader?this.label:void 0)}
          aria-labelledby=${B(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":C`
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
    `}};ve.styles=[q,km];ve.dependencies={"sl-icon-button":Mt};n([L(".drawer")],ve.prototype,"drawer",2);n([L(".drawer__panel")],ve.prototype,"panel",2);n([L(".drawer__overlay")],ve.prototype,"overlay",2);n([d({type:Boolean,reflect:!0})],ve.prototype,"open",2);n([d({reflect:!0})],ve.prototype,"label",2);n([d({reflect:!0})],ve.prototype,"placement",2);n([d({type:Boolean,reflect:!0})],ve.prototype,"contained",2);n([d({attribute:"no-header",type:Boolean,reflect:!0})],ve.prototype,"noHeader",2);n([I("open",{waitUntilFirstUpdate:!0})],ve.prototype,"handleOpenChange",1);n([I("contained",{waitUntilFirstUpdate:!0})],ve.prototype,"handleNoModalChange",1);dt("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});dt("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});dt("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});dt("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});dt("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});dt("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});dt("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});dt("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});dt("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});dt("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});dt("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});ve.define("sl-drawer");var Em=N`
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
`,jt=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}const s=(i,o)=>{if(!i)return null;const r=i.closest(o);if(r)return r;const a=i.getRootNode();return a instanceof ShadowRoot?s(a.host,o):null};setTimeout(()=>{var i;const o=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?Hc():document.activeElement;(!this.containingElement||s(o,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const s=e.getAllItems(),i=s[0],o=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(i=>Am(i).start);let s;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=e.button;break;default:s=e}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,ee(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ee(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Pt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=Ct(this,"dropdown.show",{dir:this.localize.dir()});await At(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Pt(this);const{keyframes:t,options:e}=Ct(this,"dropdown.hide",{dir:this.localize.dir()});await At(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return C`
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
        sync=${B(this.sync?this.sync:void 0)}
        class=${W({dropdown:!0,"dropdown--open":this.open})}
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
    `}};jt.styles=[q,Em];jt.dependencies={"sl-popup":ht};n([L(".dropdown")],jt.prototype,"popup",2);n([L(".dropdown__trigger")],jt.prototype,"trigger",2);n([L(".dropdown__panel")],jt.prototype,"panel",2);n([d({type:Boolean,reflect:!0})],jt.prototype,"open",2);n([d({reflect:!0})],jt.prototype,"placement",2);n([d({type:Boolean,reflect:!0})],jt.prototype,"disabled",2);n([d({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],jt.prototype,"stayOpenOnSelect",2);n([d({attribute:!1})],jt.prototype,"containingElement",2);n([d({type:Number})],jt.prototype,"distance",2);n([d({type:Number})],jt.prototype,"skidding",2);n([d({type:Boolean})],jt.prototype,"hoist",2);n([d({reflect:!0})],jt.prototype,"sync",2);n([I("open",{waitUntilFirstUpdate:!0})],jt.prototype,"handleOpenChange",1);dt("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});dt("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});jt.define("sl-dropdown");var Tm=N`
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
`,Ft=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),s=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let o=this.from,r="";s?[o,r]=this.from.trim().split("."):i&&([o,r]=this.from.trim().replace(/\]$/,"").split("["));const a="getElementById"in e?e.getElementById(o):null;a?i?t=a.getAttribute(r)||"":s?t=a[r]||"":t=a.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),s=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),o=t==="success"?this.successIcon:this.errorIcon,r=Ct(this,"copy.in",{dir:"ltr"}),a=Ct(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?s:i,await this.copyIcon.animate(a.keyframes,a.options).finished,this.copyIcon.hidden=!0,this.status=t,o.hidden=!1,await o.animate(r.keyframes,r.options).finished,setTimeout(async()=>{await o.animate(a.keyframes,a.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(r.keyframes,r.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return C`
      <sl-tooltip
        class=${W({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
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
    `}};Ft.styles=[q,Tm];Ft.dependencies={"sl-icon":ft,"sl-tooltip":Rt};n([L('slot[name="copy-icon"]')],Ft.prototype,"copyIcon",2);n([L('slot[name="success-icon"]')],Ft.prototype,"successIcon",2);n([L('slot[name="error-icon"]')],Ft.prototype,"errorIcon",2);n([L("sl-tooltip")],Ft.prototype,"tooltip",2);n([U()],Ft.prototype,"isCopying",2);n([U()],Ft.prototype,"status",2);n([d()],Ft.prototype,"value",2);n([d()],Ft.prototype,"from",2);n([d({type:Boolean,reflect:!0})],Ft.prototype,"disabled",2);n([d({attribute:"copy-label"})],Ft.prototype,"copyLabel",2);n([d({attribute:"success-label"})],Ft.prototype,"successLabel",2);n([d({attribute:"error-label"})],Ft.prototype,"errorLabel",2);n([d({attribute:"feedback-duration",type:Number})],Ft.prototype,"feedbackDuration",2);n([d({attribute:"tooltip-placement"})],Ft.prototype,"tooltipPlacement",2);n([d({type:Boolean})],Ft.prototype,"hoist",2);dt("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});dt("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});Ft.define("sl-copy-button");var Om=N`
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
`,Ie=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Pt(this.body);const{keyframes:e,options:s}=Ct(this,"details.show",{dir:this.localize.dir()});await At(this.body,Do(e,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Pt(this.body);const{keyframes:e,options:s}=Ct(this,"details.hide",{dir:this.localize.dir()});await At(this.body,Do(e,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,ee(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,ee(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return C`
      <details
        part="base"
        class=${W({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
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
    `}};Ie.styles=[q,Om];Ie.dependencies={"sl-icon":ft};n([L(".details")],Ie.prototype,"details",2);n([L(".details__header")],Ie.prototype,"header",2);n([L(".details__body")],Ie.prototype,"body",2);n([L(".details__expand-icon-slot")],Ie.prototype,"expandIconSlot",2);n([d({type:Boolean,reflect:!0})],Ie.prototype,"open",2);n([d()],Ie.prototype,"summary",2);n([d({type:Boolean,reflect:!0})],Ie.prototype,"disabled",2);n([I("open",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleOpenChange",1);dt("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});dt("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});Ie.define("sl-details");var Im=N`
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
`,Ge=class extends H{constructor(){super(...arguments),this.hasSlotController=new se(this,"footer"),this.localize=new at(this),this.modal=new Uc(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ii(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Pi(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=Ct(this,"dialog.denyClose",{dir:this.localize.dir()});At(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ii(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Pt(this.dialog),Pt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Ct(this,"dialog.show",{dir:this.localize.dir()}),s=Ct(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([At(this.panel,e.keyframes,e.options),At(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{Fa(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Pt(this.dialog),Pt(this.overlay)]);const t=Ct(this,"dialog.hide",{dir:this.localize.dir()}),e=Ct(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([At(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),At(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Pi(this);const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,ee(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ee(this,"sl-after-hide")}render(){return C`
      <div
        part="base"
        class=${W({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${B(this.noHeader?this.label:void 0)}
          aria-labelledby=${B(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":C`
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
    `}};Ge.styles=[q,Im];Ge.dependencies={"sl-icon-button":Mt};n([L(".dialog")],Ge.prototype,"dialog",2);n([L(".dialog__panel")],Ge.prototype,"panel",2);n([L(".dialog__overlay")],Ge.prototype,"overlay",2);n([d({type:Boolean,reflect:!0})],Ge.prototype,"open",2);n([d({reflect:!0})],Ge.prototype,"label",2);n([d({attribute:"no-header",type:Boolean,reflect:!0})],Ge.prototype,"noHeader",2);n([I("open",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleOpenChange",1);dt("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});dt("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});dt("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});dt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});dt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Ge.define("sl-dialog");var Pm=Lt;Lt.define("sl-checkbox");var Dm=N`
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
`,ut=class extends H{constructor(){super(...arguments),this.formControlController=new ns(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new se(this,"[default]","prefix","suffix"),this.localize=new at(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Go}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Fo`a`:Fo`button`;return Oi`
      <${e}
        part="base"
        class=${W({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${B(t?void 0:this.disabled)}
        type=${B(t?void 0:this.type)}
        title=${this.title}
        name=${B(t?void 0:this.name)}
        value=${B(t?void 0:this.value)}
        href=${B(t&&!this.disabled?this.href:void 0)}
        target=${B(t?this.target:void 0)}
        download=${B(t?this.download:void 0)}
        rel=${B(t?this.rel:void 0)}
        role=${B(t?void 0:"button")}
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
        ${this.caret?Oi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Oi`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};ut.styles=[q,Mc];ut.dependencies={"sl-icon":ft,"sl-spinner":Zi};n([L(".button")],ut.prototype,"button",2);n([U()],ut.prototype,"hasFocus",2);n([U()],ut.prototype,"invalid",2);n([d()],ut.prototype,"title",2);n([d({reflect:!0})],ut.prototype,"variant",2);n([d({reflect:!0})],ut.prototype,"size",2);n([d({type:Boolean,reflect:!0})],ut.prototype,"caret",2);n([d({type:Boolean,reflect:!0})],ut.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],ut.prototype,"loading",2);n([d({type:Boolean,reflect:!0})],ut.prototype,"outline",2);n([d({type:Boolean,reflect:!0})],ut.prototype,"pill",2);n([d({type:Boolean,reflect:!0})],ut.prototype,"circle",2);n([d()],ut.prototype,"type",2);n([d()],ut.prototype,"name",2);n([d()],ut.prototype,"value",2);n([d()],ut.prototype,"href",2);n([d()],ut.prototype,"target",2);n([d()],ut.prototype,"rel",2);n([d()],ut.prototype,"download",2);n([d()],ut.prototype,"form",2);n([d({attribute:"formaction"})],ut.prototype,"formAction",2);n([d({attribute:"formenctype"})],ut.prototype,"formEnctype",2);n([d({attribute:"formmethod"})],ut.prototype,"formMethod",2);n([d({attribute:"formnovalidate",type:Boolean})],ut.prototype,"formNoValidate",2);n([d({attribute:"formtarget"})],ut.prototype,"formTarget",2);n([I("disabled",{waitUntilFirstUpdate:!0})],ut.prototype,"handleDisabledChange",1);function Ht(t,e){Lm(t)&&(t="100%");const s=Mm(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),s&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function po(t){return Math.min(1,Math.max(0,t))}function Lm(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function Mm(t){return typeof t=="string"&&t.indexOf("%")!==-1}function jc(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function fo(t){return Number(t)<=1?`${Number(t)*100}%`:t}function Ts(t){return t.length===1?"0"+t:String(t)}function Rm(t,e,s){return{r:Ht(t,255)*255,g:Ht(e,255)*255,b:Ht(s,255)*255}}function Qn(t,e,s){t=Ht(t,255),e=Ht(e,255),s=Ht(s,255);const i=Math.max(t,e,s),o=Math.min(t,e,s);let r=0,a=0;const l=(i+o)/2;if(i===o)a=0,r=0;else{const c=i-o;switch(a=l>.5?c/(2-i-o):c/(i+o),i){case t:r=(e-s)/c+(e<s?6:0);break;case e:r=(s-t)/c+2;break;case s:r=(t-e)/c+4;break}r/=6}return{h:r,s:a,l}}function Sr(t,e,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+(e-t)*(6*s):s<1/2?e:s<2/3?t+(e-t)*(2/3-s)*6:t}function Fm(t,e,s){let i,o,r;if(t=Ht(t,360),e=Ht(e,100),s=Ht(s,100),e===0)o=s,r=s,i=s;else{const a=s<.5?s*(1+e):s+e-s*e,l=2*s-a;i=Sr(l,a,t+1/3),o=Sr(l,a,t),r=Sr(l,a,t-1/3)}return{r:i*255,g:o*255,b:r*255}}function Zn(t,e,s){t=Ht(t,255),e=Ht(e,255),s=Ht(s,255);const i=Math.max(t,e,s),o=Math.min(t,e,s);let r=0;const a=i,l=i-o,c=i===0?0:l/i;if(i===o)r=0;else{switch(i){case t:r=(e-s)/l+(e<s?6:0);break;case e:r=(s-t)/l+2;break;case s:r=(t-e)/l+4;break}r/=6}return{h:r,s:c,v:a}}function Vm(t,e,s){t=Ht(t,360)*6,e=Ht(e,100),s=Ht(s,100);const i=Math.floor(t),o=t-i,r=s*(1-e),a=s*(1-o*e),l=s*(1-(1-o)*e),c=i%6,h=[s,a,r,r,l,s][c],p=[l,s,s,a,r,r][c],u=[r,r,l,s,s,a][c];return{r:h*255,g:p*255,b:u*255}}function Jn(t,e,s,i){const o=[Ts(Math.round(t).toString(16)),Ts(Math.round(e).toString(16)),Ts(Math.round(s).toString(16))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Bm(t,e,s,i,o){const r=[Ts(Math.round(t).toString(16)),Ts(Math.round(e).toString(16)),Ts(Math.round(s).toString(16)),Ts(Nm(i))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}function Hm(t,e,s,i){const o=t/100,r=e/100,a=s/100,l=i/100,c=255*(1-o)*(1-l),h=255*(1-r)*(1-l),p=255*(1-a)*(1-l);return{r:c,g:h,b:p}}function tl(t,e,s){let i=1-t/255,o=1-e/255,r=1-s/255,a=Math.min(i,o,r);return a===1?(i=0,o=0,r=0):(i=(i-a)/(1-a)*100,o=(o-a)/(1-a)*100,r=(r-a)/(1-a)*100),a*=100,{c:Math.round(i),m:Math.round(o),y:Math.round(r),k:Math.round(a)}}function Nm(t){return Math.round(parseFloat(t)*255).toString(16)}function el(t){return ce(t)/255}function ce(t){return parseInt(t,16)}function Um(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const Qr={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function jm(t){let e={r:0,g:0,b:0},s=1,i=null,o=null,r=null,a=!1,l=!1;return typeof t=="string"&&(t=Km(t)),typeof t=="object"&&(le(t.r)&&le(t.g)&&le(t.b)?(e=Rm(t.r,t.g,t.b),a=!0,l=String(t.r).substr(-1)==="%"?"prgb":"rgb"):le(t.h)&&le(t.s)&&le(t.v)?(i=fo(t.s),o=fo(t.v),e=Vm(t.h,i,o),a=!0,l="hsv"):le(t.h)&&le(t.s)&&le(t.l)?(i=fo(t.s),r=fo(t.l),e=Fm(t.h,i,r),a=!0,l="hsl"):le(t.c)&&le(t.m)&&le(t.y)&&le(t.k)&&(e=Hm(t.c,t.m,t.y,t.k),a=!0,l="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(s=t.a)),s=jc(s),{ok:a,format:t.format||l,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:s}}const Wm="[-\\+]?\\d+%?",qm="[-\\+]?\\d*\\.\\d+%?",us="(?:"+qm+")|(?:"+Wm+")",Ar="[\\s|\\(]+("+us+")[,|\\s]+("+us+")[,|\\s]+("+us+")\\s*\\)?",mo="[\\s|\\(]+("+us+")[,|\\s]+("+us+")[,|\\s]+("+us+")[,|\\s]+("+us+")\\s*\\)?",_e={CSS_UNIT:new RegExp(us),rgb:new RegExp("rgb"+Ar),rgba:new RegExp("rgba"+mo),hsl:new RegExp("hsl"+Ar),hsla:new RegExp("hsla"+mo),hsv:new RegExp("hsv"+Ar),hsva:new RegExp("hsva"+mo),cmyk:new RegExp("cmyk"+mo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Km(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(Qr[t])t=Qr[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let s=_e.rgb.exec(t);return s?{r:s[1],g:s[2],b:s[3]}:(s=_e.rgba.exec(t),s?{r:s[1],g:s[2],b:s[3],a:s[4]}:(s=_e.hsl.exec(t),s?{h:s[1],s:s[2],l:s[3]}:(s=_e.hsla.exec(t),s?{h:s[1],s:s[2],l:s[3],a:s[4]}:(s=_e.hsv.exec(t),s?{h:s[1],s:s[2],v:s[3]}:(s=_e.hsva.exec(t),s?{h:s[1],s:s[2],v:s[3],a:s[4]}:(s=_e.cmyk.exec(t),s?{c:s[1],m:s[2],y:s[3],k:s[4]}:(s=_e.hex8.exec(t),s?{r:ce(s[1]),g:ce(s[2]),b:ce(s[3]),a:el(s[4]),format:e?"name":"hex8"}:(s=_e.hex6.exec(t),s?{r:ce(s[1]),g:ce(s[2]),b:ce(s[3]),format:e?"name":"hex"}:(s=_e.hex4.exec(t),s?{r:ce(s[1]+s[1]),g:ce(s[2]+s[2]),b:ce(s[3]+s[3]),a:el(s[4]+s[4]),format:e?"name":"hex8"}:(s=_e.hex3.exec(t),s?{r:ce(s[1]+s[1]),g:ce(s[2]+s[2]),b:ce(s[3]+s[3]),format:e?"name":"hex"}:!1))))))))))}function le(t){return typeof t=="number"?!Number.isNaN(t):_e.CSS_UNIT.test(t)}class St{constructor(e="",s={}){if(e instanceof St)return e;typeof e=="number"&&(e=Um(e)),this.originalInput=e;const i=jm(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=s.format??i.format,this.gradientType=s.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let s,i,o;const r=e.r/255,a=e.g/255,l=e.b/255;return r<=.03928?s=r/12.92:s=Math.pow((r+.055)/1.055,2.4),a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),l<=.03928?o=l/12.92:o=Math.pow((l+.055)/1.055,2.4),.2126*s+.7152*i+.0722*o}getAlpha(){return this.a}setAlpha(e){return this.a=jc(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=Zn(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=Zn(this.r,this.g,this.b),s=Math.round(e.h*360),i=Math.round(e.s*100),o=Math.round(e.v*100);return this.a===1?`hsv(${s}, ${i}%, ${o}%)`:`hsva(${s}, ${i}%, ${o}%, ${this.roundA})`}toHsl(){const e=Qn(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=Qn(this.r,this.g,this.b),s=Math.round(e.h*360),i=Math.round(e.s*100),o=Math.round(e.l*100);return this.a===1?`hsl(${s}, ${i}%, ${o}%)`:`hsla(${s}, ${i}%, ${o}%, ${this.roundA})`}toHex(e=!1){return Jn(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return Bm(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),s=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${e}, ${s}, ${i})`:`rgba(${e}, ${s}, ${i}, ${this.roundA})`}toPercentageRgb(){const e=s=>`${Math.round(Ht(s,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=s=>Math.round(Ht(s,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...tl(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:s,y:i,k:o}=tl(this.r,this.g,this.b);return`cmyk(${e}, ${s}, ${i}, ${o})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+Jn(this.r,this.g,this.b,!1);for(const[s,i]of Object.entries(Qr))if(e===i)return s;return!1}toString(e){const s=!!e;e=e??this.format;let i=!1;const o=this.a<1&&this.a>=0;return!s&&o&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),e==="cmyk"&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new St(this.toString())}lighten(e=10){const s=this.toHsl();return s.l+=e/100,s.l=po(s.l),new St(s)}brighten(e=10){const s=this.toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(255*-(e/100)))),s.g=Math.max(0,Math.min(255,s.g-Math.round(255*-(e/100)))),s.b=Math.max(0,Math.min(255,s.b-Math.round(255*-(e/100)))),new St(s)}darken(e=10){const s=this.toHsl();return s.l-=e/100,s.l=po(s.l),new St(s)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const s=this.toHsl();return s.s-=e/100,s.s=po(s.s),new St(s)}saturate(e=10){const s=this.toHsl();return s.s+=e/100,s.s=po(s.s),new St(s)}greyscale(){return this.desaturate(100)}spin(e){const s=this.toHsl(),i=(s.h+e)%360;return s.h=i<0?360+i:i,new St(s)}mix(e,s=50){const i=this.toRgb(),o=new St(e).toRgb(),r=s/100,a={r:(o.r-i.r)*r+i.r,g:(o.g-i.g)*r+i.g,b:(o.b-i.b)*r+i.b,a:(o.a-i.a)*r+i.a};return new St(a)}analogous(e=6,s=30){const i=this.toHsl(),o=360/s,r=[this];for(i.h=(i.h-(o*e>>1)+720)%360;--e;)i.h=(i.h+o)%360,r.push(new St(i));return r}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new St(e)}monochromatic(e=6){const s=this.toHsv(),{h:i}=s,{s:o}=s;let{v:r}=s;const a=[],l=1/e;for(;e--;)a.push(new St({h:i,s:o,v:r})),r=(r+l)%1;return a}splitcomplement(){const e=this.toHsl(),{h:s}=e;return[this,new St({h:(s+72)%360,s:e.s,l:e.l}),new St({h:(s+216)%360,s:e.s,l:e.l})]}onBackground(e){const s=this.toRgb(),i=new St(e).toRgb(),o=s.a+i.a*(1-s.a);return new St({r:(s.r*s.a+i.r*i.a*(1-s.a))/o,g:(s.g*s.a+i.g*i.a*(1-s.a))/o,b:(s.b*s.a+i.b*i.a*(1-s.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const s=this.toHsl(),{h:i}=s,o=[this],r=360/e;for(let a=1;a<e;a++)o.push(new St({h:(i+a*r)%360,s:s.s,l:s.l}));return o}equals(e){const s=new St(e);return this.format==="cmyk"||s.format==="cmyk"?this.toCmykString()===s.toCmykString():this.toRgbString()===s.toRgbString()}}var sl="EyeDropper"in window,ot=class extends H{constructor(){super(),this.formControlController=new ns(this),this.isSafeValue=!1,this.localize=new at(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),s=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let o=this.value,r=this.value;s.focus(),t.preventDefault(),Di(e,{onMove:a=>{this.alpha=It(a/i*100,0,100),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),s=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let o=this.value,r=this.value;s.focus(),t.preventDefault(),Di(e,{onMove:a=>{this.hue=It(a/i*360,0,360),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),s=e.querySelector(".color-picker__grid-handle"),{width:i,height:o}=e.getBoundingClientRect();let r=this.value,a=this.value;s.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,Di(e,{onMove:(l,c)=>{this.saturation=It(l/i*100,0,100),this.brightness=It(100-c/o*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=It(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=It(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=It(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=It(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=It(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=It(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=It(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=It(this.brightness-e,0,100),this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,s=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new St(t);if(!e.isValid)return null;const s=e.toHsl(),i={h:s.h,s:s.s*100,l:s.l*100,a:s.a},o=e.toRgb(),r=e.toHexString(),a=e.toHex8String(),l=e.toHsv(),c={h:l.h,s:l.s*100,v:l.v*100,a:l.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(r),hexa:this.setLetterCase(a)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!sl)return;new EyeDropper().open().then(e=>{const s=this.value;this.setColor(e.sRGBHex),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,s,i=100){const o=new St(`hsva(${t}, ${e}%, ${s}%, ${i/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const s=this.parseColor(e);s!==null?(this.inputValue=this.value,this.hue=s.hsva.h,this.saturation=s.hsva.s,this.brightness=s.hsva.v,this.alpha=s.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),i=C`
      <div
        part="base"
        class=${W({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?C`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${ae({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${W({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${ae({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${B(this.disabled?void 0:"0")}
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
                style=${ae({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${B(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?C`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${ae({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${ae({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${B(this.disabled?void 0:"0")}
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
            style=${ae({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.noFormatToggle?"":C`
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
            ${sl?C`
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

        ${s.length>0?C`
              <div part="swatches" class="color-picker__swatches">
                ${s.map(o=>{const r=this.parseColor(o);return r?C`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${B(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${a=>!this.disabled&&a.key==="Enter"&&this.setColor(r.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${ae({backgroundColor:r.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?i:C`
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
          class=${W({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${ae({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};ot.styles=[q,Dm];ot.dependencies={"sl-button-group":Fs,"sl-button":ut,"sl-dropdown":jt,"sl-icon":ft,"sl-input":J,"sl-visually-hidden":Da};n([L('[part~="base"]')],ot.prototype,"base",2);n([L('[part~="input"]')],ot.prototype,"input",2);n([L(".color-dropdown")],ot.prototype,"dropdown",2);n([L('[part~="preview"]')],ot.prototype,"previewButton",2);n([L('[part~="trigger"]')],ot.prototype,"trigger",2);n([U()],ot.prototype,"hasFocus",2);n([U()],ot.prototype,"isDraggingGridHandle",2);n([U()],ot.prototype,"isEmpty",2);n([U()],ot.prototype,"inputValue",2);n([U()],ot.prototype,"hue",2);n([U()],ot.prototype,"saturation",2);n([U()],ot.prototype,"brightness",2);n([U()],ot.prototype,"alpha",2);n([d()],ot.prototype,"value",2);n([ei()],ot.prototype,"defaultValue",2);n([d()],ot.prototype,"label",2);n([d()],ot.prototype,"format",2);n([d({type:Boolean,reflect:!0})],ot.prototype,"inline",2);n([d({reflect:!0})],ot.prototype,"size",2);n([d({attribute:"no-format-toggle",type:Boolean})],ot.prototype,"noFormatToggle",2);n([d()],ot.prototype,"name",2);n([d({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);n([d({type:Boolean})],ot.prototype,"hoist",2);n([d({type:Boolean})],ot.prototype,"opacity",2);n([d({type:Boolean})],ot.prototype,"uppercase",2);n([d()],ot.prototype,"swatches",2);n([d({reflect:!0})],ot.prototype,"form",2);n([d({type:Boolean,reflect:!0})],ot.prototype,"required",2);n([Xi({passive:!1})],ot.prototype,"handleTouchMove",1);n([I("format",{waitUntilFirstUpdate:!0})],ot.prototype,"handleFormatChange",1);n([I("opacity",{waitUntilFirstUpdate:!0})],ot.prototype,"handleOpacityChange",1);n([I("value")],ot.prototype,"handleValueChange",1);ot.define("sl-color-picker");var Ym=N`
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
`,Wc=class extends H{constructor(){super(...arguments),this.hasSlotController=new se(this,"footer","header","image")}render(){return C`
      <div
        part="base"
        class=${W({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Wc.styles=[q,Ym];Wc.define("sl-card");var Xm=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Gm=N`
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
 */function*Qm(t,e){if(t!==void 0){let s=0;for(const i of t)yield e(i,s++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Zm(t,e,s=1){const i=e===void 0?0:t;e??=t;for(let o=i;s>0?o<e:e<o;o+=s)yield o}var Et=class extends H{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Xm(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new at(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,s=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const i=t.scrollLeft,o=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:s,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==i||s!==o)&&(t.scrollTo({left:i,top:o,behavior:Nr()?"auto":"smooth"}),await ee(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(s=>[...s.addedNodes,...s.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:s,loop:i}=this,o=i?t/s:(t-e)/s+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),s=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+s*s)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,s=this.localize.dir()==="rtl",i=e.closest('[part~="pagination-item"]')!==null,o=t.key==="ArrowDown"||!s&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft",r=t.key==="ArrowUp"||!s&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight";t.preventDefault(),r&&this.previous(),o&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var a;const l=(a=this.shadowRoot)==null?void 0:a.querySelector('[part~="pagination-item--active"]');l&&l.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const l of e){const c=l.target;c.toggleAttribute("inert",!l.isIntersecting),c.classList.toggle("--in-view",l.isIntersecting),c.setAttribute("aria-hidden",l.isIntersecting?"false":"true")}const s=e.find(l=>l.isIntersecting);if(!s)return;const i=this.getSlides({excludeClones:!1}),o=this.getSlides().length,r=i.indexOf(s.target),a=this.loop?r-this.slidesPerPage:r;if(this.activeSlide=(Math.ceil(a/this.slidesPerMove)*this.slidesPerMove+o)%o,!this.scrolling&&this.loop&&s.target.hasAttribute("data-clone")){const l=Number(s.target.getAttribute("data-clone"));this.goToSlide(l,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("role","group"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),this.pagination&&(t.setAttribute("id",`slide-${e+1}`),t.setAttribute("role","tabpanel"),t.removeAttribute("aria-label"),t.setAttribute("aria-labelledby",`tab-${e+1}`)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,s=t.slice(-e),i=t.slice(0,e);s.reverse().forEach((o,r)=>{const a=o.cloneNode(!0);a.setAttribute("data-clone",String(t.length-r-1)),this.prepend(a)}),i.forEach((o,r)=>{const a=o.cloneNode(!0);a.setAttribute("data-clone",String(r)),this.append(a)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,s)=>{e.classList.toggle("--is-active",s===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((s,i)=>{(i+e)%e===0?s.style.removeProperty("scroll-snap-align"):s.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:s,loop:i}=this,o=this.getSlides(),r=this.getSlides({excludeClones:!1});if(!o.length)return;const a=i?(t+o.length)%o.length:It(t,0,o.length-s);this.activeSlide=a;const l=this.localize.dir()==="rtl",c=It(t+(i?s:0)+(l?s-1:0),0,r.length-1),h=r[c];this.scrollToSlide(h,Nr()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const s=this.scrollContainer,i=s.getBoundingClientRect(),o=t.getBoundingClientRect(),r=o.left-i.left,a=o.top-i.top;r||a?(this.pendingSlideChange=!0,s.scrollTo({left:r+s.scrollLeft,top:a+s.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this,s=this.getPageCount(),i=this.getCurrentPage(),o=this.canScrollPrev(),r=this.canScrollNext(),a=this.localize.dir()==="ltr";return C`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${W({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
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

        ${this.navigation?C`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${W({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${a?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${W({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!r})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${a?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?C`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${Qm(Zm(s),l=>{const c=l===i;return C`
                    <button
                      part="pagination-item ${c?"pagination-item--active":""}"
                      class="${W({"carousel__pagination-item":!0,"carousel__pagination-item--active":c})}"
                      role="tab"
                      id="tab-${l+1}"
                      aria-controls="slide-${l+1}"
                      aria-selected="${c?"true":"false"}"
                      aria-label="${c?this.localize.term("slideNum",l+1):this.localize.term("goToSlide",l+1,s)}"
                      tabindex=${c?"0":"-1"}
                      @click=${()=>this.goToSlide(l*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};Et.styles=[q,Gm];Et.dependencies={"sl-icon":ft};n([d({type:Boolean,reflect:!0})],Et.prototype,"loop",2);n([d({type:Boolean,reflect:!0})],Et.prototype,"navigation",2);n([d({type:Boolean,reflect:!0})],Et.prototype,"pagination",2);n([d({type:Boolean,reflect:!0})],Et.prototype,"autoplay",2);n([d({type:Number,attribute:"autoplay-interval"})],Et.prototype,"autoplayInterval",2);n([d({type:Number,attribute:"slides-per-page"})],Et.prototype,"slidesPerPage",2);n([d({type:Number,attribute:"slides-per-move"})],Et.prototype,"slidesPerMove",2);n([d()],Et.prototype,"orientation",2);n([d({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],Et.prototype,"mouseDragging",2);n([L(".carousel__slides")],Et.prototype,"scrollContainer",2);n([L(".carousel__pagination")],Et.prototype,"paginationContainer",2);n([U()],Et.prototype,"activeSlide",2);n([U()],Et.prototype,"scrolling",2);n([U()],Et.prototype,"dragging",2);n([Xi({passive:!0})],Et.prototype,"handleScroll",1);n([I("loop",{waitUntilFirstUpdate:!0}),I("slidesPerPage",{waitUntilFirstUpdate:!0})],Et.prototype,"initializeSlides",1);n([I("activeSlide")],Et.prototype,"handleSlideChange",1);n([I("slidesPerMove")],Et.prototype,"updateSlidesSnap",1);n([I("autoplay")],Et.prototype,"handleAutoplayChange",1);Et.define("sl-carousel");var Jm=(t,e)=>{let s=0;return function(...i){window.clearTimeout(s),s=window.setTimeout(()=>{t.call(this,...i)},e)}},il=(t,e,s)=>{const i=t[e];t[e]=function(...o){i.call(this,...o),s.call(this,i,...o)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const e=new Set,s=new WeakMap,i=r=>{for(const a of r.changedTouches)e.add(a.identifier)},o=r=>{for(const a of r.changedTouches)e.delete(a.identifier)};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),il(EventTarget.prototype,"addEventListener",function(r,a){if(a!=="scrollend")return;const l=Jm(()=>{e.size?l():this.dispatchEvent(new Event("scrollend"))},100);r.call(this,"scroll",l,{passive:!0}),s.set(this,l)}),il(EventTarget.prototype,"removeEventListener",function(r,a){if(a!=="scrollend")return;const l=s.get(this);l&&r.call(this,"scroll",l,{passive:!0})})}})();var tg=N`
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
`,qc=class extends H{connectedCallback(){super.connectedCallback()}render(){return C` <slot></slot> `}};qc.styles=[q,tg];qc.define("sl-carousel-item");var eg=N`
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
`,ws=class extends H{constructor(){super(...arguments),this.hasSlotController=new se(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return C`
      <div
        part="base"
        class=${W({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?C`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${B(this.target?this.target:void 0)}"
                rel=${B(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?C`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?C`
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
    `}};ws.styles=[q,eg];n([L("slot:not([name])")],ws.prototype,"defaultSlot",2);n([U()],ws.prototype,"renderType",2);n([d()],ws.prototype,"href",2);n([d()],ws.prototype,"target",2);n([d()],ws.prototype,"rel",2);n([I("href",{waitUntilFirstUpdate:!0})],ws.prototype,"hrefChanged",1);ws.define("sl-breadcrumb-item");Fs.define("sl-button-group");var sg=N`
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
`,Qe=class extends H{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=C`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=C``;return this.initials?e=C`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=C`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,C`
      <div
        part="base"
        class=${W({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};Qe.styles=[q,sg];Qe.dependencies={"sl-icon":ft};n([U()],Qe.prototype,"hasError",2);n([d()],Qe.prototype,"image",2);n([d()],Qe.prototype,"label",2);n([d()],Qe.prototype,"initials",2);n([d()],Qe.prototype,"loading",2);n([d({reflect:!0})],Qe.prototype,"shape",2);n([I("image")],Qe.prototype,"handleImageChange",1);Qe.define("sl-avatar");var ig=N`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,ni=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,s)=>{const i=e.querySelector('[slot="separator"]');i===null?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),s===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),C`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};ni.styles=[q,ig];ni.dependencies={"sl-icon":ft};n([L("slot")],ni.prototype,"defaultSlot",2);n([L('slot[name="separator"]')],ni.prototype,"separatorSlot",2);n([d()],ni.prototype,"label",2);ni.define("sl-breadcrumb");ut.define("sl-button");var og=N`
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
`,Pe=class extends H{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:s}=this.animatedImage;t.width=e,t.height=s,t.getContext("2d").drawImage(this.animatedImage,0,0,e,s),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return C`
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

        ${this.isLoaded?C`
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
    `}};Pe.styles=[q,og];Pe.dependencies={"sl-icon":ft};n([L(".animated-image__animated")],Pe.prototype,"animatedImage",2);n([U()],Pe.prototype,"frozenFrame",2);n([U()],Pe.prototype,"isLoaded",2);n([d()],Pe.prototype,"src",2);n([d()],Pe.prototype,"alt",2);n([d({type:Boolean,reflect:!0})],Pe.prototype,"play",2);n([I("play",{waitUntilFirstUpdate:!0})],Pe.prototype,"handlePlayChange",1);n([I("src")],Pe.prototype,"handleSrcChange",1);Pe.define("sl-animated-image");var rg=N`
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
`,io=class extends H{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return C`
      <span
        part="base"
        class=${W({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};io.styles=[q,rg];n([d({reflect:!0})],io.prototype,"variant",2);n([d({type:Boolean,reflect:!0})],io.prototype,"pill",2);n([d({type:Boolean,reflect:!0})],io.prototype,"pulse",2);io.define("sl-badge");var ag=N`
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
`,ye=class As extends H{constructor(){super(...arguments),this.hasSlotController=new se(this,"icon","suffix"),this.localize=new at(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,s="100%",i="0";this.countdownAnimation=e.animate([{width:s},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Pt(this.base),this.base.hidden=!1;const{keyframes:e,options:s}=Ct(this,"alert.show",{dir:this.localize.dir()});await At(this.base,e,s),this.emit("sl-after-show")}else{Fa(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Pt(this.base);const{keyframes:e,options:s}=Ct(this,"alert.hide",{dir:this.localize.dir()});await At(this.base,e,s),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,ee(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ee(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),As.toastStack.parentElement===null&&document.body.append(As.toastStack),As.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{As.toastStack.removeChild(this),e(),As.toastStack.querySelector("sl-alert")===null&&As.toastStack.remove()},{once:!0})})}render(){return C`
      <div
        part="base"
        class=${W({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?C`
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

        ${this.countdown?C`
              <div
                class=${W({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};ye.styles=[q,ag];ye.dependencies={"sl-icon-button":Mt};n([L('[part~="base"]')],ye.prototype,"base",2);n([L(".alert__countdown-elapsed")],ye.prototype,"countdownElement",2);n([d({type:Boolean,reflect:!0})],ye.prototype,"open",2);n([d({type:Boolean,reflect:!0})],ye.prototype,"closable",2);n([d({reflect:!0})],ye.prototype,"variant",2);n([d({type:Number})],ye.prototype,"duration",2);n([d({type:String,reflect:!0})],ye.prototype,"countdown",2);n([U()],ye.prototype,"remainingTime",2);n([I("open",{waitUntilFirstUpdate:!0})],ye.prototype,"handleOpenChange",1);n([I("duration")],ye.prototype,"handleDurationChange",1);var ng=ye;dt("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});dt("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});ng.define("sl-alert");const lg=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],cg=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],dg=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],hg=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],ug=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],pg=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],fg=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],mg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],gg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],bg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],vg=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],yg=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],_g=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],wg=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],xg=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],kg=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Cg=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],$g=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Sg=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Ag=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],zg=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Eg=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Tg=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Og=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Ig=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Pg=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Dg=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Lg=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Mg=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Rg=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Fg=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Vg=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Bg=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Hg=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ng=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ug=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],jg=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Wg=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],qg=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Kg=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Yg=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Xg=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Gg=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Qg=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Zg=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Jg=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],tb=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],eb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],sb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],ib=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],ob=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],rb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],ab=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],nb=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],lb=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],cb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],db=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],hb=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],ub=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],pb=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],fb=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],mb=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],gb=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],bb=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],vb=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],yb=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],_b=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],wb=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],xb=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],kb=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Cb=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],$b=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Sb=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Ab=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],zb=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Eb=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Tb=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ob=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ib=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Pb=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Db=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Lb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Mb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Rb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Fb=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],Vb=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Bb=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Hb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Nb=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Ub=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],jb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Wb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],qb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Kb=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],Yb=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Xb=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],Gb=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Qb=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Kc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},Zb=Object.freeze(Object.defineProperty({__proto__:null,backInDown:wg,backInLeft:xg,backInRight:kg,backInUp:Cg,backOutDown:$g,backOutLeft:Sg,backOutRight:Ag,backOutUp:zg,bounce:lg,bounceIn:Eg,bounceInDown:Tg,bounceInLeft:Og,bounceInRight:Ig,bounceInUp:Pg,bounceOut:Dg,bounceOutDown:Lg,bounceOutLeft:Mg,bounceOutRight:Rg,bounceOutUp:Fg,easings:Kc,fadeIn:Vg,fadeInBottomLeft:Bg,fadeInBottomRight:Hg,fadeInDown:Ng,fadeInDownBig:Ug,fadeInLeft:jg,fadeInLeftBig:Wg,fadeInRight:qg,fadeInRightBig:Kg,fadeInTopLeft:Yg,fadeInTopRight:Xg,fadeInUp:Gg,fadeInUpBig:Qg,fadeOut:Zg,fadeOutBottomLeft:Jg,fadeOutBottomRight:tb,fadeOutDown:eb,fadeOutDownBig:sb,fadeOutLeft:ib,fadeOutLeftBig:ob,fadeOutRight:rb,fadeOutRightBig:ab,fadeOutTopLeft:nb,fadeOutTopRight:lb,fadeOutUp:cb,fadeOutUpBig:db,flash:cg,flip:hb,flipInX:ub,flipInY:pb,flipOutX:fb,flipOutY:mb,headShake:dg,heartBeat:hg,hinge:Fb,jackInTheBox:Vb,jello:ug,lightSpeedInLeft:gb,lightSpeedInRight:bb,lightSpeedOutLeft:vb,lightSpeedOutRight:yb,pulse:pg,rollIn:Bb,rollOut:Hb,rotateIn:_b,rotateInDownLeft:wb,rotateInDownRight:xb,rotateInUpLeft:kb,rotateInUpRight:Cb,rotateOut:$b,rotateOutDownLeft:Sb,rotateOutDownRight:Ab,rotateOutUpLeft:zb,rotateOutUpRight:Eb,rubberBand:fg,shake:mg,shakeX:gg,shakeY:bg,slideInDown:Tb,slideInLeft:Ob,slideInRight:Ib,slideInUp:Pb,slideOutDown:Db,slideOutLeft:Lb,slideOutRight:Mb,slideOutUp:Rb,swing:vg,tada:yg,wobble:_g,zoomIn:Nb,zoomInDown:Ub,zoomInLeft:jb,zoomInRight:Wb,zoomInUp:qb,zoomOut:Kb,zoomOutDown:Yb,zoomOutLeft:Xb,zoomOutRight:Gb,zoomOutUp:Qb},Symbol.toStringTag,{value:"Module"}));var Jb=N`
  :host {
    display: contents;
  }
`,Vt=class extends H{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;const s=(t=Kc[this.easing])!=null?t:this.easing,i=(e=this.keyframes)!=null?e:Zb[this.name],r=(await this.defaultSlot).assignedElements()[0];return!r||!i?!1:(this.destroyAnimation(),this.animation=r.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:s,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return C` <slot @slotchange=${this.handleSlotChange}></slot> `}};Vt.styles=[q,Jb];n([gp("slot")],Vt.prototype,"defaultSlot",2);n([d()],Vt.prototype,"name",2);n([d({type:Boolean,reflect:!0})],Vt.prototype,"play",2);n([d({type:Number})],Vt.prototype,"delay",2);n([d()],Vt.prototype,"direction",2);n([d({type:Number})],Vt.prototype,"duration",2);n([d()],Vt.prototype,"easing",2);n([d({attribute:"end-delay",type:Number})],Vt.prototype,"endDelay",2);n([d()],Vt.prototype,"fill",2);n([d({type:Number})],Vt.prototype,"iterations",2);n([d({attribute:"iteration-start",type:Number})],Vt.prototype,"iterationStart",2);n([d({attribute:!1})],Vt.prototype,"keyframes",2);n([d({attribute:"playback-rate",type:Number})],Vt.prototype,"playbackRate",2);n([I(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Vt.prototype,"handleAnimationChange",1);n([I("play")],Vt.prototype,"handlePlayChange",1);n([I("playbackRate")],Vt.prototype,"handlePlaybackRateChange",1);Vt.define("sl-animation");function g0(t){return Object.keys(t)}function b0(t){return Object.entries(t)}function v0(t){return t/25.4}function y0(t){return t!=null&&t instanceof lm}function _0(t){return t!=null&&t instanceof Wf}function w0(t){return t!=null&&t instanceof Pm}const x0=(t,e)=>{const s=t.__vccOpts||t;for(const[i,o]of e)s[i]=o;return s};export{a0 as A,_0 as B,y0 as C,w0 as D,l0 as E,ts as F,x0 as _,Vl as a,o0 as b,Xh as c,Ud as d,Ph as e,te as f,rc as g,n0 as h,ha as i,Pn as j,v0 as k,b0 as l,g0 as m,Ol as n,Yd as o,Fh as p,nd as q,e0 as r,s0 as s,ct as t,zl as u,Gh as v,fr as w,i0 as x,r0 as y,Lh as z};
