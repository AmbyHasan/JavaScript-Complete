//DESIGN PATTERNS


//1-> Module Pattern -
//ye ek design patterns hai jsuem hun apna code ek IIFE ke andar likhte hai , taki variables aur functions private rahe
//iske andar se hum sirf wahi cheeze return karte hain jo bahar use karni hai
//is pattern ka main fayda hai data hiding(encapsulation) aur clean structure , taki code secure , reusable aur manageable rhe


let Bank = (function(){

  let bankBalance = 10000; //private variable
  
  function checkBalance(){
    console.log(`Your bank balance is ${bankBalance}`);
  }

  function setBalance(amount){
    bankBalance = amount;
    console.log(`Bank balance updated to ${bankBalance}`);
  }

   function withdraw(amount){
    if(amount > bankBalance){
      console.log("Insufficient funds");
    }else{
      bankBalance -= amount;
      console.log(`You have withdrawn ${amount}. Remaining balance is ${bankBalance}`);
    }}


  return {
     checkBalance,
    setBalance,
     withdraw
  }

})();

Bank.checkBalance(); // Your bank balance is 10000
Bank.setBalance(15000); // Bank balance updated to 15000
Bank.withdraw(5000); // You have withdrawn 5000. Remaining balance is 10000
Bank.withdraw(12000); // Insufficient funds

//jo bhi cheeze banayege wo IIFE ke andar bnayege and code private hojayega and then return those value in an object whose values we want to be accessed outside the IIFE.




//2-> Reveal Module Pattern
//ap jab object return krte ho IIFE se to you can decide ki konse name se bhejna hai

//eg->

return {
  check:checkBalance, 
  set:setBalance,
  draw:withdraw 
}

//module pattern me jis nam se tha usi nam se return krte the but reveal module pattern me ap apne hisab se name de sakte ho , isse code aur bhi zyada readable hojata hai.



//3-> Factory Function Pattern
//ek function banate ho jo object create krta hai ( factory => object banane ki machine)


//ye ek aisa design pattern hai jisme hum ek simple function likhte hai jo naye objects banakar return krta hai , bina class ya new keyword use kiye
//Is pattern ka main idea hai -> object creation ko ek function ke through control krna
//Har bar jab tum factory function call krte ho, tumhe ek naya object milta hai jisme apne methods aur private data ho skta hai
//Yeh pattern specially useful hai jab tmhe rakhi type ke bohot sare objects chaihiye , jaise users , products , tasks etc.


function createProduct(name , price){
  let stock = 10;
  return {
    name , 
    price,
    buy(qty){
      if(qty<=stock){
        stock-=qty;
        console.log(`booked , ${stock} pieces left`)
      }else{
        console.log(`Sorry, only ${stock} pieces left in stock.`)
      }
    } ,
    refill(qty){
      stock+=qty;
      console.log(`refilled the stock - ${stock} pieces now.`);
    }
  } ;
}

let laptop = createProduct("laptop" , 50000); // {name: "laptop", price: 50000, buy: ƒ, refill: ƒ}
laptop.buy(3); // booked , 7 pieces left
let phone = createProduct("phone" , 20000); // {name: "phone", price: 20000, buy: ƒ, refill: ƒ} 
phone.refill(5); // refilled the stock - 15 pieces now.




//PERFORMANCE OPTIMIZATIONS

// 1-> Debouncing
//ap koi actoin kar rhe ho and ao ye nhi chahte har action pe kuch ho , jab bhi merer actions ke beech me koi specific ajaye to fir reactoin perform ho

document.querySelector("input").addEventListener("input" ,  function(){
  console.log("input event triggered");
})
