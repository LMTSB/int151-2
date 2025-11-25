const nameAttributeElements = document.getElementsByName("fname");
console.log(nameAttributeElements); //gain NODE list

const liElements = document.getElementsByTagName("li");
console.log(liElements); // gain HTML collection

const veganClassElements = document.getElementsByClassName("vegan");
console.log(veganClassElements);

const liElementArray = Array.from(liElements); // convert collection to array
liElementArray.forEach(e => {console.log(e)}); // 

//const firstIdElement = document.querySelectorAll("#soup, #appetizer");
//console.log(firstIdElement);
//console.log(firstIdElement.length);

const ulParents = document.getElementById("soup");
console.log(ulParents);

const porkSoup = document.createElement("li");
porkSoup.textContent = "Pork Soup";
porkSoup.setAttribute("class","meat");

let ps = null;
const liChildren = ulParents.children ;
Array.from(liChildren).forEach(e => {if (e.textContent.trim() === "Beef Soup") ps = e})
ulParents.replaceChild(porkSoup,ps); // replace Child(newElement, location)


