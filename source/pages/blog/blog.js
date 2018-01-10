import 'normalize.css';
import './blog.scss';
import './style.css';
import './../base.scss';
import { EPROTONOSUPPORT } from 'constants';
import { setTimeout } from 'timers';

console.log('in blog.js');

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

/*----------Parallax-Scrol-----------l*/
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
      this.move(user, wScroll, 30);
      this.move(sectionText, wScroll, 15);

    },
  };
}());

/*----------Sidebar---------*/
$(function() {
  var offset = $('#sidebar').offset();
  var topPadding = 150;
  $(window).scroll(function() {

    if ($(window).scrollTop() > offset.top) {
      $('#sidebar').stop().animate({
        marginTop: $(window).scrollTop() - offset.top + topPadding,

      });
    } else {
      $('#sidebar').stop().animate({
        marginTop: 0,
      });
    }
  });
});

window.onscroll = () => {
  var wScroll = window.pageYOffset;
  parallax.init(wScroll);
};

const openSidebarBtn = document.getElementById('sidebar-open');
const sidebar = document.getElementById('sidebar');
const closeSidebarBtn = document.getElementById('sidebar-close');

openSidebarBtn.addEventListener('click', () => {
  sidebar.style.left = '0';
});

closeSidebarBtn.addEventListener('click', () => {
  sidebar.style.left = '-59%';
});

/*MoveDown*/
$(document).ready(function(){
  $('#arrow-down').on('click','a', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});

/*MoveSidebar*/
$(document).ready(function(){
  $('#sidebar').on('click','a', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });
});