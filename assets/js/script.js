// Assignment code here
// Passwords contains alpha numerical values and symbols

var generateBtn = document.querySelector("#generate");

// declare variables letters numbers and symbols
var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// applying  str.toUpperCase() to include upper case characters
var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ['!', '@', '#','$','%','^','&','*','-','+','='];


// Get references to the #generate element

// create function to ask about password needed and test validity of options


     function Pass() {
        var PassQ = false;
    do{
	
	    var length = prompt("Choose the length of the password you need it should be between 8 to 32 in length");
    
	    var letters = confirm("Should your password have upper letters?");
        var lowCase = confirm("Should your password have lower letters?");
        var numbers = confirm("Should your password have numbers?");
        var symbols = confirm("Should your password have symbols?");

        var getPrompt = {
            length: length,  
            letters: letters,
            lowCase: lowCase,
            numbers: numbers,
            symbols: symbols
            
        }
    if ((length < 8)||(length > 32)) 
        alert("Choose a number between 8 and 32 to get a secure password");
      
     else if(((!letters)&&(!numbers)&&(!symbols)&&(!lowCase))||(!numbers)&&(!symbols)||(!numbers)&&(!letters))
        alert("Secure password must have at least a letter and number or a symbol and number..Make a choice!!!...");
        else
        PassQ = true;

    } while(!PassQ);
    return getPrompt;
}
  //document.getElementById("demo").innerHTML = "Hello World!";

  function generatePassword() {

        var passwordOption = Pass();
        var possibleCombo = [];
        var finalPassword = [];
  

  if(passwordOption.numbers) {
      for (var i of numbers)
      possibleCombo.push(i);
  }
  

  if(passwordOption.letters) {
    
    for (var i of letters)
    
    possibleCombo.push(i);

}

if(passwordOption.lowCase) {
    
    for (var i of lowCase)
    possibleCombo.push(i);
    

}
if(passwordOption.symbols) {
    for (var i of symbols)
    possibleCombo.push(i);
}

console.log(possibleCombo);


for (var i = 0; i < passwordOption.length; i++) {

    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];


}
console.log(finalPassword);
return finalPassword;
 }


  
   //Write password to the #password input


    function writePassword() {
     var password = generatePassword();
    var passwordText = document.querySelector("#password");
    //var passwordText = document.getElementById("#password")

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
