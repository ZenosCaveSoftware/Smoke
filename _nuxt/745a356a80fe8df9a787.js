(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{133:function(t,n,e){var o=e(136);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e(37).default)("59497dc0",o,!0,{sourceMap:!1})},134:function(t,n,e){var o=e(138);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e(37).default)("d4be674c",o,!0,{sourceMap:!1})},135:function(t,n,e){"use strict";var o=e(133);e.n(o).a},136:function(t,n,e){(t.exports=e(36)(!1)).push([t.i,"\n.VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px\n}\n.Triangle{position:absolute;top:0;left:0;width:0;height:0\n}\n.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883\n}\n.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070\n}\n.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards\n}\n.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e\n}\n.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff\n}\n@-webkit-keyframes turn{\nto{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)\n}\n}\n@keyframes turn{\nto{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)\n}\n}\n@-webkit-keyframes godown{\nto{top:180px\n}\n}\n@keyframes godown{\nto{top:180px\n}\n}\n@-webkit-keyframes goright{\nto{left:70px\n}\n}\n@keyframes goright{\nto{left:70px\n}\n}",""])},137:function(t,n,e){"use strict";var o=e(134);e.n(o).a},138:function(t,n,e){(t.exports=e(36)(!1)).push([t.i,"\n.container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center\n}\n.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px\n}\n.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px\n}\n.links{padding-top:15px\n}\n.network{font-weight:400;font-size:1rem\n}\n.network .circle{display:inline-block;width:1rem;height:1rem;background:green;padding:.1rem .5rem;border-radius:1rem\n}\n.network.offline .circle{background:red\n}",""])},139:function(t,n,e){"use strict";e.r(n);e(135);var o=e(18),i=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"VueToNuxtLogo"},[n("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),n("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),n("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),n("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null);i.options.__file="Logo.vue";var r={components:{Logo:i.exports},data:function(){return{online:!0}},mounted:function(){window.navigator?(this.online=Boolean(window.navigator.onLine),window.addEventListener("offline",this._toggleNetworkStatus),window.addEventListener("online",this._toggleNetworkStatus)):this.online=!1},methods:{_toggleNetworkStatus:function(t){var n=t.type;this.online="online"===n}},destroyed:function(){window.removeEventListener("offline",this._toggleNetworkStatus),window.removeEventListener("online",this._toggleNetworkStatus)}},s=(e(137),Object(o.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"container"},[e("div",[e("logo"),t._v(" "),e("h1",{staticClass:"title"},[t._v("\n      NUXT\n    ")]),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v("\n      PWA Vue.js Application\n    ")]),t._v(" "),e("div",{class:["network",t.online?"online":"offline"]},[e("div",{staticClass:"circle"}),t._v("\n      "+t._s(t.online?"online":"offline")+"\n    ")]),t._v(" "),t._m(0)],1)])},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"links"},[n("a",{staticClass:"button--green",attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener"}},[this._v("Documentation")]),this._v(" "),n("a",{staticClass:"button--grey",attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank",rel:"noopener"}},[this._v("GitHub")])])}],!1,null,null,null));s.options.__file="index.vue";n.default=s.exports}}]);