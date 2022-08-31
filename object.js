// 1. create object using object literals
const player = {};
player.name = 'Small Nirob';
player.speciality = 'batsman';
player.bat = function(){
    console.log('swing your bat');
}
// console.log(player)
// player.bat()

const student = {
    name: 'pandey', 
    job:'khay ande',
    ball: function(){
        console.log('throw the ball')
    },
    salary: 100000
}

// 2. object constructor
const person = new Object();
console.log(person)


// 3. object create method
// const item = Object.create(null);
const atel = Object.create(student);
console.log(atel);

// 4. class
class Person{
    name = 'asim';
    address = 'cumilla';
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(56);
console.log(person1)

// 5. function
function Car(model, price){
    this.model = model;
    this.price = price;
}

const tesla = new Car('elon', 32);