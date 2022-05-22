

(() => {
    // this is a JavaScript comment
    console.log('fired');


  // step 1= go and find the elements on the page that user want to interact with//
  
  // querySELECTOR takes css celector and uses to find a match in html file//

//   let theBadage = document.querySelector('#png'),
//   theVector =document.querySelector('#vector');

// querySelectorAll finds all the elements that match the selector
// and returns back an array like object calleda node list
let theBadges = document.querySelectorAll('img');

  function logMyId(){
      debugger; // pauses code execution at this line

      // log the element ID to console window
      console.log(this.id);
     //'this' refers to element that you are interacting with at the moment



  }

  // figure out how you want user to interact with badge graphics - a click, mouseover, mouseout, double click etc //


//   theBadage.addEventListener('click', logMyId);
//   theVector.addEventListener('click', logMyId);
 // for each badge in our collection, add an event handler
 // arrows function are just shorthand functions declarations
theBadges.forEach(badge => badge.addEventListener('click', logMyId));
} )();