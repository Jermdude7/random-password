// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var special = "!@#$%^&*()_+";
  var numerical = "1234567890";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toLocaleUpperCase();

  var options = {};
  options.length = parseInt(
    prompt("How long would you like your password to be?")
  );
  if (options.length < 8 || options.length > 128) {
    alert("Incorrect password length");
    return "invalid perameters";
  }

  options.special = confirm("Would you like to use Special Characters?");
  options.numerical = confirm("Would you like to use Numerical Characters?");
  options.uppercase = confirm("Would you like to use Uppercase Characters?");
  options.lowercase = confirm("Would you like to use Lowercase Characters?");
  var password = "";
  for (var i = 0; i < options.length; i++) {
    if (options.special) {
      password += getRandomValue(special);
    }
    if (options.numerical) {
      password += getRandomValue(numerical);
    }
    if (options.uppercase) {
      password += getRandomValue(uppercase);
    }
    if (options.lowercase) {
      password += getRandomValue(lowercase);
    }
  }
  password =shuffle(password);

  console.log (password.substr(0, options.length));
  return password.substr(0, options.length);
}

function getRandomValue(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function shuffle(pwd) {
  var a = pwd.split(""),
    n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
