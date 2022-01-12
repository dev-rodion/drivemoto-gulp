$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: `<button class="slider-arrow slider-arrow--prev"><img src="images/svg/white-arrow-left.svg" alt="prev arrow"></button>`,
    nextArrow: `<button class="slider-arrow slider-arrow--next"><img src="images/svg/white-arrow-right.svg" alt="next arrow"></button>`,
  });

  $(".product-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: `<button class="slider-arrow slider-arrow--prev"><img src="images/svg/black-arrow-left.svg" alt="prev arrow"></button>`,
    nextArrow: `<button class="slider-arrow slider-arrow--next"><img src="images/svg/black-arrow-right.svg" alt="next arrow"></button>`,
  });

  $(".tab").on("click", function (e) {
    e.preventDefault();
    const wrapper = $(this).closest(".tabs-wrapper");

    $(wrapper).find(".tab").removeClass("tab--active");
    $(wrapper).find(".tabs-content").removeClass("tabs-content--active");

    $(this).addClass("tab--active");
    $(wrapper).find($(this).attr("href")).addClass("tabs-content--active");
  });

  $(".product-item__favorite").on("click", function () {
    $(this).toggleClass("product-item__favorite--active");
  });

  $("input, select").styler();

  $(".aside-filter__item-title").on("click", function () {
    $(this).parent().toggleClass("aside-filter__item-drop--hidden")
  });  

  $("#example_id").ionRangeSlider();
});
