import 'normalize.css';
import './about.scss';
import './style.css';
import './../base.scss';

console.log('in about.js');

/*-------------Preloader----------*/
const showPercent = () => {
  const percentDisplay = document.getElementById('loader__text');
  let i = 0;
  let timer = setTimeout( function go() {
    if (i <= 100) {
      percentDisplay.innerText = i + '%';
      setTimeout(go, 100);
      i += 10;
    } else {
      removeLoader();
    }
  }, 100);
};
  
const removeLoader = () => {
  const loaderArea = document.getElementById('loader__area');
  loaderArea.style.opacity = '0.1';
  setTimeout( () => {
    loaderArea.style.display = 'none';
  }, 1000);
};
  
document.addEventListener('DOMContentLoaded', showPercent);

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

/*Parallax-Scroll*/
var parallax = (function() {
  var bg = document.querySelector('.hero__bg');
  var user = document.querySelector('.hero__title');
  var sectionText = document.querySelector('.hero__sec');

  return {
    move: function(block, windowScroll, strafeAmount) {
      var strafe = windowScroll/strafeAmount + '%';
      var transformString = 'translate3d(0, ' + strafe + ', 0)';

      var style = block.style;

      style.transform = transformString;
      style.webkitTransform = transformString;

    },

    init: function (wScroll) {
      this.move(bg, wScroll, 50);
      this.move(user, wScroll, 30);
      this.move(sectionText, wScroll, 15);

    },
  };
}());

window.onscroll = () => {
  var wScroll = window.pageYOffset;
  parallax.init(wScroll);
};

/*MoveDown*/
$(document).ready(function(){
  $('#arrow-down').on('click','a', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});

/*Google Map*/
/*
function initMap() {
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