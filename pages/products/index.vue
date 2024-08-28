<template>

</template>

<script>
export default {
    async fetch ({store}) {
        //dispatch the Vuex action to fetch products
        await store.dispatch('fetchProducts')
    },
    computed: {
        products () {
            //Access the products from the Vues store via the getter
            return this.$store.state.products
        }
    }
}
</script>