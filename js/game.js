document.addEventListener("DOMContentLoaded", function () {
  // Get references to the dropdown and "Next" button
  var athlete = localStorage.getItem("athleteSelection");
  var skill = localStorage.getItem("skillSelection");
  console.log("Athlete: " + athlete + "  skill: " + skill);
  const nextButton = document.getElementById("next-button");

  //access the database and add to the innerHTML HERE

  if (athlete == "Alexandra") {
    const alexandraImg = document.getElementById("alexandraImg");
    alexandraImg.style.width = 250 + "px";
    alexandraImg.style.height = 250 + "px";
  } else if (athlete == "Anna") {
    const AnnaImg = document.getElementById("AnnaImg");
    AnnaImg.style.width = 250 + "px";
    AnnaImg.style.height = 250 + "px";
  } else if (athlete == "Kamila") {
    const KamiaImg = document.getElementById("KamilaImg");
    KamiaImg.style.width = 250 + "px";
    KamiaImg.style.height = 250 + "px";
  }

  let alexandraAge =
    2023 - Tutberitse_2022_Olympics.olympicChampions[1].birthDate;
  let alexandraHistory =
    Tutberitse_2022_Olympics.olympicChampions[1].majorCompetitions[0];
  let alexandraPersonality =
    Tutberitse_2022_Olympics.olympicChampions[1].personalityTraits;
  let alexandraShort =
    Tutberitse_2022_Olympics.olympics.scores.alexandraTrusova.shortProgram;
  let alexandraFree =
    Tutberitse_2022_Olympics.olympics.scores.alexandraTrusova.freeProgram;

  let annaAge = 2023 - Tutberitse_2022_Olympics.olympicChampions[0].birthDate;
  let annaHistory =
    Tutberitse_2022_Olympics.olympicChampions[0].majorCompetitions[0];
  let annaPersonality =
    Tutberitse_2022_Olympics.olympicChampions[0].personalityTraits;
  let annaShort =
    Tutberitse_2022_Olympics.olympics.scores.annaSherbakova.shortProgram;
  let annaFree =
    Tutberitse_2022_Olympics.olympics.scores.annaSherbakova.freeProgram;

  let kamilaAge = 2023 - Tutberitse_2022_Olympics.olympicChampions[2].birthDate;
  let kamilaHistory =
    Tutberitse_2022_Olympics.olympicChampions[2].majorCompetitions[0];
  let kamilaPersonality =
    Tutberitse_2022_Olympics.olympicChampions[2].personalityTraits;
  let kamilaShort =
    Tutberitse_2022_Olympics.olympics.scores.kamilaValieva.shortProgram;
  let kamilaFree =
    Tutberitse_2022_Olympics.olympics.scores.kamilaValieva.freeProgram;

  let alexandraSkill = "";
  let annaSkill = "";
  let kamilaSkill = "";

  if (skill == "Athlete Age") {
    alexandraSkill = alexandraAge;
    annaSkill = annaAge;
    kamilaSkill = kamilaAge;
  } else if (skill == "Notable Competition") {
    alexandraSkill = alexandraHistory;
    console.log(alexandraHistory);
    annaSkill = annaHistory;
    kamilaSkill = kamilaHistory;
  } else if (skill == "Known For") {
    alexandraSkill = alexandraPersonality;
    annaSkill = annaPersonality;
    kamilaSkill = kamilaPersonality;
  } else if (skill == "Short Program") {
    alexandraSkill = alexandraShort;
    annaSkill = annaShort;
    kamilaSkill = kamilaShort;
  } else if (skill == "Free Program") {
    alexandraSkill = alexandraFree;
    annaSkill = annaFree;
    kamilaSkill = kamilaFree;
  }

  var alexandra_feature = document.getElementById("alexandra-feature");
  alexandra_feature.innerHTML = skill + ": " + alexandraSkill;
  var anna_feature = document.getElementById("anna-feature");
  anna_feature.innerHTML = skill + ": " + annaSkill;
  var kamilla_feature = document.getElementById("kamilla-feature");
  kamilla_feature.innerHTML = skill + ": " + kamilaSkill;

  nextButton.addEventListener("click", function () {
    window.location.href = `awards.html`;
  });
});
