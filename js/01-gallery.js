import { galleryItems } from "./gallery-items.js";
// Change code below this line

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createsGalleryLayout(galleryItems);
galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryRef.addEventListener("click", onClickImg);

function onClickImg(event) {
  console.log(event);
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
        <div class="modal">
        <img src="${event.target.dataset.source}" width="800" height="600">
        </div>`,
    {
      onClose: (instance) => {
        galleryRef.removeEventListener("keydown", onKeydownEscape);
        console.log("Add listener2");
      },
    }
  );
  instance.show();
console.log(instance)


  function onKeydownEscape(event) {
    if (event.key === "Escape") {
      console.log("Add listener");
      instance.close(
        galleryRef.removeEventListener("keydown", onKeydownEscape)
      );
    }
  }
  galleryRef.addEventListener("keydown", onKeydownEscape);
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

console.log(galleryRef);
