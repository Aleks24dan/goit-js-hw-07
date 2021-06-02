

// const itemEl = document.querySelectorAll('.item')
// console.log(`Количество элементов:${itemEl.length}`)

const categoriesItem = document.querySelectorAll('.item')
let count = 0;
categoriesItem.forEach((el, i) => {
    count += (i); 
});

console.log(`В списке ${count} категории`);

categoriesItem.forEach((el) => {
   const textTitle = el.querySelector('h2')
    console.log(`Категория:${textTitle.textContent}`)
    const elementOfCategory = el.querySelectorAll('ul li')
    console.log(`Количество элементов:${ elementOfCategory.length }`)
});
     