let placesToVisit: string[] = ["Oslo", "Kashmir", "Silicon Valley", "Austin", "Amsterdam"];
    console.log(placesToVisit);

console.log([...placesToVisit].sort());
console.log(placesToVisit)


let tempArray = [...placesToVisit].sort();
for(let i = tempArray.length - 1; i >= 0; i--){
    console.log(tempArray[i]);
}

console.log(placesToVisit)

placesToVisit.reverse();
console.log(placesToVisit)

placesToVisit.reverse();
console.log(placesToVisit)

placesToVisit.sort();
console.log(placesToVisit);

placesToVisit.reverse();
console.log(placesToVisit);