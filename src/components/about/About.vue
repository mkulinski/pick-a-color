<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {
        msg: 'About Page',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $green: green;
  h1 {
    font-weight: normal;
    color: $green;
  }
</style>
