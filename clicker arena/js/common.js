let FightStarted = parseInt(localStorage.getItem("FightStarted")) || 0; // 0 je false, 1 je true

let level = parseInt(localStorage.getItem("level")) || 1; // level 1 je default
let trophies = parseInt(localStorage.getItem("trophies")) || 0;
let skin = parseInt(localStorage.getItem("skin")) || 1; // 1 je default, 2 dark, 3 white

let power = parseInt(localStorage.getItem("power")) || 0; // sila, zaklad je nula
let result = parseInt(localStorage.getItem("result")) || 0; // docasna promenena na poharky
let gameover = parseInt(localStorage.getItem("gameover")) || 0; // 0 je false, 1 je true
let time = parseInt(localStorage.getItem("time")) || 30; // cas, default je 30 sekund

function updatestorage() {
    localStorage.setItem("result", result);
    localStorage.setItem("gameover", gameover);
    localStorage.setItem("power", power);
    localStorage.setItem("level", level);
    localStorage.setItem("trophies", trophies);
    localStorage.setItem("FightStarted", FightStarted);
};

function removetemp() {
    localStorage.setItem("result", 0);
    localStorage.setItem("gameover", 0);
    localStorage.setItem("FightStarted", 0);
};