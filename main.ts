#! usr/bin/env node

// Import inquirer module to take input from users
import inquirer from "inquirer";

// Set a value for Balance, the amount is in $
let myBalance = 10000;

// Set a Pin value in a variable
let myPin = 1234;

// Ask user his/her ATM pin
let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "Enter your pin",
  type: "number",
});

// ******* OUR MAIN CODE LOGIC *******

if (pinAnswer.pin === myPin) {
  // First Step - Identify the user is correct or not ?

  let operationAnswer = await inquirer.prompt(
    // If the user is authentic then ask him what he wants to do by using ATM ?
    {
      name: "operation",
      message: "What do you want ?",
      type: "list",
      choices: ["withdraw", "checkbalance"],
    }
  );

  if (operationAnswer.operation === "withdraw") {
    // If he wants to withdraw then ask him the withdrawal amount

    let amountAnswer = await inquirer.prompt(
      // Ask user to input amount to withdraw
      {
        name: "amount",
        message: "Enter your amount to withdraw",
        type: "number",
      }
    );

    myBalance = myBalance - amountAnswer.amount; // Deduct the withdrawal amount from the initial balance
    console.log("Your current balance is " + myBalance); // Display the user his/her current balance
  } else if (operationAnswer.operation === "checkbalance") {
    // If he wants to checkbalance then display current balance
    console.log("Your current balance is " + myBalance);
  }
} else {
  // If the user is not an authentic user
  console.log("Your pin is incorrect");
}
