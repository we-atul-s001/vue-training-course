<template>
<h2>Hello HTTP</h2>
  <button @click="getPosts">Show Post</button>
  <br>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{post.title}}
      </li>
    </ul>
  </div>
 
</template>

<script>

export default {
  data() {
    return {
      posts: []
    }
  },

  methods:
      {
        getPosts(){
          fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => this.posts = data)
        }
      }
}


</script>
