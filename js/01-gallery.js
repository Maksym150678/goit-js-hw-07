import { galleryItems } from './gallery-items.js';
const galleryList = document.querySelector('.gallery');
const galleryCardsArr = galleryItems
.map(
    (el) => 
    `<div class="gallery__item">
    <a class="gallery__link" href="${el.original}">
      <img
        class="gallery__image"
        src="${el.preview}"
        data-source="${el.original}"
        alt="${el.description}"
      />
    </a>
  </div>`
)
.join("");


galleryList.innerHTML = galleryCardsArr;
galleryList.addEventListener("click", (event) => {
    event.preventDefault();

    const target = event.target;
    if (target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(

        `<img src="${target.dataset.source}" width="800" height="600">`
    );
    instance.show();
    
    window.addEventListener('keydown', onEscBtnPush);

    function onEscBtnPush (event) {
        if (event.code !== 'Escape') {
            return;
            }
            instance.close();
        
    }
});

