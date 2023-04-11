(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(24),s=n.n(o),r=n(9),i=n(3),l=(n(29),n(5)),m=(n(30),"https://pokemons-api.herokuapp.com/api");function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:t};return n&&(a.body=JSON.stringify(n),a.headers={"Content-Type":"application/json; charset=UTF-8"}),fetch(m+e,a).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var d=function(e){return u(e)},b=function(e,t){return u(e,"POST",t)},j=function(e,t){return u(e,"PATCH",t)},p=(n(31),n(32),n(33),n(4)),h=n.n(p),f=n(6),k=function(){var e=Object(f.a)(h.a.mark((function e(t){var n,a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"undefined"!==typeof window.ethereum){e.next=3;break}throw new Error("No crypto wallet was found \ud83e\udd72");case 3:return e.next=5,window.ethereum.request({method:"eth_requestAccounts"});case 5:return n=new ethers.BrowserProvider(window.ethereum),e.next=8,n.getSigner();case 8:return a=e.sent,e.next=11,a.signMessage(t);case 11:return c=e.sent,e.abrupt("return",c);case 15:e.prev=15,e.t0=e.catch(0),window.alert(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),g=function(e){return d("/user-pokemons/".concat(e))},x=function(e){return b("/user-pokemons/add",e)},A=function(e){return j("/user-pokemons/evolve",e)},O=n(11),N=n.n(O),q=n(1),v=function(e){var t=e.isSigning,n=e.addPokemon,a=e.evolvePokemon,c=e.pokemon,o=e.evolutionPokemon;return"/my-pokemons"===Object(i.k)().pathname?Object(q.jsx)("button",{type:"button",className:N()("pokemon-details__metamask",{"pokemon-details__metamask--disabled":t||!c.evolution.length}),onClick:function(){a("I want evolve ".concat(c.name," to ").concat(o.name))},children:"Evolve"}):Object(q.jsx)("button",{type:"button",className:N()("pokemon-details__metamask",{"pokemon-details__metamask--disabled":t}),onClick:function(){n("I want add ".concat(c.name," to my list"))},children:"Add to My list"})},y=c.a.createContext({pokemons:[],setPokemons:function(){}}),w=function(e){var t=e.children,n=Object(a.useState)([]),c=Object(l.a)(n,2),o=c[0],s=c[1],r=Object(a.useMemo)((function(){return{pokemons:o,setPokemons:s}}),[o]);return Object(q.jsx)(y.Provider,{value:r,children:t})},Q=["type","level","abilities"],Y=function(e){var t=e.pokemon,n=e.closeModal,c=e.evolutionPokemon,o=Object(a.useContext)(y).setPokemons,s=Object(a.useState)(!1),r=Object(l.a)(s,2),i=r[0],m=r[1],u=Object(a.useCallback)(function(){var e=Object(f.a)(h.a.mark((function e(a){var c,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,k(a);case 3:(c=e.sent)&&(o={pokemonId:t.id,signedMessage:c},x(o).then((function(){window.alert("Pokemon was added to your list")})).catch((function(){return window.alert("User already has this pokemon")}))),n();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),d=Object(a.useCallback)(function(){var e=Object(f.a)(h.a.mark((function e(a){var c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,k(a);case 3:(c=e.sent)&&(s={userPokemonsIDFrom:t.id,userPokemonsIDto:t.evolution[0],signedMessage:c},A(s).then((function(){window.alert("Pokemon evolved!"),window.ethereum.request({method:"eth_requestAccounts"}).then((function(e){g(e[0]).then((function(e){var t=e.data;o(t.pokemons)})).catch((function(e){return window.alert(e.message)}))}))})).catch((function(e){return window.alert(e)}))),n();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),b=t.name;return Object(q.jsxs)("div",{className:"pokemon-details__text",children:[Object(q.jsx)("h3",{className:"pokemon-details__name",children:b}),Object(q.jsx)("ul",{className:"pokemon-details__list",children:Q.map((function(e){var n,a=t[e];return Array.isArray(a)&&(a=a.join(", ")),Object(q.jsxs)("li",{className:"pokemon-details__detail",children:["".concat((n=e,n[0].toUpperCase()+n.slice(1)),": "),Object(q.jsx)("span",{className:"pokemon-details__value",children:a})]},e)}))}),Object(q.jsx)(v,{isSigning:i,addPokemon:u,evolvePokemon:d,pokemon:t,evolutionPokemon:c})]})},W=n.p+"static/media/icon__close.cb57ac54.svg",T=function(e){var t=e.closeModal;return Object(q.jsx)("button",{type:"button",className:"pokemon-details__close","aria-label":"close modal",onClick:function(){return t()},children:Object(q.jsx)("img",{src:W,alt:"close icon",className:"pokemon-details__cross"})})},E=function(e){var t=e.name,n=e.img;return Object(q.jsxs)("div",{className:"pokemon-details__evolution",children:[Object(q.jsx)("img",{src:n,alt:t,className:"pokemon-details__evolution-img"}),Object(q.jsx)("p",{className:"pokemon-details__evolution-name",children:t})]})},F=function(e){var t=e.pokemon,n=e.closeModal,c=Object(a.useState)(null),o=Object(l.a)(c,2),s=o[0],r=o[1];return Object(a.useEffect)((function(){var e;t.evolution[0]&&(e=t.evolution[0],d("/pokemons/".concat(e))).then((function(e){r(e.data.pokemon)})).catch((function(){return window.alert("Pokemon was not found")}))}),[]),Object(q.jsx)("div",{className:"modal",children:Object(q.jsx)("div",{className:"container",children:Object(q.jsxs)("article",{className:"pokemon-details",children:[Object(q.jsx)(T,{closeModal:n}),Object(q.jsxs)("div",{className:"pokemon-details__evolutions",children:[Object(q.jsx)(E,{name:t.name,img:t.imageUrl}),s&&Object(q.jsx)(E,{name:s.name,img:s.imageUrl})]}),Object(q.jsx)(Y,{pokemon:t,closeModal:n,evolutionPokemon:s})]})})})},Z=function(e){var t=e.pokemon,n=Object(a.useState)(!1),c=Object(l.a)(n,2),o=c[0],s=c[1],r=t.imageUrl,i=t.name,m=t.type,u=t.level,d=Object(a.useCallback)((function(){return s(!1)}),[]);return Object(q.jsxs)(q.Fragment,{children:[o&&Object(q.jsx)(F,{pokemon:t,closeModal:d}),Object(q.jsx)("article",{className:"pokemon-card",children:Object(q.jsxs)("button",{type:"button",className:"pokemon-card__btn",onClick:function(){return s(!0)},children:[Object(q.jsx)("img",{src:r,alt:"of ".concat(i," pokemon"),className:"pokemon-card__image"}),Object(q.jsx)("h3",{className:"pokemon-card__name",children:i}),Object(q.jsxs)("p",{className:"pokemon-card__type",children:["Type:",Object(q.jsx)("span",{className:"pokemon-card__value",children:" ".concat(m)})]}),Object(q.jsxs)("p",{className:"pokemon-card__level",children:["Level:",Object(q.jsx)("span",{className:"pokemon-card__value",children:" ".concat(u)})]})]})})]})},U=function(e){var t=e.pokemons;return Object(q.jsx)("div",{className:"pokemons-list home-page__pokemons-list",children:t.length?Object(q.jsx)("ul",{className:"pokemons-list__list",children:t.map((function(e){return Object(q.jsx)("li",{className:"pokemons__item",children:Object(q.jsx)(Z,{pokemon:e})},e.id)}))}):Object(q.jsx)("div",{className:"pokemons-list__empty",children:window.ethereum?"The list is empty \ud83e\udd72":"Metamask was not detected \ud83e\udd72"})})},C=(n(36),function(e){var t=e.page,n=e.maxPages,a=e.updatePage;return Object(q.jsxs)("div",{className:"pokemons-btns",children:[Object(q.jsx)("button",{type:"button",className:N()("pokemons-btns__btn",{"pokemons-btns__btn--disabled":1===t}),onClick:function(){return a("dec")},children:"Prev"}),Object(q.jsx)("button",{type:"button",className:N()("pokemons-btns__btn",{"pokemons-btns__btn--disabled":t===n}),onClick:function(){return a("inc")},children:"Next"})]})}),G=(n(37),n.p+"static/media/loader.b17cae1e.png"),M=function(){return Object(q.jsxs)("div",{className:"loader",children:[Object(q.jsx)("img",{src:G,alt:"pokeball",className:"loader__img"}),Object(q.jsx)("h2",{className:"loader__text",children:"Loading"})]})},L=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(1),s=Object(l.a)(o,2),r=s[0],i=s[1],m=Object(a.useState)(0),u=Object(l.a)(m,2),b=u[0],j=u[1],p=Object(a.useState)(!0),h=Object(l.a)(p,2),f=h[0],k=h[1],g=Object(a.useCallback)((function(e){switch(e){case"inc":i((function(e){return e+1}));break;case"dec":i((function(e){return e-1}))}}),[]);return Object(a.useEffect)((function(){k(!0),function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return d("/pokemons?page=".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,"&limit=").concat(e))}(r).then((function(e){var t=e.data,n=e.total,a=e.results;c(t.pokemons),b||j(Math.ceil(n/a))})).catch((function(e){window.alert(e)})).finally((function(){k(!1)}))}),[r]),Object(q.jsx)("main",{className:"home-page",children:Object(q.jsxs)("div",{className:"container",children:[f&&Object(q.jsx)(M,{}),!f&&Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(U,{pokemons:n}),b>1&&Object(q.jsx)(C,{page:r,maxPages:b,updatePage:g})]})]})})},I=(n(38),function(){var e=Object(a.useContext)(y),t=e.pokemons,n=e.setPokemons,c=Object(a.useState)(!0),o=Object(l.a)(c,2),s=o[0],r=o[1],i=Object(a.useState)(1),m=Object(l.a)(i,2),u=m[0],d=m[1],b=Object(a.useState)(0),j=Object(l.a)(b,2),p=j[0],h=j[1],f=Object(a.useCallback)((function(e){switch(e){case"inc":d((function(e){return e+1}));break;case"dec":d((function(e){return e-1}))}}),[]);return Object(a.useEffect)((function(){r(!0),window.ethereum?window.ethereum.request({method:"eth_requestAccounts"}).then((function(e){g(e[0]).then((function(e){var t=e.data,a=e.total,c=e.results;n(t.pokemons),p||h(Math.ceil(a/c))})).catch((function(e){return window.alert(e.message)})).finally((function(){return r(!1)}))})):r(!1)}),[u]),Object(q.jsx)("main",{className:"user-pokemons-page",children:Object(q.jsxs)("div",{className:"container",children:[s&&Object(q.jsx)(M,{}),!s&&Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(U,{pokemons:t}),p>1&&Object(q.jsx)(C,{page:u,maxPages:p,updatePage:f})]})]})})}),B=(n(39),function(){return Object(q.jsx)("div",{children:"Not Found"})}),K=(n(40),n(41),function(e){var t=e.to,n=e.children;return Object(q.jsx)(r.c,{to:t,className:function(e){var t=e.isActive;return N()("nav__link",{"nav__link--active":t})},children:n})}),S=function(){return Object(q.jsx)("nav",{className:"nav",children:Object(q.jsxs)("ul",{className:"nav__list",children:[Object(q.jsx)("li",{className:"nav__item",children:Object(q.jsx)(K,{to:"/",children:"Pok\xe9mon List"})}),Object(q.jsx)("li",{className:"nav__item",children:Object(q.jsx)(K,{to:"/my-pokemons",children:"My pok\xe9mons"})})]})})},R=function(){return Object(q.jsxs)("header",{className:"header page__header",children:[Object(q.jsx)(r.b,{to:"/",children:Object(q.jsx)("img",{src:"data:image/png;base64,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",alt:"Pokemons logo",className:"header__logo"})}),Object(q.jsx)(S,{})]})},J=function(){return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("div",{className:"container",children:Object(q.jsx)(R,{})}),Object(q.jsxs)(i.c,{children:[Object(q.jsx)(i.a,{path:"/",element:Object(q.jsx)(L,{})}),Object(q.jsx)(i.a,{path:"/my-pokemons",element:Object(q.jsx)(w,{children:Object(q.jsx)(I,{})})}),Object(q.jsx)(i.a,{path:"*",element:Object(q.jsx)(B,{})})]})]})};s.a.render(Object(q.jsx)(r.a,{children:Object(q.jsx)(c.a.StrictMode,{children:Object(q.jsx)(J,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.64525aec.chunk.js.map