/* Write a function that takes an object representing a person as input, and extracts the name and street
properties from a nested object using object destructuring. The function should return an object with these two
properties. */

// create a nested object

const person =
{
    name: "Mithun",
    age: 21,
    address: 
    {
        street: "B8, Block B, Industrial Area",
        city: "Sector 62, Nodia",
        state: "Uttar Pradesh",
    },
};

// create a function for extract name and Street

function extractNameAndStreet(object)
{
    const {name, address: {street}} = object;
    return {name, street};
};
// calle
const result = extractNameAndStreet(person)

console.log(result);