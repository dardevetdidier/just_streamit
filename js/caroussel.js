// Get buttons and caroussels
const buttonRight = document.getElementsByClassName("bouton_slider_right");
const buttonLeft = document.getElementsByClassName("bouton_slider_left");
const caroussels = document.getElementsByClassName("films");


// scroll caroussel when clicks on right or left arrow
function scrollCaroussel(buttonR, buttonL, caroussel) {
    buttonR.addEventListener('click', () => {
    caroussel.scrollLeft += document.getElementById("cat1_film0").clientWidth + 50;
});

    buttonL.addEventListener('click', () => {
    caroussel.scrollLeft -= document.getElementById("cat1_film0").clientWidth + 50;
});
}

// scrolls all caroussels
scrollCaroussel(buttonRight[0], buttonLeft[0], caroussels[0]);
scrollCaroussel(buttonRight[1], buttonLeft[1], caroussels[1]);
scrollCaroussel(buttonRight[2], buttonLeft[2], caroussels[2]);
scrollCaroussel(buttonRight[3], buttonLeft[3], caroussels[3]);
