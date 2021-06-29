
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
const urlImdbScore = 'http://localhost:8000/api/v1/titles?imdb_score_min = 9.6&sort_by=-imdb_score,-votes&page_size=7';
const urlMusic = "http://localhost:8000/api/v1/titles/?genre=Music&imdb_score_min=8&sort_by=-imdb_score,-votes";
const urlComedy = "http://localhost:8000/api/v1/titles/?genre=Comedy&imdb_score_min=8&sort_by=-imdb_score,-votes";
const urlAnimation = "http://localhost:8000/api/v1/titles/?genre=Animation&imdb_score_min=8&sort_by=-imdb_score,-votes"


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

function displayBestFilmInfo (response, element){

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
    // imageBestFilm.style.backgroundSize = 'cover';
}



// ----- ---------- --------- ------  DISPLAY MODAL INFO AND IMAGE  --------- -------- ------ ---------

function display_modal_info (url) {
    fetch(url)
        .then(function(response) {
        if (response.ok) {
            return response.json();
        }
        })
        .then(function(response){
            modaleInfo.innerHTML = `
                <h1>${response.title}</h1>
                <p>genre(s) : ${response['genres'].join(", ")}</p>
                <p>date de sortie : ${response["date_published"]}</p>
                <p>rated : ${response["rated"]}</p>
                <p>score imdb : ${response["imdb_score"]} </p>
                <p>réalisateur(s) : ${response["directors"].join(", ")}</p>
                <p>acteurs : ${response["actors"].join(", ")}</p>
                <p>durée : ${response["duration"]}</p>
                <p>Origine : ${response["countries"].join(", ")}</p>
                <p>Box Office : ${response["worldwide_gross_income"]}</p>
                <p>Résumé : ${response["long_description"]}</p>`;

            modaleImage.style.background = `url(${response['image_url']}) center center`;
            modaleImage.style.backgroundSize = 'cover';

        })
        .catch(function(err) {
            console.log(err)
        });

}


function displayBestfilmInfo (url, element) {
    fetch(url)
        .then(function(response) {
        if (response.ok) {
            return response.json();
        }
        })
        .then(function(response){
            displayBestFilmInfo(response, element);

        })
        .catch(function(err) {
            console.log(err)
        });
}

    // infoBestFilm.insertAdjacentHTML("beforeend", `<h4>${response.title}</h4>`);
    // infoBestFilm.insertAdjacentHTML("beforeend", `<p>${response.year}</p>`);
    // infoBestFilm.insertAdjacentHTML("beforeend", `<p>avec  ${response['actors']}</p>`);
    // infoBestFilm.insertAdjacentHTML("beforeend", `<p${response.description}</h4>`);
    //
    //
    // // for (let i = 0; i < response['genres'].length; i++) {
    // //     infoBestFilm.insertAdjacentHTML("beforeend", `<h4>${response['genres'][i]}</h4>`);
    // // }
    //
    // infoBestFilm.insertAdjacentHTML("beforeend", `<button role="button" class="film bouton"><i class="fas fa-info-circle"></i> Plus d'informations</button>`);


//     infoBestFilm.insertAdjacentHTML("beforeend", `<h4>${response.title}</h4>`);
//     infoBestFilm.insertAdjacentHTML("beforeend", `<p>${response.description}</p>`);
// }


// ---------------------------------------------------  click on image ------------------------------------------


document.onclick = function(event) {

    const target = event.target;

    if (target.tagName.toLowerCase() === 'img') {
        console.log("hello world");
        modal.style.display = "flex";
        event.preventDefault();
        console.log ('event :', event);

        const movieId = target.id;

        console.log("movieId: ", movieId);

        display_modal_info(urlBase + movieId)
    }
}

/**
 * Modify DOM to display images in caroussel
 * @param response
 * @param images
 * @param ids
 * @param caroussel
 */
function display_images_caroussel(response, images, ids, caroussel){
    for (let i in images) {
        if (images.hasOwnProperty(i)) {
            caroussel[i].insertAdjacentHTML("beforeend", `<a href="#"><img id="${ids[i]}" src='${images[i]}' alt="image_film"></a>`);
        }
    }
}

//    -----------------------------------  PAGINATION ---------------------------------------------------------------

// /**
//  * Modify DOM to display image in "Best Film section"
//  * @param images
//  */
// function display_Best_Film_image(images) {
//     imageBestFilm.style.background = `url("${images[0]}") no-repeat center center`;
//     imageBestFilm.style.backgroundSize = 'cover';
//     modaleImage.style.background = `url("${images[0]}") no-repeat center center`;
//     modaleImage.style.backgroundSize = 'cover';
// }


