const resultsH1 = document.getElementById("resultsH1");
const resultsWidget = document.getElementById("resultsWidget");
const ResultsTitle = document.getElementById("ResultsTitle");

const gotohome = document.getElementById("gotohome");
const PlayAgainButton = document.getElementById("PlayAgainButton");

const h2 = resultsWidget.querySelector("h2");
const p = resultsWidget.querySelector("p");
const span = resultsWidget.querySelector("span");
const gemH2 = document.getElementById("gemH2");

function boxRewardRandom() {
    boxReward = Math.floor(Math.random() * 2) + 1;
}

// obranny mechanismus pokud fight nebyl
if (FightStarted === 1) {
    // kdyz vyhral
    if (gameover === 0) {
        resultsH1.textContent = "You win!"
        h2.textContent = "+" + result + " 🏆";
        p.textContent = "Well done, you'r doing best!";
        gemH2.textContent = "+" + gemResult + "💎";
        ResultsTitle.textContent = "Clicker Arena - " + "+" + result + " 🏆";

        trophies = trophies + result;
        gems = gems + gemResult;

        removetemp();

        boxRewardRandom();
        updatestorage();
    } else {
        // kdyz prohral
        resultsH1.textContent = "You lose!"
        h2.textContent = result + " 🏆";
        p.textContent = "Be careful next time."
        gemH2.textContent = "+0💎";
        ResultsTitle.textContent = "Clicker Arena - " + result + " 🏆";

        trophies = trophies - result;

        removetemp();
        updatestorage();
    }

    // tlacitko jit domu
    gotohome.addEventListener("click", () => {
        if (boxReward !== 0) {
            window.location.href = "../etc/box.html"
        } else {
            window.location.href = "../index.html"
        }
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