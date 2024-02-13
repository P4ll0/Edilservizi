
// VARIABILI
let isChecked = false;
const navbar = document.querySelector('.header');
const checkMenu = document.querySelector(".header .menuBTN");
const scritta = document.querySelector(".logo");
let prevColor = navbar.getAttribute("backgroundColor");
let displayScritta = scritta.getAttribute("display");
const menuOverlay = document.querySelector(".header .menu_overlay");


console.log(checkMenu);

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



// FA SPARIRE IL MENU QUANDO PREMO SULL'OVERLAY
menuOverlay.addEventListener("click", () => {
    isChecked = !isChecked;
    checkMenu.checked = isChecked;

    if (isChecked) {
        navbar.style.backgroundColor = "transparent";
        scritta.style.display = "none";
    }
    else {
        navbar.style.backgroundColor = prevColor;
        scritta.style.display = displayScritta;
    }
});



// CAMBIO TEMA
const switchTeme = () => {
    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute("data-theme"),
        newTheme;

    newTheme = (dataTheme === "light") ? "dark" : "light";
    rootElem.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
};

document.querySelector(".theme_switcher").addEventListener("click", switchTeme);