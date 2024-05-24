const form = document.getElementById("registration");
const usernameVal = document.getElementById("username");
const emailVal = document.getElementById("email");
const passVal = document.getElementById("password");
const checkVal = document.getElementById("passwordCheck");
const radio = document.getElementById("radio-btns")
const radioBtns = radio.getElementsByTagName("input")

var topMenuEl = document.getElementById(`top-menu`)

var subMenuEl = document.getElementById(`sub-menu`);
subMenuEl.style.height = `100%`;
subMenuEl.style.backgroundColor = 'skyblue'
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'

var menuText = [
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  menuText.forEach((Link) => {
      let newLink = document.createElement(`a`)
      //newLink.setAttribute(`href`, Link.href)
      newLink.textContent = Link.text
      topMenuEl.appendChild(newLink)
  }) 
  var topMenuLinks = topMenuEl.getElementsByTagName(`a`)
  
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
      console.log(event.target)
      console.log(topMenuLinks)
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
            else{subMenuEl.style.top = `0%`;} //hide submenu
        }
      }
    } else{subMenuEl.style.top = `0%`;}
    }
  function buildSubmenu(subArr) {
  for(let Link of subArr){
    let newsubLink = document.createElement(`a`)
    newsubLink.setAttribute(`href`, Link.href)
    newsubLink.textContent = Link.text
    subMenuEl.appendChild(newsubLink)
  }
    return subMenuEl;
  }
topMenuEl.addEventListener('click', topGhost)

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
}