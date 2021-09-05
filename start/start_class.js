var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.sayName = function () {
            console.log("my name is " + this.name + ", and " + this.age + " years old");
        };
        return Person;
    }());
    var Child = /** @class */ (function (_super) {
        __extends(Child, _super);
        function Child() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Child.prototype.study = function () {
            console.log(this.name + " is studting at school");
        };
        Child.prototype.hobbies = function () {
            console.log('coding,bascketball');
        };
        return Child;
    }(Person));
    var Older = /** @class */ (function (_super) {
        __extends(Older, _super);
        function Older(name, age, work) {
            var _this = _super.call(this, name, age) || this;
            _this.work = work;
            return _this;
        }
        Older.prototype.readNews = function () {
            console.log(this.name + " is reading news at home");
        };
        Older.prototype.sayName = function () {
            _super.prototype.sayName.call(this);
        };
        Older.prototype.hobbies = function () {
            console.log('reading');
        };
        return Older;
    }(Person));
    var jackJr = new Child('jackJr', 18);
    var jack = new Older('jack', 58, 'IT');
    console.log(jackJr);
    console.log(jack);
    jack.readNews();
    jackJr.study();
    jack.sayName();
    jackJr.sayName();
    jackJr.hobbies();
    jack.hobbies();
})();
