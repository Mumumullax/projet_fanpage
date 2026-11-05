/* carrousel (page galerie uniquement) */
const diapos = document.getElementById("diapos");
const boutonPrec = document.getElementById("prec");
const boutonSuiv = document.getElementById("suiv");

if (diapos && boutonPrec && boutonSuiv) {
  boutonSuiv.addEventListener("click", function () {
    const finAtteinte =
      diapos.scrollLeft + diapos.clientWidth >= diapos.scrollWidth - 5;

    if (finAtteinte) {
      diapos.scrollTo({ left: 0 });
    } else {
      diapos.scrollBy({ left: diapos.clientWidth });
    }
  });

  boutonPrec.addEventListener("click", function () {
    if (diapos.scrollLeft < 5) {
      diapos.scrollTo({ left: diapos.scrollWidth });
    } else {
      diapos.scrollBy({ left: -diapos.clientWidth });
    }
  });
}

/* menu burger (mobile) */
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

if (burger && menu) {
  burger.addEventListener("click", function () {
    const ouvert = menu.classList.toggle("ouvert");
    burger.setAttribute("aria-expanded", ouvert);
  });

  // referme le menu si on repasse en affichage tablette / ordi
  window.addEventListener("resize", function () {
    if (window.innerWidth > 700) {
      menu.classList.remove("ouvert");
      burger.setAttribute("aria-expanded", "false");
    }
  });
}
