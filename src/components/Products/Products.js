import { ROOT_PRODUCTS } from "../../constants/root";
import localstorageUtils from "../../utils/localStorageUtils";
import eventProduct from "../../utils/productEventUtils";
import { error } from "../Error/Error";
import { API_NOTEBOOKS, DATA_NOTEBOOKS } from "../../constants/api";
import deleteItem from "../../utils/deleteItem";

class Products {
  constructor() {
    this.classNameActive = "products-element__button_active";
    this.labelAdd = "В корзину";
    this.labelRemove = "В корзине";
  }

  renderProducts(data) {
    const productsStore = localstorageUtils.getProducts();
    let htmlCatalog = "";
    data.forEach(({ _id, id, name, price, oldPrice, img }) => {
      if (oldPrice == undefined) {
        oldPrice = "";
      }
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
      <button class='products-element__remove js-removeproduct' data-id='${_id}'>Удалить</button>
      </li>
      `;
    });

    const html = `
    <ul class='products-container'>
    ${htmlCatalog}
    </ul>
    `;
    ROOT_PRODUCTS.innerHTML = html;
    this.eventListener();
    deleteItem.removeItem(API_NOTEBOOKS,'js-removeproduct');

  }
  async render() {
    const data = await DATA_NOTEBOOKS;
    data ? this.renderProducts(data) : error.render(ROOT_PRODUCTS);
  }

  eventListener() {
    eventProduct.render();
  }
}

const productsNotebook = new Products();

export default productsNotebook;
