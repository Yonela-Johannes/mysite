import{r as N}from"./react.6bac1629.js";import{p as B}from"./prop-types.c466925a.js";import{s as I}from"./shallowequal.ea8d8004.js";var _={};function S(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var x=N.exports,Y=S(x),z=S(I);function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var G=!!(typeof window!="undefined"&&window.document&&window.document.createElement);function H(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n!="undefined"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(o){return o.displayName||o.name||"Component"}return function(i){if(typeof i!="function")throw new Error("Expected WrappedComponent to be a React component.");var f=[],c;function l(){c=e(f.map(function(O){return O.props})),u.canUseDOM?t(c):n&&(c=n(c))}var u=function(O){F(d,O);function d(){return O.apply(this,arguments)||this}d.peek=function(){return c},d.rewind=function(){if(d.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var v=c;return c=void 0,f=[],v};var y=d.prototype;return y.shouldComponentUpdate=function(v){return!z(v,this.props)},y.componentWillMount=function(){f.push(this),l()},y.componentDidUpdate=function(){l()},y.componentWillUnmount=function(){var v=f.indexOf(this);f.splice(v,1),l()},y.render=function(){return Y.createElement(i,this.props)},d}(x.Component);return P(u,"displayName","SideEffect("+r(i)+")"),P(u,"canUseDOM",G),u}}var Q=H,m={};Object.defineProperty(m,"__esModule",{value:!0});var V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};m.clone=X;m.defaults=U;m.forEach=Z;function X(e){var t=e.title,n=e.description,r=e.base,o=e.canonical,i=e.meta,f=e.link,c=e.auto;try{return JSON.parse(JSON.stringify({title:t,description:n,base:r,canonical:o,meta:i,link:f,auto:c}))}catch{return{}}}function U(e,t){return Object.keys(t).reduce(function(n,r){return e.hasOwnProperty(r)?V(e[r])==="object"&&!Array.isArray(e[r])&&e[r]&&U(e[r],t[r]):e[r]=t[r],e},e)}function Z(e,t){e&&e.length&&Array.prototype.slice.call(e).forEach(t)}var h={};Object.defineProperty(h,"__esModule",{value:!0});h.canUseDOM=void 0;h.removeDocumentMeta=A;h.insertDocumentMeta=K;var j=m;function $(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n}h.canUseDOM=!!(typeof window!="undefined"&&window.document&&window.document.createElement);function k(e){e.parentNode.removeChild(e)}function A(){(0,j.forEach)(document.querySelectorAll("head [data-rdm]"),k)}function C(e){var t=e.tagName,n=$(e,["tagName"]),r=document.createElement(t);for(var o in n)e.hasOwnProperty(o)&&r.setAttribute(o,e[o]);r.setAttribute("data-rdm",""),document.getElementsByTagName("head")[0].appendChild(r)}function K(e){A(),(0,j.forEach)(e,C)}Object.defineProperty(_,"__esModule",{value:!0});var L=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};_.render=q;var R=N.exports,s=E(R),ee=B.exports,a=E(ee),te=Q,ne=E(te),g=m,D=h;function E(e){return e&&e.__esModule?e:{default:e}}function re(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oe(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function ae(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function ie(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ue(e){for(var t={},n={title:void 0,description:void 0,canonical:void 0},r=!0,o=function(){r=e[i].hasOwnProperty("extend");var c=e[i],l=(0,g.clone)(e[i]);["title","description","canonical"].forEach(function(u){c.hasOwnProperty(u)&&(typeof c[u]=="function"?n[u]=c[u](n[u]):n[u]===void 0&&(n[u]=c[u]))}),(0,g.defaults)(t,l)},i=e.length-1;r&&i>=0;i--)o();return typeof n.title=="string"&&(t.title=n.title),typeof n.description=="string"&&(0,g.defaults)(t,{meta:{name:{description:n.description}}}),typeof n.canonical=="string"&&(0,g.defaults)(t,{link:{rel:{canonical:n.canonical}}}),t.auto&&t.auto.ograph&&ce(t),t}function fe(e){D.canUseDOM&&(typeof e.title=="string"&&(document.title=e.title),(0,D.insertDocumentMeta)(W(e)))}function ce(e){e.meta||(e.meta={}),e.meta.property||(e.meta.property={});var t=e.meta.property;return t&&(e.title&&!t["og:title"]&&(t["og:title"]=e.title),e.hasOwnProperty("description")&&!t["og:description"]&&(t["og:description"]=e.description),e.hasOwnProperty("canonical")&&!t["og:url"]&&(t["og:url"]=e.canonical)),e}function T(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[],r=e==="link"?"href":"content";return Object.keys(t).forEach(function(o){var i=t[o];if(typeof i=="string"){n.push(w({tagName:e},o,i));return}Object.keys(i).forEach(function(f){var c=Array.isArray(i[f])?i[f]:[i[f]];c.forEach(function(l){if(l!==null){var u;n.push((u={tagName:e},w(u,o,f),w(u,r,l),u))}})})}),n}function W(e){return[].concat(T("meta",e.meta),T("link",e.link))}function q(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=0,n=[];function r(o){var i=o.tagName,f=ie(o,["tagName"]);return i==="meta"?s.default.createElement("meta",M({},f,{key:t++,"data-rdm":!0})):i==="link"?s.default.createElement("link",M({},f,{key:t++,"data-rdm":!0})):null}return e.title&&n.push(s.default.createElement("title",{key:t++},e.title)),W(e).reduce(function(o,i){return o.push(r(i)),o},n)}var J=function(e){ae(t,e);function t(){return re(this,t),oe(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return L(t,[{key:"render",value:function(){var r=this.props.children,o=s.default.Children.count(r);return o===1?s.default.Children.only(r):o?s.default.createElement("div",null,this.props.children):null}}]),t}(R.Component);J.propTypes={title:a.default.oneOfType([a.default.string,a.default.func]),description:a.default.oneOfType([a.default.string,a.default.func]),canonical:a.default.oneOfType([a.default.string,a.default.func]),base:a.default.string,meta:a.default.objectOf(a.default.oneOfType([a.default.string,a.default.objectOf(a.default.oneOfType([a.default.string,a.default.arrayOf(a.default.string)]))])),link:a.default.objectOf(a.default.objectOf(a.default.oneOfType([a.default.string,a.default.arrayOf(a.default.string)]))),auto:a.default.objectOf(a.default.bool)};var b=(0,ne.default)(ue,fe)(J);b.renderAsReact=function(){return q(b.rewind())};var se=_.default=b;export{se as _};
