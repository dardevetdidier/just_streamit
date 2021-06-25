
// ------ ----- ----- ----- ----- Get html elements  ----- ----- ----- ----- -----

const filmsCaroussel1 = document.getElementsByClassName('film1');
const bestFilmHtml = document.getElementById("meilleur_film_image");

// ----------  -------  ------------  GET URLS  ---------   ----------  ------------

let UrlBaseImdbScore = 'http://localhost:8000/api/v1/titles?imdb_score_min = 9.6&sort_by=-imdb_score,-votes'




// ----- -------- --------- -------  GET DATA BESTS FILM  ----- ------  ------- ------

/**
 * makes a request to api using axios and returns a list of "numElements" elements as query
 * @param {string} url
 * @param {} caroussel
 * @param {number} numElements
 * @returns {Promise<*[]>}
 */
async function getBestFilmData (url, caroussel, numElements) {
    let imageUrlsList = [];
    let idsList = [];
    let next = "";

    while (imageUrlsList.length < numElements) {
        await axios.get(url + next)
            .then(function (response) {
                let data = response.data.results;
                console.log(response);
                for (let i in data) {
                    if (data.hasOwnProperty(i)) {
                        if (imageUrlsList.length < numElements) {
                            imageUrlsList.push(data[i]['image_url']);
                            idsList.push(data[i]['id']);
                        } else {
                            break;
                        }
                    }
                }
                next = "&page=2";
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    console.log(imageUrlsList);
    console.log(idsList);

    // display images from list of urls
    for (let i in imageUrlsList) {
        if (imageUrlsList.hasOwnProperty(i)) {
            caroussel[i].insertAdjacentHTML("beforeend", "<a href=\"#\"><img src='" + imageUrlsList[i] + "' alt=\"image_film\"></a>");
        }
    }

    // display image of Best Film
    let bestFilmImage = imageUrlsList[0]
    bestFilmHtml.style.background = `url("${imageUrlsList[0]}") no-repeat center center`;
    bestFilmHtml.style.backgroundSize = 'cover';

}



// -------  --------  -----------  --------  MAIN -------- ---------  -----------  ---------


getBestFilmData(UrlBaseImdbScore, filmsCaroussel1, 7);


