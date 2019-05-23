export default class Contacts {
  constructor(mapId) {
    this.el = document.querySelector('.js-contacts-map');
    this.mapId = mapId;
  }

  init() {
    const t = this;

    function mapInit() {
      const pinCoord = t.el.getAttribute('data-coords').split(', ');
      const centerCoord = t.el.getAttribute('data-center').split(', ');
      const pinSrc = t.el.getAttribute('data-pin');

      const myMap = new ymaps.Map(t.mapId, {
        center: window.innerWidth >= 1000 ? [parseFloat(centerCoord[0]), parseFloat(centerCoord[1])] : [parseFloat(pinCoord[0]), parseFloat(pinCoord[1])],
        zoom: 17,
        controls: ['zoomControl'],
      });
      
      window.map = myMap;

      const PMitem = new ymaps.Placemark([parseFloat(pinCoord[0]), parseFloat(pinCoord[1])], {}, {
        iconLayout: 'default#image',
        iconImageSize: [26, 39],
        iconImageHref: pinSrc,
        iconImageOffset: [-13, -39],
      });

      myMap.behaviors.disable('scrollZoom');
      myMap.geoObjects.add(PMitem);
    }

    ymaps.ready(mapInit);
  }
}
