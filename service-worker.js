if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,c)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(i[b])return;let l={};const f=e=>d(e,b),a={module:{uri:b},exports:l,require:f};i[b]=Promise.all(r.map((e=>a[e]||f(e)))).then((e=>(c(...e),l)))}}define(["./workbox-bc77d2d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/03/24/hello-world/index.html",revision:"0ba90a91457b1ac9fbe2ce2a892b5b06"},{url:"2022/03/27/java学习笔记/index.html",revision:"9c9f659fd3a73717c9c190972d192dc6"},{url:"2022/03/27/markdown 语法/index.html",revision:"3f5e2d9238a2019d6f05cef1cd4f0349"},{url:"2022/05/22/常用dos命令/index.html",revision:"922168b3d3c7130963a5f26aeeb56035"},{url:"2022/10/27/HTML/index.html",revision:"d9e9fd89d2b86dab05d0848dbd94b29d"},{url:"2023/03/16/c++笔记/index.html",revision:"15b5704b0506656e448ae7bdcc8fec76"},{url:"2023/03/17/python笔记/index.html",revision:"f75a0f6aba47ca17fecd8289d7a92bd4"},{url:"404.html",revision:"3f183d207a569370d90c3bba7ca2b9f1"},{url:"archives/2022/03/index.html",revision:"b1f8beb0f9f6bca81f0aba21d174f90a"},{url:"archives/2022/05/index.html",revision:"a9773843ee4c3c97ca541f48208ae0ac"},{url:"archives/2022/10/index.html",revision:"c01516d5f07ef5dfdcb9723d31fcf7e4"},{url:"archives/2022/index.html",revision:"a8cc1e41671d734708f8b820f699c2b1"},{url:"archives/2023/03/index.html",revision:"333bf4ad36195c80438104f50e4fb6db"},{url:"archives/2023/index.html",revision:"d155e210b4920ff772d80723a2fbbb21"},{url:"archives/index.html",revision:"7209e37d8d9f1c64ae0d8e209c965a70"},{url:"categories/index.html",revision:"5084d377bd9803165faac4ed0b389c82"},{url:"css/index.css",revision:"51861bd4448c7907985399d4b03bd8ed"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"9eb56a9573cece799ee7c89e9113ec17"},{url:"img/18.jpg",revision:"bf7356186727e649795025d38e16241a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/pixel/01.webp",revision:"2376a01e9c2fac72ee9267c1395ac4c3"},{url:"img/pixel/02.webp",revision:"b5b63248701ba90891d5bf200e40f2a0"},{url:"img/pixel/03.webp",revision:"639edd820f624fab39bb93e98ce95ca6"},{url:"img/pixel/04.webp",revision:"8486f302acf3207e99848b36016a080e"},{url:"img/pixel/05.webp",revision:"aab99802567bbcc6f964b95e53b5651c"},{url:"img/pixel/06.webp",revision:"d1b13d0034b044356f5786b602b0eec4"},{url:"img/pixel/07.webp",revision:"394485c3f7c5cad5cbcbe8dc8872347e"},{url:"img/pixel/08.webp",revision:"ca4a92f814b249b84be145faf3a80660"},{url:"img/pixel/09.webp",revision:"eebaa3ee98d47e018b82de9fb319d501"},{url:"img/pixel/10.webp",revision:"179049070097c87f0db3181771126296"},{url:"img/pixel/11.webp",revision:"883419a3ed2b286f52bf36e7effe4f0e"},{url:"img/pixel/12.webp",revision:"78f60ec14aa5574db4cc2a45360dd642"},{url:"img/pixel/13.webp",revision:"c357457d2b2ecfc8754420610a7e923e"},{url:"img/pixel/14.webp",revision:"edf552ad5437a2b725a8e90ef00d516e"},{url:"img/pixel/15.webp",revision:"82e6d6cb14f1fb5cd023f4f0be50f4da"},{url:"img/pixel/16.webp",revision:"5cd0e995faf56d9d9940da4d52f9ce99"},{url:"img/pixel/17.webp",revision:"8f603296009702bad49717c1aa83e675"},{url:"index.html",revision:"6107fa2495c3c756774955dd8ced4a70"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"74962c14dc0e289f6b7efea404449fb1"},{url:"pixel/index.html",revision:"59d1e70065f6fe4681eca00af53b3408"},{url:"tags/index.html",revision:"bb964c81fc805e4e45e4ef90ef40f69c"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
