<template>
  <div>
    <h1>Login</h1>
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.commit("auth/login");
      this.$router.push("/login");
    },
  },
};
</script>
