// Assignment code here
// Passwords contains alpha numerical values and symbols



// declare variables letters numbers and symbols as arrays to generate and store password

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ['!', '@', '#','$','%','^','&','*','-','+','='];


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// create function to ask about password needed and test validity of options

//
//carry out test to generate a secure password contain leters and numbers and special character
//Pseudo Code
// prompt confirm do while and if else statements
//

function Pass() {

        //while condition is false the user will be prompted to enter correct values
        
        var PassQ = false;
        
        do{ 
        
            // prompt user for length of password         
       
            var length = prompt("Choose the length of the password you need it should be between 8 to 128 in length");
        
           //Give users the option to choose the characters numbers etc they need in the password
            var upperCase = confirm("Should your password have upper letters?");
            var lowCase   = confirm("Should your password have lower letters?");
            var numbers   = confirm("Should your password have numbers?");
            var symbols   = confirm("Should your password have symbols?");

            //check values and prompt is criteria should match secure password
            var getPrompt = {
            length: length,  
            upperCase: upperCase,
            lowCase: lowCase,
            numbers: numbers,
            symbols: symbols
        
            }  
           
            // do check to confirm if password length is ok if not prompt to re-enter 
            if ((length < 8)||(length > 128)) 
                alert("Choose a number between 8 and 128 to get a secure password");
  
            else 
                
            // if password dont have the right combination of letters symbols and number prompt to re- enter
                 if((!upperCase)&&(!lowCase)&&(!numbers)&&(!symbols))
                 alert("Secure password must have at least a upper case letter, a lowercase, a number and or a symbol ..Make a choice!!!...");
            
                 // if conditions are met leave the loop
                 else
                 PassQ = true;
                 
             } while(!PassQ);

        return getPrompt;

        }
        
            // from the users information a secure password is generated it is stored in an area

        function generatePassword() {

                var passwordOption = Pass();
                // array to store possible combination of password
                var possibleCombo = [];
                
                //array to store final password
                var finalPassword = [];
        
                // create password from choices 
                if(passwordOption.numbers) 
                
                {
                    for (var i of numbers)
                    possibleCombo.push(i);
                }
        
        
                if(passwordOption.upperCase) {
        
                 for (var i of upperCase)
        
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
                // print arrays for where password will be selected
                console.log(possibleCombo);
        
        
                for (var i = 0; i < passwordOption.length; i++) {
        
                finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
        
        
             }

                //print final password to console
                 console.log(finalPassword);
                return finalPassword;
        }
        
  
        //Write password to the #password input


            function writePassword() {

                var password = generatePassword();
                 var passwordText = document.querySelector("#password");
                 passwordText.value = password;

        }

        // Add event listener to generate button
        // when click several functions are called to generate functions
        generateBtn.addEventListener("click", writePassword);
