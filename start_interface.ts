/**
 *  In TypeScript, interfaces fill the role of naming these types, 
 *  and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.
 */

interface myInter{
    name: string
    sayName(): void
}

class myClass implements myInter{
    name: string;
    constructor(name: string){
        this.name = name
    }
    sayName(): void {
        throw new Error("Method not implemented.");
    }
}

let myclass = new myClass('jack')
console.log(myclass);
