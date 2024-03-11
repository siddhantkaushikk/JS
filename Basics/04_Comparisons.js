//these are simple comparisons bcoz both sides are numbers
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//both sides are no numbers, conversions happens, but still avoided
// console.log("2" > 1);
// console.log("02" > 1);

//these types of things can give unpredicatble results
console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true // but why is this true and none of above ones are true
//but we can understand the working of this above section:
//the reason is that equality == and comparisons < > <= >= work differently in JS
//comparisons converts null to a number, treating it as 0
//that is why null>=0 is true and null>0 is false

//these will be all false
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === this is strict check which not only checks the value but the type also

console.log("2" === 2);