(window["webpackJsonpfrontend-web-perso"]=window["webpackJsonpfrontend-web-perso"]||[]).push([[0],{221:function(e,a,t){e.exports=t(371)},226:function(e,a,t){},227:function(e,a,t){},371:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(20),c=t.n(o),i=(t(226),t(207)),l=t(62),s=t(73),u=t(48),m=t(194),p=t(195),d=t(209),f=(t(227),t(23)),h=t.n(f),b=t(42),E=t(87),w=t.n(E),g="https://lapx.herokuapp.com";function k(e){return v.apply(this,arguments)}function v(){return(v=Object(b.a)(h.a.mark(function e(a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get(g+"/dataGraphs?token="+a).then(function(e){return e.data}).catch(function(e){alert("Api is down."),console.log(e)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function y(e){return x.apply(this,arguments)}function x(){return(x=Object(b.a)(h.a.mark(function e(a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get(g+"/auth?token="+a).then(function(e){return e.data}).catch(function(e){alert("Api is down."),console.log(e)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(e,a){return j.apply(this,arguments)}function j(){return(j=Object(b.a)(h.a.mark(function e(a,t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.dir(a),console.dir(t),e.next=4,w.a.post(g+"/addGraphs",{token:a,amount:t},{headers:{"Content-Type":"text/plain"}}).catch(function(e){alert("Api is down."),console.log(e)});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var N=t(136),C=t.n(N);function S(){return(new C.a).get("token")}var A=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(p.a)(a).call(this,e))).state={email:"",picture:""},t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){document.documentElement.classList.toggle("animatedBackground"),function(){var e=new C.a,a=window.location.search,t=new URLSearchParams(a).get("token");if(null===t){var n=e.get("token");null!=n&&(t=n)}null!==t&&e.set("token",t)}(),this.getUserInfo()}},{key:"componentWillUnmount",value:function(){document.documentElement.classList.toggle("animatedBackground")}},{key:"getUserInfo",value:function(){var e=this;y(S()).then(function(a){return e.setState({email:a.Email,picture:a.Picture})})}},{key:"render",value:function(){var e=this.state,a=e.email;e.picture;return r.a.createElement("div",{id:"welcomeText",className:"tile is-ancestor has-text-centered is-vertical"},r.a.createElement("div",{className:"tile is-parent "},r.a.createElement("article",{className:"tile is-child"},r.a.createElement("p",{id:"welcomeTitle",className:"title"},"LapX Dashboard"),r.a.createElement("div",{className:"content"},"A beautiful dashboard loaded with random data."),r.a.createElement("div",{className:""==a?"is-hidden":"content"},"Welcome ",a))))}}]),a}(n.Component),G=t(14),P=t(405),L=t(406),D=t(112),F=t(404),B=t(376),z=t(401),I=t(55),Q=t.n(I),W=t(86),M=t(138),T=t(407),U="https://lapx.herokuapp.com/",R=Q()(function(e){return Object(z.a)({navbarEnd:{marginLeft:"auto","&:hover":{color:"#add5ff",background:"none"}},homeAppBar:{background:"transparent",boxShadow:"none",zIndex:e.zIndex.drawer+1},appBar:{background:"#004587",boxShadow:"none",zIndex:e.zIndex.drawer+1},button:{"&:hover":{color:"#add5ff",background:"none"}}})}),J=function(e){var a=R(),t=e.theme,o=Object(n.useState)(window.location.hash),c=Object(G.a)(o,2),i=c[0],l=c[1],s=Object(n.useState)(""),u=Object(G.a)(s,2),m=u[0],p=u[1];Object(n.useEffect)(function(){window.addEventListener("hashchange",d),f()},[]);var d=function(){l(window.location.hash)},f=function(){var e=Object(b.a)(h.a.mark(function e(){var a,t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=S(),e.next=3,y(a);case 3:t=e.sent,p(t.Picture);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(F.a,{theme:t},r.a.createElement(P.a,{position:"relative",className:"#/"==i?a.homeAppBar:a.appBar},r.a.createElement(L.a,null,r.a.createElement(B.a,{color:"primary",href:"/SitePersoFrontend/#/",className:a.button},r.a.createElement(D.a,null,"Home")),r.a.createElement(B.a,{color:"primary",href:"/SitePersoFrontend/#/Dashboard",className:a.button},r.a.createElement(D.a,null,"Dashboard")),r.a.createElement(B.a,{color:"primary",href:U+"/auth/google/login",className:""==m?a.navbarEnd:"is-hidden"},r.a.createElement(D.a,null,"Login")),r.a.createElement(B.a,{color:"primary",href:U+"/auth/google/login",className:""==m?"is-hidden":a.navbarEnd},r.a.createElement(T.a,{src:m})),r.a.createElement(B.a,{color:"primary",className:a.button,href:"https://github.com/LapX"},r.a.createElement(W.a,{icon:M.a})),r.a.createElement(B.a,{color:"primary",className:a.button,href:"https://www.linkedin.com/in/tommy-montreuil-30714ba8/"},r.a.createElement(W.a,{icon:M.b})))))},X=t(74),$=t.n(X),H=t(419),V=t(422),q=t(424),K=t(425),Y=t(416),Z=Q()(function(){return $()({container:{width:440,backgroundColor:"#242424",margin:10},containerMobile:{width:"auto",backgroundColor:"#242424",margin:10,borderRadius:10},typography:{color:"white",fontSize:20,margin:20,marginBottom:-50,marginLeft:"auto",width:"70%"}})}),_={grid:{stroke:"grey"},ticks:{opacity:0},tickLabels:{fill:"white",font:"arial"}},ee=function(e){var a=Z(),t=e.theme,n=e.EarningsGraphData;return r.a.createElement(F.a,{theme:t},r.a.createElement("div",{className:window.matchMedia("(max-width: 570px)").matches?a.containerMobile:a.container},r.a.createElement(D.a,{className:a.typography},"Earnings in the last ",n.length," years"),r.a.createElement(H.a,{domainPadding:30,theme:V.a.material},r.a.createElement(q.a,{tickValues:["Quarter 1","Quarter 2","Quarter 3","Quarter 4"],style:_}),r.a.createElement(q.a,{dependentAxis:!0,tickFormat:function(e){return"$".concat(e/1e3,"k")},style:_}),r.a.createElement(K.a,{colorScale:"cool"},n.map(function(e){return r.a.createElement(Y.a,{key:e.ID,data:e.Tuples,x:"Quarter",y:"Earnings"})})))))},ae=t(418),te=t(411),ne=t(412),re=t(206),oe=t(414),ce=t(415),ie=t(423),le=t(410),se=t(413),ue=t(421),me=Q()(function(e){return $()({drawerOpen:{width:170,flexShrink:0},drawerClosed:{width:e.spacing(7)+1,flexShrink:0},drawerPaperOpen:{width:170,backgroundColor:"#242424",color:"#ffffff"},drawerPaperClosed:{width:e.spacing(7)+1,backgroundColor:"#242424",color:"#ffffff"},expansionPanel:{backgroundColor:"#242424",color:"#ffffff"},button:{backgroundColor:"#202020",color:"#ffffff",fontSize:25,width:60},avatar:{backgroundColor:"#004587",marginRight:12,marginLeft:10},toolbar:e.mixins.toolbar})}),pe=function(e){var a=e.theme,t=e.updateCallback,o=me(),c=Object(n.useState)(!1),i=Object(G.a)(c,2),l=i[0],s=i[1],u=Object(n.useState)(!1),m=Object(G.a)(u,2),p=m[0],d=m[1],f=function(){var e=Object(b.a)(h.a.mark(function e(a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(S(),a);case 2:t();case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),E=function(){s(!l),d(!p)};return r.a.createElement(F.a,{theme:a},r.a.createElement(ae.a,{theme:a,className:l?o.drawerOpen:o.drawerClosed,variant:"permanent",classes:{paper:l?o.drawerPaperOpen:o.drawerPaperClosed}},r.a.createElement("div",{className:o.toolbar}),r.a.createElement(B.a,{onClick:E},r.a.createElement(ue.a,{color:"primary"})),r.a.createElement(ie.a,{className:o.expansionPanel,expanded:p&&l},r.a.createElement(le.a,{onClick:l?function(){d(!p)}:E},r.a.createElement(te.a,{button:!0,key:"Graphs"},r.a.createElement(T.a,{className:o.avatar},r.a.createElement(W.a,{icon:re.a})),r.a.createElement(ne.a,{primary:"Graphs",className:l?"":"is-hidden"}))),r.a.createElement(se.a,null,r.a.createElement(oe.a,{size:"small","aria-label":"small outlined button group"},r.a.createElement(ce.a,{onClick:function(){f(-1)},className:o.button},"-"),r.a.createElement(ce.a,{onClick:function(){f(1)},className:o.button},"+"))))))},de=Q()(function(){return $()({container:{display:"flex",flexWrap:"wrap"}})}),fe=function(e){var a=de(),t=e.theme,o=Object(n.useState)({EarningsGraphArray:[{EarningsGraphData:[]}]}),c=Object(G.a)(o,2),i=c[0],l=c[1];Object(n.useEffect)(function(){s()},[]);var s=function(){var e=Object(b.a)(h.a.mark(function e(){var a,t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=S(),e.next=3,k(a);case 3:null!=(t=e.sent).EarningsGraphArray?l(t):l({EarningsGraphArray:[]});case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:a.container},r.a.createElement(pe,{theme:t,updateCallback:s}),i.EarningsGraphArray.map(function(e){return r.a.createElement(ee,{theme:t,EarningsGraphData:e.EarningsGraphData})}))},he=t(134),be=t.n(he)()({palette:{primary:{main:"#FFFFFF"},secondary:{main:"#0078ff"}},typography:{fontFamily:"arial",fontSize:18}}),Ee=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(J,{theme:be}),r.a.createElement(i.a,null,r.a.createElement(l.a,{exact:!0,path:"/",component:A}),r.a.createElement(l.a,{exact:!0,path:"/Dashboard",component:function(){return r.a.createElement(fe,{theme:be})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[221,1,2]]]);
//# sourceMappingURL=main.c76bcf5b.chunk.js.map