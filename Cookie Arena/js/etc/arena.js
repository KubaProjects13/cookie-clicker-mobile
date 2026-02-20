let labelData = arenaList[arena];
const arenaName = labelData.name;
const path = labelData.pathName;

function loadArenaList() {
    let dalsiArena = arena + 1; // Zjistíme číslo další arény
    let data = arenaList[dalsiArena]; // Vytáhneme si její data (required, gems, atd.)

    // Pokud další aréna existuje a máš na ni dost trofejí
    if (data && trophies >= data.required) {
        arena = dalsiArena; // Přepíšeme tvoji aktuální arénu na novou
        gems = gems + data.gemsPlus;
        hp = hp + data.hpPlus;

        localStorage.setItem("hp", hp);

        updatestorage();
        window.location.href = "etc/newArena.html";
    }
}