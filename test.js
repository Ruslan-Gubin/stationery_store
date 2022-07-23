import { ROOT_PRODUCTS } from "../../constants/root";
import localstorageUtils from "../../utils/localStorageUtils";
import eventProduct from "../../utils/productEventUtils";

import { API_CATALOG } from "../../constants/api";
import { getDataCtatalog } from "../../utils/getDataApiCatalog";


class Products {
  constructor() {
    this.classNameActive = "products-element__button_active";
    this.labelAdd = "В корзину";
    this.labelRemove = "В корзине";
  }
  
  eventListener(){
    eventProduct.render();
  }
  
   async render() {
      const data = await getDataCtatalog.getData(API_CATALOG);
    
     
      const productsStore = localstorageUtils.getProducts();
      let htmlCatalog = "";
      data.forEach(({ id, name, price, oldPrice, img }) => {
        let activeClass = "";
        let activeText = "";
        
        if (productsStore.indexOf(id) === -1) {
          activeText = this.labelAdd;
      } else {
        activeClass = " " + this.classNameActive;
        activeText = this.labelRemove;
      }
      htmlCatalog += `
      <li class='products-element'>
      <img class='products-element__img' src='${img}'/>
      <span class='products-element__price'>${price} Руб</span>
      <span class='products-element__oldprice'>${oldPrice}</span>
      <span class='products-element__name'>${name}</span>
      <button class='products-element__button${activeClass}'>
      ${activeText}
      </button>
      </li>
      `;
    });
    
    const html = `
    <ul class='products-container'>
    ${htmlCatalog}
    </ul>
    `;
    ROOT_PRODUCTS.innerHTML = html;
    productsNotebook.eventListener();
  }
  
}

const productsNotebook = new Products();

export default productsNotebook;
