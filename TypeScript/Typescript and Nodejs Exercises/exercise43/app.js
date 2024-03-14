var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var new_array = __spreadArray([], arrayOfMagicians, true);
make_great(new_array);
console.log("The old array is:");
show_magicians(arrayOfMagicians);
console.log("\nThe new array is:");
show_magicians(new_array);
