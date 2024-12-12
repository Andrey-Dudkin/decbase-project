// *Burger menu
const burgerBtn = document.querySelector(".burger-menu__btn");
const burgerIcon = document.querySelector(".burger-menu__icon");
const menuList = document.querySelector(".navbar__menu-list")
burgerBtn.addEventListener("click", function(){
	burgerIcon.classList.toggle("burger-menu__icon__active");
	menuList.classList.toggle("open_menu");
});

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 84,
    navigation: {
      nextEl: '.slider__btn--next',
      prevEl: '.slider__btn--prev',
    },
  });
const swiperTwo = new Swiper('.swiper-reviews', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 84,
    navigation: {
      nextEl: '.slider__btn-next-reviews',
      prevEl: '.slider__btn-prev-reviews',
    },
  });