function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
var arrayOfMagicians = ["Jabbar", "Ghaffar", "Ghufran"];
make_great(arrayOfMagicians);
show_magicians(arrayOfMagicians);
