(self.webpackChunk_orgajs_website=self.webpackChunk_orgajs_website||[]).push([[288],{50120:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}r.d(e,{Z:function(){return n}})},63265:function(t,e,r){"use strict";var n=r(7914);e.Z=void 0;var i,o=n(r(94647)),a=n(r(4700)),u=n(r(15600)),s=n(r(2398)),c=n(r(27378)),f=n(r(23615)),l=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],d=function(t){var e=(0,s.default)({},t),r=e.resolutions,n=e.sizes,i=e.critical;return r&&(e.fixed=r,delete e.resolutions),n&&(e.fluid=n,delete e.sizes),i&&(e.loading="eager"),e.fluid&&(e.fluid=S([].concat(e.fluid))),e.fixed&&(e.fixed=S([].concat(e.fixed))),e},p=function(t){var e=t.media;return!!e&&(y&&!!window.matchMedia(e).matches)},h=function(t){var e=t.fluid,r=t.fixed,n=g(e||r||[]);return n&&n.src},g=function(t){if(y&&function(t){return!!t&&Array.isArray(t)&&t.some((function(t){return void 0!==t.media}))}(t)){var e=t.findIndex(p);if(-1!==e)return t[e];var r=t.findIndex((function(t){return void 0===t.media}));if(-1!==r)return t[r]}return t[0]},v=Object.create({}),b=function(t){var e=d(t),r=h(e);return v[r]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,x=y&&window.IntersectionObserver,w=new WeakMap;function j(t){return t.map((function(t){var e=t.src,r=t.srcSet,n=t.srcSetWebp,i=t.media,o=t.sizes;return c.default.createElement(c.default.Fragment,{key:e},n&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:o}),r&&c.default.createElement("source",{media:i,srcSet:r,sizes:o}))}))}function S(t){var e=[],r=[];return t.forEach((function(t){return(t.media?e:r).push(t)})),[].concat(e,r)}function O(t){return t.map((function(t){var e=t.src,r=t.media,n=t.tracedSVG;return c.default.createElement("source",{key:e,media:r,srcSet:n})}))}function _(t){return t.map((function(t){var e=t.src,r=t.media,n=t.base64;return c.default.createElement("source",{key:e,media:r,srcSet:n})}))}function E(t,e){var r=t.srcSet,n=t.srcSetWebp,i=t.media,o=t.sizes;return"<source "+(e?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(e?n:r)+'" '+(o?'sizes="'+o+'" ':"")+"/>"}var k=function(t,e){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(t){t.forEach((function(t){if(w.has(t.target)){var e=w.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(i.unobserve(t.target),w.delete(t.target),e())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(t),w.set(t,e)),function(){r.unobserve(t),w.delete(t)}},z=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',r=t.sizes?'sizes="'+t.sizes+'" ':"",n=t.srcSet?'srcset="'+t.srcSet+'" ':"",i=t.title?'title="'+t.title+'" ':"",o=t.alt?'alt="'+t.alt+'" ':'alt="" ',a=t.width?'width="'+t.width+'" ':"",u=t.height?'height="'+t.height+'" ':"",s=t.crossOrigin?'crossorigin="'+t.crossOrigin+'" ':"",c=t.loading?'loading="'+t.loading+'" ':"",f=t.draggable?'draggable="'+t.draggable+'" ':"";return"<picture>"+t.imageVariants.map((function(t){return(t.srcSetWebp?E(t,!0):"")+E(t)})).join("")+"<img "+c+a+u+r+n+e+o+i+s+f+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=c.default.forwardRef((function(t,e){var r=t.src,n=t.imageVariants,i=t.generateSources,o=t.spreadProps,a=t.ariaHidden,u=c.default.createElement(I,(0,s.default)({ref:e,src:r},o,{ariaHidden:a}));return n.length>1?c.default.createElement("picture",null,i(n),u):u})),I=c.default.forwardRef((function(t,e){var r=t.sizes,n=t.srcSet,i=t.src,o=t.style,a=t.onLoad,f=t.onError,d=t.loading,p=t.draggable,h=t.ariaHidden,g=(0,u.default)(t,l);return c.default.createElement("img",(0,s.default)({"aria-hidden":h,sizes:r,srcSet:n,src:i},g,{onLoad:a,onError:f,ref:e,loading:d,draggable:p,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))}));I.propTypes={style:f.default.object,onError:f.default.func,onLoad:f.default.func};var L=function(t){function e(e){var r;(r=t.call(this,e)||this).seenBefore=y&&b(e),r.isCritical="eager"===e.loading||e.critical,r.addNoScript=!(r.isCritical&&!e.fadeIn),r.useIOSupport=!m&&x&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||y&&(m||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&e.fadeIn,isHydrated:!1},r.imageRef=c.default.createRef(),r.placeholderRef=e.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)(r)),r.handleRef=r.handleRef.bind((0,o.default)(r)),r}(0,a.default)(e,t);var r=e.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(t){var e=this;this.useIOSupport&&t&&(this.cleanUpListeners=k(t,(function(){var t=b(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:t}),e.setState({isVisible:!0},(function(){e.setState({imgLoaded:t,imgCached:!(!e.imageRef.current||!e.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var t,e,r;t=this.props,e=d(t),(r=h(e))&&(v[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var t=d(this.props),e=t.title,r=t.alt,n=t.className,i=t.style,o=void 0===i?{}:i,a=t.imgStyle,u=void 0===a?{}:a,f=t.placeholderStyle,l=void 0===f?{}:f,p=t.placeholderClassName,h=t.fluid,v=t.fixed,b=t.backgroundColor,m=t.durationFadeIn,y=t.Tag,x=t.itemProp,w=t.loading,S=t.draggable,E=h||v;if(!E)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,s.default)({opacity:k?1:0,transition:L?"opacity "+m+"ms":"none"},u),A="boolean"==typeof b?"lightgray":b,Z={transitionDelay:m+"ms"},P=(0,s.default)({opacity:this.state.imgLoaded?0:1},L&&Z,u,l),N={title:e,alt:this.state.isVisible?"":r,style:P,className:p,itemProp:x},V=this.state.isHydrated?g(E):E[0];if(h)return c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:V.maxWidth?V.maxWidth+"px":null,maxHeight:V.maxHeight?V.maxHeight+"px":null},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),A&&c.default.createElement(y,{"aria-hidden":!0,title:e,style:(0,s.default)({backgroundColor:A,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&Z)}),V.base64&&c.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:N,imageVariants:E,generateSources:_}),V.tracedSVG&&c.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:N,imageVariants:E,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,j(E),c.default.createElement(I,{alt:r,title:e,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:w,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,s.default)({alt:r,title:e,loading:w},V,{imageVariants:E}))}}));if(v){var T=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},o);return"inherit"===o.display&&delete T.display,c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},A&&c.default.createElement(y,{"aria-hidden":!0,title:e,style:(0,s.default)({backgroundColor:A,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},L&&Z)}),V.base64&&c.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:N,imageVariants:E,generateSources:_}),V.tracedSVG&&c.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:N,imageVariants:E,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,j(E),c.default.createElement(I,{alt:r,title:e,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:w,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,s.default)({alt:r,title:e,loading:w},V,{imageVariants:E}))}}))}return null},e}(c.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=f.default.shape({width:f.default.number.isRequired,height:f.default.number.isRequired,src:f.default.string.isRequired,srcSet:f.default.string.isRequired,base64:f.default.string,tracedSVG:f.default.string,srcWebp:f.default.string,srcSetWebp:f.default.string,media:f.default.string}),A=f.default.shape({aspectRatio:f.default.number.isRequired,src:f.default.string.isRequired,srcSet:f.default.string.isRequired,sizes:f.default.string.isRequired,base64:f.default.string,tracedSVG:f.default.string,srcWebp:f.default.string,srcSetWebp:f.default.string,media:f.default.string,maxWidth:f.default.number,maxHeight:f.default.number});function Z(t){return function(e,r,n){var i;if(!e.fixed&&!e.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");f.default.checkPropTypes(((i={})[r]=t,i),e,"prop",n)}}L.propTypes={resolutions:R,sizes:A,fixed:Z(f.default.oneOfType([R,f.default.arrayOf(R)])),fluid:Z(f.default.oneOfType([A,f.default.arrayOf(A)])),fadeIn:f.default.bool,durationFadeIn:f.default.number,title:f.default.string,alt:f.default.string,className:f.default.oneOfType([f.default.string,f.default.object]),critical:f.default.bool,crossOrigin:f.default.oneOfType([f.default.string,f.default.bool]),style:f.default.object,imgStyle:f.default.object,placeholderStyle:f.default.object,placeholderClassName:f.default.string,backgroundColor:f.default.oneOfType([f.default.string,f.default.bool]),onLoad:f.default.func,onError:f.default.func,onStartLoad:f.default.func,Tag:f.default.string,itemProp:f.default.string,loading:f.default.oneOf(["auto","lazy","eager"]),draggable:f.default.bool};var P=L;e.Z=P},50036:function(t,e,r){"use strict";r.d(e,{w_:function(){return c}});var n=r(27378),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(i),a=function(){return(a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},u=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]])}return r};function s(t){return t&&t.map((function(t,e){return n.createElement(t.tag,a({key:e},t.attr),s(t.child))}))}function c(t){return function(e){return n.createElement(f,a({attr:a({},t.attr)},e),s(t.child))}}function f(t){var e=function(e){var r,i=t.attr,o=t.size,s=t.title,c=u(t,["attr","size","title"]),f=o||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,c,{className:r,style:a(a({color:t.color||e.color},e.style),t.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),t.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(t){return e(t)})):e(i)}},82545:function(t,e,r){var n=r(81822)(r(77400),"DataView");t.exports=n},64825:function(t,e,r){var n=r(81822)(r(77400),"Promise");t.exports=n},46151:function(t,e,r){var n=r(81822)(r(77400),"Set");t.exports=n},52485:function(t,e,r){var n=r(74554),i=r(38639),o=r(88379);function a(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new n;++e<r;)this.add(t[e])}a.prototype.add=a.prototype.push=i,a.prototype.has=o,t.exports=a},23694:function(t,e,r){var n=r(36301),i=r(7354),o=r(5863),a=r(12367),u=r(90748),s=r(97569);function c(t){var e=this.__data__=new n(t);this.size=e.size}c.prototype.clear=i,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=u,c.prototype.set=s,t.exports=c},59942:function(t,e,r){var n=r(77400).Uint8Array;t.exports=n},66902:function(t,e,r){var n=r(81822)(r(77400),"WeakMap");t.exports=n},79349:function(t){t.exports=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}},10263:function(t){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,i=0,o=[];++r<n;){var a=t[r];e(a,r,t)&&(o[i++]=a)}return o}},98213:function(t,e,r){var n=r(24701),i=r(2900),o=r(19785),a=r(43854),u=r(42383),s=r(48519),c=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=o(t),f=!r&&i(t),l=!r&&!f&&a(t),d=!r&&!f&&!l&&s(t),p=r||f||l||d,h=p?n(t.length,String):[],g=h.length;for(var v in t)!e&&!c.call(t,v)||p&&("length"==v||l&&("offset"==v||"parent"==v)||d&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||u(v,g))||h.push(v);return h}},97141:function(t){t.exports=function(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}},90756:function(t){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}},52033:function(t,e,r){var n=r(26194),i=r(26789)(n);t.exports=i},23545:function(t,e,r){var n=r(97141),i=r(72889);t.exports=function t(e,r,o,a,u){var s=-1,c=e.length;for(o||(o=i),u||(u=[]);++s<c;){var f=e[s];r>0&&o(f)?r>1?t(f,r-1,o,a,u):n(u,f):a||(u[u.length]=f)}return u}},49819:function(t,e,r){var n=r(18911)();t.exports=n},26194:function(t,e,r){var n=r(49819),i=r(50098);t.exports=function(t,e){return t&&n(t,e,i)}},11324:function(t,e,r){var n=r(97141),i=r(19785);t.exports=function(t,e,r){var o=e(t);return i(t)?o:n(o,r(t))}},21610:function(t){t.exports=function(t,e){return null!=t&&e in Object(t)}},55829:function(t,e,r){var n=r(99736),i=r(92360);t.exports=function(t){return i(t)&&"[object Arguments]"==n(t)}},32866:function(t,e,r){var n=r(12772),i=r(92360);t.exports=function t(e,r,o,a,u){return e===r||(null==e||null==r||!i(e)&&!i(r)?e!=e&&r!=r:n(e,r,o,a,t,u))}},12772:function(t,e,r){var n=r(23694),i=r(27042),o=r(370),a=r(39584),u=r(3533),s=r(19785),c=r(43854),f=r(48519),l="[object Arguments]",d="[object Array]",p="[object Object]",h=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,g,v,b){var m=s(t),y=s(e),x=m?d:u(t),w=y?d:u(e),j=(x=x==l?p:x)==p,S=(w=w==l?p:w)==p,O=x==w;if(O&&c(t)){if(!c(e))return!1;m=!0,j=!1}if(O&&!j)return b||(b=new n),m||f(t)?i(t,e,r,g,v,b):o(t,e,x,r,g,v,b);if(!(1&r)){var _=j&&h.call(t,"__wrapped__"),E=S&&h.call(e,"__wrapped__");if(_||E){var k=_?t.value():t,z=E?e.value():e;return b||(b=new n),v(k,z,r,g,b)}}return!!O&&(b||(b=new n),a(t,e,r,g,v,b))}},19850:function(t,e,r){var n=r(23694),i=r(32866);t.exports=function(t,e,r,o){var a=r.length,u=a,s=!o;if(null==t)return!u;for(t=Object(t);a--;){var c=r[a];if(s&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}for(;++a<u;){var f=(c=r[a])[0],l=t[f],d=c[1];if(s&&c[2]){if(void 0===l&&!(f in t))return!1}else{var p=new n;if(o)var h=o(l,d,f,t,e,p);if(!(void 0===h?i(d,l,3,o,p):h))return!1}}return!0}},26972:function(t,e,r){var n=r(99736),i=r(84194),o=r(92360),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return o(t)&&i(t.length)&&!!a[n(t)]}},89278:function(t,e,r){var n=r(71410),i=r(57518),o=r(31137),a=r(19785),u=r(96001);t.exports=function(t){return"function"==typeof t?t:null==t?o:"object"==typeof t?a(t)?i(t[0],t[1]):n(t):u(t)}},20186:function(t,e,r){var n=r(56016),i=r(50962),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return i(t);var e=[];for(var r in Object(t))o.call(t,r)&&"constructor"!=r&&e.push(r);return e}},67375:function(t,e,r){var n=r(52033),i=r(80068);t.exports=function(t,e){var r=-1,o=i(t)?Array(t.length):[];return n(t,(function(t,n,i){o[++r]=e(t,n,i)})),o}},71410:function(t,e,r){var n=r(19850),i=r(68125),o=r(65042);t.exports=function(t){var e=i(t);return 1==e.length&&e[0][2]?o(e[0][0],e[0][1]):function(r){return r===t||n(r,t,e)}}},57518:function(t,e,r){var n=r(32866),i=r(99729),o=r(79749),a=r(40318),u=r(68302),s=r(65042),c=r(37948);t.exports=function(t,e){return a(t)&&u(e)?s(c(t),e):function(r){var a=i(r,t);return void 0===a&&a===e?o(r,t):n(e,a,3)}}},98497:function(t,e,r){var n=r(66070),i=r(79867),o=r(89278),a=r(67375),u=r(73303),s=r(39334),c=r(96348),f=r(31137),l=r(19785);t.exports=function(t,e,r){e=e.length?n(e,(function(t){return l(t)?function(e){return i(e,1===t.length?t[0]:t)}:t})):[f];var d=-1;e=n(e,s(o));var p=a(t,(function(t,r,i){return{criteria:n(e,(function(e){return e(t)})),index:++d,value:t}}));return u(p,(function(t,e){return c(t,e,r)}))}},50517:function(t){t.exports=function(t){return function(e){return null==e?void 0:e[t]}}},10301:function(t,e,r){var n=r(79867);t.exports=function(t){return function(e){return n(e,t)}}},1197:function(t,e,r){var n=r(31137),i=r(11871),o=r(63132);t.exports=function(t,e){return o(i(t,e,n),t+"")}},54459:function(t,e,r){var n=r(551),i=r(42630),o=r(31137),a=i?function(t,e){return i(t,"toString",{configurable:!0,enumerable:!1,value:n(e),writable:!0})}:o;t.exports=a},75733:function(t){t.exports=function(t,e,r){var n=-1,i=t.length;e<0&&(e=-e>i?0:i+e),(r=r>i?i:r)<0&&(r+=i),i=e>r?0:r-e>>>0,e>>>=0;for(var o=Array(i);++n<i;)o[n]=t[n+e];return o}},73303:function(t){t.exports=function(t,e){var r=t.length;for(t.sort(e);r--;)t[r]=t[r].value;return t}},24701:function(t){t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},74833:function(t,e,r){var n=r(56127),i=/^\s+/;t.exports=function(t){return t?t.slice(0,n(t)+1).replace(i,""):t}},39334:function(t){t.exports=function(t){return function(e){return t(e)}}},65581:function(t){t.exports=function(t,e){return t.has(e)}},17845:function(t,e,r){var n=r(55193);t.exports=function(t,e){if(t!==e){var r=void 0!==t,i=null===t,o=t==t,a=n(t),u=void 0!==e,s=null===e,c=e==e,f=n(e);if(!s&&!f&&!a&&t>e||a&&u&&c&&!s&&!f||i&&u&&c||!r&&c||!o)return 1;if(!i&&!a&&!f&&t<e||f&&r&&o&&!i&&!a||s&&r&&o||!u&&o||!c)return-1}return 0}},96348:function(t,e,r){var n=r(17845);t.exports=function(t,e,r){for(var i=-1,o=t.criteria,a=e.criteria,u=o.length,s=r.length;++i<u;){var c=n(o[i],a[i]);if(c)return i>=s?c:c*("desc"==r[i]?-1:1)}return t.index-e.index}},26789:function(t,e,r){var n=r(80068);t.exports=function(t,e){return function(r,i){if(null==r)return r;if(!n(r))return t(r,i);for(var o=r.length,a=e?o:-1,u=Object(r);(e?a--:++a<o)&&!1!==i(u[a],a,u););return r}}},18911:function(t){t.exports=function(t){return function(e,r,n){for(var i=-1,o=Object(e),a=n(e),u=a.length;u--;){var s=a[t?u:++i];if(!1===r(o[s],s,o))break}return e}}},42630:function(t,e,r){var n=r(81822),i=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();t.exports=i},27042:function(t,e,r){var n=r(52485),i=r(90756),o=r(65581);t.exports=function(t,e,r,a,u,s){var c=1&r,f=t.length,l=e.length;if(f!=l&&!(c&&l>f))return!1;var d=s.get(t),p=s.get(e);if(d&&p)return d==e&&p==t;var h=-1,g=!0,v=2&r?new n:void 0;for(s.set(t,e),s.set(e,t);++h<f;){var b=t[h],m=e[h];if(a)var y=c?a(m,b,h,e,t,s):a(b,m,h,t,e,s);if(void 0!==y){if(y)continue;g=!1;break}if(v){if(!i(e,(function(t,e){if(!o(v,e)&&(b===t||u(b,t,r,a,s)))return v.push(e)}))){g=!1;break}}else if(b!==m&&!u(b,m,r,a,s)){g=!1;break}}return s.delete(t),s.delete(e),g}},370:function(t,e,r){var n=r(96539),i=r(59942),o=r(85638),a=r(27042),u=r(19383),s=r(43735),c=n?n.prototype:void 0,f=c?c.valueOf:void 0;t.exports=function(t,e,r,n,c,l,d){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!l(new i(t),new i(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return o(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var p=u;case"[object Set]":var h=1&n;if(p||(p=s),t.size!=e.size&&!h)return!1;var g=d.get(t);if(g)return g==e;n|=2,d.set(t,e);var v=a(p(t),p(e),n,c,l,d);return d.delete(t),v;case"[object Symbol]":if(f)return f.call(t)==f.call(e)}return!1}},39584:function(t,e,r){var n=r(51385),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,o,a,u){var s=1&r,c=n(t),f=c.length;if(f!=n(e).length&&!s)return!1;for(var l=f;l--;){var d=c[l];if(!(s?d in e:i.call(e,d)))return!1}var p=u.get(t),h=u.get(e);if(p&&h)return p==e&&h==t;var g=!0;u.set(t,e),u.set(e,t);for(var v=s;++l<f;){var b=t[d=c[l]],m=e[d];if(o)var y=s?o(m,b,d,e,t,u):o(b,m,d,t,e,u);if(!(void 0===y?b===m||a(b,m,r,o,u):y)){g=!1;break}v||(v="constructor"==d)}if(g&&!v){var x=t.constructor,w=e.constructor;x==w||!("constructor"in t)||!("constructor"in e)||"function"==typeof x&&x instanceof x&&"function"==typeof w&&w instanceof w||(g=!1)}return u.delete(t),u.delete(e),g}},51385:function(t,e,r){var n=r(11324),i=r(83080),o=r(50098);t.exports=function(t){return n(t,o,i)}},68125:function(t,e,r){var n=r(68302),i=r(50098);t.exports=function(t){for(var e=i(t),r=e.length;r--;){var o=e[r],a=t[o];e[r]=[o,a,n(a)]}return e}},83080:function(t,e,r){var n=r(10263),i=r(15937),o=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols,u=a?function(t){return null==t?[]:(t=Object(t),n(a(t),(function(e){return o.call(t,e)})))}:i;t.exports=u},3533:function(t,e,r){var n=r(82545),i=r(44538),o=r(64825),a=r(46151),u=r(66902),s=r(99736),c=r(76532),f="[object Map]",l="[object Promise]",d="[object Set]",p="[object WeakMap]",h="[object DataView]",g=c(n),v=c(i),b=c(o),m=c(a),y=c(u),x=s;(n&&x(new n(new ArrayBuffer(1)))!=h||i&&x(new i)!=f||o&&x(o.resolve())!=l||a&&x(new a)!=d||u&&x(new u)!=p)&&(x=function(t){var e=s(t),r="[object Object]"==e?t.constructor:void 0,n=r?c(r):"";if(n)switch(n){case g:return h;case v:return f;case b:return l;case m:return d;case y:return p}return e}),t.exports=x},731:function(t,e,r){var n=r(76747),i=r(2900),o=r(19785),a=r(42383),u=r(84194),s=r(37948);t.exports=function(t,e,r){for(var c=-1,f=(e=n(e,t)).length,l=!1;++c<f;){var d=s(e[c]);if(!(l=null!=t&&r(t,d)))break;t=t[d]}return l||++c!=f?l:!!(f=null==t?0:t.length)&&u(f)&&a(d,f)&&(o(t)||i(t))}},72889:function(t,e,r){var n=r(96539),i=r(2900),o=r(19785),a=n?n.isConcatSpreadable:void 0;t.exports=function(t){return o(t)||i(t)||!!(a&&t&&t[a])}},42383:function(t){var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,r){var n=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&e.test(t))&&t>-1&&t%1==0&&t<r}},57535:function(t,e,r){var n=r(85638),i=r(80068),o=r(42383),a=r(11611);t.exports=function(t,e,r){if(!a(r))return!1;var u=typeof e;return!!("number"==u?i(r)&&o(e,r.length):"string"==u&&e in r)&&n(r[e],t)}},56016:function(t){var e=Object.prototype;t.exports=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||e)}},68302:function(t,e,r){var n=r(11611);t.exports=function(t){return t==t&&!n(t)}},19383:function(t){t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}},65042:function(t){t.exports=function(t,e){return function(r){return null!=r&&(r[t]===e&&(void 0!==e||t in Object(r)))}}},50962:function(t,e,r){var n=r(58023)(Object.keys,Object);t.exports=n},18125:function(t,e,r){t=r.nmd(t);var n=r(39120),i=e&&!e.nodeType&&e,o=i&&t&&!t.nodeType&&t,a=o&&o.exports===i&&n.process,u=function(){try{var t=o&&o.require&&o.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(e){}}();t.exports=u},58023:function(t){t.exports=function(t,e){return function(r){return t(e(r))}}},11871:function(t,e,r){var n=r(79349),i=Math.max;t.exports=function(t,e,r){return e=i(void 0===e?t.length-1:e,0),function(){for(var o=arguments,a=-1,u=i(o.length-e,0),s=Array(u);++a<u;)s[a]=o[e+a];a=-1;for(var c=Array(e+1);++a<e;)c[a]=o[a];return c[e]=r(s),n(t,this,c)}}},38639:function(t){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},88379:function(t){t.exports=function(t){return this.__data__.has(t)}},43735:function(t){t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}},63132:function(t,e,r){var n=r(54459),i=r(49591)(n);t.exports=i},49591:function(t){var e=Date.now;t.exports=function(t){var r=0,n=0;return function(){var i=e(),o=16-(i-n);if(n=i,o>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}},7354:function(t,e,r){var n=r(36301);t.exports=function(){this.__data__=new n,this.size=0}},5863:function(t){t.exports=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}},12367:function(t){t.exports=function(t){return this.__data__.get(t)}},90748:function(t){t.exports=function(t){return this.__data__.has(t)}},97569:function(t,e,r){var n=r(36301),i=r(44538),o=r(74554);t.exports=function(t,e){var r=this.__data__;if(r instanceof n){var a=r.__data__;if(!i||a.length<199)return a.push([t,e]),this.size=++r.size,this;r=this.__data__=new o(a)}return r.set(t,e),this.size=r.size,this}},56127:function(t){var e=/\s/;t.exports=function(t){for(var r=t.length;r--&&e.test(t.charAt(r)););return r}},551:function(t){t.exports=function(t){return function(){return t}}},58439:function(t,e,r){var n=r(75733),i=r(47991);t.exports=function(t,e,r){var o=null==t?0:t.length;return o?(e=r||void 0===e?1:i(e),n(t,0,(e=o-e)<0?0:e)):[]}},79749:function(t,e,r){var n=r(21610),i=r(731);t.exports=function(t,e){return null!=t&&i(t,e,n)}},31137:function(t){t.exports=function(t){return t}},2900:function(t,e,r){var n=r(55829),i=r(92360),o=Object.prototype,a=o.hasOwnProperty,u=o.propertyIsEnumerable,s=n(function(){return arguments}())?n:function(t){return i(t)&&a.call(t,"callee")&&!u.call(t,"callee")};t.exports=s},80068:function(t,e,r){var n=r(28338),i=r(84194);t.exports=function(t){return null!=t&&i(t.length)&&!n(t)}},43854:function(t,e,r){t=r.nmd(t);var n=r(77400),i=r(57714),o=e&&!e.nodeType&&e,a=o&&t&&!t.nodeType&&t,u=a&&a.exports===o?n.Buffer:void 0,s=(u?u.isBuffer:void 0)||i;t.exports=s},84194:function(t){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},48519:function(t,e,r){var n=r(26972),i=r(39334),o=r(18125),a=o&&o.isTypedArray,u=a?i(a):n;t.exports=u},50098:function(t,e,r){var n=r(98213),i=r(20186),o=r(80068);t.exports=function(t){return o(t)?n(t):i(t)}},31159:function(t){t.exports=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},96001:function(t,e,r){var n=r(50517),i=r(10301),o=r(40318),a=r(37948);t.exports=function(t){return o(t)?n(a(t)):i(t)}},95099:function(t,e,r){var n=r(23545),i=r(98497),o=r(1197),a=r(57535),u=o((function(t,e){if(null==t)return[];var r=e.length;return r>1&&a(t,e[0],e[1])?e=[]:r>2&&a(e[0],e[1],e[2])&&(e=[e[0]]),i(t,n(e,1),[])}));t.exports=u},15937:function(t){t.exports=function(){return[]}},57714:function(t){t.exports=function(){return!1}},94919:function(t,e,r){var n=r(91936),i=1/0;t.exports=function(t){return t?(t=n(t))===i||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}},47991:function(t,e,r){var n=r(94919);t.exports=function(t){var e=n(t),r=e%1;return e==e?r?e-r:e:0}},91936:function(t,e,r){var n=r(74833),i=r(11611),o=r(55193),a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var r=u.test(t);return r||s.test(t)?c(t.slice(2),r?2:8):a.test(t)?NaN:+t}},16041:function(t,e,r){"use strict";r.d(e,{Z:function(){return j}});var n=r(99729),i=r.n(n),o=r(68316),a=r(68192),u=r(27378),s=r(25444),c=r(57438),f=function(){return(0,o.tZ)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"1em",width:"100%",padding:"0 1em"}},(0,o.tZ)("a",{href:"https://github.com/orgapp/orgajs",sx:{verticalAlign:"middle",color:"gray","&:hover":{color:"text"}}},(0,o.tZ)(c.hJX,{style:{display:"block",margin:"auto",fontSize:"1.4em"}})),(0,o.tZ)("a",{href:"https://twitter.com/xiaoxinghu",sx:{verticalAlign:"middle",color:"gray","&:hover":{color:"text"}}},(0,o.tZ)(c.fWC,{style:{display:"block",margin:"auto",fontSize:"1.4em"}})),(0,o.tZ)(s.rU,{to:"/playground",style:{}},(0,o.tZ)(a.zx,null,"Playground")))},l=r(50120),d=r(95099),p=r.n(d),h=r(31159),g=r.n(h),v=r(58439),b=r.n(v),m=r(63265),y=["style"],x=function(t){t.style;var e=(0,l.Z)(t,y),r=(0,s.K2)("3511456945"),n={},i=r.pages.nodes.map((function(t){var e=t.path.split("/").filter(Boolean),r=b()(e),i=(n[r.join(".")]||0)+Number(t.context.properties.position);return n[e.join(".")]=i,{text:t.context.properties.title||g()(e),path:t.path,indent:e.length-1,position:i}})),a=p()(i,["position"]).map((function(t){return(0,o.tZ)(s.rU,{key:"nav-"+t.position,to:t.path,activeClassName:"active",sx:{padding:"0.5em 0.5em 0.5em "+(.5+1*t.indent)+"em",borderRadius:"0.3em",color:"text","&.active":{color:"text",backgroundColor:"highlight",fontWeight:"bold"}}},t.text)}));return(0,o.tZ)("div",Object.assign({sx:{}},e),(0,o.tZ)("div",{style:{display:"flex",flexDirection:"column",gap:"2px"}},(0,o.tZ)(s.rU,{to:"/",sx:{display:"flex",alignItems:"center",gap:"1em",pb:"1em"}},(0,o.tZ)(m.Z,{fixed:r.logo.childImageSharp.fixed,sx:{borderRadius:"0.4em"}}),(0,o.tZ)("h1",null,"Orgajs")),a))},w="250px",j=function(t){var e=t.children,r=t.pageContext,n=i()(r,"properties.title"),s=(0,u.useState)(!1),c=s[0],l=s[1];return(0,o.tZ)("main",{sx:{display:"grid",gridTemplateColumns:["0 1fr","250px 1fr"],gridTemplateRows:"48px 1fr",alignContent:"stretch",backgroundColor:"background",width:"100vw",height:"100vh",gridTemplateAreas:"\n      'aside header'\n      'aside content'\n      "}},(0,o.tZ)("nav",{sx:{gridArea:"header",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid",borderColor:"muted",marginX:"0.2em",gap:"0.2em"}},(0,o.tZ)(a.j2,{"aria-label":"toggle sidebar",sx:{display:["block","none"],"&:hover":{bg:"highlight"}},onClick:function(){return l(!c)}}),(0,o.tZ)(f,null)),(0,o.tZ)("aside",{sx:{display:"block",position:["fixed","static"],top:0,left:"-250px",width:w,gridArea:"aside",height:"100%",overflow:"auto",borderRight:"1px solid",borderColor:"muted",backgroundColor:"surface",padding:"1em",zIndex:200,transform:"translateX("+(c?w:"0")+")",transition:"transform 0.3s ease-out",boxShadow:[c?"1px 0px 7px rgba(0,0,0,0.5)":"none","none"]}},c&&(0,o.tZ)("div",{sx:{display:"flex",position:"sticky",top:0,justifyContent:"flex-end",mb:"0.4em"}},(0,o.tZ)(a.hU,{onClick:function(){return l(!1)},sx:{"&:hover":{bg:"highlight"}}},(0,o.tZ)("div",{style:{transform:"rotate(45deg)",fontSize:"1.5em"}},"+"))),(0,o.tZ)(x,null)),c&&(0,o.tZ)("div",{style:{position:"fixed",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.4)",zIndex:100,top:0,right:0},onClick:function(){return l(!1)}}),(0,o.tZ)(a.W2,{p:4,sx:{gridArea:"content",height:"100%",overflow:"auto"}},n&&(0,o.tZ)("h1",{sx:{fontSize:6}},n),e))}}}]);
//# sourceMappingURL=6679e1374d53b9c483f5edb7dcfc542cd496a709-ad99bb2e38fa2d3a436f.js.map