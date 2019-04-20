function Obj(a, b) {
    this.a = a;
    this.b = b;
}

const myObj = {
    name: 'jewel',
    age: 25
};

const myObj2 = {
    role: 'Software Developer',
    introduce: function(name) {
        console.log(`${name} is a ${this.role}`);   
    }
};

Obj.prototype = Object.create(myObj);
Obj.prototype = Object.create(myObj2);

const obj1 = new Obj(2, 3);
// console.log(obj1);

Obj.prototype.print1 = function() {
    console.log(this.a + this.b);
}

Obj.prototype.print2 = function() {
    console.log('i am i');
}


// obj1.print1();
// obj1.print2();

// obj1.__proto__.print1();
// obj1.__proto__.print2();

// console.log(obj1.__proto__ === Obj.prototype);

// console.log(obj1.__proto__.print1 === Obj.prototype.print1);

// console.log(obj1.__proto__);

// console.log(Object.getPrototypeOf(obj1));

// const myObj = {
//     name: 'jewel',
//     age: 25
// };

// const newObj = Object.create(myObj);

// console.log(newObj);
// console.log(newObj.__proto__ === myObj);
// console.log(Object.getPrototypeOf(newObj));

// console.log(newObj.name);
// console.log(newObj.age);

// newObj.ownProps = 'I am only Own property non inherited';

// console.log(newObj);
// console.log(newObj.ownProps);

// Obj.prototype = Object.create(myObj);

obj1.print1();
obj1.print2();

// console.log(Object.getPrototypeOf(obj1));

console.log(obj1.name);

// console.log(myObj.isPrototypeOf(obj1));

console.log(obj1);

obj1.introduce('Jewel');

