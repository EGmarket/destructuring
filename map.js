/* 1. loop chalaichi
2. element diye function k call korsi
3. result ekta array er moddhay push korsi

r ai ato gulo kaj chaile amra simple map method diye korte easily in one line */

const numbers = [4, 5, 56, 77, 11, 23, 89]
const output2 = [];

// creating function 

const doubleIt = num => num * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
console.log(output2);

// Mapping on array
const output = numbers.map(doubleIt);
console.log(output)

/* what is map or what is the work of map?

map porttekta element er opor loop chalay tarpor oi element diye function call kore and jei result pay seta  kono ekta array te push kore, WOW How Much Simple? Tai na? yes Tai , loop,function and push ai kaj gulo eka e map function ti kore dicchay */