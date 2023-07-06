function tinhChuVi() {
    let banKinh = parseInt(document.getElementById("ban-kinh").value);
    let chuVi = banKinh * 2 * 3.14;
    document.getElementById("result").innerHTML = "Chu vi của hình tròn có bán kính " + banKinh + " cm là: " + chuVi + " cm&sup2";
    document.getElementById("over").style.width = banKinh *2+"px" ;
    document.getElementById("over").style.height = banKinh *2+"px" ;
}
