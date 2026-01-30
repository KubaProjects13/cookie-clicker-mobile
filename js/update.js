// Funkce pro aktualizaci labelu a uložení
function updatelabel() {
    // home a shop labely
    labelhome.textContent = clickvar;
    labelshop.textContent = clickvar;
    labelperhome.textContent = "per click: " + perclick + " - per second: " + persecond;
    labelpershop.textContent = "per click: " + perclick + " - per second: " + persecond;
    title.textContent = clickvar + " cookies";

    // shop item labely
    cursorlabel.textContent = "Cursor " + cursor + "x";
    grandmalabel.textContent = "Grandma " + grandma + "x";
    farmlabel.textContent = "Farm " + farm + "x";
    minelabel.textContent = "Mine " + mine + "x";

    // shop item cost labely
    cursorcost.textContent = "Cost: " + (20 + difficulty) + " cookies";
    grandmacost.textContent = "Cost: " + (100 + difficulty) + " cookies";
    farmcost.textContent = "Cost: " + (1000 + difficulty) + " cookies";
    minecost.textContent = "Cost: " + (12000 + difficulty) + " cookies";

    // --- ZMĚNA 2: Uložení do LocalStorage ---
    // Místo document.cookie použijeme setItem(klíč, hodnota)
    localStorage.setItem("cookie", clickvar);
    localStorage.setItem("difficulty", difficulty);

    // per...
    localStorage.setItem("persecond", persecond);
    localStorage.setItem("perclick", perclick);

    // shop itemy
    localStorage.setItem("cursorsave", cursor);
    localStorage.setItem("grandmasave", grandma);
    localStorage.setItem("farmsave", farm);
    localStorage.setItem("minesave", mine);

    // Kontrola pro Kurzor
    let cCost = 20 + difficulty;
    if (clickvar < cCost) {
        cursorWidget.classList.add("locked");
    } else {
        cursorWidget.classList.remove("locked");
    }

    // Kontrola pro Babičku
    let gCost = 100 + difficulty;
    if (clickvar < gCost) {
        grandmaWidget.classList.add("locked");
    } else {
        grandmaWidget.classList.remove("locked");
    }

    // farma
    let fCost = 1000 + difficulty;
    if (clickvar < fCost) {
        farmWidget.classList.add("locked");
    } else {
        farmWidget.classList.remove("locked");
    }

    // mine
    let mCost = 12000 + difficulty;
    if (clickvar < mCost) {
        mineWidget.classList.add("locked");
    } else {
        mineWidget.classList.remove("locked");
    }
}