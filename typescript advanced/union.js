/**
 * union allows to accept more than one value data type for a parameter.
 */
// data variable can accept string or number
var data = "";
// this  function accepts parameter that can be of type string or number
function generateName(name) {
    return name;
}
console.log(generateName("Mark"));
/**
 * literal: same as union but, you assign the value to the variable.
 */
// defining a literal parameter.
function combineMessage(firstName, lastName, type) {
    if (type === "is-string") {
        console.log("My name is ".concat(firstName, " ").concat(lastName, " and it ").concat(type));
    }
    else {
        console.log("My name is ".concat(firstName, " ").concat(lastName, " and it ").concat(type));
    }
}
console.log(combineMessage("John", "Doe", "is-string"));
console.log(combineMessage("John", "Doe", "is-number"));
var valueOne = 10;
var valueTwo = "Sam";
var valueThree = undefined;
/**
 * enum: commonly used when you want to represent a set of related values and choose one value form
 * options.
 */
// creating enum 'Roles'.
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
// creating 'userOne' of type 'loginDetails' with role 'admin'.
var userOne = {
    name: "john",
    email: "john@gmail.com",
    password: "1234",
    role: Roles.admin
};
// creating 'userTwo' of type 'loginDetails' with role 'user'.
var userTwo = {
    email: "sam@gmail.com",
    password: "4567",
    role: Roles.user
};
var isAdmin = function (user) {
    var name = user.name, role = user.role;
    return role === "admin" ? "".concat(name, " is  allowed to edit page.") : "".concat(name, " is not allowed to edit page.");
};
// passing 'userOne' as parameter.  
console.log(isAdmin(userOne));
