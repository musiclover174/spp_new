import { qs, qsAll } from './helpers';

/*
  window.popup.hide() - close popup
  window.popup.open('#id') - open popup by id
*/

export default class Popup {
  constructor(sel = null, callback = null) {
    this.open = this.popupOpen;
    this.hide = this.popupHide;
    this.openFlag = false;
    this.bg = qs('.js-popbg');

    this.closeListener();
    if (qs(sel)) {
      this.els = sel;
      this.callback = callback;
      this.hrefsListener();
    }
  }

  hrefsListener() {
    const that = this;

    qsAll(this.els).forEach((el) => {
      el.addEventListener('click', (e) => {
        that.popupOpen(el.getAttribute('data-src'));
        if (that.callback) that.callback();
        e.preventDefault();
      });
    });
  }

  closeListener() {
    const that = this;

    qsAll('.js-popclose').forEach((el) => {
      el.addEventListener('click', () => {
        that.popupHide();
      });
    });

    qs('.js-popbg').addEventListener('click', () => {
      that.popupHide();
    });
  }

  popupHide() {
    if (this.openFlag) {
      qsAll('.popup').forEach(item => item.classList.remove('show'));
      this.bg.classList.remove('show');
      setTimeout(() => document.body.classList.remove('popup-show'), 400);
      this.openFlag = false;
    }
  }

  popupOpen(id) {
    if (id) {
      if (this.openFlag) {
        qsAll('.popup').forEach(item => item.classList.remove('show'));
      } else {
        document.body.classList.add('popup-show');
        this.openFlag = true;
      }
      this.bg.classList.add('show');
      qs(id).classList.add('show');
    }
  }
}
