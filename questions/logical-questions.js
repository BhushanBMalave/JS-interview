
///1. Find largest and smallest number in an array
let data = [10,20,30,9,11];

let l =data[0];
let s = data[0];

for(let i =0;i<data.length;i++){
    if(data[i]>l){
        l = data[i];
    }
    if(data[i]<s){
        s = data[i];
    }
}
console.log("Largest is ",l);
console.log("Smallest is ",s);


/// 2. Reverse a array of numbers without using reverse method
let arrr = [1, 2, 3, 4, 5];
let reversedArr = [];

for (let i = arrr.length - 1; i >= 0; i--) {
    reversedArr.push(arrr[i]);
}
console.log("Reversed Array is ", reversedArr);

/// 3. Check if a number is prime or not
let num = 29;
let isPrime = true;
if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}

/// 4. Calculate the factorial of a number
let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log("Factorial of " + number + " is " + factorial);

/// 5. Find the sum of all elements in an array
let numbers = [1, 2, 3, 4, 5];
let sum = 0; 
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
const su = numbers.reduce((sum,num) => sum+=num,0);
console.log("Sum of all elements is ", sum);

/// 6. Find the average of numbers in an array
let nums = [10, 20, 30, 40, 50];
let total = 0;
for (let i = 0; i < nums.length; i++) {
    total += nums[i];
}
console.log("Average of numbers is ", total / nums.length);

/// 7. Check if a string is a palindrome
let strP = "racecar";
let reversedStr = "";
for (let i = strP.length - 1; i >= 0; i--) {
    reversedStr += strP[i];
}
if (strP === reversedStr) {
    console.log(strP + " is a palindrome.");
} else {
    console.log(strP + " is not a palindrome.");
}

/// 8 a. Find the second largest number in an array
let array = [12, 35, 1, 10, 34, 1];
let largest = -Infinity;
let secondLargest = -Infinity;
for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        secondLargest = largest;
        largest = array[i];
    } else if (array[i] > secondLargest && array[i] !== largest) {
        secondLargest = array[i];
    }
}
console.log("Second largest number is ", secondLargest);

/// 8 b. Find the second lowest number in an array
let array = [12, 35, 1, 10, 34, 1];
let lowest = Infinity;
let secondlowest = Infinity;
for (let i = 0; i < array.length; i++) {
    if (array[i] < lowest) {
        secondlowest = lowest;
        lowest = array[i];
    } else if (array[i] < secondlowest && array[i] !== lowest) {
        secondlowest = array[i];
    }
}
console.log("Second lowest number is ", secondlowest); //10

/// 9. Remove duplicates from an array
let arrWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = []; 
for (let i = 0; i < arrWithDuplicates.length; i++) {
    if (!uniqueArr.includes(arrWithDuplicates[i])) {
        uniqueArr.push(arrWithDuplicates[i]);
    } 
}
console.log("Array without duplicates is ", uniqueArr);

let uniuearr = [...new Set(arrWithDuplicates)];
console.log(uniuearr);

const newarr = [];
const obj = {}
for( i = 0; i< arr.length; i++){
 if(!obj[arr[i]]){
  obj[arr[i]] = true;
  newarr.push(arr[i]);
 }
}
console.log(newarr)

/// 10. flatterns an nested array without using flat method
let arr = [2,4,6, [10,20,30,[100,200,300]]];
const arrayFlattern = (array) => {
 let flatarr = [];
 for(let i =0; i < array.length; i++){
  if(Array.isArray(array[i])){
   flatarr = flatarr.concat(arrayFlattern(array[i]));
  } else {
   flatarr.push(array[i])
  }
 }
 return flatarr;
}

console.log(arrayFlattern(arr));
// output: [2,4,6,10,20,30,100,200,300]

/// 11. flatterns an nested object without using flat method
let obj = {
 name: "John",
 age: 30,
 deperment: {
  depName: "IT",
  employee:{
   empId: 101,
   empName: "David"
  }
 }
}

const flattenObject = (obj, result = {}) => {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject(obj[key], result);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
};

console.log("Flattened Object:", flattenObject(obj));
// Output: 
// Flattened Object:  { name: 'John', age: 30, depName: 'IT', empId: 101, empName: 'David' }

/// 12. Convert Object Keys to Array | 3 Ways 
let obj = {
 name: "John",
 age: 30,
 city: "New York"
}

