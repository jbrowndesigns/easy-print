const form = document.getElementById('form');
const nameInput1 = document.getElementById('firstName');
const nameInput2 = document.getElementById('lastName');
const email = document.getElementById('email');
const birthday = document.getElementById('birthday');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const province = document.getElementById('province');
const state = document.getElementById('state');
const city = document.getElementById('city');
const zipCode = document.getElementById('zipCode');
const errorText = document.getElementsByClassName('er');
const output = document.querySelector('.output');
const body = document.querySelector('.container');
// const consent = document.getElementById('switchValue');


// var isChecked=document.getElementById("switchValue").checked;
// console.log(isChecked);

function print(){
        
    // var isChecked=document.getElementById("switchValue").checked;
    // console.log(isChecked);

    output.innerHTML = `<ul class="list-group list-group-flush text-center">
    <li class="list-group-item">Last Name- ${nameInput2.value}</li>
    <li class="list-group-item">First Name- ${nameInput1.value}</li>
    <li class="list-group-item">Province- ${province.value}</li>
    <li class="list-group-item">State- ${state.value}</li>
    <li class="list-group-item">City- ${city.value}</li>
    <li class="list-group-item">Zip- ${zipCode.value}</li>
    <li class="list-group-item">Address- ${address.value}</li>
    <li class="list-group-item">Phone- ${phone.value}</li>
    <li class="list-group-item">Email- ${email.value}</li>
    <li class="list-group-item">Birthday Month- ${birthday.value}</li>
    
    </ul>
    <div class="d-grid mt-3">
    <button onClick="window.location.reload();" class="btn btn-primary">Reset</button>
    </div>
    `;
    form.className = 'hide';
    
    var isChecked=document.getElementById("switchValue").checked;
    
    if(isChecked != true) {
       body.classList.add('non-consent'); 
    }
    // alert('Please present your phone to have your info entered. Afterwards you may close this window.');
}


function showError(input, message){

   const formControl = input.parentElement;
    formControl.className = 'form-group row px-3 error';
    const errorText = formControl.querySelector('small');
    errorText.innerText = message;
    setTimeout(()=>{
        formControl.className = 'form-group row px-3';
        errorText.innerText = '';
    }, 5000);
}


// Email Validator
function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkRequired(inputArr){
    inputArr.forEach((input)=>{
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            console.log('Success :)');
            print();

        }
        
    });
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit', (e)=>{
e.preventDefault();
checkRequired([nameInput1, nameInput2, email]);

});







