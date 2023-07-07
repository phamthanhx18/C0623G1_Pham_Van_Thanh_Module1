document.addEventListener('keydown', function(event) {
    if (event.keyCode === 40) {
        xuongDuoi();
    } else if (event.keyCode === 38) {
        lenTren();
    } else if (event.keyCode === 39) {
        sangPhai();
    } else if (event.keyCode === 37) {
        sangTrai();
    }
})
function lenTren() {
    document.getElementById("img").style.top = parseInt(document.getElementById("img").style.top) - 10 + 'px';
}
function xuongDuoi() {
    document.getElementById("img").style.top = parseInt(document.getElementById("img").style.top) + 10 + 'px';
}
function sangTrai() {
    document.getElementById("img").style.left = parseInt(document.getElementById("img").style.left) - 10 + 'px';
}
function sangPhai() {
    document.getElementById("img").style.left = parseInt(document.getElementById("img").style.left) + 10 + 'px';
}