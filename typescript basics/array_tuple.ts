/**
 * Array is a data structure used for storing homogeneous data.
 * A tuple is a typed array with a pre-defined length and types for each index.
 */

// declaring an array of string with property read-only
const data: readonly string[] = ['John', 'Mark', 'Mario']
// data.push("Peter") => data can't be pushed into array as it is of type readonly.
console.log(data)

// defining an array(i.e. tuple) with sequence of properties.(i.e. recommended if limited elements there.)
const randomArray: [string, number, boolean] = ["John", 27, true] // keep track of order while assigning.
console.log(randomArray)

// examples:
const names: string[] = [];
names.push("Dylan");
// names.push(3); => error: type 'number' is not assignable to parameter of type 'string'.