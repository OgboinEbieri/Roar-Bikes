let nameError = document.getElementById('name-error')
let emailError = document.getElementById('email-error')
let phoneError = document.getElementById('phone-error')
let messageError = document.getElementById('message-error')
let submitError = document.getElementById('submit-error')



function nameValidation(){
    let name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    //the expression below indicates if it doesn't match the condition, it will give an error
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    //the statement below will show no error if the name is valid and will return true
    nameError.innerHTML = 'valid';
    return true;
}

function emailValidation(){
    let email = document.getElementById('contact-email').value;

    if(email.length == 0){
        email.innerHTML ='Email is required' 
        return false;
    }
    //it if meets the condition it will display valid but if it doesn't , it will display invalid
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;
    }

    emailError.innerHTML = 'valid';
    return true;

}
function phoneValidation(){
    let phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone is required';
        return false;
    }
    //if its not equal to 11, it will display an error
    if(phone.length !== 11){
        phoneError.innerHTML = 'Phone should be 11 digits';
        return false;
    }
    //if its not digits and does not pass the condition, it will display an error
    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = 'Only digits';
        return false;
    }
    phoneError.innerHTML = 'valid'
    return true;
}

function messageValidation(){
    let message = document.getElementById('contact-message').value;
    let required = 30;
    //it will give the value how much character is left
    let left = required - message.length;

    if(left > 0){
        messageError.innerHTML= left+ 'more characters are required';
        return false
    }
    messageError.innerHTML = 'valid';
    return true;
}

function validateForm(){
    if(!nameValidation() || !emailValidation() || !phoneValidation() || !messageValidation()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display ='none';}, 3000);
        return false;
    }
}

