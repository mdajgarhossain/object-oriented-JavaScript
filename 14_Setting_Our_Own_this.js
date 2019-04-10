//:::::::::::::::::::::::::::Setting Our Own `this`::::::::::::::::::::::::::::::::::::

//:::::::::::::::::::More Ways to Invoke Functions:::::::::::::::::

//:::::::::::call() Method:::::::::::::::

// function multiply(n1, n2) {
//     return n1 * n2;
// }
// console.log(multiply(3, 4));
// console.log(multiply.call(global, 3, 4));
// console.log(multiply.call(window, 3, 4));

// function add(x, y, z) {
//     return x + y + z;
// }
// console.log(add(5, 5, 5));
// // console.log(add.call(global, 5, 5, 5));
// console.log(add.call(window, 5, 5, 5));


// function division(n1, n2) {
//     console.log(n1 / n2);
// }
// division(49, 7);
// division.call(window, 49, 7);


/*Using call() to invoke a method allows us to "borrow" a method from one object -- 
then use it for another object! */

// const mockingbird = {
//     title: 'To kill a mockingbird',
//     describe: function() {
//         console.log(`${this.title} is a classic novel!`);
//     }
// };
// mockingbird.describe();

// const pride = {
//     title: 'Pride and Prejudice'
// };
// // console.log(mockingbird.describe);

// mockingbird.describe.call(pride);

/*NOTE:***call() is very effective if you're looking to invoke a function in the scope of the first argument passed into it.*/



//:::::::::::apply() Method:::::::::::::::

// function multiply(n1, n2) {
//     return n1 * n2;
// }
// console.log(multiply(3, 4));
// // console.log(multiply.apply(global, [3, 4]));
// console.log(multiply.apply(window, [3, 4]));


// const mockingbird = {
//     title: 'To kill a mockingbird',
//     describe: function() {
//         console.log(`${this.title} is a classic novel!`);        
//     }
// };

// const pride = {
//     title: 'Pride and Prejudice'
// };

// mockingbird.describe.apply(pride);


// const maths = {
//     title: 'This is a math object',
//     add: function(n1, n2, n3) {
//         console.log(`${this.title} and result is: ${n1 + n2 + n3}`);
//     }
// };

// const physics = {
//     title: 'This is a physics object',
// };

// maths.add.apply(physics, [3, 3, 3]);

/*NOTE:***Rather than passing arguments one-by-one, separated by commas -- apply() 
takes the function's arguments in an array. Without this difference, both approaches
(call() & apply()) produce the same result. */


//::::::::::::::::::Choosing One Method Over the Other:::::::::::::::::::

// const cat = {
//     name: 'Bailey'
// };

// function sayHello(message) {
//     console.log(`${message} ${this.name}!`);
// }

// sayHello.call(cat, 'Nice to see you');

// sayHello.apply(cat, ['Hello']);

/***Note: call() may be limited if you don't know ahead of time the number of arguments 
that the function needs. In this case, apply() would be a better option, since it 
simply takes an array of arguments */

// const Ajgar = {
//     name: 'Ajgar',
//     introduce: function() {
//         console.log(`Hi, my name is ${this.name}!`);
//     }
// };

// const Jewel = {
//     name: 'Jewel',
//     introduce: function() {
//         console.log(`Hi there, I am ${this.name}!`);
//     }
// };

// const Karim = {
//     name: 'Karim'
// };

// Ajgar.introduce.call(Jewel);
// Jewel.introduce.call(Ajgar);
// Jewel.introduce.apply(Karim);



// const Tiger = {
//     name: 'Tiger'
// };

// function introduce(language) {
//     console.log(`Hello, I am ${this.name} and my favorite language is ${language}! :)`);
// }

// introduce.call(Tiger, 'JavaScript');
// introduce.apply(Tiger, ['JavaScript']);


//::::::::::::::::::Callbacks and 'this'::::::::::::::::::::::

// const person = {
//     name: 'Bazlu',
//     print: function() {
//         console.log(this);
//         setTimeout(function() {
//             console.log(this);
//             console.log(`My name is ${this.name}!`);
//         }.bind(this), 2000)  
//     }
// };

// function callback() {
//     console.log(this);
//     console.log(`My name is ${this.name}!`);
// }
// callback.call(person);
// person.print();


// function invokeTwice(cb) {
//     cb();
//     cb();
// }

// const dog = {
//     age: 5,
//     growOneYear: function() {
//         this.age += 1;
//     }
// };

// dog.growOneYear();
// console.log(dog.age);

// invokeTwice(dog.growOneYear);
// console.log(dog.age);


//:::::::::::::::::::::Saving 'this' with an Anonymous Closure:::::::::::::

// function invokeTwice(cb) {
//     cb();
//     cb();
// }

// const dog = {
//     age: 5,
//     growOneYear: function() {
//         this.age += 1;
//     }
// };

// dog.growOneYear();
// console.log(dog.age);

// invokeTwice(function() {
//     dog.growOneYear();
// });
// console.log(dog.age);


//:::::::::::::::::::::Saving 'this' with bind():::::::::::::::::::::::::::

// function invokeTwice(cb) {
//     cb();
//     cb();
// }

// const dog = {
//     age: 5,
//     growOneYear: function() {
//         this.age += 1;
//     }
// };

// invokeTwice(dog.growOneYear);
// console.log(dog.age);


// const myGrow = dog.growOneYear.bind(dog);

// invokeTwice(myGrow);
// console.log(dog.age);


const driver = {
    name: 'Jewel',
    displayName: function() {
        console.log(`My name is ${this.name}!`);
    }
};

const car = {
    name: 'Ajgar'
};

const driverName = driver.displayName.bind(car);

driverName();

/***NOTE: bind() returns a new function with 'this' bound to a specific object, allowing us to call it as a regular function. */


//::::::::::call(), apply() and bind() all in action::::::::::::::::::::

function add(a, b) {
    return (a + b) * this.value;
}

const obj1 = {
    value: 5
};

const obj2 = {
    value: 7
};

const result = add.call(obj1, 2, 3);  //call() method
console.log(result);

const result2 = add.apply(obj2, [2, 3]);  //apply() method
console.log(result2);

const result3 = add.bind(obj1);  //bind() method
console.log(result3(2, 3));


