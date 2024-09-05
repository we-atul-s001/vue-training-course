<template>
<h2 v-for="post in posts"  :post="post" :key="post.id" @edit-post="updatePost"></h2>
</template>

<script setup>

import {ref} from "vue";

defineProps(['title']);

const posts = ref([
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
  { id: 3, title: 'Post 3' },
]);

const updatePost =(postId) =>
{
  posts.value = posts.value.map((posts) => {
    if(post.id === postId)
    {
      return {...post, title: 'Updated Post'}
    }
    return post;
});
}

</script>