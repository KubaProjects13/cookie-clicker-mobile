const arenaImg = document.getElementById("arenaImg");

function checkBonus() {
    // 1. Načteme uložený čas (datum spotřeby)
    var savedEnd = localStorage.getItem("bonusEnd");

    // Pokud tam něco je, jdeme počítat
    if (savedEnd) {
        // 2. Získám aktuální čas (teď)
        var now = Date.now();

        // 3. VÝPOČET: Konec mínus Teď = Kolik zbývá milisekund
        var difference = savedEnd - now;

        // Pokud je výsledek větší než 0, bonus stále platí
        if (difference > 0) {
            // Převod na sekundy (vydělíme 1000 a zaokrouhlíme dolů)
            var secToEnd = Math.floor(difference / 1000);
            
            console.log("Bonus běží! Zbývá sekund: " + secToEnd);

            timerButton.style.backgroundColor = "#07f507";
            timerButton.style.boxShadow = "0 4px 0 #008c00";
            timerButton.style.color = "#000000";

            power = power * 2;

            updatestorage();
            
            // TADY si spusť svůj odpočet, už víš, že má běžet od 'sekundyDoKonce'
            return secToEnd; 

        } else {
            // Pokud je výsledek 0 nebo méně, čas už vypršel
            console.log("Bonus už vypršel.");
            localStorage.removeItem("bonusEnd"); // Smažeme starý čas
            return 0;
        }
    }
}

// arena obrazek
function changeArena() {
    arenaImg.style.backgroundImage = `url('${arenaSrc}img/arena/${path}.png')`;
}

changeArena();
checkBonus();