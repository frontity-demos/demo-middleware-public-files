(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[1],{37:function(e,t,a){"use strict";a.r(t);var n=a(3),l=a(1),r=a(2),s=a(7),c=a(25),i=a(0);var o=Object(r.connect)(e=>{var{state:t,item:a}=e,n=t.source.author[a.author],l=new Date(a.date);return Object(i.jsx)("article",null,Object(i.jsx)(s.a,{link:a.link},Object(i.jsx)(b,{dangerouslySetInnerHTML:{__html:a.title.rendered}})),Object(i.jsx)("div",null,n&&Object(i.jsx)(u,{link:n.link},Object(i.jsx)(j,null,"By ",Object(i.jsx)("b",null,n.name))),Object(i.jsx)(x,null," ","on ",Object(i.jsx)("b",null,l.toDateString()))),t.theme.featured.showOnList&&Object(i.jsx)(c.a,{id:a.featured_media}),a.excerpt&&Object(i.jsx)(O,{dangerouslySetInnerHTML:{__html:a.excerpt.rendered}}))}),b=Object(n.a)("h1",{target:"e1p5zhim0",label:"Title"})({name:"m6r8cl",styles:"font-size:2rem;color:rgba(12,17,43);margin:0;padding-top:24px;padding-bottom:8px;box-sizing:border-box;"}),j=Object(n.a)("span",{target:"e1p5zhim1",label:"AuthorName"})({name:"s9xu3a",styles:"color:rgba(12,17,43,0.9);font-size:0.9em;"}),u=Object(n.a)(s.a,{target:"e1p5zhim2",label:"StyledLink"})({name:"qar1bk",styles:"padding:15px 0;"}),x=Object(n.a)("span",{target:"e1p5zhim3",label:"PublishDate"})({name:"s9xu3a",styles:"color:rgba(12,17,43,0.9);font-size:0.9em;"}),O=Object(n.a)("div",{target:"e1p5zhim4",label:"Excerpt"})({name:"11j6eo1",styles:"line-height:1.6em;color:rgba(12,17,43,0.8);"});var d=Object(r.connect)(e=>{var{state:t,actions:a}=e,{next:n,previous:r}=t.source.get(t.router.link);return Object(l.useEffect)(()=>{n&&a.source.fetch(n)},[]),Object(i.jsx)("div",null,n&&Object(i.jsx)(s.a,{link:n},Object(i.jsx)(m,null,"← Older posts")),r&&n&&" - ",r&&Object(i.jsx)(s.a,{link:r},Object(i.jsx)(m,null,"Newer posts →")))}),m=Object(n.a)("em",{target:"esft81u0",label:"Text"})({name:"xhf1f8",styles:"display:inline-block;margin-top:16px;"});t.default=Object(r.connect)(e=>{var{state:t}=e,a=t.source.get(t.router.link);return Object(i.jsx)(p,null,a.isTaxonomy&&Object(i.jsx)(g,null,a.taxonomy,":"," ",Object(i.jsx)("b",null,Object(r.decode)(t.source[a.taxonomy][a.id].name))),a.isAuthor&&Object(i.jsx)(g,null,"Author: ",Object(i.jsx)("b",null,Object(r.decode)(t.source.author[a.id].name))),a.items.map(e=>{var{type:a,id:n}=e,l=t.source[a][n];return Object(i.jsx)(o,{key:l.id,item:l})}),Object(i.jsx)(d,null))});var p=Object(n.a)("section",{target:"exiu6z10",label:"Container"})({name:"447sei",styles:"width:800px;margin:0;padding:24px;list-style:none;"}),g=Object(n.a)("h3",{target:"exiu6z11",label:"Header"})({name:"p2cv",styles:"font-weight:300;text-transform:capitalize;color:rgba(12,17,43,0.9);"})}}]);