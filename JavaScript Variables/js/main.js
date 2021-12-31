// alert('JS File is linked!');

// myDesk;  // Variable does not exist because it is not declared

// var
var myComputer; // Variable exists but has no assigned value
console.log(myComputer);
myComputer = 'Macbook';
console.log(myComputer);

// let
let myName = 'JayBird';
console.log(myName);
myName = 'Jay';
console.log(myName);
// let myName = 'Coding with JayBird'; // Throws an error

// Variables that are declared with "let" have Block Scope.
// They cannot be accessed outside of a set of { }

// const
const pi = 3.14159;
console.log(pi);

const myFavColor = 'Purple';
console.log(myFavColor);
// const myFavColor = 'Blue'; // Throws an error
// myFavColor = 'Blue'; // Throws an error

// const must be initialized
// const myDebuggingDuck; // Throws an error
const myDebuggingDuck = 'Tim';
console.log(myDebuggingDuck);

let myDescription = 'My name is ' + myName + ' and I code on my ' + myComputer + ' with a ' + myFavColor + ' cover!';

console.log(myDescription);

/*

JS Variable Naming Rules:

1. Variable names must start with either a letter (upper case or a lower case), underscore or $ sign.  But it must not start with a number.

2. Variables can have numbers, letters, underscores or $ signs after the first character.

3. Variable names cannot have spaces.

4. Variables are case-sensitive. myName is not the same as myNAME or MyName

5. Variables must not use JavaScript reserved words. 

6. Most common naming convention is Lower Camel Case but Lower Snake Case is also used.

  Lower Camel Case: thisIsLowerCamelCase
  Lower Snake Case: this_is_lower_snake_case


*/

