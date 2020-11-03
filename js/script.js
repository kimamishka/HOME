//БУРГЕР
$(document).ready(function () {
   $(".header-burger").click(function (event) {
      $(".header-burger, .header-menu").toggleClass("active");
      $(".header-menu").css("background-color", "rgba(110, 34, 6, 0.8)");
      $(".header__link").css("font-size", "24px");
   });
   $(".header__link").click(function (event) {
      $(".header-menu").css("background-color", "rgba(110, 34, 6, 0)");
      $(".header__link").css("font-size", "0");
   });
});

//СЛАЙДЕР
$(document).ready(function () {
   $('.slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      autoplay: false,
      speed: 1000,
      autoplaySpeed: 800,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1
            }
         },
         {
            breakpoint: 550,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });
});

// CHANGE ARROWS
$(document).ready(function () {
   $('.slider__1').slick({
      prevArrow: "<img src='img/about/arrow-left.png' class='prev' alt='1'>",
      nextArrow: "<img src='img/about/arrow-r-red.png' class='next' alt='2'>",
      arrows: true,
      dots: false,
      slidesToShow: 4,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 800,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 550,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });
});