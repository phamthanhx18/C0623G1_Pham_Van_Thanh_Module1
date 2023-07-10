let input = document.getElementById("input");
function inputValue(value) {
    input.value += value;
}
function xoa() {
    input.value = "";
}
function tinhToan() {
    input.value = eval(input.value);
}