// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var options = "01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijtlmnopqrstuvwxyz!$%&/()=?";
  var stringLength = 8-128;
  var randomString= "";
  
  for (var i=0; i<stringLength; i++) {
    var randnum = Math.floor(Math.random() * options.length);
    randomString += options.substring(randnum,randnum+1);

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