/**
 * Get a list of film id and a list of images urls from api
 * @param url
 * @param idsList
 * @param urlImagesList
 * @returns {Promise<void>}
 */
async function getImagesAndIdFilms (url, idsList, urlImagesList) {
    let next = "";
    let result;

    while (idsList.length < 7) {
        try {
            result = await axios.get(url + next)
                .then(function (response) {
                    let data = response.data.results;
                    console.log(response);
                    for (let i in data) {
                        if (data.hasOwnProperty(i)) {
                            if (idsList.length < 7) {
                                urlImagesList.push(data[i]['image_url']);
                                idsList.push(data[i]['id']);
                            } else {
                                break;
                            }
                        }
                    }
                    next = "&page=2";
                })
        } catch (error) {
            console.log(error);
        }
    }
    return result;
}

// ______________________________________________________________________________________________________________


// ------------------------------------ NO PAGINATION -----------------------------------------------------------

// /**
//  * Get a list of film id and a list of images urls from api
//  * @param url
//  * @param idsList
//  * @param urlImagesList
//  * @returns {Promise<void>}
//  */
// async function getImagesAndIdFilms (url, idsList, urlImagesList) {
//     let result;
//     try {
//         result = await axios.get(url)
//             .then(function (response) {
//                 let data = response.data.results;
//                 console.log(response);
//                 for (let i in data) {
//                     if (data.hasOwnProperty(i)) {
//                         urlImagesList.push(data[i]['image_url']);
//                         idsList.push(data[i]['id']);
//                     }
//                 }
//             })
//     } catch (error) {
//         console.log(error);
//     }
//     return result;
// }

//
// let imageUrlsListImdbScore = [];
// let idsList = [];
// function get_film_Images(url) {
//     let counter = 0;
//     let next = "";
//     let result;
//     while (counter < 7) {
//         fetch(url)
//             .then(function(response) {
//                 if (response.ok) {
//                     return response.json();
//                 }
//                 let data = response.data.results;
//                 console.log(response);
//                 for (let i in data) {
//                     if (data.hasOwnProperty(i)) {
//                         if (counter < 7) {
//                             filmsCaroussel1.insertAdjacentHTML("beforeend", "<a href=\"#\"><img src='" + data[i]['image_url'] + "' alt=\"image_film\"></a>");
//                             // imageUrlsListImdbScore.push(data[i]['image_url']);
//                             // idsList.push(data[i]['id']);
//                         } else {
//                             break;
//                         }
//                     }
//                     counter++;
//                 }
//                 next = "&page=2";
//             })
//     }
//     // display_images_caroussel(result, imageUrlsListImdbScore, filmsCaroussel1);
//     // display_Best_Film_image(imageUrlsListImdbScore)
// }



// -------  --------  -----------  --------  MAIN -------- ---------  -----------  ---------


// display caroussel 1 images and get ids of category 1

getImagesAndIdFilms(urlImdbScore, idsListBestFilms, imageUrlsListImdbScore)
    .then(response => {
        display_images_caroussel(response, imageUrlsListImdbScore, idsListBestFilms, filmsCaroussel1);
        console.log(idsListBestFilms);
    });


// display caroussel 2 images and get ids of category 2

getImagesAndIdFilms(urlMusic, idsListMusicalFilms, imageUrlsListMusic)
    .then(response => {
        display_images_caroussel(response, imageUrlsListMusic, idsListMusicalFilms, filmsCaroussel2);
        console.log(idsListMusicalFilms);
    })


// display caroussel 3 images and get ids of category 3

getImagesAndIdFilms(urlComedy, idsListComedyFilms, imageUrlsListComedy)
    .then(response => {
        display_images_caroussel(response, imageUrlsListComedy,idsListComedyFilms, filmsCaroussel3);
        console.log(idsListComedyFilms);
    })

// display caroussel 4 images and get ids of category 4

getImagesAndIdFilms(urlAnimation, idsLIstAnimationFilms, imageUrlsListAnimation)
    .then(response => {
        display_images_caroussel(response, imageUrlsListAnimation,idsLIstAnimationFilms, filmsCaroussel4);
        console.log(idsLIstAnimationFilms);
    })

// display image and informations in "Best Film" window
displayBestfilmInfo(urlBase + "9008642", infoBestFilm);