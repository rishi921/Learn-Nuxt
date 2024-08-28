<template>
  <div class="container">
    <h1>List of Products</h1>
    <div v-if="products.length">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" alt="Product Image" class="product-image" />
        <div class="product-info">
          <h2 class="product-title">{{ product.title }}</h2>
          <p class="product-price">${{ product.price }}</p>
          <p class="product-description">{{ product.description }}</p>
        </div>
      </div>
    </div>
    <p v-else>No products available</p>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    // Dispatch Vuex action to fetch products
    await store.dispatch("fetchProducts");
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: #1a1a2e;
  color: #e0e0e0;
}

h1 {
  text-align: center;
  color: #a3ffa3;
  margin-bottom: 20px;
}

.product-card {
  background: linear-gradient(145deg, #a13899, #222258);
  border-radius: 10px;
  box-shadow: 8px 8px 15px #111122, -8px -8px 15px #2b2b3e;
  margin: 30px auto;
  padding: 30px;
  max-width: 800px;
  display: flex;
  align-items: center;
  color: #e0e0e0;
  text-align: center;
}

.product-image {
  border-radius: 10px;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
}

.product-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-title {
  font-size: 22px;
  color: #a3ffa3;
  margin-bottom: 10px;
}

.product-description {
  font-size: 16px;
  color: #d0d0d0;
  line-height: 1.5;
}

p {
  text-align: center;
  color: #a3ffa3;
}
</style>
