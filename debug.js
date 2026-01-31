// DEBUG SEKCE

const clearbutton = document.getElementById("clear")

// vsechno smaze
window.addEventListener("keydown", (event) => {
    // CTRL + SHIFT + R = RESET
    if (event.key.toLowerCase() === "r" && event.ctrlKey && event.shiftKey) {
        localStorage.clear(); // Smaže paměť
        location.reload();    // Obnoví stránku
    }
});

function debugclear() {
    localStorage.clear(); // Smaže paměť
    location.reload();    // Obnoví stránku
};

clearbutton.addEventListener("click", () => {
    debugclear();
});

// + 100 cookies
window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "y" && event.ctrlKey && event.shiftKey) {
        clickvar = clickvar + 100;
        
        console.log("DEBUG: +100 cookies!");

        updatelabel();
    }
});

// debug info v konzoli
window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "s" && event.ctrlKey && event.shiftKey) {
        
        console.log("DEBUG:");
        console.log(difficulty + " difficulty");
        console.log(clickvar + " clickvar");
        console.log(cursor + " cursor");
        console.log(grandma + " grandma");
        console.log(farm + " farm");
        console.log(mine + " mine");

        updatelabel();
    }
});
