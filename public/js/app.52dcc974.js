(function(e){function t(t){for(var r,l,i=t[0],s=t[1],u=t[2],c=0,f=[];c<i.length;c++)l=i[c],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&f.push(n[l][0]),n[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,l=1;l<o.length;l++){var s=o[l];0!==n[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={app:0},a=[];function l(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"dd5a07bf"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o=n[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,r){o=n[e]=[t,r]}));t.push(o[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=l(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var o=n[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,o[1](u)}n[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=u;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var r=o("85ec"),n=o.n(r);n.a},2881:function(e,t,o){},"32e0":function(e,t,o){"use strict";var r=o("2881"),n=o.n(r);n.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[e._v("Book Manager")]),e._v(" | "),o("router-link",{attrs:{to:"/home"}},[e._v("Home")]),e._v(" | "),o("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),o("router-view")],1)},a=[],l=(o("034f"),o("2877")),i={},s=Object(l["a"])(i,n,a,!1,null,null,null),u=s.exports,c=(o("d3b7"),o("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hello"},[o("h1",[e._v(e._s(e.msg))]),e._m(0),o("h3",[e._v("Installed CLI Plugins")]),e._m(1),o("h3",[e._v("Essential Links")]),e._m(2),o("h3",[e._v("Ecosystem")]),e._m(3)])},v=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),o("br"),e._v(" check out the "),o("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),o("li",[o("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),o("li",[o("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),o("li",[o("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),o("li",[o("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),o("li",[o("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),o("li",[o("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],d={name:"HelloWorld",props:{msg:String}},b=d,m=(o("32e0"),Object(l["a"])(b,h,v,!1,null,"0b11c2c6",null)),_=m.exports,g={name:"home",components:{HelloWorld:_}},k=g,y=Object(l["a"])(k,p,f,!1,null,null,null),j=y.exports,w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("span",[e._v("这是一段信息")]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)]),o("h1",[e._v("Book Manager")]),o("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.book}},[o("el-form-item",{attrs:{label:"图书名称"}},[o("el-input",{attrs:{placeholder:"请输入书名"},model:{value:e.book.name,callback:function(t){e.$set(e.book,"name",t)},expression:"book.name"}})],1),o("el-form-item",{attrs:{label:"图书价格"}},[o("el-input",{attrs:{type:"number",placeholder:"请输入价格"},model:{value:e.book.price,callback:function(t){e.$set(e.book,"price",e._n(t))},expression:"book.price"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.addBook}},[e._v("添加图书")])],1)],1),o("el-table",{staticStyle:{width:"80%"},attrs:{data:e.books}},[o("el-table-column",{attrs:{prop:"_id",label:"ID",width:"180"}}),o("el-table-column",{attrs:{prop:"name",label:"图书名称",width:"300"}}),o("el-table-column",{attrs:{prop:"price",label:"图书价格"}}),o("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){return e.deleteBook(t)}}},[e._v("删除")]),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("编辑")])]}}])})],1),o("h2",[e._v("总价格： "+e._s(e.priceTotal))])],1)},O=[],x=(o("c740"),o("13d5"),o("a434"),{name:"BookManger",data:function(){return{maxId:2,book:{name:"",price:""},dialogVisible:!1,books:[],booksUrl:"http://localhost:3000/books"}},created:function(){var e=this;console.log("[INFO] Begin created"),fetch(this.booksUrl).then((function(e){return e.json()})).then((function(t){return e.books=t})),console.log("[INFO] Books init data"+this.books)},methods:{deleteBook:function(e){var t=this;console.log("[INFO] book info "+e),console.log("[INFO] "+e.raw),fetch(this.booksUrl+"/"+e.row._id,{method:"DELETE"}).then((function(e){return e.json()})).then((function(){var o=t.books.findIndex((function(t){return t._id==e.row._id}));t.books.splice(o,1)}))},addBook:function(){var e=this;fetch(this.booksUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.book)}).then((function(e){return e.json()})).then((function(t){return e.books.push(t)}))}},computed:{priceTotal:function(){return this.books.reduce((function(e,t){return e+t.price}),0)}}}),E=x,C=Object(l["a"])(E,w,O,!1,null,"292c9510",null),P=C.exports;r["default"].use(c["a"]);var T=[{path:"/",name:"bookManager",component:P},{path:"/home",name:"home",component:j},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],$=new c["a"]({mode:"hash",base:"/",routes:T}),S=$,B=o("5c96"),I=o.n(B);o("0fae");r["default"].config.productionTip=!1,r["default"].use(I.a),new r["default"]({router:S,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,o){},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.52dcc974.js.map