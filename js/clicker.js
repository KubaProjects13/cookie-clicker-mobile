// --- ZMĚNA 1: Načtení hodnoty z LocalStorage ---
// Pokud ve storage nic není (vrátí null), použije se 0.

// nacteni cookies
let clickvar = parseInt(localStorage.getItem("cookie")) || 0;

// obtiznost
let difficulty = parseInt(localStorage.getItem("difficulty")) || 0;

// nacteni per...
let perclick = parseInt(localStorage.getItem("perclick")) || 1;
let persecond = parseInt(localStorage.getItem("persecond")) || 0;

// nacteni shop itemu
let cursor = parseInt(localStorage.getItem("cursorsave")) || 0;
let grandma = parseInt(localStorage.getItem("grandmasave")) || 0;
let farm = parseInt(localStorage.getItem("farmsave")) || 0;
let mine = parseInt(localStorage.getItem("minesave")) || 0;

// Reference na elementy
const img = document.getElementById("clicker");
const labelhome = document.getElementById("labelcounter-home");
const labelshop = document.getElementById("labelcounter-shop");
const title = document.getElementById("title");
const labelperhome = document.getElementById("labelper-home");
const labelpershop = document.getElementById("labelper-shop");

const grandmaWidget = document.getElementById("grandma-widget");
const cursorWidget = document.getElementById("cursor-widget");
const farmWidget = document.getElementById("farm-widget");
const mineWidget = document.getElementById("mine-widget");

// Stav myši
let clicked = false;

// Proměnná pro aktuální výšku obrázku
let currentHeight = img.height || 100; // Přidal jsem fallback pro jistotu, kdyby img.height bylo 0

img.addEventListener("click", () => {
    clicked = true;
});

img.addEventListener("touchstart", () => {
    clicked = true;
});

// Forever loop (animace)
setInterval(() => {
    if (clicked) {
        clickvar = clickvar + 1 + perclick;
        updatelabel();

        // Jednoduchá animace zmenšení při kliku
        currentHeight += (60 - currentHeight / 5);
        img.style.height = currentHeight + "px";
    } else {
        // Návrat do původní velikosti
        currentHeight += (50 - currentHeight / 5);
        img.style.height = currentHeight + "px";
    }
    clicked = false;
}, 100);

setInterval(() => {
    clickvar = clickvar + persecond;

    updatelabel();
}, 1000);

// Prvotní vykreslení
updatelabel();