//OOP nima:Obyektga yo'naltirilgan dasturlash

//dasturlashni obyektlar yordamida tashkil qilish usuli

"use strict";

const cars = {
    color:"white",
    isBuy:false,
    isArmor:function() {
        console.log('Armor');
    }
}
const bmw = {
    color:'red'
}

const nexia = Object.create(bmw);
console.log(nexia);
// bmw.__proto__ = cars
// console.log(bmw.isBuy);
Object.setPrototypeOf(bmw,cars)
bmw.isArmor()
console.log(bmw,cars);