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
      <color-box
        :colors="colors"
        :setPostColor="setPostColor"
        :toggleActive="toggleActive"
      ></color-box>
      <button @click="submitPost">Submit</button>
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
        oldColorIndex: 3,
        posts: [{ text: 'it\'s lit!', color: { color: 'green' } }],
        colors: [
          { color: 'crimson', isActive: false },
          { color: 'skyblue', isActive: false },
          { color: 'forestgreen', isActive: false },
          { color: 'goldenrod', isActive: true },
        ],
      };
    },
    methods: {
      submitPost() {
        this.posts = [...this.posts, { text: this.postText, color: this.postColor }];
        this.postText = '';
      },
      deletePost(id) {
        this.posts = [...this.posts.slice(0, id), ...this.posts.slice(id, this.posts.length - 1)];
      },
      setPostColor(index) {
        this.oldColorIndex = index;
        this.postColor = this.colors[index];
      },
      toggleActive(index) {
        // remove border
        const oldActiveColor = Object.assign(
          {},
          this.colors[this.oldColorIndex],
          { isActive: false },
        );
        const newColors = [
          ...this.colors.slice(0, this.oldColorIndex),
          oldActiveColor,
          ...this.colors.slice(this.oldColorIndex + 1),
        ];
        // const newColors = [...this.colors];
        // newColors[this.oldColorIndex] = oldActiveColor;
        // add new border
        const activeColor = Object.assign({}, newColors[index], { isActive: true });
        this.colors = [...newColors.slice(0, index), activeColor, ...newColors.slice(index + 1)];
        // newColors[index] = activeColor;
        // this.colors = newColors;
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
