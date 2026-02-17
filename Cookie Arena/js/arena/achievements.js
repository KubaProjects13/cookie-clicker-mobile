
const notification = document.getElementById("notification");
const notificationp = document.getElementById("notificationp");

let achievement = "0" // 1 je zacatecnik, 2 je prvnich 70 hp ubranych
let award = 0;
let message = "";

function achievementsFunction() {
    if (trophies === 0 && hp >= 1) {
        achievement = 1; // zacatecnik

        achievements = achievements + 1;
        message = "First click!";
        updatestorage();

        showNotification();
    }

    if (hp <= 30) {
        achievement = 2; // zacatecnik

        achievements = achievements + 1;
        message = "First 70 clicks!";
        updatestorage();

        showNotification();
    } 

    if (gems === 10) {
        achievement = 3; // zacatecnik

        achievements = achievements + 1;
        message = "First 10💎";
        updatestorage();

        showNotification();
    }
}

function showNotification() {
    notificationp.textContent = message;
    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 4000);
}

achievementsFunction();