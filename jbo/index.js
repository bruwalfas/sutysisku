"use strict";var e=document.getElementById("content"),n=document.getElementById("ciska"),t=document.getElementById("clear"),a=document.getElementById("outp"),i=document.getElementById("descr"),r=document.getElementById("drata"),c=document.getElementById("citri"),s=document.getElementById("sidju"),o=document.getElementById("kernelo_lo_cpacu"),l=new Worker("worker.js?sisku=1591531031760"),u=document.querySelector("#title > font"),d=document.querySelector("#site-title"),p=!1,g=3500;d.classList.add("desktop-mode-title-color");var m=document.getElementById("galtu-dasri"),f=document.getElementById("catni"),h=document.getElementById("cnano"),v=document.getElementById("rimni"),y=document.querySelectorAll("#title > img"),k=document.getElementById("scrollToTop");function switchBorderScroll(){e.scrollTop>200?e.scrollTop=0:e.scrollTop=e.scrollHeight}e.onscroll=function(){e.scrollTop>200?(k.style.display="block",k.classList.remove("dizlo")):k.classList.add("dizlo")};var w,b,E,L={BE:"bei",BEI:"be'o",BY:"boi",COI:"do'u",DOI:"do'u",FIhO:"fe'u",FUhE:"fu'o",GIhA:"vau",GOI:"ge'u",JOhI:"te'u",KE:"ke'e",LAhE:"lu'u",LA:"ku",LE:"ku",LI:"lo'o",LOhU:"le'u",LU:"li'u",ME:"me'u","NAhE+BO":"lu'u",NOI:"ku'o",NUhI:"nu'u",NU:"kei",PA:"boi",PEhO:"ku'e",SEI:"se'u",SOI:"se'u",TO:"toi",TUhE:"tu'u",VEI:"ve'o",LOhAI:"sa'ai",SAhAI:"le'ai",LOhOI:"ku'au",NAhU:"te'u",NIhE:"te'u",MOhE:"te'u"},q=[],x=function(e,n){clearTimeout(E),E=setTimeout(e,n)},I={searching:{seskari:"cnano",query:""},displaying:{seskari:"cnano",query:""},citri:[]};function C(){I.citri.length>0&&(c.innerHTML=" ".concat(window.purc).concat(I.citri.filter((function(e){return"velcusku"!==e.seskari})).map((function(e){var n=e.seskari,t=e.query;return'<a class="a-'.concat(n,'" href="#seskari=').concat(n,"&sisku=").concat(be(t),'">').concat(Le(t),"</a>")})).join(", ")))}function _(e,n){var t=["velcusku","arxivo","cnano","rimni","catni"];t.includes(e)||(e="cnano"),m.className="kampu-dasri ".concat(e,"-dasri noselect"),d.classList.add("".concat(e,"-search-mode-title-color")),d.classList.remove("desktop-mode-title-color"),document.getElementById(e)&&document.getElementById(e).classList.add("".concat(e,"-tutci-hover"),"tutci-hover"),t.map((function(n){n!==e&&(d.classList.remove("".concat(n,"-search-mode-title-color")),document.getElementById(n)&&document.getElementById(n).classList.remove("".concat(n,"-tutci-hover"),"tutci-hover"))}));for(var a=0;a<y.length;a++)y[a].style.filter=n}function S(e){var a=e.action;if("complete"===document.readyState){var i=["logo"];"start"===a?(i.map((function(e){document.getElementById(e).classList.remove("stopRotate"),document.getElementById(e).classList.add("rotate")})),t.classList.add("pulsate-css"),setTimeout((function(){t.classList.contains("pulsate-css")&&n.classList.add("granim-css")}),500)):(i.map((function(e){document.getElementById(e).classList.add("stopRotate")})),n.classList.remove("granim-css"),t.classList.remove("pulsate-css"))}}function j(){Ie&&Ie.open()}function A(){MathJax.typesetPromise().then((function(){M(),B(!0)}))}function T(n){var t=n.query,c=n.seskari;switch(N(),window.jimte="velcusku"===c?201:30,w=0,S({action:"stop"}),a.innerHTML="",qe({query:t,seskari:c}),I.displaying.query=t,I.displaying.seskari=c,a.style.display="block",i.style.display="none",r.style.display="none",s.style.display="flex",e.scrollTop=0,I.displaying.seskari){case"rimni":A(),_("rimni","sepia(1.0)");break;case"arxivo":_("arxivo","none");break;case"velcusku":_("velcusku","none");break;case"catni":A(),_("catni","none");break;case"cnano":default:A(),_("cnano","none")}x((function(){V(),ga("send","pageview","#sisku/".concat(I.displaying.query));var e={dl:window.location.href,dt:document.title,dr:document.referrer,dp:"#sisku/".concat(I.displaying.query),dh:"".concat(window.location.protocol,"//").concat(window.location.hostname),z:Math.round(1e12*Math.random())};xe&&xe.emit("sisku",e)}),2e3)}function N(){[].forEach.call(document.querySelectorAll(".leader-line"),(function(e){e.parentNode.removeChild(e)}))}function O(){[].forEach.call(document.querySelectorAll(".leader-line"),(function(e){document.querySelector("#content").appendChild(e)}))}function B(e){N(),ee=setTimeout((function(){if(!0!==e){var n=document.getElementsByClassName("jvo_plumber");p=!p;for(var t=0;t<n.length;t++){var a=n[t];a.value=ve(),p?a.classList.add("tutci-hover"):a.classList.remove("tutci-hover")}}if(p){var i=Array.from(document.querySelectorAll("[data-arr]")),r=function(){var e=i[t],n=e.id,a=e.attributes["data-arr"].nodeValue.split(","),r=e.id.split("_");if(3===r.length)return"continue";var c=r[0],s=H(e);i.filter((function(e){var t=e.id.split("_"),i=t[0],r=e.attributes["data-arr"].nodeValue.split(","),o=r[0].split(/(?=[0-9]+)/);if(1===r.length&&3===t.length&&i===c&&a.filter((function(e){var n=e.split(/(?=[0-9])/);return 0===o[0].indexOf(n[0])&&o[1]===n[1]})).length>0&&(s||H(e))){var l=e.attributes["data-color"].nodeValue;l="hsla(".concat(l,",100%,70%,0.62)");new LeaderLine(document.getElementById(e.id),document.getElementById(n),{endPlugColor:l,color:l,dash:{animation:!0},startSocketGravity:[50,-67],endSocketGravity:[0,67],endPlug:"arrow2",endSocket:"bottom",size:3})}})),O()};for(t=0;t<i.length;t++)r()}}),!0===e?450:0)}function M(){N(),X=setTimeout((function(){for(var e=document.querySelectorAll("[data-target]"),n=0;n<e.length;n++){var t=e[n];if(H(t)){var a=t.id,i=t.attributes["data-target"].nodeValue;new LeaderLine(document.getElementById(i),document.getElementById(a),{endPlugColor:"rgba(255, 120, 0, 0.33)",color:"rgba(255, 120, 0, 0.33)",dash:{animation:!0},startSocketGravity:[50,-67],endSocketGravity:[0,67],endPlug:"arrow2",endSocket:"bottom",size:3})}}O(),g=450}),g)}function H(e){var n=e.getBoundingClientRect();return n=n.top>=48&&n.left>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth)}function z(e){var n={},t="";t=0===e.search(/^#sisku\//)?[e.replace(/#sisku\/(.*)/,"sisku=$1")]:("#"===e[0]?e.substr(1):e).split("&");for(var a=0;a<t.length;a++){var i=t[a].split("=");n[decodeURIComponent(i[0])]=decodeURIComponent(i[1]||"")}return n}function $(e){var n=e.href,t=e.replace;n&&(n=n.substring(n.indexOf("#")+1),localStorage.setItem("url","#".concat(n)));var a=z(n||window.location.hash);if(a.sisku){var i=Ee(a.sisku).trim();I.searching.seskari===a.seskari&&I.searching.query===i||(a.seskari&&["velcusku","cnano","catni","rimni","arxivo"].includes(a.seskari)&&(I.searching.seskari=a.seskari),a.sisku&&(I.searching.query=i,Z({replace:t})))}}function J(e){var n=e.target;if("A"===n.nodeName){var t=n;if(t.ctrlKey||t.metaKey)return;$({replace:!1,href:t.getAttribute("href")})}}function D(e){var n=e.replace,t="#seskari=".concat(I.searching.seskari,"&sisku=").concat(be(I.searching.query));""===I.searching.query?(t="",document.title="la sutysisku"):document.title="".concat(I.searching.query," - la sutysisku");var a=localStorage.getItem("url")||"";!0===n?window.history.replaceState({},null,t):window.location.hash!==t&&a!==t&&window.history.pushState({},null,t),localStorage.setItem("url",t)}function R(){I.searching.query=we(n.value),Z({caller:"GetCiskaAndDispatch"})}function U(e){clearTimeout(b),b=setTimeout(R,e||250)}function P(){I.searching.query=we(n.value),Z({})}function G(){Z({empty:!0})}function V(){if(""!==I.displaying.query&&"velcusku"!==I.displaying.seskari){var e=0;for(e=0;e<I.citri.length;e++)if(I.citri[e].query===I.displaying.query&&I.citri[e].seskari===I.displaying.seskari){I.citri.splice(e,1);break}I.citri.unshift(JSON.parse(JSON.stringify(I.displaying))),I.citri.length>10&&(I.citri.length=10),localStorage.setItem("citri",JSON.stringify(I.citri)),C()}}function Z(e){var t=e.replace,a=e.caller,i=e.empty;if(Ie&&Ie.close(),I.searching.query=I.searching.query.trim(),D({replace:t}),localStorage.setItem("tcini",JSON.stringify(I.searching)),1==i)return I.searching.query="",W();if("velcusku"!==I.searching.seskari){if(""===I.searching.query)return W();if(JSON.stringify(I.searching)===JSON.stringify(I.displaying))return}switch(n.value=I.searching.query,S({action:"start"}),"GetCiskaAndDispatch"===a&&"velcusku"===I.searching.seskari&&(I.searching.seskari="cnano"),I.searching.seskari){case"arxivo":var r=JSON.parse(JSON.stringify(I.searching));"^"!==I.searching.query.charAt(0)&&"$"!==I.searching.query.slice(-1)[0]&&(r.query="\\b".concat(I.searching.query,"\\b")),r.max=20,xe&&xe.emit("cpedu_fi_la_arxivo",r);break;case"velcusku":j();break;default:l.postMessage({kind:"newSearch",query:I.searching.query,seskari:I.searching.seskari})}}function W(){N(),S({action:"stop"}),e.scrollTop=0;var n=I.displaying.query;I.displaying.query="",d.classList.add("desktop-mode-title-color"),d.classList.remove("catni-search-mode-title-color","cnano-search-mode-title-color","velcusku-search-mode-title-color","rimni-search-mode-title-color","arxivo-search-mode-title-color"),f.classList.remove("catni-tutci-hover","tutci-hover");try{h.classList.remove("cnano-tutci-hover","tutci-hover")}catch(e){}v.classList.remove("rimni-tutci-hover","tutci-hover"),m.className="kampu-dasri cnano-dasri",a.style.display="none",i.style.display="block";var t={"@CLL":[".inglic.","Reference Grammar","../pixra/cll.png",1,"https://lojban.pw/cll/uncll-1.2.7/xhtml_section_chunks/"],"@lojban.pw":[".inglic.","Lojban-Chan","../pixra/jbotcan.svg",1,"https://lojban.pw"],muplis:[0,"la muplis","../pixra/taplamuplis.svg",2.1],jb:[0,"English - Lojban examples","../pixra/snime-1.svg",1],en:[0,"English-Lojban","../pixra/selsku_lanci_eng.svg",1],jbo:[0,"fanva fi le'e lojbo ri","../pixra/lanci_jbo.svg",1],ja:[0,'日本 - <span style="white-space:pre;">ロジバン</span>',"../pixra/selsku_lanci_jpn.svg",1],"fr-facile":[0,"français facile - lojban","../pixra/selsku_lanci_fra.svg",1],ru:[0,"русский - ложбан","../pixra/selsku_lanci_rus.svg",1],eo:[0,"Esperanto - Loĵbano","../pixra/lanci_epo.svg",1],es:[0,"español - lojban","../pixra/selsku_lanci_spa.svg",1],zh:[0,"中文 - 逻辑语","../pixra/selsku_lanci_zho.svg",1],"@CC":[".inglic.","The Crash Course","../pixra/cogwheel-5.svg",1,"https://mw.lojban.org/papri/The_Crash_Course_in_Lojban"]},c="";for(var s in t)0!==t[s][0]&&t[s][0]!==window.bangu||(c+="<div class='DIV_1' style='height:".concat(100,"px;width:").concat(100*t[s][3],"px;'><div class='DIV_2' style='height:").concat(100,"px;width:").concat(100*t[s][3],"px;'><span class='SPAN_3' style='width:auto;'><b class='B_4'>").concat(t[s][1],"</b></span><a").concat(0===(t[s][4]||"").indexOf("http")?" rel='noreferrer' target='_blank'":"",' aria-label="').concat(t[s][1].replace(/<[^>]+?>/g,""),'" href="').concat(0===s.indexOf("@")?t[s][4]:"https://la-lojban.github.io/sutysisku/".concat(s,"/#seskari=").concat(I.displaying.seskari,"&sisku=").concat(be(n)),"\" class='A_7'><div class='DIV_8' style='height:").concat(100,"px;width:").concat(100*t[s][3],'px;background-image:url("').concat(t[s][2],"\")'></div></a></div></div>"));r.innerHTML=c,r.style.display="block"}function K(e){var t=e.keyCode;t&&191===t&&n.focus()}function F(){e.setAttribute("style","height:".concat(Math.max(document.documentElement.clientHeight,window.innerHeight||0),"px;"))}function Y(e){return window.arrcll[e]}function Q(e){var n;if(!("rimni"===I.searching.seskari||!window.cll_url|0===(window.arrcll||[]).length||!e&&q[0].s&&q[0].s.replace(/[0-9]+[a-z]*\*?$/,"")===I.searching.query||e&&!/^[A-Zh]+/.test(I.searching.query))&&(e?n=Y(I.searching.query):!(n=Y(I.searching.query))&&q&&q[0]&&q[0].s&&(n=Y(q[0].s)||Y(I.searching.query.toLowerCase().replace(/h/g,"'"))),n)){var t="".concat(window.cllnotci,"<ul class='uoldeliste'>").concat(Object.keys(n).map((function(e){return"<li><a rel='noreferrer' target='_blank' href=\"".concat(window.cll_url).concat(e,'">').concat(Le(n[e]),"</a></li>")})).join(""),"</ul>"),a=document.createElement("div");return a.className="".concat(e?"sidju":"definition"," cll noselect"),a.innerHTML=t,a}}!function(){try{var e=JSON.parse(localStorage.getItem("tcini"));e.seskari&&(I.searching.seskari=e.seskari),e.query&&(I.searching.query=e.query)}catch(e){}try{I.citri=JSON.parse(localStorage.getItem("citri"))||[]}catch(e){}}(),C(),l.onmessage=function(e){var n=e.data;if("ready"==n.kind){document.title="la sutysisku";var t=document.getElementById("loading");t.parentNode.removeChild(t),$({replace:!0})}else if("searchResults"==n.kind){if(JSON.stringify(n.req)!==JSON.stringify(I.searching))return;if(JSON.stringify(n.req)===JSON.stringify(I.displaying))return;q=n.results||[],T({query:n.req.query,seskari:n.req.seskari})}else"loading"==n.kind?(document.getElementById("caho_cpacu").textContent=window.bangubuild,o.style.width="51%"):"progress"==n.kind&&(o.style.width="".concat(100*n.percent,"%"))},xe&&xe.on("la_arxivo_cu_cusku",(function(e){var n=e.seskari,t=e.query,a=e.message;I.searching.seskari===n&&I.searching.query===t&&(q=a||[],T({query:t,seskari:n}))})),c.addEventListener("click",J),window.addEventListener("popstate",$),n.addEventListener("paste",U(0)),n.addEventListener("keyup",(function(){U()})),n.addEventListener("keydown",(function(){clearTimeout(b)})),n.addEventListener("input",U()),n.addEventListener("textInput",U()),n.addEventListener("focus",P),t.addEventListener("click",G),document.getElementById("title").addEventListener("click",G),document.getElementById("rimni").addEventListener("click",(function(){I.searching={seskari:"rimni",query:we(n.value)},Z({replace:!1})})),document.getElementById("cnano").addEventListener("click",(function(){I.searching={seskari:"cnano",query:we(n.value)},Z({replace:!1})})),document.getElementById("catni").addEventListener("click",(function(){I.searching={seskari:"catni",query:we(n.value)},Z({replace:!1})})),window.addEventListener("resize",F,!0),e.addEventListener("scroll",ne),F(),document.attachEvent?document.attachEvent("onkeyup",K):document.addEventListener("keyup",K),"loading"===document.readyState&&(o.style.width="37%",document.title="la sutysisku");var X=null,ee=null;function ne(e){var n=e.target;N(),null!==X&&clearTimeout(X),null!==ee&&clearTimeout(ee),"velcusku"!==I.displaying.seskari&&n.scrollTop+window.innerHeight>=a.clientHeight-700?(window.jimte+=10,qe(I.displaying),MathJax.typesetPromise().then((function(){M(),B(!0)}))):(M(),B(!0))}function te(e,n,t){return e=e.replace(/[\{\}_]/g,""),Math.abs(Math.round(e.split("").reduce((function(e,n){return(e=(e<<5)-e+n.charCodeAt(0))&e}),0)%n/t)*t)}function ae(e){var n=(e=e.substr(1,e.length-2).split("=")).map((function(e){return e.replace(/[^A-Za-z']/g,"")}));return{jalge:n,hasExpansion:e.length>1||n[0]&&"x"!==n[0]}}function ie(e){var n=e.v,t=e.fullDef,a=e.subtype,i=e.dataArrAdded,r=e.b,c=e.veljvoLs;return i.includes(r)||"r"!==a&&"lujvo"!==t.t?"":(n=(n=(n=n.substr(1,n.length-2).split("=").map((function(e){return"r"===a?t.w+e.replace(/[^0-9]/g,""):e.replace(/[^0-9A-Za-z']/g,"")}))).filter((function(e){var n=e.replace(/[0-9]/g,"");if(!(c.filter((function(e){return 0===e.indexOf(n)&&e!==n})).length>0))return!0}))).join(","),' data-arr="'.concat(n,'"'))}function re(e){var n=e.def,t=e.fullDef,a=e.query,i=e.seskari,r=e.type,c=e.subtype,s=e.index,o=0,l=[],u=[],d=[],p=[],g=!1;["cnano","catni","rimni"].includes(i)||(i="cnano");var m=n.replace(/\$.*?\$/g,(function(e,n,t){if("d"===r&&void 0!==s){var a=ae(e);a.hasExpansion&&(g=!0),p=p.concat(a.jalge);var i=t.substr(n),c=new RegExp("^(".concat(e.replace(/[^a-zA-Z0-9\{\}_]/g,"")," \\([^\\(\\)<>]+?\\)).*")),o=e;0===i.search(c)&&(o=i.replace(c,"$1"));var l={};l[e]=o,u.push(l)}return e}));return{tergeha:"<span>".concat(m.replace(/\$.*?\$/g,(function(e,n,a){if("d"===r&&void 0!==s){var i=a.substr(n),g=new RegExp("^(".concat(e.replace(/[^a-zA-Z0-9\{\}_]/g,"")," \\([^()<>]+?\\)).*")),m=e;if(0===i.search(g))m=i.replace(g,"$1");else{var f=u.filter((function(n){return n[e]&&n[e]!==m}))[0];f&&(m=f[e])}o++;var h="".concat(s,"_").concat(o),v={};v[e]=h,l.push(v);var y=e.replace(/[^a-zA-Z0-9]/g,""),k=ie({subtype:c,v:e,fullDef:t,dataArrAdded:d,b:y,veljvoLs:p});e='<span id="'.concat(h,'" class="terbricmi" style="background-color: hsl(').concat(te(m,256,16),", 100%, 90%);border-radius:").concat(te(m,9,1)+3,'px"').concat(k,' data-color="').concat(te(m,256,16),'">').concat(e,"</span>"),d.push(y)}return e})).replace(/(<span [^<>]+?>[^\(\)<>]+?<\/span>) \([^\(\)<>]*?\bproperty of <span id="([^\(\)<>]+?)"[^<>]+?>([^\(\)<>]+?)<\/span>\)/g,(function(e,n,t,a){if("d"===r){var i=l.filter((function(e){return e[a]!==t&&e[a]}));i[0]&&i[0][a]&&(e=e.replace(/^<span /,'<span data-target="'.concat(i[0][a],'" ')))}return e})).replace(/\$.*?\$/g,(function(e){return e.replace(/\{/g,"\\curlyleft").replace(/\}/g,"\\curlyright")})).replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,(function(e){var n='</span><a href="'.concat(e,'" rel="noreferrer" target="_blank">').concat(se({def:e,query:a}),"</a><span>");return e.match(/^https?:\/\/.*\.(jpg|png)$/)&&(n+="<img class='se-tcidu-pixra' alt='secusku' src=\"".concat(e,'"/>\n')),n})).replace(/\{.*?\}/g,(function(e){e=e.substring(1,e.length-1);return'</span><a class="a-'.concat(i,'" href="#seskari=').concat(i,"&sisku=").concat(be(e),'">').concat(se({def:Le(e,!0),query:a}),"</a><span>")})).replace(/\$.*?\$/g,(function(e){return e.replace(/\\curlyleft/g,"{").replace(/\\curlyright/g,"}")})),"</span>").replace(/<span><\/span>/g,"").replace(/(>[^<>$]+<|>[^<>$]+\$|\$[^<>$]+<)/g,(function(e){return se({def:e,query:a})})),hasExpansion:g}}function ce(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function se(e){var n=e.def,t=e.query;if(!t||""===t)return n;var a="(".concat(ce(t).replace(/ /g,"|"),"|").concat(ce(t).replace(/'/g,"h").replace(/ /g,"|"),")"),i=new RegExp(a,"igm");return n.replace(i,"<span class='basna'>$1</span>")}var oe=60800,le="ptkflscmx.' 1234bdgvrzjn`-,~    aeiouy    qw    AEIOUY";function ue(e){return e.replace(/\./g,"").replace(/^/,".").toLowerCase().replace(/([aeiou\.])u([aeiou])/g,"$1w$2").replace(/([aeiou\.])i([aeiou])/g,"$1ɩ$2").replace(/au/g,"ḁ").replace(/ai/g,"ą").replace(/ei/g,"ę").replace(/oi/g,"ǫ").replace(/\./g,"")}function de(e){return e.replace(/w/g,"u").replace(/ɩ/g,"i").replace(/ḁ/g,"au").replace(/ą/g,"ai").replace(/ę/g,"ei").replace(/ǫ/g,"oi")}function pe(e){var n=e.w,t=e.ot,a=e.rafsiDocuments,i=ue(n);return t&&"vlaza'umei"===t?a.map((function(e){return pe(e)})).join(" "):(i=i.split(/(?=[ɩw])/).map((function(e){return de(e).split("").map((function(e){return ge(e)})).join("")})).join("")).replace(/,/g,"")}function ge(e){return e.codePointAt(0)>=60800?e:" "==e?" ":("h"!=e&&"H"!=e||(e="'"),le.includes(e)?String.fromCodePoint(oe+le.indexOf(e)):le.includes(e.toLowerCase())?String.fromCodePoint(oe+le.indexOf(e.toLowerCase())):"\n"==e?"\n":"\t"==e?"\t":e)}function me(e,n){for(var t,a=new RegExp(e,"g"),i=[];t=a.exec(n);)i.push(t.index);return i}function fe(e,n,t){return t.indexOf(e)===n}function he(e,n,t){var a=me(n,e);a=a.map((function(n){return(n=[n-t,n+t])[0]<0&&(n[0]=0),n[0]>=e.length&&(n[0]=e.length-1),n}));for(var i=0;i<a.length-1;i++)a[i][1]>a[i+1][0]&&(a[i][1]=a[i+1][1],a[i+1][0]=a[i][0]);if((a=a.map((function(e){return JSON.stringify(e)}))).length>0)a=(a=a.filter(fe).map((function(t){t=JSON.parse(t);var a=e.substr(t[0],t[1]-t[0]);return a=se({def:a,query:n}),t[0]>3&&(a="...".concat(a)),t[1]<e.length-4&&(a="".concat(a,"...")),a}))).join("<br/>");else{var r=e.substr(0,Math.min(100,e.length));r.length<e.length&&(r="".concat(r,"...")),a=r=se({def:r,query:n})}return a}function ve(){return p?"⇔":"↔"}function ye(e){var n=e.def,t=e.inner,a=e.query,i=e.seskari,r=e.index,c=e.subtype;a||(a=I.searching.query),i||(i=I.searching.seskari),n||(n=[]);var s=document.createElement("div");if(s.className=t?"terminner":"termouter",s.classList.add("term"),!t&&n.d&&n.d.nasezvafahi&&0===(n.rafsiDocuments||[]).length&&(s.className="sidju cll noselect"),void 0!==L[n.s]){var o=document.createElement("h4");o.className="tfm",o.innerHTML='&nbsp;&nbsp;<i><sup>[&nbsp;...&nbsp;&nbsp;&nbsp;<a href="#seskari='.concat(i,"&sisku=").concat(be(L[n.s]),'">').concat(Le(L[n.s]),"</a>]</sup></i>")}var l=[];for(var u in L)L[u]===n.w&&l.push('<a href="#seskari='.concat(i,"&sisku=").concat(be(u),'">').concat(Le(u),"</a>"));if(0!==l.length){var d=document.createElement("div");d.classList.add("valsi"),n.l&&d.classList.add("nalojbo"),d.innerHTML="<i><sup>[".concat(l.join(", "),"&nbsp;&nbsp;&nbsp;...&nbsp;]</sup></i>&nbsp;&nbsp;")}if(n.s){var p;(p=document.createElement("a")).className="tutci klesi klesi-tutci";var g=se({def:Le(n.s),query:a});p.innerHTML=g,"velcusku"!==i&&(p.href="#seskari=".concat(i,"&sisku=").concat(be(n.s)))}if(n.t){var m;(m=document.createElement("a")).className="klesi link noselect";g=n.t;var f=be(n.w).replace(/_/g,"%20");m.href=window.judri?window.judri+f:"#seskari=".concat("catni"===i?"catni":"cnano","&sisku=").concat(f),window.judri&&(m.setAttribute("target","_blank"),m.setAttribute("rel","noreferrer")),window.xuzganalojudri&&!n.l&&(g="".concat(Le(n.t),"# "),n.d&&n.d.nasezvafahi&&(g="➕ ".concat(g))),m.innerHTML=g}n.date&&((m=document.createElement("div")).className="tutci klesi klesi-tutci",m.style.whiteSpace="nowrap",m.innerHTML=n.date);n.from&&((p=document.createElement("div")).className="tutci klesi klesi-tutci",p.innerHTML=n.from);var h=document.createElement("h4");h.classList.add("valsi"),h.setAttribute("data-valsi",encodeURIComponent(n.w)),n.l&&h.classList.add("nalojbo"),we(n.w)==a||"velcusku"==i?h.innerHTML="".concat(se({def:n.w,query:a})," "):h.innerHTML='<a class="valsi'.concat(n.l?"":" nalojbo",'" href="#seskari=').concat(i,"&sisku=").concat(be(n.w),'">').concat(se({def:Le(n.w,!0),query:a}),"</a> ");var v={};n.d&&!n.d.nasezvafahi&&(v=re({def:n.d,fullDef:n,query:a,seskari:i,type:"d",index:r,subtype:c}));var y=document.createElement("h4");y.classList.add("valsi","zbalermorna"),y.textContent=pe(n);var k=document.createElement("heading");if(k.classList.add("heading"),d&&k.appendChild(d),k.appendChild(h),y&&n.w.length<=20&&!window.muplis&&k.appendChild(y),o&&k.appendChild(o),"lujvo"===n.t&&(n.rafsiDocuments||[]).length>0&&v.hasExpansion){var w=document.createElement("input");w.type="button",w.classList.add("tutci","sance","jvo_plumber"),w.value=ve(),w.onclick=B,k.appendChild(w)}var b=document.createElement("heading");b.style.flex=1,k.appendChild(b),m&&k.appendChild(m),p&&k.appendChild(p);try{var E=new Audio("/sutysisku/sance/vreji/".concat(ke(n.w),".mp3"));E.id="sance_".concat(ke(n.w)),E.addEventListener("canplaythrough",(function(e){var t=Array.from(document.querySelectorAll('[data-valsi="'.concat(ke(n.w),'"]')))[0];t&&!document.getElementById("sance_".concat(ke(n.w)))&&(t.innerHTML+='<button class="tutci sance" onclick="document.getElementById(\'sance_'.concat(ke(n.w),"').play()\">▶</button>"),t.appendChild(E))}))}catch(e){}if(s.appendChild(k),y&&(window.muplis||n.w.length>20)&&s.appendChild(y),"arxivo"!==i&&n.d){if((x=document.createElement("div")).classList.add("definition","valsi"),n.d&&n.d.nasezvafahi)x.classList.add("nasezvafahi","noselect"),x.innerHTML=window.nasezvafahi;else{var q=v.tergeha;"velcusku"!==i&&(q="".concat(q.replace(/\n/g,"<br/>")," ")),x.innerHTML=q}s.appendChild(x)}if("arxivo"===i){var x,C=document.createElement("div");C.classList.add("definition","valsi","pointer"),C.innerHTML=he(n.d,a,50),C.addEventListener("click",(function(){C.style.display="none",C.nextElementSibling.style.display="block"})),s.appendChild(C),(x=document.createElement("div")).classList.add("definition","valsi"),x.style.display="none",n.d&&n.d.nasezvafahi?(x.classList.add("nasezvafahi","noselect"),x.innerHTML=window.nasezvafahi):(x.innerHTML="".concat(se({def:n.d,query:a}).replace(/\n/g,"<br/>")," "),x.addEventListener("click",(function(){x.style.display="none",x.previousElementSibling.style.display="block",x.parentElement.scrollIntoView()}))),s.appendChild(x)}n.n&&((x=document.createElement("div")).classList.add("notes","valsi"),x.innerHTML="".concat(re({def:n.n,query:a,seskari:i}).tergeha," "),s.appendChild(x));if(0==r&&"velcusku"!==i){var _=Q();_&&s.appendChild(_)}n.e&&((x=document.createElement("div")).classList.add("examples","valsi"),x.innerHTML="<table class='ciksi'>".concat(re({def:"".concat(n.e,"\n").replace(/%/g,"\n").replace(/(.*?) — (.*?)\n/g,"<tr><td class='mupligreku'><b>$1</b></td><td class='mupligreku'><i>$2</i></td></tr>\n"),query:a,seskari:i}).tergeha,"</table> "),s.appendChild(x));n.k&&((x=document.createElement("div")).className="related",x.innerHTML="See also: ".concat(re({def:n.k,query:a,seskari:i}).tergeha," "),s.appendChild(x));if((n.r||[]).length>0&&!n.l&&window.xuzganalojudri){var S=document.createElement("div");for(S.className="rafsi noselect",S.innerHTML="rafsi: ",O=0;O<n.r.length;O++){var j=document.createElement("span");j.className="pamei";var A=n.r[O];if((n.t||"").match(/lujvo/)){var T=document.createElement("a");T.setAttribute("href","#seskari=".concat(i,"&sisku=").concat(be(A))),T.text=A,j.appendChild(T)}else j.innerHTML=se({def:A,query:a});j.innerHTML="".concat(j.innerHTML," "),S.appendChild(j)}s.appendChild(S)}if((n.rafsiDocuments||[]).length>0){var N=document.createElement("div");N.classList.add("definition","subdefinitions");for(var O=0;O<n.rafsiDocuments.length;O++)N.appendChild(ye({def:n.rafsiDocuments[O],inner:!0,index:"".concat(r,"_").concat(O),subtype:"r"}));s.appendChild(N)}return s.addEventListener("click",J),s}function ke(e){return encodeURIComponent(e).replace(/'/g,"h")}function we(e){return"^"!==e.charAt(0)&&"$"!==e.slice(-1)?e.replace(/\./g," ").replace(/ {2,}/g," ").replace(/’/g,"'").trim():e}function be(e){return encodeURIComponent((e||"").replace(/ /g,"_")).replace(/'/g,"%27")}function Ee(e){return decodeURIComponent(e.replace(/&amp;/g,"&").replace(/%27/g,"'")).replace(/[_\+]/g," ")}function Le(e,n){return e=(e||"").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\(/g,"&#40;").replace(/\)/g,"&#41;"),n||(e=e.replace(/'/g,"&#039;")),e}function qe(e){var n=e.query,t=e.seskari,i=Math.min(window.jimte,q.length);if(0===w){var r=Q(!0);r&&a.appendChild(r)}for(;w<i;w++)a.appendChild(ye({def:q[w],query:n,seskari:t,length:q.length,index:w}))}"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./sw.js").then((function(e){var n=e.scope;console.log("ServiceWorker registration successful with scope: ",n)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}));var xe,Ie,Ce=[["p","t","k","f","s","c"],["b","d","g","v","z","j"],["m","l","n","r",,"x","'"],["a","e","i","o","u","y"],[],["aia","aua"],["au","ai","ei","oi"]],_e=document.querySelector("#audio");function Se(e,n,t){var a=document.createElement(e);return a.textContent=n,t&&(a.className=t),a}function je(e,n,t){var a=document.createElement(e);return t&&(a.className=t),Array.isArray(n)?n.forEach((function(e){a.appendChild(e)})):n&&a.appendChild(n),a}function Ae(e){_e.src=e,_e.play()}document.querySelector("#table").appendChild(je("table",Ce.map((function(e){return je("tr",e.map((function(e){var n=Se("button",e,"bangu");return n.onclick=function(){Ae("/sutysisku/sance/lerfu/".concat(encodeURIComponent(e),".ogg"))},je("td",n)})))})),"centero")),n.focus();