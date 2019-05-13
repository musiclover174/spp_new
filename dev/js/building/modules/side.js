import {
  qs,
  qsAll,
  fadeOut,
  fadeIn,
} from './helpers';

export default class Slide {
  constructor(sideClass, tabClass, blockClass) {
    this.sideClass = sideClass;
    this.tabClass = tabClass;
    this.blockClass = blockClass;

    this.scrollInit();
    this.tabsInit();
  }

  scrollInit() {
    const sideScrollbar = new PerfectScrollbar(this.sideClass, {
      wheelPropagation: false,
    });
  }

  tabsInit() {
    qsAll(this.tabClass).forEach((tab) => {
      tab.addEventListener('click', () => {
        if (!tab.classList.contains('active')) this.toTab(tab);
      });
    });
  }

  toTab(tab) {
    qs(`${this.tabClass}.active`).classList.remove('active');
    fadeOut(qs(`${this.blockClass}.show`), 200, () => {
      qs(`${this.blockClass}.show`).classList.remove('show');
      tab.classList.add('active');
      fadeIn(qs(`${this.blockClass}[data-tab="${tab.getAttribute('data-tab')}"]`), 200, () => {
        qs(`${this.blockClass}[data-tab="${tab.getAttribute('data-tab')}"]`).classList.add('show');
      });
    });
  }
}
