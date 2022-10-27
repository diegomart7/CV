//To clear the value on the input at click:
let i = 0;
let arr = [];


document.querySelector("#playerInput").onclick = function() {
  clearInputValue()
};

function clearInputValue() {
  document.querySelector("#playerInput").value = "";
};


//To add palyer names to the players list:
document.querySelector("#addButton").onclick = function() {
  addNameToList()
};

let playerInput = document.querySelector("input")

playerInput.addEventListener("keypress", function(event){

  if (event.key === "Enter") {
    addNameToList();
    clearInputValue();
  }
});

function addNameToList() {

  var format = /[!@#$%^&*()_+\-=\[\]{};':*"\\|,.<>\/?]$/;
  let introducedText = document.querySelector("#playerInput").value;

  if( introducedText.match(format) || /[0-9]/.test(introducedText) || introducedText === ""){
    document.querySelector("#playerInput").value = "A name..."
  } else{


    if (i === 9) {
      alert("No more than 9 players allowed !")
    } else {
      arr.push(document.querySelector("#playerInput").value);
      console.log(arr);
      document.querySelectorAll('p')[i].innerText = arr[i];
      i++;
      document.querySelector("#playerInput").value = "Name..."
      document.querySelectorAll("p")[i-1].classList.remove("bg-danger")
      document.querySelectorAll("p")[i-1].classList.add("bg-success")

    }
  }


}

;



//Play Button Function
document.querySelector("#playButton").onclick = function() {
  chooseWinner()
};

function chooseWinner() {

  if (arr.length == 0 ){
    alert("Not enoguh players")
  }else {


  let randomWinner = Math.floor(Math.random() * arr.length)
  console.log(arr[randomWinner] + " has to pay !");

  document.querySelectorAll("h2")[2].innerText = (arr[randomWinner] + " won!");
}

};
