//::::::::::::::::Prototypal Inheritance: Subclasses::::::::::::::::::::::::::::::
//Subclass>Inheritance via Prototype> The secret Link::::::::::::::

// const bear = {
//     claws: true,
//     diet: 'carnivore'
// };

// function PolarBear() {

// }

// PolarBear.prototype = bear;

// const snowball = new PolarBear();
// console.log(snowball);

// snowball.color = 'white';
// snowball.faviriteDrink = 'cola';

// console.log(snowball);

// console.log(snowball.claws);
// console.log(snowball.diet);

// /*secretr link*/

// console.log(snowball.__proto__);
// console.log(snowball.__proto__ === bear);
// console.log(snowball.__proto__ === PolarBear.prototype);
// console.log(PolarBear.prototype === bear);

// console.log(snowball.__proto__.diet);

// console.log(Object.getPrototypeOf(snowball));

// PolarBear.prototype.print = function() {
//     console.log(`I am ${this.color}!`);
// }
// snowball.print();
// console.log(snowball.__proto__);
// console.log(PolarBear.prototype);
// console.log(PolarBear.prototype.print === snowball.__proto__.print);

// snowball.__proto__.addProps = 'added property into parent object';
// console.log(PolarBear.prototype);
// console.log(snowball.__proto__);
// console.log(Object.getPrototypeOf(snowball));
// console.log(bear.isPrototypeOf(snowball));
// console.log(snowball.hasOwnProperty('addProps'));



//:::::::::::::::::::::::::::::::::::Object.create() method::::::::::::::::::::::::::

// const mammal = {
//     vertebrate: true,
//     earBones: 3
// };

// const rabbit = Object.create(mammal);

// console.log(rabbit);
// console.log(rabbit.__proto__ === mammal);
// console.log(rabbit.__proto__);
// console.log(Object.getPrototypeOf(rabbit));
// console.log(mammal.isPrototypeOf(rabbit));

// console.log(rabbit.vertebrate);
// console.log(rabbit.earBones);


// rabbit.introduce = function(name) {
//     console.log(`I am ${name} and my earbones are ${this.earBones}!`);
// }
// console.log(rabbit);
// rabbit.introduce('Rabbit');


//:::::all in action::::

// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.walk = function() {
//     console.log(`${this.name} is walking!`);
// }

// function Cat(name) {
//     Animal.call(this, name);
//     this.lives = 9;
// }

// Cat.prototype = Object.create(Animal.prototype);
// // console.log(Cat.prototype);

// Cat.prototype.constructor = Cat;

// Cat.prototype.meow = function() {
//     console.log('Meow, meow, meow!');
// }
// // console.log(Cat.prototype);


// const bambi = new Cat('Bambi');
// console.log(bambi);
// // console.log(bambi.constructor);

// bambi.meow();
// bambi.walk();
// console.log(bambi.name);


//:::another example:::

function Parent() {

}
  
  function Child() {

}
Child.prototype = Object.create(Parent.prototype);


const child = new Child();
console.log(child instanceof Parent);//return true
console.log(child.constructor);
console.log(child instanceof Child);//also return true


const child2 = new Child();
Child.prototype.constructor = Child;
console.log(child2 instanceof Parent);//return true
console.log(child2.constructor);


console.log(Parent.prototype.isPrototypeOf(child2));
console.log(Parent.prototype.isPrototypeOf(child));

console.log(Object.getPrototypeOf(child));
console.log(Object.getPrototypeOf(child2));
  
