document.addEventListener("DOMContentLoaded", function () {
  const awardImage = document.getElementById("medal");
  const congratsWords = document.getElementById("congrats");

  var athlete = localStorage.getItem("athleteSelection");
  var skill = localStorage.getItem("skillSelection");

  if (skill == "Athlete Age") {
    if (athlete == "Alexandra" || athlete == "Anna") {
      awardImage.src = "IMAGES/lost.png";
      congratsWords.innerHTML = "You Lost";
    } else if (athlete == "Kamilla") {
      awardImage.src = "IMAGES/gold.png";
      congratsWords.innerHTML = "You Won";
    }
  } else if (skill == "Notable Competition") {
    if (athlete == "Alexandra" || athlete == "Kamilla") {
      awardImage.src = "IMAGES/lost.png";
      congratsWords.innerHTML = "You Lost";
    } else if (athlete == "Anna") {
      awardImage.src = "IMAGES/gold.png";
      congratsWords.innerHTML = "You Won";
    }
  } else if (skill == "Known For") {
    if (athlete == "Alexandra") {
      awardImage.src = "IMAGES/gold.png";
      congratsWords.innerHTML = "You Won";
    } else if (athlete == "Anna" || athlete == "Kamilla") {
      awardImage.src = "IMAGES/lost.png";
    }
  } else if (skill == "Short Program") {
    if (athlete == "Alexandra" || athlete == "Anna") {
      awardImage.src = "IMAGES/lost.png";
      congratsWords.innerHTML = "You Lost";
    } else if (athlete == "Kamilla") {
      awardImage.src = "IMAGES/gold.png";
      congratsWords.innerHTML = "You Won";
    }
  } else if (skill == "Free Program") {
    if (athlete == "Alexandra") {
      awardImage.src = "IMAGES/gold.png";
      congratsWords.innerHTML = "You Won";
    } else if (athlete == "Anna" || athlete == "Kamilla") {
      awardImage.src = "IMAGES/lost.png";
      congratsWords.innerHTML = "You Lost";
    }
  }

  const nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", function () {
    window.location.href = `index.html`;
  });
});
