import { qsAll } from './helpers';

export default class Categories {
  constructor(sliderClass, catNameClass) {
    this.sliderClass = sliderClass;
    this.catNameClass = catNameClass;
    this.init();
  }

  init() {
    const catsSlider = new Swiper(this.sliderClass, {
      speed: 1500,
      slidesPerView: 1,
      spaceBetween: -200,
      parallax: true,
      loop: true,
      loopedSlides: 2,
      pagination: {
        el: `${this.sliderClass} .swiper-pagination`,
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        670: {
          autoHeight: true,
          spaceBetween: 40,
        },
        1050: {
          spaceBetween: 50,
        },
        1250: {
          spaceBetween: 70,
        },
        1600: {
          spaceBetween: -70,
        },
      },
      // autoplay: {
      //   delay: 8000,
      // },
    });

    qsAll(this.catNameClass).forEach((name) => {
      name.addEventListener('click', () => {
        if (name.parentNode.parentNode.classList.contains('swiper-slide-next')) {
          catsSlider.slideNext(1500);
        }
      });
    });
  }
}
