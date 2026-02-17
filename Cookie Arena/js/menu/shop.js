const SkinOffer = document.getElementById("skin-offer");

const h2 = SkinOffer.querySelector("h2");
const p = SkinOffer.querySelector("p");
const img = SkinOffer.querySelector("img");
const span = SkinOffer.querySelector("span");
const buybutton = SkinOffer.querySelector("button");

const DoubleOffer = document.getElementById("double-offer");

const h2do = DoubleOffer.querySelector("h2");
const pdo = DoubleOffer.querySelector("p");
const imgdo = DoubleOffer.querySelector("img");
const spando = DoubleOffer.querySelector("span");
const buybuttondo = DoubleOffer.querySelector("button");

const gemsLabels = document.querySelectorAll(".gemsLabel");

function updateGemLabels() {
    gemsLabels.forEach(label => {
        // Najdeme v každém labelu ten span s hodnotou
        const valueSpan = label.querySelector(".gem-value");
        
        if (valueSpan) {
            valueSpan.textContent = gems; // Přepíšeme jen to číslo
        }
    });
};

function updateSkinCollection() {

    // má default, nemá dark ani white → nabídni dark
    if (
        SkinCollection.includes("1") &&
        !SkinCollection.includes("2") &&
        !SkinCollection.includes("3")
    ) {
        h2.textContent = "dark chocolate";
        p.textContent = "tastes good";
        img.src = "img/dark/cookie 300x300.png";
        span.textContent = "price: 500💎";

        buybutton.onclick = () => {
            if (gems >= 500) {
                SkinCollection = "12";
                gems -= 500;
                updatestorage();
                updateGemLabels();

                location.reload();
            } else {
                alert("You don't have enough gems!");
            }
        };
    // má dark, nemá white → nabídni white
    } else if (
        SkinCollection.includes("2") &&
        !SkinCollection.includes("3")
    ) {
        h2.textContent = "white chocolate";
        p.textContent = "so white";
        img.src = "img/white/cookie 300x300.png";
        span.textContent = "price: 1000💎";

        buybutton.onclick = () => {
            if (gems >= 1000) {
                SkinCollection = "123";
                gems -= 1000;
                updatestorage();
                updateGemLabels();

                location.reload();
            } else {
                alert("You don't have enough gems!");
            }
        };
    // má všechno
    } else {
        h2.textContent = "you have all skins!";
        p.textContent = "wow!!";
        img.src = "img/ui/cookies.png";
        span.textContent = "";
        buybutton.style.color = "#a9a9a9";
        buybutton.style.backgroundColor = "#614810";
        buybutton.style.boxShadow = "0 4px 0 #47350d";
        buybutton.style.cursor = "not-allowed";
    }
}

if (offers.includes("1") || level === 1) {
    DoubleOffer.style.display = "none";
} else {
    DoubleOffer.style.display = "flex";

    buybuttondo.addEventListener("click", () => {
        if (gems >= 2000) {        
            offers = offers + "1";
            gems = gems - 2000;

            let bonusEnd = Date.now() + 1800000;
            localStorage.setItem("bonusEnd", bonusEnd);
    
            updatestorage();
            location.reload();
        } else {
            alert("You don't have enough gems!");
        }
    });
}

updateSkinCollection();
updateGemLabels();