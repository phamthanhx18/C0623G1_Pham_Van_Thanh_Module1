let img1 = [
    "images-1/img-1.png",
    "images-2/img-1.png",
    "images-3/img-1.png"
    ]
let img2 = [
    "images-1/img-2.png",
    "images-2/img-2.png",
    "images-3/img-2.png"
]
let img3 = [
    "images-1/img-3.png",
    "images-2/img-3.png",
    "images-3/img-3.png"
]
let img4 = [
    "images-1/img-4.png",
    "images-2/img-4.png",
    "images-3/img-4.png"
]
let img5 = [
    "images-1/img-5.png",
    "images-2/img-5.png",
    "images-3/img-5.png"
]
function imgFirst() {
    let imgFirst = document.getElementById("img1").src = img1[Math.floor(Math.random()*img1.length)];
}
imgFirst()
function imgTwo() {
    let imgFirst = document.getElementById("img2").src = img2[Math.floor(Math.random()*img2.length)];
}
imgTwo()
function imgThree() {
    let imgFirst = document.getElementById("img3").src = img3[Math.floor(Math.random()*img3.length)];
}
imgThree()
function imgFour() {
    let imgFirst = document.getElementById("img4").src = img4[Math.floor(Math.random()*img4.length)];
}
imgFour()
function imgFive() {
    let imgFirst = document.getElementById("img5").src = img5[Math.floor(Math.random()*img5.length)];
}
imgFive()
