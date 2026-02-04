// DEBUG SEKCE

// vsechno smaze
window.addEventListener("keydown", (event) => {
    // CTRL + SHIFT + R = RESET
    if (event.key.toLowerCase() === "r" && event.ctrlKey && event.shiftKey) {
        localStorage.clear(); // Smaže paměť
        location.reload();    // Obnoví stránku
    }
});

// reset time na 30s
window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "x" && event.ctrlKey && event.shiftKey) {
        localStorage.setItem("time", 30);
    }
});

// debug info v konzoli
window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "s" && event.ctrlKey && event.shiftKey) {
        
        console.log("DEBUG:");
        console.log(result + " result");
        console.log(trophies + " trophies");
        console.log(gameover + " gameover");
        console.log(FightStarted + " FightStarted");
    }
});

// nastavit skin na 2 (dark)
window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "y" && event.ctrlKey && event.shiftKey) {
        skin = 2;
        localStorage.setItem("skin", skin);
        location.reload();
    }
});

// nastavit skin na 3 (white)
window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "s" && event.ctrlKey && event.shiftKey) {
        skin = 3;
        localStorage.setItem("skin", skin);
        location.reload();
    }
});

// nastavit skin na 1 (default)
window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "q" && event.ctrlKey && event.shiftKey) {
        skin = 1;
        localStorage.setItem("skin", skin);
        location.reload();
    }
});