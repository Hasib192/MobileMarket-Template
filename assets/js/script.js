const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  //   autoplay: {
  //     delay: 2000,
  //   },

  // Navigation arrows
  navigation: {
    nextEl: ".btn-prev",
    prevEl: ".btn-next",
  },
  breakpoints: {
    1200: {
      slidesPerView: 6,
      spaceBetween: 45,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 45,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 45,
    },
  },
});
