const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");


function jump() {
  if (dino.classList != "jump") {
  dino.classList.add("jump");
  setTimeout(function () {
    dino.classList.remove("jump");
  },300);
}
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 130) {
    
    window.alert("Você perdeu!");
    location.reload()
  }
}, 10);

document.addEventListener("keypress", function (event){
  jump();
})

let score = document.getElementById("score");

let playerScore = 0;
let result = 00000;

let scoreCounter = ()=> { 
  playerScore++;
  if (playerScore<10)
    result = `0000${playerScore}`
  else if (playerScore<100)
    result = `000${playerScore}`
  else if (playerScore<1000)
    result = `00${playerScore}`
  else if (playerScore<10000)
    result = `0${playerScore}`
  else
    result = playerScore
  score.innerHTML = `SCORE: <b>${result}</b>`;
}

let interval = setInterval(scoreCounter, 50);





  
