(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{102:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(9),s=c.n(n),r=(c(71),c(42)),i=c(54),o=c(12),l=c(57),u=c.n(l),j=c(33),d=c(8),b=(c(91),c(3)),h=function(){return Object(b.jsxs)("div",{style:{textAlign:"center",marginBottom:10},children:["Made with \u2665 by"," ",Object(b.jsx)("a",{href:"https://www.facebook.com/jp.jphabs",style:{cursor:"pointer"},children:"Jphabs Khalifa"})]})},O=(c(93),function(){return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("strong",{children:Object(b.jsx)("h1",{children:Object(b.jsx)(j.b,{to:"/",className:"title",children:"Quiz Hub"})})}),Object(b.jsx)("hr",{className:"divider"})]})}),v=c(140),g=c(141),m=c(138),x=function(e){var t=e.children;return Object(b.jsx)("div",{style:{width:"100%",padding:10,marginBottom:10,borderRadius:4,backgroundColor:"orangered",textAlign:"center",color:"white",textTransform:"capitalize"},children:t})},f=[{category:"General Knowledge",value:9},{category:"Books",value:10},{category:"Films",value:11},{category:"Music",value:12},{category:"Musicals and Theaters",value:13},{category:"Television",value:14},{category:"Video Games",value:15},{category:"Board Games",value:16},{category:"Science and Nature",value:17},{category:"Computer",value:18},{category:"Mathematics",value:19},{category:"Mythology",value:20},{category:"Sports",value:21},{category:"Geography",value:22},{category:"History",value:23},{category:"Politics",value:24},{category:"Celebrities",value:26},{category:"Animals",value:27},{category:"Vehicles",value:28},{category:"Comics",value:29},{category:"Gadgets",value:30},{category:"Japanese Anime",value:31},{category:"Cartoon and Animations",value:32}],p=(c(102),function(e){var t=e.name,c=e.setName,n=e.fetchQuestions,s=Object(a.useState)(""),r=Object(o.a)(s,2),i=r[0],l=r[1],u=Object(a.useState)(""),j=Object(o.a)(u,2),h=j[0],O=j[1],p=Object(a.useState)(!1),y=Object(o.a)(p,2),S=y[0],N=y[1],z=Object(d.f)();return Object(b.jsxs)("div",{className:"content",children:[Object(b.jsxs)("div",{className:"settings",children:[Object(b.jsx)("span",{style:{fontSize:30},children:"Quiz Settings"}),Object(b.jsxs)("div",{className:"settings__select",children:[S&&Object(b.jsx)(x,{children:"Please Fill all the feilds"}),Object(b.jsx)(v.a,{style:{marginBottom:25},label:"Enter Your Name",variant:"outlined",onChange:function(e){return c(e.target.value)}}),Object(b.jsx)(v.a,{select:!0,label:"Select Category",value:i,onChange:function(e){return l(e.target.value)},variant:"outlined",style:{marginBottom:30},children:f.map((function(e){return Object(b.jsx)(g.a,{value:e.value,children:e.category},e.category)}))}),Object(b.jsxs)(v.a,{select:!0,label:"Select Difficulty",value:h,onChange:function(e){return O(e.target.value)},variant:"outlined",style:{marginBottom:30},children:[Object(b.jsx)(g.a,{value:"easy",children:"Easy"},"Easy"),Object(b.jsx)(g.a,{value:"medium",children:"Medium"},"Medium"),Object(b.jsx)(g.a,{value:"hard",children:"Hard"},"Hard")]}),Object(b.jsx)(m.a,{variant:"contained",color:"primary",size:"large",onClick:function(){i&&h&&t?(N(!1),n(i,h),z.push("/quiz")):N(!0)},children:"Start Quiz"})]})]}),Object(b.jsx)("img",{src:"/quiz.svg",className:"banner",alt:"quiz app"})]})}),y=c(19),S=c(139),N=(c(104),function(e){var t=e.currQues,c=e.setCurrQues,n=e.questions,s=e.options,r=e.correct,i=e.setScore,l=e.score,u=e.setQuestions,j=Object(a.useState)(),h=Object(o.a)(j,2),O=h[0],v=h[1],g=Object(a.useState)(!1),f=Object(o.a)(g,2),p=f[0],y=f[1],S=Object(d.f)(),N=function(e){return O===e&&O===r?"select":O===e&&O!==r?"wrong":e===r?"select":void 0};return Object(b.jsxs)("div",{className:"question",children:[Object(b.jsxs)("h1",{children:["Question ",t+1," :"]}),Object(b.jsxs)("div",{className:"singleQuestion",children:[Object(b.jsx)("h2",{children:n[t].question}),Object(b.jsxs)("div",{className:"options",children:[p&&Object(b.jsx)(x,{children:p}),s&&s.map((function(e){return Object(b.jsx)("button",{className:"singleOption  ".concat(O&&N(e)),onClick:function(){return function(e){v(e),e===r&&i(l+1),y(!1)}(e)},disabled:O,children:e},e)}))]}),Object(b.jsxs)("div",{className:"controls",children:[Object(b.jsx)(m.a,{variant:"contained",color:"secondary",size:"large",style:{width:185},href:"/",onClick:function(){return c(0),void u()},children:"Quit"}),Object(b.jsx)(m.a,{variant:"contained",color:"primary",size:"large",style:{width:185},onClick:function(){t>8?S.push("/result"):O?(c(t+1),v()):y("Please select an option first")},children:t>20?"Submit":"Next Question"})]})]})]})}),z=(c(105),function(e){var t,c=e.name,n=e.questions,s=e.score,r=e.setScore,i=e.setQuestions,l=Object(a.useState)(),u=Object(o.a)(l,2),j=u[0],d=u[1],h=Object(a.useState)(0),O=Object(o.a)(h,2),v=O[0],g=O[1];Object(a.useEffect)((function(){var e,t;d(n&&m([null===(e=n[v])||void 0===e?void 0:e.correct_answer].concat(Object(y.a)(null===(t=n[v])||void 0===t?void 0:t.incorrect_answers))))}),[v,n]),console.log(n);var m=function(e){return e.sort((function(){return Math.random()-.5}))};return Object(b.jsxs)("div",{className:"quiz",children:[Object(b.jsxs)("span",{className:"subtitle",children:["Welcome, ",c]}),n?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"quizInfo",children:[Object(b.jsx)("span",{children:n[v].category}),Object(b.jsxs)("span",{children:["Score : ",s]})]}),Object(b.jsx)(N,{currQues:v,setCurrQues:g,questions:n,options:j,correct:null===(t=n[v])||void 0===t?void 0:t.correct_answer,score:s,setScore:r,setQuestions:i})]}):Object(b.jsx)(S.a,{style:{margin:100},color:"inherit",size:150,thickness:1})]})}),w=(c(106),function(e){var t=e.name,c=e.score,n=Object(d.f)();return Object(a.useEffect)((function(){t||n.push("/")}),[t,n]),Object(b.jsxs)("div",{className:"result",children:[Object(b.jsxs)("span",{className:"title",children:["Final Score : ",c]}),Object(b.jsx)(m.a,{variant:"contained",color:"secondary",size:"large",style:{alignSelf:"center",marginTop:20},href:"/",children:"Go to homepage"})]})});var Q=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(),l=Object(o.a)(s,2),v=l[0],g=l[1],m=Object(a.useState)(0),x=Object(o.a)(m,2),f=x[0],y=x[1],S=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t,c,a,s,i=arguments;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",c=i.length>1&&void 0!==i[1]?i[1]:"",e.next=4,u.a.get("https://opentdb.com/api.php?amount=10".concat(t&&"&category=".concat(t)).concat(c&&"&difficulty=".concat(c),"&type=multiple"));case 4:a=e.sent,s=a.data,n(s.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(j.a,{children:[Object(b.jsxs)("div",{className:"app",style:{backgroundImage:'url("/ques1.png")'},children:[Object(b.jsx)(O,{}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/",exact:!0,children:Object(b.jsx)(p,{name:v,setName:g,fetchQuestions:S})}),Object(b.jsx)(d.a,{path:"/quiz",children:Object(b.jsx)(z,{name:v,questions:c,score:f,setScore:y,setQuestions:n})}),Object(b.jsx)(d.a,{path:"/result",children:Object(b.jsx)(w,{name:v,score:f})})]})]}),Object(b.jsx)(h,{})]})};s.a.render(Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(Q,{})}),document.getElementById("root"))},71:function(e,t,c){},91:function(e,t,c){},93:function(e,t,c){}},[[107,1,2]]]);
//# sourceMappingURL=main.03c119e5.chunk.js.map