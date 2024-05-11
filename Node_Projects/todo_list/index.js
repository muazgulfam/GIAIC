import inquirer from "inquirer";
let myTodos = [];
let condition = true;
while (condition) {
    let result = await inquirer.prompt([
        {
            message: "Write anything you want to remember",
            type: "input",
            name: "todo"
        },
        {
            message: "Do you wan't to add more",
            type: "confirm",
            name: "addmore"
        }
    ]);
    myTodos.push(result.todo);
    condition = result.addmore;
}
console.log(myTodos);
