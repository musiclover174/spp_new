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
import Categories from './modules/categories';
import Useful from './modules/useful';
// import Contacts from './modules/contacts';
// import Sticky from './modules/sticky';

document.addEventListener('DOMContentLoaded', () => {
  const burger = new Burger('.js-burger');

  // animation checker
  if (qsAll('.h-anim').length) elemVisCheck();

  // popup initialization
  if (qs('[data-popup]')) { 
    window.popup = new Popup('[data-popup]');
  }

  // form waitier
  if (qs('form')) {
    const forms = new Forms();
  }

  if (qs('.js-side-scroll')) {
    const side = new Side('.js-side-scroll', '.js-side-tab', '.js-side-block');
  }

  if (qs('.js-cat-slider')) {
    const categories = new Categories('.js-cat-slider', '.js-cat-name');
  }

  if (qs('.js-useful-hover')) {
    const useful = new Useful('.js-useful-hover', '.js-useful-title', '.js-useful-text', '.js-useful-inner');
  }

  // if (document.querySelector('.js-contacts-map')) {
  //   const contacts = new Contacts('contacts-map');
  //   contacts.init();
  // }

  // if (document.querySelector('.js-sticky')) {
  //   Sticky(20, 0);
  // }

  // if (document.querySelectorAll('.js-shave').length) {
  //   document.querySelectorAll('.js-shave').forEach((sh) => {
  //     shave(sh, sh.getAttribute('data-height'));
  //   });
  // }}

  // resize and scroll
  resizeWatcher();
  eventsDispatcher();
});
