import { galleryItems } from './gallery-items.js';
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


// galleryItems.forEach(element => {
   
//     console.log("111", element)
//     return element
// });


const galleryRef = document.querySelector(".gallery")


for (let i = 1; i <= galleryItems.length; i++) {
	let galleryItem = document.createElement("div")

     galleryItem.classList.add("gallery__item")

    const galleryLink= document.createElement("a")
      galleryLink.classList.add("gallery__link");
      
      galleryItem.append(galleryLink)



     galleryRef.append(galleryItem)
}





console.log(galleryRef)

console.log(galleryItems.length);