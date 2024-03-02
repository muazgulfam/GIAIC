var peopleToInvite = ["Habib", "Saad", "Taimoor", "Zeeshan"];
console.log("Hey " + peopleToInvite[0] + " I would like you to be my guest tonight");
console.log(peopleToInvite[1] + ", join me at the dinner tonight");
console.log(peopleToInvite[2] + "! join me at the dinner tonight");
console.log(peopleToInvite[3] + ", join me at the dinner tonight");

var isAbleToCome : boolean = false;
if(isAbleToCome){
    console.log(peopleToInvite[3] + " join me at the dinner tonight");
}
else{
    console.log(peopleToInvite[3] + "wouldn't be able to make it to the dinner");
    peopleToInvite.push("Anas");
    console.log(peopleToInvite[4] + " Join me at the dinner tonight!");
}