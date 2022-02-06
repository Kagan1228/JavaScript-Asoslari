//Opertorlar

//+,-,*,/,**,%
const x = 15,
y = 15;
console.log(x+y);//q
console.log(5-5);//a
console.log(5/5);//b
console.log(5*5);//k

console.log("Hello " + "World");
const num = 4 + 'radio';
console.log(typeof num);
console.log(4+' radio');

//incre
let z = 10;
console.log(z++);
console.log(++z);

let incre = 99;
let decr = 99;
console.log(++incre);
console.log(--decr);

console.log(incre++);
console.log(decr--);
console.log(incre);
console.log(decr);

console.log(5 % 2);//qoldiq
console.log(5%5);

// == === 
console.log(2 * 3 == '6');//qatiymas
console.log(2 * 3 === '6');//qatiy


//&& bu ikkita qiymat true bolsa true chiqaradi
// || bu esa bitta qiymat truega teng bolsa true chiqaradi

const isChecked = true,
isClose = false;
console.log(isChecked && (isClose || !isChecked));
console.log(isChecked || isClose);