let myname="siddhant"
let anothername=myname
//primitives stack pe bante hai, so copy pass hui hai myname ki into anothername
console.log(myname);
console.log(anothername);


let myobj={
    email:"hello@gmail.com",
    upi:"hehe@fyl"
}

let yourobj=myobj

console.log(myobj);
console.log(yourobj);

yourobj.email="hacked@gmail.com";
//non primitives heap pe bante hai, so yourobj ko myobj ki copy nahi balki reference mili, so poitning to same memory, agar yourobj me change kiya to yourobj pe bhi reflect hoga
console.log(myobj);
console.log(yourobj);