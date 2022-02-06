"use strict";


//call back function

function playFootbal(player,callback){
console.log(`Name of Player ${player}`);
callback();
}
function goals(){
    console.log('his shot 100 goals');
}
playFootbal('Salah',goals);

