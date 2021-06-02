const btnCreateEl = document.querySelector('[data-action="render"]');
const btnDestroyEl = document.querySelector('[data-action="destroy"]');
const inputElement = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');
btnCreateEl.addEventListener('click', onCreatElBtn)
btnDestroyEl.addEventListener('click', onDestroyElBtn)

function onCreatElBtn() {
    const arrElements = [];
    console.log(inputElement.value);
    for (let i = 0; i <= inputElement.value - 1; i += 1){
       
        arrElements.push(document.createElement('div'))
        
    }

    boxesEl.append(...arrElements)

    arrElements.forEach((div, i) => {
        console.log(i)
        i = i + 1;
         i*= 10;
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
       
        div.style.width += `${i}px`;
        div.style.height += `${i}px`;
        div.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
}

function onDestroyElBtn() {
    boxesEl.innerHTML = '';
    inputElement.value = '';    

}