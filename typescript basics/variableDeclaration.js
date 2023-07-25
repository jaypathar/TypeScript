/**
 * The core data types available in Typescript are number, string, boolean, any, unknown.
 * The data type assigned can be explicit or implicit - the variable assumes data type at time of
 * assigning.
 * 'any' is a data type that disables type checking and effectively allows all types to be used.
 * 'unknown' is best used when you don't know the type of data being typed. To add a type later, you'll
 * need to cast it. Everything assigned to this type will result in an error unless you assign it to
 * another type at some point.
 **/
// declaring a variable 'num1' of type 'number'.(explicit assigning data type).
var number1 = 25;
console.log(number1);
// declaring a variable 'str1' of type 'string'.
var string1 = "mark";
console.log(string1);
// declaring a variable 'bool1' of type 'boolean'
var boolean1 = true;
console.log(boolean1);
// declaring a  variable 'any1' of type 'any'
var any1 = true;
any1 = "string"; //re-assigning value to string.
console.log(any1);
// declaring a  variable 'unknown1'.It is similar to any.
var unknown1;
unknown1 = true; // assigning 'true'-boolean.
console.log(unknown1);
unknown1 = 7; // assigning 'number'.
console.log(unknown1);
unknown1 = [1, 2, 3, 4]; // assigning an array.
console.log(unknown1);
