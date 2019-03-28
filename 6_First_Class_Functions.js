//::::::::::::::::::::::::Functions at Runtime::::::::::::::::::::::::::::::::::::

//::::::::::Regular Function::::::
// function greet() {
//     console.log(`Functions are cool!`);
// }
// greet();

//::::::::::::::::::::::First-Class Functions:::::::::::::::::::::::::::::::::::::

//::::::::1.Functions can be stored in a variable::::::::::::
// const myFunction = function howdy(n1, n2) {
//     return n1 * n2;
// }
// console.log(myFunction(2, 4));

//:::::::Functions are objects::::::::::
// function average(n1, n2, n3) {
//     return (n1 + n2 + n3) / 3;
// }
// console.log(average(2, 2, 2));

// console.log(average.length);
// console.log(average.name);

//:::::::::2.Functions Can Return Functions:::::::::::::::::
// function alertThenReturn() {//higher-order-function
//     alert('Message 1!');

//     return function() {
//         alert('Message 2!');
//     }
// }
// alertThenReturn();

// const innerfunction = alertThenReturn();
// innerfunction();

// alertThenReturn()();//immidiately invoked

//::::another example::::

// const returnsAFunction = function() {
//     return function() {
//         console.log(`Hello from inside a function!`);
//     }
// }
// const newFunction = returnsAFunction();

// newFunction();

// returnsAFunction()();

//::::another example::::

function higherOrderFunction() {
    return function() {
        return 8;
    }
}
const storeFunction = higherOrderFunction();
console.log(storeFunction());

console.log(higherOrderFunction()());

//:::::::::3.Functions can be passed as arguments into another function::::::
//:::Go to next section  >>>>>>>>