<template>
  <div>
    <h1>Filtered Posts</h1>
    <p v-if="query.userId">
      Showing Post For userID: <strong>{{ query.userId }}</strong>
    </p>
    <h2 v-else>
      Please provide a valid userId as a query parameter to filter the posts.
    </h2>
    <ul>
      <li v-for="post in filteredPosts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    query() {
      return this.$route.query;
    },
    filteredPosts() {
      if (this.query.userId) {
        return this.posts.filter(
          (post) => post.userId === parseInt(this.query.userId)
        );
      }
      return this.posts;
    },
  },
  async mounted() {
    this.posts = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/posts"
    );
  },
};
</script>
