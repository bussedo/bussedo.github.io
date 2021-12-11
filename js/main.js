"use strict";

console.log('global');
"use strict";

console.log('maxgraph');
"use strict";

/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
var burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    body = document.querySelector('body'),
    swiper2 = document.querySelector('.slider-container'),
    swiper1 = document.querySelector('.swiper-container'),
    overlay = document.querySelector('.overlay'),
    popup_wrapper = document.querySelector('.popup_wrapper'),
    playButtonsFirst = document.querySelectorAll('.main-slider__play');
var swiperSlider1 = new Swiper(swiper1, {
  centeredSlides: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.btn-right',
    prevEl: '.btn-left'
  }
});
swiperSlider1.on('transitionEnd', function () {
  var videos = document.querySelectorAll('.first__slider video');
  videos.forEach(function (el) {
    el.pause();
    el.currentTime = 0;
  });
  playButtonsFirst.forEach(function (el) {
    el.style.display = 'block';
  });
});
var swiperSlider2 = new Swiper(swiper2, {
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 105
});
burger.addEventListener('click', function () {
  var burger_lines = document.querySelectorAll('.burger__line');
  burger_lines.forEach(function (el) {
    el.classList.toggle('active');
  });
  menu.classList.toggle('active');
  body.classList.toggle('active');
});
playButtonsFirst.forEach(function (el) {
  el.addEventListener('click', function (e) {
    var video = e.currentTarget.closest('.main-slider__media').querySelector('video');
    video.play();
    e.currentTarget.style.display = 'none';
    setTimeout(function () {
      video.volume = 1;
    }, 1000);
  });
});
//# sourceMappingURL=main.js.map
