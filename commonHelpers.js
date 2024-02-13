import{i,S as l}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();document.querySelector(".form");const c=document.querySelector(".loader");function d(){c.style.display="inline-block"}function p(){c.style.display="none"}function u(a){d();const r="https://pixabay.com",e="/api/",s={key:"42343826-37f50c073d3cb7aafd48234dd",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"},t=new URLSearchParams(s),o=r+e+"?"+t;return fetch(o,s).then(n=>{if(p(),!n.ok)throw new Error("Server responded with error");return n.json()})}function m(a){const r=document.querySelector(".cards");r.innerHTML="",a.forEach(e=>{const s=`<li class="card"> 
                <a class="card-link" href="${e.largeImageURL}">
                    <img class="card-img" src="${e.webformatURL}" alt="${e.tags}" data-source="${e.largeImageURL}" />
                </a>
                <div class="card-data">
                    <div class="data-wrap">
                        <p>Likes: </p>
                        <span>${e.likes}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Views: </p>
                        <span>${e.views}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Comments: </p>
                        <span>${e.comments}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Downloads: </p>
                        <span>${e.downloads}</span>
                    </div>
                </div>
             </li>`;r.innerHTML+=s})}const f=document.querySelector(".form");f.addEventListener("submit",a=>{a.preventDefault();const r=a.target.elements.search.value;if(r===""){i.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Please enter your search!",position:"bottomRight"});return}u(r).then(e=>{e.hits.length===0?i.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search. Please try again!",position:"bottomRight"}):(m(e.hits),new l(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh())}).catch(e=>{console.log(e)})});
//# sourceMappingURL=commonHelpers.js.map
