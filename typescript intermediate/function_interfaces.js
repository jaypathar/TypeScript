// implementing interface 'userType' to create an object 'users'.
var users = {
    name: "Sam",
    age: 30,
    getName: function () {
        return this.name;
    },
    email: 'sam@gmail.com'
};
// crating object 'userDetails' that implements the 'newUser' interface and adds property 'location'.
var userDetails = {
    name: "Mark",
    age: 28,
    getName: function () {
        return this.name;
    },
    // added a new property location.
    location: "United States",
    email: 'mark@gmail.com'
};
// console.log() object and properties.
console.log(users.getName());
console.log(userDetails.getName());
console.log(userDetails.location);
console.log(userDetails.email);
// class 'Employee' implements 'Person'
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.sayHello = function () {
        console.log("Hello, my name is ".concat(this.name, " and I'm ").concat(this.age, " years old."));
    };
    return Employee;
}());
// creating object 'employee'
var employee = new Employee('John', 30);
employee.sayHello();
/**
 * functions are block of code that perform a particular task.
 */
// defining getData() that will return a string.
function getData() {
    return "Function returning string";
}
// defining a Addition() that will take parameter of format 'number' and return type of 'number' only.
// not passing  input3
function Addition(input1, input2, input3) {
    return input1 + input2 + (input3 || 5); // input3 = 5
}
console.log(getData());
console.log(Addition(10, 5));
