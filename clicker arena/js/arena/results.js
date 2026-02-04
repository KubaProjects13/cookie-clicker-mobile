const resultsH1 = document.getElementById("resultsH1");
const trophiesH2results = document.getElementById("trophiesH2results");
const infoResult = document.getElementById("infoResult");
const gotohome = document.getElementById("gotohome");
const PlayAgainButton = document.getElementById("PlayAgainButton");
const ResultsTitle = document.getElementById("ResultsTitle");

// obranny mechanismus pokud fight nebyl
if (FightStarted === 1) {
    // kdyz vyhral
    if (gameover === 0) {
        resultsH1.textContent = "You win!"
        trophiesH2results.textContent = "+" + result + " trophies";
        infoResult.textContent = "Well done, you'r doing best!"
        ResultsTitle.textContent = "Clicker Arena - " + "+" + result + " trophies"

        trophies = trophies + result

        removetemp();
        updatestorage();
    } else {
        // kdyz prohral
        resultsH1.textContent = "You lose!"
        trophiesH2results.textContent = result + " trophies";
        infoResult.textContent = "Be careful next time."
        ResultsTitle.textContent = "Clicker Arena - " + result + " trophies"

        trophies = trophies - result

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