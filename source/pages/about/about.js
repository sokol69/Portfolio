import 'normalize.css';
import './about.scss';
import './style.css';
import './../base.scss';

console.log('in about.js');

/*Modal window*/
let hamburgerBtn = document.getElementById('hamburger-menu'),
  windowModal = document.getElementById('window-modal'),
  closeBtn = document.getElementById('window-modal__close-btn'),
  modalFlag = false;

let closeWindow = () => {
  windowModal.style.top = '-999px';
  setTimeout(() => {
    windowModal.style.display = 'none';
    modalFlag = false;
    return modalFlag;
  },500);
};

hamburgerBtn.addEventListener('click', () => {
  console.log('hamburger click');

  windowModal.style.display = 'flex';
  setTimeout(() => {
    windowModal.style.top = '0';
    modalFlag = true;
    return modalFlag;
  },100);
});

closeBtn.addEventListener('click', closeWindow);

window.addEventListener('scroll', () => {
  if (modalFlag) {
    closeWindow();
  }
});

/*Google Map*/
/*function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 56.86220568, lng: 35.91911316},
    zoom: 13,
  });
  var styles = [
    {
      'featureType': 'water',
      'elementType': 'all',
      'stylers': [
        {
          'color': '#4ee2cc',
        },
      ],
    },
    {'featureType':'landscape','elementType':'all','stylers':[{'color':'#ffffff'}]},
  
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#d5d5d5'}],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [{color: '#d5d5d5'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#d5d5d5'}],
    },
  
  ];
  map.setOptions({styles: styles});
}*/