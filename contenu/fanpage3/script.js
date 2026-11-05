document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const header = document.querySelector(".entete");

  // Vérifier que les éléments existent
  if (!burger || !header) {
    console.error("Bouton burger ou header introuvable !");
    return;
  }

  // Ouvrir et fermer le menu
  burger.addEventListener("click", function () {
    header.classList.toggle("menu-ouvert");

    const menuOuvert = header.classList.contains("menu-ouvert");

    burger.setAttribute("aria-expanded", menuOuvert);
    burger.setAttribute(
      "aria-label",
      menuOuvert ? "Fermer le menu" : "Ouvrir le menu",
    );
  });

  // Fermer le menu après avoir cliqué sur un lien
  const liens = document.querySelectorAll(".navigation a");

  liens.forEach(function (lien) {
    lien.addEventListener("click", function () {
      header.classList.remove("menu-ouvert");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Ouvrir le menu");
    });
  });

  // Fermer le menu avec la touche Échap
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      header.classList.remove("menu-ouvert");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Ouvrir le menu");
    }
  });
});
