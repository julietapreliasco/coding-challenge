var pacman;
var ghost;
var cookie;
var step = 5;
var initialPosition = {
  x: 10,
  y: 10,
  width: 60,
  height: 60,
  top: 10,
  right: 70,
  bottom: 70,
  left: 10,
};

window.addEventListener("DOMContentLoaded", function () {
  pacman = document.getElementById("pacman");
  ghost = document.getElementById("ghost");
  cookie = document.getElementById("cookie");
});

document.addEventListener("keydown", function (event) {
  var pacmanPosition = pacman.getBoundingClientRect();
  var cookiePosition = cookie.getBoundingClientRect();
  var ghostPosition = ghost.getBoundingClientRect();

  switch (event.keyCode) {
    case 37:
      pacman.style.left = pacmanPosition.left - step + "px";
      break;
    case 38:
      pacman.style.top = pacmanPosition.top - step + "px";
      break;
    case 39:
      pacman.style.left = pacmanPosition.left + step + "px";
      break;
    case 40:
      pacman.style.top = pacmanPosition.top + step + "px";
      break;
  }

  if (isColliding(pacmanPosition, cookiePosition)) {
    alert("¡Has ganado!");
    pacman.style = initialPosition;
  }

  if (isColliding(pacmanPosition, ghostPosition)) {
    alert("¡Has perdido!");
    pacman.style = initialPosition;
  }
});

function isColliding(characterOne, characterTwo) {
  return (
    characterOne.left < characterTwo.right &&
    characterOne.right > characterTwo.left &&
    characterOne.top < characterTwo.bottom &&
    characterOne.bottom > characterTwo.top
  );
}
