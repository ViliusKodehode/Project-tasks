const startgame = document.createElement('div');
startgame.className = "startgame";
document.body.appendChild(startgame);

const gamearea = document.createElement("div");
gamearea.className = "gamearea";
document.body.appendChild(gamearea);

const player1area = document.createElement("div");
player1area.className = "playerarea";
gamearea.appendChild(player1area);

const player2area = document.createElement("div");
player2area.className = "playerarea2";
gamearea.appendChild(player2area);

const player1 = document.createElement("div");
player1.className = "player1";
player1area.appendChild(player1);

const player2 = document.createElement("div");
player2.className = "player2";
player2area.appendChild(player2);

const ball = document.createElement("div");
ball.className = "ball";
gamearea.appendChild(ball);

const scoreboard = document.createElement('div');
scoreboard.className = "scoreboard";
document.body.appendChild(scoreboard);

const scoreplayer1 = document.createElement('div');
scoreplayer1.className = "score1";
scoreplayer1.textContent = 0;
scoreboard.appendChild(scoreplayer1);

const scoreplayer2 = document.createElement('div');
scoreplayer2.className = "score2";
scoreplayer2.textContent = 0;
scoreboard.appendChild(scoreplayer2);

let player1score = 0;
let player2score = 0;
let player1positiontop = gamearea.offsetHeight / 2 - 50;
let player2positiontop = gamearea.offsetHeight / 2 - 50;

// let player1rect = player1.getBoundingClientRect();
// let player2rect = player2.getBoundingClientRect();
// const gamearearect = gamearea.getBoundingClientRect();
// const ballrect = ball.getBoundingClientRect();
//console.log(gamearearect, player1rect, player2rect, ballrect);

const startButton = document.createElement("button");
startButton.textContent = "Begin Ping-Pong game";
startButton.className = "start-button";
startgame.appendChild(startButton);


const keypress = [];
window.addEventListener("keydown", function (e) {
  keypress[e.key] = true;
});

addEventListener("keyup", function (e) {
  keypress[e.key] = false;
});

let ballX, ballY, speedX, speedY;
const move = 7;
// let ballX = gamearea.offsetWidth / 2;
// let ballY = gamearea.offsetHeight / 2;
// let speedX = 3;
// let speedY = 3;

function resetplayerpositions(){
  player1positiontop = gamearea.offsetHeight / 2 - player1.offsetHeight / 2;
  player2positiontop = gamearea.offsetHeight / 2 - player2.offsetHeight / 2;
  player1.style.top = `${player1positiontop}px`;
  player2.style.top = `${player2positiontop}px`;
}

function resetball() {
  ballX = gamearea.offsetWidth / 2 - ball.offsetWidth / 2;
  ballY = gamearea.offsetHeight / 2 - ball.offsetHeight / 2;
  speedX = 1;
  speedY = 2;
  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;
  
  // resetplayerpositions();
}

let player1positionbottom, player2positionbottom;

function moveplayers() {
const gameareatop = 0;
const gameareabottom = gamearea.offsetHeight

  if (keypress["w"] === true) {
    player1positiontop -= move;
    if( player1positiontop <= gameareatop) {
      player1positiontop = gameareatop + 80;
    }
    player1.style.top = player1positiontop + "px";
  } 

  if (keypress["s"] === true) {
    player1positiontop += move;
    if (player1positiontop + player1.offsetHeight > gameareabottom) {
      player1positiontop = gameareabottom - player1.offsetHeight + 30;
    }
    player1.style.top = player1positiontop + "px";
  }

  if (keypress["ArrowUp"] === true) {
    player2positiontop -= move;
    if (player2positiontop <= gameareatop) {
       player2positiontop = gameareatop + 80;
    }
    player2.style.top = player2positiontop + "px";
  }

  if (keypress["ArrowDown"] === true) {
    player2positiontop += move;
    if (player2positiontop + player2.offsetHeight > gameareabottom) {
      player2positiontop = gameareabottom - player2.offsetHeight + 30;
    }
    player2.style.top = player2positiontop + "px";
  }
}

function moveball() {
    ballX += speedX;
    ballY += speedY;
  
    if (ballY <= 0)  {
      speedY *= -1; 
      ballY = 0;
    } else if (ballY + ball.offsetHeight >= gamearea.offsetHeight){
      speedY *= -1;
      ballY = gamearea.offsetHeight - ball.offsetHeight;
    }

    const ballLeft = ballX;
    const ballRight = ballX + ball.offsetWidth;
    const ballTop = ballY;
    const ballBottom = ballY + ball.offsetHeight;
  
    if (
      ballLeft <= player1.offsetWidth &&
      ballBottom >= player1positiontop &&
      ballTop <= player1positiontop + player1.offsetHeight
    ) {
      speedX *= -1;
      ballX = player1.offsetWidth; 
    }
  
    if (
      ballRight >= gamearea.offsetWidth - player2.offsetWidth &&
      ballBottom >= player2positiontop &&
      ballTop <= player2positiontop + player2.offsetHeight
    ) {
      speedX *= -1;
      ballX = gamearea.offsetWidth - player2.offsetWidth - ball.offsetWidth; 
    }
  
    if (ballX <= 0) {
      player2score++;
      scoreplayer2.textContent = player2score;
      resetball("player2");
      return; 
    }
  
    if (ballX + ball.offsetWidth >= gamearea.offsetWidth) {
      player1score++;
      scoreplayer1.textContent = player1score;
      resetball("player1");
      return; 
    }
  
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
}
  

function gameLoop() {
  moveplayers();
  moveball();
  requestAnimationFrame(gameLoop);
}

startButton.addEventListener("click", () =>{
  startButton.style.display = "none";
  resetplayerpositions();
  resetball("player2");
  gameLoop();
});
