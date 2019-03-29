//:::::::::::::::::::::::Callback Functions:::::::::::::::::::::::::::::::::::::

// function callAndAdd(n, callbackFunction) {
//     return n + callbackFunction();
// }

// function returnsThree() {
//     return 3;
// }

// console.log(callAndAdd(2, returnsThree));

//:::::::::::::::::::::Array Methods:::::::::::::::::::::::::::


//:::::::::::::::forEach() method::::::::::::::

// function logIfOdd(n) {
//     if(n % 2 !== 0) {
//         console.log(n);
//     }
// }
// logIfOdd(2);
// logIfOdd(7);

// myArray = [1, 5, 2, 4, 6, 3];

// myArray.forEach(function logIfOdd(n) {
//     if(n % 2 !== 0) {
//         console.log(n);
//     }
// });


// myArray.forEach(function (n) {
//     if(n % 2 !== 0) {
//         console.log(n);
//     }
// });


// myArray.forEach(logIfOdd);

//::::::another example::::::::

// const favoriteFlavors = ['cookie dough', 'salted caramel', 'toffee'];

// favoriteFlavors.forEach(function(flavor) {
//     //debugger
//     console.log(`I enjoy ${flavor} ice cream.`);
// });


//::::::::::::::map() method::::::::::::::

// const names = ['Jewell', 'Karim', 'Rahim'];

// names.map(function(name) {
//     console.log(`My name is ${name}.`);
// });

// const nameLengths = names.map(function(name) {
//     return name.length;
// });
// console.log(nameLengths);


//:::::::::::::::filter() method::::::::::::::

const names = ['Jewell', 'Karim', 'Rahim'];

const shortNames = names.filter(function(name) {
    return name.length < 6;
});
console.log(shortNames);
