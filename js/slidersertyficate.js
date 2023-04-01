const swiper = new Swiper(".swiper1", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
 
  navigation: {
    nextEl: ".slider__arrow-right",
    prevEl: ".slider__arrow-left",
  },
});

window.onload = function () {
  
  let sertyficatesContainer = document.querySelector(".certificates-slider");
 

  let swiper1 = document.querySelector(".swiper1");
  // let img1 = new Image();

  if (swiper1.clientHeight < 50) {
   swiper1.style.display = "none";
   sertyficatesContainer.classList.add("certificatas-bg");
    
  }
  else {
     swiper1.style.display = "block";
    sertyficatesContainer.classList.remove("certificatas-bg");
  }
}