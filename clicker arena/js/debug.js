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
    if (event.key.toLowerCase() === "e" && event.ctrlKey && event.shiftKey) {
        
        console.log("DEBUG:");
        console.log(result + " result");
        console.log(trophies + " trophies");
        console.log(gameover + " gameover");
        console.log(FightStarted + " FightStarted");
        console.log(skin + " skin");
        console.log(SkinCollection + " skin-collection");
        console.log(gemResult + " gemResult");
        console.log(gems + " gems");
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

window.cmd = function (command) {
    if (command === "skins123") {
        console.log("Done");
        SkinCollection = "123";
        updatestorage();
    }

    if (command === "reset skins") {
        console.log("Done");
        SkinCollection = "1";
        updatestorage();
    }
};