"use strict";
//shartli operatorlar

//if else

const age = 25;
//////////////////////////////////////////////////////
if(age < 20)
{
    console.log('Kichkina');
}
else{
    console.log('Standart yosh');
}

////////////////////////////////////////////////////////
if(age < 20)
{
    console.log('Kichkina');
}
else if(age == 25){
    console.log('yosh teng');
}
else{
    console.log('xatolik');
}
///////////////////////////////////////////////////////
//ternary
const num = 10;
num <= 90 ? console.log('ok'):console.log("not Right");
///////////////////////////////////////////////////////

//switch case

switch (num){
    case 10:
        console.log(`10`);
        break;

    case 30:
        console.log('30');
        break;
    default:
        console.log('Topilmadi');
        
}