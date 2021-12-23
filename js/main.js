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
}); // burger.addEventListener('click', () =>  {
//   const burger_lines = document.querySelectorAll('.burger__line');
//   burger_lines.forEach((el) => {
//     el.classList.toggle('active');
//   });
//   menu.classList.toggle('active');
//   body.classList.toggle('active');
// });

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
var price = document.querySelector('.price');
var buy = document.querySelector('.buy');
var ok = document.querySelector('.ok');
var promokod = document.querySelector('.promokod__input');
var red = document.querySelector('.red'); // let sangrita = 'SANGRITA';

ok.onclick = function (event) {
  event.preventDefault();
  var up = promokod.value.toUpperCase();
  up = up.trim();

  if (up == 'SANGRITA4') {
    red.innerHTML = "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434 \u043F\u0440\u0438\u043C\u0435\u043D\u0451\u043D, <br> \u0446\u0435\u043D\u0430 \u0431\u0438\u043B\u0435\u0442\u0430 250 \u0440\u0443\u0431.";
    price.value = '250';
  } else if (up == 'TATARTRIP') {
    red.innerHTML = "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434 \u043F\u0440\u0438\u043C\u0435\u043D\u0451\u043D, <br> \u0446\u0435\u043D\u0430 \u0431\u0438\u043B\u0435\u0442\u0430 170 \u0440\u0443\u0431.";
    price.value = '170';
  } else {
    red.innerHTML = 'Промокод не найден';
  }
}; // const check = function (event) {
//   event.preventDefault();
//   if (promokod.value !== '') {
//     console.log(promokod.value.length )
//     let up = promokod.value.toUpperCase();
//     if (up == 'SANGRITA') {
//       red.innerHTML = 'Промо ОК'
//       price.value = '400';
//     } else  {
//       red.innerHTML = 'Промо не ОК'
//     }
//   }
// };
//
//# sourceMappingURL=main.js.map
