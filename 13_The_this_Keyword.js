//::::::::::::::::::::::::::::::The `this` Keyword:::::::::::::::::::::::::::::::::::::

//:::::::::::::::`this `in Constructor Functions:::::::::::::::::

// function Cat(name) {
//     this.name = name;
//     this.sayName = function() {
//         console.log(`Meow! My name is ${this.name}`);
//     };
// }
// const bailey = new Cat('Bailey');
// console.log(bailey);
// bailey.sayName();

//:::::::::::::When is this Assigned?::::::::::::::::::::::

const dog = {
    bark: function() {
        console.log('Woof!');
    },
    barkTwice: function() {
        this.bark();
        this.bark();
    }
};
dog.bark();
dog.barkTwice();

//:::::::::::::What Does this Get Set To?:::::::::::::::::::::

function funFunction() {
    return this;
}
console.log(funFunction());