let keysArray1 = Object.keys(obj);
console.log("Keys using Object.keys(): ", keysArray1); // ["name", "age", "city"]  

let keysArray2 = [];
for (let key in obj) {
 keysArray2.push(key);
}
console.log("Keys using for...in loop: ", keysArray2); // ["name", "age", "city"]

let keysArray3 = [];
Object.entries(obj).forEach(([key, value]) => {
 keysArray3.push(key);
});
console.log("Keys using Object.entries(): ", keysArray3); // ["name", "age", "city"]

/// 13.  occurence of element in an array

let occarray = [ 1,2,3,1,4,2,3,5,6,7];

let obj ={}

for(let i = 0; i < occarray.length; i++){
 obj[occarray[i]] = obj[occarray[i]] ? obj[occarray[i]] + 1 : 1;
}

console.log(obj) // { '1': 2, '2': 2, '3': 2, '4': 1, '5': 1, '6': 1, '7': 1 }

/// 14 Move All Zeros to End of Array

let arr = [0, 1, 0, 3, 12];
let index = 0;

for(let i = 0 ; i < arr.length; i++){
 if(arr[i] !== 0){
  arr[index] = arr[i];
  index++;
 }
}
 for( i = index; i < arr.length; i++){
  arr[i] = 0;
 }
console.log(arr); // [1,3,12,0,0]


/// 15 Count Words in a String in JavaScript 

let str = 'Hi how  .  ,   are you';
let count = 0;
let isWord = false;

for(let i=0; i < str.length; i++){
  // Check if character is a letter
  if (/[a-zA-Z]/.test(str[i])) {
    if (!isWord) {
      count++;
      isWord = true;
    }
  } else {
    isWord = false;
  }
}

console.log(count); // 4

/// 16 Count the frequency of each element in string

let str1 = "Hi hello world, how are you. Hope you are learning."
let frequency = {}

for( let s of str1){
 if(/[a-zA-Z]/.test(s)){
   frequency[s] = (frequency[s] || 0) +1;
 }
}
console.log(frequency)

/// 17 first non repeated char

let str3 = 'aabbcdeddfa';

function firstNonRepeatedChar(str) {
  for(let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    } 
  }
  return null;
}
console.log(firstNonRepeatedChar(str3));

/// 18  default parameters vs nullish coalescing operator

function showMarks(marks){
  msg = marks || "No marks available";
  msg1 = marks ?? "No marks available";
  console.log(msg, " ", msg1);
}

console.log(showMarks(90)); // 90 90
console.log(showMarks()); // No marks available No  marks available
console.log(showMarks(0)); // No marks available 0 

/// 19 count vowels in a string

let str4 = "The happy fox jumps over the lazy dog";
let vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(str) {
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
   }
  return count;
}

console.log(countVowels(str4)); // 11

/// 20  arguments object and strict mode
"use strict";
function add(a, b) {
    a=10;
    b=20;
    return arguments[0] + arguments[1];
}

console.log(add(5, 15)); // Outputs: 20 , with 'use strict' it will still output 20 because arguments object is not affected by parameter reassignment in strict mode. else it would output 30 without 'use strict'.

/// 21 var scoping 

function show(){
 {
  var a =10;
  var b =20;
 }
 (function(){
  var c =30;
  var d =40;
 })();
 console.log(`A: ${a}, B: ${b}`);
 console.log(`C: ${c}, D: ${d}`);
}
show(); // A: 10, B: 20  Uncaught ReferenceError: c is not defined 

/// 22 comma operator vs automatic semicolon insertion

function interviewTip1(){
 return x= 1, [], {};
}
function interviewTip2(){
    return
    { x= 1, [], {};}
}
console.log(interviewTip1()); // {} because of comma operator
console.log(interviewTip2()); // undefined because of automatic semicolon insertion

/// 23 Filter Even and Odd Numbers from an Array
let data2 = [34, 67, 23, 89, 2, 90, 11, 5];

const even = data2.filter(num => num % 2 === 0);
console.log("Even numbers are ", even);

const odd = data2.filter(num => num % 2 !== 0);
console.log("Odd numbers are ", odd);

/// 23 count of fruits
const fruits = ['apple', 'banana', 'mango', 'banana', 'orange', 'apple'];

const result = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {})

console.log(result); // {apple: 2, banana: 2, mango: 1, orange: 1}

