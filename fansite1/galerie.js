
const burger = document.querySelector(".burger");
const menu = document.querySelector(".entete .nav");

if (burger && menu) {
    burger.addEventListener("click", function() {
        menu.classList.toggle("ouvert");

        const estOuvert = menu.classList.contains("ouvert");

        burger.textContent = estOuvert ? "✕" : "☰";
        burger.setAttribute("aria-expanded", estOuvert);
    });
}