var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < list.length; i++) {
    if (list[i] == 1) {
        console.log(list[i] + "st");
    }
    else if (list[i] == 2) {
        console.log(list[i] + "nd");
    }
    else if (list[i] == 3) {
        console.log(list[i] + "rd");
    }
    else {
        console.log(list[i] + "th");
    }
}
