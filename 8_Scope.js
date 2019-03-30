// const globalVariable = 1;  //Global variable

// function parentFunction() {
//     const parentVariable = 2;  //Variable from the parent function's Scope

//     function childFunction() {
//         const localVariable = 3;  //Local variable declared within the function

//         return globalVariable + parentVariable + localVariable;
//     }
//     return childFunction();
// }
// console.log(parentFunction());



// const myName = 'Jewell';  //Global scope

// function introduceMyself() {
//     const you = 'Ajgar';  //Function scope

//     function introduce() {
//         console.log(`Hey ${you} I am ${myName}!`);
//     }
//     return introduce();
// }
// introduceMyself();


//:::::::::::::::::JavaScript is Function-Scoped::::::::::::::::::

// var globalNumber = 5;

// function globalIncrementer() {
//     const localNumber = 10;

//     globalNumber += 1;
//     return globalNumber;
// }
// console.log(globalIncrementer());
// console.log(globalIncrementer());
// console.log(globalIncrementer());

// console.log(localNumber);

//:::::::::::::::::Block-Scoping:::::::::::::::::::::::::

// var x = 1;

// if(x === 1) { 
//     // x += 1;
//     // console.log(x);
      
//     let x = 2;

//     console.log(x);
// }


// let x = 1;

// if(x === 1) {   
//     let x = 2;

//     console.log(x);
// }

// console.log(x);

// const number = 77;

// if(number === 77) {
//     // number += 3;

//     // console.log(number);
    
// }

// console.log(number);


//::::::::::::::::::::::::::::::::Scope Chain::::::::::::::::::::::::::

// function one() {
//     two();
//     function two() {
//         three();
//         function three() {
//             //code
//         }
//     }
// }
// one();


// const a = 'global';
// let d;

// function parent() {
//     const b = 'parent';

//     // console.log(`I am defined in the ${b} function`);
    
//     // console.log(`I have also access to the ${a} variable`);
    

//     function child() {
//         const c = 'child';
        
//         console.log(`I am defined in the ${c} function`);

//         console.log(`I have access to my ${b} function`);

//         console.log(`I have also access to the ${a} variable`);

//         // console.log(d);
        
        
//     }
//     child();
// }
// parent();

// // console.log(`Variable a is defined in the ${a} scope`);


//::::::::::::::::::::::::Variable Shadowing::::::::::::::::::::::

const symbol = '¥';

function displayPrice(price) {
    const symbol = '$';

    console.log(symbol + price);
    
}
displayPrice(70);

