function tinhDienTich() {
    let banKinh = parseInt(document.getElementById("ban-kinh").value);
    let dienTich = banKinh * banKinh * 3.14;
    document.getElementById("result").innerHTML = "Diện tích của hình tròn có bán kính " + banKinh + " cm là: " + dienTich + " cm&sup2";
    document.getElementById("over").style.width = banKinh *2+"px" ;
    document.getElementById("over").style.height = banKinh *2+"px" ;
}
