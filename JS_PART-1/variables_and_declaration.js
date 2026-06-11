//netscape company me kam krne wale bande ne ek language banayi jiska nam tha MOCA, but kuki JAVA famous this and log MOCA nhi seekh rhe the to java se milta julta nam MOCA ka rakh diyega jo ki the JAVASCRIPT, just for the sake ki log isko seekh le

//js ko brenden eek ne 15 days me banaya tha, 
//ecmascript community manages js

//var is the old way to declare a variable, it is function scoped and can be re-declared and updated
var a="Amber";
//or 
var a;   //declaration
a="Amber";  //initialization
//it has been re declared and error nahi aya

//now days we use let and const to declare variables, let is block scoped and can be updated but not re-declared, const is block scoped and cannot be updated or re-declared
let a="Amber";
//or
let a;   //declaration
a="Amber";  //initialization

const a="Amber"; //declaration and initialization at the same time, it cannot be updated or re-declared

//hoisting is a behavior in js where variable and function declarations are moved to the top of their scope before code execution, but only the declarations are hoisted, not the initializations
console.log(a); //undefined
var a="Amber"; //declaration and initialization