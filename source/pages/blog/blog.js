import 'normalize.css';
import './blog.scss';
import './style.css';
import './../base.scss';
import { EPROTONOSUPPORT } from 'constants';
import { setTimeout } from 'timers';

console.log('in blog.js');

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