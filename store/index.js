export const state = () => ({
    products: []
})


export const mutations = {
    setProducts(state, products) {
        state.products = products;
    }
}

export const getters = {
    allProducts: (state) => state.products
}


export const actions = {
    async fetchProducts({ commit }) {
        const response = await this.$fakeStoreApi.$get('https://fakestoreapi.com/products')
        commit('setProducts', response)


    }
}