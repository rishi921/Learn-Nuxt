<template>
  <div>
    <h1>User Profile</h1>
    <h3>User Id : {{ $route.params.id }}</h3>
    <nuxt-link to="/">Go To Home Page</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
};
</script>
