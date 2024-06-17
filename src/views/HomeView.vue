<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>wer</h1>
    <h2>{{ name_change }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
  ,data() {
    return {
      name_change: "NAME change"
    }
  },
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
