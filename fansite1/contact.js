const formulaire = document.getElementById("formulaire");
const confirmation = document.getElementById("confirmation");

if (formulaire && confirmation) {
    formulaire.addEventListener("submit", function(event) {
        event.preventDefault();

        confirmation.style.display = "block";
        formulaire.reset();
    });
}

const burger = document.querySelector(".burger");
const menu = document.querySelector(".entete .nav");

if (burger && menu) {
    burger.addEventListener("click", function() {
        menu.classList.toggle("ouvert");

        if (menu.classList.contains("ouvert")) {
            burger.textContent = "✕";
        } else {
            burger.textContent = "☰";
        }
    });
}