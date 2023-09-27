// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var alphabetLower = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["0123456789"];
var specialCharacters = ["!@#$%^&*()-_=+[{}];:'<>,./?"];
var multiSelect = [];
// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
function generatePassword() {
  var passwordLength = window.prompt("How many characters would you like your password to contain? Must be between 8-128 characters long");
  var randomPassword = "";
  
  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters long.");
    return;
  }
  
  else {
    var specialSelection = confirm("Click OK to confirm special characters");
    var numericSelection = confirm("Click OK to confirm numbers");
    var uppercaseSelection = confirm("Click OK to confirm uppercase characters");
    var lowercaseSelection = confirm("Click OK to confirm lowercase characters");
  }
  if (specialSelection) { multiSelect += multiSelect.concat(specialCharacters)};
  if (numericSelection) { multiSelect += multiSelect.concat(numbers)};
  if (uppercaseSelection) { multiSelect += multiSelect.concat(alphabet)};
  if (lowercaseSelection) { multiSelect += multiSelect.concat(alphabetLower)};

  if (!specialSelection && !numericSelection && !uppercaseSelection && !lowercaseSelection) {
    alert("You must confirm atleast one option.")
    return;
  }

  for (var i = 0; i < passwordLength; i++) {
    randomPassword += multiSelect[Math.floor(Math.random() * multiSelect.length)]

    
  }
   writePassword(randomPassword);
 }
