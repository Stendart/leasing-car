/*const images = document.querySelectorAll('.carousel__line img');
const sliderLine = document.querySelector('.carousel__line');

const carouselPoitns = document.querySelector('.carousel__poitns');
console.log('carouselPoitns', carouselPoitns)

let countImages = images.length;
const sliderPoints = [];

let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.carousel').offsetWidth;
    sliderLine.style.width = width * countImages + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

function createDomElement(el = 'li') {
  const newEl = document.createElement(el);
  newEl.classList.add('carousel__item');

  return newEl;
}

function initSliderPoints() {
  images.forEach(item => {
      sliderPoints.push(createDomElement('li'));
  });

  sliderPoints[count].classList.add('carousel__item--select');

  sliderPoints.forEach(item => {
      carouselPoitns.appendChild(item);
  });

  carouselPoitns.style.transform = `translate(-${carouselPoitns.offsetWidth/2}px)`
}

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

    sliderPoints.forEach(item => {
      item.classList.remove('carousel__item--select');
    });
    sliderPoints[count].classList.add('carousel__item--select');
}


initSliderPoints();

init();

window.addEventListener('resize', init);

document.querySelector('.js__next').addEventListener('click', function () {
    count++;
    if (count >= countImages) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.js__prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = countImages - 1;
    }
    rollSlider();
});
*/


const items = document.querySelectorAll('.js-item');

const prevBtn = document.querySelector('.js__prev');
const nextBtn = document.querySelector('.js__next');

const carouselPoitns = document.querySelector('.carousel__poitns');
const sliderPoints = [];
console.log('carouselPoitns', carouselPoitns)

let numSlide = 0;


function changeSlide(direction) {
  if(direction === 'next') {
    if(numSlide >= items.length-1) {
      numSlide = 0;
    } else {
      numSlide++;
    }
  } else if (direction === 'prev') {
    if(numSlide <= 0) {
      numSlide = items.length-1;
    } else {
      numSlide--;
    }
  }

  sliderPoints.forEach(item => {
    item.classList.remove('carousel__item-point--select');
  });
  sliderPoints[numSlide].classList.add('carousel__item-point--select');

  setSlide();
}

function setSlide() {
  items.forEach((item, index) => {
    if(index === numSlide) {
      item.style.zIndex = 2;
      item.classList.add('item__fast-anim');
      item.classList.remove('hide');
    } else {
      item.style.zIndex = 3;
      item.classList.add('item__low-anim');
      item.classList.remove('item__fast-anim');
      item.classList.add('hide');
    }

  });
}

function createDomElement(el = 'li') {
  const newEl = document.createElement(el);
  newEl.classList.add('carousel__item-point');

  return newEl;
}

function initSliderPoints() {
  items.forEach(item => {
      sliderPoints.push(createDomElement('li'));
  });

  sliderPoints[numSlide].classList.add('carousel__item-point--select');

  sliderPoints.forEach(item => {
      carouselPoitns.appendChild(item);
  });

  carouselPoitns.style.transform = `translate(-${carouselPoitns.offsetWidth/2}px)`
}

/*items.forEach(item => {
  sliderPoints.push(createDomElement('li'));
});

sliderPoints[numSlide].classList.add('carousel__item-point--select');

sliderPoints.forEach(item => {
    carouselPoitns.appendChild(item);
});*/

setSlide();
initSliderPoints();
prevBtn.addEventListener('click', () => changeSlide('prev'));
nextBtn.addEventListener('click', () => changeSlide('next'));

//setInterval(changeSlide, 10000, 'next');
