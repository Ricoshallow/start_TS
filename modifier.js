var Apple = /** @class */ (function () {
    function Apple(color, shape) {
        this._color = color;
        this._shape = shape;
    }
    Object.defineProperty(Apple.prototype, "shape", {
        // // we can define a method to read private property
        // getShape(){
        //     return this._shape
        // }
        // // we can define a method to reset private property
        // setShape(value: string){
        //     this._shape = value
        // }
        // we can use accessor in TS
        get: function () {
            return this._shape;
        },
        set: function (value) {
            this._shape = value;
        },
        enumerable: false,
        configurable: true
    });
    return Apple;
}());
var apple = new Apple('red', 'round');
// console.log(apple._color);
// console.log(apple.getShape());
// apple.setShape('oval');
// console.log(apple);
console.log(apple.shape);
apple.shape = 'oval';
console.log(apple);
