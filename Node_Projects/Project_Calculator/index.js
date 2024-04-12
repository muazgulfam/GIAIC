#! /usr/bin/env node
import inquirer from "inquirer";
let result = await inquirer.prompt([
    {
        message: "Enter your first number",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Select one of the operator to perform an arithmetic operation",
        type: "list",
        name: "operator",
        choices: ["/", "*", "+", "-", "%"]
    },
    {
        message: "Enter your second number",
        type: "number",
        name: "secondNumber"
    }
]);
if (result.operator == "Additon") {
    console.log(result.firstNumber + result.secondNumber);
}
else if (result.operator == "-") {
    console.log(result.firstNumber - result.secondNumber);
}
else if (result.operator == "*") {
    console.log(result.firstNumber * result.secondNumber);
}
else if (result.operator == "/") {
    console.log(result.firstNumber / result.secondNumber);
}
else if (result.operator == "%") {
    console.log(result.firstNumber % result.secondNumber);
}
else {
    console.log("Invalid selection! Please select a valid operator");
}
