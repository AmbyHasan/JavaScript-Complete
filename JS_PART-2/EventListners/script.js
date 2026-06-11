//Browser me page par koi bhi harkat karo to ek event raise ho jayega
//yani kuch bhi ho jaye screen par to wo ek event hai ..
//event ka matlab hai action hua , eventListener ka matlaba hai apne us action ka reaction diya


// ADDING EVENT LISTENER

let h1= document.querySelector("h1");
h1.addEventListener("mouseover" , function(){
    h1.style.color="red";
})
h1.addEventListener("mouseout" , function(){
    h1.style.color="yellow";
})


let input= document.querySelector("input");
input.addEventListener("input" , function(evt){
    console.log(evt.data); //event object me key property hoti hai jisme press ki hui key ka name hota hai
});

//ek time pe ek character print hoga input ka

//similarly we have "dblclick" for double click , "mouseover" for mouse hover , "mouseout" for mouse leave , "keydown" for key press and many more events are there



//REMOVING EVENT LISTENER
let p= document.querySelector("p");

let a= function(){
    p.style.color="blue"; }

p.addEventListener("mouseover" , a ); //function ko variable me store karna zaruri hai taki usko remove kar sake
p.removeEventListener("mouseover" , a );





