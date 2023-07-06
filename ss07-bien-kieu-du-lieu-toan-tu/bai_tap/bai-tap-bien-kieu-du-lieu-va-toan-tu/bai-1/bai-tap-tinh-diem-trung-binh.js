function average(){
    let pointHoa = parseInt(document.getElementById("hoa-hoc").value);
    let pointLy = parseInt(document.getElementById("vat-ly").value);
    let pointSinh = parseInt(document.getElementById("sinh-hoc").value);
    let d = pointHoa + pointLy + pointSinh;
    document.getElementById("ket-qua").innerHTML = "Tổng điểm của bạn là: " + d +"<br>Điểm trung bình của bạn là: " + d/3;
}
