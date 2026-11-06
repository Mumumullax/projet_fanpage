const burger = document.querySelector(".burger");
const menu = document.querySelector(".entete .nav");

if (burger && menu) {
    burger.addEventListener("click", function () {
        menu.classList.toggle("ouvert");
        const ouvert = menu.classList.contains("ouvert");
        burger.textContent = ouvert ? "✕" : "☰";
        burger.setAttribute("aria-expanded", String(ouvert));
    });
}
