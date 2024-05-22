const form = document.getElementById("registration");
const usernameVal = document.getElementById("username");
const emailVal = document.getElementById("email");
const passVal = document.getElementById("password");
const checkVal = document.getElementById("passwordCheck");
console.log(`hi`)

form.addEventListener("submit", validation);

function validation(e) {
    e.preventDefault()
    console.log(e.target)
    alert(`Name: ${usernameVal.value}
    Email: ${emailVal}
    Country: ${passVal}
    Password: ${checkVal} lol I'm not actually saving this.`);
 }

