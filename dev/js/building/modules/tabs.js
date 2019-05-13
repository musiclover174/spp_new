import {
  qs,
  qsAll,
  fadeOut,
  fadeIn,
} from './helpers';

export default class Tabs {
  constructor(tabClass, blockClass) {
    this.tabClass = tabClass;
    this.blockClass = blockClass;

    this.tabsInit();
  }

  tabsInit() {
    qsAll(this.tabClass).forEach((tab) => {
      tab.addEventListener('click', () => {
        if (!tab.classList.contains('active')) this.toTab(tab);
      });
    });
  }

  toTab(elem) {
    const { group, tab } = elem.dataset;

    qs(`${this.tabClass}.active[data-group="${group}"]`).classList.remove('active');
    elem.classList.add('active');
    fadeOut(qs(`${this.blockClass}.show[data-group="${group}"]`), 200, () => {
      qs(`${this.blockClass}.show[data-group="${group}"]`).classList.remove('show');
      fadeIn(qs(`${this.blockClass}[data-tab="${tab}"][data-group="${group}"]`), 200, () => {
        qs(`${this.blockClass}[data-tab="${tab}"][data-group="${group}"]`).classList.add('show');
      });
    });
  }
}
