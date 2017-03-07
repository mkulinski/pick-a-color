<template>
  <div class="child">
    <h1>Welcome Home Child</h1>
    <h4>{{str}}</h4>
  </div>
</template>

<script>
  export default {
    name: 'home-child',
    props: ['str'],
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $purple: purple;

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

  h1 {
    color: $purple;
  }
</style>
