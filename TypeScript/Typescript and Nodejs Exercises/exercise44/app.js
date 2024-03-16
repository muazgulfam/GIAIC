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
var sandwich1 = createSandwich("Chicken", "Salad", "Ketchup", "Mayonnaise");
console.log(sandwich1);
var sandwich2 = createSandwich("Beef", "Lettuce");
console.log(sandwich2);
var sandwich3 = createSandwich("Chicken", "Cheese", "Tomato");
console.log(sandwich3);
