const levelBars = document.querySelectorAll(".level-bar");
const levelLabels = document.querySelectorAll(".levelLabel");
const NextLevelLabels = document.querySelectorAll(".nextLevelLabel");

function updateLevelBar() {
    // 1. Zjistíme hranici pro aktuální level (kde jsme začali)
    // Pokud jsme level 1, začínáme od 0. Jinak je to "required" hodnota aktuálního levelu.
    const currentLevelStart = levels[level] ? levels[level].required : 0;
    
    // 2. Zjistíme cíl pro další level
    // Pokud existuje definice pro level + 1, vezmeme jeho "required".
    const nextLevelData = levels[level + 1];
    const nextLevelGoal = nextLevelData ? nextLevelData.required : null;

    let percentage = 0;

    if (nextLevelGoal) {
        // Vypočítáme rozsah levelu (např. mezi 100 a 200 je rozdíl 100)
        const totalRange = nextLevelGoal - currentLevelStart;
        // Vypočítáme, kolik hráč nahrál v tomto levelu navíc
        const progressInLevel = trophies - currentLevelStart;
        
        // Vypočítáme procenta
        percentage = (progressInLevel / totalRange) * 100;
    } else {
        // Pokud není další level (dosáhli jsme maxima), bar bude plný
        percentage = 100;
    }

    // 3. Ochrana, aby to nikdy nepřeteklo (clamp)
    // Zajistíme, že číslo je vždy mezi 0 a 100
    percentage = Math.max(0, Math.min(percentage, 100));

    // Aplikace do HTML
    levelBars.forEach(levelBar => {
        levelBar.style.width = percentage + "%";
    });
}

function nextLevel() {
    const nextLevelIndex = level + 1;
    const nextLevelData = levels[nextLevelIndex];

    if (nextLevelData && trophies >= nextLevelData.required) {

        level++;
        time = time - nextLevelData.timeMinus;
        power = power + nextLevelData.powerPlus;
        gems = gems + nextLevelData.gemsPlus;

        updatestorage();
        localStorage.setItem("time", time);

        window.location.href = "etc/levelup.html";
    }
};

function updateLevelLabels() {
    levelLabels.forEach(levelLabel => {
        levelLabel.textContent = level;
    });

    NextLevelLabels.forEach(NextLevelLabel => {
        NextLevelLabel.textContent = level + 1;
    });
};

if (trophies <= 0) {
    trophies = 0;
    updatestorage();
};

updateLevelBar();
updateLevelLabels();
nextLevel();