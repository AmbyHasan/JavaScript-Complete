//Execution context->

//js jaise hi apka function dekhata hai sabse pehle js banata hai execution context , ye ek process hai jo do phases me chalta hai
//1-> memory creation  , 2-> execution phase


//Lexical Scoping  ->
//lexical scoping ka matlab hai ki aapke function ke andar jo bhi variables hai wo uske parent function ke variables ko access kar sakte hai but parent function apne child function ke variables ko access nahi kar sakta hai
function abcd(){
    let a=12;
    function defg(){
        console.log(a); //a can be accessed from parent function
    }
}

//Dynamic Scoping ->
//dynamic scoping ka matlab hai ki aapke function ke andar jo bhi variables hai wo uske parent function ke variables ko access kar sakte hai aur parent function apne child function ke variables ko bhi access kar sakta hai
//it is now followed in javascript



//Closures->
//ye basically function hote hai jo kisi parent function ke andar hai and andar wala function return ho rha ho
//and returning function use kr rha ho parent function ka koi variable

function abc(){   //example-1
    let a =13;
    return function(){
        console.log(a);
    }
}

//this entire function is called closure
let fnc=abc();
fnc(); //13 print hoga closure ke through
//ye sach bat hai ki function ke khatm hone pe apka function and uske varaibles khatam ho jate hai
//but jab bhi closure bnta hai to apke function aut uske variables ka ek backlink(copy) banaya jata hai aur uska nam hota hai [[environment]]
//it is used in case of private counters and encapsulation

function counter(){   //example-2
    let count=0;
  return   function increment(){
        count++;
        console.log(count);
    }
   
}

let f1=counter();
f1(); //1
f1(); //2
f1(); //3   

let f2=counter();
f2(); //1
f2(); //2           
f2(); //3
//f1 and f2 dono alag alag closure hai aur dono ke apne apne count variable hai