let button = document.querySelector(".js-button");
let body = document.querySelector(".body")

button.addEventListener("click", () => {
    body.classList.toggle("body--alternative");
    button.classList.toggle("button--green");
    button.innerText = body.classList.contains("body--alternative") ? " zielony " : " czerwony "
});

