<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/viewCart">View Cart</router-link>
    <router-link to="/">Go Home</router-link>
    <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">
      Go Back.
    </a><br>
    <br>
    <form id="itemForm" class="itemForm" v-on:submit="myfunc()">
      <h3>What item do you want?</h3>
      <input id="itemName" type="text" name="name" placeholder="Item Name"/><br>
      <input id="itemDesc" type="text" name="description" placeholder="Item Description"/><br>
      <input id="itemPrice" type="number" name="price" placeholder="Item Value (positive int only)"/><br>
      <input id="itemQuant" type="number" name="amount" placeholder="Quantity (positive int only)"/><br>
      <button type="submit" name="submit" style="height: 50px; width: 220px;">
        Add to cart!
      </button>
    </form>
  </div>
</template>

<script>
import router from '../router';
import axios from 'axios';

export default {
  name: 'AddItems',
  data() {
    return {
      msg: 'Add items',
    };
  },
  methods: {
    myfunc() {
      console.log("hello");
      axios.post('http://localhost:5555/item/add', {
        name: document.getElementById('itemName').value,
        description: document.getElementById('itemDesc').value,
        price: document.getElementById('itemPrice').value,
        amount: document.getElementById('itemQuant').value
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
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
