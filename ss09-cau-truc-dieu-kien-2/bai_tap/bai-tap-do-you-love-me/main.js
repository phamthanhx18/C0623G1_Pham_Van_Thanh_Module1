function dongy() {
    alert("<3")
}
function move() {
    let no = document.getElementById("no")
    let innerHeight = window.innerHeight;
    let innerWidth = window.innerWidth;
    no.style.position = "relative";
    no.style.left = Math.floor(Math.random()*innerWidth) + "px";
    no.style.top = Math.floor(Math.random()*innerHeight) + "px";
}
document.getElementById("bg").style.width = window.innerWidth + "px";
document.getElementById("bg").style.height = window.innerHeight + "px";