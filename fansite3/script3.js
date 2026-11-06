document.addEventListener("DOMContentLoaded", function () {
  // Récupération des éléments
  const burger = document.getElementById("burger");
  const header = document.querySelector(".entete");
  const liens = document.querySelectorAll(".navigation a");

  // verif
  if (!burger || !header) {
    console.error("Bouton burger ou header introuvable !");
    return;
  }

  // open et close le menu
  burger.addEventListener("click", function () {
    header.classList.toggle("menu-ouvert");

    const menuOuvert = header.classList.contains("menu-ouvert");

    burger.setAttribute("aria-expanded", menuOuvert);

    burger.setAttribute(
      "aria-label",
      menuOuvert ? "Fermer le menu" : "Ouvrir le menu",
    );
  });

  // close le menu apres un clic
  liens.forEach(function (lien) {
    lien.addEventListener("click", function () {
      header.classList.remove("menu-ouvert");

      burger.setAttribute("aria-expanded", "false");

      burger.setAttribute("aria-label", "Ouvrir le menu");
    });
  });

  //close le menu avec echap
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      header.classList.remove("menu-ouvert");

      burger.setAttribute("aria-expanded", "false");

      burger.setAttribute("aria-label", "Ouvrir le menu");
    }
  });
});
