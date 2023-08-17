/**
 * union allows to accept more than one value data type for a parameter.
 */
// data variable can accept string or number
const data: string | number = ""

// this  function accepts parameter that can be of type string or number
function generateName(name: string | number) {
    return name
}

console.log(generateName("Mark"))

/**
 * literal: same as union but, you assign the value to the variable.
 */

// defining a literal parameter.
function combineMessage(firstName: string | number, lastName: string | number, type: "is-string" | "is-number") {
    if (type === "is-string") {
        console.log(`My name is ${firstName} ${lastName} and it ${type}`)
    } else {
        console.log(`My name is ${firstName} ${lastName} and it ${type}`)
    }
}

console.log(combineMessage("John", "Doe", "is-string"))

console.log(combineMessage("John", "Doe", "is-number"))

/**
 * alias - enhance readability of  program.
 */

// all the following variables have type 'dataType' 
type dataType = string | number | undefined

const valueOne: dataType = 10
const valueTwo: dataType = "Sam"
const valueThree: dataType = undefined

/**
 * enum: commonly used when you want to represent a set of related values and choose one value form 
 * options.
 */
// creating enum 'Roles'.
enum Roles {
    user = "user",
    admin = "admin"
}

// creating type 'LoginDetails'
type loginDetails = {
    name?: string
    email: string
    password: string
    role: Roles
}

// creating 'userOne' of type 'loginDetails' with role 'admin'.
const userOne: loginDetails = {
    name: "john",
    email: "john@gmail.com",
    password: "1234",
    role: Roles.admin
}

// creating 'userTwo' of type 'loginDetails' with role 'user'.
const userTwo: loginDetails = {
    email: "sam@gmail.com",
    password: "4567",
    role: Roles.user
}

const isAdmin: (user: loginDetails) => string = (user: loginDetails): string => {
    const { name, role } = user
    return role === "admin" ? `${name} is  allowed to edit page.` : `${name} is not allowed to edit page.`
}

// passing 'userOne' as parameter.  
console.log(isAdmin(userOne))
