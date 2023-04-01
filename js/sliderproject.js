const swiper2 = new Swiper(".swiper2", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,

  navigation: {
    nextEl: ".slider__arrow-right2",
    prevEl: ".slider__arrow-left2",
  },
});


window.onload = function () {
  
  let projectContainer = document.querySelector(".project-slider");
  let images = document.querySelectorAll(".project-slider img");
  
  
  let swiperCont2 = document.querySelector(".swiper2");

  if (swiperCont2.clientHeight < 50) {
    swiperCont2.style.display = "none";
    projectContainer.classList.add("project-slider-bg");
    images.forEach(item => {
      item.classList.remove('img-project');
    })
  }
  else {
    swiperCont2.style.display = "block";
    projectContainer.classList.remove("project-slider-bg");
     images.forEach((item) => {
       item.classList.add("img-project");
     });
  }

}