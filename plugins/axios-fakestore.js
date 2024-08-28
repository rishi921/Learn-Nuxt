export default function ({$axios}, inject){
    //Crreate a Custom axios instance

    const fakestoreApi = $axios.create({
        baseURL: 'https://fakestoreapi.com/products'
    })

    //Inject the instance into Nuxt.js context
    inject('fakestoreapi', fakestoreApi)
}