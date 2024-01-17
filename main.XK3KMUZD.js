import{a as de,b as gt,c as Gp}from"./chunk-YGFNLDZQ.js";function Te(n){return typeof n=="function"}function zr(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var ba=zr(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function uo(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Lt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Te(i))try{i()}catch(s){e=s instanceof ba?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Wp(s)}catch(o){e=e??[],o instanceof ba?e=[...e,...o.errors]:e.push(o)}}if(e)throw new ba(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Wp(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&uo(t,e)}remove(e){let{_finalizers:t}=this;t&&uo(t,e),e instanceof n&&e._removeParent(this)}};Lt.EMPTY=(()=>{let n=new Lt;return n.closed=!0,n})();var mu=Lt.EMPTY;function Ea(n){return n instanceof Lt||n&&"closed"in n&&Te(n.remove)&&Te(n.add)&&Te(n.unsubscribe)}function Wp(n){Te(n)?n():n.unsubscribe()}var Pn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Gr={setTimeout(n,e,...t){let{delegate:i}=Gr;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Gr;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function wa(n){Gr.setTimeout(()=>{let{onUnhandledError:e}=Pn;if(e)e(n);else throw n})}function ho(){}var jp=(()=>gu("C",void 0,void 0))();function $p(n){return gu("E",void 0,n)}function qp(n){return gu("N",n,void 0)}function gu(n,e,t){return{kind:n,value:e,error:t}}var nr=null;function Wr(n){if(Pn.useDeprecatedSynchronousErrorHandling){let e=!nr;if(e&&(nr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=nr;if(nr=null,t)throw i}}else n()}function Xp(n){Pn.useDeprecatedSynchronousErrorHandling&&nr&&(nr.errorThrown=!0,nr.error=n)}var ir=class extends Lt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Ea(e)&&e.add(this)):this.destination=Qx}static create(e,t,i){return new ai(e,t,i)}next(e){this.isStopped?yu(qp(e),this):this._next(e)}error(e){this.isStopped?yu($p(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?yu(jp,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Jx=Function.prototype.bind;function vu(n,e){return Jx.call(n,e)}var _u=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Sa(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Sa(i)}else Sa(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Sa(t)}}},ai=class extends ir{constructor(e,t,i){super();let r;if(Te(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Pn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&vu(e.next,s),error:e.error&&vu(e.error,s),complete:e.complete&&vu(e.complete,s)}):r=e}this.destination=new _u(r)}};function Sa(n){Pn.useDeprecatedSynchronousErrorHandling?Xp(n):wa(n)}function Kx(n){throw n}function yu(n,e){let{onStoppedNotification:t}=Pn;t&&Gr.setTimeout(()=>t(n,e))}var Qx={closed:!0,next:ho,error:Kx,complete:ho};var jr=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")();function Qt(n){return n}function xu(...n){return Mu(n)}function Mu(n){return n.length===0?Qt:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var et=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=tM(t)?t:new ai(t,i,r);return Wr(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Yp(i),new i((r,s)=>{let o=new ai({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[jr](){return this}pipe(...t){return Mu(t)(this)}toPromise(t){return t=Yp(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Yp(n){var e;return(e=n??Pn.Promise)!==null&&e!==void 0?e:Promise}function eM(n){return n&&Te(n.next)&&Te(n.error)&&Te(n.complete)}function tM(n){return n&&n instanceof ir||eM(n)&&Ea(n)}function bu(n){return Te(n?.lift)}function je(n){return e=>{if(bu(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function $e(n,e,t,i,r){return new Eu(n,e,t,i,r)}var Eu=class extends ir{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function $r(){return je((n,e)=>{let t=null;n._refCount++;let i=$e(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var qr=class extends et{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,bu(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Lt;let t=this.getSubject();e.add(this.source.subscribe($e(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Lt.EMPTY)}return e}refCount(){return $r()(this)}};var Zp=zr(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var en=(()=>{class n extends et{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Ca(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Zp}next(t){Wr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Wr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Wr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?mu:(this.currentObservers=null,s.push(t),new Lt(()=>{this.currentObservers=null,uo(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new et;return t.source=this,t}}return n.create=(e,t)=>new Ca(e,t),n})(),Ca=class extends en{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:mu}};var Ht=class extends en{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var an=new et(n=>n.complete());function Jp(n){return n&&Te(n.schedule)}function wu(n){return n[n.length-1]}function Aa(n){return Te(wu(n))?n.pop():void 0}function Xn(n){return Jp(wu(n))?n.pop():void 0}function Kp(n,e){return typeof wu(n)=="number"?n.pop():e}function em(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Qp(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function rr(n){return this instanceof rr?(this.v=n,this):new rr(n)}function tm(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(h){i[h]&&(r[h]=function(p){return new Promise(function(g,v){s.push([h,p,g,v])>1||a(h,p)})})}function a(h,p){try{c(i[h](p))}catch(g){d(s[0][3],g)}}function c(h){h.value instanceof rr?Promise.resolve(h.value.v).then(l,u):d(s[0][2],h)}function l(h){a("next",h)}function u(h){a("throw",h)}function d(h,p){h(p),s.shift(),s.length&&a(s[0][0],s[0][1])}}function nm(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Qp=="function"?Qp(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Ta=n=>n&&typeof n.length=="number"&&typeof n!="function";function Da(n){return Te(n?.then)}function Ia(n){return Te(n[jr])}function Ra(n){return Symbol.asyncIterator&&Te(n?.[Symbol.asyncIterator])}function Pa(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function nM(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Na=nM();function Oa(n){return Te(n?.[Na])}function La(n){return tm(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield rr(t.read());if(r)return yield rr(void 0);yield yield rr(i)}}finally{t.releaseLock()}})}function Fa(n){return Te(n?.getReader)}function vt(n){if(n instanceof et)return n;if(n!=null){if(Ia(n))return iM(n);if(Ta(n))return rM(n);if(Da(n))return sM(n);if(Ra(n))return im(n);if(Oa(n))return oM(n);if(Fa(n))return aM(n)}throw Pa(n)}function iM(n){return new et(e=>{let t=n[jr]();if(Te(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function rM(n){return new et(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function sM(n){return new et(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,wa)})}function oM(n){return new et(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function im(n){return new et(e=>{cM(n,e).catch(t=>e.error(t))})}function aM(n){return im(La(n))}function cM(n,e){var t,i,r,s;return em(this,void 0,void 0,function*(){try{for(t=nm(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function cn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Ua(n,e=0){return je((t,i)=>{t.subscribe($e(i,r=>cn(i,n,()=>i.next(r),e),()=>cn(i,n,()=>i.complete(),e),r=>cn(i,n,()=>i.error(r),e)))})}function ka(n,e=0){return je((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function rm(n,e){return vt(n).pipe(ka(e),Ua(e))}function sm(n,e){return vt(n).pipe(ka(e),Ua(e))}function om(n,e){return new et(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function am(n,e){return new et(t=>{let i;return cn(t,e,()=>{i=n[Na](),cn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Te(i?.return)&&i.return()})}function Ba(n,e){if(!n)throw new Error("Iterable cannot be null");return new et(t=>{cn(t,e,()=>{let i=n[Symbol.asyncIterator]();cn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function cm(n,e){return Ba(La(n),e)}function lm(n,e){if(n!=null){if(Ia(n))return rm(n,e);if(Ta(n))return om(n,e);if(Da(n))return sm(n,e);if(Ra(n))return Ba(n,e);if(Oa(n))return am(n,e);if(Fa(n))return cm(n,e)}throw Pa(n)}function Et(n,e){return e?lm(n,e):vt(n)}function De(...n){let e=Xn(n);return Et(n,e)}function sr(n,e){let t=Te(n)?n:()=>n,i=r=>r.error(t());return new et(e?r=>e.schedule(i,0,r):i)}function Su(n){return!!n&&(n instanceof et||Te(n.lift)&&Te(n.subscribe))}var ci=zr(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function nt(n,e){return je((t,i)=>{let r=0;t.subscribe($e(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:lM}=Array;function uM(n,e){return lM(e)?n(...e):n(e)}function Va(n){return nt(e=>uM(n,e))}var{isArray:dM}=Array,{getPrototypeOf:hM,prototype:fM,keys:pM}=Object;function Ha(n){if(n.length===1){let e=n[0];if(dM(e))return{args:e,keys:null};if(mM(e)){let t=pM(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function mM(n){return n&&typeof n=="object"&&hM(n)===fM}function za(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Ga(...n){let e=Xn(n),t=Aa(n),{args:i,keys:r}=Ha(n);if(i.length===0)return Et([],e);let s=new et(gM(i,e,r?o=>za(r,o):Qt));return t?s.pipe(Va(t)):s}function gM(n,e,t=Qt){return i=>{um(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)um(e,()=>{let l=Et(n[c],e),u=!1;l.subscribe($e(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function um(n,e,t){n?cn(t,n,e):e()}function dm(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,h=()=>{d&&!c.length&&!l&&e.complete()},p=v=>l<i?g(v):c.push(v),g=v=>{s&&e.next(v),l++;let m=!1;vt(t(v,u++)).subscribe($e(e,f=>{r?.(f),s?p(f):e.next(f)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let f=c.shift();o?cn(e,o,()=>g(f)):g(f)}h()}catch(f){e.error(f)}}))};return n.subscribe($e(e,p,()=>{d=!0,h()})),()=>{a?.()}}function Ct(n,e,t=1/0){return Te(e)?Ct((i,r)=>nt((s,o)=>e(i,s,r,o))(vt(n(i,r))),t):(typeof e=="number"&&(t=e),je((i,r)=>dm(i,r,n,t)))}function fo(n=1/0){return Ct(Qt,n)}function hm(){return fo(1)}function Xr(...n){return hm()(Et(n,Xn(n)))}function Wa(n){return new et(e=>{vt(n()).subscribe(e)})}function Cu(...n){let e=Aa(n),{args:t,keys:i}=Ha(n),r=new et(s=>{let{length:o}=t;if(!o){s.complete();return}let a=new Array(o),c=o,l=o;for(let u=0;u<o;u++){let d=!1;vt(t[u]).subscribe($e(s,h=>{d||(d=!0,l--),a[u]=h},()=>c--,void 0,()=>{(!c||!d)&&(l||s.next(i?za(i,a):a),s.complete())}))}});return e?r.pipe(Va(e)):r}function Au(...n){let e=Xn(n),t=Kp(n,1/0),i=n;return i.length?i.length===1?vt(i[0]):fo(t)(Et(i,e)):an}function Nn(n,e){return je((t,i)=>{let r=0;t.subscribe($e(i,s=>n.call(e,s,r++)&&i.next(s)))})}function li(n){return je((e,t)=>{let i=null,r=!1,s;i=e.subscribe($e(t,void 0,void 0,o=>{s=vt(n(o,li(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function fm(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe($e(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function Yr(n,e){return Te(e)?Ct(n,e,1):Ct(n,1)}function Ii(n){return je((e,t)=>{let i=!1;e.subscribe($e(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function ui(n){return n<=0?()=>an:je((e,t)=>{let i=0;e.subscribe($e(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function Tu(n){return nt(()=>n)}function Du(n,e=Qt){return n=n??vM,je((t,i)=>{let r,s=!0;t.subscribe($e(i,o=>{let a=e(o);(s||!n(r,a))&&(s=!1,r=a,i.next(o))}))})}function vM(n,e){return n===e}function ja(n=yM){return je((e,t)=>{let i=!1;e.subscribe($e(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function yM(){return new ci}function po(n){return je((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Yn(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Nn((r,s)=>n(r,s,i)):Qt,ui(1),t?Ii(e):ja(()=>new ci))}function Zr(n){return n<=0?()=>an:je((e,t)=>{let i=[];e.subscribe($e(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Iu(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Nn((r,s)=>n(r,s,i)):Qt,Zr(1),t?Ii(e):ja(()=>new ci))}function Ru(n,e){return je(fm(n,e,arguments.length>=2,!0))}function $a(n={}){let{connector:e=()=>new en,resetOnError:t=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=n;return s=>{let o,a,c,l=0,u=!1,d=!1,h=()=>{a?.unsubscribe(),a=void 0},p=()=>{h(),o=c=void 0,u=d=!1},g=()=>{let v=o;p(),v?.unsubscribe()};return je((v,m)=>{l++,!d&&!u&&h();let f=c=c??e();m.add(()=>{l--,l===0&&!d&&!u&&(a=Pu(g,r))}),f.subscribe(m),!o&&l>0&&(o=new ai({next:w=>f.next(w),error:w=>{d=!0,h(),a=Pu(p,t,w),f.error(w)},complete:()=>{u=!0,h(),a=Pu(p,i),f.complete()}}),vt(v).subscribe(o))})(s)}}function Pu(n,e,...t){if(e===!0){n();return}if(e===!1)return;let i=new ai({next:()=>{i.unsubscribe(),n()}});return vt(e(...t)).subscribe(i)}function Nu(...n){let e=Xn(n);return je((t,i)=>{(e?Xr(n,t,e):Xr(n,t)).subscribe(i)})}function vn(n,e){return je((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe($e(i,c=>{r?.unsubscribe();let l=0,u=s++;vt(n(c,u)).subscribe(r=$e(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function Ou(n){return je((e,t)=>{vt(n).subscribe($e(t,()=>t.complete(),ho)),!t.closed&&e.subscribe(t)})}function Ft(n,e,t){let i=Te(n)||e||t?{next:n,error:e,complete:t}:n;return i?je((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe($e(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Qt}function ht(n){for(let e in n)if(n[e]===ht)return e;throw Error("Could not find renamed property on target object.")}function qa(n,e){for(let t in e)e.hasOwnProperty(t)&&!n.hasOwnProperty(t)&&(n[t]=e[t])}function nn(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(nn).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function pm(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var _M=ht({__forward_ref__:ht});function cs(n){return n.__forward_ref__=cs,n.toString=function(){return nn(this())},n}function tn(n){return Jm(n)?n():n}function Jm(n){return typeof n=="function"&&n.hasOwnProperty(_M)&&n.__forward_ref__===cs}function Km(n){return n&&!!n.\u0275providers}var xM="https://g.co/ng/security#xss",ye=class extends Error{constructor(e,t){super(Ld(e,t)),this.code=e}};function Ld(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}function Qm(n){return typeof n=="string"?n:n==null?"":String(n)}function MM(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Qm(n)}function bM(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new ye(-200,`Circular dependency in DI detected for ${n}${t}`)}function Fd(n,e){let t=e?` in ${e}`:"";throw new ye(-201,!1)}function EM(n,e){n==null&&wM(e,n,null,"!=")}function wM(n,e,t,i){throw new Error(`ASSERTION ERROR: ${n}`+(i==null?"":` [Expected=> ${t} ${i} ${e} <=Actual]`))}function Fe(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Oi(n){return{providers:n.providers||[],imports:n.imports||[]}}function Ec(n){return mm(n,tg)||mm(n,ng)}function eg(n){return Ec(n)!==null}function mm(n,e){return n.hasOwnProperty(e)?n[e]:null}function SM(n){let e=n&&(n[tg]||n[ng]);return e||null}function gm(n){return n&&(n.hasOwnProperty(vm)||n.hasOwnProperty(CM))?n[vm]:null}var tg=ht({\u0275prov:ht}),vm=ht({\u0275inj:ht}),ng=ht({ngInjectableDef:ht}),CM=ht({ngInjectorDef:ht}),qe=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(qe||{}),Zu;function AM(){return Zu}function Zn(n){let e=Zu;return Zu=n,e}function ig(n,e,t){let i=Ec(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&qe.Optional)return null;if(e!==void 0)return e;Fd(nn(n),"Injector")}var go=globalThis;var Le=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Fe({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};var TM={},bo=TM,Ju="__NG_DI_FLAG__",nc="ngTempTokenPath",DM="ngTokenPath",IM=/\n/gm,RM="\u0275",ym="__source",vo;function Jr(n){let e=vo;return vo=n,e}function PM(n,e=qe.Default){if(vo===void 0)throw new ye(-203,!1);return vo===null?ig(n,void 0,e):vo.get(n,e&qe.Optional?null:void 0,e)}function Ke(n,e=qe.Default){return(AM()||PM)(tn(n),e)}function be(n,e=qe.Default){return Ke(n,wc(e))}function wc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function Ku(n){let e=[];for(let t=0;t<n.length;t++){let i=tn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new ye(900,!1);let r,s=qe.Default;for(let o=0;o<i.length;o++){let a=i[o],c=NM(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Ke(r,s))}else e.push(Ke(i))}return e}function rg(n,e){return n[Ju]=e,n.prototype[Ju]=e,n}function NM(n){return n[Ju]}function OM(n,e,t,i){let r=n[nc];throw e[ym]&&r.unshift(e[ym]),n.message=LM(`
`+n.message,r,t,i),n[DM]=r,n[nc]=null,n}function LM(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==RM?n.slice(2):n;let r=nn(e);if(Array.isArray(e))r=e.map(nn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):nn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(IM,`
  `)}`}function Po(n){return{toString:n}.toString()}var sg=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(sg||{}),Qn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(Qn||{}),ns={},yn=[],FM=ht({\u0275cmp:ht}),UM=ht({\u0275dir:ht}),kM=ht({\u0275pipe:ht}),BM=ht({\u0275mod:ht}),ic=ht({\u0275fac:ht}),yo=ht({__NG_ELEMENT_ID__:ht}),_m=ht({__NG_ENV_ID__:ht});function og(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function Qu(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];HM(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function VM(n){return n===3||n===4||n===6}function HM(n){return n.charCodeAt(0)===64}function Eo(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?xm(n,t,r,null,e[++i]):xm(n,t,r,null,null))}}return n}function xm(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var ag="ng-template";function zM(n,e,t){let i=0,r=!0;for(;i<n.length;){let s=n[i++];if(typeof s=="string"&&r){let o=n[i++];if(t&&s==="class"&&og(o.toLowerCase(),e,0)!==-1)return!0}else if(s===1){for(;i<n.length&&typeof(s=n[i++])=="string";)if(s.toLowerCase()===e)return!0;return!1}else typeof s=="number"&&(r=!1)}return!1}function cg(n){return n.type===4&&n.value!==ag}function GM(n,e,t){let i=n.type===4&&!t?ag:n.value;return e===i}function WM(n,e,t){let i=4,r=n.attrs||[],s=qM(r),o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!On(i)&&!On(c))return!1;if(o&&On(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!GM(n,c,t)||c===""&&e.length===1){if(On(i))return!1;o=!0}}else{let l=i&8?c:e[++a];if(i&8&&n.attrs!==null){if(!zM(n.attrs,l,t)){if(On(i))return!1;o=!0}continue}let u=i&8?"class":c,d=jM(u,r,cg(n),t);if(d===-1){if(On(i))return!1;o=!0;continue}if(l!==""){let h;d>s?h="":h=r[d+1].toLowerCase();let p=i&8?h:null;if(p&&og(p,l,0)!==-1||i&2&&l!==h){if(On(i))return!1;o=!0}}}}return On(i)||o}function On(n){return(n&1)===0}function jM(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return XM(e,n)}function $M(n,e,t=!1){for(let i=0;i<e.length;i++)if(WM(n,e[i],t))return!0;return!1}function qM(n){for(let e=0;e<n.length;e++){let t=n[e];if(VM(t))return e}return n.length}function XM(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Mm(n,e){return n?":not("+e.trim()+")":e}function YM(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!On(o)&&(e+=Mm(s,r),r=""),i=o,s=s||!On(i);t++}return r!==""&&(e+=Mm(s,r)),e}function ZM(n){return n.map(YM).join(",")}function JM(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!On(r))break;r=s}i++}return{attrs:e,classes:t}}function Ut(n){return Po(()=>{let e=fg(n),t=gt(de({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===sg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Qn.Emulated,styles:n.styles||yn,_:null,schemas:n.schemas||null,tView:null,id:""});pg(t);let i=n.dependencies;return t.directiveDefs=Em(i,!1),t.pipeDefs=Em(i,!0),t.id=eb(t),t})}function KM(n){return cr(n)||lg(n)}function QM(n){return n!==null}function Li(n){return Po(()=>({type:n.type,bootstrap:n.bootstrap||yn,declarations:n.declarations||yn,imports:n.imports||yn,exports:n.exports||yn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function bm(n,e){if(n==null)return ns;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s=r;Array.isArray(r)&&(s=r[1],r=r[0]),t[r]=i,e&&(e[r]=s)}return t}function fn(n){return Po(()=>{let e=fg(n);return pg(e),e})}function cr(n){return n[FM]||null}function lg(n){return n[UM]||null}function ug(n){return n[kM]||null}function dg(n){let e=cr(n)||lg(n)||ug(n);return e!==null?e.standalone:!1}function hg(n,e){let t=n[BM]||null;if(!t&&e===!0)throw new Error(`Type ${nn(n)} does not have '\u0275mod' property.`);return t}function fg(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||ns,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||yn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:bm(n.inputs,e),outputs:bm(n.outputs)}}function pg(n){n.features?.forEach(e=>e(n))}function Em(n,e){if(!n)return null;let t=e?ug:KM;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(QM)}function eb(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483647+1,"c"+e}var fi=0,Xe=1,Je=2,At=3,Ln=4,mo=5,Fn=6,wo=7,xn=8,is=9,So=10,zt=11,Co=12,wm=13,ls=14,ei=15,Sc=16,Kr=17,Ao=18,Cc=19,mg=20,_o=21,ed=22,xo=23,Mo=24,Ri=25;var gg=1,vg=2,lr=7,rc=8,sc=9;var _n=11;function or(n){return Array.isArray(n)&&typeof n[gg]=="object"}function pi(n){return Array.isArray(n)&&n[gg]===!0}function yg(n){return(n.flags&4)!==0}function Ac(n){return n.componentOffset>-1}function Ud(n){return(n.flags&1)===1}function Pi(n){return!!n.template}function tb(n){return(n[Je]&512)!==0}function rs(n,e){let t=n.hasOwnProperty(ic);return t?n[ic]:null}var Sm=null,Lu=!1;function ti(n){let e=Sm;return Sm=n,e}var _g={version:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{}};function nb(n){if(!(Hd(n)&&!n.dirty)){if(!n.producerMustRecompute(n)&&!Mg(n)){n.dirty=!1;return}n.producerRecomputeValue(n),n.dirty=!1}}function ib(n){if(n.liveConsumerNode===void 0)return;let e=Lu;Lu=!0;try{for(let t of n.liveConsumerNode)t.dirty||xg(t)}finally{Lu=e}}function xg(n){n.dirty=!0,ib(n),n.consumerMarkedDirty?.(n)}function kd(n){return n&&(n.nextProducerIndex=0),ti(n)}function Bd(n,e){if(ti(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Hd(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Vd(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Mg(n){oc(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(nb(t),i!==t.version))return!0}return!1}function Cm(n){if(oc(n),Hd(n))for(let e=0;e<n.producerNode.length;e++)Vd(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Vd(n,e){if(rb(n),oc(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)Vd(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];oc(r),r.producerIndexOfThis[i]=e}}function Hd(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function oc(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function rb(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function sb(){throw new Error}var ob=sb;function ab(n){ob=n}function cb(n,e,t){let i=Object.create(lb);t&&(i.consumerAllowSignalWrites=!0),i.fn=n,i.schedule=e;let r=o=>{i.cleanupFn=o},s=()=>{if(i.dirty=!1,i.hasRun&&!Mg(i))return;i.hasRun=!0;let o=kd(i);try{i.cleanupFn(),i.cleanupFn=bg,i.fn(r)}finally{Bd(i,o)}};return i.ref={notify:()=>xg(i),run:s,cleanup:()=>i.cleanupFn()},i.ref}var bg=()=>{},lb=(()=>gt(de({},_g),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!1,consumerMarkedDirty:n=>{n.schedule(n.ref)},hasRun:!1,cleanupFn:bg}))();var td=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function gr(){return Eg}function Eg(n){return n.type.prototype.ngOnChanges&&(n.setInput=db),ub}gr.ngInherit=!0;function ub(){let n=Sg(this),e=n?.current;if(e){let t=n.previous;if(t===ns)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function db(n,e,t,i){let r=this.declaredInputs[t],s=Sg(n)||hb(n,{previous:ns,current:null}),o=s.current||(s.current={}),a=s.previous,c=a[r];o[r]=new td(c&&c.currentValue,e,a===ns),n[i]=e}var wg="__ngSimpleChanges__";function Sg(n){return n[wg]||null}function hb(n,e){return n[wg]=e}var Am=null;var Jn=function(n,e,t){Am?.(n,e,t)},fb="svg",pb="math";function ni(n){for(;Array.isArray(n);)n=n[fi];return n}function Cg(n,e){return ni(e[n])}function Un(n,e){return ni(e[n.index])}function Ag(n,e){return n.data[e]}function Fi(n,e){let t=e[n];return or(t)?t:t[fi]}function mb(n){return(n[Je]&128)===128}function gb(n){return pi(n[At])}function ac(n,e){return e==null?null:n[e]}function Tg(n){n[Kr]=0}function vb(n){n[Je]&1024||(n[Je]|=1024,Ig(n,1))}function Dg(n){n[Je]&1024&&(n[Je]&=-1025,Ig(n,-1))}function Ig(n,e){let t=n[At];if(t===null)return;t[mo]+=e;let i=t;for(t=t[At];t!==null&&(e===1&&i[mo]===1||e===-1&&i[mo]===0);)t[mo]+=e,i=t,t=t[At]}function yb(n,e){if((n[Je]&256)===256)throw new ye(911,!1);n[_o]===null&&(n[_o]=[]),n[_o].push(e)}var Qe={lFrame:Vg(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function _b(){return Qe.lFrame.elementDepthCount}function xb(){Qe.lFrame.elementDepthCount++}function Mb(){Qe.lFrame.elementDepthCount--}function Rg(){return Qe.bindingsEnabled}function bb(){return Qe.skipHydrationRootTNode!==null}function Eb(n){return Qe.skipHydrationRootTNode===n}function wb(){Qe.skipHydrationRootTNode=null}function Dt(){return Qe.lFrame.lView}function ii(){return Qe.lFrame.tView}function Pg(n){return Qe.lFrame.contextLView=n,n[xn]}function Ng(n){return Qe.lFrame.contextLView=null,n}function bn(){let n=Og();for(;n!==null&&n.type===64;)n=n.parent;return n}function Og(){return Qe.lFrame.currentTNode}function Sb(){let n=Qe.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function No(n,e){let t=Qe.lFrame;t.currentTNode=n,t.isParent=e}function Lg(){return Qe.lFrame.isParent}function Cb(){Qe.lFrame.isParent=!1}function Ab(n){return Qe.lFrame.bindingIndex=n}function Fg(){return Qe.lFrame.bindingIndex++}function Tb(n){let e=Qe.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function Db(){return Qe.lFrame.inI18n}function Ib(n,e){let t=Qe.lFrame;t.bindingIndex=t.bindingRootIndex=n,nd(e)}function Rb(){return Qe.lFrame.currentDirectiveIndex}function nd(n){Qe.lFrame.currentDirectiveIndex=n}function Pb(n){let e=Qe.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function Ug(n){Qe.lFrame.currentQueryIndex=n}function Nb(n){let e=n[Xe];return e.type===2?e.declTNode:e.type===1?n[Fn]:null}function kg(n,e,t){if(t&qe.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&qe.Host);)if(r=Nb(s),r===null||(s=s[ls],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Qe.lFrame=Bg();return i.currentTNode=e,i.lView=n,!0}function zd(n){let e=Bg(),t=n[Xe];Qe.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Bg(){let n=Qe.lFrame,e=n===null?null:n.child;return e===null?Vg(n):e}function Vg(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Hg(){let n=Qe.lFrame;return Qe.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var zg=Hg;function Gd(){let n=Hg();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Ob(n){return(Qe.lFrame.contextLView=Lb(n,Qe.lFrame.contextLView))[xn]}function Lb(n,e){for(;n>0;)e=e[ls],n--;return e}function us(){return Qe.lFrame.selectedIndex}function ur(n){Qe.lFrame.selectedIndex=n}function Fb(){let n=Qe.lFrame;return Ag(n.tView,n.selectedIndex)}function Ub(){return Qe.lFrame.currentNamespace}var Gg=!0;function Wd(){return Gg}function jd(n){Gg=n}function kb(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=Eg(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function $d(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Ja(n,e,t){Wg(n,e,3,t)}function Ka(n,e,t,i){(n[Je]&3)===t&&Wg(n,e,t,i)}function Fu(n,e){let t=n[Je];(t&3)===e&&(t&=8191,t+=1,n[Je]=t)}function Wg(n,e,t,i){let r=i!==void 0?n[Kr]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Kr]+=65536),(a<s||s==-1)&&(Bb(n,t,e,c),n[Kr]=(n[Kr]&4294901760)+c+2),c++}function Tm(n,e){Jn(4,n,e);let t=ti(null);try{e.call(n)}finally{ti(t),Jn(5,n,e)}}function Bb(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Je]>>13<n[Kr]>>16&&(n[Je]&3)===e&&(n[Je]+=8192,Tm(a,s)):Tm(a,s)}var ts=-1,dr=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function Vb(n){return n instanceof dr}function Hb(n){return(n.flags&8)!==0}function zb(n){return(n.flags&16)!==0}function jg(n){return n!==ts}function cc(n){let e=n&32767;return n&32767}function Gb(n){return n>>16}function lc(n,e){let t=Gb(n),i=e;for(;t>0;)i=i[ls],t--;return i}var id=!0;function Dm(n){let e=id;return id=n,e}var Wb=256,$g=Wb-1,qg=5,jb=0,Kn={};function $b(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(yo)&&(i=t[yo]),i==null&&(i=t[yo]=jb++);let r=i&$g,s=1<<r;e.data[n+(r>>qg)]|=s}function uc(n,e){let t=Xg(n,e);if(t!==-1)return t;let i=e[Xe];i.firstCreatePass&&(n.injectorIndex=e.length,Uu(i.data,n),Uu(e,null),Uu(i.blueprint,null));let r=qd(n,e),s=n.injectorIndex;if(jg(r)){let o=cc(r),a=lc(r,e),c=a[Xe].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Uu(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Xg(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function qd(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Qg(r),i===null)return ts;if(t++,r=r[ls],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return ts}function rd(n,e,t){$b(n,e,t)}function Yg(n,e,t){if(t&qe.Optional||n!==void 0)return n;Fd(e,"NodeInjector")}function Zg(n,e,t,i){if(t&qe.Optional&&i===void 0&&(i=null),!(t&(qe.Self|qe.Host))){let r=n[is],s=Zn(void 0);try{return r?r.get(e,i,t&qe.Optional):ig(e,i,t&qe.Optional)}finally{Zn(s)}}return Yg(i,e,t)}function Jg(n,e,t,i=qe.Default,r){if(n!==null){if(e[Je]&2048&&!(i&qe.Self)){let o=Jb(n,e,t,i,Kn);if(o!==Kn)return o}let s=Kg(n,e,t,i,Kn);if(s!==Kn)return s}return Zg(e,t,i,r)}function Kg(n,e,t,i,r){let s=Yb(t);if(typeof s=="function"){if(!kg(e,n,i))return i&qe.Host?Yg(r,t,i):Zg(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&qe.Optional))Fd(t);else return o}finally{zg()}}else if(typeof s=="number"){let o=null,a=Xg(n,e),c=ts,l=i&qe.Host?e[ei][Fn]:null;for((a===-1||i&qe.SkipSelf)&&(c=a===-1?qd(n,e):e[a+8],c===ts||!Rm(i,!1)?a=-1:(o=e[Xe],a=cc(c),e=lc(c,e)));a!==-1;){let u=e[Xe];if(Im(s,a,u.data)){let d=qb(a,e,t,o,i,l);if(d!==Kn)return d}c=e[a+8],c!==ts&&Rm(i,e[Xe].data[a+8]===l)&&Im(s,a,e)?(o=u,a=cc(c),e=lc(c,e)):a=-1}}return r}function qb(n,e,t,i,r,s){let o=e[Xe],a=o.data[n+8],c=i==null?Ac(a)&&id:i!=o&&(a.type&3)!==0,l=r&qe.Host&&s===a,u=Xb(a,o,t,c,l);return u!==null?ss(e,o,u,a):Kn}function Xb(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,h=r?a+u:l;for(let p=d;p<h;p++){let g=o[p];if(p<c&&t===g||p>=c&&g.type===t)return p}if(r){let p=o[c];if(p&&Pi(p)&&p.type===t)return c}return null}function ss(n,e,t,i){let r=n[t],s=e.data;if(Vb(r)){let o=r;o.resolving&&bM(MM(s[t]));let a=Dm(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?Zn(o.injectImpl):null,u=kg(n,i,qe.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&kb(t,s[t],e)}finally{l!==null&&Zn(l),Dm(a),o.resolving=!1,zg()}}return r}function Yb(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(yo)?n[yo]:void 0;return typeof e=="number"?e>=0?e&$g:Zb:e}function Im(n,e,t){let i=1<<n;return!!(t[e+(n>>qg)]&i)}function Rm(n,e){return!(n&qe.Self)&&!(n&qe.Host&&e)}var ar=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Jg(this._tNode,this._lView,e,wc(i),t)}};function Zb(){return new ar(bn(),Dt())}function Tc(n){return Po(()=>{let e=n.prototype.constructor,t=e[ic]||sd(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[ic]||sd(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function sd(n){return Jm(n)?()=>{let e=sd(tn(n));return e&&e()}:rs(n)}function Jb(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Je]&2048&&!(o[Je]&512);){let a=Kg(s,o,t,i|qe.Self,Kn);if(a!==Kn)return a;let c=s.parent;if(!c){let l=o[mg];if(l){let u=l.get(t,Kn,i);if(u!==Kn)return u}c=Qg(o),o=o[ls]}s=c}return r}function Qg(n){let e=n[Xe],t=e.type;return t===2?e.declTNode:t===1?n[Fn]:null}var Xa="__parameters__";function Kb(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function ev(n,e,t){return Po(()=>{let i=Kb(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let o=new r(...s);return a.annotation=o,a;function a(c,l,u){let d=c.hasOwnProperty(Xa)?c[Xa]:Object.defineProperty(c,Xa,{value:[]})[Xa];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),c}}return t&&(r.prototype=Object.create(t.prototype)),r.prototype.ngMetadataName=n,r.annotationCls=r,r})}function Qb(n){return typeof n=="function"}function Xd(n,e){n.forEach(t=>Array.isArray(t)?Xd(t,e):e(t))}function tv(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function dc(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function eE(n,e){let t=[];for(let i=0;i<n;i++)t.push(e);return t}function tE(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function nE(n,e,t){let i=Oo(n,e);return i>=0?n[i|1]=t:(i=~i,tE(n,i,e,t)),i}function ku(n,e){let t=Oo(n,e);if(t>=0)return n[t|1]}function Oo(n,e){return iE(n,e,1)}function iE(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var Yd=rg(ev("Optional"),8);var nv=rg(ev("SkipSelf"),4);function od(n){return(n.flags&128)===128}var di=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(di||{});var iv=new Map,rE=0;function sE(){return rE++}function oE(n){iv.set(n[Cc],n)}function aE(n){iv.delete(n[Cc])}var Pm="__ngContext__";function hr(n,e){or(e)?(n[Pm]=e[Cc],oE(e)):n[Pm]=e}var cE;function Zd(n,e){return cE(n,e)}function Jd(n){let e=n[At];return pi(e)?e[At]:e}function rv(n){return ov(n[Co])}function sv(n){return ov(n[Ln])}function ov(n){for(;n!==null&&!pi(n);)n=n[Ln];return n}function Qr(n,e,t,i,r){if(i!=null){let s,o=!1;pi(i)?s=i:or(i)&&(o=!0,i=i[fi]);let a=ni(i);n===0&&t!==null?r==null?uv(e,t,a):hc(e,t,a,r||null,!0):n===1&&t!==null?hc(e,t,a,r||null,!0):n===2?CE(e,a,o):n===3&&e.destroyNode(a),s!=null&&TE(e,n,s,t,r)}}function lE(n,e){return n.createText(e)}function uE(n,e,t){n.setValue(e,t)}function av(n,e,t){return n.createElement(e,t)}function dE(n,e){let t=e[zt];Lo(n,e,t,2,null,null),e[fi]=null,e[Fn]=null}function hE(n,e,t,i,r,s){i[fi]=r,i[Fn]=e,Lo(n,i,t,1,r,s)}function fE(n,e){Lo(n,e,e[zt],2,null,null)}function pE(n){let e=n[Co];if(!e)return Bu(n[Xe],n);for(;e;){let t=null;if(or(e))t=e[Co];else{let i=e[_n];i&&(t=i)}if(!t){for(;e&&!e[Ln]&&e!==n;)or(e)&&Bu(e[Xe],e),e=e[At];e===null&&(e=n),or(e)&&Bu(e[Xe],e),t=e&&e[Ln]}e=t}}function mE(n,e,t,i){let r=_n+i,s=t.length;i>0&&(t[r-1][Ln]=e),i<s-_n?(e[Ln]=t[r],tv(t,_n+i,e)):(t.push(e),e[Ln]=null),e[At]=t;let o=e[Sc];o!==null&&t!==o&&gE(o,e);let a=e[Ao];a!==null&&a.insertView(n),e[Je]|=128}function gE(n,e){let t=n[sc],r=e[At][At][ei];e[ei]!==r&&(n[vg]=!0),t===null?n[sc]=[e]:t.push(e)}function cv(n,e){let t=n[sc],i=t.indexOf(e),r=e[At];Dg(e),t.splice(i,1)}function ad(n,e){if(n.length<=_n)return;let t=_n+e,i=n[t];if(i){let r=i[Sc];r!==null&&r!==n&&cv(r,i),e>0&&(n[t-1][Ln]=i[Ln]);let s=dc(n,_n+e);dE(i[Xe],i);let o=s[Ao];o!==null&&o.detachView(s[Xe]),i[At]=null,i[Ln]=null,i[Je]&=-129}return i}function lv(n,e){if(!(e[Je]&256)){let t=e[zt];e[xo]&&Cm(e[xo]),e[Mo]&&Cm(e[Mo]),t.destroyNode&&Lo(n,e,t,3,null,null),pE(e)}}function Bu(n,e){if(!(e[Je]&256)){e[Je]&=-129,e[Je]|=256,yE(n,e),vE(n,e),e[Xe].type===1&&e[zt].destroy();let t=e[Sc];if(t!==null&&pi(e[At])){t!==e[At]&&cv(t,e);let i=e[Ao];i!==null&&i.detachView(n)}aE(e)}}function vE(n,e){let t=n.cleanup,i=e[wo];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[wo]=null);let r=e[_o];if(r!==null){e[_o]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function yE(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof dr)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Jn(4,a,c);try{c.call(a)}finally{Jn(5,a,c)}}else{Jn(4,r,s);try{s.call(r)}finally{Jn(5,r,s)}}}}}function _E(n,e,t){return xE(n,e.parent,t)}function xE(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[fi];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===Qn.None||s===Qn.Emulated)return null}return Un(i,t)}}function hc(n,e,t,i,r){n.insertBefore(e,t,i,r)}function uv(n,e,t){n.appendChild(e,t)}function Nm(n,e,t,i,r){i!==null?hc(n,e,t,i,r):uv(n,e,t)}function ME(n,e,t,i){n.removeChild(e,t,i)}function Kd(n,e){return n.parentNode(e)}function bE(n,e){return n.nextSibling(e)}function EE(n,e,t){return SE(n,e,t)}function wE(n,e,t){return n.type&40?Un(n,t):null}var SE=wE,Om;function Qd(n,e,t,i){let r=_E(n,i,e),s=e[zt],o=i.parent||e[Fn],a=EE(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Nm(s,r,t[c],a,!1);else Nm(s,r,t,a,!1);Om!==void 0&&Om(s,i,e,t,r)}function Qa(n,e){if(e!==null){let t=e.type;if(t&3)return Un(e,n);if(t&4)return cd(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Qa(n,i);{let r=n[e.index];return pi(r)?cd(-1,r):ni(r)}}else{if(t&32)return Zd(e,n)()||ni(n[e.index]);{let i=dv(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Jd(n[ei]);return Qa(r,i)}else return Qa(n,e.next)}}}return null}function dv(n,e){if(e!==null){let i=n[ei][Fn],r=e.projection;return i.projection[r]}return null}function cd(n,e){let t=_n+n+1;if(t<e.length){let i=e[t],r=i[Xe].firstChild;if(r!==null)return Qa(i,r)}return e[lr]}function CE(n,e,t){let i=Kd(n,e);i&&ME(n,i,e,t)}function eh(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&hr(ni(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)eh(n,e,t.child,i,r,s,!1),Qr(e,n,r,a,s);else if(c&32){let l=Zd(t,i),u;for(;u=l();)Qr(e,n,r,u,s);Qr(e,n,r,a,s)}else c&16?AE(n,e,i,t,r,s):Qr(e,n,r,a,s);t=o?t.projectionNext:t.next}}function Lo(n,e,t,i,r,s){eh(t,i,n.firstChild,e,r,s,!1)}function AE(n,e,t,i,r,s){let o=t[ei],c=o[Fn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Qr(e,n,r,u,s)}else{let l=c,u=o[At];od(i)&&(l.flags|=128),eh(n,e,l,u,r,s,!0)}}function TE(n,e,t,i,r){let s=t[lr],o=ni(t);s!==o&&Qr(e,n,i,s,r);for(let a=_n;a<t.length;a++){let c=t[a];Lo(c[Xe],c,n,e,i,s)}}function DE(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:di.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=di.Important),n.setStyle(t,i,r,s))}}function IE(n,e,t){n.setAttribute(e,"style",t)}function hv(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function fv(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&Qu(n,e,i),r!==null&&hv(n,e,r),s!==null&&IE(n,e,s)}var ld;function pv(n){ld=n}function RE(){if(ld!==void 0)return ld;if(typeof document<"u")return document;throw new ye(210,!1)}var ud=class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${xM})`}};function th(n){return n instanceof ud?n.changingThisBreaksApplicationSecurity:n}var Fo=new Le("ENVIRONMENT_INITIALIZER"),mv=new Le("INJECTOR",-1),gv=new Le("INJECTOR_DEF_TYPES"),fc=class{get(e,t=bo){if(t===bo){let i=new Error(`NullInjectorError: No provider for ${nn(e)}!`);throw i.name="NullInjectorError",i}return t}};function Dc(n){return{\u0275providers:n}}function PE(...n){return{\u0275providers:vv(!0,n),\u0275fromNgModule:!0}}function vv(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Xd(e,o=>{let a=o;dd(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&yv(r,s),t}function yv(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];nh(r,s=>{e(s,i)})}}function dd(n,e,t,i){if(n=tn(n),!n)return!1;let r=null,s=gm(n),o=!s&&cr(n);if(!s&&!o){let c=n.ngModule;if(s=gm(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)dd(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Xd(s.imports,u=>{dd(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&yv(l,e)}if(!a){let l=rs(r)||(()=>new r);e({provide:r,useFactory:l,deps:yn},r),e({provide:gv,useValue:r,multi:!0},r),e({provide:Fo,useValue:()=>Ke(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;nh(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function nh(n,e){for(let t of n)Km(t)&&(t=t.\u0275providers),Array.isArray(t)?nh(t,e):e(t)}var NE=ht({provide:String,useValue:ht});function _v(n){return n!==null&&typeof n=="object"&&NE in n}function OE(n){return!!(n&&n.useExisting)}function LE(n){return!!(n&&n.useFactory)}function os(n){return typeof n=="function"}function FE(n){return!!n.useClass}var Ic=new Le("Set Injector scope."),ec={},UE={},Vu;function ih(){return Vu===void 0&&(Vu=new fc),Vu}var Mn=class{},pc=class extends Mn{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,fd(e,o=>this.processProvider(o)),this.records.set(mv,es(void 0,this)),r.has("environment")&&this.records.set(Mn,es(void 0,this));let s=this.records.get(Ic);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(gv.multi,yn,qe.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(let t of this._ngOnDestroyHooks)t.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let t of e)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear()}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=Jr(this),i=Zn(void 0),r;try{return e()}finally{Jr(t),Zn(i)}}get(e,t=bo,i=qe.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(_m))return e[_m](this);i=wc(i);let r,s=Jr(this),o=Zn(void 0);try{if(!(i&qe.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=zE(e)&&Ec(e);l&&this.injectableDefInScope(l)?c=es(hd(e),ec):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&qe.Self?ih():this.parent;return t=i&qe.Optional&&t===bo?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[nc]=a[nc]||[]).unshift(nn(e)),s)throw a;return OM(a,e,"R3InjectorError",this.source)}else throw a}finally{Zn(o),Jr(s)}}resolveInjectorInitializers(){let e=Jr(this),t=Zn(void 0),i;try{let r=this.get(Fo.multi,yn,qe.Self);for(let s of r)s()}finally{Jr(e),Zn(t)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(nn(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new ye(205,!1)}processProvider(e){e=tn(e);let t=os(e)?e:tn(e&&e.provide),i=BE(e);if(!os(e)&&e.multi===!0){let r=this.records.get(t);r||(r=es(void 0,ec,!0),r.factory=()=>Ku(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}else{let r=this.records.get(t)}this.records.set(t,i)}hydrate(e,t){return t.value===ec&&(t.value=UE,t.value=t.factory()),typeof t.value=="object"&&t.value&&HE(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}injectableDefInScope(e){if(!e.providedIn)return!1;let t=tn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function hd(n){let e=Ec(n),t=e!==null?e.factory:rs(n);if(t!==null)return t;if(n instanceof Le)throw new ye(204,!1);if(n instanceof Function)return kE(n);throw new ye(204,!1)}function kE(n){let e=n.length;if(e>0){let i=eE(e,"?");throw new ye(204,!1)}let t=SM(n);return t!==null?()=>t.factory(n):()=>new n}function BE(n){if(_v(n))return es(void 0,n.useValue);{let e=xv(n);return es(e,ec)}}function xv(n,e,t){let i;if(os(n)){let r=tn(n);return rs(r)||hd(r)}else if(_v(n))i=()=>tn(n.useValue);else if(LE(n))i=()=>n.useFactory(...Ku(n.deps||[]));else if(OE(n))i=()=>Ke(tn(n.useExisting));else{let r=tn(n&&(n.useClass||n.provide));if(VE(n))i=()=>new r(...Ku(n.deps));else return rs(r)||hd(r)}return i}function es(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function VE(n){return!!n.deps}function HE(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function zE(n){return typeof n=="function"||typeof n=="object"&&n instanceof Le}function fd(n,e){for(let t of n)Array.isArray(t)?fd(t,e):t&&Km(t)?fd(t.\u0275providers,e):e(t)}var rh=new Le("AppId",{providedIn:"root",factory:()=>GE}),GE="ng",sh=new Le("Platform Initializer"),ds=new Le("Platform ID",{providedIn:"platform",factory:()=>"unknown"});var oh=new Le("CSP nonce",{providedIn:"root",factory:()=>RE().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var WE="h",jE="b";var $E=(n,e,t)=>null;function ah(n,e,t=!1){return $E(n,e,t)}var pd=class{},mc=class{};function qE(n){let e=Error(`No component factory found for ${nn(n)}.`);return e[XE]=n,e}var XE="ngComponent";var md=class{resolveComponentFactory(e){throw qE(e)}},Rc=(()=>{let e=class e{};e.NULL=new md;let n=e;return n})();function YE(){return Pc(bn(),Dt())}function Pc(n,e){return new vr(Un(n,e))}var vr=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=YE;let n=e;return n})();var To=class{},hs=(()=>{let e=class e{constructor(){this.destroyNode=null}};e.__NG_ELEMENT_ID__=()=>ZE();let n=e;return n})();function ZE(){let n=Dt(),e=bn(),t=Fi(e.index,n);return(or(t)?t:n)[zt]}var JE=(()=>{let e=class e{};e.\u0275prov=Fe({token:e,providedIn:"root",factory:()=>null});let n=e;return n})(),fr=class{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}},KE=new fr("16.2.12"),Hu={};function Lm(n,e=null,t=null,i){let r=Mv(n,e,t,i);return r.resolveInjectorInitializers(),r}function Mv(n,e=null,t=null,i,r=new Set){let s=[t||yn,PE(n)];return i=i||(typeof n=="object"?void 0:nn(n)),new pc(s,e||ih(),i||null,r)}var yr=(()=>{let e=class e{static create(i,r){if(Array.isArray(i))return Lm({name:""},r,i,"");{let s=i.name??"";return Lm({name:s},i.parent,i.providers,s)}}};e.THROW_IF_NOT_FOUND=bo,e.NULL=new fc,e.\u0275prov=Fe({token:e,providedIn:"any",factory:()=>Ke(mv)}),e.__NG_ELEMENT_ID__=-1;let n=e;return n})(),QE="ngOriginalError";function zu(n){return n[QE]}var hi=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&zu(e);for(;t&&zu(t);)t=zu(t);return t||null}};var gd=class extends en{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=Gu(s),r&&(r=Gu(r)),o&&(o=Gu(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Lt&&e.add(a),a}};function Gu(n){return e=>{setTimeout(n,void 0,e)}}var $t=gd;function Fm(...n){}function ew(){let n=typeof go.requestAnimationFrame=="function",e=go[n?"requestAnimationFrame":"setTimeout"],t=go[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}var Tt=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new $t(!1),this.onMicrotaskEmpty=new $t(!1),this.onStable=new $t(!1),this.onError=new $t(!1),typeof Zone>"u")throw new ye(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=ew().nativeRequestAnimationFrame,iw(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new ye(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new ye(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,tw,Fm,Fm);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},tw={};function ch(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function nw(n){n.isCheckStableRunning||n.lastRequestAnimationFrameId!==-1||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(go,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,vd(n),n.isCheckStableRunning=!0,ch(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),vd(n))}function iw(n){let e=()=>{nw(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if(rw(a))return t.invokeTask(r,s,o,a);try{return Um(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),km(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return Um(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&e(),km(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,vd(n),ch(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function vd(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.lastRequestAnimationFrameId!==-1?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Um(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function km(n){n._nesting--,ch(n)}var bv=new Le("",{providedIn:"root",factory:Ev});function Ev(){let n=be(Tt),e=!0,t=new et(r=>{e=n.isStable&&!n.hasPendingMacrotasks&&!n.hasPendingMicrotasks,n.runOutsideAngular(()=>{r.next(e),r.complete()})}),i=new et(r=>{let s;n.runOutsideAngular(()=>{s=n.onStable.subscribe(()=>{Tt.assertNotInAngularZone(),queueMicrotask(()=>{!e&&!n.hasPendingMacrotasks&&!n.hasPendingMicrotasks&&(e=!0,r.next(!0))})})});let o=n.onUnstable.subscribe(()=>{Tt.assertInAngularZone(),e&&(e=!1,n.runOutsideAngular(()=>{r.next(!1)}))});return()=>{s.unsubscribe(),o.unsubscribe()}});return Au(t,i.pipe($a()))}function rw(n){return!Array.isArray(n)||n.length!==1?!1:n[0].data?.__ignore_ng_zone__===!0}function wv(n){return n instanceof Function?n():n}var sw=(()=>{let e=class e{constructor(){this.renderDepth=0,this.handler=null}begin(){this.handler?.validateBegin(),this.renderDepth++}end(){this.renderDepth--,this.renderDepth===0&&this.handler?.execute()}ngOnDestroy(){this.handler?.destroy(),this.handler=null}};e.\u0275prov=Fe({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function Nc(n){for(;n;){n[Je]|=64;let e=Jd(n);if(tb(n)&&!e)return n;n=e}return null}var Sv=!1,ow=new Le("",{providedIn:"root",factory:()=>Sv});var gc=null;function Cv(n,e){return n[e]??Dv()}function Av(n,e){let t=Dv();t.producerNode?.length&&(n[e]=gc,t.lView=n,gc=Tv())}var aw=gt(de({},_g),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{Nc(n.lView)},lView:null});function Tv(){return Object.create(aw)}function Dv(){return gc??=Tv(),gc}var fs={};function kn(n){Iv(ii(),Dt(),us()+n,!1)}function Iv(n,e,t,i){if(!i)if((e[Je]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Ja(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Ka(e,s,0,t)}ur(t)}function ct(n,e=qe.Default){let t=Dt();if(t===null)return Ke(n,e);let i=bn();return Jg(i,t,tn(n),e)}function cw(n,e){let t=n.hostBindingOpCodes;if(t===null)return;let i=Cv(e,Mo);try{for(let r=0;r<t.length;r++){let s=t[r];if(s<0)ur(~s);else{let o=s,a=t[++r],c=t[++r];Ib(a,o),i.dirty=!1;let l=kd(i);try{let u=e[o];c(2,u)}finally{Bd(i,l)}}}}finally{e[Mo]===null&&Av(e,Mo),ur(-1)}}function Oc(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[fi]=r,d[Je]=i|4|128|8,(l!==null||n&&n[Je]&2048)&&(d[Je]|=2048),Tg(d),d[At]=d[ls]=n,d[xn]=t,d[So]=o||n&&n[So],d[zt]=a||n&&n[zt],d[is]=c||n&&n[is]||null,d[Fn]=s,d[Cc]=sE(),d[ed]=u,d[mg]=l,d[ei]=e.type==2?n[ei]:d,d}function Lc(n,e,t,i,r){let s=n.data[e];if(s===null)s=lw(n,e,t,i,r),Db()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=Sb();s.injectorIndex=o===null?-1:o.injectorIndex}return No(s,!0),s}function lw(n,e,t,i,r){let s=Og(),o=Lg(),a=o?s:s&&s.parent,c=n.data[e]=pw(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function Rv(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Pv(n,e,t,i,r){let s=Cv(e,xo),o=us(),a=i&2;try{ur(-1),a&&e.length>Ri&&Iv(n,e,Ri,!1),Jn(a?2:0,r);let l=a?s:null,u=kd(l);try{l!==null&&(l.dirty=!1),t(i,r)}finally{Bd(l,u)}}finally{a&&e[xo]===null&&Av(e,xo),ur(o),Jn(a?3:1,r)}}function Nv(n,e,t){if(yg(e)){let i=ti(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];a.contentQueries&&a.contentQueries(1,t[o],o)}}finally{ti(i)}}}function Ov(n,e,t){Rg()&&(Mw(n,e,t,Un(t,e)),(t.flags&64)===64&&Bv(n,e,t))}function Lv(n,e,t=Un){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function Fv(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=lh(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function lh(n,e,t,i,r,s,o,a,c,l,u){let d=Ri+i,h=d+r,p=uw(d,h),g=typeof l=="function"?l():l;return p[Xe]={type:n,blueprint:p,template:t,queries:null,viewQuery:a,declTNode:e,data:p.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function uw(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:fs);return t}function dw(n,e,t,i){let s=i.get(ow,Sv)||t===Qn.ShadowDom,o=n.selectRootElement(e,s);return hw(o),o}function hw(n){fw(n)}var fw=n=>null;function pw(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return bb()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Bm(n,e,t,i){for(let r in n)if(n.hasOwnProperty(r)){t=t===null?{}:t;let s=n[r];i===null?Vm(t,e,r,s):i.hasOwnProperty(r)&&Vm(t,e,i[r],s)}return t}function Vm(n,e,t,i){n.hasOwnProperty(t)?n[t].push(e,i):n[t]=[e,i]}function mw(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],h=t?t.get(d):null,p=h?h.inputs:null,g=h?h.outputs:null;c=Bm(d.inputs,u,c,p),l=Bm(d.outputs,u,l,g);let v=c!==null&&o!==null&&!cg(e)?Iw(c,u,o):null;a.push(v)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function gw(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function vw(n,e,t,i,r,s,o,a){let c=Un(e,t),l=e.inputs,u;!a&&l!=null&&(u=l[i])?(uh(n,t,u,i,r),Ac(e)&&yw(t,e.index)):e.type&3?(i=gw(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function yw(n,e){let t=Fi(e,n);t[Je]&16||(t[Je]|=64)}function Uv(n,e,t,i){if(Rg()){let r=i===null?null:{"":-1},s=Ew(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&kv(n,e,t,o,r,a),r&&ww(t,i,r)}t.mergedAttrs=Eo(t.mergedAttrs,t.attrs)}function kv(n,e,t,i,r,s){for(let l=0;l<i.length;l++)rd(uc(t,e),n,i[l].type);Cw(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=Rv(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=Eo(t.mergedAttrs,u.hostAttrs),Aw(n,t,e,c,u),Sw(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}mw(n,t,s)}function _w(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;xw(o)!=a&&o.push(a),o.push(t,i,s)}}function xw(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function Mw(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;Ac(t)&&Tw(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||uc(t,e),hr(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=ss(e,n,a,t);if(hr(l,e),o!==null&&Dw(e,a-r,l,c,t,o),Pi(c)){let u=Fi(t.index,e);u[xn]=ss(e,n,a,t)}}}function Bv(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=Rb();try{ur(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];nd(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&bw(c,l)}}finally{ur(-1),nd(o)}}function bw(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function Ew(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if($M(e,o.selectors,!1))if(i||(i=[]),Pi(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;yd(n,e,c)}else i.unshift(o),yd(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function yd(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function ww(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new ye(-301,!1);i.push(e[r],s)}}}function Sw(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Pi(e)&&(t[""]=n)}}function Cw(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function Aw(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=rs(r.type,!0)),o=new dr(s,Pi(r),ct);n.blueprint[i]=o,t[i]=o,_w(n,e,i,Rv(n,t,r.hostVars,fs),r)}function Tw(n,e,t){let i=Un(e,n),r=Fv(t),s=n[So].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=Fc(n,Oc(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function Dw(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++];Vv(i,t,c,l,u)}}function Vv(n,e,t,i,r){let s=ti(null);try{let o=n.inputTransforms;o!==null&&o.hasOwnProperty(i)&&(r=o[i].call(e,r)),n.setInput!==null?n.setInput(e,r,t,i):e[i]=r}finally{ti(s)}}function Iw(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=2)if(o[a]===e){i.push(s,o[a+1],t[r+1]);break}}r+=2}return i}function Hv(n,e,t,i){return[n,!0,!1,e,null,0,i,t,null,null,null]}function zv(n,e){let t=n.contentQueries;if(t!==null)for(let i=0;i<t.length;i+=2){let r=t[i],s=t[i+1];if(s!==-1){let o=n.data[s];Ug(r),o.contentQueries(2,e[s],s)}}}function Fc(n,e){return n[Co]?n[wm][Ln]=e:n[Co]=e,n[wm]=e,e}function _d(n,e,t){Ug(0);let i=ti(null);try{e(n,t)}finally{ti(i)}}function Rw(n){return n[wo]||(n[wo]=[])}function Pw(n){return n.cleanup||(n.cleanup=[])}function Gv(n,e){let t=n[is],i=t?t.get(hi,null):null;i&&i.handleError(e)}function uh(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=e[o],l=n.data[o];Vv(l,c,i,a,r)}}function Nw(n,e,t){let i=Cg(e,n);uE(n[zt],i,t)}function Ow(n,e){let t=Fi(e,n),i=t[Xe];Lw(i,t);let r=t[fi];r!==null&&t[ed]===null&&(t[ed]=ah(r,t[is])),dh(i,t,t[xn])}function Lw(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function dh(n,e,t){zd(e);try{let i=n.viewQuery;i!==null&&_d(1,i,t);let r=n.template;r!==null&&Pv(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),n.staticContentQueries&&zv(n,e),n.staticViewQueries&&_d(2,n.viewQuery,t);let s=n.components;s!==null&&Fw(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Je]&=-5,Gd()}}function Fw(n,e){for(let t=0;t<e.length;t++)Ow(n,e[t])}var Uw=(()=>{let e=class e{constructor(){this.all=new Set,this.queue=new Map}create(i,r,s){let o=typeof Zone>"u"?null:Zone.current,a=cb(i,u=>{this.all.has(u)&&this.queue.set(u,o)},s);this.all.add(a),a.notify();let c,l=()=>{a.cleanup(),c?.(),this.all.delete(a),this.queue.delete(a)};return c=r?.onDestroy(l),{destroy:l}}flush(){if(this.queue.size!==0)for(let[i,r]of this.queue)this.queue.delete(i),r?r.run(()=>i.run()):i.run()}get isQueueEmpty(){return this.queue.size===0}};e.\u0275prov=Fe({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function xd(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=pm(r,a);else if(s==2){let c=a,l=e[++o];i=pm(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function vc(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(ni(s)),pi(s)&&kw(s,i);let o=t.type;if(o&8)vc(n,e,t.child,i);else if(o&32){let a=Zd(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=dv(e,t);if(Array.isArray(a))i.push(...a);else{let c=Jd(e[ei]);vc(c[Xe],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function kw(n,e){for(let t=_n;t<n.length;t++){let i=n[t],r=i[Xe].firstChild;r!==null&&vc(i[Xe],i,r,e)}n[lr]!==n[fi]&&e.push(n[lr])}function Wv(n,e,t,i=!0){let r=e[So],s=r.rendererFactory,o=r.afterRenderEventManager,a=!1;a||(s.begin?.(),o?.begin());try{jv(n,e,n.template,t)}catch(c){throw i&&Gv(e,c),c}finally{a||(s.end?.(),r.effectManager?.flush(),o?.end())}}function jv(n,e,t,i){let r=e[Je];if((r&256)===256)return;let s=!1;!s&&e[So].effectManager?.flush(),zd(e);try{Tg(e),Ab(n.bindingStartIndex),t!==null&&Pv(n,e,t,2,i);let o=(r&3)===3;if(!s)if(o){let l=n.preOrderCheckHooks;l!==null&&Ja(e,l,null)}else{let l=n.preOrderHooks;l!==null&&Ka(e,l,0,null),Fu(e,0)}if(Bw(e),$v(e,2),n.contentQueries!==null&&zv(n,e),!s)if(o){let l=n.contentCheckHooks;l!==null&&Ja(e,l)}else{let l=n.contentHooks;l!==null&&Ka(e,l,1),Fu(e,1)}cw(n,e);let a=n.components;a!==null&&Xv(e,a,0);let c=n.viewQuery;if(c!==null&&_d(2,c,i),!s)if(o){let l=n.viewCheckHooks;l!==null&&Ja(e,l)}else{let l=n.viewHooks;l!==null&&Ka(e,l,2),Fu(e,2)}n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),s||(e[Je]&=-73),Dg(e)}finally{Gd()}}function $v(n,e){for(let t=rv(n);t!==null;t=sv(t))for(let i=_n;i<t.length;i++){let r=t[i];qv(r,e)}}function Bw(n){for(let e=rv(n);e!==null;e=sv(e)){if(!e[vg])continue;let t=e[sc];for(let i=0;i<t.length;i++){let r=t[i],s=r[At];vb(r)}}}function Vw(n,e,t){let i=Fi(e,n);qv(i,t)}function qv(n,e){if(!mb(n))return;let t=n[Xe],i=n[Je];if(i&80&&e===0||i&1024||e===2)jv(t,n,t.template,n[xn]);else if(n[mo]>0){$v(n,1);let r=t.components;r!==null&&Xv(n,r,1)}}function Xv(n,e,t){for(let i=0;i<e.length;i++)Vw(n,e[i],t)}var pr=class{get rootNodes(){let e=this._lView,t=e[Xe];return vc(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[xn]}set context(e){this._lView[xn]=e}get destroyed(){return(this._lView[Je]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[At];if(pi(e)){let t=e[rc],i=t?t.indexOf(this):-1;i>-1&&(ad(e,i),dc(t,i))}this._attachedToViewContainer=!1}lv(this._lView[Xe],this._lView)}onDestroy(e){yb(this._lView,e)}markForCheck(){Nc(this._cdRefInjectingView||this._lView)}detach(){this._lView[Je]&=-129}reattach(){this._lView[Je]|=128}detectChanges(){Wv(this._lView[Xe],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new ye(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,fE(this._lView[Xe],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new ye(902,!1);this._appRef=e}},Md=class extends pr{constructor(e){super(e),this._view=e}detectChanges(){let e=this._view,t=e[Xe],i=e[xn];Wv(t,e,i,!1)}checkNoChanges(){}get context(){return null}},yc=class extends Rc{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=cr(e);return new Do(t,this.ngModule)}};function Hm(n){let e=[];for(let t in n)if(n.hasOwnProperty(t)){let i=n[t];e.push({propName:i,templateName:t})}return e}function Hw(n){let e=n.toLowerCase();return e==="svg"?fb:e==="math"?pb:null}var bd=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=wc(i);let r=this.injector.get(e,Hu,i);return r!==Hu||t===Hu?r:this.parentInjector.get(e,t,i)}},Do=class extends mc{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=Hm(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return Hm(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=ZM(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){r=r||this.ngModule;let s=r instanceof Mn?r:r?.injector;s&&this.componentDef.getStandaloneInjector!==null&&(s=this.componentDef.getStandaloneInjector(s)||s);let o=s?new bd(e,s):e,a=o.get(To,null);if(a===null)throw new ye(407,!1);let c=o.get(JE,null),l=o.get(Uw,null),u=o.get(sw,null),d={rendererFactory:a,sanitizer:c,effectManager:l,afterRenderEventManager:u},h=a.createRenderer(null,this.componentDef),p=this.componentDef.selectors[0][0]||"div",g=i?dw(h,i,this.componentDef.encapsulation,o):av(h,p,Hw(p)),v=4608,m=this.componentDef.onPush?576:528,f=this.componentDef.signals?v:m,w=null;g!==null&&(w=ah(g,o,!0));let b=lh(0,null,null,1,0,null,null,null,null,null,null),S=Oc(null,b,null,f,null,null,d,h,o,null,w);zd(S);let I,T;try{let C=this.componentDef,q,x=null;C.findHostDirectiveDefs?(q=[],x=new Map,C.findHostDirectiveDefs(C,q,x),q.push(C)):q=[C];let E=zw(S,g),V=Gw(E,g,C,q,S,d,h);T=Ag(b,Ri),g&&$w(h,C,g,i),t!==void 0&&qw(T,this.ngContentSelectors,t),I=jw(V,C,q,x,S,[Xw]),dh(b,S,null)}finally{Gd()}return new Ed(this.componentType,I,Pc(T,S),S,T)}},Ed=class extends pd{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new Md(r),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;uh(s[Xe],s,r,e,t),this.previousInputValues.set(e,t);let o=Fi(this._tNode.index,s);Nc(o)}}get injector(){return new ar(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function zw(n,e){let t=n[Xe],i=Ri;return n[i]=e,Lc(t,i,2,"#host",null)}function Gw(n,e,t,i,r,s,o){let a=r[Xe];Ww(i,n,e,o);let c=null;e!==null&&(c=ah(e,r[is]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=Oc(r,Fv(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&yd(a,n,i.length-1),Fc(r,d),r[n.index]=d}function Ww(n,e,t,i){for(let r of n)e.mergedAttrs=Eo(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(xd(e,e.mergedAttrs,!0),t!==null&&fv(i,t,e))}function jw(n,e,t,i,r,s){let o=bn(),a=r[Xe],c=Un(o,r);kv(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,h=ss(r,a,d,o);hr(h,r)}Bv(a,r,o),c&&hr(c,r);let l=ss(r,a,o.directiveStart+o.componentOffset,o);if(n[xn]=r[xn]=l,s!==null)for(let u of s)u(l,e);return Nv(a,o,n),l}function $w(n,e,t,i){if(i)Qu(n,t,["ng-version",KE.full]);else{let{attrs:r,classes:s}=JM(e.selectors[0]);r&&Qu(n,t,r),s&&s.length>0&&hv(n,t,s.join(" "))}}function qw(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function Xw(){let n=bn();$d(Dt()[Xe],n)}function Yw(n){return Object.getPrototypeOf(n.prototype).constructor}function Ui(n){let e=Yw(n.type),t=!0,i=[n];for(;e;){let r;if(Pi(n))r=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new ye(903,!1);r=e.\u0275dir}if(r){if(t){i.push(r);let o=n;o.inputs=Ya(n.inputs),o.inputTransforms=Ya(n.inputTransforms),o.declaredInputs=Ya(n.declaredInputs),o.outputs=Ya(n.outputs);let a=r.hostBindings;a&&Qw(n,a);let c=r.viewQuery,l=r.contentQueries;if(c&&Jw(n,c),l&&Kw(n,l),qa(n.inputs,r.inputs),qa(n.declaredInputs,r.declaredInputs),qa(n.outputs,r.outputs),r.inputTransforms!==null&&(o.inputTransforms===null&&(o.inputTransforms={}),qa(o.inputTransforms,r.inputTransforms)),Pi(r)&&r.data.animation){let u=n.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let s=r.features;if(s)for(let o=0;o<s.length;o++){let a=s[o];a&&a.ngInherit&&a(n),a===Ui&&(t=!1)}}e=Object.getPrototypeOf(e)}Zw(i)}function Zw(n){let e=0,t=null;for(let i=n.length-1;i>=0;i--){let r=n[i];r.hostVars=e+=r.hostVars,r.hostAttrs=Eo(r.hostAttrs,t=Eo(t,r.hostAttrs))}}function Ya(n){return n===ns?{}:n===yn?[]:n}function Jw(n,e){let t=n.viewQuery;t?n.viewQuery=(i,r)=>{e(i,r),t(i,r)}:n.viewQuery=e}function Kw(n,e){let t=n.contentQueries;t?n.contentQueries=(i,r,s)=>{e(i,r,s),t(i,r,s)}:n.contentQueries=e}function Qw(n,e){let t=n.hostBindings;t?n.hostBindings=(i,r)=>{e(i,r),t(i,r)}:n.hostBindings=e}function Yv(n){return tS(n)?Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n:!1}function eS(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{let t=n[Symbol.iterator](),i;for(;!(i=t.next()).done;)e(i.value)}}function tS(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function hh(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function nS(n,e,t,i){return hh(n,Fg(),t)?e+Qm(t)+i:fs}var gk=new RegExp(`^(\\d+)*(${jE}|${WE})*(.*)`);function iS(n,e,t,i,r,s,o,a,c){let l=e.consts,u=Lc(e,n,4,o||null,ac(l,a));Uv(e,t,u,ac(l,c)),$d(e,u);let d=u.tView=lh(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function Zv(n,e,t,i,r,s,o,a){let c=Dt(),l=ii(),u=n+Ri,d=l.firstCreatePass?iS(u,l,c,e,t,i,r,s,o):l.data[u];No(d,!1);let h=rS(l,c,d,n);Wd()&&Qd(l,c,h,d),hr(h,c),Fc(c,c[u]=Hv(h,c,h,d)),Ud(d)&&Ov(l,c,d),o!=null&&Lv(c,d,a)}var rS=sS;function sS(n,e,t,i){return jd(!0),e[zt].createComment("")}function mi(n,e,t){let i=Dt(),r=Fg();if(hh(i,r,e)){let s=ii(),o=Fb();vw(s,o,i,n,e,i[zt],t,!1)}return mi}function zm(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";uh(n,t,s[o],o,i)}function oS(n,e,t,i,r,s){let o=e.consts,a=ac(o,r),c=Lc(e,n,2,i,a);return Uv(e,t,c,ac(o,s)),c.attrs!==null&&xd(c,c.attrs,!1),c.mergedAttrs!==null&&xd(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function ot(n,e,t,i){let r=Dt(),s=ii(),o=Ri+n,a=r[zt],c=s.firstCreatePass?oS(o,s,r,e,t,i):s.data[o],l=aS(s,r,c,a,e,n);r[o]=l;let u=Ud(c);return No(c,!0),fv(a,l,c),(c.flags&32)!==32&&Wd()&&Qd(s,r,l,c),_b()===0&&hr(l,r),xb(),u&&(Ov(s,r,c),Nv(s,c,r)),i!==null&&Lv(r,c),ot}function lt(){let n=bn();Lg()?Cb():(n=n.parent,No(n,!1));let e=n;Eb(e)&&wb(),Mb();let t=ii();return t.firstCreatePass&&($d(t,n),yg(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&Hb(e)&&zm(t,e,Dt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&zb(e)&&zm(t,e,Dt(),e.stylesWithoutHost,!1),lt}function En(n,e,t,i){return ot(n,e,t,i),lt(),En}var aS=(n,e,t,i,r,s)=>(jd(!0),av(i,r,Ub()));function Jv(){return Dt()}function _r(n){return!!n&&typeof n.then=="function"}function Kv(n){return!!n&&typeof n.subscribe=="function"}function xr(n,e,t,i){let r=Dt(),s=ii(),o=bn();return lS(s,r,r[zt],o,n,e,i),xr}function cS(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[wo],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function lS(n,e,t,i,r,s,o){let a=Ud(i),l=n.firstCreatePass&&Pw(n),u=e[xn],d=Rw(e),h=!0;if(i.type&3||o){let v=Un(i,e),m=o?o(v):v,f=d.length,w=o?S=>o(ni(S[i.index])):i.index,b=null;if(!o&&a&&(b=cS(n,e,r,i.index)),b!==null){let S=b.__ngLastListenerFn__||b;S.__ngNextListenerFn__=s,b.__ngLastListenerFn__=s,h=!1}else{s=Wm(i,e,u,s,!1);let S=t.listen(m,r,s);d.push(s,S),l&&l.push(r,w,f,f+1)}}else s=Wm(i,e,u,s,!1);let p=i.outputs,g;if(h&&p!==null&&(g=p[r])){let v=g.length;if(v)for(let m=0;m<v;m+=2){let f=g[m],w=g[m+1],I=e[f][w].subscribe(s),T=d.length;d.push(s,I),l&&l.push(r,i.index,T,-(T+1))}}}function Gm(n,e,t,i){try{return Jn(6,e,t),t(i)!==!1}catch(r){return Gv(n,r),!1}finally{Jn(7,e,t)}}function Wm(n,e,t,i,r){return function s(o){if(o===Function)return i;let a=n.componentOffset>-1?Fi(n.index,e):e;Nc(a);let c=Gm(e,t,i,o),l=s.__ngNextListenerFn__;for(;l;)c=Gm(e,t,l,o)&&c,l=l.__ngNextListenerFn__;return r&&c===!1&&o.preventDefault(),c}}function Qv(n=1){return Ob(n)}function Za(n,e){return n<<17|e<<2}function mr(n){return n>>17&32767}function uS(n){return(n&2)==2}function dS(n,e){return n&131071|e<<17}function wd(n){return n|2}function as(n){return(n&131068)>>2}function Wu(n,e){return n&-131069|e<<2}function hS(n){return(n&1)===1}function Sd(n){return n|1}function fS(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=mr(o),c=as(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||Oo(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let h=mr(n[a+1]);n[i+1]=Za(h,a),h!==0&&(n[h+1]=Wu(n[h+1],i)),n[a+1]=dS(n[a+1],i)}else n[i+1]=Za(a,0),a!==0&&(n[a+1]=Wu(n[a+1],i)),a=i;else n[i+1]=Za(c,0),a===0?a=i:n[c+1]=Wu(n[c+1],i),c=i;l&&(n[i+1]=wd(n[i+1])),jm(n,u,i,!0,s),jm(n,u,i,!1,s),pS(e,u,n,i,s),o=Za(a,c),s?e.classBindings=o:e.styleBindings=o}function pS(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&Oo(s,e)>=0&&(t[i+1]=Sd(t[i+1]))}function jm(n,e,t,i,r){let s=n[t+1],o=e===null,a=i?mr(s):as(s),c=!1;for(;a!==0&&(c===!1||o);){let l=n[a],u=n[a+1];mS(l,e)&&(c=!0,n[a+1]=i?Sd(u):wd(u)),a=i?mr(u):as(u)}c&&(n[t+1]=i?wd(s):Sd(s))}function mS(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?Oo(n,e)>=0:!1}function Uc(n,e){return gS(n,e,null,!0),Uc}function gS(n,e,t,i){let r=Dt(),s=ii(),o=Tb(2);if(s.firstUpdatePass&&yS(s,n,o,i),e!==fs&&hh(r,o,e)){let a=s.data[us()];ES(s,a,r,r[zt],n,r[o+1]=wS(e,t),i,o)}}function vS(n,e){return e>=n.expandoStartIndex}function yS(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[us()],o=vS(n,t);SS(s,i)&&e===null&&!o&&(e=!1),e=_S(r,s,e,i),fS(r,s,e,t,o,i)}}function _S(n,e,t,i){let r=Pb(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=ju(null,n,e,t,i),t=Io(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=ju(r,n,e,t,i),s===null){let c=xS(n,e,i);c!==void 0&&Array.isArray(c)&&(c=ju(null,n,e,c[1],i),c=Io(c,e.attrs,i),MS(n,e,i,c))}else s=bS(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function xS(n,e,t){let i=t?e.classBindings:e.styleBindings;if(as(i)!==0)return n[mr(i)]}function MS(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[mr(r)]=i}function bS(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=Io(i,o,t)}return Io(i,e.attrs,t)}function ju(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=Io(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function Io(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),nE(n,o,t?!0:e[++s]))}return n===void 0?null:n}function ES(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=hS(l)?$m(c,e,t,r,as(l),o):void 0;if(!_c(u)){_c(s)||uS(l)&&(s=$m(c,null,t,r,a,o));let d=Cg(us(),t);DE(i,o,d,r,s)}}function $m(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,h=t[r+1];h===fs&&(h=d?yn:void 0);let p=d?ku(h,i):u===i?h:void 0;if(l&&!_c(p)&&(p=ku(c,i)),_c(p)&&(a=p,o))return a;let g=n[r+1];r=o?mr(g):as(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=ku(c,i))}return a}function _c(n){return n!==void 0}function wS(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=nn(th(n)))),n}function SS(n,e){return(n.flags&(e?8:16))!==0}function kt(n,e=""){let t=Dt(),i=ii(),r=n+Ri,s=i.firstCreatePass?Lc(i,r,1,e,null):i.data[r],o=CS(i,t,s,e,n);t[r]=o,Wd()&&Qd(i,t,o,s),No(s,!1)}var CS=(n,e,t,i,r)=>(jd(!0),lE(e[zt],i));function fh(n){return kc("",n,""),fh}function kc(n,e,t){let i=Dt(),r=nS(i,n,e,t);return r!==fs&&Nw(i,us(),r),kc}var xc="en-US";var AS=xc;function TS(n){EM(n,"Expected localeId to be defined"),typeof n=="string"&&(AS=n.toLowerCase().replace(/_/g,"-"))}function DS(n,e,t){let i=ii();if(i.firstCreatePass){let r=Pi(n);Cd(t,i.data,i.blueprint,r,!0),Cd(e,i.data,i.blueprint,r,!1)}}function Cd(n,e,t,i,r){if(n=tn(n),Array.isArray(n))for(let s=0;s<n.length;s++)Cd(n[s],e,t,i,r);else{let s=ii(),o=Dt(),a=bn(),c=os(n)?n:tn(n.provide),l=xv(n),u=a.providerIndexes&1048575,d=a.directiveStart,h=a.providerIndexes>>20;if(os(n)||!n.multi){let p=new dr(l,r,ct),g=qu(c,e,r?u:u+h,d);g===-1?(rd(uc(a,o),s,c),$u(s,n,e.length),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(p),o.push(p)):(t[g]=p,o[g]=p)}else{let p=qu(c,e,u+h,d),g=qu(c,e,u,u+h),v=p>=0&&t[p],m=g>=0&&t[g];if(r&&!m||!r&&!v){rd(uc(a,o),s,c);let f=PS(r?RS:IS,t.length,r,i,l);!r&&m&&(t[g].providerFactory=f),$u(s,n,e.length,0),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(f),o.push(f)}else{let f=ey(t[r?g:p],l,!r&&i);$u(s,n,p>-1?p:g,f)}!r&&i&&m&&t[g].componentProviders++}}}function $u(n,e,t,i){let r=os(e),s=FE(e);if(r||s){let c=(s?tn(e.useClass):e).prototype.ngOnDestroy;if(c){let l=n.destroyHooks||(n.destroyHooks=[]);if(!r&&e.multi){let u=l.indexOf(t);u===-1?l.push(t,[i,c]):l[u+1].push(i,c)}else l.push(t,c)}}}function ey(n,e,t){return t&&n.componentProviders++,n.multi.push(e)-1}function qu(n,e,t,i){for(let r=t;r<i;r++)if(e[r]===n)return r;return-1}function IS(n,e,t,i){return Ad(this.multi,[])}function RS(n,e,t,i){let r=this.multi,s;if(this.providerFactory){let o=this.providerFactory.componentProviders,a=ss(t,t[Xe],this.providerFactory.index,i);s=a.slice(0,o),Ad(r,s);for(let c=o;c<a.length;c++)s.push(a[c])}else s=[],Ad(r,s);return s}function Ad(n,e){for(let t=0;t<n.length;t++){let i=n[t];e.push(i())}return e}function PS(n,e,t,i,r){let s=new dr(n,t,ct);return s.multi=[],s.index=e,s.componentProviders=0,ey(s,r,i&&!t),s}function Bc(n,e=[]){return t=>{t.providersResolver=(i,r)=>DS(i,r?r(n):n,e)}}var Ni=class{},Ro=class{};var Td=class extends Ni{constructor(e,t,i){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new yc(this);let r=hg(e);this._bootstrapComponents=wv(r.bootstrap),this._r3Injector=Mv(e,t,[{provide:Ni,useValue:this},{provide:Rc,useValue:this.componentFactoryResolver},...i],nn(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Dd=class extends Ro{constructor(e){super(),this.moduleType=e}create(e){return new Td(this.moduleType,e,[])}};var Mc=class extends Ni{constructor(e){super(),this.componentFactoryResolver=new yc(this),this.instance=null;let t=new pc([...e.providers,{provide:Ni,useValue:this},{provide:Rc,useValue:this.componentFactoryResolver}],e.parent||ih(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function ph(n,e,t=null){return new Mc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var NS=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let r=vv(!1,i.type),s=r.length>0?ph([r],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,s)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=Fe({token:e,providedIn:"environment",factory:()=>new e(Ke(Mn))});let n=e;return n})();function Bt(n){n.getStandaloneInjector=e=>e.get(NS).getOrCreateStandaloneInjector(n)}function OS(n,e,t,i){let r=e.tView,o=n[Je]&4096?4096:16,a=Oc(n,r,t,o,null,e,null,null,null,i?.injector??null,i?.hydrationInfo??null),c=n[e.index];a[Sc]=c;let l=n[Ao];return l!==null&&(a[Ao]=l.createEmbeddedView(r)),dh(r,a,t),a}function LS(n,e,t,i=!0){let r=e[Xe];if(mE(r,e,n,t),i){let s=cd(t,n),o=e[zt],a=Kd(o,n[lr]);a!==null&&hE(r,n[Fn],o,e,a,s)}}var mh=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=kS;let n=e;return n})(),FS=mh,US=class extends FS{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=OS(this._declarationLView,this._declarationTContainer,e,{injector:t,hydrationInfo:i});return new pr(r)}};function kS(){return BS(bn(),Dt())}function BS(n,e){return n.type&4?new US(e,n,Pc(n,e)):null}var VS=(n,e)=>null;function qm(n,e){return VS(n,e)}var Uo=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=HS;let n=e;return n})();function HS(){let n=bn();return GS(n,Dt())}var zS=Uo,ty=class extends zS{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Pc(this._hostTNode,this._hostLView)}get injector(){return new ar(this._hostTNode,this._hostLView)}get parentInjector(){let e=qd(this._hostTNode,this._hostLView);if(jg(e)){let t=lc(e,this._hostLView),i=cc(e),r=t[Xe].data[i+8];return new ar(r,t)}else return new ar(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Xm(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-_n}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=qm(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o),c=!!o&&!od(this._hostTNode);return this.insertImpl(a,r,c),a}createComponent(e,t,i,r,s){let o=e&&!Qb(e),a;if(o)a=t;else{let v=t||{};a=v.index,i=v.injector,r=v.projectableNodes,s=v.environmentInjector||v.ngModuleRef}let c=o?e:new Do(cr(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let m=(o?l:this.parentInjector).get(Mn,null);m&&(s=m)}let u=cr(c.componentType??{}),d=qm(this._lContainer,u?.id??null),h=d?.firstChild??null,p=c.create(l,r,h,s),g=!!d&&!od(this._hostTNode);return this.insertImpl(p.hostView,a,g),p}insert(e,t){return this.insertImpl(e,t,!1)}insertImpl(e,t,i){let r=e._lView,s=r[Xe];if(gb(r)){let c=this.indexOf(e);if(c!==-1)this.detach(c);else{let l=r[At],u=new ty(l,l[Fn],l[At]);u.detach(u.indexOf(e))}}let o=this._adjustIndex(t),a=this._lContainer;return LS(a,r,o,!i),e.attachToViewContainerRef(),tv(Xu(a),o,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Xm(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=ad(this._lContainer,t);i&&(dc(Xu(this._lContainer),t),lv(i[Xe],i))}detach(e){let t=this._adjustIndex(e,-1),i=ad(this._lContainer,t);return i&&dc(Xu(this._lContainer),t)!=null?new pr(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Xm(n){return n[rc]}function Xu(n){return n[rc]||(n[rc]=[])}function GS(n,e){let t,i=e[n.index];return pi(i)?t=i:(t=Hv(i,e,null,n),e[n.index]=t,Fc(e,t)),jS(t,e,n,i),new ty(t,n,e)}function WS(n,e){let t=n[zt],i=t.createComment(""),r=Un(e,n),s=Kd(t,r);return hc(t,s,i,bE(t,r),!1),i}var jS=$S;function $S(n,e,t,i){if(n[lr])return;let r;t.type&8?r=ni(i):r=WS(e,t),n[lr]=r}var ny=new Le("Application Initializer"),iy=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r}),this.appInits=be(ny,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let s of this.appInits){let o=s();if(_r(o))i.push(o);else if(Kv(o)){let a=new Promise((c,l)=>{o.subscribe({complete:c,error:l})});i.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{r()}).catch(s=>{this.reject(s)}),i.length===0&&r(),this.initialized=!0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Vc=(()=>{let e=class e{log(i){console.log(i)}warn(i){console.warn(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})();function qS(){return typeof $localize<"u"&&$localize.locale||xc}var gh=new Le("LocaleId",{providedIn:"root",factory:()=>be(gh,qe.Optional|qe.SkipSelf)||qS()});var vh=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new Ht(!1)}add(){this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Id=class{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},yh=(()=>{let e=class e{compileModuleSync(i){return new Dd(i)}compileModuleAsync(i){return Promise.resolve(this.compileModuleSync(i))}compileModuleAndAllComponentsSync(i){let r=this.compileModuleSync(i),s=hg(i),o=wv(s.declarations).reduce((a,c)=>{let l=cr(c);return l&&a.push(new Do(l)),a},[]);return new Id(r,o)}compileModuleAndAllComponentsAsync(i){return Promise.resolve(this.compileModuleAndAllComponentsSync(i))}clearCache(){}clearCacheFor(i){}getModuleId(i){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var ry=new Le("");var tc=null;var sy=new Le("PlatformDestroyListeners"),_h=new Le("appBootstrapListener");function XS(){ab(()=>{throw new ye(600,!1)})}function YS(n){return n.isBoundToModule}function ZS(n=[]){if(tc)return tc;let e=KS(n);return tc=e,XS(),JS(e),e}function JS(n){n.get(sh,null)?.forEach(t=>t())}function oy(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=ZS(i),s=[rC(),...t||[]],a=new Mc({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1}).injector,c=a.get(Tt);return c.run(()=>{a.resolveInjectorInitializers();let l=a.get(hi,null),u;c.runOutsideAngular(()=>{u=c.onError.subscribe({next:p=>{l.handleError(p)}})});let d=()=>a.destroy(),h=r.get(sy);return h.add(d),a.onDestroy(()=>{u.unsubscribe(),h.delete(d)}),eC(l,c,()=>{let p=a.get(iy);return p.runInitializers(),p.donePromise.then(()=>{let g=a.get(gh,xc);TS(g||xc);let v=a.get(ko);return e!==void 0&&v.bootstrap(e),v})})})}catch(e){return Promise.reject(e)}}function KS(n=[],e){return yr.create({name:e,providers:[{provide:Ic,useValue:"platform"},{provide:sy,useValue:new Set([()=>tc=null])},...n]})}function QS(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}function eC(n,e,t){try{let i=t();return _r(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var ko=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=be(ay),this.zoneIsStable=be(bv),this.componentTypes=[],this.components=[],this.isStable=be(vh).hasPendingTasks.pipe(vn(i=>i?De(!1):this.zoneIsStable),Du(),$a()),this._injector=be(Mn)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,r){let s=i instanceof mc;if(!this._injector.get(iy).done){let g="Cannot bootstrap as there are still asynchronous initializers running."+(!s&&dg(i)?"":" Bootstrap components in the `ngDoBootstrap` method of the root module.");throw new ye(405,!1)}let a;s?a=i:a=this._injector.get(Rc).resolveComponentFactory(i),this.componentTypes.push(a.componentType);let c=YS(a)?void 0:this._injector.get(Ni),l=r||a.selector,u=a.create(yr.NULL,[],l,c),d=u.location.nativeElement,h=u.injector.get(ry,null);return h?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),Yu(this.components,u),h?.unregisterApplication(d)}),this._loadComponent(u),u}tick(){if(this._runningTick)throw new ye(101,!1);try{this._runningTick=!0;for(let i of this._views)i.detectChanges()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1}}attachView(i){let r=i;this._views.push(r),r.attachToAppRef(this)}detachView(i){let r=i;Yu(this._views,r),r.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let r=this._injector.get(_h,[]);r.push(...this._bootstrapListeners),r.forEach(s=>s(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>Yu(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new ye(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Yu(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var ay=new Le("",{providedIn:"root",factory:()=>be(hi).handleError.bind(void 0)});function tC(){let n=be(Tt),e=be(hi);return t=>n.runOutsideAngular(()=>e.handleError(t))}var nC=(()=>{let e=class e{constructor(){this.zone=be(Tt),this.applicationRef=be(ko)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function iC(n){return[{provide:Tt,useFactory:n},{provide:Fo,multi:!0,useFactory:()=>{let e=be(nC,{optional:!0});return()=>e.initialize()}},{provide:ay,useFactory:tC},{provide:bv,useFactory:Ev}]}function rC(n){let e=iC(()=>new Tt(QS(n)));return Dc([[],e])}var Bo=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=sC;let n=e;return n})();function sC(n){return oC(bn(),Dt(),(n&16)===16)}function oC(n,e,t){if(Ac(n)&&!t){let i=Fi(n.index,e);return new pr(i,i)}else if(n.type&47){let i=e[ei];return new pr(i,e)}return null}var Rd=class{constructor(){}supports(e){return Yv(e)}create(e){return new Pd(e)}},aC=(n,e)=>e,Pd=class{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||aC}forEachItem(e){let t;for(t=this._itHead;t!==null;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,i=this._removalsHead,r=0,s=null;for(;t||i;){let o=!i||t&&t.currentIndex<Ym(i,r,s)?t:i,a=Ym(o,r,s),c=o.currentIndex;if(o===i)r--,i=i._nextRemoved;else if(t=t._next,o.previousIndex==null)r++;else{s||(s=[]);let l=a-r,u=c-r;if(l!=u){for(let h=0;h<l;h++){let p=h<s.length?s[h]:s[h]=0,g=p+h;u<=g&&g<l&&(s[h]=p+1)}let d=o.previousIndex;s[d]=u-l}}a!==c&&e(o,a,c)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)e(t)}diff(e){if(e==null&&(e=[]),!Yv(e))throw new ye(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._itHead,i=!1,r,s,o;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],o=this._trackByFn(a,s),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,s,o,a),i=!0):(i&&(t=this._verifyReinsertion(t,s,o,a)),Object.is(t.item,s)||this._addIdentityChange(t,s)),t=t._next}else r=0,eS(e,a=>{o=this._trackByFn(r,a),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,a,o,r),i=!0):(i&&(t=this._verifyReinsertion(t,a,o,r)),Object.is(t.item,a)||this._addIdentityChange(t,a)),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,i,r){let s;return e===null?s=this._itTail:(s=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,s,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,s,r)):e=this._addAfter(new Nd(t,i),s,r)),e}_verifyReinsertion(e,t,i,r){let s=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return s!==null?e=this._reinsertAfter(s,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let t=e._next;this._addToRemovals(this._unlink(e)),e=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,s=e._nextRemoved;return r===null?this._removalsHead=s:r._nextRemoved=s,s===null?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(e,t,i),this._addToMoves(e,i),e}_moveAfter(e,t,i){return this._unlink(e),this._insertAfter(e,t,i),this._addToMoves(e,i),e}_addAfter(e,t,i){return this._insertAfter(e,t,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,i){let r=t===null?this._itHead:t._next;return e._next=r,e._prev=t,r===null?this._itTail=e:r._prev=e,t===null?this._itHead=e:t._next=e,this._linkedRecords===null&&(this._linkedRecords=new bc),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let t=e._prev,i=e._next;return t===null?this._itHead=i:t._next=i,i===null?this._itTail=t:i._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new bc),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},Nd=class{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}},Od=class{constructor(){this._head=null,this._tail=null}add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let i;for(i=this._head;i!==null;i=i._nextDup)if((t===null||t<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let t=e._prevDup,i=e._nextDup;return t===null?this._head=i:t._nextDup=i,i===null?this._tail=t:i._prevDup=t,this._head===null}},bc=class{constructor(){this.map=new Map}put(e){let t=e.trackById,i=this.map.get(t);i||(i=new Od,this.map.set(t,i)),i.add(e)}get(e,t){let i=e,r=this.map.get(i);return r?r.get(e,t):null}remove(e){let t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function Ym(n,e,t){let i=n.previousIndex;if(i===null)return i;let r=0;return t&&i<t.length&&(r=t[i]),i+e+r}function Zm(){return new xh([new Rd])}var xh=(()=>{let e=class e{constructor(i){this.factories=i}static create(i,r){if(r!=null){let s=r.factories.slice();i=i.concat(s)}return new e(i)}static extend(i){return{provide:e,useFactory:r=>e.create(i,r||Zm()),deps:[[e,new nv,new Yd]]}}find(i){let r=this.factories.find(s=>s.supports(i));if(r!=null)return r;throw new ye(901,!1)}};e.\u0275prov=Fe({token:e,providedIn:"root",factory:Zm});let n=e;return n})();var Mh=null;function gi(){return Mh}function hy(n){Mh||(Mh=n)}var Hc=class{},Sn=new Le("DocumentToken"),fy=(()=>{let e=class e{historyGo(i){throw new Error("Not implemented")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:function(){return(()=>be(uC))()},providedIn:"platform"});let n=e;return n})();var uC=(()=>{let e=class e extends fy{constructor(){super(),this._doc=be(Sn),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return gi().getBaseHref(this._doc)}onPopState(i){let r=gi().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",i,!1),()=>r.removeEventListener("popstate",i)}onHashChange(i){let r=gi().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",i,!1),()=>r.removeEventListener("hashchange",i)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(i){this._location.pathname=i}pushState(i,r,s){this._history.pushState(i,r,s)}replaceState(i,r,s){this._history.replaceState(i,r,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(i=0){this._history.go(i)}getState(){return this._history.state}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:function(){return(()=>new e)()},providedIn:"platform"});let n=e;return n})();function py(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function cy(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function Mr(n){return n&&n[0]!=="?"?"?"+n:n}var Gc=(()=>{let e=class e{historyGo(i){throw new Error("Not implemented")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:function(){return(()=>be(my))()},providedIn:"root"});let n=e;return n})(),dC=new Le("appBaseHref"),my=(()=>{let e=class e extends Gc{constructor(i,r){super(),this._platformLocation=i,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??be(Sn).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}prepareExternalUrl(i){return py(this._baseHref,i)}path(i=!1){let r=this._platformLocation.pathname+Mr(this._platformLocation.search),s=this._platformLocation.hash;return s&&i?`${r}${s}`:r}pushState(i,r,s,o){let a=this.prepareExternalUrl(s+Mr(o));this._platformLocation.pushState(i,r,a)}replaceState(i,r,s,o){let a=this.prepareExternalUrl(s+Mr(o));this._platformLocation.replaceState(i,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(Ke(fy),Ke(dC,8))},e.\u0275prov=Fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Eh=(()=>{let e=class e{constructor(i){this._subject=new $t,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=i;let r=this._locationStrategy.getBaseHref();this._basePath=pC(cy(ly(r))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(i=!1){return this.normalize(this._locationStrategy.path(i))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(i,r=""){return this.path()==this.normalize(i+Mr(r))}normalize(i){return e.stripTrailingSlash(fC(this._basePath,ly(i)))}prepareExternalUrl(i){return i&&i[0]!=="/"&&(i="/"+i),this._locationStrategy.prepareExternalUrl(i)}go(i,r="",s=null){this._locationStrategy.pushState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+Mr(r)),s)}replaceState(i,r="",s=null){this._locationStrategy.replaceState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+Mr(r)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(i=0){this._locationStrategy.historyGo?.(i)}onUrlChange(i){return this._urlChangeListeners.push(i),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)})),()=>{let r=this._urlChangeListeners.indexOf(i);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(i="",r){this._urlChangeListeners.forEach(s=>s(i,r))}subscribe(i,r,s){return this._subject.subscribe({next:i,error:r,complete:s})}};e.normalizeQueryParams=Mr,e.joinWithSlash=py,e.stripTrailingSlash=cy,e.\u0275fac=function(r){return new(r||e)(Ke(Gc))},e.\u0275prov=Fe({token:e,factory:function(){return hC()},providedIn:"root"});let n=e;return n})();function hC(){return new Eh(Ke(Gc))}function fC(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function ly(n){return n.replace(/\/index.html$/,"")}function pC(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function gy(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var bh=class{constructor(e,t,i,r){this.$implicit=e,this.ngForOf=t,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},vy=(()=>{let e=class e{set ngForOf(i){this._ngForOf=i,this._ngForOfDirty=!0}set ngForTrackBy(i){this._trackByFn=i}get ngForTrackBy(){return this._trackByFn}constructor(i,r,s){this._viewContainer=i,this._template=r,this._differs=s,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(i){i&&(this._template=i)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let i=this._ngForOf;if(!this._differ&&i)if(!1)try{}catch{}else this._differ=this._differs.find(i).create(this.ngForTrackBy)}if(this._differ){let i=this._differ.diff(this._ngForOf);i&&this._applyChanges(i)}}_applyChanges(i){let r=this._viewContainer;i.forEachOperation((s,o,a)=>{if(s.previousIndex==null)r.createEmbeddedView(this._template,new bh(s.item,this._ngForOf,-1,-1),a===null?void 0:a);else if(a==null)r.remove(o===null?void 0:o);else if(o!==null){let c=r.get(o);r.move(c,a),uy(c,s)}});for(let s=0,o=r.length;s<o;s++){let c=r.get(s).context;c.index=s,c.count=o,c.ngForOf=this._ngForOf}i.forEachIdentityChange(s=>{let o=r.get(s.currentIndex);uy(o,s)})}static ngTemplateContextGuard(i,r){return!0}};e.\u0275fac=function(r){return new(r||e)(ct(Uo),ct(mh),ct(xh))},e.\u0275dir=fn({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let n=e;return n})();function uy(n,e){n.context.$implicit=e.item}var Vo=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Li({type:e}),e.\u0275inj=Oi({});let n=e;return n})(),yy="browser",mC="server";function wh(n){return n===mC}var zc=class{};var Ah=class extends Hc{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Th=class n extends Ah{static makeCurrent(){hy(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=vC();return t==null?null:yC(t)}resetBaseElement(){Ho=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return gy(document.cookie,e)}},Ho=null;function vC(){return Ho=Ho||document.querySelector("base"),Ho?Ho.getAttribute("href"):null}var Wc;function yC(n){Wc=Wc||document.createElement("a"),Wc.setAttribute("href",n);let e=Wc.pathname;return e.charAt(0)==="/"?e:`/${e}`}var _C=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:e.\u0275fac});let n=e;return n})(),Dh=new Le("EventManagerPlugins"),by=(()=>{let e=class e{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(s=>{s.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,s){return this._findPluginFor(r).addEventListener(i,r,s)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(o=>o.supports(i)),!r)throw new ye(5101,!1);return this._eventNameToPlugin.set(i,r),r}};e.\u0275fac=function(r){return new(r||e)(Ke(Dh),Ke(Tt))},e.\u0275prov=Fe({token:e,factory:e.\u0275fac});let n=e;return n})(),jc=class{constructor(e){this._doc=e}},Sh="ng-app-id",Ey=(()=>{let e=class e{constructor(i,r,s,o={}){this.doc=i,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=wh(o),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(s=>s.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${Sh}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(i,r){let s=this.styleRef;if(s.has(i)){let o=s.get(i);return o.usage+=r,o.usage}return s.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===i)return s.delete(r),o.removeAttribute(Sh),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(Sh,this.appId),a}}addStyleToHost(i,r){let s=this.getStyleElement(i,r);i.appendChild(s);let o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(Ke(Sn),Ke(rh),Ke(oh,8),Ke(ds))},e.\u0275prov=Fe({token:e,factory:e.\u0275fac});let n=e;return n})(),Ch={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Rh=/%COMP%/g,wy="%COMP%",xC=`_nghost-${wy}`,MC=`_ngcontent-${wy}`,bC=!1,EC=new Le("RemoveStylesOnCompDestroy",{providedIn:"root",factory:()=>bC});function wC(n){return MC.replace(Rh,n)}function SC(n){return xC.replace(Rh,n)}function Sy(n,e){return e.map(t=>t.replace(Rh,n))}var _y=(()=>{let e=class e{constructor(i,r,s,o,a,c,l,u=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=wh(c),this.defaultRenderer=new zo(i,a,l,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Qn.ShadowDom&&(r=gt(de({},r),{encapsulation:Qn.Emulated}));let s=this.getOrCreateRenderer(i,r);return s instanceof $c?s.applyToHost(i):s instanceof Go&&s.applyStyles(),s}getOrCreateRenderer(i,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(r.encapsulation){case Qn.Emulated:o=new $c(l,u,r,this.appId,d,a,c,h);break;case Qn.ShadowDom:return new Ih(l,u,i,r,a,c,this.nonce,h);default:o=new Go(l,u,r,d,a,c,h);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(Ke(by),Ke(Ey),Ke(rh),Ke(EC),Ke(Sn),Ke(ds),Ke(Tt),Ke(oh))},e.\u0275prov=Fe({token:e,factory:e.\u0275fac});let n=e;return n})(),zo=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(Ch[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(xy(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(xy(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new ye(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Ch[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Ch[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(di.DashCase|di.Important)?e.style.setProperty(t,i,r&di.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&di.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e[t]=i}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=gi().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function xy(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Ih=class extends zo{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=Sy(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Go=class extends zo{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?Sy(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},$c=class extends Go{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=wC(l),this.hostAttr=SC(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},CC=(()=>{let e=class e extends jc{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,s){return i.addEventListener(r,s,!1),()=>this.removeEventListener(i,r,s)}removeEventListener(i,r,s){return i.removeEventListener(r,s)}};e.\u0275fac=function(r){return new(r||e)(Ke(Sn))},e.\u0275prov=Fe({token:e,factory:e.\u0275fac});let n=e;return n})(),My=["alt","control","meta","shift"],AC={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},TC={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},DC=(()=>{let e=class e extends jc{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,r,s){let o=e.parseEventName(r),a=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>gi().onAndCancel(i,o.domEventName,a))}static parseEventName(i){let r=i.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),My.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),a+=u+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(i,r){let s=AC[i.key]||i.key,o="";return r.indexOf("code.")>-1&&(s=i.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),My.forEach(a=>{if(a!==s){let c=TC[a];c(i)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(i,r,s){return o=>{e.matchEventFullKeyCode(o,i)&&s.runGuarded(()=>r(o))}}static _normalizeKey(i){switch(i){case"esc":return"escape";default:return i}}};e.\u0275fac=function(r){return new(r||e)(Ke(Sn))},e.\u0275prov=Fe({token:e,factory:e.\u0275fac});let n=e;return n})();function Cy(n,e){return oy(de({rootComponent:n},IC(e)))}function IC(n){return{appProviders:[...LC,...n?.providers??[]],platformProviders:OC}}function RC(){Th.makeCurrent()}function PC(){return new hi}function NC(){return pv(document),document}var OC=[{provide:ds,useValue:yy},{provide:sh,useValue:RC,multi:!0},{provide:Sn,useFactory:NC,deps:[]}];var LC=[{provide:Ic,useValue:"root"},{provide:hi,useFactory:PC,deps:[]},{provide:Dh,useClass:CC,multi:!0,deps:[Sn,Tt,ds]},{provide:Dh,useClass:DC,multi:!0,deps:[Sn]},_y,Ey,by,{provide:To,useExisting:_y},{provide:zc,useClass:_C,deps:[]},[]];function FC(){return new Ph(Ke(Sn))}var Ph=(()=>{let e=class e{constructor(i){this._doc=i}getTitle(){return this._doc.title}setTitle(i){this._doc.title=i||""}};e.\u0275fac=function(r){return new(r||e)(Ke(Sn))},e.\u0275prov=Fe({token:e,factory:function(r){let s=null;return r?s=new r:s=FC(),s},providedIn:"root"});let n=e;return n})();var Pe="primary",Zo=Symbol("RouteTitle"),Uh=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function xs(n){return new Uh(n)}function BC(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function VC(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!ri(n[t],e[t]))return!1;return!0}function ri(n,e){let t=n?Object.keys(n):void 0,i=e?Object.keys(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!ky(n[r],e[r]))return!1;return!0}function ky(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function By(n){return n.length>0?n[n.length-1]:null}function Bi(n){return Su(n)?n:_r(n)?Et(Promise.resolve(n)):De(n)}var HC={exact:Hy,subset:zy},Vy={exact:zC,subset:GC,ignored:()=>!0};function Ay(n,e,t){return HC[t.paths](n.root,e.root,t.matrixParams)&&Vy[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function zC(n,e){return ri(n,e)}function Hy(n,e,t){if(!Er(n.segments,e.segments)||!Yc(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!Hy(n.children[i],e.children[i],t))return!1;return!0}function GC(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>ky(n[t],e[t]))}function zy(n,e,t){return Gy(n,e,e.segments,t)}function Gy(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Er(r,t)||e.hasChildren()||!Yc(r,t,i))}else if(n.segments.length===t.length){if(!Er(n.segments,t)||!Yc(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!zy(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Er(n.segments,r)||!Yc(n.segments,r,i)||!n.children[Pe]?!1:Gy(n.children[Pe],e,s,i)}}function Yc(n,e,t){return e.every((i,r)=>Vy[t](n[r].parameters,i.parameters))}var ki=class{constructor(e=new it([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=xs(this.queryParams)),this._queryParamMap}toString(){return $C.serialize(this)}},it=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Zc(this)}},br=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap||(this._parameterMap=xs(this.parameters)),this._parameterMap}toString(){return $y(this)}};function WC(n,e){return Er(n,e)&&n.every((t,i)=>ri(t.parameters,e[i].parameters))}function Er(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function jC(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Pe&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Pe&&(t=t.concat(e(r,i)))}),t}var Wy=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:function(){return(()=>new Kc)()},providedIn:"root"});let n=e;return n})(),Kc=class{parse(e){let t=new Bh(e);return new ki(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Wo(e.root,!0)}`,i=YC(e.queryParams),r=typeof e.fragment=="string"?`#${qC(e.fragment)}`:"";return`${t}${i}${r}`}},$C=new Kc;function Zc(n){return n.segments.map(e=>$y(e)).join("/")}function Wo(n,e){if(!n.hasChildren())return Zc(n);if(e){let t=n.children[Pe]?Wo(n.children[Pe],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Pe&&i.push(`${r}:${Wo(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=jC(n,(i,r)=>r===Pe?[Wo(n.children[Pe],!1)]:[`${r}:${Wo(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Pe]!=null?`${Zc(n)}/${t[0]}`:`${Zc(n)}/(${t.join("//")})`}}function jy(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function qc(n){return jy(n).replace(/%3B/gi,";")}function qC(n){return encodeURI(n)}function kh(n){return jy(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Jc(n){return decodeURIComponent(n)}function Ty(n){return Jc(n.replace(/\+/g,"%20"))}function $y(n){return`${kh(n.path)}${XC(n.parameters)}`}function XC(n){return Object.keys(n).map(e=>`;${kh(e)}=${kh(n[e])}`).join("")}function YC(n){let e=Object.keys(n).map(t=>{let i=n[t];return Array.isArray(i)?i.map(r=>`${qc(t)}=${qc(r)}`).join("&"):`${qc(t)}=${qc(i)}`}).filter(t=>!!t);return e.length?`?${e.join("&")}`:""}var ZC=/^[^\/()?;#]+/;function Nh(n){let e=n.match(ZC);return e?e[0]:""}var JC=/^[^\/()?;=#]+/;function KC(n){let e=n.match(JC);return e?e[0]:""}var QC=/^[^=?&#]+/;function eA(n){let e=n.match(QC);return e?e[0]:""}var tA=/^[^&#]+/;function nA(n){let e=n.match(tA);return e?e[0]:""}var Bh=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new it([],{}):new it([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Pe]=new it(e,t)),i}parseSegment(){let e=Nh(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new ye(4009,!1);return this.capture(e),new br(Jc(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=KC(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Nh(this.remaining);r&&(i=r,this.capture(i))}e[Jc(t)]=Jc(i)}parseQueryParam(e){let t=eA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=nA(this.remaining);o&&(i=o,this.capture(i))}let r=Ty(t),s=Ty(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Nh(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new ye(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Pe);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Pe]:new it([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new ye(4011,!1)}};function qy(n){return n.segments.length>0?new it([],{[Pe]:n}):n}function Xy(n){let e={};for(let i of Object.keys(n.children)){let r=n.children[i],s=Xy(r);if(i===Pe&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new it(n.segments,e);return iA(t)}function iA(n){if(n.numberOfChildren===1&&n.children[Pe]){let e=n.children[Pe];return new it(n.segments.concat(e.segments),e.children)}return n}function Ms(n){return n instanceof ki}function rA(n,e,t=null,i=null){let r=Yy(n);return Zy(r,e,t,i)}function Yy(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new it(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=qy(i);return e??r}function Zy(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return Oh(r,r,r,t,i);let s=sA(e);if(s.toRoot())return Oh(r,r,new it([],{}),t,i);let o=oA(s,r,n),a=o.processChildren?qo(o.segmentGroup,o.index,s.commands):Ky(o.segmentGroup,o.index,s.commands);return Oh(r,o.segmentGroup,a,t,i)}function Qc(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Jo(n){return typeof n=="object"&&n!=null&&n.outlets}function Oh(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=Jy(n,e,t);let a=qy(Xy(o));return new ki(a,s,r)}function Jy(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=Jy(s,e,t)}),new it(n.segments,i)}var el=class{constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Qc(i[0]))throw new ye(4003,!1);let r=i.find(Jo);if(r&&r!==By(i))throw new ye(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function sA(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new el(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new el(t,e,i)}var gs=class{constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function oA(n,e,t){if(n.isAbsolute)return new gs(e,!0,0);if(!t)return new gs(e,!1,NaN);if(t.parent===null)return new gs(t,!0,0);let i=Qc(n.commands[0])?0:1,r=t.segments.length-1+i;return aA(t,r,n.numberOfDoubleDots)}function aA(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new ye(4005,!1);r=i.segments.length}return new gs(i,!1,r-s)}function cA(n){return Jo(n[0])?n[0].outlets:{[Pe]:n}}function Ky(n,e,t){if(n||(n=new it([],{})),n.segments.length===0&&n.hasChildren())return qo(n,e,t);let i=lA(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new it(n.segments.slice(0,i.pathIndex),{});return s.children[Pe]=new it(n.segments.slice(i.pathIndex),n.children),qo(s,0,r)}else return i.match&&r.length===0?new it(n.segments,{}):i.match&&!n.hasChildren()?Vh(n,e,t):i.match?qo(n,0,r):Vh(n,e,t)}function qo(n,e,t){if(t.length===0)return new it(n.segments,{});{let i=cA(t),r={};if(Object.keys(i).some(s=>s!==Pe)&&n.children[Pe]&&n.numberOfChildren===1&&n.children[Pe].segments.length===0){let s=qo(n.children[Pe],e,t);return new it(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Ky(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new it(n.segments,r)}}function lA(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Jo(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!Iy(c,l,o))return s;i+=2}else{if(!Iy(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Vh(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Jo(s)){let c=uA(s.outlets);return new it(i,c)}if(r===0&&Qc(t[0])){let c=n.segments[e];i.push(new br(c.path,Dy(t[0]))),r++;continue}let o=Jo(s)?s.outlets[Pe]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&Qc(a)?(i.push(new br(o,Dy(a))),r+=2):(i.push(new br(o,{})),r++)}return new it(i,{})}function uA(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Vh(new it([],{}),0,i))}),e}function Dy(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function Iy(n,e,t){return n==t.path&&ri(e,t.parameters)}var Xo="imperative",Cn=class{constructor(e,t){this.id=e,this.url=t}},Ko=class extends Cn{constructor(e,t,i="imperative",r=null){super(e,t),this.type=0,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},bs=class extends Cn{constructor(e,t,i){super(e,t),this.urlAfterRedirects=i,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},wr=class extends Cn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Sr=class extends Cn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=16}},Qo=class extends Cn{constructor(e,t,i,r){super(e,t),this.error=i,this.target=r,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},tl=class extends Cn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Hh=class extends Cn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},zh=class extends Cn{constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Gh=class extends Cn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Wh=class extends Cn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jh=class{constructor(e){this.route=e,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},$h=class{constructor(e){this.route=e,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},qh=class{constructor(e){this.snapshot=e,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Xh=class{constructor(e){this.snapshot=e,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Yh=class{constructor(e){this.snapshot=e,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Zh=class{constructor(e){this.snapshot=e,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var ea=class{},ta=class{constructor(e){this.url=e}};var Jh=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new al,this.attachRef=null}},al=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(i,r){let s=this.getOrCreateContext(i);s.outlet=r,this.contexts.set(i,s)}onChildOutletDestroyed(i){let r=this.getContext(i);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let i=this.contexts;return this.contexts=new Map,i}onOutletReAttached(i){this.contexts=i}getOrCreateContext(i){let r=this.getContext(i);return r||(r=new Jh,this.contexts.set(i,r)),r}getContext(i){return this.contexts.get(i)||null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),nl=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Kh(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Kh(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Qh(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Qh(e,this._root).map(t=>t.value)}};function Kh(n,e){if(n===e.value)return e;for(let t of e.children){let i=Kh(n,t);if(i)return i}return null}function Qh(n,e){if(n===e.value)return[e];for(let t of e.children){let i=Qh(n,t);if(i.length)return i.unshift(e),i}return[]}var Bn=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function ms(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var il=class extends nl{constructor(e,t){super(e),this.snapshot=t,cf(this,e)}toString(){return this.snapshot.toString()}};function Qy(n,e){let t=dA(n,e),i=new Ht([new br("",{})]),r=new Ht({}),s=new Ht({}),o=new Ht({}),a=new Ht(""),c=new Es(i,r,o,a,s,Pe,e,t.root);return c.snapshot=t.root,new il(new Bn(c,[]),t)}function dA(n,e){let t={},i={},r={},s="",o=new vs([],t,r,s,i,Pe,e,null,{});return new rl("",new Bn(o,[]))}var Es=class{constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(nt(l=>l[Zo]))??De(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(nt(e=>xs(e)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(nt(e=>xs(e)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function e_(n,e="emptyOnly"){let t=n.pathFromRoot,i=0;if(e!=="always")for(i=t.length-1;i>=1;){let r=t[i],s=t[i-1];if(r.routeConfig&&r.routeConfig.path==="")i--;else if(!s.component)i--;else break}return hA(t.slice(i))}function hA(n){return n.reduce((e,t)=>{let i=de(de({},e.params),t.params),r=de(de({},e.data),t.data),s=de(de(de(de({},t.data),e.resolve),t.routeConfig?.data),t._resolvedData);return{params:i,data:r,resolve:s}},{params:{},data:{},resolve:{}})}var vs=class{get title(){return this.data?.[Zo]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=xs(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=xs(this.queryParams)),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},rl=class extends nl{constructor(e,t){super(t),this.url=e,cf(this,t)}toString(){return t_(this._root)}};function cf(n,e){e.value._routerState=n,e.children.forEach(t=>cf(n,t))}function t_(n){let e=n.children.length>0?` { ${n.children.map(t_).join(", ")} } `:"";return`${n.value}${e}`}function Lh(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,ri(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),ri(e.params,t.params)||n.paramsSubject.next(t.params),VC(e.url,t.url)||n.urlSubject.next(t.url),ri(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function ef(n,e){let t=ri(n.params,e.params)&&WC(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||ef(n.parent,e.parent))}var lf=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=Pe,this.activateEvents=new $t,this.deactivateEvents=new $t,this.attachEvents=new $t,this.detachEvents=new $t,this.parentContexts=be(al),this.location=be(Uo),this.changeDetector=be(Bo),this.environmentInjector=be(Mn),this.inputBinder=be(uf,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(i){if(i.name){let{firstChange:r,previousValue:s}=i.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(i){return this.parentContexts.getContext(i)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let i=this.parentContexts.getContext(this.name);i?.route&&(i.attachRef?this.attach(i.attachRef,i.route):this.activateWith(i.route,i.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new ye(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new ye(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new ye(4012,!1);this.location.detach();let i=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(i.instance),i}attach(i,r){this.activated=i,this._activatedRoute=r,this.location.insert(i.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(i.instance)}deactivate(){if(this.activated){let i=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(i)}}activateWith(i,r){if(this.isActivated)throw new ye(4013,!1);this._activatedRoute=i;let s=this.location,a=i.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new tf(i,c,s.injector);this.activated=s.createComponent(a,{index:s.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=fn({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[gr]});let n=e;return n})(),tf=class{constructor(e,t,i){this.route=e,this.childContexts=t,this.parent=i}get(e,t){return e===Es?this.route:e===al?this.childContexts:this.parent.get(e,t)}},uf=new Le("");function fA(n,e,t){let i=na(n,e._root,t?t._root:void 0);return new il(i,e)}function na(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=pA(n,e,t);return new Bn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>na(n,a)),o}}let i=mA(e.value),r=e.children.map(s=>na(n,s));return new Bn(i,r)}}function pA(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return na(n,i,r);return na(n,i)})}function mA(n){return new Es(new Ht(n.url),new Ht(n.params),new Ht(n.queryParams),new Ht(n.fragment),new Ht(n.data),n.outlet,n.component,n)}var n_="ngNavigationCancelingError";function i_(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Ms(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=r_(!1,0,e);return r.url=t,r.navigationBehaviorOptions=i,r}function r_(n,e,t){let i=new Error("NavigationCancelingError: "+(n||""));return i[n_]=!0,i.cancellationCode=e,t&&(i.url=t),i}function gA(n){return s_(n)&&Ms(n.url)}function s_(n){return n&&n[n_]}var vA=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Ut({type:e,selectors:[["ng-component"]],standalone:!0,features:[Bt],decls:1,vars:0,template:function(r,s){r&1&&En(0,"router-outlet")},dependencies:[lf],encapsulation:2});let n=e;return n})();function yA(n,e){return n.providers&&!n._injector&&(n._injector=ph(n.providers,e,`Route: ${n.path}`)),n._injector??e}function df(n){let e=n.children&&n.children.map(df),t=e?gt(de({},n),{children:e}):de({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Pe&&(t.component=vA),t}function Vn(n){return n.outlet||Pe}function _A(n,e){let t=n.filter(i=>Vn(i)===e);return t.push(...n.filter(i=>Vn(i)!==e)),t}function ia(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var xA=(n,e,t,i)=>nt(r=>(new nf(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),nf=class{constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Lh(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=ms(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=ms(e);for(let o of Object.keys(s))this.deactivateRouteAndItsChildren(s[o],r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=ms(e);for(let o of Object.keys(s))this.deactivateRouteAndItsChildren(s[o],r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=ms(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Zh(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Xh(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Lh(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Lh(a.route.value),this.activateChildRoutes(e,null,o.children)}else{let a=ia(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,i)}},sl=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},ys=class{constructor(e,t){this.component=e,this.route=t}};function MA(n,e,t){let i=n._root,r=e?e._root:null;return jo(i,r,t,[i.value])}function bA(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Ss(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!eg(n)?n:e.get(n):i}function jo(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=ms(e);return n.children.forEach(o=>{EA(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Yo(a,t.getContext(o),r)),r}function EA(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=wA(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new sl(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?jo(n,e,a?a.children:null,i,r):jo(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new ys(a.outlet.component,o))}else o&&Yo(e,a,r),r.canActivateChecks.push(new sl(i)),s.component?jo(n,null,a?a.children:null,i,r):jo(n,null,t,i,r);return r}function wA(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Er(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Er(n.url,e.url)||!ri(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ef(n,e)||!ri(n.queryParams,e.queryParams);case"paramsChange":default:return!ef(n,e)}}function Yo(n,e,t){let i=ms(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Yo(o,e.children.getContext(s),t):Yo(o,null,t):Yo(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new ys(e.outlet.component,r)):t.canDeactivateChecks.push(new ys(null,r)):t.canDeactivateChecks.push(new ys(null,r))}function ra(n){return typeof n=="function"}function SA(n){return typeof n=="boolean"}function CA(n){return n&&ra(n.canLoad)}function AA(n){return n&&ra(n.canActivate)}function TA(n){return n&&ra(n.canActivateChild)}function DA(n){return n&&ra(n.canDeactivate)}function IA(n){return n&&ra(n.canMatch)}function o_(n){return n instanceof ci||n?.name==="EmptyError"}var Xc=Symbol("INITIAL_VALUE");function ws(){return vn(n=>Ga(n.map(e=>e.pipe(ui(1),Nu(Xc)))).pipe(nt(e=>{for(let t of e)if(t!==!0){if(t===Xc)return Xc;if(t===!1||t instanceof ki)return t}return!0}),Nn(e=>e!==Xc),ui(1)))}function RA(n,e){return Ct(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?De(gt(de({},t),{guardsResult:!0})):PA(o,i,r,n).pipe(Ct(a=>a&&SA(a)?NA(i,s,n,e):De(a)),nt(a=>gt(de({},t),{guardsResult:a})))})}function PA(n,e,t,i){return Et(n).pipe(Ct(r=>kA(r.component,r.route,t,e,i)),Yn(r=>r!==!0,!0))}function NA(n,e,t,i){return Et(e).pipe(Yr(r=>Xr(LA(r.route.parent,i),OA(r.route,i),UA(n,r.path,t),FA(n,r.route,t))),Yn(r=>r!==!0,!0))}function OA(n,e){return n!==null&&e&&e(new Yh(n)),De(!0)}function LA(n,e){return n!==null&&e&&e(new qh(n)),De(!0)}function FA(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return De(!0);let r=i.map(s=>Wa(()=>{let o=ia(e)??t,a=Ss(s,o),c=AA(a)?a.canActivate(e,n):o.runInContext(()=>a(e,n));return Bi(c).pipe(Yn())}));return De(r).pipe(ws())}function UA(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>bA(o)).filter(o=>o!==null).map(o=>Wa(()=>{let a=o.guards.map(c=>{let l=ia(o.node)??t,u=Ss(c,l),d=TA(u)?u.canActivateChild(i,n):l.runInContext(()=>u(i,n));return Bi(d).pipe(Yn())});return De(a).pipe(ws())}));return De(s).pipe(ws())}function kA(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return De(!0);let o=s.map(a=>{let c=ia(e)??r,l=Ss(a,c),u=DA(l)?l.canDeactivate(n,e,t,i):c.runInContext(()=>l(n,e,t,i));return Bi(u).pipe(Yn())});return De(o).pipe(ws())}function BA(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return De(!0);let s=r.map(o=>{let a=Ss(o,n),c=CA(a)?a.canLoad(e,t):n.runInContext(()=>a(e,t));return Bi(c)});return De(s).pipe(ws(),a_(i))}function a_(n){return xu(Ft(e=>{if(Ms(e))throw i_(n,e)}),nt(e=>e===!0))}function VA(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return De(!0);let s=r.map(o=>{let a=Ss(o,n),c=IA(a)?a.canMatch(e,t):n.runInContext(()=>a(e,t));return Bi(c)});return De(s).pipe(ws(),a_(i))}var _s=class{constructor(e){this.segmentGroup=e||null}},ol=class{constructor(e){this.urlTree=e}};function ps(n){return sr(new _s(n))}function Ry(n){return sr(new ol(n))}function HA(n){return sr(new ye(4e3,!1))}function zA(n){return sr(r_(!1,3))}var rf=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}noMatchError(e){return new ye(4002,!1)}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return De(i);if(r.numberOfChildren>1||!r.children[Pe])return HA(e.redirectTo);r=r.children[Pe]}}applyRedirectCommands(e,t,i){return this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i)}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new ki(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new it(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new ye(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},sf={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function GA(n,e,t,i,r){let s=hf(n,e,t);return s.matched?(i=yA(e,i),VA(i,e,t,r).pipe(nt(o=>o===!0?s:de({},sf)))):De(s)}function hf(n,e,t){if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?de({},sf):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||BC)(t,n,e);if(!r)return de({},sf);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?de(de({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function Py(n,e,t,i){return t.length>0&&$A(n,t,i)?{segmentGroup:new it(e,jA(i,new it(t,n.children))),slicedSegments:[]}:t.length===0&&qA(n,t,i)?{segmentGroup:new it(n.segments,WA(n,e,t,i,n.children)),slicedSegments:t}:{segmentGroup:new it(n.segments,n.children),slicedSegments:t}}function WA(n,e,t,i,r){let s={};for(let o of i)if(cl(n,t,o)&&!r[Vn(o)]){let a=new it([],{});s[Vn(o)]=a}return de(de({},r),s)}function jA(n,e){let t={};t[Pe]=e;for(let i of n)if(i.path===""&&Vn(i)!==Pe){let r=new it([],{});t[Vn(i)]=r}return t}function $A(n,e,t){return t.some(i=>cl(n,e,i)&&Vn(i)!==Pe)}function qA(n,e,t){return t.some(i=>cl(n,e,i))}function cl(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function XA(n,e,t,i){return Vn(n)!==i&&(i===Pe||!cl(e,t,n))?!1:n.path==="**"?!0:hf(e,n,t).matched}function YA(n,e,t){return e.length===0&&!n.children[t]}function ZA(n,e,t,i,r,s,o="emptyOnly"){return new of(n,e,t,i,r,o,s).recognize()}var of=class{constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.allowRedirects=!0,this.applyRedirects=new rf(this.urlSerializer,this.urlTree)}noMatchError(e){return new ye(4002,!1)}recognize(){let e=Py(this.urlTree.root,[],[],this.config).segmentGroup;return this.processSegmentGroup(this.injector,this.config,e,Pe).pipe(li(t=>{if(t instanceof ol)return this.allowRedirects=!1,this.urlTree=t.urlTree,this.match(t.urlTree);throw t instanceof _s?this.noMatchError(t):t}),nt(t=>{let i=new vs([],Object.freeze({}),Object.freeze(de({},this.urlTree.queryParams)),this.urlTree.fragment,{},Pe,this.rootComponentType,null,{}),r=new Bn(i,t),s=new rl("",r),o=rA(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root),{state:s,tree:o}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e.root,Pe).pipe(li(i=>{throw i instanceof _s?this.noMatchError(i):i}))}inheritParamsAndData(e){let t=e.value,i=e_(t,this.paramsInheritanceStrategy);t.params=Object.freeze(i.params),t.data=Object.freeze(i.data),e.children.forEach(r=>this.inheritParamsAndData(r))}processSegmentGroup(e,t,i,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i):this.processSegment(e,t,i,i.segments,r,!0)}processChildren(e,t,i){let r=[];for(let s of Object.keys(i.children))s==="primary"?r.unshift(s):r.push(s);return Et(r).pipe(Yr(s=>{let o=i.children[s],a=_A(t,s);return this.processSegmentGroup(e,a,o,s)}),Ru((s,o)=>(s.push(...o),s)),Ii(null),Iu(),Ct(s=>{if(s===null)return ps(i);let o=c_(s);return JA(o),De(o)}))}processSegment(e,t,i,r,s,o){return Et(t).pipe(Yr(a=>this.processSegmentAgainstRoute(a._injector??e,t,a,i,r,s,o).pipe(li(c=>{if(c instanceof _s)return De(null);throw c}))),Yn(a=>!!a),li(a=>{if(o_(a))return YA(i,r,s)?De([]):ps(i);throw a}))}processSegmentAgainstRoute(e,t,i,r,s,o,a){return XA(i,r,s,o)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,a):a&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o):ps(r):ps(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o){return r.path==="**"?this.expandWildCardWithParamsAgainstRouteUsingRedirect(e,i,r,o):this.expandRegularSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o)}expandWildCardWithParamsAgainstRouteUsingRedirect(e,t,i,r){let s=this.applyRedirects.applyRedirectCommands([],i.redirectTo,{});return i.redirectTo.startsWith("/")?Ry(s):this.applyRedirects.lineralizeSegments(i,s).pipe(Ct(o=>{let a=new it(o,{});return this.processSegment(e,t,a,o,r,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o){let{matched:a,consumedSegments:c,remainingSegments:l,positionalParamSegments:u}=hf(t,r,s);if(!a)return ps(t);let d=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,u);return r.redirectTo.startsWith("/")?Ry(d):this.applyRedirects.lineralizeSegments(r,d).pipe(Ct(h=>this.processSegment(e,i,t,h.concat(l),o,!1)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a;if(i.path==="**"){let c=r.length>0?By(r).parameters:{},l=new vs(r,c,Object.freeze(de({},this.urlTree.queryParams)),this.urlTree.fragment,Ny(i),Vn(i),i.component??i._loadedComponent??null,i,Oy(i));a=De({snapshot:l,consumedSegments:[],remainingSegments:[]}),t.children={}}else a=GA(t,i,r,e,this.urlSerializer).pipe(nt(({matched:c,consumedSegments:l,remainingSegments:u,parameters:d})=>c?{snapshot:new vs(l,d,Object.freeze(de({},this.urlTree.queryParams)),this.urlTree.fragment,Ny(i),Vn(i),i.component??i._loadedComponent??null,i,Oy(i)),consumedSegments:l,remainingSegments:u}:null));return a.pipe(vn(c=>c===null?ps(t):(e=i._injector??e,this.getChildConfig(e,i,r).pipe(vn(({routes:l})=>{let u=i._loadedInjector??e,{snapshot:d,consumedSegments:h,remainingSegments:p}=c,{segmentGroup:g,slicedSegments:v}=Py(t,h,p,l);if(v.length===0&&g.hasChildren())return this.processChildren(u,l,g).pipe(nt(f=>f===null?null:[new Bn(d,f)]));if(l.length===0&&v.length===0)return De([new Bn(d,[])]);let m=Vn(i)===s;return this.processSegment(u,l,g,v,m?Pe:s,!0).pipe(nt(f=>[new Bn(d,f)]))})))))}getChildConfig(e,t,i){return t.children?De({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?De({routes:t._loadedRoutes,injector:t._loadedInjector}):BA(e,t,i,this.urlSerializer).pipe(Ct(r=>r?this.configLoader.loadChildren(e,t).pipe(Ft(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):zA(t))):De({routes:[],injector:e})}};function JA(n){n.sort((e,t)=>e.value.outlet===Pe?-1:t.value.outlet===Pe?1:e.value.outlet.localeCompare(t.value.outlet))}function KA(n){let e=n.value.routeConfig;return e&&e.path===""}function c_(n){let e=[],t=new Set;for(let i of n){if(!KA(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=c_(i.children);e.push(new Bn(i.value,r))}return e.filter(i=>!t.has(i))}function Ny(n){return n.data||{}}function Oy(n){return n.resolve||{}}function QA(n,e,t,i,r,s){return Ct(o=>ZA(n,e,t,i,o.extractedUrl,r,s).pipe(nt(({state:a,tree:c})=>gt(de({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function eT(n,e){return Ct(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return De(t);let s=0;return Et(r).pipe(Yr(o=>tT(o.route,i,n,e)),Ft(()=>s++),Zr(1),Ct(o=>s===r.length?De(t):an))})}function tT(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!Ly(r)&&(s[Zo]=r.title),nT(s,n,e,i).pipe(nt(o=>(n._resolvedData=o,n.data=e_(n,t).resolve,r&&Ly(r)&&(n.data[Zo]=r.title),null)))}function nT(n,e,t,i){let r=iT(n);if(r.length===0)return De({});let s={};return Et(r).pipe(Ct(o=>rT(n[o],e,t,i).pipe(Yn(),Ft(a=>{s[o]=a}))),Zr(1),Tu(s),li(o=>o_(o)?an:sr(o)))}function iT(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function rT(n,e,t,i){let r=ia(e)??i,s=Ss(n,r),o=s.resolve?s.resolve(e,t):r.runInContext(()=>s(e,t));return Bi(o)}function Ly(n){return typeof n.title=="string"||n.title===null}function Fh(n){return vn(e=>{let t=n(e);return t?Et(t).pipe(nt(()=>e)):De(e)})}var ff=new Le("ROUTES"),sT=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=be(yh)}loadComponent(i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return De(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=Bi(i.loadComponent()).pipe(nt(l_),Ft(o=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o}),po(()=>{this.componentLoaders.delete(i)})),s=new qr(r,()=>new en).pipe($r());return this.componentLoaders.set(i,s),s}loadChildren(i,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return De({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=oT(r,this.compiler,i,this.onLoadEndListener).pipe(po(()=>{this.childrenLoaders.delete(r)})),a=new qr(o,()=>new en).pipe($r());return this.childrenLoaders.set(r,a),a}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function oT(n,e,t,i){return Bi(n.loadChildren()).pipe(nt(l_),Ct(r=>r instanceof Ro||Array.isArray(r)?De(r):Et(e.compileModuleAsync(r))),nt(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(ff,[],{optional:!0,self:!0}).flat()),{routes:o.map(df),injector:s}}))}function aT(n){return n&&typeof n=="object"&&"default"in n}function l_(n){return aT(n)?n.default:n}var cT=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new en,this.transitionAbortSubject=new en,this.configLoader=be(sT),this.environmentInjector=be(Mn),this.urlSerializer=be(Wy),this.rootContexts=be(al),this.inputBindingEnabled=be(uf,{optional:!0})!==null,this.navigationId=0,this.afterPreactivation=()=>De(void 0),this.rootComponentType=null;let i=s=>this.events.next(new jh(s)),r=s=>this.events.next(new $h(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=i}complete(){this.transitions?.complete()}handleNavigationRequest(i){let r=++this.navigationId;this.transitions?.next(gt(de(de({},this.transitions.value),i),{id:r}))}setupNavigations(i,r,s){return this.transitions=new Ht({id:0,currentUrlTree:r,currentRawUrl:r,currentBrowserUrl:r,extractedUrl:i.urlHandlingStrategy.extract(r),urlAfterRedirects:i.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:Xo,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Nn(o=>o.id!==0),nt(o=>gt(de({},o),{extractedUrl:i.urlHandlingStrategy.extract(o.rawUrl)})),vn(o=>{this.currentTransition=o;let a=!1,c=!1;return De(o).pipe(Ft(l=>{this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?gt(de({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),vn(l=>{let u=l.currentBrowserUrl.toString(),d=!i.navigated||l.extractedUrl.toString()!==u||u!==l.currentUrlTree.toString(),h=l.extras.onSameUrlNavigation??i.onSameUrlNavigation;if(!d&&h!=="reload"){let p="";return this.events.next(new Sr(l.id,this.urlSerializer.serialize(l.rawUrl),p,0)),l.resolve(null),an}if(i.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return De(l).pipe(vn(p=>{let g=this.transitions?.getValue();return this.events.next(new Ko(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),g!==this.transitions?.getValue()?an:Promise.resolve(p)}),QA(this.environmentInjector,this.configLoader,this.rootComponentType,i.config,this.urlSerializer,i.paramsInheritanceStrategy),Ft(p=>{o.targetSnapshot=p.targetSnapshot,o.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation=gt(de({},this.currentNavigation),{finalUrl:p.urlAfterRedirects});let g=new tl(p.id,this.urlSerializer.serialize(p.extractedUrl),this.urlSerializer.serialize(p.urlAfterRedirects),p.targetSnapshot);this.events.next(g)}));if(d&&i.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:p,extractedUrl:g,source:v,restoredState:m,extras:f}=l,w=new Ko(p,this.urlSerializer.serialize(g),v,m);this.events.next(w);let b=Qy(g,this.rootComponentType).snapshot;return this.currentTransition=o=gt(de({},l),{targetSnapshot:b,urlAfterRedirects:g,extras:gt(de({},f),{skipLocationChange:!1,replaceUrl:!1})}),De(o)}else{let p="";return this.events.next(new Sr(l.id,this.urlSerializer.serialize(l.extractedUrl),p,1)),l.resolve(null),an}}),Ft(l=>{let u=new Hh(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),nt(l=>(this.currentTransition=o=gt(de({},l),{guards:MA(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),RA(this.environmentInjector,l=>this.events.next(l)),Ft(l=>{if(o.guardsResult=l.guardsResult,Ms(l.guardsResult))throw i_(this.urlSerializer,l.guardsResult);let u=new zh(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),Nn(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",3),!1)),Fh(l=>{if(l.guards.canActivateChecks.length)return De(l).pipe(Ft(u=>{let d=new Gh(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}),vn(u=>{let d=!1;return De(u).pipe(eT(i.paramsInheritanceStrategy,this.environmentInjector),Ft({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(u,"",2)}}))}),Ft(u=>{let d=new Wh(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}))}),Fh(l=>{let u=d=>{let h=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(d.routeConfig).pipe(Ft(p=>{d.component=p}),nt(()=>{})));for(let p of d.children)h.push(...u(p));return h};return Ga(u(l.targetSnapshot.root)).pipe(Ii(),ui(1))}),Fh(()=>this.afterPreactivation()),nt(l=>{let u=fA(i.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=gt(de({},l),{targetRouterState:u}),o}),Ft(()=>{this.events.next(new ea)}),xA(this.rootContexts,i.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),ui(1),Ft({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new bs(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),i.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),Ou(this.transitionAbortSubject.pipe(Ft(l=>{throw l}))),po(()=>{if(!a&&!c){let l="";this.cancelNavigationTransition(o,l,1)}this.currentNavigation?.id===o.id&&(this.currentNavigation=null)}),li(l=>{if(c=!0,s_(l))this.events.next(new wr(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),gA(l)?this.events.next(new ta(l.url)):o.resolve(!1);else{this.events.next(new Qo(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0));try{o.resolve(i.errorHandler(l))}catch(u){o.reject(u)}}return an}))}))}cancelNavigationTransition(i,r,s){let o=new wr(i.id,this.urlSerializer.serialize(i.extractedUrl),r,s);this.events.next(o),i.resolve(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Fy(n){return n!==Xo}var u_=(()=>{let e=class e{buildTitle(i){let r,s=i.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(o=>o.outlet===Pe);return r}getResolvedTitleForRoute(i){return i.data[Zo]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:function(){return(()=>be(lT))()},providedIn:"root"});let n=e;return n})(),lT=(()=>{let e=class e extends u_{constructor(i){super(),this.title=i}updateTitle(i){let r=this.buildTitle(i);r!==void 0&&this.title.setTitle(r)}};e.\u0275fac=function(r){return new(r||e)(Ke(Ph))},e.\u0275prov=Fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),uT=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:function(){return(()=>be(dT))()},providedIn:"root"});let n=e;return n})(),af=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},dT=(()=>{let e=class e extends af{};e.\u0275fac=function(){let i;return function(s){return(i||(i=Tc(e)))(s||e)}}(),e.\u0275prov=Fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),hT=new Le("",{providedIn:"root",factory:()=>({})}),fT=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:function(){return(()=>be(pT))()},providedIn:"root"});let n=e;return n})(),pT=(()=>{let e=class e{shouldProcessUrl(i){return!0}extract(i){return i}merge(i,r){return i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),$o=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}($o||{});function mT(n,e){n.events.pipe(Nn(t=>t instanceof bs||t instanceof wr||t instanceof Qo||t instanceof Sr),nt(t=>t instanceof bs||t instanceof Sr?$o.COMPLETE:(t instanceof wr?t.code===0||t.code===1:!1)?$o.REDIRECTING:$o.FAILED),Nn(t=>t!==$o.REDIRECTING),ui(1)).subscribe(()=>{e()})}function gT(n){throw n}function vT(n,e,t){return e.parse("/")}var yT={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},_T={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},ll=(()=>{let e=class e{get navigationId(){return this.navigationTransitions.navigationId}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.location.getState()?.\u0275routerPageId??this.currentPageId}get events(){return this._events}constructor(){this.disposed=!1,this.currentPageId=0,this.console=be(Vc),this.isNgZoneEnabled=!1,this._events=new en,this.options=be(hT,{optional:!0})||{},this.pendingTasks=be(vh),this.errorHandler=this.options.errorHandler||gT,this.malformedUriErrorHandler=this.options.malformedUriErrorHandler||vT,this.navigated=!1,this.lastSuccessfulId=-1,this.urlHandlingStrategy=be(fT),this.routeReuseStrategy=be(uT),this.titleStrategy=be(u_),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.config=be(ff,{optional:!0})?.flat()??[],this.navigationTransitions=be(cT),this.urlSerializer=be(Wy),this.location=be(Eh),this.componentInputBindingEnabled=!!be(uf,{optional:!0}),this.eventsSubscription=new Lt,this.isNgZoneEnabled=be(Tt)instanceof Tt&&Tt.isInAngularZone(),this.resetConfig(this.config),this.currentUrlTree=new ki,this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=Qy(this.currentUrlTree,null),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe(i=>{this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId},i=>{this.console.warn(`Unhandled Navigation Error: ${i}`)}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let i=this.navigationTransitions.events.subscribe(r=>{try{let{currentTransition:s}=this.navigationTransitions;if(s===null){Uy(r)&&this._events.next(r);return}if(r instanceof Ko)Fy(s.source)&&(this.browserUrlTree=s.extractedUrl);else if(r instanceof Sr)this.rawUrlTree=s.rawUrl;else if(r instanceof tl){if(this.urlUpdateStrategy==="eager"){if(!s.extras.skipLocationChange){let o=this.urlHandlingStrategy.merge(s.urlAfterRedirects,s.rawUrl);this.setBrowserUrl(o,s)}this.browserUrlTree=s.urlAfterRedirects}}else if(r instanceof ea)this.currentUrlTree=s.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(s.urlAfterRedirects,s.rawUrl),this.routerState=s.targetRouterState,this.urlUpdateStrategy==="deferred"&&(s.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,s),this.browserUrlTree=s.urlAfterRedirects);else if(r instanceof wr)r.code!==0&&r.code!==1&&(this.navigated=!0),(r.code===3||r.code===2)&&this.restoreHistory(s);else if(r instanceof ta){let o=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),a={skipLocationChange:s.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||Fy(s.source)};this.scheduleNavigation(o,Xo,null,a,{resolve:s.resolve,reject:s.reject,promise:s.promise})}r instanceof Qo&&this.restoreHistory(s,!0),r instanceof bs&&(this.navigated=!0),Uy(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){if(this.setUpLocationChangeListener(),!this.navigationTransitions.hasRequestedNavigation){let i=this.location.getState();this.navigateToSyncWithBrowser(this.location.path(!0),Xo,i)}}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(i=>{let r=i.type==="popstate"?"popstate":"hashchange";r==="popstate"&&setTimeout(()=>{this.navigateToSyncWithBrowser(i.url,r,i.state)},0)}))}navigateToSyncWithBrowser(i,r,s){let o={replaceUrl:!0},a=s?.navigationId?s:null;if(s){let l=de({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(i);this.scheduleNavigation(c,r,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(df),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,r={}){let{relativeTo:s,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:a,d=null;switch(c){case"merge":d=de(de({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let h;try{let p=s?s.snapshot:this.routerState.snapshot.root;h=Yy(p)}catch{(typeof i[0]!="string"||!i[0].startsWith("/"))&&(i=[]),h=this.currentUrlTree.root}return Zy(h,i,d,u??null)}navigateByUrl(i,r={skipLocationChange:!1}){let s=Ms(i)?i:this.parseUrl(i),o=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(o,Xo,null,r)}navigate(i,r={skipLocationChange:!1}){return xT(i),this.navigateByUrl(this.createUrlTree(i,r),r)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){let r;try{r=this.urlSerializer.parse(i)}catch(s){r=this.malformedUriErrorHandler(s,this.urlSerializer,i)}return r}isActive(i,r){let s;if(r===!0?s=de({},yT):r===!1?s=de({},_T):s=r,Ms(i))return Ay(this.currentUrlTree,i,s);let o=this.parseUrl(i);return Ay(this.currentUrlTree,o,s)}removeEmptyProps(i){return Object.keys(i).reduce((r,s)=>{let o=i[s];return o!=null&&(r[s]=o),r},{})}scheduleNavigation(i,r,s,o,a){if(this.disposed)return Promise.resolve(!1);let c,l,u;a?(c=a.resolve,l=a.reject,u=a.promise):u=new Promise((h,p)=>{c=h,l=p});let d=this.pendingTasks.add();return mT(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,currentBrowserUrl:this.browserUrlTree,rawUrl:i,extras:o,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(h=>Promise.reject(h))}setBrowserUrl(i,r){let s=this.urlSerializer.serialize(i);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let o=this.browserPageId,a=de(de({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(s,"",a)}else{let o=de(de({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",o)}}restoreHistory(i,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,o=this.currentPageId-s;o!==0?this.location.historyGo(o):this.currentUrlTree===this.getCurrentNavigation()?.finalUrl&&o===0&&(this.resetState(i),this.browserUrlTree=i.currentUrlTree,this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(i),this.resetUrlToCurrentUrlTree())}resetState(i){this.routerState=i.currentRouterState,this.currentUrlTree=i.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,r){return this.canceledNavigationResolution==="computed"?{navigationId:i,\u0275routerPageId:r}:{navigationId:i}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Fe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function xT(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new ye(4008,!1)}function Uy(n){return!(n instanceof ea)&&!(n instanceof ta)}var MT=new Le("");function d_(n,...e){return Dc([{provide:ff,multi:!0,useValue:n},[],{provide:Es,useFactory:bT,deps:[ll]},{provide:_h,multi:!0,useFactory:ET},e.map(t=>t.\u0275providers)])}function bT(n){return n.routerState.root}function ET(){let n=be(yr);return e=>{let t=n.get(ko);if(e!==t.components[0])return;let i=n.get(ll),r=n.get(wT);n.get(ST)===1&&i.initialNavigation(),n.get(CT,null,qe.Optional)?.setUpPreloading(),n.get(MT,null,qe.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var wT=new Le("",{factory:()=>new en}),ST=new Le("",{providedIn:"root",factory:()=>1});var CT=new Le("");var h_=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Ut({type:e,selectors:[["app-homepage"]],standalone:!0,features:[Bt],decls:17,vars:0,consts:[[1,"container"],[1,"no-margin-bottom"]],template:function(r,s){r&1&&(ot(0,"div",0)(1,"h1",1),kt(2,"Nathan Brown"),lt(),ot(3,"h2",1),kt(4,"Full Stack Software Engineer"),lt(),ot(5,"h3"),kt(6,"JavaScript;"),lt(),ot(7,"h3"),kt(8,"TypeScript;"),lt(),ot(9,"h3"),kt(10,"Angular;"),lt(),ot(11,"h3"),kt(12,"React;"),lt(),ot(13,"h3"),kt(14,"Node.js;"),lt(),ot(15,"h3"),kt(16,"Python;"),lt()())},styles:["h1[_ngcontent-%COMP%]{color:#fff;line-height:80px;font-size:75px;font-family:Tektur;margin-top:2rem}h2[_ngcontent-%COMP%]{color:#fff;font-size:45px;font-family:Tektur;margin-top:1.5rem}h3[_ngcontent-%COMP%]{color:#726890;font-family:Tektur}"]});let n=e;return n})();var f_=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Ut({type:e,selectors:[["app-not-found"]],standalone:!0,features:[Bt],decls:2,vars:0,consts:[[1,"no-margin-bottom"]],template:function(r,s){r&1&&(ot(0,"h1",0),kt(1,"not-found works!"),lt())},styles:["h1[_ngcontent-%COMP%]{color:#fff;line-height:80px;font-size:75px;font-family:Tektur;margin-top:2rem}"]});let n=e;return n})();var M_=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(ct(hs),ct(vr))},e.\u0275dir=fn({type:e});let n=e;return n})(),TT=(()=>{let e=class e extends M_{};e.\u0275fac=function(){let i;return function(s){return(i||(i=Tc(e)))(s||e)}}(),e.\u0275dir=fn({type:e,features:[Ui]});let n=e;return n})(),b_=new Le("NgValueAccessor");var DT={provide:b_,useExisting:cs(()=>E_),multi:!0};function IT(){let n=gi()?gi().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var RT=new Le("CompositionEventMode"),E_=(()=>{let e=class e extends M_{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!IT())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(ct(hs),ct(vr),ct(RT,8))},e.\u0275dir=fn({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&xr("input",function(a){return s._handleInput(a.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(a){return s._compositionEnd(a.target.value)})},features:[Bc([DT]),Ui]});let n=e;return n})();function Vi(n){return n==null||(typeof n=="string"||Array.isArray(n))&&n.length===0}function w_(n){return n!=null&&typeof n.length=="number"}var S_=new Le("NgValidators"),C_=new Le("NgAsyncValidators"),PT=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,As=class{static min(e){return NT(e)}static max(e){return OT(e)}static required(e){return LT(e)}static requiredTrue(e){return FT(e)}static email(e){return UT(e)}static minLength(e){return kT(e)}static maxLength(e){return BT(e)}static pattern(e){return VT(e)}static nullValidator(e){return A_(e)}static compose(e){return N_(e)}static composeAsync(e){return L_(e)}};function NT(n){return e=>{if(Vi(e.value)||Vi(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function OT(n){return e=>{if(Vi(e.value)||Vi(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function LT(n){return Vi(n.value)?{required:!0}:null}function FT(n){return n.value===!0?null:{required:!0}}function UT(n){return Vi(n.value)||PT.test(n.value)?null:{email:!0}}function kT(n){return e=>Vi(e.value)||!w_(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}function BT(n){return e=>w_(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}function VT(n){if(!n)return A_;let e,t;return typeof n=="string"?(t="",n.charAt(0)!=="^"&&(t+="^"),t+=n,n.charAt(n.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(Vi(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function A_(n){return null}function T_(n){return n!=null}function D_(n){return _r(n)?Et(n):n}function I_(n){let e={};return n.forEach(t=>{e=t!=null?de(de({},e),t):e}),Object.keys(e).length===0?null:e}function R_(n,e){return e.map(t=>t(n))}function HT(n){return!n.validate}function P_(n){return n.map(e=>HT(e)?e:t=>e.validate(t))}function N_(n){if(!n)return null;let e=n.filter(T_);return e.length==0?null:function(t){return I_(R_(t,e))}}function O_(n){return n!=null?N_(P_(n)):null}function L_(n){if(!n)return null;let e=n.filter(T_);return e.length==0?null:function(t){let i=R_(t,e).map(D_);return Cu(i).pipe(nt(I_))}}function F_(n){return n!=null?L_(P_(n)):null}function p_(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function U_(n){return n._rawValidators}function k_(n){return n._rawAsyncValidators}function pf(n){return n?Array.isArray(n)?n:[n]:[]}function dl(n,e){return Array.isArray(n)?n.includes(e):n===e}function m_(n,e){let t=pf(e);return pf(n).forEach(r=>{dl(t,r)||t.push(r)}),t}function g_(n,e){return pf(e).filter(t=>!dl(n,t))}var hl=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=O_(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=F_(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Ts=class extends hl{get formDirective(){return null}get path(){return null}},Cr=class extends hl{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},fl=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},zT={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},oV=gt(de({},zT),{"[class.ng-submitted]":"isSubmitted"}),B_=(()=>{let e=class e extends fl{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(ct(Cr,2))},e.\u0275dir=fn({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&Uc("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[Ui]});let n=e;return n})(),V_=(()=>{let e=class e extends fl{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(ct(Ts,10))},e.\u0275dir=fn({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&Uc("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[Ui]});let n=e;return n})();var sa="VALID",ul="INVALID",Cs="PENDING",oa="DISABLED";function H_(n){return(yl(n)?n.validators:n)||null}function GT(n){return Array.isArray(n)?O_(n):n||null}function z_(n,e){return(yl(e)?e.asyncValidators:n)||null}function WT(n){return Array.isArray(n)?F_(n):n||null}function yl(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function jT(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new ye(1e3,"");if(!i[t])throw new ye(1001,"")}function $T(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new ye(1002,"")})}var pl=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===sa}get invalid(){return this.status===ul}get pending(){return this.status==Cs}get disabled(){return this.status===oa}get enabled(){return this.status!==oa}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(m_(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(m_(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(g_(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(g_(e,this._rawAsyncValidators))}hasValidator(e){return dl(this._rawValidators,e)}hasAsyncValidator(e){return dl(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=Cs,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=oa,this.errors=null,this._forEachChild(i=>{i.disable(gt(de({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(gt(de({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=sa,this._forEachChild(i=>{i.enable(gt(de({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(gt(de({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===sa||this.status===Cs)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?oa:sa}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=Cs,this._hasOwnPendingAsyncValidator=!0;let t=D_(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new $t,this.statusChanges=new $t}_calculateStatus(){return this._allControlsDisabled()?oa:this.errors?ul:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Cs)?Cs:this._anyControlsHaveStatus(ul)?ul:sa}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){yl(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=GT(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=WT(this._rawAsyncValidators)}},ml=class extends pl{constructor(e,t,i){super(H_(t),z_(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){$T(this,!0,e),Object.keys(e).forEach(i=>{jT(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,s)=>{i=t(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var G_=new Le("CallSetDisabledState",{providedIn:"root",factory:()=>mf}),mf="always";function qT(n,e){return[...e.path,n]}function v_(n,e,t=mf){gf(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),YT(n,e),JT(n,e),ZT(n,e),XT(n,e)}function y_(n,e,t=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),vl(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function gl(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function XT(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function gf(n,e){let t=U_(n);e.validator!==null?n.setValidators(p_(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=k_(n);e.asyncValidator!==null?n.setAsyncValidators(p_(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();gl(e._rawValidators,r),gl(e._rawAsyncValidators,r)}function vl(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=U_(n);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(t=!0,n.setValidators(s))}}if(e.asyncValidator!==null){let r=k_(n);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(t=!0,n.setAsyncValidators(s))}}}let i=()=>{};return gl(e._rawValidators,i),gl(e._rawAsyncValidators,i),t}function YT(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&W_(n,e)})}function ZT(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&W_(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function W_(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function JT(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function KT(n,e){n==null,gf(n,e)}function QT(n,e){return vl(n,e)}function eD(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function tD(n){return Object.getPrototypeOf(n.constructor)===TT}function nD(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function iD(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(s=>{s.constructor===E_?t=s:tD(s)?i=s:r=s}),r||i||t||null}function rD(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function __(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function x_(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Ds=class extends pl{constructor(e=null,t,i){super(H_(t),z_(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),yl(t)&&(t.nonNullable||t.initialValueIsDefault)&&(x_(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){__(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){__(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){x_(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var sD=n=>n instanceof Ds;var j_=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=fn({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let n=e;return n})();var oD=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Li({type:e}),e.\u0275inj=Oi({});let n=e;return n})();var $_=new Le("NgModelWithFormControlWarning");var aD={provide:Ts,useExisting:cs(()=>vf)},vf=(()=>{let e=class e extends Ts{constructor(i,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new $t,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(vl(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return v_(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){y_(i.control||null,i,!1),rD(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,nD(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,s=this.form.get(i.path);r!==s&&(y_(r||null,i),sD(s)&&(v_(s,i,this.callSetDisabledState),i.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);KT(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&QT(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){gf(this.form,this),this._oldForm&&vl(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(ct(S_,10),ct(C_,10),ct(G_,8))},e.\u0275dir=fn({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&xr("submit",function(a){return s.onSubmit(a)})("reset",function(){return s.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[Bc([aD]),Ui,gr]});let n=e;return n})();var cD={provide:Cr,useExisting:cs(()=>yf)},yf=(()=>{let e=class e extends Cr{set isDisabled(i){}constructor(i,r,s,o,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new $t,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=iD(this,o)}ngOnChanges(i){this._added||this._setUpControl(),eD(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return qT(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(ct(Ts,13),ct(S_,10),ct(C_,10),ct(b_,10),ct($_,8))},e.\u0275dir=fn({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[Bc([cD]),Ui,gr]});let n=e;return n})();var lD=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Li({type:e}),e.\u0275inj=Oi({imports:[oD]});let n=e;return n})();var q_=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:$_,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:G_,useValue:i.callSetDisabledState??mf}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Li({type:e}),e.\u0275inj=Oi({imports:[lD]});let n=e;return n})();var Y_=(()=>{let e=class e{constructor(i){this.control=i,this.placeholder="",this.value="",this.onChange=()=>{},this.onTouched=()=>{},this.control.valueAccessor=this}writeValue(i){this.value=i}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}updateValue(i){let r=i.target;this.onChange(r.value)}};e.\u0275fac=function(r){return new(r||e)(ct(Cr,10))},e.\u0275cmp=Ut({type:e,selectors:[["app-input-field"]],inputs:{placeholder:"placeholder"},standalone:!0,features:[Bt],decls:2,vars:1,consts:[[1,"input-container"],["type","text",3,"placeholder"]],template:function(r,s){r&1&&(ot(0,"div",0),En(1,"input",1),lt()),r&2&&(kn(1),mi("placeholder",s.placeholder))},styles:["input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active{-webkit-box-shadow:0 0 0 30px #FFF inset!important;box-shadow:0 0 0 30px #fff inset!important}.input-container[_ngcontent-%COMP%]{margin-top:1rem}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:2.5rem;border:3px solid transparent;width:20.5rem;border-radius:.5rem;padding-left:1rem}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;border:3px solid #726890}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{font-family:Tektur;color:#020202}"]});let n=e;return n})();var Z_=(()=>{let e=class e{constructor(){this.placeholder=""}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Ut({type:e,selectors:[["app-large-text"]],inputs:{placeholder:"placeholder"},standalone:!0,features:[Bt],decls:2,vars:1,consts:[[1,"container"],[3,"placeholder"]],template:function(r,s){r&1&&(ot(0,"div",0),En(1,"textarea",1),lt()),r&2&&(kn(1),mi("placeholder",s.placeholder))},styles:[".container[_ngcontent-%COMP%]{margin-top:1rem}.container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:30.5rem;height:15rem;resize:none;border-radius:.5rem;padding:1rem}.container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{font-family:Tektur;color:#020202}"]});let n=e;return n})();var J_=(()=>{let e=class e{constructor(){this.label=""}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Ut({type:e,selectors:[["app-button"]],inputs:{label:"label"},standalone:!0,features:[Bt],decls:2,vars:1,template:function(r,s){r&1&&(ot(0,"button"),kt(1),lt()),r&2&&(kn(1),fh(s.label))},styles:["button[_ngcontent-%COMP%]{margin-top:1rem;height:2.5rem;width:7rem;border-radius:.5rem;cursor:pointer;background-color:#726890;border:none;color:#fff;font-family:Tektur}"]});let n=e;return n})();var K_=(()=>{let e=class e{constructor(){this.contactForm=new ml({name:new Ds("",{validators:[As.required]}),email:new Ds("",{validators:[As.required]}),subject:new Ds(""),message:new Ds("",{validators:[As.required]})}),this.contactForm.valueChanges.subscribe(i=>{console.log("changes",i)})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Ut({type:e,selectors:[["app-contact"]],standalone:!0,features:[Bt],decls:8,vars:1,consts:[[1,"no-margin-bottom"],[3,"formGroup"],["type","text","placeholder","Name","formControlName","name"],["type","text","placeholder","Email","formControlName","email"],["type","text","placeholder","Subject","formControlName","subject"],["placeholder","Message"],["label","Submit"]],template:function(r,s){r&1&&(ot(0,"h1",0),kt(1,"Contact"),lt(),ot(2,"form",1),En(3,"app-input-field",2)(4,"app-input-field",3)(5,"app-input-field",4)(6,"app-large-text",5)(7,"app-button",6),lt()),r&2&&(kn(2),mi("formGroup",s.contactForm))},dependencies:[q_,j_,B_,V_,vf,yf,Y_,Z_,J_],styles:["h1[_ngcontent-%COMP%]{color:#fff;line-height:80px;font-size:75px;font-family:Tektur;margin-top:2rem}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}app-button[_ngcontent-%COMP%]{align-self:flex-end}"]});let n=e;return n})();var Q_=[{path:"",component:h_},{path:"contact",component:K_},{path:"**",component:f_}];var e0={providers:[d_(Q_)]};var Rp="160";var uD=0,t0=1,dD=2;var wx=1,hD=2,bi=3,Ji=0,dn=1,wi=2;var Xi=0,Zs=1,n0=2,i0=3,r0=4,fD=5,Pr=100,pD=101,mD=102,s0=103,o0=104,gD=200,vD=201,yD=202,_D=203,Zf=204,Jf=205,xD=206,MD=207,bD=208,ED=209,wD=210,SD=211,CD=212,AD=213,TD=214,DD=0,ID=1,RD=2,zl=3,PD=4,ND=5,OD=6,LD=7,Sx=0,FD=1,UD=2,Yi=0,kD=1,BD=2,VD=3,HD=4,zD=5,GD=6;var a0=300,Qs=301,eo=302,Kf=303,Qf=304,cu=306,ep=1e3,Wn=1001,tp=1002,sn=1003,c0=1004;var _f=1005;var Tn=1006,WD=1007;var pa=1008;var Zi=1009,jD=1010,$D=1011,Pp=1012,Cx=1013,$i=1014,qi=1015,ma=1016,Ax=1017,Tx=1018,Or=1020,qD=1021,jn=1023,XD=1024,YD=1025,Lr=1026,to=1027,ZD=1028,Dx=1029,JD=1030,Ix=1031,Rx=1033,xf=33776,Mf=33777,bf=33778,Ef=33779,l0=35840,u0=35841,d0=35842,h0=35843,Px=36196,f0=37492,p0=37496,m0=37808,g0=37809,v0=37810,y0=37811,_0=37812,x0=37813,M0=37814,b0=37815,E0=37816,w0=37817,S0=37818,C0=37819,A0=37820,T0=37821,wf=36492,D0=36494,I0=36495,KD=36283,R0=36284,P0=36285,N0=36286;var Gl=2300,Wl=2301,Sf=2302,O0=2400,L0=2401,F0=2402;var Nx=3e3,Fr=3001,QD=3200,eI=3201,tI=0,nI=1,Dn="",Gt="srgb",Ai="srgb-linear",Np="display-p3",lu="display-p3-linear",jl="linear",yt="srgb",$l="rec709",ql="p3";var Is=7680;var U0=519,iI=512,rI=513,sI=514,Ox=515,oI=516,aI=517,cI=518,lI=519,k0=35044;var B0="300 es",np=1035,Si=2e3,Xl=2001,Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Cf=Math.PI/180,ip=180/Math.PI;function _a(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function un(n,e,t){return Math.max(e,Math.min(t,n))}function uI(n,e){return(n%e+e)%e}function Af(n,e,t){return(1-t)*n+t*e}function V0(n){return(n&n-1)===0&&n!==0}function rp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function aa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ln(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var dt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],v=r[0],m=r[3],f=r[6],w=r[1],b=r[4],S=r[7],I=r[2],T=r[5],C=r[8];return s[0]=o*v+a*w+c*I,s[3]=o*m+a*b+c*T,s[6]=o*f+a*S+c*C,s[1]=l*v+u*w+d*I,s[4]=l*m+u*b+d*T,s[7]=l*f+u*S+d*C,s[2]=h*v+p*w+g*I,s[5]=h*m+p*b+g*T,s[8]=h*f+p*S+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,p=l*s-o*c,g=t*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tf.makeScale(e,t)),this}rotate(e){return this.premultiply(Tf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Tf=new Ye;function Lx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Yl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dI(){let n=Yl("canvas");return n.style.display="block",n}var H0={};function ha(n){n in H0||(H0[n]=!0,console.warn(n))}var z0=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),G0=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_l={[Ai]:{transfer:jl,primaries:$l,toReference:n=>n,fromReference:n=>n},[Gt]:{transfer:yt,primaries:$l,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[lu]:{transfer:jl,primaries:ql,toReference:n=>n.applyMatrix3(G0),fromReference:n=>n.applyMatrix3(z0)},[Np]:{transfer:yt,primaries:ql,toReference:n=>n.convertSRGBToLinear().applyMatrix3(G0),fromReference:n=>n.applyMatrix3(z0).convertLinearToSRGB()}},hI=new Set([Ai,lu]),ut={enabled:!0,_workingColorSpace:Ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!hI.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=_l[e].toReference,r=_l[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return _l[n].primaries},getTransfer:function(n){return n===Dn?jl:_l[n].transfer}};function Js(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Df(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Rs,Zl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=Yl("canvas")),Rs.width=e.width,Rs.height=e.height;let i=Rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Yl("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Js(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Js(t[i]/255)*255):t[i]=Js(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fI=0,Jl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fI++}),this.uuid=_a(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(If(r[o].image)):s.push(If(r[o]))}else s=If(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function If(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pI=0,oo=(()=>{class n extends Ki{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Wn,s=Wn,o=Tn,a=pa,c=jn,l=Zi,u=n.DEFAULT_ANISOTROPY,d=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pI++}),this.uuid=_a(),this.name="",this.source=new Jl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(ha("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Fr?Gt:Dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==a0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ep:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case tp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ep:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case tp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ha("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Gt?Fr:Nx}set encoding(t){ha("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Fr?Gt:Dn}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=a0,n.DEFAULT_ANISOTROPY=1,n})(),Wt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,S=(p+1)/2,I=(f+1)/2,T=(u+h)/4,C=(d+v)/4,q=(g+m)/4;return b>S&&b>I?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=T/i,s=C/i):S>I?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=q/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=C/s,r=q/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-v)/w,this.z=(h-u)/w,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sp=class extends Ki{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(ha("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Fr?Gt:Dn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new oo(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Jl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ti=class extends sp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Kl=class extends oo{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var op=class extends oo{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==h||l!==p||u!==g){let m=1-a,f=c*h+l*p+u*g+d*v,w=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let I=Math.sqrt(b),T=Math.atan2(I,f*w);m=Math.sin(m*T)/I,a=Math.sin(a*T)/I}let S=a*w;if(c=c*m+h*S,l=l*m+p*S,u=u*m+g*S,d=d*m+v*S,m===1-a){let I=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=I,l*=I,u*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*p-l*h,e[t+1]=c*g+u*h+l*d-a*p,e[t+2]=l*g+u*p+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"YZX":this._x=h*u*d+l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d-h*p*g;break;case"XZY":this._x=h*u*d-l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(W0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(W0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rf.copy(this).projectOnVector(e),this.sub(Rf)}reflect(e){return this.sub(Rf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rf=new F,W0=new Qi,Ur=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xl.copy(i.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),Ml.subVectors(this.max,ca),Ps.subVectors(e.a,ca),Ns.subVectors(e.b,ca),Os.subVectors(e.c,ca),Hi.subVectors(Ns,Ps),zi.subVectors(Os,Ns),Ar.subVectors(Ps,Os);let t=[0,-Hi.z,Hi.y,0,-zi.z,zi.y,0,-Ar.z,Ar.y,Hi.z,0,-Hi.x,zi.z,0,-zi.x,Ar.z,0,-Ar.x,-Hi.y,Hi.x,0,-zi.y,zi.x,0,-Ar.y,Ar.x,0];return!Pf(t,Ps,Ns,Os,Ml)||(t=[1,0,0,0,1,0,0,0,1],!Pf(t,Ps,Ns,Os,Ml))?!1:(bl.crossVectors(Hi,zi),t=[bl.x,bl.y,bl.z],Pf(t,Ps,Ns,Os,Ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},vi=[new F,new F,new F,new F,new F,new F,new F,new F],Hn=new F,xl=new Ur,Ps=new F,Ns=new F,Os=new F,Hi=new F,zi=new F,Ar=new F,ca=new F,Ml=new F,bl=new F,Tr=new F;function Pf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Tr.fromArray(n,s);let a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),c=e.dot(Tr),l=t.dot(Tr),u=i.dot(Tr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var mI=new Ur,la=new F,Nf=new F,ga=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):mI.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);let t=la.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(la,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Nf)),this.expandByPoint(la.copy(e.center).sub(Nf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new F,Of=new F,El=new F,Gi=new F,Lf=new F,wl=new F,Ff=new F,ap=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Of.copy(e).add(t).multiplyScalar(.5),El.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(Of);let s=e.distanceTo(t)*.5,o=-this.direction.dot(El),a=Gi.dot(this.direction),c=-Gi.dot(El),l=Gi.lengthSq(),u=Math.abs(1-o*o),d,h,p,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,p=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Of).addScaledVector(El,h),p}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,r,s){Lf.subVectors(t,e),wl.subVectors(i,e),Ff.crossVectors(Lf,wl);let o=this.direction.dot(Ff),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);let c=a*this.direction.dot(wl.crossVectors(Gi,wl));if(c<0)return null;let l=a*this.direction.dot(Lf.cross(Gi));if(l<0||c+l>o)return null;let u=-a*Gi.dot(Ff);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,h,p,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,p,g,v,m)}set(e,t,i,r,s,o,a,c,l,u,d,h,p,g,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Ls.setFromMatrixColumn(e,0).length(),s=1/Ls.setFromMatrixColumn(e,1).length(),o=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,p=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=h-v*l,t[9]=-a*c,t[2]=v-h*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,p=c*d,g=l*u,v=l*d;t[0]=h+v*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,p=c*d,g=l*u,v=l*d;t[0]=h-v*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,p=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+v,t[1]=c*d,t[5]=v*l+h,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,p=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+g,t[10]=h-v*d}else if(e.order==="XZY"){let h=o*c,p=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+v,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gI,e,vI)}lookAt(e,t,i){let r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Wi.crossVectors(i,pn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Wi.crossVectors(i,pn)),Wi.normalize(),Sl.crossVectors(pn,Wi),r[0]=Wi.x,r[4]=Sl.x,r[8]=pn.x,r[1]=Wi.y,r[5]=Sl.y,r[9]=pn.y,r[2]=Wi.z,r[6]=Sl.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],w=i[3],b=i[7],S=i[11],I=i[15],T=r[0],C=r[4],q=r[8],x=r[12],E=r[1],V=r[5],G=r[9],ie=r[13],D=r[2],k=r[6],H=r[10],j=r[14],z=r[3],W=r[7],$=r[11],Q=r[15];return s[0]=o*T+a*E+c*D+l*z,s[4]=o*C+a*V+c*k+l*W,s[8]=o*q+a*G+c*H+l*$,s[12]=o*x+a*ie+c*j+l*Q,s[1]=u*T+d*E+h*D+p*z,s[5]=u*C+d*V+h*k+p*W,s[9]=u*q+d*G+h*H+p*$,s[13]=u*x+d*ie+h*j+p*Q,s[2]=g*T+v*E+m*D+f*z,s[6]=g*C+v*V+m*k+f*W,s[10]=g*q+v*G+m*H+f*$,s[14]=g*x+v*ie+m*j+f*Q,s[3]=w*T+b*E+S*D+I*z,s[7]=w*C+b*V+S*k+I*W,s[11]=w*q+b*G+S*H+I*$,s[15]=w*x+b*ie+S*j+I*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*p-i*c*p)+v*(+t*c*p-t*l*h+s*o*h-r*o*p+r*l*u-s*c*u)+m*(+t*l*d-t*a*p-s*o*d+i*o*p+s*a*u-i*l*u)+f*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],w=d*m*l-v*h*l+v*c*p-a*m*p-d*c*f+a*h*f,b=g*h*l-u*m*l-g*c*p+o*m*p+u*c*f-o*h*f,S=u*v*l-g*d*l+g*a*p-o*v*p-u*a*f+o*d*f,I=g*d*c-u*v*c-g*a*h+o*v*h+u*a*m-o*d*m,T=t*w+i*b+r*S+s*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return e[0]=w*C,e[1]=(v*h*s-d*m*s-v*r*p+i*m*p+d*r*f-i*h*f)*C,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*f+i*c*f)*C,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*p-i*c*p)*C,e[4]=b*C,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*f+t*h*f)*C,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*f-t*c*f)*C,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*p+t*c*p)*C,e[8]=S*C,e[9]=(g*d*s-u*v*s-g*i*p+t*v*p+u*i*f-t*d*f)*C,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*f+t*a*f)*C,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*p-t*a*p)*C,e[12]=I*C,e[13]=(u*v*r-g*d*r+g*i*h-t*v*h-u*i*m+t*d*m)*C,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*m-t*a*m)*C,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*C,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,p=s*u,g=s*d,v=o*u,m=o*d,f=a*d,w=c*l,b=c*u,S=c*d,I=i.x,T=i.y,C=i.z;return r[0]=(1-(v+f))*I,r[1]=(p+S)*I,r[2]=(g-b)*I,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(h+f))*T,r[6]=(m+w)*T,r[7]=0,r[8]=(g+b)*C,r[9]=(m-w)*C,r[10]=(1-(h+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Ls.set(r[0],r[1],r[2]).length(),o=Ls.set(r[4],r[5],r[6]).length(),a=Ls.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);let l=1/s,u=1/o,d=1/a;return zn.elements[0]*=l,zn.elements[1]*=l,zn.elements[2]*=l,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=d,zn.elements[9]*=d,zn.elements[10]*=d,t.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Si){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),p,g;if(a===Si)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Xl)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Si){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,p=(i+r)*u,g,v;if(a===Si)g=(o+s)*d,v=-2*d;else if(a===Xl)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ls=new F,zn=new Yt,gI=new F(0,0,0),vI=new F(1,1,1),Wi=new F,Sl=new F,pn=new F,j0=new Yt,$0=new Qi,yI=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],p=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(un(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(un(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return j0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(j0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return $0.setFromEuler(this),this.setFromQuaternion($0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Ql=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_I=0,q0=new F,Fs=new Qi,_i=new Yt,Cl=new F,ua=new F,xI=new F,MI=new Qi,X0=new F(1,0,0),Y0=new F(0,1,0),Z0=new F(0,0,1),bI={type:"added"},EI={type:"removed"},ao=(()=>{class n extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_I++}),this.uuid=_a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,i=new yI,r=new Qi,s=new F(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Ye}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Fs.setFromAxisAngle(t,i),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,i){return Fs.setFromAxisAngle(t,i),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(X0,t)}rotateY(t){return this.rotateOnAxis(Y0,t)}rotateZ(t){return this.rotateOnAxis(Z0,t)}translateOnAxis(t,i){return q0.copy(t).applyQuaternion(this.quaternion),this.position.add(q0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(X0,t)}translateY(t){return this.translateOnAxis(Y0,t)}translateZ(t){return this.translateOnAxis(Z0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Cl.copy(t):Cl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(ua,Cl,this.up):_i.lookAt(Cl,ua,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(_i),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(bI)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(EI)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,t,xI),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,MI,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++){let o=i[r];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++){let c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),h=a(t.shapes),p=a(t.skeletons),g=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new F(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Gn=new F,xi=new F,Uf=new F,Mi=new F,Us=new F,ks=new F,J0=new F,kf=new F,Bf=new F,Vf=new F,Al=!1,$s=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Gn.subVectors(e,t),r.cross(Gn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Gn.subVectors(r,t),xi.subVectors(i,t),Uf.subVectors(e,t);let o=Gn.dot(Gn),a=Gn.dot(xi),c=Gn.dot(Uf),l=xi.dot(xi),u=xi.dot(Uf),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getUV(e,t,i,r,s,o,a,c){return Al===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Al=!0),this.getInterpolation(e,t,i,r,s,o,a,c)}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Mi.x),c.addScaledVector(o,Mi.y),c.addScaledVector(a,Mi.z),c)}static isFrontFacing(e,t,i,r){return Gn.subVectors(i,t),xi.subVectors(e,t),Gn.cross(xi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Gn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Al===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Al=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Us.subVectors(r,i),ks.subVectors(s,i),kf.subVectors(e,i);let c=Us.dot(kf),l=ks.dot(kf);if(c<=0&&l<=0)return t.copy(i);Bf.subVectors(e,r);let u=Us.dot(Bf),d=ks.dot(Bf);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Us,o);Vf.subVectors(e,s);let p=Us.dot(Vf),g=ks.dot(Vf);if(g>=0&&p<=g)return t.copy(s);let v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ks,a);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return J0.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(J0,a);let f=1/(m+v+h);return o=v*f,a=h*f,t.copy(i).addScaledVector(Us,o).addScaledVector(ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function Hf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var rt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ut.workingColorSpace){if(e=uI(e,1),t=un(t,0,1),i=un(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Hf(o,s,e+1/3),this.g=Hf(o,s,e),this.b=Hf(o,s,e-1/3)}return ut.toWorkingColorSpace(this,r),this}setStyle(e,t=Gt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let i=Fx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}copyLinearToSRGB(e){return this.r=Df(e.r),this.g=Df(e.g),this.b=Df(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return ut.fromWorkingColorSpace(Xt.copy(this),e),Math.round(un(Xt.r*255,0,255))*65536+Math.round(un(Xt.g*255,0,255))*256+Math.round(un(Xt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Xt.copy(this),t);let i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Gt){ut.fromWorkingColorSpace(Xt.copy(this),e);let t=Xt.r,i=Xt.g,r=Xt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Tl);let i=Af(ji.h,Tl.h,t),r=Af(ji.s,Tl.s,t),s=Af(ji.l,Tl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new rt;rt.NAMES=Fx;var wI=0,no=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wI++}),this.uuid=_a(),this.name="",this.type="Material",this.blending=Zs,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zf,this.blendDst=Jf,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zf&&(i.blendSrc=this.blendSrc),this.blendDst!==Jf&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},io=class extends no{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var It=new F,Dl=new dt,Rn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=k0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Dl.fromBufferAttribute(this,t),Dl.applyMatrix3(e),this.setXY(t,Dl.x,Dl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=aa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=aa(t,this.array)),t}setX(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=aa(t,this.array)),t}setY(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=aa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=aa(t,this.array)),t}setW(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==k0&&(e.usage=this.usage),e}};var eu=class extends Rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var tu=class extends Rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ci=class extends Rn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var SI=0,An=new Yt,zf=new ao,Bs=new F,mn=new Ur,da=new Ur,Vt=new F,kr=class n extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SI++}),this.uuid=_a(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lx(e)?tu:eu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return zf.lookAt(e),zf.updateMatrix(),this.applyMatrix4(zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ci(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ur);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ga);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];da.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(mn.min,da.min),mn.expandByPoint(Vt),Vt.addVectors(mn.max,da.max),mn.expandByPoint(Vt)):(mn.expandByPoint(da.min),mn.expandByPoint(da.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Vt.fromBufferAttribute(a,l),c&&(Bs.fromBufferAttribute(e,l),Vt.add(Bs)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let E=0;E<a;E++)l[E]=new F,u[E]=new F;let d=new F,h=new F,p=new F,g=new dt,v=new dt,m=new dt,f=new F,w=new F;function b(E,V,G){d.fromArray(r,E*3),h.fromArray(r,V*3),p.fromArray(r,G*3),g.fromArray(o,E*2),v.fromArray(o,V*2),m.fromArray(o,G*2),h.sub(d),p.sub(d),v.sub(g),m.sub(g);let ie=1/(v.x*m.y-m.x*v.y);isFinite(ie)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(ie),w.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(ie),l[E].add(f),l[V].add(f),l[G].add(f),u[E].add(w),u[V].add(w),u[G].add(w))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let E=0,V=S.length;E<V;++E){let G=S[E],ie=G.start,D=G.count;for(let k=ie,H=ie+D;k<H;k+=3)b(i[k+0],i[k+1],i[k+2])}let I=new F,T=new F,C=new F,q=new F;function x(E){C.fromArray(s,E*3),q.copy(C);let V=l[E];I.copy(V),I.sub(C.multiplyScalar(C.dot(V))).normalize(),T.crossVectors(q,V);let ie=T.dot(u[E])<0?-1:1;c[E*4]=I.x,c[E*4+1]=I.y,c[E*4+2]=I.z,c[E*4+3]=ie}for(let E=0,V=S.length;E<V;++E){let G=S[E],ie=G.start,D=G.count;for(let k=ie,H=ie+D;k<H;k+=3)x(i[k+0]),x(i[k+1]),x(i[k+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,u=new F,d=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){let g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let f=0;f<u;f++)h[g++]=l[p++]}return new Rn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},K0=new Yt,Dr=new ap,Il=new ga,Q0=new F,Vs=new F,Hs=new F,zs=new F,Gf=new F,Rl=new F,Pl=new dt,Nl=new dt,Ol=new dt,ex=new F,tx=new F,nx=new F,Ll=new F,Fl=new F,In=class extends ao{constructor(e=new kr,t=new io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Rl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Gf.fromBufferAttribute(d,e),o?Rl.addScaledVector(Gf,u):Rl.addScaledVector(Gf.sub(t),u))}t.add(Rl)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(Il.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Il,Q0)===null||Dr.origin.distanceToSquared(Q0)>(e.far-e.near)**2))&&(K0.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(K0),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,I=b;S<I;S+=3){let T=a.getX(S),C=a.getX(S+1),q=a.getX(S+2);r=Ul(this,f,e,i,l,u,d,T,C,q),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let w=a.getX(m),b=a.getX(m+1),S=a.getX(m+2);r=Ul(this,o,e,i,l,u,d,w,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,I=b;S<I;S+=3){let T=S,C=S+1,q=S+2;r=Ul(this,f,e,i,l,u,d,T,C,q),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let w=m,b=m+1,S=m+2;r=Ul(this,o,e,i,l,u,d,w,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function CI(n,e,t,i,r,s,o,a){let c;if(e.side===dn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ji,a),c===null)return null;Fl.copy(a),Fl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Fl);return l<t.near||l>t.far?null:{distance:l,point:Fl.clone(),object:n}}function Ul(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Vs),n.getVertexPosition(c,Hs),n.getVertexPosition(l,zs);let u=CI(n,e,t,i,Vs,Hs,zs,Ll);if(u){r&&(Pl.fromBufferAttribute(r,a),Nl.fromBufferAttribute(r,c),Ol.fromBufferAttribute(r,l),u.uv=$s.getInterpolation(Ll,Vs,Hs,zs,Pl,Nl,Ol,new dt)),s&&(Pl.fromBufferAttribute(s,a),Nl.fromBufferAttribute(s,c),Ol.fromBufferAttribute(s,l),u.uv1=$s.getInterpolation(Ll,Vs,Hs,zs,Pl,Nl,Ol,new dt),u.uv2=u.uv1),o&&(ex.fromBufferAttribute(o,a),tx.fromBufferAttribute(o,c),nx.fromBufferAttribute(o,l),u.normal=$s.getInterpolation(Ll,Vs,Hs,zs,ex,tx,nx,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new F,materialIndex:0};$s.getNormal(Vs,Hs,zs,d.normal),u.face=d}return u}var Br=class n extends kr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ci(l,3)),this.setAttribute("normal",new Ci(u,3)),this.setAttribute("uv",new Ci(d,2));function g(v,m,f,w,b,S,I,T,C,q,x){let E=S/C,V=I/q,G=S/2,ie=I/2,D=T/2,k=C+1,H=q+1,j=0,z=0,W=new F;for(let $=0;$<H;$++){let Q=$*V-ie;for(let ee=0;ee<k;ee++){let B=ee*E-G;W[v]=B*w,W[m]=Q*b,W[f]=D,l.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[f]=T>0?1:-1,u.push(W.x,W.y,W.z),d.push(ee/C),d.push(1-$/q),j+=1}}for(let $=0;$<q;$++)for(let Q=0;Q<C;Q++){let ee=h+Q+k*$,B=h+Q+k*($+1),X=h+(Q+1)+k*($+1),ae=h+(Q+1)+k*$;c.push(ee,B,ae),c.push(B,X,ae),z+=6}a.addGroup(p,z,x),p+=z,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ro(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function rn(n){let e={};for(let t=0;t<n.length;t++){let i=ro(n[t]);for(let r in i)e[r]=i[r]}return e}function AI(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ux(n){return n.getRenderTarget()===null?n.outputColorSpace:ut.workingColorSpace}var TI={clone:ro,merge:rn},DI=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,II=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Di=class extends no{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DI,this.fragmentShader=II,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=AI(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},nu=class extends ao{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},on=class extends nu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ip*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Cf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ip*2*Math.atan(Math.tan(Cf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Cf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gs=-90,Ws=1,cp=class extends ao{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new on(Gs,Ws,e,t);r.layers=this.layers,this.add(r);let s=new on(Gs,Ws,e,t);s.layers=this.layers,this.add(s);let o=new on(Gs,Ws,e,t);o.layers=this.layers,this.add(o);let a=new on(Gs,Ws,e,t);a.layers=this.layers,this.add(a);let c=new on(Gs,Ws,e,t);c.layers=this.layers,this.add(c);let l=new on(Gs,Ws,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},iu=class extends oo{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Qs,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},lp=class extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ha("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Fr?Gt:Dn),this.texture=new iu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Br(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Xi});s.uniforms.tEquirect.value=t;let o=new In(r,s),a=t.minFilter;return t.minFilter===pa&&(t.minFilter=Tn),new cp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Wf=new F,RI=new F,PI=new Ye,Ei=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Wf.subVectors(i,t).cross(RI.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Wf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||PI.getNormalMatrix(e),r=this.coplanarPoint(Wf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ir=new ga,kl=new F,ru=class{constructor(e=new Ei,t=new Ei,i=new Ei,r=new Ei,s=new Ei,o=new Ei){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],p=r[8],g=r[9],v=r[10],m=r[11],f=r[12],w=r[13],b=r[14],S=r[15];if(i[0].setComponents(c-s,h-l,m-p,S-f).normalize(),i[1].setComponents(c+s,h+l,m+p,S+f).normalize(),i[2].setComponents(c+o,h+u,m+g,S+w).normalize(),i[3].setComponents(c-o,h-u,m-g,S-w).normalize(),i[4].setComponents(c-a,h-d,m-v,S-b).normalize(),t===Si)i[5].setComponents(c+a,h+d,m+v,S+b).normalize();else if(t===Xl)i[5].setComponents(a,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(kl.x=r.normal.x>0?e.max.x:e.min.x,kl.y=r.normal.y>0?e.max.y:e.min.y,kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function kx(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function NI(n,e){let t=e.isWebGL2,i=new WeakMap;function r(l,u){let d=l.array,h=l.usage,p=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,h),l.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:p}}function s(l,u,d){let h=u.array,p=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,l),p.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let v=0,m=g.length;v<m;v++){let f=g[v];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=i.get(l);if(d===void 0)i.set(l,r(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,u),d.version=l.version}}return{get:o,remove:a,update:c}}var up=class n extends kr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){let w=f*h-o;for(let b=0;b<l;b++){let S=b*d-s;g.push(S,-w,0),v.push(0,0,1),m.push(b/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<a;w++){let b=w+l*f,S=w+l*(f+1),I=w+1+l*(f+1),T=w+1+l*f;p.push(b,S,T),p.push(S,I,T)}this.setIndex(p),this.setAttribute("position",new Ci(g,3)),this.setAttribute("normal",new Ci(v,3)),this.setAttribute("uv",new Ci(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},OI=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LI=`#ifdef USE_ALPHAHASH
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
#endif`,FI=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UI=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kI=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,BI=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VI=`#ifdef USE_AOMAP
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
#endif`,HI=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zI=`#ifdef USE_BATCHING
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
#endif`,GI=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,WI=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jI=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$I=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qI=`#ifdef USE_IRIDESCENCE
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
#endif`,XI=`#ifdef USE_BUMPMAP
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
#endif`,YI=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KI=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QI=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,i1=`#define PI 3.141592653589793
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
} // validated`,r1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,s1=`vec3 transformedNormal = objectNormal;
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
#endif`,o1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u1="gl_FragColor = linearToOutputTexel( gl_FragColor );",d1=`
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
}`,h1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M1=`#ifdef USE_GRADIENTMAP
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
}`,b1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,E1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C1=`uniform bool receiveShadow;
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
#endif`,A1=`#ifdef USE_ENVMAP
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
#endif`,T1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P1=`PhysicalMaterial material;
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
#endif`,N1=`struct PhysicalMaterial {
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
}`,O1=`
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
#endif`,L1=`#if defined( RE_IndirectDiffuse )
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
#endif`,F1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,V1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,H1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W1=`#if defined( USE_POINTS_UV )
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
#endif`,j1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X1=`#ifdef USE_MORPHNORMALS
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
#endif`,Y1=`#ifdef USE_MORPHTARGETS
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
#endif`,Z1=`#ifdef USE_MORPHTARGETS
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
#endif`,J1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nR=`#ifdef USE_NORMALMAP
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
#endif`,iR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yR=`float getShadowMask() {
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
}`,_R=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xR=`#ifdef USE_SKINNING
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
#endif`,MR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bR=`#ifdef USE_SKINNING
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
#endif`,ER=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,AR=`#ifdef USE_TRANSMISSION
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
#endif`,TR=`#ifdef USE_TRANSMISSION
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
#endif`,DR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,NR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OR=`uniform sampler2D t2D;
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
}`,LR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BR=`#include <common>
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
}`,VR=`#if DEPTH_PACKING == 3200
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
}`,HR=`#define DISTANCE
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
}`,zR=`#define DISTANCE
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
}`,GR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jR=`uniform float scale;
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
}`,$R=`uniform vec3 diffuse;
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
}`,qR=`#include <common>
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
}`,XR=`uniform vec3 diffuse;
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
}`,YR=`#define LAMBERT
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
}`,ZR=`#define LAMBERT
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
}`,JR=`#define MATCAP
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
}`,KR=`#define MATCAP
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
}`,QR=`#define NORMAL
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
}`,eP=`#define NORMAL
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
}`,tP=`#define PHONG
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
}`,nP=`#define PHONG
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
}`,iP=`#define STANDARD
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
}`,rP=`#define STANDARD
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
}`,sP=`#define TOON
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
}`,oP=`#define TOON
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
}`,aP=`uniform float size;
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
}`,cP=`uniform vec3 diffuse;
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
}`,lP=`#include <common>
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
}`,uP=`uniform vec3 color;
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
}`,dP=`uniform float rotation;
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
}`,hP=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:OI,alphahash_pars_fragment:LI,alphamap_fragment:FI,alphamap_pars_fragment:UI,alphatest_fragment:kI,alphatest_pars_fragment:BI,aomap_fragment:VI,aomap_pars_fragment:HI,batching_pars_vertex:zI,batching_vertex:GI,begin_vertex:WI,beginnormal_vertex:jI,bsdfs:$I,iridescence_fragment:qI,bumpmap_pars_fragment:XI,clipping_planes_fragment:YI,clipping_planes_pars_fragment:ZI,clipping_planes_pars_vertex:JI,clipping_planes_vertex:KI,color_fragment:QI,color_pars_fragment:e1,color_pars_vertex:t1,color_vertex:n1,common:i1,cube_uv_reflection_fragment:r1,defaultnormal_vertex:s1,displacementmap_pars_vertex:o1,displacementmap_vertex:a1,emissivemap_fragment:c1,emissivemap_pars_fragment:l1,colorspace_fragment:u1,colorspace_pars_fragment:d1,envmap_fragment:h1,envmap_common_pars_fragment:f1,envmap_pars_fragment:p1,envmap_pars_vertex:m1,envmap_physical_pars_fragment:A1,envmap_vertex:g1,fog_vertex:v1,fog_pars_vertex:y1,fog_fragment:_1,fog_pars_fragment:x1,gradientmap_pars_fragment:M1,lightmap_fragment:b1,lightmap_pars_fragment:E1,lights_lambert_fragment:w1,lights_lambert_pars_fragment:S1,lights_pars_begin:C1,lights_toon_fragment:T1,lights_toon_pars_fragment:D1,lights_phong_fragment:I1,lights_phong_pars_fragment:R1,lights_physical_fragment:P1,lights_physical_pars_fragment:N1,lights_fragment_begin:O1,lights_fragment_maps:L1,lights_fragment_end:F1,logdepthbuf_fragment:U1,logdepthbuf_pars_fragment:k1,logdepthbuf_pars_vertex:B1,logdepthbuf_vertex:V1,map_fragment:H1,map_pars_fragment:z1,map_particle_fragment:G1,map_particle_pars_fragment:W1,metalnessmap_fragment:j1,metalnessmap_pars_fragment:$1,morphcolor_vertex:q1,morphnormal_vertex:X1,morphtarget_pars_vertex:Y1,morphtarget_vertex:Z1,normal_fragment_begin:J1,normal_fragment_maps:K1,normal_pars_fragment:Q1,normal_pars_vertex:eR,normal_vertex:tR,normalmap_pars_fragment:nR,clearcoat_normal_fragment_begin:iR,clearcoat_normal_fragment_maps:rR,clearcoat_pars_fragment:sR,iridescence_pars_fragment:oR,opaque_fragment:aR,packing:cR,premultiplied_alpha_fragment:lR,project_vertex:uR,dithering_fragment:dR,dithering_pars_fragment:hR,roughnessmap_fragment:fR,roughnessmap_pars_fragment:pR,shadowmap_pars_fragment:mR,shadowmap_pars_vertex:gR,shadowmap_vertex:vR,shadowmask_pars_fragment:yR,skinbase_vertex:_R,skinning_pars_vertex:xR,skinning_vertex:MR,skinnormal_vertex:bR,specularmap_fragment:ER,specularmap_pars_fragment:wR,tonemapping_fragment:SR,tonemapping_pars_fragment:CR,transmission_fragment:AR,transmission_pars_fragment:TR,uv_pars_fragment:DR,uv_pars_vertex:IR,uv_vertex:RR,worldpos_vertex:PR,background_vert:NR,background_frag:OR,backgroundCube_vert:LR,backgroundCube_frag:FR,cube_vert:UR,cube_frag:kR,depth_vert:BR,depth_frag:VR,distanceRGBA_vert:HR,distanceRGBA_frag:zR,equirect_vert:GR,equirect_frag:WR,linedashed_vert:jR,linedashed_frag:$R,meshbasic_vert:qR,meshbasic_frag:XR,meshlambert_vert:YR,meshlambert_frag:ZR,meshmatcap_vert:JR,meshmatcap_frag:KR,meshnormal_vert:QR,meshnormal_frag:eP,meshphong_vert:tP,meshphong_frag:nP,meshphysical_vert:iP,meshphysical_frag:rP,meshtoon_vert:sP,meshtoon_frag:oP,points_vert:aP,points_frag:cP,shadow_vert:lP,shadow_frag:uP,sprite_vert:dP,sprite_frag:hP},ne={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},si={basic:{uniforms:rn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:rn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new rt(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:rn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:rn([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:rn([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new rt(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:rn([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:rn([ne.points,ne.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:rn([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:rn([ne.common,ne.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:rn([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:rn([ne.sprite,ne.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:rn([ne.common,ne.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:rn([ne.lights,ne.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};si.physical={uniforms:rn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var Bl={r:0,b:0,g:0};function fP(n,e,t,i,r,s,o){let a=new rt(0),c=s===!0?0:1,l,u,d=null,h=0,p=null;function g(m,f){let w=!1,b=f.isScene===!0?f.background:null;b&&b.isTexture&&(b=(f.backgroundBlurriness>0?t:e).get(b)),b===null?v(a,c):b&&b.isColor&&(v(b,1),w=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===cu)?(u===void 0&&(u=new In(new Br(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:ro(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=ut.getTransfer(b.colorSpace)!==yt,(d!==b||h!==b.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=b,h=b.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new In(new up(2,2),new Di({name:"BackgroundMaterial",uniforms:ro(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=ut.getTransfer(b.colorSpace)!==yt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=b,h=b.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,f){m.getRGB(Bl,Ux(n)),i.buffers.color.setClear(Bl.r,Bl.g,Bl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(a,c)},render:g}}function pP(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=m(null),l=c,u=!1;function d(D,k,H,j,z){let W=!1;if(o){let $=v(j,H,k);l!==$&&(l=$,p(l.object)),W=f(D,j,H,z),W&&w(D,j,H,z)}else{let $=k.wireframe===!0;(l.geometry!==j.id||l.program!==H.id||l.wireframe!==$)&&(l.geometry=j.id,l.program=H.id,l.wireframe=$,W=!0)}z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,q(D,k,H,j),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function v(D,k,H){let j=H.wireframe===!0,z=a[D.id];z===void 0&&(z={},a[D.id]=z);let W=z[k.id];W===void 0&&(W={},z[k.id]=W);let $=W[j];return $===void 0&&($=m(h()),W[j]=$),$}function m(D){let k=[],H=[],j=[];for(let z=0;z<r;z++)k[z]=0,H[z]=0,j[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:H,attributeDivisors:j,object:D,attributes:{},index:null}}function f(D,k,H,j){let z=l.attributes,W=k.attributes,$=0,Q=H.getAttributes();for(let ee in Q)if(Q[ee].location>=0){let X=z[ee],ae=W[ee];if(ae===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),X===void 0||X.attribute!==ae||ae&&X.data!==ae.data)return!0;$++}return l.attributesNum!==$||l.index!==j}function w(D,k,H,j){let z={},W=k.attributes,$=0,Q=H.getAttributes();for(let ee in Q)if(Q[ee].location>=0){let X=W[ee];X===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(X=D.instanceColor));let ae={};ae.attribute=X,X&&X.data&&(ae.data=X.data),z[ee]=ae,$++}l.attributes=z,l.attributesNum=$,l.index=j}function b(){let D=l.newAttributes;for(let k=0,H=D.length;k<H;k++)D[k]=0}function S(D){I(D,0)}function I(D,k){let H=l.newAttributes,j=l.enabledAttributes,z=l.attributeDivisors;H[D]=1,j[D]===0&&(n.enableVertexAttribArray(D),j[D]=1),z[D]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,k),z[D]=k)}function T(){let D=l.newAttributes,k=l.enabledAttributes;for(let H=0,j=k.length;H<j;H++)k[H]!==D[H]&&(n.disableVertexAttribArray(H),k[H]=0)}function C(D,k,H,j,z,W,$){$===!0?n.vertexAttribIPointer(D,k,H,z,W):n.vertexAttribPointer(D,k,H,j,z,W)}function q(D,k,H,j){if(i.isWebGL2===!1&&(D.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let z=j.attributes,W=H.getAttributes(),$=k.defaultAttributeValues;for(let Q in W){let ee=W[Q];if(ee.location>=0){let B=z[Q];if(B===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(B=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(B=D.instanceColor)),B!==void 0){let X=B.normalized,ae=B.itemSize,ge=t.get(B);if(ge===void 0)continue;let me=ge.buffer,Ne=ge.type,Ue=ge.bytesPerElement,we=i.isWebGL2===!0&&(Ne===n.INT||Ne===n.UNSIGNED_INT||B.gpuType===Cx);if(B.isInterleavedBufferAttribute){let tt=B.data,P=tt.stride,Zt=B.offset;if(tt.isInstancedInterleavedBuffer){for(let _e=0;_e<ee.locationSize;_e++)I(ee.location+_e,tt.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let _e=0;_e<ee.locationSize;_e++)S(ee.location+_e);n.bindBuffer(n.ARRAY_BUFFER,me);for(let _e=0;_e<ee.locationSize;_e++)C(ee.location+_e,ae/ee.locationSize,Ne,X,P*Ue,(Zt+ae/ee.locationSize*_e)*Ue,we)}else{if(B.isInstancedBufferAttribute){for(let tt=0;tt<ee.locationSize;tt++)I(ee.location+tt,B.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let tt=0;tt<ee.locationSize;tt++)S(ee.location+tt);n.bindBuffer(n.ARRAY_BUFFER,me);for(let tt=0;tt<ee.locationSize;tt++)C(ee.location+tt,ae/ee.locationSize,Ne,X,ae*Ue,ae/ee.locationSize*tt*Ue,we)}}else if($!==void 0){let X=$[Q];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(ee.location,X);break;case 3:n.vertexAttrib3fv(ee.location,X);break;case 4:n.vertexAttrib4fv(ee.location,X);break;default:n.vertexAttrib1fv(ee.location,X)}}}}T()}function x(){G();for(let D in a){let k=a[D];for(let H in k){let j=k[H];for(let z in j)g(j[z].object),delete j[z];delete k[H]}delete a[D]}}function E(D){if(a[D.id]===void 0)return;let k=a[D.id];for(let H in k){let j=k[H];for(let z in j)g(j[z].object),delete j[z];delete k[H]}delete a[D.id]}function V(D){for(let k in a){let H=a[k];if(H[D.id]===void 0)continue;let j=H[D.id];for(let z in j)g(j[z].object),delete j[z];delete H[D.id]}}function G(){ie(),u=!0,l!==c&&(l=c,p(l.object))}function ie(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:G,resetDefaultState:ie,dispose:x,releaseStatesOfGeometry:E,releaseStatesOfProgram:V,initAttributes:b,enableAttribute:S,disableUnusedAttributes:T}}function mP(n,e,t,i){let r=i.isWebGL2,s;function o(u){s=u}function a(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function c(u,d,h){if(h===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,u,d,h),t.update(d,s,h)}function l(u,d,h){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{p.multiDrawArraysWEBGL(s,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function gP(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=h>0,S=o||e.has("OES_texture_float"),I=b&&S,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:w,vertexTextures:b,floatFragmentTextures:S,floatVertexTextures:I,maxSamples:T}}function vP(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Ei,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let w=s?0:i,b=w*4,S=f.clippingState||null;c.value=S,S=u(g,h,b,p);for(let I=0;I!==b;++I)S[I]=t[I];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let f=p+v*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,S=p;b!==v;++b,S+=4)o.copy(d[b]).applyMatrix4(w,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function yP(n){let e=new WeakMap;function t(o,a){return a===Kf?o.mapping=Qs:a===Qf&&(o.mapping=eo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Kf||a===Qf)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new lp(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var dp=class extends nu{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qs=4,ix=[.125,.215,.35,.446,.526,.582],Nr=20,jf=new dp,rx=new rt,$f=null,qf=0,Xf=0,Rr=(1+Math.sqrt(5))/2,js=1/Rr,sx=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Rr,js),new F(0,Rr,-js),new F(js,0,Rr),new F(-js,0,Rr),new F(Rr,js,0),new F(-Rr,js,0)],su=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){$f=this._renderer.getRenderTarget(),qf=this._renderer.getActiveCubeFace(),Xf=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ax(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($f,qf,Xf),e.scissorTest=!1,Vl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qs||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$f=this._renderer.getRenderTarget(),qf=this._renderer.getActiveCubeFace(),Xf=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:ma,format:jn,colorSpace:Ai,depthBuffer:!1},r=ox(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ox(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_P(s)),this._blurMaterial=xP(s,e,t)}return r}_compileMaterial(e){let t=new In(this._lodPlanes[0],e);this._renderer.compile(t,jf)}_sceneToCubeUV(e,t,i,r){let a=new on(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(rx),u.toneMapping=Yi,u.autoClear=!1;let p=new io({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new In(new Br,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(rx),v=!0);for(let f=0;f<6;f++){let w=f%3;w===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):w===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let b=this._cubeSize;Vl(r,w*b,f>2?b:0,b,b),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Qs||e.mapping===eo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ax());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new In(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Vl(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,jf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=sx[(r-1)%sx.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new In(this._lodPlanes[r],l),h=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Nr-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Nr;m>Nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nr}`);let f=[],w=0;for(let C=0;C<Nr;++C){let q=C/v,x=Math.exp(-q*q/2);f.push(x),C===0?w+=x:C<m&&(w+=2*x)}for(let C=0;C<f.length;C++)f[C]=f[C]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;let S=this._sizeLods[r],I=3*S*(r>b-qs?r-b+qs:0),T=4*(this._cubeSize-S);Vl(t,I,T,3*S,2*S),c.setRenderTarget(t),c.render(d,jf)}};function _P(n){let e=[],t=[],i=[],r=n,s=n-qs+1+ix.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-qs?c=ix[o-n+qs-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,v=3,m=2,f=1,w=new Float32Array(v*g*p),b=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let T=0;T<p;T++){let C=T%3*2/3-1,q=T>2?0:-1,x=[C,q,0,C+2/3,q,0,C+2/3,q+1,0,C,q,0,C+2/3,q+1,0,C,q+1,0];w.set(x,v*g*T),b.set(h,m*g*T);let E=[T,T,T,T,T,T];S.set(E,f*g*T)}let I=new kr;I.setAttribute("position",new Rn(w,v)),I.setAttribute("uv",new Rn(b,m)),I.setAttribute("faceIndex",new Rn(S,f)),e.push(I),r>qs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ox(n,e,t){let i=new Ti(n,e,t);return i.texture.mapping=cu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function xP(n,e,t){let i=new Float32Array(Nr),r=new F(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Op(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function ax(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Op(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function cx(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Op(){return`

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
	`}function MP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Kf||c===Qf,u=c===Qs||c===eo;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new su(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(l&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new su(n));let h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function bP(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function EP(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let v=h.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];let p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(d){let h=[],p=d.index,g=d.attributes.position,v=0;if(p!==null){let w=p.array;v=p.version;for(let b=0,S=w.length;b<S;b+=3){let I=w[b+0],T=w[b+1],C=w[b+2];h.push(I,T,T,C,C,I)}}else if(g!==void 0){let w=g.array;v=g.version;for(let b=0,S=w.length/3-1;b<S;b+=3){let I=b+0,T=b+1,C=b+2;h.push(I,T,T,C,C,I)}}else return;let m=new(Lx(h)?tu:eu)(h,1);m.version=v;let f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){let h=s.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function wP(n,e,t,i){let r=i.isWebGL2,s;function o(p){s=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function u(p,g){n.drawElements(s,g,a,p*c),t.update(g,s,1)}function d(p,g,v){if(v===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,g,a,p*c,v),t.update(g,s,v)}function h(p,g,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(p[f]/c,g[f]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,v);let f=0;for(let w=0;w<v;w++)f+=g[w];t.update(f,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function SP(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function CP(n,e){return n[0]-e[0]}function AP(n,e){return Math.abs(e[1])-Math.abs(n[1])}function TP(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,o=new Wt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d){let h=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0,m=s.get(u);if(m===void 0||m.count!==v){let k=function(){ie.dispose(),s.delete(u),u.removeEventListener("dispose",k)};var p=k;m!==void 0&&m.texture.dispose();let b=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],q=u.morphAttributes.color||[],x=0;b===!0&&(x=1),S===!0&&(x=2),I===!0&&(x=3);let E=u.attributes.position.count*x,V=1;E>e.maxTextureSize&&(V=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let G=new Float32Array(E*V*4*v),ie=new Kl(G,E,V,v);ie.type=qi,ie.needsUpdate=!0;let D=x*4;for(let H=0;H<v;H++){let j=T[H],z=C[H],W=q[H],$=E*V*4*H;for(let Q=0;Q<j.count;Q++){let ee=Q*D;b===!0&&(o.fromBufferAttribute(j,Q),G[$+ee+0]=o.x,G[$+ee+1]=o.y,G[$+ee+2]=o.z,G[$+ee+3]=0),S===!0&&(o.fromBufferAttribute(z,Q),G[$+ee+4]=o.x,G[$+ee+5]=o.y,G[$+ee+6]=o.z,G[$+ee+7]=0),I===!0&&(o.fromBufferAttribute(W,Q),G[$+ee+8]=o.x,G[$+ee+9]=o.y,G[$+ee+10]=o.z,G[$+ee+11]=W.itemSize===4?o.w:1)}}m={count:v,texture:ie,size:new dt(E,V)},s.set(u,m),u.addEventListener("dispose",k)}let f=0;for(let b=0;b<h.length;b++)f+=h[b];let w=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",w),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{let g=h===void 0?0:h.length,v=i[u.id];if(v===void 0||v.length!==g){v=[];for(let S=0;S<g;S++)v[S]=[S,0];i[u.id]=v}for(let S=0;S<g;S++){let I=v[S];I[0]=S,I[1]=h[S]}v.sort(AP);for(let S=0;S<8;S++)S<g&&v[S][1]?(a[S][0]=v[S][0],a[S][1]=v[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(CP);let m=u.morphAttributes.position,f=u.morphAttributes.normal,w=0;for(let S=0;S<8;S++){let I=a[S],T=I[0],C=I[1];T!==Number.MAX_SAFE_INTEGER&&C?(m&&u.getAttribute("morphTarget"+S)!==m[T]&&u.setAttribute("morphTarget"+S,m[T]),f&&u.getAttribute("morphNormal"+S)!==f[T]&&u.setAttribute("morphNormal"+S,f[T]),r[S]=C,w+=C):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),f&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}let b=u.morphTargetsRelative?1:1-w;d.getUniforms().setValue(n,"morphTargetBaseInfluence",b),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function DP(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var ou=class extends oo{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Lr,u!==Lr&&u!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Lr&&(i=$i),i===void 0&&u===to&&(i=Or),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Bx=new oo,Vx=new ou(1,1);Vx.compareFunction=Ox;var Hx=new Kl,zx=new op,Gx=new iu,lx=[],ux=[],dx=new Float32Array(16),hx=new Float32Array(9),fx=new Float32Array(4);function co(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=lx[r];if(s===void 0&&(s=new Float32Array(r),lx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function uu(n,e){let t=ux[e];t===void 0&&(t=new Int32Array(e),ux[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function IP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function RP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function PP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function NP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function OP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;fx.set(i),n.uniformMatrix2fv(this.addr,!1,fx),Pt(t,i)}}function LP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;hx.set(i),n.uniformMatrix3fv(this.addr,!1,hx),Pt(t,i)}}function FP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;dx.set(i),n.uniformMatrix4fv(this.addr,!1,dx),Pt(t,i)}}function UP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function kP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function BP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function VP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function HP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function GP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function WP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function jP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?Vx:Bx;t.setTexture2D(e||s,r)}function $P(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||zx,r)}function qP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Gx,r)}function XP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Hx,r)}function YP(n){switch(n){case 5126:return IP;case 35664:return RP;case 35665:return PP;case 35666:return NP;case 35674:return OP;case 35675:return LP;case 35676:return FP;case 5124:case 35670:return UP;case 35667:case 35671:return kP;case 35668:case 35672:return BP;case 35669:case 35673:return VP;case 5125:return HP;case 36294:return zP;case 36295:return GP;case 36296:return WP;case 35678:case 36198:case 36298:case 36306:case 35682:return jP;case 35679:case 36299:case 36307:return $P;case 35680:case 36300:case 36308:case 36293:return qP;case 36289:case 36303:case 36311:case 36292:return XP}}function ZP(n,e){n.uniform1fv(this.addr,e)}function JP(n,e){let t=co(e,this.size,2);n.uniform2fv(this.addr,t)}function KP(n,e){let t=co(e,this.size,3);n.uniform3fv(this.addr,t)}function QP(n,e){let t=co(e,this.size,4);n.uniform4fv(this.addr,t)}function eN(n,e){let t=co(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tN(n,e){let t=co(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nN(n,e){let t=co(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iN(n,e){n.uniform1iv(this.addr,e)}function rN(n,e){n.uniform2iv(this.addr,e)}function sN(n,e){n.uniform3iv(this.addr,e)}function oN(n,e){n.uniform4iv(this.addr,e)}function aN(n,e){n.uniform1uiv(this.addr,e)}function cN(n,e){n.uniform2uiv(this.addr,e)}function lN(n,e){n.uniform3uiv(this.addr,e)}function uN(n,e){n.uniform4uiv(this.addr,e)}function dN(n,e,t){let i=this.cache,r=e.length,s=uu(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Bx,s[o])}function hN(n,e,t){let i=this.cache,r=e.length,s=uu(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zx,s[o])}function fN(n,e,t){let i=this.cache,r=e.length,s=uu(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Gx,s[o])}function pN(n,e,t){let i=this.cache,r=e.length,s=uu(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Hx,s[o])}function mN(n){switch(n){case 5126:return ZP;case 35664:return JP;case 35665:return KP;case 35666:return QP;case 35674:return eN;case 35675:return tN;case 35676:return nN;case 5124:case 35670:return iN;case 35667:case 35671:return rN;case 35668:case 35672:return sN;case 35669:case 35673:return oN;case 5125:return aN;case 36294:return cN;case 36295:return lN;case 36296:return uN;case 35678:case 36198:case 36298:case 36306:case 35682:return dN;case 35679:case 36299:case 36307:return hN;case 35680:case 36300:case 36308:case 36293:return fN;case 36289:case 36303:case 36311:case 36292:return pN}}var hp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=YP(t.type)}},fp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mN(t.type)}},pp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Yf=/(\w+)(\])?(\[|\.)?/g;function px(n,e){n.seq.push(e),n.map[e.id]=e}function gN(n,e,t){let i=n.name,r=i.length;for(Yf.lastIndex=0;;){let s=Yf.exec(i),o=Yf.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){px(t,l===void 0?new hp(a,n,e):new fp(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new pp(a),px(t,d)),t=d}}}var Ks=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);gN(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function mx(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var vN=37297,yN=0;function _N(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function xN(n){let e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(n),i;switch(e===t?i="":e===ql&&t===$l?i="LinearDisplayP3ToLinearSRGB":e===$l&&t===ql&&(i="LinearSRGBToLinearDisplayP3"),n){case Ai:case lu:return[i,"LinearTransferOETF"];case Gt:case Np:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function gx(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+_N(n.getShaderSource(e),o)}else return r}function MN(n,e){let t=xN(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function bN(n,e){let t;switch(e){case kD:t="Linear";break;case BD:t="Reinhard";break;case VD:t="OptimizedCineon";break;case HD:t="ACESFilmic";break;case GD:t="AgX";break;case zD:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function EN(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xs).join(`
`)}function wN(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Xs).join(`
`)}function SN(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function CN(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Xs(n){return n!==""}function vx(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var AN=/^[ \t]*#include +<([\w\d./]+)>/gm;function mp(n){return n.replace(AN,DN)}var TN=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function DN(n,e){let t=Be[e];if(t===void 0){let i=TN.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mp(t)}var IN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _x(n){return n.replace(IN,RN)}function RN(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xx(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PN(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===hD?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function NN(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qs:case eo:e="ENVMAP_TYPE_CUBE";break;case cu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ON(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function LN(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sx:e="ENVMAP_BLENDING_MULTIPLY";break;case FD:e="ENVMAP_BLENDING_MIX";break;case UD:e="ENVMAP_BLENDING_ADD";break}return e}function FN(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function UN(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=PN(t),l=NN(t),u=ON(t),d=LN(t),h=FN(t),p=t.isWebGL2?"":EN(t),g=wN(t),v=SN(s),m=r.createProgram(),f,w,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Xs).join(`
`),f.length>0&&(f+=`
`),w=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Xs).join(`
`),w.length>0&&(w+=`
`)):(f=[xx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),w=[p,xx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?Be.tonemapping_pars_fragment:"",t.toneMapping!==Yi?bN("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,MN("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),o=mp(o),o=vx(o,t),o=yx(o,t),a=mp(a),a=vx(a,t),a=yx(a,t),o=_x(o),a=_x(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===B0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===B0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);let S=b+f+o,I=b+w+a,T=mx(r,r.VERTEX_SHADER,S),C=mx(r,r.FRAGMENT_SHADER,I);r.attachShader(m,T),r.attachShader(m,C),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function q(G){if(n.debug.checkShaderErrors){let ie=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(T).trim(),k=r.getShaderInfoLog(C).trim(),H=!0,j=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,T,C);else{let z=gx(r,T,"vertex"),W=gx(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+z+`
`+W)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(D===""||k==="")&&(j=!1);j&&(G.diagnostics={runnable:H,programLog:ie,vertexShader:{log:D,prefix:f},fragmentShader:{log:k,prefix:w}})}r.deleteShader(T),r.deleteShader(C),x=new Ks(r,m),E=CN(r,m)}let x;this.getUniforms=function(){return x===void 0&&q(this),x};let E;this.getAttributes=function(){return E===void 0&&q(this),E};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(m,vN)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yN++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=C,this}var kN=0,gp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new vp(e),t.set(e,i)),i}},vp=class{constructor(e){this.id=kN++,this.code=e,this.usedTimes=0}};function BN(n,e,t,i,r,s,o){let a=new Ql,c=new gp,l=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function m(x,E,V,G,ie){let D=G.fog,k=ie.geometry,H=x.isMeshStandardMaterial?G.environment:null,j=(x.isMeshStandardMaterial?t:e).get(x.envMap||H),z=j&&j.mapping===cu?j.image.height:null,W=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));let $=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Q=$!==void 0?$.length:0,ee=0;k.morphAttributes.position!==void 0&&(ee=1),k.morphAttributes.normal!==void 0&&(ee=2),k.morphAttributes.color!==void 0&&(ee=3);let B,X,ae,ge;if(W){let Jt=si[W];B=Jt.vertexShader,X=Jt.fragmentShader}else B=x.vertexShader,X=x.fragmentShader,c.update(x),ae=c.getVertexShaderID(x),ge=c.getFragmentShaderID(x);let me=n.getRenderTarget(),Ne=ie.isInstancedMesh===!0,Ue=ie.isBatchedMesh===!0,we=!!x.map,tt=!!x.matcap,P=!!j,Zt=!!x.aoMap,_e=!!x.lightMap,Ie=!!x.bumpMap,he=!!x.normalMap,_t=!!x.displacementMap,Ve=!!x.emissiveMap,M=!!x.metalnessMap,y=!!x.roughnessMap,O=x.anisotropy>0,J=x.clearcoat>0,Z=x.iridescence>0,K=x.sheen>0,fe=x.transmission>0,oe=O&&!!x.anisotropyMap,le=J&&!!x.clearcoatMap,Ee=J&&!!x.clearcoatNormalMap,He=J&&!!x.clearcoatRoughnessMap,Y=Z&&!!x.iridescenceMap,at=Z&&!!x.iridescenceThicknessMap,Ze=K&&!!x.sheenColorMap,Ae=K&&!!x.sheenRoughnessMap,ve=!!x.specularMap,ue=!!x.specularColorMap,ke=!!x.specularIntensityMap,st=fe&&!!x.transmissionMap,Mt=fe&&!!x.thicknessMap,Ge=!!x.gradientMap,te=!!x.alphaMap,A=x.alphaTest>0,re=!!x.alphaHash,se=!!x.extensions,Se=!!k.attributes.uv1,xe=!!k.attributes.uv2,ft=!!k.attributes.uv3,pt=Yi;return x.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(pt=n.toneMapping),{isWebGL2:u,shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:B,fragmentShader:X,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:ge,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Ue,instancing:Ne,instancingColor:Ne&&ie.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ai,map:we,matcap:tt,envMap:P,envMapMode:P&&j.mapping,envMapCubeUVHeight:z,aoMap:Zt,lightMap:_e,bumpMap:Ie,normalMap:he,displacementMap:h&&_t,emissiveMap:Ve,normalMapObjectSpace:he&&x.normalMapType===nI,normalMapTangentSpace:he&&x.normalMapType===tI,metalnessMap:M,roughnessMap:y,anisotropy:O,anisotropyMap:oe,clearcoat:J,clearcoatMap:le,clearcoatNormalMap:Ee,clearcoatRoughnessMap:He,iridescence:Z,iridescenceMap:Y,iridescenceThicknessMap:at,sheen:K,sheenColorMap:Ze,sheenRoughnessMap:Ae,specularMap:ve,specularColorMap:ue,specularIntensityMap:ke,transmission:fe,transmissionMap:st,thicknessMap:Mt,gradientMap:Ge,opaque:x.transparent===!1&&x.blending===Zs,alphaMap:te,alphaTest:A,alphaHash:re,combine:x.combine,mapUv:we&&v(x.map.channel),aoMapUv:Zt&&v(x.aoMap.channel),lightMapUv:_e&&v(x.lightMap.channel),bumpMapUv:Ie&&v(x.bumpMap.channel),normalMapUv:he&&v(x.normalMap.channel),displacementMapUv:_t&&v(x.displacementMap.channel),emissiveMapUv:Ve&&v(x.emissiveMap.channel),metalnessMapUv:M&&v(x.metalnessMap.channel),roughnessMapUv:y&&v(x.roughnessMap.channel),anisotropyMapUv:oe&&v(x.anisotropyMap.channel),clearcoatMapUv:le&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:at&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(x.sheenRoughnessMap.channel),specularMapUv:ve&&v(x.specularMap.channel),specularColorMapUv:ue&&v(x.specularColorMap.channel),specularIntensityMapUv:ke&&v(x.specularIntensityMap.channel),transmissionMapUv:st&&v(x.transmissionMap.channel),thicknessMapUv:Mt&&v(x.thicknessMap.channel),alphaMapUv:te&&v(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(he||O),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Se,vertexUv2s:xe,vertexUv3s:ft,pointsUvs:ie.isPoints===!0&&!!k.attributes.uv&&(we||te),fog:!!D,useFog:x.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ie.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ee,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===yt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wi,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:se&&x.extensions.derivatives===!0,extensionFragDepth:se&&x.extensions.fragDepth===!0,extensionDrawBuffers:se&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let V in x.defines)E.push(V),E.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(w(E,x),b(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function w(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function b(x,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function S(x){let E=g[x.type],V;if(E){let G=si[E];V=TI.clone(G.uniforms)}else V=x.uniforms;return V}function I(x,E){let V;for(let G=0,ie=l.length;G<ie;G++){let D=l[G];if(D.cacheKey===E){V=D,++V.usedTimes;break}}return V===void 0&&(V=new UN(n,E,x,s),l.push(V)),V}function T(x){if(--x.usedTimes===0){let E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),x.destroy()}}function C(x){c.remove(x)}function q(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:I,releaseProgram:T,releaseShaderCache:C,programs:l,dispose:q}}function VN(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function HN(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Mx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bx(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,g,v,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function a(d,h,p,g,v,m){let f=o(d,h,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function c(d,h,p,g,v,m){let f=o(d,h,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||HN),i.length>1&&i.sort(h||Mx),r.length>1&&r.sort(h||Mx)}function u(){for(let d=e,h=n.length;d<h;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function zN(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new bx,n.set(i,[o])):r>=s.length?(o=new bx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function GN(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new rt};break;case"SpotLight":t={position:new F,direction:new F,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function WN(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var jN=0;function $N(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function qN(n,e){let t=new GN,i=WN(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);let s=new F,o=new Yt,a=new Yt;function c(u,d){let h=0,p=0,g=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let v=0,m=0,f=0,w=0,b=0,S=0,I=0,T=0,C=0,q=0,x=0;u.sort($N);let E=d===!0?Math.PI:1;for(let G=0,ie=u.length;G<ie;G++){let D=u[G],k=D.color,H=D.intensity,j=D.distance,z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=k.r*H*E,p+=k.g*H*E,g+=k.b*H*E;else if(D.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(D.sh.coefficients[W],H);x++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){let $=D.shadow,Q=i.get(D);Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,r.directionalShadow[v]=Q,r.directionalShadowMap[v]=z,r.directionalShadowMatrix[v]=D.shadow.matrix,S++}r.directional[v]=W,v++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(k).multiplyScalar(H*E),W.distance=j,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,r.spot[f]=W;let $=D.shadow;if(D.map&&(r.spotLightMap[C]=D.map,C++,$.updateMatrices(D),D.castShadow&&q++),r.spotLightMatrix[f]=$.matrix,D.castShadow){let Q=i.get(D);Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,r.spotShadow[f]=Q,r.spotShadowMap[f]=z,T++}f++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(k).multiplyScalar(H),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),r.rectArea[w]=W,w++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*E),W.distance=D.distance,W.decay=D.decay,D.castShadow){let $=D.shadow,Q=i.get(D);Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,r.pointShadow[m]=Q,r.pointShadowMap[m]=z,r.pointShadowMatrix[m]=D.shadow.matrix,I++}r.point[m]=W,m++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(H*E),W.groundColor.copy(D.groundColor).multiplyScalar(H*E),r.hemi[b]=W,b++}}w>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;let V=r.hash;(V.directionalLength!==v||V.pointLength!==m||V.spotLength!==f||V.rectAreaLength!==w||V.hemiLength!==b||V.numDirectionalShadows!==S||V.numPointShadows!==I||V.numSpotShadows!==T||V.numSpotMaps!==C||V.numLightProbes!==x)&&(r.directional.length=v,r.spot.length=f,r.rectArea.length=w,r.point.length=m,r.hemi.length=b,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=T+C-q,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=q,r.numLightProbes=x,V.directionalLength=v,V.pointLength=m,V.spotLength=f,V.rectAreaLength=w,V.hemiLength=b,V.numDirectionalShadows=S,V.numPointShadows=I,V.numSpotShadows=T,V.numSpotMaps=C,V.numLightProbes=x,r.version=jN++)}function l(u,d){let h=0,p=0,g=0,v=0,m=0,f=d.matrixWorldInverse;for(let w=0,b=u.length;w<b;w++){let S=u[w];if(S.isDirectionalLight){let I=r.directional[h];I.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),h++}else if(S.isSpotLight){let I=r.spot[g];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),g++}else if(S.isRectAreaLight){let I=r.rectArea[v];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),I.halfWidth.set(S.width*.5,0,0),I.halfHeight.set(0,S.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){let I=r.point[p];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){let I=r.hemi[m];I.direction.setFromMatrixPosition(S.matrixWorld),I.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:r}}function Ex(n,e){let t=new qN(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function c(d){t.setup(i,d)}function l(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function XN(n,e){let t=new WeakMap;function i(s,o=0){let a=t.get(s),c;return a===void 0?(c=new Ex(n,e),t.set(s,[c])):o>=a.length?(c=new Ex(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}var yp=class extends no{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_p=class extends no{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},YN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZN=`uniform sampler2D shadow_pass;
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
}`;function JN(n,e,t){let i=new ru,r=new dt,s=new dt,o=new Wt,a=new yp({depthPacking:eI}),c=new _p,l={},u=t.maxTextureSize,d={[Ji]:dn,[dn]:Ji,[wi]:wi},h=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:YN,fragmentShader:ZN}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new kr;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new In(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wx;let f=this.type;this.render=function(T,C,q){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let x=n.getRenderTarget(),E=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Xi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let ie=f!==bi&&this.type===bi,D=f===bi&&this.type!==bi;for(let k=0,H=T.length;k<H;k++){let j=T[k],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let W=z.getFrameExtents();if(r.multiply(W),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,z.mapSize.y=s.y)),z.map===null||ie===!0||D===!0){let Q=this.type!==bi?{minFilter:sn,magFilter:sn}:{};z.map!==null&&z.map.dispose(),z.map=new Ti(r.x,r.y,Q),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let $=z.getViewportCount();for(let Q=0;Q<$;Q++){let ee=z.getViewport(Q);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),G.viewport(o),z.updateMatrices(j,Q),i=z.getFrustum(),S(C,q,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===bi&&w(z,q),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(x,E,V)};function w(T,C){let q=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ti(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,q,h,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,q,p,v,null)}function b(T,C,q,x){let E=null,V=q.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(V!==void 0)E=V;else if(E=q.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let G=E.uuid,ie=C.uuid,D=l[G];D===void 0&&(D={},l[G]=D);let k=D[ie];k===void 0&&(k=E.clone(),D[ie]=k,C.addEventListener("dispose",I)),E=k}if(E.visible=C.visible,E.wireframe=C.wireframe,x===bi?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:d[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,q.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let G=n.properties.get(E);G.light=q}return E}function S(T,C,q,x,E){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===bi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld);let ie=e.update(T),D=T.material;if(Array.isArray(D)){let k=ie.groups;for(let H=0,j=k.length;H<j;H++){let z=k[H],W=D[z.materialIndex];if(W&&W.visible){let $=b(T,W,x,E);T.onBeforeShadow(n,T,C,q,ie,$,z),n.renderBufferDirect(q,null,ie,$,T,z),T.onAfterShadow(n,T,C,q,ie,$,z)}}}else if(D.visible){let k=b(T,D,x,E);T.onBeforeShadow(n,T,C,q,ie,k,null),n.renderBufferDirect(q,null,ie,k,T,null),T.onAfterShadow(n,T,C,q,ie,k,null)}}let G=T.children;for(let ie=0,D=G.length;ie<D;ie++)S(G[ie],C,q,x,E)}function I(T){T.target.removeEventListener("dispose",I);for(let q in l){let x=l[q],E=T.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}function KN(n,e,t){let i=t.isWebGL2;function r(){let A=!1,re=new Wt,se=null,Se=new Wt(0,0,0,0);return{setMask:function(xe){se!==xe&&!A&&(n.colorMask(xe,xe,xe,xe),se=xe)},setLocked:function(xe){A=xe},setClear:function(xe,ft,pt,Nt,Jt){Jt===!0&&(xe*=Nt,ft*=Nt,pt*=Nt),re.set(xe,ft,pt,Nt),Se.equals(re)===!1&&(n.clearColor(xe,ft,pt,Nt),Se.copy(re))},reset:function(){A=!1,se=null,Se.set(-1,0,0,0)}}}function s(){let A=!1,re=null,se=null,Se=null;return{setTest:function(xe){xe?Ue(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(xe){re!==xe&&!A&&(n.depthMask(xe),re=xe)},setFunc:function(xe){if(se!==xe){switch(xe){case DD:n.depthFunc(n.NEVER);break;case ID:n.depthFunc(n.ALWAYS);break;case RD:n.depthFunc(n.LESS);break;case zl:n.depthFunc(n.LEQUAL);break;case PD:n.depthFunc(n.EQUAL);break;case ND:n.depthFunc(n.GEQUAL);break;case OD:n.depthFunc(n.GREATER);break;case LD:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=xe}},setLocked:function(xe){A=xe},setClear:function(xe){Se!==xe&&(n.clearDepth(xe),Se=xe)},reset:function(){A=!1,re=null,se=null,Se=null}}}function o(){let A=!1,re=null,se=null,Se=null,xe=null,ft=null,pt=null,Nt=null,Jt=null;return{setTest:function(mt){A||(mt?Ue(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(mt){re!==mt&&!A&&(n.stencilMask(mt),re=mt)},setFunc:function(mt,Kt,qn){(se!==mt||Se!==Kt||xe!==qn)&&(n.stencilFunc(mt,Kt,qn),se=mt,Se=Kt,xe=qn)},setOp:function(mt,Kt,qn){(ft!==mt||pt!==Kt||Nt!==qn)&&(n.stencilOp(mt,Kt,qn),ft=mt,pt=Kt,Nt=qn)},setLocked:function(mt){A=mt},setClear:function(mt){Jt!==mt&&(n.clearStencil(mt),Jt=mt)},reset:function(){A=!1,re=null,se=null,Se=null,xe=null,ft=null,pt=null,Nt=null,Jt=null}}}let a=new r,c=new s,l=new o,u=new WeakMap,d=new WeakMap,h={},p={},g=new WeakMap,v=[],m=null,f=!1,w=null,b=null,S=null,I=null,T=null,C=null,q=null,x=new rt(0,0,0),E=0,V=!1,G=null,ie=null,D=null,k=null,H=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,W=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec($)[1]),z=W>=1):$.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),z=W>=2);let Q=null,ee={},B=n.getParameter(n.SCISSOR_BOX),X=n.getParameter(n.VIEWPORT),ae=new Wt().fromArray(B),ge=new Wt().fromArray(X);function me(A,re,se,Se){let xe=new Uint8Array(4),ft=n.createTexture();n.bindTexture(A,ft),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pt=0;pt<se;pt++)i&&(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)?n.texImage3D(re,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(re+pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return ft}let Ne={};Ne[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),Ne[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ne[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ue(n.DEPTH_TEST),c.setFunc(zl),Ve(!1),M(t0),Ue(n.CULL_FACE),he(Xi);function Ue(A){h[A]!==!0&&(n.enable(A),h[A]=!0)}function we(A){h[A]!==!1&&(n.disable(A),h[A]=!1)}function tt(A,re){return p[A]!==re?(n.bindFramebuffer(A,re),p[A]=re,i&&(A===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=re),A===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=re)),!0):!1}function P(A,re){let se=v,Se=!1;if(A)if(se=g.get(re),se===void 0&&(se=[],g.set(re,se)),A.isWebGLMultipleRenderTargets){let xe=A.texture;if(se.length!==xe.length||se[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,pt=xe.length;ft<pt;ft++)se[ft]=n.COLOR_ATTACHMENT0+ft;se.length=xe.length,Se=!0}}else se[0]!==n.COLOR_ATTACHMENT0&&(se[0]=n.COLOR_ATTACHMENT0,Se=!0);else se[0]!==n.BACK&&(se[0]=n.BACK,Se=!0);Se&&(t.isWebGL2?n.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function Zt(A){return m!==A?(n.useProgram(A),m=A,!0):!1}let _e={[Pr]:n.FUNC_ADD,[pD]:n.FUNC_SUBTRACT,[mD]:n.FUNC_REVERSE_SUBTRACT};if(i)_e[s0]=n.MIN,_e[o0]=n.MAX;else{let A=e.get("EXT_blend_minmax");A!==null&&(_e[s0]=A.MIN_EXT,_e[o0]=A.MAX_EXT)}let Ie={[gD]:n.ZERO,[vD]:n.ONE,[yD]:n.SRC_COLOR,[Zf]:n.SRC_ALPHA,[wD]:n.SRC_ALPHA_SATURATE,[bD]:n.DST_COLOR,[xD]:n.DST_ALPHA,[_D]:n.ONE_MINUS_SRC_COLOR,[Jf]:n.ONE_MINUS_SRC_ALPHA,[ED]:n.ONE_MINUS_DST_COLOR,[MD]:n.ONE_MINUS_DST_ALPHA,[SD]:n.CONSTANT_COLOR,[CD]:n.ONE_MINUS_CONSTANT_COLOR,[AD]:n.CONSTANT_ALPHA,[TD]:n.ONE_MINUS_CONSTANT_ALPHA};function he(A,re,se,Se,xe,ft,pt,Nt,Jt,mt){if(A===Xi){f===!0&&(we(n.BLEND),f=!1);return}if(f===!1&&(Ue(n.BLEND),f=!0),A!==fD){if(A!==w||mt!==V){if((b!==Pr||T!==Pr)&&(n.blendEquation(n.FUNC_ADD),b=Pr,T=Pr),mt)switch(A){case Zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case n0:n.blendFunc(n.ONE,n.ONE);break;case i0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case r0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case n0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case i0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case r0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}S=null,I=null,C=null,q=null,x.set(0,0,0),E=0,w=A,V=mt}return}xe=xe||re,ft=ft||se,pt=pt||Se,(re!==b||xe!==T)&&(n.blendEquationSeparate(_e[re],_e[xe]),b=re,T=xe),(se!==S||Se!==I||ft!==C||pt!==q)&&(n.blendFuncSeparate(Ie[se],Ie[Se],Ie[ft],Ie[pt]),S=se,I=Se,C=ft,q=pt),(Nt.equals(x)===!1||Jt!==E)&&(n.blendColor(Nt.r,Nt.g,Nt.b,Jt),x.copy(Nt),E=Jt),w=A,V=!1}function _t(A,re){A.side===wi?we(n.CULL_FACE):Ue(n.CULL_FACE);let se=A.side===dn;re&&(se=!se),Ve(se),A.blending===Zs&&A.transparent===!1?he(Xi):he(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),a.setMask(A.colorWrite);let Se=A.stencilWrite;l.setTest(Se),Se&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),O(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Ue(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(A){G!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),G=A)}function M(A){A!==uD?(Ue(n.CULL_FACE),A!==ie&&(A===t0?n.cullFace(n.BACK):A===dD?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),ie=A}function y(A){A!==D&&(z&&n.lineWidth(A),D=A)}function O(A,re,se){A?(Ue(n.POLYGON_OFFSET_FILL),(k!==re||H!==se)&&(n.polygonOffset(re,se),k=re,H=se)):we(n.POLYGON_OFFSET_FILL)}function J(A){A?Ue(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function Z(A){A===void 0&&(A=n.TEXTURE0+j-1),Q!==A&&(n.activeTexture(A),Q=A)}function K(A,re,se){se===void 0&&(Q===null?se=n.TEXTURE0+j-1:se=Q);let Se=ee[se];Se===void 0&&(Se={type:void 0,texture:void 0},ee[se]=Se),(Se.type!==A||Se.texture!==re)&&(Q!==se&&(n.activeTexture(se),Q=se),n.bindTexture(A,re||Ne[A]),Se.type=A,Se.texture=re)}function fe(){let A=ee[Q];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function le(){try{n.compressedTexImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ee(){try{n.texSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function He(){try{n.texSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Y(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function at(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ze(){try{n.texStorage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ae(){try{n.texStorage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ue(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ke(A){ae.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),ae.copy(A))}function st(A){ge.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),ge.copy(A))}function Mt(A,re){let se=d.get(re);se===void 0&&(se=new WeakMap,d.set(re,se));let Se=se.get(A);Se===void 0&&(Se=n.getUniformBlockIndex(re,A.name),se.set(A,Se))}function Ge(A,re){let Se=d.get(re).get(A);u.get(re)!==Se&&(n.uniformBlockBinding(re,Se,A.__bindingPointIndex),u.set(re,Se))}function te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Q=null,ee={},p={},g=new WeakMap,v=[],m=null,f=!1,w=null,b=null,S=null,I=null,T=null,C=null,q=null,x=new rt(0,0,0),E=0,V=!1,G=null,ie=null,D=null,k=null,H=null,ae.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ue,disable:we,bindFramebuffer:tt,drawBuffers:P,useProgram:Zt,setBlending:he,setMaterial:_t,setFlipSided:Ve,setCullFace:M,setLineWidth:y,setPolygonOffset:O,setScissorTest:J,activeTexture:Z,bindTexture:K,unbindTexture:fe,compressedTexImage2D:oe,compressedTexImage3D:le,texImage2D:ve,texImage3D:ue,updateUBOMapping:Mt,uniformBlockBinding:Ge,texStorage2D:Ze,texStorage3D:Ae,texSubImage2D:Ee,texSubImage3D:He,compressedTexSubImage2D:Y,compressedTexSubImage3D:at,scissor:ke,viewport:st,reset:te}}function QN(n,e,t,i,r,s,o){let a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,y){return p?new OffscreenCanvas(M,y):Yl("canvas")}function v(M,y,O,J){let Z=1;if((M.width>J||M.height>J)&&(Z=J/Math.max(M.width,M.height)),Z<1||y===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let K=y?rp:Math.floor,fe=K(Z*M.width),oe=K(Z*M.height);d===void 0&&(d=g(fe,oe));let le=O?g(fe,oe):d;return le.width=fe,le.height=oe,le.getContext("2d").drawImage(M,0,0,fe,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+fe+"x"+oe+")."),le}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return V0(M.width)&&V0(M.height)}function f(M){return a?!1:M.wrapS!==Wn||M.wrapT!==Wn||M.minFilter!==sn&&M.minFilter!==Tn}function w(M,y){return M.generateMipmaps&&y&&M.minFilter!==sn&&M.minFilter!==Tn}function b(M){n.generateMipmap(M)}function S(M,y,O,J,Z=!1){if(a===!1)return y;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let K=y;if(y===n.RED&&(O===n.FLOAT&&(K=n.R32F),O===n.HALF_FLOAT&&(K=n.R16F),O===n.UNSIGNED_BYTE&&(K=n.R8)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.R8UI),O===n.UNSIGNED_SHORT&&(K=n.R16UI),O===n.UNSIGNED_INT&&(K=n.R32UI),O===n.BYTE&&(K=n.R8I),O===n.SHORT&&(K=n.R16I),O===n.INT&&(K=n.R32I)),y===n.RG&&(O===n.FLOAT&&(K=n.RG32F),O===n.HALF_FLOAT&&(K=n.RG16F),O===n.UNSIGNED_BYTE&&(K=n.RG8)),y===n.RGBA){let fe=Z?jl:ut.getTransfer(J);O===n.FLOAT&&(K=n.RGBA32F),O===n.HALF_FLOAT&&(K=n.RGBA16F),O===n.UNSIGNED_BYTE&&(K=fe===yt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function I(M,y,O){return w(M,O)===!0||M.isFramebufferTexture&&M.minFilter!==sn&&M.minFilter!==Tn?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function T(M){return M===sn||M===c0||M===_f?n.NEAREST:n.LINEAR}function C(M){let y=M.target;y.removeEventListener("dispose",C),x(y),y.isVideoTexture&&u.delete(y)}function q(M){let y=M.target;y.removeEventListener("dispose",q),V(y)}function x(M){let y=i.get(M);if(y.__webglInit===void 0)return;let O=M.source,J=h.get(O);if(J){let Z=J[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(M),Object.keys(J).length===0&&h.delete(O)}i.remove(M)}function E(M){let y=i.get(M);n.deleteTexture(y.__webglTexture);let O=M.source,J=h.get(O);delete J[y.__cacheKey],o.memory.textures--}function V(M){let y=M.texture,O=i.get(M),J=i.get(y);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(O.__webglFramebuffer[Z]))for(let K=0;K<O.__webglFramebuffer[Z].length;K++)n.deleteFramebuffer(O.__webglFramebuffer[Z][K]);else n.deleteFramebuffer(O.__webglFramebuffer[Z]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[Z])}else{if(Array.isArray(O.__webglFramebuffer))for(let Z=0;Z<O.__webglFramebuffer.length;Z++)n.deleteFramebuffer(O.__webglFramebuffer[Z]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Z=0;Z<O.__webglColorRenderbuffer.length;Z++)O.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[Z]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Z=0,K=y.length;Z<K;Z++){let fe=i.get(y[Z]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(y[Z])}i.remove(y),i.remove(M)}let G=0;function ie(){G=0}function D(){let M=G;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),G+=1,M}function k(M){let y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.wrapR||0),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.colorSpace),y.join()}function H(M,y){let O=i.get(M);if(M.isVideoTexture&&_t(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){let J=M.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(O,M,y);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function j(M,y){let O=i.get(M);if(M.version>0&&O.__version!==M.version){ae(O,M,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function z(M,y){let O=i.get(M);if(M.version>0&&O.__version!==M.version){ae(O,M,y);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function W(M,y){let O=i.get(M);if(M.version>0&&O.__version!==M.version){ge(O,M,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}let $={[ep]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[tp]:n.MIRRORED_REPEAT},Q={[sn]:n.NEAREST,[c0]:n.NEAREST_MIPMAP_NEAREST,[_f]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[WD]:n.LINEAR_MIPMAP_NEAREST,[pa]:n.LINEAR_MIPMAP_LINEAR},ee={[iI]:n.NEVER,[lI]:n.ALWAYS,[rI]:n.LESS,[Ox]:n.LEQUAL,[sI]:n.EQUAL,[cI]:n.GEQUAL,[oI]:n.GREATER,[aI]:n.NOTEQUAL};function B(M,y,O){if(O?(n.texParameteri(M,n.TEXTURE_WRAP_S,$[y.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,$[y.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,$[y.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Q[y.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Q[y.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==Wn||y.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,T(y.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==sn&&y.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,ee[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let J=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===sn||y.minFilter!==_f&&y.minFilter!==pa||y.type===qi&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===ma&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(M,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function X(M,y){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",C));let J=y.source,Z=h.get(J);Z===void 0&&(Z={},h.set(J,Z));let K=k(y);if(K!==M.__cacheKey){Z[K]===void 0&&(Z[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[K].usedTimes++;let fe=Z[M.__cacheKey];fe!==void 0&&(Z[M.__cacheKey].usedTimes--,fe.usedTimes===0&&E(y)),M.__cacheKey=K,M.__webglTexture=Z[K].texture}return O}function ae(M,y,O){let J=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=n.TEXTURE_3D);let Z=X(M,y),K=y.source;t.bindTexture(J,M.__webglTexture,n.TEXTURE0+O);let fe=i.get(K);if(K.version!==fe.__version||Z===!0){t.activeTexture(n.TEXTURE0+O);let oe=ut.getPrimaries(ut.workingColorSpace),le=y.colorSpace===Dn?null:ut.getPrimaries(y.colorSpace),Ee=y.colorSpace===Dn||oe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let He=f(y)&&m(y.image)===!1,Y=v(y.image,He,!1,r.maxTextureSize);Y=Ve(y,Y);let at=m(Y)||a,Ze=s.convert(y.format,y.colorSpace),Ae=s.convert(y.type),ve=S(y.internalFormat,Ze,Ae,y.colorSpace,y.isVideoTexture);B(J,y,at);let ue,ke=y.mipmaps,st=a&&y.isVideoTexture!==!0&&ve!==Px,Mt=fe.__version===void 0||Z===!0,Ge=I(y,Y,at);if(y.isDepthTexture)ve=n.DEPTH_COMPONENT,a?y.type===qi?ve=n.DEPTH_COMPONENT32F:y.type===$i?ve=n.DEPTH_COMPONENT24:y.type===Or?ve=n.DEPTH24_STENCIL8:ve=n.DEPTH_COMPONENT16:y.type===qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Lr&&ve===n.DEPTH_COMPONENT&&y.type!==Pp&&y.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=$i,Ae=s.convert(y.type)),y.format===to&&ve===n.DEPTH_COMPONENT&&(ve=n.DEPTH_STENCIL,y.type!==Or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Or,Ae=s.convert(y.type))),Mt&&(st?t.texStorage2D(n.TEXTURE_2D,1,ve,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,ve,Y.width,Y.height,0,Ze,Ae,null));else if(y.isDataTexture)if(ke.length>0&&at){st&&Mt&&t.texStorage2D(n.TEXTURE_2D,Ge,ve,ke[0].width,ke[0].height);for(let te=0,A=ke.length;te<A;te++)ue=ke[te],st?t.texSubImage2D(n.TEXTURE_2D,te,0,0,ue.width,ue.height,Ze,Ae,ue.data):t.texImage2D(n.TEXTURE_2D,te,ve,ue.width,ue.height,0,Ze,Ae,ue.data);y.generateMipmaps=!1}else st?(Mt&&t.texStorage2D(n.TEXTURE_2D,Ge,ve,Y.width,Y.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Y.width,Y.height,Ze,Ae,Y.data)):t.texImage2D(n.TEXTURE_2D,0,ve,Y.width,Y.height,0,Ze,Ae,Y.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){st&&Mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,ve,ke[0].width,ke[0].height,Y.depth);for(let te=0,A=ke.length;te<A;te++)ue=ke[te],y.format!==jn?Ze!==null?st?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,Y.depth,Ze,ue.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,ve,ue.width,ue.height,Y.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,Y.depth,Ze,Ae,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,ve,ue.width,ue.height,Y.depth,0,Ze,Ae,ue.data)}else{st&&Mt&&t.texStorage2D(n.TEXTURE_2D,Ge,ve,ke[0].width,ke[0].height);for(let te=0,A=ke.length;te<A;te++)ue=ke[te],y.format!==jn?Ze!==null?st?t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,ue.width,ue.height,Ze,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,te,ve,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage2D(n.TEXTURE_2D,te,0,0,ue.width,ue.height,Ze,Ae,ue.data):t.texImage2D(n.TEXTURE_2D,te,ve,ue.width,ue.height,0,Ze,Ae,ue.data)}else if(y.isDataArrayTexture)st?(Mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,ve,Y.width,Y.height,Y.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Ze,Ae,Y.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,Y.width,Y.height,Y.depth,0,Ze,Ae,Y.data);else if(y.isData3DTexture)st?(Mt&&t.texStorage3D(n.TEXTURE_3D,Ge,ve,Y.width,Y.height,Y.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Ze,Ae,Y.data)):t.texImage3D(n.TEXTURE_3D,0,ve,Y.width,Y.height,Y.depth,0,Ze,Ae,Y.data);else if(y.isFramebufferTexture){if(Mt)if(st)t.texStorage2D(n.TEXTURE_2D,Ge,ve,Y.width,Y.height);else{let te=Y.width,A=Y.height;for(let re=0;re<Ge;re++)t.texImage2D(n.TEXTURE_2D,re,ve,te,A,0,Ze,Ae,null),te>>=1,A>>=1}}else if(ke.length>0&&at){st&&Mt&&t.texStorage2D(n.TEXTURE_2D,Ge,ve,ke[0].width,ke[0].height);for(let te=0,A=ke.length;te<A;te++)ue=ke[te],st?t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ze,Ae,ue):t.texImage2D(n.TEXTURE_2D,te,ve,Ze,Ae,ue);y.generateMipmaps=!1}else st?(Mt&&t.texStorage2D(n.TEXTURE_2D,Ge,ve,Y.width,Y.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ze,Ae,Y)):t.texImage2D(n.TEXTURE_2D,0,ve,Ze,Ae,Y);w(y,at)&&b(J),fe.__version=K.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function ge(M,y,O){if(y.image.length!==6)return;let J=X(M,y),Z=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+O);let K=i.get(Z);if(Z.version!==K.__version||J===!0){t.activeTexture(n.TEXTURE0+O);let fe=ut.getPrimaries(ut.workingColorSpace),oe=y.colorSpace===Dn?null:ut.getPrimaries(y.colorSpace),le=y.colorSpace===Dn||fe===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Ee=y.isCompressedTexture||y.image[0].isCompressedTexture,He=y.image[0]&&y.image[0].isDataTexture,Y=[];for(let te=0;te<6;te++)!Ee&&!He?Y[te]=v(y.image[te],!1,!0,r.maxCubemapSize):Y[te]=He?y.image[te].image:y.image[te],Y[te]=Ve(y,Y[te]);let at=Y[0],Ze=m(at)||a,Ae=s.convert(y.format,y.colorSpace),ve=s.convert(y.type),ue=S(y.internalFormat,Ae,ve,y.colorSpace),ke=a&&y.isVideoTexture!==!0,st=K.__version===void 0||J===!0,Mt=I(y,at,Ze);B(n.TEXTURE_CUBE_MAP,y,Ze);let Ge;if(Ee){ke&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,ue,at.width,at.height);for(let te=0;te<6;te++){Ge=Y[te].mipmaps;for(let A=0;A<Ge.length;A++){let re=Ge[A];y.format!==jn?Ae!==null?ke?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A,0,0,re.width,re.height,Ae,re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A,ue,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A,0,0,re.width,re.height,Ae,ve,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A,ue,re.width,re.height,0,Ae,ve,re.data)}}}else{Ge=y.mipmaps,ke&&st&&(Ge.length>0&&Mt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,ue,Y[0].width,Y[0].height));for(let te=0;te<6;te++)if(He){ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Y[te].width,Y[te].height,Ae,ve,Y[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ue,Y[te].width,Y[te].height,0,Ae,ve,Y[te].data);for(let A=0;A<Ge.length;A++){let se=Ge[A].image[te].image;ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A+1,0,0,se.width,se.height,Ae,ve,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A+1,ue,se.width,se.height,0,Ae,ve,se.data)}}else{ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ae,ve,Y[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ue,Ae,ve,Y[te]);for(let A=0;A<Ge.length;A++){let re=Ge[A];ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A+1,0,0,Ae,ve,re.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A+1,ue,Ae,ve,re.image[te])}}}w(y,Ze)&&b(n.TEXTURE_CUBE_MAP),K.__version=Z.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function me(M,y,O,J,Z,K){let fe=s.convert(O.format,O.colorSpace),oe=s.convert(O.type),le=S(O.internalFormat,fe,oe,O.colorSpace);if(!i.get(y).__hasExternalTextures){let He=Math.max(1,y.width>>K),Y=Math.max(1,y.height>>K);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,K,le,He,Y,y.depth,0,fe,oe,null):t.texImage2D(Z,K,le,He,Y,0,fe,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),he(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Z,i.get(O).__webglTexture,0,Ie(y)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,Z,i.get(O).__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(M,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,M),y.depthBuffer&&!y.stencilBuffer){let J=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||he(y)){let Z=y.depthTexture;Z&&Z.isDepthTexture&&(Z.type===qi?J=n.DEPTH_COMPONENT32F:Z.type===$i&&(J=n.DEPTH_COMPONENT24));let K=Ie(y);he(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,J,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,K,J,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,J,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(y.depthBuffer&&y.stencilBuffer){let J=Ie(y);O&&he(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,y.width,y.height):he(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{let J=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Z=0;Z<J.length;Z++){let K=J[Z],fe=s.convert(K.format,K.colorSpace),oe=s.convert(K.type),le=S(K.internalFormat,fe,oe,K.colorSpace),Ee=Ie(y);O&&he(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,le,y.width,y.height):he(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,le,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,le,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(M,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);let J=i.get(y.depthTexture).__webglTexture,Z=Ie(y);if(y.depthTexture.format===Lr)he(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(y.depthTexture.format===to)he(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function we(M){let y=i.get(M),O=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ue(y.__webglFramebuffer,M)}else if(O){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]=n.createRenderbuffer(),Ne(y.__webglDepthbuffer[J],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),Ne(y.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(M,y,O){let J=i.get(M);y!==void 0&&me(J.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&we(M)}function P(M){let y=M.texture,O=i.get(M),J=i.get(y);M.addEventListener("dispose",q),M.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=y.version,o.memory.textures++);let Z=M.isWebGLCubeRenderTarget===!0,K=M.isWebGLMultipleRenderTargets===!0,fe=m(M)||a;if(Z){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let le=0;le<y.mipmaps.length;le++)O.__webglFramebuffer[oe][le]=n.createFramebuffer()}else O.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<y.mipmaps.length;oe++)O.__webglFramebuffer[oe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(K)if(r.drawBuffers){let oe=M.texture;for(let le=0,Ee=oe.length;le<Ee;le++){let He=i.get(oe[le]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&he(M)===!1){let oe=K?y:[y];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<oe.length;le++){let Ee=oe[le];O.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[le]);let He=s.convert(Ee.format,Ee.colorSpace),Y=s.convert(Ee.type),at=S(Ee.internalFormat,He,Y,Ee.colorSpace,M.isXRRenderTarget===!0),Ze=Ie(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,at,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,O.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(O.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),B(n.TEXTURE_CUBE_MAP,y,fe);for(let oe=0;oe<6;oe++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)me(O.__webglFramebuffer[oe][le],M,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,le);else me(O.__webglFramebuffer[oe],M,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);w(y,fe)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(K){let oe=M.texture;for(let le=0,Ee=oe.length;le<Ee;le++){let He=oe[le],Y=i.get(He);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture),B(n.TEXTURE_2D,He,fe),me(O.__webglFramebuffer,M,He,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),w(He,fe)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?oe=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,J.__webglTexture),B(oe,y,fe),a&&y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)me(O.__webglFramebuffer[le],M,y,n.COLOR_ATTACHMENT0,oe,le);else me(O.__webglFramebuffer,M,y,n.COLOR_ATTACHMENT0,oe,0);w(y,fe)&&b(oe),t.unbindTexture()}M.depthBuffer&&we(M)}function Zt(M){let y=m(M)||a,O=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0,Z=O.length;J<Z;J++){let K=O[J];if(w(K,y)){let fe=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(K).__webglTexture;t.bindTexture(fe,oe),b(fe),t.unbindTexture()}}}function _e(M){if(a&&M.samples>0&&he(M)===!1){let y=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],O=M.width,J=M.height,Z=n.COLOR_BUFFER_BIT,K=[],fe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(M),le=M.isWebGLMultipleRenderTargets===!0;if(le)for(let Ee=0;Ee<y.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Ee=0;Ee<y.length;Ee++){K.push(n.COLOR_ATTACHMENT0+Ee),M.depthBuffer&&K.push(fe);let He=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(He===!1&&(M.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),le&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Ee]),He===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[fe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[fe])),le){let Y=i.get(y[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Y,0)}n.blitFramebuffer(0,0,O,J,0,0,O,J,Z,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,K)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Ee=0;Ee<y.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Ee]);let He=i.get(y[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Ie(M){return Math.min(r.maxSamples,M.samples)}function he(M){let y=i.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _t(M){let y=o.render.frame;u.get(M)!==y&&(u.set(M,y),M.update())}function Ve(M,y){let O=M.colorSpace,J=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===np||O!==Ai&&O!==Dn&&(ut.getTransfer(O)===yt?a===!1?e.has("EXT_sRGB")===!0&&J===jn?(M.format=np,M.minFilter=Tn,M.generateMipmaps=!1):y=Zl.sRGBToLinear(y):(J!==jn||Z!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}this.allocateTextureUnit=D,this.resetTextureUnits=ie,this.setTexture2D=H,this.setTexture2DArray=j,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=tt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=me,this.useMultisampledRTT=he}function eO(n,e,t){let i=t.isWebGL2;function r(s,o=Dn){let a,c=ut.getTransfer(o);if(s===Zi)return n.UNSIGNED_BYTE;if(s===Ax)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Tx)return n.UNSIGNED_SHORT_5_5_5_1;if(s===jD)return n.BYTE;if(s===$D)return n.SHORT;if(s===Pp)return n.UNSIGNED_SHORT;if(s===Cx)return n.INT;if(s===$i)return n.UNSIGNED_INT;if(s===qi)return n.FLOAT;if(s===ma)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===qD)return n.ALPHA;if(s===jn)return n.RGBA;if(s===XD)return n.LUMINANCE;if(s===YD)return n.LUMINANCE_ALPHA;if(s===Lr)return n.DEPTH_COMPONENT;if(s===to)return n.DEPTH_STENCIL;if(s===np)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ZD)return n.RED;if(s===Dx)return n.RED_INTEGER;if(s===JD)return n.RG;if(s===Ix)return n.RG_INTEGER;if(s===Rx)return n.RGBA_INTEGER;if(s===xf||s===Mf||s===bf||s===Ef)if(c===yt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===xf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ef)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===xf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ef)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===l0||s===u0||s===d0||s===h0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===l0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===u0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===d0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===h0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Px)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===f0||s===p0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===f0)return c===yt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===p0)return c===yt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===m0||s===g0||s===v0||s===y0||s===_0||s===x0||s===M0||s===b0||s===E0||s===w0||s===S0||s===C0||s===A0||s===T0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===m0)return c===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===g0)return c===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===v0)return c===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===y0)return c===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_0)return c===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===x0)return c===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===M0)return c===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===b0)return c===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===E0)return c===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===w0)return c===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===S0)return c===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===C0)return c===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===A0)return c===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===T0)return c===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wf||s===D0||s===I0)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===wf)return c===yt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===D0)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===I0)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===KD||s===R0||s===P0||s===N0)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===wf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===R0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===P0)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===N0)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Or?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var xp=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ys=class extends ao{constructor(){super(),this.isGroup=!0,this.type="Group"}},tO={type:"move"},fa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tO)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ys;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Mp=class extends Ki{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,g=null,v=t.getContextAttributes(),m=null,f=null,w=[],b=[],S=new dt,I=null,T=new on;T.layers.enable(1),T.viewport=new Wt;let C=new on;C.layers.enable(2),C.viewport=new Wt;let q=[T,C],x=new xp;x.layers.enable(1),x.layers.enable(2);let E=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let X=w[B];return X===void 0&&(X=new fa,w[B]=X),X.getTargetRaySpace()},this.getControllerGrip=function(B){let X=w[B];return X===void 0&&(X=new fa,w[B]=X),X.getGripSpace()},this.getHand=function(B){let X=w[B];return X===void 0&&(X=new fa,w[B]=X),X.getHandSpace()};function G(B){let X=b.indexOf(B.inputSource);if(X===-1)return;let ae=w[X];ae!==void 0&&(ae.update(B.inputSource,B.frame,l||o),ae.dispatchEvent({type:B.type,data:B.inputSource}))}function ie(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",D);for(let B=0;B<w.length;B++){let X=b[B];X!==null&&(b[B]=null,w[B].disconnect(X))}E=null,V=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(B){return Gp(this,null,function*(){if(r=B,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&(yield t.makeXRCompatible()),I=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Ti(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let X=null,ae=null,ge=null;v.depth&&(ge=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=v.stencil?to:Lr,ae=v.stencil?Or:$i);let me={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new Ti(h.textureWidth,h.textureHeight,{format:jn,type:Zi,depthTexture:new ou(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Ne=e.properties.get(f);Ne.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(B){for(let X=0;X<B.removed.length;X++){let ae=B.removed[X],ge=b.indexOf(ae);ge>=0&&(b[ge]=null,w[ge].disconnect(ae))}for(let X=0;X<B.added.length;X++){let ae=B.added[X],ge=b.indexOf(ae);if(ge===-1){for(let Ne=0;Ne<w.length;Ne++)if(Ne>=b.length){b.push(ae),ge=Ne;break}else if(b[Ne]===null){b[Ne]=ae,ge=Ne;break}if(ge===-1)break}let me=w[ge];me&&me.connect(ae)}}let k=new F,H=new F;function j(B,X,ae){k.setFromMatrixPosition(X.matrixWorld),H.setFromMatrixPosition(ae.matrixWorld);let ge=k.distanceTo(H),me=X.projectionMatrix.elements,Ne=ae.projectionMatrix.elements,Ue=me[14]/(me[10]-1),we=me[14]/(me[10]+1),tt=(me[9]+1)/me[5],P=(me[9]-1)/me[5],Zt=(me[8]-1)/me[0],_e=(Ne[8]+1)/Ne[0],Ie=Ue*Zt,he=Ue*_e,_t=ge/(-Zt+_e),Ve=_t*-Zt;X.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ve),B.translateZ(_t),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let M=Ue+_t,y=we+_t,O=Ie-Ve,J=he+(ge-Ve),Z=tt*we/y*M,K=P*we/y*M;B.projectionMatrix.makePerspective(O,J,Z,K,M,y),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function z(B,X){X===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(X.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;x.near=C.near=T.near=B.near,x.far=C.far=T.far=B.far,(E!==x.near||V!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,V=x.far);let X=B.parent,ae=x.cameras;z(x,X);for(let ge=0;ge<ae.length;ge++)z(ae[ge],X);ae.length===2?j(x,T,C):x.projectionMatrix.copy(T.projectionMatrix),W(B,x,X)};function W(B,X,ae){ae===null?B.matrix.copy(X.matrixWorld):(B.matrix.copy(ae.matrixWorld),B.matrix.invert(),B.matrix.multiply(X.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(X.projectionMatrix),B.projectionMatrixInverse.copy(X.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ip*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(B){c=B,h!==null&&(h.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)};let $=null;function Q(B,X){if(u=X.getViewerPose(l||o),g=X,u!==null){let ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ge=!1;ae.length!==x.cameras.length&&(x.cameras.length=0,ge=!0);for(let me=0;me<ae.length;me++){let Ne=ae[me],Ue=null;if(p!==null)Ue=p.getViewport(Ne);else{let tt=d.getViewSubImage(h,Ne);Ue=tt.viewport,me===0&&(e.setRenderTargetTextures(f,tt.colorTexture,h.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(f))}let we=q[me];we===void 0&&(we=new on,we.layers.enable(me),we.viewport=new Wt,q[me]=we),we.matrix.fromArray(Ne.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ne.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),me===0&&(x.matrix.copy(we.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ge===!0&&x.cameras.push(we)}}for(let ae=0;ae<w.length;ae++){let ge=b[ae],me=w[ae];ge!==null&&me!==void 0&&me.update(ge,X,l||o)}$&&$(B,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),g=null}let ee=new kx;ee.setAnimationLoop(Q),this.setAnimationLoop=function(B){$=B},this.dispose=function(){}}};function nO(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ux(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,w,b,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,w,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===dn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===dn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let w=e.get(f).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let b=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*b,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,w,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===dn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iO(n,e,t,i){let r={},s={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,b){let S=b.program;i.uniformBlockBinding(w,S)}function l(w,b){let S=r[w.id];S===void 0&&(g(w),S=u(w),r[w.id]=S,w.addEventListener("dispose",m));let I=b.program;i.updateUBOMapping(w,I);let T=e.render.frame;s[w.id]!==T&&(h(w),s[w.id]=T)}function u(w){let b=d();w.__bindingPointIndex=b;let S=n.createBuffer(),I=w.__size,T=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,I,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){let b=r[w.id],S=w.uniforms,I=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,C=S.length;T<C;T++){let q=Array.isArray(S[T])?S[T]:[S[T]];for(let x=0,E=q.length;x<E;x++){let V=q[x];if(p(V,T,x,I)===!0){let G=V.__offset,ie=Array.isArray(V.value)?V.value:[V.value],D=0;for(let k=0;k<ie.length;k++){let H=ie[k],j=v(H);typeof H=="number"||typeof H=="boolean"?(V.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,G+D,V.__data)):H.isMatrix3?(V.__data[0]=H.elements[0],V.__data[1]=H.elements[1],V.__data[2]=H.elements[2],V.__data[3]=0,V.__data[4]=H.elements[3],V.__data[5]=H.elements[4],V.__data[6]=H.elements[5],V.__data[7]=0,V.__data[8]=H.elements[6],V.__data[9]=H.elements[7],V.__data[10]=H.elements[8],V.__data[11]=0):(H.toArray(V.__data,D),D+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,b,S,I){let T=w.value,C=b+"_"+S;if(I[C]===void 0)return typeof T=="number"||typeof T=="boolean"?I[C]=T:I[C]=T.clone(),!0;{let q=I[C];if(typeof T=="number"||typeof T=="boolean"){if(q!==T)return I[C]=T,!0}else if(q.equals(T)===!1)return q.copy(T),!0}return!1}function g(w){let b=w.uniforms,S=0,I=16;for(let C=0,q=b.length;C<q;C++){let x=Array.isArray(b[C])?b[C]:[b[C]];for(let E=0,V=x.length;E<V;E++){let G=x[E],ie=Array.isArray(G.value)?G.value:[G.value];for(let D=0,k=ie.length;D<k;D++){let H=ie[D],j=v(H),z=S%I;z!==0&&I-z<j.boundary&&(S+=I-z),G.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=j.storage}}}let T=S%I;return T>0&&(S+=I-T),w.__size=S,w.__cache={},this}function v(w){let b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){let b=w.target;b.removeEventListener("dispose",m);let S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(let w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var va=class{constructor(e={}){let{canvas:t=dI(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let p=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,f=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;let b=this,S=!1,I=0,T=0,C=null,q=-1,x=null,E=new Wt,V=new Wt,G=null,ie=new rt(0),D=0,k=t.width,H=t.height,j=1,z=null,W=null,$=new Wt(0,0,k,H),Q=new Wt(0,0,k,H),ee=!1,B=new ru,X=!1,ae=!1,ge=null,me=new Yt,Ne=new dt,Ue=new F,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tt(){return C===null?j:1}let P=i;function Zt(_,R){for(let L=0;L<_.length;L++){let U=_[L],N=t.getContext(U,R);if(N!==null)return N}return null}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rp}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",A,!1),t.addEventListener("webglcontextcreationerror",re,!1),P===null){let R=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&R.shift(),P=Zt(R,_),P===null)throw Zt(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let _e,Ie,he,_t,Ve,M,y,O,J,Z,K,fe,oe,le,Ee,He,Y,at,Ze,Ae,ve,ue,ke,st;function Mt(){_e=new bP(P),Ie=new gP(P,_e,e),_e.init(Ie),ue=new eO(P,_e,Ie),he=new KN(P,_e,Ie),_t=new SP(P),Ve=new VN,M=new QN(P,_e,he,Ve,Ie,ue,_t),y=new yP(b),O=new MP(b),J=new NI(P,Ie),ke=new pP(P,_e,J,Ie),Z=new EP(P,J,_t,ke),K=new DP(P,Z,J,_t),Ze=new TP(P,Ie,M),He=new vP(Ve),fe=new BN(b,y,O,_e,Ie,ke,He),oe=new nO(b,Ve),le=new zN,Ee=new XN(_e,Ie),at=new fP(b,y,O,he,K,h,c),Y=new JN(b,K,Ie),st=new iO(P,_t,Ie,he),Ae=new mP(P,_e,_t,Ie),ve=new wP(P,_e,_t,Ie),_t.programs=fe.programs,b.capabilities=Ie,b.extensions=_e,b.properties=Ve,b.renderLists=le,b.shadowMap=Y,b.state=he,b.info=_t}Mt();let Ge=new Mp(b,P);this.xr=Ge,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let _=_e.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=_e.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(_){_!==void 0&&(j=_,this.setSize(k,H,!1))},this.getSize=function(_){return _.set(k,H)},this.setSize=function(_,R,L=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=_,H=R,t.width=Math.floor(_*j),t.height=Math.floor(R*j),L===!0&&(t.style.width=_+"px",t.style.height=R+"px"),this.setViewport(0,0,_,R)},this.getDrawingBufferSize=function(_){return _.set(k*j,H*j).floor()},this.setDrawingBufferSize=function(_,R,L){k=_,H=R,j=L,t.width=Math.floor(_*L),t.height=Math.floor(R*L),this.setViewport(0,0,_,R)},this.getCurrentViewport=function(_){return _.copy(E)},this.getViewport=function(_){return _.copy($)},this.setViewport=function(_,R,L,U){_.isVector4?$.set(_.x,_.y,_.z,_.w):$.set(_,R,L,U),he.viewport(E.copy($).multiplyScalar(j).floor())},this.getScissor=function(_){return _.copy(Q)},this.setScissor=function(_,R,L,U){_.isVector4?Q.set(_.x,_.y,_.z,_.w):Q.set(_,R,L,U),he.scissor(V.copy(Q).multiplyScalar(j).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(_){he.setScissorTest(ee=_)},this.setOpaqueSort=function(_){z=_},this.setTransparentSort=function(_){W=_},this.getClearColor=function(_){return _.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(_=!0,R=!0,L=!0){let U=0;if(_){let N=!1;if(C!==null){let ce=C.texture.format;N=ce===Rx||ce===Ix||ce===Dx}if(N){let ce=C.texture.type,pe=ce===Zi||ce===$i||ce===Pp||ce===Or||ce===Ax||ce===Tx,Me=at.getClearColor(),Ce=at.getClearAlpha(),ze=Me.r,Re=Me.g,Oe=Me.b;pe?(p[0]=ze,p[1]=Re,p[2]=Oe,p[3]=Ce,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=ze,g[1]=Re,g[2]=Oe,g[3]=Ce,P.clearBufferiv(P.COLOR,0,g))}else U|=P.COLOR_BUFFER_BIT}R&&(U|=P.DEPTH_BUFFER_BIT),L&&(U|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",A,!1),t.removeEventListener("webglcontextcreationerror",re,!1),le.dispose(),Ee.dispose(),Ve.dispose(),y.dispose(),O.dispose(),K.dispose(),ke.dispose(),st.dispose(),fe.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Jt),Ge.removeEventListener("sessionend",mt),ge&&(ge.dispose(),ge=null),Kt.stop()};function te(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function A(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let _=_t.autoReset,R=Y.enabled,L=Y.autoUpdate,U=Y.needsUpdate,N=Y.type;Mt(),_t.autoReset=_,Y.enabled=R,Y.autoUpdate=L,Y.needsUpdate=U,Y.type=N}function re(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function se(_){let R=_.target;R.removeEventListener("dispose",se),Se(R)}function Se(_){xe(_),Ve.remove(_)}function xe(_){let R=Ve.get(_).programs;R!==void 0&&(R.forEach(function(L){fe.releaseProgram(L)}),_.isShaderMaterial&&fe.releaseShaderCache(_))}this.renderBufferDirect=function(_,R,L,U,N,ce){R===null&&(R=we);let pe=N.isMesh&&N.matrixWorld.determinant()<0,Me=qx(_,R,L,U,N);he.setMaterial(U,pe);let Ce=L.index,ze=1;if(U.wireframe===!0){if(Ce=Z.getWireframeAttribute(L),Ce===void 0)return;ze=2}let Re=L.drawRange,Oe=L.attributes.position,wt=Re.start*ze,hn=(Re.start+Re.count)*ze;ce!==null&&(wt=Math.max(wt,ce.start*ze),hn=Math.min(hn,(ce.start+ce.count)*ze)),Ce!==null?(wt=Math.max(wt,0),hn=Math.min(hn,Ce.count)):Oe!=null&&(wt=Math.max(wt,0),hn=Math.min(hn,Oe.count));let Ot=hn-wt;if(Ot<0||Ot===1/0)return;ke.setup(N,U,Me,L,Ce);let oi,xt=Ae;if(Ce!==null&&(oi=J.get(Ce),xt=ve,xt.setIndex(oi)),N.isMesh)U.wireframe===!0?(he.setLineWidth(U.wireframeLinewidth*tt()),xt.setMode(P.LINES)):xt.setMode(P.TRIANGLES);else if(N.isLine){let We=U.linewidth;We===void 0&&(We=1),he.setLineWidth(We*tt()),N.isLineSegments?xt.setMode(P.LINES):N.isLineLoop?xt.setMode(P.LINE_LOOP):xt.setMode(P.LINE_STRIP)}else N.isPoints?xt.setMode(P.POINTS):N.isSprite&&xt.setMode(P.TRIANGLES);if(N.isBatchedMesh)xt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)xt.renderInstances(wt,Ot,N.count);else if(L.isInstancedBufferGeometry){let We=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,du=Math.min(L.instanceCount,We);xt.renderInstances(wt,Ot,du)}else xt.render(wt,Ot)};function ft(_,R,L){_.transparent===!0&&_.side===wi&&_.forceSinglePass===!1?(_.side=dn,_.needsUpdate=!0,Ma(_,R,L),_.side=Ji,_.needsUpdate=!0,Ma(_,R,L),_.side=wi):Ma(_,R,L)}this.compile=function(_,R,L=null){L===null&&(L=_),m=Ee.get(L),m.init(),w.push(m),L.traverseVisible(function(N){N.isLight&&N.layers.test(R.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),_!==L&&_.traverseVisible(function(N){N.isLight&&N.layers.test(R.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights(b._useLegacyLights);let U=new Set;return _.traverse(function(N){let ce=N.material;if(ce)if(Array.isArray(ce))for(let pe=0;pe<ce.length;pe++){let Me=ce[pe];ft(Me,L,N),U.add(Me)}else ft(ce,L,N),U.add(ce)}),w.pop(),m=null,U},this.compileAsync=function(_,R,L=null){let U=this.compile(_,R,L);return new Promise(N=>{function ce(){if(U.forEach(function(pe){Ve.get(pe).currentProgram.isReady()&&U.delete(pe)}),U.size===0){N(_);return}setTimeout(ce,10)}_e.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let pt=null;function Nt(_){pt&&pt(_)}function Jt(){Kt.stop()}function mt(){Kt.start()}let Kt=new kx;Kt.setAnimationLoop(Nt),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(_){pt=_,Ge.setAnimationLoop(_),_===null?Kt.stop():Kt.start()},Ge.addEventListener("sessionstart",Jt),Ge.addEventListener("sessionend",mt),this.render=function(_,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(R),R=Ge.getCamera()),_.isScene===!0&&_.onBeforeRender(b,_,R,C),m=Ee.get(_,w.length),m.init(),w.push(m),me.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),B.setFromProjectionMatrix(me),ae=this.localClippingEnabled,X=He.init(this.clippingPlanes,ae),v=le.get(_,f.length),v.init(),f.push(v),qn(_,R,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(z,W),this.info.render.frame++,X===!0&&He.beginShadows();let L=m.state.shadowsArray;if(Y.render(L,_,R),X===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),at.render(v,_),m.setupLights(b._useLegacyLights),R.isArrayCamera){let U=R.cameras;for(let N=0,ce=U.length;N<ce;N++){let pe=U[N];Up(v,_,pe,pe.viewport)}}else Up(v,_,R);C!==null&&(M.updateMultisampleRenderTarget(C),M.updateRenderTargetMipmap(C)),_.isScene===!0&&_.onAfterRender(b,_,R),ke.resetDefaultState(),q=-1,x=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function qn(_,R,L,U){if(_.visible===!1)return;if(_.layers.test(R.layers)){if(_.isGroup)L=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(R);else if(_.isLight)m.pushLight(_),_.castShadow&&m.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||B.intersectsSprite(_)){U&&Ue.setFromMatrixPosition(_.matrixWorld).applyMatrix4(me);let pe=K.update(_),Me=_.material;Me.visible&&v.push(_,pe,Me,L,Ue.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||B.intersectsObject(_))){let pe=K.update(_),Me=_.material;if(U&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ue.copy(_.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ue.copy(pe.boundingSphere.center)),Ue.applyMatrix4(_.matrixWorld).applyMatrix4(me)),Array.isArray(Me)){let Ce=pe.groups;for(let ze=0,Re=Ce.length;ze<Re;ze++){let Oe=Ce[ze],wt=Me[Oe.materialIndex];wt&&wt.visible&&v.push(_,pe,wt,L,Ue.z,Oe)}}else Me.visible&&v.push(_,pe,Me,L,Ue.z,null)}}let ce=_.children;for(let pe=0,Me=ce.length;pe<Me;pe++)qn(ce[pe],R,L,U)}function Up(_,R,L,U){let N=_.opaque,ce=_.transmissive,pe=_.transparent;m.setupLightsView(L),X===!0&&He.setGlobalState(b.clippingPlanes,L),ce.length>0&&$x(N,ce,R,L),U&&he.viewport(E.copy(U)),N.length>0&&xa(N,R,L),ce.length>0&&xa(ce,R,L),pe.length>0&&xa(pe,R,L),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function $x(_,R,L,U){if((L.isScene===!0?L.overrideMaterial:null)!==null)return;let ce=Ie.isWebGL2;ge===null&&(ge=new Ti(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?ma:Zi,minFilter:pa,samples:ce?4:0})),b.getDrawingBufferSize(Ne),ce?ge.setSize(Ne.x,Ne.y):ge.setSize(rp(Ne.x),rp(Ne.y));let pe=b.getRenderTarget();b.setRenderTarget(ge),b.getClearColor(ie),D=b.getClearAlpha(),D<1&&b.setClearColor(16777215,.5),b.clear();let Me=b.toneMapping;b.toneMapping=Yi,xa(_,L,U),M.updateMultisampleRenderTarget(ge),M.updateRenderTargetMipmap(ge);let Ce=!1;for(let ze=0,Re=R.length;ze<Re;ze++){let Oe=R[ze],wt=Oe.object,hn=Oe.geometry,Ot=Oe.material,oi=Oe.group;if(Ot.side===wi&&wt.layers.test(U.layers)){let xt=Ot.side;Ot.side=dn,Ot.needsUpdate=!0,kp(wt,L,U,hn,Ot,oi),Ot.side=xt,Ot.needsUpdate=!0,Ce=!0}}Ce===!0&&(M.updateMultisampleRenderTarget(ge),M.updateRenderTargetMipmap(ge)),b.setRenderTarget(pe),b.setClearColor(ie,D),b.toneMapping=Me}function xa(_,R,L){let U=R.isScene===!0?R.overrideMaterial:null;for(let N=0,ce=_.length;N<ce;N++){let pe=_[N],Me=pe.object,Ce=pe.geometry,ze=U===null?pe.material:U,Re=pe.group;Me.layers.test(L.layers)&&kp(Me,R,L,Ce,ze,Re)}}function kp(_,R,L,U,N,ce){_.onBeforeRender(b,R,L,U,N,ce),_.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),N.onBeforeRender(b,R,L,U,_,ce),N.transparent===!0&&N.side===wi&&N.forceSinglePass===!1?(N.side=dn,N.needsUpdate=!0,b.renderBufferDirect(L,R,U,N,_,ce),N.side=Ji,N.needsUpdate=!0,b.renderBufferDirect(L,R,U,N,_,ce),N.side=wi):b.renderBufferDirect(L,R,U,N,_,ce),_.onAfterRender(b,R,L,U,N,ce)}function Ma(_,R,L){R.isScene!==!0&&(R=we);let U=Ve.get(_),N=m.state.lights,ce=m.state.shadowsArray,pe=N.state.version,Me=fe.getParameters(_,N.state,ce,R,L),Ce=fe.getProgramCacheKey(Me),ze=U.programs;U.environment=_.isMeshStandardMaterial?R.environment:null,U.fog=R.fog,U.envMap=(_.isMeshStandardMaterial?O:y).get(_.envMap||U.environment),ze===void 0&&(_.addEventListener("dispose",se),ze=new Map,U.programs=ze);let Re=ze.get(Ce);if(Re!==void 0){if(U.currentProgram===Re&&U.lightsStateVersion===pe)return Vp(_,Me),Re}else Me.uniforms=fe.getUniforms(_),_.onBuild(L,Me,b),_.onBeforeCompile(Me,b),Re=fe.acquireProgram(Me,Ce),ze.set(Ce,Re),U.uniforms=Me.uniforms;let Oe=U.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Oe.clippingPlanes=He.uniform),Vp(_,Me),U.needsLights=Yx(_),U.lightsStateVersion=pe,U.needsLights&&(Oe.ambientLightColor.value=N.state.ambient,Oe.lightProbe.value=N.state.probe,Oe.directionalLights.value=N.state.directional,Oe.directionalLightShadows.value=N.state.directionalShadow,Oe.spotLights.value=N.state.spot,Oe.spotLightShadows.value=N.state.spotShadow,Oe.rectAreaLights.value=N.state.rectArea,Oe.ltc_1.value=N.state.rectAreaLTC1,Oe.ltc_2.value=N.state.rectAreaLTC2,Oe.pointLights.value=N.state.point,Oe.pointLightShadows.value=N.state.pointShadow,Oe.hemisphereLights.value=N.state.hemi,Oe.directionalShadowMap.value=N.state.directionalShadowMap,Oe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Oe.spotShadowMap.value=N.state.spotShadowMap,Oe.spotLightMatrix.value=N.state.spotLightMatrix,Oe.spotLightMap.value=N.state.spotLightMap,Oe.pointShadowMap.value=N.state.pointShadowMap,Oe.pointShadowMatrix.value=N.state.pointShadowMatrix),U.currentProgram=Re,U.uniformsList=null,Re}function Bp(_){if(_.uniformsList===null){let R=_.currentProgram.getUniforms();_.uniformsList=Ks.seqWithValue(R.seq,_.uniforms)}return _.uniformsList}function Vp(_,R){let L=Ve.get(_);L.outputColorSpace=R.outputColorSpace,L.batching=R.batching,L.instancing=R.instancing,L.instancingColor=R.instancingColor,L.skinning=R.skinning,L.morphTargets=R.morphTargets,L.morphNormals=R.morphNormals,L.morphColors=R.morphColors,L.morphTargetsCount=R.morphTargetsCount,L.numClippingPlanes=R.numClippingPlanes,L.numIntersection=R.numClipIntersection,L.vertexAlphas=R.vertexAlphas,L.vertexTangents=R.vertexTangents,L.toneMapping=R.toneMapping}function qx(_,R,L,U,N){R.isScene!==!0&&(R=we),M.resetTextureUnits();let ce=R.fog,pe=U.isMeshStandardMaterial?R.environment:null,Me=C===null?b.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ai,Ce=(U.isMeshStandardMaterial?O:y).get(U.envMap||pe),ze=U.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,Re=!!L.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Oe=!!L.morphAttributes.position,wt=!!L.morphAttributes.normal,hn=!!L.morphAttributes.color,Ot=Yi;U.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ot=b.toneMapping);let oi=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,xt=oi!==void 0?oi.length:0,We=Ve.get(U),du=m.state.lights;if(X===!0&&(ae===!0||_!==x)){let gn=_===x&&U.id===q;He.setState(U,_,gn)}let bt=!1;U.version===We.__version?(We.needsLights&&We.lightsStateVersion!==du.state.version||We.outputColorSpace!==Me||N.isBatchedMesh&&We.batching===!1||!N.isBatchedMesh&&We.batching===!0||N.isInstancedMesh&&We.instancing===!1||!N.isInstancedMesh&&We.instancing===!0||N.isSkinnedMesh&&We.skinning===!1||!N.isSkinnedMesh&&We.skinning===!0||N.isInstancedMesh&&We.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&We.instancingColor===!1&&N.instanceColor!==null||We.envMap!==Ce||U.fog===!0&&We.fog!==ce||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==He.numPlanes||We.numIntersection!==He.numIntersection)||We.vertexAlphas!==ze||We.vertexTangents!==Re||We.morphTargets!==Oe||We.morphNormals!==wt||We.morphColors!==hn||We.toneMapping!==Ot||Ie.isWebGL2===!0&&We.morphTargetsCount!==xt)&&(bt=!0):(bt=!0,We.__version=U.version);let er=We.currentProgram;bt===!0&&(er=Ma(U,R,N));let Hp=!1,lo=!1,hu=!1,jt=er.getUniforms(),tr=We.uniforms;if(he.useProgram(er.program)&&(Hp=!0,lo=!0,hu=!0),U.id!==q&&(q=U.id,lo=!0),Hp||x!==_){jt.setValue(P,"projectionMatrix",_.projectionMatrix),jt.setValue(P,"viewMatrix",_.matrixWorldInverse);let gn=jt.map.cameraPosition;gn!==void 0&&gn.setValue(P,Ue.setFromMatrixPosition(_.matrixWorld)),Ie.logarithmicDepthBuffer&&jt.setValue(P,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&jt.setValue(P,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,lo=!0,hu=!0)}if(N.isSkinnedMesh){jt.setOptional(P,N,"bindMatrix"),jt.setOptional(P,N,"bindMatrixInverse");let gn=N.skeleton;gn&&(Ie.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),jt.setValue(P,"boneTexture",gn.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(jt.setOptional(P,N,"batchingTexture"),jt.setValue(P,"batchingTexture",N._matricesTexture,M));let fu=L.morphAttributes;if((fu.position!==void 0||fu.normal!==void 0||fu.color!==void 0&&Ie.isWebGL2===!0)&&Ze.update(N,L,er),(lo||We.receiveShadow!==N.receiveShadow)&&(We.receiveShadow=N.receiveShadow,jt.setValue(P,"receiveShadow",N.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(tr.envMap.value=Ce,tr.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),lo&&(jt.setValue(P,"toneMappingExposure",b.toneMappingExposure),We.needsLights&&Xx(tr,hu),ce&&U.fog===!0&&oe.refreshFogUniforms(tr,ce),oe.refreshMaterialUniforms(tr,U,j,H,ge),Ks.upload(P,Bp(We),tr,M)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Ks.upload(P,Bp(We),tr,M),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&jt.setValue(P,"center",N.center),jt.setValue(P,"modelViewMatrix",N.modelViewMatrix),jt.setValue(P,"normalMatrix",N.normalMatrix),jt.setValue(P,"modelMatrix",N.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let gn=U.uniformsGroups;for(let pu=0,Zx=gn.length;pu<Zx;pu++)if(Ie.isWebGL2){let zp=gn[pu];st.update(zp,er),st.bind(zp,er)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return er}function Xx(_,R){_.ambientLightColor.needsUpdate=R,_.lightProbe.needsUpdate=R,_.directionalLights.needsUpdate=R,_.directionalLightShadows.needsUpdate=R,_.pointLights.needsUpdate=R,_.pointLightShadows.needsUpdate=R,_.spotLights.needsUpdate=R,_.spotLightShadows.needsUpdate=R,_.rectAreaLights.needsUpdate=R,_.hemisphereLights.needsUpdate=R}function Yx(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(_,R,L){Ve.get(_.texture).__webglTexture=R,Ve.get(_.depthTexture).__webglTexture=L;let U=Ve.get(_);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=L===void 0,U.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(_,R){let L=Ve.get(_);L.__webglFramebuffer=R,L.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(_,R=0,L=0){C=_,I=R,T=L;let U=!0,N=null,ce=!1,pe=!1;if(_){let Ce=Ve.get(_);Ce.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(P.FRAMEBUFFER,null),U=!1):Ce.__webglFramebuffer===void 0?M.setupRenderTarget(_):Ce.__hasExternalTextures&&M.rebindTextures(_,Ve.get(_.texture).__webglTexture,Ve.get(_.depthTexture).__webglTexture);let ze=_.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(pe=!0);let Re=Ve.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Re[R])?N=Re[R][L]:N=Re[R],ce=!0):Ie.isWebGL2&&_.samples>0&&M.useMultisampledRTT(_)===!1?N=Ve.get(_).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[L]:N=Re,E.copy(_.viewport),V.copy(_.scissor),G=_.scissorTest}else E.copy($).multiplyScalar(j).floor(),V.copy(Q).multiplyScalar(j).floor(),G=ee;if(he.bindFramebuffer(P.FRAMEBUFFER,N)&&Ie.drawBuffers&&U&&he.drawBuffers(_,N),he.viewport(E),he.scissor(V),he.setScissorTest(G),ce){let Ce=Ve.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+R,Ce.__webglTexture,L)}else if(pe){let Ce=Ve.get(_.texture),ze=R||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ce.__webglTexture,L||0,ze)}q=-1},this.readRenderTargetPixels=function(_,R,L,U,N,ce,pe){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ve.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){he.bindFramebuffer(P.FRAMEBUFFER,Me);try{let Ce=_.texture,ze=Ce.format,Re=Ce.type;if(ze!==jn&&ue.convert(ze)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Oe=Re===ma&&(_e.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Re!==Zi&&ue.convert(Re)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===qi&&(Ie.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=_.width-U&&L>=0&&L<=_.height-N&&P.readPixels(R,L,U,N,ue.convert(ze),ue.convert(Re),ce)}finally{let Ce=C!==null?Ve.get(C).__webglFramebuffer:null;he.bindFramebuffer(P.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(_,R,L=0){let U=Math.pow(2,-L),N=Math.floor(R.image.width*U),ce=Math.floor(R.image.height*U);M.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,L,0,0,_.x,_.y,N,ce),he.unbindTexture()},this.copyTextureToTexture=function(_,R,L,U=0){let N=R.image.width,ce=R.image.height,pe=ue.convert(L.format),Me=ue.convert(L.type);M.setTexture2D(L,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment),R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,_.x,_.y,N,ce,pe,Me,R.image.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,_.x,_.y,R.mipmaps[0].width,R.mipmaps[0].height,pe,R.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,U,_.x,_.y,pe,Me,R.image),U===0&&L.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(_,R,L,U,N=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ce=_.max.x-_.min.x+1,pe=_.max.y-_.min.y+1,Me=_.max.z-_.min.z+1,Ce=ue.convert(U.format),ze=ue.convert(U.type),Re;if(U.isData3DTexture)M.setTexture3D(U,0),Re=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)M.setTexture2DArray(U,0),Re=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);let Oe=P.getParameter(P.UNPACK_ROW_LENGTH),wt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),hn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ot=P.getParameter(P.UNPACK_SKIP_ROWS),oi=P.getParameter(P.UNPACK_SKIP_IMAGES),xt=L.isCompressedTexture?L.mipmaps[N]:L.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,xt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,_.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,_.min.z),L.isDataTexture||L.isData3DTexture?P.texSubImage3D(Re,N,R.x,R.y,R.z,ce,pe,Me,Ce,ze,xt.data):L.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Re,N,R.x,R.y,R.z,ce,pe,Me,Ce,xt.data)):P.texSubImage3D(Re,N,R.x,R.y,R.z,ce,pe,Me,Ce,ze,xt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Oe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,wt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,hn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ot),P.pixelStorei(P.UNPACK_SKIP_IMAGES,oi),N===0&&U.generateMipmaps&&P.generateMipmap(Re),he.unbindTexture()},this.initTexture=function(_){_.isCubeTexture?M.setTextureCube(_,0):_.isData3DTexture?M.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?M.setTexture2DArray(_,0):M.setTexture2D(_,0),he.unbindTexture()},this.resetState=function(){I=0,T=0,C=null,he.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Np?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===lu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Gt?Fr:Nx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Fr?Gt:Ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},bp=class extends va{};bp.prototype.isWebGL1Renderer=!0;var au=class extends ao{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};function Hl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function rO(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var so=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ep=class extends so{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:O0,endingEnd:O0}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case L0:s=e,a=2*t-i;break;case F0:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case L0:o=e,c=2*i-t;break;case F0:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,f=-h*m+2*h*v-h*g,w=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,b=(-1-p)*m+(1.5+p)*v+.5*g,S=p*m-p*v;for(let I=0;I!==a;++I)s[I]=f*o[u+I]+w*o[l+I]+b*o[c+I]+S*o[d+I];return s}},wp=class extends so{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},Sp=class extends so{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},$n=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hl(t,this.TimeBufferType),this.values=Hl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Hl(e.times,Array),values:Hl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Sp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ep(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gl:t=this.InterpolantFactoryMethodDiscrete;break;case Wl:t=this.InterpolantFactoryMethodLinear;break;case Sf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gl;case this.InterpolantFactoryMethodLinear:return Wl;case this.InterpolantFactoryMethodSmooth:return Sf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&rO(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Sf,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,h=d-i,p=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[h+g]||v!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Wl;var Vr=class extends $n{};Vr.prototype.ValueTypeName="bool";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=Gl;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Cp=class extends $n{};Cp.prototype.ValueTypeName="color";var Ap=class extends $n{};Ap.prototype.ValueTypeName="number";var Tp=class extends so{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Qi.slerpFlat(s,0,o,l-a,o,l,c);return s}},ya=class extends $n{InterpolantFactoryMethodLinear(e){return new Tp(this.times,this.values,this.getValueSize(),e)}};ya.prototype.ValueTypeName="quaternion";ya.prototype.DefaultInterpolation=Wl;ya.prototype.InterpolantFactoryMethodSmooth=void 0;var Hr=class extends $n{};Hr.prototype.ValueTypeName="string";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=Gl;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Dp=class extends $n{};Dp.prototype.ValueTypeName="vector";var Lp="\\[\\]\\.:\\/",sO=new RegExp("["+Lp+"]","g"),Fp="[^"+Lp+"]",oO="[^"+Lp.replace("\\.","")+"]",aO=/((?:WC+[\/:])*)/.source.replace("WC",Fp),cO=/(WCOD+)?/.source.replace("WCOD",oO),lO=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fp),uO=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fp),dO=new RegExp("^"+aO+cO+lO+uO+"$"),hO=["material","materials","bones","map"],Ip=class{constructor(e,t,i){let r=i||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},St=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sO,"")}static parseTrackName(t){let i=dO.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);hO.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Ip,n})();St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wV=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rp);function pO(n,e){if(n&1){let t=Jv();ot(0,"div",5),xr("click",function(){let s=Pg(t).$implicit,o=Qv();return Ng(o.navigateToRoute(s))}),kt(1),lt()}if(n&2){let t=e.$implicit;kn(1),kc(" ",t.displayName," ")}}var Wx=(()=>{let e=class e{constructor(i){this.router=i,this.routes=[{displayName:"About me",url:"/"},{displayName:"Resume",url:"/asdf"},{displayName:"GitHub",url:"https://www.github.com/nathanejbrown",external:!0},{displayName:"Contact",url:"/contact"}]}navigateToRoute(i){i.external?window.open(i.url,"_blank"):this.router.navigate([i.url])}};e.\u0275fac=function(r){return new(r||e)(ct(ll))},e.\u0275cmp=Ut({type:e,selectors:[["app-left-nav"]],standalone:!0,features:[Bt],decls:6,vars:1,consts:[[1,"nav-primary"],[1,"nav-header"],[1,"initial"],[1,"nav-items"],["class","nav-item",3,"click",4,"ngFor","ngForOf"],[1,"nav-item",3,"click"]],template:function(r,s){r&1&&(ot(0,"nav",0)(1,"div",1)(2,"p",2),kt(3," N "),lt()(),ot(4,"div",3),Zv(5,pO,2,1,"div",4),lt()()),r&2&&(kn(5),mi("ngForOf",s.routes))},dependencies:[Vo,vy],styles:[".nav-primary[_ngcontent-%COMP%]{position:fixed;width:10%;height:100%;background-color:#222}.nav-items[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;margin-top:9.5rem}.nav-item[_ngcontent-%COMP%]{height:4rem;background-color:#020202;display:flex;justify-content:center;align-items:center;color:#fff;border-bottom:1px solid grey}.nav-item[_ngcontent-%COMP%]:first-child{border-top:1px solid grey}.nav-item[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#382f3c}.nav-header[_ngcontent-%COMP%]{display:flex;justify-content:center;height:40px}.initial[_ngcontent-%COMP%]{margin:1.5rem;font-weight:900;font-size:120px;color:#382f3c;text-shadow:1px 1px 1px #726890,1px 2px 1px #726890,1px 3px 1px #726890,1px 4px 1px #726890,1px 5px 1px #726890,1px 6px 1px #726890,1px 7px 1px #726890,1px 8px 1px #726890,1px 9px 1px #726890,1px 10px 1px #726890,1px 18px 6px rgba(16,16,16,.4),1px 22px 10px rgba(16,16,16,.2),1px 25px 35px rgba(16,16,16,.2),1px 30px 60px rgba(16,16,16,.4)}"]});let n=e;return n})();var jx=(()=>{let e=class e{constructor(){this.scene=new au,this.camera=new on(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new va,this.geometry=new Br(1,1,1),this.material=new io({color:65280}),this.cube=new In(this.geometry,this.material)}ngOnInit(){}animate(){requestAnimationFrame(this.animate),this.cube.rotation.x+=.25,this.cube.rotation.y+=.4,this.renderer.render(this.scene,this.camera)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Ut({type:e,selectors:[["app-root"]],standalone:!0,features:[Bt],decls:4,vars:0,consts:[[1,"container"],[1,"content"]],template:function(r,s){r&1&&(ot(0,"div",0),En(1,"app-left-nav"),ot(2,"div",1),En(3,"router-outlet"),lt()())},dependencies:[Vo,lf,Wx],styles:[".container[_ngcontent-%COMP%]{display:flex}.content[_ngcontent-%COMP%]{margin-top:8.5rem;margin-left:12rem;padding:1rem;background-color:#020202;height:100vh}"]});let n=e;return n})();Cy(jx,e0).catch(n=>console.error(n));
