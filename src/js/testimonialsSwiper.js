import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let reviewsSwiper = null;

function initReviewsSwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !reviewsSwiper) {
    const prevSlide = document.querySelector('.oh-button-left');
    const nextSlide = document.querySelector('.oh-button-right');

    reviewsSwiper = new Swiper('.test-swiper', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 40,
      mousewheel: true,
      loop: true,
      navigation: {
        nextEl: '.oh-button-right',
        prevEl: '.oh-button-left',
      },
    });
  }

  if (!isMobile && reviewsSwiper) {
    reviewsSwiper.destroy(true, true);
    reviewsSwiper = null;
  }
}


window.addEventListener('load', initReviewsSwiper);
window.addEventListener('resize', initReviewsSwiper);