const req = new XMLHttpRequest();

req.open("GET","https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json");

req.send();

req.addEventListener("load",function(){
    let numkittens = 0;
    let malekittens = 0;
    let femalekittens = 0;
    let texto = "os nomes son: ";
    let array = [];
    const cats = JSON.parse(req.response);
    for(const cat of cats){

        console.log(cat.name);

       array.push(cat.name);

       numkittens = cat.kittens.length+numkittens;
       for(const kitten of cat.kittens){
        if(kitten.gender == "m"){
            malekittens++;
        }
        if(kitten.gender == "f"){
            femalekittens++;
        }
       }

    }

    let kittennames = array.join(" ");
    console.log(texto,kittennames);

    console.log("hay "+numkittens+" gatoiños dos cales "+malekittens+" son homes e "+femalekittens+" son mulleres.");
});
