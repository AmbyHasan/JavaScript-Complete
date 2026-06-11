//localStorage->
// aisii space jo browser ke andar present and jaha data store hota hai  ,browser ke band hone par bhi data lost nhi hoga
//ye basically browser ka database haii

localStorage.setItem("name" , "Amber");  //ye upsert krta hai value ko
//localStorage me sirf strings store hoti hai
//isiliye we do JSON.stringfy([1,2 ,3 ,4])

//jab localStorage se data wapas lete hai to string hi milta hai ab natural form me data ko extract karne ke liye we use JSON.parse



let val = localStorage.getItem("name");
localStorage.removeItem("name");


//sessionStorage- >
// ye hamara data temporarily store krta hai , yani tab band hua ho data lost

sessionStorage.setItem("name" ,"amber");
sessionStorage.clear;



//cookies-> 
// yaha bhi data store hota hai and apka data browser ki cookies me store hota hai and it is used for storing light data
//browser me chota store krne ke liye iska use hota hai
//isme 4 kb tak ka date store hoskta hai
//cookies me ho jo bhi data store hota hai , wo page reload krne pe directly server par chala jata haii
document.cookie="email=amberhasan"
