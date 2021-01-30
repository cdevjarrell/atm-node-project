"use strict";

const prompt = require("prompt-sync")();
const atm = require("./atm");

console.log("Welcome to Mythical Banking!");

function runATM() {
  atm.pin();
}

runATM();
