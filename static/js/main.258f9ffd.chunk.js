(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(5),a=n.n(i),r=n(6),c=n(7),s=n(9),l=n(8),o=n(1),u=n.n(o),m=(n(14),n(2)),h=n(4),d=n.n(h),j=(n(15),n(0)),b=function(e){var t=e.images,n=e.itemWidth,i=e.frameSize,a=e.step,r=e.animationDuration,c=Object(o.useState)(0),s=Object(m.a)(c,2),l=s[0],u=s[1],h=Object(o.useState)(!0),b=Object(m.a)(h,2),p=b[0],g=b[1],f=Object(o.useState)(!1),O=Object(m.a)(f,2),x=O[0],v=O[1];function S(e){var r=t.length*n,c=n*i;p&&g(!1),x&&v(!1),"prev"===e&&u((function(e){var t=e+n*a;return t>=0?(g(!0),0):t})),"next"===e&&u((function(e){var t=e-n*a;return c+-t>=r?(v(!0),c-r):t}))}return Object(j.jsxs)("div",{className:"Carousel",children:[Object(j.jsx)("button",{type:"button",className:d()("Carousel__button",{disabled:p}),onClick:function(){return S("prev")},children:"<"}),Object(j.jsx)("div",{className:"Carousel__container",style:{width:"".concat(n*i,"px")},children:Object(j.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(l,"px)"),transition:"".concat(r,"ms")},children:t.map((function(e,t){return Object(j.jsx)("li",{className:"Carousel__list-item",style:{height:"".concat(n,"px")},children:Object(j.jsx)("img",{className:"Carousel__list-img",src:e,alt:String(t),style:{width:"".concat(n,"px"),height:"".concat(n,"px")}})},e)}))})}),Object(j.jsx)("button",{"data-cy":"next",type:"button",className:d()("Carousel__button",{disabled:x}),onClick:function(){return S("next")},children:">"})]})},p=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinite:!1},e.handleWidth=function(t){e.setState({itemWidth:+t.currentTarget.value})},e.handleFrameSize=function(t){e.setState({frameSize:+t.currentTarget.value})},e.handleStep=function(t){e.setState({step:+t.currentTarget.value})},e.handleAnimationDuration=function(t){e.setState({animationDuration:+t.currentTarget.value})},e.handleInfinite=function(t){e.setState({infinite:t.currentTarget.checked})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.images,n=e.itemWidth,i=e.frameSize,a=e.step,r=e.animationDuration,c=e.infinite;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",t.length," images"]}),Object(j.jsxs)("form",{className:"App__form",children:[Object(j.jsxs)("label",{htmlFor:"itemId",children:["Slide width:",Object(j.jsx)("input",{type:"number",id:"itemId",value:n,onChange:this.handleWidth})]}),Object(j.jsxs)("label",{htmlFor:"frameId",children:["Frame size:",Object(j.jsx)("input",{type:"number",id:"frameId",value:i,onChange:this.handleFrameSize})]}),Object(j.jsxs)("label",{htmlFor:"stepId",children:["Step:",Object(j.jsx)("input",{type:"number",id:"stepId",value:a,onChange:this.handleStep})]}),Object(j.jsxs)("label",{htmlFor:"animationDuration",children:["Animation Duration:",Object(j.jsx)("input",{type:"number",id:"animationDuration",value:r,onChange:this.handleAnimationDuration})]}),Object(j.jsxs)("label",{children:["Infinite:",Object(j.jsx)("input",{type:"checkbox",checked:c,onChange:this.handleInfinite})]})]}),Object(j.jsx)(b,{images:t,itemWidth:n,frameSize:i,step:a,animationDuration:r})]})}}]),n}(u.a.Component),g=p;a.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.258f9ffd.chunk.js.map