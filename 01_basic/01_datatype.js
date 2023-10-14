"use strict"; // treat all js code as newer version

// alert("hello")  //we are using node.js not browser
console.log("simpi")

let someNum = 22   //string
let someName = String(someNum)
console.log(typeof someName);



let age = 15  //number

let city; //undefined



// object
console.log(typeof "15")

let valueInNumber = Number(age)
console.log(typeof valueInNumber);
console.log(valueInNumber)

let isLoggedIn = 1  //boolean
let booleanValue = Boolean(isLoggedIn)
console.log(booleanValue)

// "" =false------boolean
// "simpi"= true-------boolean


//-------------------operationn-------------
let value = 3
let negValue= -value
console.log(negValue)

console.log(2+2);

let str= "hello"
let str2= "world"
let str3= str+str2
console.log(str3);

// console.log("2" +3);
// console.log("2" +2+2);
// console.log(1 +3 +"3");

console.log(+true);

let gameCounter =100
gameCounter++;
console.log(gameCounter);

let gameCover= 22
++gameCover;
console.log(gameCover);

// ====---------comparision------------

console.log("2" > 1); //string>number

console.log(null>0);
console.log(null ==0);
console.log(null >=0);

console.log("2" === 2);// ===datatype ko check krta hai


// ------------memory-----------

//stack(primitive), Heap(non primitive)
let myYoutube = "simpikumari"
let anothername = myYoutube
anothername = "hello world"
console.log(myYoutube);
console.log(anothername);



let user ={
    email: "abc@google.com",
    upiId: "geywyeuew"
}

let userTwo = user

userTwo.email = "fhehe@hhdej.com"
console.log(userTwo.email);
console.log(user.email);
