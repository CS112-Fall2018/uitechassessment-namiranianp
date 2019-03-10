<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/viewCart">View Cart</router-link>
    <router-link to="/">Go Home</router-link>
    <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">
      Go Back.
    </a><br>
    <br>
    <form class="itemForm" method="POST" action="http://localhost:5555/item/add">
      <h3>What item do you want?</h3>
      <input type="text" name="name" placeholder="Item Name"/><br>
      <input type="text" name="description" placeholder="Item Description"/><br>
      <input type="number" name="price" placeholder="Item Value (positive int only)"/><br>
      <input type="number" name="amount" placeholder="Quantity (positive int only)"/><br>
      <button type="submit" name="submit" style="height: 50px; width: 220px;">
        Add to cart!
      </button>
    </form>
  </div>
</template>

<script>
import router from '../router';

export default {
  name: 'AddItems',
  data() {
    return {
      msg: 'Add items',
    };
  },
  methods: {
    navigate() {
      router.go(-1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.itemForm input{
  width: 220px;
  height: 50px;
  font-size: 15px;
}
</style>
