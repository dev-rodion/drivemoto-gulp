$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: `<button class="slider-arrow slider-arrow--prev"><img src="images/svg/white-arrow-left.svg" alt="prev arrow"></button>`,
    nextArrow: `<button class="slider-arrow slider-arrow--next"><img src="images/svg/white-arrow-right.svg" alt="next arrow"></button>`,
  });

  $(".search__tabs-btn").on("click", function (e) {
    e.preventDefault();

    $(".search__tabs-btn").removeClass("search__tabs-btn--active");
    $(".search__content-item").removeClass("search__content-item--active");
    
    $(this).addClass("search__tabs-btn--active");
    $($(this).attr('href')).addClass("search__content-item--active");
  });
});
