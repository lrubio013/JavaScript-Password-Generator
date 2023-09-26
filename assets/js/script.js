// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","}","]",";",":","'","<",">",",",".","/","?"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = window.prompt("How many characters would you like your password to contain? Must be between 8-128 characters long");
  
  if (passwordLength <8 || passwordLength >128) {
  window.alert("Password must be between 8 and 128 characters long.");
    return; 
  
  } else {
  var specialSelection = confirm("Click OK to confirm special characters");
  var numericSelection = confirm("Click OK to confirm numbers");
  var uppercaseSelection = confirm("Click OK to confirm uppercase characters");
  var lowercaseSelection = confirm("Click OK to confirm lowercase characters");


  }




return password;

  
}
generatePassword();
