//:::::::::::::::::::::Extracting Properties and Values:::::::::::::::::::::::::::

//:::::::::::::::::::::::::Object Methods::::::::::::::::::::

//:::::::::Object.keys() and Object.values():::::::::::
const dictionary = {
    car: 'automobile',
    apple: 'healthy snack',
    cat: 'cute furry animal',
    dog: 'best friend',
    pages: 1000
};

console.log(Object.keys(dictionary));
console.log(Object.values(dictionary));

// const keysArray = Object.keys(dictionary);
// console.log(keysArray);

// const valuesArray = Object.values(dictionary);
// console.log(valuesArray);

//:::::::::::extract 'keys' using 'for in' loop:::::::::::
const result = [];

for(const keys in dictionary) {
    result.push(keys);
}
console.log(result);

