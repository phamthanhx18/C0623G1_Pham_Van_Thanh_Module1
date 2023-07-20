let listProduct = ["Sony","SamSung","Iphone","Xiaomi"];
function loadProduct(){
    let tableProduct ="<table class=\"table\">\n";
    let thead = "    <tr>\n" +
        "      <th scope=\"col\">Tên sản phẩm</th>\n" +
        "      <th scope=\"col\">Sửa tên</th>\n" +
        "      <th scope=\"col\">Xóa</th>\n" +
        "    </tr>"
    tableProduct = tableProduct + thead
    let tr = "";
    for (let i = 0; i < listProduct.length; i++) {
        tr = tr+"<tr><td>"+listProduct[i]+"</td>"+"</tr>";
    }
    tableProduct = tableProduct + tr + "</table>";
    document.getElementById("result").innerHTML = tableProduct;
}
function addProduct(){
    let addNewProduct = document.getElementById("addnew").value;
    listProduct.push(addNewProduct);
    document.getElementById("ds").innerHTML = loadProduct(listProduct);
}
function renameProduct(){

}
function deleteProduct(){

}