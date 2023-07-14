function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxSpace = document.querySelector("#boxes")

// createBtn.addEventListener("click", createBoxess);
function createBoxes(amount) {
    let width = 30;
    let heigth = 30;
  for (let i = 0; i < amount; i += 1){
    const color = getRandomHexColor();
    const box = document.createElement("div");
    box.style.backgroundColor = color;
    box.style.width = width + 'px';
    box.style.height = heigth + 'px';
    width += 10;
    heigth += 10;
    boxSpace.append(box)
    console.log(box)
  }
}

function createBox() {
  createBoxes(input.value)
}

createBtn.addEventListener("click", createBox);

destroyBtn.addEventListener('click', clean);
function clean() {
  boxSpace.innerHTML = '';
  input.value = '';
}