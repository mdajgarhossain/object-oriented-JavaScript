//:::::::::::::::::::::::::::::::::Beware of Globals:::::::::::::::::::::::::::

//:::::::::::::Things that Belong to Objects:::::::::::::::::::
// const chameleon = {
//     eyes: 2,
//     lookAround: function() {
//         console.log(`I see you with my ${this.eyes} eyes!`);
//     }
// };
// chameleon.lookAround();

//::::::::::::::::::::'this' and Function Invocation:::::::::::::::
// const chameleon = {
//     eyes: 2,
//     lookAround: function() {
//         console.log(`I see you with my ${this.eyes} eyes!`);//'this' in the Method
//     }
// };
// chameleon.lookAround();

// function whoThis() {
//     this.trickyish = true;//'this' in the Function
// }
// whoThis();

//:::::::::::::::::::::The 'window' Object::::::::::::::::::::::
// const car = {
//     numberOfDoors: 4,
//     drive: function() {
//         console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
//     }
// };
// const letsRoll = car.drive;
// letsRoll();// value of 'this' is 'window' object in the browser environment

//:Global Variables(declared with 'var' keyword) are Properties on 'window' object:
// var currentlyEating = 'ice cream';
// window.currentlyEating === currentlyEating;//return 'true' in the browser

// let currentlyEating = 'ice cream';
// window.currentlyEating === currentlyEating;//return 'false' in the browser

// const eating = 'vanilla';
// window.eating === eating;//return 'false' in the browser

//::::::::::Global Functions are Methods on 'window' object:::::::::::
// function myFunction() {
//     console.log(`This function is the 'method' of 'window' object`);
// }
// myFunction();
// window.myFunction();
// window.myFunction === myFunction;//return 'true' in the browser

// var name = 'method'
// function myGlobalFunction() {
//     console.log(`This global function is the '${window.name}' of 'window' object`);
//     console.log(`This ${this.name} is awesome`);
    
// }
// window.myGlobalFunction();
// window.myGlobalFunction === myGlobalFunction;//return 'true' in the browser

// function learnSomethingNew() {
//     window.open('https://www.udacity.com/');
// }
// window.learnSomethingNew();
// window.learnSomethingNew === learnSomethingNew;//return 'true' in the browser

// function learnSomethingNew() {
//     this.open('https://www.udacity.com/');
// }
// window.learnSomethingNew();

//:::::::::::::::::::Avoid Globals:::::::::::::::::::::::::

//:::::::::Tight Coupling::::::::::
// var instructor = 'Jewell';

// function jewelSaysHi() {
//     console.log(`${instructor} says hi!`);    
// }
// jewelSaysHi();

// var teacher = 'Jewell';

// function jewelSaysHi() {
//     console.log(`${instructor} says hi!`);    
// }
// jewelSaysHi();

// var teacher = 'Jewell';

// function jewelSaysHi() {
//     console.log(`${teacher} says hi!`);//we have to change 'instructor' to 'teacher' locally   
// }
// jewelSaysHi();

// var instructor = 'Jewell';

// function jewelSaysHi() {
//     var instructor = 'Jewell' //now we have set the variable locally not globally.
//     console.log(`${instructor} says hi!`); //now this 'instructor' variable is not tightly coupled means that it is not dependent on the global 'instructor' variable.   
// }
// jewelSaysHi();

//:::::::::Name Collisions:::::::::::
let add = 1;

function addItems() {
    add = add +1;
    console.log(`Total items: ${add}`);
}

function addMoreItems() {
    add = add +1;
    console.log(`Now Total items: ${add}`);
}

addItems();//output 'Total items: 2'
addItems();//output 'Total items: 3'

addMoreItems();//output 'Now Total items: 4'

addItems();//output 'Total items: 5'. For declaring  variable 'add' globally both functions depend on the 'add' variable and both update it.
