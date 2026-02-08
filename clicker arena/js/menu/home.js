const FightButton = document.getElementById("fight-button");
const TrophiesSpan = document.getElementById("trophies-span");
const SkinImgHome = document.getElementById("skin-img-home");
const SkinDescription = document.getElementById("skin-description");

FightButton.addEventListener("click", () => {
    FightStarted = 1;
    updatestorage();

    window.location.href = "arena/arena.html";
});

function updateskinonhome() {
    if (skin === 1) {
        SkinImgHome.src = "img/default/cookie 300x300.png";
        SkinDescription.textContent = "the default, milk chocolate";
    };

    if (skin === 2) {
        SkinImgHome.src = "img/dark/cookie 300x300.png";
        SkinDescription.textContent = "dark chocolate";
    };

    if (skin === 3) {
        SkinImgHome.src = "img/white/cookie 300x300.png";
        SkinDescription.textContent = "white chocolate";
    };
};

function canClaimGift() {
    const DAILY_RESET_HOUR = 10;
    const ONE_DAY = 24 * 60 * 60 * 1000;
    
    const lastClaim = parseInt(localStorage.getItem("lastDailyClaim") || "0", 10);
    
    // Výpočet času příštího resetu (stejná logika jako v daily.js)
    const now = new Date();
    const nextReset = new Date();
    nextReset.setHours(DAILY_RESET_HOUR, 0, 0, 0);
    
    if (now >= nextReset) {
        nextReset.setDate(nextReset.getDate() + 1);
    }
    
    const currentResetPoint = nextReset.getTime() - ONE_DAY;
    
    // Vrací true, pokud byl poslední claim před posledním resetem
    return lastClaim < currentResetPoint;
};

// Tento kód dej do indexu (nebo do js/menu/index.js pokud ho máš)

// Pokud je dárek připraven k vyzvednutí
if (canClaimGift()) {
    window.location.href = "etc/daily.html"; // Název tvého HTML souboru s dárkem
}

TrophiesSpan.textContent = trophies + "🏆";

document.addEventListener("DOMContentLoaded", () => {
    const backButtons = document.querySelectorAll(".back-button");

        backButtons.forEach(button => {
            button.addEventListener("click", () => {
            location.reload();
        });
    });
});

updateskinonhome();
