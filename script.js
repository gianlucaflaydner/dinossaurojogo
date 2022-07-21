let playerScore = 0;
let result = 00000;
let cont = 0;
let score = document.getElementById("score");

const button = document.querySelector('button')
button.addEventListener('click', function(){
  button.style.setProperty('display', 'none')

 
  const mario = document.getElementById("mario");
  const goomba = document.getElementById("goomba");
  const road = document.getElementById("road");
  const clouds = document.getElementById("clouds");
  clouds.style.setProperty('animation', 'leftmovement 5s infinite linear' )
  goomba.style.setProperty('animation','leftmovement 2s infinite linear' )

  


  function jump() {
    if (mario.classList != "jump") {
    mario.classList.add("jump");
    setTimeout(function () {
      mario.classList.remove("jump");
    },300);
  }
  }

    let isAlive = setInterval(function () {
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
    
    let goombaLeft = parseInt(
      window.getComputedStyle(goomba).getPropertyValue("left")
    );
    road.style.setProperty('--position', -cont + "%");
    cont++;
    if 
    (goombaLeft < 50 && goombaLeft > 0 && marioTop >= 130) {
      
      window.alert(`Você perdeu... Sua pontuação foi de ${result} pontos!!`);
      location.reload()
      
    }
  }, 10);

 

  
  document.addEventListener("keypress", function (){
    jump();
  })
 

  setInterval(() => {
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
  }, 200)

  const audio = document.querySelector('audio')
  audio.play()
}) 












  
