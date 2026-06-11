//setTimeout

let tm= setTimeout(function(){
 console.log("amber"); //5 sec bad se chal jayega
} , 5000);


clearInterval(tm); // 5 sec bad kuch nhi ayega


//setInterval

let tm1=setInterval(()=>{
    console.log("amber");
} ,5000)  //har 5 sec me amber print hog


clearInterval(tm1); //interval bhi clear hojayega

