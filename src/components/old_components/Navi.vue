<template>
  <div class="navi">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/boo">Boo</router-link></li>
      <li><router-link to="/hello">Hello</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navi',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.navi {
  float: left;
  height: 100vh;
  width: 10em;
  background-color: aliceblue;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /*display: inline-block;*/
  /*font-weight: bold;*/
  margin: 0 10px;
}

a {
  color: dimgray;
}

a:hover {
  color: gainsboro;
}
</style>
