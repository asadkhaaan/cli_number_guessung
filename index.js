import inquirer from "inquirer";
// computer will generate a random number. Done
// user input for guessing number. Done
// compare user input with computer generated number show result!!!. Done
// Math.random mean only 0 to 1 in only points values so we use Math.floor can lowest number
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        message: "please guess a number between 1-10",
        type: "number",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number.");
}
