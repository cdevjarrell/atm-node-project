"use strict";

const prompt = require("prompt-sync")();
const atm = require("./atm");

console.log("Welcome to Mythical Banking! Please enter your 4 digit PIN!");

function runATM() {
  atm.pin();
}

runATM();
