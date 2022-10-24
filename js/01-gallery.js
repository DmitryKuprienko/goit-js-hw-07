import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createsGalleryLayout(galleryItems);
galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryRef.addEventListener("click", onClickImg);

function onClickImg(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
        <div class="modal">
        <img src="${event.target.dataset.source}" width="800" height="600">
        </div>`
 
  );
  instance.show(
    document.addEventListener("keydown", onKeydownEscape),
    document.addEventListener("click", onModalClick),
    console.log(` вешаю  click and keydown`),
  );

  function onKeydownEscape(event) {
    if (event.key === "Escape") {
     instance.close(
        document.removeEventListener("keydown", onKeydownEscape),
        document.removeEventListener("click", onModalClick),
        console.log("Снемаю  keydown and click")
      );
    }
  }
  function onModalClick(event) {
    if (`DIV` === event.target.nodeName) {
        document.removeEventListener("keydown", onKeydownEscape),
        document.removeEventListener("click", onModalClick),
        console.log("Снемаю  click and keydown")
     
    }
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


