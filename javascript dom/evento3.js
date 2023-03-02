let texto = document.querySelector("#texto");

let boton = document.querySelector("#boton");

let array = document.querySelector("#array");




function añade() {
    let newLi= document.createElement("li");
    newLi.textContent = texto.value;
    array.insertAdjacentElement("afterend",newLi);
}

boton.addEventListener("click",añade);