/// 24  JSON
const obj5 = {
 name: 'Abc',
 age: 25,
 city: "Mumbai",
}
const jsonString = JSON.stringify(obj5);
console.log(jsonString); // {"name":"Abc","age":25,"city":"Mumbai"}
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj); // {name: 'Abc', age: 25, city: 'Mumbai'}

/// 25 Remove duplicate char from string
let word = 'hhelllooo';

function removeDuplicateLetters(word){
 let obj = {}
 let newWord ="";
 
 for(let char of word){
  if(!obj[char]){
   newWord += char;
   obj[char] = true;
  }
 }
 return newWord;
}

console.log(removeDuplicateLetters(word))

/// 26  Object to Array and Array to object
const arr4 = ['ab','bc','cd'];
const arrtoobj = arr4.reduce((obj, item, index)=>({
 ...obj,[index] : item
}),{})
console.log(arrtoobj) // {0: 'ab', 1: 'bc', 2: 'cd'}

function objtoarr(obj){
 let a =[];
 for(let key in obj){
  a.push(obj[key])
 }
 return a
}
const obj4 = objtoarr(arrtoobj)
console.log(obj4) //  ['ab', 'bc', 'cd']

/// 27 Check if all elements are of same type

const arrtype = [1,2,"3", 4, 5];

const typeA = arrtype.every(item => {
  console.log(item)
  return typeof item === typeof arrtype[0];
})

console.log(typeA); //1 2 '3' false . every runs till we get true for condition.

/// 28 Check if object is empty
const empObj = {};
console.log(Object.keys(empObj).length === 0); // true

/// 29 Object -> Entries (key- value array)
const objuser = {name:"mohit", age:30};
console.log(Object.entries(objuser)); // [[ "name","mohit"],["age",30]]

/// 30 Entries to Object or MAP to object
const entries = [["name","Mohit"],["age",25]]
console.log(Object.fromEntries(entries)); //{name: 'Mohit', age: 25}

/// 31 Sort numbers correctly
const sortnum = [100,20,50,1];
sortnum.sort( (a,b) => a-b);
console.log(sortnum) // [1, 20, 50, 100]

/// 32 String to Array
const str = "youtube";
const strarr = []
const strarr2 = [...str]
for(let char of str){
  strarr.push(char)
}
console.log(strarr, strarr2) //  ['y', 'o', 'u', 't', 'u', 'b', 'e']

/// 33 Numbers to Array
const numberarr = 12345;
console.log([...numberarr+""]) // ['1', '2', '3', '4', '5']

/// 34 Group items in array by property
const users =[
 {name : 'abc1', city : 'aaa'},
  {name : 'abc2', city : 'bbb'},
   {name : 'abc3', city : 'aaa'},
    {name : 'abc4', city : 'bbb'},
]

const groupbycity = users.reduce((acc, user) =>{
 (acc[user.city] = acc[user.city] || []).push(user)
 return acc;
},{})
console.log(groupbycity) /*{
    "aaa": [
        {
            "name": "abc1",
            "city": "aaa"
        },
        {
            "name": "abc3",
            "city": "aaa"
        }
    ],
    "bbb": [
        {
            "name": "abc2",
            "city": "bbb"
        },
        {
            "name": "abc4",
            "city": "bbb"
        }
    ]
} */

/// 35 find the most frequent or repeated element

const a = [1, 2, 2, 3, 3, 3];

const freq = {};
let maxCount = 0;
let mostFrequent;

for (let num of a) {
  freq[num] = (freq[num] || 0) + 1;

  if (freq[num] > maxCount) {
    maxCount = freq[num];
    mostFrequent = num;
  }
}

console.log(mostFrequent); // 3

/// 36 Filter out falsy value

const falsyarr = [ 1,0,null,'a',"",3,undefined];
 const clean = falsyarr.filter(Boolean); // 1
 for(let m of falsyarr){ //2
    if(m) clean.push(m);
 }
 console.log(clean) //  [1, 'a', 3]

/// 37 seprate even and odd numbers in an array

let numbers123 = [1,3,2,4,5,6,7,8,9]

const separr={even:[],odd:[]};

for(let num of numbers123){
 if(num % 2 === 0) { separr.even.push(num)} else{ separr.odd.push(num)}
}
console.log(separr)

