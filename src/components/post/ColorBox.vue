<template>
  <div class="color-box">
    <div
      v-for="(color, index) in colors"
      :style="{ backgroundColor: color }"
      @click="setPostColor(index)"
      class="box"
    ></div>
  </div>
</template>

<script>
  export default {
    name: 'color-box',
    props: ['colors', 'setPostColor'],
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .color-box {
    margin: 20px auto;
    display: flex;
    width: 160px;
    background-color: gainsboro;
  }
  .box {
    height: 40px;
    width: 40px;
  }
  .box:hover {
    cursor: pointer;
  }
</style>
