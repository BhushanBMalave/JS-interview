
console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false
console.log(+true); // 1
console.log(+false); // 0
console.log(+""); // 0
console.log(+"123"); // 123
console.log(+null); // 0
console.log(+undefined); // NaN 
console.log(+"abc"); // NaN
console.log([] == ![]); // true because [] is coerced to false, so the comparison becomes false == false
console.log(!!10+20) //The double exclamation makes the integer to bool so 10 becomes true and is considered as 1 due to this 1 + 20. So the final output is 21
console.log(4 + +'3'); // 7
console.log(4 - -'3'); //7
console.log([] + []); // empty str
console.log([2] + [2]); // 22
console.log(+[2] + +[2]); // 4
console.log(-[2] + -[2]); //-4
console.log(NaN === NaN); // false

console.log(["hello"] + ["Anil"]); //hello Anil
console.log(+["hello"] + +["Anil"]); // NaN
console.log("8">"16") // true .Lexicographical comprision
console.log("8" > 16) // false convert str to num
console.log(""> -1) // true js converts "" to 0
console.log("MD">16) // false js converts "MD" to NaN

const crazy = ++[[]][+[]]+[+[]]; // ++0 [0]+[0] -> 10
console.log(crazy); // 10


function sayHi() {
    console.log(name); // undefined due to hoisting
    console.log(age); // ReferenceError: Cannot access 'age' before initialization
    var name = "Lydia";
    let age = 21;
}
sayHi();

for (var i = 0; i<3; i++) {
     setTimeout(() => console.log(i), 1000);
 }
 // Outputs 3, 3, 3 because 'var' is function-scoped and by the time the timeout executes, the loop has completed and 'i' is 3.

 for (let j = 0; j<3; j++) {
     setTimeout(() => console.log(j), 1000);
 }
 // Outputs 0, 1, 2 because 'let' is block-scoped and each iteration of the loop captures a new binding of 'j'.

 function timeoutExample(i) {
        setTimeout(() => console.log(i), 1000);
}

for (var i = 0; i<3; i++) {
    timeoutExample(i);
}
// Outputs 0, 1, 2 because each call to timeoutExample captures the current value of 'i' at that iteration.

for (let j = 0; j<3; j++) {
    timeoutExample(j);
}
// Outputs 0, 1, 2 because 'let' is block-scoped and each iteration of the loop captures a new binding of 'j'.

let temp = {
 a:10,
 b:20,
 sum : () => {
     console.log(this.a + this.b);
 },
 multi: function() {
     console.log(this.a * this.b);
 },
 sumRegular: function() {
     console.log(this.a + this.b);
 }
}

temp.sum(); // NaN because arrow functions do not have their own 'this', so 'this.a' and 'this.b' are undefined.
temp.multi(); // 200 because regular functions have their own 'this' which refers to the 'temp' object.
temp.sumRegular(); // 30 because regular functions have their own 'this' which refers to the 'temp' object.

const bird ={
    size: "small"
}
const mouse = {
    name: "Mickey",
    small: true
}
console.log(mouse.bird.size); // undefined because bird is not a property of mouse
console.log(mouse["bird"]["size"]); // TypeError: Cannot read properties of undefined (reading 'size')
console.log(mouse[bird["size"]]); // undefined because bird["size"] is "small" and mouse["small"] is true
console.log(mouse[bird.size]); // true because bird.size is "small" and mouse["small"] is true

let c = { greeting : "Hey!" };
let d;
d = c;
c.greeting = "Hello";
console.log(d.greeting); // Outputs "Hello" because 'd' references the same object as 'c'.

let a = 3;
let b = new Number(3);
console.log(a == b); // true because 'b' is coerced to the primitive value 3
console.log(a === b); // false because 'a' is a primitive and 'b' is an object

console.log("5" + 3); // "53" because the number 3 is coerced to a string
console.log("5" - 3); // 2 because the string "5" is coerced to a number
console.log("5" * "2"); // 10 because both strings are coerced to numbers
console.log("6" / "2"); // 3 because both strings are coerced to numbers

let greeting;
greetingn ={}
console.log(greetingn);
// {} because wrong spelling taken as Var variable by default

sum = (a, b) => a + b;
console.log(sum(2, '3'));
// Outputs '23' because the '+' operator concatenates a number and a string.

