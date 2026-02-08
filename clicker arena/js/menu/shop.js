const SkinOffer = document.getElementById("skin-offer");

const h2 = SkinOffer.querySelector("h2");
const p = SkinOffer.querySelector("p");
const img = SkinOffer.querySelector("img");
const span = SkinOffer.querySelector("span");
const buybutton = SkinOffer.querySelector("button");

const gemsLabels = document.querySelectorAll(".gemsLabel");

function updateGemLabels() {
    gemsLabels.forEach(label => {
        label.textContent = gems + " 💎";
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

updateSkinCollection();
updateGemLabels();
