
// ------ ----- ----- ----- ----- Get html elements  ----- ----- ----- ----- -----

const filmsCaroussel1 = document.getElementsByClassName('film1');
const filmsCaroussel2 = document.getElementsByClassName('film2');
const filmsCaroussel3 = document.getElementsByClassName('film3');
const filmsCaroussel4 = document.getElementsByClassName('film4');

const imageBestFilm = document.getElementById("meilleur_film_image");
const modaleImage = document.getElementById("image_modale");
const infoBestFilm = document.getElementById('informations');



// ----------  -------  ------------  GET URLS  ---------   ----------  ------------

const urlBase = 'http://localhost:8000/api/v1/titles/'
const urlImdbScore = 'http://localhost:8000/api/v1/titles?imdb_score_min = 9.6&sort_by=-imdb_score,-votes';
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
// let query = 'image_url';

// ----- -------- --------- -------  GET IMAGES BESTS FILM  ----- ------  ------- ------

function displayFilmInfo (response, element){
    console.log(response);

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
    imageBestFilm.style.background = `url("${response['image_url']}") no-repeat center center`;
    imageBestFilm.style.backgroundSize = 'cover';
}



function get_film_infos (url) {
    fetch(url)
        .then(function(response) {
        if (response.ok) {
            return response.json();
        }
        })
        .then(function(response){
            displayFilmInfo(response, infoBestFilm);
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




// --------- ----------- -------------- ----------!!!!!!! GET INFO AVEC AXIOS PROBLEME !!!! ---------------------

// async function get_film_infos (url) {
//     try {
//         return await axios(url)
//             .then(function (response){
//                 console.log(response);
//             })
//
//     } catch (error){
//         console.log(error);
//     }
//
// }



/**
 * Modify DOM to display images in caroussel
 * @param response
 * @param images
 * @param caroussel
 */
function display_images_caroussel(response, images, caroussel){
    for (let i in images) {
        if (images.hasOwnProperty(i)) {
            caroussel[i].insertAdjacentHTML("beforeend", "<a href=\"#\"><img src='" + images[i] + "' alt=\"image_film\"></a>");
        }
    }
}



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
 * Get a list of film id and a list of images urls from api according to a specific query
 * @param url
 * @param numElements
 * @param query
 * @param idsList
 * @param urlImagesList
 * @returns {Promise<void>}
 */
async function getImagesAndIdFilms (url, numElements, query, idsList, urlImagesList) {
    let next = "";
    let result;

    while (idsList.length < numElements) {
        try {
            result = await axios.get(url + next)
                .then(function (response) {
                    let data = response.data.results;
                    console.log(response);
                    for (let i in data) {
                        if (data.hasOwnProperty(i)) {
                            if (idsList.length < numElements) {
                                urlImagesList.push(data[i][query]);
                                idsList.push(data[i]['id']);
                            } else {
                                break;
                            }
                        }
                    }
                    next = "&page=2";
                })
            } catch(error) {
                    console.log(error);
            }
    }
    return result;
}


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

getImagesAndIdFilms(urlImdbScore, 7, 'image_url', idsListBestFilms, imageUrlsListImdbScore)
    .then(response => {
        display_images_caroussel(response, imageUrlsListImdbScore, filmsCaroussel1);
        console.log(idsListBestFilms);
    });


// display caroussel 2 images and get ids of category 2

getImagesAndIdFilms(urlMusic, 7, 'image_url', idsListMusicalFilms, imageUrlsListMusic)
    .then(response => {
        display_images_caroussel(response, imageUrlsListMusic , filmsCaroussel2);
        console.log(idsListMusicalFilms);
    })


// display caroussel 3 images and get ids of category 3

getImagesAndIdFilms(urlComedy, 7, 'image_url', idsListComedyFilms, imageUrlsListComedy)
    .then(response => {
        display_images_caroussel(response, imageUrlsListComedy, filmsCaroussel3);
        console.log(idsListComedyFilms);
    })

// display caroussel 4 images and get ids of category 4

getImagesAndIdFilms(urlAnimation, 7, 'image_url', idsLIstAnimationFilms, imageUrlsListAnimation)
    .then(response => {
        display_images_caroussel(response, imageUrlsListAnimation, filmsCaroussel4);
        console.log(idsLIstAnimationFilms);
    })

// display image and informations in "Best Film" window
get_film_infos(urlBase + "9008642");