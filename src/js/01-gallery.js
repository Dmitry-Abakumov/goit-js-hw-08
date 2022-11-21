// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

const makeGalleryMarkup = galleryItems =>
  galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" 
                src="${preview}" 
                alt="${description}"
            </a>
        </li>`
    )
    .join('');

const render = () => {
  refs.gallery.innerHTML = makeGalleryMarkup(galleryItems);
};

render();

const lightbox = new SimpleLightbox('.gallery a', {
  scrollZoom: false,
  captionsData: 'alt',
  captionDelay: '250',
});
