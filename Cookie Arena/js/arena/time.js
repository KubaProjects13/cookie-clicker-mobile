function timeMinus() {
    if (power === 1) {
        time = 30;
    } else if (power === 2) {
        time = 29;
    } else if (power === 3) {
        time = 28;
    } else if (power === 4) {
        time = 27;
    } else if (power === 5) {
        time = 25;
    } else if (power === 10) {
        time = 20;
    } else if (power === 15) {
        time = 15;
    } else if (power === 20) {
        time = 10;
    }

    localStorage.setItem("time", time);
}

