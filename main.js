#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// print a message
console.log(chalk.red("\n \twelcome to My - ATM Machine\n \t"));
let myBalance = 30000; // Dollar
let pin = 22334;
const pinAnswer = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: (chalk.yellow("\nEnter your pin number\n")),
});
if (pinAnswer.pin === pin) {
    console.log("Pin is correct, login successfully!");
    const operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: (chalk.yellow("Please select operation")),
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        console.log(chalk.blue("Enter your desired amount"));
        const amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: (chalk.yellow("Enter your amount")),
            }
        ]);
        if (amountAnswer.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log(`your remaining amount is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "fast cash") {
        console.log("Select amount");
        const cash = await inquirer.prompt([
            {
                name: "fast cash",
                type: "list",
                message: (chalk.yellow("Select your amount")),
                choices: ["2000", "5000", "6000", "8000", "10000", "15000", "20000", "25000"]
            }
        ]);
        console.log("transaction successfull!");
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your current balance is ${myBalance}`);
    }
}
else {
    console.log("Incorret pin code, Try again");
}
