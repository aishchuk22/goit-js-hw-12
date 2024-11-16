// У файлі main.js напиши всю логіку роботи додатка.

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from "./js/pixabay-api.js";
import { markup } from './js/render-functions.js';

const form = document.querySelector(".form");
const input = document.querySelector(".input-text");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

loader.style.display = 'none';

form.addEventListener("submit", handleSubmit);

const box = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function handleSubmit(event) {
    event.preventDefault();
    gallery.innerHTML = '';
    loader.style.display = 'block';
    
    if (!input.value.trim()) {
        loader.style.display = 'none';
        iziToast.error({
            title: 'Error!',
            titleSize: "18px",
            message: 'Please, enter your search criteria',
            position: "topRight"
        });
        return;
    }

    fetchImages(input.value.trim())
        .then((data) => {
            loader.style.display = 'none';
            if (data.total === 0) {
                iziToast.error({
                    title: 'Error!',
                    titleSize: "18px",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight"
                });
                return;
            }
                        
            gallery.innerHTML = markup(data.hits);
            box.refresh();
            form.reset();
        })
        .catch((error) => {
            loader.style.display = 'none'
            iziToast.error({
                title: "Error!",
                titleSize: "18px",
                message: `${error}`,
                position: "topRight",
            })
        })
}
