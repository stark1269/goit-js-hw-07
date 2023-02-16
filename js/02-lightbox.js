import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const murkup = [];

galleryItems.map(item => {
  const linkEl = document.createElement('a');
  linkEl.classList.add('gallery__item');
  linkEl.href = item.original;

  const imgEl = document.createElement('img');
  imgEl.classList.add('gallery__image');
  imgEl.src = item.preview;
  imgEl.alt = item.description;
  imgEl.title = item.description;

  linkEl.append(imgEl)
  murkup.push(linkEl)
});

gallery.append(...murkup);

// Долго пытался сделать это через метод reduce(), но так ничего и не получилось, если есть такая возможность, покажите как нужно было это сделать, спасибо)

new SimpleLightbox('.gallery a', { captionDelay: 250 });
