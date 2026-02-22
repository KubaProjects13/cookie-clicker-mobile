function eventPower() {
    if (eventFight === 1) {
        hp = hp - 1;
    } else {
        hp = hp - power;
    }
}

function eventBG() {
    if (eventFight === 1) {
        arenaImg.style.backgroundImage = `url('../img/arena/green\ arena.png')`;
    }
}

function eventNoTrophies() {
    if (eventFight === 1) {
        result = 0;
    }
}

function plusEventsPlayed() {
    if (eventFight === 1) {
        eventsPlayed = eventsPlayed + 1;
        updatestorage();
    }
}

function eventBox() {
    if (eventFight === 1) {
        h2.textContent = "+1 event box";

        boxReward = 1;
        updatestorage();
    } else {
        h2.textContent = "+" + result + " 🏆";
    }
}