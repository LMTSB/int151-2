const btn1 = document.getElementById("button_1");
const outer = document.getElementById("outer");
const link = document.getElementById("sit");
const input = document.querySelector("input");



// Capturing phase (true) capturing phase == 1
outer.addEventListener("click", (e) => {
    console.log("Outer DIV (capturing)");
    console.log(`event.eventPhase ${e.eventPhase}`);
    e.preventDefault();
}, true);

// Bubbling phase (false, default) capturing phase == 2
outer.addEventListener("click", (e) => {
    console.log("Outer DIV (bubbling)");
    console.log(`event.eventPhase ${e.eventPhase}`);
});

btn1.addEventListener("click", (e) => {
    console.log(`event.target ${e.target}`);
    console.log(`event.current target ${e.currentTarget}`);
    console.log(`event.eventPhase ${e.eventPhase}`);
    console.log("Button (target)");
});

input.addEventListener("input", (e) => {console.log(e.target.value)});

link.addEventListener("click" , (e) => {e.preventDefault(); console.log("access prevented")})

// In-class Practice
const submit = document.querySelector("input[type='submit']");
const fName = document.getElementById("fname");
const lName = document.getElementById("lname");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (fName.value == 0 || lName.value == 0) {alert("submit prevented")}
    else {alert(`submit success ${fName.value} ${lName.value}`)};
});

const message = document.getElementById("message");
const display = document.querySelector("p");

message.addEventListener('input', () => {display.textContent = message.value;});