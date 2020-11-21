(this["webpackJsonpauroraborealis-frontend"]=this["webpackJsonpauroraborealis-frontend"]||[]).push([[0],{21:function(e,t,n){},30:function(e,t,n){e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),l=n(3),s=n(4),u=n(7),i=n(6),m=(n(21),n(5)),p=function(){return function(e){return fetch("http://localhost:3000/posts",{credentials:"include",method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){t.error?alert(t.error):e(function(e){return{type:"GET_POSTS",posts:e}}(t))})).catch(console.log)}},h=function(e){return{type:"CURRENT_USER",user:e}},d=Object(m.b)(null,{logout:function(){return function(e){return e({type:"REMOVE_USER"}),e({type:"CLEAR_POSTS"}),fetch("http://localhost:3000/logout",{credentials:"include",method:"DELETE"}).then((function(e){return e.json()})).then((function(e){return alert(e.notice)}))}}})((function(e){var t=e.logout,n=e.history;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(),n.push("/login")}},r.a.createElement("button",{type:"submit",className:"button"},"Log Out"))})),f=n(13),E=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleOnChange=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.handleOnSubmit=function(t){t.preventDefault(),e.props.login(e.state),e.setState({username:"",password:""}),e.props.history.push("/")},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"LoginForm"},r.a.createElement("form",{onSubmit:this.handleOnSubmit},r.a.createElement("label",{htmlFor:"username"}," Username: "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleOnChange,placeholder:"Username"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"password"}," Password: "),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleOnChange,placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Log In"})))}}]),n}(a.Component),g=Object(m.b)(null,{login:function(e){return function(t){return t({type:"REMOVE_USER"}),fetch("http://localhost:3000/login",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.error?(alert(e.error),console.log("Not Logged In")):t(h(e))})).catch(console.log)}}})(E),b=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",email:"",first_name:"",last_name:""},e.handleOnChange=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.handleOnSubmit=function(t){t.preventDefault(),e.props.signup(e.state),e.setState({username:"",password:"",email:"",first_name:"",last_name:""}),e.props.history.push("/")},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"SignInForm"},r.a.createElement("form",{onSubmit:this.handleOnSubmit},r.a.createElement("label",{htmlFor:"username"}," Username: "),r.a.createElement("br",null),r.a.createElement("input",{className:"InnerSignInForm",type:"text",name:"username",value:this.state.username,onChange:this.handleOnChange,placeholder:"Username"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"password"}," Password: "),r.a.createElement("br",null),r.a.createElement("input",{className:"InnerSignInForm",type:"password",name:"password",value:this.state.password,onChange:this.handleOnChange,placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"email"}," Email: "),r.a.createElement("br",null),r.a.createElement("input",{className:"InnerSignInForm",type:"email",name:"email",value:this.state.email,onChange:this.handleOnChange,placeholder:"Email"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"first_name"}," First Name: "),r.a.createElement("br",null),r.a.createElement("input",{className:"InnerSignInForm",type:"text",name:"first_name",value:this.state.first_name,onChange:this.handleOnChange,placeholder:"First Name"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"last_name"}," Last Name: "),r.a.createElement("br",null),r.a.createElement("input",{className:"InnerSignInForm",type:"text",name:"last_name",value:this.state.last_name,onChange:this.handleOnChange,placeholder:"Last Name"}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"button"},"Sign Up")))}}]),n}(a.Component),O=Object(m.b)(null,{signup:function(e){return function(t){var n={user:e};return fetch("http://localhost:3000/signup",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){e.error?(alert(e.error),console.log("Signup failed")):t(h(e))})).catch(console.log)}}})(b),v=n(12),y=n(2),S=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.comment,t=new Date(e.created_at).toLocaleDateString();return r.a.createElement("div",null,r.a.createElement("p",{className:"DateCommentSubmitted"},t),r.a.createElement("p",{className:"Comment"},e.context))}}]),n}(r.a.PureComponent),j=function(){return function(e){return fetch("http://localhost:3000/comments",{credentials:"include",method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){t.error?alert(t.error):e(function(e){return{type:"GET_COMMENTS",comments:e}}(t))})).catch(console.log)}},C=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleOnChange=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a.handleOnSubmit=function(e){e.preventDefault(),a.props.addComment(a.state),a.setState({context:""})},a.state={context:"",user_id:a.props.userLoggedIn.id,post_id:a.props.post.id},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"EnterCommentContainer"},r.a.createElement("form",{onSubmit:this.handleOnSubmit},r.a.createElement("label",{htmlFor:"context",className:"EnterComment"},"Enter Comment"),r.a.createElement("textarea",{className:"TextAreaComment",type:"text",name:"context",onChange:this.handleOnChange,value:this.state.context}),r.a.createElement("button",{type:"submit",className:"button"},"Submit")))}}]),n}(r.a.PureComponent),_=Object(y.f)(Object(m.b)(null,{addComment:function(e){return function(t){var n={comment:{context:e.context,user_id:e.user_id,post_id:e.post_id}};return fetch("http://localhost:3000/comments",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){e.error?alert(e.error):(t({type:"ADD_COMMENT",comment:e}),t({type:"CLEAR_POSTS"}),t(p()))})).catch(console.log)}}})(C)),P=function(e){var t=e.post,n=e.userLoggedIn,a=new Date(t.created_at).toLocaleDateString(),o=t.comments.filter((function(e){return e.context.length>0})).map((function(e){return r.a.createElement(S,{comment:e,key:e.id})}));return r.a.createElement("div",{className:"PostCardContainer",key:t.id},r.a.createElement("p",null,"Date Submitted: ",a),r.a.createElement("p",null,"Location: ",t.location),r.a.createElement("h4",null,"Story"),r.a.createElement("div",{className:"story"},t.story),r.a.createElement("p",null,"Comments:"),o.sort((function(e,t){return e.created_at>t.created_at?1:-1})),r.a.createElement(_,{post:t,userLoggedIn:n}))},N=function(e){var t=e.posts,n=e.userLoggedIn,a=t.map((function(e){return r.a.createElement(P,{key:e.id,post:e,userLoggedIn:n})}));return r.a.createElement("div",null,a.sort((function(e,t){return e.created_at>t.created_at?1:-1})))},L=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPosts(),this.props.fetchComments()}},{key:"render",value:function(){return r.a.createElement("div",{className:"PostsContainer"},r.a.createElement(N,{posts:this.props.posts,userLoggedIn:this.props.userLoggedIn}))}}]),n}(r.a.PureComponent),T=Object(m.b)((function(e){return{userLoggedIn:e.currentUserReducer,posts:e.postReducer,comments:e.commentReducer}}),{fetchPosts:p,fetchComments:j})(L),I=function(e){var t=e.post,n=e.userLoggedIn,a=(e.deletePost,e.history,new Date(t.created_at).toLocaleDateString()),o=t.comments.filter((function(e){return e.context.length>0})).map((function(e){return r.a.createElement(S,{comment:e,key:e.id})}));return r.a.createElement("div",{className:"PersonalPostContainer",key:t.id},r.a.createElement("p",null,"Date Submitted: ",a),r.a.createElement("p",null,"Location: ",t.location),r.a.createElement("h4",null,"Story"),r.a.createElement("div",{className:"story"},t.story),r.a.createElement("p",null,"Comments:"),o.sort((function(e,t){return e.created_at>t.created_at?1:-1})),r.a.createElement(_,{post:t,userLoggedIn:n}))},w=function(e){var t=e.posts,n=e.userLoggedIn,a=e.deletePost,o=e.history,c=t.filter((function(e){return e.user_id===n.id})).map((function(e){return r.a.createElement(I,{key:e.id,post:e,userLoggedIn:n,deletePost:a,history:o})}));return r.a.createElement("div",null,c.sort((function(e,t){return e.created_at>t.created_at?1:-1})))},D=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPosts(),this.props.fetchComments()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,{posts:this.props.posts,userLoggedIn:this.props.userLoggedIn,deletePost:this.props.deletePost,history:this.props.history}))}}]),n}(r.a.PureComponent),R=Object(m.b)((function(e){return{userLoggedIn:e.currentUserReducer,posts:e.postReducer,comments:e.commentReducer}}),{fetchPosts:p,fetchComments:j,deletePost:function(e,t){return function(n){return fetch("http://localhost:3000/posts/".concat(e),{credentials:"include",method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){a.error?alert(a.error):(n(function(e){return{type:"DELETE_POST",postId:e}}(e)),n({type:"CLEAR_POSTS"}),n(p()),t.push("/posts"))})).catch(console.log)}}})(D),x=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleOnChange=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a.handleOnSubmit=function(e){e.preventDefault(),a.props.createPost(a.state),a.setState({location:"",story:""}),a.props.history.push("/personalPosts")},a.state={location:"",story:"",user_id:a.props.userLoggedIn.id},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"form",onSubmit:this.handleOnSubmit},r.a.createElement("label",{htmlFor:"location",className:"InnerForm"},"Location"),r.a.createElement("input",{type:"text",name:"location",onChange:this.handleOnChange,value:this.state.location}),r.a.createElement("label",{htmlFor:"story",className:"InnerForm"},"Story"),r.a.createElement("textarea",{type:"text",name:"story",onChange:this.handleOnChange,value:this.state.story}),r.a.createElement("button",{type:"submit",className:"StoryButton"},"Submit Story")))}}]),n}(a.Component),k=Object(y.f)(Object(m.b)(null,{createPost:function(e){return function(t){var n={post:{location:e.location,story:e.story,user_id:e.user_id}};return fetch("http://localhost:3000/posts",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){e.error?alert(e.error):(t({type:"ADD_POST",post:e}),t({type:"CLEAR_POSTS"}),t(p()))})).catch(console.log)}}})(x)),U=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,{userLoggedIn:this.props.userLoggedIn}))}}]),n}(a.Component),F=Object(m.b)((function(e){return{userLoggedIn:e.currentUserReducer}}))(U),A=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={count:0},e.increment=function(){var t=e.state.count+1;e.setState({count:t})},e.deduction=function(){var t=e.state.count-1;e.setState({count:t})},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{className:"CounterButton",onClick:this.increment},"Click Me Increase!!"),r.a.createElement("button",{className:"CounterButton",onClick:this.deduction},"Click Me Decrease!!"),r.a.createElement("div",{className:"Number"},this.state.count))}}]),n}(a.Component),M=Object(m.b)((function(e){return{userLoggedIn:!!e.currentUserReducer}}))((function(e){return e.userLoggedIn?r.a.createElement("div",{className:"navigation"},r.a.createElement(v.b,{to:"/posts",activeStyle:{color:"gold"}},r.a.createElement("p",null," All Posts ")),r.a.createElement(v.b,{to:"/personalPosts",activeStyle:{color:"gold"}},r.a.createElement("p",null," Personal Posts ")),r.a.createElement(v.b,{to:"/createPost",activeStyle:{color:"gold"}},r.a.createElement("p",null," Create Posts ")),r.a.createElement(v.b,{to:"/logout",activeStyle:{color:"gold"}},r.a.createElement("p",null," Logout ")),r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/posts",component:T}),r.a.createElement(y.a,{exact:!0,path:"/personalPosts",component:R}),r.a.createElement(y.a,{exact:!0,path:"/createPost",component:F}),r.a.createElement(y.a,{exact:!0,path:"/logout",component:d}))):r.a.createElement("div",{className:"navigation"},r.a.createElement(v.b,{to:"/login",activeStyle:{color:"gold"}},r.a.createElement("p",null," Login ")),r.a.createElement(v.b,{to:"/signup",activeStyle:{color:"gold"}},r.a.createElement("p",null," Sign Up ")),r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/login",component:g}),r.a.createElement(y.a,{exact:!0,path:"/signup",component:O})),r.a.createElement(A,null))})),J=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,null))}}]),n}(r.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=n(14),B=n(28),G=n(17),W=n(29),X=[];var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POSTS":return t.posts;case"ADD_POST":return[].concat(Object(W.a)(e),[t.post]);case"DELETE_POST":return e.filter((function(e){return e.id!==t.postId}));case"UPDATE_POST":return e.map((function(e){return e.id===t.post.id?t.post:e}));case"CLEAR_POSTS":return X;default:return e;case"UPVOTE_POST":return e.map((function(e){return e.id===t.postId?Object(G.a)(Object(G.a)({},e),{},{votes:e.votes+=1}):e}));case"DOWNVOTE_POST":return e.map((function(e){return e.id===t.postId&&e.votes>0?Object(G.a)(Object(G.a)({},e),{},{votes:e.votes-=1}):e}))}};var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CURRENT_USER":return console.log("Set Current User"),t.user;case"REMOVE_USER":return console.log("Removed User"),null;default:return console.log("Default"),e}},z=Object(V.c)({currentUserReducer:q,postReducer:$}),H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.d,K=Object(V.e)(z,H(Object(V.a)(B.a)));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:K},r.a.createElement(v.a,null,r.a.createElement(J,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.1467857f.chunk.js.map