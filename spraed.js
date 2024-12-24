function sum(...item){
    let sum=0;
    for (const key in item) {
       sum+=item[key];
    }
    console.log(sum);
    
}
sum(1,2);
sum(1,2,224);

sum(1,2,24,232,42,3);


let a=[1,2,3];
let b=[5,4,3];
let c=[...a,...b];
console.log(c);


let t1={name:"xyz",city:"surat",no:2945}
let t2={name:"hwdf",pincode:834352}
let t3={...t1,...t2}
console.log(t3);


