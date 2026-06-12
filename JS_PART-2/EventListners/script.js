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



//change event tab chalta hai kab koi input ,select ya textarea me koi change hojaye
let sel=document.querySelector("select");
let device= document.querySelector("#device");  //paragraph hai jo select ke uppar mentioned haii

sel.addEventListener("change" , function(evt){  //this get triggerd jab bhi select me se koi option select hoga
  device.textContent = `${evt.target.value} is selected`   //changing the paragrapth content
});

let btn=document.querySelector("button");
btn.addEventListener("click" , function(){
    alert("Button is clicked");
});


//similarly we have "dblclick" for double click , "mouseover" for mouse hover , "mouseout" for mouse leave , "keydown" for key press and many more events are there




//REMOVING EVENT LISTENER
let p= document.querySelector("p");

let a= function(){
    p.style.color="blue"; }

p.addEventListener("mouseover" , a ); //function ko variable me store karna zaruri hai taki usko remove kar sake
p.removeEventListener("mouseover" , a );




//EVENT BUBBLING and CAPTURING
//jisme event ayega agar uspar listener nhi hua to humara event uske parent par lister dhundhega aur aisa krte krte uppar ki taraf move karega


//isika ulta hota hai event capturing..
//jab bhi aap click krte ho ya koi bhi event raise krte ho to apka event flow ya propogation do phases me chalta hai
//phase-1 event top level element se neeche ki taraf ayega    ->capture phase
//phase-2 event raise element se parent ki taraf jayega    ->bubbling phase
//hamsha phase 1 hi pehle hoti hai but wo by default off hoti hai , agar hum use on kar dein to pehle phase one ka answer milega

let btn2=document.querySelector("#btn2");
btn2.addEventListener("click" ,function(){
    alert("clicked");
} ,true)  //; here capture phase is enabled










