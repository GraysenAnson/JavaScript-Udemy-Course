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
      console.log(`Dolphines Win (${avgDolhins} vs. ${avgKolas})`);
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

/**
 * LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)
 */

/**
 * LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.
 */

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

/**
 * LECTURE: Iteration: The for Loop
1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
 */

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

/**
 * LECTURE: The while Loop
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?
 */