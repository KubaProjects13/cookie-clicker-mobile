const BoxImg = document.getElementById("box-img");
const rewardH2 = document.getElementById("rewardH2");
const boxContent = document.getElementById("boxContent");

// rewards
let gemReward = 0;
let skinReward = 0;
let powerReward = 0;

// clicky na box
let clicks = 0;

BoxImg.classList.add("bouncing-box");

// rare
if (boxReward === 1) {
    BoxImg.src = "../img/box/rare/box 500x500.png";
    gemReward = Math.floor(Math.random() * (10 - 4 + 1)) + 12;

    if (eventsPlayed >= 10) {
        skinReward = 4; // dubai skin je 4
        SkinCollection = SkinCollection + skinReward;
    } else {
        const r = Math.random();
        skinReward = r < 0.95 ? 0 : r < 0.98 ? 1 : 2;

        if (SkinCollection.includes("2") && !SkinCollection.includes("3")) {
            skinReward = 0;
        }

        if (SkinCollection.includes("3") && !SkinCollection.includes("2")) {
            skinReward = 0;
        }
    }

    powerReward = Math.random() < 0.3 ? 1 : 0; // 0 70% nebo 1 30%

    if (powerReward === 1) {
        powerReward = 0.5;
    }

    if (power >= 3 && level <= 3) {
        powerReward = 0;
    }

    power = power + powerReward;
    localStorage.setItem("power", power);
    timeMinus();

    gems = gems + gemReward;

    if (skinReward >= 0) {
        SkinCollection = SkinCollection + skinReward;
    }

    if (SkinCollection.includes("0")) {
        SkinCollection = SkinCollection.replaceAll("0", "");
        
        localStorage.setItem("skin-collection", SkinCollection);
    }

    removetemp();
    boxReward = 0;
    updatestorage();

    BoxImg.addEventListener("click", () => {
        clicks++

        boxContent.style.animation = 'none';
        void boxContent.offsetWidth;

        // 1. KLIK: Gemy
        if (clicks === 1) {
            boxContent.style.animation = "FadeAnimation 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
            BoxImg.src = "../img/box/rare/box with dia 500x500.png";
            rewardH2.textContent = gemReward + "x";
            BoxImg.classList.remove("bouncing-box");
        } 
        // 2. KLIK: Power
        else if (clicks === 2) {
            if (powerReward !== 0) {
                boxContent.style.animation = "FadeAnimation 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
                BoxImg.src = "../img/box/rare/box with power 500x500.png";
                rewardH2.textContent = powerReward + "x";
            } else {
                // Pokud není power, jdeme rovnou na skin (přidáme klik)
                clicks++; 
            }
        }

        // 3. KLIK: Skin
        if (clicks === 3) {
            if (skinReward !== 0) {
                boxContent.style.animation = "FadeAnimation 1s cubic-bezier(0.4, 0, 0.2, 1)";
                
                if (skinReward === 1) {
                    BoxImg.src = "../img/skins/dark/cookie 1000x1000.png";
                    rewardH2.textContent = "Dark chocolate skin unlocked!";
                } else if (skinReward === 2) {
                    BoxImg.src = "../img/skins/white/cookie 1000x1000.png";
                    rewardH2.textContent = "White chocolate skin unlocked!";
                } else if (skinReward === 4) { // Tady je ten Dubai skin!
                    BoxImg.src = "../img/skins/dubai/cookie 1000x1000.png";
                    rewardH2.textContent = "Dubai chocolate skin unlocked!";
                }
            } else {
                // Pokud není skin, jdeme domů
                window.location.href = "../index.html";
            }
        } 
        // 4. KLIK (nebo víc): Konec
        else if (clicks > 3) {
            removetemp();
            window.location.href = "../index.html";
        }

    });
} else {
    window.location.href = "../index.html";
}

// debug info v konzoli
window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "y" && event.ctrlKey) {
        
        console.log("DEBUG:");
        console.log(boxReward + " boxReward");
        console.log(gemReward + " gemReward");
        console.log(skinReward + " skinReward");
        console.log(powerReward + " powerReward");
        console.log(clicks + " clicks");
        console.log(gemResult + " gemResult");
        console.log(gems + " gems");
        console.log(power + " power");
        console.log(SkinCollection + " SkinCollection");
    }
});