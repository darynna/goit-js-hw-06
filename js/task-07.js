const input = document.getElementById("font-size-control");
const textEl = document.getElementById("text");
input.addEventListener("input", changeSize);

function changeSize(e) {
    textEl.style.fontSize = e.target.value + 'px';
}