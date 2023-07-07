function kiemTraNamNhuan() {
    let year = parseInt(document.getElementById("year").value);
    let result = document.getElementById("result")
    if (year % 4 == 0) {
        if ( year % 100 == 0 ) {
            if (year % 400 == 0) {
                result.innerHTML = year + " là năm nhuận"
            } else {
                result.innerHTML = year + " không phải là năm nhuận"
            }

        } else {
            result.innerHTML = year + " là năm nhuận"
        }

    } else {
        result.innerHTML = year + " không phải là năm nhuận"
    }
}