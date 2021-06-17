// get the button (categories)
let toggleMenuDeroulant = document.getElementById("bouton_cat");

// get the modal
let menuDeroulant = document.getElementById("menu_deroulant_categories")

// modifier display de menuDeroulant
toggleMenuDeroulant.addEventListener("click", function (){
    if(getComputedStyle(menuDeroulant).display != "none"){
        menuDeroulant.style.display = "none";
    }else{
        menuDeroulant.style.display = "flex";
    }
})

// ferme la modale quand clic sur un element du menu
menuDeroulant.addEventListener("click", function (){
    if(getComputedStyle(menuDeroulant).display == "flex"){
        menuDeroulant.style.display = "none";
    }
})