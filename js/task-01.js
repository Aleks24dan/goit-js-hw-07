

// const itemEl = document.querySelectorAll('.item')
// console.log(`Количество элементов:${itemEl.length}`)

const categoriesItem = document.querySelectorAll('.item')

categoriesItem.forEach(el => {
    const textTitle = el.querySelector('h2')
    console.log(`Categories:${textTitle.textContent}`)
    const elementOfCategory = el.querySelectorAll('ul li')
    console.log(`Quantety:${ elementOfCategory.length }`)
})
