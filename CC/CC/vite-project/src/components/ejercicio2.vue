<script>
export default {
data() {
  return {
    count:0,
  }
},methods: {
    
},
}
</script>
<template>

<button @click=count++>The count is {{ count }}</button>
<button @click=count++>The count is {{ count }}</button>
<button @click=count++>The count is {{ count }}</button>
<button @click=count++>The count is {{ count }}</button>

</template>