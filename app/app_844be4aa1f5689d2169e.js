!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="app/",t(t.s=15)}([function(e,t,n){e.exports=n(1)(2)},function(e,t){e.exports=lib_vendor},function(e,t,n){"use strict";t.__esModule=!0;var a=n(32),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=r.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}},function(e,t,n){e.exports=n(1)(68)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeCategory=t.addCategory=t.moveToTop=t.ACTION=void 0;var a=n(18),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o=t.ACTION={MOVE_TO_TOP:"MOVE_TO_TOP",ADD_CATEGORY:"ADD_CATEGORY",REMOVE_CATEGORY:"REMOVE_CATEGORY"};t.moveToTop=function(e,t){return{type:o.MOVE_TO_TOP,station:e,index:t}},t.addCategory=function(e){var t=r.default.getCategory(e).map(function(t){return t.category=e,t});return{type:o.ADD_CATEGORY,categories:t,category:e}},t.removeCategory=function(e){return{type:o.REMOVE_CATEGORY,category:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={TRANSITION:function(){return document&&void 0!==document.body.style.transition}(),TOUCH:function(){return document&&"ontouchstart"in document.documentElement}(),MEDIA_SESSION:function(){return navigator&&"mediaSession"in navigator}()};t.default=a},function(e,t,n){e.exports=n(1)(90)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=a(r),l=n(0),u=a(l),i=n(5),s=a(i),c=function(e){var t=e.accessKey,n=e.onMouseDown,a=e.onMouseUp,r=e.onTouchStart,l=e.onTouchEnd,i=e.onClick,c=e.children,d=s.default.TOUCH&&r?{onTouchStart:r,onTouchEnd:l}:{onMouseDown:n,onMouseUp:a};return u.default.createElement("button",(0,o.default)({className:"bt-circle",accessKey:t},d,{onClick:i}),u.default.createElement("svg",{viewBox:"0 0 34 34",width:"100%",height:"100%"},u.default.createElement("g",null,c)))};t.default=c},function(e,t,n){e.exports=n(1)(111)},function(e,t,n){e.exports=n(1)(112)},function(e,t,n){e.exports=n(1)(116)},function(e,t,n){e.exports=n(1)(129)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(30),o=a(r),l=n(44),u=a(l),i=n(60),s=a(i),c={Command:o.default,Volume:u.default,List:s.default};t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={CL_HEADER:"drawer__title",CL_ROOT:"drawer__list",CL_BT:"drawer__list-bt",BT_TRIPLE:{marginRight:8},BT_CLOSE:{position:"relative",top:4},UL:{listStyleType:"none"}};t.default=a},function(e,t,n){e.exports=n(1)(49)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(0),o=a(r),l=n(16),u=n(6),i=n(17),s=a(i),c=n(67),d=a(c);(0,l.render)(o.default.createElement(u.Provider,{store:d.default},o.default.createElement(s.default,null)),document.getElementById("app"))},function(e,t,n){e.exports=n(1)(39)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=a(r),l=n(0),u=a(l),i=n(6),s=n(4),c=n(12),d=a(c),f=n(61),p=a(f),m={APP:{width:380,maxWidth:"calc(100vw - 32px)",marginTop:84,marginLeft:"auto",marginRight:"auto",marginBottom:12}},_=function(e){var t=e.stations,n=e.addCategory,a=e.moveToTop,r=(0,l.useState)(""),i=(0,o.default)(r,2),s=i[0],c=i[1],f=function(e,t){a(e,t),c(e)};return(0,l.useEffect)(function(){n("classical"),n("piano")},[]),u.default.createElement("div",{style:m.APP},u.default.createElement(p.default,{station:s}),u.default.createElement(d.default.List,{radioStations:t,onClick:f}))},v=function(e){return{stations:e.stations}},E={addCategory:s.addCategory,moveToTop:s.moveToTop};t.default=(0,i.connect)(v,E)(_)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(19),o=a(r),l=n(20),u=a(l),i=n(21),s=a(i),c=n(22),d=a(c),f=n(23),p=a(f),m=n(24),_=a(m),v=n(25),E=a(v),h=n(26),y=a(h),g=n(27),b=a(g),O=n(28),M=a(O),T=n(29),w=a(T),R={classical:o.default,country:u.default,talks:s.default,sport:d.default,jazz:p.default,chillout:_.default,lounge:E.default,rock:y.default,pop:b.default,piano:M.default,instrumental:w.default},C={getCategory:function(e){return R[e]||[]}};t.default=C},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"Canada: Winnipeg Classic 107FM",src:"http://daemondef.ic.llnwd.net/stream/daemondef_ddmp3_74",siteUrl:"https://classic107.com"},{title:"Germany: Hamburg Klassik Radio",src:"http://klassikr.streamabc.net/klassikradio-simulcast-mp3-mq?sABC=5p7684ns%23%233ros3r7q49np68nq09sorn0021437803%23enqvbqr&amsparams=playerid:radiode;skey:1551271087"},{title:"Italy: Venice Classic",src:"http://109.123.116.202:8020/stream/1/"},{title:"Netherland: NPO Radio 4",src:"http://icecast.omroep.nl/radio4-bb-mp3"},{title:"Swiss: Basel Radio Classic",src:"http://streaming.swisstxt.ch/m/rsc_de/mp3_128"},{title:"Swiss: 1.FM Otto's Opera House",src:"http://strm112.1.fm/opera_mobile_mp3"},{title:"Swissradio.ch Classical",src:"http://relay.publicdomainproject.org/classical.mp3"},{title:"UK: BBC 3 Radio",src:"http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio3_mf_p"},{title:"UK: Davide of MIMIC Classical",src:"http://uk3.internet-radio.com:8060/;stream",siteUrl:"http://meetinginmusic.blogspot.com "},{title:"USA: New York WQXR",src:"https://stream.wqxr.org/wqxr-web?nyprBrowserId=5fad42cad0701918",siteUrl:"https://www.wqxr.org/"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"USA: Country",src:"http://50.7.70.58:8708/;/;5348241552822155stream.nsv"},{title:"USA: Country Hits",src:"http://19763.live.streamtheworld.com/977_COUNTRY.mp3"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"Seattle: KEXP 90.3 FM",src:"https://kexp-mp3-128.streamguys1.com/kexp128.mp3",siteUrl:"http://kexp.org/"},{title:"Santa Monica, California: KCRW 89.9 FM",src:"https://kcrw.streamguys1.com/kcrw_192k_mp3_on_air?listenerid=1a13cb86cbe44b773c014c34bb7bfe43&awparams=companionAds%3Atrue",siteUrl:"https://www.kcrw.com/"},{title:"Portland, Oregon: XRAY.FM KXRY 107.1 FM",src:"http://listen.xray.fm:8000/stream",siteUrl:"https://xray.fm/"},{title:"BBC Radio Wales 103.9 Cardiff",src:"http://bbcmedia.ic.llnwd.net/stream/bbcmedia_walesmw_mf_p",siteUrl:"http://www.bbc.co.uk/radiowales"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"USA: Bristol: ESPN Radio",src:"http://edge.espn.cdn.abacast.net/espn-networkmp3-48",siteUrl:"http://www.espn.com/espnradio/"},{title:"UK: talkSPORT",src:"http://radio.talksport.com/stream?awparams=platform:ts-tunein;lang:en",siteUrl:"http://talksport.com"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"USA: Florida Smooth Jazz",src:"http://us4.internet-radio.com:8266/;stream",siteUrl:"http://www.SmoothJazzFlorida.com"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"Spain: Costa Del Mar - Chillout",src:"http://stream.cdm-chillout.com:8020/stream-mp3-Chill",siteUrl:"http://www.costadelmar-radio.com"},{title:"Swiss: 1.FM Chillout Lounge Radio",src:"http://strm112.1.fm/chilloutlounge_mobile_mp3",siteUrl:"http://www.1.fm/"},{title:"USA: 181.fm - Chilled",src:"http://listen.181fm.com/181-chilled_128k.mp3",siteUrl:"http://www.181.fm/"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"France: ABC Lounge",src:"http://centauri.shoutca.st:8686/stream/1/"},{title:"Italy: Milano Lounge",src:"http://antares.dribb.com:5080/autodj",siteUrl:"https://www.milanolounge.net/"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"USA: Florida Classic Rock",src:"http://us4.internet-radio.com:8258/;stream",siteUrl:"http://www.classicrockflorida.com"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"UK: BBC Media",src:"http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_q"},{title:"UK: Dance",src:"http://uk7.internet-radio.com:8226/;stream"},{title:"UK: Magic",src:"https://stream-mz.planetradio.co.uk/magicnational.aac"},{title:"Swiss: Zug Absolute Top 40",src:"http://strm112.1.fm/top40_mobile_mp3"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"USA: Eugene: Whisperings Solo Piano",src:"http://pianosolo.streamguys.net/live",siteUrl:"https://www.solopianoradio.com"},{title:"USA: Matt Johnson Radio ",src:"http://us2.internet-radio.com:8046/;stream",siteUrl:"https://www.mattjohnsonmusic.com"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"Music Lake",src:"http://50.7.68.251:7168/;stream/1",siteUrl:"http://musiclake.com/"},{title:"Instrumental Radio ",src:"http://178.32.62.163:8599/;stream/1",siteUrl:"http://www.instrumentalradio.eu"},{title:"USA: GotRadio Guitar Genius",src:"http://pureplay.cdnstream1.com/6018_128.mp3",siteUrl:"http://www.gotradio.com/"},{title:"USA: Instrumental Hits Radio",src:"http://149.56.195.94:8453/stream",siteUrl:"http://instrumentalhitsradio.com"}];t.default=a},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),l=n(31),u=a(l),i=function(e){var t=e.isPlaying,n=e.onPlay,a=e.onStop;return o.default.createElement("div",null,o.default.createElement(u.default,{isPlaying:t,onPlay:n,onStop:a}))};t.default=i},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),l=n(7),u=a(l),i=o.default.createElement("path",{d:"M12.458 22.667l10-6.5-10-6.5z"}),s=o.default.createElement(r.Fragment,null,o.default.createElement("path",{d:"M11.5 10h3v13h-3v-13z"}),o.default.createElement("path",{d:"M17.5 10h3v13h-3v-13z"})),c=function(e){var t=e.isPlaying,n=e.onPlay,a=e.onStop,r=t?a:n,l=t?s:i,c=t?"s":"p";return o.default.createElement(u.default,{accessKey:c,onClick:r},l)};t.default=c},function(e,t,n){e.exports={default:n(33),__esModule:!0}},function(e,t,n){n(34),e.exports=n(43).Object.assign},function(e,t,n){var a=n(35);a(a.S+a.F,"Object",{assign:n(36)})},function(e,t,n){e.exports=n(1)(11)},function(e,t,n){"use strict";var a=n(37),r=n(38),o=n(39),l=n(40),u=n(41),i=Object.assign;e.exports=!i||n(42)(function(){var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach(function(e){t[e]=e}),7!=i({},e)[n]||Object.keys(i({},t)).join("")!=a})?function(e,t){for(var n=l(e),i=arguments.length,s=1,c=r.f,d=o.f;i>s;)for(var f,p=u(arguments[s++]),m=c?a(p).concat(c(p)):a(p),_=m.length,v=0;_>v;)d.call(p,f=m[v++])&&(n[f]=p[f]);return n}:i},function(e,t,n){e.exports=n(1)(25)},function(e,t,n){e.exports=n(1)(60)},function(e,t,n){e.exports=n(1)(37)},function(e,t,n){e.exports=n(1)(46)},function(e,t,n){e.exports=n(1)(74)},function(e,t,n){e.exports=n(1)(16)},function(e,t,n){e.exports=n(1)(0)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=a(r),l=n(3),u=a(l),i=n(0),s=a(i),c=n(45),d=a(c),f=n(46),p=a(f),m=n(47),_=a(m),v=n(48),E=a(v),h=n(49),y=a(h),g=n(50),b=a(g),O={ROW:{height:35,transition:"height 0.3s ease-out"},SLIDER:{display:"inline-block",width:200,maxWidth:"calc(100vw - 210px)",marginRight:16},VOLUME:{position:"relative",top:-10,display:"inline-block",color:"#00bcd4",width:46,paddingLeft:5,fontSize:22,fontWeight:400},GAP:{display:"inline-block",width:12}},M={NEAR_MAX:.8,NEAR_MIN:.2},T=function(e){return"number"==typeof e&&Number.isFinite(e)},w=function(e){return T(e)?Math.round(100*e):""},R=function(e,t){return{onMouseDown:e,onMouseUp:t,onTouchStart:e,onTouchEnd:t}},C=function(e){var t=e.volume,n=e.setVolume,a=e.onIncrease,r=e.onDecrease,l=function(e){return e>M.NEAR_MAX},c=function(e){return e<M.NEAR_MIN},f=(0,d.default)(a,l,t),m=(0,u.default)(f,2),v=m[0],h=m[1],g=(0,d.default)(r,c,t),T=(0,u.default)(g,2),C=T[0],A=T[1],N=function(){0!==t&&C()},P=function(){100!==t&&v()},L=R(N,A),S=R(P,h);return(0,i.useEffect)(function(){0===t&&A(),100===t&&h()}),s.default.createElement("div",{id:"volume",style:O.ROW},s.default.createElement("div",{style:O.VOLUME},w(t)),s.default.createElement(_.default,{style:O.SLIDER,initValue:t,onChange:n}),s.default.createElement(E.default,(0,o.default)({accessKey:"-"},L,{onClick:r})),s.default.createElement("div",{style:O.GAP}),s.default.createElement(y.default,(0,o.default)({accessKey:"+"},S,{onClick:a})),s.default.createElement(b.default,{categories:p.default}))};t.default=s.default.memo(C)},function(e,t,n){"use strict";function a(e,t,n){var a=(0,r.useRef)(),l=(0,r.useRef)();l.current=n;var u=function(){return clearInterval(a.current)};return[function(){a.current=setInterval(function(){t(l.current)?(u(),a.current=setInterval(e,o.L2)):e()},o.L1)},u]}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o={L1:150,L2:500};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=["chillout","classical","country","instrumental","jazz","lounge","piano","pop","rock","sport","talks"];t.default=a},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r,o,l=n(2),u=a(l),i=n(8),s=a(i),c=n(9),d=a(c),f=n(10),p=a(f),m=n(11),_=a(m),v=n(0),E=a(v),h={ROOT:{userSelect:"none",cursor:"default",height:"18px",width:"100%",position:"relative",marginTop:"8px",marginBottom:"8px"},ROOT_LINE:{position:"absolute",top:"8px",left:"0px",width:"100%",height:"2px"},LINE_BEFORE:{position:"absolute",height:"100%",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",left:"0px",backgroundColor:"rgb(0, 188, 212)",marginRight:"6px",width:"calc(15%)"},LINE_AFTER:{position:"absolute",height:"100%",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",right:"0px",backgroundColor:"rgb(189, 189, 189)",marginLeft:"6px",width:"calc(85%)"},LINE_HOVERED:{backgroundColor:"rgb(158, 158, 158)"},ROOT_CIRCLE:{boxSizing:"borderBox",position:"absolute",cursor:"pointer",pointerEvents:"inherit",top:"0px",left:"15%",zIndex:"1",margin:"1px 0px 0px",width:"12px",height:"12px",backgroundColor:"rgb(0, 188, 212)",backgroundClip:"padding-box",border:"0px solid transparent",borderRadius:"50%",transform:"translate(-50%, -50%)",overflow:"visible",outline:"none",transition:"background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},CIRCLE_DRAGGED:{width:"20px",height:"20px "},CIRCLE_INNER:{position:"absolute",overflow:"visible",height:"12px",width:"12px",top:"0px",left:"0px"},CIRCLE_INNER_EL:{position:"absolute",height:"36px",width:"300%",borderRadius:"50%",backgroundColor:"rgba(0, 188, 212, 0.16)",top:"-12px",left:"-12px",transform:"scale(1)"},EMBER:{top:"-12px",left:"-12px",height:"44px",width:"220%",border:"1px solid #4caf50"}},y=function(e,t){return e=+e,t=+t,isNaN(e)||"number"!=typeof t||t%1!=0?NaN:(e=e.toString().split("e"),e=Math.round(+(e[0]+"e"+(e[1]?+e[1]-t:-t))),e=e.toString().split("e"),+(e[0]+"e"+(e[1]?+e[1]+t:t)))},g=function(e,t,n){return n?y(e+t,n):e+t},b=function(e,t,n){var a=(e-t)/(n-t);return Number.isNaN(a)?0:100*a},O=function(e){return{width:"calc("+e+"%)"}},M=function(e){return{left:e+"%"}},T=(o=r=function(e){function t(e){(0,s.default)(this,t);var n=(0,p.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));n._hMouseEnter=function(){n.setState({hovered:!0})},n._hMouseLeave=function(){n.setState({hovered:!1})},n._hMouseDown=function(e){e.preventDefault(),document.addEventListener("mousemove",n._hDragMouseMove),document.addEventListener("mouseup",n._hDragMouseUp),n.setState({dragged:!0})},n._hDragMouseMove=function(e){n._onDragUpdate(e)},n._hDragMouseUp=function(){document.removeEventListener("mousemove",n._hDragMouseMove),document.removeEventListener("mouseup",n._hDragMouseUp),n.setState({dragged:!1})},n._hFocusTrack=function(){n.setState({hovered:!0})},n._hBlurTrack=function(){n.setState({hovered:!1})},n._hKeyDownTrack=function(e){switch(e.keyCode){case 37:var t=n.props,a=t.min,r=t.step,o=n.state.value;if(o>a){var l=g(o,-r,n.stepExp);n._setValue(e,l)}break;case 39:var u=n.props,i=u.max,s=u.step,c=n.state.value;if(c<i){var d=g(c,s,n.stepExp);n._setValue(e,d)}break;default:return}},n._onDragUpdate=function(e){n.dragRunning||(n.dragRunning=!0,requestAnimationFrame(function(){n.dragRunning=!1;var t=e.clientX-n._calcTrackOffset();n._setValueFromPosition(e,t)}))},n._setValue=function(e,t){n.setState({value:t}),n.isOnChange&&n.props.onChange(t)},n._calcTrackOffset=function(){return n.trackComp.getBoundingClientRect().left},n._setValueFromPosition=function(e,t){var a=n.trackComp.clientWidth;t<0?t=0:t>a&&(t=a);var r=n.props,o=r.step,l=r.min,u=r.max,i=void 0;i=t/a*(u-l),i=Math.round(i/o)*o+l,i=parseFloat(i.toFixed(5)),i>u?i=u:i<l&&(i=l),n.state.value!==i&&n._setValue(e,i)},n._refTrackComp=function(e){return n.trackComp=e},n.isOnChange="function"==typeof e.onChange;var a=(""+e.step).split(".");return n.stepExp=a[1]?-1*a[1].length:0,n.state={hovered:!1,dragged:!1,value:e.initValue},n}return(0,_.default)(t,e),(0,d.default)(t,[{key:"componentWillReceiveProps",value:function(e){e!==this.props&&this.setState({value:e.initValue})}},{key:"render",value:function(){var e=this.props,t=e.step,n=e.min,a=e.max,r=e.style,o=this.state,l=o.hovered,i=o.dragged,s=o.value,c=l?(0,u.default)({},h.LINE_AFTER,h.LINE_HOVERED):h.LINE_AFTER,d=i?h.CIRCLE_DRAGGED:null,f=i?h.EMBER:null,p=l||i?E.default.createElement("div",{style:(0,u.default)({},h.CIRCLE_INNER_EL,f)}):null,m=b(s,n,a),_=O(m),v=O(100-m),y=M(m);return E.default.createElement("div",{style:(0,u.default)({},h.ROOT,r),role:"slider","aria-valuemax":a,"aria-valuemin":n,"aria-valuenow":s,tabIndex:"0",onMouseDown:this._hMouseDown,onMouseEnter:this._hMouseEnter,onMouseLeave:this._hMouseLeave},E.default.createElement("div",{ref:this._refTrackComp,tabIndex:"0",role:"button",style:h.ROOT_LINE,onKeyDown:this._hKeyDownTrack,onFocus:this._hFocusTrack,onBlur:this._hBlurTrack},E.default.createElement("div",{style:(0,u.default)({},h.LINE_BEFORE,_)}),E.default.createElement("div",{style:(0,u.default)({},c,v)}),E.default.createElement("div",{style:(0,u.default)({},h.ROOT_CIRCLE,d,y)},E.default.createElement("div",{style:(0,u.default)({},h.CIRCLE_INNER,d)},p)),E.default.createElement("input",{type:"hidden",step:t,min:n,max:a,value:s,required:!0})))}},{key:"setValue",value:function(e){this.setState({value:e})}}]),t}(v.Component),r.defaultProps={initValue:1,min:0,max:1,step:.05},o);t.default=T},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),l=n(7),u=a(l),i=function(e){return o.default.createElement(u.default,e,o.default.createElement("path",{d:"M8 16 H24",strokeWidth:"3"}))};t.default=i},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),l=n(7),u=a(l),i=function(e){return o.default.createElement(u.default,e,o.default.createElement("path",{d:"M8 16 H24",strokeWidth:"3"}),o.default.createElement("path",{d:"M16 8 V24",strokeWidth:"3"}))};t.default=i},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),l=n(51),u=a(l),i=n(52),s=a(i),c=function(e){return o.default.createElement(u.default,null,o.default.createElement(s.default,e))};t.default=c},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=a(r),l=n(8),u=a(l),i=n(9),s=a(i),c=n(10),d=a(c),f=n(11),p=a(f),m=n(0),_=a(m),v=n(5),E=a(v),h={DRAWER_BT:"drawer-bt",DRAWER_SPAN:"drawer-span",DRAWER_SVG:"drawer-svg",DRAWER:"drawer",DRAWER_MODAL:"drawer-modal"},y={BT_DRAWER:{position:"absolute",top:8,right:18},DRAWER_OFF:{transform:"translateX(264px)",pointerEvents:"none"},DRAWER_ON:{transform:"translate(0px, 0px)"},MODAL_OFF:{display:"none",opacity:0,zIndex:-1,transition:"opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},MODAL_ON:{display:"block",opacity:1,zIndex:1e3,transition:"opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"}},g=function(e){function t(){var e,n,a,r;(0,u.default)(this,t);for(var o=arguments.length,l=Array(o),i=0;i<o;i++)l[i]=arguments[i];return n=a=(0,d.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.state={isOpen:!1},a._hTransitionEnd=function(){a.state.isOpen||(a._wrapperNode.style.display="none")},a._setBodyOverflowY=function(){var e=a.state.isOpen;document.body.style.overflowY=e?"hidden":"auto"},a._hToggle=function(){a.state.isOpen||(a._wrapperNode.style.display="block"),a.setState(function(e){return{isOpen:!e.isOpen}},a._setBodyOverflowY)},a._refAside=function(e){return a._asideNode=e},a._refWrapper=function(e){return a._wrapperNode=e},r=n,(0,d.default)(a,r)}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){E.default.TRANSITION&&this._asideNode.addEventListener("transitionend",this._hTransitionEnd)}},{key:"componentWillUnmount",value:function(){E.default.TRANSITION&&this._asideNode.removeEventListener("transitionend",this._hTransitionEnd)}},{key:"render",value:function(){var e=this.props,t=e.btStyle,n=e.children,a=this.state.isOpen,r=a?y.DRAWER_ON:y.DRAWER_OFF,l=a?y.MODAL_ON:y.MODAL_OFF,u=a?this._hToggle:void 0;return[_.default.createElement("button",{key:"bt-drawer",className:h.DRAWER_BT,style:(0,o.default)({},y.BT_DRAWER,t),"aria-label":"Open Drawer",onClick:this._hToggle},_.default.createElement("span",{className:h.DRAWER_SPAN},_.default.createElement("svg",{className:h.DRAWER_SVG,focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"},_.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),_.default.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})))),_.default.createElement("div",{key:"wrapper","aria-hidden":!a,className:h.DRAWER_MODAL,style:l,onClick:u}),_.default.createElement("aside",{ref:this._refAside,key:"aside",className:h.DRAWER,style:r},_.default.createElement("div",{ref:this._refWrapper},_.default.cloneElement(n,{onCloseDrawer:this._hToggle})))]}}]),t}(m.Component);t.default=g},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),l=n(53),u=a(l),i=n(54),s=a(i),c=n(55),d=a(c),f=n(59),p=a(f),m=n(13),_=a(m),v=function(e){var t=e.onCloseDrawer,n=e.categories;return o.default.createElement("div",{className:_.default.CL_ROOT},o.default.createElement("div",{className:_.default.CL_HEADER},o.default.createElement(s.default,{style:_.default.BT_TRIPLE,oneC:"GREY",twoC:"LIGHT",threeC:"SAND",onClick:p.default}),o.default.createElement(u.default,{style:_.default.BT_CLOSE,onClick:t})),o.default.createElement(d.default,{categories:n}))};t.default=v},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o={COLOR:"#f44336",SVG:{padding:3}},l=function(e){var t=e.style,n=e.tabIndex,a=void 0===n?-1:n,l=e.onClick;return r.default.createElement("button",{className:"svg-close",style:t,tabIndex:a,onClick:l},r.default.createElement("svg",{viewBox:"0 0 12 12",width:"100%",height:"100%",style:o.SVG,preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:"2",stroke:o.COLOR,strokeLinecap:"round"},r.default.createElement("path",{d:"M 0,0 L 12,12"}),r.default.createElement("path",{d:"M 12,0 L 0,12"})))};t.default=l},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=a(r),l=n(0),u=a(l),i={BT:"bt-triple",BT_ONE:"bt-triple__one",BT_TWO:"bt-triple__two",BT_THREE:"bt-triple__three"},s={SELECTED:{backgroundColor:"#1b2836"}},c=function(e,t){return e===t?s.SELECTED:void 0},d=function(e){var t=e.style,n=e.tabIndex,a=e.initialValue,r=e.oneC,s=e.twoC,d=e.threeC,f=e.onClick,p=(0,l.useState)(a),m=(0,o.default)(p,2),_=m[0],v=m[1],E=c(_,1),h=c(_,2),y=c(_,3),g=function(e){f(e),v(e)};return u.default.createElement("div",{className:i.BT,style:t},u.default.createElement("button",{className:i.BT_ONE,style:E,tabIndex:n,onClick:g.bind(null,1)},r),u.default.createElement("button",{className:i.BT_TWO,style:h,tabIndex:n,onClick:g.bind(null,2)},s),u.default.createElement("button",{className:i.BT_THREE,style:y,tabIndex:n,onClick:g.bind(null,3)},d))};d.defaultProps={tabIndex:-1,initialValue:1,oneC:"One",twoC:"Two",threeC:"Three"},t.default=d},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),l=n(6),u=n(4),i=n(56),s=a(i),c=n(57),d=a(c),f=n(13),p=a(f),m=function(e){var t=e.categories,n=e.isCategories,a=e.addCategory,r=e.removeCategory;return o.default.createElement("ul",{style:p.default.UL},t.map(function(e){var t=n[e];return o.default.createElement("li",{key:e},o.default.createElement(d.default,{className:p.default.CL_BT,caption:e,onClick:t?function(){return r(e)}:function(){return a(e)}},t&&o.default.createElement(s.default,null)))}))},_=function(e){return{isCategories:e.categories}},v={addCategory:u.addCategory,removeCategory:u.removeCategory};t.default=(0,l.connect)(_,v)(m)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=a(r),l=n(0),u=a(l),i={display:"inline-block",width:16,height:16},s=function(e){var t=e.style,n=e.color;return u.default.createElement("span",{style:(0,o.default)({},i,t)},u.default.createElement("svg",{viewBox:"0 0 16 16",width:"100%",height:"100%",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg"},u.default.createElement("path",{d:"M 2,5 L 8,14 14,1",stroke:n,fill:"transparent",strokeWidth:"3",strokeLinecap:"round"})))};s.defaultProps={color:"#64e346"},t.default=s},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r,o,l=n(2),u=a(l),i=n(8),s=a(i),c=n(9),d=a(c),f=n(10),p=a(f),m=n(11),_=a(m),v=n(0),E=a(v),h=n(58),y=a(h),g={BT:"bt-flat",BT_DIV:"bt-flat__div",BT_SPAN:"bt-flat__span"},b={PRIMARY:{color:"#607d8b"}},O="pointer-events",M=(o=r=function(e){function t(){var e,n,a,r;(0,s.default)(this,t);for(var o=arguments.length,l=Array(o),u=0;u<o;u++)l[u]=arguments[u];return n=a=(0,p.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a._setPointerEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";a&&a.rootNode&&a.rootNode.style&&(a.rootNode.style[O]=e)},a._hClick=function(e){a._setPointerEvents("none");var t=a.props,n=t.timeout,r=t.onClick;setTimeout(a._setPointerEvents,n),r(e)},a._refNode=function(e){return a.rootNode=e},r=n,(0,p.default)(a,r)}return(0,_.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.rootStyle,a=e.clDiv,r=void 0===a?g.BT_DIV:a,o=e.clCaption,l=e.isPrimary,i=e.title,s=void 0===i?"":i,c=e.caption,d=e.accessKey,f=e.children,p=l?(0,u.default)({},n,b.PRIMARY):n,m=t?g.BT+" "+t:g.BT,_=o?g.BT_SPAN+" "+o:g.BT_SPAN,v=d?s+" ["+d+"]":s;return E.default.createElement("button",{ref:this._refNode,className:m,style:p,accessKey:d,tabIndex:0,title:v,onClick:this._hClick},E.default.createElement("div",{className:r},E.default.createElement(y.default,{className:_,caption:c,accessKey:d}),f))}},{key:"focus",value:function(){this.rootNode.focus()}}]),t}(v.Component),r.defaultProps={timeout:500},o);t.default=M},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o={KEY:{textDecoration:"underline"}},l=function(e){var t=e.className,n=e.rootStyle,a=e.caption,l=void 0===a?"":a,u=e.accessKey,i=e.children,s=l.toLowerCase().indexOf(u);if(u&&-1!==s){var c=l.substring(0,s),d=l.substring(s,s+1),f=l.substring(s+1);return r.default.createElement("span",{className:t,style:n},r.default.createElement("span",null,c),r.default.createElement("span",{style:o.KEY},d),r.default.createElement("span",null,f),i)}return r.default.createElement("span",{className:t,style:n},l,i)};t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={1:"grey",2:"#e1e1e1",3:"#e8e0cb"},r=function(e){var t=a[""+e];t&&(document.body.style.backgroundColor=t)};t.default=r},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),l=n(5),u=a(l),i={LIST:"item-list",ITEM:"item-station",ACCESS_KEY:"item-station__access"},s=function(e){return e<6&&0!==e?e:void 0},c=function(e){var t=e.radioStations,n=e.onClick;return o.default.createElement("div",{className:i.LIST},t.map(function(e,t){var a=u.default.TOUCH?void 0:s(t);return o.default.createElement("button",{className:i.ITEM,key:e.title,accessKey:a,onClick:n.bind(null,e,t)},o.default.createElement("span",null,e.title),Boolean(a)&&o.default.createElement("span",{className:i.ACCESS_KEY},a))}))};t.default=c},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=a(r),l=n(0),u=a(l),i=n(5),s=a(i),c=n(62),d=a(c),f=n(12),p=a(f),m=n(64),_=a(m),v=n(65),E=a(v),h=n(66),y=a(h),g=y.default.A,b="Radio Player v0.1.0",O={PLAYER:"audio-player"},M={TITLE_CONT:{display:"flex",alignItems:"center"}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";s.default.MEDIA_SESSION&&(navigator.mediaSession.metadata=new MediaMetadata({title:b,artist:e}))},w={msgErr:"",title:b,isUnloaded:!0,isPlaying:!1,volume:d.default.INIT_VOLUME},R=function(e){var t=e.station,n=(0,l.useReducer)(y.default,w),a=(0,o.default)(n,2),r=a[0],i=a[1],s=r.isUnloaded,c=r.isPlaying,f=r.volume,m=r.title,v=r.msgErr,h=(0,l.useCallback)(function(e){return i({type:g.SET_VOLUME,volume:d.default.setVolume(e)})},[]),R=(0,l.useCallback)(function(){return i({type:g.SET_VOLUME,volume:d.default.increaseVolume(.01)})},[]),C=(0,l.useCallback)(function(){return i({type:g.SET_VOLUME,volume:d.default.decreaseVolume(.01)})},[]),A=function(){!v&&d.default.play()?(i({type:g.SET_PLAYING}),T(t&&t.title||b)):(i({type:g.SET_TITLE,title:"At first, please, choose a radio station."}),T())},N=function(){d.default.stop(),i({type:g.PAUSE})},P=function(){d.default.unload(),i({type:g.UNLOAD}),T()},L=function(e){i({type:g.SET_ERROR,msgErr:e}),T()};return(0,l.useEffect)(function(){return t&&t.src&&d.default.init(t.src,L.bind(null,"Load Error"),L.bind(null,"Play Error"))&&i({type:g.SET_LOADING}),function(){d.default.unload()}},[t]),u.default.createElement("div",{className:O.PLAYER},u.default.createElement(p.default.Volume,{volume:f,setVolume:h,onIncrease:R,onDecrease:C}),u.default.createElement("div",{style:M.TITLE_CONT},u.default.createElement(p.default.Command,{isPlaying:c,onPlay:A,onStop:N}),u.default.createElement(_.default,{station:t,msgErr:v,title:m}),u.default.createElement(E.default,{isPlaying:c,isUnloaded:s,unload:P})))};t.default=R},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o=n(63),l=function(e){return parseFloat(e.toFixed(2))},u=void 0,i={volume:.25,autoplay:!1,html5:!0,format:["webm","mpeg","mp3","acc"]},s=!0,c={INIT_VOLUME:.2,checkInitVolume:function(){s&&(o.Howler.volume(c.INIT_VOLUME),s=!1)},getVolume:function(){return o.Howler.volume()},unload:function(){u&&(u.unload(),u.off())},init:function(e,t,n){try{c.checkInitVolume();var a=o.Howler.volume();return c.unload(),u=new o.Howl((0,r.default)({},i,{src:e,onloaderror:t,onplayerror:n})),o.Howler.volume(a),!0}catch(e){return u=null,console.log(e.message),!1}},play:function(){return!!u&&(u.play(),!0)},stop:function(){u&&u.stop()},setVolume:function(e){return o.Howler.volume(l(e)),e},increaseVolume:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.05;c.checkInitVolume();var t=l(o.Howler.volume()+e);return t<=1&&o.Howler.volume(t),o.Howler.volume()},decreaseVolume:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.05;c.checkInitVolume();var t=l(o.Howler.volume()-e);return t>=0&&o.Howler.volume(t),o.Howler.volume()}};t.default=c},function(e,t,n){e.exports=n(1)(110)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=a(r),l=n(0),u=a(l),i={TITLE:{color:"#64e346",marginLeft:8,fontWeight:600},MSG_ERR:{color:"#673ab7"}},s=function(e){var t=e.station,n=e.msgErr,a=e.title,r=t&&t.title||"",l=n?n+" "+r:r||a,s=n?(0,o.default)({},i.TITLE,i.MSG_ERR):i.TITLE;return u.default.createElement("div",{style:s},l)};t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o={EQUALIZER:"equalizer",EQUALIZER_NOT_PLAYING:"equalizer--not-playing"},l=function(e){var t=e.isPlaying,n=e.isUnloaded,a=e.unload;return t?r.default.createElement("div",{className:o.EQUALIZER}):n?r.default.createElement("div",{className:o.EQUALIZER_NOT_PLAYING}):r.default.createElement("button",{className:o.EQUALIZER_NOT_PLAYING,"data-loader":"circle",onClick:a})};t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o={SET_LOADING:"SET_LOADING",SET_PLAYING:"SET_PLAYING",PAUSE:"PAUSE",UNLOAD:"UNLOAD",SET_VOLUME:"SET_VOLUME",SET_TITLE:"SET_TITLE",SET_ERROR:"SET_ERROR"},l=function(e,t){switch(t.type){case o.SET_LOADING:return(0,r.default)({},e,{isUnloaded:!1,isPlaying:!1,msgErr:""});case o.SET_PLAYING:return(0,r.default)({},e,{isPlaying:!0,isUnloaded:!1});case o.PAUSE:return(0,r.default)({},e,{isPlaying:!1});case o.UNLOAD:return(0,r.default)({},e,{isUnloaded:!0});case o.SET_VOLUME:return(0,r.default)({},e,{volume:t.volume});case o.SET_TITLE:return(0,r.default)({},e,{title:t.title});case o.SET_ERROR:return(0,r.default)({},e,{msgErr:t.msgErr,isPlaying:!1,isUnloaded:!0});default:throw new Error("Unsupported action type: "+t.type)}};l.A=o,t.default=l},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),o=n(68),l=a(o),u=n(73),i=a(u),s=[],c=r.compose,d=(0,r.createStore)(l.default,function(){return i.default}(),c(r.applyMiddleware.apply(void 0,s)));t.default=d},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),o=n(69),l=a(o),u=n(70),i=a(u),s=n(72),c=a(s),d=(0,r.combineReducers)({app:l.default,stations:i.default,categories:c.default});t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return arguments[1].type,e};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(71),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o=n(4),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case o.ACTION.MOVE_TO_TOP:var n=t.index,a=t.station;return e.splice(n,1),e.unshift(a),[].concat((0,r.default)(e));case o.ACTION.ADD_CATEGORY:var l=t.categories;return[].concat((0,r.default)(l),(0,r.default)(e));case o.ACTION.REMOVE_CATEGORY:var u=t.category;return e.filter(function(e){return e.category!==u});default:return e}};t.default=l},function(e,t,n){e.exports=n(1)(137)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o=n(4),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case o.ACTION.ADD_CATEGORY:return e[t.category]=!0,(0,r.default)({},e);case o.ACTION.REMOVE_CATEGORY:return e[t.category]=!1,(0,r.default)({},e);default:return e}};t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={app:{},categories:{},stations:[]};t.default=a}]);