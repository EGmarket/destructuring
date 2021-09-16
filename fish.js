// destructuring

const fish = {
    id: 50,
    name: 'King Hilsha',
    price: 2000,
    phone: '01319917359',
    address: 'Munshigonj',
    dress: 'Silver'
}

console.log(`The Name of Fish is: ${fish.name} and its price is : ${fish.price}`)

// updated destructuring method is 

const { phone, price, dress, id } = fish;

console.log(`id is ${id} and phone is ${phone} his price is : ${price} and his Dress is ${dress}`)

// complex case 

const company = {
    name: 'EGMARKET',
    ceo: { id: 1, name: 'Asad', food: 'chicken' },
    web: { work: 'Web developement', employee: 10, framework: 'react', tech: { first: 'HTML & CSS', second: 'JavaScript' } }
}

// getting data is simple way 

const work = company.web.work;
const framework = company.web.framework;
const technology = company.web.tech.first;
console.log(`They worked on ${work} by using ${framework} more technolgy ${technology}`)

// destructuring

const { work1, framework1 } = company.web;
const { name, food } = company.ceo;
const { first, second } = company.web.tech;
console.log(`Name of CEO ${name} and food is: ${food}`)