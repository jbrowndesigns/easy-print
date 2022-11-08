const navbar = document.querySelector('.navbar');
const navHeight = navbar.offsetHeight;
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');

// Close the dropdown menu after link click
let menuLink = document.querySelectorAll('.dropdown-item');
let toggler = document.querySelector('.navbar-collapse');



document.documentElement.style.setProperty('--scroll-padding', navHeight + 10 + 'px');

window.onscroll = function() {myFunction()};
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Close dropdown menu
menuLink.forEach((link)=> link.addEventListener('click', ()=>{
  console.log('I was clicked');
  toggler.classList.remove('show');
}))


closeBtn.addEventListener('click', ()=>{
  modal.classList.add('close');
});
