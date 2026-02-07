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

  if (SkinCollection.includes("1") || SkinCollection.includes("2") && !SkinCollection.includes("3")) {
    h2.textContent = "white chocolate";
    p.textContent = "Tasty!!";
    img.src = "img/white/cookie 300x300.png";
    span.textContent = "price: 1000 gems";

    buybutton.onclick = () => {
      if (gems >= 1000) {
        localStorage.setItem("skin-collection", "13");
        gems = gems - 1000
        updatestorage();
        updateGemLabels();
      } else {
        alert("You don't have enough gems!");
      }
    };

  } else if (SkinCollection.includes("3") && !SkinCollection.includes("2")) {
    h2.textContent = "dark chocolate";
    p.textContent = "Tasty!!";
    img.src = "img/dark/cookie 300x300.png";
    span.textContent = "price: 500 gems";

    buybutton.onclick = () => {
      if (gems >= 500) {
        localStorage.setItem("skin-collection", "123");
        gems = gems - 500
        updatestorage();
        updateGemLabels();
      } else {
        alert("You don't have enough gems!");
      }
    };
  } else {
    h2.textContent = "you have all skins!";
    p.textContent = "wow!!";
    img.src = "img/ui/cookies.png";
    span.textContent = "";
  }
}

updateSkinCollection();
updateGemLabels();