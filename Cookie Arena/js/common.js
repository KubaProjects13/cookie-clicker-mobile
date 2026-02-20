let FightStarted = parseInt(localStorage.getItem("FightStarted")) || 0; // 0 je false, 1 je true

let level = parseInt(localStorage.getItem("level")) || 1; // level 1 je default
let levelDifficulty = parseInt(localStorage.getItem("levelDifficulty")) || 0; // kazdym levelem se navysuje
let trophies = parseInt(localStorage.getItem("trophies")) || 0;
let offers = String(localStorage.getItem("offers") || "");

// global
let skin = parseInt(localStorage.getItem("skin")) || 1; // 1 je default, 2 dark, 3 white
let gems = parseInt(localStorage.getItem("gems")) || 0;
let SkinCollection = localStorage.getItem("skin-collection") || "1"; // 1 je default
let achievements = localStorage.getItem("achievements") || "";

// pro fight
let power = parseFloat(localStorage.getItem("power")) || 1; // sila, zaklad je 1
let result = parseInt(localStorage.getItem("result")) || 0; // docasna promenena na poharky
let gemResult = parseInt(localStorage.getItem("gemResult")) || 0; // docasna promenena na gemy
let boxReward = parseInt(localStorage.getItem("boxReward")) || 0; // 0 nic, 1 rare, 2 epic, 3 legendary
let gameover = parseInt(localStorage.getItem("gameover")) || 0; // 0 je false, 1 je true
let time = parseInt(localStorage.getItem("time")) || 30; // cas, default je 30 sekund
let hp = parseInt(localStorage.getItem("hp")) || 100; // 100 hp je default
let arena = parseInt(localStorage.getItem("arena")) || 1; // 1 green arena, 2 wooden fences

function updatestorage() {
    localStorage.setItem("result", result);
    localStorage.setItem("gameover", gameover);

    localStorage.setItem("level", level);
    localStorage.setItem("levelDifficulty", levelDifficulty);
    localStorage.setItem("trophies", trophies);
    localStorage.setItem("arena", arena);
    localStorage.setItem("gems", gems);

    localStorage.setItem("FightStarted", FightStarted);
    localStorage.setItem("skin-collection", SkinCollection);
    localStorage.setItem("skin", skin);

    localStorage.setItem("gemResult", gemResult);
    localStorage.setItem("boxReward", boxReward);

    localStorage.setItem("achievements", achievements);
    localStorage.setItem("offers", offers);
};

function removetemp() {
    localStorage.setItem("result", 0);
    localStorage.setItem("gameover", 0);
    localStorage.setItem("FightStarted", 0);
    localStorage.setItem("boxReward", 0);
    localStorage.setItem("gemResult", 0);
};