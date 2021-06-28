// get the modal
let modal = document.getElementById("modale");

//get the button to open (try click on image)
let openButton = document.getElementsByClassName("film");

//get the <span> element to close the modal
let closeButton = document.getElementById("fermer_modale");

console.log(openButton);


function displayModal(i) {
    return function() {
        modal.style.display = "flex";
    }
}

// open the modal when the user clicks on image
for (let i = 0; i < openButton.length; i++) {
    openButton[i].addEventListener('click', displayModal(i));
}

//close the modal when the user clicks on the cross
closeButton.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

