const items = document.querySelectorAll('.js-item');

const prevBtn = document.querySelector('.js__prev');
const nextBtn = document.querySelector('.js__next');

const carouselPoitns = document.querySelector('.carousel__poitns');
const sliderPoints = [];

const animContainer = document.querySelector('.container');

let numSlide = 0;

let timeChangeSlide = 10000;


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
  resetAnim();


clearTimeout(timerId);
timerId = setTimeout(changeSlide, timeChangeSlide, 'next');
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

function resetAnim() {
  animContainer.classList.remove('container__anim');
  animContainer.offsetWidth = animContainer.offsetWidth; //Что бы не пропустило действие удаления-добавления класса
  animContainer.classList.add('container__anim');
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


setSlide();
initSliderPoints();
prevBtn.addEventListener('click', () => changeSlide('prev'));
nextBtn.addEventListener('click', () => changeSlide('next'));

//const intervalSlides = setInterval(changeSlide, timeChangeSlide, 'next');

/*let timerId = setTimeout(function tick() {
  changeSlide('next');
  timerId = setTimeout(tick, timeChangeSlide); // (*)
}, timeChangeSlide);*/


let timerId = setTimeout(() => {
  changeSlide('next');
  //timerId = setTimeout(tick, timeChangeSlide); // (*)
}, timeChangeSlide);

