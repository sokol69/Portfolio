import 'normalize.css';
import './index.scss';
import './style.css';
import './../base.scss';
import { setTimeout, setInterval } from 'timers';

console.log('in index.js');

const enterBtn = document.getElementById('btn-enter');
const login = document.getElementById('login');
const password = document.getElementById('password');

enterBtn.addEventListener('click', () => {
  if (login.value !== 'admin') {
    alert('Неверный логи!');
  } else if (password.value !== 'admin') {
    alert('Неверный пароль!');
  } else {
    alert('Админка еще не подключена... попробуйте позже :)');
  }
});

/*-----------Flip Animation------------*/
const singBtn = document.getElementById('singin__box'),
  flipper = document.getElementById('flipper'),
  returnBtn = document.getElementById('btn-return');

const showFlipAnimation = () => {
  flipper.style.transform = 'rotateY(180deg)';
  singBtn.style.display = 'none';
};
const showFlipAnimationReturn = () => {
  flipper.style.transform = 'rotateY(360deg)';
  singBtn.style.display = 'flex';
};

singBtn.addEventListener('click', showFlipAnimation);
returnBtn.addEventListener('click', showFlipAnimationReturn);

/*-------------Preloader----------*/
const showPercent = () => {
  const percentDisplay = document.getElementById('loader__text');
  const flipper = document.getElementById('flipper');
  let i = 0;
  let timer = setTimeout( function go() {
    if (i <= 100) {
      percentDisplay.innerText = i + '%';
      setTimeout(go, 100);
      i += 10;
    } else {
      removeLoader();
      flipper.classList.add('bounce');
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

/*Parallax*/
const parallaxContainer = document.getElementById('parallax');
const layers = parallaxContainer.children;

const moveLayers = e => {
  const initialX = (window.innerWidth / 2) - e.pageX;
  const initialY = (window.innerHeight / 2) - e.pageY;

  let i = 0;
  for (let layer of layers) {
    const divider = i / 90;
    const positionX = initialX * divider;
    const positionY = initialY * divider;

    const bottomPosition = (window.innerHeight / 2) * divider;
    const image = layers[9];

    layer.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px)';
    image.style.bottom = '-' + bottomPosition + 'px';

    i++;
  }
};

window.addEventListener('mousemove', moveLayers);

