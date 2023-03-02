<!-- .App.vue -->
<script>
import HelloWorld from "./components/HelloWorld.vue";
import ejercicio2 from "./components/ejercicio2.vue";
import ejercicio3 from "./components/ejercicio3.vue";
import ejercicio4 from "./components/ejercicio4.vue";



export default {
// Escribir as opcións do compoñente: data, methods, watch, ...
data() {
return {
contactos: [
        {
        name: "Alberto",
        tlf: 717710030,
        email: "alberto@gmail.com",
        },
        {
        name: "Miguel",
        tlf: 717710031,
        email: "Miguel@gmail.com",
        },
    ]
};
},
// rexistro do compoñente
components: {
HelloWorld,
ejercicio2,
ejercicio3,
ejercicio4,
},
};

</script>
<template>

<ejercicio4 v-for="contacto in contactos" :name="contacto.name"
 :tlf="contacto.tlf" :email="contacto.email" />

</template>