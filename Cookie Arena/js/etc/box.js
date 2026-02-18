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
    const r = Math.random();
    skinReward = r < 0.95 ? 0 : r < 0.98 ? 1 : 2;
    powerReward = Math.floor(Math.random() * 2); // 0 nebo 1

    if (SkinCollection.includes("2") && !SkinCollection.includes("3")) {
        skinReward = 0;
    }

    if (SkinCollection.includes("3") && !SkinCollection.includes("2")) {
        skinReward = 0;
    }

    if (powerReward === 1) {
        powerReward = 0.5;
    }

    if (power >= 4) {
        powerReward = 0;
    }

    gems = gems + gemReward;

    if (powerReward >= 0 && power <= 4 && arena <= 2) {
        power = power + powerReward;
    }
    if (skinReward >= 0) {
        SkinCollection = SkinCollection + skinReward;
    }

    if (SkinCollection.includes("0")) {
        SkinCollection = SkinCollection.replaceAll("0", "");
        
        // Nezapomeň hodnotu uložit zpět do localStorage, jinak se změna neprojeví trvale
        localStorage.setItem("skin-collection", SkinCollection);
    }

    removetemp();
    boxReward = 0;
    updatestorage();

    BoxImg.addEventListener("click", () => {
        clicks++

        boxContent.style.animation = 'none';
        void boxContent.offsetWidth;

        // gems
        if (clicks === 1) {
            boxContent.style.animation = "FadeAnimation 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
            BoxImg.src = "../img/box/rare/box with dia 500x500.png";
            rewardH2.textContent = gemReward + "x";
            BoxImg.classList.remove("bouncing-box");
        };

        // power
        if (clicks === 2 && powerReward !== 0) {
            boxContent.style.animation = "FadeAnimation 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
            BoxImg.src = "../img/box/rare/box with power 500x500.png";
            rewardH2.textContent = powerReward + "x";
        } else if (clicks === 2 && powerReward === 0) {
            removetemp();
            window.location.href = "../index.html";
        } else if (clicks === 3 && skinReward >= 0) {
            removetemp();
            window.location.href = "../index.html";
        }

        // skin
        if (clicks === 3 && !skinReward >= 0) {
            if (skinReward === 1) {
                boxContent.style.animation = "FadeAnimation 1s cubic-bezier(0.4, 0, 0.2, 1)";
                BoxImg.src = "../img/skins/dark/cookie 1000x1000.png";
                rewardH2.textContent = "Dark chocolate skin unlocked!";
            }

            if (skinReward === 2) {
                boxContent.style.animation = "FadeAnimation 1s cubic-bezier(0.4, 0, 0.2, 1)";
                BoxImg.src = "../img/skins/white/cookie 1000x1000.png";
                rewardH2.textContent = "White chocolate skin unlocked!";
            }
        } else if (clicks === 3 && skinReward === 0) {
            removetemp();
            window.location.href = "../index.html";
        } 
        
        else if (clicks >= 3) {
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