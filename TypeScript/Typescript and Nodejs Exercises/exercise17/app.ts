var peopleToInvite = ["Habib", "Saad", "Taimoor", "Zeeshan"];
console.log("Hey " + peopleToInvite[0] + " I would like you to be my guest tonight");
console.log(peopleToInvite[1] + ", join me at the dinner tonight!");
console.log(peopleToInvite[2] + "! join me at the dinner tonight!");
console.log(peopleToInvite[3] + ", join me at the dinner tonight!");

var isAbleToCome : boolean = false;
if(isAbleToCome){
    console.log(peopleToInvite[3] + " join me at the dinner tonight!");
}
else{
    console.log(peopleToInvite[3] + " wouldn't be able to make it to the dinner");
    peopleToInvite.push("Anas");
    console.log(peopleToInvite[4] + " Join me at the dinner tonight!");
}

console.log("\nAlas! I have found a bigger dinner table so I would be inviting 3 more guest\n");

peopleToInvite.splice(0, 0, "Hammad");
peopleToInvite.splice(2, 0, "Asim");
peopleToInvite.push("Fahad");

for(var i = 0; i < peopleToInvite.length; i++){
    console.log("Dear " + peopleToInvite[i] + ", Join me at the dinner tonight!")
}

console.log("\nUnfortunately,my new dinner table won't be arriving in time. Hence I could only invite two people ")

for(let i = peopleToInvite.length - 1; i >= 2; i--){
    console.log("Sorry! " + peopleToInvite[i] + " I won't be able to invite you to the dinner");
    peopleToInvite.pop();
}

for(let i = 0; i < peopleToInvite.length; i++){
    console.log(peopleToInvite[i] + " You are invited in the dinner tonight");
}

peopleToInvite.pop();
peopleToInvite.pop();
console.log("Now the elements in the guest list are:")
for(let i = 0; i < peopleToInvite.length; i++){
    console.log(peopleToInvite[i] + " You are invited in the dinner tonight");
}