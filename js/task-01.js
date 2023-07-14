const list = document.querySelector('#categories')
console.log(`Number of categories: ${list.children.length}`)
const items = list.querySelectorAll(".item")
items.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`)
    console.log(`Elements: ${el.lastElementChild.children.length}`)
})