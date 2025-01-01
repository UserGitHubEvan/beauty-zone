var swiper = new Swiper(".my__swiper", {
  // Optional parameters
  loop: true,

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1240px
    1240: {
      slidesPerView: 3,
    }
  },
  // cssMode: true,
  navigation: {
    nextEl: ".carousel-btn.next",
    prevEl: ".carousel-btn.prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});