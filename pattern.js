
// 1
text="";
for (let i = 0; i <=5; i++) {
    for (let j = 0; j <= 5; j++) {
        text+="&";
    
    }
    text+="\n";
}
console.log(text);


// 2
text="";
for (let i = 0; i <=5; i++) {
    for (let j = 0; j <= 5; j++) {
        text+=i;
    
    }
    text+="\n";
}
console.log(text);

// 3
text="";
for (let i = 1; i <=5; i++) {
    for (let j = 1; j <= 5; j++) {
        text+=j;
    
    }
    text+="\n";
}
console.log(text);

//4
text="";
for (let i = 1; i <=5; i++) {
    for (let j = 1; j <= i; j++) {
        text+=j;
    
    }
    text+="\n";
}
console.log(text);



//5
text="";
for (let i = 1; i <=5; i++) {
    for (let j = 1; j <= i; j++) {
        text+=i;
    
    }
    text+="\n";
}
console.log(text);

//6
text="";
let count=1;
for (let i = 1; i <=5; i++) {
    for (let j = 1; j <= i; j++) {
        text+=count+"  ";
        count++;
    
    }
    text+="\n";
}
console.log(text);


// 7
text="";
for (let i = 1; i <=5; i++) {
    for (let j = 5; j >= 1; j--) {
        text+=j;
    
    }
    text+="\n";
}
console.log(text);

// 8
text="";
for (let i = 5; i >=1; i--) {
    for (let j = 1; j <= 5; j++) {
        text+=i;
    
    }
    text+="\n";
}
console.log(text);

// 9
text="";
for (let i = 1; i <=5; i++) {
    for (let j = 1; j <= i; j++) {
        text+=j;
    
    }
    text+="\n";
}
console.log(text);

//10
text="";
for (let i = 1; i <=5; i++) {
    for (let k = 5; k >= i; k--) {
        text+=" ";
    
    }
    for (let j = 1; j <= i; j++) {
        text+=i;
    
    }
    text+="\n";
}
console.log(text);
