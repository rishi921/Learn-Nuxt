<template>
  <div>
    <h1>{{ post.title }}</h1>
    <h1>{{ post.body }}</h1>
    <nuxt-link to="/posts">Back To Posts</nuxt-link>
  </div>
</template>

<script>
export default {
    data () {
        return {
            post: {}
        }
    },
    async fetch (){
        const post = await this.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${this.$route.$params.id}`)
    this.post = post
    }
};
</script>
