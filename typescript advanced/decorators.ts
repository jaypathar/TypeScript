/**
 * A decorator is nothing but function to extend functionality of class.
 * A Decorator is a special kind of declaration that can be applied to classes, methods, accessor, 
 * property, or parameter. Decorators are simply functions that are prefixed @expression symbol, where 
 * expression must evaluate to a function that will be called at runtime with information about the 
 * decorated declaration.
 */

/**
 * decorator factories: A Decorator Factory is simply a function that returns the expression that will be 
 * called by the decorator at runtime.
 */
function first() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("first(): called");
    };
}

function second() {
    console.log("second(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("second(): called");
    };
}

class ExampleClass {
    @first()
    @second()
    method() { }
}

// class decorator.
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// implemented before start of class.
@sealed
class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}

//  method decorator.
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}


class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    // implemented before greet().
    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}