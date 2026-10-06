let againBtn = document.querySelector(".again");
let guessnumber = document.querySelector(".number");
let guessvalue = document.querySelector(".guess");
let chechBtn = document.querySelector(".check");
let msg = document.querySelector(".message");
let gamescore = document.querySelector(".score");
let highestscore = document.querySelector(".highscore");
let score = 20;
let randomnumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomnumber);

// chick event for check
chechBtn.addEventListener("click", () => {
  let val = Number(guessvalue.value);
  console.log(val);
  
  if (!val) {
    msg.textContent = "enter a value ";
  } else if (val == randomnumber) {
    document.body.style.backgroundColor = "green";
    guessnumber.textContent = randomnumber;
    msg.textContent = "correct number";
    if (score > highestscore.textContent) {
      highestscore.textContent = score;
    }
  } else if (val < randomnumber) {
    msg.textContent = "too low ";
    score--;
    gamescore.textContent = score;
  } else if (val > randomnumber) {
    msg.textContent = "too high ";
    score--;
    gamescore.textContent = score;
  }
});
// funtionality for again button
againBtn.addEventListener(" click ",()=>{
    document.body.style.backgroundColor = "#222";
    msg.textContent = "start guessing ";
    guessnumber.textContent = "?";
    score = 20;
    gamescore.textContent = score;
    randomnumber = Math.trunc(Math.random() * 20) + 1;
     console.log(randomnumber);
})
// 1. change background colour to black
// 2. change message to start guessing
