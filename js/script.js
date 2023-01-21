console.log("Cześć!");

let button = document.querySelector(".js-button");
let body = document.querySelector(".body");
let backgroundName = document.querySelector(".js-backgroundName");

button.addEventListener("click", () => {
    
    body.classList.toggle("colorChange");

    backgroundName.innerText = body.classList.contains("colorChange") ? "Włącz gwiazdy" : "Wyłącz gwiazdy";

});
