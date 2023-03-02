
let id = 0;

const app4 = Vue.createApp({
data() {
return {
    daño: [7,8,9,10,11,12,13,14,15,16],
    infos: [],
    jugador: 100,
    monstruo: 100,
}},methods: {
    ataque(){
        let randomtu = (Math.random()*9).toFixed();
        let randombicho = (Math.random()*9).toFixed();

        let dañotu = this.daño[randomtu];
        let dañobicho = this.daño[randombicho];

        let infotu = "Usted hizo "+dañotu+" de daño."
        let infobicho = "El monstruo hizo "+dañobicho+" de daño."

        this.infos.push({dato: infotu})
        this.infos.push({dato: infobicho});

        this.infos.reverse(); 

        let tu = document.querySelector("#player");
        let tuvida = tu.lastElementChild;
        let todatuvida = tuvida.querySelector(".healthbar__value");

        this.jugador = this.jugador - dañotu;
        widthtuvida = "width: "+this.jugador+"%";
        todatuvida.setAttribute("style",widthtuvida);

        //let bicho = document.querySelector("#monster");
        //let bichovida = bicho.lastElementChild;
        //let todabichovida = bichovida.querySelector(".healthbar__value");

        
    }


},
}).mount('#game');

