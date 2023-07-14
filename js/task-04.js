let counterValue = 0;

const btnDecreseEl = document.querySelector("button[data-action='decrement']");
const btnIncreseEl = document.querySelector("button[data-action='increment']");
// console.log(btnDecrese.dataset.action)
const valueEl = document.querySelector('#value');
// console.log(valueEl)
btnIncreseEl.addEventListener("click", increment)
btnDecreseEl.addEventListener("click", decrement)

function increment() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

function decrement() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}