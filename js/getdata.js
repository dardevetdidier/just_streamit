// ------ ----- ----- ----- ----- Get html elements  ----- ----- ----- ----- -----

// gets caroussels
const filmsCaroussel1 = document.getElementsByClassName('film1');
const filmsCaroussel2 = document.getElementsByClassName('film2');
const filmsCaroussel3 = document.getElementsByClassName('film3');
const filmsCaroussel4 = document.getElementsByClassName('film4');

// gets elements in 'best film section'
const imageBestFilm = document.getElementById("meilleur_film_image");
const infoBestFilm = document.getElementById('informations');


// get the modal
const modal = document.getElementById("modale");
const modaleImage = document.getElementById("image_modale");
const modaleInfo = document.getElementById("informations_modale");


//get the <span> element to close the modal
let closeButton = document.getElementById("fermer_modale");


// ----------  -------  ------------  GET URLS  ---------   ----------  ------------

const urlBase = 'http://localhost:8000/api/v1/titles/'
const urlImdbScore = 'http://localhost:8000/api/v1/titles/?imdb_score_min=9&sort_by=-imdb_score,-votes&page_size=7';
const urlMusic = "http://localhost:8000/api/v1/titles/?genre=Music&imdb_score_min=8&sort_by=-imdb_score,-votes&page_size=7";
const urlComedy = "http://localhost:8000/api/v1/titles/?genre=Comedy&imdb_score_min=8&sort_by=-imdb_score,-votes&page_size=7";
const urlAnimation = "http://localhost:8000/api/v1/titles/?genre=Animation&imdb_score_min=8&sort_by=-imdb_score,-votes&page_size=7";


// ----- -------- --------- -------  DISPLAY INFO AND IMAGES BEST FILM  ----- ------  ------- ------

/**
 * creates a html template into the element for the Best Film section, using response of API request
 * @param response
 * @param element
 */
function createsTemplateBestFilmInfo (response, element){

    // CREATE TITLE
    const title = document.createElement("H1");
    const nodeTitle = document.createTextNode(response.title);
    title.appendChild(nodeTitle);
    title.className += 'titre';
    element.appendChild(title);

    // CREATE PARAGRAPH YEAR
    const year = document.createElement("p");
    const nodeYear = document.createTextNode(response.year);
    year.appendChild(nodeYear);
    element.appendChild(year);

    // CREATE PARAGRAPH ACTORS
    const actors = document.createElement("p");
    const nodeActors = document.createTextNode("Avec " + response["actors"].join(", "));
    actors.appendChild(nodeActors);
    element.appendChild(actors);

    // CREATE PARAGRAPH DESCRIPTION
    const description = document.createElement("p");
    const nodeDescription = document.createTextNode(response.description);
    description.appendChild(nodeDescription);
    description.className += 'description';
    element.appendChild(description);

    // CREATE BACKGROUND IMAGE
    imageBestFilm.innerHTML = `<a href="#"><img id="${response['id']}" src="${response['image_url']}" alt="image film"></a>`;
}


/**
 * displays information in Best Film section using the template created in 'createsTemplateBestFilmInfo' function
 * @param url
 * @param element
 */
function displayBestfilmInfo (url, element) {
    fetch(url)
        .then(function(response) {
        if (response.ok) {
            return response.json();
        }
        })
        .then(function(response){
            createsTemplateBestFilmInfo(response, element);
        })
        .catch(function(error) {
            console.log(error)
        });
}

// ---------- --------- ----------  MAKES API REQUEST AND DISPLAYS IMAGES IN CAROUSSELS ----- ------- ----- ----- ----
/**
 * Get a list of film id and a list of images urls from api
 * @param url
 * @param caroussel
 */
function getImagesAndIdFilms (url, caroussel) {
    fetch(url)
        .then(function (response) {
            if (response.ok) {
                return  response.json();
            }
        })
        .then(function (response) {
            console.log(response);
            display_images_caroussel(response, caroussel)
        })
        .catch(function (error) {
            console.log(error);
        })
}
// -------  --------  -----------  --------  MAIN -------- ---------  -----------  ---------


// display image and informations in "Best Film" window
displayBestfilmInfo(urlBase + "9008642", infoBestFilm);

// displays images in caroussels
getImagesAndIdFilms(urlImdbScore, filmsCaroussel1);
getImagesAndIdFilms(urlMusic, filmsCaroussel2);
getImagesAndIdFilms(urlComedy, filmsCaroussel3);
getImagesAndIdFilms(urlAnimation, filmsCaroussel4);
