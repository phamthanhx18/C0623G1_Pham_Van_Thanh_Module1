let imageLeft = document.getElementById("image");
let relative = document.getElementById("image").style.position = "relative";
let left = document.getElementById("image").style.left = '0px';

function moveRight() {
    imageLeft.style.left = parseInt(imageLeft.style.left) + 10 + 'px';
}