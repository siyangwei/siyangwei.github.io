if(!self.define){let e,i={};const r=(r,d)=>(r=new URL(r+".js",d).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(d,c)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(i[b])return;let l={};const f=e=>r(e,b),a={module:{uri:b},exports:l,require:f};i[b]=Promise.all(d.map((e=>a[e]||f(e)))).then((e=>(c(...e),l)))}}define(["./workbox-bc77d2d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/03/24/hello-world/index.html",revision:"bf156198bd039776409bf89640e17b87"},{url:"2022/03/27/java学习笔记/index.html",revision:"0b659608204b27f59fdbb25fbf4bec39"},{url:"2022/03/27/markdown 语法/index.html",revision:"53f2e956759a19882a7df7baf0becac7"},{url:"2022/05/22/常用dos命令/index.html",revision:"d77d0395bcd8063c0a6da323108f1f79"},{url:"2022/10/27/HTML/index.html",revision:"1043900301bd342a49133c93e3e3673b"},{url:"2023/03/16/c++笔记/index.html",revision:"87e3ff3e3b5f352b34070c3f83320d7c"},{url:"2023/03/17/python笔记/index.html",revision:"e0b4afe6b884d91bb7800e9c06112932"},{url:"404.html",revision:"dd91391f331b1f362bbdc474cdf64623"},{url:"archives/2022/03/index.html",revision:"1e2a7e71dc1e30abac7236c287b6f64f"},{url:"archives/2022/05/index.html",revision:"114bea1eaee2f6b99dabd895b9a4e209"},{url:"archives/2022/10/index.html",revision:"01089d1aa2ee0d66a3a2acefec20f939"},{url:"archives/2022/index.html",revision:"8e732d6252909586b8d6679ca50aa1ec"},{url:"archives/2023/03/index.html",revision:"f4d64ab1662875d01250df37f65230d2"},{url:"archives/2023/index.html",revision:"3662bfae103121cfeff0c191ccde6573"},{url:"archives/index.html",revision:"dc41264802fec9af832775b54fb59036"},{url:"categories/index.html",revision:"36d1dcab332a369f7ca0eba0c4e60b43"},{url:"css/index.css",revision:"51861bd4448c7907985399d4b03bd8ed"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"9eb56a9573cece799ee7c89e9113ec17"},{url:"img/18.jpg",revision:"bf7356186727e649795025d38e16241a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/pixel/01.webp",revision:"2376a01e9c2fac72ee9267c1395ac4c3"},{url:"img/pixel/02.webp",revision:"b5b63248701ba90891d5bf200e40f2a0"},{url:"img/pixel/03.webp",revision:"639edd820f624fab39bb93e98ce95ca6"},{url:"img/pixel/04.webp",revision:"8486f302acf3207e99848b36016a080e"},{url:"img/pixel/05.webp",revision:"aab99802567bbcc6f964b95e53b5651c"},{url:"img/pixel/06.webp",revision:"d1b13d0034b044356f5786b602b0eec4"},{url:"img/pixel/07.webp",revision:"394485c3f7c5cad5cbcbe8dc8872347e"},{url:"img/pixel/08.webp",revision:"ca4a92f814b249b84be145faf3a80660"},{url:"img/pixel/09.webp",revision:"eebaa3ee98d47e018b82de9fb319d501"},{url:"img/pixel/10.webp",revision:"179049070097c87f0db3181771126296"},{url:"img/pixel/11.webp",revision:"883419a3ed2b286f52bf36e7effe4f0e"},{url:"img/pixel/12.webp",revision:"78f60ec14aa5574db4cc2a45360dd642"},{url:"img/pixel/13.webp",revision:"c357457d2b2ecfc8754420610a7e923e"},{url:"img/pixel/14.webp",revision:"edf552ad5437a2b725a8e90ef00d516e"},{url:"img/pixel/15.webp",revision:"82e6d6cb14f1fb5cd023f4f0be50f4da"},{url:"img/pixel/16.webp",revision:"5cd0e995faf56d9d9940da4d52f9ce99"},{url:"img/pixel/17.webp",revision:"8f603296009702bad49717c1aa83e675"},{url:"index.html",revision:"6dff5096a7432a2dafdb4b229bef14c2"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"de9861c74c01bf1651f455be858c4298"},{url:"pixel/index.html",revision:"59d1e70065f6fe4681eca00af53b3408"},{url:"tags/index.html",revision:"0b80c0d1fbe79d508028310ba90faa3f"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
