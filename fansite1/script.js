const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", function () {
  menu.classList.toggle("ouvert");
});

const cds = document.querySelectorAll(".cd");

cds.forEach(function (cd) {
  const musique = new Audio(cd.dataset.audio);

  cd.addEventListener("mouseenter", function () {
    musique.currentTime = 0;
    musique.play();
  });

  cd.addEventListener("mouseleave", function () {
    musique.pause();
    musique.currentTime = 0;
  });
});

/*test push*/
