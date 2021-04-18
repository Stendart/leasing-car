const burger = document.querySelector('.js-burger');
const nav = document.querySelector('.menu');



burger.onclick = function() {
  console.log('=================')
  if(this.classList.contains('nav__burger--opend')) {
    this.classList.remove('nav__burger--opend');
    this.classList.add('nav__burger--closed');

    nav.classList.remove('menu__list--opened');
    //nav.classList.add('menu__list--closed');


  } else {
    this.classList.remove('nav__burger--closed');
    this.classList.add('nav__burger--opend');

    //nav.classList.remove('menu__list--closed');
    nav.classList.add('menu__list--opened');
  }
}
