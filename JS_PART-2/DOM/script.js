//Text content access
document.querySelector("h1").innerText="Runjhun";  //for changing text
document.querySelector("h1").innerHTML="<h3>Sheen</h3>"  //for changing html content


//Attribute manipulation

//tag ke andar main keywords ke alawa jo bhi hai wo attribute hai
//href is the attribute of anchor tag
document.querySelector("a").setAttribute("href","https://www.youtube.com");  //for changing the value of an attribute
//similarly we have getAttribute() and removeAttribute() methods


//Dynamic DOM Manipulation

//1-> Creating an element
let h1= document.createElement("h1");
h1.innerText="This is a heading that came through dynamic dom manipulation";  //adding text to the element
document.body.appendChild(h1);  //adding the element to the body of the document
//we can either append the element to the body or prepend the element to the body
//appendChild() method adds the element at the end of the body
//prepend() method adds the element at the beginning of the body



//2-> 