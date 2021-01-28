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
    //Checks for a valid input (numbers). If invalid, will prompt user and restart.
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

// Inquiry function
function inquiry() {
  alert(`Your current balance is $${currentBalance}`);
  toContinue();
}

// Deposit
function deposit() {
  let depositAmount = parseInt(prompt("How much do you want to depsosit?"));
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
        currentBalance -= withdrawAmount;
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
