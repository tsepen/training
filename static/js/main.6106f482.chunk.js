(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,n,t){e.exports=t(50)},50:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(18),i=t.n(a),c=t(25),l=t(52),u=t(54),s=t(53),d=t(21),f=function(){return r.a.createElement("div",null,"Header")},w=function(){return r.a.createElement("div",null,"Footer")},m=function(e){var n=e.title,t=e.children;return r.a.createElement(o.Fragment,null,r.a.createElement(d.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,n)),r.a.createElement(f,null),t,r.a.createElement(w,null))},E=function(){return r.a.createElement(m,{title:"\u041e\u0431\u0443\u0447\u0430\u043b\u043a\u0430 - \u0413\u043b\u0430\u0432\u043d\u0430\u044f"},"Home")},h=function(){return r.a.createElement(m,{title:"\u041e\u0431\u0443\u0447\u0430\u043b\u043a\u0430 - 404"},"404")},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var p=t(5),b=t(23),O=t(13),_=t(24),k=t.n(_),S={},y="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):function(e){return e},j=k()(),W=function(){var e=Object(p.c)({router:O.routerReducer}),n=y(Object(p.a)(Object(O.routerMiddleware)(j),b.a));return Object(p.d)(e,S,n)}();i.a.render(r.a.createElement(c.a,{store:W},r.a.createElement(function(){return r.a.createElement(l.a,{basename:"/training"},r.a.createElement(u.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:E}),r.a.createElement(s.a,{component:h})))},null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/training",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/training","/service-worker.js");v?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):g(n,e)})}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.6106f482.chunk.js.map