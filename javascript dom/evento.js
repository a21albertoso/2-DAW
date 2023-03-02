let input = document.getElementById("ocultar");

function dentro(){
    console.log("dentrito");
}

function fora(){
    console.log("fuerita");
}

input.addEventListener("mouseover",dentro);

input.addEventListener("mouseout",fora);

function borrar(){
    document.getElementById("texto").textContent="";
}

input.addEventListener("click",borrar);

