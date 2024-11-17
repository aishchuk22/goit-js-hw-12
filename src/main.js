// У файлі main.js напиши всю логіку роботи додатка.

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from "./js/pixabay-api.js";
import { createMarkup } from "./js/render-functions.js";

const body = document.querySelector("body");
const form = document.querySelector(".form");
const input = document.querySelector(".input-text");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadBtn = document.querySelector(".load-more");

form.addEventListener("submit", handleSubmit);
loadBtn.addEventListener("click", onLoadBtn);

loader.style.display = "none";
loadBtn.style.display = "none";
let perPage = 15;
let query = "";
let page = 1;
let box = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});

async function handleSubmit(event) {
    event.preventDefault();
    page = 1;
    gallery.innerHTML = "";
    loader.style.display = "block";
    loadBtn.style.display = "none";
    body.style.paddingBottom = "44px";

    query = input.value.trim();
    
    if (!query) {
        loader.style.display = "none";
        loadBtn.style.display = "none";
        iziToast.error({
            title: "Error!",
            titleSize: "18px",
            message: "Please, enter your search criteria",
            position: "topRight"
        });
        return;
    }

    try {
        const imagesReceived = await fetchImages(query, page, perPage);
        if (imagesReceived.total === 0) {
            iziToast.error({
                title: "Error!",
                titleSize: "18px",
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight"
            });
            loader.style.display = "none";
        return;
        }

        if (imagesReceived.hits.length < 15) {
            loadBtn.style.display = "none";
        } else {
            loadBtn.style.display = "block";
        }

        gallery.insertAdjacentHTML("beforeend", createMarkup(imagesReceived.hits));
        box.refresh();

        } catch (error) {
            iziToast.error({
                title: "Error!",
                titleSize: "18px",
                message: "Sorry, an error occured. Try again later!",
                position: "topRight"
            });
        } finally {
            loader.style.display = "none";
            form.reset();
        }
}
    
async function onLoadBtn() {
  page += 1;

  try {
    loader.style.display = "block";
    loadBtn.style.display = "none";

    const imagesReceived = await fetchImages(query, page, perPage);
    gallery.insertAdjacentHTML("beforeend", createMarkup(imagesReceived.hits));
    box.refresh();

    const galleryItem = document.querySelector(".gallery-item");
    if (galleryItem) {
      const galleryItemHeight = galleryItem.getBoundingClientRect().height;
      window.scrollBy({
        top: galleryItemHeight * 2,
        behavior: "smooth",
      });
    }

    if ((page * perPage) >= imagesReceived.totalHits) {
        loadBtn.style.display = "none";
        body.style.paddingBottom = 0;
        iziToast.show({
            title: "Hey!",
            titleSize: "18px",
            message: "We're sorry, but you've reached the end of search results.",
            position: "topRight"
        });
    } else {
        loadBtn.style.display = "block";
    }
    } catch (error) {
      iziToast.error({
            title: "Error!",
            titleSize: "18px",
            message: "Sorry, an error occured. Try again later!",
            position: "topRight"
        });
      } finally {
    loader.style.display = "none";
    }
}


