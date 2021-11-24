const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const email = document.getElementById('email');
const birthday = document.getElementById('birthday');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const province = document.getElementById('province');
const city = document.getElementById('city');
const zipCode = document.getElementById('zipCode');
const errorText = document.getElementsByClassName('er');
const output = document.querySelector('.output');




function print(){

    output.innerHTML = `<ul class="list-group list-group-flush text-center">
    <li class="list-group-item">Name: ${nameInput.value}</li>
    <li class="list-group-item">Address: ${address.value}</li>
    <li class="list-group-item">Province: ${province.value}</li>
    <li class="list-group-item">City: ${city.value}</li>
    <li class="list-group-item">Zip: ${zipCode.value}</li>
    <li class="list-group-item">Phone: ${phone.value}</li>
    <li class="list-group-item">Email: ${email.value}</li>
    <li class="list-group-item">Birthday Month: ${birthday.value}</li>
    
    </ul>
    <div class="d-grid mt-3">
    <button onClick="window.location.reload();" class="btn btn-primary">Reset</button>
    </div>
    `;
    form.className = 'hide';
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
checkRequired([nameInput, email]);


// if (nameInput.value === ''){
//     console.log('failed');
//     showError(nameInput, 'Please Enter In A Name');
// }

// if (email.value === ''){
//     console.log('failed');
//     showError(email, 'Please Enter In A Email');
// }else if(!isValidEmail(email.value)) {
//     showError(email, 'Please Enter In A Valid Email');
// } else{
//     console.log('success :)');

// }

});




