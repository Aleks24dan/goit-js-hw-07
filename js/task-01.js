

// const itemEl = document.querySelectorAll('.item')
// console.log(`Количество элементов:${itemEl.length}`)

const categoriesItem = document.querySelectorAll('.item')
const arrCategories = [...categoriesItem];
let count = 0;
arrCategories.forEach((el, i) => {
    count += (i); 
});
console.log(`В списке ${count} категории`);

arrCategories.forEach((el) => {
   const textTitle = el.querySelector('h2')
    console.log(`Категория:${textTitle.textContent}`)
    const elementOfCategory = el.querySelectorAll('ul li')
    console.log(`Количество элементов:${ elementOfCategory.length }`)
});
     