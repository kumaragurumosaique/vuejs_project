<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ msg }}</h1>

    <div v-if="show">Kumara Guru</div>
    <button @click="nameChange">
      <span>Change Word</span> 
    </button>
  </div>
</template>

<script>
export default  {
  data() {
    return {
      show: true
    }
  },
  methods: {
    nameChange() {
      this.show = !this.show;
    }
  }, // Add a comma here
}
</script>
