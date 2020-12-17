// Variables
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowerArray = arrayRandomsLowToHigh(97,122);
var upperArray = arrayRandomsLowToHigh(65,90);
var numberArray = arrayRandomsLowToHigh(48,57);
var symbolArray = arrayRandomsLowToHigh(33,47);
var passwordfinal =[];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var passLenght = parseInt(prompt("How long is going to be the lenght"));
  var symbolChar = confirm("Click confirm to start symbol Char");
  var numberChar = confirm("Click confirm to start number Char");
  var upperChar = confirm("Click confirm to start upper Char");
  
  var password = generatePassword(passLenght, symbolChar, numberChar, upperChar);
 
  //print the password to the DOM
  passwordText.value = passwordfinal;
 
}

function generatePassword(passLenght, symbolChar, numberChar, upperChar) {
 
  var optionsPass = lowerArray;
  console.log(optionsPass);

  if (upperChar) optionsPass = optionsPass.concat(upperArray);
  if (numberChar) optionsPass = optionsPass.concat(numberArray);
  if (symbolChar) optionsPass = optionsPass.concat(symbolArray);
  
  console.log(optionsPass);
  
  for (var i = 0; i < passLenght; i++){

    var passcode = optionsPass[Math.floor(Math.random() * optionsPass.length)];
    passwordfinal.push(String.fromCharCode(passcode));
    console.log(passwordfinal);
    
  } 
   return passwordfinal.join("");
}

function arrayRandomsLowToHigh(low,high){
 var array = [];
 for (var i = low; i <= high; i++){
  array.push(i);
 }
 return array
}