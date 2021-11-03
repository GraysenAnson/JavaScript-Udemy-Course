`use strict`; // Didn't work with my run code extension??.

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}
if (hasDriversLicense) {
    console.log('I can drive :)');
} */

const friends = ['Michael', 'Steven', 'Peter'];

// add elements
const newLength = friends.push('Jay'); // add element to end of array, mutate.
console.log(friends);
console.log(newLength);
friends.unshift('John'); // add element to start of array.
console.log(friends);

// remove elements
friends.pop(); // remove the last element of the array;