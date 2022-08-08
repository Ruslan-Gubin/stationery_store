
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


// const c = {
//     hello: 'World',
//     k: 2,
//     4: 'hi'
//   };
//   const a = [3,4,5];
//   localStorage.setItem('a', JSON.stringify(a));
//   localStorage.setItem('c', JSON.stringify(c));
//   let b = localStorage.getItem('a');
//   let d = localStorage.getItem('c');
//   b = JSON.parse(b);
//   console.log( b);
//   console.log(JSON.parse(d));
// localStorage.clear();

