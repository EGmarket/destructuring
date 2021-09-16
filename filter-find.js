// Filter er kiso check point thakbe sekhan theke kiso chk kore kore nibe
const numbers = [5, 13, 7, 41, 29, 79, 5, 19]
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers)

/* filter er kaj holo filter moddhay ekta condition thakbe r jara e ai condition full fillup korebe tader kei sodhu nibe onno r ekta array er moddhay */

// find expensive product price 

const products = [
    { name: 'water bottle', price: 50, color: 'silver' },
    { name: 'Mobile Phone', price: 15050, color: 'Black' },
    { name: 'Smart Watch', price: 1050, color: 'Black' },
    { name: 'Books', price: 150, color: 'blue' },
    { name: 'Monitor', price: 1500, color: 'white' },
]

const expensive = products.filter(p => p.price > 1000);
const blacks = products.filter(p => p.color == 'Black')
const white = products.find(p => p.color == 'white')
    // console.log(`Expensive product List are ${expensive}`)
console.log(expensive, blacks, white)

// Filter returning an array r find returning an object