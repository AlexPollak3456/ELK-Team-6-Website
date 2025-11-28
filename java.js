// Für zukünftige JavaScript-Funktionen
// Beispiel: Einfacher Hover-Effekt oder Klick-Event
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".topic-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log(`Du hast auf "${btn.textContent}" geklickt.`);
        });
    });
});



