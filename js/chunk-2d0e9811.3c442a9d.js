(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9811"],{"8e8f":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),n("div",{staticClass:"col-12"},[n("div",{staticClass:"col-12"},[n("button",{staticClass:"btn btn-secondary",on:{click:t.getJwt}},[t._v("取得jwt")])]),n("div",{staticClass:"col-12 text-light"},[t._v("回傳結果為: "),n("span",[t._v(t._s(t.jwt))])])])])},s=[];n("d3b7");function a(t,e,n,r,s,a,c){try{var i=t[a](c),o=i.value}catch(u){return void n(u)}i.done?e(o):Promise.resolve(o).then(r,s)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,s){var c=t.apply(e,n);function i(t){a(c,r,s,i,o,"next",t)}function o(t){a(c,r,s,i,o,"throw",t)}i(void 0)}))}}n("96cf");var i={name:"Jwt",created:function(){this.$store.dispatch("changeCurrentUnit","使用axios取得mock jwt並放置到store")},data:function(){return{jwt:""}},methods:{getJwt:function(){var t=this;return c(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.axios.get("/jwt");case 2:return n=e.sent,e.next=5,t.$store.dispatch("setJwt",n.data);case 5:t.jwt=t.$store.getters.jwt;case 6:case"end":return e.stop()}}),e)})))()}}},o=i,u=n("2877"),l=Object(u["a"])(o,r,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0e9811.3c442a9d.js.map