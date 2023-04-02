const swiper1 = new Swiper(".swiper1", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
 
  navigation: {
    nextEl: ".slider__arrow-right",
    prevEl: ".slider__arrow-left",
  },
});


  let sertyficatesContainer = document.querySelector(".certificates-slider");
 

  let swiperCont1 = document.querySelector(".swiper1");
  // let img1 = new Image();
  
  if (swiperCont1.clientHeight < 50) {
   swiperCont1.style.display = "none";
   sertyficatesContainer.classList.add("certificatas-bg");
    
  }
  else {
     swiperCont1.style.display = "block";
    sertyficatesContainer.classList.remove("certificatas-bg");
  }
