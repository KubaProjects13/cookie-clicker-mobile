const cursorupgradebutton = document.getElementById("cursorupgrade");
const cursorupgradelabel = document.getElementById("cursorupgradelabel");
const upgradecost = document.getElementById("cursorupgradecost");

cursorupgradebutton.addEventListener("click", () => {
    let currentCost = 1000 + difficulty;
    if (clickvar >= currentCost && cursorUpgradeBought === 0) { // Přidána kontrola
        cursorUpgradeBought = 1; // Označíme jako koupené
        difficulty += 2;
        clickvar = clickvar - currentCost;
        perclick = perclick + 10;

        updatelabel();
    }
});