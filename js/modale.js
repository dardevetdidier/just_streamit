



//
// function displayModal(i) {
//     return function() {
//         modal.style.display = "flex";
//     }
// }
//
// // open the modal when the user clicks on image
// for (let i = 0; i < openButton.length; i++) {
//     openButton[i].addEventListener('click', function (event) {
//         event.preventDefault();
//     });
//     openButton[i].addEventListener('click', displayModal(i));
// }

//close the modal when the user clicks on the cross
closeButton.onclick = function () {
    modal.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"



    }
}

