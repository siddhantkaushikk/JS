//side note: JavaScript is a dynamically typed language. This means that variables in JavaScript can hold values 
//of any data type, and the data type of a variable is determined at runtime, not at compile time.


//Data types [Based on how they are stored in memory and how they are passed]:

//-Primitive => They are call by value, jis memory pe data hai wo nahi diya jata, rather copy of this data di jaati hai
// and if you change the copy original data pe effect nhi hota
//7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//using symbol
const id = Symbol('123')
const anotherId = Symbol('123')
//beshak data same daal rahe ho dono me "123", par as symbol ka use unique banane ke liye hota hai dono lines me symbol alag chiz/type return karega
//to confirm
console.log(id === anotherId);

// const bigNumber = 3456543576654356754n




//-Reference or Non Primitive => asli memory jaha data stored hai that is shared, changes are reflected
// Array, Objects, Functions

//array
const heros = ["shaktiman", "naagraj", "doga"];

//object, jo bhi curly brarces me likha ho, key value pair me hote hai.. object ko variable me daala hai yaha
let myObj = {
    name: "hitesh",
    age: 22,
}

//functions
//jo function se return hoke aaya yaha use ek variable me store kiya
const myFunction = function(){
    console.log("Hello world");
}

//note:
console.log(typeof score); //number
console.log(typeof isLoggedIn); //bool
console.log(typeof outsideTemp); //null ka type object ayega
console.log(typeof userEmail); //undefined ka type undefined ayega

console.log(typeof myFunction); //datatype is function
