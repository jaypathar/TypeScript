/**
 * Interface defines the properties within a class, object or function.
 */
// defining an interface(property)
interface userType{
    name:string
    age:number
    getName:()=>string
}
// adding a new property 'email'.
interface userType{
    email:string
}
// implementing interface 'userType' to create an object 'users'.
let users:userType ={
    name:"Sam",
    age:30,
    getName:function(){
        return this.name
    },
    email:'sam@gmail.com'
}

// extending the current interface 
interface newUser extends userType{
    location:string
}
// crating object 'userDetails' that implements the 'newUser' interface and adds property 'location'.
let userDetails:newUser={
    name:"Mark",
    age:28,
    getName:function(){
        return this.name
    },
    // added a new property location.
    location:"United States",
    email:'mark@gmail.com'
}

// console.log() object and properties.
console.log(users.getName())
console.log(userDetails.getName())
console.log(userDetails.location)
console.log(userDetails.email)


// implementing interface to a class.

// defining interface 'Person'
interface Person {
    name: string;
    age: number;
    sayHello(): void;
  }
  
// class 'Employee' implements 'Person'
  class Employee implements Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
// creating object 'employee'
const employee = new Employee('John', 30);
employee.sayHello(); 

/**
 * functions are block of code that perform a particular task.    
 */

// defining getData() that will return a string.
function getData():string{
    return "Function returning string"
}

// defining a Addition() that will take parameter of format 'number' and return type of 'number' only.
// not passing  input3
function Addition(input1:number,input2:number,input3?:number):number{
    return input1 + input2 + (input3 || 5) // input3 = 5
}


console.log(getData())
console.log(Addition(10,5))


