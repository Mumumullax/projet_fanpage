const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", function () {
  menu.classList.toggle("ouvert");
});

/* boutton pour le son */
const interrupteur = document.querySelector("#son");
let sonActif = false;
const musiques = [];

interrupteur.addEventListener("click", function () {
  sonActif = !sonActif;
  interrupteur.setAttribute("aria-checked", sonActif);
  interrupteur.textContent = sonActif ? "ON" : "OFF";

  if (!sonActif) {
    musiques.forEach(function (musique) {
      musique.pause();
      musique.currentTime = 0;
    });
  }
});

/* cd */
const cds = document.querySelectorAll(".cd");

cds.forEach(function (cd) {
  const musique = new Audio(cd.dataset.audio);
  musiques.push(musique);

  cd.addEventListener("mouseenter", function () {
    if (!sonActif) return;
    musique.currentTime = 0;
    musique.play();
  });

  cd.addEventListener("mouseleave", function () {
    musique.pause();
    musique.currentTime = 0;
  });
});
