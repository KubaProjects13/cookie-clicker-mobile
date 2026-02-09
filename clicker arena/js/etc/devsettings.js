const smazatvse = document.getElementById("smazatvse");
const resettime = document.getElementById("resettime");
const debuginfo = document.getElementById("debuginfo");
const debuginfoo = document.getElementById("debuginfoo");
const gemypls = document.getElementById("gemypls");
const xppls = document.getElementById("xppls");
const resetskins = document.getElementById("resetskins");
const skins123 = document.getElementById("skins123");
const back = document.getElementById("back");

debuginfoo.innerHTML = ""; // clear

back.addEventListener("click", () => {
    window.location.replace("../index.html");
});

smazatvse.addEventListener("click", () => {
    localStorage.clear(); // Smaže paměť
    location.reload();    // Obnoví stránku

    debuginfoo.innerHTML = `
    <pre>
    done
    </pre>
    `;
});

resettime.addEventListener("click", () => {
    localStorage.setItem("time", 30);
    debuginfoo.innerHTML = `
    <pre>
    done
    </pre>
    `;
});

debuginfo.addEventListener("click", () => {
    debuginfoo.innerHTML = `
    <pre>
    DEBUG:
    result: ${result}
    trophies: ${trophies}
    gameover: ${gameover}
    FightStarted: ${FightStarted}
    skin: ${skin}
    skin-collection: ${SkinCollection}
    gemResult: ${gemResult}
    gems: ${gems}
    xp: ${xp}
    level: ${level}
    levelDifficulty: ${levelDifficulty}
    </pre>
    `;
});

skins123.addEventListener("click", () => {
    console.log("Done");
    SkinCollection = "123";
    updatestorage();

    debuginfoo.innerHTML = `
    <pre>
    done
    </pre>
    `;
});

resetskins.addEventListener("click", () => {
    console.log("Done");
    SkinCollection = "1";
    updatestorage();

    debuginfoo.innerHTML = `
    <pre>
    done
    </pre>
    `;
});

gemypls.addEventListener("click", () => {
    console.log("Done");
    gems = gems + 500;
    updatestorage();

    debuginfoo.innerHTML = `
    <pre>
    done
    </pre>
    `;
});

xppls.addEventListener("click", () => {
    console.log("Done");
    xp = xp + 50;
    updatestorage();

    debuginfoo.innerHTML = `
    <pre>
    done
    </pre>
    `;
});