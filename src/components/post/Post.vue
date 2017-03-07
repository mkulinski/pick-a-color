<template>
  <div class="post" :style="{ color: color.color }">
    <h4>{{postText}}</h4>
    <span @click="deletePost(postID)">X</span>
  </div>
</template>

<script>
  export default {
    name: 'post',
    props: ['postText', 'color', 'postID', 'deletePost'],
    // beforeMount() {
    //   console.log(this.postID);
    // },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .post {
    border: 1px solid gainsboro;
    margin: 0 10px;
  }
  h4 {
    font-weight: normal;
    // background-color: gainsboro;
    display: inline-block;
  }
  span {
    float: right;
    padding: 3px;
    color: skyblue;
    cursor: pointer;
  }
</style>
