if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,b)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const f=e=>d(e,c),l={module:{uri:c},exports:a,require:f};i[c]=Promise.all(r.map((e=>l[e]||f(e)))).then((e=>(b(...e),a)))}}define(["./workbox-bc77d2d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/03/24/hello-world/index.html",revision:"e5acd3fb105130f537392b77c8bd9803"},{url:"2022/03/27/java学习笔记/index.html",revision:"47fb37e16a96a340280eab4843a33560"},{url:"2022/03/27/markdown 语法/index.html",revision:"af2b11a51ddbae71355852bf594b1732"},{url:"2022/05/22/常用dos命令/index.html",revision:"7a12a9cca172e9786a3f0bb079eb0185"},{url:"2022/10/27/HTML/index.html",revision:"66f9ce8554e1c8a05cfac6902a522518"},{url:"2023/03/16/c++笔记/index.html",revision:"6467adfcfd05dfb590ea7df3f64eef50"},{url:"2023/03/17/python笔记/index.html",revision:"513e4f253f6ac9abb57d99f69da64594"},{url:"404.html",revision:"d666e392fce9fecd7aea0fed80a0bd7e"},{url:"archives/2022/03/index.html",revision:"0000282ea2978f31a72b4393f1e7d03b"},{url:"archives/2022/05/index.html",revision:"74fd6ba7cb9fd32cc4b689fa1589016d"},{url:"archives/2022/10/index.html",revision:"9c559a3f40e5b742a4e6b9d3de2245c3"},{url:"archives/2022/index.html",revision:"f363dfe3d8f9b37a1e4ba8a61bffa37c"},{url:"archives/2023/03/index.html",revision:"bd92983fd806430bc2f397ad9f27c539"},{url:"archives/2023/index.html",revision:"e8b1f76e446bcb057e275b887f95228e"},{url:"archives/index.html",revision:"b1da9d5179726adebe511f0885478d9d"},{url:"categories/index.html",revision:"446ef152b88f8aaeeaf5bede3fd6f878"},{url:"css/index.css",revision:"51861bd4448c7907985399d4b03bd8ed"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"726d7bc17d2656a2d4037d01ba308fef"},{url:"img/18.jpg",revision:"bf7356186727e649795025d38e16241a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/pixel/01.webp",revision:"2376a01e9c2fac72ee9267c1395ac4c3"},{url:"img/pixel/02.webp",revision:"b5b63248701ba90891d5bf200e40f2a0"},{url:"img/pixel/03.webp",revision:"639edd820f624fab39bb93e98ce95ca6"},{url:"img/pixel/04.webp",revision:"8486f302acf3207e99848b36016a080e"},{url:"img/pixel/05.webp",revision:"aab99802567bbcc6f964b95e53b5651c"},{url:"img/pixel/06.webp",revision:"d1b13d0034b044356f5786b602b0eec4"},{url:"img/pixel/07.webp",revision:"394485c3f7c5cad5cbcbe8dc8872347e"},{url:"img/pixel/08.webp",revision:"ca4a92f814b249b84be145faf3a80660"},{url:"img/pixel/09.webp",revision:"eebaa3ee98d47e018b82de9fb319d501"},{url:"img/pixel/10.webp",revision:"179049070097c87f0db3181771126296"},{url:"img/pixel/11.webp",revision:"883419a3ed2b286f52bf36e7effe4f0e"},{url:"img/pixel/12.webp",revision:"78f60ec14aa5574db4cc2a45360dd642"},{url:"img/pixel/13.webp",revision:"c357457d2b2ecfc8754420610a7e923e"},{url:"img/pixel/14.webp",revision:"edf552ad5437a2b725a8e90ef00d516e"},{url:"img/pixel/15.webp",revision:"82e6d6cb14f1fb5cd023f4f0be50f4da"},{url:"img/pixel/16.webp",revision:"5cd0e995faf56d9d9940da4d52f9ce99"},{url:"img/pixel/17.webp",revision:"8f603296009702bad49717c1aa83e675"},{url:"index.html",revision:"bf5f99e2868f5b9dccdbafc346cd36b1"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"a23fc141b32bba5ce10f46ba90b4796c"},{url:"pixel/index.html",revision:"2ceb173ac5bc45685075ac47f85d8acf"},{url:"tags/index.html",revision:"9a1f50bc16c2b745ebd80d4ee887f92c"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
