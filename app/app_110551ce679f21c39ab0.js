!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="app/",r(r.s=8)}([function(e,t,r){e.exports=r(5)(0)},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},function(e,t,r){e.exports=r(5)(44)},function(e,t,r){e.exports=r(5)(16)},function(e,t,r){e.exports=r(5)(38)},function(e,t){e.exports=lib_vendor},function(e,t,r){e.exports=r(5)(13)},function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}},function(e,t,r){"use strict";r.r(t);var n,a=r(0),o=r.n(a),i=r(6),s=r(4),c=r(1),l=r.n(c),u=r(3),m="SET_UI_THEME",p="SET_SRC_FILTER",d="TOGGLE_DRAWER",f={1:"grey",2:"light",3:"sand"},h={1:"none",2:"https",3:"http"},E={setUiTheme:function(e){return{type:m,uiTheme:f[e]}},setSrcFilter:function(e){return{type:p,filter:h[e]}},toggleDrawer:function(){return{type:d}}},b="ADD_CATEGORY",v="REMOVE_CATEGORY",g="SET_CURRENT_STATION",y={addCategory:function(e){return{type:b,category:e}},removeCategory:function(e){return{type:v,category:e}},setCurrentStation:function(e){return{type:g,station:e}}},w={app:function(e){return e.app||{}},isDrawer:function(e){return w.app(e).isDrawer},currentStation:function(e){return w.app(e).currentStation},uiTheme:function(e){return w.app(e).uiTheme},topics:function(e){return e.topics||[]},categories:function(e){return e.categories||[]},stations:function(e){return e.stations||[]}},_={sApp:w},C={grey:"grey",light:"#f9f9f9",sand:"#fdf1d5"},S={toBg:function(e){return{backgroundColor:C[e]}}},O=o.a.createContext();O.getValue=function(e){return n||(n=l()({},Object(u.bindActionCreators)(E,e),Object(u.bindActionCreators)(y,e),_,{useSelector:s.useSelector,uiThemeImpl:S}))};var T=O,k={TRANSITION:document&&void 0!==document.body.style.transition,TOUCH:document&&"ontouchstart"in document.documentElement,MEDIA_SESSION:navigator&&"mediaSession"in navigator},R=function(e){var t=e.accessKey,r=e.onMouseDown,n=e.onMouseUp,a=e.onTouchStart,i=e.onTouchEnd,s=e.onClick,c=e.children,u=k.TOUCH&&a?{onTouchStart:a,onTouchEnd:i}:{onMouseDown:r,onMouseUp:n};return o.a.createElement("button",l()({className:"bt-circle",accessKey:t},u,{onClick:s}),o.a.createElement("svg",{viewBox:"0 0 34 34",width:"100%",height:"100%"},o.a.createElement("g",null,c)))},U=o.a.createElement("path",{d:"M12.458 22.667l10-6.5-10-6.5z"}),L=o.a.createElement(a.Fragment,null,o.a.createElement("path",{d:"M11.5 10h3v13h-3v-13z"}),o.a.createElement("path",{d:"M17.5 10h3v13h-3v-13z"})),N=function(e){var t=e.isPlaying,r=e.onPlay,n=e.onStop,a=t?n:r,i=t?L:U,s=t?"s":"p";return o.a.createElement(R,{accessKey:s,onClick:a},i)},I=function(e){var t=e.isPlaying,r=e.onPlay,n=e.onPause;return o.a.createElement("div",null,o.a.createElement(N,{isPlaying:t,onPlay:r,onStop:n}))},A=150,M=500;var D=function(e,t,r){var n=Object(a.useRef)(),o=Object(a.useRef)();o.current=r;var i=function(){return clearInterval(n.current)};return[function(){n.current=setInterval((function(){t(o.current)?(i(),n.current=setInterval(e,M)):e()}),A)},i]},x=r(7),P=r.n(x),H={ROOT:{position:"relative",width:"100%",height:18,marginTop:8,marginBottom:8,cursor:"default",userSelect:"none"},ROOT_LINE:{position:"absolute",top:8,left:0,width:"100%",height:2},LINE_BEFORE:{position:"absolute",left:0,width:"calc(15%)",height:"100%",marginRight:6,backgroundColor:"rgb(0, 188, 212)",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},LINE_AFTER:{position:"absolute",right:0,width:"calc(85%)",height:"100%",marginLeft:6,backgroundColor:"rgb(189, 189, 189)",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},LINE_HOVERED:{backgroundColor:"rgb(158, 158, 158)"},ROOT_CIRCLE:{boxSizing:"borderBox",position:"absolute",top:0,left:"15%",zIndex:1,width:12,height:12,margin:"1px 0px 0px",backgroundColor:"rgb(0, 188, 212)",backgroundClip:"padding-box",border:"0px solid transparent",borderRadius:"50%",transform:"translate(-50%, -50%)",overflow:"visible",outline:"none",transition:"background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",pointerEvents:"inherit",cursor:"pointer"},CIRCLE_DRAGGED:{width:20,height:20},CIRCLE_INNER:{position:"absolute",top:0,left:0,width:12,height:12,overflow:"visible"},CIRCLE_INNER_EL:{position:"absolute",top:-12,left:-12,width:"300%",height:36,borderRadius:"50%",backgroundColor:"rgba(0, 188, 212, 0.16)",transform:"scale(1)"},EMBER:{top:-12,left:-12,width:"220%",height:44,border:"1px solid #4caf50"}},F=function(e,t,r){return r?function(e,t){return e=+e,t=+t,isNaN(e)||"number"!=typeof t||t%1!=0?NaN:(e=e.toString().split("e"),+((e=(e=Math.round(+(e[0]+"e"+(e[1]?+e[1]-t:-t)))).toString().split("e"))[0]+"e"+(e[1]?+e[1]+t:t)))}(e+t,r):e+t},V=function(e){return{width:"calc("+e+"%)"}},j=function(e){function t(t){var r;(r=e.call(this,t)||this)._hMouseEnter=function(){r.setState({isHovered:!0})},r._hMouseLeave=function(){r.setState({isHovered:!1})},r._hMouseDown=function(e){e.preventDefault(),document.addEventListener("mousemove",r._hDragMouseMove),document.addEventListener("mouseup",r._hDragMouseUp),r.setState({isDragged:!0})},r._hDragMouseMove=function(e){r._onDragUpdate(e)},r._hDragMouseUp=function(){document.removeEventListener("mousemove",r._hDragMouseMove),document.removeEventListener("mouseup",r._hDragMouseUp),r.setState({isDragged:!1})},r._hFocusTrack=function(){r.setState({isHovered:!0})},r._hBlurTrack=function(){r.setState({isHovered:!1})},r._hKeyDownTrack=function(e){switch(e.keyCode){case 37:var t=r.props,n=t.min,a=t.step,o=r.state.value;if(o>n){var i=F(o,-a,r.stepExp);r._setValue(e,i)}break;case 39:var s=r.props,c=s.max,l=s.step,u=r.state.value;if(u<c){var m=F(u,l,r.stepExp);r._setValue(e,m)}break;default:return}},r._onDragUpdate=function(e){r.dragRunning||(r.dragRunning=!0,requestAnimationFrame((function(){r.dragRunning=!1;var t=e.clientX-r._calcTrackOffset();r._setValueFromPosition(e,t)})))},r._setValue=function(e,t){r.setState({value:t}),r.isOnChange&&r.props.onChange(t)},r._calcTrackOffset=function(){return r.trackComp.getBoundingClientRect().left},r._setValueFromPosition=function(e,t){var n=r.trackComp.clientWidth;t<0?t=0:t>n&&(t=n);var a,o=r.props,i=o.step,s=o.min,c=o.max;a=t/n*(c-s),a=Math.round(a/i)*i+s,(a=parseFloat(a.toFixed(5)))>c?a=c:a<s&&(a=s),r.state.value!==a&&r._setValue(e,a)},r._refTrackComp=function(e){return r.trackComp=e};var n=t.onChange,a=t.step,o=t.initValue;r.isOnChange="function"==typeof n;var i=(""+a).split(".");return r.stepExp=i[1]?-1*i[1].length:0,r.state={isHovered:!1,isDragged:!1,value:o},r}P()(t,e);var r=t.prototype;return r.UNSAFE_componentWillReceiveProps=function(e){e!==this.props&&this.setState({value:e.initValue})},r.render=function(){var e=this.props,t=e.step,r=e.min,n=e.max,a=e.style,i=this.state,s=i.isHovered,c=i.isDragged,u=i.value,m=s?l()({},H.LINE_AFTER,H.LINE_HOVERED):H.LINE_AFTER,p=c?H.CIRCLE_DRAGGED:null,d=c?H.EMBER:null,f=s||c?o.a.createElement("div",{style:l()({},H.CIRCLE_INNER_EL,d)}):null,h=function(e,t,r){var n=(e-t)/(r-t);return Number.isNaN(n)?0:100*n}(u,r,n),E=V(h),b=V(100-h),v={left:h+"%"};return o.a.createElement("div",{style:l()({},H.ROOT,a),role:"slider","aria-valuemax":n,"aria-valuemin":r,"aria-valuenow":u,tabIndex:"0",onMouseDown:this._hMouseDown,onMouseEnter:this._hMouseEnter,onMouseLeave:this._hMouseLeave},o.a.createElement("div",{ref:this._refTrackComp,tabIndex:"0",role:"button",style:H.ROOT_LINE,onKeyDown:this._hKeyDownTrack,onFocus:this._hFocusTrack,onBlur:this._hBlurTrack},o.a.createElement("div",{style:l()({},H.LINE_BEFORE,E)}),o.a.createElement("div",{style:l()({},m,b)}),o.a.createElement("div",{style:l()({},H.ROOT_CIRCLE,p,v)},o.a.createElement("div",{style:l()({},H.CIRCLE_INNER,p)},f)),o.a.createElement("input",{type:"hidden",step:t,min:r,max:n,value:u,required:!0})))},r.setValue=function(e){this.setState({value:e})},t}(a.Component);j.defaultProps={initValue:1,min:0,max:1,step:.05};var B=j,z=function(e){return o.a.createElement(R,e,o.a.createElement("path",{d:"M8 16 H24",strokeWidth:"3"}))},G=function(e){return o.a.createElement(R,e,o.a.createElement("path",{d:"M8 16 H24",strokeWidth:"3"}),o.a.createElement("path",{d:"M16 8 V24",strokeWidth:"3"}))},K="drawer-bt",W="drawer-span",Y="drawer-svg",q="drawer",X="drawer-modal",J={BT_DRAWER:{position:"absolute",top:8,right:18},DRAWER_OFF:{transform:"translateX(264px)",pointerEvents:"none"},DRAWER_ON:{transform:"translate(0px, 0px)"},MODAL_OFF:{display:"none",opacity:0,zIndex:-1,transition:"opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},MODAL_ON:{display:"block",opacity:1,zIndex:1e3,transition:"opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"}},Q=function(e){var t=e.btStyle,r=e.children,n=Object(a.useContext)(T),i=n.toggleDrawer,s=n.sApp,c=n.useSelector,u=c(s.isDrawer),m=c(s.uiTheme);Object(a.useEffect)((function(){document.body.style.overflowY=u?"hidden":"auto"}));var p=l()({},u?J.DRAWER_ON:J.DRAWER_OFF,S.toBg(m)),d=u?J.MODAL_ON:J.MODAL_OFF,f=u?i:void 0;return[o.a.createElement("button",{key:"bt-drawer",className:K,style:l()({},J.BT_DRAWER,t),"aria-label":"Open Drawer",onClick:i},o.a.createElement("span",{className:W},o.a.createElement("svg",{className:Y,focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"},o.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),o.a.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})))),o.a.createElement("div",{key:"wrapper",role:"presentation","aria-hidden":!u,className:X,style:d,onClick:f}),o.a.createElement("aside",{key:"aside",className:q,style:p},o.a.createElement("div",null,r))]},Z={fromClientX:void 0},$=function(e){var t=(e||{}).changedTouches,r=void 0===t?[]:t;return r[0]?r[0].clientX:void 0},ee=function(e){var t=e.onSwipeGesture,r=e.dir,n=void 0===r?"L":r,o=e.delta,i=void 0===o?30:o,s=Object(a.useCallback)((function(e){Z.fromClientX=$(e)}),[]),c=Object(a.useCallback)((function(e){Z.fromClientX&&function(e,t,r){return"L"===e||"U"===e?Z.fromClientX-r>t:r-Z.fromClientX>t}(n,i,$(e))&&(t(),Z.fromClientX=void 0)}),[]);if(k.TOUCH)return{onTouchStart:s,onTouchEnd:c}},te={COLOR:"#f44336",SVG:{padding:3}},re=function(e){var t=e.className,r=void 0===t?"svg-close":t,n=e.style,a=e.tabIndex,i=void 0===a?-1:a,s=e.onClick;return o.a.createElement("button",{className:r,style:n,tabIndex:i,onClick:s},o.a.createElement("svg",{viewBox:"0 0 12 12",width:"100%",height:"100%",style:te.SVG,preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:"2",stroke:te.COLOR,strokeLinecap:"round"},o.a.createElement("path",{d:"M 0,0 L 12,12"}),o.a.createElement("path",{d:"M 12,0 L 0,12"})))},ne="bt-triple",ae="bt-triple__one",oe="bt-triple__two",ie="bt-triple__three",se={SELECTED:{backgroundColor:"#1b2836"}},ce=function(e,t){return e===t?se.SELECTED:void 0},le=function(e){var t=e.style,r=e.tabIndex,n=e.initialValue,i=e.oneC,s=e.twoC,c=e.threeC,l=e.onClick,u=Object(a.useState)(n),m=u[0],p=u[1],d=ce(m,1),f=ce(m,2),h=ce(m,3),E=Object(a.useCallback)((function(e){l(e),p(e)}),[]);return o.a.createElement("div",{className:ne,style:t},o.a.createElement("button",{className:ae,style:d,tabIndex:r,onClick:E.bind(null,1)},i),o.a.createElement("button",{className:oe,style:f,tabIndex:r,onClick:E.bind(null,2)},s),o.a.createElement("button",{className:ie,style:h,tabIndex:r,onClick:E.bind(null,3)},c))};le.defaultProps={tabIndex:-1,initialValue:1,oneC:"One",twoC:"Two",threeC:"Three"};var ue,me=le,pe={display:"inline-block",width:16,height:16},de=function(e){var t=e.style,r=e.color,n=void 0===r?"#64e346":r;return o.a.createElement("span",{style:l()({},pe,t)},o.a.createElement("svg",{viewBox:"0 0 16 16",width:"100%",height:"100%",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M 2,5 L 8,14 14,1",stroke:n,fill:"transparent",strokeWidth:"3",strokeLinecap:"round"})))},fe={KEY:{textDecoration:"underline"}},he=function(e){var t=e.className,r=e.rootStyle,n=e.caption,a=void 0===n?"":n,i=e.accessKey,s=e.children,c=a.toLowerCase().indexOf(i);if(i&&-1!==c){var l=a.substring(0,c),u=a.substring(c,c+1),m=a.substring(c+1);return o.a.createElement("span",{className:t,style:r},o.a.createElement("span",null,l),o.a.createElement("span",{style:fe.KEY},u),o.a.createElement("span",null,m),s)}return o.a.createElement("span",{className:t,style:r},a,s)},Ee="bt-flat",be="bt-flat__div",ve="bt-flat__span",ge={color:"#607d8b"},ye=function(e){var t=e.innerRef,r=e.timeout,n=void 0===r?500:r,i=e.className,s=e.rootStyle,c=e.clDiv,u=void 0===c?be:c,m=e.clCaption,p=e.isPrimary,d=e.title,f=void 0===d?"":d,h=e.caption,E=e.accessKey,b=e.onClick,v=e.children,g=Object(a.useRef)(),y=Object(a.useCallback)((function(e){void 0===e&&(e="auto"),g.current&&(g.current.style["pointer-events"]=e)}),[]),w=Object(a.useCallback)((function(e){0!==n&&(y("none"),setTimeout(y,n)),b(e)}),[n,b]);Object(a.useImperativeHandle)(t,(function(){return{focus:function(){g.current&&g.current.focus()}}}));var _=p?l()({},s,ge):s,C=i?Ee+" "+i:Ee,S=m?ve+" "+m:ve,O=E?f+" ["+E+"]":f;return o.a.createElement("button",{ref:g,className:C,style:_,accessKey:E,tabIndex:0,title:O,onClick:w},o.a.createElement("div",{className:u},o.a.createElement(he,{className:S,caption:h,accessKey:E}),v))},we={CL_HEADER:"drawer__title",CL_ROOT:"drawer__list",CL_BT:"drawer__list-bt",CL_BT_CLOSE:"drawer__bt-close",BT_TRIPLE:{marginRight:8},UL:{listStyleType:"none"}},_e=function(){var e=Object(a.useContext)(T),t=e.sApp,r=e.addCategory,n=e.removeCategory,i=e.useSelector,s=i(t.topics),c=i(t.categories);return o.a.createElement("ul",{style:we.UL},s.map((function(e){var t=c[e];return o.a.createElement("li",{key:e},o.a.createElement(ye,{className:we.CL_BT,caption:e,timeout:0,onClick:t?function(){return n(e)}:function(){return r(e)}},t&&o.a.createElement(de,null)))})))},Ce=function(){var e=Object(a.useContext)(T),t=e.setUiTheme,r=e.toggleDrawer,n=e.setSrcFilter,i=ee({onSwipeGesture:r,dir:"R"});return o.a.createElement("div",l()({className:we.CL_ROOT},i),o.a.createElement("div",{className:we.CL_HEADER},o.a.createElement(me,{style:we.BT_TRIPLE,oneC:"GREY",twoC:"LIGHT",threeC:"SAND",onClick:t}),o.a.createElement(re,{className:we.CL_BT_CLOSE,onClick:r})),o.a.createElement(_e,null),o.a.createElement("div",{className:we.CL_HEADER},o.a.createElement(me,{style:we.BT_TRIPLE,initialValue:2,oneC:"ALL",twoC:"HTTPS",threeC:"HTTP",onClick:n})))},Se=function(e){return o.a.createElement(Q,null,o.a.createElement(Ce,e))},Oe={ROW:{height:35,transition:"height 0.3s ease-out"},SLIDER:{display:"inline-block",width:200,maxWidth:"calc(100vw - 210px)",marginRight:16},VOLUME:{position:"relative",top:-10,display:"inline-block",color:"#00bcd4",width:46,paddingLeft:5,fontSize:22,fontWeight:400},GAP:{display:"inline-block",width:12}},Te=.8,ke=.2,Re=function(e){return"number"==typeof(t=e)&&Number.isFinite(t)?Math.round(100*e):"";var t},Ue=function(e,t){return{onMouseDown:e,onMouseUp:t,onTouchStart:e,onTouchEnd:t}},Le=o.a.memo((function(e){var t=e.volume,r=e.setVolume,n=e.onIncrease,i=e.onDecrease,s=D(n,(function(e){return e>Te}),t),c=s[0],u=s[1],m=D(i,(function(e){return e<ke}),t),p=m[0],d=m[1],f=Ue((function(){0!==t&&p()}),d),h=Ue((function(){100!==t&&c()}),u);return Object(a.useEffect)((function(){0===t&&d(),100===t&&u()})),o.a.createElement("div",{id:"volume",style:Oe.ROW},o.a.createElement("div",{style:Oe.VOLUME},Re(t)),o.a.createElement(B,{style:Oe.SLIDER,initValue:t,onChange:r}),o.a.createElement(z,l()({accessKey:"-"},f,{onClick:i})),o.a.createElement("div",{style:Oe.GAP}),o.a.createElement(G,l()({accessKey:"+"},h,{onClick:n})),o.a.createElement(Se,null))})),Ne={SHOW:{display:"block"},HIDE:{display:"none"}},Ie=function(e){var t=e.isShow,r=e.className,n=e.style,a=e.children,i=t?Ne.SHOW:Ne.HIDE,s=t?"show-popup":"",c=r?r+" "+s:""!==s?s:void 0;return o.a.createElement("div",{className:c,style:l()({},n,i)},a)},Ae=["alternative","chillout","classical","country","instrumental","jazz","lounge","piano","pop","rock","sport","talks"],Me={alternative:[{title:"France: Chante France",src:"https://chantefrance.ice.infomaniak.ch/chantefrance-96.aac",siteUrl:"https://www.chantefrance.com",br:96},{title:"France: Nostalgie FM",src:"https://scdn.nrjaudio.fm/fr/30601/aac_64.mp3?origine=playernostalgie&aw_0_req.userConsent=undefined&cdn_path=audio_lbs8",siteUrl:"https://www.nostalgie.fr",br:128},{title:"USA: The Austin Music Experience",src:"https://kut.streamguys1.com/amx-web",siteUrl:"https://kutx.org",br:192}],classical:[{title:"Canada: Classic 107 FM",src:"http://daemondef.ic.llnwd.net/stream/daemondef_ddmp3_74",siteUrl:"http://classic107.com",br:56},{title:"Germany: Hamburg Klassik 98.1 FM",src:"https://klassikr.streamabc.net/klassikradio-simulcast-mp3-mq?sABC=5p7684ns%23%233ros3r7q49np68nq09sorn0021437803%23enqvbqr&amsparams=playerid:radiode;skey:1551271087",siteUrl:"https://www.klassikradio.de/",br:192},{title:"Italy: Venice Classic",src:"http://109.123.116.202:8020/stream/1/",siteUrl:"https://www.veniceclassicradio.eu",br:128},{title:"Netherland: NPO Radio 4",src:"https://icecast.omroep.nl/radio4-bb-mp3",siteUrl:"https://www.radio4.nl",br:192},{title:"Swiss: Basel Radio Classic",src:"https://streaming.swisstxt.ch/m/rsc_de/mp3_128",siteUrl:"https://www.radioswissclassic.ch",br:128},{title:"Swiss: Opera House 1.FM",src:"http://strm112.1.fm/opera_mobile_mp3",siteUrl:"https://1.fm",br:128},{title:"Swissradio.ch Classical",src:"http://relay.publicdomainproject.org/classical.mp3"},{title:"UK: BBC 3 Radio",src:"http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio3_mf_p",br:128},{title:"UK: Davide of MIMIC Classical",src:"http://uk3.internet-radio.com:8060/;stream",siteUrl:"http://meetinginmusic.blogspot.com",br:320},{title:"USA: New York WQXR",src:"https://stream.wqxr.org/wqxr-web?nyprBrowserId=5fad42cad0701918",siteUrl:"https://www.wqxr.org/",br:128}],country:[{title:"USA: Country Hits",src:"https://19763.live.streamtheworld.com/977_COUNTRY.mp3",siteUrl:"https://hitsradio.com",br:128},{title:"USA: NYC Country Live",src:"https://streaming.radiostreamlive.com/radiocountrylive_devices",siteUrl:"https://www.radiocountrylive.com",br:128},{title:"USA: Today's Country 011.FM",src:"http://listen.011fm.com:8016/stream09",siteUrl:"http://011fm.com",br:192}],talks:[{title:"BBC Radio Wales 103.9",src:"http://bbcmedia.ic.llnwd.net/stream/bbcmedia_walesmw_mf_p",siteUrl:"http://www.bbc.co.uk/radiowales/",br:128},{title:"USA: California: KCRW 89.9 FM",src:"https://kcrw.streamguys1.com/kcrw_192k_mp3_on_air?listenerid=1a13cb86cbe44b773c014c34bb7bfe43&awparams=companionAds%3Atrue",siteUrl:"https://www.kcrw.com",br:192},{title:"USA: KUT 90.5 FM",src:"https://kut.streamguys1.com/kut-web",siteUrl:"https://www.kut.org",br:128},{title:"USA: NPR Radio",src:"https://npr-ice.streamguys1.com/live.mp3",siteUrl:"https://www.npr.org",br:128},{title:"USA: Portland: XRAY.FM",src:"http://listen.xray.fm:8000/stream",siteUrl:"https://xray.fm",br:128},{title:"USA: WABE 90.1 FM",src:"https://pba-ice.wabe.org/wabe.aac",siteUrl:"https://www.wabe.org",br:96}],sport:[{title:"USA: Bristol: ESPN Radio",src:"http://edge.espn.cdn.abacast.net/espn-networkmp3-48",siteUrl:"http://www.espn.com/espnradio/",br:48},{title:"UK: talkSPORT",src:"https://radio.talksport.com/stream?awparams=platform:ts-tunein;lang:en",siteUrl:"https://talksport.com",br:64}],jazz:[{title:"USA: Florida Smooth Jazz",src:"http://us4.internet-radio.com:8266/;stream",siteUrl:"http://www.SmoothJazzFlorida.com",br:128}],chillout:[{title:"Spain: Costa Del Mar - Chillout",src:"http://stream.cdm-chillout.com:8020/stream-mp3-Chill",siteUrl:"http://www.costadelmar-radio.com",br:96},{title:"Swiss: Chillout Lounge 1.FM",src:"http://strm112.1.fm/chilloutlounge_mobile_mp3",siteUrl:"http://www.1.fm/",br:192},{title:"USA: Chilled Out 181.FM",src:"http://listen.181fm.com/181-chilled_128k.mp3",siteUrl:"http://www.181.fm/",br:128}],lounge:[{title:"France: ABC Lounge Jazz",src:"http://centauri.shoutca.st:8686/stream/1/",siteUrl:"http://www.abc-lounge.com",br:128},{title:"Italy: Milano Lounge",src:"http://antares.dribb.com:5080/autodj",siteUrl:"https://www.milanolounge.net",br:128}],rock:[{title:"USA: Florida Classic Rock",src:"http://us4.internet-radio.com:8258/;stream",siteUrl:"http://www.classicrockflorida.com",br:160}],pop:[{title:"UK: BBC Radio 1",src:"http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_q",siteUrl:"https://www.bbc.co.uk/radio1",br:128},{title:"UK: Dance",src:"http://uk7.internet-radio.com:8226/;stream",siteUrl:"https://www.danceradiouk.com",br:48},{title:"UK: Magic",src:"https://stream-mz.planetradio.co.uk/magicnational.aac",siteUrl:"http://planetradio.co.uk/magic/",br:47},{title:"Swiss: Zug Top 40 1.FM",src:"http://strm112.1.fm/top40_mobile_mp3",siteUrl:"http://1.fm",br:128},{title:"Seattle: KEXP 90.3 FM",src:"https://kexp-mp3-128.streamguys1.com/kexp128.mp3",siteUrl:"http://kexp.org",br:128},{title:"USA: 977 Hits Radio",src:"https://19763.live.streamtheworld.com/977_HITSAAC_SC",siteUrl:"https://hitsradio.com",br:64}],piano:[{title:"USA: Whisperings Solo Piano",src:"http://pianosolo.streamguys.net/live",siteUrl:"https://www.solopianoradio.com",br:96},{title:"USA: Matt Johnson Radio",src:"http://us2.internet-radio.com:8046/;stream",siteUrl:"http://www.mattjohnsonmusic.com",br:80}],instrumental:[{title:"Instrumental Radio",src:"http://178.32.62.163:8599/;stream/1",siteUrl:"http://www.instrumentalradio.eu",br:128},{title:"USA: GotRadio Guitar Genius",src:"https://pureplay.cdnstream1.com/6018_128.mp3",siteUrl:"https://www.gotradio.com",br:128},{title:"USA: Instrumental Hits Radio",src:"http://162.244.80.106:11128/stream2",siteUrl:"http://instrumentalhitsradio.com",br:192},{title:"Music Lake",src:"http://50.7.68.251:7168/;stream/1",siteUrl:"http://musiclake.com",br:64}]},De={getCategory:function(e){return Me[e]||[]}},xe={isHttp:function(e){return void 0===e&&(e=""),"http"===e.split("://")[0]},filterCategoriesBy:function(e){return Ae.filter((function(t){return De.getCategory(t).some(e)}))},crCategories:function(){return[].concat(Ae)},getCategory:De.getCategory,crFilterBy:function(e){switch(e){case"http":return function(e){return xe.isHttp(e.src)};case"https":return function(e){return!xe.isHttp(e.src)};default:return function(){return!0}}}},Pe=xe,He=Pe.isHttp,Fe=function(e){var t=e.src,r=He(t)?"(http)":"";return o.a.createElement("span",null," ",r)},Ve="station-descr",je="station-descr__bt",Be="item-descr__bt-more",ze="station-descr__info",Ge={ARROW_OPEN:{transform:"rotate(90deg) scale(1.3, 1.3) translate(14px, -10px)"},LINK:{color:"#04477b",fontSize:"17px"},TITLE:{color:"darkgray"},CATEGORY:{color:"#1b2836"}},Ke=function(e){var t,r=e.category,n=e.br;if(!(t=r)||"string"!=typeof t)return null;var a=n?" ("+n+" Kbps)":"";return o.a.createElement("div",null,o.a.createElement("span",{style:Ge.TITLE},"Category:")," ",o.a.createElement("span",{style:Ge.CATEGORY},function(e){return e[0].toUpperCase()+e.substring(1)}(r),a))},We=function(e){var t=e.siteUrl;return t?o.a.createElement("a",{href:t,style:Ge.LINK,target:"_blank",rel:"noreferrer noopener"},t):null},Ye=function(e){var t=e.station,r=Object(a.useState)(!0),n=r[0],i=r[1],s=n?Ge.ARROW_OPEN:void 0,c=t||{},l=c.title,u=c.src,m=c.siteUrl,p=c.category,d=c.br;return t?o.a.createElement("div",{className:Ve},o.a.createElement("button",{className:je,onClick:function(){return i((function(e){return!e}))}},o.a.createElement("span",null,l),o.a.createElement(Fe,{src:u}),o.a.createElement("span",{className:Be,style:s},">")),o.a.createElement(Ie,{className:ze,isShow:n},o.a.createElement("div",null,o.a.createElement(Ke,{category:p,br:d}),o.a.createElement(We,{siteUrl:m})))):null},qe="item-station",Xe="item-station__access",Je=function(e){var t=e.station,r=e.accessKey,n=e.onClick,a=t.title,i=t.src;return o.a.createElement("button",{className:qe,accessKey:r,onClick:n},o.a.createElement("span",null,a),o.a.createElement(Fe,{src:i}),Boolean(r)&&o.a.createElement("span",{className:Xe},r))},Qe="item-list",Ze=function(e){return e<5?e+1:void 0},$e={Command:I,Volume:Le,List:function(){var e=Object(a.useContext)(T),t=e.toggleDrawer,r=e.setCurrentStation,n=e.sApp,i=e.useSelector,s=i(n.currentStation),c=i(n.stations),u=ee({onSwipeGesture:t});return o.a.createElement("div",l()({className:Qe},u),o.a.createElement(Ye,{station:s}),c.map((function(e,t){return o.a.createElement(Je,{key:e.title,station:e,accessKey:k.TOUCH?void 0:Ze(t),onClick:r.bind(null,e,t)})})))}},et=r(2),tt=function(e){return parseFloat(e.toFixed(2))},rt={volume:.25,autoplay:!1,html5:!0,format:["webm","mpeg","mp3","acc"]},nt=!0,at={INIT_VOLUME:.2,checkInitVolume:function(){nt&&(et.Howler.volume(at.INIT_VOLUME),nt=!1)},getVolume:function(){return et.Howler.volume()},unload:function(){ue&&(ue.unload(),ue.off())},init:function(e,t,r){try{at.checkInitVolume();var n=et.Howler.volume();return at.unload(),ue=new et.Howl(l()({},rt,{src:e,onloaderror:t,onplayerror:r})),et.Howler.volume(n),!0}catch(e){return ue=null,console.log(e.message),!1}},play:function(){return!!ue&&(ue.play(),!0)},stop:function(){ue&&ue.stop()},setVolume:function(e){return et.Howler.volume(tt(e)),e},increaseVolume:function(e){void 0===e&&(e=.05),at.checkInitVolume();var t=tt(et.Howler.volume()+e);return t<=1&&et.Howler.volume(t),et.Howler.volume()},decreaseVolume:function(e){void 0===e&&(e=.05),at.checkInitVolume();var t=tt(et.Howler.volume()-e);return t>=0&&et.Howler.volume(t),et.Howler.volume()}},ot=at,it="audio__title",st="audio__title audio__title--err",ct=function(e){var t=e.station,r=e.msgErr,n=e.title,a=t&&t.title||"",i=r&&a,s=i?r+" "+a:a||n,c=i?st:it;return o.a.createElement("div",{className:c},s)},lt="equalizer",ut="equalizer--not-playing",mt=function(e){var t=e.isPlaying,r=e.isUnloaded,n=e.unload;return t?o.a.createElement("div",{className:lt}):r?o.a.createElement("div",{className:ut}):o.a.createElement("button",{className:ut,"data-loader":"circle",onClick:n})},pt={SET_LOADING:"SET_LOADING",SET_PLAYING:"SET_PLAYING",PAUSE:"PAUSE",UNLOAD:"UNLOAD",STOP:"STOP",SET_VOLUME:"SET_VOLUME",SET_TITLE:"SET_TITLE",SET_ERROR:"SET_ERROR"},dt=function(e,t){switch(t.type){case pt.SET_LOADING:return l()({},e,{isUnloaded:!1,isPlaying:!1,msgErr:""});case pt.SET_PLAYING:return l()({},e,{isPlaying:!0,isUnloaded:!1});case pt.PAUSE:return l()({},e,{isPlaying:!1});case pt.UNLOAD:return l()({},e,{isUnloaded:!0});case pt.STOP:return l()({},e,{isPlaying:!1,isUnloaded:!0});case pt.SET_VOLUME:return l()({},e,{volume:t.volume});case pt.SET_TITLE:return l()({},e,{title:t.title});case pt.SET_ERROR:return l()({},e,{msgErr:t.msgErr,isPlaying:!1,isUnloaded:!0});default:throw new Error("Unsupported action type: "+t.type)}};dt.A=pt;var ft=dt,ht=ft.A,Et="Radio Player v0.2.0",bt="audio-player",vt={TITLE_CONT:{display:"flex",alignItems:"center"}},gt=function(e){void 0===e&&(e=""),k.MEDIA_SESSION&&(navigator.mediaSession.metadata=new MediaMetadata({title:Et,artist:e}))},yt={msgErr:"",title:Et,isUnloaded:!0,isPlaying:!1,volume:ot.INIT_VOLUME},wt=function(){var e=Object(a.useRef)(),t=Object(a.useContext)(T),r=t.uiThemeImpl,n=t.sApp,i=t.useSelector,s=i(n.uiTheme),c=i(n.currentStation),l=Object(a.useReducer)(ft,yt),u=l[0],m=l[1],p=u.isUnloaded,d=u.isPlaying,f=u.volume,h=u.title,E=u.msgErr,b=Object(a.useCallback)((function(e){return m({type:ht.SET_VOLUME,volume:ot.setVolume(e)})}),[]),v=Object(a.useCallback)((function(){return m({type:ht.SET_VOLUME,volume:ot.increaseVolume(.01)})}),[]),g=Object(a.useCallback)((function(){return m({type:ht.SET_VOLUME,volume:ot.decreaseVolume(.01)})}),[]),y=Object(a.useCallback)((function(){ot.stop(),ot.unload(),m({type:ht.STOP})}),[]),w=function(e){m({type:ht.SET_ERROR,msgErr:e}),gt()};Object(a.useEffect)((function(){k.MEDIA_SESSION&&navigator.mediaSession.setActionHandler("pause",y)}),[]),Object(a.useEffect)((function(){return c&&c.src&&ot.init(c.src,w.bind(null,"Load Error"),w.bind(null,"Play Error"))&&m({type:ht.SET_LOADING}),function(){ot.unload()}}),[c]);var _=r.toBg(s);return o.a.createElement("div",{className:bt,style:_},o.a.createElement($e.Volume,{volume:f,setVolume:b,onIncrease:v,onDecrease:g}),o.a.createElement("div",{style:vt.TITLE_CONT},o.a.createElement($e.Command,{isPlaying:d,onPlay:function(){var t;t=e,clearTimeout(t.current),t.current=void 0,!E&&ot.play()?(m({type:ht.SET_PLAYING}),gt(c&&c.title||Et)):(m({type:ht.SET_TITLE,title:"At first, please, choose a radio station."}),gt())},onPause:function(){ot.stop(),e.current=setTimeout((function(){return m({type:ht.UNLOAD})}),18e4),m({type:ht.PAUSE})}}),o.a.createElement(ct,{station:c,msgErr:E,title:h}),o.a.createElement(mt,{isPlaying:d,isUnloaded:p,unload:function(){ot.unload(),m({type:ht.UNLOAD}),gt()}})))},_t=function(){var e=Object(s.useDispatch)(),t=T.getValue(e),r=t.setSrcFilter;return Object(a.useEffect)((function(){r(2)}),[]),o.a.createElement(T.Provider,{value:t},o.a.createElement("div",{className:"app-radio-player"},o.a.createElement(wt,null),o.a.createElement($e.List,null)))},Ct={app:{isDrawer:!1,filter:"none",currentStation:void 0,uiTheme:"grey"},topics:[].concat(Ae),categories:{},stations:[]},St=function(e,t){switch(void 0===e&&(e=Ct.app),t.type){case m:var r=t.uiTheme;return e.uiTheme!==r?l()({},e,{uiTheme:r}):e;case d:return l()({},e,{isDrawer:!e.isDrawer});case p:return l()({},e,{filter:t.filter});case g:var n=t.station;return l()({},e,{currentStation:n});default:return e}},Ot=function(e){return function(t){return t.title!==e}},Tt=function(e,t){switch(void 0===e&&(e=[]),t.type){case b:var r=t.categories,n=t.category,a=(t.currentStation||{}).title,o=r.filter(Ot(a)),i=function(e,t){for(var r=e.length,n=0;n<r;n++)if(e[n].category===t)return e[n]}(e,n),s=i?o.filter(Ot(i.title)):o;return[].concat(s,e);case v:var c=t.category;return e.filter(function(e){return function(t){return t.category!==e}}(c));case g:var l=t.station,u=t.currentStation,m=(l||{}).title,d=e.filter(Ot(m));return u&&d.unshift(u),d;case p:return[];default:return e}},kt=function(e,t){switch(void 0===e&&(e={}),t.type){case b:return e[t.category]=!0,l()({},e);case v:return e[t.category]=!1,l()({},e);case p:return{};default:return e}},Rt=Pe.isHttp,Ut=Pe.filterCategoriesBy,Lt=Pe.crCategories,Nt=function(e,t){switch(void 0===e&&(e={}),t.type){case p:return r=t.filter,(n="https"===r?function(e){return!Rt(e.src)}:"http"===r?function(e){return Rt(e.src)}:void 0)?Ut(n):Lt();default:return e}var r,n},It=Object(u.combineReducers)({app:St,stations:Tt,categories:kt,topics:Nt}),At=function(e){var t=e.getState;return function(e){return function(r){return r.type!==g&&r.type!==b||(r.currentStation=w.currentStation(t())),e(r)}}},Mt={grey:"grey",light:"#e1e1e1",sand:"#e8e0cb"},Dt=function(e){return function(e){return function(t){if(t.type===m){var r=t.uiTheme,n=Mt[r];document.body.style.backgroundColor=n}return e(t)}}},xt=Pe.crFilterBy,Pt=Pe.getCategory,Ht=[].concat([Dt,At,function(e){var t=e.getState;return function(e){return function(r){if(r.type===b){var n=t(),a=r.category,o=xt(n.app.filter);r.categories=Pt(a).map((function(e){return e.category=a,e})).filter(o)}return e(r)}}}]),Ft=u.compose,Vt=Object(u.createStore)(It,Ct,Ft(u.applyMiddleware.apply(void 0,Ht)));Object(i.render)(o.a.createElement(s.Provider,{store:Vt},o.a.createElement(_t,null)),document.getElementById("app"))}]);