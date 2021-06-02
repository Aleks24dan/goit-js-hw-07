const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', validation);


function validation(event) {
    const inputLength = event.currentTarget.value.length;
    const atributLength = event.currentTarget.dataset.length;

    validationInput.classList.add('valid')
    
    if (inputLength > atributLength) {
        return validationInput.classList.add('invalid')
    } if (inputLength <= atributLength) {
       return validationInput.classList.remove('invalid')
    }
}
