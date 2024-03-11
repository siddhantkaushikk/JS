let score = "sid" //it is a string

//ways/syntax to know type of data
//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score) //score is a string and we're converting it into a number, which js will do
//console.log(typeof valueInNumber); //but its type will be NaN i.e not a number because these letters can't be associated to any number
//console.log(valueInNumber);


// "33" => 33 //although "33" is a string but it has numbers only so it can be converted to a number
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "sid"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "sid" => true
//Kind of Truthy falsy


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " sid"

let str3 = str1 + str2
// console.log(str3);


//if string comes first then rest will be treated as string and concatenated
//if string doesn't come first then whatever is before string will first be calculated then concatednated
// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log( (3 + 4) * 5 % 3);

// console.log(true); //true
// console.log(+true);//1
// console.log(+"");//0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
