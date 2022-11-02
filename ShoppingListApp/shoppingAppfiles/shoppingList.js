const addButton = document.getElementById('add');
addButton.addEventListener('click', addNew);

var deleteButton = document.querySelectorAll("delete");
theList.addEventListener('click',delItem);

function addNew () {

    var textIntroduced = document.getElementById('groceries').value;

    var space = document.createElement("br");
    var theList = document.getElementById('theList');

    var newGrocery = document.createElement('li');
    var listText = document.createTextNode(textIntroduced);
    newGrocery.className = "d-flex justify-content-between px-4";
    newGrocery.appendChild(listText);

    var newButton = document.createElement('button');
    var newButtonText = document.createTextNode('X');
    newButton.className = "btn btn-danger btn-sm  delete";

    newButton.appendChild(newButtonText);
    newGrocery.appendChild(newButton);
    theList.appendChild(newGrocery);
    theList.appendChild(space);


    document.getElementById('groceries').value = "Something more ?";

    /* This part is to clear value of input when click */

    var inputArea = document.getElementById('groceries');
    inputArea.addEventListener ('click', clearInput)

    function clearInput(){

        inputArea.value = "";
        }

}







function delItem(e) {

    if(e.target.classList.contains('delete')){
        if (confirm ('Are you sure you want to delete this item?')){
        var delGrocery = e.target.parentElement;
        theList.removeChild(delGrocery);
        }
    }




}
