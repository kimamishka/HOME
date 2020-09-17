//БУРГЕР
$(document).ready(function () {
   $(".header-burger").click(function (event) {
      $(".header-burger, .header-menu").toggleClass("active"); /*при нажатии меняются виды указанных классов (полоски бургера меняем на крестик, меню выкатывается из под шапки)*/
      $("body").toggleClass("lock"); /*чтобы при открытом меню бургера текст под меню случайно не скролился, оставался на том же месте, где мы зашли в бургер*/
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