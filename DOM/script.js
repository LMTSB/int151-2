const html1 = document.documentElement
const firstNode = document.firstChild
const firstElementChildNode = document.firstElementChild
const lastNode = document.lastChild
const lastElementChildNode = document.lastElementChild
const divElement = document.getElementById('exampleElement')

//div child
//const divChild = divElement.childNodes
//divChild.forEach(child => {console.log(child.nodeName),console.log(child.nodeType),console.log(child.nodeValue)});

//div children
//const divChildren = divElement.children
//Array.from(divChildren).forEach(children => {console.log(children.nodeName),console.log(children.nodeType),console.log(children.nodeValue)});

//create element


const p = document.createElement("p");

// modify attribute node
p.setAttribute("id","int141");
p.setAttribute("style","color:blue");
p.setAttribute("name","core");
// modify text node
p.textContent = "INT141";
// add element
//id.appendChild(p);

// get attribute value
const pAttributes = p.attributes;
for (let i= 0; i < pAttributes.length ; i++) {
    const name = pAttributes[i].name //get attribute name
    const value = pAttributes[i].value //get attribute value
    console.log(name, value)
}
//console.log(html1);
//console.log(firstNode);
//console.log(firstElementChildNode);
//console.log(lastNode);
//console.log(lastElementChildNode);



//document.body.nodeType === Node.ELEMENT_NODE ? alert ("Node is an element"): alert ("Node is not an element")
//document.body.nodeType === Node.TEXT_NODE ? alert ("Node is text"): alert ("Node is not a text")
//document.body.nodeType === Node.ATTRIBUTE_NODE ? alert ("Node is an attribute"): alert ("Node is not an attribute")



const drinkMenu = document.querySelector('#drink');
const firstDrinkNode = drinkMenu.firstElementChild //first child
const nextFirstChildNode = firstElementChildNode.nextElementSibling //next sibling
const lastChildNode = drinkMenu.lastElementChild // last child
const previousLastChildNode = lastChildNode.previousElementSibling // previous child

console.log(Array.from(drinkMenu).map(drinkMenu.TEXT_NODE === "Tea"));

console.log(drinkMenu.textContent);
console.log(firstDrinkNode);
console.log(nextFirstChildNode);
console.log(lastChildNode);
console.log(previousLastChildNode);
