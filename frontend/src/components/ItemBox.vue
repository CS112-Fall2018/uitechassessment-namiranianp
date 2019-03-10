<template>
  <div>
    <h1>Hello!</h1>
    <table class="itemInfo">
      <tr>
        <td>Name: </td>
        <td>{{obj.name}}</td>
      </tr>
      <tr>
        <td>Description: </td>
        <td></td>
      </tr>
      <tr>
        <td>Price: </td>
        <td></td>
      </tr>
      <tr>
        <td>Amount: </td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        obj: null,
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.itemInfo {
  height: 300px;
  width: 300px;
  background-color: darkgrey;
}
</style>
