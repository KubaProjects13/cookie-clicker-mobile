const FightButton = document.getElementById("fight-button");
const TrophiesSpan = document.getElementById("trophies-span");
const SkinImgHome = document.getElementById("skin-img-home");
const SkinDescription = document.getElementById("skin-description");

FightButton.addEventListener("click", () => {
    FightStarted = 1;
    updatestorage();

    window.location.href = "arena/arena.html";
});

function updateskinonhome() {
    if (skin === 1) {
        SkinImgHome.src = "img/default/cookie 300x300.png";
        SkinDescription.textContent = "the default, milk chocolate";
    };

    if (skin === 2) {
        SkinImgHome.src = "img/dark/cookie 300x300.png";
        SkinDescription.textContent = "dark chocolate";
    };

    if (skin === 3) {
        SkinImgHome.src = "img/white/cookie 300x300.png";
        SkinDescription.textContent = "white chocolate";
    };
};

TrophiesSpan.textContent = trophies + "🏆";

updateskinonhome();