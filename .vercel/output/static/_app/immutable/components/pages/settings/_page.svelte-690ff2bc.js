import{S as Te,i as be,s as Se,a as _,k as r,q as re,w as Ie,J as ye,h as l,c as E,l as a,m as n,r as ae,x as De,n as e,b as _e,D as t,y as Le,L as Ee,f as Ue,t as we,z as Fe,R as Oe}from"../../../chunks/index-8e1f88f9.js";import{e as ge}from"../../../chunks/forms-03f36850.js";import{L as Pe}from"../../../chunks/ListErrors-3251bb68.js";function Ne(c){var le;let g,f,T,b,s,w,H,M,I,Y,y,u,F,d,k,J,O,m,q,X,P,h,C,$,N,p,z,j,x,U,G,R,K,Q,W,Z,D,V,ee,L,te,se;return I=new Pe({props:{errors:(le=c[1])==null?void 0:le.errors}}),{c(){g=_(),f=r("div"),T=r("div"),b=r("div"),s=r("div"),w=r("h1"),H=re("Your Settings"),M=_(),Ie(I.$$.fragment),Y=_(),y=r("form"),u=r("fieldset"),F=r("fieldset"),d=r("input"),J=_(),O=r("fieldset"),m=r("input"),X=_(),P=r("fieldset"),h=r("textarea"),$=_(),N=r("fieldset"),p=r("input"),j=_(),x=r("fieldset"),U=r("input"),G=_(),R=r("button"),K=re("Update Settings"),Q=_(),W=r("hr"),Z=_(),D=r("form"),V=r("button"),ee=re("Or click here to logout."),this.h()},l(o){ye("svelte-ync0zh",document.head).forEach(l),g=E(o),f=a(o,"DIV",{class:!0});var A=n(f);T=a(A,"DIV",{class:!0});var B=n(T);b=a(B,"DIV",{class:!0});var oe=n(b);s=a(oe,"DIV",{class:!0});var v=n(s);w=a(v,"H1",{class:!0});var ne=n(w);H=ae(ne,"Your Settings"),ne.forEach(l),M=E(v),De(I.$$.fragment,v),Y=E(v),y=a(v,"FORM",{method:!0,action:!0});var ue=n(y);u=a(ue,"FIELDSET",{});var i=n(u);F=a(i,"FIELDSET",{class:!0});var ie=n(F);d=a(ie,"INPUT",{class:!0,name:!0,type:!0,placeholder:!0}),ie.forEach(l),J=E(i),O=a(i,"FIELDSET",{class:!0});var ce=n(O);m=a(ce,"INPUT",{class:!0,name:!0,type:!0,placeholder:!0}),ce.forEach(l),X=E(i),P=a(i,"FIELDSET",{class:!0});var fe=n(P);h=a(fe,"TEXTAREA",{class:!0,name:!0,rows:!0,placeholder:!0}),n(h).forEach(l),fe.forEach(l),$=E(i),N=a(i,"FIELDSET",{class:!0});var de=n(N);p=a(de,"INPUT",{class:!0,name:!0,type:!0,placeholder:!0}),de.forEach(l),j=E(i),x=a(i,"FIELDSET",{class:!0});var me=n(x);U=a(me,"INPUT",{class:!0,name:!0,type:!0,placeholder:!0}),me.forEach(l),G=E(i),R=a(i,"BUTTON",{class:!0});var he=n(R);K=ae(he,"Update Settings"),he.forEach(l),i.forEach(l),ue.forEach(l),Q=E(v),W=a(v,"HR",{}),Z=E(v),D=a(v,"FORM",{method:!0,action:!0});var pe=n(D);V=a(pe,"BUTTON",{class:!0});var ve=n(V);ee=ae(ve,"Or click here to logout."),ve.forEach(l),pe.forEach(l),v.forEach(l),oe.forEach(l),B.forEach(l),A.forEach(l),this.h()},h(){document.title="Settings • Conduit",e(w,"class","text-xs-center"),e(d,"class","form-control"),e(d,"name","image"),e(d,"type","text"),e(d,"placeholder","URL of profile picture"),d.value=k=c[0].user.image,e(F,"class","form-group"),e(m,"class","form-control form-control-lg"),e(m,"name","username"),e(m,"type","text"),e(m,"placeholder","Username"),m.value=q=c[0].user.username,e(O,"class","form-group"),e(h,"class","form-control form-control-lg"),e(h,"name","bio"),e(h,"rows","8"),e(h,"placeholder","Short bio about you"),h.value=C=c[0].user.bio,e(P,"class","form-group"),e(p,"class","form-control form-control-lg"),e(p,"name","email"),e(p,"type","email"),e(p,"placeholder","Email"),p.value=z=c[0].user.email,e(N,"class","form-group"),e(U,"class","form-control form-control-lg"),e(U,"name","password"),e(U,"type","password"),e(U,"placeholder","New Password"),e(x,"class","form-group"),e(R,"class","btn btn-lg btn-primary pull-xs-right"),e(y,"method","POST"),e(y,"action","?/save"),e(V,"class","btn btn-outline-danger"),e(D,"method","POST"),e(D,"action","?/logout"),e(s,"class","col-md-6 offset-md-3 col-xs-12"),e(b,"class","row"),e(T,"class","container page"),e(f,"class","settings-page")},m(o,S){_e(o,g,S),_e(o,f,S),t(f,T),t(T,b),t(b,s),t(s,w),t(w,H),t(s,M),Le(I,s,null),t(s,Y),t(s,y),t(y,u),t(u,F),t(F,d),t(u,J),t(u,O),t(O,m),t(u,X),t(u,P),t(P,h),t(u,$),t(u,N),t(N,p),t(u,j),t(u,x),t(x,U),t(u,G),t(u,R),t(R,K),t(s,Q),t(s,W),t(s,Z),t(s,D),t(D,V),t(V,ee),L=!0,te||(se=[Ee(ge.call(null,y,xe)),Ee(ge.call(null,D))],te=!0)},p(o,[S]){var B;const A={};S&2&&(A.errors=(B=o[1])==null?void 0:B.errors),I.$set(A),(!L||S&1&&k!==(k=o[0].user.image)&&d.value!==k)&&(d.value=k),(!L||S&1&&q!==(q=o[0].user.username)&&m.value!==q)&&(m.value=q),(!L||S&1&&C!==(C=o[0].user.bio))&&(h.value=C),(!L||S&1&&z!==(z=o[0].user.email)&&p.value!==z)&&(p.value=z)},i(o){L||(Ue(I.$$.fragment,o),L=!0)},o(o){we(I.$$.fragment,o),L=!1},d(o){o&&l(g),o&&l(f),Fe(I),te=!1,Oe(se)}}}const xe=()=>({update:c})=>{c({reset:!1})};function Re(c,g,f){let{data:T}=g,{form:b}=g;return c.$$set=s=>{"data"in s&&f(0,T=s.data),"form"in s&&f(1,b=s.form)},[T,b]}class ze extends Te{constructor(g){super(),be(this,g,Re,Ne,Se,{data:0,form:1})}}export{ze as default};