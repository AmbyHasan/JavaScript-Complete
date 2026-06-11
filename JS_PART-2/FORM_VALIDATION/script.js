
let name= document.querySelector("#name");
let form = document.querySelector("form");



form.addEventListener("submit" , function(event){
    event.preventDefault();
    name.value.length < 2 ? alert("name should be of atleast 2 characters") : null;
})

