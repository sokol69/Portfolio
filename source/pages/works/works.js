import 'normalize.css';
import './works.scss';
import './style.css';
import './../base.scss';
import { EPROTONOSUPPORT } from 'constants';
import { setTimeout } from 'timers';

console.log('in works.js');

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

/*Slider*/
let btnPrev = document.getElementById('btn__prev'),
  btnNext = document.getElementById('btn__next'),
  sliderList = document.getElementById('slider-list'),
  position = 0,
  flag = false;

let moveSlide = incr => {
  if (!flag) {
    flag = true;
    position += incr;
    if (position < 0) {
      position = 300;
    } else if (position > 300){
      position = 0;
    }
    sliderList.style.left = '-' + position + '%';
  }
  setTimeout(() => {
    flag = false;
    return position, flag;
  }, 700);
};

btnPrev.addEventListener('click', () => {
  console.log('click previous');
  moveSlide(-100);
});

btnNext.addEventListener('click', () => {
  console.log('click next');
  moveSlide(100);
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
      this.move(user, wScroll, 25);
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