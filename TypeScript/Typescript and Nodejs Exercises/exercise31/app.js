var userName = [];
for (var i = 0; i < userName.length; i++) {
    if (userName[i] == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + userName[i] + ", thank you for logging in again.");
    }
}
if (userName.length == 0) {
    console.log("We need to find some users!");
}
