// We use '``'(backtick), which is used in the string for string interpolation.


let myName = "Kom-al-kmri"
let name = "Rohit"
console.log(`Hey! this is ${myName}, how are you?`);

//The value of the string is stord in key value pair, Whose key value is starting from 0 till the length of the string
console.log(name[0]);
console.log(name.__proto__);

//String Methods

// console.log(name.length);
// console.log(name.indexOf('t'));
// console.log(name.charAt(3));
// console.log(name.substring(0,4));

const anotherstr = myName.slice(-1,-8);
console.log(anotherstr);

// console.log(anotherstr.includes('hit'));

//Converting string into array based on some character
console.log(myName.split("-"));