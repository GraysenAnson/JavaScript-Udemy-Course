/** Lecture: Values and Variables. */
// Declare variables called 'country', 'continent' and 'population
// and assign their values accordingly to your own country 
// (population in millions)
// Log their values to the console.
let country = "USA";
let continent = "North America";
const population = 1000000;
console.log("I live on the continate - " + continent);
console.log("The country i live in is called " + country);
console.log("The total population is " + population);

/**
 *LECTURE: Data Types
    1. Declare a variable called 'isIsland' and set its value according to your
    country. The variable should hold a Boolean value. Also declare a variable
    'language', but don't assign it any value yet
    2. Log the types of 'isIsland', 'population', 'country' and 'language'
    to the console
 */
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

/**
 *LECTURE: let, const and var
    1. Set the value of 'language' to the language spoken where you live (some
    countries have multiple languages, but just choose one)
    2. Think about which variables should be const variables (which values will never
    change, and which might change?). Then, change these variables to const.
    3. Try to change one of the changed variables now, and observe what happens
 */
language = 'English';
//population = 2000000; // will not change cause its const
//console.log(language + " - " + population);

/**
 *LECTURE: Basic Operators
    1. If your country split in half, and each half would contain half the population,
    then how many people would live in each half?
    2. Increase the population of your country by 1 and log the result to the console
    3. Finland has a population of 6 million. Does your country have more people than
    Finland?
    4. The average population of a country is 33 million people. Does your country
    have less people than the average country?
    5. Based on the variables you created, create a new variable 'description'
    which contains a string with this format: 'Portugal is in Europe, and its 11 million
    people speak portuguese'
 */
let firstHalf = population / 2;
let secondHalf = population / 2;
firstHalf++;
console.log(firstHalf);
let country2 = 'Finland';
let country2Population = 6000000;
console.log(country2Population > population);
console.log(population < 33000000);
let description = 'Portugal is in Eurpose, and its 11 million poeple speak portuguese.';

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
let markM = 78;
let markH = 1.69;
let johnM = 92;
let johnH = 1.95;
let markBMI = markM / markH ** 2;
let johnBMI = johnM / (johnH * johnH);
console.log("Marks first BMI - " + markBMI);
console.log("Johns first BMI - " + johnBMI);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

/**
 *LECTURE: Strings and Template Literals
    1. Recreate the 'description' variable from the last assignment, this time
    using the template literal syntax
 */
let descripton2 = `${description}`;
console.log(descripton2);

/**
 *LECTURE: Taking Decisions: if / else Statements
    1. If your country's population is greater that 33 million, log a string like this to the
    console: 'Portugal's population is above average'. Otherwise, log a string like
    'Portugal's population is 22 million below average' (the 22 is the average of 33
    minus the country's population)
    2. After checking the result, change the population temporarily to 13 and then to
    130. See the different results, and set the population back to original
 */
country2Population = 13;
conuntry2Population = 130;
if (population > country2Population) {
   console.log("Portugal's population is above average");
} else {
   console.log("Portugal's population is 22 million below average");
}

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
if (markBMI > johnBMI) {
   console.log("Mark's BMI is higher than John's!");
   console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`)

} else {
   console.log("John's BMI is higher than Mark's!");
   console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI}))`);
}

/**
 * LECTURE: Type Conversion and Coercion
   1. Predict the result of these 5 operations without executing them:
   '9' - '5';
   '19' - '13' + '17';
   '19' - '13' + 17;
   '123' < 57;
   5 + 6 + '4' + 9 - 4 - 2;
   2. Execute the operations to check if you were right
 */
console.log('9' - '5'); // Should be 4
console.log('19' - '13' + '17');// Should be 23, wrong its 617
console.log('19' - '13' + 17);// 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

/**
 * LECTURE: Equality Operators: == vs. ===
   1. Declare a variable 'numNeighbours' based on a prompt input like this:
   prompt('How many neighbour countries does your country
   have?');
   2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
   == for now)
   3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
   is greater than 1
   4. Use an else block to log 'No borders' (this block will be executed when
   'numNeighbours' is 0 or any other value)
   5. Test the code with different values of 'numNeighbours', including 1 and 0.
   6. Change == to ===, and test the code again, with the same values of
   'numNeighbours'. Notice what happens when there is exactly 1 border! Why
   is this happening?
   7. Finally, convert 'numNeighbours' to a number, and watch what happens now
   when you input 1
   8. Reflect on why we should use the === operator and type conversion in this
   situation
 */