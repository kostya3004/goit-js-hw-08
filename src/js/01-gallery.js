import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
console.log(simpleLightbox);

const imageGallery = document.querySelector(".gallery")

const markup = galleryItems.map(item =>
    `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`).join("")

imageGallery.insertAdjacentHTML('beforeend', markup)
var lightbox = new SimpleLightbox('.gallery a', {scrollZoom:false, captionsData:"alt", captionDelay:250});
imageGallery.addEventListener("click", onClick)

console.log(SimpleLightbox)

function onClick(event) {
    event.preventDefault();
}
