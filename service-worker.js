if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,c)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(i[b])return;let l={};const a=e=>d(e,b),f={module:{uri:b},exports:l,require:a};i[b]=Promise.all(r.map((e=>f[e]||a(e)))).then((e=>(c(...e),l)))}}define(["./workbox-bc77d2d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/03/24/hello-world/index.html",revision:"ab1b02ce3b531d7b707db21eef918ca6"},{url:"2022/03/27/java学习笔记/index.html",revision:"09d63614184783a434eba801121df145"},{url:"2022/03/27/markdown 语法/index.html",revision:"6eab70ad111fc884afc35d973e7af9ed"},{url:"404.html",revision:"7763aebe9ae5a43a2aa3ddd4650e5dea"},{url:"archives/2022/03/index.html",revision:"c67a6dc577f2af6c7763661e00b4f4ba"},{url:"archives/2022/index.html",revision:"9ce2fcbedd751c969b66c0b7e13e805f"},{url:"archives/index.html",revision:"bcf5c96ce99c8dc12d6a7eae734da0b9"},{url:"categories/index.html",revision:"c01ae1e93982bab71154bd9dd3ff7307"},{url:"css/index.css",revision:"6591347d89c3df11ecb680538d86505d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"7d3de2041b4fbf105297c41de08995be"},{url:"img/18.jpg",revision:"bf7356186727e649795025d38e16241a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/pixel/01.webp",revision:"2376a01e9c2fac72ee9267c1395ac4c3"},{url:"img/pixel/02.webp",revision:"b5b63248701ba90891d5bf200e40f2a0"},{url:"img/pixel/03.webp",revision:"639edd820f624fab39bb93e98ce95ca6"},{url:"img/pixel/04.webp",revision:"8486f302acf3207e99848b36016a080e"},{url:"img/pixel/05.webp",revision:"aab99802567bbcc6f964b95e53b5651c"},{url:"img/pixel/06.webp",revision:"d1b13d0034b044356f5786b602b0eec4"},{url:"img/pixel/07.webp",revision:"394485c3f7c5cad5cbcbe8dc8872347e"},{url:"img/pixel/08.webp",revision:"ca4a92f814b249b84be145faf3a80660"},{url:"img/pixel/09.webp",revision:"eebaa3ee98d47e018b82de9fb319d501"},{url:"img/pixel/10.webp",revision:"179049070097c87f0db3181771126296"},{url:"img/pixel/11.webp",revision:"883419a3ed2b286f52bf36e7effe4f0e"},{url:"img/pixel/12.webp",revision:"78f60ec14aa5574db4cc2a45360dd642"},{url:"img/pixel/13.webp",revision:"c357457d2b2ecfc8754420610a7e923e"},{url:"img/pixel/14.webp",revision:"edf552ad5437a2b725a8e90ef00d516e"},{url:"img/pixel/15.webp",revision:"82e6d6cb14f1fb5cd023f4f0be50f4da"},{url:"img/pixel/16.webp",revision:"5cd0e995faf56d9d9940da4d52f9ce99"},{url:"img/pixel/17.webp",revision:"8f603296009702bad49717c1aa83e675"},{url:"index.html",revision:"98bbdf28371e5083fb0236415d48ce91"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"0b5cfe0d1b6b7b37145f76975d3d0364"},{url:"pixel/index.html",revision:"c583faf65d33cb14a00ebb6f9fefcfee"},{url:"tags/index.html",revision:"6716d6420e32c3855d6960c868096389"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
