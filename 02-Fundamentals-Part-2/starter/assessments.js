`use strict`; // Stict mode. Good for keeping my code clean and secure.

/**
 * LECTURE: Functions
    1. Write a function called 'describeCountry' which takes three parameters:
    'country', 'population' and 'capitalCity'. Based on this input, the
    function returns a string with this format: 'Finland has 6 million people and its
    capital city is Helsinki'
    2. Call this function 3 times, with input data for 3 different countries. Store the
    returned values in 3 different variables, and log them to the console
 */
function describeCountry(country, population, capitalCity) {
   const test = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
   return test;
}

const r1 = describeCountry('Germany', 500, 'Helena');
const r2 = describeCountry('USA', 400, 'Testing New Town');
const r3 = describeCountry('London', 999, 'TO big for you');
console.log(r1);
console.log(r2);
console.log(r3);


/**
 *LECTURE: Function Declarations vs. Expressions
   1. The world population is 7900 million people. Create a function declaration
   called 'percentageOfWorld1' which receives a 'population' value, and
   returns the percentage of the world population that the given population
   represents. For example, China has 1441 million people, so it's about 18.2% of
   the world population
   2. To calculate the percentage, divide the given 'population' value by 7900
   and then multiply by 100
   3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
   store the results into variables, and log them to the console
   4. Create a function expression which does the exact same thing, called
   'percentageOfWorld2', and also call it with 3 country populations (can be
   the same populations)
 */
function percentageOfWorld1(pop) {
   return (pop / 7900) * 100;
}

const chinaCent = percentageOfWorld1(1090);
const portCent = percentageOfWorld1(890);
const usaCent = percentageOfWorld1(500);
console.log(chinaCent, portCent, usaCent);

/**
 * LECTURE: Arrow Functions
   1. Recreate the last assignment, but this time create an arrow function called
   'percentageOfWorld3'
 */
const fun1 = percentageOfWorld3 => {
   const pop1 = (percentageOfWorld3 / 7900) * 100;
   return pop1;
}
const chinaCent1 = fun1(1090);
const portCent1 = fun1(890);
const usaCent1 = fun1(500);
console.log(chinaCent1, portCent1, usaCent1);

/**
 * LECTURE: Functions Calling Other Functions
   1. Create a function called 'describePopulation'. Use the function type you
   like the most. This function takes in two arguments: 'country' and
   'population', and returns a string like this: 'China has 1441 million people,
   which is about 18.2% of the world.'
   2. To calculate the percentage, 'describePopulation' call the
   'percentageOfWorld1' you created earlier
   3. Call 'describePopulation' with data for 3 countries of your choice
 */
function describePopulation1(country, population) {
   return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world. `;
}
console.log(describePopulation1('China', 550), describePopulation1('USA', 320), describePopulation1('London', 130));

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, 
   together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
let dolpTeamAvg = calcAverage(44, 23, 71);
let koalasTeamAvg = calcAverage(65, 54, 49);
let dolpTeamAvg1 = calcAverage(85, 54, 41);
let koalasTeamAvg1 = calcAverage(23, 34, 27);
checkWinner(dolpTeamAvg, koalasTeamAvg);
checkWinner(dolpTeamAvg1, koalasTeamAvg1);
function checkWinner(avgDolhins, avgKoalas) {
   if (avgDolhins >= 2 * avgKoalas) {
      console.log(`Dolphines Win (${avgDolhins} vs. ${avgKoalas})`);
   } else if (avgKoalas >= 2 * avgDolhins) {
      console.log(`Koalas Win (${avgKoalas} vs. ${avgDolhins})`);
   } else {
      console.log('No team wins....');
   }
}


/**
 * LECTURE: Introduction to Arrays
   1. Create an array containing 4 population values of 4 countries of your choice.
   You may use the values you have been using previously. Store this array into a
   variable called 'populations'
   2. Log to the console whether the array has 4 elements or not (true or false)
   3. Create an array called 'percentages' containing the percentages of the
   world population for these 4 population values. Use the function
   'percentageOfWorld1' that you created earlier to compute the 4
   percentage values
 */
const popUL = [100, 200, 300, 400];
console.log(popUL.length <= 4);
const percentUL = [percentageOfWorld1(popUL[0]), percentageOfWorld1(popUL[1]),
percentageOfWorld1(popUL[2]), percentageOfWorld1(popUL[3])];
console.log(percentUL);

/**
 * LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.
 */
const neighbors1 = ['Canada', 'USA', 'Mexico'];
neighbors1.push('Utopia');
console.log(neighbors1);
neighbors1.pop();
console.log(neighbors1);
if (neighbors1[0] != 'Germany' || neighbors1[1] != 'Germany' || neighbors1[2] != 'Germany') {
   console.log('Probably not a central European country :)');
}
neighbors1[1] = 'U S FUCKING A.';
console.log(neighbors1);

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the 
rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! 
So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
const bills = [125, 555, 44];
const tip1 = [];
const total = [];

function calcTip(bill) {
   if (bill >= 50 && bill <= 300) {
      tip1.push(bill * 0.20);
      total.push(bill + (bill * 0.20));
   } else {
      tip1.push(bill * 0.15);
      total.push(bill + (bill * 0.15));
   }
}
calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]);
console.log(tip1);
console.log(total);

/**
 * LECTURE: Introduction to Objects
   1. Create an object called 'myCountry' for a country of your choice, containing
   properties 'country', 'capital', 'language', 'population' and
   'neighbours' (an array like we used in previous assignments)
 */
const myCountry = { country: 'USA', capital: 'Helena', language: 'English', population: 5, neighbours: 3 };

/**
 * LECTURE: Dot vs. Bracket Notation
   1. Using the object from the previous assignment, log a string like this to the
   console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
   and a capital called Helsinki.'
   2. Increase the country's population by two million using dot notation, and then
   decrease it by two million using brackets notation.
 */
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry['neighbours']} neighbouring countries and a capital called ${myCountry['capital']}.`);

