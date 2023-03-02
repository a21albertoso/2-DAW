<!-- ./src/components/ChildComponent.vue -->
<script>
export default {
data() {
  return {
    counter: 0,
    string: "mirame",  
  }
},methods: {
    mostrar(){
      if(this.counter%2 == 0){
        this.string = this.string.toUpperCase();
        this.counter++;
      }else{
         this.string = this.string.toLowerCase();
        this.counter++;
      }
    },

    añadir(){
      this.string = this.string + "!";
    }
},
}
</script>
<template>
<button @click=mostrar>Hola</button>
<button @click=añadir>añañin</button>
<h2>{{ string }}</h2>
</template>