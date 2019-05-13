export default class Slide {
  constructor(sideClass) {
    this.sideClass = sideClass;

    this.scrollInit();
  }

  scrollInit() {
    const sideScrollbar = new PerfectScrollbar(this.sideClass, {
      wheelPropagation: false,
    });
  }
}
