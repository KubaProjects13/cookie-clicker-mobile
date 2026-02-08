const levelBars = document.querySelectorAll(".level-bar");
const levelLabels = document.querySelectorAll(".levelLabel");

function updateLevelBar() {
    levelBars.forEach(levelBar => {
        levelBar.style.width = xp - levelDifficulty + "%";
    });
};

function updateLevelLabel() {
    levelLabels.forEach(levelLabel => {
        levelLabel.textContent = level;
    });
};

if (xp >= 100 + levelDifficulty) {
    level++
    time = time - 2;
    power = power + 1;
    gems = gems + 10;
    xp = 0;
    levelDifficulty = levelDifficulty + 10;

    updatestorage();

    window.location.href = "etc/levelup.html"
};

updateLevelBar();
updateLevelLabel();
