//Creating all variables to be used in DOM manipulation.
const form = document.getElementById("registration"); //gathering all elements in the form.
const usernameVal = document.getElementById("username"); //placing the value of the username box.
const emailVal = document.getElementById("email"); //placing the value of the email box.
const randVal = document.getElementById("random"); //placing the value of the random entry box.
const passVal = document.getElementById("password"); //placing the value of the 'password' entry box.
const radio = document.getElementById("radio-btns") //creating variable element to get the radio buttons in the form
const radioBtns = radio.getElementsByTagName("input")// creating an html collection within the radio variable to iterate through the radio buttons
const listItems = document.querySelectorAll("li") //html collection variable for all of the list items
const listBtn = document.getElementById("listBtn") //creating variable for the button that will manipulate the lists 
const sibOutput = document.getElementById("siblingOut") //points to a div element within the intro paragraph of the page that will output the sibling in the list. 
var topMenuEl = document.getElementById(`top-menu`) //creating variable for the top menu for manipulation.
var subMenuEl = document.getElementById(`sub-menu`); //creating variable for the sub menu for manipulation.
let count = 0; //creating count variable for the spotlight function

listBtn.addEventListener('click', spotLight) //adding event listener to the button in the intro paragraph that will manipulate the unordered list.

function spotLight(){ //function to highlight each list item in the unordered list
  if(count === listItems.length){count = 0;} //first checking to see if count is at the length of the list items, so that it can be rest to iterate once more. 

  listItems[count].classList.add("spotlight") //adding the class to the respective list item when the event fires off. 

  for(let i = 0; i < listItems.length; i++){ //created for loop to loop through the list items to search for everything but the active class target.
    if(listItems[i] !== listItems[count]){
      listItems[i].classList.remove("spotlight")
      listItems[i].textContent = "I'm child " + (i+1); //revert list item text to back to what it initially was by using the i iterator and common shared text between the list items. 
    } 
  } 
  if(listItems[count].classList.contains(`spotlight`)){ //creating if statement to check the spotlight tag
    listItems[count].textContent = "I'm the favorite child this time!" //overriding text content within the list item
  } 
  if(count !== listItems.length-1){
    sibOutput.textContent = "The next sibling in the list says: " + listItems[count].nextElementSibling.innerText; //using nextElementSibling to print the next sibling in the paragraph text.
  }
  else{ 
    sibOutput.textContent = "The next sibling in the list says: " + listItems[0].innerText; } //accounting for the last sibling in the list by referring back to the first sibling
  count++ //upticking the count var
 
}

