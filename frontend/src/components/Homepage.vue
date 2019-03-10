<template>
  <div class="hello">
    <h1>This is the homepage for my Vue.js app!</h1>
    <router-link to="/viewCart"><h2>Cart List</h2></router-link>
    <router-link to="/addItems"><h2>Add Item</h2></router-link>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
