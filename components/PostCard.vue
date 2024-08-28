<template>
  <div class="post-card">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body.substring(0, 100) }}</p>
    <nuxt-link .to="`/posts/${post.id}`">Read More</nuxt-link>
  </div>
</template>

<script>
export default {
    name: 'PostCard',
    props: {
        post: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.post-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
}
</style>
