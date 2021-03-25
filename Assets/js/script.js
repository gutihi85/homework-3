// on click of the button
// reach into the html and grab the button
var generateBtn = document.querySelector("#generate");
// add an event listener
generateBtn.addEventListener("click", function() {
  
  // prompt for length
  var length = prompt('Enter desired length between 8-128 characters.')
  // prompt for lowercase
  var wantLowercase = confirm('Do you want lowercase letters?');
  // prompt for uppercase
  var wantUppercase = confirm('Do you want uppercase letters?');
  // prompt for numbers
  var wantNumbers = confirm('Do you want numbers?');
  // prompt for special char
  var wantSpecialCharacters = confirm('Do you want special characters?');
  
  // stablish what is lowerCase
  var lowerCase = "abcdefghijklmnopqrstuvwxyz ".split("");
  // stablish what is upperCase
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ".split("");
  // stablish what is numbers
  var numbers= "0123456789 ".split("");
  // stablish what is specialCharacters
  var lowerCase = "!@#$%&/?¿ ".split("");
  
  // use that prompt info to calculate a password
  // in the mean time
  var password = 'This is your passsword shhhh'

  // condition what goes into password
  // if (wantLowercase===true && wantUppercase===true && wantNumbers===true && wantSpecialCharacters===true){
  //   password = ""
  // }
  
  // ---display the password to the user---
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  
});
