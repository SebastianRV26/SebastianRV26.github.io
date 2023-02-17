(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,a,t){e.exports=t(62)},50:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),s=t.n(r),i=(t(50),t(14)),o=t(16),c=t(20),m=t(19),u=t(21),p=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I'm ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role," ",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"https://avatars.githubusercontent.com/SebastianRV26",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),"Address: ",l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("a",{href:e.website},e.website))))))))}}]),a}(n.Component),h=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e,a){return l.a.createElement("div",{key:"work-".concat(a),className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.specialization),l.a.createElement("p",{className:"info"},e.CompanyName,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements.map(function(e,a){return"".concat(a+1,". ").concat(e,"\n")}))))}))),l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e,a){return l.a.createElement("div",{key:"education-".concat(a),className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.specialization),l.a.createElement("p",{className:"info"},e.UniversityName,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",null,e.skills&&e.skills.map(function(e,a){return l.a.createElement("li",{key:"skill-".concat(a)},l.a.createElement("em",null,e.skillname))})))))}}]),a}(n.Component),E=t(13),f=t(90),v=t(94),g=t(92),b=function(e){var a=e.open,t=e.handleClose,n=e.maxWidth,r=e.item;return l.a.createElement(f.a,{fullWidth:Boolean(!0),maxWidth:n,open:a,onClose:t},l.a.createElement(g.a,null,l.a.createElement("h3",null,r.name)),l.a.createElement(v.a,null,l.a.createElement("p",{style:{textAlign:"center",marginBottom:2}},r.description),l.a.createElement("p",{style:{textAlign:"center",marginBottom:4}},l.a.createElement("a",{href:r.url,target:"_blank"},r.urlText)),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("img",{alt:r.name,src:r.imgurl,className:"item-img",width:400}))))},N=function(e){var a=e.resumeData,t=Object(n.useState)(!1),r=Object(E.a)(t,2),s=r[0],i=r[1],o=Object(n.useState)({}),c=Object(E.a)(o,2),m=c[0],u=c[1];return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},a.portfolio&&a.portfolio.map(function(e,a){return l.a.createElement("div",{key:"project-".concat(a),className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap",style:{cursor:"pointer"},onClick:function(){i(!0),u(e)}},l.a.createElement("img",{alt:e.name,src:e.imgurl,className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description)))))}),s&&l.a.createElement(b,{open:s,handleClose:function(){return i(!1)},maxWidth:"md",item:m})))))},w=(n.Component,t(93)),k=t(55),y="service_qjst0fa",j="template_1v9ec6h",C="P2hCkb-jsVyPibr6K",O=function(e){e.resumeData;var a=Object(n.useRef)();return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),l.a.createElement("div",{className:"row"},l.a.createElement("form",{id:"contactForm",ref:a,onSubmit:function(e){e.preventDefault();var t={name:a.current.name.value,email:a.current.email.value,message:a.current.message.value};console.log("body",t),console.log("config",{serviceId:y,templateId:j,userId:C}),k.a.send(y,j,t,C).then(function(e){console.log("Email sended",e.text),a.current.reset()},function(e){console.error(e.text)})}},l.a.createElement(w.a,{container:!0},l.a.createElement(w.a,{item:!0,xs:12,sx:{display:"flex",justifyContent:"center"}},l.a.createElement("input",{required:!0,id:"name",type:"text",placeholder:"Enter your name...",label:"Full name",fullWidth:!0,style:{maxWidth:"400px"}})),l.a.createElement(w.a,{item:!0,xs:12,sx:{display:"flex",justifyContent:"center"}},l.a.createElement("input",{required:!0,id:"email",type:"email",placeholder:"name@example.com",label:"Email address",fullWidth:!0,style:{maxWidth:"400px"}})),l.a.createElement(w.a,{item:!0,xs:12,sx:{display:"flex",justifyContent:"center"}},l.a.createElement("input",{required:!0,id:"message",type:"text",placeholder:"Enter your message here...",label:"Message",fullWidth:!0,style:{maxWidth:"400px"}})),l.a.createElement(w.a,{item:!0,xs:12,sx:{display:"flex",justifyContent:"center"}},l.a.createElement("button",{variant:"contained",id:"submitButton",type:"submit"},"Send"))))))},x=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e,a){return l.a.createElement("li",{key:"li-".concat(a)},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),D={imagebaseurl:"https://rbhatia46.github.io/",name:"Sebastian Rojas Vargas",role:"JavaScript Developer",linkedinId:"sebastian-rojas-vargas",skypeid:"Your skypeid",roleDescription:"with knowledge in Android and\n    FrontEnd development using React.js and agile\n    methodologies (SCRUM).",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/sebastian-rojas-vargas/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/SebastianRV26",className:"fa fa-github"}],aboutme:"I am a computer engineer from the Technological Institute of Costa Rica (ITCR).\n    I've experience in React.js and I have used programming languages like Python, Java, Kotlin, JavaScript.\n    I like thinking about how to solve logical problems, learn new things and use programming to perform daily tasks.",address:"San Carlos, Alajuela, Costa Rica",website:"https://www.linkedin.com/in/sebastian-rojas-vargas/",work:[{CompanyName:"Smart Consulting Group",specialization:"Jr. React.js Developer",MonthOfLeaving:"jun. 2022 ",YearOfLeaving:"- Current",Achievements:["Develop views with React.js.","Implement payment gateway with PayPal."]},{CompanyName:"Self employed",specialization:"React.js Developer",MonthOfLeaving:"Jan. 2022 ",YearOfLeaving:"- Jun. 2022",Achievements:["Develop a website to handle orders for a restaurant called Cerezo.","Develop a social network like Twitter."]},{CompanyName:"Comunidad Aplicaciones M\xf3viles SC ITCR",specialization:"Android Developer",MonthOfLeaving:"sept 2020 ",YearOfLeaving:"- jun. 2022",Achievements:["Develop Android applications with Kotlin.","Consume REST calls with Retrofit.","Design graphical interface with XML."]},{CompanyName:"Comunidad Aplicaciones M\xf3viles SC ITCR",specialization:"FrontEnd Developer",MonthOfLeaving:"sept 2019 ",YearOfLeaving:"- sept 2020",Achievements:["Develop views of a web page with Angular.","Consume REST calls."]}],education:[{UniversityName:"Instituto Tecnol\xf3gico De Costa Rica (ITCR)",specialization:"Bachelor of Computer Engineering",MonthOfPassing:"",YearOfPassing:"2019 - 2022",Achievements:""},{UniversityName:"Liceo Los \xc1ngeles, Pital (LLAP)",specialization:"Bachelor in middle education",MonthOfPassing:"",YearOfPassing:"2013 - 2018",Achievements:""}],skillsDescription:"These are some of my skills",skills:[{skillname:"HTML5",className:"fa fa-html5"},{skillname:"CSS",className:"fa fa-css3"},{skillname:"JavaScript",className:"fa fa-js"},{skillname:"ReactJS",className:"fa-brands fa-react"},{skillname:"Python",className:"fa fa-python"},{skillname:"Java",className:"fa fa-java"},{skillname:"Git",className:"fa fa-git"}],portfolio:[{name:"Cerezo",description:"Website that automates the handling of orders within the company.",imgurl:"images/portfolio/cerezo.png",modal:"images/portfolio/modals/m-cerezo.png",url:"https://github.com/SebastianRV26/Cerezo.md",urlText:"Demo here"},{name:"Froice (Free Voice)",description:"Social network that allows comments about companies or tourist places.",imgurl:"images/portfolio/froice.png",modal:"images/portfolio/modals/m-froice.png",url:"https://github.com/SebastianRV26/froice",urlText:"Code and demo here"},{name:"QOLOLO",description:"A website for lawyers developed at Smart Consulting Group.",imgurl:"images/portfolio/qololo.png",modal:"images/portfolio/modals/m-qololo.png",url:"https://www.qololo.com/",urlText:"Project here"}]},S=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:D}),l.a.createElement(d,{resumeData:D}),l.a.createElement(h,{resumeData:D}),l.a.createElement(N,{resumeData:D}),l.a.createElement(O,{resumeData:D}),l.a.createElement(x,{resumeData:D}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,2,1]]]);
//# sourceMappingURL=main.1d8faf50.chunk.js.map