
// ------ ----- ----- ----- ----- Get html elements  ----- ----- ----- ----- -----

const filmsCaroussel1 = document.getElementsByClassName('film1');
const bestFilmHtml = document.getElementById("meilleur_film_image");
const modaleImage = document.getElementById("image_modale");

// ----------  -------  ------------  GET URLS  ---------   ----------  ------------

const urlImdbScore = 'http://localhost:8000/api/v1/titles?imdb_score_min = 9.6&sort_by=-imdb_score,-votes';
const UrlMusic = "http://localhost:8000/api/v1/titles/?genre=Music&imdb_score_min=8&sort_by=-imdb_score,-votes";
const urlComedy = "http://localhost:8000/api/v1/titles/?genre=Comedy&imdb_score_min=8&sort_by=-imdb_score,-votes";
const urlAnimation = "http://localhost:8000/api/v1/titles/?genre=Animation&imdb_score_min=8&sort_by=-imdb_score,-votes"


// --------  ----------  -----------  VARIABLE DECLARATION -----  ---------   -------------

let imageUrlsList = [];
let idsList = [];

// ----- -------- --------- -------  GET IMAGES BESTS FILM  ----- ------  ------- ------


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


/**
 * Modify DOM to display image in "Best Film section"
 * @param images
 */
function display_Best_Film_image(images) {
    bestFilmHtml.style.background = `url("${images[0]}") no-repeat center center`;
    bestFilmHtml.style.backgroundSize = 'cover';
    modaleImage.style.background = `url("${images[0]}") no-repeat center center`;
    modaleImage.style.backgroundSize = 'cover';
}


/**
 * Get urls of images from api and modify DOM to display images
 * @param url
 * @param caroussel
 * @param numElements
 * @returns {Promise<void>}
 */
async function getFilmData (url, caroussel, numElements) {
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
                                imageUrlsList.push(data[i]['image_url']);
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
// let imageUrlsList = [];
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
//                             // imageUrlsList.push(data[i]['image_url']);
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
//     // display_images_caroussel(result, imageUrlsList, filmsCaroussel1);
//     // display_Best_Film_image(imageUrlsList)
// }



// -------  --------  -----------  --------  MAIN -------- ---------  -----------  ---------

getFilmData(urlImdbScore, filmsCaroussel1, 7)
    .then(response => {
        display_images_caroussel(response, imageUrlsList, filmsCaroussel1);
        display_Best_Film_image(imageUrlsList);
        console.log(idsList);
    })


