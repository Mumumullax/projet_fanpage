const diapos = document.getElementById("diapos");
const boutonPrec = document.getElementById("prec");
const boutonSuiv = document.getElementById("suiv");
const compteur = document.getElementById("compteur");

const total = diapos.children.length;

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
