if(!self.define){let e,i={};const r=(r,d)=>(r=new URL(r+".js",d).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(d,c)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(i[b])return;let a={};const f=e=>r(e,b),l={module:{uri:b},exports:a,require:f};i[b]=Promise.all(d.map((e=>l[e]||f(e)))).then((e=>(c(...e),a)))}}define(["./workbox-bc77d2d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/03/27/java学习笔记/index.html",revision:"107cd82f3b8f5d064b25fd322605e43c"},{url:"2022/03/27/markdown 语法/index.html",revision:"4383c10bd6449a1794ab6c297d12d137"},{url:"2022/05/22/常用dos命令/index.html",revision:"bcd941a963197128b81da6741a2fa217"},{url:"2023/03/16/c++笔记/index.html",revision:"26536f44bb41a0fa895a328c0e4f97af"},{url:"2023/03/17/python笔记/index.html",revision:"933efd45e04f85490d6f040ef7ce9efb"},{url:"2024/05/21/linux操作系统/index.html",revision:"2a19b9e496131f5f59693d4d5eda3431"},{url:"404.html",revision:"2b62c81cefed6399bf87bfcc9ea20547"},{url:"archives/2022/03/index.html",revision:"a4dbb26377829747285284281495e37a"},{url:"archives/2022/05/index.html",revision:"d583127e31fcb9c9bede6c321a1e38bb"},{url:"archives/2022/index.html",revision:"ef114f9203d0b7b3a1ede1f69399a196"},{url:"archives/2023/03/index.html",revision:"52068ec3056219cda4e9b122b684039f"},{url:"archives/2023/index.html",revision:"57e450b072212097f12b7976fc8b80c8"},{url:"archives/2024/05/index.html",revision:"3db94a9abfe28338e93017d412ca0678"},{url:"archives/2024/index.html",revision:"878f5102b7a4a39aeaf223f9209001af"},{url:"archives/index.html",revision:"fe877f8fce152af50f90c90990fe7eb4"},{url:"categories/index.html",revision:"af2d9d665c4bab5dbb17d3286a3baecc"},{url:"css/index.css",revision:"51861bd4448c7907985399d4b03bd8ed"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"62cbf7c59faa4d1a1c9a58174eaccebb"},{url:"img/18.jpg",revision:"bf7356186727e649795025d38e16241a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/pixel/01.webp",revision:"2376a01e9c2fac72ee9267c1395ac4c3"},{url:"img/pixel/02.webp",revision:"b5b63248701ba90891d5bf200e40f2a0"},{url:"img/pixel/03.webp",revision:"639edd820f624fab39bb93e98ce95ca6"},{url:"img/pixel/04.webp",revision:"8486f302acf3207e99848b36016a080e"},{url:"img/pixel/05.webp",revision:"aab99802567bbcc6f964b95e53b5651c"},{url:"img/pixel/06.webp",revision:"d1b13d0034b044356f5786b602b0eec4"},{url:"img/pixel/07.webp",revision:"394485c3f7c5cad5cbcbe8dc8872347e"},{url:"img/pixel/08.webp",revision:"ca4a92f814b249b84be145faf3a80660"},{url:"img/pixel/09.webp",revision:"eebaa3ee98d47e018b82de9fb319d501"},{url:"img/pixel/10.webp",revision:"179049070097c87f0db3181771126296"},{url:"img/pixel/11.webp",revision:"883419a3ed2b286f52bf36e7effe4f0e"},{url:"img/pixel/12.webp",revision:"78f60ec14aa5574db4cc2a45360dd642"},{url:"img/pixel/13.webp",revision:"c357457d2b2ecfc8754420610a7e923e"},{url:"img/pixel/14.webp",revision:"edf552ad5437a2b725a8e90ef00d516e"},{url:"img/pixel/15.webp",revision:"82e6d6cb14f1fb5cd023f4f0be50f4da"},{url:"img/pixel/16.webp",revision:"5cd0e995faf56d9d9940da4d52f9ce99"},{url:"img/pixel/17.webp",revision:"8f603296009702bad49717c1aa83e675"},{url:"index.html",revision:"9eb2e788e5dde609602a88d60f6c3ea2"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"059e0abfa5d5cba85f6e16d44f3526cc"},{url:"pixel/index.html",revision:"8c40f78607fbb2dd093dfaaa1c9dd8c8"},{url:"tags/index.html",revision:"0ee6cf320c124684e7931eba386fb391"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
