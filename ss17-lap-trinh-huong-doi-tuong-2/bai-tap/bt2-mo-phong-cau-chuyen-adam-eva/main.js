class Aplle {
    constructor(weight) {
        this.weight = weight
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        return this.weight= weight;
    }
}
    let apple = new Aplle(10);
class Human {
    constructor(name,gender,weight,) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    getGender(){
        if (this.gender){
            return "Male";
        } else {
            return "Female";
        }
    }
    humanSpeak(message){
        return console.log(this.name+" : "+ message);
    }
    eatApple(weightApple) {
        if (weightApple>0){
            this.weight++;
            console.log("Weight của "+this.name+" vừa thay đổi thành " +this.weight);
            weightApple--;
            console.log("Weight của của quả táo vừa thay đổi thành " +weightApple);
        } else {
            console.log("Đã hết khối lượng táo để ăn");
        }
    }
    checkApple(apple){
        return apple.weight;
    }
    getInfoHuman(){
        console.log("Tên đối tượng: "+this.name+";"+
            "Giới tính: "+this.getGender()+";"+
            "Cân nặng: "+this.weight)
    }
}
let adam = new Human("Adam",true,50);
let eva = new Human("Eva",false,50);

function sayAdam()  {
    let message = prompt("Nhập lời muốn nói")
    adam.humanSpeak(message);
}
function sayEva()  {
    let message = prompt("Nhập lời muốn nói")
    eva.humanSpeak(message);
}
function eatAdam(){
    let weightApple = apple.getWeight();
    adam.eatApple(weightApple);
    apple.setWeight(weightApple-1);
}
function eatEva(){
    let weightApple = apple.getWeight();
    eva.eatApple(weightApple);
    apple.setWeight(weightApple-1);
}
function getInfoAdam(){
    adam.getInfoHuman();
}
function getInfoEva(){
    eva.getInfoHuman();
}
function getWeightApple(){
    console.log("Khối lượng táo còn lại "+apple.getWeight());
}