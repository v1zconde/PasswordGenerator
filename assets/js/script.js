// Variables
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowerArray = arrayRandomsLowToHigh(97, 122);
var upperArray = arrayRandomsLowToHigh(65, 90);
var numberArray = arrayRandomsLowToHigh(48, 57);
var symbolArray = arrayRandomsLowToHigh(33, 47);
var passwordFinal = [];
var passpass = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {

  determineOptions();
  passwordText.value = passpass;

}

function determineOptions() {
  //Validate they put a number between 8-128 and its not empty
  var lengthPass = parseInt(prompt("How long is going to be the password lenght"));

  console.log(lengthPass);

  if (isNaN(lengthPass)) {
    alert("Need to input a number");
    determineOptions();
  }
  else if (lengthPass < 8 || lengthPass > 128) {
    alert("The number need to be between 8 and 128");
    determineOptions();
  }
  else {

    console.log("test");

    var symbolChar = confirm("Click confirm to add Symbol Char in your password");
    var numberChar = confirm("Click confirm to add Number Char in your password");
    var upperChar = confirm("Click confirm to add Upper Char in your password");
    var lowerChar = confirm("Click confirm to add Upper Char in your password");
    if (symbolChar || numberChar || upperChar || lowerChar) {
      passpass = generatePassword(lengthPass, symbolChar, numberChar, upperChar, lowerChar);
    }
    else {
      alert("You need to pick one of the options for the password")
      passwordText.value = "";
      determineOptions();
    }
    return lengthPass;

  }
}

function generatePassword(passLenght, symbolChar, numberChar, upperChar, lowerChar) {
  //Concat of the arrays depending their response from the confirms.
  var optionsPass = [];
  passwordFinal = [];
  if (upperChar) optionsPass = optionsPass.concat(upperArray);
  if (lowerChar) optionsPass = optionsPass.concat(lowerArray);
  if (numberChar) optionsPass = optionsPass.concat(numberArray);
  if (symbolChar) optionsPass = optionsPass.concat(symbolArray);
  // for loop to get the characters from the arraw called optionPass

  for (var i = 0; i < passLenght; i++) {
    //making the numbers to characters for the password
    var passCode = optionsPass[Math.floor(Math.random() * optionsPass.length)];
    passwordFinal.push(String.fromCharCode(passCode));

  }

  return passwordFinal.join("");
}

//function to run through the numbers and make the array
function arrayRandomsLowToHigh(low, high) {
  var array = [];
  for (var i = low; i <= high; i++) {
    array.push(i);
  }
  return array
}
