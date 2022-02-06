"use strict";

//Function declaratsion
let number = 8;

function getText(text){
    console.log(text);
    number = 10;
}
getText('Hello');
console.log(number);

function calcTwoNumber(a ,b){
    return a - b
}

alert(calcTwoNumber(+prompt(),+prompt()));

function returnNumber(){
    let number = 8;
    return number;
}

const num = returnNumber();
console.log(num);

//function expresion
const funcEx = function(){
console.log(10);
}
funcEx();


//array func
const arrayFunction = (a,c)=>c+a;
const plus = arrayFunction(10,19);
console.log(plus);