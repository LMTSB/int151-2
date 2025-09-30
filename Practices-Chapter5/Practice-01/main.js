//const button_r = document.querySelector("button[data-color= 'red']");
//const button_g = document.querySelector("button[data-color= 'green']");
//const button_b = document.querySelector("button[data-color= 'blue']");

//const buttons = document.getElementsByTagName("button")
//Array.from(buttons).forEach(b => {b.addEventListener("click", 
//    () => {})})
//button_r.addEventListener('click', () => {box.style.background = "red"; box.textContent = "RED";});
//button_g.addEventListener('click', () => {box.style.background = "green"; box.textContent = "GREEN";});
//button_b.addEventListener('click', () => {box.style.background = "blue"; box.textContent = "BLUE";});    

const box = document.querySelector("#box");
const buttons = document.getElementsByTagName("button");

Array.from(buttons).forEach(b => {b.addEventListener("click", (e) => {
    if (e.target.dataset.color === "red") {box.style.background = "red"; box.textContent ="RED"}
    if (e.target.dataset.color === "blue") {box.style.background = "blue"; box.textContent = "BLUE"}
    if (e.target.dataset.color === "green") {box.style.backgroundColor = "green"; box.textContent= "GREEN"}
})});