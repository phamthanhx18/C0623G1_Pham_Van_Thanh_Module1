function convertMoney() {
    let inputCurrency = parseInt(document.getElementById("input-currency").value);
    let fromMoney = document.getElementById("currency-one").value;
    let toMoney = document.getElementById("currency-two").value;

    if (fromMoney == "usd" && toMoney == "vnd") {
        document.getElementById("result").innerHTML = "Kết quả: " + inputCurrency * 23000 + " VND";
    } else {
        if (fromMoney == "vnd" && toMoney == "usd") {
            document.getElementById("result").innerHTML = "Kết quả: " + inputCurrency / 23000 + " USD";
        }
    }
}