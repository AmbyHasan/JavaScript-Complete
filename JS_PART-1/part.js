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


//For converting any value to boolean
console.log(!!3); //this is a trick to convert any value to boolean , it will give true
let a=10;
console.log(!!a); //it will also give true because a is a truthy value, any non zero number is a truthy value in js, so it will return true. if we have a=0 then it will return false because 0 is a falsy value in js.
console.log(!!"Amber");//true


//For converting any value to number
let str = "42";
let num = +str;
console.log(num); // 42


//loops
for(let char of "Amber"){
    console.log(char);
}

let nums=[10,20,30,40];
nums.forEach((num)=>{
    console.log(num);
})


//HIGHER ORDER FUNCTIONS -> Wo function ho ya to function ko accept karte ho ya return karte ho
 function abc(val){
    return function(){
        console.log(val);
    }
 }

 abc(10)(); //dusra bracket isliye lagaya hai kyuki abc(10) ek function return karega to usko call karne ke liye dusra bracket lagana padega, so it will print 10


 //IIFE

 //turant function chal jayega

 (function(){
console.log("This is an IIFE");
 })()


 //HOISTING

 abcd();

 function abcd(){
    console.log("This is a hoisted function");
 }

 //ye chal jayega
 //function expression me hoisting possible nhi hoti hai   

 abcd2(); //ye error dega because abcd2 is a function expression and it is not hoisted, so we cannot call it before its declaration, it will throw a ReferenceError: Cannot access 'abcd2' before initialization.
 let abcd2 = function(){  console.log("This is a function expression");}