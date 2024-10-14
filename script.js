const homeScore = document.getElementById("homeScore");
const awayScore = document.getElementById("awayScore");
const btnOne = document.getElementById("btn1");
const btnTwo = document.getElementById("btn2");
const btnThree = document.getElementById("btn3");
const btnFourth = document.getElementById("btn4");
const btnFifth = document.getElementById("btn5");
const btnSix = document.getElementById("btn6");

let homeCount = 0;
let awayCount = 0;

btnOne.addEventListener("click", () => {
  homeCount += 1;
  homeScore.textContent = homeCount;
});

btnTwo.addEventListener("click", () => {
  homeCount += 2;
  homeScore.textContent = homeCount;
});

btnThree.addEventListener("click", () => {
  homeCount += 3;
  homeScore.textContent = homeCount;
});

btnFourth.addEventListener("click", () => {
  awayCount += 1;
  awayScore.textContent = awayCount;
});

btnFifth.addEventListener("click", () => {
  awayCount += 2;
  awayScore.textContent = awayCount;
});

btnSix.addEventListener("click", () => {
  awayCount += 3;
  awayScore.textContent = awayCount;
});
