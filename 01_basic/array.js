const myArr =[0,1,2,3,true,"simpi"]
const myHero= ["saktiman","xyz"]
const myArr2= new Array(1,2,3)
// console.log(myArr2[0]);


// array method


// myArr.push(5)
// myArr.push(6)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.indexOf(9));

const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);


// slice splice

// console.log(("A", myArr));
const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B", myArr);



const myn2 = myArr.splice(1,3)
// console.log("C", myArr);
// console.log(myn2);




const marvel_heroes= ["thor", "ironman", "spiderman"]
const dc_heroes= ["superman","flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);
//  const allHeroes= marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const all_new_heroes= [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);

const another_array= [1,,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array= another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("simpi"));

console.log(Array.from("simpi"));
console.log(Array.from({name:"simpi"}));


let score1= 100
let score2 = 200
let score3= 300
console.log(Array.of(score1, score2, score3));

