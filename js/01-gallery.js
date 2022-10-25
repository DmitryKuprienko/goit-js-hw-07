import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createsGalleryLayout(galleryItems);
galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryRef.addEventListener("click", onClickImg);

let instance = null

function onClickImg(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  instance = basicLightbox.create(
    `
        <div class="modal">
        <img src="${event.target.dataset.source}" width="800" height="600">
        </div>`,

    {
      onShow() {
        document.addEventListener("keydown", onKeydownEscape),
          console.log(` вешаю  click and keydown`);
      },

      onClose() {
        document.removeEventListener("keydown", onKeydownEscape)
          
      },
    }
  );

  instance.show();
}
console.log(instance)

function onKeydownEscape(event) {
  if (event.key === "Escape") {
    instance.close(),

    console.log("знімаю keydown and click");
  }
}

function createsGalleryLayout(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
    </div>`
    )
    .join("");
}