/// 38 first non - reptative enelemnt in an array
const reparr = [1,1,2,3,3,4,5];
const fre ={}
for(let num of reparr){
 fre[num] = (fre[num] || 0) + 1;
}

for(let num of reparr){
 if(fre[num] === 1) 
  {
   console.log(num); //2
   break;
  }
}

/// 39 Remove the in-place element from an array

let inPlace = [1,2,3,4,5]
let remove = 3;
for(let i =0; i<= inPlace.length; i++){
 if(inPlace[i] === remove){
  inPlace.splice(i,1);
  break;
 }
}
console.log(inPlace)

/// 40 check if array is sorted

let sortedarr = [1,2,3,4,8,5]
let sorted = true;

for(let i = 1; i< sortedarr.length; i++){
 if(sortedarr[i] < sortedarr[i-1]){
  sorted = false;
  break;
 }
}
console.log(sorted); // false

/// 41 find missing number

const misarr = [1,2,4,5];
const n = 5;
let total1 = (n*(n+1))/2;
let sum1 = misarr.reduce((a,b) => a + b)
console.log(total1-sum1) // 3

/// 42 Rotate Array by K Position

const karr = [1,2,3,4,5,6,7];
const k = 3;
const resultk = karr.slice(k).concat(karr.slice(0,k));
console.log(resultk) // [4, 5, 6, 7, 1, 2, 3]

/// 43 reverse the words in the string

const string12 = "hi how are you";
console.log(string12.split(" ").reverse().join(" "));

let result = "";
const words = string12.split(" ");
for( let i = words.length - 1; i >= 0; i--){
 result = result + words[i] + " ";
}
console.log(result)

/// 44 Capitalize the first letter of every word.

let capStr = "hi how are you";
const resultcap = capStr.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
console.log(resultcap);

/// 45 Union of two array

let a = [1,2,3];
let b = [3,4];
console.log([...new Set([...a,...b])])

let union = [];

for (let num of [...a, ...b]) {
  if (!union.includes(num)) {
    union.push(num);
  }
}

console.log(union); // [1, 2, 3, 4]

/// Intersection of two array

const intersection = a.filter(x => b.includes(x)); // [3]

/// 46 chunk array
const cArr = [1,2,3,4,5];
const size = 2;
const chunk = []

for(let i =0; i < cArr.length; i+=size){
 chunk.push(cArr.slice(i,i+size))
}

console.log(chunk) // [[1,2],[3,4],[5]]

/// 47 swaping of numbers
let swap1 = 10;
let swap2 = 20;

swap2 = swap1 + swap2;
swap1 = swap2 - swap1;
swap2 = swap2 - swap1;

[swap2,swap1] = [swap1,swap2];
console.log(swap1,swap2) // 10,20

/// 48 Convert string to lowercase or uppercase

let info = "Hi how, Are yOu";
console.log(convertToLowercase(info));
console.log(converToUppercase(info));
let code = 'azAZ09'
console.log(code.charCodeAt(0));  // 97
console.log(code.charCodeAt(1));  // 122
console.log(code.charCodeAt(2));  // 65
console.log(code.charCodeAt(3));  // 90
console.log(code.charCodeAt(4));  // 48
console.log(code.charCodeAt(5));  // 57


function convertToLowercase(str){
 let result="";
 for(let i in str){
  let code = str.charCodeAt(i);
  if(code >= 65 && code <= 90){
    result += String.fromCharCode(code+32);
  } else {
   result += str[i]
  }
 }
 return result;
}

function converToUppercase(str){
 let result="";
 for(let i in str){
  let code = str.charCodeAt(i);
  if(code >= 97 && code <= 122){
    result += String.fromCharCode(code-32);
  } else {
   result += str[i]
  }
 }
 return result;
}

/// 49 Check Anagram in JavaScript

let ana1 = "slieyt";
let ana2 = "listen";

function checkAnagram(str1,str2){
  const format = str => 
    str.toLowerCase().split("").sort().join("");

  return (format(str1) === format(str2)) ?
    console.log("Anagram") :
    console.log("Not Anagram");

}

function checkAnagram2(str1,str2){
  let freq= {};

  if(str1.length !== str2.length) return console.log("Not Anagram");

  for(let i =0; i< str1.length; i++){
    freq[str1[i]] = (freq[str1[i]] || 0) + 1;
  }

  for(let s in str2){
    if(!freq[s]) return console.log("Not Anagram");
    freq[s]--;
  }
  return console.log('Anagram');
}

