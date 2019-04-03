//:::::::::::::::::::::::::::::::::::Closures::::::::::::::::::::::::::::::::::

//::::::::::::::Functions Retain Their Scope:::::::::::::::::::::

// function remember(number) {
//     return function() {
//         return number;
//     }
// }

// const returnedFunction = remember(7);

// console.log(returnedFunction());


//:::::::::::::::Closures and Scope:::::::::::::::::::::::::::

// const myName = 'Ajgar';

// function introduceMyself() {
//     const you = 'student';

//     function introduce() {
//         console.log(`Hello ${you}, I am ${myName}`);
        
//     }
//     return introduce();
// }
// introduceMyself();


// const number = 3;

// function myFunction() {
//     const otherNumber = 1;

//     function logger() {
//         debugger
//         console.log(otherNumber);
        
//     }
//     return logger;
// }

// const result = myFunction();
// result();


function myCounter() {
    let count = 0;

    return function() {
        count += 1;
        return count;

    }
}

const counter = myCounter();

console.log(counter());
console.log(counter());
console.log(counter());

// console.log(counter.count);//return undefined because can not access outside the private state becuse of closure.
// console.log(count);// can not accessible

