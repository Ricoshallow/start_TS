/**
 *  In TypeScript, interfaces fill the role of naming these types,
 *  and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.
 */
var myClass = /** @class */ (function () {
    function myClass(name) {
        this.name = name;
    }
    myClass.prototype.sayName = function () {
        throw new Error("Method not implemented.");
    };
    return myClass;
}());
var myclass = new myClass('jack');
console.log(myclass);
