function show_magicians(magicians: string[]){
    for(let i = 0; i < magicians.length; i++){
        console.log(magicians[i]);
    }
}

function make_great(magicians:string[]){
    for(let i = 0; i < magicians.length; i++){
        magicians[i] = "The Great " + magicians[i];
    }
}


let arrayOfMagicians: string[] = ["Jabbar", "Ghaffar", "Ghufran"];
let new_array: string[] = [...arrayOfMagicians];
make_great(new_array);
console.log("The old array is:")
show_magicians(arrayOfMagicians);
console.log("\nThe new array is:")
show_magicians(new_array)