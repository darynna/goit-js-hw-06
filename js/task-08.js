const form = document.querySelector(".login-form");

form.addEventListener('submit', onSudmit);

function onSudmit(ev) {
    ev.preventDefault();
    if (form.elements.password.value.length == 0 || form.elements.email.value.length === 0) {
        alert("All fields must be filled!")
    }
    const obj = [];
    const email = form.elements.email.name;
    const password = form.elements.password.name;
    obj[email] = form.elements.email.value;
    obj[password] = form.elements.password.value;
    console.log(obj)
    form.reset()

}
