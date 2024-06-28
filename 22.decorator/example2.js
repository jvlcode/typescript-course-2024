var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logMethod(target, propertyKey, descriptor) {
    var orignalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Calling ".concat(propertyKey, " method with arguments ").concat(args.join(',')));
        var result = orignalMethod.apply(this, args);
        console.log("Result:".concat(result));
        return result;
    };
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        var result = a + b;
        return result;
    };
    Calculator.prototype.subtract = function (a, b) {
        var result = a - b;
        return result;
    };
    __decorate([
        logMethod
    ], Calculator.prototype, "add", null);
    __decorate([
        logMethod
    ], Calculator.prototype, "subtract", null);
    return Calculator;
}());
var calculator = new Calculator();
calculator.add(5, 3);
calculator.subtract(7, 2);
