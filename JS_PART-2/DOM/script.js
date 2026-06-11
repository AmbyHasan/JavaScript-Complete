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

//we can either append the element to the body or prepend the element to the body
//appendChild() method adds the element at the end of the body
//prepend() method adds the element at the beginning of the body
document.querySelector("div").prepend(h1);  //adding the element to the div


//2-> Styling an element
document.querySelector("h3").style.color="red";  //for changing the color of the text
document.querySelector("h3").style.fontSize="50px";  //for changing the font size of the text
document.querySelector("h3").style.backgroundColor="yellow";  //for changing the background color of the text

document.querySelector("h3").classList.toggle;  //class hai to hata do and nhi hai to laga do


//practice

//1-> difference between innerText and textContent
//innerText is slower then textContent because innerText takes into account the styling and layout of the page, while textContent does not.



//2-> classList vs style
//classList is used to add, remove, or toggle CSS classes on an element
//style is used to directly set inline styles on an element 

//classList wala method is preffered more