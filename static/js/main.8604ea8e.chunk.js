(this.webpackJsonpreactm3=this.webpackJsonpreactm3||[]).push([[0],{32:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a(20),i=a.n(c),l=a(8),r=a(9),o=a(11),d=a(10),j=a(7),h=a(2),b=function(e){return Object(n.jsx)("div",{children:function(e){var t=e.topicdata;if(t)return t.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:e.name}),Object(n.jsx)(j.b,{className:"btn btn-info",to:"/post/".concat(e.id),children:"Details"})]},e.id)}))}(e)})},p=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={topics:""},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://my-json-server.typicode.com/Akhlaquea01/JsonServer/Languages",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({topics:t})}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"panel panel-success",children:[Object(n.jsx)("div",{className:"panel-heading",children:"Panel Posts Header"}),Object(n.jsx)("div",{className:"panel-body",children:Object(n.jsx)("div",{className:"jumbotron",children:Object(n.jsx)(b,{topicdata:this.state.topics})})})]})}}]),a}(s.Component),m=function(){return Object(n.jsxs)("div",{className:"panel panel-warning",children:[Object(n.jsx)("div",{className:"panel-heading",children:"Panel Profile Header"}),Object(n.jsx)("div",{className:"panel-body",children:"Panel Profile Body"})]})},u=function(){return Object(n.jsxs)("div",{className:"panel panel-primary",children:[Object(n.jsx)("div",{className:"panel-heading",children:"Panel Home Header"}),Object(n.jsx)("div",{className:"panel-body",children:"Panel Home Content"})]})},O=a(13),v=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={name:"",details:""},e.handleChangeName=e.handleChangeName.bind(Object(O.a)(e)),e.handleChangeDetails=e.handleChangeDetails.bind(Object(O.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(O.a)(e)),e}return Object(r.a)(a,[{key:"handleChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"handleChangeDetails",value:function(e){this.setState({details:e.target.value})}},{key:"handleSubmit",value:function(){var e={id:Math.floor(1e3*Math.random()),name:this.state.name,details:this.state.details};fetch("http://my-json-server.typicode.com/Akhlaquea01/JsonServer/Languages",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(this.props.history.push("/posts"))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"panel panel-danger",children:[Object(n.jsx)("div",{className:"panel-heading",children:"Panel Forms Header"}),Object(n.jsxs)("div",{className:"panel-body",children:[Object(n.jsxs)("div",{className:"forn-group",children:[Object(n.jsx)("label",{htmlFor:"name",children:"Name"}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Name of Topic",id:"name",value:this.state.name,onChange:this.handleChangeName})]}),Object(n.jsxs)("div",{className:"forn-group",children:[Object(n.jsx)("label",{htmlFor:"details",children:"Details"}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Details of Topic",id:"details",value:this.state.details,onChange:this.handleChangeDetails})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-success",onClick:this.handleSubmit,children:"Submit"})]})]})}}]),a}(s.Component),x=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={topicd:""},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("http://my-json-server.typicode.com/Akhlaquea01/JsonServer/Languages","/").concat(this.props.match.params.id," "),{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({topicd:t})}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"panel panel-danger",children:[Object(n.jsx)("div",{className:"panel-heading",children:"Panel Post Details Header"}),Object(n.jsxs)("div",{className:"panel-body",children:[Object(n.jsx)("h2",{children:this.state.topicd.name}),Object(n.jsx)("p",{children:this.state.topicd.details})]})]})}}]),a}(s.Component),f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(n.jsx)(j.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("header",{children:Object(n.jsx)("nav",{className:"navbar navbar-inverse",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsxs)("div",{className:"navbar-header",children:[Object(n.jsxs)("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar",children:[Object(n.jsx)("span",{className:"icon-bar"}),Object(n.jsx)("span",{className:"icon-bar"}),Object(n.jsx)("span",{className:"icon-bar"})]}),Object(n.jsx)(j.b,{to:"/",className:"navbar-brand",children:"Edureka"})]}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"myNavbar",children:Object(n.jsxs)("ul",{className:"nav navbar-nav",children:[Object(n.jsx)("li",{children:Object(n.jsx)(j.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(j.b,{to:"/posts",children:"Posts"})}),Object(n.jsx)("li",{children:Object(n.jsx)(j.b,{to:"/profile",children:"Profile"})}),Object(n.jsx)("li",{children:Object(n.jsx)(j.b,{to:"/forms",children:"Forms"})})]})})]})})}),Object(n.jsx)(h.a,{exact:!0,path:"/",component:u}),Object(n.jsx)(h.a,{path:"/posts",component:p}),Object(n.jsx)(h.a,{path:"/profile",component:m}),Object(n.jsx)(h.a,{path:"/forms",component:v}),Object(n.jsx)(h.a,{path:"/post/:id",component:x})]})})}}]),a}(s.Component);i.a.render(Object(n.jsx)(f,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.8604ea8e.chunk.js.map