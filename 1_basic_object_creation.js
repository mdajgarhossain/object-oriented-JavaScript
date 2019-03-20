//::::::::::::::::::::::::::::Basic object creation:::::::::::::::::::::::::::::

// var obj = {};
// var obj2 = new Object;
// console.log(obj);
// console.log(obj2);


// var obj = {
//     name: 'object',
//     'type': 'variable',
//     "5isTrue": true,
//     "propertyNo.": 4,
//     1: 5,
//     7: 'seven'
// };
// console.log(obj['7']);
// console.log(obj['propertyNo.']);
// console.log(obj['5isTrue']);


// const myVariable = 'color';
// const bicycle = {
//     color: 'blue',
//     wheels: {
//         diameter: 18,
//         width: 8
//     },
// };

//:::::::::::::properties accessing with different notation::::::::::
// console.log(bicycle.color);
// console.log(bicycle['color']);
// console.log(bicycle.wheels);
// console.log(bicycle['wheels']);
// console.log(bicycle.wheels.width);
// console.log(bicycle.wheels['diameter']);
// console.log(bicycle['wheels']['width']);
// console.log(bicycle[myVariable]);


var book = {
    name: 'Functional javaScript',
    author: 'Michael Fogus',
    publisher: 'O\' Reilley',
    page: 250,

    print: function() {
        console.log(this.name +': ' + this.author);
        
        
    }
};

// console.log(book);
// console.log(book.publisher);
// book.print();
// console.log(book.publishedYear);
book.publishedYear = 2010;
// console.log(book.publishedYear);
book['price'] = 30;
// console.log('$' + book.price);
// console.log(book);

//::::::::::::::::::::::object traverse::::::::::::::::::::::::

for(var props in book) {

    // console.log(props);
    console.log(props + ': ' + book[props]);
  
}
