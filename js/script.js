{
    const welcome = () => {
        console.log("Cześć!");
    }
    welcome();

    const onChangeBackgroundClick = () => {

        const body = document.querySelector(".body");
        const backgroundName = document.querySelector(".js-backgroundName");
        body.classList.toggle("colorChange");
        backgroundName.innerText = body.classList.contains("colorChange") ? "Włącz gwiazdy" : "Wyłącz gwiazdy";
    }

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", onChangeBackgroundClick);
    }

    init();
}