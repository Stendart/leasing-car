const images = document.querySelectorAll('.carousel__line img');
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
