let toggleMenuDeroulant = document.getElementById("bouton_cat");
let menuDeroulant = document.getElementById("menu_deroulant_categories")

toggleMenuDeroulant.addEventListener("click", function (){
    if(getComputedStyle(menuDeroulant).display != "none"){
        menuDeroulant.style.display = "none";
    }else{
        menuDeroulant.style.display = "flex";
    }
})


menuDeroulant.addEventListener("click", function (){
    if(getComputedStyle(menuDeroulant).display == "flex"){
        menuDeroulant.style.display = "none";
    }
})