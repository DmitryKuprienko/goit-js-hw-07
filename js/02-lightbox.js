import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createsGalleryLayout(galleryItems);
galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryRef.addEventListener("click", onClickImg);



let lightbox = new SimpleLightbox('.gallery a',{
  captionData: "alt",
  captionDelay: 250,
    
});

function onClickImg(event) {
  event.preventDefault();  

  if (event.target.nodeName !== "IMG") {
    return;
  }
  lightbox.open();
}


function createsGalleryLayout(galleryItems) {
  return galleryItems
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
}
console.log(galleryRef)

