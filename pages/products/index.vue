<template>
  <div>
    <h1>List of Products</h1>
    <div v-if="products.length">
      <div v-for="product in products" :key="product.id">
        <h2>{{ product.title }}</h2>
        <img :src="product.image" alt="product.title" width="150" />
        <p>{{ product.description }}</p>
        <h3>Price : ${{ product.price }}</h3>
      </div>
    </div>
    <div v-else>Loading ...</div>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    //dispatch the Vuex action to fetch products
    await store.dispatch("fetchProducts");
  },
  computed: {
    products() {
      //Access the products from the Vues store via the getter
      return this.$store.getters.allproducts;
    },
  },
};
</script>
