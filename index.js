import{a as v,S,i as c}from"./assets/vendor-D73Uttp0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const L="https://pixabay.com/api/",q="46793755-9d28ad9f5c835a0a0339cf9e7";async function m(o,t,s){return(await v.get(L,{params:{key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:s,page:t}})).data}function f(o){return o.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,comments:n,downloads:b})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${a}"
              width="360"
            />
          </a>
          <div class="gallery-container">
            <div class="gallery-info-item">
              <h2 class="tittle">Likes</h2>
              <p class="number">${e}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Views</h2>
              <p class="number">${r}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Comments</h2>
              <p class="number">${n}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Downloads</h2>
              <p class="number">${b}</p>
            </div>
          </div>
        </li>`).join("")}const w=document.querySelector("body"),g=document.querySelector(".form"),x=document.querySelector(".input-text"),p=document.querySelector(".gallery"),l=document.querySelector(".loader"),i=document.querySelector(".load-more");g.addEventListener("submit",R);i.addEventListener("click",E);l.style.display="none";i.style.display="none";let u=15,d="",y=1,h=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});async function R(o){if(o.preventDefault(),y=1,p.innerHTML="",l.style.display="block",i.style.display="none",d=x.value.trim(),!d){l.style.display="none",i.style.display="none",c.error({title:"Error!",titleSize:"18px",message:"Please, enter your search criteria",position:"topRight"});return}try{const t=await m(d,y,u);if(t.total===0){c.error({title:"Error!",titleSize:"18px",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.style.display="none";return}t.hits.length<15?i.style.display="none":i.style.display="block",p.insertAdjacentHTML("beforeend",f(t.hits)),h.refresh()}catch{c.error({title:"Error!",titleSize:"18px",message:"Sorry, an error occured. Try again later!",position:"topRight"})}finally{l.style.display="none",g.reset()}}async function E(){y+=1;try{l.style.display="block",i.style.display="none";const o=await m(d,y,u);p.insertAdjacentHTML("beforeend",f(o.hits)),h.refresh();const t=document.querySelector(".gallery-item");if(t){const s=t.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}y*u>=o.totalHits?(i.style.display="none",w.style.paddingBottom=0,c.show({title:"Hey!",titleSize:"18px",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):i.style.display="block"}catch{c.error({title:"Error!",titleSize:"18px",message:"Sorry, an error occured. Try again later!",position:"topRight"})}finally{l.style.display="none"}}
//# sourceMappingURL=index.js.map
