/**
 
Used to figure out how to target the price in the element

let outletPrice = document.querySelector('#price').innerText;
let str = outletPrice;
let substring = parseInt(str.substring(9));
console.log(outletPrice);
console.log(substring);

**/

// Hiding all sale prices
let oldSalePrice = document.querySelectorAll('#sale');

let hideSalePrice = Array.from(oldSalePrice).forEach(function(el){
  el.classList.add('hidden');
});


// Sale promotion changer
const salePromotion = .6;
let salePrices = [];
let prices = document.querySelectorAll('#price');

let priceArr = Array.from(prices).forEach(function(el){
  // console.log(el.innerText);
  let prices = (parseInt(el.innerText.substring(9))*salePromotion)

  // console.log(prices);


// Add new element with the price here 
// <p id="sale">Sale Price: $735</p>

  const p = document.createElement('p');
  p.id = 'sale';
  p.innerHTML = 'Sale Price: $' + `${prices}` + '!!!';
  
  
  console.log(p);
 
  // function call ();


});


// function to put p into salePrices array
function arrayPush (p){


}
// console log array
console.log(salePrices);

// Go through each item in array and append element

// Selects the element but appends all to the first one
// let scroller = document.querySelector('.media-scroller-details');

// scroller.append(p);


