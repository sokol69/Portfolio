import 'normalize.css';
import './works.scss';
import './style.css';
import './../base.scss';
import { EPROTONOSUPPORT } from 'constants';
import { setTimeout } from 'timers';

console.log('in works.js');

let btnPrev = document.getElementById('btn__prev');
let btnNext = document.getElementById('btn__next');
let sliderList = document.getElementById('slider-list');
let position = 0;
let flag = false;

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