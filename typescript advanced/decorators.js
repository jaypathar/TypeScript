/**
 * A decorator is nothing but function to extend functionality of class.
 * A Decorator is a special kind of declaration that can be applied to classes, methods, accessor,
 * property, or parameter. Decorators are simply functions that are prefixed @expression symbol, where
 * expression must evaluate to a function that will be called at runtime with information about the
 * decorated declaration.
 */
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
/**
 * decorator factories: A Decorator Factory is simply a function that returns the expression that will be
 * called by the decorator at runtime.
 */
function first() {
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("first(): called");
    };
}
function second() {
    console.log("second(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("second(): called");
    };
}
var ExampleClass = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _method_decorators;
    return _a = /** @class */ (function () {
            function ExampleClass() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            ExampleClass.prototype.method = function () { };
            return ExampleClass;
        }()),
        (function () {
            _method_decorators = [first(), second()];
            __esDecorate(_a, null, _method_decorators, { kind: "method", name: "method", static: false, private: false, access: { has: function (obj) { return "method" in obj; }, get: function (obj) { return obj.method; } } }, null, _instanceExtraInitializers);
        })(),
        _a;
}();
// class decorator.
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
// implemented before start of class.
var BugReport = function () {
    var _classDecorators = [sealed];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var BugReport = _classThis = /** @class */ (function () {
        function BugReport_1(t) {
            this.type = "report";
            this.title = t;
        }
        return BugReport_1;
    }());
    __setFunctionName(_classThis, "BugReport");
    (function () {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        BugReport = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return BugReport = _classThis;
}();
//  method decorator.
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var Greeter = function () {
    var _a;
    var _instanceExtraInitializers_1 = [];
    var _greet_decorators;
    return _a = /** @class */ (function () {
            function Greeter(message) {
                this.greeting = (__runInitializers(this, _instanceExtraInitializers_1), void 0);
                this.greeting = message;
            }
            // implemented before greet().
            Greeter.prototype.greet = function () {
                return "Hello, " + this.greeting;
            };
            return Greeter;
        }()),
        (function () {
            _greet_decorators = [enumerable(false)];
            __esDecorate(_a, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: function (obj) { return "greet" in obj; }, get: function (obj) { return obj.greet; } } }, null, _instanceExtraInitializers_1);
        })(),
        _a;
}();
