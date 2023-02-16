import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryItem = galleryItems.map(item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
).join('');

gallery.innerHTML = galleryItem;

gallery.addEventListener('click', onClickImg);

function onClickImg(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return
  };

  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`);
  window.addEventListener('keydown', onCloseModal);
  
  instance.show();

  function onCloseModal(e) {
  if (e.code === "Escape")
    instance.close()
    window.removeEventListener('keydown', onCloseModal);
  };
};

