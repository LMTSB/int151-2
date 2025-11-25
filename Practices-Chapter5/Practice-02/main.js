//const add = document.getElementById("add");
//const remove = document.getElementById("remove");
//const toggle = document.getElementById("toggle");

const buttons = document.getElementsByTagName("button");
const box = document.getElementById("box");

//add.addEventListener("click", () => {
//    box.classList.add("bordered");
//});
//remove.addEventListener("click", () => {
//    box.classList.remove("bordered");
//});
//toggle.addEventListener("click", () => {
//    box.classList.toggle("bordered");
//});

Array.from(buttons).forEach((b) => {
    b.addEventListener("click", (e) => {
        if (e.target.id === "add") {box.classList.add("bordered");}
        if (e.target.id === "remove") {box.classList.remove("bordered");}
        if (e.target.id === "toggle") {box.classList.toggle("bordered");}
    });
});