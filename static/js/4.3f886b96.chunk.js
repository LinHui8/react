(this.webpackJsonphaoke=this.webpackJsonphaoke||[]).push([[4],{641:function(e,a,t){"use strict";var n=t(0),i=t.n(n),s=t(15),r=t(85),c=t(642),o=t.n(c);a.a=Object(r.f)((function(e){var a=e.children,t=e.history,n=e.onLeftClick,r=e.className,c=e.rightContent;return i.a.createElement(s.i,{className:[o.a.navBar,r||""].join(" "),mode:"light",icon:i.a.createElement("i",{className:"iconfont icon-back"}),onLeftClick:n||function(){return t.go(-1)},rightContent:c},a)}))},642:function(e,a,t){e.exports={navBar:"NavHeader_navBar__2SDxf"}},658:function(e,a,t){"use strict";var n=t(127),i=t(28),s=t(29),r=t(31),c=t(30),o=t(32),l=t(0),m=t.n(l),u=t(659),d=t.n(u),_=[{id:1,name:"\u8863\u67dc",icon:"icon-wardrobe"},{id:2,name:"\u6d17\u8863\u673a",icon:"icon-wash"},{id:3,name:"\u7a7a\u8c03",icon:"icon-air"},{id:4,name:"\u5929\u7136\u6c14",icon:"icon-gas"},{id:5,name:"\u51b0\u7bb1",icon:"icon-ref"},{id:6,name:"\u6696\u6c14",icon:"icon-Heat"},{id:7,name:"\u7535\u89c6",icon:"icon-vid"},{id:8,name:"\u70ed\u6c34\u5668",icon:"icon-heater"},{id:9,name:"\u5bbd\u5e26",icon:"icon-broadband"},{id:10,name:"\u6c99\u53d1",icon:"icon-sofa"}],p=function(e){function a(){var e,t;Object(i.a)(this,a);for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];return(t=Object(r.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(o)))).state={selectedNames:[]},t.toggleSelect=function(e){var a,i=t.state.selectedNames;a=i.indexOf(e)>-1?i.filter((function(a){return a!==e})):[].concat(Object(n.a)(i),[e]),t.props.onSelect(a),t.setState({selectedNames:a})},t}return Object(o.a)(a,e),Object(s.a)(a,[{key:"renderItems",value:function(){var e=this,a=this.state.selectedNames,t=this.props,n=t.select,i=t.list;return(n?_:_.filter((function(e){return i.includes(e.name)}))).map((function(t){var i=a.indexOf(t.name)>-1;return m.a.createElement("li",{key:t.id,className:[d.a.item,i?d.a.active:""].join(" "),onClick:n&&function(){return e.toggleSelect(t.name)}},m.a.createElement("p",null,m.a.createElement("i",{className:"iconfont ".concat(t.icon," ").concat(d.a.icon)})),t.name)}))}},{key:"render",value:function(){return m.a.createElement("ul",{className:d.a.root},this.renderItems())}}]),a}(l.Component);p.defaultProps={onSelect:function(){}},a.a=p},659:function(e,a,t){e.exports={root:"HousePackage_root__1_K0N",item:"HousePackage_item__CJMJB",active:"HousePackage_active__1PfDS",icon:"HousePackage_icon__aHbgv"}},693:function(e,a,t){e.exports={root:"HouseDetail_root__QYr05",slides:"HouseDetail_slides__3G6Wo",navHeader:"HouseDetail_navHeader__2fbz6",info:"HouseDetail_info__GK4rL",infoTitle:"HouseDetail_infoTitle__2rcsE",tags:"HouseDetail_tags__3Ekz8",tag:"HouseDetail_tag__1SCb2",tag1:"HouseDetail_tag1__3G75R",tag2:"HouseDetail_tag2__Fd73P",tag3:"HouseDetail_tag3__32jEd",infoPrice:"HouseDetail_infoPrice__TNw3s",infoPriceItem:"HouseDetail_infoPriceItem__2rX25",month:"HouseDetail_month__o-be-",infoBasic:"HouseDetail_infoBasic__2819_",title:"HouseDetail_title__1ybsu",map:"HouseDetail_map__2R4uU",mapTitle:"HouseDetail_mapTitle__rx6kd",mapContainer:"HouseDetail_mapContainer__1aA8r",mapArrow:"HouseDetail_mapArrow__Puike",houseTitle:"HouseDetail_houseTitle__2IU_T",about:"HouseDetail_about__T9IfA",set:"HouseDetail_set__B2Jfb",titleEmpty:"HouseDetail_titleEmpty__2XDB9",contact:"HouseDetail_contact__38lT6",user:"HouseDetail_user__5NdM-",useInfo:"HouseDetail_useInfo__4Ime6",userAuth:"HouseDetail_userAuth__2AFSv",userMsg:"HouseDetail_userMsg__3ik7t",descText:"HouseDetail_descText__Fliw-",recommend:"HouseDetail_recommend__3aJat",items:"HouseDetail_items__3ffLD",fixedBottom:"HouseDetail_fixedBottom__3ovgF",favorite:"HouseDetail_favorite__15VUQ",favoriteImg:"HouseDetail_favoriteImg__3tbcU",telephone:"HouseDetail_telephone__3YMuj"}},707:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return k}));var n=t(21),i=t.n(n),s=t(39),r=t(28),c=t(29),o=t(31),l=t(30),m=t(32),u=t(0),d=t.n(u),_=t(15),p=t(641),f=t(217),v=t(658),h=t(40),g=t(693),E=t.n(g),b=[{id:1,src:h.b+"/img/message/1.png",desc:"72.32\u33a1/\u5357 \u5317/\u4f4e\u697c\u5c42",title:"\u5b89\u8d1e\u897f\u91cc 3\u5ba41\u5385",price:4500,tags:["\u968f\u65f6\u770b\u623f"]},{id:2,src:h.b+"/img/message/2.png",desc:"83\u33a1/\u5357/\u9ad8\u697c\u5c42",title:"\u5929\u5c45\u56ed 2\u5ba41\u5385",price:7200,tags:["\u8fd1\u5730\u94c1"]},{id:3,src:h.b+"/img/message/3.png",desc:"52\u33a1/\u897f\u5357/\u4f4e\u697c\u5c42",title:"\u89d2\u95e8\u75324\u53f7\u9662 1\u5ba41\u5385",price:4300,tags:["\u96c6\u4e2d\u4f9b\u6696"]}],N=window.BMap,H={position:"absolute",zIndex:-7982820,backgroundColor:"rgb(238, 93, 91)",color:"rgb(255, 255, 255)",height:25,padding:"5px 10px",lineHeight:"14px",borderRadius:3,boxShadow:"rgb(204, 204, 204) 2px 2px 2px",whiteSpace:"nowrap",fontSize:12,userSelect:"none"},D=_.h.alert,k=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),m=0;m<n;m++)c[m]=arguments[m];return(t=Object(o.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(c)))).state={isLoading:!1,houseInfo:{houseImg:[],title:"",tags:[],price:0,roomType:"",size:0,oriented:[],floor:"",community:"",coord:{latitude:"39.928033",longitude:"116.529466"},supporting:[],houseCode:"",description:""},isFavorite:!1},t.handleFavorite=Object(s.a)(i.a.mark((function e(){var a,n,s,r,c,o,l,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object(h.e)(),n=t.props,s=n.history,r=n.location,c=n.match,a){e.next=4;break}return e.abrupt("return",D("\u63d0\u793a","\u767b\u5f55\u540e\u624d\u80fd\u6536\u85cf\u623f\u6e90\uff0c\u662f\u5426\u53bb\u767b\u5f55?",[{text:"\u53d6\u6d88"},{text:"\u53bb\u767b\u5f55",onPress:function(){return s.replace("/login",{from:r})}}]));case 4:if(o=t.state.isFavorite,l=c.params.id,!o){e.next=14;break}return e.next=9,h.a.delete("/user/favorites/".concat(l));case 9:m=e.sent,t.setState({isFavorite:!1}),200===m.data.status?_.o.info("\u5df2\u53d6\u6d88\u6536\u85cf",1,null,!1):_.o.info("\u767b\u5f55\u8d85\u65f6\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55",2,null,!1),e.next=18;break;case 14:return e.next=16,h.a.post("/user/favorites/".concat(l));case 16:200===e.sent.data.status?(_.o.info("\u5df2\u6536\u85cf",1,null,!1),t.setState({isFavorite:!0})):_.o.info("\u767b\u5f55\u8d85\u65f6\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55",2,null,!1);case 18:case"end":return e.stop()}}),e)}))),t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getHouseDetail(),this.checkFavorite()}},{key:"checkFavorite",value:function(){var e=Object(s.a)(i.a.mark((function e(){var a,t,n,s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(h.e)()){e.next=3;break}return e.abrupt("return");case 3:return a=this.props.match.params.id,e.next=6,h.a.get("/user/favorites/".concat(a));case 6:t=e.sent,n=t.data,s=n.status,r=n.body,200===s&&this.setState({isFavorite:r.isFavorite});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHouseDetail",value:function(){var e=Object(s.a)(i.a.mark((function e(){var a,t,n,s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,this.setState({isLoading:!0}),e.next=4,h.a.get("/houses/".concat(a));case 4:t=e.sent,this.setState({houseInfo:t.data.body,isLoading:!1}),n=t.data.body,s=n.community,r=n.coord,this.renderMap(s,r);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderSwipers",value:function(){return this.state.houseInfo.houseImg.map((function(e){return d.a.createElement("a",{key:e,href:"http://itcast.cn"},d.a.createElement("img",{src:h.b+e,alt:""}))}))}},{key:"renderMap",value:function(e,a){var t=a.latitude,n=a.longitude,i=new N.Map("map"),s=new N.Point(n,t);i.centerAndZoom(s,17);var r=new N.Label("",{position:s,offset:new N.Size(0,-36)});r.setStyle(H),r.setContent("\n      <span>".concat(e,'</span>\n      <div class="').concat(E.a.mapArrow,'"></div>\n    ')),i.addOverlay(r)}},{key:"renderTags",value:function(){return this.state.houseInfo.tags.map((function(e,a){var t="";return t=a>2?"tag3":"tag"+(a+1),d.a.createElement("span",{key:e,className:[E.a.tag,E.a[t]].join(" ")},e)}))}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.houseInfo,n=t.community,i=t.title,s=t.price,r=t.roomType,c=t.size,o=t.floor,l=t.oriented,m=t.supporting,u=t.description,g=e.isFavorite;return d.a.createElement("div",{className:E.a.root},d.a.createElement(p.a,{className:E.a.navHeader,rightContent:[d.a.createElement("i",{key:"share",className:"iconfont icon-share"})]},n),d.a.createElement("div",{className:E.a.slides},a?"":d.a.createElement(_.b,{autoplay:!0,infinite:!0,autoplayInterval:5e3},this.renderSwipers())),d.a.createElement("div",{className:E.a.info},d.a.createElement("h3",{className:E.a.infoTitle},i),d.a.createElement(_.c,{className:E.a.tags},d.a.createElement(_.c.Item,null,this.renderTags())),d.a.createElement(_.c,{className:E.a.infoPrice},d.a.createElement(_.c.Item,{className:E.a.infoPriceItem},d.a.createElement("div",null,s,d.a.createElement("span",{className:E.a.month},"/\u6708")),d.a.createElement("div",null,"\u79df\u91d1")),d.a.createElement(_.c.Item,{className:E.a.infoPriceItem},d.a.createElement("div",null,r),d.a.createElement("div",null,"\u623f\u578b")),d.a.createElement(_.c.Item,{className:E.a.infoPriceItem},d.a.createElement("div",null,c,"\u5e73\u7c73"),d.a.createElement("div",null,"\u9762\u79ef"))),d.a.createElement(_.c,{className:E.a.infoBasic,align:"start"},d.a.createElement(_.c.Item,null,d.a.createElement("div",null,d.a.createElement("span",{className:E.a.title},"\u88c5\u4fee\uff1a"),"\u7cbe\u88c5"),d.a.createElement("div",null,d.a.createElement("span",{className:E.a.title},"\u697c\u5c42\uff1a"),o)),d.a.createElement(_.c.Item,null,d.a.createElement("div",null,d.a.createElement("span",{className:E.a.title},"\u671d\u5411\uff1a"),l.join("\u3001")),d.a.createElement("div",null,d.a.createElement("span",{className:E.a.title},"\u7c7b\u578b\uff1a"),"\u666e\u901a\u4f4f\u5b85")))),d.a.createElement("div",{className:E.a.map},d.a.createElement("div",{className:E.a.mapTitle},"\u5c0f\u533a\uff1a",d.a.createElement("span",null,n)),d.a.createElement("div",{className:E.a.mapContainer,id:"map"},"\u5730\u56fe")),d.a.createElement("div",{className:E.a.about},d.a.createElement("div",{className:E.a.houseTitle},"\u623f\u5c4b\u914d\u5957"),0===m.length?d.a.createElement("div",{className:E.a.titleEmpty},"\u6682\u65e0\u6570\u636e"):d.a.createElement(v.a,{list:m})),d.a.createElement("div",{className:E.a.set},d.a.createElement("div",{className:E.a.houseTitle},"\u623f\u6e90\u6982\u51b5"),d.a.createElement("div",null,d.a.createElement("div",{className:E.a.contact},d.a.createElement("div",{className:E.a.user},d.a.createElement("img",{src:h.b+"/img/avatar.png",alt:"\u5934\u50cf"}),d.a.createElement("div",{className:E.a.useInfo},d.a.createElement("div",null,"\u738b\u5973\u58eb"),d.a.createElement("div",{className:E.a.userAuth},d.a.createElement("i",{className:"iconfont icon-auth"}),"\u5df2\u8ba4\u8bc1\u623f\u4e3b"))),d.a.createElement("span",{className:E.a.userMsg},"\u53d1\u6d88\u606f")),d.a.createElement("div",{className:E.a.descText},u||"\u6682\u65e0\u623f\u5c4b\u63cf\u8ff0"))),d.a.createElement("div",{className:E.a.recommend},d.a.createElement("div",{className:E.a.houseTitle},"\u731c\u4f60\u559c\u6b22"),d.a.createElement("div",{className:E.a.items},b.map((function(e){return d.a.createElement(f.a,Object.assign({},e,{key:e.id}))})))),d.a.createElement(_.c,{className:E.a.fixedBottom},d.a.createElement(_.c.Item,{onClick:this.handleFavorite},d.a.createElement("img",{src:h.b+(g?"/img/star.png":"/img/unstar.png"),className:E.a.favoriteImg,alt:"\u6536\u85cf"}),d.a.createElement("span",{className:E.a.favorite},g?"\u5df2\u6536\u85cf":"\u6536\u85cf")),d.a.createElement(_.c.Item,null,"\u5728\u7ebf\u54a8\u8be2"),d.a.createElement(_.c.Item,null,d.a.createElement("a",{href:"tel:400-618-4000",className:E.a.telephone},"\u7535\u8bdd\u9884\u7ea6"))))}}]),a}(u.Component)}}]);
//# sourceMappingURL=4.3f886b96.chunk.js.map