// get buttons

let btnLeft = document.getElementsByClassName("bouton_slider_left")[0];
let btnRight = document.getElementsByClassName("bouton_slider_right")[0];

let carousselCat = document.getElementsByClassName("films")[0];

let scrollAmount = 0;
let scrollPerClick = document.querySelector(".films > img").clientWidth + 5;



let scrollLeft = function scrollLeft(){
    carousselCat.scrollTo({
        top: 0,
        left: scrollAmount -= scrollPerClick,
        behavior: 'smooth'
    });
}

let scrollRight = function scrollRight(){
    carousselCat.scrollTo({
        top: 0,
        left: scrollAmount += scrollPerClick,
        behavior: 'smooth'
    });
}



btnLeft.addEventListener('click', scrollLeft);
btnRight.addEventListener('click', scrollRight);

