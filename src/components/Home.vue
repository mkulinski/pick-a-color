<template>
  <div class="home">
    <h1>Home</h1>
    <home-child :str="msg"></home-child>
    <input v-model="msg" @keyup.enter="reverseMsg" />
    <button>Submit</button>
  </div>
</template>

<script>
  import HomeChild from '@/components/HomeChild';

  export default {
    name: 'home',
    components: {
      HomeChild,
    },
    data() {
      return {
        msg: '',
      };
    },
    methods: {
      reverseMsg() {
        this.msg = this.msg.split('').reverse().join();
      },
    },
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
