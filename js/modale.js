// get the modal
let modal = document.getElementById("meilleur_film_modal");

//get the button to open (try click on image)
let btn_img = document.getElementById("meilleur_film-image");

//get the <span> element to close the modal
let cross = document.getElementsByClassName("fermer_modale")[0]; // getElementsByClassName returns a list


// open the model when th user clicks on image
btn_img.onclick = function () {
    modal.style.display = "block";
}

//close the modale when the user clicks on the cross
cross.onclick = function () {
    modal.style.display = "none";
}
