(()=>{var t={99:(t,e,r)=>{t.exports=r(342)(396)},905:(t,e,r)=>{t.exports=r(342)(400)},554:(t,e,r)=>{t.exports=r(342)(498)},663:(t,e,r)=>{t.exports=r(342)(661)},783:(t,e,r)=>{t.exports=r(342)(754)},435:(t,e,r)=>{t.exports=r(342)(766)},342:t=>{"use strict";t.exports=lib_vendor}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}(()=>{"use strict";var t=r(905),e=r(783),n=r(554);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}const o=["alternative","chillout","classical","country","instrumental","jazz","lounge","piano","pop","rock","sport","talks"];const s={app:{isDrawer:!1,filter:"none",currentStation:void 0,uiTheme:"grey"},topics:[].concat(o),categories:{},stations:[]};var a="SET_UI_THEME",c="SET_SRC_FILTER",l="TOGGLE_DRAWER",u={1:"grey",2:"light",3:"sand"},d={1:"none",2:"https",3:"http"};const p={setUiTheme:function(t){return{type:a,uiTheme:u[t]}},setSrcFilter:function(t){return{type:c,filter:d[t]}},toggleDrawer:function(){return{type:l}}};var m="ADD_CATEGORY",h="REMOVE_CATEGORY",f="SET_CURRENT_STATION";const v={addCategory:function(t){return{type:m,category:t}},removeCategory:function(t){return{type:h,category:t}},setCurrentStation:function(t){return{type:f,station:t}}};var w=s.app,b=w.uiTheme,g=w.filter;const y=function(t,e){switch(void 0===t&&(t=s.app),e.type){case a:var r=e.uiTheme,n=void 0===r?b:r;return t.uiTheme!==n?i({},t,{uiTheme:n}):t;case l:return i({},t,{isDrawer:!t.isDrawer});case c:var o=e.filter;return i({},t,{filter:void 0===o?g:o});case f:return i({},t,{currentStation:e.station});default:return t}};var E=function(t){return void 0===t&&(t=""),function(e){return e.title!==t}};const _=function(t,e){switch(void 0===t&&(t=s.stations),e.type){case m:var r=e.categories,n=e.category,i=(e.currentStation||{}).title,o=(r||[]).filter(E(i)),a=function(t,e){for(var r=t.length,n=0;n<r;n++)if(t[n].category===e)return t[n]}(t,n),l=a?o.filter(E(a.title)):o;return[].concat(l,t);case h:var u=e.category;return t.filter(function(t){return function(e){return e.category!==t}}(u));case f:var d=e.station,p=e.currentStation,v=(d||{}).title,w=t.filter(E(v));return p&&w.unshift(p),w;case c:return[];default:return t}};const C=function(t,e){switch(void 0===t&&(t=s.categories),e.type){case m:var r=e.category;return r&&(t[r]=!0),i({},t);case h:var n=e.category;return n&&(t[n]=!1),i({},t);case c:return{};default:return t}};var S={alternative:[{title:"Canada: American Roots",src:"https://igor.torontocast.com:2275/stream",siteUrl:"https://www.americanrootsradio.com",br:64},{title:"France: Chante France",src:"https://chantefrance.ice.infomaniak.ch/chantefrance-96.aac",siteUrl:"https://www.chantefrance.com",br:96},{title:"France: Nostalgie FM",src:"https://scdn.nrjaudio.fm/fr/30601/aac_64.mp3?origine=playernostalgie&aw_0_req.userConsent=undefined&cdn_path=audio_lbs8",siteUrl:"https://www.nostalgie.fr",br:128},{title:"USA: The Austin Music Experience",src:"https://kut.streamguys1.com/amx-web",siteUrl:"https://kutx.org",br:192}],classical:[{title:"Canada: Classic 107 FM",src:"http://daemondef.ic.llnwd.net/stream/daemondef_ddmp3_74",siteUrl:"http://classic107.com",br:56},{title:"Germany: Hamburg Klassik 98.1 FM",src:"https://klassikr.streamabc.net/klassikradio-simulcast-mp3-mq?sABC=5p7684ns%23%233ros3r7q49np68nq09sorn0021437803%23enqvbqr&amsparams=playerid:radiode;skey:1551271087",siteUrl:"https://www.klassikradio.de",br:192},{title:"Italy: Venice Classic",src:"http://109.123.116.202:8020/stream/1/",siteUrl:"https://www.veniceclassicradio.eu",br:128},{title:"Netherland: NPO Radio 4",src:"https://icecast.omroep.nl/radio4-bb-mp3",siteUrl:"https://www.radio4.nl",br:192},{title:"Swiss: Basel Radio Classic",src:"https://streaming.swisstxt.ch/m/rsc_de/mp3_128",siteUrl:"https://www.radioswissclassic.ch",br:128},{title:"Swiss: Opera House 1.FM",src:"http://strm112.1.fm/opera_mobile_mp3",siteUrl:"https://1.fm",br:128},{title:"Swissradio.ch Classical",src:"http://relay.publicdomainproject.org/classical.mp3"},{title:"UK: Classic FM",src:"https://media-ssl.musicradio.com/ClassicFM",siteUrl:"https://www.classicfm.com",br:48},{title:"UK: BBC 3 Radio",src:"http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio3_mf_p",br:128},{title:"UK: Davide of MIMIC Classical",src:"http://uk3.internet-radio.com:8060/;stream",siteUrl:"http://meetinginmusic.blogspot.com",br:320},{title:"USA: New York WQXR",src:"https://stream.wqxr.org/wqxr-web?nyprBrowserId=5fad42cad0701918",siteUrl:"https://www.wqxr.org",br:128}],country:[{title:"USA: Country Hits",src:"https://19763.live.streamtheworld.com/977_COUNTRY.mp3",siteUrl:"https://hitsradio.com",br:128},{title:"USA: NYC Country Live",src:"https://streaming.radiostreamlive.com/radiocountrylive_devices",siteUrl:"https://www.radiocountrylive.com",br:128},{title:"USA: Today's Country 011.FM",src:"http://listen.011fm.com:8016/stream09",siteUrl:"http://011fm.com",br:192},{title:"USA: 650 AM WSM",src:"https://stream01048.westreamradio.com/wsm-am-mp3",siteUrl:"https://wsmradio.com",br:64},{title:"USA: Opry Nashville",src:"https://stream01051.westreamradio.com/wsm3-mp3",siteUrl:"https://wsmradio.com",br:64}],talks:[{title:"BBC Radio Wales 103.9",src:"http://bbcmedia.ic.llnwd.net/stream/bbcmedia_walesmw_mf_p",siteUrl:"http://www.bbc.co.uk/radiowales/",br:128},{title:"USA: California: KCRW 89.9 FM",src:"https://kcrw.streamguys1.com/kcrw_192k_mp3_on_air?listenerid=1a13cb86cbe44b773c014c34bb7bfe43&awparams=companionAds%3Atrue",siteUrl:"https://www.kcrw.com",br:192},{title:"USA: KUT 90.5 FM",src:"https://kut.streamguys1.com/kut-web",siteUrl:"https://www.kut.org",br:128},{title:"USA: NPR Radio",src:"https://npr-ice.streamguys1.com/live.mp3",siteUrl:"https://www.npr.org",br:128},{title:"USA: Portland: XRAY.FM",src:"http://listen.xray.fm:8000/stream",siteUrl:"https://xray.fm",br:128},{title:"USA: WABE 90.1 FM",src:"https://pba-ice.wabe.org/wabe.aac",siteUrl:"https://www.wabe.org",br:96}],sport:[{title:"USA: Bristol: ESPN Radio",src:"http://edge.espn.cdn.abacast.net/espn-networkmp3-48",siteUrl:"http://www.espn.com/espnradio/",br:48},{title:"UK: talkSPORT",src:"https://radio.talksport.com/stream?awparams=platform:ts-tunein;lang:en",siteUrl:"https://talksport.com",br:64}],jazz:[{title:"USA: Florida Smooth Jazz",src:"http://us4.internet-radio.com:8266/;stream",siteUrl:"http://www.SmoothJazzFlorida.com",br:128}],chillout:[{title:"Spain: Costa Del Mar - Chillout",src:"http://stream.cdm-chillout.com:8020/stream-mp3-Chill",siteUrl:"http://www.costadelmar-radio.com",br:96},{title:"Swiss: Chillout Lounge 1.FM",src:"http://strm112.1.fm/chilloutlounge_mobile_mp3",siteUrl:"http://www.1.fm",br:192},{title:"USA: Chilled Out 181.FM",src:"http://listen.181fm.com/181-chilled_128k.mp3",siteUrl:"http://www.181.fm",br:128}],lounge:[{title:"France: ABC Lounge Jazz",src:"http://centauri.shoutca.st:8686/stream/1/",siteUrl:"http://www.abc-lounge.com",br:128},{title:"Italy: Milano Lounge",src:"http://antares.dribb.com:5080/autodj",siteUrl:"https://www.milanolounge.net",br:128}],rock:[{title:"USA: Florida Classic Rock",src:"http://us4.internet-radio.com:8258/;stream",siteUrl:"http://www.classicrockflorida.com",br:160}],pop:[{title:"UK: BBC Radio 1",src:"http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_q",siteUrl:"https://www.bbc.co.uk/radio1",br:128},{title:"UK: Dance",src:"http://uk7.internet-radio.com:8226/;stream",siteUrl:"https://www.danceradiouk.com",br:48},{title:"UK: Magic",src:"https://stream-mz.planetradio.co.uk/magicnational.aac",siteUrl:"http://planetradio.co.uk/magic/",br:47},{title:"Swiss: Zug Top 40 1.FM",src:"http://strm112.1.fm/top40_mobile_mp3",siteUrl:"http://1.fm",br:128},{title:"Seattle: KEXP 90.3 FM",src:"https://kexp-mp3-128.streamguys1.com/kexp128.mp3",siteUrl:"http://kexp.org",br:128},{title:"USA: 977 Hits Radio",src:"https://19763.live.streamtheworld.com/977_HITSAAC_SC",siteUrl:"https://hitsradio.com",br:64}],piano:[{title:"USA: Whisperings Solo Piano",src:"http://pianosolo.streamguys.net/live",siteUrl:"https://www.solopianoradio.com",br:96},{title:"USA: Matt Johnson Radio",src:"http://us2.internet-radio.com:8046/;stream",siteUrl:"http://www.mattjohnsonmusic.com",br:80}],instrumental:[{title:"EU: Instrumental Radio",src:"https://str2b.openstream.co/959?aw_0_1st.collectionid=4097&stationId=4097&publisherId=983&k=1602000602",siteUrl:"https://instrumentalradio.eu",br:128},{title:"USA: Beautiful Instrumentals Channel",src:"https://edge4.peta.live365.net/b37545_128mp3",siteUrl:"https://www.beautifulinstrumentalschannel.com",br:128},{title:"USA: GotRadio Guitar Genius",src:"https://pureplay.cdnstream1.com/6018_128.mp3",siteUrl:"https://www.gotradio.com",br:128},{title:"USA: Instrumental Hits Radio",src:"http://162.244.80.106:11128/stream2",siteUrl:"http://instrumentalhitsradio.com",br:192},{title:"Music Lake",src:"http://50.7.68.251:7168/;stream/1",siteUrl:"http://musiclake.com",br:64}]};const T={getCategory:function(t){return t&&S[t]||[]}};var U={isHttp:function(t){return void 0===t&&(t=""),"http"===t.split("://")[0]},filterCategoriesBy:function(t){return o.filter((function(e){return T.getCategory(e).some(t)}))},crCategories:function(){return[].concat(o)},getCategory:T.getCategory,crFilterBy:function(t){switch(t){case"http":return function(t){return U.isHttp(t.src)};case"https":return function(t){return!U.isHttp(t.src)};default:return function(){return!0}}}};const R=U;var k=R.isHttp,N=R.filterCategoriesBy,A=R.crCategories;const I=function(t,e){switch(void 0===t&&(t=s.topics),e.type){case c:return function(t){void 0===t&&(t="");var e="https"===t?function(t){return!k(t.src)}:"http"===t?function(t){return k(t.src)}:void 0;return e?N(e):A()}(e.filter);default:return t}};const O=(0,n.combineReducers)({app:y,stations:_,categories:C,topics:I});var L={app:function(t){return t.app||{}},isDrawer:function(t){return L.app(t).isDrawer},currentStation:function(t){return L.app(t).currentStation},uiTheme:function(t){return L.app(t).uiTheme},topics:function(t){return t.topics||[]},categories:function(t){return t.categories||[]},stations:function(t){return t.stations||[]}};const x={sApp:L};const M=function(t){var e=t.getState;return function(t){return function(r){return r.type!==f&&r.type!==m||(r.currentStation=L.currentStation(e())),t(r)}}};var D={grey:"grey",light:"#e1e1e1",sand:"#e8e0cb"};const F=function(t){return function(t){return function(e){if(e.type===a){var r=e.uiTheme,n=D[r];n&&(document.body.style.backgroundColor=n)}return t(e)}}};var P=R.crFilterBy,H=R.getCategory;var B=[].concat([F,M,function(t){var e=t.getState;return function(t){return function(r){if(r.type===m){var n=e(),i=r.category,o=P(n.app.filter);r.categories=H(i).map((function(t){return t.category=i,t})).filter(o)}return t(r)}}}]),V=n.compose;const z=(0,n.createStore)(O,s,V(n.applyMiddleware.apply(void 0,B)));var G={grey:"grey",light:"#f9f9f9",sand:"#fdf1d5"};const K={toBg:function(t){return{backgroundColor:G[t]}}};const W=function(t){var r=t.dispatch;return i({},(0,n.bindActionCreators)(p,r),(0,n.bindActionCreators)(v,r),x,{useSelector:e.useSelector,uiThemeImpl:K})};var q=r(99),Y=r(663);const X=(0,Y.createContext)({});const j={TRANSITION:document&&void 0!==document.body.style.transition,TOUCH:document&&"ontouchstart"in document.documentElement,MEDIA_SESSION:navigator&&"mediaSession"in navigator};var J=0;function Q(e,r,n,i,o){var s,a,c={};for(a in r)"ref"==a?s=r[a]:c[a]=r[a];var l={type:e,props:c,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--J,__source:i,__self:o};if("function"==typeof e&&(s=e.defaultProps))for(a in s)void 0===c[a]&&(c[a]=s[a]);return t.options.vnode&&t.options.vnode(l),l}const Z=function(t){var e=t.accessKey,r=t.onMouseDown,n=t.onMouseUp,o=t.onTouchStart,s=t.onTouchEnd,a=t.onClick,c=t.children;return Q("button",i({className:"bt-circle",accessKey:e},j.TOUCH&&o?{onTouchStart:o,onTouchEnd:s}:{onMouseDown:r,onMouseUp:n},{onClick:a,children:Q("svg",{viewBox:"0 0 34 34",width:"100%",height:"100%",children:Q("g",{children:c})})}))};var $=Q("path",{d:"M12.458 22.667l10-6.5-10-6.5z"}),tt=Q(t.Fragment,{children:[Q("path",{d:"M11.5 10h3v13h-3v-13z"}),Q("path",{d:"M17.5 10h3v13h-3v-13z"})]});const et=function(t){var e=t.isPlaying,r=t.onPlay,n=t.onStop;return Q(Z,{accessKey:e?"s":"p",onClick:e?n:r,children:e?tt:$})};const rt=function(t,e,r){var n=(0,q.useRef)(null),i=(0,q.useRef)(r);i.current=r;var o=function(){return clearInterval(n.current)};return[function(){n.current=setInterval((function(){e(i.current)?(o(),n.current=setInterval(t,500)):t()}),150)},o]};const nt=function(t){var e=(0,q.useState)((function(){return!!t})),r=e[0],n=e[1];return[r,(0,q.useCallback)((function(){return n(!0)}),[]),(0,q.useCallback)((function(){return n(!1)}),[])]};const it={ROOT:{position:"relative",width:"100%",height:18,marginTop:8,marginBottom:8,userSelect:"none",cursor:"default"},ROOT_LINE:{position:"absolute",top:8,left:0,width:"100%",height:2},LINE_BEFORE:{position:"absolute",left:0,width:"calc(15%)",height:"100%",marginRight:6,backgroundColor:"rgb(0, 188, 212)",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},LINE_AFTER:{position:"absolute",right:0,width:"calc(85%)",height:"100%",marginLeft:6,backgroundColor:"rgb(189, 189, 189)",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},LINE_HOVERED:{backgroundColor:"rgb(158, 158, 158)"},ROOT_CIRCLE:{zIndex:1,position:"absolute",top:0,left:"15%",width:12,height:12,cursor:"pointer",pointerEvents:"inherit",margin:"1px 0px 0px",backgroundColor:"rgb(0, 188, 212)",backgroundClip:"padding-box",border:"0px solid transparent",borderRadius:"50%",transform:"translate(-50%, -50%)",overflow:"visible",outline:"none",transition:"background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},CIRCLE_DRAGGED:{width:20,height:20},CIRCLE_INNER:{position:"absolute",top:0,left:0,width:12,height:12,overflow:"visible"},CIRCLE_INNER_EL:{position:"absolute",top:-12,left:-12,width:"300%",height:36,borderRadius:"50%",backgroundColor:"rgba(0, 188, 212, 0.16)",transform:"scale(1)"},EMBER:{top:-12,left:-12,width:"220%",height:44,border:"1px solid #4caf50"}};var ot=Number.isNaN,st=function(){},at=j.TOUCH,ct=at?"touchmove":"mousemove",lt=at?"touchend":"mouseup",ut=function(t){return{width:"calc("+t+"%)"}},dt=at?function(t){return(((t||{}).touches||[])[0]||{}).clientX||0}:function(t){return t.clientX};const pt=function(t){var e=t.style,r=t.initValue,n=t.step,o=t.min,s=t.max,a=t.onChange,c=void 0===a?st:a,l=(0,q.useRef)(null),u=nt(!1),d=u[0],p=u[1],m=u[2],h=(0,q.useState)(r),f=h[0],v=h[1],w=function(t){var e=function(t,e,r){return r>e?e:r<t?t:r}(o,s,t);v(e),c(e)},b=function(t){var e=nt(!1),r=e[0],n=e[1],i=e[2],o=(0,q.useRef)(!1),s=function(e){o.current||(o.current=!0,requestAnimationFrame((function(){o.current=!1,t(e)})))},a=function t(){document.removeEventListener(ct,s),document.removeEventListener(lt,t),i()};return[r,function(t){at||t.preventDefault(),document.addEventListener(ct,s),document.addEventListener(lt,a),n()}]}((function(t){var e=l.current;if(e){var r,i=e.clientWidth,a=function(t,e){var r=e.getBoundingClientRect().left;return dt(t)-r}(t,e);a<0?a=0:a>i&&(a=i),r=a/i*(s-o),r=Math.round(r/n)*n+o,r=parseFloat(r.toFixed(2)),w(r)}})),g=b[0],y=b[1];(0,q.useEffect)((function(){return v(r)}),[r]);var E=at?{onTouchStart:y}:{onMouseDown:y,onMouseEnter:p,onMouseLeave:m},_=at?void 0:{onFocus:p,onKeyDown:function(t){var e=t.keyCode,r=function(t,e,r){return function(t){return 39===t||38===t}(r)?t+e:function(t){return 37===t||40===t}(r)?t-e:void 0}(f,n,e);null!=r&&(t.preventDefault(),w(r))},onBlur:m},C=d?i({},it.LINE_AFTER,it.LINE_HOVERED):it.LINE_AFTER,S=g?it.CIRCLE_DRAGGED:null,T=d||g?Q("div",{style:i({},it.CIRCLE_INNER_EL,g?it.EMBER:null)}):null,U=function(t,e,r){var n=(t-e)/(r-e);return ot(n)?0:Math.round(100*n)}(f,o,s),R=ut(U),k=ut(100-U),N={left:U+"%"};return Q("div",i({style:i({},it.ROOT,e)},E,{children:Q("div",{ref:l,style:it.ROOT_LINE,children:[Q("div",{style:i({},it.LINE_BEFORE,R)}),Q("div",{style:i({},C,k)}),Q("input",{type:"hidden",step:n,min:o,max:s,value:f,required:!0}),Q("div",i({role:"slider",tabIndex:0,"aria-valuenow":f,"aria-valuemin":o,"aria-valuemax":s,"aria-orientation":"horizontal","aria-labelledby":"discrete-slider-custom",style:i({},it.ROOT_CIRCLE,S,N)},_,{children:Q("div",{style:i({},it.CIRCLE_INNER,S),children:T})}))]})}))};const mt=function(t){return Q(Z,i({},t,{children:Q("path",{d:"M8 16 H24",strokeWidth:"3"})}))};const ht=function(t){return Q(Z,i({},t,{children:[Q("path",{d:"M8 16 H24",strokeWidth:"3"}),Q("path",{d:"M16 8 V24",strokeWidth:"3"})]}))};const ft={BT_DRAWER:{position:"absolute",top:8,right:18},DRAWER_OFF:{transform:"translateX(264px)"},DRAWER_ON:{transform:"translate(0px, 0px)"},MODAL_OFF:{display:"none",opacity:0,zIndex:-1,transition:"opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},MODAL_ON:{display:"block",opacity:1,zIndex:1e3,transition:"opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"}};var vt="drawer-bt",wt="drawer-span",bt="drawer-svg",gt="drawer",yt="drawer-modal";const Et=function(e){var r=e.btStyle,n=e.children,o=(0,q.useContext)(X),s=o.toggleDrawer,a=o.sApp,c=o.useSelector,l=c(a.isDrawer),u=c(a.uiTheme);(0,q.useEffect)((function(){document.body.style.overflowY=l?"hidden":"auto"}));var d=i({},l?ft.DRAWER_ON:ft.DRAWER_OFF,K.toBg(u)),p=l?ft.MODAL_ON:ft.MODAL_OFF,m=l?s:void 0;return Q(t.Fragment,{children:[Q("button",{className:vt,style:i({},ft.BT_DRAWER,r),"aria-label":"Open Drawer",onClick:s,children:Q("span",{className:wt,children:Q("svg",{className:bt,focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:[Q("path",{fill:"none",d:"M0 0h24v24H0z"}),Q("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})]})})}),Q("div",{role:"presentation","aria-hidden":!l,className:yt,style:p,onClick:m}),Q("aside",{className:gt,style:d,children:Q("div",{children:n})})]})};var _t={fromClientX:void 0},Ct=function(t){var e=(t||{}).changedTouches,r=void 0===e?[]:e;return r[0]?r[0].clientX:void 0},St=function(t){return"number"==typeof t&&t-t==0};const Tt=function(t){var e=t.onSwipeGesture,r=t.dir,n=void 0===r?"L":r,i=t.delta,o=void 0===i?30:i,s=(0,q.useCallback)((function(t){_t.fromClientX=Ct(t)}),[]),a=(0,q.useCallback)((function(t){(function(t,e,r){var n=_t.fromClientX;return!(!St(n)||!St(r))&&("L"===t||"U"===t?n-r>e:r-n>e)})(n,o,Ct(t))&&(e(),_t.fromClientX=void 0)}),[]);if(j.TOUCH)return{onTouchStart:s,onTouchEnd:a}};var Ut={padding:3};const Rt=function(t){var e=t.className,r=void 0===e?"svg-close":e,n=t.style,i=t.tabIndex;return Q("button",{className:r,style:n,tabIndex:void 0===i?-1:i,onClick:t.onClick,children:Q("svg",{viewBox:"0 0 12 12",width:"100%",height:"100%",style:Ut,preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:"2",stroke:"#f44336",strokeLinecap:"round",children:[Q("path",{d:"M 0,0 L 12,12"}),Q("path",{d:"M 12,0 L 0,12"})]})})};var kt=Array.isArray,Nt=function(t){return kt(t)?t[0]?t[1]:"":t||""};const At=function(){var t=Nt(arguments.length<=0?void 0:arguments[0]),e=Nt(arguments.length<=1?void 0:arguments[1]);return t?e?t+" "+e:t:e||void 0};var It={backgroundColor:"#1b2836"},Ot=function(t,e){return t===e?It:void 0};const Lt=function(t){var e=t.style,r=t.className,n=t.tabIndex,i=void 0===n?-1:n,o=t.initialValue,s=void 0===o?"1":o,a=t.oneC,c=void 0===a?"One":a,l=t.twoC,u=void 0===l?"Two":l,d=t.threeC,p=void 0===d?"Three":d,m=t.onClick,h=(0,q.useState)(s),f=h[0],v=h[1],w=At("bt-triple",r),b=Ot(f,"1"),g=Ot(f,"2"),y=Ot(f,"3"),E=(0,q.useCallback)((function(t){m(t),v(t)}),[m]);return Q("div",{className:w,style:e,children:[Q("button",{className:"bt-triple__one",style:b,tabIndex:i,onClick:E.bind(null,"1"),children:c}),Q("button",{className:"bt-triple__two",style:g,tabIndex:i,onClick:E.bind(null,"2"),children:u}),Q("button",{className:"bt-triple__three",style:y,tabIndex:i,onClick:E.bind(null,"3"),children:p})]})};var xt={display:"inline-block",width:16,height:16};const Mt=function(t){var e=t.style,r=t.color,n=void 0===r?"#64e346":r;return Q("span",{style:i({},xt,e),children:Q("svg",{viewBox:"0 0 16 16",width:"100%",height:"100%",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:Q("path",{d:"M 2,5 L 8,14 14,1",stroke:n,fill:"transparent",strokeWidth:"3",strokeLinecap:"round"})})})};var Dt={textDecoration:"underline"};const Ft=function(t){var e=t.className,r=t.rootStyle,n=t.caption,i=void 0===n?"":n,o=t.accessKey,s=t.children,a=o?i.toLowerCase().indexOf(o):-1;if(-1!==a){var c=i.substring(0,a),l=i.substring(a,a+1),u=i.substring(a+1);return Q("span",{className:e,style:r,children:[Q("span",{children:c}),Q("span",{style:Dt,children:l}),Q("span",{children:u}),s]})}return Q("span",{className:e,style:r,children:[i,s]})};var Pt="bt-flat",Ht="bt-flat__div",Bt="bt-flat__span",Vt={color:"#607d8b"};const zt=function(t){var e=t.innerRef,r=t.timeout,n=void 0===r?500:r,o=t.className,s=t.style,a=t.clDiv,c=void 0===a?Ht:a,l=t.clCaption,u=t.isPrimary,d=t.title,p=void 0===d?"":d,m=t.caption,h=t.accessKey,f=t.tabIndex,v=t.onClick,w=t.children,b=(0,q.useRef)(null),g=(0,q.useRef)(0),y=(0,q.useCallback)((function(t){if(0!==n){var e=g.current,r=t.timeStamp;e&&r-e>n&&v(t),g.current=r}else v(t)}),[n,v]);(0,q.useImperativeHandle)(e,(function(){return{focus:function(){b.current&&b.current.focus()}}}));var E=u?i({},s,Vt):s,_=At(Pt,o),C=At(Bt,l);return Q("button",{ref:b,className:_,style:E,accessKey:h,tabIndex:f,title:h?p+" ["+h+"]":p,onClick:y,children:Q("div",{className:c,children:[Q(Ft,{className:C,caption:m,accessKey:h}),w]})})};const Gt={HEADER:"drawer__title",ROOT:"drawer__list",BT:"drawer__list-bt",BT_CLOSE:"drawer__bt-close",BT_TRIPLE:"mr-8"};const Kt=function(){var t=(0,q.useContext)(X),e=t.sApp,r=t.addCategory,n=t.removeCategory,i=t.useSelector,o=i(e.topics),s=i(e.categories),a=i(e.isDrawer)?0:-1;return Q("ul",{children:o.map((function(t){var e=s[t];return Q("li",{children:Q(zt,{className:Gt.BT,caption:t,timeout:0,tabIndex:a,onClick:e?function(){return n(t)}:function(){return r(t)},children:e&&Q(Mt,{})})},t)}))})};const Wt=function(){var t=(0,q.useContext)(X),e=t.setUiTheme,r=t.toggleDrawer,n=t.setSrcFilter,o=Tt({onSwipeGesture:r,dir:"R"});return Q("div",i({className:Gt.ROOT},o,{children:[Q("div",{className:Gt.HEADER,children:[Q(Lt,{className:Gt.BT_TRIPLE,oneC:"GREY",twoC:"LIGHT",threeC:"SAND",onClick:e}),Q(Rt,{className:Gt.BT_CLOSE,onClick:r})]}),Q(Kt,{}),Q("div",{className:Gt.HEADER,children:Q(Lt,{className:Gt.BT_TRIPLE,initialValue:"2",oneC:"ALL",twoC:"HTTPS",threeC:"HTTP",onClick:n})})]}))};const qt=function(){return Q(Et,{children:Q(Wt,{})})};const Yt={ROW:{height:35,transition:"height 0.3s ease-out"},SLIDER:{display:"inline-block",width:200,maxWidth:"calc(100vw - 210px)",marginRight:16},VOLUME:{position:"relative",top:-10,display:"inline-block",color:"#00bcd4",width:46,paddingLeft:5,fontSize:22,fontWeight:400},GAP:{display:"inline-block",width:12}};var Xt=.8,jt=.2,Jt=function(t,e){return{onMouseDown:t,onMouseUp:e,onTouchStart:t,onTouchEnd:e}},Qt=function(t){return t>Xt},Zt=function(t){return t<jt};const $t=(0,Y.memo)((function(t){var e,r,n=t.volume,o=t.setVolume,s=t.onIncrease,a=t.onDecrease,c=rt(s,Qt,n),l=c[0],u=c[1],d=rt(a,Zt,n),p=d[0],m=d[1],h=Jt((function(){0!==n&&p()}),m),f=Jt((function(){100!==n&&l()}),u);return(0,q.useEffect)((function(){0===n&&m(),100===n&&u()})),Q("div",{id:"volume",style:Yt.ROW,children:[Q("div",{style:Yt.VOLUME,children:(e=n,"number"==typeof(r=e)&&r-r==0?Math.round(100*e):"")}),Q(pt,{style:Yt.SLIDER,initValue:n,step:.05,min:0,max:1,onChange:o}),Q(mt,i({accessKey:"-"},h,{onClick:a})),Q("div",{style:Yt.GAP}),Q(ht,i({accessKey:"+"},f,{onClick:s})),Q(qt,{})]})}));var te={display:"block"},ee={display:"none"};const re=function(t){var e=t.isShow,r=t.className,n=t.style,o=t.children,s=e?"show-popup":"";return Q("div",{className:r?r+" "+s:""!==s?s:void 0,style:i({},n,e?te:ee),children:o})};var ne=R.isHttp;const ie=function(t){var e=t.src;return Q("span",{children:[" ",ne(e)?"(http)":""]})};const oe={ARROW_OPEN:{transform:"rotate(90deg) scale(1.3, 1.3) translate(14px, -10px)"},LINK:{color:"#04477b",fontSize:"17px",display:"inline-block",maxWidth:340,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},TITLE:{color:"darkgray"},CATEGORY:{color:"#1b2836"}};var se=function(t){return t[0].toUpperCase()+t.substring(1)};const ae=function(t){var e,r=t.category,n=t.br;if(!(e=r)||"string"!=typeof e)return null;var i=n?" ("+n+" Kbps)":"";return Q("div",{children:[Q("span",{style:oe.TITLE,children:"Category:"})," ",Q("span",{style:oe.CATEGORY,children:[se(r),i]})]})};const ce=function(t){var e=t.siteUrl;return e?Q("a",{href:e,style:oe.LINK,target:"_blank",rel:"noreferrer noopener",children:e}):null};var le="station-descr",ue="station-descr__bt",de="item-descr__bt-more",pe="station-descr__info";const me=function(t){var e=t.station,r=(0,q.useState)(!0),n=r[0],i=r[1],o=n?oe.ARROW_OPEN:void 0,s=e||{},a=s.title,c=s.src,l=s.siteUrl,u=s.category,d=s.br;return e?Q("div",{className:le,children:[Q("button",{className:ue,onClick:function(){return i((function(t){return!t}))},children:[Q("span",{children:a}),Q(ie,{src:c}),Q("span",{className:de,style:o,children:">"})]}),Q(re,{className:pe,isShow:n,children:Q("div",{children:[Q(ae,{category:u,br:d}),Q(ce,{siteUrl:l})]})})]}):null};var he="item-station",fe="item-station__access";const ve=function(t){var e=t.station,r=t.accessKey,n=t.onClick,i=e.title,o=e.src;return Q("button",{className:he,accessKey:r,onClick:n,children:[Q("span",{children:i}),Q(ie,{src:o}),Boolean(r)&&Q("span",{className:fe,children:r})]})};var we=function(t){return t<5?""+(t+1):void 0};const be={Command:et,Volume:$t,List:function(){var t=(0,q.useContext)(X),e=t.toggleDrawer,r=t.setCurrentStation,n=t.sApp,o=t.useSelector,s=o(n.currentStation),a=o(n.stations);return Q("div",i({className:"item-list"},Tt({onSwipeGesture:e}),{children:[Q(me,{station:s}),a.map((function(t,e){return Q(ve,{station:t,accessKey:j.TOUCH?void 0:we(e),onClick:r.bind(null,t,e)},t.title)}))]}))}};var ge=r(435),ye=function(t){return parseFloat(t.toFixed(2))},Ee=null,_e={volume:.25,autoplay:!1,html5:!0,format:["webm","mpeg","mp3","acc"]},Ce=!0,Se={INIT_VOLUME:.2,checkInitVolume:function(){Ce&&(ge.Howler.volume(Se.INIT_VOLUME),Ce=!1)},getVolume:function(){return ge.Howler.volume()},unload:function(){Ee&&(Ee.unload(),Ee.off())},init:function(t,e,r){try{Se.checkInitVolume();var n=ge.Howler.volume();return Se.unload(),Ee=new ge.Howl(i({},_e,{src:t,onloaderror:e,onplayerror:r})),ge.Howler.volume(n),!0}catch(t){return Ee=null,console.log(t.message),!1}},play:function(){return!!Ee&&(Ee.play(),!0)},stop:function(){Ee&&Ee.stop()},setVolume:function(t){return ge.Howler.volume(ye(t)),t},increaseVolume:function(t){void 0===t&&(t=.05),Se.checkInitVolume();var e=ye(ge.Howler.volume()+t);return e<=1&&ge.Howler.volume(e),ge.Howler.volume()},decreaseVolume:function(t){void 0===t&&(t=.05),Se.checkInitVolume();var e=ye(ge.Howler.volume()-t);return e>=0&&ge.Howler.volume(e),ge.Howler.volume()}};const Te=Se;var Ue="audio__title",Re="audio__title audio__title--err";const ke=function(t){var e=t.station,r=t.msgErr,n=t.title,i=e&&e.title||"",o=r&&i;return Q("div",{className:o?Re:Ue,children:o?r+" "+i:i||n})};var Ne="equalizer--not-playing";const Ae=function(t){var e=t.isPlaying,r=t.isUnloaded,n=t.unload;return e?Q("div",{className:"equalizer"}):r?Q("div",{className:Ne}):Q("button",{className:Ne,"data-loader":"circle",onClick:n})};var Ie=Te.INIT_VOLUME,Oe="Radio Player v0.3.0",Le={SET_LOADING:"SET_LOADING",SET_PLAYING:"SET_PLAYING",PAUSE:"PAUSE",UNLOAD:"UNLOAD",STOP:"STOP",SET_VOLUME:"SET_VOLUME",SET_TITLE:"SET_TITLE",SET_ERROR:"SET_ERROR"},xe=function(t,e){switch(e.type){case Le.SET_LOADING:return i({},t,{isUnloaded:!1,isPlaying:!1,msgErr:""});case Le.SET_PLAYING:return i({},t,{isPlaying:!0,isUnloaded:!1});case Le.PAUSE:return i({},t,{isPlaying:!1});case Le.UNLOAD:return i({},t,{isUnloaded:!0});case Le.STOP:return i({},t,{isPlaying:!1,isUnloaded:!0});case Le.SET_VOLUME:var r=e.volume;return i({},t,{volume:void 0===r?Ie:r});case Le.SET_TITLE:var n=e.title;return i({},t,{title:void 0===n?Oe:n});case Le.SET_ERROR:var o=e.msgErr;return i({},t,{msgErr:void 0===o?"":o,isPlaying:!1,isUnloaded:!0});default:throw new Error("Unsupported action type: "+e.type)}};xe.A=Le;const Me=xe;var De=Me.A,Fe={display:"flex",alignItems:"center",paddingBottom:4},Pe=function(t){void 0===t&&(t=""),j.MEDIA_SESSION&&(navigator.mediaSession.metadata=new MediaMetadata({title:Oe,artist:t}))},He={msgErr:"",title:Oe,isUnloaded:!0,isPlaying:!1,volume:Ie};const Be=function(){var t=(0,q.useRef)(null),e=(0,q.useContext)(X),r=e.uiThemeImpl,n=e.sApp,i=e.useSelector,o=i(n.uiTheme),s=i(n.currentStation),a=(0,q.useReducer)(Me,He),c=a[0],l=a[1],u=c.isUnloaded,d=c.isPlaying,p=c.volume,m=c.title,h=c.msgErr,f=(0,q.useCallback)((function(t){return l({type:De.SET_VOLUME,volume:Te.setVolume(t)})}),[]),v=(0,q.useCallback)((function(){return l({type:De.SET_VOLUME,volume:Te.increaseVolume(.01)})}),[]),w=(0,q.useCallback)((function(){return l({type:De.SET_VOLUME,volume:Te.decreaseVolume(.01)})}),[]),b=(0,q.useCallback)((function(){Te.stop(),Te.unload(),l({type:De.STOP})}),[]),g=function(t){l({type:De.SET_ERROR,msgErr:t}),Pe()};return(0,q.useEffect)((function(){j.MEDIA_SESSION&&navigator.mediaSession.setActionHandler("pause",b)}),[]),(0,q.useEffect)((function(){return s&&s.src&&Te.init(s.src,g.bind(null,"Load Error"),g.bind(null,"Play Error"))&&l({type:De.SET_LOADING}),function(){Te.unload()}}),[s]),Q("div",{className:"audio-player",style:r.toBg(o),children:[Q(be.Volume,{volume:p,setVolume:f,onIncrease:v,onDecrease:w}),Q("div",{style:Fe,children:[Q(be.Command,{isPlaying:d,onPlay:function(){var e;e=t,clearTimeout(e.current),e.current=null,!h&&Te.play()?(l({type:De.SET_PLAYING}),Pe(s&&s.title||Oe)):(l({type:De.SET_TITLE,title:"At first, please, choose a radio station."}),Pe())},onStop:function(){Te.stop(),t.current=setTimeout((function(){return l({type:De.UNLOAD})}),6e4),l({type:De.PAUSE})}}),Q(ke,{station:s,msgErr:h,title:m}),Q(Ae,{isPlaying:d,isUnloaded:u,unload:function(){Te.unload(),l({type:De.UNLOAD}),Pe()}})]})]})};const Ve=function(){var t=(0,q.useContext)(X).setSrcFilter;return(0,q.useEffect)((function(){t("2")}),[]),Q("div",{className:"app-radio-player",children:[Q(Be,{}),Q(be.List,{})]})};var ze=W(z);(0,t.render)(Q(e.Provider,{store:z,children:Q(X.Provider,{value:ze,children:Q(Ve,{})})}),document.getElementById("app"))})()})();