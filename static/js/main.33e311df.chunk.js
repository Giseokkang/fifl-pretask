(window["webpackJsonpfifl-pretask"]=window["webpackJsonpfifl-pretask"]||[]).push([[0],{35:function(e,t,n){e.exports=n(62)},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),l=n.n(i),o=n(28),c=n(5),u=n(22),s=n(23),m=n(31),p=n(24),h=n(34),d=n(9),f=n(10),b=n(25),v=n.n(b);n(55),n(56);function g(){var e=Object(d.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  width: 500px;\n  height: 500px;\n"]);return g=function(){return e},e}function E(){var e=Object(d.a)([""]);return E=function(){return e},e}var y=[{id:1,title:"\uc0ac\uc9c4 1",imageUrl:"https://picsum.photos/id/1/400/300"},{id:2,title:"\uc0ac\uc9c4 2",imageUrl:"https://picsum.photos/id/2/400/300"},{id:3,title:"\uc0ac\uc9c4 3",imageUrl:"https://picsum.photos/id/3/400/300"},{id:4,title:"\uc0ac\uc9c4 4",imageUrl:"https://picsum.photos/id/4/400/300"},{id:5,title:"\uc0ac\uc9c4 5",imageUrl:"https://picsum.photos/id/5/400/300"}],k=f.b.div(E()),O=f.b.div(g(),function(e){return e.imageUrl}),S=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).next=function(){n.slider.slickNext(),n.slider.slickPlay()},n.previous=function(){n.slider.slickPrev(),n.slider.slickPlay()},n.handleSubmit=function(e){e.preventDefault();var t=n.state.searchTerm;""!==t&&n.searchByTerm(t)},n.updateTerm=function(e){var t=e.target.value;n.setState({searchTerm:t})},n.state={photos:null,searchTerm:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"searchByTerm",value:function(e){var t=this.state.photos,n=Number(e),a=t.filter(function(e){return e.id!==n});this.setState({photos:a,searchTerm:""})}},{key:"componentDidMount",value:function(){this.setState({photos:y})}},{key:"render",value:function(){var e=this,t=this.state,n=t.photos,a=t.searchTerm,i=this.updateTerm,l=this.handleSubmit,o=this.previous,c=this.next;return r.a.createElement(k,null,r.a.createElement("h2",null,"Carousel"),r.a.createElement(v.a,Object.assign({ref:function(t){return e.slider=t}},{dots:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,pauseOnHover:!1}),n&&n.length>1&&n.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(O,{imageUrl:e.imageUrl}),r.a.createElement("button",{type:"button",onClick:o},"\u2190"),r.a.createElement("span",null,e.title),r.a.createElement("button",{type:"button",onClick:c},"\u2192"))})),r.a.createElement("h3",null,"\uc774\ubbf8\uc9c0 \uc0ad\uc81c"),r.a.createElement("form",{onSubmit:l},r.a.createElement("label",{htmlFor:"deleteBtn"},"id: "),r.a.createElement("input",{type:"number",id:"deleteBtn",value:a,onChange:i}),r.a.createElement("input",{type:"submit"})))}}]),t}(r.a.Component),x=function(){return r.a.createElement(o.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",exact:!0,component:S}))))};function T(){var e=Object(d.a)(["\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n\n    }\n    *{\n        box-sizing:border-box;\n    }\n"]);return T=function(){return e},e}var j=Object(f.a)(T());var U=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement(j,null))};l.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.33e311df.chunk.js.map