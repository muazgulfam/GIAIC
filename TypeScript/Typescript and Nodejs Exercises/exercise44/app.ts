function createSandwich(...arr: string[]){
    console.log("The items to be added in the Sandwich are:")
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

let sandwich1 = createSandwich("Chicken", "Salad", "Ketchup", "Mayonnaise");
console.log(sandwich1);
let sandwich2 = createSandwich("Beef", "Lettuce");
console.log(sandwich2);
let sandwich3 = createSandwich("Chicken", "Cheese", "Tomato");
console.log(sandwich3);