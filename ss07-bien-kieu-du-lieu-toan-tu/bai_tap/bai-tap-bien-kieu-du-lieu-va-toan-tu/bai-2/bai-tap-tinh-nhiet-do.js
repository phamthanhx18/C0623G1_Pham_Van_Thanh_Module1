function convertf() {
    let c = parseInt(document.getElementById("nhiet-do-c").value);
    let f = c * 1.8 + 32;
    document.getElementById("nhiet-do-f").value = f;
}