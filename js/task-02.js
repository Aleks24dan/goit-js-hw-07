const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const itemsOfIngedients = ingredients.map(el => {
const ingredientsItem = document.createElement('li')
    ingredientsItem.textContent = el
    console.log(ingredientsItem)
    return ingredientsItem
});

const nodeIngredients = document.querySelector('#ingredients')
nodeIngredients.append(...itemsOfIngedients)