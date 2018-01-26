!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.scnnr=t()}(this,function(){"use strict";function e(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function t(e){return"[object Array]"===y.call(e)}function n(e){return null!==e&&"object"==typeof e}function r(e){return"[object Function]"===y.call(e)}function o(e,n){if(null!==e&&void 0!==e)if("object"==typeof e||t(e)||(e=[e]),t(e))for(var r=0,o=e.length;r<o;r++)n.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.call(null,e[i],i,e)}function i(){function e(e,n){t[n]="object"==typeof t[n]&&"object"==typeof e?i(t[n],e):e}for(var t={},n=0,r=arguments.length;n<r;n++)o(arguments[n],e);return t}function a(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function s(){this.message="String contains an invalid character"}function u(e,t){!w.isUndefined(e)&&w.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function c(){this.handlers=[]}function f(e){e.cancelToken&&e.cancelToken.throwIfRequested()}function l(e){this.defaults=e,this.interceptors={request:new O,response:new O}}function p(e){this.message=e}function h(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new D(e),t(n.reason))})}function d(e){var t=new U(e),n=g(U.prototype.request,t);return w.extend(n,U.prototype,t),w.extend(n,t),n}var m={url:"https://api.scnnr.cubki.jp/",version:"v1",timeout:null,apiKey:null},g=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},y=Object.prototype.toString,w={isArray:t,isArrayBuffer:function(e){return"[object ArrayBuffer]"===y.call(e)},isBuffer:function(t){return null!=t&&(e(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&e(t.slice(0,0))}(t)||!!t._isBuffer)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:n,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===y.call(e)},isFile:function(e){return"[object File]"===y.call(e)},isBlob:function(e){return"[object Blob]"===y.call(e)},isFunction:r,isStream:function(e){return n(e)&&r(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:o,merge:i,extend:function(e,t,n){return o(t,function(t,r){e[r]=n&&"function"==typeof t?g(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}},v=function(e,t,n,r,o){return function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}(new Error(e),t,n,r,o)},b=w.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(r.setAttribute("href",t),t=r.href),r.setAttribute("href",t),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");return t=e(window.location.href),function(n){var r=w.isString(n)?e(n):n;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0},E="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";(s.prototype=new Error).code=5,s.prototype.name="InvalidCharacterError";var C=function(e){for(var t,n,r=String(e),o="",i=0,a=E;r.charAt(0|i)||(a="=",i%1);o+=a.charAt(63&t>>8-i%1*8)){if((n=r.charCodeAt(i+=.75))>255)throw new s;t=t<<8|n}return o},R=w.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),w.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),w.isString(r)&&a.push("path="+r),w.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},j="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||C,S=function(e){return new Promise(function(t,n){var r=e.data,o=e.headers;w.isFormData(r)&&delete o["Content-Type"];var i=new XMLHttpRequest,s="onreadystatechange",u=!1;if("test"===process.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in i||b(e.url)||(i=new window.XDomainRequest,s="onload",u=!0,i.onprogress=function(){},i.ontimeout=function(){}),e.auth){o.Authorization="Basic "+j((e.auth.username||"")+":"+(e.auth.password||""))}if(i.open(e.method.toUpperCase(),function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(w.isURLSearchParams(t))r=t.toString();else{var o=[];w.forEach(t,function(e,t){null!==e&&void 0!==e&&(w.isArray(e)&&(t+="[]"),w.isArray(e)||(e=[e]),w.forEach(e,function(e){w.isDate(e)?e=e.toISOString():w.isObject(e)&&(e=JSON.stringify(e)),o.push(a(t)+"="+a(e))}))}),r=o.join("&")}return r&&(e+=(-1===e.indexOf("?")?"?":"&")+r),e}(e.url,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,i[s]=function(){if(i&&(4===i.readyState||u)&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in i?function(e){var t,n,r,o={};return e?(w.forEach(e.split("\n"),function(e){r=e.indexOf(":"),t=w.trim(e.substr(0,r)).toLowerCase(),n=w.trim(e.substr(r+1)),t&&(o[t]=o[t]?o[t]+", "+n:n)}),o):o}(i.getAllResponseHeaders()):null;!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(v("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}(t,n,{data:e.responseType&&"text"!==e.responseType?i.response:i.responseText,status:1223===i.status?204:i.status,statusText:1223===i.status?"No Content":i.statusText,headers:r,config:e,request:i}),i=null}},i.onerror=function(){n(v("Network Error",e,null,i)),i=null},i.ontimeout=function(){n(v("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",i)),i=null},w.isStandardBrowserEnv()){var c=R,f=(e.withCredentials||b(e.url))&&e.xsrfCookieName?c.read(e.xsrfCookieName):void 0;f&&(o[e.xsrfHeaderName]=f)}if("setRequestHeader"in i&&w.forEach(o,function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:i.setRequestHeader(t,e)}),e.withCredentials&&(i.withCredentials=!0),e.responseType)try{i.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){i&&(i.abort(),n(e),i=null)}),void 0===r&&(r=null),i.send(r)})},k={"Content-Type":"application/x-www-form-urlencoded"},P={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=S:"undefined"!=typeof process&&(e=S),e}(),transformRequest:[function(e,t){return function(e,t){w.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}(t,"Content-Type"),w.isFormData(e)||w.isArrayBuffer(e)||w.isBuffer(e)||w.isStream(e)||w.isFile(e)||w.isBlob(e)?e:w.isArrayBufferView(e)?e.buffer:w.isURLSearchParams(e)?(u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):w.isObject(e)?(u(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};P.headers={common:{Accept:"application/json, text/plain, */*"}},w.forEach(["delete","get","head"],function(e){P.headers[e]={}}),w.forEach(["post","put","patch"],function(e){P.headers[e]=w.merge(k)});var T=P;c.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},c.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},c.prototype.forEach=function(e){w.forEach(this.handlers,function(t){null!==t&&e(t)})};var O=c,x=function(e,t,n){return w.forEach(n,function(n){e=n(e,t)}),e},A=function(e){return!(!e||!e.__CANCEL__)},B=function(e){f(e),e.headers=e.headers||{},e.data=x(e.data,e.headers,e.transformRequest),e.headers=w.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),w.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});return(e.adapter||T.adapter)(e).then(function(t){return f(e),t.data=x(t.data,t.headers,e.transformResponse),t},function(t){return A(t)||(f(e),t&&t.response&&(t.response.data=x(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})};l.prototype.request=function(e){"string"==typeof e&&(e=w.merge({url:arguments[0]},arguments[1])),(e=w.merge(T,this.defaults,{method:"get"},e)).method=e.method.toLowerCase(),e.baseURL&&!function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}(e.url)&&(e.url=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e.baseURL,e.url));var t=[B,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},w.forEach(["delete","get","head","options"],function(e){l.prototype[e]=function(t,n){return this.request(w.merge(n||{},{method:e,url:t}))}}),w.forEach(["post","put","patch"],function(e){l.prototype[e]=function(t,n,r){return this.request(w.merge(r||{},{method:e,url:t,data:n}))}});var U=l;p.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},p.prototype.__CANCEL__=!0;var D=p;h.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},h.source=function(){var e;return{token:new h(function(t){e=t}),cancel:e}};var L=h,_=d(T);_.Axios=U,_.create=function(e){return d(w.merge(T,e))},_.Cancel=D,_.CancelToken=L,_.isCancel=A,_.all=function(e){return Promise.all(e)},_.spread=function(e){return function(t){return e.apply(null,t)}};var q=_;q.default=_;var N=q,F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),I=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},H=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(){function e(t){var n=t.url,r=t.apiKey,o=t.params,i=t.onUploadProgress,a=t.onDownloadProgress;F(this,e);var s={};r&&(s["x-api-key"]=r),this.httpClient=N.create({params:o,headers:s,baseURL:n,onUploadProgress:i,onDownloadProgress:a})}return z(e,[{key:"get",value:function(e){return this.httpClient.get(e,null)}},{key:"sendJson",value:function(e,t){return this.send(e,t,"application/json")}},{key:"sendBinary",value:function(e,t){return this.send(e,t,"application/octet-stream")}},{key:"send",value:function(e,t,n){return this.httpClient.post(e,t,{headers:{"Content-Type":n}})}}]),e}(),X=function e(t){F(this,e),this.category=t.category,this.boundingBox=t.boundingBox||t.bounding_box,this.labels=t.labels},J=function e(t){var n=t.width,r=t.height;F(this,e),this.width=n,this.height=r},V=function e(t){var n=t.url,r=t.size;F(this,e),this.url=n,this.size=new J(r)};V.Size=J;var $=function(){function e(t){var n=t.id,r=t.objects,o=t.state,i=t.image,a=t.error;F(this,e),this.id=n,this.objects=(r||[]).map(function(e){return new X(e)}),this.state=o,null!=i&&(this.image=new V(i)),this.error=a}return z(e,[{key:"isFinished",value:function(){return"finished"===this.state}}]),e}();$.Item=X,$.Image=V;var M=function(e){function t(e){F(this,t);var n=H(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.name="PreconditionFailed",Error.hasOwnProperty("captureStackTrace")?Error.captureStackTrace(n,t):n.stack=(new Error).stack,n}return I(t,e),t}(Error),G=function(e){function t(e){F(this,t);var n=H(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.name="PollTimeout",Error.hasOwnProperty("captureStackTrace")?Error.captureStackTrace(n,t):n.stack=(new Error).stack,n}return I(t,e),t}(Error),Q=Object.freeze({PreconditionFailed:M,PollTimeout:G}),W=function(){function e(t){F(this,e),this.config=Object.assign({},m,t)}return z(e,[{key:"recognizeURL",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.connection(!0,t).sendJson("/remote/recognitions",{url:e}).then(this.handleResponse);return this.pollingRecognize(n,t.timeout)}},{key:"recognizeImage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={public:t.public},r=Object.assign({},t,{params:n}),o=this.connection(!0,r).sendBinary("/recognitions",e).then(this.handleResponse);return this.pollingRecognize(o,r.timeout)}},{key:"pollingRecognize",value:function(e,t){var n=this;return new Promise(function(r,o){e.then(function(e){return t>0&&!e.isFinished()?n.poll(e.id,t,r,o):r(e)}).catch(o)})}},{key:"fetch",value:function(e){return this.connection(!1,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).get("/recognitions/"+e).then(this.handleResponse)}},{key:"poll",value:function(e,t,n,r){var o=this,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:100,a=(new Date).getTime();this.fetch(e).then(function(s){if(!s.isFinished()){var u=((new Date).getTime()-a)/1e3,c=t-u;if(c<=0)return r(new G("Polling for "+e+" timed out"));var f=c-i/1e3<=0?1e3*c:i;return setTimeout(function(){return o.poll.call(o,e,c,n,r,1.5*i)},f)}return n(s)}).catch(r)}},{key:"handleResponse",value:function(e){return new $(e.data)}},{key:"connection",value:function(e,t){return new K(this.connectionConfig(e,t))}},{key:"connectionConfig",value:function(e,t){var n=Object.assign({},this.config,t),r=function(e){return"string"!=typeof e?null:""===(e=e.replace(/^\s*/,"").replace(/\s*$/,""))?null:e}(n.apiKey);if(e&&null==r)throw new M("`apiKey` configuration is required.");var o=t.params||{};return(n.timeout||0)>0&&(o.timeout=n.timeout),{apiKey:r,params:o,url:n.url+n.version,onUploadProgress:n.onUploadProgress,onDownloadProgress:n.onDownloadProgress}}}]),e}();return Object.assign(function(e){return new W(e)},{Client:W,Connection:K,Recognition:$},Q)});
