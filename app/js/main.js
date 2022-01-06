$(function () {
  
  $(".banner-section__slider").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: `<button class="slider-arrow slider-arrow--prev"><img src="images/svg/white-arrow-left.svg" alt="prev arrow"></button>`,
    nextArrow: `<button class="slider-arrow slider-arrow--next"><img src="images/svg/white-arrow-right.svg" alt="next arrow"></button>`,
  });

});
