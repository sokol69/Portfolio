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
  closeBtn = document.getElementById('window-modal__close-btn');


hamburgerBtn.addEventListener('click', () => {
  console.log('hamburger click');

  windowModal.style.display = 'flex';
  setTimeout(() => {
    windowModal.style.top = '0';
  },100);
});

closeBtn.addEventListener('click', () => {
  windowModal.style.top = '-999px';
  setTimeout(() => {
    windowModal.style.display = 'none';
  },1100);
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