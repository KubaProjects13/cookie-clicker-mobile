const SkinImg = document.getElementById("skin-img");
const HpBar = document.getElementById("HpBar");
const HpLabel = document.getElementById("HpLabel");
const timerButton = document.getElementById("timerButton")

let clicked = false;
let currentHeight = SkinImg.height || 100;

if (eventFight === 1) {
    hp = 100;
    time = 30;
}

const arenaSrc = "../";
const maxHp = hp;

SkinImg.addEventListener("pointerdown", () => {
    clicked = true;
});

const body = document.body;

function startShake50() {
    document.body.classList.add("shake-50");
}

function stopShake50() {
    document.body.classList.remove("shake-50");
}

function startShake25() {
    document.body.classList.add("shake-25");
}

function stopShake25() {
    document.body.classList.remove("shake-25");
}

setInterval(() => {
    if (clicked) {
        eventPower(); // hp - 1 hp a - síla
        updatefight();

        // animace zmenšení při kliku
        currentHeight += (60 - currentHeight / 5);
        SkinImg.style.height = currentHeight + "px";
    } else {
        // návrat do původní velikosti
        currentHeight += (50 - currentHeight / 5);
        SkinImg.style.height = currentHeight + "px";
    }
    clicked = false;
}, 100);

setInterval(() => {
    time--;
    timerButton.textContent = time;

    // kdyz prohra
    if (time <= 0 && hp >= 0) {
        result = Math.floor(Math.random() * (0 - (-4) + 1)) + (-4);
        gameover = 1
        time = 1;

        eventNoTrophies();
        updatestorage();

        opona.style.opacity = '1'; 
        setTimeout(() => {
            window.location.href = "results.html"
        }, 1000); // 2000ms = 2 sekundy
    }

    if (time <= 10) {
        timerButton.style.fontSize = "35px";
        timerButton.style.filter = "brightness(1.8)"
    };
}, 1000);

function updatefight() {
    let barwidth = (hp / maxHp) * 100;
    HpBar.style.width = barwidth + "%";
    HpLabel.textContent = "HP: " + hp + "/" + maxHp;

    // kdyz vyhra
    if (hp <= 0) {
        result = Math.floor(Math.random() * (8 - 5 + 1)) + 5;
        gemResult = Math.floor(Math.random() * (32 - 12 + 1)) + 12;
        gameover = 0

        eventNoTrophies();
        plusEventsPlayed();

        updatestorage();

        opona.style.opacity = '1'; 
        setTimeout(() => {
            window.location.href = "results.html"
        }, 1000); // 2000ms = 2 sekundy
    };

    if ((hp / maxHp) * 100 <= 70) {
        SkinImg.style.setProperty("--spin-speed", "15s");
        setInterval(createFallingCookie, 700);
    };

    if ((hp / maxHp) * 100 <= 30) {
        SkinImg.style.setProperty("--spin-speed", "5s");
        startShake25();
    };
};

timerButton.addEventListener("click", () => {
    updatestorage();
    window.location.href = "gamestopped.html";
});

if (skin === 1) {
    SkinImg.src = "../img/skins/default/cookie 300x300.png";
};

if (skin === 2) {
    SkinImg.src = "../img/skins/dark/cookie 300x300.png";
};

if (skin === 3) {
    SkinImg.src = "../img/skins/white/cookie 300x300.png";
};

if (skin === 4) {
    SkinImg.src = "../img/skins/dubai/cookie 300x300.png";
};

updatefight();