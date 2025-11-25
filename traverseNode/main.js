//1. query an element node that has id "soup"

//3. query any element nodes that have class "meat"

// document.getElementById(idValue) //return the first object with ID value
// document.querySelector(cssSelector) //return the first element that matches selector
// document.querySelectorAll(cssSelector) //return all elements that matches selector (NodeList - Array like (can use for each, if you want to use array functions, you need to convert array like to array))

const soupIdElement = document.getElementById("soup")
console.log(soupIdElement) //<ul id="soup">

const soupSelectorElement = document.querySelector("#soup")
console.log(soupSelectorElement) //<ul id="soup">

//get NodeList collection
const soupSelectorAllElement = document.querySelectorAll("#soup")
console.log(soupSelectorAllElement) //NodeList [ ul#soup ]
console.log(soupSelectorAllElement.length) //1
console.log(soupSelectorAllElement[0]) //<ul id="soup">
soupSelectorAllElement.forEach((ele) => console.log(ele)) //<ul id="soup">

//2. query an element nodes that have class "soup"
const soupElements = document.querySelectorAll(".soup")
console.log(soupElements);
const firstSoupElement = document.querySelector(".soup")
console.log(firstSoupElement);

const meatElements = document.querySelectorAll(".meat")
const eachMeat = meatElements.forEach(e => {meatElement = e ;console.log(e.textContent.trim())} )



const appetizerNodes = document.querySelectorAll("#appetizer")
console.log(appetizerNodes);
const firstAppetizer = document.querySelector("#appetizer > li.vegan")
console.log(firstAppetizer);
const secondAppetizer = document.querySelector("#appetizer > li.meat")
console.log(secondAppetizer);
const lastAppetizer = document.querySelector("#appetizer >li.meat + li.meat")
console.log(lastAppetizer);

