const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector("#ingredients")
// const markup = ingredients.map(el => `<li class="list-item new">${el}</li>`).join('')
// console.log(markup)
// ingredientsEl.innerHTML = markup;

const markup = ingredients.map(el => {
  const elemLi = document.createElement("li");
  elemLi.textContent = el;
  ingredientsEl.append(elemLi);
})
