class Apple {
    _color: string
    // When a member is marked as private, it cannot be accessed outside the class in which it is declared
    // while The protected members are still accessible in the derived class
    private _shape: string
    constructor(color, shape) {
        this._color = color
        this._shape = shape
    }
    // // we can define a method to read private property
    // getShape(){
    //     return this._shape
        
    // }

    // // we can define a method to reset private property
    // setShape(value: string){
    //     this._shape = value
    // }


    // we can use accessor in TS
    get shape(){
        return this._shape
    }

    set shape(value: string){
        this._shape = value
    }
}

const apple = new Apple('red', 'round')

// console.log(apple._color);

// console.log(apple.getShape());

// apple.setShape('oval');

// console.log(apple);

console.log(apple.shape);
apple.shape = 'oval'
console.log(apple);





