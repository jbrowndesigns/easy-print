const toastGenerator = document.querySelector('.disclaimer');
const toaster = document.getElementById('toasty');
const toast = document.querySelector('.bread');
const next = document.getElementById('right');
const prev = document.getElementById('left');
const imgs = document.getElementById('images');
const img = document.querySelectorAll('#images img');


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
