// range 1

const priceAuto = document.getElementById("price-auto");
const priceAutoText = document.getElementById("priceAutoText");


priceAuto.oninput = function() {
  priceAutoText.value = this.value;
};

priceAutoText.onchange = function() {
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
const percent = document.getElementById("percent");




initialPay.oninput = function() {
  percent.innerHTML = this.value + '%';
  initialPayInfo.value = priceAuto.value/100*initialPay.value;
};

initialPayInfo.onchange = function() {

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
  leasingInfo.value = this.value;
};

leasingInfo.onchange = function() {

  if(+this.value > +leasing.max) {
    this.value = leasing.max
  } else if(+this.value < +leasing.min) {
    this.value = leasing.min
  }
  leasing.value = this.value;
};



(function init() {
  priceAutoText.value = priceAuto.value;
  initialPayInfo.value = priceAuto.value/100*initialPay.value;
  percent.innerHTML = initialPay.value + '%';
  leasingInfo.value = leasing.value;
})()

