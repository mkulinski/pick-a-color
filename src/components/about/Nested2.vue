<template>
  <div class="nested-2">
    <h1>Nested 2 {{ headerMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'nested-2',
  data() {
    return {
      headerMsg: 'Welcome',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
