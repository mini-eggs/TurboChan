webpackJsonp([2],{"+ErR":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".container[data-v-112dfbce]{background-color:rgba(0,0,0,.25);padding:5px 15px;border-radius:4px}.title[data-v-112dfbce]{overflow-x:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:10px;margin-bottom:15px}.content[data-v-112dfbce],.media[data-v-112dfbce]{margin:15px 0}.actions[data-v-112dfbce]{margin:15px 0 5px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.actions>div[data-v-112dfbce],.actions[data-v-112dfbce],.actions a[data-v-112dfbce]{display:-webkit-box;display:-ms-flexbox;display:flex}.actions a[data-v-112dfbce]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;text-decoration:none;margin-right:15px;font-weight:700;font-size:14px}.actions a span[data-v-112dfbce]{margin-left:5px}.actions a.reply[data-v-112dfbce]{margin:0}",""])},"1Zra":function(t,e,a){"use strict";var n=a("lXGx"),i=a("CHzt");e.a={components:{ThreadPreview:i.a,TcLoader:n.a}}},"3Y11":function(t,e,a){"use strict";function n(t){a("BLd3"),a("CbgF")}var i=a("NLwR"),s=a("X/+e"),r=a("VU/8"),o=n,c=r(i.a,s.a,!1,o,"data-v-01420001",null);e.a=c.exports},"45tY":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Khwd"),i=a("psnW"),s=a("VU/8"),r=s(n.a,i.a,!1,null,null,null);e.default=r.exports},"5rPb":function(t,e,a){"use strict";var n=a("Gu7T"),i=a.n(n),s=a("G3ZH"),r=a("EptR");e.a={components:{PostFull:s.a,PostCompact:r.a},props:["thread","hideFirstActions"],computed:{first:function(){return[].concat(i()(this.thread.posts)).shift()},rest:function(){return[].concat(i()(this.thread.posts)).slice(1)}}}},"62yq":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.post.tim?a("div",{staticClass:"media"},[a("tc-media",{attrs:{item:t.post}})],1):t._e(),a("tc-content",{attrs:{item:t.post}}),a("div",{staticStyle:{clear:"both"}})],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},"6kiM":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("tc-loader",{attrs:{show:t.$store.state.posts.list.length<1}}),a("thread-preview",{attrs:{hideFirstActions:!0,thread:{posts:t.$store.state.posts.list}}})],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},"6xq+":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.thread.posts.length>0?a("div",{staticClass:"container"},[a("post-full",{attrs:{hideActions:t.hideFirstActions,post:t.first}}),t._l(t.rest,function(e,n){return a("div",{key:e.no},[0!==n?a("hr"):t._e(),a("post-compact",{attrs:{post:e}})],1)})],2):t._e()},i=[],s={render:n,staticRenderFns:i};e.a=s},"7fP+":function(t,e,a){var n=a("x6/r");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("0ccbd600",n,!0)},"8OLc":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".container[data-v-138bfe12]{overflow:hidden;padding:0 5px}.media[data-v-138bfe12]{width:35%;float:left;margin:0 15px 15px 0}",""])},"9qHf":function(t,e,a){var n=a("wK4S");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("1ec8a2b4",n,!0)},BLd3:function(t,e,a){var n=a("Z2gC");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("75a23eaa",n,!0)},CHzt:function(t,e,a){"use strict";function n(t){a("HTZH")}var i=a("5rPb"),s=a("6xq+"),r=a("VU/8"),o=n,c=r(i.a,s.a,!1,o,"data-v-0de360fa",null);e.a=c.exports},CIt0:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.show?n("section",{staticClass:"loading-container"},[n("img",{attrs:{src:a("FPOb")}})]):t._e()])},i=[],s={render:n,staticRenderFns:i};e.a=s},CbgF:function(t,e,a){var n=a("h21J");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("3af77264",n,!0)},CjuH:function(t,e,a){var n=a("8OLc");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("3f8ec37a",n,!0)},EptR:function(t,e,a){"use strict";function n(t){a("CjuH")}var i=a("SM1W"),s=a("62yq"),r=a("VU/8"),o=n,c=r(i.a,s.a,!1,o,"data-v-138bfe12",null);e.a=c.exports},FPOb:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMiA2djNsNC00LTQtNHYzYy00LjQyIDAtOCAzLjU4LTggOCAwIDEuNTcuNDYgMy4wMyAxLjI0IDQuMjZMNi43IDE0LjhjLS40NS0uODMtLjctMS43OS0uNy0yLjggMC0zLjMxIDIuNjktNiA2LTZ6bTYuNzYgMS43NEwxNy4zIDkuMmMuNDQuODQuNyAxLjc5LjcgMi44IDAgMy4zMS0yLjY5IDYtNiA2di0zbC00IDQgNCA0di0zYzQuNDIgMCA4LTMuNTggOC04IDAtMS41Ny0uNDYtMy4wMy0xLjI0LTQuMjZ6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg=="},G3ZH:function(t,e,a){"use strict";function n(t){a("7fP+"),a("TkEA")}var i=a("lK/7"),s=a("cILp"),r=a("VU/8"),o=n,c=r(i.a,s.a,!1,o,"data-v-112dfbce",null);e.a=c.exports},HTZH:function(t,e,a){var n=a("MFWA");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("9ba4f4ee",n,!0)},"Hz/t":function(t,e,a){"use strict";function n(t){a("xHH5")}var i=a("pHVT"),s=a("Pgbp"),r=a("VU/8"),o=n,c=r(i.a,s.a,!1,o,"data-v-4f0b79af",null);e.a=c.exports},IIzo:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMSAxOVY1YzAtMS4xLS45LTItMi0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJ6TTguNSAxMy41bDIuNSAzLjAxTDE0LjUgMTJsNC41IDZINWwzLjUtNC41eiIvPgogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4="},K10O:function(t,e,a){"use strict";var n=a("cFSz"),i=a("yimL"),s=a("VU/8"),r=s(n.a,i.a,!1,null,null,null);e.a=r.exports},Khwd:function(t,e,a){"use strict";var n=a("Xxa5"),i=a.n(n),s=a("exGp"),r=a.n(s),o=a("wHfu");e.a={components:{PostsScene:o.a},mounted:function(){function t(){return e.apply(this,arguments)}var e=r()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("posts/request",this.$route.params);case 2:case"end":return t.stop()}},t,this)}));return t}(),head:function(){var t=this.$route.params;return{title:"/"+t.board+"/ - "+t.thread+" - TurboChan"}}}},MFWA:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".container[data-v-0de360fa]{margin-top:15px}hr[data-v-0de360fa]{border:none;width:calc(100% - 10px);margin:15px auto;background-color:rgba(0,0,0,.125);height:2px;border-radius:4px}",""])},MxjK:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMS45OSA0YzAtMS4xLS44OS0yLTEuOTktMkg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE0bDQgNC0uMDEtMTh6TTE4IDE0SDZ2LTJoMTJ2MnptMC0zSDZWOWgxMnYyem0wLTNINlY2aDEydjJ6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg=="},NLwR:function(t,e,a){"use strict";e.a={props:["item"],computed:{desc:function(){return(this.item.com||"").split("<br><br>").join("<br>")}},mounted:function(){var t=this;this.$el.querySelectorAll("a").forEach(function(e){e.addEventListener("click",t.handleClick)})},beforeDestroy:function(){var t=this;this.$el.querySelectorAll("a").forEach(function(e){e.removeEventListener("click",t.handleClick)})},methods:{handleClick:function(t){-1!==t.target.href.indexOf("#p")&&(t.stopPropagation(),t.preventDefault(),this.handleQuoteClick(t.target.href.split("#p").pop()))},handleQuoteClick:function(t){if("board-thread-thread"===this.$route.name){var e=document.getElementById(t),a=e.parentElement.parentElement.offsetTop-75;window.scrollTo(0,a)}else{var n=this.item,i=n.board,s=n.thread;this.$router.push({path:"/"+i+"/thread/"+s})}}}}},Pgbp:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media-container"},["small"===t.mode?a("div",{class:{play:!t.isImage},on:{click:t.makeLarge}},[a("simple-image",{attrs:{src:t.small}})],1):a("div",{on:{click:t.makeSmall}},[t.isImage?a("simple-image",{attrs:{src:t.large}}):a("video",{attrs:{autoplay:"",loop:"",src:t.large}})],1)])},i=[],s={render:n,staticRenderFns:i};e.a=s},SM1W:function(t,e,a){"use strict";var n=a("Hz/t"),i=a("3Y11");e.a={components:{TcMedia:n.a,TcContent:i.a},props:["post"]}},TkEA:function(t,e,a){var n=a("+ErR");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("275909c2",n,!0)},"X/+e":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{attrs:{id:t.item.no},domProps:{innerHTML:t._s(t.desc)}})},i=[],s={render:n,staticRenderFns:i};e.a=s},Z2gC:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"p[data-v-01420001]{white-space:pre-line;text-overflow:ellipsis;line-height:1.4}",""])},Z49Z:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik04IDV2MTRsMTEtN3oiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+"},cFSz:function(t,e,a){"use strict";var n=a("Xxa5"),i=a.n(n),s=a("exGp"),r=a.n(s),o=a("mtWM"),c=a.n(o),l={cancel:function(){}};e.a={props:{src:{required:!0,type:String},onComplete:{require:!1,type:Function,default:function(){}},onFail:{require:!1,type:Function,default:function(){}}},data:function(){return{hasLoaded:!1,blob:null,cancelToken:l}},watch:{src:function(){this.cancelToken.cancel("Cancelling image fetch."),this.loadImage()}},mounted:function(){console.log(this),this.loadImage()},beforeDestroy:function(){this.cancelToken.cancel("Cancelling image fetch.")},methods:{loadImage:function(){function t(){return e.apply(this,arguments)}var e=r()(i.a.mark(function t(){var e,a,n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.a.CancelToken,a=e.source(),this.cancelToken=a,t.prev=3,t.next=6,c()(this.src,{cancelToken:a.token,responseType:"blob"});case 6:n=t.sent,this.blob=(window.URL||window.webkitURL).createObjectURL(n.data),this.hasLoaded=!0,this.onComplete(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),this.onFail(t.t0);case 15:case"end":return t.stop()}},t,this,[[3,12]])}));return t}()}}},cILp:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-full container"},[n("div",{staticClass:"title"},[n("div",[n("strong",[t._v(t._s(t.post.name))])]),n("div",[t._v(t._s(t.post.now))])]),t.post.ext?n("div",{staticClass:"media"},[n("tc-media",{attrs:{alwaysLarge:!0,item:t.post}})],1):t._e(),n("div",{staticClass:"content"},[n("tc-content",{attrs:{item:t.post}})],1),t.hideActions?t._e():n("div",{staticClass:"actions"},[n("div",[n("nuxt-link",{attrs:{to:t.href}},[n("img",{attrs:{src:a("MxjK")}}),n("span",[t._v(t._s(t.post.replies))])]),n("nuxt-link",{attrs:{to:t.href}},[n("img",{attrs:{src:a("IIzo")}}),n("span",[t._v(t._s(t.post.images))])])],1),n("nuxt-link",{staticClass:"reply",attrs:{to:t.href}},[t._v("\n      REPLY\n    ")])],1)])},i=[],s={render:n,staticRenderFns:i};e.a=s},cnmP:function(t,e,a){"use strict";e.a={props:["show"]}},h21J:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"span.quote{color:#389638;display:block}",""])},"lK/7":function(t,e,a){"use strict";var n=a("Hz/t"),i=a("3Y11");e.a={components:{TcMedia:n.a,TcContent:i.a},props:["post","hideActions"],computed:{href:function(){return"/"+this.$route.params.board+"/thread/"+this.post.no}}}},lXGx:function(t,e,a){"use strict";function n(t){a("9qHf")}var i=a("cnmP"),s=a("CIt0"),r=a("VU/8"),o=n,c=r(i.a,s.a,!1,o,"data-v-5b602cc3",null);e.a=c.exports},pHVT:function(t,e,a){"use strict";var n=a("mV6u"),i=a("K10O");e.a={props:["item","alwaysLarge"],components:{SimpleImage:i.a},data:function(){var t=this.$route.params.board,e=this.item,a=(e.w,e.h,e.tn_w,e.tn_h,e.tim),i=e.ext,s=n.a+"/api/media/"+t+"/"+a+i,r=n.a+"/api/media/"+t+"/"+a+"s.jpg",o=[".gif",".jpg",".jpeg",".png"].includes(i);return{large:s,small:r,mode:this.alwaysLarge&&o?"large":"small",isImage:o,size:{}}},methods:{makeLarge:function(){if(!this.alwaysLarge||!this.isImage){this.$el.parentElement.parentElement.offsetWidth;this.$el.parentElement.style.width="100%",this.mode="large"}},makeSmall:function(){this.alwaysLarge&&this.isImage||(this.$el.parentElement.style.width="",this.mode="small")}}}},psnW:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("posts-scene")},i=[],s={render:n,staticRenderFns:i};e.a=s},swb9:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,'.media-container[data-v-4f0b79af]{cursor:pointer}.background[data-v-4f0b79af]{background-size:cover;background-position:50%;background-repeat:no-repeat;border-radius:4px;overflow:hidden}img[data-v-4f0b79af]{border-radius:4px;overflow:hidden;background-color:rgba(0,0,0,.25)}img[data-v-4f0b79af],video[data-v-4f0b79af]{width:100%;vertical-align:middle}.play[data-v-4f0b79af]{overflow:hidden;-o-object-fit:contain;object-fit:contain;position:relative}.play[data-v-4f0b79af]:after{content:" ";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:rgba(0,0,0,.75);border-radius:50%;background-image:url('+a("Z49Z")+");width:50px;height:50px;background-size:contain;background-position:50%;background-repeat:no-repeat}",""])},wHfu:function(t,e,a){"use strict";var n=a("1Zra"),i=a("6kiM"),s=a("VU/8"),r=s(n.a,i.a,!1,null,null,null);e.a=r.exports},wK4S:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".loading-container[data-v-5b602cc3]{position:absolute;top:0;left:0;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.loading-container img[data-v-5b602cc3]{width:30px;-webkit-animation:Spin-data-v-5b602cc3 2s infinite linear;animation:Spin-data-v-5b602cc3 2s infinite linear}@-webkit-keyframes Spin-data-v-5b602cc3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes Spin-data-v-5b602cc3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.fade-enter-active[data-v-5b602cc3],.fade-leave-active[data-v-5b602cc3]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter[data-v-5b602cc3],.fade-leave-to[data-v-5b602cc3]{opacity:0}",""])},"x6/r":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".post-full.container .content p{overflow:hidden}",""])},xHH5:function(t,e,a){var n=a("swb9");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("2b0ff558",n,!0)},yimL:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.hasLoaded?a("img",{attrs:{src:t.blob}}):t._e()},i=[],s={render:n,staticRenderFns:i};e.a=s}});
//# sourceMappingURL=_thread.7b392a4cb570ca437859.js.map