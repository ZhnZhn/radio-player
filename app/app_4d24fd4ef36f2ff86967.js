"use strict";(self.webpackChunkradio_player=self.webpackChunkradio_player||[]).push([[524],{785:(t,e,r)=>{var i=r(172),s=r(468),o=r(644);const n=["alternative","chillout","classical","country","instrumental","piano","pop","sport","talks"],a={app:{isDrawer:!1,filter:"none",currentStation:void 0,uiTheme:"grey"},topics:[...n],categories:{},stations:[]},l="SET_UI_THEME",c="TOGGLE_DRAWER",d={1:"grey",2:"light",3:"sand"},u={setUiTheme:t=>({type:l,uiTheme:d[t]}),toggleDrawer:()=>({type:c})},p="ADD_CATEGORY",m="REMOVE_CATEGORY",h="SET_CURRENT_STATION",y={addCategory:t=>({type:p,category:t}),removeCategory:t=>({type:m,category:t}),setCurrentStation:t=>({type:h,station:t})},{uiTheme:g}=a.app,w=function(t,e){switch(void 0===t&&(t=a.app),e.type){case l:{const{uiTheme:r=g}=e;return t.uiTheme!==r?{...t,uiTheme:r}:t}case c:return{...t,isDrawer:!t.isDrawer};case h:{const{station:r}=e;return{...t,currentStation:r}}default:return t}},b=function(t){return void 0===t&&(t=""),e=>e.title!==t},v=function(t,e){switch(void 0===t&&(t=a.stations),e.type){case p:{const{categories:r,category:i,currentStation:s}=e,{title:o}=s||{},n=(r||[]).filter(b(o)),a=((t,e)=>{const r=t.length;for(let i=0;i<r;i++)if(t[i].category===e)return t[i]})(t,i);return[...a?n.filter(b(a.title)):n,...t]}case m:{const{category:r}=e;return t.filter((t=>e=>e.category!==t)(r))}case h:{const{station:r,currentStation:i}=e,{title:s}=r||{},o=t.filter(b(s));return i&&o.unshift(i),o}default:return t}},f=function(t,e){switch(void 0===t&&(t=a.categories),e.type){case p:{const{category:r}=e;return r&&(t[r]=!0),{...t}}case m:{const{category:r}=e;return r&&(t[r]=!1),{...t}}default:return t}},_=function(t){return void 0===t&&(t=a.topics),t},S=(0,o.HY)({app:w,stations:v,categories:f,topics:_}),U={app:t=>t.app||{},isDrawer:t=>U.app(t).isDrawer,isHttp:t=>"https"!==U.app(t).filter,currentStation:t=>U.app(t).currentStation,uiTheme:t=>U.app(t).uiTheme,topics:t=>t.topics||[],categories:t=>t.categories||[],stations:t=>t.stations||[]},k={sApp:U},T=t=>{let{getState:e}=t;return t=>r=>((t=>(0,o.ve)(t)&&(t.type===p||t.type===h))(r)&&(r.currentStation=U.currentStation(e())),t(r))},C={grey:"grey",light:"#e1e1e1",sand:"#e8e0cb"},E=()=>t=>e=>{if((t=>(0,o.ve)(t)&&"uiTheme"in t)(e)){const{uiTheme:t}=e,r=t&&C[t];r&&(document.body.style.backgroundColor=r)}return t(e)},N={alternative:[{title:"Canada: American Roots",src:"https://igor.torontocast.com:2275/stream",siteUrl:"https://www.americanrootsradio.com",br:64},{title:"France: Chante France",src:"https://chantefrance.ice.infomaniak.ch/chantefrance-96.aac",siteUrl:"https://www.chantefrance.com",br:96},{title:"France: Nostalgie FM",src:"https://scdn.nrjaudio.fm/fr/30601/aac_64.mp3?origine=playernostalgie&aw_0_req.userConsent=undefined&cdn_path=audio_lbs8",siteUrl:"https://www.nostalgie.fr",br:128},{title:"USA: The Austin Music Experience",src:"https://kut.streamguys1.com/amx-web",siteUrl:"https://kutx.org",br:192}],classical:[{title:"Germany: Hamburg Klassik 98.1 FM",src:"https://klassikr.streamabc.net/klassikradio-simulcast-mp3-mq?sABC=5p7684ns%23%233ros3r7q49np68nq09sorn0021437803%23enqvbqr&amsparams=playerid:radiode;skey:1551271087",siteUrl:"https://www.klassikradio.de",br:192},{title:"Netherland: NPO Radio 4",src:"https://icecast.omroep.nl/radio4-bb-mp3",siteUrl:"https://www.radio4.nl",br:192},{title:"Swiss: Basel Radio Classic",src:"https://stream.srg-ssr.ch/m/rsc_de/mp3_128",siteUrl:"https://www.radioswissclassic.ch",br:128},{title:"Swiss: Opera House 1.FM",src:"https://strm112.1.fm/opera_mobile_mp3",siteUrl:"https://1.fm",br:128},{title:"UK: Classic FM",src:"https://media-ssl.musicradio.com/ClassicFM",siteUrl:"https://www.classicfm.com",br:48},{title:"USA: New York WQXR",src:"https://stream.wqxr.org/wqxr-web?nyprBrowserId=5fad42cad0701918",siteUrl:"https://www.wqxr.org",br:128}],country:[{title:"USA: Country Hits",src:"https://19763.live.streamtheworld.com/977_COUNTRY.mp3",siteUrl:"https://hitsradio.com",br:128},{title:"USA: NYC Country Live",src:"https://streaming.radiostreamlive.com/radiocountrylive_devices",siteUrl:"https://www.radiocountrylive.com",br:128},{title:"USA: Today's Country 011.FM",src:"https://listen.011fm.com/stream01",siteUrl:"https://011fm.com",br:192},{title:"USA: 650 AM WSM",src:"https://stream01048.westreamradio.com/wsm-am-mp3",siteUrl:"https://wsmradio.com",br:64},{title:"USA: Opry Nashville",src:"https://stream01051.westreamradio.com/wsm3-mp3",siteUrl:"https://wsmradio.com",br:64}],talks:[{title:"USA: California: KCRW 89.9 FM",src:"https://kcrw.streamguys1.com/kcrw_192k_mp3_on_air?listenerid=1a13cb86cbe44b773c014c34bb7bfe43&awparams=companionAds%3Atrue",siteUrl:"https://www.kcrw.com",br:192},{title:"USA: KUT 90.5 FM",src:"https://kut.streamguys1.com/kut-web",siteUrl:"https://www.kut.org",br:128},{title:"USA: NPR Radio",src:"https://npr-ice.streamguys1.com/live.mp3",siteUrl:"https://www.npr.org",br:128},{title:"USA: Portland: XRAY.FM",src:"https://listen.xray.fm/stream",siteUrl:"https://xray.fm",br:128},{title:"USA: WABE 90.1 FM",src:"https://pba-ice.wabe.org/wabe.aac",siteUrl:"https://www.wabe.org",br:96}],sport:[{title:"UK: talkSPORT",src:"https://radio.talksport.com/stream?awparams=platform:ts-tunein;lang:en",siteUrl:"https://talksport.com",br:64}],chillout:[{title:"Spain: Costa Del Mar - Chillout",src:"https://radio4.cdm-radio.com:18020/stream-mp3-Chill",siteUrl:"https://www.costadelmar-radio.com",br:96},{title:"Swiss: Chillout Lounge 1.FM",src:"https://strm112.1.fm/chilloutlounge_mobile_mp3",siteUrl:"https://www.1.fm",br:192},{title:"USA: Chilled Out 181.FM",src:"https://listen.181fm.com/181-chilled_128k.mp3",siteUrl:"https://www.181.fm",br:128}],pop:[{title:"UK: Dance UK",src:"https://dancestream.danceradiouk.com/stream/1/",siteUrl:"https://www.danceradiouk.com",br:48},{title:"UK: Magic",src:"https://stream-mz.planetradio.co.uk/magicnational.aac",siteUrl:"https://planetradio.co.uk/magic/",br:47},{title:"Swiss: Zug Top 40 1.FM",src:"https://strm112.1.fm/top40_mobile_mp3",siteUrl:"https://1.fm",br:128},{title:"Seattle: KEXP 90.3 FM",src:"https://kexp-mp3-128.streamguys1.com/kexp128.mp3",siteUrl:"https://kexp.org",br:128},{title:"USA: 977 Hits Radio",src:"https://19763.live.streamtheworld.com/977_HITSAAC_SC",siteUrl:"https://hitsradio.com",br:64}],piano:[{title:"USA: Whisperings Solo Piano",src:"https://pianosolo.streamguys1.com/live",siteUrl:"https://www.solopianoradio.com",br:96}],instrumental:[{title:"EU: Instrumental Radio",src:"https://str2b.openstream.co/959?aw_0_1st.collectionid=4097&stationId=4097&publisherId=983&k=1602000602",siteUrl:"https://instrumentalradio.eu",br:128},{title:"USA: Beautiful Instrumentals Channel",src:"https://edge4.peta.live365.net/b37545_128mp3",siteUrl:"https://www.beautifulinstrumentalschannel.com",br:128},{title:"USA: GotRadio Guitar Genius",src:"https://pureplay.cdnstream1.com/6018_128.mp3",siteUrl:"https://www.gotradio.com",br:128},{title:"USA: Instrumental Hits Radio",src:"https://panel.retrolandigital.com/listen/instrumental_hits_radio/listen",siteUrl:"https://instrumentalhitsradio.com",br:192}]},A={getCategory:t=>t&&N[t]||[]},I={isHttp:function(t){return void 0===t&&(t=""),"http"===t.split("://")[0]},filterCategoriesBy:t=>n.filter((e=>A.getCategory(e).some(t))),crCategories:()=>[...n],getCategory:A.getCategory,crFilterBy:t=>{switch(t){case"http":return t=>I.isHttp(t.src);case"https":return t=>!I.isHttp(t.src);default:return()=>!0}}},M=I,{crFilterBy:x,getCategory:L}=M,O=[...[E,T,t=>{let{getState:e}=t;return t=>r=>{if((t=>(0,o.ve)(t)&&t.type===p&&"category"in t)(r)){const t=e(),{category:i}=r,s=x(t.app.filter);r.categories=L(i).map((t=>(t.category=i,t))).filter(s)}return t(r)}}]];let H=o.Zz;const D=(0,o.Yl)(S,a,H((0,o.Tw)(...O))),R={grey:"grey",light:"#f9f9f9",sand:"#fdf1d5"},P={toBg:t=>({backgroundColor:R[t]})},V=t=>{let{dispatch:e}=t;return{...(0,o.zH)(u,e),...(0,o.zH)(y,e),...k,useSelector:s.d4,uiThemeImpl:P}};var F=r(994);const K=(0,i.q6)({}),z=(0,i.q6)({}),B=()=>({}),G=()=>{},q=t=>{const e=(0,F.NT)(z),r=(0,F.hb)((t=>{if(t.altKey||t.metaKey){const r=e[t.key];if(r){const[t,e=G]=r,i=(t||{}).current;i&&i.focus&&i.focus(),e()}}}),[e]);(0,F.vJ)((()=>{if(t)return document.addEventListener("keydown",r,!1),()=>document.removeEventListener("keydown",r,!1)}),[t,r])},W={TRANSITION:document&&void 0!==document.body.style.transition,TOUCH:document&&"ontouchstart"in document.documentElement,MEDIA_SESSION:navigator&&"mediaSession"in navigator},Y=(t,e)=>{const r=(0,F.NT)(z),i=(0,F.li)(null);return(0,F.vJ)((()=>{if(!W.TOUCH&&t)return r[t]=[i,e],()=>r[t]=void 0}),[t,e]),i};var X=0;Array.isArray;function J(t,e,r,s,o,n){e||(e={});var a,l,c=e;if("ref"in c)for(l in c={},e)"ref"==l?a=e[l]:c[l]=e[l];var d={type:t,props:c,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--X,__i:-1,__u:0,__source:o,__self:n};if("function"==typeof t&&(a=t.defaultProps))for(l in a)void 0===c[l]&&(c[l]=a[l]);return i.fF.vnode&&i.fF.vnode(d),d}const Z=t=>{let{hotKey:e,ariaLabel:r,onMouseDown:i,onMouseUp:s,onTouchStart:o,onTouchEnd:n,onClick:a,children:l}=t;const c=W.TOUCH&&o?{onTouchStart:o,onTouchEnd:n}:{onMouseDown:i,onMouseUp:s};return J("button",{ref:Y(e,a),className:"bt-circle","aria-label":r,...c,onClick:a,children:J("svg",{viewBox:"0 0 34 34",width:"100%",height:"100%",children:J("g",{children:l})})})},j=J("path",{d:"M12.458 22.667l10-6.5-10-6.5z"}),Q=J(i.FK,{children:[J("path",{d:"M11.5 10h3v13h-3v-13z"}),J("path",{d:"M17.5 10h3v13h-3v-13z"})]}),$=t=>{const[e,r,i,s]=(t=>{let{isPlaying:e,onPlay:r,onStop:i}=t;return e?["m","Mute",i,Q]:["p","Play",r,j]})(t);return J(Z,{hotKey:e,ariaLabel:r,onClick:i,children:s})},tt=(t,e,r)=>{const i=(0,F.li)(null),s=(0,F.li)(r);s.current=r;const o=()=>clearInterval(i.current);return[()=>{i.current=setInterval((()=>{e(s.current)?(o(),i.current=setInterval(t,500)):t()}),150)},o]},et=t=>{const[e,r]=(0,F.J0)((()=>!!t));return[e,(0,F.hb)((()=>r(!0)),[]),(0,F.hb)((()=>r(!1)),[])]},rt=t=>{const[e,r]=(0,F.J0)(t),[i,s]=(0,F.J0)(t);return i!==t&&(r(t),s(t)),[e,r]},it={position:"relative",width:"100%",height:18,marginTop:8,marginBottom:8,userSelect:"none",cursor:"default"},st={position:"absolute",top:8,left:0,width:"100%",height:2},ot={position:"absolute",left:0,width:"calc(15%)",height:"100%",marginRight:6,backgroundColor:"rgb(0, 188, 212)",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},nt={position:"absolute",right:0,width:"calc(85%)",height:"100%",marginLeft:6,backgroundColor:"rgb(189, 189, 189)",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},at={backgroundColor:"rgb(158, 158, 158)"},lt={zIndex:1,position:"absolute",top:0,left:"15%",width:12,height:12,cursor:"pointer",pointerEvents:"inherit",margin:"1px 0px 0px",backgroundColor:"rgb(0, 188, 212)",backgroundClip:"padding-box",border:"0px solid transparent",borderRadius:"50%",transform:"translate(-50%, -50%)",overflow:"visible",outline:"none",transition:"background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},ct={width:20,height:20},dt={position:"absolute",top:0,left:0,width:12,height:12,overflow:"visible"},ut={position:"absolute",top:-12,left:-12,width:"300%",height:36,borderRadius:"50%",backgroundColor:"rgba(0, 188, 212, 0.16)",transform:"scale(1)"},pt={top:-12,left:-12,width:"220%",height:44,border:"1px solid #4caf50"},mt=Number.isNaN,ht=t=>{},yt=W.TOUCH,gt=yt?"touchmove":"mousemove",wt=yt?"touchend":"mouseup",bt=t=>({width:"calc("+t+"%)"}),vt=yt?t=>(((t||{}).touches||[])[0]||{}).clientX||0:t=>t.clientX,ft=t=>{let{style:e,initialValue:r,step:i,min:s,max:o,onChange:n=ht}=t;const a=(0,F.li)(null),[l,c,d]=et(!1),[u,p]=rt(r),m=t=>{const e=((t,e,r)=>r>e?e:r<t?t:r)(s,o,t);p(e),n(e)},[h,y]=(t=>{const[e,r,i]=et(!1),s=(0,F.li)(!1),o=e=>{s.current||(s.current=!0,requestAnimationFrame((()=>{s.current=!1,t(e)})))},n=()=>{document.removeEventListener(gt,o),document.removeEventListener(wt,n),i()};return[e,t=>{yt||t.preventDefault(),document.addEventListener(gt,o),document.addEventListener(wt,n),r()}]})((t=>{const e=a.current;if(e){const r=e.clientWidth;let n,a=((t,e)=>{const r=e.getBoundingClientRect().left;return vt(t)-r})(t,e);a<0?a=0:a>r&&(a=r),n=a/r*(o-s),n=Math.round(n/i)*i+s,n=parseFloat(n.toFixed(2)),m(n)}})),g=yt?{onTouchStart:y}:{onMouseDown:y,onMouseEnter:c,onMouseLeave:d},w=yt?void 0:{onFocus:c,onKeyDown:t=>{const{keyCode:e}=t,r=((t,e,r)=>(t=>39===t||38===t)(r)?t+e:(t=>37===t||40===t)(r)?t-e:void 0)(u,i,e);null!=r&&(t.preventDefault(),m(r))},onBlur:d},b=l?{...nt,...at}:nt,v=h?ct:null,f=l||h?J("div",{style:{...ut,...h?pt:null}}):null,_=((t,e,r)=>{const i=(t-e)/(r-e);return mt(i)?0:Math.round(100*i)})(u,s,o),S=bt(_),U=bt(100-_),k={left:_+"%"};return J("div",{style:{...it,...e},...g,children:J("div",{ref:a,style:st,children:[J("div",{style:{...ot,...S}}),J("div",{style:{...b,...U}}),J("input",{type:"hidden",step:i,min:s,max:o,value:u,required:!0}),J("div",{role:"slider",tabIndex:0,"aria-valuenow":u,"aria-valuemin":s,"aria-valuemax":o,"aria-orientation":"horizontal","aria-labelledby":"discrete-slider-custom",style:{...lt,...v,...k},...w,children:J("div",{style:{...dt,...v},children:f})})]})})},_t=t=>J(Z,{...t,children:J("path",{d:"M8 16 H24",strokeWidth:"3"})}),St=t=>J(Z,{...t,children:[J("path",{d:"M8 16 H24",strokeWidth:"3"}),J("path",{d:"M16 8 V24",strokeWidth:"3"})]}),Ut=(t,e)=>(0,F.hb)((e=>{var r;"function"==typeof t&&(27===(r=e).keyCode||"Escape"===r.key)&&(e.preventDefault(),e.stopPropagation(),t())}),e||[]),kt={position:"absolute",top:8,right:18},Tt={transform:"translateX(264px)"},Ct={transform:"translate(0px, 0px)"},Et={display:"none",opacity:0,zIndex:-1,transition:"opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},Nt={display:"block",opacity:1,zIndex:1e3,transition:"opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},At=t=>{let{btStyle:e,children:r}=t;const{toggleDrawer:s,sApp:o,useSelector:n}=(0,F.NT)(K),a=n(o.isDrawer),l=n(o.uiTheme),c=Y("s",s),d=a?s:void 0,u=Ut(d,[d]);(0,F.vJ)((()=>{document.body.style.overflowY=a?"hidden":"auto"}));const p={...a?Ct:Tt,...P.toBg(l)},m=a?Nt:Et;return J(i.FK,{children:[J("button",{ref:c,className:"drawer-bt",style:{...kt,...e},"aria-label":"Open Drawer",onClick:s,children:J("span",{className:"drawer-span",children:J("svg",{className:"drawer-svg",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:[J("path",{fill:"none",d:"M0 0h24v24H0z"}),J("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})]})})}),J("div",{role:"presentation","aria-hidden":!a,className:"drawer-modal",style:m,onClick:d}),J("aside",{role:"presentation",className:"drawer",style:p,onKeyDown:u,children:J("div",{children:r})})]})},It=30,Mt={fromClientX:void 0},xt=t=>{const{changedTouches:e=[]}=t||{};return e[0]?e[0].clientX:void 0},Lt=t=>"number"==typeof t&&t-t==0,Ot=t=>{let{onSwipeGesture:e,dir:r="L",delta:i=It}=t;const s=(0,F.hb)((t=>{Mt.fromClientX=xt(t)}),[]),o=(0,F.hb)((t=>{((t,e,r)=>{const{fromClientX:i}=Mt;return!(!Lt(i)||!Lt(r))&&("L"===t||"U"===t?i-r>e:r-i>e)})(r,i,xt(t))&&(e(),Mt.fromClientX=void 0)}),[]);if(W.TOUCH)return{onTouchStart:s,onTouchEnd:o}},Ht="svg-close",Dt={padding:3},Rt=t=>{let{className:e=Ht,style:r,tabIndex:i=-1,onClick:s}=t;return J("button",{className:e,style:r,tabIndex:i,onClick:s,children:J("svg",{viewBox:"0 0 12 12",width:"100%",height:"100%",style:Dt,preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:"2",stroke:"#f44336",strokeLinecap:"round",children:[J("path",{d:"M 0,0 L 12,12"}),J("path",{d:"M 12,0 L 0,12"})]})})},Pt=Array.isArray,Vt=t=>Pt(t)?t[0]?t[1]:"":t||"",Ft=function(){const t=Vt(arguments.length<=0?void 0:arguments[0]),e=Vt(arguments.length<=1?void 0:arguments[1]);return t?e?t+" "+e:t:e||void 0},Kt={backgroundColor:"#1b2836"},zt=(t,e)=>t===e?Kt:void 0,Bt=t=>{let{style:e,className:r,tabIndex:i=-1,initialValue:s="1",oneC:o="One",twoC:n="Two",threeC:a="Three",onClick:l}=t;const[c,d]=(0,F.J0)(s),u=Ft("bt-triple",r),p=zt(c,"1"),m=zt(c,"2"),h=zt(c,"3"),y=(0,F.hb)((t=>{l(t),d(t)}),[l]);return J("div",{className:u,style:e,children:[J("button",{className:"bt-triple__one",style:p,tabIndex:i,onClick:y.bind(null,"1"),children:o}),J("button",{className:"bt-triple__two",style:m,tabIndex:i,onClick:y.bind(null,"2"),children:n}),J("button",{className:"bt-triple__three",style:h,tabIndex:i,onClick:y.bind(null,"3"),children:a})]})},Gt={display:"inline-block",width:16,height:16},qt=t=>{let{style:e,color:r="#64e346"}=t;return J("span",{style:{...Gt,...e},children:J("svg",{viewBox:"0 0 16 16",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:J("path",{className:"check-in",d:"M 2,5 L 8,14 14,1",stroke:r,fill:"transparent",strokeWidth:"3",strokeLinecap:"round"})})})},Wt=(t,e)=>{const r=(0,F.li)(0);return(0,F.hb)((i=>{if(0!==t){const s=r.current,{timeStamp:o}=i;o-s>t&&e(i),r.current=o}else e(i)}),[t,e])},Yt={textDecoration:"underline"},Xt=(t,e)=>{const r=e?t.toLowerCase().indexOf(e):-1;if(-1!==r){const e=t.substring(0,r),s=t.substring(r,r+1),o=t.substring(r+1);return J(i.FK,{children:[J("span",{children:e}),J("span",{style:Yt,children:s}),J("span",{children:o})]})}return t},Jt=t=>{let{className:e,style:r,caption:i="",hotKey:s,children:o}=t;return J("span",{className:e,style:r,children:[Xt(i,s),o]})},Zt="bt-flat__div",jt={color:"#607d8b"},Qt=t=>{let{timeout:e=500,className:r,style:i,clDiv:s=Zt,clCaption:o,isPrimary:n,caption:a,tabIndex:l,onClick:c,children:d}=t;const u=Wt(e,c),p=n?{...i,...jt}:i,m=Ft("bt-flat",r),h=Ft("bt-flat__span",o);return J("button",{className:m,style:p,tabIndex:l,onClick:u,children:J("div",{className:s,children:[J(Jt,{className:h,caption:a}),d]})})},$t=()=>{const{sApp:t,addCategory:e,removeCategory:r,useSelector:i}=(0,F.NT)(K),s=i(t.topics),o=i(t.categories),n=i(t.isDrawer)?0:-1;return J("ul",{children:s.map((t=>{const i=o[t];return J("li",{children:J(Qt,{className:"drawer__list-bt",caption:t,timeout:0,tabIndex:n,onClick:i?()=>r(t):()=>e(t),children:i&&J(qt,{})})},t)}))})},te=()=>{const{setUiTheme:t,toggleDrawer:e}=(0,F.NT)(K);return J("div",{className:"drawer__list",...Ot({onSwipeGesture:e,dir:"R"}),children:[J("div",{className:"drawer__title",children:[J(Bt,{className:"mr-8",oneC:"GREY",twoC:"LIGHT",threeC:"SAND",onClick:t}),J(Rt,{className:"drawer__bt-close",onClick:e})]}),J($t,{})]})},ee=()=>J(At,{children:J(te,{})}),re={height:35,transition:"height 0.3s ease-out"},ie={display:"inline-block",width:200,maxWidth:"calc(100vw - 210px)",marginRight:16},se={position:"relative",top:-10,display:"inline-block",color:"#00bcd4",width:46,paddingLeft:5,fontSize:22,fontWeight:400},oe={display:"inline-block",width:12},ne=(t,e)=>({onMouseDown:t,onMouseUp:e,onTouchStart:t,onTouchEnd:e}),ae=t=>t>.8,le=t=>t<.2,ce=t=>{let{volume:e,setVolume:r,onIncrease:i,onDecrease:s}=t;const[o,n]=tt(i,ae,e),[a,l]=tt(s,le,e),c=ne((()=>{0!==e&&a()}),l),d=ne((()=>{100!==e&&o()}),n);return(0,F.vJ)((()=>{0===e&&l(),100===e&&n()})),J("div",{id:"volume",style:re,children:[J("div",{style:se,children:(u=e,(t=>"number"==typeof t&&t-t==0)(u)?Math.round(100*u):"")}),J(ft,{style:ie,initialValue:e,step:.05,min:0,max:1,onChange:r}),J(_t,{hotKey:"-",ariaLabel:"Increase Volume",...c,onClick:s}),J("div",{style:oe}),J(St,{hotKey:"+",ariaLabel:"Decrease Volume",...d,onClick:i}),J(ee,{})]});var u},de={display:"block"},ue={display:"none"},pe=t=>{let{isShow:e,className:r,style:i,children:s}=t;const o=e?de:ue;return J("div",{className:Ft(r,[e,"show-popup"]),style:{...i,...o},children:s})},{isHttp:me}=M,he=t=>{let{src:e}=t;return J("span",{children:[" ",me(e)?"(http)":""]})},ye={transform:"rotate(90deg) scale(1.3, 1.3) translate(14px, -10px)"},ge={color:"#04477b",fontSize:"17px",display:"inline-block",maxWidth:340,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},we={color:"darkgray"},be={color:"#1b2836"},ve=t=>t[0].toUpperCase()+t.substring(1),fe=t=>{let{category:e,br:r}=t;if(!(i=e)||"string"!=typeof i)return null;var i;const s=r?" ("+r+" Kbps)":"";return J("div",{children:[J("span",{style:we,children:"Category:"})," ",J("span",{style:be,children:[ve(e),s]})]})},_e=(t,e)=>{const r=(t||"").split("://")[0];return"https"===r||e&&"http"===r?t:void 0},Se=t=>{let{isHttp:e,siteUrl:r}=t;const i=_e(r,e);return i?J("a",{href:i,style:ge,target:"_blank",rel:"noreferrer noopener",children:i}):null},Ue="station-descr",ke=Ue+"__bt",Te=Ue+"__info",Ce=t=>{let{isHttp:e,station:r}=t;const[i,s]=(0,F.J0)(!0),o=i?ye:void 0,{title:n,src:a,siteUrl:l,category:c,br:d}=r||{};return r?J("div",{className:Ue,children:[J("button",{className:ke,onClick:()=>s((t=>!t)),children:[J("span",{children:n}),J(he,{src:a}),J("span",{className:"item-descr__bt-more",style:o,children:">"})]}),J(pe,{className:Te,isShow:i,children:J("div",{children:[J(fe,{category:c,br:d}),J(Se,{isHttp:e,siteUrl:l})]})})]}):null},Ee=t=>{let{station:e,hotKey:r,onClick:i}=t;const{title:s,src:o}=e;return J("button",{ref:Y(r),className:"item-station",onClick:i,children:[J("span",{children:s}),J(he,{src:o}),Boolean(r)&&J("span",{className:"item-station__access",children:r})]})},Ne=t=>t<5?""+(t+1):void 0,Ae=()=>{const{toggleDrawer:t,setCurrentStation:e,sApp:r,useSelector:i}=(0,F.NT)(K),s=i(r.isHttp),o=i(r.currentStation),n=i(r.stations);return J("div",{className:"item-list",...Ot({onSwipeGesture:t}),children:[J(Ce,{isHttp:s,station:o}),n.map(((t,r)=>J(Ee,{station:t,hotKey:Ne(r),onClick:e.bind(null,t,r)},t.title)))]})},Ie={Command:$,Volume:ce,List:Ae};var Me=r(196);const xe=t=>parseFloat(t.toFixed(2));let Le=null;const Oe={volume:.25,autoplay:!1,html5:!0,format:["webm","mpeg","mp3","acc"]};let He=!0;const De={INIT_VOLUME:.2,checkInitVolume:()=>{He&&(Me.Howler.volume(De.INIT_VOLUME),He=!1)},getVolume:()=>Me.Howler.volume(),unload:()=>{Le&&(Le.unload(),Le.off())},init:(t,e,r)=>{try{De.checkInitVolume();const i=Me.Howler.volume();return De.unload(),Le=new Me.Howl({...Oe,src:t,onloaderror:e,onplayerror:r}),Me.Howler.volume(i),!0}catch(t){return Le=null,console.log(t.message),!1}},play:()=>!!Le&&(Le.play(),!0),stop:()=>{Le&&Le.stop()},setVolume:t=>(Me.Howler.volume(xe(t)),t),increaseVolume:function(t){void 0===t&&(t=.05),De.checkInitVolume();const e=xe(Me.Howler.volume()+t);return e<=1&&Me.Howler.volume(e),Me.Howler.volume()},decreaseVolume:function(t){void 0===t&&(t=.05),De.checkInitVolume();const e=xe(Me.Howler.volume()-t);return e>=0&&Me.Howler.volume(e),Me.Howler.volume()}},Re=De,Pe="audio__title",Ve="audio__title audio__title--err",Fe=t=>{let{station:e,msgErr:r,title:i}=t;const s=e&&e.title||"",o=r&&s;return J("div",{className:o?Ve:Pe,children:o?r+" "+s:s||i})},Ke="equalizer--not-playing",ze=t=>{let{isPlaying:e,isUnloaded:r,unload:i}=t;return e?J("div",{className:"equalizer"}):r?J("div",{className:Ke}):J("button",{className:Ke,"data-loader":"circle",onClick:i})},Be=Re.INIT_VOLUME,Ge="Radio Player v0.3.0",qe={SET_LOADING:"SET_LOADING",SET_PLAYING:"SET_PLAYING",PAUSE:"PAUSE",UNLOAD:"UNLOAD",STOP:"STOP",SET_VOLUME:"SET_VOLUME",SET_TITLE:"SET_TITLE",SET_ERROR:"SET_ERROR"},We=(t,e)=>{switch(e.type){case qe.SET_LOADING:return{...t,isUnloaded:!1,isPlaying:!1,msgErr:""};case qe.SET_PLAYING:return{...t,isPlaying:!0,isUnloaded:!1};case qe.PAUSE:return{...t,isPlaying:!1};case qe.UNLOAD:return{...t,isUnloaded:!0};case qe.STOP:return{...t,isPlaying:!1,isUnloaded:!0};case qe.SET_VOLUME:{const{volume:r=Be}=e;return{...t,volume:r}}case qe.SET_TITLE:{const{title:r=Ge}=e;return{...t,title:r}}case qe.SET_ERROR:{const{msgErr:r=""}=e;return{...t,msgErr:r,isPlaying:!1,isUnloaded:!0}}default:throw new Error("Unsupported action type: "+e.type)}};We.A=qe;const Ye=We,Xe=Ye.A,Je={display:"flex",alignItems:"center",paddingBottom:4},Ze=function(t){void 0===t&&(t=""),W.MEDIA_SESSION&&(navigator.mediaSession.metadata=new MediaMetadata({title:Ge,artist:t}))},je={msgErr:"",title:Ge,isUnloaded:!0,isPlaying:!1,volume:Be},Qe=()=>{const t=(0,F.li)(null),{uiThemeImpl:e,sApp:r,useSelector:i}=(0,F.NT)(K),s=i(r.uiTheme),o=i(r.currentStation),[n,a]=(0,F.WO)(Ye,je),{isUnloaded:l,isPlaying:c,volume:d,title:u,msgErr:p}=n,m=(0,F.hb)((t=>a({type:Xe.SET_VOLUME,volume:Re.setVolume(t)})),[]),h=(0,F.hb)((()=>a({type:Xe.SET_VOLUME,volume:Re.increaseVolume(.01)})),[]),y=(0,F.hb)((()=>a({type:Xe.SET_VOLUME,volume:Re.decreaseVolume(.01)})),[]),g=(0,F.hb)((()=>{Re.stop(),Re.unload(),a({type:Xe.STOP})}),[]),w=t=>{a({type:Xe.SET_ERROR,msgErr:t}),Ze()};(0,F.vJ)((()=>{W.MEDIA_SESSION&&navigator.mediaSession.setActionHandler("pause",g)}),[]),(0,F.vJ)((()=>(o&&o.src&&Re.init(o.src,w.bind(null,"Load Error"),w.bind(null,"Play Error"))&&a({type:Xe.SET_LOADING}),()=>{Re.unload()})),[o]);return J("div",{className:"audio-player",style:e.toBg(s),children:[J(Ie.Volume,{volume:d,setVolume:m,onIncrease:h,onDecrease:y}),J("div",{style:Je,children:[J(Ie.Command,{isPlaying:c,onPlay:()=>{var e;e=t,clearTimeout(e.current),e.current=null,!p&&Re.play()?(a({type:Xe.SET_PLAYING}),Ze(o&&o.title||Ge)):(a({type:Xe.SET_TITLE,title:"At first, please, choose a radio station."}),Ze())},onStop:()=>{Re.stop(),t.current=setTimeout((()=>a({type:Xe.UNLOAD})),6e4),a({type:Xe.PAUSE})}}),J(Fe,{station:o,msgErr:p,title:u}),J(ze,{isPlaying:c,isUnloaded:l,unload:()=>{Re.unload(),a({type:Xe.UNLOAD}),Ze()}})]})]})},$e=()=>(q(!0),J("div",{className:"app-radio-player",children:[J(Qe,{}),J(Ie.List,{})]})),tr=V(D),er=B();(0,i.XX)(J(s.Kq,{store:D,children:J(z.Provider,{value:er,children:J(K.Provider,{value:tr,children:J($e,{})})})}),document.getElementById("app"))}},t=>{var e;e=785,t(t.s=e)}]);