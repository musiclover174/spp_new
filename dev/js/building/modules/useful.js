import { qs, qsAll } from './helpers';

export default class Useful {
  constructor(hoverClass, titleClass, textClass, innerClass) {
    this.hoverClass = hoverClass;
    this.titleClass = titleClass;
    this.textClass = textClass;
    this.innerClass = innerClass;

    this.animationFlag = false;
    this.event = null;

    this.init();
  }

  init() {
    const defaultObj = {
      useful: [
        'Полезные завтраки и&nbsp;обеды',
        '«Союзпищепром» – это мощный технологический комплекс новейшего оборудования ведущих мировых марок. Торговые марки «Царь», «Союзпищепром», «Здоровое меню» знают не только во всех уголках России. Продукция экспортируется в страны СНГ и дальнего зарубежья: США, Германия, ОАЭ, КНР, Израиль, Турция и др..',
      ],
      pasta: [
        'Лучшие макаронные и&nbsp;мучные изделия',
        '«Союзпищепром» – это мощный технологический комплекс новейшего оборудования ведущих мировых марок. Торговые марки «Царь», «Союзпищепром», «Здоровое меню» знают не только во всех уголках России. Продукция экспортируется в страны СНГ и дальнего зарубежья: США, Германия, ОАЭ, КНР, Израиль, Турция и др..',
      ],
    };

    qsAll(this.hoverClass).forEach((item) => {
      item.addEventListener('mouseenter', e => this.textChanger(e.target.dataset));

      item.addEventListener('mouseleave', (e) => {
        const { type } = e.target.dataset;
        const title = defaultObj[type][0];
        const text = defaultObj[type][1];

        this.textChanger({
          title, text, type, dir: 1,
        });
      });
    });
  }

  textChanger({
    title, text, type, dir = 0,
  }) {
    const t = this;

    if (!this.animationFlag) {
      this.animationFlag = true;
      qs(`${this.innerClass}[data-type="${type}"]`).classList.add('animation');

      setTimeout(() => {
        const textEl = qs(`${this.textClass}[data-type="${type}"]`);

        qs(`${this.titleClass}[data-type="${type}"]`).innerHTML = title;
        textEl.innerHTML = text;

        if (dir === 0) {
          textEl.classList.add('changed');
        } else {
          textEl.classList.remove('changed');
        }
      }, 250);

      setTimeout(() => {
        qs(`${this.innerClass}[data-type="${type}"]`).classList.remove('animation');
        this.animationFlag = false;
        if (t.event) {
          setTimeout(() => {
            t.textChanger(t.event);
            t.event = null;
          }, 150);
        }
      }, 500);
    } else {
      this.event = {
        title, text, type, dir,
      };
    }
  }
}
