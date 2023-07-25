"use strict";
/**
 * Interface vs abstract class
 *
 * Interface:
 * - all members are interface.
 * - interface support multiple inheritance.
 *
 * Abstract class:
 * - some members are abstract and some are implemented.
 * - abstract  class does not  support multiple inheritance.
 * - it is  not possible to create instance of abstract class.create object of class which inherits
 * abstract class.
 * - there has to be minimum 1 abstract method in  abstract class and that method/s have to be implemented
 * in child class.
 */
// creating an abstract  class.
class Person {
    constructor(name) {
        this.name = name;
    }
    printMessage() {
        return "Hello ....";
    }
}
// class Student inheriting from Person.
class Student extends Person {
    constructor(name, studentId) {
        super(name);
        this.studentId = studentId;
    }
    // implementing find() method in Person class.
    find(name) {
        return `My name is ${name}`;
    }
}
// creating object of Student class and accessing properties.
const student = new Student("James", 1);
console.log(student.studentId);
console.log(student.printMessage());
console.log(student.find("Sam"));
