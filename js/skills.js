document.addEventListener("DOMContentLoaded", function () {
  const skillsDropdown = document.getElementById("skills-dropdown");

  const additionalOptions = [
    { text: "Athlete Age", value: "Athlete Age" },
    { text: "Notable Competition", value: "Notable Competition" },
    { text: "Known For", value: "Known For" },
    { text: "Short Program", value: "Short Program" },
    { text: "Free Program", value: "Free Program" },
  ];

  additionalOptions.forEach((option) => {
    const newOption = document.createElement("option");
    newOption.text = option.text;
    newOption.value = option.value;
    skillsDropdown.appendChild(newOption);
  });

  var athlete = localStorage.getItem("athleteSelection");
  console.log("Athlete: " + athlete);
  const dropdown = document.getElementById("skills-dropdown");
  const nextButton = document.getElementById("next-button");

  nextButton.addEventListener("click", function () {
    const selectedSkill = dropdown.value;
    localStorage.setItem("skillSelection", selectedSkill);
    window.location.href = `game.html`;
  });
});
