import 'normalize.css';
import './works.scss';
import './style.css';
import { EPROTONOSUPPORT } from 'constants';

console.log('in works.js');

let btnPrev = document.getElementById('btn__prev');
let btnNext = document.getElementById('btn__next');
let sliderList = document.getElementById('slider-list');
let position = 0;


btnPrev.addEventListener('click', e => {
  e.preventDefault();
  console.log('click previous');

  if (position > 0) {
    position -= 100;
  }
  sliderList.style.left = '-' + position + '%';
  return position;
});

btnNext.addEventListener('click', e => {
  e.preventDefault();
  console.log('click next');
  
  position += 100;
  if (position > 300) {
    position = 0;
  }
  sliderList.style.left = '-' + position + '%';
  return position;
});