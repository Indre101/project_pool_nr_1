// JavaScript Document

const blood = document.getElementById("blood");
const fly = document.getElementById("fly");

fly.addEventListener("click", deadfly)

function deadfly() {
    fly.style.backgroundImage = "url('./media/graphics/dead.png')"
}