(function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)a=s[l],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"13fe":function(t,e,n){"use strict";var r=n("6f04"),o=n.n(r);o.a},4482:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("96cf");var r=n("3b8d"),o=(n("ac6a"),n("55dd"),n("cadf"),n("551c"),n("f751"),n("097d"),n("ba4c")),i=n.n(o),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("p",{staticStyle:{"text-align":"center"}},[t._v("\n    Быберите страницу"),n("br"),t._l(t.list,function(e){return n("router-link",{key:e,staticClass:"link",attrs:{to:"/todolist/"+e}},[t._v(t._s(e))])})],2),n("router-view")],1)},s=[],c={name:"app",computed:{list:function(){return this.$store.state.total%10==0?Math.floor(this.$store.state.total/10):Math.floor(this.$store.state.total/10)+1}},beforeCreate:function(){this.$store.dispatch("getData",{page:this.$route.params.id,sort:"asc"})},updated:function(){this.$store.dispatch("getData",{page:this.$route.params.id,sort:"asc"})}},u=c,d=(n("034f"),n("2877")),l=Object(d["a"])(u,a,s,!1,null,null,null),p=l.exports,f=n("8c4f"),h=n("2f62"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todolist"},[t.loader?n("div",{staticStyle:{"font-size":"26px"}},[t._v("\n    LOADER\n  ")]):t._e(),t.loader?t._e():n("div",t._l(t.list,function(e){return n("div",{key:e.id,staticClass:"todolist__item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.done,expression:"todo.done"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.done)?t._i(e.done,null)>-1:e.done},on:{click:function(n){return t.doneTodo(e.id,e.done)},change:function(n){var r=e.done,o=n.target,i=!!o.checked;if(Array.isArray(r)){var a=null,s=t._i(r,a);o.checked?s<0&&t.$set(e,"done",r.concat([a])):s>-1&&t.$set(e,"done",r.slice(0,s).concat(r.slice(s+1)))}else t.$set(e,"done",i)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newText,expression:"newText"}],attrs:{type:"text",placeholder:"Введите новый текст"},domProps:{value:t.newText},on:{input:[function(e){e.target.composing||(t.newText=e.target.value)},function(n){return t.editTodo(e.id,t.newText)}]}}),n("span",{staticClass:"todolist__item-text",class:e.done?"done":"will-done"},[t._v(t._s(e.text))]),n("button",{on:{click:function(n){return t.deleteTodo(e.id)}}},[t._v("Удалить")])])}),0)])},v=[],g={name:"ToDoList",data:function(){return{newText:"",loader:!0}},computed:{count:function(){return this.$store.state.count},list:function(){return this.$store.state.lists}},methods:{addTodo:function(){this.$store.dispatch("addData",{done:!1,text:this.newText,createdBy:new Date}),this.newText="",this.$router.push("/todolist/1")},deleteTodo:function(t){this.$store.dispatch("deleteData",{id:t})},doneTodo:function(t,e){this.$store.dispatch("setData",{id:t,done:!e})},editTodo:function(t,e){this.$store.dispatch("editData",{id:t,text:e})},sortTodos:function(t){this.$store.dispatch("changeSort")}},created:function(){var t=this;this.$store.dispatch("getDataOne",{id:this.$route.params.id}),setTimeout(function(){t.loader=!1},1e3)},updated:function(){this.$store.dispatch("getDataOne",{id:this.$route.params.id})}},w=g,x=(n("13fe"),Object(d["a"])(w,m,v,!1,null,null,null)),y=x.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todolist"},[n("div",{staticClass:"add__todo"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newText,expression:"newText"}],domProps:{value:t.newText},on:{input:function(e){e.target.composing||(t.newText=e.target.value)}}}),n("button",{on:{click:t.addTodo}},[t._v("\n        Добавить задачу\n      ")])]),n("div",{staticClass:"sort__todo"},[n("button",{on:{click:function(e){return t.sortTodos(t.$store.sort)}}},[t._v("\n        Сортировка\n      ")])]),t._l(t.list,function(e){return n("div",{key:e.id,staticClass:"todolist__item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.done,expression:"todo.done"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.done)?t._i(e.done,null)>-1:e.done},on:{click:function(n){return t.doneTodo(e.id,e.done)},change:function(n){var r=e.done,o=n.target,i=!!o.checked;if(Array.isArray(r)){var a=null,s=t._i(r,a);o.checked?s<0&&t.$set(e,"done",r.concat([a])):s>-1&&t.$set(e,"done",r.slice(0,s).concat(r.slice(s+1)))}else t.$set(e,"done",i)}}}),n("router-link",{staticClass:"todolist__item-text",class:e.done?"done":"will-done",attrs:{to:"/todoone/"+e.id}},[t._v(t._s(e.text))]),n("button",{on:{click:function(n){return t.deleteTodo(e.id)}}},[t._v("Удалить")])],1)})],2)},_=[],$={name:"ToDoList",data:function(){return{newText:""}},computed:{count:function(){return this.$store.state.count},list:function(){return this.$store.state.lists}},methods:{addTodo:function(){this.$store.dispatch("addData",{done:!1,text:this.newText,createdBy:new Date}),this.newText="",this.$router.push("/todolist/1")},deleteTodo:function(t){this.$store.dispatch("deleteData",{id:t})},doneTodo:function(t,e){this.$store.dispatch("setData",{id:t,done:!e})},editTodo:function(t,e){this.$store.dispatch("setData",{id:t,text:e})},sortTodos:function(t){this.$store.dispatch("changeSort")}},created:function(){this.$store.dispatch("getData",{page:this.$route.params.id})},updated:function(){this.$store.dispatch("getData",{page:this.$route.params.id})}},T=$,k=(n("cf4e"),Object(d["a"])(T,b,_,!1,null,null,null)),O=k.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page404"},[t._v("\n  404 page\n")])},j=[],R={name:"Page404"},A=R,S=Object(d["a"])(A,D,j,!1,null,null,null),C=S.exports,E=n("8aa5");i.a.config.productionTip=!1,i.a.use(h["a"]),i.a.use(f["a"]);var P={apiKey:"AIzaSyDbR66s2iSGOjMdZ1BC9DKcBFGZHaqfTV4",authDomain:"todolist-166c7.firebaseapp.com",databaseURL:"https://todolist-166c7.firebaseio.com",projectId:"todolist-166c7",storageBucket:"todolist-166c7.appspot.com",messagingSenderId:"612707875643",appId:"1:612707875643:web:00d96caf1d7d630a"};E["initializeApp"](P);var B=E["firestore"](),M=new h["a"].Store({state:{count:0,total:0,sort:"desc",lists:[]},mutations:{increment:function(t){t.count++},changeSort:function(t){t.sort="asc"===t.sort?"desc":"asc"},init:function(t,e){t.lists=e.newAray,t.total=e.globalIndex},initOne:function(t,e){t.lists=e.newAray},update:function(t,e){t.lists.unshift(e)},delete:function(t,e){t.lists.forEach(function(n,r){n.id===e&&t.lists.splice(r,1)})}},actions:{changeSort:function(t){var e=t.commit;e("changeSort")},incrementAsync:function(t,e){var n=t.commit;setTimeout(function(){n("increment")},e.amount)},getData:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var r,o,i,a,s,c,u,d;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,B.collection("todolist").orderBy("createdBy",this.state.sort).get();case 3:o=t.sent,i=10*n.page,a=i-10,s=i,c=[],u=0,o.forEach(function(t){if(u>=a&&u<s){var e=t.data();e.id=t.id,c.push(e)}u++}),d={newAray:c,globalIndex:u},r("init",d);case 12:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),getDataOne:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var r,o,i,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,B.collection("todolist").get();case 3:o=t.sent,i=[],o.forEach(function(t){if(t.id===n.id){var e=t.data();e.id=t.id,i.push(e)}}),a={newAray:i},r("initOne",a);case 8:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),addData:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var r,o,i,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,B.collection("todolist");case 3:return o=t.sent,t.next=6,o.add(n).id;case 6:i=t.sent,a=n,a.id=i,r("update",a);case 10:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),deleteData:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var o,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,t.next=3,B.collection("todolist").get();case 3:i=t.sent,i.forEach(function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e.id!==n.id){t.next=4;break}return t.next=3,e.ref.delete();case 3:o("delete",n.id);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());case 5:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),setData:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.commit,t.next=3,B.collection("todolist").get();case 3:o=t.sent,o.forEach(function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e.id!==n.id){t.next=3;break}return t.next=3,e.ref.update({done:n.done});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());case 5:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),editData:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.commit,t.next=3,B.collection("todolist").get();case 3:o=t.sent,o.forEach(function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e.id!==n.id){t.next=3;break}return t.next=3,e.ref.update({text:n.text});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());case 5:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}()}}),I=[{path:"/todoone/:id",component:y},{path:"/todolist/:id",component:O},{path:"/#/*",component:C}],L=new f["a"]({routes:I});new i.a({render:function(t){return t(p)},router:L,store:M}).$mount("#app")},"64a9":function(t,e,n){},"6f04":function(t,e,n){},cf4e:function(t,e,n){"use strict";var r=n("4482"),o=n.n(r);o.a}});
//# sourceMappingURL=app.35944fba.js.map