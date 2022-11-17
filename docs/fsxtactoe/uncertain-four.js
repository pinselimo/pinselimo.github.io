(()=>{var ra=function(n){return function(r){for(var t=n.length,a=r.length,e=new Array(t*a),o=0,u=0;u<t;u++)for(var d=n[u],_=0;_<a;_++)e[o++]=d(r[_]);return e}};var Vt={compose:function(n){return function(r){return function(t){return n(r(t))}}}};var J=function(n){return n.identity},V={identity:function(n){return n},Semigroupoid0:function(){return Vt}};var Fn=!0;var gn=function(n){return function(r){return function(t){return n(t)(r)}}},on=function(n){return function(r){return n}};var Cn=function(n){return function(r){return n(r)}};var ta=function(n){return function(r){for(var t=r.length,a=new Array(t),e=0;e<t;e++)a[e]=n(r[e]);return a}};var l=function(n){return n.map},Gt=function(n){var r=l(n);return function(t){return function(a){return r(a)(t)}}},Z=function(n){return l(n)(on(void 0))};var fn={map:ta};var bu=J(V);var Vr={apply:ra,Functor0:function(){return fn}},z=function(n){return n.apply};var dr=function(n){var r=z(n),t=l(n.Functor0());return function(a){return function(e){return r(t(on(bu))(a))(e)}}};var U=function(n){return n.pure};var Gn=function(n){var r=U(n);return function(t){return function(a){if(t)return a;if(!t)return r(void 0);throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): "+[t.constructor.name,a.constructor.name])}}},xr=function(n){var r=z(n.Apply0()),t=U(n);return function(a){return function(e){return r(t(a))(e)}}};var oa=function(n){return function(r){for(var t=[],a=0,e=n.length;a<e;a++)Array.prototype.push.apply(t,r(n[a]));return t}};var jr={bind:oa,Apply0:function(){return Vr}},nn=function(n){return n.bind},Ir=function(n){return gn(nn(n))};var vr=function(n){return function(r){for(var t=n>r?-1:1,a=new Array(t*(r-n)+1),e=n,o=0;e!==r;)a[o++]=e,e+=t;return a[o]=e,a}},Tu=function(n){return function(r){if(n<1)return[];var t=new Array(n);return t.fill(r)}},Eu=function(n){return function(r){for(var t=[],a=0,e=0;e<n;e++)t[a++]=r;return t}},Rn=typeof Array.prototype.fill=="function"?Tu:Eu,Fu=function(){function n(e,o){this.head=e,this.tail=o}var r={};function t(e){return function(o){return new n(e,o)}}function a(e){for(var o=[],u=0,d=e;d!==r;)o[u++]=d.head,d=d.tail;return o}return function(e){return function(o){return a(e(t)(r)(o))}}}(),dn=function(n){return n.length};var ua=function(n){return function(r){return function(t){return function(a){return a<0||a>=t.length?r:n(t[a])}}}};var Hn=function(n){if(n.length<=1e4)return Array.prototype.concat.apply([],n);for(var r=[],t=0,a=n.length;t<a;t++)for(var e=n[t],o=0,u=e.length;o<u;o++)r.push(e[o]);return r},Q=function(n){return function(r){return r.filter(n)}};var ia=function(){function n(r,t,a,e,o,u){var d,_,S,E,O,B,X;for(d=o+(u-o>>1),d-o>1&&n(r,t,e,a,o,d),u-d>1&&n(r,t,e,a,d,u),_=o,S=d,E=o;_<d&&S<u;)O=e[_],B=e[S],X=t(r(O)(B)),X>0?(a[E++]=B,++S):(a[E++]=O,++_);for(;_<d;)a[E++]=e[_++];for(;S<u;)a[E++]=e[S++]}return function(r){return function(t){return function(a){var e;return a.length<2?a:(e=a.slice(0),n(r,t,e,a.slice(0),0,a.length),e)}}}}(),Sn=function(n){return function(r){return function(t){return t.slice(n,r)}}},cn=function(n){return function(r){return function(t){for(var a=r.length<t.length?r.length:t.length,e=new Array(a),o=0;o<a;o++)e[o]=n(r[o])(t[o]);return e}}};var fa=function(n){return function(r){return n.length===0?r:r.length===0?n:n.concat(r)}};var In={append:fa};var A=function(n){return n.append};var zr=function(n){var r=nn(n.Bind1()),t=U(n.Applicative0());return function(a){return function(e){return r(a)(function(o){return r(e)(function(u){return t(o(u))})})}}};var wu=String.fromCharCode(65535),Nu=String.fromCharCode(0),Lu=Number.POSITIVE_INFINITY,Wu=Number.NEGATIVE_INFINITY;var Pu=function(n){return function(r){return function(t){return function(a){return function(e){return a<e?n:a===e?r:t}}}}};var ma=Pu;var pa=function(n){return function(r){return n===r}};var da=pa;var va=pa,_a=function(n){return function(r){return function(t){if(r.length!==t.length)return!1;for(var a=0;a<r.length;a++)if(!n(r[a])(t[a]))return!1;return!0}}};var Kn={eq:va};var Kt={eq:da};var F=function(n){return n.eq};var Dr=function(n){return{eq:_a(F(n))}};var b=function(){function n(){}return n.value=new n,n}(),y=function(){function n(){}return n.value=new n,n}(),L=function(){function n(){}return n.value=new n,n}();var wr={eq:function(n){return function(r){return n instanceof b&&r instanceof b||n instanceof y&&r instanceof y||n instanceof L&&r instanceof L}}};var sn=function(){return{compare:ma(b.value)(L.value)(y.value),Eq0:function(){return Kt}}}();var I=function(n){return n.compare};var Yt=function(n){var r=I(n);return function(t){return function(a){return function(e){return r(t(a))(t(e))}}}};var qn=function(n){return n.top};var Qr={top:2147483647,bottom:-2147483648,Ord0:function(){return sn}};var nr=function(n){return n.bottom};var Da=function(n){return function(r){for(var t=[],a=0,e=r.length;a<e;a++)t[a]=n(r[a]);return"["+t.join(",")+"]"}};var M=function(n){return n.show},Kr=function(n){return{show:Da(M(n))}};var ni=J(V),m=function(){function n(){}return n.value=new n,n}(),i=function(){function n(r){this.value0=r}return n.create=function(r){return new n(r)},n}();var tr=function(n){return function(r){return function(t){if(t instanceof m)return n;if(t instanceof i)return r(t.value0);throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): "+[n.constructor.name,r.constructor.name,t.constructor.name])}}};var mn={map:function(n){return function(r){return r instanceof i?new i(n(r.value0)):m.value}}},ri=l(mn);var K=function(n){return tr(n)(ni)},Bn=function(){return function(n){if(n instanceof i)return n.value0;throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): "+[n.constructor.name])}};var Lr=function(n){var r=F(n);return{eq:function(t){return function(a){return t instanceof m&&a instanceof m?!0:t instanceof i&&a instanceof i?r(t.value0)(a.value0):!1}}}};var Yr={apply:function(n){return function(r){if(n instanceof i)return ri(n.value0)(r);if(n instanceof m)return m.value;throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): "+[n.constructor.name,r.constructor.name])}},Functor0:function(){return mn}};var er={bind:function(n){return function(r){if(n instanceof i)return r(n.value0);if(n instanceof m)return m.value;throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): "+[n.constructor.name,r.constructor.name])}},Apply0:function(){return Yr}};var pn=function(n){return n.mempty};var ba=function(n){return function(){return n}},ya=function(n){return function(r){return function(){return r(n())()}}};var ha=function(n,r,t){var a=0,e;return function(o){if(a===2)return e;if(a===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+r+", line "+o+")",r,o);return a=1,e=t(),a=2,e}},Ta={Applicative0:function(){return ar},Bind1:function(){return nt}},nt={bind:ya,Apply0:function(){return ne(0)}},ar={pure:ba,Apply0:function(){return ne(0)}},Ea=ha("functorEffect","Effect",function(){return{map:xr(ar)}}),ne=ha("applyEffect","Effect",function(){return{apply:zr(Ta),Functor0:function(){return Ea(0)}}}),C=Ea(20),Fa=ne(23);var xa=function(n){return function(r){return function(){return n(r())}}},Ia=function(n){return function(){return n}},wa=function(n){return function(r){return function(){return r(n())()}}};function gr(n){return function(){return{value:n}}}var or=function(n){return function(){return n.value}},Na=function(n){return function(r){return function(){var t=n(r.value);return r.value=t.state,t.value}}},Ar=function(n){return function(r){return function(){return r.value=n}}};var yi=function(n,r,t){var a=0,e;return function(o){if(a===2)return e;if(a===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+r+", line "+o+")",r,o);return a=1,e=t(),a=2,e}},hi=Na,La=function(n){return hi(function(r){var t=n(r);return{state:t,value:t}})},br={map:xa};var Ti={Applicative0:function(){return te},Bind1:function(){return Wa}},Wa={bind:wa,Apply0:function(){return Aa(0)}},te={pure:Ia,Apply0:function(){return Aa(0)}},Aa=yi("applyST","Control.Monad.ST.Internal",function(){return{apply:zr(Ti),Functor0:function(){return br}}});function rt(){return[]}var Pa=function(n){return function(r){return function(t){return function(a){return function(){return t>=0&&t<a.length?n(a[t]):r}}}}},Pr=function(n){return function(r){return function(t){return function(){var a=n>=0&&n<t.length;return a&&(t[n]=r),a}}}};var ae=function(n){return function(r){return function(){return r.push.apply(r,n)}}};var yr=function(n){return function(){return n}};function Ei(n){return function(){return n.slice()}}var oe=Ei,Fi=function(){function n(r,t,a,e,o,u){var d,_,S,E,O,B,X;for(d=o+(u-o>>1),d-o>1&&n(r,t,e,a,o,d),u-d>1&&n(r,t,e,a,d,u),_=o,S=d,E=o;_<d&&S<u;)O=e[_],B=e[S],X=t(r(O)(B)),X>0?(a[E++]=B,++S):(a[E++]=O,++_);for(;_<d;)a[E++]=e[_++];for(;S<u;)a[E++]=e[S++]}return function(r){return function(t){return function(a){return function(){return a.length<2||n(r,t,a,a.slice(0),0,a.length),a}}}}}();var ue=function(n){return function(r){return function(){var a=oe(r)();return n(a)(),yr(a)()}}};var Rr=function(n){return ae([n])};var Ii=function(){return Pa(i.create)(m.value)}(),Ra=function(n){return function(r){return function(t){return function(){var e=Ii(n)(t)();if(e instanceof i)return Pr(n)(r(e.value0))(t)();if(e instanceof m)return!1;throw new Error("Failed pattern match at Data.Array.ST (line 193, column 3 - line 195, column 26): "+[e.constructor.name])}}}};var Sa=function(n){return function(r){return n&&r}},Ua=function(n){return function(r){return n||r}},$a=function(n){return!n};var tt=function(n){return n.not};var et=function(n){return n.ff};var Hr=function(n){return n.disj},ur={ff:!1,tt:!0,implies:function(n){return function(r){return Hr(ur)(tt(ur)(n))(r)}},conj:Sa,disj:Ua,not:$a};var ce=l(br),qa=tt(ur),ie=Z(br),Ni=function(){function n(r,t){this.value0=r,this.value1=t}return n.create=function(r){return function(t){return new n(r,t)}},n}(),Li=function(n){return function(){var t=or(n.value1)();return n.value0(t)}},Oa=function(n){return function(){var t=or(n.value1)();return La(function(a){return a+1|0})(n.value1)(),n.value0(t)}},Ba=function(n){return function(r){return function(t){return function(){for(var e=gr(!1)();ce(qa)(or(e))();)(function(){var u=Li(r)();return u instanceof i&&n(u.value0)?(Rr(u.value0)(t)(),ie(Oa(r))()):ie(Ar(!0)(e))()})();return{}}}}};var ka=function(n){return ce(Ni.create(n))(gr(0))},Ja=function(n){return function(r){return function(){for(var a=gr(!1)();ce(qa)(or(a))();)(function(){var o=Oa(n)();if(o instanceof i)return r(o.value0)();if(o instanceof m)return ie(Ar(!0)(a))();throw new Error("Failed pattern match at Data.Array.ST.Iterator (line 42, column 5 - line 44, column 47): "+[o.constructor.name])})();return{}}}};var Va=function(n){return function(r){return function(t){for(var a=r,e=t.length,o=e-1;o>=0;o--)a=n(t[o])(a);return a}}},ja=function(n){return function(r){return function(t){for(var a=r,e=t.length,o=0;o<e;o++)a=n(a)(t[o]);return a}}};var rn=function(){function n(r,t){this.value0=r,this.value1=t}return n.create=function(r){return function(t){return new n(r,t)}},n}(),le=function(n){return function(r){return n(r.value0)(r.value1)}};var qi=function(n){var r=F(n);return function(t){var a=F(t);return{eq:function(e){return function(o){return r(e.value0)(o.value0)&&a(e.value1)(o.value1)}}}}},se=function(n){var r=I(n),t=qi(n.Eq0());return function(a){var e=I(a),o=t(a.Eq0());return{compare:function(u){return function(d){var _=r(u.value0)(d.value0);return _ instanceof b?b.value:_ instanceof y?y.value:e(u.value1)(d.value1)}},Eq0:function(){return o}}}};var ct=function(n){return n};var Qi=function(n){var r=Hr(n);return{append:function(t){return function(a){return r(t)(a)}}}};var ve=function(n){var r=Qi(n);return{mempty:et(n),Semigroup0:function(){return r}}};var f=function(n){return n};var _e=function(){return f};var Ki=_e();var De=function(){return function(){return function(){return function(){return function(n){return Ki}}}}};var rf=De()()()(),kn=function(n){return n.foldr};var Ur=function(n){var r=dr(n.Apply0()),t=U(n);return function(a){var e=kn(a);return function(o){return e(function(u){return r(o(u))})(t(void 0))}}};var Za=function(n){var r=kn(n);return function(t){var a=A(t.Semigroup0()),e=pn(t);return function(o){return r(function(u){return function(d){return a(o(u))(d)}})(e)}}},_n={foldr:Va,foldl:ja,foldMap:function(n){return Za(_n)(n)}};var $r=function(n){return n.foldMap};var be=function(n){var r=$r(n);return function(t){return rf(ct)(r(ve(t)))}};var no=function(){function n(e){return[e]}function r(e){return function(o){return[e,o]}}function t(e){return function(o){return function(u){return[e,o,u]}}}function a(e){return function(o){return e.concat(o)}}return function(e){return function(o){return function(u){return function(d){return function(_){function S(E,O){switch(O-E){case 0:return u([]);case 1:return o(n)(d(_[E]));case 2:return e(o(r)(d(_[E])))(d(_[E+1]));case 3:return e(e(o(t)(d(_[E])))(d(_[E+1])))(d(_[E+2]));default:var B=E+Math.floor((O-E)/4)*2;return e(o(a)(S(E,B)))(S(B,O))}}return S(0,_.length)}}}}}}();var Of=J(V),Er=function(n){return n.traverse};var Bf=function(n){var r=Er(n);return function(t){return r(t)(Of)}},Fr={traverse:function(n){var r=n.Apply0();return no(z(r))(l(r.Functor0()))(U(n))},sequence:function(n){return Bf(Fr)(n)},Functor0:function(){return fn},Foldable1:function(){return _n}};var vo=Ur(te);var uc=Z(br);var ic=F(wr);var fc=A(In);var gt=function(){return cn(rn.create)}(),Ie=function(n){var r=vo(n);return function(t){return function(a){return ue(function(e){return r(function(o){return Pr(o.value0)(o.value1)(e)})(t)})(a)()}}};var we=function(n){return ia(n)(function(r){if(r instanceof y)return 1;if(r instanceof L)return 0;if(r instanceof b)return-1;throw new Error("Failed pattern match at Data.Array (line 870, column 31 - line 873, column 11): "+[r.constructor.name])})},Ne=function(n){var r=Yt(n);return function(t){return we(r(t))}};var _o=function(n){return[n]};var Le=function(n){var r=vo(n);return function(t){return function(a){return function(e){return ue(function(o){return r(function(u){return Ra(u)(a)(o)})(t)})(e)()}}}};var T=function(){return ua(i.create)(m.value)}(),bt=function(n){return T(n)(dn(n)-1|0)};var yt=function(n){return T(n)(0)};var We=function(n){return function(r){return function(){var a=rt(),e=ka(function(o){return T(r)(o)})();return Ja(e)(function(o){return uc(function(){var d=rt();Rr(o)(d)(),Ba(n(o))(e)(d)();var _=yr(d)();return Rr(_)(a)()})})(),yr(a)()}()}},Do=function(n){var r=We(function(a){return function(e){return ic(n(a)(e))(L.value)}}),t=we(n);return function(a){return r(t(a))}},go=function(n){return Do(I(n))},Ae=function(n){var r=F(n);return function(t){return We(r)(t)}};var Pe=function(n){return function(r){return fc([n])(r)}};var cc=gn(nn(jr)),bo=function(n){return cc(function(){var r=tr([])(_o);return function(t){return r(n(t))}}())};var ht=bo(J(V));var lc=function(){function n(u){this.fn=u}var r={},t=function(u,d){this.head=u,this.tail=d};function a(u){return new t(u,r)}function e(u){return function(d){return new t(u,d)}}function o(u){for(var d=[],_=u;_!==r;)d.push(_.head),_=_.tail;return d}return function(u){return function(d){return function(_){var S=function(O,B){return u(d(e)(_(O)))(B)},E=function(O,B,X){if(B===0)return O;var vu=X[B-1];return new n(function(){var _u=E(S(vu,O),B-1,X);return _u})};return function(O){for(var B=d(a)(_(O[O.length-1])),X=E(B,O.length-1,O);X instanceof n;)X=X.fn();return d(o)(X)}}}}}();var Dc=Bn();var Fo=function(n){return n};var gc=function(n){return function(r){return Dc(n(Fo(r)))}},He=gc(yt);var bc=function(n){return function(r){return n(Fo(r))}};var Se=bc(dn);function Co(n){return n.split(/[\u000a-\u000d\u0085\u2028\u2029\u0009\u0020\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000]+/)}var xg=typeof Array.from=="function",Ig=typeof Symbol<"u"&&Symbol!=null&&typeof Symbol.iterator<"u"&&typeof String.prototype[Symbol.iterator]=="function",wg=typeof String.prototype.fromCodePoint=="function",Ng=typeof String.prototype.codePointAt=="function";var xo=function(n){return function(r){return function(t){return(t|0)===t?n(t):r}}},Jn=function(n){return n};var Ft=isFinite;var Ue=Math.floor;var Io=qn(Qr),wo=nr(Qr);var Pc=function(){return xo(i.create)(m.value)}(),Rc=function(n){if(!Ft(n))return 0;if(n>=Jn(Io))return Io;if(n<=Jn(wo))return wo;if(Fn)return K(0)(Pc(n));throw new Error("Failed pattern match at Data.Int (line 72, column 1 - line 72, column 29): "+[n.constructor.name])};var No=function(n){return Rc(Ue(n))};var Be=function(n){return Co(n)};var cr=function(n){return function(){console.log(n)}};var Br=Math.random;var $o=function(n){return function(r){return function(){var a=Br(),e=(Jn(r)-Jn(n)+1)*a+Jn(n);return No(e)}}};var Mt=function(n){return function(r){return r[n]}},il=Mt("namespaceURI"),fl=Mt("prefix"),cl=Mt("localName"),ll=Mt("tagName");function xt(n){return function(r){return function(t){return function(){t.setAttribute(n,r)}}}}function qo(n){return function(r){return function(){return r.getAttribute(n)}}}function Oo(n,r,t){return n==null?r:t(n)}var P=function(n){return Oo(n,m.value,i.create)};var It=function(n){return function(r){return function(){return r[n]}}},vl=It("children"),_l=It("firstElementChild"),Dl=It("lastElementChild"),gl=It("childElementCount");function wt(n){return function(r){return function(){return r.querySelectorAll(n)}}}function Bo(n,r,t,a){if(typeof window<"u"){var e=window[t];if(e!=null&&a instanceof e)return r(a)}for(var o=a;o!=null;){var u=Object.getPrototypeOf(o),d=u.constructor.name;if(d===t)return r(a);if(d==="Object")return n;o=u}return n}var s=function(n){return function(r){return Bo(m.value,i.create,n,r)}};var Cl=l(C);var Cr=f;var ko=function(n){var r=Cl(P),t=qo(n);return function(a){return r(t(a))}};var Nt=s("Element");var yn=function(n){return function(r){return function(){return r[n]}}};var xl=yn("baseURI"),Il=yn("ownerDocument"),wl=yn("parentNode"),Nl=yn("parentElement");var Ll=yn("childNodes"),Wl=yn("firstChild"),Al=yn("lastChild"),Pl=yn("previousSibling"),Rl=yn("nextSibling"),Hl=yn("nodeValue");var kr=yn("textContent");function Vn(n){return function(r){return function(){r.textContent=n}}}var Jo=f;var Vo=s("Node");function Lt(n){return function(){return[].slice.call(n)}}function jo(n){return function(r){return function(){return r.getElementById(n)}}}var Jl=l(C),lr=function(n){var r=Jl(P),t=jo(n);return function(a){return r(t(a))}};function zo(n){return n.target}var Je=function(n){return P(zo(n))};function Wt(n){return function(){return function(r){return n(r)()}}}function At(n){return function(r){return function(t){return function(a){return function(){return a.addEventListener(n,r,t)}}}}}var sr=function(){return window};var Ve=f,Pt=f;function je(n){return function(){return n.value}}function ze(n){return function(r){return function(){r.value=n}}}var Xo=f;var Yo=s("HTMLInputElement"),Zo=s("HTMLInputElement");function mr(n){return function(){return n.document}}var Ut=Ur(ar)(_n),zn=U(ar),Mr=l(fn),em=Le(_n),am=Ie(_n),Ge=nn(er),hn=l(C),$t=Er(Fr)(ar),om=A(In),Jr=be(_n)(ur),jn=l(mn),Dn=Ir(nt),um=Gt(C),im=go(se(sn)(sn)),fm=Ne(sn),cm=dr(Fa),Rt=Gn(ar),lm=F(Lr(Kn)),sm=Ir(er);var en=function(){function n(){}return n.value=new n,n}(),An=function(){function n(){}return n.value=new n,n}(),q=function(){function n(){}return n.value=new n,n}(),pr=function(){function n(){}return n.value=new n,n}(),eu={show:function(n){if(n instanceof en)return"X";if(n instanceof An)return"O";if(n instanceof q)return"None";if(n instanceof pr)return"Disabled";throw new Error("Failed pattern match at Main (line 43, column 1 - line 47, column 35): "+[n.constructor.name])}},qt=M(eu),mm=M(Kr(Kr(eu))),Qe={eq:function(n){return function(r){return n instanceof en&&r instanceof en||n instanceof An&&r instanceof An||n instanceof q&&r instanceof q||n instanceof pr&&r instanceof pr}}},Wn=F(Qe),nu=Ae(Qe),pm=F(Dr(Dr(Qe))),Ke=function(){var n=Ut(function(t){if(t instanceof m)return zn(void 0);if(t instanceof i)return xt("active")("true")(t.value0);throw new Error("Failed pattern match at Main (line 336, column 26 - line 338, column 51): "+[t.constructor.name])}),r=Mr(Nt);return function(t){return n(r(t))}}(),dm=kn(_n)(cn(Pe))([[],[],[],[]]),Ot=function(n){return function(r){return function(t){return em([r])(am([new rn(t,n)]))}}},vm=function(n){return function(r){var t=function(){return r instanceof en?"X":r instanceof An?"O":r instanceof pr?"-":""}();return Vn(t)(n)}},Bt=function(n){var r=Ut(le(vm)),t=gt(n);return function(a){return r(t(Hn(a)))}},Xe=function(n){return function(){var t=$o(0)(dn(n)-1|0)();return T(n)(t)}},Ht=function(n){return n instanceof en?An.value:n instanceof An?en.value:q.value},_m=function(n){return function(r){var t=Ge(Je(r))(Yo);if(t instanceof m)return zn(void 0);if(t instanceof i)return function(){var e=je(t.value0)(),o=function(){var u=e==="simple";return u?"complex":"simple"}();return ze(o)(t.value0)(),Vn(o)(n)()};throw new Error("Failed pattern match at Main (line 227, column 24 - line 233, column 34): "+[t.constructor.name])}},au=function(){var n=Ut(function(t){if(t instanceof m)return zn(void 0);if(t instanceof i)return xt("active")("false")(t.value0);throw new Error("Failed pattern match at Main (line 331, column 24 - line 333, column 52): "+[t.constructor.name])}),r=Mr(Nt);return function(t){return n(r(t))}}(),ou=function(n){return function(r){return function(){var a=Wt(n)();return At("click")(a)(!1)(Jo(r))()}}},uu=function(n){return n instanceof i&&n.value0 instanceof q},iu=function(){return Rn(4)(Rn(4)(q.value))}(),Ye=function(n){return function(r){return Ge(T(n)(r.value0))(function(t){return T(t)(r.value1)})}},Ze=function(n){return function(){var t=kr(n)(),a=yt(Be(t));if(a instanceof i&&a.value0==="X")return An.value;if(a instanceof i&&a.value0==="O")return en.value;var e=bt(Be(t));return e instanceof i&&e.value0==="X"?en.value:e instanceof i&&e.value0==="O"?An.value:en.value}};var Dm=function(n){return n==="X"?en.value:n==="O"?An.value:n==="-"?pr.value:q.value},gm=function(){var n=hn(Dm);return function(r){return n(kr(r))}}(),kt=function(n){return function(){var t=$t(gm)(n)();return[Sn(0)(4)(t),Sn(4)(8)(t),Sn(8)(12)(t),Sn(12)(16)(t)]}},fu=function(n){var r=Q(function(e){return e.alive})(n),t=dn(r),a=dn(n)-t|0;return function(){var o=$t(Xe)(Rn(a)(r))(),u=t>0;return u?om(r)(ht(o)):n}},Jt=Mr(function(){var n=gt(vr(0)(3)),r=Rn(4);return function(t){return n(r(t))}}())(vr(0)(3)),cu=function(n){return Jr(function(){var r=Ye(n);return function(t){return uu(r(t))}}())(Hn(Jt))},lu=function(){var n=function(r){return Q(function(){var t=Ye(r);return function(a){return uu(t(a))}}())(Hn(Jt))};return function(r){return Xe(n(r))}}(),St=function(n){return function(r){var t=function(e){return Wn(He(e))(n)&&Se(e)>=3},a=function(e){return dn(e)>=3};return Jr(Jr(t))(Mr(nu)(r))||Jr(Jr(t))(Mr(nu)(dm(r)))||a(Q(function(){var e=K(q.value);return function(o){return function(u){return Wn(n)(u)}(e(o))}}())(cn(Cn)([function(e){return T(e)(0)},function(e){return T(e)(1)},function(e){return T(e)(2)},function(e){return new i(q.value)}])(r)))||a(Q(function(){var e=K(q.value);return function(o){return function(u){return Wn(n)(u)}(e(o))}}())(cn(Cn)([function(e){return T(e)(1)},function(e){return T(e)(2)},function(e){return T(e)(3)},function(e){return new i(q.value)}])(r)))||a(Q(function(){var e=K(q.value);return function(o){return function(u){return Wn(n)(u)}(e(o))}}())(cn(Cn)([function(e){return new i(q.value)},function(e){return T(e)(0)},function(e){return T(e)(1)},function(e){return T(e)(2)}])(r)))||a(Q(function(){var e=K(q.value);return function(o){return function(u){return Wn(n)(u)}(e(o))}}())(cn(Cn)([function(e){return new i(q.value)},function(e){return T(e)(1)},function(e){return T(e)(2)},function(e){return T(e)(3)}])(r)))||a(Q(function(){var e=K(q.value);return function(o){return function(u){return Wn(n)(u)}(e(o))}}())(cn(Cn)([function(e){return T(e)(2)},function(e){return T(e)(1)},function(e){return T(e)(0)},function(e){return new i(q.value)}])(r)))||a(Q(function(){var e=K(q.value);return function(o){return function(u){return Wn(n)(u)}(e(o))}}())(cn(Cn)([function(e){return T(e)(3)},function(e){return T(e)(2)},function(e){return T(e)(1)},function(e){return new i(q.value)}])(r)))||a(Q(function(){var e=K(q.value);return function(o){return function(u){return Wn(n)(u)}(e(o))}}())(cn(Cn)([function(e){return new i(q.value)},function(e){return T(e)(2)},function(e){return T(e)(1)},function(e){return T(e)(0)}])(r)))||a(Q(function(){var e=K(q.value);return function(o){return function(u){return Wn(n)(u)}(e(o))}}())(cn(Cn)([function(e){return new i(q.value)},function(e){return T(e)(3)},function(e){return T(e)(2)},function(e){return T(e)(1)}])(r)))}},bm=function(n){return function(r){var t=function(a){var e=Ot(r)(a.value0)(a.value1)(n);return{initDecision:a,color:r,player:Ht(r),state:e,alive:!0,winning:St(r)(e)}};return hn(jn(t))(lu(n))}},ym=function(n){return function(r){var t=hn(ht),a=$t(bm(r)),e=Rn(n);return function(o){return t(a(e(o)))}}},su=function(n){return function(r){return function(){var a=hn(Pt)(Dn(mr)(sr))(),e=lr("game--status")(a)(),o=jn(Cr)(e);if(o instanceof m)return void 0;if(o instanceof i)return Vn(r)(o.value0)(),au(n)();throw new Error("Failed pattern match at Main (line 347, column 9 - line 351, column 29): "+[o.constructor.name])}}},hm=function(n){return su(n)("It's a draw!")},Tm=function(n){return function(r){return su(n)(qt(r)+" won!")}},Em=function(n){return n instanceof i&&n.value0 instanceof pr},Fm=function(n){return dn(Q(function(){var r=Ye(n);return function(t){return Em(r(t))}}())(Hn(Jt)))},mu=function(n){return function(){var t=Br(),a=t>=.1||Fm(n)>=2;return a?n:um(Xe(Hn(Jt)))(function(e){return e instanceof i?Ot(pr.value)(e.value0.value0)(e.value0.value1)(n):n})()}},ru=function(n){return function(){var t=kt(n)(),a=mu(t)(),e=pm(t)(a);return e?void 0:Bt(n)(a)()}},Cm=function(n){var r=function(t){return function(a){var e=Ot(n.player)(a.value0)(a.value1)(t),o=St(n.color)(e);return{state:e,player:Ht(n.player),alive:!St(Ht(n.color))(e),winning:o,color:n.color,initDecision:n.initDecision}}};return function(){var a=mu(n.state)(),e=!n.winning&&cu(a);return e?hn(function(){var o=K(n),u=jn(r(a));return function(d){return o(u(d))}}())(lu(a))():n}},pu=function(n){return function(r){return n===0?zn(r):Dn(pu(n-1|0))(Dn(fu)($t(Cm)(r)))}};var Mm=function(n){var r=im(Mr(function(t){return t.initDecision})(n));return jn(He)(bt(fm(Se)(r)))},xm=function(n){return function(r){return function(){var a=Dn(pu(10))(Dn(fu)(ym(1e3)(r)(n)))(),e=Mm(a);if(e instanceof m)return r;if(e instanceof i)return Ot(n)(e.value0.value0)(e.value0.value1)(r);throw new Error("Failed pattern match at Main (line 140, column 16 - line 143, column 43): "+[e.constructor.name])}}},na=function(n){return function(r){return function(){au(n)(),cr(qt(r))();var a=Dn(xm(r))(kt(n))();return cr(mm(a))(),Bt(n)(a)(),Ke(n)()}}},Im=function(){var r=hn(Pt)(Dn(mr)(sr))(),t=lr("game--status")(r)(),a=hn(Ve)(Dn(mr)(sr))(),e=Dn(Lt)(wt(".cell")(a))();Bt(e)(iu)();var o=jn(Cr)(t);if(o instanceof m)return void 0;if(o instanceof i){var u=Ze(o.value0)();return Vn("You are playing "+qt(u))(o.value0)(),function(){return u instanceof en?void 0:na(e)(en.value)()}(),Ke(e)(),cr("Retarting game")()}throw new Error("Failed pattern match at Main (line 378, column 3 - line 388, column 30): "+[o.constructor.name])},wm=function(n){return ou(function(r){return Im})(n)},Nm=function(n){return function(r){return hn(St(r))(kt(n))}},tu=function(n){return function(r){return function(){var a=Nm(n)(r)();if(a)return cm(Tm(n)(r))(zn(a))();var e=hn(function(o){return!cu(o)})(kt(n))();return Rt(e)(hm(n))(),e}}},Lm=function(n){return function(r){return function(t){var a=Ge(Je(t))(Vo);if(a instanceof m)return zn(void 0);if(a instanceof i)return function(){var o=Ze(r)(),u=function(){var _=Nt(a.value0);if(_ instanceof i)return ko("active")(_.value0)();if(_ instanceof m)return m.value;throw new Error("Failed pattern match at Main (line 285, column 22 - line 287, column 49): "+[_.constructor.name])}(),d=kr(a.value0)();return Rt(lm(u)(new i("true"))&&d==="")(function(){var _=function(){return o instanceof en?"X":"O"}();return function(){Vn(_)(a.value0)();var E=tu(n)(o)();return Rt(!E)(function(){ru(n)();var B=Ht(o);na(n)(B)();var X=tu(n)(B)();return Rt(!X)(ru(n))()})()}}())()};throw new Error("Failed pattern match at Main (line 281, column 25 - line 301, column 51): "+[a.constructor.name])}}},Wm=function(n){return function(r){return ou(Lm(n)(r))}};var Am=function(n){return function(r){if(n instanceof m)return zn(void 0);if(r instanceof m)return zn(void 0);if(n instanceof i&&r instanceof i)return function(){var a=Wt(_m(n.value0))();return At("change")(a)(!0)(Xo(r.value0))()};throw new Error("Failed pattern match at Main (line 238, column 1 - line 238, column 70): "+[n.constructor.name,r.constructor.name])}},Pm=function(){var r=hn(Pt)(Dn(mr)(sr))(),t=hn(Ve)(Dn(mr)(sr))(),a=lr("game--restart")(r)(),e=lr("game--label")(r)(),o=lr("game--selector")(r)(),u=lr("game--status")(r)();(function(){var E=jn(Cr)(a);if(E instanceof m)return void 0;if(E instanceof i)return wm(E.value0)();throw new Error("Failed pattern match at Main (line 399, column 3 - line 401, column 42): "+[E.constructor.name])})();var d=Dn(Lt)(wt(".cell")(t))();Bt(d)(iu)(),Am(jn(Cr)(e))(sm(Zo)(o))();var _=jn(Cr)(u);if(_ instanceof m)return void 0;if(_ instanceof i){var S=Ze(_.value0)();return Vn("You are playing "+qt(S))(_.value0)(),function(){return S instanceof en?void 0:na(d)(en.value)()}(),Ut(Wm(d)(_.value0))(d)(),Ke(d)(),cr("Starting game")()}throw new Error("Failed pattern match at Main (line 407, column 3 - line 418, column 29): "+[_.constructor.name])},du=Pm;du();})();
