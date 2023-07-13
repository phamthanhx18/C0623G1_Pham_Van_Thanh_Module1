function start() {
    let numberBe = +prompt("Bạn hãy nhập số bé nhất");
    let numberLon = +prompt("Bạn hãy nhập số lớn nhất");
    let result = Math.floor((Math.random() * numberLon) + numberBe);
    let count = 0;
    console.log(result)
    do {
        let duDoan = +prompt("Dự đoán số may mắn là bao nhiêu?")
        if (result === duDoan) {
            document.write("Ban đã dự đoán đúng số may mắn là " + result);
            break;
        } else {
            count = count+1;
            if (count<3) {
                if (duDoan<result) {
                    alert("Bạn đã đoán sai, số may mắn lớn hơn số bạn dự đoán, vui lòng thử lại");
                } else {
                    alert("Bạn đã đoán sai, số may mắn bé hơn số bạn dự đoán, vui lòng thử lại");
                }
            } else {
                alert("Bạn đã vượt quá số lần đóa quy định, số mà hệ thống đưa ra là "+result);
                break;
            }
        }
    } while (true)
}