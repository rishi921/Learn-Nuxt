<template>
  <div>
    <h1>User's List</h1>
    <userCard
      v-for="user in users"
      :key="user.id"
      :name="user.name"
      :id="user.id"
    />
  </div>
</template>

<script>
import UserCard from "../../components/UserCard.vue"

export default {
  name: "UsersList",
  components: {
    UserCard,
  },
  data() {
    return {
      users: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Mike Johnson" },
      ],
    };
  },
};
</script>
