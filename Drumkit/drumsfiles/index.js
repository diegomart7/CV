let numberOfDrums = document.querySelectorAll(".drum").length;



for (i = 0; i < numberOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation (buttonInnerHTML);

  })
};


// Function that triggers on keyboard press " with the correct key"
document.addEventListener("keypress", function(event) {

makeSound(event.key);
buttonAnimation(event.key);
})


function makeSound(key){

  switch (key) {

    case "w":
      let tom1 = new Audio("drumsfiles/sounds/tom-1.mp3")
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("drumsfiles/sounds/tom-2.mp3")
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("drumsfiles/sounds/tom-3.mp3")
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("drumsfiles/sounds/tom-4.mp3")
      tom4.play();
      break;

    case "j":
      let snare = new Audio("drumsfiles/sounds/snare.mp3")
      snare.play();
      break;

    case "k":
      let crash = new Audio("drumsfiles/sounds/crash.mp3")
      crash.play();
      break;

    case "l":
      let kick = new Audio("drumsfiles/sounds/kick-bass.mp3")
      kick.play();
      break;


    default:

  }

}

function buttonAnimation (currentKey){

  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){activeButton.classList.remove("pressed")},100)
}
