const input = document.querySelector("#validation-input");
input.addEventListener("input", color)
function color(event) {
    const properLenght = parseInt(input.dataset.length);
    const inputLenght = event.currentTarget.value.length;
    if (properLenght === inputLenght) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add('invalid');
    }
}