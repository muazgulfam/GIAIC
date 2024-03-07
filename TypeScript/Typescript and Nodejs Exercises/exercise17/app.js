var peopleToInvite = ["Habib", "Saad", "Taimoor", "Zeeshan"];
console.log("Hey " + peopleToInvite[0] + " I would like you to be my guest tonight");
console.log(peopleToInvite[1] + ", join me at the dinner tonight!");
console.log(peopleToInvite[2] + "! join me at the dinner tonight!");
console.log(peopleToInvite[3] + ", join me at the dinner tonight!");
var isAbleToCome = false;
if (isAbleToCome) {
    console.log(peopleToInvite[3] + " join me at the dinner tonight!");
}
else {
    console.log(peopleToInvite[3] + " wouldn't be able to make it to the dinner");
    peopleToInvite.push("Anas");
    console.log(peopleToInvite[4] + " Join me at the dinner tonight!");
}
console.log("\nAlas! I have found a bigger dinner table so I would be inviting 3 more guest\n");
peopleToInvite.splice(0, 0, "Hammad");
peopleToInvite.splice(2, 0, "Asim");
peopleToInvite.push("Fahad");
for (var i = 0; i < peopleToInvite.length; i++) {
    console.log("Dear " + peopleToInvite[i] + ", Join me at the dinner tonight!");
}
console.log("\nUnfortunately,my new dinner table won't be arriving in time. Hence I could only invite two people ");
for (var i_1 = peopleToInvite.length - 1; i_1 >= 2; i_1--) {
    console.log("Sorry! " + peopleToInvite[i_1] + " I won't be able to invite you to the dinner");
    peopleToInvite.pop();
}
for (var i_2 = 0; i_2 < peopleToInvite.length; i_2++) {
    console.log(peopleToInvite[i_2] + " You are invited in the dinner tonight");
}
peopleToInvite.pop();
peopleToInvite.pop();
console.log("Now the elements in the guest list are:");
for (var i_3 = 0; i_3 < peopleToInvite.length; i_3++) {
    console.log(peopleToInvite[i_3] + " You are invited in the dinner tonight");
}
