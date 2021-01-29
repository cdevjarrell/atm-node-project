"use strict";

// import from account.js, and assign the return of the require to a variable, that you will then call your properties and functions from
const prompt = require("prompt-sync")();
const account = require("./account");
const userPin = account.userPin;

const balance = account.balance;

let currentBalance = balance;

let requiredPin = userPin;

//Input the valid PIN
function accountPinInput() {
  console.log("Please enter your 4 digit PIN");
  let pinEntry = prompt();
  validatePin(pinEntry);
}

//Check the PIN user entered. If correct, open account type select menu. If incorrect, alert user and reprompt for input.
function validatePin(userInput) {
  if (userInput === requiredPin) {
    accountOptions();
  } else {
    console.log("Incorrect PIN. Please try again.");
    accountPinInput();
  }
}

//Menu to choose what to do with account.
function accountOptions() {
  console.log(
    "Hello, User. How can Mythical Banking help you today? \n 1. Balance \n 2. Withdrawal \n 3. Deposit \n 4. Exit"
  );

  let machineFunctions = prompt();

  if (
    //Checks for a valid input (numbers). If invalid, will prompt user and restart.
    machineFunctions !== "" &&
    machineFunctions !== null &&
    !isNaN(machineFunctions)
  ) {
    switch (machineFunctions) {
      case 1:
        getBalance();
        break;
      case 2:
        withdrawl();
        break;
      case 3:
        deposit();
        break;
      case 4:
        exit();
        break;
      default:
        console.log("Please make a valid selection.");
        accountOptions();
    }
  } else {
    console.log("Please make a valid selection.");
    accountOptions();
  }
}

// Inquiry function
function getBalance() {
  alert(`Your current balance is $${currentBalance}`);
  toContinue();
}

// Deposit
function deposit(data) {
  let depositAmount = parseInt(prompt("How much do you want to deposit?"));
  if (depositAmount !== "" && depositAmount !== null && !isNaN(depositAmount)) {
    currentBalance += depositAmount;
    alert(
      `You have successfully deposited $${depositAmount}. \n You now have $${currentBalance}`
    );
    toContinue();
  } else {
    alert("Invalid input! Please enter a number!");
    deposit();
  }
}

// Withdraw

function withdraw() {
  let withdrawAmount = parseInt(
    prompt(
      "How much do you want to withdraw? \n " +
        "The maximum amount you can withdraw is $500 a day."
    )
  );
  if (
    withdrawAmount !== "" &&
    withdrawAmount !== null &&
    !isNaN(withdrawAmount)
  ) {
    if (withdrawAmount <= 500) {
      if (withdrawAmount <= currentBalance) {
        balance -= withdrawAmount;
        alert("Transaction successful!");
        alert(`Your remaining balance is $${currentBalance}`);
        toContinue();
      } else {
        alert("You do not have sufficient funds!");
        withdraw();
      }
    } else {
      alert("You cannot withdraw more than $500 a day.");
      withdraw();
    }
  } else {
    alert("Invalid input! Please enter a number");
    withdraw();
  }
}

// Does the user wish to continue using the ATM?
function toContinue() {
  let yesOrNo = parseInt(
    prompt("Do you want to perform another transation?\n 1. Yes\n 2. No")
  );
  if (yesOrNo !== "" && yesOrNo !== null) {
    if (yesOrNo === 2) {
      exit();
    } else {
      accountOptions();
    }
  } else {
    alert("Please make a valid selection");
    toContinue();
  }
}

// Exit ATM
function exit() {
  alert("Thank you for using Mythical Banking");
}

//Modulate all functions
module.exports.pin = accountPinInput;
module.exports.validate = validatePin;
module.exports.getBalance = getBalance;
module.exports.deposit = deposit;
module.exports.withdraw = withdraw;
module.exports.toContinue = toContinue;
module.exports.exit = exit;
