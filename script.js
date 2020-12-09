// Assignment Code
var generateBtn = document.querySelector("#generate");
character = ["!", "@", "#", "$", "%", "^", "&", "*"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var choices;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = ps;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  codeLength = prompt("How many characters do you want you password to be? choose between 8 and 128.");
  if (!codeLength) {
    alert("Requiers number.")
  } else if (codeLength < 8 || codeLength > 128) {
    codeLength = alert("Must be between 8 and 128!")
  } else {
    confirmCharacter = confirm("Will this contain characters?");
    confirmNumber = confirm("Will this contain numbers?");
    confirmLowercase = confirm("Will this contain lowercase letters?");
    confirmUppercase = confirm("Will this contain uppercase letters?");
  };
  if (!confirmCharacter && !confirmNumber && !confirmLowercase && !confirmUppercase) {
    alert("Requiers criteria!")
  } else if (!confirmCharacter && !confirmNumber && !confirmLowercase && !confirmUppercase) {
    choices = character.concat(number, lowerCase, upperCase);
  }
  else if (!confirmCharacter && !confirmNumber && !confirmUppercase) {
    choices = character.concat(number, upperCase);
  }
  else if (!confirmCharacter && !confirmNumber && !confirmLowercase) {
    choices = character.concat(number, lowerCase);
  }
  else if (!confirmCharacter && !confirmLowercase && !confirmUppercase) {
    choices = character.concat(lowerCase, upperCase);
  }
  else if (!confirmNumber && !confirmLowercase && !confirmUppercase) {
    choices = number.concat(lowerCase, upperCase);
  }
  else if (!confirmCharacter && !confirmNumber) {
    choices = character.concat(number);

  } else if (!confirmCharacter && !confirmLowercase) {
    choices = character.concat(lowerCase);

  } else if (!confirmCharacter && !confirmUppercase) {
    choices = character.concat(upperCase);
  }
  else if (!confirmLowercase && !confirmNumber) {
    choices = lowerCase.concat(number);

  } else if (!confirmLowercase && !confirmUppercase) {
    choices = lowerCase.concat(upperCase);

  } else if (!confirmNumber && !confirmUppercase) {
    choices = number.concat(upperCase);
  }
  else if (!confirmCharacter) {
    choices = character;
  }
  else if (!confirmNumber) {
    choices = number;
  }
  else if (!confirmLowercase) {
    choices = lowerCase;
  }
  else if (!confirmUppercase) {
    choices = upperCase;
  };

  for (var i = 0; i < codeLength; i++) {
    var passwordchoices = choices[Math.floor(Math.random * choices.length)];
    password.push(passwordchoices);
  }

  var ps = password.join("");
    UserInput(ps);
    return ps;
}