(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3CW5":function(e,t,a){"use strict";a("YbXK"),a("cFtU");var n=a("q1tI"),r=a.n(n),u=a("Wbzz");t.a=function(e){var t=e.numPages,a=e.currentPage,n=e.contextPage;return t<=1?null:r.a.createElement("ul",{className:"flex pagination mt-8 mb-0"},Array.from({length:t}).map((function(e,t){var l=t+1,c="/blog/"+(n?n+"/":""),o=1===l?c:c+"page/"+l;return r.a.createElement("li",{className:a===l?"current":"btn",key:o},a===l?r.a.createElement("span",null,l):r.a.createElement(u.Link,{to:o},l))})))}},GqNj:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),u=a("M4XY"),l=a.n(u),c=a("Wbzz"),o=a("ZHiO"),f=a("IJUe");t.a=function(e){var t=e.node;return r.a.createElement("article",{className:"blog-list__post",key:t.fields.slug},r.a.createElement("div",{className:"blog-list__category"},t.frontmatter.category.map((function(e,t,a){return r.a.createElement(o.a,{arrCount:a.length,index:t,key:e},r.a.createElement(c.Link,{to:"/blog/category/"+l()(e)},e))}))),r.a.createElement(c.Link,{className:"hover:no-underline",to:t.fields.slug},r.a.createElement("h2",{className:"blog-list__post-title"},t.frontmatter.title),t.frontmatter.subtitle&&r.a.createElement("h3",{className:"blog-list__post-subtitle"},t.frontmatter.subtitle)),r.a.createElement("div",{className:"blog-list__date"},Object(f.a)(t.frontmatter.date)))}},IJUe:function(e,t,a){"use strict";t.a=function(e){var t=new Date(e);return t.getFullYear()+" / "+(t.getMonth()+1)+" / "+t.getDate()}},M4XY:function(e,t,a){(function(t){a("sC2a"),a("q8oJ"),a("C9fy"),a("8npG"),a("Ll4R"),a("klQ5");var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",l="["+u+"]",c="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",o="\\d+",f="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",s="[^\\ud800-\\udfff"+u+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",m="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",g="[A-Z\\xc0-\\xd6\\xd8-\\xde]",x="(?:"+i+"|"+s+")",b="(?:"+g+"|"+s+")",E="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+E+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",m,d].join("|")+")[\\ufe0e\\ufe0f]?"+E+")*"),v="(?:"+[f,m,d].join("|")+")"+p,y=RegExp("['’]","g"),N=RegExp(c,"g"),h=RegExp([g+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[l,g,"$"].join("|")+")",b+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[l,g+x,"$"].join("|")+")",g+"?"+x+"+(?:['’](?:d|ll|m|re|s|t|ve))?",g+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",o,v].join("|"),"g"),j=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,A="object"==typeof t&&t&&t.Object===Object&&t,O="object"==typeof self&&self&&self.Object===Object&&self,_=A||O||Function("return this")();var L,z=(L={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"ss"},function(e){return null==L?void 0:L[e]});var C=Object.prototype.toString,I=_.Symbol,k=I?I.prototype:void 0,U=k?k.toString:void 0;function Z(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==C.call(e)}(e))return U?U.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function w(e){return null==e?"":Z(e)}var S,P=(S=function(e,t,a){return e+(a?"-":"")+t.toLowerCase()},function(e){return function(e,t,a,n){var r=-1,u=e?e.length:0;for(n&&u&&(a=e[++r]);++r<u;)a=t(a,e[r],r,e);return a}(function(e,t,a){return e=w(e),void 0===(t=a?void 0:t)?function(e){return j.test(e)}(e)?function(e){return e.match(h)||[]}(e):function(e){return e.match(n)||[]}(e):e.match(t)||[]}(function(e){return(e=w(e))&&e.replace(r,z).replace(N,"")}(e).replace(y,"")),S,"")});e.exports=P}).call(this,a("yLpj"))},ZHiO:function(e,t,a){"use strict";var n=a("q1tI");t.a=function(e){var t=e.arrCount,a=e.index,r=e.children;return 1===t?n.createElement(n.Fragment,null,r):a+2<t?n.createElement(n.Fragment,null,r,", "):a+1===t?n.createElement(n.Fragment,null," ","&"," ",r):n.createElement(n.Fragment,null,r)}},pv0P:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return m}));var n=a("q1tI"),r=a.n(n),u=a("M4XY"),l=a.n(u),c=a("Bl7J"),o=a("vrFN"),f=a("3CW5"),i=a("GqNj"),s=a("Wbzz");t.default=function(e){var t=e.data,a=e.pageContext,n=t.allMdx,u=a.currentPage,m=a.numPages,d=a.category,g=a.allCategories;return r.a.createElement(c.a,null,r.a.createElement(o.a,{title:d}),r.a.createElement("h1",{className:"blog-list__mainHeading"},d),r.a.createElement("div",{className:"md:flex"},r.a.createElement("div",{className:"md:w-3/4 md:pr-4 mb-16 md:mb-0"},r.a.createElement("div",{className:"blog-list__posts"},n.edges.map(i.a),r.a.createElement(f.a,{currentPage:u,numPages:m,contextPage:"category/"+l()(d)}))),r.a.createElement("div",{className:"md:w-1/4 md:pl-4"},r.a.createElement("h3",{className:"mt-0"},"Categories:"),r.a.createElement("div",{className:"blog-categories"},r.a.createElement(s.Link,{to:"/blog",className:"blog-categories__cat"},"All Categories"),g.map((function(e,t){return r.a.createElement(s.Link,{key:"cat-"+t,to:"/blog/category/"+l()(e),className:"blog-categories__cat"},e)}))))))};var m="2742864684"}}]);
//# sourceMappingURL=component---src-layouts-blog-category-js-8fdce2b10cdda9f67f9b.js.map