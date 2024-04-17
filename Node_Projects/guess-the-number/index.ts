#! /usr/bin/env node

import inquirer from "inquirer";

const generatedNum = Math.floor(Math.random() * 5);
//console.log(generatedNum);

let isCorrect = false;
while(!isCorrect){
    const result = await inquirer.prompt([
        {
            name: "guessedNum",
            type: "number",
            message: "Guess a number between 0 and 5:"
        }
    ])

    if(result.guessedNum === generatedNum){
        console.log("Congrats! You guessed it right");
        isCorrect = true;
    }
    else{console.log("Better luck next time! Try again");}
}