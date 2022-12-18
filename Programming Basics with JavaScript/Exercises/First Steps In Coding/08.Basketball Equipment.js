function demo(input){
    let training = Number(input[0]);
let sneakers = training -(training*0.40);
let equipment = sneakers-(sneakers*0.20);
let ball = equipment * 0.25;
let accesories = ball * 0.20;
let allsum = training + sneakers + equipment + ball + accesories ;
console.log(allsum)
 
}