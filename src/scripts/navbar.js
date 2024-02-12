// VARIABILI
let isChecked = false;
const navbar = document.querySelector('.header');
const checkMenu = document.querySelector(".header .menuBTN");
const scritta = document.querySelector(".logo");
let prevColor = navbar.getAttribute("backgroundColor");
let displayScritta = scritta.getAttribute("display");

// FA SPARIRE IL MENU QUANDO PREMO SUL MENU AD HAMBURGER
checkMenu.addEventListener("click", () => {
    isChecked = !isChecked;

    if (isChecked) {
        navbar.style.backgroundColor = "transparent";
        scritta.style.display = "none";
    }
    else {
        navbar.style.backgroundColor = prevColor;
        scritta.style.display = displayScritta;
    }
});