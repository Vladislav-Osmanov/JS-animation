const tl = gsap.timeline();
const tlBurger = gsap.timeline({ paused: true });
const burgerBth = document.querySelector('.burger');
const closeBth = document.querySelector('.close');


tl.from('.hero__title', { opacity: 0, y: 120, duration: 0.7 })
  .from('.hero__btn', { opacity: 0, y: 80, duration: 0.7 }, "-=0.7")
  .from('.hero__descr', { opacity: 0, duration: 0.5 })
  .from('.img1', { opacity: 0, duration: .3 })
  .from('.img2', { opacity: 0, duration: .3 })
  .from('.img3', { opacity: 0, duration: .3 })
  .from('.photos__author', { opacity: 0, duration: .1 });

tlBurger.to('.menu', { className: 'menu menu--open', opacity: 1, duration: .3, ease: 'sine' })
  .from('.menu__top', { opacity: 0, y: -30, duration: 0.3, ease: 'sine' })
  .from('.menu__nav', { opacity: 0, y: -50, duration: 0.5, ease: 'sine' })
  .from('.social', { opacity: 0, y: -50, duration: 0.7, ease: 'sine' })
  .from('.menu__right', { opacity: 0, y: -50, duration: 0.7, ease: 'sine' }, "-=0.7");


burgerBth.addEventListener('click', function () {
  tlBurger.play();
});

closeBth.addEventListener('click', function () {
  tlBurger.reverse();
});
