const text = document.getElementById("keyInput");
const log = document.getElementById("keyLog");
const paragraph = document.createElement("p");

text.addEventListener("keydown", (e) => {log.textContent += ` ${e.key}`;appendChild()});