checkAnagram(ana1,ana2)
checkAnagram2(ana1,ana2)

/// 50 Pig Latin

let pig = "cheese";
word.substring
function pigLatin(str) {
  const vowels = ['a','e','i','o','u'];
 
   for(let i = 0; i <= str.length; i++){
    if(vowels.includes(str[i])){
      const substr1 = str.substring(0,i);
      const substr2 = str.substring(i);
      return substr2 + substr1 + "ay";
    }
   }
}

console.log(pigLatin(pig));

/// 51 Two sum problem

const arr = [1,7,11,5,2];
const target = 18;
let map ={}

for(let i = 0; i < arr.length; i++){
 let diff = target - arr[i];
 if(map[diff] !== undefined){
   console.log(map[diff],i); // 1,2
 }
 map[arr[i]] = i;
}

/// 52 Counting Bits

function countingBits(n) {
  const binary = n.toString(2); // convert to binary string 
  console.log(binary); // 10111
  let result = [];
  let count = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      count++;
      result.push(i + 1); // positions start from 1
    }
  }

  return [count, ...result];
}
console.log(countingBits(23));

/// 53 Romanizer

function romanizer(numbers) {
  const values = [
    1000, 900, 500, 400,
    100, 90, 50, 40,
    10, 9, 5, 4, 1
  ];

  const symbols = [
    "M", "CM", "D", "CD",
    "C", "XC", "L", "XL",
    "X", "IX", "V", "IV", "I"
  ];

  return numbers.map(num => {
    let roman = "";

    for (let i = 0; i < values.length; i++) {
      while (num >= values[i]) {
        roman += symbols[i];
        num -= values[i];
      }
    }

    return roman;
  });
}

console.log(romanizer([1, 49, 23])) // ['I', 'XLIX', 'XXIII']

/// 54 classic frequency / palindrome feasibility problem

function minDeletionsToMakePalindrome(s) {
  const freq = {};
  
  for (const ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  let oddCount = 0;
  for (const count of Object.values(freq)) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }

  return Math.max(0, oddCount - 1);
}

console.log(minDeletionsToMakePalindrome("adssdsc")); // 2
console.log(minDeletionsToMakePalindrome("kjdnk"));  // 2
console.log(minDeletionsToMakePalindrome("aaabcceqd")); //3

/*✅ Strategy
Count frequency of each character.
Count how many characters have odd frequency → oddCount
Minimum deletions required:
max(0, oddCount - 1) */


/// 55  classic sliding window / two-pointers problem

function maximumRequests(window, timestamps) {
  let left = 0;
  let maxCount = 0;

  for (let right = 0; right < timestamps.length; right++) {
    while (timestamps[right] - timestamps[left] > window - 1) {
      left++;
    }
    maxCount = Math.max(maxCount, right - left + 1);
  }

  return maxCount;
}

window = 3
timestamps = [1, 2, 3, 8, 10]

console.log(maximumRequests(window,timestamps)) // 5

/// 56 return unqiue elements from an array.

let arr1 = [1,2,3];
let arr2 = [2,3,4];
let arr3 = [3,4,5];
let arr4 = [5,6,7];

function unqiueElements(...arr){
    const uniqueArr = [];
    const freq = {};
    const flatarr = flatArray(arr);
    for(let i = 0; i < flatarr.length; i++){
        freq[flatarr[i]] = (freq[flatarr[i]] || 0 ) + 1;
    }
    for(let i in freq){
        if(freq[i] === 1){
            uniqueArr.push(i);
        }
    }
    return uniqueArr;
}

const flatArray = (arr) => {
    let flatarray = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            flatarray = flatarray.concat(flatArray(arr[i]));
        } else {
            flatarray.push(arr[i]);
        }
    }
    return flatarray;
}

console.log(unqiueElements(arr1,arr2,arr3,arr4));

///  57 find the longest string in the sentence.

const sent = "I love Javascript Programming hsdkjdbdsbkjdbdsbd";

function longestString(sent){
 const words = sent.split(" ");
 let longestStr = words[0];

 for( let str of words){
  if(str.length > longestStr.length){
   longestStr = str;
  }
 }
 return longestStr;
}
console.log(longestString(sent)); // hsdkjdbdsbkjdbdsbd