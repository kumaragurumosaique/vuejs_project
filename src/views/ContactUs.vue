<template>
    <div>
      <div v-for="detail in details" :key="detail.id">
        <h1>{{ detail.names }}</h1>
        <h2>{{ detail.contact_content }}</h2>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Add any styles if needed */
  </style>
  
  <script>
  export default {
    data() {
      return {
        details: [
          {
            names: "Raki",
            id: 1,
            contact_content: "+91 9212223123"
          },
          {
            names: "Ramesh",
            id: 2,
            contact_content: "+91 8429023123"
          },
          {
            names: "Raki",
            id: 3,  // Ensure unique id
            contact_content: "+91 9212223123"
          },
          {
            names: "Ramesh",
            id: 4,  // Ensure unique id
            contact_content: "+91 8429023123"
          }
        ]
      };
    }
  };
  </script>
  