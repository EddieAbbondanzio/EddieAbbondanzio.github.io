/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Gr(t){const e=Object.create(null);for(const s of t.split(","))e[s]=1;return s=>s in e}const vt={},Ws=[],Ue=()=>{},qc=()=>!1,Fo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qr=t=>t.startsWith("onUpdate:"),Lt=Object.assign,Zr=(t,e)=>{const s=t.indexOf(e);s>-1&&t.splice(s,1)},Kc=Object.prototype.hasOwnProperty,lt=(t,e)=>Kc.call(t,e),G=Array.isArray,qs=t=>Vo(t)==="[object Map]",el=t=>Vo(t)==="[object Set]",tt=t=>typeof t=="function",Ot=t=>typeof t=="string",ys=t=>typeof t=="symbol",Ct=t=>t!==null&&typeof t=="object",sl=t=>(Ct(t)||tt(t))&&tt(t.then)&&tt(t.catch),il=Object.prototype.toString,Vo=t=>il.call(t),Yc=t=>Vo(t).slice(8,-1),Bo=t=>Vo(t)==="[object Object]",Jr=t=>Ot(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wi=Gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ho=t=>{const e=Object.create(null);return s=>e[s]||(e[s]=t(s))},Xc=/-(\w)/g,Ce=Ho(t=>t.replace(Xc,(e,s)=>s?s.toUpperCase():"")),Gc=/\B([A-Z])/g,we=Ho(t=>t.replace(Gc,"-$1").toLowerCase()),ol=Ho(t=>t.charAt(0).toUpperCase()+t.slice(1)),or=Ho(t=>t?`on${ol(t)}`:""),ps=(t,e)=>!Object.is(t,e),rr=(t,...e)=>{for(let s=0;s<t.length;s++)t[s](...e)},Sr=(t,e,s,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:s})},Qc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ha=t=>{const e=Ot(t)?Number(t):NaN;return isNaN(e)?t:e};let Na;const No=()=>Na||(Na=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ta(t){if(G(t)){const e={};for(let s=0;s<t.length;s++){const i=t[s],o=Ot(i)?ed(i):ta(i);if(o)for(const r in o)e[r]=o[r]}return e}else if(Ot(t)||Ct(t))return t}const Zc=/;(?![^(]*\))/g,Jc=/:([^]+)/,td=/\/\*[^]*?\*\//g;function ed(t){const e={};return t.replace(td,"").split(Zc).forEach(s=>{if(s){const i=s.split(Jc);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ea(t){let e="";if(Ot(t))e=t;else if(G(t))for(let s=0;s<t.length;s++){const i=ea(t[s]);i&&(e+=i+" ")}else if(Ct(t))for(const s in t)t[s]&&(e+=s+" ");return e.trim()}const sd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",id=Gr(sd);function rl(t){return!!t||t===""}const al=t=>!!(t&&t.__v_isRef===!0),od=t=>Ot(t)?t:t==null?"":G(t)||Ct(t)&&(t.toString===il||!tt(t.toString))?al(t)?od(t.value):JSON.stringify(t,nl,2):String(t),nl=(t,e)=>al(e)?nl(t,e.value):qs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((s,[i,o],r)=>(s[ar(i,r)+" =>"]=o,s),{})}:el(e)?{[`Set(${e.size})`]:[...e.values()].map(s=>ar(s))}:ys(e)?ar(e):Ct(e)&&!G(e)&&!Bo(e)?String(e):e,ar=(t,e="")=>{var s;return ys(t)?`Symbol(${(s=t.description)!=null?s:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let re;class rd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=re,!e&&re&&(this.index=(re.scopes||(re.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].pause();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].resume();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].resume()}}run(e){if(this._active){const s=re;try{return re=this,e()}finally{re=s}}}on(){++this._on===1&&(this.prevScope=re,re=this)}off(){this._on>0&&--this._on===0&&(re=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let s,i;for(s=0,i=this.effects.length;s<i;s++)this.effects[s].stop();for(this.effects.length=0,s=0,i=this.cleanups.length;s<i;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,i=this.scopes.length;s<i;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function ad(){return re}let bt;const nr=new WeakSet;class ll{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,re&&re.active&&re.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,nr.has(this)&&(nr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ua(this),hl(this);const e=bt,s=$e;bt=this,$e=!0;try{return this.fn()}finally{ul(this),bt=e,$e=s,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)oa(e);this.deps=this.depsTail=void 0,Ua(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?nr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ar(this)&&this.run()}get dirty(){return Ar(this)}}let cl=0,xi,ki;function dl(t,e=!1){if(t.flags|=8,e){t.next=ki,ki=t;return}t.next=xi,xi=t}function sa(){cl++}function ia(){if(--cl>0)return;if(ki){let e=ki;for(ki=void 0;e;){const s=e.next;e.next=void 0,e.flags&=-9,e=s}}let t;for(;xi;){let e=xi;for(xi=void 0;e;){const s=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=s}}if(t)throw t}function hl(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ul(t){let e,s=t.depsTail,i=s;for(;i;){const o=i.prevDep;i.version===-1?(i===s&&(s=o),oa(i),nd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=o}t.deps=e,t.depsTail=s}function Ar(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(pl(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function pl(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ri)||(t.globalVersion=Ri,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ar(t))))return;t.flags|=2;const e=t.dep,s=bt,i=$e;bt=t,$e=!0;try{hl(t);const o=t.fn(t._value);(e.version===0||ps(o,t._value))&&(t.flags|=128,t._value=o,e.version++)}catch(o){throw e.version++,o}finally{bt=s,$e=i,ul(t),t.flags&=-3}}function oa(t,e=!1){const{dep:s,prevSub:i,nextSub:o}=t;if(i&&(i.nextSub=o,t.prevSub=void 0),o&&(o.prevSub=i,t.nextSub=void 0),s.subs===t&&(s.subs=i,!i&&s.computed)){s.computed.flags&=-5;for(let r=s.computed.deps;r;r=r.nextDep)oa(r,!0)}!e&&!--s.sc&&s.map&&s.map.delete(s.key)}function nd(t){const{prevDep:e,nextDep:s}=t;e&&(e.nextDep=s,t.prevDep=void 0),s&&(s.prevDep=e,t.nextDep=void 0)}let $e=!0;const fl=[];function is(){fl.push($e),$e=!1}function os(){const t=fl.pop();$e=t===void 0?!0:t}function Ua(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const s=bt;bt=void 0;try{e()}finally{bt=s}}}let Ri=0;class ld{constructor(e,s){this.sub=e,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ra{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!bt||!$e||bt===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==bt)s=this.activeLink=new ld(bt,this),bt.deps?(s.prevDep=bt.depsTail,bt.depsTail.nextDep=s,bt.depsTail=s):bt.deps=bt.depsTail=s,ml(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const i=s.nextDep;i.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=i),s.prevDep=bt.depsTail,s.nextDep=void 0,bt.depsTail.nextDep=s,bt.depsTail=s,bt.deps===s&&(bt.deps=i)}return s}trigger(e){this.version++,Ri++,this.notify(e)}notify(e){sa();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{ia()}}}function ml(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ml(i)}const s=t.dep.subs;s!==t&&(t.prevSub=s,s&&(s.nextSub=t)),t.dep.subs=t}}const zr=new WeakMap,Os=Symbol(""),Er=Symbol(""),Mi=Symbol("");function qt(t,e,s){if($e&&bt){let i=zr.get(t);i||zr.set(t,i=new Map);let o=i.get(s);o||(i.set(s,o=new ra),o.map=i,o.key=s),o.track()}}function es(t,e,s,i,o,r){const a=zr.get(t);if(!a){Ri++;return}const l=c=>{c&&c.trigger()};if(sa(),e==="clear")a.forEach(l);else{const c=G(t),h=c&&Jr(s);if(c&&s==="length"){const p=Number(i);a.forEach((u,f)=>{(f==="length"||f===Mi||!ys(f)&&f>=p)&&l(u)})}else switch((s!==void 0||a.has(void 0))&&l(a.get(s)),h&&l(a.get(Mi)),e){case"add":c?h&&l(a.get("length")):(l(a.get(Os)),qs(t)&&l(a.get(Er)));break;case"delete":c||(l(a.get(Os)),qs(t)&&l(a.get(Er)));break;case"set":qs(t)&&l(a.get(Os));break}}ia()}function Hs(t){const e=ct(t);return e===t?e:(qt(e,"iterate",Mi),xe(t)?e:e.map(Bt))}function Uo(t){return qt(t=ct(t),"iterate",Mi),t}const cd={__proto__:null,[Symbol.iterator](){return lr(this,Symbol.iterator,Bt)},concat(...t){return Hs(this).concat(...t.map(e=>G(e)?Hs(e):e))},entries(){return lr(this,"entries",t=>(t[1]=Bt(t[1]),t))},every(t,e){return Ze(this,"every",t,e,void 0,arguments)},filter(t,e){return Ze(this,"filter",t,e,s=>s.map(Bt),arguments)},find(t,e){return Ze(this,"find",t,e,Bt,arguments)},findIndex(t,e){return Ze(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ze(this,"findLast",t,e,Bt,arguments)},findLastIndex(t,e){return Ze(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ze(this,"forEach",t,e,void 0,arguments)},includes(...t){return cr(this,"includes",t)},indexOf(...t){return cr(this,"indexOf",t)},join(t){return Hs(this).join(t)},lastIndexOf(...t){return cr(this,"lastIndexOf",t)},map(t,e){return Ze(this,"map",t,e,void 0,arguments)},pop(){return hi(this,"pop")},push(...t){return hi(this,"push",t)},reduce(t,...e){return ja(this,"reduce",t,e)},reduceRight(t,...e){return ja(this,"reduceRight",t,e)},shift(){return hi(this,"shift")},some(t,e){return Ze(this,"some",t,e,void 0,arguments)},splice(...t){return hi(this,"splice",t)},toReversed(){return Hs(this).toReversed()},toSorted(t){return Hs(this).toSorted(t)},toSpliced(...t){return Hs(this).toSpliced(...t)},unshift(...t){return hi(this,"unshift",t)},values(){return lr(this,"values",Bt)}};function lr(t,e,s){const i=Uo(t),o=i[e]();return i!==t&&!xe(t)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.value&&(r.value=s(r.value)),r}),o}const dd=Array.prototype;function Ze(t,e,s,i,o,r){const a=Uo(t),l=a!==t&&!xe(t),c=a[e];if(c!==dd[e]){const u=c.apply(t,r);return l?Bt(u):u}let h=s;a!==t&&(l?h=function(u,f){return s.call(this,Bt(u),f,t)}:s.length>2&&(h=function(u,f){return s.call(this,u,f,t)}));const p=c.call(a,h,i);return l&&o?o(p):p}function ja(t,e,s,i){const o=Uo(t);let r=s;return o!==t&&(xe(t)?s.length>3&&(r=function(a,l,c){return s.call(this,a,l,c,t)}):r=function(a,l,c){return s.call(this,a,Bt(l),c,t)}),o[e](r,...i)}function cr(t,e,s){const i=ct(t);qt(i,"iterate",Mi);const o=i[e](...s);return(o===-1||o===!1)&&ca(s[0])?(s[0]=ct(s[0]),i[e](...s)):o}function hi(t,e,s=[]){is(),sa();const i=ct(t)[e].apply(t,s);return ia(),os(),i}const hd=Gr("__proto__,__v_isRef,__isVue"),gl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ys));function ud(t){ys(t)||(t=String(t));const e=ct(this);return qt(e,"has",t),e.hasOwnProperty(t)}class bl{constructor(e=!1,s=!1){this._isReadonly=e,this._isShallow=s}get(e,s,i){if(s==="__v_skip")return e.__v_skip;const o=this._isReadonly,r=this._isShallow;if(s==="__v_isReactive")return!o;if(s==="__v_isReadonly")return o;if(s==="__v_isShallow")return r;if(s==="__v_raw")return i===(o?r?xd:wl:r?_l:yl).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=G(e);if(!o){let c;if(a&&(c=cd[s]))return c;if(s==="hasOwnProperty")return ud}const l=Reflect.get(e,s,Kt(e)?e:i);return(ys(s)?gl.has(s):hd(s))||(o||qt(e,"get",s),r)?l:Kt(l)?a&&Jr(s)?l:l.value:Ct(l)?o?xl(l):na(l):l}}class vl extends bl{constructor(e=!1){super(!1,e)}set(e,s,i,o){let r=e[s];if(!this._isShallow){const c=fs(r);if(!xe(i)&&!fs(i)&&(r=ct(r),i=ct(i)),!G(e)&&Kt(r)&&!Kt(i))return c?!1:(r.value=i,!0)}const a=G(e)&&Jr(s)?Number(s)<e.length:lt(e,s),l=Reflect.set(e,s,i,Kt(e)?e:o);return e===ct(o)&&(a?ps(i,r)&&es(e,"set",s,i):es(e,"add",s,i)),l}deleteProperty(e,s){const i=lt(e,s);e[s];const o=Reflect.deleteProperty(e,s);return o&&i&&es(e,"delete",s,void 0),o}has(e,s){const i=Reflect.has(e,s);return(!ys(s)||!gl.has(s))&&qt(e,"has",s),i}ownKeys(e){return qt(e,"iterate",G(e)?"length":Os),Reflect.ownKeys(e)}}class pd extends bl{constructor(e=!1){super(!0,e)}set(e,s){return!0}deleteProperty(e,s){return!0}}const fd=new vl,md=new pd,gd=new vl(!0);const Tr=t=>t,ro=t=>Reflect.getPrototypeOf(t);function bd(t,e,s){return function(...i){const o=this.__v_raw,r=ct(o),a=qs(r),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=o[t](...i),p=s?Tr:e?Co:Bt;return!e&&qt(r,"iterate",c?Er:Os),{next(){const{value:u,done:f}=h.next();return f?{value:u,done:f}:{value:l?[p(u[0]),p(u[1])]:p(u),done:f}},[Symbol.iterator](){return this}}}}function ao(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function vd(t,e){const s={get(o){const r=this.__v_raw,a=ct(r),l=ct(o);t||(ps(o,l)&&qt(a,"get",o),qt(a,"get",l));const{has:c}=ro(a),h=e?Tr:t?Co:Bt;if(c.call(a,o))return h(r.get(o));if(c.call(a,l))return h(r.get(l));r!==a&&r.get(o)},get size(){const o=this.__v_raw;return!t&&qt(ct(o),"iterate",Os),Reflect.get(o,"size",o)},has(o){const r=this.__v_raw,a=ct(r),l=ct(o);return t||(ps(o,l)&&qt(a,"has",o),qt(a,"has",l)),o===l?r.has(o):r.has(o)||r.has(l)},forEach(o,r){const a=this,l=a.__v_raw,c=ct(l),h=e?Tr:t?Co:Bt;return!t&&qt(c,"iterate",Os),l.forEach((p,u)=>o.call(r,h(p),h(u),a))}};return Lt(s,t?{add:ao("add"),set:ao("set"),delete:ao("delete"),clear:ao("clear")}:{add(o){!e&&!xe(o)&&!fs(o)&&(o=ct(o));const r=ct(this);return ro(r).has.call(r,o)||(r.add(o),es(r,"add",o,o)),this},set(o,r){!e&&!xe(r)&&!fs(r)&&(r=ct(r));const a=ct(this),{has:l,get:c}=ro(a);let h=l.call(a,o);h||(o=ct(o),h=l.call(a,o));const p=c.call(a,o);return a.set(o,r),h?ps(r,p)&&es(a,"set",o,r):es(a,"add",o,r),this},delete(o){const r=ct(this),{has:a,get:l}=ro(r);let c=a.call(r,o);c||(o=ct(o),c=a.call(r,o)),l&&l.call(r,o);const h=r.delete(o);return c&&es(r,"delete",o,void 0),h},clear(){const o=ct(this),r=o.size!==0,a=o.clear();return r&&es(o,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{s[o]=bd(o,t,e)}),s}function aa(t,e){const s=vd(t,e);return(i,o,r)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?i:Reflect.get(lt(s,o)&&o in i?s:i,o,r)}const yd={get:aa(!1,!1)},_d={get:aa(!1,!0)},wd={get:aa(!0,!1)};const yl=new WeakMap,_l=new WeakMap,wl=new WeakMap,xd=new WeakMap;function kd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cd(t){return t.__v_skip||!Object.isExtensible(t)?0:kd(Yc(t))}function na(t){return fs(t)?t:la(t,!1,fd,yd,yl)}function $d(t){return la(t,!1,gd,_d,_l)}function xl(t){return la(t,!0,md,wd,wl)}function la(t,e,s,i,o){if(!Ct(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=Cd(t);if(r===0)return t;const a=o.get(t);if(a)return a;const l=new Proxy(t,r===2?i:s);return o.set(t,l),l}function Ks(t){return fs(t)?Ks(t.__v_raw):!!(t&&t.__v_isReactive)}function fs(t){return!!(t&&t.__v_isReadonly)}function xe(t){return!!(t&&t.__v_isShallow)}function ca(t){return t?!!t.__v_raw:!1}function ct(t){const e=t&&t.__v_raw;return e?ct(e):t}function Sd(t){return!lt(t,"__v_skip")&&Object.isExtensible(t)&&Sr(t,"__v_skip",!0),t}const Bt=t=>Ct(t)?na(t):t,Co=t=>Ct(t)?xl(t):t;function Kt(t){return t?t.__v_isRef===!0:!1}function Xb(t){return kl(t,!1)}function Gb(t){return kl(t,!0)}function kl(t,e){return Kt(t)?t:new Ad(t,e)}class Ad{constructor(e,s){this.dep=new ra,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?e:ct(e),this._value=s?e:Bt(e),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(e){const s=this._rawValue,i=this.__v_isShallow||xe(e)||fs(e);e=i?e:ct(e),ps(e,s)&&(this._rawValue=e,this._value=i?e:Bt(e),this.dep.trigger())}}function Cl(t){return Kt(t)?t.value:t}const zd={get:(t,e,s)=>e==="__v_raw"?t:Cl(Reflect.get(t,e,s)),set:(t,e,s,i)=>{const o=t[e];return Kt(o)&&!Kt(s)?(o.value=s,!0):Reflect.set(t,e,s,i)}};function $l(t){return Ks(t)?t:new Proxy(t,zd)}class Ed{constructor(e,s,i){this.fn=e,this.setter=s,this._value=void 0,this.dep=new ra(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ri-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&bt!==this)return dl(this,!0),!0}get value(){const e=this.dep.track();return pl(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Td(t,e,s=!1){let i,o;return tt(t)?i=t:(i=t.get,o=t.set),new Ed(i,o,s)}const no={},$o=new WeakMap;let Ss;function Od(t,e=!1,s=Ss){if(s){let i=$o.get(s);i||$o.set(s,i=[]),i.push(t)}}function Id(t,e,s=vt){const{immediate:i,deep:o,once:r,scheduler:a,augmentJob:l,call:c}=s,h=y=>o?y:xe(y)||o===!1||o===0?ds(y,1):ds(y);let p,u,f,g,v=!1,_=!1;if(Kt(t)?(u=()=>t.value,v=xe(t)):Ks(t)?(u=()=>h(t),v=!0):G(t)?(_=!0,v=t.some(y=>Ks(y)||xe(y)),u=()=>t.map(y=>{if(Kt(y))return y.value;if(Ks(y))return h(y);if(tt(y))return c?c(y,2):y()})):tt(t)?e?u=c?()=>c(t,2):t:u=()=>{if(f){is();try{f()}finally{os()}}const y=Ss;Ss=p;try{return c?c(t,3,[g]):t(g)}finally{Ss=y}}:u=Ue,e&&o){const y=u,x=o===!0?1/0:o;u=()=>ds(y(),x)}const O=ad(),T=()=>{p.stop(),O&&O.active&&Zr(O.effects,p)};if(r&&e){const y=e;e=(...x)=>{y(...x),T()}}let k=_?new Array(t.length).fill(no):no;const S=y=>{if(!(!(p.flags&1)||!p.dirty&&!y))if(e){const x=p.run();if(o||v||(_?x.some((V,Y)=>ps(V,k[Y])):ps(x,k))){f&&f();const V=Ss;Ss=p;try{const Y=[x,k===no?void 0:_&&k[0]===no?[]:k,g];k=x,c?c(e,3,Y):e(...Y)}finally{Ss=V}}}else p.run()};return l&&l(S),p=new ll(u),p.scheduler=a?()=>a(S,!1):S,g=y=>Od(y,!1,p),f=p.onStop=()=>{const y=$o.get(p);if(y){if(c)c(y,4);else for(const x of y)x();$o.delete(p)}},e?i?S(!0):k=p.run():a?a(S.bind(null,!0),!0):p.run(),T.pause=p.pause.bind(p),T.resume=p.resume.bind(p),T.stop=T,T}function ds(t,e=1/0,s){if(e<=0||!Ct(t)||t.__v_skip||(s=s||new Set,s.has(t)))return t;if(s.add(t),e--,Kt(t))ds(t.value,e,s);else if(G(t))for(let i=0;i<t.length;i++)ds(t[i],e,s);else if(el(t)||qs(t))t.forEach(i=>{ds(i,e,s)});else if(Bo(t)){for(const i in t)ds(t[i],e,s);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ds(t[i],e,s)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wi(t,e,s,i){try{return i?t(...i):t()}catch(o){jo(o,e,s)}}function We(t,e,s,i){if(tt(t)){const o=Wi(t,e,s,i);return o&&sl(o)&&o.catch(r=>{jo(r,e,s)}),o}if(G(t)){const o=[];for(let r=0;r<t.length;r++)o.push(We(t[r],e,s,i));return o}}function jo(t,e,s,i=!0){const o=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||vt;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${s}`;for(;l;){const p=l.ec;if(p){for(let u=0;u<p.length;u++)if(p[u](t,c,h)===!1)return}l=l.parent}if(r){is(),Wi(r,null,10,[t,c,h]),os();return}}Pd(t,s,o,i,a)}function Pd(t,e,s,i=!0,o=!1){if(o)throw t;console.error(t)}const Zt=[];let Ve=-1;const Ys=[];let ls=null,Ns=0;const Sl=Promise.resolve();let So=null;function Al(t){const e=So||Sl;return t?e.then(this?t.bind(this):t):e}function Dd(t){let e=Ve+1,s=Zt.length;for(;e<s;){const i=e+s>>>1,o=Zt[i],r=Fi(o);r<t||r===t&&o.flags&2?e=i+1:s=i}return e}function da(t){if(!(t.flags&1)){const e=Fi(t),s=Zt[Zt.length-1];!s||!(t.flags&2)&&e>=Fi(s)?Zt.push(t):Zt.splice(Dd(e),0,t),t.flags|=1,zl()}}function zl(){So||(So=Sl.then(Tl))}function Ld(t){G(t)?Ys.push(...t):ls&&t.id===-1?ls.splice(Ns+1,0,t):t.flags&1||(Ys.push(t),t.flags|=1),zl()}function Wa(t,e,s=Ve+1){for(;s<Zt.length;s++){const i=Zt[s];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Zt.splice(s,1),s--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function El(t){if(Ys.length){const e=[...new Set(Ys)].sort((s,i)=>Fi(s)-Fi(i));if(Ys.length=0,ls){ls.push(...e);return}for(ls=e,Ns=0;Ns<ls.length;Ns++){const s=ls[Ns];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}ls=null,Ns=0}}const Fi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Tl(t){try{for(Ve=0;Ve<Zt.length;Ve++){const e=Zt[Ve];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ve<Zt.length;Ve++){const e=Zt[Ve];e&&(e.flags&=-2)}Ve=-1,Zt.length=0,El(),So=null,(Zt.length||Ys.length)&&Tl()}}let Ne=null,Ol=null;function Ao(t){const e=Ne;return Ne=t,Ol=t&&t.type.__scopeId||null,e}function Rd(t,e=Ne,s){if(!e||t._n)return t;const i=(...o)=>{i._d&&tn(-1);const r=Ao(e);let a;try{a=t(...o)}finally{Ao(r),i._d&&tn(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ks(t,e,s,i){const o=t.dirs,r=e&&e.dirs;for(let a=0;a<o.length;a++){const l=o[a];r&&(l.oldValue=r[a].value);let c=l.dir[i];c&&(is(),We(c,s,8,[t.el,l,t,e]),os())}}const Md=Symbol("_vte"),Fd=t=>t.__isTeleport;function ha(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ha(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Vd(t,e){return tt(t)?Lt({name:t.name},e,{setup:t}):t}function Il(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ci(t,e,s,i,o=!1){if(G(t)){t.forEach((v,_)=>Ci(v,e&&(G(e)?e[_]:e),s,i,o));return}if($i(i)&&!o){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ci(t,e,s,i.component.subTree);return}const r=i.shapeFlag&4?ma(i.component):i.el,a=o?null:r,{i:l,r:c}=t,h=e&&e.r,p=l.refs===vt?l.refs={}:l.refs,u=l.setupState,f=ct(u),g=u===vt?()=>!1:v=>lt(f,v);if(h!=null&&h!==c&&(Ot(h)?(p[h]=null,g(h)&&(u[h]=null)):Kt(h)&&(h.value=null)),tt(c))Wi(c,l,12,[a,p]);else{const v=Ot(c),_=Kt(c);if(v||_){const O=()=>{if(t.f){const T=v?g(c)?u[c]:p[c]:c.value;o?G(T)&&Zr(T,r):G(T)?T.includes(r)||T.push(r):v?(p[c]=[r],g(c)&&(u[c]=p[c])):(c.value=[r],t.k&&(p[t.k]=c.value))}else v?(p[c]=a,g(c)&&(u[c]=a)):_&&(c.value=a,t.k&&(p[t.k]=a))};a?(O.id=-1,de(O,s)):O()}}}No().requestIdleCallback;No().cancelIdleCallback;const $i=t=>!!t.type.__asyncLoader,Pl=t=>t.type.__isKeepAlive;function Bd(t,e){Dl(t,"a",e)}function Hd(t,e){Dl(t,"da",e)}function Dl(t,e,s=Jt){const i=t.__wdc||(t.__wdc=()=>{let o=s;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(Wo(e,i,s),s){let o=s.parent;for(;o&&o.parent;)Pl(o.parent.vnode)&&Nd(i,e,s,o),o=o.parent}}function Nd(t,e,s,i){const o=Wo(e,t,i,!0);Ll(()=>{Zr(i[e],o)},s)}function Wo(t,e,s=Jt,i=!1){if(s){const o=s[t]||(s[t]=[]),r=e.__weh||(e.__weh=(...a)=>{is();const l=qi(s),c=We(e,s,t,a);return l(),os(),c});return i?o.unshift(r):o.push(r),r}}const rs=t=>(e,s=Jt)=>{(!Bi||t==="sp")&&Wo(t,(...i)=>e(...i),s)},Ud=rs("bm"),jd=rs("m"),Wd=rs("bu"),qd=rs("u"),Kd=rs("bum"),Ll=rs("um"),Yd=rs("sp"),Xd=rs("rtg"),Gd=rs("rtc");function Qd(t,e=Jt){Wo("ec",t,e)}const Zd=Symbol.for("v-ndc");function Qb(t,e,s,i){let o;const r=s,a=G(t);if(a||Ot(t)){const l=a&&Ks(t);let c=!1,h=!1;l&&(c=!xe(t),h=fs(t),t=Uo(t)),o=new Array(t.length);for(let p=0,u=t.length;p<u;p++)o[p]=e(c?h?Co(Bt(t[p])):Bt(t[p]):t[p],p,void 0,r)}else if(typeof t=="number"){o=new Array(t);for(let l=0;l<t;l++)o[l]=e(l+1,l,void 0,r)}else if(Ct(t))if(t[Symbol.iterator])o=Array.from(t,(l,c)=>e(l,c,void 0,r));else{const l=Object.keys(t);o=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const p=l[c];o[c]=e(t[p],p,c,r)}}else o=[];return o}const Or=t=>t?sc(t)?ma(t):Or(t.parent):null,Si=Lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Or(t.parent),$root:t=>Or(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ml(t),$forceUpdate:t=>t.f||(t.f=()=>{da(t.update)}),$nextTick:t=>t.n||(t.n=Al.bind(t.proxy)),$watch:t=>_h.bind(t)}),dr=(t,e)=>t!==vt&&!t.__isScriptSetup&&lt(t,e),Jd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:s,setupState:i,data:o,props:r,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const g=a[e];if(g!==void 0)switch(g){case 1:return i[e];case 2:return o[e];case 4:return s[e];case 3:return r[e]}else{if(dr(i,e))return a[e]=1,i[e];if(o!==vt&&lt(o,e))return a[e]=2,o[e];if((h=t.propsOptions[0])&&lt(h,e))return a[e]=3,r[e];if(s!==vt&&lt(s,e))return a[e]=4,s[e];Ir&&(a[e]=0)}}const p=Si[e];let u,f;if(p)return e==="$attrs"&&qt(t.attrs,"get",""),p(t);if((u=l.__cssModules)&&(u=u[e]))return u;if(s!==vt&&lt(s,e))return a[e]=4,s[e];if(f=c.config.globalProperties,lt(f,e))return f[e]},set({_:t},e,s){const{data:i,setupState:o,ctx:r}=t;return dr(o,e)?(o[e]=s,!0):i!==vt&&lt(i,e)?(i[e]=s,!0):lt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=s,!0)},has({_:{data:t,setupState:e,accessCache:s,ctx:i,appContext:o,propsOptions:r}},a){let l;return!!s[a]||t!==vt&&lt(t,a)||dr(e,a)||(l=r[0])&&lt(l,a)||lt(i,a)||lt(Si,a)||lt(o.config.globalProperties,a)},defineProperty(t,e,s){return s.get!=null?t._.accessCache[e]=0:lt(s,"value")&&this.set(t,e,s.value,null),Reflect.defineProperty(t,e,s)}};function qa(t){return G(t)?t.reduce((e,s)=>(e[s]=null,e),{}):t}let Ir=!0;function th(t){const e=Ml(t),s=t.proxy,i=t.ctx;Ir=!1,e.beforeCreate&&Ka(e.beforeCreate,t,"bc");const{data:o,computed:r,methods:a,watch:l,provide:c,inject:h,created:p,beforeMount:u,mounted:f,beforeUpdate:g,updated:v,activated:_,deactivated:O,beforeDestroy:T,beforeUnmount:k,destroyed:S,unmounted:y,render:x,renderTracked:V,renderTriggered:Y,errorCaptured:Z,serverPrefetch:j,expose:F,inheritAttrs:yt,components:_t,directives:Tt,filters:wt}=e;if(h&&eh(h,i,null),a)for(const it in a){const et=a[it];tt(et)&&(i[it]=et.bind(s))}if(o){const it=o.call(s,s);Ct(it)&&(t.data=na(it))}if(Ir=!0,r)for(const it in r){const et=r[it],Wt=tt(et)?et.bind(s,s):tt(et.get)?et.get.bind(s,s):Ue,Bs=!tt(et)&&tt(et.set)?et.set.bind(s):Ue,xs=Uh({get:Wt,set:Bs});Object.defineProperty(i,it,{enumerable:!0,configurable:!0,get:()=>xs.value,set:De=>xs.value=De})}if(l)for(const it in l)Rl(l[it],i,s,it);if(c){const it=tt(c)?c.call(s):c;Reflect.ownKeys(it).forEach(et=>{nh(et,it[et])})}p&&Ka(p,t,"c");function mt(it,et){G(et)?et.forEach(Wt=>it(Wt.bind(s))):et&&it(et.bind(s))}if(mt(Ud,u),mt(jd,f),mt(Wd,g),mt(qd,v),mt(Bd,_),mt(Hd,O),mt(Qd,Z),mt(Gd,V),mt(Xd,Y),mt(Kd,k),mt(Ll,y),mt(Yd,j),G(F))if(F.length){const it=t.exposed||(t.exposed={});F.forEach(et=>{Object.defineProperty(it,et,{get:()=>s[et],set:Wt=>s[et]=Wt})})}else t.exposed||(t.exposed={});x&&t.render===Ue&&(t.render=x),yt!=null&&(t.inheritAttrs=yt),_t&&(t.components=_t),Tt&&(t.directives=Tt),j&&Il(t)}function eh(t,e,s=Ue){G(t)&&(t=Pr(t));for(const i in t){const o=t[i];let r;Ct(o)?"default"in o?r=go(o.from||i,o.default,!0):r=go(o.from||i):r=go(o),Kt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function Ka(t,e,s){We(G(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,s)}function Rl(t,e,s,i){let o=i.includes(".")?Gl(s,i):()=>s[i];if(Ot(t)){const r=e[t];tt(r)&&ur(o,r)}else if(tt(t))ur(o,t.bind(s));else if(Ct(t))if(G(t))t.forEach(r=>Rl(r,e,s,i));else{const r=tt(t.handler)?t.handler.bind(s):e[t.handler];tt(r)&&ur(o,r,t)}}function Ml(t){const e=t.type,{mixins:s,extends:i}=e,{mixins:o,optionsCache:r,config:{optionMergeStrategies:a}}=t.appContext,l=r.get(e);let c;return l?c=l:!o.length&&!s&&!i?c=e:(c={},o.length&&o.forEach(h=>zo(c,h,a,!0)),zo(c,e,a)),Ct(e)&&r.set(e,c),c}function zo(t,e,s,i=!1){const{mixins:o,extends:r}=e;r&&zo(t,r,s,!0),o&&o.forEach(a=>zo(t,a,s,!0));for(const a in e)if(!(i&&a==="expose")){const l=sh[a]||s&&s[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const sh={data:Ya,props:Xa,emits:Xa,methods:_i,computed:_i,beforeCreate:Qt,created:Qt,beforeMount:Qt,mounted:Qt,beforeUpdate:Qt,updated:Qt,beforeDestroy:Qt,beforeUnmount:Qt,destroyed:Qt,unmounted:Qt,activated:Qt,deactivated:Qt,errorCaptured:Qt,serverPrefetch:Qt,components:_i,directives:_i,watch:oh,provide:Ya,inject:ih};function Ya(t,e){return e?t?function(){return Lt(tt(t)?t.call(this,this):t,tt(e)?e.call(this,this):e)}:e:t}function ih(t,e){return _i(Pr(t),Pr(e))}function Pr(t){if(G(t)){const e={};for(let s=0;s<t.length;s++)e[t[s]]=t[s];return e}return t}function Qt(t,e){return t?[...new Set([].concat(t,e))]:e}function _i(t,e){return t?Lt(Object.create(null),t,e):e}function Xa(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:Lt(Object.create(null),qa(t),qa(e??{})):e}function oh(t,e){if(!t)return e;if(!e)return t;const s=Lt(Object.create(null),t);for(const i in e)s[i]=Qt(t[i],e[i]);return s}function Fl(){return{app:null,config:{isNativeTag:qc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rh=0;function ah(t,e){return function(i,o=null){tt(i)||(i=Lt({},i)),o!=null&&!Ct(o)&&(o=null);const r=Fl(),a=new WeakSet,l=[];let c=!1;const h=r.app={_uid:rh++,_component:i,_props:o,_container:null,_context:r,_instance:null,version:jh,get config(){return r.config},set config(p){},use(p,...u){return a.has(p)||(p&&tt(p.install)?(a.add(p),p.install(h,...u)):tt(p)&&(a.add(p),p(h,...u))),h},mixin(p){return r.mixins.includes(p)||r.mixins.push(p),h},component(p,u){return u?(r.components[p]=u,h):r.components[p]},directive(p,u){return u?(r.directives[p]=u,h):r.directives[p]},mount(p,u,f){if(!c){const g=h._ceVNode||te(i,o);return g.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(g,p,f),c=!0,h._container=p,p.__vue_app__=h,ma(g.component)}},onUnmount(p){l.push(p)},unmount(){c&&(We(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(p,u){return r.provides[p]=u,h},runWithContext(p){const u=Xs;Xs=h;try{return p()}finally{Xs=u}}};return h}}let Xs=null;function nh(t,e){if(Jt){let s=Jt.provides;const i=Jt.parent&&Jt.parent.provides;i===s&&(s=Jt.provides=Object.create(i)),s[t]=e}}function go(t,e,s=!1){const i=Jt||Ne;if(i||Xs){let o=Xs?Xs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(o&&t in o)return o[t];if(arguments.length>1)return s&&tt(e)?e.call(i&&i.proxy):e}}const Vl={},Bl=()=>Object.create(Vl),Hl=t=>Object.getPrototypeOf(t)===Vl;function lh(t,e,s,i=!1){const o={},r=Bl();t.propsDefaults=Object.create(null),Nl(t,e,o,r);for(const a in t.propsOptions[0])a in o||(o[a]=void 0);s?t.props=i?o:$d(o):t.type.props?t.props=o:t.props=r,t.attrs=r}function ch(t,e,s,i){const{props:o,attrs:r,vnode:{patchFlag:a}}=t,l=ct(o),[c]=t.propsOptions;let h=!1;if((i||a>0)&&!(a&16)){if(a&8){const p=t.vnode.dynamicProps;for(let u=0;u<p.length;u++){let f=p[u];if(qo(t.emitsOptions,f))continue;const g=e[f];if(c)if(lt(r,f))g!==r[f]&&(r[f]=g,h=!0);else{const v=Ce(f);o[v]=Dr(c,l,v,g,t,!1)}else g!==r[f]&&(r[f]=g,h=!0)}}}else{Nl(t,e,o,r)&&(h=!0);let p;for(const u in l)(!e||!lt(e,u)&&((p=we(u))===u||!lt(e,p)))&&(c?s&&(s[u]!==void 0||s[p]!==void 0)&&(o[u]=Dr(c,l,u,void 0,t,!0)):delete o[u]);if(r!==l)for(const u in r)(!e||!lt(e,u))&&(delete r[u],h=!0)}h&&es(t.attrs,"set","")}function Nl(t,e,s,i){const[o,r]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(wi(c))continue;const h=e[c];let p;o&&lt(o,p=Ce(c))?!r||!r.includes(p)?s[p]=h:(l||(l={}))[p]=h:qo(t.emitsOptions,c)||(!(c in i)||h!==i[c])&&(i[c]=h,a=!0)}if(r){const c=ct(s),h=l||vt;for(let p=0;p<r.length;p++){const u=r[p];s[u]=Dr(o,c,u,h[u],t,!lt(h,u))}}return a}function Dr(t,e,s,i,o,r){const a=t[s];if(a!=null){const l=lt(a,"default");if(l&&i===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&tt(c)){const{propsDefaults:h}=o;if(s in h)i=h[s];else{const p=qi(o);i=h[s]=c.call(null,e),p()}}else i=c;o.ce&&o.ce._setProp(s,i)}a[0]&&(r&&!l?i=!1:a[1]&&(i===""||i===we(s))&&(i=!0))}return i}const dh=new WeakMap;function Ul(t,e,s=!1){const i=s?dh:e.propsCache,o=i.get(t);if(o)return o;const r=t.props,a={},l=[];let c=!1;if(!tt(t)){const p=u=>{c=!0;const[f,g]=Ul(u,e,!0);Lt(a,f),g&&l.push(...g)};!s&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!r&&!c)return Ct(t)&&i.set(t,Ws),Ws;if(G(r))for(let p=0;p<r.length;p++){const u=Ce(r[p]);Ga(u)&&(a[u]=vt)}else if(r)for(const p in r){const u=Ce(p);if(Ga(u)){const f=r[p],g=a[u]=G(f)||tt(f)?{type:f}:Lt({},f),v=g.type;let _=!1,O=!0;if(G(v))for(let T=0;T<v.length;++T){const k=v[T],S=tt(k)&&k.name;if(S==="Boolean"){_=!0;break}else S==="String"&&(O=!1)}else _=tt(v)&&v.name==="Boolean";g[0]=_,g[1]=O,(_||lt(g,"default"))&&l.push(u)}}const h=[a,l];return Ct(t)&&i.set(t,h),h}function Ga(t){return t[0]!=="$"&&!wi(t)}const ua=t=>t[0]==="_"||t==="$stable",pa=t=>G(t)?t.map(Be):[Be(t)],hh=(t,e,s)=>{if(e._n)return e;const i=Rd((...o)=>pa(e(...o)),s);return i._c=!1,i},jl=(t,e,s)=>{const i=t._ctx;for(const o in t){if(ua(o))continue;const r=t[o];if(tt(r))e[o]=hh(o,r,i);else if(r!=null){const a=pa(r);e[o]=()=>a}}},Wl=(t,e)=>{const s=pa(e);t.slots.default=()=>s},ql=(t,e,s)=>{for(const i in e)(s||!ua(i))&&(t[i]=e[i])},uh=(t,e,s)=>{const i=t.slots=Bl();if(t.vnode.shapeFlag&32){const o=e.__;o&&Sr(i,"__",o,!0);const r=e._;r?(ql(i,e,s),s&&Sr(i,"_",r,!0)):jl(e,i)}else e&&Wl(t,e)},ph=(t,e,s)=>{const{vnode:i,slots:o}=t;let r=!0,a=vt;if(i.shapeFlag&32){const l=e._;l?s&&l===1?r=!1:ql(o,e,s):(r=!e.$stable,jl(e,o)),a=e}else e&&(Wl(t,e),a={default:1});if(r)for(const l in o)!ua(l)&&a[l]==null&&delete o[l]},de=Ah;function fh(t){return mh(t)}function mh(t,e){const s=No();s.__VUE__=!0;const{insert:i,remove:o,patchProp:r,createElement:a,createText:l,createComment:c,setText:h,setElementText:p,parentNode:u,nextSibling:f,setScopeId:g=Ue,insertStaticContent:v}=t,_=(m,b,w,z=null,$=null,A=null,R=void 0,D=null,P=!!b.dynamicChildren)=>{if(m===b)return;m&&!ui(m,b)&&(z=oo(m),De(m,$,A,!0),m=null),b.patchFlag===-2&&(P=!1,b.dynamicChildren=null);const{type:E,ref:X,shapeFlag:M}=b;switch(E){case Ko:O(m,b,w,z);break;case ms:T(m,b,w,z);break;case bo:m==null&&k(b,w,z,R);break;case ts:_t(m,b,w,z,$,A,R,D,P);break;default:M&1?x(m,b,w,z,$,A,R,D,P):M&6?Tt(m,b,w,z,$,A,R,D,P):(M&64||M&128)&&E.process(m,b,w,z,$,A,R,D,P,ci)}X!=null&&$?Ci(X,m&&m.ref,A,b||m,!b):X==null&&m&&m.ref!=null&&Ci(m.ref,null,A,m,!0)},O=(m,b,w,z)=>{if(m==null)i(b.el=l(b.children),w,z);else{const $=b.el=m.el;b.children!==m.children&&h($,b.children)}},T=(m,b,w,z)=>{m==null?i(b.el=c(b.children||""),w,z):b.el=m.el},k=(m,b,w,z)=>{[m.el,m.anchor]=v(m.children,b,w,z,m.el,m.anchor)},S=({el:m,anchor:b},w,z)=>{let $;for(;m&&m!==b;)$=f(m),i(m,w,z),m=$;i(b,w,z)},y=({el:m,anchor:b})=>{let w;for(;m&&m!==b;)w=f(m),o(m),m=w;o(b)},x=(m,b,w,z,$,A,R,D,P)=>{b.type==="svg"?R="svg":b.type==="math"&&(R="mathml"),m==null?V(b,w,z,$,A,R,D,P):j(m,b,$,A,R,D,P)},V=(m,b,w,z,$,A,R,D)=>{let P,E;const{props:X,shapeFlag:M,transition:W,dirs:Q}=m;if(P=m.el=a(m.type,A,X&&X.is,X),M&8?p(P,m.children):M&16&&Z(m.children,P,null,z,$,hr(m,A),R,D),Q&&ks(m,null,z,"created"),Y(P,m,m.scopeId,R,z),X){for(const gt in X)gt!=="value"&&!wi(gt)&&r(P,gt,null,X[gt],A,z);"value"in X&&r(P,"value",null,X.value,A),(E=X.onVnodeBeforeMount)&&Fe(E,z,m)}Q&&ks(m,null,z,"beforeMount");const rt=gh($,W);rt&&W.beforeEnter(P),i(P,b,w),((E=X&&X.onVnodeMounted)||rt||Q)&&de(()=>{E&&Fe(E,z,m),rt&&W.enter(P),Q&&ks(m,null,z,"mounted")},$)},Y=(m,b,w,z,$)=>{if(w&&g(m,w),z)for(let A=0;A<z.length;A++)g(m,z[A]);if($){let A=$.subTree;if(b===A||Zl(A.type)&&(A.ssContent===b||A.ssFallback===b)){const R=$.vnode;Y(m,R,R.scopeId,R.slotScopeIds,$.parent)}}},Z=(m,b,w,z,$,A,R,D,P=0)=>{for(let E=P;E<m.length;E++){const X=m[E]=D?cs(m[E]):Be(m[E]);_(null,X,b,w,z,$,A,R,D)}},j=(m,b,w,z,$,A,R)=>{const D=b.el=m.el;let{patchFlag:P,dynamicChildren:E,dirs:X}=b;P|=m.patchFlag&16;const M=m.props||vt,W=b.props||vt;let Q;if(w&&Cs(w,!1),(Q=W.onVnodeBeforeUpdate)&&Fe(Q,w,b,m),X&&ks(b,m,w,"beforeUpdate"),w&&Cs(w,!0),(M.innerHTML&&W.innerHTML==null||M.textContent&&W.textContent==null)&&p(D,""),E?F(m.dynamicChildren,E,D,w,z,hr(b,$),A):R||et(m,b,D,null,w,z,hr(b,$),A,!1),P>0){if(P&16)yt(D,M,W,w,$);else if(P&2&&M.class!==W.class&&r(D,"class",null,W.class,$),P&4&&r(D,"style",M.style,W.style,$),P&8){const rt=b.dynamicProps;for(let gt=0;gt<rt.length;gt++){const pt=rt[gt],ie=M[pt],oe=W[pt];(oe!==ie||pt==="value")&&r(D,pt,ie,oe,$,w)}}P&1&&m.children!==b.children&&p(D,b.children)}else!R&&E==null&&yt(D,M,W,w,$);((Q=W.onVnodeUpdated)||X)&&de(()=>{Q&&Fe(Q,w,b,m),X&&ks(b,m,w,"updated")},z)},F=(m,b,w,z,$,A,R)=>{for(let D=0;D<b.length;D++){const P=m[D],E=b[D],X=P.el&&(P.type===ts||!ui(P,E)||P.shapeFlag&198)?u(P.el):w;_(P,E,X,null,z,$,A,R,!0)}},yt=(m,b,w,z,$)=>{if(b!==w){if(b!==vt)for(const A in b)!wi(A)&&!(A in w)&&r(m,A,b[A],null,$,z);for(const A in w){if(wi(A))continue;const R=w[A],D=b[A];R!==D&&A!=="value"&&r(m,A,D,R,$,z)}"value"in w&&r(m,"value",b.value,w.value,$)}},_t=(m,b,w,z,$,A,R,D,P)=>{const E=b.el=m?m.el:l(""),X=b.anchor=m?m.anchor:l("");let{patchFlag:M,dynamicChildren:W,slotScopeIds:Q}=b;Q&&(D=D?D.concat(Q):Q),m==null?(i(E,w,z),i(X,w,z),Z(b.children||[],w,X,$,A,R,D,P)):M>0&&M&64&&W&&m.dynamicChildren?(F(m.dynamicChildren,W,w,$,A,R,D),(b.key!=null||$&&b===$.subTree)&&Kl(m,b,!0)):et(m,b,w,X,$,A,R,D,P)},Tt=(m,b,w,z,$,A,R,D,P)=>{b.slotScopeIds=D,m==null?b.shapeFlag&512?$.ctx.activate(b,w,z,R,P):wt(b,w,z,$,A,R,P):Gt(m,b,P)},wt=(m,b,w,z,$,A,R)=>{const D=m.component=Mh(m,z,$);if(Pl(m)&&(D.ctx.renderer=ci),Fh(D,!1,R),D.asyncDep){if($&&$.registerDep(D,mt,R),!m.el){const P=D.subTree=te(ms);T(null,P,b,w)}}else mt(D,m,b,w,$,A,R)},Gt=(m,b,w)=>{const z=b.component=m.component;if($h(m,b,w))if(z.asyncDep&&!z.asyncResolved){it(z,b,w);return}else z.next=b,z.update();else b.el=m.el,z.vnode=b},mt=(m,b,w,z,$,A,R)=>{const D=()=>{if(m.isMounted){let{next:M,bu:W,u:Q,parent:rt,vnode:gt}=m;{const Re=Yl(m);if(Re){M&&(M.el=gt.el,it(m,M,R)),Re.asyncDep.then(()=>{m.isUnmounted||D()});return}}let pt=M,ie;Cs(m,!1),M?(M.el=gt.el,it(m,M,R)):M=gt,W&&rr(W),(ie=M.props&&M.props.onVnodeBeforeUpdate)&&Fe(ie,rt,M,gt),Cs(m,!0);const oe=Za(m),Le=m.subTree;m.subTree=oe,_(Le,oe,u(Le.el),oo(Le),m,$,A),M.el=oe.el,pt===null&&Sh(m,oe.el),Q&&de(Q,$),(ie=M.props&&M.props.onVnodeUpdated)&&de(()=>Fe(ie,rt,M,gt),$)}else{let M;const{el:W,props:Q}=b,{bm:rt,m:gt,parent:pt,root:ie,type:oe}=m,Le=$i(b);Cs(m,!1),rt&&rr(rt),!Le&&(M=Q&&Q.onVnodeBeforeMount)&&Fe(M,pt,b),Cs(m,!0);{ie.ce&&ie.ce._def.shadowRoot!==!1&&ie.ce._injectChildStyle(oe);const Re=m.subTree=Za(m);_(null,Re,w,z,m,$,A),b.el=Re.el}if(gt&&de(gt,$),!Le&&(M=Q&&Q.onVnodeMounted)){const Re=b;de(()=>Fe(M,pt,Re),$)}(b.shapeFlag&256||pt&&$i(pt.vnode)&&pt.vnode.shapeFlag&256)&&m.a&&de(m.a,$),m.isMounted=!0,b=w=z=null}};m.scope.on();const P=m.effect=new ll(D);m.scope.off();const E=m.update=P.run.bind(P),X=m.job=P.runIfDirty.bind(P);X.i=m,X.id=m.uid,P.scheduler=()=>da(X),Cs(m,!0),E()},it=(m,b,w)=>{b.component=m;const z=m.vnode.props;m.vnode=b,m.next=null,ch(m,b.props,z,w),ph(m,b.children,w),is(),Wa(m),os()},et=(m,b,w,z,$,A,R,D,P=!1)=>{const E=m&&m.children,X=m?m.shapeFlag:0,M=b.children,{patchFlag:W,shapeFlag:Q}=b;if(W>0){if(W&128){Bs(E,M,w,z,$,A,R,D,P);return}else if(W&256){Wt(E,M,w,z,$,A,R,D,P);return}}Q&8?(X&16&&li(E,$,A),M!==E&&p(w,M)):X&16?Q&16?Bs(E,M,w,z,$,A,R,D,P):li(E,$,A,!0):(X&8&&p(w,""),Q&16&&Z(M,w,z,$,A,R,D,P))},Wt=(m,b,w,z,$,A,R,D,P)=>{m=m||Ws,b=b||Ws;const E=m.length,X=b.length,M=Math.min(E,X);let W;for(W=0;W<M;W++){const Q=b[W]=P?cs(b[W]):Be(b[W]);_(m[W],Q,w,null,$,A,R,D,P)}E>X?li(m,$,A,!0,!1,M):Z(b,w,z,$,A,R,D,P,M)},Bs=(m,b,w,z,$,A,R,D,P)=>{let E=0;const X=b.length;let M=m.length-1,W=X-1;for(;E<=M&&E<=W;){const Q=m[E],rt=b[E]=P?cs(b[E]):Be(b[E]);if(ui(Q,rt))_(Q,rt,w,null,$,A,R,D,P);else break;E++}for(;E<=M&&E<=W;){const Q=m[M],rt=b[W]=P?cs(b[W]):Be(b[W]);if(ui(Q,rt))_(Q,rt,w,null,$,A,R,D,P);else break;M--,W--}if(E>M){if(E<=W){const Q=W+1,rt=Q<X?b[Q].el:z;for(;E<=W;)_(null,b[E]=P?cs(b[E]):Be(b[E]),w,rt,$,A,R,D,P),E++}}else if(E>W)for(;E<=M;)De(m[E],$,A,!0),E++;else{const Q=E,rt=E,gt=new Map;for(E=rt;E<=W;E++){const ne=b[E]=P?cs(b[E]):Be(b[E]);ne.key!=null&&gt.set(ne.key,E)}let pt,ie=0;const oe=W-rt+1;let Le=!1,Re=0;const di=new Array(oe);for(E=0;E<oe;E++)di[E]=0;for(E=Q;E<=M;E++){const ne=m[E];if(ie>=oe){De(ne,$,A,!0);continue}let Me;if(ne.key!=null)Me=gt.get(ne.key);else for(pt=rt;pt<=W;pt++)if(di[pt-rt]===0&&ui(ne,b[pt])){Me=pt;break}Me===void 0?De(ne,$,A,!0):(di[Me-rt]=E+1,Me>=Re?Re=Me:Le=!0,_(ne,b[Me],w,null,$,A,R,D,P),ie++)}const Va=Le?bh(di):Ws;for(pt=Va.length-1,E=oe-1;E>=0;E--){const ne=rt+E,Me=b[ne],Ba=ne+1<X?b[ne+1].el:z;di[E]===0?_(null,Me,w,Ba,$,A,R,D,P):Le&&(pt<0||E!==Va[pt]?xs(Me,w,Ba,2):pt--)}}},xs=(m,b,w,z,$=null)=>{const{el:A,type:R,transition:D,children:P,shapeFlag:E}=m;if(E&6){xs(m.component.subTree,b,w,z);return}if(E&128){m.suspense.move(b,w,z);return}if(E&64){R.move(m,b,w,ci);return}if(R===ts){i(A,b,w);for(let M=0;M<P.length;M++)xs(P[M],b,w,z);i(m.anchor,b,w);return}if(R===bo){S(m,b,w);return}if(z!==2&&E&1&&D)if(z===0)D.beforeEnter(A),i(A,b,w),de(()=>D.enter(A),$);else{const{leave:M,delayLeave:W,afterLeave:Q}=D,rt=()=>{m.ctx.isUnmounted?o(A):i(A,b,w)},gt=()=>{M(A,()=>{rt(),Q&&Q()})};W?W(A,rt,gt):gt()}else i(A,b,w)},De=(m,b,w,z=!1,$=!1)=>{const{type:A,props:R,ref:D,children:P,dynamicChildren:E,shapeFlag:X,patchFlag:M,dirs:W,cacheIndex:Q}=m;if(M===-2&&($=!1),D!=null&&(is(),Ci(D,null,w,m,!0),os()),Q!=null&&(b.renderCache[Q]=void 0),X&256){b.ctx.deactivate(m);return}const rt=X&1&&W,gt=!$i(m);let pt;if(gt&&(pt=R&&R.onVnodeBeforeUnmount)&&Fe(pt,b,m),X&6)Wc(m.component,w,z);else{if(X&128){m.suspense.unmount(w,z);return}rt&&ks(m,null,b,"beforeUnmount"),X&64?m.type.remove(m,b,w,ci,z):E&&!E.hasOnce&&(A!==ts||M>0&&M&64)?li(E,b,w,!1,!0):(A===ts&&M&384||!$&&X&16)&&li(P,b,w),z&&Ma(m)}(gt&&(pt=R&&R.onVnodeUnmounted)||rt)&&de(()=>{pt&&Fe(pt,b,m),rt&&ks(m,null,b,"unmounted")},w)},Ma=m=>{const{type:b,el:w,anchor:z,transition:$}=m;if(b===ts){jc(w,z);return}if(b===bo){y(m);return}const A=()=>{o(w),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(m.shapeFlag&1&&$&&!$.persisted){const{leave:R,delayLeave:D}=$,P=()=>R(w,A);D?D(m.el,A,P):P()}else A()},jc=(m,b)=>{let w;for(;m!==b;)w=f(m),o(m),m=w;o(b)},Wc=(m,b,w)=>{const{bum:z,scope:$,job:A,subTree:R,um:D,m:P,a:E,parent:X,slots:{__:M}}=m;Qa(P),Qa(E),z&&rr(z),X&&G(M)&&M.forEach(W=>{X.renderCache[W]=void 0}),$.stop(),A&&(A.flags|=8,De(R,m,b,w)),D&&de(D,b),de(()=>{m.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},li=(m,b,w,z=!1,$=!1,A=0)=>{for(let R=A;R<m.length;R++)De(m[R],b,w,z,$)},oo=m=>{if(m.shapeFlag&6)return oo(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const b=f(m.anchor||m.el),w=b&&b[Md];return w?f(w):b};let ir=!1;const Fa=(m,b,w)=>{m==null?b._vnode&&De(b._vnode,null,null,!0):_(b._vnode||null,m,b,null,null,null,w),b._vnode=m,ir||(ir=!0,Wa(),El(),ir=!1)},ci={p:_,um:De,m:xs,r:Ma,mt:wt,mc:Z,pc:et,pbc:F,n:oo,o:t};return{render:Fa,hydrate:void 0,createApp:ah(Fa)}}function hr({type:t,props:e},s){return s==="svg"&&t==="foreignObject"||s==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:s}function Cs({effect:t,job:e},s){s?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function gh(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Kl(t,e,s=!1){const i=t.children,o=e.children;if(G(i)&&G(o))for(let r=0;r<i.length;r++){const a=i[r];let l=o[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[r]=cs(o[r]),l.el=a.el),!s&&l.patchFlag!==-2&&Kl(a,l)),l.type===Ko&&(l.el=a.el),l.type===ms&&!l.el&&(l.el=a.el)}}function bh(t){const e=t.slice(),s=[0];let i,o,r,a,l;const c=t.length;for(i=0;i<c;i++){const h=t[i];if(h!==0){if(o=s[s.length-1],t[o]<h){e[i]=o,s.push(i);continue}for(r=0,a=s.length-1;r<a;)l=r+a>>1,t[s[l]]<h?r=l+1:a=l;h<t[s[r]]&&(r>0&&(e[i]=s[r-1]),s[r]=i)}}for(r=s.length,a=s[r-1];r-- >0;)s[r]=a,a=e[a];return s}function Yl(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yl(e)}function Qa(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const vh=Symbol.for("v-scx"),yh=()=>go(vh);function ur(t,e,s){return Xl(t,e,s)}function Xl(t,e,s=vt){const{immediate:i,deep:o,flush:r,once:a}=s,l=Lt({},s),c=e&&i||!e&&r!=="post";let h;if(Bi){if(r==="sync"){const g=yh();h=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Ue,g.resume=Ue,g.pause=Ue,g}}const p=Jt;l.call=(g,v,_)=>We(g,p,v,_);let u=!1;r==="post"?l.scheduler=g=>{de(g,p&&p.suspense)}:r!=="sync"&&(u=!0,l.scheduler=(g,v)=>{v?g():da(g)}),l.augmentJob=g=>{e&&(g.flags|=4),u&&(g.flags|=2,p&&(g.id=p.uid,g.i=p))};const f=Id(t,e,l);return Bi&&(h?h.push(f):c&&f()),f}function _h(t,e,s){const i=this.proxy,o=Ot(t)?t.includes(".")?Gl(i,t):()=>i[t]:t.bind(i,i);let r;tt(e)?r=e:(r=e.handler,s=e);const a=qi(this),l=Xl(o,r.bind(i),s);return a(),l}function Gl(t,e){const s=e.split(".");return()=>{let i=t;for(let o=0;o<s.length&&i;o++)i=i[s[o]];return i}}const wh=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ce(e)}Modifiers`]||t[`${we(e)}Modifiers`];function xh(t,e,...s){if(t.isUnmounted)return;const i=t.vnode.props||vt;let o=s;const r=e.startsWith("update:"),a=r&&wh(i,e.slice(7));a&&(a.trim&&(o=s.map(p=>Ot(p)?p.trim():p)),a.number&&(o=s.map(Qc)));let l,c=i[l=or(e)]||i[l=or(Ce(e))];!c&&r&&(c=i[l=or(we(e))]),c&&We(c,t,6,o);const h=i[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,We(h,t,6,o)}}function Ql(t,e,s=!1){const i=e.emitsCache,o=i.get(t);if(o!==void 0)return o;const r=t.emits;let a={},l=!1;if(!tt(t)){const c=h=>{const p=Ql(h,e,!0);p&&(l=!0,Lt(a,p))};!s&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(Ct(t)&&i.set(t,null),null):(G(r)?r.forEach(c=>a[c]=null):Lt(a,r),Ct(t)&&i.set(t,a),a)}function qo(t,e){return!t||!Fo(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(t,e[0].toLowerCase()+e.slice(1))||lt(t,we(e))||lt(t,e))}function Za(t){const{type:e,vnode:s,proxy:i,withProxy:o,propsOptions:[r],slots:a,attrs:l,emit:c,render:h,renderCache:p,props:u,data:f,setupState:g,ctx:v,inheritAttrs:_}=t,O=Ao(t);let T,k;try{if(s.shapeFlag&4){const y=o||i,x=y;T=Be(h.call(x,y,p,u,g,f,v)),k=l}else{const y=e;T=Be(y.length>1?y(u,{attrs:l,slots:a,emit:c}):y(u,null)),k=e.props?l:kh(l)}}catch(y){Ai.length=0,jo(y,t,1),T=te(ms)}let S=T;if(k&&_!==!1){const y=Object.keys(k),{shapeFlag:x}=S;y.length&&x&7&&(r&&y.some(Qr)&&(k=Ch(k,r)),S=Qs(S,k,!1,!0))}return s.dirs&&(S=Qs(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(s.dirs):s.dirs),s.transition&&ha(S,s.transition),T=S,Ao(O),T}const kh=t=>{let e;for(const s in t)(s==="class"||s==="style"||Fo(s))&&((e||(e={}))[s]=t[s]);return e},Ch=(t,e)=>{const s={};for(const i in t)(!Qr(i)||!(i.slice(9)in e))&&(s[i]=t[i]);return s};function $h(t,e,s){const{props:i,children:o,component:r}=t,{props:a,children:l,patchFlag:c}=e,h=r.emitsOptions;if(e.dirs||e.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return i?Ja(i,a,h):!!a;if(c&8){const p=e.dynamicProps;for(let u=0;u<p.length;u++){const f=p[u];if(a[f]!==i[f]&&!qo(h,f))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:i===a?!1:i?a?Ja(i,a,h):!0:!!a;return!1}function Ja(t,e,s){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let o=0;o<i.length;o++){const r=i[o];if(e[r]!==t[r]&&!qo(s,r))return!0}return!1}function Sh({vnode:t,parent:e},s){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=s,e=e.parent;else break}}const Zl=t=>t.__isSuspense;function Ah(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):Ld(t)}const ts=Symbol.for("v-fgt"),Ko=Symbol.for("v-txt"),ms=Symbol.for("v-cmt"),bo=Symbol.for("v-stc"),Ai=[];let ue=null;function zh(t=!1){Ai.push(ue=t?null:[])}function Eh(){Ai.pop(),ue=Ai[Ai.length-1]||null}let Vi=1;function tn(t,e=!1){Vi+=t,t<0&&ue&&e&&(ue.hasOnce=!0)}function Jl(t){return t.dynamicChildren=Vi>0?ue||Ws:null,Eh(),Vi>0&&ue&&ue.push(t),t}function Zb(t,e,s,i,o,r){return Jl(ec(t,e,s,i,o,r,!0))}function Th(t,e,s,i,o){return Jl(te(t,e,s,i,o,!0))}function Eo(t){return t?t.__v_isVNode===!0:!1}function ui(t,e){return t.type===e.type&&t.key===e.key}const tc=({key:t})=>t??null,vo=({ref:t,ref_key:e,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?Ot(t)||Kt(t)||tt(t)?{i:Ne,r:t,k:e,f:!!s}:t:null);function ec(t,e=null,s=null,i=0,o=null,r=t===ts?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tc(e),ref:e&&vo(e),scopeId:Ol,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ne};return l?(fa(c,s),r&128&&t.normalize(c)):s&&(c.shapeFlag|=Ot(s)?8:16),Vi>0&&!a&&ue&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&ue.push(c),c}const te=Oh;function Oh(t,e=null,s=null,i=0,o=null,r=!1){if((!t||t===Zd)&&(t=ms),Eo(t)){const l=Qs(t,e,!0);return s&&fa(l,s),Vi>0&&!r&&ue&&(l.shapeFlag&6?ue[ue.indexOf(t)]=l:ue.push(l)),l.patchFlag=-2,l}if(Nh(t)&&(t=t.__vccOpts),e){e=Ih(e);let{class:l,style:c}=e;l&&!Ot(l)&&(e.class=ea(l)),Ct(c)&&(ca(c)&&!G(c)&&(c=Lt({},c)),e.style=ta(c))}const a=Ot(t)?1:Zl(t)?128:Fd(t)?64:Ct(t)?4:tt(t)?2:0;return ec(t,e,s,i,o,a,r,!0)}function Ih(t){return t?ca(t)||Hl(t)?Lt({},t):t:null}function Qs(t,e,s=!1,i=!1){const{props:o,ref:r,patchFlag:a,children:l,transition:c}=t,h=e?Dh(o||{},e):o,p={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&tc(h),ref:e&&e.ref?s&&r?G(r)?r.concat(vo(e)):[r,vo(e)]:vo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ts?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qs(t.ssContent),ssFallback:t.ssFallback&&Qs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&ha(p,c.clone(p)),p}function Ph(t=" ",e=0){return te(Ko,null,t,e)}function Jb(t,e){const s=te(bo,null,t);return s.staticCount=e,s}function t0(t="",e=!1){return e?(zh(),Th(ms,null,t)):te(ms,null,t)}function Be(t){return t==null||typeof t=="boolean"?te(ms):G(t)?te(ts,null,t.slice()):Eo(t)?cs(t):te(Ko,null,String(t))}function cs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qs(t)}function fa(t,e){let s=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(G(e))s=16;else if(typeof e=="object")if(i&65){const o=e.default;o&&(o._c&&(o._d=!1),fa(t,o()),o._c&&(o._d=!0));return}else{s=32;const o=e._;!o&&!Hl(e)?e._ctx=Ne:o===3&&Ne&&(Ne.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else tt(e)?(e={default:e,_ctx:Ne},s=32):(e=String(e),i&64?(s=16,e=[Ph(e)]):s=8);t.children=e,t.shapeFlag|=s}function Dh(...t){const e={};for(let s=0;s<t.length;s++){const i=t[s];for(const o in i)if(o==="class")e.class!==i.class&&(e.class=ea([e.class,i.class]));else if(o==="style")e.style=ta([e.style,i.style]);else if(Fo(o)){const r=e[o],a=i[o];a&&r!==a&&!(G(r)&&r.includes(a))&&(e[o]=r?[].concat(r,a):a)}else o!==""&&(e[o]=i[o])}return e}function Fe(t,e,s,i=null){We(t,e,7,[s,i])}const Lh=Fl();let Rh=0;function Mh(t,e,s){const i=t.type,o=(e?e.appContext:t.appContext)||Lh,r={uid:Rh++,vnode:t,type:i,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ul(i,o),emitsOptions:Ql(i,o),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:i.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=xh.bind(null,r),t.ce&&t.ce(r),r}let Jt=null,To,Lr;{const t=No(),e=(s,i)=>{let o;return(o=t[s])||(o=t[s]=[]),o.push(i),r=>{o.length>1?o.forEach(a=>a(r)):o[0](r)}};To=e("__VUE_INSTANCE_SETTERS__",s=>Jt=s),Lr=e("__VUE_SSR_SETTERS__",s=>Bi=s)}const qi=t=>{const e=Jt;return To(t),t.scope.on(),()=>{t.scope.off(),To(e)}},en=()=>{Jt&&Jt.scope.off(),To(null)};function sc(t){return t.vnode.shapeFlag&4}let Bi=!1;function Fh(t,e=!1,s=!1){e&&Lr(e);const{props:i,children:o}=t.vnode,r=sc(t);lh(t,i,r,e),uh(t,o,s||e);const a=r?Vh(t,e):void 0;return e&&Lr(!1),a}function Vh(t,e){const s=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Jd);const{setup:i}=s;if(i){is();const o=t.setupContext=i.length>1?Hh(t):null,r=qi(t),a=Wi(i,t,0,[t.props,o]),l=sl(a);if(os(),r(),(l||t.sp)&&!$i(t)&&Il(t),l){if(a.then(en,en),e)return a.then(c=>{sn(t,c)}).catch(c=>{jo(c,t,0)});t.asyncDep=a}else sn(t,a)}else ic(t)}function sn(t,e,s){tt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ct(e)&&(t.setupState=$l(e)),ic(t)}function ic(t,e,s){const i=t.type;t.render||(t.render=i.render||Ue);{const o=qi(t);is();try{th(t)}finally{os(),o()}}}const Bh={get(t,e){return qt(t,"get",""),t[e]}};function Hh(t){const e=s=>{t.exposed=s||{}};return{attrs:new Proxy(t.attrs,Bh),slots:t.slots,emit:t.emit,expose:e}}function ma(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy($l(Sd(t.exposed)),{get(e,s){if(s in e)return e[s];if(s in Si)return Si[s](t)},has(e,s){return s in e||s in Si}})):t.proxy}function Nh(t){return tt(t)&&"__vccOpts"in t}const Uh=(t,e)=>Td(t,e,Bi);function e0(t,e,s){const i=arguments.length;return i===2?Ct(e)&&!G(e)?Eo(e)?te(t,null,[e]):te(t,e):te(t,null,e):(i>3?s=Array.prototype.slice.call(arguments,2):i===3&&Eo(s)&&(s=[s]),te(t,e,s))}const jh="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rr;const on=typeof window<"u"&&window.trustedTypes;if(on)try{Rr=on.createPolicy("vue",{createHTML:t=>t})}catch{}const oc=Rr?t=>Rr.createHTML(t):t=>t,Wh="http://www.w3.org/2000/svg",qh="http://www.w3.org/1998/Math/MathML",Je=typeof document<"u"?document:null,rn=Je&&Je.createElement("template"),Kh={insert:(t,e,s)=>{e.insertBefore(t,s||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,s,i)=>{const o=e==="svg"?Je.createElementNS(Wh,t):e==="mathml"?Je.createElementNS(qh,t):s?Je.createElement(t,{is:s}):Je.createElement(t);return t==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:t=>Je.createTextNode(t),createComment:t=>Je.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Je.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,s,i,o,r){const a=s?s.previousSibling:e.lastChild;if(o&&(o===r||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),s),!(o===r||!(o=o.nextSibling)););else{rn.innerHTML=oc(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const l=rn.content;if(i==="svg"||i==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,s)}return[a?a.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}},Yh=Symbol("_vtc");function Xh(t,e,s){const i=t[Yh];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):s?t.setAttribute("class",e):t.className=e}const an=Symbol("_vod"),Gh=Symbol("_vsh"),Qh=Symbol(""),Zh=/(^|;)\s*display\s*:/;function Jh(t,e,s){const i=t.style,o=Ot(s);let r=!1;if(s&&!o){if(e)if(Ot(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();s[l]==null&&yo(i,l,"")}else for(const a in e)s[a]==null&&yo(i,a,"");for(const a in s)a==="display"&&(r=!0),yo(i,a,s[a])}else if(o){if(e!==s){const a=i[Qh];a&&(s+=";"+a),i.cssText=s,r=Zh.test(s)}}else e&&t.removeAttribute("style");an in t&&(t[an]=r?i.display:"",t[Gh]&&(i.display="none"))}const nn=/\s*!important$/;function yo(t,e,s){if(G(s))s.forEach(i=>yo(t,e,i));else if(s==null&&(s=""),e.startsWith("--"))t.setProperty(e,s);else{const i=tu(t,e);nn.test(s)?t.setProperty(we(i),s.replace(nn,""),"important"):t[i]=s}}const ln=["Webkit","Moz","ms"],pr={};function tu(t,e){const s=pr[e];if(s)return s;let i=Ce(e);if(i!=="filter"&&i in t)return pr[e]=i;i=ol(i);for(let o=0;o<ln.length;o++){const r=ln[o]+i;if(r in t)return pr[e]=r}return e}const cn="http://www.w3.org/1999/xlink";function dn(t,e,s,i,o,r=id(e)){i&&e.startsWith("xlink:")?s==null?t.removeAttributeNS(cn,e.slice(6,e.length)):t.setAttributeNS(cn,e,s):s==null||r&&!rl(s)?t.removeAttribute(e):t.setAttribute(e,r?"":ys(s)?String(s):s)}function hn(t,e,s,i,o){if(e==="innerHTML"||e==="textContent"){s!=null&&(t[e]=e==="innerHTML"?oc(s):s);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=s==null?t.type==="checkbox"?"on":"":String(s);(l!==c||!("_value"in t))&&(t.value=c),s==null&&t.removeAttribute(e),t._value=s;return}let a=!1;if(s===""||s==null){const l=typeof t[e];l==="boolean"?s=rl(s):s==null&&l==="string"?(s="",a=!0):l==="number"&&(s=0,a=!0)}try{t[e]=s}catch{}a&&t.removeAttribute(o||e)}function eu(t,e,s,i){t.addEventListener(e,s,i)}function su(t,e,s,i){t.removeEventListener(e,s,i)}const un=Symbol("_vei");function iu(t,e,s,i,o=null){const r=t[un]||(t[un]={}),a=r[e];if(i&&a)a.value=i;else{const[l,c]=ou(e);if(i){const h=r[e]=nu(i,o);eu(t,l,h,c)}else a&&(su(t,l,a,c),r[e]=void 0)}}const pn=/(?:Once|Passive|Capture)$/;function ou(t){let e;if(pn.test(t)){e={};let i;for(;i=t.match(pn);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):we(t.slice(2)),e]}let fr=0;const ru=Promise.resolve(),au=()=>fr||(ru.then(()=>fr=0),fr=Date.now());function nu(t,e){const s=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=s.attached)return;We(lu(i,s.value),e,5,[i])};return s.value=t,s.attached=au(),s}function lu(t,e){if(G(e)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},e.map(i=>o=>!o._stopped&&i&&i(o))}else return e}const fn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cu=(t,e,s,i,o,r)=>{const a=o==="svg";e==="class"?Xh(t,i,a):e==="style"?Jh(t,s,i):Fo(e)?Qr(e)||iu(t,e,s,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):du(t,e,i,a))?(hn(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&dn(t,e,i,a,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ot(i))?hn(t,Ce(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),dn(t,e,i,a))};function du(t,e,s,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&fn(e)&&tt(s));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return fn(e)&&Ot(s)?!1:e in t}const mn={};/*! #__NO_SIDE_EFFECTS__ */function s0(t,e,s){const i=Vd(t,e);Bo(i)&&Lt(i,e);class o extends ga{constructor(a){super(i,a,s)}}return o.def=i,o}const hu=typeof HTMLElement<"u"?HTMLElement:class{};class ga extends hu{constructor(e,s={},i=bn){super(),this._def=e,this._props=s,this._createApp=i,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._ob=null,this.shadowRoot&&i!==bn?this._root=this.shadowRoot:e.shadowRoot!==!1?(this.attachShadow({mode:"open"}),this._root=this.shadowRoot):this._root=this}connectedCallback(){if(!this.isConnected)return;!this.shadowRoot&&!this._resolved&&this._parseSlots(),this._connected=!0;let e=this;for(;e=e&&(e.parentNode||e.host);)if(e instanceof ga){this._parent=e;break}this._instance||(this._resolved?this._mount(this._def):e&&e._pendingResolve?this._pendingResolve=e._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef()}):this._resolveDef())}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._inheritParentContext(e))}_inheritParentContext(e=this._parent){e&&this._app&&Object.setPrototypeOf(this._app._context.provides,e._instance.provides)}disconnectedCallback(){this._connected=!1,Al(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null)})}_resolveDef(){if(this._pendingResolve)return;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);this._ob=new MutationObserver(i=>{for(const o of i)this._setAttr(o.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(i,o=!1)=>{this._resolved=!0,this._pendingResolve=void 0;const{props:r,styles:a}=i;let l;if(r&&!G(r))for(const c in r){const h=r[c];(h===Number||h&&h.type===Number)&&(c in this._props&&(this._props[c]=Ha(this._props[c])),(l||(l=Object.create(null)))[Ce(c)]=!0)}this._numberProps=l,this._resolveProps(i),this.shadowRoot&&this._applyStyles(a),this._mount(i)},s=this._def.__asyncLoader;s?this._pendingResolve=s().then(i=>{i.configureApp=this._def.configureApp,e(this._def=i,!0)}):e(this._def)}_mount(e){this._app=this._createApp(e),this._inheritParentContext(),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const s=this._instance&&this._instance.exposed;if(s)for(const i in s)lt(this,i)||Object.defineProperty(this,i,{get:()=>Cl(s[i])})}_resolveProps(e){const{props:s}=e,i=G(s)?s:Object.keys(s||{});for(const o of Object.keys(this))o[0]!=="_"&&i.includes(o)&&this._setProp(o,this[o]);for(const o of i.map(Ce))Object.defineProperty(this,o,{get(){return this._getProp(o)},set(r){this._setProp(o,r,!0,!0)}})}_setAttr(e){if(e.startsWith("data-v-"))return;const s=this.hasAttribute(e);let i=s?this.getAttribute(e):mn;const o=Ce(e);s&&this._numberProps&&this._numberProps[o]&&(i=Ha(i)),this._setProp(o,i,!1,!0)}_getProp(e){return this._props[e]}_setProp(e,s,i=!0,o=!1){if(s!==this._props[e]&&(s===mn?delete this._props[e]:(this._props[e]=s,e==="key"&&this._app&&(this._app._ceVNode.key=s)),o&&this._instance&&this._update(),i)){const r=this._ob;r&&r.disconnect(),s===!0?this.setAttribute(we(e),""):typeof s=="string"||typeof s=="number"?this.setAttribute(we(e),s+""):s||this.removeAttribute(we(e)),r&&r.observe(this,{attributes:!0})}}_update(){const e=this._createVNode();this._app&&(e.appContext=this._app._context),pu(e,this._root)}_createVNode(){const e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));const s=te(this._def,Lt(e,this._props));return this._instance||(s.ce=i=>{this._instance=i,i.ce=this,i.isCE=!0;const o=(r,a)=>{this.dispatchEvent(new CustomEvent(r,Bo(a[0])?Lt({detail:a},a[0]):{detail:a}))};i.emit=(r,...a)=>{o(r,a),we(r)!==r&&o(we(r),a)},this._setParent()}),s}_applyStyles(e,s){if(!e)return;if(s){if(s===this._def||this._styleChildren.has(s))return;this._styleChildren.add(s)}const i=this._nonce;for(let o=e.length-1;o>=0;o--){const r=document.createElement("style");i&&r.setAttribute("nonce",i),r.textContent=e[o],this.shadowRoot.prepend(r)}}_parseSlots(){const e=this._slots={};let s;for(;s=this.firstChild;){const i=s.nodeType===1&&s.getAttribute("slot")||"default";(e[i]||(e[i]=[])).push(s),this.removeChild(s)}}_renderSlots(){const e=(this._teleportTarget||this).querySelectorAll("slot"),s=this._instance.type.__scopeId;for(let i=0;i<e.length;i++){const o=e[i],r=o.getAttribute("name")||"default",a=this._slots[r],l=o.parentNode;if(a)for(const c of a){if(s&&c.nodeType===1){const h=s+"-s",p=document.createTreeWalker(c,1);c.setAttribute(h,"");let u;for(;u=p.nextNode();)u.setAttribute(h,"")}l.insertBefore(c,o)}else for(;o.firstChild;)l.insertBefore(o.firstChild,o);l.removeChild(o)}}_injectChildStyle(e){this._applyStyles(e.styles,e)}_removeChildStyle(e){}}const uu=Lt({patchProp:cu},Kh);let gn;function rc(){return gn||(gn=fh(uu))}const pu=(...t)=>{rc().render(...t)},bn=(...t)=>{const e=rc().createApp(...t),{mount:s}=e;return e.mount=i=>{const o=mu(i);if(!o)return;const r=e._component;!tt(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=s(o,!1,fu(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},e};function fu(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function mu(t){return Ot(t)?document.querySelector(t):t}var ac=Object.defineProperty,gu=Object.defineProperties,bu=Object.getOwnPropertyDescriptor,vu=Object.getOwnPropertyDescriptors,vn=Object.getOwnPropertySymbols,yu=Object.prototype.hasOwnProperty,_u=Object.prototype.propertyIsEnumerable,mr=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ba=t=>{throw TypeError(t)},yn=(t,e,s)=>e in t?ac(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,as=(t,e)=>{for(var s in e||(e={}))yu.call(e,s)&&yn(t,s,e[s]);if(vn)for(var s of vn(e))_u.call(e,s)&&yn(t,s,e[s]);return t},Ki=(t,e)=>gu(t,vu(e)),n=(t,e,s,i)=>{for(var o=i>1?void 0:i?bu(e,s):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(i?a(e,s,o):a(o))||o);return i&&o&&ac(e,s,o),o},nc=(t,e,s)=>e.has(t)||ba("Cannot "+s),wu=(t,e,s)=>(nc(t,e,"read from private field"),e.get(t)),xu=(t,e,s)=>e.has(t)?ba("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),ku=(t,e,s,i)=>(nc(t,e,"write to private field"),e.set(t,s),s),Cu=function(t,e){this[0]=t,this[1]=e},$u=t=>{var e=t[mr("asyncIterator")],s=!1,i,o={};return e==null?(e=t[mr("iterator")](),i=r=>o[r]=a=>e[r](a)):(e=e.call(t),i=r=>o[r]=a=>{if(s){if(s=!1,r==="throw")throw a;return a}return s=!0,{done:!1,value:new Cu(new Promise(l=>{var c=e[r](a);c instanceof Object||ba("Object expected"),l(c)}),1)}}),o[mr("iterator")]=()=>o,i("next"),"throw"in e?i("throw"):o.throw=r=>{throw r},"return"in e&&i("return"),o},pi=new WeakMap,fi=new WeakMap,mi=new WeakMap,gr=new WeakSet,lo=new WeakMap,ns=class{constructor(t,e){this.handleFormData=s=>{const i=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host),a=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!a&&typeof o=="string"&&o.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(l=>{s.formData.append(o,l.toString())}):s.formData.append(o,r.toString()))},this.handleFormSubmit=s=>{var i;const o=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=pi.get(this.form))==null||i.forEach(a=>{this.setUserInteracted(a,!0)})),this.form&&!this.form.noValidate&&!o&&!r(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),lo.set(this.host,[])},this.handleInteraction=s=>{const i=lo.get(this.host);i.includes(s.type)||i.push(s.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=as({form:s=>{const i=s.form;if(i){const r=s.getRootNode().querySelector(`#${i}`);if(r)return r}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var i;return(i=s.disabled)!=null?i:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,i)=>s.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),lo.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),lo.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,pi.has(this.form)?pi.get(this.form).add(this.host):pi.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),fi.has(this.form)||(fi.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),mi.has(this.form)||(mi.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=pi.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),fi.has(this.form)&&(this.form.reportValidity=fi.get(this.form),fi.delete(this.form)),mi.has(this.form)&&(this.form.checkValidity=mi.get(this.form),mi.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?gr.add(t):gr.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const s=document.createElement("button");s.type=t,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",e&&(s.name=e.name,s.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&s.setAttribute(i,e.getAttribute(i))})),this.form.append(s),s.click(),s.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,s=!!gr.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&s),e.toggleAttribute("data-user-valid",t&&s)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},Yo=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Su=Object.freeze(Ki(as({},Yo),{valid:!1,valueMissing:!0})),Au=Object.freeze(Ki(as({},Yo),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _o=globalThis,va=_o.ShadowRoot&&(_o.ShadyCSS===void 0||_o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ya=Symbol(),_n=new WeakMap;let lc=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==ya)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(va&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=_n.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&_n.set(s,e))}return e}toString(){return this.cssText}};const zu=t=>new lc(typeof t=="string"?t:t+"",void 0,ya),N=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,o,r)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1],t[0]);return new lc(s,t,ya)},Eu=(t,e)=>{if(va)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),o=_o.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}},wn=va?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return zu(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Tu,defineProperty:Ou,getOwnPropertyDescriptor:Iu,getOwnPropertyNames:Pu,getOwnPropertySymbols:Du,getPrototypeOf:Lu}=Object,Xo=globalThis,xn=Xo.trustedTypes,Ru=xn?xn.emptyScript:"",Mu=Xo.reactiveElementPolyfillSupport,zi=(t,e)=>t,Zs={toAttribute(t,e){switch(e){case Boolean:t=t?Ru:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},_a=(t,e)=>!Tu(t,e),kn={attribute:!0,type:String,converter:Zs,reflect:!1,useDefault:!1,hasChanged:_a};Symbol.metadata??=Symbol("metadata"),Xo.litPropertyMetadata??=new WeakMap;let Us=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=kn){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,s);o!==void 0&&Ou(this.prototype,e,o)}}static getPropertyDescriptor(e,s,i){const{get:o,set:r}=Iu(this.prototype,e)??{get(){return this[s]},set(a){this[s]=a}};return{get:o,set(a){const l=o?.call(this);r?.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??kn}static _$Ei(){if(this.hasOwnProperty(zi("elementProperties")))return;const e=Lu(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(zi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(zi("properties"))){const s=this.properties,i=[...Pu(s),...Du(s)];for(const o of i)this.createProperty(o,s[o])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,o]of s)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const o=this._$Eu(s,i);o!==void 0&&this._$Eh.set(o,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)s.unshift(wn(o))}else e!==void 0&&s.push(wn(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Eu(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const r=(i.converter?.toAttribute!==void 0?i.converter:Zs).toAttribute(s,i.type);this._$Em=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,s){const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const r=i.getPropertyOptions(o),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Zs;this._$Em=o;const l=a.fromAttribute(s,r.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(e,s,i){if(e!==void 0){const o=this.constructor,r=this[e];if(i??=o.getPropertyOptions(e),!((i.hasChanged??_a)(r,s)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:o,wrapped:r},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??s??this[e]),r!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,r]of i){const{wrapped:a}=r,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,r,l)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(s)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(e){}firstUpdated(e){}};Us.elementStyles=[],Us.shadowRootOptions={mode:"open"},Us[zi("elementProperties")]=new Map,Us[zi("finalized")]=new Map,Mu?.({ReactiveElement:Us}),(Xo.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wa=globalThis,Oo=wa.trustedTypes,Cn=Oo?Oo.createPolicy("lit-html",{createHTML:t=>t}):void 0,cc="$lit$",hs=`lit$${Math.random().toFixed(9).slice(2)}$`,dc="?"+hs,Fu=`<${dc}>`,Is=document,Hi=()=>Is.createComment(""),Ni=t=>t===null||typeof t!="object"&&typeof t!="function",xa=Array.isArray,Vu=t=>xa(t)||typeof t?.[Symbol.iterator]=="function",br=`[ 	
\f\r]`,gi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$n=/-->/g,Sn=/>/g,$s=RegExp(`>|${br}(?:([^\\s"'>=/]+)(${br}*=${br}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),An=/'/g,zn=/"/g,hc=/^(?:script|style|textarea|title)$/i,Bu=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),C=Bu(1),pe=Symbol.for("lit-noChange"),xt=Symbol.for("lit-nothing"),En=new WeakMap,Es=Is.createTreeWalker(Is,129);function uc(t,e){if(!xa(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Cn!==void 0?Cn.createHTML(e):e}const Hu=(t,e)=>{const s=t.length-1,i=[];let o,r=e===2?"<svg>":e===3?"<math>":"",a=gi;for(let l=0;l<s;l++){const c=t[l];let h,p,u=-1,f=0;for(;f<c.length&&(a.lastIndex=f,p=a.exec(c),p!==null);)f=a.lastIndex,a===gi?p[1]==="!--"?a=$n:p[1]!==void 0?a=Sn:p[2]!==void 0?(hc.test(p[2])&&(o=RegExp("</"+p[2],"g")),a=$s):p[3]!==void 0&&(a=$s):a===$s?p[0]===">"?(a=o??gi,u=-1):p[1]===void 0?u=-2:(u=a.lastIndex-p[2].length,h=p[1],a=p[3]===void 0?$s:p[3]==='"'?zn:An):a===zn||a===An?a=$s:a===$n||a===Sn?a=gi:(a=$s,o=void 0);const g=a===$s&&t[l+1].startsWith("/>")?" ":"";r+=a===gi?c+Fu:u>=0?(i.push(h),c.slice(0,u)+cc+c.slice(u)+hs+g):c+hs+(u===-2?l:g)}return[uc(t,r+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Ui{constructor({strings:e,_$litType$:s},i){let o;this.parts=[];let r=0,a=0;const l=e.length-1,c=this.parts,[h,p]=Hu(e,s);if(this.el=Ui.createElement(h,i),Es.currentNode=this.el.content,s===2||s===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=Es.nextNode())!==null&&c.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const u of o.getAttributeNames())if(u.endsWith(cc)){const f=p[a++],g=o.getAttribute(u).split(hs),v=/([.?@])?(.*)/.exec(f);c.push({type:1,index:r,name:v[2],strings:g,ctor:v[1]==="."?Uu:v[1]==="?"?ju:v[1]==="@"?Wu:Go}),o.removeAttribute(u)}else u.startsWith(hs)&&(c.push({type:6,index:r}),o.removeAttribute(u));if(hc.test(o.tagName)){const u=o.textContent.split(hs),f=u.length-1;if(f>0){o.textContent=Oo?Oo.emptyScript:"";for(let g=0;g<f;g++)o.append(u[g],Hi()),Es.nextNode(),c.push({type:2,index:++r});o.append(u[f],Hi())}}}else if(o.nodeType===8)if(o.data===dc)c.push({type:2,index:r});else{let u=-1;for(;(u=o.data.indexOf(hs,u+1))!==-1;)c.push({type:7,index:r}),u+=hs.length-1}r++}}static createElement(e,s){const i=Is.createElement("template");return i.innerHTML=e,i}}function Js(t,e,s=t,i){if(e===pe)return e;let o=i!==void 0?s._$Co?.[i]:s._$Cl;const r=Ni(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),r===void 0?o=void 0:(o=new r(t),o._$AT(t,s,i)),i!==void 0?(s._$Co??=[])[i]=o:s._$Cl=o),o!==void 0&&(e=Js(t,o._$AS(t,e.values),o,i)),e}class Nu{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,o=(e?.creationScope??Is).importNode(s,!0);Es.currentNode=o;let r=Es.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let h;c.type===2?h=new Yi(r,r.nextSibling,this,e):c.type===1?h=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(h=new qu(r,this,e)),this._$AV.push(h),c=i[++l]}a!==c?.index&&(r=Es.nextNode(),a++)}return Es.currentNode=Is,o}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}}class Yi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,i,o){this.type=2,this._$AH=xt,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=Js(this,e,s),Ni(e)?e===xt||e==null||e===""?(this._$AH!==xt&&this._$AR(),this._$AH=xt):e!==this._$AH&&e!==pe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Vu(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==xt&&Ni(this._$AH)?this._$AA.nextSibling.data=e:this.T(Is.createTextNode(e)),this._$AH=e}$(e){const{values:s,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ui.createElement(uc(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(s);else{const r=new Nu(o,this),a=r.u(this.options);r.p(s),this.T(a),this._$AH=r}}_$AC(e){let s=En.get(e.strings);return s===void 0&&En.set(e.strings,s=new Ui(e)),s}k(e){xa(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,o=0;for(const r of e)o===s.length?s.push(i=new Yi(this.O(Hi()),this.O(Hi()),this,this.options)):i=s[o],i._$AI(r),o++;o<s.length&&(this._$AR(i&&i._$AB.nextSibling,o),s.length=o)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Go{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,o,r){this.type=1,this._$AH=xt,this._$AN=void 0,this.element=e,this.name=s,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=xt}_$AI(e,s=this,i,o){const r=this.strings;let a=!1;if(r===void 0)e=Js(this,e,s,0),a=!Ni(e)||e!==this._$AH&&e!==pe,a&&(this._$AH=e);else{const l=e;let c,h;for(e=r[0],c=0;c<r.length-1;c++)h=Js(this,l[i+c],s,c),h===pe&&(h=this._$AH[c]),a||=!Ni(h)||h!==this._$AH[c],h===xt?e=xt:e!==xt&&(e+=(h??"")+r[c+1]),this._$AH[c]=h}a&&!o&&this.j(e)}j(e){e===xt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let Uu=class extends Go{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===xt?void 0:e}};class ju extends Go{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==xt)}}class Wu extends Go{constructor(e,s,i,o,r){super(e,s,i,o,r),this.type=5}_$AI(e,s=this){if((e=Js(this,e,s,0)??xt)===pe)return;const i=this._$AH,o=e===xt&&i!==xt||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==xt&&(i===xt||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class qu{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Js(this,e)}}const Ku=wa.litHtmlPolyfillSupport;Ku?.(Ui,Yi),(wa.litHtmlVersions??=[]).push("3.3.1");const Yu=(t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(o===void 0){const r=s?.renderBefore??null;i._$litPart$=o=new Yi(e.insertBefore(Hi(),r),r,void 0,s??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ka=globalThis;let Ei=class extends Us{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Yu(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return pe}};Ei._$litElement$=!0,Ei.finalized=!0,ka.litElementHydrateSupport?.({LitElement:Ei});const Xu=ka.litElementPolyfillSupport;Xu?.({LitElement:Ei});(ka.litElementVersions??=[]).push("4.2.1");var Gu=N`
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
`,Qu=N`
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
`,ei=(t="value")=>(e,s)=>{const i=e.constructor,o=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(r,a,l){var c;const h=i.getPropertyOptions(t),p=typeof h.attribute=="string"?h.attribute:t;if(r===p){const u=h.converter||Zs,g=(typeof u=="function"?u:(c=u?.fromAttribute)!=null?c:Zs.fromAttribute)(l,h.type);this[t]!==g&&(this[s]=g)}o.call(this,r,a,l)}},Ls=N`
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
`,se=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=s=>{const i=s.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Zu(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let s="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(s+=i.textContent)}),s}var Mr="";function Tn(t){Mr=t}function Ju(t=""){if(!Mr){const e=[...document.getElementsByTagName("script")],s=e.find(i=>i.hasAttribute("data-shoelace"));if(s)Tn(s.getAttribute("data-shoelace"));else{const i=e.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let o="";i&&(o=i.getAttribute("src")),Tn(o.split("/").slice(0,-1).join("/"))}}return Mr.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var tp={name:"default",resolver:t=>Ju(`assets/icons/${t}.svg`)},ep=tp,On={caret:`
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
  `},sp={name:"system",resolver:t=>t in On?`data:image/svg+xml,${encodeURIComponent(On[t])}`:""},ip=sp,op=[ep,ip],Fr=[];function rp(t){Fr.push(t)}function ap(t){Fr=Fr.filter(e=>e!==t)}function In(t){return op.find(e=>e.name===t)}var np=N`
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
`;function I(t,e){const s=as({waitUntilFirstUpdate:!1},e);return(i,o)=>{const{update:r}=i,a=Array.isArray(t)?t:[t];i.update=function(l){a.forEach(c=>{const h=c;if(l.has(h)){const p=l.get(h),u=this[h];p!==u&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[o](p,u)}}),r.call(this,l)}}}var K=N`
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
 */const lp={attribute:!0,type:String,converter:Zs,reflect:!1,hasChanged:_a},cp=(t=lp,e,s)=>{const{kind:i,metadata:o}=s;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),r.set(s.name,t),i==="accessor"){const{name:a}=s;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,c,t)},init(l){return l!==void 0&&this.C(a,void 0,t,l),l}}}if(i==="setter"){const{name:a}=s;return function(l){const c=this[a];e.call(this,l),this.requestUpdate(a,c,t)}}throw Error("Unsupported decorator location: "+i)};function d(t){return(e,s)=>typeof s=="object"?cp(t,e,s):((i,o,r)=>{const a=o.hasOwnProperty(r);return o.constructor.createProperty(r,i),a?Object.getOwnPropertyDescriptor(o,r):void 0})(t,e,s)}/**
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
 */const pc=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L(t,e){return(s,i,o)=>{const r=a=>a.renderRoot?.querySelector(t)??null;return pc(s,i,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dp(t){return(e,s)=>pc(e,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}var wo,H=class extends Ei{constructor(){super(),xu(this,wo,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const s=new CustomEvent(t,as({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(s),s}static define(t,e=this,s={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,s)}catch{customElements.define(t,class extends e{},s)}return}let o=" (unknown version)",r=o;"version"in e&&e.version&&(o=" v"+e.version),"version"in i&&i.version&&(r=" v"+i.version),!(o&&r&&o===r)&&console.warn(`Attempted to register <${t}>${o}, but <${t}>${r} has already been registered.`)}attributeChangedCallback(t,e,s){wu(this,wo)||(this.constructor.elementProperties.forEach((i,o)=>{i.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),ku(this,wo,!0)),super.attributeChangedCallback(t,e,s)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,s)=>{t.has(s)&&this[s]==null&&(this[s]=e)})}};wo=new WeakMap;H.version="2.20.1";H.dependencies={};n([d()],H.prototype,"dir",2);n([d()],H.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hp=(t,e)=>t?._$litType$!==void 0,fc=t=>t.strings===void 0,up={},pp=(t,e=up)=>t._$AH=e;var bi=Symbol(),co=Symbol(),vr,yr=new Map,ft=class extends H{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var s;let i;if(e?.spriteSheet)return this.svg=C`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?bi:co}catch{return co}try{const o=document.createElement("div");o.innerHTML=await i.text();const r=o.firstElementChild;if(((s=r?.tagName)==null?void 0:s.toLowerCase())!=="svg")return bi;vr||(vr=new DOMParser);const l=vr.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):bi}catch{return bi}}connectedCallback(){super.connectedCallback(),rp(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ap(this)}getIconSource(){const t=In(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:s}=this.getIconSource(),i=s?In(this.library):void 0;if(!e){this.svg=null;return}let o=yr.get(e);if(o||(o=this.resolveIcon(e,i),yr.set(e,o)),!this.initialRender)return;const r=await o;if(r===co&&yr.delete(e),e===this.getIconSource().url){if(hp(r)){if(this.svg=r,i){await this.updateComplete;const a=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&a&&i.mutator(a)}return}switch(r){case co:case bi:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(t=i?.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ft.styles=[K,np];n([U()],ft.prototype,"svg",2);n([d({reflect:!0})],ft.prototype,"name",2);n([d()],ft.prototype,"src",2);n([d()],ft.prototype,"label",2);n([d({reflect:!0})],ft.prototype,"library",2);n([I("label")],ft.prototype,"handleLabelChange",1);n([I(["name","src","library"])],ft.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Gi=t=>(...e)=>({_$litDirective$:t,values:e});let Qi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=Gi(class extends Qi{constructor(t){if(super(t),t.type!==He.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const s=t.element.classList;for(const i of this.st)i in e||(s.remove(i),this.st.delete(i));for(const i in e){const o=!!e[i];o===this.st.has(i)||this.nt?.has(i)||(o?(s.add(i),this.st.add(i)):(s.remove(i),this.st.delete(i)))}return pe}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=t=>t??xt;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ps=Gi(class extends Qi{constructor(t){if(super(t),t.type!==He.PROPERTY&&t.type!==He.ATTRIBUTE&&t.type!==He.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!fc(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===pe||e===xt)return e;const s=t.element,i=t.name;if(t.type===He.PROPERTY){if(e===s[i])return pe}else if(t.type===He.BOOLEAN_ATTRIBUTE){if(!!e===s.hasAttribute(i))return pe}else if(t.type===He.ATTRIBUTE&&s.getAttribute(i)===e+"")return pe;return pp(t),e}});var Dt=class extends H{constructor(){super(...arguments),this.formControlController=new ns(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new se(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return C`
      <div
        class=${q({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${q({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
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
    `}};Dt.styles=[K,Ls,Qu];Dt.dependencies={"sl-icon":ft};n([L('input[type="checkbox"]')],Dt.prototype,"input",2);n([U()],Dt.prototype,"hasFocus",2);n([d()],Dt.prototype,"title",2);n([d()],Dt.prototype,"name",2);n([d()],Dt.prototype,"value",2);n([d({reflect:!0})],Dt.prototype,"size",2);n([d({type:Boolean,reflect:!0})],Dt.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],Dt.prototype,"checked",2);n([d({type:Boolean,reflect:!0})],Dt.prototype,"indeterminate",2);n([ei("checked")],Dt.prototype,"defaultChecked",2);n([d({reflect:!0})],Dt.prototype,"form",2);n([d({type:Boolean,reflect:!0})],Dt.prototype,"required",2);n([d({attribute:"help-text"})],Dt.prototype,"helpText",2);n([I("disabled",{waitUntilFirstUpdate:!0})],Dt.prototype,"handleDisabledChange",1);n([I(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Dt.prototype,"handleStateChange",1);var fp=N`
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
`;const Vr=new Set,js=new Map;let zs,Ca="ltr",$a="en";const mc=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(mc){const t=new MutationObserver(bc);Ca=document.documentElement.dir||"ltr",$a=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function gc(...t){t.map(e=>{const s=e.$code.toLowerCase();js.has(s)?js.set(s,Object.assign(Object.assign({},js.get(s)),e)):js.set(s,e),zs||(zs=e)}),bc()}function bc(){mc&&(Ca=document.documentElement.dir||"ltr",$a=document.documentElement.lang||navigator.language),[...Vr.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let mp=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Vr.add(this.host)}hostDisconnected(){Vr.delete(this.host)}dir(){return`${this.host.dir||Ca}`.toLowerCase()}lang(){return`${this.host.lang||$a}`.toLowerCase()}getTranslationData(e){var s,i;const o=new Intl.Locale(e.replace(/_/g,"-")),r=o?.language.toLowerCase(),a=(i=(s=o?.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&i!==void 0?i:"",l=js.get(`${r}-${a}`),c=js.get(r);return{locale:o,language:r,region:a,primary:l,secondary:c}}exists(e,s){var i;const{primary:o,secondary:r}=this.getTranslationData((i=s.lang)!==null&&i!==void 0?i:this.lang());return s=Object.assign({includeFallback:!1},s),!!(o&&o[e]||r&&r[e]||s.includeFallback&&zs&&zs[e])}term(e,...s){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let r;if(i&&i[e])r=i[e];else if(o&&o[e])r=o[e];else if(zs&&zs[e])r=zs[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof r=="function"?r(...s):r}date(e,s){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),s).format(e)}number(e,s){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),s).format(e)}relativeTime(e,s,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,s)}};var vc={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};gc(vc);var gp=vc,at=class extends mp{};gc(gp);var Zi=class extends H{constructor(){super(...arguments),this.localize=new at(this)}render(){return C`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Zi.styles=[K,fp];var yc=new Map,bp=new WeakMap;function vp(t){return t??{keyframes:[],options:{duration:0}}}function Pn(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function dt(t,e){yc.set(t,vp(e))}function kt(t,e,s){const i=bp.get(t);if(i?.[e])return Pn(i[e],s.dir);const o=yc.get(e);return o?Pn(o,s.dir):{keyframes:[],options:{duration:0}}}function At(t,e,s){return new Promise(i=>{if(s?.duration===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(e,Ki(as({},s),{duration:Br()?0:s.duration}));o.addEventListener("cancel",i,{once:!0}),o.addEventListener("finish",i,{once:!0})})}function Dn(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function Br(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Pt(t){return Promise.all(t.getAnimations().map(e=>new Promise(s=>{e.cancel(),requestAnimationFrame(s)})))}function Io(t,e){return t.map(s=>Ki(as({},s),{height:s.height==="auto"?`${e}px`:s.height}))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ln(t,e,s){return t?e(t):s?.(t)}var zt=class Hr extends H{constructor(){super(...arguments),this.localize=new at(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Pt(this.childrenContainer);const{keyframes:e,options:s}=kt(this,"tree-item.collapse",{dir:this.localize.dir()});await At(this.childrenContainer,Io(e,this.childrenContainer.scrollHeight),s),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&Hr.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Pt(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:s}=kt(this,"tree-item.expand",{dir:this.localize.dir()});await At(this.childrenContainer,Io(e,this.childrenContainer.scrollHeight),s),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(s=>Hr.isTreeItem(s)&&(e||!s.disabled)):[]}render(){const e=this.localize.dir()==="rtl",s=!this.loading&&(!this.isLeaf||this.lazy);return C`
      <div
        part="base"
        class="${q({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":s,"tree-item--rtl":this.localize.dir()==="rtl"})}"
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
            class=${q({"tree-item__expand-button":!0,"tree-item__expand-button--visible":s})}
            aria-hidden="true"
          >
            ${Ln(this.loading,()=>C` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Ln(this.selectable,()=>C`
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
    `}};zt.styles=[K,Gu];zt.dependencies={"sl-checkbox":Dt,"sl-icon":ft,"sl-spinner":Zi};n([U()],zt.prototype,"indeterminate",2);n([U()],zt.prototype,"isLeaf",2);n([U()],zt.prototype,"loading",2);n([U()],zt.prototype,"selectable",2);n([d({type:Boolean,reflect:!0})],zt.prototype,"expanded",2);n([d({type:Boolean,reflect:!0})],zt.prototype,"selected",2);n([d({type:Boolean,reflect:!0})],zt.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],zt.prototype,"lazy",2);n([L("slot:not([name])")],zt.prototype,"defaultSlot",2);n([L("slot[name=children]")],zt.prototype,"childrenSlot",2);n([L(".tree-item__item")],zt.prototype,"itemElement",2);n([L(".tree-item__children")],zt.prototype,"childrenContainer",2);n([L(".tree-item__expand-button slot")],zt.prototype,"expandButtonSlot",2);n([I("loading",{waitUntilFirstUpdate:!0})],zt.prototype,"handleLoadingChange",1);n([I("disabled")],zt.prototype,"handleDisabledChange",1);n([I("selected")],zt.prototype,"handleSelectedChange",1);n([I("expanded",{waitUntilFirstUpdate:!0})],zt.prototype,"handleExpandedChange",1);n([I("expanded",{waitUntilFirstUpdate:!0})],zt.prototype,"handleExpandAnimation",1);n([I("lazy",{waitUntilFirstUpdate:!0})],zt.prototype,"handleLazyChange",1);var Ti=zt;dt("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});dt("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Ti.define("sl-tree-item");var yp=N`
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
`,_p=N`
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
`;const gs=Math.min,he=Math.max,Po=Math.round,ho=Math.floor,je=t=>({x:t,y:t}),wp={left:"right",right:"left",bottom:"top",top:"bottom"},xp={start:"end",end:"start"};function Nr(t,e,s){return he(t,gs(e,s))}function si(t,e){return typeof t=="function"?t(e):t}function bs(t){return t.split("-")[0]}function ii(t){return t.split("-")[1]}function _c(t){return t==="x"?"y":"x"}function Sa(t){return t==="y"?"height":"width"}const kp=new Set(["top","bottom"]);function ss(t){return kp.has(bs(t))?"y":"x"}function Aa(t){return _c(ss(t))}function Cp(t,e,s){s===void 0&&(s=!1);const i=ii(t),o=Aa(t),r=Sa(o);let a=o==="x"?i===(s?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=Do(a)),[a,Do(a)]}function $p(t){const e=Do(t);return[Ur(t),e,Ur(e)]}function Ur(t){return t.replace(/start|end/g,e=>xp[e])}const Rn=["left","right"],Mn=["right","left"],Sp=["top","bottom"],Ap=["bottom","top"];function zp(t,e,s){switch(t){case"top":case"bottom":return s?e?Mn:Rn:e?Rn:Mn;case"left":case"right":return e?Sp:Ap;default:return[]}}function Ep(t,e,s,i){const o=ii(t);let r=zp(bs(t),s==="start",i);return o&&(r=r.map(a=>a+"-"+o),e&&(r=r.concat(r.map(Ur)))),r}function Do(t){return t.replace(/left|right|bottom|top/g,e=>wp[e])}function Tp(t){return{top:0,right:0,bottom:0,left:0,...t}}function wc(t){return typeof t!="number"?Tp(t):{top:t,right:t,bottom:t,left:t}}function Lo(t){const{x:e,y:s,width:i,height:o}=t;return{width:i,height:o,top:s,left:e,right:e+i,bottom:s+o,x:e,y:s}}function Fn(t,e,s){let{reference:i,floating:o}=t;const r=ss(e),a=Aa(e),l=Sa(a),c=bs(e),h=r==="y",p=i.x+i.width/2-o.width/2,u=i.y+i.height/2-o.height/2,f=i[l]/2-o[l]/2;let g;switch(c){case"top":g={x:p,y:i.y-o.height};break;case"bottom":g={x:p,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:u};break;case"left":g={x:i.x-o.width,y:u};break;default:g={x:i.x,y:i.y}}switch(ii(e)){case"start":g[a]-=f*(s&&h?-1:1);break;case"end":g[a]+=f*(s&&h?-1:1);break}return g}const Op=async(t,e,s)=>{const{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:a}=s,l=r.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(e));let h=await a.getElementRects({reference:t,floating:e,strategy:o}),{x:p,y:u}=Fn(h,i,c),f=i,g={},v=0;for(let _=0;_<l.length;_++){const{name:O,fn:T}=l[_],{x:k,y:S,data:y,reset:x}=await T({x:p,y:u,initialPlacement:i,placement:f,strategy:o,middlewareData:g,rects:h,platform:a,elements:{reference:t,floating:e}});p=k??p,u=S??u,g={...g,[O]:{...g[O],...y}},x&&v<=50&&(v++,typeof x=="object"&&(x.placement&&(f=x.placement),x.rects&&(h=x.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:o}):x.rects),{x:p,y:u}=Fn(h,f,c)),_=-1)}return{x:p,y:u,placement:f,strategy:o,middlewareData:g}};async function za(t,e){var s;e===void 0&&(e={});const{x:i,y:o,platform:r,rects:a,elements:l,strategy:c}=t,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:f=!1,padding:g=0}=si(e,t),v=wc(g),O=l[f?u==="floating"?"reference":"floating":u],T=Lo(await r.getClippingRect({element:(s=await(r.isElement==null?void 0:r.isElement(O)))==null||s?O:O.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:h,rootBoundary:p,strategy:c})),k=u==="floating"?{x:i,y:o,width:a.floating.width,height:a.floating.height}:a.reference,S=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),y=await(r.isElement==null?void 0:r.isElement(S))?await(r.getScale==null?void 0:r.getScale(S))||{x:1,y:1}:{x:1,y:1},x=Lo(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:k,offsetParent:S,strategy:c}):k);return{top:(T.top-x.top+v.top)/y.y,bottom:(x.bottom-T.bottom+v.bottom)/y.y,left:(T.left-x.left+v.left)/y.x,right:(x.right-T.right+v.right)/y.x}}const Ip=t=>({name:"arrow",options:t,async fn(e){const{x:s,y:i,placement:o,rects:r,platform:a,elements:l,middlewareData:c}=e,{element:h,padding:p=0}=si(t,e)||{};if(h==null)return{};const u=wc(p),f={x:s,y:i},g=Aa(o),v=Sa(g),_=await a.getDimensions(h),O=g==="y",T=O?"top":"left",k=O?"bottom":"right",S=O?"clientHeight":"clientWidth",y=r.reference[v]+r.reference[g]-f[g]-r.floating[v],x=f[g]-r.reference[g],V=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let Y=V?V[S]:0;(!Y||!await(a.isElement==null?void 0:a.isElement(V)))&&(Y=l.floating[S]||r.floating[v]);const Z=y/2-x/2,j=Y/2-_[v]/2-1,F=gs(u[T],j),yt=gs(u[k],j),_t=F,Tt=Y-_[v]-yt,wt=Y/2-_[v]/2+Z,Gt=Nr(_t,wt,Tt),mt=!c.arrow&&ii(o)!=null&&wt!==Gt&&r.reference[v]/2-(wt<_t?F:yt)-_[v]/2<0,it=mt?wt<_t?wt-_t:wt-Tt:0;return{[g]:f[g]+it,data:{[g]:Gt,centerOffset:wt-Gt-it,...mt&&{alignmentOffset:it}},reset:mt}}}),Pp=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var s,i;const{placement:o,middlewareData:r,rects:a,initialPlacement:l,platform:c,elements:h}=e,{mainAxis:p=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:_=!0,...O}=si(t,e);if((s=r.arrow)!=null&&s.alignmentOffset)return{};const T=bs(o),k=ss(l),S=bs(l)===l,y=await(c.isRTL==null?void 0:c.isRTL(h.floating)),x=f||(S||!_?[Do(l)]:$p(l)),V=v!=="none";!f&&V&&x.push(...Ep(l,_,v,y));const Y=[l,...x],Z=await za(e,O),j=[];let F=((i=r.flip)==null?void 0:i.overflows)||[];if(p&&j.push(Z[T]),u){const wt=Cp(o,a,y);j.push(Z[wt[0]],Z[wt[1]])}if(F=[...F,{placement:o,overflows:j}],!j.every(wt=>wt<=0)){var yt,_t;const wt=(((yt=r.flip)==null?void 0:yt.index)||0)+1,Gt=Y[wt];if(Gt&&(!(u==="alignment"?k!==ss(Gt):!1)||F.every(et=>et.overflows[0]>0&&ss(et.placement)===k)))return{data:{index:wt,overflows:F},reset:{placement:Gt}};let mt=(_t=F.filter(it=>it.overflows[0]<=0).sort((it,et)=>it.overflows[1]-et.overflows[1])[0])==null?void 0:_t.placement;if(!mt)switch(g){case"bestFit":{var Tt;const it=(Tt=F.filter(et=>{if(V){const Wt=ss(et.placement);return Wt===k||Wt==="y"}return!0}).map(et=>[et.placement,et.overflows.filter(Wt=>Wt>0).reduce((Wt,Bs)=>Wt+Bs,0)]).sort((et,Wt)=>et[1]-Wt[1])[0])==null?void 0:Tt[0];it&&(mt=it);break}case"initialPlacement":mt=l;break}if(o!==mt)return{reset:{placement:mt}}}return{}}}},Dp=new Set(["left","top"]);async function Lp(t,e){const{placement:s,platform:i,elements:o}=t,r=await(i.isRTL==null?void 0:i.isRTL(o.floating)),a=bs(s),l=ii(s),c=ss(s)==="y",h=Dp.has(a)?-1:1,p=r&&c?-1:1,u=si(e,t);let{mainAxis:f,crossAxis:g,alignmentAxis:v}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return l&&typeof v=="number"&&(g=l==="end"?v*-1:v),c?{x:g*p,y:f*h}:{x:f*h,y:g*p}}const Rp=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var s,i;const{x:o,y:r,placement:a,middlewareData:l}=e,c=await Lp(e,t);return a===((s=l.offset)==null?void 0:s.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:o+c.x,y:r+c.y,data:{...c,placement:a}}}}},Mp=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:s,y:i,placement:o}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:O=>{let{x:T,y:k}=O;return{x:T,y:k}}},...c}=si(t,e),h={x:s,y:i},p=await za(e,c),u=ss(bs(o)),f=_c(u);let g=h[f],v=h[u];if(r){const O=f==="y"?"top":"left",T=f==="y"?"bottom":"right",k=g+p[O],S=g-p[T];g=Nr(k,g,S)}if(a){const O=u==="y"?"top":"left",T=u==="y"?"bottom":"right",k=v+p[O],S=v-p[T];v=Nr(k,v,S)}const _=l.fn({...e,[f]:g,[u]:v});return{..._,data:{x:_.x-s,y:_.y-i,enabled:{[f]:r,[u]:a}}}}}},Fp=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var s,i;const{placement:o,rects:r,platform:a,elements:l}=e,{apply:c=()=>{},...h}=si(t,e),p=await za(e,h),u=bs(o),f=ii(o),g=ss(o)==="y",{width:v,height:_}=r.floating;let O,T;u==="top"||u==="bottom"?(O=u,T=f===(await(a.isRTL==null?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(T=u,O=f==="end"?"top":"bottom");const k=_-p.top-p.bottom,S=v-p.left-p.right,y=gs(_-p[O],k),x=gs(v-p[T],S),V=!e.middlewareData.shift;let Y=y,Z=x;if((s=e.middlewareData.shift)!=null&&s.enabled.x&&(Z=S),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(Y=k),V&&!f){const F=he(p.left,0),yt=he(p.right,0),_t=he(p.top,0),Tt=he(p.bottom,0);g?Z=v-2*(F!==0||yt!==0?F+yt:he(p.left,p.right)):Y=_-2*(_t!==0||Tt!==0?_t+Tt:he(p.top,p.bottom))}await c({...e,availableWidth:Z,availableHeight:Y});const j=await a.getDimensions(l.floating);return v!==j.width||_!==j.height?{reset:{rects:!0}}:{}}}};function Qo(){return typeof window<"u"}function oi(t){return xc(t)?(t.nodeName||"").toLowerCase():"#document"}function fe(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ke(t){var e;return(e=(xc(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function xc(t){return Qo()?t instanceof Node||t instanceof fe(t).Node:!1}function Se(t){return Qo()?t instanceof Element||t instanceof fe(t).Element:!1}function qe(t){return Qo()?t instanceof HTMLElement||t instanceof fe(t).HTMLElement:!1}function Vn(t){return!Qo()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof fe(t).ShadowRoot}const Vp=new Set(["inline","contents"]);function Ji(t){const{overflow:e,overflowX:s,overflowY:i,display:o}=Ae(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+s)&&!Vp.has(o)}const Bp=new Set(["table","td","th"]);function Hp(t){return Bp.has(oi(t))}const Np=[":popover-open",":modal"];function Zo(t){return Np.some(e=>{try{return t.matches(e)}catch{return!1}})}const Up=["transform","translate","scale","rotate","perspective"],jp=["transform","translate","scale","rotate","perspective","filter"],Wp=["paint","layout","strict","content"];function Jo(t){const e=Ea(),s=Se(t)?Ae(t):t;return Up.some(i=>s[i]?s[i]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!e&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!e&&(s.filter?s.filter!=="none":!1)||jp.some(i=>(s.willChange||"").includes(i))||Wp.some(i=>(s.contain||"").includes(i))}function qp(t){let e=vs(t);for(;qe(e)&&!ti(e);){if(Jo(e))return e;if(Zo(e))return null;e=vs(e)}return null}function Ea(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Kp=new Set(["html","body","#document"]);function ti(t){return Kp.has(oi(t))}function Ae(t){return fe(t).getComputedStyle(t)}function tr(t){return Se(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function vs(t){if(oi(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Vn(t)&&t.host||Ke(t);return Vn(e)?e.host:e}function kc(t){const e=vs(t);return ti(e)?t.ownerDocument?t.ownerDocument.body:t.body:qe(e)&&Ji(e)?e:kc(e)}function ji(t,e,s){var i;e===void 0&&(e=[]),s===void 0&&(s=!0);const o=kc(t),r=o===((i=t.ownerDocument)==null?void 0:i.body),a=fe(o);if(r){const l=jr(a);return e.concat(a,a.visualViewport||[],Ji(o)?o:[],l&&s?ji(l):[])}return e.concat(o,ji(o,[],s))}function jr(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Cc(t){const e=Ae(t);let s=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const o=qe(t),r=o?t.offsetWidth:s,a=o?t.offsetHeight:i,l=Po(s)!==r||Po(i)!==a;return l&&(s=r,i=a),{width:s,height:i,$:l}}function Ta(t){return Se(t)?t:t.contextElement}function Gs(t){const e=Ta(t);if(!qe(e))return je(1);const s=e.getBoundingClientRect(),{width:i,height:o,$:r}=Cc(e);let a=(r?Po(s.width):s.width)/i,l=(r?Po(s.height):s.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Yp=je(0);function $c(t){const e=fe(t);return!Ea()||!e.visualViewport?Yp:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Xp(t,e,s){return e===void 0&&(e=!1),!s||e&&s!==fe(t)?!1:e}function Ds(t,e,s,i){e===void 0&&(e=!1),s===void 0&&(s=!1);const o=t.getBoundingClientRect(),r=Ta(t);let a=je(1);e&&(i?Se(i)&&(a=Gs(i)):a=Gs(t));const l=Xp(r,s,i)?$c(r):je(0);let c=(o.left+l.x)/a.x,h=(o.top+l.y)/a.y,p=o.width/a.x,u=o.height/a.y;if(r){const f=fe(r),g=i&&Se(i)?fe(i):i;let v=f,_=jr(v);for(;_&&i&&g!==v;){const O=Gs(_),T=_.getBoundingClientRect(),k=Ae(_),S=T.left+(_.clientLeft+parseFloat(k.paddingLeft))*O.x,y=T.top+(_.clientTop+parseFloat(k.paddingTop))*O.y;c*=O.x,h*=O.y,p*=O.x,u*=O.y,c+=S,h+=y,v=fe(_),_=jr(v)}}return Lo({width:p,height:u,x:c,y:h})}function Oa(t,e){const s=tr(t).scrollLeft;return e?e.left+s:Ds(Ke(t)).left+s}function Sc(t,e,s){s===void 0&&(s=!1);const i=t.getBoundingClientRect(),o=i.left+e.scrollLeft-(s?0:Oa(t,i)),r=i.top+e.scrollTop;return{x:o,y:r}}function Gp(t){let{elements:e,rect:s,offsetParent:i,strategy:o}=t;const r=o==="fixed",a=Ke(i),l=e?Zo(e.floating):!1;if(i===a||l&&r)return s;let c={scrollLeft:0,scrollTop:0},h=je(1);const p=je(0),u=qe(i);if((u||!u&&!r)&&((oi(i)!=="body"||Ji(a))&&(c=tr(i)),qe(i))){const g=Ds(i);h=Gs(i),p.x=g.x+i.clientLeft,p.y=g.y+i.clientTop}const f=a&&!u&&!r?Sc(a,c,!0):je(0);return{width:s.width*h.x,height:s.height*h.y,x:s.x*h.x-c.scrollLeft*h.x+p.x+f.x,y:s.y*h.y-c.scrollTop*h.y+p.y+f.y}}function Qp(t){return Array.from(t.getClientRects())}function Zp(t){const e=Ke(t),s=tr(t),i=t.ownerDocument.body,o=he(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=he(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-s.scrollLeft+Oa(t);const l=-s.scrollTop;return Ae(i).direction==="rtl"&&(a+=he(e.clientWidth,i.clientWidth)-o),{width:o,height:r,x:a,y:l}}function Jp(t,e){const s=fe(t),i=Ke(t),o=s.visualViewport;let r=i.clientWidth,a=i.clientHeight,l=0,c=0;if(o){r=o.width,a=o.height;const h=Ea();(!h||h&&e==="fixed")&&(l=o.offsetLeft,c=o.offsetTop)}return{width:r,height:a,x:l,y:c}}const tf=new Set(["absolute","fixed"]);function ef(t,e){const s=Ds(t,!0,e==="fixed"),i=s.top+t.clientTop,o=s.left+t.clientLeft,r=qe(t)?Gs(t):je(1),a=t.clientWidth*r.x,l=t.clientHeight*r.y,c=o*r.x,h=i*r.y;return{width:a,height:l,x:c,y:h}}function Bn(t,e,s){let i;if(e==="viewport")i=Jp(t,s);else if(e==="document")i=Zp(Ke(t));else if(Se(e))i=ef(e,s);else{const o=$c(t);i={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return Lo(i)}function Ac(t,e){const s=vs(t);return s===e||!Se(s)||ti(s)?!1:Ae(s).position==="fixed"||Ac(s,e)}function sf(t,e){const s=e.get(t);if(s)return s;let i=ji(t,[],!1).filter(l=>Se(l)&&oi(l)!=="body"),o=null;const r=Ae(t).position==="fixed";let a=r?vs(t):t;for(;Se(a)&&!ti(a);){const l=Ae(a),c=Jo(a);!c&&l.position==="fixed"&&(o=null),(r?!c&&!o:!c&&l.position==="static"&&!!o&&tf.has(o.position)||Ji(a)&&!c&&Ac(t,a))?i=i.filter(p=>p!==a):o=l,a=vs(a)}return e.set(t,i),i}function of(t){let{element:e,boundary:s,rootBoundary:i,strategy:o}=t;const a=[...s==="clippingAncestors"?Zo(e)?[]:sf(e,this._c):[].concat(s),i],l=a[0],c=a.reduce((h,p)=>{const u=Bn(e,p,o);return h.top=he(u.top,h.top),h.right=gs(u.right,h.right),h.bottom=gs(u.bottom,h.bottom),h.left=he(u.left,h.left),h},Bn(e,l,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function rf(t){const{width:e,height:s}=Cc(t);return{width:e,height:s}}function af(t,e,s){const i=qe(e),o=Ke(e),r=s==="fixed",a=Ds(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=je(0);function h(){c.x=Oa(o)}if(i||!i&&!r)if((oi(e)!=="body"||Ji(o))&&(l=tr(e)),i){const g=Ds(e,!0,r,e);c.x=g.x+e.clientLeft,c.y=g.y+e.clientTop}else o&&h();r&&!i&&o&&h();const p=o&&!i&&!r?Sc(o,l):je(0),u=a.left+l.scrollLeft-c.x-p.x,f=a.top+l.scrollTop-c.y-p.y;return{x:u,y:f,width:a.width,height:a.height}}function _r(t){return Ae(t).position==="static"}function Hn(t,e){if(!qe(t)||Ae(t).position==="fixed")return null;if(e)return e(t);let s=t.offsetParent;return Ke(t)===s&&(s=s.ownerDocument.body),s}function zc(t,e){const s=fe(t);if(Zo(t))return s;if(!qe(t)){let o=vs(t);for(;o&&!ti(o);){if(Se(o)&&!_r(o))return o;o=vs(o)}return s}let i=Hn(t,e);for(;i&&Hp(i)&&_r(i);)i=Hn(i,e);return i&&ti(i)&&_r(i)&&!Jo(i)?s:i||qp(t)||s}const nf=async function(t){const e=this.getOffsetParent||zc,s=this.getDimensions,i=await s(t.floating);return{reference:af(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function lf(t){return Ae(t).direction==="rtl"}const xo={convertOffsetParentRelativeRectToViewportRelativeRect:Gp,getDocumentElement:Ke,getClippingRect:of,getOffsetParent:zc,getElementRects:nf,getClientRects:Qp,getDimensions:rf,getScale:Gs,isElement:Se,isRTL:lf};function Ec(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function cf(t,e){let s=null,i;const o=Ke(t);function r(){var l;clearTimeout(i),(l=s)==null||l.disconnect(),s=null}function a(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const h=t.getBoundingClientRect(),{left:p,top:u,width:f,height:g}=h;if(l||e(),!f||!g)return;const v=ho(u),_=ho(o.clientWidth-(p+f)),O=ho(o.clientHeight-(u+g)),T=ho(p),S={rootMargin:-v+"px "+-_+"px "+-O+"px "+-T+"px",threshold:he(0,gs(1,c))||1};let y=!0;function x(V){const Y=V[0].intersectionRatio;if(Y!==c){if(!y)return a();Y?a(!1,Y):i=setTimeout(()=>{a(!1,1e-7)},1e3)}Y===1&&!Ec(h,t.getBoundingClientRect())&&a(),y=!1}try{s=new IntersectionObserver(x,{...S,root:o.ownerDocument})}catch{s=new IntersectionObserver(x,S)}s.observe(t)}return a(!0),r}function df(t,e,s,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,h=Ta(t),p=o||r?[...h?ji(h):[],...ji(e)]:[];p.forEach(T=>{o&&T.addEventListener("scroll",s,{passive:!0}),r&&T.addEventListener("resize",s)});const u=h&&l?cf(h,s):null;let f=-1,g=null;a&&(g=new ResizeObserver(T=>{let[k]=T;k&&k.target===h&&g&&(g.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var S;(S=g)==null||S.observe(e)})),s()}),h&&!c&&g.observe(h),g.observe(e));let v,_=c?Ds(t):null;c&&O();function O(){const T=Ds(t);_&&!Ec(_,T)&&s(),_=T,v=requestAnimationFrame(O)}return s(),()=>{var T;p.forEach(k=>{o&&k.removeEventListener("scroll",s),r&&k.removeEventListener("resize",s)}),u?.(),(T=g)==null||T.disconnect(),g=null,c&&cancelAnimationFrame(v)}}const hf=Rp,uf=Mp,pf=Pp,Nn=Fp,ff=Ip,mf=(t,e,s)=>{const i=new Map,o={platform:xo,...s},r={...o.platform,_c:i};return Op(t,e,{...o,platform:r})};function gf(t){return bf(t)}function wr(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function bf(t){for(let e=t;e;e=wr(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=wr(t);e;e=wr(e)){if(!(e instanceof Element))continue;const s=getComputedStyle(e);if(s.display!=="contents"&&(s.position!=="static"||Jo(s)||e.tagName==="BODY"))return e}return null}function vf(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var ht=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let i=0,o=0,r=0,a=0,l=0,c=0,h=0,p=0;s?t.top<e.top?(i=t.left,o=t.bottom,r=t.right,a=t.bottom,l=e.left,c=e.top,h=e.right,p=e.top):(i=e.left,o=e.bottom,r=e.right,a=e.bottom,l=t.left,c=t.top,h=t.right,p=t.top):t.left<e.left?(i=t.right,o=t.top,r=e.left,a=e.top,l=t.right,c=t.bottom,h=e.left,p=e.bottom):(i=e.right,o=e.top,r=t.left,a=t.top,l=e.right,c=e.bottom,h=t.left,p=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${p}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||vf(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=df(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[hf({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Nn({apply:({rects:s})=>{const i=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${s.reference.width}px`:"",this.popup.style.height=o?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(pf({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(uf({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Nn({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(ff({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?s=>xo.getOffsetParent(s,gf):xo.getOffsetParent;mf(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Ki(as({},xo),{getOffsetParent:e})}).then(({x:s,y:i,middlewareData:o,placement:r})=>{const a=this.localize.dir()==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${s}px`,top:`${i}px`}),this.arrow){const c=o.arrow.x,h=o.arrow.y;let p="",u="",f="",g="";if(this.arrowPlacement==="start"){const v=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=a?v:"",g=a?"":v}else if(this.arrowPlacement==="end"){const v=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=a?"":v,g=a?v:"",f=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof c=="number"?`${c}px`:"",p=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:p,right:u,bottom:f,left:g,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return C`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${q({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${q({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?C`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};ht.styles=[K,_p];n([L(".popup")],ht.prototype,"popup",2);n([L(".popup__arrow")],ht.prototype,"arrowEl",2);n([d()],ht.prototype,"anchor",2);n([d({type:Boolean,reflect:!0})],ht.prototype,"active",2);n([d({reflect:!0})],ht.prototype,"placement",2);n([d({reflect:!0})],ht.prototype,"strategy",2);n([d({type:Number})],ht.prototype,"distance",2);n([d({type:Number})],ht.prototype,"skidding",2);n([d({type:Boolean})],ht.prototype,"arrow",2);n([d({attribute:"arrow-placement"})],ht.prototype,"arrowPlacement",2);n([d({attribute:"arrow-padding",type:Number})],ht.prototype,"arrowPadding",2);n([d({type:Boolean})],ht.prototype,"flip",2);n([d({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],ht.prototype,"flipFallbackPlacements",2);n([d({attribute:"flip-fallback-strategy"})],ht.prototype,"flipFallbackStrategy",2);n([d({type:Object})],ht.prototype,"flipBoundary",2);n([d({attribute:"flip-padding",type:Number})],ht.prototype,"flipPadding",2);n([d({type:Boolean})],ht.prototype,"shift",2);n([d({type:Object})],ht.prototype,"shiftBoundary",2);n([d({attribute:"shift-padding",type:Number})],ht.prototype,"shiftPadding",2);n([d({attribute:"auto-size"})],ht.prototype,"autoSize",2);n([d()],ht.prototype,"sync",2);n([d({type:Object})],ht.prototype,"autoSizeBoundary",2);n([d({attribute:"auto-size-padding",type:Number})],ht.prototype,"autoSizePadding",2);n([d({attribute:"hover-bridge",type:Boolean})],ht.prototype,"hoverBridge",2);function ee(t,e){return new Promise(s=>{function i(o){o.target===t&&(t.removeEventListener(e,i),s())}t.addEventListener(e,i)})}var Mt=class extends H{constructor(){super(),this.localize=new at(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Dn(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Dn(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Pt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:s,options:i}=kt(this,"tooltip.show",{dir:this.localize.dir()});await At(this.popup.popup,s,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Pt(this.body);const{keyframes:s,options:i}=kt(this,"tooltip.hide",{dir:this.localize.dir()});await At(this.popup.popup,s,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ee(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ee(this,"sl-after-hide")}render(){return C`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${q({tooltip:!0,"tooltip--open":this.open})}
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
    `}};Mt.styles=[K,yp];Mt.dependencies={"sl-popup":ht};n([L("slot:not([name])")],Mt.prototype,"defaultSlot",2);n([L(".tooltip__body")],Mt.prototype,"body",2);n([L("sl-popup")],Mt.prototype,"popup",2);n([d()],Mt.prototype,"content",2);n([d()],Mt.prototype,"placement",2);n([d({type:Boolean,reflect:!0})],Mt.prototype,"disabled",2);n([d({type:Number})],Mt.prototype,"distance",2);n([d({type:Boolean,reflect:!0})],Mt.prototype,"open",2);n([d({type:Number})],Mt.prototype,"skidding",2);n([d()],Mt.prototype,"trigger",2);n([d({type:Boolean})],Mt.prototype,"hoist",2);n([I("open",{waitUntilFirstUpdate:!0})],Mt.prototype,"handleOpenChange",1);n([I(["content","distance","hoist","placement","skidding"])],Mt.prototype,"handleOptionsChange",1);n([I("disabled")],Mt.prototype,"handleDisabledChange",1);dt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});dt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Mt.define("sl-tooltip");var yf=N`
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
`;function It(t,e,s){const i=o=>Object.is(o,-0)?0:o;return t<e?i(e):t>s?i(s):i(t)}function Un(t,e=!1){function s(r){const a=r.getChildrenItems({includeDisabled:!1});if(a.length){const l=a.every(h=>h.selected),c=a.every(h=>!h.selected&&!h.indeterminate);r.selected=l,r.indeterminate=!l&&!c}}function i(r){const a=r.parentElement;Ti.isTreeItem(a)&&(s(a),i(a))}function o(r){for(const a of r.getChildrenItems())a.selected=e?r.selected||a.selected:!a.disabled&&r.selected,o(a);e&&s(r)}o(t),i(t)}var Rs=class extends H{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new at(this),this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const s=t.querySelector(`[slot="${e}-icon"]`),i=this.getExpandButtonIcon(e);i&&(s===null?t.append(i):s.hasAttribute("data-default")&&s.replaceWith(i))})},this.handleTreeChanged=t=>{for(const e of t){const s=[...e.addedNodes].filter(Ti.isTreeItem),i=[...e.removedNodes].filter(Ti.isTreeItem);s.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Ti.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}getExpandButtonIcon(t){const s=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(s){const i=s.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Un(t);else if(this.selection==="single"||t.isLeaf){const i=this.getAllTreeItems();for(const o of i)o.selected=o===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const s=this.selectedItems;(e.length!==s.length||s.some(i=>!e.includes(i)))&&Promise.all(s.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:s}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(o=>{var r;return["input","textarea"].includes((r=o?.tagName)==null?void 0:r.toLowerCase())}))return;const e=this.getFocusableItems(),s=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const o=e.findIndex(c=>c.matches(":focus")),r=e[o],a=c=>{const h=e[It(c,0,e.length-1)];this.focusItem(h)},l=c=>{r.expanded=c};t.key==="ArrowDown"?a(o+1):t.key==="ArrowUp"?a(o-1):s&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"?!r||r.disabled||r.expanded||r.isLeaf&&!r.lazy?a(o+1):l(!0):s&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"?!r||r.disabled||r.isLeaf||!r.expanded?a(o-1):l(!1):t.key==="Home"?a(0):t.key==="End"?a(e.length-1):(t.key==="Enter"||t.key===" ")&&(r.disabled||this.selectItem(r))}}handleClick(t){const e=t.target,s=e.closest("sl-tree-item"),i=t.composedPath().some(o=>{var r;return(r=o?.classList)==null?void 0:r.contains("tree-item__expand-button")});!s||s.disabled||e!==this.clickTarget||(i?s.expanded=!s.expanded:this.selectItem(s))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const s of e)s.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(s=>Un(s,!0)))}get selectedItems(){const t=this.getAllTreeItems(),e=s=>s.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(s=>{var i;if(s.disabled)return!1;const o=(i=s.parentElement)==null?void 0:i.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||e.has(o))&&e.add(s),!e.has(s)})}render(){return C`
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
    `}};Rs.styles=[K,yf];n([L("slot:not([name])")],Rs.prototype,"defaultSlot",2);n([L("slot[name=expand-icon]")],Rs.prototype,"expandedIconSlot",2);n([L("slot[name=collapse-icon]")],Rs.prototype,"collapsedIconSlot",2);n([d()],Rs.prototype,"selection",2);n([I("selection")],Rs.prototype,"handleSelectionChange",1);Rs.define("sl-tree");var _f=N`
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
`,Ia=class extends H{render(){return C` <slot></slot> `}};Ia.styles=[K,_f];Ia.define("sl-visually-hidden");var wf=N`
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
`,xf=0,to=class extends H{constructor(){super(...arguments),this.attrId=++xf,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return C`
      <slot
        part="base"
        class=${q({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};to.styles=[K,wf];n([d({reflect:!0})],to.prototype,"name",2);n([d({type:Boolean,reflect:!0})],to.prototype,"active",2);n([I("active")],to.prototype,"handleActiveChange",1);to.define("sl-tab-panel");var kf=N`
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
`,Cf=N`
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
 */const Tc=Symbol.for(""),$f=t=>{if(t?.r===Tc)return t?._$litStatic$},Ro=(t,...e)=>({_$litStatic$:e.reduce((s,i,o)=>s+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[o+1],t[0]),r:Tc}),jn=new Map,Sf=t=>(e,...s)=>{const i=s.length;let o,r;const a=[],l=[];let c,h=0,p=!1;for(;h<i;){for(c=e[h];h<i&&(r=s[h],(o=$f(r))!==void 0);)c+=o+e[++h],p=!0;h!==i&&l.push(r),a.push(c),h++}if(h===i&&a.push(e[i]),p){const u=a.join("$$lit$$");(e=jn.get(u))===void 0&&(a.raw=a,jn.set(u,e=a)),s=l}return t(e,...s)},Oi=Sf(C);var Rt=class extends H{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Ro`a`:Ro`button`;return Oi`
      <${e}
        part="base"
        class=${q({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
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
    `}};Rt.styles=[K,Cf];Rt.dependencies={"sl-icon":ft};n([L(".icon-button")],Rt.prototype,"button",2);n([U()],Rt.prototype,"hasFocus",2);n([d()],Rt.prototype,"name",2);n([d()],Rt.prototype,"library",2);n([d()],Rt.prototype,"src",2);n([d()],Rt.prototype,"href",2);n([d()],Rt.prototype,"target",2);n([d()],Rt.prototype,"download",2);n([d()],Rt.prototype,"label",2);n([d({type:Boolean,reflect:!0})],Rt.prototype,"disabled",2);var _s=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return C`
      <span
        part="base"
        class=${q({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
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
    `}};_s.styles=[K,kf];_s.dependencies={"sl-icon-button":Rt};n([d({reflect:!0})],_s.prototype,"variant",2);n([d({reflect:!0})],_s.prototype,"size",2);n([d({type:Boolean,reflect:!0})],_s.prototype,"pill",2);n([d({type:Boolean})],_s.prototype,"removable",2);_s.define("sl-tag");var Af=N`
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
        class=${q({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
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
            class=${q({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
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
    `}};nt.styles=[K,Ls,Af];n([L(".textarea__control")],nt.prototype,"input",2);n([L(".textarea__size-adjuster")],nt.prototype,"sizeAdjuster",2);n([U()],nt.prototype,"hasFocus",2);n([d()],nt.prototype,"title",2);n([d()],nt.prototype,"name",2);n([d()],nt.prototype,"value",2);n([d({reflect:!0})],nt.prototype,"size",2);n([d({type:Boolean,reflect:!0})],nt.prototype,"filled",2);n([d()],nt.prototype,"label",2);n([d({attribute:"help-text"})],nt.prototype,"helpText",2);n([d()],nt.prototype,"placeholder",2);n([d({type:Number})],nt.prototype,"rows",2);n([d()],nt.prototype,"resize",2);n([d({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],nt.prototype,"readonly",2);n([d({reflect:!0})],nt.prototype,"form",2);n([d({type:Boolean,reflect:!0})],nt.prototype,"required",2);n([d({type:Number})],nt.prototype,"minlength",2);n([d({type:Number})],nt.prototype,"maxlength",2);n([d()],nt.prototype,"autocapitalize",2);n([d()],nt.prototype,"autocorrect",2);n([d()],nt.prototype,"autocomplete",2);n([d({type:Boolean})],nt.prototype,"autofocus",2);n([d()],nt.prototype,"enterkeyhint",2);n([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],nt.prototype,"spellcheck",2);n([d()],nt.prototype,"inputmode",2);n([ei()],nt.prototype,"defaultValue",2);n([I("disabled",{waitUntilFirstUpdate:!0})],nt.prototype,"handleDisabledChange",1);n([I("rows",{waitUntilFirstUpdate:!0})],nt.prototype,"handleRowsChange",1);n([I("value",{waitUntilFirstUpdate:!0})],nt.prototype,"handleValueChange",1);nt.define("sl-textarea");var zf=N`
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
`,Ef=0,ze=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.attrId=++Ef,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,C`
      <div
        part="base"
        class=${q({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
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
    `}};ze.styles=[K,zf];ze.dependencies={"sl-icon-button":Rt};n([L(".tab")],ze.prototype,"tab",2);n([d({reflect:!0})],ze.prototype,"panel",2);n([d({type:Boolean,reflect:!0})],ze.prototype,"active",2);n([d({type:Boolean,reflect:!0})],ze.prototype,"closable",2);n([d({type:Boolean,reflect:!0})],ze.prototype,"disabled",2);n([d({type:Number,reflect:!0})],ze.prototype,"tabIndex",2);n([I("active")],ze.prototype,"handleActiveChange",1);n([I("disabled")],ze.prototype,"handleDisabledChange",1);ze.define("sl-tab");var Tf=N`
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
`,Of=N`
  :host {
    display: contents;
  }
`,eo=class extends H{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(s=>this.resizeObserver.unobserve(s)),this.observedElements=[],e.forEach(s=>{this.resizeObserver.observe(s),this.observedElements.push(s)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return C` <slot @slotchange=${this.handleSlotChange}></slot> `}};eo.styles=[K,Of];n([d({type:Boolean,reflect:!0})],eo.prototype,"disabled",2);n([I("disabled",{waitUntilFirstUpdate:!0})],eo.prototype,"handleDisabledChange",1);function If(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Wr=new Set;function Pf(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Df(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Ii(t){if(Wr.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=Pf()+Df();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",s),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Pi(t){Wr.delete(t),Wr.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function qr(t,e,s="vertical",i="smooth"){const o=If(t,e),r=o.top+e.scrollTop,a=o.left+e.scrollLeft,l=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,h=e.scrollTop,p=e.scrollTop+e.offsetHeight;(s==="horizontal"||s==="both")&&(a<l?e.scrollTo({left:a,behavior:i}):a+t.clientWidth>c&&e.scrollTo({left:a-e.offsetWidth+t.clientWidth,behavior:i})),(s==="vertical"||s==="both")&&(r<h?e.scrollTo({top:r,behavior:i}):r+t.clientHeight>p&&e.scrollTo({top:r-e.offsetHeight+t.clientHeight,behavior:i}))}var Nt=class extends H{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new at(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{const s=e.filter(({target:i})=>{if(i===this)return!0;if(i.closest("sl-tab-group")!==this)return!1;const o=i.tagName.toLowerCase();return o==="sl-tab"||o==="sl-tab-panel"});if(s.length!==0){if(s.some(i=>!["aria-labelledby","aria-controls"].includes(i.attributeName))&&setTimeout(()=>this.setAriaLabels()),s.some(i=>i.attributeName==="disabled"))this.syncTabsAndPanels();else if(s.some(i=>i.attributeName==="active")){const o=s.filter(r=>r.attributeName==="active"&&r.target.tagName.toLowerCase()==="sl-tab").map(r=>r.target).find(r=>r.active);o&&this.setActiveTab(o)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((s,i)=>{var o;s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),i.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const s=t.target.closest("sl-tab");s?.closest("sl-tab-group")===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(t){const s=t.target.closest("sl-tab");if(s?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const o=this.tabs.find(l=>l.matches(":focus")),r=this.localize.dir()==="rtl";let a=null;if(o?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")a=this.focusableTabs[0];else if(t.key==="End")a=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(r?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const l=this.tabs.findIndex(c=>c===o);a=this.findNextFocusableTab(l,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(r?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const l=this.tabs.findIndex(c=>c===o);a=this.findNextFocusableTab(l,"forward")}if(!a)return;a.tabIndex=0,a.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(a,{scrollBehavior:"smooth"}):this.tabs.forEach(l=>{l.tabIndex=l===a?0:-1}),["top","bottom"].includes(this.placement)&&qr(a,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=as({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const s=this.activeTab;this.activeTab=t,this.tabs.forEach(i=>{i.active=i===this.activeTab,i.tabIndex=i===this.activeTab?0:-1}),this.panels.forEach(i=>{var o;return i.active=i.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&qr(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(s&&this.emit("sl-tab-hide",{detail:{name:s.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(s=>s.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,s=t.clientHeight,i=this.localize.dir()==="rtl",o=this.getAllTabs(),a=o.slice(0,o.indexOf(t)).reduce((l,c)=>({left:l.left+c.clientWidth,top:l.top+c.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*a.left}px`:`${a.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.translate=`0 ${a.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let s=null;const i=e==="forward"?1:-1;let o=t+i;for(;t<this.tabs.length;){if(s=this.tabs[o]||null,s===null){e==="forward"?s=this.focusableTabs[0]:s=this.focusableTabs[this.focusableTabs.length-1];break}if(!s.disabled)break;o+=i}return s}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(s=>s.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return C`
      <div
        part="base"
        class=${q({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?C`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${q({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
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
                  class=${q({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
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
    `}};Nt.styles=[K,Tf];Nt.dependencies={"sl-icon-button":Rt,"sl-resize-observer":eo};n([L(".tab-group")],Nt.prototype,"tabGroup",2);n([L(".tab-group__body")],Nt.prototype,"body",2);n([L(".tab-group__nav")],Nt.prototype,"nav",2);n([L(".tab-group__indicator")],Nt.prototype,"indicator",2);n([U()],Nt.prototype,"hasScrollControls",2);n([U()],Nt.prototype,"shouldHideScrollStartButton",2);n([U()],Nt.prototype,"shouldHideScrollEndButton",2);n([d()],Nt.prototype,"placement",2);n([d()],Nt.prototype,"activation",2);n([d({attribute:"no-scroll-controls",type:Boolean})],Nt.prototype,"noScrollControls",2);n([d({attribute:"fixed-scroll-controls",type:Boolean})],Nt.prototype,"fixedScrollControls",2);n([Xi({passive:!0})],Nt.prototype,"updateScrollButtons",1);n([I("noScrollControls",{waitUntilFirstUpdate:!0})],Nt.prototype,"updateScrollControls",1);n([I("placement",{waitUntilFirstUpdate:!0})],Nt.prototype,"syncIndicator",1);Nt.define("sl-tab-group");var Lf=N`
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
`,Pa=class extends H{constructor(){super(...arguments),this.effect="none"}render(){return C`
      <div
        part="base"
        class=${q({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Pa.styles=[K,Lf];n([d()],Pa.prototype,"effect",2);Pa.define("sl-skeleton");var Rf=N`
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
`;function Di(t,e){function s(o){const r=t.getBoundingClientRect(),a=t.ownerDocument.defaultView,l=r.left+a.scrollX,c=r.top+a.scrollY,h=o.pageX-l,p=o.pageY-c;e?.onMove&&e.onMove(h,p)}function i(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",i),e?.onStop&&e.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",i),e?.initialEvent instanceof PointerEvent&&s(e.initialEvent)}var Wn=()=>null,me=class extends H{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new at(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=Wn,this.snapThreshold=12}toSnapFunction(t){const e=t.split(" ");return({pos:s,size:i,snapThreshold:o,isRtl:r,vertical:a})=>{let l=s,c=Number.POSITIVE_INFINITY;return e.forEach(h=>{let p;if(h.startsWith("repeat(")){const f=t.substring(7,t.length-1),g=f.endsWith("%"),v=Number.parseFloat(f),_=g?i*(v/100):v;p=Math.round((r&&!a?i-s:s)/_)*_}else h.endsWith("%")?p=i*(Number.parseFloat(h)/100):p=Number.parseFloat(h);r&&!a&&(p=i-p);const u=Math.abs(s-p);u<=o&&u<c&&(l=p,c=u)}),l}}set snap(t){this.snapValue=t??"",t?this.snapFunction=typeof t=="string"?this.toSnapFunction(t):t:this.snapFunction=Wn}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),Di(this,{onMove:(s,i)=>{var o;let r=this.vertical?i:s;this.primary==="end"&&(r=this.size-r),r=(o=this.snapFunction({pos:r,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))!=null?o:r,this.position=It(this.pixelsToPercentage(r),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const s=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=s),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=s),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const i=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=i})}this.position=It(e,0,100)}}handleResize(t){const{width:e,height:s}=t[0].contentRect;this.size=this.vertical?s:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",s=this.localize.dir()==="rtl",i=`
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
    `}};me.styles=[K,Rf];n([L(".divider")],me.prototype,"divider",2);n([d({type:Number,reflect:!0})],me.prototype,"position",2);n([d({attribute:"position-in-pixels",type:Number})],me.prototype,"positionInPixels",2);n([d({type:Boolean,reflect:!0})],me.prototype,"vertical",2);n([d({type:Boolean,reflect:!0})],me.prototype,"disabled",2);n([d()],me.prototype,"primary",2);n([d({reflect:!0})],me.prototype,"snap",1);n([d({type:Number,attribute:"snap-threshold"})],me.prototype,"snapThreshold",2);n([I("position")],me.prototype,"handlePositionChange",1);n([I("positionInPixels")],me.prototype,"handlePositionInPixelsChange",1);n([I("vertical")],me.prototype,"handleVerticalChange",1);me.define("sl-split-panel");var Mf=N`
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
        class=${q({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${q({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
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
    `}};Yt.styles=[K,Ls,Mf];n([L('input[type="checkbox"]')],Yt.prototype,"input",2);n([U()],Yt.prototype,"hasFocus",2);n([d()],Yt.prototype,"title",2);n([d()],Yt.prototype,"name",2);n([d()],Yt.prototype,"value",2);n([d({reflect:!0})],Yt.prototype,"size",2);n([d({type:Boolean,reflect:!0})],Yt.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],Yt.prototype,"checked",2);n([ei("checked")],Yt.prototype,"defaultChecked",2);n([d({reflect:!0})],Yt.prototype,"form",2);n([d({type:Boolean,reflect:!0})],Yt.prototype,"required",2);n([d({attribute:"help-text"})],Yt.prototype,"helpText",2);n([I("checked",{waitUntilFirstUpdate:!0})],Yt.prototype,"handleCheckedChange",1);n([I("disabled",{waitUntilFirstUpdate:!0})],Yt.prototype,"handleDisabledChange",1);Yt.define("sl-switch");eo.define("sl-resize-observer");var Ff=N`
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
 */let Kr=class extends Qi{constructor(e){if(super(e),this.it=xt,e.type!==He.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===xt||e==null)return this._t=void 0,this.it=e;if(e===pe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const s=[e];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}};Kr.directiveName="unsafeHTML",Kr.resultType=1;const ko=Gi(Kr);var st=class extends H{constructor(){super(...arguments),this.formControlController=new ns(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new se(this,"help-text","label"),this.localize=new at(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>C`
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
        </div>`}else if(e===this.maxOptionsVisible)return C`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return C``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,s){if(super.attributeChangedCallback(t,e,s),t==="value"){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}}handleValueChange(){if(!this.valueHasChanged){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(s=>e.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Pt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=kt(this,"select.show",{dir:this.localize.dir()});await At(this.popup.popup,t,e),this.currentOption&&qr(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Pt(this);const{keyframes:t,options:e}=kt(this,"select.hide",{dir:this.localize.dir()});await At(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,ee(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,ee(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value&&this.value.length<=0;return C`
      <div
        part="form-control"
        class=${q({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
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
            class=${q({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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
    `}};st.styles=[K,Ls,Ff];st.dependencies={"sl-icon":ft,"sl-popup":ht,"sl-tag":_s};n([L(".select")],st.prototype,"popup",2);n([L(".select__combobox")],st.prototype,"combobox",2);n([L(".select__display-input")],st.prototype,"displayInput",2);n([L(".select__value-input")],st.prototype,"valueInput",2);n([L(".select__listbox")],st.prototype,"listbox",2);n([U()],st.prototype,"hasFocus",2);n([U()],st.prototype,"displayLabel",2);n([U()],st.prototype,"currentOption",2);n([U()],st.prototype,"selectedOptions",2);n([U()],st.prototype,"valueHasChanged",2);n([d()],st.prototype,"name",2);n([U()],st.prototype,"value",1);n([d({attribute:"value"})],st.prototype,"defaultValue",2);n([d({reflect:!0})],st.prototype,"size",2);n([d()],st.prototype,"placeholder",2);n([d({type:Boolean,reflect:!0})],st.prototype,"multiple",2);n([d({attribute:"max-options-visible",type:Number})],st.prototype,"maxOptionsVisible",2);n([d({type:Boolean,reflect:!0})],st.prototype,"disabled",2);n([d({type:Boolean})],st.prototype,"clearable",2);n([d({type:Boolean,reflect:!0})],st.prototype,"open",2);n([d({type:Boolean})],st.prototype,"hoist",2);n([d({type:Boolean,reflect:!0})],st.prototype,"filled",2);n([d({type:Boolean,reflect:!0})],st.prototype,"pill",2);n([d()],st.prototype,"label",2);n([d({reflect:!0})],st.prototype,"placement",2);n([d({attribute:"help-text"})],st.prototype,"helpText",2);n([d({reflect:!0})],st.prototype,"form",2);n([d({type:Boolean,reflect:!0})],st.prototype,"required",2);n([d()],st.prototype,"getTag",2);n([I("disabled",{waitUntilFirstUpdate:!0})],st.prototype,"handleDisabledChange",1);n([I(["defaultValue","value"],{waitUntilFirstUpdate:!0})],st.prototype,"handleValueChange",1);n([I("open",{waitUntilFirstUpdate:!0})],st.prototype,"handleOpenChange",1);dt("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});dt("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Vf=st;st.define("sl-select");Zi.define("sl-spinner");var Bf=N`
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
        class=${q({"form-control":!0,"form-control--medium":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
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
            class=${q({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
    `}};$t.styles=[K,Ls,Bf];n([L(".range__control")],$t.prototype,"input",2);n([L(".range__tooltip")],$t.prototype,"output",2);n([U()],$t.prototype,"hasFocus",2);n([U()],$t.prototype,"hasTooltip",2);n([d()],$t.prototype,"title",2);n([d()],$t.prototype,"name",2);n([d({type:Number})],$t.prototype,"value",2);n([d()],$t.prototype,"label",2);n([d({attribute:"help-text"})],$t.prototype,"helpText",2);n([d({type:Boolean,reflect:!0})],$t.prototype,"disabled",2);n([d({type:Number})],$t.prototype,"min",2);n([d({type:Number})],$t.prototype,"max",2);n([d({type:Number})],$t.prototype,"step",2);n([d()],$t.prototype,"tooltip",2);n([d({attribute:!1})],$t.prototype,"tooltipFormatter",2);n([d({reflect:!0})],$t.prototype,"form",2);n([ei()],$t.prototype,"defaultValue",2);n([Xi({passive:!0})],$t.prototype,"handleThumbDragStart",1);n([I("value",{waitUntilFirstUpdate:!0})],$t.prototype,"handleValueChange",1);n([I("disabled",{waitUntilFirstUpdate:!0})],$t.prototype,"handleDisabledChange",1);n([I("hasTooltip",{waitUntilFirstUpdate:!0})],$t.prototype,"syncRange",1);$t.define("sl-range");var Hf=N`
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
 */const Oc="important",Nf=" !"+Oc,ae=Gi(class extends Qi{constructor(t){if(super(t),t.type!==He.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const o=e[i];if(o!=null){this.ft.add(i);const r=typeof o=="string"&&o.endsWith(Nf);i.includes("-")||r?s.setProperty(i,r?o.slice(0,-11):o,r?Oc:""):s[i]=o}}return pe}});var Xt=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:s,right:i,width:o}=this.rating.getBoundingClientRect(),r=e?this.roundToPrecision((i-t)/o*this.max,this.precision):this.roundToPrecision((t-s)/o*this.max,this.precision);return It(r,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight"){const o=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft"){const o=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const s=1/e;return Math.ceil(t*s)/s}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys());let s=0;return this.disabled||this.readonly?s=this.value:s=this.isHovering?this.hoverValue:this.value,C`
      <div
        part="base"
        class=${q({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
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
                  class=${q({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===i+1})}
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
                class=${q({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===i+1,"rating__symbol--active":s>=i+1})}
                role="presentation"
              >
                ${ko(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Xt.styles=[K,Hf];Xt.dependencies={"sl-icon":ft};n([L(".rating")],Xt.prototype,"rating",2);n([U()],Xt.prototype,"hoverValue",2);n([U()],Xt.prototype,"isHovering",2);n([d()],Xt.prototype,"label",2);n([d({type:Number})],Xt.prototype,"value",2);n([d({type:Number})],Xt.prototype,"max",2);n([d({type:Number})],Xt.prototype,"precision",2);n([d({type:Boolean,reflect:!0})],Xt.prototype,"readonly",2);n([d({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);n([d()],Xt.prototype,"getSymbol",2);n([Xi({passive:!0})],Xt.prototype,"handleTouchMove",1);n([I("hoverValue")],Xt.prototype,"handleHoverValueChange",1);n([I("isHovering")],Xt.prototype,"handleIsHoveringChange",1);Xt.define("sl-rating");var Uf=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Ms=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const s=e.getTime()-t.getTime(),{unit:i,value:o}=Uf.find(r=>Math.abs(s)<r.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(s/o),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let r;i==="minute"?r=uo("second"):i==="hour"?r=uo("minute"):i==="day"?r=uo("hour"):r=uo("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),r)}return C` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};n([U()],Ms.prototype,"isoTime",2);n([U()],Ms.prototype,"relativeTime",2);n([d()],Ms.prototype,"date",2);n([d()],Ms.prototype,"format",2);n([d()],Ms.prototype,"numeric",2);n([d({type:Boolean})],Ms.prototype,"sync",2);function uo(t){const s={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return s-Date.now()%s}Ms.define("sl-relative-time");var Ic=N`
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
`,jf=N`
  ${Ic}

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
          class=${q({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
    `}};Ee.styles=[K,jf];n([L(".button")],Ee.prototype,"input",2);n([L(".hidden-input")],Ee.prototype,"hiddenInput",2);n([U()],Ee.prototype,"hasFocus",2);n([d({type:Boolean,reflect:!0})],Ee.prototype,"checked",2);n([d()],Ee.prototype,"value",2);n([d({type:Boolean,reflect:!0})],Ee.prototype,"disabled",2);n([d({reflect:!0})],Ee.prototype,"size",2);n([d({type:Boolean,reflect:!0})],Ee.prototype,"pill",2);n([I("disabled",{waitUntilFirstUpdate:!0})],Ee.prototype,"handleDisabledChange",1);Ee.define("sl-radio-button");var Wf=N`
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
`,qf=N`
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
    `}};Fs.styles=[K,qf];n([L("slot")],Fs.prototype,"defaultSlot",2);n([U()],Fs.prototype,"disableRole",2);n([d()],Fs.prototype,"label",2);function vi(t){var e;const s="sl-button, sl-radio-button";return(e=t.closest(s))!=null?e:t.querySelector(s)}var Ut=class extends H{constructor(){super(...arguments),this.formControlController=new ns(this),this.hasSlotController=new se(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?Au:t?Su:Yo}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),s=this.getAllRadios(),i=this.value;!e||e.disabled||(this.value=e.value,s.forEach(o=>o.checked=o===e),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const s=this.getAllRadios().filter(l=>!l.disabled),i=(e=s.find(l=>l.checked))!=null?e:s[0],o=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,r=this.value;let a=s.indexOf(i)+o;a<0&&(a=s.length-1),a>s.length-1&&(a=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||l.setAttribute("tabindex","-1")}),this.value=s[a].value,s[a].checked=!0,this.hasButtonGroup?s[a].shadowRoot.querySelector("button").focus():(s[a].setAttribute("tabindex","0"),s[a].focus()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const s=this.getAllRadios();if(await Promise.all(s.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=s.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),s.length>0&&!s.some(i=>i.checked))if(this.hasButtonGroup){const i=(t=s[0].shadowRoot)==null?void 0:t.querySelector("button");i&&i.setAttribute("tabindex","0")}else s[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const i=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),s=e.find(r=>r.checked),i=e.find(r=>!r.disabled),o=s||i;o&&o.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,o=C`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return C`
      <fieldset
        part="form-control"
        class=${q({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
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
    `}};Ut.styles=[K,Ls,Wf];Ut.dependencies={"sl-button-group":Fs};n([L("slot:not([name])")],Ut.prototype,"defaultSlot",2);n([L(".radio-group__validation-input")],Ut.prototype,"validationInput",2);n([U()],Ut.prototype,"hasButtonGroup",2);n([U()],Ut.prototype,"errorMessage",2);n([U()],Ut.prototype,"defaultValue",2);n([d()],Ut.prototype,"label",2);n([d({attribute:"help-text"})],Ut.prototype,"helpText",2);n([d()],Ut.prototype,"name",2);n([d({reflect:!0})],Ut.prototype,"value",2);n([d({reflect:!0})],Ut.prototype,"size",2);n([d({reflect:!0})],Ut.prototype,"form",2);n([d({type:Boolean,reflect:!0})],Ut.prototype,"required",2);n([I("size",{waitUntilFirstUpdate:!0})],Ut.prototype,"handleSizeChange",1);n([I("value")],Ut.prototype,"handleValueChange",1);Ut.define("sl-radio-group");var Kf=N`
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
    `}};ri.styles=[K,Kf];n([L(".progress-ring__indicator")],ri.prototype,"indicator",2);n([U()],ri.prototype,"indicatorOffset",2);n([d({type:Number,reflect:!0})],ri.prototype,"value",2);n([d()],ri.prototype,"label",2);ri.define("sl-progress-ring");var Yf=N`
  :host {
    display: inline-block;
  }
`;let Pc=null;class Dc{}Dc.render=function(t,e){Pc(t,e)};self.QrCreator=Dc;(function(t){function e(l,c,h,p){var u={},f=t(h,c);f.u(l),f.J(),p=p||0;var g=f.h(),v=f.h()+2*p;return u.text=l,u.level=c,u.version=h,u.O=v,u.a=function(_,O){return _-=p,O-=p,0>_||_>=g||0>O||O>=g?!1:f.a(_,O)},u}function s(l,c,h,p,u,f,g,v,_,O){function T(k,S,y,x,V,Y,Z){k?(l.lineTo(S+Y,y+Z),l.arcTo(S,y,x,V,f)):l.lineTo(S,y)}g?l.moveTo(c+f,h):l.moveTo(c,h),T(v,p,h,p,u,-f,0),T(_,p,u,c,u,0,-f),T(O,c,u,c,h,f,0),T(g,c,h,p,h,0,f)}function i(l,c,h,p,u,f,g,v,_,O){function T(k,S,y,x){l.moveTo(k+y,S),l.lineTo(k,S),l.lineTo(k,S+x),l.arcTo(k,S,k+y,S,f)}g&&T(c,h,f,f),v&&T(p,h,-f,f),_&&T(p,u,-f,-f),O&&T(c,u,f,-f)}function o(l,c){var h=c.fill;if(typeof h=="string")l.fillStyle=h;else{var p=h.type,u=h.colorStops;if(h=h.position.map(g=>Math.round(g*c.size)),p==="linear-gradient")var f=l.createLinearGradient.apply(l,h);else if(p==="radial-gradient")f=l.createRadialGradient.apply(l,h);else throw Error("Unsupported fill");u.forEach(([g,v])=>{f.addColorStop(g,v)}),l.fillStyle=f}}function r(l,c){t:{var h=c.text,p=c.v,u=c.N,f=c.K,g=c.P;for(u=Math.max(1,u||1),f=Math.min(40,f||40);u<=f;u+=1)try{var v=e(h,p,u,g);break t}catch{}v=void 0}if(!v)return null;for(h=l.getContext("2d"),c.background&&(h.fillStyle=c.background,h.fillRect(c.left,c.top,c.size,c.size)),p=v.O,f=c.size/p,h.beginPath(),g=0;g<p;g+=1)for(u=0;u<p;u+=1){var _=h,O=c.left+u*f,T=c.top+g*f,k=g,S=u,y=v.a,x=O+f,V=T+f,Y=k-1,Z=k+1,j=S-1,F=S+1,yt=Math.floor(Math.min(.5,Math.max(0,c.R))*f),_t=y(k,S),Tt=y(Y,j),wt=y(Y,S);Y=y(Y,F);var Gt=y(k,F);F=y(Z,F),S=y(Z,S),Z=y(Z,j),k=y(k,j),O=Math.round(O),T=Math.round(T),x=Math.round(x),V=Math.round(V),_t?s(_,O,T,x,V,yt,!wt&&!k,!wt&&!Gt,!S&&!Gt,!S&&!k):i(_,O,T,x,V,yt,wt&&k&&Tt,wt&&Gt&&Y,S&&Gt&&F,S&&k&&Z)}return o(h,c),h.fill(),l}var a={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Pc=function(l,c){var h={};Object.assign(h,a,l),h.N=h.minVersion,h.K=h.maxVersion,h.v=h.ecLevel,h.left=h.left,h.top=h.top,h.size=h.size,h.fill=h.fill,h.background=h.background,h.text=h.text,h.R=h.radius,h.P=h.quiet,c instanceof HTMLCanvasElement?((c.width!==h.size||c.height!==h.size)&&(c.width=h.size,c.height=h.size),c.getContext("2d").clearRect(0,0,c.width,c.height),r(c,h)):(l=document.createElement("canvas"),l.width=h.size,l.height=h.size,h=r(l,h),c.appendChild(h))}})(function(){function t(c){var h=s.s(c);return{S:function(){return 4},b:function(){return h.length},write:function(p){for(var u=0;u<h.length;u+=1)p.put(h[u],8)}}}function e(){var c=[],h=0,p={B:function(){return c},c:function(u){return(c[Math.floor(u/8)]>>>7-u%8&1)==1},put:function(u,f){for(var g=0;g<f;g+=1)p.m((u>>>f-g-1&1)==1)},f:function(){return h},m:function(u){var f=Math.floor(h/8);c.length<=f&&c.push(0),u&&(c[f]|=128>>>h%8),h+=1}};return p}function s(c,h){function p(k,S){for(var y=-1;7>=y;y+=1)if(!(-1>=k+y||v<=k+y))for(var x=-1;7>=x;x+=1)-1>=S+x||v<=S+x||(g[k+y][S+x]=0<=y&&6>=y&&(x==0||x==6)||0<=x&&6>=x&&(y==0||y==6)||2<=y&&4>=y&&2<=x&&4>=x)}function u(k,S){for(var y=v=4*c+17,x=Array(y),V=0;V<y;V+=1){x[V]=Array(y);for(var Y=0;Y<y;Y+=1)x[V][Y]=null}for(g=x,p(0,0),p(v-7,0),p(0,v-7),y=r.G(c),x=0;x<y.length;x+=1)for(V=0;V<y.length;V+=1){Y=y[x];var Z=y[V];if(g[Y][Z]==null)for(var j=-2;2>=j;j+=1)for(var F=-2;2>=F;F+=1)g[Y+j][Z+F]=j==-2||j==2||F==-2||F==2||j==0&&F==0}for(y=8;y<v-8;y+=1)g[y][6]==null&&(g[y][6]=y%2==0);for(y=8;y<v-8;y+=1)g[6][y]==null&&(g[6][y]=y%2==0);for(y=r.w(f<<3|S),x=0;15>x;x+=1)V=!k&&(y>>x&1)==1,g[6>x?x:8>x?x+1:v-15+x][8]=V,g[8][8>x?v-x-1:9>x?15-x:14-x]=V;if(g[v-8][8]=!k,7<=c){for(y=r.A(c),x=0;18>x;x+=1)V=!k&&(y>>x&1)==1,g[Math.floor(x/3)][x%3+v-8-3]=V;for(x=0;18>x;x+=1)V=!k&&(y>>x&1)==1,g[x%3+v-8-3][Math.floor(x/3)]=V}if(_==null){for(k=l.I(c,f),y=e(),x=0;x<O.length;x+=1)V=O[x],y.put(4,4),y.put(V.b(),r.f(4,c)),V.write(y);for(x=V=0;x<k.length;x+=1)V+=k[x].j;if(y.f()>8*V)throw Error("code length overflow. ("+y.f()+">"+8*V+")");for(y.f()+4<=8*V&&y.put(0,4);y.f()%8!=0;)y.m(!1);for(;!(y.f()>=8*V)&&(y.put(236,8),!(y.f()>=8*V));)y.put(17,8);var yt=0;for(V=x=0,Y=Array(k.length),Z=Array(k.length),j=0;j<k.length;j+=1){var _t=k[j].j,Tt=k[j].o-_t;for(x=Math.max(x,_t),V=Math.max(V,Tt),Y[j]=Array(_t),F=0;F<Y[j].length;F+=1)Y[j][F]=255&y.B()[F+yt];for(yt+=_t,F=r.C(Tt),_t=i(Y[j],F.b()-1).l(F),Z[j]=Array(F.b()-1),F=0;F<Z[j].length;F+=1)Tt=F+_t.b()-Z[j].length,Z[j][F]=0<=Tt?_t.c(Tt):0}for(F=y=0;F<k.length;F+=1)y+=k[F].o;for(y=Array(y),F=yt=0;F<x;F+=1)for(j=0;j<k.length;j+=1)F<Y[j].length&&(y[yt]=Y[j][F],yt+=1);for(F=0;F<V;F+=1)for(j=0;j<k.length;j+=1)F<Z[j].length&&(y[yt]=Z[j][F],yt+=1);_=y}for(k=_,y=-1,x=v-1,V=7,Y=0,S=r.F(S),Z=v-1;0<Z;Z-=2)for(Z==6&&--Z;;){for(j=0;2>j;j+=1)g[x][Z-j]==null&&(F=!1,Y<k.length&&(F=(k[Y]>>>V&1)==1),S(x,Z-j)&&(F=!F),g[x][Z-j]=F,--V,V==-1&&(Y+=1,V=7));if(x+=y,0>x||v<=x){x-=y,y=-y;break}}}var f=o[h],g=null,v=0,_=null,O=[],T={u:function(k){k=t(k),O.push(k),_=null},a:function(k,S){if(0>k||v<=k||0>S||v<=S)throw Error(k+","+S);return g[k][S]},h:function(){return v},J:function(){for(var k=0,S=0,y=0;8>y;y+=1){u(!0,y);var x=r.D(T);(y==0||k>x)&&(k=x,S=y)}u(!1,S)}};return T}function i(c,h){if(typeof c.length>"u")throw Error(c.length+"/"+h);var p=function(){for(var f=0;f<c.length&&c[f]==0;)f+=1;for(var g=Array(c.length-f+h),v=0;v<c.length-f;v+=1)g[v]=c[v+f];return g}(),u={c:function(f){return p[f]},b:function(){return p.length},multiply:function(f){for(var g=Array(u.b()+f.b()-1),v=0;v<u.b();v+=1)for(var _=0;_<f.b();_+=1)g[v+_]^=a.i(a.g(u.c(v))+a.g(f.c(_)));return i(g,0)},l:function(f){if(0>u.b()-f.b())return u;for(var g=a.g(u.c(0))-a.g(f.c(0)),v=Array(u.b()),_=0;_<u.b();_+=1)v[_]=u.c(_);for(_=0;_<f.b();_+=1)v[_]^=a.i(a.g(f.c(_))+g);return i(v,0).l(f)}};return u}s.s=function(c){for(var h=[],p=0;p<c.length;p++){var u=c.charCodeAt(p);128>u?h.push(u):2048>u?h.push(192|u>>6,128|u&63):55296>u||57344<=u?h.push(224|u>>12,128|u>>6&63,128|u&63):(p++,u=65536+((u&1023)<<10|c.charCodeAt(p)&1023),h.push(240|u>>18,128|u>>12&63,128|u>>6&63,128|u&63))}return h};var o={L:1,M:0,Q:3,H:2},r=function(){function c(u){for(var f=0;u!=0;)f+=1,u>>>=1;return f}var h=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],p={w:function(u){for(var f=u<<10;0<=c(f)-c(1335);)f^=1335<<c(f)-c(1335);return(u<<10|f)^21522},A:function(u){for(var f=u<<12;0<=c(f)-c(7973);)f^=7973<<c(f)-c(7973);return u<<12|f},G:function(u){return h[u-1]},F:function(u){switch(u){case 0:return function(f,g){return(f+g)%2==0};case 1:return function(f){return f%2==0};case 2:return function(f,g){return g%3==0};case 3:return function(f,g){return(f+g)%3==0};case 4:return function(f,g){return(Math.floor(f/2)+Math.floor(g/3))%2==0};case 5:return function(f,g){return f*g%2+f*g%3==0};case 6:return function(f,g){return(f*g%2+f*g%3)%2==0};case 7:return function(f,g){return(f*g%3+(f+g)%2)%2==0};default:throw Error("bad maskPattern:"+u)}},C:function(u){for(var f=i([1],0),g=0;g<u;g+=1)f=f.multiply(i([1,a.i(g)],0));return f},f:function(u,f){if(u!=4||1>f||40<f)throw Error("mode: "+u+"; type: "+f);return 10>f?8:16},D:function(u){for(var f=u.h(),g=0,v=0;v<f;v+=1)for(var _=0;_<f;_+=1){for(var O=0,T=u.a(v,_),k=-1;1>=k;k+=1)if(!(0>v+k||f<=v+k))for(var S=-1;1>=S;S+=1)0>_+S||f<=_+S||(k!=0||S!=0)&&T==u.a(v+k,_+S)&&(O+=1);5<O&&(g+=3+O-5)}for(v=0;v<f-1;v+=1)for(_=0;_<f-1;_+=1)O=0,u.a(v,_)&&(O+=1),u.a(v+1,_)&&(O+=1),u.a(v,_+1)&&(O+=1),u.a(v+1,_+1)&&(O+=1),(O==0||O==4)&&(g+=3);for(v=0;v<f;v+=1)for(_=0;_<f-6;_+=1)u.a(v,_)&&!u.a(v,_+1)&&u.a(v,_+2)&&u.a(v,_+3)&&u.a(v,_+4)&&!u.a(v,_+5)&&u.a(v,_+6)&&(g+=40);for(_=0;_<f;_+=1)for(v=0;v<f-6;v+=1)u.a(v,_)&&!u.a(v+1,_)&&u.a(v+2,_)&&u.a(v+3,_)&&u.a(v+4,_)&&!u.a(v+5,_)&&u.a(v+6,_)&&(g+=40);for(_=O=0;_<f;_+=1)for(v=0;v<f;v+=1)u.a(v,_)&&(O+=1);return g+=Math.abs(100*O/f/f-50)/5*10}};return p}(),a=function(){for(var c=Array(256),h=Array(256),p=0;8>p;p+=1)c[p]=1<<p;for(p=8;256>p;p+=1)c[p]=c[p-4]^c[p-5]^c[p-6]^c[p-8];for(p=0;255>p;p+=1)h[c[p]]=p;return{g:function(u){if(1>u)throw Error("glog("+u+")");return h[u]},i:function(u){for(;0>u;)u+=255;for(;256<=u;)u-=255;return c[u]}}}(),l=function(){function c(u,f){switch(f){case o.L:return h[4*(u-1)];case o.M:return h[4*(u-1)+1];case o.Q:return h[4*(u-1)+2];case o.H:return h[4*(u-1)+3]}}var h=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],p={I:function(u,f){var g=c(u,f);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+u+"/errorCorrectLevel:"+f);u=g.length/3,f=[];for(var v=0;v<u;v+=1)for(var _=g[3*v],O=g[3*v+1],T=g[3*v+2],k=0;k<_;k+=1){var S=T,y={};y.o=O,y.j=S,f.push(y)}return f}};return p}();return s}());const Xf=QrCreator;var Te=class extends H{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Xf.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return C`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${ae({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Te.styles=[K,Yf];n([L("canvas")],Te.prototype,"canvas",2);n([d()],Te.prototype,"value",2);n([d()],Te.prototype,"label",2);n([d({type:Number})],Te.prototype,"size",2);n([d()],Te.prototype,"fill",2);n([d()],Te.prototype,"background",2);n([d({type:Number})],Te.prototype,"radius",2);n([d({attribute:"error-correction"})],Te.prototype,"errorCorrection",2);n([I(["background","errorCorrection","fill","radius","size","value"])],Te.prototype,"generate",1);Te.define("sl-qr-code");var Gf=N`
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
        class=${q({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?C` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Ye.styles=[K,Gf];Ye.dependencies={"sl-icon":ft};n([U()],Ye.prototype,"checked",2);n([U()],Ye.prototype,"hasFocus",2);n([d()],Ye.prototype,"value",2);n([d({reflect:!0})],Ye.prototype,"size",2);n([d({type:Boolean,reflect:!0})],Ye.prototype,"disabled",2);n([I("checked")],Ye.prototype,"handleCheckedChange",1);n([I("disabled",{waitUntilFirstUpdate:!0})],Ye.prototype,"handleDisabledChange",1);Ye.define("sl-radio");var Qf=N`
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
        class=${q({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};ke.styles=[K,Qf];ke.dependencies={"sl-icon":ft};n([L(".option__label")],ke.prototype,"defaultSlot",2);n([U()],ke.prototype,"current",2);n([U()],ke.prototype,"selected",2);n([U()],ke.prototype,"hasHover",2);n([d({reflect:!0})],ke.prototype,"value",2);n([d({type:Boolean,reflect:!0})],ke.prototype,"disabled",2);n([I("disabled")],ke.prototype,"handleDisabledChange",1);n([I("selected")],ke.prototype,"handleSelectedChange",1);n([I("value")],ke.prototype,"handleValueChange",1);ke.define("sl-option");ht.define("sl-popup");var Zf=N`
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
        class=${q({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
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
    `}};so.styles=[K,Zf];n([d({type:Number,reflect:!0})],so.prototype,"value",2);n([d({type:Boolean,reflect:!0})],so.prototype,"indeterminate",2);n([d()],so.prototype,"label",2);so.define("sl-progress-bar");var Jf=N`
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
`,Lc=class extends H{render(){return C` <slot part="base" class="menu-label"></slot> `}};Lc.styles=[K,Jf];Lc.define("sl-menu-label");var tm=N`
  :host {
    display: contents;
  }
`,Xe=class extends H{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return C` <slot></slot> `}};Xe.styles=[K,tm];n([d({reflect:!0})],Xe.prototype,"attr",2);n([d({attribute:"attr-old-value",type:Boolean,reflect:!0})],Xe.prototype,"attrOldValue",2);n([d({attribute:"char-data",type:Boolean,reflect:!0})],Xe.prototype,"charData",2);n([d({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Xe.prototype,"charDataOldValue",2);n([d({attribute:"child-list",type:Boolean,reflect:!0})],Xe.prototype,"childList",2);n([d({type:Boolean,reflect:!0})],Xe.prototype,"disabled",2);n([I("disabled")],Xe.prototype,"handleDisabledChange",1);n([I("attr",{waitUntilFirstUpdate:!0}),I("attr-old-value",{waitUntilFirstUpdate:!0}),I("char-data",{waitUntilFirstUpdate:!0}),I("char-data-old-value",{waitUntilFirstUpdate:!0}),I("childList",{waitUntilFirstUpdate:!0})],Xe.prototype,"handleChange",1);Xe.define("sl-mutation-observer");var em=N`
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
        class=${q({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
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
            class=${q({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
    `}};J.styles=[K,Ls,em];J.dependencies={"sl-icon":ft};n([L(".input__control")],J.prototype,"input",2);n([U()],J.prototype,"hasFocus",2);n([d()],J.prototype,"title",2);n([d({reflect:!0})],J.prototype,"type",2);n([d()],J.prototype,"name",2);n([d()],J.prototype,"value",2);n([ei()],J.prototype,"defaultValue",2);n([d({reflect:!0})],J.prototype,"size",2);n([d({type:Boolean,reflect:!0})],J.prototype,"filled",2);n([d({type:Boolean,reflect:!0})],J.prototype,"pill",2);n([d()],J.prototype,"label",2);n([d({attribute:"help-text"})],J.prototype,"helpText",2);n([d({type:Boolean})],J.prototype,"clearable",2);n([d({type:Boolean,reflect:!0})],J.prototype,"disabled",2);n([d()],J.prototype,"placeholder",2);n([d({type:Boolean,reflect:!0})],J.prototype,"readonly",2);n([d({attribute:"password-toggle",type:Boolean})],J.prototype,"passwordToggle",2);n([d({attribute:"password-visible",type:Boolean})],J.prototype,"passwordVisible",2);n([d({attribute:"no-spin-buttons",type:Boolean})],J.prototype,"noSpinButtons",2);n([d({reflect:!0})],J.prototype,"form",2);n([d({type:Boolean,reflect:!0})],J.prototype,"required",2);n([d()],J.prototype,"pattern",2);n([d({type:Number})],J.prototype,"minlength",2);n([d({type:Number})],J.prototype,"maxlength",2);n([d()],J.prototype,"min",2);n([d()],J.prototype,"max",2);n([d()],J.prototype,"step",2);n([d()],J.prototype,"autocapitalize",2);n([d()],J.prototype,"autocorrect",2);n([d()],J.prototype,"autocomplete",2);n([d({type:Boolean})],J.prototype,"autofocus",2);n([d()],J.prototype,"enterkeyhint",2);n([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],J.prototype,"spellcheck",2);n([d()],J.prototype,"inputmode",2);n([I("disabled",{waitUntilFirstUpdate:!0})],J.prototype,"handleDisabledChange",1);n([I("step",{waitUntilFirstUpdate:!0})],J.prototype,"handleStepChange",1);n([I("value",{waitUntilFirstUpdate:!0})],J.prototype,"handleValueChange",1);var sm=J;J.define("sl-input");var im=N`
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
`,Da=class extends H{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],s=t.composedPath(),i=s.find(l=>{var c;return e.includes(((c=l?.getAttribute)==null?void 0:c.call(l,"role"))||"")});if(!i||s.find(l=>{var c;return((c=l?.getAttribute)==null?void 0:c.call(l,"role"))==="menu"})!==this)return;const a=i;a.type==="checkbox"&&(a.checked=!a.checked),this.emit("sl-select",{detail:{item:a}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),s=this.getCurrentItem();let i=s?e.indexOf(s):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===t?"0":"-1")})}render(){return C`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Da.styles=[K,im];n([L("slot")],Da.prototype,"defaultSlot",2);Da.define("sl-menu");var om=N`
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
 */const Li=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const i of s)i._$AO?.(e,!1),Li(i,e);return!0},Mo=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},Rc=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),nm(e)}};function rm(t){this._$AN!==void 0?(Mo(this),this._$AM=t,Rc(this)):this._$AM=t}function am(t,e=!1,s=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let r=s;r<i.length;r++)Li(i[r],!1),Mo(i[r]);else i!=null&&(Li(i,!1),Mo(i));else Li(this,t)}const nm=t=>{t.type==He.CHILD&&(t._$AP??=am,t._$AQ??=rm)};class lm extends Qi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,i){super._$AT(e,s,i),Rc(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(Li(this,e),Mo(this))}setValue(e){if(fc(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cm=()=>new dm;class dm{}const xr=new WeakMap,hm=Gi(class extends lm{render(t){return xt}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),xt}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=xr.get(e);s===void 0&&(s=new WeakMap,xr.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?xr.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var um=class{constructor(t,e){this.popupRef=cm(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var i;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(i=s.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),i=s?.assignedElements({flatten:!0}).filter(h=>h.localName==="sl-menu")[0],o=getComputedStyle(this.host).direction==="rtl";if(!i)return;const{left:r,top:a,width:l,height:c}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?r+l:r}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?r+l:r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${a+c}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const i of e.assignedElements())if(s=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let i=1;i!==s.length;++i)s[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((o,r)=>{var a;const l=(a=e.get(r))!=null?a:new CSSUnitValue(0,"px"),h=(l instanceof CSSUnitValue?l:new CSSUnitValue(0,"px")).to("px");return o-h.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?C`
      <sl-popup
        ${hm(this.popupRef)}
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
    `:C` <slot name="submenu" hidden></slot> `}},ge=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new se(this,"submenu"),this.submenuController=new um(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Zu(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return C`
      <div
        id="anchor"
        part="base"
        class=${q({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
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
    `}};ge.styles=[K,om];ge.dependencies={"sl-icon":ft,"sl-popup":ht,"sl-spinner":Zi};n([L("slot:not([name])")],ge.prototype,"defaultSlot",2);n([L(".menu-item")],ge.prototype,"menuItem",2);n([d()],ge.prototype,"type",2);n([d({type:Boolean,reflect:!0})],ge.prototype,"checked",2);n([d()],ge.prototype,"value",2);n([d({type:Boolean,reflect:!0})],ge.prototype,"loading",2);n([d({type:Boolean,reflect:!0})],ge.prototype,"disabled",2);n([I("checked")],ge.prototype,"handleCheckedChange",1);n([I("disabled")],ge.prototype,"handleDisabledChange",1);n([I("type")],ge.prototype,"handleTypeChange",1);ge.define("sl-menu-item");var pm=N`
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
        class=${q({"image-comparer":!0,"image-comparer--rtl":t})}
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
    `}};Vs.styles=[K,pm];Vs.scopedElement={"sl-icon":ft};n([L(".image-comparer")],Vs.prototype,"base",2);n([L(".image-comparer__handle")],Vs.prototype,"handle",2);n([d({type:Number,reflect:!0})],Vs.prototype,"position",2);n([I("position",{waitUntilFirstUpdate:!0})],Vs.prototype,"handlePositionChange",1);Vs.define("sl-image-comparer");var fm=N`
  :host {
    display: block;
  }
`,kr=new Map;function mm(t,e="cors"){const s=kr.get(t);if(s!==void 0)return Promise.resolve(s);const i=fetch(t,{mode:e}).then(async o=>{const r={ok:o.ok,status:o.status,html:await o.text()};return kr.set(t,r),r});return kr.set(t,i),i}var ai=class extends H{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(s=>e.setAttribute(s.name,s.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await mm(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(s=>this.executeScript(s)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return C`<slot></slot>`}};ai.styles=[K,fm];n([d()],ai.prototype,"src",2);n([d()],ai.prototype,"mode",2);n([d({attribute:"allow-scripts",type:Boolean})],ai.prototype,"allowScripts",2);n([I("src")],ai.prototype,"handleSrcChange",1);ai.define("sl-include");ft.define("sl-icon");Rt.define("sl-icon-button");var er=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],s=this.unit==="bit"?t:e,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),s.length-1)),o=s[i]+this.unit,r=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(r,{style:"unit",unit:o,unitDisplay:this.display})}};n([d({type:Number})],er.prototype,"value",2);n([d()],er.prototype,"unit",2);n([d()],er.prototype,"display",2);er.define("sl-format-bytes");var be=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return C`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};n([d()],be.prototype,"date",2);n([d()],be.prototype,"weekday",2);n([d()],be.prototype,"era",2);n([d()],be.prototype,"year",2);n([d()],be.prototype,"month",2);n([d()],be.prototype,"day",2);n([d()],be.prototype,"hour",2);n([d()],be.prototype,"minute",2);n([d()],be.prototype,"second",2);n([d({attribute:"time-zone-name"})],be.prototype,"timeZoneName",2);n([d({attribute:"time-zone"})],be.prototype,"timeZone",2);n([d({attribute:"hour-format"})],be.prototype,"hourFormat",2);be.define("sl-format-date");var Oe=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};n([d({type:Number})],Oe.prototype,"value",2);n([d()],Oe.prototype,"type",2);n([d({attribute:"no-grouping",type:Boolean})],Oe.prototype,"noGrouping",2);n([d()],Oe.prototype,"currency",2);n([d({attribute:"currency-display"})],Oe.prototype,"currencyDisplay",2);n([d({attribute:"minimum-integer-digits",type:Number})],Oe.prototype,"minimumIntegerDigits",2);n([d({attribute:"minimum-fraction-digits",type:Number})],Oe.prototype,"minimumFractionDigits",2);n([d({attribute:"maximum-fraction-digits",type:Number})],Oe.prototype,"maximumFractionDigits",2);n([d({attribute:"minimum-significant-digits",type:Number})],Oe.prototype,"minimumSignificantDigits",2);n([d({attribute:"maximum-significant-digits",type:Number})],Oe.prototype,"maximumSignificantDigits",2);Oe.define("sl-format-number");var gm=N`
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
`,sr=class extends H{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};sr.styles=[K,gm];n([d({type:Boolean,reflect:!0})],sr.prototype,"vertical",2);n([I("vertical")],sr.prototype,"handleVerticalChange",1);sr.define("sl-divider");var bm=N`
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
`;function*La(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*$u(La(t.shadowRoot.activeElement))))}function Mc(){return[...La()].pop()}var qn=new WeakMap;function Fc(t){let e=qn.get(t);return e||(e=window.getComputedStyle(t,null),qn.set(t,e)),e}function vm(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Fc(t);return e.visibility!=="hidden"&&e.display!=="none"}function ym(t){const e=Fc(t),{overflowY:s,overflowX:i}=e;return s==="scroll"||i==="scroll"?!0:s!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&s==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function _m(t){const e=t.tagName.toLowerCase(),s=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){const r=t.getRootNode(),a=`input[type='radio'][name="${t.getAttribute("name")}"]`,l=r.querySelector(`${a}:checked`);return l?l===t:r.querySelector(a)===t}return vm(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:ym(t):!1}function wm(t){var e,s;const i=Yr(t),o=(e=i[0])!=null?e:null,r=(s=i[i.length-1])!=null?s:null;return{start:o,end:r}}function xm(t,e){var s;return((s=t.getRootNode({composed:!0}))==null?void 0:s.host)!==e}function Yr(t){const e=new WeakMap,s=[];function i(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||e.has(o))return;e.set(o,!0),!s.includes(o)&&_m(o)&&s.push(o),o instanceof HTMLSlotElement&&xm(o,t)&&o.assignedElements({flatten:!0}).forEach(r=>{i(r)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&i(o.shadowRoot)}for(const r of o.children)i(r)}return i(t),s.sort((o,r)=>{const a=Number(o.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-a})}var yi=[],Vc=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var s;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=Mc();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=Yr(this.element);let r=o.findIndex(l=>l===i);this.previousFocus=this.currentFocus;const a=this.tabDirection==="forward"?1:-1;for(;;){r+a>=o.length?r=0:r+a<0?r=o.length-1:r+=a,this.previousFocus=this.currentFocus;const l=o[r];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;e.preventDefault(),this.currentFocus=l,(s=this.currentFocus)==null||s.focus({preventScroll:!1});const c=[...La()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){yi.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){yi=yi.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return yi[yi.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=Yr(this.element);if(!this.element.matches(":focus-within")){const e=t[0],s=t[t.length-1],i=this.tabDirection==="forward"?e:s;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},Ra=t=>{var e;const{activeElement:s}=document;s&&t.contains(s)&&((e=document.activeElement)==null||e.blur())};function Kn(t){return t.charAt(0).toUpperCase()+t.slice(1)}var ve=class extends H{constructor(){super(...arguments),this.hasSlotController=new se(this,"footer"),this.localize=new at(this),this.modal=new Vc(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Ii(this)))}disconnectedCallback(){super.disconnectedCallback(),Pi(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=kt(this,"drawer.denyClose",{dir:this.localize.dir()});At(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Ii(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Pt(this.drawer),Pt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=kt(this,`drawer.show${Kn(this.placement)}`,{dir:this.localize.dir()}),s=kt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([At(this.panel,e.keyframes,e.options),At(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{Ra(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Pi(this)),await Promise.all([Pt(this.drawer),Pt(this.overlay)]);const t=kt(this,`drawer.hide${Kn(this.placement)}`,{dir:this.localize.dir()}),e=kt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([At(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),At(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Ii(this)),this.open&&this.contained&&(this.modal.deactivate(),Pi(this))}async show(){if(!this.open)return this.open=!0,ee(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ee(this,"sl-after-hide")}render(){return C`
      <div
        part="base"
        class=${q({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
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
    `}};ve.styles=[K,bm];ve.dependencies={"sl-icon-button":Rt};n([L(".drawer")],ve.prototype,"drawer",2);n([L(".drawer__panel")],ve.prototype,"panel",2);n([L(".drawer__overlay")],ve.prototype,"overlay",2);n([d({type:Boolean,reflect:!0})],ve.prototype,"open",2);n([d({reflect:!0})],ve.prototype,"label",2);n([d({reflect:!0})],ve.prototype,"placement",2);n([d({type:Boolean,reflect:!0})],ve.prototype,"contained",2);n([d({attribute:"no-header",type:Boolean,reflect:!0})],ve.prototype,"noHeader",2);n([I("open",{waitUntilFirstUpdate:!0})],ve.prototype,"handleOpenChange",1);n([I("contained",{waitUntilFirstUpdate:!0})],ve.prototype,"handleNoModalChange",1);dt("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});dt("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});dt("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});dt("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});dt("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});dt("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});dt("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});dt("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});dt("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});dt("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});dt("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});ve.define("sl-drawer");var km=N`
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
`,jt=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}const s=(i,o)=>{if(!i)return null;const r=i.closest(o);if(r)return r;const a=i.getRootNode();return a instanceof ShadowRoot?s(a.host,o):null};setTimeout(()=>{var i;const o=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?Mc():document.activeElement;(!this.containingElement||s(o,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const s=e.getAllItems(),i=s[0],o=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(i=>wm(i).start);let s;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=e.button;break;default:s=e}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,ee(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ee(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Pt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=kt(this,"dropdown.show",{dir:this.localize.dir()});await At(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Pt(this);const{keyframes:t,options:e}=kt(this,"dropdown.hide",{dir:this.localize.dir()});await At(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return C`
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
        class=${q({dropdown:!0,"dropdown--open":this.open})}
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
    `}};jt.styles=[K,km];jt.dependencies={"sl-popup":ht};n([L(".dropdown")],jt.prototype,"popup",2);n([L(".dropdown__trigger")],jt.prototype,"trigger",2);n([L(".dropdown__panel")],jt.prototype,"panel",2);n([d({type:Boolean,reflect:!0})],jt.prototype,"open",2);n([d({reflect:!0})],jt.prototype,"placement",2);n([d({type:Boolean,reflect:!0})],jt.prototype,"disabled",2);n([d({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],jt.prototype,"stayOpenOnSelect",2);n([d({attribute:!1})],jt.prototype,"containingElement",2);n([d({type:Number})],jt.prototype,"distance",2);n([d({type:Number})],jt.prototype,"skidding",2);n([d({type:Boolean})],jt.prototype,"hoist",2);n([d({reflect:!0})],jt.prototype,"sync",2);n([I("open",{waitUntilFirstUpdate:!0})],jt.prototype,"handleOpenChange",1);dt("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});dt("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});jt.define("sl-dropdown");var Cm=N`
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
`,Ft=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),s=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let o=this.from,r="";s?[o,r]=this.from.trim().split("."):i&&([o,r]=this.from.trim().replace(/\]$/,"").split("["));const a="getElementById"in e?e.getElementById(o):null;a?i?t=a.getAttribute(r)||"":s?t=a[r]||"":t=a.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),s=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),o=t==="success"?this.successIcon:this.errorIcon,r=kt(this,"copy.in",{dir:"ltr"}),a=kt(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?s:i,await this.copyIcon.animate(a.keyframes,a.options).finished,this.copyIcon.hidden=!0,this.status=t,o.hidden=!1,await o.animate(r.keyframes,r.options).finished,setTimeout(async()=>{await o.animate(a.keyframes,a.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(r.keyframes,r.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return C`
      <sl-tooltip
        class=${q({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
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
    `}};Ft.styles=[K,Cm];Ft.dependencies={"sl-icon":ft,"sl-tooltip":Mt};n([L('slot[name="copy-icon"]')],Ft.prototype,"copyIcon",2);n([L('slot[name="success-icon"]')],Ft.prototype,"successIcon",2);n([L('slot[name="error-icon"]')],Ft.prototype,"errorIcon",2);n([L("sl-tooltip")],Ft.prototype,"tooltip",2);n([U()],Ft.prototype,"isCopying",2);n([U()],Ft.prototype,"status",2);n([d()],Ft.prototype,"value",2);n([d()],Ft.prototype,"from",2);n([d({type:Boolean,reflect:!0})],Ft.prototype,"disabled",2);n([d({attribute:"copy-label"})],Ft.prototype,"copyLabel",2);n([d({attribute:"success-label"})],Ft.prototype,"successLabel",2);n([d({attribute:"error-label"})],Ft.prototype,"errorLabel",2);n([d({attribute:"feedback-duration",type:Number})],Ft.prototype,"feedbackDuration",2);n([d({attribute:"tooltip-placement"})],Ft.prototype,"tooltipPlacement",2);n([d({type:Boolean})],Ft.prototype,"hoist",2);dt("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});dt("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});Ft.define("sl-copy-button");var $m=N`
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
`,Ie=class extends H{constructor(){super(...arguments),this.localize=new at(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Pt(this.body);const{keyframes:e,options:s}=kt(this,"details.show",{dir:this.localize.dir()});await At(this.body,Io(e,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Pt(this.body);const{keyframes:e,options:s}=kt(this,"details.hide",{dir:this.localize.dir()});await At(this.body,Io(e,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,ee(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,ee(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return C`
      <details
        part="base"
        class=${q({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
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
    `}};Ie.styles=[K,$m];Ie.dependencies={"sl-icon":ft};n([L(".details")],Ie.prototype,"details",2);n([L(".details__header")],Ie.prototype,"header",2);n([L(".details__body")],Ie.prototype,"body",2);n([L(".details__expand-icon-slot")],Ie.prototype,"expandIconSlot",2);n([d({type:Boolean,reflect:!0})],Ie.prototype,"open",2);n([d()],Ie.prototype,"summary",2);n([d({type:Boolean,reflect:!0})],Ie.prototype,"disabled",2);n([I("open",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleOpenChange",1);dt("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});dt("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});Ie.define("sl-details");var Sm=N`
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
`,Ge=class extends H{constructor(){super(...arguments),this.hasSlotController=new se(this,"footer"),this.localize=new at(this),this.modal=new Vc(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ii(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Pi(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=kt(this,"dialog.denyClose",{dir:this.localize.dir()});At(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ii(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Pt(this.dialog),Pt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=kt(this,"dialog.show",{dir:this.localize.dir()}),s=kt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([At(this.panel,e.keyframes,e.options),At(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{Ra(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Pt(this.dialog),Pt(this.overlay)]);const t=kt(this,"dialog.hide",{dir:this.localize.dir()}),e=kt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([At(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),At(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Pi(this);const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,ee(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ee(this,"sl-after-hide")}render(){return C`
      <div
        part="base"
        class=${q({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
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
    `}};Ge.styles=[K,Sm];Ge.dependencies={"sl-icon-button":Rt};n([L(".dialog")],Ge.prototype,"dialog",2);n([L(".dialog__panel")],Ge.prototype,"panel",2);n([L(".dialog__overlay")],Ge.prototype,"overlay",2);n([d({type:Boolean,reflect:!0})],Ge.prototype,"open",2);n([d({reflect:!0})],Ge.prototype,"label",2);n([d({attribute:"no-header",type:Boolean,reflect:!0})],Ge.prototype,"noHeader",2);n([I("open",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleOpenChange",1);dt("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});dt("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});dt("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});dt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});dt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Ge.define("sl-dialog");var Am=Dt;Dt.define("sl-checkbox");var zm=N`
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
`,ut=class extends H{constructor(){super(...arguments),this.formControlController=new ns(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new se(this,"[default]","prefix","suffix"),this.localize=new at(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Yo}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Ro`a`:Ro`button`;return Oi`
      <${e}
        part="base"
        class=${q({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
    `}};ut.styles=[K,Ic];ut.dependencies={"sl-icon":ft,"sl-spinner":Zi};n([L(".button")],ut.prototype,"button",2);n([U()],ut.prototype,"hasFocus",2);n([U()],ut.prototype,"invalid",2);n([d()],ut.prototype,"title",2);n([d({reflect:!0})],ut.prototype,"variant",2);n([d({reflect:!0})],ut.prototype,"size",2);n([d({type:Boolean,reflect:!0})],ut.prototype,"caret",2);n([d({type:Boolean,reflect:!0})],ut.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],ut.prototype,"loading",2);n([d({type:Boolean,reflect:!0})],ut.prototype,"outline",2);n([d({type:Boolean,reflect:!0})],ut.prototype,"pill",2);n([d({type:Boolean,reflect:!0})],ut.prototype,"circle",2);n([d()],ut.prototype,"type",2);n([d()],ut.prototype,"name",2);n([d()],ut.prototype,"value",2);n([d()],ut.prototype,"href",2);n([d()],ut.prototype,"target",2);n([d()],ut.prototype,"rel",2);n([d()],ut.prototype,"download",2);n([d()],ut.prototype,"form",2);n([d({attribute:"formaction"})],ut.prototype,"formAction",2);n([d({attribute:"formenctype"})],ut.prototype,"formEnctype",2);n([d({attribute:"formmethod"})],ut.prototype,"formMethod",2);n([d({attribute:"formnovalidate",type:Boolean})],ut.prototype,"formNoValidate",2);n([d({attribute:"formtarget"})],ut.prototype,"formTarget",2);n([I("disabled",{waitUntilFirstUpdate:!0})],ut.prototype,"handleDisabledChange",1);function Ht(t,e){Em(t)&&(t="100%");const s=Tm(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),s&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function po(t){return Math.min(1,Math.max(0,t))}function Em(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function Tm(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Bc(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function fo(t){return Number(t)<=1?`${Number(t)*100}%`:t}function Ts(t){return t.length===1?"0"+t:String(t)}function Om(t,e,s){return{r:Ht(t,255)*255,g:Ht(e,255)*255,b:Ht(s,255)*255}}function Yn(t,e,s){t=Ht(t,255),e=Ht(e,255),s=Ht(s,255);const i=Math.max(t,e,s),o=Math.min(t,e,s);let r=0,a=0;const l=(i+o)/2;if(i===o)a=0,r=0;else{const c=i-o;switch(a=l>.5?c/(2-i-o):c/(i+o),i){case t:r=(e-s)/c+(e<s?6:0);break;case e:r=(s-t)/c+2;break;case s:r=(t-e)/c+4;break}r/=6}return{h:r,s:a,l}}function Cr(t,e,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+(e-t)*(6*s):s<1/2?e:s<2/3?t+(e-t)*(2/3-s)*6:t}function Im(t,e,s){let i,o,r;if(t=Ht(t,360),e=Ht(e,100),s=Ht(s,100),e===0)o=s,r=s,i=s;else{const a=s<.5?s*(1+e):s+e-s*e,l=2*s-a;i=Cr(l,a,t+1/3),o=Cr(l,a,t),r=Cr(l,a,t-1/3)}return{r:i*255,g:o*255,b:r*255}}function Xn(t,e,s){t=Ht(t,255),e=Ht(e,255),s=Ht(s,255);const i=Math.max(t,e,s),o=Math.min(t,e,s);let r=0;const a=i,l=i-o,c=i===0?0:l/i;if(i===o)r=0;else{switch(i){case t:r=(e-s)/l+(e<s?6:0);break;case e:r=(s-t)/l+2;break;case s:r=(t-e)/l+4;break}r/=6}return{h:r,s:c,v:a}}function Pm(t,e,s){t=Ht(t,360)*6,e=Ht(e,100),s=Ht(s,100);const i=Math.floor(t),o=t-i,r=s*(1-e),a=s*(1-o*e),l=s*(1-(1-o)*e),c=i%6,h=[s,a,r,r,l,s][c],p=[l,s,s,a,r,r][c],u=[r,r,l,s,s,a][c];return{r:h*255,g:p*255,b:u*255}}function Gn(t,e,s,i){const o=[Ts(Math.round(t).toString(16)),Ts(Math.round(e).toString(16)),Ts(Math.round(s).toString(16))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Dm(t,e,s,i,o){const r=[Ts(Math.round(t).toString(16)),Ts(Math.round(e).toString(16)),Ts(Math.round(s).toString(16)),Ts(Rm(i))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}function Lm(t,e,s,i){const o=t/100,r=e/100,a=s/100,l=i/100,c=255*(1-o)*(1-l),h=255*(1-r)*(1-l),p=255*(1-a)*(1-l);return{r:c,g:h,b:p}}function Qn(t,e,s){let i=1-t/255,o=1-e/255,r=1-s/255,a=Math.min(i,o,r);return a===1?(i=0,o=0,r=0):(i=(i-a)/(1-a)*100,o=(o-a)/(1-a)*100,r=(r-a)/(1-a)*100),a*=100,{c:Math.round(i),m:Math.round(o),y:Math.round(r),k:Math.round(a)}}function Rm(t){return Math.round(parseFloat(t)*255).toString(16)}function Zn(t){return ce(t)/255}function ce(t){return parseInt(t,16)}function Mm(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const Xr={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Fm(t){let e={r:0,g:0,b:0},s=1,i=null,o=null,r=null,a=!1,l=!1;return typeof t=="string"&&(t=Hm(t)),typeof t=="object"&&(le(t.r)&&le(t.g)&&le(t.b)?(e=Om(t.r,t.g,t.b),a=!0,l=String(t.r).substr(-1)==="%"?"prgb":"rgb"):le(t.h)&&le(t.s)&&le(t.v)?(i=fo(t.s),o=fo(t.v),e=Pm(t.h,i,o),a=!0,l="hsv"):le(t.h)&&le(t.s)&&le(t.l)?(i=fo(t.s),r=fo(t.l),e=Im(t.h,i,r),a=!0,l="hsl"):le(t.c)&&le(t.m)&&le(t.y)&&le(t.k)&&(e=Lm(t.c,t.m,t.y,t.k),a=!0,l="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(s=t.a)),s=Bc(s),{ok:a,format:t.format||l,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:s}}const Vm="[-\\+]?\\d+%?",Bm="[-\\+]?\\d*\\.\\d+%?",us="(?:"+Bm+")|(?:"+Vm+")",$r="[\\s|\\(]+("+us+")[,|\\s]+("+us+")[,|\\s]+("+us+")\\s*\\)?",mo="[\\s|\\(]+("+us+")[,|\\s]+("+us+")[,|\\s]+("+us+")[,|\\s]+("+us+")\\s*\\)?",_e={CSS_UNIT:new RegExp(us),rgb:new RegExp("rgb"+$r),rgba:new RegExp("rgba"+mo),hsl:new RegExp("hsl"+$r),hsla:new RegExp("hsla"+mo),hsv:new RegExp("hsv"+$r),hsva:new RegExp("hsva"+mo),cmyk:new RegExp("cmyk"+mo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Hm(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(Xr[t])t=Xr[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let s=_e.rgb.exec(t);return s?{r:s[1],g:s[2],b:s[3]}:(s=_e.rgba.exec(t),s?{r:s[1],g:s[2],b:s[3],a:s[4]}:(s=_e.hsl.exec(t),s?{h:s[1],s:s[2],l:s[3]}:(s=_e.hsla.exec(t),s?{h:s[1],s:s[2],l:s[3],a:s[4]}:(s=_e.hsv.exec(t),s?{h:s[1],s:s[2],v:s[3]}:(s=_e.hsva.exec(t),s?{h:s[1],s:s[2],v:s[3],a:s[4]}:(s=_e.cmyk.exec(t),s?{c:s[1],m:s[2],y:s[3],k:s[4]}:(s=_e.hex8.exec(t),s?{r:ce(s[1]),g:ce(s[2]),b:ce(s[3]),a:Zn(s[4]),format:e?"name":"hex8"}:(s=_e.hex6.exec(t),s?{r:ce(s[1]),g:ce(s[2]),b:ce(s[3]),format:e?"name":"hex"}:(s=_e.hex4.exec(t),s?{r:ce(s[1]+s[1]),g:ce(s[2]+s[2]),b:ce(s[3]+s[3]),a:Zn(s[4]+s[4]),format:e?"name":"hex8"}:(s=_e.hex3.exec(t),s?{r:ce(s[1]+s[1]),g:ce(s[2]+s[2]),b:ce(s[3]+s[3]),format:e?"name":"hex"}:!1))))))))))}function le(t){return typeof t=="number"?!Number.isNaN(t):_e.CSS_UNIT.test(t)}class St{constructor(e="",s={}){if(e instanceof St)return e;typeof e=="number"&&(e=Mm(e)),this.originalInput=e;const i=Fm(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=s.format??i.format,this.gradientType=s.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let s,i,o;const r=e.r/255,a=e.g/255,l=e.b/255;return r<=.03928?s=r/12.92:s=Math.pow((r+.055)/1.055,2.4),a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),l<=.03928?o=l/12.92:o=Math.pow((l+.055)/1.055,2.4),.2126*s+.7152*i+.0722*o}getAlpha(){return this.a}setAlpha(e){return this.a=Bc(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=Xn(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=Xn(this.r,this.g,this.b),s=Math.round(e.h*360),i=Math.round(e.s*100),o=Math.round(e.v*100);return this.a===1?`hsv(${s}, ${i}%, ${o}%)`:`hsva(${s}, ${i}%, ${o}%, ${this.roundA})`}toHsl(){const e=Yn(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=Yn(this.r,this.g,this.b),s=Math.round(e.h*360),i=Math.round(e.s*100),o=Math.round(e.l*100);return this.a===1?`hsl(${s}, ${i}%, ${o}%)`:`hsla(${s}, ${i}%, ${o}%, ${this.roundA})`}toHex(e=!1){return Gn(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return Dm(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),s=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${e}, ${s}, ${i})`:`rgba(${e}, ${s}, ${i}, ${this.roundA})`}toPercentageRgb(){const e=s=>`${Math.round(Ht(s,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=s=>Math.round(Ht(s,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Qn(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:s,y:i,k:o}=Qn(this.r,this.g,this.b);return`cmyk(${e}, ${s}, ${i}, ${o})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+Gn(this.r,this.g,this.b,!1);for(const[s,i]of Object.entries(Xr))if(e===i)return s;return!1}toString(e){const s=!!e;e=e??this.format;let i=!1;const o=this.a<1&&this.a>=0;return!s&&o&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),e==="cmyk"&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new St(this.toString())}lighten(e=10){const s=this.toHsl();return s.l+=e/100,s.l=po(s.l),new St(s)}brighten(e=10){const s=this.toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(255*-(e/100)))),s.g=Math.max(0,Math.min(255,s.g-Math.round(255*-(e/100)))),s.b=Math.max(0,Math.min(255,s.b-Math.round(255*-(e/100)))),new St(s)}darken(e=10){const s=this.toHsl();return s.l-=e/100,s.l=po(s.l),new St(s)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const s=this.toHsl();return s.s-=e/100,s.s=po(s.s),new St(s)}saturate(e=10){const s=this.toHsl();return s.s+=e/100,s.s=po(s.s),new St(s)}greyscale(){return this.desaturate(100)}spin(e){const s=this.toHsl(),i=(s.h+e)%360;return s.h=i<0?360+i:i,new St(s)}mix(e,s=50){const i=this.toRgb(),o=new St(e).toRgb(),r=s/100,a={r:(o.r-i.r)*r+i.r,g:(o.g-i.g)*r+i.g,b:(o.b-i.b)*r+i.b,a:(o.a-i.a)*r+i.a};return new St(a)}analogous(e=6,s=30){const i=this.toHsl(),o=360/s,r=[this];for(i.h=(i.h-(o*e>>1)+720)%360;--e;)i.h=(i.h+o)%360,r.push(new St(i));return r}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new St(e)}monochromatic(e=6){const s=this.toHsv(),{h:i}=s,{s:o}=s;let{v:r}=s;const a=[],l=1/e;for(;e--;)a.push(new St({h:i,s:o,v:r})),r=(r+l)%1;return a}splitcomplement(){const e=this.toHsl(),{h:s}=e;return[this,new St({h:(s+72)%360,s:e.s,l:e.l}),new St({h:(s+216)%360,s:e.s,l:e.l})]}onBackground(e){const s=this.toRgb(),i=new St(e).toRgb(),o=s.a+i.a*(1-s.a);return new St({r:(s.r*s.a+i.r*i.a*(1-s.a))/o,g:(s.g*s.a+i.g*i.a*(1-s.a))/o,b:(s.b*s.a+i.b*i.a*(1-s.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const s=this.toHsl(),{h:i}=s,o=[this],r=360/e;for(let a=1;a<e;a++)o.push(new St({h:(i+a*r)%360,s:s.s,l:s.l}));return o}equals(e){const s=new St(e);return this.format==="cmyk"||s.format==="cmyk"?this.toCmykString()===s.toCmykString():this.toRgbString()===s.toRgbString()}}var Jn="EyeDropper"in window,ot=class extends H{constructor(){super(),this.formControlController=new ns(this),this.isSafeValue=!1,this.localize=new at(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),s=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let o=this.value,r=this.value;s.focus(),t.preventDefault(),Di(e,{onMove:a=>{this.alpha=It(a/i*100,0,100),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),s=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let o=this.value,r=this.value;s.focus(),t.preventDefault(),Di(e,{onMove:a=>{this.hue=It(a/i*360,0,360),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),s=e.querySelector(".color-picker__grid-handle"),{width:i,height:o}=e.getBoundingClientRect();let r=this.value,a=this.value;s.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,Di(e,{onMove:(l,c)=>{this.saturation=It(l/i*100,0,100),this.brightness=It(100-c/o*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=It(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=It(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=It(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=It(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=It(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=It(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=It(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=It(this.brightness-e,0,100),this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,s=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new St(t);if(!e.isValid)return null;const s=e.toHsl(),i={h:s.h,s:s.s*100,l:s.l*100,a:s.a},o=e.toRgb(),r=e.toHexString(),a=e.toHex8String(),l=e.toHsv(),c={h:l.h,s:l.s*100,v:l.v*100,a:l.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(r),hexa:this.setLetterCase(a)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Jn)return;new EyeDropper().open().then(e=>{const s=this.value;this.setColor(e.sRGBHex),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,s,i=100){const o=new St(`hsva(${t}, ${e}%, ${s}%, ${i/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const s=this.parseColor(e);s!==null?(this.inputValue=this.value,this.hue=s.hsva.h,this.saturation=s.hsva.s,this.brightness=s.hsva.v,this.alpha=s.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),i=C`
      <div
        part="base"
        class=${q({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
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
            class=${q({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
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
            ${Jn?C`
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
          class=${q({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${ae({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};ot.styles=[K,zm];ot.dependencies={"sl-button-group":Fs,"sl-button":ut,"sl-dropdown":jt,"sl-icon":ft,"sl-input":J,"sl-visually-hidden":Ia};n([L('[part~="base"]')],ot.prototype,"base",2);n([L('[part~="input"]')],ot.prototype,"input",2);n([L(".color-dropdown")],ot.prototype,"dropdown",2);n([L('[part~="preview"]')],ot.prototype,"previewButton",2);n([L('[part~="trigger"]')],ot.prototype,"trigger",2);n([U()],ot.prototype,"hasFocus",2);n([U()],ot.prototype,"isDraggingGridHandle",2);n([U()],ot.prototype,"isEmpty",2);n([U()],ot.prototype,"inputValue",2);n([U()],ot.prototype,"hue",2);n([U()],ot.prototype,"saturation",2);n([U()],ot.prototype,"brightness",2);n([U()],ot.prototype,"alpha",2);n([d()],ot.prototype,"value",2);n([ei()],ot.prototype,"defaultValue",2);n([d()],ot.prototype,"label",2);n([d()],ot.prototype,"format",2);n([d({type:Boolean,reflect:!0})],ot.prototype,"inline",2);n([d({reflect:!0})],ot.prototype,"size",2);n([d({attribute:"no-format-toggle",type:Boolean})],ot.prototype,"noFormatToggle",2);n([d()],ot.prototype,"name",2);n([d({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);n([d({type:Boolean})],ot.prototype,"hoist",2);n([d({type:Boolean})],ot.prototype,"opacity",2);n([d({type:Boolean})],ot.prototype,"uppercase",2);n([d()],ot.prototype,"swatches",2);n([d({reflect:!0})],ot.prototype,"form",2);n([d({type:Boolean,reflect:!0})],ot.prototype,"required",2);n([Xi({passive:!1})],ot.prototype,"handleTouchMove",1);n([I("format",{waitUntilFirstUpdate:!0})],ot.prototype,"handleFormatChange",1);n([I("opacity",{waitUntilFirstUpdate:!0})],ot.prototype,"handleOpacityChange",1);n([I("value")],ot.prototype,"handleValueChange",1);ot.define("sl-color-picker");var Nm=N`
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
`,Hc=class extends H{constructor(){super(...arguments),this.hasSlotController=new se(this,"footer","header","image")}render(){return C`
      <div
        part="base"
        class=${q({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Hc.styles=[K,Nm];Hc.define("sl-card");var Um=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},jm=N`
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
 */function*Wm(t,e){if(t!==void 0){let s=0;for(const i of t)yield e(i,s++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*qm(t,e,s=1){const i=e===void 0?0:t;e??=t;for(let o=i;s>0?o<e:e<o;o+=s)yield o}var Et=class extends H{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Um(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new at(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,s=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const i=t.scrollLeft,o=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:s,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==i||s!==o)&&(t.scrollTo({left:i,top:o,behavior:Br()?"auto":"smooth"}),await ee(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(s=>[...s.addedNodes,...s.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:s,loop:i}=this,o=i?t/s:(t-e)/s+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),s=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+s*s)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,s=this.localize.dir()==="rtl",i=e.closest('[part~="pagination-item"]')!==null,o=t.key==="ArrowDown"||!s&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft",r=t.key==="ArrowUp"||!s&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight";t.preventDefault(),r&&this.previous(),o&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var a;const l=(a=this.shadowRoot)==null?void 0:a.querySelector('[part~="pagination-item--active"]');l&&l.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const l of e){const c=l.target;c.toggleAttribute("inert",!l.isIntersecting),c.classList.toggle("--in-view",l.isIntersecting),c.setAttribute("aria-hidden",l.isIntersecting?"false":"true")}const s=e.find(l=>l.isIntersecting);if(!s)return;const i=this.getSlides({excludeClones:!1}),o=this.getSlides().length,r=i.indexOf(s.target),a=this.loop?r-this.slidesPerPage:r;if(this.activeSlide=(Math.ceil(a/this.slidesPerMove)*this.slidesPerMove+o)%o,!this.scrolling&&this.loop&&s.target.hasAttribute("data-clone")){const l=Number(s.target.getAttribute("data-clone"));this.goToSlide(l,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("role","group"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),this.pagination&&(t.setAttribute("id",`slide-${e+1}`),t.setAttribute("role","tabpanel"),t.removeAttribute("aria-label"),t.setAttribute("aria-labelledby",`tab-${e+1}`)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,s=t.slice(-e),i=t.slice(0,e);s.reverse().forEach((o,r)=>{const a=o.cloneNode(!0);a.setAttribute("data-clone",String(t.length-r-1)),this.prepend(a)}),i.forEach((o,r)=>{const a=o.cloneNode(!0);a.setAttribute("data-clone",String(r)),this.append(a)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,s)=>{e.classList.toggle("--is-active",s===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((s,i)=>{(i+e)%e===0?s.style.removeProperty("scroll-snap-align"):s.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:s,loop:i}=this,o=this.getSlides(),r=this.getSlides({excludeClones:!1});if(!o.length)return;const a=i?(t+o.length)%o.length:It(t,0,o.length-s);this.activeSlide=a;const l=this.localize.dir()==="rtl",c=It(t+(i?s:0)+(l?s-1:0),0,r.length-1),h=r[c];this.scrollToSlide(h,Br()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const s=this.scrollContainer,i=s.getBoundingClientRect(),o=t.getBoundingClientRect(),r=o.left-i.left,a=o.top-i.top;r||a?(this.pendingSlideChange=!0,s.scrollTo({left:r+s.scrollLeft,top:a+s.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this,s=this.getPageCount(),i=this.getCurrentPage(),o=this.canScrollPrev(),r=this.canScrollNext(),a=this.localize.dir()==="ltr";return C`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${q({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
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
                  class="${q({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
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
                  class=${q({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!r})}
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
                ${Wm(qm(s),l=>{const c=l===i;return C`
                    <button
                      part="pagination-item ${c?"pagination-item--active":""}"
                      class="${q({"carousel__pagination-item":!0,"carousel__pagination-item--active":c})}"
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
    `}};Et.styles=[K,jm];Et.dependencies={"sl-icon":ft};n([d({type:Boolean,reflect:!0})],Et.prototype,"loop",2);n([d({type:Boolean,reflect:!0})],Et.prototype,"navigation",2);n([d({type:Boolean,reflect:!0})],Et.prototype,"pagination",2);n([d({type:Boolean,reflect:!0})],Et.prototype,"autoplay",2);n([d({type:Number,attribute:"autoplay-interval"})],Et.prototype,"autoplayInterval",2);n([d({type:Number,attribute:"slides-per-page"})],Et.prototype,"slidesPerPage",2);n([d({type:Number,attribute:"slides-per-move"})],Et.prototype,"slidesPerMove",2);n([d()],Et.prototype,"orientation",2);n([d({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],Et.prototype,"mouseDragging",2);n([L(".carousel__slides")],Et.prototype,"scrollContainer",2);n([L(".carousel__pagination")],Et.prototype,"paginationContainer",2);n([U()],Et.prototype,"activeSlide",2);n([U()],Et.prototype,"scrolling",2);n([U()],Et.prototype,"dragging",2);n([Xi({passive:!0})],Et.prototype,"handleScroll",1);n([I("loop",{waitUntilFirstUpdate:!0}),I("slidesPerPage",{waitUntilFirstUpdate:!0})],Et.prototype,"initializeSlides",1);n([I("activeSlide")],Et.prototype,"handleSlideChange",1);n([I("slidesPerMove")],Et.prototype,"updateSlidesSnap",1);n([I("autoplay")],Et.prototype,"handleAutoplayChange",1);Et.define("sl-carousel");var Km=(t,e)=>{let s=0;return function(...i){window.clearTimeout(s),s=window.setTimeout(()=>{t.call(this,...i)},e)}},tl=(t,e,s)=>{const i=t[e];t[e]=function(...o){i.call(this,...o),s.call(this,i,...o)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const e=new Set,s=new WeakMap,i=r=>{for(const a of r.changedTouches)e.add(a.identifier)},o=r=>{for(const a of r.changedTouches)e.delete(a.identifier)};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),tl(EventTarget.prototype,"addEventListener",function(r,a){if(a!=="scrollend")return;const l=Km(()=>{e.size?l():this.dispatchEvent(new Event("scrollend"))},100);r.call(this,"scroll",l,{passive:!0}),s.set(this,l)}),tl(EventTarget.prototype,"removeEventListener",function(r,a){if(a!=="scrollend")return;const l=s.get(this);l&&r.call(this,"scroll",l,{passive:!0})})}})();var Ym=N`
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
`,Nc=class extends H{connectedCallback(){super.connectedCallback()}render(){return C` <slot></slot> `}};Nc.styles=[K,Ym];Nc.define("sl-carousel-item");var Xm=N`
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
        class=${q({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
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
    `}};ws.styles=[K,Xm];n([L("slot:not([name])")],ws.prototype,"defaultSlot",2);n([U()],ws.prototype,"renderType",2);n([d()],ws.prototype,"href",2);n([d()],ws.prototype,"target",2);n([d()],ws.prototype,"rel",2);n([I("href",{waitUntilFirstUpdate:!0})],ws.prototype,"hrefChanged",1);ws.define("sl-breadcrumb-item");Fs.define("sl-button-group");var Gm=N`
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
        class=${q({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};Qe.styles=[K,Gm];Qe.dependencies={"sl-icon":ft};n([U()],Qe.prototype,"hasError",2);n([d()],Qe.prototype,"image",2);n([d()],Qe.prototype,"label",2);n([d()],Qe.prototype,"initials",2);n([d()],Qe.prototype,"loading",2);n([d({reflect:!0})],Qe.prototype,"shape",2);n([I("image")],Qe.prototype,"handleImageChange",1);Qe.define("sl-avatar");var Qm=N`
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
    `}};ni.styles=[K,Qm];ni.dependencies={"sl-icon":ft};n([L("slot")],ni.prototype,"defaultSlot",2);n([L('slot[name="separator"]')],ni.prototype,"separatorSlot",2);n([d()],ni.prototype,"label",2);ni.define("sl-breadcrumb");ut.define("sl-button");var Zm=N`
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
    `}};Pe.styles=[K,Zm];Pe.dependencies={"sl-icon":ft};n([L(".animated-image__animated")],Pe.prototype,"animatedImage",2);n([U()],Pe.prototype,"frozenFrame",2);n([U()],Pe.prototype,"isLoaded",2);n([d()],Pe.prototype,"src",2);n([d()],Pe.prototype,"alt",2);n([d({type:Boolean,reflect:!0})],Pe.prototype,"play",2);n([I("play",{waitUntilFirstUpdate:!0})],Pe.prototype,"handlePlayChange",1);n([I("src")],Pe.prototype,"handleSrcChange",1);Pe.define("sl-animated-image");var Jm=N`
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
        class=${q({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};io.styles=[K,Jm];n([d({reflect:!0})],io.prototype,"variant",2);n([d({type:Boolean,reflect:!0})],io.prototype,"pill",2);n([d({type:Boolean,reflect:!0})],io.prototype,"pulse",2);io.define("sl-badge");var tg=N`
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
`,ye=class As extends H{constructor(){super(...arguments),this.hasSlotController=new se(this,"icon","suffix"),this.localize=new at(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,s="100%",i="0";this.countdownAnimation=e.animate([{width:s},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Pt(this.base),this.base.hidden=!1;const{keyframes:e,options:s}=kt(this,"alert.show",{dir:this.localize.dir()});await At(this.base,e,s),this.emit("sl-after-show")}else{Ra(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Pt(this.base);const{keyframes:e,options:s}=kt(this,"alert.hide",{dir:this.localize.dir()});await At(this.base,e,s),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,ee(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ee(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),As.toastStack.parentElement===null&&document.body.append(As.toastStack),As.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{As.toastStack.removeChild(this),e(),As.toastStack.querySelector("sl-alert")===null&&As.toastStack.remove()},{once:!0})})}render(){return C`
      <div
        part="base"
        class=${q({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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
                class=${q({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};ye.styles=[K,tg];ye.dependencies={"sl-icon-button":Rt};n([L('[part~="base"]')],ye.prototype,"base",2);n([L(".alert__countdown-elapsed")],ye.prototype,"countdownElement",2);n([d({type:Boolean,reflect:!0})],ye.prototype,"open",2);n([d({type:Boolean,reflect:!0})],ye.prototype,"closable",2);n([d({reflect:!0})],ye.prototype,"variant",2);n([d({type:Number})],ye.prototype,"duration",2);n([d({type:String,reflect:!0})],ye.prototype,"countdown",2);n([U()],ye.prototype,"remainingTime",2);n([I("open",{waitUntilFirstUpdate:!0})],ye.prototype,"handleOpenChange",1);n([I("duration")],ye.prototype,"handleDurationChange",1);var eg=ye;dt("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});dt("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});eg.define("sl-alert");const sg=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],ig=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],og=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],rg=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],ag=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],ng=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],lg=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],cg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],dg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],hg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],ug=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],pg=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],fg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],mg=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],gg=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],bg=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],vg=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],yg=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],_g=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],wg=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],xg=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],kg=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Cg=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],$g=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Sg=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Ag=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],zg=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Eg=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Tg=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Og=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Ig=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Pg=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Dg=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Lg=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Rg=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Mg=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Fg=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Vg=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Bg=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Hg=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ng=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ug=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],jg=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Wg=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],qg=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Kg=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Yg=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],Xg=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Gg=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],Qg=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Zg=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Jg=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],tb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],eb=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],sb=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],ib=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],ob=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],rb=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],ab=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],nb=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],lb=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],cb=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],db=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],hb=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],ub=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],pb=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],fb=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],mb=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],gb=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],bb=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],vb=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],yb=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],_b=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],wb=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],xb=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],kb=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Cb=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],$b=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Sb=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ab=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],zb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Eb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Tb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Ob=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Ib=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],Pb=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Db=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Lb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Rb=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Mb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Fb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Vb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Bb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Hb=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],Nb=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Ub=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],jb=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Wb=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Uc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},qb=Object.freeze(Object.defineProperty({__proto__:null,backInDown:mg,backInLeft:gg,backInRight:bg,backInUp:vg,backOutDown:yg,backOutLeft:_g,backOutRight:wg,backOutUp:xg,bounce:sg,bounceIn:kg,bounceInDown:Cg,bounceInLeft:$g,bounceInRight:Sg,bounceInUp:Ag,bounceOut:zg,bounceOutDown:Eg,bounceOutLeft:Tg,bounceOutRight:Og,bounceOutUp:Ig,easings:Uc,fadeIn:Pg,fadeInBottomLeft:Dg,fadeInBottomRight:Lg,fadeInDown:Rg,fadeInDownBig:Mg,fadeInLeft:Fg,fadeInLeftBig:Vg,fadeInRight:Bg,fadeInRightBig:Hg,fadeInTopLeft:Ng,fadeInTopRight:Ug,fadeInUp:jg,fadeInUpBig:Wg,fadeOut:qg,fadeOutBottomLeft:Kg,fadeOutBottomRight:Yg,fadeOutDown:Xg,fadeOutDownBig:Gg,fadeOutLeft:Qg,fadeOutLeftBig:Zg,fadeOutRight:Jg,fadeOutRightBig:tb,fadeOutTopLeft:eb,fadeOutTopRight:sb,fadeOutUp:ib,fadeOutUpBig:ob,flash:ig,flip:rb,flipInX:ab,flipInY:nb,flipOutX:lb,flipOutY:cb,headShake:og,heartBeat:rg,hinge:Ib,jackInTheBox:Pb,jello:ag,lightSpeedInLeft:db,lightSpeedInRight:hb,lightSpeedOutLeft:ub,lightSpeedOutRight:pb,pulse:ng,rollIn:Db,rollOut:Lb,rotateIn:fb,rotateInDownLeft:mb,rotateInDownRight:gb,rotateInUpLeft:bb,rotateInUpRight:vb,rotateOut:yb,rotateOutDownLeft:_b,rotateOutDownRight:wb,rotateOutUpLeft:xb,rotateOutUpRight:kb,rubberBand:lg,shake:cg,shakeX:dg,shakeY:hg,slideInDown:Cb,slideInLeft:$b,slideInRight:Sb,slideInUp:Ab,slideOutDown:zb,slideOutLeft:Eb,slideOutRight:Tb,slideOutUp:Ob,swing:ug,tada:pg,wobble:fg,zoomIn:Rb,zoomInDown:Mb,zoomInLeft:Fb,zoomInRight:Vb,zoomInUp:Bb,zoomOut:Hb,zoomOutDown:Nb,zoomOutLeft:Ub,zoomOutRight:jb,zoomOutUp:Wb},Symbol.toStringTag,{value:"Module"}));var Kb=N`
  :host {
    display: contents;
  }
`,Vt=class extends H{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;const s=(t=Uc[this.easing])!=null?t:this.easing,i=(e=this.keyframes)!=null?e:qb[this.name],r=(await this.defaultSlot).assignedElements()[0];return!r||!i?!1:(this.destroyAnimation(),this.animation=r.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:s,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return C` <slot @slotchange=${this.handleSlotChange}></slot> `}};Vt.styles=[K,Kb];n([dp("slot")],Vt.prototype,"defaultSlot",2);n([d()],Vt.prototype,"name",2);n([d({type:Boolean,reflect:!0})],Vt.prototype,"play",2);n([d({type:Number})],Vt.prototype,"delay",2);n([d()],Vt.prototype,"direction",2);n([d({type:Number})],Vt.prototype,"duration",2);n([d()],Vt.prototype,"easing",2);n([d({attribute:"end-delay",type:Number})],Vt.prototype,"endDelay",2);n([d()],Vt.prototype,"fill",2);n([d({type:Number})],Vt.prototype,"iterations",2);n([d({attribute:"iteration-start",type:Number})],Vt.prototype,"iterationStart",2);n([d({attribute:!1})],Vt.prototype,"keyframes",2);n([d({attribute:"playback-rate",type:Number})],Vt.prototype,"playbackRate",2);n([I(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Vt.prototype,"handleAnimationChange",1);n([I("play")],Vt.prototype,"handlePlayChange",1);n([I("playbackRate")],Vt.prototype,"handlePlaybackRateChange",1);Vt.define("sl-animation");function d0(t){return Object.keys(t)}function h0(t){return Object.entries(t)}function u0(t){return t/25.4}function p0(t){return t!=null&&t instanceof sm}function f0(t){return t!=null&&t instanceof Vf}function m0(t){return t!=null&&t instanceof Am}const g0=(t,e)=>{const s=t.__vccOpts||t;for(const[i,o]of e)s[i]=o;return s};export{t0 as A,f0 as B,p0 as C,m0 as D,s0 as E,ts as F,g0 as _,Ll as a,Zb as b,Uh as c,Vd as d,zh as e,te as f,ec as g,e0 as h,ca as i,Tn as j,u0 as k,h0 as l,d0 as m,Al as n,jd as o,Ph as p,od as q,Xb as r,Gb as s,ct as t,Cl as u,jh as v,ur as w,Qb as x,Jb as y,Th as z};
