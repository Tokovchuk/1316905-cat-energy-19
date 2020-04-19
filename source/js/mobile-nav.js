var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navToggle.classList.remove('page-header__toggle--off');
    navToggle.classList.add('page-header__toggle--on');
  } else {
    navToggle.classList.remove('page-header__toggle--on');
    navMain.classList.add('main-nav--closed');
    navToggle.classList.add('page-header__toggle--off');
  }
})
