//:::::::::::::::::::::::::Prototypal_Inheritance::::::::::::::::::::::::::::::::::

//:::::::::::::::::Adding Methods to the Prototype::::::::::::::::::::::::

// function Cat(name) {
//     this.lives = 9;
//     this.name = name;

//     this.sayName = function() {
//         console.log(`Meow! My name is ${this.name}`);
//     }
// }
// // const bailey = new Cat('Bailey');
// // console.log(bailey);
// // bailey.sayName();

// Cat.prototype.myTask = function() {
//     console.log(`${this.name} is doing Meow...Meow!`);
// }

// const shelley = new Cat('Shelley');
// console.log(shelley);
// shelley.sayName();
// shelley.myTask();


//:::Aanother example:::

// function Cat(name) {
//     this.lives = 9;
//     this.name = name;
// }

/*added sayName() method in Cat()'s prototype to save memory and keep things DRY
(Don't Repeat Yourself(DRY) is a software development principle, the main aim of which is to reduce repetition of code.)*/

// Cat.prototype.sayName = function() {
//     console.log(`Meow! My name is ${this.name}`);
// }

// Cat.prototype.meow = function() {
//     console.log(`${this.name} is doing Meow...Meow!`);
// }

// const shelley = new Cat('Shelley');
// console.log(shelley);
// shelley.sayName();
// shelley.meow();


//:::::::::::::::Finding Properties and Methods on the Prototype Chain::::::::::

// function Dog(age, weight, name) {
//     this.age = age;
//     this.weight = weight;
//     this.name = name;
// }

// Dog.prototype.bark = function() {
//     console.log(`${this.name} says woof!`);
// }

// const dog = new Dog(2, 55, 'Java');
// console.log(dog);
// console.log(dog.name);
// dog.bark();


//::::::::::::::::::::::::: Replacing the prototype Object :::::::::::::::::::::::

// function Hamster() {
//     this.hasFur = true;
// }

// const waffle = new Hamster();
// let pancake = new Hamster();

// Hamster.prototype.eat = function() {
//     console.log('Chomp chomp chomp!');
// }

// // waffle.eat();
// // pancake.eat();

// //:::replace Hamster's prototype object:::

// Hamster.prototype = {
//     isHungry: false,
//     color: 'brown'
// };

// // console.log(waffle.color);
// // console.log(pancake.isHungry);
// // waffle.eat();

// const muffin = new Hamster();
// console.log(muffin);
// // muffin.eat();
// console.log(muffin.isHungry);
// console.log(muffin.color);


//:::another example:::

// const myArray = [1, 2, 3];

// console.log(myArray.join(''));

// console.log(myArray.constructor);

// console.log(myArray.__proto__.join);

// console.dir(myArray);


//::::::::::::::::::Checking an Object's Properties::::::::::::::::::::::::::

//::::::::hasOwnProperty() method::::::::::::::::

// function Phone() {
//     this.operatingSystem = 'Android';
// }

// Phone.prototype.screenSize = 6;

// const myPhone = new Phone();

// // console.log(myPhone.hasOwnProperty('operatingSystem'));
// const own = myPhone.hasOwnProperty('operatingSystem');
// console.log(own);

// const inherited = myPhone.hasOwnProperty('screenSize');
// console.log(inherited);


//:::::::::::isPrototypeOf() method::::::::

// const rodent = {
//     favoriteFood: 'cheese',
//     hasTail: true
// };

// function Mouse() {
//     this.favoriteFood = 'cheese';
// }

// Mouse.prototype = rodent;

// const ralph = new Mouse();

// const result = rodent.isPrototypeOf(ralph);

// console.log(result);
// console.log(ralph.hasTail);
// console.log(ralph.favoriteFood);

//::::::::::Object.getPrototypeOf() method::::::::::

// const myPrototype = Object.getPrototypeOf(ralph);

// console.log(myPrototype);


//::::::::::::::::::The constructor Property:::::::::::::::::::::::

// function Longboard() {
//     this.material = 'bamboo';
// }

// const board = new Longboard();

// console.log(board.constructor);

// const rodent = {
//     favoriteFood: 'cheese',
//     hasTail: true
// };

// console.log(rodent.constructor);


//:::another example:::

const capitals = {
    California: 'Sacramento',
    Washington: 'Olympia',
    Oregon: 'Salem',
    Texas: 'Austin'
};

console.log(capitals.constructor);

console.log(Object.getPrototypeOf(capitals));

console.log(Object.getPrototypeOf(capitals) === Object.prototype);