/**
 * LECTURE: Object Methods
   1. Add a method called 'describe' to the 'myCountry' object. This method
   will log a string to the console, similar to the string logged in the previous
   assignment, but this time using the 'this' keyword.
   2. Call the 'describe' method
   3. Add a method called 'checkIsland' to the 'myCountry' object. This
   method will set a new property on the object, called 'isIsland'.
   'isIsland' will be true if there are no neighbouring countries, and false if
   there are. Use the ternary operator to set the property.
 */
const myCountry1 = {
   country: 'USA',
   capital: 'Helena',
   language: 'English',
   population: 5,
   neighbours: 3,
   describe: function () {
      console.log(this);
   },
   checkIsland: isIsland = (this.neighbours > 0) ? true : false
};

console.log(myCountry1);

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations!
Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
const markMiller =
{
   firstName: 'Mark',
   lastName: 'Miller',
   mass: 78,
   height: 1.69,
   calcBMI: function () {
      const mBMI = this.mass / (this.height ** 2);
      return mBMI;
   }
}
const johnSmith =
{
   firstName: 'John',
   lastName: 'Smith',
   mass: 92,
   height: 1.95,
   calcBMI: function () {
      this.bmi = this.mass / (this.height ** 2);
      return this.bmi;
   }
}
johnSmith.calcBMI();// you can call this and then reference the .bmi instead of the full function multiple times.
if (johnSmith.bmi > markMiller.calcBMI()) {
   console.log(`${johnSmith.firstName} ${johnSmith.lastName}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.firstName} ${markMiller.lastName}'s (${markMiller.calcBMI()})!'`);
} else if (markMiller.calcBMI() > johnSmith.bmi) {
   console.log(`${markMiller.firstName} ${markMiller.lastName}'s BMI (${markMiller.calcBMI()}) is higher than ${johnSmith.firstName} ${johnSmith.lastName}'s (${johnSmith.bmi})!'`);
} else {
   console.log(`Both BMI's is exactly the same.`);
}

/**
 * LECTURE: Iteration: The for Loop
   1. There are elections in your country! In a small town, there are only 50 voters.
   Use a for loop to simulate the 50 people voting, by logging a string like this to
   the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
 */
for (let vote = 1; vote <= 50; vote++) {
   console.log(`Voter number ${vote} is currently voting.`);
}

/**
 * LECTURE: Looping Arrays, Breaking and Continuing
   1. Let's bring back the 'populations' array from a previous assignment
   2. Use a for loop to compute an array called 'percentages2' containing the
   percentages of the world population for the 4 population values. Use the
   function 'percentageOfWorld1' that you created earlier
   3. Confirm that 'percentages2' contains exactly the same values as the
   'percentages' array that we created manually in the previous assignment,
   and reflect on how much better this solution is
 */
const percentages2 = [];
for (let i = 0; i < popUL.length; i++) {
   percentages2.push(percentageOfWorld1(popUL[i]));
}
console.log(popUL, percentages2);

/**
 * LECTURE: Looping Backwards and Loops in Loops
   1. Store this array of arrays into a variable called 'listOfNeighbours'
   [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
   'Russia']];
   2. Log only the neighbouring countries to the console, one by one, not the entire
   arrays. Log a string like 'Neighbour: Canada' for each country
   3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
   worry if it's too difficult for you! But you can still try to figure this out anyway �
 */
const listOfNeighbours1 = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let i = 0; i < listOfNeighbours1.length; i++) {
   for (let j = 0; j < listOfNeighbours1[i].length; j++) {
      console.log(`Neighbour: ${listOfNeighbours1[i][j]}`);
   }
}

/**
 * LECTURE: The while Loop
   1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
   but this time using a while loop (call the array 'percentages3')
   2. Reflect on what solution you like better for this task: the for loop or the while
   loop?
 */
const percentages3 = [];
while (percentages3.length < popUL.length) {
   percentages3.push(percentageOfWorld1(popUL[percentages3.length]));
}
console.log(percentages3);

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!
 
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
 
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
 
HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉
 
4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array
 
GOOD LUCK 😀
*/
const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];
let sum = 0;
function calcTip1(bill) {
   if (bill >= 50 && bill <= 300) {
      tips2.push(bill * 0.20);
      totals2.push(bill + (bill * 0.20));
   } else {
      tips2.push(bill * 0.15);
      totals2.push(bill + (bill * 0.15));
   }
}
function calcAverage1(arr) {
   for (let j = 0; j < arr.length; j++) {
      sum += arr[j];
   }
   return sum / arr.length;
}
for (let i = 0; i < bills1.length; i++) {
   calcTip1(bills1[i]);
}
console.log(`Tips: $${tips2}
Totals: $${totals2}`);
console.log(`Average function back: $${calcAverage1(totals2)}`);