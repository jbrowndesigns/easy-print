const toastGenerator = document.querySelector('.disclaimer');
const toaster = document.getElementById('toasty');
const toast = document.querySelector('.bread');
const next = document.getElementById('right');
const prev = document.getElementById('left');
const imgs = document.getElementById('images');
const img = document.querySelectorAll('#images img');
const heroImg = document.querySelector('.hero-container');
const heroText = document.querySelector('.hero');
const heroButton = document.querySelector('.hero-button');
const mediaQuery = window.matchMedia('(min-width: 600px)');


smoothscroll.polyfill();


document.addEventListener("click", e => {
  const target = e.target;
  
  if (!target.classList.contains("js-smooth-scroll")) return;
  e.preventDefault();
  const targetId = target.hash;
  const targetElement = document.querySelector(targetId);

  const rectTop = targetElement.getBoundingClientRect().top;

  const offsetTop = window.pageYOffset;
  
  const buffer = 50;
  const top = rectTop + offsetTop - buffer;

  window.scrollTo({
    top,
    behavior: "smooth"
  });
});




// Function to change background image and disable link button

if (mediaQuery.matches){
  disableSite();
}

toastGenerator.addEventListener('click', ()=> createToast());

function createToast(){
  console.log('Toasting');
  const note = document.createElement('div')
  note.classList.add('bread')
  note.innerHTML = 'unaffiliated website created by JBrown Designs';
  toaster.appendChild(note);
  setTimeout(()=> {
    note.remove()
  }, 3000);
}



let index = 0

function changeImage(){
  if(index > img.length - 1){
    index = 0
  }else if(index < 0){
    index = img.length - 1
  }
  imgs.style.transform = `translateX(-${index}00%)`;
}

next.addEventListener('click', ()=>{
  index++;
  console.log(index);
  changeImage();

});


prev.addEventListener('click', ()=>{
  index--;
  console.log(index);
  changeImage();
});


// Disable Site
function disableSite(){

  heroImg.style.backgroundImage = "url(images/underConstruction.jpg)";
  heroButton.classList.add('disabled');
  heroText.innerText = 'Please view on a mobile device';
  heroText.style.textShadow = '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';

}
