// Defining a class App
class App {
    name: string = "Mark"
    age: number = 23
    constructor(name: string) {
        this.name = name
    }
    getName(): string {
        return this.name
    }

}

// creating an object app
let app = new App("Sam");
console.log(app.getName())

/**
 * Inheritance
 * when one class acquires properties of parent class.
 */

// parent  class
class Parent {
    name: string = "Sam";
    setName(name) {
        this.name = name
    }

}
// Child  class extends Parent Class (i.e class Employee implements Person(interface))
class Child extends Parent {
    getName(): string {
        return this.name
    }
}

// creating  an object child.
let child = new Child()
child.setName("John")
console.log(child.getName())