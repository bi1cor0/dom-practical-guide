# The DOM Practical Guide
This project is meant to test my skills and learning of the Document Object Model manipulation to create a one page website using DOM. Essentially, combining my skills in CSS with HTML in conjunction with Javascript. And therefore, using the DOM system. I had no ideas for this project, but what I did have were specific skills and techniques I gained from doing the practice labs of the Per Scholas cohort. These specific skills within DOM were generating a navigation bar, and doing some form validation. So, how was I going to include these simple skills over to a useful webpage, and then meet all the criteria for this assessment? Then I remembered some devs like to put up sites that basically are like mini-showcases of buttons and features. Like an interactive museum or a demo tool that helps other devs, engineers, and students understand concepts in a visual manner. And so came the idea of the DOM practical guide. I would showcase what the DOM model can do with simple Javascript to not only help me understand DOM's tools but to help others visualize what can be done. 

## Features
1. The generating toolbar: The top clickable toolbar can be clicked on and a submenu can appear. I copied my code I wrote from the Lab 316.1.1 to showcase that users can generate elements even within the toolbar or nav-bar of a webpage using DOM. Each time the toolbar is clicked, each element in the submenu is being created. There's a lot of under-the-hood things here, but I hope to try and communicate this content generation concept better by spawning the submenu items one by one each time the user clicks on the toolbar. 
2. List navigation: This feature has users click on a button and it would highlight the next sibling within the list. While also assigning new text onto the list items. It would then showcase the next sibling of the list item. I used this method to showcase sibling navigation, but also text and style manipulation on specific elements within the DOM. This feature took me a while to understand and do with logic. But this also taught me more about how event listeners work.
3. The fake form entry: This is the last bit of interaction of the site, as I asked users to enter in information to submit into a form. I wouldn't be storing this information, but I would take each entry from the user and show them what was entered in an alert menu. I really liked the idea of a form being sent back to the user in an alert, so I included it here. And was honestly, the basis of why I chose a practical guide site in the first place. I also added validation on the HTML and Javascript side, just to make sure that the submit button can only fire off when everything is entered properly. 

## Future Features
I wanted to include a small pop-up game that users could play using alert windows. It would be a simple number guessing game, but I knew I would have to spend more time to implement it. I already included the pop-up alert in the form validation, so I didn't really need to add it in. I also mentioned that during the toolbar generation, I wanted to generate each submenu item one at a time, instead of all at once. The code I wrote had it generate each submenu item on click, but it does so under the hood of Javascript, so it looks like the content was being generated at one time everytime. And if I had it generate once every time the event fired, it would have been a better visual for element creation. 