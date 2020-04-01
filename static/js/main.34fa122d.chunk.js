(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{34:function(e,t,a){e.exports=a(70)},43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(13),o=a.n(l),r=a(6),i=a(11),s=(a(43),a(9)),m=(a(44),function(){return c.a.createElement("header",{className:"header"},c.a.createElement("nav",{className:"nav"},c.a.createElement(r.b,{to:"/",className:"nav__logo"},c.a.createElement("img",{src:"img/Logo_lol.svg",alt:"Logo"})),c.a.createElement("ul",{className:"nav__list"},c.a.createElement("li",{className:"nav__item"},c.a.createElement(r.c,{to:"/",exact:!0},"Home")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(r.c,{to:"/phones"},"Phones")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(r.c,{to:"/tablets"},"tablets")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(r.c,{to:"/accessories"},"accessories")))))}),u=(a(46),function(){return c.a.createElement("h1",null,"Home page")}),p=(a(47),function(){return c.a.createElement("div",{className:"not-found"},c.a.createElement("h1",null,"Whoops page not FOUND 404"))}),h=(a(48),a(15)),E=a.n(h),d="FETCH_PHONES_START",f="FETCH_PHONES_SUCCESS",g="FETCH_PHONES_ERROR",v=(a(66),function(){return c.a.createElement("div",{className:"lds-roller"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))}),_=(a(67),{fetchPhones:function(){return function(e){e({type:d}),E.a.get("https://mate-academy.github.io/phone-catalogue-static/api/phones.json").then((function(t){return e((a=t.data,{type:f,payload:{phones:a}}));var a})).catch((function(t){return e(function(e){return{type:g,payload:{error:e}}}(t))}))}}}),b=Object(s.f)(Object(i.b)((function(e){return{phones:e.phones.phones,isLoading:e.phones.isLoading}}),_)((function(e){var t=e.phones,a=e.isLoading,l=e.fetchPhones,o=e.match;return Object(n.useEffect)((function(){l()}),[l]),a?c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement(v,null)):c.a.createElement("div",{className:"phones"},t.map((function(e){return c.a.createElement("div",{className:"card",key:e.age},c.a.createElement(r.b,{to:"".concat(o.path,"/").concat(e.id)},c.a.createElement("img",{src:e.imageUrl,className:"card-img-top card__img",alt:e.name})),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title card__title"},e.name),c.a.createElement("p",{className:"card-text card__text"},e.snippet)))})))}))),N=function(){return c.a.createElement(b,null)},y=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Mobile phones"),c.a.createElement(N,null))},O={fetchPhones:function(e){return function(t){t({type:d}),E.a.get(function(e){return"".concat("https://mate-academy.github.io/phone-catalogue-static/api/phones","/").concat(e,".json")}(e)).then((function(e){return t((a=e.data,{type:f,payload:{phone:a}}));var a})).catch((function(e){return t(function(e){return{type:g,payload:{error:e}}}(e))}))}}},L=Object(i.b)((function(e){return{phoneDetail:e.phoneDetail.phoneDetail,isLoading:e.phoneDetail.isLoading}}),O)((function(e){var t=e.phoneDetail,a=e.fetchPhones,l=e.isLoading,o=e.match.params.id;return console.log(t),Object(n.useEffect)((function(){a(o)}),[a,o]),console.log(t),l?c.a.createElement(v,null):c.a.createElement("div",null,"Hello")})),j=(a(68),function(){return c.a.createElement("h1",null,"Tablets page")}),D=(a(69),function(){return c.a.createElement("h1",null,"Accessories page")}),H=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement(m,null)),c.a.createElement("div",{className:"container-xl"},c.a.createElement("main",null,c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",exact:!0,component:u}),c.a.createElement(s.a,{path:"/phones",exact:!0,component:y}),c.a.createElement(s.a,{path:"/tablets",component:j}),c.a.createElement(s.a,{path:"/accessories",component:D}),c.a.createElement(s.a,{path:"/phones/:id",component:L}),c.a.createElement(s.a,{component:p})))))},x=a(8),P=a(33),S=a(16),F={phones:[],isLoading:!1},T={phoneDetail:{},isLoading:!1},C=Object(x.c)({phones:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case d:return Object(S.a)({},e,{isLoading:!0});case f:return{phones:n.phones,isLoading:!1};default:return e}},phoneDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case d:return Object(S.a)({},e,{isLoading:!0});case f:return{phoneDetail:n.phone,isLoading:!1};default:return e}}}),w=(0,x.d)(Object(x.a)(P.a)),R=Object(x.e)(C,w),k=c.a.createElement(i.a,{store:R},c.a.createElement(r.a,null,c.a.createElement(H,null)));o.a.render(k,document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.34fa122d.chunk.js.map