const button_r = document.querySelector("button[data-color= 'red']");
const button_g = document.querySelector("button[data-color= 'green']");
const button_b = document.querySelector("button[data-color= 'blue']");
const box = document.querySelector("#box");
//const buttons = document.getElementsByTagName("button")
//Array.from(buttons).forEach(b => {b.addEventListener("click", 
//    () => {})})
button_r.addEventListener('click', () => {box.style.background = "red"; });
button_g.addEventListener('click', () => {box.style.background = "green"; });
button_b.addEventListener('click', () => {box.style.background = "blue"; });    

