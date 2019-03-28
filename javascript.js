const blood = document.getElementById("blood");
const fly = document.getElementById("fly");
const audio = document.getElementById("buzzing");

let paused = true;
let move;

fly.addEventListener("click", hit)

function deadfly() {


  fly.style.backgroundImage = "url('./media/graphics/dead.png')"

}


function moveFly() {
  fly.style.backgroundImage = "";
  fly.style.left = (Math.random() * 90) + "vw";
  fly.style.top = (Math.random() * 90) + "vh";
  fly.style.transform = "rotate(" + (Math.random() * 360) + "deg)";


}


function hit() {
  if (paused) {
    moveFly();
    audio.play();
    move = setInterval(moveFly, 1000);
    paused = false;
  } else {
    audio.pause();
    clearInterval(move);
    paused = true;
    deadfly();
  }
}