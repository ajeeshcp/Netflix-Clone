(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{55:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},65:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),i=a(18),n=a.n(i),l=a(7),r=a(27),o=a(5),j=(a(55),a(100)),d=a(99),b=(a(56),a(1));var u=function(){return Object(b.jsxs)("div",{className:"footer-wrapper",children:[Object(b.jsx)("img",{className:"footer-img",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:""}),Object(b.jsx)("h5",{className:"footer-text",children:"Netflix clone created by Ajeesh"}),Object(b.jsx)("p",{children:"Copyrights \xa9 2021"})]})},h=(a(58),a(101)),p=a(102),m=Object(c.createContext)(),x=function(){var e=Object(c.useContext)(m),t=Object(o.e)();return Object(b.jsx)("div",{className:"navbar pt-0",children:Object(b.jsx)(h.a,{fixed:"top",collapseOnSelect:!0,expand:"lg",variant:"dark",className:"w-100 p-2 navbar-section",children:Object(b.jsxs)(d.a,{className:"nav-section",children:[Object(b.jsx)(h.a.Brand,{href:"",children:Object(b.jsx)("img",{onClick:function(){t.push("/")},className:"nav-img",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:""})}),Object(b.jsx)(h.a.Toggle,{"aria-controls":"responsive-navbar-nav",className:"shadow-none border-0"}),Object(b.jsxs)(h.a.Collapse,{id:"responsive-navbar-nav",children:[Object(b.jsxs)(p.a,{className:"me-auto mt-3",children:[Object(b.jsx)(p.a.Link,{href:"",className:"mx-3",children:Object(b.jsx)("p",{className:"nav-item",onClick:function(){t.push("/popular")},children:"Popular"})}),Object(b.jsx)(p.a.Link,{href:"",className:"mx-3",children:Object(b.jsx)("p",{className:"nav-item",onClick:function(){t.push("/toprated")},children:"Top Rated"})}),Object(b.jsx)(p.a.Link,{href:"",className:"mx-3",children:Object(b.jsx)("p",{className:"nav-item",onClick:function(){t.push("/upcoming")},children:"Upcoming "})}),Object(b.jsx)(p.a.Link,{href:"",className:"mx-3",children:Object(b.jsx)("p",{className:"nav-item",onClick:function(){t.push("/trending")},children:"Trending"})})]}),Object(b.jsx)(p.a,{children:O(Object(o.f)().pathname)?Object(b.jsx)(p.a.Link,{href:"",className:"mx-3",children:Object(b.jsxs)("div",{className:"search-item",children:[Object(b.jsx)("i",{className:"bi bi-search"}),Object(b.jsx)("input",{type:"text",className:"input-text",onChange:function(t){" "!==t.target.value&&e(t.target.value)}}),Object(b.jsx)("button",{className:"btn-search",onClick:function(){t.push("/searching")},children:"Search"})]})}):null})]})]})})})},O=function(e){switch(e){case"/":return!0;default:return null}},g=(a(65),a(48)),v="5b221cba4bcf0c692380b539717e8150",f="https://image.tmdb.org/t/p/original",N=a.n(g).a.create({baseURL:"https://api.themoviedb.org/3"}),k=a(19);var y=function(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),s=a[0],i=a[1],n=Object(c.useState)(""),r=Object(l.a)(n,2),o=r[0],h=r[1],p=Object(c.useState)(),m=Object(l.a)(p,2),O=m[0],g=m[1],y=e.url,_=e.title;return Object(c.useEffect)((function(){N.get("".concat(y)).then((function(e){i(e.data.results)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{}),Object(b.jsxs)("div",{className:"popular-section",style:{textAlign:"center"},children:[Object(b.jsx)("h2",{className:"popular-title px-5",children:_}),Object(b.jsx)("div",{className:"image-wrapper d-flex flex-wrap px-5",children:s?s.map((function(e){return Object(b.jsxs)("div",{className:"pop-images",children:[Object(b.jsx)("img",{className:"img-item flex-wrap me-3 mt-3 flex-grow-1 ",src:"".concat(f+e.backdrop_path),alt:"Loading.."}),Object(b.jsxs)("div",{className:"image-text",children:[Object(b.jsx)("i",{className:"bi bi-play-circle",onClick:function(){var t;g(e),t=e.id,N.get("movie/".concat(t,"/videos?api_key=").concat(v,"&language=en-US")).then((function(e){0!==e.data.results.length?h(e.data.results[0].key):alert("Trialer is not availbe")})),window.scrollTo({top:0,behavior:"smooth"})}}),Object(b.jsx)("h2",{className:"pop-title",children:e.title?e.title:" "}),Object(b.jsx)("p",{children:e.overview?e.overview.substring(0,50):""})]})]},e.id)})):Object(b.jsx)(j.a,{animation:"border"})}),O?Object(b.jsx)("div",{className:"trailer-wrap",children:Object(b.jsxs)("div",{className:"popup-trailer",children:[Object(b.jsxs)("div",{className:"pop-banner",style:{backgroundImage:"url(".concat(O?f+O.backdrop_path:" ",")")},children:[Object(b.jsx)("i",{className:"bi bi-x-circle-fill",onClick:function(){g()}}),Object(b.jsxs)("div",{className:"trailer-content",children:[Object(b.jsxs)("h2",{className:"trailer-title",children:[O?O.title:"Loading..."," "]}),Object(b.jsxs)("h3",{className:"my-4",children:["Release Date : ",O?O.release_date:"Loading..."]}),Object(b.jsx)("p",{className:"trailer-desc",children:O?O.overview:"Loading..."})]})]}),Object(b.jsx)(d.a,{children:o&&Object(b.jsx)(k.a,{videoId:o,opts:{height:"390",width:"100%",playerVars:{autoplay:0}},className:"my-5 youtube"})})]})}):Object(b.jsx)(j.a,{style:{color:"red",margin:"10px 0"},animation:"border"})]}),Object(b.jsx)(u,{})]})};a(95);var _=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(""),n=Object(l.a)(i,2),r=n[0],o=n[1];return Object(c.useEffect)((function(){N.get("trending/all/week?api_key=".concat(v,"&language=en-US")).then((function(e){var t=Math.floor(21*Math.random());s(e.data.results[t])}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"banner",style:{backgroundImage:"url(".concat(a?f+a.backdrop_path:" ",")")},children:Object(b.jsx)(d.a,{children:Object(b.jsxs)("div",{className:"content container-fluid",children:[Object(b.jsx)("div",{className:"title",children:a?a.name||a.title:"Loading.."}),Object(b.jsx)("div",{className:"description",children:a?a.overview.substring(0,150)+" .......":"Loading.."}),Object(b.jsxs)("div",{className:"banner-buttons",children:[Object(b.jsxs)("button",{className:"button",onClick:function(){var e;e=a.id,N.get("movie/".concat(e,"/videos?api_key=").concat(v,"&language=en-US")).then((function(e){0!==e.data.results.length?o(e.data.results[0].key):alert("Trialer is not availbe")}))},children:[Object(b.jsx)("i",{className:"bi bi-play-fill banner-i"}),"Play"]}),Object(b.jsxs)("button",{className:"button",children:[Object(b.jsx)("i",{className:"bi bi-plus-lg  banner-i"}),"My list"]})]})]})})}),Object(b.jsx)(d.a,{children:r&&Object(b.jsx)(k.a,{videoId:r,opts:{height:"390",width:"100%",playerVars:{autoplay:1}},className:"mt-4"})})]})};a(96);var w=function(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),s=a[0],i=a[1],n=Object(c.useState)(""),r=Object(l.a)(n,2),o=r[0],j=r[1],u=e.title,h=e.url,p=e.isSmall;return Object(c.useEffect)((function(){N.get("".concat(h)).then((function(e){i(e.data.results)}))}),[]),Object(b.jsxs)("div",{className:"row-post ",children:[Object(b.jsx)("h3",{className:"poster-title",children:u}),Object(b.jsx)("div",{className:"posters",children:s.map((function(e){return Object(b.jsxs)("div",{className:"image-wrapper",onClick:function(){var t;t=e.id,N.get("movie/".concat(t,"/videos?api_key=").concat(v,"&language=en-US")).then((function(e){0!==e.data.results.length?j(e.data.results[0].key):alert("Trialer is not availbe")}))},children:[Object(b.jsx)("img",{className:p?"small-poster img-fluid":"poster img-fluid",src:"".concat(f+e.backdrop_path),alt:"Netflix"}),Object(b.jsxs)("div",{className:"img-text-container",children:[Object(b.jsx)("h3",{className:"img-title",children:e?e.title||e.name:" "}),Object(b.jsx)("p",{className:"img-description",children:e?e.overview.substring(0,30)+" .. ":" "})]})]},e.id)}))}),Object(b.jsx)(d.a,{children:o&&Object(b.jsx)(k.a,{videoId:o,opts:{height:"390",width:"100%",playerVars:{autoplay:0}},className:"mt-4"})})]})},S="5b221cba4bcf0c692380b539717e8150",C="/discover/tv?api_key=".concat(S,"&with_networks=213"),L="/discover/movie?api_key=".concat(S,"&with_genres=28"),U="/discover/movie?api_key=".concat(S,"&with_genres=35"),T="discover/movie?api_key=".concat(S,"&with_genres=10749"),M="discover/movie?api_key=".concat(S,"&with_genres=99"),I="discover/movie?api_key=".concat(S,"&with_genres=27"),R="movie/popular?api_key=".concat(S,"&language=en-US&page=1"),A="movie/top_rated?api_key=".concat(S,"&language=en-US&page=1"),E="movie/upcoming?api_key=".concat(S,"&language=en-US&page=2"),P="trending/all/day?api_key=".concat(S);var V=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{}),Object(b.jsx)(_,{}),Object(b.jsx)(w,{title:"Netflix Originals",url:C}),Object(b.jsx)(w,{title:"Action Movies",url:L,isSmall:!0}),Object(b.jsx)(w,{title:"Romance",url:T}),Object(b.jsx)(w,{title:"Documentaries",url:M,isSmall:!0}),Object(b.jsx)(w,{title:"Horror",url:I}),Object(b.jsx)(w,{title:"Comedy",url:U,isSmall:!0}),Object(b.jsx)(u,{})]})};var B=function(){var e=Object(c.useState)(" "),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(m.Provider,{value:s,children:Object(b.jsx)(V,{})})}),Object(b.jsx)(o.a,{path:"/popular",children:Object(b.jsx)(y,{url:R,title:"Popular Movies"})}),Object(b.jsx)(o.a,{path:"/toprated",children:Object(b.jsx)(y,{url:A,title:"Top Rated"})}),Object(b.jsx)(o.a,{path:"/upcoming",children:Object(b.jsx)(y,{url:E,title:"Upcoming Movies"})}),Object(b.jsx)(o.a,{path:"/trending",children:Object(b.jsx)(y,{url:P,title:"Trending"})}),Object(b.jsx)(o.a,{path:"/searching",children:Object(b.jsx)(y,{url:"search/multi?api_key=".concat(v,"&language=en-US&query=").concat(a,"&page=1&include_adult=false"),title:a})})]})})};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.288d3a25.chunk.js.map