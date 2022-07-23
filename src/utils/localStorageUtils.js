
 class LocalstorageUtil {
    constructor() {
        this.keyName = 'products';
    }
    getProducts() {
        const productsLocalestorage = localStorage.getItem(this.keyName);
        if (productsLocalestorage !== null) {
            return JSON.parse(productsLocalestorage);
        }
        return [];
    }

    putProducts(id) {
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);

        if (index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index, 1);
        }

        
        localStorage.setItem(this.keyName, JSON.stringify(products));

            return { pushProduct, products };
                       
    }
    
}

const localstorageUtils = new LocalstorageUtil();

export default localstorageUtils;





