
// ------ ----- ----- ----- ----- Get html elements  ----- ----- ----- ----- -----

const filmsCaroussel1 = document.getElementsByClassName('film1');
const filmsCaroussel2 = document.getElementsByClassName('film2');
const filmsCaroussel3 = document.getElementsByClassName('film3');
const filmsCaroussel4 = document.getElementsByClassName('film4');

const imageBestFilm = document.getElementById("meilleur_film_image");
const infoBestFilm = document.getElementById('informations');


// get the modal
const modal = document.getElementById("modale");
const modaleImage = document.getElementById("image_modale");
const modaleInfo = document.getElementById("informations_modale");

//get the button to open (try click on image)
let openButton = document.getElementsByClassName("bouton");

//get the <span> element to close the modal
let closeButton = document.getElementById("fermer_modale");



// ----------  -------  ------------  GET URLS  ---------   ----------  ------------

const urlBase = 'http://localhost:8000/api/v1/titles/'
const urlImdbScore = 'http://localhost:8000/api/v1/titles/?imdb_score_min=9&sort_by=-imdb_score,-votes&page_size=7';
const urlMusic = "http://localhost:8000/api/v1/titles/?genre=Music&imdb_score_min=8&sort_by=-imdb_score,-votes&page_size=7";
const urlComedy = "http://localhost:8000/api/v1/titles/?genre=Comedy&imdb_score_min=8&sort_by=-imdb_score,-votes&page_size=7";
const urlAnimation = "http://localhost:8000/api/v1/titles/?genre=Animation&imdb_score_min=8&sort_by=-imdb_score,-votes&page_size=7";


// --------  ----------  -----------  VARIABLE DECLARATION -----  ---------   -------------

let imageUrlsListImdbScore = [];
let imageUrlsListMusic = [];
let imageUrlsListComedy = [];
let imageUrlsListAnimation = [];
let idsListBestFilms = [];
let idsListMusicalFilms = [];
let idsListComedyFilms = [];
let idsLIstAnimationFilms = [];

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

/**
 * Modify DOM to display images in caroussel
 * @param response
 * @param images
 * @param ids
 * @param caroussel
 */


//    -----------------------------------  PAGINATION ---------------------------------------------------------------

//
// /**
//  * Get a list of film id and a list of images urls from api
//  * @param url
//  * @param idsList
//  * @param urlImagesList
//  * @returns {Promise<void>}
//  */
// async function getImagesAndIdFilms (url, idsList, urlImagesList) {
//     let next = "";
//     let result;
//
//     while (idsList.length < 7) {
//         try {
//             result = await axios.get(url + next)
//                 .then(function (response) {
//                     let data = response.data.results;
//                     console.log(response);
//                     for (let i in data) {
//                         if (data.hasOwnProperty(i)) {
//                             if (idsList.length < 7) {
//                                 urlImagesList.push(data[i]['image_url']);
//                                 idsList.push(data[i]['id']);
//                             } else {
//                                 break;
//                             }
//                         }
//                     }
//                     next = "&page=2";
//                 })
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     return result;
// }

// ______________________________________________________________________________________________________________


// ------------------------------------ NO PAGINATION -----------------------------------------------------------

/**
 * Get a list of film id and a list of images urls from api
 * @param url
 * @param caroussel
 */
function getImagesAndIdFilms (url, caroussel) {
    fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (response) {
            // let data = response.data.results;
            console.log(response);
            // for (let i in data) {
            //     if (data.hasOwnProperty(i)) {
            //         urlImagesList.push(data[i]['image_url']);
            //         idsList.push(data[i]['id']);
            //     }
            // }
            display_images_caroussel(response, caroussel)
        })
        .catch(function (error) {
            console.log(error);
        })
}





// -------  --------  -----------  --------  MAIN -------- ---------  -----------  ---------

// _____________________      NO PAGINATION  ___________________________________________________

getImagesAndIdFilms(urlImdbScore, filmsCaroussel1);
getImagesAndIdFilms(urlMusic, filmsCaroussel2);
getImagesAndIdFilms(urlComedy, filmsCaroussel3);
getImagesAndIdFilms(urlAnimation, filmsCaroussel4);


//______________________       PAGINATION    _______________________________________________

//
// // display caroussel 1 images and get ids of category 1
//
// getImagesAndIdFilms(urlImdbScore, idsListBestFilms, imageUrlsListImdbScore)
//     .then(response => {
//         display_images_caroussel(response, imageUrlsListImdbScore, idsListBestFilms, filmsCaroussel1);
//         console.log(idsListBestFilms);
//     });
//
//
// // display caroussel 2 images and get ids of category 2
//
// getImagesAndIdFilms(urlMusic, idsListMusicalFilms, imageUrlsListMusic)
//     .then(response => {
//         display_images_caroussel(response, imageUrlsListMusic, idsListMusicalFilms, filmsCaroussel2);
//         console.log(idsListMusicalFilms);
//     })
//
//
// // display caroussel 3 images and get ids of category 3
//
// getImagesAndIdFilms(urlComedy, idsListComedyFilms, imageUrlsListComedy)
//     .then(response => {
//         display_images_caroussel(response, imageUrlsListComedy,idsListComedyFilms, filmsCaroussel3);
//         console.log(idsListComedyFilms);
//     })
//
// // display caroussel 4 images and get ids of category 4
//
// getImagesAndIdFilms(urlAnimation, idsLIstAnimationFilms, imageUrlsListAnimation)
//     .then(response => {
//         display_images_caroussel(response, imageUrlsListAnimation,idsLIstAnimationFilms, filmsCaroussel4);
//         console.log(idsLIstAnimationFilms);
//     })

// display image and informations in "Best Film" window
displayBestfilmInfo(urlBase + "9008642", infoBestFilm);