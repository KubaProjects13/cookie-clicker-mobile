function createFallingCookie() {
    const container = document.getElementById('skins-container');
    const cookie = document.createElement('img');
    
    if (skin === 1) {
        cookie.src = "../img/skins/default/cookie 300x300.png";
    };

    if (skin === 2) {
        cookie.src = "../img/skins/dark/cookie 300x300.png";
    };

    if (skin === 3) {
        cookie.src = "../img/skins/white/cookie 300x300.png";
    };

    cookie.className = 'falling-cookie';
    
    // Náhodná pozice zleva (0 až 100%)
    cookie.style.left = Math.random() * 100 + "vw";
    
    // Náhodná velikost (aby to vypadalo přirozeně)
    const size = Math.random() * 40 + 30 + "px";
    cookie.style.width = size;
    
    // Náhodná rychlost pádu (2 až 5 sekund)
    const duration = Math.random() * 3 + 2 + "s";
    cookie.style.animationDuration = duration;

    container.appendChild(cookie);

    // Po skončení animace sušenku smažeme, aby se nám nesekal prohlížeč
    setTimeout(() => {
        cookie.remove();
    }, 5000);
}

// Chceš, aby padaly samy? Přidej tohle:
setInterval(createFallingCookie, 1000); // Každou půlvteřinu vznikne nová