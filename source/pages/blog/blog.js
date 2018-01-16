import 'normalize.css';
import './blog.scss';
import './style.css';
import './../base.scss';
import {hamburgerBtn, windowModal, closeBtn, modalFlag, closeModalWindow, openModalWindow} from '../../components/modal-window/modal-window.js';
import { EPROTONOSUPPORT } from 'constants';
import { setTimeout } from 'timers';
import {showPercent, removeLoader} from '../../components/preloader/preloader.js';
import {parallax, moveDown} from '../../components/parallax-scroll/parallax-scroll.js';

console.log('in blog.js');

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

const openSidebarBtn = document.getElementById('sidebar-open');
const sidebar = document.getElementById('sidebar');
const closeSidebarBtn = document.getElementById('sidebar-close');

openSidebarBtn.addEventListener('click', () => {
  sidebar.style.left = '0';
});

closeSidebarBtn.addEventListener('click', () => {
  sidebar.style.left = '-59%';
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