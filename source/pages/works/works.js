import 'normalize.css';
import './works.scss';
import './style.css';
import './../base.scss';
import { EPROTONOSUPPORT } from 'constants';
import { setTimeout } from 'timers';
import {hamburgerBtn, windowModal, closeBtn, modalFlag, closeModalWindow, openModalWindow} from '../../components/modal-window/modal-window.js';
import {showPercent, removeLoader} from '../../components/preloader/preloader.js';
import {parallax, moveDown} from '../../components/parallax-scroll/parallax-scroll.js';

console.log('in works.js');

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
      position = 200;
    } else if (position > 200){
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

/*--------Send Message--------*/
const name = document.getElementById('form__name'),
  email = document.getElementById('form__email'),
  message = document.getElementById('form__message'),
  btnSend = document.getElementById('btn__send'),
  btnClear = document.getElementById('btn__clear');

const clearForm = () => {
  name.value = '';
  email.value = '';
  message.value = '';
};

const sendMessage = () => {
  if (name.value && email.value && message.value) {
    alert('Извините, данная форма пока не подключена');
    clearForm();
  } else {
    alert('Пожалуйста, заполните ВСЕ поля');
  }
};

btnSend.addEventListener('click', sendMessage);
btnClear.addEventListener('click', clearForm);
