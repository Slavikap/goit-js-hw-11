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

export { getImages };