var menuText = [ //adding the top menu and sub menu tags in an array of objects to reference later and to gather values from. 
    {text: 'click', href: '#', subLinks: [ //main object index contains a sub index of other titles
      {text: 'i`m', href: '/catalog/all'},
      {text: 'being', href: '/catalog/top'},
      {text: 'generated', href: '/catalog/search'},
    ]},
    {text: 'each one', href: '#' , subLinks: [
      {text: 'each time', href: '/orders/new'},
      {text: 'you click', href: '/orders/pending'},
      {text: 'on the bar', href: '/orders/history'},
    ]},
    {text: 'of me', href: '#', subLinks: [
      {text: 'click again', href: '/account/profile'},
      {text: 'to get rid of me', href: '/account/signout'},
    ]},
  ];
  
  menuText.forEach((Link) => { //creating tags for the top menu to be selected later using a for each loop using the menuText array of objects
      let newLink = document.createElement(`a`) //creating an element for each main object index
      newLink.setAttribute(`href`, Link.href) //assigning attribute of href to each a 
      newLink.textContent = Link.text
      topMenuEl.appendChild(newLink) //appending to the end of the top menu
  }) 
  var topMenuLinks = topMenuEl.getElementsByTagName(`a`) //assigning the topMenulinks var to iterate and interact with using the function below and the event listener
  
  function topGhost(event) {
    event.preventDefault();
    if (event.target.tagName.toLowerCase() === `a`) //if the event target is `a`
      {
        if(event.target.classList.contains(`active`)){ //and the target class contains `active`
          event.target.classList.remove(`active`); //remove the active class
          subMenuEl.innerHTML = ``; //clearing the subMenuEl var since it should be full of values from the function: buildSubmenu.
  
        } else{ 
          event.target.classList.add(`active`); //otherwise, add the active class.
        }
      } else {
          return;
      }

      for(let btn = 0; btn < topMenuLinks.length; btn++){ //created for loop to loop through the top menu links to search for everything but the active class target.
        if(topMenuLinks[btn] !== event.target){
          topMenuLinks[btn].classList.remove(`active`);
          subMenuEl.innerHTML = ``;  
        } 
      } 
      if(event.target.classList.contains(`active`)){ 
    
      for(c of menuText){//nested for loop for when the event target has an `active` tag. 
        if(c.text === event.target.textContent){ //if the iterator goes through the menuLinks array and references the same text as the event target, go forward.
          if(c.subLinks){ //and if that portion of the array has a sublinks menu, keep going forward.
            subMenuEl.style.top = `100%`;
            buildSubmenu(c.subLinks)} //call helper function to generate new sublinks.
            else{subMenuEl.style.top = `0`;} //hide submenu
        }
      }
    } else{subMenuEl.style.top = `0`;}
    }
  
  function buildSubmenu(subArr) { //creating function to build the new submenu when the top menu is clicked on
  for(let Link of subArr){ //same for loop as the topmenuEl creation
    let newsubLink = document.createElement(`h4`)
    newsubLink.textContent = Link.text
    subMenuEl.appendChild(newsubLink)
  }
    return subMenuEl;
  }
topMenuEl.addEventListener('click', topGhost) //assigning event listener to the top menu

function validation(e) { //start of the validation function for the form in the webpage
    e.preventDefault() 
    const radioResult = radioSelector() //calling radio selection helper function and placing value of it into a var within the function
    const emailTrue = validateEmail() //also call the function of validate email
    if (emailTrue === false) { //if the emailTrue var is false, the validate email function will need to run again until true.
      e.returnValue = false;
      return false;
    }
    alert( //setting up alert window with the following content and values.
    `Name: ${usernameVal.value}
    Email: ${emailVal.value}
    Random: ${randVal.value}
    Password: ${passVal.value} lol I'm not actually saving this.
    You said: ${radioResult}`);
    return true;
 }

 function validateEmail() { //start of email validation function. 
  let emailTrue = emailVal.value; //creating a var that takes the user input of the email portion of the form 

  if (emailTrue === "") { //if statement for if the form is blank
    alert("Please provide an email.");
    email.focus();
    return false;
  }

  const atPos = emailTrue.indexOf("@"); //creating variable to check for the @ symbol in the form
  const dotPos = emailTrue.lastIndexOf("."); //also variable to check for the dot

  if (atPos < 1) { //if the at symbol is at the start of the form
    alert(
      "Your email must include an @ symbol which must not be at the beginning of the email."
    );
    email.focus();
    return false; 
  }

  if (dotPos - atPos < 2) { //checks for dot symbol after the @ symbol. if the dot is not there (0) or there is something else that proceeeds it, then returns false and an alert will pop up.
    alert(
      "Wrong format: @.\nYou must include a domain name after the @ symbol with a dot address."
    );
    email.focus();
    return false;
  }

  return emailTrue;
}

 function radioSelector(){ //function for the radio buttons
    for(let i=0; i < radioBtns.length; i++){ //for loop that will go through all the elements in the radio buttons portion of the form. 
        if(radioBtns[i].type === 'radio' && radioBtns[i].checked) {
            return radioBtns[i].value
        }
    }
}

form.addEventListener("submit", validation); //attaching the submit button to the form as an event listener
