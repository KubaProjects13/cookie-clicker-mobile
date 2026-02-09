const skinsOutput = document.getElementById("skinsOutput");

skinsOutput.innerHTML = ""; // clear

// default
if (SkinCollection.includes("1")) {
    skinsOutput.innerHTML += `
            <div class="widget" data-skin="1" style="text-align: center;">
                <h2>the default, milk chocolate</h2>
                <p>most classic skin</p>
                <img src="img/default/cookie 300x300.png" alt="Skin" class="skin-img">
                <button class="pick-btn">pick</button>
            </div>
    `;
};

// dark
if (SkinCollection.includes("2")) {
    skinsOutput.innerHTML += `
            <div class="widget" data-skin="2" style="text-align: center;">
                <h2>dark chocolate</h2>
                <p>tastes good</p>
                <img src="img/dark/cookie 300x300.png" alt="Skin" class="skin-img">
                <button class="pick-btn">pick</button>
            </div>
    `;
};

// dark
if (SkinCollection.includes("3")) {
    skinsOutput.innerHTML += `
            <div class="widget" data-skin="3" style="text-align: center;">
                <h2>white chocolate</h2>
                <p>so white</p>
                <img src="img/white/cookie 300x300.png" alt="Skin" class="skin-img">
                <button class="pick-btn">pick</button>
            </div>
    `;
};

skinsOutput.addEventListener("click", (e) => {
    const button = e.target.closest(".pick-btn");
    if (!button) return;

    const widget = button.closest(".widget");
    const selectedSkin = widget.dataset.skin;

    skin = selectedSkin;
    updatestorage();
    location.reload();

    console.log("Selected skin:", skin);
});