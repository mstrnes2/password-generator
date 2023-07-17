// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharactersArray = ["!","@","#","$","%","^","&","*","(",")","-"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowserCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];

function generatePassword(){
  var characterLength = prompt("How many characters does your password need to contain?");
  if(characterLength > 8 && characterLength < 128){
    var caseSensative = confirm("Is your password case sensative?");
    if(caseSensative){
      var specialCharacters = confirm("Does this password need any special characters?");
    }else

  }else{
    alert("Password has to be between 8 - 128 characters long. Please try again!");
    return;
  }

  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
