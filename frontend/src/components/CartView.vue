<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/addItems">Add Items</router-link>
    <router-link to="/">Go Home</router-link>
    <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">
      Go Back.
    </a><br>

    <ul>
      <table class="itemInfo" v-for="jsonObj in data" style="background-color:darkgrey; margin: 10px;">
        <tr>
          <td>Name: </td>
          <td>{{ jsonObj.name }}</td>
        </tr>
        <tr>
          <td>Description: </td>
          <td>{{ jsonObj.description }}</td>
        </tr>
        <tr>
          <td>Price: </td>
          <td>{{ jsonObj.price }}</td>
        </tr>
        <tr>
          <td>Amount: </td>
          <td>{{ jsonObj.amount }}</td>
        </tr>
      </table><br>
    </ul>
  </div>
</template>

<script>
import router from '../router';
import axios from 'axios';
import ItemBox from '@/components/ItemBox';

export default {
  name: 'CartView',
  components: {
    ItemBox,
  },
  data() {
    return {
      msg: 'View your cart',
      data: null,
    };
  },
  methods: {
    navigate() {
      router.go(-1);
    },
  },
  mounted() {
    axios
      .get('http://localhost:5555/list')
      .then(response => (this.data = response.data))
      .catch(function(error){
        console.log('Error: ',error);
      })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
