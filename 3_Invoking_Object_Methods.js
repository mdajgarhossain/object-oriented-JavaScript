//::::::::::::::::::::::::Invoking Object Methods::::::::::::::::::::::::::::::::

//::::::::::::Functions vs. Methods::::::::::::::::::::

//:::::::::::::::::::::Regular function::::::::::::::::
// function sayHello() {
//     console.log('Hi there!');
// }

//:::::::::::::::Adding function into the object::::::::
// const developer = {
//     name: 'Ajgar'
// };

// developer.sayHello = function() {
//     console.log('Hi there!');
// }

// console.log(developer);

//:::::::::::::::::::::::::Calling Methods:::::::::::::::::::
// developer.sayHello();
// developer['sayHello']();

//::::::::::::::::::Passing Arguments Into Methods::::::::::::
// const developer = {
//     name: 'Andrew',
//     sayHello: function() {
//       console.log('Hi there!');
//     },
//     favoriteLanguage: function(language) {
//         console.log(`My favorite programming language is ${language}`);       
//     }
// }
// developer.favoriteLanguage('JavaScript'); 

//:::::::::::Call Methods by Property Name (in this case 'named function')::::::::
// const greeter = {
//     greet: function sayHello() {
//         console.log('Hello! I love ReactJS');      
//     }
// };
// greeter.greet();
// greeter['greet']();

//:::::::::A Method Can Access the Object it was Called On with 'this' keyword:::::
// const triangle = {
//     type: 'scalene',
//     identify: function() {
//         console.log(this);       
//         console.log(`This is a ${this.type} triangle`);
//     }
// };
// triangle.identify();

const dog = {
    name: 'Jodi',
    age: 7,
    whatIsThis: function () {
        console.log(this);
    },
    woof: function () {
        console.log(this.name + " says 'woof!'");
    },
    ageOneYear: function () {
      this.age += 1;
      console.log('Current age: ' + this.age);
    }
};
dog.whatIsThis();
dog.woof();
dog.ageOneYear();
dog['ageOneYear']();
