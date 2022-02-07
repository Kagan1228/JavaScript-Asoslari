"use strict";

const arr = [1,2,3,4,5,6];


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
arr.forEach((item,index,arr)=>{
    console.log(item);
})

const colors = ['red','green','crimson'];

colors.forEach((item,index,arr)=>{
    console.log(item, index,arr);
})