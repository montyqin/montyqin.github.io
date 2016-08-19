/**
 * @license almond 0.2.9 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/*!
 * headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

window.MRT=window.MRT||{},function(){var e,t,n;(function(r){function v(e,t){return h.call(e,t)}function m(e,t){var n,r,i,s,o,u,a,f,c,h,p,v=t&&t.split("/"),m=l.map,g=m&&m["*"]||{};if(e&&e.charAt(0)===".")if(t){v=v.slice(0,v.length-1),e=e.split("/"),o=e.length-1,l.nodeIdCompat&&d.test(e[o])&&(e[o]=e[o].replace(d,"")),e=v.concat(e);for(c=0;c<e.length;c+=1){p=e[c];if(p===".")e.splice(c,1),c-=1;else if(p===".."){if(c===1&&(e[2]===".."||e[0]===".."))break;c>0&&(e.splice(c-1,2),c-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((v||g)&&m){n=e.split("/");for(c=n.length;c>0;c-=1){r=n.slice(0,c).join("/");if(v)for(h=v.length;h>0;h-=1){i=m[v.slice(0,h).join("/")];if(i){i=i[r];if(i){s=i,u=c;break}}}if(s)break;!a&&g&&g[r]&&(a=g[r],f=c)}!s&&a&&(s=a,u=f),s&&(n.splice(0,u,s),e=n.join("/"))}return e}function g(e,t){return function(){return s.apply(r,p.call(arguments,0).concat([e,t]))}}function y(e){return function(t){return m(t,e)}}function b(e){return function(t){a[e]=t}}function w(e){if(v(f,e)){var t=f[e];delete f[e],c[e]=!0,i.apply(r,t)}if(!v(a,e)&&!v(c,e))throw new Error("No "+e);return a[e]}function E(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function S(e){return function(){return l&&l.config&&l.config[e]||{}}}var i,s,o,u,a={},f={},l={},c={},h=Object.prototype.hasOwnProperty,p=[].slice,d=/\.js$/;o=function(e,t){var n,r=E(e),i=r[0];return e=r[1],i&&(i=m(i,t),n=w(i)),i?n&&n.normalize?e=n.normalize(e,y(t)):e=m(e,t):(e=m(e,t),r=E(e),i=r[0],e=r[1],i&&(n=w(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},u={require:function(e){return g(e)},exports:function(e){var t=a[e];return typeof t!="undefined"?t:a[e]={}},module:function(e){return{id:e,uri:"",exports:a[e],config:S(e)}}},i=function(e,t,n,i){var s,l,h,p,d,m=[],y=typeof n,E;i=i||e;if(y==="undefined"||y==="function"){t=!t.length&&n.length?["require","exports","module"]:t;for(d=0;d<t.length;d+=1){p=o(t[d],i),l=p.f;if(l==="require")m[d]=u.require(e);else if(l==="exports")m[d]=u.exports(e),E=!0;else if(l==="module")s=m[d]=u.module(e);else if(v(a,l)||v(f,l)||v(c,l))m[d]=w(l);else{if(!p.p)throw new Error(e+" missing "+l);p.p.load(p.n,g(i,!0),b(l),{}),m[d]=a[l]}}h=n?n.apply(a[e],m):undefined;if(e)if(s&&s.exports!==r&&s.exports!==a[e])a[e]=s.exports;else if(h!==r||!E)a[e]=h}else e&&(a[e]=n)},e=t=s=function(e,t,n,a,f){if(typeof e=="string")return u[e]?u[e](t):w(o(e,t).f);if(!e.splice){l=e,l.deps&&s(l.deps,l.callback);if(!t)return;t.splice?(e=t,t=n,n=null):e=r}return t=t||function(){},typeof n=="function"&&(n=a,a=f),a?i(r,e,t,n):setTimeout(function(){i(r,e,t,n)},4),s},s.config=function(e){return s(e)},e._defined=a,n=function(e,t,n){t.splice||(n=t,t=[]),!v(a,e)&&!v(f,e)&&(f[e]=[e,t,n])},n.amd={jQuery:!0}})(),n("almond",["almond/almond"],function(e){return e}),n("almond/almond",function(){}),n("js/jquery",[],function(){return window.$}),n("js/lodash",[],function(){return window._}),function(e,t){function r(e){this.callback=e,this.ticking=!1}function i(t){return t&&typeof e!="undefined"&&(t===e||t.nodeType)}function s(e){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var t=e||{},n,r;for(r=1;r<arguments.length;r++){var o=arguments[r]||{};for(n in o)typeof t[n]=="object"&&!i(t[n])?t[n]=s(t[n],o[n]):t[n]=t[n]||o[n]}return t}function o(e){return e===Object(e)?e:{down:e,up:e}}function u(e,t){t=s(t,u.options),this.lastKnownScrollY=0,this.elem=e,this.debouncer=new r(this.update.bind(this)),this.tolerance=o(t.tolerance),this.classes=t.classes,this.offset=t.offset,this.scroller=t.scroller,this.initialised=!1,this.onPin=t.onPin,this.onUnpin=t.onUnpin,this.onTop=t.onTop,this.onNotTop=t.onNotTop}var n={bind:!!function(){}.bind,classList:"classList"in t.documentElement,rAF:!!(e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame)};e.requestAnimationFrame=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame,r.prototype={constructor:r,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},u.prototype={constructor:u,init:function(){if(!u.cutsTheMustard)return;return this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this},destroy:function(){var e=this.classes;this.initialised=!1,this.elem.classList.remove(e.unpinned,e.pinned,e.top,e.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var e=this.elem.classList,t=this.classes;if(e.contains(t.pinned)||!e.contains(t.unpinned))e.add(t.unpinned),e.remove(t.pinned),this.onUnpin&&this.onUnpin.call(this)},pin:function(){var e=this.elem.classList,t=this.classes;e.contains(t.unpinned)&&(e.remove(t.unpinned),e.add(t.pinned),this.onPin&&this.onPin.call(this))},top:function(){var e=this.elem.classList,t=this.classes;e.contains(t.top)||(e.add(t.top),e.remove(t.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var e=this.elem.classList,t=this.classes;e.contains(t.notTop)||(e.add(t.notTop),e.remove(t.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return this.scroller.pageYOffset!==undefined?this.scroller.pageYOffset:this.scroller.scrollTop!==undefined?this.scroller.scrollTop:(t.documentElement||t.body.parentNode||t.body).scrollTop},getViewportHeight:function(){return e.innerHeight||t.documentElement.clientHeight||t.body.clientHeight},getDocumentHeight:function(){var e=t.body,n=t.documentElement;return Math.max(e.scrollHeight,n.scrollHeight,e.offsetHeight,n.offsetHeight,e.clientHeight,n.clientHeight)},getElementHeight:function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},getScrollerHeight:function(){return this.scroller===e||this.scroller===t.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(e){var t=e<0,n=e+this.getViewportHeight()>this.getScrollerHeight();return t||n},toleranceExceeded:function(e,t){return Math.abs(e-this.lastKnownScrollY)>=this.tolerance[t]},shouldUnpin:function(e,t){var n=e>this.lastKnownScrollY,r=e>=this.offset;return n&&r&&t},shouldPin:function(e,t){var n=e<this.lastKnownScrollY,r=e<=this.offset;return n&&t||r},update:function(){var e=this.getScrollY(),t=e>this.lastKnownScrollY?"down":"up",n=this.toleranceExceeded(e,t);if(this.isOutOfBounds(e))return;e<=this.offset?this.top():this.notTop(),this.shouldUnpin(e,n)?this.unpin():this.shouldPin(e,n)&&this.pin(),this.lastKnownScrollY=e}},u.options={tolerance:{up:0,down:0},offset:0,scroller:e,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},u.cutsTheMustard=typeof n!="undefined"&&n.rAF&&n.bind&&n.classList,e.Headroom=u}(window,document),n("bower_components/headroom.js/dist/headroom",function(){}),n("js/index",["require","./jquery","./lodash","../bower_components/headroom.js/dist/headroom"],function(e){var t=e("./jquery"),n=e("./lodash"),r=e("../bower_components/headroom.js/dist/headroom");return{ready:function(e){var r=e.stream.stream,i=t("#action-bar"),s=t("#network-selector"),o=MR.ENV,u=t(".tabs"),a=t(".carousel");r.model.set("network",e["network-selector"].config.settings.network),r.model.set("stream_name",e["stream-selector"].streamSelector.model.get("selected")),r.prepend=function(e,t){var n=this.async();t(e.$el),e.$el.css("opacity",0),e.$el.animate({opacity:1},{duration:500,complete:n})},r.shift=function(e,t){var n=this.async(),r=function(){t(e.$el),n()};e.$el.animate({opacity:0},{duration:400,complete:r})};var f=n.merge({},e.stream.config,e["network-selector"].config),l=f.settings.network,c=function(){i.find(".network-content").removeClass("active"),i.find('.network-content[data-network="'+l+'"]').addClass("active")},h=n.reduce(f.settings.networks,function(e,t){return e+(t?1:0)});h<=1&&s.addClass("single-network");var p=function(e){e.payload!==l&&(l=e.payload,c(),r.selectNetwork(l))};o.instance.on("#network-selector:select-network",p);var d=function(){return false;var e=30;u.children().each(function(){e+=t(this).outerWidth(!0)}),e>t("#stream-filter").width()?(a.show(),u.addClass("hidden")):(a.hide(),u.removeClass("hidden"))};d(),t(window).on("resize",n.throttle(function(){d()},100,{leading:!1}));if(!window.FB)var v=setInterval(function(){window.FB&&(clearInterval(v),window.FB.Event.subscribe("xfbml.render",function(){c()}))},150);else window.FB.Event.subscribe("xfbml.render",function(){c()})},render:function(e){function A(){s.addClass("loading")}function O(){s.removeClass("loading")}var i=MR.ENV,s=t("body"),o=t(".main-container"),u=t("#action-bar"),a=t("#search-box"),f=a.find("input"),l=t("#current-search"),c=l.find(".term"),h=t("#search-box-placeholder"),p=t(".carousel");r=r;var d=t("#sponsor-bar");t(window).on("resize",function(){b(d.outerHeight())});var v=!!MR.ENV.hash.parent&&window.parent!==window.self,m=(MR.spaceConfig.smart_size||MR.ENV.hash.local_smart_resize==="true")&&MR.ENV.hash["pgb-infinite-scroll-local"]!=="true";v&&m&&t("html").addClass("smart-size"),window.Modernizr.touch&&o.addClass("touch");var g=e.stream.stream;MR.templateConfig.settings.header.showHeader&&t("#header").addClass("header-enabled");var y=function(){var e=t("#action-bar-top"),n=e.outerHeight(),r=new Headroom(e.get(0),{onPin:function(){t(".main-container").addClass("header-bar-visible");if(t(".new-content-button").length>0){var e=t(".new-content-button").css("top").replace("px","");t(".new-content-button").css("top",parseInt(e,10)+n)}},onUnpin:function(){t(".main-container").removeClass("header-bar-visible");if(t(".new-content-button").length>0){var e=t(".new-content-button").css("top").replace("px","");t(".new-content-button").css("top",parseInt(e,10)-n)}},offset:n});r.init(),t(".main-container").css({"padding-top":n}),t(".new-content-button").css({top:n+8}),e.addClass("action-bar-top-loaded")};y();var b=function(e){var n=t("#action-bar-top"),r=n.outerHeight();e>0&&n.css("top",e),t(".main-container").css({"padding-top":r+e})};if(MR.templateConfig.settings.sponsorBar.showSponsorBar){var w=t("#sponsor-bar").find("img");w.length>0&&w.one("load",function(){b(d.outerHeight())}).each(function(){this.complete&&t(this).load()})}var E=function(){u.removeClass("search-active"),a.css("width",""),u.find(".network-content.active").css("margin-left","")},S=function(){u.addClass("search-active"),f.focus();var e=u.find(".network-content.active");e.css("margin-left",e[0].scrollWidth*-1+"px")},x=function(e){typeof g!="undefined"&&(t("#stream .no-content-message").text('No results found for "'+e+'"'),g.setKeywords(e),E(),c.text(e),e===""?(l.removeClass("active"),t("#stream .no-content-message").text(g.model.attributes.no_content_text)):l.addClass("active"))};i.instance.on("#search-box:enter",function(e){x(e.payload)}),h.on("click",function(){u.hasClass("search-active")?x(f.val()):S()}),l.on("click",function(){f.val(""),x("")});var T=function(t){e["stream-selector"].streamSelector.model.set("selected",t),g.setStream(t)};i.instance.on("#stream-selector:select-stream",function(e){T(e.payload)});var N=function(){i.instance.trigger("update-relative-dates")},C=function(){var e=p.find("li.selected"),n=t(".carousel li").index(e[0]);n===0?t(".carousel .icon-angle-left").hide():t(".carousel .icon-angle-left").show(),n+1===t(".carousel").find("li").length?t(".carousel .icon-angle-right").hide():t(".carousel .icon-angle-right").show()};t("#stream-filter button").on("click",function(e){var n=t(e.target);t("#stream-filter button").removeClass("active"),n.addClass("active"),k(n.attr("data-value")),T(n.attr("data-value"))}),window.setInterval(N,6e4);var k=function(e){t(".carousel li").removeClass("selected left right");var r=t('.carousel li[data-value="'+e+'"]');r.addClass("selected"),r.prevAll("li").addClass("left"),r.nextAll("li").addClass("right"),n.delay(C,100)},L=function(e){t("#stream-filter button").removeClass("active"),t('#stream-filter button[data-value="'+e+'"]').addClass("active")};t(".carousel .icon-angle-right").on("click",n.debounce(function(){var e=p.find("li.selected"),n=t(".carousel li").index(e[0]);t(".carousel li").eq(n).removeClass("selected").addClass("left");var r=t(".carousel li").eq(n+1);r.removeClass("right").addClass("selected"),T(r.attr("data-value")),L(r.attr("data-value")),C()},200,!0)),t(".carousel .icon-angle-left").on("click",n.debounce(function(){var e=t(".carousel").find("li.selected"),n=t(".carousel li").index(e[0]);t(".carousel li").eq(n).removeClass("selected").addClass("right");var r=t(".carousel li").eq(n-1);r.removeClass("left").addClass("selected"),T(r.attr("data-value")),L(r.attr("data-value")),C()},200,!0)),C(),m&&setInterval(function(){MR.resize({height:Math.max(s[0].scrollHeight,s.outerHeight(!0)+u.outerHeight(!0))})},500),i.instance.on("load-more",function(t){var n=e.stream.stream.more(),r=t.payload;n?(A(),n.fin(O),n.fin(r)):r()}),e.stream.stream.poller.once("loaded-batch",function(){e["load-more"].loadMoreButton.ensureFilled()})}}}),t(["js/index"]),window.MRT.require=t,window.MRT.define=n,window.MRT.requirejs=e}();