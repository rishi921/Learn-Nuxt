<template>
  <div>
    <h1>Blog Posts</h1>
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostCard from "../../components/PostCard.vue";
export default {
  components: {
    PostCard,
  },
  async asyncData({ $axios }) {
    const posts = await $axios.$get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return posts;
  },
};
</script>
