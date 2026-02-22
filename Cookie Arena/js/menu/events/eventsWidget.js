const widget = document.getElementById("eventsWidget");
const eventWidget = document.getElementById("eventWidget");

const eventTitle = document.getElementById("eventTitle");
const eventLabel = document.getElementById("eventLabel");
const eventButton = document.getElementById("eventButton");

const eventsDisplay = "flex"; // skryte none, jinak flex

eventWidget.style.display = eventsDisplay;
eventWidget.style.backgroundImage = "url('img/ui/events/dubai.png')";

eventTitle.textContent = "Green Arena flashback";
eventLabel.textContent = "Look back at the Green Arena. Collect rewards and get this Dubai skin!";
eventButton.textContent = "50💎";

eventButton.addEventListener("click", () => {
    if (gems >= 50) {
        gems = gems - 50;
        eventFight = 1;
        FightStarted = 1;
        updatestorage();

        window.location.href = "arena/arena.html"; 
    } else {
        alert("You don't have enough gems!");
    }
});