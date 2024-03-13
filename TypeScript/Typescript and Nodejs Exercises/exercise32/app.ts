let current_user: String[] = ["Ahmed", "Admin", "Ali", "Raza", "Hammad"];
let new_user: string[] = ["Taimoor", "Anas", "ali", "Bilal", "Admin"];
for(let i = 0; i < new_user.length; i++){
    let isTaken: boolean = false;
    for(let j = 0; j < current_user.length; j++){
        if(new_user[i].toLowerCase() == current_user[j].toLowerCase()){
            isTaken = true;
        }
    }
    if(isTaken == true){
        console.log("UseName " + new_user[i] + " is already taken, try with another userName.")
    }
    else{console.log("The userName " + new_user[i] + " is available.")}
}