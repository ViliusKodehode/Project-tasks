const maincontainer = document.createElement("div");
maincontainer.className = "maincontainer";
document.body.appendChild(maincontainer);

const box = document.createElement("div");
box.className = "box";
maincontainer.appendChild(box);

const evilbox = document.createElement("div")
evilbox.className = "evilbox";
maincontainer.appendChild(evilbox);

///////////////////////////////////////////////////////////////////////////////////

const keypress = [];

window.addEventListener("keydown", function (e) {
  keypress[e.key] = true;
});

window.addEventListener("keyup", function (e) {
  keypress[e.key] = false;
});

function boxmovement() {
  let moveupdown = parseInt(box.style.top) || 0;
  let moverightleft = parseInt(box.style.left) || 0;

  let boxspeed = 5;

  if (keypress["w"] === true) {
    moveupdown -= boxspeed;
  }
  if (keypress["s"] === true) {
    moveupdown += boxspeed;
  }
  if (keypress["d"] === true) {
    moverightleft += boxspeed;
  }
  if (keypress["a"] === true) {
    moverightleft -= boxspeed;
  }

  const containerWidth = maincontainer.clientWidth;
  const containerHeight = maincontainer.clientHeight;
  const boxWidth = box.clientWidth;
  const boxHeight = box.clientHeight;

  if (moveupdown < 0) {
    moveupdown = 0;
  }
  if (moveupdown > containerHeight - boxHeight) {
    moveupdown = containerHeight - boxHeight;
  }
  if (moverightleft < 0) {
    moverightleft = 0;
  }
  if (moverightleft > containerWidth - boxWidth) {
    moverightleft = containerWidth - boxWidth;
  }
  box.style.top = moveupdown + "px";
  box.style.left = moverightleft + "px";
}

function gameloop() {
  boxmovement();
  requestAnimationFrame(gameloop);
}
gameloop();