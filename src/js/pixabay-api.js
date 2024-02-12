// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import renderCard from './render-functions.js';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

function showLoader() {
    loader.style.display = 'inline-block';
}

function hideLoader() {
    loader.style.display = 'none';
}


function getImages(imgName) {
    showLoader();
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const options = {
        key: '42343826-37f50c073d3cb7aafd48234dd',
        q: imgName,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    }
    const PARAMS = new URLSearchParams(options);    
    const url = BASE_URL + END_POINT + '?' + PARAMS;

    return fetch(url, options)
        .then(res => {
            hideLoader();
            if (!res.ok) {
                throw new Error('Server responded with error');
            }
            return res.json();
        })
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const userInput = event.target.elements.search.value;

    if (userInput === "") {
        iziToast.show({
            title: 'Error',
            backgroundColor: '#EF4040',
            messageColor: '#FFFFFF',
            titleColor: '#FFFFFF',
            message: 'Please enter your search!',
            position: 'bottomRight'
        });
        return;
    }

    getImages(userInput)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.show({
                    title: 'Error',
                    backgroundColor: '#EF4040',
                    messageColor: '#FFFFFF',
                    titleColor: '#FFFFFF',
                    message: 'Sorry, there are no images matching your search. Please try again!',
                    position: 'bottomRight'
                })
            } else {
                renderCard(data.hits);
                const lightbox = new SimpleLightbox(".cards a", { captionsData: "alt", captionDelay: 250, captionPosition: 'bottom' });
                lightbox.refresh();
            }
        })
        .catch(error => {
            console.log(error);
        })
})