(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{230:function(e,t,c){"use strict";c.d(t,"a",(function(){return de}));var n=c(11),i=c.n(n),r=c(126),o=c(236),l=c(0),a=c.n(l),s=c(9),h=c.n(s),d=c(10),j="#0b0b0b",u="#1E2024",b="#808080",f="#ccc",x=["#f44336","#e91e63","#EB144C","#9900EF","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#7BDCB5","#00D084","#ffeb3b","#ffc107","#ff9800","#ff5722","#607d8b","#999","#ABB8C3","black","white"],g=c(30);var y=c(205),w=c.n(y),O=c(206),p=c.n(O);function m(e){return new Promise((function(t,c){var n=new Image;n.crossOrigin="anonymous",n.onload=function(){return t(n)},n.onerror=function(){return c(n)},n.src=e}))}function C(e,t){var c=t.canvas;t.drawImage(e,c.width/2-e.width/2,c.height/2-e.height/2)}function R(e){var t,c,n,i,r,o;return h.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(t=e.color,c=e.imageUrl,n=e.width,i=e.height,(r=document.createElement("canvas")).width=n,r.height=i,(o=r.getContext("2d")).fillStyle=t,o.fillRect(0,0,r.width,r.height),!c){l.next=12;break}return l.next=10,h.a.awrap(m(c));case 10:C(l.sent,o);case 12:return l.abrupt("return",r.toDataURL());case 13:case"end":return l.stop()}}),null,null,null,Promise)}function v(e){var t,c,n,i,r;return h.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.image,c=e.color,o.next=3,h.a.awrap(R({color:c,imageUrl:t,width:1242,height:2436}));case 3:return n=o.sent,i=(l=n).substring(l.indexOf("base64,")+"base64,".length),o.next=7,h.a.awrap(P({splash:i}));case 7:r=o.sent,"expo-splashscreen.zip",w.a.saveAs(r,"expo-splashscreen.zip");case 10:case"end":return o.stop()}var l}),null,null,null,Promise)}function P(e){var t,c,n;return h.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.splash,(c=new p.a).file("splash.png",t,{base64:!0}),i.next=5,h.a.awrap(c.generateAsync({type:"blob"}));case 5:return n=i.sent,i.abrupt("return",n);case 7:case"end":return i.stop()}}),null,null,null,Promise)}var S=c(38),k={medium:"Poppins_500Medium",semi:"Poppins_600SemiBold",bold:"Poppins_700Bold"},D=12,z=18,B=30,A=c(15).a.create({container:{flex:1,backgroundColor:j},configContainer:{flex:10,backgroundColor:j,justifyContent:"center",flexDirection:"column",paddingHorizontal:10,alignItems:"baseline"},config:{alignSelf:"center",width:"85%",flex:1,justifyContent:"center"},preview:{flex:6,backgroundColor:u,alignItems:"center",justifyContent:"center"},title:{letterSpacing:-.5,color:f,fontSize:B,fontFamily:k.bold},previewTitle:{color:f,fontWeight:"bold",fontSize:z,marginBottom:40,fontFamily:k.regular,letterSpacing:-.8},previewContainer:{justifyContent:"center",alignItems:"center",width:"60%",height:"70%",backgroundColor:u,borderRadius:20,shadowColor:j,shadowOffset:{width:5,height:5},shadowOpacity:2,shadowRadius:30},downloadButton:{paddingHorizontal:20,paddingVertical:10,backgroundColor:b,borderRadius:15},downloadButtonDisabled:{paddingHorizontal:20,paddingVertical:10,backgroundColor:b,opacity:.2,borderRadius:15},downloadButtonText:{color:j,fontFamily:k.medium},subtitle:{color:"gray",fontFamily:k.regular,fontSize:z,letterSpacing:-.5,width:"95%"},uploadContainer:{width:"90%",backgroundColor:u,height:100,borderRadius:15,marginVertical:20,justifyContent:"center",padding:20},dot:{width:5,height:"90%",marginHorizontal:10,backgroundColor:b,borderRadius:100},row:{flexDirection:"row",alignItems:"center",height:"100%"},buttonText:{fontFamily:k.medium},logoPlaceholder:{width:100,height:100,borderRadius:10,borderWidth:2,borderStyle:"dashed",borderColor:"gray"},content:{flex:1,flexDirection:"row"},header:{marginBottom:30},footerContainer:{position:"absolute",bottom:20},footerText:{color:f,fontFamily:k.medium,fontSize:D},link:{color:b,fontFamily:k.medium},logo:{width:100,height:100},emptyContainer:{flex:1,justifyContent:"center",alignItems:"center"}}),F=c(78),M=c(5);function V(e){var t=e.title,c=e.disabled,n=e.onPress,i=e.style;return Object(M.jsx)(F.a,{disabled:c,onPress:n,style:[c?A.downloadButtonDisabled:A.downloadButton,i],children:Object(M.jsx)(S.a,{style:A.downloadButtonText,children:t})})}var E=c(232),T=c(69),H=c(233),I=c(23),L=c.n(I),Z=c(59),W=c.n(Z),_=c(58),U=c(130),G=c(125),N=c.n(G),J=["isMobile","onValueChanged"];function q(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function Y(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?q(Object(c),!0).forEach((function(t){L()(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):q(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}function K(e){var t=e.size,c=e.color,n=e.style;return Object(M.jsx)(d.a,{style:[{width:t,height:t,borderRadius:t/2,borderColor:"white",borderWidth:2,backgroundColor:c},n]})}function Q(e){var t=e.isMobile,c=e.onValueChanged,n=W()(e,J),r=a.a.useState("FFFFFF"),o=i()(r,2),l=o[0],s=o[1],h=a.a.useMemo((function(){return x.reverse()}),[]);return Object(M.jsxs)(_.a,Y(Y({},n),{},{style:[t?{minHeight:48,maxHeight:48}:{flexShrink:1,flexGrow:0,maxWidth:300},n.style],contentContainerStyle:[{paddingVertical:12},!t&&{width:"100%",flexDirection:"row",flexWrap:"wrap"},n.contentContainerStyle],horizontal:t,pagingEnabled:!0,children:[h.map((function(e){return Object(M.jsx)(F.a,{onPress:function(){return c(e)},children:Object(M.jsx)(K,{size:24,color:e,style:{margin:t?12:6}})},e)})),Object(M.jsx)(X,{size:24,value:l,onValueChanged:s,onSubmit:function(e){c(e)}})]}))}function X(e){var t=e.size,c=e.value,n=e.onValueChanged,i=e.onSubmit;return Object(M.jsxs)(d.a,{style:[{height:t,flex:1,minWidth:275,margin:6,borderRadius:t/2,borderWidth:2,flexDirection:"row",overflow:"hidden"},{borderColor:"gray",backgroundColor:"gray"}],children:[Object(M.jsx)(d.a,{style:{width:t,height:t-4,justifyContent:"center",alignItems:"center"},children:Object(M.jsx)(S.a,{style:{alignSelf:"center",color:"#98A1A4"},children:"#"})}),Object(M.jsx)(U.a,{autoCapitalize:"none",autoCorrect:!1,value:c.replace("#",""),onChangeText:function(e){n(e),function(e){if("transparent"===e)return!0;var t="#"===String(e).charAt(0)?1:0;return e.length!==4+t&&e.length<7+t&&N()(e).isValid()}(e)&&i("#"+N()(e).toHex())},style:{flex:1,paddingHorizontal:4,color:"#fff",outlineColor:"transparent"}})]})}var $=function(){var e=a.a.useCallback((function(){window.open("https://twitter.com/mouhamedaly01")}),[]),t=a.a.useCallback((function(){window.open("https://github.com/Sidibedev/expo-splashscreen-generator")}),[]);return Object(M.jsx)(d.a,{style:A.footerContainer,children:Object(M.jsxs)(S.a,{style:A.footerText,children:["Made with expo by",Object(M.jsxs)(S.a,{style:A.link,onPress:e,children:[" ","@mouhamedaly"]}),"  | ",Object(M.jsx)(S.a,{style:A.link,onPress:t,children:"Github Project"})]})})},ee=a.a.memo((function(e){var t=e.setColor,c=e.setLogo;console.log("setLogo: ");var n=a.a.useState(!1),r=i()(n,2),o=r[0],l=r[1],s=function(){return l(!o)};return Object(M.jsx)(d.a,{style:A.configContainer,children:Object(M.jsxs)(d.a,{style:A.config,children:[Object(M.jsxs)(d.a,{style:A.header,children:[Object(M.jsx)(S.a,{style:A.title,children:"Generate your Expo SplashScreen"}),Object(M.jsx)(S.a,{style:A.subtitle,children:"Upload your awesome logo, select your color and download your splashscreen in PNG format and with good dimensions"})]}),Object(M.jsx)(d.a,{style:A.uploadContainer,children:Object(M.jsxs)(d.a,{style:[A.row,{justifyContent:"space-between"}],children:[Object(M.jsxs)(d.a,{style:A.row,children:[Object(M.jsx)(d.a,{style:A.dot}),Object(M.jsx)(S.a,{style:A.subtitle,children:"Upload your logo"})]}),Object(M.jsx)(V,{title:"Upload",onPress:function(){var e;return h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.awrap(E.a({mediaTypes:T.a.All,allowsEditing:!0,aspect:[4,3],quality:1}));case 2:(e=t.sent).cancelled||c(e.uri);case 4:case"end":return t.stop()}}),null,null,null,Promise)}})]})}),Object(M.jsx)(d.a,{style:A.uploadContainer,children:Object(M.jsxs)(d.a,{style:[A.row,{justifyContent:"space-between"}],children:[Object(M.jsxs)(d.a,{style:A.row,children:[Object(M.jsx)(d.a,{style:A.dot}),Object(M.jsx)(S.a,{style:A.subtitle,children:"Select your background color"})]}),Object(M.jsx)(H.a,{isVisible:o,content:Object(M.jsx)(Q,{onValueChanged:t}),closeOnContentInteraction:!1,backgroundColor:"rgba(0,0,0,0)",contentStyle:{backgroundColor:"#F2F2F2",marginTop:10},animated:!0,arrowSize:{width:16,height:8},placement:"bottom",showChildInTooltip:!1,onClose:s,children:Object(M.jsx)(V,{title:"Select color",onPress:s})})]})}),Object(M.jsx)($,{})]})})})),te=c(71),ce=c(306),ne=a.a.memo((function(e){var t=e.logo,c=e.onDownload,n=e.backgroundColor;return Object(M.jsxs)(d.a,{style:A.preview,children:[Object(M.jsx)(S.a,{style:A.previewTitle,children:"Your awesome SplashScreen"}),Object(M.jsx)(ce.a,{style:[A.previewContainer,{backgroundColor:n}],from:{scale:.3,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring"},children:t?Object(M.jsx)(te.a,{resizeMode:"contain",source:{uri:t},style:A.logo}):Object(M.jsx)(d.a,{style:A.logoPlaceholder})}),Object(M.jsx)(V,{style:{marginTop:40},title:"Download SplashScreen",onPress:c,disabled:!t})]})})),ie=c(17),re=c.n(ie);function oe(e){return Object(M.jsxs)(re.a,{"data-name":"Layer 1",width:"300.12956",height:"200.70146",viewBox:"0 0 743.12956 477.70146",children:[Object(M.jsx)(ie.Path,{d:"M856.58507,452.44486l.96659,123.00988a6.50753,6.50753,0,0,1-6.44873,6.55087l-14.75882.116a6.50752,6.50752,0,0,1-6.55087-6.44872L828.82665,452.663a6.50753,6.50753,0,0,1,6.44873-6.55087l14.75882-.116A6.50752,6.50752,0,0,1,856.58507,452.44486Z",transform:"translate(-228.43522 -211.14927)",fill:"#808080"}),Object(M.jsx)(ie.Rect,{x:"419.09695",y:"475.46074",width:"324.03261",height:"2.24072",fill:"#3f3d56"}),Object(M.jsx)(ie.Path,{d:"M803.69878,687.86319H788.9395a6.50753,6.50753,0,0,1-6.5-6.5V558.34951a6.50753,6.50753,0,0,1,6.5-6.5h14.75928a6.50753,6.50753,0,0,1,6.5,6.5V681.36319A6.50753,6.50753,0,0,1,803.69878,687.86319Z",transform:"translate(-228.43522 -211.14927)",fill:"#2f2e41"}),Object(M.jsx)(ie.Path,{d:"M832.89116,687.86319H818.1314a6.50753,6.50753,0,0,1-6.5-6.5V558.34951a6.50753,6.50753,0,0,1,6.5-6.5h14.75976a6.50753,6.50753,0,0,1,6.5,6.5V681.36319A6.50753,6.50753,0,0,1,832.89116,687.86319Z",transform:"translate(-228.43522 -211.14927)",fill:"#2f2e41"}),Object(M.jsx)(ie.Circle,{cx:"582.48011",cy:"145.40278",r:"53.51916",fill:"#808080"}),Object(M.jsx)(ie.Path,{d:"M803.03978,376.388l.05566-2c-3.7207-.10352-7.001-.33692-9.46582-2.1377a6.148,6.148,0,0,1-2.38135-4.52832,3.51437,3.51437,0,0,1,1.15283-2.89453c1.63623-1.38184,4.269-.93457,6.188-.05469l1.65479.75879-3.17334-23.19043-1.98145.27148,2.69922,19.72657c-2.60742-.7666-5.02344-.43653-6.67822.96093a5.471,5.471,0,0,0-1.86035,4.49219,8.13266,8.13266,0,0,0,3.20019,6.07324C795.61692,376.18,799.73265,376.29526,803.03978,376.388Z",transform:"translate(-228.43522 -211.14927)",fill:"#2f2e41"}),Object(M.jsx)(ie.Rect,{x:"546.08307",y:"133.16455",width:"10.77148",height:"2",fill:"#2f2e41"}),Object(M.jsx)(ie.Rect,{x:"580.08307",y:"133.16455",width:"10.77148",height:"2",fill:"#2f2e41"}),Object(M.jsx)(ie.Path,{d:"M864.83678,490.04139h-44v-49a22,22,0,0,1,44,0Z",transform:"translate(-228.43522 -211.14927)",fill:"#ccc"}),Object(M.jsx)(ie.Path,{d:"M783.15233,459.30577l-92.07449,81.576a6.50752,6.50752,0,0,1-9.17563-.55473l-9.78756-11.04717a6.50753,6.50753,0,0,1,.55473-9.17564l92.0745-81.57605a6.50752,6.50752,0,0,1,9.17563.55474l9.78756,11.04717A6.50752,6.50752,0,0,1,783.15233,459.30577Z",transform:"translate(-228.43522 -211.14927)",fill:"#808080"}),Object(M.jsx)(ie.Path,{d:"M760.24006,490.235,731.32131,457.0732l36.9302-32.205A22,22,0,0,1,797.17026,458.03Z",transform:"translate(-228.43522 -211.14927)",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{width:"233.59252",height:"157",fill:"#808080"}),Object(M.jsx)(ie.Polygon,{points:"2 8.349 4 8.349 4 3.349 9 3.349 9 1.349 2 1.349 2 8.349",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"219.9934",y:"1.34863",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"170.34789",y:"1.34863",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"195.17064",y:"1.34863",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"269.63891",y:"1.34863",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"294.46166",y:"1.34863",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"244.81615",y:"1.34863",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"46.23412",y:"1.34863",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"21.41137",y:"1.34863",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"71.05688",y:"1.34863",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"120.70238",y:"1.34863",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"95.87963",y:"1.34863",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"145.52514",y:"1.34863",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"319.28441",y:"1.34863",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Polygon,{points:"344.107 1.349 344.107 3.349 349.107 3.349 349.107 8.349 351.107 8.349 351.107 1.349 344.107 1.349",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"349.10717",y:"170.2002",width:"2",height:"12.4502",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"349.10717",y:"145.2998",width:"2",height:"12.4502",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"349.10717",y:"95.49902",width:"2",height:"12.4502",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"349.10717",y:"45.69922",width:"2",height:"12.4502",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"349.10717",y:"70.59961",width:"2",height:"12.44922",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"349.10717",y:"120.39941",width:"2",height:"12.4502",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"349.10717",y:"195.09961",width:"2",height:"12.4502",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"349.10717",y:"20.79883",width:"2",height:"12.4502",fill:"#ccc"}),Object(M.jsx)(ie.Polygon,{points:"349.107 225 344.107 225 344.107 227 351.107 227 351.107 220 349.107 220 349.107 225",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"294.46166",y:"225",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"95.87963",y:"225",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"46.23412",y:"225",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"71.05688",y:"225",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"21.41137",y:"225",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"219.9934",y:"225",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"269.63891",y:"225",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"244.81615",y:"225",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"319.28441",y:"225",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"170.34789",y:"225",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"145.52514",y:"225",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"120.70238",y:"225",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"195.17064",y:"225",width:"12.41162",height:"2",fill:"#ccc"}),Object(M.jsx)(ie.Polygon,{points:"4 220 2 220 2 227 9 227 9 225 4 225 4 220",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"1.99975",y:"70.59863",width:"2",height:"12.4502",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"1.99975",y:"95.49902",width:"2",height:"12.4502",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"1.99975",y:"20.79883",width:"2",height:"12.4502",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"1.99975",y:"45.69824",width:"2",height:"12.4502",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"1.99975",y:"195.09961",width:"2",height:"12.4502",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"1.99975",y:"170.19922",width:"2",height:"12.4502",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"1.99975",y:"145.2998",width:"2",height:"12.44922",fill:"#ccc"}),Object(M.jsx)(ie.Rect,{x:"1.99975",y:"120.39941",width:"2",height:"12.4502",fill:"#ccc"}),Object(M.jsx)(ie.Polygon,{points:"399.14 258.684 397.148 258.881 397.98 267.23 302.732 183.27 311.12 183.048 311.065 181.047 299.058 181.366 300.249 193.317 302.241 193.12 301.407 184.767 396.66 268.733 388.269 268.953 388.323 270.954 400.329 270.636 399.14 258.684",fill:"#3f3d56"}),Object(M.jsx)(ie.Circle,{cx:"349.69488",cy:"225.99973",r:"11",fill:"#3f3d56"}),Object(M.jsx)(ie.Circle,{cx:"371.07435",cy:"244.84564",r:"6",fill:"#ccc"}),Object(M.jsx)(ie.Circle,{cx:"327.56525",cy:"206.49257",r:"6",fill:"#ccc"}),Object(M.jsx)(ie.Path,{d:"M844.22828,574.72958h-67.0625a6.50753,6.50753,0,0,1-6.5-6.5V425.754a6.50753,6.50753,0,0,1,6.5-6.5h67.0625a6.50753,6.50753,0,0,1,6.5,6.5V568.22958A6.50753,6.50753,0,0,1,844.22828,574.72958Z",transform:"translate(-228.43522 -211.14927)",fill:"#ccc"}),Object(M.jsx)(ie.Path,{d:"M843.9071,374.86791c-4.897-1.91065-7.64882-6.70422-9.02856-11.53447-1.6362-5.72811-1.38033-11.58447-1.31279-17.4745.07474-6.51776-.13724-13.34152-3.24274-19.23871-2.83114-5.3762-7.886-9.03221-13.45915-11.18755-13.58354-5.25325-28.43928-.81943-42.51253-2.22417-6.53215-.652-13.31322-2.49529-18.54993-6.61568-4.54114-3.5731-8.20364-8.94839-8.76615-14.80981-1.23536-12.87251,12.566-21.09281,24.1399-19.50049a1.55423,1.55423,0,0,0,1.84518-1.04766,1.50916,1.50916,0,0,0-1.04766-1.84517c-10.86982-1.49546-23.54241,3.9721-27.13485,14.9841-1.91765,5.87825-.53507,12.32936,2.702,17.47a29.68339,29.68339,0,0,0,15.05358,11.80562c6.651,2.477,13.91244,3.01812,20.95445,2.872,8.193-.17,16.4724-1.36718,24.64368-.22255,6.11995.85728,12.3733,3.20219,16.67624,7.78942,4.76791,5.08291,5.63553,12.1406,5.70462,18.81765.06614,6.39191-.48046,12.773.87812,19.07741,1.145,5.3133,3.55991,10.625,8.07158,13.88574a15.91838,15.91838,0,0,0,3.58754,1.89165c1.79944.70209,2.57929-2.19764.79751-2.89284Z",transform:"translate(-228.43522 -211.14927)",fill:"#2f2e41"})]})}var le=function(){return Object(M.jsxs)(d.a,{style:A.emptyContainer,children:[Object(M.jsx)(oe,{}),Object(M.jsx)(S.a,{style:[A.title,{textAlign:"center",width:"80%",marginTop:30}],children:"Not yet available on mobile or tablet"}),Object(M.jsx)(S.a,{style:[A.subtitle,{textAlign:"center"}],children:"Instead use your computer to download your splashscreen and include it into your expo project "})]})},ae=c(231),se=function(){var e=a.a.useState(u),t=i()(e,2),c=t[0],n=t[1],r=a.a.useState(null),o=i()(r,2),s=o[0],j=o[1],b=function(){var e=Object(l.useState)((function(){return g.a.get("window")})),t=i()(e,2),c=t[0],n=t[1];return Object(l.useEffect)((function(){function e(e){var t=e.window;n(t)}return g.a.addEventListener("change",e),n(g.a.get("window")),function(){g.a.removeEventListener("change",e)}}),[]),c}().width,f=a.a.useMemo((function(){return b<1e3}),[b]);return Object(M.jsx)(d.a,{style:A.container,children:f?Object(M.jsx)(le,{}):Object(M.jsxs)(d.a,{style:A.content,children:[Object(M.jsx)(ee,{setColor:n,setLogo:j}),Object(M.jsx)(ne,{logo:s,onDownload:function(){return h.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.awrap(v({image:s,color:c}));case 2:ae.a("DOWNLOAD_SPLASHSCREEN",{screen:"home",purpose:"Download splashscreen"});case 3:case"end":return e.stop()}}),null,null,null,Promise)},backgroundColor:c})]})})},he=function(){return Object(M.jsx)(se,{})};function de(){var e=Object(r.d)({Poppins_700Bold:r.c,Poppins_500Medium:r.a,Poppins_600SemiBold:r.b});return i()(e,1)[0]?Object(M.jsx)(he,{}):Object(M.jsx)(o.a,{})}},239:function(e,t,c){e.exports=c(296)}},[[239,1,2]]]);
//# sourceMappingURL=app.0cffc780.chunk.js.map