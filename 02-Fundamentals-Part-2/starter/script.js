`use strict`; // Didn't work with my run code extension??.

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}
if (hasDriversLicense) {
    console.log('I can drive :)');
} */

// const friends = ['Michael', 'Steven', 'Peter'];

// // add elements
// const newLength = friends.push('Jay'); // add element to end of array, mutate.
// console.log(friends);
// console.log(newLength);
// friends.unshift('John'); // add element to start of array.
// console.log(friends);

// // remove elements
// friends.pop(); // remove the last element of the array;

/* console.log('Lifting weights repetition 1');
// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
} */

/* const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven'], true];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
    //types[i] = typeof jonas[i];
    types.push('typeof jonas[i');

}
console.log(types); */

const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']];
// Reverse for loop
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
}