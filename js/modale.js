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


/**
 * Creates a template of the modal content 
 * @param response
 */
function templateModal(response) {
     modaleInfo.innerHTML = `
                <h1>${response.title}</h1>
                <p><span>genre(s)</span> : ${response['genres'].join(", ")}</p>
                <p><span>date de sortie</span> : ${response["date_published"]}</p>
                <p><span>rated</span> : ${response["rated"]}</p>
                <p><span>score imdb</span> : ${response["imdb_score"]} </p>
                <p><span>réalisateur(s)</span> : ${response["directors"].join(", ")}</p>
                <p><span>acteurs</span> : ${response["actors"].join(", ")}</p>
                <p><span>durée</span> : ${response["duration"]}</p>
                <p><span>Origine</span> : ${response["countries"].join(", ")}</p>
                <p><span>Box Office</span> : ${response["worldwide_gross_income"]}</p>
                <p><span>Résumé</span> : ${response["long_description"]}</p>`;

     modaleImage.style.background = `url(${response['image_url']}) center center`;
     modaleImage.style.backgroundSize = 'cover';
}


/**
 * displays modal content using 'templateModal function'
 * @param url
 */
function displayModalInfo (url) {
    fetch(url)
        .then(function(response) {
        if (response.ok) {
            return response.json();
        }
        })
        .then(function(response){
            templateModal(response);
        })
        .catch(function(err) {
            console.log(err)
        });
}

// ------------------------------     OPEN THE MODAL CLICLING ON FILM IMAGE ------------------------------------------


document.onclick = function(event) {

    const target = event.target;

    if (target.tagName.toLowerCase() === 'img') {
        console.log("hello world");
        modal.style.display = "flex";
        event.preventDefault();
        console.log ('event :', event);

        const movieId = target.id;
        console.log("movieId: ", movieId);

        displayModalInfo(urlBase + movieId)
    }
}


// -------------------------------  close the modal when the user clicks on the cross --------------------------------
closeButton.onclick = function () {
    modal.style.display = "none";

}

// -----------------------------  close the modal when the user clicks outside the modal  ---------------------------
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

