// HTML prvky
const claimButton = document.getElementById("claimButton");
const giftLabel = document.getElementById("giftLabel");
const timerLabel = document.getElementById("timerLabel");

// Konstanty
const BASE_REWARD = 10;      // základní počet gemů
const DAILY_RESET_HOUR = 10; // reset každý den v 10:00
const ONE_DAY = 24 * 60 * 60 * 1000; // jeden den v milisekundách

// Funkce, která zjistí čas dalšího resetu
function getNextDailyReset() {
    const now = new Date();
    const nextReset = new Date();
    nextReset.setHours(DAILY_RESET_HOUR, 0, 0, 0);
    if (now >= nextReset) {
        // pokud už je po resetu, nastavíme na další den
        nextReset.setDate(nextReset.getDate() + 1);
    }
    return nextReset;
}

// Funkce pro načtení posledního claimu z localStorage
function getLastClaimTime() {
    return parseInt(localStorage.getItem("lastDailyClaim") || "0", 10);
}

// Funkce pro načtení streaku z localStorage
function getStreak() {
    return parseInt(localStorage.getItem("dailyStreak") || "0", 10);
}

// Funkce zjistí, jestli můžeme claimnout
function canClaim() {
    const lastClaim = getLastClaimTime();
    // Získáme čas resetu, který proběhl v minulosti (nebo dnes ráno)
    const currentResetPoint = getNextDailyReset().getTime() - ONE_DAY;
    return lastClaim < currentResetPoint;
}

// Hlavní funkce pro claim
function claimDaily() {
    if (!canClaim()) return; // nemůžeme claimnout

    const now = Date.now();
    const lastClaim = getLastClaimTime();
    let streak = getStreak();

    // Logika streaku: Pokud je poslední claim starší než 2 dny (48h), streak padá
    // (Zde je logika benevolentní, dovoluje claimnout kdykoliv po resetu)
    if (lastClaim === 0 || (now - lastClaim) < (2 * ONE_DAY)) {
         // Pokud je to první claim vůbec NEBO jsme v limitu
         // Ale pozor: musíme zajistit, aby se streak nezvýšil, pokud claimujeme ten samý den (to řeší canClaim)
         // Pokud `canClaim` prošlo, znamená to, že je nový den.
         
         // Jednoduchá logika pro streak: 
         // Pokud od posledního claimu uběhlo více než (cca) 48 hodin, resetujeme streak.
         // Protože canClaim nás pustí jen jednou denně, stačí kontrolovat horní hranici.
         const timeSinceLast = now - lastClaim;
         if (timeSinceLast > 2 * ONE_DAY && lastClaim !== 0) {
             streak = 1; // Restart streaku, hráč vynechal den
         } else {
             streak++; // Pokračujeme
         }
    } else {
        streak = 1;
    }

    // Uložíme do localStorage
    localStorage.setItem("dailyStreak", streak);
    localStorage.setItem("lastDailyClaim", now);

    // Spočítáme odměnu
    const reward = BASE_REWARD + (streak - 1) * 2;
    
    // --- ZDE BYLA CHYBA ---
    // Musíme použít +=, abychom přičetli k existujícím gemům z common.js
    gems += reward; 
    // ----------------------
    
    // Uložíme aktualizované gemy a další data
    updatestorage(); 
    
    // Aktualizujeme UI
    updateUI();
}

// Funkce pro aktualizaci UI (timer a labely)
function updateUI() {
    // Pro zobrazení předpokládané odměny vezmeme aktuální streak.
    // Pokud hráč může claimnout, dostane odměnu za (streak + 1).
    let currentStreak = getStreak();
    let displayStreak = currentStreak;
    
    // Pokud může claimnout, vizuálně mu ukážeme, co dostane (další úroveň streaku)
    if (canClaim()) {
        displayStreak = currentStreak + 1;
    }

    const reward = BASE_REWARD + (Math.max(1, displayStreak) - 1) * 2;

    giftLabel.textContent = `+${reward} 💎 (streak: ${displayStreak} days)`;

    const remainingTime = getNextDailyReset().getTime() - Date.now();

    if (canClaim()) { // Používáme naši funkci canClaim pro konzistenci
        timerLabel.textContent = "Ready!";
        claimButton.disabled = false;
        claimButton.classList.remove("disabled-btn"); // Volitelné stylování
    } else {
        const hours = Math.floor(remainingTime / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        timerLabel.textContent = `${hours}h ${minutes}m ${seconds}s`;
        claimButton.disabled = true;
        claimButton.classList.add("disabled-btn");
    }
}

// Spustíme timer a nastavení UI
updateUI();
setInterval(updateUI, 1000);

// Event listener
claimButton.addEventListener("click", () => {
    claimDaily();
    // Přesměrování necháme chvíli počkat, aby se stihlo vše uložit, nebo ho dáme hned
    // Ideálně uživateli ukázat animaci, ale pro funkčnost stačí:
    window.location.href = "../index.html";
});
