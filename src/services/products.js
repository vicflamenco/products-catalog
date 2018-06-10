import productsMock from './../assets/products.json'

export default class productsService {

    getProducts() {
        return productsMock;
    }

    getProductsByName(name) {
        //TODO
        return "success " + name;
    }
}