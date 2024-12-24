//class + inheritancs
class Person{

    constructor(name){
        this.name=name;
    }
    personinfo(){
        console.log(`my nam eis ${this.name}`);
        
    }
}
// class Emp extends Person{
//     constructor(name,dept){
//         super(name);
//         this.dept=dept;
//     }
//     emp(){
//         console.log(`my nam eis ${this.name}`);
//         console.log(`my nam eis ${this.dept}`);
//     }
// }
let p=new Person("dishh");
p.personinfo();


// let e1=new Emp("disha","it");
// e1.emp();
