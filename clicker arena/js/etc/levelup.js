const fromlevellabel = document.getElementById("fromlevelinfo");
const gotItButton = document.getElementById("gotitButton");
const rewardsLabel = document.getElementById("rewards");

fromlevellabel.textContent = "level " + level;

gotItButton.addEventListener("click", () => {
    window.location.href = "../index.html"
});