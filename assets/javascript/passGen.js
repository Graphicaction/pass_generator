
// Function to generate password from a character set available
function getPassword(len, charset) {
  var password = "";
  for(var i = 0; i < len; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

// Function called from 'Generate Password' click event to validate and get input from user

function validateInput() {
  let textValue = document.getElementById("formTextarea").value = "";
  
  var length = prompt("Enter the length of the password:");
 
  if(length == null) {
    alert("Exiting!");
    return;
  } else {
    while(isNaN(length) || length < 8 || length > 128) {
      alert("Please enter valid password length between 8 and 128!");
      length = prompt("Enter the length of the password:");
    }
  }
  //Asking for 'Character Type' and validating if atleast one is selected

  var specialChar = confirm("Do you want special charaters in your password?");
  var numericChar = confirm("Do you want numbers in your password?");
  var lowerChar = confirm("Do you want lowercase charaters in your password?");
  var upperChar = confirm("Do you want uppercase charaters in your password?");
  while(!specialChar && !numericChar && !lowerChar && !upperChar) {
    alert("Please select one charater type!");
     specialChar = confirm("Do you want special charaters in your password?");
     numericChar = confirm("Do you want numbers in your password?");
     lowerChar = confirm("Do you want lowercase charaters in your password?");
     upperChar = confirm("Do you want uppercase charaters in your password?");
  }
  
  //Calling functions to generate array of character type and generate password

  var charSet = getCharset(specialChar, numericChar,lowerChar, upperChar);
  var generatedPass = getPassword(length, charSet);

  document.getElementById("copyBtn").disabled = false;
  document.getElementById("formTextarea").value = generatedPass;
}

// This function is generating an array of character type selected

function getCharset(speChar, numChar, lChar, uChar) {
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const specialChars = '~!@#£$%^&*()';

  var charArray = [];
  if(speChar) {
    charArray += specialChars;
  }
  if(numChar) {
    charArray += numberChars;
  }
  if(lChar) {
    charArray += lowerChars;
  }
  if(uChar) {
    charArray += upperChars;
  }

  return charArray;
}

function myFunction() {
    var copyText = document.getElementById("formTextarea");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.getElementById("copyBtn").disabled = true;
    setTimeout(function() { 
      alert("Copied the text: " + copyText.value);
   }, 0);
   
}



