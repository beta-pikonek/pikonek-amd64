(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{807:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},864:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(801),o=(n(186),n(185));function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,c;return t=e,(n=[{key:"getServerLog",value:function(e){return new Promise((function(t,n){o.a.http({url:r.a.LOG_URL+"/"+e}).GET.then((function(e){t(e.data)})).catch((function(e){n(e)}))}))}}])&&a(t.prototype,n),c&&a(t,c),Object.defineProperty(t,"prototype",{writable:!1}),e}()},972:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));var r=n(1),o=n.n(r),a=n(932),c=n(933),i=n(948),l=n(949),u=n(950),f=n(951),s=n(284),p=n.n(s),y=(n(791),n(945)),b=n(864),m=n(664);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(c,e);var t,n,r,a=d(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).loading=function(){return o.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},t.getServerLog=function(e){null!=t.intervalLog&&void 0!==t.intervalLog||t.logService.getServerLog(e).then((function(n){t.setState({fetching:!0,logs:n},(function(){t.intervalLog=setInterval((function(){t.logService.getServerLog(e).then((function(e){t.setState({fetching:!0,logs:e})})).catch((function(e){console.error(e)}))}),1e4)}))})).catch((function(e){console.error(e)}))},t.clearServerLog=function(){clearInterval(t.intervalLog),t.intervalLog=null},t.logService=new b.a,t.state={fetching:!1,logs:"",logName:t.props.logName},t}return t=c,(n=[{key:"componentDidMount",value:function(){this.getServerLog(this.state.logName)}},{key:"componentWillUnmount",value:function(){this.clearServerLog()}},{key:"render",value:function(){var e=this.props,t=e.tabId;return e.logName,o.a.createElement(y.a,{tabId:t},o.a.createElement("div",{className:"animated fadeIn"},this.state.fetching?o.a.createElement(m.y,null,o.a.createElement(m.g,{lg:"12",className:"mt-2"},o.a.createElement("h5",null,"This log automatically refreshes every 10 seconds and shows only the last 15 lines.")),o.a.createElement(m.g,{lg:"12"},o.a.createElement("hr",null),o.a.createElement("pre",null,this.state.logs))):o.a.createElement(m.y,null,o.a.createElement(m.g,{className:"mt-4"},o.a.createElement("h1",null,"Fetching data. Please wait...")))))}}])&&g(t.prototype,n),r&&g(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(r.Component);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var j=["children"];function P(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=R(e);if(t){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return L(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(y,e);var t,n,r,s=N(y);function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(t=s.call(this,e)).toggle=t.toggle.bind(L(t)),t.state={activeTab:"1",logs:["dnsmasq","server","wpa","system"]},t}return t=y,(n=[{key:"componentDidMount",value:function(){}},{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,t=this.props;return t.children,P(t,j),this.state.logs,o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,null,o.a.createElement(c.a,null,o.a.createElement(i.a,{tabs:!0},o.a.createElement(l.a,null,o.a.createElement(u.a,{className:p()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"  DHCP")),o.a.createElement(l.a,null,o.a.createElement(u.a,{className:p()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"  PIKONEK")),o.a.createElement(l.a,null,o.a.createElement(u.a,{className:p()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},"  WIRELESS")),o.a.createElement(l.a,null,o.a.createElement(u.a,{className:p()({active:"4"===this.state.activeTab}),onClick:function(){e.toggle("4")}},"  SYSTEM"))),o.a.createElement(f.a,{activeTab:this.state.activeTab},o.a.createElement(O,{logName:"dnsmasq",tabId:"1"}),o.a.createElement(O,{logName:"server",tabId:"2"}),o.a.createElement(O,{logName:"wpa",tabId:"3"}),o.a.createElement(O,{logName:"system",tabId:"4"})))))}}])&&k(t.prototype,n),r&&k(t,r),Object.defineProperty(t,"prototype",{writable:!1}),y}(r.Component)}}]);