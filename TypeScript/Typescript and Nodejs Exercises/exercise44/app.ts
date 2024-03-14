function createSandwich(...arr: string[]){
    console.log("The items to be added in the Sandwich are:")
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

createSandwich("Chicken", "Salad", "Ketchup");
createSandwich("Beef", "Lettuce");
createSandwich("Chicken", "Cheese", "Tomato");

