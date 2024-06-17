<template>
    <button @click="handleClick">
{{ label }}
    </button>
    <h2>VUEJS</h2>
  </template>
  
  <script>
  export default {
    name: 'MainContent',
    props:{
      label:{
        type:String,
        required:true
      }
    },
    methods:{
      handleClick(){
this.$emit('click');
      }
    }
  }
  </script>
  <style scoped>
button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>