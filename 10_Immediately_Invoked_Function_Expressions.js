//:::::::::::::::Function Declarations vs. Function Expressions::::::::::::::::::::

//:::::::::::Function Declarations:::::::::::::::::

// function returnHello() {
//     return 'Hello';
// }
// console.log(returnHello());

//:::::::::::Function Expressions::::::::::::::::::

//:::::Anonymous:::::::

// const myFunction = function() {
//     return 'Hello';
// }
// console.log(myFunction());

//::::::Named:::::::::

// const myFunction = function returnHello() {
//     return 'Hello';
// }
// console.log(myFunction());


//::::::::::Immediately-Invoked Function Expressions: Structure and Syntax::::::::::::::

// (function logger() {
//     console.log('Hello there!');   
// })();


// (function helloWorld() {
//     alert('Hello World! How are you?');
// })();


//::::::::::::::::::Passing Arguments into IIFE's:::::::::::::::::::::::::::::::::

// (function(name) {
//     console.log(`Hi ${name}`);

// })('Ajgar');


// (function(x, y) {
//     console.log(x * y);
    
// })(5, 7);


//:::::::::::::::::::IIFE's and Private Scope::::::::::::::::::::::::::::::::::::

// const myFunction = (function() {
//     const name = 'Ajgar';

//     return function() {
//         console.log(name);
        
//     }
// })();
// myFunction();


//::::::::::::::::::::Alternative Syntax for IIFE's:::::::::::::::::::::::::::::::::

// (function myName() {
//     console.log('Ajgar');
// }());

// (function() {
//     const myCountry = 'Bangladesh';

//     function named() {
//         console.log(`My country is ${myCountry}.`);
        
//     }
//     named();
// }()); 


const result = (function() {
    const myCountry = 'Bangladesh';

    return function() {
        console.log(`My country is ${myCountry}.`);
        
    };
}());
result();

