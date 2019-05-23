import { qsAll } from './helpers';

export default class Categories {
  constructor(sliderClass, catNameClass) {
    this.sliderClass = sliderClass;
    this.catNameClass = catNameClass;
    this.init();
  }

  clickReinit(slider) {
    const listener = ({ target }) => {
      if (target.parentNode.parentNode.classList.contains('swiper-slide-next')) {
        slider.slideNext(1500);
      }
    };

    qsAll(this.catNameClass).forEach(name => name.removeEventListener('click', listener));
    qsAll(this.catNameClass).forEach(name => name.addEventListener('click', listener));
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
      on: {
        resize: () => {
          this.clickReinit(catsSlider);
        },
      },
      // autoplay: {
      //   delay: 8000,
      // },
    });
  }
}
