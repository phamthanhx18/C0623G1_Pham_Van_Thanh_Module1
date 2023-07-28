class HocVien {
    constructor(idhv, name, classhv, email, birthday) {
        this.idhv = idhv;
        this.name = name;
        this.classhv = classhv;
        this.email = email;
        this.birthday = birthday;
    }
}

let hocVien1 = new HocVien("HV-0001", "Nguyễn Văn A", "C1022G1", "nguyenvana@gmail.com", "08/09/01");
let hocVien2 = new HocVien("HV-0002", "Nguyễn Văn B", "C1022G2", "nguyenvanb@gmail.com", "10/05/02");
let hocVien3 = new HocVien("HV-0003", "Nguyễn Văn C", "C1022G3", "nguyenvanc@gmail.com", "12/11/03");

let hocVienList = [hocVien1, hocVien2, hocVien3];

function displayHocVien(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += "<tr>" +
            "<td>" + arr[i].idhv + "</td>" +
            "<td>" + arr[i].name + "</td>" +
            "<td>" + arr[i].classhv + "</td>" +
            "<td>" + arr[i].email + "</td>" +
            "<td>" + arr[i].birthday + "</td>" +
            "</tr>";
    }
    document.getElementById("result").innerHTML = result;
}

displayHocVien(hocVienList);

function addHocVien() {
    let newId = prompt("Nhập mã học viên:");
    let newName = prompt("Nhập tên học viên:");
    let newClass = prompt("Nhập lớp:");
    let newEmail = prompt("Nhập email:");
    let newBirthday = prompt("Nhập ngày sinh:");
    let newStudent = new HocVien(newId, newName, newClass, newEmail, newBirthday)
    hocVienList.push(newStudent);
    displayHocVien(hocVienList);
}

function editHocVien() {
    let idHocVien = prompt("Nhập mã học viên cần sửa thông tin:");
    let count = 0;
    for (let i = 0; i < hocVienList.length; i++) {
        if (idHocVien === hocVienList[i].idhv) {
            hocVienList[i].name = prompt("Nhập lại tên học viên:");
            hocVienList[i].classhv = prompt("Nhập lại lớp cho học viên:");
            hocVienList[i].email = prompt("Nhập lại email cho học viên:");
            hocVienList[i].birthday = prompt("Nhập lại ngày sinh cho viên:");
            count++;
        }
    }
    if (count === 0) {
        alert("Mã học viên không tồn tại");
    }
    displayHocVien(hocVienList);
}

function deleteHocVien() {
    let idHocVien = prompt("Nhập mã học viên cần xóa thông tin:");
    let count = 0;
    for (let i = 0; i < hocVienList.length; i++) {
        if (idHocVien === hocVienList[i].idhv) {
            hocVienList.splice(i, 1);
            count++;
        }
    }
    if (count === 0) {
        alert("Mã học viên không tồn tại");
    }
    displayHocVien(hocVienList);
}