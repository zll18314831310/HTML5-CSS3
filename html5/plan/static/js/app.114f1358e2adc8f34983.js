webpackJsonp([1],{0:function(t,e){},"0pSV":function(t,e){},Dvxo:function(t,e){},EU8S:function(t,e){},Jmt5:function(t,e){},MdUN:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel panel-default"},[this._m(0),this._v(" "),e("div",{staticClass:"panel-body"},[e("h2",{staticClass:"text-center"},[this._v(this._s(this.time)+"小时")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-heading"},[e("h1",{staticClass:"text-center"},[this._v("已有时长")])])}]};var n={name:"App",components:{Sidebar:s("VU/8")({name:"Sidebar",computed:{time:function(){return this.$store.state.totalTime}}},i,!1,function(t){s("gljq")},null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"wrapper"}},[e("nav",{staticClass:"navbar navbar-default"},[e("div",{staticClass:"container"},[this._m(0),this._v(" "),e("ul",{staticClass:"nav navbar-nav"},[e("li",[e("router-link",{attrs:{to:"/home"}},[this._v("首页")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/time-entries"}},[this._v("计划列表")])],1)])])]),this._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"col-sm-3"},[e("sidebar")],1),this._v(" "),e("div",{staticClass:"col-sm-9"},[e("router-view")],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-brand"},[e("i",{staticClass:"glyphicon glyphicon-time"}),this._v("\n        计划板\n      ")])}]};var l=s("VU/8")(n,o,!1,function(t){s("MdUN")},null,null).exports,r=s("/ocq"),c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"jumbotron"},[e("h2",[this._v("任务追踪")]),this._v(" "),e("p",[e("strong",[e("router-link",{attrs:{to:"/time-entries"}},[this._v("创建一个任务")])],1)])])},staticRenderFns:[]};var m=s("VU/8")({},c,!1,function(t){s("EU8S")},null,null).exports,u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["/time-entries/log-time"!==t.$route.path?s("router-link",{staticClass:"btn btn-primary",attrs:{to:"/time-entries/log-time"}},[t._v("创建")]):t._e(),t._v(" "),"/time-entries/log-time"===t.$route.path?s("div",[s("h3",[t._v("创建")])]):t._e(),t._v(" "),s("hr"),t._v(" "),s("router-view"),t._v(" "),s("div",{staticClass:"time-entries"},[t.plans.length?t._e():s("p",[s("strong",[t._v("还没有任何计划")])]),t._v(" "),s("div",{staticClass:"list-group"},t._l(t.plans,function(e,a){return s("a",{key:a,staticClass:"list-group-item"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-2 user-details"},[s("img",{staticClass:"avatar img-circle img-responsive",attrs:{src:e.avatar,alt:""}}),t._v(" "),s("p",{staticClass:"text-center"},[s("strong",[t._v(t._s(e.name))])])]),t._v(" "),s("div",{staticClass:"col-sm-2 text-center time-block"},[s("h3",{staticClass:"list-group-item-text total-time"},[s("i",{staticClass:"glyphicon glyphicon-time"}),t._v("\n                  "+t._s(e.totalTime)+"\n                ")]),t._v(" "),s("p",{staticClass:"label label-primary text-center"},[s("i",{staticClass:"glyphicon glyphicon-calendar"}),t._v("\n                  "+t._s(e.date)+"\n                ")])]),t._v(" "),s("div",{staticClass:"col-sm-7 comment-section"},[s("p",[t._v(t._s(e.comment))])]),t._v(" "),s("div",{staticClass:"col-sm-1"},[s("button",{staticClass:"btn btn-xs btn-danger delete-button",on:{click:function(e){t.deletePlan(a)}}},[t._v("x")])])])])}))])],1)},staticRenderFns:[]};var v=s("VU/8")({name:"TimeEntries",computed:{plans:function(){return this.$store.state.list}},methods:{deletePlan:function(t){this.$store.dispatch("decTotalTime",this.plans[t].totalTime),this.$store.dispatch("deletePlan",t)}}},u,!1,function(t){s("Dvxo")},null,null).exports,d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-horizontal"},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"col-sm-6"},[s("label",[t._v("日期")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-sm-6"},[s("label",[t._v("时间")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.totalTime,expression:"totalTime"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Hours"},domProps:{value:t.totalTime},on:{input:function(e){e.target.composing||(t.totalTime=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group"},[s("div",{staticClass:"col-sm-12"},[s("label",[t._v("备注")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"form-control",attrs:{type:"text",placeholder:"comment"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})])]),t._v(" "),s("button",{staticClass:"btn btn-primary",on:{click:function(e){t.save()}}},[t._v("保存")]),t._v(" "),s("router-link",{staticClass:"btn btn-danger",attrs:{to:"/time-entries"}},[t._v("取消")]),t._v(" "),s("hr")],1)},staticRenderFns:[]};var p=s("VU/8")({data:function(){return{date:null,totalTime:"",comment:""}},methods:{save:function(){if(this.date&&this.totalTime&&this.comment){var t={name:"llzzzz",image:"https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256",date:this.date,totalTime:this.totalTime,comment:this.comment};this.$store.dispatch("savePlan",t),this.$store.dispatch("addTotalTime",this.totalTime),this.$router.go(-1)}}}},d,!1,function(t){s("0pSV")},null,null).exports,_={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("404")])},staticRenderFns:[]};var h=s("VU/8")({},_,!1,function(t){s("oVoR")},null,null).exports;a.a.use(r.a);var f,C=new r.a({routes:[{path:"/",component:m},{path:"/home",component:m},{path:"/time-entries",component:v,children:[{path:"log-time",component:p}]},{path:"*",component:h}]}),g=(s("Jmt5"),s("8+8L")),T=s("NYxO"),b=s("bOdI"),E=s.n(b),x=s("woOf"),y=s.n(x),$=(f={},E()(f,"ADD_TOTAL_TIME",function(t,e){t.totalTime=t.totalTime+ +e}),E()(f,"DEC_TOTAL_TIME",function(t,e){t.totalTime=t.totalTime-e}),E()(f,"SAVE_PLAN",function(t,e){t.list.push(y()({name:"llzzzz",avatar:"https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256"},e))}),E()(f,"DELETE_PLAN",function(t,e){t.list.splice(e,1)}),f),A={addTotalTime:function(t,e){(0,t.commit)("ADD_TOTAL_TIME",e)},decTotalTime:function(t,e){(0,t.commit)("DEC_TOTAL_TIME",e)},savePlan:function(t,e){(0,t.commit)("SAVE_PLAN",e)},deletePlan:function(t,e){(0,t.commit)("DELETE_PLAN",e)}};a.a.use(T.a);var P=new T.a.Store({state:{totalTime:0,list:[]},mutations:$,actions:A});a.a.use(g.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:C,store:P,components:{App:l},template:"<App/>"})},gljq:function(t,e){},oVoR:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.114f1358e2adc8f34983.js.map