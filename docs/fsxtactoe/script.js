(()=>{var Ht=function(n){return function(r){for(var e=n.length,t=r.length,o=new Array(e*t),a=0,i=0;i<e;i++)for(var s=n[i],_=0;_<t;_++)o[a++]=s(r[_]);return o}};var Le={compose:function(n){return function(r){return function(e){return n(r(e))}}}};var B=function(n){return n.identity},V={identity:function(n){return n},Semigroupoid0:function(){return Le}};var Cn=!0;var mn=function(n){return function(r){return function(e){return n(e)(r)}}},X=function(n){return function(r){return n}};var Re=function(n){return function(r){return n(r)}};var At=function(n){return function(r){for(var e=r.length,t=new Array(e),o=0;o<e;o++)t[o]=n(r[o]);return t}};var l=function(n){return n.map};var G=function(n){return l(n)(X(void 0))};var fn={map:At};var Qa=B(V);var Ar={apply:Ht,Functor0:function(){return fn}},J=function(n){return n.apply};var Sr=function(n){var r=J(n),e=l(n.Functor0());return function(t){return function(o){return r(e(X(Qa))(t))(o)}}};var H=function(n){return n.pure};var On=function(n){var r=H(n);return function(e){return function(t){if(e)return t;if(!e)return r(void 0);throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): "+[e.constructor.name,t.constructor.name])}}},gr=function(n){var r=J(n.Apply0()),e=H(n);return function(t){return function(o){return r(e(t))(o)}}};var qt=function(n){return function(r){for(var e=[],t=0,o=n.length;t<o;t++)Array.prototype.push.apply(e,r(n[t]));return e}};var Ur={bind:qt,Apply0:function(){return Ar}},Q=function(n){return n.bind},br=function(n){return mn(Q(n))};var dn=function(n){return function(r){for(var e=n>r?-1:1,t=new Array(e*(r-n)+1),o=n,a=0;o!==r;)t[a++]=o,o+=e;return t[a]=o,t}},Ya=function(n){return function(r){if(n<1)return[];var e=new Array(n);return e.fill(r)}},Za=function(n){return function(r){for(var e=[],t=0,o=0;o<n;o++)e[t++]=r;return e}},tr=typeof Array.prototype.fill=="function"?Ya:Za,nu=function(){function n(o,a){this.head=o,this.tail=a}var r={};function e(o){return function(a){return new n(o,a)}}function t(o){for(var a=[],i=0,s=o;s!==r;)a[i++]=s.head,s=s.tail;return a}return function(o){return function(a){return t(o(e)(r)(a))}}}(),bn=function(n){return n.length};var $t=function(n){return function(r){return function(e){return function(t){return t<0||t>=e.length?r:n(e[t])}}}};var or=function(n){if(n.length<=1e4)return Array.prototype.concat.apply([],n);for(var r=[],e=0,t=n.length;e<t;e++)for(var o=n[e],a=0,i=o.length;a<i;a++)r.push(o[a]);return r},ar=function(n){return function(r){return r.filter(n)}};var Ot=function(){function n(r,e,t,o,a,i){var s,_,q,W,U,$,rn;for(s=a+(i-a>>1),s-a>1&&n(r,e,o,t,a,s),i-s>1&&n(r,e,o,t,s,i),_=a,q=s,W=a;_<s&&q<i;)U=o[_],$=o[q],rn=e(r(U)($)),rn>0?(t[W++]=$,++q):(t[W++]=U,++_);for(;_<s;)t[W++]=o[_++];for(;q<i;)t[W++]=o[q++]}return function(r){return function(e){return function(t){var o;return t.length<2?t:(o=t.slice(0),n(r,e,o,t.slice(0),0,t.length),o)}}}}(),Bn=function(n){return function(r){return function(e){return e.slice(n,r)}}},Mn=function(n){return function(r){return function(e){for(var t=r.length<e.length?r.length:e.length,o=new Array(t),a=0;a<t;a++)o[a]=n(r[a])(e[a]);return o}}};var Bt=function(n){return function(r){return n.length===0?r:r.length===0?n:n.concat(r)}};var In={append:Bt};var P=function(n){return n.append};var qr=function(n){var r=Q(n.Bind1()),e=H(n.Applicative0());return function(t){return function(o){return r(t)(function(a){return r(o)(function(i){return e(a(i))})})}}};var au=String.fromCharCode(65535),uu=String.fromCharCode(0),iu=Number.POSITIVE_INFINITY,fu=Number.NEGATIVE_INFINITY;var lu=function(n){return function(r){return function(e){return function(t){return function(o){return t<o?n:t===o?r:e}}}}};var jt=lu;var zt=function(n){return function(r){return n===r}};var Gt=zt;var Qt=zt;var ir={eq:Qt};var Ae={eq:Gt};var I=function(n){return n.eq};var b=function(){function n(){}return n.value=new n,n}(),y=function(){function n(){}return n.value=new n,n}(),N=function(){function n(){}return n.value=new n,n}();var yr={eq:function(n){return function(r){return n instanceof b&&r instanceof b||n instanceof y&&r instanceof y||n instanceof N&&r instanceof N}}};var cn=function(){return{compare:jt(b.value)(N.value)(y.value),Eq0:function(){return Ae}}}();var C=function(n){return n.compare};var Ue=function(n){var r=C(n);return function(e){return function(t){return function(o){return r(e(t))(e(o))}}}};var zn=function(n){return n.top};var Or={top:2147483647,bottom:-2147483648,Ord0:function(){return cn}};var fr=function(n){return n.bottom};var Kt=function(n){return n.toString()};var Xt=function(n){return function(r){for(var e=[],t=0,o=r.length;t<o;t++)e[t]=n(r[t]);return"["+e.join(",")+"]"}};var Tr={show:Kt};var g=function(n){return n.show},Br=function(n){return{show:Xt(g(n))}};var Iu=B(V),d=function(){function n(){}return n.value=new n,n}(),p=function(){function n(r){this.value0=r}return n.create=function(r){return new n(r)},n}();var Kn=function(n){return function(r){return function(e){if(e instanceof d)return n;if(e instanceof p)return r(e.value0);throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): "+[n.constructor.name,r.constructor.name,e.constructor.name])}}};var ln={map:function(n){return function(r){return r instanceof p?new p(n(r.value0)):d.value}}},xu=l(ln);var _n=function(n){return Kn(n)(Iu)},wn=function(){return function(n){if(n instanceof p)return n.value0;throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): "+[n.constructor.name])}};var Fr=function(n){var r=I(n);return{eq:function(e){return function(t){return e instanceof d&&t instanceof d?!0:e instanceof p&&t instanceof p?r(e.value0)(t.value0):!1}}}};var Jr={apply:function(n){return function(r){if(n instanceof p)return xu(n.value0)(r);if(n instanceof d)return d.value;throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): "+[n.constructor.name,r.constructor.name])}},Functor0:function(){return ln}};var Xn={bind:function(n){return function(r){if(n instanceof p)return r(n.value0);if(n instanceof d)return d.value;throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): "+[n.constructor.name,r.constructor.name])}},Apply0:function(){return Jr}};var on=function(n){return n.mempty};var Yt=function(n){return function(){return n}},Zt=function(n){return function(r){return function(){return r(n())()}}};var no=function(n,r,e){var t=0,o;return function(a){if(t===2)return o;if(t===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+r+", line "+a+")",r,a);return t=1,o=e(),t=2,o}},ro={Applicative0:function(){return Yn},Bind1:function(){return jr}},jr={bind:Zt,Apply0:function(){return to(0)}},Yn={pure:Yt,Apply0:function(){return to(0)}},eo=no("functorEffect","Effect",function(){return{map:gr(Yn)}}),to=no("applyEffect","Effect",function(){return{apply:qr(ro),Functor0:function(){return eo(0)}}}),T=eo(20);var uo=function(n){return function(r){return function(){return n(r())}}},io=function(n){return function(){return n}},fo=function(n){return function(r){return function(){return r(n())()}}};function cr(n){return function(){return{value:n}}}var Zn=function(n){return function(){return n.value}},co=function(n){return function(r){return function(){var e=n(r.value);return r.value=e.state,e.value}}},Cr=function(n){return function(r){return function(){return r.value=n}}};var Vu=function(n,r,e){var t=0,o;return function(a){if(t===2)return o;if(t===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+r+", line "+a+")",r,a);return t=1,o=e(),t=2,o}},ju=co,lo=function(n){return ju(function(r){var e=n(r);return{state:e,value:e}})},lr={map:uo};var zu={Applicative0:function(){return Oe},Bind1:function(){return so}},so={bind:fo,Apply0:function(){return mo(0)}},Oe={pure:io,Apply0:function(){return mo(0)}},mo=Vu("applyST","Control.Monad.ST.Internal",function(){return{apply:qr(zu),Functor0:function(){return lr}}});function zr(){return[]}var po=function(n){return function(r){return function(e){return function(t){return function(){return e>=0&&e<t.length?n(t[e]):r}}}}},Mr=function(n){return function(r){return function(e){return function(){var t=n>=0&&n<e.length;return t&&(e[n]=r),t}}}};var ke=function(n){return function(r){return function(){return r.push.apply(r,n)}}};var sr=function(n){return function(){return n}};function Gu(n){return function(){return n.slice()}}var Je=Gu,Qu=function(){function n(r,e,t,o,a,i){var s,_,q,W,U,$,rn;for(s=a+(i-a>>1),s-a>1&&n(r,e,o,t,a,s),i-s>1&&n(r,e,o,t,s,i),_=a,q=s,W=a;_<s&&q<i;)U=o[_],$=o[q],rn=e(r(U)($)),rn>0?(t[W++]=$,++q):(t[W++]=U,++_);for(;_<s;)t[W++]=o[_++];for(;q<i;)t[W++]=o[q++]}return function(r){return function(e){return function(t){return function(){return t.length<2||n(r,e,t,t.slice(0),0,t.length),t}}}}}();var Ve=function(n){return function(r){return function(){var t=Je(r)();return n(t)(),sr(t)()}}};var Ir=function(n){return ke([n])};var Zu=function(){return po(p.create)(d.value)}(),vo=function(n){return function(r){return function(e){return function(){var o=Zu(n)(e)();if(o instanceof p)return Mr(n)(r(o.value0))(e)();if(o instanceof d)return!1;throw new Error("Failed pattern match at Data.Array.ST (line 193, column 3 - line 195, column 26): "+[o.constructor.name])}}}};var Do=function(n){return function(r){return n&&r}},go=function(n){return function(r){return n||r}},bo=function(n){return!n};var Gr=function(n){return n.tt};var Qr=function(n){return n.not};var Kr=function(n){return n.ff};var xr=function(n){return n.disj},Pn={ff:!1,tt:!0,implies:function(n){return function(r){return xr(Pn)(Qr(Pn)(n))(r)}},conj:Do,disj:go,not:bo};var Xr=function(n){return n.conj};var Ge=l(lr),yo=Qr(Pn),je=G(lr),ri=function(){function n(r,e){this.value0=r,this.value1=e}return n.create=function(r){return function(e){return new n(r,e)}},n}(),ei=function(n){return function(){var e=Zn(n.value1)();return n.value0(e)}},ho=function(n){return function(){var e=Zn(n.value1)();return lo(function(t){return t+1|0})(n.value1)(),n.value0(e)}},To=function(n){return function(r){return function(e){return function(){for(var o=cr(!1)();Ge(yo)(Zn(o))();)(function(){var i=ei(r)();return i instanceof p&&n(i.value0)?(Ir(i.value0)(e)(),je(ho(r))()):je(Cr(!0)(o))()})();return{}}}}};var Fo=function(n){return Ge(ri.create(n))(cr(0))},Eo=function(n){return function(r){return function(){for(var t=cr(!1)();Ge(yo)(Zn(t))();)(function(){var a=ho(n)();if(a instanceof p)return r(a.value0)();if(a instanceof d)return je(Cr(!0)(t))();throw new Error("Failed pattern match at Data.Array.ST.Iterator (line 42, column 5 - line 44, column 47): "+[a.constructor.name])})();return{}}}};var Co=function(n){return function(r){return function(e){for(var t=r,o=e.length,a=o-1;a>=0;a--)t=n(e[a])(t);return t}}},Mo=function(n){return function(r){return function(e){for(var t=r,o=e.length,a=0;a<o;a++)t=n(t)(e[a]);return t}}};var K=function(){function n(r,e){this.value0=r,this.value1=e}return n.create=function(r){return function(e){return new n(r,e)}},n}(),Qe=function(n){return function(r){return n(r.value0)(r.value1)}},Io=function(n){return new K(n.value1,n.value0)};var xo=function(n){var r=g(n);return function(e){var t=g(e);return{show:function(o){return"(Tuple "+(r(o.value0)+(" "+(t(o.value1)+")")))}}}};var si=function(n){var r=I(n);return function(e){var t=I(e);return{eq:function(o){return function(a){return r(o.value0)(a.value0)&&t(o.value1)(a.value1)}}}}},Ke=function(n){var r=C(n),e=si(n.Eq0());return function(t){var o=C(t),a=e(t.Eq0());return{compare:function(i){return function(s){var _=r(i.value0)(s.value0);return _ instanceof b?b.value:_ instanceof y?y.value:o(i.value1)(s.value1)}},Eq0:function(){return a}}}};var ee=function(n){return n};var yi=function(n){var r=Xr(n);return{append:function(e){return function(t){return r(e)(t)}}}};var nt=function(n){var r=yi(n);return{mempty:Gr(n),Semigroup0:function(){return r}}};var oe=function(n){return n};var hi=function(n){var r=xr(n);return{append:function(e){return function(t){return r(e)(t)}}}};var rt=function(n){var r=hi(n);return{mempty:Kr(n),Semigroup0:function(){return r}}};var u=function(n){return n};var et=function(){return u};var Ti=et();var tt=function(){return function(){return function(){return function(){return function(n){return Ti}}}}};var Wo=tt()()()(),Rn=function(n){return n.foldr};var wr=function(n){var r=Sr(n.Apply0()),e=H(n);return function(t){var o=Rn(t);return function(a){return o(function(i){return r(a(i))})(e(void 0))}}};var Po=function(n){var r=Rn(n);return function(e){var t=P(e.Semigroup0()),o=on(e);return function(a){return r(function(i){return function(s){return t(a(i))(s)}})(o)}}},an={foldr:Co,foldl:Mo,foldMap:function(n){return Po(an)(n)}};var dr=function(n){return n.foldMap};var at=function(n){var r=dr(n);return function(e){return Wo(oe)(r(rt(e)))}};var ut=function(n){var r=dr(n);return function(e){return Wo(ee)(r(nt(e)))}};var Ro=function(){function n(o){return[o]}function r(o){return function(a){return[o,a]}}function e(o){return function(a){return function(i){return[o,a,i]}}}function t(o){return function(a){return o.concat(a)}}return function(o){return function(a){return function(i){return function(s){return function(_){function q(W,U){switch(U-W){case 0:return i([]);case 1:return a(n)(s(_[W]));case 2:return o(a(r)(s(_[W])))(s(_[W+1]));case 3:return o(o(a(e)(s(_[W])))(s(_[W+1])))(s(_[W+2]));default:var $=W+Math.floor((U-W)/4)*2;return o(a(t)(q(W,$)))(q($,U))}}return q(0,_.length)}}}}}}();var sf=B(V),vr=function(n){return n.traverse};var mf=function(n){var r=vr(n);return function(e){return r(e)(sf)}},_r={traverse:function(n){var r=n.Apply0();return Ro(J(r))(l(r.Functor0()))(H(n))},sequence:function(n){return mf(_r)(n)},Functor0:function(){return fn},Foldable1:function(){return an}};var Qo=wr(Oe);var Nf=G(lr);var wf=I(yr);var Lf=P(In);var Dr=function(){return Mn(K.create)}(),vt=function(n){var r=Qo(n);return function(e){return function(t){return Ve(function(o){return r(function(a){return Mr(a.value0)(a.value1)(o)})(e)})(t)()}}};var me=function(n){return Ot(n)(function(r){if(r instanceof y)return 1;if(r instanceof N)return 0;if(r instanceof b)return-1;throw new Error("Failed pattern match at Data.Array (line 870, column 31 - line 873, column 11): "+[r.constructor.name])})},_t=function(n){var r=Ue(n);return function(e){return me(r(e))}};var Dt=function(n){var r=C(n);return function(e){return me(r)(e)}};var Ko=function(n){return[n]};var gt=function(n){var r=Qo(n);return function(e){return function(t){return function(o){return Ve(function(a){return r(function(i){return vo(i)(t)(a)})(e)})(o)()}}}};var nn=function(){return $t(p.create)(d.value)}(),bt=function(n){return nn(n)(bn(n)-1|0)};var Xo=function(n){return nn(n)(0)};var Yo=function(n){return function(r){return function(){var t=zr(),o=Fo(function(a){return nn(r)(a)})();return Eo(o)(function(a){return Nf(function(){var s=zr();Ir(a)(s)(),To(n(a))(o)(s)();var _=sr(s)();return Ir(_)(t)()})})(),sr(t)()}()}},Zo=function(n){var r=Yo(function(t){return function(o){return wf(n(t)(o))(N.value)}}),e=me(n);return function(t){return r(e(t))}},na=function(n){return Zo(C(n))};var yt=function(n){return function(r){return Lf([n])(r)}};var Wf=mn(Q(Ur)),ra=function(n){return Wf(function(){var r=Kn([])(Ko);return function(e){return r(n(e))}}())};var pe=ra(B(V));var Pf=function(){function n(i){this.fn=i}var r={},e=function(i,s){this.head=i,this.tail=s};function t(i){return new e(i,r)}function o(i){return function(s){return new e(i,s)}}function a(i){for(var s=[],_=i;_!==r;)s.push(_.head),_=_.tail;return s}return function(i){return function(s){return function(_){var q=function(U,$){return i(s(o)(_(U)))($)},W=function(U,$,rn){if($===0)return U;var Va=rn[$-1];return new n(function(){var ja=W(q(Va,U),$-1,rn);return ja})};return function(U){for(var $=s(t)(_(U[U.length-1])),rn=W($,U.length-1,U);rn instanceof n;)rn=rn.fn();return s(a)(rn)}}}}}();var $f=wn();var ia=function(n){return n};var Of=function(n){return function(r){return $f(n(ia(r)))}},fa=Of(Xo);var Bf=function(n){return function(r){return n(ia(r))}};var ca=Bf(bn);var un=function(n){return function(){console.log(n)}};var Tt=Math.random;var la=function(n){return function(r){return function(e){return(e|0)===e?n(e):r}}},Hn=function(n){return n};var ve=isFinite;var Ft=Math.floor;var sa=zn(Or),ma=fr(Or);var tc=function(){return la(p.create)(d.value)}(),oc=function(n){if(!ve(n))return 0;if(n>=Hn(sa))return sa;if(n<=Hn(ma))return ma;if(Cn)return _n(0)(tc(n));throw new Error("Failed pattern match at Data.Int (line 72, column 1 - line 72, column 29): "+[n.constructor.name])};var pa=function(n){return oc(Ft(n))};var da=function(n){return function(r){return function(){var t=Tt(),o=(Hn(r)-Hn(n)+1)*t+Hn(n);return pa(o)}}};var _e=function(n){return function(r){return r[n]}},ic=_e("namespaceURI"),fc=_e("prefix"),cc=_e("localName"),lc=_e("tagName");function De(n){return function(r){return function(e){return function(){e.setAttribute(n,r)}}}}function va(n){return function(r){return function(){return r.getAttribute(n)}}}function _a(n,r,e){return n==null?r:e(n)}var L=function(n){return _a(n,d.value,p.create)};var ge=function(n){return function(r){return function(){return r[n]}}},vc=ge("children"),_c=ge("firstElementChild"),Dc=ge("lastElementChild"),gc=ge("childElementCount");function be(n){return function(r){return function(){return r.querySelectorAll(n)}}}function Da(n,r,e,t){if(typeof window<"u"){var o=window[e];if(o!=null&&t instanceof o)return r(t)}for(var a=t;a!=null;){var i=Object.getPrototypeOf(a),s=i.constructor.name;if(s===e)return r(t);if(s==="Object")return n;a=i}return n}var c=function(n){return function(r){return Da(d.value,p.create,n,r)}};var Cc=l(T);var ga=function(n){var r=Cc(L),e=va(n);return function(t){return r(e(t))}};var ye=c("Element");var pn=function(n){return function(r){return function(){return r[n]}}};var Ic=pn("baseURI"),xc=pn("ownerDocument"),Nc=pn("parentNode"),wc=pn("parentElement");var Lc=pn("childNodes"),Wc=pn("firstChild"),Pc=pn("lastChild"),Rc=pn("previousSibling"),Hc=pn("nextSibling"),Ac=pn("nodeValue");var he=pn("textContent");function Te(n){return function(r){return function(){r.textContent=n}}}var ba=u;var ya=c("Node");function Lr(n){return function(){return[].slice.call(n)}}function ha(n){return function(r){return function(){return r.getElementById(n)}}}var jc=l(T),Ta=function(n){var r=jc(L),e=ha(n);return function(t){return r(e(t))}};function Fa(n){return n.target}var Ea=function(n){return L(Fa(n))};function Mt(n){return function(){return function(r){return n(r)()}}}function It(n){return function(r){return function(e){return function(t){return function(){return t.addEventListener(n,r,e)}}}}}var Wr=function(){return window};var xt=u,Ca=u;function Nt(n){return function(){return n.value}}var Na=c("HTMLInputElement");function Pr(n){return function(){return n.document}}var An=wr(Yn)(an),Rr=H(Yn),gn=l(fn),us=gt(an),is=vt(an),La=Q(Xn),Sn=l(T),Hr=vr(_r)(Yn),Ie=g(Tr),wt=P(In),Lt=at(an)(Pn),Ce=ut(an)(Pn),fs=Rn(an),Pt=l(ln),xe=g(xo(Tr)(Tr)),Wa=Ke(cn)(cn),Ne=Dt(Wa),cs=na(Wa),ls=_t(cn),Dn=br(jr),ss=br(Xn),wa=On(Yn),ms=I(Fr(ir)),Un=function(){function n(){}return n.value=new n,n}(),er=function(){function n(){}return n.value=new n,n}(),qn=function(){function n(){}return n.value=new n,n}(),Pa={show:function(n){if(n instanceof Un)return"X";if(n instanceof er)return"O";if(n instanceof qn)return"None";throw new Error("Failed pattern match at Main (line 41, column 1 - line 44, column 27): "+[n.constructor.name])}},ps=g(Pa),ds=g(Br(Br(Pa))),vs={eq:function(n){return function(r){return n instanceof Un&&r instanceof Un||n instanceof er&&r instanceof er||n instanceof qn&&r instanceof qn}}},Me=I(vs),Ra=function(){var n=An(function(e){if(e instanceof d)return Rr(void 0);if(e instanceof p)return De("active")("true")(e.value0);throw new Error("Failed pattern match at Main (line 290, column 26 - line 292, column 51): "+[e.constructor.name])}),r=gn(ye);return function(e){return n(r(e))}}(),Rt=function(n){return function(r){return function(e){return us([r])(is([new K(e,n)]))}}},_s=function(n){return function(r){var e=function(){return r instanceof Un?"X":r instanceof er?"O":""}();return Te(e)(n)}},Ds=function(n){var r=An(Qe(_s)),e=Dr(n);return function(t){return r(e(or(t)))}},Ha=function(n){return function(){var e=da(0)(bn(n)-1|0)();return nn(n)(e)}},we=function(n){return n instanceof Un?er.value:n instanceof er?Un.value:qn.value};var gs=function(){var n=An(function(e){if(e instanceof d)return Rr(void 0);if(e instanceof p)return De("active")("false")(e.value0);throw new Error("Failed pattern match at Main (line 285, column 24 - line 287, column 52): "+[e.constructor.name])}),r=gn(ye);return function(e){return n(r(e))}}(),bs=function(n){return function(r){return function(){var t=Mt(n)();return It("click")(t)(!1)(ba(r))()}}},Aa=function(n){return n instanceof p&&n.value0 instanceof qn};var Sa=function(n){return function(r){return La(nn(n)(r.value0))(function(e){return nn(e)(r.value1)})}},Ua=function(n){return n==="X"?Un.value:n==="O"?er.value:qn.value},ys=function(){var n=Sn(Ua);return function(r){return n(he(r))}}(),hs=function(n){return function(){var e=Hr(ys)(n)();return[Bn(0)(3)(e),Bn(3)(6)(e),Bn(6)(9)(e)]}},Ts=function(){var n=Sn(Ua);return function(r){return n(Nt(r))}}(),qa=function(n){var r=ar(function(t){return t.alive})(n),e=bn(n)-bn(r)|0;return function(){un("[D] Dead: "+Ie(e))();var o=Hr(Ha)(tr(e)(r))();return wt(r)(pe(o))}},$a=function(){var n=gn(function(){var r=Dr(dn(0)(2)),e=tr(3);return function(t){return r(e(t))}}())(dn(0)(2));return wt(n)(wt(gn(gn(Io))(n))([Dr(dn(0)(2))(dn(0)(2)),Dr(dn(2)(0))(dn(0)(2))]))}(),Oa=function(n){var r=ar(function(){var e=Sa(n);return function(t){return Aa(e(t))}}())(or($a));return Ha(r)},Wt=function(n){return function(r){return Lt(Ce(function(e){return Me(n)(e)}))(r)||Lt(Ce(function(e){return Me(n)(e)}))(fs(Mn(yt))([[],[],[]])(r))||Ce(function(){var e=_n(qn.value);return function(t){return function(o){return Me(n)(o)}(e(t))}}())(Mn(Re)([function(e){return nn(e)(0)},function(e){return nn(e)(1)},function(e){return nn(e)(2)}])(r))||Ce(function(){var e=_n(qn.value);return function(t){return function(o){return Me(n)(o)}(e(t))}}())(Mn(Re)([function(e){return nn(e)(2)},function(e){return nn(e)(1)},function(e){return nn(e)(0)}])(r))}},Fs=function(n){return function(r){var e=function(t){var o=Rt(r)(t.value0)(t.value1)(n);return{initDecision:t,color:r,player:we(r),state:o,alive:!0,winning:Wt(r)(o)}};return Sn(Pt(e))(Oa(n))}},Es=function(n){return function(r){return function(e){return function(){var o=Sn(pe)(Hr(Fs(r))(tr(n)(e)))(),a=gn(function(i){return i.initDecision})(o);return An(function(i){return un(function(s){return"[I] "+s}(xe(i)))})(Ne(a))(),o}}}},Ba=function(n){var r=function(t){var o=Rt(n.player)(t.value0)(t.value1)(n.state),a=Wt(n.color)(o);return{state:o,player:we(n.player),alive:!Wt(we(n.color))(o),winning:a,color:n.color,initDecision:n.initDecision}},e=!n.winning&&Lt(function(){var t=Sa(n.state);return function(o){return Aa(t(o))}}())(or($a));return e?Sn(function(){var t=_n(n),o=Pt(r);return function(a){return t(o(a))}}())(Oa(n.state)):Rr(n)},ka=function(n){return function(r){return n===0?Rr(r):function(){var t=Hr(Ba)(r)();un("[S] "+Ie(n))();var o=gn(function(s){return s.initDecision})(t);An(function(s){return un(function(_){return"[W] "+_}(xe(s)))})(Ne(o))();var a=qa(t)(),i=gn(function(s){return s.initDecision})(a);return An(function(s){return un(function(_){return"[F] "+_}(xe(s)))})(Ne(i))(),ka(n-1|0)(a)()}}};var Cs=function(n){var r=cs(gn(function(e){return e.initDecision})(n));return Pt(fa)(bt(ls(ca)(r)))},Ms=function(n){return function(r){return function(){var t=Dn(ka(5))(Dn(qa)(Dn(Hr(Ba))(Es(500)(r)(n))))(),o=gn(function(i){return i.initDecision})(t);An(function(i){return un(xe(i))})(Ne(o))();var a=Cs(t);if(a instanceof d)return r;if(a instanceof p)return un(Ie(a.value0.value0)+(" "+Ie(a.value0.value1)))(),Rt(n)(a.value0.value0)(a.value0.value1)(r);throw new Error("Failed pattern match at Main (line 149, column 9 - line 154, column 50): "+[a.constructor.name])}}},Is=function(n){return function(){var e=Sn(xt)(Dn(Pr)(Wr))(),t=Dn(Lr)(be(".cell")(e))();gs(t)(),un(ps(n))();var o=Dn(Ms(n))(hs(t))();return un(ds(o))(),Ds(t)(o)(),Ra(t)()}};var xs=function(n){return function(r){var e=La(Ea(r))(ya);if(e instanceof d)return Rr(void 0);if(e instanceof p)return function(){var o=Ts(n)(),a=function(){var i=ye(e.value0);if(i instanceof p)return ga("active")(i.value0)();if(i instanceof d)return d.value;throw new Error("Failed pattern match at Main (line 243, column 22 - line 245, column 49): "+[i.constructor.name])}();return wa(ms(a)(new p("true")))(function(){var i=function(){return o instanceof Un?"X":"O"}();return function(){var _=he(e.value0)();return wa(_==="")(Te(i)(e.value0))(),Is(we(o))()}}())()};throw new Error("Failed pattern match at Main (line 239, column 21 - line 253, column 48): "+[e.constructor.name])}},Ns=function(n){return bs(xs(n))},Ja=function(){var r=Sn(Ca)(Dn(Pr)(Wr))(),e=Sn(xt)(Dn(Pr)(Wr))(),t=Ta("game--selector")(r)(),o=be(".cell")(e)();return function(){var a=ss(Na)(t);if(a instanceof d)return void 0;if(a instanceof p)return Dn(An(Ns(a.value0)))(Lr(o))();throw new Error("Failed pattern match at Main (line 331, column 3 - line 334, column 64): "+[a.constructor.name])}(),Dn(Ra)(Lr(o))(),un("Starting game")()};Ja();})();