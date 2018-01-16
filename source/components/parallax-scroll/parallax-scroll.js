let parallax = (function() {
  let bg = document.querySelector('.hero__bg');
  let user = document.querySelector('.hero__title');
  let sectionText = document.querySelector('.hero__sec');

  return {
    move: function(block, windowScroll, strafeAmount) {
      let strafe = windowScroll/strafeAmount + '%';
      let transformString = 'translate3d(0, ' + strafe + ', 0)';
      let style = block.style;

      style.transform = transformString;
      style.webkitTransform = transformString;
    },

    init: function (wScroll) {
      this.move(user, wScroll, 30);
      this.move(sectionText, wScroll, 15);
    },
  };
}());

window.onscroll = () => {
  var wScroll = window.pageYOffset;
  parallax.init(wScroll);
};

/*MoveDown*/
let moveDown = function() {
  $('#arrow-down').on('click','a', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
};

$(document).ready(moveDown);

export {parallax, moveDown};