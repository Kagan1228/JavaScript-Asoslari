"use strict";

const arr = [1,2,3,4,5,6];
//boshidan qo'shadi
// arr.unshift(0);
//boshidan olib tashlaydi
// arr.shift()
console.log(arr);


//---------------masivga qo'shish va olib tashlash-----------------


//oxiridan olib tashlaydi
// arr.pop();
//oxiriga nimadir qo'shadi
// arr.push(5);


// console.log(arr);

// //---------------------- 
// for (let i =0;i < arr.length;i++){
//     console.log(arr[i]);
// }

// for(let key of arr){
//     console.log(arr);
// }
// arr.forEach((item,index,arr)=>{
//     console.log(item);
// })

// const colors = ['red','green','crimson'];

// colors.forEach((item,index,arr)=>{
//     console.log(item, index,arr);
// });

// ========================================================
const question = prompt('','');
//massiv qiladi
const answers = question.split(', ');
console.log(answers);
//bu string fomatga otkazadi
console.log(answers.join('; '))

const number = [2,10,17,24,8];
//faqatgina boshdagi qiymatdan znachenya qiladi 1dan boshlaydi
number.sort(sorrt);
console.log(number);

function sorrt(a,b){
    return a -b
}