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
