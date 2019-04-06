//:::::::::::::Constructor Functions: Structure and Syntax::::::::::::::::::::::::::::::

// function SoftwareDeveloper() {
//     this.favoriteLanguage = 'JavaScript';
// }

//:::::::::::::Creating a New Object:::::::::::::::::::::

// let developer = new SoftwareDeveloper();
// console.log(developer);

//::::::::::::Creating Multiple Objects:::::::::::::::::::

// let engineer = new SoftwareDeveloper();
// console.log(engineer);

// let programmer = new SoftwareDeveloper();
// console.log(programmer);


//::::::::::::Constructor Functions Can Have Parameters::::::::::

// function SoftwareDeveloper(name) {
//     this.favoriteLanguage = 'JavaScript';
//     this.name = name;
// }

// let instructor = new SoftwareDeveloper('Ajgar');
// console.log(instructor);

// let teacher = new SoftwareDeveloper('Jewell');
// console.log(teacher);


// function Hero(name, role) {
//     this.name = name;
//     this.role = role;
//     this.introduce = function() {
//         console.log(`My name is ${this.name} and I am a ${this.role}.`);
        
//     }
// }

// let kohinoor = new Hero('Kohinoor', 'Mother');
// console.log(kohinoor.name);
// console.log(kohinoor.role);
// kohinoor.introduce();

// let gafur = new Hero('Abdul Gafur', 'Father');
// console.log(gafur.name);
// console.log(gafur.role);
// gafur.introduce();


//::::::::::::Omitting the new Operator::::::::::::::::::::::

// function SoftwareDeveloper(name) {
//     this.favoriteLanguage = 'JavaScript';
//     this.name = name;
// }

// let coder = SoftwareDeveloper('David');
// console.log(coder);//return undefined


//:::::::::::::Seeing the Object's Constructor (instanceof)::::::::::::

function Developer(name) {
    this.name = name;
}

const dev = new Developer('Armaan');
// console.log(dev);
// console.log(dev.name);

console.log(typeof dev);

console.log(dev instanceof Developer);

//::::::::::Summary:::::::::::

/*JavaScript's class system is built directly on using functions and objects. Calling 
(i.e., invoking) a constructor function with the new operator instantiates a new 
object. The same constructor function can be used to create different objects.*/

