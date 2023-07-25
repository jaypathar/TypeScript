/**
 * namespace is a collection of class,function etc.
 * you need to export all properties of a namespace to use it.
 */
// reference path to  namespace-2.ts
/// <reference path="namespace-2.ts"/>
// creating a namespace
var Market;
(function (Market) {
    // implementing interface to a class.
    var Shoes = /** @class */ (function () {
        function Shoes(name) {
            this.shoeBrand = name;
        }
        Shoes.prototype.getShoes = function () {
            return "Nike, Adidas, " + this.shoeBrand;
        };
        return Shoes;
    }());
    Market.Shoes = Shoes;
    // creating a function within th namespace.
    function area() {
        return "This is a namespace function";
    }
    Market.area = area;
})(Market || (Market = {}));
// creating an instance
var shoes = new Market.Shoes("Reebok");
console.log(shoes.getShoes());
// function call 
console.log(Market.area());
