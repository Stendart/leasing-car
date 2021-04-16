const burger = document.querySelector('.js-burger');
const nav = document.querySelector('.nav__list');
console.log('=================')
burger.onclick = function() {
  if(this.classList.contains('nav__burger--opend')) {
    this.classList.remove('nav__burger--opend');
    this.classList.add('nav__burger--closed');

    nav.classList.remove('main-nav__list--opened');

  } else {
    this.classList.remove('nav__burger--closed');
    this.classList.add('nav__burger--opend');

    nav.classList.add('nav__list--opened');
  }
}
