<template>
  <div class="home">
    <h1>Home</h1>
    <ul>
      <post
        v-for="(post, index) in posts"
        :postText="post.text"
        :color="post.color"
        :postID="index"
        :deletePost="deletePost"
      ></post>
    </ul>
    <div class="user-input">
      <input v-model="postText" @keyup.enter="submitPost" />
      <color-box :colors="colors" :setPostColor="setPostColor"></color-box>
      <button>Submit</button>
    </div>
  </div>
</template>

<script>
  import Post from '@/components/post/Post';
  import ColorBox from '@/components/post/ColorBox';

  export default {
    name: 'home',
    components: {
      Post,
      ColorBox,
    },
    data() {
      return {
        postText: '',
        postColor: 'skyblue',
        posts: [{ text: 'it\'s lit!', color: 'green' }],
        colors: ['crimson', 'skyblue', 'forestgreen', 'goldenrod'],
      };
    },
    methods: {
      submitPost() {
        this.posts = [...this.posts, { text: this.postText, color: this.postColor }];
        this.postText = '';
        this.postColor = 'skyblue';
      },
      deletePost(id) {
        this.posts = [...this.posts.slice(0, id), ...this.posts.slice(id, this.posts.length - 1)];
      },
      setPostColor(index) {
        console.log('grabbed color ', this.colors[index]);
        this.postColor = this.colors[index];
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $purple: purple;

  h1 {
    font-weight: normal;
    color: $purple;
  }

  ul {
    margin: 40px auto;
    width: 30%;
    list-style-type: none;
    padding: 0;
  }

  .user-input {
    display: inline-block;
  }

  input {
    width: 160px;
  }
</style>
