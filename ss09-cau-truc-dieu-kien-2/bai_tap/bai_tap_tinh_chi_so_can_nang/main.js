function tinhBmi() {
    let weight = parseInt(document.getElementById("weight").value);
    let height = parseInt(document.getElementById("height").value);
    height = height* 0.01;
    let bmi = parseFloat(weight / ( height ^ 2 ));
    document.getElementById("result").innerHTML = "Chỉ số BMI của bạn là: "+bmi;
    if (bmi < 18.5) {
        document.getElementById("phan-loai").innerHTML = "Xếp hạng Underweight"
    } else if (bmi < 25) {
        document.getElementById("phan-loai").innerHTML = "Xếp hạng Nomal"
    } else if (bmi < 30) {
        document.getElementById("phan-loai").innerHTML = "Xếp hạng Overweight"
    } else {
        document.getElementById("phan-loai").innerHTML = "Xếp hạng Obese"
    }
}

