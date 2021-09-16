// declare variable based on the name of an obj property

const myObj = { x: 2, y: 12, z: 200, a: 25, b: 40 }
const { x, b, y } = myObj;

// destructuring in array
const [p, q] = [45, 50, 20, 10]
console.log(p, q)

const { sky, color, money } = { sky: 'blue', soil: 'Mati', color: 'red', money: 1000 }
console.log(sky)

// chaining

const company = {
    name: 'EGMARKET',
    ceo: { id: 1, name: 'Asad', food: 'chicken' },
    web: { work: 'Web developement', employee: 10, framework: 'react', tech: { first: 'HTML & CSS', second: 'JavaScript' } }
}

/* jodi kokhon kono propertyer er khetre undefine chole ase taholy tokhon optional chaing korte hobe, how to make optional chaining ? just put a what sign(after the property) ex.company ? .age ? .year ? .adress

r optional chaining ta tokhon e kaj korbe jokhon kono ekta value undefine thake otherwise it will woking fine */