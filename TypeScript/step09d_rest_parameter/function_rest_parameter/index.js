"use strict";
/*let a: string = "Hello";
console.log(typeof(a));*/
function b(...info) {
    let stringArr = ["String not passed as an argument"];
    let numberArr = [0];
    let j = 0;
    let k = 0;
    for (let i = 0; i < info.length; i++) {
        if (typeof info[i] === "string") {
            stringArr[j] = info[i];
            j++;
        }
        if (typeof info[i] === "number") {
            numberArr[k] = info[i];
            k++;
        }
    }
    return "String: " + stringArr + "\nNumber: " + numberArr;
}
console.log(b("Hello", "World", 2, 5, 7, "Hello again", 6, 9, 4, "World again"));
//console.log(b(2, 5, 7, "Hello again", 6, 9, 4, "World agin"));
/*let c :any[] = [1,2,3, "Hello"];
console.log(typeof(c[0]));
console.log(typeof(c[3]));
if(typeof c[3] === "string"){
    console.log("s");
}
if(typeof c[0] === "number"){
    console.log("n");
}*/ 
