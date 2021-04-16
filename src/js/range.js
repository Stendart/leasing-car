// range 1

const priceAuto = document.getElementById("priceAuto");
const priceAutoText = document.getElementById("priceAutoText");


priceAuto.oninput = function() {
  console.log('test', this.value)
  priceAutoText.value = this.value;
  this.style.background = 'linear-gradient(to right, #000 0%, #000 ' + this.value + '%, #fff ' + this.value + '%, white 100%)'
};

priceAutoText.onchange = function() {
  console.log('test', this.value)
console.log('priceAuto.max', priceAuto.max)

  if(+this.value > +priceAuto.max) {
    this.value = priceAuto.max
  } else if(+this.value < +priceAuto.min) {
    this.value = priceAuto.min
  }
  priceAuto.value = this.value;
};




//range 2

const initialPayInfo = document.getElementById("initial-pay-info");
const initialPay = document.getElementById("initial-pay");


initialPay.oninput = function() {
  console.log('test', this.value)
  initialPayInfo.value = this.value;
  this.style.background = 'linear-gradient(to right, #000 0%, #000 ' + this.value + '%, #fff ' + this.value + '%, white 100%)'
};

initialPayInfo.onchange = function() {
  console.log('test', this.value)
console.log('initialPay.max', initialPay.max)

  if(+this.value > +initialPay.max) {
    this.value = initialPay.max
  } else if(+this.value < +initialPay.min) {
    this.value = initialPay.min
  }
  initialPay.value = this.value;
};

//range 3

const leasingInfo = document.getElementById("leasing-info");
const leasing = document.getElementById("leasing");


leasing.oninput = function() {
  console.log('test', this.value)
  leasingInfo.value = this.value;
  this.style.background = 'linear-gradient(to right, #000 0%, #000 ' + this.value + '%, #fff ' + this.value + '%, white 100%)'
};

leasingInfo.onchange = function() {
  console.log('test', this.value)
console.log('leasing.max', leasing.max)

  if(+this.value > +leasing.max) {
    this.value = leasing.max
  } else if(+this.value < +leasing.min) {
    this.value = leasing.min
  }
  leasing.value = this.value;
};
