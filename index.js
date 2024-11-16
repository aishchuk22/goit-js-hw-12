import{S as d,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",y="46793755-9d28ad9f5c835a0a0339cf9e7";function h(s){const r=new URLSearchParams({key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${f}?${r}`).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})}function g(s){return s.map(({webformatURL:r,largeImageURL:i,tags:a,likes:e,views:t,comments:o,downloads:m})=>`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${r}"
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
              <p class="number">${t}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Comments</h2>
              <p class="number">${o}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Downloads</h2>
              <p class="number">${m}</p>
            </div>
          </div>
        </li>`).join("")}const p=document.querySelector(".form"),c=document.querySelector(".input-text"),u=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";p.addEventListener("submit",S);const v=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function S(s){if(s.preventDefault(),u.innerHTML="",l.style.display="block",!c.value.trim()){l.style.display="none",n.error({title:"Error!",titleSize:"18px",message:"Please, enter your search criteria",position:"topRight"});return}h(c.value.trim()).then(r=>{if(l.style.display="none",r.total===0){n.error({title:"Error!",titleSize:"18px",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}u.innerHTML=g(r.hits),v.refresh(),p.reset()}).catch(r=>{l.style.display="none",n.error({title:"Error!",titleSize:"18px",message:`${r}`,position:"topRight"})})}
//# sourceMappingURL=index.js.map
