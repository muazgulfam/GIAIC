#! /usr/bin/env node

import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";


let userData = {
    pin: 1234,
    balance: 100000
};


function showBalance(): void {
    console.log("Your current balance is " + userData.balance);
}


const result = await inquirer.prompt([
    {
        name: "passcode",
        type: "password",
        mask: '*',
        message: "Please enter your Pin",
        validate:function (ans){
            if(ans == userData.pin){
                //console.log("\nCorect Pin code!")
                return true;
            }
            else{return "Incorrect Password";}
        }
    },

    {
        name: "atmOperation",
        type: "list",
        message: "Which operation do you want to perform",
        choices: 
            [
                "Check current Balance",
                "Withdraw"
            ]  
    }
]);


if(result.atmOperation === "Check current Balance"){
    showBalance();
}
else if(result.atmOperation === "Withdraw"){
    const withDrawAmount = await inquirer.prompt(
        {
            message: "Enter the amount you want to Withdraw",
            name: "amount",
            type: "number",
            validate: (ans) =>{
                if(ans <= userData.balance){
                    return true;
                }
                else{return "Invalid amount selected\nInsufficient Balance!";}
            }
        }
    );
    console.log("an amount " + withDrawAmount.amount + " have been withdrawed form you account");
    userData.balance -= withDrawAmount.amount;
    showBalance();
}
else{console.log("Invalid Choice");}

