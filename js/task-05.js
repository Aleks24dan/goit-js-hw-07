const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
    
}

const valueText = refs.output.textContent

refs.input.addEventListener('input', onEventInput);

function onEventInput() {
    refs.input.value !== '' ? refs.output.textContent = refs.input.value : refs.output.textContent = valueText;
    console.log(refs.input.value)
}
