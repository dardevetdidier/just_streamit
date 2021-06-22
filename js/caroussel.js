// get buttons

let cat1BtnLeft = document.getElementById("cat1_bouton_slider_left");
let cat1BtnRight = document.getElementById("cat1_bouton_slider_right");
let cat2BtnLeft = document.getElementById("cat2_bouton_slider_left");
let cat2BtnRight = document.getElementById("cat2_bouton_slider_right");
let cat3BtnLeft = document.getElementById("cat3_bouton_slider_left");
let cat3BtnRight = document.getElementById("cat3_bouton_slider_right");
let cat4BtnLeft = document.getElementById("cat4_bouton_slider_left");
let cat4BtnRight = document.getElementById("cat4_bouton_slider_right");

let carousselCat1 = document.getElementsByClassName("films")[0];
let carousselCat2 = document.getElementsByClassName("films")[1];
let carousselCat3 = document.getElementsByClassName("films")[2];
let carousselCat4 = document.getElementsByClassName("films")[3];

let scrollAmount = 0;
let scrollPerClick = document.querySelector(".films > img").clientWidth + 5;


let scrollLeft1 = function scrollLeft(){
    carousselCat1.scrollTo({
        top: 0,
        left: scrollAmount -= scrollPerClick,
        behavior: 'smooth'
    });
};

let scrollRight1 = function scrollRight(){
    carousselCat1.scrollTo({
        top: 0,
        left: scrollAmount += scrollPerClick,
        behavior: 'smooth'
    });
};

let scrollLeft2 = function scrollLeft(){
    carousselCat2.scrollTo({
        top: 0,
        left: scrollAmount -= scrollPerClick,
        behavior: 'smooth'
    });
};

let scrollRight2 = function scrollRight(){
    carousselCat2.scrollTo({
        top: 0,
        left: scrollAmount += scrollPerClick,
        behavior: 'smooth'
    });
};


let scrollLeft3 = function scrollLeft(){
    carousselCat3.scrollTo({
        top: 0,
        left: scrollAmount -= scrollPerClick,
        behavior: 'smooth'
    });
};

let scrollRight3 = function scrollRight(){
    carousselCat3.scrollTo({
        top: 0,
        left: scrollAmount += scrollPerClick,
        behavior: 'smooth'
    });
};

let scrollLeft4 = function scrollLeft(){
    carousselCat4.scrollTo({
        top: 0,
        left: scrollAmount -= scrollPerClick,
        behavior: 'smooth'
    });
};

let scrollRight4 = function scrollRight(){
    carousselCat4.scrollTo({
        top: 0,
        left: scrollAmount += scrollPerClick,
        behavior: 'smooth'
    });
};

cat1BtnLeft.addEventListener('click', scrollLeft1);
cat1BtnRight.addEventListener('click', scrollRight1);
cat2BtnLeft.addEventListener('click', scrollLeft2);
cat2BtnRight.addEventListener('click', scrollRight2);
cat3BtnLeft.addEventListener('click', scrollLeft3);
cat3BtnRight.addEventListener('click', scrollRight3);
cat4BtnLeft.addEventListener('click', scrollLeft4);
cat4BtnRight.addEventListener('click', scrollRight4);

// let buttonsLeft = document.getElementsByClassName("bouton_slider_left");
// let buttonsRight = document.getElementsByClassName("bouton_slider_right");
// let caroussels = document.getElementsByClassName("films");
// caroussel1 = caroussels[0]
// let scrollAmount = 0;
// let scrollPerClick = document.querySelector(".films > img").clientWidth + 5;
//
// function scrollCaroussel(caroussel) {
//
//     return caroussel.scrollTo({
//         top: 0,
//         left: scrollAmount -= scrollPerClick,
//         behavior: 'smooth'
//     });
// }
//
// function listenButton(button_right, button_left, scrollFunction) {
//     button_right.addEventListener('click', scrollFunction);
//     button_left.addEventListener('click', scrollFunction);
// }
//
//
// listenButton(
//     buttonsRight[0],
//     buttonsLeft[0],
//     scrollCaroussel(caroussels[0])
//     );




