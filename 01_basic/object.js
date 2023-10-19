console.log("hello")

const jsuser= {
    name: "simpi",
    age: 16,
    email: "jhdh@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["monday", "tuesday"]
}

console.log(jsuser.email);
Object.freeze(jsuser)
jsuser.email ="ggss@gmail.com"
console.log(jsuser);



const tinderUser ={}

tinderUser.id ="gsadg12"
tinderUser.name ="samm"
tinderUser.isLoggedIn= false

console.log(tinderUser);

const regularUser ={
    name:"simpi",
    fullName:{
        userName:{
            fname:"simpi",
            lname: "mehta"
        }
    }
}
console.log(regularUser.fullName.userName.lname);


const obj1 ={1:"a",2:"b"}

const obj2 ={3:"a",4:"b"}

// const obj3 =Object.assign({},obj1,obj2)  //{}traget , objt1or obj2 is source
// console.log(obj3);

const obj3 ={...obj1, ...obj2}
console.log(obj3);