// ---- --------- --------- GET BUTTONS AND CAROUSSELS  --------- ------- ------- ----------

const flechesDroites = document.getElementsByClassName("fleche_droite");
const flechesGauches = document.getElementsByClassName("fleche_gauche");
const film = document.querySelector('.film');
const caroussels = document.getElementsByClassName("contenu_caroussel");


//_____________________________  MODIFY DOM CAROUSSEL IMAGES _____________________________________________

/**
 * Modifies DOM inserting in a caroussel images of films using API request. Add the id of the film as 'id '.
 * @param response
 * @param caroussel
 */
function display_images_caroussel(response, caroussel){
    for (let i = 0; i < 7; i++) {
            caroussel[i].insertAdjacentHTML("beforeend", `<a href="#"><img id="${response.results[i]['id']}" src='${response.results[i]['image_url']}' alt="image_film"></a>`);
    }
}

// ------- ---------- -------- SCROLLING CAROUSSEL ------- ------- ----------- ------------

/**
 * scrolls caroussel when clicks on right or left arrow
 * @param flecheG
 * @param flecheD
 * @param caroussel
 */
function scrollCaroussel(flecheG, flecheD, caroussel) {
    flecheG.addEventListener('click', () => {
    caroussel.scrollLeft += film.clientWidth;
});

    flecheD.addEventListener('click', () => {
    caroussel.scrollLeft -= film.clientWidth;
});
}


// scrolls all caroussels
scrollCaroussel(flechesDroites[0], flechesGauches[0], caroussels[0]);
scrollCaroussel(flechesDroites[1], flechesGauches[1], caroussels[1]);
scrollCaroussel(flechesDroites[2], flechesGauches[2], caroussels[2]);
scrollCaroussel(flechesDroites[3], flechesGauches[3], caroussels[3]);
