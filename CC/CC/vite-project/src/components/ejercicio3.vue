<script>
export default {
data() {
  return {
    contacto1: {
        name: "Alberto",
        tlf: 717710030,
        email: "alberto@gmail.com",
    },
    counter: 0,
  }
},methods: {
    
},
}
</script>
<template>
<button @click=counter++;>hide</button>
<div v-if="counter%2 == 0">
<p>{{ contacto1.name }}</p>
<p>{{ contacto1.tlf }}</p>
<p>{{ contacto1.email }}</p>
</div>


</template>32