// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Write password to the #password input
function generatePassword() {
    //User inputs number representing password length into drop-down prompt
    var passwordLengthPrompt = prompt("Please select password length");
    var passwordLength = Number(passwordLengthPrompt);

    //testing password against length limitations, exits if length of password is below 8 characters or above 128 characters
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password length unacceptable");
        return;
    }

    //Drop-down prompts asking user which password criteria they want
    var confirmLower = confirm("Include lower case?");
    var confirmUpper = confirm("Include upper case?");
    var confirmNumbers = confirm("Include numbers?");
    var confirmSpecialCharacters = confirm("Include special characters?");

    var generatedPassword = '';
    var characterChoices = '';

    // If user picks no criteria, they are prompted to select as least one to continue
    if (!confirmLower && !confirmUpper && !confirmNumbers && !confirmSpecialCharacters) {
        alert('Please select at least one option')
        return
    }

    // Adds lowercase letters if user chooses lowercase letters
    if (confirmLower) {
        characterChoices += 'abcdefghijklmnopqrstuvwxyz';
    }


    if (confirmUpper) {
        characterChoices += 'ABCDEFGHIJLMNOPQRSTUVWXYZ';
    }


    if (confirmNumbers) {
        characterChoices += '1234567890';
    }


    if (confirmSpecialCharacters) {
        characterChoices += '!@#$%^&*?/|';
    }

    // Builds a password string on the length that the user chose
    for (i = 1; i <= passwordLength; i++) {

        // Randomly selects an index between 0 and the length of characterChoices string
        var charIndex = Math.floor(Math.random() * characterChoices.length + 1);

        // Appends character at randomly generated index to the password string
        generatedPassword += characterChoices.charAt(charIndex)
    }

    // return generated password
    return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