console.log(typeof null); // "object" because in JavaScript, null is considered an object type due to legacy reasons.
console.log(typeof undefined); // "undefined" because undefined is a primitive type that indicates a variable has not been assigned a value. 
console.log(typeof NaN); // "number" because NaN (Not-a-Number) is a special numeric value that represents an undefined or unrepresentable value in mathematics.
console.log(typeof []); // "object" because arrays are a type of object in JavaScript.
console.log(Array.isArray([])); // true because Array.isArray() is a method that checks if the provided value is an array.
console.log([] instanceof Array); // true because the instanceof operator checks if the prototype property of a constructor appears anywhere in the prototype chain of an object.

let x = 0;
console.log(x++); // Outputs 0 because the post-increment operator returns the value before incrementing.
console.log(++x); // Outputs 2 because the pre-increment operator increments the value first and then returns it.

console.log(eval('10*10+5')); // Outputs 105 because eval evaluates the string as JavaScript code.

<div onClick="console.log('div')">
  <p onClick="console.log('p')"> Click me </p>
</div>
// When the paragraph is clicked, it will log 'p' first and then 'div' due to event bubbling. -A becoz by default it event bubbleing where events executes from child to parent.In case of event caputuring its from parent to child execution of events

var num = 8;
var num = 10;
console.log(num); // Outputs 10 because 'var' allows redeclaration and the last assignment takes effect.

const obj = { a :'one', b: 'two', a: 'three' };
console.log(obj); // { a: 'three', b: 'two' } because in object literals, duplicate keys are overwritten by the last occurrence.

for (let i = 0; i < 5; i++) {
 if(i === 3) continue;
 console.log(i);
}
// Outputs 0, 1, 2, 4 because when i is 3, the continue statement skips the rest of the loop body for that iteration.

console.log(typeof typeof 1); // "string" because typeof 1 is "number", and typeof "number" is "string".

let xy = [...'Lydia'];
console.log(xy); // ['L', 'y', 'd', 'i', 'a'] because the spread operator splits the string into individual characters and creates an array from them.

function getAge(){
 'use strict';
 age = 25;
 console.log(age);
}
getAge(); // ReferenceError: age is not defined because in strict mode, assigning a value to an undeclared variable throws an error.


let person = { name :'Alice' };
let member = person;
let mem = [person];
person = null;
console.log(member); // Outputs { name: 'Alice' } because 'member' still references the original object even after 'person' is set to null.
console.log(mem); // Outputs [{ name: 'Alice' }] because 'mem' is an array that contains a reference to the original object.

function getAge(...args) {
    console.log(typeof args);
    console.log(args);
}
function getAge1(args) {
    console.log(typeof args);
    console.log(args);
}
getAge(21); // "object" [ 21 ] because the rest parameter 'args' is an array containing the arguments passed to the function.
getAge1(21); // "number" 21 because 'args' is a single parameter that receives the value passed to the function.

const data = {
 name: "Test",
 age: 25,
 city: "New York"
}
console.table(data); // Displays the 'data' object in a table format in the console for better readability.

