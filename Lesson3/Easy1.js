// QUESTION 1
// Will this code raise an error? Answer: no

// let numbers = [1, 2, 3];
// numbers[6] = 5;

// Bonus:
// let numbers = [1, 2, 3];
// numbers[6] = 5;
// console.log(numbers[4]);  // what will this line return?
// Answer: undefined

// QUESTION 2
// How can you determine whether a given string ends 
// with an exclamation mark (!)?
// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

// Answer: 
// console.log(str1.endsWith('!') ? 'true' : 'false');
// console.log(str2.endsWith('!') ? 'true' : 'false');

// QUESTION 3:
// Determine whether the following object of people and 
// their age contains an entry for 'Spot':
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// console.log(ages.hasOwnProperty('Spot'));

// QUESTION 4:
// Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized.
// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
// Answer:
// console.log(munstersDescription.slice(0 , 1).toUpperCase() + munstersDescription.slice(1).toLowerCase());

// QUESTION 5:
// What will the following code output?
// console.log(false == '0');
// console.log(false === '0');
// Answer: true, false

// QUESTION 6:
// Add entries for Marilyn and Spot to the object:
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

