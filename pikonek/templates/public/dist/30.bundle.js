(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1116:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var o=n(1),r=n.n(o),a=n(1113),i=n(1114),c=n(1085),l=n(1086),u=n(1080),s=(n(803),n(811)),f=n.n(s),d=n(820);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=w(e);if(t){var r=w(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return h(this,n)}}function h(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(p,e);var t,n,o,s=b(p);function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this,e)).runUpdate=function(){f.a.fire({title:"Update",text:"Are you sure you want to update pikonek to its latest version?",cancelButtonText:"No",showCancelButton:!0,showLoaderOnConfirm:!0}).then((function(e){e.isConfirmed&&(e.value.error||t.setState({initiate:!0},t.eventsource()))}))},t.eventsource=function(){var e=document.getElementById("alInfo"),t=document.getElementById("alSuccess"),n=document.getElementById("alError"),o=document.getElementById("output"),r=document.getElementById("btnAction");if("function"!=typeof EventSource)return o.style.display="block",void(o.innerHTML="Updating to latest version is not supported with this browser!");var a=new EventSource("/api/machine/update");o.innerHTML="",o.style.display="block",e.style.display="block",t.style.display="none",n.style.display="none",a.addEventListener("message",(function(e){-1!==e.data.indexOf("Please reboot your system.")?(t.style.display="block",f.a.fire({icon:"success",text:"Successfully updated to latest version. Please reboot your machine.",showConfirmButton:!0}).then((function(){window.location.reload()})),a.close()):-1!==e.data.indexOf("xxxxx")&&(n.style.display="block",a.close(),f.a.fire({icon:"error",text:"Error updating to latest version please try again.",showConfirmButton:!0}).then((function(){window.location.reload()})));var r="";-1!==e.data.indexOf("<----")?(r+=e.data.replace("<----","[/]")+"\n",o.append(r)):-1!==e.data.indexOf("xxxxx")?(r+=e.data.replace("<----","[x]")+"\n",o.append(r)):(r+=e.data+"\n",o.append(r))}),!1),a.addEventListener("error",(function(){setTimeout((function(){e.style.display="none"}),2e3),a.close(),r.removeAttribute("disabled")}),!1)},t.state={log:"",initiate:!1},t}return t=p,(n=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(a.a,null,r.a.createElement(i.a,{lg:"12"},r.a.createElement(c.a,null,r.a.createElement(d.a.Consumer,null,(function(t){return t.license_status,t.need_reboot,t.checkReboot,t.reboot,r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{id:"btnAction",type:"button",className:"btn btn-success action-btn-wifi btn-lg btn-block",disabled:e.state.initiate,onClick:function(t){return e.runUpdate()}},"Update Now")),r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement(u.a,{id:"alInfo",color:"info",className:"mb-4 mt-4",style:{display:"none"}},"This may take a while. ",r.a.createElement("strong",null,"Please do not navigate away from or close this page.")),r.a.createElement(u.a,{id:"alSuccess",color:"success",className:"mb-4 mt-4",style:{display:"none"}},"Success!"),r.a.createElement(u.a,{id:"alError",color:"danger",className:"mb-4 mt-4",style:{display:"none"}},"Error!"),r.a.createElement("pre",{id:"output",style:{width:"100%",height:"100%",display:"none"}}))))})))))}}])&&y(t.prototype,n),o&&y(t,o),Object.defineProperty(t,"prototype",{writable:!1}),p}(o.Component)},822:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}}]);