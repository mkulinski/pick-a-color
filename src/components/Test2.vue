<template>
  <div class="test2">
    <h1>Test2 {{ headerMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'test2',
  data() {
    return {
      headerMsg: 'Welcome',
    };
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
  /*display: inline-block;*/
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
