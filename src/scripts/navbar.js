// VARIABILI
let isChecked = false;
const navbar = document.querySelector('.header');
const checkMenu = document.querySelector(".header .menuBTN");
let prevColor = navbar.getAttribute("backgroundColor");

// FA SPARIRE IL MENU QUANDO PREMO SUL MENU AD HAMBURGER
checkMenu.addEventListener("click", () => {
    isChecked = !isChecked;

    if (isChecked) {
        navbar.style.backgroundColor = "transparent";
    }
    else {
        navbar.style.backgroundColor = prevColor;
    }
});