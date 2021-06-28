// Get buttons and caroussels

const flechesDroites = document.getElementsByClassName("fleche_droite");
const flechesGauches = document.getElementsByClassName("fleche_gauche");
const film = document.querySelector('.film');

const caroussels = document.getElementsByClassName("contenu_caroussel");


// scroll caroussel when clicks on right or left arrow
function scrollCaroussel(flecheG, flecheD, caroussel) {
    flecheG.addEventListener('click', () => {
    caroussel.scrollLeft += film.clientWidth + 100;
});

    flecheD.addEventListener('click', () => {
    caroussel.scrollLeft -= film.clientWidth + 100;
});
}

// scrolls all caroussels0
scrollCaroussel(flechesDroites[0], flechesGauches[0], caroussels[0]);
scrollCaroussel(flechesDroites[1], flechesGauches[1], caroussels[1]);
scrollCaroussel(flechesDroites[2], flechesGauches[2], caroussels[2]);
scrollCaroussel(flechesDroites[3], flechesGauches[3], caroussels[3]);
