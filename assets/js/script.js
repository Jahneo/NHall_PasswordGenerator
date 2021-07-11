// Assignment code here
// Passwords contains alpha numerical values and symbols



// declare variables letters numbers and symbols as arrays to generate and store password

var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ['!', '@', '#','$','%','^','&','*','-','+','='];


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// create function to ask about password needed and test validity of options
// prompt user for length of password
//Give users the option to choose the characters numbers etc they need in the password
//carry out test to generate a secure password contain leters and numbers and special character
//Psuedo Code
// prompt confirm do while and if else statements
//check values and prompt is criteria should match secure password

    


  
   //Write password to the #password input


    function writePassword() {
     var password = generatePassword();
     var passwordText = document.querySelector("#password");
     passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
