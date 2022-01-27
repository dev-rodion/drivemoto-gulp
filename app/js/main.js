$(function () {
  $("a").on("click", (e) => {
    e.preventDefault();
  });

  $(".menu__btn").on("click", function () {
    $(this).toggleClass("menu__btn--active");
    $(".menu-mobile").toggleClass("menu-mobile--active");
    $("body").toggleClass("body--fixed");
  });
  $(".menu-mobile__bg").on("click", function () {
    $(this).removeClass("menu__btn--active");
    $(".menu-mobile").removeClass("menu-mobile--active");
    $("body").removeClass("body--fixed");
  });

  $(".catalog__filter-btngrid").on("click", function () {
    $('.catalog__filter-btnline').removeClass("catalog__filter-btnline--active")
    $(this).addClass("catalog__filter-btngrid--active");
    $(".catalog__content").removeClass("catalog__content--line")
  });
  $(".catalog__filter-btnline").on("click", function () {
    $('.catalog__filter-btngrid').removeClass("catalog__filter-btngrid--active")
    $(this).addClass("catalog__filter-btnline--active");
    $(".catalog__content").addClass("catalog__content--line")
  });

  $(".aside__btn").on("click", function (){
    $(".catalog__aside").slideToggle(300)
  })

  $(".banner-section__slider").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: `<button class="slider-arrow slider-arrow--prev"><img src="images/svg/white-arrow-left.svg" alt="prev arrow"></button>`,
    nextArrow: `<button class="slider-arrow slider-arrow--next"><img src="images/svg/white-arrow-right.svg" alt="next arrow"></button>`,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".product-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: `<button class="slider-arrow slider-arrow--prev"><img src="images/svg/black-arrow-left.svg" alt="prev arrow"></button>`,
    nextArrow: `<button class="slider-arrow slider-arrow--next"><img src="images/svg/black-arrow-right.svg" alt="next arrow"></button>`,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1125,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
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
    $(this).parent().toggleClass("aside-filter__item-drop--hidden");
  });

  $("#example_id").ionRangeSlider();

  $("#rate-yo").rateYo({
    ratedFill: "#1C62CD",
    normalFill: "#C4C4C4",
  });
});