const str = "Hello Bhushan, How are you?";
console.log(str.split(" ")[1]); // Outputs "Bhushan," because split(" ") divides the string at each space and the second element (index 1) is "Bhushan,".
console.log(str.slice(6, 14)); // Outputs "Bhushan," because slice(6, 14) extracts characters from index 6 to 13.
console.log(str.substr(6, 8)); // Outputs "Bhushan," because substr(6, 8) starts at index 6 and takes the next 8 characters.
console.log(str.substring(6, 14)); // Outputs "Bhushan," because substring(6, 14) extracts characters from index 6 to 13.
console.log(str.indexOf("are")); // Outputs 18 because "are" starts at index 18 in the string.
console.log(str.charAt(6)); // Outputs "B" because charAt(6) returns the character at index 6.
console.log(str.includes("How")); // Outputs true because "How" is a substring of str.
console.log(str.startsWith("Hello")); // Outputs true because str starts with "Hello".
console.log(str.endsWith("you?")); // Outputs true because str ends with "you?".
console.log(str.replace("Bhushan", "John")); // Outputs "Hello John, How are you?" because replace() substitutes "Bhushan" with "John".
console.log(str.toUpperCase()); // Outputs "HELLO BHUSHAN, HOW ARE YOU?" because toUpperCase() converts all characters to uppercase.
console.log(str.toLowerCase()); // Outputs "hello bhushan, how are you?" because toLowerCase() converts all characters to lowercase.
console.log(str.trim()); // Outputs "Hello Bhushan, How are you?" because trim() removes any leading or trailing whitespace (none in this case).
console.log(str.length); // Outputs 27 because length returns the number of characters in the string.
console.log(str.indexOf("z")); // Outputs -1 because "z" is not found in the string.
console.log(str.lastIndexOf("o")); // Outputs 21 because the last occurrence of "o" is at index 21.
console.log(str.match(/o/g)); // Outputs ['o', 'o', 'o'] because match() with the regex /o/g finds all occurrences of "o" in the string.
console.log(str.search("How")); // Outputs 15 because search() returns the index of the first occurrence of "How" in the string.
console.log(str.concat(" Have a nice day!")); // Outputs "Hello Bhushan, How are you? Have a nice day!" because concat() appends the given string to str.
console.log(str.repeat(2)); // Outputs "Hello Bhushan, How are you?Hello Bhushan, How are you?" because repeat(2) duplicates the string twice.
console.log(Array.from(str)); // Outputs an array of characters because Array.from() creates an array from the string, with each character as an element.
console.log(str.charCodeAt(0)); // Outputs 72 because charCodeAt(0) returns the Unicode of the character at index 0, which is 'H'.
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Outputs "Hello" because fromCharCode() converts Unicode values to characters.
console.log(str.localeCompare("Hello Bhushan, How are you?")); // Outputs 0 because localeCompare() returns 0 when the strings are equal.
console.log(str.localeCompare("Hello John, How are you?")); // Outputs a positive number because str is greater than the compared string in lexicographical order.

for(;;){
 console.log("Infinite Loop");
} // Creates an infinite loop that continuously logs "Infinite Loop" to the console.

let ab = null;
let cb = null;
console.log(ab + cb); // Outputs 0 because null is coerced to 0 in numeric contexts, so null + null becomes 0 + 0.
console.log(ab + 5); // Outputs 5 because null is coerced to 0, so null + 5 becomes 0 + 5.
console.log(cb + "5"); // Outputs "null5" because null is coerced to the string "null", so null + "5" becomes "null" + "5".
console.log(ab === cb); // Outputs true because both ab and cb are null, and strict equality checks for both value and type.


// Spread operator and Rest operator
let num1 = [1,2,3,4,5];
let num2 = [6,7,8,9,0];
let finalNum = [...num1,...num2];

function addArr(...numbers){
 return numbers;
}

console.log(finalNum); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]  spread 
console.log(addArr(num1,num2)); // [[1,2,3,4,5],[6,7,8,9,0]] Rest
///// Object keys
let a1 = {}
let b2 = {key:"123"}
let c3 = {key:"456"}
a1[b2] = 123;
a1[c3] = 456

console.log(a1[b2]); // 456

/////
let x3 = "2";
let y3 = "1";
let z3 = "3";
console.log(x3+y3-z3) // 18
/////
console.log(false == []) // true
console.log(false == ![]) // true type coercion

/////
const number ={
    a:3,
    b:4,
    sum(){
        return this.a + this.b;
    }
}
const res1 = number.sum;
const res2 = number.sum.bind();
const res3 = number.sum.bind(number);
console.log(res1()); // NaN
console.log(res2()); // NaN
console.log(res3()); // 7

/////
let max = [5,2,7,9,3];
console.log(Math.max(...max)); //9
console.log(Math.max.apply(null,max)) //9

/////
function display(name = noName()){
 console.log("hello" + name);
}
function noName(){
 throw new Error("Name is reuired");
}
display("Bhushan"); // hellobhushan
display(); // index.js:8 Uncaught Error: Name is reuired

/////
function bi(){
 console.log(this.name)
}

const bin = bi.bind({name:'Bhushan'}).bind({name: "Malave"});
bin(); // Bhushan  function gets bind to first object there is bind chaining. 

/////
for(var i=1;i<=3;i++){
 setTimeout(()=>console.log(i),1000)
} // 4 4 4
for(let i=1;i<=3;i++){
 setTimeout(()=>console.log(i),1000)
} // 1 2 3
for(var i=1;i<=3;i++){
 ((i)=>{
 setTimeout(()=>console.log(i),1000)
 })(i);
} // 1 2 3

