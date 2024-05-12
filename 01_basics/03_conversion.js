// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");

//Memmory types : stack(Primitive type is used), Heap(Non-Primitive/reference type is used)

// let nam = "Rohit"
// let anotherNam = nam;
// anotherNam="Komal"


// console.log(nam);
// console.log(anotherNam);

//Non-Primitive Data-type stored in head memory

let obj1 ={
name:"Rohit",
roll:48
}
let obj2 = obj1;
obj2.name = "Khusi"


console.log(obj1.name);

console.log(obj2.name);