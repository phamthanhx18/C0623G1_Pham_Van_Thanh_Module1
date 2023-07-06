let numbers = document.getElementsByClassName("btn");
let result = document.getElementById("result");
for (let number of numbers) {
    number.addEventListener('click', function() {
        result.innerHTML += this.value
    });
}

function clearOne() {
    let a = result.innerHTML;
    result.innerHTML = a.slice(0, -1);
}

function tinhToan() {
    let expression = result.innerHTML;
    let ketQua = eval(expression); 
    result.innerHTML = ketQua; 
}