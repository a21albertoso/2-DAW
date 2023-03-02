"use strict";
/*var promise = promesa();

promise.then(function(valor){
    console.log("valor:",valor);
});

function promesa(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('el valor es correcto');
        },3000);
    });
}*/


/*

var promise = impares();

promise.then(function(valor){
    console.log("valor:",valor);
});

*/


function delay(ms){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,ms)
    }
)};
delay(3000).then(()=>console.log('mensaxe obtida despois de 3 segundos'));



//1

