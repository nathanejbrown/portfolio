import{a as pe,b as mt,c as h3}from"./chunk-YGFNLDZQ.js";function ke(n){return typeof n=="function"}function Ys(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var vc=Ys(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function es(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Vt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(ke(i))try{i()}catch(s){e=s instanceof vc?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{C5(s)}catch(o){e=e??[],o instanceof vc?e=[...e,...o.errors]:e.push(o)}}if(e)throw new vc(e)}}add(e){var t;if(e&&e!==this)if(this.closed)C5(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&es(t,e)}remove(e){let{_finalizers:t}=this;t&&es(t,e),e instanceof n&&e._removeParent(this)}};Vt.EMPTY=(()=>{let n=new Vt;return n.closed=!0,n})();var p3=Vt.EMPTY;function yc(n){return n instanceof Vt||n&&"closed"in n&&ke(n.remove)&&ke(n.add)&&ke(n.unsubscribe)}function C5(n){ke(n)?n():n.unsubscribe()}var ti={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ks={setTimeout(n,e,...t){let{delegate:i}=Ks;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Ks;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function _c(n){Ks.setTimeout(()=>{let{onUnhandledError:e}=ti;if(e)e(n);else throw n})}function Na(){}var S5=(()=>m3("C",void 0,void 0))();function w5(n){return m3("E",void 0,n)}function E5(n){return m3("N",n,void 0)}function m3(n,e,t){return{kind:n,value:e,error:t}}var ts=null;function Js(n){if(ti.useDeprecatedSynchronousErrorHandling){let e=!ts;if(e&&(ts={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=ts;if(ts=null,t)throw i}}else n()}function A5(n){ti.useDeprecatedSynchronousErrorHandling&&ts&&(ts.errorThrown=!0,ts.error=n)}var ns=class extends Vt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,yc(e)&&e.add(this)):this.destination=c_}static create(e,t,i){return new Oi(e,t,i)}next(e){this.isStopped?v3(E5(e),this):this._next(e)}error(e){this.isStopped?v3(w5(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?v3(S5,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},o_=Function.prototype.bind;function g3(n,e){return o_.call(n,e)}var y3=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){bc(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){bc(i)}else bc(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){bc(t)}}},Oi=class extends ns{constructor(e,t,i){super();let r;if(ke(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&ti.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&g3(e.next,s),error:e.error&&g3(e.error,s),complete:e.complete&&g3(e.complete,s)}):r=e}this.destination=new y3(r)}};function bc(n){ti.useDeprecatedSynchronousErrorHandling?A5(n):_c(n)}function a_(n){throw n}function v3(n,e){let{onStoppedNotification:t}=ti;t&&Ks.setTimeout(()=>t(n,e))}var c_={closed:!0,next:Na,error:a_,complete:Na};var Qs=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")();function mn(n){return n}function _3(...n){return b3(n)}function b3(n){return n.length===0?mn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var Qe=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=u_(t)?t:new Oi(t,i,r);return Js(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=T5(i),new i((r,s)=>{let o=new Oi({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Qs](){return this}pipe(...t){return b3(t)(this)}toPromise(t){return t=T5(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function T5(n){var e;return(e=n??ti.Promise)!==null&&e!==void 0?e:Promise}function l_(n){return n&&ke(n.next)&&ke(n.error)&&ke(n.complete)}function u_(n){return n&&n instanceof ns||l_(n)&&yc(n)}function x3(n){return ke(n?.lift)}function je(n){return e=>{if(x3(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function We(n,e,t,i,r){return new M3(n,e,t,i,r)}var M3=class extends ns{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function eo(){return je((n,e)=>{let t=null;n._refCount++;let i=We(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var to=class extends Qe{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,x3(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Vt;let t=this.getSubject();e.add(this.source.subscribe(We(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Vt.EMPTY)}return e}refCount(){return eo()(this)}};var D5=Ys(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var nn=(()=>{class n extends Qe{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new xc(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new D5}next(t){Js(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Js(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Js(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?p3:(this.currentObservers=null,s.push(t),new Vt(()=>{this.currentObservers=null,es(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new Qe;return t.source=this,t}}return n.create=(e,t)=>new xc(e,t),n})(),xc=class extends nn{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:p3}};var rn=class extends nn{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var C3={now(){return(C3.delegate||Date).now()},delegate:void 0};var Mc=class extends Vt{constructor(e,t){super()}schedule(e,t=0){return this}};var Pa={setInterval(n,e,...t){let{delegate:i}=Pa;return i?.setInterval?i.setInterval(n,e,...t):setInterval(n,e,...t)},clearInterval(n){let{delegate:e}=Pa;return(e?.clearInterval||clearInterval)(n)},delegate:void 0};var Cc=class extends Mc{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){var i;if(this.closed)return this;this.state=e;let r=this.id,s=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(s,r,t)),this.pending=!0,this.delay=t,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(s,this.id,t),this}requestAsyncId(e,t,i=0){return Pa.setInterval(e.flush.bind(e,this),i)}recycleAsyncId(e,t,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return t;t!=null&&Pa.clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(e,t);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let i=!1,r;try{this.work(e)}catch(s){i=!0,r=s||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:e,scheduler:t}=this,{actions:i}=t;this.work=this.state=this.scheduler=null,this.pending=!1,es(i,this),e!=null&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null,super.unsubscribe()}}};var no=class n{constructor(e,t=n.now){this.schedulerActionCtor=e,this.now=t}schedule(e,t=0,i){return new this.schedulerActionCtor(this,e).schedule(i,t)}};no.now=C3.now;var Sc=class extends no{constructor(e,t=no.now){super(e,t),this.actions=[],this._active=!1}flush(e){let{actions:t}=this;if(this._active){t.push(e);return}let i;this._active=!0;do if(i=e.execute(e.state,e.delay))break;while(e=t.shift());if(this._active=!1,i){for(;e=t.shift();)e.unsubscribe();throw i}}};var I5=new Sc(Cc);var Cn=new Qe(n=>n.complete());function R5(n){return n&&ke(n.schedule)}function S3(n){return n[n.length-1]}function wc(n){return ke(S3(n))?n.pop():void 0}function bi(n){return R5(S3(n))?n.pop():void 0}function N5(n,e){return typeof S3(n)=="number"?n.pop():e}function L5(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(f){o(f)}}function c(u){try{l(i.throw(u))}catch(f){o(f)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function P5(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function is(n){return this instanceof is?(this.v=n,this):new is(n)}function O5(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(d){i[d]&&(r[d]=function(p){return new Promise(function(g,v){s.push([d,p,g,v])>1||a(d,p)})})}function a(d,p){try{c(i[d](p))}catch(g){f(s[0][3],g)}}function c(d){d.value instanceof is?Promise.resolve(d.value.v).then(l,u):f(s[0][2],d)}function l(d){a("next",d)}function u(d){a("throw",d)}function f(d,p){d(p),s.shift(),s.length&&a(s[0][0],s[0][1])}}function z5(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof P5=="function"?P5(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Ec=n=>n&&typeof n.length=="number"&&typeof n!="function";function Ac(n){return ke(n?.then)}function Tc(n){return ke(n[Qs])}function Dc(n){return Symbol.asyncIterator&&ke(n?.[Symbol.asyncIterator])}function Ic(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function f_(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Rc=f_();function Nc(n){return ke(n?.[Rc])}function Pc(n){return O5(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield is(t.read());if(r)return yield is(void 0);yield yield is(i)}}finally{t.releaseLock()}})}function Lc(n){return ke(n?.getReader)}function xt(n){if(n instanceof Qe)return n;if(n!=null){if(Tc(n))return d_(n);if(Ec(n))return h_(n);if(Ac(n))return p_(n);if(Dc(n))return F5(n);if(Nc(n))return m_(n);if(Lc(n))return g_(n)}throw Ic(n)}function d_(n){return new Qe(e=>{let t=n[Qs]();if(ke(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function h_(n){return new Qe(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function p_(n){return new Qe(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,_c)})}function m_(n){return new Qe(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function F5(n){return new Qe(e=>{v_(n,e).catch(t=>e.error(t))})}function g_(n){return F5(Pc(n))}function v_(n,e){var t,i,r,s;return L5(this,void 0,void 0,function*(){try{for(t=z5(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function Sn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Oc(n,e=0){return je((t,i)=>{t.subscribe(We(i,r=>Sn(i,n,()=>i.next(r),e),()=>Sn(i,n,()=>i.complete(),e),r=>Sn(i,n,()=>i.error(r),e)))})}function zc(n,e=0){return je((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function k5(n,e){return xt(n).pipe(zc(e),Oc(e))}function V5(n,e){return xt(n).pipe(zc(e),Oc(e))}function U5(n,e){return new Qe(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function H5(n,e){return new Qe(t=>{let i;return Sn(t,e,()=>{i=n[Rc](),Sn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>ke(i?.return)&&i.return()})}function Fc(n,e){if(!n)throw new Error("Iterable cannot be null");return new Qe(t=>{Sn(t,e,()=>{let i=n[Symbol.asyncIterator]();Sn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function B5(n,e){return Fc(Pc(n),e)}function G5(n,e){if(n!=null){if(Tc(n))return k5(n,e);if(Ec(n))return U5(n,e);if(Ac(n))return V5(n,e);if(Dc(n))return Fc(n,e);if(Nc(n))return H5(n,e);if(Lc(n))return B5(n,e)}throw Ic(n)}function wt(n,e){return e?G5(n,e):xt(n)}function Oe(...n){let e=bi(n);return wt(n,e)}function rs(n,e){let t=ke(n)?n:()=>n,i=r=>r.error(t());return new Qe(e?r=>e.schedule(i,0,r):i)}function w3(n){return!!n&&(n instanceof Qe||ke(n.lift)&&ke(n.subscribe))}var zi=Ys(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function Te(n,e){return je((t,i)=>{let r=0;t.subscribe(We(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:y_}=Array;function __(n,e){return y_(e)?n(...e):n(e)}function kc(n){return Te(e=>__(n,e))}var{isArray:b_}=Array,{getPrototypeOf:x_,prototype:M_,keys:C_}=Object;function Vc(n){if(n.length===1){let e=n[0];if(b_(e))return{args:e,keys:null};if(S_(e)){let t=C_(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function S_(n){return n&&typeof n=="object"&&x_(n)===M_}function Uc(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function io(...n){let e=bi(n),t=wc(n),{args:i,keys:r}=Vc(n);if(i.length===0)return wt([],e);let s=new Qe(w_(i,e,r?o=>Uc(r,o):mn));return t?s.pipe(kc(t)):s}function w_(n,e,t=mn){return i=>{j5(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)j5(e,()=>{let l=wt(n[c],e),u=!1;l.subscribe(We(i,f=>{s[c]=f,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function j5(n,e,t){n?Sn(t,n,e):e()}function W5(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,f=!1,d=()=>{f&&!c.length&&!l&&e.complete()},p=v=>l<i?g(v):c.push(v),g=v=>{s&&e.next(v),l++;let m=!1;xt(t(v,u++)).subscribe(We(e,h=>{r?.(h),s?p(h):e.next(h)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let h=c.shift();o?Sn(e,o,()=>g(h)):g(h)}d()}catch(h){e.error(h)}}))};return n.subscribe(We(e,p,()=>{f=!0,d()})),()=>{a?.()}}function Ut(n,e,t=1/0){return ke(e)?Ut((i,r)=>Te((s,o)=>e(i,s,r,o))(xt(n(i,r))),t):(typeof e=="number"&&(t=e),je((i,r)=>W5(i,r,n,t)))}function La(n=1/0){return Ut(mn,n)}function $5(){return La(1)}function pr(...n){return $5()(wt(n,bi(n)))}function Hc(n){return new Qe(e=>{xt(n()).subscribe(e)})}function E3(...n){let e=wc(n),{args:t,keys:i}=Vc(n),r=new Qe(s=>{let{length:o}=t;if(!o){s.complete();return}let a=new Array(o),c=o,l=o;for(let u=0;u<o;u++){let f=!1;xt(t[u]).subscribe(We(s,d=>{f||(f=!0,l--),a[u]=d},()=>c--,void 0,()=>{(!c||!f)&&(l||s.next(i?Uc(i,a):a),s.complete())}))}});return e?r.pipe(kc(e)):r}function A3(...n){let e=bi(n),t=N5(n,1/0),i=n;return i.length?i.length===1?xt(i[0]):La(t)(wt(i,e)):Cn}function gn(n,e){return je((t,i)=>{let r=0;t.subscribe(We(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Fi(n){return je((e,t)=>{let i=null,r=!1,s;i=e.subscribe(We(t,void 0,void 0,o=>{s=xt(n(o,Fi(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function q5(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(We(o,u=>{let f=l++;c=a?n(c,u,f):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function mr(n,e){return ke(e)?Ut(n,e,1):Ut(n,1)}function T3(n,e=I5){return je((t,i)=>{let r=null,s=null,o=null,a=()=>{if(r){r.unsubscribe(),r=null;let l=s;s=null,i.next(l)}};function c(){let l=o+n,u=e.now();if(u<l){r=this.schedule(void 0,l-u),i.add(r);return}a()}t.subscribe(We(i,l=>{s=l,o=e.now(),r||(r=e.schedule(c,n),i.add(r))},()=>{a(),i.complete()},void 0,()=>{s=r=null}))})}function gr(n){return je((e,t)=>{let i=!1;e.subscribe(We(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function ni(n){return n<=0?()=>Cn:je((e,t)=>{let i=0;e.subscribe(We(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function D3(n){return Te(()=>n)}function I3(n,e=mn){return n=n??E_,je((t,i)=>{let r,s=!0;t.subscribe(We(i,o=>{let a=e(o);(s||!n(r,a))&&(s=!1,r=a,i.next(o))}))})}function E_(n,e){return n===e}function Bc(n=A_){return je((e,t)=>{let i=!1;e.subscribe(We(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function A_(){return new zi}function vr(n){return je((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function ii(n,e){let t=arguments.length>=2;return i=>i.pipe(n?gn((r,s)=>n(r,s,i)):mn,ni(1),t?gr(e):Bc(()=>new zi))}function ro(n){return n<=0?()=>Cn:je((e,t)=>{let i=[];e.subscribe(We(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function R3(n,e){let t=arguments.length>=2;return i=>i.pipe(n?gn((r,s)=>n(r,s,i)):mn,ro(1),t?gr(e):Bc(()=>new zi))}function N3(n,e){return je(q5(n,e,arguments.length>=2,!0))}function Gc(n={}){let{connector:e=()=>new nn,resetOnError:t=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=n;return s=>{let o,a,c,l=0,u=!1,f=!1,d=()=>{a?.unsubscribe(),a=void 0},p=()=>{d(),o=c=void 0,u=f=!1},g=()=>{let v=o;p(),v?.unsubscribe()};return je((v,m)=>{l++,!f&&!u&&d();let h=c=c??e();m.add(()=>{l--,l===0&&!f&&!u&&(a=P3(g,r))}),h.subscribe(m),!o&&l>0&&(o=new Oi({next:M=>h.next(M),error:M=>{f=!0,d(),a=P3(p,t,M),h.error(M)},complete:()=>{u=!0,d(),a=P3(p,i),h.complete()}}),xt(v).subscribe(o))})(s)}}function P3(n,e,...t){if(e===!0){n();return}if(e===!1)return;let i=new Oi({next:()=>{i.unsubscribe(),n()}});return xt(e(...t)).subscribe(i)}function L3(n){return gn((e,t)=>n<=t)}function Oa(...n){let e=bi(n);return je((t,i)=>{(e?pr(n,t,e):pr(n,t)).subscribe(i)})}function wn(n,e){return je((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(We(i,c=>{r?.unsubscribe();let l=0,u=s++;xt(n(c,u)).subscribe(r=We(i,f=>i.next(e?e(c,f,u,l++):f),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function za(n){return je((e,t)=>{xt(n).subscribe(We(t,()=>t.complete(),Na)),!t.closed&&e.subscribe(t)})}function Wt(n,e,t){let i=ke(n)||e||t?{next:n,error:e,complete:t}:n;return i?je((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(We(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):mn}function gt(n){for(let e in n)if(n[e]===gt)return e;throw Error("Could not find renamed property on target object.")}function jc(n,e){for(let t in e)e.hasOwnProperty(t)&&!n.hasOwnProperty(t)&&(n[t]=e[t])}function yn(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(yn).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function X5(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var T_=gt({__forward_ref__:gt});function vo(n){return n.__forward_ref__=vo,n.toString=function(){return yn(this())},n}function vn(n){return O6(n)?n():n}function O6(n){return typeof n=="function"&&n.hasOwnProperty(T_)&&n.__forward_ref__===vo}function z6(n){return n&&!!n.\u0275providers}var F6="https://g.co/ng/security#xss",Q=class extends Error{constructor(e,t){super(Wf(e,t)),this.code=e}};function Wf(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}function w2(n){return typeof n=="string"?n:n==null?"":String(n)}function D_(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():w2(n)}function I_(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Q(-200,`Circular dependency in DI detected for ${n}${t}`)}function $f(n,e){let t=e?` in ${e}`:"";throw new Q(-201,!1)}function R_(n,e){n==null&&N_(e,n,null,"!=")}function N_(n,e,t,i){throw new Error(`ASSERTION ERROR: ${n}`+(i==null?"":` [Expected=> ${t} ${i} ${e} <=Actual]`))}function fe(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Pt(n){return{providers:n.providers||[],imports:n.imports||[]}}function E2(n){return Z5(n,V6)||Z5(n,U6)}function k6(n){return E2(n)!==null}function Z5(n,e){return n.hasOwnProperty(e)?n[e]:null}function P_(n){let e=n&&(n[V6]||n[U6]);return e||null}function Y5(n){return n&&(n.hasOwnProperty(K5)||n.hasOwnProperty(L_))?n[K5]:null}var V6=gt({\u0275prov:gt}),K5=gt({\u0275inj:gt}),U6=gt({ngInjectableDef:gt}),L_=gt({ngInjectorDef:gt}),et=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(et||{}),Y3;function O_(){return Y3}function Vn(n){let e=Y3;return Y3=n,e}function H6(n,e,t){let i=E2(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&et.Optional)return null;if(e!==void 0)return e;$f(yn(n),"Injector")}var ki=globalThis;var Se=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=fe({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};var z_={},Ga=z_,K3="__NG_DI_FLAG__",n2="ngTempTokenPath",F_="ngTokenPath",k_=/\n/gm,V_="\u0275",J5="__source",ka;function so(n){let e=ka;return ka=n,e}function U_(n,e=et.Default){if(ka===void 0)throw new Q(-203,!1);return ka===null?H6(n,void 0,e):ka.get(n,e&et.Optional?null:void 0,e)}function se(n,e=et.Default){return(O_()||U_)(vn(n),e)}function ye(n,e=et.Default){return se(n,A2(e))}function A2(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function J3(n){let e=[];for(let t=0;t<n.length;t++){let i=vn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Q(900,!1);let r,s=et.Default;for(let o=0;o<i.length;o++){let a=i[o],c=H_(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(se(r,s))}else e.push(se(i))}return e}function B6(n,e){return n[K3]=e,n.prototype[K3]=e,n}function H_(n){return n[K3]}function B_(n,e,t,i){let r=n[n2];throw e[J5]&&r.unshift(e[J5]),n.message=G_(`
`+n.message,r,t,i),n[F_]=r,n[n2]=null,n}function G_(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==V_?n.slice(2):n;let r=yn(e);if(Array.isArray(e))r=e.map(yn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):yn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(k_,`
  `)}`}function Ka(n){return{toString:n}.toString()}var G6=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(G6||{}),Bn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(Bn||{}),uo={},Un=[],j_=gt({\u0275cmp:gt}),W_=gt({\u0275dir:gt}),$_=gt({\u0275pipe:gt}),q_=gt({\u0275mod:gt}),i2=gt({\u0275fac:gt}),Va=gt({__NG_ELEMENT_ID__:gt}),Q5=gt({__NG_ENV_ID__:gt});function j6(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function Q3(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];Z_(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function X_(n){return n===3||n===4||n===6}function Z_(n){return n.charCodeAt(0)===64}function ja(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?e6(n,t,r,null,e[++i]):e6(n,t,r,null,null))}}return n}function e6(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var W6="ng-template";function Y_(n,e,t){let i=0,r=!0;for(;i<n.length;){let s=n[i++];if(typeof s=="string"&&r){let o=n[i++];if(t&&s==="class"&&j6(o.toLowerCase(),e,0)!==-1)return!0}else if(s===1){for(;i<n.length&&typeof(s=n[i++])=="string";)if(s.toLowerCase()===e)return!0;return!1}else typeof s=="number"&&(r=!1)}return!1}function $6(n){return n.type===4&&n.value!==W6}function K_(n,e,t){let i=n.type===4&&!t?W6:n.value;return e===i}function J_(n,e,t){let i=4,r=n.attrs||[],s=tb(r),o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!ri(i)&&!ri(c))return!1;if(o&&ri(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!K_(n,c,t)||c===""&&e.length===1){if(ri(i))return!1;o=!0}}else{let l=i&8?c:e[++a];if(i&8&&n.attrs!==null){if(!Y_(n.attrs,l,t)){if(ri(i))return!1;o=!0}continue}let u=i&8?"class":c,f=Q_(u,r,$6(n),t);if(f===-1){if(ri(i))return!1;o=!0;continue}if(l!==""){let d;f>s?d="":d=r[f+1].toLowerCase();let p=i&8?d:null;if(p&&j6(p,l,0)!==-1||i&2&&l!==d){if(ri(i))return!1;o=!0}}}}return ri(i)||o}function ri(n){return(n&1)===0}function Q_(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return nb(e,n)}function q6(n,e,t=!1){for(let i=0;i<e.length;i++)if(J_(n,e[i],t))return!0;return!1}function eb(n){let e=n.attrs;if(e!=null){let t=e.indexOf(5);if(!(t&1))return e[t+1]}return null}function tb(n){for(let e=0;e<n.length;e++){let t=n[e];if(X_(t))return e}return n.length}function nb(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function ib(n,e){e:for(let t=0;t<e.length;t++){let i=e[t];if(n.length===i.length){for(let r=0;r<n.length;r++)if(n[r]!==i[r])continue e;return!0}}return!1}function t6(n,e){return n?":not("+e.trim()+")":e}function rb(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!ri(o)&&(e+=t6(s,r),r=""),i=o,s=s||!ri(i);t++}return r!==""&&(e+=t6(s,r)),e}function sb(n){return n.map(rb).join(",")}function ob(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!ri(r))break;r=s}i++}return{attrs:e,classes:t}}function Tt(n){return Ka(()=>{let e=Q6(n),t=mt(pe({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===G6.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Bn.Emulated,styles:n.styles||Un,_:null,schemas:n.schemas||null,tView:null,id:""});e8(t);let i=n.dependencies;return t.directiveDefs=i6(i,!1),t.pipeDefs=i6(i,!0),t.id=lb(t),t})}function ab(n){return as(n)||Z6(n)}function cb(n){return n!==null}function Lt(n){return Ka(()=>({type:n.type,bootstrap:n.bootstrap||Un,declarations:n.declarations||Un,imports:n.imports||Un,exports:n.exports||Un,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function n6(n,e){if(n==null)return uo;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s=r;Array.isArray(r)&&(s=r[1],r=r[0]),t[r]=i,e&&(e[r]=s)}return t}function $t(n){return Ka(()=>{let e=Q6(n);return e8(e),e})}function X6(n){return{type:n.type,name:n.name,factory:null,pure:n.pure!==!1,standalone:n.standalone===!0,onDestroy:n.type.prototype.ngOnDestroy||null}}function as(n){return n[j_]||null}function Z6(n){return n[W_]||null}function Y6(n){return n[$_]||null}function K6(n){let e=as(n)||Z6(n)||Y6(n);return e!==null?e.standalone:!1}function J6(n,e){let t=n[q_]||null;if(!t&&e===!0)throw new Error(`Type ${yn(n)} does not have '\u0275mod' property.`);return t}function Q6(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||uo,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||Un,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:n6(n.inputs,e),outputs:n6(n.outputs)}}function e8(n){n.features?.forEach(e=>e(n))}function i6(n,e){if(!n)return null;let t=e?Y6:ab;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(cb)}function lb(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483647+1,"c"+e}var Hi=0,Ye=1,rt=2,Ht=3,si=4,Fa=5,Nn=6,Wa=7,Ci=8,fo=9,ho=10,Bt=11,$a=12,r6=13,Ja=14,oi=15,T2=16,oo=17,qa=18,D2=19,t8=20,Ua=21,r2=22,Ha=23,Ba=24,ai=25;var n8=1,i8=2,cs=7,s2=8,o2=9;var Hn=11;function ss(n){return Array.isArray(n)&&typeof n[n8]=="object"}function Bi(n){return Array.isArray(n)&&n[n8]===!0}function r8(n){return(n.flags&4)!==0}function I2(n){return n.componentOffset>-1}function qf(n){return(n.flags&1)===1}function yr(n){return!!n.template}function ub(n){return(n[rt]&512)!==0}function ls(n,e){let t=n.hasOwnProperty(i2);return t?n[i2]:null}var s6=null,O3=!1;function Gn(n){let e=s6;return s6=n,e}var s8={version:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{}};function fb(n){if(!(Kf(n)&&!n.dirty)){if(!n.producerMustRecompute(n)&&!a8(n)){n.dirty=!1;return}n.producerRecomputeValue(n),n.dirty=!1}}function db(n){if(n.liveConsumerNode===void 0)return;let e=O3;O3=!0;try{for(let t of n.liveConsumerNode)t.dirty||o8(t)}finally{O3=e}}function o8(n){n.dirty=!0,db(n),n.consumerMarkedDirty?.(n)}function Xf(n){return n&&(n.nextProducerIndex=0),Gn(n)}function Zf(n,e){if(Gn(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Kf(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Yf(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function a8(n){a2(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(fb(t),i!==t.version))return!0}return!1}function o6(n){if(a2(n),Kf(n))for(let e=0;e<n.producerNode.length;e++)Yf(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Yf(n,e){if(hb(n),a2(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)Yf(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];a2(r),r.producerIndexOfThis[i]=e}}function Kf(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function a2(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function hb(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function pb(){throw new Error}var mb=pb;function gb(n){mb=n}function Jf(n){let e=Gn(null);try{return n()}finally{Gn(e)}}function vb(n,e,t){let i=Object.create(yb);t&&(i.consumerAllowSignalWrites=!0),i.fn=n,i.schedule=e;let r=o=>{i.cleanupFn=o},s=()=>{if(i.dirty=!1,i.hasRun&&!a8(i))return;i.hasRun=!0;let o=Xf(i);try{i.cleanupFn(),i.cleanupFn=c8,i.fn(r)}finally{Zf(i,o)}};return i.ref={notify:()=>o8(i),run:s,cleanup:()=>i.cleanupFn()},i.ref}var c8=()=>{},yb=(()=>mt(pe({},s8),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!1,consumerMarkedDirty:n=>{n.schedule(n.ref)},hasRun:!1,cleanupFn:c8}))();var ef=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function jn(){return l8}function l8(n){return n.type.prototype.ngOnChanges&&(n.setInput=bb),_b}jn.ngInherit=!0;function _b(){let n=f8(this),e=n?.current;if(e){let t=n.previous;if(t===uo)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function bb(n,e,t,i){let r=this.declaredInputs[t],s=f8(n)||xb(n,{previous:uo,current:null}),o=s.current||(s.current={}),a=s.previous,c=a[r];o[r]=new ef(c&&c.currentValue,e,a===uo),n[i]=e}var u8="__ngSimpleChanges__";function f8(n){return n[u8]||null}function xb(n,e){return n[u8]=e}var a6=null;var xi=function(n,e,t){a6?.(n,e,t)},Mb="svg",Cb="math";function Si(n){for(;Array.isArray(n);)n=n[Hi];return n}function d8(n,e){return Si(e[n])}function Wn(n,e){return Si(e[n.index])}function h8(n,e){return n.data[e]}function Sb(n,e){return n[e]}function xr(n,e){let t=e[n];return ss(t)?t:t[Hi]}function wb(n){return(n[rt]&128)===128}function Eb(n){return Bi(n[Ht])}function c2(n,e){return e==null?null:n[e]}function p8(n){n[oo]=0}function Ab(n){n[rt]&1024||(n[rt]|=1024,g8(n,1))}function m8(n){n[rt]&1024&&(n[rt]&=-1025,g8(n,-1))}function g8(n,e){let t=n[Ht];if(t===null)return;t[Fa]+=e;let i=t;for(t=t[Ht];t!==null&&(e===1&&i[Fa]===1||e===-1&&i[Fa]===0);)t[Fa]+=e,i=t,t=t[Ht]}function Tb(n,e){if((n[rt]&256)===256)throw new Q(911,!1);n[Ua]===null&&(n[Ua]=[]),n[Ua].push(e)}var at={lFrame:w8(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function Db(){return at.lFrame.elementDepthCount}function Ib(){at.lFrame.elementDepthCount++}function Rb(){at.lFrame.elementDepthCount--}function v8(){return at.bindingsEnabled}function y8(){return at.skipHydrationRootTNode!==null}function Nb(n){return at.skipHydrationRootTNode===n}function Pb(){at.skipHydrationRootTNode=null}function bt(){return at.lFrame.lView}function An(){return at.lFrame.tView}function $n(){let n=_8();for(;n!==null&&n.type===64;)n=n.parent;return n}function _8(){return at.lFrame.currentTNode}function Lb(){let n=at.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Qa(n,e){let t=at.lFrame;t.currentTNode=n,t.isParent=e}function b8(){return at.lFrame.isParent}function x8(){at.lFrame.isParent=!1}function Ob(){let n=at.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function zb(n){return at.lFrame.bindingIndex=n}function R2(){return at.lFrame.bindingIndex++}function Fb(n){let e=at.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function kb(){return at.lFrame.inI18n}function Vb(n,e){let t=at.lFrame;t.bindingIndex=t.bindingRootIndex=n,tf(e)}function Ub(){return at.lFrame.currentDirectiveIndex}function tf(n){at.lFrame.currentDirectiveIndex=n}function Hb(n){let e=at.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function M8(n){at.lFrame.currentQueryIndex=n}function Bb(n){let e=n[Ye];return e.type===2?e.declTNode:e.type===1?n[Nn]:null}function C8(n,e,t){if(t&et.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&et.Host);)if(r=Bb(s),r===null||(s=s[Ja],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=at.lFrame=S8();return i.currentTNode=e,i.lView=n,!0}function Qf(n){let e=S8(),t=n[Ye];at.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function S8(){let n=at.lFrame,e=n===null?null:n.child;return e===null?w8(n):e}function w8(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function E8(){let n=at.lFrame;return at.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var A8=E8;function e4(){let n=E8();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function yo(){return at.lFrame.selectedIndex}function us(n){at.lFrame.selectedIndex=n}function t4(){let n=at.lFrame;return h8(n.tView,n.selectedIndex)}function Gb(){return at.lFrame.currentNamespace}var T8=!0;function n4(){return T8}function i4(n){T8=n}function jb(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=l8(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function r4(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Kc(n,e,t){D8(n,e,3,t)}function Jc(n,e,t,i){(n[rt]&3)===t&&D8(n,e,t,i)}function z3(n,e){let t=n[rt];(t&3)===e&&(t&=8191,t+=1,n[rt]=t)}function D8(n,e,t,i){let r=i!==void 0?n[oo]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[oo]+=65536),(a<s||s==-1)&&(Wb(n,t,e,c),n[oo]=(n[oo]&4294901760)+c+2),c++}function c6(n,e){xi(4,n,e);let t=Gn(null);try{e.call(n)}finally{Gn(t),xi(5,n,e)}}function Wb(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[rt]>>13<n[oo]>>16&&(n[rt]&3)===e&&(n[rt]+=8192,c6(a,s)):c6(a,s)}var lo=-1,fs=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function $b(n){return n instanceof fs}function qb(n){return(n.flags&8)!==0}function Xb(n){return(n.flags&16)!==0}function I8(n){return n!==lo}function l2(n){let e=n&32767;return n&32767}function Zb(n){return n>>16}function u2(n,e){let t=Zb(n),i=e;for(;t>0;)i=i[Ja],t--;return i}var nf=!0;function f2(n){let e=nf;return nf=n,e}var Yb=256,R8=Yb-1,N8=5,Kb=0,Mi={};function Jb(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Va)&&(i=t[Va]),i==null&&(i=t[Va]=Kb++);let r=i&R8,s=1<<r;e.data[n+(r>>N8)]|=s}function d2(n,e){let t=P8(n,e);if(t!==-1)return t;let i=e[Ye];i.firstCreatePass&&(n.injectorIndex=e.length,F3(i.data,n),F3(e,null),F3(i.blueprint,null));let r=s4(n,e),s=n.injectorIndex;if(I8(r)){let o=l2(r),a=u2(r,e),c=a[Ye].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function F3(n,e){n.push(0,0,0,0,0,0,0,0,e)}function P8(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function s4(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=k8(r),i===null)return lo;if(t++,r=r[Ja],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return lo}function rf(n,e,t){Jb(n,e,t)}function L8(n,e,t){if(t&et.Optional||n!==void 0)return n;$f(e,"NodeInjector")}function O8(n,e,t,i){if(t&et.Optional&&i===void 0&&(i=null),!(t&(et.Self|et.Host))){let r=n[fo],s=Vn(void 0);try{return r?r.get(e,i,t&et.Optional):H6(e,i,t&et.Optional)}finally{Vn(s)}}return L8(i,e,t)}function z8(n,e,t,i=et.Default,r){if(n!==null){if(e[rt]&2048&&!(i&et.Self)){let o=ix(n,e,t,i,Mi);if(o!==Mi)return o}let s=F8(n,e,t,i,Mi);if(s!==Mi)return s}return O8(e,t,i,r)}function F8(n,e,t,i,r){let s=tx(t);if(typeof s=="function"){if(!C8(e,n,i))return i&et.Host?L8(r,t,i):O8(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&et.Optional))$f(t);else return o}finally{A8()}}else if(typeof s=="number"){let o=null,a=P8(n,e),c=lo,l=i&et.Host?e[oi][Nn]:null;for((a===-1||i&et.SkipSelf)&&(c=a===-1?s4(n,e):e[a+8],c===lo||!u6(i,!1)?a=-1:(o=e[Ye],a=l2(c),e=u2(c,e)));a!==-1;){let u=e[Ye];if(l6(s,a,u.data)){let f=Qb(a,e,t,o,i,l);if(f!==Mi)return f}c=e[a+8],c!==lo&&u6(i,e[Ye].data[a+8]===l)&&l6(s,a,e)?(o=u,a=l2(c),e=u2(c,e)):a=-1}}return r}function Qb(n,e,t,i,r,s){let o=e[Ye],a=o.data[n+8],c=i==null?I2(a)&&nf:i!=o&&(a.type&3)!==0,l=r&et.Host&&s===a,u=ex(a,o,t,c,l);return u!==null?po(e,o,u,a):Mi}function ex(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,f=i?a:a+u,d=r?a+u:l;for(let p=f;p<d;p++){let g=o[p];if(p<c&&t===g||p>=c&&g.type===t)return p}if(r){let p=o[c];if(p&&yr(p)&&p.type===t)return c}return null}function po(n,e,t,i){let r=n[t],s=e.data;if($b(r)){let o=r;o.resolving&&I_(D_(s[t]));let a=f2(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?Vn(o.injectImpl):null,u=C8(n,i,et.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&jb(t,s[t],e)}finally{l!==null&&Vn(l),f2(a),o.resolving=!1,A8()}}return r}function tx(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Va)?n[Va]:void 0;return typeof e=="number"?e>=0?e&R8:nx:e}function l6(n,e,t){let i=1<<n;return!!(t[e+(n>>N8)]&i)}function u6(n,e){return!(n&et.Self)&&!(n&et.Host&&e)}var os=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return z8(this._tNode,this._lView,e,A2(i),t)}};function nx(){return new os($n(),bt())}function _o(n){return Ka(()=>{let e=n.prototype.constructor,t=e[i2]||sf(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[i2]||sf(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function sf(n){return O6(n)?()=>{let e=sf(vn(n));return e&&e()}:ls(n)}function ix(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[rt]&2048&&!(o[rt]&512);){let a=F8(s,o,t,i|et.Self,Mi);if(a!==Mi)return a;let c=s.parent;if(!c){let l=o[t8];if(l){let u=l.get(t,Mi,i);if(u!==Mi)return u}c=k8(o),o=o[Ja]}s=c}return r}function k8(n){let e=n[Ye],t=e.type;return t===2?e.declTNode:t===1?n[Nn]:null}var Wc="__parameters__";function rx(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function V8(n,e,t){return Ka(()=>{let i=rx(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let o=new r(...s);return a.annotation=o,a;function a(c,l,u){let f=c.hasOwnProperty(Wc)?c[Wc]:Object.defineProperty(c,Wc,{value:[]})[Wc];for(;f.length<=u;)f.push(null);return(f[u]=f[u]||[]).push(o),c}}return t&&(r.prototype=Object.create(t.prototype)),r.prototype.ngMetadataName=n,r.annotationCls=r,r})}function sx(n){return typeof n=="function"}function o4(n,e){n.forEach(t=>Array.isArray(t)?o4(t,e):e(t))}function U8(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function h2(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function H8(n,e){let t=[];for(let i=0;i<n;i++)t.push(e);return t}function ox(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function ax(n,e,t){let i=e1(n,e);return i>=0?n[i|1]=t:(i=~i,ox(n,i,e,t)),i}function k3(n,e){let t=e1(n,e);if(t>=0)return n[t|1]}function e1(n,e){return cx(n,e,1)}function cx(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var N2=B6(V8("Optional"),8);var a4=B6(V8("SkipSelf"),4);function of(n){return(n.flags&128)===128}var Vi=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Vi||{});var B8=new Map,lx=0;function ux(){return lx++}function fx(n){B8.set(n[D2],n)}function dx(n){B8.delete(n[D2])}var f6="__ngContext__";function ds(n,e){ss(e)?(n[f6]=e[D2],fx(e)):n[f6]=e}var hx;function c4(n,e){return hx(n,e)}function l4(n){let e=n[Ht];return Bi(e)?e[Ht]:e}function G8(n){return W8(n[$a])}function j8(n){return W8(n[si])}function W8(n){for(;n!==null&&!Bi(n);)n=n[si];return n}function ao(n,e,t,i,r){if(i!=null){let s,o=!1;Bi(i)?s=i:ss(i)&&(o=!0,i=i[Hi]);let a=Si(i);n===0&&t!==null?r==null?Y8(e,t,a):p2(e,t,a,r||null,!0):n===1&&t!==null?p2(e,t,a,r||null,!0):n===2?Dx(e,a,o):n===3&&e.destroyNode(a),s!=null&&Rx(e,n,s,t,r)}}function px(n,e){return n.createText(e)}function mx(n,e,t){n.setValue(e,t)}function $8(n,e,t){return n.createElement(e,t)}function gx(n,e){let t=e[Bt];t1(n,e,t,2,null,null),e[Hi]=null,e[Nn]=null}function vx(n,e,t,i,r,s){i[Hi]=r,i[Nn]=e,t1(n,i,t,1,r,s)}function yx(n,e){t1(n,e,e[Bt],2,null,null)}function _x(n){let e=n[$a];if(!e)return V3(n[Ye],n);for(;e;){let t=null;if(ss(e))t=e[$a];else{let i=e[Hn];i&&(t=i)}if(!t){for(;e&&!e[si]&&e!==n;)ss(e)&&V3(e[Ye],e),e=e[Ht];e===null&&(e=n),ss(e)&&V3(e[Ye],e),t=e&&e[si]}e=t}}function bx(n,e,t,i){let r=Hn+i,s=t.length;i>0&&(t[r-1][si]=e),i<s-Hn?(e[si]=t[r],U8(t,Hn+i,e)):(t.push(e),e[si]=null),e[Ht]=t;let o=e[T2];o!==null&&t!==o&&xx(o,e);let a=e[qa];a!==null&&a.insertView(n),e[rt]|=128}function xx(n,e){let t=n[o2],r=e[Ht][Ht][oi];e[oi]!==r&&(n[i8]=!0),t===null?n[o2]=[e]:t.push(e)}function q8(n,e){let t=n[o2],i=t.indexOf(e),r=e[Ht];m8(e),t.splice(i,1)}function af(n,e){if(n.length<=Hn)return;let t=Hn+e,i=n[t];if(i){let r=i[T2];r!==null&&r!==n&&q8(r,i),e>0&&(n[t-1][si]=i[si]);let s=h2(n,Hn+e);gx(i[Ye],i);let o=s[qa];o!==null&&o.detachView(s[Ye]),i[Ht]=null,i[si]=null,i[rt]&=-129}return i}function X8(n,e){if(!(e[rt]&256)){let t=e[Bt];e[Ha]&&o6(e[Ha]),e[Ba]&&o6(e[Ba]),t.destroyNode&&t1(n,e,t,3,null,null),_x(e)}}function V3(n,e){if(!(e[rt]&256)){e[rt]&=-129,e[rt]|=256,Cx(n,e),Mx(n,e),e[Ye].type===1&&e[Bt].destroy();let t=e[T2];if(t!==null&&Bi(e[Ht])){t!==e[Ht]&&q8(t,e);let i=e[qa];i!==null&&i.detachView(n)}dx(e)}}function Mx(n,e){let t=n.cleanup,i=e[Wa];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[Wa]=null);let r=e[Ua];if(r!==null){e[Ua]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function Cx(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof fs)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];xi(4,a,c);try{c.call(a)}finally{xi(5,a,c)}}else{xi(4,r,s);try{s.call(r)}finally{xi(5,r,s)}}}}}function Z8(n,e,t){return Sx(n,e.parent,t)}function Sx(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[Hi];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===Bn.None||s===Bn.Emulated)return null}return Wn(i,t)}}function p2(n,e,t,i,r){n.insertBefore(e,t,i,r)}function Y8(n,e,t){n.appendChild(e,t)}function d6(n,e,t,i,r){i!==null?p2(n,e,t,i,r):Y8(n,e,t)}function wx(n,e,t,i){n.removeChild(e,t,i)}function u4(n,e){return n.parentNode(e)}function Ex(n,e){return n.nextSibling(e)}function K8(n,e,t){return Tx(n,e,t)}function Ax(n,e,t){return n.type&40?Wn(n,t):null}var Tx=Ax,h6;function f4(n,e,t,i){let r=Z8(n,i,e),s=e[Bt],o=i.parent||e[Nn],a=K8(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)d6(s,r,t[c],a,!1);else d6(s,r,t,a,!1);h6!==void 0&&h6(s,i,e,t,r)}function Qc(n,e){if(e!==null){let t=e.type;if(t&3)return Wn(e,n);if(t&4)return cf(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Qc(n,i);{let r=n[e.index];return Bi(r)?cf(-1,r):Si(r)}}else{if(t&32)return c4(e,n)()||Si(n[e.index]);{let i=J8(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=l4(n[oi]);return Qc(r,i)}else return Qc(n,e.next)}}}return null}function J8(n,e){if(e!==null){let i=n[oi][Nn],r=e.projection;return i.projection[r]}return null}function cf(n,e){let t=Hn+n+1;if(t<e.length){let i=e[t],r=i[Ye].firstChild;if(r!==null)return Qc(i,r)}return e[cs]}function Dx(n,e,t){let i=u4(n,e);i&&wx(n,i,e,t)}function d4(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&ds(Si(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)d4(n,e,t.child,i,r,s,!1),ao(e,n,r,a,s);else if(c&32){let l=c4(t,i),u;for(;u=l();)ao(e,n,r,u,s);ao(e,n,r,a,s)}else c&16?Q8(n,e,i,t,r,s):ao(e,n,r,a,s);t=o?t.projectionNext:t.next}}function t1(n,e,t,i,r,s){d4(t,i,n.firstChild,e,r,s,!1)}function Ix(n,e,t){let i=e[Bt],r=Z8(n,t,e),s=t.parent||e[Nn],o=K8(s,t,e);Q8(i,0,e,t,r,o)}function Q8(n,e,t,i,r,s){let o=t[oi],c=o[Nn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];ao(e,n,r,u,s)}else{let l=c,u=o[Ht];of(i)&&(l.flags|=128),d4(n,e,l,u,r,s,!0)}}function Rx(n,e,t,i,r){let s=t[cs],o=Si(t);s!==o&&ao(e,n,i,s,r);for(let a=Hn;a<t.length;a++){let c=t[a];t1(c[Ye],c,n,e,i,s)}}function Nx(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:Vi.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=Vi.Important),n.setStyle(t,i,r,s))}}function Px(n,e,t){n.setAttribute(e,"style",t)}function ep(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function tp(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&Q3(n,e,i),r!==null&&ep(n,e,r),s!==null&&Px(n,e,s)}var $c;function Lx(){if($c===void 0&&($c=null,ki.trustedTypes))try{$c=ki.trustedTypes.createPolicy("angular",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return $c}function P2(n){return Lx()?.createHTML(n)||n}var lf;function np(n){lf=n}function ip(){if(lf!==void 0)return lf;if(typeof document<"u")return document;throw new Q(210,!1)}var qc;function Ox(){if(qc===void 0&&(qc=null,ki.trustedTypes))try{qc=ki.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return qc}function p6(n){return Ox()?.createHTML(n)||n}var Ui=class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${F6})`}},uf=class extends Ui{getTypeName(){return"HTML"}},ff=class extends Ui{getTypeName(){return"Style"}},df=class extends Ui{getTypeName(){return"Script"}},hf=class extends Ui{getTypeName(){return"URL"}},pf=class extends Ui{getTypeName(){return"ResourceURL"}};function Gi(n){return n instanceof Ui?n.changingThisBreaksApplicationSecurity:n}function ms(n,e){let t=zx(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${F6})`)}return t===e}function zx(n){return n instanceof Ui&&n.getTypeName()||null}function rp(n){return new uf(n)}function sp(n){return new ff(n)}function op(n){return new df(n)}function ap(n){return new hf(n)}function cp(n){return new pf(n)}function Fx(n){let e=new gf(n);return kx()?new mf(e):e}var mf=class{constructor(e){this.inertDocumentHelper=e}getInertBodyElement(e){e="<body><remove></remove>"+e;try{let t=new window.DOMParser().parseFromString(P2(e),"text/html").body;return t===null?this.inertDocumentHelper.getInertBodyElement(e):(t.removeChild(t.firstChild),t)}catch{return null}}},gf=class{constructor(e){this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(e){let t=this.inertDocument.createElement("template");return t.innerHTML=P2(e),t}};function kx(){try{return!!new window.DOMParser().parseFromString(P2(""),"text/html")}catch{return!1}}var Vx=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function h4(n){return n=String(n),n.match(Vx)?n:"unsafe:"+n}function ji(n){let e={};for(let t of n.split(","))e[t]=!0;return e}function n1(...n){let e={};for(let t of n)for(let i in t)t.hasOwnProperty(i)&&(e[i]=!0);return e}var lp=ji("area,br,col,hr,img,wbr"),up=ji("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),fp=ji("rp,rt"),Ux=n1(fp,up),Hx=n1(up,ji("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),Bx=n1(fp,ji("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),m6=n1(lp,Hx,Bx,Ux),dp=ji("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),Gx=ji("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),jx=ji("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),Wx=n1(dp,Gx,jx),$x=ji("script,style,template"),vf=class{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(e){let t=e.firstChild,i=!0;for(;t;){if(t.nodeType===Node.ELEMENT_NODE?i=this.startElement(t):t.nodeType===Node.TEXT_NODE?this.chars(t.nodeValue):this.sanitizedSomething=!0,i&&t.firstChild){t=t.firstChild;continue}for(;t;){t.nodeType===Node.ELEMENT_NODE&&this.endElement(t);let r=this.checkClobberedElement(t,t.nextSibling);if(r){t=r;break}t=this.checkClobberedElement(t,t.parentNode)}}return this.buf.join("")}startElement(e){let t=e.nodeName.toLowerCase();if(!m6.hasOwnProperty(t))return this.sanitizedSomething=!0,!$x.hasOwnProperty(t);this.buf.push("<"),this.buf.push(t);let i=e.attributes;for(let r=0;r<i.length;r++){let s=i.item(r),o=s.name,a=o.toLowerCase();if(!Wx.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let c=s.value;dp[a]&&(c=h4(c)),this.buf.push(" ",o,'="',g6(c),'"')}return this.buf.push(">"),!0}endElement(e){let t=e.nodeName.toLowerCase();m6.hasOwnProperty(t)&&!lp.hasOwnProperty(t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))}chars(e){this.buf.push(g6(e))}checkClobberedElement(e,t){if(t&&(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`);return t}},qx=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Xx=/([^\#-~ |!])/g;function g6(n){return n.replace(/&/g,"&amp;").replace(qx,function(e){let t=e.charCodeAt(0),i=e.charCodeAt(1);return"&#"+((t-55296)*1024+(i-56320)+65536)+";"}).replace(Xx,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Xc;function p4(n,e){let t=null;try{Xc=Xc||Fx(n);let i=e?String(e):"";t=Xc.getInertBodyElement(i);let r=5,s=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=s,s=t.innerHTML,t=Xc.getInertBodyElement(i)}while(i!==s);let a=new vf().sanitizeChildren(v6(t)||t);return P2(a)}finally{if(t){let i=v6(t)||t;for(;i.firstChild;)i.removeChild(i.firstChild)}}}function v6(n){return"content"in n&&Zx(n)?n.content:null}function Zx(n){return n.nodeType===Node.ELEMENT_NODE&&n.nodeName==="TEMPLATE"}var Wi=function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n}(Wi||{});function hp(n){let e=Yx();return e?p6(e.sanitize(Wi.HTML,n)||""):ms(n,"HTML")?p6(Gi(n)):p4(ip(),w2(n))}function Yx(){let n=bt();return n&&n[ho].sanitizer}var i1=new Se("ENVIRONMENT_INITIALIZER"),pp=new Se("INJECTOR",-1),mp=new Se("INJECTOR_DEF_TYPES"),m2=class{get(e,t=Ga){if(t===Ga){let i=new Error(`NullInjectorError: No provider for ${yn(e)}!`);throw i.name="NullInjectorError",i}return t}};function bo(n){return{\u0275providers:n}}function m4(...n){return{\u0275providers:gp(!0,n),\u0275fromNgModule:!0}}function gp(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return o4(e,o=>{let a=o;yf(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&vp(r,s),t}function vp(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];g4(r,s=>{e(s,i)})}}function yf(n,e,t,i){if(n=vn(n),!n)return!1;let r=null,s=Y5(n),o=!s&&as(n);if(!s&&!o){let c=n.ngModule;if(s=Y5(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)yf(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{o4(s.imports,u=>{yf(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&vp(l,e)}if(!a){let l=ls(r)||(()=>new r);e({provide:r,useFactory:l,deps:Un},r),e({provide:mp,useValue:r,multi:!0},r),e({provide:i1,useValue:()=>se(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;g4(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function g4(n,e){for(let t of n)z6(t)&&(t=t.\u0275providers),Array.isArray(t)?g4(t,e):e(t)}var Kx=gt({provide:String,useValue:gt});function yp(n){return n!==null&&typeof n=="object"&&Kx in n}function Jx(n){return!!(n&&n.useExisting)}function Qx(n){return!!(n&&n.useFactory)}function mo(n){return typeof n=="function"}function eM(n){return!!n.useClass}var L2=new Se("Set Injector scope."),e2={},tM={},U3;function v4(){return U3===void 0&&(U3=new m2),U3}var En=class{},g2=class extends En{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,bf(e,o=>this.processProvider(o)),this.records.set(pp,co(void 0,this)),r.has("environment")&&this.records.set(En,co(void 0,this));let s=this.records.get(L2);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(mp.multi,Un,et.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(let t of this._ngOnDestroyHooks)t.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let t of e)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear()}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=so(this),i=Vn(void 0),r;try{return e()}finally{so(t),Vn(i)}}get(e,t=Ga,i=et.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(Q5))return e[Q5](this);i=A2(i);let r,s=so(this),o=Vn(void 0);try{if(!(i&et.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=oM(e)&&E2(e);l&&this.injectableDefInScope(l)?c=co(_f(e),e2):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&et.Self?v4():this.parent;return t=i&et.Optional&&t===Ga?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[n2]=a[n2]||[]).unshift(yn(e)),s)throw a;return B_(a,e,"R3InjectorError",this.source)}else throw a}finally{Vn(o),so(s)}}resolveInjectorInitializers(){let e=so(this),t=Vn(void 0),i;try{let r=this.get(i1.multi,Un,et.Self);for(let s of r)s()}finally{so(e),Vn(t)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(yn(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Q(205,!1)}processProvider(e){e=vn(e);let t=mo(e)?e:vn(e&&e.provide),i=iM(e);if(!mo(e)&&e.multi===!0){let r=this.records.get(t);r||(r=co(void 0,e2,!0),r.factory=()=>J3(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}else{let r=this.records.get(t)}this.records.set(t,i)}hydrate(e,t){return t.value===e2&&(t.value=tM,t.value=t.factory()),typeof t.value=="object"&&t.value&&sM(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}injectableDefInScope(e){if(!e.providedIn)return!1;let t=vn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function _f(n){let e=E2(n),t=e!==null?e.factory:ls(n);if(t!==null)return t;if(n instanceof Se)throw new Q(204,!1);if(n instanceof Function)return nM(n);throw new Q(204,!1)}function nM(n){let e=n.length;if(e>0){let i=H8(e,"?");throw new Q(204,!1)}let t=P_(n);return t!==null?()=>t.factory(n):()=>new n}function iM(n){if(yp(n))return co(void 0,n.useValue);{let e=_p(n);return co(e,e2)}}function _p(n,e,t){let i;if(mo(n)){let r=vn(n);return ls(r)||_f(r)}else if(yp(n))i=()=>vn(n.useValue);else if(Qx(n))i=()=>n.useFactory(...J3(n.deps||[]));else if(Jx(n))i=()=>se(vn(n.useExisting));else{let r=vn(n&&(n.useClass||n.provide));if(rM(n))i=()=>new r(...J3(n.deps));else return ls(r)||_f(r)}return i}function co(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function rM(n){return!!n.deps}function sM(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function oM(n){return typeof n=="function"||typeof n=="object"&&n instanceof Se}function bf(n,e){for(let t of n)Array.isArray(t)?bf(t,e):t&&z6(t)?bf(t.\u0275providers,e):e(t)}var O2=new Se("AppId",{providedIn:"root",factory:()=>aM}),aM="ng",y4=new Se("Platform Initializer"),Ai=new Se("Platform ID",{providedIn:"platform",factory:()=>"unknown"});var z2=new Se("AnimationModuleType"),r1=new Se("CSP nonce",{providedIn:"root",factory:()=>ip().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var cM="h",lM="b";var uM=(n,e,t)=>null;function _4(n,e,t=!1){return uM(n,e,t)}var xf=class{},v2=class{};function fM(n){let e=Error(`No component factory found for ${yn(n)}.`);return e[dM]=n,e}var dM="ngComponent";var Mf=class{resolveComponentFactory(e){throw fM(e)}},F2=(()=>{let e=class e{};e.NULL=new Mf;let n=e;return n})();function hM(){return k2($n(),bt())}function k2(n,e){return new cn(Wn(n,e))}var cn=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=hM;let n=e;return n})();var wi=class{},$i=(()=>{let e=class e{constructor(){this.destroyNode=null}};e.__NG_ELEMENT_ID__=()=>pM();let n=e;return n})();function pM(){let n=bt(),e=$n(),t=xr(e.index,n);return(ss(t)?t:n)[Bt]}var mM=(()=>{let e=class e{};e.\u0275prov=fe({token:e,providedIn:"root",factory:()=>null});let n=e;return n})(),_r=class{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}},gM=new _r("16.2.12"),H3={};function y6(n,e=null,t=null,i){let r=bp(n,e,t,i);return r.resolveInjectorInitializers(),r}function bp(n,e=null,t=null,i,r=new Set){let s=[t||Un,m4(n)];return i=i||(typeof n=="object"?void 0:yn(n)),new g2(s,e||v4(),i||null,r)}var Mr=(()=>{let e=class e{static create(i,r){if(Array.isArray(i))return y6({name:""},r,i,"");{let s=i.name??"";return y6({name:s},i.parent,i.providers,s)}}};e.THROW_IF_NOT_FOUND=Ga,e.NULL=new m2,e.\u0275prov=fe({token:e,providedIn:"any",factory:()=>se(pp)}),e.__NG_ELEMENT_ID__=-1;let n=e;return n})(),vM="ngOriginalError";function B3(n){return n[vM]}var Ei=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&B3(e);for(;t&&B3(t);)t=B3(t);return t||null}};var Cf=class extends nn{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=G3(s),r&&(r=G3(r)),o&&(o=G3(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Vt&&e.add(a),a}};function G3(n){return e=>{setTimeout(n,void 0,e)}}var Qt=Cf;function _6(...n){}function yM(){let n=typeof ki.requestAnimationFrame=="function",e=ki[n?"requestAnimationFrame":"setTimeout"],t=ki[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}var lt=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Qt(!1),this.onMicrotaskEmpty=new Qt(!1),this.onStable=new Qt(!1),this.onError=new Qt(!1),typeof Zone>"u")throw new Q(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=yM().nativeRequestAnimationFrame,xM(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Q(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Q(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,_M,_6,_6);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},_M={};function b4(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function bM(n){n.isCheckStableRunning||n.lastRequestAnimationFrameId!==-1||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(ki,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,Sf(n),n.isCheckStableRunning=!0,b4(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),Sf(n))}function xM(n){let e=()=>{bM(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if(MM(a))return t.invokeTask(r,s,o,a);try{return b6(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),x6(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return b6(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&e(),x6(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,Sf(n),b4(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function Sf(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.lastRequestAnimationFrameId!==-1?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function b6(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function x6(n){n._nesting--,b4(n)}var xp=new Se("",{providedIn:"root",factory:Mp});function Mp(){let n=ye(lt),e=!0,t=new Qe(r=>{e=n.isStable&&!n.hasPendingMacrotasks&&!n.hasPendingMicrotasks,n.runOutsideAngular(()=>{r.next(e),r.complete()})}),i=new Qe(r=>{let s;n.runOutsideAngular(()=>{s=n.onStable.subscribe(()=>{lt.assertNotInAngularZone(),queueMicrotask(()=>{!e&&!n.hasPendingMacrotasks&&!n.hasPendingMicrotasks&&(e=!0,r.next(!0))})})});let o=n.onUnstable.subscribe(()=>{lt.assertInAngularZone(),e&&(e=!1,n.runOutsideAngular(()=>{r.next(!1)}))});return()=>{s.unsubscribe(),o.unsubscribe()}});return A3(t,i.pipe(Gc()))}function MM(n){return!Array.isArray(n)||n.length!==1?!1:n[0].data?.__ignore_ng_zone__===!0}function Cp(n){return n instanceof Function?n():n}var CM=(()=>{let e=class e{constructor(){this.renderDepth=0,this.handler=null}begin(){this.handler?.validateBegin(),this.renderDepth++}end(){this.renderDepth--,this.renderDepth===0&&this.handler?.execute()}ngOnDestroy(){this.handler?.destroy(),this.handler=null}};e.\u0275prov=fe({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function V2(n){for(;n;){n[rt]|=64;let e=l4(n);if(ub(n)&&!e)return n;n=e}return null}var Sp=!1,SM=new Se("",{providedIn:"root",factory:()=>Sp});var y2=null;function wp(n,e){return n[e]??Tp()}function Ep(n,e){let t=Tp();t.producerNode?.length&&(n[e]=y2,t.lView=n,y2=Ap())}var wM=mt(pe({},s8),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{V2(n.lView)},lView:null});function Ap(){return Object.create(wM)}function Tp(){return y2??=Ap(),y2}var gs={};function Ot(n){Dp(An(),bt(),yo()+n,!1)}function Dp(n,e,t,i){if(!i)if((e[rt]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Kc(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Jc(e,s,0,t)}us(t)}function we(n,e=et.Default){let t=bt();if(t===null)return se(n,e);let i=$n();return z8(i,t,vn(n),e)}function EM(n,e){let t=n.hostBindingOpCodes;if(t===null)return;let i=wp(e,Ba);try{for(let r=0;r<t.length;r++){let s=t[r];if(s<0)us(~s);else{let o=s,a=t[++r],c=t[++r];Vb(a,o),i.dirty=!1;let l=Xf(i);try{let u=e[o];c(2,u)}finally{Zf(i,l)}}}}finally{e[Ba]===null&&Ep(e,Ba),us(-1)}}function U2(n,e,t,i,r,s,o,a,c,l,u){let f=e.blueprint.slice();return f[Hi]=r,f[rt]=i|4|128|8,(l!==null||n&&n[rt]&2048)&&(f[rt]|=2048),p8(f),f[Ht]=f[Ja]=n,f[Ci]=t,f[ho]=o||n&&n[ho],f[Bt]=a||n&&n[Bt],f[fo]=c||n&&n[fo]||null,f[Nn]=s,f[D2]=ux(),f[r2]=u,f[t8]=l,f[oi]=e.type==2?n[oi]:f,f}function s1(n,e,t,i,r){let s=n.data[e];if(s===null)s=AM(n,e,t,i,r),kb()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=Lb();s.injectorIndex=o===null?-1:o.injectorIndex}return Qa(s,!0),s}function AM(n,e,t,i,r){let s=_8(),o=b8(),a=o?s:s&&s.parent,c=n.data[e]=NM(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function Ip(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Rp(n,e,t,i,r){let s=wp(e,Ha),o=yo(),a=i&2;try{us(-1),a&&e.length>ai&&Dp(n,e,ai,!1),xi(a?2:0,r);let l=a?s:null,u=Xf(l);try{l!==null&&(l.dirty=!1),t(i,r)}finally{Zf(l,u)}}finally{a&&e[Ha]===null&&Ep(e,Ha),us(o),xi(a?3:1,r)}}function Np(n,e,t){if(r8(e)){let i=Gn(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];a.contentQueries&&a.contentQueries(1,t[o],o)}}finally{Gn(i)}}}function Pp(n,e,t){v8()&&(kM(n,e,t,Wn(t,e)),(t.flags&64)===64&&Vp(n,e,t))}function Lp(n,e,t=Wn){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function Op(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=x4(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function x4(n,e,t,i,r,s,o,a,c,l,u){let f=ai+i,d=f+r,p=TM(f,d),g=typeof l=="function"?l():l;return p[Ye]={type:n,blueprint:p,template:t,queries:null,viewQuery:a,declTNode:e,data:p.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function TM(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:gs);return t}function DM(n,e,t,i){let s=i.get(SM,Sp)||t===Bn.ShadowDom,o=n.selectRootElement(e,s);return IM(o),o}function IM(n){RM(n)}var RM=n=>null;function NM(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return y8()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function M6(n,e,t,i){for(let r in n)if(n.hasOwnProperty(r)){t=t===null?{}:t;let s=n[r];i===null?C6(t,e,r,s):i.hasOwnProperty(r)&&C6(t,e,i[r],s)}return t}function C6(n,e,t,i){n.hasOwnProperty(t)?n[t].push(e,i):n[t]=[e,i]}function PM(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let f=s[u],d=t?t.get(f):null,p=d?d.inputs:null,g=d?d.outputs:null;c=M6(f.inputs,u,c,p),l=M6(f.outputs,u,l,g);let v=c!==null&&o!==null&&!$6(e)?ZM(c,u,o):null;a.push(v)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function LM(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function zp(n,e,t,i,r,s,o,a){let c=Wn(e,t),l=e.inputs,u;!a&&l!=null&&(u=l[i])?(M4(n,t,u,i,r),I2(e)&&OM(t,e.index)):e.type&3?(i=LM(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function OM(n,e){let t=xr(e,n);t[rt]&16||(t[rt]|=64)}function Fp(n,e,t,i){if(v8()){let r=i===null?null:{"":-1},s=UM(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&kp(n,e,t,o,r,a),r&&HM(t,i,r)}t.mergedAttrs=ja(t.mergedAttrs,t.attrs)}function kp(n,e,t,i,r,s){for(let l=0;l<i.length;l++)rf(d2(t,e),n,i[l].type);GM(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=Ip(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=ja(t.mergedAttrs,u.hostAttrs),jM(n,t,e,c,u),BM(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let f=u.type.prototype;!o&&(f.ngOnChanges||f.ngOnInit||f.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(f.ngOnChanges||f.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}PM(n,t,s)}function zM(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;FM(o)!=a&&o.push(a),o.push(t,i,s)}}function FM(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function kM(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;I2(t)&&WM(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||d2(t,e),ds(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=po(e,n,a,t);if(ds(l,e),o!==null&&XM(e,a-r,l,c,t,o),yr(c)){let u=xr(t.index,e);u[Ci]=po(e,n,a,t)}}}function Vp(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=Ub();try{us(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];tf(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&VM(c,l)}}finally{us(-1),tf(o)}}function VM(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function UM(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(q6(e,o.selectors,!1))if(i||(i=[]),yr(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;wf(n,e,c)}else i.unshift(o),wf(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function wf(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function HM(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Q(-301,!1);i.push(e[r],s)}}}function BM(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;yr(e)&&(t[""]=n)}}function GM(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function jM(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=ls(r.type,!0)),o=new fs(s,yr(r),we);n.blueprint[i]=o,t[i]=o,zM(n,e,i,Ip(n,t,r.hostVars,gs),r)}function WM(n,e,t){let i=Wn(e,n),r=Op(t),s=n[ho].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=H2(n,U2(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function $M(n,e,t,i,r,s){let o=Wn(n,e);qM(e[Bt],o,s,n.value,t,i,r)}function qM(n,e,t,i,r,s,o){if(s==null)n.removeAttribute(e,r,t);else{let a=o==null?w2(s):o(s,i||"",r);n.setAttribute(e,r,a,t)}}function XM(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++];Up(i,t,c,l,u)}}function Up(n,e,t,i,r){let s=Gn(null);try{let o=n.inputTransforms;o!==null&&o.hasOwnProperty(i)&&(r=o[i].call(e,r)),n.setInput!==null?n.setInput(e,r,t,i):e[i]=r}finally{Gn(s)}}function ZM(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=2)if(o[a]===e){i.push(s,o[a+1],t[r+1]);break}}r+=2}return i}function Hp(n,e,t,i){return[n,!0,!1,e,null,0,i,t,null,null,null]}function Bp(n,e){let t=n.contentQueries;if(t!==null)for(let i=0;i<t.length;i+=2){let r=t[i],s=t[i+1];if(s!==-1){let o=n.data[s];M8(r),o.contentQueries(2,e[s],s)}}}function H2(n,e){return n[$a]?n[r6][si]=e:n[$a]=e,n[r6]=e,e}function Ef(n,e,t){M8(0);let i=Gn(null);try{e(n,t)}finally{Gn(i)}}function YM(n){return n[Wa]||(n[Wa]=[])}function KM(n){return n.cleanup||(n.cleanup=[])}function Gp(n,e){let t=n[fo],i=t?t.get(Ei,null):null;i&&i.handleError(e)}function M4(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=e[o],l=n.data[o];Up(l,c,i,a,r)}}function JM(n,e,t){let i=d8(e,n);mx(n[Bt],i,t)}function QM(n,e){let t=xr(e,n),i=t[Ye];eC(i,t);let r=t[Hi];r!==null&&t[r2]===null&&(t[r2]=_4(r,t[fo])),C4(i,t,t[Ci])}function eC(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function C4(n,e,t){Qf(e);try{let i=n.viewQuery;i!==null&&Ef(1,i,t);let r=n.template;r!==null&&Rp(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),n.staticContentQueries&&Bp(n,e),n.staticViewQueries&&Ef(2,n.viewQuery,t);let s=n.components;s!==null&&tC(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[rt]&=-5,e4()}}function tC(n,e){for(let t=0;t<e.length;t++)QM(n,e[t])}var nC=(()=>{let e=class e{constructor(){this.all=new Set,this.queue=new Map}create(i,r,s){let o=typeof Zone>"u"?null:Zone.current,a=vb(i,u=>{this.all.has(u)&&this.queue.set(u,o)},s);this.all.add(a),a.notify();let c,l=()=>{a.cleanup(),c?.(),this.all.delete(a),this.queue.delete(a)};return c=r?.onDestroy(l),{destroy:l}}flush(){if(this.queue.size!==0)for(let[i,r]of this.queue)this.queue.delete(i),r?r.run(()=>i.run()):i.run()}get isQueueEmpty(){return this.queue.size===0}};e.\u0275prov=fe({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function Af(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=X5(r,a);else if(s==2){let c=a,l=e[++o];i=X5(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function _2(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(Si(s)),Bi(s)&&iC(s,i);let o=t.type;if(o&8)_2(n,e,t.child,i);else if(o&32){let a=c4(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=J8(e,t);if(Array.isArray(a))i.push(...a);else{let c=l4(e[oi]);_2(c[Ye],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function iC(n,e){for(let t=Hn;t<n.length;t++){let i=n[t],r=i[Ye].firstChild;r!==null&&_2(i[Ye],i,r,e)}n[cs]!==n[Hi]&&e.push(n[cs])}function jp(n,e,t,i=!0){let r=e[ho],s=r.rendererFactory,o=r.afterRenderEventManager,a=!1;a||(s.begin?.(),o?.begin());try{Wp(n,e,n.template,t)}catch(c){throw i&&Gp(e,c),c}finally{a||(s.end?.(),r.effectManager?.flush(),o?.end())}}function Wp(n,e,t,i){let r=e[rt];if((r&256)===256)return;let s=!1;!s&&e[ho].effectManager?.flush(),Qf(e);try{p8(e),zb(n.bindingStartIndex),t!==null&&Rp(n,e,t,2,i);let o=(r&3)===3;if(!s)if(o){let l=n.preOrderCheckHooks;l!==null&&Kc(e,l,null)}else{let l=n.preOrderHooks;l!==null&&Jc(e,l,0,null),z3(e,0)}if(rC(e),$p(e,2),n.contentQueries!==null&&Bp(n,e),!s)if(o){let l=n.contentCheckHooks;l!==null&&Kc(e,l)}else{let l=n.contentHooks;l!==null&&Jc(e,l,1),z3(e,1)}EM(n,e);let a=n.components;a!==null&&Xp(e,a,0);let c=n.viewQuery;if(c!==null&&Ef(2,c,i),!s)if(o){let l=n.viewCheckHooks;l!==null&&Kc(e,l)}else{let l=n.viewHooks;l!==null&&Jc(e,l,2),z3(e,2)}n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),s||(e[rt]&=-73),m8(e)}finally{e4()}}function $p(n,e){for(let t=G8(n);t!==null;t=j8(t))for(let i=Hn;i<t.length;i++){let r=t[i];qp(r,e)}}function rC(n){for(let e=G8(n);e!==null;e=j8(e)){if(!e[i8])continue;let t=e[o2];for(let i=0;i<t.length;i++){let r=t[i],s=r[Ht];Ab(r)}}}function sC(n,e,t){let i=xr(e,n);qp(i,t)}function qp(n,e){if(!wb(n))return;let t=n[Ye],i=n[rt];if(i&80&&e===0||i&1024||e===2)Wp(t,n,t.template,n[Ci]);else if(n[Fa]>0){$p(n,1);let r=t.components;r!==null&&Xp(n,r,1)}}function Xp(n,e,t){for(let i=0;i<e.length;i++)sC(n,e[i],t)}var hs=class{get rootNodes(){let e=this._lView,t=e[Ye];return _2(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[Ci]}set context(e){this._lView[Ci]=e}get destroyed(){return(this._lView[rt]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Ht];if(Bi(e)){let t=e[s2],i=t?t.indexOf(this):-1;i>-1&&(af(e,i),h2(t,i))}this._attachedToViewContainer=!1}X8(this._lView[Ye],this._lView)}onDestroy(e){Tb(this._lView,e)}markForCheck(){V2(this._cdRefInjectingView||this._lView)}detach(){this._lView[rt]&=-129}reattach(){this._lView[rt]|=128}detectChanges(){jp(this._lView[Ye],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Q(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,yx(this._lView[Ye],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Q(902,!1);this._appRef=e}},Tf=class extends hs{constructor(e){super(e),this._view=e}detectChanges(){let e=this._view,t=e[Ye],i=e[Ci];jp(t,e,i,!1)}checkNoChanges(){}get context(){return null}},b2=class extends F2{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=as(e);return new Xa(t,this.ngModule)}};function S6(n){let e=[];for(let t in n)if(n.hasOwnProperty(t)){let i=n[t];e.push({propName:i,templateName:t})}return e}function oC(n){let e=n.toLowerCase();return e==="svg"?Mb:e==="math"?Cb:null}var Df=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=A2(i);let r=this.injector.get(e,H3,i);return r!==H3||t===H3?r:this.parentInjector.get(e,t,i)}},Xa=class extends v2{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=S6(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return S6(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=sb(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){r=r||this.ngModule;let s=r instanceof En?r:r?.injector;s&&this.componentDef.getStandaloneInjector!==null&&(s=this.componentDef.getStandaloneInjector(s)||s);let o=s?new Df(e,s):e,a=o.get(wi,null);if(a===null)throw new Q(407,!1);let c=o.get(mM,null),l=o.get(nC,null),u=o.get(CM,null),f={rendererFactory:a,sanitizer:c,effectManager:l,afterRenderEventManager:u},d=a.createRenderer(null,this.componentDef),p=this.componentDef.selectors[0][0]||"div",g=i?DM(d,i,this.componentDef.encapsulation,o):$8(d,p,oC(p)),v=4608,m=this.componentDef.onPush?576:528,h=this.componentDef.signals?v:m,M=null;g!==null&&(M=_4(g,o,!0));let _=x4(0,null,null,1,0,null,null,null,null,null,null),C=U2(null,_,null,h,null,null,f,d,o,null,M);Qf(C);let D,A;try{let E=this.componentDef,q,b=null;E.findHostDirectiveDefs?(q=[],b=new Map,E.findHostDirectiveDefs(E,q,b),q.push(E)):q=[E];let w=aC(C,g),j=cC(w,g,E,q,C,f,d);A=h8(_,ai),g&&fC(d,E,g,i),t!==void 0&&dC(A,this.ngContentSelectors,t),D=uC(j,E,q,b,C,[hC]),C4(_,C,null)}finally{e4()}return new If(this.componentType,D,k2(A,C),C,A)}},If=class extends xf{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new Tf(r),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;M4(s[Ye],s,r,e,t),this.previousInputValues.set(e,t);let o=xr(this._tNode.index,s);V2(o)}}get injector(){return new os(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function aC(n,e){let t=n[Ye],i=ai;return n[i]=e,s1(t,i,2,"#host",null)}function cC(n,e,t,i,r,s,o){let a=r[Ye];lC(i,n,e,o);let c=null;e!==null&&(c=_4(e,r[fo]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let f=U2(r,Op(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&wf(a,n,i.length-1),H2(r,f),r[n.index]=f}function lC(n,e,t,i){for(let r of n)e.mergedAttrs=ja(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(Af(e,e.mergedAttrs,!0),t!==null&&tp(i,t,e))}function uC(n,e,t,i,r,s){let o=$n(),a=r[Ye],c=Wn(o,r);kp(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let f=o.directiveStart+u,d=po(r,a,f,o);ds(d,r)}Vp(a,r,o),c&&ds(c,r);let l=po(r,a,o.directiveStart+o.componentOffset,o);if(n[Ci]=r[Ci]=l,s!==null)for(let u of s)u(l,e);return Np(a,o,n),l}function fC(n,e,t,i){if(i)Q3(n,t,["ng-version",gM.full]);else{let{attrs:r,classes:s}=ob(e.selectors[0]);r&&Q3(n,t,r),s&&s.length>0&&ep(n,t,s.join(" "))}}function dC(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function hC(){let n=$n();r4(bt()[Ye],n)}function pC(n){return Object.getPrototypeOf(n.prototype).constructor}function ci(n){let e=pC(n.type),t=!0,i=[n];for(;e;){let r;if(yr(n))r=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new Q(903,!1);r=e.\u0275dir}if(r){if(t){i.push(r);let o=n;o.inputs=Zc(n.inputs),o.inputTransforms=Zc(n.inputTransforms),o.declaredInputs=Zc(n.declaredInputs),o.outputs=Zc(n.outputs);let a=r.hostBindings;a&&yC(n,a);let c=r.viewQuery,l=r.contentQueries;if(c&&gC(n,c),l&&vC(n,l),jc(n.inputs,r.inputs),jc(n.declaredInputs,r.declaredInputs),jc(n.outputs,r.outputs),r.inputTransforms!==null&&(o.inputTransforms===null&&(o.inputTransforms={}),jc(o.inputTransforms,r.inputTransforms)),yr(r)&&r.data.animation){let u=n.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let s=r.features;if(s)for(let o=0;o<s.length;o++){let a=s[o];a&&a.ngInherit&&a(n),a===ci&&(t=!1)}}e=Object.getPrototypeOf(e)}mC(i)}function mC(n){let e=0,t=null;for(let i=n.length-1;i>=0;i--){let r=n[i];r.hostVars=e+=r.hostVars,r.hostAttrs=ja(r.hostAttrs,t=ja(t,r.hostAttrs))}}function Zc(n){return n===uo?{}:n===Un?[]:n}function gC(n,e){let t=n.viewQuery;t?n.viewQuery=(i,r)=>{e(i,r),t(i,r)}:n.viewQuery=e}function vC(n,e){let t=n.contentQueries;t?n.contentQueries=(i,r,s)=>{e(i,r,s),t(i,r,s)}:n.contentQueries=e}function yC(n,e){let t=n.hostBindings;t?n.hostBindings=(i,r)=>{e(i,r),t(i,r)}:n.hostBindings=e}function Zp(n){return S4(n)?Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n:!1}function _C(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{let t=n[Symbol.iterator](),i;for(;!(i=t.next()).done;)e(i.value)}}function S4(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function bC(n,e,t){return n[e]=t}function xo(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function Cr(n,e,t,i){let r=bt(),s=R2();if(xo(r,s,e)){let o=An(),a=t4();$M(a,r,n,e,t,i)}return Cr}function xC(n,e,t,i){return xo(n,R2(),t)?e+w2(t)+i:gs}var _j=new RegExp(`^(\\d+)*(${lM}|${cM})*(.*)`);function MC(n,e,t,i,r,s,o,a,c){let l=e.consts,u=s1(e,n,4,o||null,c2(l,a));Fp(e,t,u,c2(l,c)),r4(e,u);let f=u.tView=x4(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),f.queries=e.queries.embeddedTView(u)),u}function o1(n,e,t,i,r,s,o,a){let c=bt(),l=An(),u=n+ai,f=l.firstCreatePass?MC(u,l,c,e,t,i,r,s,o):l.data[u];Qa(f,!1);let d=CC(l,c,f,n);n4()&&f4(l,c,d,f),ds(d,c),H2(c,c[u]=Hp(d,c,d,f)),qf(f)&&Pp(l,c,f),o!=null&&Lp(c,f,a)}var CC=SC;function SC(n,e,t,i){return i4(!0),e[Bt].createComment("")}function wC(n,e,t,i){t>=n.data.length&&(n.data[t]=null,n.blueprint[t]=null),e[t]=i}function qt(n,e,t){let i=bt(),r=R2();if(xo(i,r,e)){let s=An(),o=t4();zp(s,o,i,n,e,i[Bt],t,!1)}return qt}function w6(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";M4(n,t,s[o],o,i)}function EC(n,e,t,i,r,s){let o=e.consts,a=c2(o,r),c=s1(e,n,2,i,a);return Fp(e,t,c,c2(o,s)),c.attrs!==null&&Af(c,c.attrs,!1),c.mergedAttrs!==null&&Af(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function st(n,e,t,i){let r=bt(),s=An(),o=ai+n,a=r[Bt],c=s.firstCreatePass?EC(o,s,r,e,t,i):s.data[o],l=AC(s,r,c,a,e,n);r[o]=l;let u=qf(c);return Qa(c,!0),tp(a,l,c),(c.flags&32)!==32&&n4()&&f4(s,r,l,c),Db()===0&&ds(l,r),Ib(),u&&(Pp(s,r,c),Np(s,c,r)),i!==null&&Lp(r,c),st}function ot(){let n=$n();b8()?x8():(n=n.parent,Qa(n,!1));let e=n;Nb(e)&&Pb(),Rb();let t=An();return t.firstCreatePass&&(r4(t,n),r8(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&qb(e)&&w6(t,e,bt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&Xb(e)&&w6(t,e,bt(),e.stylesWithoutHost,!1),ot}function _n(n,e,t,i){return st(n,e,t,i),ot(),_n}var AC=(n,e,t,i,r,s)=>(i4(!0),$8(i,r,Gb()));function Sr(n){return!!n&&typeof n.then=="function"}function w4(n){return!!n&&typeof n.subscribe=="function"}function qn(n,e,t,i){let r=bt(),s=An(),o=$n();return DC(s,r,r[Bt],o,n,e,i),qn}function TC(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[Wa],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function DC(n,e,t,i,r,s,o){let a=qf(i),l=n.firstCreatePass&&KM(n),u=e[Ci],f=YM(e),d=!0;if(i.type&3||o){let v=Wn(i,e),m=o?o(v):v,h=f.length,M=o?C=>o(Si(C[i.index])):i.index,_=null;if(!o&&a&&(_=TC(n,e,r,i.index)),_!==null){let C=_.__ngLastListenerFn__||_;C.__ngNextListenerFn__=s,_.__ngLastListenerFn__=s,d=!1}else{s=A6(i,e,u,s,!1);let C=t.listen(m,r,s);f.push(s,C),l&&l.push(r,M,h,h+1)}}else s=A6(i,e,u,s,!1);let p=i.outputs,g;if(d&&p!==null&&(g=p[r])){let v=g.length;if(v)for(let m=0;m<v;m+=2){let h=g[m],M=g[m+1],D=e[h][M].subscribe(s),A=f.length;f.push(s,D),l&&l.push(r,i.index,A,-(A+1))}}}function E6(n,e,t,i){try{return xi(6,e,t),t(i)!==!1}catch(r){return Gp(n,r),!1}finally{xi(7,e,t)}}function A6(n,e,t,i,r){return function s(o){if(o===Function)return i;let a=n.componentOffset>-1?xr(n.index,e):e;V2(a);let c=E6(e,t,i,o),l=s.__ngNextListenerFn__;for(;l;)c=E6(e,t,l,o)&&c,l=l.__ngNextListenerFn__;return r&&c===!1&&o.preventDefault(),c}}function IC(n,e){let t=null,i=eb(n);for(let r=0;r<e.length;r++){let s=e[r];if(s==="*"){t=r;continue}if(i===null?q6(n,s,!0):ib(i,s))return r}return t}function B2(n){let e=bt()[oi][Nn];if(!e.projection){let t=n?n.length:1,i=e.projection=H8(t,null),r=i.slice(),s=e.child;for(;s!==null;){let o=n?IC(s,n):0;o!==null&&(r[o]?r[o].projectionNext=s:i[o]=s,r[o]=s),s=s.next}}}function G2(n,e=0,t){let i=bt(),r=An(),s=s1(r,ai+n,16,null,t||null);s.projection===null&&(s.projection=e),x8(),(!i[r2]||y8())&&(s.flags&32)!==32&&Ix(r,i,s)}function Yc(n,e){return n<<17|e<<2}function ps(n){return n>>17&32767}function RC(n){return(n&2)==2}function NC(n,e){return n&131071|e<<17}function Rf(n){return n|2}function go(n){return(n&131068)>>2}function j3(n,e){return n&-131069|e<<2}function PC(n){return(n&1)===1}function Nf(n){return n|1}function LC(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=ps(o),c=go(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let f=t;u=f[1],(u===null||e1(f,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let d=ps(n[a+1]);n[i+1]=Yc(d,a),d!==0&&(n[d+1]=j3(n[d+1],i)),n[a+1]=NC(n[a+1],i)}else n[i+1]=Yc(a,0),a!==0&&(n[a+1]=j3(n[a+1],i)),a=i;else n[i+1]=Yc(c,0),a===0?a=i:n[c+1]=j3(n[c+1],i),c=i;l&&(n[i+1]=Rf(n[i+1])),T6(n,u,i,!0,s),T6(n,u,i,!1,s),OC(e,u,n,i,s),o=Yc(a,c),s?e.classBindings=o:e.styleBindings=o}function OC(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&e1(s,e)>=0&&(t[i+1]=Nf(t[i+1]))}function T6(n,e,t,i,r){let s=n[t+1],o=e===null,a=i?ps(s):go(s),c=!1;for(;a!==0&&(c===!1||o);){let l=n[a],u=n[a+1];zC(l,e)&&(c=!0,n[a+1]=i?Nf(u):Rf(u)),a=i?ps(u):go(u)}c&&(n[t+1]=i?Rf(s):Nf(s))}function zC(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?e1(n,e)>=0:!1}function vs(n,e){return FC(n,e,null,!0),vs}function FC(n,e,t,i){let r=bt(),s=An(),o=Fb(2);if(s.firstUpdatePass&&VC(s,n,o,i),e!==gs&&xo(r,o,e)){let a=s.data[yo()];jC(s,a,r,r[Bt],n,r[o+1]=WC(e,t),i,o)}}function kC(n,e){return e>=n.expandoStartIndex}function VC(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[yo()],o=kC(n,t);$C(s,i)&&e===null&&!o&&(e=!1),e=UC(r,s,e,i),LC(r,s,e,t,o,i)}}function UC(n,e,t,i){let r=Hb(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=W3(null,n,e,t,i),t=Za(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=W3(r,n,e,t,i),s===null){let c=HC(n,e,i);c!==void 0&&Array.isArray(c)&&(c=W3(null,n,e,c[1],i),c=Za(c,e.attrs,i),BC(n,e,i,c))}else s=GC(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function HC(n,e,t){let i=t?e.classBindings:e.styleBindings;if(go(i)!==0)return n[ps(i)]}function BC(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[ps(r)]=i}function GC(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=Za(i,o,t)}return Za(i,e.attrs,t)}function W3(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=Za(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function Za(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),ax(n,o,t?!0:e[++s]))}return n===void 0?null:n}function jC(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=PC(l)?D6(c,e,t,r,go(l),o):void 0;if(!x2(u)){x2(s)||RC(l)&&(s=D6(c,null,t,r,a,o));let f=d8(yo(),t);Nx(i,o,f,r,s)}}function D6(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,f=u===null,d=t[r+1];d===gs&&(d=f?Un:void 0);let p=f?k3(d,i):u===i?d:void 0;if(l&&!x2(p)&&(p=k3(c,i)),x2(p)&&(a=p,o))return a;let g=n[r+1];r=o?ps(g):go(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=k3(c,i))}return a}function x2(n){return n!==void 0}function WC(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=yn(Gi(n)))),n}function $C(n,e){return(n.flags&(e?8:16))!==0}function Gt(n,e=""){let t=bt(),i=An(),r=n+ai,s=i.firstCreatePass?s1(i,r,1,e,null):i.data[r],o=qC(i,t,s,e,n);t[r]=o,n4()&&f4(i,t,o,s),Qa(s,!1)}var qC=(n,e,t,i,r)=>(i4(!0),px(e[Bt],i));function qi(n){return E4("",n,""),qi}function E4(n,e,t){let i=bt(),r=xC(i,n,e,t);return r!==gs&&JM(i,yo(),r),E4}function j2(n,e,t){let i=bt(),r=R2();if(xo(i,r,e)){let s=An(),o=t4();zp(s,o,i,n,e,i[Bt],t,!0)}return j2}var M2="en-US";var XC=M2;function ZC(n){R_(n,"Expected localeId to be defined"),typeof n=="string"&&(XC=n.toLowerCase().replace(/_/g,"-"))}function YC(n,e,t){let i=An();if(i.firstCreatePass){let r=yr(n);Pf(t,i.data,i.blueprint,r,!0),Pf(e,i.data,i.blueprint,r,!1)}}function Pf(n,e,t,i,r){if(n=vn(n),Array.isArray(n))for(let s=0;s<n.length;s++)Pf(n[s],e,t,i,r);else{let s=An(),o=bt(),a=$n(),c=mo(n)?n:vn(n.provide),l=_p(n),u=a.providerIndexes&1048575,f=a.directiveStart,d=a.providerIndexes>>20;if(mo(n)||!n.multi){let p=new fs(l,r,we),g=q3(c,e,r?u:u+d,f);g===-1?(rf(d2(a,o),s,c),$3(s,n,e.length),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(p),o.push(p)):(t[g]=p,o[g]=p)}else{let p=q3(c,e,u+d,f),g=q3(c,e,u,u+d),v=p>=0&&t[p],m=g>=0&&t[g];if(r&&!m||!r&&!v){rf(d2(a,o),s,c);let h=QC(r?JC:KC,t.length,r,i,l);!r&&m&&(t[g].providerFactory=h),$3(s,n,e.length,0),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(h),o.push(h)}else{let h=Yp(t[r?g:p],l,!r&&i);$3(s,n,p>-1?p:g,h)}!r&&i&&m&&t[g].componentProviders++}}}function $3(n,e,t,i){let r=mo(e),s=eM(e);if(r||s){let c=(s?vn(e.useClass):e).prototype.ngOnDestroy;if(c){let l=n.destroyHooks||(n.destroyHooks=[]);if(!r&&e.multi){let u=l.indexOf(t);u===-1?l.push(t,[i,c]):l[u+1].push(i,c)}else l.push(t,c)}}}function Yp(n,e,t){return t&&n.componentProviders++,n.multi.push(e)-1}function q3(n,e,t,i){for(let r=t;r<i;r++)if(e[r]===n)return r;return-1}function KC(n,e,t,i){return Lf(this.multi,[])}function JC(n,e,t,i){let r=this.multi,s;if(this.providerFactory){let o=this.providerFactory.componentProviders,a=po(t,t[Ye],this.providerFactory.index,i);s=a.slice(0,o),Lf(r,s);for(let c=o;c<a.length;c++)s.push(a[c])}else s=[],Lf(r,s);return s}function Lf(n,e){for(let t=0;t<n.length;t++){let i=n[t];e.push(i())}return e}function QC(n,e,t,i,r){let s=new fs(n,t,we);return s.multi=[],s.index=e,s.componentProviders=0,Yp(s,r,i&&!t),s}function wr(n,e=[]){return t=>{t.providersResolver=(i,r)=>YC(i,r?r(n):n,e)}}var br=class{},Ya=class{};var Of=class extends br{constructor(e,t,i){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new b2(this);let r=J6(e);this._bootstrapComponents=Cp(r.bootstrap),this._r3Injector=bp(e,t,[{provide:br,useValue:this},{provide:F2,useValue:this.componentFactoryResolver},...i],yn(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},zf=class extends Ya{constructor(e){super(),this.moduleType=e}create(e){return new Of(this.moduleType,e,[])}};var C2=class extends br{constructor(e){super(),this.componentFactoryResolver=new b2(this),this.instance=null;let t=new g2([...e.providers,{provide:br,useValue:this},{provide:F2,useValue:this.componentFactoryResolver}],e.parent||v4(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function A4(n,e,t=null){return new C2({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var eS=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let r=gp(!1,i.type),s=r.length>0?A4([r],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,s)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=fe({token:e,providedIn:"environment",factory:()=>new e(se(En))});let n=e;return n})();function en(n){n.getStandaloneInjector=e=>e.get(eS).getOrCreateStandaloneInjector(n)}function tS(n,e){let t=n[e];return t===gs?void 0:t}function nS(n,e,t,i,r,s){let o=e+t;return xo(n,o,r)?bC(n,o+1,s?i.call(s,r):i(r)):tS(n,o+1)}function Mo(n,e){let t=An(),i,r=n+ai;t.firstCreatePass?(i=iS(e,t.pipeRegistry),t.data[r]=i,i.onDestroy&&(t.destroyHooks??=[]).push(r,i.onDestroy)):i=t.data[r];let s=i.factory||(i.factory=ls(i.type,!0)),o,a=Vn(we);try{let c=f2(!1),l=s();return f2(c),wC(t,bt(),r,l),l}finally{Vn(a)}}function iS(n,e){if(e)for(let t=e.length-1;t>=0;t--){let i=e[t];if(n===i.name)return i}}function Co(n,e,t){let i=n+ai,r=bt(),s=Sb(r,i);return rS(r,i)?nS(r,Ob(),e,s.transform,t,s):s.transform(t)}function rS(n,e){return n[Ye].data[e].pure}function sS(n,e,t,i){let r=e.tView,o=n[rt]&4096?4096:16,a=U2(n,r,t,o,null,e,null,null,null,i?.injector??null,i?.hydrationInfo??null),c=n[e.index];a[T2]=c;let l=n[qa];return l!==null&&(a[qa]=l.createEmbeddedView(r)),C4(r,a,t),a}function oS(n,e,t,i=!0){let r=e[Ye];if(bx(r,e,n,t),i){let s=cf(t,n),o=e[Bt],a=u4(o,n[cs]);a!==null&&vx(r,n[Nn],o,e,a,s)}}var T4=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=lS;let n=e;return n})(),aS=T4,cS=class extends aS{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=sS(this._declarationLView,this._declarationTContainer,e,{injector:t,hydrationInfo:i});return new hs(r)}};function lS(){return uS($n(),bt())}function uS(n,e){return n.type&4?new cS(e,n,k2(n,e)):null}var fS=(n,e)=>null;function I6(n,e){return fS(n,e)}var a1=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=dS;let n=e;return n})();function dS(){let n=$n();return pS(n,bt())}var hS=a1,Kp=class extends hS{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return k2(this._hostTNode,this._hostLView)}get injector(){return new os(this._hostTNode,this._hostLView)}get parentInjector(){let e=s4(this._hostTNode,this._hostLView);if(I8(e)){let t=u2(e,this._hostLView),i=l2(e),r=t[Ye].data[i+8];return new os(r,t)}else return new os(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=R6(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Hn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=I6(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o),c=!!o&&!of(this._hostTNode);return this.insertImpl(a,r,c),a}createComponent(e,t,i,r,s){let o=e&&!sx(e),a;if(o)a=t;else{let v=t||{};a=v.index,i=v.injector,r=v.projectableNodes,s=v.environmentInjector||v.ngModuleRef}let c=o?e:new Xa(as(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let m=(o?l:this.parentInjector).get(En,null);m&&(s=m)}let u=as(c.componentType??{}),f=I6(this._lContainer,u?.id??null),d=f?.firstChild??null,p=c.create(l,r,d,s),g=!!f&&!of(this._hostTNode);return this.insertImpl(p.hostView,a,g),p}insert(e,t){return this.insertImpl(e,t,!1)}insertImpl(e,t,i){let r=e._lView,s=r[Ye];if(Eb(r)){let c=this.indexOf(e);if(c!==-1)this.detach(c);else{let l=r[Ht],u=new Kp(l,l[Nn],l[Ht]);u.detach(u.indexOf(e))}}let o=this._adjustIndex(t),a=this._lContainer;return oS(a,r,o,!i),e.attachToViewContainerRef(),U8(X3(a),o,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=R6(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=af(this._lContainer,t);i&&(h2(X3(this._lContainer),t),X8(i[Ye],i))}detach(e){let t=this._adjustIndex(e,-1),i=af(this._lContainer,t);return i&&h2(X3(this._lContainer),t)!=null?new hs(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function R6(n){return n[s2]}function X3(n){return n[s2]||(n[s2]=[])}function pS(n,e){let t,i=e[n.index];return Bi(i)?t=i:(t=Hp(i,e,null,n),e[n.index]=t,H2(e,t)),gS(t,e,n,i),new Kp(t,n,e)}function mS(n,e){let t=n[Bt],i=t.createComment(""),r=Wn(e,n),s=u4(t,r);return p2(t,s,i,Ex(t,r),!1),i}var gS=vS;function vS(n,e,t,i){if(n[cs])return;let r;t.type&8?r=Si(i):r=mS(e,t),n[cs]=r}var Jp=new Se("Application Initializer"),Qp=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r}),this.appInits=ye(Jp,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let s of this.appInits){let o=s();if(Sr(o))i.push(o);else if(w4(o)){let a=new Promise((c,l)=>{o.subscribe({complete:c,error:l})});i.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{r()}).catch(s=>{this.reject(s)}),i.length===0&&r(),this.initialized=!0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),W2=(()=>{let e=class e{log(i){console.log(i)}warn(i){console.warn(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})();function yS(){return typeof $localize<"u"&&$localize.locale||M2}var $2=new Se("LocaleId",{providedIn:"root",factory:()=>ye($2,et.Optional|et.SkipSelf)||yS()});var So=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new rn(!1)}add(){this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Ff=class{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},D4=(()=>{let e=class e{compileModuleSync(i){return new zf(i)}compileModuleAsync(i){return Promise.resolve(this.compileModuleSync(i))}compileModuleAndAllComponentsSync(i){let r=this.compileModuleSync(i),s=J6(i),o=Cp(s.declarations).reduce((a,c)=>{let l=as(c);return l&&a.push(new Xa(l)),a},[]);return new Ff(r,o)}compileModuleAndAllComponentsAsync(i){return Promise.resolve(this.compileModuleAndAllComponentsSync(i))}clearCache(){}clearCacheFor(i){}getModuleId(i){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var e7=new Se("");var t2=null;var t7=new Se("PlatformDestroyListeners"),q2=new Se("appBootstrapListener");function _S(){gb(()=>{throw new Q(600,!1)})}function bS(n){return n.isBoundToModule}function xS(n=[]){if(t2)return t2;let e=CS(n);return t2=e,_S(),MS(e),e}function MS(n){n.get(y4,null)?.forEach(t=>t())}function n7(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=xS(i),s=[DS(),...t||[]],a=new C2({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1}).injector,c=a.get(lt);return c.run(()=>{a.resolveInjectorInitializers();let l=a.get(Ei,null),u;c.runOutsideAngular(()=>{u=c.onError.subscribe({next:p=>{l.handleError(p)}})});let f=()=>a.destroy(),d=r.get(t7);return d.add(f),a.onDestroy(()=>{u.unsubscribe(),d.delete(f)}),wS(l,c,()=>{let p=a.get(Qp);return p.runInitializers(),p.donePromise.then(()=>{let g=a.get($2,M2);ZC(g||M2);let v=a.get(Er);return e!==void 0&&v.bootstrap(e),v})})})}catch(e){return Promise.reject(e)}}function CS(n=[],e){return Mr.create({name:e,providers:[{provide:L2,useValue:"platform"},{provide:t7,useValue:new Set([()=>t2=null])},...n]})}function SS(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}function wS(n,e,t){try{let i=t();return Sr(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var Er=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=ye(i7),this.zoneIsStable=ye(xp),this.componentTypes=[],this.components=[],this.isStable=ye(So).hasPendingTasks.pipe(wn(i=>i?Oe(!1):this.zoneIsStable),I3(),Gc()),this._injector=ye(En)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,r){let s=i instanceof v2;if(!this._injector.get(Qp).done){let g="Cannot bootstrap as there are still asynchronous initializers running."+(!s&&K6(i)?"":" Bootstrap components in the `ngDoBootstrap` method of the root module.");throw new Q(405,!1)}let a;s?a=i:a=this._injector.get(F2).resolveComponentFactory(i),this.componentTypes.push(a.componentType);let c=bS(a)?void 0:this._injector.get(br),l=r||a.selector,u=a.create(Mr.NULL,[],l,c),f=u.location.nativeElement,d=u.injector.get(e7,null);return d?.registerApplication(f),u.onDestroy(()=>{this.detachView(u.hostView),Z3(this.components,u),d?.unregisterApplication(f)}),this._loadComponent(u),u}tick(){if(this._runningTick)throw new Q(101,!1);try{this._runningTick=!0;for(let i of this._views)i.detectChanges()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1}}attachView(i){let r=i;this._views.push(r),r.attachToAppRef(this)}detachView(i){let r=i;Z3(this._views,r),r.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let r=this._injector.get(q2,[]);r.push(...this._bootstrapListeners),r.forEach(s=>s(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>Z3(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new Q(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Z3(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var i7=new Se("",{providedIn:"root",factory:()=>ye(Ei).handleError.bind(void 0)});function ES(){let n=ye(lt),e=ye(Ei);return t=>n.runOutsideAngular(()=>e.handleError(t))}var AS=(()=>{let e=class e{constructor(){this.zone=ye(lt),this.applicationRef=ye(Er)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function TS(n){return[{provide:lt,useFactory:n},{provide:i1,multi:!0,useFactory:()=>{let e=ye(AS,{optional:!0});return()=>e.initialize()}},{provide:i7,useFactory:ES},{provide:xp,useFactory:Mp}]}function DS(n){let e=TS(()=>new lt(SS(n)));return bo([[],e])}var ys=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=IS;let n=e;return n})();function IS(n){return RS($n(),bt(),(n&16)===16)}function RS(n,e,t){if(I2(n)&&!t){let i=xr(n.index,e);return new hs(i,i)}else if(n.type&47){let i=e[oi];return new hs(i,e)}return null}var kf=class{constructor(){}supports(e){return Zp(e)}create(e){return new Vf(e)}},NS=(n,e)=>e,Vf=class{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||NS}forEachItem(e){let t;for(t=this._itHead;t!==null;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,i=this._removalsHead,r=0,s=null;for(;t||i;){let o=!i||t&&t.currentIndex<N6(i,r,s)?t:i,a=N6(o,r,s),c=o.currentIndex;if(o===i)r--,i=i._nextRemoved;else if(t=t._next,o.previousIndex==null)r++;else{s||(s=[]);let l=a-r,u=c-r;if(l!=u){for(let d=0;d<l;d++){let p=d<s.length?s[d]:s[d]=0,g=p+d;u<=g&&g<l&&(s[d]=p+1)}let f=o.previousIndex;s[f]=u-l}}a!==c&&e(o,a,c)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)e(t)}diff(e){if(e==null&&(e=[]),!Zp(e))throw new Q(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._itHead,i=!1,r,s,o;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],o=this._trackByFn(a,s),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,s,o,a),i=!0):(i&&(t=this._verifyReinsertion(t,s,o,a)),Object.is(t.item,s)||this._addIdentityChange(t,s)),t=t._next}else r=0,_C(e,a=>{o=this._trackByFn(r,a),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,a,o,r),i=!0):(i&&(t=this._verifyReinsertion(t,a,o,r)),Object.is(t.item,a)||this._addIdentityChange(t,a)),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,i,r){let s;return e===null?s=this._itTail:(s=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,s,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,s,r)):e=this._addAfter(new Uf(t,i),s,r)),e}_verifyReinsertion(e,t,i,r){let s=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return s!==null?e=this._reinsertAfter(s,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let t=e._next;this._addToRemovals(this._unlink(e)),e=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,s=e._nextRemoved;return r===null?this._removalsHead=s:r._nextRemoved=s,s===null?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(e,t,i),this._addToMoves(e,i),e}_moveAfter(e,t,i){return this._unlink(e),this._insertAfter(e,t,i),this._addToMoves(e,i),e}_addAfter(e,t,i){return this._insertAfter(e,t,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,i){let r=t===null?this._itHead:t._next;return e._next=r,e._prev=t,r===null?this._itTail=e:r._prev=e,t===null?this._itHead=e:t._next=e,this._linkedRecords===null&&(this._linkedRecords=new S2),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let t=e._prev,i=e._next;return t===null?this._itHead=i:t._next=i,i===null?this._itTail=t:i._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new S2),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},Uf=class{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}},Hf=class{constructor(){this._head=null,this._tail=null}add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let i;for(i=this._head;i!==null;i=i._nextDup)if((t===null||t<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let t=e._prevDup,i=e._nextDup;return t===null?this._head=i:t._nextDup=i,i===null?this._tail=t:i._prevDup=t,this._head===null}},S2=class{constructor(){this.map=new Map}put(e){let t=e.trackById,i=this.map.get(t);i||(i=new Hf,this.map.set(t,i)),i.add(e)}get(e,t){let i=e,r=this.map.get(i);return r?r.get(e,t):null}remove(e){let t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function N6(n,e,t){let i=n.previousIndex;if(i===null)return i;let r=0;return t&&i<t.length&&(r=t[i]),i+e+r}var Bf=class{constructor(){}supports(e){return e instanceof Map||S4(e)}create(){return new Gf}},Gf=class{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(e){let t;for(t=this._mapHead;t!==null;t=t._next)e(t)}forEachPreviousItem(e){let t;for(t=this._previousMapHead;t!==null;t=t._nextPrevious)e(t)}forEachChangedItem(e){let t;for(t=this._changesHead;t!==null;t=t._nextChanged)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}diff(e){if(!e)e=new Map;else if(!(e instanceof Map||S4(e)))throw new Q(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._mapHead;if(this._appendAfter=null,this._forEach(e,(i,r)=>{if(t&&t.key===r)this._maybeAddToChanges(t,i),this._appendAfter=t,t=t._next;else{let s=this._getOrCreateRecordForKey(r,i);t=this._insertBeforeOrAppend(t,s)}}),t){t._prev&&(t._prev._next=null),this._removalsHead=t;for(let i=t;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,t){if(e){let i=e._prev;return t._next=e,t._prev=i,e._prev=t,i&&(i._next=t),e===this._mapHead&&(this._mapHead=t),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=t,t._prev=this._appendAfter):this._mapHead=t,this._appendAfter=t,null}_getOrCreateRecordForKey(e,t){if(this._records.has(e)){let r=this._records.get(e);this._maybeAddToChanges(r,t);let s=r._prev,o=r._next;return s&&(s._next=o),o&&(o._prev=s),r._next=null,r._prev=null,r}let i=new jf(e);return this._records.set(e,i),i.currentValue=t,this._addToAdditions(i),i}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;e!==null;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;e!=null;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,t){Object.is(t,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=t,this._addToChanges(e))}_addToAdditions(e){this._additionsHead===null?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){this._changesHead===null?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,t){e instanceof Map?e.forEach(t):Object.keys(e).forEach(i=>t(e[i],i))}},jf=class{constructor(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}};function P6(){return new X2([new kf])}var X2=(()=>{let e=class e{constructor(i){this.factories=i}static create(i,r){if(r!=null){let s=r.factories.slice();i=i.concat(s)}return new e(i)}static extend(i){return{provide:e,useFactory:r=>e.create(i,r||P6()),deps:[[e,new a4,new N2]]}}find(i){let r=this.factories.find(s=>s.supports(i));if(r!=null)return r;throw new Q(901,!1)}};e.\u0275prov=fe({token:e,providedIn:"root",factory:P6});let n=e;return n})();function L6(){return new I4([new Bf])}var I4=(()=>{let e=class e{constructor(i){this.factories=i}static create(i,r){if(r){let s=r.factories.slice();i=i.concat(s)}return new e(i)}static extend(i){return{provide:e,useFactory:r=>e.create(i,r||L6()),deps:[[e,new a4,new N2]]}}find(i){let r=this.factories.find(s=>s.supports(i));if(r)return r;throw new Q(901,!1)}};e.\u0275prov=fe({token:e,providedIn:"root",factory:L6});let n=e;return n})();var N4=null;function Xi(){return N4}function u7(n){N4||(N4=n)}var Z2=class{},It=new Se("DocumentToken"),f7=(()=>{let e=class e{historyGo(i){throw new Error("Not implemented")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:function(){return(()=>ye(LS))()},providedIn:"platform"});let n=e;return n})();var LS=(()=>{let e=class e extends f7{constructor(){super(),this._doc=ye(It),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Xi().getBaseHref(this._doc)}onPopState(i){let r=Xi().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",i,!1),()=>r.removeEventListener("popstate",i)}onHashChange(i){let r=Xi().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",i,!1),()=>r.removeEventListener("hashchange",i)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(i){this._location.pathname=i}pushState(i,r,s){this._history.pushState(i,r,s)}replaceState(i,r,s){this._history.replaceState(i,r,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(i=0){this._history.go(i)}getState(){return this._history.state}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:function(){return(()=>new e)()},providedIn:"platform"});let n=e;return n})();function d7(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function r7(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function _s(n){return n&&n[0]!=="?"?"?"+n:n}var Y2=(()=>{let e=class e{historyGo(i){throw new Error("Not implemented")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:function(){return(()=>ye(h7))()},providedIn:"root"});let n=e;return n})(),OS=new Se("appBaseHref"),h7=(()=>{let e=class e extends Y2{constructor(i,r){super(),this._platformLocation=i,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??ye(It).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}prepareExternalUrl(i){return d7(this._baseHref,i)}path(i=!1){let r=this._platformLocation.pathname+_s(this._platformLocation.search),s=this._platformLocation.hash;return s&&i?`${r}${s}`:r}pushState(i,r,s,o){let a=this.prepareExternalUrl(s+_s(o));this._platformLocation.pushState(i,r,a)}replaceState(i,r,s,o){let a=this.prepareExternalUrl(s+_s(o));this._platformLocation.replaceState(i,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(se(f7),se(OS,8))},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var z4=(()=>{let e=class e{constructor(i){this._subject=new Qt,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=i;let r=this._locationStrategy.getBaseHref();this._basePath=kS(r7(s7(r))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(i=!1){return this.normalize(this._locationStrategy.path(i))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(i,r=""){return this.path()==this.normalize(i+_s(r))}normalize(i){return e.stripTrailingSlash(FS(this._basePath,s7(i)))}prepareExternalUrl(i){return i&&i[0]!=="/"&&(i="/"+i),this._locationStrategy.prepareExternalUrl(i)}go(i,r="",s=null){this._locationStrategy.pushState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+_s(r)),s)}replaceState(i,r="",s=null){this._locationStrategy.replaceState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+_s(r)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(i=0){this._locationStrategy.historyGo?.(i)}onUrlChange(i){return this._urlChangeListeners.push(i),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)})),()=>{let r=this._urlChangeListeners.indexOf(i);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(i="",r){this._urlChangeListeners.forEach(s=>s(i,r))}subscribe(i,r,s){return this._subject.subscribe({next:i,error:r,complete:s})}};e.normalizeQueryParams=_s,e.joinWithSlash=d7,e.stripTrailingSlash=r7,e.\u0275fac=function(r){return new(r||e)(se(Y2))},e.\u0275prov=fe({token:e,factory:function(){return zS()},providedIn:"root"});let n=e;return n})();function zS(){return new z4(se(Y2))}function FS(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function s7(n){return n.replace(/\/index.html$/,"")}function kS(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function K2(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var R4=/\s+/,o7=[],Eo=(()=>{let e=class e{constructor(i,r,s,o){this._iterableDiffers=i,this._keyValueDiffers=r,this._ngEl=s,this._renderer=o,this.initialClasses=o7,this.stateMap=new Map}set klass(i){this.initialClasses=i!=null?i.trim().split(R4):o7}set ngClass(i){this.rawClass=typeof i=="string"?i.trim().split(R4):i}ngDoCheck(){for(let r of this.initialClasses)this._updateState(r,!0);let i=this.rawClass;if(Array.isArray(i)||i instanceof Set)for(let r of i)this._updateState(r,!0);else if(i!=null)for(let r of Object.keys(i))this._updateState(r,!!i[r]);this._applyStateDiff()}_updateState(i,r){let s=this.stateMap.get(i);s!==void 0?(s.enabled!==r&&(s.changed=!0,s.enabled=r),s.touched=!0):this.stateMap.set(i,{enabled:r,changed:!0,touched:!0})}_applyStateDiff(){for(let i of this.stateMap){let r=i[0],s=i[1];s.changed?(this._toggleClass(r,s.enabled),s.changed=!1):s.touched||(s.enabled&&this._toggleClass(r,!1),this.stateMap.delete(r)),s.touched=!1}}_toggleClass(i,r){i=i.trim(),i.length>0&&i.split(R4).forEach(s=>{r?this._renderer.addClass(this._ngEl.nativeElement,s):this._renderer.removeClass(this._ngEl.nativeElement,s)})}};e.\u0275fac=function(r){return new(r||e)(we(X2),we(I4),we(cn),we($i))},e.\u0275dir=$t({type:e,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0});let n=e;return n})();var P4=class{constructor(e,t,i,r){this.$implicit=e,this.ngForOf=t,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},p7=(()=>{let e=class e{set ngForOf(i){this._ngForOf=i,this._ngForOfDirty=!0}set ngForTrackBy(i){this._trackByFn=i}get ngForTrackBy(){return this._trackByFn}constructor(i,r,s){this._viewContainer=i,this._template=r,this._differs=s,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(i){i&&(this._template=i)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let i=this._ngForOf;if(!this._differ&&i)if(!1)try{}catch{}else this._differ=this._differs.find(i).create(this.ngForTrackBy)}if(this._differ){let i=this._differ.diff(this._ngForOf);i&&this._applyChanges(i)}}_applyChanges(i){let r=this._viewContainer;i.forEachOperation((s,o,a)=>{if(s.previousIndex==null)r.createEmbeddedView(this._template,new P4(s.item,this._ngForOf,-1,-1),a===null?void 0:a);else if(a==null)r.remove(o===null?void 0:o);else if(o!==null){let c=r.get(o);r.move(c,a),a7(c,s)}});for(let s=0,o=r.length;s<o;s++){let c=r.get(s).context;c.index=s,c.count=o,c.ngForOf=this._ngForOf}i.forEachIdentityChange(s=>{let o=r.get(s.currentIndex);a7(o,s)})}static ngTemplateContextGuard(i,r){return!0}};e.\u0275fac=function(r){return new(r||e)(we(a1),we(T4),we(X2))},e.\u0275dir=$t({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let n=e;return n})();function a7(n,e){n.context.$implicit=e.item}function VS(n,e){return new Q(2100,!1)}var L4=class{createSubscription(e,t){return Jf(()=>e.subscribe({next:t,error:i=>{throw i}}))}dispose(e){Jf(()=>e.unsubscribe())}},O4=class{createSubscription(e,t){return e.then(t,i=>{throw i})}dispose(e){}},US=new O4,HS=new L4,Ao=(()=>{let e=class e{constructor(i){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=i}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(i){return this._obj?i!==this._obj?(this._dispose(),this.transform(i)):this._latestValue:(i&&this._subscribe(i),this._latestValue)}_subscribe(i){this._obj=i,this._strategy=this._selectStrategy(i),this._subscription=this._strategy.createSubscription(i,r=>this._updateLatestValue(i,r))}_selectStrategy(i){if(Sr(i))return US;if(w4(i))return HS;throw VS(e,i)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(i,r){i===this._obj&&(this._latestValue=r,this._ref.markForCheck())}};e.\u0275fac=function(r){return new(r||e)(we(ys,16))},e.\u0275pipe=X6({name:"async",type:e,pure:!1,standalone:!0});let n=e;return n})();var Ti=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Lt({type:e}),e.\u0275inj=Pt({});let n=e;return n})(),F4="browser",BS="server";function m7(n){return n===F4}function k4(n){return n===BS}var wo=class{};var u1=class{},Q2=class{},bs=class n{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let i=t.indexOf(":");if(i>0){let r=t.slice(0,i),s=r.toLowerCase(),o=t.slice(i+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(o):this.headers.set(s,[o])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,i)=>{this.setHeaderEntries(i,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,i])=>{this.setHeaderEntries(t,i)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let i=e.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...i),this.headers.set(t,r);break;case"d":let s=e.value;if(!s)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(a=>s.indexOf(a)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}setHeaderEntries(e,t){let i=(Array.isArray(t)?t:[t]).map(s=>s.toString()),r=e.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var U4=class{encodeKey(e){return g7(e)}encodeValue(e){return g7(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function WS(n,e){let t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let s=r.indexOf("="),[o,a]=s==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,s)),e.decodeValue(r.slice(s+1))],c=t.get(o)||[];c.push(a),t.set(o,c)}),t}var $S=/%(\d[a-f0-9])/gi,qS={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function g7(n){return encodeURIComponent(n).replace($S,(e,t)=>qS[t]??e)}function J2(n){return`${n}`}var Ar=class n{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new U4,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=WS(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{let i=e.fromObject[t],r=Array.isArray(i)?i.map(J2):[J2(i)];this.map.set(t,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){let t=[];return Object.keys(e).forEach(i=>{let r=e[i];Array.isArray(r)?r.forEach(s=>{t.push({param:i,value:s,op:"a"})}):t.push({param:i,value:r,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let t=this.encoder.encodeKey(e);return this.map.get(e).map(i=>t+"="+this.encoder.encodeValue(i)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let t=new n({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let t=(e.op==="a"?this.map.get(e.param):void 0)||[];t.push(J2(e.value)),this.map.set(e.param,t);break;case"d":if(e.value!==void 0){let i=this.map.get(e.param)||[],r=i.indexOf(J2(e.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(e.param,i):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var H4=class{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function XS(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function v7(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function y7(n){return typeof Blob<"u"&&n instanceof Blob}function _7(n){return typeof FormData<"u"&&n instanceof FormData}function ZS(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var l1=class n{constructor(e,t,i,r){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let s;if(XS(this.method)||r?(this.body=i!==void 0?i:null,s=r):s=i,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params)),this.headers||(this.headers=new bs),this.context||(this.context=new H4),!this.params)this.params=new Ar,this.urlWithParams=t;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=t;else{let a=t.indexOf("?"),c=a===-1?"?":a<t.length-1?"&":"";this.urlWithParams=t+c+o}}}serializeBody(){return this.body===null?null:v7(this.body)||y7(this.body)||_7(this.body)||ZS(this.body)||typeof this.body=="string"?this.body:this.body instanceof Ar?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||_7(this.body)?null:y7(this.body)?this.body.type||null:v7(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof Ar?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let t=e.method||this.method,i=e.url||this.url,r=e.responseType||this.responseType,s=e.body!==void 0?e.body:this.body,o=e.withCredentials!==void 0?e.withCredentials:this.withCredentials,a=e.reportProgress!==void 0?e.reportProgress:this.reportProgress,c=e.headers||this.headers,l=e.params||this.params,u=e.context??this.context;return e.setHeaders!==void 0&&(c=Object.keys(e.setHeaders).reduce((f,d)=>f.set(d,e.setHeaders[d]),c)),e.setParams&&(l=Object.keys(e.setParams).reduce((f,d)=>f.set(d,e.setParams[d]),l)),new n(t,i,s,{params:l,headers:c,context:u,reportProgress:a,responseType:r,withCredentials:o})}},To=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(To||{}),f1=class{constructor(e,t=200,i="OK"){this.headers=e.headers||new bs,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||i,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},B4=class n extends f1{constructor(e={}){super(e),this.type=To.ResponseHeader}clone(e={}){return new n({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},el=class n extends f1{constructor(e={}){super(e),this.type=To.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},tl=class extends f1{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}};function V4(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials}}var G4=(()=>{let e=class e{constructor(i){this.handler=i}request(i,r,s={}){let o;if(i instanceof l1)o=i;else{let l;s.headers instanceof bs?l=s.headers:l=new bs(s.headers);let u;s.params&&(s.params instanceof Ar?u=s.params:u=new Ar({fromObject:s.params})),o=new l1(i,r,s.body!==void 0?s.body:null,{headers:l,context:s.context,params:u,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}let a=Oe(o).pipe(mr(l=>this.handler.handle(l)));if(i instanceof l1||s.observe==="events")return a;let c=a.pipe(gn(l=>l instanceof el));switch(s.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(Te(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return c.pipe(Te(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return c.pipe(Te(l=>{if(l.body!==null&&typeof l.body!="string")throw new Error("Response is not a string.");return l.body}));case"json":default:return c.pipe(Te(l=>l.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(i,r={}){return this.request("DELETE",i,r)}get(i,r={}){return this.request("GET",i,r)}head(i,r={}){return this.request("HEAD",i,r)}jsonp(i,r){return this.request("JSONP",i,{params:new Ar().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(i,r={}){return this.request("OPTIONS",i,r)}patch(i,r,s={}){return this.request("PATCH",i,V4(s,r))}post(i,r,s={}){return this.request("POST",i,V4(s,r))}put(i,r,s={}){return this.request("PUT",i,V4(s,r))}};e.\u0275fac=function(r){return new(r||e)(se(u1))},e.\u0275prov=fe({token:e,factory:e.\u0275fac});let n=e;return n})();function C7(n,e){return e(n)}function YS(n,e){return(t,i)=>e.intercept(t,{handle:r=>n(r,i)})}function KS(n,e,t){return(i,r)=>t.runInContext(()=>e(i,s=>n(s,r)))}var JS=new Se(""),j4=new Se(""),QS=new Se("");function ew(){let n=null;return(e,t)=>{n===null&&(n=(ye(JS,{optional:!0})??[]).reduceRight(YS,C7));let i=ye(So),r=i.add();return n(e,t).pipe(vr(()=>i.remove(r)))}}var b7=(()=>{let e=class e extends u1{constructor(i,r){super(),this.backend=i,this.injector=r,this.chain=null,this.pendingTasks=ye(So)}handle(i){if(this.chain===null){let s=Array.from(new Set([...this.injector.get(j4),...this.injector.get(QS,[])]));this.chain=s.reduceRight((o,a)=>KS(o,a,this.injector),C7)}let r=this.pendingTasks.add();return this.chain(i,s=>this.backend.handle(s)).pipe(vr(()=>this.pendingTasks.remove(r)))}};e.\u0275fac=function(r){return new(r||e)(se(Q2),se(En))},e.\u0275prov=fe({token:e,factory:e.\u0275fac});let n=e;return n})();var tw=/^\)\]\}',?\n/;function nw(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}var x7=(()=>{let e=class e{constructor(i){this.xhrFactory=i}handle(i){if(i.method==="JSONP")throw new Q(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?wt(r.\u0275loadImpl()):Oe(null)).pipe(wn(()=>new Qe(o=>{let a=r.build();if(a.open(i.method,i.urlWithParams),i.withCredentials&&(a.withCredentials=!0),i.headers.forEach((m,h)=>a.setRequestHeader(m,h.join(","))),i.headers.has("Accept")||a.setRequestHeader("Accept","application/json, text/plain, */*"),!i.headers.has("Content-Type")){let m=i.detectContentTypeHeader();m!==null&&a.setRequestHeader("Content-Type",m)}if(i.responseType){let m=i.responseType.toLowerCase();a.responseType=m!=="json"?m:"text"}let c=i.serializeBody(),l=null,u=()=>{if(l!==null)return l;let m=a.statusText||"OK",h=new bs(a.getAllResponseHeaders()),M=nw(a)||i.url;return l=new B4({headers:h,status:a.status,statusText:m,url:M}),l},f=()=>{let{headers:m,status:h,statusText:M,url:_}=u(),C=null;h!==204&&(C=typeof a.response>"u"?a.responseText:a.response),h===0&&(h=C?200:0);let D=h>=200&&h<300;if(i.responseType==="json"&&typeof C=="string"){let A=C;C=C.replace(tw,"");try{C=C!==""?JSON.parse(C):null}catch(E){C=A,D&&(D=!1,C={error:E,text:C})}}D?(o.next(new el({body:C,headers:m,status:h,statusText:M,url:_||void 0})),o.complete()):o.error(new tl({error:C,headers:m,status:h,statusText:M,url:_||void 0}))},d=m=>{let{url:h}=u(),M=new tl({error:m,status:a.status||0,statusText:a.statusText||"Unknown Error",url:h||void 0});o.error(M)},p=!1,g=m=>{p||(o.next(u()),p=!0);let h={type:To.DownloadProgress,loaded:m.loaded};m.lengthComputable&&(h.total=m.total),i.responseType==="text"&&a.responseText&&(h.partialText=a.responseText),o.next(h)},v=m=>{let h={type:To.UploadProgress,loaded:m.loaded};m.lengthComputable&&(h.total=m.total),o.next(h)};return a.addEventListener("load",f),a.addEventListener("error",d),a.addEventListener("timeout",d),a.addEventListener("abort",d),i.reportProgress&&(a.addEventListener("progress",g),c!==null&&a.upload&&a.upload.addEventListener("progress",v)),a.send(c),o.next({type:To.Sent}),()=>{a.removeEventListener("error",d),a.removeEventListener("abort",d),a.removeEventListener("load",f),a.removeEventListener("timeout",d),i.reportProgress&&(a.removeEventListener("progress",g),c!==null&&a.upload&&a.upload.removeEventListener("progress",v)),a.readyState!==a.DONE&&a.abort()}})))}};e.\u0275fac=function(r){return new(r||e)(se(wo))},e.\u0275prov=fe({token:e,factory:e.\u0275fac});let n=e;return n})(),S7=new Se("XSRF_ENABLED"),iw="XSRF-TOKEN",rw=new Se("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>iw}),sw="X-XSRF-TOKEN",ow=new Se("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>sw}),nl=class{},aw=(()=>{let e=class e{constructor(i,r,s){this.doc=i,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let i=this.doc.cookie||"";return i!==this.lastCookieString&&(this.parseCount++,this.lastToken=K2(i,this.cookieName),this.lastCookieString=i),this.lastToken}};e.\u0275fac=function(r){return new(r||e)(se(It),se(Ai),se(rw))},e.\u0275prov=fe({token:e,factory:e.\u0275fac});let n=e;return n})();function cw(n,e){let t=n.url.toLowerCase();if(!ye(S7)||n.method==="GET"||n.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return e(n);let i=ye(nl).getToken(),r=ye(ow);return i!=null&&!n.headers.has(r)&&(n=n.clone({headers:n.headers.set(r,i)})),e(n)}var w7=function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n}(w7||{});function lw(n,e){return{\u0275kind:n,\u0275providers:e}}function uw(...n){let e=[G4,x7,b7,{provide:u1,useExisting:b7},{provide:Q2,useExisting:x7},{provide:j4,useValue:cw,multi:!0},{provide:S7,useValue:!0},{provide:nl,useClass:aw}];for(let t of n)e.push(...t.\u0275providers);return bo(e)}var M7=new Se("LEGACY_INTERCEPTOR_FN");function fw(){return lw(w7.LegacyInterceptors,[{provide:M7,useFactory:ew},{provide:j4,useExisting:M7,multi:!0}])}var E7=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Lt({type:e}),e.\u0275inj=Pt({providers:[uw(fw())]});let n=e;return n})();var q4=class extends Z2{constructor(){super(...arguments),this.supportsDOMEvents=!0}},X4=class n extends q4{static makeCurrent(){u7(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=hw();return t==null?null:pw(t)}resetBaseElement(){d1=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return K2(document.cookie,e)}},d1=null;function hw(){return d1=d1||document.querySelector("base"),d1?d1.getAttribute("href"):null}var il;function pw(n){il=il||document.createElement("a"),il.setAttribute("href",n);let e=il.pathname;return e.charAt(0)==="/"?e:`/${e}`}var mw=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:e.\u0275fac});let n=e;return n})(),Z4=new Se("EventManagerPlugins"),D7=(()=>{let e=class e{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(s=>{s.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,s){return this._findPluginFor(r).addEventListener(i,r,s)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(o=>o.supports(i)),!r)throw new Q(5101,!1);return this._eventNameToPlugin.set(i,r),r}};e.\u0275fac=function(r){return new(r||e)(se(Z4),se(lt))},e.\u0275prov=fe({token:e,factory:e.\u0275fac});let n=e;return n})(),rl=class{constructor(e){this._doc=e}},W4="ng-app-id",I7=(()=>{let e=class e{constructor(i,r,s,o={}){this.doc=i,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=k4(o),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(s=>s.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${W4}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(i,r){let s=this.styleRef;if(s.has(i)){let o=s.get(i);return o.usage+=r,o.usage}return s.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===i)return s.delete(r),o.removeAttribute(W4),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(W4,this.appId),a}}addStyleToHost(i,r){let s=this.getStyleElement(i,r);i.appendChild(s);let o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(se(It),se(O2),se(r1,8),se(Ai))},e.\u0275prov=fe({token:e,factory:e.\u0275fac});let n=e;return n})(),$4={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},K4=/%COMP%/g,R7="%COMP%",gw=`_nghost-${R7}`,vw=`_ngcontent-${R7}`,yw=!1,_w=new Se("RemoveStylesOnCompDestroy",{providedIn:"root",factory:()=>yw});function bw(n){return vw.replace(K4,n)}function xw(n){return gw.replace(K4,n)}function N7(n,e){return e.map(t=>t.replace(K4,n))}var sl=(()=>{let e=class e{constructor(i,r,s,o,a,c,l,u=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=k4(c),this.defaultRenderer=new h1(i,a,l,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Bn.ShadowDom&&(r=mt(pe({},r),{encapsulation:Bn.Emulated}));let s=this.getOrCreateRenderer(i,r);return s instanceof ol?s.applyToHost(i):s instanceof p1&&s.applyStyles(),s}getOrCreateRenderer(i,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(r.encapsulation){case Bn.Emulated:o=new ol(l,u,r,this.appId,f,a,c,d);break;case Bn.ShadowDom:return new Y4(l,u,i,r,a,c,this.nonce,d);default:o=new p1(l,u,r,f,a,c,d);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(se(D7),se(I7),se(O2),se(_w),se(It),se(Ai),se(lt),se(r1))},e.\u0275prov=fe({token:e,factory:e.\u0275fac});let n=e;return n})(),h1=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS($4[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(A7(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(A7(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Q(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=$4[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=$4[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Vi.DashCase|Vi.Important)?e.style.setProperty(t,i,r&Vi.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Vi.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e[t]=i}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=Xi().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function A7(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Y4=class extends h1{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=N7(r.id,r.styles);for(let u of l){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=u,this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},p1=class extends h1{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?N7(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},ol=class extends p1{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=bw(l),this.hostAttr=xw(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},Mw=(()=>{let e=class e extends rl{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,s){return i.addEventListener(r,s,!1),()=>this.removeEventListener(i,r,s)}removeEventListener(i,r,s){return i.removeEventListener(r,s)}};e.\u0275fac=function(r){return new(r||e)(se(It))},e.\u0275prov=fe({token:e,factory:e.\u0275fac});let n=e;return n})(),T7=["alt","control","meta","shift"],Cw={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Sw={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},ww=(()=>{let e=class e extends rl{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,r,s){let o=e.parseEventName(r),a=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Xi().onAndCancel(i,o.domEventName,a))}static parseEventName(i){let r=i.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),T7.forEach(u=>{let f=r.indexOf(u);f>-1&&(r.splice(f,1),a+=u+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(i,r){let s=Cw[i.key]||i.key,o="";return r.indexOf("code.")>-1&&(s=i.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),T7.forEach(a=>{if(a!==s){let c=Sw[a];c(i)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(i,r,s){return o=>{e.matchEventFullKeyCode(o,i)&&s.runGuarded(()=>r(o))}}static _normalizeKey(i){switch(i){case"esc":return"escape";default:return i}}};e.\u0275fac=function(r){return new(r||e)(se(It))},e.\u0275prov=fe({token:e,factory:e.\u0275fac});let n=e;return n})();function P7(n,e){return n7(pe({rootComponent:n},Ew(e)))}function Ew(n){return{appProviders:[...Rw,...n?.providers??[]],platformProviders:Iw}}function Aw(){X4.makeCurrent()}function Tw(){return new Ei}function Dw(){return np(document),document}var Iw=[{provide:Ai,useValue:F4},{provide:y4,useValue:Aw,multi:!0},{provide:It,useFactory:Dw,deps:[]}];var Rw=[{provide:L2,useValue:"root"},{provide:Ei,useFactory:Tw,deps:[]},{provide:Z4,useClass:Mw,multi:!0,deps:[It,lt,Ai]},{provide:Z4,useClass:ww,multi:!0,deps:[It]},sl,I7,D7,{provide:wi,useExisting:sl},{provide:wo,useClass:mw,deps:[]},[]];function Nw(){return new J4(se(It))}var J4=(()=>{let e=class e{constructor(i){this._doc=i}getTitle(){return this._doc.title}setTitle(i){this._doc.title=i||""}};e.\u0275fac=function(r){return new(r||e)(se(It))},e.\u0275prov=fe({token:e,factory:function(r){let s=null;return r?s=new r:s=Nw(),s},providedIn:"root"});let n=e;return n})();var Q4=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:function(r){let s=null;return r?s=new(r||e):s=se(L7),s},providedIn:"root"});let n=e;return n})();function Pw(n){return new L7(n.get(It))}var L7=(()=>{let e=class e extends Q4{constructor(i){super(),this._doc=i}sanitize(i,r){if(r==null)return null;switch(i){case Wi.NONE:return r;case Wi.HTML:return ms(r,"HTML")?Gi(r):p4(this._doc,String(r)).toString();case Wi.STYLE:return ms(r,"Style")?Gi(r):r;case Wi.SCRIPT:if(ms(r,"Script"))return Gi(r);throw new Q(5200,!1);case Wi.URL:return ms(r,"URL")?Gi(r):h4(String(r));case Wi.RESOURCE_URL:if(ms(r,"ResourceURL"))return Gi(r);throw new Q(5201,!1);default:throw new Q(5202,!1)}}bypassSecurityTrustHtml(i){return rp(i)}bypassSecurityTrustStyle(i){return sp(i)}bypassSecurityTrustScript(i){return op(i)}bypassSecurityTrustUrl(i){return ap(i)}bypassSecurityTrustResourceUrl(i){return cp(i)}};e.\u0275fac=function(r){return new(r||e)(se(It))},e.\u0275prov=fe({token:e,factory:function(r){let s=null;return r?s=new r:s=Pw(se(Mr)),s},providedIn:"root"});let n=e;return n})();var He="primary",x1=Symbol("RouteTitle"),rd=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Oo(n){return new rd(n)}function Fw(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function kw(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Di(n[t],e[t]))return!1;return!0}function Di(n,e){let t=n?Object.keys(n):void 0,i=e?Object.keys(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!q7(n[r],e[r]))return!1;return!0}function q7(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function X7(n){return n.length>0?n[n.length-1]:null}function Dr(n){return w3(n)?n:Sr(n)?wt(Promise.resolve(n)):Oe(n)}var Vw={exact:Y7,subset:K7},Z7={exact:Uw,subset:Hw,ignored:()=>!0};function z7(n,e,t){return Vw[t.paths](n.root,e.root,t.matrixParams)&&Z7[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function Uw(n,e){return Di(n,e)}function Y7(n,e,t){if(!Ms(n.segments,e.segments)||!ll(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!Y7(n.children[i],e.children[i],t))return!1;return!0}function Hw(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>q7(n[t],e[t]))}function K7(n,e,t){return J7(n,e,e.segments,t)}function J7(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Ms(r,t)||e.hasChildren()||!ll(r,t,i))}else if(n.segments.length===t.length){if(!Ms(n.segments,t)||!ll(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!K7(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Ms(n.segments,r)||!ll(n.segments,r,i)||!n.children[He]?!1:J7(n.children[He],e,s,i)}}function ll(n,e,t){return e.every((i,r)=>Z7[t](n[r].parameters,i.parameters))}var Tr=class{constructor(e=new ct([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Oo(this.queryParams)),this._queryParamMap}toString(){return jw.serialize(this)}},ct=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ul(this)}},xs=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap||(this._parameterMap=Oo(this.parameters)),this._parameterMap}toString(){return tm(this)}};function Bw(n,e){return Ms(n,e)&&n.every((t,i)=>Di(t.parameters,e[i].parameters))}function Ms(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function Gw(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===He&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==He&&(t=t.concat(e(r,i)))}),t}var Q7=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:function(){return(()=>new dl)()},providedIn:"root"});let n=e;return n})(),dl=class{parse(e){let t=new od(e);return new Tr(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${m1(e.root,!0)}`,i=qw(e.queryParams),r=typeof e.fragment=="string"?`#${Ww(e.fragment)}`:"";return`${t}${i}${r}`}},jw=new dl;function ul(n){return n.segments.map(e=>tm(e)).join("/")}function m1(n,e){if(!n.hasChildren())return ul(n);if(e){let t=n.children[He]?m1(n.children[He],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==He&&i.push(`${r}:${m1(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=Gw(n,(i,r)=>r===He?[m1(n.children[He],!1)]:[`${r}:${m1(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[He]!=null?`${ul(n)}/${t[0]}`:`${ul(n)}/(${t.join("//")})`}}function em(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function al(n){return em(n).replace(/%3B/gi,";")}function Ww(n){return encodeURI(n)}function sd(n){return em(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function fl(n){return decodeURIComponent(n)}function F7(n){return fl(n.replace(/\+/g,"%20"))}function tm(n){return`${sd(n.path)}${$w(n.parameters)}`}function $w(n){return Object.keys(n).map(e=>`;${sd(e)}=${sd(n[e])}`).join("")}function qw(n){let e=Object.keys(n).map(t=>{let i=n[t];return Array.isArray(i)?i.map(r=>`${al(t)}=${al(r)}`).join("&"):`${al(t)}=${al(i)}`}).filter(t=>!!t);return e.length?`?${e.join("&")}`:""}var Xw=/^[^\/()?;#]+/;function ed(n){let e=n.match(Xw);return e?e[0]:""}var Zw=/^[^\/()?;=#]+/;function Yw(n){let e=n.match(Zw);return e?e[0]:""}var Kw=/^[^=?&#]+/;function Jw(n){let e=n.match(Kw);return e?e[0]:""}var Qw=/^[^&#]+/;function eE(n){let e=n.match(Qw);return e?e[0]:""}var od=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ct([],{}):new ct([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[He]=new ct(e,t)),i}parseSegment(){let e=ed(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Q(4009,!1);return this.capture(e),new xs(fl(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=Yw(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=ed(this.remaining);r&&(i=r,this.capture(i))}e[fl(t)]=fl(i)}parseQueryParam(e){let t=Jw(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=eE(this.remaining);o&&(i=o,this.capture(i))}let r=F7(t),s=F7(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=ed(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Q(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=He);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[He]:new ct([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Q(4011,!1)}};function nm(n){return n.segments.length>0?new ct([],{[He]:n}):n}function im(n){let e={};for(let i of Object.keys(n.children)){let r=n.children[i],s=im(r);if(i===He&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new ct(n.segments,e);return tE(t)}function tE(n){if(n.numberOfChildren===1&&n.children[He]){let e=n.children[He];return new ct(n.segments.concat(e.segments),e.children)}return n}function zo(n){return n instanceof Tr}function nE(n,e,t=null,i=null){let r=rm(n);return sm(r,e,t,i)}function rm(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new ct(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=nm(i);return e??r}function sm(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return td(r,r,r,t,i);let s=iE(e);if(s.toRoot())return td(r,r,new ct([],{}),t,i);let o=rE(s,r,n),a=o.processChildren?y1(o.segmentGroup,o.index,s.commands):am(o.segmentGroup,o.index,s.commands);return td(r,o.segmentGroup,a,t,i)}function hl(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function M1(n){return typeof n=="object"&&n!=null&&n.outlets}function td(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=om(n,e,t);let a=nm(im(o));return new Tr(a,s,r)}function om(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=om(s,e,t)}),new ct(n.segments,i)}var pl=class{constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&hl(i[0]))throw new Q(4003,!1);let r=i.find(M1);if(r&&r!==X7(i))throw new Q(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function iE(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new pl(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new pl(t,e,i)}var Ro=class{constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function rE(n,e,t){if(n.isAbsolute)return new Ro(e,!0,0);if(!t)return new Ro(e,!1,NaN);if(t.parent===null)return new Ro(t,!0,0);let i=hl(n.commands[0])?0:1,r=t.segments.length-1+i;return sE(t,r,n.numberOfDoubleDots)}function sE(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Q(4005,!1);r=i.segments.length}return new Ro(i,!1,r-s)}function oE(n){return M1(n[0])?n[0].outlets:{[He]:n}}function am(n,e,t){if(n||(n=new ct([],{})),n.segments.length===0&&n.hasChildren())return y1(n,e,t);let i=aE(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new ct(n.segments.slice(0,i.pathIndex),{});return s.children[He]=new ct(n.segments.slice(i.pathIndex),n.children),y1(s,0,r)}else return i.match&&r.length===0?new ct(n.segments,{}):i.match&&!n.hasChildren()?ad(n,e,t):i.match?y1(n,0,r):ad(n,e,t)}function y1(n,e,t){if(t.length===0)return new ct(n.segments,{});{let i=oE(t),r={};if(Object.keys(i).some(s=>s!==He)&&n.children[He]&&n.numberOfChildren===1&&n.children[He].segments.length===0){let s=y1(n.children[He],e,t);return new ct(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=am(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new ct(n.segments,r)}}function aE(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(M1(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!V7(c,l,o))return s;i+=2}else{if(!V7(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function ad(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(M1(s)){let c=cE(s.outlets);return new ct(i,c)}if(r===0&&hl(t[0])){let c=n.segments[e];i.push(new xs(c.path,k7(t[0]))),r++;continue}let o=M1(s)?s.outlets[He]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&hl(a)?(i.push(new xs(o,k7(a))),r+=2):(i.push(new xs(o,{})),r++)}return new ct(i,{})}function cE(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=ad(new ct([],{}),0,i))}),e}function k7(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function V7(n,e,t){return n==t.path&&Di(e,t.parameters)}var _1="imperative",Xn=class{constructor(e,t){this.id=e,this.url=t}},C1=class extends Xn{constructor(e,t,i="imperative",r=null){super(e,t),this.type=0,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Fo=class extends Xn{constructor(e,t,i){super(e,t),this.urlAfterRedirects=i,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Cs=class extends Xn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Ss=class extends Xn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=16}},S1=class extends Xn{constructor(e,t,i,r){super(e,t),this.error=i,this.target=r,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ml=class extends Xn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cd=class extends Xn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ld=class extends Xn{constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ud=class extends Xn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fd=class extends Xn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},dd=class{constructor(e){this.route=e,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},hd=class{constructor(e){this.route=e,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},pd=class{constructor(e){this.snapshot=e,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},md=class{constructor(e){this.snapshot=e,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},gd=class{constructor(e){this.snapshot=e,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},vd=class{constructor(e){this.snapshot=e,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var w1=class{},E1=class{constructor(e){this.url=e}};var yd=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new xl,this.attachRef=null}},xl=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(i,r){let s=this.getOrCreateContext(i);s.outlet=r,this.contexts.set(i,s)}onChildOutletDestroyed(i){let r=this.getContext(i);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let i=this.contexts;return this.contexts=new Map,i}onOutletReAttached(i){this.contexts=i}getOrCreateContext(i){let r=this.getContext(i);return r||(r=new yd,this.contexts.set(i,r)),r}getContext(i){return this.contexts.get(i)||null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),gl=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=_d(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=_d(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=bd(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return bd(e,this._root).map(t=>t.value)}};function _d(n,e){if(n===e.value)return e;for(let t of e.children){let i=_d(n,t);if(i)return i}return null}function bd(n,e){if(n===e.value)return[e];for(let t of e.children){let i=bd(n,t);if(i.length)return i.unshift(e),i}return[]}var li=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Io(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var vl=class extends gl{constructor(e,t){super(e),this.snapshot=t,Td(this,e)}toString(){return this.snapshot.toString()}};function cm(n,e){let t=lE(n,e),i=new rn([new xs("",{})]),r=new rn({}),s=new rn({}),o=new rn({}),a=new rn(""),c=new ko(i,r,o,a,s,He,e,t.root);return c.snapshot=t.root,new vl(new li(c,[]),t)}function lE(n,e){let t={},i={},r={},s="",o=new No([],t,r,s,i,He,e,null,{});return new yl("",new li(o,[]))}var ko=class{constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Te(l=>l[x1]))??Oe(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(Te(e=>Oo(e)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(Te(e=>Oo(e)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function lm(n,e="emptyOnly"){let t=n.pathFromRoot,i=0;if(e!=="always")for(i=t.length-1;i>=1;){let r=t[i],s=t[i-1];if(r.routeConfig&&r.routeConfig.path==="")i--;else if(!s.component)i--;else break}return uE(t.slice(i))}function uE(n){return n.reduce((e,t)=>{let i=pe(pe({},e.params),t.params),r=pe(pe({},e.data),t.data),s=pe(pe(pe(pe({},t.data),e.resolve),t.routeConfig?.data),t._resolvedData);return{params:i,data:r,resolve:s}},{params:{},data:{},resolve:{}})}var No=class{get title(){return this.data?.[x1]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Oo(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Oo(this.queryParams)),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},yl=class extends gl{constructor(e,t){super(t),this.url=e,Td(this,t)}toString(){return um(this._root)}};function Td(n,e){e.value._routerState=n,e.children.forEach(t=>Td(n,t))}function um(n){let e=n.children.length>0?` { ${n.children.map(um).join(", ")} } `:"";return`${n.value}${e}`}function nd(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Di(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Di(e.params,t.params)||n.paramsSubject.next(t.params),kw(e.url,t.url)||n.urlSubject.next(t.url),Di(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function xd(n,e){let t=Di(n.params,e.params)&&Bw(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||xd(n.parent,e.parent))}var fE=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=He,this.activateEvents=new Qt,this.deactivateEvents=new Qt,this.attachEvents=new Qt,this.detachEvents=new Qt,this.parentContexts=ye(xl),this.location=ye(a1),this.changeDetector=ye(ys),this.environmentInjector=ye(En),this.inputBinder=ye(Dd,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(i){if(i.name){let{firstChange:r,previousValue:s}=i.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(i){return this.parentContexts.getContext(i)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let i=this.parentContexts.getContext(this.name);i?.route&&(i.attachRef?this.attach(i.attachRef,i.route):this.activateWith(i.route,i.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Q(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Q(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Q(4012,!1);this.location.detach();let i=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(i.instance),i}attach(i,r){this.activated=i,this._activatedRoute=r,this.location.insert(i.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(i.instance)}deactivate(){if(this.activated){let i=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(i)}}activateWith(i,r){if(this.isActivated)throw new Q(4013,!1);this._activatedRoute=i;let s=this.location,a=i.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new Md(i,c,s.injector);this.activated=s.createComponent(a,{index:s.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=$t({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[jn]});let n=e;return n})(),Md=class{constructor(e,t,i){this.route=e,this.childContexts=t,this.parent=i}get(e,t){return e===ko?this.route:e===xl?this.childContexts:this.parent.get(e,t)}},Dd=new Se("");function dE(n,e,t){let i=A1(n,e._root,t?t._root:void 0);return new vl(i,e)}function A1(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=hE(n,e,t);return new li(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>A1(n,a)),o}}let i=pE(e.value),r=e.children.map(s=>A1(n,s));return new li(i,r)}}function hE(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return A1(n,i,r);return A1(n,i)})}function pE(n){return new ko(new rn(n.url),new rn(n.params),new rn(n.queryParams),new rn(n.fragment),new rn(n.data),n.outlet,n.component,n)}var fm="ngNavigationCancelingError";function dm(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=zo(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=hm(!1,0,e);return r.url=t,r.navigationBehaviorOptions=i,r}function hm(n,e,t){let i=new Error("NavigationCancelingError: "+(n||""));return i[fm]=!0,i.cancellationCode=e,t&&(i.url=t),i}function mE(n){return pm(n)&&zo(n.url)}function pm(n){return n&&n[fm]}var gE=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Tt({type:e,selectors:[["ng-component"]],standalone:!0,features:[en],decls:1,vars:0,template:function(r,s){r&1&&_n(0,"router-outlet")},dependencies:[fE],encapsulation:2});let n=e;return n})();function vE(n,e){return n.providers&&!n._injector&&(n._injector=A4(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Id(n){let e=n.children&&n.children.map(Id),t=e?mt(pe({},n),{children:e}):pe({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==He&&(t.component=gE),t}function ui(n){return n.outlet||He}function yE(n,e){let t=n.filter(i=>ui(i)===e);return t.push(...n.filter(i=>ui(i)!==e)),t}function T1(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var _E=(n,e,t,i)=>Te(r=>(new Cd(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Cd=class{constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),nd(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Io(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Io(e);for(let o of Object.keys(s))this.deactivateRouteAndItsChildren(s[o],r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Io(e);for(let o of Object.keys(s))this.deactivateRouteAndItsChildren(s[o],r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Io(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new vd(s.value.snapshot))}),e.children.length&&this.forwardEvent(new md(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(nd(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),nd(a.route.value),this.activateChildRoutes(e,null,o.children)}else{let a=T1(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,i)}},_l=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Po=class{constructor(e,t){this.component=e,this.route=t}};function bE(n,e,t){let i=n._root,r=e?e._root:null;return g1(i,r,t,[i.value])}function xE(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Uo(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!k6(n)?n:e.get(n):i}function g1(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Io(e);return n.children.forEach(o=>{ME(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>b1(a,t.getContext(o),r)),r}function ME(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=CE(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new _l(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?g1(n,e,a?a.children:null,i,r):g1(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Po(a.outlet.component,o))}else o&&b1(e,a,r),r.canActivateChecks.push(new _l(i)),s.component?g1(n,null,a?a.children:null,i,r):g1(n,null,t,i,r);return r}function CE(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Ms(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Ms(n.url,e.url)||!Di(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!xd(n,e)||!Di(n.queryParams,e.queryParams);case"paramsChange":default:return!xd(n,e)}}function b1(n,e,t){let i=Io(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?b1(o,e.children.getContext(s),t):b1(o,null,t):b1(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Po(e.outlet.component,r)):t.canDeactivateChecks.push(new Po(null,r)):t.canDeactivateChecks.push(new Po(null,r))}function D1(n){return typeof n=="function"}function SE(n){return typeof n=="boolean"}function wE(n){return n&&D1(n.canLoad)}function EE(n){return n&&D1(n.canActivate)}function AE(n){return n&&D1(n.canActivateChild)}function TE(n){return n&&D1(n.canDeactivate)}function DE(n){return n&&D1(n.canMatch)}function mm(n){return n instanceof zi||n?.name==="EmptyError"}var cl=Symbol("INITIAL_VALUE");function Vo(){return wn(n=>io(n.map(e=>e.pipe(ni(1),Oa(cl)))).pipe(Te(e=>{for(let t of e)if(t!==!0){if(t===cl)return cl;if(t===!1||t instanceof Tr)return t}return!0}),gn(e=>e!==cl),ni(1)))}function IE(n,e){return Ut(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Oe(mt(pe({},t),{guardsResult:!0})):RE(o,i,r,n).pipe(Ut(a=>a&&SE(a)?NE(i,s,n,e):Oe(a)),Te(a=>mt(pe({},t),{guardsResult:a})))})}function RE(n,e,t,i){return wt(n).pipe(Ut(r=>FE(r.component,r.route,t,e,i)),ii(r=>r!==!0,!0))}function NE(n,e,t,i){return wt(e).pipe(mr(r=>pr(LE(r.route.parent,i),PE(r.route,i),zE(n,r.path,t),OE(n,r.route,t))),ii(r=>r!==!0,!0))}function PE(n,e){return n!==null&&e&&e(new gd(n)),Oe(!0)}function LE(n,e){return n!==null&&e&&e(new pd(n)),Oe(!0)}function OE(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Oe(!0);let r=i.map(s=>Hc(()=>{let o=T1(e)??t,a=Uo(s,o),c=EE(a)?a.canActivate(e,n):o.runInContext(()=>a(e,n));return Dr(c).pipe(ii())}));return Oe(r).pipe(Vo())}function zE(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>xE(o)).filter(o=>o!==null).map(o=>Hc(()=>{let a=o.guards.map(c=>{let l=T1(o.node)??t,u=Uo(c,l),f=AE(u)?u.canActivateChild(i,n):l.runInContext(()=>u(i,n));return Dr(f).pipe(ii())});return Oe(a).pipe(Vo())}));return Oe(s).pipe(Vo())}function FE(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Oe(!0);let o=s.map(a=>{let c=T1(e)??r,l=Uo(a,c),u=TE(l)?l.canDeactivate(n,e,t,i):c.runInContext(()=>l(n,e,t,i));return Dr(u).pipe(ii())});return Oe(o).pipe(Vo())}function kE(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Oe(!0);let s=r.map(o=>{let a=Uo(o,n),c=wE(a)?a.canLoad(e,t):n.runInContext(()=>a(e,t));return Dr(c)});return Oe(s).pipe(Vo(),gm(i))}function gm(n){return _3(Wt(e=>{if(zo(e))throw dm(n,e)}),Te(e=>e===!0))}function VE(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Oe(!0);let s=r.map(o=>{let a=Uo(o,n),c=DE(a)?a.canMatch(e,t):n.runInContext(()=>a(e,t));return Dr(c)});return Oe(s).pipe(Vo(),gm(i))}var Lo=class{constructor(e){this.segmentGroup=e||null}},bl=class{constructor(e){this.urlTree=e}};function Do(n){return rs(new Lo(n))}function U7(n){return rs(new bl(n))}function UE(n){return rs(new Q(4e3,!1))}function HE(n){return rs(hm(!1,3))}var Sd=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}noMatchError(e){return new Q(4002,!1)}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Oe(i);if(r.numberOfChildren>1||!r.children[He])return UE(e.redirectTo);r=r.children[He]}}applyRedirectCommands(e,t,i){return this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i)}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Tr(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new ct(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Q(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},wd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function BE(n,e,t,i,r){let s=Rd(n,e,t);return s.matched?(i=vE(e,i),VE(i,e,t,r).pipe(Te(o=>o===!0?s:pe({},wd)))):Oe(s)}function Rd(n,e,t){if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?pe({},wd):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||Fw)(t,n,e);if(!r)return pe({},wd);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?pe(pe({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function H7(n,e,t,i){return t.length>0&&WE(n,t,i)?{segmentGroup:new ct(e,jE(i,new ct(t,n.children))),slicedSegments:[]}:t.length===0&&$E(n,t,i)?{segmentGroup:new ct(n.segments,GE(n,e,t,i,n.children)),slicedSegments:t}:{segmentGroup:new ct(n.segments,n.children),slicedSegments:t}}function GE(n,e,t,i,r){let s={};for(let o of i)if(Ml(n,t,o)&&!r[ui(o)]){let a=new ct([],{});s[ui(o)]=a}return pe(pe({},r),s)}function jE(n,e){let t={};t[He]=e;for(let i of n)if(i.path===""&&ui(i)!==He){let r=new ct([],{});t[ui(i)]=r}return t}function WE(n,e,t){return t.some(i=>Ml(n,e,i)&&ui(i)!==He)}function $E(n,e,t){return t.some(i=>Ml(n,e,i))}function Ml(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function qE(n,e,t,i){return ui(n)!==i&&(i===He||!Ml(e,t,n))?!1:n.path==="**"?!0:Rd(e,n,t).matched}function XE(n,e,t){return e.length===0&&!n.children[t]}function ZE(n,e,t,i,r,s,o="emptyOnly"){return new Ed(n,e,t,i,r,o,s).recognize()}var Ed=class{constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.allowRedirects=!0,this.applyRedirects=new Sd(this.urlSerializer,this.urlTree)}noMatchError(e){return new Q(4002,!1)}recognize(){let e=H7(this.urlTree.root,[],[],this.config).segmentGroup;return this.processSegmentGroup(this.injector,this.config,e,He).pipe(Fi(t=>{if(t instanceof bl)return this.allowRedirects=!1,this.urlTree=t.urlTree,this.match(t.urlTree);throw t instanceof Lo?this.noMatchError(t):t}),Te(t=>{let i=new No([],Object.freeze({}),Object.freeze(pe({},this.urlTree.queryParams)),this.urlTree.fragment,{},He,this.rootComponentType,null,{}),r=new li(i,t),s=new yl("",r),o=nE(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root),{state:s,tree:o}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e.root,He).pipe(Fi(i=>{throw i instanceof Lo?this.noMatchError(i):i}))}inheritParamsAndData(e){let t=e.value,i=lm(t,this.paramsInheritanceStrategy);t.params=Object.freeze(i.params),t.data=Object.freeze(i.data),e.children.forEach(r=>this.inheritParamsAndData(r))}processSegmentGroup(e,t,i,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i):this.processSegment(e,t,i,i.segments,r,!0)}processChildren(e,t,i){let r=[];for(let s of Object.keys(i.children))s==="primary"?r.unshift(s):r.push(s);return wt(r).pipe(mr(s=>{let o=i.children[s],a=yE(t,s);return this.processSegmentGroup(e,a,o,s)}),N3((s,o)=>(s.push(...o),s)),gr(null),R3(),Ut(s=>{if(s===null)return Do(i);let o=vm(s);return YE(o),Oe(o)}))}processSegment(e,t,i,r,s,o){return wt(t).pipe(mr(a=>this.processSegmentAgainstRoute(a._injector??e,t,a,i,r,s,o).pipe(Fi(c=>{if(c instanceof Lo)return Oe(null);throw c}))),ii(a=>!!a),Fi(a=>{if(mm(a))return XE(i,r,s)?Oe([]):Do(i);throw a}))}processSegmentAgainstRoute(e,t,i,r,s,o,a){return qE(i,r,s,o)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,a):a&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o):Do(r):Do(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o){return r.path==="**"?this.expandWildCardWithParamsAgainstRouteUsingRedirect(e,i,r,o):this.expandRegularSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o)}expandWildCardWithParamsAgainstRouteUsingRedirect(e,t,i,r){let s=this.applyRedirects.applyRedirectCommands([],i.redirectTo,{});return i.redirectTo.startsWith("/")?U7(s):this.applyRedirects.lineralizeSegments(i,s).pipe(Ut(o=>{let a=new ct(o,{});return this.processSegment(e,t,a,o,r,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o){let{matched:a,consumedSegments:c,remainingSegments:l,positionalParamSegments:u}=Rd(t,r,s);if(!a)return Do(t);let f=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,u);return r.redirectTo.startsWith("/")?U7(f):this.applyRedirects.lineralizeSegments(r,f).pipe(Ut(d=>this.processSegment(e,i,t,d.concat(l),o,!1)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a;if(i.path==="**"){let c=r.length>0?X7(r).parameters:{},l=new No(r,c,Object.freeze(pe({},this.urlTree.queryParams)),this.urlTree.fragment,B7(i),ui(i),i.component??i._loadedComponent??null,i,G7(i));a=Oe({snapshot:l,consumedSegments:[],remainingSegments:[]}),t.children={}}else a=BE(t,i,r,e,this.urlSerializer).pipe(Te(({matched:c,consumedSegments:l,remainingSegments:u,parameters:f})=>c?{snapshot:new No(l,f,Object.freeze(pe({},this.urlTree.queryParams)),this.urlTree.fragment,B7(i),ui(i),i.component??i._loadedComponent??null,i,G7(i)),consumedSegments:l,remainingSegments:u}:null));return a.pipe(wn(c=>c===null?Do(t):(e=i._injector??e,this.getChildConfig(e,i,r).pipe(wn(({routes:l})=>{let u=i._loadedInjector??e,{snapshot:f,consumedSegments:d,remainingSegments:p}=c,{segmentGroup:g,slicedSegments:v}=H7(t,d,p,l);if(v.length===0&&g.hasChildren())return this.processChildren(u,l,g).pipe(Te(h=>h===null?null:[new li(f,h)]));if(l.length===0&&v.length===0)return Oe([new li(f,[])]);let m=ui(i)===s;return this.processSegment(u,l,g,v,m?He:s,!0).pipe(Te(h=>[new li(f,h)]))})))))}getChildConfig(e,t,i){return t.children?Oe({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Oe({routes:t._loadedRoutes,injector:t._loadedInjector}):kE(e,t,i,this.urlSerializer).pipe(Ut(r=>r?this.configLoader.loadChildren(e,t).pipe(Wt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):HE(t))):Oe({routes:[],injector:e})}};function YE(n){n.sort((e,t)=>e.value.outlet===He?-1:t.value.outlet===He?1:e.value.outlet.localeCompare(t.value.outlet))}function KE(n){let e=n.value.routeConfig;return e&&e.path===""}function vm(n){let e=[],t=new Set;for(let i of n){if(!KE(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=vm(i.children);e.push(new li(i.value,r))}return e.filter(i=>!t.has(i))}function B7(n){return n.data||{}}function G7(n){return n.resolve||{}}function JE(n,e,t,i,r,s){return Ut(o=>ZE(n,e,t,i,o.extractedUrl,r,s).pipe(Te(({state:a,tree:c})=>mt(pe({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function QE(n,e){return Ut(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Oe(t);let s=0;return wt(r).pipe(mr(o=>eA(o.route,i,n,e)),Wt(()=>s++),ro(1),Ut(o=>s===r.length?Oe(t):Cn))})}function eA(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!j7(r)&&(s[x1]=r.title),tA(s,n,e,i).pipe(Te(o=>(n._resolvedData=o,n.data=lm(n,t).resolve,r&&j7(r)&&(n.data[x1]=r.title),null)))}function tA(n,e,t,i){let r=nA(n);if(r.length===0)return Oe({});let s={};return wt(r).pipe(Ut(o=>iA(n[o],e,t,i).pipe(ii(),Wt(a=>{s[o]=a}))),ro(1),D3(s),Fi(o=>mm(o)?Cn:rs(o)))}function nA(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function iA(n,e,t,i){let r=T1(e)??i,s=Uo(n,r),o=s.resolve?s.resolve(e,t):r.runInContext(()=>s(e,t));return Dr(o)}function j7(n){return typeof n.title=="string"||n.title===null}function id(n){return wn(e=>{let t=n(e);return t?wt(t).pipe(Te(()=>e)):Oe(e)})}var Nd=new Se("ROUTES"),rA=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=ye(D4)}loadComponent(i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Oe(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=Dr(i.loadComponent()).pipe(Te(ym),Wt(o=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o}),vr(()=>{this.componentLoaders.delete(i)})),s=new to(r,()=>new nn).pipe(eo());return this.componentLoaders.set(i,s),s}loadChildren(i,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Oe({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=sA(r,this.compiler,i,this.onLoadEndListener).pipe(vr(()=>{this.childrenLoaders.delete(r)})),a=new to(o,()=>new nn).pipe(eo());return this.childrenLoaders.set(r,a),a}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function sA(n,e,t,i){return Dr(n.loadChildren()).pipe(Te(ym),Ut(r=>r instanceof Ya||Array.isArray(r)?Oe(r):wt(e.compileModuleAsync(r))),Te(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Nd,[],{optional:!0,self:!0}).flat()),{routes:o.map(Id),injector:s}}))}function oA(n){return n&&typeof n=="object"&&"default"in n}function ym(n){return oA(n)?n.default:n}var aA=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new nn,this.transitionAbortSubject=new nn,this.configLoader=ye(rA),this.environmentInjector=ye(En),this.urlSerializer=ye(Q7),this.rootContexts=ye(xl),this.inputBindingEnabled=ye(Dd,{optional:!0})!==null,this.navigationId=0,this.afterPreactivation=()=>Oe(void 0),this.rootComponentType=null;let i=s=>this.events.next(new dd(s)),r=s=>this.events.next(new hd(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=i}complete(){this.transitions?.complete()}handleNavigationRequest(i){let r=++this.navigationId;this.transitions?.next(mt(pe(pe({},this.transitions.value),i),{id:r}))}setupNavigations(i,r,s){return this.transitions=new rn({id:0,currentUrlTree:r,currentRawUrl:r,currentBrowserUrl:r,extractedUrl:i.urlHandlingStrategy.extract(r),urlAfterRedirects:i.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:_1,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(gn(o=>o.id!==0),Te(o=>mt(pe({},o),{extractedUrl:i.urlHandlingStrategy.extract(o.rawUrl)})),wn(o=>{this.currentTransition=o;let a=!1,c=!1;return Oe(o).pipe(Wt(l=>{this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?mt(pe({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),wn(l=>{let u=l.currentBrowserUrl.toString(),f=!i.navigated||l.extractedUrl.toString()!==u||u!==l.currentUrlTree.toString(),d=l.extras.onSameUrlNavigation??i.onSameUrlNavigation;if(!f&&d!=="reload"){let p="";return this.events.next(new Ss(l.id,this.urlSerializer.serialize(l.rawUrl),p,0)),l.resolve(null),Cn}if(i.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Oe(l).pipe(wn(p=>{let g=this.transitions?.getValue();return this.events.next(new C1(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),g!==this.transitions?.getValue()?Cn:Promise.resolve(p)}),JE(this.environmentInjector,this.configLoader,this.rootComponentType,i.config,this.urlSerializer,i.paramsInheritanceStrategy),Wt(p=>{o.targetSnapshot=p.targetSnapshot,o.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation=mt(pe({},this.currentNavigation),{finalUrl:p.urlAfterRedirects});let g=new ml(p.id,this.urlSerializer.serialize(p.extractedUrl),this.urlSerializer.serialize(p.urlAfterRedirects),p.targetSnapshot);this.events.next(g)}));if(f&&i.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:p,extractedUrl:g,source:v,restoredState:m,extras:h}=l,M=new C1(p,this.urlSerializer.serialize(g),v,m);this.events.next(M);let _=cm(g,this.rootComponentType).snapshot;return this.currentTransition=o=mt(pe({},l),{targetSnapshot:_,urlAfterRedirects:g,extras:mt(pe({},h),{skipLocationChange:!1,replaceUrl:!1})}),Oe(o)}else{let p="";return this.events.next(new Ss(l.id,this.urlSerializer.serialize(l.extractedUrl),p,1)),l.resolve(null),Cn}}),Wt(l=>{let u=new cd(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),Te(l=>(this.currentTransition=o=mt(pe({},l),{guards:bE(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),IE(this.environmentInjector,l=>this.events.next(l)),Wt(l=>{if(o.guardsResult=l.guardsResult,zo(l.guardsResult))throw dm(this.urlSerializer,l.guardsResult);let u=new ld(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),gn(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",3),!1)),id(l=>{if(l.guards.canActivateChecks.length)return Oe(l).pipe(Wt(u=>{let f=new ud(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(f)}),wn(u=>{let f=!1;return Oe(u).pipe(QE(i.paramsInheritanceStrategy,this.environmentInjector),Wt({next:()=>f=!0,complete:()=>{f||this.cancelNavigationTransition(u,"",2)}}))}),Wt(u=>{let f=new fd(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(f)}))}),id(l=>{let u=f=>{let d=[];f.routeConfig?.loadComponent&&!f.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(f.routeConfig).pipe(Wt(p=>{f.component=p}),Te(()=>{})));for(let p of f.children)d.push(...u(p));return d};return io(u(l.targetSnapshot.root)).pipe(gr(),ni(1))}),id(()=>this.afterPreactivation()),Te(l=>{let u=dE(i.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=mt(pe({},l),{targetRouterState:u}),o}),Wt(()=>{this.events.next(new w1)}),_E(this.rootContexts,i.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),ni(1),Wt({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Fo(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),i.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),za(this.transitionAbortSubject.pipe(Wt(l=>{throw l}))),vr(()=>{if(!a&&!c){let l="";this.cancelNavigationTransition(o,l,1)}this.currentNavigation?.id===o.id&&(this.currentNavigation=null)}),Fi(l=>{if(c=!0,pm(l))this.events.next(new Cs(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),mE(l)?this.events.next(new E1(l.url)):o.resolve(!1);else{this.events.next(new S1(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0));try{o.resolve(i.errorHandler(l))}catch(u){o.reject(u)}}return Cn}))}))}cancelNavigationTransition(i,r,s){let o=new Cs(i.id,this.urlSerializer.serialize(i.extractedUrl),r,s);this.events.next(o),i.resolve(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function W7(n){return n!==_1}var _m=(()=>{let e=class e{buildTitle(i){let r,s=i.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(o=>o.outlet===He);return r}getResolvedTitleForRoute(i){return i.data[x1]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:function(){return(()=>ye(cA))()},providedIn:"root"});let n=e;return n})(),cA=(()=>{let e=class e extends _m{constructor(i){super(),this.title=i}updateTitle(i){let r=this.buildTitle(i);r!==void 0&&this.title.setTitle(r)}};e.\u0275fac=function(r){return new(r||e)(se(J4))},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),lA=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:function(){return(()=>ye(uA))()},providedIn:"root"});let n=e;return n})(),Ad=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},uA=(()=>{let e=class e extends Ad{};e.\u0275fac=function(){let i;return function(s){return(i||(i=_o(e)))(s||e)}}(),e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),fA=new Se("",{providedIn:"root",factory:()=>({})}),dA=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:function(){return(()=>ye(hA))()},providedIn:"root"});let n=e;return n})(),hA=(()=>{let e=class e{shouldProcessUrl(i){return!0}extract(i){return i}merge(i,r){return i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),v1=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(v1||{});function pA(n,e){n.events.pipe(gn(t=>t instanceof Fo||t instanceof Cs||t instanceof S1||t instanceof Ss),Te(t=>t instanceof Fo||t instanceof Ss?v1.COMPLETE:(t instanceof Cs?t.code===0||t.code===1:!1)?v1.REDIRECTING:v1.FAILED),gn(t=>t!==v1.REDIRECTING),ni(1)).subscribe(()=>{e()})}function mA(n){throw n}function gA(n,e,t){return e.parse("/")}var vA={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},yA={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},bm=(()=>{let e=class e{get navigationId(){return this.navigationTransitions.navigationId}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.location.getState()?.\u0275routerPageId??this.currentPageId}get events(){return this._events}constructor(){this.disposed=!1,this.currentPageId=0,this.console=ye(W2),this.isNgZoneEnabled=!1,this._events=new nn,this.options=ye(fA,{optional:!0})||{},this.pendingTasks=ye(So),this.errorHandler=this.options.errorHandler||mA,this.malformedUriErrorHandler=this.options.malformedUriErrorHandler||gA,this.navigated=!1,this.lastSuccessfulId=-1,this.urlHandlingStrategy=ye(dA),this.routeReuseStrategy=ye(lA),this.titleStrategy=ye(_m),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.config=ye(Nd,{optional:!0})?.flat()??[],this.navigationTransitions=ye(aA),this.urlSerializer=ye(Q7),this.location=ye(z4),this.componentInputBindingEnabled=!!ye(Dd,{optional:!0}),this.eventsSubscription=new Vt,this.isNgZoneEnabled=ye(lt)instanceof lt&&lt.isInAngularZone(),this.resetConfig(this.config),this.currentUrlTree=new Tr,this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=cm(this.currentUrlTree,null),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe(i=>{this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId},i=>{this.console.warn(`Unhandled Navigation Error: ${i}`)}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let i=this.navigationTransitions.events.subscribe(r=>{try{let{currentTransition:s}=this.navigationTransitions;if(s===null){$7(r)&&this._events.next(r);return}if(r instanceof C1)W7(s.source)&&(this.browserUrlTree=s.extractedUrl);else if(r instanceof Ss)this.rawUrlTree=s.rawUrl;else if(r instanceof ml){if(this.urlUpdateStrategy==="eager"){if(!s.extras.skipLocationChange){let o=this.urlHandlingStrategy.merge(s.urlAfterRedirects,s.rawUrl);this.setBrowserUrl(o,s)}this.browserUrlTree=s.urlAfterRedirects}}else if(r instanceof w1)this.currentUrlTree=s.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(s.urlAfterRedirects,s.rawUrl),this.routerState=s.targetRouterState,this.urlUpdateStrategy==="deferred"&&(s.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,s),this.browserUrlTree=s.urlAfterRedirects);else if(r instanceof Cs)r.code!==0&&r.code!==1&&(this.navigated=!0),(r.code===3||r.code===2)&&this.restoreHistory(s);else if(r instanceof E1){let o=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),a={skipLocationChange:s.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||W7(s.source)};this.scheduleNavigation(o,_1,null,a,{resolve:s.resolve,reject:s.reject,promise:s.promise})}r instanceof S1&&this.restoreHistory(s,!0),r instanceof Fo&&(this.navigated=!0),$7(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){if(this.setUpLocationChangeListener(),!this.navigationTransitions.hasRequestedNavigation){let i=this.location.getState();this.navigateToSyncWithBrowser(this.location.path(!0),_1,i)}}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(i=>{let r=i.type==="popstate"?"popstate":"hashchange";r==="popstate"&&setTimeout(()=>{this.navigateToSyncWithBrowser(i.url,r,i.state)},0)}))}navigateToSyncWithBrowser(i,r,s){let o={replaceUrl:!0},a=s?.navigationId?s:null;if(s){let l=pe({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(i);this.scheduleNavigation(c,r,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(Id),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,r={}){let{relativeTo:s,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:a,f=null;switch(c){case"merge":f=pe(pe({},this.currentUrlTree.queryParams),o);break;case"preserve":f=this.currentUrlTree.queryParams;break;default:f=o||null}f!==null&&(f=this.removeEmptyProps(f));let d;try{let p=s?s.snapshot:this.routerState.snapshot.root;d=rm(p)}catch{(typeof i[0]!="string"||!i[0].startsWith("/"))&&(i=[]),d=this.currentUrlTree.root}return sm(d,i,f,u??null)}navigateByUrl(i,r={skipLocationChange:!1}){let s=zo(i)?i:this.parseUrl(i),o=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(o,_1,null,r)}navigate(i,r={skipLocationChange:!1}){return _A(i),this.navigateByUrl(this.createUrlTree(i,r),r)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){let r;try{r=this.urlSerializer.parse(i)}catch(s){r=this.malformedUriErrorHandler(s,this.urlSerializer,i)}return r}isActive(i,r){let s;if(r===!0?s=pe({},vA):r===!1?s=pe({},yA):s=r,zo(i))return z7(this.currentUrlTree,i,s);let o=this.parseUrl(i);return z7(this.currentUrlTree,o,s)}removeEmptyProps(i){return Object.keys(i).reduce((r,s)=>{let o=i[s];return o!=null&&(r[s]=o),r},{})}scheduleNavigation(i,r,s,o,a){if(this.disposed)return Promise.resolve(!1);let c,l,u;a?(c=a.resolve,l=a.reject,u=a.promise):u=new Promise((d,p)=>{c=d,l=p});let f=this.pendingTasks.add();return pA(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,currentBrowserUrl:this.browserUrlTree,rawUrl:i,extras:o,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(d=>Promise.reject(d))}setBrowserUrl(i,r){let s=this.urlSerializer.serialize(i);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let o=this.browserPageId,a=pe(pe({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(s,"",a)}else{let o=pe(pe({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",o)}}restoreHistory(i,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,o=this.currentPageId-s;o!==0?this.location.historyGo(o):this.currentUrlTree===this.getCurrentNavigation()?.finalUrl&&o===0&&(this.resetState(i),this.browserUrlTree=i.currentUrlTree,this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(i),this.resetUrlToCurrentUrlTree())}resetState(i){this.routerState=i.currentRouterState,this.currentUrlTree=i.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,r){return this.canceledNavigationResolution==="computed"?{navigationId:i,\u0275routerPageId:r}:{navigationId:i}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function _A(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Q(4008,!1)}function $7(n){return!(n instanceof w1)&&!(n instanceof E1)}var bA=new Se("");function xm(n,...e){return bo([{provide:Nd,multi:!0,useValue:n},[],{provide:ko,useFactory:xA,deps:[bm]},{provide:q2,multi:!0,useFactory:MA},e.map(t=>t.\u0275providers)])}function xA(n){return n.routerState.root}function MA(){let n=ye(Mr);return e=>{let t=n.get(Er);if(e!==t.components[0])return;let i=n.get(bm),r=n.get(CA);n.get(SA)===1&&i.initialNavigation(),n.get(wA,null,et.Optional)?.setUpPreloading(),n.get(bA,null,et.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var CA=new Se("",{factory:()=>new nn}),SA=new Se("",{providedIn:"root",factory:()=>1});var wA=new Se("");var I1=class{},Cl=class{},Ii="*";function Sl(n,e=null){return{type:2,steps:n,options:e}}function Pd(n){return{type:6,styles:n,offset:null}}var Ir=class{constructor(e=0,t=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=e+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){let t=e=="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},R1=class{constructor(e){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=e;let t=0,i=0,r=0,s=this.players.length;s==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++t==s&&this._onFinish()}),o.onDestroy(()=>{++i==s&&this._onDestroy()}),o.onStart(()=>{++r==s&&this._onStart()})}),this.totalTime=this.players.reduce((o,a)=>Math.max(o,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){let t=e*this.totalTime;this.players.forEach(i=>{let r=i.totalTime?Math.min(1,t/i.totalTime):1;i.setPosition(r)})}getPosition(){let e=this.players.reduce((t,i)=>t===null||i.totalTime>t.totalTime?i:t,null);return e!=null?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){let t=e=="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},wl="!";function Mm(n){return new Q(3e3,!1)}function EA(){return new Q(3100,!1)}function AA(){return new Q(3101,!1)}function TA(n){return new Q(3001,!1)}function DA(n){return new Q(3003,!1)}function IA(n){return new Q(3004,!1)}function RA(n,e){return new Q(3005,!1)}function NA(){return new Q(3006,!1)}function PA(){return new Q(3007,!1)}function LA(n,e){return new Q(3008,!1)}function OA(n){return new Q(3002,!1)}function zA(n,e,t,i,r){return new Q(3010,!1)}function FA(){return new Q(3011,!1)}function kA(){return new Q(3012,!1)}function VA(){return new Q(3200,!1)}function UA(){return new Q(3202,!1)}function HA(){return new Q(3013,!1)}function BA(n){return new Q(3014,!1)}function GA(n){return new Q(3015,!1)}function jA(n){return new Q(3016,!1)}function WA(n,e){return new Q(3404,!1)}function $A(n){return new Q(3502,!1)}function qA(n){return new Q(3503,!1)}function XA(){return new Q(3300,!1)}function ZA(n){return new Q(3504,!1)}function YA(n){return new Q(3301,!1)}function KA(n,e){return new Q(3302,!1)}function JA(n){return new Q(3303,!1)}function QA(n,e){return new Q(3400,!1)}function eT(n){return new Q(3401,!1)}function tT(n){return new Q(3402,!1)}function nT(n,e){return new Q(3505,!1)}function Rr(n){switch(n.length){case 0:return new Ir;case 1:return n[0];default:return new R1(n)}}function zm(n,e,t=new Map,i=new Map){let r=[],s=[],o=-1,a=null;if(e.forEach(c=>{let l=c.get("offset"),u=l==o,f=u&&a||new Map;c.forEach((d,p)=>{let g=p,v=d;if(p!=="offset")switch(g=n.normalizePropertyName(g,r),v){case wl:v=t.get(p);break;case Ii:v=i.get(p);break;default:v=n.normalizeStyleValue(p,g,v,r);break}f.set(g,v)}),u||s.push(f),a=f,o=l}),r.length)throw $A(r);return s}function eh(n,e,t,i){switch(e){case"start":n.onStart(()=>i(t&&Ld(t,"start",n)));break;case"done":n.onDone(()=>i(t&&Ld(t,"done",n)));break;case"destroy":n.onDestroy(()=>i(t&&Ld(t,"destroy",n)));break}}function Ld(n,e,t){let i=t.totalTime,r=!!t.disabled,s=th(n.element,n.triggerName,n.fromState,n.toState,e||n.phaseName,i??n.totalTime,r),o=n._data;return o!=null&&(s._data=o),s}function th(n,e,t,i,r="",s=0,o){return{element:n,triggerName:e,fromState:t,toState:i,phaseName:r,totalTime:s,disabled:!!o}}function Ln(n,e,t){let i=n.get(e);return i||n.set(e,i=t),i}function Cm(n){let e=n.indexOf(":"),t=n.substring(1,e),i=n.slice(e+1);return[t,i]}var iT=(()=>typeof document>"u"?null:document.documentElement)();function nh(n){let e=n.parentNode||n.host||null;return e===iT?null:e}function rT(n){return n.substring(1,6)=="ebkit"}var ws=null,Sm=!1;function sT(n){ws||(ws=oT()||{},Sm=ws.style?"WebkitAppearance"in ws.style:!1);let e=!0;return ws.style&&!rT(n)&&(e=n in ws.style,!e&&Sm&&(e="Webkit"+n.charAt(0).toUpperCase()+n.slice(1)in ws.style)),e}function oT(){return typeof document<"u"?document.body:null}function Fm(n,e){for(;e;){if(e===n)return!0;e=nh(e)}return!1}function km(n,e,t){if(t)return Array.from(n.querySelectorAll(e));let i=n.querySelector(e);return i?[i]:[]}var ih=(()=>{let e=class e{validateStyleProperty(i){return sT(i)}matchesElement(i,r){return!1}containsElement(i,r){return Fm(i,r)}getParentElement(i){return nh(i)}query(i,r,s){return km(i,r,s)}computeStyle(i,r,s){return s||""}animate(i,r,s,o,a,c=[],l){return new Ir(s,o)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:e.\u0275fac});let n=e;return n})(),k1=(()=>{let e=class e{};e.NOOP=new ih;let n=e;return n})(),aT=1e3,Vm="{{",cT="}}",Um="ng-enter",Ud="ng-leave",El="ng-trigger",Il=".ng-trigger",wm="ng-animating",Hd=".ng-animating";function Zi(n){if(typeof n=="number")return n;let e=n.match(/^(-?[\.\d]+)(m?s)/);return!e||e.length<2?0:Bd(parseFloat(e[1]),e[2])}function Bd(n,e){switch(e){case"s":return n*aT;default:return n}}function Rl(n,e,t){return n.hasOwnProperty("duration")?n:lT(n,e,t)}function lT(n,e,t){let i=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,r,s=0,o="";if(typeof n=="string"){let a=n.match(i);if(a===null)return e.push(Mm(n)),{duration:0,delay:0,easing:""};r=Bd(parseFloat(a[1]),a[2]);let c=a[3];c!=null&&(s=Bd(parseFloat(c),a[4]));let l=a[5];l&&(o=l)}else r=n;if(!t){let a=!1,c=e.length;r<0&&(e.push(EA()),a=!0),s<0&&(e.push(AA()),a=!0),a&&e.splice(c,0,Mm(n))}return{duration:r,delay:s,easing:o}}function V1(n,e={}){return Object.keys(n).forEach(t=>{e[t]=n[t]}),e}function Hm(n){let e=new Map;return Object.keys(n).forEach(t=>{let i=n[t];e.set(t,i)}),e}function uT(n){return n.length?n[0]instanceof Map?n:n.map(e=>Hm(e)):[]}function Bo(n,e=new Map,t){if(t)for(let[i,r]of t)e.set(i,r);for(let[i,r]of n)e.set(i,r);return e}function Ri(n,e,t){e.forEach((i,r)=>{let s=rh(r);t&&!t.has(r)&&t.set(r,n.style[s]),n.style[s]=i})}function As(n,e){e.forEach((t,i)=>{let r=rh(i);n.style[r]=""})}function N1(n){return Array.isArray(n)?n.length==1?n[0]:Sl(n):n}function fT(n,e,t){let i=e.params||{},r=Bm(n);r.length&&r.forEach(s=>{i.hasOwnProperty(s)||t.push(TA(s))})}var Gd=new RegExp(`${Vm}\\s*(.+?)\\s*${cT}`,"g");function Bm(n){let e=[];if(typeof n=="string"){let t;for(;t=Gd.exec(n);)e.push(t[1]);Gd.lastIndex=0}return e}function L1(n,e,t){let i=n.toString(),r=i.replace(Gd,(s,o)=>{let a=e[o];return a==null&&(t.push(DA(o)),a=""),a.toString()});return r==i?n:r}function Nl(n){let e=[],t=n.next();for(;!t.done;)e.push(t.value),t=n.next();return e}var dT=/-+([a-z0-9])/g;function rh(n){return n.replace(dT,(...e)=>e[1].toUpperCase())}function hT(n,e){return n===0||e===0}function pT(n,e,t){if(t.size&&e.length){let i=e[0],r=[];if(t.forEach((s,o)=>{i.has(o)||r.push(o),i.set(o,s)}),r.length)for(let s=1;s<e.length;s++){let o=e[s];r.forEach(a=>o.set(a,Gm(n,a)))}}return e}function Pn(n,e,t){switch(e.type){case 7:return n.visitTrigger(e,t);case 0:return n.visitState(e,t);case 1:return n.visitTransition(e,t);case 2:return n.visitSequence(e,t);case 3:return n.visitGroup(e,t);case 4:return n.visitAnimate(e,t);case 5:return n.visitKeyframes(e,t);case 6:return n.visitStyle(e,t);case 8:return n.visitReference(e,t);case 9:return n.visitAnimateChild(e,t);case 10:return n.visitAnimateRef(e,t);case 11:return n.visitQuery(e,t);case 12:return n.visitStagger(e,t);default:throw IA(e.type)}}function Gm(n,e){return window.getComputedStyle(n)[e]}var Pl="*";function mT(n,e){let t=[];return typeof n=="string"?n.split(/\s*,\s*/).forEach(i=>gT(i,t,e)):t.push(n),t}function gT(n,e,t){if(n[0]==":"){let c=vT(n,t);if(typeof c=="function"){e.push(c);return}n=c}let i=n.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return t.push(GA(n)),e;let r=i[1],s=i[2],o=i[3];e.push(Em(r,o));let a=r==Pl&&o==Pl;s[0]=="<"&&!a&&e.push(Em(o,r))}function vT(n,e){switch(n){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(t,i)=>parseFloat(i)>parseFloat(t);case":decrement":return(t,i)=>parseFloat(i)<parseFloat(t);default:return e.push(jA(n)),"* => *"}}var Al=new Set(["true","1"]),Tl=new Set(["false","0"]);function Em(n,e){let t=Al.has(n)||Tl.has(n),i=Al.has(e)||Tl.has(e);return(r,s)=>{let o=n==Pl||n==r,a=e==Pl||e==s;return!o&&t&&typeof r=="boolean"&&(o=r?Al.has(n):Tl.has(n)),!a&&i&&typeof s=="boolean"&&(a=s?Al.has(e):Tl.has(e)),o&&a}}var jm=":self",yT=new RegExp(`s*${jm}s*,?`,"g");function Wm(n,e,t,i){return new jd(n).build(e,t,i)}var Am="",jd=class{constructor(e){this._driver=e}build(e,t,i){let r=new Wd(t);return this._resetContextStyleTimingState(r),Pn(this,N1(e),r)}_resetContextStyleTimingState(e){e.currentQuerySelector=Am,e.collectedStyles=new Map,e.collectedStyles.set(Am,new Map),e.currentTime=0}visitTrigger(e,t){let i=t.queryCount=0,r=t.depCount=0,s=[],o=[];return e.name.charAt(0)=="@"&&t.errors.push(NA()),e.definitions.forEach(a=>{if(this._resetContextStyleTimingState(t),a.type==0){let c=a,l=c.name;l.toString().split(/\s*,\s*/).forEach(u=>{c.name=u,s.push(this.visitState(c,t))}),c.name=l}else if(a.type==1){let c=this.visitTransition(a,t);i+=c.queryCount,r+=c.depCount,o.push(c)}else t.errors.push(PA())}),{type:7,name:e.name,states:s,transitions:o,queryCount:i,depCount:r,options:null}}visitState(e,t){let i=this.visitStyle(e.styles,t),r=e.options&&e.options.params||null;if(i.containsDynamicStyles){let s=new Set,o=r||{};if(i.styles.forEach(a=>{a instanceof Map&&a.forEach(c=>{Bm(c).forEach(l=>{o.hasOwnProperty(l)||s.add(l)})})}),s.size){let a=Nl(s.values());t.errors.push(LA(e.name,a))}}return{type:0,name:e.name,style:i,options:r?{params:r}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;let i=Pn(this,N1(e.animation),t);return{type:1,matchers:mT(e.expr,t.errors),animation:i,queryCount:t.queryCount,depCount:t.depCount,options:Es(e.options)}}visitSequence(e,t){return{type:2,steps:e.steps.map(i=>Pn(this,i,t)),options:Es(e.options)}}visitGroup(e,t){let i=t.currentTime,r=0,s=e.steps.map(o=>{t.currentTime=i;let a=Pn(this,o,t);return r=Math.max(r,t.currentTime),a});return t.currentTime=r,{type:3,steps:s,options:Es(e.options)}}visitAnimate(e,t){let i=MT(e.timings,t.errors);t.currentAnimateTimings=i;let r,s=e.styles?e.styles:Pd({});if(s.type==5)r=this.visitKeyframes(s,t);else{let o=e.styles,a=!1;if(!o){a=!0;let l={};i.easing&&(l.easing=i.easing),o=Pd(l)}t.currentTime+=i.duration+i.delay;let c=this.visitStyle(o,t);c.isEmptyStep=a,r=c}return t.currentAnimateTimings=null,{type:4,timings:i,style:r,options:null}}visitStyle(e,t){let i=this._makeStyleAst(e,t);return this._validateStyleAst(i,t),i}_makeStyleAst(e,t){let i=[],r=Array.isArray(e.styles)?e.styles:[e.styles];for(let a of r)typeof a=="string"?a===Ii?i.push(a):t.errors.push(OA(a)):i.push(Hm(a));let s=!1,o=null;return i.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(o=a.get("easing"),a.delete("easing")),!s)){for(let c of a.values())if(c.toString().indexOf(Vm)>=0){s=!0;break}}}),{type:6,styles:i,easing:o,offset:e.offset,containsDynamicStyles:s,options:null}}_validateStyleAst(e,t){let i=t.currentAnimateTimings,r=t.currentTime,s=t.currentTime;i&&s>0&&(s-=i.duration+i.delay),e.styles.forEach(o=>{typeof o!="string"&&o.forEach((a,c)=>{let l=t.collectedStyles.get(t.currentQuerySelector),u=l.get(c),f=!0;u&&(s!=r&&s>=u.startTime&&r<=u.endTime&&(t.errors.push(zA(c,u.startTime,u.endTime,s,r)),f=!1),s=u.startTime),f&&l.set(c,{startTime:s,endTime:r}),t.options&&fT(a,t.options,t.errors)})})}visitKeyframes(e,t){let i={type:5,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push(FA()),i;let r=1,s=0,o=[],a=!1,c=!1,l=0,u=e.steps.map(h=>{let M=this._makeStyleAst(h,t),_=M.offset!=null?M.offset:xT(M.styles),C=0;return _!=null&&(s++,C=M.offset=_),c=c||C<0||C>1,a=a||C<l,l=C,o.push(C),M});c&&t.errors.push(kA()),a&&t.errors.push(VA());let f=e.steps.length,d=0;s>0&&s<f?t.errors.push(UA()):s==0&&(d=r/(f-1));let p=f-1,g=t.currentTime,v=t.currentAnimateTimings,m=v.duration;return u.forEach((h,M)=>{let _=d>0?M==p?1:d*M:o[M],C=_*m;t.currentTime=g+v.delay+C,v.duration=C,this._validateStyleAst(h,t),h.offset=_,i.styles.push(h)}),i}visitReference(e,t){return{type:8,animation:Pn(this,N1(e.animation),t),options:Es(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:9,options:Es(e.options)}}visitAnimateRef(e,t){return{type:10,animation:this.visitReference(e.animation,t),options:Es(e.options)}}visitQuery(e,t){let i=t.currentQuerySelector,r=e.options||{};t.queryCount++,t.currentQuery=e;let[s,o]=_T(e.selector);t.currentQuerySelector=i.length?i+" "+s:s,Ln(t.collectedStyles,t.currentQuerySelector,new Map);let a=Pn(this,N1(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=i,{type:11,selector:s,limit:r.limit||0,optional:!!r.optional,includeSelf:o,animation:a,originalSelector:e.selector,options:Es(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push(HA());let i=e.timings==="full"?{duration:0,delay:0,easing:"full"}:Rl(e.timings,t.errors,!0);return{type:12,animation:Pn(this,N1(e.animation),t),timings:i,options:null}}};function _T(n){let e=!!n.split(/\s*,\s*/).find(t=>t==jm);return e&&(n=n.replace(yT,"")),n=n.replace(/@\*/g,Il).replace(/@\w+/g,t=>Il+"-"+t.slice(1)).replace(/:animating/g,Hd),[n,e]}function bT(n){return n?V1(n):null}var Wd=class{constructor(e){this.errors=e,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles=new Map,this.options=null,this.unsupportedCSSPropertiesFound=new Set}};function xT(n){if(typeof n=="string")return null;let e=null;if(Array.isArray(n))n.forEach(t=>{if(t instanceof Map&&t.has("offset")){let i=t;e=parseFloat(i.get("offset")),i.delete("offset")}});else if(n instanceof Map&&n.has("offset")){let t=n;e=parseFloat(t.get("offset")),t.delete("offset")}return e}function MT(n,e){if(n.hasOwnProperty("duration"))return n;if(typeof n=="number"){let s=Rl(n,e).duration;return Od(s,0,"")}let t=n;if(t.split(/\s+/).some(s=>s.charAt(0)=="{"&&s.charAt(1)=="{")){let s=Od(0,0,"");return s.dynamic=!0,s.strValue=t,s}let r=Rl(t,e);return Od(r.duration,r.delay,r.easing)}function Es(n){return n?(n=V1(n),n.params&&(n.params=bT(n.params))):n={},n}function Od(n,e,t){return{duration:n,delay:e,easing:t}}function sh(n,e,t,i,r,s,o=null,a=!1){return{type:1,element:n,keyframes:e,preStyleProps:t,postStyleProps:i,duration:r,delay:s,totalTime:r+s,easing:o,subTimeline:a}}var O1=class{constructor(){this._map=new Map}get(e){return this._map.get(e)||[]}append(e,t){let i=this._map.get(e);i||this._map.set(e,i=[]),i.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}},CT=1,ST=":enter",wT=new RegExp(ST,"g"),ET=":leave",AT=new RegExp(ET,"g");function $m(n,e,t,i,r,s=new Map,o=new Map,a,c,l=[]){return new $d().buildKeyframes(n,e,t,i,r,s,o,a,c,l)}var $d=class{buildKeyframes(e,t,i,r,s,o,a,c,l,u=[]){l=l||new O1;let f=new qd(e,t,l,r,s,u,[]);f.options=c;let d=c.delay?Zi(c.delay):0;f.currentTimeline.delayNextStep(d),f.currentTimeline.setStyles([o],null,f.errors,c),Pn(this,i,f);let p=f.timelines.filter(g=>g.containsAnimation());if(p.length&&a.size){let g;for(let v=p.length-1;v>=0;v--){let m=p[v];if(m.element===t){g=m;break}}g&&!g.allowOnlyTimelineStyles()&&g.setStyles([a],null,f.errors,c)}return p.length?p.map(g=>g.buildKeyframes()):[sh(t,[],[],[],0,d,"",!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){let i=t.subInstructions.get(t.element);if(i){let r=t.createSubContext(e.options),s=t.currentTimeline.currentTime,o=this._visitSubInstructions(i,r,r.options);s!=o&&t.transformIntoNewTimeline(o)}t.previousNode=e}visitAnimateRef(e,t){let i=t.createSubContext(e.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([e.options,e.animation.options],t,i),this.visitReference(e.animation,i),t.transformIntoNewTimeline(i.currentTimeline.currentTime),t.previousNode=e}_applyAnimationRefDelays(e,t,i){for(let r of e){let s=r?.delay;if(s){let o=typeof s=="number"?s:Zi(L1(s,r?.params??{},t.errors));i.delayNextStep(o)}}}_visitSubInstructions(e,t,i){let s=t.currentTimeline.currentTime,o=i.duration!=null?Zi(i.duration):null,a=i.delay!=null?Zi(i.delay):null;return o!==0&&e.forEach(c=>{let l=t.appendInstructionToTimeline(c,o,a);s=Math.max(s,l.duration+l.delay)}),s}visitReference(e,t){t.updateOptions(e.options,!0),Pn(this,e.animation,t),t.previousNode=e}visitSequence(e,t){let i=t.subContextCount,r=t,s=e.options;if(s&&(s.params||s.delay)&&(r=t.createSubContext(s),r.transformIntoNewTimeline(),s.delay!=null)){r.previousNode.type==6&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=Ll);let o=Zi(s.delay);r.delayNextStep(o)}e.steps.length&&(e.steps.forEach(o=>Pn(this,o,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>i&&r.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){let i=[],r=t.currentTimeline.currentTime,s=e.options&&e.options.delay?Zi(e.options.delay):0;e.steps.forEach(o=>{let a=t.createSubContext(e.options);s&&a.delayNextStep(s),Pn(this,o,a),r=Math.max(r,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(o=>t.currentTimeline.mergeTimelineCollectedStyles(o)),t.transformIntoNewTimeline(r),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){let i=e.strValue,r=t.params?L1(i,t.params,t.errors):i;return Rl(r,t.errors)}else return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){let i=t.currentAnimateTimings=this._visitTiming(e.timings,t),r=t.currentTimeline;i.delay&&(t.incrementTime(i.delay),r.snapshotCurrentStyles());let s=e.style;s.type==5?this.visitKeyframes(s,t):(t.incrementTime(i.duration),this.visitStyle(s,t),r.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){let i=t.currentTimeline,r=t.currentAnimateTimings;!r&&i.hasCurrentStyleProperties()&&i.forwardFrame();let s=r&&r.easing||e.easing;e.isEmptyStep?i.applyEmptyStep(s):i.setStyles(e.styles,s,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){let i=t.currentAnimateTimings,r=t.currentTimeline.duration,s=i.duration,a=t.createSubContext().currentTimeline;a.easing=i.easing,e.styles.forEach(c=>{let l=c.offset||0;a.forwardTime(l*s),a.setStyles(c.styles,c.easing,t.errors,t.options),a.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(a),t.transformIntoNewTimeline(r+s),t.previousNode=e}visitQuery(e,t){let i=t.currentTimeline.currentTime,r=e.options||{},s=r.delay?Zi(r.delay):0;s&&(t.previousNode.type===6||i==0&&t.currentTimeline.hasCurrentStyleProperties())&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=Ll);let o=i,a=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!r.optional,t.errors);t.currentQueryTotal=a.length;let c=null;a.forEach((l,u)=>{t.currentQueryIndex=u;let f=t.createSubContext(e.options,l);s&&f.delayNextStep(s),l===t.element&&(c=f.currentTimeline),Pn(this,e.animation,f),f.currentTimeline.applyStylesToKeyframe();let d=f.currentTimeline.currentTime;o=Math.max(o,d)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(o),c&&(t.currentTimeline.mergeTimelineCollectedStyles(c),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){let i=t.parentContext,r=t.currentTimeline,s=e.timings,o=Math.abs(s.duration),a=o*(t.currentQueryTotal-1),c=o*t.currentQueryIndex;switch(s.duration<0?"reverse":s.easing){case"reverse":c=a-c;break;case"full":c=i.currentStaggerTime;break}let u=t.currentTimeline;c&&u.delayNextStep(c);let f=u.currentTime;Pn(this,e.animation,t),t.previousNode=e,i.currentStaggerTime=r.currentTime-f+(r.startTime-i.currentTimeline.startTime)}},Ll={},qd=class n{constructor(e,t,i,r,s,o,a,c){this._driver=e,this.element=t,this.subInstructions=i,this._enterClassName=r,this._leaveClassName=s,this.errors=o,this.timelines=a,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=Ll,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=c||new Ol(this._driver,t,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;let i=e,r=this.options;i.duration!=null&&(r.duration=Zi(i.duration)),i.delay!=null&&(r.delay=Zi(i.delay));let s=i.params;if(s){let o=r.params;o||(o=this.options.params={}),Object.keys(s).forEach(a=>{(!t||!o.hasOwnProperty(a))&&(o[a]=L1(s[a],o,this.errors))})}}_copyOptions(){let e={};if(this.options){let t=this.options.params;if(t){let i=e.params={};Object.keys(t).forEach(r=>{i[r]=t[r]})}}return e}createSubContext(e=null,t,i){let r=t||this.element,s=new n(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,i||0));return s.previousNode=this.previousNode,s.currentAnimateTimings=this.currentAnimateTimings,s.options=this._copyOptions(),s.updateOptions(e),s.currentQueryIndex=this.currentQueryIndex,s.currentQueryTotal=this.currentQueryTotal,s.parentContext=this,this.subContextCount++,s}transformIntoNewTimeline(e){return this.previousNode=Ll,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,i){let r={duration:t??e.duration,delay:this.currentTimeline.currentTime+(i??0)+e.delay,easing:""},s=new Xd(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,r,e.stretchStartingKeyframe);return this.timelines.push(s),r}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,i,r,s,o){let a=[];if(r&&a.push(this.element),e.length>0){e=e.replace(wT,"."+this._enterClassName),e=e.replace(AT,"."+this._leaveClassName);let c=i!=1,l=this._driver.query(this.element,e,c);i!==0&&(l=i<0?l.slice(l.length+i,l.length):l.slice(0,i)),a.push(...l)}return!s&&a.length==0&&o.push(BA(t)),a}},Ol=class n{constructor(e,t,i,r){this._driver=e,this.element=t,this.startTime=i,this._elementTimelineStylesLookup=r,this.duration=0,this.easing=null,this._previousKeyframe=new Map,this._currentKeyframe=new Map,this._keyframes=new Map,this._styleSummary=new Map,this._localTimelineStyles=new Map,this._pendingStyles=new Map,this._backFill=new Map,this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(e){let t=this._keyframes.size===1&&this._pendingStyles.size;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new n(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=CT,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles.set(e,t),this._globalTimelineStyles.set(e,t),this._styleSummary.set(e,{time:this.currentTime,value:t})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&this._previousKeyframe.set("easing",e);for(let[t,i]of this._globalTimelineStyles)this._backFill.set(t,i||Ii),this._currentKeyframe.set(t,Ii);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,i,r){t&&this._previousKeyframe.set("easing",t);let s=r&&r.params||{},o=TT(e,this._globalTimelineStyles);for(let[a,c]of o){let l=L1(c,s,i);this._pendingStyles.set(a,l),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??Ii),this._updateStyle(a,l)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((e,t)=>{this._currentKeyframe.set(t,e)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((e,t)=>{this._currentKeyframe.has(t)||this._currentKeyframe.set(t,e)}))}snapshotCurrentStyles(){for(let[e,t]of this._localTimelineStyles)this._pendingStyles.set(e,t),this._updateStyle(e,t)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){e._styleSummary.forEach((t,i)=>{let r=this._styleSummary.get(i);(!r||t.time>r.time)&&this._updateStyle(i,t.value)})}buildKeyframes(){this.applyStylesToKeyframe();let e=new Set,t=new Set,i=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((a,c)=>{let l=Bo(a,new Map,this._backFill);l.forEach((u,f)=>{u===wl?e.add(f):u===Ii&&t.add(f)}),i||l.set("offset",c/this.duration),r.push(l)});let s=e.size?Nl(e.values()):[],o=t.size?Nl(t.values()):[];if(i){let a=r[0],c=new Map(a);a.set("offset",0),c.set("offset",1),r=[a,c]}return sh(this.element,r,s,o,this.duration,this.startTime,this.easing,!1)}},Xd=class extends Ol{constructor(e,t,i,r,s,o,a=!1){super(e,t,o.delay),this.keyframes=i,this.preStyleProps=r,this.postStyleProps=s,this._stretchStartingKeyframe=a,this.timings={duration:o.duration,delay:o.delay,easing:o.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:i,easing:r}=this.timings;if(this._stretchStartingKeyframe&&t){let s=[],o=i+t,a=t/o,c=Bo(e[0]);c.set("offset",0),s.push(c);let l=Bo(e[0]);l.set("offset",Tm(a)),s.push(l);let u=e.length-1;for(let f=1;f<=u;f++){let d=Bo(e[f]),p=d.get("offset"),g=t+p*i;d.set("offset",Tm(g/o)),s.push(d)}i=o,t=0,r="",e=s}return sh(this.element,e,this.preStyleProps,this.postStyleProps,i,t,r,!0)}};function Tm(n,e=3){let t=Math.pow(10,e-1);return Math.round(n*t)/t}function TT(n,e){let t=new Map,i;return n.forEach(r=>{if(r==="*"){i=i||e.keys();for(let s of i)t.set(s,Ii)}else Bo(r,t)}),t}var Ts=class{};var DT=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),zl=class extends Ts{normalizePropertyName(e,t){return rh(e)}normalizeStyleValue(e,t,i,r){let s="",o=i.toString().trim();if(DT.has(t)&&i!==0&&i!=="0")if(typeof i=="number")s="px";else{let a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&r.push(RA(e,i))}return o+s}};function Dm(n,e,t,i,r,s,o,a,c,l,u,f,d){return{type:0,element:n,triggerName:e,isRemovalTransition:r,fromState:t,fromStyles:s,toState:i,toStyles:o,timelines:a,queriedElements:c,preStyleProps:l,postStyleProps:u,totalTime:f,errors:d}}var zd={},Fl=class{constructor(e,t,i){this._triggerName=e,this.ast=t,this._stateStyles=i}match(e,t,i,r){return IT(this.ast.matchers,e,t,i,r)}buildStyles(e,t,i){let r=this._stateStyles.get("*");return e!==void 0&&(r=this._stateStyles.get(e?.toString())||r),r?r.buildStyles(t,i):new Map}build(e,t,i,r,s,o,a,c,l,u){let f=[],d=this.ast.options&&this.ast.options.params||zd,p=a&&a.params||zd,g=this.buildStyles(i,p,f),v=c&&c.params||zd,m=this.buildStyles(r,v,f),h=new Set,M=new Map,_=new Map,C=r==="void",D={params:RT(v,d),delay:this.ast.options?.delay},A=u?[]:$m(e,t,this.ast.animation,s,o,g,m,D,l,f),E=0;if(A.forEach(b=>{E=Math.max(b.duration+b.delay,E)}),f.length)return Dm(t,this._triggerName,i,r,C,g,m,[],[],M,_,E,f);A.forEach(b=>{let w=b.element,j=Ln(M,w,new Set);b.preStyleProps.forEach(ne=>j.add(ne));let X=Ln(_,w,new Set);b.postStyleProps.forEach(ne=>X.add(ne)),w!==t&&h.add(w)});let q=Nl(h.values());return Dm(t,this._triggerName,i,r,C,g,m,A,q,M,_,E)}};function IT(n,e,t,i,r){return n.some(s=>s(e,t,i,r))}function RT(n,e){let t=V1(e);for(let i in n)n.hasOwnProperty(i)&&n[i]!=null&&(t[i]=n[i]);return t}var Zd=class{constructor(e,t,i){this.styles=e,this.defaultParams=t,this.normalizer=i}buildStyles(e,t){let i=new Map,r=V1(this.defaultParams);return Object.keys(e).forEach(s=>{let o=e[s];o!==null&&(r[s]=o)}),this.styles.styles.forEach(s=>{typeof s!="string"&&s.forEach((o,a)=>{o&&(o=L1(o,r,t));let c=this.normalizer.normalizePropertyName(a,t);o=this.normalizer.normalizeStyleValue(a,c,o,t),i.set(a,o)})}),i}};function NT(n,e,t){return new Yd(n,e,t)}var Yd=class{constructor(e,t,i){this.name=e,this.ast=t,this._normalizer=i,this.transitionFactories=[],this.states=new Map,t.states.forEach(r=>{let s=r.options&&r.options.params||{};this.states.set(r.name,new Zd(r.style,s,i))}),Im(this.states,"true","1"),Im(this.states,"false","0"),t.transitions.forEach(r=>{this.transitionFactories.push(new Fl(e,r,this.states))}),this.fallbackTransition=PT(e,this.states,this._normalizer)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,i,r){return this.transitionFactories.find(o=>o.match(e,t,i,r))||null}matchStyles(e,t,i){return this.fallbackTransition.buildStyles(e,t,i)}};function PT(n,e,t){let s={type:1,animation:{type:2,steps:[],options:null},matchers:[(o,a)=>!0],options:null,queryCount:0,depCount:0};return new Fl(n,s,e)}function Im(n,e,t){n.has(e)?n.has(t)||n.set(t,n.get(e)):n.has(t)&&n.set(e,n.get(t))}var LT=new O1,Kd=class{constructor(e,t,i){this.bodyNode=e,this._driver=t,this._normalizer=i,this._animations=new Map,this._playersById=new Map,this.players=[]}register(e,t){let i=[],r=[],s=Wm(this._driver,t,i,r);if(i.length)throw qA(i);r.length&&void 0,this._animations.set(e,s)}_buildPlayer(e,t,i){let r=e.element,s=zm(this._normalizer,e.keyframes,t,i);return this._driver.animate(r,s,e.duration,e.delay,e.easing,[],!0)}create(e,t,i={}){let r=[],s=this._animations.get(e),o,a=new Map;if(s?(o=$m(this._driver,t,s,Um,Ud,new Map,new Map,i,LT,r),o.forEach(u=>{let f=Ln(a,u.element,new Map);u.postStyleProps.forEach(d=>f.set(d,null))})):(r.push(XA()),o=[]),r.length)throw ZA(r);a.forEach((u,f)=>{u.forEach((d,p)=>{u.set(p,this._driver.computeStyle(f,p,Ii))})});let c=o.map(u=>{let f=a.get(u.element);return this._buildPlayer(u,new Map,f)}),l=Rr(c);return this._playersById.set(e,l),l.onDestroy(()=>this.destroy(e)),this.players.push(l),l}destroy(e){let t=this._getPlayer(e);t.destroy(),this._playersById.delete(e);let i=this.players.indexOf(t);i>=0&&this.players.splice(i,1)}_getPlayer(e){let t=this._playersById.get(e);if(!t)throw YA(e);return t}listen(e,t,i,r){let s=th(t,"","","");return eh(this._getPlayer(e),i,s,r),()=>{}}command(e,t,i,r){if(i=="register"){this.register(e,r[0]);return}if(i=="create"){let o=r[0]||{};this.create(e,t,o);return}let s=this._getPlayer(e);switch(i){case"play":s.play();break;case"pause":s.pause();break;case"reset":s.reset();break;case"restart":s.restart();break;case"finish":s.finish();break;case"init":s.init();break;case"setPosition":s.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(e);break}}},Rm="ng-animate-queued",OT=".ng-animate-queued",Fd="ng-animate-disabled",zT=".ng-animate-disabled",FT="ng-star-inserted",kT=".ng-star-inserted",VT=[],qm={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},UT={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},fi="__ng_removed",z1=class{get params(){return this.options.params}constructor(e,t=""){this.namespaceId=t;let i=e&&e.hasOwnProperty("value"),r=i?e.value:e;if(this.value=BT(r),i){let s=V1(e);delete s.value,this.options=s}else this.options={};this.options.params||(this.options.params={})}absorbOptions(e){let t=e.params;if(t){let i=this.options.params;Object.keys(t).forEach(r=>{i[r]==null&&(i[r]=t[r])})}}},P1="void",kd=new z1(P1),Jd=class{constructor(e,t,i){this.id=e,this.hostElement=t,this._engine=i,this.players=[],this._triggers=new Map,this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+e,Zn(t,this._hostClassName)}listen(e,t,i,r){if(!this._triggers.has(t))throw KA(i,t);if(i==null||i.length==0)throw JA(t);if(!GT(i))throw QA(i,t);let s=Ln(this._elementListeners,e,[]),o={name:t,phase:i,callback:r};s.push(o);let a=Ln(this._engine.statesByElement,e,new Map);return a.has(t)||(Zn(e,El),Zn(e,El+"-"+t),a.set(t,kd)),()=>{this._engine.afterFlush(()=>{let c=s.indexOf(o);c>=0&&s.splice(c,1),this._triggers.has(t)||a.delete(t)})}}register(e,t){return this._triggers.has(e)?!1:(this._triggers.set(e,t),!0)}_getTrigger(e){let t=this._triggers.get(e);if(!t)throw eT(e);return t}trigger(e,t,i,r=!0){let s=this._getTrigger(t),o=new F1(this.id,t,e),a=this._engine.statesByElement.get(e);a||(Zn(e,El),Zn(e,El+"-"+t),this._engine.statesByElement.set(e,a=new Map));let c=a.get(t),l=new z1(i,this.id);if(!(i&&i.hasOwnProperty("value"))&&c&&l.absorbOptions(c.options),a.set(t,l),c||(c=kd),!(l.value===P1)&&c.value===l.value){if(!$T(c.params,l.params)){let v=[],m=s.matchStyles(c.value,c.params,v),h=s.matchStyles(l.value,l.params,v);v.length?this._engine.reportError(v):this._engine.afterFlush(()=>{As(e,m),Ri(e,h)})}return}let d=Ln(this._engine.playersByElement,e,[]);d.forEach(v=>{v.namespaceId==this.id&&v.triggerName==t&&v.queued&&v.destroy()});let p=s.matchTransition(c.value,l.value,e,l.params),g=!1;if(!p){if(!r)return;p=s.fallbackTransition,g=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:p,fromState:c,toState:l,player:o,isFallbackTransition:g}),g||(Zn(e,Rm),o.onStart(()=>{Ho(e,Rm)})),o.onDone(()=>{let v=this.players.indexOf(o);v>=0&&this.players.splice(v,1);let m=this._engine.playersByElement.get(e);if(m){let h=m.indexOf(o);h>=0&&m.splice(h,1)}}),this.players.push(o),d.push(o),o}deregister(e){this._triggers.delete(e),this._engine.statesByElement.forEach(t=>t.delete(e)),this._elementListeners.forEach((t,i)=>{this._elementListeners.set(i,t.filter(r=>r.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);let t=this._engine.playersByElement.get(e);t&&(t.forEach(i=>i.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){let i=this._engine.driver.query(e,Il,!0);i.forEach(r=>{if(r[fi])return;let s=this._engine.fetchNamespacesByElement(r);s.size?s.forEach(o=>o.triggerLeaveAnimation(r,t,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(e,t,i,r){let s=this._engine.statesByElement.get(e),o=new Map;if(s){let a=[];if(s.forEach((c,l)=>{if(o.set(l,c.value),this._triggers.has(l)){let u=this.trigger(e,l,P1,r);u&&a.push(u)}}),a.length)return this._engine.markElementAsRemoved(this.id,e,!0,t,o),i&&Rr(a).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){let t=this._elementListeners.get(e),i=this._engine.statesByElement.get(e);if(t&&i){let r=new Set;t.forEach(s=>{let o=s.name;if(r.has(o))return;r.add(o);let c=this._triggers.get(o).fallbackTransition,l=i.get(o)||kd,u=new z1(P1),f=new F1(this.id,o,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:o,transition:c,fromState:l,toState:u,player:f,isFallbackTransition:!0})})}}removeNode(e,t){let i=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let r=!1;if(i.totalAnimations){let s=i.players.length?i.playersByQueriedElement.get(e):[];if(s&&s.length)r=!0;else{let o=e;for(;o=o.parentNode;)if(i.statesByElement.get(o)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(e),r)i.markElementAsRemoved(this.id,e,!1,t);else{let s=e[fi];(!s||s===qm)&&(i.afterFlush(()=>this.clearElementCache(e)),i.destroyInnerAnimations(e),i._onRemovalComplete(e,t))}}insertNode(e,t){Zn(e,this._hostClassName)}drainQueuedTransitions(e){let t=[];return this._queue.forEach(i=>{let r=i.player;if(r.destroyed)return;let s=i.element,o=this._elementListeners.get(s);o&&o.forEach(a=>{if(a.name==i.triggerName){let c=th(s,i.triggerName,i.fromState.value,i.toState.value);c._data=e,eh(i.player,a.phase,c,a.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):t.push(i)}),this._queue=[],t.sort((i,r)=>{let s=i.transition.ast.depCount,o=r.transition.ast.depCount;return s==0||o==0?s-o:this._engine.driver.containsElement(i.element,r.element)?1:-1})}destroy(e){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}},Qd=class{_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}constructor(e,t,i){this.bodyNode=e,this.driver=t,this._normalizer=i,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(r,s)=>{}}get queuedPlayers(){let e=[];return this._namespaceList.forEach(t=>{t.players.forEach(i=>{i.queued&&e.push(i)})}),e}createNamespace(e,t){let i=new Jd(e,t,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,t)?this._balanceNamespaceList(i,t):(this.newHostElements.set(t,i),this.collectEnterElement(t)),this._namespaceLookup[e]=i}_balanceNamespaceList(e,t){let i=this._namespaceList,r=this.namespacesByHostElement;if(i.length-1>=0){let o=!1,a=this.driver.getParentElement(t);for(;a;){let c=r.get(a);if(c){let l=i.indexOf(c);i.splice(l+1,0,e),o=!0;break}a=this.driver.getParentElement(a)}o||i.unshift(e)}else i.push(e);return r.set(t,e),e}register(e,t){let i=this._namespaceLookup[e];return i||(i=this.createNamespace(e,t)),i}registerTrigger(e,t,i){let r=this._namespaceLookup[e];r&&r.register(t,i)&&this.totalAnimations++}destroy(e,t){e&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(e);this.namespacesByHostElement.delete(i.hostElement);let r=this._namespaceList.indexOf(i);r>=0&&this._namespaceList.splice(r,1),i.destroy(t),delete this._namespaceLookup[e]}))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){let t=new Set,i=this.statesByElement.get(e);if(i){for(let r of i.values())if(r.namespaceId){let s=this._fetchNamespace(r.namespaceId);s&&t.add(s)}}return t}trigger(e,t,i,r){if(Dl(t)){let s=this._fetchNamespace(e);if(s)return s.trigger(t,i,r),!0}return!1}insertNode(e,t,i,r){if(!Dl(t))return;let s=t[fi];if(s&&s.setForRemoval){s.setForRemoval=!1,s.setForMove=!0;let o=this.collectedLeaveElements.indexOf(t);o>=0&&this.collectedLeaveElements.splice(o,1)}if(e){let o=this._fetchNamespace(e);o&&o.insertNode(t,i)}r&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),Zn(e,Fd)):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),Ho(e,Fd))}removeNode(e,t,i){if(Dl(t)){let r=e?this._fetchNamespace(e):null;r?r.removeNode(t,i):this.markElementAsRemoved(e,t,!1,i);let s=this.namespacesByHostElement.get(t);s&&s.id!==e&&s.removeNode(t,i)}else this._onRemovalComplete(t,i)}markElementAsRemoved(e,t,i,r,s){this.collectedLeaveElements.push(t),t[fi]={namespaceId:e,setForRemoval:r,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:s}}listen(e,t,i,r,s){return Dl(t)?this._fetchNamespace(e).listen(t,i,r,s):()=>{}}_buildInstruction(e,t,i,r,s){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,i,r,e.fromState.options,e.toState.options,t,s)}destroyInnerAnimations(e){let t=this.driver.query(e,Il,!0);t.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(t=this.driver.query(e,Hd,!0),t.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(e){let t=this.playersByElement.get(e);t&&t.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(e){let t=this.playersByQueriedElement.get(e);t&&t.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return Rr(this.players).onDone(()=>e());e()})}processLeaveNode(e){let t=e[fi];if(t&&t.setForRemoval){if(e[fi]=qm,t.namespaceId){this.destroyInnerAnimations(e);let i=this._fetchNamespace(t.namespaceId);i&&i.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}e.classList?.contains(Fd)&&this.markElementAsDisabled(e,!1),this.driver.query(e,zT,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,r)=>this._balanceNamespaceList(i,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let r=this.collectedEnterElements[i];Zn(r,FT)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{t=this._flushAnimations(i,e)}finally{for(let r=0;r<i.length;r++)i[r]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let r=this.collectedLeaveElements[i];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],t.length?Rr(t).onDone(()=>{i.forEach(r=>r())}):i.forEach(r=>r())}}reportError(e){throw tT(e)}_flushAnimations(e,t){let i=new O1,r=[],s=new Map,o=[],a=new Map,c=new Map,l=new Map,u=new Set;this.disabledNodes.forEach(I=>{u.add(I);let L=this.driver.query(I,OT,!0);for(let P=0;P<L.length;P++)u.add(L[P])});let f=this.bodyNode,d=Array.from(this.statesByElement.keys()),p=Lm(d,this.collectedEnterElements),g=new Map,v=0;p.forEach((I,L)=>{let P=Um+v++;g.set(L,P),I.forEach(H=>Zn(H,P))});let m=[],h=new Set,M=new Set;for(let I=0;I<this.collectedLeaveElements.length;I++){let L=this.collectedLeaveElements[I],P=L[fi];P&&P.setForRemoval&&(m.push(L),h.add(L),P.hasAnimation?this.driver.query(L,kT,!0).forEach(H=>h.add(H)):M.add(L))}let _=new Map,C=Lm(d,Array.from(h));C.forEach((I,L)=>{let P=Ud+v++;_.set(L,P),I.forEach(H=>Zn(H,P))}),e.push(()=>{p.forEach((I,L)=>{let P=g.get(L);I.forEach(H=>Ho(H,P))}),C.forEach((I,L)=>{let P=_.get(L);I.forEach(H=>Ho(H,P))}),m.forEach(I=>{this.processLeaveNode(I)})});let D=[],A=[];for(let I=this._namespaceList.length-1;I>=0;I--)this._namespaceList[I].drainQueuedTransitions(t).forEach(P=>{let H=P.player,$=P.element;if(D.push(H),this.collectedEnterElements.length){let le=$[fi];if(le&&le.setForMove){if(le.previousTriggersValues&&le.previousTriggersValues.has(P.triggerName)){let De=le.previousTriggersValues.get(P.triggerName),Ce=this.statesByElement.get(P.element);if(Ce&&Ce.has(P.triggerName)){let Ee=Ce.get(P.triggerName);Ee.value=De,Ce.set(P.triggerName,Ee)}}H.destroy();return}}let J=!f||!this.driver.containsElement(f,$),Y=_.get($),G=g.get($),W=this._buildInstruction(P,i,G,Y,J);if(W.errors&&W.errors.length){A.push(W);return}if(J){H.onStart(()=>As($,W.fromStyles)),H.onDestroy(()=>Ri($,W.toStyles)),r.push(H);return}if(P.isFallbackTransition){H.onStart(()=>As($,W.fromStyles)),H.onDestroy(()=>Ri($,W.toStyles)),r.push(H);return}let ce=[];W.timelines.forEach(le=>{le.stretchStartingKeyframe=!0,this.disabledNodes.has(le.element)||ce.push(le)}),W.timelines=ce,i.append($,W.timelines);let be={instruction:W,player:H,element:$};o.push(be),W.queriedElements.forEach(le=>Ln(a,le,[]).push(H)),W.preStyleProps.forEach((le,De)=>{if(le.size){let Ce=c.get(De);Ce||c.set(De,Ce=new Set),le.forEach((Ee,nt)=>Ce.add(nt))}}),W.postStyleProps.forEach((le,De)=>{let Ce=l.get(De);Ce||l.set(De,Ce=new Set),le.forEach((Ee,nt)=>Ce.add(nt))})});if(A.length){let I=[];A.forEach(L=>{I.push(nT(L.triggerName,L.errors))}),D.forEach(L=>L.destroy()),this.reportError(I)}let E=new Map,q=new Map;o.forEach(I=>{let L=I.element;i.has(L)&&(q.set(L,L),this._beforeAnimationBuild(I.player.namespaceId,I.instruction,E))}),r.forEach(I=>{let L=I.element;this._getPreviousPlayers(L,!1,I.namespaceId,I.triggerName,null).forEach(H=>{Ln(E,L,[]).push(H),H.destroy()})});let b=m.filter(I=>Om(I,c,l)),w=new Map;Pm(w,this.driver,M,l,Ii).forEach(I=>{Om(I,c,l)&&b.push(I)});let X=new Map;p.forEach((I,L)=>{Pm(X,this.driver,new Set(I),c,wl)}),b.forEach(I=>{let L=w.get(I),P=X.get(I);w.set(I,new Map([...L?.entries()??[],...P?.entries()??[]]))});let ne=[],R=[],U={};o.forEach(I=>{let{element:L,player:P,instruction:H}=I;if(i.has(L)){if(u.has(L)){P.onDestroy(()=>Ri(L,H.toStyles)),P.disabled=!0,P.overrideTotalTime(H.totalTime),r.push(P);return}let $=U;if(q.size>1){let Y=L,G=[];for(;Y=Y.parentNode;){let W=q.get(Y);if(W){$=W;break}G.push(Y)}G.forEach(W=>q.set(W,$))}let J=this._buildAnimation(P.namespaceId,H,E,s,X,w);if(P.setRealPlayer(J),$===U)ne.push(P);else{let Y=this.playersByElement.get($);Y&&Y.length&&(P.parentPlayer=Rr(Y)),r.push(P)}}else As(L,H.fromStyles),P.onDestroy(()=>Ri(L,H.toStyles)),R.push(P),u.has(L)&&r.push(P)}),R.forEach(I=>{let L=s.get(I.element);if(L&&L.length){let P=Rr(L);I.setRealPlayer(P)}}),r.forEach(I=>{I.parentPlayer?I.syncPlayerEvents(I.parentPlayer):I.destroy()});for(let I=0;I<m.length;I++){let L=m[I],P=L[fi];if(Ho(L,Ud),P&&P.hasAnimation)continue;let H=[];if(a.size){let J=a.get(L);J&&J.length&&H.push(...J);let Y=this.driver.query(L,Hd,!0);for(let G=0;G<Y.length;G++){let W=a.get(Y[G]);W&&W.length&&H.push(...W)}}let $=H.filter(J=>!J.destroyed);$.length?jT(this,L,$):this.processLeaveNode(L)}return m.length=0,ne.forEach(I=>{this.players.push(I),I.onDone(()=>{I.destroy();let L=this.players.indexOf(I);this.players.splice(L,1)}),I.play()}),ne}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,i,r,s){let o=[];if(t){let a=this.playersByQueriedElement.get(e);a&&(o=a)}else{let a=this.playersByElement.get(e);if(a){let c=!s||s==P1;a.forEach(l=>{l.queued||!c&&l.triggerName!=r||o.push(l)})}}return(i||r)&&(o=o.filter(a=>!(i&&i!=a.namespaceId||r&&r!=a.triggerName))),o}_beforeAnimationBuild(e,t,i){let r=t.triggerName,s=t.element,o=t.isRemovalTransition?void 0:e,a=t.isRemovalTransition?void 0:r;for(let c of t.timelines){let l=c.element,u=l!==s,f=Ln(i,l,[]);this._getPreviousPlayers(l,u,o,a,t.toState).forEach(p=>{let g=p.getRealPlayer();g.beforeDestroy&&g.beforeDestroy(),p.destroy(),f.push(p)})}As(s,t.fromStyles)}_buildAnimation(e,t,i,r,s,o){let a=t.triggerName,c=t.element,l=[],u=new Set,f=new Set,d=t.timelines.map(g=>{let v=g.element;u.add(v);let m=v[fi];if(m&&m.removedBeforeQueried)return new Ir(g.duration,g.delay);let h=v!==c,M=WT((i.get(v)||VT).map(E=>E.getRealPlayer())).filter(E=>{let q=E;return q.element?q.element===v:!1}),_=s.get(v),C=o.get(v),D=zm(this._normalizer,g.keyframes,_,C),A=this._buildPlayer(g,D,M);if(g.subTimeline&&r&&f.add(v),h){let E=new F1(e,a,v);E.setRealPlayer(A),l.push(E)}return A});l.forEach(g=>{Ln(this.playersByQueriedElement,g.element,[]).push(g),g.onDone(()=>HT(this.playersByQueriedElement,g.element,g))}),u.forEach(g=>Zn(g,wm));let p=Rr(d);return p.onDestroy(()=>{u.forEach(g=>Ho(g,wm)),Ri(c,t.toStyles)}),f.forEach(g=>{Ln(r,g,[]).push(p)}),p}_buildPlayer(e,t,i){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,i):new Ir(e.duration,e.delay)}},F1=class{constructor(e,t,i){this.namespaceId=e,this.triggerName=t,this.element=i,this._player=new Ir,this._containsRealPlayer=!1,this._queuedCallbacks=new Map,this.destroyed=!1,this.parentPlayer=null,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(e){this._containsRealPlayer||(this._player=e,this._queuedCallbacks.forEach((t,i)=>{t.forEach(r=>eh(e,i,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){let t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){Ln(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){let t=this._player;t.triggerCallback&&t.triggerCallback(e)}};function HT(n,e,t){let i=n.get(e);if(i){if(i.length){let r=i.indexOf(t);i.splice(r,1)}i.length==0&&n.delete(e)}return i}function BT(n){return n??null}function Dl(n){return n&&n.nodeType===1}function GT(n){return n=="start"||n=="done"}function Nm(n,e){let t=n.style.display;return n.style.display=e??"none",t}function Pm(n,e,t,i,r){let s=[];t.forEach(c=>s.push(Nm(c)));let o=[];i.forEach((c,l)=>{let u=new Map;c.forEach(f=>{let d=e.computeStyle(l,f,r);u.set(f,d),(!d||d.length==0)&&(l[fi]=UT,o.push(l))}),n.set(l,u)});let a=0;return t.forEach(c=>Nm(c,s[a++])),o}function Lm(n,e){let t=new Map;if(n.forEach(a=>t.set(a,[])),e.length==0)return t;let i=1,r=new Set(e),s=new Map;function o(a){if(!a)return i;let c=s.get(a);if(c)return c;let l=a.parentNode;return t.has(l)?c=l:r.has(l)?c=i:c=o(l),s.set(a,c),c}return e.forEach(a=>{let c=o(a);c!==i&&t.get(c).push(a)}),t}function Zn(n,e){n.classList?.add(e)}function Ho(n,e){n.classList?.remove(e)}function jT(n,e,t){Rr(t).onDone(()=>n.processLeaveNode(e))}function WT(n){let e=[];return Xm(n,e),e}function Xm(n,e){for(let t=0;t<n.length;t++){let i=n[t];i instanceof R1?Xm(i.players,e):e.push(i)}}function $T(n,e){let t=Object.keys(n),i=Object.keys(e);if(t.length!=i.length)return!1;for(let r=0;r<t.length;r++){let s=t[r];if(!e.hasOwnProperty(s)||n[s]!==e[s])return!1}return!0}function Om(n,e,t){let i=t.get(n);if(!i)return!1;let r=e.get(n);return r?i.forEach(s=>r.add(s)):e.set(n,i),t.delete(n),!0}var Nr=class{constructor(e,t,i){this.bodyNode=e,this._driver=t,this._normalizer=i,this._triggerCache={},this.onRemovalComplete=(r,s)=>{},this._transitionEngine=new Qd(e,t,i),this._timelineEngine=new Kd(e,t,i),this._transitionEngine.onRemovalComplete=(r,s)=>this.onRemovalComplete(r,s)}registerTrigger(e,t,i,r,s){let o=e+"-"+r,a=this._triggerCache[o];if(!a){let c=[],l=[],u=Wm(this._driver,s,c,l);if(c.length)throw WA(r,c);l.length&&void 0,a=NT(r,u,this._normalizer),this._triggerCache[o]=a}this._transitionEngine.registerTrigger(t,r,a)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,i,r){this._transitionEngine.insertNode(e,t,i,r)}onRemove(e,t,i){this._transitionEngine.removeNode(e,t,i)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,i,r){if(i.charAt(0)=="@"){let[s,o]=Cm(i),a=r;this._timelineEngine.command(s,t,o,a)}else this._transitionEngine.trigger(e,t,i,r)}listen(e,t,i,r,s){if(i.charAt(0)=="@"){let[o,a]=Cm(i);return this._timelineEngine.listen(o,t,a,s)}return this._transitionEngine.listen(e,t,i,r,s)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(e){this._transitionEngine.afterFlushAnimationsDone(e)}};function qT(n,e){let t=null,i=null;return Array.isArray(e)&&e.length?(t=Vd(e[0]),e.length>1&&(i=Vd(e[e.length-1]))):e instanceof Map&&(t=Vd(e)),t||i?new XT(n,t,i):null}var XT=(()=>{let e=class e{constructor(i,r,s){this._element=i,this._startStyles=r,this._endStyles=s,this._state=0;let o=e.initialStylesByElement.get(i);o||e.initialStylesByElement.set(i,o=new Map),this._initialStyles=o}start(){this._state<1&&(this._startStyles&&Ri(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Ri(this._element,this._initialStyles),this._endStyles&&(Ri(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(e.initialStylesByElement.delete(this._element),this._startStyles&&(As(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(As(this._element,this._endStyles),this._endStyles=null),Ri(this._element,this._initialStyles),this._state=3)}};e.initialStylesByElement=new WeakMap;let n=e;return n})();function Vd(n){let e=null;return n.forEach((t,i)=>{ZT(i)&&(e=e||new Map,e.set(i,t))}),e}function ZT(n){return n==="display"||n==="position"}var kl=class{constructor(e,t,i,r){this.element=e,this.keyframes=t,this.options=i,this._specialStyles=r,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this._originalOnDoneFns=[],this._originalOnStartFns=[],this.time=0,this.parentPlayer=null,this.currentSnapshot=new Map,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;let e=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,e,this.options),this._finalKeyframe=e.length?e[e.length-1]:new Map;let t=()=>this._onFinish();this.domPlayer.addEventListener("finish",t),this.onDestroy(()=>{this.domPlayer.removeEventListener("finish",t)})}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_convertKeyframesToObject(e){let t=[];return e.forEach(i=>{t.push(Object.fromEntries(i))}),t}_triggerWebAnimation(e,t,i){return e.animate(this._convertKeyframesToObject(t),i)}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){this.domPlayer===void 0&&this.init(),this.domPlayer.currentTime=e*this.time}getPosition(){return+(this.domPlayer.currentTime??0)/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){let e=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,r)=>{r!=="offset"&&e.set(r,this._finished?i:Gm(this.element,r))}),this.currentSnapshot=e}triggerCallback(e){let t=e==="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},Vl=class{validateStyleProperty(e){return!0}validateAnimatableStyleProperty(e){return!0}matchesElement(e,t){return!1}containsElement(e,t){return Fm(e,t)}getParentElement(e){return nh(e)}query(e,t,i){return km(e,t,i)}computeStyle(e,t,i){return window.getComputedStyle(e)[t]}animate(e,t,i,r,s,o=[]){let a=r==0?"both":"forwards",c={duration:i,delay:r,fill:a};s&&(c.easing=s);let l=new Map,u=o.filter(p=>p instanceof kl);hT(i,r)&&u.forEach(p=>{p.currentSnapshot.forEach((g,v)=>l.set(v,g))});let f=uT(t).map(p=>Bo(p));f=pT(e,f,l);let d=qT(e,f);return new kl(e,f,c,d)}};var KT=(()=>{let e=class e extends I1{constructor(i,r){super(),this._nextAnimationId=0;let s={id:"0",encapsulation:Bn.None,styles:[],data:{animation:[]}};this._renderer=i.createRenderer(r.body,s)}build(i){let r=this._nextAnimationId.toString();this._nextAnimationId++;let s=Array.isArray(i)?Sl(i):i;return Zm(this._renderer,null,r,"register",[s]),new oh(r,this._renderer)}};e.\u0275fac=function(r){return new(r||e)(se(wi),se(It))},e.\u0275prov=fe({token:e,factory:e.\u0275fac});let n=e;return n})(),oh=class extends Cl{constructor(e,t){super(),this._id=e,this._renderer=t}create(e,t){return new ah(this._id,e,t||{},this._renderer)}},ah=class{constructor(e,t,i,r){this.id=e,this.element=t,this._renderer=r,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",i)}_listen(e,t){return this._renderer.listen(this.element,`@@${this.id}:${e}`,t)}_command(e,...t){return Zm(this._renderer,this.element,this.id,e,t)}onDone(e){this._listen("done",e)}onStart(e){this._listen("start",e)}onDestroy(e){this._listen("destroy",e)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset"),this._started=!1}setPosition(e){this._command("setPosition",e)}getPosition(){return this._renderer.engine.players[+this.id]?.getPosition()??0}};function Zm(n,e,t,i,r){return n.setProperty(e,`@@${t}:${i}`,r)}var Ul="@",Ym="@.disabled",JT=(()=>{let e=class e{constructor(i,r,s){this.delegate=i,this.engine=r,this._zone=s,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,r.onRemovalComplete=(o,a)=>{let c=a?.parentNode(o);c&&a.removeChild(c,o)}}createRenderer(i,r){let s="",o=this.delegate.createRenderer(i,r);if(!i||!r||!r.data||!r.data.animation){let f=this._rendererCache.get(o);if(!f){let d=()=>this._rendererCache.delete(o);f=new Hl(s,o,this.engine,d),this._rendererCache.set(o,f)}return f}let a=r.id,c=r.id+"-"+this._currentId;this._currentId++,this.engine.register(c,i);let l=f=>{Array.isArray(f)?f.forEach(l):this.engine.registerTrigger(a,c,i,f.name,f)};return r.data.animation.forEach(l),new ch(this,c,o,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(i,r,s){if(i>=0&&i<this._microtaskId){this._zone.run(()=>r(s));return}this._animationCallbacksBuffer.length==0&&queueMicrotask(()=>{this._zone.run(()=>{this._animationCallbacksBuffer.forEach(o=>{let[a,c]=o;a(c)}),this._animationCallbacksBuffer=[]})}),this._animationCallbacksBuffer.push([r,s])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}};e.\u0275fac=function(r){return new(r||e)(se(wi),se(Nr),se(lt))},e.\u0275prov=fe({token:e,factory:e.\u0275fac});let n=e;return n})(),Hl=class{constructor(e,t,i,r){this.namespaceId=e,this.delegate=t,this.engine=i,this._onDestroy=r}get data(){return this.delegate.data}destroyNode(e){this.delegate.destroyNode?.(e)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,i,r=!0){this.delegate.insertBefore(e,t,i),this.engine.onInsert(this.namespaceId,t,e,r)}removeChild(e,t,i){this.engine.onRemove(this.namespaceId,t,this.delegate)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,i,r){this.delegate.setAttribute(e,t,i,r)}removeAttribute(e,t,i){this.delegate.removeAttribute(e,t,i)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,i,r){this.delegate.setStyle(e,t,i,r)}removeStyle(e,t,i){this.delegate.removeStyle(e,t,i)}setProperty(e,t,i){t.charAt(0)==Ul&&t==Ym?this.disableAnimations(e,!!i):this.delegate.setProperty(e,t,i)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,i){return this.delegate.listen(e,t,i)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}},ch=class extends Hl{constructor(e,t,i,r,s){super(t,i,r,s),this.factory=e,this.namespaceId=t}setProperty(e,t,i){t.charAt(0)==Ul?t.charAt(1)=="."&&t==Ym?(i=i===void 0?!0:!!i,this.disableAnimations(e,i)):this.engine.process(this.namespaceId,e,t.slice(1),i):this.delegate.setProperty(e,t,i)}listen(e,t,i){if(t.charAt(0)==Ul){let r=QT(e),s=t.slice(1),o="";return s.charAt(0)!=Ul&&([s,o]=eD(s)),this.engine.listen(this.namespaceId,r,s,o,a=>{let c=a._data||-1;this.factory.scheduleListenerCallback(c,i,a)})}return this.delegate.listen(e,t,i)}};function QT(n){switch(n){case"body":return document.body;case"document":return document;case"window":return window;default:return n}}function eD(n){let e=n.indexOf("."),t=n.substring(0,e),i=n.slice(e+1);return[t,i]}var tD=(()=>{let e=class e extends Nr{constructor(i,r,s,o){super(i.body,r,s)}ngOnDestroy(){this.flush()}};e.\u0275fac=function(r){return new(r||e)(se(It),se(k1),se(Ts),se(Er))},e.\u0275prov=fe({token:e,factory:e.\u0275fac});let n=e;return n})();function nD(){return new zl}function iD(n,e,t){return new JT(n,e,t)}var Km=[{provide:I1,useClass:KT},{provide:Ts,useFactory:nD},{provide:Nr,useClass:tD},{provide:wi,useFactory:iD,deps:[sl,Nr,lt]}],rD=[{provide:k1,useFactory:()=>new Vl},{provide:z2,useValue:"BrowserAnimations"},...Km],JW=[{provide:k1,useClass:ih},{provide:z2,useValue:"NoopAnimations"},...Km];function Jm(){return[...rD]}function lh(n){return Array.isArray(n)?n:[n]}function uh(n){return n instanceof cn?n.nativeElement:n}var fh;try{fh=typeof Intl<"u"&&Intl.v8BreakIterator}catch{fh=!1}var H1=(()=>{let e=class e{constructor(i){this._platformId=i,this.isBrowser=this._platformId?m7(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||fh)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};e.\u0275fac=function(r){return new(r||e)(se(Ai))},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var U1;function sD(){if(U1==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>U1=!0}))}finally{U1=U1||!1}return U1}function dh(n){return sD()?n:!!n.capture}function Qm(n){return n.composedPath?n.composedPath()[0]:n.target}function e9(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var n9=new Set,Ds,oD=(()=>{let e=class e{constructor(i,r){this._platform=i,this._nonce=r,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):cD}matchMedia(i){return(this._platform.WEBKIT||this._platform.BLINK)&&aD(i,this._nonce),this._matchMedia(i)}};e.\u0275fac=function(r){return new(r||e)(se(H1),se(r1,8))},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function aD(n,e){if(!n9.has(n))try{Ds||(Ds=document.createElement("style"),e&&(Ds.nonce=e),Ds.setAttribute("type","text/css"),document.head.appendChild(Ds)),Ds.sheet&&(Ds.sheet.insertRule(`@media ${n} {body{ }}`,0),n9.add(n))}catch(t){console.error(t)}}function cD(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Pr=(()=>{let e=class e{constructor(i,r){this._mediaMatcher=i,this._zone=r,this._queries=new Map,this._destroySubject=new nn}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(i){return i9(lh(i)).some(s=>this._registerQuery(s).mql.matches)}observe(i){let s=i9(lh(i)).map(a=>this._registerQuery(a).observable),o=io(s);return o=pr(o.pipe(ni(1)),o.pipe(L3(1),T3(0))),o.pipe(Te(a=>{let c={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:u})=>{c.matches=c.matches||l,c.breakpoints[u]=l}),c}))}_registerQuery(i){if(this._queries.has(i))return this._queries.get(i);let r=this._mediaMatcher.matchMedia(i),o={observable:new Qe(a=>{let c=l=>this._zone.run(()=>a.next(l));return r.addListener(c),()=>{r.removeListener(c)}}).pipe(Oa(r),Te(({matches:a})=>({query:i,matches:a})),za(this._destroySubject)),mql:r};return this._queries.set(i,o),o}};e.\u0275fac=function(r){return new(r||e)(se(oD),se(lt))},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function i9(n){return n.map(e=>e.split(",")).reduce((e,t)=>e.concat(t)).map(e=>e.trim())}var Go={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function o9(n){return n.buttons===0||n.detail===0}function a9(n){let e=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var r9="cdk-high-contrast-black-on-white",s9="cdk-high-contrast-white-on-black",ph="cdk-high-contrast-active",c9=(()=>{let e=class e{constructor(i,r){this._platform=i,this._document=r,this._breakpointSubscription=ye(Pr).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;let i=this._document.createElement("div");i.style.backgroundColor="rgb(1,2,3)",i.style.position="absolute",this._document.body.appendChild(i);let r=this._document.defaultView||window,s=r&&r.getComputedStyle?r.getComputedStyle(i):null,o=(s&&s.backgroundColor||"").replace(/ /g,"");switch(i.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return 2;case"rgb(255,255,255)":case"rgb(255,250,239)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let i=this._document.body.classList;i.remove(ph,r9,s9),this._hasCheckedHighContrastMode=!0;let r=this.getHighContrastMode();r===1?i.add(ph,r9):r===2&&i.add(ph,s9)}}};e.\u0275fac=function(r){return new(r||e)(se(H1),se(It))},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var mh=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Lt({type:e}),e.\u0275inj=Pt({});let n=e;return n})();function uD(){return!0}var fD=new Se("mat-sanity-checks",{providedIn:"root",factory:uD}),yh=(()=>{let e=class e{constructor(i,r,s){this._sanityChecks=r,this._document=s,this._hasDoneGlobalChecks=!1,i._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(i){return e9()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[i]}};e.\u0275fac=function(r){return new(r||e)(se(c9),se(fD,8),se(It))},e.\u0275mod=Lt({type:e}),e.\u0275inj=Pt({imports:[mh,mh]});let n=e;return n})();var gh=class{constructor(e,t,i,r=!1){this._renderer=e,this.element=t,this.config=i,this._animationForciblyDisabledThroughCss=r,this.state=3}fadeOut(){this._renderer.fadeOutRipple(this)}},l9=dh({passive:!0,capture:!0}),vh=class{constructor(){this._events=new Map,this._delegateEventHandler=e=>{let t=Qm(e);t&&this._events.get(e.type)?.forEach((i,r)=>{(r===t||r.contains(t))&&i.forEach(s=>s.handleEvent(e))})}}addHandler(e,t,i,r){let s=this._events.get(t);if(s){let o=s.get(i);o?o.add(r):s.set(i,new Set([r]))}else this._events.set(t,new Map([[i,new Set([r])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,l9)})}removeHandler(e,t,i){let r=this._events.get(e);if(!r)return;let s=r.get(t);s&&(s.delete(i),s.size===0&&r.delete(t),r.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,l9)))}},u9={enterDuration:225,exitDuration:150},dD=800,f9=dh({passive:!0,capture:!0}),d9=["mousedown","touchstart"],h9=["mouseup","mouseleave","touchend","touchcancel"],B1=class B1{constructor(e,t,i,r){this._target=e,this._ngZone=t,this._platform=r,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,r.isBrowser&&(this._containerElement=uh(i))}fadeInRipple(e,t,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s=pe(pe({},u9),i.animation);i.centered&&(e=r.left+r.width/2,t=r.top+r.height/2);let o=i.radius||hD(e,t,r),a=e-r.left,c=t-r.top,l=s.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${a-o}px`,u.style.top=`${c-o}px`,u.style.height=`${o*2}px`,u.style.width=`${o*2}px`,i.color!=null&&(u.style.backgroundColor=i.color),u.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(u);let f=window.getComputedStyle(u),d=f.transitionProperty,p=f.transitionDuration,g=d==="none"||p==="0s"||p==="0s, 0s"||r.width===0&&r.height===0,v=new gh(this,u,i,g);u.style.transform="scale3d(1, 1, 1)",v.state=0,i.persistent||(this._mostRecentTransientRipple=v);let m=null;return!g&&(l||s.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let h=()=>this._finishRippleTransition(v),M=()=>this._destroyRipple(v);u.addEventListener("transitionend",h),u.addEventListener("transitioncancel",M),m={onTransitionEnd:h,onTransitionCancel:M}}),this._activeRipples.set(v,m),(g||!l)&&this._finishRippleTransition(v),v}fadeOutRipple(e){if(e.state===2||e.state===3)return;let t=e.element,i=pe(pe({},u9),e.config.animation);t.style.transitionDuration=`${i.exitDuration}ms`,t.style.opacity="0",e.state=2,(e._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let t=uh(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,d9.forEach(i=>{B1._eventManager.addHandler(this._ngZone,i,t,this)}))}handleEvent(e){e.type==="mousedown"?this._onMousedown(e):e.type==="touchstart"?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{h9.forEach(t=>{this._triggerElement.addEventListener(t,this,f9)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===0?this._startFadeOutTransition(e):e.state===2&&this._destroyRipple(e)}_startFadeOutTransition(e){let t=e===this._mostRecentTransientRipple,{persistent:i}=e.config;e.state=1,!i&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=3,t!==null&&(e.element.removeEventListener("transitionend",t.onTransitionEnd),e.element.removeEventListener("transitioncancel",t.onTransitionCancel)),e.element.remove()}_onMousedown(e){let t=o9(e),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+dD;!this._target.rippleDisabled&&!t&&!i&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!a9(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=e.changedTouches;if(t)for(let i=0;i<t.length;i++)this.fadeInRipple(t[i].clientX,t[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let t=e.state===1||e.config.terminateOnPointerUp&&e.state===0;!e.config.persistent&&t&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(d9.forEach(t=>B1._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&h9.forEach(t=>e.removeEventListener(t,this,f9)))}};B1._eventManager=new vh;var p9=B1;function hD(n,e,t){let i=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),r=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(i*i+r*r)}var m9=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Lt({type:e}),e.\u0275inj=Pt({imports:[yh,yh]});let n=e;return n})();function g9(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function he(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?g9(Object(t),!0).forEach(function(i){Xt(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):g9(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Ql(n){"@babel/helpers - typeof";return Ql=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ql(n)}function pD(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function v9(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function mD(n,e,t){return e&&v9(n.prototype,e),t&&v9(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function Xt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Lh(n,e){return vD(n)||_D(n,e)||B9(n,e)||xD()}function K1(n){return gD(n)||yD(n)||B9(n)||bD()}function gD(n){if(Array.isArray(n))return Ch(n)}function vD(n){if(Array.isArray(n))return n}function yD(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function _D(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(c){s=!0,a=c}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function B9(n,e){if(n){if(typeof n=="string")return Ch(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ch(n,e)}}function Ch(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function bD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var y9=function(){},Oh={},G9={},j9=null,W9={mark:y9,measure:y9};try{typeof window<"u"&&(Oh=window),typeof document<"u"&&(G9=document),typeof MutationObserver<"u"&&(j9=MutationObserver),typeof performance<"u"&&(W9=performance)}catch{}var MD=Oh.navigator||{},_9=MD.userAgent,b9=_9===void 0?"":_9,Or=Oh,Ct=G9,x9=j9,Bl=W9,eq=!!Or.document,Qi=!!Ct.documentElement&&!!Ct.head&&typeof Ct.addEventListener=="function"&&typeof Ct.createElement=="function",$9=~b9.indexOf("MSIE")||~b9.indexOf("Trident/"),Gl,jl,Wl,$l,ql,Yi="___FONT_AWESOME___",Sh=16,q9="fa",X9="svg-inline--fa",Ns="data-fa-i2svg",wh="data-fa-pseudo-element",CD="data-fa-pseudo-element-pending",zh="data-prefix",Fh="data-icon",M9="fontawesome-i2svg",SD="async",wD=["HTML","HEAD","STYLE","SCRIPT"],Z9=function(){try{return!0}catch{return!1}}(),Mt="classic",zt="sharp",kh=[Mt,zt];function J1(n){return new Proxy(n,{get:function(t,i){return i in t?t[i]:t[Mt]}})}var $1=J1((Gl={},Xt(Gl,Mt,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Xt(Gl,zt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Gl)),q1=J1((jl={},Xt(jl,Mt,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Xt(jl,zt,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),jl)),X1=J1((Wl={},Xt(Wl,Mt,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Xt(Wl,zt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Wl)),ED=J1(($l={},Xt($l,Mt,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Xt($l,zt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),$l)),AD=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Y9="fa-layers-text",TD=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,DD=J1((ql={},Xt(ql,Mt,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Xt(ql,zt,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ql)),K9=[1,2,3,4,5,6,7,8,9,10],ID=K9.concat([11,12,13,14,15,16,17,18,19,20]),RD=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Is={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Z1=new Set;Object.keys(q1[Mt]).map(Z1.add.bind(Z1));Object.keys(q1[zt]).map(Z1.add.bind(Z1));var ND=[].concat(kh,K1(Z1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Is.GROUP,Is.SWAP_OPACITY,Is.PRIMARY,Is.SECONDARY]).concat(K9.map(function(n){return"".concat(n,"x")})).concat(ID.map(function(n){return"w-".concat(n)})),j1=Or.FontAwesomeConfig||{};function PD(n){var e=Ct.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function LD(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}Ct&&typeof Ct.querySelector=="function"&&(C9=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],C9.forEach(function(n){var e=Lh(n,2),t=e[0],i=e[1],r=LD(PD(t));r!=null&&(j1[i]=r)}));var C9,J9={styleDefault:"solid",familyDefault:"classic",cssPrefix:q9,replacementClass:X9,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};j1.familyPrefix&&(j1.cssPrefix=j1.familyPrefix);var qo=he(he({},J9),j1);qo.autoReplaceSvg||(qo.observeMutations=!1);var ve={};Object.keys(J9).forEach(function(n){Object.defineProperty(ve,n,{enumerable:!0,set:function(t){qo[n]=t,W1.forEach(function(i){return i(ve)})},get:function(){return qo[n]}})});Object.defineProperty(ve,"familyPrefix",{enumerable:!0,set:function(e){qo.cssPrefix=e,W1.forEach(function(t){return t(ve)})},get:function(){return qo.cssPrefix}});Or.FontAwesomeConfig=ve;var W1=[];function OD(n){return W1.push(n),function(){W1.splice(W1.indexOf(n),1)}}var Lr=Sh,Ni={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zD(n){if(!(!n||!Qi)){var e=Ct.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var t=Ct.head.childNodes,i=null,r=t.length-1;r>-1;r--){var s=t[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return Ct.head.insertBefore(e,i),n}}var FD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Y1(){for(var n=12,e="";n-- >0;)e+=FD[Math.random()*62|0];return e}function Xo(n){for(var e=[],t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function Vh(n){return n.classList?Xo(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Q9(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function kD(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(Q9(n[t]),'" ')},"").trim()}function nu(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(n[t].trim(),";")},"")}function Uh(n){return n.size!==Ni.size||n.x!==Ni.x||n.y!==Ni.y||n.rotate!==Ni.rotate||n.flipX||n.flipY}function VD(n){var e=n.transform,t=n.containerWidth,i=n.iconWidth,r={transform:"translate(".concat(t/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:c,path:l}}function UD(n){var e=n.transform,t=n.width,i=t===void 0?Sh:t,r=n.height,s=r===void 0?Sh:r,o=n.startCentered,a=o===void 0?!1:o,c="";return a&&$9?c+="translate(".concat(e.x/Lr-i/2,"em, ").concat(e.y/Lr-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/Lr,"em), calc(-50% + ").concat(e.y/Lr,"em)) "):c+="translate(".concat(e.x/Lr,"em, ").concat(e.y/Lr,"em) "),c+="scale(".concat(e.size/Lr*(e.flipX?-1:1),", ").concat(e.size/Lr*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var HD=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function eg(){var n=q9,e=X9,t=ve.cssPrefix,i=ve.replacementClass,r=HD;if(t!==n||i!==e){var s=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(a,".".concat(i))}return r}var S9=!1;function _h(){ve.autoAddCss&&!S9&&(zD(eg()),S9=!0)}var BD={mixout:function(){return{dom:{css:eg,insertCss:_h}}},hooks:function(){return{beforeDOMElementCreation:function(){_h()},beforeI2svg:function(){_h()}}}},Ki=Or||{};Ki[Yi]||(Ki[Yi]={});Ki[Yi].styles||(Ki[Yi].styles={});Ki[Yi].hooks||(Ki[Yi].hooks={});Ki[Yi].shims||(Ki[Yi].shims=[]);var di=Ki[Yi],tg=[],GD=function n(){Ct.removeEventListener("DOMContentLoaded",n),eu=1,tg.map(function(e){return e()})},eu=!1;Qi&&(eu=(Ct.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ct.readyState),eu||Ct.addEventListener("DOMContentLoaded",GD));function jD(n){Qi&&(eu?setTimeout(n,0):tg.push(n))}function Q1(n){var e=n.tag,t=n.attributes,i=t===void 0?{}:t,r=n.children,s=r===void 0?[]:r;return typeof n=="string"?Q9(n):"<".concat(e," ").concat(kD(i),">").concat(s.map(Q1).join(""),"</").concat(e,">")}function w9(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var WD=function(e,t){return function(i,r,s,o){return e.call(t,i,r,s,o)}},bh=function(e,t,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?WD(t,r):t,c,l,u;for(i===void 0?(c=1,u=e[s[0]]):(c=0,u=i);c<o;c++)l=s[c],u=a(u,e[l],l,e);return u};function $D(n){for(var e=[],t=0,i=n.length;t<i;){var r=n.charCodeAt(t++);if(r>=55296&&r<=56319&&t<i){var s=n.charCodeAt(t++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),t--)}else e.push(r)}return e}function Eh(n){var e=$D(n);return e.length===1?e[0].toString(16):null}function qD(n,e){var t=n.length,i=n.charCodeAt(e),r;return i>=55296&&i<=56319&&t>e+1&&(r=n.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function E9(n){return Object.keys(n).reduce(function(e,t){var i=n[t],r=!!i.icon;return r?e[i.iconName]=i.icon:e[t]=i,e},{})}function Ah(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.skipHooks,r=i===void 0?!1:i,s=E9(e);typeof di.hooks.addPack=="function"&&!r?di.hooks.addPack(n,E9(e)):di.styles[n]=he(he({},di.styles[n]||{}),s),n==="fas"&&Ah("fa",e)}var Xl,Zl,Yl,jo=di.styles,XD=di.shims,ZD=(Xl={},Xt(Xl,Mt,Object.values(X1[Mt])),Xt(Xl,zt,Object.values(X1[zt])),Xl),Hh=null,ng={},ig={},rg={},sg={},og={},YD=(Zl={},Xt(Zl,Mt,Object.keys($1[Mt])),Xt(Zl,zt,Object.keys($1[zt])),Zl);function KD(n){return~ND.indexOf(n)}function JD(n,e){var t=e.split("-"),i=t[0],r=t.slice(1).join("-");return i===n&&r!==""&&!KD(r)?r:null}var ag=function(){var e=function(s){return bh(jo,function(o,a,c){return o[c]=bh(a,s,{}),o},{})};ng=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){r[c.toString(16)]=o})}return r}),ig=e(function(r,s,o){if(r[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){r[c]=o})}return r}),og=e(function(r,s,o){var a=s[2];return r[o]=o,a.forEach(function(c){r[c]=o}),r});var t="far"in jo||ve.autoFetchSvg,i=bh(XD,function(r,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!t&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:c}),r},{names:{},unicodes:{}});rg=i.names,sg=i.unicodes,Hh=iu(ve.styleDefault,{family:ve.familyDefault})};OD(function(n){Hh=iu(n.styleDefault,{family:ve.familyDefault})});ag();function Bh(n,e){return(ng[n]||{})[e]}function QD(n,e){return(ig[n]||{})[e]}function Rs(n,e){return(og[n]||{})[e]}function cg(n){return rg[n]||{prefix:null,iconName:null}}function eI(n){var e=sg[n],t=Bh("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function zr(){return Hh}var Gh=function(){return{prefix:null,iconName:null,rest:[]}};function iu(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,i=t===void 0?Mt:t,r=$1[i][n],s=q1[i][n]||q1[i][r],o=n in di.styles?n:null;return s||o||null}var A9=(Yl={},Xt(Yl,Mt,Object.keys(X1[Mt])),Xt(Yl,zt,Object.keys(X1[zt])),Yl);function ru(n){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.skipLookups,r=i===void 0?!1:i,s=(e={},Xt(e,Mt,"".concat(ve.cssPrefix,"-").concat(Mt)),Xt(e,zt,"".concat(ve.cssPrefix,"-").concat(zt)),e),o=null,a=Mt;(n.includes(s[Mt])||n.some(function(l){return A9[Mt].includes(l)}))&&(a=Mt),(n.includes(s[zt])||n.some(function(l){return A9[zt].includes(l)}))&&(a=zt);var c=n.reduce(function(l,u){var f=JD(ve.cssPrefix,u);if(jo[u]?(u=ZD[a].includes(u)?ED[a][u]:u,o=u,l.prefix=u):YD[a].indexOf(u)>-1?(o=u,l.prefix=iu(u,{family:a})):f?l.iconName=f:u!==ve.replacementClass&&u!==s[Mt]&&u!==s[zt]&&l.rest.push(u),!r&&l.prefix&&l.iconName){var d=o==="fa"?cg(l.iconName):{},p=Rs(l.prefix,l.iconName);d.prefix&&(o=null),l.iconName=d.iconName||p||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!jo.far&&jo.fas&&!ve.autoFetchSvg&&(l.prefix="fas")}return l},Gh());return(n.includes("fa-brands")||n.includes("fab"))&&(c.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===zt&&(jo.fass||ve.autoFetchSvg)&&(c.prefix="fass",c.iconName=Rs(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=zr()||"fas"),c}var tI=function(){function n(){pD(this,n),this.definitions={}}return mD(n,[{key:"add",value:function(){for(var t=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){t.definitions[a]=he(he({},t.definitions[a]||{}),o[a]),Ah(a,o[a]);var c=X1[Mt][a];c&&Ah(c,o[a]),ag()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];t[a]||(t[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(t[a][f]=l)}),t[a][c]=l}),t}}]),n}(),T9=[],Wo={},$o={},nI=Object.keys($o);function iI(n,e){var t=e.mixoutsTo;return T9=n,Wo={},Object.keys($o).forEach(function(i){nI.indexOf(i)===-1&&delete $o[i]}),T9.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(t[o]=r[o]),Ql(r[o])==="object"&&Object.keys(r[o]).forEach(function(a){t[o]||(t[o]={}),t[o][a]=r[o][a]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){Wo[o]||(Wo[o]=[]),Wo[o].push(s[o])})}i.provides&&i.provides($o)}),t}function Th(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),r=2;r<t;r++)i[r-2]=arguments[r];var s=Wo[n]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function Ps(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var r=Wo[n]||[];r.forEach(function(s){s.apply(null,t)})}function Ji(){var n=arguments[0],e=Array.prototype.slice.call(arguments,1);return $o[n]?$o[n].apply(null,e):void 0}function Dh(n){n.prefix==="fa"&&(n.prefix="fas");var e=n.iconName,t=n.prefix||zr();if(e)return e=Rs(t,e)||e,w9(lg.definitions,t,e)||w9(di.styles,t,e)}var lg=new tI,rI=function(){ve.autoReplaceSvg=!1,ve.observeMutations=!1,Ps("noAuto")},sI={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qi?(Ps("beforeI2svg",e),Ji("pseudoElements2svg",e),Ji("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;ve.autoReplaceSvg===!1&&(ve.autoReplaceSvg=!0),ve.observeMutations=!0,jD(function(){aI({autoReplaceSvgRoot:t}),Ps("watch",e)})}},oI={icon:function(e){if(e===null)return null;if(Ql(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Rs(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=iu(e[0]);return{prefix:i,iconName:Rs(i,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(ve.cssPrefix,"-"))>-1||e.match(AD))){var r=ru(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||zr(),iconName:Rs(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=zr();return{prefix:s,iconName:Rs(s,e)||e}}}},On={noAuto:rI,config:ve,dom:sI,parse:oI,library:lg,findIconDefinition:Dh,toHtml:Q1},aI=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,i=t===void 0?Ct:t;(Object.keys(di.styles).length>0||ve.autoFetchSvg)&&Qi&&ve.autoReplaceSvg&&On.dom.i2svg({node:i})};function su(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(i){return Q1(i)})}}),Object.defineProperty(n,"node",{get:function(){if(Qi){var i=Ct.createElement("div");return i.innerHTML=n.html,i.children}}}),n}function cI(n){var e=n.children,t=n.main,i=n.mask,r=n.attributes,s=n.styles,o=n.transform;if(Uh(o)&&t.found&&!i.found){var a=t.width,c=t.height,l={x:a/c/2,y:.5};r.style=nu(he(he({},s),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function lI(n){var e=n.prefix,t=n.iconName,i=n.children,r=n.attributes,s=n.symbol,o=s===!0?"".concat(e,"-").concat(ve.cssPrefix,"-").concat(t):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:he(he({},r),{},{id:o}),children:i}]}]}function jh(n){var e=n.icons,t=e.main,i=e.mask,r=n.prefix,s=n.iconName,o=n.transform,a=n.symbol,c=n.title,l=n.maskId,u=n.titleId,f=n.extra,d=n.watchable,p=d===void 0?!1:d,g=i.found?i:t,v=g.width,m=g.height,h=r==="fak",M=[ve.replacementClass,s?"".concat(ve.cssPrefix,"-").concat(s):""].filter(function(b){return f.classes.indexOf(b)===-1}).filter(function(b){return b!==""||!!b}).concat(f.classes).join(" "),_={children:[],attributes:he(he({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:M,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(m)})},C=h&&!~f.classes.indexOf("fa-fw")?{width:"".concat(v/m*16*.0625,"em")}:{};p&&(_.attributes[Ns]=""),c&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(u||Y1())},children:[c]}),delete _.attributes.title);var D=he(he({},_),{},{prefix:r,iconName:s,main:t,mask:i,maskId:l,transform:o,symbol:a,styles:he(he({},C),f.styles)}),A=i.found&&t.found?Ji("generateAbstractMask",D)||{children:[],attributes:{}}:Ji("generateAbstractIcon",D)||{children:[],attributes:{}},E=A.children,q=A.attributes;return D.children=E,D.attributes=q,a?lI(D):cI(D)}function D9(n){var e=n.content,t=n.width,i=n.height,r=n.transform,s=n.title,o=n.extra,a=n.watchable,c=a===void 0?!1:a,l=he(he(he({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(l[Ns]="");var u=he({},o.styles);Uh(r)&&(u.transform=UD({transform:r,startCentered:!0,width:t,height:i}),u["-webkit-transform"]=u.transform);var f=nu(u);f.length>0&&(l.style=f);var d=[];return d.push({tag:"span",attributes:l,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function uI(n){var e=n.content,t=n.title,i=n.extra,r=he(he(he({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")}),s=nu(i.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),t&&o.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),o}var xh=di.styles;function Ih(n){var e=n[0],t=n[1],i=n.slice(4),r=Lh(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(ve.cssPrefix,"-").concat(Is.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ve.cssPrefix,"-").concat(Is.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(ve.cssPrefix,"-").concat(Is.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:t,icon:o}}var fI={found:!1,width:512,height:512};function dI(n,e){!Z9&&!ve.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function Rh(n,e){var t=e;return e==="fa"&&ve.styleDefault!==null&&(e=zr()),new Promise(function(i,r){var s={found:!1,width:512,height:512,icon:Ji("missingIconAbstract")||{}};if(t==="fa"){var o=cg(n)||{};n=o.iconName||n,e=o.prefix||e}if(n&&e&&xh[e]&&xh[e][n]){var a=xh[e][n];return i(Ih(a))}dI(n,e),i(he(he({},fI),{},{icon:ve.showMissingIcons&&n?Ji("missingIconAbstract")||{}:{}}))})}var I9=function(){},Nh=ve.measurePerformance&&Bl&&Bl.mark&&Bl.measure?Bl:{mark:I9,measure:I9},G1='FA "6.5.1"',hI=function(e){return Nh.mark("".concat(G1," ").concat(e," begins")),function(){return ug(e)}},ug=function(e){Nh.mark("".concat(G1," ").concat(e," ends")),Nh.measure("".concat(G1," ").concat(e),"".concat(G1," ").concat(e," begins"),"".concat(G1," ").concat(e," ends"))},Wh={begin:hI,end:ug},Kl=function(){};function R9(n){var e=n.getAttribute?n.getAttribute(Ns):null;return typeof e=="string"}function pI(n){var e=n.getAttribute?n.getAttribute(zh):null,t=n.getAttribute?n.getAttribute(Fh):null;return e&&t}function mI(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(ve.replacementClass)}function gI(){if(ve.autoReplaceSvg===!0)return Jl.replace;var n=Jl[ve.autoReplaceSvg];return n||Jl.replace}function vI(n){return Ct.createElementNS("http://www.w3.org/2000/svg",n)}function yI(n){return Ct.createElement(n)}function fg(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,i=t===void 0?n.tag==="svg"?vI:yI:t;if(typeof n=="string")return Ct.createTextNode(n);var r=i(n.tag);Object.keys(n.attributes||[]).forEach(function(o){r.setAttribute(o,n.attributes[o])});var s=n.children||[];return s.forEach(function(o){r.appendChild(fg(o,{ceFn:i}))}),r}function _I(n){var e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Jl={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(r){t.parentNode.insertBefore(fg(r),t)}),t.getAttribute(Ns)===null&&ve.keepOriginalSource){var i=Ct.createComment(_I(t));t.parentNode.replaceChild(i,t)}else t.remove()},nest:function(e){var t=e[0],i=e[1];if(~Vh(t).indexOf(ve.replacementClass))return Jl.replace(e);var r=new RegExp("".concat(ve.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(a,c){return c===ve.replacementClass||c.match(r)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(a){return Q1(a)}).join(`
`);t.setAttribute(Ns,""),t.innerHTML=o}};function N9(n){n()}function dg(n,e){var t=typeof e=="function"?e:Kl;if(n.length===0)t();else{var i=N9;ve.mutateApproach===SD&&(i=Or.requestAnimationFrame||N9),i(function(){var r=gI(),s=Wh.begin("mutate");n.map(r),s(),t()})}}var $h=!1;function hg(){$h=!0}function Ph(){$h=!1}var tu=null;function P9(n){if(x9&&ve.observeMutations){var e=n.treeCallback,t=e===void 0?Kl:e,i=n.nodeCallback,r=i===void 0?Kl:i,s=n.pseudoElementsCallback,o=s===void 0?Kl:s,a=n.observeMutationsRoot,c=a===void 0?Ct:a;tu=new x9(function(l){if(!$h){var u=zr();Xo(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!R9(f.addedNodes[0])&&(ve.searchPseudoElements&&o(f.target),t(f.target)),f.type==="attributes"&&f.target.parentNode&&ve.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&R9(f.target)&&~RD.indexOf(f.attributeName))if(f.attributeName==="class"&&pI(f.target)){var d=ru(Vh(f.target)),p=d.prefix,g=d.iconName;f.target.setAttribute(zh,p||u),g&&f.target.setAttribute(Fh,g)}else mI(f.target)&&r(f.target)})}}),Qi&&tu.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function bI(){tu&&tu.disconnect()}function xI(n){var e=n.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),t}function MI(n){var e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"",r=ru(Vh(n));return r.prefix||(r.prefix=zr()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=QD(r.prefix,n.innerText)||Bh(r.prefix,Eh(n.innerText))),!r.iconName&&ve.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function CI(n){var e=Xo(n.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return ve.autoA11y&&(t?e["aria-labelledby"]="".concat(ve.replacementClass,"-title-").concat(i||Y1()):(e["aria-hidden"]="true",e.focusable="false")),e}function SI(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ni,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function L9(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=MI(n),i=t.iconName,r=t.prefix,s=t.rest,o=CI(n),a=Th("parseNodeAttributes",{},n),c=e.styleParser?xI(n):[];return he({iconName:i,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:Ni,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var wI=di.styles;function pg(n){var e=ve.autoReplaceSvg==="nest"?L9(n,{styleParser:!1}):L9(n);return~e.extra.classes.indexOf(Y9)?Ji("generateLayersText",n,e):Ji("generateSvgReplacementMutation",n,e)}var Fr=new Set;kh.map(function(n){Fr.add("fa-".concat(n))});Object.keys($1[Mt]).map(Fr.add.bind(Fr));Object.keys($1[zt]).map(Fr.add.bind(Fr));Fr=K1(Fr);function O9(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qi)return Promise.resolve();var t=Ct.documentElement.classList,i=function(f){return t.add("".concat(M9,"-").concat(f))},r=function(f){return t.remove("".concat(M9,"-").concat(f))},s=ve.autoFetchSvg?Fr:kh.map(function(u){return"fa-".concat(u)}).concat(Object.keys(wI));s.includes("fa")||s.push("fa");var o=[".".concat(Y9,":not([").concat(Ns,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Ns,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Xo(n.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var c=Wh.begin("onTree"),l=a.reduce(function(u,f){try{var d=pg(f);d&&u.push(d)}catch(p){Z9||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(d){dg(d,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(d){c(),f(d)})})}function EI(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pg(n).then(function(t){t&&dg([t],e)})}function AI(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Dh(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Dh(r||{})),n(i,he(he({},t),{},{mask:r}))}}var TI=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.transform,r=i===void 0?Ni:i,s=t.symbol,o=s===void 0?!1:s,a=t.mask,c=a===void 0?null:a,l=t.maskId,u=l===void 0?null:l,f=t.title,d=f===void 0?null:f,p=t.titleId,g=p===void 0?null:p,v=t.classes,m=v===void 0?[]:v,h=t.attributes,M=h===void 0?{}:h,_=t.styles,C=_===void 0?{}:_;if(e){var D=e.prefix,A=e.iconName,E=e.icon;return su(he({type:"icon"},e),function(){return Ps("beforeDOMElementCreation",{iconDefinition:e,params:t}),ve.autoA11y&&(d?M["aria-labelledby"]="".concat(ve.replacementClass,"-title-").concat(g||Y1()):(M["aria-hidden"]="true",M.focusable="false")),jh({icons:{main:Ih(E),mask:c?Ih(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:A,transform:he(he({},Ni),r),symbol:o,title:d,maskId:u,titleId:g,extra:{attributes:M,styles:C,classes:m}})})}},DI={mixout:function(){return{icon:AI(TI)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=O9,t.nodeCallback=EI,t}}},provides:function(e){e.i2svg=function(t){var i=t.node,r=i===void 0?Ct:i,s=t.callback,o=s===void 0?function(){}:s;return O9(r,o)},e.generateSvgReplacementMutation=function(t,i){var r=i.iconName,s=i.title,o=i.titleId,a=i.prefix,c=i.transform,l=i.symbol,u=i.mask,f=i.maskId,d=i.extra;return new Promise(function(p,g){Promise.all([Rh(r,a),u.iconName?Rh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var m=Lh(v,2),h=m[0],M=m[1];p([t,jh({icons:{main:h,mask:M},prefix:a,iconName:r,transform:c,symbol:l,maskId:f,title:s,titleId:o,extra:d,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(t){var i=t.children,r=t.attributes,s=t.main,o=t.transform,a=t.styles,c=nu(a);c.length>0&&(r.style=c);var l;return Uh(o)&&(l=Ji("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(l||s.icon),{children:i,attributes:r}}}},II={mixout:function(){return{layer:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return su({type:"layer"},function(){Ps("beforeDOMElementCreation",{assembler:t,params:i});var o=[];return t(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(ve.cssPrefix,"-layers")].concat(K1(s)).join(" ")},children:o}]})}}}},RI={mixout:function(){return{counter:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,a=o===void 0?[]:o,c=i.attributes,l=c===void 0?{}:c,u=i.styles,f=u===void 0?{}:u;return su({type:"counter",content:t},function(){return Ps("beforeDOMElementCreation",{content:t,params:i}),uI({content:t.toString(),title:s,extra:{attributes:l,styles:f,classes:["".concat(ve.cssPrefix,"-layers-counter")].concat(K1(a))}})})}}}},NI={mixout:function(){return{text:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?Ni:r,o=i.title,a=o===void 0?null:o,c=i.classes,l=c===void 0?[]:c,u=i.attributes,f=u===void 0?{}:u,d=i.styles,p=d===void 0?{}:d;return su({type:"text",content:t},function(){return Ps("beforeDOMElementCreation",{content:t,params:i}),D9({content:t,transform:he(he({},Ni),s),title:a,extra:{attributes:f,styles:p,classes:["".concat(ve.cssPrefix,"-layers-text")].concat(K1(l))}})})}}},provides:function(e){e.generateLayersText=function(t,i){var r=i.title,s=i.transform,o=i.extra,a=null,c=null;if($9){var l=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();a=u.width/l,c=u.height/l}return ve.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,D9({content:t.innerHTML,width:a,height:c,transform:s,title:r,extra:o,watchable:!0})])}}},PI=new RegExp('"',"ug"),z9=[1105920,1112319];function LI(n){var e=n.replace(PI,""),t=qD(e,0),i=t>=z9[0]&&t<=z9[1],r=e.length===2?e[0]===e[1]:!1;return{value:Eh(r?e[0]:e),isSecondary:i||r}}function F9(n,e){var t="".concat(CD).concat(e.replace(":","-"));return new Promise(function(i,r){if(n.getAttribute(t)!==null)return i();var s=Xo(n.children),o=s.filter(function(E){return E.getAttribute(wh)===e})[0],a=Or.getComputedStyle(n,e),c=a.getPropertyValue("font-family").match(TD),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return n.removeChild(o),i();if(c&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(c[2])?zt:Mt,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?q1[d][c[2].toLowerCase()]:DD[d][l],g=LI(f),v=g.value,m=g.isSecondary,h=c[0].startsWith("FontAwesome"),M=Bh(p,v),_=M;if(h){var C=eI(v);C.iconName&&C.prefix&&(M=C.iconName,p=C.prefix)}if(M&&!m&&(!o||o.getAttribute(zh)!==p||o.getAttribute(Fh)!==_)){n.setAttribute(t,_),o&&n.removeChild(o);var D=SI(),A=D.extra;A.attributes[wh]=e,Rh(M,p).then(function(E){var q=jh(he(he({},D),{},{icons:{main:E,mask:Gh()},prefix:p,iconName:_,extra:A,watchable:!0})),b=Ct.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(b,n.firstChild):n.appendChild(b),b.outerHTML=q.map(function(w){return Q1(w)}).join(`
`),n.removeAttribute(t),i()}).catch(r)}else i()}else i()})}function OI(n){return Promise.all([F9(n,"::before"),F9(n,"::after")])}function zI(n){return n.parentNode!==document.head&&!~wD.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(wh)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function k9(n){if(Qi)return new Promise(function(e,t){var i=Xo(n.querySelectorAll("*")).filter(zI).map(OI),r=Wh.begin("searchPseudoElements");hg(),Promise.all(i).then(function(){r(),Ph(),e()}).catch(function(){r(),Ph(),t()})})}var FI={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=k9,t}}},provides:function(e){e.pseudoElements2svg=function(t){var i=t.node,r=i===void 0?Ct:i;ve.searchPseudoElements&&k9(r)}}},V9=!1,kI={mixout:function(){return{dom:{unwatch:function(){hg(),V9=!0}}}},hooks:function(){return{bootstrap:function(){P9(Th("mutationObserverCallbacks",{}))},noAuto:function(){bI()},watch:function(t){var i=t.observeMutationsRoot;V9?Ph():P9(Th("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},U9=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},t)},VI={mixout:function(){return{parse:{transform:function(t){return U9(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-transform");return r&&(t.transform=U9(r)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var i=t.main,r=t.transform,s=t.containerWidth,o=t.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:f,path:d};return{tag:"g",attributes:he({},p.outer),children:[{tag:"g",attributes:he({},p.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:he(he({},i.icon.attributes),p.path)}]}]}}}},Mh={x:0,y:0,width:"100%",height:"100%"};function H9(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function UI(n){return n.tag==="g"?n.children:[n]}var HI={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-mask"),s=r?ru(r.split(" ").map(function(o){return o.trim()})):Gh();return s.prefix||(s.prefix=zr()),t.mask=s,t.maskId=i.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var i=t.children,r=t.attributes,s=t.main,o=t.mask,a=t.maskId,c=t.transform,l=s.width,u=s.icon,f=o.width,d=o.icon,p=VD({transform:c,containerWidth:f,iconWidth:l}),g={tag:"rect",attributes:he(he({},Mh),{},{fill:"white"})},v=u.children?{children:u.children.map(H9)}:{},m={tag:"g",attributes:he({},p.inner),children:[H9(he({tag:u.tag,attributes:he(he({},u.attributes),p.path)},v))]},h={tag:"g",attributes:he({},p.outer),children:[m]},M="mask-".concat(a||Y1()),_="clip-".concat(a||Y1()),C={tag:"mask",attributes:he(he({},Mh),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,h]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:UI(d)},C]};return i.push(D,{tag:"rect",attributes:he({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(M,")")},Mh)}),{children:i,attributes:r}}}},BI={provides:function(e){var t=!1;Or.matchMedia&&(t=Or.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:he(he({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=he(he({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:he(he({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||a.children.push({tag:"animate",attributes:he(he({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:he(he({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:he(he({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:he(he({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||i.push({tag:"path",attributes:he(he({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:he(he({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},GI={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return t.symbol=s,t}}}},jI=[BD,DI,II,RI,NI,FI,kI,VI,HI,BI,GI];iI(jI,{mixoutsTo:On});var tq=On.noAuto,nq=On.config,iq=On.library,rq=On.dom,mg=On.parse,sq=On.findIconDefinition,oq=On.toHtml,gg=On.icon,aq=On.layer,WI=On.text,$I=On.counter;var qI=["*"],XI=n=>{throw new Error(`Could not find icon with iconName=${n.iconName} and prefix=${n.prefix} in the icon library.`)},ZI=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},YI=n=>{let e={[`fa-${n.animation}`]:n.animation!=null&&!n.animation.startsWith("spin"),"fa-spin":n.animation==="spin"||n.animation==="spin-reverse","fa-spin-pulse":n.animation==="spin-pulse"||n.animation==="spin-pulse-reverse","fa-spin-reverse":n.animation==="spin-reverse"||n.animation==="spin-pulse-reverse","fa-pulse":n.animation==="spin-pulse"||n.animation==="spin-pulse-reverse","fa-fw":n.fixedWidth,"fa-border":n.border,"fa-inverse":n.inverse,"fa-layers-counter":n.counter,"fa-flip-horizontal":n.flip==="horizontal"||n.flip==="both","fa-flip-vertical":n.flip==="vertical"||n.flip==="both",[`fa-${n.size}`]:n.size!==null,[`fa-rotate-${n.rotate}`]:n.rotate!==null,[`fa-pull-${n.pull}`]:n.pull!==null,[`fa-stack-${n.stackItemSize}`]:n.stackItemSize!=null};return Object.keys(e).map(t=>e[t]?t:null).filter(t=>t)},KI=n=>n.prefix!==void 0&&n.iconName!==void 0,JI=(n,e)=>KI(n)?n:typeof n=="string"?{prefix:e,iconName:n}:{prefix:n[0],iconName:n[1]},QI=(()=>{let e=class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),eR=(()=>{let e=class e{constructor(){this.definitions={}}addIcons(...i){for(let r of i){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let s of r.icon[2])typeof s=="string"&&(this.definitions[r.prefix][s]=r)}}addIconPacks(...i){for(let r of i){let s=Object.keys(r).map(o=>r[o]);this.addIcons(...s)}}getIconDefinition(i,r){return i in this.definitions&&r in this.definitions[i]?this.definitions[i][r]:null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),tR=(()=>{let e=class e{constructor(){this.stackItemSize="1x"}ngOnChanges(i){if("size"in i)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=$t({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[jn]});let n=e;return n})(),nR=(()=>{let e=class e{constructor(i,r){this.renderer=i,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(i){"size"in i&&(i.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${i.size.currentValue}`),i.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${i.size.previousValue}`))}};e.\u0275fac=function(r){return new(r||e)(we($i),we(cn))},e.\u0275cmp=Tt({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},features:[jn],ngContentSelectors:qI,decls:1,vars:0,template:function(r,s){r&1&&(B2(),G2(0))},encapsulation:2});let n=e;return n})(),vg=(()=>{let e=class e{set spin(i){this.animation=i?"spin":void 0}set pulse(i){this.animation=i?"spin-pulse":void 0}constructor(i,r,s,o,a){this.sanitizer=i,this.config=r,this.iconLibrary=s,this.stackItem=o,this.classes=[],a!=null&&o==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(i){if(this.icon==null&&this.config.fallbackIcon==null){ZI();return}if(i){let r=this.icon!=null?this.icon:this.config.fallbackIcon,s=this.findIconDefinition(r);if(s!=null){let o=this.buildParams();this.renderIcon(s,o)}}}render(){this.ngOnChanges({})}findIconDefinition(i){let r=JI(i,this.config.defaultPrefix);if("icon"in r)return r;let s=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return s??(XI(r),null)}buildParams(){let i={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?mg.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...YI(i),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(i,r){let s=gg(i,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))}};e.\u0275fac=function(r){return new(r||e)(we(Q4),we(QI),we(eR),we(tR,8),we(nR,8))},e.\u0275cmp=Tt({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,s){r&2&&(j2("innerHTML",s.renderedIconHTML,hp),Cr("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},features:[jn],decls:0,vars:0,template:function(r,s){},encapsulation:2});let n=e;return n})();var yg=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Lt({type:e}),e.\u0275inj=Pt({});let n=e;return n})();var _g={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};var bg={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};var xg={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var ou=(()=>{let e=class e{constructor(i){this.breakpointObserver=i,this.instagram=bg,this.linkedin=_g,this.github=xg,this.isHandset$=this.breakpointObserver.observe(Go.Handset).pipe(Te(r=>r.matches))}};e.\u0275fac=function(r){return new(r||e)(we(Pr))},e.\u0275cmp=Tt({type:e,selectors:[["app-homepage"]],standalone:!0,features:[en],decls:14,vars:6,consts:[[3,"ngClass"],[1,"no-margin-bottom","no-margin-top"],[1,"no-margin-bottom"],[1,"socials"],["href","https://www.linkedin.com/in/nathanejbrown","target","_blank"],[1,"icon","fa-lg",3,"icon"],["href","https://www.github.com/nathanejbrown","target","_blank"],["href","https://www.instagram.com/nathanejbrown","target","_blank"]],template:function(r,s){r&1&&(st(0,"div",0),Mo(1,"async"),st(2,"section")(3,"h1",1),Gt(4,"Nathan Brown"),ot(),st(5,"h2",2),Gt(6,"Full Stack Software Engineer"),ot()(),st(7,"section",3)(8,"a",4),_n(9,"fa-icon",5),ot(),st(10,"a",6),_n(11,"fa-icon",5),ot(),st(12,"a",7),_n(13,"fa-icon",5),ot()()()),r&2&&(qt("ngClass",Co(1,4,s.isHandset$)?"container-mobile":"container"),Ot(9),qt("icon",s.linkedin),Ot(2),qt("icon",s.github),Ot(2),qt("icon",s.instagram))},dependencies:[Ti,Eo,Ao,m9,yg,vg],styles:["h1[_ngcontent-%COMP%]{color:#fffcf7;line-height:80px;font-size:55px;font-family:Tektur}h2[_ngcontent-%COMP%]{color:#fffcf7;font-size:35px;font-family:Tektur}h3[_ngcontent-%COMP%]{color:#726890;font-family:Tektur}.container[_ngcontent-%COMP%]{position:fixed;display:flex;flex-direction:column;height:80vh;justify-content:space-between}.container-mobile[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]{margin-bottom:3rem}.icon[_ngcontent-%COMP%]{color:#fffcf7;cursor:pointer}.socials[_ngcontent-%COMP%]{display:flex;justify-content:space-between;max-width:4.5rem}"]});let n=e;return n})();var Mg=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Tt({type:e,selectors:[["app-not-found"]],standalone:!0,features:[en],decls:2,vars:0,consts:[[1,"no-margin-bottom"]],template:function(r,s){r&1&&(st(0,"h1",0),Gt(1,"Page not found"),ot())},styles:["h1[_ngcontent-%COMP%]{color:#fffcf7;line-height:80px;font-size:55px;font-family:Tektur}"]});let n=e;return n})();var Cg=[{path:"",component:ou},{path:"**",component:Mg}];var Sg={providers:[xm(Cg),m4(E7),Jm()]};var s5="160";var rR=0,wg=1,sR=2;var Xv=1,oR=2,sr=3,Xr=0,In=1,ar=2;var Wr=0,ma=1,Eg=2,Ag=3,Tg=4,aR=5,Vs=100,cR=101,lR=102,Dg=103,Ig=104,uR=200,fR=201,dR=202,hR=203,S0=204,w0=205,pR=206,mR=207,gR=208,vR=209,yR=210,_R=211,bR=212,xR=213,MR=214,CR=0,SR=1,wR=2,Iu=3,ER=4,AR=5,TR=6,DR=7,Zv=0,IR=1,RR=2,$r=0,NR=1,PR=2,LR=3,OR=4,zR=5,FR=6;var Rg=300,ya=301,_a=302,E0=303,A0=304,Yu=306,T0=1e3,gi=1001,D0=1002,xn=1003,Ng=1004;var qh=1005;var Kn=1006,kR=1007;var ac=1008;var qr=1009,VR=1010,UR=1011,o5=1012,Yv=1013,Gr=1014,jr=1015,cc=1016,Kv=1017,Jv=1018,Hs=1020,HR=1021,vi=1023,BR=1024,GR=1025,Bs=1026,ba=1027,jR=1028,Qv=1029,WR=1030,ey=1031,ty=1033,Xh=33776,Zh=33777,Yh=33778,Kh=33779,Pg=35840,Lg=35841,Og=35842,zg=35843,ny=36196,Fg=37492,kg=37496,Vg=37808,Ug=37809,Hg=37810,Bg=37811,Gg=37812,jg=37813,Wg=37814,$g=37815,qg=37816,Xg=37817,Zg=37818,Yg=37819,Kg=37820,Jg=37821,Jh=36492,Qg=36494,ev=36495,$R=36283,tv=36284,nv=36285,iv=36286;var Ru=2300,Nu=2301,Qh=2302,rv=2400,sv=2401,ov=2402;var iy=3e3,Gs=3001,qR=3200,XR=3201,ZR=0,YR=1,Jn="",sn="srgb",ur="srgb-linear",a5="display-p3",Ku="display-p3-linear",Pu="linear",St="srgb",Lu="rec709",Ou="p3";var Zo=7680;var av=519,KR=512,JR=513,QR=514,ry=515,eN=516,tN=517,nN=518,iN=519,cv=35044;var lv="300 es",I0=1035,cr=2e3,zu=2001,Zr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var e0=Math.PI/180,R0=180/Math.PI;function dc(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Dn(n,e,t){return Math.max(e,Math.min(t,n))}function rN(n,e){return(n%e+e)%e}function t0(n,e,t){return(1-t)*n+t*e}function uv(n){return(n&n-1)===0&&n!==0}function N0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ec(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var pt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=r[0],m=r[3],h=r[6],M=r[1],_=r[4],C=r[7],D=r[2],A=r[5],E=r[8];return s[0]=o*v+a*M+c*D,s[3]=o*m+a*_+c*A,s[6]=o*h+a*C+c*E,s[1]=l*v+u*M+f*D,s[4]=l*m+u*_+f*A,s[7]=l*h+u*C+f*E,s[2]=d*v+p*M+g*D,s[5]=d*m+p*_+g*A,s[8]=d*h+p*C+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,d=a*c-u*s,p=l*s-o*c,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=f*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(n0.makeScale(e,t)),this}rotate(e){return this.premultiply(n0.makeRotation(-e)),this}translate(e,t){return this.premultiply(n0.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},n0=new tt;function sy(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sN(){let n=Fu("canvas");return n.style.display="block",n}var fv={};function sc(n){n in fv||(fv[n]=!0,console.warn(n))}var dv=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hv=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),au={[ur]:{transfer:Pu,primaries:Lu,toReference:n=>n,fromReference:n=>n},[sn]:{transfer:St,primaries:Lu,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ku]:{transfer:Pu,primaries:Ou,toReference:n=>n.applyMatrix3(hv),fromReference:n=>n.applyMatrix3(dv)},[a5]:{transfer:St,primaries:Ou,toReference:n=>n.convertSRGBToLinear().applyMatrix3(hv),fromReference:n=>n.applyMatrix3(dv).convertLinearToSRGB()}},oN=new Set([ur,Ku]),ht={enabled:!0,_workingColorSpace:ur,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!oN.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=au[e].toReference,r=au[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return au[n].primaries},getTransfer:function(n){return n===Jn?Pu:au[n].transfer}};function ga(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function i0(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Yo,ku=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yo===void 0&&(Yo=Fu("canvas")),Yo.width=e.width,Yo.height=e.height;let i=Yo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Yo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fu("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ga(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ga(t[i]/255)*255):t[i]=ga(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},aN=0,Vu=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aN++}),this.uuid=dc(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(r0(r[o].image)):s.push(r0(r[o]))}else s=r0(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function r0(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ku.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cN=0,wa=(()=>{class n extends Zr{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=gi,s=gi,o=Kn,a=ac,c=vi,l=qr,u=n.DEFAULT_ANISOTROPY,f=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cN++}),this.uuid=dc(),this.name="",this.source=new Vu(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(sc("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Gs?sn:Jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case T0:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case D0:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case T0:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case D0:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sc("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===sn?Gs:iy}set encoding(t){sc("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Gs?sn:Jn}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Rg,n.DEFAULT_ANISOTROPY=1,n})(),on=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],g=c[9],v=c[2],m=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,C=(p+1)/2,D=(h+1)/2,A=(u+d)/4,E=(f+v)/4,q=(g+m)/4;return _>C&&_>D?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=E/i):C>D?C<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(C),i=A/r,s=q/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=E/s,r=q/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-v)/M,this.z=(d-u)/M,this.w=Math.acos((l+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},P0=class extends Zr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(sc("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Gs?sn:Jn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new wa(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Vu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fr=class extends P0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Uu=class extends wa{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var L0=class extends wa{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||c!==d||l!==p||u!==g){let m=1-a,h=c*d+l*p+u*g+f*v,M=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){let D=Math.sqrt(_),A=Math.atan2(D,h*M);m=Math.sin(m*A)/D,a=Math.sin(a*A)/D}let C=a*M;if(c=c*m+d*C,l=l*m+p*C,u=u*m+g*C,f=f*m+v*C,m===1-a){let D=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=D,l*=D,u*=D,f*=D}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+c*p-l*d,e[t+1]=c*g+u*d+l*f-a*p,e[t+2]=l*g+u*p+a*d-c*f,e[t+3]=u*g-a*f-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),d=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"YZX":this._x=d*u*f+l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f-d*p*g;break;case"XZY":this._x=d*u*f-l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>f){let p=2*Math.sqrt(1+i-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){let p=2*Math.sqrt(1+a-i-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pv.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return s0.copy(this).projectOnVector(e),this.sub(s0)}reflect(e){return this.sub(s0.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},s0=new V,pv=new Yr,js=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hi):hi.fromBufferAttribute(s,o),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cu.copy(i.boundingBox)),cu.applyMatrix4(e.matrixWorld),this.union(cu)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tc),lu.subVectors(this.max,tc),Ko.subVectors(e.a,tc),Jo.subVectors(e.b,tc),Qo.subVectors(e.c,tc),kr.subVectors(Jo,Ko),Vr.subVectors(Qo,Jo),Ls.subVectors(Ko,Qo);let t=[0,-kr.z,kr.y,0,-Vr.z,Vr.y,0,-Ls.z,Ls.y,kr.z,0,-kr.x,Vr.z,0,-Vr.x,Ls.z,0,-Ls.x,-kr.y,kr.x,0,-Vr.y,Vr.x,0,-Ls.y,Ls.x,0];return!o0(t,Ko,Jo,Qo,lu)||(t=[1,0,0,0,1,0,0,0,1],!o0(t,Ko,Jo,Qo,lu))?!1:(uu.crossVectors(kr,Vr),t=[uu.x,uu.y,uu.z],o0(t,Ko,Jo,Qo,lu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},er=[new V,new V,new V,new V,new V,new V,new V,new V],hi=new V,cu=new js,Ko=new V,Jo=new V,Qo=new V,kr=new V,Vr=new V,Ls=new V,tc=new V,lu=new V,uu=new V,Os=new V;function o0(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Os.fromArray(n,s);let a=r.x*Math.abs(Os.x)+r.y*Math.abs(Os.y)+r.z*Math.abs(Os.z),c=e.dot(Os),l=t.dot(Os),u=i.dot(Os);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var lN=new js,nc=new V,a0=new V,lc=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):lN.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nc.subVectors(e,this.center);let t=nc.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(nc,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(a0.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nc.copy(e.center).add(a0)),this.expandByPoint(nc.copy(e.center).sub(a0))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},tr=new V,c0=new V,fu=new V,Ur=new V,l0=new V,du=new V,u0=new V,O0=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,t),tr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){c0.copy(e).add(t).multiplyScalar(.5),fu.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(c0);let s=e.distanceTo(t)*.5,o=-this.direction.dot(fu),a=Ur.dot(this.direction),c=-Ur.dot(fu),l=Ur.lengthSq(),u=Math.abs(1-o*o),f,d,p,g;if(u>0)if(f=o*c-a,d=o*a-c,g=s*u,f>=0)if(d>=-g)if(d<=g){let v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(c0).addScaledVector(fu,d),p}intersectSphere(e,t){tr.subVectors(e.center,this.origin);let i=tr.dot(this.direction),r=tr.dot(tr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,t,i,r,s){l0.subVectors(t,e),du.subVectors(i,e),u0.crossVectors(l0,du);let o=this.direction.dot(u0),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ur.subVectors(this.origin,e);let c=a*this.direction.dot(du.crossVectors(Ur,du));if(c<0)return null;let l=a*this.direction.dot(l0.cross(Ur));if(l<0||c+l>o)return null;let u=-a*Ur.dot(u0);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fn=class n{constructor(e,t,i,r,s,o,a,c,l,u,f,d,p,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,f,d,p,g,v,m)}set(e,t,i,r,s,o,a,c,l,u,f,d,p,g,v,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/ea.setFromMatrixColumn(e,0).length(),s=1/ea.setFromMatrixColumn(e,1).length(),o=1/ea.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=o*u,p=o*f,g=a*u,v=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,p=c*f,g=l*u,v=l*f;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,p=c*f,g=l*u,v=l*f;t[0]=d-v*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,p=o*f,g=a*u,v=a*f;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+v,t[1]=c*f,t[5]=v*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*f+g,t[10]=d-v*f}else if(e.order==="XZY"){let d=o*c,p=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+v,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uN,e,fN)}lookAt(e,t,i){let r=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Hr.crossVectors(i,zn),Hr.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Hr.crossVectors(i,zn)),Hr.normalize(),hu.crossVectors(zn,Hr),r[0]=Hr.x,r[4]=hu.x,r[8]=zn.x,r[1]=Hr.y,r[5]=hu.y,r[9]=zn.y,r[2]=Hr.z,r[6]=hu.z,r[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],M=i[3],_=i[7],C=i[11],D=i[15],A=r[0],E=r[4],q=r[8],b=r[12],w=r[1],j=r[5],X=r[9],ne=r[13],R=r[2],U=r[6],I=r[10],L=r[14],P=r[3],H=r[7],$=r[11],J=r[15];return s[0]=o*A+a*w+c*R+l*P,s[4]=o*E+a*j+c*U+l*H,s[8]=o*q+a*X+c*I+l*$,s[12]=o*b+a*ne+c*L+l*J,s[1]=u*A+f*w+d*R+p*P,s[5]=u*E+f*j+d*U+p*H,s[9]=u*q+f*X+d*I+p*$,s[13]=u*b+f*ne+d*L+p*J,s[2]=g*A+v*w+m*R+h*P,s[6]=g*E+v*j+m*U+h*H,s[10]=g*q+v*X+m*I+h*$,s[14]=g*b+v*ne+m*L+h*J,s[3]=M*A+_*w+C*R+D*P,s[7]=M*E+_*j+C*U+D*H,s[11]=M*q+_*X+C*I+D*$,s[15]=M*b+_*ne+C*L+D*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+s*c*f-r*l*f-s*a*d+i*l*d+r*a*p-i*c*p)+v*(+t*c*p-t*l*d+s*o*d-r*o*p+r*l*u-s*c*u)+m*(+t*l*f-t*a*p-s*o*f+i*o*p+s*a*u-i*l*u)+h*(-r*a*u-t*c*f+t*a*d+r*o*f-i*o*d+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],M=f*m*l-v*d*l+v*c*p-a*m*p-f*c*h+a*d*h,_=g*d*l-u*m*l-g*c*p+o*m*p+u*c*h-o*d*h,C=u*v*l-g*f*l+g*a*p-o*v*p-u*a*h+o*f*h,D=g*f*c-u*v*c-g*a*d+o*v*d+u*a*m-o*f*m,A=t*M+i*_+r*C+s*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/A;return e[0]=M*E,e[1]=(v*d*s-f*m*s-v*r*p+i*m*p+f*r*h-i*d*h)*E,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*h+i*c*h)*E,e[3]=(f*c*s-a*d*s-f*r*l+i*d*l+a*r*p-i*c*p)*E,e[4]=_*E,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*h+t*d*h)*E,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*h-t*c*h)*E,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*p+t*c*p)*E,e[8]=C*E,e[9]=(g*f*s-u*v*s-g*i*p+t*v*p+u*i*h-t*f*h)*E,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*h+t*a*h)*E,e[11]=(u*a*s-o*f*s-u*i*l+t*f*l+o*i*p-t*a*p)*E,e[12]=D*E,e[13]=(u*v*r-g*f*r+g*i*d-t*v*d-u*i*m+t*f*m)*E,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*m-t*a*m)*E,e[15]=(o*f*r-u*a*r+u*i*c-t*f*c-o*i*d+t*a*d)*E,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,d=s*l,p=s*u,g=s*f,v=o*u,m=o*f,h=a*f,M=c*l,_=c*u,C=c*f,D=i.x,A=i.y,E=i.z;return r[0]=(1-(v+h))*D,r[1]=(p+C)*D,r[2]=(g-_)*D,r[3]=0,r[4]=(p-C)*A,r[5]=(1-(d+h))*A,r[6]=(m+M)*A,r[7]=0,r[8]=(g+_)*E,r[9]=(m-M)*E,r[10]=(1-(d+v))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=ea.set(r[0],r[1],r[2]).length(),o=ea.set(r[4],r[5],r[6]).length(),a=ea.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],pi.copy(this);let l=1/s,u=1/o,f=1/a;return pi.elements[0]*=l,pi.elements[1]*=l,pi.elements[2]*=l,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=f,pi.elements[9]*=f,pi.elements[10]*=f,t.setFromRotationMatrix(pi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=cr){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r),p,g;if(a===cr)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===zu)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=cr){let c=this.elements,l=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*l,p=(i+r)*u,g,v;if(a===cr)g=(o+s)*f,v=-2*f;else if(a===zu)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ea=new V,pi=new fn,uN=new V(0,0,0),fN=new V(1,1,1),Hr=new V,hu=new V,zn=new V,mv=new fn,gv=new Yr,dN=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],f=s[9],d=s[2],p=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(Dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return mv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mv,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return gv.setFromEuler(this),this.setFromQuaternion(gv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Hu=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hN=0,vv=new V,ta=new Yr,nr=new fn,pu=new V,ic=new V,pN=new V,mN=new Yr,yv=new V(1,0,0),_v=new V(0,1,0),bv=new V(0,0,1),gN={type:"added"},vN={type:"removed"},Ea=(()=>{class n extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hN++}),this.uuid=dc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new V,i=new dN,r=new Yr,s=new V(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fn},normalMatrix:{value:new tt}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ta.setFromAxisAngle(t,i),this.quaternion.multiply(ta),this}rotateOnWorldAxis(t,i){return ta.setFromAxisAngle(t,i),this.quaternion.premultiply(ta),this}rotateX(t){return this.rotateOnAxis(yv,t)}rotateY(t){return this.rotateOnAxis(_v,t)}rotateZ(t){return this.rotateOnAxis(bv,t)}translateOnAxis(t,i){return vv.copy(t).applyQuaternion(this.quaternion),this.position.add(vv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(yv,t)}translateY(t){return this.translateOnAxis(_v,t)}translateZ(t){return this.translateOnAxis(bv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?pu.copy(t):pu.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),ic.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(ic,pu,this.up):nr.lookAt(pu,ic,this.up),this.quaternion.setFromRotationMatrix(nr),s&&(nr.extractRotation(s.matrixWorld),ta.setFromRotationMatrix(nr),this.quaternion.premultiply(ta.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(gN)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(vN)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nr.multiply(t.parent.matrixWorld)),t.applyMatrix4(nr),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ic,t,pN),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ic,mN,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++){let o=i[r];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++){let c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){let d=l[u];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),f=a(t.images),d=a(t.shapes),p=a(t.skeletons),g=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),f.length>0&&(r.images=f),d.length>0&&(r.shapes=d),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let u in c){let f=c[u];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new V(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),mi=new V,ir=new V,f0=new V,rr=new V,na=new V,ia=new V,xv=new V,d0=new V,h0=new V,p0=new V,mu=!1,fa=class n{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),mi.subVectors(e,t),r.cross(mi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){mi.subVectors(r,t),ir.subVectors(i,t),f0.subVectors(e,t);let o=mi.dot(mi),a=mi.dot(ir),c=mi.dot(f0),l=ir.dot(ir),u=ir.dot(f0),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getUV(e,t,i,r,s,o,a,c){return mu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),mu=!0),this.getInterpolation(e,t,i,r,s,o,a,c)}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,rr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,rr.x),c.addScaledVector(o,rr.y),c.addScaledVector(a,rr.z),c)}static isFrontFacing(e,t,i,r){return mi.subVectors(i,t),ir.subVectors(e,t),mi.cross(ir).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),mi.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return mu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),mu=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;na.subVectors(r,i),ia.subVectors(s,i),d0.subVectors(e,i);let c=na.dot(d0),l=ia.dot(d0);if(c<=0&&l<=0)return t.copy(i);h0.subVectors(e,r);let u=na.dot(h0),f=ia.dot(h0);if(u>=0&&f<=u)return t.copy(r);let d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(na,o);p0.subVectors(e,s);let p=na.dot(p0),g=ia.dot(p0);if(g>=0&&p<=g)return t.copy(s);let v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ia,a);let m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return xv.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(xv,a);let h=1/(m+v+d);return o=v*h,a=d*h,t.copy(i).addScaledVector(na,o).addScaledVector(ia,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},oy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},gu={h:0,s:0,l:0};function m0(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ut=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ht.workingColorSpace){if(e=rN(e,1),t=Dn(t,0,1),i=Dn(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=m0(o,s,e+1/3),this.g=m0(o,s,e),this.b=m0(o,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,t=sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){let i=oy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=i0(e.r),this.g=i0(e.g),this.b=i0(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return ht.fromWorkingColorSpace(un.copy(this),e),Math.round(Dn(un.r*255,0,255))*65536+Math.round(Dn(un.g*255,0,255))*256+Math.round(Dn(un.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(un.copy(this),t);let i=un.r,r=un.g,s=un.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=sn){ht.fromWorkingColorSpace(un.copy(this),e);let t=un.r,i=un.g,r=un.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL(gu);let i=t0(Br.h,gu.h,t),r=t0(Br.s,gu.s,t),s=t0(Br.l,gu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new ut;ut.NAMES=oy;var yN=0,xa=class extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yN++}),this.uuid=dc(),this.name="",this.type="Material",this.blending=ma,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=S0,this.blendDst=w0,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Iu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=av,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ma&&(i.blending=this.blending),this.side!==Xr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==S0&&(i.blendSrc=this.blendSrc),this.blendDst!==w0&&(i.blendDst=this.blendDst),this.blendEquation!==Vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Iu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==av&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ma=class extends xa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var jt=new V,vu=new pt,ei=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=cv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=jr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vu.fromBufferAttribute(this,t),vu.applyMatrix3(e),this.setXY(t,vu.x,vu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ec(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ec(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ec(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ec(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ec(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),i=Tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),i=Tn(i,this.array),r=Tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),i=Tn(i,this.array),r=Tn(r,this.array),s=Tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cv&&(e.usage=this.usage),e}};var Bu=class extends ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Gu=class extends ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var lr=class extends ei{constructor(e,t,i){super(new Float32Array(e),t,i)}};var _N=0,Yn=new fn,g0=new Ea,ra=new V,Fn=new js,rc=new js,tn=new V,Ws=class n extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_N++}),this.uuid=dc(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sy(e)?Gu:Bu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,i){return Yn.makeTranslation(e,t,i),this.applyMatrix4(Yn),this}scale(e,t,i){return Yn.makeScale(e,t,i),this.applyMatrix4(Yn),this}lookAt(e){return g0.lookAt(e),g0.updateMatrix(),this.applyMatrix4(g0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new lr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lc);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];rc.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Fn.min,rc.min),Fn.expandByPoint(tn),tn.addVectors(Fn.max,rc.max),Fn.expandByPoint(tn)):(Fn.expandByPoint(rc.min),Fn.expandByPoint(rc.max))}Fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)tn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(tn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)tn.fromBufferAttribute(a,l),c&&(ra.fromBufferAttribute(e,l),tn.add(ra)),r=Math.max(r,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<a;w++)l[w]=new V,u[w]=new V;let f=new V,d=new V,p=new V,g=new pt,v=new pt,m=new pt,h=new V,M=new V;function _(w,j,X){f.fromArray(r,w*3),d.fromArray(r,j*3),p.fromArray(r,X*3),g.fromArray(o,w*2),v.fromArray(o,j*2),m.fromArray(o,X*2),d.sub(f),p.sub(f),v.sub(g),m.sub(g);let ne=1/(v.x*m.y-m.x*v.y);isFinite(ne)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(ne),M.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(ne),l[w].add(h),l[j].add(h),l[X].add(h),u[w].add(M),u[j].add(M),u[X].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:i.length}]);for(let w=0,j=C.length;w<j;++w){let X=C[w],ne=X.start,R=X.count;for(let U=ne,I=ne+R;U<I;U+=3)_(i[U+0],i[U+1],i[U+2])}let D=new V,A=new V,E=new V,q=new V;function b(w){E.fromArray(s,w*3),q.copy(E);let j=l[w];D.copy(j),D.sub(E.multiplyScalar(E.dot(j))).normalize(),A.crossVectors(q,j);let ne=A.dot(u[w])<0?-1:1;c[w*4]=D.x,c[w*4+1]=D.y,c[w*4+2]=D.z,c[w*4+3]=ne}for(let w=0,j=C.length;w<j;++w){let X=C[w],ne=X.start,R=X.count;for(let U=ne,I=ne+R;U<I;U+=3)b(i[U+0]),b(i[U+1]),b(i[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new V,s=new V,o=new V,a=new V,c=new V,l=new V,u=new V,f=new V;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u),p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let h=0;h<u;h++)d[g++]=l[p++]}return new ei(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){let d=l[u],p=e(d,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){let p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],f=s[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mv=new fn,zs=new O0,yu=new lc,Cv=new V,sa=new V,oa=new V,aa=new V,v0=new V,_u=new V,bu=new pt,xu=new pt,Mu=new pt,Sv=new V,wv=new V,Ev=new V,Cu=new V,Su=new V,Qn=class extends Ea{constructor(e=new Ws,t=new Ma){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){_u.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],f=s[c];u!==0&&(v0.fromBufferAttribute(f,e),o?_u.addScaledVector(v0,u):_u.addScaledVector(v0.sub(t),u))}t.add(_u)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yu.copy(i.boundingSphere),yu.applyMatrix4(s),zs.copy(e.ray).recast(e.near),!(yu.containsPoint(zs.origin)===!1&&(zs.intersectSphere(yu,Cv)===null||zs.origin.distanceToSquared(Cv)>(e.far-e.near)**2))&&(Mv.copy(s).invert(),zs.copy(e.ray).applyMatrix4(Mv),!(i.boundingBox!==null&&zs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zs)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],h=o[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let C=M,D=_;C<D;C+=3){let A=a.getX(C),E=a.getX(C+1),q=a.getX(C+2);r=wu(this,h,e,i,l,u,f,A,E,q),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){let M=a.getX(m),_=a.getX(m+1),C=a.getX(m+2);r=wu(this,o,e,i,l,u,f,M,_,C),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],h=o[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let C=M,D=_;C<D;C+=3){let A=C,E=C+1,q=C+2;r=wu(this,h,e,i,l,u,f,A,E,q),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){let M=m,_=m+1,C=m+2;r=wu(this,o,e,i,l,u,f,M,_,C),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function bN(n,e,t,i,r,s,o,a){let c;if(e.side===In?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Xr,a),c===null)return null;Su.copy(a),Su.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Su);return l<t.near||l>t.far?null:{distance:l,point:Su.clone(),object:n}}function wu(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,sa),n.getVertexPosition(c,oa),n.getVertexPosition(l,aa);let u=bN(n,e,t,i,sa,oa,aa,Cu);if(u){r&&(bu.fromBufferAttribute(r,a),xu.fromBufferAttribute(r,c),Mu.fromBufferAttribute(r,l),u.uv=fa.getInterpolation(Cu,sa,oa,aa,bu,xu,Mu,new pt)),s&&(bu.fromBufferAttribute(s,a),xu.fromBufferAttribute(s,c),Mu.fromBufferAttribute(s,l),u.uv1=fa.getInterpolation(Cu,sa,oa,aa,bu,xu,Mu,new pt),u.uv2=u.uv1),o&&(Sv.fromBufferAttribute(o,a),wv.fromBufferAttribute(o,c),Ev.fromBufferAttribute(o,l),u.normal=fa.getInterpolation(Cu,sa,oa,aa,Sv,wv,Ev,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new V,materialIndex:0};fa.getNormal(sa,oa,aa,f.normal),u.face=f}return u}var $s=class n extends Ws{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],f=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new lr(l,3)),this.setAttribute("normal",new lr(u,3)),this.setAttribute("uv",new lr(f,2));function g(v,m,h,M,_,C,D,A,E,q,b){let w=C/E,j=D/q,X=C/2,ne=D/2,R=A/2,U=E+1,I=q+1,L=0,P=0,H=new V;for(let $=0;$<I;$++){let J=$*j-ne;for(let Y=0;Y<U;Y++){let G=Y*w-X;H[v]=G*M,H[m]=J*_,H[h]=R,l.push(H.x,H.y,H.z),H[v]=0,H[m]=0,H[h]=A>0?1:-1,u.push(H.x,H.y,H.z),f.push(Y/E),f.push(1-$/q),L+=1}}for(let $=0;$<q;$++)for(let J=0;J<E;J++){let Y=d+J+U*$,G=d+J+U*($+1),W=d+(J+1)+U*($+1),ce=d+(J+1)+U*$;c.push(Y,G,ce),c.push(G,W,ce),P+=6}a.addGroup(p,P,b),p+=P,d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ca(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function bn(n){let e={};for(let t=0;t<n.length;t++){let i=Ca(n[t]);for(let r in i)e[r]=i[r]}return e}function xN(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ay(n){return n.getRenderTarget()===null?n.outputColorSpace:ht.workingColorSpace}var MN={clone:Ca,merge:bn},CN=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SN=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dr=class extends xa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CN,this.fragmentShader=SN,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ca(e.uniforms),this.uniformsGroups=xN(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ju=class extends Ea{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=cr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mn=class extends ju{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=R0*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(e0*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return R0*2*Math.atan(Math.tan(e0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(e0*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ca=-90,la=1,z0=class extends Ea{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Mn(ca,la,e,t);r.layers=this.layers,this.add(r);let s=new Mn(ca,la,e,t);s.layers=this.layers,this.add(s);let o=new Mn(ca,la,e,t);o.layers=this.layers,this.add(o);let a=new Mn(ca,la,e,t);a.layers=this.layers,this.add(a);let c=new Mn(ca,la,e,t);c.layers=this.layers,this.add(c);let l=new Mn(ca,la,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===cr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===zu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Wu=class extends wa{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ya,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},F0=class extends fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(sc("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Gs?sn:Jn),this.texture=new Wu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $s(5,5,5),s=new dr({name:"CubemapFromEquirect",uniforms:Ca(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:Wr});s.uniforms.tEquirect.value=t;let o=new Qn(r,s),a=t.minFilter;return t.minFilter===ac&&(t.minFilter=Kn),new z0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},y0=new V,wN=new V,EN=new tt,or=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=y0.subVectors(i,t).cross(wN.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(y0),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||EN.getNormalMatrix(e),r=this.coplanarPoint(y0).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fs=new lc,Eu=new V,$u=class{constructor(e=new or,t=new or,i=new or,r=new or,s=new or,o=new or){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=cr){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],v=r[10],m=r[11],h=r[12],M=r[13],_=r[14],C=r[15];if(i[0].setComponents(c-s,d-l,m-p,C-h).normalize(),i[1].setComponents(c+s,d+l,m+p,C+h).normalize(),i[2].setComponents(c+o,d+u,m+g,C+M).normalize(),i[3].setComponents(c-o,d-u,m-g,C-M).normalize(),i[4].setComponents(c-a,d-f,m-v,C-_).normalize(),t===cr)i[5].setComponents(c+a,d+f,m+v,C+_).normalize();else if(t===zu)i[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){return Fs.center.set(0,0,0),Fs.radius=.7071067811865476,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Eu.x=r.normal.x>0?e.max.x:e.min.x,Eu.y=r.normal.y>0?e.max.y:e.min.y,Eu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Eu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function cy(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function AN(n,e){let t=e.isWebGL2,i=new WeakMap;function r(l,u){let f=l.array,d=l.usage,p=f.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,f,d),l.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:p}}function s(l,u,f){let d=u.array,p=u._updateRange,g=u.updateRanges;if(n.bindBuffer(f,l),p.count===-1&&g.length===0&&n.bufferSubData(f,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){let h=g[v];t?n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let f=i.get(l);if(f===void 0)i.set(l,r(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,l,u),f.version=l.version}}return{get:o,remove:a,update:c}}var k0=class n extends Ws{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=e/a,d=t/c,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){let M=h*d-o;for(let _=0;_<l;_++){let C=_*f-s;g.push(C,-M,0),v.push(0,0,1),m.push(_/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let M=0;M<a;M++){let _=M+l*h,C=M+l*(h+1),D=M+1+l*(h+1),A=M+1+l*h;p.push(_,C,A),p.push(C,D,A)}this.setIndex(p),this.setAttribute("position",new lr(g,3)),this.setAttribute("normal",new lr(v,3)),this.setAttribute("uv",new lr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},TN=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DN=`#ifdef USE_ALPHAHASH
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
#endif`,IN=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RN=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NN=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,PN=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LN=`#ifdef USE_AOMAP
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
#endif`,ON=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zN=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,FN=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kN=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VN=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UN=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HN=`#ifdef USE_IRIDESCENCE
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
#endif`,BN=`#ifdef USE_BUMPMAP
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
#endif`,GN=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,jN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$N=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qN=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,YN=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,KN=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,JN=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,QN=`vec3 transformedNormal = objectNormal;
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
#endif`,eP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rP="gl_FragColor = linearToOutputTexel( gl_FragColor );",sP=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,oP=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,aP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cP=`#ifdef USE_ENVMAP
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
#endif`,lP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uP=`#ifdef USE_ENVMAP
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
#endif`,fP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mP=`#ifdef USE_GRADIENTMAP
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
}`,gP=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_P=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bP=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,xP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,MP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EP=`PhysicalMaterial material;
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
#endif`,AP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,TP=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,DP=`#if defined( RE_IndirectDiffuse )
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
#endif`,IP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,LP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,OP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kP=`#if defined( USE_POINTS_UV )
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
#endif`,VP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HP=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,GP=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,jP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,WP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$P=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YP=`#ifdef USE_NORMALMAP
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
#endif`,KP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nL=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,iL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,uL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pL=`#ifdef USE_SKINNING
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
#endif`,mL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gL=`#ifdef USE_SKINNING
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
#endif`,vL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_L=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bL=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xL=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ML=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,AL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TL=`uniform sampler2D t2D;
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
}`,DL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PL=`#include <common>
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
}`,LL=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,OL=`#define DISTANCE
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
}`,zL=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,FL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VL=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UL=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HL=`#include <common>
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
}`,BL=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,GL=`#define LAMBERT
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
}`,jL=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,WL=`#define MATCAP
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
}`,$L=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,qL=`#define NORMAL
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
}`,XL=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZL=`#define PHONG
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
}`,YL=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,KL=`#define STANDARD
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
}`,JL=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,QL=`#define TOON
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
}`,eO=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,tO=`uniform float size;
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
}`,nO=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,iO=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,rO=`uniform vec3 color;
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
}`,sO=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,oO=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$e={alphahash_fragment:TN,alphahash_pars_fragment:DN,alphamap_fragment:IN,alphamap_pars_fragment:RN,alphatest_fragment:NN,alphatest_pars_fragment:PN,aomap_fragment:LN,aomap_pars_fragment:ON,batching_pars_vertex:zN,batching_vertex:FN,begin_vertex:kN,beginnormal_vertex:VN,bsdfs:UN,iridescence_fragment:HN,bumpmap_pars_fragment:BN,clipping_planes_fragment:GN,clipping_planes_pars_fragment:jN,clipping_planes_pars_vertex:WN,clipping_planes_vertex:$N,color_fragment:qN,color_pars_fragment:XN,color_pars_vertex:ZN,color_vertex:YN,common:KN,cube_uv_reflection_fragment:JN,defaultnormal_vertex:QN,displacementmap_pars_vertex:eP,displacementmap_vertex:tP,emissivemap_fragment:nP,emissivemap_pars_fragment:iP,colorspace_fragment:rP,colorspace_pars_fragment:sP,envmap_fragment:oP,envmap_common_pars_fragment:aP,envmap_pars_fragment:cP,envmap_pars_vertex:lP,envmap_physical_pars_fragment:xP,envmap_vertex:uP,fog_vertex:fP,fog_pars_vertex:dP,fog_fragment:hP,fog_pars_fragment:pP,gradientmap_pars_fragment:mP,lightmap_fragment:gP,lightmap_pars_fragment:vP,lights_lambert_fragment:yP,lights_lambert_pars_fragment:_P,lights_pars_begin:bP,lights_toon_fragment:MP,lights_toon_pars_fragment:CP,lights_phong_fragment:SP,lights_phong_pars_fragment:wP,lights_physical_fragment:EP,lights_physical_pars_fragment:AP,lights_fragment_begin:TP,lights_fragment_maps:DP,lights_fragment_end:IP,logdepthbuf_fragment:RP,logdepthbuf_pars_fragment:NP,logdepthbuf_pars_vertex:PP,logdepthbuf_vertex:LP,map_fragment:OP,map_pars_fragment:zP,map_particle_fragment:FP,map_particle_pars_fragment:kP,metalnessmap_fragment:VP,metalnessmap_pars_fragment:UP,morphcolor_vertex:HP,morphnormal_vertex:BP,morphtarget_pars_vertex:GP,morphtarget_vertex:jP,normal_fragment_begin:WP,normal_fragment_maps:$P,normal_pars_fragment:qP,normal_pars_vertex:XP,normal_vertex:ZP,normalmap_pars_fragment:YP,clearcoat_normal_fragment_begin:KP,clearcoat_normal_fragment_maps:JP,clearcoat_pars_fragment:QP,iridescence_pars_fragment:eL,opaque_fragment:tL,packing:nL,premultiplied_alpha_fragment:iL,project_vertex:rL,dithering_fragment:sL,dithering_pars_fragment:oL,roughnessmap_fragment:aL,roughnessmap_pars_fragment:cL,shadowmap_pars_fragment:lL,shadowmap_pars_vertex:uL,shadowmap_vertex:fL,shadowmask_pars_fragment:dL,skinbase_vertex:hL,skinning_pars_vertex:pL,skinning_vertex:mL,skinnormal_vertex:gL,specularmap_fragment:vL,specularmap_pars_fragment:yL,tonemapping_fragment:_L,tonemapping_pars_fragment:bL,transmission_fragment:xL,transmission_pars_fragment:ML,uv_pars_fragment:CL,uv_pars_vertex:SL,uv_vertex:wL,worldpos_vertex:EL,background_vert:AL,background_frag:TL,backgroundCube_vert:DL,backgroundCube_frag:IL,cube_vert:RL,cube_frag:NL,depth_vert:PL,depth_frag:LL,distanceRGBA_vert:OL,distanceRGBA_frag:zL,equirect_vert:FL,equirect_frag:kL,linedashed_vert:VL,linedashed_frag:UL,meshbasic_vert:HL,meshbasic_frag:BL,meshlambert_vert:GL,meshlambert_frag:jL,meshmatcap_vert:WL,meshmatcap_frag:$L,meshnormal_vert:qL,meshnormal_frag:XL,meshphong_vert:ZL,meshphong_frag:YL,meshphysical_vert:KL,meshphysical_frag:JL,meshtoon_vert:QL,meshtoon_frag:eO,points_vert:tO,points_frag:nO,shadow_vert:iO,shadow_frag:rO,sprite_vert:sO,sprite_frag:oO},re={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Pi={basic:{uniforms:bn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:bn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ut(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:bn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:bn([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:bn([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ut(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:bn([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:bn([re.points,re.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:bn([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:bn([re.common,re.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:bn([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:bn([re.sprite,re.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:bn([re.common,re.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:bn([re.lights,re.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Pi.physical={uniforms:bn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Au={r:0,b:0,g:0};function aO(n,e,t,i,r,s,o){let a=new ut(0),c=s===!0?0:1,l,u,f=null,d=0,p=null;function g(m,h){let M=!1,_=h.isScene===!0?h.background:null;_&&_.isTexture&&(_=(h.backgroundBlurriness>0?t:e).get(_)),_===null?v(a,c):_&&_.isColor&&(v(_,1),M=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Yu)?(u===void 0&&(u=new Qn(new $s(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:Ca(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=ht.getTransfer(_.colorSpace)!==St,(f!==_||d!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,d=_.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Qn(new k0(2,2),new dr({name:"BackgroundMaterial",uniforms:Ca(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Xr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=ht.getTransfer(_.colorSpace)!==St,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,f=_,d=_.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,h){m.getRGB(Au,ay(n)),i.buffers.color.setClear(Au.r,Au.g,Au.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),c=h,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(a,c)},render:g}}function cO(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=m(null),l=c,u=!1;function f(R,U,I,L,P){let H=!1;if(o){let $=v(L,I,U);l!==$&&(l=$,p(l.object)),H=h(R,L,I,P),H&&M(R,L,I,P)}else{let $=U.wireframe===!0;(l.geometry!==L.id||l.program!==I.id||l.wireframe!==$)&&(l.geometry=L.id,l.program=I.id,l.wireframe=$,H=!0)}P!==null&&t.update(P,n.ELEMENT_ARRAY_BUFFER),(H||u)&&(u=!1,q(R,U,I,L),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(R){return i.isWebGL2?n.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return i.isWebGL2?n.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function v(R,U,I){let L=I.wireframe===!0,P=a[R.id];P===void 0&&(P={},a[R.id]=P);let H=P[U.id];H===void 0&&(H={},P[U.id]=H);let $=H[L];return $===void 0&&($=m(d()),H[L]=$),$}function m(R){let U=[],I=[],L=[];for(let P=0;P<r;P++)U[P]=0,I[P]=0,L[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:I,attributeDivisors:L,object:R,attributes:{},index:null}}function h(R,U,I,L){let P=l.attributes,H=U.attributes,$=0,J=I.getAttributes();for(let Y in J)if(J[Y].location>=0){let W=P[Y],ce=H[Y];if(ce===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),W===void 0||W.attribute!==ce||ce&&W.data!==ce.data)return!0;$++}return l.attributesNum!==$||l.index!==L}function M(R,U,I,L){let P={},H=U.attributes,$=0,J=I.getAttributes();for(let Y in J)if(J[Y].location>=0){let W=H[Y];W===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(W=R.instanceColor));let ce={};ce.attribute=W,W&&W.data&&(ce.data=W.data),P[Y]=ce,$++}l.attributes=P,l.attributesNum=$,l.index=L}function _(){let R=l.newAttributes;for(let U=0,I=R.length;U<I;U++)R[U]=0}function C(R){D(R,0)}function D(R,U){let I=l.newAttributes,L=l.enabledAttributes,P=l.attributeDivisors;I[R]=1,L[R]===0&&(n.enableVertexAttribArray(R),L[R]=1),P[R]!==U&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),P[R]=U)}function A(){let R=l.newAttributes,U=l.enabledAttributes;for(let I=0,L=U.length;I<L;I++)U[I]!==R[I]&&(n.disableVertexAttribArray(I),U[I]=0)}function E(R,U,I,L,P,H,$){$===!0?n.vertexAttribIPointer(R,U,I,P,H):n.vertexAttribPointer(R,U,I,L,P,H)}function q(R,U,I,L){if(i.isWebGL2===!1&&(R.isInstancedMesh||L.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let P=L.attributes,H=I.getAttributes(),$=U.defaultAttributeValues;for(let J in H){let Y=H[J];if(Y.location>=0){let G=P[J];if(G===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(G=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(G=R.instanceColor)),G!==void 0){let W=G.normalized,ce=G.itemSize,be=t.get(G);if(be===void 0)continue;let le=be.buffer,De=be.type,Ce=be.bytesPerElement,Ee=i.isWebGL2===!0&&(De===n.INT||De===n.UNSIGNED_INT||G.gpuType===Yv);if(G.isInterleavedBufferAttribute){let nt=G.data,O=nt.stride,dn=G.offset;if(nt.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Y.locationSize;Ie++)D(Y.location+Ie,nt.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Ie=0;Ie<Y.locationSize;Ie++)C(Y.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,le);for(let Ie=0;Ie<Y.locationSize;Ie++)E(Y.location+Ie,ce/Y.locationSize,De,W,O*Ce,(dn+ce/Y.locationSize*Ie)*Ce,Ee)}else{if(G.isInstancedBufferAttribute){for(let nt=0;nt<Y.locationSize;nt++)D(Y.location+nt,G.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let nt=0;nt<Y.locationSize;nt++)C(Y.location+nt);n.bindBuffer(n.ARRAY_BUFFER,le);for(let nt=0;nt<Y.locationSize;nt++)E(Y.location+nt,ce/Y.locationSize,De,W,ce*Ce,ce/Y.locationSize*nt*Ce,Ee)}}else if($!==void 0){let W=$[J];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(Y.location,W);break;case 3:n.vertexAttrib3fv(Y.location,W);break;case 4:n.vertexAttrib4fv(Y.location,W);break;default:n.vertexAttrib1fv(Y.location,W)}}}}A()}function b(){X();for(let R in a){let U=a[R];for(let I in U){let L=U[I];for(let P in L)g(L[P].object),delete L[P];delete U[I]}delete a[R]}}function w(R){if(a[R.id]===void 0)return;let U=a[R.id];for(let I in U){let L=U[I];for(let P in L)g(L[P].object),delete L[P];delete U[I]}delete a[R.id]}function j(R){for(let U in a){let I=a[U];if(I[R.id]===void 0)continue;let L=I[R.id];for(let P in L)g(L[P].object),delete L[P];delete I[R.id]}}function X(){ne(),u=!0,l!==c&&(l=c,p(l.object))}function ne(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:X,resetDefaultState:ne,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:j,initAttributes:_,enableAttribute:C,disableUnusedAttributes:A}}function lO(n,e,t,i){let r=i.isWebGL2,s;function o(u){s=u}function a(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function c(u,f,d){if(d===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,u,f,d),t.update(f,s,d)}function l(u,f,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(u[g],f[g]);else{p.multiDrawArraysWEBGL(s,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=f[v];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function uO(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,C=o||e.has("OES_texture_float"),D=_&&C,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:C,floatVertexTextures:D,maxSamples:A}}function fO(n){let e=this,t=null,i=0,r=!1,s=!1,o=new or,a=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let M=s?0:i,_=M*4,C=h.clippingState||null;c.value=C,C=u(g,d,_,p);for(let D=0;D!==_;++D)C[D]=t[D];h.clippingState=C,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let h=p+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,C=p;_!==v;++_,C+=4)o.copy(f[_]).applyMatrix4(M,a),o.normal.toArray(m,C),m[C+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function dO(n){let e=new WeakMap;function t(o,a){return a===E0?o.mapping=ya:a===A0&&(o.mapping=_a),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===E0||a===A0)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new F0(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var V0=class extends ju{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},da=4,Av=[.125,.215,.35,.446,.526,.582],Us=20,_0=new V0,Tv=new ut,b0=null,x0=0,M0=0,ks=(1+Math.sqrt(5))/2,ua=1/ks,Dv=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,ks,ua),new V(0,ks,-ua),new V(ua,0,ks),new V(-ua,0,ks),new V(ks,ua,0),new V(-ks,ua,0)],qu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){b0=this._renderer.getRenderTarget(),x0=this._renderer.getActiveCubeFace(),M0=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(b0,x0,M0),e.scissorTest=!1,Tu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ya||e.mapping===_a?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),b0=this._renderer.getRenderTarget(),x0=this._renderer.getActiveCubeFace(),M0=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:cc,format:vi,colorSpace:ur,depthBuffer:!1},r=Iv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iv(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hO(s)),this._blurMaterial=pO(s,e,t)}return r}_compileMaterial(e){let t=new Qn(this._lodPlanes[0],e);this._renderer.compile(t,_0)}_sceneToCubeUV(e,t,i,r){let a=new Mn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Tv),u.toneMapping=$r,u.autoClear=!1;let p=new Ma({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),g=new Qn(new $s,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Tv),v=!0);for(let h=0;h<6;h++){let M=h%3;M===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):M===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));let _=this._cubeSize;Tu(r,M*_,h>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===ya||e.mapping===_a;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rv());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Qn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Tu(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,_0)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Dv[(r-1)%Dv.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Qn(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Us-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Us;m>Us&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Us}`);let h=[],M=0;for(let E=0;E<Us;++E){let q=E/v,b=Math.exp(-q*q/2);h.push(b),E===0?M+=b:E<m&&(M+=2*b)}for(let E=0;E<h.length;E++)h[E]=h[E]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let C=this._sizeLods[r],D=3*C*(r>_-da?r-_+da:0),A=4*(this._cubeSize-C);Tu(t,D,A,3*C,2*C),c.setRenderTarget(t),c.render(f,_0)}};function hO(n){let e=[],t=[],i=[],r=n,s=n-da+1+Av.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-da?c=Av[o-n+da-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,h=1,M=new Float32Array(v*g*p),_=new Float32Array(m*g*p),C=new Float32Array(h*g*p);for(let A=0;A<p;A++){let E=A%3*2/3-1,q=A>2?0:-1,b=[E,q,0,E+2/3,q,0,E+2/3,q+1,0,E,q,0,E+2/3,q+1,0,E,q+1,0];M.set(b,v*g*A),_.set(d,m*g*A);let w=[A,A,A,A,A,A];C.set(w,h*g*A)}let D=new Ws;D.setAttribute("position",new ei(M,v)),D.setAttribute("uv",new ei(_,m)),D.setAttribute("faceIndex",new ei(C,h)),e.push(D),r>da&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Iv(n,e,t){let i=new fr(n,e,t);return i.texture.mapping=Yu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function pO(n,e,t){let i=new Float32Array(Us),r=new V(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:c5(),fragmentShader:`

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
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function Rv(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:c5(),fragmentShader:`

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
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function Nv(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:c5(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function c5(){return`

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
	`}function mO(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===E0||c===A0,u=c===ya||c===_a;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new qu(n)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(l&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new qu(n));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function gO(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vO(n,e,t,i){let r={},s=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];let p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(f){let d=f.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let p=f.morphAttributes;for(let g in p){let v=p[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(f){let d=[],p=f.index,g=f.attributes.position,v=0;if(p!==null){let M=p.array;v=p.version;for(let _=0,C=M.length;_<C;_+=3){let D=M[_+0],A=M[_+1],E=M[_+2];d.push(D,A,A,E,E,D)}}else if(g!==void 0){let M=g.array;v=g.version;for(let _=0,C=M.length/3-1;_<C;_+=3){let D=_+0,A=_+1,E=_+2;d.push(D,A,A,E,E,D)}}else return;let m=new(sy(d)?Gu:Bu)(d,1);m.version=v;let h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){let d=s.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function yO(n,e,t,i){let r=i.isWebGL2,s;function o(p){s=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function u(p,g){n.drawElements(s,g,a,p*c),t.update(g,s,1)}function f(p,g,v){if(v===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,g,a,p*c,v),t.update(g,s,v)}function d(p,g,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<v;h++)this.render(p[h]/c,g[h]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,v);let h=0;for(let M=0;M<v;M++)h+=g[M];t.update(h,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function _O(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function bO(n,e){return n[0]-e[0]}function xO(n,e){return Math.abs(e[1])-Math.abs(n[1])}function MO(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,o=new on,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0,m=s.get(u);if(m===void 0||m.count!==v){let U=function(){ne.dispose(),s.delete(u),u.removeEventListener("dispose",U)};var p=U;m!==void 0&&m.texture.dispose();let _=u.morphAttributes.position!==void 0,C=u.morphAttributes.normal!==void 0,D=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],q=u.morphAttributes.color||[],b=0;_===!0&&(b=1),C===!0&&(b=2),D===!0&&(b=3);let w=u.attributes.position.count*b,j=1;w>e.maxTextureSize&&(j=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let X=new Float32Array(w*j*4*v),ne=new Uu(X,w,j,v);ne.type=jr,ne.needsUpdate=!0;let R=b*4;for(let I=0;I<v;I++){let L=A[I],P=E[I],H=q[I],$=w*j*4*I;for(let J=0;J<L.count;J++){let Y=J*R;_===!0&&(o.fromBufferAttribute(L,J),X[$+Y+0]=o.x,X[$+Y+1]=o.y,X[$+Y+2]=o.z,X[$+Y+3]=0),C===!0&&(o.fromBufferAttribute(P,J),X[$+Y+4]=o.x,X[$+Y+5]=o.y,X[$+Y+6]=o.z,X[$+Y+7]=0),D===!0&&(o.fromBufferAttribute(H,J),X[$+Y+8]=o.x,X[$+Y+9]=o.y,X[$+Y+10]=o.z,X[$+Y+11]=H.itemSize===4?o.w:1)}}m={count:v,texture:ne,size:new pt(w,j)},s.set(u,m),u.addEventListener("dispose",U)}let h=0;for(let _=0;_<d.length;_++)h+=d[_];let M=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",M),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{let g=d===void 0?0:d.length,v=i[u.id];if(v===void 0||v.length!==g){v=[];for(let C=0;C<g;C++)v[C]=[C,0];i[u.id]=v}for(let C=0;C<g;C++){let D=v[C];D[0]=C,D[1]=d[C]}v.sort(xO);for(let C=0;C<8;C++)C<g&&v[C][1]?(a[C][0]=v[C][0],a[C][1]=v[C][1]):(a[C][0]=Number.MAX_SAFE_INTEGER,a[C][1]=0);a.sort(bO);let m=u.morphAttributes.position,h=u.morphAttributes.normal,M=0;for(let C=0;C<8;C++){let D=a[C],A=D[0],E=D[1];A!==Number.MAX_SAFE_INTEGER&&E?(m&&u.getAttribute("morphTarget"+C)!==m[A]&&u.setAttribute("morphTarget"+C,m[A]),h&&u.getAttribute("morphNormal"+C)!==h[A]&&u.setAttribute("morphNormal"+C,h[A]),r[C]=E,M+=E):(m&&u.hasAttribute("morphTarget"+C)===!0&&u.deleteAttribute("morphTarget"+C),h&&u.hasAttribute("morphNormal"+C)===!0&&u.deleteAttribute("morphNormal"+C),r[C]=0)}let _=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function CO(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Xu=class extends wa{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Bs,u!==Bs&&u!==ba)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Bs&&(i=Gr),i===void 0&&u===ba&&(i=Hs),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:xn,this.minFilter=c!==void 0?c:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ly=new wa,uy=new Xu(1,1);uy.compareFunction=ry;var fy=new Uu,dy=new L0,hy=new Wu,Pv=[],Lv=[],Ov=new Float32Array(16),zv=new Float32Array(9),Fv=new Float32Array(4);function Aa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Pv[r];if(s===void 0&&(s=new Float32Array(r),Pv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ju(n,e){let t=Lv[e];t===void 0&&(t=new Int32Array(e),Lv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function SO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function EO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function AO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function TO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Zt(t,i))return;Fv.set(i),n.uniformMatrix2fv(this.addr,!1,Fv),Yt(t,i)}}function DO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Zt(t,i))return;zv.set(i),n.uniformMatrix3fv(this.addr,!1,zv),Yt(t,i)}}function IO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Zt(t,i))return;Ov.set(i),n.uniformMatrix4fv(this.addr,!1,Ov),Yt(t,i)}}function RO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function NO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function PO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function LO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function OO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function FO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function kO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function VO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?uy:ly;t.setTexture2D(e||s,r)}function UO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||dy,r)}function HO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||hy,r)}function BO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||fy,r)}function GO(n){switch(n){case 5126:return SO;case 35664:return wO;case 35665:return EO;case 35666:return AO;case 35674:return TO;case 35675:return DO;case 35676:return IO;case 5124:case 35670:return RO;case 35667:case 35671:return NO;case 35668:case 35672:return PO;case 35669:case 35673:return LO;case 5125:return OO;case 36294:return zO;case 36295:return FO;case 36296:return kO;case 35678:case 36198:case 36298:case 36306:case 35682:return VO;case 35679:case 36299:case 36307:return UO;case 35680:case 36300:case 36308:case 36293:return HO;case 36289:case 36303:case 36311:case 36292:return BO}}function jO(n,e){n.uniform1fv(this.addr,e)}function WO(n,e){let t=Aa(e,this.size,2);n.uniform2fv(this.addr,t)}function $O(n,e){let t=Aa(e,this.size,3);n.uniform3fv(this.addr,t)}function qO(n,e){let t=Aa(e,this.size,4);n.uniform4fv(this.addr,t)}function XO(n,e){let t=Aa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ZO(n,e){let t=Aa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function YO(n,e){let t=Aa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KO(n,e){n.uniform1iv(this.addr,e)}function JO(n,e){n.uniform2iv(this.addr,e)}function QO(n,e){n.uniform3iv(this.addr,e)}function ez(n,e){n.uniform4iv(this.addr,e)}function tz(n,e){n.uniform1uiv(this.addr,e)}function nz(n,e){n.uniform2uiv(this.addr,e)}function iz(n,e){n.uniform3uiv(this.addr,e)}function rz(n,e){n.uniform4uiv(this.addr,e)}function sz(n,e,t){let i=this.cache,r=e.length,s=Ju(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ly,s[o])}function oz(n,e,t){let i=this.cache,r=e.length,s=Ju(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||dy,s[o])}function az(n,e,t){let i=this.cache,r=e.length,s=Ju(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||hy,s[o])}function cz(n,e,t){let i=this.cache,r=e.length,s=Ju(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||fy,s[o])}function lz(n){switch(n){case 5126:return jO;case 35664:return WO;case 35665:return $O;case 35666:return qO;case 35674:return XO;case 35675:return ZO;case 35676:return YO;case 5124:case 35670:return KO;case 35667:case 35671:return JO;case 35668:case 35672:return QO;case 35669:case 35673:return ez;case 5125:return tz;case 36294:return nz;case 36295:return iz;case 36296:return rz;case 35678:case 36198:case 36298:case 36306:case 35682:return sz;case 35679:case 36299:case 36307:return oz;case 35680:case 36300:case 36308:case 36293:return az;case 36289:case 36303:case 36311:case 36292:return cz}}var U0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=GO(t.type)}},H0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lz(t.type)}},B0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},C0=/(\w+)(\])?(\[|\.)?/g;function kv(n,e){n.seq.push(e),n.map[e.id]=e}function uz(n,e,t){let i=n.name,r=i.length;for(C0.lastIndex=0;;){let s=C0.exec(i),o=C0.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){kv(t,l===void 0?new U0(a,n,e):new H0(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new B0(a),kv(t,f)),t=f}}}var va=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);uz(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function Vv(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var fz=37297,dz=0;function hz(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function pz(n){let e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(n),i;switch(e===t?i="":e===Ou&&t===Lu?i="LinearDisplayP3ToLinearSRGB":e===Lu&&t===Ou&&(i="LinearSRGBToLinearDisplayP3"),n){case ur:case Ku:return[i,"LinearTransferOETF"];case sn:case a5:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Uv(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+hz(n.getShaderSource(e),o)}else return r}function mz(n,e){let t=pz(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gz(n,e){let t;switch(e){case NR:t="Linear";break;case PR:t="Reinhard";break;case LR:t="OptimizedCineon";break;case OR:t="ACESFilmic";break;case FR:t="AgX";break;case zR:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vz(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ha).join(`
`)}function yz(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ha).join(`
`)}function _z(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bz(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ha(n){return n!==""}function Hv(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xz=/^[ \t]*#include +<([\w\d./]+)>/gm;function G0(n){return n.replace(xz,Cz)}var Mz=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Cz(n,e){let t=$e[e];if(t===void 0){let i=Mz.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return G0(t)}var Sz=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gv(n){return n.replace(Sz,wz)}function wz(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jv(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ez(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===oR?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===sr&&(e="SHADOWMAP_TYPE_VSM"),e}function Az(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ya:case _a:e="ENVMAP_TYPE_CUBE";break;case Yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tz(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _a:e="ENVMAP_MODE_REFRACTION";break}return e}function Dz(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zv:e="ENVMAP_BLENDING_MULTIPLY";break;case IR:e="ENVMAP_BLENDING_MIX";break;case RR:e="ENVMAP_BLENDING_ADD";break}return e}function Iz(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Rz(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Ez(t),l=Az(t),u=Tz(t),f=Dz(t),d=Iz(t),p=t.isWebGL2?"":vz(t),g=yz(t),v=_z(s),m=r.createProgram(),h,M,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ha).join(`
`),h.length>0&&(h+=`
`),M=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ha).join(`
`),M.length>0&&(M+=`
`)):(h=[jv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),M=[p,jv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$r?"#define TONE_MAPPING":"",t.toneMapping!==$r?$e.tonemapping_pars_fragment:"",t.toneMapping!==$r?gz("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,mz("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ha).join(`
`)),o=G0(o),o=Hv(o,t),o=Bv(o,t),a=G0(a),a=Hv(a,t),a=Bv(a,t),o=Gv(o),a=Gv(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let C=_+h+o,D=_+M+a,A=Vv(r,r.VERTEX_SHADER,C),E=Vv(r,r.FRAGMENT_SHADER,D);r.attachShader(m,A),r.attachShader(m,E),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function q(X){if(n.debug.checkShaderErrors){let ne=r.getProgramInfoLog(m).trim(),R=r.getShaderInfoLog(A).trim(),U=r.getShaderInfoLog(E).trim(),I=!0,L=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(I=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,A,E);else{let P=Uv(r,A,"vertex"),H=Uv(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+P+`
`+H)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(R===""||U==="")&&(L=!1);L&&(X.diagnostics={runnable:I,programLog:ne,vertexShader:{log:R,prefix:h},fragmentShader:{log:U,prefix:M}})}r.deleteShader(A),r.deleteShader(E),b=new va(r,m),w=bz(r,m)}let b;this.getUniforms=function(){return b===void 0&&q(this),b};let w;this.getAttributes=function(){return w===void 0&&q(this),w};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=r.getProgramParameter(m,fz)),j},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dz++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=E,this}var Nz=0,j0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new W0(e),t.set(e,i)),i}},W0=class{constructor(e){this.id=Nz++,this.code=e,this.usedTimes=0}};function Pz(n,e,t,i,r,s,o){let a=new Hu,c=new j0,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function m(b,w,j,X,ne){let R=X.fog,U=ne.geometry,I=b.isMeshStandardMaterial?X.environment:null,L=(b.isMeshStandardMaterial?t:e).get(b.envMap||I),P=L&&L.mapping===Yu?L.image.height:null,H=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let $=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,J=$!==void 0?$.length:0,Y=0;U.morphAttributes.position!==void 0&&(Y=1),U.morphAttributes.normal!==void 0&&(Y=2),U.morphAttributes.color!==void 0&&(Y=3);let G,W,ce,be;if(H){let hn=Pi[H];G=hn.vertexShader,W=hn.fragmentShader}else G=b.vertexShader,W=b.fragmentShader,c.update(b),ce=c.getVertexShaderID(b),be=c.getFragmentShaderID(b);let le=n.getRenderTarget(),De=ne.isInstancedMesh===!0,Ce=ne.isBatchedMesh===!0,Ee=!!b.map,nt=!!b.matcap,O=!!L,dn=!!b.aoMap,Ie=!!b.lightMap,Ve=!!b.bumpMap,_e=!!b.normalMap,Et=!!b.displacementMap,qe=!!b.emissiveMap,S=!!b.metalnessMap,y=!!b.roughnessMap,F=b.anisotropy>0,ee=b.clearcoat>0,K=b.iridescence>0,te=b.sheen>0,xe=b.transmission>0,ue=F&&!!b.anisotropyMap,me=ee&&!!b.clearcoatMap,Pe=ee&&!!b.clearcoatNormalMap,Xe=ee&&!!b.clearcoatRoughnessMap,Z=K&&!!b.iridescenceMap,dt=K&&!!b.iridescenceThicknessMap,it=te&&!!b.sheenColorMap,Fe=te&&!!b.sheenRoughnessMap,Ae=!!b.specularMap,ge=!!b.specularColorMap,Ge=!!b.specularIntensityMap,ft=xe&&!!b.transmissionMap,Rt=xe&&!!b.thicknessMap,Ke=!!b.gradientMap,ie=!!b.alphaMap,T=b.alphaTest>0,oe=!!b.alphaHash,ae=!!b.extensions,Le=!!U.attributes.uv1,Re=!!U.attributes.uv2,vt=!!U.attributes.uv3,yt=$r;return b.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(yt=n.toneMapping),{isWebGL2:u,shaderID:H,shaderType:b.type,shaderName:b.name,vertexShader:G,fragmentShader:W,defines:b.defines,customVertexShaderID:ce,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ce,instancing:De,instancingColor:De&&ne.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ur,map:Ee,matcap:nt,envMap:O,envMapMode:O&&L.mapping,envMapCubeUVHeight:P,aoMap:dn,lightMap:Ie,bumpMap:Ve,normalMap:_e,displacementMap:d&&Et,emissiveMap:qe,normalMapObjectSpace:_e&&b.normalMapType===YR,normalMapTangentSpace:_e&&b.normalMapType===ZR,metalnessMap:S,roughnessMap:y,anisotropy:F,anisotropyMap:ue,clearcoat:ee,clearcoatMap:me,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Xe,iridescence:K,iridescenceMap:Z,iridescenceThicknessMap:dt,sheen:te,sheenColorMap:it,sheenRoughnessMap:Fe,specularMap:Ae,specularColorMap:ge,specularIntensityMap:Ge,transmission:xe,transmissionMap:ft,thicknessMap:Rt,gradientMap:Ke,opaque:b.transparent===!1&&b.blending===ma,alphaMap:ie,alphaTest:T,alphaHash:oe,combine:b.combine,mapUv:Ee&&v(b.map.channel),aoMapUv:dn&&v(b.aoMap.channel),lightMapUv:Ie&&v(b.lightMap.channel),bumpMapUv:Ve&&v(b.bumpMap.channel),normalMapUv:_e&&v(b.normalMap.channel),displacementMapUv:Et&&v(b.displacementMap.channel),emissiveMapUv:qe&&v(b.emissiveMap.channel),metalnessMapUv:S&&v(b.metalnessMap.channel),roughnessMapUv:y&&v(b.roughnessMap.channel),anisotropyMapUv:ue&&v(b.anisotropyMap.channel),clearcoatMapUv:me&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:it&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(b.sheenRoughnessMap.channel),specularMapUv:Ae&&v(b.specularMap.channel),specularColorMapUv:ge&&v(b.specularColorMap.channel),specularIntensityMapUv:Ge&&v(b.specularIntensityMap.channel),transmissionMapUv:ft&&v(b.transmissionMap.channel),thicknessMapUv:Rt&&v(b.thicknessMap.channel),alphaMapUv:ie&&v(b.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(_e||F),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:Re,vertexUv3s:vt,pointsUvs:ne.isPoints===!0&&!!U.attributes.uv&&(Ee||ie),fog:!!R,useFog:b.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ne.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Y,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&j.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ee&&b.map.isVideoTexture===!0&&ht.getTransfer(b.map.colorSpace)===St,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ar,flipSided:b.side===In,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ae&&b.extensions.derivatives===!0,extensionFragDepth:ae&&b.extensions.fragDepth===!0,extensionDrawBuffers:ae&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function h(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let j in b.defines)w.push(j),w.push(b.defines[j]);return b.isRawShaderMaterial===!1&&(M(w,b),_(w,b),w.push(n.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function M(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function _(b,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function C(b){let w=g[b.type],j;if(w){let X=Pi[w];j=MN.clone(X.uniforms)}else j=b.uniforms;return j}function D(b,w){let j;for(let X=0,ne=l.length;X<ne;X++){let R=l[X];if(R.cacheKey===w){j=R,++j.usedTimes;break}}return j===void 0&&(j=new Rz(n,w,b,s),l.push(j)),j}function A(b){if(--b.usedTimes===0){let w=l.indexOf(b);l[w]=l[l.length-1],l.pop(),b.destroy()}}function E(b){c.remove(b)}function q(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:C,acquireProgram:D,releaseProgram:A,releaseShaderCache:E,programs:l,dispose:q}}function Lz(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Oz(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Wv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $v(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,g,v,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function a(f,d,p,g,v,m){let h=o(f,d,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function c(f,d,p,g,v,m){let h=o(f,d,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function l(f,d){t.length>1&&t.sort(f||Oz),i.length>1&&i.sort(d||Wv),r.length>1&&r.sort(d||Wv)}function u(){for(let f=e,d=n.length;f<d;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function zz(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new $v,n.set(i,[o])):r>=s.length?(o=new $v,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Fz(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new ut};break;case"SpotLight":t={position:new V,direction:new V,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function kz(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Vz=0;function Uz(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Hz(n,e){let t=new Fz,i=kz(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new V);let s=new V,o=new fn,a=new fn;function c(u,f){let d=0,p=0,g=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let v=0,m=0,h=0,M=0,_=0,C=0,D=0,A=0,E=0,q=0,b=0;u.sort(Uz);let w=f===!0?Math.PI:1;for(let X=0,ne=u.length;X<ne;X++){let R=u[X],U=R.color,I=R.intensity,L=R.distance,P=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=U.r*I*w,p+=U.g*I*w,g+=U.b*I*w;else if(R.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(R.sh.coefficients[H],I);b++}else if(R.isDirectionalLight){let H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity*w),R.castShadow){let $=R.shadow,J=i.get(R);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,r.directionalShadow[v]=J,r.directionalShadowMap[v]=P,r.directionalShadowMatrix[v]=R.shadow.matrix,C++}r.directional[v]=H,v++}else if(R.isSpotLight){let H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(U).multiplyScalar(I*w),H.distance=L,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,r.spot[h]=H;let $=R.shadow;if(R.map&&(r.spotLightMap[E]=R.map,E++,$.updateMatrices(R),R.castShadow&&q++),r.spotLightMatrix[h]=$.matrix,R.castShadow){let J=i.get(R);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,r.spotShadow[h]=J,r.spotShadowMap[h]=P,A++}h++}else if(R.isRectAreaLight){let H=t.get(R);H.color.copy(U).multiplyScalar(I),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),r.rectArea[M]=H,M++}else if(R.isPointLight){let H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity*w),H.distance=R.distance,H.decay=R.decay,R.castShadow){let $=R.shadow,J=i.get(R);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,J.shadowCameraNear=$.camera.near,J.shadowCameraFar=$.camera.far,r.pointShadow[m]=J,r.pointShadowMap[m]=P,r.pointShadowMatrix[m]=R.shadow.matrix,D++}r.point[m]=H,m++}else if(R.isHemisphereLight){let H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(I*w),H.groundColor.copy(R.groundColor).multiplyScalar(I*w),r.hemi[_]=H,_++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;let j=r.hash;(j.directionalLength!==v||j.pointLength!==m||j.spotLength!==h||j.rectAreaLength!==M||j.hemiLength!==_||j.numDirectionalShadows!==C||j.numPointShadows!==D||j.numSpotShadows!==A||j.numSpotMaps!==E||j.numLightProbes!==b)&&(r.directional.length=v,r.spot.length=h,r.rectArea.length=M,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=A+E-q,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=q,r.numLightProbes=b,j.directionalLength=v,j.pointLength=m,j.spotLength=h,j.rectAreaLength=M,j.hemiLength=_,j.numDirectionalShadows=C,j.numPointShadows=D,j.numSpotShadows=A,j.numSpotMaps=E,j.numLightProbes=b,r.version=Vz++)}function l(u,f){let d=0,p=0,g=0,v=0,m=0,h=f.matrixWorldInverse;for(let M=0,_=u.length;M<_;M++){let C=u[M];if(C.isDirectionalLight){let D=r.directional[d];D.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(h),d++}else if(C.isSpotLight){let D=r.spot[g];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(h),D.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(h),g++}else if(C.isRectAreaLight){let D=r.rectArea[v];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(h),a.identity(),o.copy(C.matrixWorld),o.premultiply(h),a.extractRotation(o),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),v++}else if(C.isPointLight){let D=r.point[p];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(h),p++}else if(C.isHemisphereLight){let D=r.hemi[m];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(h),m++}}}return{setup:c,setupView:l,state:r}}function qv(n,e){let t=new Hz(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function c(f){t.setup(i,f)}function l(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Bz(n,e){let t=new WeakMap;function i(s,o=0){let a=t.get(s),c;return a===void 0?(c=new qv(n,e),t.set(s,[c])):o>=a.length?(c=new qv(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}var $0=class extends xa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},q0=class extends xa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Gz=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jz=`uniform sampler2D shadow_pass;
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
}`;function Wz(n,e,t){let i=new $u,r=new pt,s=new pt,o=new on,a=new $0({depthPacking:XR}),c=new q0,l={},u=t.maxTextureSize,f={[Xr]:In,[In]:Xr,[ar]:ar},d=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Gz,fragmentShader:jz}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ws;g.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Qn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xv;let h=this.type;this.render=function(A,E,q){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let b=n.getRenderTarget(),w=n.getActiveCubeFace(),j=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Wr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let ne=h!==sr&&this.type===sr,R=h===sr&&this.type!==sr;for(let U=0,I=A.length;U<I;U++){let L=A[U],P=L.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);let H=P.getFrameExtents();if(r.multiply(H),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,P.mapSize.y=s.y)),P.map===null||ne===!0||R===!0){let J=this.type!==sr?{minFilter:xn,magFilter:xn}:{};P.map!==null&&P.map.dispose(),P.map=new fr(r.x,r.y,J),P.map.texture.name=L.name+".shadowMap",P.camera.updateProjectionMatrix()}n.setRenderTarget(P.map),n.clear();let $=P.getViewportCount();for(let J=0;J<$;J++){let Y=P.getViewport(J);o.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),X.viewport(o),P.updateMatrices(L,J),i=P.getFrustum(),C(E,q,P.camera,L,this.type)}P.isPointLightShadow!==!0&&this.type===sr&&M(P,q),P.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(b,w,j)};function M(A,E){let q=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new fr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(E,null,q,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(E,null,q,p,v,null)}function _(A,E,q,b){let w=null,j=q.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(j!==void 0)w=j;else if(w=q.isPointLight===!0?c:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let X=w.uuid,ne=E.uuid,R=l[X];R===void 0&&(R={},l[X]=R);let U=R[ne];U===void 0&&(U=w.clone(),R[ne]=U,E.addEventListener("dispose",D)),w=U}if(w.visible=E.visible,w.wireframe=E.wireframe,b===sr?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:f[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let X=n.properties.get(w);X.light=q}return w}function C(A,E,q,b,w){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===sr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld);let ne=e.update(A),R=A.material;if(Array.isArray(R)){let U=ne.groups;for(let I=0,L=U.length;I<L;I++){let P=U[I],H=R[P.materialIndex];if(H&&H.visible){let $=_(A,H,b,w);A.onBeforeShadow(n,A,E,q,ne,$,P),n.renderBufferDirect(q,null,ne,$,A,P),A.onAfterShadow(n,A,E,q,ne,$,P)}}}else if(R.visible){let U=_(A,R,b,w);A.onBeforeShadow(n,A,E,q,ne,U,null),n.renderBufferDirect(q,null,ne,U,A,null),A.onAfterShadow(n,A,E,q,ne,U,null)}}let X=A.children;for(let ne=0,R=X.length;ne<R;ne++)C(X[ne],E,q,b,w)}function D(A){A.target.removeEventListener("dispose",D);for(let q in l){let b=l[q],w=A.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function $z(n,e,t){let i=t.isWebGL2;function r(){let T=!1,oe=new on,ae=null,Le=new on(0,0,0,0);return{setMask:function(Re){ae!==Re&&!T&&(n.colorMask(Re,Re,Re,Re),ae=Re)},setLocked:function(Re){T=Re},setClear:function(Re,vt,yt,Kt,hn){hn===!0&&(Re*=Kt,vt*=Kt,yt*=Kt),oe.set(Re,vt,yt,Kt),Le.equals(oe)===!1&&(n.clearColor(Re,vt,yt,Kt),Le.copy(oe))},reset:function(){T=!1,ae=null,Le.set(-1,0,0,0)}}}function s(){let T=!1,oe=null,ae=null,Le=null;return{setTest:function(Re){Re?Ce(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(Re){oe!==Re&&!T&&(n.depthMask(Re),oe=Re)},setFunc:function(Re){if(ae!==Re){switch(Re){case CR:n.depthFunc(n.NEVER);break;case SR:n.depthFunc(n.ALWAYS);break;case wR:n.depthFunc(n.LESS);break;case Iu:n.depthFunc(n.LEQUAL);break;case ER:n.depthFunc(n.EQUAL);break;case AR:n.depthFunc(n.GEQUAL);break;case TR:n.depthFunc(n.GREATER);break;case DR:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=Re}},setLocked:function(Re){T=Re},setClear:function(Re){Le!==Re&&(n.clearDepth(Re),Le=Re)},reset:function(){T=!1,oe=null,ae=null,Le=null}}}function o(){let T=!1,oe=null,ae=null,Le=null,Re=null,vt=null,yt=null,Kt=null,hn=null;return{setTest:function(_t){T||(_t?Ce(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(_t){oe!==_t&&!T&&(n.stencilMask(_t),oe=_t)},setFunc:function(_t,pn,_i){(ae!==_t||Le!==pn||Re!==_i)&&(n.stencilFunc(_t,pn,_i),ae=_t,Le=pn,Re=_i)},setOp:function(_t,pn,_i){(vt!==_t||yt!==pn||Kt!==_i)&&(n.stencilOp(_t,pn,_i),vt=_t,yt=pn,Kt=_i)},setLocked:function(_t){T=_t},setClear:function(_t){hn!==_t&&(n.clearStencil(_t),hn=_t)},reset:function(){T=!1,oe=null,ae=null,Le=null,Re=null,vt=null,yt=null,Kt=null,hn=null}}}let a=new r,c=new s,l=new o,u=new WeakMap,f=new WeakMap,d={},p={},g=new WeakMap,v=[],m=null,h=!1,M=null,_=null,C=null,D=null,A=null,E=null,q=null,b=new ut(0,0,0),w=0,j=!1,X=null,ne=null,R=null,U=null,I=null,L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,H=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),P=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),P=H>=2);let J=null,Y={},G=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),ce=new on().fromArray(G),be=new on().fromArray(W);function le(T,oe,ae,Le){let Re=new Uint8Array(4),vt=n.createTexture();n.bindTexture(T,vt),n.texParameteri(T,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(T,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let yt=0;yt<ae;yt++)i&&(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)?n.texImage3D(oe,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(oe+yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return vt}let De={};De[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ce(n.DEPTH_TEST),c.setFunc(Iu),qe(!1),S(wg),Ce(n.CULL_FACE),_e(Wr);function Ce(T){d[T]!==!0&&(n.enable(T),d[T]=!0)}function Ee(T){d[T]!==!1&&(n.disable(T),d[T]=!1)}function nt(T,oe){return p[T]!==oe?(n.bindFramebuffer(T,oe),p[T]=oe,i&&(T===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=oe),T===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=oe)),!0):!1}function O(T,oe){let ae=v,Le=!1;if(T)if(ae=g.get(oe),ae===void 0&&(ae=[],g.set(oe,ae)),T.isWebGLMultipleRenderTargets){let Re=T.texture;if(ae.length!==Re.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let vt=0,yt=Re.length;vt<yt;vt++)ae[vt]=n.COLOR_ATTACHMENT0+vt;ae.length=Re.length,Le=!0}}else ae[0]!==n.COLOR_ATTACHMENT0&&(ae[0]=n.COLOR_ATTACHMENT0,Le=!0);else ae[0]!==n.BACK&&(ae[0]=n.BACK,Le=!0);Le&&(t.isWebGL2?n.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function dn(T){return m!==T?(n.useProgram(T),m=T,!0):!1}let Ie={[Vs]:n.FUNC_ADD,[cR]:n.FUNC_SUBTRACT,[lR]:n.FUNC_REVERSE_SUBTRACT};if(i)Ie[Dg]=n.MIN,Ie[Ig]=n.MAX;else{let T=e.get("EXT_blend_minmax");T!==null&&(Ie[Dg]=T.MIN_EXT,Ie[Ig]=T.MAX_EXT)}let Ve={[uR]:n.ZERO,[fR]:n.ONE,[dR]:n.SRC_COLOR,[S0]:n.SRC_ALPHA,[yR]:n.SRC_ALPHA_SATURATE,[gR]:n.DST_COLOR,[pR]:n.DST_ALPHA,[hR]:n.ONE_MINUS_SRC_COLOR,[w0]:n.ONE_MINUS_SRC_ALPHA,[vR]:n.ONE_MINUS_DST_COLOR,[mR]:n.ONE_MINUS_DST_ALPHA,[_R]:n.CONSTANT_COLOR,[bR]:n.ONE_MINUS_CONSTANT_COLOR,[xR]:n.CONSTANT_ALPHA,[MR]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(T,oe,ae,Le,Re,vt,yt,Kt,hn,_t){if(T===Wr){h===!0&&(Ee(n.BLEND),h=!1);return}if(h===!1&&(Ce(n.BLEND),h=!0),T!==aR){if(T!==M||_t!==j){if((_!==Vs||A!==Vs)&&(n.blendEquation(n.FUNC_ADD),_=Vs,A=Vs),_t)switch(T){case ma:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eg:n.blendFunc(n.ONE,n.ONE);break;case Ag:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tg:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case ma:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eg:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ag:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tg:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}C=null,D=null,E=null,q=null,b.set(0,0,0),w=0,M=T,j=_t}return}Re=Re||oe,vt=vt||ae,yt=yt||Le,(oe!==_||Re!==A)&&(n.blendEquationSeparate(Ie[oe],Ie[Re]),_=oe,A=Re),(ae!==C||Le!==D||vt!==E||yt!==q)&&(n.blendFuncSeparate(Ve[ae],Ve[Le],Ve[vt],Ve[yt]),C=ae,D=Le,E=vt,q=yt),(Kt.equals(b)===!1||hn!==w)&&(n.blendColor(Kt.r,Kt.g,Kt.b,hn),b.copy(Kt),w=hn),M=T,j=!1}function Et(T,oe){T.side===ar?Ee(n.CULL_FACE):Ce(n.CULL_FACE);let ae=T.side===In;oe&&(ae=!ae),qe(ae),T.blending===ma&&T.transparent===!1?_e(Wr):_e(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),c.setFunc(T.depthFunc),c.setTest(T.depthTest),c.setMask(T.depthWrite),a.setMask(T.colorWrite);let Le=T.stencilWrite;l.setTest(Le),Le&&(l.setMask(T.stencilWriteMask),l.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),l.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),F(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Ce(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function qe(T){X!==T&&(T?n.frontFace(n.CW):n.frontFace(n.CCW),X=T)}function S(T){T!==rR?(Ce(n.CULL_FACE),T!==ne&&(T===wg?n.cullFace(n.BACK):T===sR?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),ne=T}function y(T){T!==R&&(P&&n.lineWidth(T),R=T)}function F(T,oe,ae){T?(Ce(n.POLYGON_OFFSET_FILL),(U!==oe||I!==ae)&&(n.polygonOffset(oe,ae),U=oe,I=ae)):Ee(n.POLYGON_OFFSET_FILL)}function ee(T){T?Ce(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function K(T){T===void 0&&(T=n.TEXTURE0+L-1),J!==T&&(n.activeTexture(T),J=T)}function te(T,oe,ae){ae===void 0&&(J===null?ae=n.TEXTURE0+L-1:ae=J);let Le=Y[ae];Le===void 0&&(Le={type:void 0,texture:void 0},Y[ae]=Le),(Le.type!==T||Le.texture!==oe)&&(J!==ae&&(n.activeTexture(ae),J=ae),n.bindTexture(T,oe||De[T]),Le.type=T,Le.texture=oe)}function xe(){let T=Y[J];T!==void 0&&T.type!==void 0&&(n.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function ue(){try{n.compressedTexImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Pe(){try{n.texSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Xe(){try{n.texSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function dt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function it(){try{n.texStorage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Fe(){try{n.texStorage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ge(){try{n.texImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ge(T){ce.equals(T)===!1&&(n.scissor(T.x,T.y,T.z,T.w),ce.copy(T))}function ft(T){be.equals(T)===!1&&(n.viewport(T.x,T.y,T.z,T.w),be.copy(T))}function Rt(T,oe){let ae=f.get(oe);ae===void 0&&(ae=new WeakMap,f.set(oe,ae));let Le=ae.get(T);Le===void 0&&(Le=n.getUniformBlockIndex(oe,T.name),ae.set(T,Le))}function Ke(T,oe){let Le=f.get(oe).get(T);u.get(oe)!==Le&&(n.uniformBlockBinding(oe,Le,T.__bindingPointIndex),u.set(oe,Le))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},J=null,Y={},p={},g=new WeakMap,v=[],m=null,h=!1,M=null,_=null,C=null,D=null,A=null,E=null,q=null,b=new ut(0,0,0),w=0,j=!1,X=null,ne=null,R=null,U=null,I=null,ce.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ce,disable:Ee,bindFramebuffer:nt,drawBuffers:O,useProgram:dn,setBlending:_e,setMaterial:Et,setFlipSided:qe,setCullFace:S,setLineWidth:y,setPolygonOffset:F,setScissorTest:ee,activeTexture:K,bindTexture:te,unbindTexture:xe,compressedTexImage2D:ue,compressedTexImage3D:me,texImage2D:Ae,texImage3D:ge,updateUBOMapping:Rt,uniformBlockBinding:Ke,texStorage2D:it,texStorage3D:Fe,texSubImage2D:Pe,texSubImage3D:Xe,compressedTexSubImage2D:Z,compressedTexSubImage3D:dt,scissor:Ge,viewport:ft,reset:ie}}function qz(n,e,t,i,r,s,o){let a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return p?new OffscreenCanvas(S,y):Fu("canvas")}function v(S,y,F,ee){let K=1;if((S.width>ee||S.height>ee)&&(K=ee/Math.max(S.width,S.height)),K<1||y===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let te=y?N0:Math.floor,xe=te(K*S.width),ue=te(K*S.height);f===void 0&&(f=g(xe,ue));let me=F?g(xe,ue):f;return me.width=xe,me.height=ue,me.getContext("2d").drawImage(S,0,0,xe,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+xe+"x"+ue+")."),me}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return uv(S.width)&&uv(S.height)}function h(S){return a?!1:S.wrapS!==gi||S.wrapT!==gi||S.minFilter!==xn&&S.minFilter!==Kn}function M(S,y){return S.generateMipmaps&&y&&S.minFilter!==xn&&S.minFilter!==Kn}function _(S){n.generateMipmap(S)}function C(S,y,F,ee,K=!1){if(a===!1)return y;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let te=y;if(y===n.RED&&(F===n.FLOAT&&(te=n.R32F),F===n.HALF_FLOAT&&(te=n.R16F),F===n.UNSIGNED_BYTE&&(te=n.R8)),y===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(te=n.R8UI),F===n.UNSIGNED_SHORT&&(te=n.R16UI),F===n.UNSIGNED_INT&&(te=n.R32UI),F===n.BYTE&&(te=n.R8I),F===n.SHORT&&(te=n.R16I),F===n.INT&&(te=n.R32I)),y===n.RG&&(F===n.FLOAT&&(te=n.RG32F),F===n.HALF_FLOAT&&(te=n.RG16F),F===n.UNSIGNED_BYTE&&(te=n.RG8)),y===n.RGBA){let xe=K?Pu:ht.getTransfer(ee);F===n.FLOAT&&(te=n.RGBA32F),F===n.HALF_FLOAT&&(te=n.RGBA16F),F===n.UNSIGNED_BYTE&&(te=xe===St?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function D(S,y,F){return M(S,F)===!0||S.isFramebufferTexture&&S.minFilter!==xn&&S.minFilter!==Kn?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function A(S){return S===xn||S===Ng||S===qh?n.NEAREST:n.LINEAR}function E(S){let y=S.target;y.removeEventListener("dispose",E),b(y),y.isVideoTexture&&u.delete(y)}function q(S){let y=S.target;y.removeEventListener("dispose",q),j(y)}function b(S){let y=i.get(S);if(y.__webglInit===void 0)return;let F=S.source,ee=d.get(F);if(ee){let K=ee[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(S),Object.keys(ee).length===0&&d.delete(F)}i.remove(S)}function w(S){let y=i.get(S);n.deleteTexture(y.__webglTexture);let F=S.source,ee=d.get(F);delete ee[y.__cacheKey],o.memory.textures--}function j(S){let y=S.texture,F=i.get(S),ee=i.get(y);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(F.__webglFramebuffer[K]))for(let te=0;te<F.__webglFramebuffer[K].length;te++)n.deleteFramebuffer(F.__webglFramebuffer[K][te]);else n.deleteFramebuffer(F.__webglFramebuffer[K]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[K])}else{if(Array.isArray(F.__webglFramebuffer))for(let K=0;K<F.__webglFramebuffer.length;K++)n.deleteFramebuffer(F.__webglFramebuffer[K]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let K=0;K<F.__webglColorRenderbuffer.length;K++)F.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[K]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let K=0,te=y.length;K<te;K++){let xe=i.get(y[K]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(y[K])}i.remove(y),i.remove(S)}let X=0;function ne(){X=0}function R(){let S=X;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),X+=1,S}function U(S){let y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function I(S,y){let F=i.get(S);if(S.isVideoTexture&&Et(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){let ee=S.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(F,S,y);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+y)}function L(S,y){let F=i.get(S);if(S.version>0&&F.__version!==S.version){ce(F,S,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+y)}function P(S,y){let F=i.get(S);if(S.version>0&&F.__version!==S.version){ce(F,S,y);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+y)}function H(S,y){let F=i.get(S);if(S.version>0&&F.__version!==S.version){be(F,S,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+y)}let $={[T0]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[D0]:n.MIRRORED_REPEAT},J={[xn]:n.NEAREST,[Ng]:n.NEAREST_MIPMAP_NEAREST,[qh]:n.NEAREST_MIPMAP_LINEAR,[Kn]:n.LINEAR,[kR]:n.LINEAR_MIPMAP_NEAREST,[ac]:n.LINEAR_MIPMAP_LINEAR},Y={[KR]:n.NEVER,[iN]:n.ALWAYS,[JR]:n.LESS,[ry]:n.LEQUAL,[QR]:n.EQUAL,[nN]:n.GEQUAL,[eN]:n.GREATER,[tN]:n.NOTEQUAL};function G(S,y,F){if(F?(n.texParameteri(S,n.TEXTURE_WRAP_S,$[y.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,$[y.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,$[y.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,J[y.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,J[y.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==gi||y.wrapT!==gi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,A(y.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,A(y.minFilter)),y.minFilter!==xn&&y.minFilter!==Kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Y[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ee=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===xn||y.minFilter!==qh&&y.minFilter!==ac||y.type===jr&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===cc&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(S,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function W(S,y){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",E));let ee=y.source,K=d.get(ee);K===void 0&&(K={},d.set(ee,K));let te=U(y);if(te!==S.__cacheKey){K[te]===void 0&&(K[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),K[te].usedTimes++;let xe=K[S.__cacheKey];xe!==void 0&&(K[S.__cacheKey].usedTimes--,xe.usedTimes===0&&w(y)),S.__cacheKey=te,S.__webglTexture=K[te].texture}return F}function ce(S,y,F){let ee=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ee=n.TEXTURE_3D);let K=W(S,y),te=y.source;t.bindTexture(ee,S.__webglTexture,n.TEXTURE0+F);let xe=i.get(te);if(te.version!==xe.__version||K===!0){t.activeTexture(n.TEXTURE0+F);let ue=ht.getPrimaries(ht.workingColorSpace),me=y.colorSpace===Jn?null:ht.getPrimaries(y.colorSpace),Pe=y.colorSpace===Jn||ue===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Xe=h(y)&&m(y.image)===!1,Z=v(y.image,Xe,!1,r.maxTextureSize);Z=qe(y,Z);let dt=m(Z)||a,it=s.convert(y.format,y.colorSpace),Fe=s.convert(y.type),Ae=C(y.internalFormat,it,Fe,y.colorSpace,y.isVideoTexture);G(ee,y,dt);let ge,Ge=y.mipmaps,ft=a&&y.isVideoTexture!==!0&&Ae!==ny,Rt=xe.__version===void 0||K===!0,Ke=D(y,Z,dt);if(y.isDepthTexture)Ae=n.DEPTH_COMPONENT,a?y.type===jr?Ae=n.DEPTH_COMPONENT32F:y.type===Gr?Ae=n.DEPTH_COMPONENT24:y.type===Hs?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:y.type===jr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Bs&&Ae===n.DEPTH_COMPONENT&&y.type!==o5&&y.type!==Gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Gr,Fe=s.convert(y.type)),y.format===ba&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,y.type!==Hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Hs,Fe=s.convert(y.type))),Rt&&(ft?t.texStorage2D(n.TEXTURE_2D,1,Ae,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,Ae,Z.width,Z.height,0,it,Fe,null));else if(y.isDataTexture)if(Ge.length>0&&dt){ft&&Rt&&t.texStorage2D(n.TEXTURE_2D,Ke,Ae,Ge[0].width,Ge[0].height);for(let ie=0,T=Ge.length;ie<T;ie++)ge=Ge[ie],ft?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ge.width,ge.height,it,Fe,ge.data):t.texImage2D(n.TEXTURE_2D,ie,Ae,ge.width,ge.height,0,it,Fe,ge.data);y.generateMipmaps=!1}else ft?(Rt&&t.texStorage2D(n.TEXTURE_2D,Ke,Ae,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,it,Fe,Z.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,Z.width,Z.height,0,it,Fe,Z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ft&&Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ke,Ae,Ge[0].width,Ge[0].height,Z.depth);for(let ie=0,T=Ge.length;ie<T;ie++)ge=Ge[ie],y.format!==vi?it!==null?ft?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ge.width,ge.height,Z.depth,it,ge.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Ae,ge.width,ge.height,Z.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ge.width,ge.height,Z.depth,it,Fe,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Ae,ge.width,ge.height,Z.depth,0,it,Fe,ge.data)}else{ft&&Rt&&t.texStorage2D(n.TEXTURE_2D,Ke,Ae,Ge[0].width,Ge[0].height);for(let ie=0,T=Ge.length;ie<T;ie++)ge=Ge[ie],y.format!==vi?it!==null?ft?t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,ge.width,ge.height,it,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Ae,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ge.width,ge.height,it,Fe,ge.data):t.texImage2D(n.TEXTURE_2D,ie,Ae,ge.width,ge.height,0,it,Fe,ge.data)}else if(y.isDataArrayTexture)ft?(Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ke,Ae,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,it,Fe,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,Z.width,Z.height,Z.depth,0,it,Fe,Z.data);else if(y.isData3DTexture)ft?(Rt&&t.texStorage3D(n.TEXTURE_3D,Ke,Ae,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,it,Fe,Z.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,Z.width,Z.height,Z.depth,0,it,Fe,Z.data);else if(y.isFramebufferTexture){if(Rt)if(ft)t.texStorage2D(n.TEXTURE_2D,Ke,Ae,Z.width,Z.height);else{let ie=Z.width,T=Z.height;for(let oe=0;oe<Ke;oe++)t.texImage2D(n.TEXTURE_2D,oe,Ae,ie,T,0,it,Fe,null),ie>>=1,T>>=1}}else if(Ge.length>0&&dt){ft&&Rt&&t.texStorage2D(n.TEXTURE_2D,Ke,Ae,Ge[0].width,Ge[0].height);for(let ie=0,T=Ge.length;ie<T;ie++)ge=Ge[ie],ft?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,it,Fe,ge):t.texImage2D(n.TEXTURE_2D,ie,Ae,it,Fe,ge);y.generateMipmaps=!1}else ft?(Rt&&t.texStorage2D(n.TEXTURE_2D,Ke,Ae,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,it,Fe,Z)):t.texImage2D(n.TEXTURE_2D,0,Ae,it,Fe,Z);M(y,dt)&&_(ee),xe.__version=te.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function be(S,y,F){if(y.image.length!==6)return;let ee=W(S,y),K=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+F);let te=i.get(K);if(K.version!==te.__version||ee===!0){t.activeTexture(n.TEXTURE0+F);let xe=ht.getPrimaries(ht.workingColorSpace),ue=y.colorSpace===Jn?null:ht.getPrimaries(y.colorSpace),me=y.colorSpace===Jn||xe===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Pe=y.isCompressedTexture||y.image[0].isCompressedTexture,Xe=y.image[0]&&y.image[0].isDataTexture,Z=[];for(let ie=0;ie<6;ie++)!Pe&&!Xe?Z[ie]=v(y.image[ie],!1,!0,r.maxCubemapSize):Z[ie]=Xe?y.image[ie].image:y.image[ie],Z[ie]=qe(y,Z[ie]);let dt=Z[0],it=m(dt)||a,Fe=s.convert(y.format,y.colorSpace),Ae=s.convert(y.type),ge=C(y.internalFormat,Fe,Ae,y.colorSpace),Ge=a&&y.isVideoTexture!==!0,ft=te.__version===void 0||ee===!0,Rt=D(y,dt,it);G(n.TEXTURE_CUBE_MAP,y,it);let Ke;if(Pe){Ge&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,ge,dt.width,dt.height);for(let ie=0;ie<6;ie++){Ke=Z[ie].mipmaps;for(let T=0;T<Ke.length;T++){let oe=Ke[T];y.format!==vi?Fe!==null?Ge?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,T,0,0,oe.width,oe.height,Fe,oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,T,ge,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,T,0,0,oe.width,oe.height,Fe,Ae,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,T,ge,oe.width,oe.height,0,Fe,Ae,oe.data)}}}else{Ke=y.mipmaps,Ge&&ft&&(Ke.length>0&&Rt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,ge,Z[0].width,Z[0].height));for(let ie=0;ie<6;ie++)if(Xe){Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Z[ie].width,Z[ie].height,Fe,Ae,Z[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ge,Z[ie].width,Z[ie].height,0,Fe,Ae,Z[ie].data);for(let T=0;T<Ke.length;T++){let ae=Ke[T].image[ie].image;Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,T+1,0,0,ae.width,ae.height,Fe,Ae,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,T+1,ge,ae.width,ae.height,0,Fe,Ae,ae.data)}}else{Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Fe,Ae,Z[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ge,Fe,Ae,Z[ie]);for(let T=0;T<Ke.length;T++){let oe=Ke[T];Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,T+1,0,0,Fe,Ae,oe.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,T+1,ge,Fe,Ae,oe.image[ie])}}}M(y,it)&&_(n.TEXTURE_CUBE_MAP),te.__version=K.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function le(S,y,F,ee,K,te){let xe=s.convert(F.format,F.colorSpace),ue=s.convert(F.type),me=C(F.internalFormat,xe,ue,F.colorSpace);if(!i.get(y).__hasExternalTextures){let Xe=Math.max(1,y.width>>te),Z=Math.max(1,y.height>>te);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,te,me,Xe,Z,y.depth,0,xe,ue,null):t.texImage2D(K,te,me,Xe,Z,0,xe,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),_e(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,K,i.get(F).__webglTexture,0,Ve(y)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,K,i.get(F).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(S,y,F){if(n.bindRenderbuffer(n.RENDERBUFFER,S),y.depthBuffer&&!y.stencilBuffer){let ee=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(F||_e(y)){let K=y.depthTexture;K&&K.isDepthTexture&&(K.type===jr?ee=n.DEPTH_COMPONENT32F:K.type===Gr&&(ee=n.DEPTH_COMPONENT24));let te=Ve(y);_e(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,ee,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,ee,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,ee,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(y.depthBuffer&&y.stencilBuffer){let ee=Ve(y);F&&_e(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,y.width,y.height):_e(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{let ee=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let K=0;K<ee.length;K++){let te=ee[K],xe=s.convert(te.format,te.colorSpace),ue=s.convert(te.type),me=C(te.internalFormat,xe,ue,te.colorSpace),Pe=Ve(y);F&&_e(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,me,y.width,y.height):_e(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,me,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,me,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),I(y.depthTexture,0);let ee=i.get(y.depthTexture).__webglTexture,K=Ve(y);if(y.depthTexture.format===Bs)_e(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(y.depthTexture.format===ba)_e(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ee(S){let y=i.get(S),F=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ce(y.__webglFramebuffer,S)}else if(F){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]=n.createRenderbuffer(),De(y.__webglDepthbuffer[ee],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),De(y.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(S,y,F){let ee=i.get(S);y!==void 0&&le(ee.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ee(S)}function O(S){let y=S.texture,F=i.get(S),ee=i.get(y);S.addEventListener("dispose",q),S.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=y.version,o.memory.textures++);let K=S.isWebGLCubeRenderTarget===!0,te=S.isWebGLMultipleRenderTargets===!0,xe=m(S)||a;if(K){F.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[ue]=[];for(let me=0;me<y.mipmaps.length;me++)F.__webglFramebuffer[ue][me]=n.createFramebuffer()}else F.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)F.__webglFramebuffer[ue]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(te)if(r.drawBuffers){let ue=S.texture;for(let me=0,Pe=ue.length;me<Pe;me++){let Xe=i.get(ue[me]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&_e(S)===!1){let ue=te?y:[y];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let me=0;me<ue.length;me++){let Pe=ue[me];F.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[me]);let Xe=s.convert(Pe.format,Pe.colorSpace),Z=s.convert(Pe.type),dt=C(Pe.internalFormat,Xe,Z,Pe.colorSpace,S.isXRRenderTarget===!0),it=Ve(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,it,dt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,F.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),De(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),G(n.TEXTURE_CUBE_MAP,y,xe);for(let ue=0;ue<6;ue++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)le(F.__webglFramebuffer[ue][me],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else le(F.__webglFramebuffer[ue],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);M(y,xe)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){let ue=S.texture;for(let me=0,Pe=ue.length;me<Pe;me++){let Xe=ue[me],Z=i.get(Xe);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture),G(n.TEXTURE_2D,Xe,xe),le(F.__webglFramebuffer,S,Xe,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),M(Xe,xe)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ue=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ee.__webglTexture),G(ue,y,xe),a&&y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)le(F.__webglFramebuffer[me],S,y,n.COLOR_ATTACHMENT0,ue,me);else le(F.__webglFramebuffer,S,y,n.COLOR_ATTACHMENT0,ue,0);M(y,xe)&&_(ue),t.unbindTexture()}S.depthBuffer&&Ee(S)}function dn(S){let y=m(S)||a,F=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0,K=F.length;ee<K;ee++){let te=F[ee];if(M(te,y)){let xe=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(te).__webglTexture;t.bindTexture(xe,ue),_(xe),t.unbindTexture()}}}function Ie(S){if(a&&S.samples>0&&_e(S)===!1){let y=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],F=S.width,ee=S.height,K=n.COLOR_BUFFER_BIT,te=[],xe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(S),me=S.isWebGLMultipleRenderTargets===!0;if(me)for(let Pe=0;Pe<y.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Pe=0;Pe<y.length;Pe++){te.push(n.COLOR_ATTACHMENT0+Pe),S.depthBuffer&&te.push(xe);let Xe=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Xe===!1&&(S.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[Pe]),Xe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])),me){let Z=i.get(y[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,F,ee,0,0,F,ee,K,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Pe=0;Pe<y.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,ue.__webglColorRenderbuffer[Pe]);let Xe=i.get(y[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Ve(S){return Math.min(r.maxSamples,S.samples)}function _e(S){let y=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Et(S){let y=o.render.frame;u.get(S)!==y&&(u.set(S,y),S.update())}function qe(S,y){let F=S.colorSpace,ee=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===I0||F!==ur&&F!==Jn&&(ht.getTransfer(F)===St?a===!1?e.has("EXT_sRGB")===!0&&ee===vi?(S.format=I0,S.minFilter=Kn,S.generateMipmaps=!1):y=ku.sRGBToLinear(y):(ee!==vi||K!==qr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}this.allocateTextureUnit=R,this.resetTextureUnits=ne,this.setTexture2D=I,this.setTexture2DArray=L,this.setTexture3D=P,this.setTextureCube=H,this.rebindTextures=nt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=dn,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=le,this.useMultisampledRTT=_e}function Xz(n,e,t){let i=t.isWebGL2;function r(s,o=Jn){let a,c=ht.getTransfer(o);if(s===qr)return n.UNSIGNED_BYTE;if(s===Kv)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Jv)return n.UNSIGNED_SHORT_5_5_5_1;if(s===VR)return n.BYTE;if(s===UR)return n.SHORT;if(s===o5)return n.UNSIGNED_SHORT;if(s===Yv)return n.INT;if(s===Gr)return n.UNSIGNED_INT;if(s===jr)return n.FLOAT;if(s===cc)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===HR)return n.ALPHA;if(s===vi)return n.RGBA;if(s===BR)return n.LUMINANCE;if(s===GR)return n.LUMINANCE_ALPHA;if(s===Bs)return n.DEPTH_COMPONENT;if(s===ba)return n.DEPTH_STENCIL;if(s===I0)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===jR)return n.RED;if(s===Qv)return n.RED_INTEGER;if(s===WR)return n.RG;if(s===ey)return n.RG_INTEGER;if(s===ty)return n.RGBA_INTEGER;if(s===Xh||s===Zh||s===Yh||s===Kh)if(c===St)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Xh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Xh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pg||s===Lg||s===Og||s===zg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Pg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Lg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Og)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ny)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Fg||s===kg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Fg)return c===St?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===kg)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Vg||s===Ug||s===Hg||s===Bg||s===Gg||s===jg||s===Wg||s===$g||s===qg||s===Xg||s===Zg||s===Yg||s===Kg||s===Jg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Vg)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ug)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Hg)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bg)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gg)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jg)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wg)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$g)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qg)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xg)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zg)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yg)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Kg)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jg)return c===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Jh||s===Qg||s===ev)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Jh)return c===St?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Qg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ev)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$R||s===tv||s===nv||s===iv)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Jh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===tv)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nv)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===iv)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Hs?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var X0=class extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},pa=class extends Ea{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zz={type:"move"},oc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),h=this._getHandJoint(l,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zz)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Z0=class extends Zr{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,g=null,v=t.getContextAttributes(),m=null,h=null,M=[],_=[],C=new pt,D=null,A=new Mn;A.layers.enable(1),A.viewport=new on;let E=new Mn;E.layers.enable(2),E.viewport=new on;let q=[A,E],b=new X0;b.layers.enable(1),b.layers.enable(2);let w=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let W=M[G];return W===void 0&&(W=new oc,M[G]=W),W.getTargetRaySpace()},this.getControllerGrip=function(G){let W=M[G];return W===void 0&&(W=new oc,M[G]=W),W.getGripSpace()},this.getHand=function(G){let W=M[G];return W===void 0&&(W=new oc,M[G]=W),W.getHandSpace()};function X(G){let W=_.indexOf(G.inputSource);if(W===-1)return;let ce=M[W];ce!==void 0&&(ce.update(G.inputSource,G.frame,l||o),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function ne(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",R);for(let G=0;G<M.length;G++){let W=_[G];W!==null&&(_[G]=null,M[G].disconnect(W))}w=null,j=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,Y.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(G){return h3(this,null,function*(){if(r=G,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",R),v.xrCompatible!==!0&&(yield t.makeXRCompatible()),D=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let W={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new fr(p.framebufferWidth,p.framebufferHeight,{format:vi,type:qr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let W=null,ce=null,be=null;v.depth&&(be=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=v.stencil?ba:Bs,ce=v.stencil?Hs:Gr);let le={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new fr(d.textureWidth,d.textureHeight,{format:vi,type:qr,depthTexture:new Xu(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let De=e.properties.get(h);De.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),Y.setContext(r),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function R(G){for(let W=0;W<G.removed.length;W++){let ce=G.removed[W],be=_.indexOf(ce);be>=0&&(_[be]=null,M[be].disconnect(ce))}for(let W=0;W<G.added.length;W++){let ce=G.added[W],be=_.indexOf(ce);if(be===-1){for(let De=0;De<M.length;De++)if(De>=_.length){_.push(ce),be=De;break}else if(_[De]===null){_[De]=ce,be=De;break}if(be===-1)break}let le=M[be];le&&le.connect(ce)}}let U=new V,I=new V;function L(G,W,ce){U.setFromMatrixPosition(W.matrixWorld),I.setFromMatrixPosition(ce.matrixWorld);let be=U.distanceTo(I),le=W.projectionMatrix.elements,De=ce.projectionMatrix.elements,Ce=le[14]/(le[10]-1),Ee=le[14]/(le[10]+1),nt=(le[9]+1)/le[5],O=(le[9]-1)/le[5],dn=(le[8]-1)/le[0],Ie=(De[8]+1)/De[0],Ve=Ce*dn,_e=Ce*Ie,Et=be/(-dn+Ie),qe=Et*-dn;W.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(qe),G.translateZ(Et),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let S=Ce+Et,y=Ee+Et,F=Ve-qe,ee=_e+(be-qe),K=nt*Ee/y*S,te=O*Ee/y*S;G.projectionMatrix.makePerspective(F,ee,K,te,S,y),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function P(G,W){W===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(W.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;b.near=E.near=A.near=G.near,b.far=E.far=A.far=G.far,(w!==b.near||j!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,j=b.far);let W=G.parent,ce=b.cameras;P(b,W);for(let be=0;be<ce.length;be++)P(ce[be],W);ce.length===2?L(b,A,E):b.projectionMatrix.copy(A.projectionMatrix),H(G,b,W)};function H(G,W,ce){ce===null?G.matrix.copy(W.matrixWorld):(G.matrix.copy(ce.matrixWorld),G.matrix.invert(),G.matrix.multiply(W.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(W.projectionMatrix),G.projectionMatrixInverse.copy(W.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=R0*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let $=null;function J(G,W){if(u=W.getViewerPose(l||o),g=W,u!==null){let ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let be=!1;ce.length!==b.cameras.length&&(b.cameras.length=0,be=!0);for(let le=0;le<ce.length;le++){let De=ce[le],Ce=null;if(p!==null)Ce=p.getViewport(De);else{let nt=f.getViewSubImage(d,De);Ce=nt.viewport,le===0&&(e.setRenderTargetTextures(h,nt.colorTexture,d.ignoreDepthValues?void 0:nt.depthStencilTexture),e.setRenderTarget(h))}let Ee=q[le];Ee===void 0&&(Ee=new Mn,Ee.layers.enable(le),Ee.viewport=new on,q[le]=Ee),Ee.matrix.fromArray(De.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(De.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),le===0&&(b.matrix.copy(Ee.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),be===!0&&b.cameras.push(Ee)}}for(let ce=0;ce<M.length;ce++){let be=_[ce],le=M[ce];be!==null&&le!==void 0&&le.update(be,W,l||o)}$&&$(G,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),g=null}let Y=new cy;Y.setAnimationLoop(J),this.setAnimationLoop=function(G){$=G},this.dispose=function(){}}};function Yz(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,ay(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,M,_,C){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,C)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,M,_):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===In&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===In&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let M=e.get(h).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*_,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,M,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*M,m.scale.value=_*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,M){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===In&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){let M=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Kz(n,e,t,i){let r={},s={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,_){let C=_.program;i.uniformBlockBinding(M,C)}function l(M,_){let C=r[M.id];C===void 0&&(g(M),C=u(M),r[M.id]=C,M.addEventListener("dispose",m));let D=_.program;i.updateUBOMapping(M,D);let A=e.render.frame;s[M.id]!==A&&(d(M),s[M.id]=A)}function u(M){let _=f();M.__bindingPointIndex=_;let C=n.createBuffer(),D=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,D,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,C),C}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=r[M.id],C=M.uniforms,D=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let A=0,E=C.length;A<E;A++){let q=Array.isArray(C[A])?C[A]:[C[A]];for(let b=0,w=q.length;b<w;b++){let j=q[b];if(p(j,A,b,D)===!0){let X=j.__offset,ne=Array.isArray(j.value)?j.value:[j.value],R=0;for(let U=0;U<ne.length;U++){let I=ne[U],L=v(I);typeof I=="number"||typeof I=="boolean"?(j.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,X+R,j.__data)):I.isMatrix3?(j.__data[0]=I.elements[0],j.__data[1]=I.elements[1],j.__data[2]=I.elements[2],j.__data[3]=0,j.__data[4]=I.elements[3],j.__data[5]=I.elements[4],j.__data[6]=I.elements[5],j.__data[7]=0,j.__data[8]=I.elements[6],j.__data[9]=I.elements[7],j.__data[10]=I.elements[8],j.__data[11]=0):(I.toArray(j.__data,R),R+=L.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,j.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,_,C,D){let A=M.value,E=_+"_"+C;if(D[E]===void 0)return typeof A=="number"||typeof A=="boolean"?D[E]=A:D[E]=A.clone(),!0;{let q=D[E];if(typeof A=="number"||typeof A=="boolean"){if(q!==A)return D[E]=A,!0}else if(q.equals(A)===!1)return q.copy(A),!0}return!1}function g(M){let _=M.uniforms,C=0,D=16;for(let E=0,q=_.length;E<q;E++){let b=Array.isArray(_[E])?_[E]:[_[E]];for(let w=0,j=b.length;w<j;w++){let X=b[w],ne=Array.isArray(X.value)?X.value:[X.value];for(let R=0,U=ne.length;R<U;R++){let I=ne[R],L=v(I),P=C%D;P!==0&&D-P<L.boundary&&(C+=D-P),X.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=C,C+=L.storage}}}let A=C%D;return A>0&&(C+=D-A),M.__size=C,M.__cache={},this}function v(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){let _=M.target;_.removeEventListener("dispose",m);let C=o.indexOf(_.__bindingPointIndex);o.splice(C,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(let M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}var uc=class{constructor(e={}){let{canvas:t=sN(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,h=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this._useLegacyLights=!1,this.toneMapping=$r,this.toneMappingExposure=1;let _=this,C=!1,D=0,A=0,E=null,q=-1,b=null,w=new on,j=new on,X=null,ne=new ut(0),R=0,U=t.width,I=t.height,L=1,P=null,H=null,$=new on(0,0,U,I),J=new on(0,0,U,I),Y=!1,G=new $u,W=!1,ce=!1,be=null,le=new fn,De=new pt,Ce=new V,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return E===null?L:1}let O=i;function dn(x,N){for(let k=0;k<x.length;k++){let B=x[k],z=t.getContext(B,N);if(z!==null)return z}return null}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${s5}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",T,!1),t.addEventListener("webglcontextcreationerror",oe,!1),O===null){let N=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&N.shift(),O=dn(N,x),O===null)throw dn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ie,Ve,_e,Et,qe,S,y,F,ee,K,te,xe,ue,me,Pe,Xe,Z,dt,it,Fe,Ae,ge,Ge,ft;function Rt(){Ie=new gO(O),Ve=new uO(O,Ie,e),Ie.init(Ve),ge=new Xz(O,Ie,Ve),_e=new $z(O,Ie,Ve),Et=new _O(O),qe=new Lz,S=new qz(O,Ie,_e,qe,Ve,ge,Et),y=new dO(_),F=new mO(_),ee=new AN(O,Ve),Ge=new cO(O,Ie,ee,Ve),K=new vO(O,ee,Et,Ge),te=new CO(O,K,ee,Et),it=new MO(O,Ve,S),Xe=new fO(qe),xe=new Pz(_,y,F,Ie,Ve,Ge,Xe),ue=new Yz(_,qe),me=new zz,Pe=new Bz(Ie,Ve),dt=new aO(_,y,F,_e,te,d,c),Z=new Wz(_,te,Ve),ft=new Kz(O,Et,Ve,_e),Fe=new lO(O,Ie,Et,Ve),Ae=new yO(O,Ie,Et,Ve),Et.programs=xe.programs,_.capabilities=Ve,_.extensions=Ie,_.properties=qe,_.renderLists=me,_.shadowMap=Z,_.state=_e,_.info=Et}Rt();let Ke=new Z0(_,O);this.xr=Ke,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let x=Ie.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Ie.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(x){x!==void 0&&(L=x,this.setSize(U,I,!1))},this.getSize=function(x){return x.set(U,I)},this.setSize=function(x,N,k=!0){if(Ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=x,I=N,t.width=Math.floor(x*L),t.height=Math.floor(N*L),k===!0&&(t.style.width=x+"px",t.style.height=N+"px"),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(U*L,I*L).floor()},this.setDrawingBufferSize=function(x,N,k){U=x,I=N,L=k,t.width=Math.floor(x*k),t.height=Math.floor(N*k),this.setViewport(0,0,x,N)},this.getCurrentViewport=function(x){return x.copy(w)},this.getViewport=function(x){return x.copy($)},this.setViewport=function(x,N,k,B){x.isVector4?$.set(x.x,x.y,x.z,x.w):$.set(x,N,k,B),_e.viewport(w.copy($).multiplyScalar(L).floor())},this.getScissor=function(x){return x.copy(J)},this.setScissor=function(x,N,k,B){x.isVector4?J.set(x.x,x.y,x.z,x.w):J.set(x,N,k,B),_e.scissor(j.copy(J).multiplyScalar(L).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(x){_e.setScissorTest(Y=x)},this.setOpaqueSort=function(x){P=x},this.setTransparentSort=function(x){H=x},this.getClearColor=function(x){return x.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(x=!0,N=!0,k=!0){let B=0;if(x){let z=!1;if(E!==null){let de=E.texture.format;z=de===ty||de===ey||de===Qv}if(z){let de=E.texture.type,Me=de===qr||de===Gr||de===o5||de===Hs||de===Kv||de===Jv,Ne=dt.getClearColor(),ze=dt.getClearAlpha(),Ze=Ne.r,Ue=Ne.g,Be=Ne.b;Me?(p[0]=Ze,p[1]=Ue,p[2]=Be,p[3]=ze,O.clearBufferuiv(O.COLOR,0,p)):(g[0]=Ze,g[1]=Ue,g[2]=Be,g[3]=ze,O.clearBufferiv(O.COLOR,0,g))}else B|=O.COLOR_BUFFER_BIT}N&&(B|=O.DEPTH_BUFFER_BIT),k&&(B|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",T,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),me.dispose(),Pe.dispose(),qe.dispose(),y.dispose(),F.dispose(),te.dispose(),Ge.dispose(),ft.dispose(),xe.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",hn),Ke.removeEventListener("sessionend",_t),be&&(be.dispose(),be=null),pn.stop()};function ie(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function T(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let x=Et.autoReset,N=Z.enabled,k=Z.autoUpdate,B=Z.needsUpdate,z=Z.type;Rt(),Et.autoReset=x,Z.enabled=N,Z.autoUpdate=k,Z.needsUpdate=B,Z.type=z}function oe(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ae(x){let N=x.target;N.removeEventListener("dispose",ae),Le(N)}function Le(x){Re(x),qe.remove(x)}function Re(x){let N=qe.get(x).programs;N!==void 0&&(N.forEach(function(k){xe.releaseProgram(k)}),x.isShaderMaterial&&xe.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,k,B,z,de){N===null&&(N=Ee);let Me=z.isMesh&&z.matrixWorld.determinant()<0,Ne=n_(x,N,k,B,z);_e.setMaterial(B,Me);let ze=k.index,Ze=1;if(B.wireframe===!0){if(ze=K.getWireframeAttribute(k),ze===void 0)return;Ze=2}let Ue=k.drawRange,Be=k.attributes.position,Ft=Ue.start*Ze,Rn=(Ue.start+Ue.count)*Ze;de!==null&&(Ft=Math.max(Ft,de.start*Ze),Rn=Math.min(Rn,(de.start+de.count)*Ze)),ze!==null?(Ft=Math.max(Ft,0),Rn=Math.min(Rn,ze.count)):Be!=null&&(Ft=Math.max(Ft,0),Rn=Math.min(Rn,Be.count));let Jt=Rn-Ft;if(Jt<0||Jt===1/0)return;Ge.setup(z,B,Ne,k,ze);let Li,At=Fe;if(ze!==null&&(Li=ee.get(ze),At=Ae,At.setIndex(Li)),z.isMesh)B.wireframe===!0?(_e.setLineWidth(B.wireframeLinewidth*nt()),At.setMode(O.LINES)):At.setMode(O.TRIANGLES);else if(z.isLine){let Je=B.linewidth;Je===void 0&&(Je=1),_e.setLineWidth(Je*nt()),z.isLineSegments?At.setMode(O.LINES):z.isLineLoop?At.setMode(O.LINE_LOOP):At.setMode(O.LINE_STRIP)}else z.isPoints?At.setMode(O.POINTS):z.isSprite&&At.setMode(O.TRIANGLES);if(z.isBatchedMesh)At.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)At.renderInstances(Ft,Jt,z.count);else if(k.isInstancedBufferGeometry){let Je=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,l3=Math.min(k.instanceCount,Je);At.renderInstances(Ft,Jt,l3)}else At.render(Ft,Jt)};function vt(x,N,k){x.transparent===!0&&x.side===ar&&x.forceSinglePass===!1?(x.side=In,x.needsUpdate=!0,gc(x,N,k),x.side=Xr,x.needsUpdate=!0,gc(x,N,k),x.side=ar):gc(x,N,k)}this.compile=function(x,N,k=null){k===null&&(k=x),m=Pe.get(k),m.init(),M.push(m),k.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),x!==k&&x.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(_._useLegacyLights);let B=new Set;return x.traverse(function(z){let de=z.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){let Ne=de[Me];vt(Ne,k,z),B.add(Ne)}else vt(de,k,z),B.add(de)}),M.pop(),m=null,B},this.compileAsync=function(x,N,k=null){let B=this.compile(x,N,k);return new Promise(z=>{function de(){if(B.forEach(function(Me){qe.get(Me).currentProgram.isReady()&&B.delete(Me)}),B.size===0){z(x);return}setTimeout(de,10)}Ie.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let yt=null;function Kt(x){yt&&yt(x)}function hn(){pn.stop()}function _t(){pn.start()}let pn=new cy;pn.setAnimationLoop(Kt),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(x){yt=x,Ke.setAnimationLoop(x),x===null?pn.stop():pn.start()},Ke.addEventListener("sessionstart",hn),Ke.addEventListener("sessionend",_t),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(N),N=Ke.getCamera()),x.isScene===!0&&x.onBeforeRender(_,x,N,E),m=Pe.get(x,M.length),m.init(),M.push(m),le.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),G.setFromProjectionMatrix(le),ce=this.localClippingEnabled,W=Xe.init(this.clippingPlanes,ce),v=me.get(x,h.length),v.init(),h.push(v),_i(x,N,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(P,H),this.info.render.frame++,W===!0&&Xe.beginShadows();let k=m.state.shadowsArray;if(Z.render(k,x,N),W===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),dt.render(v,x),m.setupLights(_._useLegacyLights),N.isArrayCamera){let B=N.cameras;for(let z=0,de=B.length;z<de;z++){let Me=B[z];v5(v,x,Me,Me.viewport)}}else v5(v,x,N);E!==null&&(S.updateMultisampleRenderTarget(E),S.updateRenderTargetMipmap(E)),x.isScene===!0&&x.onAfterRender(_,x,N),Ge.resetDefaultState(),q=-1,b=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function _i(x,N,k,B){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLight)m.pushLight(x),x.castShadow&&m.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||G.intersectsSprite(x)){B&&Ce.setFromMatrixPosition(x.matrixWorld).applyMatrix4(le);let Me=te.update(x),Ne=x.material;Ne.visible&&v.push(x,Me,Ne,k,Ce.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||G.intersectsObject(x))){let Me=te.update(x),Ne=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ce.copy(x.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ce.copy(Me.boundingSphere.center)),Ce.applyMatrix4(x.matrixWorld).applyMatrix4(le)),Array.isArray(Ne)){let ze=Me.groups;for(let Ze=0,Ue=ze.length;Ze<Ue;Ze++){let Be=ze[Ze],Ft=Ne[Be.materialIndex];Ft&&Ft.visible&&v.push(x,Me,Ft,k,Ce.z,Be)}}else Ne.visible&&v.push(x,Me,Ne,k,Ce.z,null)}}let de=x.children;for(let Me=0,Ne=de.length;Me<Ne;Me++)_i(de[Me],N,k,B)}function v5(x,N,k,B){let z=x.opaque,de=x.transmissive,Me=x.transparent;m.setupLightsView(k),W===!0&&Xe.setGlobalState(_.clippingPlanes,k),de.length>0&&t_(z,de,N,k),B&&_e.viewport(w.copy(B)),z.length>0&&mc(z,N,k),de.length>0&&mc(de,N,k),Me.length>0&&mc(Me,N,k),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function t_(x,N,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;let de=Ve.isWebGL2;be===null&&(be=new fr(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?cc:qr,minFilter:ac,samples:de?4:0})),_.getDrawingBufferSize(De),de?be.setSize(De.x,De.y):be.setSize(N0(De.x),N0(De.y));let Me=_.getRenderTarget();_.setRenderTarget(be),_.getClearColor(ne),R=_.getClearAlpha(),R<1&&_.setClearColor(16777215,.5),_.clear();let Ne=_.toneMapping;_.toneMapping=$r,mc(x,k,B),S.updateMultisampleRenderTarget(be),S.updateRenderTargetMipmap(be);let ze=!1;for(let Ze=0,Ue=N.length;Ze<Ue;Ze++){let Be=N[Ze],Ft=Be.object,Rn=Be.geometry,Jt=Be.material,Li=Be.group;if(Jt.side===ar&&Ft.layers.test(B.layers)){let At=Jt.side;Jt.side=In,Jt.needsUpdate=!0,y5(Ft,k,B,Rn,Jt,Li),Jt.side=At,Jt.needsUpdate=!0,ze=!0}}ze===!0&&(S.updateMultisampleRenderTarget(be),S.updateRenderTargetMipmap(be)),_.setRenderTarget(Me),_.setClearColor(ne,R),_.toneMapping=Ne}function mc(x,N,k){let B=N.isScene===!0?N.overrideMaterial:null;for(let z=0,de=x.length;z<de;z++){let Me=x[z],Ne=Me.object,ze=Me.geometry,Ze=B===null?Me.material:B,Ue=Me.group;Ne.layers.test(k.layers)&&y5(Ne,N,k,ze,Ze,Ue)}}function y5(x,N,k,B,z,de){x.onBeforeRender(_,N,k,B,z,de),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(_,N,k,B,x,de),z.transparent===!0&&z.side===ar&&z.forceSinglePass===!1?(z.side=In,z.needsUpdate=!0,_.renderBufferDirect(k,N,B,z,x,de),z.side=Xr,z.needsUpdate=!0,_.renderBufferDirect(k,N,B,z,x,de),z.side=ar):_.renderBufferDirect(k,N,B,z,x,de),x.onAfterRender(_,N,k,B,z,de)}function gc(x,N,k){N.isScene!==!0&&(N=Ee);let B=qe.get(x),z=m.state.lights,de=m.state.shadowsArray,Me=z.state.version,Ne=xe.getParameters(x,z.state,de,N,k),ze=xe.getProgramCacheKey(Ne),Ze=B.programs;B.environment=x.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(x.isMeshStandardMaterial?F:y).get(x.envMap||B.environment),Ze===void 0&&(x.addEventListener("dispose",ae),Ze=new Map,B.programs=Ze);let Ue=Ze.get(ze);if(Ue!==void 0){if(B.currentProgram===Ue&&B.lightsStateVersion===Me)return b5(x,Ne),Ue}else Ne.uniforms=xe.getUniforms(x),x.onBuild(k,Ne,_),x.onBeforeCompile(Ne,_),Ue=xe.acquireProgram(Ne,ze),Ze.set(ze,Ue),B.uniforms=Ne.uniforms;let Be=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Be.clippingPlanes=Xe.uniform),b5(x,Ne),B.needsLights=r_(x),B.lightsStateVersion=Me,B.needsLights&&(Be.ambientLightColor.value=z.state.ambient,Be.lightProbe.value=z.state.probe,Be.directionalLights.value=z.state.directional,Be.directionalLightShadows.value=z.state.directionalShadow,Be.spotLights.value=z.state.spot,Be.spotLightShadows.value=z.state.spotShadow,Be.rectAreaLights.value=z.state.rectArea,Be.ltc_1.value=z.state.rectAreaLTC1,Be.ltc_2.value=z.state.rectAreaLTC2,Be.pointLights.value=z.state.point,Be.pointLightShadows.value=z.state.pointShadow,Be.hemisphereLights.value=z.state.hemi,Be.directionalShadowMap.value=z.state.directionalShadowMap,Be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Be.spotShadowMap.value=z.state.spotShadowMap,Be.spotLightMatrix.value=z.state.spotLightMatrix,Be.spotLightMap.value=z.state.spotLightMap,Be.pointShadowMap.value=z.state.pointShadowMap,Be.pointShadowMatrix.value=z.state.pointShadowMatrix),B.currentProgram=Ue,B.uniformsList=null,Ue}function _5(x){if(x.uniformsList===null){let N=x.currentProgram.getUniforms();x.uniformsList=va.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function b5(x,N){let k=qe.get(x);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function n_(x,N,k,B,z){N.isScene!==!0&&(N=Ee),S.resetTextureUnits();let de=N.fog,Me=B.isMeshStandardMaterial?N.environment:null,Ne=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ur,ze=(B.isMeshStandardMaterial?F:y).get(B.envMap||Me),Ze=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ue=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Be=!!k.morphAttributes.position,Ft=!!k.morphAttributes.normal,Rn=!!k.morphAttributes.color,Jt=$r;B.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Jt=_.toneMapping);let Li=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,At=Li!==void 0?Li.length:0,Je=qe.get(B),l3=m.state.lights;if(W===!0&&(ce===!0||x!==b)){let kn=x===b&&B.id===q;Xe.setState(B,x,kn)}let Nt=!1;B.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==l3.state.version||Je.outputColorSpace!==Ne||z.isBatchedMesh&&Je.batching===!1||!z.isBatchedMesh&&Je.batching===!0||z.isInstancedMesh&&Je.instancing===!1||!z.isInstancedMesh&&Je.instancing===!0||z.isSkinnedMesh&&Je.skinning===!1||!z.isSkinnedMesh&&Je.skinning===!0||z.isInstancedMesh&&Je.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Je.instancingColor===!1&&z.instanceColor!==null||Je.envMap!==ze||B.fog===!0&&Je.fog!==de||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Xe.numPlanes||Je.numIntersection!==Xe.numIntersection)||Je.vertexAlphas!==Ze||Je.vertexTangents!==Ue||Je.morphTargets!==Be||Je.morphNormals!==Ft||Je.morphColors!==Rn||Je.toneMapping!==Jt||Ve.isWebGL2===!0&&Je.morphTargetsCount!==At)&&(Nt=!0):(Nt=!0,Je.__version=B.version);let Jr=Je.currentProgram;Nt===!0&&(Jr=gc(B,N,z));let x5=!1,Ra=!1,u3=!1,an=Jr.getUniforms(),Qr=Je.uniforms;if(_e.useProgram(Jr.program)&&(x5=!0,Ra=!0,u3=!0),B.id!==q&&(q=B.id,Ra=!0),x5||b!==x){an.setValue(O,"projectionMatrix",x.projectionMatrix),an.setValue(O,"viewMatrix",x.matrixWorldInverse);let kn=an.map.cameraPosition;kn!==void 0&&kn.setValue(O,Ce.setFromMatrixPosition(x.matrixWorld)),Ve.logarithmicDepthBuffer&&an.setValue(O,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&an.setValue(O,"isOrthographic",x.isOrthographicCamera===!0),b!==x&&(b=x,Ra=!0,u3=!0)}if(z.isSkinnedMesh){an.setOptional(O,z,"bindMatrix"),an.setOptional(O,z,"bindMatrixInverse");let kn=z.skeleton;kn&&(Ve.floatVertexTextures?(kn.boneTexture===null&&kn.computeBoneTexture(),an.setValue(O,"boneTexture",kn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(an.setOptional(O,z,"batchingTexture"),an.setValue(O,"batchingTexture",z._matricesTexture,S));let f3=k.morphAttributes;if((f3.position!==void 0||f3.normal!==void 0||f3.color!==void 0&&Ve.isWebGL2===!0)&&it.update(z,k,Jr),(Ra||Je.receiveShadow!==z.receiveShadow)&&(Je.receiveShadow=z.receiveShadow,an.setValue(O,"receiveShadow",z.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Qr.envMap.value=ze,Qr.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Ra&&(an.setValue(O,"toneMappingExposure",_.toneMappingExposure),Je.needsLights&&i_(Qr,u3),de&&B.fog===!0&&ue.refreshFogUniforms(Qr,de),ue.refreshMaterialUniforms(Qr,B,L,I,be),va.upload(O,_5(Je),Qr,S)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(va.upload(O,_5(Je),Qr,S),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&an.setValue(O,"center",z.center),an.setValue(O,"modelViewMatrix",z.modelViewMatrix),an.setValue(O,"normalMatrix",z.normalMatrix),an.setValue(O,"modelMatrix",z.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let kn=B.uniformsGroups;for(let d3=0,s_=kn.length;d3<s_;d3++)if(Ve.isWebGL2){let M5=kn[d3];ft.update(M5,Jr),ft.bind(M5,Jr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jr}function i_(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function r_(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(x,N,k){qe.get(x.texture).__webglTexture=N,qe.get(x.depthTexture).__webglTexture=k;let B=qe.get(x);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,N){let k=qe.get(x);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(x,N=0,k=0){E=x,D=N,A=k;let B=!0,z=null,de=!1,Me=!1;if(x){let ze=qe.get(x);ze.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(O.FRAMEBUFFER,null),B=!1):ze.__webglFramebuffer===void 0?S.setupRenderTarget(x):ze.__hasExternalTextures&&S.rebindTextures(x,qe.get(x.texture).__webglTexture,qe.get(x.depthTexture).__webglTexture);let Ze=x.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Me=!0);let Ue=qe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?z=Ue[N][k]:z=Ue[N],de=!0):Ve.isWebGL2&&x.samples>0&&S.useMultisampledRTT(x)===!1?z=qe.get(x).__webglMultisampledFramebuffer:Array.isArray(Ue)?z=Ue[k]:z=Ue,w.copy(x.viewport),j.copy(x.scissor),X=x.scissorTest}else w.copy($).multiplyScalar(L).floor(),j.copy(J).multiplyScalar(L).floor(),X=Y;if(_e.bindFramebuffer(O.FRAMEBUFFER,z)&&Ve.drawBuffers&&B&&_e.drawBuffers(x,z),_e.viewport(w),_e.scissor(j),_e.setScissorTest(X),de){let ze=qe.get(x.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,ze.__webglTexture,k)}else if(Me){let ze=qe.get(x.texture),Ze=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.__webglTexture,k||0,Ze)}q=-1},this.readRenderTargetPixels=function(x,N,k,B,z,de,Me){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=qe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Me!==void 0&&(Ne=Ne[Me]),Ne){_e.bindFramebuffer(O.FRAMEBUFFER,Ne);try{let ze=x.texture,Ze=ze.format,Ue=ze.type;if(Ze!==vi&&ge.convert(Ze)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Be=Ue===cc&&(Ie.has("EXT_color_buffer_half_float")||Ve.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(Ue!==qr&&ge.convert(Ue)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===jr&&(Ve.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-B&&k>=0&&k<=x.height-z&&O.readPixels(N,k,B,z,ge.convert(Ze),ge.convert(Ue),de)}finally{let ze=E!==null?qe.get(E).__webglFramebuffer:null;_e.bindFramebuffer(O.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(x,N,k=0){let B=Math.pow(2,-k),z=Math.floor(N.image.width*B),de=Math.floor(N.image.height*B);S.setTexture2D(N,0),O.copyTexSubImage2D(O.TEXTURE_2D,k,0,0,x.x,x.y,z,de),_e.unbindTexture()},this.copyTextureToTexture=function(x,N,k,B=0){let z=N.image.width,de=N.image.height,Me=ge.convert(k.format),Ne=ge.convert(k.type);S.setTexture2D(k,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment),N.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,x.x,x.y,z,de,Me,Ne,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,x.x,x.y,N.mipmaps[0].width,N.mipmaps[0].height,Me,N.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,B,x.x,x.y,Me,Ne,N.image),B===0&&k.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(x,N,k,B,z=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let de=x.max.x-x.min.x+1,Me=x.max.y-x.min.y+1,Ne=x.max.z-x.min.z+1,ze=ge.convert(B.format),Ze=ge.convert(B.type),Ue;if(B.isData3DTexture)S.setTexture3D(B,0),Ue=O.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)S.setTexture2DArray(B,0),Ue=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let Be=O.getParameter(O.UNPACK_ROW_LENGTH),Ft=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Rn=O.getParameter(O.UNPACK_SKIP_PIXELS),Jt=O.getParameter(O.UNPACK_SKIP_ROWS),Li=O.getParameter(O.UNPACK_SKIP_IMAGES),At=k.isCompressedTexture?k.mipmaps[z]:k.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,At.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,x.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,x.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,x.min.z),k.isDataTexture||k.isData3DTexture?O.texSubImage3D(Ue,z,N.x,N.y,N.z,de,Me,Ne,ze,Ze,At.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ue,z,N.x,N.y,N.z,de,Me,Ne,ze,At.data)):O.texSubImage3D(Ue,z,N.x,N.y,N.z,de,Me,Ne,ze,Ze,At),O.pixelStorei(O.UNPACK_ROW_LENGTH,Be),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Rn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Jt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Li),z===0&&B.generateMipmaps&&O.generateMipmap(Ue),_e.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?S.setTextureCube(x,0):x.isData3DTexture?S.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?S.setTexture2DArray(x,0):S.setTexture2D(x,0),_e.unbindTexture()},this.resetState=function(){D=0,A=0,E=null,_e.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===a5?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===Ku?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===sn?Gs:iy}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gs?sn:ur}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Y0=class extends uc{};Y0.prototype.isWebGL1Renderer=!0;var Zu=class extends Ea{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};function Du(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Jz(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Sa=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},K0=class extends Sa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rv,endingEnd:rv}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case sv:s=e,a=2*t-i;break;case ov:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case sv:o=e,c=2*i-t;break;case ov:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,h=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*v+.5*g,C=p*m-p*v;for(let D=0;D!==a;++D)s[D]=h*o[u+D]+M*o[l+D]+_*o[c+D]+C*o[f+D];return s}},J0=class extends Sa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),f=1-u;for(let d=0;d!==a;++d)s[d]=o[l+d]*f+o[c+d]*u;return s}},Q0=class extends Sa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},yi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Du(t,this.TimeBufferType),this.values=Du(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Du(e.times,Array),values:Du(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Q0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new J0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new K0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ru:t=this.InterpolantFactoryMethodDiscrete;break;case Nu:t=this.InterpolantFactoryMethodLinear;break;case Qh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ru;case this.InterpolantFactoryMethodLinear:return Nu;case this.InterpolantFactoryMethodSmooth:return Qh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Jz(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Qh,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let f=a*i,d=f-i,p=f+i;for(let g=0;g!==i;++g){let v=t[f+g];if(v!==t[d+g]||v!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=Nu;var qs=class extends yi{};qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=Ru;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;var e5=class extends yi{};e5.prototype.ValueTypeName="color";var t5=class extends yi{};t5.prototype.ValueTypeName="number";var n5=class extends Sa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Yr.slerpFlat(s,0,o,l-a,o,l,c);return s}},fc=class extends yi{InterpolantFactoryMethodLinear(e){return new n5(this.times,this.values,this.getValueSize(),e)}};fc.prototype.ValueTypeName="quaternion";fc.prototype.DefaultInterpolation=Nu;fc.prototype.InterpolantFactoryMethodSmooth=void 0;var Xs=class extends yi{};Xs.prototype.ValueTypeName="string";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=Ru;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var i5=class extends yi{};i5.prototype.ValueTypeName="vector";var l5="\\[\\]\\.:\\/",Qz=new RegExp("["+l5+"]","g"),u5="[^"+l5+"]",eF="[^"+l5.replace("\\.","")+"]",tF=/((?:WC+[\/:])*)/.source.replace("WC",u5),nF=/(WCOD+)?/.source.replace("WCOD",eF),iF=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",u5),rF=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",u5),sF=new RegExp("^"+tF+nF+iF+rF+"$"),oF=["material","materials","bones","map"],r5=class{constructor(e,t,i){let r=i||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},kt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qz,"")}static parseTrackName(t){let i=sF.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);oF.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===u){u=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=r5,n})();kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tq=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:s5}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=s5);function cF(n,e){if(n&1&&(st(0,"li"),Gt(1),ot()),n&2){let t=e.$implicit;Ot(1),qi(t)}}function lF(n,e){if(n&1&&(st(0,"div",12),Gt(1),ot()),n&2){let t=e.$implicit;Ot(1),qi(t)}}function uF(n,e){if(n&1&&(st(0,"div",4)(1,"div",5)(2,"p",6),Gt(3),ot(),st(4,"section")(5,"p",7),Gt(6),ot(),st(7,"p",8),Gt(8),ot(),st(9,"ul"),o1(10,cF,2,1,"li",9),ot(),st(11,"div",10),o1(12,lF,2,1,"div",11),ot()()()()),n&2){let t=e.$implicit;Ot(3),qi(t.timePeriod),Ot(3),qi(t.title),Ot(2),qi(t.company),Ot(2),qt("ngForOf",t.description),Ot(2),qt("ngForOf",t.technology)}}var py=(()=>{let e=class e{constructor(){this.jobs=[{timePeriod:"September 2023 - Present",title:"Full Stack Software Engineer",company:"Freelance",description:["Developed scalable and efficient web applications using modern technologies, such as React, Node.js, PostgreSQL, Python, and Django.","Collaborated with cross-functional teams to design and deploy RESTful APIs, ensuring seamless integration of frontend and backend systems.","Conducted thorough code reviews and implemented best practices, enhancing code quality and maintainability across the development team."],technology:["JavaScript/TypeScript","Node.js","React","Python","Django","PostgreSQL","Docker","AWS"]},{timePeriod:"April 2022 - September 2023",title:"Senior Front End Engineer",company:"Adia",description:["Worked as the lone front end engineer at the company to successfully deliver a complex web application and design library, meeting strict deadlines and exceeding client expectations.","Optimized legacy application performance by implementing innovative solutions, enhancing user experience on all devices.","Collaborated with product managers and UX designers to create responsive and intuitive user interfaces."],technology:["JavaScript/TypeScript","Angular","Azure"]},{timePeriod:"November 2020 - April 2022",title:"Software Engineer II",company:"SonderMind",description:["Developed efficient software solutions, improving performance and enhancing overall user experience.","Conducted rigorous code reviews and implemented robust testing strategies, ensuring high-quality and bug-free software releases."],technology:["JavaScript/TypeScript","Angular","Docker"]},{timePeriod:"August 2019 - November 2020",title:"Software Developer",company:"Charles Schwab",description:["Developed and implemented scalable software solutions utilizing agile development methodologies, and contributing to increased efficiency and productivity.","Executed full stack work within the Salesforce environment, building UI components as well as writing the back end code to supply those components with data.","Mentored and coached junior developers, providing guidance on best practices, code reviews, and technical problem-solving, fostering team growth and enhancing overall development capabilities."],technology:["JavaScript","Salesforce","Apex","Bitbucket"]},{timePeriod:"February 2019 - July 2019",title:"Part Time Contract Software Engineer",company:"Particle41",description:["Developed and implemented responsive web designs using HTML, CSS, JavaScript, and React to create visually appealing user interfaces.","Collaborated with cross-functional teams to design and enhance user experiences.","Optimized website performance by analyzing and refactoring code, resulting in improved load times and decreased bounce rates."],technology:["JavaScript","React","AWS"]},{timePeriod:"July 2017 - January 2018",title:"Part Time Contract Software Engineer",company:"Lifesparq",description:["Developed and implemented responsive website designs using AngularJS and Node.js to enhance user experience and optimize performance.","Collaborated with cross-functional teams to design and develop user-friendly interfaces for web applications, ensuring seamless integration and functionality across different browsers and devices.","Conducted thorough testing and debugging to identify and resolve technical issues, improving website functionality and ensuring optimal performance."],technology:["JavaScript","AngularJS","Node.js","PostgreSQL"]}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Tt({type:e,selectors:[["app-about"]],standalone:!0,features:[en],decls:12,vars:1,consts:[[1,"container"],[1,"about"],[1,"experience"],["class","job",4,"ngFor","ngForOf"],[1,"job"],[1,"time-and-title"],[1,"job-time-period"],[1,"job-title"],[1,"job-company"],[4,"ngFor","ngForOf"],[1,"techs"],["class","pill",4,"ngFor","ngForOf"],[1,"pill"]],template:function(r,s){r&1&&(st(0,"div",0)(1,"h5"),Gt(2,"About"),ot(),st(3,"p",1),Gt(4," Hello! I'm Nathan, a passionate and versatile full-stack software engineer with a penchant for crafting seamless and engaging user experiences. Over the course of my dynamic career, I've had the privilege of contributing my skills to a diverse range of companies \u2013 from nimble startups to industry giants in the Fortune 500. "),_n(5,"br")(6,"br"),Gt(7," When I'm not coding you can find me playing guitar, digging deep into my latest fantasy novel, gaming, playing Magic, and hanging out with my four-legged doofus, Beesly. "),ot(),st(8,"div",2)(9,"h5"),Gt(10,"Experience"),ot(),o1(11,uF,13,5,"div",3),ot()()),r&2&&(Ot(11),qt("ngForOf",s.jobs))},dependencies:[Ti,p7],styles:["h5[_ngcontent-%COMP%]{color:#fffcf7;font-size:15px;font-family:Tektur;padding:.5rem}p[_ngcontent-%COMP%]{color:#fff;font-family:Tektur}.experience[_ngcontent-%COMP%]{margin-top:3rem}.job[_ngcontent-%COMP%]{padding:.5rem}.job[_ngcontent-%COMP%]:hover{border-radius:8px;background-color:#5d666e}.job-title[_ngcontent-%COMP%]{color:#fffcf7;font-size:25px;font-family:Tektur}.job-company[_ngcontent-%COMP%]{color:#fffcf7;font-size:20px;font-family:Tektur}.job-time-period[_ngcontent-%COMP%]{color:#a1b5d8;font-size:12px;margin:none;display:inline-block}p[_ngcontent-%COMP%]{margin:0}ul[_ngcontent-%COMP%]{padding:0}li[_ngcontent-%COMP%]{color:#fff;font-family:Tektur;color:#fffcf7;list-style:none}.techs[_ngcontent-%COMP%]{display:flex;gap:.5rem;flex-wrap:wrap}.pill[_ngcontent-%COMP%]{background-color:#a5b89e;border-radius:40px;padding:.5rem;width:auto;font-family:Tektur;color:#fffcf7;margin-bottom:1rem}.about[_ngcontent-%COMP%]{padding:.5rem}"]});let n=e;return n})();var My=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(we($i),we(cn))},e.\u0275dir=$t({type:e});let n=e;return n})(),fF=(()=>{let e=class e extends My{};e.\u0275fac=function(){let i;return function(s){return(i||(i=_o(e)))(s||e)}}(),e.\u0275dir=$t({type:e,features:[ci]});let n=e;return n})(),Cy=new Se("NgValueAccessor");var dF={provide:Cy,useExisting:vo(()=>Sy),multi:!0};function hF(){let n=Xi()?Xi().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var pF=new Se("CompositionEventMode"),Sy=(()=>{let e=class e extends My{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!hF())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(we($i),we(cn),we(pF,8))},e.\u0275dir=$t({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&qn("input",function(a){return s._handleInput(a.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(a){return s._compositionEnd(a.target.value)})},features:[wr([dF]),ci]});let n=e;return n})();function Kr(n){return n==null||(typeof n=="string"||Array.isArray(n))&&n.length===0}function wy(n){return n!=null&&typeof n.length=="number"}var Ey=new Se("NgValidators"),Ay=new Se("NgAsyncValidators"),mF=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Zs=class{static min(e){return gF(e)}static max(e){return vF(e)}static required(e){return yF(e)}static requiredTrue(e){return _F(e)}static email(e){return bF(e)}static minLength(e){return xF(e)}static maxLength(e){return MF(e)}static pattern(e){return CF(e)}static nullValidator(e){return Ty(e)}static compose(e){return Ly(e)}static composeAsync(e){return zy(e)}};function gF(n){return e=>{if(Kr(e.value)||Kr(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function vF(n){return e=>{if(Kr(e.value)||Kr(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function yF(n){return Kr(n.value)?{required:!0}:null}function _F(n){return n.value===!0?null:{required:!0}}function bF(n){return Kr(n.value)||mF.test(n.value)?null:{email:!0}}function xF(n){return e=>Kr(e.value)||!wy(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}function MF(n){return e=>wy(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}function CF(n){if(!n)return Ty;let e,t;return typeof n=="string"?(t="",n.charAt(0)!=="^"&&(t+="^"),t+=n,n.charAt(n.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(Kr(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function Ty(n){return null}function Dy(n){return n!=null}function Iy(n){return Sr(n)?wt(n):n}function Ry(n){let e={};return n.forEach(t=>{e=t!=null?pe(pe({},e),t):e}),Object.keys(e).length===0?null:e}function Ny(n,e){return e.map(t=>t(n))}function SF(n){return!n.validate}function Py(n){return n.map(e=>SF(e)?e:t=>e.validate(t))}function Ly(n){if(!n)return null;let e=n.filter(Dy);return e.length==0?null:function(t){return Ry(Ny(t,e))}}function Oy(n){return n!=null?Ly(Py(n)):null}function zy(n){if(!n)return null;let e=n.filter(Dy);return e.length==0?null:function(t){let i=Ny(t,e).map(Iy);return E3(i).pipe(Te(Ry))}}function Fy(n){return n!=null?zy(Py(n)):null}function my(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function ky(n){return n._rawValidators}function Vy(n){return n._rawAsyncValidators}function f5(n){return n?Array.isArray(n)?n:[n]:[]}function e3(n,e){return Array.isArray(n)?n.includes(e):n===e}function gy(n,e){let t=f5(e);return f5(n).forEach(r=>{e3(t,r)||t.push(r)}),t}function vy(n,e){return f5(e).filter(t=>!e3(n,t))}var t3=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Oy(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Fy(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Da=class extends t3{get formDirective(){return null}get path(){return null}},hr=class extends t3{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},n3=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},wF={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},qq=mt(pe({},wF),{"[class.ng-submitted]":"isSubmitted"}),Uy=(()=>{let e=class e extends n3{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(we(hr,2))},e.\u0275dir=$t({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&vs("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[ci]});let n=e;return n})(),Hy=(()=>{let e=class e extends n3{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(we(Da,10))},e.\u0275dir=$t({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&vs("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[ci]});let n=e;return n})();var hc="VALID",Qu="INVALID",Ta="PENDING",pc="DISABLED";function By(n){return(a3(n)?n.validators:n)||null}function EF(n){return Array.isArray(n)?Oy(n):n||null}function Gy(n,e){return(a3(e)?e.asyncValidators:n)||null}function AF(n){return Array.isArray(n)?Fy(n):n||null}function a3(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function TF(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new Q(1e3,"");if(!i[t])throw new Q(1001,"")}function DF(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new Q(1002,"")})}var i3=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===hc}get invalid(){return this.status===Qu}get pending(){return this.status==Ta}get disabled(){return this.status===pc}get enabled(){return this.status!==pc}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(gy(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(gy(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(vy(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(vy(e,this._rawAsyncValidators))}hasValidator(e){return e3(this._rawValidators,e)}hasAsyncValidator(e){return e3(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=Ta,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=pc,this.errors=null,this._forEachChild(i=>{i.disable(mt(pe({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(mt(pe({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=hc,this._forEachChild(i=>{i.enable(mt(pe({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(mt(pe({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===hc||this.status===Ta)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?pc:hc}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=Ta,this._hasOwnPendingAsyncValidator=!0;let t=Iy(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new Qt,this.statusChanges=new Qt}_calculateStatus(){return this._allControlsDisabled()?pc:this.errors?Qu:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ta)?Ta:this._anyControlsHaveStatus(Qu)?Qu:hc}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){a3(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=EF(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=AF(this._rawAsyncValidators)}},r3=class extends i3{constructor(e,t,i){super(By(t),Gy(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){DF(this,!0,e),Object.keys(e).forEach(i=>{TF(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,s)=>{i=t(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var jy=new Se("CallSetDisabledState",{providedIn:"root",factory:()=>d5}),d5="always";function IF(n,e){return[...e.path,n]}function yy(n,e,t=d5){h5(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),NF(n,e),LF(n,e),PF(n,e),RF(n,e)}function _y(n,e,t=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),o3(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function s3(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function RF(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function h5(n,e){let t=ky(n);e.validator!==null?n.setValidators(my(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=Vy(n);e.asyncValidator!==null?n.setAsyncValidators(my(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();s3(e._rawValidators,r),s3(e._rawAsyncValidators,r)}function o3(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=ky(n);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(t=!0,n.setValidators(s))}}if(e.asyncValidator!==null){let r=Vy(n);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(t=!0,n.setAsyncValidators(s))}}}let i=()=>{};return s3(e._rawValidators,i),s3(e._rawAsyncValidators,i),t}function NF(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Wy(n,e)})}function PF(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Wy(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function Wy(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function LF(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function OF(n,e){n==null,h5(n,e)}function zF(n,e){return o3(n,e)}function FF(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function kF(n){return Object.getPrototypeOf(n.constructor)===fF}function VF(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function UF(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(s=>{s.constructor===Sy?t=s:kF(s)?i=s:r=s}),r||i||t||null}function HF(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function by(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function xy(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Ia=class extends i3{constructor(e=null,t,i){super(By(t),Gy(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),a3(t)&&(t.nonNullable||t.initialValueIsDefault)&&(xy(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){by(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){by(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){xy(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var BF=n=>n instanceof Ia;var $y=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=$t({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let n=e;return n})();var GF=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Lt({type:e}),e.\u0275inj=Pt({});let n=e;return n})();var qy=new Se("NgModelWithFormControlWarning");var jF={provide:Da,useExisting:vo(()=>p5)},p5=(()=>{let e=class e extends Da{constructor(i,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new Qt,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(o3(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return yy(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){_y(i.control||null,i,!1),HF(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,VF(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,s=this.form.get(i.path);r!==s&&(_y(r||null,i),BF(s)&&(yy(s,i,this.callSetDisabledState),i.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);OF(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&zF(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){h5(this.form,this),this._oldForm&&o3(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(we(Ey,10),we(Ay,10),we(jy,8))},e.\u0275dir=$t({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&qn("submit",function(a){return s.onSubmit(a)})("reset",function(){return s.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[wr([jF]),ci,jn]});let n=e;return n})();var WF={provide:hr,useExisting:vo(()=>m5)},m5=(()=>{let e=class e extends hr{set isDisabled(i){}constructor(i,r,s,o,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new Qt,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=UF(this,o)}ngOnChanges(i){this._added||this._setUpControl(),FF(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return IF(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(we(Da,13),we(Ey,10),we(Ay,10),we(Cy,10),we(qy,8))},e.\u0275dir=$t({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[wr([WF]),ci,jn]});let n=e;return n})();var $F=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Lt({type:e}),e.\u0275inj=Pt({imports:[GF]});let n=e;return n})();var Xy=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:qy,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:jy,useValue:i.callSetDisabledState??d5}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Lt({type:e}),e.\u0275inj=Pt({imports:[$F]});let n=e;return n})();var Zy=(()=>{let e=class e{constructor(i){this.control=i,this.placeholder="",this.value="",this.onChange=()=>{},this.onTouched=()=>{},this.control.valueAccessor=this}writeValue(i){this.value=i}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}updateValue(i){let r=i.target;this.onChange(r.value)}};e.\u0275fac=function(r){return new(r||e)(we(hr,10))},e.\u0275cmp=Tt({type:e,selectors:[["app-input-field"]],inputs:{placeholder:"placeholder"},standalone:!0,features:[en],decls:2,vars:1,consts:[[1,"input-container"],["type","text",3,"placeholder","change"]],template:function(r,s){r&1&&(st(0,"div",0)(1,"input",1),qn("change",function(a){return s.updateValue(a)}),ot()()),r&2&&(Ot(1),qt("placeholder",s.placeholder))},styles:["input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active{-webkit-box-shadow:0 0 0 30px #FFF inset!important;box-shadow:0 0 0 30px #fff inset!important}.input-container[_ngcontent-%COMP%]{margin-top:1rem}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:2.5rem;border:3px solid transparent;width:70%;border-radius:.5rem;padding-left:1rem}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;border:3px solid #726890}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{font-family:Tektur;color:#4b5156}"]});let n=e;return n})();var Yy=(()=>{let e=class e{constructor(i,r){this.control=i,this.breakpointObserver=r,this.placeholder="",this.isHandset$=this.breakpointObserver.observe(Go.Handset).pipe(Te(s=>s.matches)),this.value="",this.onChange=()=>{},this.onTouched=()=>{},this.control.valueAccessor=this}writeValue(i){this.value=i}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}updateValue(i){let r=i.target;this.onChange(r.value)}};e.\u0275fac=function(r){return new(r||e)(we(hr,10),we(Pr))},e.\u0275cmp=Tt({type:e,selectors:[["app-large-text"]],inputs:{placeholder:"placeholder"},standalone:!0,features:[en],decls:3,vars:4,consts:[[1,"container"],[3,"ngClass","placeholder","change"]],template:function(r,s){r&1&&(st(0,"div",0)(1,"textarea",1),qn("change",function(a){return s.updateValue(a)}),Mo(2,"async"),ot()()),r&2&&(Ot(1),qt("ngClass",Co(2,2,s.isHandset$)?"content content-mobile":"content")("placeholder",s.placeholder))},dependencies:[Ti,Eo,Ao],styles:[".container[_ngcontent-%COMP%]{margin-top:1rem}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:30.5rem;height:15rem;resize:none;border-radius:.5rem;padding:1rem}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]::placeholder{font-family:Tektur;color:#4b5156}.container[_ngcontent-%COMP%]   .content-mobile[_ngcontent-%COMP%]{width:21rem;height:12rem}"]});let n=e;return n})();var Ky=(()=>{let e=class e{constructor(){this.label=""}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Tt({type:e,selectors:[["app-button"]],inputs:{label:"label"},standalone:!0,features:[en],decls:2,vars:1,template:function(r,s){r&1&&(st(0,"button"),Gt(1),ot()),r&2&&(Ot(1),qi(s.label))},styles:["button[_ngcontent-%COMP%]{margin-top:1rem;height:2.5rem;width:7rem;border-radius:.5rem;cursor:pointer;background-color:#a5b89e;border:none;color:#fffcf7;font-family:Tektur}button[_ngcontent-%COMP%]:hover{background-color:#7e8c79}"]});let n=e;return n})();var Jy={production:!0,baseUrl:"https://nejb-portfolio.onrender.com/"};var c3=(()=>{let e=class e{constructor(i){this.http=i,this.baseUrl=Jy.baseUrl}sendEmail(i){let r=this.baseUrl+"send-email";return this.http.post(r,i).pipe(Te(s=>{console.log("res",s)}))}};e.\u0275fac=function(r){return new(r||e)(se(G4))},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Qy=(()=>{let e=class e{constructor(i){this.sendEmailHttpService=i,this.errorMessage="",this.contactForm=new r3({name:new Ia("",{validators:[Zs.required]}),email:new Ia("",{validators:[Zs.required,Zs.email]}),subject:new Ia(""),message:new Ia("",{validators:[Zs.required]})})}sendEmail(){if(console.log("called?",this.contactForm),this.contactForm.valid){this.errorMessage="";let i={name:this.contactForm.controls.name.value,email:this.contactForm.controls.email.value,subject:this.contactForm.controls.subject.value,message:this.contactForm.controls.message.value};this.sendEmailHttpService.sendEmail(i).subscribe(r=>{console.log("res",r)})}else this.errorMessage="Name, email, and message fields are required."}};e.\u0275fac=function(r){return new(r||e)(we(c3))},e.\u0275cmp=Tt({type:e,selectors:[["app-contact"]],standalone:!0,features:[wr([c3]),en],decls:8,vars:1,consts:[[1,"no-margin-bottom"],[3,"formGroup"],["type","text","placeholder","Name","formControlName","name"],["type","text","placeholder","Email","formControlName","email"],["type","text","placeholder","Subject","formControlName","subject"],["placeholder","Message","formControlName","message"],["label","Submit",3,"click"]],template:function(r,s){r&1&&(st(0,"h1",0),Gt(1,"Contact"),ot(),st(2,"form",1),_n(3,"app-input-field",2)(4,"app-input-field",3)(5,"app-input-field",4)(6,"app-large-text",5),st(7,"app-button",6),qn("click",function(){return s.sendEmail()}),ot()()),r&2&&(Ot(2),qt("formGroup",s.contactForm))},dependencies:[Xy,$y,Uy,Hy,p5,m5,Zy,Yy,Ky],styles:["h1[_ngcontent-%COMP%]{color:#fffcf7;line-height:80px;font-size:55px;font-family:Tektur}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}app-button[_ngcontent-%COMP%]{align-self:flex-end;margin-bottom:5rem}"]});let n=e;return n})();var e_=(()=>{let e=class e{constructor(i){this.breakpointObserver=i,this.scene=new Zu,this.camera=new Mn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new uc,this.geometry=new $s(1,1,1),this.material=new Ma({color:65280}),this.cube=new Qn(this.geometry,this.material),this.isHandset$=this.breakpointObserver.observe(Go.Handset).pipe(Te(r=>r.matches))}ngOnInit(){}animate(){requestAnimationFrame(this.animate),this.cube.rotation.x+=.25,this.cube.rotation.y+=.4,this.renderer.render(this.scene,this.camera)}};e.\u0275fac=function(r){return new(r||e)(we(Pr))},e.\u0275cmp=Tt({type:e,selectors:[["app-root"]],standalone:!0,features:[en],decls:7,vars:3,consts:[[3,"ngClass"],[1,"content"]],template:function(r,s){r&1&&(st(0,"div",0),Mo(1,"async"),st(2,"div",1),_n(3,"app-homepage"),ot(),st(4,"div",1),_n(5,"app-about")(6,"app-contact"),ot()()),r&2&&qt("ngClass",Co(1,1,s.isHandset$)?"container-mobile":"container")},dependencies:[Ti,Eo,Ao,ou,py,Qy],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.container-mobile[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.container-mobile[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{max-width:90%}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:6rem;height:100vh;max-width:30%}.container[_ngcontent-%COMP%]   .content-mobile[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:2rem;max-width:85%}"]});let n=e;return n})();P7(e_,Sg).catch(n=>console.error(n));
