const number= 100

const newnumber = new Number(200)
console.log(newnumber);
console.log(newnumber.toString().length);
console.log(newnumber.toFixed(2));

const otherNumber =23.4864
console.log(otherNumber.toPrecision(4));

const hundred=10000
console.log(hundred.toLocaleString());


//-----------math---------------------------

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(5.9));
console.log((Math.random()*10) +1);

const min= 10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);