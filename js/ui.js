const buttons = document.querySelectorAll(".bottombar-button");
const pages = document.querySelectorAll(".page");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.dataset.page; // "page1", "page2"...
        
        pages.forEach(page => page.classList.remove("active")); // skryj všechny
        document.getElementById(targetId).classList.add("active"); // ukaž jen vybranou
    });
});

// zobrazíme Page 1 na startu
document.getElementById("page1").classList.add("active");

// Hledáme všechna tlačítka s třídou nav-button
const navButtons = document.querySelectorAll(".nav-button");

navButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.dataset.page; 
        
        // Skryjeme všechny stránky
        pages.forEach(page => page.classList.remove("active")); 
        
        // Ukážeme tu správnou
        const targetPage = document.getElementById(targetId);
        if (targetPage) {
            targetPage.classList.add("active");
        }
    });
});

const backtohome = document.getElementById("backtohome");

backtohome.addEventListener("click", () => {
    location.reload();
});