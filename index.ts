#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber= Math.floor(Math.random () * 6 + 1 )

const answers = await inquirer.prompt({
    name: "userGuessednumber",
    type: "number",
    message: "please guess a number 1-6",
});
if(answers.userGuessednumber === randomNumber) {
    console.log ("Congratulations! you guessed right number")
}
else {
    console.log("you guessed worng number")
}