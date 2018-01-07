import 'normalize.css';
import './index.scss';
import './style.css';
import './../base.scss';
import { setTimeout } from 'timers';

console.log('in index.js');

/*Preloader*/
var removeLoader = function() {
  var loaderArea = document.getElementById('loader__area');
  loaderArea.style.opacity = '0.1';
  setTimeout( () => {
    loaderArea.style.display = 'none';
  }, 2000);
};

window.addEventListener('load', removeLoader);

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

