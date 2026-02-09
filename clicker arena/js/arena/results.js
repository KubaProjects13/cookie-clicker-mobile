const resultsH1 = document.getElementById("resultsH1");
const resultsWidget = document.getElementById("resultsWidget");
const ResultsTitle = document.getElementById("ResultsTitle");

const gotohome = document.getElementById("gotohome");
const PlayAgainButton = document.getElementById("PlayAgainButton");

const h2 = resultsWidget.querySelector("h2");
const p = resultsWidget.querySelector("p");
const span = resultsWidget.querySelector("span");
const spanXP = document.getElementById("spanXP");

// obranny mechanismus pokud fight nebyl
if (FightStarted === 1) {
    // kdyz vyhral
    if (gameover === 0) {
        resultsH1.textContent = "You win!"
        h2.textContent = "+" + result + " 🏆";
        p.textContent = "Well done, you'r doing best!";
        span.textContent = "+" + gemResult + "💎";
        spanXP.textContent = "+5 xp";
        ResultsTitle.textContent = "Clicker Arena - " + "+" + result + " 🏆";

        trophies = trophies + result;
        gems = gems + gemResult;
        xp = xp + 5;

        removetemp();
        updatestorage();
    } else {
        // kdyz prohral
        resultsH1.textContent = "You lose!"
        h2.textContent = result + " 🏆";
        p.textContent = "Be careful next time."
        span.textContent = "+0💎";
        spanXP.textContent = "-2 xp";
        ResultsTitle.textContent = "Clicker Arena - " + result + " 🏆";

        trophies = trophies - result;
        xp = xp - 2;

        removetemp();
        updatestorage();
    }

    // tlacitko jit domu
    gotohome.addEventListener("click", () => {
        removetemp();
        window.location.href = "../index.html"
    });

    // tlacitko play again
    PlayAgainButton.addEventListener("click", () => {
        removetemp();

        FightStarted = 1;
        updatestorage();
        window.location.href = "arena.html"
    });
    
} else {
    // jdes dom kvuli ochranne
    window.location.href = "../index.html"
};