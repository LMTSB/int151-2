
//import function
import { p } from "./functions.js"

//class06 Functional Programming
const greet = (name,formatter) => formatter(name) //higher order function
const shout = text => text.toUpperCase() + '!!!'
const bedTime = text => text.toUpperCase().concat(" ", 'GO TO BED!')
//p(greet('alice',shout))
//p(greet('alice',bedTime));


const users = [
    {name : 'bob', id : 1},
    {name : 'cat', id : 2},
    {name : 'gulp', id : 3}
]
//const userName = users[0]?.name;
const getName = users.filter((number) => number.id >= 2).map((user) => user.name) 
//p(getName);

const c = 10
const local = (a,b,c) => {a=1,b=2,c=3; return a+b+c}   
//p(local());


let y = 100 //global variable
let sum = 5
sum = 2
function getScore(x) {
  let y = 10 //local variable
  let mid = 40
  let final = 30
  function doSomething() {
    console.log(`dosomething: ${y + sum + x + mid + final}`)
  }
  return doSomething()
  //return y + sum + x + mid + final
}
//const score = getScore(1)
//console.log(x, mid, final) //cannot access
 
function idGenerator() { //practice 1
  let x = 0
  function increase() {
    return x += 1
  }
  return increase
}
const idGen = idGenerator()
//p(idGen())
//p(idGen())
//p(idGen())

const outerFunction = (x) => {const innerFunction = (y) => {return x+y}; return innerFunction };
const addFive = outerFunction(5);
p(addFive(3));
const addTen = outerFunction(10);
p(addTen(2));