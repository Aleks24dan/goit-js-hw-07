


const decrementBtn = document.querySelector('[data-action="decrement"]').addEventListener('click', decrement);
const incrementBtn = document.querySelector('[data-action="increment"]').addEventListener('click', increment);
const count = document.querySelector('#value');

let valueCounter = 1;

function decrement() {
    count.textContent = `${valueCounter}`;
     valueCounter -= 1;
}

function increment() {
    count.textContent = `${valueCounter}`;
     valueCounter += 1; 
}



