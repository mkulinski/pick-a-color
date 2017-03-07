<template>
  <div class="color-box">
    <div
      v-for="(color, index) in colors"
      :style="{ backgroundColor: color.color }"
      @click="onClick(index, color)"
      :class="{ box: true, 'add-border': color.isActive }"
    ></div>
  </div>
</template>

<script>
  export default {
    name: 'color-box',
    props: ['colors', 'setPostColor', 'toggleActive'],
    methods: {
      onClick(idx) {
        this.toggleActive(idx);
        this.setPostColor(idx);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .color-box {
    margin: 20px auto;
    display: flex;
    width: 160px;
  }
  .box {
    height: 40px;
    width: 40px;
  }
  .box:hover {
    cursor: pointer;
  }
  .add-border {
    border: 2px solid #323232;
  }
</style>
