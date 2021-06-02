const range = document.querySelector('#font-size-control');
const abraText = document.querySelector('#text');

range.min = '10';
range.max = '50';
range.step = '10';
range.value = '10';

range.addEventListener('mousemove', onChangeInputRange);

function onChangeInputRange(event) {
    const size = event.currentTarget.value;
    abraText.style.fontSize = `${size}px`;
   
}