//::::::::::::::::::::::::Prototype Chain(Another Own Example):::::::::::::::::::::::

function Obj1(a, b) {
    this.a = a;
    this.b = b;
}

Obj1.prototype.print1 = function() {
    console.log(`I am from Obj1 constructor's Prototype!`);
}

function Obj2(a, b, c) {
    Obj1.call(this, a, b);
    this.c = c;
}

Obj2.prototype = Object.create(Obj1.prototype);

Obj2.prototype.print2 = function() {
    console.log(`I am from Obj2 constructor's prototype!`);
}

function Obj3(a, b, c) {
    Obj2.call(this, a, b, c);
}

Obj3.prototype = Object.create(Obj2.prototype);

Obj3.prototype.print3 = function() {
    console.log(`I am from Obj3 constructor's prototype!`); 
}

const obj1 = new Obj1(1, 2);
console.log(obj1);
obj1.print1();

const obj2 = new Obj2(3, 4, 5);
console.log(obj2);
obj2.print2();
obj2.print1();


const obj3 = new Obj3(6, 7, 8);
console.log(obj3);
// console.log(obj3.a);
// console.log(obj3.b);
// console.log(obj3.c);
obj3.print3();
obj3.print2();
obj3.print1();