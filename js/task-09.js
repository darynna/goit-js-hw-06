function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

btnEl.addEventListener("click", chaneColor);

function chaneColor(ev) {
  const chosenColor = getRandomHexColor();
  document.body.style.backgroundColor = chosenColor;
  textEl.textContent = chosenColor
}