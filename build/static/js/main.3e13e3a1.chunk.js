(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{100:function(e,t,n){},105:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(9),r=n.n(o),l=n(93),u=n(10),i=n(13),m=(n(100),function(){return c.a.createElement("header",null,c.a.createElement("nav",null,c.a.createElement(i.b,{activeClassName:"active",exact:!0,to:"/"},"React"),c.a.createElement(i.b,{activeClassName:"active",to:"/doc"},"\u6587\u6863"),c.a.createElement(i.b,{activeClassName:"active",to:"/tuto"},"\u6559\u7a0b"),c.a.createElement(i.b,{activeClassName:"active",to:"/blog"},"\u535a\u5ba2"),c.a.createElement(i.b,{activeClassName:"active",to:"/comm"},"\u793e\u533a")))}),s=function(){return c.a.createElement("div",null,"Comm")},p=function(e){return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){localStorage.setItem("userinfo","tom"),e.history.replace(e.location.state)}},"\u767b\u5f55"))},E=function(e){return console.log(e),c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h2",null,"React"),c.a.createElement("p",null,"\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 JavaScript \u5e93"),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return e.history.push("/doc")}},"\u5feb\u901f\u5f00\u59cb"),c.a.createElement("button",{onClick:function(){return e.history.push("/tuto")}},"\u5165\u95e8\u6559\u7a0b")))},d=(n(105),n(173),[{path:"/",exact:!0,component:E},{path:"/Doc",component:Object(u.g)((function(e){var t=e.routes;return c.a.createElement("div",{className:"doc"},c.a.createElement("div",{className:"content"},t.map((function(e){return c.a.createElement(h,e)})),c.a.createElement(u.a,{from:"/doc",to:"/doc/core"}),c.a.createElement("ol",null,c.a.createElement("li",null,c.a.createElement(i.b,{to:"/doc/core"},"\u6838\u5fc3\u6982\u5ff5")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/doc/guide"},"\u9ad8\u7ea7\u6307\u5f15")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/doc/api"},"API")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/doc/hooks"},"Hooks")))))})),pri:!0,routes:[{path:"/doc/core",component:function(){return c.a.createElement("h1",null,"Core")}},{path:"/doc/guide",component:function(){return c.a.createElement("h1",null,"Guide")}},{path:"/doc/api",component:function(){return c.a.createElement("h1",null,"Api")}},{path:"/doc/hooks",component:function(){return c.a.createElement("h1",null,"Hooks")}}]},{path:"/Comm",component:s},{path:"/Login",component:p},{path:"/Tuto",component:function(){return c.a.createElement("div",null,"Tuto")},pri:!0},{path:"/Blog",component:function(){return c.a.createElement("div",null,"Blog")}}]),h=function(e){return e.pri?c.a.createElement(f,Object.assign({},e,{routes:e.routes})):c.a.createElement(u.b,{path:e.path,render:function(t){return c.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})};function f(e){var t=e.component,n=Object(l.a)(e,["component"]);return c.a.createElement(u.b,Object.assign({},n,{render:function(e){var a=e.location;return localStorage.getItem("userinfo")?c.a.createElement(t,n):c.a.createElement(u.a,{to:{pathname:"/login",state:a}})}}))}var v=function(){return c.a.createElement(i.a,null,c.a.createElement(m,null),c.a.createElement(u.d,null,d.map((function(e){var t=Object.assign({},e);return c.a.createElement(h,t)}))))},b=n(89),g=n(90),j=n(94),C=n(91),k=function(e,t){var n=function(n){Object(j.a)(o,n);var a=Object(C.a)(o);function o(){var e;return Object(b.a)(this,o),(e=a.call(this)).state={data:[]},e}return Object(g.a)(o,[{key:"componentDidMount",value:function(){var e=this;fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState({data:t.data})}))}},{key:"render",value:function(){return c.a.createElement(e,Object.assign({},this.props,{data:this.state.data}))}}]),o}(a.Component);return n.displayName="withFetch(".concat(e.name,")"),n};k((function(e){return c.a.createElement("div",null,c.a.createElement("h1",null,"\u6807\u9898",e.name),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.content}}))}),"https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312"),k((function(e){return c.a.createElement("ul",null,e.data.map((function(e){return c.a.createElement("li",null,e.title)})))}),"https://cnodejs.org/api/v1/topics"),n(92),c.a.createContext();r.a.render(c.a.createElement(v,null),document.getElementById("root"))},95:function(e,t,n){e.exports=n(174)}},[[95,1,2]]]);
//# sourceMappingURL=main.3e13e3a1.chunk.js.map