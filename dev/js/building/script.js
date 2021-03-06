import {
  resizeWatcher,
  elemVisCheck,
  qs,
  qsAll,
  eventsDispatcher,
} from './modules/helpers';
import Popup from './modules/popup';
import Forms from './modules/forms';
import Burger from './modules/burger';
import Side from './modules/side';
import Tabs from './modules/tabs';
import Categories from './modules/categories';
import Useful from './modules/useful';
import Contacts from './modules/contacts';
import Sticky from './modules/sticky';
import Spacer from './modules/spacer';

document.addEventListener('DOMContentLoaded', () => {
  const spacer = new Spacer('.main *:not([class])');

  const burger = new Burger('.js-burger');

  // animation checker
  if (qsAll('.h-anim').length) elemVisCheck();

  // popup initialization
  window.popup = new Popup('[data-popup]');

  // form waitier
  if (qs('form')) {
    const forms = new Forms();
  }

  if (qs('.js-side-scroll')) {
    const side = new Side('.js-side-scroll');
  }

  if (qs('.js-tab')) {
    const tabs = new Tabs('.js-tab', '.js-block');
  }

  if (qs('.js-cat-slider')) {
    const categories = new Categories('.js-cat-slider', '.js-cat-name');
  }

  if (qs('.js-useful-hover')) {
    const useful = new Useful('.js-useful-hover', '.js-useful-title', '.js-useful-text', '.js-useful-inner');
  }

  if (qs('.js-contacts-map')) {
    const contacts = new Contacts('contacts-map');
    contacts.init();
  }

  if (navigator.userAgent.match(/Trident\/7\./)) {
    document.body.addEventListener('mousewheel', (e) => {
      if (qsAll('.popup.show').length === 0) {
        window.scrollTo(0, window.pageYOffset - e.wheelDelta);
        e.preventDefault();
      }
    });
  }
});

window.onload = () => {
  document.body.classList.add('load');

  if (qsAll('.js-shave')) {
    window.addEventListener('resize', () => {
      qsAll('.js-shave[data-height]').forEach((sh) => {
        if (sh.offsetParent !== null) shave(sh, sh.getAttribute('data-height'));
      });
    });
  }

  if (qs('.js-sticky')) {
    const sticky = new Sticky();
  }

  // resize and scroll
  resizeWatcher();
  eventsDispatcher();
};
