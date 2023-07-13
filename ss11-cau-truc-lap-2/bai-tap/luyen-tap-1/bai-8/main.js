function start() {
    let numberStart = +prompt("Bạn hãy nhập một số bất kì")
    let result = Math.floor(Math.random() * ((numberStart + 10) - (numberStart + 20))) + (numberStart + 10);
    let count = 0;
    do {
        let duDoan = +prompt("Dự đoán số may mắn là bao nhiêu?")
        if (result === duDoan) {
            document.write("Ban đã dự đoán đúng số may mắn là " + result);
            break;
        } else {
            count = count+1;
            if (count<=3) {
                alert("Bạn đã đoán sai, vui lòng Đoán lại");
            } else {
                alert("Bạn đã vượt quá số lần đóa quy định, số mà hệ thống đưa ra là "+result);
                break;
            }
        }
    } while (true)
}