import { CookieUtil } from "./cookieUtil.js";

//console.log(document.cookie);
//document.cookie = `theme=dark;expires=${new Date(2025, 9, 15)}`
//document.cookie = "font-size=14px;max-age=60"

console.log(CookieUtil.get("theme"))

//local counter
let local_counter = localStorage.getItem('count');
console.log(local_counter);

local_counter === null ? localStorage.setItem("count" , 1) : localStorage.setItem("count" , ++local_counter);

localStorage.removeItem("count");
localStorage.clear();

//session counter
let session_counter = sessionStorage.getItem('count');
console.log(session_counter);

session_counter === null ? sessionStorage.setItem("count" , 1) : sessionStorage.setItem("count" , ++session_counter);
sessionStorage.removeItem("count");
sessionStorage.clear();