export const state = () => ({
    products: []
})

export const mutations = {
    setProducts(state, products) {
        state.products = products
    }
}

export const getters = {
    allProducts: (state) => state.products
}

export const actions = {
    async fetchProducts({ commit }) {
        try {
            const products = await this.$fakestoreApi.$get('/products')
            commit('setProducts', products)
        } catch (error) {
            console.log(error)
            // Handle error here (e.g., toast notification)
            return Promise.reject(error)
        }
    }
}
