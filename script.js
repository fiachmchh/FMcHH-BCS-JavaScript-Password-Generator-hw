// Assignment Code

//event listener to prompt questions about password
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Arrays
var Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var SpecialChars = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];

//Prompts to confirm the desirted characters and length of password

function generatePassword() {

    //Various preferences of the user are established through prompts

    var hasLowercase = confirm("Would you like to use lowercase letters in your password?");
    var hasUppercase = confirm("Would you like to use uppercase letters in your password?");
    var hasNumbers = confirm("Would you like to use numbers in your password?");
    var hasSpecialChars = confirm("Would you like to use Special Characters in your password?");

    //password length must be confirmed, between 8 and 128 characters long, must inlude numbers and cannot be left blank

    var passwordLength= (prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
    
    while(passwordLength <= 8 || passwordLength >= 128 || passwordLength === NaN || passwordLength === null) {
        alert("Please choose a number that is more than 8 and less than 128 characters");
        passwordLength= (prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
    } 

    //Loop, if user does not select OK to at least one parameter, questions are asked again
    while (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecialChars === false) {
        alert("You must answer OK to at least one parameter for your passowrd.");
        var hasLowercase = confirm("Would you like to use lowercase letters in your password?");
        var hasUppercase = confirm("Would you like to use uppercase letters in your password?");
        var hasNumbers = confirm("Would you like to use numbers in your password?");
        var hasSpecialChars = confirm("Would you like to use Special Characters in your password?");
    }

     var combinedArray = [];

    if (hasLowercase) {
        combinedArray = combinedArray.concat(Lowercase)
    }
    
    if (hasUppercase) {
        combinedArray = combinedArray.concat(Uppercase)
    }
    
    if (hasNumbers) {
        combinedArray = combinedArray.concat(Numbers)
    }
    
    if (hasSpecialChars) {
        combinedArray = combinedArray.concat(SpecialChars);
    }

    console.log(combinedArray)
    
    var makePassword = ""
    
    for (var i = 0; i < passwordLength; i++) {
        makePassword = makePassword + combinedArray[Math.floor(Math.random() * combinedArray.length)];
    }
    return makePassword;
}
    
    // Write password to the #password input
    
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
    
        passwordText.value = password;
    }
      
      // Add event listener to generate button
      generateBtn.addEventListener("click", writePassword);
      



