import { ROOT_PRODUCTS } from "../../constants/root";
import localstorageUtils from "../../utils/localStorageUtils";
import { error } from "../Error/Error";
import { API_ALBUM, API_NOTEBOOKS, API_PENS, DATA_ALBUM, DATA_NOTEBOOKS, DATA_PENS } from "../../constants/api";
import { headerShop, productsStore } from "../Header/Header";
import { getDataCtatalog } from "../../utils/getDataApiCatalog";


class Products {
  constructor(data, ipProduct, options) {
    this.data = data;
    this.api = ipProduct;
    this.options = options;
    this.classNameActive = "products-element__button_active";
    this.labelAdd = "В корзину";
    this.labelRemove = "В корзине";
    
    
    this.removeCard();
    this.renderStorage();
  }
  
  
  async renderProducts(data) {
    const productsStore = localstorageUtils.getProducts();
    headerShop.render(productsStore.length);
    
    let htmlCatalog = "";
    
    data.forEach(({ _id, name, price, oldPrice, img }) => {
      if (oldPrice == undefined) {
        oldPrice = "";
      }
      
      let activeClass = "";
      let activeText = "";
      
      if (productsStore.indexOf(_id) === -1) {
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
      <button id='addproduct' class='products-element__button${activeClass}' data-id='${_id}'>
      ${activeText}
      </button>
      <button class='products-element__remove js-removeproduct' data-remove data-id='${_id}'>Удалить</button>
      </li>
      `;
    });
    
    const html = `
    <ul class='products-container'>
    ${htmlCatalog}
    </ul>
    `;
    ROOT_PRODUCTS.innerHTML = html;
  }
  async render() {
    const data = await this.data;
    data ? this.renderProducts(data) : error.render(ROOT_PRODUCTS);
  }
  renderStorage() {
    document.addEventListener("click", async (event) => {
      if (event.target.classList.contains("products-element__button")) {
        const id = event.target.getAttribute("data-id");
        const { pushProduct, products } = localstorageUtils.putProducts(id);
        
        if (pushProduct) {
          event.target.classList.add(this.classNameActive);
          event.target.innerHTML = this.labelRemove;
          headerShop.render((productsStore.length += 1));
        } else {
          event.target.classList.remove(this.classNameActive);
          event.target.innerHTML = this.labelAdd;
          headerShop.render((productsStore.length -= 1));
        }
      }
    });
  }
 
  removeCard() {
    document.addEventListener("click", async (event) => {
      if (event.target.classList.contains('js-removeproduct')) {
        const id = event.target.getAttribute("data-id");
        await getDataCtatalog.removeData(this.api, id);
      }
    });
  }
 
  
}


export const productsNotebook = new Products(DATA_NOTEBOOKS, API_NOTEBOOKS);
export const productsAlbum = new Products(DATA_ALBUM, API_ALBUM);
export const productsPens = new Products(DATA_PENS, API_PENS);