////// hoisting question
var abc = "abc";
function callhost(){
    abc = "xyz"
    //function abc() {};
    return;
}
callhost();
console.log(abc); // abc because fuction and variable have same name in local scope and function get hoisted above variable. if we comment func then xyz will be output.

/////
const numb = [1,2,3,4];
numb[8] = 8;
console.log(numb); // [1, 2, 3, 4, empty × 4, 8]
console.log(numb[4]); // undefined

/////
var length = 20;

function count(){
 console.log(this.length);
}

const dataa = [count,'1',1];
dataa[0]('Bhushan'); // 3 because this points to data array and its length is 3

///// function property new keyword.
function foo(){
 this.value = 100;
}

foo.prototype.value = 200;
foo.value = 300;
console.log(foo.value); // 300
const f = new foo();
console.log(f.value) //100

///// Freeze Object (Immutable)
const user1 = Object.freeze({name: 'bhushan', age:25});
user1.age= 26;
console.log(user1.age); // 25

///// Create a private variable without using class. Closure

function createUser(name) {
  let secret = "12345";
  return {
    getName() {
      return name;
    },
    getSecret() {
      return secret;
    },
  };
}

const user1 = createUser("Bhushan");
console.log(user1.getName()) // Bhushan
console.log(user1.getSecret()) // 12345
console.log(user1.secret) // undefined

///// Prevent Object Mutation by freeze and seal

const objusr = {name:'abc'};
Object.seal(objusr);
objusr.name="bcd";
objusr.age=25;
delete objusr.name;
console.log(objusr) // bcd

const objusr = {name:'abc'};
Object.freeze(objusr);
objusr.name="bcd";
objusr.age=25;
delete objusr.name;

console.log(objusr) // abc

///// Memoization (Performance Optimize) used to make slow func fast. 

function memorize(fn){
 const cache ={} // cache
 return function(n){
  if(cache[n]) return cache[n];

  cache[n] = fn(n);
  return cache[n];
 }
}
const square = memorize(n => n*n) ;
console.log(square(5));
console.log(square(5));

/////  Optional chaning and default value
const optuser ={
    name: "Bhushan",
    address: {
        city: "Nipani"
    }
}

console.log(optuser?.address?.city??"not present"); // Nipani
console.log(optuser?.address?.cit??"not present"); // not present

///// Shallow copy bug
const shallowb ={profile : { name: "A"}};
const shacopy = { ... shallowb};
shacopy.profile.name = "B";
console.log(shallowb.profile.name); // B

///// why try and catch fails with async code - because it is mostly used with async await or promises

try {
 setTimeout(() =>{
   throw new Error("Error");
 },1000)
} catch (error) {
 console.log(error)
}
//index.js:8 Uncaught Error: Error

///// this lost inside callback
const user = {
 name: "bhushan",
 greet() {
  setTimeout(function () {
   console.log(this.name);
  },0);
 },
}
const user1 = {
 name: "bhushan",
 greet() {
  setTimeout(() => {
   console.log(this.name);
  }, 1000)
 }
}
user.greet(); // undefined because this inside callback refers to global object
user1.greet(); // bhushan because arrow function doesn't have its own this

///// Shallow and Deep copy in js 
const original = {
 name : "Bhushan",
 address : {
  city: "Nipani"
 }
}

const shallow = { ...original };
const deep = JSON.parse(JSON.stringify(original));

shallow.name = "Ajay";
deep.name = "Vijay";
original.name = "Ramesh";
shallow.address.city = "Mumbai";
original.address.city = "Pune";
deep.address.city = "Belgaum";

console.log(shallow.name); // Ajay
console.log(original.name); // Ramesh
console.log(deep.name); // Vijay
console.log(shallow.address.city); // Pune
console.log(original.address.city); // Pune
console.log(deep.address.city); // Belgaum

/////
let numArray = [3,6,9];
let numArray2 = [2,4,9]

let na = numArray[0];
let nb = numArray[1];
let nc = numArray[2];
console.log(na,nb,nc);  // 3 6 9

[na1,nb1,nc1] = numArray;
console.log(na1,nb1,nc1);  // 3 6 9

let combine1 = numArray.concat(numArray2);
console.log(combine1); // [3, 6, 9, 2, 4, 9]

let combine2 = [...numArray,...numArray2]
console.log(combine2) // [3, 6, 9, 2, 4, 9]

let setarray = [... new Set([...numArray, ...numArray2])];
console.log(setarray) // [3, 6, 9, 2, 4]