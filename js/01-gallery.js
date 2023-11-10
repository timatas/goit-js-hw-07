import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
);
gallery.insertAdjacentHTML("beforeend", markup.join(""));
gallery.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  const galleryCard = evt.target.classList.contains("gallery__image");
  if (!galleryCard) {
    return;
  }
  const urlChoice = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <div class="modal"><img src ="${urlChoice}"
         /></div`);
  instance.show();
}
