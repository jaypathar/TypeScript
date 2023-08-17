/**
 * namespace is a collection of class,function etc.
 * you need to export all properties of a namespace to use it.
 */

// reference path to  namespace-2.ts
/// <reference path="namespace-2.ts"/>

// creating a namespace
namespace Market {
    // implementing interface to a class.
    export class Shoes implements shoesInterface {
        shoeBrand: string
        constructor(name: string) {
            this.shoeBrand = name
        }
        getShoes() {
            return "Nike, Adidas, " + this.shoeBrand
        }
    }
    // creating a function within th namespace.
    export function area() {
        return "This is a namespace function"
    }
}

// creating an instance
let shoes = new Market.Shoes("Reebok")
console.log(shoes.getShoes())

// function call 
console.log(Market.area())