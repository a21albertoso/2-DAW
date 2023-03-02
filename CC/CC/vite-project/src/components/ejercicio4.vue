<script>
export default {
    props: {
        name: String,
        tlf: Number,
        email: String,
    },
    
data() {
  return {
    textoFav: "(Favorito)",
    booleanFav: false,
  }
},methods: {
    
},
}
</script>
<template>

<button @click=""></button>

<p>{{ name }}</p>

<p>{{ tlf }}</p>

<p>{{ email }}</p>

<p>----------------------</p>

</template>