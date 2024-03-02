var peopleToInvite = ["Habib", "Saad", "Taimoor", "Zeeshan"];
console.log("Hey " + peopleToInvite[0] + " I would like you to be my guest tonight");
console.log(peopleToInvite[1] + ", join me at the dinner tonight!");
console.log(peopleToInvite[2] + "! join me at the dinner tonight!");
console.log(peopleToInvite[3] + ", join me at the dinner tonight!");
var isAbleToCome = false;
if (isAbleToCome) {
    console.log(peopleToInvite[4] + " join me at the dinner tonight!");
}
else {
    console.log(peopleToInvite[4] + " wouldn't be able to make it to the dinner");
    peopleToInvite.push("Anas");
    console.log(peopleToInvite[5] + " Join me at the dinner tonight!");
}
console.log("\nAlas! I have found a bigger dinner table so I would be inviting 3 more guest\n");
peopleToInvite.splice(0, 0, "Hammad");
peopleToInvite.splice(2, 0, "Asim");
peopleToInvite.push("Fahad");
for (var i = 0; i < peopleToInvite.length; i++) {
    console.log("Dear " + peopleToInvite[i] + ", Join me at the dinner tonight!");
}
