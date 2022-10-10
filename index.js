let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");
let homeCount = 0;
let guestCount = 0;

function homeAdd1() {
  homeCount += 1;
  homeScore.textContent = homeCount;
}
function homeAdd2() {
  homeCount += 2;
  homeScore.textContent = homeCount;
}
function homeAdd3() {
  homeCount += 3;
  homeScore.textContent = homeCount;
}
