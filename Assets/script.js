// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharactersArray = ["!","@","#","$","%","^","&","*","(",")","-"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];

function generatePassword(){
  var passwordChoice = [];
  var pickedPassword = "";
  var characterLength = parseInt(prompt("How many characters does your password need to contain?"));
  var toUpperCase = confirm("Does your password need to contain upper case letters?");
  var toLowerCase = confirm("Does your password need to contain lower case letters?");
  var toSpecialCharacter = confirm("Does your password need to contain special characters? (Ex: !@#$)");
  var toNumbers = confirm("Does your password need to contain numbers?");


  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128){
    alert("Password has to be a number between 8 - 128 characters long. Please try again!");
    return;
  }

  
  if(toUpperCase){
    passwordChoice = passwordChoice.concat(upperCase);
  }

  
  if(toLowerCase){
    passwordChoice = passwordChoice.concat(lowerCase);
  }

  
  if(toSpecialCharacter){
    passwordChoice = passwordChoice.concat(specialCharactersArray);
  }

  
  if(toNumbers){
    passwordChoice = passwordChoice.concat(numbers);
  } 
  

  for(var i = 0; i < characterLength; i++){
    var getPassword = Math.floor(Math.random() * passwordChoice.length);
    pickedPassword = pickedPassword + passwordChoice[getPassword];
  }
  
  return pickedPassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
