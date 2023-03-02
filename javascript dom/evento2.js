let oculto = document.querySelector("#adicional");
let ligazon = document.querySelector("#ligazon");

function hide(){
    oculto.style.cssText="display:inline;";
    ligazon.style.cssText="display:none;";
}

ligazon.addEventListener("click", hide);