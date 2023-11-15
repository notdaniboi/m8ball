// Count variables

// Button event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let randNum = Math.random();

  if (randNum < 0.2) {
    outputEl.innerHTML = "Concentrate and ask again.";
  } else if (randNum < 0.4) {
    outputEl.innerHTML = "Outlook not so good.";
  } else if (randNum < 0.6) {
    outputEl.innerHTML = "Don't count on it.";
  } else if (randNum < 0.8) {
    outputEl.innerHTML = "Without a Doubt.";
  } else {
    outputEl.innerHTML = "As I see it, yes.";
  }
}
