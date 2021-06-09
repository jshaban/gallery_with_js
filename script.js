function _load() {
    
    const rootE = document.getElementById("root");

    rootE.insertAdjacentHTML("beforeend", `
    <div class="swiper-container gallery">

        <div class="swiper-wrapper"></div>

        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

    </div>
    `)

    const images = ["bunny.jpg", " gift.jpg", "horse.jpg", "red-tulip.jpg"];
    const targetSwiper = document.querySelector("#root .swiper-container.gallery .swiper-wrapper");

    for (const image of images) {
       //console.log(image);

       targetSwiper.insertAdjacentHTML("beforeend", `
       <div class="swiper-slide"><img src="${image}">
       </div>
       
       `)
   }
    
    
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
}



window.addEventListener("load", _load);

