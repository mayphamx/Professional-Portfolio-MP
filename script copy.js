// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start code here
function generatePassword() {
  var length = window.prompt("How many characters would you like in your password?");

  if (length < 8 || length > 128) {
    window.alert("Invalid. Please select a number between 8 and 128.");
    return;
  }

  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "/", ":", ";", "<", ">", ",", ".", "?"];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  var yesLower = window.confirm("Would you like lowercase alphabetic characters in your password?");
  var yesUpper = window.confirm("Would you like uppercase alphabetic characters in your password?");
  var yesSpecial = window.confirm("Would you like special characters in your password?");
  var yesNumbers = window.confirm("Would you like numeric characters in your password?");

  var passwordChar = [];

// true arrays and concat to new array
  if(yesLower){
    passwordChar = passwordChar.concat(lowerCase);
  }
  if(yesUpper){
    passwordChar = passwordChar.concat(upperCase);
  }
  if(yesSpecial){
    passwordChar = passwordChar.concat(special);
  }
  if(yesNumbers){
    passwordChar = passwordChar.concat(numbers);
  }

  var password = "";
  for(var i = 0; i < length; i++){
    var random = Math.floor(Math.random() * passwordChar.length);
    password += passwordChar[random];
  }

  return password;
}

generatePassword();
