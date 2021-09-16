// Map String Array, array of obj map, foreach

const friends = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul']
const fLength = friends.map(f => f.length);
console.log(fLength)

const products = [
    { name: 'water bottle', price: 50, color: 'silver' },
    { name: 'Mobile Phone', price: 15050, color: 'Black' },
    { name: 'Smart Watch', price: 1050, color: 'Black' },
    { name: 'Books', price: 150, color: 'blue' },
    { name: 'Monitor', price: 1500, color: 'white' },
]

const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);
products.forEach(product => console.log(product))
console.log(productNames, productPrices, products)