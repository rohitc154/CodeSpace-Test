const score = 400
// console.log(score);

const balance = new Number(700);
// console.log(balance);

// We convert the number value into string and enjoy the string properties on it
// console.log(balance.toString().length);

// toFixed() is used to make the numerical value more precise
// console.log(balance.toFixed(2));

const decNUm = 123.596;
// console.log(decNUm.toPrecision(4));

// toLocaleString() formats the number having maultiple zeros in 
// better readable format,'en-IN' is used to format a/c to indian subcontinent
const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));

// -----------------------Maths---------------------------------

// console.log(Math)
// console.log(Math.abs(-5));
// console.log(Math.round(7.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.8));

// Random function 

// console.log(Math.round(Math.random(10)*10));

const min = 10;
const max = 20;

console.log(Math.floor((Math.random()*(max-min +1))+min));
