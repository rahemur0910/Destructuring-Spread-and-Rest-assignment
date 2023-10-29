/* You are working on a project that requires you to swap the values of two variables without using a temporary
variable. You decide to write a function that takes two variables as input and swaps their values using
destructuring assignment with an array. The function should take the two variables as arguments, destructure
them into an array, and then swap their positions within the array. Finally, the function should return an array
with the swapped values. For example, if the function is called with the arguments x = 5 and y = 10, it should
return an array [10, 5] with x now equal to 10 and y equal to 5.*/
// decleare inputs.
let value1 = 5;
let value2 = 10;
console.log('Before swap =>',value1,value2);

// craete a function to swap two values.
function swapValue(x,y)
{
    // use destructuring to swap the values 
    [x,y] = [y,x];
    return [x,y]
}

const result = swapValue(value1,value2);
console.log('After swap =>',result);