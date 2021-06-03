
const categoriesItem = document.querySelectorAll('.item');

console.log(`В списке ${categoriesItem.length} категории`);

categoriesItem.forEach((el) => {
    console.log(`Категория:${el.firstElementChild.textContent}`);
    console.log(`Количество элементов:${ el.querySelectorAll('ul li').length }`)
});
     




