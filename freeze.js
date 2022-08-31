const bottle = {
    color: 'yellow',
    price: 50,
    isClean: true,
    capacity: 1
};
const keys = Object.keys(bottle);
// console.log(keys)

const values = Object.values(bottle);
// console.log(values)

const pairs = Object.entries(bottle);
// console.log(pairs)

const twoDimensionalArray = [[ 'color', 'yellow' ],[ 'price', 50 ],[ 'isClean', true ],[ 'capacity', 1 ]]

console.log(bottle)
Object.seal(bottle)
// Object.freeze(bottle)
delete bottle.isClean;
bottle.price = 1000;
bottle.height = 12;
console.log(bottle)
