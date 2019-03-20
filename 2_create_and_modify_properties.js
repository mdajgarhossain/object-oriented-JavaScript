//::::::::::::::::::::::::::::Create and modify properties::::::::::::::::::::::::

//::::::::::::::create and consider this object initially::::::::::::

// const cat = {
//     age: 2,
//     name: 'Bailey',
//     meow: function() {
//         console.log('Meow!');
//     },
//     greet: function(name) {
//         console.log(`Hello ${name}`);
//     }
// };

// console.log(cat);

//::::::::::::::::::::: modifying 'age' property:::::::::::::

// cat.age += 1;
// console.log(`age: ${cat.age}`);

//::::::::::::::::::::: reassigning 'name' value:::::::::::::

// cat.name = 'Bambi';
// console.log(cat.name);

// console.log(cat);

//:::::::::::::::::::::::adding properties:::::::::::::::::::

// const printer = {};

// printer.on = true;
// printer.mode = 'black and white';

// console.log(printer);

// printer['remainingSheets'] = 168;

// console.log(printer);

// printer.print = function() {
//     console.log('The printer is printing');
// }

// console.log(printer);
// printer.print();

//:::::::::::::::::::removing properties:::::::::::::::::::

// delete printer.mode;

// console.log(printer.mode);
// console.log(printer);

// delete printer.print;

// console.log(printer.print);
// printer.print();
// console.log(printer);

// delete printer['on'];

// console.log(printer.on);
// console.log(printer);

//:::::::::::::::::::::passing Arguments::::::::::::::::::::::

//::::::::::::passing primitive::::::::::::::

// function changeToEight(n) {
//     n = 8;
// }

// let n = 7;

// changeToEight(n);

// console.log(n);

//::::::::::::passing object::::::::::::::::::::

// let originalObject = {
//     favoriteColor: 'red'
// };

// function setToBlue(object) {
//     object.favoriteColor = 'blue';
// }

// setToBlue(originalObject);

// console.log(originalObject.favoriteColor);

// const iceCreamOriginal = {
//     jewel: 3,
//     hossain: 15
// };

// const iceCreamCopy = iceCreamOriginal;

// console.log(iceCreamCopy.hossain);

// iceCreamCopy.hossain = 77;

// console.log(iceCreamCopy.hossain);
// console.log(iceCreamOriginal.hossain);
// console.log(iceCreamOriginal);

//::::::::::::::::comparing object with another object::::::::::::::

const parrot = {
    group: 'bird',
    feathers: true,
    chirp: function() {
        console.log('chirp chirp!');
    }
};

const pigeon = {
    group: 'bird',
    feathers: true,
    chirp: function() {
        console.log('chirp chirp!');
    }
};

console.log(parrot === pigeon);

const myBird = parrot;
console.log(myBird === parrot);

console.log(myBird === pigeon);
