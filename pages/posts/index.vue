<template>
  <div>
    <h1>Blog Posts</h1>
    <!-- <PostCard v-for="post in posts" :key="post.id" :post="post" /> -->
    <ul>
      <li v-for="post in posts" :key="post.id">
        <nuxt-link :to="`/posts/${post.id}`">{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import PostCard from "~/components/PostCard.vue";

export default {
  middleware: 'log',
  components: {
    PostCard,
  },
  async asyncData({ $axios }) {
    const posts = await $axios.$get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return { posts };
  },
};
</script>
