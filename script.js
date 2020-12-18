// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowerArray = arrayRandomsLowToHigh(97, 122);
var upperArray = arrayRandomsLowToHigh(65, 90);
var numberArray = arrayRandomsLowToHigh(48, 57);
var symbolArray = arrayRandomsLowToHigh(33, 47);
var passwordFinal = [];
var lengthPass = 0;
var valiPass = "true";
var passLenght = "0";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {

  var passLenght = askLength();
  //options for the Symbol, Number and Upper
  var symbolChar = confirm("Click confirm to start Symbol Char");
  var numberChar = confirm("Click confirm to start Number Char");
  var upperChar = confirm("Click confirm to start Upper Char");
  var lowerChar = confirm("Click confirm to start Upper Char");

  if (symbolChar || numberChar || upperChar || lowerChar){
  var password = generatePassword(passLenght, symbolChar, numberChar, upperChar, lowerChar);
  passwordText.value = passwordFinal;
  }
  else {
  alert("You need to pick one of the options for the password")
  passwordText.value = "";
  writePassword();
  }
  
}

function askLength() {

  while (valiPass) {
    var lengthPass = parseInt(prompt("How long is going to be the lenght"));
    if (lengthPass === "") {
      alert("Cant be empty");
    }
    else if (lengthPass < 8 || lengthPass > 128) {
      alert("Needs to be between 8 and 128");
    }
    else {
      valiPass = "false";
      return lengthPass;
    }
  }
}
function generatePassword(passLenght, symbolChar, numberChar, upperChar, lowerChar) {

  var optionsPass = [];
  passwordFinal = [];
  if (upperChar) optionsPass = optionsPass.concat(upperArray);
  if (lowerChar) optionsPass = optionsPass.concat(lowerArray);
  if (numberChar) optionsPass = optionsPass.concat(numberArray);
  if (symbolChar) optionsPass = optionsPass.concat(symbolArray);

  for (var i = 0; i < passLenght; i++) {

    var passCode = optionsPass[Math.floor(Math.random() * optionsPass.length)];
    passwordFinal.push(String.fromCharCode(passCode));

  }
  return passwordFinal.join("");
}

function arrayRandomsLowToHigh(low, high) {
  var array = [];
  for (var i = low; i <= high; i++) {
    array.push(i);
  }
  return array
}