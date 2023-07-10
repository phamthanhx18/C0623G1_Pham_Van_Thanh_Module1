function dongy() {
    alert("<3")
}
function move() {
    let no = document.getElementById("no")
    let innerHeight = window.innerHeight;
    let innerWidth = window.innerWidth;
    no.style.position = "relative";
    no.style.left = Math.floor(Math.random()*500) + "px";
    no.style.top = Math.floor(Math.random()*500) + "px";
}
