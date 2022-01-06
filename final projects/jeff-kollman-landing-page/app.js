function yourOpinion() {
  let name = prompt("What is your name?");

  let opinionMusic = prompt("Do you like Jeff Kollman?");

  opinionMusic = opinionMusic.toLowerCase().trim();

  let heading = document.querySelector("h1");

  if (opinionMusic === "no") {
    heading.innerHTML =
      "<br />Too bad for you, " +
      name +
      "." +
      " Jeff Kollman is a cool guitarist!";
  }

  if (opinionMusic === "yes") {
    heading.innerHTML =
      "<br />Good for you, " +
      name +
      "." +
      " Jeff Kollman is a cool guitarist!";
  }
}

let changeButton = document.querySelector("button");

changeButton.addEventListener("click", yourOpinion);