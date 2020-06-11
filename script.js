
let w = 228;
let h = 120;


$(function() {
  // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $(".treat-button").click(clickedTreatButton);
  $(".play-button").click(clickedPlayButton);
  $(".exercise-button").click(clickedExerciseButton);
  $(".bark-button").click(clickedBarkButton);

});
//let w = 228;
//let h = 120;

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
let pet_info = { name: "Meugiwarano", weight: w, happiness: h };

function clickedTreatButton() {

  
  pet_info.happiness = pet_info.happiness + 10;
  
  pet_info.weight = pet_info.weight + 3;

  
  checkAndUpdatePetInfoInHtml();

}

function clickedPlayButton() {
  // Increase pet happiness
  pet_info.happiness = pet_info.happiness + 26;
  // Decrease pet weight
  pet_info.weight = pet_info.weight - 3;
  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  // Decrease pet happiness
  pet_info.happiness = pet_info.happiness - 7;
  // Decrease pet weight
  pet_info.weight = pet_info.weight - 3;
  checkAndUpdatePetInfoInHtml();
}

function clickedBarkButton() {
}


function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  if (pet_info.weight < 1) {
    pet_info.weight = 1;   }
  
  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;   }
  
}
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

// Updates your HTML with the current values in your pet_info dictionary
function updatePetInfoInHtml() {
  $(".name").text(pet_info["name"]);
  $(".weight").text(pet_info["weight"]);
  $(".happiness").text(pet_info["happiness"]);
}
