"use strict";

//Set PIN for the account
let userPin = 1357;

//Input the valid PIN
function accountPinInput() {
  let passwordEntry = parseInt(prompt("Please enter your 4 digit PIN."));
  checkPassword(passwordEntry);
}

//Check the PIN user entered. If correct, open account type select menu. If incorrect, alert user and reprompt for input.
function checkPin(userInput) {
  if (userInput === userPin) {
    accountOptions();
  } else {
    alert("Incorrect PIN. Please try again.");
    accountPinInput();
  }
}

//Menu to choose what to do with account.
function accountOptions() {
  let machineFunctions = parseInt(
    prompt(
      "Hello, User. How can Mythical Banking help you today? \n 1. Inquiry \n 2. Withdrawal \n 3. Deposit \n 4. Exit"
    )
  );

  if (
    machineFunctions !== "" &&
    machineFunctions !== null &&
    isNaN(machineFunctions)
  ) {
    switch (machineFunctions) {
      case 1:
        inquiry();
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
        alert("Please make a valid selection.");
        accountOptions();
    }
  } else {
    alert("Please make a valid selection.");
    accountOptions();
  }
}
