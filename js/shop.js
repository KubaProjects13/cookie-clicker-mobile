const cursorbutton = document.getElementById("cursor");
const cursorlabel = document.getElementById("cursorlabel");
const cursorcost = document.getElementById("cursorcost");

const grandmabutton = document.getElementById("grandma");    
const grandmalabel = document.getElementById("grandmalabel");
const grandmacost = document.getElementById("grandmacost");

const farmbutton = document.getElementById("farm");
const farmlabel = document.getElementById("farmlabel");
const farmcost = document.getElementById("farmcost");

const minebutton = document.getElementById("mine");
const minelabel = document.getElementById("minelabel");
const minecost = document.getElementById("minecost");

cursorbutton.addEventListener("click", () => {
    let currentCost = 20 + difficulty;
    if (clickvar >= currentCost) {
        cursor++
        difficulty += 2;
        clickvar = clickvar - currentCost; // ODEČTEME SKUTEČNOU CENU
        perclick = perclick + 1;

        updatelabel();
    }
});

grandmabutton.addEventListener("click", () => {
    let currentCost = 100 + difficulty; // Spočítáme si aktuální cenu
    if (clickvar >= currentCost) {
        grandma++
        difficulty += 10;
        clickvar = clickvar - currentCost; // ODEČTEME SKUTEČNOU CENU
        persecond = persecond + 2;

        updatelabel();
    }
});

farmbutton.addEventListener("click", () => {
    let currentCost = 1000 + difficulty; 
    if (clickvar >= currentCost) {
        farm++
        difficulty += 50;
        clickvar = clickvar - currentCost;
        persecond = persecond + 20;

        updatelabel();
    }
});

minebutton.addEventListener("click", () => {
    let currentCost = 12000 + difficulty; 
    if (clickvar >= currentCost) {
        mine++
        difficulty += 100;
        clickvar = clickvar - currentCost;
        persecond = persecond + 50;

        updatelabel();
    }
});