// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const galleryImg = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
            </a>`;
}).join('');

galleryRef.innerHTML = galleryImg;


new SimpleLightbox('.gallery a', {
    captionDelay: 250,
})