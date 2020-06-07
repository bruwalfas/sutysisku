const $e=function(){"use strict";function e(t,r,n,u){this.message=t,this.expected=r,this.found=n,this.location=u,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e)}return function(e,t){function r(){this.constructor=e}r.prototype=t.prototype,e.prototype=new r}(e,Error),e.buildMessage=function(e,t){var r={literal:function(e){return'"'+u(e.text)+'"'},class:function(e){var t,r="";for(t=0;t<e.parts.length;t++)r+=e.parts[t]instanceof Array?a(e.parts[t][0])+"-"+a(e.parts[t][1]):a(e.parts[t]);return"["+(e.inverted?"^":"")+r+"]"},any:function(e){return"any character"},end:function(e){return"end of input"},other:function(e){return e.description}};function n(e){return e.charCodeAt(0).toString(16).toUpperCase()}function u(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}function a(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}return"Expected "+function(e){var t,n,u,a=new Array(e.length);for(t=0;t<e.length;t++)a[t]=(u=e[t],r[u.type](u));if(a.sort(),a.length>0){for(t=1,n=1;t<a.length;t++)a[t-1]!==a[t]&&(a[n]=a[t],n++);a.length=n}switch(a.length){case 1:return a[0];case 2:return a[0]+" or "+a[1];default:return a.slice(0,-1).join(", ")+", or "+a[a.length-1]}}(e)+" but "+function(e){return e?'"'+u(e)+'"':"end of input"}(t)+" found."},{SyntaxError:e,parse:function(t,r){r=void 0!==r?r:{};var n,u={},a={text:0},s=0,o=[function(e){return function e(t){if("string"==typeof t)return t;var r=[];for(var n in t)r.push(e(t[n]));return r}(e)},function(e){return e},function(e){return["cmavo",y(e)]},function(e){return["gismu",y(e)]},function(e){return["lujvo",y(e)]},function(e){return["fu'ivla",y(e)]},function(e){return["cmevla",y(e)]},function(e){return[y(e),"-"]},function(e){return[y(e)]},function(e,t){return[y(e),"-",y(t)]},function(e,t){return[y(e),"-",y(t)]},function(e,t){return[y(e),"-",y(t)]},function(e,t){return[y(e),"-",y(t)]},/^[a]/,w(["a"],!1,!1),/^[aeo]/,w(["a","e","o"],!1,!1),/^[aeiou]/,w(["a","e","i","o","u"],!1,!1),/^[i]/,w(["i"],!1,!1),/^[u]/,w(["u"],!1,!1),/^[y]/,w(["y"],!1,!1),/^[i\u0269]/,w(["i","ɩ"],!1,!1),/^[uw]/,w(["u","w"],!1,!1),function(){return["u",""]},/^[l]/,w(["l"],!1,!1),/^[m]/,w(["m"],!1,!1),/^[n]/,w(["n"],!1,!1),/^[r]/,w(["r"],!1,!1),/^[pfbgvkx]/,w(["p","f","b","g","v","k","x"],!1,!1),/^[d]/,w(["d"],!1,!1),/^[jz]/,w(["j","z"],!1,!1),/^[cs]/,w(["c","s"],!1,!1),/^[x]/,w(["x"],!1,!1),/^[t]/,w(["t"],!1,!1),/^[,']/,w([",","'"],!1,!1),/^[}]/,w(["}"],!1,!1),{type:"any"},/^[^a-za-z,']/,w([["a","z"],["a","z"],",","'"],!0,!1),function(e){return["drata",y(e)]},/^[^ ]/,w([" "],!0,!1)],i=[v("%$;!0#*;!&/' 8!: !! )"),v("%;\"/' 8!:!!! )"),v(";_.î &;#.è &%;'/' 8!:\"!! ).Ö &%;$/' 8!:#!! ).Ä &%%%<;$=.##&&!&'#/#%<;&=.##&&!&'#/{$%<;'=.##&&!&'#/f$%<%;6/>#;\\/5$;K/,$;D/#$+$)($'#(#'#(\"'#&'#=.##&&!&'#/,$;(/#$+%)(%'#($'#(#'#(\"'#&'#/' 8!:$!! )./ &%;&/' 8!:%!! )"),v("%%%<;,=/##&'!&&#/N#$;@/&#0#*;@&&&#/8$%<;^=/##&'!&&#/#$+#)(#'#(\"'#&'#.# &;,/' 8!:&!! )"),v("%;</k#%<;?=/##&'!&&#/V$%<;>=/##&'!&&#/A$;H/8$%<;]=/##&'!&&#/#$+%)(%'#($'#(#'#(\"'#&'#"),v("%;+/Q#;A/H$%<;?=/##&'!&&#/3$$;B0#*;B&/#$+$)($'#(#'#(\"'#&'#"),v("%;%/,#;>/#$+\")(\"'#&'#"),v("%%<;#=.##&&!&'#/Ų#%<%;4/X#%<;?=.##&&!&'#/C$;K/:$;\\.\" &\"/,$;(/#$+%)(%'#($'#(#'#(\"'#&'#.T &%;4/J#%<;?=/##&'!&&#/5$;K/,$;:/#$+$)($'#(#'#(\"'#&'#=.##&&!&'#/ç$%%<;\\=.##&&!&'#/ #%<%;P/9#$;P/&#0#*;P&&&#/#$+\")(\"'#&'#=.##&&!&'#/k$;D/b$$%;E/,#;\\/#$+\")(\"'#&'#06*%;E/,#;\\/#$+\")(\"'#&'#&/,$;E/#$+%)(%'#($'#(#'#(\"'#&'#.0 &$;K/&#0#*;K&&&#/8$%<;]=/##&'!&&#/#$+$)($'#(#'#(\"'#&'#"),v("%$%;3.c &;..] &;0.W &%%<;)=.##&&!&'#/A#;1/8$%<;)=.##&&!&'#/#$+#)(#'#(\"'#&'#/' 8!:'!! )0u*%;3.c &;..] &;0.W &%%<;)=.##&&!&'#/A#;1/8$%<;)=.##&&!&'#/#$+#)(#'#(\"'#&'#/' 8!:'!! )&/#%;&.# &;9/' 8!:(!! ).m &%;2.N &;-.H &;/.B &%;7/8#%<;?=/##&'!&&#/#$+\")(\"'#&'#/2#;:/)$8\":)\"\"! )(\"'#&'#/#$+\")(\"'#&'#"),v(";&.) &;..# &;-"),v("%$;10#*;1&/â#;9.Ó &%;7/V#%<;?=/##&'!&&#/A$%<;K=.##&&!&'#/,$;:/#$+$)($'#(#'#(\"'#&'#. &;0. &;/. &%%;7/M#%<;?=/##&'!&&#/8$%<;K=.##&&!&'#/#$+#)(#'#(\"'#&'#.\" &\"/5#;N/,$;K/#$+#)(#'#(\"'#&'#.) &;3.# &;2/#$+\")(\"'#&'#"),v("%%<;*=.##&&!&'#/¯#%<;'=.##&&!&'#/$%<%%<;*=.##&&!&'#/5#;P/,$;*/#$+#)(#'#(\"'#&'#=.##&&!&'#/]$%<;\\=.##&&!&'#/H$%<;D=/##&'!&&#/3$$;;0#*;;&/#$+&)(&'#(%'#($'#(#'#(\"'#&'#"),v("%%<;\\=.##&&!&'#/³#$;E.N &;F.H &;\\.B &%;P/8#%<;^=.##&&!&'#/#$+\")(\"'#&'#0T*;E.N &;F.H &;\\.B &%;P/8#%<;^=.##&&!&'#/#$+\")(\"'#&'#&/A$;P/8$%<;^=/##&'!&&#/#$+$)($'#(#'#(\"'#&'#"),v('%;%/E#%;\\/,#;K/#$+")("\'#&\'#/)$8":*""! )("\'#&\'#.O &%%;%/,#;D/#$+")("\'#&\'#/2#;K/)$8":+""! )("\'#&\'#'),v('%%<;;=/##&\'!&&#/N#;+/E$%;\\/,#;K/#$+")("\'#&\'#/)$8#:*#"! )(#\'#("\'#&\'#.g &%%;+/,#;D/#$+")("\'#&\'#/J#%;K/1#;\\." &"/#$+")("\'#&\'#/)$8":*""! )("\'#&\'#'),v("%;<.# &;4/G#%<;?=/##&'!&&#/2$;K/)$8#:*#\"\" )(#'#(\"'#&'#"),v('%%;<.# &;4/8#%<;?=.##&&!&\'#/#$+")("\'#&\'#/J#%;K/1#;\\." &"/#$+")("\'#&\'#/)$8":*""! )("\'#&\'#'),v("%%<;0=.##&&!&'#/ª#%<;/=.##&&!&'#/$%<;3=.##&&!&'#/$%<;2=.##&&!&'#/k$;7/b$%<;?=.##&&!&'#/M$%<;K=.##&&!&'#/8$%<;\\=.##&&!&'#/#$+()(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),v("%%;</,#;H/#$+\")(\"'#&'#.# &;7/Z#%<;?=/##&'!&&#/E$%;\\/,#;K/#$+\")(\"'#&'#/)$8#:*#\"\" )(#'#(\"'#&'#"),v("%%;</,#;H/#$+\")(\"'#&'#.# &;7/h#%%<;?=.##&&!&'#/C#;\\/:$;K/1$;\\.\" &\"/#$+$)($'#(#'#(\"'#&'#/)$8\":,\"\"! )(\"'#&'#"),v("%;=/,#;P/#$+\")(\"'#&'#"),v(";4.# &;6"),v("%;N/,#;H/#$+\")(\"'#&'#"),v(";5.# &;8"),v("%%;P/c#%;H/J#%<;?=.##&&!&'#/5$;\\/,$;H/#$+$)($'#(#'#(\"'#&'#.# &;G/#$+\")(\"'#&'#/{#%;U/8#%<;P=/##&'!&&#/#$+\")(\"'#&'#.B &%;T/8#%<;U=/##&'!&&#/#$+\")(\"'#&'#.\" &\"/)$8\":*\"\"! )(\"'#&'#"),v(";$.~ &%;=/t#%<;?=/##&'!&&#/_$;\\/V$%<;>=/##&'!&&#/A$;H/8$%<;]=/##&'!&&#/#$+&)(&'#(%'#($'#(#'#(\"'#&'#"),v("%%<;>=/##&'!&&#/Z#%;P/,#;G/#$+\")(\"'#&'#.# &;6/8$%<;]=/##&'!&&#/#$+#)(#'#(\"'#&'#"),v("%;A/8#%<;?=.##&&!&'#/#$+\")(\"'#&'#.# &;B"),v("%;5/,#;P/#$+\")(\"'#&'#"),v("%;P/,#;H/#$+\")(\"'#&'#"),v("%;D/k#%<;K=.##&&!&'#/V$;E/M$%<;#=.##&&!&'#/8$%<;]=/##&'!&&#/#$+%)(%'#($'#(#'#(\"'#&'#"),v("%$;P.# &;F0)*;P.# &;F&/Q#;\\.\" &\"/C$;K.\" &\"/5$;A/,$;^/#$+%)(%'#($'#(#'#(\"'#&'#"),v("%;D/:#;E/1$;C.\" &\"/#$+#)(#'#(\"'#&'#.# &;B"),v("%;D/O#%<;K=.##&&!&'#/:$;E/1$;C.\" &\"/#$+$)($'#(#'#(\"'#&'#"),v("%;P/A#%<;Q=/##&'!&&#/,$;C/#$+#)(#'#(\"'#&'#"),v("%%<;@=.##&&!&'#/A#;P/8$%<;@=/##&'!&&#/#$+#)(#'#(\"'#&'#.U &%;Q.\" &\"/F#;P.\" &\"/8$%<;^=/##&'!&&#/#$+#)(#'#(\"'#&'#"),v(";\\.Œ &%;P.\" &\"/,#;F/#$+\")(\"'#&'#.Ĵ &%;O.ú &%%;Y/8#%<;Z=.##&&!&'#/#$+\")(\"'#&'#.N &%;X/D#%<;T.) &;R.# &;U=.##&&!&'#/#$+\")(\"'#&'#.\" &\"/#;V.s &%;[.H &;W.B &%;T/8#%<;U=.##&&!&'#/#$+\")(\"'#&'#/8#%<;R=.##&&!&'#/#$+\")(\"'#&'#.# &;S.\" &\"/7$;R.# &;U.\" &\"/#$+#)(#'#(\"'#&'#/M#%<;P=.##&&!&'#/8$%<;F=.##&&!&'#/#$+#)(#'#(\"'#&'#"),v(";H.H &;G.B &%;K/8#%<;E=.##&&!&'#/#$+\")(\"'#&'#"),v("%;L.# &;M/8#%<;E=/##&'!&&#/#$+\")(\"'#&'#"),v("%%4-\"\"5!7./A#;M/8$%<;J=.##&&!&'#/#$+#)(#'#(\"'#&'#.Q &%4/\"\"5!70/A#;L/8$%<;I=.##&&!&'#/#$+#)(#'#(\"'#&'#/8#%<;E=.##&&!&'#/#$+\")(\"'#&'#"),v('%41""5!72/8#%<;E=.##&&!&\'#/#$+")("\'#&\'#'),v('43""5!74'),v('45""5!76'),v("%47\"\"5!78/W#%<%%<;K=.##&&!&'#/,#;E/#$+\")(\"'#&'#=.##&&!&'#/#$+\")(\"'#&'#"),v('49""5!7:'),v('%4;""5!7</& 8!:=! )'),v("%%<;D=/##&'!&&#/J#;P/A$;P/8$%<;P=.##&&!&'#/#$+$)($'#(#'#(\"'#&'#"),v("%;[/,#;Y/#$+\")(\"'#&'#.6 &%;W/,#;X/#$+\")(\"'#&'#"),v(";V.; &;W.5 &;X./ &;Y.) &;[.# &;Q"),v(";R./ &;S.) &;T.# &;U"),v('4>""5!7?'),v('4@""5!7A'),v('%4B""5!7C/8#%<;O=.##&&!&\'#/#$+")("\'#&\'#'),v('4D""5!7E'),v('4F""5!7G'),v('4H""5!7I'),v('4J""5!7K'),v('4L""5!7M'),v('4N""5!7O'),v('4P""5!7Q'),v('%4R""5!7S/8#%<;E=/##&\'!&&#/#$+")("\'#&\'#'),v(';^.N &%%<;E=.##&&!&\'#/,#;"/#$+")("\'#&\'#.) &4T""5!7U'),v(';_.4 &%<1""5!7V=.##&&!&\'#'),v('%$4W""5!7X/,#0)*4W""5!7X&&&#/\' 8!:Y!! )'),v('$4Z""5!7[/,#0)*4Z""5!7[&&&#')],l=0,$=[{line:1,column:1}],h=0,p=[],f=0,g={};if("startRule"in r){if(!(r.startRule in a))throw new Error("Can't start parsing from rule \""+r.startRule+'".');s=a[r.startRule]}function w(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function d(e){var r,n=$[e];if(n)return n;for(r=e-1;!$[r];)r--;for(n={line:(n=$[r]).line,column:n.column};r<e;)10===t.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return $[e]=n,n}function b(e,t){var r=d(e),n=d(t);return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function m(e){l<h||(l>h&&(h=l,p=[]),p.push(e))}function k(t,r,n){return new e(e.buildMessage(t,r),t,r,n)}function v(e){var t,r=new Array(e.length);for(t=0;t<e.length;t++)r[t]=e.charCodeAt(t)-32;return r}function y(e){if("string"==typeof e)return e;var t="";for(var r in e)t+=y(e[r]);return t}if((n=function e(r){var n,a,s=i[r],$=0,h=[],p=s.length,w=[],d=[],b=65*l+r,k=g[b];if(k)return l=k.nextPos,k.result;for(;;){for(;$<p;)switch(s[$]){case 0:d.push(o[s[$+1]]),$+=2;break;case 1:d.push(void 0),$++;break;case 2:d.push(null),$++;break;case 3:d.push(u),$++;break;case 4:d.push([]),$++;break;case 5:d.push(l),$++;break;case 6:d.pop(),$++;break;case 7:l=d.pop(),$++;break;case 8:d.length-=s[$+1],$+=2;break;case 9:d.splice(-2,1),$++;break;case 10:d[d.length-2].push(d.pop()),$++;break;case 11:d.push(d.splice(d.length-s[$+1],s[$+1])),$+=2;break;case 12:d.push(t.substring(d.pop(),l)),$++;break;case 13:w.push(p),h.push($+3+s[$+1]+s[$+2]),d[d.length-1]?(p=$+3+s[$+1],$+=3):(p=$+3+s[$+1]+s[$+2],$+=3+s[$+1]);break;case 14:w.push(p),h.push($+3+s[$+1]+s[$+2]),d[d.length-1]===u?(p=$+3+s[$+1],$+=3):(p=$+3+s[$+1]+s[$+2],$+=3+s[$+1]);break;case 15:w.push(p),h.push($+3+s[$+1]+s[$+2]),d[d.length-1]!==u?(p=$+3+s[$+1],$+=3):(p=$+3+s[$+1]+s[$+2],$+=3+s[$+1]);break;case 16:d[d.length-1]!==u?(w.push(p),h.push($),p=$+2+s[$+1],$+=2):$+=2+s[$+1];break;case 17:w.push(p),h.push($+3+s[$+1]+s[$+2]),t.length>l?(p=$+3+s[$+1],$+=3):(p=$+3+s[$+1]+s[$+2],$+=3+s[$+1]);break;case 18:w.push(p),h.push($+4+s[$+2]+s[$+3]),t.substr(l,o[s[$+1]].length)===o[s[$+1]]?(p=$+4+s[$+2],$+=4):(p=$+4+s[$+2]+s[$+3],$+=4+s[$+2]);break;case 19:w.push(p),h.push($+4+s[$+2]+s[$+3]),t.substr(l,o[s[$+1]].length).toLowerCase()===o[s[$+1]]?(p=$+4+s[$+2],$+=4):(p=$+4+s[$+2]+s[$+3],$+=4+s[$+2]);break;case 20:w.push(p),h.push($+4+s[$+2]+s[$+3]),o[s[$+1]].test(t.charAt(l))?(p=$+4+s[$+2],$+=4):(p=$+4+s[$+2]+s[$+3],$+=4+s[$+2]);break;case 21:d.push(t.substr(l,s[$+1])),l+=s[$+1],$+=2;break;case 22:d.push(o[s[$+1]]),l+=o[s[$+1]].length,$+=2;break;case 23:d.push(u),0===f&&m(o[s[$+1]]),$+=2;break;case 24:d[d.length-1-s[$+1]],$+=2;break;case 25:l,$++;break;case 26:for(n=s.slice($+4,$+4+s[$+3]),a=0;a<s[$+3];a++)n[a]=d[d.length-1-n[a]];d.splice(d.length-s[$+2],s[$+2],o[s[$+1]].apply(null,n)),$+=4+s[$+3];break;case 27:d.push(e(s[$+1])),$+=2;break;case 28:f++,$++;break;case 29:f--,$++;break;default:throw new Error("Invalid opcode: "+s[$]+".")}if(!(w.length>0))break;p=w.pop(),$=h.pop()}return g[b]={nextPos:l,result:d[0]},d[0]}(s))!==u&&l===t.length)return n;throw n!==u&&l<t.length&&m({type:"end"}),k(p,h<t.length?t.charAt(h):null,h<t.length?b(h,h+1):b(h,h))}}}(),ze=(e,t)=>(e.d||(e.d=""),t.d||(t.d=""),e.d.length<t.d.length?-1:e.d.length>t.d.length?1:0),Pe=e=>{let t=["",""];if(!window.xuzganalojudri||e.search(/[^aeiouyAEIOY]'/)>-1)return t;try{if(t=$e.parse(e.toLowerCase()),t=JSON.stringify(t),t=t.split(/","|\],\[/).map(e=>e.replace(/[^,a-zA-Z']/g,"")),e.includes(" zei "))return["zei-lujvo",e]}catch(e){}return t.length>2&&t.filter((e,t)=>t%2==0).toString().match(/^cmavo(,cmavo)+$/)?["cmavo compound",t.filter((e,t)=>t%2==1).join(" ")]:t};function Ke(e){if(!window.xuzganalojudri)return;if(e.includes(" zei "))return["@"].concat(e.split(" "));let t;try{t=$e.parse(e).toString().split(",")}catch(e){return}return"lujvo"===t[0]&&2===t.length?t[1].split("-"):void 0}const De={};for(const e in sorcu[bau]){const t=sorcu[bau][e];let r=(t.r||[]).length;for(;r--;)De[t.r[r]]=t,De[t.r[r]].w=e;"gismu"!==t.t&&"experimental gismu"!==t.t&&"fu'ivla"!==t.t||(De[e]=t,De[e].w=e)}function He(e){return e.t&&""!==e.t||(!window.muplis&&window.xuzganalojudri?e.t=Pe(e.w)[0]:e.t=""),e}window.storecache={};for(const e in sorcu[bau])window.storecache[e]=`${e};${Object.keys(sorcu[bau][e]).map(t=>sorcu[bau][e][t]).join(";").toLowerCase()}`,window.storecache[e]+=";"+window.storecache[e].replace(/h/g,"'");function sisku(e,t){const r=e.query,n=e.seskari;let u=!1;if(0===r.length)return;let a=[];const s=r.replace(/[h‘]/g,"'").toLowerCase(),o=l(s),i=[];function l(e){return window.xuzganalojudri?e.replace(/ zei /g,"_zei_").split(" ").map(e=>e.replace(/_zei_/g," zei ")):e.split(" ")}function $(e){return e.reduce((e,t)=>(t&&e.push(He(t)),e),[])}function h(e,t,r){let n,u=[];for(let a=0;a<e.length;a++)for(let s=e.length-1;s>=a;s--)n=e.slice(a,s+1).join(" "),(!t||1===t&&n!==r)&&(u=g(n,u));return u}function p(e,t){const n=Ke(e);if(!n)return t?[t]:[];let u=[];if("@"===n[0]){n.shift(),u=n.slice().map(e=>({w:e,d:{nasezvafahi:!0}}));for(const e in sorcu[bau])for(let t=0;t<n.length;t++)e===n[t]&&(u[t]=sorcu[bau][e],u[t].w=e)}else for(const e in n){const t=De[n[e]];t?u.push(t):n[e].length>2&&(u=u.concat([{t:"",d:{nasezvafahi:!0},w:n[e],r:[n[e]]}]))}const a=$(u);return[{t:a.length>0?"lujvo":Pe(r)[0],w:r,d:{nasezvafahi:!0},rafsiDocuments:a}]}function f(e,t){let o=[[],[],[],[],[],[],[],[],[],[]];for(let t=0;t<e.length;t++){start=new Date;const n=He(e[t]);n&&(n.w===r||n.w===s?(n.rafsiDocuments=JSON.parse(JSON.stringify($(h(l(n.w))))).filter(({w:e})=>e!==n.w),u=!0,0===n.rafsiDocuments.length&&(n.rafsiDocuments=p(n.w,n)[0].rafsiDocuments),o[0].push(n)):n.g&&0===n.g.search(`^${r}(;|$)`)?o[1].push(n):n.r&&n.r.join(" ").search(`\\b${r}\\b`)>=0?o[5].push(n):n.w.search(`(^| )(${s}|${r})( |$)`)>=0?o[2].push(n):n.s&&n.s===r?o[3].push(n):n.s&&0===n.s.indexOf(r)?o[9].push(n):n.g&&n.g.search(`\\b${r}\\b`)>=0||n.w.search(`\\b(${s}|${r})`)>=0||n.w.search(`(${s}|${r})\\b`)>=0?o[4].push(n):n.d&&n.d.toLowerCase().search(`^${r}\\b`)>=0?o[8].push(n):n.d&&n.d.toLowerCase().search(`\\b${r}\\b`)>=0?o[6].push(n):o[7].push(n))}let i,f;if(o=o.map(e=>(e=>{if(0===e.length)return e;let t=[],r=[],u=[];for(c=0;c<e.length;c++)"gismu"===e[c].t?t.push(e[c]):"cmavo"===e[c].t?r.push(e[c]):u.push(e[c]);return t=t.sort(ze),r=r.sort(ze),u=u.sort(ze),"catni"===n?[t.concat(r),u]:t.concat(r).concat(u)})(e)),"catni"===n?(o=o.map(e=>(2!==e.length&&(e=[[],[]]),e)),i=a.concat(o[0][0],o[1][0]),f=o[3][0].concat(o[9][0],o[5][0],o[2][0],o[4][0],o[8][0],o[6][0],o[7][0],o[0][1],o[1][1],o[3][1],o[9][1],o[5][1],o[2][1],o[4][1],o[8][1],o[6][1],o[7][1])):(i=a.concat(o[0],o[1]),f=o[3].concat(o[9],o[5],o[2],o[4],o[8],o[6],o[7])),i&&i.w===s)for(let e=1;e<i.length;e++)i[e].l&&i[e].d===`{${s}}`&&(i.splice(e,1),--e);return[i.concat(f),i,f]}function g(e,t,r){const n=Object.keys(sorcu[bau]).reduce((t,r)=>{if(r.toLowerCase()===e.toLowerCase()||sorcu[bau][r].d&&sorcu[bau][r].d.toLowerCase()===`{${e.toLowerCase()}}`){const e=sorcu[bau][r];e.w=r,t.push(e)}return t},[]);if(n&&n.length>0)t=t.concat(n);else if(r){let r=p(e);r=r[0]&&r[0].rafsiDocuments?r[0].rafsiDocuments:void 0,t=t.concat([{t:"",d:{nasezvafahi:!0},w:e,rafsiDocuments:r}])}else if(1===e.replace(/ zei /g,"-zei-").split(" ").length){let r=Pe(e);if("cmavo compound"===r[0]||"zei-lujvo"===r[0]){r=r[1].split(" ");for(const e in r)t=g(r[e],t,2)}else if(""!==r[0]){r=r.filter((e,t,r)=>t%2!=0);for(const e in r)t=g(r[e].replace(/-/g,""),t,2)}}else{const r=Ke(e);if("@"===((r||[])[0]||"")){r.shift();let e=[];e=r.slice();for(const t in sorcu[bau])for(let n=0;n<r.length;n++)t===r[n]&&(e[n]=sorcu[bau][t],e[n].w=t);t.concat(e)}else if(r)for(const e in r)t.push(De[r[e]])}return t}function w(e,t){for(const t in sorcu[bau])if(window.storecache[t].includes(r.toLowerCase())){const r=sorcu[bau][t];r.w=t,e.push(r)}const n=f(e);if(t)return n[0];if(0===n[0].length&&(n[0]=p(r)||[]),0===n[0].length||n[0][0].w!==s){let e=/^[A-Zh]+[0-9\*]+$/.test(r)?[]:$(g(s,[]));return!window.muplis&&window.xuzganalojudri||(e=e.filter(({d:e})=>!e||!e.nasezvafahi)),e.length<=1?e.concat(n[0]):n[1].concat([{t:window.bangudecomp,ot:"vlaza'umei",w:r,rafsiDocuments:e}],n[2])}return n[0]}0===r.indexOf("^")||"$"===r.slice(-1)?a=$(f(Object.keys(sorcu[bau]).reduce((e,t)=>{if((t.match(r.toLowerCase())||[]).length>0){const r=sorcu[bau][t];r.w=t,e.push(r)}return e},[]).splice(0,200))[0]):"rimni"===n?a=Fe(r):!window.muplis&&o.length>1?(a=w(i,!0),u||a.push({t:window.bangudecomp,ot:"vlaza'umei",w:r,rafsiDocuments:$(h(o))}),u=!1):a=w(i),t(a)}function ue(e){return"."+e.replace(/\./g,"").replace(/^/,".").replace(/h/g,"'").toLowerCase().replace(/([aeiouy\.])u([aeiouy])/g,"$1w$2").replace(/([aeiouy\.])i([aeiouy])/g,"$1ɩ$2").replace(/au/g,"ḁ").replace(/ai/g,"ą").replace(/ei/g,"ę").replace(/oi/g,"ǫ").replace(/\./g,"")}function Fe(e){if(0===e.length)return;const t=[[],[],[],[],[],[],[],[],[]];let r,n,u;function a(e){return e.replace(/[lmnr]/g,"[lmnr]").replace(/[ɩw]/g,"[ɩw]").replace(/[pb]/g,"[pb]").replace(/[fv]/g,"[fv]").replace(/[td]/g,"[td]").replace(/[sz]/g,"[sz]").replace(/[cj]/g,"[cj]").replace(/[kg]/g,"[kg]").replace(/x/g,"[xk]")}u=ue(e).replace(/([aeiouḁąęǫy])/g,"$1-").split("-").slice(-3),n=u.slice(),u.length>=2&&(u[1]=u[1].replace(/[aeiouḁąęǫy]/,"[aeiouḁąęǫy]"));let s=/.*([aeiouḁąęǫy])/.exec(u[0]);return null===s?[]:(u[0]=s[1],2===u.length?s=Object.keys(sorcu[bau]).reduce((e,t)=>{const r=ue(t).replace(/([aeiouḁąęǫy])/g,"$1-").split("-").slice(-3);if(2===r.length&&r[0].split("").slice(-1)[0]===u[0].split("").slice(-1)[0]){let r=sorcu[bau][t];r.w=t,r=He(r),r&&e.push(r)}return e},[]):(r=a((u||[]).join("")),s=Object.keys(sorcu[bau]).reduce((e,t)=>{if((ue(t).match(r.toLowerCase()+"$")||[]).length>0){const r=sorcu[bau][t];r.w=t,e.push(r)}return e},[])),function(r){for(let s=0;s<r.length;s++){const o=He(r[s]);if(!o)continue;const i=ue(o.w).replace(/([aeiouḁąęǫy])/g,"$1-").split("-").slice(-3);if(u&&i[0].slice(-1)!==u[0].slice(-1))continue;const l=i[1].slice(-1),$=i[1].slice(-3,-1)===n[1].slice(-3,-1).split("").reverse().join(""),h=n[1].slice(-1);let p=!1;("a"===h&&l.search("[eao]")>=0||"e"===h&&l.search("[iea]")>=0||"i"===h&&l.search("[ie]")>=0||"o"===h&&l.search("[aou]")>=0||"u"===h&&l.search("[aou]")>=0)&&(p=!0),ue(o.w)!==e?i[2]||""===u[2]?(i[0].match(u[0])||[]).length>0&&(i[1].match(u[1])||[]).length>0&&h===l?t[1].push(o):(i[0].match(u[0])||[]).length>0&&(i[1].match(u[1])||[]).length>0&&p?t[2].push(o):(i[1].match(a(u[2]||""))||[]).length>0&&h===l?t[3].push(o):(i[1].match(a(u[2]||""))||[]).length>0&&p?t[4].push(o):(i[0].match(u[0])||[]).length>0&&p&&$?t[5].push(o):(i[0].match(u[0])||[]).length>0&&(i[1].match(u[1])||[]).length>0&&t[6].push(o):u[1]&&(i[0].match(u[0])||[]).length>0&&(i[1].match(u[1])||[]).length>0?t[7].push(o):t[8].push(o):t[0].push(o)}return t.reduce((e,t)=>e.concat((e=>{if(0===e.length)return[];const t=[],r=[],n=[],u=[],a=[];for(c=0;c<e.length;c++)"gismu"===e[c].t?t.push(e[c]):"experimental gismu"===e[c].t?r.push(e[c]):"cmavo"===e[c].t?n.push(e[c]):"experimental cmavo"===e[c].t?u.push(e[c]):a.push(e[c]);return t.sort(ze).concat(r.sort(ze),n.sort(ze),u.sort(ze),a.sort(ze))})(t)),[])}(s))}