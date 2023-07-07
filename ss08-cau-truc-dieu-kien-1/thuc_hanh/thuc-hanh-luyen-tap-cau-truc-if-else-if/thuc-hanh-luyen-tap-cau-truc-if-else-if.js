let user = prompt("Tên đăng nhập của bạn là gì ?");
if (user == "Admin") {
    let password = prompt("Mật khẩu cua admin là gì ?");
    if (password == "TheMaster") {
        alert("Wellcome");
    } else if (password == null) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (user == null){
    alert("canceld");
} else {
    alert("I don’t know you");
}