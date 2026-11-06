const burger = document.querySelector(".burger");
const menu = document.querySelector(".entete .nav");

if (burger && menu) {
    burger.addEventListener("click", function() {
        menu.classList.toggle("ouvert");

        burger.textContent = menu.classList.contains("ouvert") ? "✕" : "☰";
    });
}