let arbore = {
    "Fish": {
    "trout": {},
    "salmon": {}
    },
    "Tree": {
    "Huge": {
    "sequoia": {},
    "oak": {}
    },
    "Flowering": {
    "apple tree": {},
    "magnolia": {}
    }
    }
    };

let ul = document.getElementById("container");
let ul2 = document.createElement("ul");
ul.insertAdjacentElement("afterbegin",ul2);

let Fish = document.createElement("li");
Fish.innerHTML= Object.keys(arbore)[0];
ul.insertAdjacentElement("afterbegin",Fish);

let trout = document.createElement("li");
trout.innerHTML = Object.keys(arbore.Fish)[1];
ul2.insertAdjacentElement("afterbegin",trout);

let salmon = document.createElement("li");
salmon.innerHTML = Object.keys(arbore.Fish)[0];
ul2.insertAdjacentElement("afterbegin",salmon);

let ul3 = document.createElement("ul");
ul2.after(ul3);

let Tree = document.createElement("li");
Tree.innerHTML = Object.keys(arbore)[1];
ul3.insertAdjacentElement("beforebegin",Tree);

let Huge = document.createElement("li");
Huge.innerHTML = Object.keys(arbore.Tree)[0];
ul3.insertAdjacentElement("afterbegin",Huge);

let ul4 = document.createElement("ul");
Huge.after(ul4);

let sequoia = document.createElement("li");
sequoia.innerHTML= Object.keys(arbore.Tree.Huge)[0];
ul4.insertAdjacentElement("afterbegin",sequoia);

let oak = document.createElement("li");
oak.innerHTML= Object.keys(arbore.Tree.Huge)[1];
sequoia.after(oak);

let Flowering = document.createElement("li");
Flowering.innerHTML = Object.keys(arbore.Tree)[1];
ul4.insertAdjacentElement("afterend",Flowering);

let ul5 = document.createElement("ul");
Flowering.insertAdjacentElement("afterend",ul5);

let appletree = document.createElement("li");
oak.innerHTML= Object.keys(arbore.Tree.Flowering)[0];
ul5.insertAdjacentElement("afterbegin",appletree);
