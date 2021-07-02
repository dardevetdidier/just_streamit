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
                <p><span>durée</span> : ${response["duration"]} min</p>
                <p><span>Origine</span> : ${response["countries"].join(", ")}</p>
                <p><span>Box Office</span> : ${response["worldwide_gross_income"]}</p>
                <p><span>Résumé</span> : ${response["long_description"]}</p>`;

     modaleImage.style.background = `url(${response['image_url']}) center center`;
     modaleImage.style.backgroundSize = 'cover';
}


/**
 * displays modal content using 'template Modal function'
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
        modal.style.display = "flex";
        event.preventDefault();

        const movieId = target.id;
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
