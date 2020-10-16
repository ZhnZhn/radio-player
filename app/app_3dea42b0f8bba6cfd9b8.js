/*! For license information please see app_3dea42b0f8bba6cfd9b8.js.LICENSE.txt */
(()=>{var t={154:t=>{function e(){return t.exports=e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},e.apply(this,arguments)}t.exports=e},354:t=>{t.exports=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}},251:(t,e,r)=>{"use strict";var n=r(679),s=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;s=i("react.element"),i("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,r){var n,i={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(u=e.ref),e)a.call(e,n)&&!c.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:s,type:t,key:l,ref:u,props:i,_owner:o.current}}e.jsx=l,e.jsxs=l},893:(t,e,r)=>{"use strict";t.exports=r(251)},512:(t,e,r)=>{t.exports=r(342)(213)},679:(t,e,r)=>{t.exports=r(342)(294)},435:(t,e,r)=>{t.exports=r(342)(766)},43:(t,e,r)=>{t.exports=r(342)(890)},226:(t,e,r)=>{t.exports=r(342)(935)},342:t=>{"use strict";t.exports=lib_vendor}},e={};function r(n){if(e[n])return e[n].exports;var s=e[n]={exports:{}};return t[n](s,s.exports,r),s.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=r(893),e=r(226),n=r(512),s=r(679),i=r(154),o=r.n(i),a=r(43),c="SET_UI_THEME",l="SET_SRC_FILTER",u="TOGGLE_DRAWER",d={1:"grey",2:"light",3:"sand"},p={1:"none",2:"https",3:"http"};const m={setUiTheme:function(t){return{type:c,uiTheme:d[t]}},setSrcFilter:function(t){return{type:l,filter:p[t]}},toggleDrawer:function(){return{type:u}}};var h="ADD_CATEGORY",f="REMOVE_CATEGORY",v="SET_CURRENT_STATION";const g={addCategory:function(t){return{type:h,category:t}},removeCategory:function(t){return{type:f,category:t}},setCurrentStation:function(t){return{type:v,station:t}}};var b={app:function(t){return t.app||{}},isDrawer:function(t){return b.app(t).isDrawer},currentStation:function(t){return b.app(t).currentStation},uiTheme:function(t){return b.app(t).uiTheme},topics:function(t){return t.topics||[]},categories:function(t){return t.categories||[]},stations:function(t){return t.stations||[]}};const w={sApp:b};var y={grey:"grey",light:"#f9f9f9",sand:"#fdf1d5"};const _={toBg:function(t){return{backgroundColor:y[t]}}};var x,E=(0,s.createContext)();E.getValue=function(t){return x||(x=o()({},(0,a.bindActionCreators)(m,t),(0,a.bindActionCreators)(g,t),w,{useSelector:n.useSelector,uiThemeImpl:_}))};const C=E;const S={TRANSITION:document&&void 0!==document.body.style.transition,TOUCH:document&&"ontouchstart"in document.documentElement,MEDIA_SESSION:navigator&&"mediaSession"in navigator};const T=function(e){var r=e.accessKey,n=e.onMouseDown,s=e.onMouseUp,i=e.onTouchStart,a=e.onTouchEnd,c=e.onClick,l=e.children,u=S.TOUCH&&i?{onTouchStart:i,onTouchEnd:a}:{onMouseDown:n,onMouseUp:s};return(0,t.jsx)("button",o()({className:"bt-circle",accessKey:r},u,{onClick:c,children:(0,t.jsx)("svg",{viewBox:"0 0 34 34",width:"100%",height:"100%",children:(0,t.jsx)("g",{children:l})})}))};var R=(0,t.jsx)("path",{d:"M12.458 22.667l10-6.5-10-6.5z"}),k=(0,t.jsxs)(s.Fragment,{children:[(0,t.jsx)("path",{d:"M11.5 10h3v13h-3v-13z"}),(0,t.jsx)("path",{d:"M17.5 10h3v13h-3v-13z"})]});const U=function(e){var r=e.isPlaying,n=e.onPlay,s=e.onStop,i=r?s:n,o=r?k:R,a=r?"s":"p";return(0,t.jsx)(T,{accessKey:a,onClick:i,children:o})};const j=function(e){var r=e.isPlaying,n=e.onPlay,s=e.onPause;return(0,t.jsx)("div",{children:(0,t.jsx)(U,{isPlaying:r,onPlay:n,onStop:s})})};var O=150,L=500;const N=function(t,e,r){var n=(0,s.useRef)(),i=(0,s.useRef)();i.current=r;var o=function(){return clearInterval(n.current)};return[function(){n.current=setInterval((function(){e(i.current)?(o(),n.current=setInterval(t,L)):t()}),O)},o]};var I=r(354),A=r.n(I),M={ROOT:{position:"relative",width:"100%",height:18,marginTop:8,marginBottom:8,cursor:"default",userSelect:"none"},ROOT_LINE:{position:"absolute",top:8,left:0,width:"100%",height:2},LINE_BEFORE:{position:"absolute",left:0,width:"calc(15%)",height:"100%",marginRight:6,backgroundColor:"rgb(0, 188, 212)",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},LINE_AFTER:{position:"absolute",right:0,width:"calc(85%)",height:"100%",marginLeft:6,backgroundColor:"rgb(189, 189, 189)",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},LINE_HOVERED:{backgroundColor:"rgb(158, 158, 158)"},ROOT_CIRCLE:{boxSizing:"borderBox",position:"absolute",top:0,left:"15%",zIndex:1,width:12,height:12,margin:"1px 0px 0px",backgroundColor:"rgb(0, 188, 212)",backgroundClip:"padding-box",border:"0px solid transparent",borderRadius:"50%",transform:"translate(-50%, -50%)",overflow:"visible",outline:"none",transition:"background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",pointerEvents:"inherit",cursor:"pointer"},CIRCLE_DRAGGED:{width:20,height:20},CIRCLE_INNER:{position:"absolute",top:0,left:0,width:12,height:12,overflow:"visible"},CIRCLE_INNER_EL:{position:"absolute",top:-12,left:-12,width:"300%",height:36,borderRadius:"50%",backgroundColor:"rgba(0, 188, 212, 0.16)",transform:"scale(1)"},EMBER:{top:-12,left:-12,width:"220%",height:44,border:"1px solid #4caf50"}},D=function(t,e,r){return r?function(t,e){return t=+t,e=+e,isNaN(t)||"number"!=typeof e||e%1!=0?NaN:(t=t.toString().split("e"),+((t=(t=Math.round(+(t[0]+"e"+(t[1]?+t[1]-e:-e)))).toString().split("e"))[0]+"e"+(t[1]?+t[1]+e:e)))}(t+e,r):t+e},P=function(t){return{width:"calc("+t+"%)"}},H=function(e){function r(t){var r;(r=e.call(this,t)||this)._hMouseEnter=function(){r.setState({isHovered:!0})},r._hMouseLeave=function(){r.setState({isHovered:!1})},r._hMouseDown=function(t){t.preventDefault(),document.addEventListener("mousemove",r._hDragMouseMove),document.addEventListener("mouseup",r._hDragMouseUp),r.setState({isDragged:!0})},r._hDragMouseMove=function(t){r._onDragUpdate(t)},r._hDragMouseUp=function(){document.removeEventListener("mousemove",r._hDragMouseMove),document.removeEventListener("mouseup",r._hDragMouseUp),r.setState({isDragged:!1})},r._hFocusTrack=function(){r.setState({isHovered:!0})},r._hBlurTrack=function(){r.setState({isHovered:!1})},r._hKeyDownTrack=function(t){switch(t.keyCode){case 37:var e=r.props,n=e.min,s=e.step,i=r.state.value;if(i>n){var o=D(i,-s,r.stepExp);r._setValue(t,o)}break;case 39:var a=r.props,c=a.max,l=a.step,u=r.state.value;if(u<c){var d=D(u,l,r.stepExp);r._setValue(t,d)}break;default:return}},r._onDragUpdate=function(t){r.dragRunning||(r.dragRunning=!0,requestAnimationFrame((function(){r.dragRunning=!1;var e=t.clientX-r._calcTrackOffset();r._setValueFromPosition(t,e)})))},r._setValue=function(t,e){r.setState({value:e}),r.isOnChange&&r.props.onChange(e)},r._calcTrackOffset=function(){return r.trackComp.getBoundingClientRect().left},r._setValueFromPosition=function(t,e){var n=r.trackComp.clientWidth;e<0?e=0:e>n&&(e=n);var s,i=r.props,o=i.step,a=i.min,c=i.max;s=e/n*(c-a),s=Math.round(s/o)*o+a,(s=parseFloat(s.toFixed(5)))>c?s=c:s<a&&(s=a),r.state.value!==s&&r._setValue(t,s)},r._refTrackComp=function(t){return r.trackComp=t};var n=t.onChange,s=t.step,i=t.initValue;r.isOnChange="function"==typeof n;var o=(""+s).split(".");return r.stepExp=o[1]?-1*o[1].length:0,r.state={isHovered:!1,isDragged:!1,value:i},r}A()(r,e);var n=r.prototype;return n.UNSAFE_componentWillReceiveProps=function(t){t!==this.props&&this.setState({value:t.initValue})},n.render=function(){var e=this.props,r=e.step,n=e.min,s=e.max,i=e.style,a=this.state,c=a.isHovered,l=a.isDragged,u=a.value,d=c?o()({},M.LINE_AFTER,M.LINE_HOVERED):M.LINE_AFTER,p=l?M.CIRCLE_DRAGGED:null,m=l?M.EMBER:null,h=c||l?(0,t.jsx)("div",{style:o()({},M.CIRCLE_INNER_EL,m)}):null,f=function(t,e,r){var n=(t-e)/(r-e);return Number.isNaN(n)?0:100*n}(u,n,s),v=P(f),g=P(100-f),b={left:f+"%"};return(0,t.jsx)("div",{style:o()({},M.ROOT,i),role:"slider","aria-valuemax":s,"aria-valuemin":n,"aria-valuenow":u,tabIndex:"0",onMouseDown:this._hMouseDown,onMouseEnter:this._hMouseEnter,onMouseLeave:this._hMouseLeave,children:(0,t.jsxs)("div",{ref:this._refTrackComp,tabIndex:"0",role:"button",style:M.ROOT_LINE,onKeyDown:this._hKeyDownTrack,onFocus:this._hFocusTrack,onBlur:this._hBlurTrack,children:[(0,t.jsx)("div",{style:o()({},M.LINE_BEFORE,v)}),(0,t.jsx)("div",{style:o()({},d,g)}),(0,t.jsx)("div",{style:o()({},M.ROOT_CIRCLE,p,b),children:(0,t.jsx)("div",{style:o()({},M.CIRCLE_INNER,p),children:h})}),(0,t.jsx)("input",{type:"hidden",step:r,min:n,max:s,value:u,required:!0})]})})},n.setValue=function(t){this.setState({value:t})},r}(s.Component);H.defaultProps={initValue:1,min:0,max:1,step:.05};const F=H;const V=function(e){return(0,t.jsx)(T,o()({},e,{children:(0,t.jsx)("path",{d:"M8 16 H24",strokeWidth:"3"})}))};const B=function(e){return(0,t.jsxs)(T,o()({},e,{children:[(0,t.jsx)("path",{d:"M8 16 H24",strokeWidth:"3"}),(0,t.jsx)("path",{d:"M16 8 V24",strokeWidth:"3"})]}))};var z="drawer-bt",G="drawer-span",K="drawer-svg",W="drawer",Y="drawer-modal",q={BT_DRAWER:{position:"absolute",top:8,right:18},DRAWER_OFF:{transform:"translateX(264px)",pointerEvents:"none"},DRAWER_ON:{transform:"translate(0px, 0px)"},MODAL_OFF:{display:"none",opacity:0,zIndex:-1,transition:"opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},MODAL_ON:{display:"block",opacity:1,zIndex:1e3,transition:"opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"}};const X=function(e){var r=e.btStyle,n=e.children,i=(0,s.useContext)(C),a=i.toggleDrawer,c=i.sApp,l=i.useSelector,u=l(c.isDrawer),d=l(c.uiTheme);(0,s.useEffect)((function(){document.body.style.overflowY=u?"hidden":"auto"}));var p=o()({},u?q.DRAWER_ON:q.DRAWER_OFF,_.toBg(d)),m=u?q.MODAL_ON:q.MODAL_OFF,h=u?a:void 0;return[(0,t.jsx)("button",{className:z,style:o()({},q.BT_DRAWER,r),"aria-label":"Open Drawer",onClick:a,children:(0,t.jsx)("span",{className:G,children:(0,t.jsxs)("svg",{className:K,focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,t.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,t.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})]})})},"bt-drawer"),(0,t.jsx)("div",{role:"presentation","aria-hidden":!u,className:Y,style:m,onClick:h},"wrapper"),(0,t.jsx)("aside",{className:W,style:p,children:(0,t.jsx)("div",{children:n})},"aside")]};var J={fromClientX:void 0},$=function(t){var e=(t||{}).changedTouches,r=void 0===e?[]:e;return r[0]?r[0].clientX:void 0};const Q=function(t){var e=t.onSwipeGesture,r=t.dir,n=void 0===r?"L":r,i=t.delta,o=void 0===i?30:i,a=(0,s.useCallback)((function(t){J.fromClientX=$(t)}),[]),c=(0,s.useCallback)((function(t){J.fromClientX&&function(t,e,r){return"L"===t||"U"===t?J.fromClientX-r>e:r-J.fromClientX>e}(n,o,$(t))&&(e(),J.fromClientX=void 0)}),[]);if(S.TOUCH)return{onTouchStart:a,onTouchEnd:c}};var Z={COLOR:"#f44336",SVG:{padding:3}};const tt=function(e){var r=e.className,n=void 0===r?"svg-close":r,s=e.style,i=e.tabIndex,o=void 0===i?-1:i,a=e.onClick;return(0,t.jsx)("button",{className:n,style:s,tabIndex:o,onClick:a,children:(0,t.jsxs)("svg",{viewBox:"0 0 12 12",width:"100%",height:"100%",style:Z.SVG,preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:"2",stroke:Z.COLOR,strokeLinecap:"round",children:[(0,t.jsx)("path",{d:"M 0,0 L 12,12"}),(0,t.jsx)("path",{d:"M 12,0 L 0,12"})]})})};var et="bt-triple",rt="bt-triple__one",nt="bt-triple__two",st="bt-triple__three",it={SELECTED:{backgroundColor:"#1b2836"}},ot=function(t,e){return t===e?it.SELECTED:void 0},at=function(e){var r=e.style,n=e.tabIndex,i=e.initialValue,o=e.oneC,a=e.twoC,c=e.threeC,l=e.onClick,u=(0,s.useState)(i),d=u[0],p=u[1],m=ot(d,1),h=ot(d,2),f=ot(d,3),v=(0,s.useCallback)((function(t){l(t),p(t)}),[l]);return(0,t.jsxs)("div",{className:et,style:r,children:[(0,t.jsx)("button",{className:rt,style:m,tabIndex:n,onClick:v.bind(null,1),children:o}),(0,t.jsx)("button",{className:nt,style:h,tabIndex:n,onClick:v.bind(null,2),children:a}),(0,t.jsx)("button",{className:st,style:f,tabIndex:n,onClick:v.bind(null,3),children:c})]})};at.defaultProps={tabIndex:-1,initialValue:1,oneC:"One",twoC:"Two",threeC:"Three"};const ct=at;var lt={display:"inline-block",width:16,height:16};const ut=function(e){var r=e.style,n=e.color,s=void 0===n?"#64e346":n;return(0,t.jsx)("span",{style:o()({},lt,r),children:(0,t.jsx)("svg",{viewBox:"0 0 16 16",width:"100%",height:"100%",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M 2,5 L 8,14 14,1",stroke:s,fill:"transparent",strokeWidth:"3",strokeLinecap:"round"})})})};var dt={KEY:{textDecoration:"underline"}};const pt=function(e){var r=e.className,n=e.rootStyle,s=e.caption,i=void 0===s?"":s,o=e.accessKey,a=e.children,c=i.toLowerCase().indexOf(o);if(o&&-1!==c){var l=i.substring(0,c),u=i.substring(c,c+1),d=i.substring(c+1);return(0,t.jsxs)("span",{className:r,style:n,children:[(0,t.jsx)("span",{children:l}),(0,t.jsx)("span",{style:dt.KEY,children:u}),(0,t.jsx)("span",{children:d}),a]})}return(0,t.jsxs)("span",{className:r,style:n,children:[i,a]})};var mt="bt-flat",ht="bt-flat__div",ft="bt-flat__span",vt={color:"#607d8b"};const gt=function(e){var r=e.innerRef,n=e.timeout,i=void 0===n?500:n,a=e.className,c=e.rootStyle,l=e.clDiv,u=void 0===l?ht:l,d=e.clCaption,p=e.isPrimary,m=e.title,h=void 0===m?"":m,f=e.caption,v=e.accessKey,g=e.onClick,b=e.children,w=(0,s.useRef)(),y=(0,s.useCallback)((function(t){void 0===t&&(t="auto"),w.current&&(w.current.style["pointer-events"]=t)}),[]),_=(0,s.useCallback)((function(t){0!==i&&(y("none"),setTimeout(y,i)),g(t)}),[i,g]);(0,s.useImperativeHandle)(r,(function(){return{focus:function(){w.current&&w.current.focus()}}}));var x=p?o()({},c,vt):c,E=a?mt+" "+a:mt,C=d?ft+" "+d:ft,S=v?h+" ["+v+"]":h;return(0,t.jsx)("button",{ref:w,className:E,style:x,accessKey:v,tabIndex:0,title:S,onClick:_,children:(0,t.jsxs)("div",{className:u,children:[(0,t.jsx)(pt,{className:C,caption:f,accessKey:v}),b]})})};const bt={CL_HEADER:"drawer__title",CL_ROOT:"drawer__list",CL_BT:"drawer__list-bt",CL_BT_CLOSE:"drawer__bt-close",BT_TRIPLE:{marginRight:8},UL:{listStyleType:"none"}};const wt=function(){var e=(0,s.useContext)(C),r=e.sApp,n=e.addCategory,i=e.removeCategory,o=e.useSelector,a=o(r.topics),c=o(r.categories);return(0,t.jsx)("ul",{style:bt.UL,children:a.map((function(e){var r=c[e];return(0,t.jsx)("li",{children:(0,t.jsx)(gt,{className:bt.CL_BT,caption:e,timeout:0,onClick:r?function(){return i(e)}:function(){return n(e)},children:r&&(0,t.jsx)(ut,{})})},e)}))})};const yt=function(){var e=(0,s.useContext)(C),r=e.setUiTheme,n=e.toggleDrawer,i=e.setSrcFilter,a=Q({onSwipeGesture:n,dir:"R"});return(0,t.jsxs)("div",o()({className:bt.CL_ROOT},a,{children:[(0,t.jsxs)("div",{className:bt.CL_HEADER,children:[(0,t.jsx)(ct,{style:bt.BT_TRIPLE,oneC:"GREY",twoC:"LIGHT",threeC:"SAND",onClick:r}),(0,t.jsx)(tt,{className:bt.CL_BT_CLOSE,onClick:n})]}),(0,t.jsx)(wt,{}),(0,t.jsx)("div",{className:bt.CL_HEADER,children:(0,t.jsx)(ct,{style:bt.BT_TRIPLE,initialValue:2,oneC:"ALL",twoC:"HTTPS",threeC:"HTTP",onClick:i})})]}))};const _t=function(e){return(0,t.jsx)(X,{children:(0,t.jsx)(yt,o()({},e))})};var xt={ROW:{height:35,transition:"height 0.3s ease-out"},SLIDER:{display:"inline-block",width:200,maxWidth:"calc(100vw - 210px)",marginRight:16},VOLUME:{position:"relative",top:-10,display:"inline-block",color:"#00bcd4",width:46,paddingLeft:5,fontSize:22,fontWeight:400},GAP:{display:"inline-block",width:12}},Et=.8,Ct=.2,St=function(t){return"number"==typeof(e=t)&&Number.isFinite(e)?Math.round(100*t):"";var e},Tt=function(t,e){return{onMouseDown:t,onMouseUp:e,onTouchStart:t,onTouchEnd:e}},Rt=function(e){var r=e.volume,n=e.setVolume,i=e.onIncrease,a=e.onDecrease,c=N(i,(function(t){return t>Et}),r),l=c[0],u=c[1],d=N(a,(function(t){return t<Ct}),r),p=d[0],m=d[1],h=Tt((function(){0!==r&&p()}),m),f=Tt((function(){100!==r&&l()}),u);return(0,s.useEffect)((function(){0===r&&m(),100===r&&u()})),(0,t.jsxs)("div",{id:"volume",style:xt.ROW,children:[(0,t.jsx)("div",{style:xt.VOLUME,children:St(r)}),(0,t.jsx)(F,{style:xt.SLIDER,initValue:r,onChange:n}),(0,t.jsx)(V,o()({accessKey:"-"},h,{onClick:a})),(0,t.jsx)("div",{style:xt.GAP}),(0,t.jsx)(B,o()({accessKey:"+"},f,{onClick:i})),(0,t.jsx)(_t,{})]})};const kt=(0,s.memo)(Rt);var Ut={SHOW:{display:"block"},HIDE:{display:"none"}};const jt=function(e){var r=e.isShow,n=e.className,s=e.style,i=e.children,a=r?Ut.SHOW:Ut.HIDE,c=r?"show-popup":"",l=n?n+" "+c:""!==c?c:void 0;return(0,t.jsx)("div",{className:l,style:o()({},s,a),children:i})};const Ot=["alternative","chillout","classical","country","instrumental","jazz","lounge","piano","pop","rock","sport","talks"];var Lt={alternative:[{title:"France: Chante France",src:"https://chantefrance.ice.infomaniak.ch/chantefrance-96.aac",siteUrl:"https://www.chantefrance.com",br:96},{title:"France: Nostalgie FM",src:"https://scdn.nrjaudio.fm/fr/30601/aac_64.mp3?origine=playernostalgie&aw_0_req.userConsent=undefined&cdn_path=audio_lbs8",siteUrl:"https://www.nostalgie.fr",br:128},{title:"USA: The Austin Music Experience",src:"https://kut.streamguys1.com/amx-web",siteUrl:"https://kutx.org",br:192}],classical:[{title:"Canada: Classic 107 FM",src:"http://daemondef.ic.llnwd.net/stream/daemondef_ddmp3_74",siteUrl:"http://classic107.com",br:56},{title:"Germany: Hamburg Klassik 98.1 FM",src:"https://klassikr.streamabc.net/klassikradio-simulcast-mp3-mq?sABC=5p7684ns%23%233ros3r7q49np68nq09sorn0021437803%23enqvbqr&amsparams=playerid:radiode;skey:1551271087",siteUrl:"https://www.klassikradio.de/",br:192},{title:"Italy: Venice Classic",src:"http://109.123.116.202:8020/stream/1/",siteUrl:"https://www.veniceclassicradio.eu",br:128},{title:"Netherland: NPO Radio 4",src:"https://icecast.omroep.nl/radio4-bb-mp3",siteUrl:"https://www.radio4.nl",br:192},{title:"Swiss: Basel Radio Classic",src:"https://streaming.swisstxt.ch/m/rsc_de/mp3_128",siteUrl:"https://www.radioswissclassic.ch",br:128},{title:"Swiss: Opera House 1.FM",src:"http://strm112.1.fm/opera_mobile_mp3",siteUrl:"https://1.fm",br:128},{title:"Swissradio.ch Classical",src:"http://relay.publicdomainproject.org/classical.mp3"},{title:"UK: BBC 3 Radio",src:"http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio3_mf_p",br:128},{title:"UK: Davide of MIMIC Classical",src:"http://uk3.internet-radio.com:8060/;stream",siteUrl:"http://meetinginmusic.blogspot.com",br:320},{title:"USA: New York WQXR",src:"https://stream.wqxr.org/wqxr-web?nyprBrowserId=5fad42cad0701918",siteUrl:"https://www.wqxr.org/",br:128}],country:[{title:"USA: Country Hits",src:"https://19763.live.streamtheworld.com/977_COUNTRY.mp3",siteUrl:"https://hitsradio.com",br:128},{title:"USA: NYC Country Live",src:"https://streaming.radiostreamlive.com/radiocountrylive_devices",siteUrl:"https://www.radiocountrylive.com",br:128},{title:"USA: Today's Country 011.FM",src:"http://listen.011fm.com:8016/stream09",siteUrl:"http://011fm.com",br:192}],talks:[{title:"BBC Radio Wales 103.9",src:"http://bbcmedia.ic.llnwd.net/stream/bbcmedia_walesmw_mf_p",siteUrl:"http://www.bbc.co.uk/radiowales/",br:128},{title:"USA: California: KCRW 89.9 FM",src:"https://kcrw.streamguys1.com/kcrw_192k_mp3_on_air?listenerid=1a13cb86cbe44b773c014c34bb7bfe43&awparams=companionAds%3Atrue",siteUrl:"https://www.kcrw.com",br:192},{title:"USA: KUT 90.5 FM",src:"https://kut.streamguys1.com/kut-web",siteUrl:"https://www.kut.org",br:128},{title:"USA: NPR Radio",src:"https://npr-ice.streamguys1.com/live.mp3",siteUrl:"https://www.npr.org",br:128},{title:"USA: Portland: XRAY.FM",src:"http://listen.xray.fm:8000/stream",siteUrl:"https://xray.fm",br:128},{title:"USA: WABE 90.1 FM",src:"https://pba-ice.wabe.org/wabe.aac",siteUrl:"https://www.wabe.org",br:96}],sport:[{title:"USA: Bristol: ESPN Radio",src:"http://edge.espn.cdn.abacast.net/espn-networkmp3-48",siteUrl:"http://www.espn.com/espnradio/",br:48},{title:"UK: talkSPORT",src:"https://radio.talksport.com/stream?awparams=platform:ts-tunein;lang:en",siteUrl:"https://talksport.com",br:64}],jazz:[{title:"USA: Florida Smooth Jazz",src:"http://us4.internet-radio.com:8266/;stream",siteUrl:"http://www.SmoothJazzFlorida.com",br:128}],chillout:[{title:"Spain: Costa Del Mar - Chillout",src:"http://stream.cdm-chillout.com:8020/stream-mp3-Chill",siteUrl:"http://www.costadelmar-radio.com",br:96},{title:"Swiss: Chillout Lounge 1.FM",src:"http://strm112.1.fm/chilloutlounge_mobile_mp3",siteUrl:"http://www.1.fm/",br:192},{title:"USA: Chilled Out 181.FM",src:"http://listen.181fm.com/181-chilled_128k.mp3",siteUrl:"http://www.181.fm/",br:128}],lounge:[{title:"France: ABC Lounge Jazz",src:"http://centauri.shoutca.st:8686/stream/1/",siteUrl:"http://www.abc-lounge.com",br:128},{title:"Italy: Milano Lounge",src:"http://antares.dribb.com:5080/autodj",siteUrl:"https://www.milanolounge.net",br:128}],rock:[{title:"USA: Florida Classic Rock",src:"http://us4.internet-radio.com:8258/;stream",siteUrl:"http://www.classicrockflorida.com",br:160}],pop:[{title:"UK: BBC Radio 1",src:"http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_q",siteUrl:"https://www.bbc.co.uk/radio1",br:128},{title:"UK: Dance",src:"http://uk7.internet-radio.com:8226/;stream",siteUrl:"https://www.danceradiouk.com",br:48},{title:"UK: Magic",src:"https://stream-mz.planetradio.co.uk/magicnational.aac",siteUrl:"http://planetradio.co.uk/magic/",br:47},{title:"Swiss: Zug Top 40 1.FM",src:"http://strm112.1.fm/top40_mobile_mp3",siteUrl:"http://1.fm",br:128},{title:"Seattle: KEXP 90.3 FM",src:"https://kexp-mp3-128.streamguys1.com/kexp128.mp3",siteUrl:"http://kexp.org",br:128},{title:"USA: 977 Hits Radio",src:"https://19763.live.streamtheworld.com/977_HITSAAC_SC",siteUrl:"https://hitsradio.com",br:64}],piano:[{title:"USA: Whisperings Solo Piano",src:"http://pianosolo.streamguys.net/live",siteUrl:"https://www.solopianoradio.com",br:96},{title:"USA: Matt Johnson Radio",src:"http://us2.internet-radio.com:8046/;stream",siteUrl:"http://www.mattjohnsonmusic.com",br:80}],instrumental:[{title:"EU: Instrumental Radio",src:"https://str2b.openstream.co/959?aw_0_1st.collectionid=4097&stationId=4097&publisherId=983&k=1602000602",siteUrl:"https://instrumentalradio.eu",br:128},{title:"USA: Beautiful Instrumentals Channel",src:"https://edge4.peta.live365.net/b37545_128mp3",siteUrl:"https://www.beautifulinstrumentalschannel.com",br:128},{title:"USA: GotRadio Guitar Genius",src:"https://pureplay.cdnstream1.com/6018_128.mp3",siteUrl:"https://www.gotradio.com",br:128},{title:"USA: Instrumental Hits Radio",src:"http://162.244.80.106:11128/stream2",siteUrl:"http://instrumentalhitsradio.com",br:192},{title:"Music Lake",src:"http://50.7.68.251:7168/;stream/1",siteUrl:"http://musiclake.com",br:64}]};const Nt={getCategory:function(t){return Lt[t]||[]}};var It={isHttp:function(t){return void 0===t&&(t=""),"http"===t.split("://")[0]},filterCategoriesBy:function(t){return Ot.filter((function(e){return Nt.getCategory(e).some(t)}))},crCategories:function(){return[].concat(Ot)},getCategory:Nt.getCategory,crFilterBy:function(t){switch(t){case"http":return function(t){return It.isHttp(t.src)};case"https":return function(t){return!It.isHttp(t.src)};default:return function(){return!0}}}};const At=It;var Mt=At.isHttp;const Dt=function(e){var r=e.src,n=Mt(r)?"(http)":"";return(0,t.jsxs)("span",{children:[" ",n]})};var Pt="station-descr",Ht="station-descr__bt",Ft="item-descr__bt-more",Vt="station-descr__info",Bt={ARROW_OPEN:{transform:"rotate(90deg) scale(1.3, 1.3) translate(14px, -10px)"},LINK:{color:"#04477b",fontSize:"17px",display:"inline-block",maxWidth:340,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},TITLE:{color:"darkgray"},CATEGORY:{color:"#1b2836"}},zt=function(t){return t[0].toUpperCase()+t.substring(1)},Gt=function(e){var r,n=e.category,s=e.br;if(!(r=n)||"string"!=typeof r)return null;var i=s?" ("+s+" Kbps)":"";return(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{style:Bt.TITLE,children:"Category:"})," ",(0,t.jsxs)("span",{style:Bt.CATEGORY,children:[zt(n),i]})]})},Kt=function(e){var r=e.siteUrl;return r?(0,t.jsx)("a",{href:r,style:Bt.LINK,target:"_blank",rel:"noreferrer noopener",children:r}):null};const Wt=function(e){var r=e.station,n=(0,s.useState)(!0),i=n[0],o=n[1],a=i?Bt.ARROW_OPEN:void 0,c=r||{},l=c.title,u=c.src,d=c.siteUrl,p=c.category,m=c.br;return r?(0,t.jsxs)("div",{className:Pt,children:[(0,t.jsxs)("button",{className:Ht,onClick:function(){return o((function(t){return!t}))},children:[(0,t.jsx)("span",{children:l}),(0,t.jsx)(Dt,{src:u}),(0,t.jsx)("span",{className:Ft,style:a,children:">"})]}),(0,t.jsx)(jt,{className:Vt,isShow:i,children:(0,t.jsxs)("div",{children:[(0,t.jsx)(Gt,{category:p,br:m}),(0,t.jsx)(Kt,{siteUrl:d})]})})]}):null};var Yt="item-station",qt="item-station__access";const Xt=function(e){var r=e.station,n=e.accessKey,s=e.onClick,i=r.title,o=r.src;return(0,t.jsxs)("button",{className:Yt,accessKey:n,onClick:s,children:[(0,t.jsx)("span",{children:i}),(0,t.jsx)(Dt,{src:o}),Boolean(n)&&(0,t.jsx)("span",{className:qt,children:n})]})};var Jt="item-list",$t=function(t){return t<5?t+1:void 0};const Qt={Command:j,Volume:kt,List:function(){var e=(0,s.useContext)(C),r=e.toggleDrawer,n=e.setCurrentStation,i=e.sApp,a=e.useSelector,c=a(i.currentStation),l=a(i.stations),u=Q({onSwipeGesture:r});return(0,t.jsxs)("div",o()({className:Jt},u,{children:[(0,t.jsx)(Wt,{station:c}),l.map((function(e,r){return(0,t.jsx)(Xt,{station:e,accessKey:S.TOUCH?void 0:$t(r),onClick:n.bind(null,e,r)},e.title)}))]}))}};var Zt,te=r(435),ee=function(t){return parseFloat(t.toFixed(2))},re={volume:.25,autoplay:!1,html5:!0,format:["webm","mpeg","mp3","acc"]},ne=!0,se={INIT_VOLUME:.2,checkInitVolume:function(){ne&&(te.Howler.volume(se.INIT_VOLUME),ne=!1)},getVolume:function(){return te.Howler.volume()},unload:function(){Zt&&(Zt.unload(),Zt.off())},init:function(t,e,r){try{se.checkInitVolume();var n=te.Howler.volume();return se.unload(),Zt=new te.Howl(o()({},re,{src:t,onloaderror:e,onplayerror:r})),te.Howler.volume(n),!0}catch(t){return Zt=null,console.log(t.message),!1}},play:function(){return!!Zt&&(Zt.play(),!0)},stop:function(){Zt&&Zt.stop()},setVolume:function(t){return te.Howler.volume(ee(t)),t},increaseVolume:function(t){void 0===t&&(t=.05),se.checkInitVolume();var e=ee(te.Howler.volume()+t);return e<=1&&te.Howler.volume(e),te.Howler.volume()},decreaseVolume:function(t){void 0===t&&(t=.05),se.checkInitVolume();var e=ee(te.Howler.volume()-t);return e>=0&&te.Howler.volume(e),te.Howler.volume()}};const ie=se;var oe="audio__title",ae="audio__title audio__title--err";const ce=function(e){var r=e.station,n=e.msgErr,s=e.title,i=r&&r.title||"",o=n&&i,a=o?n+" "+i:i||s,c=o?ae:oe;return(0,t.jsx)("div",{className:c,children:a})};var le="equalizer",ue="equalizer--not-playing";const de=function(e){var r=e.isPlaying,n=e.isUnloaded,s=e.unload;return r?(0,t.jsx)("div",{className:le}):n?(0,t.jsx)("div",{className:ue}):(0,t.jsx)("button",{className:ue,"data-loader":"circle",onClick:s})};var pe={SET_LOADING:"SET_LOADING",SET_PLAYING:"SET_PLAYING",PAUSE:"PAUSE",UNLOAD:"UNLOAD",STOP:"STOP",SET_VOLUME:"SET_VOLUME",SET_TITLE:"SET_TITLE",SET_ERROR:"SET_ERROR"},me=function(t,e){switch(e.type){case pe.SET_LOADING:return o()({},t,{isUnloaded:!1,isPlaying:!1,msgErr:""});case pe.SET_PLAYING:return o()({},t,{isPlaying:!0,isUnloaded:!1});case pe.PAUSE:return o()({},t,{isPlaying:!1});case pe.UNLOAD:return o()({},t,{isUnloaded:!0});case pe.STOP:return o()({},t,{isPlaying:!1,isUnloaded:!0});case pe.SET_VOLUME:return o()({},t,{volume:e.volume});case pe.SET_TITLE:return o()({},t,{title:e.title});case pe.SET_ERROR:return o()({},t,{msgErr:e.msgErr,isPlaying:!1,isUnloaded:!0});default:throw new Error("Unsupported action type: "+e.type)}};me.A=pe;const he=me;var fe=he.A,ve="Radio Player v0.2.0",ge="audio-player",be={TITLE_CONT:{display:"flex",alignItems:"center"}},we=function(t){void 0===t&&(t=""),S.MEDIA_SESSION&&(navigator.mediaSession.metadata=new MediaMetadata({title:ve,artist:t}))},ye={msgErr:"",title:ve,isUnloaded:!0,isPlaying:!1,volume:ie.INIT_VOLUME};const _e=function(){var e=(0,s.useRef)(),r=(0,s.useContext)(C),n=r.uiThemeImpl,i=r.sApp,o=r.useSelector,a=o(i.uiTheme),c=o(i.currentStation),l=(0,s.useReducer)(he,ye),u=l[0],d=l[1],p=u.isUnloaded,m=u.isPlaying,h=u.volume,f=u.title,v=u.msgErr,g=(0,s.useCallback)((function(t){return d({type:fe.SET_VOLUME,volume:ie.setVolume(t)})}),[]),b=(0,s.useCallback)((function(){return d({type:fe.SET_VOLUME,volume:ie.increaseVolume(.01)})}),[]),w=(0,s.useCallback)((function(){return d({type:fe.SET_VOLUME,volume:ie.decreaseVolume(.01)})}),[]),y=(0,s.useCallback)((function(){ie.stop(),ie.unload(),d({type:fe.STOP})}),[]),_=function(t){d({type:fe.SET_ERROR,msgErr:t}),we()};(0,s.useEffect)((function(){S.MEDIA_SESSION&&navigator.mediaSession.setActionHandler("pause",y)}),[]),(0,s.useEffect)((function(){return c&&c.src&&ie.init(c.src,_.bind(null,"Load Error"),_.bind(null,"Play Error"))&&d({type:fe.SET_LOADING}),function(){ie.unload()}}),[c]);var x=n.toBg(a);return(0,t.jsxs)("div",{className:ge,style:x,children:[(0,t.jsx)(Qt.Volume,{volume:h,setVolume:g,onIncrease:b,onDecrease:w}),(0,t.jsxs)("div",{style:be.TITLE_CONT,children:[(0,t.jsx)(Qt.Command,{isPlaying:m,onPlay:function(){var t;t=e,clearTimeout(t.current),t.current=void 0,!v&&ie.play()?(d({type:fe.SET_PLAYING}),we(c&&c.title||ve)):(d({type:fe.SET_TITLE,title:"At first, please, choose a radio station."}),we())},onPause:function(){ie.stop(),e.current=setTimeout((function(){return d({type:fe.UNLOAD})}),18e4),d({type:fe.PAUSE})}}),(0,t.jsx)(ce,{station:c,msgErr:v,title:f}),(0,t.jsx)(de,{isPlaying:m,isUnloaded:p,unload:function(){ie.unload(),d({type:fe.UNLOAD}),we()}})]})]})};const xe=function(){var e=(0,n.useDispatch)(),r=C.getValue(e),i=r.setSrcFilter;return(0,s.useEffect)((function(){i(2)}),[]),(0,t.jsx)(C.Provider,{value:r,children:(0,t.jsxs)("div",{className:"app-radio-player",children:[(0,t.jsx)(_e,{}),(0,t.jsx)(Qt.List,{})]})})};const Ee={app:{isDrawer:!1,filter:"none",currentStation:void 0,uiTheme:"grey"},topics:[].concat(Ot),categories:{},stations:[]};const Ce=function(t,e){switch(void 0===t&&(t=Ee.app),e.type){case c:var r=e.uiTheme;return t.uiTheme!==r?o()({},t,{uiTheme:r}):t;case u:return o()({},t,{isDrawer:!t.isDrawer});case l:return o()({},t,{filter:e.filter});case v:var n=e.station;return o()({},t,{currentStation:n});default:return t}};var Se=function(t){return function(e){return e.title!==t}};const Te=function(t,e){switch(void 0===t&&(t=[]),e.type){case h:var r=e.categories,n=e.category,s=(e.currentStation||{}).title,i=r.filter(Se(s)),o=function(t,e){for(var r=t.length,n=0;n<r;n++)if(t[n].category===e)return t[n]}(t,n),a=o?i.filter(Se(o.title)):i;return[].concat(a,t);case f:var c=e.category;return t.filter(function(t){return function(e){return e.category!==t}}(c));case v:var u=e.station,d=e.currentStation,p=(u||{}).title,m=t.filter(Se(p));return d&&m.unshift(d),m;case l:return[];default:return t}};const Re=function(t,e){switch(void 0===t&&(t={}),e.type){case h:return t[e.category]=!0,o()({},t);case f:return t[e.category]=!1,o()({},t);case l:return{};default:return t}};var ke=At.isHttp,Ue=At.filterCategoriesBy,je=At.crCategories;const Oe=function(t,e){switch(void 0===t&&(t={}),e.type){case l:return r=e.filter,(n="https"===r?function(t){return!ke(t.src)}:"http"===r?function(t){return ke(t.src)}:void 0)?Ue(n):je();default:return t}var r,n};const Le=(0,a.combineReducers)({app:Ce,stations:Te,categories:Re,topics:Oe});const Ne=function(t){var e=t.getState;return function(t){return function(r){return r.type!==v&&r.type!==h||(r.currentStation=b.currentStation(e())),t(r)}}};var Ie={grey:"grey",light:"#e1e1e1",sand:"#e8e0cb"};const Ae=function(t){return function(t){return function(e){if(e.type===c){var r=e.uiTheme,n=Ie[r];document.body.style.backgroundColor=n}return t(e)}}};var Me=At.crFilterBy,De=At.getCategory;var Pe=[].concat([Ae,Ne,function(t){var e=t.getState;return function(t){return function(r){if(r.type===h){var n=e(),s=r.category,i=Me(n.app.filter);r.categories=De(s).map((function(t){return t.category=s,t})).filter(i)}return t(r)}}}]),He=a.compose;const Fe=(0,a.createStore)(Le,Ee,He(a.applyMiddleware.apply(void 0,Pe)));(0,e.render)((0,t.jsx)(n.Provider,{store:Fe,children:(0,t.jsx)(xe,{})}),document.getElementById("app"))})()})();