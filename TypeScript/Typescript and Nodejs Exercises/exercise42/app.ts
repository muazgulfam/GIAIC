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
make_great(arrayOfMagicians);
show_magicians(arrayOfMagicians);