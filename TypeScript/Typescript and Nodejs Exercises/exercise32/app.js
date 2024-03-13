var current_user = ["Ahmed", "Admin", "Ali", "Raza", "Hammad"];
var new_user = ["Taimoor", "Anas", "ali", "Bilal", "Admin"];
for (var i = 0; i < new_user.length; i++) {
    var isTaken = false;
    for (var j = 0; j < current_user.length; j++) {
        if (new_user[i].toLowerCase() == current_user[j].toLowerCase()) {
            isTaken = true;
        }
    }
    if (isTaken == true) {
        console.log("UseName " + new_user[i] + " is already taken, try with another userName.");
    }
    else {
        console.log("The userName " + new_user[i] + " is available.");
    }
}
