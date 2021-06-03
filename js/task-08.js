const btnCreateEl = document.querySelector('[data-action="render"]');
const btnDestroyEl = document.querySelector('[data-action="destroy"]');
const inputElement = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');
btnCreateEl.addEventListener('click', onCreatElBtn)
btnDestroyEl.addEventListener('click', onDestroyElBtn)


let w = 0;

function onCreatElBtn() {
    let inpValue = +inputElement.value;
    const arrElements = [];
    
    [...Array(inpValue).keys()].forEach((n) => {
        arrElements.push(document.createElement('div'))
    })

    boxesEl.append(...arrElements)
    console.log(inpValue)
    arrElements.forEach((div, i) => {
        i = 1;
        w += i * 10;
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        div.style.width += `${w}px`;
        div.style.height += `${w}px`;
        div.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
}

function onDestroyElBtn() {
    boxesEl.innerHTML = '';
    inputElement.value = '';    

}

