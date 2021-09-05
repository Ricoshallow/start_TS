(function(){
    abstract class Person {
        name: string
        age: number
        constructor(name: string, age: number){
            this.name = name
            this.age = age
        }
        sayName(){
            console.log(`my name is ${this.name}, and ${this.age} years old`);
        }
        abstract hobbies(): void
    }
    
    class Child extends Person{
        study(){
            console.log(`${this.name} is studting at school`);
            
        }
        hobbies(){
            console.log('coding,bascketball');
            
        }
    }
    
    class Older extends Person{
        work: string
        constructor(name: string, age: number, work: string){
            super(name, age)
            this.work = work
        }
        readNews(){
            console.log(`${this.name} is reading news at home`);
            
        }
        sayName(){
            super.sayName()
        }
        hobbies(){
            console.log('reading');
            
        }
    
    }
    
    let jackJr = new Child('jackJr', 18)
    let jack = new Older('jack', 58,'IT')

    console.log(jackJr);
    console.log(jack);
    

    jack.readNews()
    jackJr.study()
    jack.sayName()
    jackJr.sayName()
    jackJr.hobbies()
    jack.hobbies()

    
})()



