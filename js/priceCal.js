/**
 
// Used to figure out how to target the price in the element

let outletPrice = document.querySelector('#price').innerText;
let str = outletPrice;
let substring = parseInt(str.substring(9));
console.log(outletPrice);
console.log(substring);

**/

// // Hiding all sale prices
// let oldSalePrice = document.querySelectorAll('#sale');

// let hideSalePrice = Array.from(oldSalePrice).forEach(function(el){
//   el.classList.add('hidden');
// });




// Sale promotion changer
const salePromotion = .6;

let prices = document.querySelectorAll('#price');

// console.log(prices);

let priceArr = Array.from(prices).forEach(function(el){
  // console.log(el.innerText);
prices = (parseInt(el.innerText.substring(9))*salePromotion)

console.log(prices);
});



// let outletPrices = document.querySelectorAll('#price').innerText;


// console.log(outletPrices);

// // Select all sale price sections into a Node List
// let salePrice = document.querySelectorAll('#sale');

// console.log(salePrice);

// // For each sale price, 
// salePrice.forEach(function(){


// });

