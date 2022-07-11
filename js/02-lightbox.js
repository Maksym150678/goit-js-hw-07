import { galleryItems } from './gallery-items.js';
const galleryList = document.querySelector('.gallery');
const galleryCardsArr = galleryItems
.map(
    (el) => 
    `<li class="gallery__link">
    <a class="gallery__link" href="${el.original}">
      <img
        class="gallery__image"
        src="${el.preview}"
        data-source="${el.original}"
        alt="${el.description}"
      />
    </a>
  </li>`
)
.join("");


galleryList.innerHTML = galleryCardsArr;


 

galleryList.insertAdjacentHTML("afterbegin", galleryCardsArr);

var lightbox = new SimpleLightbox(".gallery a", {
captionsData: "alt",
captionPosition: "bottom",
captionDelay: 250,
});