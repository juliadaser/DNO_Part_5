document.addEventListener("DOMContentLoaded", function () {
  //Adding NAMES:
  var alexandraName = document.getElementById("alexandraName");
  var annaName = document.getElementById("annaName");
  var kamilaName = document.getElementById("kamilaName");

  alexandraName.innerHTML =
    Tutberitse_2022_Olympics.olympicChampions[1].nameRussian;
  annaName.innerHTML = Tutberitse_2022_Olympics.olympicChampions[0].nameRussian;
  kamilaName.innerHTML =
    Tutberitse_2022_Olympics.olympicChampions[2].nameRussian;

  const athleteImages = document.querySelectorAll(".athlete img");
  athleteImages.forEach((image, index) => {
    image.addEventListener("click", () => {
      if (index == 0) {
        localStorage.setItem("athleteSelection", "Alexandra");
      } else if (index == 1) {
        localStorage.setItem("athleteSelection", "Anna");
      } else if (index == 2) {
        localStorage.setItem("athleteSelection", "Kamila");
      }
      window.location.href = "skills.html";
    });
  });
});
