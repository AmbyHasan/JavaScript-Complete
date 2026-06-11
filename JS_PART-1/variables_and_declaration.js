//netscape company me kam krne wale bande ne ek language banayi jiska nam tha MOCA, but kuki JAVA famous this and log MOCA nhi seekh rhe the to java se milta julta nam MOCA ka rakh diyega jo ki the JAVASCRIPT, just for the sake ki log isko seekh le

//js ko brenden eek ne 15 days me banaya tha, 
//ecmascript community manages js

// var and let ko notes se hi padh lo

//const is used when we want to declare a variable whose value will not change, it is a constant variable. once we assign a value to a const variable, we cannot reassign it. it is block scoped and must be initialized at the time of declaration. if we try to reassign a const variable, it will throw an error. const variables are often used for values that should remain constant throughout the program, such as mathematical constants or configuration settings.
//but if a const containa an object or array , still its value can be changes because the reference to the object or array is constant, but the properties of the object or elements of the array can be modified. for example:
const myArray = [1, 2, 3];
myArray.push(4);  //valid

const myObj={name: "Amber"};
myObj.name="Aman"; //valid


//Dataypes=>
//null -> apne jaan boojh ke variable khali rakha hai, kisi variable ko null assign karne ka matlab hai ki usme koi value nahi hai, lekin uska data type abhi bhi object hai. 
//undefined-> apne koi variable declare kiya hai but koi value nhi di to jo value by default mili that is undefined

//typeOf

typeof null; //object - >historical bug hai bhai , known bug hai .. sabko pata hai bug hai but tab bhi yhi chal rha haii

console.log(typeof []);
console.log(typeof null);
console.log(typeof 123n);



console.log(5!=='5'); //true -> because here we have strict checking
console.log(5!='5'); //false -> becuse here we have loose checking, in loose checking js will convert the string '5' to number 5 and then compare, so it will be equal and return false. but in strict checking it will not convert and directly compare the values and types, so it will return true because 5 is a number and '5' is a string.