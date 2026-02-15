const notification = document.getElementById("notification");
const notificationp = document.getElementById("notificationp");

let achievement = "0" // 1 je zacatecnik, 2 je 10 kliku za 5 sekund
let award = 0;
let message = "";

if (trophies === 0 && hp >= 1) {
    achievement = 1 // zacatecnik

    achievements = achievements + 1;
    message = "First click!";
    updatestorage();

    showNotification();
}

function showNotification() {
    notificationp.textContent = message;
    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 4000);
}