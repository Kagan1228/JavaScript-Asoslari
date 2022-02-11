"use strict";

//Havola orqali yoki o'tkazish orqali o'tkazish,Spread operator

// let a = 8,
// b= a;

// console.log(b+5);
// console.log(a);



// const mers = bmw;
// mers.color = 'white';

function copyObj(obj){
    let objCopy = {}
    for(let key in obj){
        objCopy[key] = obj[key];
    }
    return objCopy;
}

const spark = {
    color:'green',
    isBuy:false,
    c:{
        a:100,
        b:200,
    }
}

const audi = copyObj(spark)
spark.c.a = 300
audi.color = "coral"

console.log(spark);
console.log(audi);


//2-yoli

const nexiaR2 = {
    color:"red",
    isBuy:true
}

const extra = {
    shum:100
}

console.log(Object.assign(nexiaR2,extra));

const tiko = Object.assign({},nexiaR2);
tiko.isBuy= false
console.log(tiko);
console.log(nexiaR2);

const arr = [1,2,3,4];
const NewArr = arr.slice();
NewArr[1] = 22;
console.log(NewArr);
console.log(arr);

const cars = ['bmw','merc','nexiaR3'],
plane = ['german','turkish',"O`zbek"],
technology = [...cars,...plane];
console.log(technology);

function number(a, b, ...c){
    console.log(a,b,c);
}
number(1,2,3,4,5,6)

function func(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const numbers = [1,2,3];
func(...numbers);;

function spreadOp(a,b,c,...d){
    console.log(a,b,c,d);
}
spreadOp(1,2,3,4,5,6,7,8)