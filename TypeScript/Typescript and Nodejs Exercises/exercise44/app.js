function createSandwich() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log("The items to be added in the Sandwich are:");
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
createSandwich("Chicken", "Salad", "Ketchup");
