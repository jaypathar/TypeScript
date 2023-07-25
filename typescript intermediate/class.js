"use strict";
// Defining a class App
class App {
    constructor(name) {
        this.name = "Mark";
        this.age = 23;
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
// creating an object app
let app = new App("Sam");
console.log(app.getName());
/**
 * Inheritance
 * when one class acquires properties of parent class.
 */
// parent  class
class Parent {
    constructor() {
        this.name = "Sam";
    }
    setName(name) {
        this.name = name;
    }
}
// Child  class extends Parent Class (i.e class Employee implements Person(interface))
class Child extends Parent {
    getName() {
        return this.name;
    }
}
// creating  an object child.
let child = new Child();
child.setName("John");
console.log(child.getName());
