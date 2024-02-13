import { getImages } from './js/pixabay-api.js';
import renderCard from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.form');

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
