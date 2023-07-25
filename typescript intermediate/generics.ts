/**
 * Generics allow creating 'type variables' which can be used to create classes, functions & type aliases 
 * that don't need to explicitly define the types that they use.
 * Generics is a way of  making code reusable.  
 */

// the function is mainly returning data.however the data passed as parameter and returned can be any type
function getValue<T>(data: T): T {
    return data
}

console.log(getValue(23)) // will return a integer value.
console.log(getValue("John"))// will return a string value.
console.log(getValue({ name: "John", age: '23' }))


