<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Not Very Essential Links</h2>
    <input v-model="msg" />
    <button v-on:click="reverseMsg">Reverse Da Message</button>
    <h2>Not an Ecosystem</h2>
    <ul>
      <li>Doing it</li>
    </ul>
    <ul>
      <li><router-link to="/boo/test1">Boo Test 1</router-link></li>
      <li><router-link to="/boo/test2">Boo Test 2</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome',
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
