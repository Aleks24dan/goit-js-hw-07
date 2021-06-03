const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', validation);


function validation(event) {
    const inputLength = event.currentTarget.value.length;
    const atributLength = event.currentTarget.dataset.length;

    if (inputLength == atributLength) {

        validationInput.classList.add('valid')
        validationInput.classList.remove('invalid')
    } else { 

    validationInput.classList.add('invalid')
    validationInput.classList.remove('valid')
}
}
