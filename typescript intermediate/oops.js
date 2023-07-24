// declaring a class user.
var User = /** @class */ (function () {
    function User() {
        // private variable - accessible only within the class.
        this.name = "";
    }
    // setName(): to assign value to 'name'.
    User.prototype.setName = function (name) {
        this.name = name;
    };
    // to get 'name'.
    User.prototype.getName = function () {
        console.log(this.name);
    };
    // printing length of string. && can't access outside the class
    User.prototype.getNameLength = function () {
        console.log(this.name.length);
    };
    return User;
}());
var user = new User();
user.setName("John");
user.getName();
