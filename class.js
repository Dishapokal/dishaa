//person
// admin,car,bank,emp
//class + inheritancs
class Person{

    constructor(name){
        this.name=name;
    }
    personinfo(){
        console.log(`my nam eis ${this.name}`);
        
    }
}
let p=new Person("dishh");
p.personinfo();
// admin
class Admin{

    constructor(name){
        this.name=name;
    }
    hello(){
        console.log(`my name is ${this.name}`);
        
    }
}
let a1=new Admin("dishh");
a1.hello();

// car
class Car{

    constructor(name,price){
        this.name=name;
        this.price=price
    }
    carr(){
        console.log(`my name is ${this.name}`);
        console.log(`my price is ${this.price}`);
        
    }
}
let c=new Car("ford","780000");
c.carr();


// emp
class Emp{

    constructor(name,salary){
        this.name=name;
        this.salary=salary
    }
    empp(){
        console.log(`my name is ${this.name}`);
        console.log(`my salary is ${this.salary}`);
        
    }
}
let e=new Emp("fenali","780000");
e.empp();
