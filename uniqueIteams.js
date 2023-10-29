/*You are building a program that takes an array of numbers as input and you need to remove all the duplicates
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
contains only the unique elements.*/

// create function to remove repetead items .. 
function removeDuplicateIteams(array)
{
    // using spread operator to return set .
    //([...set]) is used to convert the Set back into an array with unique elements.
    return [...new Set(array)];
}
// create new array
const inputArray = [1,2,2,3,3,4,4,5,5,6,6,7,7,8,9,10,10];
const uniqueArray = removeDuplicateIteams(inputArray);

console.log(uniqueArray);

