if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"680ee1fd0bc7fb31cc1a8f484ebcbe51"},{url:"/_next/static/7sOvHmxVJzaJSeE8xoMDr/_buildManifest.js",revision:"7f280b77eb190da0be0e75bebfa6925a"},{url:"/_next/static/7sOvHmxVJzaJSeE8xoMDr/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-55d1d63d3111121f.js",revision:"7sOvHmxVJzaJSeE8xoMDr"},{url:"/_next/static/chunks/162-a7646c7f59383761.js",revision:"7sOvHmxVJzaJSeE8xoMDr"},{url:"/_next/static/chunks/173-2a6226423b747fa0.js",revision:"7sOvHmxVJzaJSeE8xoMDr"},{url:"/_next/static/chunks/215-b312022d36f4087f.js",revision:"7sOvHmxVJzaJSeE8xoMDr"},{url:"/_next/static/chunks/4bd1b696-cf367ca79f3c05ec.js",revision:"7sOvHmxVJzaJSeE8xoMDr"},{url:"/_next/static/chunks/745-739f3e1d71cb865d.js",revision:"7sOvHmxVJzaJSeE8xoMDr"},{url:"/_next/static/chunks/app/_not-found/page-1813d98b82b02f0e.js",revision:"7sOvHmxVJzaJSeE8xoMDr"},{url:"/_next/static/chunks/app/layout-5e3ff5ea157e801d.js",revision:"7sOvHmxVJzaJSeE8xoMDr"},{url:"/_next/static/chunks/app/page-2783e26f4e524c2e.js",revision:"7sOvHmxVJzaJSeE8xoMDr"},{url:"/_next/static/chunks/app/pedidos/page-2cfea8dd1b13dcc8.js",revision:"7sOvHmxVJzaJSeE8xoMDr"},{url:"/_next/static/chunks/framework-56c6fb34bb17b733.js",revision:"7sOvHmxVJzaJSeE8xoMDr"},{url:"/_next/static/chunks/main-3d17300ef288c771.js",revision:"7sOvHmxVJzaJSeE8xoMDr"},{url:"/_next/static/chunks/main-app-094b1a462aa094e2.js",revision:"7sOvHmxVJzaJSeE8xoMDr"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"7sOvHmxVJzaJSeE8xoMDr"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"7sOvHmxVJzaJSeE8xoMDr"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-ddcc7ffd2390fe52.js",revision:"7sOvHmxVJzaJSeE8xoMDr"},{url:"/_next/static/css/34b66acfd6a4fdbe.css",revision:"34b66acfd6a4fdbe"},{url:"/_next/static/media/pizza.609b68e5.png",revision:"c85e51db42978901ee5775059719d58d"},{url:"/_next/static/media/userOrder.9df2b2c8.png",revision:"7f69f4f5b661040caa62630a3175d268"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/manifest.json",revision:"0041e0548f8bce27f83a29e2556aa4f3"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
