const form = document.getElementById("registration");
const usernameVal = document.getElementById("username");
const emailVal = document.getElementById("email");
const passVal = document.getElementById("password");
const checkVal = document.getElementById("passwordCheck");
const radio = document.getElementById("radio-btns")
const radioBtns = radio.getElementsByTagName("input")

form.addEventListener("submit", validation);

function validation(e) {
    e.preventDefault()
    const radioResult = radioSelector()
    console.log(e.target)
    alert(
    `Name: ${usernameVal.value}
    Email: ${emailVal.value}
    Country: ${passVal.value}
    Password: ${checkVal.value} lol I'm not actually saving this.
    You said: ${radioResult}`);
    
 }

 function radioSelector(){
    for(let i=0; i < radioBtns.length; i++){
        if(radioBtns[i].type === 'radio' && radioBtns[i].checked) {
            return radioBtns[i].value
        }
    }